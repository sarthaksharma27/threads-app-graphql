import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4'; // Import expressMiddleware
import { Prisma } from './lib/db';

async function init() {
    const app = express();
    const PORT = Number(process.env.PORT) || 8000;

    app.use(express.json()); // GraphQL by default uses JSON

    // Create GraphQL Server
    const gqlServer = new ApolloServer({
        typeDefs: `
            type Query {
                hello: String
                say(name: String): String
            }
            type Mutation {
                createUser(firstName: String!, lastName: String!, email: String!, password: String!): Boolean
            }
        `, // Schema
        resolvers: {
            Query: {
                hello: () => 'Hey there, I am a GraphQL server',
                say: (_, { name }: { name: string }) => `Hey ${name}, How are you?`,
            },
            Mutation: {
                createUser: async (_, { firstName, lastName, email, password }: {
                    firstName: string; lastName: string; email: string; password: string;
                }) => {
                    await Prisma.user.create({
                        data: {
                            email,
                            firstName,
                            lastName,
                            password,
                            salt: 'random_salt',
                        },
                    });
                    return true;
                },
            },
        },
    });

    // Start the GraphQL server
    await gqlServer.start();

    app.get('/', (req, res) => {
        res.json({ message: 'Server is up and running' });
    });

    // Expose the GraphQL endpoint using your specified line
    app.use('/graphql', expressMiddleware(gqlServer));

    app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));
}

init();
