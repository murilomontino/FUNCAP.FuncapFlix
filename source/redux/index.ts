import AsyncStorage from '@react-native-async-storage/async-storage'

import { createStore, Store } from 'redux' //applyMiddleware
import { persistStore, persistReducer } from 'redux-persist'

import root from './reducer/root'
import { UserState } from './reducer/User/types'

// import {createLogger} from 'redux-logger'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

export interface ApplicationState {
  UserState: UserState
}

const reducers = persistReducer(persistConfig, root)
export const store: Store<ApplicationState> = createStore(reducers)
export const persistedStore = persistStore(store)
