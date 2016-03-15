(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _ECS = require('./src/ECS');

var _ECS2 = _interopRequireDefault(_ECS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.ECS = _ECS2.default;

_ECS2.default.$canvas = document.getElementById('game-canvas');
_ECS2.default.context = _ECS2.default.$canvas.getContext('2d');
_ECS2.default.$UIcanvas = document.getElementById('game-ui');
_ECS2.default.UIcontext = _ECS2.default.$UIcanvas.getContext('2d');

_ECS2.default.game = new _ECS2.default.game();
_ECS2.default.game.startGame();

},{"./src/ECS":118}],2:[function(require,module,exports){
var nativeCreate = require('./_nativeCreate');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Creates an hash object.
 *
 * @private
 * @constructor
 * @returns {Object} Returns the new hash object.
 */
function Hash() {}

// Avoid inheriting from `Object.prototype` when possible.
Hash.prototype = nativeCreate ? nativeCreate(null) : objectProto;

module.exports = Hash;

},{"./_nativeCreate":76}],3:[function(require,module,exports){
var getNative = require('./_getNative'),
    root = require('./_root');

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;

},{"./_getNative":55,"./_root":78}],4:[function(require,module,exports){
var mapClear = require('./_mapClear'),
    mapDelete = require('./_mapDelete'),
    mapGet = require('./_mapGet'),
    mapHas = require('./_mapHas'),
    mapSet = require('./_mapSet');

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function MapCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.clear();
  while (++index < length) {
    var entry = values[index];
    this.set(entry[0], entry[1]);
  }
}

// Add functions to the `MapCache`.
MapCache.prototype.clear = mapClear;
MapCache.prototype['delete'] = mapDelete;
MapCache.prototype.get = mapGet;
MapCache.prototype.has = mapHas;
MapCache.prototype.set = mapSet;

module.exports = MapCache;

},{"./_mapClear":70,"./_mapDelete":71,"./_mapGet":72,"./_mapHas":73,"./_mapSet":74}],5:[function(require,module,exports){
var getNative = require('./_getNative'),
    root = require('./_root');

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;

},{"./_getNative":55,"./_root":78}],6:[function(require,module,exports){
var stackClear = require('./_stackClear'),
    stackDelete = require('./_stackDelete'),
    stackGet = require('./_stackGet'),
    stackHas = require('./_stackHas'),
    stackSet = require('./_stackSet');

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function Stack(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.clear();
  while (++index < length) {
    var entry = values[index];
    this.set(entry[0], entry[1]);
  }
}

// Add functions to the `Stack` cache.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;

},{"./_stackClear":80,"./_stackDelete":81,"./_stackGet":82,"./_stackHas":83,"./_stackSet":84}],7:[function(require,module,exports){
var root = require('./_root');

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;

},{"./_root":78}],8:[function(require,module,exports){
var root = require('./_root');

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;

},{"./_root":78}],9:[function(require,module,exports){
var getNative = require('./_getNative'),
    root = require('./_root');

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;

},{"./_getNative":55,"./_root":78}],10:[function(require,module,exports){
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;

},{}],11:[function(require,module,exports){
/**
 * A specialized version of `_.every` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check, else `false`.
 */
function arrayEvery(array, predicate) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    if (!predicate(array[index], index, array)) {
      return false;
    }
  }
  return true;
}

