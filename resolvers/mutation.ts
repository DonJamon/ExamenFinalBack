import { GraphQLError } from "graphql";
import { contactoModel, contactoModelType } from "../db/Contacto.ts";

export const Mutation = {
  addContacto: async (
    _: unknown,
    args: { FullName: string, Phone: string },
  ): Promise<contactoModelType> => {
    const contacto = {
      FullName: args.FullName,
      Phone: args.Phone,
    };
    const newcontacto = await contactoModel.create(contacto);
    return newcontacto;
  },
  deleteContacto: async (
    _: unknown,
    args: { id: string },
  ): Promise<contactoModelType> => {
    const contacto = await contactoModel.findByIdAndDelete(args.id);
    if (!contacto) {
      throw new GraphQLError(`Contacto not found with id ${args.id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return contacto;
  },
};
