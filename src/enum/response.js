export const RESPONSE_KEY = Object.freeze({
    ENUM: {
      // Rest
      RESULTS: "results",
      // GraphQL
      DATA: "data",
      ME: "me",
      PRODUCTS: "products",
    },
    get values() {
      return Object.values(this.ENUM)
    }
  })