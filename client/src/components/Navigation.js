import React, { useState } from 'react';
import Header from './Header';
// import About from './pages/About';
import Mealplan from './pages/Mealplan';
import Signup from './pages/Signup';
import Login from './pages/Login';

export default function Navigation() {
  const [currentPage, setCurrentPage] = useState('Mealplan');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    // if (currentPage === 'About') {
    //   return <About />;
    // }
    if (currentPage === 'Signup') {
      return <Signup />;
    }
    if (currentPage === 'Login') {
      return <Login />;
    }
    return <Mealplan />;
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

