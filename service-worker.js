"use strict";var precacheConfig=[["/Portfolio/index.html","aa4a448a3bdea0f23b6311de7c7f9175"],["/Portfolio/static/css/main.7e8e157d.css","eb9601b34a647706c37e689a9c4030e0"],["/Portfolio/static/js/main.2c2d8b5c.js","87f9abec01174b8f643a1ae3946eec10"],["/Portfolio/static/media/BrianaCraigLogo.897fcc27.png","897fcc279b7facad7b1b917b76d5e208"],["/Portfolio/static/media/FlashcardsApp.19e2e07d.png","19e2e07d8edabb5c75057e66844b200e"],["/Portfolio/static/media/ForumApp.5d93c037.png","5d93c03736d70472ca5d5fa57ee121f0"],["/Portfolio/static/media/HomeschoolApp.36b5bc96.png","36b5bc9656e4c273e7baea02f531134b"],["/Portfolio/static/media/MealPrepper.24405d95.png","24405d9577641887ca2a8b259563bc08"],["/Portfolio/static/media/about-image.da13ab42.png","da13ab42ba81d836cb7b4943719c2a07"],["/Portfolio/static/media/contact-image.58e9db63.jpg","58e9db6341ac91f9460511cdbf7b5a60"],["/Portfolio/static/media/forum-slider.b79de2cc.JPG","b79de2cc602ddf21931ee544fdd341ce"],["/Portfolio/static/media/github.8a116e0a.png","8a116e0acf74c73dcee645dae9687ec8"],["/Portfolio/static/media/hmsm-slider.7112ca3a.png","7112ca3aae60ad460fa4f5beeafaabab"],["/Portfolio/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/Portfolio/static/media/slider-image.75f1f927.png","75f1f9277481ef437be8eb33d3666b55"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/Portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});