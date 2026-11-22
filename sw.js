// Service worker: zorgt dat de spelletjes als app installeerbaar zijn en offline werken.
// Nieuw spel of nieuwe bestanden? Zet ze in FILES en verhoog VERSION.
const VERSION = 'spelletjes-v1';

const SOUNDS = [
  'bird1', 'bird2', 'bird3', 'bird4', 'cat1', 'cat2', 'cat3', 'cat4',
  'chicken1', 'chicken2', 'chicken3', 'chicken4', 'cow1', 'cow2', 'cow3', 'cow4',
  'dog1', 'dog2', 'dog3', 'dog4', 'elephant1', 'elephant2', 'elephant3', 'elephant4',
  'frog1', 'frog2', 'frog3', 'frog4', 'goat1', 'goat2', 'horse1', 'horse2', 'horse3', 'horse4',
  'lion1', 'lion2', 'lion3', 'monkey1', 'monkey2', 'monkey3', 'pig1', 'pig2', 'pig3', 'pig4',
  'snake1', 'snake2', 'snake3',
].map(n => `games/dieren-raden/geluiden/${n}.mp3`);

const FILES = [
  './',
  'index.html',
  'manifest.webmanifest',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/apple-touch-icon.png',
  'games/sloop-en-bouw/',
  'games/dieren-raden/',
  'games/dieren-raden/geluiden/manifest.json',
  'games/ballonnen/',
  ...SOUNDS,
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Pagina's en kleine tekstbestanden: meteen uit de cache, op de achtergrond verversen
// (een update is er dus bij de volgende keer openen). Geluiden en plaatjes: alleen cache.
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  const refresh = req.mode === 'navigate' || /\.(html|json|webmanifest)$|\/$/.test(new URL(req.url).pathname);
  e.respondWith(caches.open(VERSION).then(async cache => {
    const hit = await cache.match(req, { ignoreSearch: true });
    const net = fetch(req).then(res => {
      if (res.ok && res.type === 'basic') cache.put(req, res.clone());
      return res;
    });
    if (hit) {
      if (refresh) e.waitUntil(net.catch(() => {}));
      return hit;
    }
    return net;
  }));
});