module.exports = arrayEvery;

},{}],12:[function(require,module,exports){
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;

},{}],13:[function(require,module,exports){
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;

},{}],14:[function(require,module,exports){
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check, else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;

},{}],15:[function(require,module,exports){
var assocIndexOf = require('./_assocIndexOf');

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the associative array.
 *
 * @private
 * @param {Array} array The array to query.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function assocDelete(array, key) {
  var index = assocIndexOf(array, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = array.length - 1;
  if (index == lastIndex) {
    array.pop();
  } else {
    splice.call(array, index, 1);
  }
  return true;
}

module.exports = assocDelete;

},{"./_assocIndexOf":18}],16:[function(require,module,exports){
var assocIndexOf = require('./_assocIndexOf');

/**
 * Gets the associative array value for `key`.
 *
 * @private
 * @param {Array} array The array to query.
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function assocGet(array, key) {
  var index = assocIndexOf(array, key);
  return index < 0 ? undefined : array[index][1];
}

module.exports = assocGet;

},{"./_assocIndexOf":18}],17:[function(require,module,exports){
var assocIndexOf = require('./_assocIndexOf');

/**
 * Checks if an associative array value for `key` exists.
 *
 * @private
 * @param {Array} array The array to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function assocHas(array, key) {
  return assocIndexOf(array, key) > -1;
}

module.exports = assocHas;

},{"./_assocIndexOf":18}],18:[function(require,module,exports){
var eq = require('./eq');

/**
 * Gets the index at which the first occurrence of `key` is found in `array`
 * of key-value pairs.
 *
 * @private
 * @param {Array} array The array to search.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;

},{"./eq":87}],19:[function(require,module,exports){
var assocIndexOf = require('./_assocIndexOf');

/**
 * Sets the associative array `key` to `value`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 */
function assocSet(array, key, value) {
  var index = assocIndexOf(array, key);
  if (index < 0) {
    array.push([key, value]);
  } else {
    array[index][1] = value;
  }
}

module.exports = assocSet;

},{"./_assocIndexOf":18}],20:[function(require,module,exports){
var identity = require('./identity');

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the array-like object.
 */
function baseCastFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = baseCastFunction;

},{"./identity":95}],21:[function(require,module,exports){
var isArray = require('./isArray'),
    stringToPath = require('./_stringToPath');

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function baseCastPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

module.exports = baseCastPath;

},{"./_stringToPath":85,"./isArray":97}],22:[function(require,module,exports){
/**
 * The base implementation of `_.clamp` which doesn't coerce arguments to numbers.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
function baseClamp(number, lower, upper) {
  if (number === number) {
    if (upper !== undefined) {
      number = number <= upper ? number : upper;
    }
    if (lower !== undefined) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
}

module.exports = baseClamp;

},{}],23:[function(require,module,exports){
var baseForOwn = require('./_baseForOwn'),
    createBaseEach = require('./_createBaseEach');

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;

},{"./_baseForOwn":29,"./_createBaseEach":47}],24:[function(require,module,exports){
var baseEach = require('./_baseEach');

/**
 * The base implementation of `_.every` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check, else `false`
 */
function baseEvery(collection, predicate) {
  var result = true;
  baseEach(collection, function(value, index, collection) {
    result = !!predicate(value, index, collection);
    return result;
  });
  return result;
}

module.exports = baseEvery;

},{"./_baseEach":23}],25:[function(require,module,exports){
var baseEach = require('./_baseEach');

/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  var result = [];
  baseEach(collection, function(value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

module.exports = baseFilter;

},{"./_baseEach":23}],26:[function(require,module,exports){
/**
 * The base implementation of methods like `_.find` and `_.findKey`, without
 * support for iteratee shorthands, which iterates over `collection` using
 * `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to search.
 * @param {Function} predicate The function invoked per iteration.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @param {boolean} [retKey] Specify returning the key of the found element instead of the element itself.
 * @returns {*} Returns the found element or its key, else `undefined`.
 */
function baseFind(collection, predicate, eachFunc, retKey) {
  var result;
  eachFunc(collection, function(value, key, collection) {
    if (predicate(value, key, collection)) {
      result = retKey ? key : value;
      return false;
    }
  });
  return result;
}

module.exports = baseFind;

},{}],27:[function(require,module,exports){
/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to search.
 * @param {Function} predicate The function invoked per iteration.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromRight) {
  var length = array.length,
      index = fromRight ? length : -1;

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;

},{}],28:[function(require,module,exports){
var createBaseFor = require('./_createBaseFor');

/**
 * The base implementation of `baseForIn` and `baseForOwn` which iterates
 * over `object` properties returned by `keysFunc` invoking `iteratee` for
 * each property. Iteratee functions may exit iteration early by explicitly
 * returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;

},{"./_createBaseFor":48}],29:[function(require,module,exports){
var baseFor = require('./_baseFor'),
    keys = require('./keys');

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;

},{"./_baseFor":28,"./keys":108}],30:[function(require,module,exports){
var baseCastPath = require('./_baseCastPath'),
    isKey = require('./_isKey');

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path + ''] : baseCastPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[path[index++]];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;

},{"./_baseCastPath":21,"./_isKey":66}],31:[function(require,module,exports){
/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var getPrototypeOf = Object.getPrototypeOf;

/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHas(object, key) {
  // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
  // that are composed entirely of index properties, return `false` for
  // `hasOwnProperty` checks of them.
  return hasOwnProperty.call(object, key) ||
    (typeof object == 'object' && key in object && getPrototypeOf(object) === null);
}

module.exports = baseHas;

},{}],32:[function(require,module,exports){
/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return key in Object(object);
}

module.exports = baseHasIn;

},{}],33:[function(require,module,exports){
var baseIsEqualDeep = require('./_baseIsEqualDeep'),
    isObject = require('./isObject'),
    isObjectLike = require('./isObjectLike');

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {boolean} [bitmask] The bitmask of comparison flags.
 *  The bitmask may be composed of the following flags:
 *     1 - Unordered comparison
 *     2 - Partial comparison
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, customizer, bitmask, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
}

module.exports = baseIsEqual;

},{"./_baseIsEqualDeep":34,"./isObject":103,"./isObjectLike":104}],34:[function(require,module,exports){
var Stack = require('./_Stack'),
    equalArrays = require('./_equalArrays'),
    equalByTag = require('./_equalByTag'),
    equalObjects = require('./_equalObjects'),
    getTag = require('./_getTag'),
    isArray = require('./isArray'),
    isHostObject = require('./_isHostObject'),
    isTypedArray = require('./isTypedArray');

/** Used to compose bitmasks for comparison styles. */
var PARTIAL_COMPARE_FLAG = 2;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual` for more details.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = arrayTag,
      othTag = arrayTag;

  if (!objIsArr) {
    objTag = getTag(object);
    objTag = objTag == argsTag ? objectTag : objTag;
  }
  if (!othIsArr) {
    othTag = getTag(other);
    othTag = othTag == argsTag ? objectTag : othTag;
  }
  var objIsObj = objTag == objectTag && !isHostObject(object),
      othIsObj = othTag == objectTag && !isHostObject(other),
      isSameTag = objTag == othTag;

  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
  }
  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      stack || (stack = new Stack);
      return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, bitmask, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
}

module.exports = baseIsEqualDeep;

},{"./_Stack":6,"./_equalArrays":50,"./_equalByTag":51,"./_equalObjects":52,"./_getTag":56,"./_isHostObject":63,"./isArray":97,"./isTypedArray":107}],35:[function(require,module,exports){
var Stack = require('./_Stack'),
    baseIsEqual = require('./_baseIsEqual');

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack,
          result = customizer ? customizer(objValue, srcValue, key, object, source, stack) : undefined;

      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;

},{"./_Stack":6,"./_baseIsEqual":33}],36:[function(require,module,exports){
var baseMatches = require('./_baseMatches'),
    baseMatchesProperty = require('./_baseMatchesProperty'),
    identity = require('./identity'),
    isArray = require('./isArray'),
    property = require('./property');

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  var type = typeof value;
  if (type == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (type == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;

},{"./_baseMatches":38,"./_baseMatchesProperty":39,"./identity":95,"./isArray":97,"./property":110}],37:[function(require,module,exports){
/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = Object.keys;

/**
 * The base implementation of `_.keys` which doesn't skip the constructor
 * property of prototypes or treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  return nativeKeys(Object(object));
}

module.exports = baseKeys;

},{}],38:[function(require,module,exports){
var baseIsMatch = require('./_baseIsMatch'),
    getMatchData = require('./_getMatchData');

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    var key = matchData[0][0],
        value = matchData[0][1];

    return function(object) {
      if (object == null) {
        return false;
      }
      return object[key] === value &&
        (value !== undefined || (key in Object(object)));
    };
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;

},{"./_baseIsMatch":35,"./_getMatchData":54}],39:[function(require,module,exports){
var baseIsEqual = require('./_baseIsEqual'),
    get = require('./get'),
    hasIn = require('./hasIn');

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new function.
 */
function baseMatchesProperty(path, srcValue) {
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
  };
}

module.exports = baseMatchesProperty;

},{"./_baseIsEqual":33,"./get":92,"./hasIn":94}],40:[function(require,module,exports){
/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;

},{}],41:[function(require,module,exports){
var baseGet = require('./_baseGet');

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;

},{"./_baseGet":30}],42:[function(require,module,exports){
/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeFloor = Math.floor,
    nativeRandom = Math.random;

/**
 * The base implementation of `_.random` without support for returning
 * floating-point numbers.
 *
 * @private
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the random number.
 */
function baseRandom(lower, upper) {
  return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
}

module.exports = baseRandom;

},{}],43:[function(require,module,exports){
/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;

},{}],44:[function(require,module,exports){
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;

},{}],45:[function(require,module,exports){
var arrayMap = require('./_arrayMap');

/**
 * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
 * of key-value pairs for `object` corresponding to the property names of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the new array of key-value pairs.
 */
function baseToPairs(object, props) {
  return arrayMap(props, function(key) {
    return [key, object[key]];
  });
}

module.exports = baseToPairs;

},{"./_arrayMap":13}],46:[function(require,module,exports){
/**
 * Checks if `value` is a global object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {null|Object} Returns `value` if it's a global object, else `null`.
 */
function checkGlobal(value) {
  return (value && value.Object === Object) ? value : null;
}

module.exports = checkGlobal;

},{}],47:[function(require,module,exports){
var isArrayLike = require('./isArrayLike');

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;

},{"./isArrayLike":98}],48:[function(require,module,exports){
/**
 * Creates a base function for methods like `_.forIn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;

},{}],49:[function(require,module,exports){
var toInteger = require('./toInteger'),
    toNumber = require('./toNumber'),
    toString = require('./toString');

/**
 * Creates a function like `_.round`.
 *
 * @private
 * @param {string} methodName The name of the `Math` method to use when rounding.
 * @returns {Function} Returns the new round function.
 */
function createRound(methodName) {
  var func = Math[methodName];
  return function(number, precision) {
    number = toNumber(number);
    precision = toInteger(precision);
    if (precision) {
      // Shift with exponential notation to avoid floating-point issues.
      // See [MDN](https://mdn.io/round#Examples) for more details.
      var pair = (toString(number) + 'e').split('e'),
          value = func(pair[0] + 'e' + (+pair[1] + precision));

      pair = (toString(value) + 'e').split('e');
      return +(pair[0] + 'e' + (+pair[1] - precision));
    }
    return func(number);
  };
}

module.exports = createRound;

},{"./toInteger":113,"./toNumber":114,"./toString":116}],50:[function(require,module,exports){
var arraySome = require('./_arraySome');

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual` for more details.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
  var index = -1,
      isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      isUnordered = bitmask & UNORDERED_COMPARE_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked) {
    return stacked == other;
  }
  var result = true;
  stack.set(array, other);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (isUnordered) {
      if (!arraySome(other, function(othValue) {
            return arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack);
          })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  return result;
}

module.exports = equalArrays;

},{"./_arraySome":14}],51:[function(require,module,exports){
var Symbol = require('./_Symbol'),
    Uint8Array = require('./_Uint8Array'),
    equalArrays = require('./_equalArrays'),
    mapToArray = require('./_mapToArray'),
    setToArray = require('./_setToArray');

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual` for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
  switch (tag) {
    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
      // Coerce dates and booleans to numbers, dates to milliseconds and booleans
      // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
      return +object == +other;

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case numberTag:
      // Treat `NaN` vs. `NaN` as equal.
      return (object != +object) ? other != +other : object == +other;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings primitives and string
      // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      // Recursively compare objects (susceptible to call stack limits).
      return equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask | UNORDERED_COMPARE_FLAG, stack.set(object, other));

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;

},{"./_Symbol":7,"./_Uint8Array":8,"./_equalArrays":50,"./_mapToArray":75,"./_setToArray":79}],52:[function(require,module,exports){
var baseHas = require('./_baseHas'),
    keys = require('./keys');

/** Used to compose bitmasks for comparison styles. */
var PARTIAL_COMPARE_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual` for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      objProps = keys(object),
      objLength = objProps.length,
      othProps = keys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : baseHas(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  return result;
}

module.exports = equalObjects;

},{"./_baseHas":31,"./keys":108}],53:[function(require,module,exports){
var baseProperty = require('./_baseProperty');

/**
 * Gets the "length" property value of `object`.
 *
 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
 * that affects Safari on at least iOS 8.1-8.3 ARM64.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {*} Returns the "length" value.
 */
var getLength = baseProperty('length');

module.exports = getLength;

},{"./_baseProperty":40}],54:[function(require,module,exports){
var isStrictComparable = require('./_isStrictComparable'),
    toPairs = require('./toPairs');

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = toPairs(object),
      length = result.length;

  while (length--) {
    result[length][2] = isStrictComparable(result[length][1]);
  }
  return result;
}

module.exports = getMatchData;

},{"./_isStrictComparable":69,"./toPairs":115}],55:[function(require,module,exports){
var isNative = require('./isNative');

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = object[key];
  return isNative(value) ? value : undefined;
}

module.exports = getNative;

},{"./isNative":102}],56:[function(require,module,exports){
var Map = require('./_Map'),
    Set = require('./_Set'),
    WeakMap = require('./_WeakMap');

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = Function.prototype.toString;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect maps, sets, and weakmaps. */
var mapCtorString = Map ? funcToString.call(Map) : '',
    setCtorString = Set ? funcToString.call(Set) : '',
    weakMapCtorString = WeakMap ? funcToString.call(WeakMap) : '';

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function getTag(value) {
  return objectToString.call(value);
}

// Fallback for IE 11 providing `toStringTag` values for maps, sets, and weakmaps.
if ((Map && getTag(new Map) != mapTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : null,
        ctorString = typeof Ctor == 'function' ? funcToString.call(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case mapCtorString: return mapTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;

},{"./_Map":3,"./_Set":5,"./_WeakMap":9}],57:[function(require,module,exports){
var baseCastPath = require('./_baseCastPath'),
    isArguments = require('./isArguments'),
    isArray = require('./isArray'),
    isIndex = require('./_isIndex'),
    isKey = require('./_isKey'),
    isLength = require('./isLength'),
    isString = require('./isString'),
    last = require('./last'),
    parent = require('./_parent');

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  if (object == null) {
    return false;
  }
  var result = hasFunc(object, path);
  if (!result && !isKey(path)) {
    path = baseCastPath(path);
    object = parent(object, path);
    if (object != null) {
      path = last(path);
      result = hasFunc(object, path);
    }
  }
  var length = object ? object.length : undefined;
  return result || (
    !!length && isLength(length) && isIndex(path, length) &&
    (isArray(object) || isString(object) || isArguments(object))
  );
}

module.exports = hasPath;

},{"./_baseCastPath":21,"./_isIndex":64,"./_isKey":66,"./_parent":77,"./isArguments":96,"./isArray":97,"./isLength":101,"./isString":105,"./last":109}],58:[function(require,module,exports){
var hashHas = require('./_hashHas');

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(hash, key) {
  return hashHas(hash, key) && delete hash[key];
}

module.exports = hashDelete;

},{"./_hashHas":60}],59:[function(require,module,exports){
var nativeCreate = require('./_nativeCreate');

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @param {Object} hash The hash to query.
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(hash, key) {
  if (nativeCreate) {
    var result = hash[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(hash, key) ? hash[key] : undefined;
}

module.exports = hashGet;

},{"./_nativeCreate":76}],60:[function(require,module,exports){
var nativeCreate = require('./_nativeCreate');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @param {Object} hash The hash to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(hash, key) {
  return nativeCreate ? hash[key] !== undefined : hasOwnProperty.call(hash, key);
}

module.exports = hashHas;

},{"./_nativeCreate":76}],61:[function(require,module,exports){
var nativeCreate = require('./_nativeCreate');

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 */
function hashSet(hash, key, value) {
  hash[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
}

module.exports = hashSet;

},{"./_nativeCreate":76}],62:[function(require,module,exports){
var baseTimes = require('./_baseTimes'),
    isArguments = require('./isArguments'),
    isArray = require('./isArray'),
    isLength = require('./isLength'),
    isString = require('./isString');

/**
 * Creates an array of index keys for `object` values of arrays,
 * `arguments` objects, and strings, otherwise `null` is returned.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array|null} Returns index keys, else `null`.
 */
function indexKeys(object) {
  var length = object ? object.length : undefined;
  if (isLength(length) &&
      (isArray(object) || isString(object) || isArguments(object))) {
    return baseTimes(length, String);
  }
  return null;
}

module.exports = indexKeys;

},{"./_baseTimes":44,"./isArguments":96,"./isArray":97,"./isLength":101,"./isString":105}],63:[function(require,module,exports){
/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

module.exports = isHostObject;

},{}],64:[function(require,module,exports){
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return value > -1 && value % 1 == 0 && value < length;
}

module.exports = isIndex;

},{}],65:[function(require,module,exports){
var eq = require('./eq'),
    isArrayLike = require('./isArrayLike'),
    isIndex = require('./_isIndex'),
    isObject = require('./isObject');

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
      ? (isArrayLike(object) && isIndex(index, object.length))
      : (type == 'string' && index in object)) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;

},{"./_isIndex":64,"./eq":87,"./isArrayLike":98,"./isObject":103}],66:[function(require,module,exports){
var isArray = require('./isArray');

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (typeof value == 'number') {
    return true;
  }
  return !isArray(value) &&
    (reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
      (object != null && value in Object(object)));
}

module.exports = isKey;

},{"./isArray":97}],67:[function(require,module,exports){
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return type == 'number' || type == 'boolean' ||
    (type == 'string' && value != '__proto__') || value == null;
}

module.exports = isKeyable;

},{}],68:[function(require,module,exports){
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;

},{}],69:[function(require,module,exports){
var isObject = require('./isObject');

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;

},{"./isObject":103}],70:[function(require,module,exports){
var Hash = require('./_Hash'),
    Map = require('./_Map');

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': Map ? new Map : [],
    'string': new Hash
  };
}

module.exports = mapClear;

},{"./_Hash":2,"./_Map":3}],71:[function(require,module,exports){
var Map = require('./_Map'),
    assocDelete = require('./_assocDelete'),
    hashDelete = require('./_hashDelete'),
    isKeyable = require('./_isKeyable');

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapDelete(key) {
  var data = this.__data__;
  if (isKeyable(key)) {
    return hashDelete(typeof key == 'string' ? data.string : data.hash, key);
  }
  return Map ? data.map['delete'](key) : assocDelete(data.map, key);
}

module.exports = mapDelete;

},{"./_Map":3,"./_assocDelete":15,"./_hashDelete":58,"./_isKeyable":67}],72:[function(require,module,exports){
var Map = require('./_Map'),
    assocGet = require('./_assocGet'),
    hashGet = require('./_hashGet'),
    isKeyable = require('./_isKeyable');

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapGet(key) {
  var data = this.__data__;
  if (isKeyable(key)) {
    return hashGet(typeof key == 'string' ? data.string : data.hash, key);
  }
  return Map ? data.map.get(key) : assocGet(data.map, key);
}

module.exports = mapGet;

},{"./_Map":3,"./_assocGet":16,"./_hashGet":59,"./_isKeyable":67}],73:[function(require,module,exports){
var Map = require('./_Map'),
    assocHas = require('./_assocHas'),
    hashHas = require('./_hashHas'),
    isKeyable = require('./_isKeyable');

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapHas(key) {
  var data = this.__data__;
  if (isKeyable(key)) {
    return hashHas(typeof key == 'string' ? data.string : data.hash, key);
  }
  return Map ? data.map.has(key) : assocHas(data.map, key);
}

module.exports = mapHas;

},{"./_Map":3,"./_assocHas":17,"./_hashHas":60,"./_isKeyable":67}],74:[function(require,module,exports){
var Map = require('./_Map'),
    assocSet = require('./_assocSet'),
    hashSet = require('./_hashSet'),
    isKeyable = require('./_isKeyable');

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache object.
 */
function mapSet(key, value) {
  var data = this.__data__;
  if (isKeyable(key)) {
    hashSet(typeof key == 'string' ? data.string : data.hash, key, value);
  } else if (Map) {
    data.map.set(key, value);
  } else {
    assocSet(data.map, key, value);
  }
  return this;
}

module.exports = mapSet;

},{"./_Map":3,"./_assocSet":19,"./_hashSet":61,"./_isKeyable":67}],75:[function(require,module,exports){
/**
 * Converts `map` to an array.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the converted array.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;

},{}],76:[function(require,module,exports){
var getNative = require('./_getNative');

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;

},{"./_getNative":55}],77:[function(require,module,exports){
var baseSlice = require('./_baseSlice'),
    get = require('./get');

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length == 1 ? object : get(object, baseSlice(path, 0, -1));
}

module.exports = parent;

},{"./_baseSlice":43,"./get":92}],78:[function(require,module,exports){
(function (global){
var checkGlobal = require('./_checkGlobal');

/** Used to determine if values are of the language type `Object`. */
var objectTypes = {
  'function': true,
  'object': true
};

/** Detect free variable `exports`. */
var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType)
  ? exports
  : undefined;

/** Detect free variable `module`. */
var freeModule = (objectTypes[typeof module] && module && !module.nodeType)
  ? module
  : undefined;

/** Detect free variable `global` from Node.js. */
var freeGlobal = checkGlobal(freeExports && freeModule && typeof global == 'object' && global);

/** Detect free variable `self`. */
var freeSelf = checkGlobal(objectTypes[typeof self] && self);

/** Detect free variable `window`. */
var freeWindow = checkGlobal(objectTypes[typeof window] && window);

/** Detect `this` as the global object. */
var thisGlobal = checkGlobal(objectTypes[typeof this] && this);

/**
 * Used as a reference to the global object.
 *
 * The `this` value is used if it's the global object to avoid Greasemonkey's
 * restricted `window` object, otherwise the `window` object is used.
 */
var root = freeGlobal ||
  ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) ||
    freeSelf || thisGlobal || Function('return this')();

module.exports = root;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./_checkGlobal":46}],79:[function(require,module,exports){
/**
 * Converts `set` to an array.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the converted array.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;

},{}],80:[function(require,module,exports){
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = { 'array': [], 'map': null };
}

module.exports = stackClear;

},{}],81:[function(require,module,exports){
var assocDelete = require('./_assocDelete');

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      array = data.array;

  return array ? assocDelete(array, key) : data.map['delete'](key);
}

module.exports = stackDelete;

},{"./_assocDelete":15}],82:[function(require,module,exports){
var assocGet = require('./_assocGet');

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  var data = this.__data__,
      array = data.array;

  return array ? assocGet(array, key) : data.map.get(key);
}

module.exports = stackGet;

},{"./_assocGet":16}],83:[function(require,module,exports){
var assocHas = require('./_assocHas');

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  var data = this.__data__,
      array = data.array;

  return array ? assocHas(array, key) : data.map.has(key);
}

module.exports = stackHas;

},{"./_assocHas":17}],84:[function(require,module,exports){
var MapCache = require('./_MapCache'),
    assocSet = require('./_assocSet');

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache object.
 */
function stackSet(key, value) {
  var data = this.__data__,
      array = data.array;

  if (array) {
    if (array.length < (LARGE_ARRAY_SIZE - 1)) {
      assocSet(array, key, value);
    } else {
      data.array = null;
      data.map = new MapCache(array);
    }
  }
  var map = data.map;
  if (map) {
    map.set(key, value);
  }
  return this;
}

module.exports = stackSet;

},{"./_MapCache":4,"./_assocSet":19}],85:[function(require,module,exports){
var toString = require('./toString');

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
function stringToPath(string) {
  var result = [];
  toString(string).replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
}

module.exports = stringToPath;

},{"./toString":116}],86:[function(require,module,exports){
var baseClamp = require('./_baseClamp'),
    toNumber = require('./toNumber');

/**
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 *
 * @static
 * @memberOf _
 * @category Number
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 * @example
 *
 * _.clamp(-10, -5, 5);
 * // => -5
 *
 * _.clamp(10, -5, 5);
 * // => 5
 */
function clamp(number, lower, upper) {
  if (upper === undefined) {
    upper = lower;
    lower = undefined;
  }
  if (upper !== undefined) {
    upper = toNumber(upper);
    upper = upper === upper ? upper : 0;
  }
  if (lower !== undefined) {
    lower = toNumber(lower);
    lower = lower === lower ? lower : 0;
  }
  return baseClamp(toNumber(number), lower, upper);
}

module.exports = clamp;

},{"./_baseClamp":22,"./toNumber":114}],87:[function(require,module,exports){
/**
 * Performs a [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'user': 'fred' };
 * var other = { 'user': 'fred' };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;

},{}],88:[function(require,module,exports){
var arrayEvery = require('./_arrayEvery'),
    baseEvery = require('./_baseEvery'),
    baseIteratee = require('./_baseIteratee'),
    isArray = require('./isArray'),
    isIterateeCall = require('./_isIterateeCall');

/**
 * Checks if `predicate` returns truthy for **all** elements of `collection`.
 * Iteration is stopped once `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function|Object|string} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for functions like `_.map`.
 * @returns {boolean} Returns `true` if all elements pass the predicate check, else `false`.
 * @example
 *
 * _.every([true, 1, null, 'yes'], Boolean);
 * // => false
 *
 * var users = [
 *   { 'user': 'barney', 'active': false },
 *   { 'user': 'fred',   'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.every(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.every(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.every(users, 'active');
 * // => false
 */
function every(collection, predicate, guard) {
  var func = isArray(collection) ? arrayEvery : baseEvery;
  if (guard && isIterateeCall(collection, predicate, guard)) {
    predicate = undefined;
  }
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = every;

},{"./_arrayEvery":11,"./_baseEvery":24,"./_baseIteratee":36,"./_isIterateeCall":65,"./isArray":97}],89:[function(require,module,exports){
var arrayFilter = require('./_arrayFilter'),
    baseFilter = require('./_baseFilter'),
    baseIteratee = require('./_baseIteratee'),
    isArray = require('./isArray');

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three arguments:
 * (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function|Object|string} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 */
function filter(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = filter;

},{"./_arrayFilter":12,"./_baseFilter":25,"./_baseIteratee":36,"./isArray":97}],90:[function(require,module,exports){
var baseEach = require('./_baseEach'),
    baseFind = require('./_baseFind'),
    baseFindIndex = require('./_baseFindIndex'),
    baseIteratee = require('./_baseIteratee'),
    isArray = require('./isArray');

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three arguments:
 * (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @category Collection
 * @param {Array|Object} collection The collection to search.
 * @param {Function|Object|string} [predicate=_.identity] The function invoked per iteration.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
function find(collection, predicate) {
  predicate = baseIteratee(predicate, 3);
  if (isArray(collection)) {
    var index = baseFindIndex(collection, predicate);
    return index > -1 ? collection[index] : undefined;
  }
  return baseFind(collection, predicate, baseEach);
}

module.exports = find;

},{"./_baseEach":23,"./_baseFind":26,"./_baseFindIndex":27,"./_baseIteratee":36,"./isArray":97}],91:[function(require,module,exports){
var arrayEach = require('./_arrayEach'),
    baseCastFunction = require('./_baseCastFunction'),
    baseEach = require('./_baseEach'),
    isArray = require('./isArray');

/**
 * Iterates over elements of `collection` invoking `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length" property
 * are iterated like arrays. To avoid this behavior use `_.forIn` or `_.forOwn`
 * for object iteration.
 *
 * @static
 * @memberOf _
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @example
 *
 * _([1, 2]).forEach(function(value) {
 *   console.log(value);
 * });
 * // => logs `1` then `2`
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => logs 'a' then 'b' (iteration order is not guaranteed)
 */
function forEach(collection, iteratee) {
  return (typeof iteratee == 'function' && isArray(collection))
    ? arrayEach(collection, iteratee)
    : baseEach(collection, baseCastFunction(iteratee));
}

module.exports = forEach;

},{"./_arrayEach":10,"./_baseCastFunction":20,"./_baseEach":23,"./isArray":97}],92:[function(require,module,exports){
var baseGet = require('./_baseGet');

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined` the `defaultValue` is used in its place.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;

},{"./_baseGet":30}],93:[function(require,module,exports){
var baseHas = require('./_baseHas'),
    hasPath = require('./_hasPath');

/**
 * Checks if `path` is a direct property of `object`.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': { 'c': 3 } } };
 * var other = _.create({ 'a': _.create({ 'b': _.create({ 'c': 3 }) }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b.c');
 * // => true
 *
 * _.has(object, ['a', 'b', 'c']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */
function has(object, path) {
  return hasPath(object, path, baseHas);
}

module.exports = has;

},{"./_baseHas":31,"./_hasPath":57}],94:[function(require,module,exports){
var baseHasIn = require('./_baseHasIn'),
    hasPath = require('./_hasPath');

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': _.create({ 'c': 3 }) }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b.c');
 * // => true
 *
 * _.hasIn(object, ['a', 'b', 'c']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return hasPath(object, path, baseHasIn);
}

module.exports = hasIn;

},{"./_baseHasIn":32,"./_hasPath":57}],95:[function(require,module,exports){
/**
 * This method returns the first argument given to it.
 *
 * @static
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'user': 'fred' };
 *
 * _.identity(object) === object;
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;

},{}],96:[function(require,module,exports){
var isArrayLikeObject = require('./isArrayLikeObject');

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

module.exports = isArguments;

},{"./isArrayLikeObject":99}],97:[function(require,module,exports){
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @type {Function}
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;

},{}],98:[function(require,module,exports){
var getLength = require('./_getLength'),
    isFunction = require('./isFunction'),
    isLength = require('./isLength');

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(getLength(value)) && !isFunction(value);
}

module.exports = isArrayLike;

},{"./_getLength":53,"./isFunction":100,"./isLength":101}],99:[function(require,module,exports){
var isArrayLike = require('./isArrayLike'),
    isObjectLike = require('./isObjectLike');

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object, else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;

},{"./isArrayLike":98,"./isObjectLike":104}],100:[function(require,module,exports){
var isObject = require('./isObject');

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8 which returns 'object' for typed array and weak map constructors,
  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

module.exports = isFunction;

},{"./isObject":103}],101:[function(require,module,exports){
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

},{}],102:[function(require,module,exports){
var isFunction = require('./isFunction'),
    isHostObject = require('./_isHostObject'),
    isObjectLike = require('./isObjectLike');

/** Used to match `RegExp` [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns). */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari > 5). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * Checks if `value` is a native function.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
 * @example
 *
 * _.isNative(Array.prototype.push);
 * // => true
 *
 * _.isNative(_);
 * // => false
 */
function isNative(value) {
  if (value == null) {
    return false;
  }
  if (isFunction(value)) {
    return reIsNative.test(funcToString.call(value));
  }
  return isObjectLike(value) &&
    (isHostObject(value) ? reIsNative : reIsHostCtor).test(value);
}

module.exports = isNative;

},{"./_isHostObject":63,"./isFunction":100,"./isObjectLike":104}],103:[function(require,module,exports){
/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

module.exports = isObject;

},{}],104:[function(require,module,exports){
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

module.exports = isObjectLike;

},{}],105:[function(require,module,exports){
var isArray = require('./isArray'),
    isObjectLike = require('./isObjectLike');

/** `Object#toString` result references. */
var stringTag = '[object String]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
}

module.exports = isString;

},{"./isArray":97,"./isObjectLike":104}],106:[function(require,module,exports){
var isObjectLike = require('./isObjectLike');

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

module.exports = isSymbol;

},{"./isObjectLike":104}],107:[function(require,module,exports){
var isLength = require('./isLength'),
    isObjectLike = require('./isObjectLike');

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dateTag] = typedArrayTags[errorTag] =
typedArrayTags[funcTag] = typedArrayTags[mapTag] =
typedArrayTags[numberTag] = typedArrayTags[objectTag] =
typedArrayTags[regexpTag] = typedArrayTags[setTag] =
typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
function isTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
}

module.exports = isTypedArray;

},{"./isLength":101,"./isObjectLike":104}],108:[function(require,module,exports){
var baseHas = require('./_baseHas'),
    baseKeys = require('./_baseKeys'),
    indexKeys = require('./_indexKeys'),
    isArrayLike = require('./isArrayLike'),
    isIndex = require('./_isIndex'),
    isPrototype = require('./_isPrototype');

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  var isProto = isPrototype(object);
  if (!(isProto || isArrayLike(object))) {
    return baseKeys(object);
  }
  var indexes = indexKeys(object),
      skipIndexes = !!indexes,
      result = indexes || [],
      length = result.length;

  for (var key in object) {
    if (baseHas(object, key) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length))) &&
        !(isProto && key == 'constructor')) {
      result.push(key);
    }
  }
  return result;
}

module.exports = keys;

},{"./_baseHas":31,"./_baseKeys":37,"./_indexKeys":62,"./_isIndex":64,"./_isPrototype":68,"./isArrayLike":98}],109:[function(require,module,exports){
/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array ? array.length : 0;
  return length ? array[length - 1] : undefined;
}

module.exports = last;

},{}],110:[function(require,module,exports){
var baseProperty = require('./_baseProperty'),
    basePropertyDeep = require('./_basePropertyDeep'),
    isKey = require('./_isKey');

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': { 'c': 2 } } },
 *   { 'a': { 'b': { 'c': 1 } } }
 * ];
 *
 * _.map(objects, _.property('a.b.c'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
}

module.exports = property;

},{"./_baseProperty":40,"./_basePropertyDeep":41,"./_isKey":66}],111:[function(require,module,exports){
var baseRandom = require('./_baseRandom'),
    isIterateeCall = require('./_isIterateeCall'),
    toNumber = require('./toNumber');

/** Built-in method references without a dependency on `root`. */
var freeParseFloat = parseFloat;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min,
    nativeRandom = Math.random;

/**
 * Produces a random number between the inclusive `lower` and `upper` bounds.
 * If only one argument is provided a number between `0` and the given number
 * is returned. If `floating` is `true`, or either `lower` or `upper` are floats,
 * a floating-point number is returned instead of an integer.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @memberOf _
 * @category Number
 * @param {number} [lower=0] The lower bound.
 * @param {number} [upper=1] The upper bound.
 * @param {boolean} [floating] Specify returning a floating-point number.
 * @returns {number} Returns the random number.
 * @example
 *
 * _.random(0, 5);
 * // => an integer between 0 and 5
 *
 * _.random(5);
 * // => also an integer between 0 and 5
 *
 * _.random(5, true);
 * // => a floating-point number between 0 and 5
 *
 * _.random(1.2, 5.2);
 * // => a floating-point number between 1.2 and 5.2
 */
function random(lower, upper, floating) {
  if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
    upper = floating = undefined;
  }
  if (floating === undefined) {
    if (typeof upper == 'boolean') {
      floating = upper;
      upper = undefined;
    }
    else if (typeof lower == 'boolean') {
      floating = lower;
      lower = undefined;
    }
  }
  if (lower === undefined && upper === undefined) {
    lower = 0;
    upper = 1;
  }
  else {
    lower = toNumber(lower) || 0;
    if (upper === undefined) {
      upper = lower;
      lower = 0;
    } else {
      upper = toNumber(upper) || 0;
    }
  }
  if (lower > upper) {
    var temp = lower;
    lower = upper;
    upper = temp;
  }
  if (floating || lower % 1 || upper % 1) {
    var rand = nativeRandom();
    return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
  }
  return baseRandom(lower, upper);
}

module.exports = random;

},{"./_baseRandom":42,"./_isIterateeCall":65,"./toNumber":114}],112:[function(require,module,exports){
var createRound = require('./_createRound');

/**
 * Computes `number` rounded to `precision`.
 *
 * @static
 * @memberOf _
 * @category Math
 * @param {number} number The number to round.
 * @param {number} [precision=0] The precision to round to.
 * @returns {number} Returns the rounded number.
 * @example
 *
 * _.round(4.006);
 * // => 4
 *
 * _.round(4.006, 2);
 * // => 4.01
 *
 * _.round(4060, -2);
 * // => 4100
 */
var round = createRound('round');

module.exports = round;

},{"./_createRound":49}],113:[function(require,module,exports){
var toNumber = require('./toNumber');

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to an integer.
 *
 * **Note:** This function is loosely based on [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3');
 * // => 3
 */
function toInteger(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  var remainder = value % 1;
  return value === value ? (remainder ? value - remainder : value) : 0;
}

module.exports = toInteger;

},{"./toNumber":114}],114:[function(require,module,exports){
var isFunction = require('./isFunction'),
    isObject = require('./isObject');

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3);
 * // => 3
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3');
 * // => 3
 */
function toNumber(value) {
  if (isObject(value)) {
    var other = isFunction(value.valueOf) ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;

},{"./isFunction":100,"./isObject":103}],115:[function(require,module,exports){
var baseToPairs = require('./_baseToPairs'),
    keys = require('./keys');

/**
 * Creates an array of own enumerable key-value pairs for `object` which
 * can be consumed by `_.fromPairs`.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the new array of key-value pairs.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.toPairs(new Foo);
 * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
 */
function toPairs(object) {
  return baseToPairs(object, keys(object));
}

module.exports = toPairs;

},{"./_baseToPairs":45,"./keys":108}],116:[function(require,module,exports){
var Symbol = require('./_Symbol'),
    isSymbol = require('./isSymbol');

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Converts `value` to a string if it's not one. An empty string is returned
 * for `null` and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (value == null) {
    return '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toString;

},{"./_Symbol":7,"./isSymbol":106}],117:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Appearance = require('./components/Appearance');

var _Appearance2 = _interopRequireDefault(_Appearance);

var _SecondaryAppearance = require('./components/SecondaryAppearance');

var _SecondaryAppearance2 = _interopRequireDefault(_SecondaryAppearance);

var _Health = require('./components/Health');

var _Health2 = _interopRequireDefault(_Health);

var _Position = require('./components/Position');

var _Position2 = _interopRequireDefault(_Position);

var _PlayerControlled = require('./components/PlayerControlled');

var _PlayerControlled2 = _interopRequireDefault(_PlayerControlled);

var _Collision = require('./components/Collision');

var _Collision2 = _interopRequireDefault(_Collision);

var _Delicious = require('./components/Delicious');

var _Delicious2 = _interopRequireDefault(_Delicious);

var _TooSpicy = require('./components/TooSpicy');

var _TooSpicy2 = _interopRequireDefault(_TooSpicy);

var _Laser = require('./components/Laser');

var _Laser2 = _interopRequireDefault(_Laser);

var _Spawn = require('./components/Spawn');

var _Spawn2 = _interopRequireDefault(_Spawn);

var _SoundEffect = require('./components/SoundEffect');

var _SoundEffect2 = _interopRequireDefault(_SoundEffect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Appearance: _Appearance2.default,
  SecondaryAppearance: _SecondaryAppearance2.default,
  Health: _Health2.default,
  Position: _Position2.default,
  PlayerControlled: _PlayerControlled2.default,
  Collision: _Collision2.default,
  Delicious: _Delicious2.default,
  TooSpicy: _TooSpicy2.default,
  Laser: _Laser2.default,
  Spawn: _Spawn2.default,
  SoundEffect: _SoundEffect2.default
};

},{"./components/Appearance":128,"./components/Collision":129,"./components/Delicious":130,"./components/Health":131,"./components/Laser":132,"./components/PlayerControlled":133,"./components/Position":134,"./components/SecondaryAppearance":135,"./components/SoundEffect":136,"./components/Spawn":137,"./components/TooSpicy":138}],118:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Entity = require('./Entity');

var _Entity2 = _interopRequireDefault(_Entity);

var _Components = require('./Components');

var _Components2 = _interopRequireDefault(_Components);

var _Systems = require('./Systems');

var _Systems2 = _interopRequireDefault(_Systems);

var _assemblages = require('./assemblages');

var _assemblages2 = _interopRequireDefault(_assemblages);

var _Game = require('./Game');

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ECS = {
  Entity: _Entity2.default,
  components: _Components2.default,
  systems: _Systems2.default,
  assemblages: _assemblages2.default,
  game: _Game2.default,
  entities: {},
  score: 0,
  addEntity: function addEntity(entity) {
    ECS.entities[entity.id] = entity;
  },
  removeEntity: function removeEntity(entity) {
    delete ECS.entities[entity.id || entity];
  }
};

exports.default = ECS;

},{"./Components":117,"./Entity":119,"./Game":120,"./Systems":121,"./assemblages":122}],119:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function Entity() {
  this.id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
  this.components = {};
  return this;
}

