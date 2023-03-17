import React from 'react';
import backgroundImage from '../../utils/images/background.jpg'; // import background image
import lifestyleImage from '../../utils/images/healthylifestyle.jpg'; // import lifestyle image

function HomePage() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-fixed bg-cover bg-center h-screen"
    style={{ backgroundImage: `url(${backgroundImage})` }}>
        
      {/* Main content */}
      <div className="flex-1 flex items-center justify-center ">
        <div className="text-center ">
          <h1 className="text-4xl font-bold mb-4">Welcome to Meal Train</h1>
          <p className="text-lg mb-8">Text about Meal Train Text about Meal Train Text about Meal Train Text about Meal Train Text about Meal Train </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
          <img src={lifestyleImage}
          className="mx-auto mt-0"
          style={{ width: '350px', height: 'auto' }}/>
          </div>
    </div>
  );
}

export default HomePage;