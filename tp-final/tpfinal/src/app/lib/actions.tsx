'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { signIn } from '../../../auth';
import { AuthError } from 'next-auth';

const FormSchema = z.object({
    id: z.string(),
    name: z.string({
        invalid_type_error: 'Merci d\'entrer un nom valide.',
    }),
    email: z.string({
        invalid_type_error: 'Merci d\'entrer un mail valide.',
    }),
    picture_url: z.null({
    }),
});

const CreatePatient = FormSchema.omit({ id: true });

export type State = {
    errors?: {
        name?: string[];
        email?: string[];
        picture_url?: string[];
    };
    message?: string | null;
};

export async function createPatient(formData: FormData) {
    const { name, email, picture_url } = CreatePatient.parse({
        name: formData.get('nameClient'),
        email: formData.get('mailClient'),
        picture_url: formData.get('picture_url'),
    });

    await sql`
    INSERT INTO patients (name, email, image_url)
    VALUES (${name}, ${email}, '/img/null.png')
  `;

    revalidatePath('/patient');
    redirect('/patient');
}

const UpdatePatient = FormSchema.omit({ id: true, picture_url: true });


export async function updatePatient(
    id: string,
    formData: FormData,
) {
    console.log('hello')
    const validatedFields = UpdatePatient.safeParse({
        name: formData.get('nameClient'),
        email: formData.get('mailClient'),
    });
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: ' Merci de remplir les champs correctement.',
        };
    }

    const { name, email } = validatedFields.data;
    console.log(`
    UPDATE patients
    SET name = ${name}, email = ${email}
    WHERE id = ${id}
`)
    try {
        await sql`
        UPDATE patients
        SET name = ${name}, email = ${email}
        WHERE id = ${id}
      `;
    } catch (error) {
        return { message: 'Database Error: Failed to Update Invoice.' };
    }

    revalidatePath('/patient');
    redirect('/patient');
}

export async function deletePatient(id: string) {
    await sql`DELETE FROM patients WHERE id = ${id}`;
    revalidatePath('/patients');
}

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Identifiants incorrects.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}