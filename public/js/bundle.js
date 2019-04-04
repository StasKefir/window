/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/es6-promise/dist/es6-promise.js":
/*!*******************************************************!*\
  !*** ../node_modules/es6-promise/dist/es6-promise.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.6+9869a4bc
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}



var _isArray = void 0;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = void 0;
var customSchedulerFn = void 0;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var vertx = Function('return this')().require('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = void 0;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;


  if (_state) {
    var callback = arguments[_state - 1];
    asap(function () {
      return invokeCallback(_state, child, callback, parent._result);
    });
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(2);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var TRY_CATCH_ERROR = { error: null };

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    TRY_CATCH_ERROR.error = error;
    return TRY_CATCH_ERROR;
  }
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === TRY_CATCH_ERROR) {
      reject(promise, TRY_CATCH_ERROR.error);
      TRY_CATCH_ERROR.error = null;
    } else if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;


  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = void 0,
      callback = void 0,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = void 0,
      error = void 0,
      succeeded = void 0,
      failed = void 0;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value.error = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
    resolve(promise, value);
  } else if (failed) {
    reject(promise, error);
  } else if (settled === FULFILLED) {
    fulfill(promise, value);
  } else if (settled === REJECTED) {
    reject(promise, value);
  }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

var Enumerator = function () {
  function Enumerator(Constructor, input) {
    this._instanceConstructor = Constructor;
    this.promise = new Constructor(noop);

    if (!this.promise[PROMISE_ID]) {
      makePromise(this.promise);
    }

    if (isArray(input)) {
      this.length = input.length;
      this._remaining = input.length;

      this._result = new Array(this.length);

      if (this.length === 0) {
        fulfill(this.promise, this._result);
      } else {
        this.length = this.length || 0;
        this._enumerate(input);
        if (this._remaining === 0) {
          fulfill(this.promise, this._result);
        }
      }
    } else {
      reject(this.promise, validationError());
    }
  }

  Enumerator.prototype._enumerate = function _enumerate(input) {
    for (var i = 0; this._state === PENDING && i < input.length; i++) {
      this._eachEntry(input[i], i);
    }
  };

  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
    var c = this._instanceConstructor;
    var resolve$$1 = c.resolve;


    if (resolve$$1 === resolve$1) {
      var _then = getThen(entry);

      if (_then === then && entry._state !== PENDING) {
        this._settledAt(entry._state, i, entry._result);
      } else if (typeof _then !== 'function') {
        this._remaining--;
        this._result[i] = entry;
      } else if (c === Promise$1) {
        var promise = new c(noop);
        handleMaybeThenable(promise, entry, _then);
        this._willSettleAt(promise, i);
      } else {
        this._willSettleAt(new c(function (resolve$$1) {
          return resolve$$1(entry);
        }), i);
      }
    } else {
      this._willSettleAt(resolve$$1(entry), i);
    }
  };

  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
    var promise = this.promise;


    if (promise._state === PENDING) {
      this._remaining--;

      if (state === REJECTED) {
        reject(promise, value);
      } else {
        this._result[i] = value;
      }
    }

    if (this._remaining === 0) {
      fulfill(promise, this._result);
    }
  };

  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
    var enumerator = this;

    subscribe(promise, undefined, function (value) {
      return enumerator._settledAt(FULFILLED, i, value);
    }, function (reason) {
      return enumerator._settledAt(REJECTED, i, reason);
    });
  };

  return Enumerator;
}();

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

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
  let promise = new Promise(function(resolve, reject) {
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
      let xhr = new XMLHttpRequest();

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
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

var Promise$1 = function () {
  function Promise(resolver) {
    this[PROMISE_ID] = nextId();
    this._result = this._state = undefined;
    this._subscribers = [];

    if (noop !== resolver) {
      typeof resolver !== 'function' && needsResolver();
      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
    }
  }

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
  let result;
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
  let author, books;
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


  Promise.prototype.catch = function _catch(onRejection) {
    return this.then(null, onRejection);
  };

  /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */


  Promise.prototype.finally = function _finally(callback) {
    var promise = this;
    var constructor = promise.constructor;

    if (isFunction(callback)) {
      return promise.then(function (value) {
        return constructor.resolve(callback()).then(function () {
          return value;
        });
      }, function (reason) {
        return constructor.resolve(callback()).then(function () {
          throw reason;
        });
      });
    }

    return promise.then(callback, callback);
  };

  return Promise;
}();

Promise$1.prototype.then = then;
Promise$1.all = all;
Promise$1.race = race;
Promise$1.resolve = resolve$1;
Promise$1.reject = reject$1;
Promise$1._setScheduler = setScheduler;
Promise$1._setAsap = setAsap;
Promise$1._asap = asap;

/*global self*/
function polyfill() {
  var local = void 0;

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

  if (P) {
    var promiseToString = null;
    try {
      promiseToString = Object.prototype.toString.call(P.resolve());
    } catch (e) {
      // silently ignored
    }

    if (promiseToString === '[object Promise]' && !P.cast) {
      return;
    }
  }

  local.Promise = Promise$1;
}

// Strange compat..
Promise$1.polyfill = polyfill;
Promise$1.Promise = Promise$1;

return Promise$1;

})));



