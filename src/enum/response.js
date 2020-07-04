export const RESPONSE_KEY = Object.freeze({
    ENUM: {
      RESULTS: "results",
      DATA: "data",
    },
    get values() {
      return Object.values(this.ENUM)
    }
  })