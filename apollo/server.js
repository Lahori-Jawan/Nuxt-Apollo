const { gql,ApolloServer } = require('apollo-server-express');
const chalk = require('chalk');

const typeDefs = gql`
  type Query {
    hello: String
  }
`
const resolvers = {
  Query: {
    hello (parent, args, ctx) {
      let headers = JSON.stringify(ctx.req.headers)
      console.log(chalk.bold.red('apollo req object', headers))
      return 'hello, world'
    }
  }
}

const SERVER = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    req,

  }),
  playground: {
    endpoint: `http://localhost:3000/graphql`,
  }
});

module.exports = SERVER