//# sourceMappingURL=es6-promise.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "../node_modules/process/browser.js"), __webpack_require__(/*! ./../../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/formdata-polyfill/formdata.min.js":
/*!*********************************************************!*\
  !*** ../node_modules/formdata-polyfill/formdata.min.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {;(function(){var k;function l(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var m="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,e){a!=Array.prototype&&a!=Object.prototype&&(a[b]=e.value)},n="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function p(){p=function(){};n.Symbol||(n.Symbol=r)}var r=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function u(){p();var a=n.Symbol.iterator;a||(a=n.Symbol.iterator=n.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&m(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return v(l(this))}});u=function(){}}function v(a){u();a={next:a};a[n.Symbol.iterator]=function(){return this};return a}function x(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:l(a)}}var y;
if("function"==typeof Object.setPrototypeOf)y=Object.setPrototypeOf;else{var z;a:{var A={s:!0},B={};try{B.__proto__=A;z=B.s;break a}catch(a){}z=!1}y=z?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var C=y;function D(){this.h=!1;this.c=null;this.o=void 0;this.b=1;this.m=this.u=0;this.g=null}function E(a){if(a.h)throw new TypeError("Generator is already running");a.h=!0}D.prototype.i=function(a){this.o=a};
D.prototype.j=function(a){this.g={v:a,w:!0};this.b=this.u||this.m};D.prototype["return"]=function(a){this.g={"return":a};this.b=this.m};function F(a,b,e){a.b=e;return{value:b}}function G(a){this.A=a;this.l=[];for(var b in a)this.l.push(b);this.l.reverse()}function H(a){this.a=new D;this.B=a}H.prototype.i=function(a){E(this.a);if(this.a.c)return I(this,this.a.c.next,a,this.a.i);this.a.i(a);return J(this)};
function K(a,b){E(a.a);var e=a.a.c;if(e)return I(a,"return"in e?e["return"]:function(a){return{value:a,done:!0}},b,a.a["return"]);a.a["return"](b);return J(a)}H.prototype.j=function(a){E(this.a);if(this.a.c)return I(this,this.a.c["throw"],a,this.a.i);this.a.j(a);return J(this)};
function I(a,b,e,c){try{var d=b.call(a.a.c,e);if(!(d instanceof Object))throw new TypeError("Iterator result "+d+" is not an object");if(!d.done)return a.a.h=!1,d;var f=d.value}catch(g){return a.a.c=null,a.a.j(g),J(a)}a.a.c=null;c.call(a.a,f);return J(a)}function J(a){for(;a.a.b;)try{var b=a.B(a.a);if(b)return a.a.h=!1,{value:b.value,done:!1}}catch(e){a.a.o=void 0,a.a.j(e)}a.a.h=!1;if(a.a.g){b=a.a.g;a.a.g=null;if(b.w)throw b.v;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function L(a){this.next=function(b){return a.i(b)};this["throw"]=function(b){return a.j(b)};this["return"]=function(b){return K(a,b)};u();this[Symbol.iterator]=function(){return this}}function M(a,b){var e=new L(new H(b));C&&C(e,a.prototype);return e}
if("function"===typeof Blob&&("undefined"===typeof FormData||!FormData.prototype.keys)){var N=function(a,b){for(var e=0;e<a.length;e++)b(a[e])},O=function(a,b,e){return b instanceof Blob?[String(a),b,void 0!==e?e+"":"string"===typeof b.name?b.name:"blob"]:[String(a),String(b)]},P=function(a,b){if(a.length<b)throw new TypeError(b+" argument required, but only "+a.length+" present.");},Q=function(a){var b=x(a);a=b.next().value;b=b.next().value;a instanceof Blob&&(a=new File([a],b,{type:a.type,lastModified:a.lastModified}));
return a},R="object"===typeof window?window:"object"===typeof self?self:this,S=R.FormData,T=R.XMLHttpRequest&&R.XMLHttpRequest.prototype.send,U=R.Request&&R.fetch,V=R.navigator&&R.navigator.sendBeacon;p();var W=R.Symbol&&Symbol.toStringTag;W&&(Blob.prototype[W]||(Blob.prototype[W]="Blob"),"File"in R&&!File.prototype[W]&&(File.prototype[W]="File"));try{new File([],"")}catch(a){R.File=function(b,e,c){b=new Blob(b,c);c=c&&void 0!==c.lastModified?new Date(c.lastModified):new Date;Object.defineProperties(b,
{name:{value:e},lastModifiedDate:{value:c},lastModified:{value:+c},toString:{value:function(){return"[object File]"}}});W&&Object.defineProperty(b,W,{value:"File"});return b}}p();u();var X=function(a){this.f=Object.create(null);if(!a)return this;var b=this;N(a.elements,function(a){if(a.name&&!a.disabled&&"submit"!==a.type&&"button"!==a.type)if("file"===a.type){var c=a.files&&a.files.length?a.files:[new File([],"",{type:"application/octet-stream"})];N(c,function(c){b.append(a.name,c)})}else"select-multiple"===
a.type||"select-one"===a.type?N(a.options,function(c){!c.disabled&&c.selected&&b.append(a.name,c.value)}):"checkbox"===a.type||"radio"===a.type?a.checked&&b.append(a.name,a.value):(c="textarea"===a.type?a.value.replace(/\r\n/g,"\n").replace(/\n/g,"\r\n"):a.value,b.append(a.name,c))})};k=X.prototype;k.append=function(a,b,e){P(arguments,2);var c=x(O.apply(null,arguments));a=c.next().value;b=c.next().value;e=c.next().value;c=this.f;c[a]||(c[a]=[]);c[a].push([b,e])};k["delete"]=function(a){P(arguments,
1);delete this.f[String(a)]};k.entries=function b(){var e=this,c,d,f,g,h,q;return M(b,function(b){switch(b.b){case 1:c=e.f,f=new G(c);case 2:var t;a:{for(t=f;0<t.l.length;){var w=t.l.pop();if(w in t.A){t=w;break a}}t=null}if(null==(d=t)){b.b=0;break}g=x(c[d]);h=g.next();case 5:if(h.done){b.b=2;break}q=h.value;return F(b,[d,Q(q)],6);case 6:h=g.next(),b.b=5}})};k.forEach=function(b,e){P(arguments,1);for(var c=x(this),d=c.next();!d.done;d=c.next()){var f=x(d.value);d=f.next().value;f=f.next().value;
b.call(e,f,d,this)}};k.get=function(b){P(arguments,1);var e=this.f;b=String(b);return e[b]?Q(e[b][0]):null};k.getAll=function(b){P(arguments,1);return(this.f[String(b)]||[]).map(Q)};k.has=function(b){P(arguments,1);return String(b)in this.f};k.keys=function e(){var c=this,d,f,g,h,q;return M(e,function(e){1==e.b&&(d=x(c),f=d.next());if(3!=e.b){if(f.done){e.b=0;return}g=f.value;h=x(g);q=h.next().value;return F(e,q,3)}f=d.next();e.b=2})};k.set=function(e,c,d){P(arguments,2);var f=O.apply(null,arguments);
this.f[f[0]]=[[f[1],f[2]]]};k.values=function c(){var d=this,f,g,h,q,w;return M(c,function(c){1==c.b&&(f=x(d),g=f.next());if(3!=c.b){if(g.done){c.b=0;return}h=g.value;q=x(h);q.next();w=q.next().value;return F(c,w,3)}g=f.next();c.b=2})};X.prototype._asNative=function(){for(var c=new S,d=x(this),f=d.next();!f.done;f=d.next()){var g=x(f.value);f=g.next().value;g=g.next().value;c.append(f,g)}return c};X.prototype._blob=function(){for(var c="----formdata-polyfill-"+Math.random(),d=[],f=x(this),g=f.next();!g.done;g=
f.next()){var h=x(g.value);g=h.next().value;h=h.next().value;d.push("--"+c+"\r\n");h instanceof Blob?d.push('Content-Disposition: form-data; name="'+g+'"; filename="'+h.name+'"\r\n',"Content-Type: "+(h.type||"application/octet-stream")+"\r\n\r\n",h,"\r\n"):d.push('Content-Disposition: form-data; name="'+g+'"\r\n\r\n'+h+"\r\n")}d.push("--"+c+"--");return new Blob(d,{type:"multipart/form-data; boundary="+c})};X.prototype[Symbol.iterator]=function(){return this.entries()};X.prototype.toString=function(){return"[object FormData]"};
W&&(X.prototype[W]="FormData");T&&(R.XMLHttpRequest.prototype.send=function(c){c instanceof X?(c=c._blob(),this.setRequestHeader("Content-Type",c.type),T.call(this,c)):T.call(this,c)});if(U){var Y=R.fetch;R.fetch=function(c,d){d&&d.body&&d.body instanceof X&&(d.body=d.body._blob());return Y.call(this,c,d)}}V&&(R.navigator.sendBeacon=function(c,d){d instanceof X&&(d=d._asNative());return V.call(this,c,d)});R.FormData=X};
})();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/process/browser.js":
/*!******************************************!*\
  !*** ../node_modules/process/browser.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! formdata-polyfill */ "../node_modules/formdata-polyfill/formdata.min.js");

