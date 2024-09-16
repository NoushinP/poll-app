import { gql } from '@apollo/client';

export const QUERY_QUESTION = gql`
  query questions {
    questions {
     _id
    name
    choices
    }
  }
`;