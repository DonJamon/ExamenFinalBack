// The GraphQL schema
export const typeDefs = `#graphql

  type Contacto {
   FullName: String!
   Phone: String!
   Country: String
   Time: String
  }

  type Query {
    Contacto(id: ID!): Contacto!
    Contactos: [Contacto!]!
  }
  type Mutation {
    addContacto(FullName: String!,Phone: String!,): Contacto!
    deleteContacto(id: ID!): Contacto!
  }
`;
