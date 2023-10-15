import express from 'express';
import { expressMiddleware } from '@apollo/server/express4'; 
import createApolloGraphqlServer from './graphql';

async function init() {
    const app = express();
    const PORT = Number(process.env.PORT) || 8000;

    app.use(express.json()); // GraphQL by default uses JSON

    

    app.get('/', (req, res) => {
        res.json({ message: 'Server is up and running' });
    });

    // Expose the GraphQL endpoint using your specified line
    app.use('/graphql', expressMiddleware(await createApolloGraphqlServer()));

    app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));
}

init();
