export const ROUTER_PATH = Object.freeze({
  ENUM: {
    HOME: "/",
    LOGIN: "/login",
    PRODUCTS: '/products',
    USERS: '/users',
  },
  get values() {
    return Object.values(this.ENUM)
  },
})