webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	var _reset = __webpack_require__(13);

	var _reset2 = _interopRequireDefault(_reset);

	var _time = __webpack_require__(14);

	var _time2 = _interopRequireDefault(_time);

	var _list = __webpack_require__(15);

	var _list2 = _interopRequireDefault(_list);

	var _calendar = __webpack_require__(17);

	var _calendar2 = _interopRequireDefault(_calendar);

	var _postback = __webpack_require__(19);

	var _postback2 = _interopRequireDefault(_postback);

	var _index = __webpack_require__(20);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _reset2.default)();

	(0, _time2.default)();
	(0, _list2.default)();
	(0, _calendar2.default)();
	(0, _postback2.default)();

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
/***/ function(module, exports) {

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

/***/ },
/* 14 */
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  [].concat(_toConsumableArray(document.querySelectorAll('.js-list'))).forEach(_listEvent2.default);
	};

	var _listEvent = __webpack_require__(16);

	var _listEvent2 = _interopRequireDefault(_listEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = function (list) {
	  var body = document.body;
	  var listValue = list.querySelector('.js-list-value');
	  var search = list.querySelector('.js-list-search');
	  var items = list.querySelectorAll('.js-list-item');
	  var placeholder = list.dataset.placeholder;

	  var clickWindow = void 0;
	  var open = void 0;
	  var close = void 0;
	  var getItemByValue = void 0;
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
	    list.classList.add('is-open');
	    window.addEventListener('click', clickWindow);
	  };

	  close = function close() {
	    if (search) {
	      search.value = '';

	      [].concat(_toConsumableArray(items)).forEach(function (item) {
	        item.style.display = '';
	      });
	    }

	    list.classList.remove('is-open');
	    window.removeEventListener('click', clickWindow);
	  };

	  getItemByValue = function getItemByValue(val) {
	    var sel = -1;
	    var value = String(val);

	    [].concat(_toConsumableArray(items)).forEach(function (item, i) {
	      if (value === (item.dataset.value || item.innerText)) {
	        sel = i;
	        return false;
	      }
	      return true;
	    });

	    return sel;
	  };

	  updateValue = function updateValue(param) {
	    var obj = {
	      item: -1,
	      value: null,
	      is_clear: false,
	      label: null
	    };

	    var clearBtn = void 0;

	    if (typeof param === 'string' || typeof param === 'number') {
	      obj.item = getItemByValue(param);
	      obj.value = param;
	      obj.is_clear = false;
	      obj.label = false;
	    } else if ((typeof param === 'undefined' ? 'undefined' : _typeof(param)) === 'object' && !Array.isArray(param)) {
	      if (!param.hasOwnProperty('item') && param.hasOwnProperty('value')) {
	        obj.item = getItemByValue(param.value);
	        obj.value = param.value;
	      } else if (items[parseInt(param.item, 10)]) {
	        obj.item = parseInt(param.item, 10);
	        obj.value = items[obj.item].dataset.value || items[obj.item].innerHTML;
	      }

	      obj.is_clear = !!param.is_clear;
	      obj.label = param.label;
	    }

	    var item = items[obj.item];
	    var text = void 0;
	    var value = void 0;

	    if (obj.value) {
	      text = item ? item.innerHTML : obj.value;
	      value = obj.value;
	    } else {
	      text = placeholder || items[0].innerHTML;
	      value = null;

	      clearBtn = list.querySelector('.list__clear');

	      if (clearBtn) {
	        clearBtn.parentNode.removeChild(clearBtn);
	      }
	    }

	    if (list.value === value) {
	      return false;
	    }

	    listValue.innerText = text;
	    list.oldValue = list.value;
	    list.value = value;

	    [].concat(_toConsumableArray(items)).forEach(function (el) {
	      return el.classList.remove('is-select');
	    });

	    if (item) {
	      item.classList.add('is-select');
	    }

	    if (obj.is_clear && list.value) {
	      (function () {
	        clearBtn = document.createElement('div');
	        clearBtn.classList.add('list__clear');
	        list.appendChild(clearBtn);

	        var clear = function clear() {
	          setValue({ is_clear: true });
	          clearBtn.removeEventListener('click', clear);
	        };

	        clearBtn.addEventListener('click', clear);
	      })();
	    }

	    if (obj.label) {
	      var label = list.querySelector('.list-label');

	      if (label) {
	        label.parentNode.removeChild(label);

	        label = document.createElement('div');
	        label.classList.add('list-label');
	        label.innerText = obj.label;
	        list.insertBefore(label, list.firstChild);
	      }
	    }

	    return true;
	  };

	  setValue = function setValue(param) {
	    if (updateValue(param)) {
	      list.triggerEvent('change');
	    }
	  };

	  setDisabled = function setDisabled(arr) {
	    var setDis = function setDis() {
	      var item = getItemByValue(arr);

	      if (item !== -1) {
	        items[item].classList.add('is-disabled');
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

	      if (item !== -1) {
	        items[item].classList.remove('is-disabled');
	      }
	    };

	    if (typeof arr === 'string' || typeof arr === 'number') {
	      setDis(arr);
	    } else if (Array.isArray(arr)) {
	      arr.forEach(setDis);
	    } else {
	      [].concat(_toConsumableArray(items)).forEach(function (item) {
	        return item.classList.remove('is-disabled');
	      });
	    }
	  };

	  list.updateValue = updateValue;
	  list.setValue = setValue;
	  list.setDisabled = setDisabled;
	  list.unsetDisabled = unsetDisabled;

	  listValue.addEventListener('click', function () {
	    if (list.classList.contains('is-open')) {
	      close();
	    } else {
	      open();
	    }
	  });

	  if (search) {
	    var filterSearch = function filterSearch(event) {
	      var reg = new RegExp(event.target.value, 'i');

	      [].concat(_toConsumableArray(items)).forEach(function (item) {
	        if (item.innerText.search(reg) === -1) {
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

	  [].concat(_toConsumableArray(items)).forEach(function (item, i) {
	    item.addEventListener('click', function (event) {
	      if (event.target.classList.contains('is-disabled')) {
	        return;
	      }

	      setValue({ item: i });
	      close();
	    });

	    if (item.classList.contains('.is-select')) {
	      updateValue({ item: i });
	    }
	  });

	  if (!listValue.innerText) {
	    if (placeholder) {
	      listValue.innerText = placeholder;
	    } else {
	      updateValue({ item: 0 });
	    }
	  }
	};

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 17 */
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

	      for (var i = 1 - first; i <= count; i++) {
	        var span = document.createElement('span');
	        var day = void 0;

	        if (i > 0) {
	          span.innerText = i;
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

	var _dateformat = __webpack_require__(18);

	var _dateformat2 = _interopRequireDefault(_dateformat);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 18 */,
/* 19 */
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
	    var _open = void 0;
	    var close = void 0;
	    var updateValue = void 0;
	    var setValue = void 0;
	    var tempValue = {};

	    clickWindow = function clickWindow(event) {
	      var closest = event.target.closest('.js-postback');

	      if (!closest || closest !== control) {
	        close(event);
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

	    _open = function open(event) {
	      event.stopPropagation();

	      tempValue.postback_date = control.value.postback_date;
	      tempValue.currency = control.value.currency;

	      control.removeEventListener('click', _open);
	      control.classList.add('is-open');
	      window.addEventListener('click', clickWindow);
	    };

	    close = function close(event) {
	      event.stopPropagation();

	      resetBtns(control.value);

	      window.removeEventListener('click', clickWindow);
	      control.addEventListener('click', _open);
	      control.classList.remove('is-open');
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

	    applyBtn.addEventListener('click', function (event) {
	      setValue(tempValue);
	      close(event);
	    });

	    closeBtn.addEventListener('click', function (event) {
	      close(event);
	    });

	    control.value = {};

	    control.addEventListener('click', _open);

	    control.updateValue = updateValue;
	    control.setValue = setValue;
	  });
	};

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 20 */
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

	  (0, _nav2.default)();
	  (0, _table2.default)();
	  (0, _graph2.default)();
	  (0, _init2.default)();

	  var statParams = window.might.stat.params;
	  var datetime = stat.querySelector('.js-stat-datetime');
	  var segmentBtns = stat.querySelectorAll('.js-stat-main-segment');
	  var segmentAdd = stat.querySelector('.js-stat-addsegment');
	  var segmentList = [];
	  var graphBtn = stat.querySelector('.js-stat-show-graph');
	  var treeBtn = stat.querySelector('.js-stat-is-tree');
	  var postbackControl = stat.querySelector('.js-stat-postback');
	  var navControl = stat.querySelector('.js-stat-nav');

	  var segmentChange = function segmentChange(event) {
	    var segment = event.target;
	    var value = segment.value;
	    var oldValue = segment.oldValue;
	    var level = segmentList.indexOf(segment);

	    segmentAdd.unsetDisabled(oldValue);
	    segmentList.forEach(function (el) {
	      return el.unsetDisabled(oldValue);
	    });

	    if (value || value === 0) {
	      segmentAdd.setDisabled(value);
	      segmentList.forEach(function (el, l) {
	        if (l !== level) {
	          el.setDisabled(value);
	        }
	      });
	      (0, _update2.default)({ segment: { value: value, level: level + 1 } });
	    } else {
	      if (statParams.segments.length) {
	        segmentAdd.style.display = '';
	      } else {
	        segmentAdd.style.display = 'none';
	      }

	      segment.removeEventListener('change', segmentChange);
	      (0, _update2.default)({ segment: { level: level + 1 } });
	      segmentList.splice(level, 1);
	      segment.parentNode.removeChild(segment);
	    }
	  };

	  var segmentClone = function segmentClone(value) {
	    segmentAdd.updateValue();
	    segmentAdd.setDisabled(value);
	    segmentList.forEach(function (el) {
	      return el.setDisabled(value);
	    });

	    var segment = segmentAdd.cloneNode(true);
	    segment.classList.remove('is-open', 'is-add', 'js-stat-addsegment');
	    segmentAdd.parentNode.insertBefore(segment, segmentAdd);
	    (0, _listEvent2.default)(segment);
	    segment.updateValue({ value: value, is_clear: true });
	    segment.addEventListener('change', segmentChange);
	    segmentList.push(segment);

	    if (statParams.segments.length && segmentList.length < 3) {
	      segmentAdd.style.display = '';
	    } else {
	      segmentAdd.style.display = 'none';
	    }
	  };

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

	        (0, _update2.default)({ segment: { value: value, level: 0 } });
	        btn.classList.add('is-active');

	        if (statParams.segments.length && segmentList.length < 3) {
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

	      segmentClone(segmentAdd.value);
	      (0, _update2.default)({ segment: { value: value, level: segmentList.length } });
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

	  var resetControls = function resetControls() {
	    [].concat(_toConsumableArray(segmentBtns)).forEach(function (btn) {
	      if (statParams.segments[0] === btn.dataset.value) {
	        btn.classList.add('is-active');
	      } else {
	        btn.classList.remove('is-active');
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
	      segmentList.forEach(function (segment, i) {
	        segment.removeEventListener('change', segmentChange);
	        segment.parentNode.removeChild(segment);
	      });
	      segmentList = [];
	      statParams.segments.forEach(function (value, i) {
	        if (i) {
	          segmentClone(value);
	        }
	      });
	      if (statParams.segments.length && segmentList.length < 3) {
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
	  };

	  resetControls();
	  stat.addEventListener('backurl', resetControls);
	};

	var _listEvent = __webpack_require__(16);

	var _listEvent2 = _interopRequireDefault(_listEvent);

	var _nav = __webpack_require__(21);

	var _nav2 = _interopRequireDefault(_nav);

	var _table = __webpack_require__(22);

	var _table2 = _interopRequireDefault(_table);

	var _graph = __webpack_require__(36);

	var _graph2 = _interopRequireDefault(_graph);

	var _init = __webpack_require__(39);

	var _init2 = _interopRequireDefault(_init);

	var _update = __webpack_require__(48);

	var _update2 = _interopRequireDefault(_update);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 21 */
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
	        var value = parseInt(item.innerText, 10);
	        [].concat(_toConsumableArray(itemsCount)).forEach(function (el) {
	          return el.classList.remove('is-select');
	        });
	        item.classList.add('is-select');
	        close();
	        labelCount.innerText = value;
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

	        label.innerText = start + '-' + end + ' of ' + nav.value.total;

	        if (nav.value.total > nav.value.length) {
	          controls.style.display = '';
	        } else {
	          controls.style.display = 'none';
	        }
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
	        labelCount.innerText = nav.value.length;

	        [].concat(_toConsumableArray(itemsCount)).forEach(function (item) {
	          if (String(nav.value.length) === item.innerText) {
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(fetch) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var authKey = 'mkj-l123k-kFWSdl90d';
	  var allFields = 0;

	  var stat = document.querySelector('.js-stat');
	  var navControl = document.querySelector('.js-stat-nav');
	  var url = window.might.url + '/clicks/grid';
	  var headers = new Headers();
	  headers.append('Content-Type', 'application/x-www-form-urlencoded');

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
	    data.auth_key = authKey;
	    data.all_fields = allFields;
	    data.draw = params.draw;
	    if (params.level === 1 || !params.is_tree) {
	      data.start = (params.page - 1) * params.length;
	      data.length = params.length;
	    } else {
	      data.start = 0;
	      data.length = 50;
	    }
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
	    if (params.is_tree) {
	      data.group = params.segments[params.level - 1];
	    } else {
	      data.group = params.segments.join(',');
	    }
	    data.filter = JSON.stringify(params.filter);

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

	  var options = {
	    method: 'post',
	    mode: 'cors',
	    headers: headers
	  };

	  stat.addEventListener('drawtable', function () {
	    var obj = getFormData();
	    var params = window.might.stat.params;

	    if (obj) {
	      options.body = _qs2.default.stringify(obj.form_data);

	      fetch(url, options).then(function (response) {
	        return response.json();
	      }).then(function (result) {
	        if (result.draw !== params.draw + 1) {
	          return;
	        }

	        params.draw = result.draw;
	        obj.result = result;

	        if (obj.level === 1) {
	          var yPosNav = navControl.getBoundingClientRect().top;
	          var xScrollWindow = window.scrollX;
	          var visibleNav = yPosNav < window.innerHeight;

	          (0, _tableEvent2.default)(_tableRender2.default.render(obj));

	          if (params.total !== parseInt(result.recordsTotal, 10)) {
	            params.total = parseInt(result.recordsTotal, 10);
	            navControl.setValue({
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

	          params.filter_graph = {};
	          params.filter_graph[obj.field] = [];

	          if (result.data && Array.isArray(result.data)) {
	            result.data.forEach(function (record) {
	              if (record[obj.field]) {
	                params.filter_graph[obj.field].push(record[obj.field]);
	              }
	            });
	          }

	          stat.triggerEvent('drawgraph');
	        } else {
	          _tableRender2.default.renderRow(obj);
	        }
	      });
	    }
	  });
	};

	var _qs = __webpack_require__(29);

	var _qs2 = _interopRequireDefault(_qs);

	var _dateformat = __webpack_require__(18);

	var _dateformat2 = _interopRequireDefault(_dateformat);

	var _tableRender = __webpack_require__(34);

	var _tableRender2 = _interopRequireDefault(_tableRender);

	var _tableEvent = __webpack_require__(35);

	var _tableEvent2 = _interopRequireDefault(_tableEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23)))

/***/ },
/* 23 */
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24), (function() { return this; }())))

/***/ },
/* 24 */
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
	        var vertx = __webpack_require__(27);
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
	    if ("function" === 'function' && __webpack_require__(28)['amd']) {
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25), (function() { return this; }()), __webpack_require__(26)(module)))

/***/ },
/* 25 */,
/* 26 */
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
/* 27 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var columnsList = {
	  campaign_id: 'Campaign',
	  country: 'Country',
	  browser: 'Browser',
	  browser_language: 'Browser language',
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
	  label: 'Label'
	};

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

	  if (txt) el.innerHTML = txt;
	  return el;
	};

	var columns = void 0;

	var renderRows = function renderRows(tr, record, response) {
	  if (response.is_tree) {
	    tr.level = response.level;
	    tr.filter = response.filter || [];
	    tr.filter.push({ field: response.field, value: record[response.field] });
	  }

	  columns.forEach(function (key, j) {
	    var td = void 0;
	    var name = void 0;
	    var k = j === 0 ? response.field : key;

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
	        name = '-';
	      }
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

	      var span = createNode('span', null, name);
	      span.classList.add('is-clickable');
	      main.appendChild(span);
	    } else {
	      td = createNode('td');

	      var _span = createNode('span', null, name);
	      td.appendChild(_span);
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

	          var keys = {};

	          data.forEach(function (record) {
	            if ((typeof record === 'undefined' ? 'undefined' : _typeof(record)) === 'object' && !Array.isArray(record)) {
	              Object.keys(record).forEach(function (k) {
	                keys[k] = true;
	              });
	            }
	          });

	          columns = Object.keys(keys);

	          var thead = createNode('tr');
	          table.appendChild(thead);

	          columns.forEach(function (key) {
	            var th = createNode('th', null, columnsList[key] || key);
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

	                  var main = createNode('div', ['is-main']);
	                  td.appendChild(main);

	                  var span = createNode('span', null, '&nbsp;');
	                  main.appendChild(span);
	                } else {
	                  td = createNode('td', null, sum.hasOwnProperty(key) ? sum[key] : '-');
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
/* 35 */
/***/ function(module, exports) {

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

	    if (!swtch) {
	      return;
	    }

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

	      var params = window.might.stat.params;
	      params.draw++;
	      params.level = parseInt(level, 10) + 1;
	      params.filter = filter;
	      params.current = elements.current;
	      stat.triggerEvent('drawtable');
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

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(fetch) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var authKey = 'mkj-l123k-kFWSdl90d';
	  var allFields = 0;

	  var stat = document.querySelector('.js-stat');
	  var statGraph = stat.querySelector('.js-stat-graph');
	  var url = window.might.url + '/graph/data';
	  var headers = new Headers();
	  headers.append('Content-Type', 'application/x-www-form-urlencoded');

	  if (!statGraph) {
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
	    data.auth_key = authKey;
	    data.all_fields = allFields;
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
	    data.filter = JSON.stringify(params.filter);
	    data.filter_graph = params.filter_graph;

	    return data;
	  };

	  var options = {
	    method: 'post',
	    mode: 'cors',
	    headers: headers
	  };

	  stat.addEventListener('drawgraph', function () {
	    var params = window.might.stat.params;

	    if (!params.show_graph) {
	      statGraph.style.display = 'none';
	      return;
	    }

	    var obj = getFormData();

	    if (obj) {
	      options.body = _qs2.default.stringify(obj);

	      fetch(url, options).then(function (response) {
	        return response.json();
	      }).then(function (result) {
	        (0, _graphRender2.default)(result);
	      });
	    }
	  });
	};

	var _qs = __webpack_require__(29);

	var _qs2 = _interopRequireDefault(_qs);

	var _dateformat = __webpack_require__(18);

	var _dateformat2 = _interopRequireDefault(_dateformat);

	var _graphRender = __webpack_require__(37);

	var _graphRender2 = _interopRequireDefault(_graphRender);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23)))

/***/ },
/* 37 */
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

	  if (!statGraph || !canvas) {
	    return;
	  }

	  statGraph.style.display = '';
	  canvas.innerHTML = '';

	  var colors = res.colors || ['#ad7eea', '#41c9f2', '#1be5a0', '#ec2c4c', '#f5d817'];
	  var series = [];
	  var categories = [];

	  (result.names || []).forEach(function (name, i) {
	    if (result.values[i] && Array.isArray(result.values[i])) {
	      series[i] = {
	        name: name,
	        data: []
	      };

	      if (result.start && result.step) {
	        result.values[i].forEach(function (value, j) {
	          series[i].data[j] = [+new Date(result.step * j + result.start), value];
	        });
	      }
	    }
	  });

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
	          symbol: 'circle'
	        }
	      }
	    },

	    colors: colors,
	    series: series
	  });
	};

	var _dateformat = __webpack_require__(18);

	var _dateformat2 = _interopRequireDefault(_dateformat);

	var _highcharts = __webpack_require__(38);

	var _highcharts2 = _interopRequireDefault(_highcharts);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 38 */,
