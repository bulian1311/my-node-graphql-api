const express = require('express');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('express-jwt');

const schema = require('./schema');
const { PORT, JWT_SECRET } = require('./config/vars');

const app = express();
const jwtCheck = jwt({ secret: JWT_SECRET });

app.use('*', cors());

app.use(
  '/graphql',
  bodyParser.json(),
  //jwtCheck,
  graphqlExpress(req => ({
    schema: schema,
    cacheControl: true,
    context: { user: req.user }
  }))
);

app.use(
  '/graphiql',
  //jwtCheck,
  graphiqlExpress({ endpointURL: '/graphql' })
);

app.listen(PORT);
