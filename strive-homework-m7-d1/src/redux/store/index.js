import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import favouritesReducer from '../reducers/favourites'
import searchReducer from '../reducers/search'
import thunk from 'redux-thunk'
import { persistReducer, persistStore } from 'redux-persist'
import localStorage from 'redux-persist/lib/storage'
import { encryptTransform } from 'redux-persist-transform-encrypt'

const composeFunction =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
  jobs: {
    favourites: [

    ],
  },
  search: {
    result: [
      
    ],
  },
}

const bigReducer = combineReducers({
  jobs: favouritesReducer,
  search: searchReducer,
})

const persistConfig = {
  key: 'root',
  storage: localStorage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_KEY,
      onError: (error) => {
        console.log(error)
      },
    }),
  ],
}

const persistedReducer = persistReducer(persistConfig, bigReducer)

export const configureStore = createStore(
 
  persistedReducer,

  initialState,
 
  composeFunction(applyMiddleware(thunk))
)

export const persistor = persistStore(configureStore)