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
					label: 'Getting Started',
					items: [
						{ label: 'Overview', link: '/getting-started/overview' },
						{ label: 'API Overview', link: '/getting-started/api-overview' },
					]
				},
				{
					label: 'Infrastructure',
					items: [
						{ label: 'Infrastructure | Overview', link: '/infrastructure/overview' },
						{
							label: 'Core',
							items: [
								{ label: 'Core | Overview', link: '/infrastructure/core/overview' },
							]
						},
						{
							label: 'Proxmox',
							items: [
								{ label: 'Proxmox | Overview', link: '/infrastructure/proxmox/overview' },
							]
						},
					]
				},
				{
					label: 'Webapp',
					items: [
						{ label: 'Webapp | Overview', link: '/webapp/overview' },
						{
							label: 'Frontend',
							items: [
								{label: 'Frontend | Overview', link: '/webapp/frontend/overview'},
							]
						},
						{
							label: 'Backend',
							items: [
								{ label: 'Backend | Overview', link: '/webapp/backend/overview' },
							]
						},
					],
				},
				{ 
					label: 'Game API',
					items: [
						{ label: 'Game API | Overview', link: '/gameapi/overview' },
					]
				},
				{
					label: 'Game Engine',
					items: [
						{ label: 'Game Engine | Overview', link: '/gameengine/overview' },
						{ 
							label: 'Components',
							items: [
								{ label: 'Components | Main', link: '/gameengine/components/main' }
							]
						},
					]
				},
				{
					label: 'VPN',
					items: [
						{ label: 'VPN | Overview', link: '/vpn/overview' },
						{ 
							label: 'API',
							items: [
								{ label: 'API | Overview', link: '/vpn/api/overview' },
								{ label: 'API | Endpoints', link: '/vpn/api/endpoints' },
								{ label: 'API | Authentication', link: '/vpn/api/authentication'}
							]
						},
						{ 
							label: 'OpenVPN',
							items: [
								{ label: 'OpenVPN | Overview', link: '/vpn/openvpn/overview' },
								{ label: 'OpenVPN | Installation & Setup', link: '/vpn/openvpn/setup' },
							]
						},
					]
				},
				{
					label: 'Healthcheck',
					items: [
						{ label: 'Healthcheck | Overview', link: '/healthcheck/overview' },
					]
				}
			],
		}),
	],
});