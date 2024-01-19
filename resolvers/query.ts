import { GraphQLError } from "graphql";
import { contactoModel, contactoModelType } from "../db/Contacto.ts";
export const Query = {
  Contactos: async (): Promise<contactoModelType[]> => {
    const contacto = await contactoModel.find().exec();
    return contacto;
  },
  Contacto: async (
    _: unknown,
    args: { id: string },
  ): Promise<contactoModelType> => {
    const contacto = await contactoModel.findById(args.id);
    if (!contacto) {
      throw new GraphQLError(`Contacto not found with id ${args.id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return contacto;
  },
};
