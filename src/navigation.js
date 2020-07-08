import { ROUTER_PATH } from './enum'

const { ENUM: ROUTER } = ROUTER_PATH

export default [
  /**
   * Product  Management
   */
  {
      _tag: 'CSidebarNavTitle',
      _children: ['Product Management']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Product',
    route: ROUTER.PRODUCT_LIST,
    icon: 'cil-3d',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'List',
        to: ROUTER.PRODUCT_LIST,
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Create',
        to: ROUTER.PRODUCT_CREATE,
      },
    ],
  },

  /**
   * User  Management
   */
  {
      _tag: 'CSidebarNavTitle',
      _children: ['User Management']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'User',
    route: ROUTER.USERS,
    icon: 'cil-user',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'List',
        to: ROUTER.USERS,
      },
    ],
  },
]