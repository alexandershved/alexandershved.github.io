webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	var _reset = __webpack_require__(13);

	var _reset2 = _interopRequireDefault(_reset);

	var _nav = __webpack_require__(19);

	var _nav2 = _interopRequireDefault(_nav);

	var _time = __webpack_require__(20);

	var _time2 = _interopRequireDefault(_time);

	var _checkbox = __webpack_require__(21);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _list = __webpack_require__(22);

	var _list2 = _interopRequireDefault(_list);

	var _helper = __webpack_require__(24);

	var _helper2 = _interopRequireDefault(_helper);

	var _select = __webpack_require__(25);

	var _select2 = _interopRequireDefault(_select);

	var _calendar = __webpack_require__(27);

	var _calendar2 = _interopRequireDefault(_calendar);

	var _postback = __webpack_require__(29);

	var _postback2 = _interopRequireDefault(_postback);

	var _listFetch = __webpack_require__(30);

	var _listFetch2 = _interopRequireDefault(_listFetch);

	var _index = __webpack_require__(39);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _reset2.default)();

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

	    proto.insertAfter = function (elem) {
	      var parent = this.parentNode;
	      var next = this.nextSibling;

	      if (next) {
	        parent.insertBefore(elem, next);
	      } else {
	        parent.appendChild(elem);
	      }
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

	  window._getOptionsFetch = function (obj) {
	    var headers = new Headers();
	    headers.append('Content-Type', 'application/x-www-form-urlencoded');

	    var options = {
	      method: 'post',
	      mode: 'cors',
	      headers: headers
	    };

	    var data = obj || {};

	    if (window.might.hasOwnProperty('auth_key')) {
	      data.auth_key = window.might.auth_key;
	    }

	    if (window.might.hasOwnProperty('all_fields')) {
	      data.all_fields = window.might.all_fields;
	    }

	    options.body = _qs2.default.stringify(data);

	    return options;
	  };
	};

	var _qs = __webpack_require__(14);

	var _qs2 = _interopRequireDefault(_qs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
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
/* 20 */
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
	        input.triggerEvent('chage');

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
	      input.triggerEvent('chage');
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
/* 21 */
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  [].concat(_toConsumableArray(document.querySelectorAll('.js-list'))).forEach(_listEvent2.default);
	};

	var _listEvent = __webpack_require__(23);

	var _listEvent2 = _interopRequireDefault(_listEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (list) {
	  var listValue = list.querySelector('.js-list-value');
	  var search = list.querySelector('.js-list-search');
	  var placeholder = list.dataset.placeholder;

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
	      list.insertBefore(label, list.firstChild);
	    }

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

	  if (!listValue.textContent && placeholder) {
	    listValue.textContent = placeholder;
	  }
	};

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 24 */
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  [].concat(_toConsumableArray(document.querySelectorAll('.js-select'))).forEach(_selectEvent2.default);
	};

	var _selectEvent = __webpack_require__(26);

	var _selectEvent2 = _interopRequireDefault(_selectEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 26 */
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

	    var rect = popup.getBoundingClientRect();
	    if (rect.right > window.innerWidth - 35) {
	      popup.style.left = window.innerWidth - 35 - rect.right + 'px';
	    }
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
	      param.forEach(function (par) {
	        var p = String(par);

	        if (select.value.indexOf(p) === -1) {
	          select.value.push(p);
	          isUpdate = true;
	        }
	      });

	      select.value.forEach(function (par, i) {
	        if (param.indexOf(par) === -1) {
	          select.value.splice(i, 1);
	          isUpdate = true;
	        }
	      });
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
/* 27 */
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
	        end_time: '23:59'
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
	          labelControl.textContent = from;
	        } else {
	          labelControl.textContent = from + ' — ' + to;
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

	var _dateformat = __webpack_require__(28);

	var _dateformat2 = _interopRequireDefault(_dateformat);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 28 */,
/* 29 */
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  [].concat(_toConsumableArray(document.querySelectorAll('.js-list-fetch'))).forEach(_listFetchEvent2.default);
	};

	var _listFetchEvent = __webpack_require__(31);

	var _listFetchEvent2 = _interopRequireDefault(_listFetchEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(fetch) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (list) {
	  var listValue = list.querySelector('.js-list-fetch-value');
	  var search = list.querySelector('.js-list-fetch-search');
	  var itemsWrap = list.querySelector('.js-list-fetch-items');

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

	    var options = window._getOptionsFetch(data);

	    fetch(window.might.url + '/campaign/data/for/top_filter', options).then(function (response) {
	      return response.json();
	    }).then(function (result) {
	      itemsWrap.innerHTML = '';

	      if (result.error === false) {
	        result.data.forEach(function (item) {
	          var name = void 0;

	          if (list.field === 'campaign_id') {
	            if (item.title) {
	              name = item.title;
	            } else {
	              name = '[id: ' + (item.campaign_id || item.v) + ']';
	            }
	          } else {
	            name = item[list.field] || item.v;
	          }

	          itemsWrap.innerHTML += '<div ' + 'class="list__item js-list-fetch-item' + (item.v === list.value ? ' is-select"' : '"') + ' data-value="' + item.v + '">' + name + '</div>';
	        });
	      }
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
	      list.insertBefore(label, list.firstChild);
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
	};

	var _qs = __webpack_require__(14);

	var _qs2 = _interopRequireDefault(_qs);

	var _dateformat = __webpack_require__(28);

	var _dateformat2 = _interopRequireDefault(_dateformat);

	var _fieldName = __webpack_require__(38);

	var _fieldName2 = _interopRequireDefault(_fieldName);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ },
/* 32 */
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33), (function() { return this; }())))

/***/ },
/* 33 */
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
	        var vertx = __webpack_require__(36);
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
	    if ("function" === 'function' && __webpack_require__(37)['amd']) {
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34), (function() { return this; }()), __webpack_require__(35)(module)))

