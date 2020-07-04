const authTransforms = {
  /**
    * @params { Object } payload
    * @returns { Object }
    * @returns { String } accessToken
    * @returns { String } refreshToken
    */
  tokens: (payload = {}) => ({
    accessToken: payload.accessToken,
    refreshToken: payload.refreshToken,
  })
}

export default authTransforms