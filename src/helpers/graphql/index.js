export const request = (operation) => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ5ODczYmIzLTMyODgtNDk4Zi1hZWVmLTgxYjBmNGIyZDkyMCIsInJvbGUiOiJBRE1JTiIsInNjb3BlcyI6WyJwcm9kdWN0LnJlYWQiLCJwcm9kdWN0LndyaXRlIiwidXNlci5yZWFkIiwidXNlci53cml0ZSJdLCJpYXQiOjE1OTIzMTM5MzMsImV4cCI6MTU5MjMxNDgzM30.aGx8e2HRT8r47HUHfIAlJDWzf55TD1Ebnk9SuE2sEII'

  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : ''
    }
  })
}

export const onError = ({ graphQLErrors, networkError }) => {
  console.log('graphQLErrors', graphQLErrors)
}