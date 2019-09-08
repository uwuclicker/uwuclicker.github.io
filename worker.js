// version: 0.1.0
self.addEventListener('fetch', function(e) {
    e.waitUntil(
        caches.open('the-magic-cache').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json',
                '/icon-192.png'
            ]);
        })
    );
});

self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});