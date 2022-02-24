import { init } from '../handler.js';

export const handler = init({
	appDir: "_app",
	assets: new Set(["bluequery.png","chase.jpg","favicon.png","lilwidgets.png"]),
	_: {
		mime: {".png":"image/png",".jpg":"image/jpeg"},
		entry: {"file":"start-2bb96dbc.js","js":["start-2bb96dbc.js","chunks/vendor-5cb3b40e.js"],"css":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js')
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
});
