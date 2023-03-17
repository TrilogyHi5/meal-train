// CONVERTING FROM LBS TO KGS AND INCHES TO CM

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
export function convertToImperial(weightInLbs, heightInInches) {
  const weightInKg = lbsToKg(weightInLbs);
  const heightInCm = inchesToCm(heightInInches);
  return { weightInKg, heightInCm };
}

// import { convertUnits } from './utils';
// use weightInKg and heightInCM for api data


// CONVERTING FROM KGS TO LBS AND CMS TO INCHES

function kgToLbs(kg) {
const lbs = kg * 2.2046;
return lbs.toFixed(2);
}

function cmToInches(cm) {
const inches = cm / 2.54;
return inches.toFixed(2);
}

export function convertToMetric(weightInKg, heightInCm) {
const weightInLbs = kgToLbs(weightInKg);
const heightInInches = cmToInches(heightInCm);
return { weightInLbs, heightInInches };
}