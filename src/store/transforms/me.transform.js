const meTransforms = {
  /**
    * @params { Object } payload
    * @returns { Object }
    * @returns { String, UUID } userId
    * @returns { String } username
    * @returns { String, ENUM } role : see more /enum/role.js
    */
  info: (payload = {}) => ({
    userId: payload.userId,
    username: payload.username,
    role: payload.role,
  })
}

export default meTransforms