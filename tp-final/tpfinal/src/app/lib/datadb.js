const users = [
    {
      id: '410544b2-4001-4271-9855-fec4b6a6442a',
      name: 'Medecin Dubois',
      email: 'dubois@medecine-international.com',
      password: '123456',
    },
    {
      id: '7c3ab249-1eae-4a71-9c47-8d4b86a8f22f',
      name: 'Medecin Dupont',
      email: 'dupont@medecine-international.com',
      password: '123456',
    },
    {
      id: 'f432a5d3-6d45-48ef-9b88-2d248cb5e819',
      name: 'Medecin Durand',
      email: 'durand@medecine-international.com', 
      password: '123456', },
       { id: 'e8c39290-39a9-4cb7-b7d6-483c59b1e47c', name: 'Medecin Martin', email: 'martin@medecine-international.com', password: '123456', }, 
       { id: 'a4ff1f55-3d1e-4d72-8a7a-7ac09815fb33', name: 'Medecin Lefebvre', email: 'lefebvre@medecine-international.com', password: '123456', }, 
       { id: '9d56ce5e-6b06-4a95-95e1-2380c3ff8087', name: 'Medecin Moreau', email: 'moreau@medecine-international.com', password: '123456', }, 
       { id: 'ceb74d6f-78b3-4cd9-bb96-4a7d0fc4d78d', name: 'Medecin Lambert', email: 'lambert@medecine-international.com', password: '123456', }, 
       { id: 'c6a1ec6d-eaac-4e11-8e0e-7c9a87d98c5e', name: 'Medecin Girard', email: 'girard@medecine-international.com', password: '123456', }
  ];
  
  const patients = [
    {
      id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
      name: 'Neymar JR',
      email: 'neyjr@foot.com',
      image_url: '/customers/neymar.png',
    },
    {
        id: '7c3ab249-1eae-4a71-9c47-8d4b86a8f22f',
        name: 'Lionel Messi',
        email: 'messi@foot.com',
        image_url: '/customers/messi.png',
        },
        {
        id: 'f432a5d3-6d45-48ef-9b88-2d248cb5e819',
        name: 'Cristiano Ronaldo',
        email: 'ronaldo@football.com',
        image_url: '/customers/ronaldo.png',
        },
        {
        id: '12e3bda0-02d2-4b1a-8f13-97b6235b0ee7',
        name: 'Kylian Mbappé',
        email: 'mbappe@soccer.com',
        image_url: '/customers/mbappe.png',
        },
        {
        id: 'a5e76cb1-9517-42dd-8132-9bf7d7684a14',
        name: 'Sergio Ramos',
        email: 'sergio@football.com',
        image_url: '/customers/sergio.png',
        },
        {
        id: 'f83c09f5-4387-4907-af9c-4b33f328462b',
        name: 'Robert Lewandowski',
        email: 'lewandowski@sports.com',
        image_url: '/customers/lewandowski.png',
        },
        {
        id: 'b9e75b42-6c74-487b-9c22-68374f962b0c',
        name: 'Antoine Griezmann',
        email: 'antoine@soccer.com',
        image_url: '/customers/griezmann.png',
        },
        {
        id: '6b3f80cc-232e-45e0-8e32-ae0495b9a175',
        name: 'Kevin De Bruyne',
        email: 'kevin@football.com',
        image_url: '/customers/debruyne.png',
        },
        {
        id: 'e8c39290-39a9-4cb7-b7d6-483c59b1e47c',
        name: 'Mohamed Salah',
        email: 'salah@soccer.com',
        image_url: '/customers/salah.png',
        },
        {
        id: 'a4ff1f55-3d1e-4d72-8a7a-7ac09815fb33',
        name: 'NGolo Kanté',
        email: 'kante@football.com',
        image_url: '/customers/kante.png',
        },
        {
        id: '9d56ce5e-6b06-4a95-95e1-2380c3ff8087',
        name: 'Gareth Bale',
        email: 'bale@soccer.com',
        image_url: '/customers/bale.png',
        },
        {
        id: 'ceb74d6f-78b3-4cd9-bb96-4a7d0fc4d78d',
        name: 'Eden Hazard',
        email: 'hazard@football.com',
        image_url: '/customers/hazard.png',
        },
        {
        id: 'c6a1ec6d-eaac-4e11-8e0e-7c9a87d98c5e',
        name: 'Harry Kane',
        email: 'kane@soccer.com',
        image_url: '/customers/kane.png',
        },
        {
        id: '356b6daa-6850-46e5-9e60-5b1215486dcd',
        name: 'Paul Pogba',
        email: 'pogba@football.com',
        image_url: '/customers/pogba.png',
        },
        {
        id: 'd0be27ea-2435-42f6-913c-263dc07d0e31',
        name: 'Luis Suárez',
        email: 'suarez@soccer.com',
        image_url: '/customers/suarez.png',
        },
        {
        id: '6a6a7ebc-d4e5-4a22-85b5-52dd212e2ac2',
        name: 'Thomas Müller',
        email: 'muller@football.com',
        image_url: '/customers/muller.png',
        },
        {
        id: '71a810f1-2df6-4a80-8f5c-78c5d9296f62',
        name: 'Sadio Mané',
        email: 'mane@soccer.com',
        image_url: '/customers/mane.png',
        },
        {
        id: '9a5e238a-5f6e-45c2-87bf-3d8e34b8b019',
        name: 'Bruno Fernandes',
        email: 'bruno@football.com',
        image_url: '/customers/bruno.png',
        },
        {
        id: 'f8044d3e-6c47-4d8f-b499-83c2a02b38a2',
        name: 'Raheem Sterling',
        email: 'sterling@soccer.com',
        image_url: '/customers/sterling.png',
        },
        {
        id: 'dc0ca8a5-29a3-4a3b-95c1-8ac36f2181e9',
        name: 'Jadon Sancho',
        email: 'sancho@football.com',
        image_url: '/customers/sancho.png',
        },
        {
        id: 'f7f7a7c7-727f-4fb7-a1d3-94e1be6bf9f9',
        name: 'Karim Benzema',
        email: 'benzema@soccer.com',
        image_url: '/customers/benzema.png',
        }
  ];
  
  const rendezVous = [
    {
      patient_id: patients[0].id,
      medecin_id: users[0].id,
      amount: 19900,
      status: 'pending',
      date: '2023-07-16',
    },
    {
        patient_id: patients[0].id,
        medecin_id: users[0].id,
        amount: 25000,
        status: 'pending',
        date: '2023-07-24',
      },
      {
        patient_id: patients[4].id,
        medecin_id: users[2].id,
        amount: 120000,
        status: 'pending',
        date: '2023-07-24',
      },
      {
        patient_id: patients[6].id,
        medecin_id: users[4].id,
        amount: 120000,
        status: 'pending',
        date: '2023-07-24',
      },
      {
        patient_id: patients[9].id,
        medecin_id: users[2].id,
        amount: 180000,
        status: 'pending',
        date: '2023-07-28',
      },
      {
        patient_id: patients[14].id,
        medecin_id: users[1].id,
        amount: 2789999,
        status: 'pending',
        date: '2023-08-01',
      },
      {
        patient_id: patients[14].id,
        medecin_id: users[6].id,
        amount: 32000,
        status: 'pending',
        date: '2023-08-03',
      },
      {
        patient_id: patients[12].id,
        medecin_id: users[7].id,
        amount: 278000,
        status: 'pending',
        date: '2023-08-06',
      }
  ];
  
  const medicaments = [
    { name: 'Doliprane', stock: 2000 },
    { name: 'Ibuprofène', stock: 1500 },
    { name: 'Paracétamol', stock: 3000 },
    { name: 'Aspirine', stock: 2500 },
    { name: 'Efferalgan', stock: 2000 },
    { name: 'Voltarène', stock: 1500 },
    { name: 'Spasfon', stock: 3000 },
    { name: 'Dafalgan', stock: 2500 },
    { name: 'Nurofen', stock: 2000 },
    { name: 'Advil', stock: 1500 },
    { name: 'Dolirhume', stock: 3000 },
    { name: 'Strepsils', stock: 2500 },
    { name: 'Humex', stock: 2000 },
    { name: 'Actifed', stock: 1500 },
    { name: 'Fervex', stock: 3000 },
    { name: 'Rhino Horn', stock: 2500 },
    { name: 'Vicks', stock: 2000 },
  ];
  
  module.exports = {
    users,
    patients,
    rendezVous,
    medicaments
  };
  