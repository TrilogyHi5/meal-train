//import logo from './logo.svg';
import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Signup from './pages/Signup';
import Login from './pages/Login';
// import Header from './components/Header';
// import Footer from './components/Footer';
import Ingredients from './pages/Ingredients'
import './App.css';

function App() {
  return (
    // <Login />,
    <Signup />
    // <Ingredients />
  );
}

export default App;