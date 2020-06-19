const getHeadersOAuth2 = (headers, { accessToken = null }) => {
  return {
    ...headers,
    'Authorization': accessToken ? `Bearer ${accessToken}` : null,
  }
}

export default getHeadersOAuth2