Entity.prototype.addComponent = function (component) {
  this.components[component.name] = component;
  return this;
};

Entity.prototype.removeComponent = function (component) {
  var name = typeof component === 'function' ? componentName.prototype.name : component;

  delete this.components[name];
  return this;
};

Entity.prototype.dehydrate = function () {
  console.log(JSON.stringify(this, null, 4));
  return this;
};

exports.default = Entity;

},{}],120:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _forEach = require('lodash/forEach');

var _forEach2 = _interopRequireDefault(_forEach);

var _round = require('lodash/round');

var _round2 = _interopRequireDefault(_round);

var _filter = require('lodash/filter');

var _filter2 = _interopRequireDefault(_filter);

var _every = require('lodash/every');

var _every2 = _interopRequireDefault(_every);

var _random = require('lodash/random');

var _random2 = _interopRequireDefault(_random);

var _clamp = require('lodash/clamp');

var _clamp2 = _interopRequireDefault(_clamp);

var _ECS = require('./ECS');

var _ECS2 = _interopRequireDefault(_ECS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultStartPos = { x: 1.1 };

var range = function range(num) {
  return Array.from(Array(num).keys());
};
var filteredEntities = function filteredEntities(req) {
  return (0, _filter2.default)(_ECS2.default.entities, function (e) {
    return (0, _every2.default)(req, function (r) {
      return !!e.components[r];
    });
  });
};

function Game() {
  var _this = this;

  var _ECS$assemblages = _ECS2.default.assemblages;
  var BuffaloWing = _ECS$assemblages.BuffaloWing;
  var DeathWing = _ECS$assemblages.DeathWing;
  var Daninator = _ECS$assemblages.Daninator;


  var gameLoop = function gameLoop() {
    (0, _forEach2.default)(_ECS2.default.systems, function (system) {
      return system(filteredEntities(system.requirements));
    });
    if ((0, _random2.default)(200) <= _this.speed) _this.spawnWings();
    if ((0, _random2.default)(10000) <= _this.speed) _this.spawnLaserPickup();
    _this.speed += 0.01;
    _this.difficulty += 0.01;
    if (_this._running) requestAnimationFrame(gameLoop);
  };

  var modSpeed = function modSpeed(speed) {
    return _this.speed = (0, _clamp2.default)(speed, 1, 50);
  };
  var modDifficulty = function modDifficulty(difficulty) {
    return _this.difficulty = (0, _clamp2.default)(difficulty, 10, 80);
  };
  var wingFactory = function wingFactory(Type) {
    return _ECS2.default.addEntity(new Type(defaultStartPos));
  };

  this.speed = 1;
  this.increaseSpeed = function () {
    return modSpeed(_this.speed + 1);
  };
  this.decreaseSpeed = function () {
    return modSpeed(_this.speed - 1);
  };

  this.difficulty = 10;
  this.increaseDifficulty = function () {
    return modDifficulty(_this.difficulty + 2);
  };
  this.decreaseDifficulty = function () {
    return modDifficulty(_this.difficulty - 1);
  };

  this.spawnWings = function () {
    return wingFactory((0, _random2.default)(100) >= _this.difficulty ? BuffaloWing : DeathWing);
  };
  this.spawnLaserPickup = function () {
    return _ECS2.default.addEntity(new _ECS2.default.assemblages.LaserPickup(defaultStartPos));
  };

  this.updateScore = function () {
    var delta = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

    _ECS2.default.score += (0, _round2.default)(delta * (_this.speed + _this.difficulty));
  };

  this.startGame = function () {
    _this._running = true;
    if (window.location.hash.length) {
      _this.loadGame();
    } else {
      _ECS2.default.addEntity(new Daninator({ x: 0.08, y: 0.5 }));
      _this.spawnWings();
    }
    requestAnimationFrame(gameLoop);
  };

  this.loadGame = function () {
    var _JSON$parse = JSON.parse(atob(window.location.hash.split('#')[1]));

    var entities = _JSON$parse.entities;
    var score = _JSON$parse.score;

    _ECS2.default.entities = entities;
    _ECS2.default.score = score;
  };

  this.saveGame = function () {
    var data = { entities: _ECS2.default.entities, score: _ECS2.default.score };
    window.location.hash = '#' + btoa(JSON.stringify(data));
  };

  this.togglePause = function () {
    _this._running = !_this._running;
    _this._running && requestAnimationFrame(gameLoop);
  };

  this.endGame = function () {
    _this._running = false;
    document.getElementById('final-score').innerHTML = _ECS2.default.score;
    document.getElementById('game-over').className = '';
    setTimeout(function () {
      return document.getElementById('game-canvas').className = 'game-over';
    }, 100);
  };

  return this;
}

exports.default = Game;

},{"./ECS":118,"lodash/clamp":86,"lodash/every":88,"lodash/filter":89,"lodash/forEach":91,"lodash/random":111,"lodash/round":112}],121:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _userInput = require('./systems/userInput');

