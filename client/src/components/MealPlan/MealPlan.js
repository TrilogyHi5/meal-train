import {image1} from "../../utils/images/mealplan1"
import {image2} from "../../utils/images/mealplan2"
import {image3} from "../../utils/images/mealplan3"
import {image4} from "../../utils/images/mealplan4"
import {image5} from "../../utils/images/mealplan5"
import {image6} from "../../utils/images/mealplan6"

export default function MealPlan() {
    
    const meals = [
        { name: 'Breakfast', ingredient: "PLACEHOLDER FOR API DATA"},
        { name: 'Snack', ingredient: 'PLACEHOLDER FOR API DATA' },
        { name: 'Lunch', ingredient: 'PLACEHOLDER FOR API DATA' },
        { name: 'Dinner', ingredient: 'PLACEHOLDER FOR API DATA' },
        { name: 'Snack', ingredient: 'PLACEHOLDER FOR API DATA' },
      ]
      
      return (
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meal Plan</h2>
            <p className="mt-4 text-gray-500">
              Welcome to your personalized meal plan!
            </p>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {meals.map((meals) => (
                <div key={meals.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{meals.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{meals.ingredient}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src={image1}
              alt="Girls eating watermelon"
              className="rounded-lg bg-gray-100"
            />
            <img
              src={image6}
              alt="Mother and children making food"
              className="rounded-lg bg-gray-100"
            />
            <img
              src={image2}
              alt="Mother and daughter eating breakfast"
              className="rounded-lg bg-gray-100"
            />
            <img
              src={image4}
              alt="Father offering son food"
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
      </div>
    )
  }