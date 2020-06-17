import { getOAuth2Token } from './rest/authorize.api'
import { getUsers } from './graphql/user.api'
import { getProducts } from './graphql/product.api'

export default {
  getOAuth2Token,
  getUsers,
  getProducts
}