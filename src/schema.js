const { makeExecutableSchema } = require('graphql-tools');

const resolvers = require('./resolvers');

const typeDefs = `
type Query {
  root: String
  currentUser: User
  item(id: String!): Item
  items: [Item]
  provider(id: String!): Provider
  providers: [Provider]
  tag(id: String!): Tag
  tags: [Tag]
}

type Mutation {
  
  login(
    email: String! 
    password: String!
  ): User

  createProvider(
    name: String!
    url: String!
  ): Provider

  createItem( 
    title: String!, 
    description: String!
    tags: [String]!
  ): Item

  createTag(
    name: String
  ): Tag
}

type User {
  id: ID!
  email: String!
  token: String!
}

type Provider {
  id: ID!
  name: String!
  url: String!
  items: [Item]
}

type Item {
  id: ID!
  title: String!
  description: String!
  provider: Provider!
  tags: [Tag]
}

type Tag {
  id: ID!
  name: String!
  items: [Item]
}

`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
