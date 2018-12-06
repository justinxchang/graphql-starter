
const { GraphQLServer } = require('graphql-yoga')

const resolvers = require('./schema/resolvers')

const options = {
    port: 3050,
    endpoint: '/graphql',
    playground: '/graphiql'
}

const server = new GraphQLServer({
    resolvers,
    typeDefs: 'server/schema/typeDefs.graphql',
    context: (req) => {
        return {
            ...req.request
        }
    }
})

server.start(options, () => {                   //basically like app.listen()
    console.log(`Running on port: ${options.port}`)
})










// server.middlewares.someMiddleware = expressSession({})    look this up if you're interested in sessions, not needed for this