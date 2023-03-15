// import height and weight from user input form

// converts user inputed lbs into kgs 
function lbsToKg(lbs) {
    const kg = lbs / 2.2046;
    return kg.toFixed(2);
  }
  

// converts user inputed inches into cms
  function inchesToCm(inches) {
    const cm = inches * 2.54;
    return cm.toFixed(2);
  }
  
  // export to api for data request
  export function convertUnits(weightInLbs, heightInInches) {
    const weightInKg = lbsToKg(weightInLbs);
    const heightInCm = inchesToCm(heightInInches);
    return { weightInKg, heightInCm };
  }

// import { convertUnits } from './utils';
// use weightInKg and heightInCM for api data
