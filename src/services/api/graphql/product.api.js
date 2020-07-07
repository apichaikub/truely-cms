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
  const variables = {
    name: params.name,
    detail: params.detail,
    specifications: params.specifications,
    rating: params.rating,
    imageSmall: null,
    imageMedium: null,
    imageLarge: null,
  }

  const mutation = gql`
    mutation ($name: String!, $detail: String!, $specifications: [String!], $rating: Float) {
      createProduct (
        data: [{
          name: $name,
          detail: $detail,
          specifications: $specifications,
          rating: $rating,
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

  return httpClient.product.mutate({ variables, mutation })
}