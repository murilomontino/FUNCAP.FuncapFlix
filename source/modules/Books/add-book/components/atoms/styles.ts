import { StyleSheet } from 'react-native'

import colors from '@/global/colors'

export const styles = StyleSheet.create({
  textAreaContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    margin: 8,
    alignContent: 'center',
  },
  topicForm: {
    fontWeight: 'bold',
    color: '#f1f1f1',
    padding: 8,
    textAlign: 'right',
  },
  viewTitle: {
    flex: 1,
    maxWidth: 150,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  textArea: {
    color: colors.grey20,
    fontWeight: '600',
    backgroundColor: '#d9d9d9',
    padding: 8,
    borderRadius: 8,
    borderWidth: 0.2,
    borderColor: colors.grey20,
    flex: 3,
  },
  outlineWeb: {
    outlineColor: 'orange',
    //outlineOffset: ? NumberOrString,
    //outlineStyle: ? string,
    outlineRightWidth: 0,
    outlineWidth: 1,
  },
  outline: {},
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
})
