const productTransforms = {
  /**
    * @params { Array } payload
    * @returns { Array } products
    * @returns { String, UUID } productId
    * @returns { String } name
    * @returns { String } details
    * @returns { Array } pecifications
    * @returns { Number } rating
    * @returns { String } imageSmall
    * @returns { String } imageMedium
    * @returns { String } imageLarge
    * @returns { String, Date UTC } createdAt
    * @returns { String, Date UTC } updatedAt
    */
  list: (payload = []) => (
    payload.map((item) => ({
      productId: item.productId,
      name: item.name,
      detail: item.detail,
      specifications: item.specifications,
      rating: item.rating,
      imageSmall: item.imageSmall,
      imageMedium: item.imageMedium,
      imageLarge: item.imageLarge,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    }))
  ),

  /**
    * @params { Object } payload
    * @returns { Object } product
    * @returns { String, UUID } productId
    * @returns { String } name
    * @returns { String } details
    * @returns { Array } pecifications
    * @returns { Number } rating
    * @returns { String } imageSmall
    * @returns { String } imageMedium
    * @returns { String } imageLarge
    * @returns { String, Date UTC } createdAt
    * @returns { String, Date UTC } updatedAt
    */
  one: (payload = {}) => ({
    productId: payload.productId,
    name: payload.name,
    detail: payload.detail,
    specifications: payload.specifications,
    rating: payload.rating,
    imageSmall: payload.imageSmall,
    imageMedium: payload.imageMedium,
    imageLarge: payload.imageLarge,
    createdAt: payload.createdAt,
    updatedAt: payload.updatedAt,
  }),
}

export default productTransforms