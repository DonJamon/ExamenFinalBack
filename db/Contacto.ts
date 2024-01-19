import mongoose from "mongoose";
import { Contacto } from "../types.ts";
const Schema = mongoose.Schema;

const contactoSchema = new Schema({
  FullName: { type: String, required: true },
  Phone: { type: String, required: true },
  Country: { type: String, required: false },
  Time: { type: String, required: false },
});

export type contactoModelType = mongoose.Document & Omit<Contacto, "id">;

export const contactoModel = mongoose.model<contactoModelType>(
  "Contacto",
  contactoSchema,
);
