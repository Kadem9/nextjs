import { sql } from '@vercel/postgres';
import { formatCurrency } from './utils';

export async function fetchCardData() {
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
        const rendezVous = sql`
            SELECT
                rendezVous.id,
                rendezVous.patient_id,
                rendezVous.medecin_id,
                rendezVous.amount,
                rendezVous.status
            FROM rendezVous
            ORDER BY rendezVous.id DESC
            LIMIT 10
        `;

        return (await rendezVous).rows;
    } catch (error) {
        console.error('Erreur:', error);
        throw new Error('Impossible de fetch les rendez-vous.');
    }
}