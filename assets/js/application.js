webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	var _stat = __webpack_require__(13);

	var _stat2 = _interopRequireDefault(_stat);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

	(0, _stat2.default)();

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
	  var stat = document.querySelector('.js-stat');

	  if (!stat) {
	    return;
	  }

	  var setList = (0, _list2.default)();
	  var statEvent = (0, _statEvent2.default)();

	  var statParams = might.stat.params;
	  var statConfig = might.stat.config;

	  (0, _time2.default)();
	  (0, _calendar2.default)();
	  (0, _postback2.default)();
	  (0, _nav2.default)();

	  /* datetime */

	  var datetime = stat.querySelector('.js-stat-datetime');

	  if (datetime) {
	    datetime.addEventListener('change', function (event) {
	      var value = datetime.value;

	      statEvent.setTable({
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
	        end_time: value.end_time
	      });
	    });
	  }

	  /* segments */

	  var mainSegmentBtns = stat.querySelectorAll('.js-stat-main-segment');
	  var segmentAdd = stat.querySelector('.js-stat-addsegment');
	  var segmentList = [];

	  var segmentChange = function segmentChange(event) {
	    var segment = event.target;
	    var value = segment.value;
	    var oldValue = segment.oldValue;
	    var level = segmentList.indexOf(segment);

	    segmentList.forEach(function (el) {
	      return el.unsetDisabled(oldValue);
	    });
	    segmentAdd.unsetDisabled(oldValue);

	    if (value || value === 0) {
	      segmentList.forEach(function (el, l) {
	        if (l !== level) {
	          el.setDisabled(value);
	        }
	      });
	      segmentAdd.setDisabled(value);
	      statEvent.setTable({ segment: { value: value, level: level } });
	    } else {
	      if (statConfig.main_segment) {
	        segmentAdd.style.display = '';
	      } else {
	        segmentAdd.style.display = 'none';
	      }

	      segment.removeEventListener('change', segmentChange);
	      statEvent.setTable({ segment: { level: level } });
	      segmentList.splice(level, 1);
	      segment.parentNode.removeChild(segment);
	    }
	  };

	  var segmentClone = function segmentClone(value) {
	    var segment = segmentAdd.cloneNode(true);

	    segment.classList.remove('is-open', 'is-add', 'js-stat-addsegment');
	    segment.value = null;
	    segmentAdd.parentNode.insertBefore(segment, segmentAdd);
	    setList(segment);
	    segmentList.forEach(function (el) {
	      return el.setDisabled(value);
	    });
	    segmentAdd.setDisabled(value);
	    segmentList.push(segment);
	    segment.updateValue({ value: value, is_clear: true });
	    segment.addEventListener('change', segmentChange);

	    if (statConfig.main_segment && segmentList.length < 3) {
	      segmentAdd.style.display = '';
	    } else {
	      segmentAdd.style.display = 'none';
	    }
	  };

	  [].concat(_toConsumableArray(mainSegmentBtns)).forEach(function (mainSegmentBtn) {
	    mainSegmentBtn.addEventListener('click', function () {
	      var value = mainSegmentBtn.dataset.value;

	      if (value) {
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	          for (var _iterator = mainSegmentBtns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var el = _step.value;

	            el.classList.remove('is-active');
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

	        statEvent.setTable({ main_segment: value });
	        mainSegmentBtn.classList.add('is-active');

	        if (segmentList.length < 3) {
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
	      segmentAdd.updateValue();
	      statEvent.setTable({ segment: { value: value, level: segmentList.length - 1 } });
	    });
	  }

	  /* graph */

	  var graphBtn = stat.querySelector('.js-stat-show-graph');

	  if (graphBtn) {
	    graphBtn.addEventListener('click', function () {
	      if (statConfig.show_graph) {
	        graphBtn.classList.remove('is-active');
	        statEvent.setTable({ show_graph: false });
	      } else {
	        graphBtn.classList.add('is-active');
	        statEvent.setTable({ show_graph: true });
	      }
	    });
	  }

	  /* tree */

	  var treeBtn = stat.querySelector('.js-stat-is-tree');

	  if (treeBtn) {
	    treeBtn.addEventListener('click', function () {
	      if (statConfig.is_tree) {
	        treeBtn.classList.remove('is-active');
	        statEvent.setTable({ is_tree: false });
	      } else {
	        treeBtn.classList.add('is-active');
	        statEvent.setTable({ is_tree: true });
	      }
	    });
	  }

	  /* postback */

	  var postbackControl = stat.querySelector('.js-stat-postback');

	  if (postbackControl) {
	    postbackControl.addEventListener('change', function () {
	      statEvent.setTable(postbackControl.value);
	    });
	  }

	  /* set all controls */

	  var setAllControls = function setAllControls() {
	    [].concat(_toConsumableArray(mainSegmentBtns)).forEach(function (mainSegmentBtn) {
	      if (statConfig.main_segment === mainSegmentBtn.dataset.value) {
	        mainSegmentBtn.classList.add('is-active');
	      } else {
	        mainSegmentBtn.classList.remove('is-active');
	      }
	    });

	    if (datetime) {
	      var datetimeFrom = statConfig.date_from;
	      var datetimeTo = statConfig.date_to;

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
	        end_time: statParams.end_time
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
	      statConfig.segments.forEach(function (value, i) {
	        return segmentClone(value);
	      });
	      if (statConfig.main_segment && segmentList.length < 3) {
	        segmentAdd.style.display = '';
	      } else {
	        segmentAdd.style.display = 'none';
	      }
	    }

	    if (graphBtn) {
	      if (statConfig.show_graph) {
	        graphBtn.classList.add('is-active');
	      } else {
	        graphBtn.classList.remove('is-active');
	      }
	    }

	    if (treeBtn) {
	      if (statConfig.is_tree) {
	        treeBtn.classList.add('is-active');
	      } else {
	        treeBtn.classList.remove('is-active');
	      }
	    }

	    if (postbackControl) {
	      postbackControl.updateValue({
	        postback_date: statParams.postback_date,
	        currency: statParams.currency
	      });
	    }
	  };

	  setAllControls();
	  stat.addEventListener('backurl', setAllControls);
	};

	var _dateformat = __webpack_require__(14);

	var _dateformat2 = _interopRequireDefault(_dateformat);

	var _calendar = __webpack_require__(15);

	var _calendar2 = _interopRequireDefault(_calendar);

	var _list = __webpack_require__(17);

	var _list2 = _interopRequireDefault(_list);

	var _time = __webpack_require__(18);

	var _time2 = _interopRequireDefault(_time);

	var _nav = __webpack_require__(19);

	var _nav2 = _interopRequireDefault(_nav);

	var _postback = __webpack_require__(20);

	var _postback2 = _interopRequireDefault(_postback);

	var _statEvent = __webpack_require__(22);

	var _statEvent2 = _interopRequireDefault(_statEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 14 */,
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  [].concat(_toConsumableArray(document.querySelectorAll('.js-calendar'))).forEach(function (control) {
	    var calendarPopup = control.querySelector('.js-calendar-popup');

	    if (calendarPopup) {
	      (0, _calendarRender2.default)(calendarPopup, control);
	    }
	  });
	};

	var _calendarRender = __webpack_require__(16);

	var _calendarRender2 = _interopRequireDefault(_calendarRender);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = function (calendar, control) {
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
	      end_time: value.end_time
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
	      monthSelect.setValue(boxes[b].current.month);
	      yearSelect.setValue(boxes[b].current.year);
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
	    end_time: '23:59'
	  };

	  eventBoxes('from');
	  eventBoxes('to');

	  setLabelControl();

	  control.updateValue = updateValue;
	  control.setValue = setValue;
	};

	var _dateformat = __webpack_require__(14);

	var _dateformat2 = _interopRequireDefault(_dateformat);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = function () {
	  var setList = function setList(list) {
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
	        if (sel === -1 && value === (item.dataset.value || item.innerText)) {
	          sel = i;
	        }
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

	  [].concat(_toConsumableArray(document.querySelectorAll('.js-list'))).forEach(setList);

	  return setList;
	};

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 18 */
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

	      if (!/\s/.test(char)) {
	        event.preventDefault();
	      }

	      var key = '0123456789'.indexOf(char);

	      if (key !== -1) {
	        var value = event.target.value;
	        var chunks = value.split(':');
	        var newChunk = void 0;

	        if (range === 1) {
	          newChunk = value[1] + '' + key;

	          if (parseInt(newChunk, 10) < 24) {
	            chunks[0] = newChunk;
	          } else {
	            chunks[0] = '0' + key;
	          }

	          if (parseInt(chunks[0], 10) > 2) {
	            range = 2;
	          }
	        } else {
	          newChunk = value[4] + '' + key;

	          if (parseInt(newChunk, 10) < 60) {
	            chunks[1] = newChunk;
	          } else {
	            chunks[1] = '0' + key;
	          }
	        }

	        input.value = chunks.join(':');

	        var ev = document.createEvent('HTMLEvents');
	        ev.initEvent('change', false, true);
	        input.dispatchEvent(ev);

	        selectRange();
	      }
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
	        case 37:
	          event.preventDefault();
	          range = 1;
	          selectRange();
	          break;
	        case 38:
	          event.preventDefault();
	          break;
	        case 39:
	          event.preventDefault();
	          range = 2;
	          selectRange();
	          break;
	        case 40:
	          event.preventDefault();
	          break;
	        default:
	          keyDown(event);
	      }
	    });
	  });
	};

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  [].concat(_toConsumableArray(document.querySelectorAll('.js-nav'))).forEach(function (nav) {
	    var body = document.body;

	    var rows = nav.querySelector('.js-nav-rows');
	    var label = nav.querySelector('.js-nav-rows-label');
	    var items = nav.querySelectorAll('.js-nav-rows-item');

	    var clickWindow = function clickWindow(event) {
	      var target = event.target;

	      for (; target !== body;) {
	        if (target === rows) {
	          return;
	        }

	        target = target.parentNode;
	      }

	      rows.classList.remove('is-open');
	    };

	    var open = function open() {
	      rows.classList.add('is-open');
	      window.addEventListener('click', clickWindow);
	    };

	    var close = function close() {
	      rows.classList.remove('is-open');
	      window.removeEventListener('click', clickWindow);
	    };

	    var setRows = function setRows(sel) {
	      var item = items[sel];
	      var value = void 0;

	      if (item) {
	        value = item.innerHTML;
	      } else {
	        return;
	      }

	      if (rows.value === value) {
	        return;
	      }

	      label.innerText = value;
	      rows.value = value;

	      [].concat(_toConsumableArray(items)).forEach(function (el) {
	        return el.classList.remove('is-select');
	      });

	      item.classList.add('is-select');

	      rows.triggerEvent('change');
	    };

	    rows.setValue = function (v) {
	      var sel = -1;
	      var val = String(v);

	      [].concat(_toConsumableArray(items)).forEach(function (item) {
	        if (sel === -1 && val === item.innerText) {
	          sel = i;
	        }
	      });

	      setRows(sel);
	    };

	    label.addEventListener('click', function () {
	      if (rows.classList.contains('is-open')) {
	        close();
	      } else {
	        open();
	      }
	    });

	    [].concat(_toConsumableArray(items)).forEach(function (item, i) {
	      item.addEventListener('click', function () {
	        setRows(i);
	        close();
	      });

	      if (item.classList.contains('.is-select')) {
	        setRows(i);
	      }
	    });

	    if (!label.innerText) {
	      setRows(0);
	    }
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
	  [].concat(_toConsumableArray(document.querySelectorAll('.js-postback'))).forEach(function (control) {
	    var postbackPopup = control.querySelector('.js-postback-popup');

	    if (postbackPopup) {
	      (0, _postbackRender2.default)(postbackPopup, control);
	    }
	  });
	};

	var _postbackRender = __webpack_require__(21);

	var _postbackRender2 = _interopRequireDefault(_postbackRender);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (postback, control) {
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
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var history = (0, _createBrowserHistory2.default)();
	  var location = history.location;

	  var stat = document.querySelector('.js-stat');
	  var might = window.might;
	  var currentDate = might.current_datetime;
	  var defaultTimezone = '+03:00|Europe/Moscow';

	  might.stat = {
	    params: {
	      auth_key: 'mkj-l123k-kFWSdl90d',
	      all_fields: 0,

	      draw: 0,
	      order: false,
	      start: 0,
	      length: 25,
	      search: {
	        value: '',
	        regex: false
	      },
	      segments: '',
	      currency: 'USD',
	      currency_type: 'action',
	      currency_date: false,
	      timezone: defaultTimezone,
	      start_time: '00:00',
	      end_time: '23:59',
	      postback_date: false,
	      filter: []
	    },
	    config: {
	      date_from: {
	        year: currentDate.getFullYear(),
	        month: currentDate.getMonth(),
	        date: currentDate.getDate()
	      },
	      date_to: {
	        year: currentDate.getFullYear(),
	        month: currentDate.getMonth(),
	        date: currentDate.getDate()
	      },
	      is_tree: true,
	      show_graph: false,
	      main_segment: null,
	      segments: []
	    }
	  };

	  var statParams = might.stat.params;
	  var statConfig = might.stat.config;

	  var table = (0, _table2.default)();
	  var chart = (0, _chart2.default)();

	  var regTime = new RegExp(/^([0,1][0-9]|2[0-3]):[0-5][0-9]$/);
	  var regDate = new RegExp(/\d{4}-(0[1-9]|1[0-2])-([0-1][0-9]|3[0-1])/, 'g');

	  var updateTableParams = function updateTableParams(loc) {
	    var search = loc.search.slice(1);
	    var obj = _qs2.default.parse(search);

	    statConfig.main_segment = obj.main_segment || null;

	    if (statConfig.main_segment) {
	      statConfig.segments = obj.segments || [];
	    } else {
	      statConfig.segments = [];
	    }

	    var datetime = (obj.date_filter || '').match(regDate);

	    if (datetime && datetime[0]) {
	      var from = datetime[0].split('-');
	      statConfig.date_from.year = parseInt(from[0], 10) || currentDate.getFullYear();
	      statConfig.date_from.month = parseInt(from[1], 10) - 1 || currentDate.getMonth();
	      statConfig.date_from.date = parseInt(from[2], 10) || currentDate.getDate();
	    } else {
	      statConfig.date_from.year = currentDate.getFullYear();
	      statConfig.date_from.month = currentDate.getMonth();
	      statConfig.date_from.date = currentDate.getDate();
	    }

	    if (datetime && datetime[1]) {
	      var to = datetime[1].split('-');
	      statConfig.date_to.year = parseInt(to[0], 10) || currentDate.getFullYear();
	      statConfig.date_to.month = parseInt(to[1], 10) - 1 || currentDate.getMonth();
	      statConfig.date_to.date = parseInt(to[2], 10) || currentDate.getDate();
	    } else {
	      statConfig.date_to.year = currentDate.getFullYear();
	      statConfig.date_to.month = currentDate.getMonth();
	      statConfig.date_to.date = currentDate.getDate();
	    }

	    statParams.start_time = obj.start_time || '00:00';
	    statParams.end_time = obj.end_time || '23:59';
	    statParams.postback_date = !!obj.postback_date;
	    statConfig.is_tree = obj.hasOwnProperty('is_tree') ? !!obj.is_tree : true;
	    statConfig.show_graph = obj.hasOwnProperty('show_graph') ? !!obj.show_graph : false;

	    if (obj.currency) {
	      statParams.currency = obj.currency;
	    } else {
	      statParams.currency = 'USD';
	    }

	    statParams.timezone = obj.timezone || defaultTimezone;
	    statParams.start = obj.start || 0;
	    statParams.length = obj.length || 25;
	  };

	  updateTableParams(location);
	  chart.render();
	  table.render();

	  var setDateFilter = function setDateFilter() {
	    var from = new Date(statConfig.date_from.year, statConfig.date_from.month, statConfig.date_from.date);
	    var to = new Date(statConfig.date_to.year, statConfig.date_to.month, statConfig.date_to.date);
	    statParams.date_filter = (0, _dateformat2.default)(from, 'yyyy-mm-dd') + ' - ' + (0, _dateformat2.default)(to, 'yyyy-mm-dd');
	  };

	  setDateFilter();

	  var pushHistory = function pushHistory() {
	    var obj = {};

	    obj.main_segment = statConfig.main_segment;
	    obj.segments = statConfig.segments;
	    obj.date_filter = statParams.date_filter;
	    obj.start_time = statParams.start_time;
	    obj.end_time = statParams.end_time;

	    if (statParams.postback_date) {
	      obj.postback_date = 1;
	    }

	    if (!statConfig.is_tree) {
	      obj.is_tree = 0;
	    }

	    if (statConfig.show_graph) {
	      obj.show_graph = 1;
	    }

	    if (statParams.currency !== 'USD') {
	      obj.currency = statParams.currency;
	    }

	    obj.timezone = statParams.timezone;

	    if (statParams.start !== 0) {
	      obj.start = statParams.start;
	    }

	    if (statParams.length !== 25) {
	      obj.length = statParams.length;
	    }

	    history.push({
	      pathname: '/',
	      search: _qs2.default.stringify(obj)
	    });
	  };

	  history.listen(function (loc, action) {
	    if (action === 'POP') {
	      statParams.draw++;
	      updateTableParams(loc);
	      stat.triggerEvent('backurl');
	    }
	  });

	  return {
	    setTable: function setTable(obj) {
	      var isUpdate = false;
	      var isUpdateTable = false;
	      var isUpdateGraph = false;

	      for (var param in obj) {
	        if (obj.hasOwnProperty(param)) {
	          switch (param) {
	            case 'postback_date':
	              if (statParams.postback_date !== !!obj.postback_date) {
	                statParams.postback_date = !!obj.postback_date;
	                isUpdate = true;
	              }
	              break;

	            case 'currency':
	              if (statParams.currency !== obj.currency.toLowerCase()) {
	                statParams.currency = obj.currency.toLowerCase();
	                isUpdate = true;
	              }
	              break;

	            case 'main_segment':
	              if (statConfig.main_segment !== obj.main_segment) {
	                statConfig.main_segment = obj.main_segment;
	                isUpdate = true;
	              }
	              break;

	            case 'segment':
	              if (obj.segment.hasOwnProperty('level')) {
	                if (obj.segment.hasOwnProperty('value')) {
	                  if (statConfig.segments[obj.segment.level] !== obj.segment.value) {
	                    statConfig.segments[obj.segment.level] = obj.segment.value;
	                    isUpdate = true;
	                  }
	                } else {
	                  if (statConfig.segments.splice(obj.segment.level, 1).length === 1) {
	                    isUpdate = true;
	                  }
	                }
	              }
	              break;

	            case 'date_from':
	              var from = statConfig.date_from;
	              var newFrom = obj.date_from;
	              if (from.year !== newFrom.year || from.month !== newFrom.month || from.date !== newFrom.date) {
	                from.year = newFrom.year;
	                from.month = newFrom.month;
	                from.date = newFrom.date;
	                setDateFilter();
	                isUpdate = true;
	              }
	              break;

	            case 'date_to':
	              var to = statConfig.date_to;
	              var newTo = obj.date_to;
	              if (to.year !== newTo.year || to.month !== newTo.month || to.date !== newTo.date) {
	                to.year = newTo.year;
	                to.month = newTo.month;
	                to.date = newTo.date;
	                setDateFilter();
	                isUpdate = true;
	              }
	              break;

	            case 'start_time':
	              if (regTime.test(obj.start_time) && statParams.start_time !== obj.start_time) {
	                statParams.start_time = obj.start_time;
	                isUpdate = true;
	              }
	              break;

	            case 'end_time':
	              if (regTime.test(obj.end_time) && statParams.end_time !== obj.end_time) {
	                statParams.end_time = obj.end_time;
	                isUpdate = true;
	              }
	              break;

	            case 'show_graph':
	              if (statConfig.show_graph !== !!obj.show_graph) {
	                statConfig.show_graph = !!obj.show_graph;
	                isUpdateGraph = true;
	              }
	              break;

	            case 'is_tree':
	              if (statConfig.is_tree !== !!obj.is_tree) {
	                statConfig.is_tree = !!obj.is_tree;
	                isUpdateTable = true;
	              }
	              break;

	            default:
	              break;
	          }
	        }
	      }

	      if (isUpdate) {
	        statParams.draw++;
	        chart.render();
	        table.render();
	        pushHistory();
	      } else if (isUpdateGraph) {
	        chart.render();
	        pushHistory();
	      } else if (isUpdateTable) {
	        table.render();
	        pushHistory();
	      }
	    }
	  };
	};

	var _dateformat = __webpack_require__(14);

	var _dateformat2 = _interopRequireDefault(_dateformat);

	var _createBrowserHistory = __webpack_require__(23);

	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

	var _qs = __webpack_require__(32);

	var _qs2 = _interopRequireDefault(_qs);

	var _timezone = __webpack_require__(37);

	var _timezone2 = _interopRequireDefault(_timezone);

	var _table = __webpack_require__(38);

	var _table2 = _interopRequireDefault(_table);

	var _chart = __webpack_require__(46);

	var _chart2 = _interopRequireDefault(_chart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (table) {
	  var timezones = ['+00:00|Africa/Abidjan', '+00:00|Africa/Accra', '+00:00|Africa/Bamako', '+00:00|Africa/Banjul', '+00:00|Africa/Bissau', '+00:00|Africa/Casablanca', '+00:00|Africa/Conakry', '+00:00|Africa/Dakar', '+00:00|Africa/El Aaiun', '+00:00|Africa/Freetown', '+00:00|Africa/Lome', '+00:00|Africa/Monrovia', '+00:00|Africa/Nouakchott', '+00:00|Africa/Ouagadougou', '+00:00|Africa/Sao Tome', '+01:00|Africa/Algiers', '+01:00|Africa/Bangui', '+01:00|Africa/Brazzaville', '+01:00|Africa/Douala', '+01:00|Africa/Kinshasa', '+01:00|Africa/Lagos', '+01:00|Africa/Libreville', '+01:00|Africa/Luanda', '+01:00|Africa/Malabo', '+01:00|Africa/Ndjamena', '+01:00|Africa/Niamey', '+01:00|Africa/Porto-Novo', '+01:00|Africa/Tunis', '+01:00|Africa/Windhoek', '+02:00|Africa/Blantyre', '+02:00|Africa/Bujumbura', '+02:00|Africa/Cairo', '+02:00|Africa/Ceuta', '+02:00|Africa/Gaborone', '+02:00|Africa/Harare', '+02:00|Africa/Johannesburg', '+02:00|Africa/Kigali', '+02:00|Africa/Lubumbashi', '+02:00|Africa/Lusaka', '+02:00|Africa/Maputo', '+02:00|Africa/Maseru', '+02:00|Africa/Mbabane', '+02:00|Africa/Tripoli', '+03:00|Africa/Addis Ababa', '+03:00|Africa/Asmara', '+03:00|Africa/Dar es Salaam', '+03:00|Africa/Djibouti', '+03:00|Africa/Juba', '+03:00|Africa/Kampala', '+03:00|Africa/Khartoum', '+03:00|Africa/Mogadishu', '+03:00|Africa/Nairobi', '-09:00|America/Adak', '-08:00|America/Anchorage', '-08:00|America/Juneau', '-08:00|America/Metlakatla', '-08:00|America/Nome', '-08:00|America/Sitka', '-08:00|America/Yakutat', '-07:00|America/Creston', '-07:00|America/Dawson', '-07:00|America/Dawson Creek', '-07:00|America/Hermosillo', '-07:00|America/Los Angeles', '-07:00|America/Phoenix', '-07:00|America/Santa Isabel', '-07:00|America/Tijuana', '-07:00|America/Vancouver', '-07:00|America/Whitehorse', '-06:00|America/Belize', '-06:00|America/Boise', '-06:00|America/Cambridge Bay', '-06:00|America/Chihuahua', '-06:00|America/Costa Rica', '-06:00|America/Denver', '-06:00|America/Edmonton', '-06:00|America/El Salvador', '-06:00|America/Guatemala', '-06:00|America/Inuvik', '-06:00|America/Managua', '-06:00|America/Mazatlan', '-06:00|America/Ojinaga', '-06:00|America/Regina', '-06:00|America/Swift Current', '-06:00|America/Tegucigalpa', '-06:00|America/Yellowknife', '-05:00|America/Atikokan', '-05:00|America/Bahia Banderas', '-05:00|America/Bogota', '-05:00|America/Cancun', '-05:00|America/Cayman', '-05:00|America/Chicago', '-05:00|America/Eirunepe', '-05:00|America/Guayaquil', '-05:00|America/Indiana/Knox', '-05:00|America/Indiana/Tell City', '-05:00|America/Jamaica', '-05:00|America/Lima', '-05:00|America/Matamoros', '-05:00|America/Menominee', '-05:00|America/Merida', '-05:00|America/Mexico City', '-05:00|America/Monterrey', '-05:00|America/North Dakota/Beulah', '-05:00|America/North Dakota/Center', '-05:00|America/North Dakota/New Salem', '-05:00|America/Panama', '-05:00|America/Rainy River', '-05:00|America/Rankin Inlet', '-05:00|America/Resolute', '-05:00|America/Rio Branco', '-05:00|America/Winnipeg', '-04:30|America/Caracas', '-04:00|America/Anguilla', '-04:00|America/Antigua', '-04:00|America/Aruba', '-04:00|America/Asuncion', '-04:00|America/Barbados', '-04:00|America/Blanc-Sablon', '-04:00|America/Boa Vista', '-04:00|America/Campo Grande', '-04:00|America/Cuiaba', '-04:00|America/Curacao', '-04:00|America/Detroit', '-04:00|America/Dominica', '-04:00|America/Grand Turk', '-04:00|America/Grenada', '-04:00|America/Guadeloupe', '-04:00|America/Guyana', '-04:00|America/Havana', '-04:00|America/Indiana/Indianapolis', '-04:00|America/Indiana/Marengo', '-04:00|America/Indiana/Petersburg', '-04:00|America/Indiana/Vevay', '-04:00|America/Indiana/Vincennes', '-04:00|America/Indiana/Winamac', '-04:00|America/Iqaluit', '-04:00|America/Kentucky/Louisville', '-04:00|America/Kentucky/Monticello', '-04:00|America/Kralendijk', '-04:00|America/La Paz', '-04:00|America/Lower Princes', '-04:00|America/Manaus', '-04:00|America/Marigot', '-04:00|America/Martinique', '-04:00|America/Montserrat', '-04:00|America/Nassau', '-04:00|America/New York', '-04:00|America/Nipigon', '-04:00|America/Pangnirtung', '-04:00|America/Port-au-Prince', '-04:00|America/Port of Spain', '-04:00|America/Porto Velho', '-04:00|America/Puerto Rico', '-04:00|America/Santiago', '-04:00|America/Santo Domingo', '-04:00|America/St Barthelemy', '-04:00|America/St Kitts', '-04:00|America/St Lucia', '-04:00|America/St Thomas', '-04:00|America/St Vincent', '-04:00|America/Thunder Bay', '-04:00|America/Toronto', '-04:00|America/Tortola', '-03:00|America/Araguaina', '-03:00|America/Argentina/Buenos Aires', '-03:00|America/Argentina/Catamarca', '-03:00|America/Argentina/Cordoba', '-03:00|America/Argentina/Jujuy', '-03:00|America/Argentina/La Rioja', '-03:00|America/Argentina/Mendoza', '-03:00|America/Argentina/Rio Gallegos', '-03:00|America/Argentina/Salta', '-03:00|America/Argentina/San Juan', '-03:00|America/Argentina/San Luis', '-03:00|America/Argentina/Tucuman', '-03:00|America/Argentina/Ushuaia', '-03:00|America/Bahia', '-03:00|America/Belem', '-03:00|America/Cayenne', '-03:00|America/Fortaleza', '-03:00|America/Glace Bay', '-03:00|America/Goose Bay', '-03:00|America/Halifax', '-03:00|America/Maceio', '-03:00|America/Moncton', '-03:00|America/Montevideo', '-03:00|America/Paramaribo', '-03:00|America/Recife', '-03:00|America/Santarem', '-03:00|America/Sao Paulo', '-03:00|America/Thule', '-02:00|America/Godthab', '-02:00|America/Miquelon', '-02:00|America/Noronha', '-02:30|America/St Johns', '+00:00|America/Danmarkshavn', '+00:00|America/Scoresbysund', '-04:00|Antarctica/Palmer', '-03:00|Antarctica/Rothera', '+02:00|Antarctica/Troll', '+03:00|Antarctica/Syowa', '+05:00|Antarctica/Mawson', '+06:00|Antarctica/Vostok', '+07:00|Antarctica/Davis', '+08:00|Antarctica/Casey', '+10:00|Antarctica/DumontDUrville', '+11:00|Antarctica/Macquarie', '+12:00|Antarctica/McMurdo', '+03:00|Asia/Aden', '+03:00|Asia/Amman', '+03:00|Asia/Baghdad', '+03:00|Asia/Bahrain', '+03:00|Asia/Beirut', '+03:00|Asia/Damascus', '+03:00|Asia/Gaza', '+03:00|Asia/Hebron', '+03:00|Asia/Jerusalem', '+03:00|Asia/Kuwait', '+03:00|Asia/Nicosia', '+03:00|Asia/Qatar', '+03:00|Asia/Riyadh', '+04:30|Asia/Kabul', '+04:30|Asia/Tehran', '+04:00|Asia/Dubai', '+04:00|Asia/Muscat', '+04:00|Asia/Tbilisi', '+04:00|Asia/Yerevan', '+05:45|Asia/Kathmandu', '+05:30|Asia/Colombo', '+05:30|Asia/Kolkata', '+05:00|Asia/Aqtau', '+05:00|Asia/Aqtobe', '+05:00|Asia/Ashgabat', '+05:00|Asia/Baku', '+05:00|Asia/Dushanbe', '+05:00|Asia/Karachi', '+05:00|Asia/Oral', '+05:00|Asia/Samarkand', '+05:00|Asia/Tashkent', '+05:00|Asia/Yekaterinburg', '+06:00|Asia/Almaty', '+06:00|Asia/Bishkek', '+06:00|Asia/Dhaka', '+06:00|Asia/Novosibirsk', '+06:00|Asia/Omsk', '+06:00|Asia/Qyzylorda', '+06:00|Asia/Thimphu', '+06:00|Asia/Urumqi', '+06:30|Asia/Rangoon', '+07:00|Asia/Bangkok', '+07:00|Asia/Ho Chi Minh', '+07:00|Asia/Hovd', '+07:00|Asia/Jakarta', '+07:00|Asia/Krasnoyarsk', '+07:00|Asia/Novokuznetsk', '+07:00|Asia/Phnom Penh', '+07:00|Asia/Pontianak', '+07:00|Asia/Vientiane', '+08:00|Asia/Brunei', '+08:00|Asia/Chita', '+08:00|Asia/Choibalsan', '+08:00|Asia/Hong Kong', '+08:00|Asia/Irkutsk', '+08:00|Asia/Kuala Lumpur', '+08:00|Asia/Kuching', '+08:00|Asia/Macau', '+08:00|Asia/Makassar', '+08:00|Asia/Manila', '+08:00|Asia/Shanghai', '+08:00|Asia/Singapore', '+08:00|Asia/Taipei', '+08:00|Asia/Ulaanbaatar', '+09:00|Asia/Dili', '+09:00|Asia/Jayapura', '+09:00|Asia/Khandyga', '+09:00|Asia/Pyongyang', '+09:00|Asia/Seoul', '+09:00|Asia/Tokyo', '+09:00|Asia/Yakutsk', '+10:00|Asia/Magadan', '+10:00|Asia/Sakhalin', '+10:00|Asia/Ust-Nera', '+10:00|Asia/Vladivostok', '+11:00|Asia/Srednekolymsk', '+12:00|Asia/Anadyr', '+12:00|Asia/Kamchatka', '-03:00|Atlantic/Bermuda', '-03:00|Atlantic/Stanley', '-02:00|Atlantic/South Georgia', '-01:00|Atlantic/Cape Verde', '+00:00|Atlantic/Azores', '+00:00|Atlantic/Reykjavik', '+00:00|Atlantic/St Helena', '+01:00|Atlantic/Canary', '+01:00|Atlantic/Faroe', '+01:00|Atlantic/Madeira', '+01:00|Europe/Dublin', '+01:00|Europe/Guernsey', '+01:00|Europe/Isle of Man', '+01:00|Europe/Jersey', '+01:00|Europe/Lisbon', '+01:00|Europe/London', '+02:00|Europe/Amsterdam', '+02:00|Europe/Andorra', '+02:00|Europe/Belgrade', '+02:00|Europe/Berlin', '+02:00|Europe/Bratislava', '+02:00|Europe/Brussels', '+02:00|Europe/Budapest', '+02:00|Europe/Busingen', '+02:00|Europe/Copenhagen', '+02:00|Europe/Gibraltar', '+02:00|Europe/Kaliningrad', '+02:00|Europe/Ljubljana', '+02:00|Europe/Luxembourg', '+02:00|Europe/Madrid', '+02:00|Europe/Malta', '+02:00|Europe/Monaco', '+02:00|Europe/Oslo', '+02:00|Europe/Paris', '+02:00|Europe/Podgorica', '+02:00|Europe/Prague', '+02:00|Europe/Rome', '+02:00|Europe/San Marino', '+02:00|Europe/Sarajevo', '+02:00|Europe/Skopje', '+02:00|Europe/Stockholm', '+02:00|Europe/Tirane', '+02:00|Europe/Vaduz', '+02:00|Europe/Vatican', '+02:00|Europe/Vienna', '+02:00|Europe/Warsaw', '+02:00|Europe/Zagreb', '+02:00|Europe/Zurich', '+03:00|Europe/Athens', '+03:00|Europe/Bucharest', '+03:00|Europe/Chisinau', '+03:00|Europe/Helsinki', '+03:00|Europe/Istanbul', '+03:00|Europe/Kiev', '+03:00|Europe/Mariehamn', '+03:00|Europe/Minsk', '+03:00|Europe/Moscow', '+03:00|Europe/Riga', '+03:00|Europe/Simferopol', '+03:00|Europe/Sofia', '+03:00|Europe/Tallinn', '+03:00|Europe/Uzhgorod', '+03:00|Europe/Vilnius', '+03:00|Europe/Volgograd', '+03:00|Europe/Zaporozhye', '+04:00|Europe/Samara', '+03:00|Indian/Antananarivo', '+03:00|Indian/Comoro', '+03:00|Indian/Mayotte', '+04:00|Indian/Mahe', '+04:00|Indian/Mauritius', '+04:00|Indian/Reunion', '+05:00|Indian/Kerguelen', '+05:00|Indian/Maldives', '+06:30|Indian/Cocos', '+06:00|Indian/Chagos', '+07:00|Indian/Christmas', '-11:00|Pacific/Midway', '-11:00|Pacific/Niue', '-11:00|Pacific/Pago Pago', '-10:00|Pacific/Honolulu', '-10:00|Pacific/Johnston', '-10:00|Pacific/Rarotonga', '-10:00|Pacific/Tahiti', '-09:30|Pacific/Marquesas', '-09:00|Pacific/Gambier', '-08:00|Pacific/Pitcairn', '-06:00|Pacific/Easter', '-06:00|Pacific/Galapagos', '+09:00|Pacific/Palau', '+10:00|Pacific/Chuuk', '+10:00|Pacific/Guam', '+10:00|Pacific/Port Moresby', '+10:00|Pacific/Saipan', '+11:30|Pacific/Norfolk', '+11:00|Pacific/Bougainville', '+11:00|Pacific/Efate', '+11:00|Pacific/Guadalcanal', '+11:00|Pacific/Kosrae', '+11:00|Pacific/Noumea', '+11:00|Pacific/Pohnpei', '+12:00|Pacific/Auckland', '+12:00|Pacific/Fiji', '+12:00|Pacific/Funafuti', '+12:00|Pacific/Kwajalein', '+12:00|Pacific/Majuro', '+12:00|Pacific/Nauru', '+12:00|Pacific/Tarawa', '+12:00|Pacific/Wake', '+12:00|Pacific/Wallis', '+12:45|Pacific/Chatham', '+13:00|Pacific/Apia', '+13:00|Pacific/Enderbury', '+13:00|Pacific/Fakaofo', '+13:00|Pacific/Tongatapu'];

	  return {};
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(fetch) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var url = 'http://148.251.195.78:94/clicks/grid?auth_key=mkj-l123k-kFWSdl90d&all_fields=0';

	  var might = window.might;

	  var statParams = might.stat.params;
	  var statConfig = might.stat.config;

	  return {
	    render: function render() {
	      if (!statConfig.main_segment) {
	        return;
	      }

	      fetch(url, { mode: 'cors', body: statParams }).then(function (response) {
	        return response.json();
	      }).then(function (data) {
	        var table = (0, _tableRender2.default)(data);

	        (0, _tableEvent2.default)(table);
	      });
	    }
	  };
	};

	var _tableRender = __webpack_require__(44);

	var _tableRender2 = _interopRequireDefault(_tableRender);

	var _tableEvent = __webpack_require__(45);

	var _tableEvent2 = _interopRequireDefault(_tableEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(39)))

/***/ },
/* 39 */
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(40), (function() { return this; }())))