__webpack_require__(/*! es6-promise */ "../node_modules/es6-promise/dist/es6-promise.js").polyfill();

window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var callMeasurer = __webpack_require__(/*! ./parts/callMeasurer */ "./parts/callMeasurer.js"),
      tabs = __webpack_require__(/*! ./parts/tabs */ "./parts/tabs.js"),
      popup = __webpack_require__(/*! ./parts/popup */ "./parts/popup.js"),
      timer = __webpack_require__(/*! ./parts/timer */ "./parts/timer.js"),
      sixForms = __webpack_require__(/*! ./parts/sixForms */ "./parts/sixForms.js"),
      glazTabs = __webpack_require__(/*! ./parts/glazTabs */ "./parts/glazTabs.js"),
      popupTime = __webpack_require__(/*! ./parts/popupTime */ "./parts/popupTime.js"),
      gallery = __webpack_require__(/*! ./parts/gallery */ "./parts/gallery.js"),
      calc = __webpack_require__(/*! ./parts/calc */ "./parts/calc.js");

  callMeasurer();
  tabs();
  popup();
  timer();
  sixForms();
  glazTabs();
  popupTime();
  gallery();
  calc();
});

/***/ }),

/***/ "./parts/calc.js":
/*!***********************!*\
  !*** ./parts/calc.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {
  var glazingPriceBtn = document.querySelectorAll('.glazing_price_btn'),
      modalPopupCalc = document.querySelector('.popup_calc'),
      popupCalcContent = document.querySelector('.popup_calc_content'),
      btnCloseM1 = document.querySelector('.popup_calc_close');
  glazingPriceBtn.forEach(function (item) {
    // Open modal 1
    item.addEventListener('click', function () {
      popupCalcContent.style.top = "3%";
      modalPopupCalc.style.display = "block";
      decorationChild[0].classList.add('active_tab');
    });
  });
  btnCloseM1.addEventListener('click', function (event) {
    // Close modal 1
    modalPopupCalc.style.display = "none";
    clearInput();
  });
  var tabWrapper = document.querySelector('.balcon_icons'),
      popupCalc = document.querySelector('.popup_calc');
  tab = document.querySelectorAll('.icon_type'), decorationChild = document.querySelectorAll('.tabs_img'), // decorationChildAlt = document.querySelectorAll('.tabs_img').alt,
  tabContent = document.querySelectorAll('.big_img_content'), popupInputCalc = popupCalc.getElementsByTagName('input'); // console.log(decorationChildAlt);
  ////////////// check input forms

  function validatePhone(a) {
    return /^(|\d)\d{0,12}$/.test(a);
  }

  popupInputCalc[0].addEventListener('input', function () {
    if (!validatePhone(this.value)) {
      this.value = this.value.slice(0, -1);
    }
  });
  popupInputCalc[1].addEventListener('input', function () {
    if (!validatePhone(this.value)) {
      this.value = this.value.slice(0, -1);
    }
  }); /////////////////////////////////

  function hideTabContent(a) {
    for (var i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  function addActiveClass(a) {
    decorationChild.forEach(function (item) {
      if (item == a) {
        item.classList.add('active_tab');
      } else {
        item.classList.remove('active_tab');
      }
    });
  }

  decorationChild[0].classList.add('active_tab');
  tabWrapper.addEventListener('click', function (event) {
    event.preventDefault();
    var target = event.target;

    if (target && target.classList.contains('tabs_img')) {
      for (var i = 0; i < decorationChild.length; i++) {
        if (target == decorationChild[i]) {
          hideTabContent(0);
          showTabContent(i);

          if (!decorationChild[i].classList.contains('active_tab')) {
            addActiveClass(decorationChild[i]);
          } else {
            console.log('no');
          }

          break;
        }
      }
    }
  }); /// send form 1

  var popupCalcButton = popupCalc.querySelector('.popup_calc_button'),
      popupCalcProfile = document.querySelector('.popup_calc_profile'),
      btnCloseM2 = document.querySelector('.popup_calc_profile_close'),
      checkboxInput1 = document.querySelectorAll('.checkbox')[0],
      checkboxInput2 = document.querySelectorAll('.checkbox')[1],
      popupCalcButton2 = document.querySelector('.popup_calc_profile_button'),
      popupCalcEnd = document.querySelector('.popup_calc_end'),
      popupEndInput = popupCalcEnd.getElementsByTagName("input");
  fcSelect = document.querySelector('.fc-select'), fcOptions = fcSelect.getElementsByTagName('option'); // console.log(fcOptions);

  btnCloseM2.addEventListener('click', function () {
    popupCalcProfile.style.display = "none";
    clearInput(); // console.log(formData);
  });
  popupCalcButton.addEventListener('click', function () {
    if (!(popupInputCalc[1].value === "" || popupInputCalc[1].value === null && popupInputCalc[0].value === "" || popupInputCalc[1].value === null)) {
      modalPopupCalc.style.display = "none";
      popupCalcProfile.style.display = "block";

      for (var i = 0; i < decorationChild; i++) {
        console.log(decorationChild[i]);
      }

      decorationChild.forEach(function (item) {
        if (item.classList.contains('active_tab')) {
          formData.append("typeProfil", item.alt);
        }
      });
      formData.append("width", popupInputCalc[0].value);
      formData.append("height", popupInputCalc[1].value);
      console.log(formData.values);
      clearInput();
    } else {
      alert("введите параметры");
    }
  });
  checkboxInput1.addEventListener('click', function () {
    if (checkboxInput2.checked) {
      checkboxInput2.checked = false;
    }
  });
  checkboxInput2.addEventListener('click', function () {
    if (checkboxInput1.checked) {
      checkboxInput1.checked = false;
    }
  });
  popupCalcButton2.addEventListener('click', function () {
    if (checkboxInput1.checked == true || checkboxInput2.checked == true) {
      popupCalcProfile.style.display = "none";
      popupCalcEnd.style.display = "block";
      formData.append("type", fcSelect.options[fcSelect.selectedIndex].value);

      if (checkboxInput2.checked) {
        formData.append("profileType", "hot");
      } else {
        formData.append("profileType", "cold");
      }

      clearInput();
      console.log(formData.values);
    } else {
      alert("выберите параметры");
    }
  }); // ////////////////// form 3

  var closeForm3 = document.querySelector('.popup_calc_end_close'),
      btnForm3 = popupCalcEnd.getElementsByTagName('button')[1],
      inputCalcEnd1 = popupCalcEnd.getElementsByTagName('input')[0],
      inputCalcEnd2 = popupCalcEnd.getElementsByTagName('input')[1],
      statusMessage = document.createElement('div'),
      formLast = document.querySelector('.form-last'),
      formData = new FormData();
  formLast.appendChild(statusMessage);

  function clearInput() {
    inputCalcEnd1.value = '';
    inputCalcEnd2.value = '';
    checkboxInput1.checked = false;
    checkboxInput2.checked = false;
    popupInputCalc[0].value = "";
    popupInputCalc[1].value = ""; // formData = new FormData();

    fcSelect.selectedIndex = 0;
    addActiveClass(0);
  }

  closeForm3.addEventListener('click', function () {
    popupCalcEnd.style.display = "none";
    clearInput();
    statusMessage.style.display = 'none';
    console.log(formData);
  });
  inputCalcEnd2.addEventListener('input', function () {
    if (!validatePhone(this.value)) {
      this.value = this.value.slice(0, -1);
    }
  });
  var message = {
    loading: "Loading",
    success: "Спасибо! Скоро мы с Вами свяжемся",
    failure: "Что-то пошло не так..."
  };
  btnForm3.addEventListener('click', function (event) {
    event.preventDefault();
    formData.append("userName", inputCalcEnd1.value);
    formData.append("userPhone", inputCalcEnd2.value);

    function postData(data) {
      return new Promise(function (resolve, reject) {
        var requestSecond = new XMLHttpRequest();
        requestSecond.open('POST', 'server.php');
        requestSecond.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        requestSecond.addEventListener('readystatechange', function () {
          if (requestSecond.readyState < 4) {
            resolve();
          } else if (requestSecond.readyState == 4 && requestSecond.status == 200) {
            resolve();
          } else {
            reject();
          }
        });
        var obj = {};
        data.forEach(function (value, key) {
          obj[key] = value;
        });
        console.log(obj);
        var json = JSON.stringify(obj);
        console.log(json);
        requestSecond.send(json);
      });
    } // end postData


    statusMessage.style.display = "block";
    postData(formData).then(function () {
      return statusMessage.innerHTML = message.loading;
    }).then(function () {
      return statusMessage.innerHTML = message.success;
    }).catch(function () {
      return statusMessage.innerHTML = message.failure;
    }).then(clearInput);
    console.log(formData.values);
  });
}

module.exports = calc;

/***/ }),

