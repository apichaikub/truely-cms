const parseBool = (boolStr) => {
  if(boolStr === 'true') {
    return true
  } else if(boolStr === 'false') {
    return false
  }
  return boolStr
} 

export default parseBool