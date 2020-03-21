// GraphQL query language and the graphql server
const { gql, ApolloServer } = require('apollo-server')  

// We use backticks so that we can spread it out over multiple lines
// gql is a tag that means the template literal string is recognised as graphql code  
// If the Graphql extension is installed in VSCode, it will get syntax highlighting
// Our constant, typeDefs has been parsed and transformed into a graphql schema
const typeDefs = gql`
    
    schema {
        query: Query
    }

    type Query {
        greeting: String!
    }
`;

/* For everything in the typeDefs (i.e. the schema), we need a resolver i.e. an object that 
   contains a property for every type in the typeDefs i.e. Query, Mutation, Subscription
   For each property of Query (i.e. the queries themselves), we need a property that is
   a resolver function.  This function can be as simple as returning a string, or may be an 
   async func to fetch data from the database
    
*/
const resolvers = {
    Query: {
        greeting: () => 'Hello everyone - I am the response from the greeting query'
    }
}

const server = new ApolloServer( { typeDefs, resolvers });
server.listen( { port: 4000 })
.then( ( { url } ) => {
    console.log('The server is running on ' + url)
} )