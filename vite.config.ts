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
			include: ['src/**/*.{test,spec}.{js,ts}'],
			alias: {
				$lib: 'src/lib'
			},
			coverage: {
				provider: 'v8',
				reporter: ['text', 'json', 'html']
			}
		},
		resolve: {
			conditions: mode === 'test' ? ['browser'] : []
		}
	};
});
