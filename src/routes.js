import { ROUTER_PATH, ROLE_USER } from './enum'
import Login from './views/Login'
import Products from './views/Products'
import Users from './views/Users'

export default [
  {
    path: ROUTER_PATH.ENUM.HOME,
    name: 'Home',
    exact: true,
    component: Login,
  },
  {
    path: ROUTER_PATH.ENUM.LOGIN,
    name: 'Login',
    exact: true,
    component: Login,
  },
  {
    path: ROUTER_PATH.ENUM.PRODUCTS,
    name: 'Products',
    exact: true,
    component: Products,
    meta: {
      requiredAuth: true,
      roles: [ROLE_USER.ENUM.ADMIN],
    },
  },
  {
    path: ROUTER_PATH.ENUM.USERS,
    name: 'Users',
    exact: true,
    component: Users,
    meta: {
      requiredAuth: true,
      roles: [ROLE_USER.ENUM.ADMIN],
    },
  },
]