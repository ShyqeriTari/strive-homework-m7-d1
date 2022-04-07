import { GET_RESULT } from '../actions'
import { initialState } from '../store'

const searchReducer = (state = initialState.search, action) => {
  switch (action.type) {

    case GET_RESULT:
      return {

          ...state,

          result:  action.payload,
        }

    default:
      return state
  }
}

export default searchReducer
