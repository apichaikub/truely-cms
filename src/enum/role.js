export const ROLE_USER = Object.freeze({
  ENUM: {
    ADMIN: "ADMIN",
    GUEST: "GUEST",
  },
  get values() {
    return Object.values(this.ENUM)
  },
})