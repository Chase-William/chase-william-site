import './shims.js';
import { Server } from './server/index.js';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:util';
import 'node:url';
import 'net';

/**
 * Splits headers into two categories: single value and multi value
 * @param {Headers} headers
 * @returns {{
 *   headers: Record<string, string>,
 *   multiValueHeaders: Record<string, string[]>
 * }}
 */
function split_headers(headers) {
	/** @type {Record<string, string>} */
	const h = {};

	/** @type {Record<string, string[]>} */
	const m = {};

	headers.forEach((value, key) => {
		if (key === 'set-cookie') {
			// @ts-expect-error (headers.raw() is non-standard)
			m[key] = headers.raw()[key];
		} else {
			h[key] = value;
		}
	});

	return {
		headers: h,
		multiValueHeaders: m
	};
}

/**
 * @param {import('@sveltejs/kit').SSRManifest} manifest
 * @returns {import('@netlify/functions').Handler}
 */
function init(manifest) {
	const server = new Server(manifest);

	return async (event) => {
		const rendered = await server.respond(to_request(event));

		const partial_response = {
			statusCode: rendered.status,
			...split_headers(rendered.headers)
		};

		// TODO this is probably wrong now?
		if (rendered.body instanceof Uint8Array) {
			// Function responses should be strings (or undefined), and responses with binary
			// content should be base64 encoded and set isBase64Encoded to true.
			// https://github.com/netlify/functions/blob/main/src/function/response.ts
			return {
				...partial_response,
				isBase64Encoded: true,
				body: Buffer.from(rendered.body).toString('base64')
			};
		}

		return {
			...partial_response,
			body: await rendered.text()
		};
	};
}

/**
 * @param {import('@netlify/functions').HandlerEvent} event
 * @returns {Request}
 */
function to_request(event) {
	const { httpMethod, headers, rawUrl, body, isBase64Encoded } = event;

	/** @type {RequestInit} */
	const init = {
		method: httpMethod,
		headers: new Headers(headers)
	};

	if (httpMethod !== 'GET' && httpMethod !== 'HEAD') {
		const encoding = isBase64Encoded ? 'base64' : 'utf-8';
		init.body = typeof body === 'string' ? Buffer.from(body, encoding) : body;
	}

	return new Request(rawUrl, init);
}

export { init };
