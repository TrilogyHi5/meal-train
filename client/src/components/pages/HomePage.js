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
          <h1 className="text-4xl font-bold mb-4">Meal Train - Train yourself to diet differently</h1>
          <p className="text-lg mb-8">Are you frustrated with fad diets and ready to try something different? 
              Then it is time to train yourself to diet differently, with Meal Train!
              Meal Train takes all of the leg work out of dieting and gives you complete daily meal plans 
              that are easy to cook made from healthy common grocery store ingredients. </p>
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