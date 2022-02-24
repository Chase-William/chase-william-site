export const manifest = {
	appDir: "_app",
	assets: new Set(["bluequery.png","chase.jpg","favicon.png","lilwidgets.png"]),
	_: {
		mime: {".png":"image/png",".jpg":"image/jpeg"},
		entry: {"file":"start-2bb96dbc.js","js":["start-2bb96dbc.js","chunks/vendor-5cb3b40e.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		]
	}
};
