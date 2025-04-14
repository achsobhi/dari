import { db } from "@/prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;

  const annonce = await db.annonce.findUnique({
    where: {
      id: parseInt(id),
    },
    select: {
      localisation: true,
      prix: true,
      id: true,
      rating: true,
      surface: true,
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
      user: {
        select: {
          nom: true,
          role: true,
        },
      },
    },
  });

  if (!annonce) {
    return NextResponse.json({ error: "Annonce not found" }, { status: 404 });
  }

  return NextResponse.json({annonce:annonce});
}
