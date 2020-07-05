import { ROUTER_PATH } from '../../enum'

const { ENUM: ROUTER } = ROUTER_PATH

export default [
  { path: ROUTER.HOME, exact: true, name: 'Home' },
  { path: ROUTER.PRODUCTS, name: 'Products' },
  { path: ROUTER.USERS, name: 'Users' },
]