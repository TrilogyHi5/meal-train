import { gql } from '@apollo/client';


export const ADD_USER = gql`
  mutation addUser($firstName: String, $lastName: String, $email: String, $password: String) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
        _id
        firstName
        lastName
        email
        password
    }
  }
`;


export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        email
        password
      }
    }
`;

export const ADD_MEALS = gql`
  mutation addMeals($userId: ID!, $meal: String!) {
    addMeals(userId: $userId, meal: $meal) {
      _id
      email
      meals
    }
  }
`;

// export const UPDATE_USER = gql`
//   mutation updateUser($firstName: String, $lastName: String, $email: String, $password: String) {
//     addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
//         _id
//         firstName
//         lastName
//         email
//         password
//     }
//   }
// `;

// export const ADD_PROPERTIES = gql`
//   mutation addProfile($height: String, $weight: String, $sex: String, $dob: String, $activityLevel: String ) {
//     addProfile(height: $height, weight: $weight, sex: $sex, dob: $dob, activityLevel: $activityLevel) {
//         _id
//         height
//         weight
//         sex
//         dob
//         activityLevel
//     }
//   }
// `;


export const REMOVE_USER = gql`
  mutation removeMeals($meal: String!) {
    removeMeals(meal: $meal) {
      _id
      email
      meals
    }
  }
`;