/* 39 */
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
	    order: false,

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

	    segments: [],
	    level: 1,
	    filter: [],
	    filters_stock: [],
	    current: null,
	    value: null,
	    filter_graph: {}
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
	    params.segments = query.seg || [];
	    params.is_tree = query.hasOwnProperty('it') ? !!parseInt(query.it, 10) : true;
	    params.show_graph = !!parseInt(query.sg, 10);
	    params.filters_stock = query.fs || [];
	  };

	  var pushHistroy = function pushHistroy() {
	    var query = {};

	    if (params.length !== 25) {
	      query.l = params.length;
	    }

	    if (params.page !== 1) {
	      query.p = params.page;
	    }

	    query.seg = params.segments;

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

	    history.push({
	      pathname: '/',
	      search: _qs2.default.stringify(query)
	    });
	  };

	  history.listen(function (loc, action) {
	    if (action === 'POP') {
	      updateTableParams(loc);
	      params.draw++;
	      params.level = 1;
	      params.filter = [];
	      params.current = null;
	      params.value = null;

	      stat.triggerEvent('backurl');
	      stat.triggerEvent('drawtable');
	    }
	  });

	  stat.addEventListener('newurl', pushHistroy);

	  updateTableParams(location);
	  stat.triggerEvent('drawtable');
	};

	var _qs = __webpack_require__(29);

	var _qs2 = _interopRequireDefault(_qs);

	var _dateformat = __webpack_require__(18);

	var _dateformat2 = _interopRequireDefault(_dateformat);

	var _createBrowserHistory = __webpack_require__(40);

	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (obj) {
	  var params = window.might.stat.params;

	  var isUpdate = false;
	  var isUpdateTable = false;
	  var isUpdateGraph = false;
	  var isUpdateNav = false;

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

	        case 'show_graph':
	          if (params.show_graph !== !!obj.show_graph) {
	            params.show_graph = !!obj.show_graph;
	            isUpdateGraph = true;
	          }
	          break;

	        case 'is_tree':
	          if (params.is_tree !== !!obj.is_tree) {
	            params.is_tree = !!obj.is_tree;
	            isUpdateTable = true;
	          }
	          break;

	        case 'page':
	          if (params.page !== obj.page) {
	            params.page = obj.page;
	            params.start = (params.page - 1) * params.length;
	            isUpdateNav = true;
	          }
	          break;

	        case 'length':
	          if (params.length !== obj.length) {
	            params.length = obj.length;
	            params.start = (params.page - 1) * params.length;
	            isUpdateNav = true;
	          }
	          break;

	        default:
	          break;
	      }
	    }
	  }

	  if (isUpdate || isUpdateTable) {
	    params.draw++;
	    params.page = 1;
	    params.start = 0;
	    params.filter = [];
	    params.level = 1;
	    params.current = null;
	    params.value = null;
	  } else if (isUpdateNav) {
	    params.draw++;
	    stat.triggerEvent('newurl');
	    stat.triggerEvent('drawtable');
	  }

	  if (isUpdate) {
	    stat.triggerEvent('newurl');
	    stat.triggerEvent('drawtable');
	  } else if (isUpdateGraph) {
	    stat.triggerEvent('newurl');
	    stat.triggerEvent('drawgraph');
	  } else if (isUpdateTable) {
	    stat.triggerEvent('newurl');
	    stat.triggerEvent('drawtable');
	  }
	};

	var stat = document.querySelector('.js-stat');

	var regTime = new RegExp(/^([0,1][0-9]|2[0-3]):[0-5][0-9]$/);
	var regDate = new RegExp(/\d{4}-(0[1-9]|1[0-2])-([0-1][0-9]|3[0-1])/, 'g');

/***/ }
]);
//# sourceMappingURL=application.js.map