

export default function MealPlan() {
    
    const meals = [
        { name: 'Breakfast', ingredient: "140g Kale, 150g, Cucumbers, 92g Lettuce, 104g Fish"},
        { name: 'Snack', ingredient: '107g Strawberries, 58g Red Peppers, 68g Fish, 12g Seeds' },
        { name: 'Lunch', ingredient: '64g Bananas, 224g Lettuce, 60g Tomatoes, 119g Fish, 12g Oils' },
        { name: 'Dinner', ingredient: '133g Red Peppers, 173g Chicken' },
        { name: 'Snack', ingredient: '200g Romain Lettuce, 100g Turkey, 28g Cheese' },
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
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
      </div>
    )
  }