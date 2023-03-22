import { gql } from '@apollo/client';


// export const QUERY_USERS = gql`
//   query allUsers {
//     users {
//       _id
//       email
//       meals
//     }
//   }
// `;

//Correct Query - edited 3/21
export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      email
      meals
    }
  }
`;

// export const QUERY_ME = gql`
//   query me {
//     me {
//       _id
//       email
//       meals
//     }
//   }
// `;
