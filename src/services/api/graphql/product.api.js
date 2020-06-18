import { gql } from 'apollo-boost'
import httpClient from './apollo.client'

export const getProducts = () => httpClient.product.query({
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