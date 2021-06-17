## GraphQL - API

A simple example for GraphQL, Node, and Apollo Server.

**How to Run it?**

- `npm install -g nodemon` to install nodemon globally.
- `npm i` to install packages.
- `npm start` to run it.
  Then go to `http://localhost:4000/graphql`

**Folder Structure**
This project uses the repository pattern, that abstracts into different layers.

- `repositories` Contains all the configuration, models and interaction between the API and DB.
- `services` Contains methods for our **endpoints** aka **schemas** and interactes with the repository layer.
- `schemas` A normal graphql schemas.
  - Each schema has a folder inside the **schemas** folder with two files.
  - `schemaName.resolvers.js` All the resolvers for the types.
  - `schemaName.types.js` All the types, mutations, inputs, etc. For our schemas.
  - `rootQuery.js` Container for all types and resolvers of our schemas.

### For more information

- [Modularizing your GraphQL schema code - Apollo Blog (apollographql.com)](https://www.apollographql.com/blog/backend/schema-design/modularizing-your-graphql-schema-code/)
- [Resolvers - Apollo Server - Apollo GraphQL Docs](https://www.apollographql.com/docs/apollo-server/data/resolvers/)
- [GraphQL Full Course - Novice to Expert - YouTube](https://www.youtube.com/watch?v=ed8SzALpx1Q&t=13559s)
- [GraphQL Schemas - GraphQL](https://graphql.org/learn/schema/)
