yarn init
yarn add typescript -D
yarn add express
npx tsc --init
change ts confuguration
yarn add @types/express -D
yarn add tsc-watch -D
add -   "scripts": {
    "start": "node build/index.js",
    "dev": "tsc-watch --onSuccess \"npm start\""
  },
yarn add @apollo/server
yarn add graphql
npx gitignore Node
then all git commad till push that track changes
docker compose up
docker compose up -d
yarn add prisma typescript ts-node @types/node -D
npx prisma init
npx prisma migrate dev --name create_user_table
@prisma/client