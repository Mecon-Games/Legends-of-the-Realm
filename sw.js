const N='lotr-2',F=['./','index.html','manifest.webmanifest','icon.svg','lib/peerjs.min.js','lib/qrcode.js','lib/jsQR.js'];
self.addEventListener('install',e=>e.waitUntil(caches.open(N).then(c=>c.addAll(F))));
self.addEventListener('fetch',e=>e.respondWith(fetch(e.request).catch(()=>caches.match(e.request))));
