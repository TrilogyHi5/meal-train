//import logo from './logo.svg';
import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
//import Login from './pages/Login';
// import Header from './components/Header';
// import Footer from './components/Footer';
//import Ingredients from './pages/Ingredients'
//import './App.css';


const apollo = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={apollo}>
      <Navigation />
    </ApolloProvider>
  );
}

export default App;