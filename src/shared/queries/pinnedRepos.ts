import { gql } from '@apollo/client';

const PINNED_REPOS = gql`query {
	user(login:"simojjuho") {
    pinnedItems(last: 6 types:REPOSITORY){
    	nodes {
        ... on Repository {
          name
          description
          
        }
      }
    }
  }
}`

export default PINNED_REPOS