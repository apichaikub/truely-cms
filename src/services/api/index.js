import { getOAuth2Token } from './rest/authorize.api'
import { getMe, getUsers } from './graphql/user.api'
import { getProducts, addProducts } from './graphql/product.api'

export default {
  getOAuth2Token,
  getMe,
  getUsers,
  getProducts,
  addProducts,
}