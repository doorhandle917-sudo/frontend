export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["coming-soon-site/index.html","coming-soon-site/style.css","favicon.png"]),
	mimeTypes: {".html":"text/html",".css":"text/css",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BLX-ENHI.js","app":"_app/immutable/entry/app.BzRR7Gbi.js","imports":["_app/immutable/entry/start.BLX-ENHI.js","_app/immutable/chunks/entry.B9_gkhER.js","_app/immutable/chunks/runtime.-jlxGDdJ.js","_app/immutable/entry/app.BzRR7Gbi.js","_app/immutable/chunks/runtime.-jlxGDdJ.js","_app/immutable/chunks/store.pxQT-bqo.js","_app/immutable/chunks/disclose-version.CtUUFoU6.js","_app/immutable/chunks/if.66fRKuc8.js","_app/immutable/chunks/props.D9W3uUJ4.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/files",
				pattern: /^\/files\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/files/leaderboard",
				pattern: /^\/files\/leaderboard\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/files/screenshots",
				pattern: /^\/files\/screenshots\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/files/stats",
				pattern: /^\/files\/stats\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
