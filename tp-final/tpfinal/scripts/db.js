const { db } = require('@vercel/postgres');
const {
    users,
    patients,
    rendezVous,
    medicaments,
} = require('../src/app/lib/datadb');
const bcrypt = require('bcrypt');

async function seedMedecins(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Medecin crée`);

    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedRendezVous(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "invoices" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS rendezVous (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    patient_id UUID NOT NULL,
    medecin_id UUID NOT NULL,
    amount INT NOT NULL,
    status VARCHAR(255) NOT NULL,
    date DATE NOT NULL
  );
`;

    console.log(`rdv table ok`);

    const insertedRendezvous = await Promise.all(
      rendezVous.map(
        (rdv) => client.sql`
        INSERT INTO rendezVous (patient_id, medecin_id, amount, status, date)
        VALUES (${rdv.patient_id}, ${rdv.medecin_id}, ${rdv.amount}, ${rdv.status}, ${rdv.date})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedRendezvous.length} rdv`);

    return {
      createTable,
      invoices: insertedRendezvous,
    };
  } catch (error) {
    console.error('Error seeding rdv:', error);
    throw error;
  }
}

// ajout de la table patient
async function seedPatient(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS patients (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        image_url VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Patients table ok`);

    
    const insertedPatients = await Promise.all(
      patients.map(
        (patient) => client.sql`
        INSERT INTO patients (id, name, email, image_url)
        VALUES (${patient.id}, ${patient.name}, ${patient.email}, ${patient.image_url})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedPatients.length} patients`);

    return {
      createTable,
      patients: insertedPatients,
    };
  } catch (error) {
    console.error('Error seeding patients:', error);
    throw error;
  }
}

async function seedMedicaments(client) {
  try {
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS medicaments (
        name VARCHAR(255) NOT NULL,
        stock INT NOT NULL
      );
    `;

    console.log(`Created "medicaments" table`);

    const insertedMedicament = await Promise.all(
      medicaments.map(
        (med) => client.sql`
        INSERT INTO medicaments (name, stock)
        VALUES (${med.name}, ${med.stock});
      `,
      ),
    );

    console.log(`Seeded ${insertedMedicament.length} medicaments`);

    return {
      createTable,
      medicaments: insertedMedicament,
    };
  } catch (error) {
    console.error('Error seeding medicaments:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedMedecins(client);
  await seedPatient(client);
  await seedRendezVous(client);
  await seedMedicaments(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