var _userInput2 = _interopRequireDefault(_userInput);

var _wingMovement = require('./systems/wingMovement');

var _wingMovement2 = _interopRequireDefault(_wingMovement);

var _collision = require('./systems/collision');

var _collision2 = _interopRequireDefault(_collision);

var _healthMonitor = require('./systems/healthMonitor');

var _healthMonitor2 = _interopRequireDefault(_healthMonitor);

var _soundFX = require('./systems/soundFX');

var _soundFX2 = _interopRequireDefault(_soundFX);

var _render = require('./systems/render');

var _render2 = _interopRequireDefault(_render);

var _renderUI = require('./systems/renderUI');

var _renderUI2 = _interopRequireDefault(_renderUI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_userInput2.default, _wingMovement2.default, _collision2.default, _healthMonitor2.default, _soundFX2.default, _render2.default, _renderUI2.default];

},{"./systems/collision":140,"./systems/healthMonitor":141,"./systems/render":142,"./systems/renderUI":143,"./systems/soundFX":144,"./systems/userInput":145,"./systems/wingMovement":146}],122:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Daninator = require('./assemblages/Daninator');

var _Daninator2 = _interopRequireDefault(_Daninator);

var _BuffaloWing = require('./assemblages/BuffaloWing');

var _BuffaloWing2 = _interopRequireDefault(_BuffaloWing);

