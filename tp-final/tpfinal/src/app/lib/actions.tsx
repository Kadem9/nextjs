'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

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
    VALUES (${name}, ${email}, '/null.png')
  `;

    revalidatePath('/patient');
    redirect('/patient');
}

const UpdatePatient = FormSchema.omit({ id: true, date: true });


export async function updatePatient(
    id: string,
    prevState: State,
    formData: FormData,
) {
    const validatedFields = UpdatePatient.safeParse({
        name: formData.get('nameClient'),
        email: formData.get('mailClient'),
        picture_url: formData.get('picture_url'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Update Invoice.',
        };
    }

    const { name, email, picture_url } = validatedFields.data;

    try {
        await sql`
        UPDATE patients
        SET name = ${name}, email = ${email}, picture_url = ${status}
        WHERE id = ${id}
      `;
    } catch (error) {
        return { message: 'Database Error: Failed to Update Invoice.' };
    }

    revalidatePath('/patient');
    redirect('/patient');
}