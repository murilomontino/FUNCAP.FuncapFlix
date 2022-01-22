import { StyleSheet } from 'react-native'

import colors from './colors'

const styles = StyleSheet.create({
  containerCentered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outlineWeb: {
    outlineColor: 'orange',
    //outlineOffset: ? NumberOrString,
    //outlineStyle: ? string,
    outlineWidth: 1,
  },
  outline: {},
  helperText: {
    fontSize: 12,
    color: '#999',
  },
  buttonContainer: {
    backgroundColor: colors.button_secondary,
    borderRadius: 4,
    width: 250,
    height: 50,
    margin: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: 1,
    borderColor: colors.grey20,
  },
  posterContainer: {
    width: '33%',
    height: 180,
    padding: 2,
    borderRadius: 5,
  },
})

export default styles
