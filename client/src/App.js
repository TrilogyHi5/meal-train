//import logo from './logo.svg';
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
//import Footer from './components/Footer';
import Profile from './components/pages/Profile';
import Settings from './components/pages/Settings';
import About from './components/pages/About';
import HomePage from './components/pages/HomePage';
//import './App.css';


const apollo = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={apollo}>
      <Router>
        <Navigation/>

          {/* <Routes>

            <Route path='/' element={<HomePage />} />

            <Route path='/login' element={<Login />} />

            <Route path='/signup' element={<Signup />} />

            <Route path='/user/:userId' element={<Profile />} />

            <Route path='/user/:userId' element={<MealPlan />} />

            <Route path='/about' element={<About />} />

          </Routes> */}
        {/* <Footer/> */}
      </Router>
    </ApolloProvider>
  );
}

export default App;