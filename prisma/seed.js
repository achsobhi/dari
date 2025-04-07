const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Optional cleanup (for dev)
  await prisma.annonce.deleteMany();
  await prisma.user.deleteMany();
  await prisma.image.deleteMany(); // Optional: Remove previous images

  // Create users
  const john = await prisma.user.create({
    data: { 
      nom: 'John', prenom: 'Doe', cin: 'CIN12345', tel: 1234567890, email: 'john.doe@example.com', password: 'password', role: 'LOCATAIRE'
    }
  });

  const jane = await prisma.user.create({
    data: { 
      nom: 'Jane', prenom: 'Smith', cin: 'CIN54321', tel: 9876543210, email: 'jane.smith@example.com', password: 'password', role: 'BAILLEURE' 
    }
  });

  // Create 20 separate annonces with images
  await prisma.annonce.create({
    data: {
      Certificat_de_propriété: 'Cert1001',
      ville: 'Paris',
      surface: 80,
      nb_chambre: 3,
      nb_douche: 2,
      localisation: 'City Center',
      type_appartement: 'APPARTEMENT',
      type_annonce: 'MENSUELLE',
      meuble: true,
      prix: 1200,
      rating: 4.5,
      user_id: john.id,
      images: {
        create: [
          { path: '/images/image1.jpeg' },
          { path: '/images/image2.jpeg' }
        ]
      }
    }
  });

  await prisma.annonce.create({
    data: {
      Certificat_de_propriété: 'Cert1002',
      ville: 'Lyon',
      surface: 75,
      nb_chambre: 2,
      nb_douche: 1,
      localisation: 'Suburbs',
      type_appartement: 'STUDIO',
      type_annonce: 'HEBDOMADAIRE',
      meuble: false,
      prix: 850,
      rating: 3.8,
      user_id: jane.id,
      images: {
        create: [
          { path: '/images/image3.jpeg' },
          { path: '/images/image4.jpeg' }
        ]
      }
    }
  });

  await prisma.annonce.create({
    data: {
      Certificat_de_propriété: 'Cert1003',
      ville: 'Marseille',
      surface: 65,
      nb_chambre: 2,
      nb_douche: 1,
      localisation: 'Near the beach',
      type_appartement: 'MAISON',
      type_annonce: 'MENSUELLE',
      meuble: true,
      prix: 1000,
      rating: 4.0,
      user_id: john.id,
      images: {
        create: [
          { path: '/images/image5.jpeg' },
          { path: '/images/image6.jpeg' }
        ]
      }
    }
  });

  await prisma.annonce.create({
    data: {
      Certificat_de_propriété: 'Cert1004',
      ville: 'Nice',
      surface: 90,
      nb_chambre: 4,
      nb_douche: 2,
      localisation: 'City Center',
      type_appartement: 'APPARTEMENT',
      type_annonce: 'HEBDOMADAIRE',
      meuble: true,
      prix: 1300,
      rating: 4.7,
      user_id: jane.id,
      images: {
        create: [
          { path: '/images/image7.jpeg' },
          { path: '/images/image8.jpeg' }
        ]
      }
    }
  });

  await prisma.annonce.create({
    data: {
      Certificat_de_propriété: 'Cert1005',
      ville: 'Bordeaux',
      surface: 70,
      nb_chambre: 3,
      nb_douche: 1,
      localisation: 'Old Town',
      type_appartement: 'STUDIO',
      type_annonce: 'MENSUELLE',
      meuble: false,
      prix: 950,
      rating: 4.2,
      user_id: john.id,
      images: {
        create: [
          { path: '/images/image9.jpeg' },
          { path: '/images/image10.jpeg' }
        ]
      }
    }
  });

  await prisma.annonce.create({
    data: {
      Certificat_de_propriété: 'Cert1006',
      ville: 'Toulouse',
      surface: 55,
      nb_chambre: 1,
      nb_douche: 1,
      localisation: 'Downtown',
      type_appartement: 'APPARTEMENT',
      type_annonce: 'HEBDOMADAIRE',
      meuble: true,
      prix: 800,
      rating: 3.5,
      user_id: jane.id,
      images: {
        create: [
          { path: '/images/image11.jpeg' },
          { path: '/images/image12.jpeg' }
        ]
      }
    }
  });

  await prisma.annonce.create({
    data: {
      Certificat_de_propriété: 'Cert1007',
      ville: 'Lille',
      surface: 85,
      nb_chambre: 3,
      nb_douche: 2,
      localisation: 'Near Park',
      type_appartement: 'MAISON',
      type_annonce: 'MENSUELLE',
      meuble: true,
      prix: 1150,
      rating: 4.6,
      user_id: john.id,
      images: {
        create: [
          { path: '/images/image13.jpeg' },
          { path: '/images/image14.jpeg' }
        ]
      }
    }
  });

  await prisma.annonce.create({
    data: {
      Certificat_de_propriété: 'Cert1008',
      ville: 'Paris',
      surface: 95,
      nb_chambre: 4,
      nb_douche: 2,
      localisation: 'Near Eiffel Tower',
      type_appartement: 'APPARTEMENT',
      type_annonce: 'HEBDOMADAIRE',
      meuble: false,
      prix: 1400,
      rating: 4.8,
      user_id: jane.id,
      images: {
        create: [
          { path: '/images/image15.jpeg' },
          { path: '/images/image16.jpeg' }
        ]
      }
    }
  });

}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
