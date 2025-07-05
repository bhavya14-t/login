import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
// } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';

// const client = new ApolloClient({
//   uri: 'https://api-qa.seamasterai.com/graphql',
//   cache: new InMemoryCache(),
// });

ReactDOM.createRoot(document.getElementById('root')).render(
  // <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </ApolloProvider>
);
