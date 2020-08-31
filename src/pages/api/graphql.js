// import { ApolloServer, gql } from 'apollo-server-micro'

// const apiBase = 'https://api.twitch.tv/helix'
// const clientId = 's8kiuunc8o3dzofforg4mni87haedx'
// const clientSecret = '8qqb0e05rqlecjlyhnp48ytii37uec'

// const request = async () => {
//   try {
//     const getToken = await fetch(
//       `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`,
//       {
//         method: 'POST',
//       }
//     )

//     const response = await getToken.json()
//     return response.access_token
//   } catch (err) {
//     console.log(err)
//   }
// }

// const typeDefs = gql`
//     type Query {

//     }
// `
// const resolvers = {
//   Query: {
//     async twitchStreams() {
//       const authToken = await request()
//       const response = await fetch(`${apiBase}/streams?game_id=33214`, {
//         headers: {
//           Authorization: 'Bearer ' + authToken,
//           'Client-ID': clientId,
//         },
//       })
//       return response.json()
//     },
//   },
// }

// const apolloServer = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: () => {
//     return {}
//   },
// })

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// }

// export default apolloServer.createHandler({ path: '/api/graphql' })
