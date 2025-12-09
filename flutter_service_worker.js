'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2d44723ca2caa410b20d733e338d40ff",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "80b7f3c2a7bb29c643595523dbc0fc2e",
"/": "80b7f3c2a7bb29c643595523dbc0fc2e",
"main.dart.js": "7112b6a86bad6fdae11b10bda2eefdb6",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "51884929380dc400264fb45f4d83d3d2",
"icons/icon-192.png": "c724fb730c54b6102cf8250663ad2724",
"icons/Icon-maskable-192.png": "4bdbd5fce3ecb4c1ebcafb2e794d788e",
"icons/Icon-maskable-512.png": "1934d78e1400705fe809d3017e291b96",
"icons/icon-512.png": "c5ca47e40ec219827d24c72922aa5022",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
".git/config": "694e2b46387c5400e720194fa5ced239",
".git/objects/58/23f619aef48a3aeca7e1ef6017d76165a0d11d": "5732914d971b3ab05f5bce9283443da9",
".git/objects/9d/1808e2185af03bcb31c446b98e3aafe0e51ba9": "220effd6a0e98c460d6ab8235a781e52",
".git/objects/f5/cdead7b28fd7a5b5ad3dec9f1c9fc617b2d3e3": "dbd8f59b2628dfb149ecd7754c0b5c55",
".git/objects/f5/5aaa29e47380c91d9e179cb9f6c0ed88848b43": "226f0b5c72ac45e6463f1504213fb124",
".git/objects/ca/abb7e51824c49ad340ca02aa242694361eafb0": "e8e2b2e54a400bc8939dbb040bd87e49",
".git/objects/c8/65cea1b5d38a81d774e2f4e31103094c9ee160": "f23e49096eb0fd3c1485d094da773feb",
".git/objects/pack/pack-e1efc34031411b98436449ce284024cea86d90e1.pack": "33638bfa9265a6e745ed9d7e8fb9994d",
".git/objects/pack/pack-e1efc34031411b98436449ce284024cea86d90e1.idx": "c03ae6de0f58324393db0b956054ae80",
".git/objects/80/e5ba926e8a06bcef7d91b38e894e688529e4e9": "3b94f5ddbda5e2ba2a84eb47780ecd08",
".git/objects/8f/f22a3322703f88ec8e5d987c5f7ef7e6acc93a": "266be6151079fec2f04c43b1db2e2d92",
".git/objects/98/df71f55329ca482ab6b005dc314456dea328ba": "c93a72f59020082398ce4fd4cbed3f58",
".git/objects/3f/4bf936a9e541673b5a7c07486e52f55e54d72b": "7ff274318bb84bd6f24246e44916ea85",
".git/objects/6c/c8ea5fb53870aeeb8f7db5858ffd3196843ba5": "e51fd9407b29347e0ea95c6b672f7552",
".git/objects/a9/2a328cc8756b531e0c8f6f372269938ae16274": "0dcaea939334054cc289c6119706141d",
".git/objects/db/e342ed42f9bd8edaa10e375a1fd65a325ada72": "9483b17b3a63e5784365551a5b7c0392",
".git/objects/c3/766eac6856b461a3fba6eb73cd9a549834afa9": "b06c2d5f039a9ef934967fc3d5b40f53",
".git/objects/46/09b08225c617c8885e9e6bd13fc199fcb085dd": "a92d3f9234e0d9b72777ea9102e99323",
".git/objects/23/eacbe60df314fc7e6058b5a8804a2fbf091de0": "81fef2a5fd378ff679008e7b9a64f044",
".git/objects/8b/c45d30f7603a1f76f1f1d765cf16543ca765c2": "f64403fedcfd70bf623335609f3d3679",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "ee862404e18e0bd2f2800109c0e14b78",
".git/logs/refs/heads/master": "34ae95042be42dfa66a425088abf25f9",
".git/logs/refs/heads/main": "55d1c3b6f70a10921f5087d4e9d173c8",
".git/logs/refs/remotes/shihab/main": "a06d176dfa272a3c6dc4cdd4984aff01",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "d3bfdbe31ac85ef4f118853ea7a3c581",
".git/refs/heads/main": "9f950638a2aed08e91f3aa02505bf556",
".git/refs/remotes/shihab/main": "9f950638a2aed08e91f3aa02505bf556",
".git/index": "6c1c981d197309cb5dac0151bf5a9dde",
".git/COMMIT_EDITMSG": "c129a4f85e7e43f9cb81c182310951ca",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/NOTICES": "b5605e301a26af63138439e01c80f8e7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "565a741bd85972290e7053707b89de05",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "778c4f78ecc8b1aa0295166f51efe293",
"assets/fonts/MaterialIcons-Regular.otf": "c86437c43cedddf9933ec15c051696fb",
"assets/assets/images/shihab.JPG": "51884929380dc400264fb45f4d83d3d2",
"assets/assets/images/project/laba/laba_2.jpg": "803c7c5958bede3562e7ae553617444c",
"assets/assets/images/project/laba/laba_3.jpg": "eaae297b8cd515c64f8642bf9be5b223",
"assets/assets/images/project/laba/laba_1.jpg": "6e78902bc265c0b7086a96fe9cfc769e",
"assets/assets/images/project/laba/laba_cover.jpg": "39a5f187cc1efa675739ce10c972aa60",
"assets/assets/images/project/madhurima/madhurima_cover.jpg": "a34ef5a65b70e59455abbeec3c5f0172",
"assets/assets/images/project/madhurima/madhurima4.jpg": "c6c79ab6b2ebba8343c584cdc941aabb",
"assets/assets/images/project/madhurima/madhurima3.jpg": "91d43e3579fa2636d4ea739729408068",
"assets/assets/images/project/madhurima/madhurima2.jpg": "79abe1fe15828e0eff66e0ccdc87257b",
"assets/assets/images/project/madhurima/madhurima1.jpg": "7317e9ef6757c8c6ff7c092c64342a86",
"assets/assets/images/project/rose_app/rose_6.jpg": "5e9bbb70f3202592cfddbd7f8551fe10",
"assets/assets/images/project/rose_app/rose_4.jpg": "0d00c0bc5d7b16d8ac863ea51a6cfa76",
"assets/assets/images/project/rose_app/rose_5.jpg": "241a272797149f6394a3601c92a2e1bd",
"assets/assets/images/project/rose_app/rose_1.jpg": "c6a1424a19483a0e91221e512d05b046",
"assets/assets/images/project/rose_app/rose_2.jpg": "13301314cf129a2d8cf05acee55574ec",
"assets/assets/images/project/rose_app/rose_3.jpg": "5920f374f1810f90f71714a72d154fb3",
"assets/assets/images/project/rose_app/rose_cover.jpg": "72f08719bbb75406a4af1ff300c89959",
"assets/assets/images/project/yes_sales/yes5.jpg": "597eca256033b08b8b28a52c124926a9",
"assets/assets/images/project/yes_sales/yes4.jpg": "a1d86949a810758f5cb1ad03e629089d",
"assets/assets/images/project/yes_sales/yes1.jpg": "7c7e5ac7e99f43e4df1189896c28f087",
"assets/assets/images/project/yes_sales/yes3.jpg": "cb5aaca8319dd2f7ed884b8a6866f132",
"assets/assets/images/project/yes_sales/yes2.jpg": "f84333f7dc820fef519daaf8871abe51",
"assets/assets/images/project/yes_sales/yes_cover.jpg": "a4a041b8c91937de27436985060224c7",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