/***/ "./parts/callMeasurer.js":
/*!*******************************!*\
  !*** ./parts/callMeasurer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function callMeasurer() {
  var btnCall = document.querySelector('.header_btn'),
      btnModal = document.querySelector('.popup_engineer'),
      mainForm = document.querySelector('.main-form'),
      input = btnModal.getElementsByTagName('input'),
      statusMessage = document.createElement('div'),
      inputWrapper,
      close = document.getElementById('btn_close');
  var message = {
    loading: "Loading",
    success: "Спасибо! Скоро мы с Вами свяжемся",
    failure: "Что-то пошло не так..."
  };
  mainForm.appendChild(statusMessage); ////////////////////////////////////////////////////////// вызов и закрытие окна

  btnCall.addEventListener('click', function () {
    btnModal.style.display = "block";
    document.body.style.overflow = "hidden";
  });
  close.addEventListener('click', function () {
    btnModal.style.display = "none";
    clearInput();

    if (statusMessage === null || statusMessage === undefined || statusMessage === "") {} else {
      statusMessage.style.display = "none";
    }
  });
  btnModal.addEventListener('click', function (event) {
    var target = event.target;

    if (target == btnModal) {
      btnModal.style.display = "none";

      if (statusMessage === null || statusMessage === undefined || statusMessage === "") {} else {
        // statusMessage.remove();
        statusMessage.style.display = "none"; // console.log('lol');
      }
    }
  });

  function clearInput() {
    for (var i = 0; i < input.length; i++) {
      input[i].value = '';
    }
  } ///////////////////////////////////////////////////////проверка телефона


  function validatePhone(a) {
    return /^(\+|\d)\d{0,12}$/.test(a);
  }

  input[1].addEventListener('input', function () {
    if (!validatePhone(this.value)) {
      this.value = this.value.slice(0, -1);
    }
  }); /////////////////////////////////////////////////////

  mainForm.addEventListener('submit', function (event) {
    inputWrapper = input[1].value;
    arr = inputWrapper.split('');

    if (!isNaN(+input[1].value) || input[1].value[0] == '+' && !isNaN(+input[1].value.slice(1, input[1].value.length + 1))) {
      var postData = function postData(data) {
        return new Promise(function (resolve, reject) {
          var requestSecond = new XMLHttpRequest();
          requestSecond.open('POST', 'server.php');
          requestSecond.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
          requestSecond.addEventListener('readystatechange', function () {
            if (requestSecond.readyState < 4) {
              resolve();
            } else if (requestSecond.readyState == 4 && requestSecond.status == 200) {
              resolve();
            } else {
              reject();
            }
          });
          var obj = {};
          data.forEach(function (value, key) {
            obj[key] = value;
          });
          console.log(obj);
          var json = JSON.stringify(obj);
          requestSecond.send(json);
        });
      }; // end postData


      event.preventDefault();
      var formData = new FormData(mainForm);
      postData(formData).then(function () {
        statusMessage.innerHTML = message.loading;
        statusMessage.style.display = "block";
      }).then(function () {
        statusMessage.innerHTML = message.success;
        statusMessage.style.display = "block";
      }).catch(function () {
        statusMessage.innerHTML = message.failure;
        statusMessage.style.display = "block";
      }).then(clearInput);
    } else {
      event.preventDefault();
      mainForm.appendChild(statusMessage);
      statusMessage.innerHTML = "Используйте цифры и знак +";
    }
  });
}

module.exports = callMeasurer;

/***/ }),

