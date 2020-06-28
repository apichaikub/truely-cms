// seem like there is specific for `fetch` because they throw an error: `response.text is not a function`
// so we have to set text as `json string` and return as a promise.
const getFinalResponse = (json) => {
  const result = {}

  result.text = () => new Promise((resolve) => {
    resolve(JSON.stringify(json))
  })

  return result
}

export default getFinalResponse