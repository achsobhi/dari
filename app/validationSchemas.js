import { z } from "zod";
export const annonceSchema = z.object({
  surface: z.string().min(2),
  nb_chambre: z.string().min(1).max(1),
  nb_douche: z.string().min(1).max(1),
  localisation: z.string().min(1),
  type_appartement: z.string().min(1),
  type_annonce: z.string().min(1),
  meuble: z.boolean(),
  prix: z.string().min(1),
  ville: z.string().min(1),
});