/***/ "./parts/gallery.js":
/*!**************************!*\
  !*** ./parts/gallery.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function gallery() {
  var galleryContent = document.querySelector('.gallery_content'),
      galleryItem = document.querySelectorAll('.gallery_item'),
      gallImg = document.querySelectorAll('.gall_img');
  galleryItem.forEach(function (item) {
    item.addEventListener('click', function (event) {
      var target = event.target,
          itemChild = item.lastChild;
      event.preventDefault();

      if (target == itemChild.lastChild) {
        var src = target.getAttribute("src"),
            divPopGal = document.createElement('div'),
            divGalBack = document.createElement('div'),
            imgGal = document.createElement('img');
        divPopGal.classList.add('popup-gallery');
        divGalBack.classList.add('gallery-bg');
        imgGal.classList.add('gallery-img');
        document.body.appendChild(divPopGal); // divPopGal.appendChild(divGalBack);

        divPopGal.appendChild(imgGal);
        var arrSrc = src.split("/");
        imgGal.setAttribute("src", "img/our_works/big_img/" + arrSrc[arrSrc.length - 1] + "");
        divPopGal.style.cssText = "position: fixed;\
                    top: 0px;\
                    left: 0px;\
                    height:100%;\
                    width:100%;\
                    background-color:rgba(0,0,0,.75);\
                    display: flex;\
                    align-items: center\
                    justify-content: center\
                    ";
        imgGal.style.cssText = "position: relative;\
                    margin:auto auto;\
                    z-index:2;\
                    max-height:94%;\
                    max-width:94%;\
                    ";
        divPopGal.addEventListener('click', function (event) {
          var target = event.target;
          console.log('hello');
          console.log(target);
          console.log(divGalBack);

          if (target == divPopGal) {
            console.log('no');
            divPopGal.style.display = "none";
          }
        });
      }
    });
  });
}

module.exports = gallery;

/***/ }),

