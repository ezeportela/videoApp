const videos = (state = {}, action) => {
  return {...state, ...action.payload}
}

export default videos