// Create a new user.
import './ApiAddUser';
// Return the diet configuration and the diet plan for each day.
import './ApiGetDiet';
// Get the current diet plan for the specified user for a specific day.
import './ApiGetDietDay';
// Retrieve the list of all ingredients that will be excluded from user's diets.
import './ApiGetFoodDislikes';
// Retrieve the list of ingredients that can replace another 
// ingredient in an existing diet.
import './ApiGetFoodSwap'; 
// Retrieve the information of the user with the matching user ID
// returns id, height, weight, dateOfBirth, sex, activityLevel
import './ApiGetUser';
// Retrieve the list of all ingredients that will be excluded from user's diets.
import './ApiSetFoodDislikes';
// Create a new diet for this user. This will overwrite any existing diet.
import './ApiSetNewDiet';
// Update the user's information that changes over time such as 
// weight and activity level.
import './ApiUpdateUser';
// Replace an ingredient in an existing diet with another ingredient. 
// An existing ingredient can be replaced only by a limited set of ingredients. 
// To retrieve the list of possible replacements first make the call to 
// GET /user/{userId}/diet/{dayIndex}/{mealType}/{ingredientId}/replace endpoint.
import './ApiSetFoodReplacement';
// Retrieve all the ingredients.
import './ApiGetIngredients';