/***/ },
/* 34 */,
/* 35 */
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
/* 36 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 38 */
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
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(fetch) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = function () {
	  var stat = document.querySelector('.js-stat');

	  if (!stat) {
	    return;
	  }

	  var statParams = void 0;
	  var segmentScope = [];

	  var segmentsBox = stat.querySelector('.js-stat-segments');

	  var filterControl = stat.querySelector('.js-stat-filter');
	  var datetime = stat.querySelector('.js-stat-datetime');
	  var segmentBtns = void 0;
	  var segmentLists = void 0;
	  var segmentAdd = stat.querySelector('.js-stat-add-segment');
	  var graphBtn = stat.querySelector('.js-stat-show-graph');
	  var treeBtn = stat.querySelector('.js-stat-is-tree');
	  var postbackControl = stat.querySelector('.js-stat-postback');
	  var navControl = stat.querySelector('.js-stat-nav');
	  var refreshBtn = stat.querySelector('.js-stat-refresh');
	  var columnsControl = stat.querySelector('.js-stat-columns');
	  var statGraphFields = stat.querySelector('.js-stat-graph-fields');

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

	  var updateCreateControls = function updateCreateControls() {
	    for (var i in createControls) {
	      if (createControls.hasOwnProperty(i)) {
	        var item = createControls[i];

	        if (i !== statParams.segments[0]) {
	          item.list.style.display = 'none';
	          item.add.style.display = 'none';
	        } else {
	          item.list.style.display = '';
	          item.add.style.display = '';
	        }
	      }
	    }
	  };

	  var updateFilterStock = function updateFilterStock() {
	    filterControl.style.display = 'none';
	    filterControl.innerHTML = '';

	    statParams.filters_stock.forEach(function (filter) {
	      var filterEl = document.createElement('div');
	      filterEl.className = 'list js-list-fetch is-margin-top';
	      filterEl.innerHTML = '\n        <div class="list__wrap">\n          <div class="list__value js-list-fetch-value"></div>\n          <div class="list__dropdown">\n            <div class="list__search">\n              <i class="fa fa-search"></i>\n              <input class="js-list-fetch-search" type="text">\n            </div>\n            <div class="list__items js-list-fetch-items"></div>\n          </div>\n        </div>';
	      filterControl.appendChild(filterEl);
	      (0, _listFetchEvent2.default)(filterEl);

	      filterEl.updateValue(filter.value, filter.title, filter.field, true);

	      filterEl.addEventListener('change:list', function (event) {
	        (0, _update2.default)({ filter_stock: { field: filter.field, value: filterEl.value, title: filterEl.title } });
	        updateFilterStock();
	      });

	      filterControl.style.display = '';
	    });
	  };

	  var segmentChange = function segmentChange(event) {
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
	  };

	  var segmentClone = function segmentClone(value) {
	    segmentAdd.updateValue();
	    segmentAdd.setDisabled(value);
	    segmentScope.forEach(function (el) {
	      return el.setDisabled(value);
	    });

	    var segment = segmentAdd.cloneNode(true);
	    segment.classList.remove('is-open', 'is-add', 'js-stat-add-segment');
	    segmentAdd.parentNode.insertBefore(segment, segmentAdd);
	    (0, _listEvent2.default)(segment);
	    segment.updateValue(value, null, true);
	    segment.addEventListener('change', segmentChange);
	    segmentScope.push(segment);

	    if (statParams.segments.length && segmentScope.length < 3) {
	      segmentAdd.style.display = '';
	    } else {
	      segmentAdd.style.display = 'none';
	    }
	  };

	  var addGraphFilter = function addGraphFilter(pos) {
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
	  };

	  var controlEvents = function controlEvents() {
	    updateCreateControls();

	    if (datetime) {
	      datetime.addEventListener('change', function (event) {
	        var value = datetime.value;

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

	        statParams.columns = {};

	        columnsControl.value.forEach(function (val) {
	          cols[val] = 1;
	          statParams.columns[val] = 1;
	        });

	        var options = window._getOptionsFetch(cols);

	        fetch(window.might.url + '/user/update/columns', options).then(function (response) {
	          return response.json();
	        }).then(function (result) {
	          if (result.error === false) {
	            (0, _update2.default)({ refresh: true });
	          }
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
	  };

	  var controlsReset = function controlsReset() {
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
	  };

	  (0, _init2.default)();
	  (0, _createControls2.default)();
	  (0, _table2.default)();
	  (0, _graph2.default)();

	  statParams = window.might.stat.params;

	  stat.addEventListener('upadatecreatecontrols', updateCreateControls);
	  stat.addEventListener('backurl', controlsReset);
	  stat.addEventListener('filterstockupdate', updateFilterStock);

	  fetch(window.might.url + '/settings', window._getOptionsFetch()).then(function (response) {
	    return response.json();
	  }).then(function (result) {
	    if (result) {
	      if (Array.isArray(result.segments) && segmentAdd) {
	        (function () {
	          var itemsWrap = segmentAdd.querySelector('.js-list-items');
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
	                  segmentsBox.appendChild(ctrl);
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

	        if (result.user.columns) {
	          (function () {
	            var arr = result.user.columns.split(',');
	            var columns = [];
	            columnsControl.updateValue(arr);

	            arr.forEach(function (val) {
	              columns.push(val);
	            });

	            (0, _update2.default)({ table_columns: columns });
	          })();
	        }
	      }

	      segmentBtns = stat.querySelectorAll('.js-stat-btn-segment');
	      segmentLists = stat.querySelectorAll('.js-stat-list-segment');

	      controlEvents();
	      controlsReset();
	    }
	  });
	};

	var _qs = __webpack_require__(14);

	var _qs2 = _interopRequireDefault(_qs);

	var _listEvent = __webpack_require__(23);

	var _listEvent2 = _interopRequireDefault(_listEvent);

	var _listFetchEvent = __webpack_require__(31);

	var _listFetchEvent2 = _interopRequireDefault(_listFetchEvent);

	var _init = __webpack_require__(40);

	var _init2 = _interopRequireDefault(_init);

	var _update = __webpack_require__(49);

	var _update2 = _interopRequireDefault(_update);

	var _createControls = __webpack_require__(50);

	var _createControls2 = _interopRequireDefault(_createControls);

	var _table = __webpack_require__(66);

	var _table2 = _interopRequireDefault(_table);

	var _graph = __webpack_require__(69);

	var _graph2 = _interopRequireDefault(_graph);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ },
/* 40 */
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

	    segments: ['campaign_id'],
	    level: 1,
	    filter: [],
	    filters_stock: [],
	    current: null,
	    value: null,
	    fields_graph: [],

	    sort: null,
	    columns: {},
	    all_columns: {}
	  };

	  var stat = document.querySelector('.js-stat');
	  var params = window.might.stat.params;
	  var currentDate = might.current_datetime;

	  var regTime = new RegExp(/^([0,1][0-9]|2[0-3]):[0-5][0-9]$/);
	  var regDate = new RegExp(/^\d{4}-(0[1-9]|1[0-2])-([0-1][0-9]|3[0-1])$/);

	  var dateToString = function dateToString(y, m, d) {
	    var date = new Date(y, m, d);
	    return (0, _dateformat2.default)(date, 'yyyy-mm-dd');
	  };

	  var updateTableParams = function updateTableParams(loc) {
	    var query = _qs2.default.parse(loc.search.slice(1));

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
	    params.show_graph = !!parseInt(query.sg, 10);
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

	    if (params.show_graph) {
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

	    history.push({
	      pathname: location.pathname,
	      search: _qs2.default.stringify(query)
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

	var _qs = __webpack_require__(14);

	var _qs2 = _interopRequireDefault(_qs);

	var _dateformat = __webpack_require__(28);

	var _dateformat2 = _interopRequireDefault(_dateformat);

	var _createBrowserHistory = __webpack_require__(41);

	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

	var _update = __webpack_require__(49);

	var _update2 = _interopRequireDefault(_update);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */
/***/ function(module, exports) {

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
	          if (params.postback_date !== !!obj.postback_date) {
	            params.postback_date = !!obj.postback_date;
	            isUpdate = true;
	          }
	          break;

	        case 'currency':
	          if (params.currency !== obj.currency && ['usd', 'eur', 'rub'].indexOf(obj.currency) !== -1) {
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
	              if (f.hasOwnProperty('title') && f.hasOwnProperty('value') && f.hasOwnProperty('field')) {
	                var upd = void 0;
	                var pos = -1;
	                var func = function func(filter, i) {};
	                params.filters_stock.forEach(function (filter, i) {
	                  if (filter.field === f.field) {
	                    pos = i;
	                  }
	                });
	                if (pos !== -1) {
	                  if (!f.value || !f.title) {
	                    params.filters_stock.splice(pos, 1);
	                  } else {
	                    params.filters_stock[pos].value = f.value;
	                    params.filters_stock[pos].title = f.title;
	                    upd = true;
	                  }
	                  isUpdateStock = true;
	                  isUpdate = true;
	                } else if (f.value && f.title) {
	                  params.filters_stock.push(f);
	                  isUpdateStock = true;
	                  isUpdate = true;
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
	          if (Array.isArray(obj.table_columns)) {
	            params.columns = {};
	            obj.table_columns.forEach(function (col) {
	              params.columns[col] = true;
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

	var stat = document.querySelector('.js-stat');

	var regTime = new RegExp(/^([0,1][0-9]|2[0-3]):[0-5][0-9]$/);
	var regDate = new RegExp(/\d{4}-(0[1-9]|1[0-2])-([0-1][0-9]|3[0-1])/, 'g');

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var stat = document.querySelector('.js-stat');

	  if (!stat) {
	    return;
	  }

	  stat.querySelector('.js-stat-campaign-list').addEventListener('click', _campaignList2.default);
	  stat.querySelector('.js-stat-campaign-add').addEventListener('click', _campaignAdd2.default);
	  stat.querySelector('.js-stat-lander-list').addEventListener('click', _landerList2.default);
	  stat.querySelector('.js-stat-lander-add').addEventListener('click', _landerAdd2.default);
	  stat.querySelector('.js-stat-offer-list').addEventListener('click', _offerList2.default);
	  stat.querySelector('.js-stat-offer-add').addEventListener('click', _offerAdd2.default);
	  stat.querySelector('.js-stat-traff-list').addEventListener('click', _trafficSourceList2.default);
	  stat.querySelector('.js-stat-traff-add').addEventListener('click', _trafficSourceAdd2.default);
	  stat.querySelector('.js-stat-aff-list').addEventListener('click', _affiliateNetworkList2.default);
	  stat.querySelector('.js-stat-aff-add').addEventListener('click', _affiliateNetworkAdd2.default);
	};

	var _campaignList = __webpack_require__(51);

	var _campaignList2 = _interopRequireDefault(_campaignList);

	var _campaignAdd = __webpack_require__(53);

	var _campaignAdd2 = _interopRequireDefault(_campaignAdd);

	var _landerList = __webpack_require__(58);

	var _landerList2 = _interopRequireDefault(_landerList);

	var _landerAdd = __webpack_require__(59);

	var _landerAdd2 = _interopRequireDefault(_landerAdd);

	var _offerList = __webpack_require__(60);

	var _offerList2 = _interopRequireDefault(_offerList);

	var _offerAdd = __webpack_require__(61);

	var _offerAdd2 = _interopRequireDefault(_offerAdd);

	var _trafficSourceList = __webpack_require__(62);

	var _trafficSourceList2 = _interopRequireDefault(_trafficSourceList);

	var _trafficSourceAdd = __webpack_require__(63);

	var _trafficSourceAdd2 = _interopRequireDefault(_trafficSourceAdd);

	var _affiliateNetworkList = __webpack_require__(64);

	var _affiliateNetworkList2 = _interopRequireDefault(_affiliateNetworkList);

	var _affiliateNetworkAdd = __webpack_require__(65);

	var _affiliateNetworkAdd2 = _interopRequireDefault(_affiliateNetworkAdd);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(fetch) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  if (document.querySelector('.js-popup')) {
	    return;
	  }

	  var popup = (0, _createPopup2.default)('Campaign list');

	  if (!popup) {
	    return;
	  }

	  var popupBody = popup.querySelector('.js-popup-body');

	  if (popupBody) {
	    var options = window._getOptionsFetch({
	      field: 'id,name',
	      order: 'name'
	    });

	    fetch(window.might.url + '/campaign/list', options).then(function (response) {
	      return response.json();
	    }).then(function (result) {
	      if (result.error) {
	        if (result.result.msg) {
	          popupBody.innerHTML = '<div class="popup__message">' + result.result.msg + '</div>';
	        }
	      } else {
	        (function () {
	          var table = document.createElement('table');
	          table.className = 'popup__list';
	          popupBody.appendChild(table);

	          result.result.data.forEach(function (item) {
	            var name = item.name;
	            var id = item.id;
	            var tr = document.createElement('tr');

	            tr.innerHTML = '\n            <td data-id="' + id + '"><span>' + name + '</span></td>\n            <td><span>Copy</span></td>\n            <td><span>Edit</span></td>\n            <td><span>Update cost</span></td>\n            <td><span>Links</span></td>\n          ';

	            table.appendChild(tr);
	          });
	        })();
	      }
	    });
	  }
	};

	var _qs = __webpack_require__(14);

	var _qs2 = _interopRequireDefault(_qs);

	var _createPopup = __webpack_require__(52);

	var _createPopup2 = _interopRequireDefault(_createPopup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ },
/* 52 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (title, editing) {
	  if (document.querySelector('.js-popup')) {
	    return false;
	  }

	  var popup = document.createElement('div');
	  popup.className = 'popup js-popup';

	  popup.innerHTML = '\n    <div class="popup__veil">\n    </div>\n    <div class="popup__win">\n      <div class="popup__wrap js-popup-wrap">\n        <div class="popup__headline">\n          <div class="popup__close js-popup-close"></div>\n          <div class="popup__title">' + title + '</div>\n        </div>\n        <div class="popup__body js-popup-body"></div>\n        <div class="popup__bottom">\n          <div class="poopup__bottom-error js-poopup-error"></div>\n          ' + (editing ? '<div class="btn-apply js-popup-save">Save</div>' : '') + '\n          <div class="btn-close js-popup-close">Close</div>\n        </div>\n      </div>\n    </div>';

	  document.body.appendChild(popup);

	  var close = function close() {
	    popup.parentNode.removeChild(popup);

	    var rect = document.body.getBoundingClientRect();

	    document.body.classList.remove('noscroll');
	    document.body.style.top = '';
	    document.body.style.left = '';

	    window.scrollTo(-rect.left, -rect.top);
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
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(fetch) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  if (document.querySelector('.js-popup')) {
	    return;
	  }

	  var popup = (0, _createPopup2.default)('Creating new campaign', true);

	  if (!popup) {
	    return;
	  }

	  var popupBody = popup.querySelector('.js-popup-body');

	  if (!popupBody) {
	    return;
	  }

	  popup.querySelector('.js-popup-wrap').style.width = '1000px';

	  popupBody.innerHTML = '\n    <div class="popup__line">\n      <div class="popup__line-label">\n        <span>Name:</span>\n        <div class="info"></div>\n      </div>\n      <div class="popup__line-body">\n        <div class="input">\n          <input class="js-form-name" type="text" placeholder="Write a name for campaign">\n          <span><span>\n        </div>\n      </div>\n    </div>\n\n    <div class="popup__line">\n      <div class="popup__line-label">\n        <span>Domain:</span>\n        <div class="info"></div>\n      </div>\n      <div class="popup__line-body">\n        <div class="list js-list js-form-domain" style="display: block; margin: 0 0 15px;" data-placeholder="Select domain">\n          <div class="list__wrap" style="display: block;">\n            <div class="list__value js-list-value"></div>\n            <div class="list__dropdown" style="right: 0;">\n              <div class="list__items js-list-items"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class="popup__line">\n      <div class="popup__line-label">\n        <span>Campaign URL:</span>\n        <div class="info"></div>\n      </div>\n      <div class="popup__line-body">\n        <div class="input">\n          <input class="js-form-url" type="text" readonly="true">\n        </div>\n      </div>\n    </div>\n\n    <div class="popup__line">\n      <div class="popup__line-label">\n        <span>Traffic Source:</span>\n        <div class="info"></div>\n      </div>\n      <div class="popup__line-body">\n        <div class="list js-list js-form-traffic-source" style="display: block; margin: 0 0 15px;" data-placeholder="Select traffic source">\n          <div class="list__wrap" style="display: block;">\n            <div class="list__value js-list-value"></div>\n            <div class="list__dropdown" style="right: 0;">\n              <div class="list__items js-list-items"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class="popup__line">\n      <div class="popup__line-label">\n        <span>Payout:</span>\n        <div class="info"></div>\n      </div>\n      <div class="popup__line-body">\n        <div class="radiobutton js-form-cost-donottrack">Do not track</div>\n        <div class="radiobutton js-form-cost-cpc is-select">CPC</div>\n        <div class="radiobutton js-form-cost-cpa">CPA</div>\n        <div class="popup__line-lbl" style="margin-left: 80px;"><span>Cost click:</span><div class="info"></div></div>\n        <div class="input" style="display: inline-block; width: 90px; margin-left: 10px; margin-right: 10px;">\n          <input class="js-form-cost-click" type="text" placeholder="0">\n          <span><span>\n        </div>\n        <div class="popup__currency js-form-cost-eur">\n          <i class="fa fa-euro"></i>\n        </div>\n        <div class="popup__currency js-form-cost-rub">\n          <i class="fa fa-ruble"></i>\n        </div>\n        <div class="popup__currency js-form-cost-usd is-select">\n          <i class="fa fa-dollar"></i>\n        </div>\n      </div>\n    </div>\n\n    <div class="popup__line">\n      <div class="popup__line-label">\n        <span>Postback URL:</span>\n        <div class="info"></div>\n      </div>\n      <div class="popup__line-body">\n        <div class="js-form-input-parent">\n          <div class="input is-with-plus">\n            <input class="js-form-postbackurl" type="text" placeholder="Postback URL">\n            <div class="input__plus js-form-postbackurl-add"></div>\n            <span><span>\n          </div>\n          <div class="tags js-form-tags" style="display: none;"></div>\n        </div>\n      </div>\n    </div>\n\n    <div class="popup__line">\n      <div class="popup__line-label">\n        <span>Redirect mode:</span>\n        <div class="info"></div>\n      </div>\n      <div class="popup__line-body">\n        <div class="list js-list js-form-directtype" style="display: block; margin: 0 0 15px;" data-placeholder="Select redirect mode">\n          <div class="list__wrap" style="display: block;">\n            <div class="list__value js-list-value"></div>\n            <div class="list__dropdown" style="right: 0;">\n              <div class="list__items js-list-items">\n                <div class="list__item js-list-item" data-value="301">301</div>\n                <div class="list__item js-list-item" data-value="302">302</div>\n                <div class="list__item js-list-item" data-value="js">js</div>\n                <div class="list__item js-list-item" data-value="double_js">double_js</div>\n                <div class="list__item js-list-item" data-value="meta_refresh">meta_refresh</div>\n                <div class="list__item js-list-item" data-value="double_meta_refresh">double_meta_refresh</div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class="cc js-create-campaign"></div>';

	  var formName = popupBody.querySelector('.js-form-name');
	  var formDomain = popupBody.querySelector('.js-form-domain');
	  var formUrl = popupBody.querySelector('.js-form-url');
	  var formUrlTags = popupBody.querySelector('.js-form-tags');
	  var formTrafficSource = popupBody.querySelector('.js-form-traffic-source');
	  var formCostDoNotTrack = popupBody.querySelector('.js-form-cost-donottrack');
	  var formCostCPC = popupBody.querySelector('.js-form-cost-cpc');
	  var formCostCPA = popupBody.querySelector('.js-form-cost-cpa');
	  var formCostClick = popupBody.querySelector('.js-form-cost-click');
	  var formCostEur = popupBody.querySelector('.js-form-cost-eur');
	  var formCostRub = popupBody.querySelector('.js-form-cost-rub');
	  var formCostUsd = popupBody.querySelector('.js-form-cost-usd');
	  var formPostbackUrl = popupBody.querySelector('.js-form-postbackurl');
	  var formPostbackUrlAdd = popupBody.querySelector('.js-form-postbackurl-add');
	  var formDirectType = popupBody.querySelector('.js-form-directtype');
	  var createCampaign = popupBody.querySelector('.js-create-campaign');

	  (function () {
	    var options = window._getOptionsFetch({
	      field: 'id,name',
	      order: 'name'
	    });

	    fetch(window.might.url + '/sites/list', options).then(function (response) {
	      return response.json();
	    }).then(function (result) {
	      var items = formDomain.querySelector('.js-list-items');
	      var obj = result.result.data || {};

	      for (var i in obj) {
	        if (obj.hasOwnProperty(i)) {
	          var item = obj[i];
	          items.innerHTML += '<div class="list__item js-list-item" data-value="' + item.id + '">' + item.name + '</div>';
	        }
	      }

	      (0, _listEvent2.default)(formDomain);
	    });
	  })();

	  (function () {
	    var options = window._getOptionsFetch({
	      field: 'id,name',
	      order: 'name'
	    });

	    fetch(window.might.url + '/traffic/sources/list', options).then(function (response) {
	      return response.json();
	    }).then(function (result) {
	      var items = formTrafficSource.querySelector('.js-list-items');

	      (result.result.data || []).forEach(function (item) {
	        items.innerHTML += '<div class="list__item js-list-item" data-value="' + item.id + '">' + item.name + '</div>';
	      });

	      (0, _listEvent2.default)(formTrafficSource);
	    });
	  })();

	  formCostDoNotTrack.addEventListener('click', function () {
	    formCostDoNotTrack.classList.add('is-select');
	    formCostCPC.classList.remove('is-select');
	    formCostCPA.classList.remove('is-select');
	  });

	  formCostCPC.addEventListener('click', function () {
	    formCostDoNotTrack.classList.remove('is-select');
	    formCostCPC.classList.add('is-select');
	    formCostCPA.classList.remove('is-select');
	  });

	  formCostCPA.addEventListener('click', function () {
	    formCostDoNotTrack.classList.remove('is-select');
	    formCostCPC.classList.remove('is-select');
	    formCostCPA.classList.add('is-select');
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

	  formCostClick.addEventListener('paste', function (event) {
	    if (/^\d*.?\d+$/.test(formCostClick.value.trim())) {
	      formCostClick.value = '';
	    }
	  });

	  formCostClick.addEventListener('keydown', function (event) {
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

	  '{country},{cost},{campaign_id},{trafficsource_id},{ip_id},{offer_id}'.split(',').forEach(function (tag) {
	    var span = document.createElement('span');
	    span.className = 'js-form-tag';
	    span.textContent = tag;
	    formUrlTags.appendChild(span);
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

	      initTags(clone.querySelector('.js-form-postbackurl'));
	    }
	  };

	  initTags = function initTags(el) {
	    var parent = el.closest('.js-form-input-parent');
	    var tags = parent.querySelector('.js-form-tags');
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
	        if (!closest.classList.contains('is-select')) {
	          var val = closest.textContent;
	          el.value += val;
	          closest.classList.add('is-select');
	        }
	      }

	      el.focus();
	      event.preventDefault();
	      event.stopPropagation();
	    });

	    parent.querySelector('.js-form-postbackurl-add').addEventListener('click', _dublicatePostbackUrl);

	    var allParent = parent.parentNode.querySelectorAll('.js-form-input-parent');

	    if (allParent.length >= 3) {
	      allParent[allParent.length - 1].querySelector('.input').classList.remove('is-with-plus');
	    }
	  };

	  initTags(formPostbackUrl);
	  (0, _listEvent2.default)(formDirectType);
	  (0, _campaignAddChilds2.default)(createCampaign);

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

	    var focusFormUrl = function focusFormUrl() {
	      var parentFormUrl = formUrl.parentNode;
	      parentFormUrl.classList.remove('is-error');
	      parentFormUrl.querySelector('span').textContent = '';
	      formUrl.removeEventListener('focus', focusFormUrl);
	    };

	    if (!offerUrl) {
	      var parentFormUrl = formUrl.parentNode;
	      parentFormUrl.classList.add('is-error');
	      parentFormUrl.querySelector('span').textContent = 'The field can not be empty';
	      formUrl.addEventListener('focus', focusFormUrl);
	      return;
	    }

	    var clickFormAffNet = function clickFormAffNet() {
	      formAffNet.classList.remove('is-error');
	      formAffNet.removeEventListener('click', clickFormAffNet);
	    };

	    if (!affNet) {
	      formAffNet.classList.add('is-error');
	      formAffNet.addEventListener('click', clickFormAffNet);
	      return;
	    }

	    if (formPayoutEur.classList.contains('is-select')) {
	      currency = 'EUR';
	    } else if (formPayoutRub.classList.contains('is-select')) {
	      currency = 'RUB';
	    } else {
	      currency = 'USD';
	    }

	    var options = window._getOptionsFetch({
	      name: name,
	      url: offerUrl,
	      affiliate_network: affNet,
	      payout: payout,
	      currency: currency,
	      offer_type: 0,
	      payout_value: payoutValue
	    });

	    fetch(window.might.url + '/offer/create', options).then(function (response) {
	      return response.json();
	    }).then(function (result) {
	      if (result.error) {
	        if (result.result.msg) {
	          popupBody.querySelector('.js-poopup-error').textContent = result.result.msg;
	        }
	      } else {
	        popup.close();
	      }
	    });
	  });
	};

	var _createPopup = __webpack_require__(52);

	var _createPopup2 = _interopRequireDefault(_createPopup);

	var _listEvent = __webpack_require__(23);

	var _listEvent2 = _interopRequireDefault(_listEvent);

	var _campaignAddChilds = __webpack_require__(54);

	var _campaignAddChilds2 = _interopRequireDefault(_campaignAddChilds);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (box) {
	  box.innerHTML = '\n    <div class="cc__left">\n      <div class="cc__label">Default paths:</div>\n      <div class="js-cc-all-paths"></div>\n      <div class="cc__added"><span class="js-cc-add-path">+ Add new Path</span></div>\n\n      <div class="cc__label">Rules:</div>\n      <div class="js-cc-all-rules"></div>\n      <div class="cc__added"><span class="js-cc-add-rule">+ Add new Rule</span></div>\n    </div>\n\n    <div class="cc__right">\n      <div class="js-cc-path-box">\n        <div class="js-cc-name">\n          <div class="cc__line">\n            <div class="cc__col"><div class="cc__label">Name:</div></div>\n            <div class="cc__col"><div class="cc__label">Weight:</div></div>\n            <div class="cc__col"><div class="cc__label">Status:</div></div>\n          </div>\n\n          <div class="cc__line">\n            <div class="cc__col">\n              <div class="input">\n                <input class="js-cc-input" type="text" placeholder="Path name">\n                <span><span>\n              </div>\n            </div>\n            <div class="cc__col">\n              <div class="input">\n                <input class="js-cc-weight" type="text" placeholder="0">\n                <span><span>\n              </div>\n            </div>\n            <div class="cc__col">\n              <div class="cc__status js-cc-status"></div>\n            </div>\n          </div>\n        </div>\n\n        <div class="js-cc-landers">\n          <div class="cc__line">\n            <div class="cc__col"><div class="cc__label">Lander:</div></div>\n            <div class="cc__col"><div class="cc__label cc__hidden js-cc-hidden">Weight:</div></div>\n            <div class="cc__col"></div>\n          </div>\n\n          <div class="cc__line js-cc-list js-cc-with-hidden">\n            <div class="cc__col">\n              <div class="list is-add js-list js-cc-add" style="display: block; margin: 0 0 15px;" data-placeholder="+ Add Lander">\n                <div class="list__wrap" style="display: block;">\n                  <div class="list__value js-list-value"></div>\n                  <div class="list__dropdown" style="right: 0;">\n                    <div class="list__items js-list-items"></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="cc__col cc__hidden js-cc-hidden">\n              <div class="input">\n                <input class="js-cc-weight" type="text" placeholder="0">\n                <span><span>\n              </div>\n            </div>\n            <div class="cc__col cc__hidden js-cc-hidden">\n              <div class="cc__clear js-clear"></div>\n            </div>\n          </div>\n        </div>\n\n        <div class="js-cc-offers">\n          <div class="cc__line">\n            <div class="cc__col"><div class="cc__label">Offer:</div></div>\n            <div class="cc__col"><div class="cc__label cc__hidden js-cc-hidden">Weight:</div></div>\n            <div class="cc__col"></div>\n          </div>\n\n          <div class="cc__line js-cc-list js-cc-with-hidden">\n            <div class="cc__col">\n              <div class="list is-add js-list js-cc-add" style="display: block; margin: 0 0 15px;" data-placeholder="+ Add Offer">\n                <div class="list__wrap" style="display: block;">\n                  <div class="list__value js-list-value"></div>\n                  <div class="list__dropdown" style="right: 0;">\n                    <div class="list__items js-list-items"></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="cc__col cc__hidden js-cc-hidden">\n              <div class="input">\n                <input class="js-cc-weight" type="text" placeholder="0">\n                <span><span>\n              </div>\n            </div>\n            <div class="cc__col cc__hidden js-cc-hidden">\n              <div class="cc__clear js-clear"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class="js-cc-rule-box" style="display: none;">\n        <div class="cc__line">\n          <div class="cc__label">Name:</div>\n        </div>\n\n        <div class="cc__line">\n          <div class="input">\n            <input class="js-cc-rule-name" type="text" placeholder="Rule name">\n            <span><span>\n          </div>\n        </div>\n\n        <div class="cc__line js-cc-rule-list">\n          <div class="list is-add js-list js-cc-rule-add" style="margin: 0 0 15px; width: 180px;" data-placeholder="+ Add Rule">\n            <div class="list__wrap" style="display: block;">\n              <div class="list__value js-list-value"></div>\n              <div class="list__dropdown" style="right: 0;">\n                <div class="list__items js-list-items"></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  ';

	  box.paths = [];
	  box.rules = [];

	  (0, _campaignAddPath2.default)(box);
	  (0, _campaignAddRule2.default)(box);
	};

	var _campaignAddPath = __webpack_require__(55);

	var _campaignAddPath2 = _interopRequireDefault(_campaignAddPath);

	var _campaignAddRule = __webpack_require__(56);

	var _campaignAddRule2 = _interopRequireDefault(_campaignAddRule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(fetch) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (box) {
	  var pathBox = box.querySelector('.js-cc-path-box');
	  var ruleBox = box.querySelector('.js-cc-rule-box');

	  var allPaths = box.querySelector('.js-cc-all-paths');
	  var boxName = box.querySelector('.js-cc-name');

	  var checkSelect = false;

	  function eventPath(element) {
	    element.addEventListener('click', function (event) {
	      var path = event.target.closest('.js-cc-path');
	      var copy = event.target.closest('.js-cc-path-copy');
	      var del = event.target.closest('.js-cc-path-delete');

	      if (path) {
	        (function () {
	          var position = box.paths.indexOf(path);

	          if (copy) {
	            (function () {
	              var clone = path.cloneNode(true);
	              var name = path.value.name;

	              path.insertAfter(clone);
	              box.paths.splice(position + 1, 0, clone);

	              clone.value = Object.assign({}, path.value);

	              if (!/ \(copy\)$/.test(name)) {
	                name = name + ' (copy)';
	              }

	              clone.value.name = name;
	              clone.querySelector('.js-cc-path-name').textContent = name;
	              eventPath(clone);

	              var count = 0;

	              box.paths.forEach(function (p) {
	                count += p.value.weight;
	              });

	              box.paths.forEach(function (p) {
	                if (count) {
	                  var percent = Math.round(10000 * p.value.weight / count) / 100;
	                  p.querySelector('.js-cc-path-weight').textContent = p.value.weight + ' (' + percent + '%)';
	                } else {
	                  p.querySelector('.js-cc-path-weight').textContent = '0 (0%)';
	                }
	              });
	            })();
	          } else if (del) {
	            if (path.classList.contains('is-select')) {
	              path.classList.remove('is-select');
	              clearFrom();
	            }

	            path.classList.add('is-deleted');

	            path._deleteTimeout = setTimeout(function () {
	              path.parentNode.removeChild(path);
	              box.paths.splice(position, 1);
	            }, 5000);

	            path.querySelector('.js-cc-path-undo').addEventListener('click', function () {
	              clearTimeout(path._deleteTimeout);
	              setTimeout(function () {
	                path.classList.remove('is-deleted');
	              }, 300);
	            });
	          } else {
	            (function () {
	              pathBox.style.display = '';
	              ruleBox.style.display = 'none';

	              checkSelect = true;

	              clearFrom();
	              [].concat(_toConsumableArray(box.querySelectorAll('.js-cc-path'))).forEach(function (el) {
	                return el.classList.remove('is-select');
	              });
	              [].concat(_toConsumableArray(box.querySelectorAll('.js-cc-rule'))).forEach(function (el) {
	                return el.classList.remove('is-select');
	              });
	              path.classList.add('is-select');

	              boxName.querySelector('.js-cc-input').value = path.value.name || '';
	              boxName.querySelector('.js-cc-weight').value = path.value.weight || '';

	              if (path.value.checkbox === 'off') {
	                boxName.querySelector('.js-cc-status').classList.add('is-stoped');
	              }

	              var landers = box.querySelector('.js-cc-landers');
	              var offers = box.querySelector('.js-cc-offers');
	              var landerAdd = landers.querySelector('.js-cc-add');
	              var offerAdd = offers.querySelector('.js-cc-add');

	              path.value.lander.forEach(function (value, index) {
	                landerAdd.setValue(value);
	                landers.querySelectorAll('.js-cc-list')[index].querySelector('.js-cc-weight').value = path.value.lander_weight[index] || '';
	              });

	              path.value.offer.forEach(function (value, index) {
	                offerAdd.setValue(value);
	                offers.querySelectorAll('.js-cc-list')[index].querySelector('.js-cc-weight').value = path.value.lander_weight[index] || '';
	              });

	              checkSelect = false;
	            })();
	          }
	        })();
	      }
	    });
	  }

	  function createPath() {
	    var pathElement = document.createElement('div');

	    pathElement.className = 'cc__path is-select js-cc-path';
	    pathElement.innerHTML = '\n      <div class="cc__path-name js-cc-path-name">[path unnamed]</div>\n      <div class="cc__path-weight js-cc-path-weight">0 (0%)</div>\n      <div class="cc__path-copy js-cc-path-copy"></div>\n      <div class="cc__path-delete js-cc-path-delete"></div>\n      <div class="cc__path-undo js-cc-path-undo"><i class="fa fa-undo"></i>Undo</div>';

	    allPaths.appendChild(pathElement);
	    box.paths.push(pathElement);

	    pathElement.value = {
	      name: '',
	      weight: 0,
	      checkbox: 'on',
	      lander: [],
	      lander_weight: [],
	      offer: [],
	      offer_weight: []
	    };

	    eventPath(pathElement);
	  }

	  function updatePath(obj) {
	    if (checkSelect) {
	      return;
	    }

	    if (!box.querySelector('.js-cc-path.is-select')) {
	      switch (obj.field) {
	        case 'name':
	        case 'weight':
	        case 'lander_add':
	        case 'offer_add':
	        case 'checkbox':
	          createPath();
	          break;
	        default:
	          break;
	      }
	    }

	    var path = box.querySelector('.js-cc-path.is-select');
	    var value = path.value;

	    (function () {
	      switch (obj.field) {
	        case 'name':
	          path.value.name = obj.value.trim();
	          path.querySelector('.js-cc-path-name').textContent = obj.value.trim() || '[path unnamed]';
	          break;
	        case 'weight':
	          var count = 0;
	          path.value.weight = obj.value || 0;

	          box.paths.forEach(function (p) {
	            count += p.value.weight;
	          });

	          box.paths.forEach(function (p) {
	            if (count) {
	              var percent = Math.round(10000 * p.value.weight / count) / 100;
	              p.querySelector('.js-cc-path-weight').textContent = p.value.weight + ' (' + percent + '%)';
	            } else {
	              p.querySelector('.js-cc-path-weight').textContent = '0 (0%)';
	            }
	          });
	          break;
	        case 'lander_add':
	          path.value.lander.push(obj.value);
	          path.value.lander_weight.push(0);
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
	          path.value.offer_weight.push(0);
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
	          break;
	        case 'checkbox':
	          path.value.checkbox = obj.value;
	          if (obj.value === 'off') {
	            path.classList.add('is-stoped');
	          } else {
	            path.classList.remove('is-stoped');
	          }
	          break;
	        default:
	          break;
	      }
	    })();
	  }

	  function clearFrom() {
	    boxName.querySelector('.js-cc-input').value = '';
	    boxName.querySelector('.js-cc-weight').value = '';
	    boxName.querySelector('.js-cc-status').classList.remove('is-stoped');

	    [].concat(_toConsumableArray(box.querySelectorAll('.js-cc-list'))).forEach(function (list) {
	      if (!list.querySelector('.js-cc-add')) {
	        list.parentNode.removeChild(list);
	      } else {
	        list.querySelector('.js-cc-add').unsetDisabled();
	      }
	    });

	    [].concat(_toConsumableArray(box.querySelectorAll('.js-cc-hidden'))).forEach(function (el) {
	      return el.classList.remove('is-show');
	    });
	    boxName.querySelector('.js-cc-input').focus();
	  }

	  box.querySelector('.js-cc-add-path').addEventListener('click', function () {
	    pathBox.style.display = '';
	    ruleBox.style.display = 'none';

	    clearFrom();
	    [].concat(_toConsumableArray(box.querySelectorAll('.js-cc-path'))).forEach(function (el) {
	      return el.classList.remove('is-select');
	    });
	    [].concat(_toConsumableArray(box.querySelectorAll('.js-cc-rule'))).forEach(function (el) {
	      return el.classList.remove('is-select');
	    });
	    createPath();
	  });

	  var nameInput = boxName.querySelector('.js-cc-input');
	  var nameWeight = boxName.querySelector('.js-cc-weight');

	  nameInput.addEventListener('change', function () {
	    var value = nameInput.value;

	    updatePath({
	      field: 'name',
	      value: value
	    });
	  });

	  nameWeight.addEventListener('change', function () {
	    var value = nameWeight.value;

	    updatePath({
	      field: 'weight',
	      value: Number(value) || 0
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
	  }

	  [].concat(_toConsumableArray(box.querySelectorAll('.js-cc-weight'))).forEach(maskWeight);

	  var statusBtn = box.querySelector('.js-cc-status');

	  statusBtn.addEventListener('click', function () {
	    if (statusBtn.classList.contains('is-stoped')) {
	      statusBtn.classList.remove('is-stoped');
	      updatePath({
	        field: 'checkbox',
	        value: 'on'
	      });
	    } else {
	      statusBtn.classList.add('is-stoped');
	      updatePath({
	        field: 'checkbox',
	        value: 'off'
	      });
	    }
	  });

	  var addLander = box.querySelector('.js-cc-landers').querySelector('.js-cc-add');
	  var addOffer = box.querySelector('.js-cc-offers').querySelector('.js-cc-add');

	  function changeList(event, type) {
	    var list = event.target;
	    var lists = list.closest('.js-cc-' + type + 's').querySelectorAll('.js-list');
	    var wrapList = list.closest('.js-cc-list');
	    var wrapLists = wrapList.parentNode.querySelectorAll('.js-cc-list');
	    var oldValue = list.oldValue;
	    var value = list.value;
	    var position = [].concat(_toConsumableArray(wrapLists)).indexOf(wrapList);

	    [].concat(_toConsumableArray(lists)).forEach(function (el) {
	      return el.unsetDisabled(oldValue);
	    });
	    [].concat(_toConsumableArray(lists)).forEach(function (el) {
	      return el.setDisabled(value);
	    });

	    updatePath({
	      field: type + '_update',
	      value: value,
	      position: position
	    });
	  }

	  function removeList(event, type) {
	    var clear = event.target;
	    var wrapList = clear.closest('.js-cc-list');
	    var wrapLists = wrapList.parentNode.querySelectorAll('.js-cc-list');
	    var list = wrapList.querySelector('.js-list');
	    var lists = box.querySelector('.js-cc-' + type + 's').querySelectorAll('.js-list');
	    var value = list.value;
	    var position = [].concat(_toConsumableArray(wrapLists)).indexOf(wrapList);

	    [].concat(_toConsumableArray(lists)).forEach(function (el) {
	      return el.unsetDisabled(value);
	    });
	    wrapList.parentNode.removeChild(wrapList);

	    if (box.querySelector('.js-cc-' + type + 's').querySelectorAll('.js-list').length === 1) {
	      [].concat(_toConsumableArray(box.querySelector('.js-cc-' + type + 's').querySelectorAll('.js-cc-hidden'))).forEach(function (el) {
	        return el.classList.remove('is-show');
	      });
	    }

	    updatePath({
	      field: type + '_remove',
	      position: position
	    });
	  }

	  function addList(add, type) {
	    var wrapAll = add.closest('.js-cc-' + type + 's');
	    var wrapAdd = add.closest('.js-cc-list');
	    var lists = wrapAll.querySelectorAll('.js-list');
	    var value = add.value;
	    var hiddens = wrapAll.querySelectorAll('.js-cc-hidden');

	    if (!value) {
	      return;
	    }

	    add.updateValue();
	    add.setDisabled(value);
	    [].concat(_toConsumableArray(lists)).forEach(function (el) {
	      return el.setDisabled(value);
	    });

	    var newWrapList = wrapAdd.cloneNode(true);
	    var newList = newWrapList.querySelector('.js-list');
	    newWrapList.classList.remove('js-cc-with-hidden');
	    newList.classList.remove('is-open', 'is-add', 'js-cc-add');
	    wrapAdd.parentNode.insertBefore(newWrapList, wrapAdd);
	    (0, _listEvent2.default)(newList);
	    newList.updateValue(value);
	    newList.addEventListener('change', function (event) {
	      return changeList(event, type);
	    });
	    newWrapList.querySelector('.js-clear').addEventListener('click', function (event) {
	      return removeList(event, type);
	    });

	    [].concat(_toConsumableArray(wrapAll.querySelectorAll('.js-cc-hidden'))).forEach(function (el) {
	      return el.classList.add('is-show');
	    });
	    [].concat(_toConsumableArray(box.querySelectorAll('.js-cc-with-hidden .js-cc-hidden'))).forEach(function (el) {
	      return el.classList.remove('is-show');
	    });

	    maskWeight(newWrapList.querySelector('.js-cc-weight'));

	    newWrapList.querySelector('.js-cc-weight').addEventListener('change', function (event) {
	      var wL = event.target.closest('.js-cc-list');
	      var wLs = wL.parentNode.querySelectorAll('.js-cc-list');
	      var position = [].concat(_toConsumableArray(wLs)).indexOf(wL);

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

	  function fillingAddLists(add, url, type) {
	    var options = window._getOptionsFetch({ field: 'id,name', order: 'name' });
	    fetch(window.might.url + url, options).then(function (response) {
	      return response.json();
	    }).then(function (result) {
	      var obj = result.result.data || {};
	      for (var i in obj) {
	        if (obj.hasOwnProperty(i)) {
	          add.querySelector('.js-list-items').innerHTML += '<div class="list__item js-list-item" data-value="' + obj[i].id + '">' + obj[i].name + '</div>';
	        }
	      }
	      (0, _listEvent2.default)(add);
	      add.addEventListener('change', function () {
	        return addList(add, type);
	      });
	    });
	  }

	  (function () {
	    fillingAddLists(addLander, '/lander/list', 'lander');
	    fillingAddLists(addOffer, '/offer/list', 'offer');
	  })();
	};

	var _listEvent = __webpack_require__(23);

	var _listEvent2 = _interopRequireDefault(_listEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (box) {
	  var pathBox = box.querySelector('.js-cc-path-box');
	  var ruleBox = box.querySelector('.js-cc-rule-box');

	  var allRules = box.querySelector('.js-cc-all-rules');

	  var ruleName = box.querySelector('.js-cc-rule-name');
	  var ruleLoad = box.querySelector('.js-cc-rule-load');
	  var ruleAdd = box.querySelector('.js-cc-rule-add');

	  var currentRule = void 0;
	  var checkSelect = false;

	  function eventRule(element) {
	    element.addEventListener('click', function (event) {
	      var rule = event.target.closest('.js-cc-rule');
	      var copy = event.target.closest('.js-cc-rule-copy');
	      var del = event.target.closest('.js-cc-rule-delete');

	      if (rule) {
	        (function () {
	          var position = box.rules.indexOf(rule);

	          if (copy) {
	            var clone = rule.cloneNode(true);
	            var name = rule.value.name;

	            rule.insertAfter(clone);
	            box.rules.splice(position + 1, 0, clone);

	            clone.value = Object.assign({}, rule.value);

	            if (!/ \(copy\)$/.test(name)) {
	              name = name + ' (copy)';
	            }

	            clone.value.name = name;
	            clone.querySelector('.js-cc-rule-name').textContent = name;
	            eventRule(clone);
	          } else if (del) {
	            if (rule.classList.contains('is-select')) {
	              rule.classList.remove('is-select');
	              clearFrom();
	            }

	            rule.classList.add('is-deleted');

	            rule._deleteTimeout = setTimeout(function () {
	              rule.parentNode.removeChild(rule);
	              box.rules.splice(position, 1);
	            }, 5000);

	            rule.querySelector('.js-cc-rule-undo').addEventListener('click', function () {
	              clearTimeout(rule._deleteTimeout);
	              setTimeout(function () {
	                rule.classList.remove('is-deleted');
	              }, 300);
	            });
	          } else {
	            pathBox.style.display = 'none';
	            ruleBox.style.display = '';

	            checkSelect = true;

	            clearFrom();
	            [].concat(_toConsumableArray(box.querySelectorAll('.js-cc-path'))).forEach(function (el) {
	              return el.classList.remove('is-select');
	            });
	            [].concat(_toConsumableArray(box.querySelectorAll('.js-cc-rule'))).forEach(function (el) {
	              return el.classList.remove('is-select');
	            });
	            rule.classList.add('is-select');

	            ruleName.value = rule.value.name || '';

	            checkSelect = false;
	          }
	        })();
	      }
	    });
	  }

	  function createRule() {
	    var ruleElement = document.createElement('div');

	    ruleElement.className = 'cc__path is-select js-cc-rule';
	    ruleElement.innerHTML = '\n      <div class="cc__path-name js-cc-rule-name">[rule unnamed]</div>\n      <div class="cc__path-copy js-cc-rule-copy"></div>\n      <div class="cc__path-delete js-cc-rule-delete"></div>\n      <div class="cc__path-undo js-cc-rule-undo"><i class="fa fa-undo"></i>Undo</div>';

	    allRules.appendChild(ruleElement);
	    box.rules.push(ruleElement);

	    ruleElement.value = {
	      name: ''
	    };

	    eventRule(ruleElement);
	  }

	  function updateRule(obj) {}

	  function clearFrom() {
	    ruleName.value = '';

	    [].concat(_toConsumableArray(box.querySelectorAll('.js-cc-rule-item'))).forEach(function (item) {
	      if (!list.querySelector('.js-cc-rule-add')) {
	        item.parentNode.removeChild(item);
	      } else {
	        item.querySelector('.js-cc-rule-add').unsetDisabled();
	      }
	    });

	    ruleName.focus();
	  }

	  box.querySelector('.js-cc-add-rule').addEventListener('click', function () {
	    pathBox.style.display = 'none';
	    ruleBox.style.display = '';

	    clearFrom();
	    [].concat(_toConsumableArray(box.querySelectorAll('.js-cc-path'))).forEach(function (el) {
	      return el.classList.remove('is-select');
	    });
	    [].concat(_toConsumableArray(box.querySelectorAll('.js-cc-rule'))).forEach(function (el) {
	      return el.classList.remove('is-select');
	    });
	    createRule();
	  });

	  function addList() {
	    var wrapAll = ruleBox.querySelectorAll('.js-cc-rule-list');
	    var wrapAdd = ruleAdd.closest('.js-cc-rule-list');
	    var lists = ruleBox.querySelectorAll('.js-list');

	    var value = ruleAdd.value;

	    if (!value) {
	      return;
	    }

	    ruleAdd.updateValue();
	    ruleAdd.setDisabled(value);
	    [].concat(_toConsumableArray(lists)).forEach(function (el) {
	      return el.setDisabled(value);
	    });

	    var newWrapList = wrapAdd.cloneNode(true);
	    var newList = newWrapList.querySelector('.js-list');

	    newList.classList.remove('is-open', 'is-add', 'js-cc-rule-add');
	    wrapAdd.parentNode.insertBefore(newWrapList, wrapAdd);
	    (0, _listEvent2.default)(newList);
	    newList.updateValue(value);

	    newWrapList.innerHTML += '\n      <div class="js-cc-rule-wrap" style="display: inline-block;">\n        <div class="list js-list js-cc-rule-condition" style="margin: 0 0 15px; width: 120px;">\n          <div class="list__wrap" style="display: block;">\n            <div class="list__value js-list-value"></div>\n            <div class="list__dropdown">\n              <div class="list__items js-list-items"></div>\n            </div>\n          </div>\n        </div>\n        <div class="checklist js-checklist js-cc-rule-checklist" style="width: 267px">\n          <div class="checklist__value js-checklist-value"></div>\n          <div class="checklist__dropdown">\n            <div class="checklist__search">\n              <i class="fa fa-search"></i>\n              <input class="js-checklist-search" type="text">\n            </div>\n            <div class="checklist__items js-checklist-items"></div>\n          </div>\n        </div>\n        <div class="cc__clear js-clear" style="margin-left: 10px;"></div>\n      </div>';

	    var selectRule = void 0;
	    var listCondition = newWrapList.querySelector('.js-cc-rule-condition');
	    var listItemsCondition = listCondition.querySelector('.js-list-items');

	    __RULES__.forEach(function (item) {
	      if (item.slug === value) {
	        selectRule = item;
	        return false;
	      }
	      return true;
	    });

	    selectRule.conditions.forEach(function (condition, index) {
	      listItemsCondition.innerHTML += '<div class="list__item js-list-item" data-value="' + condition.slug + '">' + condition.name + '</div>';
	    });

	    (0, _listEvent2.default)(listCondition);
	    listCondition.setValue(selectRule.conditions[0].slug);
	    (0, _checklistEvent2.default)(newWrapList.querySelector('.js-cc-rule-checklist'), selectRule);
	  }

	  (function () {
	    var items = ruleAdd.querySelector('.js-list-items');

	    __RULES__.forEach(function (item) {
	      items.innerHTML += '<div class="list__item js-list-item" data-value="' + item.slug + '">' + item.name + '</div>';
	    });

	    (0, _listEvent2.default)(ruleAdd);
	    ruleAdd.addEventListener('change', addList);
	  })();
	};

	var _qs = __webpack_require__(14);

	var _qs2 = _interopRequireDefault(_qs);

	var _listEvent = __webpack_require__(23);

	var _listEvent2 = _interopRequireDefault(_listEvent);

	var _checklistEvent = __webpack_require__(57);

	var _checklistEvent2 = _interopRequireDefault(_checklistEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var __RULES__ = [{
	  name: 'Brand and Model',
	  slug: 'brand_and_model',
	  link: '/rules/brand_and_model/search',
	  link_for_childs: '/rules/model/list',
	  key_for_childs: 'brand',
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
	  }]
	}];

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(fetch) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = function (list, obj) {
	  var listValue = list.querySelector('.js-checklist-value');
	  var search = list.querySelector('.js-checklist-search');
	  var itemsWrap = list.querySelector('.js-checklist-items');

	  var link = obj.link;
	  var linkFroChilds = obj.link_for_childs;
	  var keyForChilds = obj.key_for_childs;

	  var loading = false;

	  var clickWindow = void 0;
	  var open = void 0;
	  var close = void 0;
	  var updateItems = void 0;
	  var drawTags = void 0;
	  var deleteTag = void 0;
	  var setValue = void 0;
	  var filterSearch = void 0;

	  clickWindow = function clickWindow(event) {
	    var closest = event.target.closest('.js-checklist');
	    if (!closest || closest !== list) {
	      close();
	    }
	  };

	  open = function open() {
	    search.value = '';
	    search.focus();
	    updateItems();
	    list.classList.add('is-open');
	    window.addEventListener('click', clickWindow);
	  };

	  close = function close() {
	    list.classList.remove('is-open');
	    window.removeEventListener('click', clickWindow);
	  };

	  updateItems = function updateItems() {
	    var val = search.value;

	    if (!val || val.length < 3) {
	      itemsWrap.innerHTML = '';
	      return;
	    }

	    var data = {
	      search: val || ''
	    };

	    var options = window._getOptionsFetch(data);

	    fetch(window.might.url + link, options).then(function (response) {
	      return response.json();
	    }).then(function (result) {
	      itemsWrap.innerHTML = '';

	      if (result.error === false && result.result && _typeof(result.result.data) === 'object') {
	        var res = result.result.data;

	        var _loop = function _loop(i) {
	          if (res.hasOwnProperty(i)) {
	            var cls = list.value[i] && list.value[i] === 'select all' ? ' is-select' : '';
	            itemsWrap.innerHTML += '<div class="checklist__item js-checklist-item' + cls + '" data-value="' + i + '">' + i + '</div>';

	            var item = res[i];
	            var html = '';

	            if (Array.isArray(item)) {
	              html += '<div class="checklist__items-group js-checklist-items-group">';
	              item.forEach(function (j) {
	                var cl = list.value[i] && (list.value[i][j] || list.value[i] === 'select all') ? ' is-select' : '';
	                html += '<div class="checklist__item js-checklist-item' + cl + '" data-value="' + j + '" data-parent-value="' + i + '">' + j + '</div>';
	              });
	              html += '</div>';
	            }

	            itemsWrap.innerHTML += html;
	          }
	        };

	        for (var i in res) {
	          _loop(i);
	        }
	      }
	    });
	  };

	  drawTags = function drawTags() {
	    var value = list.value;

	    listValue.innerHTML = '';

	    for (var i in value) {
	      if (value.hasOwnProperty(i)) {
	        var parent = value[i];

	        if (parent === 'select all') {
	          var span = document.createElement('span');
	          span.className = 'js-checklist-tag';
	          span.textContent = 'All ' + i;
	          span.dataset.parentValue = i;

	          var del = document.createElement('i');
	          del.className = 'js-checklist-tag-delete';
	          span.appendChild(del);

	          listValue.appendChild(span);
	        } else if ((typeof parent === 'undefined' ? 'undefined' : _typeof(parent)) === 'object') {
	          for (var j in parent) {
	            if (parent.hasOwnProperty(j)) {
	              var _span = document.createElement('span');
	              _span.className = 'js-checklist-tag';
	              _span.textContent = '' + j;
	              _span.dataset.parentValue = i;
	              _span.dataset.value = j;

	              var _del = document.createElement('i');
	              _del.className = 'js-checklist-tag-delete';
	              _span.appendChild(_del);

	              listValue.appendChild(_span);
	            }
	          }
	        }
	      }
	    }
	  };

	  deleteTag = function deleteTag(del) {
	    var item = del.closest('.js-checklist-tag');
	    var parentValue = item.dataset.parentValue;
	    var value = item.dataset.value;

	    if (!value) {
	      delete list.value[parentValue];
	    } else {
	      delete list.value[parentValue][value];
	    }

	    item.parentNode.removeChild(item);
	  };

	  setValue = function setValue(item) {
	    var isUpdate = false;
	    var value = item.dataset.value;

	    if (item.dataset.parentValue) {
	      (function () {
	        var parentValue = item.dataset.parentValue;

	        if (list.value[parentValue] && list.value[parentValue] === 'select all') {
	          loading = true;
	          var data = {};
	          data[keyForChilds] = parentValue;
	          var options = window._getOptionsFetch(data);

	          fetch(window.might.url + linkFroChilds, options).then(function (response) {
	            return response.json();
	          }).then(function (result) {
	            if (result.error === false && result.result && Array.isArray(result.result.data)) {
	              var res = result.result.data;
	              list.value[parentValue] = {};
	              item.classList.remove('is-select');
	              var prev = item.closest('.js-checklist-items-group').previousSibling;

	              if (prev) {
	                prev.classList.remove('is-select');
	              }

	              res.forEach(function (i) {
	                list.value[parentValue][i] = true;
	              });
	            }

	            loading = false;
	            drawTags();
	          });
	        } else {
	          list.value[parentValue] = list.value[parentValue] || {};

	          if (list.value[parentValue][value]) {
	            delete list.value[parentValue][value];
	            item.classList.remove('is-select');
	          } else {
	            list.value[parentValue][value] = true;
	            item.classList.add('is-select');
	          }

	          drawTags();
	        }
	      })();
	    } else {
	      if (list.value[value] === 'select all') {
	        delete list.value[value];
	        item.classList.remove('is-select');

	        var next = item.nextSibling;

	        if (next.classList.contains('js-checklist-items-group')) {
	          [].concat(_toConsumableArray(next.querySelectorAll('.js-checklist-item'))).forEach(function (el) {
	            return el.classList.remove('is-select');
	          });
	        }
	      } else {
	        list.value[value] = 'select all';
	        item.classList.add('is-select');

	        var _next = item.nextSibling;

	        if (_next.classList.contains('js-checklist-items-group')) {
	          [].concat(_toConsumableArray(_next.querySelectorAll('.js-checklist-item'))).forEach(function (el) {
	            return el.classList.add('is-select');
	          });
	        }
	      }

	      drawTags();
	    }
	  };

	  list.value = {};

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

	  search.addEventListener('keyup', filterSearch);
	  search.addEventListener('paste', filterSearch);

	  list.addEventListener('click', function (event) {
	    var item = event.target.closest('.js-checklist-item');
	    var del = event.target.closest('.js-checklist-tag-delete');

	    if (item && !loading) {
	      setValue(item);
	    }

	    if (del && !loading) {
	      close();
	      deleteTag(del);
	    }
	  });
	};

	var _qs = __webpack_require__(14);

	var _qs2 = _interopRequireDefault(_qs);

	var _dateformat = __webpack_require__(28);

	var _dateformat2 = _interopRequireDefault(_dateformat);

	var _fieldName = __webpack_require__(38);

	var _fieldName2 = _interopRequireDefault(_fieldName);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(fetch) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  if (document.querySelector('.js-popup')) {
	    return;
	  }

	  var popup = (0, _createPopup2.default)('List of landers');

	  if (!popup) {
	    return;
	  }

	  var popupBody = popup.querySelector('.js-popup-body');

	  if (popupBody) {
	    var options = window._getOptionsFetch({
	      name: name,
	      url: landerUrl
	    });

	    fetch(window.might.url + '/lander/list', options).then(function (response) {
	      return response.json();
	    }).then(function (result) {
	      if (result.error) {
	        if (result.result.msg) {
	          popupBody.innerHTML = '<div class="popup__message">' + result.result.msg + '</div>';
	        }
	      } else {
	        (function () {
	          var table = document.createElement('table');
	          table.className = 'popup__list';
	          popupBody.appendChild(table);

	          result.result.data.forEach(function (item) {
	            var name = item.name;
	            var id = item.id;
	            var tr = document.createElement('tr');

	            tr.innerHTML = '\n            <td data-id="' + id + '"><span>' + name + '</span></td>\n            <td><span>Copy</span></td>\n            <td><span>Edit</span></td>\n            <td><span>Update cost</span></td>\n            <td><span>Links</span></td>\n          ';

	            table.appendChild(tr);
	          });
	        })();
	      }
	    });
	  }
	};

	var _qs = __webpack_require__(14);

	var _qs2 = _interopRequireDefault(_qs);

	var _createPopup = __webpack_require__(52);

	var _createPopup2 = _interopRequireDefault(_createPopup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(fetch) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  if (document.querySelector('.js-popup')) {
	    return;
	  }

	  var popup = (0, _createPopup2.default)('Creating new lander', true);

	  if (!popup) {
	    return;
	  }

	  var popupBody = popup.querySelector('.js-popup-body');

	  if (!popupBody) {
	    return;
	  }

	  popupBody.innerHTML = '\n    <div class="popup__line">\n      <div class="popup__line-label">\n        <span>Name:</span>\n        <div class="info"></div>\n      </div>\n      <div class="popup__line-body">\n        <div class="input">\n          <input class="js-form-name" type="text" placeholder="Write a name for the new offer">\n          <span><span>\n        </div>\n      </div>\n    </div>\n\n    <div class="popup__line">\n      <div class="popup__line-label">\n        <span>Offer URL:</span>\n        <div class="info"></div>\n      </div>\n      <div class="popup__line-body">\n        <div class="input">\n          <input class="js-form-url" type="text" placeholder="Create a url">\n          <span><span>\n        </div>\n        <div class="tags js-form-tags" style="display: none;"></div>\n      </div>\n    </div>\n    </div>';

	  var formName = popupBody.querySelector('.js-form-name');
	  var formUrl = popupBody.querySelector('.js-form-url');
	  var formUrlTags = popupBody.querySelector('.js-form-tags');

	  '{country},{cost},{campaign_id},{trafficsource_id},{ip_id},{offer_id}'.split(',').forEach(function (tag) {
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
	      if (!closest.classList.contains('is-select')) {
	        var tag = closest.textContent;
	        formUrl.value += tag;
	        closest.classList.add('is-select');
	      }
	    }

	    formUrl.focus();
	    event.preventDefault();
	    event.stopPropagation();
	  });

	  popup.querySelector('.js-popup-save').addEventListener('click', function (event) {
	    var name = formName.value.trim();
	    var landerUrl = formUrl.value.trim();

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

	    var focusFormUrl = function focusFormUrl() {
	      var parentFormUrl = formUrl.parentNode;
	      parentFormUrl.classList.remove('is-error');
	      parentFormUrl.querySelector('span').textContent = '';
	      formUrl.removeEventListener('focus', focusFormUrl);
	    };

	    if (!landerUrl) {
	      var parentFormUrl = formUrl.parentNode;
	      parentFormUrl.classList.add('is-error');
	      parentFormUrl.querySelector('span').textContent = 'The field can not be empty';
	      formUrl.addEventListener('focus', focusFormUrl);
	      return;
	    }

	    var options = window._getOptionsFetch({
	      name: name,
	      url: landerUrl
	    });

	    fetch(window.might.url + '/lander/create', options).then(function (response) {
	      return response.json();
	    }).then(function (result) {
	      if (result.error) {
	        if (result.result.msg) {
	          popupBody.querySelector('.js-poopup-error').textContent = result.result.msg;
	        }
	      } else {
	        popup.close();
	      }
	    });
	  });
	};

	var _qs = __webpack_require__(14);

	var _qs2 = _interopRequireDefault(_qs);

	var _createPopup = __webpack_require__(52);

	var _createPopup2 = _interopRequireDefault(_createPopup);

	var _listEvent = __webpack_require__(23);

	var _listEvent2 = _interopRequireDefault(_listEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(fetch) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  if (document.querySelector('.js-popup')) {
	    return;
	  }

	  var popup = (0, _createPopup2.default)('Offer list');

	  if (!popup) {
	    return;
	  }

	  var popupBody = popup.querySelector('.js-popup-body');

	  if (popupBody) {
	    var options = window._getOptionsFetch({
	      field: 'id,name',
	      order: 'name'
	    });

	    fetch(window.might.url + '/offer/list', options).then(function (response) {
	      return response.json();
	    }).then(function (result) {
	      if (result.error) {
	        if (result.result.msg) {
	          popupBody.innerHTML = '<div class="popup__message">' + result.result.msg + '</div>';
	        }
	      } else {
	        (function () {
	          var table = document.createElement('table');
	          table.className = 'popup__list';
	          popupBody.appendChild(table);

	          result.result.data.forEach(function (item) {
	            var name = item.name;
	            var id = item.id;
	            var tr = document.createElement('tr');

	            tr.innerHTML = '\n            <td data-id="' + id + '"><span>' + name + '</span></td>\n            <td><span>Copy</span></td>\n            <td><span>Edit</span></td>\n            <td><span>Update cost</span></td>\n            <td><span>Links</span></td>\n          ';

	            table.appendChild(tr);
	          });
	        })();
	      }
	    });
	  }
	};

	var _qs = __webpack_require__(14);

	var _qs2 = _interopRequireDefault(_qs);

	var _createPopup = __webpack_require__(52);

	var _createPopup2 = _interopRequireDefault(_createPopup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(fetch) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  if (document.querySelector('.js-popup')) {
	    return;
	  }

	  var popup = (0, _createPopup2.default)('Creating new offer', true);

	  if (!popup) {
	    return;
	  }

	  var popupBody = popup.querySelector('.js-popup-body');

	  if (!popupBody) {
	    return;
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

	  '{country},{cost},{campaign_id},{trafficsource_id},{ip_id},{offer_id}'.split(',').forEach(function (tag) {
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
	      if (!closest.classList.contains('is-select')) {
	        var tag = closest.textContent;
	        formUrl.value += tag;
	        closest.classList.add('is-select');
	      }
	    }

	    formUrl.focus();
	    event.preventDefault();
	    event.stopPropagation();
	  });

	  (function () {
	    var options = window._getOptionsFetch({
	      field: 'id,name',
	      order: 'name'
	    });

	    fetch(window.might.url + '/affiliate_network/list', options).then(function (response) {
	      return response.json();
	    }).then(function (result) {
	      var items = formAffNet.querySelector('.js-list-items');

	      (result.result.data || []).forEach(function (item) {
	        items.innerHTML += '<div class="list__item js-list-item" data-value="' + item.id + '">' + item.name + '</div>';
	      });

	      (0, _listEvent2.default)(formAffNet);
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

	    var focusFormUrl = function focusFormUrl() {
	      var parentFormUrl = formUrl.parentNode;
	      parentFormUrl.classList.remove('is-error');
	      parentFormUrl.querySelector('span').textContent = '';
	      formUrl.removeEventListener('focus', focusFormUrl);
	    };

	    if (!offerUrl) {
	      var parentFormUrl = formUrl.parentNode;
	      parentFormUrl.classList.add('is-error');
	      parentFormUrl.querySelector('span').textContent = 'The field can not be empty';
	      formUrl.addEventListener('focus', focusFormUrl);
	      return;
	    }

	    var clickFormAffNet = function clickFormAffNet() {
	      formAffNet.classList.remove('is-error');
	      formAffNet.removeEventListener('click', clickFormAffNet);
	    };

	    if (!affNet) {
	      formAffNet.classList.add('is-error');
	      formAffNet.addEventListener('click', clickFormAffNet);
	      return;
	    }

	    if (formPayoutEur.classList.contains('is-select')) {
	      currency = 'EUR';
	    } else if (formPayoutRub.classList.contains('is-select')) {
	      currency = 'RUB';
	    } else {
	      currency = 'USD';
	    }

	    var options = window._getOptionsFetch({
	      name: name,
	      url: offerUrl,
	      affiliate_network: affNet,
	      payout: payout,
	      currency: currency,
	      offer_type: 0,
	      payout_value: payoutValue
	    });

	    fetch(window.might.url + '/offer/create', options).then(function (response) {
	      return response.json();
	    }).then(function (result) {
	      if (result.error) {
	        if (result.result.msg) {
	          popupBody.querySelector('.js-poopup-error').textContent = result.result.msg;
	        }
	      } else {
	        popup.close();
	      }
	    });
	  });
	};

	var _qs = __webpack_require__(14);

	var _qs2 = _interopRequireDefault(_qs);

	var _createPopup = __webpack_require__(52);

	var _createPopup2 = _interopRequireDefault(_createPopup);

	var _listEvent = __webpack_require__(23);

	var _listEvent2 = _interopRequireDefault(_listEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(fetch) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  if (document.querySelector('.js-popup')) {
	    return;
	  }

	  var popup = (0, _createPopup2.default)('Traffic source list');

	  if (!popup) {
	    return;
	  }

	  var popupBody = popup.querySelector('.js-popup-body');

	  if (popupBody) {
	    var options = window._getOptionsFetch({
	      field: 'id,name',
	      order: 'name'
	    });

	    fetch(window.might.url + '/traffic/sources/list', options).then(function (response) {
	      return response.json();
	    }).then(function (result) {
	      if (result.error) {
	        if (result.result.msg) {
	          popupBody.innerHTML = '<div class="popup__message">' + result.result.msg + '</div>';
	        }
	      } else {
	        (function () {
	          var table = document.createElement('table');
	          table.className = 'popup__list';
	          popupBody.appendChild(table);

	          result.result.data.forEach(function (item) {
	            var name = item.name;
	            var id = item.id;
	            var tr = document.createElement('tr');

	            tr.innerHTML = '\n            <td data-id="' + id + '"><span>' + name + '</span></td>\n            <td><span>Copy</span></td>\n            <td><span>Edit</span></td>\n            <td><span>Update cost</span></td>\n            <td><span>Links</span></td>\n          ';

	            table.appendChild(tr);
	          });
	        })();
	      }
	    });
	  }
	};

	var _qs = __webpack_require__(14);

	var _qs2 = _interopRequireDefault(_qs);

	var _createPopup = __webpack_require__(52);

	var _createPopup2 = _interopRequireDefault(_createPopup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  if (document.querySelector('.js-popup')) {
	    return;
	  }

	  var popup = (0, _createPopup2.default)('Creating new traffic source', true);

	  if (!popup) {
	    return;
	  }

	  var popupBody = popup.querySelector('.js-popup-body');

	  if (!popupBody) {
	    return;
	  }

	  popupBody.innerHTML = '\n    <div class="popup__line">\n      <div class="popup__line-label">\n        <span>Name:</span>\n        <div class="info"></div>\n      </div>\n      <div class="popup__line-body">\n        <div class="input">\n          <input class="js-form-name" type="text" placeholder="Write a name for the new offer">\n          <span><span>\n        </div>\n      </div>\n    </div>\n\n    <div class="popup__line">\n      <div class="popup__line-label">\n        <span>Postback URL:</span>\n        <div class="info"></div>\n      </div>\n      <div class="popup__line-body">\n        <div class="input">\n          <input class="js-form-url" type="text" placeholder="Create a url">\n          <span><span>\n        </div>\n        <div class="tags js-form-tags" style="display: none;"></div>\n      </div>\n    </div>\n\n    <div class="popup__line">\n      <div class="popup__line-label">\n        <span>Loading settings from:</span>\n        <div class="info"></div>\n      </div>\n      <div class="popup__line-body">\n        <div class="list js-list js-form-loading" style="display: block; margin: 0 0 15px;" data-placeholder="Select affiliate network">\n          <div class="list__wrap" style="display: block;">\n            <div class="list__value js-list-value"></div>\n            <div class="list__dropdown" style="right: 0;">\n              <div class="list__items js-list-items">\n                <div class="list__item js-list-item" data-value="0">test</div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class="popup__inputs">\n          <div class="popup__inputs-line">\n            <div class="popup__inputs-field"><div class="popup__inputs-title">Parameter<div class="info"></div></div></div>\n            <div class="popup__inputs-field"><div class="popup__inputs-title">Placeholder<div class="info"></div></div></div>\n            <div class="popup__inputs-field"><div class="popup__inputs-title">Name<div class="info"></div></div></div>\n          </div>\n          <div class="popup__inputs-line">\n            <div class="popup__inputs-label">External ID:</div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n          </div>\n          <div class="popup__inputs-line">\n            <div class="popup__inputs-label">Cost:</div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n          </div>\n          <div class="popup__inputs-line">\n            <div class="popup__inputs-label">Custom variable 1:</div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n          </div>\n          <div class="popup__inputs-line">\n            <div class="popup__inputs-label">Custom variable 2:</div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n          </div>\n          <div class="popup__inputs-line">\n            <div class="popup__inputs-label">Custom variable 3:</div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n          </div>\n          <div class="popup__inputs-line">\n            <div class="popup__inputs-label">Custom variable 4:</div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n          </div>\n          <div class="popup__inputs-line">\n            <div class="popup__inputs-label">Custom variable 5:</div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n          </div>\n          <div class="popup__inputs-line">\n            <div class="popup__inputs-label">Custom variable 6:</div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n          </div>\n          <div class="popup__inputs-line">\n            <div class="popup__inputs-label">Custom variable 7:</div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n          </div>\n          <div class="popup__inputs-line">\n            <div class="popup__inputs-label">Custom variable 8:</div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n          </div>\n          <div class="popup__inputs-line">\n            <div class="popup__inputs-label">Custom variable 9:</div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n          </div>\n          <div class="popup__inputs-line">\n            <div class="popup__inputs-label">Custom variable 10:</div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n          </div>\n          <div class="popup__inputs-line">\n            <div class="popup__inputs-label">Custom variable 11:</div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n          </div>\n          <div class="popup__inputs-line">\n            <div class="popup__inputs-label">Custom variable 12:</div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n          </div>\n          <div class="popup__inputs-line">\n            <div class="popup__inputs-label">Custom variable 13:</div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n          </div>\n          <div class="popup__inputs-line">\n            <div class="popup__inputs-label">Custom variable 14:</div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n          </div>\n          <div class="popup__inputs-line">\n            <div class="popup__inputs-label">Custom variable 15:</div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n            <div class="popup__inputs-field"><input type="text"></div>\n          </div>\n        </div>\n      </div>\n    </div>';

	  var formName = popupBody.querySelector('.js-form-name');
	  var formUrl = popupBody.querySelector('.js-form-url');
	  var formUrlTags = popupBody.querySelector('.js-form-tags');
	  var formLoading = popupBody.querySelector('.js-form-loading');

	  '{country},{cost},{campaign_id},{trafficsource_id},{ip_id},{offer_id}'.split(',').forEach(function (tag) {
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
	      if (!closest.classList.contains('is-select')) {
	        var tag = closest.textContent;
	        formUrl.value += tag;
	        closest.classList.add('is-select');
	      }
	    }

	    formUrl.focus();
	    event.preventDefault();
	    event.stopPropagation();
	  });

	  (0, _listEvent2.default)(formLoading);
	};

	var _qs = __webpack_require__(14);

	var _qs2 = _interopRequireDefault(_qs);

	var _createPopup = __webpack_require__(52);

	var _createPopup2 = _interopRequireDefault(_createPopup);

	var _listEvent = __webpack_require__(23);

	var _listEvent2 = _interopRequireDefault(_listEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(fetch) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  if (document.querySelector('.js-popup')) {
	    return;
	  }

	  var popup = (0, _createPopup2.default)('List of affiliate networks');

	  if (!popup) {
	    return;
	  }

	  var popupBody = popup.querySelector('.js-popup-body');

	  if (popupBody) {
	    var options = window._getOptionsFetch({
	      field: 'id,name',
	      order: 'name'
	    });

	    fetch(window.might.url + '/affiliate_network/list', options).then(function (response) {
	      return response.json();
	    }).then(function (result) {
	      if (result.error) {
	        if (result.result.msg) {
	          popupBody.innerHTML = '<div class="popup__message">' + result.result.msg + '</div>';
	        }
	      } else {
	        (function () {
	          var table = document.createElement('table');
	          table.className = 'popup__list';
	          popupBody.appendChild(table);

	          result.result.data.forEach(function (item) {
	            var name = item.name;
	            var id = item.id;
	            var tr = document.createElement('tr');

	            tr.innerHTML = '\n            <td data-id="' + id + '"><span>' + name + '</span></td>\n            <td><span>Copy</span></td>\n            <td><span>Edit</span></td>\n            <td><span>Update cost</span></td>\n            <td><span>Links</span></td>\n          ';

	            table.appendChild(tr);
	          });
	        })();
	      }
	    });
	  }
	};

	var _qs = __webpack_require__(14);

	var _qs2 = _interopRequireDefault(_qs);

	var _createPopup = __webpack_require__(52);

	var _createPopup2 = _interopRequireDefault(_createPopup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(fetch) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  if (document.querySelector('.js-popup')) {
	    return;
	  }

	  var popup = (0, _createPopup2.default)('Creating new affilate networks', true);

	  if (!popup) {
	    return;
	  }

	  var popupBody = popup.querySelector('.js-popup-body');

	  if (!popupBody) {
	    return;
	  }

	  popupBody.innerHTML = '\n    <div class="popup__line">\n      <div class="popup__line-label">\n        <span>Name:</span>\n        <div class="info"></div>\n      </div>\n      <div class="popup__line-body">\n        <div class="input">\n          <input class="js-form-name" type="text" placeholder="Write a name for the new affiliate network">\n          <span>sadfsadf<span>\n        </div>\n        <div class="checkbox js-checkbox js-form-duplicate-postbacks">Accept dublicated post backs</div>\n        <div class="checkbox js-checkbox js-form-list-ips">Accept postbacks from white-listed IPs</div>\n        <div class="inputs js-form-ips" style="display: none;">\n          <div class="inputs__wrap">\n            <input class="js-form-input-ip" type="text">\n          </div>\n          <div class="inputs__error js-inputs-error"></div>\n        </div>\n      </div>\n    </div>';

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

	      formInputIp.parentNode.insertBefore(span, formInputIp);
	      formInputIp.value = '';
	    }
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

	      if (!ips.length) {
	        formIps.classList.add('is-error');
	        formIps.querySelector('.js-inputs-error').textContent = 'The field can not be empty';
	        formIps.addEventListener('click', focusFormIps);

	        return;
	      }
	    }

	    var options = window._getOptionsFetch({
	      name: name,
	      duplicate_postbacks: duplicatePostbacks,
	      white_list: whiteList,
	      append_click_id: 0,
	      ips: ips.join(',')
	    });

	    fetch(window.might.url + '/affiliate_network/create', options).then(function (response) {
	      return response.json();
	    }).then(function (result) {
	      if (result.error) {
	        if (result.result.msg) {
	          popupBody.querySelector('.js-poopup-error').textContent = result.result.msg;
	        }
	      } else {
	        popup.close();
	      }
	    });
	  });
	};

	var _qs = __webpack_require__(14);

	var _qs2 = _interopRequireDefault(_qs);

	var _createPopup = __webpack_require__(52);

	var _createPopup2 = _interopRequireDefault(_createPopup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(fetch) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var stat = document.querySelector('.js-stat');
	  var navControl = document.querySelector('.js-stat-nav');

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

	    if (window.might.hasOwnProperty('auth_key')) {
	      data.auth_key = window.might.auth_key;
	    }

	    if (window.might.hasOwnProperty('all_fields')) {
	      data.all_fields = window.might.all_fields;
	    }

	    data.draw = params.draw;
	    if (params.level === 1 || !params.is_tree) {
	      data.start = (params.page - 1) * params.length;
	      data.length = params.length;
	    } else {
	      data.start = 0;
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
	      var options = window._getOptionsFetch(obj.form_data);

	      fetch(window.might.url + '/clicks/grid', options).then(function (response) {
	        return response.json();
	      }).then(function (result) {
	        var params = window.might.stat.params;

	        if (result.draw !== params.draw + 1) {
	          return;
	        }

	        params.draw = result.draw;
	        obj.result = result;

	        if (obj.level === 1) {
	          var yPosNav = navControl.getBoundingClientRect().top;
	          var xScrollWindow = window.scrollX;
	          var visibleNav = window.scrollY > 0 && yPosNav < window.innerHeight;

	          (0, _tableEvent2.default)(_tableRender2.default.render(obj));

	          if (params.total !== parseInt(result.recordsTotal, 10)) {
	            params.total = parseInt(result.recordsTotal, 10);
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

	          stat.triggerEvent('drawgraph');
	        } else {
	          _tableRender2.default.renderRow(obj);
	        }
	      });
	    }
	  });
	};

	var _qs = __webpack_require__(14);

	var _qs2 = _interopRequireDefault(_qs);

	var _dateformat = __webpack_require__(28);

	var _dateformat2 = _interopRequireDefault(_dateformat);

	var _tableRender = __webpack_require__(67);

	var _tableRender2 = _interopRequireDefault(_tableRender);

	var _tableEvent = __webpack_require__(68);

	var _tableEvent2 = _interopRequireDefault(_tableEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ },
/* 67 */
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

	var columns = void 0;

	var renderRows = function renderRows(tr, record, response) {
	  if (response.is_tree) {
	    tr.level = response.level;
	    tr.filter = response.filter || [];
	    tr.filter.push({ field: response.field, value: record[response.field] });
	    tr.thisFilter = { field: response.field, value: record[response.field] };
	  }

	  columns.forEach(function (key, j) {
	    var td = void 0;
	    var name = void 0;
	    var fields = response.field.split(',');

	    var k = fields[j] || key;

	    if (k === 'campaign_id') {
	      if (record.label && record.label.name) {
	        name = record.label.name;
	      } else if (record[k] || record[k] === 0) {
	        name = '[id: ' + record[k] + ']';
	      } else {
	        name = '[empty value]';
	      }
	    } else {
	      if (record[k] || record[k] === 0) {
	        name = record[k];
	      } else {
	        name = '';
	      }
	    }

	    var span = createNode('span', null, name);

	    if (response.is_tree && fields[j]) {
	      span.classList.add('is-clickable');
	    }

	    if (j === 0) {
	      td = createNode('td');

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

	      if (k === 'campaign_id') {
	        var helper = createNode('div', ['helper', 'js-helper']);
	        helper.innerHTML = '<div class="helper__cloud">' + '<div class="helper__link"><span>Edit</span></div>' + '<div class="helper__link"><span>Copy</span></div>' + '<div class="helper__link"><span>Update cost</span></div>' + '<div class="helper__link"><span>Links</span></div>' + '</div>';
	        main.appendChild(helper);
	        main.classList.add('is-with-helper');
	      }
	    } else {
	      td = createNode('td');
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

	          data.forEach(function (record) {
	            if ((typeof record === 'undefined' ? 'undefined' : _typeof(record)) === 'object' && !Array.isArray(record)) {
	              Object.keys(record).forEach(function (k) {
	                if (params.columns.hasOwnProperty(k)) {
	                  keys[k] = true;
	                }
	              });
	            }
	          });

	          columns = Object.keys(keys);
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

	    document.querySelector('.js-canvas').innerHTML = '';
	    document.querySelector('.js-canvas').appendChild(div);

	    return div;
	  },

	  renderRow: function renderRow(response) {
	    var data = response.result.data;
	    var type = typeof data === 'undefined' ? 'undefined' : _typeof(data);
	    var table = response.current.parentNode;
	    var nextRow = response.current.nextSibling;

	    response.current.classList.add('is-open');

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
	            table.insertBefore(tr, nextRow);
	          } else {
	            table.appendChild(tr);
	          }

	          renderRows(tr, record, response);
	        }
	      });
	    }
	  }
	};

/***/ },
/* 68 */
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
	      var _filter = Object.assign({}, _elements.current.thisFilter);
	      var params = window.might.stat.params;

	      _filter.title = clickable.textContent;
	      (0, _update2.default)({ filter_stock: { field: _filter.field, value: _filter.value, title: _filter.title } });
	    } else if (sort) {
	      var value = sort.dataset.value;

	      if (value) {
	        (0, _update2.default)({ table_sort: value });
	      }
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

	var _update = __webpack_require__(49);

	var _update2 = _interopRequireDefault(_update);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(fetch) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var stat = document.querySelector('.js-stat');
	  var statGraph = stat.querySelector('.js-stat-graph');
	  var statGraphCanvas = stat.querySelector('#stat-graph');

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

	    if (window.might.hasOwnProperty('auth_key')) {
	      data.auth_key = window.might.auth_key;
	    }

	    if (window.might.hasOwnProperty('auth_key')) {
	      data.auth_key = window.might.auth_key;
	    }

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

	    if (!params.show_graph) {
	      statGraph.style.display = 'none';
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
	      return;
	    }

	    var obj = getFormData();

	    if (obj) {
	      var options = window._getOptionsFetch(obj);

	      fetch(window.might.url + '/graph/data', options).then(function (response) {
	        return response.json();
	      }).then(function (result) {
	        (0, _graphRender2.default)(result);
	      });
	    }
	  });
	};

	var _qs = __webpack_require__(14);

	var _qs2 = _interopRequireDefault(_qs);

	var _dateformat = __webpack_require__(28);

	var _dateformat2 = _interopRequireDefault(_dateformat);

	var _listEvent = __webpack_require__(23);

	var _listEvent2 = _interopRequireDefault(_listEvent);

	var _update = __webpack_require__(49);

	var _update2 = _interopRequireDefault(_update);

	var _graphRender = __webpack_require__(70);

	var _graphRender2 = _interopRequireDefault(_graphRender);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (result) {
	  var stat = document.querySelector('.js-stat');
	  var statGraph = stat.querySelector('.js-stat-graph');
	  var canvas = stat.querySelector('#stat-graph');
	  var res = result || {};
	  var params = window.might.stat.params;

	  var colors = [];
	  var series = [];

	  statGraph.style.display = '';
	  canvas.style.display = '';
	  canvas.innerHTML = '';

	  if (Array.isArray(result.names)) {
	    (function () {
	      var i = 0;

	      params.fields_graph.forEach(function (fg, pos) {
	        if (fg.visible) {
	          (function () {
	            var ser = {
	              name: fg.field,
	              data: []
	            };

	            if (result.start && result.step) {
	              result.values[i].forEach(function (value, j) {
	                ser.data[j] = [+new Date(result.step * j + result.start), value];
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

	  _highcharts2.default.chart('stat-graph', {
	    chart: {
	      zoomType: 'x',
	      resetZoomButton: {
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

	var _dateformat = __webpack_require__(28);

	var _dateformat2 = _interopRequireDefault(_dateformat);

	var _highcharts = __webpack_require__(71);

	var _highcharts2 = _interopRequireDefault(_highcharts);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }
]);
//# sourceMappingURL=application.js.map