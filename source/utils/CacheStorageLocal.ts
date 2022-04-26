import AsyncStorage from '@react-native-async-storage/async-storage'

import moment from 'moment'
import 'moment/locale/pt-br'

moment.locale('pt-br')

const isExpire = (date: string) => {
  const dateNow = moment()

  const expired = dateNow.isBefore(date)

  return expired
}

export const setCache = async (
  key: string,
  value: { [key: string]: unknown }
) => {
  const date = moment()
  const dateExpired = date.add(7, 'days').toISOString()

  const cache = JSON.stringify({
    ...value,
    expired: dateExpired,
  })

  try {
    await AsyncStorage.setItem(key, cache)
    return true
  } catch (e) {
    return false
  }
}

type CACHE = {
  expired: string
  [key: string]: unknown
}

export const getCache = async (key: string) => {
  const value = await AsyncStorage.getItem(key)

  if (value) {
    const jsonValue: CACHE = JSON.parse(value)
    const cacheValid = isExpire(jsonValue.expired)
    if (cacheValid) {
      return jsonValue
    } else {
      await AsyncStorage.removeItem(key)
      return false
    }
  } else {
    return false
  }
}
