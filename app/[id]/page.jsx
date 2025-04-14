'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { use } from 'react'

export default function AnnonceDetail({ params }) {
  const { id } = use(params)  // unwrap the promise

  const [annonce, setAnnonce] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`http://localhost:3000/api/annonce/${id}`)
      .then((res) => {
        const { annonce } = res.data
        setAnnonce(annonce)
        setLoading(false)
      })
      .catch((err) => {
        console.error("Error fetching annonce:", err.response?.data || err.message)
        setLoading(false)
      })
  }, [id])

  if (loading) return <div className="text-center mt-20 text-gray-600">Chargement...</div>
  if (!annonce) return <div className="text-center mt-20 text-red-500">Annonce introuvable.</div>
    return (
    <div className="max-w-5xl mx-auto px-4 py-10 relative top-16 ">
      {console.log(annonce)}
      {/* Image Gallery */}
      {annonce.images?.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {annonce.images.map((img) => (
            <div key={img.id} className="overflow-hidden rounded-xl shadow">
              <img src={img.path} alt="image" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>
      )}

      {/* Details Card */}
      <div className="bg-white rounded-xl shadow p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🏡 Détails de l'annonce</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 text-gray-700">
          <p><span className="font-semibold">📍 Localisation:</span> {annonce.localisation}</p>
          <p><span className="font-semibold">🛏 Chambres:</span> {annonce.nb_chambre}</p>
          <p><span className="font-semibold">🚿 Douches:</span> {annonce.nb_douche}</p>
          <p><span className="font-semibold">📐 Surface:</span> {annonce.surface} m²</p>
          <p><span className="font-semibold">💰 Prix:</span> {annonce.prix} DH</p>
          <p><span className="font-semibold">⭐ Note:</span> {annonce.rating}</p>
          <p><span className="font-semibold">🛋 Meublé:</span> {annonce.meuble ? 'Oui' : 'Non'}</p>
          <p><span className="font-semibold">📄 Type annonce:</span> {annonce.type_annonce}</p>
          <p><span className="font-semibold">🏢 Type appartement:</span> {annonce.type_appartement}</p>
        </div>
      </div>

      {/* Owner Info */}
      {annonce.user && (
        <div className="bg-gray-50 border-l-4 border-blue-500 rounded-xl shadow px-6 py-4">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">👤 Informations du bailleur</h3>
          <p><span className="font-medium text-gray-800">Nom:</span> {annonce.user.nom}</p>
          <p><span className="font-medium text-gray-800">Rôle:</span> {annonce.user.role}</p>
        </div>
      )}
    </div>
  )
}
