export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES'
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES'
export const GET_RESULT = 'GET_RESULT'

export const addToFavouritesAction = (job) => ({
  type: ADD_TO_FAVOURITES,
  payload: job,
})

export const removeFromFavouritesAction = (index) => ({
  type: REMOVE_FROM_FAVOURITES,
  payload: index,
})

export const getResultAction = (jobSearch,off, jobs) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(
        `${process.env.REACT_APP_LOCAL}?search=${jobSearch}&limit=10&offset=${off}`
      )
      if (resp.ok) {
        let result = await resp.json()

        console.log("result", result)
        console.log("jobSearch", jobSearch)
        console.log("off", off)

        dispatch({
          type: GET_RESULT,
          payload: result.data,
        })

      } else {
        console.log('error')
      }
    } catch (error) {
      console.log(error)
    }
  }
}