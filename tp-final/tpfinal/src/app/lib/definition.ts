export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
};

export type Patients = {
    id: string;
    name: string;
    email: string;
    image_url: string;
};

export type Medicaments = {
    name: string;
    stock: number;
}

export type RendezVous = {
    patient_id: string;
    medecin_id: string;
    amount: number;
    status: string;
    date: string;
}

export type CustomerField = {
    id: string;
    name: string;
};
