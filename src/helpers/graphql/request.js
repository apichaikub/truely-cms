import storage from '../../storages'

const request = (operation) => {
  const token = storage.getAccessToken()

  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : ''
    }
  })
}

export default request