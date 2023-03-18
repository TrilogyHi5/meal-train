import React from 'react';
import backgroundImage from '../../utils/images/background.jpg'; // import background image
import lifestyleImage from '../../utils/images/healthylifestyle.jpg'; // import lifestyle image
import lowCarbImage from '../../utils/images/lowCarb.webp';
import mediterraneanImage from '../../utils/images/mediterranean.jpg';
import habits from '../../utils/images/habits.png';
import science from '../../utils/images/science.png';
import sustainable from '../../utils/images/sustainable.png';
import maintenanceImage from '../../utils/images/maintenance.jpg';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/outline';

function HomePage() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div class="bg-cover bg-fixed h-screen "
      style={{ backgroundImage: `url(${backgroundImage})` }}>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center ">
        <div className="text-center my-5 mt-24">
          <div className="relative bg-gray-200 bg-opacity-70 rounded-lg p-8 mx-20 my-5">
          <h1 className="text-4xl font-bold ">Meal Train - Train yourself to diet differently</h1>
          </div>

          <div class="relative bg-gray-200 bg-opacity-70 rounded-lg p-8 mx-20 my-5">
            <p className="text-lg mb-8">Are you frustrated with fad diets and ready to try something different?
              Then it is time to train yourself to diet differently, with Meal Train!
              Meal Train takes all of the leg work out of dieting and gives you complete daily meal plans
              that are easy to cook and made from healthy common grocery store ingredients. </p>
          </div>
        </div>
      </div>

      {/* lifestyle image */}
      <div className="flex justify-center items-center">
        <img src={lifestyleImage}
          className="mx-auto mt-0"
          style={{ width: '350px', height: 'auto' }} />
      </div>

      {/* Join button */}
      <div className="flex justify-center m-10">
        <button className="bg-red-500 border-1 border-black rounded-full px-14 py-4 font-bold text-white text-2xl">
          Join Now
        </button>
      </div>

      {/* Example Meal Cards */}
      <div class="flex flex-wrap justify-center">
        <Link to="/mediterraneandiet" onClick={() => ('MediterraneanDiet')} className="{currentPage === 'MediterraneanDiet' ? 'nav-link active' : 'nav-link'} w-full md:w-1/2 lg:w-1/4 rounded-3xl overflow-hidden mx-2 my-2">
          <div class="bg-cover bg-center h-40 md:h-64" style={{ backgroundImage: `url(${mediterraneanImage})` }}>
            <div class="bg-green-800 bg-opacity-60 p-4 rounded-xl inline-block ml-4 my-4">
              <h2 class="text-xl font-bold mb-2 text-green-100">Mediterranean Diet</h2>
            </div>
          </div>
        </Link>


        <Link to="/lowcarbdiet" onClick={() => ('LowCarbDiet')} className="{currentPage === 'LowCarbDiet' ? 'nav-link active' : 'nav-link'} w-full md:w-1/2 lg:w-1/4 rounded-3xl overflow-hidden mx-2 my-2">
          <div class="bg-cover bg-center h-40 md:h-64" style={{ backgroundImage: `url(${lowCarbImage})` }}>
            <div class="bg-green-800 bg-opacity-60 p-4 rounded-xl inline-block ml-4 my-4">
              <h2 class="text-xl font-bold mb-2 text-green-100">Low Carb Diet</h2>
            </div>
          </div>
        </Link>


        <Link to="/maintenancediet" onClick={() => ('MaintenanceDiet')} className="{currentPage === 'MaintenanceDiet' ? 'nav-link active' : 'nav-link'} w-full md:w-1/2 lg:w-1/4 rounded-3xl overflow-hidden mx-2 my-2">
          <div class="bg-cover bg-center h-40 md:h-64" style={{ backgroundImage: `url(${maintenanceImage})` }}>
            <div class="bg-green-800 bg-opacity-60 p-4 rounded-xl inline-block ml-4 my-4">
              <h2 class="text-xl font-bold mb-2 text-green-100">Maintenance Diet</h2>
            </div>
          </div>
        </Link>
      </div>


      {/* Here's Why */}
      <div class="bg-green-500 opacity-70 rounded-3xl text-green-100 font-bold p-4 inline-block text-3xl ml-6">Here's Why to choose Meal Train</div>

      <div className="flex flex-col lg:flex-row mx-auto max-w-4xl px-4 my-8">
        <div className="flex-1 mr-6  rounded-3xl">
          <h1 className="text-3xl font-bold mb-4">Science-based</h1>
          <p className="mb-4">
            We use technology to make your body remodeling process easier, all at a click away!

            With the help of algorithms we calculate and customize your nutritional plan according to your food preferences, your lifestyle and your individual data. We help you organize your shopping list and easily customize your tables with the help of the computer of food replacements. And even though we love technology, we also love interactions with people. Thus, we have created a chat platform where you can always be in touch with our team of nutritionists.
          </p>
        </div>
        <div className="flex-1">
          <img className="w-full" src={science} alt="Placeholder image" />
        </div>
      </div>

      <div className="flex  flex-col-reverse lg:flex-row mx-auto max-w-4xl px-4 my-8">
        <div className="flex-1 mr-6">
          <img className="w-full" src={sustainable} alt="Placeholder image" />
        </div>
        <div className="flex-1  rounded-3xl">
          <h1 className="text-3xl font-bold mb-4">Sustainable</h1>
          <p className="mb-4">
            The nutritional plan is customized according to your food preferences, you will eliminate all the ingredients you don't want to consume and you can choose what suits you. You have a number of nutritional plans designed and specifically designed to suit your lifestyle, and your needs. In addition, together with the team of nutritionists you can adapt weekly, depending on the your progress, your nutritional plan.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mx-auto max-w-4xl px-4 my-8">
        <div className="flex-1 mr-6 rounded-3xl bg-green-100">
          <h1 className="text-3xl font-bold mb-4">Healthy habits</h1>
          <p className="mb-4">
            We want you to achieve your goals, but for us healthy goals also include respect for your own body, care and love, so we create a pleasant environment in which to evolve everything Plans. Every day you learn with us how to build your own healthy lifestyle to get yourself you can handle it on your own in the future. We also know that it is hard to integrate sports and movement in your routine, so you also have access to a series of light workouts that you can do in the comfort of your home.
          </p>
        </div>
        <div className="flex-1">
          <img className="w-full rounded-3xl" src={habits} alt="Placeholder image" />
        </div>
      </div>


      {/* How it works */}

      <div className="bg-green-300 bg-opacity-50 shadow-lg rounded-2xl overflow-hidden mx-5">
        <div className="px-4 py-2 bg-gray-800 ">
          <h1 className="text-white text-2xl font-bold">How it works</h1>
        </div>

        <div className="flex flex-wrap -mx-4 py-4 mx-2">
          <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0 my-2">
            <div className="bg-white bg-opacity-70 rounded-2xl p-4">
            <div class="font-bold text-2xl">
                <h2>Personalized nutritional plans</h2>
              </div>
              <div>
                <p>We generate your own personalized aliemntar plan, based on your current weight, the desired weight, age, height and gender, but also what you like to eat on and what you want to avoid. Choose only what you are entitled to suits you or requests a consultation with our team of nutritionists to decide together.</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0 my-2">
            <div className="bg-white bg-opacity-70 rounded-2xl p-4">
            <div class="font-bold text-2xl">
                <h2>Support via WhatsApp</h2>
              </div>
              <div>
                <p>We are with you on your journey towards a healthier lifestyle. We know it's not always easy, so we're at your disposal whenever you need us, via WhatsApp</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0 my-2">
            <div className="bg-white bg-opacity-70 rounded-2xl p-4">
              <div class="font-bold text-2xl">
                <h2>We create a caloric deficit that is easy to maintain over time</h2>
              </div>
              <div>
                <p>We do not aggressively restrict caloric intake and do not have a 'good or bad' approach to what look at food. We think and design food plans with sufficient amounts of food. Thus, we want to provide the body with all the necessary macro-nutrients and we favor a healthy weight loss that you can easily maintain over time.</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0 my-2">
            <div className="bg-white bg-opacity-70 rounded-2xl p-4">
              <div class="font-bold text-2xl">
                <h2>Food Diary</h2>
              </div>
              <div>
                <p>The food diary helps you build a healthy lifestyle and create habits Healthy. How much water you drink, how much you sleep, what you eat, everything influences the remodeling process bodily and being aware of the eating behaviors you have, gradually, you will be able to do healthier choices.</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0 my-2">
            <div className="bg-white bg-opacity-70 rounded-2xl p-4">
              <div class="font-bold text-2xl">
                <h2>Exercises for home</h2>
              </div>
              <div>
                <p>We support sports and outdoor movement, but we understand that our schedule differs and does not we always have time to go to the gym. We have created a series of light workouts with exercises gentle to befriend sports and give you the opportunity to access them then when you want.</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0 my-2">
            <div className="bg-white bg-opacity-70 rounded-2xl p-4">
              <div class="font-bold text-2xl">
                <h2>Food</h2>
              </div>
              <div>
                <p>Our food plans are based on natural, unprocessed food and we have an approach practical, based on portions and the distribution of food groups in the plate. But, we make sure you are in caloric deficit and you eat diversified throughout your remodeling process.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}


export default HomePage;