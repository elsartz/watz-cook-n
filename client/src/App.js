import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Categories from './pages/Categories/Categories';
import Navbar from './components/Navbar/Navbar';
import Pages from './pages/Pages'
// import Hero from './components/Hero/Hero'
import SearchRecipes from './components/SearchRecipes/Search'
import { ThemeProvider } from 'styled-components';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  persistedQueries: false,
});

const theme = {
  colors: {
    background: '#b2ab95',
    header: '#35347f',
    activeNavLink: ' #f27121',
    hero: '#1b3025',
    footer: '#35347f',
    fontColor: '#ffff',
    pBgColor: '#000000',
    sBgColor: '#525073',
    pColor: '#93939d',
    sColor: '#f3f6f6',
  },
};

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navbar />
          <Categories />
          <SearchRecipes/>
          <Pages/>
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
