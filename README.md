# Thread App Backend

This is the backend component of our Thread App, implemented using GraphQL, Node.js, Express, Docker, Postgres, Prisma, and TypeScript. It provides the server-side functionality for handling threads and user data.

## Getting Started

Follow these steps to set up the project on your local machine.

### Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/)

### Installation

1. Clone the repository:

   ```shell
   git clone <repository_url>
   cd thread-app-backend
   ```

2. Install project dependencies:

   ```shell
   yarn
   ```

3. Initialize TypeScript configuration:

   ```shell
   npx tsc --init
   ```

4. Modify `tsconfig.json` as needed for your project.

5. Add TypeScript type definitions for Express:

   ```shell
   yarn add @types/express -D
   ```

6. Install tsc-watch for automatic TypeScript compilation during development:

   ```shell
   yarn add tsc-watch -D
   ```

7. Update the `package.json` scripts section to include "start" and "dev":

   ```json
   "scripts": {
     "start": "node build/index.js",
     "dev": "tsc-watch --onSuccess \"npm start\""
   }
   ```

8. Install Apollo Server and GraphQL:

   ```shell
   yarn add @apollo/server graphql
   ```

9. Create a `.gitignore` file:

   ```shell
   npx gitignore Node
   ```

### Database Setup

10. Start the Dockerized Postgres and Prisma setup:

    ```shell
    docker-compose up
    ```

11. After running the Docker containers, add Prisma, TypeScript, and @types/node:

    ```shell
    yarn add prisma typescript ts-node @types/node -D
    ```

12. Initialize Prisma:

    ```shell
    npx prisma init
    ```

13. Create a migration for the user table:

    ```shell
    npx prisma migrate dev --name create_user_table
    ```

14. Generate Prisma Client:

    ```shell
    npx prisma generate
    ```

### Running the Application

Now you can start the development server:

```shell
yarn dev
```

The server will run with automatic TypeScript compilation and will be accessible at `http://localhost:4000`. You can start building your GraphQL schema, resolvers, and connect it to your frontend.

## Prisma Client

Prisma Client is used for database access. You can import it like this:

```javascript
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
```




