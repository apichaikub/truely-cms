import ApolloClient from 'apollo-boost'
import ENDPOINT from './endpoint'
import { request, onError } from '../../../helpers/graphql'

export default {
  product: new ApolloClient({
    uri: `http://localhost:5000/${ENDPOINT.PRODUCT}`,
    request,
    onError,
  }),
  user: new ApolloClient({
    uri: `http://localhost:5000/${ENDPOINT.USER}`,
    request,
    onError,
  }),
}