var _DeathWing = require('./assemblages/DeathWing');

var _DeathWing2 = _interopRequireDefault(_DeathWing);

var _LaserPickup = require('./assemblages/LaserPickup');

var _LaserPickup2 = _interopRequireDefault(_LaserPickup);

var _Laser = require('./assemblages/Laser');

var _Laser2 = _interopRequireDefault(_Laser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Daninator: _Daninator2.default,
  BuffaloWing: _BuffaloWing2.default,
  DeathWing: _DeathWing2.default,
  LaserPickup: _LaserPickup2.default,
  Laser: _Laser2.default
};

},{"./assemblages/BuffaloWing":123,"./assemblages/Daninator":124,"./assemblages/DeathWing":125,"./assemblages/Laser":126,"./assemblages/LaserPickup":127}],123:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _random = require('lodash/random');

var _random2 = _interopRequireDefault(_random);

var _ECS = require('../ECS');

var _ECS2 = _interopRequireDefault(_ECS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appearance = { size: { w: 30, h: 30 }, image: 'buffaloWing' };

exports.default = function (position) {
  var entity = new _ECS2.default.Entity();
  entity.addComponent(new _ECS2.default.components.Appearance(appearance));
  entity.addComponent(new _ECS2.default.components.Position(position));
  entity.addComponent(new _ECS2.default.components.Collision());
  entity.addComponent(new _ECS2.default.components.Delicious());
  entity.components.position.deg = (0, _random2.default)(0, 359);
  return entity;
};

},{"../ECS":118,"lodash/random":111}],124:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ECS = require('../ECS');

