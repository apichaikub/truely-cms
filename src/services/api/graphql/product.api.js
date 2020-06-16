import { gql } from 'apollo-boost';
import httpClient from '../../httpClient/apollo'

export const getProducts = () => httpClient.query({
  query: gql`
    {
      products {
        productId,
        name,
        detail,
        specifications,
        rating,
        imageSmall,
        imageMedium,
        imageLarge,
        createdAt,
        updatedAt
      }
    }
  `
})