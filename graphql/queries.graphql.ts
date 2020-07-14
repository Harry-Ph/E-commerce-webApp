import gql from "graphql-tag";

export const AllUsersQuery = gql`
  query AllUsers {
    allUsers {
      id
      name
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
