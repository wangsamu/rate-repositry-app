import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query GetRepositories {
    repositories {
      edges {
        node {
          fullName
          description
          language
          stargazersCount
          reviewCount
          ratingAverage
          forksCount
          ownerAvatarUrl
        }
      }
    }
  }
`;
