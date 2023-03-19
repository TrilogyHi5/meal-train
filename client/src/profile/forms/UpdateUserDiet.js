import React from 'react';

function UpdateDiet(props) {

  return (
    <>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-base font-semibold leading-6 text-gray-900">Meal Plan Customization (Optional)</h3>
              <p className="mt-1 text-sm text-gray-600">Customize your meal plan based on a specific diet and weight goal</p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">

            <form onSubmit={props.handleUpdateDietSubmit}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <fieldset>
                    <legend className="contents text-sm font-semibold leading-6 text-gray-900">
                      Diet
                    </legend>
                    <p className="text-sm text-gray-500">Choose a diet to base your meal plan on (optional).</p>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center">
                        <input
                          id="mediterranean"
                          name="diet"
                          type="radio"
                          defaultValue={props.value.dietType}
                          onChange={props.handleInputChange}
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="mediterranean"
                          className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                        >
                          Mediterranean
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="lowCarb"
                          name="diet"
                          type="radio"
                          defaultValue={props.value.dietType}
                          onChange={props.handleInputChange}
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label htmlFor="lowCarb" className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                          Low Carb
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="bodyMaintenance"
                          name="diet"
                          type="radio"
                          defaultValue={props.value.dietType}
                          onChange={props.handleInputChange}
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="bodyMaintenance"
                          className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                        >
                          Weight Maintenance
                        </label>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="col-span-3 sm:col-span-3 lg:col-span-3">
                    <legend className="contents text-sm font-semibold leading-6 text-gray-900">
                      Goal Weight (lbs)
                    </legend>
                    <p className="text-sm text-gray-500">Enter your desired weight (optional).</p>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center">
                        <input
                          id="goal-weight"
                          name="goalWeight"
                          type="text"
                          placeholder="lbs"
                          defaultValue={props.value}
                          onChange={props.handleInputChange}
                          autoComplete='goal-weight'
                          className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </fieldset>
                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="duration" className="block text-sm font-medium leading-6 text-gray-900">
                        Diet Duration (7 days max)
                      </label>
                      <input
                        type="number"
                        name="duration"
                        id="duration"
                        min="1"
                        max="7"
                        onChange={props.handleInputChange}
                        value={props.value.dietDuration}
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  )
};

export default UpdateDiet;