import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Login from './pages/Login';
import Signup from './pages/Signup';
import NoMatch from './pages/NoMatch';
import Navbar from './components/nav/Navbar'
import Footer from './components/footer/Footer';

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

  function App() {
    return (
      <ApolloProvider client={client}>
      <Router>
          <Navbar />
          <Routes>
            {/* <Route path='/' element={<SearchRecipes/>} /> */}
            {/* <Route path='/saved' element={<SavedBooks/>} /> */}
            <Route path='*' element={<NoMatch />} />
            <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
          </Routes>
          <Footer />
      </Router>
      </ApolloProvider>
    );
  }
  
  export default App;
  