var _ECS2 = _interopRequireDefault(_ECS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appearance = { size: { w: 55, h: 82 }, image: 'daninator', altImage: 'daninator-eating' };

exports.default = function (position) {
  var entity = new _ECS2.default.Entity();
  entity.addComponent(new _ECS2.default.components.Appearance(appearance));
  entity.addComponent(new _ECS2.default.components.Position(position));
  entity.addComponent(new _ECS2.default.components.PlayerControlled(true));
  entity.addComponent(new _ECS2.default.components.Health(100));
  entity.addComponent(new _ECS2.default.components.Collision());
  entity.addComponent(new _ECS2.default.components.SoundEffect());
  return entity;
};

},{"../ECS":118}],125:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _random = require('lodash/random');

var _random2 = _interopRequireDefault(_random);

var _ECS = require('../ECS');

var _ECS2 = _interopRequireDefault(_ECS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appearance = { size: { w: 35, h: 35 }, image: 'deathWing' };

exports.default = function (position) {
  var entity = new _ECS2.default.Entity();
  entity.addComponent(new _ECS2.default.components.Appearance(appearance));
  entity.addComponent(new _ECS2.default.components.Position(position));
  entity.addComponent(new _ECS2.default.components.Collision());
  entity.addComponent(new _ECS2.default.components.TooSpicy());
  entity.components.position.deg = (0, _random2.default)(0, 359);
  return entity;
};

},{"../ECS":118,"lodash/random":111}],126:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ECS = require('../ECS');

var _ECS2 = _interopRequireDefault(_ECS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appearance = { size: { w: 800, h: 45 }, image: 'laser', imageAlign: 'l' };
var secAppearance = { size: { w: 65, h: 65 }, image: 'laserEyes' };

exports.default = function (position) {
  var entity = new _ECS2.default.Entity();
  entity.addComponent(new _ECS2.default.components.Appearance(appearance));
  entity.addComponent(new _ECS2.default.components.SecondaryAppearance(secAppearance));
  entity.addComponent(new _ECS2.default.components.Position(position));
  entity.addComponent(new _ECS2.default.components.PlayerControlled());
  entity.addComponent(new _ECS2.default.components.Collision());
  entity.addComponent(new _ECS2.default.components.Laser());
  entity.addComponent(new _ECS2.default.components.SoundEffect());
  return entity;
};

},{"../ECS":118}],127:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ECS = require('../ECS');

var _ECS2 = _interopRequireDefault(_ECS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appearance = { size: { w: 50, h: 50 }, image: 'laserPickup' };

exports.default = function (position) {
  var entity = new _ECS2.default.Entity();
  entity.addComponent(new _ECS2.default.components.Appearance(appearance));
  entity.addComponent(new _ECS2.default.components.Position(position));
  entity.addComponent(new _ECS2.default.components.Collision());
  entity.addComponent(new _ECS2.default.components.Spawn(_ECS2.default.assemblages.Laser));
  return entity;
};

},{"../ECS":118}],128:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function Appearance() {
  var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  this.size = params.size || { w: 50, h: 50 };
  this.image = 'img/' + (params.image || 'missing') + '.png';
  this.imageAlign = params.imageAlign || 'c'; // l|r|t|b|tl|tr|bl|br
  this.altImage = 'img/' + (params.altImage || 'missing') + '.png';
  this.useAltImage = false;
}

Appearance.prototype.name = 'appearance';

exports.default = Appearance;

},{}],129:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function Collision() {
  this.collides = true;
}

Collision.prototype.name = 'collision';

exports.default = Collision;

},{}],130:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function Delicious() {
  var value = arguments.length <= 0 || arguments[0] === undefined ? 2 : arguments[0];

  this.healing = value;
}

