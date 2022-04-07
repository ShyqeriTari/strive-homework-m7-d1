import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from '../actions'
import { initialState } from '../store'

const favouritesReducer = (state = initialState.jobs, action) => {
  switch (action.type) {

    case ADD_TO_FAVOURITES:
      return {

          ...state,

          favourites: [...state.favourites, action.payload],
        }

    case REMOVE_FROM_FAVOURITES:
      return {
          ...state,
          favourites: state.favourites.filter(
            (job, i) => i !== action.payload
          ),
     
        }


    default:
      return state
  }
}

export default favouritesReducer
