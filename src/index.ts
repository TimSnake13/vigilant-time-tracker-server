import { ApolloServer } from "apollo-server";
import { context } from "./context";
import schema from "./schema";

const server = new ApolloServer({ context, schema });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// async function main() {
//   // ... you will write your Prisma Client queries here

//   // await prisma.user.create({
//   //   data: {
//   //     name: "Tan",
//   //     email: "tan@gmail.io",
//   //     posts: {
//   //       create: { title: "Hello World" },
//   //     },
//   //     profile: {
//   //       create: { bio: "This is my bio" },
//   //     },
//   //   },
//   // });

//   const allUsers = await prisma.post.findMany();
//   console.log(allUsers);
// }

// main()
//   .catch((e) => {
//     throw e;
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
