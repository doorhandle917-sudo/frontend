export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["coming-soon-site/index.html","coming-soon-site/style.css","favicon.png"]),
	mimeTypes: {".html":"text/html",".css":"text/css",".png":"image/png",".avif":"image/avif"},
	_: {
		client: {start:"_app/immutable/entry/start.DE0JmQam.js",app:"_app/immutable/entry/app.DID9ImJ5.js",imports:["_app/immutable/entry/start.DE0JmQam.js","_app/immutable/chunks/B-rGqlmV.js","_app/immutable/chunks/CLoVlWKP.js","_app/immutable/chunks/C29Nzhzm.js","_app/immutable/entry/app.DID9ImJ5.js","_app/immutable/chunks/CLoVlWKP.js","_app/immutable/chunks/hz-jUBbO.js","_app/immutable/chunks/DYOGjZ7S.js","_app/immutable/chunks/CqiIHHXz.js","_app/immutable/chunks/BT-pN2qV.js","_app/immutable/chunks/C29Nzhzm.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		remotes: {
			
		},
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
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {"_app/immutable/assets/2025-11-04_14-20.BpQAbKDz.avif":17072,"_app/immutable/assets/2025-11-04_15-07.DSXtkpta.avif":24487,"_app/immutable/assets/2025-11-11_12-14.C7Bvd1zS.avif":9465,"_app/immutable/assets/2025-11-12_09-10.C2XiAN3p.avif":11038,"_app/immutable/assets/2025-11-12_09-11_1.B0-G3YlU.avif":4976,"_app/immutable/assets/2025-11-12_09-11_2.DeRI2Syr.avif":7649,"_app/immutable/assets/2025-11-12_09-12.CJjhehJ4.avif":9651,"_app/immutable/assets/2025-11-12_09-13_1.OIyaQRBG.avif":7308,"_app/immutable/assets/2025-11-12_09-13_2.D0ieoF7O.avif":5535,"_app/immutable/assets/2025-11-12_09-14_2.BlUycrCe.avif":4281,"_app/immutable/assets/2025-11-12_09-28.B7WuiW7a.avif":8229,"_app/immutable/assets/2025-11-12_09-29.BmjOakty.avif":5891,"_app/immutable/assets/2025-11-12_09-51_1.BTrj82yt.avif":8040,"_app/immutable/assets/2025-11-12_09-51_2.DCWIAWwE.avif":9290,"_app/immutable/assets/2025-11-12_11-29.BVMjgsyC.avif":52184,"_app/immutable/assets/2025-11-12_11-29_1.BwhCir7N.avif":10177,"_app/immutable/assets/2025-11-12_11-30.PGf_hSaz.avif":4147,"_app/immutable/assets/2025-11-12_14-41.zj04PwNa.avif":4570,"_app/immutable/assets/2025-11-12_16-07.CSRktp32.avif":12533,"_app/immutable/assets/5hjjgh.CXC9xcfd.avif":9956,"_app/immutable/assets/87.YJj9Hjsx.avif":7750,"_app/immutable/assets/IMG_1687.DhpG1qx9.avif":6611,"_app/immutable/assets/Snimka_obrazovky_2025-12-04_170704.BLpxEBjF.avif":4578,"_app/immutable/assets/dfukfyyukfukyyuk.DPZNFGKs.avif":8853,"_app/immutable/assets/dghjdghjghj.DQL-eqwO.avif":10206,"_app/immutable/assets/djhdghjghj.C_moVZQ6.avif":35739,"_app/immutable/assets/dvdcbcxvb.B9ZIrR-c.avif":21495,"_app/immutable/assets/fghfdghfdgh.CYmdPsNT.avif":14526,"_app/immutable/assets/fuyfyuifyuifiyu.Csqgh3NZ.avif":25514,"_app/immutable/assets/fyoufyoufoy.B8TjZNc4.avif":12342,"_app/immutable/assets/gffxghhxfg.PSJVigOA.avif":4957,"_app/immutable/assets/gjkl vui.Bbj5rD9B.avif":7443,"_app/immutable/assets/glkljgjkl.DzLg-OfU.avif":31410,"_app/immutable/assets/gupguioiogu.DvMy69tM.avif":4656,"_app/immutable/assets/gzffgfgx.BE2jN7UD.avif":9370,"_app/immutable/assets/htrbfgx.CswpGcfn.avif":28161,"_app/immutable/assets/ifyukyukfykfu.CT1thsGX.avif":36705,"_app/immutable/assets/image0 7 8v.4iQ7vCIo.avif":36278,"_app/immutable/assets/image0.mVmjDUZJ.avif":26000,"_app/immutable/assets/jlkuilluiyliu.BItKgz6D.avif":23161,"_app/immutable/assets/oppohohpiuhop.BV11JGiM.avif":55500,"_app/immutable/assets/uiofguigouigo.CoYYwCqr.avif":4931,"_app/immutable/assets/vbnmvbmnmh.QEkkEhDP.avif":10680,"_app/immutable/assets/vcbcxvbxcvb.DiY0uJIs.avif":10490,"_app/immutable/assets/ydictd.GXi4SNdv.avif":10158,"_app/immutable/assets/yfgjxxfjxfjxfjgjfg.CiPhEmL9.avif":64050,"_app/immutable/assets/yfui.DDmK8moN.avif":10894,"_app/immutable/assets/yusftthfxsxfh.5yoMG_RF.avif":23095,"_app/immutable/assets/zvbxcvbzcxcvxb.BCPjtDYO.avif":7576}
	}
}
})();
