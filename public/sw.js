const CACHE_NAME = 'mse-cache-v1';
const IMAGE_EXTENSIONS = /\.(jpg|jpeg|png|gif|webp|svg)$/i;

// Install event - cache is created
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Only cache images from the public folder
  if (IMAGE_EXTENSIONS.test(url.pathname)) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(request).then((cachedResponse) => {
          // Return cached response if available
          if (cachedResponse) {
            console.log('Serving from cache:', url.pathname);
            return cachedResponse;
          }
          
          // Otherwise fetch from network and cache
          return fetch(request).then((networkResponse) => {
            // Cache successful responses
            if (networkResponse && networkResponse.status === 200) {
              console.log('Caching new resource:', url.pathname);
              cache.put(request, networkResponse.clone());
            }
            return networkResponse;
          });
        });
      })
    );
  }
});
