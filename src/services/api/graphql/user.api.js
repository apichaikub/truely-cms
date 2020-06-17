import { gql } from 'apollo-boost';
import httpClient from './apollo.client'

export const getUsers = () => httpClient.user.query({
  query: gql`
    {
      users {
        userId,
        username,
        role
      }
    }
  `
})
