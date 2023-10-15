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
docker compose up