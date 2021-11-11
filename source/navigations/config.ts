/* eslint-disable @typescript-eslint/no-namespace */

import { LinkingOptions } from '@react-navigation/native'

import * as Linking from 'expo-linking'

export type RootStackParamList = {
	Literatura: undefined
	Home: undefined
	QRCode: undefined
	AddBooks: undefined
}

declare global {
	namespace ReactNavigation {
		interface RootParamList {
			Home: undefined
			Literatura: undefined
			QRCode: undefined
			AddBooks: undefined
		}
	}
}

export const prefix = Linking.createURL('/')

export const linking: LinkingOptions<RootStackParamList> = {
	prefixes: [prefix],
	enabled: true,

	config: {
		screens: {
			Home: {
				path: '/',
			},
			QRCode: {
				path: '/qrcode',
			},
			Literatura: {
				path: '/literatura',
			},
			AddBooks: {
				path: '/6eade882-2e68-43ca-838e-7742b75e7698',
			},
		},
	},
}
