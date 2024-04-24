
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
	export const DATABASE_URL: string;
	export const GCP_PROJECT_ID: string;
	export const GCP_BUCKET: string;
	export const GCP_PRIVATE_KEY: string;
	export const AUTH_SECRET: string;
	export const AUTH_GITHUB_ID: string;
	export const AUTH_GITHUB_SECRET: string;
	export const TEST_USERNAME: string;
	export const TEST_PASSWORD: string;
	export const CUSTOM_ENV: string;
	export const NVM_INC: string;
	export const MANPATH: string;
	export const VSCODE_CLI: string;
	export const TERM_PROGRAM: string;
	export const VSCODE_CRASH_REPORTER_PROCESS_TYPE: string;
	export const NODE: string;
	export const INIT_CWD: string;
	export const NVM_CD_FLAGS: string;
	export const _P9K_TTY: string;
	export const SHELL: string;
	export const TERM: string;
	export const HOMEBREW_REPOSITORY: string;
	export const TMPDIR: string;
	export const npm_config_global_prefix: string;
	export const CONDA_SHLVL: string;
	export const CONDA_PROMPT_MODIFIER: string;
	export const TERM_PROGRAM_VERSION: string;
	export const MallocNanoZone: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const COLOR: string;
	export const TERM_SESSION_ID: string;
	export const npm_config_noproxy: string;
	export const npm_config_local_prefix: string;
	export const ZSH: string;
	export const NVM_DIR: string;
	export const USER: string;
	export const COMMAND_MODE: string;
	export const npm_config_globalconfig: string;
	export const CONDA_EXE: string;
	export const PW_TEST_DISABLE_TRACING: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_execpath: string;
	export const PAGER: string;
	export const VSCODE_AMD_ENTRYPOINT: string;
	export const LSCOLORS: string;
	export const PATH: string;
	export const PW_TEST_CONNECT_WS_ENDPOINT: string;
	export const npm_package_json: string;
	export const npm_config_engine_strict: string;
	export const _: string;
	export const XML_CATALOG_FILES: string;
	export const npm_config_userconfig: string;
	export const npm_config_init_module: string;
	export const CONDA_PREFIX: string;
	export const __CFBundleIdentifier: string;
	export const npm_command: string;
	export const PWD: string;
	export const ELECTRON_NO_ATTACH_CONSOLE: string;
	export const VSCODE_HANDLES_UNCAUGHT_ERRORS: string;
	export const PW_TEST_REPORTER: string;
	export const npm_lifecycle_event: string;
	export const EDITOR: string;
	export const P9K_SSH: string;
	export const npm_package_name: string;
	export const P9K_TTY: string;
	export const npm_config_npm_version: string;
	export const XPC_FLAGS: string;
	export const FORCE_COLOR: string;
	export const npm_config_node_gyp: string;
	export const npm_package_version: string;
	export const XPC_SERVICE_NAME: string;
	export const PW_TEST_REUSE_CONTEXT: string;
	export const DEBUG_COLORS: string;
	export const HOME: string;
	export const SHLVL: string;
	export const APPLICATION_INSIGHTS_NO_DIAGNOSTIC_CHANNEL: string;
	export const VSCODE_NLS_CONFIG: string;
	export const HOMEBREW_PREFIX: string;
	export const PW_TEST_REPORTER_WS_ENDPOINT: string;
	export const npm_config_cache: string;
	export const CONDA_PYTHON_EXE: string;
	export const LESS: string;
	export const LOGNAME: string;
	export const npm_lifecycle_script: string;
	export const LC_CTYPE: string;
	export const VSCODE_CODE_CACHE_PATH: string;
	export const VSCODE_IPC_HOOK: string;
	export const BUN_INSTALL: string;
	export const CONDA_DEFAULT_ENV: string;
	export const NVM_BIN: string;
	export const npm_config_user_agent: string;
	export const BROWSER: string;
	export const VSCODE_PID: string;
	export const HOMEBREW_CELLAR: string;
	export const INFOPATH: string;
	export const PW_TEST_HTML_REPORT_OPEN: string;
	export const PW_TEST_NO_REMOVE_OUTPUT_DIRS: string;
	export const VSCODE_CWD: string;
	export const DEBUG: string;
	export const VSCODE_L10N_BUNDLE_LOCATION: string;
	export const npm_node_execpath: string;
	export const npm_config_prefix: string;
	export const VITE_USER_NODE_ENV: string;
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
		DATABASE_URL: string;
		GCP_PROJECT_ID: string;
		GCP_BUCKET: string;
		GCP_PRIVATE_KEY: string;
		AUTH_SECRET: string;
		AUTH_GITHUB_ID: string;
		AUTH_GITHUB_SECRET: string;
		TEST_USERNAME: string;
		TEST_PASSWORD: string;
		CUSTOM_ENV: string;
		NVM_INC: string;
		MANPATH: string;
		VSCODE_CLI: string;
		TERM_PROGRAM: string;
		VSCODE_CRASH_REPORTER_PROCESS_TYPE: string;
		NODE: string;
		INIT_CWD: string;
		NVM_CD_FLAGS: string;
		_P9K_TTY: string;
		SHELL: string;
		TERM: string;
		HOMEBREW_REPOSITORY: string;
		TMPDIR: string;
		npm_config_global_prefix: string;
		CONDA_SHLVL: string;
		CONDA_PROMPT_MODIFIER: string;
		TERM_PROGRAM_VERSION: string;
		MallocNanoZone: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		COLOR: string;
		TERM_SESSION_ID: string;
		npm_config_noproxy: string;
		npm_config_local_prefix: string;
		ZSH: string;
		NVM_DIR: string;
		USER: string;
		COMMAND_MODE: string;
		npm_config_globalconfig: string;
		CONDA_EXE: string;
		PW_TEST_DISABLE_TRACING: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_execpath: string;
		PAGER: string;
		VSCODE_AMD_ENTRYPOINT: string;
		LSCOLORS: string;
		PATH: string;
		PW_TEST_CONNECT_WS_ENDPOINT: string;
		npm_package_json: string;
		npm_config_engine_strict: string;
		_: string;
		XML_CATALOG_FILES: string;
		npm_config_userconfig: string;
		npm_config_init_module: string;
		CONDA_PREFIX: string;
		__CFBundleIdentifier: string;
		npm_command: string;
		PWD: string;
		ELECTRON_NO_ATTACH_CONSOLE: string;
		VSCODE_HANDLES_UNCAUGHT_ERRORS: string;
		PW_TEST_REPORTER: string;
		npm_lifecycle_event: string;
		EDITOR: string;
		P9K_SSH: string;
		npm_package_name: string;
		P9K_TTY: string;
		npm_config_npm_version: string;
		XPC_FLAGS: string;
		FORCE_COLOR: string;
		npm_config_node_gyp: string;
		npm_package_version: string;
		XPC_SERVICE_NAME: string;
		PW_TEST_REUSE_CONTEXT: string;
		DEBUG_COLORS: string;
		HOME: string;
		SHLVL: string;
		APPLICATION_INSIGHTS_NO_DIAGNOSTIC_CHANNEL: string;
		VSCODE_NLS_CONFIG: string;
		HOMEBREW_PREFIX: string;
		PW_TEST_REPORTER_WS_ENDPOINT: string;
		npm_config_cache: string;
		CONDA_PYTHON_EXE: string;
		LESS: string;
		LOGNAME: string;
		npm_lifecycle_script: string;
		LC_CTYPE: string;
		VSCODE_CODE_CACHE_PATH: string;
		VSCODE_IPC_HOOK: string;
		BUN_INSTALL: string;
		CONDA_DEFAULT_ENV: string;
		NVM_BIN: string;
		npm_config_user_agent: string;
		BROWSER: string;
		VSCODE_PID: string;
		HOMEBREW_CELLAR: string;
		INFOPATH: string;
		PW_TEST_HTML_REPORT_OPEN: string;
		PW_TEST_NO_REMOVE_OUTPUT_DIRS: string;
		VSCODE_CWD: string;
		DEBUG: string;
		VSCODE_L10N_BUNDLE_LOCATION: string;
		npm_node_execpath: string;
		npm_config_prefix: string;
		VITE_USER_NODE_ENV: string;
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
