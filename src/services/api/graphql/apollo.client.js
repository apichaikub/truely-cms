import ApolloClient from 'apollo-boost'
import ENDPOINT from './endpoint'
import { request, onError } from '../../../helpers/graphql'

export default {
  product: new ApolloClient({
    uri: `${process.env.REACT_APP_API}${ENDPOINT.PRODUCT}`,
    request,
    onError,
  }),
  user: new ApolloClient({
    uri: `${process.env.REACT_APP_API}${ENDPOINT.USER}`,
    request,
    onError,
  }),
}