import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-boost";

import "bootstrap/dist/css/bootstrap.min.css";

const httpLink = createHttpLink({
  uri: "https://swapi.graph.cool/"
});

const cache = new InMemoryCache();
const client = new ApolloClient({
  link: httpLink,
  cache
});


ReactDOM.render(
  <ApolloProvider client={client}>
      <App />
  </ApolloProvider>,
  document.getElementById('root')
);
