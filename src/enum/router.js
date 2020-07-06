export const ROUTER_PATH = Object.freeze({
  ENUM: {
    HOME: "/",
    LOGIN: "/login",
    PRODUCTS: '/products',
    PRODUCT_CREATE: '/products/create',
    USERS: '/users',
  },
  get values() {
    return Object.values(this.ENUM)
  },
})