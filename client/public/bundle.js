(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  SUPABASE_TABLE_NAME: "see",
  SUPABASE_URL: "https://pcgsfodxjxahcrqgyods.supabase.co",
  SUPABASE_ANON: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjZ3Nmb2R4anhhaGNycWd5b2RzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA4MDIzOTAsImV4cCI6MTk4NjM3ODM5MH0.gMQ6cTJ0K_fCuu1wadoZFDxQhyILObDwdfkVp4Z_nms"
};
exports["default"] = _default;

},{}],2:[function(require,module,exports){
"use strict";

var _supabaseJs = require("@supabase/supabase-js");
var _config = _interopRequireDefault(require("./config"));
var _utils = require("./utils");
var _choo = _interopRequireDefault(require("choo"));
var _home = _interopRequireDefault(require("./views/home"));
var _ux = _interopRequireDefault(require("./store/ux"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// index.js

Promise.resolve().then(function () {
  return _interopRequireWildcard(require("./static/app.css"));
});
var database = (0, _supabaseJs.createClient)(_config["default"].SUPABASE_URL, _config["default"].SUPABASE_ANON);
var app = (0, _choo["default"])();
app.route("/", _home["default"]);
app.use(_ux["default"]);
app.use(function (state, emitter) {
  emitter.on("DOMContentLoaded", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var _yield$database$from$, data, error, groups;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return database.from(_config["default"].SUPABASE_TABLE_NAME).select('*').order('id', {
            ascending: false
          });
        case 2:
          _yield$database$from$ = _context.sent;
          data = _yield$database$from$.data;
          error = _yield$database$from$.error;
          if (!error) {
            _context.next = 7;
            break;
          }
          throw error;
        case 7:
          groups = data.reduce(function (groups, item) {
            // timezone change here
            var tzDate = new Date(item.created_at).toLocaleString('en-US', {
              timeZone: 'America/New_York'
            });
            item.data.timestamp = tzDate;
            var date = tzDate.split(',')[0];
            if (!groups[date]) {
              groups[date] = [];
            }
            groups[date].push(item);
            return groups;
          }, {}); // console.log(groups)
          groups = getAnalytics(groups);
          // groups = groupBySession(groups)

          state.data = groups;
          emitter.emit("render");
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
});
app.mount("body");
function getAnalytics(groups) {
  // loop through groups
  var entries = Object.entries(groups);
  var newObj = {};
  for (var i = 0; i < entries.length; i++) {
    var visits = 0;
    var fb = 0;
    var twit = 0;
    var clickThroughs = 0;
    for (var d = 0; d < entries[i][1].length; d++) {
      var element = entries[i][1][d];
      if (element.data.action_type === "visit") {
        visits++;
      }
      if ((0, _utils.getClickThroughs)(element.data)) {
        clickThroughs++;
      }
      if ((0, _utils.getTwitRefs)(element.data.referrer)) {
        twit++;
      }
      // pre-sessionId manual facebook get
      var fbclid = (0, _utils.parseSource)(element.data.source);
      if (fbclid) {
        element.data.sessionId = fbclid;
        fb++;
      }
    }
    entries[i].push({
      visits: visits,
      fb: fb,
      twit: twit,
      clickThroughs: clickThroughs
    });
    newObj[entries[i][0]] = {
      data: entries[i][1],
      meta: entries[i][2]
    };
  }
  return newObj;
}
function groupBySession(groups) {
  // console.log(groups)
  for (var key in groups) {
    console.log(groups[key].data);
    var _g = groups[key].data.reduce(function (group, item) {
      console.log(item);
      if (!item.data.sessionId) {
        item.data.sessionId = "xyz";
      }
      console.log(item.data.sessionId, item.data.sessionId);
      if (!group[item.data.sessionId]) {
        group[item.data.sessionId] = [];
      }
      console.log(group);
      console.log(item.data.sessionId, group[item.data.sessionId]);
      group[item.data.sessionId].push(item);
      return group;
    }, {});

    // if (Object.hasOwnProperty.call(object, key)) {
    //   const element = object[key];

    // }
    return _g;
  }
  console.log(g);
  return groups;
}

},{"./config":1,"./static/app.css":91,"./store/ux":92,"./utils":93,"./views/home":95,"@supabase/supabase-js":47,"choo":58}],3:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FunctionsClient = void 0;
var helper_1 = require("./helper");
var types_1 = require("./types");
var FunctionsClient = /*#__PURE__*/function () {
  function FunctionsClient(url) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$headers = _ref.headers,
      headers = _ref$headers === void 0 ? {} : _ref$headers,
      customFetch = _ref.customFetch;
    _classCallCheck(this, FunctionsClient);
    this.url = url;
    this.headers = headers;
    this.fetch = (0, helper_1.resolveFetch)(customFetch);
  }
  /**
   * Updates the authorization header
   * @param token - the new jwt token sent in the authorisation header
   */
  _createClass(FunctionsClient, [{
    key: "setAuth",
    value: function setAuth(token) {
      this.headers.Authorization = "Bearer ".concat(token);
    }
    /**
     * Invokes a function
     * @param functionName - the name of the function to invoke
     */
  }, {
    key: "invoke",
    value: function invoke(functionName) {
      var invokeOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _a;
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var headers, functionArgs, _headers, body, response, isRelayError, responseType, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              headers = invokeOptions.headers, functionArgs = invokeOptions.body;
              _headers = {};
              if (functionArgs && (headers && !Object.prototype.hasOwnProperty.call(headers, 'Content-Type') || !headers)) {
                if (typeof Blob !== 'undefined' && functionArgs instanceof Blob || functionArgs instanceof ArrayBuffer) {
                  // will work for File as File inherits Blob
                  // also works for ArrayBuffer as it is the same underlying structure as a Blob
                  _headers['Content-Type'] = 'application/octet-stream';
                  body = functionArgs;
                } else if (typeof functionArgs === 'string') {
                  // plain string
                  _headers['Content-Type'] = 'text/plain';
                  body = functionArgs;
                } else if (typeof FormData !== 'undefined' && functionArgs instanceof FormData) {
                  // don't set content-type headers
                  // Request will automatically add the right boundary value
                  body = functionArgs;
                } else {
                  // default, assume this is JSON
                  _headers['Content-Type'] = 'application/json';
                  body = JSON.stringify(functionArgs);
                }
              }
              _context.next = 6;
              return this.fetch("".concat(this.url, "/").concat(functionName), {
                method: 'POST',
                // headers priority is (high to low):
                // 1. invoke-level headers
                // 2. client-level headers
                // 3. default Content-Type header
                headers: Object.assign(Object.assign(Object.assign({}, _headers), this.headers), headers),
                body: body
              })["catch"](function (fetchError) {
                throw new types_1.FunctionsFetchError(fetchError);
              });
            case 6:
              response = _context.sent;
              isRelayError = response.headers.get('x-relay-error');
              if (!(isRelayError && isRelayError === 'true')) {
                _context.next = 10;
                break;
              }
              throw new types_1.FunctionsRelayError(response);
            case 10:
              if (response.ok) {
                _context.next = 12;
                break;
              }
              throw new types_1.FunctionsHttpError(response);
            case 12:
              responseType = ((_a = response.headers.get('Content-Type')) !== null && _a !== void 0 ? _a : 'text/plain').split(';')[0].trim();
              if (!(responseType === 'application/json')) {
                _context.next = 19;
                break;
              }
              _context.next = 16;
              return response.json();
            case 16:
              data = _context.sent;
              _context.next = 34;
              break;
            case 19:
              if (!(responseType === 'application/octet-stream')) {
                _context.next = 25;
                break;
              }
              _context.next = 22;
              return response.blob();
            case 22:
              data = _context.sent;
              _context.next = 34;
              break;
            case 25:
              if (!(responseType === 'multipart/form-data')) {
                _context.next = 31;
                break;
              }
              _context.next = 28;
              return response.formData();
            case 28:
              data = _context.sent;
              _context.next = 34;
              break;
            case 31:
              _context.next = 33;
              return response.text();
            case 33:
              data = _context.sent;
            case 34:
              return _context.abrupt("return", {
                data: data,
                error: null
              });
            case 37:
              _context.prev = 37;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", {
                data: null,
                error: _context.t0
              });
            case 40:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 37]]);
      }));
    }
  }]);
  return FunctionsClient;
}();
exports.FunctionsClient = FunctionsClient;

},{"./helper":4,"./types":6}],4:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
var __createBinding = void 0 && (void 0).__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = void 0 && (void 0).__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveFetch = void 0;
var resolveFetch = function resolveFetch(customFetch) {
  var _fetch;
  if (customFetch) {
    _fetch = customFetch;
  } else if (typeof fetch === 'undefined') {
    _fetch = function _fetch() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$Promise$resolv;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Promise.resolve().then(function () {
                return __importStar(require('cross-fetch'));
              });
            case 2:
              _context.next = 4;
              return (_yield$Promise$resolv = _context.sent).fetch.apply(_yield$Promise$resolv, args);
            case 4:
              return _context.abrupt("return", _context.sent);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
    };
  } else {
    _fetch = fetch;
  }
  return function () {
    return _fetch.apply(void 0, arguments);
  };
};
exports.resolveFetch = resolveFetch;

},{"cross-fetch":59}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FunctionsRelayError = exports.FunctionsHttpError = exports.FunctionsFetchError = exports.FunctionsError = exports.FunctionsClient = void 0;
var FunctionsClient_1 = require("./FunctionsClient");
Object.defineProperty(exports, "FunctionsClient", {
  enumerable: true,
  get: function get() {
    return FunctionsClient_1.FunctionsClient;
  }
});
var types_1 = require("./types");
Object.defineProperty(exports, "FunctionsError", {
  enumerable: true,
  get: function get() {
    return types_1.FunctionsError;
  }
});
Object.defineProperty(exports, "FunctionsFetchError", {
  enumerable: true,
  get: function get() {
    return types_1.FunctionsFetchError;
  }
});
Object.defineProperty(exports, "FunctionsHttpError", {
  enumerable: true,
  get: function get() {
    return types_1.FunctionsHttpError;
  }
});
Object.defineProperty(exports, "FunctionsRelayError", {
  enumerable: true,
  get: function get() {
    return types_1.FunctionsRelayError;
  }
});

},{"./FunctionsClient":3,"./types":6}],6:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }
function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new TypeError('failed to set property'); } return value; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FunctionsHttpError = exports.FunctionsRelayError = exports.FunctionsFetchError = exports.FunctionsError = void 0;
var FunctionsError = /*#__PURE__*/function (_Error) {
  _inherits(FunctionsError, _Error);
  var _super = _createSuper(FunctionsError);
  function FunctionsError(message) {
    var _thisSuper, _this;
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'FunctionsError';
    var context = arguments.length > 2 ? arguments[2] : undefined;
    _classCallCheck(this, FunctionsError);
    _this = _super.call(this, message);
    _set((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(FunctionsError.prototype)), "name", name, _thisSuper, true);
    _this.context = context;
    return _this;
  }
  return _createClass(FunctionsError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
exports.FunctionsError = FunctionsError;
var FunctionsFetchError = /*#__PURE__*/function (_FunctionsError) {
  _inherits(FunctionsFetchError, _FunctionsError);
  var _super2 = _createSuper(FunctionsFetchError);
  function FunctionsFetchError(context) {
    _classCallCheck(this, FunctionsFetchError);
    return _super2.call(this, 'Failed to send a request to the Edge Function', 'FunctionsFetchError', context);
  }
  return _createClass(FunctionsFetchError);
}(FunctionsError);
exports.FunctionsFetchError = FunctionsFetchError;
var FunctionsRelayError = /*#__PURE__*/function (_FunctionsError2) {
  _inherits(FunctionsRelayError, _FunctionsError2);
  var _super3 = _createSuper(FunctionsRelayError);
  function FunctionsRelayError(context) {
    _classCallCheck(this, FunctionsRelayError);
    return _super3.call(this, 'Relay Error invoking the Edge Function', 'FunctionsRelayError', context);
  }
  return _createClass(FunctionsRelayError);
}(FunctionsError);
exports.FunctionsRelayError = FunctionsRelayError;
var FunctionsHttpError = /*#__PURE__*/function (_FunctionsError3) {
  _inherits(FunctionsHttpError, _FunctionsError3);
  var _super4 = _createSuper(FunctionsHttpError);
  function FunctionsHttpError(context) {
    _classCallCheck(this, FunctionsHttpError);
    return _super4.call(this, 'Edge Function returned a non-2xx status code', 'FunctionsHttpError', context);
  }
  return _createClass(FunctionsHttpError);
}(FunctionsError);
exports.FunctionsHttpError = FunctionsHttpError;

},{}],7:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var fetch_1 = require("./lib/fetch");
var helpers_1 = require("./lib/helpers");
var errors_1 = require("./lib/errors");
var GoTrueAdminApi = /*#__PURE__*/function () {
  function GoTrueAdminApi(_ref) {
    var _ref$url = _ref.url,
      url = _ref$url === void 0 ? '' : _ref$url,
      _ref$headers = _ref.headers,
      headers = _ref$headers === void 0 ? {} : _ref$headers,
      fetch = _ref.fetch;
    _classCallCheck(this, GoTrueAdminApi);
    this.url = url;
    this.headers = headers;
    this.fetch = (0, helpers_1.resolveFetch)(fetch);
    this.mfa = {
      listFactors: this._listFactors.bind(this),
      deleteFactor: this._deleteFactor.bind(this)
    };
  }
  /**
   * Removes a logged-in session.
   * @param jwt A valid, logged-in JWT.
   */
  _createClass(GoTrueAdminApi, [{
    key: "signOut",
    value: function signOut(jwt) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0, fetch_1._request)(this.fetch, 'POST', "".concat(this.url, "/logout"), {
                headers: this.headers,
                jwt: jwt,
                noResolveJson: true
              });
            case 3:
              return _context.abrupt("return", {
                data: null,
                error: null
              });
            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              if (!(0, errors_1.isAuthError)(_context.t0)) {
                _context.next = 10;
                break;
              }
              return _context.abrupt("return", {
                data: null,
                error: _context.t0
              });
            case 10:
              throw _context.t0;
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 6]]);
      }));
    }
    /**
     * Sends an invite link to an email address.
     * @param email The email address of the user.
     * @param options.redirectTo A URL or mobile deeplink to send the user to after they are confirmed.
     * @param options.data Optional user metadata
     */
  }, {
    key: "inviteUserByEmail",
    value: function inviteUserByEmail(email) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return (0, fetch_1._request)(this.fetch, 'POST', "".concat(this.url, "/invite"), {
                body: {
                  email: email,
                  data: options.data
                },
                headers: this.headers,
                redirectTo: options.redirectTo,
                xform: fetch_1._userResponse
              });
            case 3:
              return _context2.abrupt("return", _context2.sent);
            case 6:
              _context2.prev = 6;
              _context2.t0 = _context2["catch"](0);
              if (!(0, errors_1.isAuthError)(_context2.t0)) {
                _context2.next = 10;
                break;
              }
              return _context2.abrupt("return", {
                data: {
                  user: null
                },
                error: _context2.t0
              });
            case 10:
              throw _context2.t0;
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[0, 6]]);
      }));
    }
    /**
     * Generates email links and OTPs to be sent via a custom email provider.
     * @param email The user's email.
     * @param options.password User password. For signup only.
     * @param options.data Optional user metadata. For signup only.
     * @param options.redirectTo The redirect url which should be appended to the generated link
     */
  }, {
    key: "generateLink",
    value: function generateLink(params) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var options, rest, body;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              options = params.options, rest = __rest(params, ["options"]);
              body = Object.assign(Object.assign({}, rest), options);
              if ('newEmail' in rest) {
                // replace newEmail with new_email in request body
                body.new_email = rest === null || rest === void 0 ? void 0 : rest.newEmail;
                delete body['newEmail'];
              }
              _context3.next = 6;
              return (0, fetch_1._request)(this.fetch, 'POST', "".concat(this.url, "/admin/generate_link"), {
                body: body,
                headers: this.headers,
                xform: fetch_1._generateLinkResponse,
                redirectTo: options === null || options === void 0 ? void 0 : options.redirectTo
              });
            case 6:
              return _context3.abrupt("return", _context3.sent);
            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](0);
              if (!(0, errors_1.isAuthError)(_context3.t0)) {
                _context3.next = 13;
                break;
              }
              return _context3.abrupt("return", {
                data: {
                  properties: null,
                  user: null
                },
                error: _context3.t0
              });
            case 13:
              throw _context3.t0;
            case 14:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[0, 9]]);
      }));
    }
    // User Admin API
    /**
     * Creates a new user.
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     */
  }, {
    key: "createUser",
    value: function createUser(attributes) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return (0, fetch_1._request)(this.fetch, 'POST', "".concat(this.url, "/admin/users"), {
                body: attributes,
                headers: this.headers,
                xform: fetch_1._userResponse
              });
            case 3:
              return _context4.abrupt("return", _context4.sent);
            case 6:
              _context4.prev = 6;
              _context4.t0 = _context4["catch"](0);
              if (!(0, errors_1.isAuthError)(_context4.t0)) {
                _context4.next = 10;
                break;
              }
              return _context4.abrupt("return", {
                data: {
                  user: null
                },
                error: _context4.t0
              });
            case 10:
              throw _context4.t0;
            case 11:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this, [[0, 6]]);
      }));
    }
    /**
     * Get a list of users.
     *
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     * @param params An object which supports `page` and `perPage` as numbers, to alter the paginated results.
     */
  }, {
    key: "listUsers",
    value: function listUsers(params) {
      var _a, _b, _c, _d, _e, _f, _g;
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var pagination, response, users, total, links;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              pagination = {
                nextPage: null,
                lastPage: 0,
                total: 0
              };
              _context5.next = 4;
              return (0, fetch_1._request)(this.fetch, 'GET', "".concat(this.url, "/admin/users"), {
                headers: this.headers,
                noResolveJson: true,
                query: {
                  page: (_b = (_a = params === null || params === void 0 ? void 0 : params.page) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '',
                  per_page: (_d = (_c = params === null || params === void 0 ? void 0 : params.perPage) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : ''
                },
                xform: fetch_1._noResolveJsonResponse
              });
            case 4:
              response = _context5.sent;
              if (!response.error) {
                _context5.next = 7;
                break;
              }
              throw response.error;
            case 7:
              _context5.next = 9;
              return response.json();
            case 9:
              users = _context5.sent;
              total = (_e = response.headers.get('x-total-count')) !== null && _e !== void 0 ? _e : 0;
              links = (_g = (_f = response.headers.get('link')) === null || _f === void 0 ? void 0 : _f.split(',')) !== null && _g !== void 0 ? _g : [];
              if (links.length > 0) {
                links.forEach(function (link) {
                  var page = parseInt(link.split(';')[0].split('=')[1].substring(0, 1));
                  var rel = JSON.parse(link.split(';')[1].split('=')[1]);
                  pagination["".concat(rel, "Page")] = page;
                });
                pagination.total = parseInt(total);
              }
              return _context5.abrupt("return", {
                data: Object.assign(Object.assign({}, users), pagination),
                error: null
              });
            case 16:
              _context5.prev = 16;
              _context5.t0 = _context5["catch"](0);
              if (!(0, errors_1.isAuthError)(_context5.t0)) {
                _context5.next = 20;
                break;
              }
              return _context5.abrupt("return", {
                data: {
                  users: []
                },
                error: _context5.t0
              });
            case 20:
              throw _context5.t0;
            case 21:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this, [[0, 16]]);
      }));
    }
    /**
     * Get user by id.
     *
     * @param uid The user's unique identifier
     *
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     */
  }, {
    key: "getUserById",
    value: function getUserById(uid) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return (0, fetch_1._request)(this.fetch, 'GET', "".concat(this.url, "/admin/users/").concat(uid), {
                headers: this.headers,
                xform: fetch_1._userResponse
              });
            case 3:
              return _context6.abrupt("return", _context6.sent);
            case 6:
              _context6.prev = 6;
              _context6.t0 = _context6["catch"](0);
              if (!(0, errors_1.isAuthError)(_context6.t0)) {
                _context6.next = 10;
                break;
              }
              return _context6.abrupt("return", {
                data: {
                  user: null
                },
                error: _context6.t0
              });
            case 10:
              throw _context6.t0;
            case 11:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this, [[0, 6]]);
      }));
    }
    /**
     * Updates the user data.
     *
     * @param attributes The data you want to update.
     *
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     */
  }, {
    key: "updateUserById",
    value: function updateUserById(uid, attributes) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return (0, fetch_1._request)(this.fetch, 'PUT', "".concat(this.url, "/admin/users/").concat(uid), {
                body: attributes,
                headers: this.headers,
                xform: fetch_1._userResponse
              });
            case 3:
              return _context7.abrupt("return", _context7.sent);
            case 6:
              _context7.prev = 6;
              _context7.t0 = _context7["catch"](0);
              if (!(0, errors_1.isAuthError)(_context7.t0)) {
                _context7.next = 10;
                break;
              }
              return _context7.abrupt("return", {
                data: {
                  user: null
                },
                error: _context7.t0
              });
            case 10:
              throw _context7.t0;
            case 11:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this, [[0, 6]]);
      }));
    }
    /**
     * Delete a user. Requires a `service_role` key.
     *
     * @param id The user id you want to remove.
     *
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     */
  }, {
    key: "deleteUser",
    value: function deleteUser(id) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              _context8.next = 3;
              return (0, fetch_1._request)(this.fetch, 'DELETE', "".concat(this.url, "/admin/users/").concat(id), {
                headers: this.headers,
                xform: fetch_1._userResponse
              });
            case 3:
              return _context8.abrupt("return", _context8.sent);
            case 6:
              _context8.prev = 6;
              _context8.t0 = _context8["catch"](0);
              if (!(0, errors_1.isAuthError)(_context8.t0)) {
                _context8.next = 10;
                break;
              }
              return _context8.abrupt("return", {
                data: {
                  user: null
                },
                error: _context8.t0
              });
            case 10:
              throw _context8.t0;
            case 11:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this, [[0, 6]]);
      }));
    }
  }, {
    key: "_listFactors",
    value: function _listFactors(params) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var _yield, data, error;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              _context9.next = 3;
              return (0, fetch_1._request)(this.fetch, 'GET', "".concat(this.url, "/admin/users/").concat(params.userId, "/factors"), {
                headers: this.headers,
                xform: function xform(factors) {
                  return {
                    data: {
                      factors: factors
                    },
                    error: null
                  };
                }
              });
            case 3:
              _yield = _context9.sent;
              data = _yield.data;
              error = _yield.error;
              return _context9.abrupt("return", {
                data: data,
                error: error
              });
            case 9:
              _context9.prev = 9;
              _context9.t0 = _context9["catch"](0);
              if (!(0, errors_1.isAuthError)(_context9.t0)) {
                _context9.next = 13;
                break;
              }
              return _context9.abrupt("return", {
                data: null,
                error: _context9.t0
              });
            case 13:
              throw _context9.t0;
            case 14:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this, [[0, 9]]);
      }));
    }
  }, {
    key: "_deleteFactor",
    value: function _deleteFactor(params) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        var data;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _context10.prev = 0;
              _context10.next = 3;
              return (0, fetch_1._request)(this.fetch, 'DELETE', "".concat(this.url, "/admin/users/").concat(params.userId, "/factors/").concat(params.id), {
                headers: this.headers
              });
            case 3:
              data = _context10.sent;
              return _context10.abrupt("return", {
                data: data,
                error: null
              });
            case 7:
              _context10.prev = 7;
              _context10.t0 = _context10["catch"](0);
              if (!(0, errors_1.isAuthError)(_context10.t0)) {
                _context10.next = 11;
                break;
              }
              return _context10.abrupt("return", {
                data: null,
                error: _context10.t0
              });
            case 11:
              throw _context10.t0;
            case 12:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this, [[0, 7]]);
      }));
    }
  }]);
  return GoTrueAdminApi;
}();
exports["default"] = GoTrueAdminApi;

},{"./lib/errors":11,"./lib/fetch":12,"./lib/helpers":13}],8:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var GoTrueAdminApi_1 = __importDefault(require("./GoTrueAdminApi"));
var constants_1 = require("./lib/constants");
var errors_1 = require("./lib/errors");
var fetch_1 = require("./lib/fetch");
var helpers_1 = require("./lib/helpers");
var local_storage_1 = __importDefault(require("./lib/local-storage"));
var polyfills_1 = require("./lib/polyfills");
(0, polyfills_1.polyfillGlobalThis)(); // Make "globalThis" available
var DEFAULT_OPTIONS = {
  url: constants_1.GOTRUE_URL,
  storageKey: constants_1.STORAGE_KEY,
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true,
  headers: constants_1.DEFAULT_HEADERS
};
var GoTrueClient = /*#__PURE__*/function () {
  /**
   * Create a new client for use in the browser.
   */
  function GoTrueClient(options) {
    _classCallCheck(this, GoTrueClient);
    this.stateChangeEmitters = new Map();
    this.networkRetries = 0;
    this.refreshingDeferred = null;
    /**
     * Keeps track of the async client initialization.
     * When null or not yet resolved the auth state is `unknown`
     * Once resolved the the auth state is known and it's save to call any further client methods.
     * Keep extra care to never reject or throw uncaught errors
     */
    this.initializePromise = null;
    this.detectSessionInUrl = true;
    var settings = Object.assign(Object.assign({}, DEFAULT_OPTIONS), options);
    this.inMemorySession = null;
    this.storageKey = settings.storageKey;
    this.autoRefreshToken = settings.autoRefreshToken;
    this.persistSession = settings.persistSession;
    this.storage = settings.storage || local_storage_1["default"];
    this.admin = new GoTrueAdminApi_1["default"]({
      url: settings.url,
      headers: settings.headers,
      fetch: settings.fetch
    });
    this.url = settings.url;
    this.headers = settings.headers;
    this.fetch = (0, helpers_1.resolveFetch)(settings.fetch);
    this.detectSessionInUrl = settings.detectSessionInUrl;
    this.initialize();
    this.mfa = {
      verify: this._verify.bind(this),
      enroll: this._enroll.bind(this),
      unenroll: this._unenroll.bind(this),
      challenge: this._challenge.bind(this),
      listFactors: this._listFactors.bind(this),
      challengeAndVerify: this._challengeAndVerify.bind(this),
      getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this)
    };
  }
  /**
   * Initializes the client session either from the url or from storage.
   * This method is automatically called when instantiating the client, but should also be called
   * manually when checking for an error from an auth redirect (oauth, magiclink, password recovery, etc).
   */
  _createClass(GoTrueClient, [{
    key: "initialize",
    value: function initialize() {
      if (!this.initializePromise) {
        this.initializePromise = this._initialize();
      }
      return this.initializePromise;
    }
    /**
     * IMPORTANT:
     * 1. Never throw in this method, as it is called from the constructor
     * 2. Never return a session from this method as it would be cached over
     *    the whole lifetime of the client
     */
  }, {
    key: "_initialize",
    value: function _initialize() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$this$_getSessi, data, error, session, redirectType;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!this.initializePromise) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return", this.initializePromise);
            case 2:
              _context.prev = 2;
              if (!(this.detectSessionInUrl && this._isImplicitGrantFlow())) {
                _context.next = 19;
                break;
              }
              _context.next = 6;
              return this._getSessionFromUrl();
            case 6:
              _yield$this$_getSessi = _context.sent;
              data = _yield$this$_getSessi.data;
              error = _yield$this$_getSessi.error;
              if (!error) {
                _context.next = 13;
                break;
              }
              _context.next = 12;
              return this._removeSession();
            case 12:
              return _context.abrupt("return", {
                error: error
              });
            case 13:
              session = data.session, redirectType = data.redirectType;
              _context.next = 16;
              return this._saveSession(session);
            case 16:
              this._notifyAllSubscribers('SIGNED_IN', session);
              if (redirectType === 'recovery') {
                this._notifyAllSubscribers('PASSWORD_RECOVERY', session);
              }
              return _context.abrupt("return", {
                error: null
              });
            case 19:
              _context.next = 21;
              return this._recoverAndRefresh();
            case 21:
              return _context.abrupt("return", {
                error: null
              });
            case 24:
              _context.prev = 24;
              _context.t0 = _context["catch"](2);
              if (!(0, errors_1.isAuthError)(_context.t0)) {
                _context.next = 28;
                break;
              }
              return _context.abrupt("return", {
                error: _context.t0
              });
            case 28:
              return _context.abrupt("return", {
                error: new errors_1.AuthUnknownError('Unexpected error during initialization', _context.t0)
              });
            case 29:
              _context.prev = 29;
              this._handleVisibilityChange();
              return _context.finish(29);
            case 32:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[2, 24, 29, 32]]);
      }));
    }
    /**
     * Creates a new user.
     * @returns A logged-in session if the server has "autoconfirm" ON
     * @returns A user if the server has "autoconfirm" OFF
     */
  }, {
    key: "signUp",
    value: function signUp(credentials) {
      var _a, _b;
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var res, email, password, options, phone, _password, _options, _res, data, error, session, user;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return this._removeSession();
            case 3:
              if (!('email' in credentials)) {
                _context2.next = 10;
                break;
              }
              email = credentials.email, password = credentials.password, options = credentials.options;
              _context2.next = 7;
              return (0, fetch_1._request)(this.fetch, 'POST', "".concat(this.url, "/signup"), {
                headers: this.headers,
                redirectTo: options === null || options === void 0 ? void 0 : options.emailRedirectTo,
                body: {
                  email: email,
                  password: password,
                  data: (_a = options === null || options === void 0 ? void 0 : options.data) !== null && _a !== void 0 ? _a : {},
                  gotrue_meta_security: {
                    captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken
                  }
                },
                xform: fetch_1._sessionResponse
              });
            case 7:
              res = _context2.sent;
              _context2.next = 18;
              break;
            case 10:
              if (!('phone' in credentials)) {
                _context2.next = 17;
                break;
              }
              phone = credentials.phone, _password = credentials.password, _options = credentials.options;
              _context2.next = 14;
              return (0, fetch_1._request)(this.fetch, 'POST', "".concat(this.url, "/signup"), {
                headers: this.headers,
                body: {
                  phone: phone,
                  password: _password,
                  data: (_b = _options === null || _options === void 0 ? void 0 : _options.data) !== null && _b !== void 0 ? _b : {},
                  gotrue_meta_security: {
                    captcha_token: _options === null || _options === void 0 ? void 0 : _options.captchaToken
                  }
                },
                xform: fetch_1._sessionResponse
              });
            case 14:
              res = _context2.sent;
              _context2.next = 18;
              break;
            case 17:
              throw new errors_1.AuthInvalidCredentialsError('You must provide either an email or phone number and a password');
            case 18:
              _res = res, data = _res.data, error = _res.error;
              if (!(error || !data)) {
                _context2.next = 21;
                break;
              }
              return _context2.abrupt("return", {
                data: {
                  user: null,
                  session: null
                },
                error: error
              });
            case 21:
              session = data.session;
              user = data.user;
              if (!data.session) {
                _context2.next = 27;
                break;
              }
              _context2.next = 26;
              return this._saveSession(data.session);
            case 26:
              this._notifyAllSubscribers('SIGNED_IN', session);
            case 27:
              return _context2.abrupt("return", {
                data: {
                  user: user,
                  session: session
                },
                error: null
              });
            case 30:
              _context2.prev = 30;
              _context2.t0 = _context2["catch"](0);
              if (!(0, errors_1.isAuthError)(_context2.t0)) {
                _context2.next = 34;
                break;
              }
              return _context2.abrupt("return", {
                data: {
                  user: null,
                  session: null
                },
                error: _context2.t0
              });
            case 34:
              throw _context2.t0;
            case 35:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[0, 30]]);
      }));
    }
    /**
     * Log in an existing user with an email and password or phone and password.
     */
  }, {
    key: "signInWithPassword",
    value: function signInWithPassword(credentials) {
      var _a, _b;
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var res, email, password, options, phone, _password2, _options2, _res2, data, error;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return this._removeSession();
            case 3:
              if (!('email' in credentials)) {
                _context3.next = 10;
                break;
              }
              email = credentials.email, password = credentials.password, options = credentials.options;
              _context3.next = 7;
              return (0, fetch_1._request)(this.fetch, 'POST', "".concat(this.url, "/token?grant_type=password"), {
                headers: this.headers,
                body: {
                  email: email,
                  password: password,
                  data: (_a = options === null || options === void 0 ? void 0 : options.data) !== null && _a !== void 0 ? _a : {},
                  gotrue_meta_security: {
                    captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken
                  }
                },
                xform: fetch_1._sessionResponse
              });
            case 7:
              res = _context3.sent;
              _context3.next = 18;
              break;
            case 10:
              if (!('phone' in credentials)) {
                _context3.next = 17;
                break;
              }
              phone = credentials.phone, _password2 = credentials.password, _options2 = credentials.options;
              _context3.next = 14;
              return (0, fetch_1._request)(this.fetch, 'POST', "".concat(this.url, "/token?grant_type=password"), {
                headers: this.headers,
                body: {
                  phone: phone,
                  password: _password2,
                  data: (_b = _options2 === null || _options2 === void 0 ? void 0 : _options2.data) !== null && _b !== void 0 ? _b : {},
                  gotrue_meta_security: {
                    captcha_token: _options2 === null || _options2 === void 0 ? void 0 : _options2.captchaToken
                  }
                },
                xform: fetch_1._sessionResponse
              });
            case 14:
              res = _context3.sent;
              _context3.next = 18;
              break;
            case 17:
              throw new errors_1.AuthInvalidCredentialsError('You must provide either an email or phone number and a password');
            case 18:
              _res2 = res, data = _res2.data, error = _res2.error;
              if (!(error || !data)) {
                _context3.next = 21;
                break;
              }
              return _context3.abrupt("return", {
                data: {
                  user: null,
                  session: null
                },
                error: error
              });
            case 21:
              if (!data.session) {
                _context3.next = 25;
                break;
              }
              _context3.next = 24;
              return this._saveSession(data.session);
            case 24:
              this._notifyAllSubscribers('SIGNED_IN', data.session);
            case 25:
              return _context3.abrupt("return", {
                data: data,
                error: error
              });
            case 28:
              _context3.prev = 28;
              _context3.t0 = _context3["catch"](0);
              if (!(0, errors_1.isAuthError)(_context3.t0)) {
                _context3.next = 32;
                break;
              }
              return _context3.abrupt("return", {
                data: {
                  user: null,
                  session: null
                },
                error: _context3.t0
              });
            case 32:
              throw _context3.t0;
            case 33:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[0, 28]]);
      }));
    }
    /**
     * Log in an existing user via a third-party provider.
     */
  }, {
    key: "signInWithOAuth",
    value: function signInWithOAuth(credentials) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this._removeSession();
            case 2:
              return _context4.abrupt("return", this._handleProviderSignIn(credentials.provider, {
                redirectTo: (_a = credentials.options) === null || _a === void 0 ? void 0 : _a.redirectTo,
                scopes: (_b = credentials.options) === null || _b === void 0 ? void 0 : _b.scopes,
                queryParams: (_c = credentials.options) === null || _c === void 0 ? void 0 : _c.queryParams
              }));
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
    }
    /**
     * Log in a user using magiclink or a one-time password (OTP).
     * If the `{{ .ConfirmationURL }}` variable is specified in the email template, a magiclink will be sent.
     * If the `{{ .Token }}` variable is specified in the email template, an OTP will be sent.
     * If you're using phone sign-ins, only an OTP will be sent. You won't be able to send a magiclink for phone sign-ins.
     */
  }, {
    key: "signInWithOtp",
    value: function signInWithOtp(credentials) {
      var _a, _b, _c, _d;
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var email, options, _yield, error, phone, _options3, _yield2, _error;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return this._removeSession();
            case 3:
              if (!('email' in credentials)) {
                _context5.next = 10;
                break;
              }
              email = credentials.email, options = credentials.options;
              _context5.next = 7;
              return (0, fetch_1._request)(this.fetch, 'POST', "".concat(this.url, "/otp"), {
                headers: this.headers,
                body: {
                  email: email,
                  data: (_a = options === null || options === void 0 ? void 0 : options.data) !== null && _a !== void 0 ? _a : {},
                  create_user: (_b = options === null || options === void 0 ? void 0 : options.shouldCreateUser) !== null && _b !== void 0 ? _b : true,
                  gotrue_meta_security: {
                    captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken
                  }
                },
                redirectTo: options === null || options === void 0 ? void 0 : options.emailRedirectTo
              });
            case 7:
              _yield = _context5.sent;
              error = _yield.error;
              return _context5.abrupt("return", {
                data: {
                  user: null,
                  session: null
                },
                error: error
              });
            case 10:
              if (!('phone' in credentials)) {
                _context5.next = 17;
                break;
              }
              phone = credentials.phone, _options3 = credentials.options;
              _context5.next = 14;
              return (0, fetch_1._request)(this.fetch, 'POST', "".concat(this.url, "/otp"), {
                headers: this.headers,
                body: {
                  phone: phone,
                  data: (_c = _options3 === null || _options3 === void 0 ? void 0 : _options3.data) !== null && _c !== void 0 ? _c : {},
                  create_user: (_d = _options3 === null || _options3 === void 0 ? void 0 : _options3.shouldCreateUser) !== null && _d !== void 0 ? _d : true,
                  gotrue_meta_security: {
                    captcha_token: _options3 === null || _options3 === void 0 ? void 0 : _options3.captchaToken
                  }
                }
              });
            case 14:
              _yield2 = _context5.sent;
              _error = _yield2.error;
              return _context5.abrupt("return", {
                data: {
                  user: null,
                  session: null
                },
                error: _error
              });
            case 17:
              throw new errors_1.AuthInvalidCredentialsError('You must provide either an email or phone number.');
            case 20:
              _context5.prev = 20;
              _context5.t0 = _context5["catch"](0);
              if (!(0, errors_1.isAuthError)(_context5.t0)) {
                _context5.next = 24;
                break;
              }
              return _context5.abrupt("return", {
                data: {
                  user: null,
                  session: null
                },
                error: _context5.t0
              });
            case 24:
              throw _context5.t0;
            case 25:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this, [[0, 20]]);
      }));
    }
    /**
     * Log in a user given a User supplied OTP received via mobile.
     */
  }, {
    key: "verifyOtp",
    value: function verifyOtp(params) {
      var _a, _b;
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var _yield3, data, error, session, user;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return this._removeSession();
            case 3:
              _context6.next = 5;
              return (0, fetch_1._request)(this.fetch, 'POST', "".concat(this.url, "/verify"), {
                headers: this.headers,
                body: Object.assign(Object.assign({}, params), {
                  gotrue_meta_security: {
                    captcha_token: (_a = params.options) === null || _a === void 0 ? void 0 : _a.captchaToken
                  }
                }),
                redirectTo: (_b = params.options) === null || _b === void 0 ? void 0 : _b.redirectTo,
                xform: fetch_1._sessionResponse
              });
            case 5:
              _yield3 = _context6.sent;
              data = _yield3.data;
              error = _yield3.error;
              if (!error) {
                _context6.next = 10;
                break;
              }
              throw error;
            case 10:
              if (data) {
                _context6.next = 12;
                break;
              }
              throw 'An error occurred on token verification.';
            case 12:
              session = data.session;
              user = data.user;
              if (!(session === null || session === void 0 ? void 0 : session.access_token)) {
                _context6.next = 18;
                break;
              }
              _context6.next = 17;
              return this._saveSession(session);
            case 17:
              this._notifyAllSubscribers('SIGNED_IN', session);
            case 18:
              return _context6.abrupt("return", {
                data: {
                  user: user,
                  session: session
                },
                error: null
              });
            case 21:
              _context6.prev = 21;
              _context6.t0 = _context6["catch"](0);
              if (!(0, errors_1.isAuthError)(_context6.t0)) {
                _context6.next = 25;
                break;
              }
              return _context6.abrupt("return", {
                data: {
                  user: null,
                  session: null
                },
                error: _context6.t0
              });
            case 25:
              throw _context6.t0;
            case 26:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this, [[0, 21]]);
      }));
    }
    /**
     * Attempts a single-sign on using an enterprise Identity Provider. A
     * successful SSO attempt will redirect the current page to the identity
     * provider authorization page. The redirect URL is implementation and SSO
     * protocol specific.
     *
     * You can use it by providing a SSO domain. Typically you can extract this
     * domain by asking users for their email address. If this domain is
     * registered on the Auth instance the redirect will use that organization's
     * currently active SSO Identity Provider for the login.
     *
     * If you have built an organization-specific login page, you can use the
     * organization's SSO Identity Provider UUID directly instead.
     *
     * This API is experimental and availability is conditional on correct
     * settings on the Auth service.
     *
     * @experimental
     */
  }, {
    key: "signInWithSSO",
    value: function signInWithSSO(params) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return this._removeSession();
            case 3:
              _context7.next = 5;
              return (0, fetch_1._request)(this.fetch, 'POST', "".concat(this.url, "/sso"), {
                body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, 'providerId' in params ? {
                  provider_id: params.providerId
                } : null), 'domain' in params ? {
                  domain: params.domain
                } : null), {
                  redirect_to: (_b = (_a = params.options) === null || _a === void 0 ? void 0 : _a.redirectTo) !== null && _b !== void 0 ? _b : undefined
                }), ((_c = params === null || params === void 0 ? void 0 : params.options) === null || _c === void 0 ? void 0 : _c.captchaToken) ? {
                  gotrue_meta_security: {
                    captcha_token: params.options.captchaToken
                  }
                } : null), {
                  skip_http_redirect: true
                }),
                headers: this.headers,
                xform: fetch_1._ssoResponse
              });
            case 5:
              return _context7.abrupt("return", _context7.sent);
            case 8:
              _context7.prev = 8;
              _context7.t0 = _context7["catch"](0);
              if (!(0, errors_1.isAuthError)(_context7.t0)) {
                _context7.next = 12;
                break;
              }
              return _context7.abrupt("return", {
                data: null,
                error: _context7.t0
              });
            case 12:
              throw _context7.t0;
            case 13:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this, [[0, 8]]);
      }));
    }
    /**
     * Returns the session, refreshing it if necessary.
     * The session returned can be null if the session is not detected which can happen in the event a user is not signed-in or has logged out.
     */
  }, {
    key: "getSession",
    value: function getSession() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var currentSession, maybeSession, hasExpired, _yield$this$_callRefr, session, error;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return this.initializePromise;
            case 2:
              currentSession = null;
              if (!this.persistSession) {
                _context8.next = 16;
                break;
              }
              _context8.next = 6;
              return (0, helpers_1.getItemAsync)(this.storage, this.storageKey);
            case 6:
              maybeSession = _context8.sent;
              if (!(maybeSession !== null)) {
                _context8.next = 14;
                break;
              }
              if (!this._isValidSession(maybeSession)) {
                _context8.next = 12;
                break;
              }
              currentSession = maybeSession;
              _context8.next = 14;
              break;
            case 12:
              _context8.next = 14;
              return this._removeSession();
            case 14:
              _context8.next = 17;
              break;
            case 16:
              currentSession = this.inMemorySession;
            case 17:
              if (currentSession) {
                _context8.next = 19;
                break;
              }
              return _context8.abrupt("return", {
                data: {
                  session: null
                },
                error: null
              });
            case 19:
              hasExpired = currentSession.expires_at ? currentSession.expires_at <= Date.now() / 1000 : false;
              if (hasExpired) {
                _context8.next = 22;
                break;
              }
              return _context8.abrupt("return", {
                data: {
                  session: currentSession
                },
                error: null
              });
            case 22:
              _context8.next = 24;
              return this._callRefreshToken(currentSession.refresh_token);
            case 24:
              _yield$this$_callRefr = _context8.sent;
              session = _yield$this$_callRefr.session;
              error = _yield$this$_callRefr.error;
              if (!error) {
                _context8.next = 29;
                break;
              }
              return _context8.abrupt("return", {
                data: {
                  session: null
                },
                error: error
              });
            case 29:
              return _context8.abrupt("return", {
                data: {
                  session: session
                },
                error: null
              });
            case 30:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
    }
    /**
     * Gets the current user details if there is an existing session.
     * @param jwt Takes in an optional access token jwt. If no jwt is provided, getUser() will attempt to get the jwt from the current session.
     */
  }, {
    key: "getUser",
    value: function getUser(jwt) {
      var _a, _b;
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var _yield$this$getSessio, data, error;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              if (jwt) {
                _context9.next = 10;
                break;
              }
              _context9.next = 4;
              return this.getSession();
            case 4:
              _yield$this$getSessio = _context9.sent;
              data = _yield$this$getSessio.data;
              error = _yield$this$getSessio.error;
              if (!error) {
                _context9.next = 9;
                break;
              }
              throw error;
            case 9:
              // Default to Authorization header if there is no existing session
              jwt = (_b = (_a = data.session) === null || _a === void 0 ? void 0 : _a.access_token) !== null && _b !== void 0 ? _b : undefined;
            case 10:
              _context9.next = 12;
              return (0, fetch_1._request)(this.fetch, 'GET', "".concat(this.url, "/user"), {
                headers: this.headers,
                jwt: jwt,
                xform: fetch_1._userResponse
              });
            case 12:
              return _context9.abrupt("return", _context9.sent);
            case 15:
              _context9.prev = 15;
              _context9.t0 = _context9["catch"](0);
              if (!(0, errors_1.isAuthError)(_context9.t0)) {
                _context9.next = 19;
                break;
              }
              return _context9.abrupt("return", {
                data: {
                  user: null
                },
                error: _context9.t0
              });
            case 19:
              throw _context9.t0;
            case 20:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this, [[0, 15]]);
      }));
    }
    /**
     * Updates user data, if there is a logged in user.
     */
  }, {
    key: "updateUser",
    value: function updateUser(attributes) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        var _yield$this$getSessio2, sessionData, sessionError, session, _yield4, data, userError;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _context10.prev = 0;
              _context10.next = 3;
              return this.getSession();
            case 3:
              _yield$this$getSessio2 = _context10.sent;
              sessionData = _yield$this$getSessio2.data;
              sessionError = _yield$this$getSessio2.error;
              if (!sessionError) {
                _context10.next = 8;
                break;
              }
              throw sessionError;
            case 8:
              if (sessionData.session) {
                _context10.next = 10;
                break;
              }
              throw new errors_1.AuthSessionMissingError();
            case 10:
              session = sessionData.session;
              _context10.next = 13;
              return (0, fetch_1._request)(this.fetch, 'PUT', "".concat(this.url, "/user"), {
                headers: this.headers,
                body: attributes,
                jwt: session.access_token,
                xform: fetch_1._userResponse
              });
            case 13:
              _yield4 = _context10.sent;
              data = _yield4.data;
              userError = _yield4.error;
              if (!userError) {
                _context10.next = 18;
                break;
              }
              throw userError;
            case 18:
              session.user = data.user;
              _context10.next = 21;
              return this._saveSession(session);
            case 21:
              this._notifyAllSubscribers('USER_UPDATED', session);
              return _context10.abrupt("return", {
                data: {
                  user: session.user
                },
                error: null
              });
            case 25:
              _context10.prev = 25;
              _context10.t0 = _context10["catch"](0);
              if (!(0, errors_1.isAuthError)(_context10.t0)) {
                _context10.next = 29;
                break;
              }
              return _context10.abrupt("return", {
                data: {
                  user: null
                },
                error: _context10.t0
              });
            case 29:
              throw _context10.t0;
            case 30:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this, [[0, 25]]);
      }));
    }
    /**
     * Decodes a JWT (without performing any validation).
     */
  }, {
    key: "_decodeJWT",
    value: function _decodeJWT(jwt) {
      return (0, helpers_1.decodeJWTPayload)(jwt);
    }
    /**
     * Sets the session data from the current session. If the current session is expired, setSession will take care of refreshing it to obtain a new session.
     * If the refresh token or access token in the current session is invalid, an error will be thrown.
     * @param currentSession The current session that minimally contains an access token and refresh token.
     */
  }, {
    key: "setSession",
    value: function setSession(currentSession) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
        var timeNow, expiresAt, hasExpired, session, payload, _yield$this$_callRefr2, refreshedSession, error, _yield$this$getUser, data, _error2;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              _context11.prev = 0;
              if (!(!currentSession.access_token || !currentSession.refresh_token)) {
                _context11.next = 3;
                break;
              }
              throw new errors_1.AuthSessionMissingError();
            case 3:
              timeNow = Date.now() / 1000;
              expiresAt = timeNow;
              hasExpired = true;
              session = null;
              payload = (0, helpers_1.decodeJWTPayload)(currentSession.access_token);
              if (payload.exp) {
                expiresAt = payload.exp;
                hasExpired = expiresAt <= timeNow;
              }
              if (!hasExpired) {
                _context11.next = 22;
                break;
              }
              _context11.next = 12;
              return this._callRefreshToken(currentSession.refresh_token);
            case 12:
              _yield$this$_callRefr2 = _context11.sent;
              refreshedSession = _yield$this$_callRefr2.session;
              error = _yield$this$_callRefr2.error;
              if (!error) {
                _context11.next = 17;
                break;
              }
              return _context11.abrupt("return", {
                data: {
                  user: null,
                  session: null
                },
                error: error
              });
            case 17:
              if (refreshedSession) {
                _context11.next = 19;
                break;
              }
              return _context11.abrupt("return", {
                data: {
                  user: null,
                  session: null
                },
                error: null
              });
            case 19:
              session = refreshedSession;
              _context11.next = 32;
              break;
            case 22:
              _context11.next = 24;
              return this.getUser(currentSession.access_token);
            case 24:
              _yield$this$getUser = _context11.sent;
              data = _yield$this$getUser.data;
              _error2 = _yield$this$getUser.error;
              if (!_error2) {
                _context11.next = 29;
                break;
              }
              throw _error2;
            case 29:
              session = {
                access_token: currentSession.access_token,
                refresh_token: currentSession.refresh_token,
                user: data.user,
                token_type: 'bearer',
                expires_in: expiresAt - timeNow,
                expires_at: expiresAt
              };
              _context11.next = 32;
              return this._saveSession(session);
            case 32:
              return _context11.abrupt("return", {
                data: {
                  user: session.user,
                  session: session
                },
                error: null
              });
            case 35:
              _context11.prev = 35;
              _context11.t0 = _context11["catch"](0);
              if (!(0, errors_1.isAuthError)(_context11.t0)) {
                _context11.next = 39;
                break;
              }
              return _context11.abrupt("return", {
                data: {
                  session: null,
                  user: null
                },
                error: _context11.t0
              });
            case 39:
              throw _context11.t0;
            case 40:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this, [[0, 35]]);
      }));
    }
    /**
     * Returns a new session, regardless of expiry status.
     * Takes in an optional current session. If not passed in, then refreshSession() will attempt to retrieve it from getSession().
     * If the current session's refresh token is invalid, an error will be thrown.
     * @param currentSession The current session. If passed in, it must contain a refresh token.
     */
  }, {
    key: "refreshSession",
    value: function refreshSession(currentSession) {
      var _a;
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
        var _yield$this$getSessio3, data, _error3, _yield$this$_callRefr3, session, error;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              _context12.prev = 0;
              if (currentSession) {
                _context12.next = 10;
                break;
              }
              _context12.next = 4;
              return this.getSession();
            case 4:
              _yield$this$getSessio3 = _context12.sent;
              data = _yield$this$getSessio3.data;
              _error3 = _yield$this$getSessio3.error;
              if (!_error3) {
                _context12.next = 9;
                break;
              }
              throw _error3;
            case 9:
              currentSession = (_a = data.session) !== null && _a !== void 0 ? _a : undefined;
            case 10:
              if (currentSession === null || currentSession === void 0 ? void 0 : currentSession.refresh_token) {
                _context12.next = 12;
                break;
              }
              throw new errors_1.AuthSessionMissingError();
            case 12:
              _context12.next = 14;
              return this._callRefreshToken(currentSession.refresh_token);
            case 14:
              _yield$this$_callRefr3 = _context12.sent;
              session = _yield$this$_callRefr3.session;
              error = _yield$this$_callRefr3.error;
              if (!error) {
                _context12.next = 19;
                break;
              }
              return _context12.abrupt("return", {
                data: {
                  user: null,
                  session: null
                },
                error: error
              });
            case 19:
              if (session) {
                _context12.next = 21;
                break;
              }
              return _context12.abrupt("return", {
                data: {
                  user: null,
                  session: null
                },
                error: null
              });
            case 21:
              return _context12.abrupt("return", {
                data: {
                  user: session.user,
                  session: session
                },
                error: null
              });
            case 24:
              _context12.prev = 24;
              _context12.t0 = _context12["catch"](0);
              if (!(0, errors_1.isAuthError)(_context12.t0)) {
                _context12.next = 28;
                break;
              }
              return _context12.abrupt("return", {
                data: {
                  user: null,
                  session: null
                },
                error: _context12.t0
              });
            case 28:
              throw _context12.t0;
            case 29:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this, [[0, 24]]);
      }));
    }
    /**
     * Gets the session data from a URL string
     */
  }, {
    key: "_getSessionFromUrl",
    value: function _getSessionFromUrl() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
        var error_description, error_code, _error4, provider_token, provider_refresh_token, access_token, expires_in, refresh_token, token_type, timeNow, expires_at, _yield$this$getUser2, data, error, user, session, redirectType;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              _context13.prev = 0;
              if ((0, helpers_1.isBrowser)()) {
                _context13.next = 3;
                break;
              }
              throw new errors_1.AuthImplicitGrantRedirectError('No browser detected.');
            case 3:
              if (this._isImplicitGrantFlow()) {
                _context13.next = 5;
                break;
              }
              throw new errors_1.AuthImplicitGrantRedirectError('Not a valid implicit grant flow url.');
            case 5:
              error_description = (0, helpers_1.getParameterByName)('error_description');
              if (!error_description) {
                _context13.next = 14;
                break;
              }
              error_code = (0, helpers_1.getParameterByName)('error_code');
              if (error_code) {
                _context13.next = 10;
                break;
              }
              throw new errors_1.AuthImplicitGrantRedirectError('No error_code detected.');
            case 10:
              _error4 = (0, helpers_1.getParameterByName)('error');
              if (_error4) {
                _context13.next = 13;
                break;
              }
              throw new errors_1.AuthImplicitGrantRedirectError('No error detected.');
            case 13:
              throw new errors_1.AuthImplicitGrantRedirectError(error_description, {
                error: _error4,
                code: error_code
              });
            case 14:
              provider_token = (0, helpers_1.getParameterByName)('provider_token');
              provider_refresh_token = (0, helpers_1.getParameterByName)('provider_refresh_token');
              access_token = (0, helpers_1.getParameterByName)('access_token');
              if (access_token) {
                _context13.next = 19;
                break;
              }
              throw new errors_1.AuthImplicitGrantRedirectError('No access_token detected.');
            case 19:
              expires_in = (0, helpers_1.getParameterByName)('expires_in');
              if (expires_in) {
                _context13.next = 22;
                break;
              }
              throw new errors_1.AuthImplicitGrantRedirectError('No expires_in detected.');
            case 22:
              refresh_token = (0, helpers_1.getParameterByName)('refresh_token');
              if (refresh_token) {
                _context13.next = 25;
                break;
              }
              throw new errors_1.AuthImplicitGrantRedirectError('No refresh_token detected.');
            case 25:
              token_type = (0, helpers_1.getParameterByName)('token_type');
              if (token_type) {
                _context13.next = 28;
                break;
              }
              throw new errors_1.AuthImplicitGrantRedirectError('No token_type detected.');
            case 28:
              timeNow = Math.round(Date.now() / 1000);
              expires_at = timeNow + parseInt(expires_in);
              _context13.next = 32;
              return this.getUser(access_token);
            case 32:
              _yield$this$getUser2 = _context13.sent;
              data = _yield$this$getUser2.data;
              error = _yield$this$getUser2.error;
              if (!error) {
                _context13.next = 37;
                break;
              }
              throw error;
            case 37:
              user = data.user;
              session = {
                provider_token: provider_token,
                provider_refresh_token: provider_refresh_token,
                access_token: access_token,
                expires_in: parseInt(expires_in),
                expires_at: expires_at,
                refresh_token: refresh_token,
                token_type: token_type,
                user: user
              };
              redirectType = (0, helpers_1.getParameterByName)('type'); // Remove tokens from URL
              window.location.hash = '';
              return _context13.abrupt("return", {
                data: {
                  session: session,
                  redirectType: redirectType
                },
                error: null
              });
            case 44:
              _context13.prev = 44;
              _context13.t0 = _context13["catch"](0);
              if (!(0, errors_1.isAuthError)(_context13.t0)) {
                _context13.next = 48;
                break;
              }
              return _context13.abrupt("return", {
                data: {
                  session: null,
                  redirectType: null
                },
                error: _context13.t0
              });
            case 48:
              throw _context13.t0;
            case 49:
            case "end":
              return _context13.stop();
          }
        }, _callee13, this, [[0, 44]]);
      }));
    }
    /**
     * Checks if the current URL contains parameters given by an implicit oauth grant flow (https://www.rfc-editor.org/rfc/rfc6749.html#section-4.2)
     */
  }, {
    key: "_isImplicitGrantFlow",
    value: function _isImplicitGrantFlow() {
      return (0, helpers_1.isBrowser)() && (Boolean((0, helpers_1.getParameterByName)('access_token')) || Boolean((0, helpers_1.getParameterByName)('error_description')));
    }
    /**
     * Inside a browser context, `signOut()` will remove the logged in user from the browser session
     * and log them out - removing all items from localstorage and then trigger a `"SIGNED_OUT"` event.
     *
     * For server-side management, you can revoke all refresh tokens for a user by passing a user's JWT through to `auth.api.signOut(JWT: string)`.
     * There is no way to revoke a user's access token jwt until it expires. It is recommended to set a shorter expiry on the jwt for this reason.
     */
  }, {
    key: "signOut",
    value: function signOut() {
      var _a;
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
        var _yield$this$getSessio4, data, sessionError, accessToken, _yield$this$admin$sig, error;
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              _context14.next = 2;
              return this.getSession();
            case 2:
              _yield$this$getSessio4 = _context14.sent;
              data = _yield$this$getSessio4.data;
              sessionError = _yield$this$getSessio4.error;
              if (!sessionError) {
                _context14.next = 7;
                break;
              }
              return _context14.abrupt("return", {
                error: sessionError
              });
            case 7:
              accessToken = (_a = data.session) === null || _a === void 0 ? void 0 : _a.access_token;
              if (!accessToken) {
                _context14.next = 16;
                break;
              }
              _context14.next = 11;
              return this.admin.signOut(accessToken);
            case 11:
              _yield$this$admin$sig = _context14.sent;
              error = _yield$this$admin$sig.error;
              if (!error) {
                _context14.next = 16;
                break;
              }
              if ((0, errors_1.isAuthApiError)(error) && (error.status === 404 || error.status === 401)) {
                _context14.next = 16;
                break;
              }
              return _context14.abrupt("return", {
                error: error
              });
            case 16:
              _context14.next = 18;
              return this._removeSession();
            case 18:
              this._notifyAllSubscribers('SIGNED_OUT', null);
              return _context14.abrupt("return", {
                error: null
              });
            case 20:
            case "end":
              return _context14.stop();
          }
        }, _callee14, this);
      }));
    }
    /**
     * Receive a notification every time an auth event happens.
     * @param callback A callback function to be invoked when an auth event happens.
     */
  }, {
    key: "onAuthStateChange",
    value: function onAuthStateChange(callback) {
      var _this = this;
      var id = (0, helpers_1.uuid)();
      var subscription = {
        id: id,
        callback: callback,
        unsubscribe: function unsubscribe() {
          _this.stateChangeEmitters["delete"](id);
        }
      };
      this.stateChangeEmitters.set(id, subscription);
      return {
        data: {
          subscription: subscription
        }
      };
    }
    /**
     * Sends a password reset request to an email address.
     * @param email The email address of the user.
     * @param options.redirectTo The URL to send the user to after they click the password reset link.
     * @param options.captchaToken Verification token received when the user completes the captcha on the site.
     */
  }, {
    key: "resetPasswordForEmail",
    value: function resetPasswordForEmail(email) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              _context15.prev = 0;
              _context15.next = 3;
              return (0, fetch_1._request)(this.fetch, 'POST', "".concat(this.url, "/recover"), {
                body: {
                  email: email,
                  gotrue_meta_security: {
                    captcha_token: options.captchaToken
                  }
                },
                headers: this.headers,
                redirectTo: options.redirectTo
              });
            case 3:
              return _context15.abrupt("return", _context15.sent);
            case 6:
              _context15.prev = 6;
              _context15.t0 = _context15["catch"](0);
              if (!(0, errors_1.isAuthError)(_context15.t0)) {
                _context15.next = 10;
                break;
              }
              return _context15.abrupt("return", {
                data: null,
                error: _context15.t0
              });
            case 10:
              throw _context15.t0;
            case 11:
            case "end":
              return _context15.stop();
          }
        }, _callee15, this, [[0, 6]]);
      }));
    }
    /**
     * Generates a new JWT.
     * @param refreshToken A valid refresh token that was returned on login.
     */
  }, {
    key: "_refreshAccessToken",
    value: function _refreshAccessToken(refreshToken) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              _context16.prev = 0;
              _context16.next = 3;
              return (0, fetch_1._request)(this.fetch, 'POST', "".concat(this.url, "/token?grant_type=refresh_token"), {
                body: {
                  refresh_token: refreshToken
                },
                headers: this.headers,
                xform: fetch_1._sessionResponse
              });
            case 3:
              return _context16.abrupt("return", _context16.sent);
            case 6:
              _context16.prev = 6;
              _context16.t0 = _context16["catch"](0);
              if (!(0, errors_1.isAuthError)(_context16.t0)) {
                _context16.next = 10;
                break;
              }
              return _context16.abrupt("return", {
                data: {
                  session: null,
                  user: null
                },
                error: _context16.t0
              });
            case 10:
              throw _context16.t0;
            case 11:
            case "end":
              return _context16.stop();
          }
        }, _callee16, this, [[0, 6]]);
      }));
    }
  }, {
    key: "_isValidSession",
    value: function _isValidSession(maybeSession) {
      var isValidSession = _typeof(maybeSession) === 'object' && maybeSession !== null && 'access_token' in maybeSession && 'refresh_token' in maybeSession && 'expires_at' in maybeSession;
      return isValidSession;
    }
  }, {
    key: "_handleProviderSignIn",
    value: function _handleProviderSignIn(provider) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var url = this._getUrlForProvider(provider, {
        redirectTo: options.redirectTo,
        scopes: options.scopes,
        queryParams: options.queryParams
      });
      // try to open on the browser
      if ((0, helpers_1.isBrowser)()) {
        window.location.href = url;
      }
      return {
        data: {
          provider: provider,
          url: url
        },
        error: null
      };
    }
    /**
     * Recovers the session from LocalStorage and refreshes
     * Note: this method is async to accommodate for AsyncStorage e.g. in React native.
     */
  }, {
    key: "_recoverAndRefresh",
    value: function _recoverAndRefresh() {
      var _a;
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
        var _this2 = this;
        var currentSession, timeNow, _yield$this$_callRefr4, error;
        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              _context17.prev = 0;
              _context17.next = 3;
              return (0, helpers_1.getItemAsync)(this.storage, this.storageKey);
            case 3:
              currentSession = _context17.sent;
              if (this._isValidSession(currentSession)) {
                _context17.next = 9;
                break;
              }
              if (!(currentSession !== null)) {
                _context17.next = 8;
                break;
              }
              _context17.next = 8;
              return this._removeSession();
            case 8:
              return _context17.abrupt("return");
            case 9:
              timeNow = Math.round(Date.now() / 1000);
              if (!(((_a = currentSession.expires_at) !== null && _a !== void 0 ? _a : Infinity) < timeNow + constants_1.EXPIRY_MARGIN)) {
                _context17.next = 32;
                break;
              }
              if (!(this.autoRefreshToken && currentSession.refresh_token)) {
                _context17.next = 28;
                break;
              }
              this.networkRetries++;
              _context17.next = 15;
              return this._callRefreshToken(currentSession.refresh_token);
            case 15:
              _yield$this$_callRefr4 = _context17.sent;
              error = _yield$this$_callRefr4.error;
              if (!error) {
                _context17.next = 25;
                break;
              }
              console.log(error.message);
              if (!(error instanceof errors_1.AuthRetryableFetchError && this.networkRetries < constants_1.NETWORK_FAILURE.MAX_RETRIES)) {
                _context17.next = 23;
                break;
              }
              if (this.refreshTokenTimer) clearTimeout(this.refreshTokenTimer);
              this.refreshTokenTimer = setTimeout(function () {
                return _this2._recoverAndRefresh();
              }, Math.pow(constants_1.NETWORK_FAILURE.RETRY_INTERVAL, this.networkRetries) * 100 // exponential backoff
              );
              return _context17.abrupt("return");
            case 23:
              _context17.next = 25;
              return this._removeSession();
            case 25:
              this.networkRetries = 0;
              _context17.next = 30;
              break;
            case 28:
              _context17.next = 30;
              return this._removeSession();
            case 30:
              _context17.next = 36;
              break;
            case 32:
              if (!this.persistSession) {
                _context17.next = 35;
                break;
              }
              _context17.next = 35;
              return this._saveSession(currentSession);
            case 35:
              this._notifyAllSubscribers('SIGNED_IN', currentSession);
            case 36:
              _context17.next = 42;
              break;
            case 38:
              _context17.prev = 38;
              _context17.t0 = _context17["catch"](0);
              console.error(_context17.t0);
              return _context17.abrupt("return");
            case 42:
            case "end":
              return _context17.stop();
          }
        }, _callee17, this, [[0, 38]]);
      }));
    }
  }, {
    key: "_callRefreshToken",
    value: function _callRefreshToken(refreshToken) {
      var _a, _b;
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
        var _yield$this$_refreshA, data, error, result, _result;
        return _regeneratorRuntime().wrap(function _callee18$(_context18) {
          while (1) switch (_context18.prev = _context18.next) {
            case 0:
              if (!this.refreshingDeferred) {
                _context18.next = 2;
                break;
              }
              return _context18.abrupt("return", this.refreshingDeferred.promise);
            case 2:
              _context18.prev = 2;
              this.refreshingDeferred = new helpers_1.Deferred();
              if (refreshToken) {
                _context18.next = 6;
                break;
              }
              throw new errors_1.AuthSessionMissingError();
            case 6:
              _context18.next = 8;
              return this._refreshAccessToken(refreshToken);
            case 8:
              _yield$this$_refreshA = _context18.sent;
              data = _yield$this$_refreshA.data;
              error = _yield$this$_refreshA.error;
              if (!error) {
                _context18.next = 13;
                break;
              }
              throw error;
            case 13:
              if (data.session) {
                _context18.next = 15;
                break;
              }
              throw new errors_1.AuthSessionMissingError();
            case 15:
              _context18.next = 17;
              return this._saveSession(data.session);
            case 17:
              this._notifyAllSubscribers('TOKEN_REFRESHED', data.session);
              result = {
                session: data.session,
                error: null
              };
              this.refreshingDeferred.resolve(result);
              return _context18.abrupt("return", result);
            case 23:
              _context18.prev = 23;
              _context18.t0 = _context18["catch"](2);
              if (!(0, errors_1.isAuthError)(_context18.t0)) {
                _context18.next = 29;
                break;
              }
              _result = {
                session: null,
                error: _context18.t0
              };
              (_a = this.refreshingDeferred) === null || _a === void 0 ? void 0 : _a.resolve(_result);
              return _context18.abrupt("return", _result);
            case 29:
              (_b = this.refreshingDeferred) === null || _b === void 0 ? void 0 : _b.reject(_context18.t0);
              throw _context18.t0;
            case 31:
              _context18.prev = 31;
              this.refreshingDeferred = null;
              return _context18.finish(31);
            case 34:
            case "end":
              return _context18.stop();
          }
        }, _callee18, this, [[2, 23, 31, 34]]);
      }));
    }
  }, {
    key: "_notifyAllSubscribers",
    value: function _notifyAllSubscribers(event, session) {
      this.stateChangeEmitters.forEach(function (x) {
        return x.callback(event, session);
      });
    }
    /**
     * set currentSession and currentUser
     * process to _startAutoRefreshToken if possible
     */
  }, {
    key: "_saveSession",
    value: function _saveSession(session) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
        var expiresAt, timeNow, expiresIn, refreshDurationBeforeExpires;
        return _regeneratorRuntime().wrap(function _callee19$(_context19) {
          while (1) switch (_context19.prev = _context19.next) {
            case 0:
              if (!this.persistSession) {
                this.inMemorySession = session;
              }
              expiresAt = session.expires_at;
              if (expiresAt) {
                timeNow = Math.round(Date.now() / 1000);
                expiresIn = expiresAt - timeNow;
                refreshDurationBeforeExpires = expiresIn > constants_1.EXPIRY_MARGIN ? constants_1.EXPIRY_MARGIN : 0.5;
                this._startAutoRefreshToken((expiresIn - refreshDurationBeforeExpires) * 1000);
              }
              if (!(this.persistSession && session.expires_at)) {
                _context19.next = 6;
                break;
              }
              _context19.next = 6;
              return this._persistSession(session);
            case 6:
            case "end":
              return _context19.stop();
          }
        }, _callee19, this);
      }));
    }
  }, {
    key: "_persistSession",
    value: function _persistSession(currentSession) {
      return (0, helpers_1.setItemAsync)(this.storage, this.storageKey, currentSession);
    }
  }, {
    key: "_removeSession",
    value: function _removeSession() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
        return _regeneratorRuntime().wrap(function _callee20$(_context20) {
          while (1) switch (_context20.prev = _context20.next) {
            case 0:
              if (!this.persistSession) {
                _context20.next = 5;
                break;
              }
              _context20.next = 3;
              return (0, helpers_1.removeItemAsync)(this.storage, this.storageKey);
            case 3:
              _context20.next = 6;
              break;
            case 5:
              this.inMemorySession = null;
            case 6:
              if (this.refreshTokenTimer) {
                clearTimeout(this.refreshTokenTimer);
              }
            case 7:
            case "end":
              return _context20.stop();
          }
        }, _callee20, this);
      }));
    }
    /**
     * Clear and re-create refresh token timer
     * @param value time intervals in milliseconds.
     * @param session The current session.
     */
  }, {
    key: "_startAutoRefreshToken",
    value: function _startAutoRefreshToken(value) {
      var _this3 = this;
      if (this.refreshTokenTimer) clearTimeout(this.refreshTokenTimer);
      if (value <= 0 || !this.autoRefreshToken) return;
      this.refreshTokenTimer = setTimeout(function () {
        return __awaiter(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
          var _yield$this$getSessio5, session, sessionError, _yield$this$_callRefr5, error;
          return _regeneratorRuntime().wrap(function _callee21$(_context21) {
            while (1) switch (_context21.prev = _context21.next) {
              case 0:
                this.networkRetries++;
                _context21.next = 3;
                return this.getSession();
              case 3:
                _yield$this$getSessio5 = _context21.sent;
                session = _yield$this$getSessio5.data.session;
                sessionError = _yield$this$getSessio5.error;
                if (!(!sessionError && session)) {
                  _context21.next = 13;
                  break;
                }
                _context21.next = 9;
                return this._callRefreshToken(session.refresh_token);
              case 9:
                _yield$this$_callRefr5 = _context21.sent;
                error = _yield$this$_callRefr5.error;
                if (!error) this.networkRetries = 0;
                if (error instanceof errors_1.AuthRetryableFetchError && this.networkRetries < constants_1.NETWORK_FAILURE.MAX_RETRIES) this._startAutoRefreshToken(Math.pow(constants_1.NETWORK_FAILURE.RETRY_INTERVAL, this.networkRetries) * 100); // exponential backoff
              case 13:
              case "end":
                return _context21.stop();
            }
          }, _callee21, this);
        }));
      }, value);
      if (typeof this.refreshTokenTimer.unref === 'function') this.refreshTokenTimer.unref();
    }
  }, {
    key: "_handleVisibilityChange",
    value: function _handleVisibilityChange() {
      var _this4 = this;
      if (!(0, helpers_1.isBrowser)() || !(window === null || window === void 0 ? void 0 : window.addEventListener)) {
        return false;
      }
      try {
        window === null || window === void 0 ? void 0 : window.addEventListener('visibilitychange', function () {
          return __awaiter(_this4, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
            return _regeneratorRuntime().wrap(function _callee22$(_context22) {
              while (1) switch (_context22.prev = _context22.next) {
                case 0:
                  if (!(document.visibilityState === 'visible')) {
                    _context22.next = 5;
                    break;
                  }
                  _context22.next = 3;
                  return this.initializePromise;
                case 3:
                  _context22.next = 5;
                  return this._recoverAndRefresh();
                case 5:
                case "end":
                  return _context22.stop();
              }
            }, _callee22, this);
          }));
        });
      } catch (error) {
        console.error('_handleVisibilityChange', error);
      }
    }
    /**
     * Generates the relevant login URL for a third-party provider.
     * @param options.redirectTo A URL or mobile address to send the user to after they are confirmed.
     * @param options.scopes A space-separated list of scopes granted to the OAuth application.
     * @param options.queryParams An object of key-value pairs containing query parameters granted to the OAuth application.
     */
  }, {
    key: "_getUrlForProvider",
    value: function _getUrlForProvider(provider, options) {
      var urlParams = ["provider=".concat(encodeURIComponent(provider))];
      if (options === null || options === void 0 ? void 0 : options.redirectTo) {
        urlParams.push("redirect_to=".concat(encodeURIComponent(options.redirectTo)));
      }
      if (options === null || options === void 0 ? void 0 : options.scopes) {
        urlParams.push("scopes=".concat(encodeURIComponent(options.scopes)));
      }
      if (options === null || options === void 0 ? void 0 : options.queryParams) {
        var query = new URLSearchParams(options.queryParams);
        urlParams.push(query.toString());
      }
      return "".concat(this.url, "/authorize?").concat(urlParams.join('&'));
    }
  }, {
    key: "_unenroll",
    value: function _unenroll(params) {
      var _a;
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
        var _yield$this$getSessio6, sessionData, sessionError;
        return _regeneratorRuntime().wrap(function _callee23$(_context23) {
          while (1) switch (_context23.prev = _context23.next) {
            case 0:
              _context23.prev = 0;
              _context23.next = 3;
              return this.getSession();
            case 3:
              _yield$this$getSessio6 = _context23.sent;
              sessionData = _yield$this$getSessio6.data;
              sessionError = _yield$this$getSessio6.error;
              if (!sessionError) {
                _context23.next = 8;
                break;
              }
              return _context23.abrupt("return", {
                data: null,
                error: sessionError
              });
            case 8:
              _context23.next = 10;
              return (0, fetch_1._request)(this.fetch, 'DELETE', "".concat(this.url, "/factors/").concat(params.factorId), {
                headers: this.headers,
                jwt: (_a = sessionData === null || sessionData === void 0 ? void 0 : sessionData.session) === null || _a === void 0 ? void 0 : _a.access_token
              });
            case 10:
              return _context23.abrupt("return", _context23.sent);
            case 13:
              _context23.prev = 13;
              _context23.t0 = _context23["catch"](0);
              if (!(0, errors_1.isAuthError)(_context23.t0)) {
                _context23.next = 17;
                break;
              }
              return _context23.abrupt("return", {
                data: null,
                error: _context23.t0
              });
            case 17:
              throw _context23.t0;
            case 18:
            case "end":
              return _context23.stop();
          }
        }, _callee23, this, [[0, 13]]);
      }));
    }
    /**
     * Enrolls a factor
     * @param friendlyName Human readable name assigned to a device
     * @param factorType device which we're validating against. Can only be TOTP for now.
     * @param issuer domain which the user is enrolling with
     */
  }, {
    key: "_enroll",
    value: function _enroll(params) {
      var _a, _b;
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee24() {
        var _yield$this$getSessio7, sessionData, sessionError, _yield5, data, error;
        return _regeneratorRuntime().wrap(function _callee24$(_context24) {
          while (1) switch (_context24.prev = _context24.next) {
            case 0:
              _context24.prev = 0;
              _context24.next = 3;
              return this.getSession();
            case 3:
              _yield$this$getSessio7 = _context24.sent;
              sessionData = _yield$this$getSessio7.data;
              sessionError = _yield$this$getSessio7.error;
              if (!sessionError) {
                _context24.next = 8;
                break;
              }
              return _context24.abrupt("return", {
                data: null,
                error: sessionError
              });
            case 8:
              _context24.next = 10;
              return (0, fetch_1._request)(this.fetch, 'POST', "".concat(this.url, "/factors"), {
                body: {
                  friendly_name: params.friendlyName,
                  factor_type: params.factorType,
                  issuer: params.issuer
                },
                headers: this.headers,
                jwt: (_a = sessionData === null || sessionData === void 0 ? void 0 : sessionData.session) === null || _a === void 0 ? void 0 : _a.access_token
              });
            case 10:
              _yield5 = _context24.sent;
              data = _yield5.data;
              error = _yield5.error;
              if (!error) {
                _context24.next = 15;
                break;
              }
              return _context24.abrupt("return", {
                data: null,
                error: error
              });
            case 15:
              if ((_b = data === null || data === void 0 ? void 0 : data.totp) === null || _b === void 0 ? void 0 : _b.qr_code) {
                data.totp.qr_code = "data:image/svg+xml;utf-8,".concat(data.totp.qr_code);
              }
              return _context24.abrupt("return", {
                data: data,
                error: null
              });
            case 19:
              _context24.prev = 19;
              _context24.t0 = _context24["catch"](0);
              if (!(0, errors_1.isAuthError)(_context24.t0)) {
                _context24.next = 23;
                break;
              }
              return _context24.abrupt("return", {
                data: null,
                error: _context24.t0
              });
            case 23:
              throw _context24.t0;
            case 24:
            case "end":
              return _context24.stop();
          }
        }, _callee24, this, [[0, 19]]);
      }));
    }
    /**
     * Validates a device as part of the enrollment step.
     * @param factorId System assigned identifier for authenticator device as returned by enroll
     * @param code Code Generated by an authenticator device
     */
  }, {
    key: "_verify",
    value: function _verify(params) {
      var _a;
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee25() {
        var _yield$this$getSessio8, sessionData, sessionError, _yield6, data, error;
        return _regeneratorRuntime().wrap(function _callee25$(_context25) {
          while (1) switch (_context25.prev = _context25.next) {
            case 0:
              _context25.prev = 0;
              _context25.next = 3;
              return this.getSession();
            case 3:
              _yield$this$getSessio8 = _context25.sent;
              sessionData = _yield$this$getSessio8.data;
              sessionError = _yield$this$getSessio8.error;
              if (!sessionError) {
                _context25.next = 8;
                break;
              }
              return _context25.abrupt("return", {
                data: null,
                error: sessionError
              });
            case 8:
              _context25.next = 10;
              return (0, fetch_1._request)(this.fetch, 'POST', "".concat(this.url, "/factors/").concat(params.factorId, "/verify"), {
                body: {
                  code: params.code,
                  challenge_id: params.challengeId
                },
                headers: this.headers,
                jwt: (_a = sessionData === null || sessionData === void 0 ? void 0 : sessionData.session) === null || _a === void 0 ? void 0 : _a.access_token
              });
            case 10:
              _yield6 = _context25.sent;
              data = _yield6.data;
              error = _yield6.error;
              if (!error) {
                _context25.next = 15;
                break;
              }
              return _context25.abrupt("return", {
                data: null,
                error: error
              });
            case 15:
              _context25.next = 17;
              return this._saveSession(Object.assign({
                expires_at: Math.round(Date.now() / 1000) + data.expires_in
              }, data));
            case 17:
              this._notifyAllSubscribers('MFA_CHALLENGE_VERIFIED', data);
              return _context25.abrupt("return", {
                data: data,
                error: error
              });
            case 21:
              _context25.prev = 21;
              _context25.t0 = _context25["catch"](0);
              if (!(0, errors_1.isAuthError)(_context25.t0)) {
                _context25.next = 25;
                break;
              }
              return _context25.abrupt("return", {
                data: null,
                error: _context25.t0
              });
            case 25:
              throw _context25.t0;
            case 26:
            case "end":
              return _context25.stop();
          }
        }, _callee25, this, [[0, 21]]);
      }));
    }
    /**
     * Creates a challenge which a user can verify against
     * @param factorId System assigned identifier for authenticator device as returned by enroll
     */
  }, {
    key: "_challenge",
    value: function _challenge(params) {
      var _a;
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee26() {
        var _yield$this$getSessio9, sessionData, sessionError;
        return _regeneratorRuntime().wrap(function _callee26$(_context26) {
          while (1) switch (_context26.prev = _context26.next) {
            case 0:
              _context26.prev = 0;
              _context26.next = 3;
              return this.getSession();
            case 3:
              _yield$this$getSessio9 = _context26.sent;
              sessionData = _yield$this$getSessio9.data;
              sessionError = _yield$this$getSessio9.error;
              if (!sessionError) {
                _context26.next = 8;
                break;
              }
              return _context26.abrupt("return", {
                data: null,
                error: sessionError
              });
            case 8:
              _context26.next = 10;
              return (0, fetch_1._request)(this.fetch, 'POST', "".concat(this.url, "/factors/").concat(params.factorId, "/challenge"), {
                headers: this.headers,
                jwt: (_a = sessionData === null || sessionData === void 0 ? void 0 : sessionData.session) === null || _a === void 0 ? void 0 : _a.access_token
              });
            case 10:
              return _context26.abrupt("return", _context26.sent);
            case 13:
              _context26.prev = 13;
              _context26.t0 = _context26["catch"](0);
              if (!(0, errors_1.isAuthError)(_context26.t0)) {
                _context26.next = 17;
                break;
              }
              return _context26.abrupt("return", {
                data: null,
                error: _context26.t0
              });
            case 17:
              throw _context26.t0;
            case 18:
            case "end":
              return _context26.stop();
          }
        }, _callee26, this, [[0, 13]]);
      }));
    }
    /**
     * Creates a challenge and immediately verifies it
     * @param factorId System assigned identifier for authenticator device as returned by enroll
     * @param code Code Generated by an authenticator device
     */
  }, {
    key: "_challengeAndVerify",
    value: function _challengeAndVerify(params) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee27() {
        var _yield$this$_challeng, challengeData, challengeError;
        return _regeneratorRuntime().wrap(function _callee27$(_context27) {
          while (1) switch (_context27.prev = _context27.next) {
            case 0:
              _context27.next = 2;
              return this._challenge({
                factorId: params.factorId
              });
            case 2:
              _yield$this$_challeng = _context27.sent;
              challengeData = _yield$this$_challeng.data;
              challengeError = _yield$this$_challeng.error;
              if (!challengeError) {
                _context27.next = 7;
                break;
              }
              return _context27.abrupt("return", {
                data: null,
                error: challengeError
              });
            case 7:
              _context27.next = 9;
              return this._verify({
                factorId: params.factorId,
                challengeId: challengeData.id,
                code: params.code
              });
            case 9:
              return _context27.abrupt("return", _context27.sent);
            case 10:
            case "end":
              return _context27.stop();
          }
        }, _callee27, this);
      }));
    }
    /**
     * Displays all devices for a given user
     */
  }, {
    key: "_listFactors",
    value: function _listFactors() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee28() {
        var _yield$this$getUser3, user, userError, factors, totp;
        return _regeneratorRuntime().wrap(function _callee28$(_context28) {
          while (1) switch (_context28.prev = _context28.next) {
            case 0:
              _context28.next = 2;
              return this.getUser();
            case 2:
              _yield$this$getUser3 = _context28.sent;
              user = _yield$this$getUser3.data.user;
              userError = _yield$this$getUser3.error;
              if (!userError) {
                _context28.next = 7;
                break;
              }
              return _context28.abrupt("return", {
                data: null,
                error: userError
              });
            case 7:
              factors = (user === null || user === void 0 ? void 0 : user.factors) || [];
              totp = factors.filter(function (factor) {
                return factor.factor_type === 'totp' && factor.status === 'verified';
              });
              return _context28.abrupt("return", {
                data: {
                  all: factors,
                  totp: totp
                },
                error: null
              });
            case 10:
            case "end":
              return _context28.stop();
          }
        }, _callee28, this);
      }));
    }
    /**
     * Gets the current and next authenticator assurance level (AAL)
     * and the current authentication methods for the session (AMR)
     */
  }, {
    key: "_getAuthenticatorAssuranceLevel",
    value: function _getAuthenticatorAssuranceLevel() {
      var _a, _b;
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee29() {
        var _yield$this$getSessio10, session, sessionError, payload, currentLevel, nextLevel, verifiedFactors, currentAuthenticationMethods;
        return _regeneratorRuntime().wrap(function _callee29$(_context29) {
          while (1) switch (_context29.prev = _context29.next) {
            case 0:
              _context29.next = 2;
              return this.getSession();
            case 2:
              _yield$this$getSessio10 = _context29.sent;
              session = _yield$this$getSessio10.data.session;
              sessionError = _yield$this$getSessio10.error;
              if (!sessionError) {
                _context29.next = 7;
                break;
              }
              return _context29.abrupt("return", {
                data: null,
                error: sessionError
              });
            case 7:
              if (session) {
                _context29.next = 9;
                break;
              }
              return _context29.abrupt("return", {
                data: {
                  currentLevel: null,
                  nextLevel: null,
                  currentAuthenticationMethods: []
                },
                error: null
              });
            case 9:
              payload = this._decodeJWT(session.access_token);
              currentLevel = null;
              if (payload.aal) {
                currentLevel = payload.aal;
              }
              nextLevel = currentLevel;
              verifiedFactors = (_b = (_a = session.user.factors) === null || _a === void 0 ? void 0 : _a.filter(function (factor) {
                return factor.status === 'verified';
              })) !== null && _b !== void 0 ? _b : [];
              if (verifiedFactors.length > 0) {
                nextLevel = 'aal2';
              }
              currentAuthenticationMethods = payload.amr || [];
              return _context29.abrupt("return", {
                data: {
                  currentLevel: currentLevel,
                  nextLevel: nextLevel,
                  currentAuthenticationMethods: currentAuthenticationMethods
                },
                error: null
              });
            case 17:
            case "end":
              return _context29.stop();
          }
        }, _callee29, this);
      }));
    }
  }]);
  return GoTrueClient;
}();
exports["default"] = GoTrueClient;

},{"./GoTrueAdminApi":7,"./lib/constants":10,"./lib/errors":11,"./lib/fetch":12,"./lib/helpers":13,"./lib/local-storage":14,"./lib/polyfills":15}],9:[function(require,module,exports){
"use strict";

var __createBinding = void 0 && (void 0).__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __exportStar = void 0 && (void 0).__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GoTrueClient = exports.GoTrueAdminApi = void 0;
var GoTrueAdminApi_1 = __importDefault(require("./GoTrueAdminApi"));
exports.GoTrueAdminApi = GoTrueAdminApi_1["default"];
var GoTrueClient_1 = __importDefault(require("./GoTrueClient"));
exports.GoTrueClient = GoTrueClient_1["default"];
__exportStar(require("./lib/types"), exports);
__exportStar(require("./lib/errors"), exports);

},{"./GoTrueAdminApi":7,"./GoTrueClient":8,"./lib/errors":11,"./lib/types":16}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NETWORK_FAILURE = exports.EXPIRY_MARGIN = exports.DEFAULT_HEADERS = exports.AUDIENCE = exports.STORAGE_KEY = exports.GOTRUE_URL = void 0;
var version_1 = require("./version");
exports.GOTRUE_URL = 'http://localhost:9999';
exports.STORAGE_KEY = 'supabase.auth.token';
exports.AUDIENCE = '';
exports.DEFAULT_HEADERS = {
  'X-Client-Info': "gotrue-js/".concat(version_1.version)
};
exports.EXPIRY_MARGIN = 10; // in seconds
exports.NETWORK_FAILURE = {
  MAX_RETRIES: 10,
  RETRY_INTERVAL: 2 // in deciseconds
};

},{"./version":17}],11:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthRetryableFetchError = exports.AuthImplicitGrantRedirectError = exports.AuthInvalidCredentialsError = exports.AuthSessionMissingError = exports.CustomAuthError = exports.AuthUnknownError = exports.isAuthApiError = exports.AuthApiError = exports.isAuthError = exports.AuthError = void 0;
var AuthError = /*#__PURE__*/function (_Error) {
  _inherits(AuthError, _Error);
  var _super = _createSuper(AuthError);
  function AuthError(message) {
    var _this;
    _classCallCheck(this, AuthError);
    _this = _super.call(this, message);
    _this.__isAuthError = true;
    _this.name = 'AuthError';
    return _this;
  }
  return _createClass(AuthError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
exports.AuthError = AuthError;
function isAuthError(error) {
  return _typeof(error) === 'object' && error !== null && '__isAuthError' in error;
}
exports.isAuthError = isAuthError;
var AuthApiError = /*#__PURE__*/function (_AuthError) {
  _inherits(AuthApiError, _AuthError);
  var _super2 = _createSuper(AuthApiError);
  function AuthApiError(message, status) {
    var _this2;
    _classCallCheck(this, AuthApiError);
    _this2 = _super2.call(this, message);
    _this2.name = 'AuthApiError';
    _this2.status = status;
    return _this2;
  }
  _createClass(AuthApiError, [{
    key: "toJSON",
    value: function toJSON() {
      return {
        name: this.name,
        message: this.message,
        status: this.status
      };
    }
  }]);
  return AuthApiError;
}(AuthError);
exports.AuthApiError = AuthApiError;
function isAuthApiError(error) {
  return isAuthError(error) && error.name === 'AuthApiError';
}
exports.isAuthApiError = isAuthApiError;
var AuthUnknownError = /*#__PURE__*/function (_AuthError2) {
  _inherits(AuthUnknownError, _AuthError2);
  var _super3 = _createSuper(AuthUnknownError);
  function AuthUnknownError(message, originalError) {
    var _this3;
    _classCallCheck(this, AuthUnknownError);
    _this3 = _super3.call(this, message);
    _this3.name = 'AuthUnknownError';
    _this3.originalError = originalError;
    return _this3;
  }
  return _createClass(AuthUnknownError);
}(AuthError);
exports.AuthUnknownError = AuthUnknownError;
var CustomAuthError = /*#__PURE__*/function (_AuthError3) {
  _inherits(CustomAuthError, _AuthError3);
  var _super4 = _createSuper(CustomAuthError);
  function CustomAuthError(message, name, status) {
    var _this4;
    _classCallCheck(this, CustomAuthError);
    _this4 = _super4.call(this, message);
    _this4.name = name;
    _this4.status = status;
    return _this4;
  }
  _createClass(CustomAuthError, [{
    key: "toJSON",
    value: function toJSON() {
      return {
        name: this.name,
        message: this.message,
        status: this.status
      };
    }
  }]);
  return CustomAuthError;
}(AuthError);
exports.CustomAuthError = CustomAuthError;
var AuthSessionMissingError = /*#__PURE__*/function (_CustomAuthError) {
  _inherits(AuthSessionMissingError, _CustomAuthError);
  var _super5 = _createSuper(AuthSessionMissingError);
  function AuthSessionMissingError() {
    _classCallCheck(this, AuthSessionMissingError);
    return _super5.call(this, 'Auth session missing!', 'AuthSessionMissingError', 400);
  }
  return _createClass(AuthSessionMissingError);
}(CustomAuthError);
exports.AuthSessionMissingError = AuthSessionMissingError;
var AuthInvalidCredentialsError = /*#__PURE__*/function (_CustomAuthError2) {
  _inherits(AuthInvalidCredentialsError, _CustomAuthError2);
  var _super6 = _createSuper(AuthInvalidCredentialsError);
  function AuthInvalidCredentialsError(message) {
    _classCallCheck(this, AuthInvalidCredentialsError);
    return _super6.call(this, message, 'AuthInvalidCredentialsError', 400);
  }
  return _createClass(AuthInvalidCredentialsError);
}(CustomAuthError);
exports.AuthInvalidCredentialsError = AuthInvalidCredentialsError;
var AuthImplicitGrantRedirectError = /*#__PURE__*/function (_CustomAuthError3) {
  _inherits(AuthImplicitGrantRedirectError, _CustomAuthError3);
  var _super7 = _createSuper(AuthImplicitGrantRedirectError);
  function AuthImplicitGrantRedirectError(message) {
    var _this5;
    var details = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    _classCallCheck(this, AuthImplicitGrantRedirectError);
    _this5 = _super7.call(this, message, 'AuthImplicitGrantRedirectError', 500);
    _this5.details = null;
    _this5.details = details;
    return _this5;
  }
  _createClass(AuthImplicitGrantRedirectError, [{
    key: "toJSON",
    value: function toJSON() {
      return {
        name: this.name,
        message: this.message,
        status: this.status,
        details: this.details
      };
    }
  }]);
  return AuthImplicitGrantRedirectError;
}(CustomAuthError);
exports.AuthImplicitGrantRedirectError = AuthImplicitGrantRedirectError;
var AuthRetryableFetchError = /*#__PURE__*/function (_CustomAuthError4) {
  _inherits(AuthRetryableFetchError, _CustomAuthError4);
  var _super8 = _createSuper(AuthRetryableFetchError);
  function AuthRetryableFetchError(message, status) {
    _classCallCheck(this, AuthRetryableFetchError);
    return _super8.call(this, message, 'AuthRetryableFetchError', status);
  }
  return _createClass(AuthRetryableFetchError);
}(CustomAuthError);
exports.AuthRetryableFetchError = AuthRetryableFetchError;

},{}],12:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._noResolveJsonResponse = exports._generateLinkResponse = exports._ssoResponse = exports._userResponse = exports._sessionResponse = exports._request = void 0;
var helpers_1 = require("./helpers");
var errors_1 = require("./errors");
var _getErrorMessage = function _getErrorMessage(err) {
  return err.msg || err.message || err.error_description || err.error || JSON.stringify(err);
};
var handleError = function handleError(error, reject) {
  return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var NETWORK_ERROR_CODES;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          NETWORK_ERROR_CODES = [502, 503, 504];
          if (!(0, helpers_1.looksLikeFetchResponse)(error)) {
            reject(new errors_1.AuthRetryableFetchError(_getErrorMessage(error), 0));
          } else if (NETWORK_ERROR_CODES.includes(error.status)) {
            // status in 500...599 range - server had an error, request might be retryed.
            reject(new errors_1.AuthRetryableFetchError(_getErrorMessage(error), error.status));
          } else {
            // got a response from server that is not in the 500...599 range - should not retry
            error.json().then(function (err) {
              reject(new errors_1.AuthApiError(_getErrorMessage(err), error.status || 500));
            })["catch"](function (e) {
              // not a valid json response
              reject(new errors_1.AuthUnknownError(_getErrorMessage(e), e));
            });
          }
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
};
var _getRequestParams = function _getRequestParams(method, options, parameters, body) {
  var params = {
    method: method,
    headers: (options === null || options === void 0 ? void 0 : options.headers) || {}
  };
  if (method === 'GET') {
    return params;
  }
  params.headers = Object.assign({
    'Content-Type': 'application/json;charset=UTF-8'
  }, options === null || options === void 0 ? void 0 : options.headers);
  params.body = JSON.stringify(body);
  return Object.assign(Object.assign({}, params), parameters);
};
function _request(fetcher, method, url, options) {
  var _a;
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var headers, qs, queryString, data;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          headers = Object.assign({}, options === null || options === void 0 ? void 0 : options.headers);
          if (options === null || options === void 0 ? void 0 : options.jwt) {
            headers['Authorization'] = "Bearer ".concat(options.jwt);
          }
          qs = (_a = options === null || options === void 0 ? void 0 : options.query) !== null && _a !== void 0 ? _a : {};
          if (options === null || options === void 0 ? void 0 : options.redirectTo) {
            qs['redirect_to'] = options.redirectTo;
          }
          queryString = Object.keys(qs).length ? '?' + new URLSearchParams(qs).toString() : '';
          _context2.next = 7;
          return _handleRequest(fetcher, method, url + queryString, {
            headers: headers,
            noResolveJson: options === null || options === void 0 ? void 0 : options.noResolveJson
          }, {}, options === null || options === void 0 ? void 0 : options.body);
        case 7:
          data = _context2.sent;
          return _context2.abrupt("return", (options === null || options === void 0 ? void 0 : options.xform) ? options === null || options === void 0 ? void 0 : options.xform(data) : {
            data: Object.assign({}, data),
            error: null
          });
        case 9:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
}
exports._request = _request;
function _handleRequest(fetcher, method, url, options, parameters, body) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", new Promise(function (resolve, reject) {
            fetcher(url, _getRequestParams(method, options, parameters, body)).then(function (result) {
              if (!result.ok) throw result;
              if (options === null || options === void 0 ? void 0 : options.noResolveJson) return result;
              return result.json();
            }).then(function (data) {
              return resolve(data);
            })["catch"](function (error) {
              return handleError(error, reject);
            });
          }));
        case 1:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
}
function _sessionResponse(data) {
  var _a;
  var session = null;
  if (hasSession(data)) {
    session = Object.assign({}, data);
    session.expires_at = (0, helpers_1.expiresAt)(data.expires_in);
  }
  var user = (_a = data.user) !== null && _a !== void 0 ? _a : data;
  return {
    data: {
      session: session,
      user: user
    },
    error: null
  };
}
exports._sessionResponse = _sessionResponse;
function _userResponse(data) {
  var _a;
  var user = (_a = data.user) !== null && _a !== void 0 ? _a : data;
  return {
    data: {
      user: user
    },
    error: null
  };
}
exports._userResponse = _userResponse;
function _ssoResponse(data) {
  return {
    data: data,
    error: null
  };
}
exports._ssoResponse = _ssoResponse;
function _generateLinkResponse(data) {
  var action_link = data.action_link,
    email_otp = data.email_otp,
    hashed_token = data.hashed_token,
    redirect_to = data.redirect_to,
    verification_type = data.verification_type,
    rest = __rest(data, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]);
  var properties = {
    action_link: action_link,
    email_otp: email_otp,
    hashed_token: hashed_token,
    redirect_to: redirect_to,
    verification_type: verification_type
  };
  var user = Object.assign({}, rest);
  return {
    data: {
      properties: properties,
      user: user
    },
    error: null
  };
}
exports._generateLinkResponse = _generateLinkResponse;
function _noResolveJsonResponse(data) {
  return data;
}
exports._noResolveJsonResponse = _noResolveJsonResponse;
/**
 * hasSession checks if the response object contains a valid session
 * @param data A response object
 * @returns true if a session is in the response
 */
function hasSession(data) {
  return data.access_token && data.refresh_token && data.expires_in;
}

},{"./errors":11,"./helpers":13}],13:[function(require,module,exports){
(function (Buffer){(function (){
"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
var __createBinding = void 0 && (void 0).__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = void 0 && (void 0).__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decodeJWTPayload = exports.Deferred = exports.decodeBase64URL = exports.removeItemAsync = exports.getItemAsync = exports.setItemAsync = exports.looksLikeFetchResponse = exports.resolveFetch = exports.getParameterByName = exports.isBrowser = exports.uuid = exports.expiresAt = void 0;
function expiresAt(expiresIn) {
  var timeNow = Math.round(Date.now() / 1000);
  return timeNow + expiresIn;
}
exports.expiresAt = expiresAt;
function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
      v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}
exports.uuid = uuid;
var isBrowser = function isBrowser() {
  return typeof document !== 'undefined';
};
exports.isBrowser = isBrowser;
function getParameterByName(name, url) {
  var _a;
  if (!url) url = ((_a = window === null || window === void 0 ? void 0 : window.location) === null || _a === void 0 ? void 0 : _a.href) || '';
  // eslint-disable-next-line no-useless-escape
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&#]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
exports.getParameterByName = getParameterByName;
var resolveFetch = function resolveFetch(customFetch) {
  var _fetch;
  if (customFetch) {
    _fetch = customFetch;
  } else if (typeof fetch === 'undefined') {
    _fetch = function _fetch() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$Promise$resolv;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Promise.resolve().then(function () {
                return __importStar(require('cross-fetch'));
              });
            case 2:
              _context.next = 4;
              return (_yield$Promise$resolv = _context.sent).fetch.apply(_yield$Promise$resolv, args);
            case 4:
              return _context.abrupt("return", _context.sent);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
    };
  } else {
    _fetch = fetch;
  }
  return function () {
    return _fetch.apply(void 0, arguments);
  };
};
exports.resolveFetch = resolveFetch;
var looksLikeFetchResponse = function looksLikeFetchResponse(maybeResponse) {
  return _typeof(maybeResponse) === 'object' && maybeResponse !== null && 'status' in maybeResponse && 'ok' in maybeResponse && 'json' in maybeResponse && typeof maybeResponse.json === 'function';
};
exports.looksLikeFetchResponse = looksLikeFetchResponse;
// Storage helpers
var setItemAsync = function setItemAsync(storage, key, data) {
  return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return storage.setItem(key, JSON.stringify(data));
        case 2:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
};
exports.setItemAsync = setItemAsync;
var getItemAsync = function getItemAsync(storage, key) {
  return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var value;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return storage.getItem(key);
        case 2:
          value = _context3.sent;
          if (value) {
            _context3.next = 5;
            break;
          }
          return _context3.abrupt("return", null);
        case 5:
          _context3.prev = 5;
          return _context3.abrupt("return", JSON.parse(value));
        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](5);
          return _context3.abrupt("return", value);
        case 12:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[5, 9]]);
  }));
};
exports.getItemAsync = getItemAsync;
var removeItemAsync = function removeItemAsync(storage, key) {
  return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return storage.removeItem(key);
        case 2:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
};
exports.removeItemAsync = removeItemAsync;
var decodeBase64URL = function decodeBase64URL(value) {
  try {
    // atob is present in all browsers and nodejs >= 16
    // but if it is not it will throw a ReferenceError in which case we can try to use Buffer
    // replace are here to convert the Base64-URL into Base64 which is what atob supports
    // replace with //g regex acts like replaceAll
    // Decoding base64 to UTF8 see https://stackoverflow.com/a/30106551/17622044
    return decodeURIComponent(atob(value.replace(/[-]/g, '+').replace(/[_]/g, '/')).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  } catch (e) {
    if (e instanceof ReferenceError) {
      // running on nodejs < 16
      // Buffer supports Base64-URL transparently
      return Buffer.from(value, 'base64').toString('utf-8');
    } else {
      throw e;
    }
  }
};
exports.decodeBase64URL = decodeBase64URL;
/**
 * A deferred represents some asynchronous work that is not yet finished, which
 * may or may not culminate in a value.
 * Taken from: https://github.com/mike-north/types/blob/master/src/async.ts
 */
var Deferred = /*#__PURE__*/_createClass(function Deferred() {
  var _this = this;
  _classCallCheck(this, Deferred);
  // eslint-disable-next-line @typescript-eslint/no-extra-semi
  ;
  this.promise = new Deferred.promiseConstructor(function (res, rej) {
    // eslint-disable-next-line @typescript-eslint/no-extra-semi
    ;
    _this.resolve = res;
    _this.reject = rej;
  });
});
exports.Deferred = Deferred;
Deferred.promiseConstructor = Promise;
// Taken from: https://stackoverflow.com/questions/38552003/how-to-decode-jwt-token-in-javascript-without-using-a-library
function decodeJWTPayload(token) {
  // Regex checks for base64url format
  var base64UrlRegex = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i;
  var parts = token.split('.');
  if (parts.length !== 3) {
    throw new Error('JWT is not valid: not a JWT structure');
  }
  if (!base64UrlRegex.test(parts[1])) {
    throw new Error('JWT is not valid: payload is not in base64url format');
  }
  var base64Url = parts[1];
  return JSON.parse((0, exports.decodeBase64URL)(base64Url));
}
exports.decodeJWTPayload = decodeJWTPayload;

}).call(this)}).call(this,require("buffer").Buffer)

},{"buffer":54,"cross-fetch":59}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var helpers_1 = require("./helpers");
var localStorageAdapter = {
  getItem: function getItem(key) {
    if (!(0, helpers_1.isBrowser)()) {
      return null;
    }
    return globalThis.localStorage.getItem(key);
  },
  setItem: function setItem(key, value) {
    if (!(0, helpers_1.isBrowser)()) {
      return;
    }
    globalThis.localStorage.setItem(key, value);
  },
  removeItem: function removeItem(key) {
    if (!(0, helpers_1.isBrowser)()) {
      return;
    }
    globalThis.localStorage.removeItem(key);
  }
};
exports["default"] = localStorageAdapter;

},{"./helpers":13}],15:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.polyfillGlobalThis = void 0;
/**
 * https://mathiasbynens.be/notes/globalthis
 */
function polyfillGlobalThis() {
  if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === 'object') return;
  try {
    Object.defineProperty(Object.prototype, '__magic__', {
      get: function get() {
        return this;
      },
      configurable: true
    });
    // @ts-expect-error 'Allow access to magic'
    __magic__.globalThis = __magic__;
    // @ts-expect-error 'Allow access to magic'
    delete Object.prototype.__magic__;
  } catch (e) {
    if (typeof self !== 'undefined') {
      // @ts-expect-error 'Allow access to globals'
      self.globalThis = self;
    }
  }
}
exports.polyfillGlobalThis = polyfillGlobalThis;

},{}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

},{}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.version = void 0;
// Generated by genversion.
exports.version = '2.6.1';

},{}],18:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var cross_fetch_1 = __importDefault(require("cross-fetch"));
var PostgrestBuilder = /*#__PURE__*/function () {
  function PostgrestBuilder(builder) {
    _classCallCheck(this, PostgrestBuilder);
    this.shouldThrowOnError = false;
    this.method = builder.method;
    this.url = builder.url;
    this.headers = builder.headers;
    this.schema = builder.schema;
    this.body = builder.body;
    this.shouldThrowOnError = builder.shouldThrowOnError;
    this.signal = builder.signal;
    this.allowEmpty = builder.allowEmpty;
    if (builder.fetch) {
      this.fetch = builder.fetch;
    } else if (typeof fetch === 'undefined') {
      this.fetch = cross_fetch_1["default"];
    } else {
      this.fetch = fetch;
    }
  }
  /**
   * If there's an error with the query, throwOnError will reject the promise by
   * throwing the error instead of returning it as part of a successful response.
   *
   * {@link https://github.com/supabase/supabase-js/issues/92}
   */
  _createClass(PostgrestBuilder, [{
    key: "throwOnError",
    value: function throwOnError() {
      this.shouldThrowOnError = true;
      return this;
    }
  }, {
    key: "then",
    value: function then(onfulfilled, onrejected) {
      var _this = this;
      // https://postgrest.org/en/stable/api.html#switching-schemas
      if (this.schema === undefined) {
        // skip
      } else if (['GET', 'HEAD'].includes(this.method)) {
        this.headers['Accept-Profile'] = this.schema;
      } else {
        this.headers['Content-Profile'] = this.schema;
      }
      if (this.method !== 'GET' && this.method !== 'HEAD') {
        this.headers['Content-Type'] = 'application/json';
      }
      // NOTE: Invoke w/o `this` to avoid illegal invocation error.
      // https://github.com/supabase/postgrest-js/pull/247
      var _fetch = this.fetch;
      var res = _fetch(this.url.toString(), {
        method: this.method,
        headers: this.headers,
        body: JSON.stringify(this.body),
        signal: this.signal
      }).then(function (res) {
        return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var _a, _b, _c, error, data, count, status, statusText, body, countHeader, contentRange, _body, postgrestResponse;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                error = null;
                data = null;
                count = null;
                status = res.status;
                statusText = res.statusText;
                if (!res.ok) {
                  _context.next = 16;
                  break;
                }
                if (!(this.method !== 'HEAD')) {
                  _context.next = 11;
                  break;
                }
                _context.next = 9;
                return res.text();
              case 9:
                body = _context.sent;
                if (body === '') {
                  // Prefer: return=minimal
                } else if (this.headers['Accept'] === 'text/csv') {
                  data = body;
                } else if (this.headers['Accept'] && this.headers['Accept'].includes('application/vnd.pgrst.plan+text')) {
                  data = body;
                } else {
                  data = JSON.parse(body);
                }
              case 11:
                countHeader = (_a = this.headers['Prefer']) === null || _a === void 0 ? void 0 : _a.match(/count=(exact|planned|estimated)/);
                contentRange = (_b = res.headers.get('content-range')) === null || _b === void 0 ? void 0 : _b.split('/');
                if (countHeader && contentRange && contentRange.length > 1) {
                  count = parseInt(contentRange[1]);
                }
                _context.next = 23;
                break;
              case 16:
                _context.next = 18;
                return res.text();
              case 18:
                _body = _context.sent;
                try {
                  error = JSON.parse(_body);
                  // Workaround for https://github.com/supabase/postgrest-js/issues/295
                  if (Array.isArray(error) && res.status === 404) {
                    data = [];
                    error = null;
                    status = 200;
                    statusText = 'OK';
                  }
                } catch (_d) {
                  // Workaround for https://github.com/supabase/postgrest-js/issues/295
                  if (res.status === 404 && _body === '') {
                    status = 204;
                    statusText = 'No Content';
                  } else {
                    error = {
                      message: _body
                    };
                  }
                }
                if (error && this.allowEmpty && ((_c = error === null || error === void 0 ? void 0 : error.details) === null || _c === void 0 ? void 0 : _c.includes('Results contain 0 rows'))) {
                  error = null;
                  status = 200;
                  statusText = 'OK';
                }
                if (!(error && this.shouldThrowOnError)) {
                  _context.next = 23;
                  break;
                }
                throw error;
              case 23:
                postgrestResponse = {
                  error: error,
                  data: data,
                  count: count,
                  status: status,
                  statusText: statusText
                };
                return _context.abrupt("return", postgrestResponse);
              case 25:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
      });
      if (!this.shouldThrowOnError) {
        res = res["catch"](function (fetchError) {
          return {
            error: {
              message: "FetchError: ".concat(fetchError.message),
              details: '',
              hint: '',
              code: fetchError.code || ''
            },
            data: null,
            count: null,
            status: 0,
            statusText: ''
          };
        });
      }
      return res.then(onfulfilled, onrejected);
    }
  }]);
  return PostgrestBuilder;
}();
exports["default"] = PostgrestBuilder;

},{"cross-fetch":59}],19:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var PostgrestQueryBuilder_1 = __importDefault(require("./PostgrestQueryBuilder"));
var PostgrestFilterBuilder_1 = __importDefault(require("./PostgrestFilterBuilder"));
var constants_1 = require("./constants");
/**
 * PostgREST client.
 *
 * @typeParam Database - Types for the schema from the [type
 * generator](https://supabase.com/docs/reference/javascript/next/typescript-support)
 *
 * @typeParam SchemaName - Postgres schema to switch to. Must be a string
 * literal, the same one passed to the constructor. If the schema is not
 * `"public"`, this must be supplied manually.
 */
var PostgrestClient = /*#__PURE__*/function () {
  // TODO: Add back shouldThrowOnError once we figure out the typings
  /**
   * Creates a PostgREST client.
   *
   * @param url - URL of the PostgREST endpoint
   * @param options - Named parameters
   * @param options.headers - Custom headers
   * @param options.schema - Postgres schema to switch to
   * @param options.fetch - Custom fetch
   */
  function PostgrestClient(url) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$headers = _ref.headers,
      headers = _ref$headers === void 0 ? {} : _ref$headers,
      schema = _ref.schema,
      fetch = _ref.fetch;
    _classCallCheck(this, PostgrestClient);
    this.url = url;
    this.headers = Object.assign(Object.assign({}, constants_1.DEFAULT_HEADERS), headers);
    this.schema = schema;
    this.fetch = fetch;
  }
  /**
   * Perform a query on a table or a view.
   *
   * @param relation - The table or view name to query
   */
  _createClass(PostgrestClient, [{
    key: "from",
    value: function from(relation) {
      var url = new URL("".concat(this.url, "/").concat(relation));
      return new PostgrestQueryBuilder_1["default"](url, {
        headers: Object.assign({}, this.headers),
        schema: this.schema,
        fetch: this.fetch
      });
    }
    /**
     * Perform a function call.
     *
     * @param fn - The function name to call
     * @param args - The arguments to pass to the function call
     * @param options - Named parameters
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     * @param options.count - Count algorithm to use to count rows returned by the
     * function. Only applicable for [set-returning
     * functions](https://www.postgresql.org/docs/current/functions-srf.html).
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */
  }, {
    key: "rpc",
    value: function rpc(fn) {
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        _ref2$head = _ref2.head,
        head = _ref2$head === void 0 ? false : _ref2$head,
        count = _ref2.count;
      var method;
      var url = new URL("".concat(this.url, "/rpc/").concat(fn));
      var body;
      if (head) {
        method = 'HEAD';
        Object.entries(args).forEach(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
            name = _ref4[0],
            value = _ref4[1];
          url.searchParams.append(name, "".concat(value));
        });
      } else {
        method = 'POST';
        body = args;
      }
      var headers = Object.assign({}, this.headers);
      if (count) {
        headers['Prefer'] = "count=".concat(count);
      }
      return new PostgrestFilterBuilder_1["default"]({
        method: method,
        url: url,
        headers: headers,
        schema: this.schema,
        body: body,
        fetch: this.fetch,
        allowEmpty: false
      });
    }
  }]);
  return PostgrestClient;
}();
exports["default"] = PostgrestClient;

},{"./PostgrestFilterBuilder":20,"./PostgrestQueryBuilder":21,"./constants":23}],20:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var PostgrestTransformBuilder_1 = __importDefault(require("./PostgrestTransformBuilder"));
var PostgrestFilterBuilder = /*#__PURE__*/function (_PostgrestTransformBu) {
  _inherits(PostgrestFilterBuilder, _PostgrestTransformBu);
  var _super = _createSuper(PostgrestFilterBuilder);
  function PostgrestFilterBuilder() {
    _classCallCheck(this, PostgrestFilterBuilder);
    return _super.apply(this, arguments);
  }
  _createClass(PostgrestFilterBuilder, [{
    key: "eq",
    value:
    /**
     * Match only rows where `column` is equal to `value`.
     *
     * To check if the value of `column` is NULL, you should use `.is()` instead.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    function eq(column, value) {
      this.url.searchParams.append(column, "eq.".concat(value));
      return this;
    }
    /**
     * Match only rows where `column` is not equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
  }, {
    key: "neq",
    value: function neq(column, value) {
      this.url.searchParams.append(column, "neq.".concat(value));
      return this;
    }
    /**
     * Match only rows where `column` is greater than `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
  }, {
    key: "gt",
    value: function gt(column, value) {
      this.url.searchParams.append(column, "gt.".concat(value));
      return this;
    }
    /**
     * Match only rows where `column` is greater than or equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
  }, {
    key: "gte",
    value: function gte(column, value) {
      this.url.searchParams.append(column, "gte.".concat(value));
      return this;
    }
    /**
     * Match only rows where `column` is less than `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
  }, {
    key: "lt",
    value: function lt(column, value) {
      this.url.searchParams.append(column, "lt.".concat(value));
      return this;
    }
    /**
     * Match only rows where `column` is less than or equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
  }, {
    key: "lte",
    value: function lte(column, value) {
      this.url.searchParams.append(column, "lte.".concat(value));
      return this;
    }
    /**
     * Match only rows where `column` matches `pattern` case-sensitively.
     *
     * @param column - The column to filter on
     * @param pattern - The pattern to match with
     */
  }, {
    key: "like",
    value: function like(column, pattern) {
      this.url.searchParams.append(column, "like.".concat(pattern));
      return this;
    }
    /**
     * Match only rows where `column` matches `pattern` case-insensitively.
     *
     * @param column - The column to filter on
     * @param pattern - The pattern to match with
     */
  }, {
    key: "ilike",
    value: function ilike(column, pattern) {
      this.url.searchParams.append(column, "ilike.".concat(pattern));
      return this;
    }
    /**
     * Match only rows where `column` IS `value`.
     *
     * For non-boolean columns, this is only relevant for checking if the value of
     * `column` is NULL by setting `value` to `null`.
     *
     * For boolean columns, you can also set `value` to `true` or `false` and it
     * will behave the same way as `.eq()`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
  }, {
    key: "is",
    value: function is(column, value) {
      this.url.searchParams.append(column, "is.".concat(value));
      return this;
    }
    /**
     * Match only rows where `column` is included in the `values` array.
     *
     * @param column - The column to filter on
     * @param values - The values array to filter with
     */
  }, {
    key: "in",
    value: function _in(column, values) {
      var cleanedValues = values.map(function (s) {
        // handle postgrest reserved characters
        // https://postgrest.org/en/v7.0.0/api.html#reserved-characters
        if (typeof s === 'string' && new RegExp('[,()]').test(s)) return "\"".concat(s, "\"");else return "".concat(s);
      }).join(',');
      this.url.searchParams.append(column, "in.(".concat(cleanedValues, ")"));
      return this;
    }
    /**
     * Only relevant for jsonb, array, and range columns. Match only rows where
     * `column` contains every element appearing in `value`.
     *
     * @param column - The jsonb, array, or range column to filter on
     * @param value - The jsonb, array, or range value to filter with
     */
  }, {
    key: "contains",
    value: function contains(column, value) {
      if (typeof value === 'string') {
        // range types can be inclusive '[', ']' or exclusive '(', ')' so just
        // keep it simple and accept a string
        this.url.searchParams.append(column, "cs.".concat(value));
      } else if (Array.isArray(value)) {
        // array
        this.url.searchParams.append(column, "cs.{".concat(value.join(','), "}"));
      } else {
        // json
        this.url.searchParams.append(column, "cs.".concat(JSON.stringify(value)));
      }
      return this;
    }
    /**
     * Only relevant for jsonb, array, and range columns. Match only rows where
     * every element appearing in `column` is contained by `value`.
     *
     * @param column - The jsonb, array, or range column to filter on
     * @param value - The jsonb, array, or range value to filter with
     */
  }, {
    key: "containedBy",
    value: function containedBy(column, value) {
      if (typeof value === 'string') {
        // range
        this.url.searchParams.append(column, "cd.".concat(value));
      } else if (Array.isArray(value)) {
        // array
        this.url.searchParams.append(column, "cd.{".concat(value.join(','), "}"));
      } else {
        // json
        this.url.searchParams.append(column, "cd.".concat(JSON.stringify(value)));
      }
      return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is greater than any element in `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
  }, {
    key: "rangeGt",
    value: function rangeGt(column, range) {
      this.url.searchParams.append(column, "sr.".concat(range));
      return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is either contained in `range` or greater than any element in
     * `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
  }, {
    key: "rangeGte",
    value: function rangeGte(column, range) {
      this.url.searchParams.append(column, "nxl.".concat(range));
      return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is less than any element in `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
  }, {
    key: "rangeLt",
    value: function rangeLt(column, range) {
      this.url.searchParams.append(column, "sl.".concat(range));
      return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is either contained in `range` or less than any element in
     * `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
  }, {
    key: "rangeLte",
    value: function rangeLte(column, range) {
      this.url.searchParams.append(column, "nxr.".concat(range));
      return this;
    }
    /**
     * Only relevant for range columns. Match only rows where `column` is
     * mutually exclusive to `range` and there can be no element between the two
     * ranges.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
  }, {
    key: "rangeAdjacent",
    value: function rangeAdjacent(column, range) {
      this.url.searchParams.append(column, "adj.".concat(range));
      return this;
    }
    /**
     * Only relevant for array and range columns. Match only rows where
     * `column` and `value` have an element in common.
     *
     * @param column - The array or range column to filter on
     * @param value - The array or range value to filter with
     */
  }, {
    key: "overlaps",
    value: function overlaps(column, value) {
      if (typeof value === 'string') {
        // range
        this.url.searchParams.append(column, "ov.".concat(value));
      } else {
        // array
        this.url.searchParams.append(column, "ov.{".concat(value.join(','), "}"));
      }
      return this;
    }
    /**
     * Only relevant for text and tsvector columns. Match only rows where
     * `column` matches the query string in `query`.
     *
     * @param column - The text or tsvector column to filter on
     * @param query - The query text to match with
     * @param options - Named parameters
     * @param options.config - The text search configuration to use
     * @param options.type - Change how the `query` text is interpreted
     */
  }, {
    key: "textSearch",
    value: function textSearch(column, query) {
      var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        config = _ref.config,
        type = _ref.type;
      var typePart = '';
      if (type === 'plain') {
        typePart = 'pl';
      } else if (type === 'phrase') {
        typePart = 'ph';
      } else if (type === 'websearch') {
        typePart = 'w';
      }
      var configPart = config === undefined ? '' : "(".concat(config, ")");
      this.url.searchParams.append(column, "".concat(typePart, "fts").concat(configPart, ".").concat(query));
      return this;
    }
    /**
     * Match only rows where each column in `query` keys is equal to its
     * associated value. Shorthand for multiple `.eq()`s.
     *
     * @param query - The object to filter with, with column names as keys mapped
     * to their filter values
     */
  }, {
    key: "match",
    value: function match(query) {
      var _this = this;
      Object.entries(query).forEach(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
          column = _ref3[0],
          value = _ref3[1];
        _this.url.searchParams.append(column, "eq.".concat(value));
      });
      return this;
    }
    /**
     * Match only rows which doesn't satisfy the filter.
     *
     * Unlike most filters, `opearator` and `value` are used as-is and need to
     * follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure they are properly sanitized.
     *
     * @param column - The column to filter on
     * @param operator - The operator to be negated to filter with, following
     * PostgREST syntax
     * @param value - The value to filter with, following PostgREST syntax
     */
  }, {
    key: "not",
    value: function not(column, operator, value) {
      this.url.searchParams.append(column, "not.".concat(operator, ".").concat(value));
      return this;
    }
    /**
     * Match only rows which satisfy at least one of the filters.
     *
     * Unlike most filters, `filters` is used as-is and needs to follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure it's properly sanitized.
     *
     * It's currently not possible to do an `.or()` filter across multiple tables.
     *
     * @param filters - The filters to use, following PostgREST syntax
     * @param foreignTable - Set this to filter on foreign tables instead of the
     * current table
     */
  }, {
    key: "or",
    value: function or(filters) {
      var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        foreignTable = _ref4.foreignTable;
      var key = foreignTable ? "".concat(foreignTable, ".or") : 'or';
      this.url.searchParams.append(key, "(".concat(filters, ")"));
      return this;
    }
    /**
     * Match only rows which satisfy the filter. This is an escape hatch - you
     * should use the specific filter methods wherever possible.
     *
     * Unlike most filters, `opearator` and `value` are used as-is and need to
     * follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure they are properly sanitized.
     *
     * @param column - The column to filter on
     * @param operator - The operator to filter with, following PostgREST syntax
     * @param value - The value to filter with, following PostgREST syntax
     */
  }, {
    key: "filter",
    value: function filter(column, operator, value) {
      this.url.searchParams.append(column, "".concat(operator, ".").concat(value));
      return this;
    }
  }]);
  return PostgrestFilterBuilder;
}(PostgrestTransformBuilder_1["default"]);
exports["default"] = PostgrestFilterBuilder;

},{"./PostgrestTransformBuilder":22}],21:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var PostgrestFilterBuilder_1 = __importDefault(require("./PostgrestFilterBuilder"));
var PostgrestQueryBuilder = /*#__PURE__*/function () {
  function PostgrestQueryBuilder(url, _ref) {
    var _ref$headers = _ref.headers,
      headers = _ref$headers === void 0 ? {} : _ref$headers,
      schema = _ref.schema,
      fetch = _ref.fetch;
    _classCallCheck(this, PostgrestQueryBuilder);
    this.url = url;
    this.headers = headers;
    this.schema = schema;
    this.fetch = fetch;
  }
  /**
   * Perform a SELECT query on the table or view.
   *
   * @param columns - The columns to retrieve, separated by commas
   *
   * @param options - Named parameters
   *
   * @param options.head - When set to `true`, `data` will not be returned.
   * Useful if you only need the count.
   *
   * @param options.count - Count algorithm to use to count rows in the table or view.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  _createClass(PostgrestQueryBuilder, [{
    key: "select",
    value: function select(columns) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref2$head = _ref2.head,
        head = _ref2$head === void 0 ? false : _ref2$head,
        count = _ref2.count;
      var method = head ? 'HEAD' : 'GET';
      // Remove whitespaces except when quoted
      var quoted = false;
      var cleanedColumns = (columns !== null && columns !== void 0 ? columns : '*').split('').map(function (c) {
        if (/\s/.test(c) && !quoted) {
          return '';
        }
        if (c === '"') {
          quoted = !quoted;
        }
        return c;
      }).join('');
      this.url.searchParams.set('select', cleanedColumns);
      if (count) {
        this.headers['Prefer'] = "count=".concat(count);
      }
      return new PostgrestFilterBuilder_1["default"]({
        method: method,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        fetch: this.fetch,
        allowEmpty: false
      });
    }
    /**
     * Perform an INSERT into the table or view.
     *
     * By default, inserted rows are not returned. To return it, chain the call
     * with `.select()`.
     *
     * @param values - The values to insert. Pass an object to insert a single row
     * or an array to insert multiple rows.
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count inserted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */
  }, {
    key: "insert",
    value: function insert(values) {
      var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        count = _ref3.count;
      var method = 'POST';
      var prefersHeaders = [];
      var body = values;
      if (count) {
        prefersHeaders.push("count=".concat(count));
      }
      if (this.headers['Prefer']) {
        prefersHeaders.unshift(this.headers['Prefer']);
      }
      this.headers['Prefer'] = prefersHeaders.join(',');
      if (Array.isArray(values)) {
        var columns = values.reduce(function (acc, x) {
          return acc.concat(Object.keys(x));
        }, []);
        if (columns.length > 0) {
          var uniqueColumns = _toConsumableArray(new Set(columns)).map(function (column) {
            return "\"".concat(column, "\"");
          });
          this.url.searchParams.set('columns', uniqueColumns.join(','));
        }
      }
      return new PostgrestFilterBuilder_1["default"]({
        method: method,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        body: body,
        fetch: this.fetch,
        allowEmpty: false
      });
    }
    /**
     * Perform an UPSERT on the table or view. Depending on the column(s) passed
     * to `onConflict`, `.upsert()` allows you to perform the equivalent of
     * `.insert()` if a row with the corresponding `onConflict` columns doesn't
     * exist, or if it does exist, perform an alternative action depending on
     * `ignoreDuplicates`.
     *
     * By default, upserted rows are not returned. To return it, chain the call
     * with `.select()`.
     *
     * @param values - The values to upsert with. Pass an object to upsert a
     * single row or an array to upsert multiple rows.
     *
     * @param options - Named parameters
     *
     * @param options.onConflict - Comma-separated UNIQUE column(s) to specify how
     * duplicate rows are determined. Two rows are duplicates if all the
     * `onConflict` columns are equal.
     *
     * @param options.ignoreDuplicates - If `true`, duplicate rows are ignored. If
     * `false`, duplicate rows are merged with existing rows.
     *
     * @param options.count - Count algorithm to use to count upserted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */
  }, {
    key: "upsert",
    value: function upsert(values) {
      var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        onConflict = _ref4.onConflict,
        _ref4$ignoreDuplicate = _ref4.ignoreDuplicates,
        ignoreDuplicates = _ref4$ignoreDuplicate === void 0 ? false : _ref4$ignoreDuplicate,
        count = _ref4.count;
      var method = 'POST';
      var prefersHeaders = ["resolution=".concat(ignoreDuplicates ? 'ignore' : 'merge', "-duplicates")];
      if (onConflict !== undefined) this.url.searchParams.set('on_conflict', onConflict);
      var body = values;
      if (count) {
        prefersHeaders.push("count=".concat(count));
      }
      if (this.headers['Prefer']) {
        prefersHeaders.unshift(this.headers['Prefer']);
      }
      this.headers['Prefer'] = prefersHeaders.join(',');
      return new PostgrestFilterBuilder_1["default"]({
        method: method,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        body: body,
        fetch: this.fetch,
        allowEmpty: false
      });
    }
    /**
     * Perform an UPDATE on the table or view.
     *
     * By default, updated rows are not returned. To return it, chain the call
     * with `.select()` after filters.
     *
     * @param values - The values to update with
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count updated rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */
  }, {
    key: "update",
    value: function update(values) {
      var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        count = _ref5.count;
      var method = 'PATCH';
      var prefersHeaders = [];
      var body = values;
      if (count) {
        prefersHeaders.push("count=".concat(count));
      }
      if (this.headers['Prefer']) {
        prefersHeaders.unshift(this.headers['Prefer']);
      }
      this.headers['Prefer'] = prefersHeaders.join(',');
      return new PostgrestFilterBuilder_1["default"]({
        method: method,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        body: body,
        fetch: this.fetch,
        allowEmpty: false
      });
    }
    /**
     * Perform a DELETE on the table or view.
     *
     * By default, deleted rows are not returned. To return it, chain the call
     * with `.select()` after filters.
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count deleted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */
  }, {
    key: "delete",
    value: function _delete() {
      var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        count = _ref6.count;
      var method = 'DELETE';
      var prefersHeaders = [];
      if (count) {
        prefersHeaders.push("count=".concat(count));
      }
      if (this.headers['Prefer']) {
        prefersHeaders.unshift(this.headers['Prefer']);
      }
      this.headers['Prefer'] = prefersHeaders.join(',');
      return new PostgrestFilterBuilder_1["default"]({
        method: method,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        fetch: this.fetch,
        allowEmpty: false
      });
    }
  }]);
  return PostgrestQueryBuilder;
}();
exports["default"] = PostgrestQueryBuilder;

},{"./PostgrestFilterBuilder":20}],22:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var PostgrestBuilder_1 = __importDefault(require("./PostgrestBuilder"));
var PostgrestTransformBuilder = /*#__PURE__*/function (_PostgrestBuilder_1$d) {
  _inherits(PostgrestTransformBuilder, _PostgrestBuilder_1$d);
  var _super = _createSuper(PostgrestTransformBuilder);
  function PostgrestTransformBuilder() {
    _classCallCheck(this, PostgrestTransformBuilder);
    return _super.apply(this, arguments);
  }
  _createClass(PostgrestTransformBuilder, [{
    key: "select",
    value:
    /**
     * Perform a SELECT on the query result.
     *
     * By default, `.insert()`, `.update()`, `.upsert()`, and `.delete()` do not
     * return modified rows. By calling this method, modified rows are returned in
     * `data`.
     *
     * @param columns - The columns to retrieve, separated by commas
     */
    function select(columns) {
      // Remove whitespaces except when quoted
      var quoted = false;
      var cleanedColumns = (columns !== null && columns !== void 0 ? columns : '*').split('').map(function (c) {
        if (/\s/.test(c) && !quoted) {
          return '';
        }
        if (c === '"') {
          quoted = !quoted;
        }
        return c;
      }).join('');
      this.url.searchParams.set('select', cleanedColumns);
      if (this.headers['Prefer']) {
        this.headers['Prefer'] += ',';
      }
      this.headers['Prefer'] += 'return=representation';
      return this;
    }
    /**
     * Order the query result by `column`.
     *
     * You can call this method multiple times to order by multiple columns.
     *
     * You can order foreign tables, but it doesn't affect the ordering of the
     * current table.
     *
     * @param column - The column to order by
     * @param options - Named parameters
     * @param options.ascending - If `true`, the result will be in ascending order
     * @param options.nullsFirst - If `true`, `null`s appear first. If `false`,
     * `null`s appear last.
     * @param options.foreignTable - Set this to order a foreign table by foreign
     * columns
     */
  }, {
    key: "order",
    value: function order(column) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$ascending = _ref.ascending,
        ascending = _ref$ascending === void 0 ? true : _ref$ascending,
        nullsFirst = _ref.nullsFirst,
        foreignTable = _ref.foreignTable;
      var key = foreignTable ? "".concat(foreignTable, ".order") : 'order';
      var existingOrder = this.url.searchParams.get(key);
      this.url.searchParams.set(key, "".concat(existingOrder ? "".concat(existingOrder, ",") : '').concat(column, ".").concat(ascending ? 'asc' : 'desc').concat(nullsFirst === undefined ? '' : nullsFirst ? '.nullsfirst' : '.nullslast'));
      return this;
    }
    /**
     * Limit the query result by `count`.
     *
     * @param count - The maximum number of rows to return
     * @param options - Named parameters
     * @param options.foreignTable - Set this to limit rows of foreign tables
     * instead of the current table
     */
  }, {
    key: "limit",
    value: function limit(count) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        foreignTable = _ref2.foreignTable;
      var key = typeof foreignTable === 'undefined' ? 'limit' : "".concat(foreignTable, ".limit");
      this.url.searchParams.set(key, "".concat(count));
      return this;
    }
    /**
     * Limit the query result by `from` and `to` inclusively.
     *
     * @param from - The starting index from which to limit the result
     * @param to - The last index to which to limit the result
     * @param options - Named parameters
     * @param options.foreignTable - Set this to limit rows of foreign tables
     * instead of the current table
     */
  }, {
    key: "range",
    value: function range(from, to) {
      var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        foreignTable = _ref3.foreignTable;
      var keyOffset = typeof foreignTable === 'undefined' ? 'offset' : "".concat(foreignTable, ".offset");
      var keyLimit = typeof foreignTable === 'undefined' ? 'limit' : "".concat(foreignTable, ".limit");
      this.url.searchParams.set(keyOffset, "".concat(from));
      // Range is inclusive, so add 1
      this.url.searchParams.set(keyLimit, "".concat(to - from + 1));
      return this;
    }
    /**
     * Set the AbortSignal for the fetch request.
     *
     * @param signal - The AbortSignal to use for the fetch request
     */
  }, {
    key: "abortSignal",
    value: function abortSignal(signal) {
      this.signal = signal;
      return this;
    }
    /**
     * Return `data` as a single object instead of an array of objects.
     *
     * Query result must be one row (e.g. using `.limit(1)`), otherwise this
     * returns an error.
     */
  }, {
    key: "single",
    value: function single() {
      this.headers['Accept'] = 'application/vnd.pgrst.object+json';
      return this;
    }
    /**
     * Return `data` as a single object instead of an array of objects.
     *
     * Query result must be zero or one row (e.g. using `.limit(1)`), otherwise
     * this returns an error.
     */
  }, {
    key: "maybeSingle",
    value: function maybeSingle() {
      this.headers['Accept'] = 'application/vnd.pgrst.object+json';
      this.allowEmpty = true;
      return this;
    }
    /**
     * Return `data` as a string in CSV format.
     */
  }, {
    key: "csv",
    value: function csv() {
      this.headers['Accept'] = 'text/csv';
      return this;
    }
    /**
     * Return `data` as an object in [GeoJSON](https://geojson.org) format.
     */
  }, {
    key: "geojson",
    value: function geojson() {
      this.headers['Accept'] = 'application/geo+json';
      return this;
    }
    /**
     * Return `data` as the EXPLAIN plan for the query.
     *
     * @param options - Named parameters
     *
     * @param options.analyze - If `true`, the query will be executed and the
     * actual run time will be returned
     *
     * @param options.verbose - If `true`, the query identifier will be returned
     * and `data` will include the output columns of the query
     *
     * @param options.settings - If `true`, include information on configuration
     * parameters that affect query planning
     *
     * @param options.buffers - If `true`, include information on buffer usage
     *
     * @param options.wal - If `true`, include information on WAL record generation
     *
     * @param options.format - The format of the output, can be `"text"` (default)
     * or `"json"`
     */
  }, {
    key: "explain",
    value: function explain() {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref4$analyze = _ref4.analyze,
        analyze = _ref4$analyze === void 0 ? false : _ref4$analyze,
        _ref4$verbose = _ref4.verbose,
        verbose = _ref4$verbose === void 0 ? false : _ref4$verbose,
        _ref4$settings = _ref4.settings,
        settings = _ref4$settings === void 0 ? false : _ref4$settings,
        _ref4$buffers = _ref4.buffers,
        buffers = _ref4$buffers === void 0 ? false : _ref4$buffers,
        _ref4$wal = _ref4.wal,
        wal = _ref4$wal === void 0 ? false : _ref4$wal,
        _ref4$format = _ref4.format,
        format = _ref4$format === void 0 ? 'text' : _ref4$format;
      var options = [analyze ? 'analyze' : null, verbose ? 'verbose' : null, settings ? 'settings' : null, buffers ? 'buffers' : null, wal ? 'wal' : null].filter(Boolean).join('|');
      // An Accept header can carry multiple media types but postgrest-js always sends one
      var forMediatype = this.headers['Accept'];
      this.headers['Accept'] = "application/vnd.pgrst.plan+".concat(format, "; for=\"").concat(forMediatype, "\"; options=").concat(options, ";");
      if (format === 'json') return this;else return this;
    }
    /**
     * Rollback the query.
     *
     * `data` will still be returned, but the query is not committed.
     */
  }, {
    key: "rollback",
    value: function rollback() {
      var _a;
      if (((_a = this.headers['Prefer']) !== null && _a !== void 0 ? _a : '').trim().length > 0) {
        this.headers['Prefer'] += ',tx=rollback';
      } else {
        this.headers['Prefer'] = 'tx=rollback';
      }
      return this;
    }
    /**
     * Override the type of the returned `data`.
     *
     * @typeParam NewResult - The new result type to override with
     */
  }, {
    key: "returns",
    value: function returns() {
      return this;
    }
  }]);
  return PostgrestTransformBuilder;
}(PostgrestBuilder_1["default"]);
exports["default"] = PostgrestTransformBuilder;

},{"./PostgrestBuilder":18}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_HEADERS = void 0;
var version_1 = require("./version");
exports.DEFAULT_HEADERS = {
  'X-Client-Info': "postgrest-js/".concat(version_1.version)
};

},{"./version":25}],24:[function(require,module,exports){
"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostgrestBuilder = exports.PostgrestTransformBuilder = exports.PostgrestFilterBuilder = exports.PostgrestQueryBuilder = exports.PostgrestClient = void 0;
var PostgrestClient_1 = require("./PostgrestClient");
Object.defineProperty(exports, "PostgrestClient", {
  enumerable: true,
  get: function get() {
    return __importDefault(PostgrestClient_1)["default"];
  }
});
var PostgrestQueryBuilder_1 = require("./PostgrestQueryBuilder");
Object.defineProperty(exports, "PostgrestQueryBuilder", {
  enumerable: true,
  get: function get() {
    return __importDefault(PostgrestQueryBuilder_1)["default"];
  }
});
var PostgrestFilterBuilder_1 = require("./PostgrestFilterBuilder");
Object.defineProperty(exports, "PostgrestFilterBuilder", {
  enumerable: true,
  get: function get() {
    return __importDefault(PostgrestFilterBuilder_1)["default"];
  }
});
var PostgrestTransformBuilder_1 = require("./PostgrestTransformBuilder");
Object.defineProperty(exports, "PostgrestTransformBuilder", {
  enumerable: true,
  get: function get() {
    return __importDefault(PostgrestTransformBuilder_1)["default"];
  }
});
var PostgrestBuilder_1 = require("./PostgrestBuilder");
Object.defineProperty(exports, "PostgrestBuilder", {
  enumerable: true,
  get: function get() {
    return __importDefault(PostgrestBuilder_1)["default"];
  }
});

},{"./PostgrestBuilder":18,"./PostgrestClient":19,"./PostgrestFilterBuilder":20,"./PostgrestQueryBuilder":21,"./PostgrestTransformBuilder":22}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.version = void 0;
exports.version = '1.1.1';

},{}],26:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __createBinding = void 0 && (void 0).__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = void 0 && (void 0).__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REALTIME_SUBSCRIBE_STATES = exports.REALTIME_LISTEN_TYPES = exports.REALTIME_POSTGRES_CHANGES_LISTEN_EVENT = void 0;
var constants_1 = require("./lib/constants");
var push_1 = __importDefault(require("./lib/push"));
var timer_1 = __importDefault(require("./lib/timer"));
var RealtimePresence_1 = __importDefault(require("./RealtimePresence"));
var Transformers = __importStar(require("./lib/transformers"));
var REALTIME_POSTGRES_CHANGES_LISTEN_EVENT;
(function (REALTIME_POSTGRES_CHANGES_LISTEN_EVENT) {
  REALTIME_POSTGRES_CHANGES_LISTEN_EVENT["ALL"] = "*";
  REALTIME_POSTGRES_CHANGES_LISTEN_EVENT["INSERT"] = "INSERT";
  REALTIME_POSTGRES_CHANGES_LISTEN_EVENT["UPDATE"] = "UPDATE";
  REALTIME_POSTGRES_CHANGES_LISTEN_EVENT["DELETE"] = "DELETE";
})(REALTIME_POSTGRES_CHANGES_LISTEN_EVENT = exports.REALTIME_POSTGRES_CHANGES_LISTEN_EVENT || (exports.REALTIME_POSTGRES_CHANGES_LISTEN_EVENT = {}));
var REALTIME_LISTEN_TYPES;
(function (REALTIME_LISTEN_TYPES) {
  REALTIME_LISTEN_TYPES["BROADCAST"] = "broadcast";
  REALTIME_LISTEN_TYPES["PRESENCE"] = "presence";
  REALTIME_LISTEN_TYPES["POSTGRES_CHANGES"] = "postgres_changes";
})(REALTIME_LISTEN_TYPES = exports.REALTIME_LISTEN_TYPES || (exports.REALTIME_LISTEN_TYPES = {}));
var REALTIME_SUBSCRIBE_STATES;
(function (REALTIME_SUBSCRIBE_STATES) {
  REALTIME_SUBSCRIBE_STATES["SUBSCRIBED"] = "SUBSCRIBED";
  REALTIME_SUBSCRIBE_STATES["TIMED_OUT"] = "TIMED_OUT";
  REALTIME_SUBSCRIBE_STATES["CLOSED"] = "CLOSED";
  REALTIME_SUBSCRIBE_STATES["CHANNEL_ERROR"] = "CHANNEL_ERROR";
})(REALTIME_SUBSCRIBE_STATES = exports.REALTIME_SUBSCRIBE_STATES || (exports.REALTIME_SUBSCRIBE_STATES = {}));
/** A channel is the basic building block of Realtime
 * and narrows the scope of data flow to subscribed clients.
 * You can think of a channel as a chatroom where participants are able to see who's online
 * and send and receive messages.
 **/
var RealtimeChannel = /*#__PURE__*/function () {
  function RealtimeChannel( /** Topic name can be any string. */
  topic) {
    var _this = this;
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      config: {}
    };
    var socket = arguments.length > 2 ? arguments[2] : undefined;
    _classCallCheck(this, RealtimeChannel);
    this.topic = topic;
    this.params = params;
    this.socket = socket;
    this.bindings = {};
    this.state = constants_1.CHANNEL_STATES.closed;
    this.joinedOnce = false;
    this.pushBuffer = [];
    this.params.config = Object.assign({
      broadcast: {
        ack: false,
        self: false
      },
      presence: {
        key: ''
      }
    }, params.config);
    this.timeout = this.socket.timeout;
    this.joinPush = new push_1["default"](this, constants_1.CHANNEL_EVENTS.join, this.params, this.timeout);
    this.rejoinTimer = new timer_1["default"](function () {
      return _this._rejoinUntilConnected();
    }, this.socket.reconnectAfterMs);
    this.joinPush.receive('ok', function () {
      _this.state = constants_1.CHANNEL_STATES.joined;
      _this.rejoinTimer.reset();
      _this.pushBuffer.forEach(function (pushEvent) {
        return pushEvent.send();
      });
      _this.pushBuffer = [];
    });
    this._onClose(function () {
      _this.rejoinTimer.reset();
      _this.socket.log('channel', "close ".concat(_this.topic, " ").concat(_this._joinRef()));
      _this.state = constants_1.CHANNEL_STATES.closed;
      _this.socket._remove(_this);
    });
    this._onError(function (reason) {
      if (_this._isLeaving() || _this._isClosed()) {
        return;
      }
      _this.socket.log('channel', "error ".concat(_this.topic), reason);
      _this.state = constants_1.CHANNEL_STATES.errored;
      _this.rejoinTimer.scheduleTimeout();
    });
    this.joinPush.receive('timeout', function () {
      if (!_this._isJoining()) {
        return;
      }
      _this.socket.log('channel', "timeout ".concat(_this.topic), _this.joinPush.timeout);
      _this.state = constants_1.CHANNEL_STATES.errored;
      _this.rejoinTimer.scheduleTimeout();
    });
    this._on(constants_1.CHANNEL_EVENTS.reply, {}, function (payload, ref) {
      _this._trigger(_this._replyEventName(ref), payload);
    });
    this.presence = new RealtimePresence_1["default"](this);
  }
  /** Subscribe registers your client with the server */
  _createClass(RealtimeChannel, [{
    key: "subscribe",
    value: function subscribe(callback) {
      var _this2 = this;
      var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.timeout;
      var _a, _b;
      if (this.joinedOnce) {
        throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
      } else {
        var _this$params$config = this.params.config,
          broadcast = _this$params$config.broadcast,
          presence = _this$params$config.presence;
        this._onError(function (e) {
          return callback && callback('CHANNEL_ERROR', e);
        });
        this._onClose(function () {
          return callback && callback('CLOSED');
        });
        var accessTokenPayload = {};
        var config = {
          broadcast: broadcast,
          presence: presence,
          postgres_changes: (_b = (_a = this.bindings.postgres_changes) === null || _a === void 0 ? void 0 : _a.map(function (r) {
            return r.filter;
          })) !== null && _b !== void 0 ? _b : []
        };
        if (this.socket.accessToken) {
          accessTokenPayload.access_token = this.socket.accessToken;
        }
        this.updateJoinPayload(Object.assign({
          config: config
        }, accessTokenPayload));
        this.joinedOnce = true;
        this._rejoin(timeout);
        this.joinPush.receive('ok', function (_ref2) {
          var serverPostgresFilters = _ref2.postgres_changes;
          var _a;
          _this2.socket.accessToken && _this2.socket.setAuth(_this2.socket.accessToken);
          if (serverPostgresFilters === undefined) {
            callback && callback('SUBSCRIBED');
            return;
          } else {
            var clientPostgresBindings = _this2.bindings.postgres_changes;
            var bindingsLen = (_a = clientPostgresBindings === null || clientPostgresBindings === void 0 ? void 0 : clientPostgresBindings.length) !== null && _a !== void 0 ? _a : 0;
            var newPostgresBindings = [];
            for (var i = 0; i < bindingsLen; i++) {
              var clientPostgresBinding = clientPostgresBindings[i];
              var _clientPostgresBindin = clientPostgresBinding.filter,
                event = _clientPostgresBindin.event,
                schema = _clientPostgresBindin.schema,
                table = _clientPostgresBindin.table,
                filter = _clientPostgresBindin.filter;
              var serverPostgresFilter = serverPostgresFilters && serverPostgresFilters[i];
              if (serverPostgresFilter && serverPostgresFilter.event === event && serverPostgresFilter.schema === schema && serverPostgresFilter.table === table && serverPostgresFilter.filter === filter) {
                newPostgresBindings.push(Object.assign(Object.assign({}, clientPostgresBinding), {
                  id: serverPostgresFilter.id
                }));
              } else {
                _this2.unsubscribe();
                callback && callback('CHANNEL_ERROR', new Error('mismatch between server and client bindings for postgres changes'));
                return;
              }
            }
            _this2.bindings.postgres_changes = newPostgresBindings;
            callback && callback('SUBSCRIBED');
            return;
          }
        }).receive('error', function (error) {
          callback && callback('CHANNEL_ERROR', new Error(JSON.stringify(Object.values(error).join(', ') || 'error')));
          return;
        }).receive('timeout', function () {
          callback && callback('TIMED_OUT');
          return;
        });
      }
      return this;
    }
  }, {
    key: "presenceState",
    value: function presenceState() {
      return this.presence.state;
    }
  }, {
    key: "track",
    value: function track(payload) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.send({
                type: 'presence',
                event: 'track',
                payload: payload
              }, opts.timeout || this.timeout);
            case 2:
              return _context.abrupt("return", _context.sent);
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "untrack",
    value: function untrack() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.send({
                type: 'presence',
                event: 'untrack'
              }, opts);
            case 2:
              return _context2.abrupt("return", _context2.sent);
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "on",
    value: function on(type, filter, callback) {
      return this._on(type, filter, callback);
    }
  }, {
    key: "send",
    value: function send(payload) {
      var _this3 = this;
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new Promise(function (resolve) {
        var _a, _b, _c;
        var push = _this3._push(payload.type, payload, opts.timeout || _this3.timeout);
        if (push.rateLimited) {
          resolve('rate limited');
        }
        if (payload.type === 'broadcast' && !((_c = (_b = (_a = _this3.params) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.broadcast) === null || _c === void 0 ? void 0 : _c.ack)) {
          resolve('ok');
        }
        push.receive('ok', function () {
          return resolve('ok');
        });
        push.receive('timeout', function () {
          return resolve('timed out');
        });
      });
    }
  }, {
    key: "updateJoinPayload",
    value: function updateJoinPayload(payload) {
      this.joinPush.updatePayload(payload);
    }
    /**
     * Leaves the channel.
     *
     * Unsubscribes from server events, and instructs channel to terminate on server.
     * Triggers onClose() hooks.
     *
     * To receive leave acknowledgements, use the a `receive` hook to bind to the server ack, ie:
     * channel.unsubscribe().receive("ok", () => alert("left!") )
     */
  }, {
    key: "unsubscribe",
    value: function unsubscribe() {
      var _this4 = this;
      var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.timeout;
      this.state = constants_1.CHANNEL_STATES.leaving;
      var onClose = function onClose() {
        _this4.socket.log('channel', "leave ".concat(_this4.topic));
        _this4._trigger(constants_1.CHANNEL_EVENTS.close, 'leave', _this4._joinRef());
      };
      this.rejoinTimer.reset();
      // Destroy joinPush to avoid connection timeouts during unscription phase
      this.joinPush.destroy();
      return new Promise(function (resolve) {
        var leavePush = new push_1["default"](_this4, constants_1.CHANNEL_EVENTS.leave, {}, timeout);
        leavePush.receive('ok', function () {
          onClose();
          resolve('ok');
        }).receive('timeout', function () {
          onClose();
          resolve('timed out');
        }).receive('error', function () {
          resolve('error');
        });
        leavePush.send();
        if (!_this4._canPush()) {
          leavePush.trigger('ok', {});
        }
      });
    }
    /** @internal */
  }, {
    key: "_push",
    value: function _push(event, payload) {
      var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.timeout;
      if (!this.joinedOnce) {
        throw "tried to push '".concat(event, "' to '").concat(this.topic, "' before joining. Use channel.subscribe() before pushing events");
      }
      var pushEvent = new push_1["default"](this, event, payload, timeout);
      if (this._canPush()) {
        pushEvent.send();
      } else {
        pushEvent.startTimeout();
        this.pushBuffer.push(pushEvent);
      }
      return pushEvent;
    }
    /**
     * Overridable message hook
     *
     * Receives all events for specialized message handling before dispatching to the channel callbacks.
     * Must return the payload, modified or unmodified.
     *
     * @internal
     */
  }, {
    key: "_onMessage",
    value: function _onMessage(_event, payload, _ref) {
      return payload;
    }
    /** @internal */
  }, {
    key: "_isMember",
    value: function _isMember(topic) {
      return this.topic === topic;
    }
    /** @internal */
  }, {
    key: "_joinRef",
    value: function _joinRef() {
      return this.joinPush.ref;
    }
    /** @internal */
  }, {
    key: "_trigger",
    value: function _trigger(type, payload, ref) {
      var _this5 = this;
      var _a, _b;
      var typeLower = type.toLocaleLowerCase();
      var _constants_1$CHANNEL_ = constants_1.CHANNEL_EVENTS,
        close = _constants_1$CHANNEL_.close,
        error = _constants_1$CHANNEL_.error,
        leave = _constants_1$CHANNEL_.leave,
        join = _constants_1$CHANNEL_.join;
      var events = [close, error, leave, join];
      if (ref && events.indexOf(typeLower) >= 0 && ref !== this._joinRef()) {
        return;
      }
      var handledPayload = this._onMessage(typeLower, payload, ref);
      if (payload && !handledPayload) {
        throw 'channel onMessage callbacks must return the payload, modified or unmodified';
      }
      if (['insert', 'update', 'delete'].includes(typeLower)) {
        (_a = this.bindings.postgres_changes) === null || _a === void 0 ? void 0 : _a.filter(function (bind) {
          var _a, _b, _c;
          return ((_a = bind.filter) === null || _a === void 0 ? void 0 : _a.event) === '*' || ((_c = (_b = bind.filter) === null || _b === void 0 ? void 0 : _b.event) === null || _c === void 0 ? void 0 : _c.toLocaleLowerCase()) === typeLower;
        }).map(function (bind) {
          return bind.callback(handledPayload, ref);
        });
      } else {
        (_b = this.bindings[typeLower]) === null || _b === void 0 ? void 0 : _b.filter(function (bind) {
          var _a, _b, _c, _d, _e, _f;
          if (['broadcast', 'presence', 'postgres_changes'].includes(typeLower)) {
            if ('id' in bind) {
              var bindId = bind.id;
              var bindEvent = (_a = bind.filter) === null || _a === void 0 ? void 0 : _a.event;
              return bindId && ((_b = payload.ids) === null || _b === void 0 ? void 0 : _b.includes(bindId)) && (bindEvent === '*' || (bindEvent === null || bindEvent === void 0 ? void 0 : bindEvent.toLocaleLowerCase()) === ((_c = payload.data) === null || _c === void 0 ? void 0 : _c.type.toLocaleLowerCase()));
            } else {
              var _bindEvent = (_e = (_d = bind === null || bind === void 0 ? void 0 : bind.filter) === null || _d === void 0 ? void 0 : _d.event) === null || _e === void 0 ? void 0 : _e.toLocaleLowerCase();
              return _bindEvent === '*' || _bindEvent === ((_f = payload === null || payload === void 0 ? void 0 : payload.event) === null || _f === void 0 ? void 0 : _f.toLocaleLowerCase());
            }
          } else {
            return bind.type.toLocaleLowerCase() === typeLower;
          }
        }).map(function (bind) {
          if (_typeof(handledPayload) === 'object' && 'ids' in handledPayload) {
            var postgresChanges = handledPayload.data;
            var schema = postgresChanges.schema,
              table = postgresChanges.table,
              commit_timestamp = postgresChanges.commit_timestamp,
              _type = postgresChanges.type,
              errors = postgresChanges.errors;
            var enrichedPayload = {
              schema: schema,
              table: table,
              commit_timestamp: commit_timestamp,
              eventType: _type,
              "new": {},
              old: {},
              errors: errors
            };
            handledPayload = Object.assign(Object.assign({}, enrichedPayload), _this5._getPayloadRecords(postgresChanges));
          }
          bind.callback(handledPayload, ref);
        });
      }
    }
    /** @internal */
  }, {
    key: "_isClosed",
    value: function _isClosed() {
      return this.state === constants_1.CHANNEL_STATES.closed;
    }
    /** @internal */
  }, {
    key: "_isJoined",
    value: function _isJoined() {
      return this.state === constants_1.CHANNEL_STATES.joined;
    }
    /** @internal */
  }, {
    key: "_isJoining",
    value: function _isJoining() {
      return this.state === constants_1.CHANNEL_STATES.joining;
    }
    /** @internal */
  }, {
    key: "_isLeaving",
    value: function _isLeaving() {
      return this.state === constants_1.CHANNEL_STATES.leaving;
    }
    /** @internal */
  }, {
    key: "_replyEventName",
    value: function _replyEventName(ref) {
      return "chan_reply_".concat(ref);
    }
    /** @internal */
  }, {
    key: "_on",
    value: function _on(type, filter, callback) {
      var typeLower = type.toLocaleLowerCase();
      var binding = {
        type: typeLower,
        filter: filter,
        callback: callback
      };
      if (this.bindings[typeLower]) {
        this.bindings[typeLower].push(binding);
      } else {
        this.bindings[typeLower] = [binding];
      }
      return this;
    }
    /** @internal */
  }, {
    key: "_off",
    value: function _off(type, filter) {
      var typeLower = type.toLocaleLowerCase();
      this.bindings[typeLower] = this.bindings[typeLower].filter(function (bind) {
        var _a;
        return !(((_a = bind.type) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase()) === typeLower && RealtimeChannel.isEqual(bind.filter, filter));
      });
      return this;
    }
    /** @internal */
  }, {
    key: "_rejoinUntilConnected",
    value: /** @internal */
    function _rejoinUntilConnected() {
      this.rejoinTimer.scheduleTimeout();
      if (this.socket.isConnected()) {
        this._rejoin();
      }
    }
    /**
     * Registers a callback that will be executed when the channel closes.
     *
     * @internal
     */
  }, {
    key: "_onClose",
    value: function _onClose(callback) {
      this._on(constants_1.CHANNEL_EVENTS.close, {}, callback);
    }
    /**
     * Registers a callback that will be executed when the channel encounteres an error.
     *
     * @internal
     */
  }, {
    key: "_onError",
    value: function _onError(callback) {
      this._on(constants_1.CHANNEL_EVENTS.error, {}, function (reason) {
        return callback(reason);
      });
    }
    /**
     * Returns `true` if the socket is connected and the channel has been joined.
     *
     * @internal
     */
  }, {
    key: "_canPush",
    value: function _canPush() {
      return this.socket.isConnected() && this._isJoined();
    }
    /** @internal */
  }, {
    key: "_rejoin",
    value: function _rejoin() {
      var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.timeout;
      if (this._isLeaving()) {
        return;
      }
      this.socket._leaveOpenTopic(this.topic);
      this.state = constants_1.CHANNEL_STATES.joining;
      this.joinPush.resend(timeout);
    }
    /** @internal */
  }, {
    key: "_getPayloadRecords",
    value: function _getPayloadRecords(payload) {
      var records = {
        "new": {},
        old: {}
      };
      if (payload.type === 'INSERT' || payload.type === 'UPDATE') {
        records["new"] = Transformers.convertChangeData(payload.columns, payload.record);
      }
      if (payload.type === 'UPDATE' || payload.type === 'DELETE') {
        records.old = Transformers.convertChangeData(payload.columns, payload.old_record);
      }
      return records;
    }
  }], [{
    key: "isEqual",
    value: function isEqual(obj1, obj2) {
      if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
      }
      for (var k in obj1) {
        if (obj1[k] !== obj2[k]) {
          return false;
        }
      }
      return true;
    }
  }]);
  return RealtimeChannel;
}();
exports["default"] = RealtimeChannel;

},{"./RealtimePresence":28,"./lib/constants":30,"./lib/push":31,"./lib/timer":33,"./lib/transformers":34}],27:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var websocket_1 = require("websocket");
var constants_1 = require("./lib/constants");
var timer_1 = __importDefault(require("./lib/timer"));
var serializer_1 = __importDefault(require("./lib/serializer"));
var RealtimeChannel_1 = __importDefault(require("./RealtimeChannel"));
var noop = function noop() {};
var RealtimeClient = /*#__PURE__*/function () {
  /**
   * Initializes the Socket.
   *
   * @param endPoint The string WebSocket endpoint, ie, "ws://example.com/socket", "wss://example.com", "/socket" (inherited host & protocol)
   * @param options.transport The Websocket Transport, for example WebSocket.
   * @param options.timeout The default timeout in milliseconds to trigger push timeouts.
   * @param options.params The optional params to pass when connecting.
   * @param options.headers The optional headers to pass when connecting.
   * @param options.heartbeatIntervalMs The millisec interval to send a heartbeat message.
   * @param options.logger The optional function for specialized logging, ie: logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }
   * @param options.encode The function to encode outgoing messages. Defaults to JSON: (payload, callback) => callback(JSON.stringify(payload))
   * @param options.decode The function to decode incoming messages. Defaults to Serializer's decode.
   * @param options.reconnectAfterMs he optional function that returns the millsec reconnect interval. Defaults to stepped backoff off.
   */
  function RealtimeClient(endPoint, options) {
    var _this = this;
    _classCallCheck(this, RealtimeClient);
    var _a;
    this.accessToken = null;
    this.channels = [];
    this.endPoint = '';
    this.headers = constants_1.DEFAULT_HEADERS;
    this.params = {};
    this.timeout = constants_1.DEFAULT_TIMEOUT;
    this.transport = websocket_1.w3cwebsocket;
    this.heartbeatIntervalMs = 30000;
    this.heartbeatTimer = undefined;
    this.pendingHeartbeatRef = null;
    this.ref = 0;
    this.logger = noop;
    this.conn = null;
    this.sendBuffer = [];
    this.serializer = new serializer_1["default"]();
    this.stateChangeCallbacks = {
      open: [],
      close: [],
      error: [],
      message: []
    };
    this.eventsPerSecondLimitMs = 100;
    this.inThrottle = false;
    this.endPoint = "".concat(endPoint, "/").concat(constants_1.TRANSPORTS.websocket);
    if (options === null || options === void 0 ? void 0 : options.params) this.params = options.params;
    if (options === null || options === void 0 ? void 0 : options.headers) this.headers = Object.assign(Object.assign({}, this.headers), options.headers);
    if (options === null || options === void 0 ? void 0 : options.timeout) this.timeout = options.timeout;
    if (options === null || options === void 0 ? void 0 : options.logger) this.logger = options.logger;
    if (options === null || options === void 0 ? void 0 : options.transport) this.transport = options.transport;
    if (options === null || options === void 0 ? void 0 : options.heartbeatIntervalMs) this.heartbeatIntervalMs = options.heartbeatIntervalMs;
    var eventsPerSecond = (_a = options === null || options === void 0 ? void 0 : options.params) === null || _a === void 0 ? void 0 : _a.eventsPerSecond;
    if (eventsPerSecond) this.eventsPerSecondLimitMs = Math.floor(1000 / eventsPerSecond);
    this.reconnectAfterMs = (options === null || options === void 0 ? void 0 : options.reconnectAfterMs) ? options.reconnectAfterMs : function (tries) {
      return [1000, 2000, 5000, 10000][tries - 1] || 10000;
    };
    this.encode = (options === null || options === void 0 ? void 0 : options.encode) ? options.encode : function (payload, callback) {
      return callback(JSON.stringify(payload));
    };
    this.decode = (options === null || options === void 0 ? void 0 : options.decode) ? options.decode : this.serializer.decode.bind(this.serializer);
    this.reconnectTimer = new timer_1["default"](function () {
      return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this.disconnect();
              this.connect();
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }, this.reconnectAfterMs);
  }
  /**
   * Connects the socket, unless already connected.
   */
  _createClass(RealtimeClient, [{
    key: "connect",
    value: function connect() {
      var _this2 = this;
      if (this.conn) {
        return;
      }
      this.conn = new this.transport(this._endPointURL(), [], null, this.headers);
      if (this.conn) {
        this.conn.binaryType = 'arraybuffer';
        this.conn.onopen = function () {
          return _this2._onConnOpen();
        };
        this.conn.onerror = function (error) {
          return _this2._onConnError(error);
        };
        this.conn.onmessage = function (event) {
          return _this2._onConnMessage(event);
        };
        this.conn.onclose = function (event) {
          return _this2._onConnClose(event);
        };
      }
    }
    /**
     * Disconnects the socket.
     *
     * @param code A numeric status code to send on disconnect.
     * @param reason A custom reason for the disconnect.
     */
  }, {
    key: "disconnect",
    value: function disconnect(code, reason) {
      if (this.conn) {
        this.conn.onclose = function () {}; // noop
        if (code) {
          this.conn.close(code, reason !== null && reason !== void 0 ? reason : '');
        } else {
          this.conn.close();
        }
        this.conn = null;
        // remove open handles
        this.heartbeatTimer && clearInterval(this.heartbeatTimer);
        this.reconnectTimer.reset();
      }
    }
  }, {
    key: "getChannels",
    value: function getChannels() {
      return this.channels;
    }
  }, {
    key: "removeChannel",
    value: function removeChannel(channel) {
      var _this3 = this;
      return channel.unsubscribe().then(function (status) {
        if (_this3.channels.length === 0) {
          _this3.disconnect();
        }
        return status;
      });
    }
  }, {
    key: "removeAllChannels",
    value: function removeAllChannels() {
      var _this4 = this;
      return Promise.all(this.channels.map(function (channel) {
        return channel.unsubscribe();
      })).then(function (values) {
        _this4.disconnect();
        return values;
      });
    }
    /**
     * Logs the message.
     *
     * For customized logging, `this.logger` can be overriden.
     */
  }, {
    key: "log",
    value: function log(kind, msg, data) {
      this.logger(kind, msg, data);
    }
    /**
     * Returns the current state of the socket.
     */
  }, {
    key: "connectionState",
    value: function connectionState() {
      switch (this.conn && this.conn.readyState) {
        case constants_1.SOCKET_STATES.connecting:
          return constants_1.CONNECTION_STATE.Connecting;
        case constants_1.SOCKET_STATES.open:
          return constants_1.CONNECTION_STATE.Open;
        case constants_1.SOCKET_STATES.closing:
          return constants_1.CONNECTION_STATE.Closing;
        default:
          return constants_1.CONNECTION_STATE.Closed;
      }
    }
    /**
     * Retuns `true` is the connection is open.
     */
  }, {
    key: "isConnected",
    value: function isConnected() {
      return this.connectionState() === constants_1.CONNECTION_STATE.Open;
    }
  }, {
    key: "channel",
    value: function channel(topic) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        config: {}
      };
      if (!this.isConnected()) {
        this.connect();
      }
      var chan = new RealtimeChannel_1["default"]("realtime:".concat(topic), params, this);
      this.channels.push(chan);
      return chan;
    }
    /**
     * Push out a message if the socket is connected.
     *
     * If the socket is not connected, the message gets enqueued within a local buffer, and sent out when a connection is next established.
     */
  }, {
    key: "push",
    value: function push(data) {
      var _this5 = this;
      var topic = data.topic,
        event = data.event,
        payload = data.payload,
        ref = data.ref;
      var callback = function callback() {
        _this5.encode(data, function (result) {
          var _a;
          (_a = _this5.conn) === null || _a === void 0 ? void 0 : _a.send(result);
        });
      };
      this.log('push', "".concat(topic, " ").concat(event, " (").concat(ref, ")"), payload);
      if (this.isConnected()) {
        if (['broadcast', 'presence', 'postgres_changes'].includes(event)) {
          var isThrottled = this._throttle(callback)();
          if (isThrottled) {
            return 'rate limited';
          }
        } else {
          callback();
        }
      } else {
        this.sendBuffer.push(callback);
      }
    }
    /**
     * Sets the JWT access token used for channel subscription authorization and Realtime RLS.
     *
     * @param token A JWT string.
     */
  }, {
    key: "setAuth",
    value: function setAuth(token) {
      this.accessToken = token;
      this.channels.forEach(function (channel) {
        token && channel.updateJoinPayload({
          access_token: token
        });
        if (channel.joinedOnce && channel._isJoined()) {
          channel._push(constants_1.CHANNEL_EVENTS.access_token, {
            access_token: token
          });
        }
      });
    }
    /**
     * Return the next message ref, accounting for overflows
     *
     * @internal
     */
  }, {
    key: "_makeRef",
    value: function _makeRef() {
      var newRef = this.ref + 1;
      if (newRef === this.ref) {
        this.ref = 0;
      } else {
        this.ref = newRef;
      }
      return this.ref.toString();
    }
    /**
     * Unsubscribe from channels with the specified topic.
     *
     * @internal
     */
  }, {
    key: "_leaveOpenTopic",
    value: function _leaveOpenTopic(topic) {
      var dupChannel = this.channels.find(function (c) {
        return c.topic === topic && (c._isJoined() || c._isJoining());
      });
      if (dupChannel) {
        this.log('transport', "leaving duplicate topic \"".concat(topic, "\""));
        dupChannel.unsubscribe();
      }
    }
    /**
     * Removes a subscription from the socket.
     *
     * @param channel An open subscription.
     *
     * @internal
     */
  }, {
    key: "_remove",
    value: function _remove(channel) {
      this.channels = this.channels.filter(function (c) {
        return c._joinRef() !== channel._joinRef();
      });
    }
    /**
     * Returns the URL of the websocket.
     *
     * @internal
     */
  }, {
    key: "_endPointURL",
    value: function _endPointURL() {
      return this._appendParams(this.endPoint, Object.assign({}, this.params, {
        vsn: constants_1.VSN
      }));
    }
    /** @internal */
  }, {
    key: "_onConnMessage",
    value: function _onConnMessage(rawMessage) {
      var _this6 = this;
      this.decode(rawMessage.data, function (msg) {
        var topic = msg.topic,
          event = msg.event,
          payload = msg.payload,
          ref = msg.ref;
        if (ref && ref === _this6.pendingHeartbeatRef || event === (payload === null || payload === void 0 ? void 0 : payload.type)) {
          _this6.pendingHeartbeatRef = null;
        }
        _this6.log('receive', "".concat(payload.status || '', " ").concat(topic, " ").concat(event, " ").concat(ref && '(' + ref + ')' || ''), payload);
        _this6.channels.filter(function (channel) {
          return channel._isMember(topic);
        }).forEach(function (channel) {
          return channel._trigger(event, payload, ref);
        });
        _this6.stateChangeCallbacks.message.forEach(function (callback) {
          return callback(msg);
        });
      });
    }
    /** @internal */
  }, {
    key: "_onConnOpen",
    value: function _onConnOpen() {
      var _this7 = this;
      this.log('transport', "connected to ".concat(this._endPointURL()));
      this._flushSendBuffer();
      this.reconnectTimer.reset();
      this.heartbeatTimer && clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = setInterval(function () {
        return _this7._sendHeartbeat();
      }, this.heartbeatIntervalMs);
      this.stateChangeCallbacks.open.forEach(function (callback) {
        return callback();
      });
    }
    /** @internal */
  }, {
    key: "_onConnClose",
    value: function _onConnClose(event) {
      this.log('transport', 'close', event);
      this._triggerChanError();
      this.heartbeatTimer && clearInterval(this.heartbeatTimer);
      this.reconnectTimer.scheduleTimeout();
      this.stateChangeCallbacks.close.forEach(function (callback) {
        return callback(event);
      });
    }
    /** @internal */
  }, {
    key: "_onConnError",
    value: function _onConnError(error) {
      this.log('transport', error.message);
      this._triggerChanError();
      this.stateChangeCallbacks.error.forEach(function (callback) {
        return callback(error);
      });
    }
    /** @internal */
  }, {
    key: "_triggerChanError",
    value: function _triggerChanError() {
      this.channels.forEach(function (channel) {
        return channel._trigger(constants_1.CHANNEL_EVENTS.error);
      });
    }
    /** @internal */
  }, {
    key: "_appendParams",
    value: function _appendParams(url, params) {
      if (Object.keys(params).length === 0) {
        return url;
      }
      var prefix = url.match(/\?/) ? '&' : '?';
      var query = new URLSearchParams(params);
      return "".concat(url).concat(prefix).concat(query);
    }
    /** @internal */
  }, {
    key: "_flushSendBuffer",
    value: function _flushSendBuffer() {
      if (this.isConnected() && this.sendBuffer.length > 0) {
        this.sendBuffer.forEach(function (callback) {
          return callback();
        });
        this.sendBuffer = [];
      }
    }
    /** @internal */
  }, {
    key: "_sendHeartbeat",
    value: function _sendHeartbeat() {
      var _a;
      if (!this.isConnected()) {
        return;
      }
      if (this.pendingHeartbeatRef) {
        this.pendingHeartbeatRef = null;
        this.log('transport', 'heartbeat timeout. Attempting to re-establish connection');
        (_a = this.conn) === null || _a === void 0 ? void 0 : _a.close(constants_1.WS_CLOSE_NORMAL, 'hearbeat timeout');
        return;
      }
      this.pendingHeartbeatRef = this._makeRef();
      this.push({
        topic: 'phoenix',
        event: 'heartbeat',
        payload: {},
        ref: this.pendingHeartbeatRef
      });
      this.setAuth(this.accessToken);
    }
    /** @internal */
  }, {
    key: "_throttle",
    value: function _throttle(callback) {
      var _this8 = this;
      var eventsPerSecondLimit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.eventsPerSecondLimitMs;
      return function () {
        if (_this8.inThrottle) return true;
        callback();
        _this8.inThrottle = true;
        setTimeout(function () {
          _this8.inThrottle = false;
        }, eventsPerSecondLimit);
        return false;
      };
    }
  }]);
  return RealtimeClient;
}();
exports["default"] = RealtimeClient;

},{"./RealtimeChannel":26,"./lib/constants":30,"./lib/serializer":32,"./lib/timer":33,"websocket":88}],28:[function(require,module,exports){
"use strict";

/*
  This file draws heavily from https://github.com/phoenixframework/phoenix/blob/d344ec0a732ab4ee204215b31de69cf4be72e3bf/assets/js/phoenix/presence.js
  License: https://github.com/phoenixframework/phoenix/blob/d344ec0a732ab4ee204215b31de69cf4be72e3bf/LICENSE.md
*/
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REALTIME_PRESENCE_LISTEN_EVENTS = void 0;
var REALTIME_PRESENCE_LISTEN_EVENTS;
(function (REALTIME_PRESENCE_LISTEN_EVENTS) {
  REALTIME_PRESENCE_LISTEN_EVENTS["SYNC"] = "sync";
  REALTIME_PRESENCE_LISTEN_EVENTS["JOIN"] = "join";
  REALTIME_PRESENCE_LISTEN_EVENTS["LEAVE"] = "leave";
})(REALTIME_PRESENCE_LISTEN_EVENTS = exports.REALTIME_PRESENCE_LISTEN_EVENTS || (exports.REALTIME_PRESENCE_LISTEN_EVENTS = {}));
var RealtimePresence = /*#__PURE__*/function () {
  /**
   * Initializes the Presence.
   *
   * @param channel - The RealtimeChannel
   * @param opts - The options,
   *        for example `{events: {state: 'state', diff: 'diff'}}`
   */
  function RealtimePresence(channel, opts) {
    var _this = this;
    _classCallCheck(this, RealtimePresence);
    this.channel = channel;
    this.state = {};
    this.pendingDiffs = [];
    this.joinRef = null;
    this.caller = {
      onJoin: function onJoin() {},
      onLeave: function onLeave() {},
      onSync: function onSync() {}
    };
    var events = (opts === null || opts === void 0 ? void 0 : opts.events) || {
      state: 'presence_state',
      diff: 'presence_diff'
    };
    this.channel._on(events.state, {}, function (newState) {
      var _this$caller = _this.caller,
        onJoin = _this$caller.onJoin,
        onLeave = _this$caller.onLeave,
        onSync = _this$caller.onSync;
      _this.joinRef = _this.channel._joinRef();
      _this.state = RealtimePresence.syncState(_this.state, newState, onJoin, onLeave);
      _this.pendingDiffs.forEach(function (diff) {
        _this.state = RealtimePresence.syncDiff(_this.state, diff, onJoin, onLeave);
      });
      _this.pendingDiffs = [];
      onSync();
    });
    this.channel._on(events.diff, {}, function (diff) {
      var _this$caller2 = _this.caller,
        onJoin = _this$caller2.onJoin,
        onLeave = _this$caller2.onLeave,
        onSync = _this$caller2.onSync;
      if (_this.inPendingSyncState()) {
        _this.pendingDiffs.push(diff);
      } else {
        _this.state = RealtimePresence.syncDiff(_this.state, diff, onJoin, onLeave);
        onSync();
      }
    });
    this.onJoin(function (key, currentPresences, newPresences) {
      _this.channel._trigger('presence', {
        event: 'join',
        key: key,
        currentPresences: currentPresences,
        newPresences: newPresences
      });
    });
    this.onLeave(function (key, currentPresences, leftPresences) {
      _this.channel._trigger('presence', {
        event: 'leave',
        key: key,
        currentPresences: currentPresences,
        leftPresences: leftPresences
      });
    });
    this.onSync(function () {
      _this.channel._trigger('presence', {
        event: 'sync'
      });
    });
  }
  /**
   * Used to sync the list of presences on the server with the
   * client's state.
   *
   * An optional `onJoin` and `onLeave` callback can be provided to
   * react to changes in the client's local presences across
   * disconnects and reconnects with the server.
   *
   * @internal
   */
  _createClass(RealtimePresence, [{
    key: "onJoin",
    value: /** @internal */
    function onJoin(callback) {
      this.caller.onJoin = callback;
    }
    /** @internal */
  }, {
    key: "onLeave",
    value: function onLeave(callback) {
      this.caller.onLeave = callback;
    }
    /** @internal */
  }, {
    key: "onSync",
    value: function onSync(callback) {
      this.caller.onSync = callback;
    }
    /** @internal */
  }, {
    key: "inPendingSyncState",
    value: function inPendingSyncState() {
      return !this.joinRef || this.joinRef !== this.channel._joinRef();
    }
  }], [{
    key: "syncState",
    value: function syncState(currentState, newState, onJoin, onLeave) {
      var state = this.cloneDeep(currentState);
      var transformedState = this.transformState(newState);
      var joins = {};
      var leaves = {};
      this.map(state, function (key, presences) {
        if (!transformedState[key]) {
          leaves[key] = presences;
        }
      });
      this.map(transformedState, function (key, newPresences) {
        var currentPresences = state[key];
        if (currentPresences) {
          var newPresenceRefs = newPresences.map(function (m) {
            return m.presence_ref;
          });
          var curPresenceRefs = currentPresences.map(function (m) {
            return m.presence_ref;
          });
          var joinedPresences = newPresences.filter(function (m) {
            return curPresenceRefs.indexOf(m.presence_ref) < 0;
          });
          var leftPresences = currentPresences.filter(function (m) {
            return newPresenceRefs.indexOf(m.presence_ref) < 0;
          });
          if (joinedPresences.length > 0) {
            joins[key] = joinedPresences;
          }
          if (leftPresences.length > 0) {
            leaves[key] = leftPresences;
          }
        } else {
          joins[key] = newPresences;
        }
      });
      return this.syncDiff(state, {
        joins: joins,
        leaves: leaves
      }, onJoin, onLeave);
    }
    /**
     * Used to sync a diff of presence join and leave events from the
     * server, as they happen.
     *
     * Like `syncState`, `syncDiff` accepts optional `onJoin` and
     * `onLeave` callbacks to react to a user joining or leaving from a
     * device.
     *
     * @internal
     */
  }, {
    key: "syncDiff",
    value: function syncDiff(state, diff, onJoin, onLeave) {
      var _this2 = this;
      var _joins$leaves = {
          joins: this.transformState(diff.joins),
          leaves: this.transformState(diff.leaves)
        },
        joins = _joins$leaves.joins,
        leaves = _joins$leaves.leaves;
      if (!onJoin) {
        onJoin = function onJoin() {};
      }
      if (!onLeave) {
        onLeave = function onLeave() {};
      }
      this.map(joins, function (key, newPresences) {
        var _a;
        var currentPresences = (_a = state[key]) !== null && _a !== void 0 ? _a : [];
        state[key] = _this2.cloneDeep(newPresences);
        if (currentPresences.length > 0) {
          var _state$key;
          var joinedPresenceRefs = state[key].map(function (m) {
            return m.presence_ref;
          });
          var curPresences = currentPresences.filter(function (m) {
            return joinedPresenceRefs.indexOf(m.presence_ref) < 0;
          });
          (_state$key = state[key]).unshift.apply(_state$key, _toConsumableArray(curPresences));
        }
        onJoin(key, currentPresences, newPresences);
      });
      this.map(leaves, function (key, leftPresences) {
        var currentPresences = state[key];
        if (!currentPresences) return;
        var presenceRefsToRemove = leftPresences.map(function (m) {
          return m.presence_ref;
        });
        currentPresences = currentPresences.filter(function (m) {
          return presenceRefsToRemove.indexOf(m.presence_ref) < 0;
        });
        state[key] = currentPresences;
        onLeave(key, currentPresences, leftPresences);
        if (currentPresences.length === 0) delete state[key];
      });
      return state;
    }
    /** @internal */
  }, {
    key: "map",
    value: function map(obj, func) {
      return Object.getOwnPropertyNames(obj).map(function (key) {
        return func(key, obj[key]);
      });
    }
    /**
     * Remove 'metas' key
     * Change 'phx_ref' to 'presence_ref'
     * Remove 'phx_ref' and 'phx_ref_prev'
     *
     * @example
     * // returns {
     *  abc123: [
     *    { presence_ref: '2', user_id: 1 },
     *    { presence_ref: '3', user_id: 2 }
     *  ]
     * }
     * RealtimePresence.transformState({
     *  abc123: {
     *    metas: [
     *      { phx_ref: '2', phx_ref_prev: '1' user_id: 1 },
     *      { phx_ref: '3', user_id: 2 }
     *    ]
     *  }
     * })
     *
     * @internal
     */
  }, {
    key: "transformState",
    value: function transformState(state) {
      state = this.cloneDeep(state);
      return Object.getOwnPropertyNames(state).reduce(function (newState, key) {
        var presences = state[key];
        if ('metas' in presences) {
          newState[key] = presences.metas.map(function (presence) {
            presence['presence_ref'] = presence['phx_ref'];
            delete presence['phx_ref'];
            delete presence['phx_ref_prev'];
            return presence;
          });
        } else {
          newState[key] = presences;
        }
        return newState;
      }, {});
    }
    /** @internal */
  }, {
    key: "cloneDeep",
    value: function cloneDeep(obj) {
      return JSON.parse(JSON.stringify(obj));
    }
  }]);
  return RealtimePresence;
}();
exports["default"] = RealtimePresence;

},{}],29:[function(require,module,exports){
"use strict";

var __createBinding = void 0 && (void 0).__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = void 0 && (void 0).__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REALTIME_SUBSCRIBE_STATES = exports.REALTIME_PRESENCE_LISTEN_EVENTS = exports.REALTIME_POSTGRES_CHANGES_LISTEN_EVENT = exports.REALTIME_LISTEN_TYPES = exports.RealtimeClient = exports.RealtimeChannel = exports.RealtimePresence = void 0;
var RealtimeClient_1 = __importDefault(require("./RealtimeClient"));
exports.RealtimeClient = RealtimeClient_1["default"];
var RealtimeChannel_1 = __importStar(require("./RealtimeChannel"));
exports.RealtimeChannel = RealtimeChannel_1["default"];
Object.defineProperty(exports, "REALTIME_LISTEN_TYPES", {
  enumerable: true,
  get: function get() {
    return RealtimeChannel_1.REALTIME_LISTEN_TYPES;
  }
});
Object.defineProperty(exports, "REALTIME_POSTGRES_CHANGES_LISTEN_EVENT", {
  enumerable: true,
  get: function get() {
    return RealtimeChannel_1.REALTIME_POSTGRES_CHANGES_LISTEN_EVENT;
  }
});
Object.defineProperty(exports, "REALTIME_SUBSCRIBE_STATES", {
  enumerable: true,
  get: function get() {
    return RealtimeChannel_1.REALTIME_SUBSCRIBE_STATES;
  }
});
var RealtimePresence_1 = __importStar(require("./RealtimePresence"));
exports.RealtimePresence = RealtimePresence_1["default"];
Object.defineProperty(exports, "REALTIME_PRESENCE_LISTEN_EVENTS", {
  enumerable: true,
  get: function get() {
    return RealtimePresence_1.REALTIME_PRESENCE_LISTEN_EVENTS;
  }
});

},{"./RealtimeChannel":26,"./RealtimeClient":27,"./RealtimePresence":28}],30:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CONNECTION_STATE = exports.TRANSPORTS = exports.CHANNEL_EVENTS = exports.CHANNEL_STATES = exports.SOCKET_STATES = exports.WS_CLOSE_NORMAL = exports.DEFAULT_TIMEOUT = exports.VSN = exports.DEFAULT_HEADERS = void 0;
var version_1 = require("./version");
exports.DEFAULT_HEADERS = {
  'X-Client-Info': "realtime-js/".concat(version_1.version)
};
exports.VSN = '1.0.0';
exports.DEFAULT_TIMEOUT = 10000;
exports.WS_CLOSE_NORMAL = 1000;
var SOCKET_STATES;
(function (SOCKET_STATES) {
  SOCKET_STATES[SOCKET_STATES["connecting"] = 0] = "connecting";
  SOCKET_STATES[SOCKET_STATES["open"] = 1] = "open";
  SOCKET_STATES[SOCKET_STATES["closing"] = 2] = "closing";
  SOCKET_STATES[SOCKET_STATES["closed"] = 3] = "closed";
})(SOCKET_STATES = exports.SOCKET_STATES || (exports.SOCKET_STATES = {}));
var CHANNEL_STATES;
(function (CHANNEL_STATES) {
  CHANNEL_STATES["closed"] = "closed";
  CHANNEL_STATES["errored"] = "errored";
  CHANNEL_STATES["joined"] = "joined";
  CHANNEL_STATES["joining"] = "joining";
  CHANNEL_STATES["leaving"] = "leaving";
})(CHANNEL_STATES = exports.CHANNEL_STATES || (exports.CHANNEL_STATES = {}));
var CHANNEL_EVENTS;
(function (CHANNEL_EVENTS) {
  CHANNEL_EVENTS["close"] = "phx_close";
  CHANNEL_EVENTS["error"] = "phx_error";
  CHANNEL_EVENTS["join"] = "phx_join";
  CHANNEL_EVENTS["reply"] = "phx_reply";
  CHANNEL_EVENTS["leave"] = "phx_leave";
  CHANNEL_EVENTS["access_token"] = "access_token";
})(CHANNEL_EVENTS = exports.CHANNEL_EVENTS || (exports.CHANNEL_EVENTS = {}));
var TRANSPORTS;
(function (TRANSPORTS) {
  TRANSPORTS["websocket"] = "websocket";
})(TRANSPORTS = exports.TRANSPORTS || (exports.TRANSPORTS = {}));
var CONNECTION_STATE;
(function (CONNECTION_STATE) {
  CONNECTION_STATE["Connecting"] = "connecting";
  CONNECTION_STATE["Open"] = "open";
  CONNECTION_STATE["Closing"] = "closing";
  CONNECTION_STATE["Closed"] = "closed";
})(CONNECTION_STATE = exports.CONNECTION_STATE || (exports.CONNECTION_STATE = {}));

},{"./version":35}],31:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var constants_1 = require("../lib/constants");
var Push = /*#__PURE__*/function () {
  /**
   * Initializes the Push
   *
   * @param channel The Channel
   * @param event The event, for example `"phx_join"`
   * @param payload The payload, for example `{user_id: 123}`
   * @param timeout The push timeout in milliseconds
   */
  function Push(channel, event) {
    var payload = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var timeout = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : constants_1.DEFAULT_TIMEOUT;
    _classCallCheck(this, Push);
    this.channel = channel;
    this.event = event;
    this.payload = payload;
    this.timeout = timeout;
    this.sent = false;
    this.timeoutTimer = undefined;
    this.ref = '';
    this.receivedResp = null;
    this.recHooks = [];
    this.refEvent = null;
    this.rateLimited = false;
  }
  _createClass(Push, [{
    key: "resend",
    value: function resend(timeout) {
      this.timeout = timeout;
      this._cancelRefEvent();
      this.ref = '';
      this.refEvent = null;
      this.receivedResp = null;
      this.sent = false;
      this.send();
    }
  }, {
    key: "send",
    value: function send() {
      if (this._hasReceived('timeout')) {
        return;
      }
      this.startTimeout();
      this.sent = true;
      var status = this.channel.socket.push({
        topic: this.channel.topic,
        event: this.event,
        payload: this.payload,
        ref: this.ref,
        join_ref: this.channel._joinRef()
      });
      if (status === 'rate limited') {
        this.rateLimited = true;
      }
    }
  }, {
    key: "updatePayload",
    value: function updatePayload(payload) {
      this.payload = Object.assign(Object.assign({}, this.payload), payload);
    }
  }, {
    key: "receive",
    value: function receive(status, callback) {
      var _a;
      if (this._hasReceived(status)) {
        callback((_a = this.receivedResp) === null || _a === void 0 ? void 0 : _a.response);
      }
      this.recHooks.push({
        status: status,
        callback: callback
      });
      return this;
    }
  }, {
    key: "startTimeout",
    value: function startTimeout() {
      var _this = this;
      if (this.timeoutTimer) {
        return;
      }
      this.ref = this.channel.socket._makeRef();
      this.refEvent = this.channel._replyEventName(this.ref);
      var callback = function callback(payload) {
        _this._cancelRefEvent();
        _this._cancelTimeout();
        _this.receivedResp = payload;
        _this._matchReceive(payload);
      };
      this.channel._on(this.refEvent, {}, callback);
      this.timeoutTimer = setTimeout(function () {
        _this.trigger('timeout', {});
      }, this.timeout);
    }
  }, {
    key: "trigger",
    value: function trigger(status, response) {
      if (this.refEvent) this.channel._trigger(this.refEvent, {
        status: status,
        response: response
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._cancelRefEvent();
      this._cancelTimeout();
    }
  }, {
    key: "_cancelRefEvent",
    value: function _cancelRefEvent() {
      if (!this.refEvent) {
        return;
      }
      this.channel._off(this.refEvent, {});
    }
  }, {
    key: "_cancelTimeout",
    value: function _cancelTimeout() {
      clearTimeout(this.timeoutTimer);
      this.timeoutTimer = undefined;
    }
  }, {
    key: "_matchReceive",
    value: function _matchReceive(_ref) {
      var status = _ref.status,
        response = _ref.response;
      this.recHooks.filter(function (h) {
        return h.status === status;
      }).forEach(function (h) {
        return h.callback(response);
      });
    }
  }, {
    key: "_hasReceived",
    value: function _hasReceived(status) {
      return this.receivedResp && this.receivedResp.status === status;
    }
  }]);
  return Push;
}();
exports["default"] = Push;

},{"../lib/constants":30}],32:[function(require,module,exports){
"use strict";

// This file draws heavily from https://github.com/phoenixframework/phoenix/commit/cf098e9cf7a44ee6479d31d911a97d3c7430c6fe
// License: https://github.com/phoenixframework/phoenix/blob/master/LICENSE.md
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var Serializer = /*#__PURE__*/function () {
  function Serializer() {
    _classCallCheck(this, Serializer);
    this.HEADER_LENGTH = 1;
  }
  _createClass(Serializer, [{
    key: "decode",
    value: function decode(rawPayload, callback) {
      if (rawPayload.constructor === ArrayBuffer) {
        return callback(this._binaryDecode(rawPayload));
      }
      if (typeof rawPayload === 'string') {
        return callback(JSON.parse(rawPayload));
      }
      return callback({});
    }
  }, {
    key: "_binaryDecode",
    value: function _binaryDecode(buffer) {
      var view = new DataView(buffer);
      var decoder = new TextDecoder();
      return this._decodeBroadcast(buffer, view, decoder);
    }
  }, {
    key: "_decodeBroadcast",
    value: function _decodeBroadcast(buffer, view, decoder) {
      var topicSize = view.getUint8(1);
      var eventSize = view.getUint8(2);
      var offset = this.HEADER_LENGTH + 2;
      var topic = decoder.decode(buffer.slice(offset, offset + topicSize));
      offset = offset + topicSize;
      var event = decoder.decode(buffer.slice(offset, offset + eventSize));
      offset = offset + eventSize;
      var data = JSON.parse(decoder.decode(buffer.slice(offset, buffer.byteLength)));
      return {
        ref: null,
        topic: topic,
        event: event,
        payload: data
      };
    }
  }]);
  return Serializer;
}();
exports["default"] = Serializer;

},{}],33:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Creates a timer that accepts a `timerCalc` function to perform calculated timeout retries, such as exponential backoff.
 *
 * @example
 *    let reconnectTimer = new Timer(() => this.connect(), function(tries){
 *      return [1000, 5000, 10000][tries - 1] || 10000
 *    })
 *    reconnectTimer.scheduleTimeout() // fires after 1000
 *    reconnectTimer.scheduleTimeout() // fires after 5000
 *    reconnectTimer.reset()
 *    reconnectTimer.scheduleTimeout() // fires after 1000
 */
var Timer = /*#__PURE__*/function () {
  function Timer(callback, timerCalc) {
    _classCallCheck(this, Timer);
    this.callback = callback;
    this.timerCalc = timerCalc;
    this.timer = undefined;
    this.tries = 0;
    this.callback = callback;
    this.timerCalc = timerCalc;
  }
  _createClass(Timer, [{
    key: "reset",
    value: function reset() {
      this.tries = 0;
      clearTimeout(this.timer);
    }
    // Cancels any previous scheduleTimeout and schedules callback
  }, {
    key: "scheduleTimeout",
    value: function scheduleTimeout() {
      var _this = this;
      clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        _this.tries = _this.tries + 1;
        _this.callback();
      }, this.timerCalc(this.tries + 1));
    }
  }]);
  return Timer;
}();
exports["default"] = Timer;

},{}],34:[function(require,module,exports){
"use strict";

/**
 * Helpers to convert the change Payload into native JS types.
 */
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toTimestampString = exports.toArray = exports.toJson = exports.toNumber = exports.toBoolean = exports.convertCell = exports.convertColumn = exports.convertChangeData = exports.PostgresTypes = void 0;
// Adapted from epgsql (src/epgsql_binary.erl), this module licensed under
// 3-clause BSD found here: https://raw.githubusercontent.com/epgsql/epgsql/devel/LICENSE
var PostgresTypes;
(function (PostgresTypes) {
  PostgresTypes["abstime"] = "abstime";
  PostgresTypes["bool"] = "bool";
  PostgresTypes["date"] = "date";
  PostgresTypes["daterange"] = "daterange";
  PostgresTypes["float4"] = "float4";
  PostgresTypes["float8"] = "float8";
  PostgresTypes["int2"] = "int2";
  PostgresTypes["int4"] = "int4";
  PostgresTypes["int4range"] = "int4range";
  PostgresTypes["int8"] = "int8";
  PostgresTypes["int8range"] = "int8range";
  PostgresTypes["json"] = "json";
  PostgresTypes["jsonb"] = "jsonb";
  PostgresTypes["money"] = "money";
  PostgresTypes["numeric"] = "numeric";
  PostgresTypes["oid"] = "oid";
  PostgresTypes["reltime"] = "reltime";
  PostgresTypes["text"] = "text";
  PostgresTypes["time"] = "time";
  PostgresTypes["timestamp"] = "timestamp";
  PostgresTypes["timestamptz"] = "timestamptz";
  PostgresTypes["timetz"] = "timetz";
  PostgresTypes["tsrange"] = "tsrange";
  PostgresTypes["tstzrange"] = "tstzrange";
})(PostgresTypes = exports.PostgresTypes || (exports.PostgresTypes = {}));
/**
 * Takes an array of columns and an object of string values then converts each string value
 * to its mapped type.
 *
 * @param {{name: String, type: String}[]} columns
 * @param {Object} record
 * @param {Object} options The map of various options that can be applied to the mapper
 * @param {Array} options.skipTypes The array of types that should not be converted
 *
 * @example convertChangeData([{name: 'first_name', type: 'text'}, {name: 'age', type: 'int4'}], {first_name: 'Paul', age:'33'}, {})
 * //=>{ first_name: 'Paul', age: 33 }
 */
var convertChangeData = function convertChangeData(columns, record) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _a;
  var skipTypes = (_a = options.skipTypes) !== null && _a !== void 0 ? _a : [];
  return Object.keys(record).reduce(function (acc, rec_key) {
    acc[rec_key] = (0, exports.convertColumn)(rec_key, columns, record, skipTypes);
    return acc;
  }, {});
};
exports.convertChangeData = convertChangeData;
/**
 * Converts the value of an individual column.
 *
 * @param {String} columnName The column that you want to convert
 * @param {{name: String, type: String}[]} columns All of the columns
 * @param {Object} record The map of string values
 * @param {Array} skipTypes An array of types that should not be converted
 * @return {object} Useless information
 *
 * @example convertColumn('age', [{name: 'first_name', type: 'text'}, {name: 'age', type: 'int4'}], {first_name: 'Paul', age: '33'}, [])
 * //=> 33
 * @example convertColumn('age', [{name: 'first_name', type: 'text'}, {name: 'age', type: 'int4'}], {first_name: 'Paul', age: '33'}, ['int4'])
 * //=> "33"
 */
var convertColumn = function convertColumn(columnName, columns, record, skipTypes) {
  var column = columns.find(function (x) {
    return x.name === columnName;
  });
  var colType = column === null || column === void 0 ? void 0 : column.type;
  var value = record[columnName];
  if (colType && !skipTypes.includes(colType)) {
    return (0, exports.convertCell)(colType, value);
  }
  return noop(value);
};
exports.convertColumn = convertColumn;
/**
 * If the value of the cell is `null`, returns null.
 * Otherwise converts the string value to the correct type.
 * @param {String} type A postgres column type
 * @param {String} stringValue The cell value
 *
 * @example convertCell('bool', 't')
 * //=> true
 * @example convertCell('int8', '10')
 * //=> 10
 * @example convertCell('_int4', '{1,2,3,4}')
 * //=> [1,2,3,4]
 */
var convertCell = function convertCell(type, value) {
  // if data type is an array
  if (type.charAt(0) === '_') {
    var dataType = type.slice(1, type.length);
    return (0, exports.toArray)(value, dataType);
  }
  // If not null, convert to correct type.
  switch (type) {
    case PostgresTypes.bool:
      return (0, exports.toBoolean)(value);
    case PostgresTypes.float4:
    case PostgresTypes.float8:
    case PostgresTypes.int2:
    case PostgresTypes.int4:
    case PostgresTypes.int8:
    case PostgresTypes.numeric:
    case PostgresTypes.oid:
      return (0, exports.toNumber)(value);
    case PostgresTypes.json:
    case PostgresTypes.jsonb:
      return (0, exports.toJson)(value);
    case PostgresTypes.timestamp:
      return (0, exports.toTimestampString)(value);
    // Format to be consistent with PostgREST
    case PostgresTypes.abstime: // To allow users to cast it based on Timezone
    case PostgresTypes.date: // To allow users to cast it based on Timezone
    case PostgresTypes.daterange:
    case PostgresTypes.int4range:
    case PostgresTypes.int8range:
    case PostgresTypes.money:
    case PostgresTypes.reltime: // To allow users to cast it based on Timezone
    case PostgresTypes.text:
    case PostgresTypes.time: // To allow users to cast it based on Timezone
    case PostgresTypes.timestamptz: // To allow users to cast it based on Timezone
    case PostgresTypes.timetz: // To allow users to cast it based on Timezone
    case PostgresTypes.tsrange:
    case PostgresTypes.tstzrange:
      return noop(value);
    default:
      // Return the value for remaining types
      return noop(value);
  }
};
exports.convertCell = convertCell;
var noop = function noop(value) {
  return value;
};
var toBoolean = function toBoolean(value) {
  switch (value) {
    case 't':
      return true;
    case 'f':
      return false;
    default:
      return value;
  }
};
exports.toBoolean = toBoolean;
var toNumber = function toNumber(value) {
  if (typeof value === 'string') {
    var parsedValue = parseFloat(value);
    if (!Number.isNaN(parsedValue)) {
      return parsedValue;
    }
  }
  return value;
};
exports.toNumber = toNumber;
var toJson = function toJson(value) {
  if (typeof value === 'string') {
    try {
      return JSON.parse(value);
    } catch (error) {
      console.log("JSON parse error: ".concat(error));
      return value;
    }
  }
  return value;
};
exports.toJson = toJson;
/**
 * Converts a Postgres Array into a native JS array
 *
 * @example toArray('{}', 'int4')
 * //=> []
 * @example toArray('{"[2021-01-01,2021-12-31)","(2021-01-01,2021-12-32]"}', 'daterange')
 * //=> ['[2021-01-01,2021-12-31)', '(2021-01-01,2021-12-32]']
 * @example toArray([1,2,3,4], 'int4')
 * //=> [1,2,3,4]
 */
var toArray = function toArray(value, type) {
  if (typeof value !== 'string') {
    return value;
  }
  var lastIdx = value.length - 1;
  var closeBrace = value[lastIdx];
  var openBrace = value[0];
  // Confirm value is a Postgres array by checking curly brackets
  if (openBrace === '{' && closeBrace === '}') {
    var arr;
    var valTrim = value.slice(1, lastIdx);
    // TODO: find a better solution to separate Postgres array data
    try {
      arr = JSON.parse('[' + valTrim + ']');
    } catch (_) {
      // WARNING: splitting on comma does not cover all edge cases
      arr = valTrim ? valTrim.split(',') : [];
    }
    return arr.map(function (val) {
      return (0, exports.convertCell)(type, val);
    });
  }
  return value;
};
exports.toArray = toArray;
/**
 * Fixes timestamp to be ISO-8601. Swaps the space between the date and time for a 'T'
 * See https://github.com/supabase/supabase/issues/18
 *
 * @example toTimestampString('2019-09-10 00:00:00')
 * //=> '2019-09-10T00:00:00'
 */
var toTimestampString = function toTimestampString(value) {
  if (typeof value === 'string') {
    return value.replace(' ', 'T');
  }
  return value;
};
exports.toTimestampString = toTimestampString;

},{}],35:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.version = void 0;
exports.version = '2.1.0';

},{}],36:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StorageClient = void 0;
var StorageFileApi_1 = __importDefault(require("./packages/StorageFileApi"));
var StorageBucketApi_1 = __importDefault(require("./packages/StorageBucketApi"));
var StorageClient = /*#__PURE__*/function (_StorageBucketApi_1$d) {
  _inherits(StorageClient, _StorageBucketApi_1$d);
  var _super = _createSuper(StorageClient);
  function StorageClient(url) {
    var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var fetch = arguments.length > 2 ? arguments[2] : undefined;
    _classCallCheck(this, StorageClient);
    return _super.call(this, url, headers, fetch);
  }
  /**
   * Perform file operation in a bucket.
   *
   * @param id The bucket id to operate on.
   */
  _createClass(StorageClient, [{
    key: "from",
    value: function from(id) {
      return new StorageFileApi_1["default"](this.url, this.headers, id, this.fetch);
    }
  }]);
  return StorageClient;
}(StorageBucketApi_1["default"]);
exports.StorageClient = StorageClient;

},{"./packages/StorageBucketApi":44,"./packages/StorageFileApi":45}],37:[function(require,module,exports){
"use strict";

var __createBinding = void 0 && (void 0).__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __exportStar = void 0 && (void 0).__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StorageClient = void 0;
var StorageClient_1 = require("./StorageClient");
Object.defineProperty(exports, "StorageClient", {
  enumerable: true,
  get: function get() {
    return StorageClient_1.StorageClient;
  }
});
__exportStar(require("./lib/types"), exports);
__exportStar(require("./lib/errors"), exports);

},{"./StorageClient":36,"./lib/errors":39,"./lib/types":42}],38:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_HEADERS = void 0;
var version_1 = require("./version");
exports.DEFAULT_HEADERS = {
  'X-Client-Info': "storage-js/".concat(version_1.version)
};

},{"./version":43}],39:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StorageUnknownError = exports.StorageApiError = exports.isStorageError = exports.StorageError = void 0;
var StorageError = /*#__PURE__*/function (_Error) {
  _inherits(StorageError, _Error);
  var _super = _createSuper(StorageError);
  function StorageError(message) {
    var _this;
    _classCallCheck(this, StorageError);
    _this = _super.call(this, message);
    _this.__isStorageError = true;
    _this.name = 'StorageError';
    return _this;
  }
  return _createClass(StorageError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
exports.StorageError = StorageError;
function isStorageError(error) {
  return _typeof(error) === 'object' && error !== null && '__isStorageError' in error;
}
exports.isStorageError = isStorageError;
var StorageApiError = /*#__PURE__*/function (_StorageError) {
  _inherits(StorageApiError, _StorageError);
  var _super2 = _createSuper(StorageApiError);
  function StorageApiError(message, status) {
    var _this2;
    _classCallCheck(this, StorageApiError);
    _this2 = _super2.call(this, message);
    _this2.name = 'StorageApiError';
    _this2.status = status;
    return _this2;
  }
  _createClass(StorageApiError, [{
    key: "toJSON",
    value: function toJSON() {
      return {
        name: this.name,
        message: this.message,
        status: this.status
      };
    }
  }]);
  return StorageApiError;
}(StorageError);
exports.StorageApiError = StorageApiError;
var StorageUnknownError = /*#__PURE__*/function (_StorageError2) {
  _inherits(StorageUnknownError, _StorageError2);
  var _super3 = _createSuper(StorageUnknownError);
  function StorageUnknownError(message, originalError) {
    var _this3;
    _classCallCheck(this, StorageUnknownError);
    _this3 = _super3.call(this, message);
    _this3.name = 'StorageUnknownError';
    _this3.originalError = originalError;
    return _this3;
  }
  return _createClass(StorageUnknownError);
}(StorageError);
exports.StorageUnknownError = StorageUnknownError;

},{}],40:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.put = exports.post = exports.get = void 0;
var errors_1 = require("./errors");
var helpers_1 = require("./helpers");
var _getErrorMessage = function _getErrorMessage(err) {
  return err.msg || err.message || err.error_description || err.error || JSON.stringify(err);
};
var handleError = function handleError(error, reject) {
  return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var Res;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, helpers_1.resolveResponse)();
        case 2:
          Res = _context.sent;
          if (error instanceof Res) {
            error.json().then(function (err) {
              reject(new errors_1.StorageApiError(_getErrorMessage(err), error.status || 500));
            });
          } else {
            reject(new errors_1.StorageUnknownError(_getErrorMessage(error), error));
          }
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
};
var _getRequestParams = function _getRequestParams(method, options, parameters, body) {
  var params = {
    method: method,
    headers: (options === null || options === void 0 ? void 0 : options.headers) || {}
  };
  if (method === 'GET') {
    return params;
  }
  params.headers = Object.assign({
    'Content-Type': 'application/json'
  }, options === null || options === void 0 ? void 0 : options.headers);
  params.body = JSON.stringify(body);
  return Object.assign(Object.assign({}, params), parameters);
};
function _handleRequest(fetcher, method, url, options, parameters, body) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", new Promise(function (resolve, reject) {
            fetcher(url, _getRequestParams(method, options, parameters, body)).then(function (result) {
              if (!result.ok) throw result;
              if (options === null || options === void 0 ? void 0 : options.noResolveJson) return result;
              return result.json();
            }).then(function (data) {
              return resolve(data);
            })["catch"](function (error) {
              return handleError(error, reject);
            });
          }));
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
}
function get(fetcher, url, options, parameters) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", _handleRequest(fetcher, 'GET', url, options, parameters));
        case 1:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
}
exports.get = get;
function post(fetcher, url, body, options, parameters) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.abrupt("return", _handleRequest(fetcher, 'POST', url, options, parameters, body));
        case 1:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
}
exports.post = post;
function put(fetcher, url, body, options, parameters) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          return _context5.abrupt("return", _handleRequest(fetcher, 'PUT', url, options, parameters, body));
        case 1:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
}
exports.put = put;
function remove(fetcher, url, body, options, parameters) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          return _context6.abrupt("return", _handleRequest(fetcher, 'DELETE', url, options, parameters, body));
        case 1:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
}
exports.remove = remove;

},{"./errors":39,"./helpers":41}],41:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
var __createBinding = void 0 && (void 0).__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = void 0 && (void 0).__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveResponse = exports.resolveFetch = void 0;
var resolveFetch = function resolveFetch(customFetch) {
  var _fetch;
  if (customFetch) {
    _fetch = customFetch;
  } else if (typeof fetch === 'undefined') {
    _fetch = function _fetch() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$Promise$resolv;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Promise.resolve().then(function () {
                return __importStar(require('cross-fetch'));
              });
            case 2:
              _context.next = 4;
              return (_yield$Promise$resolv = _context.sent).fetch.apply(_yield$Promise$resolv, args);
            case 4:
              return _context.abrupt("return", _context.sent);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
    };
  } else {
    _fetch = fetch;
  }
  return function () {
    return _fetch.apply(void 0, arguments);
  };
};
exports.resolveFetch = resolveFetch;
var resolveResponse = function resolveResponse() {
  return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (!(typeof Response === 'undefined')) {
            _context2.next = 4;
            break;
          }
          _context2.next = 3;
          return Promise.resolve().then(function () {
            return __importStar(require('cross-fetch'));
          });
        case 3:
          return _context2.abrupt("return", _context2.sent.Response);
        case 4:
          return _context2.abrupt("return", Response);
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
};
exports.resolveResponse = resolveResponse;

},{"cross-fetch":59}],42:[function(require,module,exports){
arguments[4][16][0].apply(exports,arguments)
},{"dup":16}],43:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.version = void 0;
// generated by genversion
exports.version = '2.1.0';

},{}],44:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var constants_1 = require("../lib/constants");
var errors_1 = require("../lib/errors");
var fetch_1 = require("../lib/fetch");
var helpers_1 = require("../lib/helpers");
var StorageBucketApi = /*#__PURE__*/function () {
  function StorageBucketApi(url) {
    var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var fetch = arguments.length > 2 ? arguments[2] : undefined;
    _classCallCheck(this, StorageBucketApi);
    this.url = url;
    this.headers = Object.assign(Object.assign({}, constants_1.DEFAULT_HEADERS), headers);
    this.fetch = (0, helpers_1.resolveFetch)(fetch);
  }
  /**
   * Retrieves the details of all Storage buckets within an existing project.
   */
  _createClass(StorageBucketApi, [{
    key: "listBuckets",
    value: function listBuckets() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0, fetch_1.get)(this.fetch, "".concat(this.url, "/bucket"), {
                headers: this.headers
              });
            case 3:
              data = _context.sent;
              return _context.abrupt("return", {
                data: data,
                error: null
              });
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              if (!(0, errors_1.isStorageError)(_context.t0)) {
                _context.next = 11;
                break;
              }
              return _context.abrupt("return", {
                data: null,
                error: _context.t0
              });
            case 11:
              throw _context.t0;
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 7]]);
      }));
    }
    /**
     * Retrieves the details of an existing Storage bucket.
     *
     * @param id The unique identifier of the bucket you would like to retrieve.
     */
  }, {
    key: "getBucket",
    value: function getBucket(id) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return (0, fetch_1.get)(this.fetch, "".concat(this.url, "/bucket/").concat(id), {
                headers: this.headers
              });
            case 3:
              data = _context2.sent;
              return _context2.abrupt("return", {
                data: data,
                error: null
              });
            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              if (!(0, errors_1.isStorageError)(_context2.t0)) {
                _context2.next = 11;
                break;
              }
              return _context2.abrupt("return", {
                data: null,
                error: _context2.t0
              });
            case 11:
              throw _context2.t0;
            case 12:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[0, 7]]);
      }));
    }
    /**
     * Creates a new Storage bucket
     *
     * @param id A unique identifier for the bucket you are creating.
     * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations. By default, buckets are private.
     * @returns newly created bucket id
     */
  }, {
    key: "createBucket",
    value: function createBucket(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        "public": false
      };
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return (0, fetch_1.post)(this.fetch, "".concat(this.url, "/bucket"), {
                id: id,
                name: id,
                "public": options["public"]
              }, {
                headers: this.headers
              });
            case 3:
              data = _context3.sent;
              return _context3.abrupt("return", {
                data: data,
                error: null
              });
            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);
              if (!(0, errors_1.isStorageError)(_context3.t0)) {
                _context3.next = 11;
                break;
              }
              return _context3.abrupt("return", {
                data: null,
                error: _context3.t0
              });
            case 11:
              throw _context3.t0;
            case 12:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[0, 7]]);
      }));
    }
    /**
     * Updates a Storage bucket
     *
     * @param id A unique identifier for the bucket you are updating.
     * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations.
     */
  }, {
    key: "updateBucket",
    value: function updateBucket(id, options) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return (0, fetch_1.put)(this.fetch, "".concat(this.url, "/bucket/").concat(id), {
                id: id,
                name: id,
                "public": options["public"]
              }, {
                headers: this.headers
              });
            case 3:
              data = _context4.sent;
              return _context4.abrupt("return", {
                data: data,
                error: null
              });
            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4["catch"](0);
              if (!(0, errors_1.isStorageError)(_context4.t0)) {
                _context4.next = 11;
                break;
              }
              return _context4.abrupt("return", {
                data: null,
                error: _context4.t0
              });
            case 11:
              throw _context4.t0;
            case 12:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this, [[0, 7]]);
      }));
    }
    /**
     * Removes all objects inside a single bucket.
     *
     * @param id The unique identifier of the bucket you would like to empty.
     */
  }, {
    key: "emptyBucket",
    value: function emptyBucket(id) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var data;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return (0, fetch_1.post)(this.fetch, "".concat(this.url, "/bucket/").concat(id, "/empty"), {}, {
                headers: this.headers
              });
            case 3:
              data = _context5.sent;
              return _context5.abrupt("return", {
                data: data,
                error: null
              });
            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5["catch"](0);
              if (!(0, errors_1.isStorageError)(_context5.t0)) {
                _context5.next = 11;
                break;
              }
              return _context5.abrupt("return", {
                data: null,
                error: _context5.t0
              });
            case 11:
              throw _context5.t0;
            case 12:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this, [[0, 7]]);
      }));
    }
    /**
     * Deletes an existing bucket. A bucket can't be deleted with existing objects inside it.
     * You must first `empty()` the bucket.
     *
     * @param id The unique identifier of the bucket you would like to delete.
     */
  }, {
    key: "deleteBucket",
    value: function deleteBucket(id) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var data;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return (0, fetch_1.remove)(this.fetch, "".concat(this.url, "/bucket/").concat(id), {}, {
                headers: this.headers
              });
            case 3:
              data = _context6.sent;
              return _context6.abrupt("return", {
                data: data,
                error: null
              });
            case 7:
              _context6.prev = 7;
              _context6.t0 = _context6["catch"](0);
              if (!(0, errors_1.isStorageError)(_context6.t0)) {
                _context6.next = 11;
                break;
              }
              return _context6.abrupt("return", {
                data: null,
                error: _context6.t0
              });
            case 11:
              throw _context6.t0;
            case 12:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this, [[0, 7]]);
      }));
    }
  }]);
  return StorageBucketApi;
}();
exports["default"] = StorageBucketApi;

},{"../lib/constants":38,"../lib/errors":39,"../lib/fetch":40,"../lib/helpers":41}],45:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var errors_1 = require("../lib/errors");
var fetch_1 = require("../lib/fetch");
var helpers_1 = require("../lib/helpers");
var DEFAULT_SEARCH_OPTIONS = {
  limit: 100,
  offset: 0,
  sortBy: {
    column: 'name',
    order: 'asc'
  }
};
var DEFAULT_FILE_OPTIONS = {
  cacheControl: '3600',
  contentType: 'text/plain;charset=UTF-8',
  upsert: false
};
var StorageFileApi = /*#__PURE__*/function () {
  function StorageFileApi(url) {
    var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var bucketId = arguments.length > 2 ? arguments[2] : undefined;
    var fetch = arguments.length > 3 ? arguments[3] : undefined;
    _classCallCheck(this, StorageFileApi);
    this.url = url;
    this.headers = headers;
    this.bucketId = bucketId;
    this.fetch = (0, helpers_1.resolveFetch)(fetch);
  }
  /**
   * Uploads a file to an existing bucket or replaces an existing file at the specified path with a new one.
   *
   * @param method HTTP method.
   * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  _createClass(StorageFileApi, [{
    key: "uploadOrUpdate",
    value: function uploadOrUpdate(method, path, fileBody, fileOptions) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var body, options, headers, cleanPath, _path, res, error;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              options = Object.assign(Object.assign({}, DEFAULT_FILE_OPTIONS), fileOptions);
              headers = Object.assign(Object.assign({}, this.headers), method === 'POST' && {
                'x-upsert': String(options.upsert)
              });
              if (typeof Blob !== 'undefined' && fileBody instanceof Blob) {
                body = new FormData();
                body.append('cacheControl', options.cacheControl);
                body.append('', fileBody);
              } else if (typeof FormData !== 'undefined' && fileBody instanceof FormData) {
                body = fileBody;
                body.append('cacheControl', options.cacheControl);
              } else {
                body = fileBody;
                headers['cache-control'] = "max-age=".concat(options.cacheControl);
                headers['content-type'] = options.contentType;
              }
              cleanPath = this._removeEmptyFolders(path);
              _path = this._getFinalPath(cleanPath);
              _context.next = 8;
              return this.fetch("".concat(this.url, "/object/").concat(_path), {
                method: method,
                body: body,
                headers: headers
              });
            case 8:
              res = _context.sent;
              if (!res.ok) {
                _context.next = 13;
                break;
              }
              return _context.abrupt("return", {
                data: {
                  path: cleanPath
                },
                error: null
              });
            case 13:
              _context.next = 15;
              return res.json();
            case 15:
              error = _context.sent;
              return _context.abrupt("return", {
                data: null,
                error: error
              });
            case 17:
              _context.next = 24;
              break;
            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](0);
              if (!(0, errors_1.isStorageError)(_context.t0)) {
                _context.next = 23;
                break;
              }
              return _context.abrupt("return", {
                data: null,
                error: _context.t0
              });
            case 23:
              throw _context.t0;
            case 24:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 19]]);
      }));
    }
    /**
     * Uploads a file to an existing bucket.
     *
     * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
     * @param fileBody The body of the file to be stored in the bucket.
     */
  }, {
    key: "upload",
    value: function upload(path, fileBody, fileOptions) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.uploadOrUpdate('POST', path, fileBody, fileOptions));
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
    }
    /**
     * Replaces an existing file at the specified path with a new one.
     *
     * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to update.
     * @param fileBody The body of the file to be stored in the bucket.
     */
  }, {
    key: "update",
    value: function update(path, fileBody, fileOptions) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", this.uploadOrUpdate('PUT', path, fileBody, fileOptions));
            case 1:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
    }
    /**
     * Moves an existing file to a new path in the same bucket.
     *
     * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
     * @param toPath The new file path, including the new file name. For example `folder/image-new.png`.
     */
  }, {
    key: "move",
    value: function move(fromPath, toPath) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return (0, fetch_1.post)(this.fetch, "".concat(this.url, "/object/move"), {
                bucketId: this.bucketId,
                sourceKey: fromPath,
                destinationKey: toPath
              }, {
                headers: this.headers
              });
            case 3:
              data = _context4.sent;
              return _context4.abrupt("return", {
                data: data,
                error: null
              });
            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4["catch"](0);
              if (!(0, errors_1.isStorageError)(_context4.t0)) {
                _context4.next = 11;
                break;
              }
              return _context4.abrupt("return", {
                data: null,
                error: _context4.t0
              });
            case 11:
              throw _context4.t0;
            case 12:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this, [[0, 7]]);
      }));
    }
    /**
     * Copies an existing file to a new path in the same bucket.
     *
     * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
     * @param toPath The new file path, including the new file name. For example `folder/image-copy.png`.
     */
  }, {
    key: "copy",
    value: function copy(fromPath, toPath) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var data;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return (0, fetch_1.post)(this.fetch, "".concat(this.url, "/object/copy"), {
                bucketId: this.bucketId,
                sourceKey: fromPath,
                destinationKey: toPath
              }, {
                headers: this.headers
              });
            case 3:
              data = _context5.sent;
              return _context5.abrupt("return", {
                data: {
                  path: data.Key
                },
                error: null
              });
            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5["catch"](0);
              if (!(0, errors_1.isStorageError)(_context5.t0)) {
                _context5.next = 11;
                break;
              }
              return _context5.abrupt("return", {
                data: null,
                error: _context5.t0
              });
            case 11:
              throw _context5.t0;
            case 12:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this, [[0, 7]]);
      }));
    }
    /**
     * Creates a signed URL. Use a signed URL to share a file for a fixed amount of time.
     *
     * @param path The file path, including the current file name. For example `folder/image.png`.
     * @param expiresIn The number of seconds until the signed URL expires. For example, `60` for a URL which is valid for one minute.
     * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
     * @param options.transform Transform the asset before serving it to the client.
     */
  }, {
    key: "createSignedUrl",
    value: function createSignedUrl(path, expiresIn, options) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var _path, data, downloadQueryParam, signedUrl;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _path = this._getFinalPath(path);
              _context6.next = 4;
              return (0, fetch_1.post)(this.fetch, "".concat(this.url, "/object/sign/").concat(_path), Object.assign({
                expiresIn: expiresIn
              }, (options === null || options === void 0 ? void 0 : options.transform) ? {
                transform: options.transform
              } : {}), {
                headers: this.headers
              });
            case 4:
              data = _context6.sent;
              downloadQueryParam = (options === null || options === void 0 ? void 0 : options.download) ? "&download=".concat(options.download === true ? '' : options.download) : '';
              signedUrl = encodeURI("".concat(this.url).concat(data.signedURL).concat(downloadQueryParam));
              data = {
                signedUrl: signedUrl
              };
              return _context6.abrupt("return", {
                data: data,
                error: null
              });
            case 11:
              _context6.prev = 11;
              _context6.t0 = _context6["catch"](0);
              if (!(0, errors_1.isStorageError)(_context6.t0)) {
                _context6.next = 15;
                break;
              }
              return _context6.abrupt("return", {
                data: null,
                error: _context6.t0
              });
            case 15:
              throw _context6.t0;
            case 16:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this, [[0, 11]]);
      }));
    }
    /**
     * Creates multiple signed URLs. Use a signed URL to share a file for a fixed amount of time.
     *
     * @param paths The file paths to be downloaded, including the current file names. For example `['folder/image.png', 'folder2/image2.png']`.
     * @param expiresIn The number of seconds until the signed URLs expire. For example, `60` for URLs which are valid for one minute.
     * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
     */
  }, {
    key: "createSignedUrls",
    value: function createSignedUrls(paths, expiresIn, options) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var _this = this;
        var data, downloadQueryParam;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return (0, fetch_1.post)(this.fetch, "".concat(this.url, "/object/sign/").concat(this.bucketId), {
                expiresIn: expiresIn,
                paths: paths
              }, {
                headers: this.headers
              });
            case 3:
              data = _context7.sent;
              downloadQueryParam = (options === null || options === void 0 ? void 0 : options.download) ? "&download=".concat(options.download === true ? '' : options.download) : '';
              return _context7.abrupt("return", {
                data: data.map(function (datum) {
                  return Object.assign(Object.assign({}, datum), {
                    signedUrl: datum.signedURL ? encodeURI("".concat(_this.url).concat(datum.signedURL).concat(downloadQueryParam)) : null
                  });
                }),
                error: null
              });
            case 8:
              _context7.prev = 8;
              _context7.t0 = _context7["catch"](0);
              if (!(0, errors_1.isStorageError)(_context7.t0)) {
                _context7.next = 12;
                break;
              }
              return _context7.abrupt("return", {
                data: null,
                error: _context7.t0
              });
            case 12:
              throw _context7.t0;
            case 13:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this, [[0, 8]]);
      }));
    }
    /**
     * Downloads a file.
     *
     * @param path The full path and file name of the file to be downloaded. For example `folder/image.png`.
     * @param options.transform Transform the asset before serving it to the client.
     */
  }, {
    key: "download",
    value: function download(path, options) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var wantsTransformation, renderPath, transformationQuery, queryString, _path, res, data;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              wantsTransformation = typeof (options === null || options === void 0 ? void 0 : options.transform) !== 'undefined';
              renderPath = wantsTransformation ? 'render/image/authenticated' : 'object';
              transformationQuery = this.transformOptsToQueryString((options === null || options === void 0 ? void 0 : options.transform) || {});
              queryString = transformationQuery ? "?".concat(transformationQuery) : '';
              _context8.prev = 4;
              _path = this._getFinalPath(path);
              _context8.next = 8;
              return (0, fetch_1.get)(this.fetch, "".concat(this.url, "/").concat(renderPath, "/").concat(_path).concat(queryString), {
                headers: this.headers,
                noResolveJson: true
              });
            case 8:
              res = _context8.sent;
              _context8.next = 11;
              return res.blob();
            case 11:
              data = _context8.sent;
              return _context8.abrupt("return", {
                data: data,
                error: null
              });
            case 15:
              _context8.prev = 15;
              _context8.t0 = _context8["catch"](4);
              if (!(0, errors_1.isStorageError)(_context8.t0)) {
                _context8.next = 19;
                break;
              }
              return _context8.abrupt("return", {
                data: null,
                error: _context8.t0
              });
            case 19:
              throw _context8.t0;
            case 20:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this, [[4, 15]]);
      }));
    }
    /**
     * Retrieves the URL for an asset in a public bucket.
     * This function does not verify if the bucket is public. If a public URL is created for a bucket which is not public, you will not be able to download the asset.
     *
     * @param path The path and name of the file to generate the public URL for. For example `folder/image.png`.
     * @param options.download Triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
     * @param options.transform Transform the asset before serving it to the client.
     */
  }, {
    key: "getPublicUrl",
    value: function getPublicUrl(path, options) {
      var _path = this._getFinalPath(path);
      var _queryString = [];
      var downloadQueryParam = (options === null || options === void 0 ? void 0 : options.download) ? "download=".concat(options.download === true ? '' : options.download) : '';
      if (downloadQueryParam !== '') {
        _queryString.push(downloadQueryParam);
      }
      var wantsTransformation = typeof (options === null || options === void 0 ? void 0 : options.transform) !== 'undefined';
      var renderPath = wantsTransformation ? 'render/image' : 'object';
      var transformationQuery = this.transformOptsToQueryString((options === null || options === void 0 ? void 0 : options.transform) || {});
      if (transformationQuery !== '') {
        _queryString.push(transformationQuery);
      }
      var queryString = _queryString.join('&');
      if (queryString !== '') {
        queryString = "?".concat(queryString);
      }
      return {
        data: {
          publicUrl: encodeURI("".concat(this.url, "/").concat(renderPath, "/public/").concat(_path).concat(queryString))
        }
      };
    }
    /**
     * Deletes files within the same bucket
     *
     * @param paths An array of files to delete, including the path and file name. For example [`'folder/image.png'`].
     */
  }, {
    key: "remove",
    value: function remove(paths) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var data;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              _context9.next = 3;
              return (0, fetch_1.remove)(this.fetch, "".concat(this.url, "/object/").concat(this.bucketId), {
                prefixes: paths
              }, {
                headers: this.headers
              });
            case 3:
              data = _context9.sent;
              return _context9.abrupt("return", {
                data: data,
                error: null
              });
            case 7:
              _context9.prev = 7;
              _context9.t0 = _context9["catch"](0);
              if (!(0, errors_1.isStorageError)(_context9.t0)) {
                _context9.next = 11;
                break;
              }
              return _context9.abrupt("return", {
                data: null,
                error: _context9.t0
              });
            case 11:
              throw _context9.t0;
            case 12:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this, [[0, 7]]);
      }));
    }
    /**
     * Get file metadata
     * @param id the file id to retrieve metadata
     */
    // async getMetadata(
    //   id: string
    // ): Promise<
    //   | {
    //       data: Metadata
    //       error: null
    //     }
    //   | {
    //       data: null
    //       error: StorageError
    //     }
    // > {
    //   try {
    //     const data = await get(this.fetch, `${this.url}/metadata/${id}`, { headers: this.headers })
    //     return { data, error: null }
    //   } catch (error) {
    //     if (isStorageError(error)) {
    //       return { data: null, error }
    //     }
    //     throw error
    //   }
    // }
    /**
     * Update file metadata
     * @param id the file id to update metadata
     * @param meta the new file metadata
     */
    // async updateMetadata(
    //   id: string,
    //   meta: Metadata
    // ): Promise<
    //   | {
    //       data: Metadata
    //       error: null
    //     }
    //   | {
    //       data: null
    //       error: StorageError
    //     }
    // > {
    //   try {
    //     const data = await post(
    //       this.fetch,
    //       `${this.url}/metadata/${id}`,
    //       { ...meta },
    //       { headers: this.headers }
    //     )
    //     return { data, error: null }
    //   } catch (error) {
    //     if (isStorageError(error)) {
    //       return { data: null, error }
    //     }
    //     throw error
    //   }
    // }
    /**
     * Lists all the files within a bucket.
     * @param path The folder path.
     */
  }, {
    key: "list",
    value: function list(path, options, parameters) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        var body, data;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _context10.prev = 0;
              body = Object.assign(Object.assign(Object.assign({}, DEFAULT_SEARCH_OPTIONS), options), {
                prefix: path || ''
              });
              _context10.next = 4;
              return (0, fetch_1.post)(this.fetch, "".concat(this.url, "/object/list/").concat(this.bucketId), body, {
                headers: this.headers
              }, parameters);
            case 4:
              data = _context10.sent;
              return _context10.abrupt("return", {
                data: data,
                error: null
              });
            case 8:
              _context10.prev = 8;
              _context10.t0 = _context10["catch"](0);
              if (!(0, errors_1.isStorageError)(_context10.t0)) {
                _context10.next = 12;
                break;
              }
              return _context10.abrupt("return", {
                data: null,
                error: _context10.t0
              });
            case 12:
              throw _context10.t0;
            case 13:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this, [[0, 8]]);
      }));
    }
  }, {
    key: "_getFinalPath",
    value: function _getFinalPath(path) {
      return "".concat(this.bucketId, "/").concat(path);
    }
  }, {
    key: "_removeEmptyFolders",
    value: function _removeEmptyFolders(path) {
      return path.replace(/^\/|\/$/g, '').replace(/\/+/g, '/');
    }
  }, {
    key: "transformOptsToQueryString",
    value: function transformOptsToQueryString(transform) {
      var params = [];
      if (transform.width) {
        params.push("width=".concat(transform.width));
      }
      if (transform.height) {
        params.push("height=".concat(transform.height));
      }
      if (transform.resize) {
        params.push("resize=".concat(transform.resize));
      }
      return params.join('&');
    }
  }]);
  return StorageFileApi;
}();
exports["default"] = StorageFileApi;

},{"../lib/errors":39,"../lib/fetch":40,"../lib/helpers":41}],46:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var functions_js_1 = require("@supabase/functions-js");
var postgrest_js_1 = require("@supabase/postgrest-js");
var realtime_js_1 = require("@supabase/realtime-js");
var storage_js_1 = require("@supabase/storage-js");
var constants_1 = require("./lib/constants");
var fetch_1 = require("./lib/fetch");
var helpers_1 = require("./lib/helpers");
var SupabaseAuthClient_1 = require("./lib/SupabaseAuthClient");
var DEFAULT_GLOBAL_OPTIONS = {
  headers: constants_1.DEFAULT_HEADERS
};
var DEFAULT_DB_OPTIONS = {
  schema: 'public'
};
var DEFAULT_AUTH_OPTIONS = {
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true
};
var DEFAULT_REALTIME_OPTIONS = {};
/**
 * Supabase Client.
 *
 * An isomorphic Javascript client for interacting with Postgres.
 */
var SupabaseClient = /*#__PURE__*/function () {
  /**
   * Create a new client for use in the browser.
   * @param supabaseUrl The unique Supabase URL which is supplied when you create a new project in your project dashboard.
   * @param supabaseKey The unique Supabase Key which is supplied when you create a new project in your project dashboard.
   * @param options.db.schema You can switch in between schemas. The schema needs to be on the list of exposed schemas inside Supabase.
   * @param options.auth.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
   * @param options.auth.persistSession Set to "true" if you want to automatically save the user session into local storage.
   * @param options.auth.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
   * @param options.realtime Options passed along to realtime-js constructor.
   * @param options.global.fetch A custom fetch implementation.
   * @param options.global.headers Any additional headers to send with each network request.
   */
  function SupabaseClient(supabaseUrl, supabaseKey, options) {
    _classCallCheck(this, SupabaseClient);
    var _a, _b, _c, _d, _e, _f, _g, _h;
    this.supabaseUrl = supabaseUrl;
    this.supabaseKey = supabaseKey;
    if (!supabaseUrl) throw new Error('supabaseUrl is required.');
    if (!supabaseKey) throw new Error('supabaseKey is required.');
    var _supabaseUrl = (0, helpers_1.stripTrailingSlash)(supabaseUrl);
    this.realtimeUrl = "".concat(_supabaseUrl, "/realtime/v1").replace(/^http/i, 'ws');
    this.authUrl = "".concat(_supabaseUrl, "/auth/v1");
    this.storageUrl = "".concat(_supabaseUrl, "/storage/v1");
    var isPlatform = _supabaseUrl.match(/(supabase\.co)|(supabase\.in)/);
    if (isPlatform) {
      var urlParts = _supabaseUrl.split('.');
      this.functionsUrl = "".concat(urlParts[0], ".functions.").concat(urlParts[1], ".").concat(urlParts[2]);
    } else {
      this.functionsUrl = "".concat(_supabaseUrl, "/functions/v1");
    }
    // default storage key uses the supabase project ref as a namespace
    var defaultStorageKey = "sb-".concat(new URL(this.authUrl).hostname.split('.')[0], "-auth-token");
    var DEFAULTS = {
      db: DEFAULT_DB_OPTIONS,
      realtime: DEFAULT_REALTIME_OPTIONS,
      auth: Object.assign(Object.assign({}, DEFAULT_AUTH_OPTIONS), {
        storageKey: defaultStorageKey
      }),
      global: DEFAULT_GLOBAL_OPTIONS
    };
    var settings = (0, helpers_1.applySettingDefaults)(options !== null && options !== void 0 ? options : {}, DEFAULTS);
    this.storageKey = (_b = (_a = settings.auth) === null || _a === void 0 ? void 0 : _a.storageKey) !== null && _b !== void 0 ? _b : '';
    this.headers = (_d = (_c = settings.global) === null || _c === void 0 ? void 0 : _c.headers) !== null && _d !== void 0 ? _d : {};
    this.auth = this._initSupabaseAuthClient((_e = settings.auth) !== null && _e !== void 0 ? _e : {}, this.headers, (_f = settings.global) === null || _f === void 0 ? void 0 : _f.fetch);
    this.fetch = (0, fetch_1.fetchWithAuth)(supabaseKey, this._getAccessToken.bind(this), (_g = settings.global) === null || _g === void 0 ? void 0 : _g.fetch);
    this.realtime = this._initRealtimeClient(Object.assign({
      headers: this.headers
    }, settings.realtime));
    this.rest = new postgrest_js_1.PostgrestClient("".concat(_supabaseUrl, "/rest/v1"), {
      headers: this.headers,
      schema: (_h = settings.db) === null || _h === void 0 ? void 0 : _h.schema,
      fetch: this.fetch
    });
    this._listenForAuthEvents();
  }
  /**
   * Supabase Functions allows you to deploy and invoke edge functions.
   */
  _createClass(SupabaseClient, [{
    key: "functions",
    get: function get() {
      return new functions_js_1.FunctionsClient(this.functionsUrl, {
        headers: this.headers,
        customFetch: this.fetch
      });
    }
    /**
     * Supabase Storage allows you to manage user-generated content, such as photos or videos.
     */
  }, {
    key: "storage",
    get: function get() {
      return new storage_js_1.StorageClient(this.storageUrl, this.headers, this.fetch);
    }
  }, {
    key: "from",
    value: function from(relation) {
      return this.rest.from(relation);
    }
    /**
     * Perform a function call.
     *
     * @param fn  The function name to call.
     * @param args  The parameters to pass to the function call.
     * @param options.head   When set to true, no data will be returned.
     * @param options.count  Count algorithm to use to count rows in a table.
     *
     */
  }, {
    key: "rpc",
    value: function rpc(fn) {
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 ? arguments[2] : undefined;
      return this.rest.rpc(fn, args, options);
    }
    /**
     * Creates a Realtime channel with Broadcast, Presence, and Postgres Changes.
     *
     * @param {string} name - The name of the Realtime channel.
     * @param {Object} opts - The options to pass to the Realtime channel.
     *
     */
  }, {
    key: "channel",
    value: function channel(name) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        config: {}
      };
      return this.realtime.channel(name, opts);
    }
    /**
     * Returns all Realtime channels.
     */
  }, {
    key: "getChannels",
    value: function getChannels() {
      return this.realtime.getChannels();
    }
    /**
     * Unsubscribes and removes Realtime channel from Realtime client.
     *
     * @param {RealtimeChannel} channel - The name of the Realtime channel.
     *
     */
  }, {
    key: "removeChannel",
    value: function removeChannel(channel) {
      return this.realtime.removeChannel(channel);
    }
    /**
     * Unsubscribes and removes all Realtime channels from Realtime client.
     */
  }, {
    key: "removeAllChannels",
    value: function removeAllChannels() {
      return this.realtime.removeAllChannels();
    }
  }, {
    key: "_getAccessToken",
    value: function _getAccessToken() {
      var _a, _b;
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$this$auth$getS, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.auth.getSession();
            case 2:
              _yield$this$auth$getS = _context.sent;
              data = _yield$this$auth$getS.data;
              return _context.abrupt("return", (_b = (_a = data.session) === null || _a === void 0 ? void 0 : _a.access_token) !== null && _b !== void 0 ? _b : null);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "_initSupabaseAuthClient",
    value: function _initSupabaseAuthClient(_ref, headers, fetch) {
      var autoRefreshToken = _ref.autoRefreshToken,
        persistSession = _ref.persistSession,
        detectSessionInUrl = _ref.detectSessionInUrl,
        storage = _ref.storage,
        storageKey = _ref.storageKey;
      var authHeaders = {
        Authorization: "Bearer ".concat(this.supabaseKey),
        apikey: "".concat(this.supabaseKey)
      };
      return new SupabaseAuthClient_1.SupabaseAuthClient({
        url: this.authUrl,
        headers: Object.assign(Object.assign({}, authHeaders), headers),
        storageKey: storageKey,
        autoRefreshToken: autoRefreshToken,
        persistSession: persistSession,
        detectSessionInUrl: detectSessionInUrl,
        storage: storage,
        fetch: fetch
      });
    }
  }, {
    key: "_initRealtimeClient",
    value: function _initRealtimeClient(options) {
      return new realtime_js_1.RealtimeClient(this.realtimeUrl, Object.assign(Object.assign({}, options), {
        params: Object.assign({
          apikey: this.supabaseKey
        }, options === null || options === void 0 ? void 0 : options.params)
      }));
    }
  }, {
    key: "_listenForAuthEvents",
    value: function _listenForAuthEvents() {
      var _this = this;
      var data = this.auth.onAuthStateChange(function (event, session) {
        _this._handleTokenChanged(event, session === null || session === void 0 ? void 0 : session.access_token, 'CLIENT');
      });
      return data;
    }
  }, {
    key: "_handleTokenChanged",
    value: function _handleTokenChanged(event, token, source) {
      if ((event === 'TOKEN_REFRESHED' || event === 'SIGNED_IN') && this.changedAccessToken !== token) {
        // Token has changed
        this.realtime.setAuth(token !== null && token !== void 0 ? token : null);
        this.changedAccessToken = token;
      } else if (event === 'SIGNED_OUT' || event === 'USER_DELETED') {
        // Token is removed
        this.realtime.setAuth(this.supabaseKey);
        if (source == 'STORAGE') this.auth.signOut();
      }
    }
  }]);
  return SupabaseClient;
}();
exports["default"] = SupabaseClient;

},{"./lib/SupabaseAuthClient":48,"./lib/constants":49,"./lib/fetch":50,"./lib/helpers":51,"@supabase/functions-js":5,"@supabase/postgrest-js":24,"@supabase/realtime-js":29,"@supabase/storage-js":37}],47:[function(require,module,exports){
"use strict";

var __createBinding = void 0 && (void 0).__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __exportStar = void 0 && (void 0).__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createClient = exports.SupabaseClient = exports.FunctionsError = exports.FunctionsRelayError = exports.FunctionsFetchError = exports.FunctionsHttpError = void 0;
var SupabaseClient_1 = __importDefault(require("./SupabaseClient"));
__exportStar(require("@supabase/gotrue-js"), exports);
var functions_js_1 = require("@supabase/functions-js");
Object.defineProperty(exports, "FunctionsHttpError", {
  enumerable: true,
  get: function get() {
    return functions_js_1.FunctionsHttpError;
  }
});
Object.defineProperty(exports, "FunctionsFetchError", {
  enumerable: true,
  get: function get() {
    return functions_js_1.FunctionsFetchError;
  }
});
Object.defineProperty(exports, "FunctionsRelayError", {
  enumerable: true,
  get: function get() {
    return functions_js_1.FunctionsRelayError;
  }
});
Object.defineProperty(exports, "FunctionsError", {
  enumerable: true,
  get: function get() {
    return functions_js_1.FunctionsError;
  }
});
__exportStar(require("@supabase/realtime-js"), exports);
var SupabaseClient_2 = require("./SupabaseClient");
Object.defineProperty(exports, "SupabaseClient", {
  enumerable: true,
  get: function get() {
    return __importDefault(SupabaseClient_2)["default"];
  }
});
/**
 * Creates a new Supabase Client.
 */
var createClient = function createClient(supabaseUrl, supabaseKey, options) {
  return new SupabaseClient_1["default"](supabaseUrl, supabaseKey, options);
};
exports.createClient = createClient;

},{"./SupabaseClient":46,"@supabase/functions-js":5,"@supabase/gotrue-js":9,"@supabase/realtime-js":29}],48:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SupabaseAuthClient = void 0;
var gotrue_js_1 = require("@supabase/gotrue-js");
var SupabaseAuthClient = /*#__PURE__*/function (_gotrue_js_1$GoTrueCl) {
  _inherits(SupabaseAuthClient, _gotrue_js_1$GoTrueCl);
  var _super = _createSuper(SupabaseAuthClient);
  function SupabaseAuthClient(options) {
    _classCallCheck(this, SupabaseAuthClient);
    return _super.call(this, options);
  }
  return _createClass(SupabaseAuthClient);
}(gotrue_js_1.GoTrueClient);
exports.SupabaseAuthClient = SupabaseAuthClient;

},{"@supabase/gotrue-js":9}],49:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_HEADERS = void 0;
// constants.ts
var version_1 = require("./version");
exports.DEFAULT_HEADERS = {
  'X-Client-Info': "supabase-js/".concat(version_1.version)
};

},{"./version":52}],50:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
var __createBinding = void 0 && (void 0).__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = void 0 && (void 0).__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchWithAuth = exports.resolveHeadersConstructor = exports.resolveFetch = void 0;
var cross_fetch_1 = __importStar(require("cross-fetch"));
var resolveFetch = function resolveFetch(customFetch) {
  var _fetch;
  if (customFetch) {
    _fetch = customFetch;
  } else if (typeof fetch === 'undefined') {
    _fetch = cross_fetch_1["default"];
  } else {
    _fetch = fetch;
  }
  return function () {
    return _fetch.apply(void 0, arguments);
  };
};
exports.resolveFetch = resolveFetch;
var resolveHeadersConstructor = function resolveHeadersConstructor() {
  if (typeof Headers === 'undefined') {
    return cross_fetch_1.Headers;
  }
  return Headers;
};
exports.resolveHeadersConstructor = resolveHeadersConstructor;
var fetchWithAuth = function fetchWithAuth(supabaseKey, getAccessToken, customFetch) {
  var fetch = (0, exports.resolveFetch)(customFetch);
  var HeadersConstructor = (0, exports.resolveHeadersConstructor)();
  return function (input, init) {
    return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _a, accessToken, headers;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getAccessToken();
          case 2:
            _context.t1 = _a = _context.sent;
            _context.t0 = _context.t1 !== null;
            if (!_context.t0) {
              _context.next = 6;
              break;
            }
            _context.t0 = _a !== void 0;
          case 6:
            if (!_context.t0) {
              _context.next = 10;
              break;
            }
            _context.t2 = _a;
            _context.next = 11;
            break;
          case 10:
            _context.t2 = supabaseKey;
          case 11:
            accessToken = _context.t2;
            headers = new HeadersConstructor(init === null || init === void 0 ? void 0 : init.headers);
            if (!headers.has('apikey')) {
              headers.set('apikey', supabaseKey);
            }
            if (!headers.has('Authorization')) {
              headers.set('Authorization', "Bearer ".concat(accessToken));
            }
            return _context.abrupt("return", fetch(input, Object.assign(Object.assign({}, init), {
              headers: headers
            })));
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
  };
};
exports.fetchWithAuth = fetchWithAuth;

},{"cross-fetch":59}],51:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applySettingDefaults = exports.isBrowser = exports.stripTrailingSlash = exports.uuid = void 0;
function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
      v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}
exports.uuid = uuid;
function stripTrailingSlash(url) {
  return url.replace(/\/$/, '');
}
exports.stripTrailingSlash = stripTrailingSlash;
var isBrowser = function isBrowser() {
  return typeof window !== 'undefined';
};
exports.isBrowser = isBrowser;
function applySettingDefaults(options, defaults) {
  var dbOptions = options.db,
    authOptions = options.auth,
    realtimeOptions = options.realtime,
    globalOptions = options.global;
  var DEFAULT_DB_OPTIONS = defaults.db,
    DEFAULT_AUTH_OPTIONS = defaults.auth,
    DEFAULT_REALTIME_OPTIONS = defaults.realtime,
    DEFAULT_GLOBAL_OPTIONS = defaults.global;
  return {
    db: Object.assign(Object.assign({}, DEFAULT_DB_OPTIONS), dbOptions),
    auth: Object.assign(Object.assign({}, DEFAULT_AUTH_OPTIONS), authOptions),
    realtime: Object.assign(Object.assign({}, DEFAULT_REALTIME_OPTIONS), realtimeOptions),
    global: Object.assign(Object.assign({}, DEFAULT_GLOBAL_OPTIONS), globalOptions)
  };
}
exports.applySettingDefaults = applySettingDefaults;

},{}],52:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.version = void 0;
exports.version = '2.2.2';

},{}],53:[function(require,module,exports){
'use strict';

exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;
function getLens(b64) {
  var len = b64.length;
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4');
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=');
  if (validLen === -1) validLen = len;
  var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
  return [validLen, placeHoldersLen];
}

// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
  var tmp;
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
  var curByte = 0;

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
  var i;
  for (i = 0; i < len; i += 4) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[curByte++] = tmp >> 16 & 0xFF;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }
  if (placeHoldersLen === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[curByte++] = tmp & 0xFF;
  }
  if (placeHoldersLen === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }
  return arr;
}
function tripletToBase64(num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
    output.push(tripletToBase64(tmp));
  }
  return output.join('');
}
function fromByteArray(uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
  }
  return parts.join('');
}

},{}],54:[function(require,module,exports){
(function (Buffer){(function (){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var base64 = require('base64-js');
var ieee754 = require('ieee754');
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
var K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') {
  console.error('This browser lacks typed array (Uint8Array) support which is required by ' + '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.');
}
function typedArraySupport() {
  // Can typed array instances can be augmented?
  try {
    var arr = new Uint8Array(1);
    arr.__proto__ = {
      __proto__: Uint8Array.prototype,
      foo: function foo() {
        return 42;
      }
    };
    return arr.foo() === 42;
  } catch (e) {
    return false;
  }
}
Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function get() {
    if (!Buffer.isBuffer(this)) return undefined;
    return this.buffer;
  }
});
Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function get() {
    if (!Buffer.isBuffer(this)) return undefined;
    return this.byteOffset;
  }
});
function createBuffer(length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"');
  }
  // Return an augmented `Uint8Array` instance
  var buf = new Uint8Array(length);
  buf.__proto__ = Buffer.prototype;
  return buf;
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer(arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError('The "string" argument must be of type string. Received type number');
    }
    return allocUnsafe(arg);
  }
  return from(arg, encodingOrOffset, length);
}

// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
if (typeof Symbol !== 'undefined' && Symbol.species != null && Buffer[Symbol.species] === Buffer) {
  Object.defineProperty(Buffer, Symbol.species, {
    value: null,
    configurable: true,
    enumerable: false,
    writable: false
  });
}
Buffer.poolSize = 8192; // not used by this implementation

function from(value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset);
  }
  if (ArrayBuffer.isView(value)) {
    return fromArrayLike(value);
  }
  if (value == null) {
    throw TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' + 'or Array-like Object. Received type ' + _typeof(value));
  }
  if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
    return fromArrayBuffer(value, encodingOrOffset, length);
  }
  if (typeof value === 'number') {
    throw new TypeError('The "value" argument must not be of type number. Received type number');
  }
  var valueOf = value.valueOf && value.valueOf();
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length);
  }
  var b = fromObject(value);
  if (b) return b;
  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
  }
  throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' + 'or Array-like Object. Received type ' + _typeof(value));
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length);
};

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Buffer.prototype.__proto__ = Uint8Array.prototype;
Buffer.__proto__ = Uint8Array;
function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number');
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"');
  }
}
function alloc(size, fill, encoding) {
  assertSize(size);
  if (size <= 0) {
    return createBuffer(size);
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
  }
  return createBuffer(size);
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
  assertSize(size);
  return createBuffer(size < 0 ? 0 : checked(size) | 0);
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size);
};
function fromString(string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }
  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding);
  }
  var length = byteLength(string, encoding) | 0;
  var buf = createBuffer(length);
  var actual = buf.write(string, encoding);
  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
  }
  return buf;
}
function fromArrayLike(array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  var buf = createBuffer(length);
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255;
  }
  return buf;
}
function fromArrayBuffer(array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds');
  }
  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds');
  }
  var buf;
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array);
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset);
  } else {
    buf = new Uint8Array(array, byteOffset, length);
  }

  // Return an augmented `Uint8Array` instance
  buf.__proto__ = Buffer.prototype;
  return buf;
}
function fromObject(obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0;
    var buf = createBuffer(len);
    if (buf.length === 0) {
      return buf;
    }
    obj.copy(buf, 0, 0, len);
    return buf;
  }
  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0);
    }
    return fromArrayLike(obj);
  }
  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data);
  }
}
function checked(length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes');
  }
  return length | 0;
}
function SlowBuffer(length) {
  if (+length != length) {
    // eslint-disable-line eqeqeq
    length = 0;
  }
  return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
  return b != null && b._isBuffer === true && b !== Buffer.prototype; // so Buffer.isBuffer(Buffer.prototype) will be false
};

Buffer.compare = function compare(a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
  }
  if (a === b) return 0;
  var x = a.length;
  var y = b.length;
  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }
  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;
    default:
      return false;
  }
};
Buffer.concat = function concat(list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }
  if (list.length === 0) {
    return Buffer.alloc(0);
  }
  var i;
  if (length === undefined) {
    length = 0;
    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }
  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;
  for (i = 0; i < list.length; ++i) {
    var buf = list[i];
    if (isInstance(buf, Uint8Array)) {
      buf = Buffer.from(buf);
    }
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }
    buf.copy(buffer, pos);
    pos += buf.length;
  }
  return buffer;
};
function byteLength(string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length;
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength;
  }
  if (typeof string !== 'string') {
    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' + 'Received type ' + _typeof(string));
  }
  var len = string.length;
  var mustMatch = arguments.length > 2 && arguments[2] === true;
  if (!mustMatch && len === 0) return 0;

  // Use a for loop to avoid recursion
  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len;
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length;
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2;
      case 'hex':
        return len >>> 1;
      case 'base64':
        return base64ToBytes(string).length;
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length; // assume utf8
        }

        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
  var loweredCase = false;

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0;
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return '';
  }
  if (end === undefined || end > this.length) {
    end = this.length;
  }
  if (end <= 0) {
    return '';
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0;
  start >>>= 0;
  if (end <= start) {
    return '';
  }
  if (!encoding) encoding = 'utf8';
  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end);
      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end);
      case 'ascii':
        return asciiSlice(this, start, end);
      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end);
      case 'base64':
        return base64Slice(this, start, end);
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end);
      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
  var len = this.length;
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits');
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }
  return this;
};
Buffer.prototype.swap32 = function swap32() {
  var len = this.length;
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits');
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }
  return this;
};
Buffer.prototype.swap64 = function swap64() {
  var len = this.length;
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits');
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }
  return this;
};
Buffer.prototype.toString = function toString() {
  var length = this.length;
  if (length === 0) return '';
  if (arguments.length === 0) return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
  if (this === b) return true;
  return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
  var str = '';
  var max = exports.INSPECT_MAX_BYTES;
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
  if (this.length > max) str += ' ... ';
  return '<Buffer ' + str + '>';
};
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength);
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. ' + 'Received type ' + _typeof(target));
  }
  if (start === undefined) {
    start = 0;
  }
  if (end === undefined) {
    end = target ? target.length : 0;
  }
  if (thisStart === undefined) {
    thisStart = 0;
  }
  if (thisEnd === undefined) {
    thisEnd = this.length;
  }
  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index');
  }
  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }
  if (thisStart >= thisEnd) {
    return -1;
  }
  if (start >= end) {
    return 1;
  }
  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;
  if (this === target) return 0;
  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);
  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);
  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }
  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1;

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }
  byteOffset = +byteOffset; // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
  if (byteOffset >= buffer.length) {
    if (dir) return -1;else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;else return -1;
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1;
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }
  throw new TypeError('val must be string, number or Buffer');
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;
  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();
    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }
      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }
  function read(buf, i) {
    if (indexSize === 1) {
      return buf[i];
    } else {
      return buf.readUInt16BE(i * indexSize);
    }
  }
  var i;
  if (dir) {
    var foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
    for (i = byteOffset; i >= 0; i--) {
      var found = true;
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break;
        }
      }
      if (found) return i;
    }
  }
  return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = Number(length);
    if (length > remaining) {
      length = remaining;
    }
  }
  var strLen = string.length;
  if (length > strLen / 2) {
    length = strLen / 2;
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (numberIsNaN(parsed)) return i;
    buf[offset + i] = parsed;
  }
  return i;
}
function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}
function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0;
    // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0;
    if (isFinite(length)) {
      length = length >>> 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    }
  } else {
    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
  }
  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;
  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds');
  }
  if (!encoding) encoding = 'utf8';
  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length);
      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length);
      case 'ascii':
        return asciiWrite(this, string, offset, length);
      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length);
      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length);
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length);
      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};
Buffer.prototype.toJSON = function toJSON() {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};
function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf);
  } else {
    return base64.fromByteArray(buf.slice(start, end));
  }
}
function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];
  var i = start;
  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;
      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }
          break;
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }
      }
    }
    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }
    res.push(codePoint);
    i += bytesPerSequence;
  }
  return decodeCodePointsArray(res);
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = '';
  var i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }
  return res;
}
function asciiSlice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);
  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }
  return ret;
}
function latin1Slice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);
  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret;
}
function hexSlice(buf, start, end) {
  var len = buf.length;
  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;
  var out = '';
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }
  return out;
}
function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res;
}
Buffer.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;
  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }
  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }
  if (end < start) end = start;
  var newBuf = this.subarray(start, end);
  // Return an augmented `Uint8Array` instance
  newBuf.__proto__ = Buffer.prototype;
  return newBuf;
};

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}
Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }
  return val;
};
Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }
  var val = this[offset + --byteLength];
  var mul = 1;
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }
  return val;
};
Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};
Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }
  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }
  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return this[offset];
  return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | this[offset + 1] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | this[offset] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
}
Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }
  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }
  return offset + byteLength;
};
Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }
  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }
  return offset + byteLength;
};
Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  this[offset] = value & 0xff;
  return offset + 1;
};
Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  this[offset] = value & 0xff;
  this[offset + 1] = value >>> 8;
  return offset + 2;
};
Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  this[offset] = value >>> 8;
  this[offset + 1] = value & 0xff;
  return offset + 2;
};
Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  this[offset + 3] = value >>> 24;
  this[offset + 2] = value >>> 16;
  this[offset + 1] = value >>> 8;
  this[offset] = value & 0xff;
  return offset + 4;
};
Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  this[offset] = value >>> 24;
  this[offset + 1] = value >>> 16;
  this[offset + 2] = value >>> 8;
  this[offset + 3] = value & 0xff;
  return offset + 4;
};
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }
  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }
  return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }
  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }
  return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = value & 0xff;
  return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  this[offset] = value & 0xff;
  this[offset + 1] = value >>> 8;
  return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  this[offset] = value >>> 8;
  this[offset + 1] = value & 0xff;
  return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  this[offset] = value & 0xff;
  this[offset + 1] = value >>> 8;
  this[offset + 2] = value >>> 16;
  this[offset + 3] = value >>> 24;
  return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;
  this[offset] = value >>> 24;
  this[offset + 1] = value >>> 16;
  this[offset + 2] = value >>> 8;
  this[offset + 3] = value & 0xff;
  return offset + 4;
};
function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
  if (offset < 0) throw new RangeError('Index out of range');
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
};

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start;

  // Copy 0 bytes; we're done
  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0;

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
  if (end < 0) throw new RangeError('sourceEnd out of bounds');

  // Are we oob?
  if (end > this.length) end = this.length;
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }
  var len = end - start;
  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
  } else if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (var i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
  }
  return len;
};

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string');
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding);
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0);
      if (encoding === 'utf8' && code < 128 || encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code;
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index');
  }
  if (end <= start) {
    return this;
  }
  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;
  if (!val) val = 0;
  var i;
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
    var len = bytes.length;
    if (len === 0) {
      throw new TypeError('The value "' + val + '" is invalid for argument "value"');
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }
  return this;
};

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0];
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '');
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return '';
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '=';
  }
  return str;
}
function toHex(n) {
  if (n < 16) return '0' + n.toString(16);
  return n.toString(16);
}
function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];
  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        }

        // valid lead
        leadSurrogate = codePoint;
        continue;
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue;
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }
    leadSurrogate = null;

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else {
      throw new Error('Invalid code point');
    }
  }
  return bytes;
}
function asciiToBytes(str) {
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }
  return byteArray;
}
function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break;
    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }
  return byteArray;
}
function base64ToBytes(str) {
  return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }
  return i;
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
  return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
  // For IE11 support
  return obj !== obj; // eslint-disable-line no-self-compare
}

}).call(this)}).call(this,require("buffer").Buffer)

},{"base64-js":53,"buffer":54,"ieee754":64}],55:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var assert = require('assert');
var LRU = require('nanolru');
module.exports = ChooComponentCache;
function ChooComponentCache(state, emit, lru) {
  assert.ok(this instanceof ChooComponentCache, 'ChooComponentCache should be created with `new`');
  assert.equal(_typeof(state), 'object', 'ChooComponentCache: state should be type object');
  assert.equal(_typeof(emit), 'function', 'ChooComponentCache: emit should be type function');
  if (typeof lru === 'number') this.cache = new LRU(lru);else this.cache = lru || new LRU(100);
  this.state = state;
  this.emit = emit;
}

// Get & create component instances.
ChooComponentCache.prototype.render = function (Component, id) {
  assert.equal(_typeof(Component), 'function', 'ChooComponentCache.render: Component should be type function');
  assert.ok(typeof id === 'string' || typeof id === 'number', 'ChooComponentCache.render: id should be type string or type number');
  var el = this.cache.get(id);
  if (!el) {
    var args = [];
    for (var i = 2, len = arguments.length; i < len; i++) {
      args.push(arguments[i]);
    }
    args.unshift(Component, id, this.state, this.emit);
    el = newCall.apply(newCall, args);
    this.cache.set(id, el);
  }
  return el;
};

// Because you can't call `new` and `.apply()` at the same time. This is a mad
// hack, but hey it works so we gonna go for it. Whoop.
function newCall(Cls) {
  return new (Cls.bind.apply(Cls, arguments))(); // eslint-disable-line
}

},{"assert":65,"nanolru":75}],56:[function(require,module,exports){
"use strict";

module.exports = require('nanohtml');

},{"nanohtml":70}],57:[function(require,module,exports){
"use strict";

module.exports = require('nanohtml/raw');

},{"nanohtml/raw":73}],58:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var scrollToAnchor = require('scroll-to-anchor');
var documentReady = require('document-ready');
var nanotiming = require('nanotiming');
var nanorouter = require('nanorouter');
var nanomorph = require('nanomorph');
var nanoquery = require('nanoquery');
var nanohref = require('nanohref');
var nanoraf = require('nanoraf');
var nanobus = require('nanobus');
var assert = require('assert');
var Cache = require('./component/cache');
module.exports = Choo;
var HISTORY_OBJECT = {};
function Choo(opts) {
  var timing = nanotiming('choo.constructor');
  if (!(this instanceof Choo)) return new Choo(opts);
  opts = opts || {};
  assert.equal(_typeof(opts), 'object', 'choo: opts should be type object');
  var self = this;

  // define events used by choo
  this._events = {
    DOMCONTENTLOADED: 'DOMContentLoaded',
    DOMTITLECHANGE: 'DOMTitleChange',
    REPLACESTATE: 'replaceState',
    PUSHSTATE: 'pushState',
    NAVIGATE: 'navigate',
    POPSTATE: 'popState',
    RENDER: 'render'
  };

  // properties for internal use only
  this._historyEnabled = opts.history === undefined ? true : opts.history;
  this._hrefEnabled = opts.href === undefined ? true : opts.href;
  this._hashEnabled = opts.hash === undefined ? false : opts.hash;
  this._hasWindow = typeof window !== 'undefined';
  this._cache = opts.cache;
  this._loaded = false;
  this._stores = [ondomtitlechange];
  this._tree = null;

  // state
  var _state = {
    events: this._events,
    components: {}
  };
  if (this._hasWindow) {
    this.state = window.initialState ? Object.assign({}, window.initialState, _state) : _state;
    delete window.initialState;
  } else {
    this.state = _state;
  }

  // properties that are part of the API
  this.router = nanorouter({
    curry: true
  });
  this.emitter = nanobus('choo.emit');
  this.emit = this.emitter.emit.bind(this.emitter);

  // listen for title changes; available even when calling .toString()
  if (this._hasWindow) this.state.title = document.title;
  function ondomtitlechange(state) {
    self.emitter.prependListener(self._events.DOMTITLECHANGE, function (title) {
      assert.equal(_typeof(title), 'string', 'events.DOMTitleChange: title should be type string');
      state.title = title;
      if (self._hasWindow) document.title = title;
    });
  }
  timing();
}
Choo.prototype.route = function (route, handler) {
  var routeTiming = nanotiming("choo.route('" + route + "')");
  assert.equal(_typeof(route), 'string', 'choo.route: route should be type string');
  assert.equal(_typeof(handler), 'function', 'choo.handler: route should be type function');
  this.router.on(route, handler);
  routeTiming();
};
Choo.prototype.use = function (cb) {
  assert.equal(_typeof(cb), 'function', 'choo.use: cb should be type function');
  var self = this;
  this._stores.push(function (state) {
    var msg = 'choo.use';
    msg = cb.storeName ? msg + '(' + cb.storeName + ')' : msg;
    var endTiming = nanotiming(msg);
    cb(state, self.emitter, self);
    endTiming();
  });
};
Choo.prototype.start = function () {
  assert.equal(typeof window === "undefined" ? "undefined" : _typeof(window), 'object', 'choo.start: window was not found. .start() must be called in a browser, use .toString() if running in Node');
  var startTiming = nanotiming('choo.start');
  var self = this;
  if (this._historyEnabled) {
    this.emitter.prependListener(this._events.NAVIGATE, function () {
      self._matchRoute(self.state);
      if (self._loaded) {
        self.emitter.emit(self._events.RENDER);
        setTimeout(scrollToAnchor.bind(null, window.location.hash), 0);
      }
    });
    this.emitter.prependListener(this._events.POPSTATE, function () {
      self.emitter.emit(self._events.NAVIGATE);
    });
    this.emitter.prependListener(this._events.PUSHSTATE, function (href) {
      assert.equal(_typeof(href), 'string', 'events.pushState: href should be type string');
      window.history.pushState(HISTORY_OBJECT, null, href);
      self.emitter.emit(self._events.NAVIGATE);
    });
    this.emitter.prependListener(this._events.REPLACESTATE, function (href) {
      assert.equal(_typeof(href), 'string', 'events.replaceState: href should be type string');
      window.history.replaceState(HISTORY_OBJECT, null, href);
      self.emitter.emit(self._events.NAVIGATE);
    });
    window.onpopstate = function () {
      self.emitter.emit(self._events.POPSTATE);
    };
    if (self._hrefEnabled) {
      nanohref(function (location) {
        var href = location.href;
        var hash = location.hash;
        if (href === window.location.href) {
          if (!self._hashEnabled && hash) scrollToAnchor(hash);
          return;
        }
        self.emitter.emit(self._events.PUSHSTATE, href);
      });
    }
  }
  this._setCache(this.state);
  this._matchRoute(this.state);
  this._stores.forEach(function (initStore) {
    initStore(self.state);
  });
  this._tree = this._prerender(this.state);
  assert.ok(this._tree, 'choo.start: no valid DOM node returned for location ' + this.state.href);
  this.emitter.prependListener(self._events.RENDER, nanoraf(function () {
    var renderTiming = nanotiming('choo.render');
    var newTree = self._prerender(self.state);
    assert.ok(newTree, 'choo.render: no valid DOM node returned for location ' + self.state.href);
    assert.equal(self._tree.nodeName, newTree.nodeName, 'choo.render: The target node <' + self._tree.nodeName.toLowerCase() + '> is not the same type as the new node <' + newTree.nodeName.toLowerCase() + '>.');
    var morphTiming = nanotiming('choo.morph');
    nanomorph(self._tree, newTree);
    morphTiming();
    renderTiming();
  }));
  documentReady(function () {
    self.emitter.emit(self._events.DOMCONTENTLOADED);
    self._loaded = true;
  });
  startTiming();
  return this._tree;
};
Choo.prototype.mount = function mount(selector) {
  var mountTiming = nanotiming("choo.mount('" + selector + "')");
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== 'object') {
    assert.ok(typeof selector === 'string', 'choo.mount: selector should be type String');
    this.selector = selector;
    mountTiming();
    return this;
  }
  assert.ok(typeof selector === 'string' || _typeof(selector) === 'object', 'choo.mount: selector should be type String or HTMLElement');
  var self = this;
  documentReady(function () {
    var renderTiming = nanotiming('choo.render');
    var newTree = self.start();
    if (typeof selector === 'string') {
      self._tree = document.querySelector(selector);
    } else {
      self._tree = selector;
    }
    assert.ok(self._tree, 'choo.mount: could not query selector: ' + selector);
    assert.equal(self._tree.nodeName, newTree.nodeName, 'choo.mount: The target node <' + self._tree.nodeName.toLowerCase() + '> is not the same type as the new node <' + newTree.nodeName.toLowerCase() + '>.');
    var morphTiming = nanotiming('choo.morph');
    nanomorph(self._tree, newTree);
    morphTiming();
    renderTiming();
  });
  mountTiming();
};
Choo.prototype.toString = function (location, state) {
  state = state || {};
  state.components = state.components || {};
  state.events = Object.assign({}, state.events, this._events);
  assert.notEqual(typeof window === "undefined" ? "undefined" : _typeof(window), 'object', 'choo.mount: window was found. .toString() must be called in Node, use .start() or .mount() if running in the browser');
  assert.equal(_typeof(location), 'string', 'choo.toString: location should be type string');
  assert.equal(_typeof(state), 'object', 'choo.toString: state should be type object');
  this._setCache(state);
  this._matchRoute(state, location);
  this.emitter.removeAllListeners();
  this._stores.forEach(function (initStore) {
    initStore(state);
  });
  var html = this._prerender(state);
  assert.ok(html, 'choo.toString: no valid value returned for the route ' + location);
  assert(!Array.isArray(html), 'choo.toString: return value was an array for the route ' + location);
  return typeof html.outerHTML === 'string' ? html.outerHTML : html.toString();
};
Choo.prototype._matchRoute = function (state, locationOverride) {
  var location, queryString;
  if (locationOverride) {
    location = locationOverride.replace(/\?.+$/, '').replace(/\/$/, '');
    if (!this._hashEnabled) location = location.replace(/#.+$/, '');
    queryString = locationOverride;
  } else {
    location = window.location.pathname.replace(/\/$/, '');
    if (this._hashEnabled) location += window.location.hash.replace(/^#/, '/');
    queryString = window.location.search;
  }
  var matched = this.router.match(location);
  this._handler = matched.cb;
  state.href = location;
  state.query = nanoquery(queryString);
  state.route = matched.route;
  state.params = matched.params;
};
Choo.prototype._prerender = function (state) {
  var routeTiming = nanotiming("choo.prerender('" + state.route + "')");
  var res = this._handler(state, this.emit);
  routeTiming();
  return res;
};
Choo.prototype._setCache = function (state) {
  var cache = new Cache(state, this.emitter.emit.bind(this.emitter), this._cache);
  state.cache = renderComponent;
  function renderComponent(Component, id) {
    assert.equal(_typeof(Component), 'function', 'choo.state.cache: Component should be type function');
    var args = [];
    for (var i = 0, len = arguments.length; i < len; i++) {
      args.push(arguments[i]);
    }
    return cache.render.apply(cache, args);
  }

  // When the state gets stringified, make sure `state.cache` isn't
  // stringified too.
  renderComponent.toJSON = function () {
    return null;
  };
};

},{"./component/cache":55,"assert":65,"document-ready":60,"nanobus":66,"nanohref":67,"nanomorph":76,"nanoquery":79,"nanoraf":80,"nanorouter":81,"nanotiming":83,"scroll-to-anchor":85}],59:[function(require,module,exports){
"use strict";

var global = typeof self !== 'undefined' ? self : void 0;
var __self__ = function () {
  function F() {
    this.fetch = false;
    this.DOMException = global.DOMException;
  }
  F.prototype = global;
  return new F();
}();
(function (self) {
  var irrelevant = function (exports) {
    var support = {
      searchParams: 'URLSearchParams' in self,
      iterable: 'Symbol' in self && 'iterator' in Symbol,
      blob: 'FileReader' in self && 'Blob' in self && function () {
        try {
          new Blob();
          return true;
        } catch (e) {
          return false;
        }
      }(),
      formData: 'FormData' in self,
      arrayBuffer: 'ArrayBuffer' in self
    };
    function isDataView(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj);
    }
    if (support.arrayBuffer) {
      var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];
      var isArrayBufferView = ArrayBuffer.isView || function (obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
      };
    }
    function normalizeName(name) {
      if (typeof name !== 'string') {
        name = String(name);
      }
      if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
        throw new TypeError('Invalid character in header field name');
      }
      return name.toLowerCase();
    }
    function normalizeValue(value) {
      if (typeof value !== 'string') {
        value = String(value);
      }
      return value;
    }

    // Build a destructive iterator for the value list
    function iteratorFor(items) {
      var iterator = {
        next: function next() {
          var value = items.shift();
          return {
            done: value === undefined,
            value: value
          };
        }
      };
      if (support.iterable) {
        iterator[Symbol.iterator] = function () {
          return iterator;
        };
      }
      return iterator;
    }
    function Headers(headers) {
      this.map = {};
      if (headers instanceof Headers) {
        headers.forEach(function (value, name) {
          this.append(name, value);
        }, this);
      } else if (Array.isArray(headers)) {
        headers.forEach(function (header) {
          this.append(header[0], header[1]);
        }, this);
      } else if (headers) {
        Object.getOwnPropertyNames(headers).forEach(function (name) {
          this.append(name, headers[name]);
        }, this);
      }
    }
    Headers.prototype.append = function (name, value) {
      name = normalizeName(name);
      value = normalizeValue(value);
      var oldValue = this.map[name];
      this.map[name] = oldValue ? oldValue + ', ' + value : value;
    };
    Headers.prototype['delete'] = function (name) {
      delete this.map[normalizeName(name)];
    };
    Headers.prototype.get = function (name) {
      name = normalizeName(name);
      return this.has(name) ? this.map[name] : null;
    };
    Headers.prototype.has = function (name) {
      return this.map.hasOwnProperty(normalizeName(name));
    };
    Headers.prototype.set = function (name, value) {
      this.map[normalizeName(name)] = normalizeValue(value);
    };
    Headers.prototype.forEach = function (callback, thisArg) {
      for (var name in this.map) {
        if (this.map.hasOwnProperty(name)) {
          callback.call(thisArg, this.map[name], name, this);
        }
      }
    };
    Headers.prototype.keys = function () {
      var items = [];
      this.forEach(function (value, name) {
        items.push(name);
      });
      return iteratorFor(items);
    };
    Headers.prototype.values = function () {
      var items = [];
      this.forEach(function (value) {
        items.push(value);
      });
      return iteratorFor(items);
    };
    Headers.prototype.entries = function () {
      var items = [];
      this.forEach(function (value, name) {
        items.push([name, value]);
      });
      return iteratorFor(items);
    };
    if (support.iterable) {
      Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
    }
    function consumed(body) {
      if (body.bodyUsed) {
        return Promise.reject(new TypeError('Already read'));
      }
      body.bodyUsed = true;
    }
    function fileReaderReady(reader) {
      return new Promise(function (resolve, reject) {
        reader.onload = function () {
          resolve(reader.result);
        };
        reader.onerror = function () {
          reject(reader.error);
        };
      });
    }
    function readBlobAsArrayBuffer(blob) {
      var reader = new FileReader();
      var promise = fileReaderReady(reader);
      reader.readAsArrayBuffer(blob);
      return promise;
    }
    function readBlobAsText(blob) {
      var reader = new FileReader();
      var promise = fileReaderReady(reader);
      reader.readAsText(blob);
      return promise;
    }
    function readArrayBufferAsText(buf) {
      var view = new Uint8Array(buf);
      var chars = new Array(view.length);
      for (var i = 0; i < view.length; i++) {
        chars[i] = String.fromCharCode(view[i]);
      }
      return chars.join('');
    }
    function bufferClone(buf) {
      if (buf.slice) {
        return buf.slice(0);
      } else {
        var view = new Uint8Array(buf.byteLength);
        view.set(new Uint8Array(buf));
        return view.buffer;
      }
    }
    function Body() {
      this.bodyUsed = false;
      this._initBody = function (body) {
        this._bodyInit = body;
        if (!body) {
          this._bodyText = '';
        } else if (typeof body === 'string') {
          this._bodyText = body;
        } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
          this._bodyBlob = body;
        } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
          this._bodyFormData = body;
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this._bodyText = body.toString();
        } else if (support.arrayBuffer && support.blob && isDataView(body)) {
          this._bodyArrayBuffer = bufferClone(body.buffer);
          // IE 10-11 can't handle a DataView body.
          this._bodyInit = new Blob([this._bodyArrayBuffer]);
        } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
          this._bodyArrayBuffer = bufferClone(body);
        } else {
          this._bodyText = body = Object.prototype.toString.call(body);
        }
        if (!this.headers.get('content-type')) {
          if (typeof body === 'string') {
            this.headers.set('content-type', 'text/plain;charset=UTF-8');
          } else if (this._bodyBlob && this._bodyBlob.type) {
            this.headers.set('content-type', this._bodyBlob.type);
          } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
            this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
          }
        }
      };
      if (support.blob) {
        this.blob = function () {
          var rejected = consumed(this);
          if (rejected) {
            return rejected;
          }
          if (this._bodyBlob) {
            return Promise.resolve(this._bodyBlob);
          } else if (this._bodyArrayBuffer) {
            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
          } else if (this._bodyFormData) {
            throw new Error('could not read FormData body as blob');
          } else {
            return Promise.resolve(new Blob([this._bodyText]));
          }
        };
        this.arrayBuffer = function () {
          if (this._bodyArrayBuffer) {
            return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
          } else {
            return this.blob().then(readBlobAsArrayBuffer);
          }
        };
      }
      this.text = function () {
        var rejected = consumed(this);
        if (rejected) {
          return rejected;
        }
        if (this._bodyBlob) {
          return readBlobAsText(this._bodyBlob);
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as text');
        } else {
          return Promise.resolve(this._bodyText);
        }
      };
      if (support.formData) {
        this.formData = function () {
          return this.text().then(decode);
        };
      }
      this.json = function () {
        return this.text().then(JSON.parse);
      };
      return this;
    }

    // HTTP methods whose capitalization should be normalized
    var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
    function normalizeMethod(method) {
      var upcased = method.toUpperCase();
      return methods.indexOf(upcased) > -1 ? upcased : method;
    }
    function Request(input, options) {
      options = options || {};
      var body = options.body;
      if (input instanceof Request) {
        if (input.bodyUsed) {
          throw new TypeError('Already read');
        }
        this.url = input.url;
        this.credentials = input.credentials;
        if (!options.headers) {
          this.headers = new Headers(input.headers);
        }
        this.method = input.method;
        this.mode = input.mode;
        this.signal = input.signal;
        if (!body && input._bodyInit != null) {
          body = input._bodyInit;
          input.bodyUsed = true;
        }
      } else {
        this.url = String(input);
      }
      this.credentials = options.credentials || this.credentials || 'same-origin';
      if (options.headers || !this.headers) {
        this.headers = new Headers(options.headers);
      }
      this.method = normalizeMethod(options.method || this.method || 'GET');
      this.mode = options.mode || this.mode || null;
      this.signal = options.signal || this.signal;
      this.referrer = null;
      if ((this.method === 'GET' || this.method === 'HEAD') && body) {
        throw new TypeError('Body not allowed for GET or HEAD requests');
      }
      this._initBody(body);
    }
    Request.prototype.clone = function () {
      return new Request(this, {
        body: this._bodyInit
      });
    };
    function decode(body) {
      var form = new FormData();
      body.trim().split('&').forEach(function (bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
      return form;
    }
    function parseHeaders(rawHeaders) {
      var headers = new Headers();
      // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
      // https://tools.ietf.org/html/rfc7230#section-3.2
      var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
      preProcessedHeaders.split(/\r?\n/).forEach(function (line) {
        var parts = line.split(':');
        var key = parts.shift().trim();
        if (key) {
          var value = parts.join(':').trim();
          headers.append(key, value);
        }
      });
      return headers;
    }
    Body.call(Request.prototype);
    function Response(bodyInit, options) {
      if (!options) {
        options = {};
      }
      this.type = 'default';
      this.status = options.status === undefined ? 200 : options.status;
      this.ok = this.status >= 200 && this.status < 300;
      this.statusText = 'statusText' in options ? options.statusText : 'OK';
      this.headers = new Headers(options.headers);
      this.url = options.url || '';
      this._initBody(bodyInit);
    }
    Body.call(Response.prototype);
    Response.prototype.clone = function () {
      return new Response(this._bodyInit, {
        status: this.status,
        statusText: this.statusText,
        headers: new Headers(this.headers),
        url: this.url
      });
    };
    Response.error = function () {
      var response = new Response(null, {
        status: 0,
        statusText: ''
      });
      response.type = 'error';
      return response;
    };
    var redirectStatuses = [301, 302, 303, 307, 308];
    Response.redirect = function (url, status) {
      if (redirectStatuses.indexOf(status) === -1) {
        throw new RangeError('Invalid status code');
      }
      return new Response(null, {
        status: status,
        headers: {
          location: url
        }
      });
    };
    exports.DOMException = self.DOMException;
    try {
      new exports.DOMException();
    } catch (err) {
      exports.DOMException = function (message, name) {
        this.message = message;
        this.name = name;
        var error = Error(message);
        this.stack = error.stack;
      };
      exports.DOMException.prototype = Object.create(Error.prototype);
      exports.DOMException.prototype.constructor = exports.DOMException;
    }
    function fetch(input, init) {
      return new Promise(function (resolve, reject) {
        var request = new Request(input, init);
        if (request.signal && request.signal.aborted) {
          return reject(new exports.DOMException('Aborted', 'AbortError'));
        }
        var xhr = new XMLHttpRequest();
        function abortXhr() {
          xhr.abort();
        }
        xhr.onload = function () {
          var options = {
            status: xhr.status,
            statusText: xhr.statusText,
            headers: parseHeaders(xhr.getAllResponseHeaders() || '')
          };
          options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
          var body = 'response' in xhr ? xhr.response : xhr.responseText;
          resolve(new Response(body, options));
        };
        xhr.onerror = function () {
          reject(new TypeError('Network request failed'));
        };
        xhr.ontimeout = function () {
          reject(new TypeError('Network request failed'));
        };
        xhr.onabort = function () {
          reject(new exports.DOMException('Aborted', 'AbortError'));
        };
        xhr.open(request.method, request.url, true);
        if (request.credentials === 'include') {
          xhr.withCredentials = true;
        } else if (request.credentials === 'omit') {
          xhr.withCredentials = false;
        }
        if ('responseType' in xhr && support.blob) {
          xhr.responseType = 'blob';
        }
        request.headers.forEach(function (value, name) {
          xhr.setRequestHeader(name, value);
        });
        if (request.signal) {
          request.signal.addEventListener('abort', abortXhr);
          xhr.onreadystatechange = function () {
            // DONE (success or failure)
            if (xhr.readyState === 4) {
              request.signal.removeEventListener('abort', abortXhr);
            }
          };
        }
        xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
      });
    }
    fetch.polyfill = true;
    if (!self.fetch) {
      self.fetch = fetch;
      self.Headers = Headers;
      self.Request = Request;
      self.Response = Response;
    }
    exports.Headers = Headers;
    exports.Request = Request;
    exports.Response = Response;
    exports.fetch = fetch;
    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    return exports;
  }({});
})(__self__);
__self__.fetch.ponyfill = true;
// Remove "polyfill" property added by whatwg-fetch
delete __self__.fetch.polyfill;
// Choose between native implementation (global) or custom implementation (__self__)
// var ctx = global.fetch ? global : __self__;
var ctx = __self__; // this line disable service worker support temporarily
exports = ctx.fetch; // To enable: import fetch from 'cross-fetch'
exports["default"] = ctx.fetch; // For TypeScript consumers without esModuleInterop.
exports.fetch = ctx.fetch; // To enable: import {fetch} from 'cross-fetch'
exports.Headers = ctx.Headers;
exports.Request = ctx.Request;
exports.Response = ctx.Response;
module.exports = exports;

},{}],60:[function(require,module,exports){
'use strict';

module.exports = ready;
function ready(callback) {
  if (typeof document === 'undefined') {
    throw new Error('document-ready only runs in the browser');
  }
  var state = document.readyState;
  if (state === 'complete' || state === 'interactive') {
    return setTimeout(callback, 0);
  }
  document.addEventListener('DOMContentLoaded', function onLoad() {
    callback();
  });
}

},{}],61:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var naiveFallback = function naiveFallback() {
  if ((typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" && self) return self;
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && window) return window;
  throw new Error("Unable to resolve global `this`");
};
module.exports = function () {
  if (this) return this;

  // Unexpected strict mode (may happen if e.g. bundled into ESM module)

  // Fallback to standard globalThis if available
  if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === "object" && globalThis) return globalThis;

  // Thanks @mathiasbynens -> https://mathiasbynens.be/notes/globalthis
  // In all ES5+ engines global object inherits from Object.prototype
  // (if you approached one that doesn't please report)
  try {
    Object.defineProperty(Object.prototype, "__global__", {
      get: function get() {
        return this;
      },
      configurable: true
    });
  } catch (error) {
    // Unfortunate case of updates to Object.prototype being restricted
    // via preventExtensions, seal or freeze
    return naiveFallback();
  }
  try {
    // Safari case (window.__global__ works, but __global__ does not)
    if (!__global__) return naiveFallback();
    return __global__;
  } finally {
    delete Object.prototype.__global__;
  }
}();

},{}],62:[function(require,module,exports){
"use strict";

module.exports = attributeToProperty;
var transform = {
  'class': 'className',
  'for': 'htmlFor',
  'http-equiv': 'httpEquiv'
};
function attributeToProperty(h) {
  return function (tagName, attrs, children) {
    for (var attr in attrs) {
      if (attr in transform) {
        attrs[transform[attr]] = attrs[attr];
        delete attrs[attr];
      }
    }
    return h(tagName, attrs, children);
  };
}

},{}],63:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var attrToProp = require('hyperscript-attribute-to-property');
var VAR = 0,
  TEXT = 1,
  OPEN = 2,
  CLOSE = 3,
  ATTR = 4;
var ATTR_KEY = 5,
  ATTR_KEY_W = 6;
var ATTR_VALUE_W = 7,
  ATTR_VALUE = 8;
var ATTR_VALUE_SQ = 9,
  ATTR_VALUE_DQ = 10;
var ATTR_EQ = 11,
  ATTR_BREAK = 12;
var COMMENT = 13;
module.exports = function (h, opts) {
  if (!opts) opts = {};
  var concat = opts.concat || function (a, b) {
    return String(a) + String(b);
  };
  if (opts.attrToProp !== false) {
    h = attrToProp(h);
  }
  return function (strings) {
    var state = TEXT,
      reg = '';
    var arglen = arguments.length;
    var parts = [];
    for (var i = 0; i < strings.length; i++) {
      if (i < arglen - 1) {
        var arg = arguments[i + 1];
        var p = parse(strings[i]);
        var xstate = state;
        if (xstate === ATTR_VALUE_DQ) xstate = ATTR_VALUE;
        if (xstate === ATTR_VALUE_SQ) xstate = ATTR_VALUE;
        if (xstate === ATTR_VALUE_W) xstate = ATTR_VALUE;
        if (xstate === ATTR) xstate = ATTR_KEY;
        if (xstate === OPEN) {
          if (reg === '/') {
            p.push([OPEN, '/', arg]);
            reg = '';
          } else {
            p.push([OPEN, arg]);
          }
        } else if (xstate === COMMENT && opts.comments) {
          reg += String(arg);
        } else if (xstate !== COMMENT) {
          p.push([VAR, xstate, arg]);
        }
        parts.push.apply(parts, p);
      } else parts.push.apply(parts, parse(strings[i]));
    }
    var tree = [null, {}, []];
    var stack = [[tree, -1]];
    for (var i = 0; i < parts.length; i++) {
      var cur = stack[stack.length - 1][0];
      var p = parts[i],
        s = p[0];
      if (s === OPEN && /^\//.test(p[1])) {
        var ix = stack[stack.length - 1][1];
        if (stack.length > 1) {
          stack.pop();
          stack[stack.length - 1][0][2][ix] = h(cur[0], cur[1], cur[2].length ? cur[2] : undefined);
        }
      } else if (s === OPEN) {
        var c = [p[1], {}, []];
        cur[2].push(c);
        stack.push([c, cur[2].length - 1]);
      } else if (s === ATTR_KEY || s === VAR && p[1] === ATTR_KEY) {
        var key = '';
        var copyKey;
        for (; i < parts.length; i++) {
          if (parts[i][0] === ATTR_KEY) {
            key = concat(key, parts[i][1]);
          } else if (parts[i][0] === VAR && parts[i][1] === ATTR_KEY) {
            if (_typeof(parts[i][2]) === 'object' && !key) {
              for (copyKey in parts[i][2]) {
                if (parts[i][2].hasOwnProperty(copyKey) && !cur[1][copyKey]) {
                  cur[1][copyKey] = parts[i][2][copyKey];
                }
              }
            } else {
              key = concat(key, parts[i][2]);
            }
          } else break;
        }
        if (parts[i][0] === ATTR_EQ) i++;
        var j = i;
        for (; i < parts.length; i++) {
          if (parts[i][0] === ATTR_VALUE || parts[i][0] === ATTR_KEY) {
            if (!cur[1][key]) cur[1][key] = strfn(parts[i][1]);else parts[i][1] === "" || (cur[1][key] = concat(cur[1][key], parts[i][1]));
          } else if (parts[i][0] === VAR && (parts[i][1] === ATTR_VALUE || parts[i][1] === ATTR_KEY)) {
            if (!cur[1][key]) cur[1][key] = strfn(parts[i][2]);else parts[i][2] === "" || (cur[1][key] = concat(cur[1][key], parts[i][2]));
          } else {
            if (key.length && !cur[1][key] && i === j && (parts[i][0] === CLOSE || parts[i][0] === ATTR_BREAK)) {
              // https://html.spec.whatwg.org/multipage/infrastructure.html#boolean-attributes
              // empty string is falsy, not well behaved value in browser
              cur[1][key] = key.toLowerCase();
            }
            if (parts[i][0] === CLOSE) {
              i--;
            }
            break;
          }
        }
      } else if (s === ATTR_KEY) {
        cur[1][p[1]] = true;
      } else if (s === VAR && p[1] === ATTR_KEY) {
        cur[1][p[2]] = true;
      } else if (s === CLOSE) {
        if (selfClosing(cur[0]) && stack.length) {
          var ix = stack[stack.length - 1][1];
          stack.pop();
          stack[stack.length - 1][0][2][ix] = h(cur[0], cur[1], cur[2].length ? cur[2] : undefined);
        }
      } else if (s === VAR && p[1] === TEXT) {
        if (p[2] === undefined || p[2] === null) p[2] = '';else if (!p[2]) p[2] = concat('', p[2]);
        if (Array.isArray(p[2][0])) {
          cur[2].push.apply(cur[2], p[2]);
        } else {
          cur[2].push(p[2]);
        }
      } else if (s === TEXT) {
        cur[2].push(p[1]);
      } else if (s === ATTR_EQ || s === ATTR_BREAK) {
        // no-op
      } else {
        throw new Error('unhandled: ' + s);
      }
    }
    if (tree[2].length > 1 && /^\s*$/.test(tree[2][0])) {
      tree[2].shift();
    }
    if (tree[2].length > 2 || tree[2].length === 2 && /\S/.test(tree[2][1])) {
      if (opts.createFragment) return opts.createFragment(tree[2]);
      throw new Error('multiple root elements must be wrapped in an enclosing tag');
    }
    if (Array.isArray(tree[2][0]) && typeof tree[2][0][0] === 'string' && Array.isArray(tree[2][0][2])) {
      tree[2][0] = h(tree[2][0][0], tree[2][0][1], tree[2][0][2]);
    }
    return tree[2][0];
    function parse(str) {
      var res = [];
      if (state === ATTR_VALUE_W) state = ATTR;
      for (var i = 0; i < str.length; i++) {
        var c = str.charAt(i);
        if (state === TEXT && c === '<') {
          if (reg.length) res.push([TEXT, reg]);
          reg = '';
          state = OPEN;
        } else if (c === '>' && !quot(state) && state !== COMMENT) {
          if (state === OPEN && reg.length) {
            res.push([OPEN, reg]);
          } else if (state === ATTR_KEY) {
            res.push([ATTR_KEY, reg]);
          } else if (state === ATTR_VALUE && reg.length) {
            res.push([ATTR_VALUE, reg]);
          }
          res.push([CLOSE]);
          reg = '';
          state = TEXT;
        } else if (state === COMMENT && /-$/.test(reg) && c === '-') {
          if (opts.comments) {
            res.push([ATTR_VALUE, reg.substr(0, reg.length - 1)]);
          }
          reg = '';
          state = TEXT;
        } else if (state === OPEN && /^!--$/.test(reg)) {
          if (opts.comments) {
            res.push([OPEN, reg], [ATTR_KEY, 'comment'], [ATTR_EQ]);
          }
          reg = c;
          state = COMMENT;
        } else if (state === TEXT || state === COMMENT) {
          reg += c;
        } else if (state === OPEN && c === '/' && reg.length) {
          // no-op, self closing tag without a space <br/>
        } else if (state === OPEN && /\s/.test(c)) {
          if (reg.length) {
            res.push([OPEN, reg]);
          }
          reg = '';
          state = ATTR;
        } else if (state === OPEN) {
          reg += c;
        } else if (state === ATTR && /[^\s"'=/]/.test(c)) {
          state = ATTR_KEY;
          reg = c;
        } else if (state === ATTR && /\s/.test(c)) {
          if (reg.length) res.push([ATTR_KEY, reg]);
          res.push([ATTR_BREAK]);
        } else if (state === ATTR_KEY && /\s/.test(c)) {
          res.push([ATTR_KEY, reg]);
          reg = '';
          state = ATTR_KEY_W;
        } else if (state === ATTR_KEY && c === '=') {
          res.push([ATTR_KEY, reg], [ATTR_EQ]);
          reg = '';
          state = ATTR_VALUE_W;
        } else if (state === ATTR_KEY) {
          reg += c;
        } else if ((state === ATTR_KEY_W || state === ATTR) && c === '=') {
          res.push([ATTR_EQ]);
          state = ATTR_VALUE_W;
        } else if ((state === ATTR_KEY_W || state === ATTR) && !/\s/.test(c)) {
          res.push([ATTR_BREAK]);
          if (/[\w-]/.test(c)) {
            reg += c;
            state = ATTR_KEY;
          } else state = ATTR;
        } else if (state === ATTR_VALUE_W && c === '"') {
          state = ATTR_VALUE_DQ;
        } else if (state === ATTR_VALUE_W && c === "'") {
          state = ATTR_VALUE_SQ;
        } else if (state === ATTR_VALUE_DQ && c === '"') {
          res.push([ATTR_VALUE, reg], [ATTR_BREAK]);
          reg = '';
          state = ATTR;
        } else if (state === ATTR_VALUE_SQ && c === "'") {
          res.push([ATTR_VALUE, reg], [ATTR_BREAK]);
          reg = '';
          state = ATTR;
        } else if (state === ATTR_VALUE_W && !/\s/.test(c)) {
          state = ATTR_VALUE;
          i--;
        } else if (state === ATTR_VALUE && /\s/.test(c)) {
          res.push([ATTR_VALUE, reg], [ATTR_BREAK]);
          reg = '';
          state = ATTR;
        } else if (state === ATTR_VALUE || state === ATTR_VALUE_SQ || state === ATTR_VALUE_DQ) {
          reg += c;
        }
      }
      if (state === TEXT && reg.length) {
        res.push([TEXT, reg]);
        reg = '';
      } else if (state === ATTR_VALUE && reg.length) {
        res.push([ATTR_VALUE, reg]);
        reg = '';
      } else if (state === ATTR_VALUE_DQ && reg.length) {
        res.push([ATTR_VALUE, reg]);
        reg = '';
      } else if (state === ATTR_VALUE_SQ && reg.length) {
        res.push([ATTR_VALUE, reg]);
        reg = '';
      } else if (state === ATTR_KEY) {
        res.push([ATTR_KEY, reg]);
        reg = '';
      }
      return res;
    }
  };
  function strfn(x) {
    if (typeof x === 'function') return x;else if (typeof x === 'string') return x;else if (x && _typeof(x) === 'object') return x;else if (x === null || x === undefined) return x;else return concat('', x);
  }
};
function quot(state) {
  return state === ATTR_VALUE_SQ || state === ATTR_VALUE_DQ;
}
var closeRE = RegExp('^(' + ['area', 'base', 'basefont', 'bgsound', 'br', 'col', 'command', 'embed', 'frame', 'hr', 'img', 'input', 'isindex', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr', '!--',
// SVG TAGS
'animate', 'animateTransform', 'circle', 'cursor', 'desc', 'ellipse', 'feBlend', 'feColorMatrix', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence', 'font-face-format', 'font-face-name', 'font-face-uri', 'glyph', 'glyphRef', 'hkern', 'image', 'line', 'missing-glyph', 'mpath', 'path', 'polygon', 'polyline', 'rect', 'set', 'stop', 'tref', 'use', 'view', 'vkern'].join('|') + ")(?:[.#][a-zA-Z0-9\x7F-\uFFFF_:-]+)*$");
function selfClosing(tag) {
  return closeRE.test(tag);
}

},{"hyperscript-attribute-to-property":62}],64:[function(require,module,exports){
"use strict";

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];
  i += d;
  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  value = Math.abs(value);
  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
  buffer[offset + i - d] |= s * 128;
};

},{}],65:[function(require,module,exports){
"use strict";

assert.notEqual = notEqual;
assert.notOk = notOk;
assert.equal = equal;
assert.ok = assert;
module.exports = assert;
function equal(a, b, m) {
  assert(a == b, m); // eslint-disable-line eqeqeq
}

function notEqual(a, b, m) {
  assert(a != b, m); // eslint-disable-line eqeqeq
}

function notOk(t, m) {
  assert(!t, m);
}
function assert(t, m) {
  if (!t) throw new Error(m || 'AssertionError');
}

},{}],66:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var splice = require('remove-array-items');
var nanotiming = require('nanotiming');
var assert = require('assert');
module.exports = Nanobus;
function Nanobus(name) {
  if (!(this instanceof Nanobus)) return new Nanobus(name);
  this._name = name || 'nanobus';
  this._starListeners = [];
  this._listeners = {};
}
Nanobus.prototype.emit = function (eventName) {
  assert.ok(typeof eventName === 'string' || _typeof(eventName) === 'symbol', 'nanobus.emit: eventName should be type string or symbol');
  var data = [];
  for (var i = 1, len = arguments.length; i < len; i++) {
    data.push(arguments[i]);
  }
  var emitTiming = nanotiming(this._name + "('" + eventName.toString() + "')");
  var listeners = this._listeners[eventName];
  if (listeners && listeners.length > 0) {
    this._emit(this._listeners[eventName], data);
  }
  if (this._starListeners.length > 0) {
    this._emit(this._starListeners, eventName, data, emitTiming.uuid);
  }
  emitTiming();
  return this;
};
Nanobus.prototype.on = Nanobus.prototype.addListener = function (eventName, listener) {
  assert.ok(typeof eventName === 'string' || _typeof(eventName) === 'symbol', 'nanobus.on: eventName should be type string or symbol');
  assert.equal(_typeof(listener), 'function', 'nanobus.on: listener should be type function');
  if (eventName === '*') {
    this._starListeners.push(listener);
  } else {
    if (!this._listeners[eventName]) this._listeners[eventName] = [];
    this._listeners[eventName].push(listener);
  }
  return this;
};
Nanobus.prototype.prependListener = function (eventName, listener) {
  assert.ok(typeof eventName === 'string' || _typeof(eventName) === 'symbol', 'nanobus.prependListener: eventName should be type string or symbol');
  assert.equal(_typeof(listener), 'function', 'nanobus.prependListener: listener should be type function');
  if (eventName === '*') {
    this._starListeners.unshift(listener);
  } else {
    if (!this._listeners[eventName]) this._listeners[eventName] = [];
    this._listeners[eventName].unshift(listener);
  }
  return this;
};
Nanobus.prototype.once = function (eventName, listener) {
  assert.ok(typeof eventName === 'string' || _typeof(eventName) === 'symbol', 'nanobus.once: eventName should be type string or symbol');
  assert.equal(_typeof(listener), 'function', 'nanobus.once: listener should be type function');
  var self = this;
  this.on(eventName, once);
  function once() {
    listener.apply(self, arguments);
    self.removeListener(eventName, once);
  }
  return this;
};
Nanobus.prototype.prependOnceListener = function (eventName, listener) {
  assert.ok(typeof eventName === 'string' || _typeof(eventName) === 'symbol', 'nanobus.prependOnceListener: eventName should be type string or symbol');
  assert.equal(_typeof(listener), 'function', 'nanobus.prependOnceListener: listener should be type function');
  var self = this;
  this.prependListener(eventName, once);
  function once() {
    listener.apply(self, arguments);
    self.removeListener(eventName, once);
  }
  return this;
};
Nanobus.prototype.removeListener = function (eventName, listener) {
  assert.ok(typeof eventName === 'string' || _typeof(eventName) === 'symbol', 'nanobus.removeListener: eventName should be type string or symbol');
  assert.equal(_typeof(listener), 'function', 'nanobus.removeListener: listener should be type function');
  if (eventName === '*') {
    this._starListeners = this._starListeners.slice();
    return remove(this._starListeners, listener);
  } else {
    if (typeof this._listeners[eventName] !== 'undefined') {
      this._listeners[eventName] = this._listeners[eventName].slice();
    }
    return remove(this._listeners[eventName], listener);
  }
  function remove(arr, listener) {
    if (!arr) return;
    var index = arr.indexOf(listener);
    if (index !== -1) {
      splice(arr, index, 1);
      return true;
    }
  }
};
Nanobus.prototype.removeAllListeners = function (eventName) {
  if (eventName) {
    if (eventName === '*') {
      this._starListeners = [];
    } else {
      this._listeners[eventName] = [];
    }
  } else {
    this._starListeners = [];
    this._listeners = {};
  }
  return this;
};
Nanobus.prototype.listeners = function (eventName) {
  var listeners = eventName !== '*' ? this._listeners[eventName] : this._starListeners;
  var ret = [];
  if (listeners) {
    var ilength = listeners.length;
    for (var i = 0; i < ilength; i++) ret.push(listeners[i]);
  }
  return ret;
};
Nanobus.prototype._emit = function (arr, eventName, data, uuid) {
  if (typeof arr === 'undefined') return;
  if (arr.length === 0) return;
  if (data === undefined) {
    data = eventName;
    eventName = null;
  }
  if (eventName) {
    if (uuid !== undefined) {
      data = [eventName].concat(data, uuid);
    } else {
      data = [eventName].concat(data);
    }
  }
  var length = arr.length;
  for (var i = 0; i < length; i++) {
    var listener = arr[i];
    listener.apply(listener, data);
  }
};

},{"assert":65,"nanotiming":83,"remove-array-items":84}],67:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var assert = require('assert');
var safeExternalLink = /(noopener|noreferrer) (noopener|noreferrer)/;
var protocolLink = /^[\w-_]+:/;
module.exports = href;
function href(cb, root) {
  assert.notEqual(typeof window === "undefined" ? "undefined" : _typeof(window), 'undefined', 'nanohref: expected window to exist');
  root = root || window.document;
  assert.equal(_typeof(cb), 'function', 'nanohref: cb should be type function');
  assert.equal(_typeof(root), 'object', 'nanohref: root should be type object');
  window.addEventListener('click', function (e) {
    if (e.button && e.button !== 0 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.defaultPrevented) return;
    var anchor = function traverse(node) {
      if (!node || node === root) return;
      if (node.localName !== 'a' || node.href === undefined) {
        return traverse(node.parentNode);
      }
      return node;
    }(e.target);
    if (!anchor) return;
    if (window.location.protocol !== anchor.protocol || window.location.hostname !== anchor.hostname || window.location.port !== anchor.port || anchor.hasAttribute('data-nanohref-ignore') || anchor.hasAttribute('download') || anchor.getAttribute('target') === '_blank' && safeExternalLink.test(anchor.getAttribute('rel')) || protocolLink.test(anchor.getAttribute('href'))) return;
    e.preventDefault();
    cb(anchor);
  });
}

},{"assert":65}],68:[function(require,module,exports){
'use strict';

var trailingNewlineRegex = /\n[\s]+$/;
var leadingNewlineRegex = /^\n[\s]+/;
var trailingSpaceRegex = /[\s]+$/;
var leadingSpaceRegex = /^[\s]+/;
var multiSpaceRegex = /[\n\s]+/g;
var TEXT_TAGS = ['a', 'abbr', 'b', 'bdi', 'bdo', 'br', 'cite', 'data', 'dfn', 'em', 'i', 'kbd', 'mark', 'q', 'rp', 'rt', 'rtc', 'ruby', 's', 'amp', 'small', 'span', 'strong', 'sub', 'sup', 'time', 'u', 'var', 'wbr'];
var VERBATIM_TAGS = ['code', 'pre', 'textarea'];
module.exports = function appendChild(el, childs) {
  if (!Array.isArray(childs)) return;
  var nodeName = el.nodeName.toLowerCase();
  var hadText = false;
  var value, leader;
  for (var i = 0, len = childs.length; i < len; i++) {
    var node = childs[i];
    if (Array.isArray(node)) {
      appendChild(el, node);
      continue;
    }
    if (typeof node === 'number' || typeof node === 'boolean' || typeof node === 'function' || node instanceof Date || node instanceof RegExp) {
      node = node.toString();
    }
    var lastChild = el.childNodes[el.childNodes.length - 1];

    // Iterate over text nodes
    if (typeof node === 'string') {
      hadText = true;

      // If we already had text, append to the existing text
      if (lastChild && lastChild.nodeName === '#text') {
        lastChild.nodeValue += node;

        // We didn't have a text node yet, create one
      } else {
        node = el.ownerDocument.createTextNode(node);
        el.appendChild(node);
        lastChild = node;
      }

      // If this is the last of the child nodes, make sure we close it out
      // right
      if (i === len - 1) {
        hadText = false;
        // Trim the child text nodes if the current node isn't a
        // node where whitespace matters.
        if (TEXT_TAGS.indexOf(nodeName) === -1 && VERBATIM_TAGS.indexOf(nodeName) === -1) {
          value = lastChild.nodeValue.replace(leadingNewlineRegex, '').replace(trailingSpaceRegex, '').replace(trailingNewlineRegex, '').replace(multiSpaceRegex, ' ');
          if (value === '') {
            el.removeChild(lastChild);
          } else {
            lastChild.nodeValue = value;
          }
        } else if (VERBATIM_TAGS.indexOf(nodeName) === -1) {
          // The very first node in the list should not have leading
          // whitespace. Sibling text nodes should have whitespace if there
          // was any.
          leader = i === 0 ? '' : ' ';
          value = lastChild.nodeValue.replace(leadingNewlineRegex, leader).replace(leadingSpaceRegex, ' ').replace(trailingSpaceRegex, '').replace(trailingNewlineRegex, '').replace(multiSpaceRegex, ' ');
          lastChild.nodeValue = value;
        }
      }

      // Iterate over DOM nodes
    } else if (node && node.nodeType) {
      // If the last node was a text node, make sure it is properly closed out
      if (hadText) {
        hadText = false;

        // Trim the child text nodes if the current node isn't a
        // text node or a code node
        if (TEXT_TAGS.indexOf(nodeName) === -1 && VERBATIM_TAGS.indexOf(nodeName) === -1) {
          value = lastChild.nodeValue.replace(leadingNewlineRegex, '').replace(trailingNewlineRegex, ' ').replace(multiSpaceRegex, ' ');

          // Remove empty text nodes, append otherwise
          if (value === '') {
            el.removeChild(lastChild);
          } else {
            lastChild.nodeValue = value;
          }
          // Trim the child nodes but preserve the appropriate whitespace
        } else if (VERBATIM_TAGS.indexOf(nodeName) === -1) {
          value = lastChild.nodeValue.replace(leadingSpaceRegex, ' ').replace(leadingNewlineRegex, '').replace(trailingNewlineRegex, ' ').replace(multiSpaceRegex, ' ');
          lastChild.nodeValue = value;
        }
      }

      // Store the last nodename
      var _nodeName = node.nodeName;
      if (_nodeName) nodeName = _nodeName.toLowerCase();

      // Append the node to the DOM
      el.appendChild(node);
    }
  }
};

},{}],69:[function(require,module,exports){
'use strict';

module.exports = ['async', 'autofocus', 'autoplay', 'checked', 'controls', 'default', 'defaultchecked', 'defer', 'disabled', 'formnovalidate', 'hidden', 'ismap', 'loop', 'multiple', 'muted', 'novalidate', 'open', 'playsinline', 'readonly', 'required', 'reversed', 'selected'];

},{}],70:[function(require,module,exports){
"use strict";

module.exports = require('./dom')(document);

},{"./dom":72}],71:[function(require,module,exports){
'use strict';

module.exports = ['indeterminate'];

},{}],72:[function(require,module,exports){
'use strict';

var hyperx = require('hyperx');
var appendChild = require('./append-child');
var SVG_TAGS = require('./svg-tags');
var BOOL_PROPS = require('./bool-props');
// Props that need to be set directly rather than with el.setAttribute()
var DIRECT_PROPS = require('./direct-props');
var SVGNS = 'http://www.w3.org/2000/svg';
var XLINKNS = 'http://www.w3.org/1999/xlink';
var COMMENT_TAG = '!--';
module.exports = function (document) {
  function nanoHtmlCreateElement(tag, props, children) {
    var el;

    // If an svg tag, it needs a namespace
    if (SVG_TAGS.indexOf(tag) !== -1) {
      props.namespace = SVGNS;
    }

    // If we are using a namespace
    var ns = false;
    if (props.namespace) {
      ns = props.namespace;
      delete props.namespace;
    }

    // If we are extending a builtin element
    var isCustomElement = false;
    if (props.is) {
      isCustomElement = props.is;
      delete props.is;
    }

    // Create the element
    if (ns) {
      if (isCustomElement) {
        el = document.createElementNS(ns, tag, {
          is: isCustomElement
        });
      } else {
        el = document.createElementNS(ns, tag);
      }
    } else if (tag === COMMENT_TAG) {
      return document.createComment(props.comment);
    } else if (isCustomElement) {
      el = document.createElement(tag, {
        is: isCustomElement
      });
    } else {
      el = document.createElement(tag);
    }

    // Create the properties
    for (var p in props) {
      if (props.hasOwnProperty(p)) {
        var key = p.toLowerCase();
        var val = props[p];
        // Normalize className
        if (key === 'classname') {
          key = 'class';
          p = 'class';
        }
        // The for attribute gets transformed to htmlFor, but we just set as for
        if (p === 'htmlFor') {
          p = 'for';
        }
        // If a property is boolean, set itself to the key
        if (BOOL_PROPS.indexOf(key) !== -1) {
          if (String(val) === 'true') val = key;else if (String(val) === 'false') continue;
        }
        // If a property prefers being set directly vs setAttribute
        if (key.slice(0, 2) === 'on' || DIRECT_PROPS.indexOf(key) !== -1) {
          el[p] = val;
        } else {
          if (ns) {
            if (p === 'xlink:href') {
              el.setAttributeNS(XLINKNS, p, val);
            } else if (/^xmlns($|:)/i.test(p)) {
              // skip xmlns definitions
            } else {
              el.setAttributeNS(null, p, val);
            }
          } else {
            el.setAttribute(p, val);
          }
        }
      }
    }
    appendChild(el, children);
    return el;
  }
  function createFragment(nodes) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i] == null) continue;
      if (Array.isArray(nodes[i])) {
        fragment.appendChild(createFragment(nodes[i]));
      } else {
        if (typeof nodes[i] === 'string') nodes[i] = document.createTextNode(nodes[i]);
        fragment.appendChild(nodes[i]);
      }
    }
    return fragment;
  }
  var exports = hyperx(nanoHtmlCreateElement, {
    comments: true,
    createFragment: createFragment
  });
  exports["default"] = exports;
  exports.createComment = nanoHtmlCreateElement;
  return exports;
};

},{"./append-child":68,"./bool-props":69,"./direct-props":71,"./svg-tags":74,"hyperx":63}],73:[function(require,module,exports){
'use strict';

function nanohtmlRawBrowser(tag) {
  var el = document.createElement('div');
  el.innerHTML = tag;
  return toArray(el.childNodes);
}
function toArray(arr) {
  return Array.isArray(arr) ? arr : [].slice.call(arr);
}
module.exports = nanohtmlRawBrowser;

},{}],74:[function(require,module,exports){
'use strict';

module.exports = ['svg', 'altGlyph', 'altGlyphDef', 'altGlyphItem', 'animate', 'animateColor', 'animateMotion', 'animateTransform', 'circle', 'clipPath', 'color-profile', 'cursor', 'defs', 'desc', 'ellipse', 'feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence', 'filter', 'font', 'font-face', 'font-face-format', 'font-face-name', 'font-face-src', 'font-face-uri', 'foreignObject', 'g', 'glyph', 'glyphRef', 'hkern', 'image', 'line', 'linearGradient', 'marker', 'mask', 'metadata', 'missing-glyph', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'set', 'stop', 'switch', 'symbol', 'text', 'textPath', 'title', 'tref', 'tspan', 'use', 'view', 'vkern'];

},{}],75:[function(require,module,exports){
"use strict";

module.exports = LRU;
function LRU(opts) {
  if (!(this instanceof LRU)) return new LRU(opts);
  if (typeof opts === 'number') opts = {
    max: opts
  };
  if (!opts) opts = {};
  this.cache = {};
  this.head = this.tail = null;
  this.length = 0;
  this.max = opts.max || 1000;
  this.maxAge = opts.maxAge || 0;
}
Object.defineProperty(LRU.prototype, 'keys', {
  get: function get() {
    return Object.keys(this.cache);
  }
});
LRU.prototype.clear = function () {
  this.cache = {};
  this.head = this.tail = null;
  this.length = 0;
};
LRU.prototype.remove = function (key) {
  if (typeof key !== 'string') key = '' + key;
  if (!this.cache.hasOwnProperty(key)) return;
  var element = this.cache[key];
  delete this.cache[key];
  this._unlink(key, element.prev, element.next);
  return element.value;
};
LRU.prototype._unlink = function (key, prev, next) {
  this.length--;
  if (this.length === 0) {
    this.head = this.tail = null;
  } else {
    if (this.head === key) {
      this.head = prev;
      this.cache[this.head].next = null;
    } else if (this.tail === key) {
      this.tail = next;
      this.cache[this.tail].prev = null;
    } else {
      this.cache[prev].next = next;
      this.cache[next].prev = prev;
    }
  }
};
LRU.prototype.peek = function (key) {
  if (!this.cache.hasOwnProperty(key)) return;
  var element = this.cache[key];
  if (!this._checkAge(key, element)) return;
  return element.value;
};
LRU.prototype.set = function (key, value) {
  if (typeof key !== 'string') key = '' + key;
  var element;
  if (this.cache.hasOwnProperty(key)) {
    element = this.cache[key];
    element.value = value;
    if (this.maxAge) element.modified = Date.now();

    // If it's already the head, there's nothing more to do:
    if (key === this.head) return value;
    this._unlink(key, element.prev, element.next);
  } else {
    element = {
      value: value,
      modified: 0,
      next: null,
      prev: null
    };
    if (this.maxAge) element.modified = Date.now();
    this.cache[key] = element;

    // Eviction is only possible if the key didn't already exist:
    if (this.length === this.max) this.evict();
  }
  this.length++;
  element.next = null;
  element.prev = this.head;
  if (this.head) this.cache[this.head].next = key;
  this.head = key;
  if (!this.tail) this.tail = key;
  return value;
};
LRU.prototype._checkAge = function (key, element) {
  if (this.maxAge && Date.now() - element.modified > this.maxAge) {
    this.remove(key);
    return false;
  }
  return true;
};
LRU.prototype.get = function (key) {
  if (typeof key !== 'string') key = '' + key;
  if (!this.cache.hasOwnProperty(key)) return;
  var element = this.cache[key];
  if (!this._checkAge(key, element)) return;
  if (this.head !== key) {
    if (key === this.tail) {
      this.tail = element.next;
      this.cache[this.tail].prev = null;
    } else {
      // Set prev.next -> element.next:
      this.cache[element.prev].next = element.next;
    }

    // Set element.next.prev -> element.prev:
    this.cache[element.next].prev = element.prev;

    // Element is the new head
    this.cache[this.head].next = key;
    element.prev = this.head;
    element.next = null;
    this.head = key;
  }
  return element.value;
};
LRU.prototype.evict = function () {
  if (!this.tail) return;
  this.remove(this.tail);
};

},{}],76:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var assert = require('nanoassert');
var morph = require('./lib/morph');
var TEXT_NODE = 3;
// var DEBUG = false

module.exports = nanomorph;

// Morph one tree into another tree
//
// no parent
//   -> same: diff and walk children
//   -> not same: replace and return
// old node doesn't exist
//   -> insert new node
// new node doesn't exist
//   -> delete old node
// nodes are not the same
//   -> diff nodes and apply patch to old node
// nodes are the same
//   -> walk all child nodes and append to old node
function nanomorph(oldTree, newTree, options) {
  // if (DEBUG) {
  //   console.log(
  //   'nanomorph\nold\n  %s\nnew\n  %s',
  //   oldTree && oldTree.outerHTML,
  //   newTree && newTree.outerHTML
  // )
  // }
  assert.equal(_typeof(oldTree), 'object', 'nanomorph: oldTree should be an object');
  assert.equal(_typeof(newTree), 'object', 'nanomorph: newTree should be an object');
  if (options && options.childrenOnly) {
    updateChildren(newTree, oldTree);
    return oldTree;
  }
  assert.notEqual(newTree.nodeType, 11, 'nanomorph: newTree should have one root node (which is not a DocumentFragment)');
  return walk(newTree, oldTree);
}

// Walk and morph a dom tree
function walk(newNode, oldNode) {
  // if (DEBUG) {
  //   console.log(
  //   'walk\nold\n  %s\nnew\n  %s',
  //   oldNode && oldNode.outerHTML,
  //   newNode && newNode.outerHTML
  // )
  // }
  if (!oldNode) {
    return newNode;
  } else if (!newNode) {
    return null;
  } else if (newNode.isSameNode && newNode.isSameNode(oldNode)) {
    return oldNode;
  } else if (newNode.tagName !== oldNode.tagName || getComponentId(newNode) !== getComponentId(oldNode)) {
    return newNode;
  } else {
    morph(newNode, oldNode);
    updateChildren(newNode, oldNode);
    return oldNode;
  }
}
function getComponentId(node) {
  return node.dataset ? node.dataset.nanomorphComponentId : undefined;
}

// Update the children of elements
// (obj, obj) -> null
function updateChildren(newNode, oldNode) {
  // if (DEBUG) {
  //   console.log(
  //   'updateChildren\nold\n  %s\nnew\n  %s',
  //   oldNode && oldNode.outerHTML,
  //   newNode && newNode.outerHTML
  // )
  // }
  var oldChild, newChild, morphed, oldMatch;

  // The offset is only ever increased, and used for [i - offset] in the loop
  var offset = 0;
  for (var i = 0;; i++) {
    oldChild = oldNode.childNodes[i];
    newChild = newNode.childNodes[i - offset];
    // if (DEBUG) {
    //   console.log(
    //   '===\n- old\n  %s\n- new\n  %s',
    //   oldChild && oldChild.outerHTML,
    //   newChild && newChild.outerHTML
    // )
    // }
    // Both nodes are empty, do nothing
    if (!oldChild && !newChild) {
      break;

      // There is no new child, remove old
    } else if (!newChild) {
      oldNode.removeChild(oldChild);
      i--;

      // There is no old child, add new
    } else if (!oldChild) {
      oldNode.appendChild(newChild);
      offset++;

      // Both nodes are the same, morph
    } else if (same(newChild, oldChild)) {
      morphed = walk(newChild, oldChild);
      if (morphed !== oldChild) {
        oldNode.replaceChild(morphed, oldChild);
        offset++;
      }

      // Both nodes do not share an ID or a placeholder, try reorder
    } else {
      oldMatch = null;

      // Try and find a similar node somewhere in the tree
      for (var j = i; j < oldNode.childNodes.length; j++) {
        if (same(oldNode.childNodes[j], newChild)) {
          oldMatch = oldNode.childNodes[j];
          break;
        }
      }

      // If there was a node with the same ID or placeholder in the old list
      if (oldMatch) {
        morphed = walk(newChild, oldMatch);
        if (morphed !== oldMatch) offset++;
        oldNode.insertBefore(morphed, oldChild);

        // It's safe to morph two nodes in-place if neither has an ID
      } else if (!newChild.id && !oldChild.id) {
        morphed = walk(newChild, oldChild);
        if (morphed !== oldChild) {
          oldNode.replaceChild(morphed, oldChild);
          offset++;
        }

        // Insert the node at the index if we couldn't morph or find a matching node
      } else {
        oldNode.insertBefore(newChild, oldChild);
        offset++;
      }
    }
  }
}
function same(a, b) {
  if (a.id) return a.id === b.id;
  if (a.isSameNode) return a.isSameNode(b);
  if (a.tagName !== b.tagName) return false;
  if (a.type === TEXT_NODE) return a.nodeValue === b.nodeValue;
  return false;
}

},{"./lib/morph":78,"nanoassert":65}],77:[function(require,module,exports){
"use strict";

module.exports = [
// attribute events (can be set with attributes)
'onclick', 'ondblclick', 'onmousedown', 'onmouseup', 'onmouseover', 'onmousemove', 'onmouseout', 'onmouseenter', 'onmouseleave', 'ontouchcancel', 'ontouchend', 'ontouchmove', 'ontouchstart', 'ondragstart', 'ondrag', 'ondragenter', 'ondragleave', 'ondragover', 'ondrop', 'ondragend', 'onkeydown', 'onkeypress', 'onkeyup', 'onunload', 'onabort', 'onerror', 'onresize', 'onscroll', 'onselect', 'onchange', 'onsubmit', 'onreset', 'onfocus', 'onblur', 'oninput', 'onanimationend', 'onanimationiteration', 'onanimationstart',
// other common events
'oncontextmenu', 'onfocusin', 'onfocusout'];

},{}],78:[function(require,module,exports){
"use strict";

var events = require('./events');
var eventsLength = events.length;
var ELEMENT_NODE = 1;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;
module.exports = morph;

// diff elements and apply the resulting patch to the old node
// (obj, obj) -> null
function morph(newNode, oldNode) {
  var nodeType = newNode.nodeType;
  var nodeName = newNode.nodeName;
  if (nodeType === ELEMENT_NODE) {
    copyAttrs(newNode, oldNode);
  }
  if (nodeType === TEXT_NODE || nodeType === COMMENT_NODE) {
    if (oldNode.nodeValue !== newNode.nodeValue) {
      oldNode.nodeValue = newNode.nodeValue;
    }
  }

  // Some DOM nodes are weird
  // https://github.com/patrick-steele-idem/morphdom/blob/master/src/specialElHandlers.js
  if (nodeName === 'INPUT') updateInput(newNode, oldNode);else if (nodeName === 'OPTION') updateOption(newNode, oldNode);else if (nodeName === 'TEXTAREA') updateTextarea(newNode, oldNode);
  copyEvents(newNode, oldNode);
}
function copyAttrs(newNode, oldNode) {
  var oldAttrs = oldNode.attributes;
  var newAttrs = newNode.attributes;
  var attrNamespaceURI = null;
  var attrValue = null;
  var fromValue = null;
  var attrName = null;
  var attr = null;
  for (var i = newAttrs.length - 1; i >= 0; --i) {
    attr = newAttrs[i];
    attrName = attr.name;
    attrNamespaceURI = attr.namespaceURI;
    attrValue = attr.value;
    if (attrNamespaceURI) {
      attrName = attr.localName || attrName;
      fromValue = oldNode.getAttributeNS(attrNamespaceURI, attrName);
      if (fromValue !== attrValue) {
        oldNode.setAttributeNS(attrNamespaceURI, attrName, attrValue);
      }
    } else {
      if (!oldNode.hasAttribute(attrName)) {
        oldNode.setAttribute(attrName, attrValue);
      } else {
        fromValue = oldNode.getAttribute(attrName);
        if (fromValue !== attrValue) {
          // apparently values are always cast to strings, ah well
          if (attrValue === 'null' || attrValue === 'undefined') {
            oldNode.removeAttribute(attrName);
          } else {
            oldNode.setAttribute(attrName, attrValue);
          }
        }
      }
    }
  }

  // Remove any extra attributes found on the original DOM element that
  // weren't found on the target element.
  for (var j = oldAttrs.length - 1; j >= 0; --j) {
    attr = oldAttrs[j];
    if (attr.specified !== false) {
      attrName = attr.name;
      attrNamespaceURI = attr.namespaceURI;
      if (attrNamespaceURI) {
        attrName = attr.localName || attrName;
        if (!newNode.hasAttributeNS(attrNamespaceURI, attrName)) {
          oldNode.removeAttributeNS(attrNamespaceURI, attrName);
        }
      } else {
        if (!newNode.hasAttributeNS(null, attrName)) {
          oldNode.removeAttribute(attrName);
        }
      }
    }
  }
}
function copyEvents(newNode, oldNode) {
  for (var i = 0; i < eventsLength; i++) {
    var ev = events[i];
    if (newNode[ev]) {
      // if new element has a whitelisted attribute
      oldNode[ev] = newNode[ev]; // update existing element
    } else if (oldNode[ev]) {
      // if existing element has it and new one doesnt
      oldNode[ev] = undefined; // remove it from existing element
    }
  }
}

function updateOption(newNode, oldNode) {
  updateAttribute(newNode, oldNode, 'selected');
}

// The "value" attribute is special for the <input> element since it sets the
// initial value. Changing the "value" attribute without changing the "value"
// property will have no effect since it is only used to the set the initial
// value. Similar for the "checked" attribute, and "disabled".
function updateInput(newNode, oldNode) {
  var newValue = newNode.value;
  var oldValue = oldNode.value;
  updateAttribute(newNode, oldNode, 'checked');
  updateAttribute(newNode, oldNode, 'disabled');

  // The "indeterminate" property can not be set using an HTML attribute.
  // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox
  if (newNode.indeterminate !== oldNode.indeterminate) {
    oldNode.indeterminate = newNode.indeterminate;
  }

  // Persist file value since file inputs can't be changed programatically
  if (oldNode.type === 'file') return;
  if (newValue !== oldValue) {
    oldNode.setAttribute('value', newValue);
    oldNode.value = newValue;
  }
  if (newValue === 'null') {
    oldNode.value = '';
    oldNode.removeAttribute('value');
  }
  if (!newNode.hasAttributeNS(null, 'value')) {
    oldNode.removeAttribute('value');
  } else if (oldNode.type === 'range') {
    // this is so elements like slider move their UI thingy
    oldNode.value = newValue;
  }
}
function updateTextarea(newNode, oldNode) {
  var newValue = newNode.value;
  if (newValue !== oldNode.value) {
    oldNode.value = newValue;
  }
  if (oldNode.firstChild && oldNode.firstChild.nodeValue !== newValue) {
    // Needed for IE. Apparently IE sets the placeholder as the
    // node value and vise versa. This ignores an empty update.
    if (newValue === '' && oldNode.firstChild.nodeValue === oldNode.placeholder) {
      return;
    }
    oldNode.firstChild.nodeValue = newValue;
  }
}
function updateAttribute(newNode, oldNode, name) {
  if (newNode[name] !== oldNode[name]) {
    oldNode[name] = newNode[name];
    if (newNode[name]) {
      oldNode.setAttribute(name, '');
    } else {
      oldNode.removeAttribute(name);
    }
  }
}

},{"./events":77}],79:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var reg = /([^?=&]+)(=([^&]*))?/g;
var assert = require('assert');
module.exports = qs;
function qs(url) {
  assert.equal(_typeof(url), 'string', 'nanoquery: url should be type string');
  var obj = {};
  url.replace(/^.*\?/, '').replace(reg, function (a0, a1, a2, a3) {
    var value = decodeURIComponent(a3);
    var key = decodeURIComponent(a1);
    if (obj.hasOwnProperty(key)) {
      if (Array.isArray(obj[key])) obj[key].push(value);else obj[key] = [obj[key], value];
    } else {
      obj[key] = value;
    }
  });
  return obj;
}

},{"assert":65}],80:[function(require,module,exports){
'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var assert = require('assert');
module.exports = nanoraf;

// Only call RAF when needed
// (fn, fn?) -> fn
function nanoraf(render, raf) {
  assert.equal(_typeof(render), 'function', 'nanoraf: render should be a function');
  assert.ok(typeof raf === 'function' || typeof raf === 'undefined', 'nanoraf: raf should be a function or undefined');
  if (!raf) raf = window.requestAnimationFrame;
  var redrawScheduled = false;
  var args = null;
  return function frame() {
    if (args === null && !redrawScheduled) {
      redrawScheduled = true;
      raf(function redraw() {
        redrawScheduled = false;
        var length = args.length;
        var _args = new Array(length);
        for (var i = 0; i < length; i++) _args[i] = args[i];
        render.apply(render, _args);
        args = null;
      });
    }
    args = arguments;
  };
}

},{"assert":65}],81:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var assert = require('assert');
var wayfarer = require('wayfarer');

// electron support
var isLocalFile = /file:\/\//.test((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window.location && window.location.origin);

/* eslint-disable no-useless-escape */
var electron = '^(file:\/\/|\/)(.*\.html?\/?)?';
var protocol = '^(http(s)?(:\/\/))?(www\.)?';
var domain = '[a-zA-Z0-9-_\.]+(:[0-9]{1,5})?(\/{1})?';
var qs = '[\?].*$';
/* eslint-enable no-useless-escape */

var stripElectron = new RegExp(electron);
var prefix = new RegExp(protocol + domain);
var normalize = new RegExp('#');
var suffix = new RegExp(qs);
module.exports = Nanorouter;
function Nanorouter(opts) {
  if (!(this instanceof Nanorouter)) return new Nanorouter(opts);
  opts = opts || {};
  this.router = wayfarer(opts["default"] || '/404');
}
Nanorouter.prototype.on = function (routename, listener) {
  assert.equal(_typeof(routename), 'string');
  routename = routename.replace(/^[#/]/, '');
  this.router.on(routename, listener);
};
Nanorouter.prototype.emit = function (routename) {
  assert.equal(_typeof(routename), 'string');
  routename = pathname(routename, isLocalFile);
  return this.router.emit(routename);
};
Nanorouter.prototype.match = function (routename) {
  assert.equal(_typeof(routename), 'string');
  routename = pathname(routename, isLocalFile);
  return this.router.match(routename);
};

// replace everything in a route but the pathname and hash
function pathname(routename, isElectron) {
  if (isElectron) routename = routename.replace(stripElectron, '');else routename = routename.replace(prefix, '');
  return decodeURI(routename.replace(suffix, '').replace(normalize, '/'));
}

},{"assert":65,"wayfarer":86}],82:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var assert = require('assert');
var hasWindow = typeof window !== 'undefined';
function createScheduler() {
  var scheduler;
  if (hasWindow) {
    if (!window._nanoScheduler) window._nanoScheduler = new NanoScheduler(true);
    scheduler = window._nanoScheduler;
  } else {
    scheduler = new NanoScheduler();
  }
  return scheduler;
}
function NanoScheduler(hasWindow) {
  this.hasWindow = hasWindow;
  this.hasIdle = this.hasWindow && window.requestIdleCallback;
  this.method = this.hasIdle ? window.requestIdleCallback.bind(window) : this.setTimeout;
  this.scheduled = false;
  this.queue = [];
}
NanoScheduler.prototype.push = function (cb) {
  assert.equal(_typeof(cb), 'function', 'nanoscheduler.push: cb should be type function');
  this.queue.push(cb);
  this.schedule();
};
NanoScheduler.prototype.schedule = function () {
  if (this.scheduled) return;
  this.scheduled = true;
  var self = this;
  this.method(function (idleDeadline) {
    var cb;
    while (self.queue.length && idleDeadline.timeRemaining() > 0) {
      cb = self.queue.shift();
      cb(idleDeadline);
    }
    self.scheduled = false;
    if (self.queue.length) self.schedule();
  });
};
NanoScheduler.prototype.setTimeout = function (cb) {
  setTimeout(cb, 0, {
    timeRemaining: function timeRemaining() {
      return 1;
    }
  });
};
module.exports = createScheduler;

},{"assert":65}],83:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var scheduler = require('nanoscheduler')();
var assert = require('assert');
var perf;
nanotiming.disabled = true;
try {
  perf = window.performance;
  nanotiming.disabled = window.localStorage.DISABLE_NANOTIMING === 'true' || !perf.mark;
} catch (e) {}
module.exports = nanotiming;
function nanotiming(name) {
  assert.equal(_typeof(name), 'string', 'nanotiming: name should be type string');
  if (nanotiming.disabled) return noop;
  var uuid = (perf.now() * 10000).toFixed() % Number.MAX_SAFE_INTEGER;
  var startName = 'start-' + uuid + '-' + name;
  perf.mark(startName);
  function end(cb) {
    var endName = 'end-' + uuid + '-' + name;
    perf.mark(endName);
    scheduler.push(function () {
      var err = null;
      try {
        var measureName = name + ' [' + uuid + ']';
        perf.measure(measureName, startName, endName);
        perf.clearMarks(startName);
        perf.clearMarks(endName);
      } catch (e) {
        err = e;
      }
      if (cb) cb(err, name);
    });
  }
  end.uuid = uuid;
  return end;
}
function noop(cb) {
  if (cb) {
    scheduler.push(function () {
      cb(new Error('nanotiming: performance API unavailable'));
    });
  }
}

},{"assert":65,"nanoscheduler":82}],84:[function(require,module,exports){
'use strict';

/**
 * Remove a range of items from an array
 *
 * @function removeItems
 * @param {Array<*>} arr The target array
 * @param {number} startIdx The index to begin removing from (inclusive)
 * @param {number} removeCount How many items to remove
 */
module.exports = function removeItems(arr, startIdx, removeCount) {
  var i,
    length = arr.length;
  if (startIdx >= length || removeCount === 0) {
    return;
  }
  removeCount = startIdx + removeCount > length ? length - startIdx : removeCount;
  var len = length - removeCount;
  for (i = startIdx; i < len; ++i) {
    arr[i] = arr[i + removeCount];
  }
  arr.length = len;
};

},{}],85:[function(require,module,exports){
"use strict";

module.exports = scrollToAnchor;
function scrollToAnchor(anchor, options) {
  if (anchor) {
    try {
      var el = document.querySelector(anchor);
      if (el) el.scrollIntoView(options);
    } catch (e) {}
  }
}

},{}],86:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/* eslint-disable node/no-deprecated-api */
var assert = require('assert');
var trie = require('./trie');
module.exports = Wayfarer;

// create a router
// str -> obj
function Wayfarer(dft) {
  if (!(this instanceof Wayfarer)) return new Wayfarer(dft);
  var _default = (dft || '').replace(/^\//, '');
  var _trie = trie();
  emit._trie = _trie;
  emit.on = on;
  emit.emit = emit;
  emit.match = match;
  emit._wayfarer = true;
  return emit;

  // define a route
  // (str, fn) -> obj
  function on(route, cb) {
    assert.equal(_typeof(route), 'string');
    assert.equal(_typeof(cb), 'function');
    route = route || '/';
    if (cb._wayfarer && cb._trie) {
      _trie.mount(route, cb._trie.trie);
    } else {
      var node = _trie.create(route);
      node.cb = cb;
      node.route = route;
    }
    return emit;
  }

  // match and call a route
  // (str, obj?) -> null
  function emit(route) {
    var matched = match(route);
    var args = new Array(arguments.length);
    args[0] = matched.params;
    for (var i = 1; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return matched.cb.apply(matched.cb, args);
  }
  function match(route) {
    assert.notEqual(route, undefined, "'route' must be defined");
    var matched = _trie.match(route);
    if (matched && matched.cb) return new Route(matched);
    var dft = _trie.match(_default);
    if (dft && dft.cb) return new Route(dft);
    throw new Error("route '" + route + "' did not match");
  }
  function Route(matched) {
    this.cb = matched.cb;
    this.route = matched.route;
    this.params = matched.params;
  }
}

},{"./trie":87,"assert":65}],87:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/* eslint-disable node/no-deprecated-api */
var assert = require('assert');
module.exports = Trie;

// create a new trie
// null -> obj
function Trie() {
  if (!(this instanceof Trie)) return new Trie();
  this.trie = {
    nodes: {}
  };
}

// create a node on the trie at route
// and return a node
// str -> obj
Trie.prototype.create = function (route) {
  assert.equal(_typeof(route), 'string', 'route should be a string');
  // strip leading '/' and split routes
  var routes = route.replace(/^\//, '').split('/');
  function createNode(index, trie) {
    var thisRoute = has(routes, index) && routes[index];
    if (thisRoute === false) return trie;
    var node = null;
    if (/^:|^\*/.test(thisRoute)) {
      // if node is a name match, set name and append to ':' node
      if (!has(trie.nodes, '$$')) {
        node = {
          nodes: {}
        };
        trie.nodes.$$ = node;
      } else {
        node = trie.nodes.$$;
      }
      if (thisRoute[0] === '*') {
        trie.wildcard = true;
      }
      trie.name = thisRoute.replace(/^:|^\*/, '');
    } else if (!has(trie.nodes, thisRoute)) {
      node = {
        nodes: {}
      };
      trie.nodes[thisRoute] = node;
    } else {
      node = trie.nodes[thisRoute];
    }

    // we must recurse deeper
    return createNode(index + 1, node);
  }
  return createNode(0, this.trie);
};

// match a route on the trie
// and return the node
// str -> obj
Trie.prototype.match = function (route) {
  assert.equal(_typeof(route), 'string', 'route should be a string');
  var routes = route.replace(/^\//, '').split('/');
  var params = {};
  function search(index, trie) {
    // either there's no match, or we're done searching
    if (trie === undefined) return undefined;
    var thisRoute = routes[index];
    if (thisRoute === undefined) return trie;
    if (has(trie.nodes, thisRoute)) {
      // match regular routes first
      return search(index + 1, trie.nodes[thisRoute]);
    } else if (trie.name) {
      // match named routes
      try {
        params[trie.name] = decodeURIComponent(thisRoute);
      } catch (e) {
        return search(index, undefined);
      }
      return search(index + 1, trie.nodes.$$);
    } else if (trie.wildcard) {
      // match wildcards
      try {
        params.wildcard = decodeURIComponent(routes.slice(index).join('/'));
      } catch (e) {
        return search(index, undefined);
      }
      // return early, or else search may keep recursing through the wildcard
      return trie.nodes.$$;
    } else {
      // no matches found
      return search(index + 1);
    }
  }
  var node = search(0, this.trie);
  if (!node) return undefined;
  node = Object.assign({}, node);
  node.params = params;
  return node;
};

// mount a trie onto a node at route
// (str, obj) -> null
Trie.prototype.mount = function (route, trie) {
  assert.equal(_typeof(route), 'string', 'route should be a string');
  assert.equal(_typeof(trie), 'object', 'trie should be a object');
  var split = route.replace(/^\//, '').split('/');
  var node = null;
  var key = null;
  if (split.length === 1) {
    key = split[0];
    node = this.create(key);
  } else {
    var head = split.join('/');
    key = split[0];
    node = this.create(head);
  }
  Object.assign(node.nodes, trie.nodes);
  if (trie.name) node.name = trie.name;

  // delegate properties from '/' to the new node
  // '/' cannot be reached once mounted
  if (node.nodes['']) {
    Object.keys(node.nodes['']).forEach(function (key) {
      if (key === 'nodes') return;
      node[key] = node.nodes[''][key];
    });
    Object.assign(node.nodes, node.nodes[''].nodes);
    delete node.nodes[''].nodes;
  }
};
function has(object, property) {
  return Object.prototype.hasOwnProperty.call(object, property);
}

},{"assert":65}],88:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _globalThis;
if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === 'object') {
  _globalThis = globalThis;
} else {
  try {
    _globalThis = require('es5-ext/global');
  } catch (error) {} finally {
    if (!_globalThis && typeof window !== 'undefined') {
      _globalThis = window;
    }
    if (!_globalThis) {
      throw new Error('Could not determine global this');
    }
  }
}
var NativeWebSocket = _globalThis.WebSocket || _globalThis.MozWebSocket;
var websocket_version = require('./version');

/**
 * Expose a W3C WebSocket class with just one or two arguments.
 */
function W3CWebSocket(uri, protocols) {
  var native_instance;
  if (protocols) {
    native_instance = new NativeWebSocket(uri, protocols);
  } else {
    native_instance = new NativeWebSocket(uri);
  }

  /**
   * 'native_instance' is an instance of nativeWebSocket (the browser's WebSocket
   * class). Since it is an Object it will be returned as it is when creating an
   * instance of W3CWebSocket via 'new W3CWebSocket()'.
   *
   * ECMAScript 5: http://bclary.com/2004/11/07/#a-13.2.2
   */
  return native_instance;
}
if (NativeWebSocket) {
  ['CONNECTING', 'OPEN', 'CLOSING', 'CLOSED'].forEach(function (prop) {
    Object.defineProperty(W3CWebSocket, prop, {
      get: function get() {
        return NativeWebSocket[prop];
      }
    });
  });
}

/**
 * Module exports.
 */
module.exports = {
  'w3cwebsocket': NativeWebSocket ? W3CWebSocket : null,
  'version': websocket_version
};

},{"./version":89,"es5-ext/global":61}],89:[function(require,module,exports){
"use strict";

module.exports = require('../package.json').version;

},{"../package.json":90}],90:[function(require,module,exports){
module.exports={
  "name": "websocket",
  "description": "Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.",
  "keywords": [
    "websocket",
    "websockets",
    "socket",
    "networking",
    "comet",
    "push",
    "RFC-6455",
    "realtime",
    "server",
    "client"
  ],
  "author": "Brian McKelvey <theturtle32@gmail.com> (https://github.com/theturtle32)",
  "contributors": [
    "Iñaki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)"
  ],
  "version": "1.0.34",
  "repository": {
    "type": "git",
    "url": "https://github.com/theturtle32/WebSocket-Node.git"
  },
  "homepage": "https://github.com/theturtle32/WebSocket-Node",
  "engines": {
    "node": ">=4.0.0"
  },
  "dependencies": {
    "bufferutil": "^4.0.1",
    "debug": "^2.2.0",
    "es5-ext": "^0.10.50",
    "typedarray-to-buffer": "^3.1.5",
    "utf-8-validate": "^5.0.2",
    "yaeti": "^0.0.6"
  },
  "devDependencies": {
    "buffer-equal": "^1.0.0",
    "gulp": "^4.0.2",
    "gulp-jshint": "^2.0.4",
    "jshint-stylish": "^2.2.1",
    "jshint": "^2.0.0",
    "tape": "^4.9.1"
  },
  "config": {
    "verbose": false
  },
  "scripts": {
    "test": "tape test/unit/*.js",
    "gulp": "gulp"
  },
  "main": "index",
  "directories": {
    "lib": "./lib"
  },
  "browser": "lib/browser.js",
  "license": "Apache-2.0"
}

},{}],91:[function(require,module,exports){

},{}],92:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = function _default(state, emitter) {};
exports["default"] = _default;

},{}],93:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClickThroughs = getClickThroughs;
exports.getTwitRefs = getTwitRefs;
exports.parseSource = parseSource;
exports.renderActionDetail = renderActionDetail;
exports.renderActionType = renderActionType;
function parseSource(source) {
  if (!source.includes("https")) {
    source = "https://" + source;
  }
  var fbclid = new URL(source).searchParams.get("fbclid");
  if (fbclid) {
    return "FB " + fbclid;
  }
  return;
}
function getTwitRefs(ref) {
  if (!ref) return false;
  if (ref.includes('t.co')) {
    return true;
  }
}
function renderActionType(at) {
  // navigate is legacy
  if (at === "navigate") return "click";
  return at;
}
function renderActionDetail(ad) {
  // remove click and link
  // ad = '<div class="mr4">-</div>' + ad
  return ad.replace("click", "").replace("link", "");
}
function getClickThroughs(data) {
  if (data.action === "https://time.claims") {
    return true;
  }
}

},{}],94:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _html = _interopRequireDefault(require("choo/html"));
var _raw = _interopRequireDefault(require("choo/html/raw"));
var _utils = require("../utils");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var _default = function _default(state, emit) {
  function renderEntry(dayArr) {
    var entries = "";
    for (var i = 0; i < dayArr.length; i++) {
      var _dayArr$i$data = dayArr[i].data,
        timestamp = _dayArr$i$data.timestamp,
        sessionId = _dayArr$i$data.sessionId,
        action_type = _dayArr$i$data.action_type,
        action = _dayArr$i$data.action,
        action_detail = _dayArr$i$data.action_detail,
        referrer = _dayArr$i$data.referrer;
      var date = new Date(timestamp);
      entries += "\n        <li>\n            <div class=\"df fdr fww\">\n                <div class=\"mr4 fwb\">\n                    ".concat(date.getHours().toString().padStart(2, '0'), ":").concat(date.getMinutes().toString().padStart(2, '0'), ":").concat(date.getSeconds().toString().padStart(2, '0'), "\n                </div>\n                <div class=\"uppercase mr4\">\n                    ").concat((0, _utils.renderActionType)(action_type), "\n                </div>\n                <div class=\"mr4\">-</div>\n\n                ").concat(action_detail ? (0, _utils.renderActionDetail)(action_detail) : "", "\n                <div class=\"").concat(action ? '' : 'dn', "\">\n                    (").concat(action ? "→ " + action : "", ")\n                </div>\n                <div class=\"session ").concat(sessionId ? '' : 'dn', "\">\n                    ").concat(sessionId ? sessionId.slice(0, 24) : '', "\n                </div>\n                <div class=\"").concat(referrer ? 'df fdr' : 'dn', "\">\n                    Referrer: ").concat(referrer, "\n                </div>\n            </div>\n        </li>\n      ");
    }
    return entries;
  }
  function renderDay() {
    if (!state.data) return;
    var days = "";
    var entries = Object.entries(state.data);
    for (var i = 0; i < entries.length; i++) {
      days += "\n            <li>\n              <div class=\"entry-date df fdr jcsb\">\n                <div class=\"mr4\">".concat(entries[i][0], "</div>\n                <div class=\"df fdr\" style=\"opacity: 0.5\">\n                  <div class=\"mr4\">Visits: ").concat(entries[i][1].meta.visits, ", CT% ").concat(Math.round(entries[i][1].meta.clickThroughs / entries[i][1].meta.visits * 100), "(").concat(entries[i][1].meta.clickThroughs, ")</div>\n                  <div>(From FB: ").concat(entries[i][1].meta.fb, ", From T: ").concat(entries[i][1].meta.twit, ")</div>\n                </div>\n              \n              </div>\n              <ul>\n                ").concat(renderEntry(entries[i][1].data), "\n              </ul>\n            </li>\n          ");
    }
    return (0, _raw["default"])(days);
  }
  return (0, _html["default"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <div>\n        <ul>\n          ", "\n        </ul>\n      </div>\n  "])), renderDay());
};
exports["default"] = _default;

},{"../utils":93,"choo/html":56,"choo/html/raw":57}],95:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _html = _interopRequireDefault(require("choo/html"));
var _entries = _interopRequireDefault(require("./entries"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var _default = function _default(state, emit) {
  return (0, _html["default"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    <body>\n      <main>\n          <div>\n            ", "\n          </div>\n      </main>\n    </body>\n  "])), (0, _entries["default"])(state, emit));
};
exports["default"] = _default;

},{"./entries":94,"choo/html":56}]},{},[2])