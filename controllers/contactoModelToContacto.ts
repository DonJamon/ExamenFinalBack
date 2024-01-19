import { contactoModelType } from "../db/Contacto.ts";
import { Contacto } from "../types.ts";

export const contactoModelToContacto = (contactoModel: contactoModelType): Contacto => {
  return {
    FullName: contactoModel.FullName,
    Phone: contactoModel.Phone,
    Country: contactoModel.Country,
    Time: contactoModel.Time,
  };
};
