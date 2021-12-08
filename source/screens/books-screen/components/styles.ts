import { StyleSheet } from 'react-native'

import colors from '@/global/colors'

export const textStyles = StyleSheet.create({
  titleHeader: {
    fontFamily: 'Helvética',
    letterSpacing: 1,
    fontWeight: 'bold',
    color: colors.grey20,
    fontSize: 12,
  },
  attrText: {
    color: colors.grey20,
    margin: 2,
    letterSpacing: 1,
    fontSize: 10,
  },
  subTitleHeader: {
    fontFamily: 'Helvética',
    letterSpacing: 1,
    fontSize: 10,
  },
  authorFooter: {
    color: colors.grey20,
    padding: 8,
    margin: 4,
    letterSpacing: 1,
    fontSize: 10,
  },
  sinopse: {
    fontFamily: 'Helvética',
    textAlign: 'justify',
    letterSpacing: 1,
    fontSize: 12,
    marginStart: 8,
    color: colors.grey20,
    lineHeight: 18,
  },
  buttonText: {
    color: colors.grey20,
    letterSpacing: 1,

    fontSize: 12,
    fontWeight: '600',
  },
})

export const viewStyles = StyleSheet.create({
  viewCard: {
    flex: 1,
    flexDirection: 'row',
    padding: 12,
    marginHorizontal: 20,
    marginVertical: 8,
    minHeight: 300,
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: '#fff',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  viewContainerImage: {
    flex: 1,
    minWidth: 150,
    maxWidth: 150,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  viewImage: {
    elevation: 5,
    maxHeight: 200,
    width: 150,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  viewDetails: {
    flex: 4,
    justifyContent: 'space-between',
    marginHorizontal: 12,

    flexWrap: 'wrap',
  },
  viewHeader: {
    padding: 8,
  },
  viewButtons: {
    flexDirection: 'row',
  },
  viewButton: {
    padding: 8,
    margin: 4,
  },
  viewSinopse: {
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  viewFooter: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  viewAttributes: { flexDirection: 'row', padding: 4 },
})
