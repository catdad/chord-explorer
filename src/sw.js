/* eslint-disable no-console */

self.importScripts('precache-manifest.js');

self.addEventListener('fetch', (event) => {
  console.log('fetch', event.request.method, event.request.url);
  event.respondWith(fetch(event.request));
});
