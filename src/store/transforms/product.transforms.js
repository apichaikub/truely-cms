const productTransforms = {
  /**
    * @params { Object } payload
    * @returns { Object }
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
  )
}

export default productTransforms