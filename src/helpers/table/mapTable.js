/**
 * this function use for mapping state, or transform them to table data.
 * @param {*} mappingValue value that we want to transform.
 * @param {*} mappingPattern pattern that we want to mapping with value.
 * @returns {Array} table data
 
  For example

  mappingValue:
  data from state in redux store, or whatever
  [{
    productId: '1',
    productName: 'Product A',
    createdAt: '2020-01-15T13:25:46.999Z',
  }]

  mappingPattern:
  left side is state keys, right side is table fields keys
  {
    productId: 'id',
    productName: 'name',
    createdAt: 'created',
  }

  return:
  it just like swapping between state keys and field keys
  [{
    id: '1',
    name: 'Product A',
    created: '2020-01-15T13:25:46.999Z',
  }]
****/
const mapTable = (mappingValue = [], mappingPattern = {}) => {
  const generator = (item) => {
    return Object.keys(mappingPattern).reduce((acc, cur) => {
      acc[mappingPattern[cur]] = item[cur]
      return acc
    }, {})
  }
  return mappingValue.map((item) => generator(item))
}

export default mapTable