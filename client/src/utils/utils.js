// CONVERTING FROM LBS TO KGS AND INCHES TO CM

// import height and weight from user input form

// converts user inputed lbs into kgs 
function lbsToKg(lbs) {
  const kg = lbs / 2.2046;
  return kg;
}

// convert feet to inches
function feetToInches(feet) {
  const ft = feet * 30.48;
  return ft;
}

// converts user inputed inches into cms
function inchesToCm(inches) {
  const cm = inches * 2.54;
  return cm;
}

// export to api for data request
export function convertWeightToImperial(weightInLbs) {
  const weightInKg = lbsToKg(weightInLbs);
  return weightInKg.toFixed(0);
}

export function convertHeightToImperial(heightInFeet, heightInInches) {
  const heightInCm = feetToInches(heightInFeet) + inchesToCm(heightInInches);
  return heightInCm.toFixed(0);
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

// user info validation
export function validateEmail(email) {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}

export function validateName(userName) {
  const regex = /^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/;
  return regex.test(userName);
}