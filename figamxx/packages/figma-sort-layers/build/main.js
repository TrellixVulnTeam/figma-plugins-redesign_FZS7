!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(18),o=n(3);function i(e){const t=e[0].parent;if(null===t)throw new Error("Node has no parent");if(!1===function(e){if(e.length<2)return!0;const[t,...n]=e;if(null===t.parent)return!1;const r=t.parent.id;for(const e of n)if(null===e.parent||e.parent.id!==r)return!1;return!0}(e))throw new Error("Nodes do not have the same parent");const n=e.slice(),r=t.children.map((function({id:e}){return e})),i=function(e,t){let n=-1;return e.forEach((function(e){const r=t.indexOf(e.id);r>n&&(n=r)})),n+1}(n,r);n.forEach((function(e){t.insertChild(i,e)}));const c=t.children.map((function({id:e}){return e}));return!1===Object(o.a)(r,c)}function c(e){const t=function(e){const t={};for(const n of e){const e=n.parent;if(null===e)throw new Error("Node has no parent");const r=e.id;r in t==!1&&(t[r]=[]),t[r].push(n)}return Object.values(t)}(e),n=[];for(const e of t){const t=e[0].parent;if(null===t)throw new Error("Node has no parent");const r=e.map((function(e){return{index:t.children.indexOf(e),node:e}})).sort((function(e,t){return e.index-t.index})).map((function({node:e}){return e}));n.push(r)}return n}const u=Object(r.a)("Select two or more layers");function s(e){const{sortNodes:t,successMessage:n}=e;return function(){if(0===figma.currentPage.selection.length)return void figma.closePlugin(u);const e=function(){const e=figma.currentPage.selection;if(1===e.length)return"children"in e[0]&&e[0].children.length>1?c(e[0].children.slice()):null;return c(e.slice())}();if(null===e)return void figma.closePlugin(u);let o=!1;for(const n of e){const e=t(n);if(null===e)continue;if(Array.isArray(e)){o=i(e)||o;continue}const r=i(e.fixedNodes),c=i(e.scrollingNodes);o=r||c}figma.closePlugin(!0===o?Object(r.b)(n):"No change to sort order")}}},function(e,t){var n=function(e,t){var n,r,o=1,i=0,c=0,u=String.alphabet;function s(e,t,r){if(r){for(n=t;(r=s(e,n))<76&&r>65;)++n;return+e.slice(t-1,n)}return(r=u&&u.indexOf(e.charAt(t)))>-1?r+76:(r=e.charCodeAt(t)||0)<45||r>127?r:r<46?65:r<48?r-1:r<58?r+18:r<65?r-11:r<91?r+11:r<97?r-37:r<123?r+5:r-63}if((e+="")!=(t+=""))for(;o;)if(r=s(e,i++),o=s(t,c++),r<76&&o<76&&r>66&&o>66&&(r=s(e,i,i),o=s(t,c,i=n),c=n),r!=o)return r<o?-1:1;return 0};try{e.exports=n}catch(e){String.naturalCompare=n}},,function(e,t,n){"use strict";function r(e,t){if(e.length!==t.length)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";const r=n(7),o=n(8),i=new WeakMap,c=(e,{cacheKey:t,cache:n=new Map,maxAge:c}={})=>{"number"==typeof c&&o(n);const u=function(...r){const o=t?t(r):r[0],i=n.get(o);if(i)return i.data;const u=e.apply(this,r);return n.set(o,{data:u,maxAge:c?Date.now()+c:1/0}),u};try{r(u,e)}catch(e){}return i.set(u,n),u};c.clear=e=>{const t=i.get(e);if(!t)throw new TypeError("Can't clear a function that was not memoized!");if("function"!=typeof t.clear)throw new TypeError("The cache Map can't be cleared!");t.clear()},e.exports=c},function(e,t,n){n(6);({"sort-nodes-by-name/main--default":n(13).default,"sort-nodes-by-x-position/main--default":n(14).default,"sort-nodes-by-y-position/main--default":n(15).default,"smart-sort-nodes/main--default":n(11).default,"reverse-nodes-sort-order/main--default":n(16).default,"randomize-nodes-sort-order/main--default":n(17).default,"sort-pages-by-name/main--default":n(12).default})[""===figma.command?"sort-nodes-by-name/main--default":figma.command]()},function(e,t,n){"use strict";n.r(t),n.d(t,"on",(function(){return c})),n.d(t,"once",(function(){return u})),n.d(t,"emit",(function(){return s}));const r="undefined"==typeof window,o={};let i=0;function c(e,t){const n=""+i++;return o[n]={eventHandler:t,eventName:e},function(){delete o[n]}}function u(e,t){let n=!1;return c(e,(function(...e){!0!==n&&(n=!0,t(...e))}))}const s=!0===r?function(...e){figma.ui.postMessage(e)}:function(...e){window.parent.postMessage({pluginMessage:e},"*")};function a(e,t){for(const n in o)o[n].eventName===e&&o[n].eventHandler.apply(null,t)}!0===r?figma.ui.onmessage=function([e,...t]){a(e,t)}:window.onmessage=function(e){const[t,...n]=e.data.pluginMessage;a(t,n)}},function(e,t,n){"use strict";const r=(e,t)=>{for(const n of Reflect.ownKeys(t))Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n));return e};e.exports=r,e.exports.default=r},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){e.done?o(e.value):new n((function(t){t(e.value)})).then(c,u)}s((r=r.apply(e,t||[])).next())}))},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=o(n(9));function c(e,t="maxAge"){let n,o,c;const u=()=>r(this,void 0,void 0,(function*(){if(void 0!==n)return;const u=u=>r(this,void 0,void 0,(function*(){c=i.default();const r=u[1][t]-Date.now();return r<=0?(e.delete(u[0]),void c.resolve()):(n=u[0],o=setTimeout((()=>{e.delete(u[0]),c&&c.resolve()}),r),"function"==typeof o.unref&&o.unref(),c.promise)}));try{for(const t of e)yield u(t)}catch(e){}n=void 0})),s=e.set.bind(e);return e.set=(t,r)=>{e.has(t)&&e.delete(t);const i=s(t,r);return n&&n===t&&(n=void 0,void 0!==o&&(clearTimeout(o),o=void 0),void 0!==c&&(c.reject(void 0),c=void 0)),u(),i},u(),e}t.default=c,e.exports=c,e.exports.default=c},function(e,t,n){"use strict";e.exports=()=>{const e={};return e.promise=new Promise(((t,n)=>{e.resolve=t,e.reject=n})),e}},function(e,t,n){"use strict";e.exports=function(e){if(!Array.isArray(e))throw new TypeError("Expected Array, got "+typeof e);for(var t,n,r=e.length,o=e.slice();r;)t=Math.floor(Math.random()*r--),n=o[r],o[r]=o[t],o[t]=n;return o}},function(e,t,n){"use strict";n.r(t);var r=n(0);function o(e){return{x:e.absoluteTransform[0][2],y:e.absoluteTransform[1][2]}}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=n(4);const a=n.n(s)()((function(e,t){return function(e){if(0===e.rotation){const t=o(e),{width:n,height:r}=e;return c(c({},t),{},{height:r,width:n})}const t=e.parent;if(null===t)throw new Error("Node has no parent");const n=t.children.indexOf(e),r=figma.group([e],t,n),i=o(r),{width:u,height:s}=r;return t.insertChild(n,e),c(c({},i),{},{height:s,width:u})}(t)}));function f(e){return a(e.id,e)}function l(e){const[t,...n]=e,r=[t];for(const e of n){let t=0,n=!1;for(;t<r.length;){const o=r[t];if(!0===d(e,o)||!0===h(e,o)){r.splice(t,0,e),n=!0;break}t++}!1===n&&r.splice(r.length,0,e)}return r.reverse()}function d(e,t){const n=f(e),r=f(t);return!(n.x+n.width<=r.x||n.x>=r.x+r.width||n.y+n.height<=r.y||n.y>=r.y+r.height)}function h(e,t){const n=f(e),r=f(t),o=n.y-r.y;return 0!==o?o<0:n.x-r.x<0}t.default=Object(r.a)({sortNodes:function(e){const t=e[0].parent;if(null===t)throw new Error("Node has no parent");return!("layoutMode"in t)||"HORIZONTAL"!==t.layoutMode&&"VERTICAL"!==t.layoutMode?function(e,t){if("children"in e){const n=e.children;if(n.length<2||"INSTANCE"===e.type)return null;if("numberOfFixedChildren"in e&&e.numberOfFixedChildren>0){const r=e.children.length-e.numberOfFixedChildren;let o=-1;const i=[],c=[];for(;++o<n.length;){const e=n[o];-1!==t.indexOf(e.id)&&(o<r?i.push(e):c.push(e))}return{fixedNodes:l(c),scrollingNodes:l(i)}}return l(n.slice().filter((function(e){return-1!==t.indexOf(e.id)})))}throw new Error("Node has no children")}(t,e.map((function({id:e}){return e}))):null},successMessage:"Smart sorted selected layers"})},function(e,t,n){"use strict";n.r(t);var r=n(18),o=n(1),i=n.n(o);var c=n(3);t.default=function(){const e=function(e){const t=figma.root,n=t.children.map((function({id:e}){return e})),r=t.children.length;e.forEach((function(e){t.insertChild(r,e)}));const o=t.children.map((function({id:e}){return e}));return!1===Object(c.a)(n,o)}(figma.root.children.slice().sort((function(e,t){const n=e.name.toLowerCase(),r=t.name.toLowerCase();return n!==r?i()(n,r):i()(e.id,t.id)})));figma.closePlugin(!0===e?Object(r.b)("Sorted pages by name"):"No change to page sort order")}},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r);var i=n(0);t.default=Object(i.a)({sortNodes:function(e){return e.length<2?e.slice():e.slice().sort((function(e,t){const n=e.name.toLowerCase(),r=t.name.toLowerCase();if(n!==r)return o()(r,n);const i=t.y-e.y;if(0!==i)return i;const c=t.x-e.x;return 0!==c?c:o()(t.id,e.id)}))},successMessage:"Sorted selected layers by name"})},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(1),i=n.n(o);t.default=Object(r.a)({sortNodes:function(e){const t=e[0].parent;if(null===t)throw new Error("Node has no parent");return"layoutMode"in t&&"HORIZONTAL"===t.layoutMode?null:e.slice().sort((function(e,t){if(e.x!==t.x)return t.x-e.x;if(e.y!==t.y)return t.y-e.y;const n=e.name.toLowerCase(),r=t.name.toLowerCase();return n!==r?i()(r,n):i()(t.id,e.id)}))},successMessage:"Sorted selected layers by X position"})},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(1),i=n.n(o);t.default=Object(r.a)({sortNodes:function(e){const t=e[0].parent;if(null===t)throw new Error("Node has no parent");return"layoutMode"in t&&"VERTICAL"===t.layoutMode?null:e.slice().sort((function(e,t){if(e.y!==t.y)return t.y-e.y;if(e.x!==t.x)return t.x-e.x;const n=e.name.toLowerCase(),r=t.name.toLowerCase();return n!==r?i()(r,n):i()(t.id,e.id)}))},successMessage:"Sorted selected layers by Y position"})},function(e,t,n){"use strict";n.r(t);var r=n(0);t.default=Object(r.a)({sortNodes:function(e){return e.slice().reverse()},successMessage:"Reversed layer sort order"})},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(3);const i=n(10);t.default=Object(r.a)({sortNodes:function(e){let t;do{t=i(e)}while(!0===Object(o.a)(t,e));return t},successMessage:"Randomized layer sort order"})},function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));function r(e){return"✔   "+e}function o(e){return"✘   "+e}}]);