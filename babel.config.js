// eslint-disable-next-line no-undef
module.exports = function (api) {
	api.cache(true)
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			'react-native-reanimated/plugin',
      "@babel/plugin-transform-modules-commonjs",
			[
				'module-resolver',
				{
          alias: {
            '@/assets': './source/assets',
            '@/components': './source/components',
            '@/context': './source/context',
            '@/theme': './source/theme',
						'@/data': './source/data',
            '@/forms': './source/forms',
            '@/global': './source/global',
            '@/hooks': './source/hooks',
						'@/modules': './source/modules',

						'@/navigations': './source/navigations',
						'@/redux': './source/redux',
            '@/screens': './source/screens',


            '@/services': './source/services',
						'@/types': './source/types',
            '@/utils': './source/utils',

					},

				},
			],
		],
	}
}
