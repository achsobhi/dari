import React from 'react'
import AnnonceCard from './card';

const ListAnnonces = () => {
    const testAnnonces = [
        {
          id: 1,
          image: "/images/image1.jpeg",
          images: ["/images/image1.jpeg", "/images/image2.jpeg"],
          title: "Appartement moderne avec vue sur la mer",
          location: "El Jadida, Sidi Bouzid",
          owner: "Achraf propriétaire",
          date: "Mar 21/25",
          rating: 4.8,
          beds: 3,
          baths: 1,
          size: "96m²",
          price: "150,00",
        },
        {
          id: 2,
          image: "/images/image3.jpeg",
          images: ["/images/image3.jpeg", "/images/image4.jpeg"],
          title: "Maison de ville avec jardin",
          location: "Casablanca, Ain Sebaa",
          owner: "Fatima propriétaire",
          date: "Mar 15/25",
          rating: 4.5,
          beds: 4,
          baths: 2,
          size: "120m²",
          price: "200,00",
        },
        {
          id: 3,
          image: "/images/image5.jpeg",
          images: ["/images/image5.jpeg", "/images/image6.jpeg"],
          title: "Appartement en résidence avec piscine",
          location: "Rabat, Hassan",
          owner: "Mohammed propriétaire",
          date: "Mar 10/25",
          rating: 4.9,
          beds: 2,
          baths: 1,
          size: "80m²",
          price: "100,00",
        },
      ];
      
  return (
    
    <div className="relative w-full flex flex-col items-center space-y-16 p-10">
        <div
        className="flex w-full justify-center items-center rounded-xl  "
        style={{
          height: "85px",
          backgroundColor: "rgba(255, 94, 91, 0.2)",
        }}
      >
        {" "}
        annonces 
      </div>
        <div className="flex  gap-2">
        {testAnnonces.map((annonce) => (
          <AnnonceCard key={annonce.id} annonce={annonce} />
        ))}
      </div>{" "}
      
      
    </div>
  )
}

export default ListAnnonces
