!function(){function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={searchBoxEl:document.querySelector("#search-box"),counrtyListEl:document.querySelector(".country-list"),counrtyInfoEl:document.querySelector(".country-info")},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,c=/^0o[0-7]+$/i,a=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),v=Object.prototype.toString,y=Math.max,p=Math.min,b=function(){return d.Date.now()};function m(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(t){return!!t&&"object"==typeof t}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(m(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=m(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var o=f.test(e);return o||c.test(e)?a(e.slice(2),o?2:8):u.test(e)?NaN:+e}e=function(t,e,n){var o,r,i,u,f,c,a=0,l=!1,s=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function v(e){var n=o,i=r;return o=r=void 0,a=e,u=t.apply(i,n)}function j(t){return a=t,f=setTimeout(w,e),l?v(t):u}function g(t){var n=t-c;return void 0===c||n>=e||n<0||s&&t-a>=i}function w(){var t=b();if(g(t))return x(t);f=setTimeout(w,function(t){var n=e-(t-c);return s?p(n,i-(t-a)):n}(t))}function x(t){return f=void 0,d&&o?v(t):(o=r=void 0,u)}function E(){var t=b(),n=g(t);if(o=arguments,r=this,c=t,n){if(void 0===f)return j(c);if(s)return f=setTimeout(w,e),v(c)}return void 0===f&&(f=setTimeout(w,e)),u}return e=h(e)||0,m(n)&&(l=!!n.leading,i=(s="maxWait"in n)?y(h(n.maxWait)||0,e):i,d="trailing"in n?!!n.trailing:d),E.cancel=function(){void 0!==f&&clearTimeout(f),a=0,o=c=r=f=void 0},E.flush=function(){return void 0===f?u:x(b())},E};var j=o.searchBoxEl;j.addEventListener("keydown",t(e)((function(){var t,e=j.value;(t=e,fetch("https://restcountries.com/v3.1/name/"+t).then((function(t){return t.json()}))).then((function(t){return t.forEach((function(t){counrtyListMarkup(t)}))}))}),300))}();
//# sourceMappingURL=index.36725ac0.js.map
