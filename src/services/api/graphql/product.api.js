import { gql } from 'apollo-boost'
import httpClient from './apollo.client'

export const getProducts = () => {
  const query = gql`{
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
  }`

  return httpClient.product.query({
    fetchPolicy: 'no-cache',
    query,
  })
}

export const getProduct = (params) => {
  const variables = {
    id: params.id,
  }

  const query = gql`
    query ($id: ID!) {
      product(id: $id) {
        productId,
        name,
        detail,
        specifications,
        rating,
        imageSmall,
        imageMedium,
        imageLarge,
        createdAt,
        updatedAt,
      }
    }
  `

  return httpClient.product.query({
    fetchPolicy: 'no-cache',
    variables,
    query,
  })
}

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
  `

  return httpClient.product.mutate({
    variables,
    mutation,
  })
}

export const editProducts = (params) => {
  const variables = {
    id: params.id,
    name: params.name,
    detail: params.detail,
    specifications: params.specifications,
    rating: params.rating,
    imageSmall: null,
    imageMedium: null,
    imageLarge: null,
  }

  const mutation = gql`
    mutation ($id: String!, $name: String!, $detail: String!, $specifications: [String!], $rating: Float) {
      updateProduct (
        data: [{
          productId: $id,
          name: $name,
          detail: $detail,
          specifications: $specifications,
          rating: $rating,
          imageSmall: null,
          imageMedium: null,
          imageLarge: null,
        }]
      )
    }
  `

  return httpClient.product.mutate({ variables, mutation })
}

export const deleteProducts = (params) => {
  const variables = {
    id: params.id,
  }

  const mutation = gql`
    mutation ($id: ID!) {
      deleteProduct (
        ids: [$id]
      )
    }
  `

  return httpClient.product.mutate({
    variables,
    mutation,
  })
}