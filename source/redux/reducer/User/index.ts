/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Reducer } from 'redux'

import { User } from 'types/User'

import { UsersTypes, UserState, actionTypes } from './types'

const INITIAL_STATE: UserState = {
  authentication: false,
  user: {} as User,
}

const reducer: Reducer<UserState, actionTypes> = (
  state = INITIAL_STATE,
  action
): UserState => {
  switch (action.type) {
    case UsersTypes.login: {
      return {
        authentication: true,
        user: {
          ...action.user,
        },
      }
    }

    case UsersTypes.logout: {
      return INITIAL_STATE
    }

    default:
      return state
  }
}

export default reducer
