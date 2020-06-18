import storage from '../../storages'

export const request = (operation) => {
  const accessToken = storage.getAccessToken()

  operation.setContext({
    headers: {
      authorization: accessToken ? `Bearer ${accessToken}` : ''
    }
  })
}

export const onError = ({ graphQLErrors, networkError }) => {
  console.log('graphQLErrors', graphQLErrors)
}