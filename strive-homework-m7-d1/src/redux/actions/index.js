export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES'
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES'
export const SET_USERNAME = 'SET_USERNAME'

export const addToFavouritesAction = (job) => ({
  type: ADD_TO_FAVOURITES,
  payload: job,
})

export const removeFromFavouritesAction = (index) => ({
  type: REMOVE_FROM_FAVOURITES,
  payload: index,
})
