/* eslint-disable @typescript-eslint/no-namespace */
import React from 'react'
import { Text } from 'react-native'

import { LinkingOptions, NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import * as Linking from 'expo-linking'

import LiteraturaPage from 'screens/LiteraturaPage'
import Home from 'screens/LiteraturaPage'
import QRCodeScreen from 'screens/QRCode'

import PdfViewer from 'components/organism/PDFViewer'
import Front from 'components/templates/Front'

const prefix = Linking.createURL('/')

const Stack = createStackNavigator()

export type RootStackParamList = {
	Literatura: undefined
	Home: undefined
	QRCode: undefined
	PDFView: { id: string; author?: string; title?: string }
}

declare global {
	namespace ReactNavigation {
		interface RootParamList {
			Home: undefined
			Literatura: undefined
			QRCode: undefined
			PDFView: { id: string; author?: string; title?: string }
		}
	}
}

const themeDefault = {
	dark: true,
	colors: {
		background: 'transparent',
		notification: '#fff',
		border: '#000',
	},
}

const Navigation: React.FC = () => {
	const TemplateFront: React.FC = ({ children }) => {
		return <Front>{children}</Front>
	}

	const linking: LinkingOptions<RootStackParamList> = {
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
				PDFView: {
					path: '/literatura/leitorpdf/:id/:author?&:title?',
				},
			},
		},
	}

	return (
		<NavigationContainer
			theme={themeDefault}
			linking={linking}
			fallback={<Text>Loading...</Text>}
		>
			<Stack.Navigator
				screenOptions={{
					headerTitleAlign: 'center',
					headerShown: false,
				}}
			>
				<Stack.Screen
					component={({ ...rest }) =>
						TemplateFront({ children: <LiteraturaPage {...rest} /> })
					}
					name="Literatura"
				/>
				<Stack.Screen
					component={({ ...rest }) =>
						TemplateFront({ children: <QRCodeScreen {...rest} /> })
					}
					name="QRCode"
				/>
				<Stack.Screen
					component={({ ...rest }) =>
						TemplateFront({ children: <Home {...rest} /> })
					}
					name="Home"
				/>
				<Stack.Screen
					component={({ ...rest }) =>
						TemplateFront({ children: <PdfViewer {...rest} /> })
					}
					name="PDFView"
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}
export default Navigation
