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
					label: 'Getting Started', link: 'overview',
				},
				{
					label: 'Infrastructure',
					items: [
						{ label: 'Overview', link: '/infrastructure/overview' },
						{
							label: 'Core',
							items: [
								{ label: 'Overview', link: '/infrastructure/core/overview' },
							]
						},
						{
							label: 'Proxmox',
							items: [
								{ label: 'Overview', link: '/infrastructure/proxmox/overview' },
							]
						},
					]
				},
				{
					label: 'Webapp',
					items: [
						{ label: 'Overview', link: '/webapp/overview' },
						{
							label: 'Frontend',
							items: [
								{label: 'Overview', link: '/webapp/frontend/overview'},
							]
						},
					],
				},
				{
					label: 'VPN Server',
					items: [
						{ label: 'Overview', link: '/vpn/overview' },
						{ 
							label: 'API',
							items: [
								{ label: 'Overview', link: '/vpn/api/overview' },
								{ label: 'Endpoints', link: '/vpn/api/endpoints' },
								{ label: 'Authentication', link: '/vpn/api/authentication'}
							]
						},
						{ 
							label: 'OpenVPN',
							items: [
								{ label: 'Overview', link: '/vpn/openvpn/overview' },
								{ label: 'Installation', link: '/vpn/openvpn/installation' },
								{ label: 'Configuration', link: '/vpn/openvpn/configuration' },
							]
						},
					]
				},
			],
		}),
	],
});