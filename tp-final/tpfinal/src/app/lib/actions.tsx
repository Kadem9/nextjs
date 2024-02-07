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
    picture_url: z.object({
    }),
});

const CreatePatient = FormSchema.omit({ id: true });

export type State = {
    errors?: {
        name?: string[];
        email?: string[];
    };
    message?: string | null;
};

export async function createPatient(formData: FormData) {
    const { name, email } = CreatePatient.parse({
        name: formData.get('nameClient'),
        email: formData.get('mailClient'),
    });

    await sql`
    INSERT INTO patients (name, email, image_url)
    VALUES (${name}, ${email}, '/null.png')
  `;
}