export const META_ROUTE = Object.freeze({
  ENUM: {
    REQUIRED_AUTH: "REQUIRED_AUTH",
    ROLES: "ROLES",
  },
  get values() {
    return Object.values(this.ENUM)
  },
})