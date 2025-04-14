"use client";
import { useEffect, useState } from "react";
import axios from "axios";

import AnnonceCard from "./card";
import Seperator from "./seperator";

const ListAnnonces = () => {
  const [annonces, setAnnonces] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/annonce")
      .then((res) => {
        const { annonces } = res.data;
        setAnnonces(annonces);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <div className="w-full  py-4 px-2">
      <Seperator title={"all Annonces"} />{" "}
      <div className="flex gap-4 overflow-x-auto">
        {annonces.map((annonce) => (
          <div key={annonce.id} className="min-w-[300px]">
            <AnnonceCard annonce={annonce} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListAnnonces;