Delicious.prototype.name = 'delicious';

exports.default = Delicious;

},{}],131:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function Health() {
  var value = arguments.length <= 0 || arguments[0] === undefined ? 20 : arguments[0];

  this.maxHealth = value;
  this.value = value;
}

Health.prototype.name = 'health';

exports.default = Health;

},{}],132:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function Laser() {
  var ammo = arguments.length <= 0 || arguments[0] === undefined ? 120 : arguments[0];

  this.firing = false;
  this.ammo = ammo;
  this.maxAmmo = ammo;
}

Laser.prototype.name = 'laser';

exports.default = Laser;

},{}],133:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function PlayerControlled() {
  var isPlayer = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

  if (isPlayer) this.isPlayer = true;
  this.pc = true;
}

PlayerControlled.prototype.name = 'playerControlled';

exports.default = PlayerControlled;

},{}],134:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _random = require('lodash/random');

var _random2 = _interopRequireDefault(_random);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Position() {
  var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  this.x = params.x || (0, _random2.default)(0.05, 0.95);
  this.y = params.y || (0, _random2.default)(0.05, 0.95);
  this.deg = params.deg || 0;
}

Position.prototype.name = 'position';

exports.default = Position;

},{"lodash/random":111}],135:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function SecondaryAppearance() {
  var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  this.size = params.size || { w: 50, h: 50 };
  this.image = 'img/' + (params.image || 'missing') + '.png';
  this.imageAlign = params.imageAlign || 'c'; // l|r|t|b|tl|tr|bl|br
}

SecondaryAppearance.prototype.name = 'secondaryAppearance';

exports.default = SecondaryAppearance;

},{}],136:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function SoundEffect() {
  var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  this.effect = params.effect || '';
  this.action = params.action || '';
}

SoundEffect.prototype.name = 'soundEffect';

exports.default = SoundEffect;

},{}],137:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function Spawn(entity) {
  this.entity = entity;
}

Spawn.prototype.name = 'spawn';

exports.default = Spawn;

},{}],138:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function TooSpicy() {
  var value = arguments.length <= 0 || arguments[0] === undefined ? 25 : arguments[0];

  this.damage = value;
}

TooSpicy.prototype.name = 'tooSpicy';

exports.default = TooSpicy;

},{}],139:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (ctx, canvas) {
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
};

},{}],140:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _forEach = require('lodash/forEach');

var _forEach2 = _interopRequireDefault(_forEach);

var _find = require('lodash/find');

var _find2 = _interopRequireDefault(_find);

var _has = require('lodash/has');

var _has2 = _interopRequireDefault(_has);

var _clamp = require('lodash/clamp');

var _clamp2 = _interopRequireDefault(_clamp);

var _ECS = require('../ECS');

var _ECS2 = _interopRequireDefault(_ECS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function dimensions(entity) {
  var _ECS$$canvas = _ECS2.default.$canvas;
  var width = _ECS$$canvas.width;
  var height = _ECS$$canvas.height;
  var _entity$components$po = entity.components.position;
  var x = _entity$components$po.x;
  var y = _entity$components$po.y;
  var _entity$components$ap = entity.components.appearance.size;
  var w = _entity$components$ap.w;
  var h = _entity$components$ap.h;


  return {
    l: x * width - w / 2,
    t: y * height - h / 2,
    r: x * width + w / 2,
    b: y * height + h / 2
  };
}

function doesIntersect(a, b) {
  a = dimensions(a);
  b = dimensions(b);
  return a.r > b.l && a.l < b.r && a.t < b.b && a.b > b.t;
}

var Collision = function Collision(entities) {
  var findByComponent = function findByComponent(component) {
    return (0, _find2.default)(entities, function (e) {
      return (0, _has2.default)(e, 'components.' + component);
    });
  };
  var modHealth = function modHealth(entity, mod) {
    var _entity$components$he = entity.components.health;
    var value = _entity$components$he.value;
    var maxHealth = _entity$components$he.maxHealth;

    entity.components.health.value = (0, _clamp2.default)(value + mod, 0, maxHealth);
  };
  var player = findByComponent('playerControlled.isPlayer');
  var laser = findByComponent('laser');
  var _player$components = player.components;
  var appearance = _player$components.appearance;
  var position = _player$components.position;
  var soundEffect = _player$components.soundEffect;


  (0, _forEach2.default)(entities, function (entity) {
    var _entity$components = entity.components;
    var delicious = _entity$components.delicious;
    var tooSpicy = _entity$components.tooSpicy;
    var spawn = _entity$components.spawn;
    var playerControlled = _entity$components.playerControlled;

    // handle laser collisions

    if (!playerControlled && laser && laser.components.laser.firing && doesIntersect(laser, entity)) {
      if (tooSpicy) _ECS2.default.game.updateScore(100);
      if (!spawn) _ECS2.default.removeEntity(entity);
    }

    // handle player collisions
    if (!playerControlled && doesIntersect(player, entity)) {
      appearance.useAltImage = true;
      setTimeout(function () {
        return appearance.useAltImage = false;
      }, 200);
      if (spawn) {
        // with pickups
        soundEffect.effect = 'yeah';
        soundEffect.action = 'fire';
        if (laser) {
          laser.components.laser.ammo += 60;
          laser.components.laser.maxAmmo += 60;
        } else {
          _ECS2.default.addEntity(new spawn.entity(position));
        }
      }

      if (tooSpicy) {
        // with DeathWings
        soundEffect.effect = 'oww';
        soundEffect.action = 'fire';
        modHealth(player, -tooSpicy.damage);
        _ECS2.default.game.increaseDifficulty();
        _ECS2.default.game.updateScore(-1);
      }

      if (delicious) {
        // with BuffaloWings
        soundEffect.effect = 'nom';
        soundEffect.action = 'fire';
        modHealth(player, delicious.healing);
        _ECS2.default.game.updateScore();
      }

      _ECS2.default.removeEntity(entity);
    }
  });
};

Collision.requirements = ['appearance', 'position'];

exports.default = Collision;

},{"../ECS":118,"lodash/clamp":86,"lodash/find":90,"lodash/forEach":91,"lodash/has":93}],141:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _forEach = require('lodash/forEach');

var _forEach2 = _interopRequireDefault(_forEach);

var _ECS = require('../ECS');

var _ECS2 = _interopRequireDefault(_ECS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HealthMonitor = function HealthMonitor(entities) {
  (0, _forEach2.default)(entities, function (entity) {
    return entity.components.health.value <= 0 && _ECS2.default.game.endGame();
  });
};

HealthMonitor.requirements = ['playerControlled', 'health'];

exports.default = HealthMonitor;

},{"../ECS":118,"lodash/forEach":91}],142:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _forEach = require('lodash/forEach');

var _forEach2 = _interopRequireDefault(_forEach);

var _ECS = require('../ECS');

var _ECS2 = _interopRequireDefault(_ECS);

var _clearCanvas = require('../helpers/clearCanvas');

var _clearCanvas2 = _interopRequireDefault(_clearCanvas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var imgCache = {};

var drawImageRot = function drawImageRot(img, x, y, w, h, deg) {
  var rad = deg * Math.PI / 180;
  _ECS2.default.context.translate(x + w / 2, y + h / 2);
  _ECS2.default.context.rotate(rad);
  _ECS2.default.context.drawImage(img, w / 2 * -1, h / 2 * -1, w, h);
  _ECS2.default.context.rotate(rad * -1);
  _ECS2.default.context.translate((x + w / 2) * -1, (y + h / 2) * -1);
};

var imagePosition = function imagePosition(x, y, w, h, align) {
  var _ECS$$canvas = _ECS2.default.$canvas;
  var width = _ECS$$canvas.width;
  var height = _ECS$$canvas.height;

  var t = y * height,
      b = y * height - h,
      m = y * height - h / 2,
      l = x * width,
      c = x * width - w / 2,
      r = x * width - w;
  var coords = {
    c: { x: c, y: m },
    l: { x: l, y: m },
    r: { x: r, y: m },
    t: { x: c, y: t },
    b: { x: c, y: b },
    tl: { x: l, y: t },
    tr: { x: r, y: t },
    bl: { x: l, y: b },
    br: { x: r, y: b }
  };
  return coords[align];
};

var drawAppearance = function drawAppearance(appearance, position) {
  var image = appearance.image;
  var imageAlign = appearance.imageAlign;
  var size = appearance.size;
  var altImage = appearance.altImage;
  var useAltImage = appearance.useAltImage;

  if (useAltImage) image = altImage;
  var w = size.w;
  var h = size.h;
  var x = position.x;
  var y = position.y;
  var deg = position.deg;

  w = w * 1.6; // trying to get hitboxes roughly comparable to graphic
  h = h * 1.6;
  var pos = imagePosition(x, y, w, h, imageAlign);

  if (!imgCache[image]) {
    (function () {
      var img = new Image();
      img.onload = function () {
        imgCache[image] = img;
        drawImageRot(imgCache[image], pos.x, pos.y, w, h, deg);
      };
      img.src = image;
    })();
  } else {
    drawImageRot(imgCache[image], pos.x, pos.y, w, h, deg);
  }
};

var Render = function Render(entities) {
  (0, _clearCanvas2.default)(_ECS2.default.context, _ECS2.default.$canvas);

  (0, _forEach2.default)(entities, function (entity) {
    var _entity$components = entity.components;
    var appearance = _entity$components.appearance;
    var secondaryAppearance = _entity$components.secondaryAppearance;
    var position = _entity$components.position;
    var health = _entity$components.health;
    var playerControlled = _entity$components.playerControlled;
    var laser = _entity$components.laser;


    if (laser && !laser.firing) return;
    drawAppearance(appearance, position);
    if (secondaryAppearance) drawAppearance(secondaryAppearance, position);
  });
};

Render.requirements = ['appearance', 'position'];

exports.default = Render;

},{"../ECS":118,"../helpers/clearCanvas":139,"lodash/forEach":91}],143:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _forEach = require('lodash/forEach');

