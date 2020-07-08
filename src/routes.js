import { ROUTER_PATH, ROLE_USER, META_ROUTE } from './enum'
import Login from './views/Login'
import ProductList from './views/ProductList'
import ProductCreate from './views/ProductCreate'
import ProductUpdate from './views/ProductEdit'
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
    path: PATH.PRODUCT_LIST,
    name: 'Products',
    exact: true,
    component: ProductList,
    meta: {
      [META.REQUIRED_AUTH]: true,
      [META.ROLES]: [ROLE.ADMIN],
    },
  },
  {
    path: PATH.PRODUCT_CREATE,
    name: 'Create',
    exact: true,
    component: ProductCreate,
    meta: {
      [META.REQUIRED_AUTH]: true,
      [META.ROLES]: [ROLE.ADMIN],
    },
  },
  {
    path: `${PATH.PRODUCT_EDIT}/:id`,
    name: 'Update',
    exact: true,
    component: ProductUpdate,
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