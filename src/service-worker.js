import { ExpirationPlugin } from 'workbox-expiration';
import { registerRoute } from 'workbox-routing';
import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching';
import {
	NetworkFirst,
	CacheFirst,
	StaleWhileRevalidate,
} from 'workbox-strategies';

precacheAndRoute(self.__WB_MANIFEST);

cleanupOutdatedCaches();
registerRoute(
	'/',
	new NetworkFirst({
		cacheName: 'start-url',
		plugins: [
			new ExpirationPlugin({
				maxEntries: 1,
				maxAgeSeconds: 86400,
				purgeOnQuotaError: !0,
			}),
		],
	}),
	'GET'
);
registerRoute(
	/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
	new CacheFirst({
		cacheName: 'google-fonts',
		plugins: [
			new ExpirationPlugin({
				maxEntries: 4,
				maxAgeSeconds: 31536e3,
				purgeOnQuotaError: !0,
			}),
		],
	}),
	'GET'
);
registerRoute(
	/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
	new CacheFirst({
		cacheName: 'static-image-assets',
		plugins: [
			new ExpirationPlugin({
				maxEntries: 64,
				maxAgeSeconds: 86400,
				purgeOnQuotaError: !0,
			}),
		],
	}),
	'GET'
);
registerRoute(
	({ request }) => request.destination === 'audio',
	new CacheFirst({
		cacheName: 'audio',
		plugins: [
			new ExpirationPlugin({
				maxEntries: 60,
				maxAgeSeconds: 5 * 24 * 60 * 60, // 30 Days
			}),
		],
	})
);
registerRoute(
	/\.(?:js)$/i,
	new StaleWhileRevalidate({
		cacheName: 'static-js-assets',
		plugins: [
			new ExpirationPlugin({
				maxEntries: 32,
				maxAgeSeconds: 86400,
				purgeOnQuotaError: !0,
			}),
		],
	}),
	'GET'
);
registerRoute(
	/\.(?:css|less)$/i,
	new StaleWhileRevalidate({
		cacheName: 'static-style-assets',
		plugins: [
			new ExpirationPlugin({
				maxEntries: 32,
				maxAgeSeconds: 86400,
				purgeOnQuotaError: !0,
			}),
		],
	}),
	'GET'
);
registerRoute(
	/.*/i,
	new NetworkFirst({
		cacheName: 'others',
		networkTimeoutSeconds: 10,
		plugins: [
			new ExpirationPlugin({
				maxEntries: 32,
				maxAgeSeconds: 86400,
				purgeOnQuotaError: !0,
			}),
		],
	}),
	'GET'
);
