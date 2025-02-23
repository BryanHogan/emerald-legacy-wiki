// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Emerald Legacy',
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			  ],
			social: {
				github: 'https://github.com/cRz-Shadows/Pokemon_Emerald_Legacy',
			},
			sidebar: [
				{
					label: 'Intro',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Welcome', slug: 'general/welcome' },
						{ label: 'How To Play', slug: 'general/how-to-play' },
					],
				},
				{
					label: 'General Changes',
					items: [
						{ label: '👷‍♂️ Trainers', slug: 'general-changes/trainers' },
						{ label: '💰 Items', slug: 'general-changes/items' },
						{ label: '⚔️ Move Changes', slug: 'general-changes/move-changes' },
					],
				},
				{
					label: 'Pokemon Changes',
					items: [
						{ label: 'Overview', slug: 'pokemon-changes/overview' },
						{ label: '📊 Stat Changes', slug: 'pokemon-changes/stats' },
						{ label: '🦖 Evolution Changes', slug: 'pokemon-changes/evolutions' },
						{ label: '💿 Learnset Changes', slug: 'pokemon-changes/learnsets' },
						{ label: '☀️ Ability Changes', slug: 'pokemon-changes/abilities' },
					],
				},
				{
					label: 'Miscellaneous',
					items: [
						{ label: 'About', slug: 'miscellaneous/about' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
