// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://h4ckwars.github.io/', // On Server 'https://maybeegg.github.io/wint.github.io'
	base: '/', // If local, set to '/' for server use '/wint.github.io/'.
	image: {
		remotePatterns: [],
		domains: [],
	},
	integrations: [
		starlight({
			title: 'Hackwars',
			customCss: [
				'./src/styles/custom.css',
			  ],
			sidebar: [
				{
					label: 'Placeholder',
					items: [
						{ label: 'Example MDX', link: 'placeholder/helloworld' },
					],
				},
			],
		}),
	],
});