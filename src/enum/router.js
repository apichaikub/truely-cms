export const ROUTER_PATH = Object.freeze({
  ENUM: {
    HOME: "/",
    LOGIN: "/login",
    PRODUCT_LIST: '/products',
    PRODUCT_CREATE: '/products/create',
    PRODUCT_EDIT: '/products/edit',
    USERS: '/users',
  },
  get values() {
    return Object.values(this.ENUM)
  },
})

// TODO: add product name