import gql from "graphql-tag";

export const AllUsersQuery = gql`
  query AllUsers {
    allUsers {
      id
      username
      email
      password
      role
      status
    }
  }
`;

export const AllProductsQuery = gql`
    query AllProducts {
        allProducts {
            id
            name
        }
    }
`;
