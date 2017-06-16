webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	var _svgxhr = __webpack_require__(13);

	var _svgxhr2 = _interopRequireDefault(_svgxhr);

	var _cookie = __webpack_require__(14);

	var _cookie2 = _interopRequireDefault(_cookie);

	var _reset = __webpack_require__(15);

	var _reset2 = _interopRequireDefault(_reset);

	var _loadSettings = __webpack_require__(21);

	var _loadSettings2 = _interopRequireDefault(_loadSettings);

	var _header = __webpack_require__(51);

	var _header2 = _interopRequireDefault(_header);

	var _rights = __webpack_require__(52);

	var _rights2 = _interopRequireDefault(_rights);

	var _nav = __webpack_require__(53);

	var _nav2 = _interopRequireDefault(_nav);

	var _time = __webpack_require__(54);

	var _time2 = _interopRequireDefault(_time);

	var _checkbox = __webpack_require__(55);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _list = __webpack_require__(56);

	var _list2 = _interopRequireDefault(_list);

	var _helper = __webpack_require__(58);

	var _helper2 = _interopRequireDefault(_helper);

	var _select = __webpack_require__(59);

	var _select2 = _interopRequireDefault(_select);

	var _calendar = __webpack_require__(61);

	var _calendar2 = _interopRequireDefault(_calendar);

	var _postback = __webpack_require__(63);

	var _postback2 = _interopRequireDefault(_postback);

	var _listFetch = __webpack_require__(64);

	var _listFetch2 = _interopRequireDefault(_listFetch);

	var _index = __webpack_require__(67);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(119);

	var _index4 = _interopRequireDefault(_index3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	window._version = '0.5.19';

	var __svg__ = { filename: "/assets/svg/1497638340619.icons.svg" };
	__svg__.filename = __svg__.filename;
	(0, _svgxhr2.default)(__svg__);

	(0, _cookie2.default)();
	(0, _reset2.default)();
	(0, _loadSettings2.default)().then(function () {
	  (0, _header2.default)();
	  (0, _rights2.default)();
	  (0, _nav2.default)();
	  (0, _time2.default)();
	  (0, _checkbox2.default)();
	  (0, _list2.default)();
	  (0, _helper2.default)();
	  (0, _select2.default)();
	  (0, _calendar2.default)();
	  (0, _postback2.default)();
	  (0, _listFetch2.default)();

	  (0, _index2.default)();
	  (0, _index4.default)();
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ function(module, exports) {

	/**
	 * Load svg via ajax
	 * @param  {string} url path to svg sprite
	 * @generator: webpack-svgstore-plugin
	 * @see: https://www.npmjs.com/package/webpack-svgstore-plugin
	 * @return {[type]}     [description]
	 */
	var svgXHR = function(options) {
	  var url = false;
	  var baseUrl = undefined;

	  options && options.filename
	    ? url = options.filename
	    : null;

	  if (!url) return false;
	  var _ajax = new XMLHttpRequest();
	  var _fullPath;

	  if (typeof XDomainRequest !== 'undefined') {
	    _ajax = new XDomainRequest();
	  }

	  if (typeof baseUrl === 'undefined') {
	    if (typeof window.baseUrl !== 'undefined') {
	      baseUrl = window.baseUrl;
	    } else {
	      baseUrl = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
	    }
	  }

	  _fullPath = (baseUrl + '/' + url).replace(/([^:]\/)\/+/g, '$1');
	  _ajax.open('GET', _fullPath, true);
	  _ajax.onprogress = function() {};
	  _ajax.onload = function() {
	    var div = document.createElement('div');
	    div.innerHTML = _ajax.responseText;
	    document.body.insertBefore(div, document.body.childNodes[0]);
	  };
	  _ajax.send();
	};

	module.exports = svgXHR;


/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var pluses = /\+/g;

	  var config = function config(k, v, o) {
	    var key = k;
	    var value = v;
	    var options = o;

	    if (arguments.length > 1 && typeof value !== 'function') {
	      options = extend({}, config.defaults, options);

	      if (typeof options.expires === 'number') {
	        var days = options.expires;
	        var t = options.expires = new Date();
	        t.setMilliseconds(t.getMilliseconds() + days * 86400000);
	      }

	      return document.cookie = [encode(key), '=', stringifyCookieValue(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join('');
	    }

	    var result = key ? undefined : {};
	    var cookies = document.cookie ? document.cookie.split('; ') : [];

	    for (var i = 0; i < cookies.length; i++) {
	      var parts = cookies[i].split('=');
	      var name = decode(parts.shift());
	      var cookie = parts.join('=');

	      if (key === name) {
	        result = read(cookie, value);
	        break;
	      }

	      cookie = read(cookie);

	      if (!key && cookie !== undefined) {
	        result[name] = cookie;
	      }
	    }

	    return result;
	  };

	  function extend() {
	    var extended = {};
	    var deep = false;
	    var i = 0;
	    var length = arguments.length;

	    if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
	      deep = arguments[0];
	      i++;
	    }

	    var merge = function merge(obj) {
	      var prop;

	      for (prop in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
	          if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
	            extended[prop] = extend(true, extended[prop], obj[prop]);
	          } else {
	            extended[prop] = obj[prop];
	          }
	        }
	      }
	    };

	    for (; i < length; i++) {
	      var o = arguments[i];
	      merge(o);
	    }

	    return extended;
	  }

	  function encode(s) {
	    return config.raw ? s : encodeURIComponent(s);
	  }

	  function decode(s) {
	    return config.raw ? s : decodeURIComponent(s);
	  }

	  function stringifyCookieValue(value) {
	    return encode(config.json ? JSON.stringify(value) : String(value));
	  }

	  function parseCookieValue(param) {
	    var s = param;

	    if (s.indexOf('"') === 0) {
	      s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
	    }

	    try {
	      s = decodeURIComponent(s.replace(pluses, ' '));
	      return config.json ? JSON.parse(s) : s;
	    } catch (e) {
	      throw new Error(e);
	    }
	  }

	  function read(s, converter) {
	    var value = config.raw ? s : parseCookieValue(s);
	    return typeof converter === 'function' ? converter(value) : value;
	  }

	  config.defaults = {};

	  window.cookie = config;

	  window.removeCookie = function (key, options) {
	    config(key, '', extend({}, options, { expires: -1 }));
	    return !config(key);
	  };
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  (function (proto) {
	    proto.matches || (proto.matches = proto.matchesSelector || function (selector) {
	      var matches = document.querySelectorAll(selector);
	      var _self = this;

	      return Array.prototype.some.call(matches, function (e) {
	        return e === _self;
	      });
	    });

	    proto.closest = proto.closest || function closest(selector) {
	      var a = this.matches(selector) ? this : closest.call(this.parentNode, selector);
	      return this.parentNode ? a : null;
	    };

	    proto.triggerEvent = function (eventName) {
	      var ev = document.createEvent('HTMLEvents');
	      ev.initEvent(eventName, false, true);
	      this.dispatchEvent(ev);
	    };

	    proto._insertBefore = function (elem) {
	      this.parentNode.insertBefore(elem, this);
	    };
	  })(Element.prototype);

	  if (!Object.assign) {
	    Object.defineProperty(Object, 'assign', {
	      enumerable: false,
	      configurable: true,
	      writable: true,
	      value: function value(target, firstSource) {
	        'use strict';

	        if (target === undefined || target === null) {
	          throw new TypeError('Cannot convert first argument to object');
	        }

	        var to = Object(target);
	        for (var i = 1; i < arguments.length; i++) {
	          var nextSource = arguments[i];
	          if (nextSource === undefined || nextSource === null) {
	            continue;
	          }

	          var keysArray = Object.keys(Object(nextSource));
	          for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
	            var nextKey = keysArray[nextIndex];
	            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
	            if (desc !== undefined && desc.enumerable) {
	              to[nextKey] = nextSource[nextKey];
	            }
	          }
	        }
	        return to;
	      }
	    });
	  }
	};

	var _qs = __webpack_require__(16);

	var _qs2 = _interopRequireDefault(_qs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Promise) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = function () {
	  return new Promise(function (resolve) {
	    (0, _fetchApi.fetchObject)('/settings').then(function (result) {
	      if (result && (typeof result === 'undefined' ? 'undefined' : _typeof(result)) === 'object' && Object.keys(result).length) {
	        window.__settings__ = result;
	        resolve();
	      } else {
	        throw new Error('Failed to load settings');
	      }
	    }).catch(function (err) {
	      throw new Error(err);
	    });
	  });
	};

	var _fetchApi = __webpack_require__(27);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var require;var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process, global, module) {/*** IMPORTS FROM imports-loader ***/
	(function() {

	/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
	 * @version   3.2.1
	 */

	(function() {
	    "use strict";
	    function lib$es6$promise$utils$$objectOrFunction(x) {
	      return typeof x === 'function' || (typeof x === 'object' && x !== null);
	    }

	    function lib$es6$promise$utils$$isFunction(x) {
	      return typeof x === 'function';
	    }

	    function lib$es6$promise$utils$$isMaybeThenable(x) {
	      return typeof x === 'object' && x !== null;
	    }

	    var lib$es6$promise$utils$$_isArray;
	    if (!Array.isArray) {
	      lib$es6$promise$utils$$_isArray = function (x) {
	        return Object.prototype.toString.call(x) === '[object Array]';
	      };
	    } else {
	      lib$es6$promise$utils$$_isArray = Array.isArray;
	    }

	    var lib$es6$promise$utils$$isArray = lib$es6$promise$utils$$_isArray;
	    var lib$es6$promise$asap$$len = 0;
	    var lib$es6$promise$asap$$vertxNext;
	    var lib$es6$promise$asap$$customSchedulerFn;

	    var lib$es6$promise$asap$$asap = function asap(callback, arg) {
	      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len] = callback;
	      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len + 1] = arg;
	      lib$es6$promise$asap$$len += 2;
	      if (lib$es6$promise$asap$$len === 2) {
	        // If len is 2, that means that we need to schedule an async flush.
	        // If additional callbacks are queued before the queue is flushed, they
	        // will be processed by this flush that we are scheduling.
	        if (lib$es6$promise$asap$$customSchedulerFn) {
	          lib$es6$promise$asap$$customSchedulerFn(lib$es6$promise$asap$$flush);
	        } else {
	          lib$es6$promise$asap$$scheduleFlush();
	        }
	      }
	    }

	    function lib$es6$promise$asap$$setScheduler(scheduleFn) {
	      lib$es6$promise$asap$$customSchedulerFn = scheduleFn;
	    }

	    function lib$es6$promise$asap$$setAsap(asapFn) {
	      lib$es6$promise$asap$$asap = asapFn;
	    }

	    var lib$es6$promise$asap$$browserWindow = (typeof window !== 'undefined') ? window : undefined;
	    var lib$es6$promise$asap$$browserGlobal = lib$es6$promise$asap$$browserWindow || {};
	    var lib$es6$promise$asap$$BrowserMutationObserver = lib$es6$promise$asap$$browserGlobal.MutationObserver || lib$es6$promise$asap$$browserGlobal.WebKitMutationObserver;
	    var lib$es6$promise$asap$$isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

	    // test for web worker but not in IE10
	    var lib$es6$promise$asap$$isWorker = typeof Uint8ClampedArray !== 'undefined' &&
	      typeof importScripts !== 'undefined' &&
	      typeof MessageChannel !== 'undefined';

	    // node
	    function lib$es6$promise$asap$$useNextTick() {
	      // node version 0.10.x displays a deprecation warning when nextTick is used recursively
	      // see https://github.com/cujojs/when/issues/410 for details
	      return function() {
	        process.nextTick(lib$es6$promise$asap$$flush);
	      };
	    }

	    // vertx
	    function lib$es6$promise$asap$$useVertxTimer() {
	      return function() {
	        lib$es6$promise$asap$$vertxNext(lib$es6$promise$asap$$flush);
	      };
	    }

	    function lib$es6$promise$asap$$useMutationObserver() {
	      var iterations = 0;
	      var observer = new lib$es6$promise$asap$$BrowserMutationObserver(lib$es6$promise$asap$$flush);
	      var node = document.createTextNode('');
	      observer.observe(node, { characterData: true });

	      return function() {
	        node.data = (iterations = ++iterations % 2);
	      };
	    }

	    // web worker
	    function lib$es6$promise$asap$$useMessageChannel() {
	      var channel = new MessageChannel();
	      channel.port1.onmessage = lib$es6$promise$asap$$flush;
	      return function () {
	        channel.port2.postMessage(0);
	      };
	    }

	    function lib$es6$promise$asap$$useSetTimeout() {
	      return function() {
	        setTimeout(lib$es6$promise$asap$$flush, 1);
	      };
	    }

	    var lib$es6$promise$asap$$queue = new Array(1000);
	    function lib$es6$promise$asap$$flush() {
	      for (var i = 0; i < lib$es6$promise$asap$$len; i+=2) {
	        var callback = lib$es6$promise$asap$$queue[i];
	        var arg = lib$es6$promise$asap$$queue[i+1];

	        callback(arg);

	        lib$es6$promise$asap$$queue[i] = undefined;
	        lib$es6$promise$asap$$queue[i+1] = undefined;
	      }

	      lib$es6$promise$asap$$len = 0;
	    }

	    function lib$es6$promise$asap$$attemptVertx() {
	      try {
	        var r = require;
	        var vertx = __webpack_require__(25);
	        lib$es6$promise$asap$$vertxNext = vertx.runOnLoop || vertx.runOnContext;
	        return lib$es6$promise$asap$$useVertxTimer();
	      } catch(e) {
	        return lib$es6$promise$asap$$useSetTimeout();
	      }
	    }

	    var lib$es6$promise$asap$$scheduleFlush;
	    // Decide what async method to use to triggering processing of queued callbacks:
	    if (lib$es6$promise$asap$$isNode) {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useNextTick();
	    } else if (lib$es6$promise$asap$$BrowserMutationObserver) {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMutationObserver();
	    } else if (lib$es6$promise$asap$$isWorker) {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMessageChannel();
	    } else if (lib$es6$promise$asap$$browserWindow === undefined && "function" === 'function') {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$attemptVertx();
	    } else {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useSetTimeout();
	    }
	    function lib$es6$promise$then$$then(onFulfillment, onRejection) {
	      var parent = this;

	      var child = new this.constructor(lib$es6$promise$$internal$$noop);

	      if (child[lib$es6$promise$$internal$$PROMISE_ID] === undefined) {
	        lib$es6$promise$$internal$$makePromise(child);
	      }

	      var state = parent._state;

	      if (state) {
	        var callback = arguments[state - 1];
	        lib$es6$promise$asap$$asap(function(){
	          lib$es6$promise$$internal$$invokeCallback(state, child, callback, parent._result);
	        });
	      } else {
	        lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection);
	      }

	      return child;
	    }
	    var lib$es6$promise$then$$default = lib$es6$promise$then$$then;
	    function lib$es6$promise$promise$resolve$$resolve(object) {
	      /*jshint validthis:true */
	      var Constructor = this;

	      if (object && typeof object === 'object' && object.constructor === Constructor) {
	        return object;
	      }

	      var promise = new Constructor(lib$es6$promise$$internal$$noop);
	      lib$es6$promise$$internal$$resolve(promise, object);
	      return promise;
	    }
	    var lib$es6$promise$promise$resolve$$default = lib$es6$promise$promise$resolve$$resolve;
	    var lib$es6$promise$$internal$$PROMISE_ID = Math.random().toString(36).substring(16);

	    function lib$es6$promise$$internal$$noop() {}

	    var lib$es6$promise$$internal$$PENDING   = void 0;
	    var lib$es6$promise$$internal$$FULFILLED = 1;
	    var lib$es6$promise$$internal$$REJECTED  = 2;

	    var lib$es6$promise$$internal$$GET_THEN_ERROR = new lib$es6$promise$$internal$$ErrorObject();

	    function lib$es6$promise$$internal$$selfFulfillment() {
	      return new TypeError("You cannot resolve a promise with itself");
	    }

	    function lib$es6$promise$$internal$$cannotReturnOwn() {
	      return new TypeError('A promises callback cannot return that same promise.');
	    }

	    function lib$es6$promise$$internal$$getThen(promise) {
	      try {
	        return promise.then;
	      } catch(error) {
	        lib$es6$promise$$internal$$GET_THEN_ERROR.error = error;
	        return lib$es6$promise$$internal$$GET_THEN_ERROR;
	      }
	    }

	    function lib$es6$promise$$internal$$tryThen(then, value, fulfillmentHandler, rejectionHandler) {
	      try {
	        then.call(value, fulfillmentHandler, rejectionHandler);
	      } catch(e) {
	        return e;
	      }
	    }

	    function lib$es6$promise$$internal$$handleForeignThenable(promise, thenable, then) {
	       lib$es6$promise$asap$$asap(function(promise) {
	        var sealed = false;
	        var error = lib$es6$promise$$internal$$tryThen(then, thenable, function(value) {
	          if (sealed) { return; }
	          sealed = true;
	          if (thenable !== value) {
	            lib$es6$promise$$internal$$resolve(promise, value);
	          } else {
	            lib$es6$promise$$internal$$fulfill(promise, value);
	          }
	        }, function(reason) {
	          if (sealed) { return; }
	          sealed = true;

	          lib$es6$promise$$internal$$reject(promise, reason);
	        }, 'Settle: ' + (promise._label || ' unknown promise'));

	        if (!sealed && error) {
	          sealed = true;
	          lib$es6$promise$$internal$$reject(promise, error);
	        }
	      }, promise);
	    }

	    function lib$es6$promise$$internal$$handleOwnThenable(promise, thenable) {
	      if (thenable._state === lib$es6$promise$$internal$$FULFILLED) {
	        lib$es6$promise$$internal$$fulfill(promise, thenable._result);
	      } else if (thenable._state === lib$es6$promise$$internal$$REJECTED) {
	        lib$es6$promise$$internal$$reject(promise, thenable._result);
	      } else {
	        lib$es6$promise$$internal$$subscribe(thenable, undefined, function(value) {
	          lib$es6$promise$$internal$$resolve(promise, value);
	        }, function(reason) {
	          lib$es6$promise$$internal$$reject(promise, reason);
	        });
	      }
	    }

	    function lib$es6$promise$$internal$$handleMaybeThenable(promise, maybeThenable, then) {
	      if (maybeThenable.constructor === promise.constructor &&
	          then === lib$es6$promise$then$$default &&
	          constructor.resolve === lib$es6$promise$promise$resolve$$default) {
	        lib$es6$promise$$internal$$handleOwnThenable(promise, maybeThenable);
	      } else {
	        if (then === lib$es6$promise$$internal$$GET_THEN_ERROR) {
	          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$GET_THEN_ERROR.error);
	        } else if (then === undefined) {
	          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
	        } else if (lib$es6$promise$utils$$isFunction(then)) {
	          lib$es6$promise$$internal$$handleForeignThenable(promise, maybeThenable, then);
	        } else {
	          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
	        }
	      }
	    }

	    function lib$es6$promise$$internal$$resolve(promise, value) {
	      if (promise === value) {
	        lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$selfFulfillment());
	      } else if (lib$es6$promise$utils$$objectOrFunction(value)) {
	        lib$es6$promise$$internal$$handleMaybeThenable(promise, value, lib$es6$promise$$internal$$getThen(value));
	      } else {
	        lib$es6$promise$$internal$$fulfill(promise, value);
	      }
	    }

	    function lib$es6$promise$$internal$$publishRejection(promise) {
	      if (promise._onerror) {
	        promise._onerror(promise._result);
	      }

	      lib$es6$promise$$internal$$publish(promise);
	    }

	    function lib$es6$promise$$internal$$fulfill(promise, value) {
	      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }

	      promise._result = value;
	      promise._state = lib$es6$promise$$internal$$FULFILLED;

	      if (promise._subscribers.length !== 0) {
	        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, promise);
	      }
	    }

	    function lib$es6$promise$$internal$$reject(promise, reason) {
	      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }
	      promise._state = lib$es6$promise$$internal$$REJECTED;
	      promise._result = reason;

	      lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publishRejection, promise);
	    }

	    function lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection) {
	      var subscribers = parent._subscribers;
	      var length = subscribers.length;

	      parent._onerror = null;

	      subscribers[length] = child;
	      subscribers[length + lib$es6$promise$$internal$$FULFILLED] = onFulfillment;
	      subscribers[length + lib$es6$promise$$internal$$REJECTED]  = onRejection;

	      if (length === 0 && parent._state) {
	        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, parent);
	      }
	    }

	    function lib$es6$promise$$internal$$publish(promise) {
	      var subscribers = promise._subscribers;
	      var settled = promise._state;

	      if (subscribers.length === 0) { return; }

	      var child, callback, detail = promise._result;

	      for (var i = 0; i < subscribers.length; i += 3) {
	        child = subscribers[i];
	        callback = subscribers[i + settled];

	        if (child) {
	          lib$es6$promise$$internal$$invokeCallback(settled, child, callback, detail);
	        } else {
	          callback(detail);
	        }
	      }

	      promise._subscribers.length = 0;
	    }

	    function lib$es6$promise$$internal$$ErrorObject() {
	      this.error = null;
	    }

	    var lib$es6$promise$$internal$$TRY_CATCH_ERROR = new lib$es6$promise$$internal$$ErrorObject();

	    function lib$es6$promise$$internal$$tryCatch(callback, detail) {
	      try {
	        return callback(detail);
	      } catch(e) {
	        lib$es6$promise$$internal$$TRY_CATCH_ERROR.error = e;
	        return lib$es6$promise$$internal$$TRY_CATCH_ERROR;
	      }
	    }

	    function lib$es6$promise$$internal$$invokeCallback(settled, promise, callback, detail) {
	      var hasCallback = lib$es6$promise$utils$$isFunction(callback),
	          value, error, succeeded, failed;

	      if (hasCallback) {
	        value = lib$es6$promise$$internal$$tryCatch(callback, detail);

	        if (value === lib$es6$promise$$internal$$TRY_CATCH_ERROR) {
	          failed = true;
	          error = value.error;
	          value = null;
	        } else {
	          succeeded = true;
	        }

	        if (promise === value) {
	          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$cannotReturnOwn());
	          return;
	        }

	      } else {
	        value = detail;
	        succeeded = true;
	      }

	      if (promise._state !== lib$es6$promise$$internal$$PENDING) {
	        // noop
	      } else if (hasCallback && succeeded) {
	        lib$es6$promise$$internal$$resolve(promise, value);
	      } else if (failed) {
	        lib$es6$promise$$internal$$reject(promise, error);
	      } else if (settled === lib$es6$promise$$internal$$FULFILLED) {
	        lib$es6$promise$$internal$$fulfill(promise, value);
	      } else if (settled === lib$es6$promise$$internal$$REJECTED) {
	        lib$es6$promise$$internal$$reject(promise, value);
	      }
	    }

	    function lib$es6$promise$$internal$$initializePromise(promise, resolver) {
	      try {
	        resolver(function resolvePromise(value){
	          lib$es6$promise$$internal$$resolve(promise, value);
	        }, function rejectPromise(reason) {
	          lib$es6$promise$$internal$$reject(promise, reason);
	        });
	      } catch(e) {
	        lib$es6$promise$$internal$$reject(promise, e);
	      }
	    }

	    var lib$es6$promise$$internal$$id = 0;
	    function lib$es6$promise$$internal$$nextId() {
	      return lib$es6$promise$$internal$$id++;
	    }

	    function lib$es6$promise$$internal$$makePromise(promise) {
	      promise[lib$es6$promise$$internal$$PROMISE_ID] = lib$es6$promise$$internal$$id++;
	      promise._state = undefined;
	      promise._result = undefined;
	      promise._subscribers = [];
	    }

	    function lib$es6$promise$promise$all$$all(entries) {
	      return new lib$es6$promise$enumerator$$default(this, entries).promise;
	    }
	    var lib$es6$promise$promise$all$$default = lib$es6$promise$promise$all$$all;
	    function lib$es6$promise$promise$race$$race(entries) {
	      /*jshint validthis:true */
	      var Constructor = this;

	      if (!lib$es6$promise$utils$$isArray(entries)) {
	        return new Constructor(function(resolve, reject) {
	          reject(new TypeError('You must pass an array to race.'));
	        });
	      } else {
	        return new Constructor(function(resolve, reject) {
	          var length = entries.length;
	          for (var i = 0; i < length; i++) {
	            Constructor.resolve(entries[i]).then(resolve, reject);
	          }
	        });
	      }
	    }
	    var lib$es6$promise$promise$race$$default = lib$es6$promise$promise$race$$race;
	    function lib$es6$promise$promise$reject$$reject(reason) {
	      /*jshint validthis:true */
	      var Constructor = this;
	      var promise = new Constructor(lib$es6$promise$$internal$$noop);
	      lib$es6$promise$$internal$$reject(promise, reason);
	      return promise;
	    }
	    var lib$es6$promise$promise$reject$$default = lib$es6$promise$promise$reject$$reject;


	    function lib$es6$promise$promise$$needsResolver() {
	      throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	    }

	    function lib$es6$promise$promise$$needsNew() {
	      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	    }

	    var lib$es6$promise$promise$$default = lib$es6$promise$promise$$Promise;
	    /**
	      Promise objects represent the eventual result of an asynchronous operation. The
	      primary way of interacting with a promise is through its `then` method, which
	      registers callbacks to receive either a promise's eventual value or the reason
	      why the promise cannot be fulfilled.

	      Terminology
	      -----------

	      - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	      - `thenable` is an object or function that defines a `then` method.
	      - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	      - `exception` is a value that is thrown using the throw statement.
	      - `reason` is a value that indicates why a promise was rejected.
	      - `settled` the final resting state of a promise, fulfilled or rejected.

	      A promise can be in one of three states: pending, fulfilled, or rejected.

	      Promises that are fulfilled have a fulfillment value and are in the fulfilled
	      state.  Promises that are rejected have a rejection reason and are in the
	      rejected state.  A fulfillment value is never a thenable.

	      Promises can also be said to *resolve* a value.  If this value is also a
	      promise, then the original promise's settled state will match the value's
	      settled state.  So a promise that *resolves* a promise that rejects will
	      itself reject, and a promise that *resolves* a promise that fulfills will
	      itself fulfill.


	      Basic Usage:
	      ------------

	      ```js
	      var promise = new Promise(function(resolve, reject) {
	        // on success
	        resolve(value);

	        // on failure
	        reject(reason);
	      });

	      promise.then(function(value) {
	        // on fulfillment
	      }, function(reason) {
	        // on rejection
	      });
	      ```

	      Advanced Usage:
	      ---------------

	      Promises shine when abstracting away asynchronous interactions such as
	      `XMLHttpRequest`s.

	      ```js
	      function getJSON(url) {
	        return new Promise(function(resolve, reject){
	          var xhr = new XMLHttpRequest();

	          xhr.open('GET', url);
	          xhr.onreadystatechange = handler;
	          xhr.responseType = 'json';
	          xhr.setRequestHeader('Accept', 'application/json');
	          xhr.send();

	          function handler() {
	            if (this.readyState === this.DONE) {
	              if (this.status === 200) {
	                resolve(this.response);
	              } else {
	                reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	              }
	            }
	          };
	        });
	      }

	      getJSON('/posts.json').then(function(json) {
	        // on fulfillment
	      }, function(reason) {
	        // on rejection
	      });
	      ```

	      Unlike callbacks, promises are great composable primitives.

	      ```js
	      Promise.all([
	        getJSON('/posts'),
	        getJSON('/comments')
	      ]).then(function(values){
	        values[0] // => postsJSON
	        values[1] // => commentsJSON

	        return values;
	      });
	      ```

	      @class Promise
	      @param {function} resolver
	      Useful for tooling.
	      @constructor
	    */
	    function lib$es6$promise$promise$$Promise(resolver) {
	      this[lib$es6$promise$$internal$$PROMISE_ID] = lib$es6$promise$$internal$$nextId();
	      this._result = this._state = undefined;
	      this._subscribers = [];

	      if (lib$es6$promise$$internal$$noop !== resolver) {
	        typeof resolver !== 'function' && lib$es6$promise$promise$$needsResolver();
	        this instanceof lib$es6$promise$promise$$Promise ? lib$es6$promise$$internal$$initializePromise(this, resolver) : lib$es6$promise$promise$$needsNew();
	      }
	    }

	    lib$es6$promise$promise$$Promise.all = lib$es6$promise$promise$all$$default;
	    lib$es6$promise$promise$$Promise.race = lib$es6$promise$promise$race$$default;
	    lib$es6$promise$promise$$Promise.resolve = lib$es6$promise$promise$resolve$$default;
	    lib$es6$promise$promise$$Promise.reject = lib$es6$promise$promise$reject$$default;
	    lib$es6$promise$promise$$Promise._setScheduler = lib$es6$promise$asap$$setScheduler;
	    lib$es6$promise$promise$$Promise._setAsap = lib$es6$promise$asap$$setAsap;
	    lib$es6$promise$promise$$Promise._asap = lib$es6$promise$asap$$asap;

	    lib$es6$promise$promise$$Promise.prototype = {
	      constructor: lib$es6$promise$promise$$Promise,

	    /**
	      The primary way of interacting with a promise is through its `then` method,
	      which registers callbacks to receive either a promise's eventual value or the
	      reason why the promise cannot be fulfilled.

	      ```js
	      findUser().then(function(user){
	        // user is available
	      }, function(reason){
	        // user is unavailable, and you are given the reason why
	      });
	      ```

	      Chaining
	      --------

	      The return value of `then` is itself a promise.  This second, 'downstream'
	      promise is resolved with the return value of the first promise's fulfillment
	      or rejection handler, or rejected if the handler throws an exception.

	      ```js
	      findUser().then(function (user) {
	        return user.name;
	      }, function (reason) {
	        return 'default name';
	      }).then(function (userName) {
	        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	        // will be `'default name'`
	      });

	      findUser().then(function (user) {
	        throw new Error('Found user, but still unhappy');
	      }, function (reason) {
	        throw new Error('`findUser` rejected and we're unhappy');
	      }).then(function (value) {
	        // never reached
	      }, function (reason) {
	        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	      });
	      ```
	      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.

	      ```js
	      findUser().then(function (user) {
	        throw new PedagogicalException('Upstream error');
	      }).then(function (value) {
	        // never reached
	      }).then(function (value) {
	        // never reached
	      }, function (reason) {
	        // The `PedgagocialException` is propagated all the way down to here
	      });
	      ```

	      Assimilation
	      ------------

	      Sometimes the value you want to propagate to a downstream promise can only be
	      retrieved asynchronously. This can be achieved by returning a promise in the
	      fulfillment or rejection handler. The downstream promise will then be pending
	      until the returned promise is settled. This is called *assimilation*.

	      ```js
	      findUser().then(function (user) {
	        return findCommentsByAuthor(user);
	      }).then(function (comments) {
	        // The user's comments are now available
	      });
	      ```

	      If the assimliated promise rejects, then the downstream promise will also reject.

	      ```js
	      findUser().then(function (user) {
	        return findCommentsByAuthor(user);
	      }).then(function (comments) {
	        // If `findCommentsByAuthor` fulfills, we'll have the value here
	      }, function (reason) {
	        // If `findCommentsByAuthor` rejects, we'll have the reason here
	      });
	      ```

	      Simple Example
	      --------------

	      Synchronous Example

	      ```javascript
	      var result;

	      try {
	        result = findResult();
	        // success
	      } catch(reason) {
	        // failure
	      }
	      ```

	      Errback Example

	      ```js
	      findResult(function(result, err){
	        if (err) {
	          // failure
	        } else {
	          // success
	        }
	      });
	      ```

	      Promise Example;

	      ```javascript
	      findResult().then(function(result){
	        // success
	      }, function(reason){
	        // failure
	      });
	      ```

	      Advanced Example
	      --------------

	      Synchronous Example

	      ```javascript
	      var author, books;

	      try {
	        author = findAuthor();
	        books  = findBooksByAuthor(author);
	        // success
	      } catch(reason) {
	        // failure
	      }
	      ```

	      Errback Example

	      ```js

	      function foundBooks(books) {

	      }

	      function failure(reason) {

	      }

	      findAuthor(function(author, err){
	        if (err) {
	          failure(err);
	          // failure
	        } else {
	          try {
	            findBoooksByAuthor(author, function(books, err) {
	              if (err) {
	                failure(err);
	              } else {
	                try {
	                  foundBooks(books);
	                } catch(reason) {
	                  failure(reason);
	                }
	              }
	            });
	          } catch(error) {
	            failure(err);
	          }
	          // success
	        }
	      });
	      ```

	      Promise Example;

	      ```javascript
	      findAuthor().
	        then(findBooksByAuthor).
	        then(function(books){
	          // found books
	      }).catch(function(reason){
	        // something went wrong
	      });
	      ```

	      @method then
	      @param {Function} onFulfilled
	      @param {Function} onRejected
	      Useful for tooling.
	      @return {Promise}
	    */
	      then: lib$es6$promise$then$$default,

	    /**
	      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	      as the catch block of a try/catch statement.

	      ```js
	      function findAuthor(){
	        throw new Error('couldn't find that author');
	      }

	      // synchronous
	      try {
	        findAuthor();
	      } catch(reason) {
	        // something went wrong
	      }

	      // async with promises
	      findAuthor().catch(function(reason){
	        // something went wrong
	      });
	      ```

	      @method catch
	      @param {Function} onRejection
	      Useful for tooling.
	      @return {Promise}
	    */
	      'catch': function(onRejection) {
	        return this.then(null, onRejection);
	      }
	    };
	    var lib$es6$promise$enumerator$$default = lib$es6$promise$enumerator$$Enumerator;
	    function lib$es6$promise$enumerator$$Enumerator(Constructor, input) {
	      this._instanceConstructor = Constructor;
	      this.promise = new Constructor(lib$es6$promise$$internal$$noop);

	      if (!this.promise[lib$es6$promise$$internal$$PROMISE_ID]) {
	        lib$es6$promise$$internal$$makePromise(this.promise);
	      }

	      if (lib$es6$promise$utils$$isArray(input)) {
	        this._input     = input;
	        this.length     = input.length;
	        this._remaining = input.length;

	        this._result = new Array(this.length);

	        if (this.length === 0) {
	          lib$es6$promise$$internal$$fulfill(this.promise, this._result);
	        } else {
	          this.length = this.length || 0;
	          this._enumerate();
	          if (this._remaining === 0) {
	            lib$es6$promise$$internal$$fulfill(this.promise, this._result);
	          }
	        }
	      } else {
	        lib$es6$promise$$internal$$reject(this.promise, lib$es6$promise$enumerator$$validationError());
	      }
	    }

	    function lib$es6$promise$enumerator$$validationError() {
	      return new Error('Array Methods must be provided an Array');
	    }

	    lib$es6$promise$enumerator$$Enumerator.prototype._enumerate = function() {
	      var length  = this.length;
	      var input   = this._input;

	      for (var i = 0; this._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
	        this._eachEntry(input[i], i);
	      }
	    };

	    lib$es6$promise$enumerator$$Enumerator.prototype._eachEntry = function(entry, i) {
	      var c = this._instanceConstructor;
	      var resolve = c.resolve;

	      if (resolve === lib$es6$promise$promise$resolve$$default) {
	        var then = lib$es6$promise$$internal$$getThen(entry);

	        if (then === lib$es6$promise$then$$default &&
	            entry._state !== lib$es6$promise$$internal$$PENDING) {
	          this._settledAt(entry._state, i, entry._result);
	        } else if (typeof then !== 'function') {
	          this._remaining--;
	          this._result[i] = entry;
	        } else if (c === lib$es6$promise$promise$$default) {
	          var promise = new c(lib$es6$promise$$internal$$noop);
	          lib$es6$promise$$internal$$handleMaybeThenable(promise, entry, then);
	          this._willSettleAt(promise, i);
	        } else {
	          this._willSettleAt(new c(function(resolve) { resolve(entry); }), i);
	        }
	      } else {
	        this._willSettleAt(resolve(entry), i);
	      }
	    };

	    lib$es6$promise$enumerator$$Enumerator.prototype._settledAt = function(state, i, value) {
	      var promise = this.promise;

	      if (promise._state === lib$es6$promise$$internal$$PENDING) {
	        this._remaining--;

	        if (state === lib$es6$promise$$internal$$REJECTED) {
	          lib$es6$promise$$internal$$reject(promise, value);
	        } else {
	          this._result[i] = value;
	        }
	      }

	      if (this._remaining === 0) {
	        lib$es6$promise$$internal$$fulfill(promise, this._result);
	      }
	    };

	    lib$es6$promise$enumerator$$Enumerator.prototype._willSettleAt = function(promise, i) {
	      var enumerator = this;

	      lib$es6$promise$$internal$$subscribe(promise, undefined, function(value) {
	        enumerator._settledAt(lib$es6$promise$$internal$$FULFILLED, i, value);
	      }, function(reason) {
	        enumerator._settledAt(lib$es6$promise$$internal$$REJECTED, i, reason);
	      });
	    };
	    function lib$es6$promise$polyfill$$polyfill() {
	      var local;

	      if (typeof global !== 'undefined') {
	          local = global;
	      } else if (typeof self !== 'undefined') {
	          local = self;
	      } else {
	          try {
	              local = Function('return this')();
	          } catch (e) {
	              throw new Error('polyfill failed because global object is unavailable in this environment');
	          }
	      }

	      var P = local.Promise;

	      if (P && Object.prototype.toString.call(P.resolve()) === '[object Promise]' && !P.cast) {
	        return;
	      }

	      local.Promise = lib$es6$promise$promise$$default;
	    }
	    var lib$es6$promise$polyfill$$default = lib$es6$promise$polyfill$$polyfill;

	    var lib$es6$promise$umd$$ES6Promise = {
	      'Promise': lib$es6$promise$promise$$default,
	      'polyfill': lib$es6$promise$polyfill$$default
	    };

	    /* global define:true module:true window: true */
	    if ("function" === 'function' && __webpack_require__(26)['amd']) {
	      !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return lib$es6$promise$umd$$ES6Promise; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof module !== 'undefined' && module['exports']) {
	      module['exports'] = lib$es6$promise$umd$$ES6Promise;
	    } else if (typeof this !== 'undefined') {
	      this['ES6Promise'] = lib$es6$promise$umd$$ES6Promise;
	    }

	    lib$es6$promise$polyfill$$default();
	}).call(this);



	/*** EXPORTS FROM exports-loader ***/
	module.exports = global.Promise;
	}.call(global));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23), (function() { return this; }()), __webpack_require__(24)(module)))

/***/ },
/* 23 */,
/* 24 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 25 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Promise, fetch) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.fetchData = fetchData;
	exports.fetchObject = fetchObject;

	var _crypto = __webpack_require__(29);

	var _crypto2 = _interopRequireDefault(_crypto);

	var _qs = __webpack_require__(16);

	var _qs2 = _interopRequireDefault(_qs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getOptionsFetch(opt) {
	  var headers = new Headers();
	  headers.append('Content-Type', 'application/x-www-form-urlencoded');

	  var options = {
	    method: 'post',
	    mode: 'cors',
	    headers: headers
	  };

	  if (true) {
	    options.credentials = 'include';
	  }

	  var data = opt || {};

	  if (window.might.hasOwnProperty('auth_key')) {
	    data.auth_key = window.might.auth_key;
	  }

	  var permissionId = window.cookie('permission_id');

	  if (document.querySelector('.js-stat') && permissionId) {
	    data.permission_user = permissionId;
	  }

	  options.body = _qs2.default.stringify(data);

	  return options;
	}

	var timeout = void 0;

	function startFetch(opt, preload) {
	  var options = getOptionsFetch(opt);

	  if (preload === false) {
	    return { options: options };
	  }

	  var requestHash = _crypto2.default.randomBytes(12).toString('hex');

	  window._activeRequests = window._activeRequests || [];
	  window._activeRequests.push(requestHash);

	  if (timeout) {
	    clearTimeout(timeout);
	  }

	  if (!document.querySelector('.js-loading')) {
	    (function () {
	      var loading = document.createElement('div');
	      loading.className = 'loading js-loading';
	      document.body.appendChild(loading);

	      setTimeout(function () {
	        loading.classList.add('is-show');
	      }, 0);
	    })();
	  }

	  return { options: options, requestHash: requestHash };
	}

	function stopFetch(hash) {
	  var index = window._activeRequests.indexOf(hash);
	  window._activeRequests.splice(index, 1);

	  if (!window._activeRequests.length) {
	    (function () {
	      var el = document.querySelector('.js-loading');

	      timeout = setTimeout(function () {
	        el.parentNode.removeChild(el);
	      }, 100);
	    })();
	  }
	}

	function fetchData(url, opt, preload) {
	  var _startFetch = startFetch(opt, preload),
	      options = _startFetch.options,
	      requestHash = _startFetch.requestHash;

	  return new Promise(function (resolve, reject) {
	    fetch(window.might.url + url, options).then(function (response) {
	      return response.json();
	    }).then(function (res) {
	      if (res.error) {
	        if (res.result && _typeof(res.result) === 'object') {
	          if (res.result.msg) {
	            reject(res.result.msg);
	          }
	        }
	      } else if (res.result && _typeof(res.result) === 'object') {
	        resolve(res.result);
	      } else {
	        reject('Error JSON object');
	      }

	      if (requestHash) {
	        stopFetch(requestHash);
	      }
	    }).catch(function (err) {
	      reject('Error network');

	      if (requestHash) {
	        stopFetch(requestHash);
	      }

	      throw new Error(err);
	    });
	  });
	}

	function fetchObject(url, opt, preload) {
	  var _startFetch2 = startFetch(opt, preload),
	      options = _startFetch2.options,
	      requestHash = _startFetch2.requestHash;

	  return new Promise(function (resolve, reject) {
	    fetch(window.might.url + url, options).then(function (response) {
	      return response.json();
	    }).then(function (res) {
	      if (res.error) {
	        if (res.result && _typeof(res.result) === 'object') {
	          if (res.result.msg) {
	            reject(res.result.msg);
	          }
	        }
	      } else {
	        resolve(res);
	      }

	      if (requestHash) {
	        stopFetch(requestHash);
	      }
	    }).catch(function (err) {
	      reject(err);

	      if (requestHash) {
	        stopFetch(requestHash);
	      }
	    });
	  });
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22), __webpack_require__(28)))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Promise, global) {/*** IMPORTS FROM imports-loader ***/
	(function() {

	(function(self) {
	  'use strict';

	  if (self.fetch) {
	    return
	  }

	  var support = {
	    searchParams: 'URLSearchParams' in self,
	    iterable: 'Symbol' in self && 'iterator' in Symbol,
	    blob: 'FileReader' in self && 'Blob' in self && (function() {
	      try {
	        new Blob()
	        return true
	      } catch(e) {
	        return false
	      }
	    })(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  }

	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name)
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name')
	    }
	    return name.toLowerCase()
	  }

	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value)
	    }
	    return value
	  }

	  // Build a destructive iterator for the value list
	  function iteratorFor(items) {
	    var iterator = {
	      next: function() {
	        var value = items.shift()
	        return {done: value === undefined, value: value}
	      }
	    }

	    if (support.iterable) {
	      iterator[Symbol.iterator] = function() {
	        return iterator
	      }
	    }

	    return iterator
	  }

	  function Headers(headers) {
	    this.map = {}

	    if (headers instanceof Headers) {
	      headers.forEach(function(value, name) {
	        this.append(name, value)
	      }, this)

	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function(name) {
	        this.append(name, headers[name])
	      }, this)
	    }
	  }

	  Headers.prototype.append = function(name, value) {
	    name = normalizeName(name)
	    value = normalizeValue(value)
	    var list = this.map[name]
	    if (!list) {
	      list = []
	      this.map[name] = list
	    }
	    list.push(value)
	  }

	  Headers.prototype['delete'] = function(name) {
	    delete this.map[normalizeName(name)]
	  }

	  Headers.prototype.get = function(name) {
	    var values = this.map[normalizeName(name)]
	    return values ? values[0] : null
	  }

	  Headers.prototype.getAll = function(name) {
	    return this.map[normalizeName(name)] || []
	  }

	  Headers.prototype.has = function(name) {
	    return this.map.hasOwnProperty(normalizeName(name))
	  }

	  Headers.prototype.set = function(name, value) {
	    this.map[normalizeName(name)] = [normalizeValue(value)]
	  }

	  Headers.prototype.forEach = function(callback, thisArg) {
	    Object.getOwnPropertyNames(this.map).forEach(function(name) {
	      this.map[name].forEach(function(value) {
	        callback.call(thisArg, value, name, this)
	      }, this)
	    }, this)
	  }

	  Headers.prototype.keys = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push(name) })
	    return iteratorFor(items)
	  }

	  Headers.prototype.values = function() {
	    var items = []
	    this.forEach(function(value) { items.push(value) })
	    return iteratorFor(items)
	  }

	  Headers.prototype.entries = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push([name, value]) })
	    return iteratorFor(items)
	  }

	  if (support.iterable) {
	    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
	  }

	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'))
	    }
	    body.bodyUsed = true
	  }

	  function fileReaderReady(reader) {
	    return new Promise(function(resolve, reject) {
	      reader.onload = function() {
	        resolve(reader.result)
	      }
	      reader.onerror = function() {
	        reject(reader.error)
	      }
	    })
	  }

	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader()
	    reader.readAsArrayBuffer(blob)
	    return fileReaderReady(reader)
	  }

	  function readBlobAsText(blob) {
	    var reader = new FileReader()
	    reader.readAsText(blob)
	    return fileReaderReady(reader)
	  }

	  function Body() {
	    this.bodyUsed = false

	    this._initBody = function(body) {
	      this._bodyInit = body
	      if (typeof body === 'string') {
	        this._bodyText = body
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this._bodyText = body.toString()
	      } else if (!body) {
	        this._bodyText = ''
	      } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) {
	        // Only support ArrayBuffers for POST method.
	        // Receiving ArrayBuffers happens via Blobs, instead.
	      } else {
	        throw new Error('unsupported BodyInit type')
	      }

	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8')
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type)
	        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
	        }
	      }
	    }

	    if (support.blob) {
	      this.blob = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }

	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob')
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]))
	        }
	      }

	      this.arrayBuffer = function() {
	        return this.blob().then(readBlobAsArrayBuffer)
	      }

	      this.text = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }

	        if (this._bodyBlob) {
	          return readBlobAsText(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as text')
	        } else {
	          return Promise.resolve(this._bodyText)
	        }
	      }
	    } else {
	      this.text = function() {
	        var rejected = consumed(this)
	        return rejected ? rejected : Promise.resolve(this._bodyText)
	      }
	    }

	    if (support.formData) {
	      this.formData = function() {
	        return this.text().then(decode)
	      }
	    }

	    this.json = function() {
	      return this.text().then(JSON.parse)
	    }

	    return this
	  }

	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase()
	    return (methods.indexOf(upcased) > -1) ? upcased : method
	  }

	  function Request(input, options) {
	    options = options || {}
	    var body = options.body
	    if (Request.prototype.isPrototypeOf(input)) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read')
	      }
	      this.url = input.url
	      this.credentials = input.credentials
	      if (!options.headers) {
	        this.headers = new Headers(input.headers)
	      }
	      this.method = input.method
	      this.mode = input.mode
	      if (!body) {
	        body = input._bodyInit
	        input.bodyUsed = true
	      }
	    } else {
	      this.url = input
	    }

	    this.credentials = options.credentials || this.credentials || 'omit'
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers)
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET')
	    this.mode = options.mode || this.mode || null
	    this.referrer = null

	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests')
	    }
	    this._initBody(body)
	  }

	  Request.prototype.clone = function() {
	    return new Request(this)
	  }

	  function decode(body) {
	    var form = new FormData()
	    body.trim().split('&').forEach(function(bytes) {
	      if (bytes) {
	        var split = bytes.split('=')
	        var name = split.shift().replace(/\+/g, ' ')
	        var value = split.join('=').replace(/\+/g, ' ')
	        form.append(decodeURIComponent(name), decodeURIComponent(value))
	      }
	    })
	    return form
	  }

	  function headers(xhr) {
	    var head = new Headers()
	    var pairs = (xhr.getAllResponseHeaders() || '').trim().split('\n')
	    pairs.forEach(function(header) {
	      var split = header.trim().split(':')
	      var key = split.shift().trim()
	      var value = split.join(':').trim()
	      head.append(key, value)
	    })
	    return head
	  }

	  Body.call(Request.prototype)

	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {}
	    }

	    this.type = 'default'
	    this.status = options.status
	    this.ok = this.status >= 200 && this.status < 300
	    this.statusText = options.statusText
	    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers)
	    this.url = options.url || ''
	    this._initBody(bodyInit)
	  }

	  Body.call(Response.prototype)

	  Response.prototype.clone = function() {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    })
	  }

	  Response.error = function() {
	    var response = new Response(null, {status: 0, statusText: ''})
	    response.type = 'error'
	    return response
	  }

	  var redirectStatuses = [301, 302, 303, 307, 308]

	  Response.redirect = function(url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code')
	    }

	    return new Response(null, {status: status, headers: {location: url}})
	  }

	  self.Headers = Headers
	  self.Request = Request
	  self.Response = Response

	  self.fetch = function(input, init) {
	    return new Promise(function(resolve, reject) {
	      var request
	      if (Request.prototype.isPrototypeOf(input) && !init) {
	        request = input
	      } else {
	        request = new Request(input, init)
	      }

	      var xhr = new XMLHttpRequest()

	      function responseURL() {
	        if ('responseURL' in xhr) {
	          return xhr.responseURL
	        }

	        // Avoid security warnings on getResponseHeader when not allowed by CORS
	        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	          return xhr.getResponseHeader('X-Request-URL')
	        }

	        return
	      }

	      xhr.onload = function() {
	        var options = {
	          status: xhr.status,
	          statusText: xhr.statusText,
	          headers: headers(xhr),
	          url: responseURL()
	        }
	        var body = 'response' in xhr ? xhr.response : xhr.responseText
	        resolve(new Response(body, options))
	      }

	      xhr.onerror = function() {
	        reject(new TypeError('Network request failed'))
	      }

	      xhr.ontimeout = function() {
	        reject(new TypeError('Network request failed'))
	      }

	      xhr.open(request.method, request.url, true)

	      if (request.credentials === 'include') {
	        xhr.withCredentials = true
	      }

	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob'
	      }

	      request.headers.forEach(function(value, name) {
	        xhr.setRequestHeader(name, value)
	      })

	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
	    })
	  }
	  self.fetch.polyfill = true
	})(typeof self !== 'undefined' ? self : this);


	/*** EXPORTS FROM exports-loader ***/
	module.exports = global.fetch;
	}.call(global));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22), (function() { return this; }())))

/***/ },
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var user = document.querySelector('.js-header-user');

	  if (user) {
	    (function () {
	      var name = user.querySelector('.js-header-user-name');

	      var clickWindow = function clickWindow(event) {
	        var closest = event.target.closest('.js-header-user');

	        if (!closest) {
	          user.classList.remove('is-open');
	          window.removeEventListener('click', clickWindow);
	        }
	      };

	      name.addEventListener('click', function (event) {
	        if (user.classList.contains('is-open')) {
	          user.classList.remove('is-open');
	          window.removeEventListener('click', clickWindow);
	        } else {
	          user.classList.add('is-open');
	          window.addEventListener('click', clickWindow);
	        }
	      });
	    })();
	  }
	};

/***/ },
/* 52 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var settings = window.__settings__;
	  var user = settings.user || {};
	  var thisUserName = [user.name, user.surname].join(' ');
	  var activePermision = Number(window.cookie('permission_id'));
	  var userName = document.querySelector('.js-header-user-name');
	  var rightsList = document.querySelector('.js-header-user-rights');
	  var logout = document.querySelector('.js-logout');

	  var selectIdPermision = void 0;

	  if (Array.isArray(settings.permissions)) {
	    settings.permissions.forEach(function (permission, index) {
	      var span = document.createElement('span');
	      span.textContent = [permission.name, permission.surname].join(' ');

	      if (!span.textContent) {
	        span.textContent = '[id: ' + permission.id + ']';
	      }

	      if (activePermision === Number(permission.id)) {
	        selectIdPermision = index;
	        span.className = 'is-active';
	      }

	      rightsList.appendChild(span);

	      span.addEventListener('click', function () {
	        window.cookie('permission_id', permission.id, { expires: 30 });
	        window.location = window.location.pathname;
	      });
	    });
	  }

	  if (typeof selectIdPermision === 'number') {
	    var thisSpan = document.createElement('span');
	    thisSpan.textContent = [thisUserName, '(you)'].join(' ');
	    rightsList.insertBefore(thisSpan, rightsList.firstChild);
	    thisSpan.addEventListener('click', function () {
	      window.removeCookie('permission_id');
	      window.location = window.location.pathname;
	    });

	    var selectUser = settings.permissions[selectIdPermision];
	    userName.textContent = [selectUser.name, selectUser.surname].join(' ');

	    window.__active_permission__ = selectUser.values;
	  } else {
	    userName.textContent = thisUserName;
	  }

	  logout.addEventListener('click', function () {
	    window.removeCookie('permission_id');
	    return true;
	  });
	};

/***/ },
/* 53 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  [].concat(_toConsumableArray(document.querySelectorAll('.js-nav'))).forEach(function (nav) {
	    var page = nav.querySelector('.js-nav-page');
	    var count = nav.querySelector('.js-nav-count');
	    var labelCount = nav.querySelector('.js-nav-count-label');
	    var itemsCount = nav.querySelectorAll('.js-nav-count-item');

	    var controls = nav.querySelector('.js-nav-controls');
	    var label = nav.querySelector('.js-nav-label');
	    var tostart = nav.querySelector('.js-nav-tostart');
	    var prev = nav.querySelector('.js-nav-prev');
	    var next = nav.querySelector('.js-nav-next');
	    var toend = nav.querySelector('.js-nav-toend');

	    var updateValue = void 0;
	    var setValue = void 0;

	    page.addEventListener('paste', function (event) {
	      event.preventDefault();
	    });

	    page.addEventListener('keydown', function (event) {
	      var code = event.keyCode;
	      var char = String.fromCharCode(code);
	      var key = '0123456789'.indexOf(char);
	      var value = parseInt(event.target.value, 10);

	      switch (code) {
	        case 8:
	        case 46:
	        case 37:
	        case 39:
	          break;
	        case 9:
	        case 13:
	        case 27:
	          event.target.blur();
	          break;
	        case 38:
	          event.preventDefault();
	          value++;
	          if (value > Math.ceil(nav.value.total / nav.value.length)) {
	            value = Math.ceil(nav.value.total / nav.value.length);
	          }
	          setValue({ page: value });
	          break;
	        case 40:
	          event.preventDefault();
	          value--;
	          if (value < 1) {
	            value = 1;
	          }
	          setValue({ page: value });
	          break;
	        default:
	          if (key === -1) {
	            event.preventDefault();
	          }
	      }
	    });

	    page.addEventListener('change', function (event) {
	      var value = parseInt(event.target.value, 10);

	      if (!value || value < 1) {
	        value = 1;
	      }

	      if (value > Math.ceil(nav.value.total / nav.value.length)) {
	        value = Math.ceil(nav.value.total / nav.value.length);
	      }

	      setValue({ page: value });
	    });

	    var clickWindow = function clickWindow(event) {
	      var closest = event.target.closest('.js-nav-count');
	      if (!closest || closest !== count) {
	        close();
	      }
	    };

	    var open = function open() {
	      count.classList.add('is-open');
	      window.addEventListener('click', clickWindow);
	    };

	    var close = function close() {
	      count.classList.remove('is-open');
	      window.removeEventListener('click', clickWindow);
	    };

	    labelCount.addEventListener('click', function () {
	      if (count.classList.contains('is-open')) {
	        close();
	      } else {
	        open();
	      }
	    });

	    [].concat(_toConsumableArray(itemsCount)).forEach(function (item) {
	      item.addEventListener('click', function () {
	        var value = parseInt(item.textContent, 10);
	        [].concat(_toConsumableArray(itemsCount)).forEach(function (el) {
	          return el.classList.remove('is-select');
	        });
	        item.classList.add('is-select');
	        close();
	        labelCount.textContent = value;
	        setValue({ length: value });
	      });
	    });

	    tostart.addEventListener('click', function () {
	      setValue({ page: 1 });
	    });

	    prev.addEventListener('click', function () {
	      var p = nav.value.page - 1;
	      if (p < 1) {
	        p = 1;
	      }
	      setValue({ page: p });
	    });

	    next.addEventListener('click', function () {
	      var p = nav.value.page + 1;
	      if (p > Math.ceil(nav.value.total / nav.value.length)) {
	        p = Math.ceil(nav.value.total / nav.value.length);
	      }
	      setValue({ page: p });
	    });

	    toend.addEventListener('click', function () {
	      setValue({ page: Math.ceil(nav.value.total / nav.value.length) });
	    });

	    updateValue = function updateValue(obj) {
	      var isUpdate = false;

	      if (obj.hasOwnProperty('total') && nav.value.total !== parseInt(obj.total, 10)) {
	        nav.value.total = parseInt(obj.total, 10);
	      }

	      if (obj.hasOwnProperty('length') && nav.value.length !== parseInt(obj.length, 10)) {
	        nav.value.length = parseInt(obj.length, 10);
	        isUpdate = true;
	      }

	      if (obj.hasOwnProperty('page') && nav.value.page !== parseInt(obj.page, 10)) {
	        nav.value.page = parseInt(obj.page, 10);
	        isUpdate = true;
	      }

	      if (nav.value.total) {
	        nav.style.display = '';

	        if (nav.value.page > Math.ceil(nav.value.total / nav.value.length)) {
	          nav.value.page = Math.ceil(nav.value.total / nav.value.length);
	          isUpdate = true;
	        }

	        var start = (nav.value.page - 1) * nav.value.length + 1;
	        var end = start + nav.value.length - 1;

	        if (end > nav.value.total) {
	          end = nav.value.total;
	        }

	        label.textContent = start + '-' + end + ' of ' + nav.value.total;

	        if (nav.value.total > nav.value.length) {
	          controls.style.display = '';
	        } else {
	          controls.style.display = 'none';
	        }
	      } else {
	        nav.style.display = 'none';
	      }

	      if (nav.value.page === 1) {
	        tostart.classList.add('is-disabled');
	        prev.classList.add('is-disabled');
	      } else {
	        tostart.classList.remove('is-disabled');
	        prev.classList.remove('is-disabled');
	      }

	      if (nav.value.page === Math.ceil(nav.value.total / nav.value.length)) {
	        next.classList.add('is-disabled');
	        toend.classList.add('is-disabled');
	      } else {
	        next.classList.remove('is-disabled');
	        toend.classList.remove('is-disabled');
	      }

	      page.value = nav.value.page;

	      if (isUpdate) {
	        labelCount.textContent = nav.value.length;

	        [].concat(_toConsumableArray(itemsCount)).forEach(function (item) {
	          if (String(nav.value.length) === item.textContent) {
	            item.classList.add('is-select');
	          } else {
	            item.classList.remove('is-select');
	          }
	        });
	      }

	      return isUpdate;
	    };

	    setValue = function setValue(obj) {
	      if (updateValue(obj)) {
	        nav.triggerEvent('change');
	      }
	    };

	    nav.value = {};

	    nav.updateValue = updateValue;
	    nav.setValue = setValue;
	  });
	};

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 54 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  [].concat(_toConsumableArray(document.querySelectorAll('.js-input-time'))).forEach(function (input) {
	    var range = 1;

	    var selectRange = function selectRange() {
	      if (range === 1) {
	        input.selectionStart = 0;
	        input.selectionEnd = 2;
	      } else {
	        input.selectionStart = 3;
	        input.selectionEnd = 5;
	      }
	      input.focus();
	    };

	    var keyDown = function keyDown(event) {
	      var char = String.fromCharCode(event.keyCode);
	      var key = '0123456789'.indexOf(char);

	      event.preventDefault();

	      if (key !== -1) {
	        var value = event.target.value;
	        var chunks = value.split(':');
	        var str = range === 1 ? value[1] : value[4];
	        var maxVal = range === 1 ? 24 : 60;

	        str += String(key);

	        if (parseInt(str, 10) < maxVal) {
	          chunks[range - 1] = str;
	        } else {
	          chunks[range - 1] = '0' + key;
	        }

	        if (range === 1 && parseInt(chunks[0], 10) > 2) {
	          range = 2;
	        }

	        input.value = chunks.join(':');
	        input.triggerEvent('change');

	        selectRange();
	      }
	    };

	    var keyForChange = function keyForChange(code) {
	      var chunks = event.target.value.split(':');
	      var hours = parseInt(chunks[0], 10);
	      var minutes = parseInt(chunks[1], 10);

	      if (range === 1) {
	        hours += code === 38 ? 1 : -1;
	      } else {
	        minutes += code === 38 ? 1 : -1;
	      }

	      if (minutes > 59) {
	        minutes = 0;
	        hours++;
	      }

	      if (minutes < 0) {
	        minutes = 59;
	        hours--;
	      }

	      if (hours > 23) {
	        hours = 0;
	      }

	      if (hours < 0) {
	        hours = 23;
	      }

	      chunks[0] = hours < 10 ? '0' + hours : hours;
	      chunks[1] = minutes < 10 ? '0' + minutes : minutes;

	      input.value = chunks.join(':');
	      input.triggerEvent('change');

	      selectRange();
	    };

	    input.addEventListener('focus', function () {
	      setTimeout(function () {
	        range = 1;
	        selectRange();
	      }, 0);
	    });

	    input.addEventListener('paste', function (event) {
	      event.preventDefault();
	    });

	    input.addEventListener('cut', function (event) {
	      event.preventDefault();
	    });

	    input.addEventListener('keydown', function (event) {
	      var code = event.keyCode;

	      switch (code) {
	        case 9:
	          if (event.shiftKey && range === 2) {
	            range = 1;
	            selectRange();
	            event.preventDefault();
	          } else if (!event.shiftKey && range === 1) {
	            range = 2;
	            selectRange();
	            event.preventDefault();
	          }
	          break;
	        case 13:
	        case 27:
	          event.target.blur();
	          input.triggerEvent('change');
	          break;
	        case 37:
	          event.preventDefault();
	          range = 1;
	          selectRange();
	          break;
	        case 38:
	        case 40:
	          event.preventDefault();
	          keyForChange(code);
	          break;
	        case 32:
	          event.preventDefault();
	          break;
	        case 39:
	          event.preventDefault();
	          range = 2;
	          selectRange();
	          break;
	        default:
	          keyDown(event);
	      }
	    });
	  });
	};

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 55 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  document.body.addEventListener('click', function (event) {
	    var closest = event.target.closest('.js-checkbox');

	    if (closest) {
	      closest.classList.toggle('is-select');
	      closest.triggerEvent('change');
	    }
	  });
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  [].concat(_toConsumableArray(document.querySelectorAll('.js-list'))).forEach(_listEvent2.default);
	};

	var _listEvent = __webpack_require__(57);

	var _listEvent2 = _interopRequireDefault(_listEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (list) {
	  var listValue = list.querySelector('.js-list-value');
	  var search = list.querySelector('.js-list-search');
	  var placeholder = list.dataset.placeholder;
	  var setstyle = list.dataset.setstyle;

	  var clickWindow = void 0;
	  var open = void 0;
	  var close = void 0;
	  var getItemByValue = void 0;
	  var haveValue = void 0;
	  var updateValue = void 0;
	  var setValue = void 0;
	  var setDisabled = void 0;
	  var unsetDisabled = void 0;

	  clickWindow = function clickWindow(event) {
	    var closest = event.target.closest('.js-list');
	    if (!closest || closest !== list) {
	      close();
	    }
	  };

	  open = function open() {
	    if (search) {
	      search.value = '';
	    }

	    var value = list.value;

	    [].concat(_toConsumableArray(list.querySelectorAll('.js-list-item'))).forEach(function (item) {
	      if (item.dataset.value === value) {
	        item.classList.add('is-select');
	      } else {
	        item.classList.remove('is-select');
	      }
	      item.style.display = '';
	    });

	    list.classList.add('is-open');
	    window.addEventListener('click', clickWindow);
	  };

	  close = function close() {
	    list.classList.remove('is-open');
	    window.removeEventListener('click', clickWindow);
	  };

	  getItemByValue = function getItemByValue(val) {
	    var item = void 0;
	    var value = String(val);

	    [].concat(_toConsumableArray(list.querySelectorAll('.js-list-item'))).forEach(function (el) {
	      if (value === el.dataset.value) {
	        item = el;
	        return false;
	      }
	      return true;
	    });

	    return item;
	  };

	  haveValue = function haveValue(val) {
	    var isHave = false;

	    if (val || val !== 0) {
	      var item = getItemByValue(val);

	      if (item) {
	        isHave = true;
	      }
	    }

	    return isHave;
	  };

	  updateValue = function updateValue(val, lbl, clr) {
	    var isUpdate = false;

	    if (!val && val !== 0) {
	      if (list.value) {
	        list.oldValue = list.value;
	        list.value = null;
	        isUpdate = true;
	      }

	      if (placeholder) {
	        listValue.textContent = placeholder;
	      }
	    } else {
	      var value = String(val);
	      var selectItem = getItemByValue(value);
	      var text = void 0;

	      if (selectItem) {
	        text = selectItem.innerHTML;
	      } else {
	        text = value;
	      }

	      if (list.value !== value) {
	        list.oldValue = list.value;
	        list.value = value;
	        listValue.textContent = text;
	        isUpdate = true;
	      }
	    }

	    if (clr) {
	      var clearBtn = document.createElement('div');
	      clearBtn.className = 'list__clear';
	      list.appendChild(clearBtn);
	      clearBtn.addEventListener('click', function () {
	        return setValue();
	      });
	    }

	    if (lbl) {
	      var label = list.querySelector('.list__label');

	      if (label) {
	        label.parentNode.removeChild(label);
	      }

	      label = document.createElement('div');
	      label.className = 'list__label';
	      label.textContent = lbl;
	      list.children[0]._insertBefore(label);
	    }

	    [].concat(_toConsumableArray(list.querySelectorAll('.js-list-item'))).forEach(function (item) {
	      if (item.dataset.value === val) {
	        item.classList.add('is-select');
	      } else {
	        item.classList.remove('is-select');
	      }
	    });

	    return isUpdate;
	  };

	  setValue = function setValue(val, label, clear) {
	    if (updateValue(val, label, clear)) {
	      list.triggerEvent('change');
	    }
	  };

	  setDisabled = function setDisabled(arr) {
	    var setDis = function setDis(a) {
	      var item = getItemByValue(a);

	      if (item) {
	        item.classList.add('is-disabled');
	      }
	    };

	    if (typeof arr === 'string' || typeof arr === 'number') {
	      setDis(arr);
	    } else if (Array.isArray(arr)) {
	      arr.forEach(setDis);
	    }
	  };

	  unsetDisabled = function unsetDisabled(arr) {
	    var setDis = function setDis() {
	      var item = getItemByValue(arr);

	      if (item) {
	        item.classList.remove('is-disabled');
	      }
	    };

	    if (typeof arr === 'string' || typeof arr === 'number') {
	      setDis(arr);
	    } else if (Array.isArray(arr)) {
	      arr.forEach(setDis);
	    } else {
	      [].concat(_toConsumableArray(list.querySelectorAll('.js-list-item'))).forEach(function (item) {
	        return item.classList.remove('is-disabled');
	      });
	    }
	  };

	  if (list.value || list.value === 0) {
	    (function () {
	      var value = String(list.value);
	      var selectItem = getItemByValue(value);
	      var text = void 0;

	      if (selectItem) {
	        text = selectItem.innerHTML;
	      } else {
	        text = value;
	      }

	      [].concat(_toConsumableArray(list.querySelectorAll('.js-list-item'))).forEach(function (item) {
	        if (item.dataset.value === value) {
	          item.classList.add('is-select');
	        } else {
	          item.classList.remove('is-select');
	        }
	      });

	      listValue.textContent = text;
	    })();
	  }

	  list.close = close;
	  list.haveValue = haveValue;
	  list.updateValue = updateValue;
	  list.setValue = setValue;
	  list.setDisabled = setDisabled;
	  list.unsetDisabled = unsetDisabled;

	  if (list.classList.contains('is-btn')) {
	    (function () {
	      var openOver = void 0;
	      var _closeOut = void 0;

	      openOver = function openOver() {
	        window.addEventListener('mouseover', _closeOut);
	        open();
	      };

	      _closeOut = function closeOut(event) {
	        var closest = event.target.closest('.js-list');
	        if (!closest || closest !== list) {
	          window.removeEventListener('mouseover', _closeOut);
	          close();
	        }
	      };

	      listValue.addEventListener('mouseover', openOver);
	    })();
	  } else {
	    listValue.addEventListener('click', function () {
	      if (list.classList.contains('is-open')) {
	        close();
	      } else {
	        open();
	      }
	    });
	  }

	  if (search) {
	    var filterSearch = function filterSearch(event) {
	      var reg = new RegExp(event.target.value, 'i');

	      [].concat(_toConsumableArray(list.querySelectorAll('.js-list-item'))).forEach(function (item) {
	        if (item.textContent.search(reg) === -1) {
	          item.style.display = 'none';
	        } else {
	          item.style.display = '';
	        }
	      });
	    };

	    search.addEventListener('select', filterSearch);
	    search.addEventListener('change', filterSearch);
	    search.addEventListener('keyup', filterSearch);
	  }

	  list.addEventListener('click', function (event) {
	    var item = event.target.closest('.js-list-item');

	    if (item) {
	      if (event.target.classList.contains('is-disabled')) {
	        return;
	      }

	      if (item.dataset.value) {
	        setValue(item.dataset.value);
	      }

	      close();
	    }
	  });

	  [].concat(_toConsumableArray(list.querySelectorAll('.js-list-item'))).forEach(function (item) {
	    if (item.classList.contains('is-select') && item.dataset.value) {
	      setValue(item.dataset.value);
	    }
	  });

	  if (!listValue.textContent && placeholder && setstyle) {
	    listValue.innerHTML = '<div style="' + setstyle + '">' + placeholder + '</div>';
	  } else if (!listValue.textContent && placeholder) {
	    listValue.textContent = placeholder;
	  }
	};

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 58 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  window.addEventListener('mouseover', function (event) {
	    var helper = event.target.closest('.js-helper');

	    if (helper && !helper.isOpen) {
	      (function () {
	        helper.isOpen = true;
	        helper.classList.add('is-open');

	        var closeHelper = void 0;
	        var mouseOverHelper = void 0;
	        var mouseOutHelper = void 0;
	        var timer = void 0;

	        closeHelper = function closeHelper() {
	          helper.isOpen = false;
	          helper.classList.remove('is-open');
	          helper.removeEventListener('mouseover', mouseOverHelper);
	          helper.removeEventListener('mouseout', mouseOutHelper);
	        };

	        mouseOverHelper = function mouseOverHelper() {
	          clearTimeout(timer);
	        };

	        mouseOutHelper = function mouseOutHelper() {
	          timer = setTimeout(closeHelper, 200);
	        };

	        helper.addEventListener('mouseover', mouseOverHelper);
	        helper.addEventListener('mouseout', mouseOutHelper);
	      })();
	    }
	  });
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  [].concat(_toConsumableArray(document.querySelectorAll('.js-select'))).forEach(_selectEvent2.default);
	};

	var _selectEvent = __webpack_require__(60);

	var _selectEvent2 = _interopRequireDefault(_selectEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 60 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (select) {
	  var popup = select.querySelector('.js-select-popup');
	  var items = select.querySelectorAll('.js-select-item');

	  var applyBtn = select.querySelector('.js-select-apply');
	  var closeBtn = select.querySelector('.js-select-close');

	  var clickWindow = void 0;
	  var open = void 0;
	  var close = void 0;
	  var updateValue = void 0;
	  var setValue = void 0;
	  var setDisabled = void 0;
	  var unsetDisabled = void 0;

	  var newValue = void 0;

	  clickWindow = function clickWindow(event) {
	    var closest = event.target.closest('.js-select');
	    if (!closest || closest !== select) {
	      close();
	    }
	  };

	  open = function open() {
	    if (select.classList.contains('is-open')) {
	      return;
	    }

	    var value = select.value;

	    select.querySelectorAll('.js-select-item').forEach(function (item) {
	      var val = item.dataset.value;

	      if (val && value.indexOf(val) !== -1) {
	        item.classList.add('is-select');
	      } else {
	        item.classList.remove('is-select');
	      }
	    });

	    newValue = [];
	    select.value.map(function (val) {
	      return newValue.push(val);
	    });

	    select.classList.add('is-open');
	    window.addEventListener('click', clickWindow);
	  };

	  close = function close() {
	    window.removeEventListener('click', clickWindow);
	    setTimeout(function () {
	      select.classList.remove('is-open');
	    }, 0);
	  };

	  updateValue = function updateValue(arr) {
	    var isUpdate = false;
	    var param = void 0;

	    var check = function check(par) {
	      var p = String(par);

	      if (select.value.indexOf(p) === -1) {
	        select.value.push(p);
	        isUpdate = true;
	      }
	    };

	    if (typeof arr === 'string' || typeof arr === 'number') {
	      param = [arr];
	    } else {
	      param = arr;
	    }

	    if (Array.isArray(param)) {
	      (function () {
	        param.forEach(function (par) {
	          var p = String(par);

	          if (select.value.indexOf(p) === -1) {
	            select.value.push(p);
	            isUpdate = true;
	          }
	        });

	        var tempSelectValue = [];

	        select.value.forEach(function (par, i) {
	          if (param.indexOf(par) === -1) {
	            isUpdate = true;
	          } else {
	            tempSelectValue.push(par);
	          }
	        });

	        select.value = tempSelectValue;
	      })();
	    }

	    return isUpdate;
	  };

	  setValue = function setValue(param) {
	    if (updateValue(param)) {
	      select.triggerEvent('change');
	    }
	  };

	  setDisabled = function setDisabled(param) {
	    var setDis = function setDis(par) {
	      var p = String(par);

	      [].concat(_toConsumableArray(select.querySelectorAll('.js-select-item'))).forEach(function (item) {
	        if (item.dataset.value === p) {
	          item.classList.add('is-disabled');
	        }
	      });
	    };

	    if (typeof param === 'string' || typeof param === 'number') {
	      setDis(param);
	    } else if (Array.isArray(param)) {
	      param.forEach(setDis);
	    }
	  };

	  unsetDisabled = function unsetDisabled(param) {
	    var setDis = function setDis(par) {
	      var p = String(par);

	      [].concat(_toConsumableArray(select.querySelectorAll('.js-select-item'))).forEach(function (item) {
	        if (item.dataset.value === p) {
	          item.classList.remove('is-disabled');
	        }
	      });
	    };

	    if (typeof param === 'string' || typeof param === 'number') {
	      setDis(param);
	    } else if (Array.isArray(param)) {
	      param.forEach(setDis);
	    } else {
	      [].concat(_toConsumableArray(select.querySelectorAll('.js-select-item'))).forEach(function (item) {
	        return item.classList.remove('is-disabled');
	      });
	    }
	  };

	  select.value = select.value || [];

	  select.updateValue = updateValue;
	  select.setValue = setValue;
	  select.setDisabled = setDisabled;
	  select.unsetDisabled = unsetDisabled;

	  select.addEventListener('click', open);

	  applyBtn.addEventListener('click', function () {
	    setValue(newValue);
	    close();
	  });

	  closeBtn.addEventListener('click', close);

	  select.addEventListener('click', function (event) {
	    var item = event.target.closest('.js-select-item');

	    if (item) {
	      if (event.target.classList.contains('is-disabled')) {
	        return;
	      }

	      var ind = newValue.indexOf(item.dataset.value);

	      if (ind !== -1) {
	        item.classList.remove('is-select');
	        newValue.splice(ind, 1);
	      } else {
	        item.classList.add('is-select');
	        newValue.push(item.dataset.value);
	      }
	    }
	  });
	};

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = function () {
	  [].concat(_toConsumableArray(document.querySelectorAll('.js-calendar'))).forEach(function (control) {
	    var calendar = control.querySelector('.js-calendar-popup');

	    if (!calendar) {
	      return;
	    }

	    var currentDatetime = window.might.current_datetime;

	    var today = {
	      year: currentDatetime.getFullYear(),
	      month: currentDatetime.getMonth(),
	      date: currentDatetime.getDate()
	    };

	    var period = void 0;

	    var labelControl = control.querySelector('.js-calendar-value');

	    var boxes = {
	      from: calendar.querySelectorAll('.js-calendar-box')[0],
	      to: calendar.querySelectorAll('.js-calendar-box')[1]
	    };

	    var ranges = {
	      today: calendar.querySelector('.js-calendar-range-today'),
	      yesterday: calendar.querySelector('.js-calendar-range-yesterday'),
	      lastweek: calendar.querySelector('.js-calendar-range-lastweek'),
	      lastdays: calendar.querySelector('.js-calendar-range-lastdays'),
	      thismonth: calendar.querySelector('.js-calendar-range-thismonth'),
	      lastmonth: calendar.querySelector('.js-calendar-range-lastmonth'),
	      custom: calendar.querySelector('.js-calendar-range-custom')
	    };

	    var inputTimeStart = calendar.querySelector('.js-calendar-time-start');
	    var inputTimeEnd = calendar.querySelector('.js-calendar-time-end');
	    var timezone = calendar.querySelector('.js-calendar-timezone');
	    var applyBtn = calendar.querySelector('.js-calendar-apply');
	    var closeBtn = calendar.querySelector('.js-calendar-close');

	    var clickWindow = void 0;
	    var _open = void 0;
	    var close = void 0;
	    var resetPeriod = void 0;
	    var renderDefault = void 0;
	    var renderDays = void 0;
	    var renderRanges = void 0;
	    var renderInputs = void 0;
	    var updateSelects = void 0;
	    var mouseoverDay = void 0;
	    var mouseoutDay = void 0;
	    var clickDay = void 0;
	    var clickRange = void 0;
	    var eventBoxes = void 0;
	    var setLabelControl = void 0;
	    var updateValue = void 0;
	    var setValue = void 0;

	    clickWindow = function clickWindow(event) {
	      var closest = event.target.closest('.js-calendar');

	      if (!closest || closest !== control) {
	        resetPeriod();
	        close(event);
	      }
	    };

	    _open = function open(event) {
	      event.stopPropagation();

	      resetPeriod();
	      renderDefault();

	      calendar.classList.add('is-open');
	      control.removeEventListener('click', _open);
	      window.addEventListener('click', clickWindow);
	    };

	    close = function close(event) {
	      event.stopPropagation();
	      calendar.classList.remove('is-open');
	      control.addEventListener('click', _open);
	      window.removeEventListener('click', clickWindow);
	    };

	    resetPeriod = function resetPeriod() {
	      var value = control.value;

	      period = {
	        from: {
	          year: value.from.year,
	          month: value.from.month,
	          date: value.from.date
	        },
	        to: {
	          year: value.to.year,
	          month: value.to.month,
	          date: value.to.date
	        },
	        start_time: value.start_time,
	        end_time: value.end_time,
	        timezone: value.timezone
	      };
	    };

	    renderDefault = function renderDefault() {
	      var curFrom = boxes.from.current;
	      var curTo = boxes.to.current;

	      curFrom.year = period.from.year;
	      curFrom.month = period.from.month;

	      curTo.year = period.to.year;
	      curTo.month = period.to.month;

	      if (curFrom.year === curTo.year && curFrom.month === curTo.month) {
	        curFrom.month--;

	        if (curFrom.month < 0) {
	          curFrom.month = 11;
	          curFrom.year--;
	        }
	      }

	      updateSelects('from');
	      updateSelects('to');

	      renderDays('from');
	      renderDays('to');
	      renderRanges();

	      renderInputs();

	      timezone.setValue(period.timezone);
	    };

	    renderDays = function renderDays(b) {
	      var days = boxes[b].querySelector('.js-calendar-days');

	      var month = boxes[b].current.month;
	      var year = boxes[b].current.year;
	      var count = new Date(year, month + 1, 0).getDate();
	      var first = new Date(year, month, 1).getDay() - 1;

	      if (first === -1) {
	        first = 6;
	      }

	      var tsFrom = +new Date(period.from.year, period.from.month, period.from.date);
	      var tsTo = +new Date(period.to.year, period.to.month, period.to.date);
	      var tsToday = +new Date(today.year, today.month, today.date);

	      days.innerHTML = '';
	      boxes[b].days_scope = {};

	      for (var i = 1 - first; i <= count; i++) {
	        var span = document.createElement('span');
	        var day = void 0;

	        if (i > 0) {
	          span.textContent = i;
	          day = +new Date(year, month, i);

	          if (tsFrom === day) {
	            span.classList.add('is-start');
	          }

	          if (tsFrom < day && tsTo > day) {
	            span.classList.add('is-between');
	          }

	          if (tsTo === day) {
	            span.classList.add('is-end');
	          }

	          if (tsToday < day) {
	            span.classList.add('is-future');
	          } else {
	            span.dataset.value = day;
	            span.addEventListener('click', clickDay);
	            boxes[b].days_scope[day] = span;
	          }
	        } else {
	          span.classList.add('is-empty');
	        }

	        days.appendChild(span);
	      }
	    };

	    renderRanges = function renderRanges() {
	      for (var i in ranges) {
	        if (ranges.hasOwnProperty(i)) {
	          ranges[i].parentNode.classList.remove('is-select');
	        }
	      }

	      var tsFrom = +new Date(period.from.year, period.from.month, period.from.date);
	      var tsTo = +new Date(period.to.year, period.to.month, period.to.date);

	      var tsToday = +new Date(today.year, today.month, today.date);
	      var tsYesterday = +new Date(today.year, today.month, today.date - 1);
	      var ts7 = +new Date(today.year, today.month, today.date - 6);
	      var ts30 = +new Date(today.year, today.month, today.date - 29);

	      var tsMonthFrom = +new Date(today.year, today.month, 1);

	      var tsLastMonthFrom = +new Date(today.year, today.month - 1, 1);
	      var tsLastMonthTo = +new Date(today.year, today.month, 0);

	      if (tsFrom === tsToday && tsTo === tsToday) {
	        ranges.today.parentNode.classList.add('is-select');
	      } else if (tsFrom === tsYesterday && tsTo === tsYesterday) {
	        ranges.yesterday.parentNode.classList.add('is-select');
	      } else if (tsFrom === ts7 && tsTo === tsToday) {
	        ranges.lastweek.parentNode.classList.add('is-select');
	      } else if (tsFrom === ts30 && tsTo === tsToday) {
	        ranges.lastdays.parentNode.classList.add('is-select');
	      } else if (tsFrom === tsMonthFrom && tsTo === tsToday) {
	        ranges.thismonth.parentNode.classList.add('is-select');
	      } else if (tsFrom === tsLastMonthFrom && tsTo === tsLastMonthTo) {
	        ranges.lastmonth.parentNode.classList.add('is-select');
	      } else {
	        ranges.custom.parentNode.classList.add('is-select');
	      }
	    };

	    renderInputs = function renderInputs() {
	      inputTimeStart.value = period.start_time;
	      inputTimeEnd.value = period.end_time;
	    };

	    updateSelects = function updateSelects(b) {
	      var monthSelect = boxes[b].querySelector('.js-calendar-month');
	      var yearSelect = boxes[b].querySelector('.js-calendar-year');

	      try {
	        monthSelect.updateValue(boxes[b].current.month);
	        yearSelect.updateValue(boxes[b].current.year);
	      } catch (err) {
	        throw new Error(err);
	      }
	    };

	    mouseoverDay = function mouseoverDay(event) {
	      var target = event.target;

	      if (target.nodeName !== 'SPAN' || !target.dataset.value) {
	        mouseoutDay();
	        return;
	      }

	      var date = parseInt(target.dataset.value, 10);
	      var tsFrom = +new Date(period.from.year, period.from.month, period.from.date);
	      var tsTo = +new Date(period.to.year, period.to.month, period.to.date);

	      var fromScope = boxes.from.days_scope;
	      var toScope = boxes.to.days_scope;

	      var setBetween = function setBetween(day, span) {
	        if (tsFrom === tsTo) {
	          if (tsFrom < date && day < date && tsFrom < day || date < tsFrom && date < day && day < tsFrom) {
	            span.classList.add('is-between');
	          } else {
	            span.classList.remove('is-between');
	          }

	          if (tsFrom < date && day === date || tsFrom === day && date < day) {
	            span.classList.remove('is-start');
	            span.classList.add('is-end');
	          } else if (date < tsFrom && day === date || tsFrom === day && day < date) {
	            span.classList.add('is-start');
	            span.classList.remove('is-end');
	          } else {
	            span.classList.remove('is-start');
	            span.classList.remove('is-end');
	          }
	        } else {
	          span.classList.remove('is-between');

	          if (date === day) {
	            span.classList.add('is-start');
	            span.classList.add('is-end');
	          } else {
	            span.classList.remove('is-start');
	            span.classList.remove('is-end');
	          }
	        }
	      };

	      for (var i in fromScope) {
	        if (fromScope.hasOwnProperty(i)) {
	          setBetween(parseInt(i, 10), fromScope[i]);
	        }
	      }

	      for (var _i in toScope) {
	        if (toScope.hasOwnProperty(_i)) {
	          setBetween(parseInt(_i, 10), toScope[_i]);
	        }
	      }
	    };

	    mouseoutDay = function mouseoutDay() {
	      var tsFrom = +new Date(period.from.year, period.from.month, period.from.date);
	      var tsTo = +new Date(period.to.year, period.to.month, period.to.date);

	      var fromScope = boxes.from.days_scope;
	      var toScope = boxes.to.days_scope;

	      var setBetween = function setBetween(day, span) {
	        if (tsFrom === day) {
	          span.classList.add('is-start');
	        } else {
	          span.classList.remove('is-start');
	        }

	        if (tsFrom < day && day < tsTo) {
	          span.classList.add('is-between');
	        } else {
	          span.classList.remove('is-between');
	        }

	        if (tsTo === day) {
	          span.classList.add('is-end');
	        } else {
	          span.classList.remove('is-end');
	        }
	      };

	      for (var i in fromScope) {
	        if (fromScope.hasOwnProperty(i)) {
	          setBetween(parseInt(i, 10), fromScope[i]);
	        }
	      }

	      for (var _i2 in toScope) {
	        if (toScope.hasOwnProperty(_i2)) {
	          setBetween(parseInt(_i2, 10), toScope[_i2]);
	        }
	      }
	    };

	    clickDay = function clickDay(event) {
	      event.stopPropagation();

	      var tsFrom = +new Date(period.from.year, period.from.month, period.from.date);
	      var tsTo = +new Date(period.to.year, period.to.month, period.to.date);

	      var valueDate = new Date(parseInt(this.dataset.value, 10));

	      var year = valueDate.getFullYear();
	      var month = valueDate.getMonth();
	      var date = valueDate.getDate();

	      period.to.year = year;
	      period.to.month = month;
	      period.to.date = date;

	      if (tsFrom !== tsTo) {
	        period.from.year = year;
	        period.from.month = month;
	        period.from.date = date;
	      } else {
	        tsTo = valueDate.getTime();

	        if (tsFrom > tsTo) {
	          var y = period.from.year;
	          var m = period.from.month;
	          var d = period.from.date;

	          period.from.year = period.to.year;
	          period.from.month = period.to.month;
	          period.from.date = period.to.date;

	          period.to.year = y;
	          period.to.month = m;
	          period.to.date = d;
	        }
	      }

	      renderDays('from');
	      renderDays('to');
	      renderRanges();
	    };

	    clickRange = function clickRange(f, t) {
	      var from = f;
	      var to = t || from;
	      var periodTimezone = period.timezone;

	      period = {
	        from: {
	          year: from.getFullYear(),
	          month: from.getMonth(),
	          date: from.getDate()
	        },
	        to: {
	          year: to.getFullYear(),
	          month: to.getMonth(),
	          date: to.getDate()
	        },
	        start_time: '00:00',
	        end_time: '23:59',
	        timezone: periodTimezone
	      };

	      renderDefault();
	    };

	    eventBoxes = function eventBoxes(b) {
	      var box = boxes[b];

	      var next = box.querySelector('.js-calendar-next');
	      var prev = box.querySelector('.js-calendar-prev');
	      var monthSelect = box.querySelector('.js-calendar-month');
	      var yearSelect = box.querySelector('.js-calendar-year');

	      box.current = {};

	      prev.addEventListener('click', function () {
	        box.current.month--;

	        if (box.current.month < 0) {
	          box.current.month = 11;
	          box.current.year--;
	        }

	        updateSelects(b);
	        renderDays(b);
	      });

	      next.addEventListener('click', function () {
	        box.current.month++;

	        if (box.current.month > 11) {
	          box.current.month = 0;
	          box.current.year++;
	        }

	        updateSelects(b);
	        renderDays(b);
	      });

	      monthSelect.addEventListener('change', function () {
	        try {
	          box.current.month = parseInt(monthSelect.value, 10);
	          renderDays(b);
	        } catch (err) {
	          throw new Error(err);
	        }
	      });

	      yearSelect.addEventListener('change', function () {
	        try {
	          box.current.year = parseInt(yearSelect.value, 10);
	          renderDays(b);
	        } catch (err) {
	          throw new Error(err);
	        }
	      });
	    };

	    setLabelControl = function setLabelControl() {
	      if (labelControl) {
	        var value = control.value;
	        var from = new Date(value.from.year, value.from.month, value.from.date);
	        var to = new Date(value.to.year, value.to.month, value.to.date);

	        from = (0, _dateformat2.default)(from, 'mmmm dd, yyyy');
	        to = (0, _dateformat2.default)(to, 'mmmm dd, yyyy');

	        if (from === to) {
	          labelControl.innerHTML = from;
	        } else {
	          labelControl.innerHTML = from + ' &mdash; ' + to;
	        }
	      }
	    };

	    updateValue = function updateValue(obj) {
	      var value = control.value;
	      var newValue = obj || period;
	      var isUpdate = false;

	      for (var i in value) {
	        if (value.hasOwnProperty(i) && newValue.hasOwnProperty(i)) {
	          if (_typeof(value[i]) === 'object') {
	            for (var j in value[i]) {
	              if (value[i].hasOwnProperty(j) && newValue[i].hasOwnProperty(j)) {
	                if (value[i][j] !== newValue[i][j]) {
	                  value[i][j] = newValue[i][j];
	                  isUpdate = true;
	                }
	              }
	            }
	          } else {
	            if (value[i] !== newValue[i]) {
	              value[i] = newValue[i];
	              isUpdate = true;
	            }
	          }
	        }
	      }

	      setLabelControl();

	      return isUpdate;
	    };

	    setValue = function setValue(obj) {
	      if (updateValue(obj)) {
	        control.triggerEvent('change');
	      }
	    };

	    boxes.from.addEventListener('mouseover', mouseoverDay);
	    boxes.to.addEventListener('mouseover', mouseoverDay);
	    boxes.from.addEventListener('mouseout', mouseoutDay);
	    boxes.to.addEventListener('mouseout', mouseoutDay);

	    ranges.today.addEventListener('click', function () {
	      var tsToday = new Date(today.year, today.month, today.date);
	      clickRange(tsToday);
	    });

	    ranges.yesterday.addEventListener('click', function () {
	      var tsYesterday = new Date(today.year, today.month, today.date - 1);
	      clickRange(tsYesterday);
	    });

	    ranges.lastweek.addEventListener('click', function () {
	      var ts7 = new Date(today.year, today.month, today.date - 6);
	      var tsToday = new Date(today.year, today.month, today.date);
	      clickRange(ts7, tsToday);
	    });

	    ranges.lastdays.addEventListener('click', function () {
	      var ts30 = new Date(today.year, today.month, today.date - 29);
	      var tsToday = new Date(today.year, today.month, today.date);
	      clickRange(ts30, tsToday);
	    });

	    ranges.thismonth.addEventListener('click', function () {
	      var tsMonthFrom = new Date(today.year, today.month, 1);
	      var tsToday = new Date(today.year, today.month, today.date);
	      clickRange(tsMonthFrom, tsToday);
	    });

	    ranges.lastmonth.addEventListener('click', function () {
	      var tsLastMonthFrom = new Date(today.year, today.month - 1, 1);
	      var tsLastMonthTo = new Date(today.year, today.month, 0);
	      clickRange(tsLastMonthFrom, tsLastMonthTo);
	    });

	    inputTimeStart.addEventListener('change', function () {
	      period.start_time = inputTimeStart.value;
	    });

	    inputTimeEnd.addEventListener('change', function () {
	      period.end_time = inputTimeEnd.value;
	    });

	    timezone.addEventListener('change', function () {
	      period.timezone = timezone.value;
	    });

	    applyBtn.addEventListener('click', function (event) {
	      setValue();
	      close(event);
	    });

	    closeBtn.addEventListener('click', function (event) {
	      close(event);
	    });

	    control.addEventListener('click', _open);

	    control.value = {
	      from: {
	        year: today.year,
	        month: today.month,
	        date: today.date
	      },
	      to: {
	        year: today.year,
	        month: today.month,
	        date: today.date
	      },
	      start_time: '00:00',
	      end_time: '23:59',
	      timezone: '+03:00|Europe/Moscow'
	    };

	    eventBoxes('from');
	    eventBoxes('to');

	    setLabelControl();

	    control.updateValue = updateValue;
	    control.setValue = setValue;
	  });
	};

	var _dateformat = __webpack_require__(62);

	var _dateformat2 = _interopRequireDefault(_dateformat);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 62 */,
/* 63 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  [].concat(_toConsumableArray(document.querySelectorAll('.js-postback'))).forEach(function (control) {
	    var postback = control.querySelector('.js-postback-popup');

	    if (!postback) {
	      return;
	    }

	    var trigger = postback.querySelector('.js-postback-trigger');
	    var usd = postback.querySelector('.js-postback-usd');
	    var eur = postback.querySelector('.js-postback-eur');
	    var rub = postback.querySelector('.js-postback-rub');
	    var applyBtn = postback.querySelector('.js-postback-apply');
	    var closeBtn = postback.querySelector('.js-postback-close');

	    var clickWindow = void 0;
	    var resetBtns = void 0;
	    var open = void 0;
	    var close = void 0;
	    var updateValue = void 0;
	    var setValue = void 0;
	    var tempValue = {};

	    clickWindow = function clickWindow(event) {
	      var closest = event.target.closest('.js-postback');
	      if (!closest || closest !== control) {
	        close();
	      }
	    };

	    resetBtns = function resetBtns(obj) {
	      if (obj.postback_date) {
	        trigger.classList.add('is-active');
	      } else {
	        trigger.classList.remove('is-active');
	      }

	      switch (obj.currency) {
	        case 'usd':
	          usd.classList.add('is-active');
	          eur.classList.remove('is-active');
	          rub.classList.remove('is-active');
	          break;
	        case 'eur':
	          usd.classList.remove('is-active');
	          eur.classList.add('is-active');
	          rub.classList.remove('is-active');
	          break;
	        case 'rub':
	          usd.classList.remove('is-active');
	          eur.classList.remove('is-active');
	          rub.classList.add('is-active');
	          break;
	        default:
	          break;
	      }
	    };

	    open = function open() {
	      if (control.classList.contains('is-open')) {
	        return;
	      }

	      tempValue.postback_date = control.value.postback_date;
	      tempValue.currency = control.value.currency;

	      control.classList.add('is-open');
	      window.addEventListener('click', clickWindow);
	    };

	    close = function close() {
	      resetBtns(control.value);

	      window.removeEventListener('click', clickWindow);
	      setTimeout(function () {
	        control.classList.remove('is-open');
	      }, 0);
	    };

	    updateValue = function updateValue(obj) {
	      var isUpdate = false;

	      if (obj.hasOwnProperty('postback_date')) {
	        if (control.value.postback_date !== !!obj.postback_date) {
	          control.value.postback_date = !!obj.postback_date;
	          isUpdate = true;
	        }
	      }

	      if (obj.hasOwnProperty('currency')) {
	        if (control.value.currency !== obj.currency.toUpperCase()) {
	          control.value.currency = obj.currency.toUpperCase();
	          isUpdate = true;
	        }
	      }

	      resetBtns(obj);

	      return isUpdate;
	    };

	    setValue = function setValue(obj) {
	      if (updateValue(obj)) {
	        control.triggerEvent('change');
	      }
	    };

	    trigger.addEventListener('click', function () {
	      if (trigger.classList.contains('is-active')) {
	        trigger.classList.remove('is-active');
	        tempValue.postback_date = false;
	      } else {
	        trigger.classList.add('is-active');
	        tempValue.postback_date = true;
	      }
	    });

	    usd.addEventListener('click', function () {
	      usd.classList.add('is-active');
	      eur.classList.remove('is-active');
	      rub.classList.remove('is-active');
	      tempValue.currency = 'usd';
	    });

	    eur.addEventListener('click', function () {
	      usd.classList.remove('is-active');
	      eur.classList.add('is-active');
	      rub.classList.remove('is-active');
	      tempValue.currency = 'eur';
	    });

	    rub.addEventListener('click', function () {
	      usd.classList.remove('is-active');
	      eur.classList.remove('is-active');
	      rub.classList.add('is-active');
	      tempValue.currency = 'rub';
	    });

	    applyBtn.addEventListener('click', function () {
	      setValue(tempValue);
	      close();
	    });

	    closeBtn.addEventListener('click', function () {
	      close();
	    });

	    control.value = {};

	    control.addEventListener('click', open);

	    control.updateValue = updateValue;
	    control.setValue = setValue;
	  });
	};

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  [].concat(_toConsumableArray(document.querySelectorAll('.js-list-fetch'))).forEach(_listFetchEvent2.default);
	};

	var _listFetchEvent = __webpack_require__(65);

	var _listFetchEvent2 = _interopRequireDefault(_listFetchEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (list) {
	  var listValue = list.querySelector('.js-list-fetch-value');
	  var search = list.querySelector('.js-list-fetch-search');
	  var itemsWrap = list.querySelector('.js-list-fetch-items');
	  var placeholder = list.dataset.placeholder;

	  var clickWindow = void 0;
	  var open = void 0;
	  var close = void 0;
	  var updateItems = void 0;
	  var updateValue = void 0;
	  var setValue = void 0;
	  var filterSearch = void 0;

	  clickWindow = function clickWindow(event) {
	    var closest = event.target.closest('.js-list-fetch');
	    if (!closest || closest !== list) {
	      close();
	    }
	  };

	  open = function open() {
	    search.value = '';
	    updateItems();
	    list.classList.add('is-open');
	    window.addEventListener('click', clickWindow);
	  };

	  close = function close() {
	    list.classList.remove('is-open');
	    window.removeEventListener('click', clickWindow);
	  };

	  var dateToString = function dateToString(y, m, d) {
	    var date = new Date(y, m, d);
	    return (0, _dateformat2.default)(date, 'yyyy-mm-dd');
	  };

	  updateItems = function updateItems() {
	    var params = window.might.stat.params;
	    var from = dateToString(params.date_from.year, params.date_from.month, params.date_from.date);
	    var to = dateToString(params.date_to.year, params.date_to.month, params.date_to.date);
	    var dateFilter = from + ' - ' + to;

	    var data = {
	      date_filter: dateFilter,
	      timezone: params.timezone,
	      search: search.value || false,
	      field: list.field
	    };

	    params.filters_stock.forEach(function (filter, i) {
	      if (filter.field !== list.field) {
	        data.filter_items = data.filter_items || [];
	        data.filter_items[filter];
	      }
	    });

	    (0, _fetchApi.fetchObject)('/campaign/data/for/top_filter', data, false).then(function (res) {
	      itemsWrap.innerHTML = '';

	      if (res.error === false) {
	        res.data.forEach(function (item) {
	          var name = void 0;

	          if (item.title) {
	            name = item.title;
	          } else {
	            name = item[list.field] || item.v;
	          }

	          itemsWrap.innerHTML += '<div ' + 'class="list__item js-list-fetch-item' + (item.v === list.value ? ' is-select"' : '"') + ' data-value="' + item.v + '">' + name + '</div>';
	        });
	      }
	    }).catch(function (err) {
	      throw new Error(err);
	    });
	  };

	  updateValue = function updateValue(val, ttl, fld, clr) {
	    var isUpdate = false;

	    if (!val && val !== 0) {
	      if (list.value) {
	        list.value = null;
	        list.title = null;
	        isUpdate = true;
	      }

	      if (placeholder) {
	        listValue.textContent = placeholder;
	      }
	    } else {
	      (function () {
	        var value = String(val);
	        var title = ttl || value;

	        if (list.value !== value) {
	          list.value = value;
	          list.title = title;
	          listValue.textContent = title;
	          isUpdate = true;

	          [].concat(_toConsumableArray(list.querySelectorAll('.js-list-fetch-item'))).forEach(function (el) {
	            if (el.dataset.value === value) {
	              el.classList.add('is-select');
	            } else {
	              el.classList.remove('is-select');
	            }
	          });
	        }
	      })();
	    }

	    if (clr) {
	      var clearBtn = document.createElement('div');
	      clearBtn.className = 'list__clear';
	      list.appendChild(clearBtn);
	      clearBtn.addEventListener('click', function () {
	        setValue();
	      });
	    }

	    if (fld) {
	      list.field = fld;

	      var label = list.querySelector('.list__label');

	      if (label) {
	        label.parentNode.removeChild(label);
	      }

	      label = document.createElement('div');
	      label.className = 'list__label';
	      label.textContent = (0, _fieldName2.default)(fld);
	      list.children[0]._insertBefore(label);
	    }

	    return isUpdate;
	  };

	  setValue = function setValue(value, title) {
	    if (updateValue(value, title)) {
	      list.triggerEvent('change:list');
	    }
	  };

	  list.updateValue = updateValue;
	  list.setValue = setValue;

	  listValue.addEventListener('click', function () {
	    if (list.classList.contains('is-open')) {
	      close();
	    } else {
	      open();
	    }
	  });

	  var timeSearch = void 0;

	  filterSearch = function filterSearch(event) {
	    if (timeSearch) {
	      clearTimeout(timeSearch);
	    }

	    timeSearch = setTimeout(updateItems, 300);
	  };

	  search.addEventListener('select', filterSearch);
	  search.addEventListener('change', filterSearch);
	  search.addEventListener('keyup', filterSearch);

	  list.addEventListener('click', function (event) {
	    var item = event.target.closest('.js-list-fetch-item');

	    if (item) {
	      setValue(item.dataset.value, item.textContent);
	      close();
	    }
	  });

	  if (!listValue.textContent && placeholder) {
	    listValue.textContent = placeholder;
	  }
	};

	var _qs = __webpack_require__(16);

	var _qs2 = _interopRequireDefault(_qs);

	var _dateformat = __webpack_require__(62);

	var _dateformat2 = _interopRequireDefault(_dateformat);

	var _fieldName = __webpack_require__(66);

	var _fieldName2 = _interopRequireDefault(_fieldName);

	var _fetchApi = __webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 66 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (param) {
	  return names[param] || param;
	};

	var names = {
	  campaign_id: 'Campaign',
	  country: 'Country',
	  browser: 'Browser',
	  browser_language: 'Browser language',
	  browser_version: 'Browser version',
	  payment: 'Payment',
	  tm_spend: 'Tm spend',
	  unique_shows: 'Unique shows',
	  shows: 'Shows',
	  unique_clicks: 'Unique clicks',
	  clicks: 'Clicks',
	  uctr: 'UCTR',
	  ctr: 'CTR',
	  leads: 'Leads',
	  declined: 'Declined',
	  pending: 'Pending',
	  total: 'Total',
	  cvr: 'CVR',
	  epc: 'EPC',
	  cpc: 'CPC',
	  rev: 'Rev',
	  spend: 'Spend',
	  pl: 'P/L',
	  roi: 'ROI',
	  label: 'Label',
	  ip: 'IP',
	  ip_range: 'IP range',
	  time_hour: 'Hour',
	  time_day: 'Day',
	  time_weekday: 'Day of week',
	  click_id: 'Click ID',
	  user_agent: 'User agent',
	  referer: 'Referrer',
	  referer_domain: 'Referrer domain',
	  device_brand: 'Device brand',
	  device_model: 'Device model',
	  device_type: 'Device type',
	  state: 'State',
	  city: 'City',
	  os: 'OS',
	  os_version: 'OS version',
	  connection_type: 'Connection type',
	  isp: 'ISP',
	  mobile_carrier: 'Mobile carrier',
	  affiliate_network: 'Affiliate network',
	  traffic_source: 'Traffic source',
	  offer: 'Offer',
	  lander: 'Lander'
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = function () {
	  var stat = document.querySelector('.js-stat');
	  var statControls = document.querySelector('.js-stat-controls');

	  if (!stat) {
	    return;
	  }

	  var statParams = void 0;
	  var segmentScope = [];

	  var segmentsBox = stat.querySelector('.js-stat-segments');
	  var trendsSegmentsBox = stat.querySelector('.js-trends-segments');
	  var filterControl = stat.querySelector('.js-stat-filter');
	  var datetime = stat.querySelector('.js-stat-datetime');
	  var segmentBtns = void 0;
	  var segmentLists = void 0;
	  var segmentAdd = stat.querySelector('.js-stat-add-segment');
	  var cohortFilterAdd = stat.querySelector('.js-cohort-add-filter');
	  var downloadBtn = stat.querySelector('.js-stat-download');
	  var graphBtn = stat.querySelector('.js-stat-show-graph');
	  var treeBtn = stat.querySelector('.js-stat-is-tree');
	  var postbackControl = stat.querySelector('.js-stat-postback');
	  var navControl = stat.querySelector('.js-stat-nav');
	  var refreshBtn = stat.querySelector('.js-stat-refresh');
	  var columnsControl = stat.querySelector('.js-stat-columns');
	  var statGraphFields = stat.querySelector('.js-stat-graph-fields');
	  var cohortSize = stat.querySelector('.js-stat-cohort-size');
	  var cohortMetric1 = stat.querySelector('.js-stat-cohort-metric1');
	  var cohortMetric2 = stat.querySelector('.js-stat-cohort-metric2');

	  var createControls = {
	    campaign_id: {
	      list: stat.querySelector('.js-stat-campaign-list'),
	      add: stat.querySelector('.js-stat-campaign-add')
	    },
	    lander: {
	      list: stat.querySelector('.js-stat-lander-list'),
	      add: stat.querySelector('.js-stat-lander-add')
	    },
	    offer: {
	      list: stat.querySelector('.js-stat-offer-list'),
	      add: stat.querySelector('.js-stat-offer-add')
	    },
	    traffic_source: {
	      list: stat.querySelector('.js-stat-traff-list'),
	      add: stat.querySelector('.js-stat-traff-add')
	    },
	    affiliate_network: {
	      list: stat.querySelector('.js-stat-aff-list'),
	      add: stat.querySelector('.js-stat-aff-add')
	    }
	  };

	  function updateCreateControls() {
	    var right = window.__active_permission__;

	    if (statControls) {
	      for (var i in createControls) {
	        if (createControls.hasOwnProperty(i)) {
	          var item = createControls[i];

	          if (i !== statParams.segments[0]) {
	            item.list.style.display = 'none';
	            item.add.style.display = 'none';
	          } else {
	            if (right) {
	              switch (statParams.segments[0]) {
	                case 'campaign_id':
	                  item.list.style.display = right.campaigns.type.indexOf(1) !== -1 ? '' : 'none';
	                  item.add.style.display = right.campaigns.type.indexOf(3) !== -1 ? '' : 'none';
	                  break;
	                case 'lander':
	                  item.list.style.display = right.landers.type.indexOf(1) !== -1 ? '' : 'none';
	                  item.add.style.display = right.landers.type.indexOf(3) !== -1 ? '' : 'none';
	                  break;
	                case 'offer':
	                  item.list.style.display = right.offers.type.indexOf(1) !== -1 ? '' : 'none';
	                  item.add.style.display = right.offers.type.indexOf(3) !== -1 ? '' : 'none';
	                  break;
	                case 'traffic_source':
	                  item.list.style.display = right.traffic_source.type.indexOf(1) !== -1 ? '' : 'none';
	                  item.add.style.display = right.traffic_source.type.indexOf(3) !== -1 ? '' : 'none';
	                  break;
	                case 'affiliate_network':
	                  item.list.style.display = right.affiliate_network.type.indexOf(1) !== -1 ? '' : 'none';
	                  item.add.style.display = right.affiliate_network.type.indexOf(3) !== -1 ? '' : 'none';
	                  break;
	                default:
	                  break;
	              }
	            } else {
	              item.list.style.display = '';
	              item.add.style.display = '';
	            }
	          }
	        }
	      }
	    }
	  }

	  function updateFilterStock() {
	    if (filterControl) {
	      filterControl.style.display = 'none';
	      filterControl.innerHTML = '';

	      statParams.filters_stock.forEach(function (filter) {
	        var filterEl = document.createElement('div');
	        filterEl.className = 'list js-list-fetch is-margin-top';
	        filterEl.dataset.placeholder = 'Select filter';
	        filterEl.innerHTML = '\n          <div class="list__wrap">\n            <div class="list__value js-list-fetch-value"></div>\n            <div class="list__dropdown">\n              <div class="list__search">\n                <i class="fa fa-search"></i>\n                <input class="js-list-fetch-search" type="text">\n              </div>\n              <div class="list__items js-list-fetch-items"></div>\n            </div>\n          </div>';
	        filterControl.appendChild(filterEl);
	        (0, _listFetchEvent2.default)(filterEl);

	        filterEl.updateValue(filter.value, filter.title, filter.field, true);

	        filterEl.addEventListener('change:list', function (event) {
	          (0, _update2.default)({ filter_stock: { field: filter.field, value: filterEl.value, title: filterEl.title } });
	          updateFilterStock();
	        });

	        filterControl.style.display = '';
	      });
	    }
	  }

	  function segmentChange(event) {
	    var segment = event.target;
	    var value = segment.value;
	    var oldValue = segment.oldValue;
	    var level = segmentScope.indexOf(segment);

	    segmentAdd.unsetDisabled(oldValue);
	    segmentScope.forEach(function (el) {
	      return el.unsetDisabled(oldValue);
	    });

	    if (value || value === 0) {
	      segmentAdd.setDisabled(value);
	      segmentScope.forEach(function (el, l) {
	        if (el !== segment) {
	          el.setDisabled(value);
	        }
	      });
	      (0, _update2.default)({ segment: { value: value, level: level + 1 } });
	    } else {
	      segment.removeEventListener('change', segmentChange);
	      (0, _update2.default)({ segment: { level: level + 1 } });
	      segmentScope.splice(level, 1);
	      segment.parentNode.removeChild(segment);

	      if (statParams.segments.length && segmentScope.length < 3) {
	        segmentAdd.style.display = '';
	      } else {
	        segmentAdd.style.display = 'none';
	      }
	    }
	  }

	  function segmentClone(value) {
	    segmentAdd.updateValue();
	    segmentAdd.setDisabled(value);
	    segmentScope.forEach(function (el) {
	      return el.setDisabled(value);
	    });

	    var segment = segmentAdd.cloneNode(true);
	    segment.classList.remove('is-open', 'is-add', 'js-stat-add-segment');
	    segmentAdd._insertBefore(segment);
	    (0, _listEvent2.default)(segment);
	    segment.updateValue(value, null, true);
	    segment.addEventListener('change', segmentChange);
	    segmentScope.push(segment);

	    if (statParams.segments.length && segmentScope.length < 3) {
	      segmentAdd.style.display = '';
	    } else {
	      segmentAdd.style.display = 'none';
	    }
	  }

	  function addGraphFilter(pos) {
	    var filter = document.createElement('div');
	    filter.className = 'list js-list';
	    filter.dataset.placeholder = 'Select line';
	    filter.innerHTML = '\n      <div class="list__wrap">\n        <div class="list__value js-list-value"></div>\n        <div class="list__dropdown">\n          <div class="list__items js-list-items"></div>\n        </div>\n      </div>';

	    var items = filter.querySelector('.js-list-items');

	    for (var field in statParams.all_columns) {
	      if (statParams.all_columns.hasOwnProperty(field)) {
	        var item = document.createElement('div');
	        item.className = 'list__item js-list-item';
	        item.dataset.value = field;
	        item.textContent = statParams.all_columns[field];
	        items.appendChild(item);
	      }
	    }

	    statGraphFields.appendChild(filter);
	    (0, _listEvent2.default)(filter);

	    var eye = document.createElement('div');
	    eye.className = 'list__eye js-list-eye';
	    eye.innerHTML = '<i class="fa fa-eye"></i>';
	    eye.style.color = window.might.graph_colors[pos];
	    eye.style.backgroundColor = '#fff';
	    filter.appendChild(eye);

	    eye.addEventListener('click', function () {
	      if (filter.value) {
	        if (statParams.fields_graph[pos].visible) {
	          (0, _update2.default)({ field_graph: { field: filter.value, visible: false, pos: pos } });
	          eye.style.color = window.might.graph_colors[pos];
	          eye.style.backgroundColor = '#fff';
	        } else {
	          (0, _update2.default)({ field_graph: { field: filter.value, visible: true, pos: pos } });
	          eye.style.color = '#fff';
	          eye.style.backgroundColor = window.might.graph_colors[pos];
	        }
	      }
	    });

	    filter.addEventListener('change', function () {
	      var lists = statGraphFields.querySelectorAll('.js-list');

	      (0, _update2.default)({ field_graph: { field: filter.value, visible: true, pos: pos } });
	      eye.style.color = '#fff';
	      eye.style.backgroundColor = window.might.graph_colors[pos];

	      [].concat(_toConsumableArray(lists)).forEach(function (list) {
	        if (filter.oldValue) {
	          list.unsetDisabled(filter.oldValue);
	        }
	        list.setDisabled(filter.value);
	      });
	    });
	  }

	  function controlEvents() {
	    updateCreateControls();

	    if (datetime) {
	      datetime.addEventListener('change', function (event) {
	        var value = datetime.value;

	        stat.graph_zoom = null;

	        (0, _update2.default)({
	          date_from: {
	            year: value.from.year,
	            month: value.from.month,
	            date: value.from.date
	          },
	          date_to: {
	            year: value.to.year,
	            month: value.to.month,
	            date: value.to.date
	          },
	          start_time: value.start_time,
	          end_time: value.end_time,
	          timezone: value.timezone
	        });
	      });
	    }

	    [].concat(_toConsumableArray(segmentBtns)).forEach(function (btn) {
	      btn.addEventListener('click', function () {
	        var value = btn.dataset.value;

	        if (value) {
	          [].concat(_toConsumableArray(segmentBtns)).forEach(function (el) {
	            el.classList.remove('is-active');
	          });

	          [].concat(_toConsumableArray(segmentLists)).forEach(function (el) {
	            el.updateValue();
	            el.classList.remove('is-active');
	          });

	          (0, _update2.default)({ segment: { value: value, level: 0 } });
	          btn.classList.add('is-active');

	          if (statParams.segments.length && segmentScope.length < 3) {
	            segmentAdd.style.display = '';
	          } else {
	            segmentAdd.style.display = 'none';
	          }
	        }
	      });
	    });

	    [].concat(_toConsumableArray(segmentLists)).forEach(function (list) {
	      list.addEventListener('change', function () {
	        var value = list.value;

	        if (value) {
	          [].concat(_toConsumableArray(segmentBtns)).forEach(function (el) {
	            el.classList.remove('is-active');
	          });

	          [].concat(_toConsumableArray(segmentLists)).forEach(function (el) {
	            if (el !== list) {
	              el.updateValue();
	              el.classList.remove('is-active');
	            }
	          });

	          (0, _update2.default)({ segment: { value: value, level: 0 } });
	          list.classList.add('is-active');

	          if (statParams.segments.length && segmentScope.length < 3) {
	            segmentAdd.style.display = '';
	          } else {
	            segmentAdd.style.display = 'none';
	          }
	        }
	      });
	    });

	    if (segmentAdd) {
	      segmentAdd.addEventListener('change', function (event) {
	        var value = segmentAdd.value;
	        if (value) {
	          segmentClone(value);
	          (0, _update2.default)({ segment: { value: value, level: segmentScope.length } });
	        }
	      });
	    }

	    if (cohortFilterAdd) {
	      cohortFilterAdd.addEventListener('change', function (event) {
	        var value = cohortFilterAdd.value;
	        if (value) {
	          (0, _update2.default)({ filter_stock: { field: value } });
	          cohortFilterAdd.updateValue();
	        }
	      });
	    }

	    if (graphBtn) {
	      graphBtn.addEventListener('click', function () {
	        if (statParams.show_graph) {
	          graphBtn.classList.remove('is-active');
	          (0, _update2.default)({ show_graph: false });
	        } else {
	          graphBtn.classList.add('is-active');
	          (0, _update2.default)({ show_graph: true });
	        }
	      });
	    }

	    if (treeBtn) {
	      treeBtn.addEventListener('click', function () {
	        if (statParams.is_tree) {
	          treeBtn.classList.remove('is-active');
	          (0, _update2.default)({ is_tree: false });
	        } else {
	          treeBtn.classList.add('is-active');
	          (0, _update2.default)({ is_tree: true });
	        }
	      });
	    }

	    if (postbackControl) {
	      postbackControl.addEventListener('change', function () {
	        (0, _update2.default)(postbackControl.value);
	      });
	    }

	    if (navControl) {
	      navControl.addEventListener('change', function () {
	        (0, _update2.default)({
	          page: navControl.value.page,
	          length: navControl.value.length
	        });
	      });
	    }

	    if (columnsControl) {
	      columnsControl.addEventListener('change', function () {
	        var cols = {};

	        statParams.columns = [];

	        columnsControl.value.forEach(function (val) {
	          cols[val] = 1;
	          statParams.columns.push(val);
	        });

	        (0, _fetchApi.fetchObject)('/user/update/columns', cols).then(function (res) {
	          if (res.error === false) {
	            (0, _update2.default)({ refresh: true });
	          }
	        }).catch(function (err) {
	          throw new Error(err);
	        });
	      });
	    }

	    if (refreshBtn) {
	      refreshBtn.addEventListener('click', function () {
	        return (0, _update2.default)({ refresh: true });
	      });
	    }

	    if (statGraphFields) {
	      for (var i = 0; i < 5; i++) {
	        addGraphFilter(i);
	      }
	    }

	    if (cohortSize) {
	      cohortSize.addEventListener('change', function () {
	        (0, _update2.default)({ cohort_size: cohortSize.value });
	      });
	    }

	    if (cohortMetric1) {
	      cohortMetric1.addEventListener('change', function () {
	        (0, _update2.default)({ cohort_metric1: cohortMetric1.value });
	      });
	    }

	    if (cohortMetric2) {
	      cohortMetric2.addEventListener('change', function () {
	        (0, _update2.default)({ cohort_metric2: cohortMetric2.value });
	      });
	    }
	  }

	  function controlsReset() {
	    updateFilterStock();

	    [].concat(_toConsumableArray(segmentBtns)).forEach(function (btn) {
	      if (statParams.segments[0] === btn.dataset.value) {
	        btn.classList.add('is-active');
	      } else {
	        btn.classList.remove('is-active');
	      }
	    });

	    [].concat(_toConsumableArray(segmentLists)).forEach(function (list) {
	      if (list.haveValue(statParams.segments[0])) {
	        list.updateValue(statParams.segments[0]);
	        list.classList.add('is-active');
	      } else {
	        list.updateValue();
	        list.classList.remove('is-active');
	      }
	    });

	    if (datetime) {
	      var datetimeFrom = statParams.date_from;
	      var datetimeTo = statParams.date_to;

	      datetime.updateValue({
	        from: {
	          year: datetimeFrom.year,
	          month: datetimeFrom.month,
	          date: datetimeFrom.date
	        },
	        to: {
	          year: datetimeTo.year,
	          month: datetimeTo.month,
	          date: datetimeTo.date
	        },
	        start_time: statParams.start_time,
	        end_time: statParams.end_time,
	        timezone: statParams.timezone
	      });
	    }

	    if (segmentAdd) {
	      segmentAdd.style.display = '';
	      segmentAdd.unsetDisabled();
	      segmentScope.forEach(function (segment, i) {
	        segment.removeEventListener('change', segmentChange);
	        segment.parentNode.removeChild(segment);
	      });
	      segmentScope = [];
	      statParams.segments.forEach(function (value, i) {
	        if (i && i <= 3) {
	          segmentClone(value);
	        }
	      });
	      if (statParams.segments.length && segmentScope.length < 3) {
	        segmentAdd.style.display = '';
	      } else {
	        segmentAdd.style.display = 'none';
	      }
	    }

	    if (graphBtn) {
	      if (statParams.show_graph) {
	        graphBtn.classList.add('is-active');
	      } else {
	        graphBtn.classList.remove('is-active');
	      }
	    }

	    if (treeBtn) {
	      if (statParams.is_tree) {
	        treeBtn.classList.add('is-active');
	      } else {
	        treeBtn.classList.remove('is-active');
	      }
	    }

	    if (postbackControl) {
	      postbackControl.updateValue({
	        postback_date: !!statParams.postback_date,
	        currency: statParams.currency
	      });
	    }

	    if (navControl) {
	      navControl.updateValue({
	        page: statParams.page,
	        length: statParams.length
	      });
	    }

	    if (statGraphFields) {
	      (function () {
	        var lists = statGraphFields.querySelectorAll('.js-list');
	        [].concat(_toConsumableArray(lists)).forEach(function (list) {
	          return list.unsetDisabled();
	        });
	        statParams.fields_graph.forEach(function (fg, pos) {
	          [].concat(_toConsumableArray(lists)).forEach(function (list) {
	            return list.setDisabled(fg.field);
	          });
	          var list = lists[pos];
	          list.updateValue(fg.field);
	          var eye = list.querySelector('.js-list-eye');
	          if (fg.visible) {
	            eye.style.color = '#fff';
	            eye.style.backgroundColor = window.might.graph_colors[pos];
	          } else {
	            eye.style.color = window.might.graph_colors[pos];
	            eye.style.backgroundColor = '#fff';
	          }
	        });
	      })();
	    }

	    if (cohortSize) {
	      cohortSize.updateValue(statParams.cohort_size);
	    }

	    if (cohortMetric1) {
	      cohortMetric1.updateValue(statParams.cohort_metric1);
	    }

	    if (cohortMetric2) {
	      cohortMetric2.updateValue(statParams.cohort_metric2);
	    }
	  }

	  function useSettings() {
	    var result = window.__settings__;

	    if (Array.isArray(result.segments) && (segmentAdd || cohortFilterAdd)) {
	      (function () {
	        var itemsWrap = void 0;

	        if (segmentAdd) {
	          itemsWrap = segmentAdd.querySelector('.js-list-items');
	        } else {
	          itemsWrap = cohortFilterAdd.querySelector('.js-list-items');
	        }

	        itemsWrap.innerHTML = '';

	        result.segments.forEach(function (segment) {
	          if (Array.isArray(segment) && segment.length === 2) {
	            var item = document.createElement('div');
	            item.className = 'list__item js-list-item';
	            item.dataset.value = segment[1];
	            item.textContent = segment[0];
	            itemsWrap.appendChild(item);
	          }
	        });

	        if (cohortFilterAdd) {
	          cohortFilterAdd.style.display = '';
	        }
	      })();
	    }

	    if (result.table && _typeof(result.table) === 'object') {
	      if (Array.isArray(result.table.columns)) {
	        (function () {
	          window.might.stat.columns_name = window.might.stat.columns_name || {};
	          var columnsName = window.might.stat.columns_name;

	          result.table.columns.forEach(function (column) {
	            columnsName[column[1]] = column[0];
	          });
	        })();
	      }

	      if (Array.isArray(result.table.group) && segmentsBox) {
	        segmentsBox.innerHTML = '';
	        result.table.group.forEach(function (seg) {
	          var ctrl = void 0;

	          if (seg.name) {
	            if (seg.value) {
	              ctrl = document.createElement('div');
	              ctrl.className = 'btn-white is-margin-top js-stat-btn-segment';
	              ctrl.dataset.value = seg.value;
	              ctrl.textContent = seg.name;
	              segmentsBox.appendChild(ctrl);
	            } else if (seg.chield && Array.isArray(seg.chield)) {
	              (function () {
	                ctrl = document.createElement('div');
	                ctrl.className = 'list is-btn is-margin-top js-list js-stat-list-segment';
	                ctrl.innerHTML = '' + '<div class="list__wrap">' + '<div class="list__value js-list-value"></div>' + '<div class="list__dropdown">' + '<div class="list__items js-list-items"></div>' + '</div>' + '</div>';
	                ctrl.dataset.placeholder = seg.name;
	                var ctrlItems = ctrl.querySelector('.js-list-items');

	                if (seg.name !== 'Variables') {
	                  seg.chield.forEach(function (cld) {
	                    if (cld && (typeof cld === 'undefined' ? 'undefined' : _typeof(cld)) === 'object') {
	                      if (cld.name && cld.value) {
	                        var item = document.createElement('div');
	                        item.className = 'list__item js-list-item';
	                        item.dataset.value = cld.value;
	                        item.textContent = cld.name;
	                        ctrlItems.appendChild(item);
	                      }
	                    }
	                  });
	                } else {
	                  ctrl.classList.add('js-stat-list-segment-variables');
	                  ctrl.style.display = 'none';
	                }
	                segmentsBox.appendChild(ctrl);
	                (0, _listEvent2.default)(ctrl);
	              })();
	            }
	          }
	        });
	      }

	      if (Array.isArray(result.trends.group) && trendsSegmentsBox) {
	        trendsSegmentsBox.innerHTML = '';
	        result.trends.group.forEach(function (seg) {
	          var ctrl = void 0;

	          if (seg.name) {
	            if (seg.value) {
	              ctrl = document.createElement('div');
	              ctrl.className = 'btn-white is-margin-top js-stat-btn-segment';
	              ctrl.dataset.value = seg.value;
	              ctrl.textContent = seg.name;
	              trendsSegmentsBox.appendChild(ctrl);
	            } else if (seg.chield && Array.isArray(seg.chield)) {
	              (function () {
	                ctrl = document.createElement('div');
	                ctrl.className = 'list is-btn is-margin-top js-list js-stat-list-segment';
	                ctrl.innerHTML = '' + '<div class="list__wrap">' + '<div class="list__value js-list-value"></div>' + '<div class="list__dropdown">' + '<div class="list__items js-list-items"></div>' + '</div>' + '</div>';
	                ctrl.dataset.placeholder = seg.name;
	                var ctrlItems = ctrl.querySelector('.js-list-items');

	                if (seg.name !== 'Variables') {
	                  seg.chield.forEach(function (cld) {
	                    if (cld && (typeof cld === 'undefined' ? 'undefined' : _typeof(cld)) === 'object') {
	                      if (cld.name && cld.value) {
	                        var item = document.createElement('div');
	                        item.className = 'list__item js-list-item';
	                        item.dataset.value = cld.value;
	                        item.textContent = cld.name;
	                        ctrlItems.appendChild(item);
	                      }
	                    }
	                  });
	                } else {
	                  ctrl.classList.add('js-stat-list-segment-variables');
	                  ctrl.style.display = 'none';
	                }
	                trendsSegmentsBox.appendChild(ctrl);
	                (0, _listEvent2.default)(ctrl);
	              })();
	            }
	          }
	        });
	      }
	    }

	    if (result.user && _typeof(result.user) === 'object') {
	      if (Array.isArray(result.user.all_columns) && columnsControl) {
	        (function () {
	          var allColumns = window.might.stat.params.all_columns;
	          var itemsWrap = columnsControl.querySelector('.js-select-items');
	          itemsWrap.innerHTML = '';

	          result.user.all_columns.forEach(function (column) {
	            if (Array.isArray(column) && column.length === 2) {
	              var item = document.createElement('div');
	              item.className = 'select__item js-select-item';
	              item.dataset.value = column[1];
	              item.textContent = column[0];
	              itemsWrap.appendChild(item);
	              allColumns[column[1]] = column[0];
	            }
	          });
	        })();
	      }

	      if (result.user.currency && ['usd', 'eur', 'rub'].indexOf(result.user.currency.toLowerCase()) !== -1) {
	        statParams.currency = result.user.currency.toLowerCase();
	      }

	      if (result.user.timezone) {
	        statParams.timezone = result.user.timezone;
	      }

	      if (result.user.columns && columnsControl) {
	        (function () {
	          var arr = result.user.columns.split(',');
	          var columns = [];
	          columnsControl.updateValue(arr);

	          arr.forEach(function (val) {
	            columns.push(val);
	          });

	          (0, _update2.default)({ table_columns: columns });
	        })();
	      } else {
	        (0, _update2.default)({ table_columns: [] });
	      }
	    }

	    segmentBtns = stat.querySelectorAll('.js-stat-btn-segment');
	    segmentLists = stat.querySelectorAll('.js-stat-list-segment');

	    controlEvents();
	    controlsReset();
	  }

	  (0, _init2.default)();
	  (0, _updateVariables2.default)();
	  (0, _createControls2.default)();
	  (0, _table2.default)();
	  (0, _graph2.default)();
	  (0, _tableCohort2.default)();
	  (0, _tableTrends2.default)();

	  statParams = window.might.stat.params;
	  stat.addEventListener('upadatecreatecontrols', updateCreateControls);
	  stat.addEventListener('backurl', controlsReset);
	  stat.addEventListener('filterstockupdate', updateFilterStock);

	  useSettings();

	  if (downloadBtn) {
	    downloadBtn.addEventListener('click', function () {
	      stat.triggerEvent('download');
	    });
	  }
	};

	var _qs = __webpack_require__(16);

	var _qs2 = _interopRequireDefault(_qs);

	var _listEvent = __webpack_require__(57);

	var _listEvent2 = _interopRequireDefault(_listEvent);

	var _listFetchEvent = __webpack_require__(65);

	var _listFetchEvent2 = _interopRequireDefault(_listFetchEvent);

	var _init = __webpack_require__(68);

	var _init2 = _interopRequireDefault(_init);

	var _update = __webpack_require__(77);

	var _update2 = _interopRequireDefault(_update);

	var _updateVariables = __webpack_require__(78);

	var _updateVariables2 = _interopRequireDefault(_updateVariables);

	var _createControls = __webpack_require__(79);

	var _createControls2 = _interopRequireDefault(_createControls);

	var _table = __webpack_require__(105);

	var _table2 = _interopRequireDefault(_table);

	var _graph = __webpack_require__(108);

	var _graph2 = _interopRequireDefault(_graph);

	var _tableCohort = __webpack_require__(111);

	var _tableCohort2 = _interopRequireDefault(_tableCohort);

	var _tableTrends = __webpack_require__(115);

	var _tableTrends2 = _interopRequireDefault(_tableTrends);

	var _fetchApi = __webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var history = (0, _createBrowserHistory2.default)();
	  var location = history.location;
	  var defaultTimezone = '+03:00|Europe/Moscow';

	  window.might.stat.params = {
	    draw: 1,
	    length: 25,
	    page: 1,
	    total: 1,
	    search: {
	      value: '',
	      regex: false
	    },

	    currency: 'usd',
	    currency_type: 'action',
	    currency_date: false,

	    date_from: {},
	    date_to: {},
	    start_time: '00:00',
	    end_time: '23:59',
	    timezone: defaultTimezone,
	    postback_date: false,

	    is_tree: true,
	    show_graph: false,
	    graph_zoom: null,

	    segments: ['campaign_id'],
	    level: 1,
	    filter: [],
	    filters_stock: [],
	    current: null,
	    value: null,
	    fields_graph: [],
	    more_page: 1,

	    sort: null,
	    columns: {},
	    all_columns: {},

	    cohort_size: 'month',
	    cohort_metric1: 'clicks',
	    cohort_metric2: 'leads'
	  };

	  var stat = document.querySelector('.js-stat');
	  var params = window.might.stat.params;
	  var currentDate = might.current_datetime;

	  var regTime = new RegExp(/^([0,1][0-9]|2[0-3]):[0-5][0-9]$/);
	  var regDate = new RegExp(/^\d{4}-(0[1-9]|1[0-2])-([0-2][0-9]|3[0-1])$/);

	  var dateToString = function dateToString(y, m, d) {
	    var date = new Date(y, m, d);
	    return (0, _dateformat2.default)(date, 'yyyy-mm-dd');
	  };

	  var updateLinkParams = function updateLinkParams(queryParams) {
	    var updateLinks = document.getElementsByClassName('update_link');
	    for (var i = 0; i < updateLinks.length; i++) {
	      var tmpLocation = document.createElement('a');
	      tmpLocation.href = updateLinks[i].getAttribute('href');
	      updateLinks[i].setAttribute('href', tmpLocation.pathname + '?' + queryParams);
	    }
	  };

	  var updateTableParams = function updateTableParams(loc) {
	    var query = _qs2.default.parse(loc.search.slice(1));
	    updateLinkParams(_qs2.default.stringify(query));
	    params.length = query.l || 25;
	    params.page = query.p || 1;
	    params.order = query.ord || false;
	    params.cur = query.c || 'usd';

	    if (query.df && regDate.test(query.df)) {
	      var from = query.df.split('-');
	      params.date_from.year = parseInt(from[0], 10) || currentDate.getFullYear();
	      params.date_from.month = parseInt(from[1], 10) - 1 || currentDate.getMonth();
	      params.date_from.date = parseInt(from[2], 10) || currentDate.getDate();
	    } else {
	      params.date_from.year = currentDate.getFullYear();
	      params.date_from.month = currentDate.getMonth();
	      params.date_from.date = currentDate.getDate();
	    }

	    if (query.dt && regDate.test(query.dt)) {
	      var to = query.dt.split('-');
	      params.date_to.year = parseInt(to[0], 10) || currentDate.getFullYear();
	      params.date_to.month = parseInt(to[1], 10) - 1 || currentDate.getMonth();
	      params.date_to.date = parseInt(to[2], 10) || currentDate.getDate();
	    } else {
	      params.date_to.year = currentDate.getFullYear();
	      params.date_to.month = currentDate.getMonth();
	      params.date_to.date = currentDate.getDate();
	    }

	    params.start_time = query.st || '00:00';
	    params.end_time = query.et || '23:59';
	    params.timezone = query.tz || defaultTimezone;
	    params.postback_date = !!parseInt(query.pd, 10);
	    params.segments = query.seg || ['campaign_id'];
	    params.is_tree = query.hasOwnProperty('it') ? !!parseInt(query.it, 10) : true;
	    if (!stat.classList.contains('is-cohort')) {
	      params.show_graph = !!parseInt(query.sg, 10);
	    }
	    if (!stat.classList.contains('is-trends')) {
	      params.show_graph = !!parseInt(query.sg, 10);
	    }
	    params.filters_stock = query.fs || [];

	    var lines = void 0;
	    params.fields_graph = [];
	    (query.fg || 'visits').split(',').forEach(function (line) {
	      params.fields_graph.push({
	        field: line,
	        visible: true
	      });
	    });

	    if (query.scol && query.sdir) {
	      params.sort = {
	        column: query.scol,
	        direction: query.sdir
	      };
	    } else {
	      params.sort = null;
	    }

	    params.cohort_size = query.cs || 'hour';
	    params.cohort_metric1 = query.field1 || 'clicks';
	    params.cohort_metric2 = query.field2 || 'leads';
	  };

	  var pushHistroy = function pushHistroy() {
	    var query = {};

	    if (params.length !== 25) {
	      query.l = params.length;
	    }

	    if (params.page !== 1) {
	      query.p = params.page;
	    }

	    if (!(Array.isArray(params.segments) && params.segments.length === 1 && params.segments[0] === 'campaign_id')) {
	      query.seg = params.segments;
	    }

	    if (params.order) {
	      query.ord = params.order;
	    }

	    if (params.currency !== 'usd') {
	      query.cur = params.currency;
	    }

	    query.df = dateToString(params.date_from.year, params.date_from.month, params.date_from.date);
	    query.dt = dateToString(params.date_to.year, params.date_to.month, params.date_to.date);

	    if (params.start_time !== '00:00') {
	      query.st = params.start_time;
	    }

	    if (params.end_time !== '23:59') {
	      query.et = params.end_time;
	    }

	    query.tz = params.timezone;

	    if (params.postback_date) {
	      query.pd = 1;
	    }

	    if (!params.is_tree) {
	      query.it = 0;
	    }

	    if (!stat.classList.contains('is-cohort') && params.show_graph) {
	      query.sg = 1;
	    }

	    if (!stat.classList.contains('is-trends') && params.show_graph) {
	      query.sg = 1;
	    }

	    if (params.filters_stock.length > 0) {
	      query.fs = params.filters_stock;
	    }

	    var fg = [];
	    params.fields_graph.forEach(function (line) {
	      if (line.visible) {
	        fg.push(line.field);
	      }
	    });

	    if (fg.length && fg.join(',') !== 'visits') {
	      query.fg = fg.join(',');
	    }

	    if (params.sort) {
	      query.scol = params.sort.column;
	      query.sdir = params.sort.direction;
	    }

	    if (params.cohort_size !== 'hour') {
	      query.cs = params.cohort_size;
	    }

	    if (params.cohort_metric1 !== 'clicks') {
	      query.field1 = params.cohort_metric1;
	    }

	    if (params.cohort_metric2 !== 'leads') {
	      query.field2 = params.cohort_metric2;
	    }

	    var queryParams = _qs2.default.stringify(query);
	    updateLinkParams(queryParams);

	    history.push({
	      pathname: location.pathname,
	      search: queryParams
	    });
	  };

	  history.listen(function (loc, action) {
	    if (action === 'POP') {
	      updateTableParams(loc);
	      (0, _update2.default)({ history_pop: true });
	    }
	  });

	  stat.addEventListener('newurl', pushHistroy);
	  updateTableParams(location);
	};

	var _qs = __webpack_require__(16);

	var _qs2 = _interopRequireDefault(_qs);

	var _dateformat = __webpack_require__(62);

	var _dateformat2 = _interopRequireDefault(_dateformat);

	var _createBrowserHistory = __webpack_require__(69);

	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

	var _update = __webpack_require__(77);

	var _update2 = _interopRequireDefault(_update);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = function (obj) {
	  var params = window.might.stat.params;

	  var isUpdate = false;
	  var isUpdateRows = false;
	  var isUpdateGraph = false;
	  var isUpdateNav = false;
	  var isUpdateStock = false;

	  var isCreateControl = false;
	  var isRefresh = false;
	  var isPop = false;

	  for (var param in obj) {
	    if (obj.hasOwnProperty(param)) {
	      switch (param) {
	        case 'postback_date':
	        case 'currency':
	          if (params.postback_date !== !!obj.postback_date) {
	            params.postback_date = !!obj.postback_date;
	            isUpdate = true;
	          }
	          if (params.currency !== obj.currency && ['USD', 'EUR', 'RUB'].indexOf(obj.currency) !== -1) {
	            params.currency = obj.currency;
	            isUpdate = true;
	          }
	          break;

	        case 'segment':
	          if (obj.segment.hasOwnProperty('level')) {
	            if (obj.segment.hasOwnProperty('value')) {
	              if (params.segments[obj.segment.level] !== obj.segment.value) {
	                params.segments[obj.segment.level] = obj.segment.value;
	                isUpdate = true;
	                if (obj.segment.level === 0) {
	                  isCreateControl = true;
	                }
	              }
	            } else {
	              if (params.segments.splice(obj.segment.level, 1).length === 1) {
	                isUpdate = true;
	              }
	            }
	          }
	          break;

	        case 'date_from':
	          var from = params.date_from;
	          var newFrom = obj.date_from;
	          if (from.year !== newFrom.year || from.month !== newFrom.month || from.date !== newFrom.date) {
	            params.date_from.year = obj.date_from.year;
	            params.date_from.month = obj.date_from.month;
	            params.date_from.date = obj.date_from.date;
	            isUpdate = true;
	          }
	          break;

	        case 'date_to':
	          var to = params.date_to;
	          var newTo = obj.date_to;
	          if (to.year !== newTo.year || to.month !== newTo.month || to.date !== newTo.date) {
	            params.date_to.year = obj.date_to.year;
	            params.date_to.month = obj.date_to.month;
	            params.date_to.date = obj.date_to.date;
	            isUpdate = true;
	          }
	          break;

	        case 'start_time':
	          if (regTime.test(obj.start_time) && params.start_time !== obj.start_time) {
	            params.start_time = obj.start_time;
	            isUpdate = true;
	          }
	          break;

	        case 'end_time':
	          if (regTime.test(obj.end_time) && params.end_time !== obj.end_time) {
	            params.end_time = obj.end_time;
	            isUpdate = true;
	          }
	          break;

	        case 'timezone':
	          if (params.timezone !== obj.timezone) {
	            params.timezone = obj.timezone;
	            isUpdate = true;
	          }
	          break;

	        case 'show_graph':
	          if (params.show_graph !== !!obj.show_graph) {
	            params.show_graph = !!obj.show_graph;
	            isUpdateGraph = true;

	            if (!params.show_graph) {
	              params.graph_zoom = null;
	            }
	          }
	          break;

	        case 'is_tree':
	          if (params.is_tree !== !!obj.is_tree) {
	            params.is_tree = !!obj.is_tree;
	            isUpdate = true;
	          }
	          break;

	        case 'page':
	          if (params.page !== obj.page) {
	            params.page = obj.page;
	            params.start = (params.page - 1) * params.length;
	            isUpdateNav = true;
	            isUpdate = true;
	          }
	          break;

	        case 'length':
	          if (params.length !== obj.length) {
	            params.length = obj.length;
	            params.start = (params.page - 1) * params.length;
	            isUpdateNav = true;
	            isUpdate = true;
	          }
	          break;

	        case 'filter_stock':
	          if (obj.filter_stock && _typeof(obj.filter_stock) === 'object') {
	            (function () {
	              var f = obj.filter_stock;
	              if (f.hasOwnProperty('field')) {
	                var pos = -1;
	                params.filters_stock.forEach(function (filter, i) {
	                  if (filter.field === f.field) {
	                    pos = i;
	                  }
	                });
	                if (f.hasOwnProperty('title') && f.hasOwnProperty('value')) {
	                  if (pos !== -1) {
	                    if (!f.value || !f.title) {
	                      params.filters_stock.splice(pos, 1);
	                    } else {
	                      params.filters_stock[pos].value = f.value;
	                      params.filters_stock[pos].title = f.title;
	                    }
	                    isUpdateStock = true;
	                    isUpdate = true;
	                  } else if (f.value && f.title) {
	                    params.filters_stock.push(f);
	                    isUpdateStock = true;
	                    isUpdate = true;
	                  }
	                } else {
	                  if (pos === -1) {
	                    params.filters_stock.push(f);
	                    isUpdateStock = true;
	                    isUpdate = true;
	                  } else {
	                    params.filters_stock.push(params.filters_stock.splice(pos, 1)[0]);
	                    isUpdateStock = true;
	                  }
	                }
	              }
	            })();
	          }
	          break;

	        case 'table_sort':
	          params.sort = params.sort || {};
	          if (params.sort.column === obj.table_sort) {
	            if (params.sort.direction === 'desc') {
	              params.sort = null;
	            } else if (params.sort.direction === 'asc') {
	              params.sort.direction = 'desc';
	            }
	          } else {
	            params.sort.column = obj.table_sort;
	            params.sort.direction = 'asc';
	          }
	          isUpdate = true;
	          break;

	        case 'render_child_rows':
	          if (obj.render_child_rows && _typeof(obj.render_child_rows) === 'object') {
	            var render = obj.render_child_rows;
	            if (render.hasOwnProperty('level') && _typeof(render.filter) === 'object' && render.hasOwnProperty('current')) {
	              params.level = render.level;
	              params.filter = render.filter;
	              params.current = render.current;
	              params.more_page = render.more_page || 1;
	              isUpdate = true;
	              isUpdateRows = true;
	            }
	          }
	          break;

	        case 'refresh':
	          if (obj.refresh) {
	            isUpdate = true;
	            isRefresh = true;
	          }
	          break;

	        case 'history_pop':
	          if (obj.history_pop) {
	            isUpdate = true;
	            isPop = true;
	          }
	          break;

	        case 'table_columns':
	          params.columns = [];
	          if (Array.isArray(obj.table_columns)) {
	            obj.table_columns.forEach(function (col) {
	              params.columns.push(col);
	            });
	            isUpdate = true;
	            isRefresh = true;
	          }
	          break;

	        case 'field_graph':
	          if (obj.field_graph && _typeof(obj.field_graph) === 'object') {
	            var fg = obj.field_graph;
	            if (!params.fields_graph[fg.pos]) {
	              params.fields_graph[fg.pos] = {};
	            }
	            if (params.fields_graph[fg.pos].field !== fg.field || params.fields_graph[fg.pos].visible !== fg.visible) {
	              params.fields_graph[fg.pos].field = fg.field;
	              params.fields_graph[fg.pos].visible = fg.visible;
	              isUpdateGraph = true;
	            }
	          }
	          break;

	        case 'cohort_size':
	          if (params.cohort_size !== obj.cohort_size) {
	            params.cohort_size = obj.cohort_size;
	            isUpdate = true;
	          }
	          break;

	        case 'cohort_metric1':
	          if (params.cohort_metric1 !== obj.cohort_metric1) {
	            params.cohort_metric1 = obj.cohort_metric1;
	            isUpdate = true;
	          }
	          break;

	        case 'cohort_metric2':
	          if (params.cohort_metric2 !== obj.cohort_metric2) {
	            params.cohort_metric2 = obj.cohort_metric2;
	            isUpdate = true;
	          }
	          break;

	        default:
	          break;
	      }
	    }
	  }

	  if (isCreateControl) {
	    stat.triggerEvent('upadatecreatecontrols');
	  }

	  if (isUpdate) {
	    params.draw++;

	    if (!isUpdateNav && !isUpdateRows && !isRefresh) {
	      params.page = 1;
	      params.start = 0;
	    }

	    if (!isUpdateRows) {
	      params.filter = [];
	      params.level = 1;
	      params.current = null;
	    }
	  }

	  if (isUpdateStock) {
	    stat.triggerEvent('filterstockupdate');
	    (0, _updateVariables2.default)();
	  }

	  if (isUpdate) {
	    if (!isRefresh) {
	      if (isPop) {
	        stat.triggerEvent('backurl');
	      } else {
	        stat.triggerEvent('newurl');
	      }
	    }
	    stat.triggerEvent('drawtable');
	  } else if (isUpdateGraph) {
	    stat.triggerEvent('newurl');
	    stat.triggerEvent('drawgraph');
	  }
	};

	var _updateVariables = __webpack_require__(78);

	var _updateVariables2 = _interopRequireDefault(_updateVariables);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var stat = document.querySelector('.js-stat');

	var regTime = new RegExp(/^([0,1][0-9]|2[0-3]):[0-5][0-9]$/);
	var regDate = new RegExp(/\d{4}-(0[1-9]|1[0-2])-([0-1][0-9]|3[0-1])/, 'g');

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var stat = document.querySelector('.js-stat');
	  var stock = window.might.stat.params.filters_stock;
	  var isCampaign = void 0;
	  var campaignVal = void 0;
	  var isTrafficSource = void 0;
	  var trafficSourceVal = void 0;

	  var resetVariables = function resetVariables() {
	    var segmentVariables = stat.querySelector('.js-stat-list-segment-variables');

	    if (!segmentVariables) {
	      return;
	    }

	    var segmentVariablesItems = segmentVariables.querySelector('.js-list-items');

	    segmentVariables.style.display = 'none';
	    segmentVariablesItems.innerHTML = '';

	    if (segmentVariables.value) {
	      var firstBtn = stat.querySelectorAll('.js-stat-btn-segment')[0];
	      firstBtn.triggerEvent('click');
	    }

	    var segments = stat.querySelector('.js-stat-add-segment');

	    if (segments) {
	      [].concat(_toConsumableArray(segments.parentNode.querySelectorAll('.js-list'))).forEach(function (segment) {
	        if (segment.querySelector('.js-list-value').textContent.indexOf('variable') === 0) {
	          segment.setValue();
	        } else {
	          [].concat(_toConsumableArray(segment.querySelectorAll('.js-list-item'))).forEach(function (item) {
	            if (item.textContent.indexOf('variable') === 0) {
	              item.parentNode.removeChild(item);
	            }
	          });
	        }
	      });
	    }
	  };

	  var setVariables = function setVariables(values) {
	    resetVariables();

	    var segmentVariables = stat.querySelector('.js-stat-list-segment-variables');

	    if (!segmentVariables) {
	      return;
	    }

	    var segmentVariablesItems = segmentVariables.querySelector('.js-list-items');
	    var addSegmentsList = stat.querySelector('.js-stat-add-segment');

	    if (addSegmentsList) {
	      addSegmentsList = addSegmentsList.querySelector('.js-list-items');
	    }

	    segmentVariables.style.display = '';

	    values.forEach(function (val, index) {
	      if (addSegmentsList) {
	        addSegmentsList.innerHTML += '<div class="list__item js-list-item" data-value="p' + (index + 1) + '">variable: ' + val.name + '</div>';
	      }
	      segmentVariablesItems.innerHTML += '<div class="list__item js-list-item" data-value="p' + (index + 1) + '">' + val.name + '</div>';
	    });
	  };

	  var getTrafficSource = function getTrafficSource(id) {
	    (0, _fetchApi.fetchData)('/traffic/sources/get', { id: id }).then(function (res) {
	      setVariables(res.data.traffic_sources_values);
	    }).catch(function (err) {
	      throw new Error(err);
	    });
	  };

	  var getCampaign = function getCampaign(id) {
	    (0, _fetchApi.fetchData)('/campaign/get', { id: id }).then(function (res) {
	      if (String(res.data.traffic_source_id)) {
	        getTrafficSource(res.data.traffic_source_id);
	      }
	    }).catch(function (err) {
	      throw new Error(err);
	    });
	  };

	  (stock || []).forEach(function (el) {
	    if (el.field === 'campaign_id') {
	      isCampaign = true;
	      campaignVal = el.value;
	    }

	    if (el.field === 'traffic_source') {
	      isTrafficSource = true;
	      trafficSourceVal = el.value;
	    }
	  });

	  if (isCampaign) {
	    if (__campaignVal__ !== campaignVal) {
	      __campaignVal__ = campaignVal;
	      getCampaign(campaignVal);
	    }
	  } else if (isTrafficSource) {
	    if (__trafficSourceVal__ !== trafficSourceVal) {
	      __campaignVal__ = null;
	      __trafficSourceVal__ = trafficSourceVal;
	      getTrafficSource(trafficSourceVal);
	    }
	  } else {
	    __campaignVal__ = null;
	    __trafficSourceVal__ = null;
	    resetVariables();
	  }
	};

	var _fetchApi = __webpack_require__(27);

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var __campaignVal__ = null;
	var __trafficSourceVal__ = null;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var stat = document.querySelector('.js-stat');
	  if (!stat || !document.querySelector('.js-stat-controls')) {
	    return;
	  }

	  stat.querySelector('.js-stat-campaign-list').addEventListener('click', _campaignList2.default);
	  stat.querySelector('.js-stat-campaign-add').addEventListener('click', function () {
	    var popupBody = (0, _campaignAdd2.default)();
	    popupBody.pathFunctions.createPath('Path 1', {
	      weight: 1,
	      checkbox: 'on',
	      lander: [],
	      lander_weight: [],
	      offer: [],
	      offer_weight: [],
	      offer_url: [],
	      direct_linking: false
	    });
	    var firstPath = popupBody.querySelectorAll('.js-path')[0];
	    if (firstPath) {
	      popupBody.pathFunctions.selectPath(firstPath);
	    }
	    setTimeout(function () {
	      return popupBody.querySelector('.js-form-name').focus();
	    }, 100);
	  });

	  stat.querySelector('.js-stat-lander-list').addEventListener('click', _landerList2.default);
	  stat.querySelector('.js-stat-lander-add').addEventListener('click', _landerAdd2.default);
	  stat.querySelector('.js-stat-offer-list').addEventListener('click', _offerList2.default);
	  stat.querySelector('.js-stat-offer-add').addEventListener('click', _offerAdd2.default);
	  stat.querySelector('.js-stat-traff-list').addEventListener('click', _trafficSourceList2.default);
	  stat.querySelector('.js-stat-traff-add').addEventListener('click', _trafficSourceAdd2.default);
	  stat.querySelector('.js-stat-aff-list').addEventListener('click', _affiliateNetworkList2.default);
	  stat.querySelector('.js-stat-aff-add').addEventListener('click', _affiliateNetworkAdd2.default);
	};

	var _campaignList = __webpack_require__(80);

	var _campaignList2 = _interopRequireDefault(_campaignList);

	var _campaignAdd = __webpack_require__(84);

	var _campaignAdd2 = _interopRequireDefault(_campaignAdd);

	var _landerList = __webpack_require__(101);

	var _landerList2 = _interopRequireDefault(_landerList);

	var _landerAdd = __webpack_require__(87);

	var _landerAdd2 = _interopRequireDefault(_landerAdd);

	var _offerList = __webpack_require__(102);

	var _offerList2 = _interopRequireDefault(_offerList);

	var _offerAdd = __webpack_require__(88);

	var _offerAdd2 = _interopRequireDefault(_offerAdd);

	var _trafficSourceList = __webpack_require__(103);

	var _trafficSourceList2 = _interopRequireDefault(_trafficSourceList);

	var _trafficSourceAdd = __webpack_require__(98);

	var _trafficSourceAdd2 = _interopRequireDefault(_trafficSourceAdd);

	var _affiliateNetworkList = __webpack_require__(104);

	var _affiliateNetworkList2 = _interopRequireDefault(_affiliateNetworkList);

	var _affiliateNetworkAdd = __webpack_require__(100);

	var _affiliateNetworkAdd2 = _interopRequireDefault(_affiliateNetworkAdd);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  if (document.querySelector('.js-popup')) {
	    return;
	  }

	  var popup = (0, _createPopup2.default)('Campaign list', null, true);

	  if (!popup) {
	    return;
	  }

	  var popupBody = popup.querySelector('.js-popup-body');

	  if (popupBody) {
	    popup.querySelector('.js-popup-wrap').style.width = '600px';

	    (0, _fetchApi.fetchData)('/campaign/list', {
	      field: 'id,name',
	      order: 'name'
	    }).then(function (res) {
	      var search = document.createElement('div');
	      search.className = 'popup__list-search';
	      search.innerHTML = '\n        <i class="fa fa-search"></i>\n        <input class="js-popup-list-search" type="text" placeholder="Enter to search">';
	      popupBody.appendChild(search);

	      var timeForSearch = void 0;
	      var inputSearch = search.querySelector('.js-popup-list-search');
	      var filterRows = function filterRows() {
	        if (timeForSearch) {
	          clearTimeout(timeForSearch);
	        }

	        timeForSearch = setTimeout(function () {
	          var val = inputSearch.value.trim();
	          var reg = new RegExp(val, 'i');
	          var names = popupBody.querySelectorAll('.js-popup-list-name');

	          if (val) {
	            [].concat(_toConsumableArray(names)).forEach(function (el) {
	              if (el.textContent.search(reg) === -1) {
	                el.closest('.js-popup-row').style.display = 'none';
	              } else {
	                el.closest('.js-popup-row').style.display = '';
	              }
	            });
	          } else {
	            [].concat(_toConsumableArray(names)).forEach(function (el) {
	              el.closest('.js-popup-row').style.display = '';
	            });
	          }
	        }, 200);
	      };

	      inputSearch.addEventListener('keyup', filterRows);
	      inputSearch.addEventListener('paste', filterRows);
	      inputSearch.addEventListener('change', filterRows);

	      var table = document.createElement('table');
	      table.className = 'popup__list';
	      popupBody.appendChild(table);

	      var right = window.__active_permission__;
	      res.data.forEach(function (item) {
	        var name = item.name;
	        var id = item.id;
	        var tr = document.createElement('tr');
	        tr.className = 'js-campaign-row js-popup-row';
	        tr.dataset.id = id;

	        if (right) {
	          tr.innerHTML = '\n            <td><span class="js-campaign-name js-popup-list-name">' + name + '</span></td>\n            <td><span class="js-campaign-copy">Copy</span></td>\n            ' + (right.campaigns.type.indexOf(2) !== -1 ? '<td><span class="js-campaign-edit">Edit</span></td>' : '') + '\n            ' + (right.campaigns.type.indexOf(2) !== -1 ? '<td><span class="js-campaign-update-cost">Update cost</span></td>' : '') + '\n            <td><span class="js-campaign-links">Links</span></td>\n          ';
	        } else {
	          tr.innerHTML = '\n            <td><span class="js-campaign-name js-popup-list-name">' + name + '</span></td>\n            <td><span class="js-campaign-copy">Copy</span></td>\n            <td><span class="js-campaign-edit">Edit</span></td>\n            <td><span class="js-campaign-update-cost">Update cost</span></td>\n            <td><span class="js-campaign-links">Links</span></td>\n          ';
	        }

	        table.appendChild(tr);
	        popupBody.addEventListener('click', _line2.default);
	      });
	    }).catch(function (err) {
	      popupBody.innerHTML = '<div class="popup__message">' + err + '</div>';
	      throw new Error(err);
	    });
	  }
	};

	var _qs = __webpack_require__(16);

	var _qs2 = _interopRequireDefault(_qs);

	var _createPopup = __webpack_require__(81);

	var _createPopup2 = _interopRequireDefault(_createPopup);

	var _line = __webpack_require__(82);

	var _line2 = _interopRequireDefault(_line);

	var _fetchApi = __webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 81 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (title, editing, dontPaddingBottom) {
	  var popup = document.createElement('div');
	  popup.className = 'popup js-popup';

	  popup.innerHTML = '\n    <div class="popup__veil">\n    </div>\n    <div class="popup__win">\n      <div class="popup__wrap js-popup-wrap">\n        <div class="popup__headline">\n          <div class="popup__close js-popup-close"></div>\n          <div class="popup__title">' + title + '</div>\n        </div>\n        <div class="popup__body js-popup-body"></div>\n        <div class="popup__bottom"' + (dontPaddingBottom ? ' style="padding: 0; border: 0"' : '') + '>\n          <div class="popup__bottom-error js-popup-error"></div>\n          ' + (editing ? '<div class="btn-apply js-popup-save">Save and close</div>' : '') + '\n          <div class="btn-close js-popup-close">Close</div>\n        </div>\n      </div>\n    </div>';

	  document.body.appendChild(popup);

	  var close = function close() {
	    popup.parentNode.removeChild(popup);

	    var popups = document.querySelectorAll('.js-popup');

	    if (popups.length) {
	      popups[popups.length - 1].style.display = '';
	    } else {
	      var _rect = document.body.getBoundingClientRect();

	      document.body.classList.remove('noscroll');
	      document.body.style.top = '';
	      document.body.style.left = '';

	      window.scrollTo(-_rect.left, -_rect.top);
	    }
	  };

	  popup.addEventListener('click', function (event) {
	    var closeBtn = event.target.closest('.js-popup-close');

	    if (closeBtn) {
	      close();
	    }
	  });

	  popup.close = close;

	  var rect = document.body.getBoundingClientRect();

	  document.body.classList.add('noscroll');
	  document.body.style.top = rect.top + 'px';
	  document.body.style.left = rect.left + 'px';

	  return popup;
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getPopupElements = getPopupElements;

	exports.default = function (event) {
	  var target = event.target;
	  var elements = getPopupElements();
	  for (var j in elements) {
	    if (elements[j][0]) {
	      var copyBtn = false;
	      var editBtn = false;
	      var updateCostBtn = false;
	      var linksBtn = false;
	      var elem = elements[j][0];

	      if (elements[j][2].indexOf(1) >= 0) {
	        copyBtn = target.closest('.js-' + elements[j][1] + '-copy');
	      }

	      if (elements[j][2].indexOf(2) >= 0) {
	        editBtn = target.closest('.js-' + elements[j][1] + '-edit');
	      }

	      if (elements[j][2].indexOf(3) >= 0) {
	        updateCostBtn = target.closest('.js-' + elements[j][1] + '-update-cost');
	      }

	      if (elements[j][2].indexOf(4) >= 0) {
	        linksBtn = target.closest('.js-' + elements[j][1] + '-links');
	      }

	      if (copyBtn || editBtn || linksBtn || updateCostBtn) {
	        var row = target.closest('.js-' + elements[j][1] + '-row');
	        var id = row.dataset.id;
	        if (copyBtn) {
	          if (id) {
	            switch (elem) {
	              case 'campaign_id':
	                openCampaignEdit(id);
	                break;
	              case 'lander':
	                openLanderEdit(id);
	                break;
	              case 'offer':
	                openOfferEdit(id);
	                break;
	              case 'traffic_source':
	                openTrafficEdit(id);
	                break;
	              case 'affiliate_network':
	                openAffiliateEdit(id);
	                break;
	              default:
	                break;
	            }
	          }
	        }
	        if (editBtn) {
	          if (id) {
	            switch (elements[j][0]) {
	              case 'campaign_id':
	                openCampaignEdit(id, true);
	                break;
	              case 'lander':
	                openLanderEdit(id, true);
	                break;
	              case 'offer':
	                openOfferEdit(id, true);
	                break;
	              case 'traffic_source':
	                openTrafficEdit(id, true);
	                break;
	              case 'affiliate_network':
	                openAffiliateEdit(id, true);
	                break;
	              default:
	                break;
	            }
	          }
	        }
	        if (updateCostBtn) {
	          if (id) {
	            var name = row.querySelector('.js-' + elements[j][1] + '-name').textContent;
	            switch (elements[j][0]) {
	              case 'campaign_id':
	                (0, _campaignCosts2.default)(id, name);
	                break;
	              default:
	                break;
	            }
	          }
	        }
	        if (linksBtn) {
	          if (id) {
	            var _name = row.querySelector('.js-' + elements[j][1] + '-name').textContent;
	            switch (elements[j][0]) {
	              case 'campaign_id':
	                (0, _campaignLinks2.default)(id, _name);
	                break;
	              default:
	                break;
	            }
	          }
	        }
	      }
	    }
	  }
	};

	var _campaignEdit = __webpack_require__(83);

	var _campaignEdit2 = _interopRequireDefault(_campaignEdit);

	var _campaignCosts = __webpack_require__(91);

	var _campaignCosts2 = _interopRequireDefault(_campaignCosts);

	var _campaignLinks = __webpack_require__(94);

	var _campaignLinks2 = _interopRequireDefault(_campaignLinks);

	var _landerEdit = __webpack_require__(95);

	var _landerEdit2 = _interopRequireDefault(_landerEdit);

	var _offerEdit = __webpack_require__(96);

	var _offerEdit2 = _interopRequireDefault(_offerEdit);

	var _trafficSourceEdit = __webpack_require__(97);

	var _trafficSourceEdit2 = _interopRequireDefault(_trafficSourceEdit);

	var _affiliateNetworkEdit = __webpack_require__(99);

	var _affiliateNetworkEdit2 = _interopRequireDefault(_affiliateNetworkEdit);

	var _fetchApi = __webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function openCampaignEdit(id, hasEdit) {
	  (0, _fetchApi.fetchData)('/campaign/get', { id: id }).then(function (res) {
	    if (document.querySelector('.js-popup')) {
	      document.querySelector('.js-popup').close();
	    }
	    (0, _campaignEdit2.default)(res.data, hasEdit || false);
	  }).catch(function (err) {
	    throw new Error(err);
	  });
	}

	function openLanderEdit(id, hasEdit) {
	  (0, _fetchApi.fetchData)('/lander/get', { id: id }).then(function (res) {
	    if (document.querySelector('.js-popup')) {
	      document.querySelector('.js-popup').close();
	    }
	    (0, _landerEdit2.default)(res.data, hasEdit || false);
	  }).catch(function (err) {
	    throw new Error(err);
	  });
	}

	function openOfferEdit(id, hasEdit) {
	  (0, _fetchApi.fetchData)('/offer/get', { id: id }).then(function (res) {
	    if (document.querySelector('.js-popup')) {
	      document.querySelector('.js-popup').close();
	    }
	    (0, _offerEdit2.default)(res.data, hasEdit || false);
	  }).catch(function (err) {
	    throw new Error(err);
	  });
	}

	function openTrafficEdit(id, hasEdit) {
	  (0, _fetchApi.fetchData)('/traffic/sources/get', { id: id }).then(function (res) {
	    if (document.querySelector('.js-popup')) {
	      document.querySelector('.js-popup').close();
	    }
	    (0, _trafficSourceEdit2.default)(res.data, hasEdit || false);
	  }).catch(function (err) {
	    throw new Error(err);
	  });
	}

	function openAffiliateEdit(id, hasEdit) {
	  (0, _fetchApi.fetchData)('/affiliate_network/get', { id: id }).then(function (res) {
	    if (document.querySelector('.js-popup')) {
	      document.querySelector('.js-popup').close();
	    }
	    (0, _affiliateNetworkEdit2.default)(res.data, hasEdit || false);
	  }).catch(function (err) {
	    throw new Error(err);
	  });
	}

	function getPopupElements() {
	  return [['campaign_id', 'campaign', [1, 2, 3, 4]], ['lander', 'lander', [1, 2], 'openLanderEdit'], ['offer', 'offer', [1, 2]], ['traffic_source', 'traffic_source', [1, 2]], ['affiliate_network', 'affiliate_network', [1, 2]]];
	}

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (data, hasEdit) {
	  var popupBody = (0, _campaignAdd2.default)(true);

	  if (hasEdit) {
	    popupBody.currentCampaignId = data.id;
	  }

	  var formName = popupBody.querySelector('.js-form-name');
	  var formDomain = popupBody.querySelector('.js-form-domain');
	  var formUrl = popupBody.querySelector('.js-form-url');
	  var formTrafficSource = popupBody.querySelector('.js-form-traffic-source');
	  var formCostDoNotTrack = popupBody.querySelector('.js-form-cost-donottrack');
	  var formCostCPC = popupBody.querySelector('.js-form-cost-cpc');
	  var formCostCPA = popupBody.querySelector('.js-form-cost-cpa');
	  var formCostValue = popupBody.querySelector('.js-form-cost-value');
	  var formCostEur = popupBody.querySelector('.js-form-cost-eur');
	  var formCostRub = popupBody.querySelector('.js-form-cost-rub');
	  var formCostUsd = popupBody.querySelector('.js-form-cost-usd');
	  var formPostbackUrl = popupBody.querySelector('.js-form-postback-url');
	  var formReirectType = popupBody.querySelector('.js-form-directtype');
	  var formBetaDistributionOn = popupBody.querySelector('.js-form-beta-distribution-on');
	  var formBetaDistributionOff = popupBody.querySelector('.js-form-beta-distribution-off');
	  var formCostLabel = popupBody.querySelector('.js-form-cost-label');

	  formName.value = data.name || '';

	  if (!hasEdit) {
	    if (!/ \(copy\)$/.test(data.name)) {
	      formName.value += ' (copy)';
	    }
	  }

	  if (String(data.domain)) {
	    if (formDomain.setValue) {
	      formDomain.setValue(data.domain);
	    } else {
	      formDomain.value = data.domain;
	    }
	  }

	  if (hasEdit) {
	    formUrl.value = data.link || '';
	  }

	  if (String(data.traffic_source_id)) {
	    if (formTrafficSource.setValue) {
	      formTrafficSource.setValue(data.traffic_source_id);
	    } else {
	      formTrafficSource.value = data.traffic_source_id;
	    }
	  }

	  formCostValue.value = data.cost_click || '';

	  formCostEur.classList.remove('is-select');
	  formCostRub.classList.remove('is-select');
	  formCostUsd.classList.remove('is-select');

	  switch (data.currency) {
	    case 'EUR':
	      formCostEur.classList.add('is-select');
	      break;
	    case 'RUB':
	      formCostRub.classList.add('is-select');
	      break;
	    case 'USD':
	    default:
	      formCostUsd.classList.add('is-select');
	      break;
	  }

	  switch (data.cost_mode) {
	    case 'cpa':
	      formCostCPA.classList.add('is-select');
	      formCostDoNotTrack.classList.remove('is-select');
	      formCostCPC.classList.remove('is-select');
	      formCostLabel.textContent = 'CPA:';
	      break;
	    case 'not_track':
	      formCostDoNotTrack.classList.add('is-select');
	      formCostCPA.classList.remove('is-select');
	      formCostCPC.classList.remove('is-select');
	      formCostLabel.textContent = 'Cost click:';
	      break;
	    case 'cpc':
	    default:
	      formCostCPC.classList.add('is-select');
	      formCostDoNotTrack.classList.remove('is-select');
	      formCostCPA.classList.remove('is-select');
	      formCostLabel.textContent = 'Cost click:';
	      break;
	  }

	  switch (data.beta_distribution) {
	    case '1':
	      formBetaDistributionOn.classList.add('is-select');
	      formBetaDistributionOff.classList.remove('is-select');
	      break;
	    case '0':
	      formBetaDistributionOff.classList.add('is-select');
	      formBetaDistributionOn.classList.remove('is-select');
	      break;
	    default:
	      formBetaDistributionOff.classList.add('is-select');
	      formBetaDistributionOn.classList.remove('is-select');
	      break;
	  }

	  if (Array.isArray(data.double_postback)) {
	    formPostbackUrl.value = data.double_postback[0] || '';

	    for (var i = 0; i < data.double_postback.length - 1; i++) {
	      var addBtns = popupBody.querySelectorAll('.js-form-postback-url-add');
	      addBtns[addBtns.length - 1].triggerEvent('click');

	      var inputs = popupBody.querySelector('.js-form-postback-url');
	      inputs[inputs.length - 1].value = data.double_postback[i + 1] || '';
	    }
	  } else if (typeof data.double_postback === 'string') {
	    formPostbackUrl.value = data.double_postback || '';
	  }

	  if (String(data.redirect_mode)) {
	    if (formReirectType.setValue) {
	      formReirectType.setValue(data.redirect_mode);
	    } else {
	      formReirectType.value = data.redirect_mode;
	    }
	  }

	  var defaultPathes = JSON.parse(data.default_path_obj);

	  defaultPathes.forEach(function (path) {
	    popupBody.pathFunctions.createPath(path.name, path);
	  });

	  if (typeof data.rules_obj === 'string') {
	    var rules = JSON.parse(data.rules_obj);

	    rules.forEach(function (rule) {
	      popupBody.ruleFunctions.createRule(rule.name, rule);

	      if (Array.isArray(rule.path)) {
	        rule.path.forEach(function (path) {
	          popupBody.pathFunctions.createPath(path.name, path);
	        });
	      }
	    });
	  }

	  var startTime = new Date();

	  var valInterval = setInterval(function () {
	    if (new Date() - startTime >= 3000) {
	      clearInterval(valInterval);
	    }

	    if (popupBody.querySelector('.js-path-lander-add').querySelector('.js-list').setValue && popupBody.querySelector('.js-path-offer-add').querySelector('.js-list').setValue) {
	      clearInterval(valInterval);
	      var firstPath = popupBody.querySelectorAll('.js-path')[0];

	      if (firstPath) {
	        popupBody.pathFunctions.selectPath(firstPath);
	      }
	    }
	  }, 100);
	};

	var _qs = __webpack_require__(16);

	var _qs2 = _interopRequireDefault(_qs);

	var _campaignAdd = __webpack_require__(84);

	var _campaignAdd2 = _interopRequireDefault(_campaignAdd);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = function () {
	  var edit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	  if (document.querySelector('.js-popup')) {
	    return null;
	  }
	  var popup = false;
	  if (edit === true) {
	    popup = (0, _createPopup2.default)('Edit campaign', true);
	  } else {
	    popup = (0, _createPopup2.default)('Creating new campaign', true);
	  }

	  if (!popup) {
	    return null;
	  }

	  var popupBody = popup.querySelector('.js-popup-body');

	  if (!popupBody) {
	    return null;
	  }

	  popup.querySelector('.js-popup-wrap').style.width = '1000px';

	  popupBody.innerHTML = '\n    <div class="popup__line">\n      <div class="popup__line-label">\n        <span>Name:</span>\n        <div class="info"></div>\n      </div>\n      <div class="popup__line-body">\n        <div class="input">\n          <input class="js-form-name" type="text" placeholder="Write a name for campaign">\n          <span><span>\n        </div>\n      </div>\n    </div>\n\n    <div class="popup__line">\n      <div class="popup__line-label">\n        <span>Domain:</span>\n        <div class="info"></div>\n      </div>\n      <div class="popup__line-body">\n        <div class="list js-list js-form-domain" style="display: block; margin: 0 0 10px;" data-placeholder="Select domain" data-setstyle="color:#b7b9bb;font-weight: 100;">\n          <div class="list__wrap" style="display: block;">\n            <div class="list__value js-list-value"></div>\n            <div class="list__dropdown" style="right: 0;">\n              <div class="list__items js-list-items"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class="popup__line">\n      <div class="popup__line-label">\n        <span>Traffic Source:</span>\n        <div class="info"></div>\n      </div>\n      <div class="popup__line-body">\n        <div class="list js-list js-form-traffic-source" style="display: block; margin: 0 0 10px;" data-placeholder="Select traffic source" data-setstyle="color:#b7b9bb;font-weight: 100;">\n          <div class="list__wrap" style="display: block;">\n            <div class="list__value js-list-value"></div>\n            <div class="list__dropdown" style="right: 0;">\n              <div class="list__items js-list-items"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class="popup__line">\n      <div class="popup__line-label">\n        <span>Payout:</span>\n        <div class="info"></div>\n      </div>\n      <div class="popup__line-body">\n        <div class="radiobutton js-form-cost-donottrack">Do not track</div>\n        <div class="radiobutton js-form-cost-cpc is-select">CPC</div>\n        <div class="radiobutton js-form-cost-cpa" style="margin-right: 80px;">CPA</div>\n        <div class="js-form-cost" style="display: inline-block;">\n          <div class="popup__line-lbl"><span class="js-form-cost-label">Cost click:</span><div class="info"></div></div>\n          <div class="input" style="display: inline-block; width: 90px; margin-left: 10px; margin-right: 10px;">\n            <input class="js-form-cost-value" type="text" placeholder="0">\n            <span><span>\n          </div>\n          <div class="popup__currency js-form-cost-eur">\n            <i class="fa fa-euro"></i>\n          </div>\n          <div class="popup__currency js-form-cost-rub">\n            <i class="fa fa-ruble"></i>\n          </div>\n          <div class="popup__currency js-form-cost-usd is-select">\n            <i class="fa fa-dollar"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class="popup__line">\n      <div class="popup__line-label">\n        <span>Postback URL:</span>\n        <div class="info"></div>\n      </div>\n      <div class="popup__line-body">\n        <div class="js-form-input-parent">\n          <div class="input is-with-plus">\n            <input class="js-form-postback-url" type="text" placeholder="Postback URL">\n            <div class="input__plus js-form-postback-url-add"></div>\n            <span><span>\n          </div>\n          <div class="tags js-form-postback-tags" style="display: none;"></div>\n        </div>\n      </div>\n    </div>\n\n    <div class="popup__line">\n      <div class="popup__line-label">\n        <span>Redirect mode:</span>\n        <div class="info"></div>\n      </div>\n      <div class="popup__line-body">\n        <div class="list js-list js-form-directtype" style="display: block; margin: 0 0 10px;" data-placeholder="Select redirect mode" data-setstyle="color:#b7b9bb;font-weight: 100;">\n          <div class="list__wrap" style="display: block;">\n            <div class="list__value js-list-value"></div>\n            <div class="list__dropdown" style="right: 0;">\n              <div class="list__items js-list-items">\n                <div class="list__item js-list-item" data-value="301">301</div>\n                <div class="list__item js-list-item" data-value="302">302</div>\n                <div class="list__item js-list-item" data-value="js">js</div>\n                <div class="list__item js-list-item" data-value="double_js">double_js</div>\n                <div class="list__item js-list-item" data-value="meta_refresh">meta_refresh</div>\n                <div class="list__item js-list-item" data-value="double_meta_refresh">double_meta_refresh</div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class="popup__line">\n      <div class="popup__line-label">\n        <span>Auto optimization :</span>\n        <div class="info"></div>\n      </div>\n      <div class="popup__line-body">\n\t\t    <div class="radiobutton js-form-beta-distribution-on">On</div>\n\t      <div class="radiobutton js-form-beta-distribution-off is-select">Off</div>\n      </div>\n    </div>\n\n    <div class="cc js-create-campaign"></div>\n\n    <div class="cc">\n      <div class="popup__line">\n        <div class="popup__line-label">\n          <span>Campaign URL:</span>\n          <div class="info"></div>\n        </div>\n        <div class="popup__line-body">\n          <div class="input">\n            <input class="js-form-url" type="text" readonly="true">\n          </div>\n        </div>\n        <div class="popup__line-btn">\n          <div class="btn-copy js-form-url-copy">Clipboard</div>\n        </div>\n      </div>\n    </div>';

	  var formName = popupBody.querySelector('.js-form-name');
	  var formDomain = popupBody.querySelector('.js-form-domain');
	  var formUrl = popupBody.querySelector('.js-form-url');
	  var formUrlCopy = popupBody.querySelector('.js-form-url-copy');
	  var formTrafficSource = popupBody.querySelector('.js-form-traffic-source');
	  var formCostDoNotTrack = popupBody.querySelector('.js-form-cost-donottrack');
	  var formCostCPC = popupBody.querySelector('.js-form-cost-cpc');
	  var formCostCPA = popupBody.querySelector('.js-form-cost-cpa');
	  var formCost = popupBody.querySelector('.js-form-cost');
	  var formCostLabel = popupBody.querySelector('.js-form-cost-label');
	  var formCostValue = popupBody.querySelector('.js-form-cost-value');
	  var formCostEur = popupBody.querySelector('.js-form-cost-eur');
	  var formCostRub = popupBody.querySelector('.js-form-cost-rub');
	  var formCostUsd = popupBody.querySelector('.js-form-cost-usd');
	  var formPostbackUrl = popupBody.querySelector('.js-form-postback-url');
	  var formPostbackUrlTags = popupBody.querySelector('.js-form-postback-tags');
	  var formPostbackUrlAdd = popupBody.querySelector('.js-form-postback-url-add');
	  var formReirectType = popupBody.querySelector('.js-form-directtype');
	  var createCampaign = popupBody.querySelector('.js-create-campaign');
	  var formBetaDistributionOn = popupBody.querySelector('.js-form-beta-distribution-on');
	  var formBetaDistributionOff = popupBody.querySelector('.js-form-beta-distribution-off');

	  formUrlCopy.addEventListener('click', function () {
	    if (formUrl.value) {
	      formUrl.select();

	      try {
	        var successful = document.execCommand('copy');

	        if (successful) {
	          formUrl.classList.add('is-copy');

	          setTimeout(function () {
	            return formUrl.classList.remove('is-copy');
	          }, 500);
	        }
	      } catch (err) {
	        throw new Error(err);
	      }

	      formUrl.blur();
	    }
	  });

	  (function () {
	    (0, _fetchApi.fetchData)('/sites/list', {
	      field: 'id,name',
	      order: 'name'
	    }).then(function (res) {
	      var items = formDomain.querySelector('.js-list-items');
	      var obj = res.data || {};

	      for (var i in obj) {
	        if (obj.hasOwnProperty(i)) {
	          var item = obj[i];
	          items.innerHTML += '<div class="list__item js-list-item" data-value="' + item.id + '">' + item.name + '</div>';
	        }
	      }

	      (0, _listEvent2.default)(formDomain);
	    }).catch(function (err) {
	      throw new Error(err);
	    });
	  })();

	  (function () {
	    (0, _fetchApi.fetchData)('/traffic/sources/list', {
	      field: 'id,name',
	      order: 'name'
	    }).then(function (res) {
	      var items = formTrafficSource.querySelector('.js-list-items');

	      (res.data || []).forEach(function (item) {
	        items.innerHTML += '<div class="list__item js-list-item" data-value="' + item.id + '">' + item.name + '</div>';
	      });

	      (0, _listEvent2.default)(formTrafficSource);
	    }).catch(function (err) {
	      throw new Error(err);
	    });
	  })();

	  formBetaDistributionOn.addEventListener('click', function () {
	    formBetaDistributionOn.classList.add('is-select');
	    formBetaDistributionOff.classList.remove('is-select');
	  });

	  formBetaDistributionOff.addEventListener('click', function () {
	    formBetaDistributionOff.classList.add('is-select');
	    formBetaDistributionOn.classList.remove('is-select');
	  });

	  formCostDoNotTrack.addEventListener('click', function () {
	    formCostDoNotTrack.classList.add('is-select');
	    formCostCPC.classList.remove('is-select');
	    formCostCPA.classList.remove('is-select');

	    formCost.style.display = 'none';
	    formCostValue.value = '';
	  });

	  formCostCPC.addEventListener('click', function () {
	    formCostDoNotTrack.classList.remove('is-select');
	    formCostCPC.classList.add('is-select');
	    formCostCPA.classList.remove('is-select');
	    formCostLabel.textContent = 'Cost click:';

	    formCost.style.display = 'inline-block';
	  });

	  formCostCPA.addEventListener('click', function () {
	    formCostDoNotTrack.classList.remove('is-select');
	    formCostCPC.classList.remove('is-select');
	    formCostCPA.classList.add('is-select');
	    formCostLabel.textContent = 'CPA:';

	    formCost.style.display = 'inline-block';
	  });

	  formCostEur.addEventListener('click', function () {
	    formCostEur.classList.add('is-select');
	    formCostRub.classList.remove('is-select');
	    formCostUsd.classList.remove('is-select');
	  });

	  formCostRub.addEventListener('click', function () {
	    formCostEur.classList.remove('is-select');
	    formCostRub.classList.add('is-select');
	    formCostUsd.classList.remove('is-select');
	  });

	  formCostUsd.addEventListener('click', function () {
	    formCostEur.classList.remove('is-select');
	    formCostRub.classList.remove('is-select');
	    formCostUsd.classList.add('is-select');
	  });

	  formCostValue.addEventListener('paste', function (event) {
	    if (/^\d*.?\d+$/.test(formCostValue.value.trim())) {
	      formCostValue.value = '';
	    }
	  });

	  formCostValue.addEventListener('keydown', function (event) {
	    var code = event.keyCode;
	    var char = String.fromCharCode(code);
	    var key = '¾.0123456789'.indexOf(char);
	    var value = parseInt(event.target.value, 10);

	    switch (code) {
	      case 9:
	      case 13:
	      case 27:
	        event.target.blur();
	        break;
	      case 8:
	      case 46:
	      case 37:
	      case 39:
	      case 190:
	        break;
	      default:
	        if (key === -1) {
	          event.preventDefault();
	        }
	    }
	  });

	  '{postback_type},{postback_value},{campaign_id},{trafficsource_id},{lander_id},{device_brand},{device_model},{device_type},{browser},{browser_version},{os},{os_version},{country},{isp},{useragent},{ip},{click_id},{visit_id},{browser_language},{referrer_domain}'.split(',').forEach(function (tag) {
	    var span = document.createElement('span');
	    span.className = 'js-form-tag';
	    span.textContent = tag;
	    formPostbackUrlTags.appendChild(span);
	  });

	  var _removePostbackUrl = void 0;
	  var _dublicatePostbackUrl = void 0;
	  var initTags = void 0;

	  _removePostbackUrl = function removePostbackUrl(event) {
	    var el = event.target;
	    var parent = el.closest('.js-form-input-parent');
	    var allParent = parent.parentNode.querySelectorAll('.js-form-input-parent');

	    allParent[allParent.length - 1].querySelector('.input').classList.add('is-with-plus');
	    el.removeEventListener('click', _removePostbackUrl);
	    parent.parentNode.removeChild(parent);

	    event.stopPropagation();
	  };

	  _dublicatePostbackUrl = function dublicatePostbackUrl(event) {
	    var el = event.target;
	    var parent = el.closest('.js-form-input-parent');

	    if (parent.parentNode.querySelectorAll('.js-form-input-parent').length < 3) {
	      var clone = parent.cloneNode(true);

	      parent.parentNode.appendChild(clone);
	      el.parentNode.classList.add('is-with-clear');
	      el.removeEventListener('click', _dublicatePostbackUrl);
	      el.addEventListener('click', _removePostbackUrl);

	      initTags(clone.querySelector('.js-form-postback-url'));
	    }
	  };

	  initTags = function initTags(el) {
	    var parent = el.closest('.js-form-input-parent');
	    var tags = parent.querySelector('.js-form-postback-tags');
	    var tag = tags.querySelectorAll('.js-form-tag');

	    el.value = '';
	    [].concat(_toConsumableArray(tag)).forEach(function (span) {
	      return span.classList.remove('is-select');
	    });

	    el.addEventListener('focus', function () {
	      tags.style.display = '';
	    });

	    el.addEventListener('blur', function () {
	      tags.style.display = 'none';
	    });

	    var changeFormUrl = function changeFormUrl() {
	      var val = el.value;

	      [].concat(_toConsumableArray(tag)).forEach(function (span) {
	        if (val.indexOf(span.textContent.trim()) !== -1) {
	          span.classList.add('is-select');
	        } else {
	          span.classList.remove('is-select');
	        }
	      });
	    };

	    el.addEventListener('change', changeFormUrl);
	    el.addEventListener('keyup', changeFormUrl);
	    el.addEventListener('paste', changeFormUrl);
	    el.addEventListener('cut', changeFormUrl);

	    tags.addEventListener('mousedown', function (event) {
	      var closest = event.target.closest('.js-form-tag');

	      if (closest) {
	        var val = closest.textContent;
	        if (!closest.classList.contains('is-select')) {
	          el.value += val;
	          closest.classList.add('is-select');
	        } else {
	          var reg = new RegExp(val, 'g');
	          el.value = el.value.replace(reg, '');
	          closest.classList.remove('is-select');
	        }
	      }

	      el.focus();
	      event.preventDefault();
	      event.stopPropagation();
	    });

	    parent.querySelector('.js-form-postback-url-add').addEventListener('click', _dublicatePostbackUrl);

	    var allParent = parent.parentNode.querySelectorAll('.js-form-input-parent');

	    if (allParent.length >= 3) {
	      allParent[allParent.length - 1].querySelector('.input').classList.remove('is-with-plus');
	    }
	  };

	  initTags(formPostbackUrl);
	  (0, _listEvent2.default)(formReirectType);
	  (0, _campaignAddChilds2.default)(createCampaign, popupBody);

	  formReirectType.addEventListener('change', function () {
	    popupBody.querySelector('.js-path-redirect-mode').value = formReirectType.value;
	  });

	  var saveBtn = document.createElement('div');
	  saveBtn.className = 'btn-apply js-popup-only-save';
	  saveBtn.textContent = 'Save';
	  popup.querySelector('.js-popup-save')._insertBefore(saveBtn);

	  saveBtn.addEventListener('click', function () {
	    return saveCampaign();
	  });
	  popup.querySelector('.js-popup-save').addEventListener('click', function () {
	    return saveCampaign(true);
	  });

	  function saveCampaign(isClose) {
	    popup.querySelector('.js-popup-error').textContent = '';

	    var formPostbackUrlAll = document.querySelectorAll('.js-form-postback-url');

	    var name = formName.value.trim();

	    var focusFormName = function focusFormName() {
	      var parentFormName = formName.parentNode;
	      parentFormName.classList.remove('is-error');
	      parentFormName.querySelector('span').textContent = '';
	      formName.removeEventListener('focus', focusFormName);
	    };

	    if (!name) {
	      var parentFormName = formName.parentNode;
	      parentFormName.classList.add('is-error');
	      parentFormName.querySelector('span').textContent = 'The field can not be empty';
	      formName.addEventListener('focus', focusFormName);
	      return;
	    }

	    var domain = formDomain.value;
	    var trafficSource = formTrafficSource.value;
	    var costMode = 'cpc';

	    if (formCostCPA.classList.contains('is-select')) {
	      costMode = 'cpa';
	    } else if (formCostValue.classList.contains('is-select')) {
	      costMode = 'not_track';
	    }

	    var costValue = formCostValue.value;
	    var currency = 'USD';

	    if (formCostEur.classList.contains('is-select')) {
	      currency = 'EUR';
	    } else if (formCostRub.classList.contains('is-select')) {
	      currency = 'RUB';
	    }

	    var betaDistribution = 0;

	    if (formBetaDistributionOn.classList.contains('is-select')) {
	      betaDistribution = '1';
	    }

	    var doublePostback = void 0;

	    if (formPostbackUrlAll.length > 1) {
	      doublePostback = [];
	      [].concat(_toConsumableArray(formPostbackUrlAll)).forEach(function (el) {
	        doublePostback.push(el.value);
	      });
	    } else {
	      doublePostback = formPostbackUrlAll[0].value;
	    }

	    var redirectType = formReirectType.value;

	    var defaultPath = [];

	    [].concat(_toConsumableArray(createCampaign.querySelector('.js-pathes-default').querySelectorAll('.js-path'))).forEach(function (el) {
	      if (!el.classList.contains('is-deleted')) {
	        (function () {
	          var path = {};
	          var val = el.value;

	          path.name = val.name || '';
	          path.checkbox = val.checkbox || 'on';
	          path.direct_linking_checkbox = Number(!!val.direct_linking);
	          path.weight = val.weight || '';
	          path.lander = [];
	          path.lander_weight = [];
	          path.offer = [];
	          path.offer_weight = [];
	          path.offer_use_url = [];

	          if (!path.direct_linking_checkbox) {
	            val.lander.forEach(function (l, index) {
	              path.lander[index] = l;
	              path.lander_weight[index] = val.lander_weight[index];
	            });
	          }

	          val.offer.forEach(function (l, index) {
	            path.offer[index] = l;
	            path.offer_weight[index] = val.offer_weight[index];
	            path.offer_use_url[index] = val.offer_url[index] || '';
	          });

	          if (val.hash) {
	            path.hash = val.hash;
	          }

	          defaultPath.push(path);
	        })();
	      }
	    });

	    var rules = [];

	    [].concat(_toConsumableArray(createCampaign.querySelectorAll('.js-rule'))).forEach(function (el) {
	      if (!el.classList.contains('is-deleted')) {
	        (function () {
	          var val = el.value;

	          var rule = {
	            name: val.name,
	            rules: {},
	            checkbox: val.checkbox || 'on',
	            weight: val.weight || '',
	            path: []
	          };

	          if (val.hash) {
	            rule.hash = val.hash;
	          }

	          val.rules.forEach(function (i) {
	            rule.rules[i.name] = {};

	            if (i.condition) {
	              rule.rules[i.name].checkbox = i.condition;
	            }

	            if (i.set && _typeof(i.set) === 'object') {
	              var isTree = false;

	              for (var j in i.set) {
	                if (i.set.hasOwnProperty(j) && i.set[j] && (_typeof(i.set[j]) === 'object' || i.set[j] === 'select all')) {
	                  isTree = true;
	                }
	              }

	              if (isTree) {
	                rule.rules[i.name].value = {};

	                for (var _j in i.set) {
	                  if (i.set.hasOwnProperty(_j)) {
	                    if (i.set[_j] === 'select all') {
	                      rule.rules[i.name].value[_j] = 'select all';
	                    } else {
	                      rule.rules[i.name].value[_j] = Object.keys(i.set[_j]);
	                    }
	                  }
	                }
	              } else {
	                rule.rules[i.name].value = Object.keys(i.set);
	              }
	            }
	          });

	          [].concat(_toConsumableArray(el.querySelectorAll('.js-path'))).forEach(function (e) {
	            if (!e.classList.contains('is-deleted')) {
	              (function () {
	                var path = {};
	                var v = e.value;

	                path.name = v.name || '';
	                path.checkbox = v.checkbox || 'on';
	                path.direct_linking_checkbox = Number(!!v.direct_linking);
	                path.weight = v.weight;
	                path.lander = [];
	                path.lander_weight = [];
	                path.offer = [];
	                path.offer_weight = [];
	                path.offer_use_url = [];

	                if (!path.direct_linking_checkbox) {
	                  v.lander.forEach(function (l, index) {
	                    path.lander[index] = l;
	                    path.lander_weight[index] = v.lander_weight[index];
	                  });
	                }

	                v.offer.forEach(function (l, index) {
	                  path.offer[index] = l;
	                  path.offer_weight[index] = v.offer_weight[index];
	                  path.offer_use_url[index] = v.offer_url[index] || '';
	                });

	                if (v.hash) {
	                  path.hash = v.hash;
	                }

	                rule.path.push(path);
	              })();
	            }
	          });

	          rules.push(rule);
	        })();
	      }
	    });

	    var data = {
	      name: name,
	      campaign_type: 'redirect',
	      domain: {
	        name: domain || '',
	        path: ''
	      },
	      traffic_source: trafficSource || '',
	      cost_mode: costMode,
	      double_postback: doublePostback || '',
	      redirect_type: redirectType || '',
	      default_path: defaultPath || [],
	      rule: rules || [],
	      beta_distribution: betaDistribution
	    };

	    if (costMode !== 'not_track') {
	      data.cost_click = costValue || 0;
	      data.currency = currency || '';
	    }

	    if (popupBody.currentCampaignId || popupBody.currentCampaignId === 0) {
	      data.id = popupBody.currentCampaignId;
	    }

	    (0, _fetchApi.fetchData)('/campaign/create', data).then(function (res) {
	      if (res.data) {
	        if (res.data.link) {
	          popupBody.querySelector('.js-form-url').value = res.data.link;
	        }
	        if (res.data.id) {
	          popupBody.currentCampaignId = res.data.id;
	        }
	      }
	      if (isClose) {
	        popup.close();
	        throw new Error(err);
	      }
	    }).catch(function (err) {
	      popup.querySelector('.js-popup-error').textContent = err;
	    });
	  }

	  return popupBody;
	};

	var _createPopup = __webpack_require__(81);

	var _createPopup2 = _interopRequireDefault(_createPopup);

	var _listEvent = __webpack_require__(57);

	var _listEvent2 = _interopRequireDefault(_listEvent);

	var _campaignAddChilds = __webpack_require__(85);

	var _campaignAddChilds2 = _interopRequireDefault(_campaignAddChilds);

	var _fetchApi = __webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (box, popupBody) {
	  box.innerHTML = '\n    <div class="cc__left">\n      <div class="cc__label">Default paths:</div>\n\n      <div class="cc__left-wrap">\n        <div class="js-pathes-default"></div>\n        <div class="cc__added"><span class="js-path-add">+ Add new Path</span></div>\n      </div>\n\n      <div class="js-rules"></div>\n      <div class="cc__added"><span class="js-rule-add">+ Add new Rule</span></div>\n    </div>\n\n    <div class="cc__right">\n      <div class="js-path-box"></div>\n      <div class="js-rule-box" style="display: none;"></div>\n    </div>\n  ';

	  popupBody.pathFunctions = (0, _campaignAddPath2.default)(box);
	  popupBody.ruleFunctions = (0, _campaignAddRule2.default)(box);
	};

	var _campaignAddPath = __webpack_require__(86);

	var _campaignAddPath2 = _interopRequireDefault(_campaignAddPath);

	var _campaignAddRule = __webpack_require__(89);

	var _campaignAddRule2 = _interopRequireDefault(_campaignAddRule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (box) {
	  var pathBox = box.querySelector('.js-path-box');
	  var ruleBox = box.querySelector('.js-rule-box');

	  pathBox.innerHTML += '\n    <div class="cc__line">\n      <div class="cc__col"><div class="cc__label">Name:</div></div>\n      <div class="cc__col cc__col-120 cc__col-pad"><div class="cc__label">Weight:</div></div>\n      <div class="cc__col cc__col-50 cc__col-pad"><div class="cc__label">Status:</div></div>\n    </div>\n\n    <div class="cc__line">\n      <div class="cc__col">\n        <div class="input">\n          <input class="js-path-name" type="text" placeholder="Path name">\n          <span><span>\n        </div>\n      </div>\n\n      <div class="cc__col cc__col-120 cc__col-pad">\n        <div class="input">\n          <input class="js-path-weight" type="text" placeholder="0" value="1">\n          <span><span>\n        </div>\n      </div>\n\n      <div class="cc__col cc__col-50 cc__col-pad">\n        <div class="cc__status js-path-status"></div>\n      </div>\n    </div>';

	  pathBox.innerHTML += '\n    <div class="cc__line">\n      <div class="cc__col"><div class="cc__label">Redirect mode:</div></div>\n    </div>\n\n    <div class="cc__line">\n      <div class="cc__col">\n        <div class="input">\n          <input class="js-path-redirect-mode" type="text" disabled="true">\n          <span><span>\n        </div>\n      </div>\n\n      <div class="cc__col cc__col-164 cc__col-pad">\n        <div class="checkbox js-checkbox js-path-direct-linking">Direct linking</div>\n      </div>\n    </div>';

	  pathBox.innerHTML += '\n    <div class="cc__line js-path-lander-line">\n      <div class="cc__col"><div class="cc__label">Lander:</div></div>\n      <div class="cc__col cc__col-120 cc__col-pad"><div class="cc__label js-path-lander-label-weight"></div></div>\n      <div class="cc__col cc__col-50 cc__col-pad"></div>\n    </div>\n\n    <div class="cc__line js-path-lander-line js-path-lander-add">\n      <div class="cc__col">\n        <div class="list is-add js-list" data-placeholder="+ Add Lander">\n          <div class="list__wrap">\n            <div class="list__value js-list-value"></div>\n            <div class="list__dropdown">\n              <div class="list__search">\n                <i class="fa fa-search"></i>\n                <input class="js-list-search" type="text">\n              </div>\n              <div class="list__items js-list-items"></div>\n              <div class="list__control">\n                <div class="list__control-item">\n                  <span class="js-path-create-lander">Create new lander</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class="cc__col cc__col-120 cc__col-pad cc__hidden js-path-hidden">\n        <div class="input">\n          <input class="js-path-lander-weight" type="text" placeholder="0" value="1">\n          <span><span>\n        </div>\n      </div>\n\n      <div class="cc__col cc__col-50 cc__col-pad cc__hidden js-path-hidden">\n        <div class="cc__clear js-path-clear"></div>\n      </div>\n    </div>';

	  pathBox.innerHTML += '\n    <div class="cc__line">\n      <div class="cc__col"><div class="cc__label">Offer:</div></div>\n      <div class="cc__col cc__col-120 cc__col-pad"><div class="cc__label js-path-offer-label-weight"></div></div>\n      <div class="cc__col cc__col-50 cc__col-pad"></div>\n    </div>\n\n    <div class="cc__line js-path-offer-add">\n      <div class="cc__col">\n        <div class="list is-add js-list" data-placeholder="+ Add Offer">\n          <div class="list__wrap">\n            <div class="list__value js-list-value"></div>\n            <div class="list__dropdown">\n              <div class="list__search">\n                <i class="fa fa-search"></i>\n                <input class="js-list-search" type="text">\n              </div>\n              <div class="list__items js-list-items"></div>\n              <div class="list__control">\n                <div class="list__control-item">\n                  <span class="js-path-use-url">Use URL</span>\n                </div>\n                <div class="list__control-item">\n                  <span class="js-path-create-offer">Create new offer</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class="cc__col cc__col-120 cc__col-pad cc__hidden js-path-hidden">\n        <div class="input">\n          <input class="js-path-offer-weight" type="text" placeholder="0" value="1">\n          <span><span>\n        </div>\n      </div>\n\n      <div class="cc__col cc__col-50 cc__col-pad cc__hidden js-path-hidden">\n        <div class="cc__clear js-path-clear"></div>\n      </div>\n    </div>';

	  var pathName = pathBox.querySelector('.js-path-name');
	  var pathWeight = pathBox.querySelector('.js-path-weight');
	  var pathStatus = pathBox.querySelector('.js-path-status');
	  var pathDirectLinking = pathBox.querySelector('.js-path-direct-linking');

	  var defaultPathCount = 1;

	  var add = {
	    lander: {
	      labelWeight: pathBox.querySelector('.js-path-lander-label-weight'),
	      wrap: pathBox.querySelector('.js-path-lander-add'),
	      list: pathBox.querySelector('.js-path-lander-add').querySelector('.js-list')
	    },
	    offer: {
	      labelWeight: pathBox.querySelector('.js-path-offer-label-weight'),
	      wrap: pathBox.querySelector('.js-path-offer-add'),
	      list: pathBox.querySelector('.js-path-offer-add').querySelector('.js-list')
	    }
	  };

	  var checkSelect = false;

	  function updatePathWeight(parent) {
	    var count = 0;
	    var pathes = parent.querySelectorAll('.js-path');

	    [].concat(_toConsumableArray(pathes)).forEach(function (path) {
	      if (path.value.checkbox === 'on') {
	        count += path.value.weight;
	      }
	    });

	    [].concat(_toConsumableArray(pathes)).forEach(function (path) {
	      if (path.value.checkbox === 'on') {
	        if (count) {
	          var percent = Math.round(10000 * path.value.weight / count) / 100;
	          path.querySelector('.js-path-weight').textContent = path.value.weight + ' (' + percent + '%)';
	        } else {
	          path.querySelector('.js-path-weight').textContent = '0 (0%)';
	        }
	      } else {
	        path.querySelector('.js-path-weight').textContent = 'stopped';
	      }
	    });
	  }

	  function updatePath(obj) {
	    if (checkSelect) {
	      return;
	    }

	    if (!box.querySelector('.js-path.is-select')) {
	      switch (obj.field) {
	        case 'name':
	        case 'weight':
	        case 'lander_add':
	        case 'offer_add':
	        case 'status':
	        case 'direct_linking':
	          var name = obj.field === 'name' ? obj.value : null;
	          createPath(name);
	          break;
	        default:
	          break;
	      }
	    }

	    var path = box.querySelector('.js-path.is-select');

	    switch (obj.field) {
	      case 'name':
	        path.value.name = obj.value.trim();
	        path.querySelector('.js-path-name').textContent = path.value.name || '[path unnamed]';
	        break;
	      case 'weight':
	        path.value.weight = obj.value || 0;
	        updatePathWeight(path.parentNode);
	        break;
	      case 'lander_add':
	        path.value.lander.push(obj.value);
	        path.value.lander_weight.push(1);
	        break;
	      case 'lander_update':
	        path.value.lander[obj.position] = obj.value;
	        break;
	      case 'lander_update_weight':
	        path.value.lander_weight[obj.position] = obj.value;
	        break;
	      case 'lander_remove':
	        path.value.lander.splice(obj.position, 1);
	        path.value.lander_weight.splice(obj.position, 1);
	        break;
	      case 'offer_add':
	        path.value.offer.push(obj.value);
	        path.value.offer_weight.push(1);
	        path.value.offer_url.push(false);
	        break;
	      case 'offer_update':
	        path.value.offer[obj.position] = obj.value;
	        break;
	      case 'offer_update_weight':
	        path.value.offer_weight[obj.position] = obj.value;
	        break;
	      case 'offer_remove':
	        path.value.offer.splice(obj.position, 1);
	        path.value.offer_weight.splice(obj.position, 1);
	        path.value.offer_url.splice(obj.position, 1);
	        break;
	      case 'status':
	        path.value.checkbox = obj.value;
	        if (path.value.checkbox === 'off') {
	          path.classList.add('is-stoped');
	        } else {
	          path.classList.remove('is-stoped');
	        }
	        updatePathWeight(path.parentNode);
	        break;
	      case 'direct_linking':
	        path.value.direct_linking = obj.value;
	        break;
	      case 'use_url':
	        path.value.offer_url[obj.position] = true;
	        break;
	      case 'hash':
	        path.value.hash = obj.hash;
	        break;
	      default:
	        break;
	    }
	  }

	  function selectPath(path) {
	    var siblignsPaths = path.parentNode.querySelectorAll('.js-path');
	    var position = [].concat(_toConsumableArray(siblignsPaths)).indexOf(path);

	    checkSelect = true;

	    showForm();
	    clearForm();

	    [].concat(_toConsumableArray(box.querySelectorAll('.js-path'))).forEach(function (el) {
	      return el.classList.remove('is-select');
	    });
	    [].concat(_toConsumableArray(box.querySelectorAll('.js-rule'))).forEach(function (el) {
	      return el.classList.remove('is-select');
	    });

	    path.classList.add('is-select');
	    pathName.value = path.value.name || '';
	    pathWeight.value = path.value.weight || '';

	    if (path.value.checkbox === 'off') {
	      pathStatus.classList.add('is-stoped');
	    }

	    if (path.value.direct_linking) {
	      pathDirectLinking.classList.add('is-select');
	      [].concat(_toConsumableArray(pathBox.querySelectorAll('.js-path-lander-line'))).forEach(function (el) {
	        el.style.display = 'none';
	      });
	    } else {
	      [].concat(_toConsumableArray(pathBox.querySelectorAll('.js-path-lander-line'))).forEach(function (el) {
	        el.style.display = '';
	      });
	    }

	    path.value.offer.forEach(function (value, index) {
	      if (path.value.offer_url[index]) {
	        add.offer.list.value = '__temp__';
	        newList('offer');
	        add.offer.list.close();

	        var parent = pathBox.querySelectorAll('.js-path-offer')[index].querySelector('.js-list').parentNode;

	        parent.innerHTML = '\n          <div class="input">\n            <input class="js-path-url" type="text" placeholder="Path URL" value="' + value + '">\n            <span><span>\n          </div>';

	        parent.querySelector('.js-path-url').addEventListener('change', function (ev) {
	          updatePath({
	            field: 'offer_update',
	            value: ev.target.value.trim(),
	            position: index
	          });
	        });
	      } else {
	        add.offer.list.setValue(value);
	      }

	      pathBox.querySelectorAll('.js-path-offer')[index].querySelector('.js-path-offer-weight').value = path.value.offer_weight[index] || 1;
	    });

	    path.value.lander.forEach(function (value, index) {
	      add.lander.list.setValue(value);
	      pathBox.querySelectorAll('.js-path-lander')[index].querySelector('.js-path-lander-weight').value = path.value.lander_weight[index] || 1;
	    });

	    checkSelect = false;
	  }

	  function eventPath(path) {
	    path.addEventListener('click', function (event) {
	      var copy = event.target.closest('.js-path-copy');
	      var del = event.target.closest('.js-path-delete');
	      var item = event.target.closest('.js-path-item');

	      var siblignsPaths = path.parentNode.querySelectorAll('.js-path');
	      var position = [].concat(_toConsumableArray(siblignsPaths)).indexOf(path);

	      if (copy) {
	        var clone = path.cloneNode(true);
	        var name = path.value.name;

	        if (!/ \(copy\)$/.test(name)) {
	          name = (name + ' (copy)').trim();
	        }

	        if (path.nextSibling) {
	          path.parentNode.insertBefore(clone, path.nextSibling);
	        } else {
	          path.parentNode.appendChild(clone);
	        }

	        clone.classList.remove('is-select');
	        clone.value = Object.assign({}, path.value);
	        clone.value.name = name;
	        clone.querySelector('.js-path-name').textContent = name;
	        eventPath(clone);

	        updatePathWeight(path.parentNode);
	      } else if (del) {
	        if (path.classList.contains('is-select')) {
	          path.classList.remove('is-select');
	          clearForm();
	        }

	        path.classList.add('is-deleted');

	        path._deleteTimeout = setTimeout(function () {
	          var parent = path.parentNode;
	          path.parentNode.removeChild(path);
	          updatePathWeight(parent);
	        }, 5000);

	        path.querySelector('.js-path-undo').addEventListener('click', function () {
	          clearTimeout(path._deleteTimeout);
	          setTimeout(function () {
	            return path.classList.remove('is-deleted');
	          }, 300);
	        });
	      } else if (item) {
	        selectPath(path);
	      }
	    });
	  }

	  function createPath(name, obj, parentRule) {
	    var data = obj || {};
	    var pathElement = document.createElement('div');
	    var newName = name || 'Path ' + defaultPathCount;

	    pathElement.className = 'cc__element is-select js-path';
	    pathElement.innerHTML = '\n      <div class="cc__element-item js-path-item">\n        <div class="cc__element-name js-path-name">' + newName + '</div>\n        <div class="cc__element-weight js-path-weight"></div>\n        <div class="cc__element-copy js-path-copy"></div>\n        <div class="cc__element-delete js-path-delete"></div>\n        <div class="cc__element-undo js-path-undo"><i class="fa fa-undo"></i>Undo</div>\n      </div>';

	    var rule = void 0;

	    if (obj) {
	      var allRules = box.querySelectorAll('.js-rule');
	      rule = allRules[allRules.length - 1];
	    } else {
	      rule = parentRule;
	    }

	    if (rule) {
	      rule.querySelector('.js-pathes').appendChild(pathElement);
	    } else {
	      box.querySelector('.js-pathes-default').appendChild(pathElement);
	    }

	    if (obj) {
	      pathElement.classList.remove('is-select');
	    }

	    pathElement.value = {
	      name: newName,
	      weight: 1,
	      checkbox: data.checkbox || 'on',
	      lander: [],
	      lander_weight: [],
	      offer: [],
	      offer_weight: [],
	      offer_url: [],
	      direct_linking: Number(data.direct_linking_checkbox) ? true : false,
	      hash: data.hash || null
	    };

	    if (data.checkbox === 'off') {
	      pathElement.classList.add('is-stoped');
	    }

	    if (data.weight || data.weight === 0) {
	      pathElement.value.weight = Number(data.weight);
	    }

	    if (data.lander) {
	      data.lander.forEach(function (o, index) {
	        pathElement.value.lander.push(o);
	        pathElement.value.lander_weight[index] = Number(data.lander_weight[index]) || 1;
	      });
	    }

	    if (data.offer) {
	      data.offer.forEach(function (o, index) {
	        pathElement.value.offer.push(o);
	        pathElement.value.offer_weight[index] = Number(data.offer_weight[index]) || 1;
	        pathElement.value.offer_url[index] = JSON.parse((data.offer_use_url || [])[index] || false);
	      });
	    }

	    eventPath(pathElement);
	    updatePathWeight(pathElement.parentNode);

	    if (!name) {
	      pathName.value = newName;
	    }

	    defaultPathCount++;
	  }

	  function showForm() {
	    pathBox.style.display = '';
	    ruleBox.style.display = 'none';
	  }

	  function clearForm() {
	    pathName.value = '';
	    pathWeight.value = 1;
	    pathStatus.classList.remove('is-stoped');
	    pathDirectLinking.classList.remove('is-select');

	    [].concat(_toConsumableArray(pathBox.querySelectorAll('.js-path-lander-line'))).forEach(function (el) {
	      el.style.display = '';
	    });

	    ['lander', 'offer'].forEach(function (type) {
	      [].concat(_toConsumableArray(pathBox.querySelectorAll('.js-path-' + type))).forEach(function (wrap) {
	        wrap.parentNode.removeChild(wrap);
	      });
	      if (add[type].list.unsetDisabled) {
	        add[type].list.unsetDisabled();
	      }
	      add[type].labelWeight.textContent = '';
	    });

	    pathName.focus();
	  }

	  box.addEventListener('click', function (event) {
	    var addPath = event.target.closest('.js-path-add');

	    if (addPath) {
	      showForm();
	      clearForm();

	      [].concat(_toConsumableArray(box.querySelectorAll('.js-path'))).forEach(function (el) {
	        return el.classList.remove('is-select');
	      });
	      [].concat(_toConsumableArray(box.querySelectorAll('.js-rule'))).forEach(function (el) {
	        return el.classList.remove('is-select');
	      });

	      var rule = addPath.closest('.js-rule');

	      createPath(null, null, rule);
	    }
	  });

	  pathName.addEventListener('change', function () {
	    var value = pathName.value;

	    updatePath({
	      field: 'name',
	      value: value
	    });
	  });

	  function maskWeight(input) {
	    input.addEventListener('paste', function (event) {
	      if (/^\d*.?\d+$/.test(input.value.trim())) {
	        input.value = '';
	      }
	    });

	    input.addEventListener('keydown', function (event) {
	      var code = event.keyCode;
	      var char = String.fromCharCode(code);
	      var key = '¾.0123456789'.indexOf(char);

	      switch (code) {
	        case 9:
	        case 13:
	        case 27:
	          event.target.blur();
	          break;
	        case 8:
	        case 46:
	        case 37:
	        case 39:
	        case 190:
	          break;
	        default:
	          if (key === -1) {
	            event.preventDefault();
	          }
	      }
	    });
	  }

	  maskWeight(pathWeight);
	  pathWeight.addEventListener('change', function () {
	    var value = pathWeight.value;
	    updatePath({
	      field: 'weight',
	      value: Number(value) || 0
	    });
	  });

	  pathStatus.addEventListener('click', function () {
	    pathStatus.classList.toggle('is-stoped');
	    updatePath({
	      field: 'status',
	      value: pathStatus.classList.contains('is-stoped') ? 'off' : 'on'
	    });
	  });

	  pathDirectLinking.addEventListener('change', function () {
	    var isSelect = pathDirectLinking.classList.contains('is-select');

	    updatePath({
	      field: 'direct_linking',
	      value: isSelect
	    });

	    [].concat(_toConsumableArray(pathBox.querySelectorAll('.js-path-lander-line'))).forEach(function (el) {
	      if (isSelect) {
	        el.style.display = 'none';
	      } else {
	        el.style.display = '';
	      }
	    });
	  });

	  function changeList(event, type) {
	    var list = event.target;
	    var wrap = list.closest('.js-path-' + type);
	    var lists = pathBox.querySelectorAll('.js-path-' + type + ' .js-list');
	    var wraps = pathBox.querySelectorAll('.js-path-' + type);

	    var oldValue = list.oldValue;
	    var value = list.value;
	    var position = [].concat(_toConsumableArray(wraps)).indexOf(wrap);

	    add[type].list.unsetDisabled(oldValue);
	    add[type].list.setDisabled(value);

	    [].concat(_toConsumableArray(lists)).forEach(function (el) {
	      el.unsetDisabled(oldValue);
	      el.setDisabled(value);
	    });

	    updatePath({
	      field: type + '_update',
	      value: value,
	      position: position
	    });
	  }

	  function removeList(event, type) {
	    var clear = event.target;

	    var wrap = clear.closest('.js-path-' + type);
	    var wraps = pathBox.querySelectorAll('.js-path-' + type);
	    var position = [].concat(_toConsumableArray(wraps)).indexOf(wrap);

	    var list = wrap.querySelector('.js-list');

	    if (list) {
	      (function () {
	        var lists = pathBox.querySelectorAll('.js-path-' + type + ' .js-list');
	        var value = list.value;

	        add[type].list.unsetDisabled(value);
	        [].concat(_toConsumableArray(lists)).forEach(function (el) {
	          return el.unsetDisabled(value);
	        });
	      })();
	    }

	    wrap.parentNode.removeChild(wrap);

	    if (!pathBox.querySelectorAll('.js-path-' + type).length) {
	      add[type].labelWeight.textContent = '';
	    }

	    updatePath({
	      field: type + '_remove',
	      position: position
	    });
	  }

	  function newList(type) {
	    var wrap = add[type].wrap;
	    var list = add[type].list;
	    var wraps = pathBox.querySelectorAll('.js-path-' + type);
	    var lists = pathBox.querySelectorAll('.js-path-' + type + ' .js-list');

	    var value = list.value;

	    if (!value) {
	      return;
	    }

	    list.updateValue();
	    list.setDisabled(value);

	    [].concat(_toConsumableArray(lists)).forEach(function (el) {
	      return el.setDisabled(value);
	    });

	    var cloneWrap = wrap.cloneNode(true);
	    var cloneList = cloneWrap.querySelector('.js-list');

	    cloneWrap.classList.remove('js-path-' + type + '-add');
	    cloneWrap.classList.add('js-path-' + type);
	    cloneList.classList.remove('is-open', 'is-add');

	    add[type].labelWeight.textContent = 'Weight:';
	    wrap._insertBefore(cloneWrap);
	    (0, _listEvent2.default)(cloneList);
	    cloneWrap.querySelector('.js-path-clear').addEventListener('click', function (event) {
	      return removeList(event, type);
	    });
	    [].concat(_toConsumableArray(cloneWrap.querySelectorAll('.js-path-hidden'))).forEach(function (el) {
	      return el.classList.add('is-show');
	    });

	    cloneList.updateValue(value);
	    cloneList.addEventListener('change', function (event) {
	      return changeList(event, type);
	    });

	    var weight = cloneWrap.querySelector('.js-path-' + type + '-weight');
	    maskWeight(weight);
	    weight.addEventListener('change', function (event) {
	      var targetWrap = event.target.closest('.js-path-' + type);
	      var allWraps = pathBox.querySelectorAll('.js-path-' + type);
	      var position = [].concat(_toConsumableArray(allWraps)).indexOf(targetWrap);

	      updatePath({
	        field: type + '_update_weight',
	        value: Number(event.target.value),
	        position: position
	      });
	    });

	    updatePath({
	      field: type + '_add',
	      value: value
	    });
	  }

	  function fillingAddLists(type) {
	    var link = '/' + type + '/list';
	    var list = add[type].list;
	    var listItems = add[type].list.querySelector('.js-list-items');

	    (0, _fetchApi.fetchData)(link, { field: 'id,name', order: 'name' }).then(function (res) {
	      var obj = res.data || {};

	      for (var i in obj) {
	        if (obj.hasOwnProperty(i)) {
	          listItems.innerHTML += '<div class="list__item js-list-item" data-value="' + obj[i].id + '">' + obj[i].name + '</div>';
	        }
	      }

	      (0, _listEvent2.default)(list);
	      list.addEventListener('change', function () {
	        return newList(type);
	      });
	    }).catch(function (err) {
	      throw new Error(err);
	    });
	  }

	  (function () {
	    fillingAddLists('lander');
	    fillingAddLists('offer');
	  })();

	  pathBox.addEventListener('click', function (event) {
	    var createLander = event.target.closest('.js-path-create-lander');
	    var createOffer = event.target.closest('.js-path-create-offer');
	    var useUrl = event.target.closest('.js-path-use-url');

	    if (createLander) {
	      (function () {
	        var list = createLander.closest('.js-list');
	        var popup = createLander.closest('.js-popup');

	        if (list && popup) {
	          popup.style.display = 'none';

	          (0, _landerAdd2.default)(function (data) {
	            popup.style.display = '';
	            list.querySelector('.js-list-items').innerHTML += '<div class="list__item js-list-item" data-value="' + data.id + '">' + data.name + '</div>';
	            list.setValue(data.id);
	          });
	        }
	      })();
	    }

	    if (createOffer) {
	      (function () {
	        var list = createOffer.closest('.js-list');
	        var popup = createOffer.closest('.js-popup');

	        if (list && popup) {
	          popup.style.display = 'none';

	          (0, _offerAdd3.default)(function (data) {
	            popup.style.display = '';
	            list.querySelector('.js-list-items').innerHTML += '<div class="list__item js-list-item" data-value="' + data.id + '">' + data.name + '</div>';
	            list.setValue(data.id);
	          });
	        }
	      })();
	    }

	    if (useUrl) {
	      (function () {
	        var list = useUrl.closest('.js-list');
	        var _offerAdd = useUrl.closest('.js-path-offer-add');

	        if (_offerAdd) {
	          list.value = '__temp__';
	          newList('offer');
	          list.close();
	          var _allOffers = pathBox.querySelectorAll('.js-path-offer');
	          list = _allOffers[_allOffers.length - 1].querySelector('.js-list');
	        } else {
	          (function () {
	            var value = list.value;

	            pathBox.querySelector('.js-path-offer-add .js-list').unsetDisabled(value);
	            [].concat(_toConsumableArray(pathBox.querySelectorAll('.js-path-offer .js-list'))).forEach(function (el) {
	              return el.unsetDisabled(value);
	            });
	          })();
	        }

	        var wrap = list.closest('.js-path-offer');
	        var parent = list.parentNode;
	        var position = [].concat(_toConsumableArray(pathBox.querySelectorAll('.js-path-offer'))).indexOf(wrap);

	        parent.innerHTML = '\n        <div class="input">\n          <input class="js-path-url" type="text" placeholder="Path URL">\n          <span><span>\n        </div>';

	        var input = parent.querySelector('.js-path-url');

	        input.addEventListener('change', function () {
	          updatePath({
	            field: 'offer_update',
	            value: input.value.trim(),
	            position: position
	          });
	        });

	        updatePath({
	          field: 'offer_update',
	          value: '',
	          position: position
	        });

	        updatePath({
	          field: 'use_url',
	          position: position
	        });

	        input.focus();
	      })();
	    }
	  });

	  return {
	    createPath: createPath,
	    selectPath: selectPath,
	    eventPath: eventPath
	  };
	};

	var _landerAdd = __webpack_require__(87);

	var _landerAdd2 = _interopRequireDefault(_landerAdd);

	var _offerAdd2 = __webpack_require__(88);

	var _offerAdd3 = _interopRequireDefault(_offerAdd2);

	var _listEvent = __webpack_require__(57);

	var _listEvent2 = _interopRequireDefault(_listEvent);

	var _fetchApi = __webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (callback) {
	  var edit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	  var popup = false;
	  if (edit === true) {
	    popup = (0, _createPopup2.default)('Edit lander', true);
	  } else {
	    popup = (0, _createPopup2.default)('Creating new lander', true);
	  }

	  if (!popup) {
	    return null;
	  }

	  var popupBody = popup.querySelector('.js-popup-body');

	  if (!popupBody) {
	    return null;
	  }

	  popupBody.innerHTML = '\n    <div class="popup__line">\n      <div class="popup__line-label">\n        <span>Name:</span>\n        <div class="info"></div>\n      </div>\n      <div class="popup__line-body">\n        <div class="input">\n          <input class="js-form-name" type="text" placeholder="Write a name for the new offer">\n          <span><span>\n        </div>\n      </div>\n    </div>\n\n    <div class="popup__line">\n      <div class="popup__line-label">\n        <span>Offer URL:</span>\n        <div class="info"></div>\n      </div>\n      <div class="popup__line-body">\n        <div class="input">\n          <input class="js-form-url" type="text" placeholder="Create a url">\n          <span><span>\n        </div>\n        <div class="tags js-form-tags" style="display: none;"></div>\n      </div>\n    </div>\n\n    <div class="popup__line">\n      <div class="popup__line-label">\n        <span>Post id:</span>\n        <div class="info"></div>\n      </div>\n      <div class="popup__line-body">\n        <div class="input">\n          <input class="js-form-post-id" type="text" placeholder="0">\n          <span></span>\n        </div>\n      </div>\n    </div>';

	  var formName = popupBody.querySelector('.js-form-name');
	  var formUrl = popupBody.querySelector('.js-form-url');
	  var formUrlTags = popupBody.querySelector('.js-form-tags');
	  var formPostUrl = popupBody.querySelector('.js-form-post-id');

	  '{campaign_id},{trafficsource_id},{trafficsource_name},{lander_id},{device_brand},{device_model},{device_type},{browser},{browser_version},{os},{os_version},{country},{isp},{useragent},{ip},{click_id},{visit_id},{browser_language},{referrer_domain}'.split(',').forEach(function (tag) {
	    var span = document.createElement('span');
	    span.className = 'js-form-tag';
	    span.textContent = tag;
	    formUrlTags.appendChild(span);
	  });

	  formUrl.addEventListener('focus', function () {
	    formUrlTags.style.display = '';
	  });

	  formUrl.addEventListener('blur', function () {
	    setTimeout(function () {
	      formUrlTags.style.display = 'none';
	    }, 200);
	  });

	  var changeFormUrl = function changeFormUrl() {
	    var val = formUrl.value;

	    [].concat(_toConsumableArray(formUrlTags.querySelectorAll('span'))).forEach(function (span) {
	      if (val.indexOf(span.textContent.trim()) !== -1) {
	        span.classList.add('is-select');
	      } else {
	        span.classList.remove('is-select');
	      }
	    });
	  };

	  formUrl.addEventListener('change', changeFormUrl);
	  formUrl.addEventListener('keyup', changeFormUrl);
	  formUrl.addEventListener('paste', changeFormUrl);
	  formUrl.addEventListener('cut', changeFormUrl);

	  formUrlTags.addEventListener('mousedown', function (event) {
	    var closest = event.target.closest('.js-form-tag');

	    if (closest) {
	      var val = closest.textContent;

	      if (!closest.classList.contains('is-select')) {
	        formUrl.value += val;
	        closest.classList.add('is-select');
	      } else {
	        var reg = new RegExp(val, 'g');
	        el.value = el.value.replace(reg, '');
	        closest.classList.remove('is-select');
	      }
	    }

	    formUrl.focus();
	    event.preventDefault();
	    event.stopPropagation();
	  });

	  popup.querySelector('.js-popup-save').addEventListener('click', function (event) {
	    var name = formName.value.trim();
	    var landerUrl = formUrl.value.trim();
	    var postID = formPostUrl.value.trim();

	    var focusFormName = function focusFormName() {
	      var parentFormName = formName.parentNode;
	      parentFormName.classList.remove('is-error');
	      parentFormName.querySelector('span').textContent = '';
	      formName.removeEventListener('focus', focusFormName);
	    };

	    if (!name) {
	      var parentFormName = formName.parentNode;
	      parentFormName.classList.add('is-error');
	      parentFormName.querySelector('span').textContent = 'The field can not be empty';
	      formName.addEventListener('focus', focusFormName);
	      return;
	    }

	    var data = {
	      name: name,
	      url: landerUrl,
	      post_id: postID
	    };

	    if (popupBody.currentLanderId || popupBody.currentLanderId === 0) {
	      data.id = popupBody.currentLanderId;
	    }

	    (0, _fetchApi.fetchData)('/lander/create', data).then(function (res) {
	      popup.close();

	      if (callback && typeof callback === 'function') {
	        callback(res.data);
	      }
	    }).catch(function (err) {
	      popup.querySelector('.js-popup-error').textContent = err;
	      throw new Error(err);
	    });
	  });

	  return popupBody;
	};

	var _qs = __webpack_require__(16);

	var _qs2 = _interopRequireDefault(_qs);

	var _createPopup = __webpack_require__(81);

	var _createPopup2 = _interopRequireDefault(_createPopup);

	var _listEvent = __webpack_require__(57);

	var _listEvent2 = _interopRequireDefault(_listEvent);

	var _fetchApi = __webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (callback) {
	  var edit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	  var popup = false;
	  if (edit === true) {
	    popup = (0, _createPopup2.default)('Edit offer', true);
	  } else {
	    popup = (0, _createPopup2.default)('Creating new offer', true);
	  }
	  if (!popup) {
	    return null;
	  }

	  var popupBody = popup.querySelector('.js-popup-body');

	  if (!popupBody) {
	    return null;
	  }

	  popupBody.innerHTML = '\n    <div class="popup__line">\n      <div class="popup__line-label">\n        <span>Name:</span>\n        <div class="info"></div>\n      </div>\n      <div class="popup__line-body">\n        <div class="input">\n          <input class="js-form-name" type="text" placeholder="Write a name for the new offer">\n          <span><span>\n        </div>\n      </div>\n    </div>\n\n    <div class="popup__line">\n      <div class="popup__line-label">\n        <span>Offer URL:</span>\n        <div class="info"></div>\n      </div>\n      <div class="popup__line-body">\n        <div class="input">\n          <input class="js-form-url" type="text" placeholder="Create a url">\n          <span><span>\n        </div>\n        <div class="tags js-form-tags" style="display: none;"></div>\n      </div>\n    </div>\n\n    <div class="popup__line">\n      <div class="popup__line-label">\n        <span>Affiliate nework:</span>\n        <div class="info"></div>\n      </div>\n      <div class="popup__line-body">\n        <div class="list js-list js-form-affnet" style="display: block; margin: 0 0 15px;" data-placeholder="Select affiliate network">\n          <div class="list__wrap" style="display: block;">\n            <div class="list__value js-list-value"></div>\n            <div class="list__dropdown" style="right: 0;">\n              <div class="list__items js-list-items"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class="popup__line">\n      <div class="popup__line-label">\n        <span>Payout:</span>\n        <div class="info"></div>\n      </div>\n      <div class="popup__line-body">\n        <div class="radiobutton js-form-payout-auto">Auto</div>\n        <div class="radiobutton js-form-payout-manual is-select">Manual</div>\n        <div class="input" style="display: inline-block; width: 90px; margin-left: 30px; margin-right: 10px;">\n          <input class="js-form-payout-value" type="text" placeholder="0">\n          <span><span>\n        </div>\n        <div class="popup__currency js-form-payout-eur">\n          <i class="fa fa-euro"></i>\n        </div>\n        <div class="popup__currency js-form-payout-rub">\n          <i class="fa fa-ruble"></i>\n        </div>\n        <div class="popup__currency js-form-payout-usd is-select">\n          <i class="fa fa-dollar"></i>\n        </div>\n      </div>\n    </div>';

	  var formName = popupBody.querySelector('.js-form-name');
	  var formUrl = popupBody.querySelector('.js-form-url');
	  var formUrlTags = popupBody.querySelector('.js-form-tags');
	  var formAffNet = popupBody.querySelector('.js-form-affnet');
	  var formPayoutAuto = popupBody.querySelector('.js-form-payout-auto');
	  var formPayoutManual = popupBody.querySelector('.js-form-payout-manual');
	  var formPayoutValue = popupBody.querySelector('.js-form-payout-value');
	  var formPayoutEur = popupBody.querySelector('.js-form-payout-eur');
	  var formPayoutRub = popupBody.querySelector('.js-form-payout-rub');
	  var formPayoutUsd = popupBody.querySelector('.js-form-payout-usd');

	  '{campaign_id},{trafficsource_id},{trafficsource_name},{lander_id},{device_brand},{device_model},{device_type},{browser},{browser_version},{os},{os_version},{country},{isp},{useragent},{ip},{click_id},{visit_id},{browser_language},{referrer_domain}'.split(',').forEach(function (tag) {
	    var span = document.createElement('span');
	    span.className = 'js-form-tag';
	    span.textContent = tag;
	    formUrlTags.appendChild(span);
	  });

	  formUrl.addEventListener('focus', function () {
	    formUrlTags.style.display = '';
	  });

	  formUrl.addEventListener('blur', function () {
	    setTimeout(function () {
	      formUrlTags.style.display = 'none';
	    }, 200);
	  });

	  var changeFormUrl = function changeFormUrl() {
	    var val = formUrl.value;

	    [].concat(_toConsumableArray(formUrlTags.querySelectorAll('span'))).forEach(function (span) {
	      if (val.indexOf(span.textContent.trim()) !== -1) {
	        span.classList.add('is-select');
	      } else {
	        span.classList.remove('is-select');
	      }
	    });
	  };

	  formUrl.addEventListener('change', changeFormUrl);
	  formUrl.addEventListener('keyup', changeFormUrl);
	  formUrl.addEventListener('paste', changeFormUrl);
	  formUrl.addEventListener('cut', changeFormUrl);

	  formUrlTags.addEventListener('mousedown', function (event) {
	    var closest = event.target.closest('.js-form-tag');

	    if (closest) {
	      var val = closest.textContent;

	      if (!closest.classList.contains('is-select')) {
	        formUrl.value += val;
	        closest.classList.add('is-select');
	      } else {
	        var reg = new RegExp(val, 'g');
	        el.value = el.value.replace(reg, '');
	        closest.classList.remove('is-select');
	      }
	    }

	    formUrl.focus();
	    event.preventDefault();
	    event.stopPropagation();
	  });

	  (function () {
	    (0, _fetchApi.fetchData)('/affiliate_network/list', {
	      field: 'id,name',
	      order: 'name'
	    }).then(function (res) {
	      var items = formAffNet.querySelector('.js-list-items');

	      (res.data || []).forEach(function (item) {
	        items.innerHTML += '<div class="list__item js-list-item" data-value="' + item.id + '">' + item.name + '</div>';
	      });

	      (0, _listEvent2.default)(formAffNet);
	    }).catch(function (err) {
	      throw new Error(err);
	    });
	  })();

	  formPayoutAuto.addEventListener('click', function () {
	    formPayoutAuto.classList.add('is-select');
	    formPayoutManual.classList.remove('is-select');
	  });

	  formPayoutManual.addEventListener('click', function () {
	    formPayoutAuto.classList.remove('is-select');
	    formPayoutManual.classList.add('is-select');
	  });

	  formPayoutEur.addEventListener('click', function () {
	    formPayoutEur.classList.add('is-select');
	    formPayoutRub.classList.remove('is-select');
	    formPayoutUsd.classList.remove('is-select');
	  });

	  formPayoutRub.addEventListener('click', function () {
	    formPayoutEur.classList.remove('is-select');
	    formPayoutRub.classList.add('is-select');
	    formPayoutUsd.classList.remove('is-select');
	  });

	  formPayoutUsd.addEventListener('click', function () {
	    formPayoutEur.classList.remove('is-select');
	    formPayoutRub.classList.remove('is-select');
	    formPayoutUsd.classList.add('is-select');
	  });

	  formPayoutValue.addEventListener('paste', function (event) {
	    if (/^\d+$/.test(formPayoutValue.value.trim())) {
	      formPayoutValue.value = '';
	    }
	  });

	  formPayoutValue.addEventListener('keydown', function (event) {
	    var code = event.keyCode;
	    var char = String.fromCharCode(code);
	    var key = '0123456789'.indexOf(char);
	    var value = parseInt(event.target.value, 10);

	    switch (code) {
	      case 9:
	      case 13:
	      case 27:
	        event.target.blur();
	        break;
	      case 8:
	      case 46:
	        break;
	      default:
	        if (key === -1) {
	          event.preventDefault();
	        }
	    }
	  });

	  popup.querySelector('.js-popup-save').addEventListener('click', function (event) {
	    var name = formName.value.trim();
	    var offerUrl = formUrl.value.trim();
	    var affNet = formAffNet.value;
	    var payout = formPayoutAuto.classList.contains('is-select') ? 1 : 0;
	    var currency = void 0;
	    var payoutValue = formPayoutValue.value || 0;

	    var focusFormName = function focusFormName() {
	      var parentFormName = formName.parentNode;
	      parentFormName.classList.remove('is-error');
	      parentFormName.querySelector('span').textContent = '';
	      formName.removeEventListener('focus', focusFormName);
	    };

	    if (!name) {
	      var parentFormName = formName.parentNode;
	      parentFormName.classList.add('is-error');
	      parentFormName.querySelector('span').textContent = 'The field can not be empty';
	      formName.addEventListener('focus', focusFormName);
	      return;
	    }

	    if (formPayoutEur.classList.contains('is-select')) {
	      currency = 'EUR';
	    } else if (formPayoutRub.classList.contains('is-select')) {
	      currency = 'RUB';
	    } else {
	      currency = 'USD';
	    }

	    var data = {
	      name: name,
	      url: offerUrl,
	      affiliate_network: affNet,
	      payout: payout,
	      currency: currency,
	      offer_type: 0,
	      payout_value: payoutValue
	    };

	    if (popupBody.currentOfferId || popupBody.currentOfferId === 0) {
	      data.id = popupBody.currentOfferId;
	    }

	    (0, _fetchApi.fetchData)('/offer/create', data).then(function (res) {
	      popup.close();

	      if (callback && typeof callback === 'function') {
	        callback(res.data);
	      }
	    }).catch(function (err) {
	      popup.querySelector('.js-popup-error').textContent = err;
	      throw new Error(err);
	    });
	  });

	  return popupBody;
	};

	var _qs = __webpack_require__(16);

	var _qs2 = _interopRequireDefault(_qs);

	var _createPopup = __webpack_require__(81);

	var _createPopup2 = _interopRequireDefault(_createPopup);

	var _listEvent = __webpack_require__(57);

	var _listEvent2 = _interopRequireDefault(_listEvent);

	var _fetchApi = __webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = function (box) {
	  var pathBox = box.querySelector('.js-path-box');
	  var ruleBox = box.querySelector('.js-rule-box');

	  ruleBox.innerHTML += '\n    <div class="cc__line">\n      <div class="cc__col"><div class="cc__label">Name:</div></div>\n    </div>\n\n    <div class="cc__line">\n      <div class="cc__col">\n        <div class="input">\n          <input class="js-rule-name" type="text" placeholder="Rule name">\n          <span><span>\n        </div>\n      </div>\n\n      <div class="cc__col cc__col-50 cc__col-pad">\n        <div class="cc__status js-rule-status"></div>\n      </div>\n    </div>\n\n    <div class="cc__line js-rule-line-add">\n      <div class="list is-add js-list" data-placeholder="+ Add Rule">\n        <div class="list__wrap">\n          <div class="list__value js-list-value"></div>\n          <div class="list__dropdown">\n            <div class="list__items js-list-items"></div>\n          </div>\n        </div>\n      </div>\n    </div>';

	  var allRules = box.querySelector('.js-rules');

	  var ruleName = ruleBox.querySelector('.js-rule-name');
	  var ruleStatus = ruleBox.querySelector('.js-rule-status');
	  var ruleAddWrap = ruleBox.querySelector('.js-rule-line-add');
	  var ruleAddList = ruleAddWrap.querySelector('.js-list');

	  var checkSelect = false;
	  var defaultRuleCount = 1;

	  function updateRule(obj) {
	    if (checkSelect) {
	      return;
	    }

	    if (!box.querySelector('.js-rule.is-select')) {
	      switch (obj.field) {
	        case 'name':
	        case 'status':
	        case 'rule_add':
	          var name = obj.field === 'name' ? obj.value : null;
	          createRule(name);
	          break;
	        default:
	          break;
	      }
	    }

	    var rule = box.querySelector('.js-rule.is-select');

	    switch (obj.field) {
	      case 'name':
	        rule.value.name = obj.value.trim();
	        rule.querySelector('.js-rule-name').textContent = rule.value.name || '[rule unnamed]';
	        break;
	      case 'rule':
	        rule.value.rules[obj.position] = rule.value.rules[obj.position] || {};
	        rule.value.rules[obj.position].name = obj.value;
	        break;
	      case 'condition':
	        rule.value.rules[obj.position] = rule.value.rules[obj.position] || {};
	        rule.value.rules[obj.position].condition = obj.value;
	        break;
	      case 'set':
	        rule.value.rules[obj.position] = rule.value.rules[obj.position] || {};
	        rule.value.rules[obj.position].set = obj.value;
	        break;
	      case 'status':
	        rule.value.checkbox = obj.value;
	        if (rule.value.checkbox === 'off') {
	          rule.classList.add('is-stoped');
	        } else {
	          rule.classList.remove('is-stoped');
	        }
	        break;
	      case 'hash':
	        rule.value.hash = obj.hash;
	        break;
	      default:
	        break;
	    }
	  }

	  function eventRule(rule) {
	    rule.addEventListener('click', function (event) {
	      var up = event.target.closest('.js-rule-up');
	      var down = event.target.closest('.js-rule-down');
	      var copy = event.target.closest('.js-rule-copy');
	      var del = event.target.closest('.js-rule-delete');
	      var item = event.target.closest('.js-rule-item');

	      var rules = allRules.querySelectorAll('.js-rule');
	      var position = [].concat(_toConsumableArray(rules)).indexOf(rule);

	      if (up) {
	        if (position > 0) {
	          var prev = rules[position - 1];
	          if (prev) {
	            prev._insertBefore(rule);
	          }
	        }
	      } else if (down) {
	        if (position >= 0 && position < rules.length - 1) {
	          var next = rules[position + 1];
	          if (next) {
	            rule._insertBefore(next);
	          }
	        }
	      } else if (copy) {
	        (function () {
	          var clone = rule.cloneNode(true);
	          var name = rule.value.name;

	          if (!/ \(copy\)$/.test(name)) {
	            name = (name + ' (copy)').trim();
	          }

	          if (rule.nextSibling) {
	            rule.parentNode.insertBefore(clone, rule.nextSibling);
	          } else {
	            rule.parentNode.appendChild(clone);
	          }

	          clone.classList.remove('is-select');
	          clone.value = Object.assign({}, rule.value);
	          clone.value.name = name;
	          clone.querySelector('.js-rule-name').textContent = name;
	          clone.querySelector('.js-pathes').innerHTML = '';
	          [].concat(_toConsumableArray(rule.querySelectorAll('.js-path'))).forEach(function (el) {
	            var c = el.cloneNode(true);
	            c.classList.remove('is-select');
	            c.value = Object.assign({}, el.value);
	            clone.querySelector('.js-pathes').appendChild(c);
	            box.closest('.js-popup-body').pathFunctions.eventPath(c);
	          });
	          eventRule(clone);
	        })();
	      } else if (del) {
	        if (rule.classList.contains('is-select')) {
	          rule.classList.remove('is-select');
	          [].concat(_toConsumableArray(rule.querySelectorAll('.js-path'))).forEach(function (el) {
	            return el.classList.remove('is-select');
	          });
	          clearForm();
	        }

	        rule.classList.add('is-deleted');

	        rule._deleteTimeout = setTimeout(function () {
	          rule.parentNode.removeChild(rule);
	        }, 5000);

	        rule.querySelector('.js-rule-undo').addEventListener('click', function () {
	          clearTimeout(rule._deleteTimeout);
	          setTimeout(function () {
	            return rule.classList.remove('is-deleted');
	          }, 300);
	        });
	      } else if (item) {
	        checkSelect = true;

	        showForm();
	        clearForm();

	        [].concat(_toConsumableArray(box.querySelectorAll('.js-path'))).forEach(function (el) {
	          return el.classList.remove('is-select');
	        });
	        [].concat(_toConsumableArray(box.querySelectorAll('.js-rule'))).forEach(function (el) {
	          return el.classList.remove('is-select');
	        });
	        rule.classList.add('is-select');

	        ruleName.value = rule.value.name || '';

	        if (rule.value.checkbox === 'off') {
	          ruleStatus.classList.add('is-stoped');
	        }

	        rule.value.rules.forEach(function (i, index) {
	          ruleAddList.setValue(i.name);

	          var line = ruleBox.querySelectorAll('.js-rule-line')[index];
	          var conditionList = line.querySelector('.js-rule-condition');

	          if (i.condition && conditionList) {
	            conditionList.setValue(i.condition);
	          }

	          if (i.set) {
	            line.querySelector('.js-rule-checklist').updateValue(i.set);
	          }
	        });

	        checkSelect = false;
	      }
	    });
	  }

	  function createRule(name, obj) {
	    var data = obj || {};
	    var ruleElement = document.createElement('div');
	    var newName = name || 'Rule ' + defaultRuleCount;

	    ruleElement.className = 'cc__element is-select js-rule';
	    ruleElement.innerHTML = '\n      <div class="cc__element-item js-rule-item">\n        <div class="cc__element-name js-rule-name">' + newName + '</div>\n        <div class="cc__element-up js-rule-up"></div>\n        <div class="cc__element-down js-rule-down"></div>\n        <div class="cc__element-copy js-rule-copy"></div>\n        <div class="cc__element-delete js-rule-delete"></div>\n        <div class="cc__element-undo js-rule-undo"><i class="fa fa-undo"></i>Undo</div>\n      </div>\n      <div class="cc__left-wrap">\n        <div class="js-pathes"></div>\n        <div class="cc__added"><span class="js-path-add">+ Add new Path</span></div>\n      </div>';

	    allRules.appendChild(ruleElement);

	    if (obj) {
	      ruleElement.classList.remove('is-select');
	    }

	    ruleElement.value = {
	      name: newName,
	      rules: [],
	      checkbox: data.checkbox || 'on',
	      hash: data.hash || null
	    };

	    if (data.checkbox === 'off') {
	      ruleElement.classList.add('is-stoped');
	    }

	    if (typeof data.obj === 'string') {
	      var objRules = JSON.parse(data.obj);

	      for (var i in objRules) {
	        if (objRules.hasOwnProperty(i)) {
	          (function () {
	            var o = { name: i };

	            if (objRules[i].checkbox) {
	              o.condition = objRules[i].checkbox;
	            }

	            if (objRules[i].value) {
	              if (Array.isArray(objRules[i].value)) {
	                o.set = {};

	                objRules[i].value.forEach(function (j) {
	                  o.set[j] = true;
	                });
	              } else if (objRules[i].value && _typeof(objRules[i].value) === 'object') {
	                o.set = {};

	                var _loop = function _loop(j) {
	                  if (objRules[i].value.hasOwnProperty(j)) {
	                    if (objRules[i].value[j] === 'select all') {
	                      o.set[j] = 'select all';
	                    } else if (Array.isArray(objRules[i].value[j])) {
	                      o.set[j] = {};

	                      objRules[i].value[j].forEach(function (h) {
	                        o.set[j][h] = true;
	                      });
	                    }
	                  }
	                };

	                for (var j in objRules[i].value) {
	                  _loop(j);
	                }
	              }
	            }

	            ruleElement.value.rules.push(o);
	          })();
	        }
	      }
	    }

	    eventRule(ruleElement);

	    if (!name) {
	      ruleName.value = newName;
	    }

	    defaultRuleCount++;
	  }

	  function showForm() {
	    pathBox.style.display = 'none';
	    ruleBox.style.display = '';
	  }

	  function clearForm() {
	    ruleName.value = '';
	    ruleStatus.classList.remove('is-stoped');
	    [].concat(_toConsumableArray(ruleBox.querySelectorAll('.js-rule-line'))).forEach(function (el) {
	      return el.parentNode.removeChild(el);
	    });
	    ruleAddList.unsetDisabled();
	    ruleName.focus();
	  }

	  box.addEventListener('click', function (event) {
	    var addPath = event.target.closest('.js-rule-add');

	    if (addPath) {
	      showForm();
	      clearForm();
	      [].concat(_toConsumableArray(box.querySelectorAll('.js-path'))).forEach(function (el) {
	        return el.classList.remove('is-select');
	      });
	      [].concat(_toConsumableArray(box.querySelectorAll('.js-rule'))).forEach(function (el) {
	        return el.classList.remove('is-select');
	      });
	      createRule();
	    }
	  });

	  ruleName.addEventListener('change', function () {
	    var value = ruleName.value;
	    updateRule({
	      field: 'name',
	      value: value
	    });
	  });

	  ruleStatus.addEventListener('click', function () {
	    ruleStatus.classList.toggle('is-stoped');
	    updateRule({
	      field: 'status',
	      value: ruleStatus.classList.contains('is-stoped') ? 'off' : 'on'
	    });
	  });

	  function fillingLine(line, value) {
	    line.innerHTML = '';

	    line.innerHTML += '\n      <div class="cc__col cc__col-180">\n        <div class="list js-list js-rule-list">\n          <div class="list__wrap">\n            <div class="list__value js-list-value"></div>\n            <div class="list__dropdown">\n              <div class="list__items js-list-items"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    ';

	    if (__RULES__[value].conditions) {
	      line.innerHTML += '\n        <div class="cc__col cc__col-120">\n          <div class="list js-list js-rule-condition">\n            <div class="list__wrap">\n              <div class="list__value js-list-value"></div>\n              <div class="list__dropdown">\n                <div class="list__items js-list-items"></div>\n              </div>\n            </div>\n          </div>\n        </div>';
	    }

	    line.innerHTML += '\n      <div class="cc__col">\n        <div class="checklist js-checklist js-rule-checklist"></div>\n      </div>';

	    line.innerHTML += '\n      <div class="cc__col cc__col-50 cc__col-pad">\n        <div class="cc__clear js-rule-clear"></div>\n      </div>';

	    var list = line.querySelector('.js-rule-list');
	    var condition = line.querySelector('.js-rule-condition');
	    var checklist = line.querySelector('.js-rule-checklist');
	    var clear = line.querySelector('.js-rule-clear');
	    var position = [].concat(_toConsumableArray(ruleBox.querySelectorAll('.js-rule-line'))).indexOf(line);

	    updateRule({
	      field: 'rule',
	      value: value,
	      position: position
	    });

	    list.querySelector('.js-list-items').innerHTML = ruleAddList.querySelector('.js-list-items').innerHTML;
	    (0, _listEvent2.default)(list);
	    list.setValue(value);

	    list.addEventListener('change', function () {
	      var lists = ruleBox.querySelectorAll('.js-rule-line .js-rule-list');

	      ruleAddList.unsetDisabled(list.oldValue);
	      ruleAddList.setDisabled(list.value);

	      [].concat(_toConsumableArray(lists)).forEach(function (el) {
	        return el.unsetDisabled(list.oldValue);
	      });
	      [].concat(_toConsumableArray(lists)).forEach(function (el) {
	        return el.setDisabled(list.value);
	      });

	      fillingLine(line, list.value);
	    });

	    if (condition) {
	      (function () {
	        var conditionItems = condition.querySelector('.js-list-items');

	        __RULES__[value].conditions.forEach(function (item) {
	          conditionItems.innerHTML += '<div class="list__item js-list-item" data-value="' + item.slug + '">' + item.name + '</div>';
	        });

	        (0, _listEvent2.default)(condition);

	        condition.addEventListener('change', function () {
	          updateRule({
	            field: 'condition',
	            value: condition.value,
	            position: position
	          });
	        });

	        condition.setValue(__RULES__[value].conditions[0].slug);
	      })();
	    }

	    (0, _checklistEvent2.default)(checklist, __RULES__[value].childs);
	    checklist.addEventListener('change', function () {
	      updateRule({
	        field: 'set',
	        value: checklist.value,
	        position: position
	      });
	    });

	    clear.addEventListener('click', function () {
	      ruleAddList.unsetDisabled(list.value);
	      line.parentNode.removeChild(line);
	    });
	  }

	  function addLine() {
	    var lists = ruleBox.querySelectorAll('.js-rule-line .js-rule-list');
	    var value = ruleAddList.value;

	    if (!value) {
	      return;
	    }

	    ruleAddList.updateValue();
	    ruleAddList.setDisabled(value);
	    [].concat(_toConsumableArray(lists)).forEach(function (el) {
	      return el.setDisabled(value);
	    });

	    var newWrapList = document.createElement('div');
	    newWrapList.className = 'cc__line js-rule-line';
	    ruleAddWrap._insertBefore(newWrapList);

	    fillingLine(newWrapList, value);
	  }

	  (function () {
	    var items = ruleAddList.querySelector('.js-list-items');

	    for (var i in __RULES__) {
	      if (__RULES__.hasOwnProperty(i)) {
	        items.innerHTML += '<div class="list__item js-list-item" data-value="' + i + '">' + __RULES__[i].name + '</div>';
	      }
	    }

	    (0, _listEvent2.default)(ruleAddList);

	    ruleAddList.addEventListener('change', addLine);
	  })();

	  return {
	    createRule: createRule
	  };
	};

	var _qs = __webpack_require__(16);

	var _qs2 = _interopRequireDefault(_qs);

	var _listEvent = __webpack_require__(57);

	var _listEvent2 = _interopRequireDefault(_listEvent);

	var _checklistEvent = __webpack_require__(90);

	var _checklistEvent2 = _interopRequireDefault(_checklistEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var __RULES__ = {
	  device_type: {
	    name: 'Device type',
	    childs: {
	      type: 'line',
	      data: ['desktop', 'smartphone', 'feature phone', 'tablet', 'phablet', 'tv', 'smart display']
	    },
	    conditions: [{
	      name: 'Is any of',
	      slug: 'on'
	    }, {
	      name: 'Is not any of',
	      slug: 'off'
	    }]
	  },
	  os: {
	    name: 'Operating system',
	    childs: {
	      type: 'line',
	      data: ['AIX', 'Android', 'AmigaOS', 'Apple TV', 'Arch Linux', 'BackTrack', 'Bada', 'BeOS', 'BlackBerry OS', 'BlackBerry Tablet OS', 'Brew', 'CentOS', 'Chrome OS', 'CyanogenMod', 'Debian', 'DragonFly', 'Fedora', 'Firefox OS', 'FreeBSD', 'Gentoo', 'Google TV', 'HP-UX', 'Haiku OS', 'IRIX', 'Inferno', 'Knoppix', 'Kubuntu', 'GNU/Linux', 'Lubuntu', 'VectorLinux', 'Mac', 'Mandriva', 'MeeGo', 'MocorDroid', 'Mint', 'MildWild', 'MorphOS', 'NetBSD', 'Nintendo', 'Nintendo Mobile', 'OS/2', 'OSF1', 'OpenBSD', 'PlayStation Portable', 'PlayStation', 'Red Hat', 'RISC OS', 'RazoDroiD', 'Sabayon', 'SUSE', 'Sailfish OS', 'Slackware', 'Solaris', 'Syllable', 'Symbian', 'Symbian OS', 'Symbian OS Series 40', 'Symbian OS Series 60', 'Symbian^3', 'Tizen', 'Ubuntu', 'WebTV', 'Windows', 'Windows CE', 'Windows Mobile', 'Windows Phone', 'Windows RT', 'Xbox', 'Xubuntu', 'YunOs', 'iOS', 'palmOS', 'webOS']
	    },
	    conditions: [{
	      name: 'Is any of',
	      slug: 'on'
	    }, {
	      name: 'Is not any of',
	      slug: 'off'
	    }]
	  },
	  brand_and_model: {
	    name: 'Brand and Model',
	    conditions: [{
	      name: 'Is any of',
	      slug: 'is_any_of'
	    }, {
	      name: 'Is not any of',
	      slug: 'is_not_any_of'
	    }, {
	      name: 'Contain',
	      slug: 'contain'
	    }, {
	      name: 'Not contain',
	      slug: 'not_contain'
	    }],
	    childs: {
	      type: 'tree',
	      search_link: '/rules/brand_and_model/search',
	      childs_link: '/rules/model/list',
	      childs_key: 'brand'
	    }
	  },
	  week: {
	    name: 'Days of week',
	    childs: {
	      type: 'line',
	      data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] }
	  },
	  ips: {
	    name: 'IP addresses',
	    childs: {
	      type: 'normal'
	    }
	  },
	  isp: {
	    name: 'ISP',
	    childs: {
	      type: 'line',
	      search_link: '/rules/isp/search'
	    },
	    conditions: [{
	      name: 'Is any of',
	      slug: 'on'
	    }, {
	      name: 'Is not any of',
	      slug: 'off'
	    }]
	  },
	  country: {
	    name: 'Country',
	    childs: {
	      type: 'line',
	      data: [{ value: 'A1', name: 'Anonymous Proxy' }, { value: 'A2', name: 'Satellite Provider' }, { value: 'O1', name: 'Other Country' }, { value: 'AD', name: 'Andorra' }, { value: 'AE', name: 'United Arab Emirates' }, { value: 'AF', name: 'Afghanistan' }, { value: 'AG', name: 'Antigua and Barbuda' }, { value: 'AI', name: 'Anguilla' }, { value: 'AL', name: 'Albania' }, { value: 'AM', name: 'Armenia' }, { value: 'AO', name: 'Angola' }, { value: 'AP', name: 'Asia/Pacific Region' }, { value: 'AQ', name: 'Antarctica' }, { value: 'AR', name: 'Argentina' }, { value: 'AS', name: 'American Samoa' }, { value: 'AT', name: 'Austria' }, { value: 'AU', name: 'Australia' }, { value: 'AW', name: 'Aruba' }, { value: 'AX', name: 'Aland Islands' }, { value: 'AZ', name: 'Azerbaijan' }, { value: 'BA', name: 'Bosnia and Herzegovina' }, { value: 'BB', name: 'Barbados' }, { value: 'BD', name: 'Bangladesh' }, { value: 'BE', name: 'Belgium' }, { value: 'BF', name: 'Burkina Faso' }, { value: 'BG', name: 'Bulgaria' }, { value: 'BH', name: 'Bahrain' }, { value: 'BI', name: 'Burundi' }, { value: 'BJ', name: 'Benin' }, { value: 'BL', name: 'Saint Bartelemey' }, { value: 'BM', name: 'Bermuda' }, { value: 'BN', name: 'Brunei Darussalam' }, { value: 'BO', name: 'Bolivia' }, { value: 'BQ', name: 'Bonaire, Saint Eustatius and Saba' }, { value: 'BR', name: 'Brazil' }, { value: 'BS', name: 'Bahamas' }, { value: 'BT', name: 'Bhutan' }, { value: 'BV', name: 'Bouvet Island' }, { value: 'BW', name: 'Botswana' }, { value: 'BY', name: 'Belarus' }, { value: 'BZ', name: 'Belize' }, { value: 'CA', name: 'Canada' }, { value: 'CC', name: 'Cocos (Keeling) Islands' }, { value: 'CD', name: 'Congo, The Democratic Republic of the' }, { value: 'CF', name: 'Central African Republic' }, { value: 'CG', name: 'Congo' }, { value: 'CH', name: 'Switzerland' }, { value: 'CI', name: 'Cote d\'Ivoire' }, { value: 'CK', name: 'Cook Islands' }, { value: 'CL', name: 'Chile' }, { value: 'CM', name: 'Cameroon' }, { value: 'CN', name: 'China' }, { value: 'CO', name: 'Colombia' }, { value: 'CR', name: 'Costa Rica' }, { value: 'CU', name: 'Cuba' }, { value: 'CV', name: 'Cape Verde' }, { value: 'CW', name: 'Curacao' }, { value: 'CX', name: 'Christmas Island' }, { value: 'CY', name: 'Cyprus' }, { value: 'CZ', name: 'Czech Republic' }, { value: 'DE', name: 'Germany' }, { value: 'DJ', name: 'Djibouti' }, { value: 'DK', name: 'Denmark' }, { value: 'DM', name: 'Dominica' }, { value: 'DO', name: 'Dominican Republic' }, { value: 'DZ', name: 'Algeria' }, { value: 'EC', name: 'Ecuador' }, { value: 'EE', name: 'Estonia' }, { value: 'EG', name: 'Egypt' }, { value: 'EH', name: 'Western Sahara' }, { value: 'ER', name: 'Eritrea' }, { value: 'ES', name: 'Spain' }, { value: 'ET', name: 'Ethiopia' }, { value: 'EU', name: 'Europe' }, { value: 'FI', name: 'Finland' }, { value: 'FJ', name: 'Fiji' }, { value: 'FK', name: 'Falkland Islands (Malvinas)' }, { value: 'FM', name: 'Micronesia, Federated States of' }, { value: 'FO', name: 'Faroe Islands' }, { value: 'FR', name: 'France' }, { value: 'GA', name: 'Gabon' }, { value: 'GB', name: 'United Kingdom' }, { value: 'GD', name: 'Grenada' }, { value: 'GE', name: 'Georgia' }, { value: 'GF', name: 'French Guiana' }, { value: 'GG', name: 'Guernsey' }, { value: 'GH', name: 'Ghana' }, { value: 'GI', name: 'Gibraltar' }, { value: 'GL', name: 'Greenland' }, { value: 'GM', name: 'Gambia' }, { value: 'GN', name: 'Guinea' }, { value: 'GP', name: 'Guadeloupe' }, { value: 'GQ', name: 'Equatorial Guinea' }, { value: 'GR', name: 'Greece' }, { value: 'GS', name: 'South Georgia and the South Sandwich Islands' }, { value: 'GT', name: 'Guatemala' }, { value: 'GU', name: 'Guam' }, { value: 'GW', name: 'Guinea-Bissau' }, { value: 'GY', name: 'Guyana' }, { value: 'HK', name: 'Hong Kong' }, { value: 'HM', name: 'Heard Island and McDonald Islands' }, { value: 'HN', name: 'Honduras' }, { value: 'HR', name: 'Croatia' }, { value: 'HT', name: 'Haiti' }, { value: 'HU', name: 'Hungary' }, { value: 'ID', name: 'Indonesia' }, { value: 'IE', name: 'Ireland' }, { value: 'IL', name: 'Israel' }, { value: 'IM', name: 'Isle of Man' }, { value: 'IN', name: 'India' }, { value: 'IO', name: 'British Indian Ocean Territory' }, { value: 'IQ', name: 'Iraq' }, { value: 'IR', name: 'Iran, Islamic Republic of' }, { value: 'IS', name: 'Iceland' }, { value: 'IT', name: 'Italy' }, { value: 'JE', name: 'Jersey' }, { value: 'JM', name: 'Jamaica' }, { value: 'JO', name: 'Jordan' }, { value: 'JP', name: 'Japan' }, { value: 'KE', name: 'Kenya' }, { value: 'KG', name: 'Kyrgyzstan' }, { value: 'KH', name: 'Cambodia' }, { value: 'KI', name: 'Kiribati' }, { value: 'KM', name: 'Comoros' }, { value: 'KN', name: 'Saint Kitts and Nevis' }, { value: 'KP', name: 'Korea, Democratic People\'s Republic of' }, { value: 'KR', name: 'Korea, Republic of' }, { value: 'KW', name: 'Kuwait' }, { value: 'KY', name: 'Cayman Islands' }, { value: 'KZ', name: 'Kazakhstan' }, { value: 'LA', name: 'Lao People\'s Democratic Republic' }, { value: 'LB', name: 'Lebanon' }, { value: 'LC', name: 'Saint Lucia' }, { value: 'LI', name: 'Liechtenstein' }, { value: 'LK', name: 'Sri Lanka' }, { value: 'LR', name: 'Liberia' }, { value: 'LS', name: 'Lesotho' }, { value: 'LT', name: 'Lithuania' }, { value: 'LU', name: 'Luxembourg' }, { value: 'LV', name: 'Latvia' }, { value: 'LY', name: 'Libyan Arab Jamahiriya' }, { value: 'MA', name: 'Morocco' }, { value: 'MC', name: 'Monaco' }, { value: 'MD', name: 'Moldova, Republic of' }, { value: 'ME', name: 'Montenegro' }, { value: 'MF', name: 'Saint Martin' }, { value: 'MG', name: 'Madagascar' }, { value: 'MH', name: 'Marshall Islands' }, { value: 'MK', name: 'Macedonia' }, { value: 'ML', name: 'Mali' }, { value: 'MM', name: 'Myanmar' }, { value: 'MN', name: 'Mongolia' }, { value: 'MO', name: 'Macao' }, { value: 'MP', name: 'Northern Mariana Islands' }, { value: 'MQ', name: 'Martinique' }, { value: 'MR', name: 'Mauritania' }, { value: 'MS', name: 'Montserrat' }, { value: 'MT', name: 'Malta' }, { value: 'MU', name: 'Mauritius' }, { value: 'MV', name: 'Maldives' }, { value: 'MW', name: 'Malawi' }, { value: 'MX', name: 'Mexico' }, { value: 'MY', name: 'Malaysia' }, { value: 'MZ', name: 'Mozambique' }, { value: 'NA', name: 'Namibia' }, { value: 'NC', name: 'New Caledonia' }, { value: 'NE', name: 'Niger' }, { value: 'NF', name: 'Norfolk Island' }, { value: 'NG', name: 'Nigeria' }, { value: 'NI', name: 'Nicaragua' }, { value: 'NL', name: 'Netherlands' }, { value: 'NO', name: 'Norway' }, { value: 'NP', name: 'Nepal' }, { value: 'NR', name: 'Nauru' }, { value: 'NU', name: 'Niue' }, { value: 'NZ', name: 'New Zealand' }, { value: 'OM', name: 'Oman' }, { value: 'PA', name: 'Panama' }, { value: 'PE', name: 'Peru' }, { value: 'PF', name: 'French Polynesia' }, { value: 'PG', name: 'Papua New Guinea' }, { value: 'PH', name: 'Philippines' }, { value: 'PK', name: 'Pakistan' }, { value: 'PL', name: 'Poland' }, { value: 'PM', name: 'Saint Pierre and Miquelon' }, { value: 'PN', name: 'Pitcairn' }, { value: 'PR', name: 'Puerto Rico' }, { value: 'PS', name: 'Palestinian Territory' }, { value: 'PT', name: 'Portugal' }, { value: 'PW', name: 'Palau' }, { value: 'PY', name: 'Paraguay' }, { value: 'QA', name: 'Qatar' }, { value: 'RE', name: 'Reunion' }, { value: 'RO', name: 'Romania' }, { value: 'RS', name: 'Serbia' }, { value: 'RU', name: 'Russian Federation' }, { value: 'RW', name: 'Rwanda' }, { value: 'SA', name: 'Saudi Arabia' }, { value: 'SB', name: 'Solomon Islands' }, { value: 'SC', name: 'Seychelles' }, { value: 'SD', name: 'Sudan' }, { value: 'SE', name: 'Sweden' }, { value: 'SG', name: 'Singapore' }, { value: 'SH', name: 'Saint Helena' }, { value: 'SI', name: 'Slovenia' }, { value: 'SJ', name: 'Svalbard and Jan Mayen' }, { value: 'SK', name: 'Slovakia' }, { value: 'SL', name: 'Sierra Leone' }, { value: 'SM', name: 'San Marino' }, { value: 'SN', name: 'Senegal' }, { value: 'SO', name: 'Somalia' }, { value: 'SR', name: 'Suriname' }, { value: 'SS', name: 'South Sudan' }, { value: 'ST', name: 'Sao Tome and Principe' }, { value: 'SV', name: 'El Salvador' }, { value: 'SX', name: 'Sint Maarten' }, { value: 'SY', name: 'Syrian Arab Republic' }, { value: 'SZ', name: 'Swaziland' }, { value: 'TC', name: 'Turks and Caicos Islands' }, { value: 'TD', name: 'Chad' }, { value: 'TF', name: 'French Southern Territories' }, { value: 'TG', name: 'Togo' }, { value: 'TH', name: 'Thailand' }, { value: 'TJ', name: 'Tajikistan' }, { value: 'TK', name: 'Tokelau' }, { value: 'TL', name: 'Timor-Leste' }, { value: 'TM', name: 'Turkmenistan' }, { value: 'TN', name: 'Tunisia' }, { value: 'TO', name: 'Tonga' }, { value: 'TR', name: 'Turkey' }, { value: 'TT', name: 'Trinidad and Tobago' }, { value: 'TV', name: 'Tuvalu' }, { value: 'TW', name: 'Taiwan' }, { value: 'TZ', name: 'Tanzania, United Republic of' }, { value: 'UA', name: 'Ukraine' }, { value: 'UG', name: 'Uganda' }, { value: 'UM', name: 'United States Minor Outlying Islands' }, { value: 'US', name: 'United States' }, { value: 'UY', name: 'Uruguay' }, { value: 'UZ', name: 'Uzbekistan' }, { value: 'VA', name: 'Holy See (Vatican City State)' }, { value: 'VC', name: 'Saint Vincent and the Grenadines' }, { value: 'VE', name: 'Venezuela' }, { value: 'VG', name: 'Virgin Islands, British' }, { value: 'VI', name: 'Virgin Islands, U.S.' }, { value: 'VN', name: 'Vietnam' }, { value: 'VU', name: 'Vanuatu' }, { value: 'WF', name: 'Wallis and Futuna' }, { value: 'WS', name: 'Samoa' }, { value: 'YE', name: 'Yemen' }, { value: 'YT', name: 'Mayotte' }, { value: 'ZA', name: 'South Africa' }, { value: 'ZM', name: 'Zambia' }, { value: 'ZW', name: 'Zimbabwe' }]
	    },
	    conditions: [{
	      name: 'Is any of',
	      slug: 'on'
	    }, {
	      name: 'Is not any of',
	      slug: 'off'
	    }]
	  },
	  browser: {
	    name: 'Browser',
	    childs: {
	      type: 'line',
	      data: ['360 Phone Browser', '360 Browser', 'Avant Browser', 'ABrowse', 'ANT Fresco', 'ANTGalio', 'Amaya', 'Amigo', 'Android Browser', 'Arora', 'Amiga Voyager', 'Amiga Aweb', 'Atomic Web Browser', 'BlackBerry Browser', 'Baidu Browser', 'Baidu Spark', 'Beonex', 'Bunjalloo', 'Brave', 'BrowseX', 'Camino', 'Coc Coc', 'Comodo Dragon', 'Charon', 'Chrome Frame', 'Chrome', 'Chrome Mobile iOS', 'Conkeror', 'Chrome Mobile', 'CoolNovo', 'CometBird', 'ChromePlus', 'Chromium', 'Cheshire', 'Deepnet Explorer', 'Dolphin', 'Dillo', 'Elinks', 'Element Browser', 'Epiphany', 'Espial TV Browser', 'Firebird', 'Fluid', 'Fennec', 'Firefox', 'Flock', 'Fireweb', 'Fireweb Navigator', 'Galeon', 'Google Earth', 'HotJava', 'Iceape', 'IBrowse', 'iCab', 'IceDragon', 'Iceweasel', 'Internet Explorer', 'IE Mobile', 'Iron', 'Jasmine', 'Jig Browser', 'Kindle Browser', 'K-meleon', 'Konqueror', 'Kapiko', 'Kylo', 'Kazehakase', 'Liebao', 'LG Browser', 'Links', 'LuaKit', 'Lunascape', 'Lynx', 'MicroB', 'NCSA Mosaic', 'Mercury', 'Mobile Safari', 'Midori', 'MIUI Browser', 'Mobile Silk', 'Maxthon', 'Nokia Browser', 'Nokia OSS Browser', 'Nokia Ovi Browser', 'NetFront', 'NetFront Life', 'NetPositive', 'Netscape', 'Obigo', 'Odyssey Web Browser', 'Off By One', 'ONE Browser', 'Opera Mini', 'Opera Mobile', 'Opera', 'Opera Next', 'Oregano', 'Openwave Mobile Browser', 'OmniWeb', 'Otter Browser', 'Palm Blazer', 'Pale Moon', 'Palm Pre', 'Puffin', 'Palm WebPro', 'Palmscape', 'Phoenix', 'Polaris', 'Microsoft Edge', 'QQ Browser', 'Rekonq', 'RockMelt', 'Samsung Browser', 'Sailfish Browser', 'SEMC-Browser', 'Sogou Explorer', 'Safari', 'Shiira', 'Skyfire', 'Seraphic Sraf', 'Sleipnir', 'SeaMonkey', 'Snowshoe', 'Sunrise', 'SuperBird', 'Swiftfox', 'Tizen Browser', 'TweakStyle', 'UC Browser', 'Vivaldi', 'Vision Mobile Browser', 'WebPositive', 'wOSBrowser', 'WeTab Browser', 'Yandex Browser', 'Xiino']
	    },
	    conditions: [{
	      name: 'Is any of',
	      slug: 'is_any_of'
	    }, {
	      name: 'Is not any of',
	      slug: 'is_not_any_of'
	    }]
	  },
	  browser_language: {
	    name: 'Browser language',
	    childs: {
	      type: 'normal'
	    },
	    conditions: [{
	      name: 'Is any of',
	      slug: 'on'
	    }, {
	      name: 'Is not any of',
	      slug: 'off'
	    }]
	  },
	  get_param: {
	    name: 'GET param',
	    childs: {
	      type: 'normal'
	    },
	    conditions: [{
	      name: 'Contain',
	      slug: 'contain'
	    }, {
	      name: 'Not contain',
	      slug: 'not contain'
	    }]
	  },
	  user_agent: {
	    name: 'User agent',
	    childs: {
	      type: 'normal'
	    },
	    conditions: [{
	      name: 'Contain',
	      slug: 'contain'
	    }, {
	      name: 'Not contain',
	      slug: 'not contain'
	    }, {
	      name: 'Equal',
	      slug: 'equal'
	    }, {
	      name: 'Not equal',
	      slug: 'not equal'
	    }]
	  },
	  referer: {
	    name: 'Referer',
	    childs: {
	      type: 'normal'
	    },
	    conditions: [{
	      name: 'Contain',
	      slug: 'contain'
	    }, {
	      name: 'Not contain',
	      slug: 'not contain'
	    }, {
	      name: 'Equal',
	      slug: 'equal'
	    }, {
	      name: 'Not equal',
	      slug: 'not equal'
	    }]
	  }
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = function (list, obj) {
	  list.innerHTML = '\n    <div class="checklist__value js-checklist-value">\n      <input class="checklist__input js-checklist-input" type="text">\n    </div>';

	  var type = obj.type;
	  var searchLink = obj.search_link;
	  var childsLink = obj.childs_link;
	  var childsKey = obj.childs_key;
	  var childsData = obj.data;

	  var isFetch = false;
	  var isTree = false;
	  var isLine = false;
	  var isNormal = false;
	  var loading = false;
	  var timeSearch = void 0;

	  if (type !== 'normal') {
	    if (searchLink) {
	      isFetch = true;
	      if (!childsLink || !childsKey) {
	        type = 'line';
	      }
	    } else {
	      if (Array.isArray(childsData)) {
	        type = 'line';
	      } else if (!childsData) {
	        type = 'normal';
	      }
	    }

	    if (type === 'tree') {
	      isTree = true;
	    } else {
	      isLine = true;
	    }
	  } else {
	    isNormal = true;
	  }

	  if (!isNormal) {
	    list.innerHTML += '\n      <div class="checklist__dropdown">\n        <div class="checklist__items js-checklist-items"></div>\n      </div>';
	  }

	  var listValue = list.querySelector('.js-checklist-value');
	  var listInput = list.querySelector('.js-checklist-input');
	  var listItems = list.querySelector('.js-checklist-items');

	  list.value = list.value || {};

	  listValue.addEventListener('click', function () {
	    if (!list.classList.contains('is-open')) {
	      open();
	    } else {
	      listValue.classList.add('is-focus');
	      listInput.focus();
	    }
	  });

	  if (!isNormal) {
	    listInput.addEventListener('keyup', filterItems);
	    listInput.addEventListener('paste', filterItems);
	  } else {
	    listInput.addEventListener('keyup', function (event) {
	      var code = event.keyCode;

	      if (code === 13) {
	        var val = listInput.value.trim();

	        if (val) {
	          val = val.split(',');
	          val.forEach(function (v) {
	            var _v = v.trim();
	            list.value[_v] = true;
	          });

	          listInput.value = '';
	          drawTags();
	        }
	      }
	    });
	  }

	  list.addEventListener('click', function (event) {
	    var item = event.target.closest('.js-checklist-item');
	    var del = event.target.closest('.js-checklist-tag-delete');

	    if (item && !loading) {
	      setValue(item);
	      listInput.value = '';
	      filterItems(null, true);
	    }

	    if (del && !loading) {
	      deleteTag(del);
	      close();
	    }
	  });

	  if (!isFetch && childsData) {
	    drawItems(childsData);
	  }

	  drawTags(true);

	  function open() {
	    window.addEventListener('click', clickWindow);
	    window.addEventListener('keyup', clickWindow);
	    list.classList.add('is-open');
	    listInput.value = '';
	    listValue.classList.add('is-focus');
	    listInput.focus();

	    if (!isNormal) {
	      updateItems();
	    }
	  }

	  function clickWindow(event) {
	    var closest = event.target.closest('.js-checklist');
	    if (!closest || closest !== list) {
	      close();
	    }
	  }

	  function keyupWindow(event) {
	    var closest = event.target.closest('.js-checklist-input');
	    if (event.target !== listInput) {
	      close();
	    }
	  }

	  function close() {
	    window.removeEventListener('click', clickWindow);
	    window.removeEventListener('keyup', keyupWindow);
	    list.classList.remove('is-open');
	    listValue.classList.remove('is-focus');
	    listInput.value = '';
	    listInput.blur();
	  }

	  function drawItems(data) {
	    listItems.innerHTML = '';

	    if (Array.isArray(data)) {
	      data.forEach(function (item) {
	        var name = void 0;
	        var value = void 0;

	        if (typeof item === 'string') {
	          name = item;
	          value = item;
	        } else if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object') {
	          value = item.value || item.id;
	          name = item.name || value;
	        }

	        var classItem = list.value[value] ? ' is-select' : '';
	        listItems.innerHTML += '<div\n          class="checklist__item js-checklist-item' + classItem + '"\n          data-value="' + value + '">\n          ' + name + '\n          </div>';
	      });
	    } else {
	      var _loop = function _loop(item) {
	        if (data.hasOwnProperty(item)) {
	          var classItem = list.value[item] && list.value[item] === 'select all' ? ' is-select' : '';
	          listItems.innerHTML += '<div\n            class="checklist__item js-checklist-item' + classItem + '"\n            data-value="' + item + '">\n            ' + item + '\n            </div>';

	          var childs = data[item];
	          var html = '';

	          html += '<div class="checklist__items-group js-checklist-items-group">';

	          if (Array.isArray(childs)) {
	            childs.forEach(function (child) {
	              var name = void 0;
	              var value = void 0;

	              if (typeof child === 'string') {
	                name = child;
	                value = child;
	              } else if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) === 'object') {
	                value = child.value;
	                name = child.name || value;
	              }

	              var classChild = list.value[item] && (list.value[item][value] || list.value[item] === 'select all') ? ' is-select' : '';
	              html += '<div\n                class="checklist__item js-checklist-item' + classChild + '"\n                data-value="' + value + '"\n                data-parent-value="' + item + '">\n                ' + name + '\n                </div>';
	            });
	          }

	          html += '</div>';

	          listItems.innerHTML += html;
	        }
	      };

	      for (var item in data) {
	        _loop(item);
	      }
	    }
	  }

	  function updateItems() {
	    var val = listInput.value;

	    if (isFetch) {
	      if (!val || val.length < 3) {
	        listItems.innerHTML = '';
	        return;
	      }

	      (0, _fetchApi.fetchData)(searchLink, { search: val }, false).then(function (res) {
	        drawItems(res.data);
	      }).catch(function (err) {
	        throw new Error(err);
	      });
	    } else if (isTree || isLine) {
	      var items = listItems.querySelectorAll('.js-checklist-item');

	      if (!val) {
	        [].concat(_toConsumableArray(items)).forEach(function (item) {
	          item.style.display = '';
	        });
	      } else {
	        (function () {
	          var reg = new RegExp(val, 'i');

	          [].concat(_toConsumableArray(items)).forEach(function (item) {
	            if (item.textContent.search(reg) === -1) {
	              item.style.display = 'none';
	            } else {
	              item.style.display = '';
	            }
	          });
	        })();
	      }
	    }
	  }

	  function filterItems(event, instantly) {
	    if (type === 'line' && searchLink) {
	      if (event.keyCode === 13 || event.type === 'paste') {
	        var val = listInput.value.split(',');

	        if (val.length > 1) {
	          if (timeSearch) {
	            clearTimeout(timeSearch);
	          }

	          val = val.map(function (i) {
	            return i.trim();
	          });

	          (0, _fetchApi.fetchData)(searchLink, { search: val }).then(function (res) {
	            if (res.data && Array.isArray(res.data)) {
	              res.data.forEach(function (v) {
	                list.value[v] = true;
	              });
	            }

	            listInput.value = '';
	            drawTags();
	          }).catch(function (err) {
	            throw new Error(err);
	          });

	          return;
	        }
	      }
	    }

	    if (timeSearch) {
	      clearTimeout(timeSearch);
	    }

	    var timeout = isFetch ? 300 : 100;

	    if (instantly) {
	      timeout = 0;
	    }

	    timeSearch = setTimeout(updateItems, timeout);
	  }

	  function drawTag(label, value, parentValue) {
	    var span = document.createElement('span');
	    span.className = 'js-checklist-tag';
	    span.textContent = label;
	    span.dataset.value = value || label;

	    if (parentValue) {
	      span.dataset.parentValue = parentValue;
	    }

	    var del = document.createElement('i');
	    del.className = 'js-checklist-tag-delete';
	    span.appendChild(del);

	    listInput._insertBefore(span);
	  }

	  function drawTags(isInit) {
	    [].concat(_toConsumableArray(listValue.querySelectorAll('.js-checklist-tag'))).forEach(function (el) {
	      return el.parentNode.removeChild(el);
	    });

	    var _loop2 = function _loop2(i) {
	      if (list.value.hasOwnProperty(i) && list.value[i]) {
	        var st = list.value[i];

	        if (isTree) {
	          if (st === 'select all') {
	            drawTag('All ' + i, null, i);
	          } else if ((typeof st === 'undefined' ? 'undefined' : _typeof(st)) === 'object') {
	            for (var j in st) {
	              if (st.hasOwnProperty(j) && st[j]) {
	                drawTag(j, j, i);
	              }
	            }
	          }
	        } else if (isLine || isFetch) {
	          var label = void 0;

	          [].concat(_toConsumableArray(listItems.querySelectorAll('.js-checklist-item'))).forEach(function (el) {
	            if (el.dataset.value === i) {
	              label = el.textContent;
	              return false;
	            }

	            return true;
	          });

	          label = label || i;

	          drawTag(label, i);
	        } else {
	          drawTag(i, i);
	        }
	      }
	    };

	    for (var i in list.value) {
	      _loop2(i);
	    }

	    if (!isInit) {
	      list.triggerEvent('change');
	    }

	    var tags = listValue.querySelectorAll('.js-checklist-tag');
	    if (tags.length) {
	      var lastTag = tags[tags.length - 1];
	      var width = listValue.getBoundingClientRect().right - lastTag.getBoundingClientRect().right - 5;

	      if (width > 150) {
	        listInput.style.width = width + 'px';
	      } else {
	        listInput.style.width = '';
	      }
	    } else {
	      listInput.style.width = '';
	    }
	  }

	  function deleteTag(del) {
	    var item = del.closest('.js-checklist-tag');
	    var childValue = void 0;
	    var value = item.dataset.value;

	    if (isTree) {
	      childValue = value;
	      value = item.dataset.parentValue;
	    }

	    if (!childValue) {
	      delete list.value[value];
	    } else {
	      delete list.value[value][childValue];
	    }

	    item.parentNode.removeChild(item);

	    if (!isFetch && !isNormal) {
	      [].concat(_toConsumableArray(listItems.querySelectorAll('.js-checklist-item'))).forEach(function (el) {
	        if (!childValue) {
	          if (!el.dataset.parentValue && el.dataset.value === value) {
	            el.classList.remove('is-select');
	          }
	        } else {
	          if (el.dataset.parentValue && el.dataset.value === childValue) {
	            el.classList.remove('is-select');
	          }
	        }
	      });
	    }

	    list.triggerEvent('change');
	  }

	  function setValue(item) {
	    var val = item.dataset.value;

	    if (item.dataset.parentValue) {
	      (function () {
	        var group = item.closest('.js-checklist-items-group');
	        var parentValue = item.dataset.parentValue;

	        if (list.value[parentValue] && list.value[parentValue] === 'select all') {
	          if (isFetch) {
	            loading = true;
	            (0, _fetchApi.fetchData)(childsLink, _defineProperty({}, childsKey, parentValue)).then(function (res) {
	              if (Array.isArray(res.data)) {
	                list.value[parentValue] = {};

	                res.data.forEach(function (i) {
	                  if (i !== val) {
	                    list.value[parentValue][i] = true;
	                  }
	                });

	                item.classList.remove('is-select');

	                var prev = group.previousSibling;
	                if (prev) {
	                  prev.classList.remove('is-select');
	                }
	              }

	              loading = false;
	              drawTags();
	            }).catch(function (err) {
	              throw new Error(err);
	            });
	          } else {
	            var prev = group.previousSibling;
	            if (prev) {
	              prev.classList.remove('is-select');
	            }

	            list.value[parentValue] = {};

	            [].concat(_toConsumableArray(group.querySelectorAll('.js-checklist-item'))).forEach(function (el) {
	              if (el !== item) {
	                list.value[parentValue][el.dataset.value] = true;
	              }
	            });

	            item.classList.remove('is-select');

	            drawTags();
	          }
	        } else {
	          list.value[parentValue] = list.value[parentValue] || {};

	          if (list.value[parentValue][val]) {
	            delete list.value[parentValue][val];
	            item.classList.remove('is-select');
	          } else {
	            list.value[parentValue][val] = true;
	            item.classList.add('is-select');
	          }

	          drawTags();
	        }
	      })();
	    } else {
	      if (isTree) {
	        if (list.value[val] === 'select all') {
	          delete list.value[val];
	          item.classList.remove('is-select');

	          var next = item.nextSibling;

	          if (next.classList.contains('js-checklist-items-group')) {
	            [].concat(_toConsumableArray(next.querySelectorAll('.js-checklist-item'))).forEach(function (el) {
	              return el.classList.remove('is-select');
	            });
	          }
	        } else {
	          list.value[val] = 'select all';
	          item.classList.add('is-select');

	          var _next = item.nextSibling;

	          if (_next.classList.contains('js-checklist-items-group')) {
	            [].concat(_toConsumableArray(_next.querySelectorAll('.js-checklist-item'))).forEach(function (el) {
	              return el.classList.add('is-select');
	            });
	          }
	        }
	      } else {
	        if (list.value[val]) {
	          delete list.value[val];
	          item.classList.remove('is-select');
	        } else {
	          list.value[val] = true;
	          item.classList.add('is-select');
	        }
	      }

	      drawTags();
	    }
	  }

	  list.updateValue = function (value) {
	    list.value = value;
	    drawTags(true);

	    if (childsData) {
	      [].concat(_toConsumableArray(listItems.querySelectorAll('.js-checklist-item'))).forEach(function (el) {
	        if (el.dataset.parentValue) {
	          if (list.value[el.dataset.parentValue] === 'select all' || list.value[el.dataset.parentValue] && list.value[el.dataset.parentValue][el.dataset.value]) {
	            el.classList.add('is-select');
	          } else {
	            el.classList.remove('is-select');
	          }
	        } else {
	          if (list.value[el.dataset.value]) {
	            el.classList.add('is-select');
	          } else {
	            el.classList.remove('is-select');
	          }
	        }
	      });
	    }
	  };
	};

	var _qs = __webpack_require__(16);

	var _qs2 = _interopRequireDefault(_qs);

	var _dateformat = __webpack_require__(62);

	var _dateformat2 = _interopRequireDefault(_dateformat);

	var _fieldName = __webpack_require__(66);

	var _fieldName2 = _interopRequireDefault(_fieldName);

	var _fetchApi = __webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (id, name) {
	  if (document.querySelector('.js-popup')) {
	    document.querySelector('.js-popup').close();
	  }

	  var popup = (0, _createPopup2.default)('Manual cost updating for campaign \'' + name + '\'', true);

	  if (!popup) {
	    return;
	  }

	  var popupBody = popup.querySelector('.js-popup-body');

	  if (!popupBody) {
	    return;
	  }

	  var dateToString = function dateToString(y, m, d) {
	    var date = new Date(y, m, d);
	    return (0, _dateformat2.default)(date, 'yyyy-mm-dd');
	  };

	  popupBody.currentCampaignId = id;

	  var calendarHTML = '\n    <div class="list is-calendar js-calendar-lite js-costs-date"style="margin: 0 0 15px;">\n    <div class="list__wrap">\n      <div class="list__value js-calendar-value">\n      </div>\n      <div class="calendar js-calendar-popup">\n        <div class="calendar__body">\n          <div class="calendar__month js-calendar-box">\n            <div class="calendar__selectors">\n              <div class="btn-prev js-calendar-prev"></div>\n              <div class="btn-next js-calendar-next"></div>\n              <div class="list is-short js-list js-calendar-month">\n                <div class="list__wrap">\n                  <div class="list__value js-list-value"></div>\n                  <div class="list__dropdown">\n                    <div class="list__items">\n                      <div class="list__item js-list-item" data-value="0">Jan</div>\n                      <div class="list__item js-list-item" data-value="1">Feb</div>\n                      <div class="list__item js-list-item" data-value="2">Mar</div>\n                      <div class="list__item js-list-item" data-value="3">Apr</div>\n                      <div class="list__item js-list-item" data-value="4">May</div>\n                      <div class="list__item js-list-item" data-value="5">Jun</div>\n                      <div class="list__item js-list-item" data-value="6">Jul</div>\n                      <div class="list__item js-list-item" data-value="7">Aug</div>\n                      <div class="list__item js-list-item" data-value="8">Sept</div>\n                      <div class="list__item js-list-item" data-value="9">Oct</div>\n                      <div class="list__item js-list-item" data-value="10">Nov</div>\n                      <div class="list__item js-list-item" data-value="11">Dec</div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class="list is-short js-list js-calendar-year">\n                <div class="list__wrap">\n                  <div class="list__value js-list-value"></div>\n                  <div class="list__dropdown">\n                    <div class="list__items">\n                      <div class="list__item js-list-item" data-value="2012">2012</div>\n                      <div class="list__item js-list-item" data-value="2013">2013</div>\n                      <div class="list__item js-list-item" data-value="2014">2014</div>\n                      <div class="list__item js-list-item" data-value="2015">2015</div>\n                      <div class="list__item js-list-item" data-value="2016">2016</div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="calendar__days js-calendar-days"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>';

	  var timesHTML = '\n    <div class="list is-short js-list js-costs-time" style="margin: 0 0 15px;">\n      <div class="list__wrap">\n        <div class="list__value js-list-value"></div>\n        <div class="list__dropdown">\n          <div class="list__items">\n            <div class="list__item js-list-item" data-value="0">00:00</div>\n            <div class="list__item js-list-item" data-value="1">01:00</div>\n            <div class="list__item js-list-item" data-value="2">02:00</div>\n            <div class="list__item js-list-item" data-value="3">03:00</div>\n            <div class="list__item js-list-item" data-value="4">04:00</div>\n            <div class="list__item js-list-item" data-value="5">05:00</div>\n            <div class="list__item js-list-item" data-value="6">06:00</div>\n            <div class="list__item js-list-item" data-value="7">07:00</div>\n            <div class="list__item js-list-item" data-value="8">08:00</div>\n            <div class="list__item js-list-item" data-value="9">09:00</div>\n            <div class="list__item js-list-item" data-value="10">10:00</div>\n            <div class="list__item js-list-item" data-value="11">11:00</div>\n            <div class="list__item js-list-item" data-value="12">12:00</div>\n            <div class="list__item js-list-item" data-value="13">13:00</div>\n            <div class="list__item js-list-item" data-value="14">14:00</div>\n            <div class="list__item js-list-item" data-value="15">15:00</div>\n            <div class="list__item js-list-item" data-value="16">16:00</div>\n            <div class="list__item js-list-item" data-value="17">17:00</div>\n            <div class="list__item js-list-item" data-value="18">18:00</div>\n            <div class="list__item js-list-item" data-value="19">19:00</div>\n            <div class="list__item js-list-item" data-value="20">20:00</div>\n            <div class="list__item js-list-item" data-value="21">21:00</div>\n            <div class="list__item js-list-item" data-value="22">22:00</div>\n            <div class="list__item js-list-item" data-value="23">23:00</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  ';

	  popupBody.innerHTML = '\n    <div class="popup__line">\n      <div class="popup__line-label">\n        <span>Time range:</span>\n        <div class="info"></div>\n      </div>\n      <div class="popup__line-body">\n        ' + calendarHTML + '\n        ' + timesHTML + '\n        <span style="display: inline-block; padding-top: 10px">&nbsp;&nbsp;-&nbsp;&nbsp;</span>\n        ' + calendarHTML + '\n        ' + timesHTML + '\n      </div>\n    </div>\n\n    <div class="popup__line">\n      <div class="popup__line-label">\n        <span>Time zone:</span>\n        <div class="info"></div>\n      </div>\n      <div class="popup__line-body">\n        <div class="list js-list js-costs-timezone" style="display: block; margin: 0 0 15px;">\n          <div class="list__wrap" style="display: block;">\n            <div class="list__value js-list-value"></div>\n            <div class="list__dropdown" style="right: 0;">\n              <div class="list__items js-list-items"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class="popup__line">\n      <div class="popup__line-label">\n        <span>Cost:</span>\n        <div class="info"></div>\n      </div>\n      <div class="popup__line-body">\n        <div class="input" style="display: inline-block; width: 90px; margin-right: 10px;">\n          <input class="js-costs-value" type="text" placeholder="0">\n          <span><span>\n        </div>\n        <div class="popup__currency js-costs-eur">\n          <i class="fa fa-euro"></i>\n        </div>\n        <div class="popup__currency js-costs-rub">\n          <i class="fa fa-ruble"></i>\n        </div>\n        <div class="popup__currency js-costs-usd is-select">\n          <i class="fa fa-dollar"></i>\n        </div>\n        <div class="radiobutton js-costs-click is-select">Click cost</div>\n        <div class="radiobutton js-costs-all">All spend</div>\n      </div>\n    </div>';

	  var params = window.might.stat.params;
	  var stat = document.querySelector('.js-stat');
	  var dateFrom = popupBody.querySelectorAll('.js-costs-date')[0];
	  var dateTo = popupBody.querySelectorAll('.js-costs-date')[1];
	  var timeFrom = popupBody.querySelectorAll('.js-costs-time')[0];
	  var timeTo = popupBody.querySelectorAll('.js-costs-time')[1];
	  var timezone = popupBody.querySelector('.js-costs-timezone');
	  var costValue = popupBody.querySelector('.js-costs-value');
	  var costEur = popupBody.querySelector('.js-costs-eur');
	  var costRub = popupBody.querySelector('.js-costs-rub');
	  var costUsd = popupBody.querySelector('.js-costs-usd');
	  var costClick = popupBody.querySelector('.js-costs-click');
	  var costAll = popupBody.querySelector('.js-costs-all');

	  (0, _calendarLiteEvent2.default)(dateFrom);
	  (0, _calendarLiteEvent2.default)(dateTo);
	  (0, _listEvent2.default)(timeFrom);
	  (0, _listEvent2.default)(timeTo);

	  dateFrom.updateValue({
	    year: params.date_from.year,
	    month: params.date_from.month,
	    date: params.date_from.date
	  });
	  dateTo.updateValue({
	    year: params.date_to.year,
	    month: params.date_to.month,
	    date: params.date_to.date
	  });
	  timeFrom.updateValue(Number(params.start_time.split(':')[0]));
	  timeTo.updateValue(Number(params.end_time.split(':')[0]));

	  dateFrom.addEventListener('change', updateDateTime);
	  dateTo.addEventListener('change', updateDateTime);
	  timeFrom.addEventListener('change', updateDateTime);
	  timeTo.addEventListener('change', updateDateTime);

	  updateDateTime();

	  var timezoneItems = timezone.querySelector('.js-list-items');
	  _timezone2.default.forEach(function (el) {
	    var n = el.split('|');
	    timezoneItems.innerHTML += '<div class="list__item js-list-item" data-value="' + el + '">' + n[1] + ' ' + n[0] + '</div>';
	  });

	  (0, _listEvent2.default)(timezone);
	  timezone.updateValue(params.timezone);

	  costEur.addEventListener('click', function () {
	    costEur.classList.add('is-select');
	    costRub.classList.remove('is-select');
	    costUsd.classList.remove('is-select');
	  });

	  costRub.addEventListener('click', function () {
	    costEur.classList.remove('is-select');
	    costRub.classList.add('is-select');
	    costUsd.classList.remove('is-select');
	  });

	  costUsd.addEventListener('click', function () {
	    costEur.classList.remove('is-select');
	    costRub.classList.remove('is-select');
	    costUsd.classList.add('is-select');
	  });

	  costValue.addEventListener('paste', function (event) {
	    if (/^\d*.?\d+$/.test(costValue.value.trim())) {
	      costValue.value = '';
	    }
	  });

	  costValue.addEventListener('keydown', function (event) {
	    var code = event.keyCode;
	    var char = String.fromCharCode(code);
	    var key = '¾.0123456789'.indexOf(char);
	    var value = parseInt(event.target.value, 10);

	    switch (code) {
	      case 9:
	      case 13:
	      case 27:
	        event.target.blur();
	        break;
	      case 8:
	      case 46:
	      case 37:
	      case 39:
	      case 190:
	        break;
	      default:
	        if (key === -1) {
	          event.preventDefault();
	        }
	    }
	  });

	  costClick.addEventListener('click', function () {
	    costClick.classList.add('is-select');
	    costAll.classList.remove('is-select');
	  });

	  costAll.addEventListener('click', function () {
	    costClick.classList.remove('is-select');
	    costAll.classList.add('is-select');
	  });

	  popup.querySelector('.js-popup-save').addEventListener('click', function (event) {
	    var data = {};

	    var dF = dateFrom.value;
	    var dT = dateTo.value;
	    var tF = Number(timeFrom.value);
	    var tT = Number(timeTo.value);

	    var _dF = dateToString(dF.year, dF.month, dF.date);
	    var _dT = dateToString(dT.year, dT.month, dT.date);
	    var _tF = '' + (tF < 10 ? '0' : '') + tF + ':00';
	    var _tT = '' + (tT < 10 ? '0' : '') + tT + ':00';

	    data.time = _dF + ' ' + _tF + ' - ' + _dT + ' ' + _tT;
	    data.timezone = timezone.value;
	    data.cost = costValue.value;

	    var currency = 'USD';

	    if (costEur.classList.contains('is-select')) {
	      currency = 'EUR';
	    } else if (costRub.classList.contains('is-select')) {
	      currency = 'RUB';
	    }

	    data.currency = currency;

	    if (costClick.classList.contains('is-select')) {
	      data.cost_type = 'visit';
	    } else {
	      data.cost_type = 'all';
	    }

	    if (popupBody.currentCampaignId || popupBody.currentCampaignId === 0) {
	      data.id = popupBody.currentCampaignId;
	    } else {
	      return;
	    }

	    (0, _fetchApi.fetchData)('/campaign/cost/save', data).then(function (res) {
	      popup.close();

	      var _dateFormSample = new Date(dF.year, dF.month, dF.date, tF);
	      var _dateToSample = new Date(dT.year, dT.month, dT.date, tT);
	      var _dateFromCalendar = new Date(params.date_from.year, params.date_from.month, params.date_from.date, Number(params.start_time.split(':')[0]), Number(params.start_time.split(':')[1]));
	      var _dateToCalendar = new Date(params.date_to.year, params.date_to.month, params.date_to.date, Number(params.end_time.split(':')[0]), Number(params.end_time.split(':')[1]));

	      if (_dateFormSample < _dateToCalendar && _dateToSample > _dateFromCalendar) {
	        stat.triggerEvent('drawtable');
	      }
	    }).catch(function (err) {
	      popup.querySelector('.js-popup-error').textContent = err;
	      throw new Error(err);
	    });
	  });

	  function updateDateTime() {
	    var dF = dateFrom.value;
	    var dT = dateTo.value;
	    var tF = Number(timeFrom.value);
	    var tT = Number(timeTo.value);

	    timeFrom.unsetDisabled();
	    timeTo.unsetDisabled();

	    if (dF.year === dT.year && dF.month === dT.month && dF.date === dT.date) {
	      for (var i = 0; i <= 23; i++) {
	        if (i < tF) {
	          timeTo.setDisabled(i);
	        }

	        if (i > tT) {
	          timeFrom.setDisabled(i);
	        }
	      }
	    }

	    dateFrom.setDisabled({ to: {
	        year: dT.year,
	        month: dT.month,
	        date: dT.date
	      } });

	    dateTo.setDisabled({ from: {
	        year: dF.year,
	        month: dF.month,
	        date: dF.date + (tF > tT ? 1 : 0)
	      } });
	  }
	};

	var _qs = __webpack_require__(16);

	var _qs2 = _interopRequireDefault(_qs);

	var _dateformat = __webpack_require__(62);

	var _dateformat2 = _interopRequireDefault(_dateformat);

	var _createPopup = __webpack_require__(81);

	var _createPopup2 = _interopRequireDefault(_createPopup);

	var _calendarLiteEvent = __webpack_require__(92);

	var _calendarLiteEvent2 = _interopRequireDefault(_calendarLiteEvent);

	var _listEvent = __webpack_require__(57);

	var _listEvent2 = _interopRequireDefault(_listEvent);

	var _timezone = __webpack_require__(93);

	var _timezone2 = _interopRequireDefault(_timezone);

	var _fetchApi = __webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = function (control) {
	  var calendar = control.querySelector('.js-calendar-popup');

	  if (!calendar) {
	    return;
	  }

	  var currentDatetime = window.might.current_datetime;

	  var available = {
	    to: {
	      year: currentDatetime.getFullYear(),
	      month: currentDatetime.getMonth(),
	      date: currentDatetime.getDate()
	    }
	  };

	  var selected = void 0;

	  var labelControl = control.querySelector('.js-calendar-value');
	  var box = calendar.querySelector('.js-calendar-box');
	  var next = box.querySelector('.js-calendar-next');
	  var prev = box.querySelector('.js-calendar-prev');
	  var monthSelect = box.querySelector('.js-calendar-month');
	  var yearSelect = box.querySelector('.js-calendar-year');

	  (0, _listEvent2.default)(monthSelect);
	  (0, _listEvent2.default)(yearSelect);

	  var clickWindow = void 0;
	  var _open = void 0;
	  var close = void 0;
	  var resetSelected = void 0;
	  var renderDefault = void 0;
	  var renderDays = void 0;
	  var updateSelects = void 0;
	  var clickDay = void 0;
	  var eventBox = void 0;
	  var setLabelControl = void 0;
	  var updateValue = void 0;
	  var setValue = void 0;
	  var setDisabled = void 0;

	  clickWindow = function clickWindow(event) {
	    var closest = event.target.closest('.js-calendar-lite');

	    if (!closest || closest !== control) {
	      resetSelected();
	      close(event);
	    }
	  };

	  _open = function open(event) {
	    resetSelected();
	    renderDefault();

	    calendar.classList.add('is-open');
	    control.removeEventListener('click', _open);
	    window.addEventListener('click', clickWindow);
	  };

	  close = function close(event) {
	    event.stopPropagation();
	    calendar.classList.remove('is-open');
	    control.addEventListener('click', _open);
	    window.removeEventListener('click', clickWindow);
	  };

	  resetSelected = function resetSelected() {
	    selected = {
	      year: control.value.year,
	      month: control.value.month,
	      date: control.value.date
	    };
	  };

	  renderDefault = function renderDefault() {
	    box.current.year = selected.year;
	    box.current.month = selected.month;

	    updateSelects();
	    renderDays();
	  };

	  renderDays = function renderDays(b) {
	    var days = box.querySelector('.js-calendar-days');

	    var month = box.current.month;
	    var year = box.current.year;
	    var count = new Date(year, month + 1, 0).getDate();
	    var first = new Date(year, month, 1).getDay() - 1;

	    if (first === -1) {
	      first = 6;
	    }

	    var tsDate = +new Date(selected.year, selected.month, selected.date);
	    var tsFrom = void 0;
	    var tsTo = +new Date(available.to.year, available.to.month, available.to.date);

	    if (available.from) {
	      tsFrom = +new Date(available.from.year, available.from.month, available.from.date);
	    }

	    days.innerHTML = '';
	    box.days_scope = {};

	    for (var i = 1 - first; i <= count; i++) {
	      var span = document.createElement('span');
	      var day = void 0;

	      if (i > 0) {
	        span.textContent = i;
	        day = +new Date(year, month, i);

	        if (tsDate === day) {
	          span.classList.add('is-start');
	          span.classList.add('is-end');
	        }

	        if (tsFrom && tsFrom > day || tsTo < day) {
	          span.classList.add('is-future');
	        } else {
	          span.dataset.value = day;
	          span.addEventListener('click', clickDay);
	          box.days_scope[day] = span;
	        }
	      } else {
	        span.classList.add('is-empty');
	      }

	      days.appendChild(span);
	    }
	  };

	  updateSelects = function updateSelects() {
	    try {
	      monthSelect.updateValue(box.current.month);
	      yearSelect.updateValue(box.current.year);
	    } catch (err) {
	      throw new Error(err);
	    }
	  };

	  clickDay = function clickDay(event) {
	    event.stopPropagation();

	    var valueDate = new Date(parseInt(this.dataset.value, 10));

	    selected.year = valueDate.getFullYear();
	    selected.month = valueDate.getMonth();
	    selected.date = valueDate.getDate();

	    setValue();
	    close(event);
	  };

	  eventBox = function eventBox() {
	    box.current = {};

	    prev.addEventListener('click', function () {
	      box.current.month--;

	      if (box.current.month < 0) {
	        box.current.month = 11;
	        box.current.year--;
	      }

	      updateSelects();
	      renderDays();
	    });

	    next.addEventListener('click', function () {
	      box.current.month++;

	      if (box.current.month > 11) {
	        box.current.month = 0;
	        box.current.year++;
	      }

	      updateSelects();
	      renderDays();
	    });

	    monthSelect.addEventListener('change', function () {
	      try {
	        box.current.month = parseInt(monthSelect.value, 10);
	        renderDays();
	      } catch (err) {
	        throw new Error(err);
	      }
	    });

	    yearSelect.addEventListener('change', function () {
	      try {
	        box.current.year = parseInt(yearSelect.value, 10);
	        renderDays();
	      } catch (err) {
	        throw new Error(err);
	      }
	    });
	  };

	  setLabelControl = function setLabelControl() {
	    if (labelControl) {
	      var value = control.value;
	      var date = new Date(value.year, value.month, value.date);
	      labelControl.innerHTML = (0, _dateformat2.default)(date, 'mmmm dd, yyyy');
	    }
	  };

	  updateValue = function updateValue(obj) {
	    var value = control.value;
	    var newValue = obj || selected;
	    var isUpdate = false;

	    for (var i in value) {
	      if (value.hasOwnProperty(i) && newValue.hasOwnProperty(i)) {
	        if (value[i] !== newValue[i]) {
	          value[i] = newValue[i];
	          isUpdate = true;
	        }
	      }
	    }

	    setLabelControl();

	    return isUpdate;
	  };

	  setValue = function setValue(obj) {
	    if (updateValue(obj)) {
	      control.triggerEvent('change');
	    }
	  };

	  setDisabled = function setDisabled(obj) {
	    var newAvailable = obj || {};

	    for (var i in newAvailable) {
	      if (newAvailable.hasOwnProperty(i)) {
	        if (_typeof(newAvailable[i]) === 'object') {
	          available[i] = available[i] || {};
	          for (var j in newAvailable[i]) {
	            if (newAvailable[i].hasOwnProperty(j)) {
	              available[i][j] = newAvailable[i][j];
	            }
	          }
	        }
	      }
	    }

	    if (calendar.classList.contains('is-open')) {
	      renderDays();
	    }
	  };

	  control.addEventListener('click', _open);

	  control.value = {
	    year: available.to.year,
	    month: available.to.month,
	    date: available.to.date
	  };

	  eventBox();
	  setLabelControl();

	  control.updateValue = updateValue;
	  control.setValue = setValue;
	  control.setDisabled = setDisabled;
	};

	var _dateformat = __webpack_require__(62);

	var _dateformat2 = _interopRequireDefault(_dateformat);

	var _listEvent = __webpack_require__(57);

	var _listEvent2 = _interopRequireDefault(_listEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 93 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ['+00:00|Africa/Abidjan', '+00:00|Africa/Accra', '+00:00|Africa/Bamako', '+00:00|Africa/Banjul', '+00:00|Africa/Bissau', '+00:00|Africa/Casablanca', '+00:00|Africa/Conakry', '+00:00|Africa/Dakar', '+00:00|Africa/El Aaiun', '+00:00|Africa/Freetown', '+00:00|Africa/Lome', '+00:00|Africa/Monrovia', '+00:00|Africa/Nouakchott', '+00:00|Africa/Ouagadougou', '+00:00|Africa/Sao Tome', '+01:00|Africa/Algiers', '+01:00|Africa/Bangui', '+01:00|Africa/Brazzaville', '+01:00|Africa/Douala', '+01:00|Africa/Kinshasa', '+01:00|Africa/Lagos', '+01:00|Africa/Libreville', '+01:00|Africa/Luanda', '+01:00|Africa/Malabo', '+01:00|Africa/Ndjamena', '+01:00|Africa/Niamey', '+01:00|Africa/Porto-Novo', '+01:00|Africa/Tunis', '+01:00|Africa/Windhoek', '+02:00|Africa/Blantyre', '+02:00|Africa/Bujumbura', '+02:00|Africa/Cairo', '+02:00|Africa/Ceuta', '+02:00|Africa/Gaborone', '+02:00|Africa/Harare', '+02:00|Africa/Johannesburg', '+02:00|Africa/Kigali', '+02:00|Africa/Lubumbashi', '+02:00|Africa/Lusaka', '+02:00|Africa/Maputo', '+02:00|Africa/Maseru', '+02:00|Africa/Mbabane', '+02:00|Africa/Tripoli', '+03:00|Africa/Addis Ababa', '+03:00|Africa/Asmara', '+03:00|Africa/Dar es Salaam', '+03:00|Africa/Djibouti', '+03:00|Africa/Juba', '+03:00|Africa/Kampala', '+03:00|Africa/Khartoum', '+03:00|Africa/Mogadishu', '+03:00|Africa/Nairobi', '-09:00|America/Adak', '-08:00|America/Anchorage', '-08:00|America/Juneau', '-08:00|America/Metlakatla', '-08:00|America/Nome', '-08:00|America/Sitka', '-08:00|America/Yakutat', '-07:00|America/Creston', '-07:00|America/Dawson', '-07:00|America/Dawson Creek', '-07:00|America/Hermosillo', '-07:00|America/Los Angeles', '-07:00|America/Phoenix', '-07:00|America/Santa Isabel', '-07:00|America/Tijuana', '-07:00|America/Vancouver', '-07:00|America/Whitehorse', '-06:00|America/Belize', '-06:00|America/Boise', '-06:00|America/Cambridge Bay', '-06:00|America/Chihuahua', '-06:00|America/Costa Rica', '-06:00|America/Denver', '-06:00|America/Edmonton', '-06:00|America/El Salvador', '-06:00|America/Guatemala', '-06:00|America/Inuvik', '-06:00|America/Managua', '-06:00|America/Mazatlan', '-06:00|America/Ojinaga', '-06:00|America/Regina', '-06:00|America/Swift Current', '-06:00|America/Tegucigalpa', '-06:00|America/Yellowknife', '-05:00|America/Atikokan', '-05:00|America/Bahia Banderas', '-05:00|America/Bogota', '-05:00|America/Cancun', '-05:00|America/Cayman', '-05:00|America/Chicago', '-05:00|America/Eirunepe', '-05:00|America/Guayaquil', '-05:00|America/Indiana/Knox', '-05:00|America/Indiana/Tell City', '-05:00|America/Jamaica', '-05:00|America/Lima', '-05:00|America/Matamoros', '-05:00|America/Menominee', '-05:00|America/Merida', '-05:00|America/Mexico City', '-05:00|America/Monterrey', '-05:00|America/North Dakota/Beulah', '-05:00|America/North Dakota/Center', '-05:00|America/North Dakota/New Salem', '-05:00|America/Panama', '-05:00|America/Rainy River', '-05:00|America/Rankin Inlet', '-05:00|America/Resolute', '-05:00|America/Rio Branco', '-05:00|America/Winnipeg', '-04:30|America/Caracas', '-04:00|America/Anguilla', '-04:00|America/Antigua', '-04:00|America/Aruba', '-04:00|America/Asuncion', '-04:00|America/Barbados', '-04:00|America/Blanc-Sablon', '-04:00|America/Boa Vista', '-04:00|America/Campo Grande', '-04:00|America/Cuiaba', '-04:00|America/Curacao', '-04:00|America/Detroit', '-04:00|America/Dominica', '-04:00|America/Grand Turk', '-04:00|America/Grenada', '-04:00|America/Guadeloupe', '-04:00|America/Guyana', '-04:00|America/Havana', '-04:00|America/Indiana/Indianapolis', '-04:00|America/Indiana/Marengo', '-04:00|America/Indiana/Petersburg', '-04:00|America/Indiana/Vevay', '-04:00|America/Indiana/Vincennes', '-04:00|America/Indiana/Winamac', '-04:00|America/Iqaluit', '-04:00|America/Kentucky/Louisville', '-04:00|America/Kentucky/Monticello', '-04:00|America/Kralendijk', '-04:00|America/La Paz', '-04:00|America/Lower Princes', '-04:00|America/Manaus', '-04:00|America/Marigot', '-04:00|America/Martinique', '-04:00|America/Montserrat', '-04:00|America/Nassau', '-04:00|America/New York', '-04:00|America/Nipigon', '-04:00|America/Pangnirtung', '-04:00|America/Port-au-Prince', '-04:00|America/Port of Spain', '-04:00|America/Porto Velho', '-04:00|America/Puerto Rico', '-04:00|America/Santiago', '-04:00|America/Santo Domingo', '-04:00|America/St Barthelemy', '-04:00|America/St Kitts', '-04:00|America/St Lucia', '-04:00|America/St Thomas', '-04:00|America/St Vincent', '-04:00|America/Thunder Bay', '-04:00|America/Toronto', '-04:00|America/Tortola', '-03:00|America/Araguaina', '-03:00|America/Argentina/Buenos Aires', '-03:00|America/Argentina/Catamarca', '-03:00|America/Argentina/Cordoba', '-03:00|America/Argentina/Jujuy', '-03:00|America/Argentina/La Rioja', '-03:00|America/Argentina/Mendoza', '-03:00|America/Argentina/Rio Gallegos', '-03:00|America/Argentina/Salta', '-03:00|America/Argentina/San Juan', '-03:00|America/Argentina/San Luis', '-03:00|America/Argentina/Tucuman', '-03:00|America/Argentina/Ushuaia', '-03:00|America/Bahia', '-03:00|America/Belem', '-03:00|America/Cayenne', '-03:00|America/Fortaleza', '-03:00|America/Glace Bay', '-03:00|America/Goose Bay', '-03:00|America/Halifax', '-03:00|America/Maceio', '-03:00|America/Moncton', '-03:00|America/Montevideo', '-03:00|America/Paramaribo', '-03:00|America/Recife', '-03:00|America/Santarem', '-03:00|America/Sao Paulo', '-03:00|America/Thule', '-02:00|America/Godthab', '-02:00|America/Miquelon', '-02:00|America/Noronha', '-02:30|America/St Johns', '+00:00|America/Danmarkshavn', '+00:00|America/Scoresbysund', '-04:00|Antarctica/Palmer', '-03:00|Antarctica/Rothera', '+02:00|Antarctica/Troll', '+03:00|Antarctica/Syowa', '+05:00|Antarctica/Mawson', '+06:00|Antarctica/Vostok', '+07:00|Antarctica/Davis', '+08:00|Antarctica/Casey', '+10:00|Antarctica/DumontDUrville', '+11:00|Antarctica/Macquarie', '+12:00|Antarctica/McMurdo', '+03:00|Asia/Aden', '+03:00|Asia/Amman', '+03:00|Asia/Baghdad', '+03:00|Asia/Bahrain', '+03:00|Asia/Beirut', '+03:00|Asia/Damascus', '+03:00|Asia/Gaza', '+03:00|Asia/Hebron', '+03:00|Asia/Jerusalem', '+03:00|Asia/Kuwait', '+03:00|Asia/Nicosia', '+03:00|Asia/Qatar', '+03:00|Asia/Riyadh', '+04:30|Asia/Kabul', '+04:30|Asia/Tehran', '+04:00|Asia/Dubai', '+04:00|Asia/Muscat', '+04:00|Asia/Tbilisi', '+04:00|Asia/Yerevan', '+05:45|Asia/Kathmandu', '+05:30|Asia/Colombo', '+05:30|Asia/Kolkata', '+05:00|Asia/Aqtau', '+05:00|Asia/Aqtobe', '+05:00|Asia/Ashgabat', '+05:00|Asia/Baku', '+05:00|Asia/Dushanbe', '+05:00|Asia/Karachi', '+05:00|Asia/Oral', '+05:00|Asia/Samarkand', '+05:00|Asia/Tashkent', '+05:00|Asia/Yekaterinburg', '+06:00|Asia/Almaty', '+06:00|Asia/Bishkek', '+06:00|Asia/Dhaka', '+06:00|Asia/Novosibirsk', '+06:00|Asia/Omsk', '+06:00|Asia/Qyzylorda', '+06:00|Asia/Thimphu', '+06:00|Asia/Urumqi', '+06:30|Asia/Rangoon', '+07:00|Asia/Bangkok', '+07:00|Asia/Ho Chi Minh', '+07:00|Asia/Hovd', '+07:00|Asia/Jakarta', '+07:00|Asia/Krasnoyarsk', '+07:00|Asia/Novokuznetsk', '+07:00|Asia/Phnom Penh', '+07:00|Asia/Pontianak', '+07:00|Asia/Vientiane', '+08:00|Asia/Brunei', '+08:00|Asia/Chita', '+08:00|Asia/Choibalsan', '+08:00|Asia/Hong Kong', '+08:00|Asia/Irkutsk', '+08:00|Asia/Kuala Lumpur', '+08:00|Asia/Kuching', '+08:00|Asia/Macau', '+08:00|Asia/Makassar', '+08:00|Asia/Manila', '+08:00|Asia/Shanghai', '+08:00|Asia/Singapore', '+08:00|Asia/Taipei', '+08:00|Asia/Ulaanbaatar', '+09:00|Asia/Dili', '+09:00|Asia/Jayapura', '+09:00|Asia/Khandyga', '+09:00|Asia/Pyongyang', '+09:00|Asia/Seoul', '+09:00|Asia/Tokyo', '+09:00|Asia/Yakutsk', '+10:00|Asia/Magadan', '+10:00|Asia/Sakhalin', '+10:00|Asia/Ust-Nera', '+10:00|Asia/Vladivostok', '+11:00|Asia/Srednekolymsk', '+12:00|Asia/Anadyr', '+12:00|Asia/Kamchatka', '-03:00|Atlantic/Bermuda', '-03:00|Atlantic/Stanley', '-02:00|Atlantic/South Georgia', '-01:00|Atlantic/Cape Verde', '+00:00|Atlantic/Azores', '+00:00|Atlantic/Reykjavik', '+00:00|Atlantic/St Helena', '+01:00|Atlantic/Canary', '+01:00|Atlantic/Faroe', '+01:00|Atlantic/Madeira', '+01:00|Europe/Dublin', '+01:00|Europe/Guernsey', '+01:00|Europe/Isle of Man', '+01:00|Europe/Jersey', '+01:00|Europe/Lisbon', '+01:00|Europe/London', '+02:00|Europe/Amsterdam', '+02:00|Europe/Andorra', '+02:00|Europe/Belgrade', '+02:00|Europe/Berlin', '+02:00|Europe/Bratislava', '+02:00|Europe/Brussels', '+02:00|Europe/Budapest', '+02:00|Europe/Busingen', '+02:00|Europe/Copenhagen', '+02:00|Europe/Gibraltar', '+02:00|Europe/Kaliningrad', '+02:00|Europe/Ljubljana', '+02:00|Europe/Luxembourg', '+02:00|Europe/Madrid', '+02:00|Europe/Malta', '+02:00|Europe/Monaco', '+02:00|Europe/Oslo', '+02:00|Europe/Paris', '+02:00|Europe/Podgorica', '+02:00|Europe/Prague', '+02:00|Europe/Rome', '+02:00|Europe/San Marino', '+02:00|Europe/Sarajevo', '+02:00|Europe/Skopje', '+02:00|Europe/Stockholm', '+02:00|Europe/Tirane', '+02:00|Europe/Vaduz', '+02:00|Europe/Vatican', '+02:00|Europe/Vienna', '+02:00|Europe/Warsaw', '+02:00|Europe/Zagreb', '+02:00|Europe/Zurich', '+03:00|Europe/Athens', '+03:00|Europe/Bucharest', '+03:00|Europe/Chisinau', '+03:00|Europe/Helsinki', '+03:00|Europe/Istanbul', '+03:00|Europe/Kiev', '+03:00|Europe/Mariehamn', '+03:00|Europe/Minsk', '+03:00|Europe/Moscow', '+03:00|Europe/Riga', '+03:00|Europe/Simferopol', '+03:00|Europe/Sofia', '+03:00|Europe/Tallinn', '+03:00|Europe/Uzhgorod', '+03:00|Europe/Vilnius', '+03:00|Europe/Volgograd', '+03:00|Europe/Zaporozhye', '+04:00|Europe/Samara', '+03:00|Indian/Antananarivo', '+03:00|Indian/Comoro', '+03:00|Indian/Mayotte', '+04:00|Indian/Mahe', '+04:00|Indian/Mauritius', '+04:00|Indian/Reunion', '+05:00|Indian/Kerguelen', '+05:00|Indian/Maldives', '+06:30|Indian/Cocos', '+06:00|Indian/Chagos', '+07:00|Indian/Christmas', '-11:00|Pacific/Midway', '-11:00|Pacific/Niue', '-11:00|Pacific/Pago Pago', '-10:00|Pacific/Honolulu', '-10:00|Pacific/Johnston', '-10:00|Pacific/Rarotonga', '-10:00|Pacific/Tahiti', '-09:30|Pacific/Marquesas', '-09:00|Pacific/Gambier', '-08:00|Pacific/Pitcairn', '-06:00|Pacific/Easter', '-06:00|Pacific/Galapagos', '+09:00|Pacific/Palau', '+10:00|Pacific/Chuuk', '+10:00|Pacific/Guam', '+10:00|Pacific/Port Moresby', '+10:00|Pacific/Saipan', '+11:30|Pacific/Norfolk', '+11:00|Pacific/Bougainville', '+11:00|Pacific/Efate', '+11:00|Pacific/Guadalcanal', '+11:00|Pacific/Kosrae', '+11:00|Pacific/Noumea', '+11:00|Pacific/Pohnpei', '+12:00|Pacific/Auckland', '+12:00|Pacific/Fiji', '+12:00|Pacific/Funafuti', '+12:00|Pacific/Kwajalein', '+12:00|Pacific/Majuro', '+12:00|Pacific/Nauru', '+12:00|Pacific/Tarawa', '+12:00|Pacific/Wake', '+12:00|Pacific/Wallis', '+12:45|Pacific/Chatham', '+13:00|Pacific/Apia', '+13:00|Pacific/Enderbury', '+13:00|Pacific/Fakaofo', '+13:00|Pacific/Tongatapu'];

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (id, name) {
	  (0, _fetchApi.fetchData)('/campaign/get/links', { id: id }).then(render).catch(function (err) {
	    throw new Error(err);
	  });

	  function render(res) {
	    if (document.querySelector('.js-popup')) {
	      document.querySelector('.js-popup').close();
	    }

	    var popup = (0, _createPopup2.default)('Links for campaign \'' + name + '\'');

	    if (!popup) {
	      return;
	    }

	    var popupBody = popup.querySelector('.js-popup-body');

	    if (!popupBody) {
	      return;
	    }

	    var data = res.data;

	    popupBody.innerHTML = '\n      <div class="popup__line js-form-line">\n        <div class="popup__line-label">\n          <span>Campaign URL:</span>\n          <div class="info"></div>\n        </div>\n        <div class="popup__line-body">\n          <div class="input">\n            <input class="js-form-url" type="text" readonly="true" value="' + data.campaign + '">\n          </div>\n        </div>\n        <div class="popup__line-btn">\n          <div class="btn-copy js-form-url-copy">Clipboard</div>\n        </div>\n      </div>\n\n      <div class="popup__line js-form-line">\n        <div class="popup__line-label">\n          <span>Postback URL:</span>\n          <div class="info"></div>\n        </div>\n        <div class="popup__line-body">\n          <div class="input">\n            <input class="js-form-url" type="text" readonly="true" value="' + data.postback + '">\n          </div>\n        </div>\n        <div class="popup__line-btn">\n          <div class="btn-copy js-form-url-copy">Clipboard</div>\n        </div>\n      </div>\n\n      <div class="popup__line js-form-line">\n        <div class="popup__line-label">\n          <span>Confirmed URL:</span>\n          <div class="info"></div>\n        </div>\n        <div class="popup__line-body">\n          <div class="input">\n            <input class="js-form-url" type="text" readonly="true" value="' + data.confirmed + '">\n          </div>\n        </div>\n        <div class="popup__line-btn">\n          <div class="btn-copy js-form-url-copy">Clipboard</div>\n        </div>\n      </div>\n\n      <div class="popup__line js-form-line">\n        <div class="popup__line-label">\n          <span>Unconfirmed URL:</span>\n          <div class="info"></div>\n        </div>\n        <div class="popup__line-body">\n          <div class="input">\n            <input class="js-form-url" type="text" readonly="true" value="' + data.unconfirmed + '">\n          </div>\n        </div>\n        <div class="popup__line-btn">\n          <div class="btn-copy js-form-url-copy">Clipboard</div>\n        </div>\n      </div>\n\n      <div class="popup__line js-form-line">\n        <div class="popup__line-label">\n          <span>Processed URL:</span>\n          <div class="info"></div>\n        </div>\n        <div class="popup__line-body">\n          <div class="input">\n            <input class="js-form-url" type="text" readonly="true" value="' + data.processed + '">\n          </div>\n        </div>\n        <div class="popup__line-btn">\n          <div class="btn-copy js-form-url-copy">Clipboard</div>\n        </div>\n      </div>';

	    popupBody.addEventListener('click', function (event) {
	      var copy = event.target.closest('.js-form-url-copy');

	      if (copy) {
	        (function () {
	          var line = event.target.closest('.js-form-line');
	          var input = line.querySelector('.js-form-url');

	          if (input.value) {
	            input.select();

	            try {
	              var successful = document.execCommand('copy');

	              if (successful) {
	                input.classList.add('is-copy');

	                setTimeout(function () {
	                  return input.classList.remove('is-copy');
	                }, 500);
	              }
	            } catch (err) {
	              throw new Error(err);
	            }

	            input.blur();
	          }
	        })();
	      }
	    });
	  }
	};

	var _qs = __webpack_require__(16);

	var _qs2 = _interopRequireDefault(_qs);

	var _createPopup = __webpack_require__(81);

	var _createPopup2 = _interopRequireDefault(_createPopup);

	var _fetchApi = __webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (data, hasEdit) {
	  var popupBody = (0, _landerAdd2.default)(false, true);

	  if (hasEdit) {
	    popupBody.currentLanderId = data.id;
	  }

	  var formName = popupBody.querySelector('.js-form-name');
	  var formUrl = popupBody.querySelector('.js-form-url');
	  var formUrlTags = popupBody.querySelector('.js-form-tags');
	  var formPostID = popupBody.querySelector('.js-form-post-id');

	  formName.value = data.name || '';

	  if (!hasEdit) {
	    if (!/ \(copy\)$/.test(data.name)) {
	      formName.value += ' (copy)';
	    }
	  }

	  formUrl.value = data.url || '';
	  formPostID.value = data.post_id || '';

	  [].concat(_toConsumableArray(formUrlTags.querySelectorAll('span'))).forEach(function (span) {
	    if (formUrl.value.indexOf(span.textContent.trim()) !== -1) {
	      span.classList.add('is-select');
	    } else {
	      span.classList.remove('is-select');
	    }
	  });
	};

	var _qs = __webpack_require__(16);

	var _qs2 = _interopRequireDefault(_qs);

	var _landerAdd = __webpack_require__(87);

	var _landerAdd2 = _interopRequireDefault(_landerAdd);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (data, hasEdit) {
	  var popupBody = (0, _offerAdd2.default)(false, true);

	  if (hasEdit) {
	    popupBody.currentOfferId = data.id;
	  }

	  var formName = popupBody.querySelector('.js-form-name');
	  var formUrl = popupBody.querySelector('.js-form-url');
	  var formUrlTags = popupBody.querySelector('.js-form-tags');
	  var formAffNet = popupBody.querySelector('.js-form-affnet');
	  var formPayoutAuto = popupBody.querySelector('.js-form-payout-auto');
	  var formPayoutManual = popupBody.querySelector('.js-form-payout-manual');
	  var formPayoutValue = popupBody.querySelector('.js-form-payout-value');
	  var formPayoutEur = popupBody.querySelector('.js-form-payout-eur');
	  var formPayoutRub = popupBody.querySelector('.js-form-payout-rub');
	  var formPayoutUsd = popupBody.querySelector('.js-form-payout-usd');

	  formName.value = data.name || '';

	  if (!hasEdit) {
	    if (!/ \(copy\)$/.test(data.name)) {
	      formName.value += ' (copy)';
	    }
	  }

	  formUrl.value = data.url || '';

	  [].concat(_toConsumableArray(formUrlTags.querySelectorAll('span'))).forEach(function (span) {
	    if (formUrl.value.indexOf(span.textContent.trim()) !== -1) {
	      span.classList.add('is-select');
	    } else {
	      span.classList.remove('is-select');
	    }
	  });

	  if (String(data.affiliate_network_id)) {
	    if (formAffNet.setValue) {
	      formAffNet.setValue(data.affiliate_network_id);
	    } else {
	      formAffNet.value = data.affiliate_network_id;
	    }
	  }

	  formPayoutAuto.classList.remove('is-select');
	  formPayoutManual.classList.remove('is-select');

	  switch (String(data.payout)) {
	    case '1':
	      formPayoutAuto.classList.add('is-select');
	      break;
	    case '0':
	    default:
	      formPayoutManual.classList.add('is-select');
	      break;
	  }

	  formPayoutEur.classList.remove('is-select');
	  formPayoutRub.classList.remove('is-select');
	  formPayoutUsd.classList.remove('is-select');

	  switch (data.currency) {
	    case 'EUR':
	      formPayoutEur.classList.add('is-select');
	      break;
	    case 'RUB':
	      formPayoutRub.classList.add('is-select');
	      break;
	    case 'USD':
	    default:
	      formPayoutUsd.classList.add('is-select');
	      break;
	  }

	  formPayoutValue.value = Number(data.payout_value) || '';
	};

	var _qs = __webpack_require__(16);

	var _qs2 = _interopRequireDefault(_qs);

	var _offerAdd = __webpack_require__(88);

	var _offerAdd2 = _interopRequireDefault(_offerAdd);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (data, hasEdit) {
	  var popupBody = (0, _trafficSourceAdd2.default)(true);

	  if (hasEdit) {
	    popupBody.currentTrafficId = data.id;
	  }

	  var formName = popupBody.querySelector('.js-form-name');
	  var formUrl = popupBody.querySelector('.js-form-url');
	  var formUrlTags = popupBody.querySelector('.js-form-tags');
	  var formLoading = popupBody.querySelector('.js-form-loading');
	  var formInputs = popupBody.querySelectorAll('.js-form-inputs');

	  formName.value = data.name || '';

	  if (!hasEdit) {
	    if (!/ \(copy\)$/.test(data.name)) {
	      formName.value += ' (copy)';
	    }
	  }

	  formUrl.value = data.url || '';

	  [].concat(_toConsumableArray(formUrlTags.querySelectorAll('span'))).forEach(function (span) {
	    if (formUrl.value.indexOf(span.textContent.trim()) !== -1) {
	      span.classList.add('is-select');
	    } else {
	      span.classList.remove('is-select');
	    }
	  });

	  if (String(data.affilate_network)) {
	    if (formLoading.setValue) {
	      formLoading.setValue(data.affilate_network);
	    } else {
	      formLoading.value = data.affilate_network;
	    }
	  }

	  formInputs[0].querySelectorAll('input')[0].value = data.external_id_parameter || '';
	  formInputs[0].querySelectorAll('input')[1].value = data.external_id_placeholder || '';
	  formInputs[1].querySelectorAll('input')[0].value = data.cost_parameter || '';
	  formInputs[1].querySelectorAll('input')[1].value = data.cost_placeholder || '';

	  if (Array.isArray(data.traffic_sources_values)) {
	    data.traffic_sources_values.forEach(function (values, index) {
	      formInputs[index + 2].querySelectorAll('input')[0].value = values.param || '';
	      formInputs[index + 2].querySelectorAll('input')[1].value = values.value || '';
	      formInputs[index + 2].querySelectorAll('input')[2].value = values.name || '';
	    });
	  }
	};

	var _qs = __webpack_require__(16);

	var _qs2 = _interopRequireDefault(_qs);

	var _trafficSourceAdd = __webpack_require__(98);

	var _trafficSourceAdd2 = _interopRequireDefault(_trafficSourceAdd);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var edit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	  var popup = false;
	  if (edit === true) {
	    popup = (0, _createPopup2.default)('Edit traffic source', true);
	  } else {
	    popup = (0, _createPopup2.default)('Creating new traffic source', true);
	  }

	  if (!popup) {
	    return null;
	  }

	  var popupBody = popup.querySelector('.js-popup-body');

	  if (!popupBody) {
	    return null;
	  }

	  popupBody.innerHTML = '\n    <div class="popup__line">\n      <div class="popup__line-label">\n        <span>Name:</span>\n        <div class="info"></div>\n      </div>\n      <div class="popup__line-body">\n        <div class="input">\n          <input class="js-form-name" type="text" placeholder="Write a name for the new offer">\n          <span><span>\n        </div>\n      </div>\n    </div>\n\n    <div class="popup__line">\n      <div class="popup__line-label">\n        <span>Postback URL:</span>\n        <div class="info"></div>\n      </div>\n      <div class="popup__line-body">\n        <div class="input">\n          <input class="js-form-url" type="text" placeholder="Create a url">\n          <span><span>\n        </div>\n        <div class="tags js-form-tags" style="display: none;"></div>\n      </div>\n    </div>\n\n    <div class="popup__line">\n      <div class="popup__line-label">\n        <span>Loading settings from:</span>\n        <div class="info"></div>\n      </div>\n      <div class="popup__line-body">\n        <div class="list js-list js-form-loading" style="display: block; margin: 0 0 15px;" data-placeholder="Select affiliate network">\n          <div class="list__wrap" style="display: block;">\n            <div class="list__value js-list-value"></div>\n            <div class="list__dropdown" style="right: 0;">\n              <div class="list__items js-list-items">\n                <div class="list__item js-list-item" data-value="0">test</div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class="popup__inputs">\n          <div class="popup__inputs-line">\n            <div class="popup__inputs-field"><div class="popup__inputs-title">Parameter<div class="info"></div></div></div>\n            <div class="popup__inputs-field"><div class="popup__inputs-title">Placeholder<div class="info"></div></div></div>\n            <div class="popup__inputs-field"><div class="popup__inputs-title">Name<div class="info"></div></div></div>\n          </div>\n          <div class="popup__inputs-line js-form-inputs">\n            <div class="popup__inputs-label">External ID:</div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text" disabled="true"></div>\n          </div>\n          <div class="popup__inputs-line js-form-inputs">\n            <div class="popup__inputs-label">Cost:</div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text" disabled="true"></div>\n          </div>\n          <div class="popup__inputs-line js-form-inputs">\n            <div class="popup__inputs-label">Custom variable 1:</div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n          </div>\n          <div class="popup__inputs-line js-form-inputs">\n            <div class="popup__inputs-label">Custom variable 2:</div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n          </div>\n          <div class="popup__inputs-line js-form-inputs">\n            <div class="popup__inputs-label">Custom variable 3:</div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n          </div>\n          <div class="popup__inputs-line js-form-inputs">\n            <div class="popup__inputs-label">Custom variable 4:</div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n          </div>\n          <div class="popup__inputs-line js-form-inputs">\n            <div class="popup__inputs-label">Custom variable 5:</div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n          </div>\n          <div class="popup__inputs-line js-form-inputs">\n            <div class="popup__inputs-label">Custom variable 6:</div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n          </div>\n          <div class="popup__inputs-line js-form-inputs">\n            <div class="popup__inputs-label">Custom variable 7:</div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n          </div>\n          <div class="popup__inputs-line js-form-inputs">\n            <div class="popup__inputs-label">Custom variable 8:</div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n          </div>\n          <div class="popup__inputs-line js-form-inputs">\n            <div class="popup__inputs-label">Custom variable 9:</div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n          </div>\n          <div class="popup__inputs-line js-form-inputs">\n            <div class="popup__inputs-label">Custom variable 10:</div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n          </div>\n          <div class="popup__inputs-line js-form-inputs">\n            <div class="popup__inputs-label">Custom variable 11:</div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n          </div>\n          <div class="popup__inputs-line js-form-inputs">\n            <div class="popup__inputs-label">Custom variable 12:</div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n          </div>\n          <div class="popup__inputs-line js-form-inputs">\n            <div class="popup__inputs-label">Custom variable 13:</div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n          </div>\n          <div class="popup__inputs-line js-form-inputs">\n            <div class="popup__inputs-label">Custom variable 14:</div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n          </div>\n          <div class="popup__inputs-line js-form-inputs">\n            <div class="popup__inputs-label">Custom variable 15:</div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n          </div>\n        </div>\n      </div>\n    </div>';

	  var formName = popupBody.querySelector('.js-form-name');
	  var formUrl = popupBody.querySelector('.js-form-url');
	  var formUrlTags = popupBody.querySelector('.js-form-tags');
	  var formLoading = popupBody.querySelector('.js-form-loading');
	  var formInputs = popupBody.querySelectorAll('.js-form-inputs');

	  '{campaign_id},{trafficsource_id},{trafficsource_name},{lander_id},{device_brand},{device_model},{device_type},{browser},{browser_version},{os},{os_version},{country},{isp},{useragent},{ip},{click_id},{visit_id},{browser_language},{referrer_domain}'.split(',').forEach(function (tag) {
	    var span = document.createElement('span');
	    span.className = 'js-form-tag';
	    span.textContent = tag;
	    formUrlTags.appendChild(span);
	  });

	  formUrl.addEventListener('focus', function () {
	    formUrlTags.style.display = '';
	  });

	  formUrl.addEventListener('blur', function () {
	    setTimeout(function () {
	      formUrlTags.style.display = 'none';
	    }, 200);
	  });

	  var changeFormUrl = function changeFormUrl() {
	    var val = formUrl.value;

	    [].concat(_toConsumableArray(formUrlTags.querySelectorAll('span'))).forEach(function (span) {
	      if (val.indexOf(span.textContent.trim()) !== -1) {
	        span.classList.add('is-select');
	      } else {
	        span.classList.remove('is-select');
	      }
	    });
	  };

	  formUrl.addEventListener('change', changeFormUrl);
	  formUrl.addEventListener('keyup', changeFormUrl);
	  formUrl.addEventListener('paste', changeFormUrl);
	  formUrl.addEventListener('cut', changeFormUrl);

	  formUrlTags.addEventListener('mousedown', function (event) {
	    var closest = event.target.closest('.js-form-tag');

	    if (closest) {
	      var val = closest.textContent;

	      if (!closest.classList.contains('is-select')) {
	        formUrl.value += val;
	        closest.classList.add('is-select');
	      } else {
	        var reg = new RegExp(val, 'g');
	        el.value = el.value.replace(reg, '');
	        closest.classList.remove('is-select');
	      }
	    }

	    formUrl.focus();
	    event.preventDefault();
	    event.stopPropagation();
	  });

	  (0, _listEvent2.default)(formLoading);

	  [].concat(_toConsumableArray(formInputs)).forEach(function (inputs, index) {
	    inputs.querySelectorAll('input')[0].addEventListener('change', function (event) {
	      var val = event.target.value.toLowerCase().replace(/\s+/g, '_');

	      if (index > 1 && val && !inputs.querySelectorAll('input')[1].value) {
	        inputs.querySelectorAll('input')[1].value = '{' + val + '}';
	      }

	      if (index > 1 && val && !inputs.querySelectorAll('input')[2].value) {
	        inputs.querySelectorAll('input')[2].value = val[0].toUpperCase() + val.slice(1);
	      }
	    });
	  });

	  popup.querySelector('.js-popup-save').addEventListener('click', function (event) {
	    var name = formName.value.trim();
	    var affilateNetwork = formLoading.value;
	    var postbackUrl = formUrl.value;

	    var externalParameter = '';
	    var externalPlaceholder = '';
	    var costParameter = '';
	    var costPlaceholder = '';

	    var paramInputs = [];
	    var valueInputs = [];
	    var nameInputs = [];

	    [].concat(_toConsumableArray(formInputs)).forEach(function (inputs, index) {
	      if (index === 0) {
	        externalParameter = inputs.querySelectorAll('input')[0].value || '';
	        externalPlaceholder = inputs.querySelectorAll('input')[1].value || '';
	      } else if (index === 1) {
	        costParameter = inputs.querySelectorAll('input')[0].value || '';
	        costPlaceholder = inputs.querySelectorAll('input')[1].value || '';
	      } else {
	        paramInputs.push(inputs.querySelectorAll('input')[0].value || '');
	        valueInputs.push(inputs.querySelectorAll('input')[1].value || '');
	        nameInputs.push(inputs.querySelectorAll('input')[2].value || '');
	      }
	    });

	    var focusFormName = function focusFormName() {
	      var parentFormName = formName.parentNode;
	      parentFormName.classList.remove('is-error');
	      parentFormName.querySelector('span').textContent = '';
	      formName.removeEventListener('focus', focusFormName);
	    };

	    if (!name) {
	      var parentFormName = formName.parentNode;
	      parentFormName.classList.add('is-error');
	      parentFormName.querySelector('span').textContent = 'The field can not be empty';
	      formName.addEventListener('focus', focusFormName);
	      return;
	    }

	    var data = {
	      name: name,
	      affilate_network: affilateNetwork || '',
	      postback_url: postbackUrl || '',
	      is_active: 1,
	      external_id_parameter: externalParameter,
	      external_id_placeholder: externalPlaceholder,
	      cost_parameter: costParameter,
	      cost_placeholder: costPlaceholder,
	      params: {
	        param: paramInputs,
	        value: valueInputs,
	        name: nameInputs
	      }
	    };

	    if (popupBody.currentTrafficId || popupBody.currentTrafficId === 0) {
	      data.id = popupBody.currentTrafficId;
	    }

	    (0, _fetchApi.fetchData)('/traffic/sources/create', data).then(function (res) {
	      popup.close();
	    }).catch(function (err) {
	      popup.querySelector('.js-popup-error').textContent = err;
	      throw new Error(err);
	    });
	  });

	  return popupBody;
	};

	var _qs = __webpack_require__(16);

	var _qs2 = _interopRequireDefault(_qs);

	var _createPopup = __webpack_require__(81);

	var _createPopup2 = _interopRequireDefault(_createPopup);

	var _listEvent = __webpack_require__(57);

	var _listEvent2 = _interopRequireDefault(_listEvent);

	var _fetchApi = __webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (data, hasEdit) {
	  var popupBody = (0, _affiliateNetworkAdd2.default)(true);

	  if (hasEdit) {
	    popupBody.currentAffiliateId = data.id;
	  }

	  var formName = popupBody.querySelector('.js-form-name');
	  var formDuplicatePostbacks = popupBody.querySelector('.js-form-duplicate-postbacks');
	  var formWhiteList = popupBody.querySelector('.js-form-list-ips');
	  var formIps = popupBody.querySelector('.js-form-ips');
	  var formInputIp = popupBody.querySelector('.js-form-input-ip');

	  formName.value = data.name || '';

	  if (!hasEdit) {
	    if (!/ \(copy\)$/.test(data.name)) {
	      formName.value += ' (copy)';
	    }
	  }

	  if (Number(data.duplicate_postbacks)) {
	    formDuplicatePostbacks.classList.add('is-select');
	  } else {
	    formDuplicatePostbacks.classList.remove('is-select');
	  }

	  if (Number(data.white_list)) {
	    formWhiteList.classList.add('is-select');
	    formIps.style.display = '';
	    data.ips.split(',').forEach(function (ip) {
	      var span = document.createElement('span');
	      span.textContent = ip;

	      var i = document.createElement('i');
	      i.className = 'js-form-ips-delete';
	      span.appendChild(i);

	      formInputIp._insertBefore(span);
	    });
	  } else {
	    formWhiteList.classList.remove('is-select');
	    formIps.style.display = 'none';
	  }
	};

	var _qs = __webpack_require__(16);

	var _qs2 = _interopRequireDefault(_qs);

	var _affiliateNetworkAdd = __webpack_require__(100);

	var _affiliateNetworkAdd2 = _interopRequireDefault(_affiliateNetworkAdd);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var edit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	  var popup = false;
	  if (edit === true) {
	    popup = (0, _createPopup2.default)('Edit affilate network', true);
	  } else {
	    popup = (0, _createPopup2.default)('Creating new affilate network', true);
	  }

	  if (!popup) {
	    return null;
	  }

	  var popupBody = popup.querySelector('.js-popup-body');

	  if (!popupBody) {
	    return null;
	  }

	  popupBody.innerHTML = '\n    <div class="popup__line">\n      <div class="popup__line-label">\n        <span>Name:</span>\n        <div class="info"></div>\n      </div>\n      <div class="popup__line-body">\n        <div class="input">\n          <input class="js-form-name" type="text" placeholder="Write a name for the new affiliate network">\n          <span>sadfsadf<span>\n        </div>\n        <div><div class="checkbox js-checkbox js-form-duplicate-postbacks">Accept dublicated post backs</div></div>\n        <div><div class="checkbox js-checkbox js-form-list-ips">Accept postbacks from white-listed IPs</div></div>\n        <div class="checklist js-form-ips" style="display: none; margin-top: 15px">\n          <div class="checklist__value">\n            <input class="checklist__input js-form-input-ip" type="text">\n          </div>\n          <div class="checklist__error js-inputs-error"></div>\n        </div>\n      </div>\n    </div>';

	  var formName = popupBody.querySelector('.js-form-name');
	  var formDuplicatePostbacks = popupBody.querySelector('.js-form-duplicate-postbacks');
	  var formWhiteList = popupBody.querySelector('.js-form-list-ips');
	  var formIps = popupBody.querySelector('.js-form-ips');
	  var formInputIp = popupBody.querySelector('.js-form-input-ip');

	  formWhiteList.addEventListener('change', function () {
	    if (formWhiteList.classList.contains('is-select')) {
	      formIps.style.display = '';
	    } else {
	      formIps.style.display = 'none';
	    }
	  });

	  formIps.addEventListener('click', function (event) {
	    var closest = event.target.closest('.js-form-ips-delete');

	    if (closest) {
	      var span = closest.parentNode;
	      span.parentNode.removeChild(span);
	    } else {
	      formInputIp.parentNode.classList.add('is-focus');
	      formInputIp.focus();
	    }

	    event.stopPropagation();
	  });

	  formInputIp.addEventListener('keydown', function (event) {
	    var code = event.keyCode;

	    if (code === 13) {
	      var span = document.createElement('span');
	      span.textContent = formInputIp.value.trim();

	      var i = document.createElement('i');
	      i.className = 'js-form-ips-delete';
	      span.appendChild(i);

	      formInputIp._insertBefore(span);
	      formInputIp.value = '';
	    }
	  });

	  formInputIp.addEventListener('blur', function () {
	    formInputIp.parentNode.classList.remove('is-focus');
	  });

	  popup.querySelector('.js-popup-save').addEventListener('click', function (event) {
	    var name = formName.value.trim();
	    var duplicatePostbacks = formWhiteList.classList.contains('is-select');
	    var whiteList = formWhiteList.classList.contains('is-select');
	    var ips = [];

	    var focusFormName = function focusFormName() {
	      var parentFormName = formName.parentNode;

	      parentFormName.classList.remove('is-error');
	      parentFormName.querySelector('span').textContent = '';

	      formName.removeEventListener('focus', focusFormName);
	    };

	    if (!name) {
	      var parentFormName = formName.parentNode;

	      parentFormName.classList.add('is-error');
	      parentFormName.querySelector('span').textContent = 'The field can not be empty';

	      formName.addEventListener('focus', focusFormName);

	      return;
	    }

	    var focusFormIps = function focusFormIps() {
	      formIps.classList.remove('is-error');
	      formIps.querySelector('.js-inputs-error').textContent = '';
	      formIps.removeEventListener('click', focusFormIps);
	    };

	    if (whiteList) {
	      [].concat(_toConsumableArray(formIps.querySelectorAll('span'))).forEach(function (span) {
	        var ip = span.textContent.trim();

	        if (ip) {
	          ips.push(ip);
	        }
	      });
	    }

	    var data = {
	      name: name,
	      duplicate_postbacks: duplicatePostbacks ? 1 : 0,
	      white_list: whiteList ? 1 : 0,
	      append_click_id: 0,
	      ips: ips.join(',')
	    };

	    if (popupBody.currentAffiliateId || popupBody.currentAffiliateId === 0) {
	      data.id = popupBody.currentAffiliateId;
	    }

	    (0, _fetchApi.fetchData)('/affiliate_network/create', data).then(function (res) {
	      popup.close();
	    }).catch(function (err) {
	      popup.querySelector('.js-popup-error').textContent = err;
	      throw new Error(err);
	    });
	  });

	  return popupBody;
	};

	var _qs = __webpack_require__(16);

	var _qs2 = _interopRequireDefault(_qs);

	var _createPopup = __webpack_require__(81);

	var _createPopup2 = _interopRequireDefault(_createPopup);

	var _fetchApi = __webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  if (document.querySelector('.js-popup')) {
	    return;
	  }

	  var popup = (0, _createPopup2.default)('List of landers', null, true);

	  if (!popup) {
	    return;
	  }

	  var popupBody = popup.querySelector('.js-popup-body');

	  if (popupBody) {
	    popup.querySelector('.js-popup-wrap').style.width = '600px';

	    (0, _fetchApi.fetchData)('/lander/list', {
	      field: 'id,name',
	      order: 'name'
	    }).then(function (res) {
	      var search = document.createElement('div');
	      search.className = 'popup__list-search';
	      search.innerHTML = '\n        <i class="fa fa-search"></i>\n        <input class="js-popup-list-search" type="text" placeholder="Enter to search">';
	      popupBody.appendChild(search);

	      var timeForSearch = void 0;
	      var inputSearch = search.querySelector('.js-popup-list-search');
	      var filterRows = function filterRows() {
	        if (timeForSearch) {
	          clearTimeout(timeForSearch);
	        }

	        timeForSearch = setTimeout(function () {
	          var val = inputSearch.value.trim();
	          var reg = new RegExp(val, 'i');
	          var names = popupBody.querySelectorAll('.js-popup-list-name');

	          if (val) {
	            [].concat(_toConsumableArray(names)).forEach(function (el) {
	              if (el.textContent.search(reg) === -1) {
	                el.closest('.js-popup-row').style.display = 'none';
	              } else {
	                el.closest('.js-popup-row').style.display = '';
	              }
	            });
	          } else {
	            [].concat(_toConsumableArray(names)).forEach(function (el) {
	              el.closest('.js-popup-row').style.display = '';
	            });
	          }
	        }, 200);
	      };

	      inputSearch.addEventListener('keyup', filterRows);
	      inputSearch.addEventListener('paste', filterRows);
	      inputSearch.addEventListener('change', filterRows);

	      var table = document.createElement('table');
	      table.className = 'popup__list';
	      popupBody.appendChild(table);

	      var right = window.__active_permission__;
	      res.data.forEach(function (item) {
	        var name = item.name;
	        var id = item.id;
	        var tr = document.createElement('tr');
	        tr.className = 'js-lander-row js-popup-row';

	        if (right) {
	          tr.innerHTML = '\n            <td class="js-lander-name" data-id="' + id + '">\n              <span class="js-lander-edit js-popup-list-name">' + name + '</span>\n            </td>\n            <td><span class="js-lander-copy">Copy</span></td>\n            ' + (right.landers.type.indexOf(2) !== -1 ? '<td><span class="js-lander-edit">Edit</span></td>' : '') + '\n          ';
	        } else {
	          tr.innerHTML = '\n            <td class="js-lander-name" data-id="' + id + '">\n              <span class="js-lander-edit js-popup-list-name">' + name + '</span>\n            </td>\n            <td><span class="js-lander-copy">Copy</span></td>\n            <td><span class="js-lander-edit">Edit</span></td>\n          ';
	        }

	        table.appendChild(tr);

	        popupBody.addEventListener('click', listClick);
	      });
	    }).catch(function (err) {
	      popupBody.innerHTML = '<div class="popup__message">' + err + '</div>';
	      throw new Error(err);
	    });
	  }

	  function listClick(event) {
	    var target = event.target;
	    var copyBtn = target.closest('.js-lander-copy');
	    var editBtn = target.closest('.js-lander-edit');

	    if (copyBtn || editBtn) {
	      var id = target.closest('.js-lander-row').querySelector('.js-lander-name').dataset.id;

	      if (copyBtn) {
	        if (id) {
	          openEdit(id);
	        }
	      }

	      if (editBtn) {
	        if (id) {
	          openEdit(id, true);
	        }
	      }
	    }
	  }

	  function openEdit(id, hasEdit) {
	    (0, _fetchApi.fetchData)('/lander/get', { id: id }).then(function (res) {
	      popup.close();
	      (0, _landerEdit2.default)(res.data, hasEdit || false);
	    }).catch(function (err) {
	      throw new Error(err);
	    });
	  }
	};

	var _qs = __webpack_require__(16);

	var _qs2 = _interopRequireDefault(_qs);

	var _createPopup = __webpack_require__(81);

	var _createPopup2 = _interopRequireDefault(_createPopup);

	var _landerEdit = __webpack_require__(95);

	var _landerEdit2 = _interopRequireDefault(_landerEdit);

	var _fetchApi = __webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  if (document.querySelector('.js-popup')) {
	    return;
	  }

	  var popup = (0, _createPopup2.default)('Offer list', null, true);

	  if (!popup) {
	    return;
	  }

	  var popupBody = popup.querySelector('.js-popup-body');

	  if (popupBody) {
	    popup.querySelector('.js-popup-wrap').style.width = '600px';

	    (0, _fetchApi.fetchData)('/offer/list', {
	      field: 'id,name',
	      order: 'name'
	    }).then(function (res) {
	      var search = document.createElement('div');
	      search.className = 'popup__list-search';
	      search.innerHTML = '\n        <i class="fa fa-search"></i>\n        <input class="js-popup-list-search" type="text" placeholder="Enter to search">';
	      popupBody.appendChild(search);

	      var timeForSearch = void 0;
	      var inputSearch = search.querySelector('.js-popup-list-search');
	      var filterRows = function filterRows() {
	        if (timeForSearch) {
	          clearTimeout(timeForSearch);
	        }

	        timeForSearch = setTimeout(function () {
	          var val = inputSearch.value.trim();
	          var reg = new RegExp(val, 'i');
	          var names = popupBody.querySelectorAll('.js-popup-list-name');

	          if (val) {
	            [].concat(_toConsumableArray(names)).forEach(function (el) {
	              if (el.textContent.search(reg) === -1) {
	                el.closest('.js-popup-row').style.display = 'none';
	              } else {
	                el.closest('.js-popup-row').style.display = '';
	              }
	            });
	          } else {
	            [].concat(_toConsumableArray(names)).forEach(function (el) {
	              el.closest('.js-popup-row').style.display = '';
	            });
	          }
	        }, 200);
	      };

	      inputSearch.addEventListener('keyup', filterRows);
	      inputSearch.addEventListener('paste', filterRows);
	      inputSearch.addEventListener('change', filterRows);

	      var table = document.createElement('table');
	      table.className = 'popup__list';
	      popupBody.appendChild(table);

	      var right = window.__active_permission__;
	      res.data.forEach(function (item) {
	        var name = item.name;
	        var id = item.id;
	        var tr = document.createElement('tr');
	        tr.className = 'js-offer-row js-popup-row';

	        if (right) {
	          tr.innerHTML = '\n            <td class="js-offer-name" data-id="' + id + '">\n              <span class="js-offer-edit js-popup-list-name">' + name + '</span>\n            </td>\n            <td><span class="js-offer-copy">Copy</span></td>\n            ' + (right.offers.type.indexOf(2) !== -1 ? '<td><span class="js-offer-edit">Edit</span></td>' : '') + '\n          ';
	        } else {
	          tr.innerHTML = '\n            <td class="js-offer-name" data-id="' + id + '">\n              <span class="js-offer-edit js-popup-list-name">' + name + '</span>\n            </td>\n            <td><span class="js-offer-copy">Copy</span></td>\n            <td><span class="js-offer-edit">Edit</span></td>\n          ';
	        }

	        table.appendChild(tr);

	        popupBody.addEventListener('click', listClick);
	      });
	    }).catch(function (err) {
	      popupBody.innerHTML = '<div class="popup__message">' + err + '</div>';
	      throw new Error(err);
	    });
	  }

	  function listClick(event) {
	    var target = event.target;
	    var copyBtn = target.closest('.js-offer-copy');
	    var editBtn = target.closest('.js-offer-edit');

	    if (copyBtn || editBtn) {
	      var id = target.closest('.js-offer-row').querySelector('.js-offer-name').dataset.id;

	      if (copyBtn) {
	        if (id) {
	          openEdit(id);
	        }
	      }

	      if (editBtn) {
	        if (id) {
	          openEdit(id, true);
	        }
	      }
	    }
	  }

	  function openEdit(id, hasEdit) {
	    (0, _fetchApi.fetchData)('/offer/get', { id: id }).then(function (res) {
	      popup.close();
	      (0, _offerEdit2.default)(res.data, hasEdit || false);
	    }).catch(function (err) {
	      throw new Error(err);
	    });
	  }
	};

	var _qs = __webpack_require__(16);

	var _qs2 = _interopRequireDefault(_qs);

	var _createPopup = __webpack_require__(81);

	var _createPopup2 = _interopRequireDefault(_createPopup);

	var _offerEdit = __webpack_require__(96);

	var _offerEdit2 = _interopRequireDefault(_offerEdit);

	var _fetchApi = __webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  if (document.querySelector('.js-popup')) {
	    return;
	  }

	  var popup = (0, _createPopup2.default)('Traffic source list', null, true);

	  if (!popup) {
	    return;
	  }

	  var popupBody = popup.querySelector('.js-popup-body');

	  if (popupBody) {
	    popup.querySelector('.js-popup-wrap').style.width = '600px';

	    (0, _fetchApi.fetchData)('/traffic/sources/list', {
	      field: 'id,name',
	      order: 'name'
	    }).then(function (res) {
	      var search = document.createElement('div');
	      search.className = 'popup__list-search';
	      search.innerHTML = '\n        <i class="fa fa-search"></i>\n        <input class="js-popup-list-search" type="text" placeholder="Enter to search">';
	      popupBody.appendChild(search);

	      var timeForSearch = void 0;
	      var inputSearch = search.querySelector('.js-popup-list-search');
	      var filterRows = function filterRows() {
	        if (timeForSearch) {
	          clearTimeout(timeForSearch);
	        }

	        timeForSearch = setTimeout(function () {
	          var val = inputSearch.value.trim();
	          var reg = new RegExp(val, 'i');
	          var names = popupBody.querySelectorAll('.js-popup-list-name');

	          if (val) {
	            [].concat(_toConsumableArray(names)).forEach(function (el) {
	              if (el.textContent.search(reg) === -1) {
	                el.closest('.js-popup-row').style.display = 'none';
	              } else {
	                el.closest('.js-popup-row').style.display = '';
	              }
	            });
	          } else {
	            [].concat(_toConsumableArray(names)).forEach(function (el) {
	              el.closest('.js-popup-row').style.display = '';
	            });
	          }
	        }, 200);
	      };

	      inputSearch.addEventListener('keyup', filterRows);
	      inputSearch.addEventListener('paste', filterRows);
	      inputSearch.addEventListener('change', filterRows);

	      var table = document.createElement('table');
	      table.className = 'popup__list';
	      popupBody.appendChild(table);

	      var right = window.__active_permission__;
	      res.data.forEach(function (item) {
	        var name = item.name;
	        var id = item.id;
	        var tr = document.createElement('tr');
	        tr.className = 'js-traffic-row js-popup-row';

	        if (right) {
	          tr.innerHTML = '\n            <td class="js-traffic-name" data-id="' + id + '">\n              <span class="js-traffic-edit js-popup-list-name">' + name + '</span>\n            </td>\n            <td><span class="js-traffic-copy">Copy</span></td>\n            ' + (right.traffic_source.type.indexOf(2) !== -1 ? '<td><span class="js-traffic-edit">Edit</span></td>' : '') + '\n          ';
	        } else {
	          tr.innerHTML = '\n            <td class="js-traffic-name" data-id="' + id + '">\n              <span class="js-traffic-edit js-popup-list-name">' + name + '</span>\n            </td>\n            <td><span class="js-traffic-copy">Copy</span></td>\n            <td><span class="js-traffic-edit">Edit</span></td>\n          ';
	        }

	        table.appendChild(tr);

	        popupBody.addEventListener('click', listClick);
	      });
	    }).catch(function (err) {
	      popupBody.innerHTML = '<div class="popup__message">' + err + '</div>';
	      throw new Error(err);
	    });
	  }

	  function listClick(event) {
	    var target = event.target;
	    var copyBtn = target.closest('.js-traffic-copy');
	    var editBtn = target.closest('.js-traffic-edit');

	    if (copyBtn || editBtn) {
	      var id = target.closest('.js-traffic-row').querySelector('.js-traffic-name').dataset.id;

	      if (copyBtn) {
	        if (id) {
	          openEdit(id);
	        }
	      }

	      if (editBtn) {
	        if (id) {
	          openEdit(id, true);
	        }
	      }
	    }
	  }

	  function openEdit(id, hasEdit) {
	    (0, _fetchApi.fetchData)('/traffic/sources/get', { id: id }).then(function (res) {
	      popup.close();
	      (0, _trafficSourceEdit2.default)(res.data, hasEdit || false);
	    }).catch(function (err) {
	      throw new Error(err);
	    });
	  }
	};

	var _qs = __webpack_require__(16);

	var _qs2 = _interopRequireDefault(_qs);

	var _createPopup = __webpack_require__(81);

	var _createPopup2 = _interopRequireDefault(_createPopup);

	var _trafficSourceEdit = __webpack_require__(97);

	var _trafficSourceEdit2 = _interopRequireDefault(_trafficSourceEdit);

	var _fetchApi = __webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  if (document.querySelector('.js-popup')) {
	    return;
	  }

	  var popup = (0, _createPopup2.default)('List of affiliate networks', null, true);

	  if (!popup) {
	    return;
	  }

	  var popupBody = popup.querySelector('.js-popup-body');

	  if (popupBody) {
	    popup.querySelector('.js-popup-wrap').style.width = '600px';

	    (0, _fetchApi.fetchData)('/affiliate_network/list', {
	      field: 'id,name',
	      order: 'name'
	    }).then(function (res) {
	      var search = document.createElement('div');
	      search.className = 'popup__list-search';
	      search.innerHTML = '\n        <i class="fa fa-search"></i>\n        <input class="js-popup-list-search" type="text" placeholder="Enter to search">';
	      popupBody.appendChild(search);

	      var timeForSearch = void 0;
	      var inputSearch = search.querySelector('.js-popup-list-search');
	      var filterRows = function filterRows() {
	        if (timeForSearch) {
	          clearTimeout(timeForSearch);
	        }

	        timeForSearch = setTimeout(function () {
	          var val = inputSearch.value.trim();
	          var reg = new RegExp(val, 'i');
	          var names = popupBody.querySelectorAll('.js-popup-list-name');

	          if (val) {
	            [].concat(_toConsumableArray(names)).forEach(function (el) {
	              if (el.textContent.search(reg) === -1) {
	                el.closest('.js-popup-row').style.display = 'none';
	              } else {
	                el.closest('.js-popup-row').style.display = '';
	              }
	            });
	          } else {
	            [].concat(_toConsumableArray(names)).forEach(function (el) {
	              el.closest('.js-popup-row').style.display = '';
	            });
	          }
	        }, 200);
	      };

	      inputSearch.addEventListener('keyup', filterRows);
	      inputSearch.addEventListener('paste', filterRows);
	      inputSearch.addEventListener('change', filterRows);

	      var table = document.createElement('table');
	      table.className = 'popup__list';
	      popupBody.appendChild(table);

	      var right = window.__active_permission__;
	      res.data.forEach(function (item) {
	        var name = item.name;
	        var id = item.id;
	        var tr = document.createElement('tr');
	        tr.className = 'js-affiliate-row js-popup-row';

	        if (right) {
	          tr.innerHTML = '\n            <td class="js-affiliate-name" data-id="' + id + '">\n              <span class="js-affiliate-edit js-popup-list-name">' + name + '</span>\n            </td>\n            <td><span class="js-affiliate-copy">Copy</span></td>\n            <td><span class="js-affiliate-edit">Edit</span></td>\n          ';
	        } else {
	          tr.innerHTML = '\n            <td class="js-affiliate-name" data-id="' + id + '">\n              <span class="js-affiliate-edit js-popup-list-name">' + name + '</span>\n            </td>\n            <td><span class="js-affiliate-copy">Copy</span></td>\n            ' + (right.affiliate_network.type.indexOf(2) !== -1 ? '<td><span class="js-affiliate-edit">Edit</span></td>' : '') + '\n          ';
	        }

	        table.appendChild(tr);

	        popupBody.addEventListener('click', listClick);
	      });
	    }).catch(function (err) {
	      popupBody.innerHTML = '<div class="popup__message">' + err + '</div>';
	      throw new Error(err);
	    });
	  }

	  function listClick(event) {
	    var target = event.target;
	    var copyBtn = target.closest('.js-affiliate-copy');
	    var editBtn = target.closest('.js-affiliate-edit');

	    if (copyBtn || editBtn) {
	      var id = target.closest('.js-affiliate-row').querySelector('.js-affiliate-name').dataset.id;

	      if (copyBtn) {
	        if (id) {
	          openEdit(id);
	        }
	      }

	      if (editBtn) {
	        if (id) {
	          openEdit(id, true);
	        }
	      }
	    }
	  }

	  function openEdit(id, hasEdit) {
	    (0, _fetchApi.fetchData)('/affiliate_network/get', { id: id }).then(function (res) {
	      popup.close();
	      (0, _affiliateNetworkEdit2.default)(res.data, hasEdit || false);
	    }).catch(function (err) {
	      throw new Error(err);
	    });
	  }
	};

	var _qs = __webpack_require__(16);

	var _qs2 = _interopRequireDefault(_qs);

	var _createPopup = __webpack_require__(81);

	var _createPopup2 = _interopRequireDefault(_createPopup);

	var _affiliateNetworkEdit = __webpack_require__(99);

	var _affiliateNetworkEdit2 = _interopRequireDefault(_affiliateNetworkEdit);

	var _fetchApi = __webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(fetch) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var stat = document.querySelector('.js-stat');
	  var navControl = document.querySelector('.js-stat-nav');

	  if (stat.classList.contains('is-cohort')) {
	    return;
	  }
	  if (stat.classList.contains('is-trends')) {
	    return;
	  }

	  var dateToString = function dateToString(y, m, d) {
	    var date = new Date(y, m, d);
	    return (0, _dateformat2.default)(date, 'yyyy-mm-dd');
	  };

	  var getFormData = function getFormData() {
	    var params = window.might.stat.params;

	    if (params.level > params.segments.length || params.level > 1 && !params.current) {
	      stat.querySelector('.js-canvas').innerHTML = '';
	      return null;
	    }

	    var data = {};

	    data.draw = params.draw;
	    if (params.level === 1 || !params.is_tree) {
	      data.start = (params.page - 1) * params.length;
	      data.length = params.length;
	    } else {
	      data.start = (params.more_page - 1) * 50;
	      data.length = 50;
	    }
	    data.search = params.search;
	    data.currency = params.currency.toUpperCase();
	    data.currency_type = params.currency_type;
	    data.currency_date = params.currency_date;
	    var from = dateToString(params.date_from.year, params.date_from.month, params.date_from.date);
	    var to = dateToString(params.date_to.year, params.date_to.month, params.date_to.date);
	    data.date_filter = from + ' - ' + to;
	    data.start_time = params.start_time;
	    data.end_time = params.end_time;
	    data.timezone = params.timezone;
	    if (params.postback_date) {
	      data.postback_date = true;
	    }
	    if (params.is_tree) {
	      data.group = params.segments[params.level - 1];
	    } else {
	      data.group = params.segments.join(',');
	    }

	    var filter = [];
	    params.filters_stock.forEach(function (f) {
	      filter.push(f);
	    });
	    params.filter.forEach(function (f) {
	      filter.push(f);
	    });
	    data.filter = JSON.stringify(filter);

	    if (params.sort && params.sort.column && params.sort.direction) {
	      data.order = params.sort.column + ' ' + params.sort.direction.toUpperCase();
	    } else {
	      data.order = false;
	    }

	    var obj = {
	      field: data.group,
	      level: params.level,
	      is_bottom: params.is_tree ? params.segments.length <= params.level : true,
	      form_data: data,
	      is_tree: params.is_tree
	    };

	    if (params.current) {
	      obj.current = params.current;
	      obj.filter = params.filter;
	    }

	    return obj;
	  };

	  stat.addEventListener('drawtable', function () {
	    var obj = getFormData();

	    if (obj) {
	      (0, _fetchApi.fetchObject)('/clicks/grid', obj.form_data).then(function (res) {
	        var params = window.might.stat.params;

	        if (res.draw !== params.draw + 1) {
	          return;
	        }

	        params.draw = res.draw;
	        obj.result = res;

	        if (obj.level === 1) {
	          (0, _tableEvent2.default)(_tableRender2.default.render(obj));

	          if (navControl) {
	            var yPosNav = navControl.getBoundingClientRect().top;
	            var xScrollWindow = window.scrollX;
	            var visibleNav = window.scrollY > 0 && yPosNav < window.innerHeight;

	            if (params.total !== parseInt(res.recordsTotal, 10)) {
	              params.total = parseInt(res.recordsTotal, 10);
	              navControl.updateValue({
	                total: params.total
	              });
	            }

	            if (visibleNav) {
	              var t = 0;
	              var o = navControl;
	              while (o) {
	                if (o.offsetParent) {
	                  t += o.offsetTop;
	                }
	                o = o.offsetParent;
	              }
	              window.scrollTo(xScrollWindow, t - yPosNav);
	            }
	          }

	          stat.triggerEvent('drawgraph');
	        } else {
	          _tableRender2.default.renderRow(obj, params.more_page);
	        }
	      }).catch(function (err) {
	        throw new Error(err);
	      });
	    }
	  });

	  stat.addEventListener('download', function () {
	    var obj = getFormData();

	    if (obj) {
	      var headers = new Headers();
	      headers.append('Content-Type', 'application/x-www-form-urlencoded');

	      var options = {
	        method: 'post',
	        mode: 'cors',
	        headers: headers
	      };

	      if (true) {
	        options.credentials = 'include';
	      }

	      var data = obj.form_data || {};

	      if (window.might.hasOwnProperty('auth_key')) {
	        data.auth_key = window.might.auth_key;
	      }

	      var permissionId = window.cookie('permission_id');

	      if (document.querySelector('.js-stat') && permissionId) {
	        data.permission_user = permissionId;
	      }

	      options.body = _qs2.default.stringify(data);

	      fetch(window.might.url + '/campaign/csv_stat', options).then(function (response) {
	        return response.text();
	      }).then(function (res) {
	        var file = new Blob([res], { type: 'text/csv' });
	        var link = document.createElement('a');

	        if (window.webkitURL !== null) {
	          link.href = window.webkitURL.createObjectURL(file);
	        } else {
	          link.href = window.URL.createObjectURL(file);
	          link.onclick = function (evetn) {
	            document.body.removeChild(event.target);
	          };
	          link.style.display = 'none';
	          document.body.appendChild(link);
	        }

	        link.click();
	      }).catch(function (err) {
	        throw new Error(err);
	      });
	    }
	  });
	};

	var _qs = __webpack_require__(16);

	var _qs2 = _interopRequireDefault(_qs);

	var _dateformat = __webpack_require__(62);

	var _dateformat2 = _interopRequireDefault(_dateformat);

	var _tableRender = __webpack_require__(106);

	var _tableRender2 = _interopRequireDefault(_tableRender);

	var _tableEvent = __webpack_require__(107);

	var _tableEvent2 = _interopRequireDefault(_tableEvent);

	var _fetchApi = __webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _line = __webpack_require__(82);

	var _line2 = _interopRequireDefault(_line);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createNode = function createNode(tag, cls, txt) {
	  var el = document.createElement(tag);
	  var classes = cls || [];
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = classes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var c = _step.value;

	      if (c) el.classList.add(c);
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }

	  if (txt || txt === 0) el.innerHTML = txt;
	  return el;
	};

	var columns = void 0;

	var renderRows = function renderRows(tr, record, response) {
	  var params = window.might.stat.params;
	  var activeItems = (0, _line.getPopupElements)();

	  if (params.is_tree) {
	    tr.level = response.level;
	    tr.filter = [];
	    (response.filter || []).forEach(function (el) {
	      tr.filter.push(el);
	    });

	    tr.filter.push({ field: response.field, value: record[response.field] });
	    tr.thisFilter = { field: response.field, value: record[response.field] };
	  }

	  for (var l in activeItems) {
	    if (activeItems[l][0] === response.field) {
	      tr.classList.add('js-' + activeItems[l][1] + '-row');
	      tr.dataset.id = record[activeItems[l][0]];
	      tr.dataset.row = activeItems[l][1];
	    }
	  }

	  columns.forEach(function (key, j) {
	    var td = createNode('td');
	    var name = void 0;
	    var fields = response.field.split(',');
	    var k = fields[j] || key;

	    if (response.result.names && response.result.names[k] && response.result.names[k][record[k]]) {
	      name = response.result.names[k][record[k]];
	    } else if (record[k] || record[k] === 0) {
	      name = record[k];
	    }

	    var span = createNode('span', null, name);

	    if (response.field === 'campaign_id') {
	      span.classList.add('js-campaign-name');
	    }

	    if (fields[j]) {
	      span.classList.add('is-clickable');

	      if (!params.is_tree) {
	        td.thisFilter = { field: k, value: record[k] };
	      }
	    }

	    if (j === 0) {
	      var main = createNode('div', ['is-main']);
	      td.appendChild(main);

	      if (record.pl && record.pl > 0) {
	        main.classList.add('is-positive');
	      } else if (record.pl && record.pl < 0) {
	        main.classList.add('is-negative');
	      }

	      if (!response.is_bottom) {
	        var swtch = createNode('div', ['is-switch']);
	        main.appendChild(swtch);
	      }

	      main.appendChild(span);

	      for (var _l in activeItems) {
	        if (['', 0, '0'].indexOf(record[activeItems[_l][0]]) > -1) {
	          continue;
	        }

	        if (activeItems[_l][0] === k) {
	          var helper = createNode('div', ['helper', 'js-helper']);
	          var right = window.__active_permission__;

	          if (right) {
	            helper.innerHTML = '<svg class="svg-icon" height="4px" width="20px"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-dots"></use></svg>\n            <div class="helper__cloud">\n            ' + (activeItems[_l][2].indexOf(1) >= 0 && right.campaigns.type.indexOf(1) !== -1 ? '<div class="helper__link"><span class="js-' + activeItems[_l][1] + '-copy">Copy</span></div>' : '') + '\n            ' + (activeItems[_l][2].indexOf(2) >= 0 && right.campaigns.type.indexOf(2) !== -1 ? '<div class="helper__link"><span class="js-' + activeItems[_l][1] + '-edit">Edit</span></div>' : '') + '\n            ' + (activeItems[_l][3].indexOf(3) >= 0 && right.campaigns.type.indexOf(2) !== -1 ? '<div class="helper__link"><span class="js-' + activeItems[_l][1] + '-update-cost">Update cost</span></div>' : '') + '\n            ' + (activeItems[_l][3].indexOf(4) >= 0 ? '<div class="helper__link"><span class="js-' + activeItems[_l][1] + '-links">Links</span></div>' : '') + '\n          </div>';
	          } else {
	            helper.innerHTML = '<svg class="svg-icon" height="4px" width="20px"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-dots"></use></svg>\n            <div class="helper__cloud">\n            ' + (activeItems[_l][2].indexOf(1) >= 0 ? '<div class="helper__link"><span class="js-' + activeItems[_l][1] + '-copy">Copy</span></div>' : '') + '\n            ' + (activeItems[_l][2].indexOf(2) >= 0 ? '<div class="helper__link"><span class="js-' + activeItems[_l][1] + '-edit">Edit</span></div>' : '') + '\n            ' + (activeItems[_l][2].indexOf(3) >= 0 ? '<div class="helper__link"><span class="js-' + activeItems[_l][1] + '-update-cost">Update cost</span></div>' : '') + '\n            ' + (activeItems[_l][2].indexOf(4) >= 0 ? '<div class="helper__link"><span class="js-' + activeItems[_l][1] + '-links">Links</span></div>' : '') + '\n          </div>';
	          }

	          main.appendChild(helper);
	          main.classList.add('is-with-helper');
	        }
	      }
	    } else {
	      td.appendChild(span);
	    }

	    tr.appendChild(td);
	  });
	};

	exports.default = {
	  render: function render(response) {
	    var data = response.result.data;
	    var sum = response.result.sum;
	    var type = typeof data === 'undefined' ? 'undefined' : _typeof(data);

	    var div = createNode('div', ['table']);
	    var table = createNode('table');

	    div.appendChild(table);

	    if (Array.isArray(data)) {
	      if (_typeof(data[0]) === 'object') {
	        (function () {

	          var params = window.might.stat.params;
	          var keys = {};

	          columns = [];

	          for (var col in params.all_columns) {
	            if (params.all_columns.hasOwnProperty(col) && params.columns.indexOf(col) !== -1) {
	              columns.push(col);
	            }
	          }

	          response.field.split(',').reverse().forEach(function (f) {
	            columns.unshift(f);
	          });

	          var thead = createNode('tr');
	          table.appendChild(thead);

	          var width = 100 / (columns.length + 1);
	          var columnsName = window.might.stat.columns_name;

	          columns.forEach(function (key, j) {
	            var th = createNode('th', null, columnsName[key] || key);

	            if (j === 0) {
	              th.style.width = width * 2 + '%';
	            } else {
	              th.style.width = width + '%';
	            }

	            th.className = 'is-sort';

	            if (params.sort && params.sort.column === key) {
	              if (params.sort.direction === 'asc') {
	                th.classList.add('is-asc');
	              } else if (params.sort.direction === 'desc') {
	                th.classList.add('is-desc');
	              }
	            }

	            th.dataset.value = key;
	            thead.appendChild(th);
	          });

	          data.forEach(function (record, i) {
	            if ((typeof record === 'undefined' ? 'undefined' : _typeof(record)) === 'object' && !Array.isArray(record)) {
	              var clsTr = [];

	              if (i % 2) {
	                clsTr.push('is-even-row');
	              }

	              clsTr.push('is-level' + response.level);

	              var tr = createNode('tr', clsTr);
	              table.appendChild(tr);
	              renderRows(tr, record, response);
	            }
	          });

	          if ((typeof sum === 'undefined' ? 'undefined' : _typeof(sum)) === 'object') {
	            (function () {
	              var total = createNode('tr', ['is-total']);
	              table.appendChild(total);

	              columns.forEach(function (key, j) {
	                var td = void 0;

	                if (j === 0) {
	                  td = createNode('td');

	                  var main = createNode('div', ['is-main'], 'Sum');
	                  td.appendChild(main);
	                } else {
	                  td = createNode('td', null, sum.hasOwnProperty(key) ? sum[key] : '');
	                }

	                total.appendChild(td);
	              });
	            })();
	          }
	        })();
	      }
	    }

	    table.addEventListener('click', _line2.default);

	    document.querySelector('.js-canvas').innerHTML = '';
	    document.querySelector('.js-canvas').appendChild(div);

	    return div;
	  },

	  renderRow: function renderRow(response, morePage) {
	    var recordsTotal = parseInt(response.result.recordsTotal, 10);
	    var data = response.result.data;

	    var type = typeof data === 'undefined' ? 'undefined' : _typeof(data);
	    var table = response.current.parentNode;
	    var nextRow = response.current.nextSibling;

	    if (response.current.querySelector('.is-more')) {
	      response.current.parentNode.removeChild(response.current);
	    } else {
	      response.current.classList.add('is-open');
	    }

	    if (Array.isArray(data)) {
	      data.forEach(function (record, i) {
	        if ((typeof record === 'undefined' ? 'undefined' : _typeof(record)) === 'object' && !Array.isArray(record)) {
	          var clsTr = [];

	          if (i % 2) {
	            clsTr.push('is-even-row');
	          }

	          clsTr.push('is-level' + response.level);

	          var tr = createNode('tr', clsTr);

	          if (nextRow) {
	            nextRow._insertBefore(tr);
	          } else {
	            table.appendChild(tr);
	          }

	          renderRows(tr, record, response);
	        }
	      });
	    }

	    if (morePage * 50 < recordsTotal) {
	      var tr = createNode('tr', ['is-level' + response.level]);
	      var td = createNode('td');
	      var div = createNode('div', ['is-more-wrap']);
	      var span = createNode('span', ['is-more'], 'load more...');

	      tr.dataset.morePage = morePage + 1;

	      div.appendChild(span);
	      td.appendChild(div);
	      tr.appendChild(td);

	      if (nextRow) {
	        nextRow._insertBefore(tr);
	      } else {
	        table.appendChild(tr);
	      }
	    }
	  }
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (table) {
	  var stat = document.querySelector('.js-stat');
	  var switches = table.querySelectorAll('.is-switch');
	  var checkboxes = table.querySelectorAll('.is-checkbox');

	  var getLevel = function getLevel(el) {
	    var level = void 0;

	    if (el && el.className) {
	      var match = el.className.match(/is-level(\d)/);

	      if (match) {
	        level = el.className.match(/is-level(\d)/)[1];
	        level = parseInt(level, 10);
	      }
	    }

	    return level || -1;
	  };

	  var getPosition = function getPosition(el) {
	    return el && [].concat(_toConsumableArray(table.querySelectorAll('tr'))).indexOf(el) || -1;
	  };

	  var getElements = function getElements(element) {
	    var trs = table.querySelectorAll('tr');
	    var trsLength = trs.length;
	    var tr = element.closest('tr');

	    if (!tr) {
	      return null;
	    }

	    var position = getPosition(tr);
	    var lvl = getLevel(tr);

	    var elements = {
	      current: tr,
	      siblings: [tr],
	      child: [],
	      offspring: []
	    };

	    if (lvl !== -1 && position !== -1) {
	      var el = void 0;
	      var l = void 0;

	      for (var i = position + 1; i < trsLength; i++) {
	        el = trs[i];
	        l = getLevel(el);

	        if (l >= lvl) {
	          if (l === lvl) {
	            elements.siblings.push(el);
	          }
	        } else {
	          break;
	        }
	      }

	      for (var _i = position + 1; _i < trsLength; _i++) {
	        el = trs[_i];
	        l = getLevel(el);

	        if (l > lvl) {
	          elements.offspring.push(el);

	          if (l - 1 === lvl) {
	            elements.child.push(el);
	          }
	        } else {
	          break;
	        }
	      }

	      for (var _i2 = position - 1; _i2 >= 0; _i2--) {
	        el = trs[_i2];
	        l = getLevel(el);

	        if (l >= lvl) {
	          if (l === lvl) {
	            elements.siblings.unshift(el);
	          }
	        } else {
	          if (l !== -1 && l + 1 === lvl) {
	            elements.parent = el;
	          }
	          break;
	        }
	      }
	    }

	    return elements;
	  };

	  table.addEventListener('click', function (event) {
	    var swtch = event.target.closest('.is-switch');
	    var clickable = event.target.closest('.is-clickable');
	    var sort = event.target.closest('.is-sort');
	    var more = event.target.closest('.is-more');
	    var td = event.target.closest('td');

	    if (swtch) {
	      var elements = getElements(event.target);

	      if (!elements) {
	        return;
	      }

	      if (elements.current.classList.contains('is-open')) {
	        elements.current.classList.remove('is-open');
	        elements.offspring.forEach(function (el) {
	          el.parentNode.removeChild(el);
	        });
	      } else {
	        var level = elements.current.level;
	        var filter = elements.current.filter;

	        if (!level || !filter) {
	          return;
	        }

	        (0, _update2.default)({ render_child_rows: { level: parseInt(level, 10) + 1, filter: filter, current: elements.current } });
	      }
	    } else if (clickable) {
	      var _elements = getElements(event.target);
	      var params = window.might.stat.params;
	      var _filter = void 0;

	      if (params.is_tree) {
	        _filter = Object.assign({}, _elements.current.thisFilter);
	      } else {
	        _filter = Object.assign({}, td.thisFilter);
	      }

	      _filter.title = clickable.textContent;
	      (0, _update2.default)({ filter_stock: { field: _filter.field, value: _filter.value, title: _filter.title } });
	    } else if (sort) {
	      var value = sort.dataset.value;

	      if (value) {
	        (0, _update2.default)({ table_sort: value });
	      }
	    } else if (more) {
	      var _elements2 = getElements(event.target);

	      if (!_elements2) {
	        return;
	      }

	      var _level = _elements2.parent.level;
	      var _filter2 = _elements2.parent.filter;
	      var morePage = parseInt(_elements2.current.dataset.morePage, 10);

	      if (!_level || !_filter2) {
	        return;
	      }

	      (0, _update2.default)({ render_child_rows: { level: parseInt(_level, 10) + 1, filter: _filter2, current: _elements2.current, more_page: morePage } });
	    }
	  });

	  table.addEventListener('change', function (event) {
	    var checkbox = event.target.closest('.is-checkbox');

	    if (!checkbox) {
	      return;
	    }

	    var elements = getElements(event.target);
	    var checked = event.target.checked;

	    if (!elements) {
	      return;
	    }

	    var parent = elements.parent;
	    var parentNotActive = true;

	    var setParentNotActive = function setParentNotActive(prnt) {
	      if (prnt) {
	        prnt.classList.remove('is-select');
	        prnt.querySelector('.is-checkbox').checked = false;
	        setParentNotActive(getElements(prnt).parent);
	      }
	    };

	    if (parent) {
	      parentNotActive = false;

	      elements.siblings.forEach(function (el) {
	        if (!el.querySelector('.is-checkbox').checked) {
	          parentNotActive = true;
	        }
	      });

	      if (parentNotActive) {
	        setParentNotActive(parent);
	      } else {
	        parent.classList.add('is-select');
	        parent.querySelector('.is-checkbox').checked = true;
	        parent.querySelector('.is-checkbox').triggerEvent('change');
	      }
	    }

	    if (parentNotActive) {
	      if (checked) {
	        elements.current.classList.add('is-select');
	        elements.offspring.forEach(function (el) {
	          el.classList.add('is-select');
	          el.querySelector('.is-checkbox').checked = true;
	        });
	      } else {
	        elements.current.classList.remove('is-select');
	        elements.offspring.forEach(function (el) {
	          el.classList.remove('is-select');
	          el.querySelector('.is-checkbox').checked = false;
	        });
	      }
	    }
	  });
	};

	var _update = __webpack_require__(77);

	var _update2 = _interopRequireDefault(_update);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var stat = document.querySelector('.js-stat');
	  var statGraph = stat.querySelector('.js-stat-graph');
	  var statGraphCanvas = stat.querySelector('#stat-graph');

	  if (stat.classList.contains('is-cohort')) {
	    return;
	  }

	  if (stat.classList.contains('is-trends')) {
	    return;
	  }

	  if (!statGraph || !statGraphCanvas) {
	    return;
	  }

	  var dateToString = function dateToString(y, m, d) {
	    var date = new Date(y, m, d);
	    return (0, _dateformat2.default)(date, 'yyyy-mm-dd');
	  };

	  var getFormData = function getFormData() {
	    var params = window.might.stat.params;

	    if (params.level > params.segments.length || params.level > 1 && !params.current) {
	      return null;
	    }

	    var data = {};

	    data.draw = params.draw;
	    data.start = (params.page - 1) * params.length;
	    data.length = params.length;
	    data.search = params.search;
	    data.order = params.order;
	    data.currency = params.currency.toUpperCase();
	    data.currency_type = params.currency_type;
	    data.currency_date = params.currency_date;

	    var from = dateToString(params.date_from.year, params.date_from.month, params.date_from.date);
	    var to = dateToString(params.date_to.year, params.date_to.month, params.date_to.date);
	    data.date_filter = from + ' - ' + to;

	    data.start_time = params.start_time;
	    data.end_time = params.end_time;
	    data.timezone = params.timezone;
	    if (params.postback_date) {
	      data.postback_date = true;
	    }
	    data.group = params.segments[params.level - 1];

	    var filter = [];
	    params.filters_stock.forEach(function (f) {
	      filter.push(f);
	    });
	    params.filter.forEach(function (f) {
	      filter.push(f);
	    });
	    data.filter = JSON.stringify(filter);

	    var fields = [];
	    params.fields_graph.forEach(function (fg) {
	      if (fg.visible) {
	        fields.push(fg.field);
	      }
	    });
	    data.fields = fields.join(',');

	    return data;
	  };

	  stat.addEventListener('drawgraph', function () {
	    var params = window.might.stat.params;

	    if (stat.graph_zoom) {
	      return;
	    }

	    if (!params.show_graph) {
	      statGraph.style.display = 'none';
	      return;
	    }

	    if (statGraphCanvas.resetDate) {
	      return;
	    }

	    var vis = false;

	    params.fields_graph.forEach(function (fg) {
	      if (fg.visible) {
	        vis = true;
	      }
	    });

	    if (!vis) {
	      statGraphCanvas.innerHTML = '';
	      statGraphCanvas.style.display = 'none';
	      statGraph.style.display = '';
	      return;
	    }

	    var obj = getFormData();

	    if (obj) {
	      (0, _fetchApi.fetchObject)('/graph/data', obj).then(function (res) {
	        (0, _graphRender2.default)(res);
	      }).catch(function (err) {
	        throw new Error(err);
	      });
	    }
	  });
	};

	var _qs = __webpack_require__(16);

	var _qs2 = _interopRequireDefault(_qs);

	var _dateformat = __webpack_require__(62);

	var _dateformat2 = _interopRequireDefault(_dateformat);

	var _listEvent = __webpack_require__(57);

	var _listEvent2 = _interopRequireDefault(_listEvent);

	var _update = __webpack_require__(77);

	var _update2 = _interopRequireDefault(_update);

	var _graphRender = __webpack_require__(109);

	var _graphRender2 = _interopRequireDefault(_graphRender);

	var _fetchApi = __webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (result) {
	  var stat = document.querySelector('.js-stat');
	  var datetime = stat.querySelector('.js-stat-datetime');
	  var statGraph = stat.querySelector('.js-stat-graph');
	  var canvas = stat.querySelector('#stat-graph');
	  var res = result || {};
	  var params = window.might.stat.params;

	  var colors = [];
	  var series = [];

	  statGraph.style.display = '';
	  canvas.style.display = '';

	  canvas.innerHTML = '';

	  if (res.result && res.result.msg && typeof res.result.msg === 'string') {
	    canvas.style.display = 'none';
	    return;
	  }

	  canvas.style.display = '';

	  if (Array.isArray(res.names)) {
	    (function () {
	      var i = 0;

	      params.fields_graph.forEach(function (fg, pos) {
	        if (fg.visible) {
	          (function () {
	            var ser = {
	              name: fg.field,
	              data: []
	            };

	            if (res.start && res.step) {
	              res.values[i].forEach(function (value, j) {
	                ser.data[j] = [+new Date(res.step * j * 1000 + res.start * 1000), value];
	              });
	            }

	            series.push(ser);
	            colors.push(window.might.graph_colors[pos]);

	            i++;
	          })();
	        }
	      });
	    })();
	  }

	  _highcharts2.default.setOptions({
	    timezone: 'Africa/Abidjan'
	  });

	  _highcharts2.default.chart('stat-graph', {
	    chart: {
	      zoomType: 'x',
	      spacingLeft: 5,
	      spacingRight: 0,
	      spacingBottom: 0,
	      resetZoomButton: {
	        position: {
	          x: 0,
	          y: 10
	        },
	        theme: {
	          fill: '#0182ec',
	          stroke: '#0182ec',
	          style: {
	            color: '#ffffff'
	          },
	          r: 0,
	          states: {
	            hover: {
	              fill: '#3a62c6',
	              stroke: '#3a62c6',
	              style: {
	                color: '#ffffff'
	              }
	            }
	          }
	        }
	      },
	      events: {
	        selection: function selection(event) {
	          if (!event.resetSelection) {
	            var f = new Date(event.xAxis[0].min);
	            var t = new Date(event.xAxis[0].max);

	            if (!stat.graph_zoom) {
	              stat.graph_zoom = {};
	              stat.graph_zoom.from = Object.assign({}, datetime.value.from);
	              stat.graph_zoom.to = Object.assign({}, datetime.value.to);
	              stat.graph_zoom.start_time = datetime.value.start_time;
	              stat.graph_zoom.end_time = datetime.value.end_time;
	            }

	            datetime.updateValue({
	              from: {
	                year: f.getFullYear(),
	                month: f.getMonth(),
	                date: f.getDate()
	              },
	              to: {
	                year: t.getFullYear(),
	                month: t.getMonth(),
	                date: t.getDate()
	              },
	              start_time: _highcharts2.default.dateFormat('%H:%M', event.xAxis[0].min),
	              end_time: _highcharts2.default.dateFormat('%H:%M', event.xAxis[0].max)
	            });

	            (0, _update2.default)({
	              date_from: datetime.value.from,
	              date_to: datetime.value.to,
	              start_time: datetime.value.start_time,
	              end_time: datetime.value.end_time
	            });
	          } else {
	            if (stat.graph_zoom) {
	              datetime.updateValue(stat.graph_zoom);

	              (0, _update2.default)({
	                date_from: datetime.value.from,
	                date_to: datetime.value.to,
	                start_time: datetime.value.start_time,
	                end_time: datetime.value.end_time
	              });

	              setTimeout(function () {
	                return stat.graph_zoom = null;
	              }, 500);
	            } else {
	              window.location.reload();
	            }
	          }
	        }
	      }
	    },
	    title: {
	      text: null
	    },
	    credits: {
	      enabled: false
	    },
	    xAxis: {
	      dateTimeLabelFormats: {
	        millisecond: '%H:%M:%S',
	        second: '%H:%M:%S',
	        minute: '%H:%M',
	        hour: '%H:%M',
	        day: '%b %e',
	        week: '%b %e',
	        month: '%b \'%y',
	        year: '%Y'
	      },
	      type: 'datetime'
	    },
	    yAxis: {
	      title: {
	        text: null
	      },
	      plotLines: [{
	        value: 0,
	        width: 1,
	        color: '#808080'
	      }]
	    },
	    legend: {
	      enabled: false
	    },
	    tooltip: {
	      shared: true,
	      padding: 15,
	      borderRadius: 0,
	      borderColor: '#3a62c6',
	      backgroundColor: '#ffffff',
	      dateTimeLabelFormats: {
	        millisecond: '%b %e, %Y, %H:%M',
	        second: '%b %e, %Y, %H:%M:%S',
	        minute: '%b %e, %Y, %H:%M',
	        hour: '%b %e, %Y, %H:%M',
	        day: '%b %e, %Y',
	        week: '%b %e, %Y',
	        month: '%B %Y',
	        year: '%Y'
	      },
	      style: {
	        color: '#54647e',
	        fontSize: '14px',
	        lineHeight: '20px'
	      },
	      headerFormat: '<span style="font-weight: bold; font-size: 14px;">{point.key}</span><br/><br/>'
	    },
	    plotOptions: {
	      series: {
	        marker: {
	          symbol: 'circle',
	          radius: 2
	        }
	      }
	    },

	    colors: colors,
	    series: series
	  });
	};

	var _dateformat = __webpack_require__(62);

	var _dateformat2 = _interopRequireDefault(_dateformat);

	var _highcharts = __webpack_require__(110);

	var _highcharts2 = _interopRequireDefault(_highcharts);

	var _update = __webpack_require__(77);

	var _update2 = _interopRequireDefault(_update);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 110 */,
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var stat = document.querySelector('.js-stat');
	  var navControl = document.querySelector('.js-stat-nav');

	  if (!stat.classList.contains('is-cohort')) {
	    return;
	  }

	  var dateToString = function dateToString(y, m, d) {
	    var date = new Date(y, m, d);
	    return (0, _dateformat2.default)(date, 'yyyy-mm-dd');
	  };

	  var getFormData = function getFormData() {
	    var params = window.might.stat.params;
	    var data = {};

	    data.draw = params.draw;
	    data.start = (params.page - 1) * params.length;
	    data.length = params.length;
	    data.order = false;
	    data.currency = params.currency.toUpperCase();
	    data.currency_type = params.currency_type;
	    data.currency_date = params.currency_date;
	    var from = dateToString(params.date_from.year, params.date_from.month, params.date_from.date);
	    var to = dateToString(params.date_to.year, params.date_to.month, params.date_to.date);
	    data.date_filter = from + ' - ' + to;
	    data.start_time = params.start_time;
	    data.end_time = params.end_time;
	    data.timezone = params.timezone;

	    data.group = 'campaign_id';
	    data.field1 = params.cohort_metric1;
	    data.field2 = params.cohort_metric2;
	    data.interval = params.cohort_size;

	    var filter = [];
	    params.filters_stock.forEach(function (f) {
	      filter.push(f);
	    });
	    params.filter.forEach(function (f) {
	      filter.push(f);
	    });
	    data.filter = JSON.stringify(filter);

	    return data;
	  };

	  stat.addEventListener('drawtable', function () {
	    var obj = getFormData();

	    if (obj) {
	      (0, _fetchApi.fetchObject)('/cohort/data', obj).then(function (res) {
	        var params = window.might.stat.params;

	        if (res.error) {
	          return;
	        }

	        (0, _tableCohortEvent2.default)(_tableCohortRender2.default.render(res));

	        if (navControl) {
	          var yPosNav = navControl.getBoundingClientRect().top;
	          var xScrollWindow = window.scrollX;
	          var visibleNav = window.scrollY > 0 && yPosNav < window.innerHeight;

	          if (params.total !== parseInt(res.recordsTotal, 10)) {
	            params.total = parseInt(res.recordsTotal, 10);
	            navControl.updateValue({
	              total: params.total
	            });
	          }

	          if (visibleNav) {
	            var t = 0;
	            var o = navControl;
	            while (o) {
	              if (o.offsetParent) {
	                t += o.offsetTop;
	              }
	              o = o.offsetParent;
	            }
	            window.scrollTo(xScrollWindow, t - yPosNav);
	          }
	        }

	        stat.triggerEvent('drawgraph');
	      }).catch(function (err) {
	        throw new Error(err);
	      });
	    }
	  });
	};

	var _qs = __webpack_require__(16);

	var _qs2 = _interopRequireDefault(_qs);

	var _dateformat = __webpack_require__(62);

	var _dateformat2 = _interopRequireDefault(_dateformat);

	var _tableCohortRender = __webpack_require__(112);

	var _tableCohortRender2 = _interopRequireDefault(_tableCohortRender);

	var _tableCohortEvent = __webpack_require__(113);

	var _tableCohortEvent2 = _interopRequireDefault(_tableCohortEvent);

	var _fetchApi = __webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 112 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var createNode = function createNode(tag, cls, txt) {
	  var el = document.createElement(tag);
	  var classes = cls || [];
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = classes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var c = _step.value;

	      if (c) el.classList.add(c);
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }

	  if (txt || txt === 0) el.innerHTML = txt;
	  return el;
	};

	exports.default = {
	  render: function render(response) {
	    var data = response.result.data;
	    var sum = data.sum;
	    var values = data.values;

	    var div = createNode('div', ['table-cohort']);
	    var table = createNode('table');

	    div.appendChild(table);

	    var stat = document.querySelector('.js-stat');
	    var cohortSize = stat.querySelector('.js-stat-cohort-size');
	    cohortSize.updateValue(data.interval);

	    if ((typeof sum === 'undefined' ? 'undefined' : _typeof(sum)) === 'object' && (typeof values === 'undefined' ? 'undefined' : _typeof(values)) === 'object') {

	      var columnsCount = 0;
	      var metric1 = window.might.stat.params.cohort_metric1;
	      var metric2 = window.might.stat.params.cohort_metric2;

	      for (var i in values) {
	        if (values.hasOwnProperty(i) && Array.isArray(values[i])) {
	          columnsCount = Math.max(values[i].length, columnsCount);
	        }
	      }

	      var thead = createNode('tr');
	      table.appendChild(thead);

	      var th = createNode('th', ['is-left'], 'Daily Cohorts');
	      thead.appendChild(th);

	      th = createNode('th', null, 'Clicks');
	      thead.appendChild(th);

	      for (var _i = 0; _i < columnsCount; _i++) {
	        th = createNode('th', null, _i + 1);
	        thead.appendChild(th);
	      }

	      var tdMedian = [];
	      var clicksMedian = 0;
	      var fragment = document.createDocumentFragment();

	      for (var _i2 in values) {
	        if (values.hasOwnProperty(_i2)) {
	          var tr = createNode('tr');
	          fragment.appendChild(tr);

	          var _td = createNode('td', ['is-left', 'is-bold', 'js-table-cohort-graph']);
	          var span = createNode('span', ['is-clickable'], _i2);
	          _td.appendChild(span);
	          tr.appendChild(_td);

	          var metricSum1 = Number(sum[_i2][metric2]) || 0;
	          var count = Number(sum[_i2] && sum[_i2][metric1]) || 0;
	          clicksMedian += count;
	          _td = createNode('td', null, count);
	          tr.appendChild(_td);

	          var isArray = Array.isArray(values[_i2]);
	          var val = values[_i2];
	          var txt = void 0;
	          var backgroundColor = void 0;
	          var opacity = void 0;
	          var color = void 0;

	          for (var j = 0; j < columnsCount; j++) {
	            tdMedian[j] = tdMedian[j] || 0;

	            if (isArray && val[j]) {
	              if (metricSum1) {
	                txt = Math.round(100 * 100 * val[j][metric2] / metricSum1) / 100 + '%';
	              } else {
	                txt = '0%';
	              }
	              _td = createNode('td', null, txt);
	              tdMedian[j] += val[j].clicks || 0;

	              if (val[j].roi < 0) {
	                backgroundColor = '255,89,100';
	              } else {
	                backgroundColor = '34,193,160';
	              }

	              opacity = Math.abs(val[j].roi) / 300;
	              _td.style.backgroundColor = 'rgba(' + backgroundColor + ',' + opacity + ')';

	              if (opacity > 0.6) {
	                _td.style.color = '#ffffff';
	              }
	            } else {
	              _td = createNode('td');
	            }

	            tr.appendChild(_td);
	          }
	        }
	      }

	      var trMedian = createNode('tr');
	      table.appendChild(trMedian);

	      var td = createNode('td', ['is-left', 'is-bold'], 'Median');
	      trMedian.appendChild(td);

	      td = createNode('td', ['is-bold'], clicksMedian);
	      trMedian.appendChild(td);

	      for (var _j = 0; _j < columnsCount; _j++) {
	        td = createNode('td', ['is-bold'], tdMedian[_j]);
	        trMedian.appendChild(td);
	      }

	      table.appendChild(fragment);
	    }

	    document.querySelector('.js-canvas').innerHTML = '';
	    document.querySelector('.js-canvas').appendChild(div);

	    return div;
	  }
	};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (table) {
	  var colors = window.might.graph_colors;
	  var selectColor = [];

	  for (var i = 0; i < colors.length; i++) {
	    selectColor.push(false);
	  }

	  table.addEventListener('click', function (event) {
	    var clickable = event.target.closest('.js-table-cohort-graph');

	    if (clickable) {
	      var tr = clickable.closest('tr');

	      if (!tr.classList.contains('is-select')) {
	        if (table.classList.contains('is-no-click')) {
	          return;
	        }

	        var color = getColor();

	        tr.querySelectorAll('td')[0].style.backgroundColor = color;
	        tr.dataset.color = color;
	        tr.classList.add('is-select');
	        table.classList.add('is-show-graph');
	      } else {
	        (function () {
	          tr.classList.remove('is-select');
	          tr.querySelectorAll('td')[0].style.backgroundColor = '';
	          unselectColor(tr.dataset.color);
	          tr.dataset.color = null;

	          var noGraph = true;

	          [].concat(_toConsumableArray(table.querySelectorAll('tr'))).forEach(function (el) {
	            if (el.classList.contains('is-select') && noGraph) {
	              noGraph = false;
	            }
	          });

	          if (noGraph) {
	            table.classList.remove('is-show-graph');
	          }
	        })();
	      }

	      if (table.classList.contains('is-show-graph')) {
	        if (table.querySelectorAll('tr.is-select').length === 5) {
	          table.classList.add('is-no-click');
	        } else {
	          table.classList.remove('is-no-click');
	        }
	      }

	      render();
	    }
	  });

	  function render() {
	    var res = [];
	    var color = [];

	    [].concat(_toConsumableArray(table.querySelectorAll('tr.is-select'))).forEach(function (tr) {
	      var line = {
	        data: []
	      };

	      color.push(tr.dataset.color);

	      [].concat(_toConsumableArray(tr.querySelectorAll('td'))).forEach(function (td, i) {
	        if (i === 0) {
	          line.name = td.textContent;
	        } else if (i > 1 && td.textContent) {
	          line.data.push(Number(td.textContent.replace('%', ''), 10));
	        }
	      });

	      res.push(line);
	    });

	    (0, _graphCohortRender2.default)(res, color);
	  }

	  function getColor() {
	    var color = void 0;

	    for (var _i = 0; _i < selectColor.length; _i++) {
	      if (!selectColor[_i]) {
	        color = colors[_i];
	        selectColor[_i] = true;
	        break;
	      }
	    }

	    return color;
	  }

	  function unselectColor(color) {
	    for (var _i2 = 0; _i2 < colors.length; _i2++) {
	      if (colors[_i2] === color) {
	        selectColor[_i2] = false;
	      }
	    }
	  }
	};

	var _update = __webpack_require__(77);

	var _update2 = _interopRequireDefault(_update);

	var _graphCohortRender = __webpack_require__(114);

	var _graphCohortRender2 = _interopRequireDefault(_graphCohortRender);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (result, color) {
	  var stat = document.querySelector('.js-stat');
	  var statGraph = stat.querySelector('.js-stat-graph');
	  var canvas = stat.querySelector('#stat-graph');

	  if (result.length) {
	    statGraph.style.display = '';
	    canvas.style.display = '';
	  } else {
	    statGraph.style.display = 'none';
	    canvas.style.display = 'none';
	  }

	  canvas.innerHTML = '';

	  _highcharts2.default.setOptions({
	    timezone: 'Africa/Abidjan'
	  });

	  _highcharts2.default.chart('stat-graph', {
	    chart: {
	      zoomType: 'x',
	      spacingLeft: 5,
	      spacingRight: 0,
	      spacingBottom: 0,
	      resetZoomButton: {
	        position: {
	          x: 0,
	          y: 10
	        },
	        theme: {
	          fill: '#0182ec',
	          stroke: '#0182ec',
	          style: {
	            color: '#ffffff'
	          },
	          r: 0,
	          states: {
	            hover: {
	              fill: '#3a62c6',
	              stroke: '#3a62c6',
	              style: {
	                color: '#ffffff'
	              }
	            }
	          }
	        }
	      }
	    },
	    title: {
	      text: null
	    },
	    credits: {
	      enabled: false
	    },
	    xAxis: {
	      type: 'linear'
	    },
	    yAxis: {
	      title: {
	        text: null
	      },
	      plotLines: [{
	        value: 0,
	        width: 1,
	        color: '#808080'
	      }]
	    },
	    legend: {
	      enabled: false
	    },
	    tooltip: {
	      shared: true,
	      padding: 15,
	      borderRadius: 0,
	      borderColor: '#3a62c6',
	      backgroundColor: '#ffffff',
	      style: {
	        color: '#54647e',
	        fontSize: '14px',
	        lineHeight: '20px'
	      },
	      headerFormat: '<span style="font-weight: bold; font-size: 14px;">{point.key}</span><br/><br/>'
	    },
	    plotOptions: {
	      series: {
	        marker: {
	          symbol: 'circle',
	          radius: 2
	        },
	        pointStart: 1
	      }
	    },

	    colors: color,
	    series: result
	  });
	};

	var _dateformat = __webpack_require__(62);

	var _dateformat2 = _interopRequireDefault(_dateformat);

	var _highcharts = __webpack_require__(110);

	var _highcharts2 = _interopRequireDefault(_highcharts);

	var _update = __webpack_require__(77);

	var _update2 = _interopRequireDefault(_update);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var stat = document.querySelector('.js-stat');
	  var navControl = document.querySelector('.js-stat-nav');

	  if (!stat.classList.contains('is-trends')) {
	    return;
	  }

	  var dateToString = function dateToString(y, m, d) {
	    var date = new Date(y, m, d);
	    return (0, _dateformat2.default)(date, 'yyyy-mm-dd');
	  };

	  var getFormData = function getFormData() {
	    var params = window.might.stat.params;
	    var data = {};

	    data.draw = params.draw;
	    data.start = (params.page - 1) * params.length;
	    data.length = params.length;
	    data.order = false;
	    data.currency = params.currency.toUpperCase();
	    data.currency_type = params.currency_type;
	    data.currency_date = params.currency_date;
	    var from = dateToString(params.date_from.year, params.date_from.month, params.date_from.date);
	    var to = dateToString(params.date_to.year, params.date_to.month, params.date_to.date);
	    data.date_filter = from + ' - ' + to;
	    data.start_time = params.start_time;
	    data.end_time = params.end_time;
	    data.timezone = params.timezone;

	    if (window.might.stat.params.sort && window.might.stat.params.sort.direction) {
	      var column = window.might.stat.params.sort.column;
	      var direction = window.might.stat.params.sort.direction;
	      data.order = column + ' ' + direction;
	    }

	    data.group = params.segments.join(',');
	    data.field1 = params.cohort_metric1;
	    data.field2 = params.cohort_metric2;
	    data.interval = params.cohort_size;
	    var filter = [];
	    params.filters_stock.forEach(function (f) {
	      filter.push(f);
	    });
	    params.filter.forEach(function (f) {
	      filter.push(f);
	    });
	    data.filter = JSON.stringify(filter);

	    return data;
	  };

	  stat.addEventListener('drawtable', function () {
	    var obj = getFormData();

	    if (obj) {
	      (0, _fetchApi.fetchObject)('/trends/data', obj).then(function (res) {
	        var params = window.might.stat.params;

	        if (res.error) {
	          return;
	        }

	        (0, _tableTrendsEvent2.default)(_tableTrendsRender2.default.render(res));

	        if (navControl) {
	          var yPosNav = navControl.getBoundingClientRect().top;
	          var xScrollWindow = window.scrollX;
	          var visibleNav = window.scrollY > 0 && yPosNav < window.innerHeight;

	          if (params.total !== parseInt(res.recordsTotal, 10)) {
	            params.total = parseInt(res.recordsTotal, 10);
	            navControl.updateValue({
	              total: params.total
	            });
	          }

	          if (visibleNav) {
	            var t = 0;
	            var o = navControl;
	            while (o) {
	              if (o.offsetParent) {
	                t += o.offsetTop;
	              }
	              o = o.offsetParent;
	            }
	            window.scrollTo(xScrollWindow, t - yPosNav);
	          }
	        }

	        stat.triggerEvent('drawgraph');
	      }).catch(function (err) {
	        throw new Error(err);
	      });
	    }
	  });
	};

	var _qs = __webpack_require__(16);

	var _qs2 = _interopRequireDefault(_qs);

	var _dateformat = __webpack_require__(62);

	var _dateformat2 = _interopRequireDefault(_dateformat);

	var _tableTrendsRender = __webpack_require__(116);

	var _tableTrendsRender2 = _interopRequireDefault(_tableTrendsRender);

	var _tableTrendsEvent = __webpack_require__(117);

	var _tableTrendsEvent2 = _interopRequireDefault(_tableTrendsEvent);

	var _fetchApi = __webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _updateVariables = __webpack_require__(78);

	var _updateVariables2 = _interopRequireDefault(_updateVariables);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createNode = function createNode(tag, cls, txt) {
	  var el = document.createElement(tag);
	  var classes = cls || [];
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = classes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var c = _step.value;

	      if (c) el.classList.add(c);
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }

	  if (txt || txt === 0) el.innerHTML = txt;
	  return el;
	};

	exports.default = {
	  render: function render(response) {
	    var data = response.result.data;
	    var sum = data.sum;
	    var values = data.values;

	    var div = createNode('div', ['table-trends']);
	    var table = createNode('table');

	    div.appendChild(table);

	    var stat = document.querySelector('.js-stat');
	    var cohortSize = stat.querySelector('.js-stat-cohort-size');
	    cohortSize.updateValue(data.interval);

	    if ((typeof sum === 'undefined' ? 'undefined' : _typeof(sum)) === 'object' && (typeof values === 'undefined' ? 'undefined' : _typeof(values)) === 'object') {

	      var columnsCount = data.col;
	      var metric1 = window.might.stat.params.cohort_metric1;
	      var metric2 = window.might.stat.params.cohort_metric2;

	      var thead = createNode('tr');
	      table.appendChild(thead);

	      var th = createNode('th', ['is-left', 'is-sort'], 'Trends');
	      var direction = null;
	      var params = window.might.stat.params;

	      if (params.sort && params.sort.direction && params.sort.column && params.sort.column.split('-').indexOf('date_column') < 0 && params.sort.column.split('-').indexOf('date_sum') < 0) {
	        direction = window.might.stat.params.sort.direction;
	        th.classList.add('is-' + direction);
	      }

	      th.setAttribute('data-value', data.group);

	      thead.appendChild(th);

	      th = createNode('th', ['is-sort'], metric1 + ' / ' + metric2);
	      th.setAttribute('data-value', 'date_sum');
	      if (params.sort && params.sort.direction && params.sort.column && params.sort.column.split('-').indexOf('date_sum') > -1) {
	        direction = window.might.stat.params.sort.direction;
	        th.classList.add('is-' + direction);
	      }
	      thead.appendChild(th);

	      for (var i = 0; i < columnsCount; i++) {
	        th = createNode('th', ['is-sort'], data.dates[i]);
	        th.setAttribute('data-value', 'date_column-' + i);

	        if (params.sort && params.sort.direction && params.sort.column && params.sort.column.split('-').indexOf('date_column') >= 0) {
	          var sp = params.sort.column.split('-');
	          if (sp.indexOf('' + i) >= 0) {
	            direction = window.might.stat.params.sort.direction;
	            th.classList.add('is-' + direction);
	          }
	        }

	        thead.appendChild(th);
	      }

	      var tdMedian = [];
	      var tdMedian2 = [];
	      var medianOne = 0;
	      var medianTwo = 0;
	      var fragment = document.createDocumentFragment();

	      for (var k in values) {
	        if (values.hasOwnProperty(k)) {
	          for (var _i in values[k]) {
	            if (values[k].hasOwnProperty(_i)) {
	              var tr = createNode('tr');
	              fragment.appendChild(tr);

	              var _td = createNode('td', ['is-left', 'is-bold', 'js-table-trends-graph']);
	              var name = _i;
	              if (typeof data.names[_i] !== 'undefined') {
	                name = data.names[_i];
	              }
	              var span = createNode('span', ['is-clickable'], '<div class="title">' + name + '</div><div style="display: none" class="element">' + data.group + '</div><div style="display: none" class="value">' + _i + '</div>');

	              _td.appendChild(span);
	              tr.appendChild(_td);

	              var count = Number(sum[k][_i] && sum[k][_i][metric1]) || 0;
	              var count2 = Number(sum[k][_i] && sum[k][_i][metric2]) || 0;
	              medianOne += count;
	              medianTwo += count2;

	              _td = createNode('td', null, count.toFixed(2) + ' / ' + count2.toFixed(2));
	              tr.appendChild(_td);

	              var val = values[k][_i];
	              var txt = void 0;
	              var backgroundColor = void 0;
	              var opacity = void 0;
	              var color = void 0;

	              for (var j = 0; j < columnsCount; j++) {
	                tdMedian[j] = tdMedian[j] || 0;
	                tdMedian2[j] = tdMedian2[j] || 0;
	                if (val[j]) {
	                  if (!val[j][metric1]) {
	                    val[j][metric1] = 0;
	                  }
	                  if (!val[j][metric2]) {
	                    val[j][metric2] = 0;
	                  }
	                  _td = createNode('td', null, val[j][metric1] + ' / ' + val[j][metric2]);
	                  tdMedian[j] += val[j][metric1] || 0;
	                  tdMedian2[j] += val[j][metric2] || 0;
	                  if (val[j].roi < 0) {
	                    backgroundColor = '255,89,100';
	                  } else {
	                    backgroundColor = '34,193,160';
	                  }

	                  opacity = Math.abs(val[j].roi) / 300;
	                  _td.style.backgroundColor = 'rgba(' + backgroundColor + ',' + opacity + ')';

	                  if (opacity > 0.6) {
	                    _td.style.color = '#ffffff';
	                  }
	                } else {
	                  _td = createNode('td');
	                }
	                tr.appendChild(_td);
	              }
	            }
	          }
	        }
	      }

	      var trMedian = createNode('tr');
	      table.appendChild(trMedian);

	      var td = createNode('td', ['is-left', 'is-bold'], 'Median');
	      trMedian.appendChild(td);

	      medianOne = Math.round(medianOne, -2);
	      medianTwo = Math.round(medianTwo, -2);
	      td = createNode('td', ['is-bold'], medianOne + ' / ' + medianTwo);
	      trMedian.appendChild(td);

	      for (var _j = 0; _j < columnsCount; _j++) {
	        tdMedian[_j] = Math.ceil(tdMedian[_j] * 100) / 100;
	        tdMedian2[_j] = Math.ceil(tdMedian2[_j] * 100) / 100;
	        td = createNode('td', ['is-bold'], tdMedian[_j] + ' / ' + tdMedian2[_j]);
	        trMedian.appendChild(td);
	      }

	      table.appendChild(fragment);
	    }

	    (0, _updateVariables2.default)();
	    document.querySelector('.js-canvas').innerHTML = '';
	    document.querySelector('.js-canvas').appendChild(div);

	    return div;
	  }
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (table) {
	  var colors = window.might.graph_colors;
	  var selectColor = [];

	  for (var i = 0; i < colors.length; i++) {
	    selectColor.push(false);
	  }

	  table.addEventListener('click', function (event) {
	    var clickable = event.target.closest('.is-clickable');
	    var sort = event.target.closest('.is-sort');

	    if (clickable) {
	      var elements = event.target;

	      var title = elements.innerHTML;
	      var field = elements.parentNode.getElementsByClassName('element')[0].innerHTML;
	      var value = elements.parentNode.getElementsByClassName('value')[0].innerHTML;
	      (0, _update2.default)({ filter_stock: { field: field, value: value, title: title } });

	      render();
	    } else if (sort) {
	      var _value = sort.dataset.value;
	      if (_value) {
	        (0, _update2.default)({ table_sort: _value });
	      }
	    }
	  });

	  function render() {
	    var res = [];
	    var color = [];

	    [].concat(_toConsumableArray(table.querySelectorAll('tr.is-select'))).forEach(function (tr) {
	      var line = {
	        data: []
	      };

	      color.push(tr.dataset.color);

	      [].concat(_toConsumableArray(tr.querySelectorAll('td'))).forEach(function (td, i) {
	        if (i === 0) {
	          line.name = td.textContent;
	        } else if (i > 1 && td.textContent) {
	          line.data.push(Number(td.textContent.replace('%', ''), 10));
	        }
	      });

	      res.push(line);
	    });

	    (0, _graphTrendsRender2.default)(res, color);
	  }

	  function getColor() {
	    var color = void 0;

	    for (var _i = 0; _i < selectColor.length; _i++) {
	      if (!selectColor[_i]) {
	        color = colors[_i];
	        selectColor[_i] = true;
	        break;
	      }
	    }

	    return color;
	  }

	  function unselectColor(color) {
	    for (var _i2 = 0; _i2 < colors.length; _i2++) {
	      if (colors[_i2] === color) {
	        selectColor[_i2] = false;
	      }
	    }
	  }
	};

	var _update = __webpack_require__(77);

	var _update2 = _interopRequireDefault(_update);

	var _graphTrendsRender = __webpack_require__(118);

	var _graphTrendsRender2 = _interopRequireDefault(_graphTrendsRender);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (result, color) {
	  var stat = document.querySelector('.js-stat');
	  var statGraph = stat.querySelector('.js-stat-graph');
	  var canvas = stat.querySelector('#stat-graph');

	  if (result.length) {
	    statGraph.style.display = '';
	    canvas.style.display = '';
	  } else {
	    statGraph.style.display = 'none';
	    canvas.style.display = 'none';
	  }

	  canvas.innerHTML = '';

	  _highcharts2.default.setOptions({
	    timezone: 'Africa/Abidjan'
	  });

	  _highcharts2.default.chart('stat-graph', {
	    chart: {
	      zoomType: 'x',
	      spacingLeft: 5,
	      spacingRight: 0,
	      spacingBottom: 0,
	      resetZoomButton: {
	        position: {
	          x: 0,
	          y: 10
	        },
	        theme: {
	          fill: '#0182ec',
	          stroke: '#0182ec',
	          style: {
	            color: '#ffffff'
	          },
	          r: 0,
	          states: {
	            hover: {
	              fill: '#3a62c6',
	              stroke: '#3a62c6',
	              style: {
	                color: '#ffffff'
	              }
	            }
	          }
	        }
	      }
	    },
	    title: {
	      text: null
	    },
	    credits: {
	      enabled: false
	    },
	    xAxis: {
	      type: 'linear'
	    },
	    yAxis: {
	      title: {
	        text: null
	      },
	      plotLines: [{
	        value: 0,
	        width: 1,
	        color: '#808080'
	      }]
	    },
	    legend: {
	      enabled: false
	    },
	    tooltip: {
	      shared: true,
	      padding: 15,
	      borderRadius: 0,
	      borderColor: '#3a62c6',
	      backgroundColor: '#ffffff',
	      style: {
	        color: '#54647e',
	        fontSize: '14px',
	        lineHeight: '20px'
	      },
	      headerFormat: '<span style="font-weight: bold; font-size: 14px;">{point.key}</span><br/><br/>'
	    },
	    plotOptions: {
	      series: {
	        marker: {
	          symbol: 'circle',
	          radius: 2
	        },
	        pointStart: 1
	      }
	    },

	    colors: color,
	    series: result
	  });
	};

	var _dateformat = __webpack_require__(62);

	var _dateformat2 = _interopRequireDefault(_dateformat);

	var _highcharts = __webpack_require__(110);

	var _highcharts2 = _interopRequireDefault(_highcharts);

	var _update = __webpack_require__(77);

	var _update2 = _interopRequireDefault(_update);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var settings = document.querySelector('.js-settings');
	  var currentTab = void 0;

	  if (!settings) {
	    return;
	  }

	  initHistory(settings);

	  var tags = document.querySelector('.js-settings-tags');
	  var allTags = document.querySelectorAll('.js-settings-tag');
	  var allTabs = document.querySelectorAll('.js-settings-tab');

	  tags.addEventListener('click', function (event) {
	    var tag = event.target.closest('.js-settings-tag');

	    if (tag) {
	      var index = [].concat(_toConsumableArray(allTags)).indexOf(tag);

	      if (settings.currentTab !== index) {
	        settings.currentTab = index;
	        settings.triggerEvent('newurl');

	        [].concat(_toConsumableArray(allTags)).forEach(function (el) {
	          return el.classList.remove('is-active');
	        });
	        [].concat(_toConsumableArray(allTabs)).forEach(function (el) {
	          return el.classList.remove('is-show');
	        });

	        allTags[index].classList.add('is-active');
	        allTabs[index].classList.add('is-show');
	      }
	    }
	  });

	  allTags[settings.currentTab].classList.add('is-active');
	  allTabs[settings.currentTab].classList.add('is-show');

	  (0, _profile2.default)();
	  (0, _domains2.default)();
	  (0, _conversions2.default)();
	  (0, _rights2.default)();
	};

	var _qs = __webpack_require__(16);

	var _qs2 = _interopRequireDefault(_qs);

	var _createBrowserHistory = __webpack_require__(69);

	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

	var _profile = __webpack_require__(120);

	var _profile2 = _interopRequireDefault(_profile);

	var _domains = __webpack_require__(121);

	var _domains2 = _interopRequireDefault(_domains);

	var _conversions = __webpack_require__(123);

	var _conversions2 = _interopRequireDefault(_conversions);

	var _rights = __webpack_require__(124);

	var _rights2 = _interopRequireDefault(_rights);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function initHistory(settings) {
	  var history = (0, _createBrowserHistory2.default)();
	  var location = history.location;

	  var updateTableParams = function updateTableParams(loc) {
	    var query = _qs2.default.parse(loc.search.slice(1));
	    settings.currentTab = query.tab || 0;
	  };

	  var pushHistroy = function pushHistroy() {
	    history.push({
	      pathname: location.pathname,
	      search: _qs2.default.stringify({
	        tab: settings.currentTab
	      })
	    });
	  };

	  history.listen(function (loc, action) {
	    if (action === 'POP') {
	      updateTableParams(loc);
	      update({ history_pop: true });
	    }
	  });

	  settings.addEventListener('newurl', pushHistroy);
	  updateTableParams(location);
	}

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = function () {
	  var settings = document.querySelector('.js-settings');
	  var profile = settings.querySelector('.js-settings-profile');

	  var name = profile.querySelector('.js-settings-profile-name');
	  var surname = profile.querySelector('.js-settings-profile-surname');
	  var email = profile.querySelector('.js-settings-profile-email');
	  var eur = profile.querySelector('.js-settings-profile-eur');
	  var rub = profile.querySelector('.js-settings-profile-rub');
	  var usd = profile.querySelector('.js-settings-profile-usd');
	  var balance = profile.querySelector('.js-settings-profile-balance');
	  var timezone = profile.querySelector('.js-settings-profile-timezone');
	  var oldPswd = profile.querySelector('.js-settings-profile-old-pswd');
	  var newPswd = profile.querySelector('.js-settings-profile-new-pswd');
	  var confirmPswd = profile.querySelector('.js-settings-profile-confirm-pswd');
	  var message = profile.querySelector('.js-settings-profile-message');
	  var error = profile.querySelector('.js-settings-profile-error');

	  var defaultOptions = void 0;

	  var resetMessages = function resetMessages() {
	    message.textContent = '';
	    error.textContent = '';

	    profile.removeEventListener('click', resetMessages);
	    profile.removeEventListener('focus', resetMessages);
	  };

	  (0, _fetchApi.fetchData)('/user/profile/get').then(function (res) {
	    defaultOptions = res.data;

	    name.value = defaultOptions.name || '';
	    surname.value = defaultOptions.surname || '';
	    email.value = defaultOptions.email || '';
	    balance.value = defaultOptions.balance || 0;

	    switch (defaultOptions.default_currency.toLowerCase()) {
	      case 'eur':
	        eur.classList.add('is-select');
	        break;
	      case 'rub':
	        rub.classList.add('is-select');
	        break;
	      default:
	        usd.classList.add('is-select');
	    }

	    if (defaultOptions.default_timezone) {
	      timezone.updateValue(defaultOptions.default_timezone);
	    }
	  }).catch(function (err) {
	    error.textContent = err;
	    profile.addEventListener('click', resetMessages);
	    profile.addEventListener('focus', resetMessages);
	    throw new Error(err);
	  });

	  profile.addEventListener('mousedown', resetMessages);
	  name.addEventListener('focus', resetMessages);
	  surname.addEventListener('focus', resetMessages);
	  email.addEventListener('focus', resetMessages);
	  oldPswd.addEventListener('focus', resetMessages);
	  newPswd.addEventListener('focus', resetMessages);
	  confirmPswd.addEventListener('focus', resetMessages);

	  eur.addEventListener('click', function () {
	    eur.classList.add('is-select');
	    rub.classList.remove('is-select');
	    usd.classList.remove('is-select');
	  });

	  rub.addEventListener('click', function () {
	    eur.classList.remove('is-select');
	    rub.classList.add('is-select');
	    usd.classList.remove('is-select');
	  });

	  usd.addEventListener('click', function () {
	    eur.classList.remove('is-select');
	    rub.classList.remove('is-select');
	    usd.classList.add('is-select');
	  });

	  settings.querySelector('.js-settings-profile-save').addEventListener('click', function () {
	    var nameVal = name.value;
	    var surnameVal = surname.value;
	    var emailVal = email.value;
	    var timezoneVal = timezone.value;

	    var currencyVal = 'USD';

	    if (eur.classList.contains('is-select')) {
	      currencyVal = 'EUR';
	    } else if (rub.classList.contains('is-select')) {
	      currencyVal = 'RUB';
	    }

	    var oldPswdVal = oldPswd.value;
	    var newPswdVal = newPswd.value;
	    var confirmPswdVal = confirmPswd.value;

	    var toSave = false;
	    var opt = {};

	    var reg = /.+@.+\..+/i;
	    if (!reg.test(emailVal)) {
	      var _ret = function () {
	        email.parentNode.classList.add('is-error');
	        error.textContent = 'Invalid email';

	        var focusEmail = function focusEmail() {
	          email.parentNode.classList.remove('is-error');
	          email.removeEventListener('focus', focusEmail);
	        };

	        email.addEventListener('focus', focusEmail);

	        return {
	          v: void 0
	        };
	      }();

	      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	    } else if (nameVal !== defaultOptions.name) {
	      opt.name = nameVal;
	      toSave = true;
	    }

	    if (oldPswdVal || newPswdVal || confirmPswdVal) {
	      var _ret2 = function () {
	        var focusPswd = function focusPswd() {
	          oldPswd.parentNode.classList.remove('is-error');
	          oldPswd.removeEventListener('focus', focusPswd);
	        };

	        var focusNewPswd = function focusNewPswd() {
	          newPswd.value = '';
	          confirmPswd.value = '';
	          newPswd.parentNode.classList.remove('is-error');
	          confirmPswd.parentNode.classList.remove('is-error');
	          newPswd.removeEventListener('focus', focusNewPswd);
	          confirmPswd.removeEventListener('focus', focusNewPswd);
	        };

	        if (!oldPswdVal) {
	          error.textContent = 'You must enter the old password';
	          oldPswd.parentNode.classList.add('is-error');
	          oldPswd.addEventListener('focus', focusPswd);
	          return {
	            v: void 0
	          };
	        } else if (oldPswdVal === newPswdVal) {
	          error.textContent = 'The new password must be different';
	          newPswd.parentNode.classList.add('is-error');
	          newPswd.addEventListener('focus', focusNewPswd);
	          return {
	            v: void 0
	          };
	        }if (newPswdVal !== confirmPswdVal) {
	          error.textContent = 'Entered passwords do not match';
	          newPswd.parentNode.classList.add('is-error');
	          confirmPswd.parentNode.classList.add('is-error');
	          newPswd.addEventListener('focus', focusNewPswd);
	          confirmPswd.addEventListener('focus', focusNewPswd);
	          return {
	            v: void 0
	          };
	        }

	        opt.old_password = oldPswdVal;
	        opt.password = newPswdVal;
	        opt.confirm_password = confirmPswdVal;
	        toSave = true;
	      }();

	      if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
	    }

	    if (surnameVal !== defaultOptions.surname) {
	      opt.surname = surnameVal;
	      toSave = true;
	    }

	    if (emailVal !== defaultOptions.email) {
	      opt.email = emailVal;
	      toSave = true;
	    }

	    if (timezoneVal !== defaultOptions.default_timezone) {
	      opt.default_timezone = timezoneVal;
	      toSave = true;
	    }

	    if (currencyVal !== defaultOptions.default_currency) {
	      opt.default_currency = currencyVal;
	      toSave = true;
	    }

	    if (toSave) {
	      (0, _fetchApi.fetchData)('/user/profile/update', opt).then(function (res) {
	        if (res.msg === 'Saved') {
	          message.textContent = 'Profile saved';
	          profile.addEventListener('click', resetMessages);
	          profile.addEventListener('focus', resetMessages);
	        }
	      }).catch(function (err) {
	        error.textContent = err;
	        profile.addEventListener('click', resetMessages);
	        profile.addEventListener('focus', resetMessages);
	        throw new Error(err);
	      });
	    } else {
	      message.textContent = 'Nothing to save';
	      profile.addEventListener('click', resetMessages);
	      profile.addEventListener('focus', resetMessages);
	    }
	  });
	};

	var _fetchApi = __webpack_require__(27);

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var settings = document.querySelector('.js-settings');
	  var domains = settings.querySelector('.js-settings-domains');
	  var list = domains.querySelector('.js-settings-domains-list');
	  var createDomain = domains.querySelector('.js-settings-domains-new');
	  var message = domains.querySelector('.js-settings-domains-message');
	  var error = domains.querySelector('.js-settings-domains-error');

	  var resetMessages = function resetMessages() {
	    message.textContent = '';
	    error.textContent = '';

	    domains.removeEventListener('click', resetMessages);
	    domains.removeEventListener('focus', resetMessages);
	  };

	  function showList() {
	    list.innerHTML = '';

	    (0, _fetchApi.fetchData)('/sites/user/list').then(function (res) {
	      (res.data || []).forEach(function (item) {
	        var tr = document.createElement('tr');

	        tr.className = 'js-settings-domains-row';
	        tr.dataset.id = item.id;
	        tr.innerHTML = '\n            <td><span class="js-settings-domains-name">' + item.name + '</span></td>\n            <td style="width: 1%;"><span class="js-settings-domains-edit is-hover">Edit</span></td>\n            <td style="width: 1%;"><span class="js-settings-domains-delete is-hover">Delete</span></td>\n          ';

	        list.appendChild(tr);
	        list.addEventListener('click', clickRows);
	      });
	    }).catch(function (err) {
	      error.textContent = err;
	      throw new Error(err);
	    });
	  }

	  function clickRows(event) {
	    var target = event.target;
	    var editBtn = target.closest('.js-settings-domains-edit');
	    var deleteBtn = target.closest('.js-settings-domains-delete');

	    if (editBtn || deleteBtn) {
	      var row = target.closest('.js-settings-domains-row');
	      var id = row.dataset.id;

	      if (id) {
	        if (editBtn) {
	          openEdit(id, true);
	        }

	        if (deleteBtn) {
	          var name = row.querySelector('.js-settings-domains-name').textContent;

	          if (confirm('Do delete the ' + name + ' domain?')) {
	            deleteDomain(id, row);
	          }
	        }
	      }
	    }
	  }

	  function openEdit(id, hasEdit) {
	    (0, _fetchApi.fetchData)('/permission/list', { id: id }).then(function (res) {
	      (0, _domainsEdit2.default)(res.data[0], hasEdit, showList);
	    }).catch(function (err) {
	      error.textContent = err;
	      domains.addEventListener('click', resetMessages);
	      domains.addEventListener('focus', resetMessages);
	      throw new Error(err);
	    });
	  }

	  function deleteDomain(id, row) {
	    (0, _fetchApi.fetchData)('/sites/delete', { id: id }).then(function (res) {
	      row.parentNode.removeChild(row);
	    }).catch(function (err) {
	      error.textContent = err;
	      domains.addEventListener('click', resetMessages);
	      domains.addEventListener('focus', resetMessages);
	      throw new Error(err);
	    });
	  }

	  createDomain.addEventListener('click', function () {
	    return (0, _domainsEdit2.default)(null, null, showList);
	  });
	  showList();
	};

	var _domainsEdit = __webpack_require__(122);

	var _domainsEdit2 = _interopRequireDefault(_domainsEdit);

	var _fetchApi = __webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = function (initOptions, hasEdit, showList) {
	  if (document.querySelector('.js-popup')) {
	    return null;
	  }

	  var popup = (0, _createPopup2.default)('Adding new domain', true);

	  if (!popup) {
	    return null;
	  }

	  var popupBody = popup.querySelector('.js-popup-body');

	  if (!popupBody) {
	    return null;
	  }

	  popupBody.innerHTML = '\n    <div class="popup__line">\n      <div class="popup__line-label">\n        <span>Name of domain:</span>\n        <div class="info"></div>\n      </div>\n      <div class="popup__line-body">\n        <div class="input">\n          <input class="js-form-name" type="text" placeholder="Create a name of right">\n          <span><span>\n        </div>\n      </div>\n    </div>';

	  var nameField = popupBody.querySelector('.js-form-name');

	  if (initOptions && (typeof initOptions === 'undefined' ? 'undefined' : _typeof(initOptions)) === 'object') {
	    nameField.value = initOptions.name || '';

	    if (hasEdit) {
	      popupBody.currentId = initOptions.id;
	    }
	  }

	  popup.querySelector('.js-popup-save').addEventListener('click', function () {
	    return saveDomain();
	  });

	  function saveDomain(isClose) {
	    if (!nameField.value) {
	      var _ret = function () {
	        nameField.parentNode.classList.add('is-error');
	        nameField.parentNode.querySelector('span').textContent = 'Invalid name of domain';

	        var focusName = function focusName() {
	          nameField.parentNode.classList.remove('is-error');
	          nameField.parentNode.querySelector('span').textContent = '';
	          nameField.removeEventListener('focus', focusName);
	        };

	        nameField.addEventListener('focus', focusName);

	        return {
	          v: void 0
	        };
	      }();

	      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	    }

	    var data = {
	      name: nameField.value
	    };

	    if (popupBody.currentId) {
	      data.id = popupBody.currentId;
	    }

	    (0, _fetchApi.fetchData)('/sites/create', data).then(function (res) {
	      popup.close();
	      showList();
	    }).catch(function (err) {
	      popup.querySelector('.js-popup-error').textContent = err;
	      throw new Error(err);
	    });
	  }

	  return popupBody;
	};

	var _createPopup = __webpack_require__(81);

	var _createPopup2 = _interopRequireDefault(_createPopup);

	var _listEvent = __webpack_require__(57);

	var _listEvent2 = _interopRequireDefault(_listEvent);

	var _checklistEvent = __webpack_require__(90);

	var _checklistEvent2 = _interopRequireDefault(_checklistEvent);

	var _fetchApi = __webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var settings = document.querySelector('.js-settings');
	  var conversions = settings.querySelector('.js-settings-conversions');
	  var textarea = settings.querySelector('.js-settings-conversions-textarea');
	  var upload = settings.querySelector('.js-settings-conversions-upload');
	  var message = conversions.querySelector('.js-settings-conversions-message');
	  var error = conversions.querySelector('.js-settings-conversions-error');

	  var resetMessages = function resetMessages() {
	    message.textContent = '';
	    error.textContent = '';

	    conversions.removeEventListener('click', resetMessages);
	    conversions.removeEventListener('focus', resetMessages);
	  };

	  upload.addEventListener('click', function () {
	    var text = textarea.value;

	    (0, _fetchApi.fetchData)('/upload/conversions', { values: text }).then(function (res) {
	      textarea.value = '';
	      message.textContent = 'Conversions has been saved';
	      conversions.addEventListener('click', resetMessages);
	      conversions.addEventListener('focus', resetMessages);
	    }).catch(function (err) {
	      error.textContent = err;
	      conversions.addEventListener('click', resetMessages);
	      conversions.addEventListener('focus', resetMessages);
	      throw new Error(err);
	    });
	  });
	};

	var _fetchApi = __webpack_require__(27);

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var settings = document.querySelector('.js-settings');
	  var rights = settings.querySelector('.js-settings-rights');
	  var list = rights.querySelector('.js-settings-rights-list');
	  var createRight = rights.querySelector('.js-settings-rights-new');
	  var message = rights.querySelector('.js-settings-rights-message');
	  var error = rights.querySelector('.js-settings-rights-error');

	  var resetMessages = function resetMessages() {
	    message.textContent = '';
	    error.textContent = '';

	    rights.removeEventListener('click', resetMessages);
	    rights.removeEventListener('focus', resetMessages);
	  };

	  function showList() {
	    (0, _fetchApi.fetchData)('/permission/list').then(function (res) {
	      res.data.forEach(function (item) {
	        var tr = document.createElement('tr');

	        tr.className = 'js-settings-rights-row';
	        tr.dataset.id = item.user_id;
	        tr.innerHTML = '\n            <td><span class="js-settings-rights-name">' + item.name + '</span></td>\n            <td><span class="js-settings-rights-email">' + item.email + '</span></td>\n            <td style="width: 1%;"><span class="js-settings-rights-copy is-hover">Copy</span></td>\n            <td style="width: 1%;"><span class="js-settings-rights-edit is-hover">Edit</span></td>\n            <td style="width: 1%;"><span class="js-settings-rights-delete is-hover">Delete</span></td>';

	        list.appendChild(tr);
	        list.addEventListener('click', clickRows);
	      });
	    }).catch(function (err) {
	      error.textContent = err;
	      throw new Error(err);
	    });
	  }

	  function clickRows(event) {
	    var target = event.target;
	    var copyBtn = target.closest('.js-settings-rights-copy');
	    var editBtn = target.closest('.js-settings-rights-edit');
	    var deleteBtn = target.closest('.js-settings-rights-delete');

	    if (copyBtn || editBtn || deleteBtn) {
	      var row = target.closest('.js-settings-rights-row');
	      var id = row.dataset.id;

	      if (id) {
	        if (copyBtn) {
	          openEdit(id);
	        }

	        if (editBtn) {
	          openEdit(id, true);
	        }

	        if (deleteBtn) {
	          var name = row.querySelector('.js-settings-rights-name').textContent;

	          if (confirm('Do delete the ' + name + ' rule?')) {
	            deleteRight(id, row);
	          }
	        }
	      }
	    }
	  }

	  function openEdit(id, hasEdit) {
	    (0, _fetchApi.fetchData)('/permission/list', { id: id }).then(function (res) {
	      (0, _rightsEdit2.default)(res.data[0], hasEdit, showList);
	    }).catch(function (err) {
	      error.textContent = err;
	      rights.addEventListener('click', resetMessages);
	      rights.addEventListener('focus', resetMessages);
	      throw new Error(err);
	    });
	  }

	  function deleteRight(id, row) {
	    (0, _fetchApi.fetchData)('/permission/delete', { id: id }).then(function (res) {
	      row.parentNode.removeChild(row);
	    }).catch(function (err) {
	      error.textContent = err;
	      rights.addEventListener('click', resetMessages);
	      rights.addEventListener('focus', resetMessages);
	      throw new Error(err);
	    });
	  }

	  createRight.addEventListener('click', function () {
	    return (0, _rightsEdit2.default)(null, null, showList);
	  });
	  showList();
	};

	var _rightsEdit = __webpack_require__(125);

	var _rightsEdit2 = _interopRequireDefault(_rightsEdit);

	var _fetchApi = __webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = function (initOptions, hasEdit, showList) {
	  if (document.querySelector('.js-popup')) {
	    return null;
	  }

	  var popup = (0, _createPopup2.default)('Creating new right', true);

	  if (!popup) {
	    return null;
	  }

	  var popupBody = popup.querySelector('.js-popup-body');

	  if (!popupBody) {
	    return null;
	  }

	  popupBody.innerHTML = '\n    <div class="popup__line">\n      <div class="popup__line-label">\n        <span>Name of the right:</span>\n        <div class="info"></div>\n      </div>\n      <div class="popup__line-body">\n        <div class="input">\n          <input class="js-form-name" type="text" placeholder="Create a name of right">\n          <span><span>\n        </div>\n      </div>\n    </div>\n\n    <div class="popup__line">\n      <div class="popup__line-label">\n        <span>Email:</span>\n        <div class="info"></div>\n      </div>\n      <div class="popup__line-body">\n        <div class="input">\n          <input class="js-form-email" type="text" placeholder="Set a user email">\n          <span><span>\n        </div>\n      </div>\n    </div>';

	  function initList(_ref) {
	    var name = _ref.name,
	        url = _ref.url,
	        slug = _ref.slug;

	    popupBody.innerHTML += '\n      <div class="cc js-form-' + slug + '">\n        <div class="popup__line">\n          <div class="popup__line-label">\n            <span>' + name + ':</span>\n            <div class="info"></div>\n          </div>\n          <div class="popup__line-body">\n            <div class="list js-list js-form-permission" data-placeholder="Select permission">\n              <div class="list__wrap" style="display: block;">\n                <div class="list__value js-list-value"></div>\n                <div class="list__dropdown" style="right: 0;">\n                  <div class="list__items js-list-items">\n                    <div class="list__item js-list-item" data-value="all">All</div>\n                    <div class="list__item js-list-item" data-value="assigned">Assigned</div>\n                    <div class="list__item js-list-item" data-value="added_by_himself">Added by himself</div>\n                    <div class="list__item js-list-item" data-value="added_by_himself_assigned">Added by himself assigned</div>\n                    <div class="list__item js-list-item" data-value="no">No</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div>\n              <div class="checkbox js-checkbox js-form-read">Read</div>\n              <div class="checkbox js-checkbox js-form-edit">Edit</div>\n              <div class="checkbox js-checkbox js-form-create">Create</div>\n            </div>\n          </div>\n        </div>\n\n        <div class="popup__line js-form-with-list" style="display: none; margin-top: 10px">\n          <div class="popup__line-label"></div>\n          <div class="popup__line-body">\n            <div class="checklist js-checklist js-form-list"></div>\n          </div>\n        </div>\n      </div>';

	    setTimeout(function () {
	      var form = popupBody.querySelector('.js-form-' + slug);
	      var permission = form.querySelector('.js-form-permission');
	      var read = form.querySelector('.js-form-read');
	      var edit = form.querySelector('.js-form-edit');
	      var create = form.querySelector('.js-form-create');
	      var withList = form.querySelector('.js-form-with-list');
	      var list = form.querySelector('.js-form-list');

	      if (initOptions && (typeof initOptions === 'undefined' ? 'undefined' : _typeof(initOptions)) === 'object') {
	        if (initOptions.values[slug] && _typeof(initOptions.values[slug]) === 'object') {
	          permission.value = initOptions.values[slug].permission || 'all';

	          if (Array.isArray(initOptions.values[slug].type)) {
	            var types = initOptions.values[slug].type;

	            if (types.indexOf(1) !== -1) {
	              read.classList.add('is-select');
	            }

	            if (types.indexOf(2) !== -1) {
	              edit.classList.add('is-select');
	            }

	            if (types.indexOf(3) !== -1) {
	              create.classList.add('is-select');
	            }
	          }

	          if (Array.isArray(initOptions.values[slug].values)) {
	            list.value = list.value || {};
	            initOptions.values[slug].values.forEach(function (item) {
	              list.value[item] = true;
	            });
	          }
	        }
	      }

	      if (!permission.value) {
	        permission.value = 'all';
	      }

	      var checkPermission = function checkPermission() {
	        var val = permission.value;

	        if (val.search('assigned') !== -1) {
	          withList.style.display = '';

	          if (!list.classList.contains('is-load')) {
	            loadList(list, url);
	            list.classList.add('is-load');
	          }
	        } else {
	          withList.style.display = 'none';
	        }
	      };

	      (0, _listEvent2.default)(permission);
	      checkPermission();
	      permission.addEventListener('change', checkPermission);
	    }, 0);
	  }

	  function loadList(list, url) {
	    (0, _fetchApi.fetchData)(url, {
	      field: 'id,name',
	      order: 'name'
	    }).then(function (res) {
	      (0, _checklistEvent2.default)(list, {
	        type: 'line',
	        data: res.data
	      });
	    }).catch(function (err) {
	      throw new Error(err);
	    });
	  }

	  [{ name: 'Campaigns', url: '/campaign/list', slug: 'campaigns' }, { name: 'Landers', url: '/lander/list', slug: 'landers' }, { name: 'Offers', url: '/offer/list', slug: 'offers' }, { name: 'Traffic sources', url: '/traffic/sources/list', slug: 'traffic_source' }, { name: 'Affiliate network', url: '/affiliate_network/list', slug: 'affiliate_network' }].forEach(initList);

	  var nameField = popupBody.querySelector('.js-form-name');
	  var emailField = popupBody.querySelector('.js-form-email');

	  if (initOptions && (typeof initOptions === 'undefined' ? 'undefined' : _typeof(initOptions)) === 'object') {
	    initOptions.values = initOptions.values || {};
	    nameField.value = initOptions.name || '';

	    if (hasEdit) {
	      emailField.value = initOptions.email || '';
	      popupBody.currentId = initOptions.id;
	    } else {
	      if (!/ \(copy\)$/.test(nameField.value)) {
	        nameField.value += ' (copy)';
	      }
	    }
	  }

	  var saveBtn = document.createElement('div');
	  saveBtn.className = 'btn-apply js-popup-only-save';
	  saveBtn.textContent = 'Save';
	  popup.querySelector('.js-popup-save')._insertBefore(saveBtn);
	  saveBtn.addEventListener('click', function () {
	    return saveRight();
	  });
	  popup.querySelector('.js-popup-save').addEventListener('click', function () {
	    return saveRight(true);
	  });

	  function saveRight(isClose) {
	    if (!nameField.value) {
	      var _ret = function () {
	        nameField.parentNode.classList.add('is-error');
	        nameField.parentNode.querySelector('span').textContent = 'Invalid name';

	        var focusName = function focusName() {
	          nameField.parentNode.classList.remove('is-error');
	          nameField.parentNode.querySelector('span').textContent = '';
	          nameField.removeEventListener('focus', focusName);
	        };

	        nameField.addEventListener('focus', focusName);

	        return {
	          v: void 0
	        };
	      }();

	      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	    }

	    var reg = /.+@.+\..+/i;
	    if (!reg.test(emailField.value)) {
	      var _ret2 = function () {
	        emailField.parentNode.classList.add('is-error');
	        emailField.parentNode.querySelector('span').textContent = 'Invalid email';

	        var focusEmail = function focusEmail() {
	          emailField.parentNode.classList.remove('is-error');
	          emailField.parentNode.querySelector('span').textContent = '';
	          emailField.removeEventListener('focus', focusEmail);
	        };

	        emailField.addEventListener('focus', focusEmail);

	        return {
	          v: void 0
	        };
	      }();

	      if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
	    }

	    var data = {
	      name: nameField.value,
	      email: emailField.value,
	      values: {}
	    };

	    ['campaigns', 'landers', 'offers', 'traffic_source', 'affiliate_network'].forEach(function (el) {
	      var form = popupBody.querySelector('.js-form-' + el);
	      var permission = form.querySelector('.js-form-permission');
	      var read = form.querySelector('.js-form-read');
	      var edit = form.querySelector('.js-form-edit');
	      var create = form.querySelector('.js-form-create');
	      var list = form.querySelector('.js-form-list');

	      data.values[el] = {
	        types: [],
	        permission: permission.value
	      };

	      [read, edit, create].forEach(function (checkbox, index) {
	        if (checkbox.classList.contains('is-select')) {
	          data.values[el].types.push(index + 1);
	        }
	      });

	      if (permission.value.search('assigned') !== -1) {
	        data.values[el].values = [];
	        for (var val in list.value) {
	          if (list.value.hasOwnProperty(val) && list.value[val]) {
	            data.values[el].values.push(val);
	          }
	        }
	      }
	    });

	    (0, _fetchApi.fetchData)('/permission/check/email', {
	      email: emailField.value
	    }).then(function (res) {
	      data.for_user = res.data.user_id;
	      saveRightWithId(data, isClose);
	    }).catch(function (err) {
	      popup.querySelector('.js-popup-error').textContent = err;
	      throw new Error(err);
	    });
	  }

	  function saveRightWithId(data, isClose) {
	    (0, _fetchApi.fetchData)('/permission/create', data).then(function (res) {
	      if (isClose) {
	        popup.close();
	        showList();
	      }
	    }).catch(function (err) {
	      popup.querySelector('.js-popup-error').textContent = err;
	      throw new Error(err);
	    });
	  }

	  return popupBody;
	};

	var _createPopup = __webpack_require__(81);

	var _createPopup2 = _interopRequireDefault(_createPopup);

	var _listEvent = __webpack_require__(57);

	var _listEvent2 = _interopRequireDefault(_listEvent);

	var _checklistEvent = __webpack_require__(90);

	var _checklistEvent2 = _interopRequireDefault(_checklistEvent);

	var _fetchApi = __webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }
]);
//# sourceMappingURL=application.js.map