/***/ "./parts/glazTabs.js":
/*!***************************!*\
  !*** ./parts/glazTabs.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

function glazTabs() {
  var tabWrapper = document.querySelector('.glazing_slider'),
      tab = document.querySelectorAll('.btn-glaz'),
      glazingBlock = document.querySelectorAll('.glazing_block'),
      decorationChild = document.querySelectorAll('.decoration-child'),
      // используй табы
  tabContent = document.querySelectorAll('.tab-glaz'); // console.log(tabWrapper);
  // console.log(tab);
  // console.log(tabContent);

  function hideTabContent(a) {
    for (var i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  function addActiveClass(a) {
    tab.forEach(function (item) {
      if (item == a) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  tabWrapper.addEventListener('click', function (event) {
    var target = event.target,
        parentTab;
    console.log(target && (target.parentNode.classList.contains('glazing_block') || target.classList.contains('glazing_block')));

    if (target && (target.parentNode.classList.contains('glazing_block') || target.classList.contains('glazing_block'))) {
      for (var i = 0; i < tabContent.length; i++) {
        if (target == tab[i] || target == glazingBlock[i] || target.parentNode == glazingBlock[i]) {
          hideTabContent(0);
          showTabContent(i);
          parentTab = tab[i].parentNode;
          console.log(parentTab);

          if (!parentTab.classList.contains('active')) {
            addActiveClass(parentTab);
          } else {
            console.log('no');
          }

          break;
        }
      }
    }
  });
}

module.exports = glazTabs;

/***/ }),

