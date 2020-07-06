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

export const addProducts = (params) => {
  const {
    name,
    detail,
    rating,
  } = params

  const mutation = gql`
    mutation {
      createProduct (
        data: [{
          name: "${name}",
          detail: "${detail}",
          specifications: [],
          rating: ${rating},
          imageSmall: null,
          imageMedium: null,
          imageLarge: null,
        }]
      )
      {
        products {
          productId
        }
      }
    }
  `;

  return httpClient.product.mutate({ mutation })
}