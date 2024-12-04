'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "392727fcecc337da83f8b729db40e381",
"assets/AssetManifest.bin.json": "6687f34938d6560a44000837195e28d2",
"assets/AssetManifest.json": "1f86b38f725c47ba02a6025566581e5d",
"assets/assets/fonts/Gotham-Bold.otf": "9c35bf87f23c8cca614720126fe0baa0",
"assets/assets/fonts/Gotham-Light.otf": "0ff4bccb0c544c4b15f5cc47c8bdee5f",
"assets/assets/fonts/Gotham-Medium.otf": "27a90e8757eda1edc9872eebec18ba64",
"assets/assets/fonts/Gotham-Regular.ttf": "b54724f54d4dd3f6796e3c4cc422f998",
"assets/assets/fonts/Raleway-Black.ttf": "ca057783cb90d483d16662f202212050",
"assets/assets/fonts/Raleway-Bold.ttf": "21c82294041b1504a5cbe4f566c8acd6",
"assets/assets/fonts/Raleway-ExtraBold.ttf": "1d8b73517fb37be5cf23cd3843ad4eb2",
"assets/assets/fonts/Raleway-Medium.ttf": "0c8c5471e4a8bfe0f6167f56bcf1e2d3",
"assets/assets/fonts/Raleway-Regular.ttf": "d95649da7dfb965a289ac29105ce8771",
"assets/assets/fonts/Raleway-SemiBold.ttf": "804eb7bc11d3a38d5f5e108f8d1d1acd",
"assets/assets/fonts/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/assets/fonts/WorkSans-Bold.ttf": "1559ffc7cf61cbae7ea55a250722009c",
"assets/assets/fonts/WorkSans-ExtraBold.ttf": "bbd6edc88df326a3283424a0a1c711f0",
"assets/assets/fonts/WorkSans-Medium.ttf": "73f5c36f3da9740c41b2c1aeb7fc94e5",
"assets/assets/fonts/WorkSans-SemiBold.ttf": "c1b2dde1705db3ada7fd668c36523f66",
"assets/assets/fonts/WorkSans-Thin.ttf": "6b3fb1a15d5c60fd9944e8c218525984",
"assets/assets/icons/admins.png": "52c4982b44091dfddf6ab39696232c79",
"assets/assets/icons/bus_logo.png": "b52859e3406fe915b848114c2695eba7",
"assets/assets/icons/complain_icon.png": "e1beee1b7d2c0535475e4ea7dcd79ea0",
"assets/assets/icons/c_icon.png": "64bc411cbe842e5a0e24692423d8c5f1",
"assets/assets/icons/forum_icon.png": "6c882f542f395e2dac8b4ab53ed5eefd",
"assets/assets/icons/home_icon.png": "5444fe458a50eec37d9a67df933419f2",
"assets/assets/icons/interests_icon.png": "a1ece2d2bcdb3426150feec9028dffa6",
"assets/assets/icons/jobs_icon.png": "47d41eb14dc15be8d51024340f8e54fa",
"assets/assets/icons/logo.png": "dc788faa3a03abaa105d57611a4d7e3c",
"assets/assets/icons/logout_icon.png": "2eafd0db138e564a3b1f846d74fcdbad",
"assets/assets/icons/micslineous_icon.png": "addfa1c6114133a3e776d8fed60d1269",
"assets/assets/icons/notification.png": "3cc8775269fa44d89535be95585d03a2",
"assets/assets/icons/questions_icon.png": "cf8460653d552d373f2ccd05f6e1d59b",
"assets/assets/icons/roman.jpg": "a8e827c078d47c079ba11d8993ea32ba",
"assets/assets/icons/settings.png": "1724f1760573ebd292e8c4dddbdf9328",
"assets/assets/icons/student_icon.png": "1f27f7d91c84f8b81e39835017f71054",
"assets/assets/icons/visibility.png": "148cc145cac3348e9f7db4c8eee210cc",
"assets/assets/icons/visibility_off.png": "2c548a68711523d5f2dc694bda8fdf2a",
"assets/assets/images/back_one.jpg": "6c26522a49d72fea2c3c165f5da5edaf",
"assets/assets/images/splash_lottie.json": "eb8412ca5f5f37e0f325a67be26477d8",
"assets/FontManifest.json": "554539f3bc7e4a36ddfb1ba776e1d675",
"assets/fonts/MaterialIcons-Regular.otf": "bb77e62157bad8d02887f3b8b16abbe5",
"assets/NOTICES": "466ab6b28e3999d90c7a850940ceaaac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.PNG": "8c11db7848804e55811646aa1f478fc2",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"flutter_bootstrap.js": "d97ed4216631cbf9a18e07bc4fb75ab5",
"icons/Icon-192.PNG": "8c11db7848804e55811646aa1f478fc2",
"icons/Icon-512.PNG": "8c11db7848804e55811646aa1f478fc2",
"icons/Icon-maskable-192.PNG": "8c11db7848804e55811646aa1f478fc2",
"icons/Icon-maskable-512.PNG": "8c11db7848804e55811646aa1f478fc2",
"index.html": "ca54922e3d29fe47378daa61bb08be2c",
"/": "ca54922e3d29fe47378daa61bb08be2c",
"main.dart.js": "917bb66af8c3e6e5bb0126e96f6bd9d6",
"manifest.json": "e786187b708628bcf63044953ad8a8d2",
"version.json": "e1971c0e7603988172bd94a13261c50a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
