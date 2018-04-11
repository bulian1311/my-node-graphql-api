const resolvers = {
  Query: {
    root: async () => {
      return await 'Hello Graphql';
    },
    currentUser: async (root, args) => {
      return await 'currentUser';
    },
    item: async (root, args) => {
      return await 'item';
    },
    items: async (root, args) => {
      return await 'items';
    },
    provider: async (root, args) => {
      return await 'provider';
    },
    providers: async (root, args) => {
      return await 'providers';
    },
    tag: async (root, args) => {
      return await 'tag';
    },
    tags: async (root, args) => {
      return await 'tags';
    }
  },
  Mutation: {
    login: async (root, { email, password }) => {
      return 'login';
    },
    createProvider: async (root, { name, url }) => {
      return await 'createProvider';
    },
    createItem: async (root, args) => {
      return await 'createItem';
    },
    createTag: async (root, args) => {
      return await 'createTag';
    }
  },
  Provider: {
    items: async provider => {
      return await 'Items';
    }
  },
  Item: {
    provider: async item => {
      return await 'Provider';
    },
    tags: async item => {
      return await 'Tags';
    }
  },
  Tag: {
    items: async tag => {
      return await 'Items';
    }
  }
};

module.exports = resolvers;
