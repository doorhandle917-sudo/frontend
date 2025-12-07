
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/files" | "/files/leaderboard" | "/files/screenshots" | "/files/stats";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/files": Record<string, never>;
			"/files/leaderboard": Record<string, never>;
			"/files/screenshots": Record<string, never>;
			"/files/stats": Record<string, never>
		};
		Pathname(): "/" | "/files" | "/files/" | "/files/leaderboard" | "/files/leaderboard/" | "/files/screenshots" | "/files/screenshots/" | "/files/stats" | "/files/stats/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/coming-soon-site/index.html" | "/coming-soon-site/style.css" | "/favicon.png" | string & {};
	}
}