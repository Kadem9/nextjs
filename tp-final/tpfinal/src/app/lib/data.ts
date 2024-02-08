import { sql } from '@vercel/postgres';
import { formatCurrency } from './utils';
import { unstable_noStore as noStore } from 'next/cache';
import { Medicaments, PatientForm, Patients, RendezVous, User } from './definition';

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

        const rendezVous = sql<RendezVous>`
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
        const medicaments = sql<Medicaments>`
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

// fonction pr retrouver les patients avc un filtre de recherche

const ITEMS_PER_PAGE = 5; // nbre de patients par page
export async function fetchFiltrePatients(
    query: string,
    currentPage: number,
) {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    noStore();
    console.log(query, currentPage, offset)
    try {
        const patients = await sql<Patients>`
            SELECT
                patients.id,
                patients.name,
                patients.email,
                patients.image_url
            FROM patients
            WHERE
                patients.name LIKE ${`%${query}%`} 
                OR patients.email LIKE ${`%${query}%`}
            ORDER BY patients.name DESC
            LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

        return patients.rows;
    } catch (error) {
        console.error('Erreur db:', error);
        throw new Error('Impossible de fetch les patients.');
    }
}

export async function fetchPatientsPages(query: string) {
    noStore();
    try {
        const count = await sql`SELECT COUNT(*)
      FROM patients
      WHERE
        patients.name LIKE ${`%${query}%`} OR
        patients.email LIKE ${`%${query}%`}
    `;

        const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
        return totalPages;
    } catch (error) {
        console.error('Erreur db:', error);
        throw new Error('Impossible de fetch les patients.');
    }
}


export async function fetchPatientById(id: string) {

    noStore();
    console.log(id)
    try {
        const data = await sql<PatientForm>`
        SELECT
          patients.id,
          patients.name,
          patients.email
        FROM patients
        WHERE patients.id = ${id};
      `;

        const patient = data.rows.map((patient) => ({
            ...patient
        }));

        return patient[0];
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch patient.');
    }
}