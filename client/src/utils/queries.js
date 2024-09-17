import { gql } from '@apollo/client';

export const QUERY_QUESTION = gql`
query Choices {
  questions {
    _id
    name
    choices {
      _id
      name
      responses
    }
  }
}
`;