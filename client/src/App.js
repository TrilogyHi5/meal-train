//import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
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
// import Preferences from './components/Preferences/Preferences';
import AccountSettings from './profile/AccountSettings';
import DietSettings from './profile/DietSettings';
import MealPlan from './components/MealPlan/MealPlan';
import ProfileSettings from './profile/ProfileSettings';

// import { GetUser } from './profile/api/ApiGetUser';
// import User from './profile/User';

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const apollo = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {

  // let [getApi, setApi] = useState({id: '', height: '', weight: '', dateOfBirth: '', sex: '', activityLevel: ''});
  // let [getApi, setApi] = useState([]);


  // useEffect(() => {
  //   async function test() {
  //     const response = await GetUser();   
  //     //console.log(response); 
  //     setApi(response);
  //     }
  //   test();
  // }, []);

  // const { id, height, weight, dateOfBirth, sex, activityLevel } = getApi;

  return (
    <ApolloProvider client={apollo}>
      <Router>
        <Header />        
          {/* <User 
            id={id} 
            height={height} 
            weight={weight} 
            dateOfBirth={dateOfBirth} 
            sex={sex} 
            activityLevel={activityLevel} /> */}
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
            path="/dietsettings"
            element={<DietSettings />}
          />
          <Route
            path="/personalinfo"
            element={<PersonalInfo />}
          />
          <Route
            path="/profilesettings"
            element={<ProfileSettings />}
          />
          <Route
            path="/accountsettings"
            element={<AccountSettings />}
          />
          <Route
            path="/mealplan"
            element={<MealPlan />}
          />
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;