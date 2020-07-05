const mapTable = (mappingValue, mappingPattern) => {
  const generator = (item) => {
    return Object.keys(mappingPattern).reduce((acc, cur) => {
      acc[mappingPattern[cur]] = item[cur]
      return acc
    }, {})
  }
  return mappingValue.map((item) => generator(item))
}

export default mapTable