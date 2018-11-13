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
      // console.log(chalk.bold.red('<server.js:resolver>apollo req object', headers))
      return 'hello, world'
    }
  }
}
// let endpoint = `http://${process.env.URL}:${process.env.PORT}/${process.env.API}` || `http://localhost:4000/graphql`

// console.log('process server', endpoint)
// console.log('process argv', process.argv)

const SERVER = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    req,
  })
});

module.exports = SERVER
