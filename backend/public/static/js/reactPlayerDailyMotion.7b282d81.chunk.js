(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[1],{556:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==u(t)&&"function"!==typeof t)return{default:t};var e=a();if(e&&e.has(t))return e.get(t);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var i=n?Object.getOwnPropertyDescriptor(t,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=t[o]}r.default=t,e&&e.set(t,r);return r}(r(0)),o=r(172),i=r(348);function a(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return a=function(){return t},t}function u(t){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){O(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(c){o=!0,i=c}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return p(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function b(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=m(t);if(e){var o=m(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return h(this,r)}}function h(t,e){return!e||"object"!==u(e)&&"function"!==typeof e?v(t):e}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function O(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var g=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(c,t);var e,r,a,u=b(c);function c(){var t;s(this,c);for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return O(v(t=u.call.apply(u,[this].concat(r))),"callPlayer",o.callPlayer),O(v(t),"onDurationChange",(function(){var e=t.getDuration();t.props.onDuration(e)})),O(v(t),"mute",(function(){t.callPlayer("setMuted",!0)})),O(v(t),"unmute",(function(){t.callPlayer("setMuted",!1)})),O(v(t),"ref",(function(e){t.container=e})),t}return e=c,(r=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(t){var e=this,r=this.props,n=r.controls,a=r.config,u=r.onError,c=r.playing,p=f(t.match(i.MATCH_URL_DAILYMOTION),2)[1];this.player?this.player.load(p,{start:(0,o.parseStartTime)(t),autoplay:c}):(0,o.getSDK)("https://api.dmcdn.net/all.js","DM","dmAsyncInit",(function(t){return t.player})).then((function(r){if(e.container){var i=r.player;e.player=new i(e.container,{width:"100%",height:"100%",video:p,params:l({controls:n,autoplay:e.props.playing,mute:e.props.muted,start:(0,o.parseStartTime)(t),origin:window.location.origin},a.params),events:{apiready:e.props.onReady,seeked:function(){return e.props.onSeek(e.player.currentTime)},video_end:e.props.onEnded,durationchange:e.onDurationChange,pause:e.props.onPause,playing:e.props.onPlay,waiting:e.props.onBuffer,error:function(t){return u(t)}}})}}),u)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(t){this.callPlayer("seek",t)}},{key:"setVolume",value:function(t){this.callPlayer("setVolume",t)}},{key:"getDuration",value:function(){return this.player.duration||null}},{key:"getCurrentTime",value:function(){return this.player.currentTime}},{key:"getSecondsLoaded",value:function(){return this.player.bufferedTime}},{key:"render",value:function(){var t={width:"100%",height:"100%",display:this.props.display};return n.default.createElement("div",{style:t},n.default.createElement("div",{ref:this.ref}))}}])&&y(e.prototype,r),a&&y(e,a),c}(n.Component);e.default=g,O(g,"displayName","DailyMotion"),O(g,"canPlay",i.canPlay.dailymotion),O(g,"loopOnEnded",!0)}}]);
//# sourceMappingURL=reactPlayerDailyMotion.7b282d81.chunk.js.map