/***/ "./parts/popup.js":
/*!************************!*\
  !*** ./parts/popup.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function popup() {
  var btnCallModal = document.querySelectorAll('.phone_link')[0],
      btnAskModal = document.querySelectorAll('.phone_link')[1],
      close = document.querySelector('.popup_close'),
      mainForm = document.querySelector('.popup_main_form'),
      input = mainForm.getElementsByTagName('input'),
      statusMessage = document.createElement('div'),
      inputWrapper,
      popup = document.querySelector('.popup');
  mainForm.appendChild(statusMessage);
  var message = {
    loading: "Loading",
    success: "Спасибо! Скоро мы с Вами свяжемся",
    failure: "Что-то пошло не так..."
  }; ///////////////////////////////////////////////////////////////// закрыть открыть

  btnCallModal.addEventListener('click', function () {
    event.preventDefault();
    popup.style.display = "block";
    document.body.style.overflow = "hidden";
  });
  btnAskModal.addEventListener('click', function () {
    event.preventDefault();
    popup.style.display = "block";
    document.body.style.overflow = "hidden";
  });
  close.addEventListener('click', function () {
    popup.style.display = "none"; // mainForm.lastElementChild.remove();

    statusMessage.style.display = "none";
  }); //////////////////////////////////////////////////////////////////////

  function validatePhone(a) {
    return /^(\+|\d)\d{0,12}$/.test(a);
  }

  input[1].addEventListener('input', function () {
    if (!validatePhone(this.value)) {
      this.value = this.value.slice(0, -1);
    }
  }); //////////////////////////////////////////////////////////////////////

  mainForm.addEventListener('submit', function (event) {
    inputWrapper = input[1].value;
    arr = inputWrapper.split('');

    if (!isNaN(+input[1].value) || input[1].value[0] == '+' && !isNaN(+input[1].value.slice(1, input[1].value.length + 1))) {
      var postData = function postData(data) {
        return new Promise(function (resolve, reject) {
          var requestSecond = new XMLHttpRequest();
          requestSecond.open('POST', 'server.php');
          requestSecond.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
          requestSecond.addEventListener('readystatechange', function () {
            if (requestSecond.readyState < 4) {
              resolve();
            } else if (requestSecond.readyState == 4 && requestSecond.status == 200) {
              resolve();
            } else {
              reject();
            }
          });
          var obj = {};
          data.forEach(function (value, key) {
            obj[key] = value;
          }); // console.log(obj);

          var json = JSON.stringify(obj);
          requestSecond.send(json);
        });
      }; // end postData


      var clearInput = function clearInput() {
        for (var i = 0; i < input.length; i++) {
          input[i].value = '';
        }
      };

      event.preventDefault();
      var formData = new FormData(mainForm);
      postData(formData).then(function () {
        statusMessage.innerHTML = message.loading;
        statusMessage.style.display = "block";
      }).then(function () {
        statusMessage.innerHTML = message.success;
        statusMessage.style.display = "block";
      }).catch(function () {
        statusMessage.innerHTML = message.failure;
        statusMessage.style.display = "block";
      }).then(clearInput);
    } else {
      event.preventDefault();
      mainForm.appendChild(statusMessage);
      statusMessage.innerHTML = "Используйте цифры и знак +";
    }
  });
  popup.addEventListener('click', function () {
    var target = event.target;

    if (target == popup) {
      popup.style.display = "none";
      statusMessage.style.display = "none";
    }
  });
}

module.exports = popup;

/***/ }),

/***/ "./parts/popupTime.js":
/*!****************************!*\
  !*** ./parts/popupTime.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function popupTime() {
  setTimeout(popupT, 60000);

  function popupT() {
    var btnCallModal = document.querySelectorAll('.phone_link')[0],
        btnAskModal = document.querySelectorAll('.phone_link')[1],
        close = document.querySelector('.popup_close'),
        mainForm = document.querySelector('.popup_main_form'),
        input = mainForm.getElementsByTagName('input'),
        statusMessage = document.createElement('div'),
        inputWrapper,
        popup = document.querySelector('.popup');
    popup.style.display = "block";
    mainForm.appendChild(statusMessage);
    var message = {
      loading: "Loading",
      success: "Спасибо! Скоро мы с Вами свяжемся",
      failure: "Что-то пошло не так..."
    }; ///////////////////////////////////////////////////////////////// закрыть открыть

    close.addEventListener('click', function () {
      popup.style.display = "none";

      if (!(statusMessage === null || statusMessage === undefined)) {
        statusMessage.style.display = "none";
      }
    }); //////////////////////////////////////////////////////////////////////

    function validatePhone(a) {
      return /^(\+|\d)\d{0,12}$/.test(a);
    }

    input[1].addEventListener('input', function () {
      if (!validatePhone(this.value)) {
        this.value = this.value.slice(0, -1);
      }
    }); //////////////////////////////////////////////////////////////////////

    mainForm.addEventListener('submit', function (event) {
      inputWrapper = input[1].value;
      arr = inputWrapper.split('');

      if (!isNaN(+input[1].value) || input[1].value[0] == '+' && !isNaN(+input[1].value.slice(1, input[1].value.length + 1))) {
        var postData = function postData(data) {
          return new Promise(function (resolve, reject) {
            var requestSecond = new XMLHttpRequest();
            requestSecond.open('POST', 'server.php');
            requestSecond.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
            requestSecond.addEventListener('readystatechange', function () {
              if (requestSecond.readyState < 4) {
                resolve();
              } else if (requestSecond.readyState == 4 && requestSecond.status == 200) {
                resolve();
              } else {
                reject();
              }
            });
            var obj = {};
            data.forEach(function (value, key) {
              obj[key] = value;
            }); // console.log(obj);

            var json = JSON.stringify(obj);
            requestSecond.send(json);
          });
        }; // end postData


        var clearInput = function clearInput() {
          for (var i = 0; i < input.length; i++) {
            input[i].value = '';
          }
        };

        event.preventDefault();
        var formData = new FormData(mainForm);
        postData(formData).then(function () {
          statusMessage.innerHTML = message.loading;
          statusMessage.style.display = "block";
        }).then(function () {
          statusMessage.innerHTML = message.success;
          statusMessage.style.display = "block";
        }).catch(function () {
          statusMessage.innerHTML = message.failure;
          statusMessage.style.display = "block";
        }).then(clearInput);
      } else {
        event.preventDefault();
        mainForm.appendChild(statusMessage);
        statusMessage.innerHTML = "Используйте цифры и знак +";
      }
    });
    popup.addEventListener('click', function () {
      var target = event.target;

      if (target == popup) {
        popup.style.display = "none";
        statusMessage.style.display = "none";
      }
    });
  }
}

module.exports = popupTime;

/***/ }),

