import { getOAuth2Token } from './rest/authorize.api'
import { getMe, getUsers } from './graphql/user.api'
import { getProducts, getProduct, addProducts, editProducts } from './graphql/product.api'

export default {
  getOAuth2Token,
  getMe,
  getUsers,
  getProducts,
  getProduct,
  addProducts,
  editProducts,
}