var _forEach2 = _interopRequireDefault(_forEach);

var _ECS = require('../ECS');

var _ECS2 = _interopRequireDefault(_ECS);

var _clearCanvas = require('../helpers/clearCanvas');

var _clearCanvas2 = _interopRequireDefault(_clearCanvas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var drawHealthBar = function drawHealthBar(value, max) {
  var _ECS$$UIcanvas = _ECS2.default.$UIcanvas;
  var width = _ECS$$UIcanvas.width;
  var height = _ECS$$UIcanvas.height;

  _ECS2.default.UIcontext.fillStyle = 'rgba(66,66,66,0.7)';
  _ECS2.default.UIcontext.fillRect(50, height - 60, width - 100, 30);
  _ECS2.default.UIcontext.fillStyle = 'rgba(179,204,87,1)';
  _ECS2.default.UIcontext.fillRect(50, height - 60, (width - 100) * (value / max), 30);
};
var drawAmmoBar = function drawAmmoBar(value, max) {
  var _ECS$$UIcanvas2 = _ECS2.default.$UIcanvas;
  var width = _ECS$$UIcanvas2.width;
  var height = _ECS$$UIcanvas2.height;

  _ECS2.default.UIcontext.fillStyle = 'rgba(66,66,66,0.7)';
  _ECS2.default.UIcontext.fillRect(50, height - 30, width - 100, 10);
  _ECS2.default.UIcontext.fillStyle = 'rgba(63,184,175,1)';
  _ECS2.default.UIcontext.fillRect(50, height - 30, (width - 100) * (value / max), 10);
};
var drawScore = function drawScore() {
  _ECS2.default.UIcontext.fillStyle = '#E6AC27';
  _ECS2.default.UIcontext.font = 'bold 2em "Open Sans"';
  _ECS2.default.UIcontext.fillText(_ECS2.default.score, 40, 40);
};

var Render = function Render(entities) {
  (0, _clearCanvas2.default)(_ECS2.default.UIcontext, _ECS2.default.$UIcanvas);

  (0, _forEach2.default)(entities, function (entity) {
    var _entity$components = entity.components;
    var health = _entity$components.health;
    var laser = _entity$components.laser;


    if (laser && laser.ammo) {
      var ammo = laser.ammo;
      var maxAmmo = laser.maxAmmo;

      drawAmmoBar(ammo, maxAmmo);
    }

    if (health) {
      var value = health.value;
      var maxHealth = health.maxHealth;

      drawHealthBar(value, maxHealth);
    }

    drawScore();
  });
};

Render.requirements = ['playerControlled'];

exports.default = Render;

},{"../ECS":118,"../helpers/clearCanvas":139,"lodash/forEach":91}],144:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _forEach = require('lodash/forEach');

var _forEach2 = _interopRequireDefault(_forEach);

var _ECS = require('../ECS');

var _ECS2 = _interopRequireDefault(_ECS);

var _random = require('lodash/random');

var _random2 = _interopRequireDefault(_random);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mp3Cache = {};
var sfxCache = {};

var actions = {
  fire: function fire(id, effect) {
    mp3Cache[effect].play();
  },
  start: function start(id, effect) {
    if (sfxCache[id]) return;
    sfxCache[id] = mp3Cache[effect];
    sfxCache[id].play();
  },
  stop: function stop(id) {
    if (!sfxCache[id]) return;
    sfxCache[id].pause();
    sfxCache[id] = null;
  }
};

var SoundFX = function SoundFX(entities) {
  (0, _forEach2.default)(entities, function (entity) {
    var _entity$components$so = entity.components.soundEffect;
    var effect = _entity$components$so.effect;
    var action = _entity$components$so.action;

    if (!action || !effect) return actions.stop(entity.id);
    effect += (0, _random2.default)(1, 5);
    if (!mp3Cache[effect]) mp3Cache[effect] = new Audio('mp3/' + effect + '.mp3');

    actions[action] && actions[action](entity.id, effect);
    entity.components.soundEffect.effect = '';
    entity.components.soundEffect.action = '';
  });
};

SoundFX.requirements = ['soundEffect'];

exports.default = SoundFX;

},{"../ECS":118,"lodash/forEach":91,"lodash/random":111}],145:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _forEach = require('lodash/forEach');

var _forEach2 = _interopRequireDefault(_forEach);

var _clamp = require('lodash/clamp');

var _clamp2 = _interopRequireDefault(_clamp);

var _ECS = require('../ECS');

var _ECS2 = _interopRequireDefault(_ECS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialised = void 0;
var baseSpeed = 1;
var controls = {
  '87': 'moveUp', // w
  '38': 'moveUp', // up
  '83': 'moveDown', // s
  '40': 'moveDown', // down
  '68': 'moveRight', // d
  '39': 'moveRight', // right
  '65': 'moveLeft', // a
  '37': 'moveLeft', // left
  '32': 'fireLaser', // space
  '80': 'pause', // p
  '67': 'capture' // c
};

var actions = {
  moveUp: false,
  moveDown: false,
  moveLeft: false,
  moveRight: false,
  fireLaser: false,
  pause: false,
  capture: false
};

var startAction = function startAction(e) {
  return actions[controls[e.keyCode]] = true;
};
var stopAction = function stopAction(e) {
  return actions[controls[e.keyCode]] = false;
};
var handlePause = function handlePause(e) {
  stopAction(e);
  _ECS2.default.game.togglePause();
  window.removeEventListener('keydown', handlePause);
};

var UserInput = function UserInput(entities) {
  if (!initialised) {
    window.addEventListener('keydown', startAction);
    window.addEventListener('keyup', stopAction);
    initialised = true;
  }
  var modY = function modY(entity, pos) {
    return entity.components.position.y = (0, _clamp2.default)(pos, 0, 1);
  };
  var modX = function modX(entity, pos) {
    return entity.components.position.x = (0, _clamp2.default)(pos, 0, 0.5);
  };

  var velocity = baseSpeed * (1 + _ECS2.default.game.speed / 50) / 100;

  (0, _forEach2.default)(entities, function (entity) {
    var _entity$components = entity.components;
    var laser = _entity$components.laser;
    var position = _entity$components.position;
    var soundEffect = _entity$components.soundEffect;

    if (actions.pause) {
      window.addEventListener('keydown', handlePause);
      _ECS2.default.game.togglePause();
    }

    if (actions.capture) {
      _ECS2.default.game.saveGame();
      actions.capture = false;
    }

    if (actions.moveUp !== actions.moveDown) {
      if (actions.moveUp) modY(entity, position.y - velocity);
      if (actions.moveDown) modY(entity, position.y + velocity);
    }

    if (actions.moveLeft !== actions.moveRight) {
      if (actions.moveLeft) {
        modX(entity, position.x - velocity);
        _ECS2.default.game.decreaseSpeed();
      }
      if (actions.moveRight) {
        modX(entity, position.x + velocity);
        _ECS2.default.game.increaseSpeed();
      }
    }

    if (laser) {
      soundEffect.effect = actions.fireLaser && 'pew';
      soundEffect.action = actions.fireLaser ? 'start' : 'stop';

      laser.firing = actions.fireLaser;
      actions.fireLaser && laser.ammo--;
      if (laser.ammo <= 0) _ECS2.default.removeEntity(entity);
    }
  });
};

UserInput.requirements = ['playerControlled', 'position'];

exports.default = UserInput;

},{"../ECS":118,"lodash/clamp":86,"lodash/forEach":91}],146:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _filter = require('lodash/filter');

var _filter2 = _interopRequireDefault(_filter);

var _forEach = require('lodash/forEach');

var _forEach2 = _interopRequireDefault(_forEach);

var _ECS = require('../ECS');

var _ECS2 = _interopRequireDefault(_ECS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseSpeed = 0.5;

var WingMovement = function WingMovement(entities) {
  entities = (0, _filter2.default)(entities, function (entity) {
    var _entity$components = entity.components;
    var delicious = _entity$components.delicious;
    var tooSpicy = _entity$components.tooSpicy;
    var spawn = _entity$components.spawn;

    return !!delicious || !!tooSpicy || !!spawn;
  });

  var velocity = baseSpeed * (1 + _ECS2.default.game.speed / 25) / 100;

  (0, _forEach2.default)(entities, function (entity) {
    var _entity$components2 = entity.components;
    var delicious = _entity$components2.delicious;
    var tooSpicy = _entity$components2.tooSpicy;
    var spawn = _entity$components2.spawn;
    var position = _entity$components2.position;

    if (delicious) entity.components.position.x -= velocity;
    if (tooSpicy) entity.components.position.x -= velocity * 1.25;
    if (spawn) entity.components.position.x -= velocity * 1.5;
    if (position.x <= -0.1) {
      if (tooSpicy) _ECS2.default.game.updateScore();
      _ECS2.default.removeEntity(entity);
    }
  });
};

WingMovement.requirements = ['position'];

exports.default = WingMovement;

},{"../ECS":118,"lodash/filter":89,"lodash/forEach":91}]},{},[1]);
