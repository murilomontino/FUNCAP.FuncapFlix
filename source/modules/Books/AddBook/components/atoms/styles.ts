import { StyleSheet } from 'react-native'

import colors from 'global/colors'

export const styles = StyleSheet.create({
  textAreaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    margin: 8,
    alignItems: 'center',
    alignSelf: 'flex-start',
    boxShadow: 0,
  },
  topicForm: {
    fontWeight: 'bold',
    color: '#787b7b',
    padding: 8,
    textAlign: 'right',
  },
  viewTitle: {
    flex: 1,
  },
  textArea: {
    color: colors.grey20,
    fontWeight: 600,

    backgroundColor: '#d6d6d6',
    padding: 8,
    flex: 4,
    justifyContent: 'flex-start',
  },
})
