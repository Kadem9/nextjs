import { sql } from '@vercel/postgres';
import { formatCurrency } from './utils';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchCardData() {
    noStore();
    try {
        const medecins = sql`SELECT COUNT(*) FROM users`;
        const patients = sql`SELECT COUNT(*) FROM patients`;
        const medicaments = sql`SELECT COUNT(*) FROM medicaments`;
        const rendezVous = sql`SELECT COUNT(*) FROM rendezVous`;

        const data = await Promise.all([
            medecins,
            patients,
            medicaments,
            rendezVous
        ]);

        const numberOfMedecins = Number(data[0].rows[0].count ?? '0');
        const numberOfPatients = Number(data[1].rows[0].count ?? '0');
        const numberOfMedicaments = Number(data[2].rows[0].count ?? '0');
        const numberOfRendezVous = Number(data[3].rows[0].count ?? '0');

        return {
            numberOfMedecins,
            numberOfPatients,
            numberOfMedicaments,
            numberOfRendezVous,
        };

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch card data.');
    }
}

// fonction pour trouver les 10 derniers rendez-vous
export async function fetchRendezVous() {
    try {
        console.log('Fetching revenue data...');
        await new Promise((resolve) => setTimeout(resolve, 3000));

        const rendezVous = sql`
            SELECT
                rendezVous.id,
                rendezVous.patient_id,
                rendezVous.medecin_id,
                rendezVous.amount,
                rendezVous.status,
                patients.name AS patient_name,
                users.name AS users_name
            FROM rendezVous
            LEFT JOIN patients ON rendezVous.patient_id = patients.id
            LEFT JOIN users ON rendezVous.medecin_id = users.id
            ORDER BY rendezVous.id DESC
            LIMIT 10
        `;
        console.log('Data fetch completed after 3 seconds.');
        return (await rendezVous).rows;
    } catch (error) {
        console.error('Erreur:', error);
        throw new Error('Impossible de fetch les rendez-vous.');
    }
}

export async function fetchMedicaments() {
    try {
        const medicaments = sql`
            SELECT
                medicaments.name,
                medicaments.stock
            FROM medicaments
            ORDER BY medicaments.name DESC
            LIMIT 10
        `;

        return (await medicaments).rows;
    } catch (error) {
        console.error('Erreur:', error);
        throw new Error('Impossible de fetch les medicaments.');
    }
}