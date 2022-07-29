import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { ThemeProvider } from 'styled-components';

import SearchRecipes from './pages/SearchRecipes/SearchRecipes';
import SavedRecipes from './pages/savedRecipes';
import FoodDetail from './pages/Detail/FoodDetail';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import NoMatch from './pages/NoMatch';

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
  persistedQueries: false
});

const theme = {
    colors: {
      background: '#d1a382',
      mainBg: '#ffc237',
      header: 'background:linear-gradient(135deg, #fad961 0%,#f76b1c 100%);',
      activeNavLink: '#594333',
      hero: '#1b3025',
      footer: '#35347f',
      fontColor: '#ffff',
      pBgColor: '#000000',
      sBgColor: '#525073',
      pColor: '#93939d',
      sColor: '#f3f6f6',
      hoverColor: '#594333'
    },
  };

function App() {
  return (
    <ApolloProvider client={client}>
         <ThemeProvider theme={theme}>
    <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<SearchRecipes/>} />
          <Route path='/saved' element={<SavedRecipes/>} />
          <Route path='/recipe/:id' element={<FoodDetail />} />
          <Route path='*' element={<NoMatch />} />
        </Routes>
        <Footer/>
    </Router>
    </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
