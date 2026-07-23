/* Hält den Starter offline verfügbar. Die beiden Apps dahinter bringen
   ihren eigenen Service Worker mit und kümmern sich selbst um ihre Daten. */
const CACHE = 'poke-hub-v1';
const PRECACHE = ['/', '/index.html', '/manifest.json', '/icon-192.png', '/icon-512.png'];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then((c) => Promise.all(
    PRECACHE.map((u) => c.add(u).catch(() => null))
  )));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(
    ks.filter((k) => k !== CACHE).map((k) => caches.delete(k))
  )).then(() => self.clients.claim()));
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  /* Nur die eigene Startseite bedienen - alles unter /pokewatch/ und
     /pkm-scanner/ gehört den jeweiligen Apps. */
  if (url.origin !== location.origin) return;
  if (url.pathname !== '/' && url.pathname !== '/index.html'
      && !PRECACHE.includes(url.pathname)) return;
  e.respondWith(
    fetch(e.request).then((res) => {
      const copy = res.clone();
      caches.open(CACHE).then((c) => c.put(e.request, copy));
      return res;
    }).catch(() => caches.match(e.request))
  );
});
