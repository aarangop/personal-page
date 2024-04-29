
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const NODE_ENV: string;
	export const ENV: string;
	export const DATABASE_URL: string;
	export const GCP_PROJECT_ID: string;
	export const GCP_BUCKET: string;
	export const GCP_PRIVATE_KEY: string;
	export const AUTH_SECRET: string;
	export const AUTH_GITHUB_ID: string;
	export const AUTH_GITHUB_SECRET: string;
	export const TEST_USERNAME: string;
	export const TEST_PASSWORD: string;
	export const ELECTRON_RUN_AS_NODE: string;
	export const BUN_INSTALL: string;
	export const COLORFGBG: string;
	export const COLORTERM: string;
	export const COMMAND_MODE: string;
	export const CONDA_DEFAULT_ENV: string;
	export const CONDA_EXE: string;
	export const CONDA_PREFIX: string;
	export const CONDA_PROMPT_MODIFIER: string;
	export const CONDA_PYTHON_EXE: string;
	export const CONDA_SHLVL: string;
	export const ELECTRON_NO_ATTACH_CONSOLE: string;
	export const HOME: string;
	export const HOMEBREW_CELLAR: string;
	export const HOMEBREW_PREFIX: string;
	export const HOMEBREW_REPOSITORY: string;
	export const INFOPATH: string;
	export const ITERM_PROFILE: string;
	export const ITERM_SESSION_ID: string;
	export const LC_CTYPE: string;
	export const LC_TERMINAL: string;
	export const LC_TERMINAL_VERSION: string;
	export const LESS: string;
	export const LOGNAME: string;
	export const LSCOLORS: string;
	export const MANPATH: string;
	export const MallocNanoZone: string;
	export const NVM_BIN: string;
	export const NVM_CD_FLAGS: string;
	export const NVM_DIR: string;
	export const NVM_INC: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const P9K_SSH: string;
	export const P9K_TTY: string;
	export const PAGER: string;
	export const PATH: string;
	export const PWD: string;
	export const SHELL: string;
	export const SHLVL: string;
	export const SQLITE_EXEMPT_PATH_FROM_VNODE_GUARDS: string;
	export const SSH_AUTH_SOCK: string;
	export const TERM: string;
	export const TERM_PROGRAM: string;
	export const TERM_PROGRAM_VERSION: string;
	export const TERM_SESSION_ID: string;
	export const TMPDIR: string;
	export const USER: string;
	export const VSCODE_AMD_ENTRYPOINT: string;
	export const VSCODE_CLI: string;
	export const VSCODE_CODE_CACHE_PATH: string;
	export const VSCODE_CRASH_REPORTER_PROCESS_TYPE: string;
	export const VSCODE_CWD: string;
	export const VSCODE_HANDLES_UNCAUGHT_ERRORS: string;
	export const VSCODE_IPC_HOOK: string;
	export const VSCODE_NLS_CONFIG: string;
	export const VSCODE_PID: string;
	export const XML_CATALOG_FILES: string;
	export const XPC_FLAGS: string;
	export const XPC_SERVICE_NAME: string;
	export const ZSH: string;
	export const _P9K_TTY: string;
	export const __CFBundleIdentifier: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const APPLICATION_INSIGHTS_NO_DIAGNOSTIC_CHANNEL: string;
	export const DEBUG: string;
	export const VSCODE_L10N_BUNDLE_LOCATION: string;
	export const VITEST_VSCODE: string;
	export const TEST: string;
	export const VITEST: string;
	export const VITE_USER_NODE_ENV: string;
	export const PROD: string;
	export const DEV: string;
	export const BASE_URL: string;
	export const MODE: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		NODE_ENV: string;
		ENV: string;
		DATABASE_URL: string;
		GCP_PROJECT_ID: string;
		GCP_BUCKET: string;
		GCP_PRIVATE_KEY: string;
		AUTH_SECRET: string;
		AUTH_GITHUB_ID: string;
		AUTH_GITHUB_SECRET: string;
		TEST_USERNAME: string;
		TEST_PASSWORD: string;
		ELECTRON_RUN_AS_NODE: string;
		BUN_INSTALL: string;
		COLORFGBG: string;
		COLORTERM: string;
		COMMAND_MODE: string;
		CONDA_DEFAULT_ENV: string;
		CONDA_EXE: string;
		CONDA_PREFIX: string;
		CONDA_PROMPT_MODIFIER: string;
		CONDA_PYTHON_EXE: string;
		CONDA_SHLVL: string;
		ELECTRON_NO_ATTACH_CONSOLE: string;
		HOME: string;
		HOMEBREW_CELLAR: string;
		HOMEBREW_PREFIX: string;
		HOMEBREW_REPOSITORY: string;
		INFOPATH: string;
		ITERM_PROFILE: string;
		ITERM_SESSION_ID: string;
		LC_CTYPE: string;
		LC_TERMINAL: string;
		LC_TERMINAL_VERSION: string;
		LESS: string;
		LOGNAME: string;
		LSCOLORS: string;
		MANPATH: string;
		MallocNanoZone: string;
		NVM_BIN: string;
		NVM_CD_FLAGS: string;
		NVM_DIR: string;
		NVM_INC: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		P9K_SSH: string;
		P9K_TTY: string;
		PAGER: string;
		PATH: string;
		PWD: string;
		SHELL: string;
		SHLVL: string;
		SQLITE_EXEMPT_PATH_FROM_VNODE_GUARDS: string;
		SSH_AUTH_SOCK: string;
		TERM: string;
		TERM_PROGRAM: string;
		TERM_PROGRAM_VERSION: string;
		TERM_SESSION_ID: string;
		TMPDIR: string;
		USER: string;
		VSCODE_AMD_ENTRYPOINT: string;
		VSCODE_CLI: string;
		VSCODE_CODE_CACHE_PATH: string;
		VSCODE_CRASH_REPORTER_PROCESS_TYPE: string;
		VSCODE_CWD: string;
		VSCODE_HANDLES_UNCAUGHT_ERRORS: string;
		VSCODE_IPC_HOOK: string;
		VSCODE_NLS_CONFIG: string;
		VSCODE_PID: string;
		XML_CATALOG_FILES: string;
		XPC_FLAGS: string;
		XPC_SERVICE_NAME: string;
		ZSH: string;
		_P9K_TTY: string;
		__CFBundleIdentifier: string;
		__CF_USER_TEXT_ENCODING: string;
		APPLICATION_INSIGHTS_NO_DIAGNOSTIC_CHANNEL: string;
		DEBUG: string;
		VSCODE_L10N_BUNDLE_LOCATION: string;
		VITEST_VSCODE: string;
		TEST: string;
		VITEST: string;
		VITE_USER_NODE_ENV: string;
		PROD: string;
		DEV: string;
		BASE_URL: string;
		MODE: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
