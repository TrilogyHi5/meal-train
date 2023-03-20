//import logo from './logo.svg';
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import HomePage from './pages/HomePage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import MediterraneanDiet from './pages/MediterraneanDiet';
import MaintenanceDiet from './pages/MaintenanceDiet';
import LowCarbDiet from './pages/LowCarbDiet';
import About from './pages/About';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import Preferences from './components/Preferences/Preferences';
import Account from './components/Account/Account';
import MealPlan from './components/MealPlan/MealPlan';



const apollo = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={apollo}>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<Signup />}
          />
          <Route
            path="/maintenancediet"
            element={<MaintenanceDiet />}
          />
          <Route
            path="/mediterraneandiet"
            element={<MediterraneanDiet />}
          />
          <Route
            path="/lowcarbdiet"
            element={<LowCarbDiet />}
          />
          <Route
            path="/mealplan"
            element={<MealPlan />}
          />
          <Route
            path="/personalinfo"
            element={<PersonalInfo />}
          />
          <Route
            path="/preferences"
            element={<Preferences />}
          />
          <Route
            path="/account"
            element={<Account />}
          />

        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;