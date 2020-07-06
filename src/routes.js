import { ROUTER_PATH, ROLE_USER, META_ROUTE } from './enum'
import Login from './views/Login'
import Products from './views/Products'
import Users from './views/Users'

const { ENUM: PATH } = ROUTER_PATH
const { ENUM: ROLE } = ROLE_USER
const { ENUM: META } = META_ROUTE

export default [
  {
    path: PATH.HOME,
    name: 'Home',
    exact: true,
    component: Login,
  },
  {
    path: PATH.LOGIN,
    name: 'Login',
    exact: true,
    component: Login,
  },
  {
    path: PATH.PRODUCTS,
    name: 'Products',
    exact: true,
    component: Products,
    meta: {
      [META.REQUIRED_AUTH]: true,
      [META.ROLES]: [ROLE.ADMIN],
    },
  },
  {
    path: PATH.USERS,
    name: 'Users',
    exact: true,
    component: Users,
    meta: {
      [META.REQUIRED_AUTH]: true,
      [META.ROLES]: [ROLE.ADMIN],
    },
  },
]