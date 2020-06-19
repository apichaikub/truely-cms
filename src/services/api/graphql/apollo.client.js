import ApolloClient from 'apollo-boost'
import ENDPOINT from './endpoint'
import { customFetch } from '../../../helpers/graphql'

const productClient = new ApolloClient({
  uri: `${process.env.REACT_APP_API}${ENDPOINT.PRODUCT}`,
  fetch: customFetch,
})

const userClient = new ApolloClient({
  uri: `${process.env.REACT_APP_API}${ENDPOINT.USER}`,
  fetch: customFetch,
})

export default {
  product: productClient,
  user: userClient,
}