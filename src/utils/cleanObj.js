const cleanObj = (obj, defaultValue = null) => {
  return Object.keys(obj).reduce((acc, cur) => {
    acc[cur] = defaultValue
    return acc
  }, {})
}

export default cleanObj