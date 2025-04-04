import { annonceSchema } from "@/app/validationSchemas";
import { db } from "@/prisma/client";
import formidable from "formidable";

export async function GET() {
  const annonces = await db.annonce.findMany({
    select: {
      Certificat_de_propriété: true,
      localisation: true,
      user_id: true,
      id: true,
      nb_chambre: true,
      nb_douche: true,
      meuble: true,
      type_annonce: true,
      type_appartement: true,
      images: {
        select: {
          id: true,
          path: true,
        },
      },
    },
  });
  return Response.json(annonces);
}
export async function POST(req) {
  const data = await req.json();
  const form = new formidable.IncomingForm();
}
