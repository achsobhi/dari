'use client'
import  { useEffect,useState} from 'react';
import axios from 'axios';

import AnnonceCard from './card';

const ListAnnonces = () => {
  const [annonces, setAnnonces] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/api/annonce')
      .then((res) => {
        setAnnonces(res.data);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      });
  }, []);
      
  return (
    
    <div className=" w-full overflow-x-auto whitespace-nowrap scrollbar-hide py-4 px-2">
  <div className="inline-flex gap-4">
    {annonces.map((annonce) => (
      <div key={annonce.id} className="inline-block">
        <AnnonceCard annonce={annonce} />
      </div>
    ))}
  </div>
</div>

  )
}

export default ListAnnonces
