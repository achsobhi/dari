import { db } from "@/prisma/client";
import formidable from "formidable";
import { NextResponse } from "next/server";

export async function GET() {
  const annonces = await db.annonce.findMany({
    select: {
      Certificat_de_propriété: true,
      localisation: true,
      user_id: true,
      prix:true,
      id: true,
      rating:true,
      surface:true,
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
      user:{
        select:{
          nom:true,
          role:true,

        }
      }
    },
  });
  const categories = await db.annonce.findMany({
    distinct: ["type_appartement"],
    select: {
      type_appartement: true,
    },
  });
  return NextResponse.json({annonces:annonces,categories:categories})
}

export async function POST(req) {
  const data = await req.json();
  const form = new formidable.IncomingForm();
}
