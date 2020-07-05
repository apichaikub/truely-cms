export const TABLE_PRODUCT_FIELD = Object.freeze({
  ENUM: {
    ID: 'id',
    NAME: 'name',
    CREATED: 'created',
    ACTION: 'action',
  },
  get values() {
    return Object.values(this.ENUM)
  },
})

export const TABLE_PRODUCT_POINTER = Object.freeze({
  ENUM: {
    productId: TABLE_PRODUCT_FIELD.ENUM.ID,
    name: TABLE_PRODUCT_FIELD.ENUM.NAME,
    createdAt: TABLE_PRODUCT_FIELD.ENUM.CREATED,
  },
  get values() {
    return Object.values(this.ENUM)
  },
})