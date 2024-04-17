import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import Icons from 'unplugin-icons/vite';
import { nodeLoaderPlugin } from '@vavite/node-loader/plugin';

export default defineConfig(({ mode }) => {
	let plugins = [
		sveltekit(),
		Icons({
			autoInstall: true
		})
	];

	if (mode === 'development') {
		plugins = [nodeLoaderPlugin(), ...plugins];
	}

	return {
		plugins,
		test: {
			environment: 'jsdom',
			setupFiles: ['./vitest-setup.ts'],
			include: ['tests/unit_tests/**/*.{test,spec}.{js,ts}']
		},
		resolve: {
			conditions: mode === 'test' ? ['browser'] : []
		}
	};
});
