import React, { useState } from 'react';
import Header from './Header';
import About from './pages/About';
import HomePage from  './pages/HomePage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import MediterraneanDiet from './pages/MediterraneanDiet';
import MaintenanceDiet from './pages/MaintenanceDiet';
import LowCarbDiet from './pages/LowCarbDiet';


export default function Navigation() {
  const [currentPage, setCurrentPage] = useState('HomePage');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Signup') {
      return <Signup />;
    }
    if (currentPage === 'Login') {
      return <Login />;
    }
    if (currentPage === 'MediterraneanDiet') {
      return <MediterraneanDiet />;
    }
    if (currentPage === 'MaintenanceDiet') {
      return <MaintenanceDiet />;
    }
    if (currentPage === 'LowCarbDiet') {
      return <LowCarbDiet />;
    }
    return <HomePage/>;
    
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
