const { Schema, model } = require('mongoose');

const mealPlanSchema = new Schema({
  breakfast: [{
    type: Schema.Types.ObjectId
  }],
  snack_one: [{
    type: Schema.Types.ObjectId
  }],
  lunch: [{
    type: Schema.Types.ObjectId
  }],
  snack_two: [{
    type: Schema.Types.ObjectId
  }],
  dinner: [{
    type: Schema.Types.ObjectId
  }]
});

const MealPlan = model('MealPlan', mealPlanSchema);

module.exports = MealPlan;