/***/ },
/* 40 */
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
	        var vertx = __webpack_require__(42);
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
	    if ("function" === 'function' && __webpack_require__(43)['amd']) {
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24), (function() { return this; }()), __webpack_require__(41)(module)))

/***/ },
/* 41 */
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
/* 42 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = function (obj, cols) {
	  var buf = [];
	  var type = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
	  var columns = cols;

	  if (Array.isArray(obj)) {
	    if (_typeof(obj[0]) === 'object') {
	      (function () {
	        var keys = {};

	        buf.push('<table>', '<thead>', '<tr>');

	        if (!columns) {
	          obj.forEach(function (record) {
	            if ((typeof record === 'undefined' ? 'undefined' : _typeof(record)) === 'object' && !Array.isArray(record)) {
	              Object.keys(record).forEach(function (k) {
	                keys[k] = true;
	              });
	            }
	          });

	          columns = Object.keys(keys);
	        }

	        columns.forEach(function (key) {
	          buf.push('<th>', key, '</th>');
	        });

	        buf.push('</tr>', '</thead>', '<tbody>');

	        obj.forEach(function (record, i) {
	          if ((typeof record === 'undefined' ? 'undefined' : _typeof(record)) === 'object' && !Array.isArray(record)) {
	            buf.push('<tr class="is-level1' + (i % 2 ? ' is-even-row' : '') + '">');

	            columns.forEach(function (key, j) {
	              if (_typeof(record[key]) !== 'object' && !Array.isArray(record[key])) {
	                if (!j) {
	                  buf.push('<td>');
	                  buf.push('<div class="is-main is-positive">');
	                  buf.push('<div class="is-switch"></div>');
	                  buf.push('<input class="is-checkbox" type="checkbox">');
	                  buf.push(record[key]);
	                  buf.push('</div>');
	                  buf.push(' </td>');
	                } else {
	                  buf.push('<td>', record[key], '</td>');
	                }
	              }
	            });

	            buf.push('</tr>');
	          }
	        });

	        buf.push('</tbody></table>');
	      })();
	    }
	  }

	  var table = buf.join('');
	  var div = document.createElement('div');

	  div.className = 'table';
	  div.innerHTML = table;

	  document.querySelector('.js-canvas').innerHTML = '';
	  document.querySelector('.js-canvas').appendChild(div);

	  return div;
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (table) {
	  var trs = table.querySelectorAll('tr');
	  var trsLength = trs.length;
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
	    return el && [].concat(_toConsumableArray(trs)).indexOf(el) || -1;
	  };

	  var getElements = function getElements(element) {
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
	        el.classList.remove('is-show');
	        el.classList.remove('is-open');
	      });
	    } else {
	      elements.current.classList.add('is-open');
	      elements.child.forEach(function (el) {
	        el.classList.add('is-show');
	      });
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
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(fetch) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var url = 'http://148.251.195.78:94/clicks/data?auth_key=mkj-l123k-kFWSdl90d&all_fields=0';

	  var might = window.might;

	  var statParams = might.stat.params;
	  var statConfig = might.stat.config;

	  // Highcharts.chart('statGraph', {
	  //   colors: ['#ad7eea', '#41c9f2', '#1be5a0', '#ec2c4c', '#f5d817'],
	  //   title: {
	  //     text: null
	  //   },
	  //   credits: {
	  //     enabled: false
	  //   },
	  //   xAxis: {
	  //     categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
	  //     tickLength: 0
	  //   },
	  //   yAxis: {
	  //     title: {
	  //       text: null
	  //     },
	  //     plotLines: [{
	  //       value: 0,
	  //       width: 1,
	  //       color: '#808080'
	  //     }]
	  //   },
	  //   legend: {
	  //     enabled: false
	  //   },
	  //   tooltip: {
	  //     shared: true,
	  //     padding: 15,
	  //     borderRadius: 0,
	  //     borderColor: '#3a62c6',
	  //     backgroundColor: '#ffffff',
	  //     style: {
	  //       color: '#54647e',
	  //       fontSize: '14px',
	  //       lineHeight: '20px'
	  //     },
	  //     headerFormat: '<span style="font-weight: bold; font-size: 14px;">{point.key}</span><br/><br/>'
	  //   },
	  //   plotOptions: {
	  //     series: {
	  //       marker: {
	  //         symbol: 'circle'
	  //       }
	  //     }
	  //   },
	  //   series: [{
	  //     name: 'Tokyo',
	  //     data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3]
	  //   }, {
	  //     name: 'New York',
	  //     data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1]
	  //   }, {
	  //     name: 'Berlin',
	  //     data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0]
	  //   }, {
	  //     name: 'London',
	  //     data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3]
	  //   }]
	  // });

	  return {
	    render: function render() {
	      if (!statConfig.main_segment) {
	        return;
	      }

	      fetch(url, { mode: 'cors', body: statParams }).then(function (response) {
	        return response.json();
	      }).then(function (data) {});
	    }
	  };
	};

	var _highcharts = __webpack_require__(47);

	var _highcharts2 = _interopRequireDefault(_highcharts);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(39)))

/***/ }
]);
//# sourceMappingURL=application.js.map