/***/ "./parts/sixForms.js":
/*!***************************!*\
  !*** ./parts/sixForms.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

function sixForms() {
  var arrMainForm = document.querySelectorAll('.main_form'),
      arrInput = document.querySelectorAll('.six-inputs'),
      statusMessage = document.createElement('div'),
      parentInput,
      btnSubmit,
      targetInput,
      targetParent;
  var message = {
    loading: "Loading",
    success: "Спасибо! Скоро мы с Вами свяжемся",
    failure: "Что-то пошло не так..."
  }; ///////////////////////////////////////////////////////проверка телефона

  function validatePhone(a) {
    return /^(\+|\d)\d{0,12}$/.test(a);
  } /////////////////////////////////////////////////////


  arrMainForm.forEach(function (item) {
    item.addEventListener('submit', function (event) {
      event.preventDefault();
      var target = event.target;
      console.log(target);

      for (var i = 0; i < item.length; i++) {
        targetInput = target.getElementsByTagName('input');
        targetParent = target;
        targetInput[1].addEventListener('input', function () {
          if (!validatePhone(this.value)) {
            this.value = this.value.slice(0, -1);
          }
        });
      }

      requestFunc();
    });
  });

  function requestFunc() {
    targetParent.appendChild(statusMessage);
    var formData = new FormData(targetParent);

    function postData(data) {
      return new Promise(function (resolve, reject) {
        var requestSecond = new XMLHttpRequest();
        requestSecond.open('POST', 'server.php');
        requestSecond.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        requestSecond.addEventListener('readystatechange', function () {
          if (requestSecond.readyState < 4) {
            resolve();
          } else if (requestSecond.readyState == 4 && requestSecond.status == 200) {
            resolve();
          } else {
            reject();
          }
        });
        var obj = {};
        data.forEach(function (value, key) {
          obj[key] = value;
        }); // console.log(obj);

        var json = JSON.stringify(obj);
        requestSecond.send(json);
      });
    } // end postData


    function clearInput() {
      for (var i = 0; i < targetInput.length; i++) {
        targetInput[i].value = '';
      }
    }

    postData(formData).then(function () {
      return statusMessage.innerHTML = message.loading;
    }).then(function () {
      return statusMessage.innerHTML = message.success;
    }).catch(function () {
      return statusMessage.innerHTML = message.failure;
    }).then(clearInput);
  }
}

module.exports = sixForms;

/***/ }),

/***/ "./parts/tabs.js":
/*!***********************!*\
  !*** ./parts/tabs.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
  var tabWrapper = document.querySelector('.decoration_slider'),
      tab = document.querySelectorAll('.btn-item'),
      decorItem = document.querySelectorAll('decoration_item'),
      decorationChild = document.querySelectorAll('.decoration-child'),
      tabContent = document.querySelectorAll('.tab_content');

  function hideTabContent(a) {
    for (var i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  function addActiveClass(a) {
    decorationChild.forEach(function (item) {
      if (item == a) {
        item.classList.add('after_click');
      } else {
        item.classList.remove('after_click');
      }
    });
  }

  tabWrapper.addEventListener('click', function (event) {
    var target = event.target,
        parentTab;

    if (target && target.classList.contains('btn-item')) {
      for (var i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          parentTab = tab[i].parentNode; // preParent =parentTab.parentNode;

          console.log(parentTab); // console.log(preParent);

          if (!parentTab.classList.contains('after_click')) {
            addActiveClass(parentTab); // parentTab.classList.add('after_click');
          } else {
            console.log('no');
          }

          break;
        }
      }
    }
  });
}

module.exports = tabs;

/***/ }),

/***/ "./parts/timer.js":
/*!************************!*\
  !*** ./parts/timer.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
  var deadLine = '2019-12-18';

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds, minutes, hours, days;

    if (Date.parse(new Date()) >= Date.parse(endtime)) {
      seconds = 0;
      minutes = 0;
      hours = 0;
      days = 0;
    } else {
      seconds = Math.floor(t / 1000 % 60);
      minutes = Math.floor(t / 1000 / 60 % 60);
      hours = Math.floor(t / (1000 * 60 * 60) % 60);
      days = Math.floor(t / (1000 * 60 * 60 * 24));
    }

    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function setClock(endtime) {
    var days = document.getElementById('days'),
        hours = document.getElementById('hours'),
        minutes = document.getElementById('minutes'),
        seconds = document.getElementById('seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      var t = getTimeRemaining(endtime);

      if (t.days < 10) {
        days.textContent = "0" + t.days;
      } else {
        days.textContent = t.days;
      }

      if (t.hours < 10) {
        hours.textContent = "0" + t.hours;
      } else {
        hours.textContent = t.hours;
      }

      if (t.minutes < 10) {
        minutes.textContent = '0' + t.minutes;
      } else {
        minutes.textContent = t.minutes;
      }

      if (t.seconds < 10) {
        seconds.textContent = '0' + t.seconds;
      } else {
        seconds.textContent = t.seconds;
      }

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(deadLine);
}

module.exports = timer;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map