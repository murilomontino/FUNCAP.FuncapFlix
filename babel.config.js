// eslint-disable-next-line no-undef
module.exports = function (api) {
	api.cache(true)
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			'react-native-reanimated/plugin',
			[
				'module-resolver',
				{
					alias: {
						forms: './source/forms',
						data: './source/data',
						assets: './source/assets',
						modules: './source/modules',
						context: './source/context',
						navigations: './source/navigations',
						components: './source/components',
						global: './source/global',
						utils: './source/utils',
						hooks: './source/hooks',
						screens: './source/screens',
						types: './source/types',
						services: './source/services'
					},

				},
			],
		],
	}
}
