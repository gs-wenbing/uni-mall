"use weex:vue";
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*******************************************************************************!*\
  !*** E:/HBuilder_WorkSpace/uni-mall/main.js?{"page":"pages%2FtabBar%2Fuser"} ***!
  \*******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dcloudio/uni-stat */ 1);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-app-style */ 6);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_tabBar_user_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/tabBar/user.nvue?mpType=page */ 9);

        
        
        
        _pages_tabBar_user_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].mpType = 'page'
        _pages_tabBar_user_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].route = 'pages/tabBar/user'
        _pages_tabBar_user_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].el = '#root'
        new Vue(_pages_tabBar_user_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"])
        

/***/ }),
/* 1 */
/*!*******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(plus, uni) {var _package = __webpack_require__(/*! ../package.json */ 3);function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}

var STAT_VERSION = _package.version;
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800;
var APP_PVER_TIME = 300;
var OPERATING_TIME = 10;

var UUID_KEY = '__DC_STAT_UUID';
var UUID_VALUE = '__DC_UUID_VALUE';

function getUuid() {
  var uuid = '';
  if (getPlatformName() === 'n') {
    try {
      uuid = plus.runtime.getDCloudId();
    } catch (e) {
      uuid = '';
    }
    return uuid;
  }

  try {
    uuid = uni.getStorageSync(UUID_KEY);
  } catch (e) {
    uuid = UUID_VALUE;
  }

  if (!uuid) {
    uuid = Date.now() + '' + Math.floor(Math.random() * 1e7);
    try {
      uni.setStorageSync(UUID_KEY, uuid);
    } catch (e) {
      uni.setStorageSync(UUID_KEY, UUID_VALUE);
    }
  }
  return uuid;
}

var getSgin = function getSgin(statData) {
  var arr = Object.keys(statData);
  var sortArr = arr.sort();
  var sgin = {};
  var sginStr = '';
  for (var i in sortArr) {
    sgin[sortArr[i]] = statData[sortArr[i]];
    sginStr += sortArr[i] + '=' + statData[sortArr[i]] + '&';
  }
  // const options = sginStr.substr(0, sginStr.length - 1)
  // sginStr = sginStr.substr(0, sginStr.length - 1) + '&key=' + STAT_KEY;
  // const si = crypto.createHash('md5').update(sginStr).digest('hex');
  return {
    sign: '',
    options: sginStr.substr(0, sginStr.length - 1) };

};

var getSplicing = function getSplicing(data) {
  var str = '';
  for (var i in data) {
    str += i + '=' + data[i] + '&';
  }
  return str.substr(0, str.length - 1);
};

var getTime = function getTime() {
  return parseInt(new Date().getTime() / 1000);
};

var getPlatformName = function getPlatformName() {
  var platformList = {
    'app-plus': 'n',
    'h5': 'h5',
    'mp-weixin': 'wx',
    'mp-alipay': 'ali',
    'mp-baidu': 'bd',
    'mp-toutiao': 'tt',
    'mp-qq': 'qq' };

  return platformList["app-plus"];
};

var getPackName = function getPackName() {
  var packName = '';
  if (getPlatformName() === 'wx' || getPlatformName() === 'qq') {
    // 兼容微信小程序低版本基础库
    if (uni.canIUse('getAccountInfoSync')) {
      packName = uni.getAccountInfoSync().miniProgram.appId || '';
    }
  }
  return packName;
};

var getVersion = function getVersion() {
  return getPlatformName() === 'n' ? plus.runtime.version : '';
};

var getChannel = function getChannel() {
  var platformName = getPlatformName();
  var channel = '';
  if (platformName === 'n') {
    channel = plus.runtime.channel;
  }
  return channel;
};

var getScene = function getScene(options) {
  var platformName = getPlatformName();
  var scene = '';
  if (options) {
    return options;
  }
  if (platformName === 'wx') {
    scene = uni.getLaunchOptionsSync().scene;
  }
  return scene;
};
var First__Visit__Time__KEY = 'First__Visit__Time';
var Last__Visit__Time__KEY = 'Last__Visit__Time';

var getFirstVisitTime = function getFirstVisitTime() {
  var timeStorge = uni.getStorageSync(First__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = getTime();
    uni.setStorageSync(First__Visit__Time__KEY, time);
    uni.removeStorageSync(Last__Visit__Time__KEY);
  }
  return time;
};

var getLastVisitTime = function getLastVisitTime() {
  var timeStorge = uni.getStorageSync(Last__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = '';
  }
  uni.setStorageSync(Last__Visit__Time__KEY, getTime());
  return time;
};


var PAGE_RESIDENCE_TIME = '__page__residence__time';
var First_Page_residence_time = 0;
var Last_Page_residence_time = 0;


var setPageResidenceTime = function setPageResidenceTime() {
  First_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    uni.setStorageSync(PAGE_RESIDENCE_TIME, getTime());
  }
  return First_Page_residence_time;
};

var getPageResidenceTime = function getPageResidenceTime() {
  Last_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    First_Page_residence_time = uni.getStorageSync(PAGE_RESIDENCE_TIME);
  }
  return Last_Page_residence_time - First_Page_residence_time;
};
var TOTAL__VISIT__COUNT = 'Total__Visit__Count';
var getTotalVisitCount = function getTotalVisitCount() {
  var timeStorge = uni.getStorageSync(TOTAL__VISIT__COUNT);
  var count = 1;
  if (timeStorge) {
    count = timeStorge;
    count++;
  }
  uni.setStorageSync(TOTAL__VISIT__COUNT, count);
  return count;
};

var GetEncodeURIComponentOptions = function GetEncodeURIComponentOptions(statData) {
  var data = {};
  for (var prop in statData) {
    data[prop] = encodeURIComponent(statData[prop]);
  }
  return data;
};

var Set__First__Time = 0;
var Set__Last__Time = 0;

var getFirstTime = function getFirstTime() {
  var time = new Date().getTime();
  Set__First__Time = time;
  Set__Last__Time = 0;
  return time;
};


var getLastTime = function getLastTime() {
  var time = new Date().getTime();
  Set__Last__Time = time;
  return time;
};


var getResidenceTime = function getResidenceTime(type) {
  var residenceTime = 0;
  if (Set__First__Time !== 0) {
    residenceTime = Set__Last__Time - Set__First__Time;
  }

  residenceTime = parseInt(residenceTime / 1000);
  residenceTime = residenceTime < 1 ? 1 : residenceTime;
  if (type === 'app') {
    var overtime = residenceTime > APP_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: overtime };

  }
  if (type === 'page') {
    var _overtime = residenceTime > PAGE_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: _overtime };

  }

  return {
    residenceTime: residenceTime };


};

var getRoute = function getRoute() {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;

  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is;
  } else {
    return _self.$scope && _self.$scope.route || _self.$mp && _self.$mp.page.route;
  }
};

var getPageRoute = function getPageRoute(self) {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;
  var query = self._query;
  var str = query && JSON.stringify(query) !== '{}' ? '?' + JSON.stringify(query) : '';
  // clear
  self._query = '';
  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is + str;
  } else {
    return _self.$scope && _self.$scope.route + str || _self.$mp && _self.$mp.page.route + str;
  }
};

var getPageTypes = function getPageTypes(self) {
  if (self.mpType === 'page' || self.$mp && self.$mp.mpType === 'page' || self.$options.mpType === 'page') {
    return true;
  }
  return false;
};

var calibration = function calibration(eventName, options) {
  //  login 、 share 、pay_success 、pay_fail 、register 、title
  if (!eventName) {
    console.error("uni.report \u7F3A\u5C11 [eventName] \u53C2\u6570");
    return true;
  }
  if (typeof eventName !== 'string') {
    console.error("uni.report [eventName] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u7C7B\u578B");
    return true;
  }
  if (eventName.length > 255) {
    console.error("uni.report [eventName] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (typeof options !== 'string' && typeof options !== 'object') {
    console.error("uni.report [options] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u6216 Object \u7C7B\u578B");
    return true;
  }

  if (typeof options === 'string' && options.length > 255) {
    console.error("uni.report [options] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (eventName === 'title' && typeof options !== 'string') {
    console.error('uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型');
    return true;
  }
};

var PagesJson = __webpack_require__(/*! uni-pages?{"type":"style"} */ 4).default;
var statConfig = __webpack_require__(/*! uni-stat-config */ 5).default || __webpack_require__(/*! uni-stat-config */ 5);

var resultOptions = uni.getSystemInfoSync();var

Util = /*#__PURE__*/function () {
  function Util() {_classCallCheck(this, Util);
    this.self = '';
    this._retry = 0;
    this._platform = '';
    this._query = {};
    this._navigationBarTitle = {
      config: '',
      page: '',
      report: '',
      lt: '' };

    this._operatingTime = 0;
    this._reportingRequestData = {
      '1': [],
      '11': [] };

    this.__prevent_triggering = false;

    this.__licationHide = false;
    this.__licationShow = false;
    this._lastPageRoute = '';
    this.statData = {
      uuid: getUuid(),
      ut: getPlatformName(),
      mpn: getPackName(),
      ak: statConfig.appid,
      usv: STAT_VERSION,
      v: getVersion(),
      ch: getChannel(),
      cn: '',
      pn: '',
      ct: '',
      t: getTime(),
      tt: '',
      p: resultOptions.platform === 'android' ? 'a' : 'i',
      brand: resultOptions.brand || '',
      md: resultOptions.model,
      sv: resultOptions.system.replace(/(Android|iOS)\s/, ''),
      mpsdk: resultOptions.SDKVersion || '',
      mpv: resultOptions.version || '',
      lang: resultOptions.language,
      pr: resultOptions.pixelRatio,
      ww: resultOptions.windowWidth,
      wh: resultOptions.windowHeight,
      sw: resultOptions.screenWidth,
      sh: resultOptions.screenHeight };


  }_createClass(Util, [{ key: "_applicationShow", value: function _applicationShow()

    {
      if (this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('app');
        if (time.overtime) {
          var options = {
            path: this._lastPageRoute,
            scene: this.statData.sc };

          this._sendReportRequest(options);
        }
        this.__licationHide = false;
      }
    } }, { key: "_applicationHide", value: function _applicationHide(

    self, type) {

      this.__licationHide = true;
      getLastTime();
      var time = getResidenceTime();
      getFirstTime();
      var route = getPageRoute(this);
      this._sendHideRequest({
        urlref: route,
        urlref_ts: time.residenceTime },
      type);
    } }, { key: "_pageShow", value: function _pageShow()

    {
      var route = getPageRoute(this);
      var routepath = getRoute();
      this._navigationBarTitle.config = PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].titleNView &&
      PagesJson.pages[routepath].titleNView.titleText ||
      PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].navigationBarTitleText || '';

      if (this.__licationShow) {
        getFirstTime();
        this.__licationShow = false;
        // console.log('这是 onLauch 之后执行的第一次 pageShow ，为下次记录时间做准备');
        this._lastPageRoute = route;
        return;
      }

      getLastTime();
      this._lastPageRoute = route;
      var time = getResidenceTime('page');
      if (time.overtime) {
        var options = {
          path: this._lastPageRoute,
          scene: this.statData.sc };

        this._sendReportRequest(options);
      }
      getFirstTime();
    } }, { key: "_pageHide", value: function _pageHide()

    {
      if (!this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('page');
        this._sendPageRequest({
          url: this._lastPageRoute,
          urlref: this._lastPageRoute,
          urlref_ts: time.residenceTime });

        this._navigationBarTitle = {
          config: '',
          page: '',
          report: '',
          lt: '' };

        return;
      }
    } }, { key: "_login", value: function _login()

    {
      this._sendEventRequest({
        key: 'login' },
      0);
    } }, { key: "_share", value: function _share()

    {
      this._sendEventRequest({
        key: 'share' },
      0);
    } }, { key: "_payment", value: function _payment(
    key) {
      this._sendEventRequest({
        key: key },
      0);
    } }, { key: "_sendReportRequest", value: function _sendReportRequest(
    options) {

      this._navigationBarTitle.lt = '1';
      var query = options.query && JSON.stringify(options.query) !== '{}' ? '?' + JSON.stringify(options.query) : '';
      this.statData.lt = '1';
      this.statData.url = options.path + query || '';
      this.statData.t = getTime();
      this.statData.sc = getScene(options.scene);
      this.statData.fvts = getFirstVisitTime();
      this.statData.lvts = getLastVisitTime();
      this.statData.tvc = getTotalVisitCount();
      if (getPlatformName() === 'n') {
        this.getProperty();
      } else {
        this.getNetworkInfo();
      }
    } }, { key: "_sendPageRequest", value: function _sendPageRequest(

    opt) {var

      url =


      opt.url,urlref = opt.urlref,urlref_ts = opt.urlref_ts;
      this._navigationBarTitle.lt = '11';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '11',
        ut: this.statData.ut,
        url: url,
        tt: this.statData.tt,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "_sendHideRequest", value: function _sendHideRequest(

    opt, type) {var

      urlref =

      opt.urlref,urlref_ts = opt.urlref_ts;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '3',
        ut: this.statData.ut,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options, type);
    } }, { key: "_sendEventRequest", value: function _sendEventRequest()



    {var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref$key = _ref.key,key = _ref$key === void 0 ? '' : _ref$key,_ref$value = _ref.value,value = _ref$value === void 0 ? "" : _ref$value;
      var route = this._lastPageRoute;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '21',
        ut: this.statData.ut,
        url: route,
        ch: this.statData.ch,
        e_n: key,
        e_v: typeof value === 'object' ? JSON.stringify(value) : value.toString(),
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "getNetworkInfo", value: function getNetworkInfo()

    {var _this = this;
      uni.getNetworkType({
        success: function success(result) {
          _this.statData.net = result.networkType;
          _this.getLocation();
        } });

    } }, { key: "getProperty", value: function getProperty()

    {var _this2 = this;
      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
        _this2.statData.v = wgtinfo.version || '';
        _this2.getNetworkInfo();
      });
    } }, { key: "getLocation", value: function getLocation()

    {var _this3 = this;
      if (statConfig.getLocation) {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: function success(result) {
            if (result.address) {
              _this3.statData.cn = result.address.country;
              _this3.statData.pn = result.address.province;
              _this3.statData.ct = result.address.city;
            }

            _this3.statData.lat = result.latitude;
            _this3.statData.lng = result.longitude;
            _this3.request(_this3.statData);
          } });

      } else {
        this.statData.lat = 0;
        this.statData.lng = 0;
        this.request(this.statData);
      }
    } }, { key: "request", value: function request(

    data, type) {var _this4 = this;
      var time = getTime();
      var title = this._navigationBarTitle;
      data.ttn = title.page;
      data.ttpj = title.config;
      data.ttc = title.report;

      var requestData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        requestData = uni.getStorageSync('__UNI__STAT__DATA') || {};
      }
      if (!requestData[data.lt]) {
        requestData[data.lt] = [];
      }
      requestData[data.lt].push(data);

      if (getPlatformName() === 'n') {
        uni.setStorageSync('__UNI__STAT__DATA', requestData);
      }
      if (getPageResidenceTime() < OPERATING_TIME && !type) {
        return;
      }
      var uniStatData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        uniStatData = uni.getStorageSync('__UNI__STAT__DATA');
      }
      // 时间超过，重新获取时间戳
      setPageResidenceTime();
      var firstArr = [];
      var contentArr = [];
      var lastArr = [];var _loop = function _loop(

      i) {
        var rd = uniStatData[i];
        rd.forEach(function (elm) {
          var newData = getSplicing(elm);
          if (i === 0) {
            firstArr.push(newData);
          } else if (i === 3) {
            lastArr.push(newData);
          } else {
            contentArr.push(newData);
          }
        });};for (var i in uniStatData) {_loop(i);
      }

      firstArr.push.apply(firstArr, contentArr.concat(lastArr));
      var optionsData = {
        usv: STAT_VERSION, //统计 SDK 版本号
        t: time, //发送请求时的时间戮
        requests: JSON.stringify(firstArr) };


      this._reportingRequestData = {};
      if (getPlatformName() === 'n') {
        uni.removeStorageSync('__UNI__STAT__DATA');
      }

      if (data.ut === 'h5') {
        this.imageRequest(optionsData);
        return;
      }

      if (getPlatformName() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this4._sendRequest(optionsData);
        }, 200);
        return;
      }
      this._sendRequest(optionsData);
    } }, { key: "_sendRequest", value: function _sendRequest(
    optionsData) {var _this5 = this;
      uni.request({
        url: STAT_URL,
        method: 'POST',
        // header: {
        //   'content-type': 'application/json' // 默认值
        // },
        data: optionsData,
        success: function success() {
          // if (process.env.NODE_ENV === 'development') {
          //   console.log('stat request success');
          // }
        },
        fail: function fail(e) {
          if (++_this5._retry < 3) {
            setTimeout(function () {
              _this5._sendRequest(optionsData);
            }, 1000);
          }
        } });

    }
    /**
       * h5 请求
       */ }, { key: "imageRequest", value: function imageRequest(
    data) {
      var image = new Image();
      var options = getSgin(GetEncodeURIComponentOptions(data)).options;
      image.src = STAT_H5_URL + '?' + options;
    } }, { key: "sendEvent", value: function sendEvent(

    key, value) {
      // 校验 type 参数
      if (calibration(key, value)) return;

      if (key === 'title') {
        this._navigationBarTitle.report = value;
        return;
      }
      this._sendEventRequest({
        key: key,
        value: typeof value === 'object' ? JSON.stringify(value) : value },
      1);
    } }]);return Util;}();var



Stat = /*#__PURE__*/function (_Util) {_inherits(Stat, _Util);_createClass(Stat, null, [{ key: "getInstance", value: function getInstance()
    {
      if (!this.instance) {
        this.instance = new Stat();
      }
      return this.instance;
    } }]);
  function Stat() {var _this6;_classCallCheck(this, Stat);
    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Stat).call(this));
    _this6.instance = null;
    // 注册拦截器
    if (typeof uni.addInterceptor === 'function' && "development" !== 'development') {
      _this6.addInterceptorInit();
      _this6.interceptLogin();
      _this6.interceptShare(true);
      _this6.interceptRequestPayment();
    }return _this6;
  }_createClass(Stat, [{ key: "addInterceptorInit", value: function addInterceptorInit()

    {
      var self = this;
      uni.addInterceptor('setNavigationBarTitle', {
        invoke: function invoke(args) {
          self._navigationBarTitle.page = args.title;
        } });

    } }, { key: "interceptLogin", value: function interceptLogin()

    {
      var self = this;
      uni.addInterceptor('login', {
        complete: function complete() {
          self._login();
        } });

    } }, { key: "interceptShare", value: function interceptShare(

    type) {
      var self = this;
      if (!type) {
        self._share();
        return;
      }
      uni.addInterceptor('share', {
        success: function success() {
          self._share();
        },
        fail: function fail() {
          self._share();
        } });

    } }, { key: "interceptRequestPayment", value: function interceptRequestPayment()

    {
      var self = this;
      uni.addInterceptor('requestPayment', {
        success: function success() {
          self._payment('pay_success');
        },
        fail: function fail() {
          self._payment('pay_fail');
        } });

    } }, { key: "report", value: function report(

    options, self) {
      this.self = self;
      // if (process.env.NODE_ENV === 'development') {
      //   console.log('report init');
      // }
      setPageResidenceTime();
      this.__licationShow = true;
      this._sendReportRequest(options, true);
    } }, { key: "load", value: function load(

    options, self) {
      if (!self.$scope && !self.$mp) {
        var page = getCurrentPages();
        self.$scope = page[page.length - 1];
      }
      this.self = self;
      this._query = options;
    } }, { key: "show", value: function show(

    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageShow(self);
      } else {
        this._applicationShow(self);
      }
    } }, { key: "ready", value: function ready(

    self) {
      // this.self = self;
      // if (getPageTypes(self)) {
      //   this._pageShow(self);
      // }
    } }, { key: "hide", value: function hide(
    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageHide(self);
      } else {
        this._applicationHide(self, true);
      }
    } }, { key: "error", value: function error(
    em) {
      if (this._platform === 'devtools') {
        if (true) {
          console.info('当前运行环境为开发者工具，不上报数据。');
        }
        // return;
      }
      var emVal = '';
      if (!em.message) {
        emVal = JSON.stringify(em);
      } else {
        emVal = em.stack;
      }
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '31',
        ut: this.statData.ut,
        ch: this.statData.ch,
        mpsdk: this.statData.mpsdk,
        mpv: this.statData.mpv,
        v: this.statData.v,
        em: emVal,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }]);return Stat;}(Util);


var stat = Stat.getInstance();
var isHide = false;
var lifecycle = {
  onLaunch: function onLaunch(options) {
    stat.report(options, this);
  },
  onReady: function onReady() {
    stat.ready(this);
  },
  onLoad: function onLoad(options) {
    stat.load(options, this);
    // 重写分享，获取分享上报事件
    if (this.$scope && this.$scope.onShareAppMessage) {
      var oldShareAppMessage = this.$scope.onShareAppMessage;
      this.$scope.onShareAppMessage = function (options) {
        stat.interceptShare(false);
        return oldShareAppMessage.call(this, options);
      };
    }
  },
  onShow: function onShow() {
    isHide = false;
    stat.show(this);
  },
  onHide: function onHide() {
    isHide = true;
    stat.hide(this);
  },
  onUnload: function onUnload() {
    if (isHide) {
      isHide = false;
      return;
    }
    stat.hide(this);
  },
  onError: function onError(e) {
    stat.error(e);
  } };


function main() {
  if (true) {
    uni.report = function (type, options) {};
  } else { var Vue; }
}

main();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["weexPlus"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["default"]))

/***/ }),
/* 2 */
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.weexPlus = exports.default = void 0;function initUni() {

  var isFn = function isFn(v) {
    return typeof v === 'function';
  };

  var handlePromise = function handlePromise(promise) {
    return promise.then(function (data) {
      return [null, data];
    }).catch(function (err) {
      return [err];
    });
  };

  var REGEX = /^\$|^on|^create|Sync$|Manager$|^pause/;
  var API_NORMAL_LIST = ['os', 'getCurrentSubNVue', 'getSubNVueById', 'stopRecord', 'stopVoice',
  'stopBackgroundAudio', 'stopPullDownRefresh', 'hideKeyboard', 'hideToast', 'hideLoading',
  'showNavigationBarLoading', 'hideNavigationBarLoading', 'canIUse', 'navigateBack', 'closeSocket',
  'pageScrollTo', 'drawCanvas'];


  var shouldPromise = function shouldPromise(name) {
    if (REGEX.test(name) && name !== 'createBLEConnection') {
      return false;
    }
    if (~API_NORMAL_LIST.indexOf(name)) {
      return false;
    }
    return true;
  };

  var promisify = function promisify(api) {
    return function () {
      for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
        return api.apply(undefined, [options].concat(params));
      }
      return handlePromise(new Promise(function (resolve, reject) {
        api.apply(undefined, [Object.assign({}, options, {
          success: resolve,
          fail: reject })].
        concat(params));
        /* eslint-disable no-extend-native */
        Promise.prototype.finally = function (callback) {
          var promise = this.constructor;
          return this.then(function (value) {
            return promise.resolve(callback()).then(function () {
              return value;
            });
          }, function (reason) {
            return promise.resolve(callback()).then(function () {
              throw reason;
            });
          });
        };
      }));
    };
  };

  var onMessageCallbacks = [];

  var origin = void 0;

  function onSubNVueMessage(data) {
    onMessageCallbacks.forEach(function (callback) {
      return callback({
        origin: origin,
        data: data });

    });
  }

  var webviewId = weexPlus.webview.currentWebview().id;

  var channel = new BroadcastChannel('UNI-APP-SUBNVUE');
  channel.onmessage = function (event) {
    if (event.data.to === webviewId) {
      onSubNVueMessage(event.data.data);
    }
  };

  function wrapper(webview) {
    webview.$processed = true;

    var currentWebviewId = weexPlus.webview.currentWebview().id;
    var isPopupNVue = currentWebviewId === webview.id;

    var hostNVueId = webview.__uniapp_origin_type === 'uniNView' && webview.__uniapp_origin_id;
    var popupNVueId = webview.id;

    webview.postMessage = function (data) {
      if (hostNVueId) {
        channel.postMessage({
          data: data,
          to: isPopupNVue ? hostNVueId : popupNVueId });

      } else {
        postMessage({
          type: 'UniAppSubNVue',
          data: data });

      }
    };
    webview.onMessage = function (callback) {
      onMessageCallbacks.push(callback);
    };

    if (!webview.__uniapp_mask_id) {
      return;
    }
    origin = webview.__uniapp_host;

    var maskColor = webview.__uniapp_mask;

    var maskWebview = weexPlus.webview.getWebviewById(webview.__uniapp_mask_id);
    maskWebview = maskWebview.parent() || maskWebview; //再次检测父
    var oldShow = webview.show;
    var oldHide = webview.hide;
    var oldClose = webview.close;

    var showMask = function showMask() {
      maskWebview.setStyle({
        mask: maskColor });

    };
    var closeMask = function closeMask() {
      maskWebview.setStyle({
        mask: 'none' });

    };
    webview.show = function () {
      showMask();

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return oldShow.apply(webview, args);
    };
    webview.hide = function () {
      closeMask();

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return oldHide.apply(webview, args);
    };
    webview.close = function () {
      closeMask();

      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return oldClose.apply(webview, args);
    };
  }

  function getSubNVueById(id) {
    var webview = weexPlus.webview.getWebviewById(id);
    if (webview && !webview.$processed) {
      wrapper(webview);
    }
    return webview;
  }

  function getCurrentSubNVue() {
    return getSubNVueById(weexPlus.webview.currentWebview().id);
  }

  var plus = weex.requireModule('plus');
  var globalEvent = weex.requireModule('globalEvent');

  var id = 0;
  var callbacks = {};

  var UNIAPP_SERVICE_NVUE_ID = '__uniapp__service';

  globalEvent.addEventListener('plusMessage', function (e) {
    if (e.data.type === 'UniAppJsApi') {
      invoke(e.data.id, e.data.data);
    } else if (e.data.type === 'UniAppSubNVue') {
      onSubNVueMessage(e.data.data, e.data.options);
    } else if (e.data.type === 'onNavigationBarButtonTap') {
      if (typeof onNavigationBarButtonTapCallback === 'function') {
        onNavigationBarButtonTapCallback(e.data.data);
      }
    } else if (e.data.type === 'onNavigationBarSearchInputChanged') {
      if (typeof onNavigationBarSearchInputChangedCallback === 'function') {
        onNavigationBarSearchInputChangedCallback(e.data.data);
      }
    } else if (e.data.type === 'onNavigationBarSearchInputConfirmed') {
      if (typeof onNavigationBarSearchInputConfirmedCallback === 'function') {
        onNavigationBarSearchInputConfirmedCallback(e.data.data);
      }
    } else if (e.data.type === 'onNavigationBarSearchInputClicked') {
      if (typeof onNavigationBarSearchInputClickedCallback === 'function') {
        onNavigationBarSearchInputClickedCallback(e.data.data);
      }
    }
  });

  var createCallback = function createCallback(args, type) {
    var callback = function callback(res) {
      if (isFn(args)) {
        args(res);
      } else if (args) {
        if (~res.errMsg.indexOf(':ok')) {
          isFn(args.success) && args.success(res);
        } else if (~res.errMsg.indexOf(':fail')) {
          isFn(args.fail) && args.fail(res);
        }
        isFn(args.complete) && args.complete(res);
      }
    };
    if (isFn(args) || args && isFn(args.callback)) {
      callback.keepAlive = true;
    }
    return callback;
  };

  var invoke = function invoke(callbackId, data) {
    var callback = callbacks[callbackId];
    if (callback) {
      callback(data);
      if (!callback.keepAlive) {
        delete callbacks[callbackId];
      }
    } else {
      console.error('callback[' + callbackId + '] is undefined');
    }
  };

  var publish = function publish(_ref) {
    var id = _ref.id,
    type = _ref.type,
    params = _ref.params;

    callbacks[id] = createCallback(params, type);
    plus.postMessage({
      id: id,
      type: type,
      params: params },
    UNIAPP_SERVICE_NVUE_ID);
  };

  function postMessage(data) {
    plus.postMessage(data, UNIAPP_SERVICE_NVUE_ID);
  }

  var createPublish = function createPublish(name) {
    return function (args) {
      publish({
        id: id++,
        type: name,
        params: args });

    };
  };

  var onNavigationBarButtonTapCallback = void 0;
  var onNavigationBarSearchInputChangedCallback = void 0;
  var onNavigationBarSearchInputConfirmedCallback = void 0;
  var onNavigationBarSearchInputClickedCallback = void 0;

  function onNavigationBarButtonTap(callback) {
    onNavigationBarButtonTapCallback = callback;
  }

  function onNavigationBarSearchInputChanged(callback) {
    onNavigationBarSearchInputChangedCallback = callback;
  }

  function onNavigationBarSearchInputConfirmed(callback) {
    onNavigationBarSearchInputConfirmedCallback = callback;
  }

  function onNavigationBarSearchInputClicked(callback) {
    onNavigationBarSearchInputClickedCallback = callback;
  }

  function requireNativePlugin(pluginName) {
    return weex.requireModule(pluginName);
  }

  var dom = weex.requireModule('dom');

  function loadFontFace(_ref) {
    var family = _ref.family,
    source = _ref.source,
    desc = _ref.desc,
    success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    dom.addRule('fontFace', {
      fontFamily: family,
      src: source.replace(/"/g, '\'') });

    var res = {
      errMsg: 'loadFontFace:ok',
      status: 'loaded' };

    isFn(success) && success(res);
    isFn(complete) && complete(res);
  }

  var globalEvent$1 = weex.requireModule('globalEvent');

  var callbacks$1 = [];

  globalEvent$1.addEventListener('plusMessage', function (e) {
    if (e.data.type === 'UniAppReady') {
      ready.isUniAppReady = true;
      if (callbacks$1.length) {
        callbacks$1.forEach(function (callback) {
          return callback();
        });
        callbacks$1 = [];
      }
    }
  });

  function ready(callback) {
    if (typeof callback === 'function') {
      if (this.isUniAppReady) {
        callback();
      } else {
        callbacks$1.push(callback);
      }
    }
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ?
    "symbol" : typeof obj;
  };

  var stream = weex.requireModule('stream');

  // let requestTaskId = 0

  var METHOD_GET = 'GET';
  var METHOD_POST = 'POST';
  var CONTENT_TYPE_JSON = 'application/json';
  var CONTENT_TYPE_FORM = 'application/x-www-form-urlencoded';

  var serialize = function serialize(data) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : METHOD_GET;
    var contentType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : CONTENT_TYPE_FORM;

    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
      if (method.toUpperCase() === METHOD_POST && contentType.toLowerCase() === CONTENT_TYPE_JSON) {
        return JSON.stringify(data);
      } else {
        return Object.keys(data).map(function (key) {
          return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
        }).join('&');
      }
    }
    return data;
  };

  function request(_ref) {
    var url = _ref.url,
    data = _ref.data,
    header = _ref.header,
    _ref$method = _ref.method,
    method = _ref$method === undefined ? 'GET' : _ref$method,
    _ref$dataType = _ref.dataType,
    dataType = _ref$dataType === undefined ? 'json' : _ref$dataType,
    responseType = _ref.responseType,
    success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    // requestTaskId++
    var aborted = false;

    var hasContentType = false;
    var headers = {};
    if (header) {
      for (var name in header) {
        if (!hasContentType && name.toLowerCase() === 'content-type') {
          hasContentType = true;
          headers['Content-Type'] = header[name];
        } else {
          headers[name] = header[name];
        }
      }
    }
    if (method === METHOD_GET && data) {
      url = url + (~url.indexOf('?') ? url.substr(-1) === '&' || url.substr(-1) === '?' ? '' : '&' : '?') +
      serialize(data);
    }
    stream.fetch({
      url: url,
      method: method,
      headers: headers,
      type: dataType === 'json' ? 'json' : 'text',
      body: method !== METHOD_GET ? serialize(data, method, headers['Content-Type']) : '' },
    function (_ref2) {
      var status = _ref2.status,
      ok = _ref2.ok,
      statusText = _ref2.statusText,
      data = _ref2.data,
      headers = _ref2.headers;

      var ret = {};
      if (!status || status === -1 || aborted) {
        ret.errMsg = 'request:fail';
        isFn(fail) && fail(ret);
      } else {
        ret.data = data;
        ret.statusCode = status;
        ret.header = headers;
        isFn(success) && success(ret);
      }
      isFn(complete) && complete(ret);
    });
    return {
      abort: function abort() {
        aborted = true;
      } };

  }

  var storage = weex.requireModule('plusstorage');
  var UNIAPP_STORAGE_DATA_TYPE = '__TYPE';

  function getStorage(_ref) {
    var key = _ref.key,
    data = _ref.data,
    success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    storage.getItem(key + UNIAPP_STORAGE_DATA_TYPE, function (ret) {
      if (ret.result === 'success') {
        var dataType = ret.data;
        storage.getItem(key, function (res) {
          if (res.result === 'success') {
            var result = res.data;
            if (dataType && result) {
              if (dataType !== 'String') {
                result = JSON.parse(result);
              }
              isFn(success) && success({
                errMsg: 'getStorage:ok',
                data: result });

            } else {
              res.errMsg = 'setStorage:fail';
              isFn(fail) && fail(res);
            }
          } else {
            res.errMsg = 'setStorage:fail';
            isFn(fail) && fail(res);
          }
          isFn(complete) && complete(res);
        });
      } else {
        ret.errMsg = 'setStorage:fail';
        isFn(fail) && fail(ret);
        isFn(complete) && complete(ret);
      }
    });
  }

  function setStorage(_ref2) {
    var key = _ref2.key,
    data = _ref2.data,
    success = _ref2.success,
    fail = _ref2.fail,
    complete = _ref2.complete;

    var dataType = 'String';
    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
      dataType = 'Object';
      data = JSON.stringify(data);
    }
    storage.setItem(key, data, function (res) {
      if (res.result === 'success') {
        storage.setItem(key + UNIAPP_STORAGE_DATA_TYPE, dataType, function (ret) {
          if (ret.result === 'success') {
            isFn(success) && success({
              errMsg: 'setStorage:ok' });

          } else {
            ret.errMsg = 'setStorage:fail';
            isFn(fail) && fail(ret);
          }
        });
      } else {
        res.errMsg = 'setStorage:fail';
        isFn(fail) && fail(res);
      }
      isFn(complete) && complete(res);
    });
  }

  function removeStorage(_ref3) {
    var key = _ref3.key,
    data = _ref3.data,
    success = _ref3.success,
    fail = _ref3.fail,
    complete = _ref3.complete;

    storage.removeItem(key, function (res) {
      if (res.result === 'success') {
        isFn(success) && success({
          errMsg: 'removeStorage:ok' });

      } else {
        res.errMsg = 'removeStorage:fail';
        isFn(fail) && fail(res);
      }
      isFn(complete) && complete(res);
    });
    storage.removeItem(key + UNIAPP_STORAGE_DATA_TYPE);
  }

  function clearStorage(_ref4) {
    var key = _ref4.key,
    data = _ref4.data,
    success = _ref4.success,
    fail = _ref4.fail,
    complete = _ref4.complete;
  }

  var clipboard = weex.requireModule('clipboard');

  function getClipboardData(_ref) {
    var success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    clipboard.getString(function (_ref2) {
      var data = _ref2.data;

      var res = {
        errMsg: 'getClipboardData:ok',
        data: data };

      isFn(success) && success(res);
      isFn(complete) && complete(res);
    });
  }

  function setClipboardData(_ref3) {
    var data = _ref3.data,
    success = _ref3.success,
    fail = _ref3.fail,
    complete = _ref3.complete;

    var res = {
      errMsg: 'setClipboardData:ok' };

    clipboard.setString(data);
    isFn(success) && success(res);
    isFn(complete) && complete(res);
  }

  var getEmitter = function () {
    if (typeof getUniEmitter === 'function') {
      /* eslint-disable no-undef */
      return getUniEmitter;
    }
    var Emitter = {
      $on: function $on() {
        console.warn('uni.$on failed');
      },
      $off: function $off() {
        console.warn('uni.$off failed');
      },
      $once: function $once() {
        console.warn('uni.$once failed');
      },
      $emit: function $emit() {
        console.warn('uni.$emit failed');
      } };

    return function getUniEmitter() {
      return Emitter;
    };
  }();

  function apply(ctx, method, args) {
    return ctx[method].apply(ctx, args);
  }

  function $on() {
    return apply(getEmitter(), '$on', [].concat(Array.prototype.slice.call(arguments)));
  }

  function $off() {
    return apply(getEmitter(), '$off', [].concat(Array.prototype.slice.call(arguments)));
  }

  function $once() {
    return apply(getEmitter(), '$once', [].concat(Array.prototype.slice.call(arguments)));
  }

  function $emit() {
    return apply(getEmitter(), '$emit', [].concat(Array.prototype.slice.call(arguments)));
  }



  var api = /*#__PURE__*/Object.freeze({
    loadFontFace: loadFontFace,
    ready: ready,
    request: request,
    getStorage: getStorage,
    setStorage: setStorage,
    removeStorage: removeStorage,
    clearStorage: clearStorage,
    getClipboardData: getClipboardData,
    setClipboardData: setClipboardData,
    onSubNVueMessage: onSubNVueMessage,
    getSubNVueById: getSubNVueById,
    getCurrentSubNVue: getCurrentSubNVue,
    $on: $on,
    $off: $off,
    $once: $once,
    $emit: $emit });



  var wx = {
    uploadFile: true,
    downloadFile: true,
    chooseImage: true,
    previewImage: true,
    getImageInfo: true,
    saveImageToPhotosAlbum: true,
    chooseVideo: true,
    saveVideoToPhotosAlbum: true,
    saveFile: true,
    getSavedFileList: true,
    getSavedFileInfo: true,
    removeSavedFile: true,
    openDocument: true,
    setStorage: true,
    getStorage: true,
    getStorageInfo: true,
    removeStorage: true,
    clearStorage: true,
    getLocation: true,
    chooseLocation: true,
    openLocation: true,
    getSystemInfo: true,
    getNetworkType: true,
    makePhoneCall: true,
    scanCode: true,
    setScreenBrightness: true,
    getScreenBrightness: true,
    setKeepScreenOn: true,
    vibrateLong: true,
    vibrateShort: true,
    addPhoneContact: true,
    showToast: true,
    showLoading: true,
    hideToast: true,
    hideLoading: true,
    showModal: true,
    showActionSheet: true,
    setNavigationBarTitle: true,
    setNavigationBarColor: true,
    navigateTo: true,
    redirectTo: true,
    reLaunch: true,
    switchTab: true,
    navigateBack: true,
    getProvider: true,
    login: true,
    getUserInfo: true,
    share: true,
    requestPayment: true,
    subscribePush: true,
    unsubscribePush: true,
    onPush: true,
    offPush: true };


  var baseUni = {
    os: {
      nvue: true } };



  var uni = {};

  if (typeof Proxy !== 'undefined') {
    uni = new Proxy({}, {
      get: function get(target, name) {
        if (name === 'os') {
          return {
            nvue: true };

        }
        if (name === 'postMessage') {
          return postMessage;
        }
        if (name === 'requireNativePlugin') {
          return requireNativePlugin;
        }
        if (name === 'onNavigationBarButtonTap') {
          return onNavigationBarButtonTap;
        }
        if (name === 'onNavigationBarSearchInputChanged') {
          return onNavigationBarSearchInputChanged;
        }
        if (name === 'onNavigationBarSearchInputConfirmed') {
          return onNavigationBarSearchInputConfirmed;
        }
        if (name === 'onNavigationBarSearchInputClicked') {
          return onNavigationBarSearchInputClicked;
        }
        var method = api[name];
        if (!method) {
          method = createPublish(name);
        }
        if (shouldPromise(name)) {
          return promisify(method);
        }
        return method;
      } });

  } else {
    Object.keys(baseUni).forEach(function (key) {
      uni[key] = baseUni[key];
    });

    uni.postMessage = postMessage;

    uni.requireNativePlugin = requireNativePlugin;

    uni.onNavigationBarButtonTap = onNavigationBarButtonTap;

    uni.onNavigationBarSearchInputChanged = onNavigationBarSearchInputChanged;

    uni.onNavigationBarSearchInputConfirmed = onNavigationBarSearchInputConfirmed;

    uni.onNavigationBarSearchInputClicked = onNavigationBarSearchInputClicked;

    Object.keys(wx).forEach(function (name) {
      var method = api[name];
      if (!method) {
        method = createPublish(name);
      }
      if (shouldPromise(name)) {
        uni[name] = promisify(method);
      } else {
        uni[name] = method;
      }
    });
  }
  return uni;
}

var createUni;

if (typeof getUni === 'function') {
  createUni = getUni;
} else {
  createUni = initUni;
}
var weexPlus = new WeexPlus(weex);exports.weexPlus = weexPlus;var _default =
createUni(weex, weexPlus, BroadcastChannel);exports.default = _default;

/***/ }),
/* 3 */
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_from":"@dcloudio/uni-stat@next","_id":"@dcloudio/uni-stat@2.0.0-26420200313001","_inBundle":false,"_integrity":"sha512-7dPuazTiDmUyRcw+WW+UlWGKH0eeCUB+p0P4pJVKEHjpdXnXgvDQCSdJk764NH99TfsUycnuxecP5oHckVa88g==","_location":"/@dcloudio/uni-stat","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"@dcloudio/uni-stat@next","name":"@dcloudio/uni-stat","escapedName":"@dcloudio%2funi-stat","scope":"@dcloudio","rawSpec":"next","saveSpec":null,"fetchSpec":"next"},"_requiredBy":["#USER","/","/@dcloudio/vue-cli-plugin-uni"],"_resolved":"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-26420200313001.tgz","_shasum":"a006e329e033cd412accfa635f8933dbb822a9c3","_spec":"@dcloudio/uni-stat@next","_where":"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli","author":"","bugs":{"url":"https://github.com/dcloudio/uni-app/issues"},"bundleDependencies":false,"deprecated":false,"description":"","devDependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","eslint":"^6.1.0","rollup":"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},"files":["dist","package.json","LICENSE"],"gitHead":"b1fdbafab5dd4673cff64188a5203d0c947e4f50","homepage":"https://github.com/dcloudio/uni-app#readme","license":"Apache-2.0","main":"dist/index.js","name":"@dcloudio/uni-stat","repository":{"type":"git","url":"git+https://github.com/dcloudio/uni-app.git","directory":"packages/uni-stat"},"scripts":{"build":"NODE_ENV=production rollup -c rollup.config.js","dev":"NODE_ENV=development rollup -w -c rollup.config.js"},"version":"2.0.0-26420200313001"};

/***/ }),
/* 4 */
/*!******************************************************************!*\
  !*** E:/HBuilder_WorkSpace/uni-mall/pages.json?{"type":"style"} ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"pages":{"pages/tabBar/home":{"pullToRefresh":{"support":true,"style":"circle","offset":"64px"},"titleNView":{"type":"transparent","searchInput":{"backgroundColor":"rgba(245, 245, 245)","borderRadius":"16px","placeholder":"点击搜索商品","disabled":true,"placeholderColor":"#606266"},"buttons":[{"text":"北京市","fontSize":"14","select":true,"float":"left","width":"75px","background":"rgba(0,0,0,0)"},{"fontSrc":"/static/mallicon.ttf","text":"","fontSize":"26","color":"#ffffff","background":"rgba(0,0,0,0)"}]},"usingComponents":{},"usingAutoImportComponents":{}},"pages/tabBar/cart":{"navigationBarTitleText":"购物车","usingComponents":{"uni-number-box":"/components/uni-number-box"},"usingAutoImportComponents":{}},"pages/search/search":{"titleNView":{"searchInput":{"backgroundColor":"rgba(245, 245, 245)","borderRadius":"16px","placeholder":"点击搜索商品","disabled":false,"placeholderColor":"#606266"},"buttons":[{"text":"搜索","fontSize":"16","width":"50px"}]},"usingComponents":{},"usingAutoImportComponents":{}},"pages/product/list":{"pullToRefresh":{"support":true,"style":"circle"},"titleNView":{"searchInput":{"backgroundColor":"rgba(245, 245, 245)","borderRadius":"16px","placeholder":"点击搜索商品名称，商品型号","disabled":true,"placeholderColor":"#606266"},"buttons":[{"fontSrc":"/static/mallicon.ttf","text":"","fontSize":"28","width":"50px","color":"#ffffff","background":"rgba(0,0,0,0)","redDot":true}]},"usingComponents":{"uni-load-more":"/components/uni-load-more/uni-load-more"},"usingAutoImportComponents":{"uni-load-more":"/components/uni-load-more/uni-load-more"}},"pages/product/detail":{"navigationBarTitleText":"详情展示","titleNView":{"type":"transparent"},"usingComponents":{"uni-number-box":"/components/uni-number-box"},"usingAutoImportComponents":{}},"pages/login/login":{"navigationBarTitleText":"","navigationStyle":"custom","titleNView":false,"animationType":"slide-in-bottom","usingComponents":{},"usingAutoImportComponents":{}},"pages/order/placeOrder":{"navigationBarTitleText":"提交订单","usingComponents":{},"usingAutoImportComponents":{}},"pages/pay/pay":{"navigationBarTitleText":"支付","usingComponents":{},"usingAutoImportComponents":{}},"pages/pay/paySuccess":{"navigationBarTitleText":"支付成功","usingComponents":{},"usingAutoImportComponents":{}},"pages/notice/notice":{"navigationBarTitleText":"通知","usingComponents":{},"usingAutoImportComponents":{}},"pages/address/address":{"navigationBarTitleText":"收货地址管理","usingComponents":{},"usingAutoImportComponents":{}},"pages/address/addressEdit":{"navigationBarTitleText":"编辑收货地址","usingComponents":{"city-selector":"/components/city-selector"},"usingAutoImportComponents":{}},"pages/setting/setting":{"navigationBarTitleText":"设置","usingComponents":{},"usingAutoImportComponents":{}}},"globalStyle":{"navigationBarTextStyle":"white","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#E60012","backgroundColor":"#E60012"}});

/***/ }),
/* 5 */
/*!*****************************************************************!*\
  !*** E:/HBuilder_WorkSpace/uni-mall/pages.json?{"type":"stat"} ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"appid":"__UNI__6002208"});

/***/ }),
/* 6 */
/*!******************************************************************!*\
  !*** E:/HBuilder_WorkSpace/uni-mall/main.js?{"type":"appStyle"} ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.prototype.__$appStyle__ = {}
Vue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss */ 7).default,Vue.prototype.__$appStyle__)


/***/ }),
/* 7 */
/*!*******************************************************************************!*\
  !*** E:/HBuilder_WorkSpace/uni-mall/App.vue?vue&type=style&index=0&lang=scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/lib/loader.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss */ 8);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 8 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/lib/loader.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/HBuilder_WorkSpace/uni-mall/App.vue?vue&type=style&index=0&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "Skeleton": {
    "backgroundColor": "#f3f3f3",
    "paddingTop": "20rpx",
    "paddingRight": 0,
    "paddingBottom": "20rpx",
    "paddingLeft": 0,
    "borderRadius": "8rpx"
  },
  "clamp": {
    "overflow": "hidden",
    "textOverflow": "ellipsis"
  },
  "common-hover": {
    "backgroundColor": "#f5f5f5"
  },
  "b-b": {
    "position:after": "absolute",
    "zIndex:after": 3,
    "left:after": 0,
    "right:after": 0,
    "height:after": 0,
    "transform:after": "scaleY(0.5)",
    "borderBottomWidth:after": "1",
    "borderBottomStyle:after": "solid",
    "borderBottomColor:after": "#E4E7ED",
    "bottom:after": 0
  },
  "b-t": {
    "position:after:after": "absolute",
    "zIndex:after:after": 3,
    "left:after:after": 0,
    "right:after:after": 0,
    "height:after:after": 0,
    "transform:after:after": "scaleY(0.5)",
    "borderBottomWidth:after:after": "1",
    "borderBottomStyle:after:after": "solid",
    "borderBottomColor:after:after": "#E4E7ED",
    "top:after": 0
  },
  "input-placeholder": {
    "color": "#999999"
  },
  "placeholder": {
    "color": "#999999"
  }
}

/***/ }),
/* 9 */
/*!*************************************************************************!*\
  !*** E:/HBuilder_WorkSpace/uni-mall/pages/tabBar/user.nvue?mpType=page ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_nvue_vue_type_template_id_7ae0d481_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.nvue?vue&type=template&id=7ae0d481&mpType=page */ 10);
/* harmony import */ var _user_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.nvue?vue&type=script&lang=js&mpType=page */ 12);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _user_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _user_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./user.nvue?vue&type=style&index=0&lang=css&mpType=page */ 16).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./user.nvue?vue&type=style&index=0&lang=css&mpType=page */ 16).default)
            }

}

/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _user_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _user_nvue_vue_type_template_id_7ae0d481_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _user_nvue_vue_type_template_id_7ae0d481_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "9e8130e6",
  false,
  _user_nvue_vue_type_template_id_7ae0d481_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "E:/HBuilder_WorkSpace/uni-mall/pages/tabBar/user.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 10 */
/*!*******************************************************************************************************!*\
  !*** E:/HBuilder_WorkSpace/uni-mall/pages/tabBar/user.nvue?vue&type=template&id=7ae0d481&mpType=page ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_user_nvue_vue_type_template_id_7ae0d481_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./user.nvue?vue&type=template&id=7ae0d481&mpType=page */ 11);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_user_nvue_vue_type_template_id_7ae0d481_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_user_nvue_vue_type_template_id_7ae0d481_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_user_nvue_vue_type_template_id_7ae0d481_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_user_nvue_vue_type_template_id_7ae0d481_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 11 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/HBuilder_WorkSpace/uni-mall/pages/tabBar/user.nvue?vue&type=template&id=7ae0d481&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: { scrollY: true, enableBackToTop: true, bubble: "true" }
    },
    [
      _c("div", { staticClass: ["page"] }, [
        _c("scroller", [
          _c("div", { staticClass: ["user-section-bg"] }),
          _c("div", { staticClass: ["user-section"] }, [
            _c("div", { staticClass: ["user-info-box"] }, [
              _c(
                "div",
                { staticClass: ["portrait-box"] },
                [
                  _c("u-image", {
                    staticClass: ["portrait"],
                    attrs: {
                      src:
                        _vm.userInfo.HeadImageUrl || "/static/missing-face.png"
                    }
                  })
                ],
                1
              ),
              _c("div", { staticClass: ["info-box"] }, [
                _c(
                  "u-text",
                  { staticClass: ["username"], on: { click: _vm.navToLogin } },
                  [_vm._v(_vm._s(_vm.userInfo.UserName || "去登陆1"))]
                ),
                _vm.hasLogin
                  ? _c("u-text", { staticClass: ["department"] }, [
                      _vm._v("派送方：" + _vm._s(_vm.userInfo.DepartmentName))
                    ])
                  : _vm._e(),
                _vm.hasLogin
                  ? _c("div", { staticClass: ["tag-box"] }, [
                      _c("u-text", { staticClass: ["tag-phone"] }, [
                        _vm._v("销售经理：" + _vm._s(_vm.userInfo.Salesman))
                      ]),
                      _c("u-text", { staticClass: ["tag-phone"] }, [
                        _vm._v("上级领导：" + _vm._s(_vm.userInfo.Salessuper))
                      ])
                    ])
                  : _vm._e()
              ])
            ]),
            _vm.hasLogin
              ? _c("div", { staticClass: ["tj-sction"] }, [
                  _c("div", { staticClass: ["tj-item"] }, [
                    _c("u-text", { staticClass: ["money"] }, [_vm._v("128.8")]),
                    _c("u-text", { staticClass: ["money-title"] }, [
                      _vm._v("余额")
                    ])
                  ]),
                  _c("div", { staticClass: ["tj-item"] }, [
                    _c("u-text", { staticClass: ["money"] }, [_vm._v("10")]),
                    _c("u-text", { staticClass: ["money-title"] }, [
                      _vm._v("优惠券")
                    ])
                  ])
                ])
              : _vm._e()
          ]),
          _c("div", { staticClass: ["user-section-bottom-bg"] }),
          _c("div", { staticClass: ["sec-header"] }, [
            _c("u-text", { staticClass: ["sec-header-t"] }, [
              _vm._v("我的订单")
            ])
          ]),
          _c("div", { staticClass: ["order-section"] }, [
            _c("div", { staticClass: ["order-item"] }, [
              _c(
                "u-text",
                {
                  staticClass: ["mallicon"],
                  staticStyle: { fontFamily: "mallicon" }
                },
                [_vm._v("")]
              ),
              _c("u-text", { staticClass: ["order-icon-title"] }, [
                _vm._v("未付款")
              ])
            ]),
            _c("div", { staticClass: ["order-item"] }, [
              _c(
                "u-text",
                {
                  staticClass: ["mallicon"],
                  staticStyle: { fontFamily: "mallicon" }
                },
                [_vm._v("")]
              ),
              _c("u-text", { staticClass: ["order-icon-title"] }, [
                _vm._v("已受理")
              ])
            ]),
            _c("div", { staticClass: ["order-item"] }, [
              _c(
                "u-text",
                {
                  staticClass: ["mallicon"],
                  staticStyle: { fontFamily: "mallicon" }
                },
                [_vm._v("")]
              ),
              _c("u-text", { staticClass: ["order-icon-title"] }, [
                _vm._v("已发货")
              ])
            ]),
            _c("div", { staticClass: ["order-item"] }, [
              _c(
                "u-text",
                {
                  staticClass: ["mallicon"],
                  staticStyle: { fontFamily: "mallicon" }
                },
                [_vm._v("")]
              ),
              _c("u-text", { staticClass: ["order-icon-title"] }, [
                _vm._v("退货/退款")
              ])
            ])
          ]),
          _vm.hasLogin
            ? _c("div", { staticClass: ["sec-header"] }, [
                _c("u-text", { staticClass: ["sec-header-t"] }, [
                  _vm._v("我的工具")
                ])
              ])
            : _vm._e(),
          _vm.hasLogin
            ? _c(
                "div",
                { staticClass: ["tools-section"] },
                _vm._l(_vm.toolItems, function(item, index) {
                  return _c(
                    "div",
                    {
                      key: index,
                      staticClass: ["tools-item"],
                      attrs: { hoverClass: "common-hover", hoverStayTime: 50 }
                    },
                    [
                      _c(
                        "view",
                        { staticClass: ["item-img"] },
                        [
                          _c("u-image", {
                            staticStyle: { width: "60upx", height: "66upx" },
                            attrs: { src: item.src }
                          })
                        ],
                        1
                      ),
                      _c("u-text", { staticClass: ["item-title"] }, [
                        _vm._v(_vm._s(item.title))
                      ])
                    ]
                  )
                }),
                0
              )
            : _vm._e()
        ])
      ])
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 12 */
/*!*************************************************************************************************!*\
  !*** E:/HBuilder_WorkSpace/uni-mall/pages/tabBar/user.nvue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_user_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./user.nvue?vue&type=script&lang=js&mpType=page */ 13);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_user_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_user_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_user_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_user_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_user_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 13 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/HBuilder_WorkSpace/uni-mall/pages/tabBar/user.nvue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, __f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;








































































var _vuex = __webpack_require__(/*! vuex */ 15);function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var globalEvent = weex.requireModule('globalEvent');var _default = { data: function data() {return { toolItems: [{ src: "/static/user/bgblock_01.png", title: "建议订单" }, { src: "/static/user/bgblock_02.png", title: "销售订单" }, { src: "/static/user/bgblock_01.png", title: "客户退单" }, { src: "/static/user/bgblock_03.png", title: "库存管理" }, { src: "/static/user/bgblock_04.png", title: "我的奖励" }, { src: "/static/user/bgblock_05.png", title: "我的账单" }, { src: "/static/user/bgblock_06.png", title: "被拜访记录" }, { src: "/static/user/bgblock_07.png", title: "广告形象" }, { src: "/static/user/bgblock_08.png", title: "合同管理" }, { src: "/static/user/bgblock_09.png", title: "发票管理" }, { src: "/static/user/bgblock_10.png", title: "客户商品管理" }, { src: "/static/user/bgblock_11.png", title: "我的卡券" }] };}, computed: _objectSpread({}, (0, _vuex.mapState)(['hasLogin', 'userInfo'])), beforeCreate: function beforeCreate() {// https://weex.apache.org/zh/docs/modules/dom.html#addrule
    var domModule = weex.requireModule("dom");domModule.addRule('fontFace', { 'fontFamily': 'mallicon', 'src': "url('https://at.alicdn.com/t/font_1078604_w4kpxh0rafi.ttf')" });}, created: function created() {uni.onNavigationBarButtonTap(function (e) {uni.navigateTo({ url: '/pages/setting/setting' });});globalEvent.addEventListener("plusMessage", function (e) {__f__("log", e.data, " at pages\\tabBar\\user.nvue:137");});}, methods: { navToLogin: function navToLogin() {if (!this.hasLogin) {uni.navigateTo({ url: '/pages/login/login' });
      }
    },
    /**
        * 统一跳转接口,拦截未登录路由
        * navigator标签现在默认没有转场动画，所以用view
        */
    navTo: function navTo(url) {
      if (!this.hasLogin) {
        url = '/pages/login/login';
      }
      uni.navigateTo({
        url: url });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 14)["default"]))

/***/ }),
/* 14 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type]['apply'](console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v);

    if (type.toLowerCase() === '[object object]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---';
      } catch (e) {
        v = '[object object]';
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 15 */
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: Store, install, mapState, mapMutations, mapGetters, mapActions, createNamespacedHelpers, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "Store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  var state = options.state; if ( state === void 0 ) state = {};
  if (typeof state === 'function') {
    state = state() || {};
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  if (true) {
    assert(false, "Use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
     true &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  this._actionSubscribers.forEach(function (sub) { return sub(action, this$1.state); });

  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  return genericSubscribe(fn, this._subscribers)
};

Store.prototype.subscribeAction = function subscribeAction (fn) {
  return genericSubscribe(fn, this._actionSubscribers)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function genericSubscribe (fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if (true) {
      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if ( true && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ( true && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '3.0.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};


/* harmony default export */ __webpack_exports__["default"] = (index_esm);


/***/ }),
/* 16 */
/*!*********************************************************************************************************!*\
  !*** E:/HBuilder_WorkSpace/uni-mall/pages/tabBar/user.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_user_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./user.nvue?vue&type=style&index=0&lang=css&mpType=page */ 17);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_user_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_user_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_user_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_user_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_user_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 17 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/HBuilder_WorkSpace/uni-mall/pages/tabBar/user.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "mallicon": {
    "fontSize": "66rpx",
    "marginBottom": "10rpx",
    "color": "#8F9298"
  },
  "page": {
    "width": "750rpx",
    "flex": 1,
    "backgroundColor": "#f5f5f5"
  },
  "user-section-bg": {
    "width": "750rpx",
    "position": "absolute",
    "height": "100rpx",
    "backgroundColor": "#e9323d",
    "borderBottomLeftRadius": 50,
    "borderBottomRightRadius": 50
  },
  "user-section": {
    "height": "360rpx",
    "paddingTop": "30rpx",
    "paddingRight": "30rpx",
    "paddingBottom": 0,
    "paddingLeft": "30rpx",
    "marginTop": 0,
    "marginRight": "30rpx",
    "marginBottom": 0,
    "marginLeft": "30rpx",
    "alignItems": "center",
    "position": "relative",
    "backgroundColor": "#ffffff",
    "borderRadius": "10rpx"
  },
  "user-info-box": {
    "height": "180rpx",
    "flexDirection": "row",
    "alignItems": "center",
    "position": "relative",
    "zIndex": 1
  },
  "portrait-box": {
    "width": "132rpx",
    "height": "132rpx",
    "borderRadius": "76rpx",
    "backgroundColor": "#F5F5F5"
  },
  "portrait": {
    "width": "130rpx",
    "height": "130rpx",
    "borderRadius": "75rpx"
  },
  "info-box": {
    "flexDirection": "column",
    "justifyContent": "center",
    "width": "500rpx"
  },
  "username": {
    "fontSize": "32rpx",
    "color": "#303133",
    "marginLeft": "20rpx"
  },
  "department": {
    "fontSize": "24rpx",
    "color": "#606266",
    "marginLeft": "20rpx",
    "marginTop": "30rpx"
  },
  "tag-box": {
    "flexDirection": "row",
    "marginTop": "30rpx"
  },
  "tag-phone": {
    "fontSize": "24rpx",
    "color": "#ffffff",
    "marginLeft": "10rpx",
    "marginRight": "20rpx",
    "paddingTop": "8rpx",
    "paddingRight": "15rpx",
    "paddingBottom": "8rpx",
    "paddingLeft": "15rpx",
    "textAlign": "center",
    "borderRadius": "20rpx",
    "backgroundColor": "#F96D73"
  },
  "tj-sction": {
    "flexDirection": "row",
    "backgroundColor": "#ffffff",
    "borderRadius": "10rpx",
    "justifyContent": "space-between",
    "marginTop": "10rpx",
    "paddingTop": 0,
    "paddingRight": "60rpx",
    "paddingBottom": 0,
    "paddingLeft": "60rpx",
    "width": "690rpx"
  },
  "tj-item": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "height": "140rpx"
  },
  "money": {
    "fontSize": "32rpx",
    "color": "#303133",
    "marginBottom": "8rpx"
  },
  "money-title": {
    "fontSize": "24rpx",
    "color": "#75787d"
  },
  "user-section-bottom-bg": {
    "width": "690rpx",
    "height": "10rpx",
    "backgroundColor": "#e9323d",
    "borderBottomLeftRadius": "10rpx",
    "borderBottomRightRadius": "10rpx",
    "marginLeft": "30rpx"
  },
  "sec-header": {
    "flexDirection": "row",
    "alignItems": "center",
    "backgroundColor": "#ffffff",
    "height": "80rpx",
    "marginTop": "30rpx",
    "paddingTop": "0rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "0rpx",
    "paddingLeft": "30rpx"
  },
  "sec-header-t": {
    "fontSize": "28rpx",
    "color": "#303133"
  },
  "order-section": {
    "flexDirection": "row",
    "justifyContent": "space-around",
    "backgroundColor": "#ffffff",
    "paddingTop": "0rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "30rpx",
    "paddingLeft": "30rpx"
  },
  "order-item": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "width": "120rpx",
    "height": "120rpx"
  },
  "order-icon-title": {
    "fontSize": "24rpx",
    "color": "#303133"
  },
  "tools-section": {
    "flexDirection": "row",
    "backgroundColor": "#ffffff",
    "paddingTop": "0rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "30rpx",
    "paddingLeft": "30rpx",
    "width": "750rpx",
    "flexWrap": "wrap"
  },
  "tools-item": {
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center",
    "marginBottom": "50rpx",
    "width": "172rpx"
  },
  "item-img": {
    "height": "80rpx"
  },
  "item-title": {
    "fontSize": "24rpx",
    "color": "#303133",
    "marginTop": "30rpx",
    "width": "172rpx",
    "textAlign": "center"
  }
}

/***/ }),
/* 18 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    options.components = Object.assign(components, options.components || {})
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy9FOi9IQnVpbGRlcl9Xb3JrU3BhY2UvdW5pLW1hbGwvbWFpbi5qcz83NjAwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdW5pLXN0YXQvZGlzdC9pbmRleC5qcz85MjFiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3VuaS1hcHAtcGx1cy1udnVlLXY4L2Rpc3QvaW5kZXguanM/OTkyYSIsIndlYnBhY2s6Ly8vRTovSEJ1aWxkZXJfV29ya1NwYWNlL3VuaS1tYWxsL3BhZ2VzLmpzb24/YmM2NiIsIndlYnBhY2s6Ly8vRTovSEJ1aWxkZXJfV29ya1NwYWNlL3VuaS1tYWxsL3BhZ2VzLmpzb24/ZmI1MiIsIndlYnBhY2s6Ly8vRTovSEJ1aWxkZXJfV29ya1NwYWNlL3VuaS1tYWxsL21haW4uanM/ZTA0OCIsIndlYnBhY2s6Ly8vRTovSEJ1aWxkZXJfV29ya1NwYWNlL3VuaS1tYWxsL0FwcC52dWU/MWJjZSIsIndlYnBhY2s6Ly8vRTovSEJ1aWxkZXJfV29ya1NwYWNlL3VuaS1tYWxsL0FwcC52dWU/NmI3OCIsIndlYnBhY2s6Ly8vRTovSEJ1aWxkZXJfV29ya1NwYWNlL3VuaS1tYWxsL3BhZ2VzL3RhYkJhci91c2VyLm52dWU/ZjA2MiIsIndlYnBhY2s6Ly8vRTovSEJ1aWxkZXJfV29ya1NwYWNlL3VuaS1tYWxsL3BhZ2VzL3RhYkJhci91c2VyLm52dWU/NGE0NiIsIndlYnBhY2s6Ly8vRTovSEJ1aWxkZXJfV29ya1NwYWNlL3VuaS1tYWxsL3BhZ2VzL3RhYkJhci91c2VyLm52dWU/NmE1YiIsIndlYnBhY2s6Ly8vRTovSEJ1aWxkZXJfV29ya1NwYWNlL3VuaS1tYWxsL3BhZ2VzL3RhYkJhci91c2VyLm52dWU/YTFkYiIsInVuaS1hcHA6Ly8vcGFnZXMvdGFiQmFyL3VzZXIubnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9saWIvZm9ybWF0LWxvZy5qcz8wZGU5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV4L2Rpc3QvdnVleC5lc20uanM/MmY2MiIsIndlYnBhY2s6Ly8vRTovSEJ1aWxkZXJfV29ya1NwYWNlL3VuaS1tYWxsL3BhZ2VzL3RhYkJhci91c2VyLm52dWU/OTc1MSIsIndlYnBhY2s6Ly8vRTovSEJ1aWxkZXJfV29ya1NwYWNlL3VuaS1tYWxsL3BhZ2VzL3RhYkJhci91c2VyLm52dWU/NWI5NiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanM/ZjBjNSJdLCJuYW1lcyI6WyJTVEFUX1ZFUlNJT04iLCJ2ZXJzaW9uIiwiU1RBVF9VUkwiLCJTVEFUX0g1X1VSTCIsIlBBR0VfUFZFUl9USU1FIiwiQVBQX1BWRVJfVElNRSIsIk9QRVJBVElOR19USU1FIiwiVVVJRF9LRVkiLCJVVUlEX1ZBTFVFIiwiZ2V0VXVpZCIsInV1aWQiLCJnZXRQbGF0Zm9ybU5hbWUiLCJwbHVzIiwicnVudGltZSIsImdldERDbG91ZElkIiwiZSIsInVuaSIsImdldFN0b3JhZ2VTeW5jIiwiRGF0ZSIsIm5vdyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNldFN0b3JhZ2VTeW5jIiwiZ2V0U2dpbiIsInN0YXREYXRhIiwiYXJyIiwiT2JqZWN0Iiwia2V5cyIsInNvcnRBcnIiLCJzb3J0Iiwic2dpbiIsInNnaW5TdHIiLCJpIiwic2lnbiIsIm9wdGlvbnMiLCJzdWJzdHIiLCJsZW5ndGgiLCJnZXRTcGxpY2luZyIsImRhdGEiLCJzdHIiLCJnZXRUaW1lIiwicGFyc2VJbnQiLCJwbGF0Zm9ybUxpc3QiLCJwcm9jZXNzIiwiZ2V0UGFja05hbWUiLCJwYWNrTmFtZSIsImNhbklVc2UiLCJnZXRBY2NvdW50SW5mb1N5bmMiLCJtaW5pUHJvZ3JhbSIsImFwcElkIiwiZ2V0VmVyc2lvbiIsImdldENoYW5uZWwiLCJwbGF0Zm9ybU5hbWUiLCJjaGFubmVsIiwiZ2V0U2NlbmUiLCJzY2VuZSIsImdldExhdW5jaE9wdGlvbnNTeW5jIiwiRmlyc3RfX1Zpc2l0X19UaW1lX19LRVkiLCJMYXN0X19WaXNpdF9fVGltZV9fS0VZIiwiZ2V0Rmlyc3RWaXNpdFRpbWUiLCJ0aW1lU3RvcmdlIiwidGltZSIsInJlbW92ZVN0b3JhZ2VTeW5jIiwiZ2V0TGFzdFZpc2l0VGltZSIsIlBBR0VfUkVTSURFTkNFX1RJTUUiLCJGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lIiwiTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lIiwic2V0UGFnZVJlc2lkZW5jZVRpbWUiLCJnZXRQYWdlUmVzaWRlbmNlVGltZSIsIlRPVEFMX19WSVNJVF9fQ09VTlQiLCJnZXRUb3RhbFZpc2l0Q291bnQiLCJjb3VudCIsIkdldEVuY29kZVVSSUNvbXBvbmVudE9wdGlvbnMiLCJwcm9wIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiU2V0X19GaXJzdF9fVGltZSIsIlNldF9fTGFzdF9fVGltZSIsImdldEZpcnN0VGltZSIsImdldExhc3RUaW1lIiwiZ2V0UmVzaWRlbmNlVGltZSIsInR5cGUiLCJyZXNpZGVuY2VUaW1lIiwib3ZlcnRpbWUiLCJnZXRSb3V0ZSIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwicGFnZSIsIl9zZWxmIiwiJHZtIiwiJG1wIiwiaXMiLCIkc2NvcGUiLCJyb3V0ZSIsImdldFBhZ2VSb3V0ZSIsInNlbGYiLCJxdWVyeSIsIl9xdWVyeSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRQYWdlVHlwZXMiLCJtcFR5cGUiLCIkb3B0aW9ucyIsImNhbGlicmF0aW9uIiwiZXZlbnROYW1lIiwiY29uc29sZSIsImVycm9yIiwiUGFnZXNKc29uIiwicmVxdWlyZSIsImRlZmF1bHQiLCJzdGF0Q29uZmlnIiwicmVzdWx0T3B0aW9ucyIsImdldFN5c3RlbUluZm9TeW5jIiwiVXRpbCIsIl9yZXRyeSIsIl9wbGF0Zm9ybSIsIl9uYXZpZ2F0aW9uQmFyVGl0bGUiLCJjb25maWciLCJyZXBvcnQiLCJsdCIsIl9vcGVyYXRpbmdUaW1lIiwiX3JlcG9ydGluZ1JlcXVlc3REYXRhIiwiX19wcmV2ZW50X3RyaWdnZXJpbmciLCJfX2xpY2F0aW9uSGlkZSIsIl9fbGljYXRpb25TaG93IiwiX2xhc3RQYWdlUm91dGUiLCJ1dCIsIm1wbiIsImFrIiwiYXBwaWQiLCJ1c3YiLCJ2IiwiY2giLCJjbiIsInBuIiwiY3QiLCJ0IiwidHQiLCJwIiwicGxhdGZvcm0iLCJicmFuZCIsIm1kIiwibW9kZWwiLCJzdiIsInN5c3RlbSIsInJlcGxhY2UiLCJtcHNkayIsIlNES1ZlcnNpb24iLCJtcHYiLCJsYW5nIiwibGFuZ3VhZ2UiLCJwciIsInBpeGVsUmF0aW8iLCJ3dyIsIndpbmRvd1dpZHRoIiwid2giLCJ3aW5kb3dIZWlnaHQiLCJzdyIsInNjcmVlbldpZHRoIiwic2giLCJzY3JlZW5IZWlnaHQiLCJwYXRoIiwic2MiLCJfc2VuZFJlcG9ydFJlcXVlc3QiLCJfc2VuZEhpZGVSZXF1ZXN0IiwidXJscmVmIiwidXJscmVmX3RzIiwicm91dGVwYXRoIiwidGl0bGVOVmlldyIsInRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJfc2VuZFBhZ2VSZXF1ZXN0IiwidXJsIiwiX3NlbmRFdmVudFJlcXVlc3QiLCJrZXkiLCJmdnRzIiwibHZ0cyIsInR2YyIsImdldFByb3BlcnR5IiwiZ2V0TmV0d29ya0luZm8iLCJvcHQiLCJyZXF1ZXN0IiwidmFsdWUiLCJlX24iLCJlX3YiLCJ0b1N0cmluZyIsImdldE5ldHdvcmtUeXBlIiwic3VjY2VzcyIsInJlc3VsdCIsIm5ldCIsIm5ldHdvcmtUeXBlIiwiZ2V0TG9jYXRpb24iLCJ3Z3RpbmZvIiwiZ2VvY29kZSIsImFkZHJlc3MiLCJjb3VudHJ5IiwicHJvdmluY2UiLCJjaXR5IiwibGF0IiwibGF0aXR1ZGUiLCJsbmciLCJsb25naXR1ZGUiLCJ0aXRsZSIsInR0biIsInR0cGoiLCJ0dGMiLCJyZXF1ZXN0RGF0YSIsInB1c2giLCJ1bmlTdGF0RGF0YSIsImZpcnN0QXJyIiwiY29udGVudEFyciIsImxhc3RBcnIiLCJyZCIsImZvckVhY2giLCJlbG0iLCJuZXdEYXRhIiwib3B0aW9uc0RhdGEiLCJyZXF1ZXN0cyIsImltYWdlUmVxdWVzdCIsInNldFRpbWVvdXQiLCJfc2VuZFJlcXVlc3QiLCJtZXRob2QiLCJmYWlsIiwiaW1hZ2UiLCJJbWFnZSIsInNyYyIsIlN0YXQiLCJpbnN0YW5jZSIsImFkZEludGVyY2VwdG9yIiwiYWRkSW50ZXJjZXB0b3JJbml0IiwiaW50ZXJjZXB0TG9naW4iLCJpbnRlcmNlcHRTaGFyZSIsImludGVyY2VwdFJlcXVlc3RQYXltZW50IiwiaW52b2tlIiwiYXJncyIsImNvbXBsZXRlIiwiX2xvZ2luIiwiX3NoYXJlIiwiX3BheW1lbnQiLCJfcGFnZVNob3ciLCJfYXBwbGljYXRpb25TaG93IiwiX3BhZ2VIaWRlIiwiX2FwcGxpY2F0aW9uSGlkZSIsImVtIiwiaW5mbyIsImVtVmFsIiwibWVzc2FnZSIsInN0YWNrIiwic3RhdCIsImdldEluc3RhbmNlIiwiaXNIaWRlIiwibGlmZWN5Y2xlIiwib25MYXVuY2giLCJvblJlYWR5IiwicmVhZHkiLCJvbkxvYWQiLCJsb2FkIiwib25TaGFyZUFwcE1lc3NhZ2UiLCJvbGRTaGFyZUFwcE1lc3NhZ2UiLCJjYWxsIiwib25TaG93Iiwic2hvdyIsIm9uSGlkZSIsImhpZGUiLCJvblVubG9hZCIsIm9uRXJyb3IiLCJtYWluIiwiaW5pdFVuaSIsImlzRm4iLCJoYW5kbGVQcm9taXNlIiwicHJvbWlzZSIsInRoZW4iLCJjYXRjaCIsImVyciIsIlJFR0VYIiwiQVBJX05PUk1BTF9MSVNUIiwic2hvdWxkUHJvbWlzZSIsIm5hbWUiLCJ0ZXN0IiwiaW5kZXhPZiIsInByb21pc2lmeSIsImFwaSIsIl9sZW4iLCJhcmd1bWVudHMiLCJwYXJhbXMiLCJBcnJheSIsIl9rZXkiLCJ1bmRlZmluZWQiLCJhcHBseSIsImNvbmNhdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZmluYWxseSIsImNhbGxiYWNrIiwiY29uc3RydWN0b3IiLCJyZWFzb24iLCJvbk1lc3NhZ2VDYWxsYmFja3MiLCJvcmlnaW4iLCJvblN1Yk5WdWVNZXNzYWdlIiwid2Vidmlld0lkIiwid2VleFBsdXMiLCJ3ZWJ2aWV3IiwiY3VycmVudFdlYnZpZXciLCJpZCIsIkJyb2FkY2FzdENoYW5uZWwiLCJvbm1lc3NhZ2UiLCJldmVudCIsInRvIiwid3JhcHBlciIsIiRwcm9jZXNzZWQiLCJjdXJyZW50V2Vidmlld0lkIiwiaXNQb3B1cE5WdWUiLCJob3N0TlZ1ZUlkIiwiX191bmlhcHBfb3JpZ2luX3R5cGUiLCJfX3VuaWFwcF9vcmlnaW5faWQiLCJwb3B1cE5WdWVJZCIsInBvc3RNZXNzYWdlIiwib25NZXNzYWdlIiwiX191bmlhcHBfbWFza19pZCIsIl9fdW5pYXBwX2hvc3QiLCJtYXNrQ29sb3IiLCJfX3VuaWFwcF9tYXNrIiwibWFza1dlYnZpZXciLCJnZXRXZWJ2aWV3QnlJZCIsInBhcmVudCIsIm9sZFNob3ciLCJvbGRIaWRlIiwib2xkQ2xvc2UiLCJjbG9zZSIsInNob3dNYXNrIiwic2V0U3R5bGUiLCJtYXNrIiwiY2xvc2VNYXNrIiwiX2xlbjIiLCJfa2V5MiIsIl9sZW4zIiwiX2tleTMiLCJnZXRTdWJOVnVlQnlJZCIsImdldEN1cnJlbnRTdWJOVnVlIiwid2VleCIsInJlcXVpcmVNb2R1bGUiLCJnbG9iYWxFdmVudCIsImNhbGxiYWNrcyIsIlVOSUFQUF9TRVJWSUNFX05WVUVfSUQiLCJhZGRFdmVudExpc3RlbmVyIiwib25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2siLCJvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWRDYWxsYmFjayIsIm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkQ2FsbGJhY2siLCJvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWRDYWxsYmFjayIsImNyZWF0ZUNhbGxiYWNrIiwicmVzIiwiZXJyTXNnIiwia2VlcEFsaXZlIiwiY2FsbGJhY2tJZCIsInB1Ymxpc2giLCJfcmVmIiwiY3JlYXRlUHVibGlzaCIsIm9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcCIsIm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZCIsIm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkIiwib25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkIiwicmVxdWlyZU5hdGl2ZVBsdWdpbiIsInBsdWdpbk5hbWUiLCJkb20iLCJsb2FkRm9udEZhY2UiLCJmYW1pbHkiLCJzb3VyY2UiLCJkZXNjIiwiYWRkUnVsZSIsImZvbnRGYW1pbHkiLCJzdGF0dXMiLCJnbG9iYWxFdmVudCQxIiwiY2FsbGJhY2tzJDEiLCJpc1VuaUFwcFJlYWR5IiwiX3R5cGVvZiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwib2JqIiwic3RyZWFtIiwiTUVUSE9EX0dFVCIsIk1FVEhPRF9QT1NUIiwiQ09OVEVOVF9UWVBFX0pTT04iLCJDT05URU5UX1RZUEVfRk9STSIsInNlcmlhbGl6ZSIsImNvbnRlbnRUeXBlIiwidG9VcHBlckNhc2UiLCJ0b0xvd2VyQ2FzZSIsIm1hcCIsImpvaW4iLCJoZWFkZXIiLCJfcmVmJG1ldGhvZCIsIl9yZWYkZGF0YVR5cGUiLCJkYXRhVHlwZSIsInJlc3BvbnNlVHlwZSIsImFib3J0ZWQiLCJoYXNDb250ZW50VHlwZSIsImhlYWRlcnMiLCJmZXRjaCIsImJvZHkiLCJfcmVmMiIsIm9rIiwic3RhdHVzVGV4dCIsInJldCIsInN0YXR1c0NvZGUiLCJhYm9ydCIsInN0b3JhZ2UiLCJVTklBUFBfU1RPUkFHRV9EQVRBX1RZUEUiLCJnZXRTdG9yYWdlIiwiZ2V0SXRlbSIsInBhcnNlIiwic2V0U3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVTdG9yYWdlIiwiX3JlZjMiLCJyZW1vdmVJdGVtIiwiY2xlYXJTdG9yYWdlIiwiX3JlZjQiLCJjbGlwYm9hcmQiLCJnZXRDbGlwYm9hcmREYXRhIiwiZ2V0U3RyaW5nIiwic2V0Q2xpcGJvYXJkRGF0YSIsInNldFN0cmluZyIsImdldEVtaXR0ZXIiLCJnZXRVbmlFbWl0dGVyIiwiRW1pdHRlciIsIiRvbiIsIndhcm4iLCIkb2ZmIiwiJG9uY2UiLCIkZW1pdCIsImN0eCIsInNsaWNlIiwiZnJlZXplIiwid3giLCJ1cGxvYWRGaWxlIiwiZG93bmxvYWRGaWxlIiwiY2hvb3NlSW1hZ2UiLCJwcmV2aWV3SW1hZ2UiLCJnZXRJbWFnZUluZm8iLCJzYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtIiwiY2hvb3NlVmlkZW8iLCJzYXZlVmlkZW9Ub1Bob3Rvc0FsYnVtIiwic2F2ZUZpbGUiLCJnZXRTYXZlZEZpbGVMaXN0IiwiZ2V0U2F2ZWRGaWxlSW5mbyIsInJlbW92ZVNhdmVkRmlsZSIsIm9wZW5Eb2N1bWVudCIsImdldFN0b3JhZ2VJbmZvIiwiY2hvb3NlTG9jYXRpb24iLCJvcGVuTG9jYXRpb24iLCJnZXRTeXN0ZW1JbmZvIiwibWFrZVBob25lQ2FsbCIsInNjYW5Db2RlIiwic2V0U2NyZWVuQnJpZ2h0bmVzcyIsImdldFNjcmVlbkJyaWdodG5lc3MiLCJzZXRLZWVwU2NyZWVuT24iLCJ2aWJyYXRlTG9uZyIsInZpYnJhdGVTaG9ydCIsImFkZFBob25lQ29udGFjdCIsInNob3dUb2FzdCIsInNob3dMb2FkaW5nIiwiaGlkZVRvYXN0IiwiaGlkZUxvYWRpbmciLCJzaG93TW9kYWwiLCJzaG93QWN0aW9uU2hlZXQiLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJzZXROYXZpZ2F0aW9uQmFyQ29sb3IiLCJuYXZpZ2F0ZVRvIiwicmVkaXJlY3RUbyIsInJlTGF1bmNoIiwic3dpdGNoVGFiIiwibmF2aWdhdGVCYWNrIiwiZ2V0UHJvdmlkZXIiLCJsb2dpbiIsImdldFVzZXJJbmZvIiwic2hhcmUiLCJyZXF1ZXN0UGF5bWVudCIsInN1YnNjcmliZVB1c2giLCJ1bnN1YnNjcmliZVB1c2giLCJvblB1c2giLCJvZmZQdXNoIiwiYmFzZVVuaSIsIm9zIiwibnZ1ZSIsIlByb3h5IiwiZ2V0IiwidGFyZ2V0IiwiY3JlYXRlVW5pIiwiZ2V0VW5pIiwiV2VleFBsdXMiLCJ0eXBvZiIsInMiLCJzdWJzdHJpbmciLCJpc0RlYnVnTW9kZSIsIl9fY2hhbm5lbElkX18iLCJmb3JtYXRMb2ciLCJzaGlmdCIsInBvcCIsIm1zZ3MiLCJ2VHlwZSIsIlN0cmluZyIsIm1zZyIsImxhc3RNc2ciXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZBLFFBQW9DO0FBQ3BDLFFBQThCO0FBQzlCLFFBQThEO0FBQzlELFFBQVEsMkVBQUc7QUFDWCxRQUFRLDJFQUFHO0FBQ1gsUUFBUSwyRUFBRztBQUNYLGdCQUFnQiwyRUFBRzs7Ozs7Ozs7Ozs7O2lEQ1BuQiw2RDs7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLGdCQUFyQjtBQUNBLElBQU1DLFFBQVEsR0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDLDRCQUE0QjtBQUM1RCxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQSxHQUFHLEdBQUcseUJBQXlCO0FBQy9COztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUMsbUJBQW1CLEVBQUU7QUFDOUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTSxJQUFxQztBQUMzQztBQUNBOztBQUVBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsS0FBcUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQsb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFOztBQUVIO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVSxxQkFBcUIsRUFBRSxFQUFFO0FBQ2pFLDJDQUEyQyxVQUFVLDBCQUEwQixFQUFFLEVBQUU7QUFDbkY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVtRztBQUNwRix3RUFBUyxFQUFDOzs7Ozs7Ozs7Ozs7QUNsNkJ6QjtBQUFBO0FBQUE7QUFBQTtBQUFpdUIsQ0FBZ0Isb3ZCQUFHLEVBQUMsQzs7Ozs7Ozs7OztBQ0FydkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUN0TEE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkVBQTJFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoicGFnZXMvdGFiQmFyL3VzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJcbiAgICAgICAgaW1wb3J0ICdAZGNsb3VkaW8vdW5pLXN0YXQnO1xuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy90YWJCYXIvdXNlci5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy90YWJCYXIvdXNlcidcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIiwiaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJy4uL3BhY2thZ2UuanNvbic7XHJcblxyXG5jb25zdCBTVEFUX1ZFUlNJT04gPSB2ZXJzaW9uO1xyXG5jb25zdCBTVEFUX1VSTCA9ICdodHRwczovL3RvbmdqaS5kY2xvdWQuaW8vdW5pL3N0YXQnO1xyXG5jb25zdCBTVEFUX0g1X1VSTCA9ICdodHRwczovL3RvbmdqaS5kY2xvdWQuaW8vdW5pL3N0YXQuZ2lmJzsgXHJcbmNvbnN0IFBBR0VfUFZFUl9USU1FID0gMTgwMDtcclxuY29uc3QgQVBQX1BWRVJfVElNRSA9IDMwMDtcclxuY29uc3QgT1BFUkFUSU5HX1RJTUUgPSAxMDtcclxuXHJcbmNvbnN0IFVVSURfS0VZID0gJ19fRENfU1RBVF9VVUlEJztcclxuY29uc3QgVVVJRF9WQUxVRSA9ICdfX0RDX1VVSURfVkFMVUUnO1xyXG5cclxuZnVuY3Rpb24gZ2V0VXVpZCgpIHtcclxuICBsZXQgdXVpZCA9ICcnO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB1dWlkID0gcGx1cy5ydW50aW1lLmdldERDbG91ZElkKCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHV1aWQgPSAnJztcclxuICAgIH1cclxuICAgIHJldHVybiB1dWlkXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgdXVpZCA9IHVuaS5nZXRTdG9yYWdlU3luYyhVVUlEX0tFWSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgdXVpZCA9IFVVSURfVkFMVUU7XHJcbiAgfVxyXG5cclxuICBpZiAoIXV1aWQpIHtcclxuICAgIHV1aWQgPSBEYXRlLm5vdygpICsgJycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxZTcpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKFVVSURfS0VZLCB1dWlkKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKFVVSURfS0VZLCBVVUlEX1ZBTFVFKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHV1aWQ7XHJcbn1cclxuXHJcbmNvbnN0IGdldFNnaW4gPSAoc3RhdERhdGEpID0+IHtcclxuICBsZXQgYXJyID0gT2JqZWN0LmtleXMoc3RhdERhdGEpO1xyXG4gIGxldCBzb3J0QXJyID0gYXJyLnNvcnQoKTtcclxuICBsZXQgc2dpbiA9IHt9O1xyXG4gIGxldCBzZ2luU3RyID0gJyc7XHJcbiAgZm9yICh2YXIgaSBpbiBzb3J0QXJyKSB7XHJcbiAgICBzZ2luW3NvcnRBcnJbaV1dID0gc3RhdERhdGFbc29ydEFycltpXV07XHJcbiAgICBzZ2luU3RyICs9IHNvcnRBcnJbaV0gKyAnPScgKyBzdGF0RGF0YVtzb3J0QXJyW2ldXSArICcmJztcclxuICB9XHJcbiAgLy8gY29uc3Qgb3B0aW9ucyA9IHNnaW5TdHIuc3Vic3RyKDAsIHNnaW5TdHIubGVuZ3RoIC0gMSlcclxuICAvLyBzZ2luU3RyID0gc2dpblN0ci5zdWJzdHIoMCwgc2dpblN0ci5sZW5ndGggLSAxKSArICcma2V5PScgKyBTVEFUX0tFWTtcclxuICAvLyBjb25zdCBzaSA9IGNyeXB0by5jcmVhdGVIYXNoKCdtZDUnKS51cGRhdGUoc2dpblN0cikuZGlnZXN0KCdoZXgnKTtcclxuICByZXR1cm4ge1xyXG4gICAgc2lnbjogJycsXHJcbiAgICBvcHRpb25zOiBzZ2luU3RyLnN1YnN0cigwLCBzZ2luU3RyLmxlbmd0aCAtIDEpXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IGdldFNwbGljaW5nID0gKGRhdGEpID0+IHtcclxuICBsZXQgc3RyID0gJyc7XHJcbiAgZm9yICh2YXIgaSBpbiBkYXRhKSB7XHJcbiAgICBzdHIgKz0gaSArICc9JyArIGRhdGFbaV0gKyAnJic7XHJcbiAgfVxyXG4gIHJldHVybiBzdHIuc3Vic3RyKDAsIHN0ci5sZW5ndGggLSAxKVxyXG59O1xyXG5cclxuY29uc3QgZ2V0VGltZSA9ICgpID0+IHtcclxuICByZXR1cm4gcGFyc2VJbnQobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKTtcclxufTtcclxuXHJcbmNvbnN0IGdldFBsYXRmb3JtTmFtZSA9ICgpID0+IHtcclxuICBjb25zdCBwbGF0Zm9ybUxpc3QgPSB7XHJcbiAgICAnYXBwLXBsdXMnOiAnbicsXHJcbiAgICAnaDUnOiAnaDUnLFxyXG4gICAgJ21wLXdlaXhpbic6ICd3eCcsXHJcbiAgICAnbXAtYWxpcGF5JzogJ2FsaScsXHJcbiAgICAnbXAtYmFpZHUnOiAnYmQnLFxyXG4gICAgJ21wLXRvdXRpYW8nOiAndHQnLFxyXG4gICAgJ21wLXFxJzogJ3FxJ1xyXG4gIH07XHJcbiAgcmV0dXJuIHBsYXRmb3JtTGlzdFtwcm9jZXNzLmVudi5WVUVfQVBQX1BMQVRGT1JNXTtcclxufTtcclxuXHJcbmNvbnN0IGdldFBhY2tOYW1lID0gKCkgPT4ge1xyXG4gIGxldCBwYWNrTmFtZSA9ICcnO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ3d4JyB8fCBnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ3FxJykge1xyXG4gICAgLy8g5YW85a655b6u5L+h5bCP56iL5bqP5L2O54mI5pys5Z+656GA5bqTXHJcbiAgICBpZih1bmkuY2FuSVVzZSgnZ2V0QWNjb3VudEluZm9TeW5jJykpe1xyXG4gICAgICBwYWNrTmFtZSA9IHVuaS5nZXRBY2NvdW50SW5mb1N5bmMoKS5taW5pUHJvZ3JhbS5hcHBJZCB8fCAnJztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHBhY2tOYW1lXHJcbn07XHJcblxyXG5jb25zdCBnZXRWZXJzaW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiBnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nID8gcGx1cy5ydW50aW1lLnZlcnNpb24gOiAnJztcclxufTtcclxuXHJcbmNvbnN0IGdldENoYW5uZWwgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGxhdGZvcm1OYW1lID0gZ2V0UGxhdGZvcm1OYW1lKCk7XHJcbiAgbGV0IGNoYW5uZWwgPSAnJztcclxuICBpZiAocGxhdGZvcm1OYW1lID09PSAnbicpIHtcclxuICAgIGNoYW5uZWwgPSBwbHVzLnJ1bnRpbWUuY2hhbm5lbDtcclxuICB9XHJcbiAgcmV0dXJuIGNoYW5uZWw7XHJcbn07XHJcblxyXG5jb25zdCBnZXRTY2VuZSA9IChvcHRpb25zKSA9PiB7XHJcbiAgY29uc3QgcGxhdGZvcm1OYW1lID0gZ2V0UGxhdGZvcm1OYW1lKCk7XHJcbiAgbGV0IHNjZW5lID0gJyc7XHJcbiAgaWYgKG9wdGlvbnMpIHtcclxuICAgIHJldHVybiBvcHRpb25zO1xyXG4gIH1cclxuICBpZiAocGxhdGZvcm1OYW1lID09PSAnd3gnKSB7XHJcbiAgICBzY2VuZSA9IHVuaS5nZXRMYXVuY2hPcHRpb25zU3luYygpLnNjZW5lO1xyXG4gIH1cclxuICByZXR1cm4gc2NlbmU7XHJcbn07XHJcbmNvbnN0IEZpcnN0X19WaXNpdF9fVGltZV9fS0VZID0gJ0ZpcnN0X19WaXNpdF9fVGltZSc7XHJcbmNvbnN0IExhc3RfX1Zpc2l0X19UaW1lX19LRVkgPSAnTGFzdF9fVmlzaXRfX1RpbWUnO1xyXG5cclxuY29uc3QgZ2V0Rmlyc3RWaXNpdFRpbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGltZVN0b3JnZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSk7XHJcbiAgbGV0IHRpbWUgPSAwO1xyXG4gIGlmICh0aW1lU3RvcmdlKSB7XHJcbiAgICB0aW1lID0gdGltZVN0b3JnZTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGltZSA9IGdldFRpbWUoKTtcclxuICAgIHVuaS5zZXRTdG9yYWdlU3luYyhGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSwgdGltZSk7XHJcbiAgICB1bmkucmVtb3ZlU3RvcmFnZVN5bmMoTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSk7XHJcbiAgfVxyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0TGFzdFZpc2l0VGltZSA9ICgpID0+IHtcclxuICBjb25zdCB0aW1lU3RvcmdlID0gdW5pLmdldFN0b3JhZ2VTeW5jKExhc3RfX1Zpc2l0X19UaW1lX19LRVkpO1xyXG4gIGxldCB0aW1lID0gMDtcclxuICBpZiAodGltZVN0b3JnZSkge1xyXG4gICAgdGltZSA9IHRpbWVTdG9yZ2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRpbWUgPSAnJztcclxuICB9XHJcbiAgdW5pLnNldFN0b3JhZ2VTeW5jKExhc3RfX1Zpc2l0X19UaW1lX19LRVksIGdldFRpbWUoKSk7XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn07XHJcblxyXG5cclxuY29uc3QgUEFHRV9SRVNJREVOQ0VfVElNRSA9ICdfX3BhZ2VfX3Jlc2lkZW5jZV9fdGltZSc7XHJcbmxldCBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gMDtcclxubGV0IExhc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IDA7XHJcblxyXG5cclxuY29uc3Qgc2V0UGFnZVJlc2lkZW5jZVRpbWUgPSAoKSA9PiB7XHJcbiAgRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IGdldFRpbWUoKTtcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgdW5pLnNldFN0b3JhZ2VTeW5jKFBBR0VfUkVTSURFTkNFX1RJTUUsIGdldFRpbWUoKSk7XHJcbiAgfVxyXG4gIHJldHVybiBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lXHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWdlUmVzaWRlbmNlVGltZSA9ICgpID0+IHtcclxuICBMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSBnZXRUaW1lKCk7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoUEFHRV9SRVNJREVOQ0VfVElNRSk7XHJcbiAgfVxyXG4gIHJldHVybiBMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgLSBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lXHJcbn07XHJcbmNvbnN0IFRPVEFMX19WSVNJVF9fQ09VTlQgPSAnVG90YWxfX1Zpc2l0X19Db3VudCc7XHJcbmNvbnN0IGdldFRvdGFsVmlzaXRDb3VudCA9ICgpID0+IHtcclxuICBjb25zdCB0aW1lU3RvcmdlID0gdW5pLmdldFN0b3JhZ2VTeW5jKFRPVEFMX19WSVNJVF9fQ09VTlQpO1xyXG4gIGxldCBjb3VudCA9IDE7XHJcbiAgaWYgKHRpbWVTdG9yZ2UpIHtcclxuICAgIGNvdW50ID0gdGltZVN0b3JnZTtcclxuICAgIGNvdW50Kys7XHJcbiAgfVxyXG4gIHVuaS5zZXRTdG9yYWdlU3luYyhUT1RBTF9fVklTSVRfX0NPVU5ULCBjb3VudCk7XHJcbiAgcmV0dXJuIGNvdW50O1xyXG59O1xyXG5cclxuY29uc3QgR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyA9IChzdGF0RGF0YSkgPT4ge1xyXG4gIGxldCBkYXRhID0ge307XHJcbiAgZm9yIChsZXQgcHJvcCBpbiBzdGF0RGF0YSkge1xyXG4gICAgZGF0YVtwcm9wXSA9IGVuY29kZVVSSUNvbXBvbmVudChzdGF0RGF0YVtwcm9wXSk7XHJcbiAgfVxyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxubGV0IFNldF9fRmlyc3RfX1RpbWUgPSAwO1xyXG5sZXQgU2V0X19MYXN0X19UaW1lID0gMDtcclxuXHJcbmNvbnN0IGdldEZpcnN0VGltZSA9ICgpID0+IHtcclxuICBsZXQgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gIFNldF9fRmlyc3RfX1RpbWUgPSB0aW1lO1xyXG4gIFNldF9fTGFzdF9fVGltZSA9IDA7XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn07XHJcblxyXG5cclxuY29uc3QgZ2V0TGFzdFRpbWUgPSAoKSA9PiB7XHJcbiAgbGV0IHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICBTZXRfX0xhc3RfX1RpbWUgPSB0aW1lO1xyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IGdldFJlc2lkZW5jZVRpbWUgPSAodHlwZSkgPT4ge1xyXG4gIGxldCByZXNpZGVuY2VUaW1lID0gMDtcclxuICBpZiAoU2V0X19GaXJzdF9fVGltZSAhPT0gMCkge1xyXG4gICAgcmVzaWRlbmNlVGltZSA9IFNldF9fTGFzdF9fVGltZSAtIFNldF9fRmlyc3RfX1RpbWU7XHJcbiAgfVxyXG5cclxuICByZXNpZGVuY2VUaW1lID0gcGFyc2VJbnQocmVzaWRlbmNlVGltZSAvIDEwMDApO1xyXG4gIHJlc2lkZW5jZVRpbWUgPSByZXNpZGVuY2VUaW1lIDwgMSA/IDEgOiByZXNpZGVuY2VUaW1lO1xyXG4gIGlmICh0eXBlID09PSAnYXBwJykge1xyXG4gICAgbGV0IG92ZXJ0aW1lID0gcmVzaWRlbmNlVGltZSA+IEFQUF9QVkVSX1RJTUUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXNpZGVuY2VUaW1lLFxyXG4gICAgICBvdmVydGltZVxyXG4gICAgfTtcclxuICB9XHJcbiAgaWYgKHR5cGUgPT09ICdwYWdlJykge1xyXG4gICAgbGV0IG92ZXJ0aW1lID0gcmVzaWRlbmNlVGltZSA+IFBBR0VfUFZFUl9USU1FID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzaWRlbmNlVGltZSxcclxuICAgICAgb3ZlcnRpbWVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcmVzaWRlbmNlVGltZVxyXG4gIH07XHJcblxyXG59O1xyXG5cclxuY29uc3QgZ2V0Um91dGUgPSAoKSA9PiB7XHJcbiAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgdmFyIHBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAxXTtcclxuICBsZXQgX3NlbGYgPSBwYWdlLiR2bTtcclxuXHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnYmQnKSB7XHJcbiAgICByZXR1cm4gX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLmlzO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKF9zZWxmLiRzY29wZSAmJiBfc2VsZi4kc2NvcGUucm91dGUpIHx8IChfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2Uucm91dGUpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGdldFBhZ2VSb3V0ZSA9IChzZWxmKSA9PiB7XHJcbiAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgdmFyIHBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAxXTtcclxuICBsZXQgX3NlbGYgPSBwYWdlLiR2bTtcclxuICBsZXQgcXVlcnkgPSBzZWxmLl9xdWVyeTtcclxuICBsZXQgc3RyID0gcXVlcnkgJiYgSlNPTi5zdHJpbmdpZnkocXVlcnkpICE9PSAne30nID8gJz8nICsgSlNPTi5zdHJpbmdpZnkocXVlcnkpIDogJyc7XHJcbiAgLy8gY2xlYXJcclxuICBzZWxmLl9xdWVyeSA9ICcnO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ2JkJykge1xyXG4gICAgcmV0dXJuIF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5pcyArIHN0cjtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChfc2VsZi4kc2NvcGUgJiYgX3NlbGYuJHNjb3BlLnJvdXRlICsgc3RyICl8fCAoX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLnJvdXRlICsgc3RyKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWdlVHlwZXMgPSAoc2VsZikgPT4ge1xyXG4gIGlmIChzZWxmLm1wVHlwZSA9PT0gJ3BhZ2UnIHx8IChzZWxmLiRtcCAmJiBzZWxmLiRtcC5tcFR5cGUgPT09ICdwYWdlJykgfHwgc2VsZi4kb3B0aW9ucy5tcFR5cGUgPT09ICdwYWdlJykge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbmNvbnN0IGNhbGlicmF0aW9uID0gKGV2ZW50TmFtZSwgb3B0aW9ucykgPT4ge1xyXG4gIC8vICBsb2dpbiDjgIEgc2hhcmUg44CBcGF5X3N1Y2Nlc3Mg44CBcGF5X2ZhaWwg44CBcmVnaXN0ZXIg44CBdGl0bGVcclxuICBpZighZXZlbnROYW1lKXtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQg57y65bCRIFtldmVudE5hbWVdIOWPguaVsGApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgaWYgKHR5cGVvZiBldmVudE5hbWUgIT09ICdzdHJpbmcnKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtldmVudE5hbWVdIOWPguaVsOexu+Wei+mUmeivryzlj6rog73kuLogU3RyaW5nIOexu+Wei2ApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgaWYgKGV2ZW50TmFtZS5sZW5ndGggPiAyNTUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW2V2ZW50TmFtZV0g5Y+C5pWw6ZW/5bqm5LiN6IO95aSn5LqOIDI1NWApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtvcHRpb25zXSDlj4LmlbDnsbvlnovplJnor68s5Y+q6IO95Li6IFN0cmluZyDmiJYgT2JqZWN0IOexu+Wei2ApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycgJiYgb3B0aW9ucy5sZW5ndGggPiAyNTUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW29wdGlvbnNdIOWPguaVsOmVv+W6puS4jeiDveWkp+S6jiAyNTVgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAoZXZlbnROYW1lID09PSAndGl0bGUnICYmIHR5cGVvZiBvcHRpb25zICE9PSAnc3RyaW5nJykge1xyXG4gICAgY29uc29sZS5lcnJvcigndW5pLnJlcG9ydCBbZXZlbnROYW1lXSDlj4LmlbDkuLogdGl0bGUg5pe277yMW29wdGlvbnNdIOWPguaVsOWPquiDveS4uiBTdHJpbmcg57G75Z6LJyk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IFBhZ2VzSnNvbiA9IHJlcXVpcmUoJ3VuaS1wYWdlcz97XCJ0eXBlXCI6XCJzdHlsZVwifScpLmRlZmF1bHQ7XHJcbmNvbnN0IHN0YXRDb25maWcgPSByZXF1aXJlKCd1bmktc3RhdC1jb25maWcnKS5kZWZhdWx0IHx8IHJlcXVpcmUoJ3VuaS1zdGF0LWNvbmZpZycpO1xyXG5cclxuY29uc3QgcmVzdWx0T3B0aW9ucyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG5cclxuY2xhc3MgVXRpbCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnNlbGYgPSAnJztcclxuICAgIHRoaXMuX3JldHJ5ID0gMDtcclxuICAgIHRoaXMuX3BsYXRmb3JtID0gJyc7XHJcbiAgICB0aGlzLl9xdWVyeSA9IHt9O1xyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlID0ge1xyXG4gICAgICBjb25maWc6ICcnLFxyXG4gICAgICBwYWdlOiAnJyxcclxuICAgICAgcmVwb3J0OiAnJyxcclxuICAgICAgbHQ6ICcnXHJcbiAgICB9O1xyXG4gICAgdGhpcy5fb3BlcmF0aW5nVGltZSA9IDA7XHJcbiAgICB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YSA9IHtcclxuICAgICAgJzEnOiBbXSxcclxuICAgICAgJzExJzogW11cclxuICAgIH07XHJcbiAgICB0aGlzLl9fcHJldmVudF90cmlnZ2VyaW5nID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5fX2xpY2F0aW9uSGlkZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5fX2xpY2F0aW9uU2hvdyA9IGZhbHNlO1xyXG4gICAgdGhpcy5fbGFzdFBhZ2VSb3V0ZSA9ICcnO1xyXG4gICAgdGhpcy5zdGF0RGF0YSA9IHtcclxuICAgICAgdXVpZDogZ2V0VXVpZCgpLFxyXG4gICAgICB1dDogZ2V0UGxhdGZvcm1OYW1lKCksXHJcbiAgICAgIG1wbjogZ2V0UGFja05hbWUoKSxcclxuICAgICAgYWs6IHN0YXRDb25maWcuYXBwaWQsXHJcbiAgICAgIHVzdjogU1RBVF9WRVJTSU9OLFxyXG4gICAgICB2OiBnZXRWZXJzaW9uKCksXHJcbiAgICAgIGNoOiBnZXRDaGFubmVsKCksXHJcbiAgICAgIGNuOiAnJyxcclxuICAgICAgcG46ICcnLFxyXG4gICAgICBjdDogJycsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgdHQ6ICcnLFxyXG4gICAgICBwOiByZXN1bHRPcHRpb25zLnBsYXRmb3JtID09PSAnYW5kcm9pZCcgPyAnYScgOiAnaScsXHJcbiAgICAgIGJyYW5kOiByZXN1bHRPcHRpb25zLmJyYW5kIHx8ICcnLFxyXG4gICAgICBtZDogcmVzdWx0T3B0aW9ucy5tb2RlbCxcclxuICAgICAgc3Y6IHJlc3VsdE9wdGlvbnMuc3lzdGVtLnJlcGxhY2UoLyhBbmRyb2lkfGlPUylcXHMvLCAnJyksXHJcbiAgICAgIG1wc2RrOiByZXN1bHRPcHRpb25zLlNES1ZlcnNpb24gfHwgJycsXHJcbiAgICAgIG1wdjogcmVzdWx0T3B0aW9ucy52ZXJzaW9uIHx8ICcnLFxyXG4gICAgICBsYW5nOiByZXN1bHRPcHRpb25zLmxhbmd1YWdlLFxyXG4gICAgICBwcjogcmVzdWx0T3B0aW9ucy5waXhlbFJhdGlvLFxyXG4gICAgICB3dzogcmVzdWx0T3B0aW9ucy53aW5kb3dXaWR0aCxcclxuICAgICAgd2g6IHJlc3VsdE9wdGlvbnMud2luZG93SGVpZ2h0LFxyXG4gICAgICBzdzogcmVzdWx0T3B0aW9ucy5zY3JlZW5XaWR0aCxcclxuICAgICAgc2g6IHJlc3VsdE9wdGlvbnMuc2NyZWVuSGVpZ2h0XHJcbiAgICB9O1xyXG5cclxuICB9XHJcblxyXG4gIF9hcHBsaWNhdGlvblNob3coKSB7XHJcbiAgICBpZiAodGhpcy5fX2xpY2F0aW9uSGlkZSkge1xyXG4gICAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgnYXBwJyk7XHJcbiAgICAgIGlmICh0aW1lLm92ZXJ0aW1lKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICBwYXRoOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxyXG4gICAgICAgICAgc2NlbmU6IHRoaXMuc3RhdERhdGEuc2NcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX19saWNhdGlvbkhpZGUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9hcHBsaWNhdGlvbkhpZGUoc2VsZiwgdHlwZSkge1xyXG5cclxuICAgIHRoaXMuX19saWNhdGlvbkhpZGUgPSB0cnVlO1xyXG4gICAgZ2V0TGFzdFRpbWUoKTtcclxuICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCk7XHJcbiAgICBnZXRGaXJzdFRpbWUoKTtcclxuICAgIGNvbnN0IHJvdXRlID0gZ2V0UGFnZVJvdXRlKHRoaXMpO1xyXG4gICAgdGhpcy5fc2VuZEhpZGVSZXF1ZXN0KHtcclxuICAgICAgdXJscmVmOiByb3V0ZSxcclxuICAgICAgdXJscmVmX3RzOiB0aW1lLnJlc2lkZW5jZVRpbWVcclxuICAgIH0sIHR5cGUpO1xyXG4gIH1cclxuXHJcbiAgX3BhZ2VTaG93KCkge1xyXG4gICAgY29uc3Qgcm91dGUgPSBnZXRQYWdlUm91dGUodGhpcyk7XHJcbiAgICBjb25zdCByb3V0ZXBhdGggPSBnZXRSb3V0ZSgpO1xyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLmNvbmZpZyA9IFBhZ2VzSnNvbiAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXSAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXS50aXRsZU5WaWV3ICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdLnRpdGxlTlZpZXcudGl0bGVUZXh0IHx8XHJcbiAgICAgIFBhZ2VzSnNvbiAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXSAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXS5uYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IHx8ICcnO1xyXG5cclxuICAgIGlmICh0aGlzLl9fbGljYXRpb25TaG93KSB7XHJcbiAgICAgIGdldEZpcnN0VGltZSgpO1xyXG4gICAgICB0aGlzLl9fbGljYXRpb25TaG93ID0gZmFsc2U7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCfov5nmmK8gb25MYXVjaCDkuYvlkI7miafooYznmoTnrKzkuIDmrKEgcGFnZVNob3cg77yM5Li65LiL5qyh6K6w5b2V5pe26Ze05YGa5YeG5aSHJyk7XHJcbiAgICAgIHRoaXMuX2xhc3RQYWdlUm91dGUgPSByb3V0ZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICB0aGlzLl9sYXN0UGFnZVJvdXRlID0gcm91dGU7XHJcbiAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgncGFnZScpO1xyXG4gICAgaWYgKHRpbWUub3ZlcnRpbWUpIHtcclxuICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgcGF0aDogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICBzY2VuZTogdGhpcy5zdGF0RGF0YS5zY1xyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLl9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zKTtcclxuICAgIH1cclxuICAgIGdldEZpcnN0VGltZSgpO1xyXG4gIH1cclxuXHJcbiAgX3BhZ2VIaWRlKCkge1xyXG4gICAgaWYgKCF0aGlzLl9fbGljYXRpb25IaWRlKSB7XHJcbiAgICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCdwYWdlJyk7XHJcbiAgICAgIHRoaXMuX3NlbmRQYWdlUmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxyXG4gICAgICAgIHVybHJlZjogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICB1cmxyZWZfdHM6IHRpbWUucmVzaWRlbmNlVGltZVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlID0ge1xyXG4gICAgICAgIGNvbmZpZzogJycsXHJcbiAgICAgICAgcGFnZTogJycsXHJcbiAgICAgICAgcmVwb3J0OiAnJyxcclxuICAgICAgICBsdDogJydcclxuICAgICAgfTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2xvZ2luKCkge1xyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleTogJ2xvZ2luJ1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG5cclxuICBfc2hhcmUoKSB7XHJcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgICAga2V5OiAnc2hhcmUnXHJcbiAgICB9LCAwKTtcclxuICB9XHJcbiAgX3BheW1lbnQoa2V5KSB7XHJcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgICAga2V5XHJcbiAgICB9LCAwKTtcclxuICB9XHJcbiAgX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMpIHtcclxuXHJcbiAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUubHQgPSAnMSc7XHJcbiAgICBsZXQgcXVlcnkgPSBvcHRpb25zLnF1ZXJ5ICYmIEpTT04uc3RyaW5naWZ5KG9wdGlvbnMucXVlcnkpICE9PSAne30nID8gJz8nICsgSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5xdWVyeSkgOiAnJztcclxuICAgIHRoaXMuc3RhdERhdGEubHQgPSAnMSc7XHJcbiAgICB0aGlzLnN0YXREYXRhLnVybCA9IChvcHRpb25zLnBhdGggKyBxdWVyeSkgfHwgJyc7XHJcbiAgICB0aGlzLnN0YXREYXRhLnQgPSBnZXRUaW1lKCk7XHJcbiAgICB0aGlzLnN0YXREYXRhLnNjID0gZ2V0U2NlbmUob3B0aW9ucy5zY2VuZSk7XHJcbiAgICB0aGlzLnN0YXREYXRhLmZ2dHMgPSBnZXRGaXJzdFZpc2l0VGltZSgpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5sdnRzID0gZ2V0TGFzdFZpc2l0VGltZSgpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS50dmMgPSBnZXRUb3RhbFZpc2l0Q291bnQoKTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHRoaXMuZ2V0UHJvcGVydHkoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZ2V0TmV0d29ya0luZm8oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9zZW5kUGFnZVJlcXVlc3Qob3B0KSB7XHJcbiAgICBsZXQge1xyXG4gICAgICB1cmwsXHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzXHJcbiAgICB9ID0gb3B0O1xyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLmx0ID0gJzExJztcclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcclxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxyXG4gICAgICBsdDogJzExJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIHVybCxcclxuICAgICAgdHQ6IHRoaXMuc3RhdERhdGEudHQsXHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzLFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBfc2VuZEhpZGVSZXF1ZXN0KG9wdCwgdHlwZSkge1xyXG4gICAgbGV0IHtcclxuICAgICAgdXJscmVmLFxyXG4gICAgICB1cmxyZWZfdHNcclxuICAgIH0gPSBvcHQ7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICczJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzLFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucywgdHlwZSk7XHJcbiAgfVxyXG4gIF9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgIGtleSA9ICcnLFxyXG4gICAgdmFsdWUgPSBcIlwiXHJcbiAgfSA9IHt9KSB7XHJcbiAgICBjb25zdCByb3V0ZSA9IHRoaXMuX2xhc3RQYWdlUm91dGU7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICcyMScsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICB1cmw6IHJvdXRlLFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgZV9uOiBrZXksXHJcbiAgICAgIGVfdjogdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiB2YWx1ZS50b1N0cmluZygpLFxyXG4gICAgICB1c3Y6IHRoaXMuc3RhdERhdGEudXN2LFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHA6IHRoaXMuc3RhdERhdGEucFxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGdldE5ldHdvcmtJbmZvKCkge1xyXG4gICAgdW5pLmdldE5ldHdvcmtUeXBlKHtcclxuICAgICAgc3VjY2VzczogKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3RhdERhdGEubmV0ID0gcmVzdWx0Lm5ldHdvcmtUeXBlO1xyXG4gICAgICAgIHRoaXMuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9wZXJ0eSgpIHtcclxuICAgIHBsdXMucnVudGltZS5nZXRQcm9wZXJ0eShwbHVzLnJ1bnRpbWUuYXBwaWQsICh3Z3RpbmZvKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RhdERhdGEudiA9IHdndGluZm8udmVyc2lvbiB8fCAnJztcclxuICAgICAgdGhpcy5nZXROZXR3b3JrSW5mbygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRMb2NhdGlvbigpIHtcclxuICAgIGlmIChzdGF0Q29uZmlnLmdldExvY2F0aW9uKSB7XHJcbiAgICAgIHVuaS5nZXRMb2NhdGlvbih7XHJcbiAgICAgICAgdHlwZTogJ3dnczg0JyxcclxuICAgICAgICBnZW9jb2RlOiB0cnVlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIGlmIChyZXN1bHQuYWRkcmVzcykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXREYXRhLmNuID0gcmVzdWx0LmFkZHJlc3MuY291bnRyeTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0RGF0YS5wbiA9IHJlc3VsdC5hZGRyZXNzLnByb3ZpbmNlO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXREYXRhLmN0ID0gcmVzdWx0LmFkZHJlc3MuY2l0eTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLnN0YXREYXRhLmxhdCA9IHJlc3VsdC5sYXRpdHVkZTtcclxuICAgICAgICAgIHRoaXMuc3RhdERhdGEubG5nID0gcmVzdWx0LmxvbmdpdHVkZTtcclxuICAgICAgICAgIHRoaXMucmVxdWVzdCh0aGlzLnN0YXREYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zdGF0RGF0YS5sYXQgPSAwO1xyXG4gICAgICB0aGlzLnN0YXREYXRhLmxuZyA9IDA7XHJcbiAgICAgIHRoaXMucmVxdWVzdCh0aGlzLnN0YXREYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlcXVlc3QoZGF0YSwgdHlwZSkge1xyXG4gICAgbGV0IHRpbWUgPSBnZXRUaW1lKCk7XHJcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZTtcclxuICAgIGRhdGEudHRuID0gdGl0bGUucGFnZTtcclxuICAgIGRhdGEudHRwaiA9IHRpdGxlLmNvbmZpZztcclxuICAgIGRhdGEudHRjID0gdGl0bGUucmVwb3J0O1xyXG5cclxuICAgIGxldCByZXF1ZXN0RGF0YSA9IHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhO1xyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgcmVxdWVzdERhdGEgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJykgfHwge307XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlcXVlc3REYXRhW2RhdGEubHRdKSB7XHJcbiAgICAgIHJlcXVlc3REYXRhW2RhdGEubHRdID0gW107XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0RGF0YVtkYXRhLmx0XS5wdXNoKGRhdGEpO1xyXG5cclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHVuaS5zZXRTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnLCByZXF1ZXN0RGF0YSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZ2V0UGFnZVJlc2lkZW5jZVRpbWUoKSA8IE9QRVJBVElOR19USU1FICYmICF0eXBlKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgbGV0IHVuaVN0YXREYXRhID0gdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGE7XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB1bmlTdGF0RGF0YSA9IHVuaS5nZXRTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnKTtcclxuICAgIH1cclxuICAgIC8vIOaXtumXtOi2hei/h++8jOmHjeaWsOiOt+WPluaXtumXtOaIs1xyXG4gICAgc2V0UGFnZVJlc2lkZW5jZVRpbWUoKTtcclxuICAgIGxldCBmaXJzdEFyciA9IFtdO1xyXG4gICAgbGV0IGNvbnRlbnRBcnIgPSBbXTtcclxuICAgIGxldCBsYXN0QXJyID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSBpbiB1bmlTdGF0RGF0YSkge1xyXG4gICAgICBjb25zdCByZCA9IHVuaVN0YXREYXRhW2ldO1xyXG4gICAgICByZC5mb3JFYWNoKChlbG0pID0+IHtcclxuICAgICAgICBjb25zdCBuZXdEYXRhID0gZ2V0U3BsaWNpbmcoZWxtKTtcclxuICAgICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgZmlyc3RBcnIucHVzaChuZXdEYXRhKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDMpIHtcclxuICAgICAgICAgIGxhc3RBcnIucHVzaChuZXdEYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29udGVudEFyci5wdXNoKG5ld0RhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlyc3RBcnIucHVzaCguLi5jb250ZW50QXJyLCAuLi5sYXN0QXJyKTtcclxuICAgIGxldCBvcHRpb25zRGF0YSA9IHtcclxuICAgICAgdXN2OiBTVEFUX1ZFUlNJT04sIC8v57uf6K6hIFNESyDniYjmnKzlj7dcclxuICAgICAgdDogdGltZSwgLy/lj5HpgIHor7fmsYLml7bnmoTml7bpl7TmiK5cclxuICAgICAgcmVxdWVzdHM6IEpTT04uc3RyaW5naWZ5KGZpcnN0QXJyKSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGEgPSB7fTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHVuaS5yZW1vdmVTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YS51dCA9PT0gJ2g1Jykge1xyXG4gICAgICB0aGlzLmltYWdlUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nICYmIHRoaXMuc3RhdERhdGEucCA9PT0gJ2EnKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX3NlbmRSZXF1ZXN0KG9wdGlvbnNEYXRhKTtcclxuICAgICAgfSwgMjAwKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB0aGlzLl9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgfVxyXG4gIF9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSkge1xyXG4gICAgdW5pLnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IFNUQVRfVVJMLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgLy8gaGVhZGVyOiB7XHJcbiAgICAgIC8vICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyAvLyDpu5jorqTlgLxcclxuICAgICAgLy8gfSxcclxuICAgICAgZGF0YTogb3B0aW9uc0RhdGEsXHJcbiAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICAvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKCdzdGF0IHJlcXVlc3Qgc3VjY2VzcycpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgfSxcclxuICAgICAgZmFpbDogKGUpID0+IHtcclxuICAgICAgICBpZiAoKyt0aGlzLl9yZXRyeSA8IDMpIHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBoNSDor7fmsYJcclxuICAgKi9cclxuICBpbWFnZVJlcXVlc3QoZGF0YSkge1xyXG4gICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBsZXQgb3B0aW9ucyA9IGdldFNnaW4oR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyhkYXRhKSkub3B0aW9ucztcclxuICAgIGltYWdlLnNyYyA9IFNUQVRfSDVfVVJMICsgJz8nICsgb3B0aW9ucztcclxuICB9XHJcblxyXG4gIHNlbmRFdmVudChrZXksIHZhbHVlKSB7XHJcbiAgICAvLyDmoKHpqowgdHlwZSDlj4LmlbBcclxuICAgIGlmIChjYWxpYnJhdGlvbihrZXksIHZhbHVlKSkgcmV0dXJuXHJcblxyXG4gICAgaWYgKGtleSA9PT0gJ3RpdGxlJykge1xyXG4gICAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUucmVwb3J0ID0gdmFsdWU7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleSxcclxuICAgICAgdmFsdWU6IHR5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogdmFsdWVcclxuICAgIH0sIDEpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmNsYXNzIFN0YXQgZXh0ZW5kcyBVdGlsIHtcclxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBTdGF0KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICB9XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG51bGw7XHJcbiAgICAvLyDms6jlhozmi6bmiKrlmahcclxuICAgIGlmICh0eXBlb2YgdW5pLmFkZEludGVyY2VwdG9yID09PSAnZnVuY3Rpb24nICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAgIHRoaXMuYWRkSW50ZXJjZXB0b3JJbml0KCk7XHJcbiAgICAgIHRoaXMuaW50ZXJjZXB0TG9naW4oKTtcclxuICAgICAgdGhpcy5pbnRlcmNlcHRTaGFyZSh0cnVlKTtcclxuICAgICAgdGhpcy5pbnRlcmNlcHRSZXF1ZXN0UGF5bWVudCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkSW50ZXJjZXB0b3JJbml0KCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdzZXROYXZpZ2F0aW9uQmFyVGl0bGUnLCB7XHJcbiAgICAgIGludm9rZShhcmdzKSB7XHJcbiAgICAgICAgc2VsZi5fbmF2aWdhdGlvbkJhclRpdGxlLnBhZ2UgPSBhcmdzLnRpdGxlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGludGVyY2VwdExvZ2luKCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdsb2dpbicsIHtcclxuICAgICAgY29tcGxldGUoKSB7XHJcbiAgICAgICAgc2VsZi5fbG9naW4oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHRTaGFyZSh0eXBlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBpZiAoIXR5cGUpIHtcclxuICAgICAgc2VsZi5fc2hhcmUoKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ3NoYXJlJywge1xyXG4gICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgIHNlbGYuX3NoYXJlKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwoKSB7XHJcbiAgICAgICAgc2VsZi5fc2hhcmUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHRSZXF1ZXN0UGF5bWVudCgpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcigncmVxdWVzdFBheW1lbnQnLCB7XHJcbiAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgc2VsZi5fcGF5bWVudCgncGF5X3N1Y2Nlc3MnKTtcclxuICAgICAgfSxcclxuICAgICAgZmFpbCgpIHtcclxuICAgICAgICBzZWxmLl9wYXltZW50KCdwYXlfZmFpbCcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlcG9ydChvcHRpb25zLCBzZWxmKSB7XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdyZXBvcnQgaW5pdCcpO1xyXG4gICAgLy8gfVxyXG4gICAgc2V0UGFnZVJlc2lkZW5jZVRpbWUoKTtcclxuICAgIHRoaXMuX19saWNhdGlvblNob3cgPSB0cnVlO1xyXG4gICAgdGhpcy5fc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucywgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBsb2FkKG9wdGlvbnMsIHNlbGYpIHtcclxuICAgIGlmICghc2VsZi4kc2NvcGUgJiYgIXNlbGYuJG1wKSB7XHJcbiAgICAgIGNvbnN0IHBhZ2UgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICAgICAgc2VsZi4kc2NvcGUgPSBwYWdlW3BhZ2UubGVuZ3RoIC0gMV07XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgdGhpcy5fcXVlcnkgPSBvcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgc2hvdyhzZWxmKSB7XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgaWYgKGdldFBhZ2VUeXBlcyhzZWxmKSkge1xyXG4gICAgICB0aGlzLl9wYWdlU2hvdyhzZWxmKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uU2hvdyhzZWxmKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlYWR5KHNlbGYpIHtcclxuICAgIC8vIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICAvLyBpZiAoZ2V0UGFnZVR5cGVzKHNlbGYpKSB7XHJcbiAgICAvLyAgIHRoaXMuX3BhZ2VTaG93KHNlbGYpO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuICBoaWRlKHNlbGYpIHtcclxuICAgIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICBpZiAoZ2V0UGFnZVR5cGVzKHNlbGYpKSB7XHJcbiAgICAgIHRoaXMuX3BhZ2VIaWRlKHNlbGYpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fYXBwbGljYXRpb25IaWRlKHNlbGYsIHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBlcnJvcihlbSkge1xyXG4gICAgaWYgKHRoaXMuX3BsYXRmb3JtID09PSAnZGV2dG9vbHMnKSB7XHJcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbygn5b2T5YmN6L+Q6KGM546v5aKD5Li65byA5Y+R6ICF5bel5YW377yM5LiN5LiK5oql5pWw5o2u44CCJyk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IGVtVmFsID0gJyc7XHJcbiAgICBpZiAoIWVtLm1lc3NhZ2UpIHtcclxuICAgICAgZW1WYWwgPSBKU09OLnN0cmluZ2lmeShlbSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlbVZhbCA9IGVtLnN0YWNrO1xyXG4gICAgfVxyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMzEnLFxyXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIG1wc2RrOiB0aGlzLnN0YXREYXRhLm1wc2RrLFxyXG4gICAgICBtcHY6IHRoaXMuc3RhdERhdGEubXB2LFxyXG4gICAgICB2OiB0aGlzLnN0YXREYXRhLnYsXHJcbiAgICAgIGVtOiBlbVZhbCxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBzdGF0ID0gU3RhdC5nZXRJbnN0YW5jZSgpO1xyXG5sZXQgaXNIaWRlID0gZmFsc2U7XHJcbmNvbnN0IGxpZmVjeWNsZSA9IHtcclxuICBvbkxhdW5jaChvcHRpb25zKSB7XHJcbiAgICBzdGF0LnJlcG9ydChvcHRpb25zLCB0aGlzKTtcclxuICB9LFxyXG4gIG9uUmVhZHkoKSB7XHJcbiAgICBzdGF0LnJlYWR5KHRoaXMpO1xyXG4gIH0sXHJcbiAgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgIHN0YXQubG9hZChvcHRpb25zLCB0aGlzKTtcclxuICAgIC8vIOmHjeWGmeWIhuS6q++8jOiOt+WPluWIhuS6q+S4iuaKpeS6i+S7tlxyXG4gICAgaWYgKHRoaXMuJHNjb3BlICYmIHRoaXMuJHNjb3BlLm9uU2hhcmVBcHBNZXNzYWdlKSB7XHJcbiAgICAgIGxldCBvbGRTaGFyZUFwcE1lc3NhZ2UgPSB0aGlzLiRzY29wZS5vblNoYXJlQXBwTWVzc2FnZTtcclxuICAgICAgdGhpcy4kc2NvcGUub25TaGFyZUFwcE1lc3NhZ2UgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICAgICAgc3RhdC5pbnRlcmNlcHRTaGFyZShmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuIG9sZFNoYXJlQXBwTWVzc2FnZS5jYWxsKHRoaXMsIG9wdGlvbnMpXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfSxcclxuICBvblNob3coKSB7XHJcbiAgICBpc0hpZGUgPSBmYWxzZTtcclxuICAgIHN0YXQuc2hvdyh0aGlzKTtcclxuICB9LFxyXG4gIG9uSGlkZSgpIHtcclxuICAgIGlzSGlkZSA9IHRydWU7XHJcbiAgICBzdGF0LmhpZGUodGhpcyk7XHJcbiAgfSxcclxuICBvblVubG9hZCgpIHtcclxuICAgIGlmIChpc0hpZGUpIHtcclxuICAgICAgaXNIaWRlID0gZmFsc2U7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgc3RhdC5oaWRlKHRoaXMpO1xyXG4gIH0sXHJcbiAgb25FcnJvcihlKSB7XHJcbiAgICBzdGF0LmVycm9yKGUpO1xyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIG1haW4oKSB7XHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICB1bmkucmVwb3J0ID0gZnVuY3Rpb24odHlwZSwgb3B0aW9ucykge307XHJcbiAgfWVsc2V7XHJcbiAgICBjb25zdCBWdWUgPSByZXF1aXJlKCd2dWUnKTtcclxuICAgIChWdWUuZGVmYXVsdCB8fCBWdWUpLm1peGluKGxpZmVjeWNsZSk7XHJcbiAgICB1bmkucmVwb3J0ID0gZnVuY3Rpb24odHlwZSwgb3B0aW9ucykge1xyXG4gICAgICBzdGF0LnNlbmRFdmVudCh0eXBlLCBvcHRpb25zKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5tYWluKCk7XHJcbiIsImZ1bmN0aW9uIGluaXRVbmkoKSB7XHJcblxyXG4gICAgdmFyIGlzRm4gPSBmdW5jdGlvbiBpc0ZuKHYpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHYgPT09ICdmdW5jdGlvbic7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBoYW5kbGVQcm9taXNlID0gZnVuY3Rpb24gaGFuZGxlUHJvbWlzZShwcm9taXNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbihmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbbnVsbCwgZGF0YV07XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbZXJyXTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIFJFR0VYID0gL15cXCR8Xm9ufF5jcmVhdGV8U3luYyR8TWFuYWdlciR8XnBhdXNlLztcclxuICAgIHZhciBBUElfTk9STUFMX0xJU1QgPSBbJ29zJywgJ2dldEN1cnJlbnRTdWJOVnVlJywgJ2dldFN1Yk5WdWVCeUlkJywgJ3N0b3BSZWNvcmQnLCAnc3RvcFZvaWNlJyxcclxuICAgICAgICAnc3RvcEJhY2tncm91bmRBdWRpbycsICdzdG9wUHVsbERvd25SZWZyZXNoJywgJ2hpZGVLZXlib2FyZCcsICdoaWRlVG9hc3QnLCAnaGlkZUxvYWRpbmcnLFxyXG4gICAgICAgICdzaG93TmF2aWdhdGlvbkJhckxvYWRpbmcnLCAnaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nJywgJ2NhbklVc2UnLCAnbmF2aWdhdGVCYWNrJywgJ2Nsb3NlU29ja2V0JyxcclxuICAgICAgICAncGFnZVNjcm9sbFRvJywgJ2RyYXdDYW52YXMnXHJcbiAgICBdO1xyXG5cclxuICAgIHZhciBzaG91bGRQcm9taXNlID0gZnVuY3Rpb24gc2hvdWxkUHJvbWlzZShuYW1lKSB7XHJcbiAgICAgICAgaWYgKFJFR0VYLnRlc3QobmFtZSkgJiYgbmFtZSAhPT0gJ2NyZWF0ZUJMRUNvbm5lY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKH5BUElfTk9STUFMX0xJU1QuaW5kZXhPZihuYW1lKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgcHJvbWlzaWZ5ID0gZnVuY3Rpb24gcHJvbWlzaWZ5KGFwaSkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhcmFtcyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc0ZuKG9wdGlvbnMuc3VjY2VzcykgfHwgaXNGbihvcHRpb25zLmZhaWwpIHx8IGlzRm4ob3B0aW9ucy5jb21wbGV0ZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcGkuYXBwbHkodW5kZWZpbmVkLCBbb3B0aW9uc10uY29uY2F0KHBhcmFtcykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVQcm9taXNlKG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgYXBpLmFwcGx5KHVuZGVmaW5lZCwgW09iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZhaWw6IHJlamVjdFxyXG4gICAgICAgICAgICAgICAgfSldLmNvbmNhdChwYXJhbXMpKTtcclxuICAgICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWV4dGVuZC1uYXRpdmUgKi9cclxuICAgICAgICAgICAgICAgIFByb21pc2UucHJvdG90eXBlLmZpbmFsbHkgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gdGhpcy5jb25zdHJ1Y3RvcjtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHJlYXNvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIG9uTWVzc2FnZUNhbGxiYWNrcyA9IFtdO1xyXG5cclxuICAgIHZhciBvcmlnaW4gPSB2b2lkIDA7XHJcblxyXG4gICAgZnVuY3Rpb24gb25TdWJOVnVlTWVzc2FnZShkYXRhKSB7XHJcbiAgICAgICAgb25NZXNzYWdlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKHtcclxuICAgICAgICAgICAgICAgIG9yaWdpbjogb3JpZ2luLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgd2Vidmlld0lkID0gd2VleFBsdXMud2Vidmlldy5jdXJyZW50V2VidmlldygpLmlkO1xyXG5cclxuICAgIHZhciBjaGFubmVsID0gbmV3IEJyb2FkY2FzdENoYW5uZWwoJ1VOSS1BUFAtU1VCTlZVRScpO1xyXG4gICAgY2hhbm5lbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5kYXRhLnRvID09PSB3ZWJ2aWV3SWQpIHtcclxuICAgICAgICAgICAgb25TdWJOVnVlTWVzc2FnZShldmVudC5kYXRhLmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gd3JhcHBlcih3ZWJ2aWV3KSB7XHJcbiAgICAgICAgd2Vidmlldy4kcHJvY2Vzc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdmFyIGN1cnJlbnRXZWJ2aWV3SWQgPSB3ZWV4UGx1cy53ZWJ2aWV3LmN1cnJlbnRXZWJ2aWV3KCkuaWQ7XHJcbiAgICAgICAgdmFyIGlzUG9wdXBOVnVlID0gY3VycmVudFdlYnZpZXdJZCA9PT0gd2Vidmlldy5pZDtcclxuXHJcbiAgICAgICAgdmFyIGhvc3ROVnVlSWQgPSB3ZWJ2aWV3Ll9fdW5pYXBwX29yaWdpbl90eXBlID09PSAndW5pTlZpZXcnICYmIHdlYnZpZXcuX191bmlhcHBfb3JpZ2luX2lkO1xyXG4gICAgICAgIHZhciBwb3B1cE5WdWVJZCA9IHdlYnZpZXcuaWQ7XHJcblxyXG4gICAgICAgIHdlYnZpZXcucG9zdE1lc3NhZ2UgPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChob3N0TlZ1ZUlkKSB7XHJcbiAgICAgICAgICAgICAgICBjaGFubmVsLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvOiBpc1BvcHVwTlZ1ZSA/IGhvc3ROVnVlSWQgOiBwb3B1cE5WdWVJZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1VuaUFwcFN1Yk5WdWUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3ZWJ2aWV3Lm9uTWVzc2FnZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIG9uTWVzc2FnZUNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoIXdlYnZpZXcuX191bmlhcHBfbWFza19pZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9yaWdpbiA9IHdlYnZpZXcuX191bmlhcHBfaG9zdDtcclxuXHJcbiAgICAgICAgdmFyIG1hc2tDb2xvciA9IHdlYnZpZXcuX191bmlhcHBfbWFzaztcclxuXHJcbiAgICAgICAgdmFyIG1hc2tXZWJ2aWV3ID0gd2VleFBsdXMud2Vidmlldy5nZXRXZWJ2aWV3QnlJZCh3ZWJ2aWV3Ll9fdW5pYXBwX21hc2tfaWQpO1xyXG4gICAgICAgIG1hc2tXZWJ2aWV3ID0gbWFza1dlYnZpZXcucGFyZW50KCkgfHwgbWFza1dlYnZpZXc7Ly/lho3mrKHmo4DmtYvniLZcclxuICAgICAgICB2YXIgb2xkU2hvdyA9IHdlYnZpZXcuc2hvdztcclxuICAgICAgICB2YXIgb2xkSGlkZSA9IHdlYnZpZXcuaGlkZTtcclxuICAgICAgICB2YXIgb2xkQ2xvc2UgPSB3ZWJ2aWV3LmNsb3NlO1xyXG5cclxuICAgICAgICB2YXIgc2hvd01hc2sgPSBmdW5jdGlvbiBzaG93TWFzaygpIHtcclxuICAgICAgICAgICAgbWFza1dlYnZpZXcuc2V0U3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgbWFzazogbWFza0NvbG9yXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGNsb3NlTWFzayA9IGZ1bmN0aW9uIGNsb3NlTWFzaygpIHtcclxuICAgICAgICAgICAgbWFza1dlYnZpZXcuc2V0U3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgbWFzazogJ25vbmUnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2Vidmlldy5zaG93ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNob3dNYXNrKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xyXG4gICAgICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9sZFNob3cuYXBwbHkod2VidmlldywgYXJncyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3ZWJ2aWV3LmhpZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xvc2VNYXNrKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xyXG4gICAgICAgICAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb2xkSGlkZS5hcHBseSh3ZWJ2aWV3LCBhcmdzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHdlYnZpZXcuY2xvc2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xvc2VNYXNrKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xyXG4gICAgICAgICAgICAgICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb2xkQ2xvc2UuYXBwbHkod2VidmlldywgYXJncyk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTdWJOVnVlQnlJZChpZCkge1xyXG4gICAgICAgIHZhciB3ZWJ2aWV3ID0gd2VleFBsdXMud2Vidmlldy5nZXRXZWJ2aWV3QnlJZChpZCk7XHJcbiAgICAgICAgaWYgKHdlYnZpZXcgJiYgIXdlYnZpZXcuJHByb2Nlc3NlZCkge1xyXG4gICAgICAgICAgICB3cmFwcGVyKHdlYnZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gd2VidmlldztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50U3ViTlZ1ZSgpIHtcclxuICAgICAgICByZXR1cm4gZ2V0U3ViTlZ1ZUJ5SWQod2VleFBsdXMud2Vidmlldy5jdXJyZW50V2VidmlldygpLmlkKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcGx1cyA9IHdlZXgucmVxdWlyZU1vZHVsZSgncGx1cycpO1xyXG4gICAgdmFyIGdsb2JhbEV2ZW50ID0gd2VleC5yZXF1aXJlTW9kdWxlKCdnbG9iYWxFdmVudCcpO1xyXG5cclxuICAgIHZhciBpZCA9IDA7XHJcbiAgICB2YXIgY2FsbGJhY2tzID0ge307XHJcblxyXG4gICAgdmFyIFVOSUFQUF9TRVJWSUNFX05WVUVfSUQgPSAnX191bmlhcHBfX3NlcnZpY2UnO1xyXG5cclxuICAgIGdsb2JhbEV2ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BsdXNNZXNzYWdlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmIChlLmRhdGEudHlwZSA9PT0gJ1VuaUFwcEpzQXBpJykge1xyXG4gICAgICAgICAgICBpbnZva2UoZS5kYXRhLmlkLCBlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmRhdGEudHlwZSA9PT0gJ1VuaUFwcFN1Yk5WdWUnKSB7XHJcbiAgICAgICAgICAgIG9uU3ViTlZ1ZU1lc3NhZ2UoZS5kYXRhLmRhdGEsIGUuZGF0YS5vcHRpb25zKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwJykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXBDYWxsYmFjayhlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkJykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWRDYWxsYmFjayhlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayhlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkJykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWRDYWxsYmFjayhlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgY3JlYXRlQ2FsbGJhY2sgPSBmdW5jdGlvbiBjcmVhdGVDYWxsYmFjayhhcmdzLCB0eXBlKSB7XHJcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2socmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChpc0ZuKGFyZ3MpKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzKHJlcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncykge1xyXG4gICAgICAgICAgICAgICAgaWYgKH5yZXMuZXJyTXNnLmluZGV4T2YoJzpvaycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGbihhcmdzLnN1Y2Nlc3MpICYmIGFyZ3Muc3VjY2VzcyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh+cmVzLmVyck1zZy5pbmRleE9mKCc6ZmFpbCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGbihhcmdzLmZhaWwpICYmIGFyZ3MuZmFpbChyZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaXNGbihhcmdzLmNvbXBsZXRlKSAmJiBhcmdzLmNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChpc0ZuKGFyZ3MpIHx8IGFyZ3MgJiYgaXNGbihhcmdzLmNhbGxiYWNrKSkge1xyXG4gICAgICAgICAgICBjYWxsYmFjay5rZWVwQWxpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2FsbGJhY2s7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBpbnZva2UgPSBmdW5jdGlvbiBpbnZva2UoY2FsbGJhY2tJZCwgZGF0YSkge1xyXG4gICAgICAgIHZhciBjYWxsYmFjayA9IGNhbGxiYWNrc1tjYWxsYmFja0lkXTtcclxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIGlmICghY2FsbGJhY2sua2VlcEFsaXZlKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgY2FsbGJhY2tzW2NhbGxiYWNrSWRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignY2FsbGJhY2tbJyArIGNhbGxiYWNrSWQgKyAnXSBpcyB1bmRlZmluZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBwdWJsaXNoID0gZnVuY3Rpb24gcHVibGlzaChfcmVmKSB7XHJcbiAgICAgICAgdmFyIGlkID0gX3JlZi5pZCxcclxuICAgICAgICAgICAgdHlwZSA9IF9yZWYudHlwZSxcclxuICAgICAgICAgICAgcGFyYW1zID0gX3JlZi5wYXJhbXM7XHJcblxyXG4gICAgICAgIGNhbGxiYWNrc1tpZF0gPSBjcmVhdGVDYWxsYmFjayhwYXJhbXMsIHR5cGUpO1xyXG4gICAgICAgIHBsdXMucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcGFyYW1zXHJcbiAgICAgICAgfSwgVU5JQVBQX1NFUlZJQ0VfTlZVRV9JRCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHBvc3RNZXNzYWdlKGRhdGEpIHtcclxuICAgICAgICBwbHVzLnBvc3RNZXNzYWdlKGRhdGEsIFVOSUFQUF9TRVJWSUNFX05WVUVfSUQpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjcmVhdGVQdWJsaXNoID0gZnVuY3Rpb24gY3JlYXRlUHVibGlzaChuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGFyZ3MpIHtcclxuICAgICAgICAgICAgcHVibGlzaCh7XHJcbiAgICAgICAgICAgICAgICBpZDogaWQrKyxcclxuICAgICAgICAgICAgICAgIHR5cGU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IGFyZ3NcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcENhbGxiYWNrID0gdm9pZCAwO1xyXG4gICAgdmFyIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrID0gdm9pZCAwO1xyXG4gICAgdmFyIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkQ2FsbGJhY2sgPSB2b2lkIDA7XHJcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2sgPSB2b2lkIDA7XHJcblxyXG4gICAgZnVuY3Rpb24gb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQoY2FsbGJhY2spIHtcclxuICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWRDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZChjYWxsYmFjaykge1xyXG4gICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVxdWlyZU5hdGl2ZVBsdWdpbihwbHVnaW5OYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHdlZXgucmVxdWlyZU1vZHVsZShwbHVnaW5OYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZG9tID0gd2VleC5yZXF1aXJlTW9kdWxlKCdkb20nKTtcclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkRm9udEZhY2UoX3JlZikge1xyXG4gICAgICAgIHZhciBmYW1pbHkgPSBfcmVmLmZhbWlseSxcclxuICAgICAgICAgICAgc291cmNlID0gX3JlZi5zb3VyY2UsXHJcbiAgICAgICAgICAgIGRlc2MgPSBfcmVmLmRlc2MsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZi5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgZG9tLmFkZFJ1bGUoJ2ZvbnRGYWNlJywge1xyXG4gICAgICAgICAgICBmb250RmFtaWx5OiBmYW1pbHksXHJcbiAgICAgICAgICAgIHNyYzogc291cmNlLnJlcGxhY2UoL1wiL2csICdcXCcnKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciByZXMgPSB7XHJcbiAgICAgICAgICAgIGVyck1zZzogJ2xvYWRGb250RmFjZTpvaycsXHJcbiAgICAgICAgICAgIHN0YXR1czogJ2xvYWRlZCdcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2VzcyhyZXMpO1xyXG4gICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGdsb2JhbEV2ZW50JDEgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2dsb2JhbEV2ZW50Jyk7XHJcblxyXG4gICAgdmFyIGNhbGxiYWNrcyQxID0gW107XHJcblxyXG4gICAgZ2xvYmFsRXZlbnQkMS5hZGRFdmVudExpc3RlbmVyKCdwbHVzTWVzc2FnZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZiAoZS5kYXRhLnR5cGUgPT09ICdVbmlBcHBSZWFkeScpIHtcclxuICAgICAgICAgICAgcmVhZHkuaXNVbmlBcHBSZWFkeSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFja3MkMS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrcyQxLmZvckVhY2goZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzJDEgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlYWR5KGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1VuaUFwcFJlYWR5KSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzJDEucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uKG9iaikge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xyXG4gICAgfSA6IGZ1bmN0aW9uKG9iaikge1xyXG4gICAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/XHJcbiAgICAgICAgICAgIFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgc3RyZWFtID0gd2VleC5yZXF1aXJlTW9kdWxlKCdzdHJlYW0nKTtcclxuXHJcbiAgICAvLyBsZXQgcmVxdWVzdFRhc2tJZCA9IDBcclxuXHJcbiAgICB2YXIgTUVUSE9EX0dFVCA9ICdHRVQnO1xyXG4gICAgdmFyIE1FVEhPRF9QT1NUID0gJ1BPU1QnO1xyXG4gICAgdmFyIENPTlRFTlRfVFlQRV9KU09OID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xyXG4gICAgdmFyIENPTlRFTlRfVFlQRV9GT1JNID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc7XHJcblxyXG4gICAgdmFyIHNlcmlhbGl6ZSA9IGZ1bmN0aW9uIHNlcmlhbGl6ZShkYXRhKSB7XHJcbiAgICAgICAgdmFyIG1ldGhvZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogTUVUSE9EX0dFVDtcclxuICAgICAgICB2YXIgY29udGVudFR5cGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IENPTlRFTlRfVFlQRV9GT1JNO1xyXG5cclxuICAgICAgICBpZiAoKHR5cGVvZiBkYXRhID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihkYXRhKSkgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIGlmIChtZXRob2QudG9VcHBlckNhc2UoKSA9PT0gTUVUSE9EX1BPU1QgJiYgY29udGVudFR5cGUudG9Mb3dlckNhc2UoKSA9PT0gQ09OVEVOVF9UWVBFX0pTT04pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKS5tYXAoZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFba2V5XSk7XHJcbiAgICAgICAgICAgICAgICB9KS5qb2luKCcmJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlcXVlc3QoX3JlZikge1xyXG4gICAgICAgIHZhciB1cmwgPSBfcmVmLnVybCxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWYuZGF0YSxcclxuICAgICAgICAgICAgaGVhZGVyID0gX3JlZi5oZWFkZXIsXHJcbiAgICAgICAgICAgIF9yZWYkbWV0aG9kID0gX3JlZi5tZXRob2QsXHJcbiAgICAgICAgICAgIG1ldGhvZCA9IF9yZWYkbWV0aG9kID09PSB1bmRlZmluZWQgPyAnR0VUJyA6IF9yZWYkbWV0aG9kLFxyXG4gICAgICAgICAgICBfcmVmJGRhdGFUeXBlID0gX3JlZi5kYXRhVHlwZSxcclxuICAgICAgICAgICAgZGF0YVR5cGUgPSBfcmVmJGRhdGFUeXBlID09PSB1bmRlZmluZWQgPyAnanNvbicgOiBfcmVmJGRhdGFUeXBlLFxyXG4gICAgICAgICAgICByZXNwb25zZVR5cGUgPSBfcmVmLnJlc3BvbnNlVHlwZSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICAvLyByZXF1ZXN0VGFza0lkKytcclxuICAgICAgICB2YXIgYWJvcnRlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB2YXIgaGFzQ29udGVudFR5cGUgPSBmYWxzZTtcclxuICAgICAgICB2YXIgaGVhZGVycyA9IHt9O1xyXG4gICAgICAgIGlmIChoZWFkZXIpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBoZWFkZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghaGFzQ29udGVudFR5cGUgJiYgbmFtZS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhc0NvbnRlbnRUeXBlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IGhlYWRlcltuYW1lXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1tuYW1lXSA9IGhlYWRlcltuYW1lXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWV0aG9kID09PSBNRVRIT0RfR0VUICYmIGRhdGEpIHtcclxuICAgICAgICAgICAgdXJsID0gdXJsICsgKH51cmwuaW5kZXhPZignPycpID8gdXJsLnN1YnN0cigtMSkgPT09ICcmJyB8fCB1cmwuc3Vic3RyKC0xKSA9PT0gJz8nID8gJycgOiAnJicgOiAnPycpICtcclxuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RyZWFtLmZldGNoKHtcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgICAgICB0eXBlOiBkYXRhVHlwZSA9PT0gJ2pzb24nID8gJ2pzb24nIDogJ3RleHQnLFxyXG4gICAgICAgICAgICBib2R5OiBtZXRob2QgIT09IE1FVEhPRF9HRVQgPyBzZXJpYWxpemUoZGF0YSwgbWV0aG9kLCBoZWFkZXJzWydDb250ZW50LVR5cGUnXSkgOiAnJ1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uKF9yZWYyKSB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0dXMgPSBfcmVmMi5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICBvayA9IF9yZWYyLm9rLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzVGV4dCA9IF9yZWYyLnN0YXR1c1RleHQsXHJcbiAgICAgICAgICAgICAgICBkYXRhID0gX3JlZjIuZGF0YSxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnMgPSBfcmVmMi5oZWFkZXJzO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJldCA9IHt9O1xyXG4gICAgICAgICAgICBpZiAoIXN0YXR1cyB8fCBzdGF0dXMgPT09IC0xIHx8IGFib3J0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldC5lcnJNc2cgPSAncmVxdWVzdDpmYWlsJztcclxuICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0LmRhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgcmV0LnN0YXR1c0NvZGUgPSBzdGF0dXM7XHJcbiAgICAgICAgICAgICAgICByZXQuaGVhZGVyID0gaGVhZGVycztcclxuICAgICAgICAgICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2VzcyhyZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJldCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYWJvcnQ6IGZ1bmN0aW9uIGFib3J0KCkge1xyXG4gICAgICAgICAgICAgICAgYWJvcnRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBzdG9yYWdlID0gd2VleC5yZXF1aXJlTW9kdWxlKCdwbHVzc3RvcmFnZScpO1xyXG4gICAgdmFyIFVOSUFQUF9TVE9SQUdFX0RBVEFfVFlQRSA9ICdfX1RZUEUnO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFN0b3JhZ2UoX3JlZikge1xyXG4gICAgICAgIHZhciBrZXkgPSBfcmVmLmtleSxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWYuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICBzdG9yYWdlLmdldEl0ZW0oa2V5ICsgVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFLCBmdW5jdGlvbihyZXQpIHtcclxuICAgICAgICAgICAgaWYgKHJldC5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGFUeXBlID0gcmV0LmRhdGE7XHJcbiAgICAgICAgICAgICAgICBzdG9yYWdlLmdldEl0ZW0oa2V5LCBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFUeXBlICYmIHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFUeXBlICE9PSAnU3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IEpTT04ucGFyc2UocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2Vzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyTXNnOiAnZ2V0U3RvcmFnZTpvaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0LmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJldCk7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0U3RvcmFnZShfcmVmMikge1xyXG4gICAgICAgIHZhciBrZXkgPSBfcmVmMi5rZXksXHJcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmMi5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZjIuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYyLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZjIuY29tcGxldGU7XHJcblxyXG4gICAgICAgIHZhciBkYXRhVHlwZSA9ICdTdHJpbmcnO1xyXG4gICAgICAgIGlmICgodHlwZW9mIGRhdGEgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGRhdGEpKSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgZGF0YVR5cGUgPSAnT2JqZWN0JztcclxuICAgICAgICAgICAgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdG9yYWdlLnNldEl0ZW0oa2V5LCBkYXRhLCBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgc3RvcmFnZS5zZXRJdGVtKGtleSArIFVOSUFQUF9TVE9SQUdFX0RBVEFfVFlQRSwgZGF0YVR5cGUsIGZ1bmN0aW9uKHJldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXQucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVyck1zZzogJ3NldFN0b3JhZ2U6b2snXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldC5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXMuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVN0b3JhZ2UoX3JlZjMpIHtcclxuICAgICAgICB2YXIga2V5ID0gX3JlZjMua2V5LFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZjMuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYzLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmMy5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYzLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oa2V5LCBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJNc2c6ICdyZW1vdmVTdG9yYWdlOm9rJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXMuZXJyTXNnID0gJ3JlbW92ZVN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbShrZXkgKyBVTklBUFBfU1RPUkFHRV9EQVRBX1RZUEUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyU3RvcmFnZShfcmVmNCkge1xyXG4gICAgICAgIHZhciBrZXkgPSBfcmVmNC5rZXksXHJcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmNC5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZjQuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWY0LmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZjQuY29tcGxldGU7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNsaXBib2FyZCA9IHdlZXgucmVxdWlyZU1vZHVsZSgnY2xpcGJvYXJkJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q2xpcGJvYXJkRGF0YShfcmVmKSB7XHJcbiAgICAgICAgdmFyIHN1Y2Nlc3MgPSBfcmVmLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZi5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgY2xpcGJvYXJkLmdldFN0cmluZyhmdW5jdGlvbihfcmVmMikge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IF9yZWYyLmRhdGE7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVzID0ge1xyXG4gICAgICAgICAgICAgICAgZXJyTXNnOiAnZ2V0Q2xpcGJvYXJkRGF0YTpvaycsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2VzcyhyZXMpO1xyXG4gICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldENsaXBib2FyZERhdGEoX3JlZjMpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IF9yZWYzLmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmMy5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZjMuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmMy5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgdmFyIHJlcyA9IHtcclxuICAgICAgICAgICAgZXJyTXNnOiAnc2V0Q2xpcGJvYXJkRGF0YTpvaydcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNsaXBib2FyZC5zZXRTdHJpbmcoZGF0YSk7XHJcbiAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZ2V0RW1pdHRlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZ2V0VW5pRW1pdHRlciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0VW5pRW1pdHRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIEVtaXR0ZXIgPSB7XHJcbiAgICAgICAgICAgICRvbjogZnVuY3Rpb24gJG9uKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bmkuJG9uIGZhaWxlZCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAkb2ZmOiBmdW5jdGlvbiAkb2ZmKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bmkuJG9mZiBmYWlsZWQnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJG9uY2U6IGZ1bmN0aW9uICRvbmNlKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bmkuJG9uY2UgZmFpbGVkJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICRlbWl0OiBmdW5jdGlvbiAkZW1pdCgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybigndW5pLiRlbWl0IGZhaWxlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gZ2V0VW5pRW1pdHRlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEVtaXR0ZXI7XHJcbiAgICAgICAgfTtcclxuICAgIH0oKTtcclxuXHJcbiAgICBmdW5jdGlvbiBhcHBseShjdHgsIG1ldGhvZCwgYXJncykge1xyXG4gICAgICAgIHJldHVybiBjdHhbbWV0aG9kXS5hcHBseShjdHgsIGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uICRvbigpIHtcclxuICAgICAgICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJG9uJywgW10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiAkb2ZmKCkge1xyXG4gICAgICAgIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckb2ZmJywgW10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiAkb25jZSgpIHtcclxuICAgICAgICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJG9uY2UnLCBbXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uICRlbWl0KCkge1xyXG4gICAgICAgIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckZW1pdCcsIFtdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICB2YXIgYXBpID0gLyojX19QVVJFX18qLyBPYmplY3QuZnJlZXplKHtcclxuICAgICAgICBsb2FkRm9udEZhY2U6IGxvYWRGb250RmFjZSxcclxuICAgICAgICByZWFkeTogcmVhZHksXHJcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcclxuICAgICAgICBnZXRTdG9yYWdlOiBnZXRTdG9yYWdlLFxyXG4gICAgICAgIHNldFN0b3JhZ2U6IHNldFN0b3JhZ2UsXHJcbiAgICAgICAgcmVtb3ZlU3RvcmFnZTogcmVtb3ZlU3RvcmFnZSxcclxuICAgICAgICBjbGVhclN0b3JhZ2U6IGNsZWFyU3RvcmFnZSxcclxuICAgICAgICBnZXRDbGlwYm9hcmREYXRhOiBnZXRDbGlwYm9hcmREYXRhLFxyXG4gICAgICAgIHNldENsaXBib2FyZERhdGE6IHNldENsaXBib2FyZERhdGEsXHJcbiAgICAgICAgb25TdWJOVnVlTWVzc2FnZTogb25TdWJOVnVlTWVzc2FnZSxcclxuICAgICAgICBnZXRTdWJOVnVlQnlJZDogZ2V0U3ViTlZ1ZUJ5SWQsXHJcbiAgICAgICAgZ2V0Q3VycmVudFN1Yk5WdWU6IGdldEN1cnJlbnRTdWJOVnVlLFxyXG4gICAgICAgICRvbjogJG9uLFxyXG4gICAgICAgICRvZmY6ICRvZmYsXHJcbiAgICAgICAgJG9uY2U6ICRvbmNlLFxyXG4gICAgICAgICRlbWl0OiAkZW1pdFxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHZhciB3eCA9IHtcclxuICAgICAgICB1cGxvYWRGaWxlOiB0cnVlLFxyXG4gICAgICAgIGRvd25sb2FkRmlsZTogdHJ1ZSxcclxuICAgICAgICBjaG9vc2VJbWFnZTogdHJ1ZSxcclxuICAgICAgICBwcmV2aWV3SW1hZ2U6IHRydWUsXHJcbiAgICAgICAgZ2V0SW1hZ2VJbmZvOiB0cnVlLFxyXG4gICAgICAgIHNhdmVJbWFnZVRvUGhvdG9zQWxidW06IHRydWUsXHJcbiAgICAgICAgY2hvb3NlVmlkZW86IHRydWUsXHJcbiAgICAgICAgc2F2ZVZpZGVvVG9QaG90b3NBbGJ1bTogdHJ1ZSxcclxuICAgICAgICBzYXZlRmlsZTogdHJ1ZSxcclxuICAgICAgICBnZXRTYXZlZEZpbGVMaXN0OiB0cnVlLFxyXG4gICAgICAgIGdldFNhdmVkRmlsZUluZm86IHRydWUsXHJcbiAgICAgICAgcmVtb3ZlU2F2ZWRGaWxlOiB0cnVlLFxyXG4gICAgICAgIG9wZW5Eb2N1bWVudDogdHJ1ZSxcclxuICAgICAgICBzZXRTdG9yYWdlOiB0cnVlLFxyXG4gICAgICAgIGdldFN0b3JhZ2U6IHRydWUsXHJcbiAgICAgICAgZ2V0U3RvcmFnZUluZm86IHRydWUsXHJcbiAgICAgICAgcmVtb3ZlU3RvcmFnZTogdHJ1ZSxcclxuICAgICAgICBjbGVhclN0b3JhZ2U6IHRydWUsXHJcbiAgICAgICAgZ2V0TG9jYXRpb246IHRydWUsXHJcbiAgICAgICAgY2hvb3NlTG9jYXRpb246IHRydWUsXHJcbiAgICAgICAgb3BlbkxvY2F0aW9uOiB0cnVlLFxyXG4gICAgICAgIGdldFN5c3RlbUluZm86IHRydWUsXHJcbiAgICAgICAgZ2V0TmV0d29ya1R5cGU6IHRydWUsXHJcbiAgICAgICAgbWFrZVBob25lQ2FsbDogdHJ1ZSxcclxuICAgICAgICBzY2FuQ29kZTogdHJ1ZSxcclxuICAgICAgICBzZXRTY3JlZW5CcmlnaHRuZXNzOiB0cnVlLFxyXG4gICAgICAgIGdldFNjcmVlbkJyaWdodG5lc3M6IHRydWUsXHJcbiAgICAgICAgc2V0S2VlcFNjcmVlbk9uOiB0cnVlLFxyXG4gICAgICAgIHZpYnJhdGVMb25nOiB0cnVlLFxyXG4gICAgICAgIHZpYnJhdGVTaG9ydDogdHJ1ZSxcclxuICAgICAgICBhZGRQaG9uZUNvbnRhY3Q6IHRydWUsXHJcbiAgICAgICAgc2hvd1RvYXN0OiB0cnVlLFxyXG4gICAgICAgIHNob3dMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIGhpZGVUb2FzdDogdHJ1ZSxcclxuICAgICAgICBoaWRlTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBzaG93TW9kYWw6IHRydWUsXHJcbiAgICAgICAgc2hvd0FjdGlvblNoZWV0OiB0cnVlLFxyXG4gICAgICAgIHNldE5hdmlnYXRpb25CYXJUaXRsZTogdHJ1ZSxcclxuICAgICAgICBzZXROYXZpZ2F0aW9uQmFyQ29sb3I6IHRydWUsXHJcbiAgICAgICAgbmF2aWdhdGVUbzogdHJ1ZSxcclxuICAgICAgICByZWRpcmVjdFRvOiB0cnVlLFxyXG4gICAgICAgIHJlTGF1bmNoOiB0cnVlLFxyXG4gICAgICAgIHN3aXRjaFRhYjogdHJ1ZSxcclxuICAgICAgICBuYXZpZ2F0ZUJhY2s6IHRydWUsXHJcbiAgICAgICAgZ2V0UHJvdmlkZXI6IHRydWUsXHJcbiAgICAgICAgbG9naW46IHRydWUsXHJcbiAgICAgICAgZ2V0VXNlckluZm86IHRydWUsXHJcbiAgICAgICAgc2hhcmU6IHRydWUsXHJcbiAgICAgICAgcmVxdWVzdFBheW1lbnQ6IHRydWUsXHJcbiAgICAgICAgc3Vic2NyaWJlUHVzaDogdHJ1ZSxcclxuICAgICAgICB1bnN1YnNjcmliZVB1c2g6IHRydWUsXHJcbiAgICAgICAgb25QdXNoOiB0cnVlLFxyXG4gICAgICAgIG9mZlB1c2g6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhc2VVbmkgPSB7XHJcbiAgICAgICAgb3M6IHtcclxuICAgICAgICAgICAgbnZ1ZTogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIHVuaSA9IHt9O1xyXG5cclxuICAgIGlmICh0eXBlb2YgUHJveHkgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgdW5pID0gbmV3IFByb3h5KHt9LCB7XHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KHRhcmdldCwgbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvcycpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBudnVlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAncG9zdE1lc3NhZ2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdyZXF1aXJlTmF0aXZlUGx1Z2luJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXF1aXJlTmF0aXZlUGx1Z2luO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgbWV0aG9kID0gYXBpW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFtZXRob2QpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2QgPSBjcmVhdGVQdWJsaXNoKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZFByb21pc2UobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzaWZ5KG1ldGhvZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWV0aG9kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGJhc2VVbmkpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgICAgIHVuaVtrZXldID0gYmFzZVVuaVtrZXldO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB1bmkucG9zdE1lc3NhZ2UgPSBwb3N0TWVzc2FnZTtcclxuXHJcbiAgICAgICAgdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4gPSByZXF1aXJlTmF0aXZlUGx1Z2luO1xyXG5cclxuICAgICAgICB1bmkub25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwID0gb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwO1xyXG5cclxuICAgICAgICB1bmkub25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkID0gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkO1xyXG5cclxuICAgICAgICB1bmkub25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQgPSBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZDtcclxuXHJcbiAgICAgICAgdW5pLm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZCA9IG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZDtcclxuXHJcbiAgICAgICAgT2JqZWN0LmtleXMod3gpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xyXG4gICAgICAgICAgICB2YXIgbWV0aG9kID0gYXBpW25hbWVdO1xyXG4gICAgICAgICAgICBpZiAoIW1ldGhvZCkge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kID0gY3JlYXRlUHVibGlzaChuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2hvdWxkUHJvbWlzZShuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgdW5pW25hbWVdID0gcHJvbWlzaWZ5KG1ldGhvZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1bmlbbmFtZV0gPSBtZXRob2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB1bmk7XHJcbn1cclxuXHJcbnZhciBjcmVhdGVVbmk7XHJcblxyXG5pZiAodHlwZW9mIGdldFVuaSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgY3JlYXRlVW5pID0gZ2V0VW5pO1xyXG59IGVsc2Uge1xyXG4gICAgY3JlYXRlVW5pID0gaW5pdFVuaTtcclxufVxyXG52YXIgd2VleFBsdXMgPSBuZXcgV2VleFBsdXMod2VleCk7XHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVVuaSh3ZWV4LCB3ZWV4UGx1cywgQnJvYWRjYXN0Q2hhbm5lbCk7XHJcbmV4cG9ydCB7XHJcbiAgICB3ZWV4UGx1c1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XCJwYWdlc1wiOntcInBhZ2VzL3RhYkJhci9ob21lXCI6e1wicHVsbFRvUmVmcmVzaFwiOntcInN1cHBvcnRcIjp0cnVlLFwic3R5bGVcIjpcImNpcmNsZVwiLFwib2Zmc2V0XCI6XCI2NHB4XCJ9LFwidGl0bGVOVmlld1wiOntcInR5cGVcIjpcInRyYW5zcGFyZW50XCIsXCJzZWFyY2hJbnB1dFwiOntcImJhY2tncm91bmRDb2xvclwiOlwicmdiYSgyNDUsIDI0NSwgMjQ1KVwiLFwiYm9yZGVyUmFkaXVzXCI6XCIxNnB4XCIsXCJwbGFjZWhvbGRlclwiOlwi54K55Ye75pCc57Si5ZWG5ZOBXCIsXCJkaXNhYmxlZFwiOnRydWUsXCJwbGFjZWhvbGRlckNvbG9yXCI6XCIjNjA2MjY2XCJ9LFwiYnV0dG9uc1wiOlt7XCJ0ZXh0XCI6XCLljJfkuqzluIJcIixcImZvbnRTaXplXCI6XCIxNFwiLFwic2VsZWN0XCI6dHJ1ZSxcImZsb2F0XCI6XCJsZWZ0XCIsXCJ3aWR0aFwiOlwiNzVweFwiLFwiYmFja2dyb3VuZFwiOlwicmdiYSgwLDAsMCwwKVwifSx7XCJmb250U3JjXCI6XCIvc3RhdGljL21hbGxpY29uLnR0ZlwiLFwidGV4dFwiOlwi7piNXCIsXCJmb250U2l6ZVwiOlwiMjZcIixcImNvbG9yXCI6XCIjZmZmZmZmXCIsXCJiYWNrZ3JvdW5kXCI6XCJyZ2JhKDAsMCwwLDApXCJ9XX0sXCJ1c2luZ0NvbXBvbmVudHNcIjp7fSxcInVzaW5nQXV0b0ltcG9ydENvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy90YWJCYXIvY2FydFwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIui0reeJqei9plwiLFwidXNpbmdDb21wb25lbnRzXCI6e1widW5pLW51bWJlci1ib3hcIjpcIi9jb21wb25lbnRzL3VuaS1udW1iZXItYm94XCJ9LFwidXNpbmdBdXRvSW1wb3J0Q29tcG9uZW50c1wiOnt9fSxcInBhZ2VzL3NlYXJjaC9zZWFyY2hcIjp7XCJ0aXRsZU5WaWV3XCI6e1wic2VhcmNoSW5wdXRcIjp7XCJiYWNrZ3JvdW5kQ29sb3JcIjpcInJnYmEoMjQ1LCAyNDUsIDI0NSlcIixcImJvcmRlclJhZGl1c1wiOlwiMTZweFwiLFwicGxhY2Vob2xkZXJcIjpcIueCueWHu+aQnOe0ouWVhuWTgVwiLFwiZGlzYWJsZWRcIjpmYWxzZSxcInBsYWNlaG9sZGVyQ29sb3JcIjpcIiM2MDYyNjZcIn0sXCJidXR0b25zXCI6W3tcInRleHRcIjpcIuaQnOe0olwiLFwiZm9udFNpemVcIjpcIjE2XCIsXCJ3aWR0aFwiOlwiNTBweFwifV19LFwidXNpbmdDb21wb25lbnRzXCI6e30sXCJ1c2luZ0F1dG9JbXBvcnRDb21wb25lbnRzXCI6e319LFwicGFnZXMvcHJvZHVjdC9saXN0XCI6e1wicHVsbFRvUmVmcmVzaFwiOntcInN1cHBvcnRcIjp0cnVlLFwic3R5bGVcIjpcImNpcmNsZVwifSxcInRpdGxlTlZpZXdcIjp7XCJzZWFyY2hJbnB1dFwiOntcImJhY2tncm91bmRDb2xvclwiOlwicmdiYSgyNDUsIDI0NSwgMjQ1KVwiLFwiYm9yZGVyUmFkaXVzXCI6XCIxNnB4XCIsXCJwbGFjZWhvbGRlclwiOlwi54K55Ye75pCc57Si5ZWG5ZOB5ZCN56ew77yM5ZWG5ZOB5Z6L5Y+3XCIsXCJkaXNhYmxlZFwiOnRydWUsXCJwbGFjZWhvbGRlckNvbG9yXCI6XCIjNjA2MjY2XCJ9LFwiYnV0dG9uc1wiOlt7XCJmb250U3JjXCI6XCIvc3RhdGljL21hbGxpY29uLnR0ZlwiLFwidGV4dFwiOlwi7p2EXCIsXCJmb250U2l6ZVwiOlwiMjhcIixcIndpZHRoXCI6XCI1MHB4XCIsXCJjb2xvclwiOlwiI2ZmZmZmZlwiLFwiYmFja2dyb3VuZFwiOlwicmdiYSgwLDAsMCwwKVwiLFwicmVkRG90XCI6dHJ1ZX1dfSxcInVzaW5nQ29tcG9uZW50c1wiOntcInVuaS1sb2FkLW1vcmVcIjpcIi9jb21wb25lbnRzL3VuaS1sb2FkLW1vcmUvdW5pLWxvYWQtbW9yZVwifSxcInVzaW5nQXV0b0ltcG9ydENvbXBvbmVudHNcIjp7XCJ1bmktbG9hZC1tb3JlXCI6XCIvY29tcG9uZW50cy91bmktbG9hZC1tb3JlL3VuaS1sb2FkLW1vcmVcIn19LFwicGFnZXMvcHJvZHVjdC9kZXRhaWxcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLor6bmg4XlsZXnpLpcIixcInRpdGxlTlZpZXdcIjp7XCJ0eXBlXCI6XCJ0cmFuc3BhcmVudFwifSxcInVzaW5nQ29tcG9uZW50c1wiOntcInVuaS1udW1iZXItYm94XCI6XCIvY29tcG9uZW50cy91bmktbnVtYmVyLWJveFwifSxcInVzaW5nQXV0b0ltcG9ydENvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy9sb2dpbi9sb2dpblwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIlwiLFwibmF2aWdhdGlvblN0eWxlXCI6XCJjdXN0b21cIixcInRpdGxlTlZpZXdcIjpmYWxzZSxcImFuaW1hdGlvblR5cGVcIjpcInNsaWRlLWluLWJvdHRvbVwiLFwidXNpbmdDb21wb25lbnRzXCI6e30sXCJ1c2luZ0F1dG9JbXBvcnRDb21wb25lbnRzXCI6e319LFwicGFnZXMvb3JkZXIvcGxhY2VPcmRlclwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuaPkOS6pOiuouWNlVwiLFwidXNpbmdDb21wb25lbnRzXCI6e30sXCJ1c2luZ0F1dG9JbXBvcnRDb21wb25lbnRzXCI6e319LFwicGFnZXMvcGF5L3BheVwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuaUr+S7mFwiLFwidXNpbmdDb21wb25lbnRzXCI6e30sXCJ1c2luZ0F1dG9JbXBvcnRDb21wb25lbnRzXCI6e319LFwicGFnZXMvcGF5L3BheVN1Y2Nlc3NcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLmlK/ku5jmiJDlip9cIixcInVzaW5nQ29tcG9uZW50c1wiOnt9LFwidXNpbmdBdXRvSW1wb3J0Q29tcG9uZW50c1wiOnt9fSxcInBhZ2VzL25vdGljZS9ub3RpY2VcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLpgJrnn6VcIixcInVzaW5nQ29tcG9uZW50c1wiOnt9LFwidXNpbmdBdXRvSW1wb3J0Q29tcG9uZW50c1wiOnt9fSxcInBhZ2VzL2FkZHJlc3MvYWRkcmVzc1wiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuaUtui0p+WcsOWdgOeuoeeQhlwiLFwidXNpbmdDb21wb25lbnRzXCI6e30sXCJ1c2luZ0F1dG9JbXBvcnRDb21wb25lbnRzXCI6e319LFwicGFnZXMvYWRkcmVzcy9hZGRyZXNzRWRpdFwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIue8lui+keaUtui0p+WcsOWdgFwiLFwidXNpbmdDb21wb25lbnRzXCI6e1wiY2l0eS1zZWxlY3RvclwiOlwiL2NvbXBvbmVudHMvY2l0eS1zZWxlY3RvclwifSxcInVzaW5nQXV0b0ltcG9ydENvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy9zZXR0aW5nL3NldHRpbmdcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLorr7nva5cIixcInVzaW5nQ29tcG9uZW50c1wiOnt9LFwidXNpbmdBdXRvSW1wb3J0Q29tcG9uZW50c1wiOnt9fX0sXCJnbG9iYWxTdHlsZVwiOntcIm5hdmlnYXRpb25CYXJUZXh0U3R5bGVcIjpcIndoaXRlXCIsXCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCJ1bmktYXBwXCIsXCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yXCI6XCIjRTYwMDEyXCIsXCJiYWNrZ3JvdW5kQ29sb3JcIjpcIiNFNjAwMTJcIn19IiwiZXhwb3J0IGRlZmF1bHQge1wiYXBwaWRcIjpcIl9fVU5JX182MDAyMjA4XCJ9IiwiVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fID0ge31cblZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2Nzc1wiKS5kZWZhdWx0LFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXylcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTktb25lT2YtMC0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxzYXNzLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyLmpzPz9yZWYtLTktb25lT2YtMC0zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtNCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTktb25lT2YtMC0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxzYXNzLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyLmpzPz9yZWYtLTktb25lT2YtMC0zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtNCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJTa2VsZXRvblwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjNmM2YzXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiAwLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiAwLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiOHJweFwiXG4gIH0sXG4gIFwiY2xhbXBcIjoge1xuICAgIFwib3ZlcmZsb3dcIjogXCJoaWRkZW5cIixcbiAgICBcInRleHRPdmVyZmxvd1wiOiBcImVsbGlwc2lzXCJcbiAgfSxcbiAgXCJjb21tb24taG92ZXJcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2Y1ZjVmNVwiXG4gIH0sXG4gIFwiYi1iXCI6IHtcbiAgICBcInBvc2l0aW9uOmFmdGVyXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInpJbmRleDphZnRlclwiOiAzLFxuICAgIFwibGVmdDphZnRlclwiOiAwLFxuICAgIFwicmlnaHQ6YWZ0ZXJcIjogMCxcbiAgICBcImhlaWdodDphZnRlclwiOiAwLFxuICAgIFwidHJhbnNmb3JtOmFmdGVyXCI6IFwic2NhbGVZKDAuNSlcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoOmFmdGVyXCI6IFwiMVwiLFxuICAgIFwiYm9yZGVyQm90dG9tU3R5bGU6YWZ0ZXJcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3I6YWZ0ZXJcIjogXCIjRTRFN0VEXCIsXG4gICAgXCJib3R0b206YWZ0ZXJcIjogMFxuICB9LFxuICBcImItdFwiOiB7XG4gICAgXCJwb3NpdGlvbjphZnRlcjphZnRlclwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ6SW5kZXg6YWZ0ZXI6YWZ0ZXJcIjogMyxcbiAgICBcImxlZnQ6YWZ0ZXI6YWZ0ZXJcIjogMCxcbiAgICBcInJpZ2h0OmFmdGVyOmFmdGVyXCI6IDAsXG4gICAgXCJoZWlnaHQ6YWZ0ZXI6YWZ0ZXJcIjogMCxcbiAgICBcInRyYW5zZm9ybTphZnRlcjphZnRlclwiOiBcInNjYWxlWSgwLjUpXCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aDphZnRlcjphZnRlclwiOiBcIjFcIixcbiAgICBcImJvcmRlckJvdHRvbVN0eWxlOmFmdGVyOmFmdGVyXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yOmFmdGVyOmFmdGVyXCI6IFwiI0U0RTdFRFwiLFxuICAgIFwidG9wOmFmdGVyXCI6IDBcbiAgfSxcbiAgXCJpbnB1dC1wbGFjZWhvbGRlclwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM5OTk5OTlcIlxuICB9LFxuICBcInBsYWNlaG9sZGVyXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzk5OTk5OVwiXG4gIH1cbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VzZXIubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YWUwZDQ4MSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdXNlci5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3VzZXIubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vdXNlci5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vdXNlci5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCI5ZTgxMzBlNlwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJFOi9IQnVpbGRlcl9Xb3JrU3BhY2UvdW5pLW1hbGwvcGFnZXMvdGFiQmFyL3VzZXIubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFx0ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHRlbXBsYXRlLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFxwYWdlLW1ldGEuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91c2VyLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2FlMGQ0ODEmbXBUeXBlPXBhZ2VcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwic2Nyb2xsLXZpZXdcIixcbiAgICB7XG4gICAgICBzdGF0aWNTdHlsZTogeyBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH0sXG4gICAgICBhdHRyczogeyBzY3JvbGxZOiB0cnVlLCBlbmFibGVCYWNrVG9Ub3A6IHRydWUsIGJ1YmJsZTogXCJ0cnVlXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogW1wicGFnZVwiXSB9LCBbXG4gICAgICAgIF9jKFwic2Nyb2xsZXJcIiwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFtcInVzZXItc2VjdGlvbi1iZ1wiXSB9KSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBbXCJ1c2VyLXNlY3Rpb25cIl0gfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogW1widXNlci1pbmZvLWJveFwiXSB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wicG9ydHJhaXQtYm94XCJdIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInBvcnRyYWl0XCJdLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS51c2VySW5mby5IZWFkSW1hZ2VVcmwgfHwgXCIvc3RhdGljL21pc3NpbmctZmFjZS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBbXCJpbmZvLWJveFwiXSB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1widXNlcm5hbWVcIl0sIG9uOiB7IGNsaWNrOiBfdm0ubmF2VG9Mb2dpbiB9IH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0udXNlckluZm8uVXNlck5hbWUgfHwgXCLljrvnmbvpmYYxXCIpKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5oYXNMb2dpblxuICAgICAgICAgICAgICAgICAgPyBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJkZXBhcnRtZW50XCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLmtL7pgIHmlrnvvJpcIiArIF92bS5fcyhfdm0udXNlckluZm8uRGVwYXJ0bWVudE5hbWUpKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uaGFzTG9naW5cbiAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogW1widGFnLWJveFwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1widGFnLXBob25lXCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIumUgOWUrue7j+eQhu+8mlwiICsgX3ZtLl9zKF92bS51c2VySW5mby5TYWxlc21hbikpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1widGFnLXBob25lXCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuS4iue6p+mihuWvvO+8mlwiICsgX3ZtLl9zKF92bS51c2VySW5mby5TYWxlc3N1cGVyKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uaGFzTG9naW5cbiAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBbXCJ0ai1zY3Rpb25cIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogW1widGotaXRlbVwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcIm1vbmV5XCJdIH0sIFtfdm0uX3YoXCIxMjguOFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJtb25leS10aXRsZVwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5L2Z6aKdXCIpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFtcInRqLWl0ZW1cIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJtb25leVwiXSB9LCBbX3ZtLl92KFwiMTBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wibW9uZXktdGl0bGVcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuS8mOaDoOWIuFwiKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogW1widXNlci1zZWN0aW9uLWJvdHRvbS1iZ1wiXSB9KSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBbXCJzZWMtaGVhZGVyXCJdIH0sIFtcbiAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcInNlYy1oZWFkZXItdFwiXSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIuaIkeeahOiuouWNlVwiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBbXCJvcmRlci1zZWN0aW9uXCJdIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFtcIm9yZGVyLWl0ZW1cIl0gfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJtYWxsaWNvblwiXSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGZvbnRGYW1pbHk6IFwibWFsbGljb25cIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwi7pimXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJvcmRlci1pY29uLXRpdGxlXCJdIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCLmnKrku5jmrL5cIilcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogW1wib3JkZXItaXRlbVwiXSB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidS10ZXh0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcIm1hbGxpY29uXCJdLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgZm9udEZhbWlseTogXCJtYWxsaWNvblwiIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLumo9cIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcIm9yZGVyLWljb24tdGl0bGVcIl0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIuW3suWPl+eQhlwiKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBbXCJvcmRlci1pdGVtXCJdIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ1LXRleHRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wibWFsbGljb25cIl0sXG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBmb250RmFtaWx5OiBcIm1hbGxpY29uXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIu6cmlwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wib3JkZXItaWNvbi10aXRsZVwiXSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwi5bey5Y+R6LSnXCIpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFtcIm9yZGVyLWl0ZW1cIl0gfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJtYWxsaWNvblwiXSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGZvbnRGYW1pbHk6IFwibWFsbGljb25cIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwi7pixXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJvcmRlci1pY29uLXRpdGxlXCJdIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCLpgIDotKcv6YCA5qy+XCIpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5oYXNMb2dpblxuICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBbXCJzZWMtaGVhZGVyXCJdIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJzZWMtaGVhZGVyLXRcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5oiR55qE5bel5YW3XCIpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLmhhc0xvZ2luXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1widG9vbHMtc2VjdGlvblwiXSB9LFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0udG9vbEl0ZW1zLCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1widG9vbHMtaXRlbVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBob3ZlckNsYXNzOiBcImNvbW1vbi1ob3ZlclwiLCBob3ZlclN0YXlUaW1lOiA1MCB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wiaXRlbS1pbWdcIl0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCI2MHVweFwiLCBoZWlnaHQ6IFwiNjZ1cHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogaXRlbS5zcmMgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcIml0ZW0tdGl0bGVcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLnRpdGxlKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF1cbiAgKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91c2VyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VzZXIubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIiwiPHRlbXBsYXRlPlxyXG5cdDxkaXYgY2xhc3M9XCJwYWdlXCI+XHJcblx0XHQ8c2Nyb2xsZXI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJ1c2VyLXNlY3Rpb24tYmdcIj48L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInVzZXItc2VjdGlvblwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJ1c2VyLWluZm8tYm94XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicG9ydHJhaXQtYm94XCI+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInBvcnRyYWl0XCIgOnNyYz1cInVzZXJJbmZvLkhlYWRJbWFnZVVybCB8fCAnL3N0YXRpYy9taXNzaW5nLWZhY2UucG5nJ1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJpbmZvLWJveFwiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInVzZXJuYW1lXCIgQGNsaWNrPVwibmF2VG9Mb2dpblwiPnt7dXNlckluZm8uVXNlck5hbWUgfHwgJ+WOu+eZu+mZhjEnfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiZGVwYXJ0bWVudFwiICB2LWlmPVwiaGFzTG9naW5cIj7mtL7pgIHmlrnvvJp7e3VzZXJJbmZvLkRlcGFydG1lbnROYW1lfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0YWctYm94XCIgdi1pZj1cImhhc0xvZ2luXCI+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0YWctcGhvbmVcIj7plIDllK7nu4/nkIbvvJp7e3VzZXJJbmZvLlNhbGVzbWFufX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0YWctcGhvbmVcIj7kuIrnuqfpooblr7zvvJp7e3VzZXJJbmZvLlNhbGVzc3VwZXJ9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGotc2N0aW9uXCIgIHYtaWY9XCJoYXNMb2dpblwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRqLWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJtb25leVwiPjEyOC44PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm1vbmV5LXRpdGxlXCI+5L2Z6aKdPC90ZXh0PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGotaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm1vbmV5XCI+MTA8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibW9uZXktdGl0bGVcIj7kvJjmg6DliLg8L3RleHQ+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJ1c2VyLXNlY3Rpb24tYm90dG9tLWJnXCI+PC9kaXY+XHJcblxyXG5cdFx0XHQ8IS0tIOiuouWNlSAtLT5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInNlYy1oZWFkZXJcIj5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cInNlYy1oZWFkZXItdFwiPuaIkeeahOiuouWNlTwvdGV4dD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJvcmRlci1zZWN0aW9uXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm9yZGVyLWl0ZW1cIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibWFsbGljb25cIiBzdHlsZT0nZm9udC1mYW1pbHk6bWFsbGljb247Jz4mI3hlNjI2OzwvdGV4dD5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwib3JkZXItaWNvbi10aXRsZVwiPuacquS7mOasvjwvdGV4dD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwib3JkZXItaXRlbVwiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJtYWxsaWNvblwiIHN0eWxlPSdmb250LWZhbWlseTptYWxsaWNvbjsnPiYjeGU2OGY7PC90ZXh0PlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJvcmRlci1pY29uLXRpdGxlXCI+5bey5Y+X55CGPC90ZXh0PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJvcmRlci1pdGVtXCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm1hbGxpY29uXCIgc3R5bGU9J2ZvbnQtZmFtaWx5Om1hbGxpY29uOyc+JiN4ZTcxYTs8L3RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm9yZGVyLWljb24tdGl0bGVcIj7lt7Llj5HotKc8L3RleHQ+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm9yZGVyLWl0ZW1cIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibWFsbGljb25cIiBzdHlsZT0nZm9udC1mYW1pbHk6bWFsbGljb247Jz4mI3hlNjMxOzwvdGV4dD5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwib3JkZXItaWNvbi10aXRsZVwiPumAgOi0py/pgIDmrL48L3RleHQ+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PCEtLSDmiJHnmoTlt6XlhbcgLS0+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJzZWMtaGVhZGVyXCIgdi1pZj1cImhhc0xvZ2luXCI+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJzZWMtaGVhZGVyLXRcIj7miJHnmoTlt6Xlhbc8L3RleHQ+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwidG9vbHMtc2VjdGlvblwiIHYtaWY9XCJoYXNMb2dpblwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJ0b29scy1pdGVtXCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gdG9vbEl0ZW1zXCIgdi1iaW5kOmtleT1cImluZGV4XCIgaG92ZXItY2xhc3M9XCJjb21tb24taG92ZXJcIlxyXG5cdFx0XHRcdCA6aG92ZXItc3RheS10aW1lPVwiNTBcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbS1pbWdcIj5cclxuXHRcdFx0XHRcdFx0PGltYWdlIHN0eWxlPVwid2lkdGg6IDYwdXB4O2hlaWdodDogNjZ1cHg7XCIgOnNyYz1cIml0ZW0uc3JjXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaXRlbS10aXRsZVwiPnt7aXRlbS50aXRsZX19PC90ZXh0PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvc2Nyb2xsZXI+XHJcblx0PC9kaXY+XHJcblxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5cdGNvbnN0IGdsb2JhbEV2ZW50ID0gd2VleC5yZXF1aXJlTW9kdWxlKCdnbG9iYWxFdmVudCcpO1xyXG5cdGltcG9ydCB7IG1hcFN0YXRlIH0gZnJvbSAndnVleCc7XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHR0b29sSXRlbXM6IFt7XHJcblx0XHRcdFx0XHRzcmM6IFwiL3N0YXRpYy91c2VyL2JnYmxvY2tfMDEucG5nXCIsXHJcblx0XHRcdFx0XHR0aXRsZTogXCLlu7rorq7orqLljZVcIixcclxuXHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRzcmM6IFwiL3N0YXRpYy91c2VyL2JnYmxvY2tfMDIucG5nXCIsXHJcblx0XHRcdFx0XHR0aXRsZTogXCLplIDllK7orqLljZVcIixcclxuXHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRzcmM6IFwiL3N0YXRpYy91c2VyL2JnYmxvY2tfMDEucG5nXCIsXHJcblx0XHRcdFx0XHR0aXRsZTogXCLlrqLmiLfpgIDljZVcIixcclxuXHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRzcmM6IFwiL3N0YXRpYy91c2VyL2JnYmxvY2tfMDMucG5nXCIsXHJcblx0XHRcdFx0XHR0aXRsZTogXCLlupPlrZjnrqHnkIZcIixcclxuXHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRzcmM6IFwiL3N0YXRpYy91c2VyL2JnYmxvY2tfMDQucG5nXCIsXHJcblx0XHRcdFx0XHR0aXRsZTogXCLmiJHnmoTlpZblirFcIixcclxuXHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRzcmM6IFwiL3N0YXRpYy91c2VyL2JnYmxvY2tfMDUucG5nXCIsXHJcblx0XHRcdFx0XHR0aXRsZTogXCLmiJHnmoTotKbljZVcIixcclxuXHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRzcmM6IFwiL3N0YXRpYy91c2VyL2JnYmxvY2tfMDYucG5nXCIsXHJcblx0XHRcdFx0XHR0aXRsZTogXCLooqvmi5zorr/orrDlvZVcIixcclxuXHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRzcmM6IFwiL3N0YXRpYy91c2VyL2JnYmxvY2tfMDcucG5nXCIsXHJcblx0XHRcdFx0XHR0aXRsZTogXCLlub/lkYrlvaLosaFcIixcclxuXHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRzcmM6IFwiL3N0YXRpYy91c2VyL2JnYmxvY2tfMDgucG5nXCIsXHJcblx0XHRcdFx0XHR0aXRsZTogXCLlkIjlkIznrqHnkIZcIixcclxuXHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRzcmM6IFwiL3N0YXRpYy91c2VyL2JnYmxvY2tfMDkucG5nXCIsXHJcblx0XHRcdFx0XHR0aXRsZTogXCLlj5HnpajnrqHnkIZcIixcclxuXHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRzcmM6IFwiL3N0YXRpYy91c2VyL2JnYmxvY2tfMTAucG5nXCIsXHJcblx0XHRcdFx0XHR0aXRsZTogXCLlrqLmiLfllYblk4HnrqHnkIZcIixcclxuXHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRzcmM6IFwiL3N0YXRpYy91c2VyL2JnYmxvY2tfMTEucG5nXCIsXHJcblx0XHRcdFx0XHR0aXRsZTogXCLmiJHnmoTljaHliLhcIixcclxuXHRcdFx0XHR9XVxyXG5cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdC4uLm1hcFN0YXRlKFsnaGFzTG9naW4nLCAndXNlckluZm8nXSlcclxuXHRcdH0sXHJcblx0XHRiZWZvcmVDcmVhdGUoKSB7XHJcblx0XHRcdC8vIGh0dHBzOi8vd2VleC5hcGFjaGUub3JnL3poL2RvY3MvbW9kdWxlcy9kb20uaHRtbCNhZGRydWxlXHJcblx0XHRcdGNvbnN0IGRvbU1vZHVsZSA9IHdlZXgucmVxdWlyZU1vZHVsZShcImRvbVwiKTtcclxuXHRcdFx0ZG9tTW9kdWxlLmFkZFJ1bGUoJ2ZvbnRGYWNlJywge1xyXG5cdFx0XHRcdCdmb250RmFtaWx5JzogJ21hbGxpY29uJyxcclxuXHRcdFx0XHQnc3JjJzogXCJ1cmwoJ2h0dHBzOi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTA3ODYwNF93NGtweGgwcmFmaS50dGYnKVwiXHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cdFx0Y3JlYXRlZCgpIHtcclxuXHRcdFx0dW5pLm9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcCgoZSk9PntcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6Jy9wYWdlcy9zZXR0aW5nL3NldHRpbmcnXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSlcclxuXHRcdFx0XHJcblx0XHRcdGdsb2JhbEV2ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwbHVzTWVzc2FnZVwiLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUuZGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6e1xyXG5cdFx0XHRcclxuXHRcdFx0bmF2VG9Mb2dpbigpe1xyXG5cdFx0XHRcdGlmICghdGhpcy5oYXNMb2dpbikge1xyXG5cdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHR1cmw6Jy9wYWdlcy9sb2dpbi9sb2dpbidcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvKipcclxuXHRcdFx0ICog57uf5LiA6Lez6L2s5o6l5Y+jLOaLpuaIquacqueZu+W9lei3r+eUsVxyXG5cdFx0XHQgKiBuYXZpZ2F0b3LmoIfnrb7njrDlnKjpu5jorqTmsqHmnInovazlnLrliqjnlLvvvIzmiYDku6XnlKh2aWV3XHJcblx0XHRcdCAqL1xyXG5cdFx0XHRuYXZUbyh1cmwpIHtcclxuXHRcdFx0XHRpZiAoIXRoaXMuaGFzTG9naW4pIHtcclxuXHRcdFx0XHRcdHVybCA9ICcvcGFnZXMvbG9naW4vbG9naW4nO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG48L3NjcmlwdD5cclxuPHN0eWxlPlxyXG5cdC5tYWxsaWNvbiB7XHJcblx0XHRmb250LXNpemU6IDY2dXB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTB1cHg7XHJcblx0XHRjb2xvcjogIzhGOTI5ODtcclxuXHR9XHJcblxyXG5cdC5wYWdlIHtcclxuXHRcdHdpZHRoOiA3NTB1cHg7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuXHR9XHJcblxyXG5cdC51c2VyLXNlY3Rpb24tYmcge1xyXG5cdFx0d2lkdGg6IDc1MHVweDtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGhlaWdodDogMTAwdXB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2U5MzIzZDtcclxuXHRcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJTtcclxuXHRcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MCU7XHJcblx0fVxyXG5cclxuXHQudXNlci1zZWN0aW9uIHtcclxuXHRcdGhlaWdodDogMzYwdXB4O1xyXG5cdFx0cGFkZGluZzogMzB1cHggMzB1cHggMDtcclxuXHRcdG1hcmdpbjogMCAzMHVweDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTB1cHg7XHJcblx0fVxyXG5cclxuXHQudXNlci1pbmZvLWJveCB7XHJcblx0XHRoZWlnaHQ6IDE4MHVweDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0ei1pbmRleDogMTtcclxuXHR9XHJcblx0LnBvcnRyYWl0LWJveHtcclxuXHRcdHdpZHRoOiAxMzJ1cHg7XHJcblx0XHRoZWlnaHQ6IDEzMnVweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDc2dXB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxuXHR9XHJcblx0LnBvcnRyYWl0IHtcclxuXHRcdHdpZHRoOiAxMzB1cHg7XHJcblx0XHRoZWlnaHQ6IDEzMHVweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDc1dXB4O1xyXG5cdH1cclxuXHJcblx0LmluZm8tYm94IHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdHdpZHRoOiA1MDB1cHg7XHJcblx0fVxyXG5cclxuXHQudXNlcm5hbWUge1xyXG5cdFx0Zm9udC1zaXplOiAzMnVweDtcclxuXHRcdGNvbG9yOiAjMzAzMTMzO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDIwdXB4O1xyXG5cdH1cclxuXHJcblx0LmRlcGFydG1lbnQge1xyXG5cdFx0Zm9udC1zaXplOiAyNHVweDtcclxuXHRcdGNvbG9yOiAjNjA2MjY2O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDIwdXB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMzB1cHg7XHJcblx0fVxyXG5cclxuXHQudGFnLWJveCB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0bWFyZ2luLXRvcDogMzB1cHg7XHJcblx0fVxyXG5cclxuXHQudGFnLXBob25lIHtcclxuXHRcdGZvbnQtc2l6ZTogMjR1cHg7XHJcblx0XHRjb2xvcjogIzYwNjI2NjtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMHVweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMjB1cHg7XHJcblx0XHRwYWRkaW5nOiA4dXB4IDE1dXB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRib3JkZXItcmFkaXVzOiAyMHVweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGOTZENzM7XHJcblx0fVxyXG5cclxuXHQudGotc2N0aW9uIHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTB1cHg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRtYXJnaW4tdG9wOiAxMHVweDtcclxuXHRcdHBhZGRpbmc6IDAgNjB1cHg7XHJcblx0XHR3aWR0aDogNjkwdXB4O1xyXG5cdH1cclxuXHJcblx0LnRqLWl0ZW0ge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGhlaWdodDogMTQwdXB4O1xyXG5cdH1cclxuXHJcblx0Lm1vbmV5IHtcclxuXHRcdGZvbnQtc2l6ZTogMzJ1cHg7XHJcblx0XHRjb2xvcjogIzMwMzEzMztcclxuXHRcdG1hcmdpbi1ib3R0b206IDh1cHg7XHJcblx0fVxyXG5cclxuXHQubW9uZXktdGl0bGUge1xyXG5cdFx0Zm9udC1zaXplOiAyNHVweDtcclxuXHRcdGNvbG9yOiAjNzU3ODdkO1xyXG5cdH1cclxuXHJcblx0LnVzZXItc2VjdGlvbi1ib3R0b20tYmcge1xyXG5cdFx0d2lkdGg6IDY5MHVweDtcclxuXHRcdGhlaWdodDogMTB1cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTkzMjNkO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTB1cHg7XHJcblx0XHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTB1cHg7XHJcblx0XHRtYXJnaW4tbGVmdDogMzB1cHg7XHJcblx0fVxyXG5cclxuXHQvKiDmiJHnmoTorqLljZUgKi9cclxuXHQuc2VjLWhlYWRlciB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0XHRoZWlnaHQ6IDgwdXB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMzB1cHg7XHJcblx0XHRwYWRkaW5nOiAwdXB4IDMwdXB4O1xyXG5cdH1cclxuXHJcblx0LnNlYy1oZWFkZXItdCB7XHJcblx0XHRmb250LXNpemU6IDI4dXB4O1xyXG5cdFx0Y29sb3I6ICMzMDMxMzM7XHJcblx0fVxyXG5cclxuXHQub3JkZXItc2VjdGlvbiB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdFx0cGFkZGluZzogMHVweCAzMHVweCAzMHVweCAzMHVweDtcclxuXHR9XHJcblxyXG5cdC5vcmRlci1pdGVtIHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHR3aWR0aDogMTIwdXB4O1xyXG5cdFx0aGVpZ2h0OiAxMjB1cHg7XHJcblx0fVxyXG5cclxuXHQub3JkZXItaWNvbi10aXRsZSB7XHJcblx0XHRmb250LXNpemU6IDI0dXB4O1xyXG5cdFx0Y29sb3I6ICMzMDMxMzM7XHJcblx0fVxyXG5cclxuXHQvKiDmiJHnmoTlt6XlhbcgKi9cclxuXHQudG9vbHMtc2VjdGlvbiB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRcdHBhZGRpbmc6IDB1cHggMzB1cHggMzB1cHggMzB1cHg7XHJcblx0XHR3aWR0aDogNzUwdXB4O1xyXG5cdFx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdH1cclxuXHJcblx0LnRvb2xzLWl0ZW0ge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdG1hcmdpbi1ib3R0b206IDUwdXB4O1xyXG5cdFx0d2lkdGg6IDE3MnVweDtcclxuXHR9XHJcblxyXG5cdC5pdGVtLWltZyB7XHJcblx0XHRoZWlnaHQ6IDgwdXB4O1xyXG5cdH1cclxuXHJcblx0Lml0ZW0tdGl0bGUge1xyXG5cdFx0Zm9udC1zaXplOiAyNHVweDtcclxuXHRcdGNvbG9yOiAjMzAzMTMzO1xyXG5cdFx0bWFyZ2luLXRvcDogMzB1cHg7XHJcblx0XHR3aWR0aDogMTcydXB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuPC9zdHlsZT5cclxuIiwiZnVuY3Rpb24gdHlwb2YgKHYpIHtcclxuICB2YXIgcyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2KVxyXG4gIHJldHVybiBzLnN1YnN0cmluZyg4LCBzLmxlbmd0aCAtIDEpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRGVidWdNb2RlICgpIHtcclxuICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xyXG4gIHJldHVybiB0eXBlb2YgX19jaGFubmVsSWRfXyA9PT0gJ3N0cmluZycgJiYgX19jaGFubmVsSWRfX1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXRMb2cgKCkge1xyXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xyXG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XVxyXG4gIH1cclxuICB2YXIgdHlwZSA9IGFyZ3Muc2hpZnQoKVxyXG4gIGlmIChpc0RlYnVnTW9kZSgpKSB7XHJcbiAgICBhcmdzLnB1c2goYXJncy5wb3AoKS5yZXBsYWNlKCdhdCAnLCAndW5pLWFwcDovLy8nKSlcclxuICAgIHJldHVybiBjb25zb2xlW3R5cGVdWydhcHBseSddKGNvbnNvbGUsIGFyZ3MpXHJcbiAgfVxyXG5cclxuICB2YXIgbXNncyA9IGFyZ3MubWFwKGZ1bmN0aW9uICh2KSB7XHJcbiAgICB2YXIgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2KVxyXG5cclxuICAgIGlmICh0eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdbb2JqZWN0IG9iamVjdF0nKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgdiA9ICctLS1CRUdJTjpKU09OLS0tJyArIEpTT04uc3RyaW5naWZ5KHYpICsgJy0tLUVORDpKU09OLS0tJ1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdiA9ICdbb2JqZWN0IG9iamVjdF0nXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh2ID09PSBudWxsKSB7XHJcbiAgICAgICAgdiA9ICctLS1OVUxMLS0tJ1xyXG4gICAgICB9IGVsc2UgaWYgKHYgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHYgPSAnLS0tVU5ERUZJTkVELS0tJ1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciB2VHlwZSA9IHR5cG9mKHYpLnRvVXBwZXJDYXNlKClcclxuXHJcbiAgICAgICAgaWYgKHZUeXBlID09PSAnTlVNQkVSJyB8fCB2VHlwZSA9PT0gJ0JPT0xFQU4nKSB7XHJcbiAgICAgICAgICB2ID0gJy0tLUJFR0lOOicgKyB2VHlwZSArICctLS0nICsgdiArICctLS1FTkQ6JyArIHZUeXBlICsgJy0tLSdcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdiA9IFN0cmluZyh2KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2XHJcbiAgfSlcclxuICB2YXIgbXNnID0gJydcclxuXHJcbiAgaWYgKG1zZ3MubGVuZ3RoID4gMSkge1xyXG4gICAgdmFyIGxhc3RNc2cgPSBtc2dzLnBvcCgpXHJcbiAgICBtc2cgPSBtc2dzLmpvaW4oJy0tLUNPTU1BLS0tJylcclxuXHJcbiAgICBpZiAobGFzdE1zZy5pbmRleE9mKCcgYXQgJykgPT09IDApIHtcclxuICAgICAgbXNnICs9IGxhc3RNc2dcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1zZyArPSAnLS0tQ09NTUEtLS0nICsgbGFzdE1zZ1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBtc2cgPSBtc2dzWzBdXHJcbiAgfVxyXG5cclxuICBjb25zb2xlW3R5cGVdKG1zZylcclxufVxyXG4iLCIvKipcbiAqIHZ1ZXggdjMuMC4xXG4gKiAoYykgMjAxNyBFdmFuIFlvdVxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbnZhciBhcHBseU1peGluID0gZnVuY3Rpb24gKFZ1ZSkge1xuICB2YXIgdmVyc2lvbiA9IE51bWJlcihWdWUudmVyc2lvbi5zcGxpdCgnLicpWzBdKTtcblxuICBpZiAodmVyc2lvbiA+PSAyKSB7XG4gICAgVnVlLm1peGluKHsgYmVmb3JlQ3JlYXRlOiB2dWV4SW5pdCB9KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBvdmVycmlkZSBpbml0IGFuZCBpbmplY3QgdnVleCBpbml0IHByb2NlZHVyZVxuICAgIC8vIGZvciAxLnggYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gICAgdmFyIF9pbml0ID0gVnVlLnByb3RvdHlwZS5faW5pdDtcbiAgICBWdWUucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgIGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHt9O1xuXG4gICAgICBvcHRpb25zLmluaXQgPSBvcHRpb25zLmluaXRcbiAgICAgICAgPyBbdnVleEluaXRdLmNvbmNhdChvcHRpb25zLmluaXQpXG4gICAgICAgIDogdnVleEluaXQ7XG4gICAgICBfaW5pdC5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogVnVleCBpbml0IGhvb2ssIGluamVjdGVkIGludG8gZWFjaCBpbnN0YW5jZXMgaW5pdCBob29rcyBsaXN0LlxuICAgKi9cblxuICBmdW5jdGlvbiB2dWV4SW5pdCAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLiRvcHRpb25zO1xuICAgIC8vIHN0b3JlIGluamVjdGlvblxuICAgIGlmIChvcHRpb25zLnN0b3JlKSB7XG4gICAgICB0aGlzLiRzdG9yZSA9IHR5cGVvZiBvcHRpb25zLnN0b3JlID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gb3B0aW9ucy5zdG9yZSgpXG4gICAgICAgIDogb3B0aW9ucy5zdG9yZTtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMucGFyZW50ICYmIG9wdGlvbnMucGFyZW50LiRzdG9yZSkge1xuICAgICAgdGhpcy4kc3RvcmUgPSBvcHRpb25zLnBhcmVudC4kc3RvcmU7XG4gICAgfVxuICB9XG59O1xuXG52YXIgZGV2dG9vbEhvb2sgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICB3aW5kb3cuX19WVUVfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztcblxuZnVuY3Rpb24gZGV2dG9vbFBsdWdpbiAoc3RvcmUpIHtcbiAgaWYgKCFkZXZ0b29sSG9vaykgeyByZXR1cm4gfVxuXG4gIHN0b3JlLl9kZXZ0b29sSG9vayA9IGRldnRvb2xIb29rO1xuXG4gIGRldnRvb2xIb29rLmVtaXQoJ3Z1ZXg6aW5pdCcsIHN0b3JlKTtcblxuICBkZXZ0b29sSG9vay5vbigndnVleDp0cmF2ZWwtdG8tc3RhdGUnLCBmdW5jdGlvbiAodGFyZ2V0U3RhdGUpIHtcbiAgICBzdG9yZS5yZXBsYWNlU3RhdGUodGFyZ2V0U3RhdGUpO1xuICB9KTtcblxuICBzdG9yZS5zdWJzY3JpYmUoZnVuY3Rpb24gKG11dGF0aW9uLCBzdGF0ZSkge1xuICAgIGRldnRvb2xIb29rLmVtaXQoJ3Z1ZXg6bXV0YXRpb24nLCBtdXRhdGlvbiwgc3RhdGUpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGZpcnN0IGl0ZW0gdGhhdCBwYXNzIHRoZSB0ZXN0XG4gKiBieSBzZWNvbmQgYXJndW1lbnQgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmXG4gKiBAcmV0dXJuIHsqfVxuICovXG4vKipcbiAqIERlZXAgY29weSB0aGUgZ2l2ZW4gb2JqZWN0IGNvbnNpZGVyaW5nIGNpcmN1bGFyIHN0cnVjdHVyZS5cbiAqIFRoaXMgZnVuY3Rpb24gY2FjaGVzIGFsbCBuZXN0ZWQgb2JqZWN0cyBhbmQgaXRzIGNvcGllcy5cbiAqIElmIGl0IGRldGVjdHMgY2lyY3VsYXIgc3RydWN0dXJlLCB1c2UgY2FjaGVkIGNvcHkgdG8gYXZvaWQgaW5maW5pdGUgbG9vcC5cbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBjYWNoZVxuICogQHJldHVybiB7Kn1cbiAqL1xuXG5cbi8qKlxuICogZm9yRWFjaCBmb3Igb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGZvckVhY2hWYWx1ZSAob2JqLCBmbikge1xuICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gZm4ob2JqW2tleV0sIGtleSk7IH0pO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdCAob2JqKSB7XG4gIHJldHVybiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCdcbn1cblxuZnVuY3Rpb24gaXNQcm9taXNlICh2YWwpIHtcbiAgcmV0dXJuIHZhbCAmJiB0eXBlb2YgdmFsLnRoZW4gPT09ICdmdW5jdGlvbidcbn1cblxuZnVuY3Rpb24gYXNzZXJ0IChjb25kaXRpb24sIG1zZykge1xuICBpZiAoIWNvbmRpdGlvbikgeyB0aHJvdyBuZXcgRXJyb3IoKFwiW3Z1ZXhdIFwiICsgbXNnKSkgfVxufVxuXG52YXIgTW9kdWxlID0gZnVuY3Rpb24gTW9kdWxlIChyYXdNb2R1bGUsIHJ1bnRpbWUpIHtcbiAgdGhpcy5ydW50aW1lID0gcnVudGltZTtcbiAgdGhpcy5fY2hpbGRyZW4gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB0aGlzLl9yYXdNb2R1bGUgPSByYXdNb2R1bGU7XG4gIHZhciByYXdTdGF0ZSA9IHJhd01vZHVsZS5zdGF0ZTtcbiAgdGhpcy5zdGF0ZSA9ICh0eXBlb2YgcmF3U3RhdGUgPT09ICdmdW5jdGlvbicgPyByYXdTdGF0ZSgpIDogcmF3U3RhdGUpIHx8IHt9O1xufTtcblxudmFyIHByb3RvdHlwZUFjY2Vzc29ycyQxID0geyBuYW1lc3BhY2VkOiB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH07XG5cbnByb3RvdHlwZUFjY2Vzc29ycyQxLm5hbWVzcGFjZWQuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gISF0aGlzLl9yYXdNb2R1bGUubmFtZXNwYWNlZFxufTtcblxuTW9kdWxlLnByb3RvdHlwZS5hZGRDaGlsZCA9IGZ1bmN0aW9uIGFkZENoaWxkIChrZXksIG1vZHVsZSkge1xuICB0aGlzLl9jaGlsZHJlbltrZXldID0gbW9kdWxlO1xufTtcblxuTW9kdWxlLnByb3RvdHlwZS5yZW1vdmVDaGlsZCA9IGZ1bmN0aW9uIHJlbW92ZUNoaWxkIChrZXkpIHtcbiAgZGVsZXRlIHRoaXMuX2NoaWxkcmVuW2tleV07XG59O1xuXG5Nb2R1bGUucHJvdG90eXBlLmdldENoaWxkID0gZnVuY3Rpb24gZ2V0Q2hpbGQgKGtleSkge1xuICByZXR1cm4gdGhpcy5fY2hpbGRyZW5ba2V5XVxufTtcblxuTW9kdWxlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUgKHJhd01vZHVsZSkge1xuICB0aGlzLl9yYXdNb2R1bGUubmFtZXNwYWNlZCA9IHJhd01vZHVsZS5uYW1lc3BhY2VkO1xuICBpZiAocmF3TW9kdWxlLmFjdGlvbnMpIHtcbiAgICB0aGlzLl9yYXdNb2R1bGUuYWN0aW9ucyA9IHJhd01vZHVsZS5hY3Rpb25zO1xuICB9XG4gIGlmIChyYXdNb2R1bGUubXV0YXRpb25zKSB7XG4gICAgdGhpcy5fcmF3TW9kdWxlLm11dGF0aW9ucyA9IHJhd01vZHVsZS5tdXRhdGlvbnM7XG4gIH1cbiAgaWYgKHJhd01vZHVsZS5nZXR0ZXJzKSB7XG4gICAgdGhpcy5fcmF3TW9kdWxlLmdldHRlcnMgPSByYXdNb2R1bGUuZ2V0dGVycztcbiAgfVxufTtcblxuTW9kdWxlLnByb3RvdHlwZS5mb3JFYWNoQ2hpbGQgPSBmdW5jdGlvbiBmb3JFYWNoQ2hpbGQgKGZuKSB7XG4gIGZvckVhY2hWYWx1ZSh0aGlzLl9jaGlsZHJlbiwgZm4pO1xufTtcblxuTW9kdWxlLnByb3RvdHlwZS5mb3JFYWNoR2V0dGVyID0gZnVuY3Rpb24gZm9yRWFjaEdldHRlciAoZm4pIHtcbiAgaWYgKHRoaXMuX3Jhd01vZHVsZS5nZXR0ZXJzKSB7XG4gICAgZm9yRWFjaFZhbHVlKHRoaXMuX3Jhd01vZHVsZS5nZXR0ZXJzLCBmbik7XG4gIH1cbn07XG5cbk1vZHVsZS5wcm90b3R5cGUuZm9yRWFjaEFjdGlvbiA9IGZ1bmN0aW9uIGZvckVhY2hBY3Rpb24gKGZuKSB7XG4gIGlmICh0aGlzLl9yYXdNb2R1bGUuYWN0aW9ucykge1xuICAgIGZvckVhY2hWYWx1ZSh0aGlzLl9yYXdNb2R1bGUuYWN0aW9ucywgZm4pO1xuICB9XG59O1xuXG5Nb2R1bGUucHJvdG90eXBlLmZvckVhY2hNdXRhdGlvbiA9IGZ1bmN0aW9uIGZvckVhY2hNdXRhdGlvbiAoZm4pIHtcbiAgaWYgKHRoaXMuX3Jhd01vZHVsZS5tdXRhdGlvbnMpIHtcbiAgICBmb3JFYWNoVmFsdWUodGhpcy5fcmF3TW9kdWxlLm11dGF0aW9ucywgZm4pO1xuICB9XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyggTW9kdWxlLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzJDEgKTtcblxudmFyIE1vZHVsZUNvbGxlY3Rpb24gPSBmdW5jdGlvbiBNb2R1bGVDb2xsZWN0aW9uIChyYXdSb290TW9kdWxlKSB7XG4gIC8vIHJlZ2lzdGVyIHJvb3QgbW9kdWxlIChWdWV4LlN0b3JlIG9wdGlvbnMpXG4gIHRoaXMucmVnaXN0ZXIoW10sIHJhd1Jvb3RNb2R1bGUsIGZhbHNlKTtcbn07XG5cbk1vZHVsZUNvbGxlY3Rpb24ucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldCAocGF0aCkge1xuICByZXR1cm4gcGF0aC5yZWR1Y2UoZnVuY3Rpb24gKG1vZHVsZSwga2V5KSB7XG4gICAgcmV0dXJuIG1vZHVsZS5nZXRDaGlsZChrZXkpXG4gIH0sIHRoaXMucm9vdClcbn07XG5cbk1vZHVsZUNvbGxlY3Rpb24ucHJvdG90eXBlLmdldE5hbWVzcGFjZSA9IGZ1bmN0aW9uIGdldE5hbWVzcGFjZSAocGF0aCkge1xuICB2YXIgbW9kdWxlID0gdGhpcy5yb290O1xuICByZXR1cm4gcGF0aC5yZWR1Y2UoZnVuY3Rpb24gKG5hbWVzcGFjZSwga2V5KSB7XG4gICAgbW9kdWxlID0gbW9kdWxlLmdldENoaWxkKGtleSk7XG4gICAgcmV0dXJuIG5hbWVzcGFjZSArIChtb2R1bGUubmFtZXNwYWNlZCA/IGtleSArICcvJyA6ICcnKVxuICB9LCAnJylcbn07XG5cbk1vZHVsZUNvbGxlY3Rpb24ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSQxIChyYXdSb290TW9kdWxlKSB7XG4gIHVwZGF0ZShbXSwgdGhpcy5yb290LCByYXdSb290TW9kdWxlKTtcbn07XG5cbk1vZHVsZUNvbGxlY3Rpb24ucHJvdG90eXBlLnJlZ2lzdGVyID0gZnVuY3Rpb24gcmVnaXN0ZXIgKHBhdGgsIHJhd01vZHVsZSwgcnVudGltZSkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuICAgIGlmICggcnVudGltZSA9PT0gdm9pZCAwICkgcnVudGltZSA9IHRydWU7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBhc3NlcnRSYXdNb2R1bGUocGF0aCwgcmF3TW9kdWxlKTtcbiAgfVxuXG4gIHZhciBuZXdNb2R1bGUgPSBuZXcgTW9kdWxlKHJhd01vZHVsZSwgcnVudGltZSk7XG4gIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgIHRoaXMucm9vdCA9IG5ld01vZHVsZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFyZW50ID0gdGhpcy5nZXQocGF0aC5zbGljZSgwLCAtMSkpO1xuICAgIHBhcmVudC5hZGRDaGlsZChwYXRoW3BhdGgubGVuZ3RoIC0gMV0sIG5ld01vZHVsZSk7XG4gIH1cblxuICAvLyByZWdpc3RlciBuZXN0ZWQgbW9kdWxlc1xuICBpZiAocmF3TW9kdWxlLm1vZHVsZXMpIHtcbiAgICBmb3JFYWNoVmFsdWUocmF3TW9kdWxlLm1vZHVsZXMsIGZ1bmN0aW9uIChyYXdDaGlsZE1vZHVsZSwga2V5KSB7XG4gICAgICB0aGlzJDEucmVnaXN0ZXIocGF0aC5jb25jYXQoa2V5KSwgcmF3Q2hpbGRNb2R1bGUsIHJ1bnRpbWUpO1xuICAgIH0pO1xuICB9XG59O1xuXG5Nb2R1bGVDb2xsZWN0aW9uLnByb3RvdHlwZS51bnJlZ2lzdGVyID0gZnVuY3Rpb24gdW5yZWdpc3RlciAocGF0aCkge1xuICB2YXIgcGFyZW50ID0gdGhpcy5nZXQocGF0aC5zbGljZSgwLCAtMSkpO1xuICB2YXIga2V5ID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdO1xuICBpZiAoIXBhcmVudC5nZXRDaGlsZChrZXkpLnJ1bnRpbWUpIHsgcmV0dXJuIH1cblxuICBwYXJlbnQucmVtb3ZlQ2hpbGQoa2V5KTtcbn07XG5cbmZ1bmN0aW9uIHVwZGF0ZSAocGF0aCwgdGFyZ2V0TW9kdWxlLCBuZXdNb2R1bGUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBhc3NlcnRSYXdNb2R1bGUocGF0aCwgbmV3TW9kdWxlKTtcbiAgfVxuXG4gIC8vIHVwZGF0ZSB0YXJnZXQgbW9kdWxlXG4gIHRhcmdldE1vZHVsZS51cGRhdGUobmV3TW9kdWxlKTtcblxuICAvLyB1cGRhdGUgbmVzdGVkIG1vZHVsZXNcbiAgaWYgKG5ld01vZHVsZS5tb2R1bGVzKSB7XG4gICAgZm9yICh2YXIga2V5IGluIG5ld01vZHVsZS5tb2R1bGVzKSB7XG4gICAgICBpZiAoIXRhcmdldE1vZHVsZS5nZXRDaGlsZChrZXkpKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgXCJbdnVleF0gdHJ5aW5nIHRvIGFkZCBhIG5ldyBtb2R1bGUgJ1wiICsga2V5ICsgXCInIG9uIGhvdCByZWxvYWRpbmcsIFwiICtcbiAgICAgICAgICAgICdtYW51YWwgcmVsb2FkIGlzIG5lZWRlZCdcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdXBkYXRlKFxuICAgICAgICBwYXRoLmNvbmNhdChrZXkpLFxuICAgICAgICB0YXJnZXRNb2R1bGUuZ2V0Q2hpbGQoa2V5KSxcbiAgICAgICAgbmV3TW9kdWxlLm1vZHVsZXNba2V5XVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIGZ1bmN0aW9uQXNzZXJ0ID0ge1xuICBhc3NlcnQ6IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nOyB9LFxuICBleHBlY3RlZDogJ2Z1bmN0aW9uJ1xufTtcblxudmFyIG9iamVjdEFzc2VydCA9IHtcbiAgYXNzZXJ0OiBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyB8fFxuICAgICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWx1ZS5oYW5kbGVyID09PSAnZnVuY3Rpb24nKTsgfSxcbiAgZXhwZWN0ZWQ6ICdmdW5jdGlvbiBvciBvYmplY3Qgd2l0aCBcImhhbmRsZXJcIiBmdW5jdGlvbidcbn07XG5cbnZhciBhc3NlcnRUeXBlcyA9IHtcbiAgZ2V0dGVyczogZnVuY3Rpb25Bc3NlcnQsXG4gIG11dGF0aW9uczogZnVuY3Rpb25Bc3NlcnQsXG4gIGFjdGlvbnM6IG9iamVjdEFzc2VydFxufTtcblxuZnVuY3Rpb24gYXNzZXJ0UmF3TW9kdWxlIChwYXRoLCByYXdNb2R1bGUpIHtcbiAgT2JqZWN0LmtleXMoYXNzZXJ0VHlwZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmICghcmF3TW9kdWxlW2tleV0pIHsgcmV0dXJuIH1cblxuICAgIHZhciBhc3NlcnRPcHRpb25zID0gYXNzZXJ0VHlwZXNba2V5XTtcblxuICAgIGZvckVhY2hWYWx1ZShyYXdNb2R1bGVba2V5XSwgZnVuY3Rpb24gKHZhbHVlLCB0eXBlKSB7XG4gICAgICBhc3NlcnQoXG4gICAgICAgIGFzc2VydE9wdGlvbnMuYXNzZXJ0KHZhbHVlKSxcbiAgICAgICAgbWFrZUFzc2VydGlvbk1lc3NhZ2UocGF0aCwga2V5LCB0eXBlLCB2YWx1ZSwgYXNzZXJ0T3B0aW9ucy5leHBlY3RlZClcbiAgICAgICk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtYWtlQXNzZXJ0aW9uTWVzc2FnZSAocGF0aCwga2V5LCB0eXBlLCB2YWx1ZSwgZXhwZWN0ZWQpIHtcbiAgdmFyIGJ1ZiA9IGtleSArIFwiIHNob3VsZCBiZSBcIiArIGV4cGVjdGVkICsgXCIgYnV0IFxcXCJcIiArIGtleSArIFwiLlwiICsgdHlwZSArIFwiXFxcIlwiO1xuICBpZiAocGF0aC5sZW5ndGggPiAwKSB7XG4gICAgYnVmICs9IFwiIGluIG1vZHVsZSBcXFwiXCIgKyAocGF0aC5qb2luKCcuJykpICsgXCJcXFwiXCI7XG4gIH1cbiAgYnVmICs9IFwiIGlzIFwiICsgKEpTT04uc3RyaW5naWZ5KHZhbHVlKSkgKyBcIi5cIjtcbiAgcmV0dXJuIGJ1ZlxufVxuXG52YXIgVnVlOyAvLyBiaW5kIG9uIGluc3RhbGxcblxudmFyIFN0b3JlID0gZnVuY3Rpb24gU3RvcmUgKG9wdGlvbnMpIHtcbiAgdmFyIHRoaXMkMSA9IHRoaXM7XG4gIGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHt9O1xuXG4gIC8vIEF1dG8gaW5zdGFsbCBpZiBpdCBpcyBub3QgZG9uZSB5ZXQgYW5kIGB3aW5kb3dgIGhhcyBgVnVlYC5cbiAgLy8gVG8gYWxsb3cgdXNlcnMgdG8gYXZvaWQgYXV0by1pbnN0YWxsYXRpb24gaW4gc29tZSBjYXNlcyxcbiAgLy8gdGhpcyBjb2RlIHNob3VsZCBiZSBwbGFjZWQgaGVyZS4gU2VlICM3MzFcbiAgaWYgKCFWdWUgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LlZ1ZSkge1xuICAgIGluc3RhbGwod2luZG93LlZ1ZSk7XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGFzc2VydChWdWUsIFwibXVzdCBjYWxsIFZ1ZS51c2UoVnVleCkgYmVmb3JlIGNyZWF0aW5nIGEgc3RvcmUgaW5zdGFuY2UuXCIpO1xuICAgIGFzc2VydCh0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcsIFwidnVleCByZXF1aXJlcyBhIFByb21pc2UgcG9seWZpbGwgaW4gdGhpcyBicm93c2VyLlwiKTtcbiAgICBhc3NlcnQodGhpcyBpbnN0YW5jZW9mIFN0b3JlLCBcIlN0b3JlIG11c3QgYmUgY2FsbGVkIHdpdGggdGhlIG5ldyBvcGVyYXRvci5cIik7XG4gIH1cblxuICB2YXIgcGx1Z2lucyA9IG9wdGlvbnMucGx1Z2luczsgaWYgKCBwbHVnaW5zID09PSB2b2lkIDAgKSBwbHVnaW5zID0gW107XG4gIHZhciBzdHJpY3QgPSBvcHRpb25zLnN0cmljdDsgaWYgKCBzdHJpY3QgPT09IHZvaWQgMCApIHN0cmljdCA9IGZhbHNlO1xuXG4gIHZhciBzdGF0ZSA9IG9wdGlvbnMuc3RhdGU7IGlmICggc3RhdGUgPT09IHZvaWQgMCApIHN0YXRlID0ge307XG4gIGlmICh0eXBlb2Ygc3RhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBzdGF0ZSA9IHN0YXRlKCkgfHwge307XG4gIH1cblxuICAvLyBzdG9yZSBpbnRlcm5hbCBzdGF0ZVxuICB0aGlzLl9jb21taXR0aW5nID0gZmFsc2U7XG4gIHRoaXMuX2FjdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB0aGlzLl9hY3Rpb25TdWJzY3JpYmVycyA9IFtdO1xuICB0aGlzLl9tdXRhdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB0aGlzLl93cmFwcGVkR2V0dGVycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHRoaXMuX21vZHVsZXMgPSBuZXcgTW9kdWxlQ29sbGVjdGlvbihvcHRpb25zKTtcbiAgdGhpcy5fbW9kdWxlc05hbWVzcGFjZU1hcCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHRoaXMuX3N1YnNjcmliZXJzID0gW107XG4gIHRoaXMuX3dhdGNoZXJWTSA9IG5ldyBWdWUoKTtcblxuICAvLyBiaW5kIGNvbW1pdCBhbmQgZGlzcGF0Y2ggdG8gc2VsZlxuICB2YXIgc3RvcmUgPSB0aGlzO1xuICB2YXIgcmVmID0gdGhpcztcbiAgdmFyIGRpc3BhdGNoID0gcmVmLmRpc3BhdGNoO1xuICB2YXIgY29tbWl0ID0gcmVmLmNvbW1pdDtcbiAgdGhpcy5kaXNwYXRjaCA9IGZ1bmN0aW9uIGJvdW5kRGlzcGF0Y2ggKHR5cGUsIHBheWxvYWQpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2guY2FsbChzdG9yZSwgdHlwZSwgcGF5bG9hZClcbiAgfTtcbiAgdGhpcy5jb21taXQgPSBmdW5jdGlvbiBib3VuZENvbW1pdCAodHlwZSwgcGF5bG9hZCwgb3B0aW9ucykge1xuICAgIHJldHVybiBjb21taXQuY2FsbChzdG9yZSwgdHlwZSwgcGF5bG9hZCwgb3B0aW9ucylcbiAgfTtcblxuICAvLyBzdHJpY3QgbW9kZVxuICB0aGlzLnN0cmljdCA9IHN0cmljdDtcblxuICAvLyBpbml0IHJvb3QgbW9kdWxlLlxuICAvLyB0aGlzIGFsc28gcmVjdXJzaXZlbHkgcmVnaXN0ZXJzIGFsbCBzdWItbW9kdWxlc1xuICAvLyBhbmQgY29sbGVjdHMgYWxsIG1vZHVsZSBnZXR0ZXJzIGluc2lkZSB0aGlzLl93cmFwcGVkR2V0dGVyc1xuICBpbnN0YWxsTW9kdWxlKHRoaXMsIHN0YXRlLCBbXSwgdGhpcy5fbW9kdWxlcy5yb290KTtcblxuICAvLyBpbml0aWFsaXplIHRoZSBzdG9yZSB2bSwgd2hpY2ggaXMgcmVzcG9uc2libGUgZm9yIHRoZSByZWFjdGl2aXR5XG4gIC8vIChhbHNvIHJlZ2lzdGVycyBfd3JhcHBlZEdldHRlcnMgYXMgY29tcHV0ZWQgcHJvcGVydGllcylcbiAgcmVzZXRTdG9yZVZNKHRoaXMsIHN0YXRlKTtcblxuICAvLyBhcHBseSBwbHVnaW5zXG4gIHBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luKSB7IHJldHVybiBwbHVnaW4odGhpcyQxKTsgfSk7XG5cbiAgaWYgKFZ1ZS5jb25maWcuZGV2dG9vbHMpIHtcbiAgICBkZXZ0b29sUGx1Z2luKHRoaXMpO1xuICB9XG59O1xuXG52YXIgcHJvdG90eXBlQWNjZXNzb3JzID0geyBzdGF0ZTogeyBjb25maWd1cmFibGU6IHRydWUgfSB9O1xuXG5wcm90b3R5cGVBY2Nlc3NvcnMuc3RhdGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5fdm0uX2RhdGEuJCRzdGF0ZVxufTtcblxucHJvdG90eXBlQWNjZXNzb3JzLnN0YXRlLnNldCA9IGZ1bmN0aW9uICh2KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0KGZhbHNlLCBcIlVzZSBzdG9yZS5yZXBsYWNlU3RhdGUoKSB0byBleHBsaWNpdCByZXBsYWNlIHN0b3JlIHN0YXRlLlwiKTtcbiAgfVxufTtcblxuU3RvcmUucHJvdG90eXBlLmNvbW1pdCA9IGZ1bmN0aW9uIGNvbW1pdCAoX3R5cGUsIF9wYXlsb2FkLCBfb3B0aW9ucykge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIC8vIGNoZWNrIG9iamVjdC1zdHlsZSBjb21taXRcbiAgdmFyIHJlZiA9IHVuaWZ5T2JqZWN0U3R5bGUoX3R5cGUsIF9wYXlsb2FkLCBfb3B0aW9ucyk7XG4gICAgdmFyIHR5cGUgPSByZWYudHlwZTtcbiAgICB2YXIgcGF5bG9hZCA9IHJlZi5wYXlsb2FkO1xuICAgIHZhciBvcHRpb25zID0gcmVmLm9wdGlvbnM7XG5cbiAgdmFyIG11dGF0aW9uID0geyB0eXBlOiB0eXBlLCBwYXlsb2FkOiBwYXlsb2FkIH07XG4gIHZhciBlbnRyeSA9IHRoaXMuX211dGF0aW9uc1t0eXBlXTtcbiAgaWYgKCFlbnRyeSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmVycm9yKChcIlt2dWV4XSB1bmtub3duIG11dGF0aW9uIHR5cGU6IFwiICsgdHlwZSkpO1xuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuICB0aGlzLl93aXRoQ29tbWl0KGZ1bmN0aW9uICgpIHtcbiAgICBlbnRyeS5mb3JFYWNoKGZ1bmN0aW9uIGNvbW1pdEl0ZXJhdG9yIChoYW5kbGVyKSB7XG4gICAgICBoYW5kbGVyKHBheWxvYWQpO1xuICAgIH0pO1xuICB9KTtcbiAgdGhpcy5fc3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoc3ViKSB7IHJldHVybiBzdWIobXV0YXRpb24sIHRoaXMkMS5zdGF0ZSk7IH0pO1xuXG4gIGlmIChcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgb3B0aW9ucyAmJiBvcHRpb25zLnNpbGVudFxuICApIHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBcIlt2dWV4XSBtdXRhdGlvbiB0eXBlOiBcIiArIHR5cGUgKyBcIi4gU2lsZW50IG9wdGlvbiBoYXMgYmVlbiByZW1vdmVkLiBcIiArXG4gICAgICAnVXNlIHRoZSBmaWx0ZXIgZnVuY3Rpb25hbGl0eSBpbiB0aGUgdnVlLWRldnRvb2xzJ1xuICAgICk7XG4gIH1cbn07XG5cblN0b3JlLnByb3RvdHlwZS5kaXNwYXRjaCA9IGZ1bmN0aW9uIGRpc3BhdGNoIChfdHlwZSwgX3BheWxvYWQpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAvLyBjaGVjayBvYmplY3Qtc3R5bGUgZGlzcGF0Y2hcbiAgdmFyIHJlZiA9IHVuaWZ5T2JqZWN0U3R5bGUoX3R5cGUsIF9wYXlsb2FkKTtcbiAgICB2YXIgdHlwZSA9IHJlZi50eXBlO1xuICAgIHZhciBwYXlsb2FkID0gcmVmLnBheWxvYWQ7XG5cbiAgdmFyIGFjdGlvbiA9IHsgdHlwZTogdHlwZSwgcGF5bG9hZDogcGF5bG9hZCB9O1xuICB2YXIgZW50cnkgPSB0aGlzLl9hY3Rpb25zW3R5cGVdO1xuICBpZiAoIWVudHJ5KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoKFwiW3Z1ZXhdIHVua25vd24gYWN0aW9uIHR5cGU6IFwiICsgdHlwZSkpO1xuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuXG4gIHRoaXMuX2FjdGlvblN1YnNjcmliZXJzLmZvckVhY2goZnVuY3Rpb24gKHN1YikgeyByZXR1cm4gc3ViKGFjdGlvbiwgdGhpcyQxLnN0YXRlKTsgfSk7XG5cbiAgcmV0dXJuIGVudHJ5Lmxlbmd0aCA+IDFcbiAgICA/IFByb21pc2UuYWxsKGVudHJ5Lm1hcChmdW5jdGlvbiAoaGFuZGxlcikgeyByZXR1cm4gaGFuZGxlcihwYXlsb2FkKTsgfSkpXG4gICAgOiBlbnRyeVswXShwYXlsb2FkKVxufTtcblxuU3RvcmUucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIHN1YnNjcmliZSAoZm4pIHtcbiAgcmV0dXJuIGdlbmVyaWNTdWJzY3JpYmUoZm4sIHRoaXMuX3N1YnNjcmliZXJzKVxufTtcblxuU3RvcmUucHJvdG90eXBlLnN1YnNjcmliZUFjdGlvbiA9IGZ1bmN0aW9uIHN1YnNjcmliZUFjdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGdlbmVyaWNTdWJzY3JpYmUoZm4sIHRoaXMuX2FjdGlvblN1YnNjcmliZXJzKVxufTtcblxuU3RvcmUucHJvdG90eXBlLndhdGNoID0gZnVuY3Rpb24gd2F0Y2ggKGdldHRlciwgY2IsIG9wdGlvbnMpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGFzc2VydCh0eXBlb2YgZ2V0dGVyID09PSAnZnVuY3Rpb24nLCBcInN0b3JlLndhdGNoIG9ubHkgYWNjZXB0cyBhIGZ1bmN0aW9uLlwiKTtcbiAgfVxuICByZXR1cm4gdGhpcy5fd2F0Y2hlclZNLiR3YXRjaChmdW5jdGlvbiAoKSB7IHJldHVybiBnZXR0ZXIodGhpcyQxLnN0YXRlLCB0aGlzJDEuZ2V0dGVycyk7IH0sIGNiLCBvcHRpb25zKVxufTtcblxuU3RvcmUucHJvdG90eXBlLnJlcGxhY2VTdGF0ZSA9IGZ1bmN0aW9uIHJlcGxhY2VTdGF0ZSAoc3RhdGUpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICB0aGlzLl93aXRoQ29tbWl0KGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzJDEuX3ZtLl9kYXRhLiQkc3RhdGUgPSBzdGF0ZTtcbiAgfSk7XG59O1xuXG5TdG9yZS5wcm90b3R5cGUucmVnaXN0ZXJNb2R1bGUgPSBmdW5jdGlvbiByZWdpc3Rlck1vZHVsZSAocGF0aCwgcmF3TW9kdWxlLCBvcHRpb25zKSB7XG4gICAgaWYgKCBvcHRpb25zID09PSB2b2lkIDAgKSBvcHRpb25zID0ge307XG5cbiAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykgeyBwYXRoID0gW3BhdGhdOyB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBhc3NlcnQoQXJyYXkuaXNBcnJheShwYXRoKSwgXCJtb2R1bGUgcGF0aCBtdXN0IGJlIGEgc3RyaW5nIG9yIGFuIEFycmF5LlwiKTtcbiAgICBhc3NlcnQocGF0aC5sZW5ndGggPiAwLCAnY2Fubm90IHJlZ2lzdGVyIHRoZSByb290IG1vZHVsZSBieSB1c2luZyByZWdpc3Rlck1vZHVsZS4nKTtcbiAgfVxuXG4gIHRoaXMuX21vZHVsZXMucmVnaXN0ZXIocGF0aCwgcmF3TW9kdWxlKTtcbiAgaW5zdGFsbE1vZHVsZSh0aGlzLCB0aGlzLnN0YXRlLCBwYXRoLCB0aGlzLl9tb2R1bGVzLmdldChwYXRoKSwgb3B0aW9ucy5wcmVzZXJ2ZVN0YXRlKTtcbiAgLy8gcmVzZXQgc3RvcmUgdG8gdXBkYXRlIGdldHRlcnMuLi5cbiAgcmVzZXRTdG9yZVZNKHRoaXMsIHRoaXMuc3RhdGUpO1xufTtcblxuU3RvcmUucHJvdG90eXBlLnVucmVnaXN0ZXJNb2R1bGUgPSBmdW5jdGlvbiB1bnJlZ2lzdGVyTW9kdWxlIChwYXRoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykgeyBwYXRoID0gW3BhdGhdOyB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBhc3NlcnQoQXJyYXkuaXNBcnJheShwYXRoKSwgXCJtb2R1bGUgcGF0aCBtdXN0IGJlIGEgc3RyaW5nIG9yIGFuIEFycmF5LlwiKTtcbiAgfVxuXG4gIHRoaXMuX21vZHVsZXMudW5yZWdpc3RlcihwYXRoKTtcbiAgdGhpcy5fd2l0aENvbW1pdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudFN0YXRlID0gZ2V0TmVzdGVkU3RhdGUodGhpcyQxLnN0YXRlLCBwYXRoLnNsaWNlKDAsIC0xKSk7XG4gICAgVnVlLmRlbGV0ZShwYXJlbnRTdGF0ZSwgcGF0aFtwYXRoLmxlbmd0aCAtIDFdKTtcbiAgfSk7XG4gIHJlc2V0U3RvcmUodGhpcyk7XG59O1xuXG5TdG9yZS5wcm90b3R5cGUuaG90VXBkYXRlID0gZnVuY3Rpb24gaG90VXBkYXRlIChuZXdPcHRpb25zKSB7XG4gIHRoaXMuX21vZHVsZXMudXBkYXRlKG5ld09wdGlvbnMpO1xuICByZXNldFN0b3JlKHRoaXMsIHRydWUpO1xufTtcblxuU3RvcmUucHJvdG90eXBlLl93aXRoQ29tbWl0ID0gZnVuY3Rpb24gX3dpdGhDb21taXQgKGZuKSB7XG4gIHZhciBjb21taXR0aW5nID0gdGhpcy5fY29tbWl0dGluZztcbiAgdGhpcy5fY29tbWl0dGluZyA9IHRydWU7XG4gIGZuKCk7XG4gIHRoaXMuX2NvbW1pdHRpbmcgPSBjb21taXR0aW5nO1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIFN0b3JlLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzICk7XG5cbmZ1bmN0aW9uIGdlbmVyaWNTdWJzY3JpYmUgKGZuLCBzdWJzKSB7XG4gIGlmIChzdWJzLmluZGV4T2YoZm4pIDwgMCkge1xuICAgIHN1YnMucHVzaChmbik7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaSA9IHN1YnMuaW5kZXhPZihmbik7XG4gICAgaWYgKGkgPiAtMSkge1xuICAgICAgc3Vicy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlc2V0U3RvcmUgKHN0b3JlLCBob3QpIHtcbiAgc3RvcmUuX2FjdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBzdG9yZS5fbXV0YXRpb25zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgc3RvcmUuX3dyYXBwZWRHZXR0ZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgc3RvcmUuX21vZHVsZXNOYW1lc3BhY2VNYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgc3RhdGUgPSBzdG9yZS5zdGF0ZTtcbiAgLy8gaW5pdCBhbGwgbW9kdWxlc1xuICBpbnN0YWxsTW9kdWxlKHN0b3JlLCBzdGF0ZSwgW10sIHN0b3JlLl9tb2R1bGVzLnJvb3QsIHRydWUpO1xuICAvLyByZXNldCB2bVxuICByZXNldFN0b3JlVk0oc3RvcmUsIHN0YXRlLCBob3QpO1xufVxuXG5mdW5jdGlvbiByZXNldFN0b3JlVk0gKHN0b3JlLCBzdGF0ZSwgaG90KSB7XG4gIHZhciBvbGRWbSA9IHN0b3JlLl92bTtcblxuICAvLyBiaW5kIHN0b3JlIHB1YmxpYyBnZXR0ZXJzXG4gIHN0b3JlLmdldHRlcnMgPSB7fTtcbiAgdmFyIHdyYXBwZWRHZXR0ZXJzID0gc3RvcmUuX3dyYXBwZWRHZXR0ZXJzO1xuICB2YXIgY29tcHV0ZWQgPSB7fTtcbiAgZm9yRWFjaFZhbHVlKHdyYXBwZWRHZXR0ZXJzLCBmdW5jdGlvbiAoZm4sIGtleSkge1xuICAgIC8vIHVzZSBjb21wdXRlZCB0byBsZXZlcmFnZSBpdHMgbGF6eS1jYWNoaW5nIG1lY2hhbmlzbVxuICAgIGNvbXB1dGVkW2tleV0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBmbihzdG9yZSk7IH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN0b3JlLmdldHRlcnMsIGtleSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzdG9yZS5fdm1ba2V5XTsgfSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUgLy8gZm9yIGxvY2FsIGdldHRlcnNcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gdXNlIGEgVnVlIGluc3RhbmNlIHRvIHN0b3JlIHRoZSBzdGF0ZSB0cmVlXG4gIC8vIHN1cHByZXNzIHdhcm5pbmdzIGp1c3QgaW4gY2FzZSB0aGUgdXNlciBoYXMgYWRkZWRcbiAgLy8gc29tZSBmdW5reSBnbG9iYWwgbWl4aW5zXG4gIHZhciBzaWxlbnQgPSBWdWUuY29uZmlnLnNpbGVudDtcbiAgVnVlLmNvbmZpZy5zaWxlbnQgPSB0cnVlO1xuICBzdG9yZS5fdm0gPSBuZXcgVnVlKHtcbiAgICBkYXRhOiB7XG4gICAgICAkJHN0YXRlOiBzdGF0ZVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IGNvbXB1dGVkXG4gIH0pO1xuICBWdWUuY29uZmlnLnNpbGVudCA9IHNpbGVudDtcblxuICAvLyBlbmFibGUgc3RyaWN0IG1vZGUgZm9yIG5ldyB2bVxuICBpZiAoc3RvcmUuc3RyaWN0KSB7XG4gICAgZW5hYmxlU3RyaWN0TW9kZShzdG9yZSk7XG4gIH1cblxuICBpZiAob2xkVm0pIHtcbiAgICBpZiAoaG90KSB7XG4gICAgICAvLyBkaXNwYXRjaCBjaGFuZ2VzIGluIGFsbCBzdWJzY3JpYmVkIHdhdGNoZXJzXG4gICAgICAvLyB0byBmb3JjZSBnZXR0ZXIgcmUtZXZhbHVhdGlvbiBmb3IgaG90IHJlbG9hZGluZy5cbiAgICAgIHN0b3JlLl93aXRoQ29tbWl0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb2xkVm0uX2RhdGEuJCRzdGF0ZSA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG4gICAgVnVlLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9sZFZtLiRkZXN0cm95KCk7IH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluc3RhbGxNb2R1bGUgKHN0b3JlLCByb290U3RhdGUsIHBhdGgsIG1vZHVsZSwgaG90KSB7XG4gIHZhciBpc1Jvb3QgPSAhcGF0aC5sZW5ndGg7XG4gIHZhciBuYW1lc3BhY2UgPSBzdG9yZS5fbW9kdWxlcy5nZXROYW1lc3BhY2UocGF0aCk7XG5cbiAgLy8gcmVnaXN0ZXIgaW4gbmFtZXNwYWNlIG1hcFxuICBpZiAobW9kdWxlLm5hbWVzcGFjZWQpIHtcbiAgICBzdG9yZS5fbW9kdWxlc05hbWVzcGFjZU1hcFtuYW1lc3BhY2VdID0gbW9kdWxlO1xuICB9XG5cbiAgLy8gc2V0IHN0YXRlXG4gIGlmICghaXNSb290ICYmICFob3QpIHtcbiAgICB2YXIgcGFyZW50U3RhdGUgPSBnZXROZXN0ZWRTdGF0ZShyb290U3RhdGUsIHBhdGguc2xpY2UoMCwgLTEpKTtcbiAgICB2YXIgbW9kdWxlTmFtZSA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcbiAgICBzdG9yZS5fd2l0aENvbW1pdChmdW5jdGlvbiAoKSB7XG4gICAgICBWdWUuc2V0KHBhcmVudFN0YXRlLCBtb2R1bGVOYW1lLCBtb2R1bGUuc3RhdGUpO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIGxvY2FsID0gbW9kdWxlLmNvbnRleHQgPSBtYWtlTG9jYWxDb250ZXh0KHN0b3JlLCBuYW1lc3BhY2UsIHBhdGgpO1xuXG4gIG1vZHVsZS5mb3JFYWNoTXV0YXRpb24oZnVuY3Rpb24gKG11dGF0aW9uLCBrZXkpIHtcbiAgICB2YXIgbmFtZXNwYWNlZFR5cGUgPSBuYW1lc3BhY2UgKyBrZXk7XG4gICAgcmVnaXN0ZXJNdXRhdGlvbihzdG9yZSwgbmFtZXNwYWNlZFR5cGUsIG11dGF0aW9uLCBsb2NhbCk7XG4gIH0pO1xuXG4gIG1vZHVsZS5mb3JFYWNoQWN0aW9uKGZ1bmN0aW9uIChhY3Rpb24sIGtleSkge1xuICAgIHZhciB0eXBlID0gYWN0aW9uLnJvb3QgPyBrZXkgOiBuYW1lc3BhY2UgKyBrZXk7XG4gICAgdmFyIGhhbmRsZXIgPSBhY3Rpb24uaGFuZGxlciB8fCBhY3Rpb247XG4gICAgcmVnaXN0ZXJBY3Rpb24oc3RvcmUsIHR5cGUsIGhhbmRsZXIsIGxvY2FsKTtcbiAgfSk7XG5cbiAgbW9kdWxlLmZvckVhY2hHZXR0ZXIoZnVuY3Rpb24gKGdldHRlciwga2V5KSB7XG4gICAgdmFyIG5hbWVzcGFjZWRUeXBlID0gbmFtZXNwYWNlICsga2V5O1xuICAgIHJlZ2lzdGVyR2V0dGVyKHN0b3JlLCBuYW1lc3BhY2VkVHlwZSwgZ2V0dGVyLCBsb2NhbCk7XG4gIH0pO1xuXG4gIG1vZHVsZS5mb3JFYWNoQ2hpbGQoZnVuY3Rpb24gKGNoaWxkLCBrZXkpIHtcbiAgICBpbnN0YWxsTW9kdWxlKHN0b3JlLCByb290U3RhdGUsIHBhdGguY29uY2F0KGtleSksIGNoaWxkLCBob3QpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBtYWtlIGxvY2FsaXplZCBkaXNwYXRjaCwgY29tbWl0LCBnZXR0ZXJzIGFuZCBzdGF0ZVxuICogaWYgdGhlcmUgaXMgbm8gbmFtZXNwYWNlLCBqdXN0IHVzZSByb290IG9uZXNcbiAqL1xuZnVuY3Rpb24gbWFrZUxvY2FsQ29udGV4dCAoc3RvcmUsIG5hbWVzcGFjZSwgcGF0aCkge1xuICB2YXIgbm9OYW1lc3BhY2UgPSBuYW1lc3BhY2UgPT09ICcnO1xuXG4gIHZhciBsb2NhbCA9IHtcbiAgICBkaXNwYXRjaDogbm9OYW1lc3BhY2UgPyBzdG9yZS5kaXNwYXRjaCA6IGZ1bmN0aW9uIChfdHlwZSwgX3BheWxvYWQsIF9vcHRpb25zKSB7XG4gICAgICB2YXIgYXJncyA9IHVuaWZ5T2JqZWN0U3R5bGUoX3R5cGUsIF9wYXlsb2FkLCBfb3B0aW9ucyk7XG4gICAgICB2YXIgcGF5bG9hZCA9IGFyZ3MucGF5bG9hZDtcbiAgICAgIHZhciBvcHRpb25zID0gYXJncy5vcHRpb25zO1xuICAgICAgdmFyIHR5cGUgPSBhcmdzLnR5cGU7XG5cbiAgICAgIGlmICghb3B0aW9ucyB8fCAhb3B0aW9ucy5yb290KSB7XG4gICAgICAgIHR5cGUgPSBuYW1lc3BhY2UgKyB0eXBlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhc3RvcmUuX2FjdGlvbnNbdHlwZV0pIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKChcIlt2dWV4XSB1bmtub3duIGxvY2FsIGFjdGlvbiB0eXBlOiBcIiArIChhcmdzLnR5cGUpICsgXCIsIGdsb2JhbCB0eXBlOiBcIiArIHR5cGUpKTtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2godHlwZSwgcGF5bG9hZClcbiAgICB9LFxuXG4gICAgY29tbWl0OiBub05hbWVzcGFjZSA/IHN0b3JlLmNvbW1pdCA6IGZ1bmN0aW9uIChfdHlwZSwgX3BheWxvYWQsIF9vcHRpb25zKSB7XG4gICAgICB2YXIgYXJncyA9IHVuaWZ5T2JqZWN0U3R5bGUoX3R5cGUsIF9wYXlsb2FkLCBfb3B0aW9ucyk7XG4gICAgICB2YXIgcGF5bG9hZCA9IGFyZ3MucGF5bG9hZDtcbiAgICAgIHZhciBvcHRpb25zID0gYXJncy5vcHRpb25zO1xuICAgICAgdmFyIHR5cGUgPSBhcmdzLnR5cGU7XG5cbiAgICAgIGlmICghb3B0aW9ucyB8fCAhb3B0aW9ucy5yb290KSB7XG4gICAgICAgIHR5cGUgPSBuYW1lc3BhY2UgKyB0eXBlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhc3RvcmUuX211dGF0aW9uc1t0eXBlXSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoKFwiW3Z1ZXhdIHVua25vd24gbG9jYWwgbXV0YXRpb24gdHlwZTogXCIgKyAoYXJncy50eXBlKSArIFwiLCBnbG9iYWwgdHlwZTogXCIgKyB0eXBlKSk7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3RvcmUuY29tbWl0KHR5cGUsIHBheWxvYWQsIG9wdGlvbnMpO1xuICAgIH1cbiAgfTtcblxuICAvLyBnZXR0ZXJzIGFuZCBzdGF0ZSBvYmplY3QgbXVzdCBiZSBnb3R0ZW4gbGF6aWx5XG4gIC8vIGJlY2F1c2UgdGhleSB3aWxsIGJlIGNoYW5nZWQgYnkgdm0gdXBkYXRlXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGxvY2FsLCB7XG4gICAgZ2V0dGVyczoge1xuICAgICAgZ2V0OiBub05hbWVzcGFjZVxuICAgICAgICA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN0b3JlLmdldHRlcnM7IH1cbiAgICAgICAgOiBmdW5jdGlvbiAoKSB7IHJldHVybiBtYWtlTG9jYWxHZXR0ZXJzKHN0b3JlLCBuYW1lc3BhY2UpOyB9XG4gICAgfSxcbiAgICBzdGF0ZToge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXROZXN0ZWRTdGF0ZShzdG9yZS5zdGF0ZSwgcGF0aCk7IH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBsb2NhbFxufVxuXG5mdW5jdGlvbiBtYWtlTG9jYWxHZXR0ZXJzIChzdG9yZSwgbmFtZXNwYWNlKSB7XG4gIHZhciBnZXR0ZXJzUHJveHkgPSB7fTtcblxuICB2YXIgc3BsaXRQb3MgPSBuYW1lc3BhY2UubGVuZ3RoO1xuICBPYmplY3Qua2V5cyhzdG9yZS5nZXR0ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgLy8gc2tpcCBpZiB0aGUgdGFyZ2V0IGdldHRlciBpcyBub3QgbWF0Y2ggdGhpcyBuYW1lc3BhY2VcbiAgICBpZiAodHlwZS5zbGljZSgwLCBzcGxpdFBvcykgIT09IG5hbWVzcGFjZSkgeyByZXR1cm4gfVxuXG4gICAgLy8gZXh0cmFjdCBsb2NhbCBnZXR0ZXIgdHlwZVxuICAgIHZhciBsb2NhbFR5cGUgPSB0eXBlLnNsaWNlKHNwbGl0UG9zKTtcblxuICAgIC8vIEFkZCBhIHBvcnQgdG8gdGhlIGdldHRlcnMgcHJveHkuXG4gICAgLy8gRGVmaW5lIGFzIGdldHRlciBwcm9wZXJ0eSBiZWNhdXNlXG4gICAgLy8gd2UgZG8gbm90IHdhbnQgdG8gZXZhbHVhdGUgdGhlIGdldHRlcnMgaW4gdGhpcyB0aW1lLlxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShnZXR0ZXJzUHJveHksIGxvY2FsVHlwZSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzdG9yZS5nZXR0ZXJzW3R5cGVdOyB9LFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZ2V0dGVyc1Byb3h5XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyTXV0YXRpb24gKHN0b3JlLCB0eXBlLCBoYW5kbGVyLCBsb2NhbCkge1xuICB2YXIgZW50cnkgPSBzdG9yZS5fbXV0YXRpb25zW3R5cGVdIHx8IChzdG9yZS5fbXV0YXRpb25zW3R5cGVdID0gW10pO1xuICBlbnRyeS5wdXNoKGZ1bmN0aW9uIHdyYXBwZWRNdXRhdGlvbkhhbmRsZXIgKHBheWxvYWQpIHtcbiAgICBoYW5kbGVyLmNhbGwoc3RvcmUsIGxvY2FsLnN0YXRlLCBwYXlsb2FkKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyQWN0aW9uIChzdG9yZSwgdHlwZSwgaGFuZGxlciwgbG9jYWwpIHtcbiAgdmFyIGVudHJ5ID0gc3RvcmUuX2FjdGlvbnNbdHlwZV0gfHwgKHN0b3JlLl9hY3Rpb25zW3R5cGVdID0gW10pO1xuICBlbnRyeS5wdXNoKGZ1bmN0aW9uIHdyYXBwZWRBY3Rpb25IYW5kbGVyIChwYXlsb2FkLCBjYikge1xuICAgIHZhciByZXMgPSBoYW5kbGVyLmNhbGwoc3RvcmUsIHtcbiAgICAgIGRpc3BhdGNoOiBsb2NhbC5kaXNwYXRjaCxcbiAgICAgIGNvbW1pdDogbG9jYWwuY29tbWl0LFxuICAgICAgZ2V0dGVyczogbG9jYWwuZ2V0dGVycyxcbiAgICAgIHN0YXRlOiBsb2NhbC5zdGF0ZSxcbiAgICAgIHJvb3RHZXR0ZXJzOiBzdG9yZS5nZXR0ZXJzLFxuICAgICAgcm9vdFN0YXRlOiBzdG9yZS5zdGF0ZVxuICAgIH0sIHBheWxvYWQsIGNiKTtcbiAgICBpZiAoIWlzUHJvbWlzZShyZXMpKSB7XG4gICAgICByZXMgPSBQcm9taXNlLnJlc29sdmUocmVzKTtcbiAgICB9XG4gICAgaWYgKHN0b3JlLl9kZXZ0b29sSG9vaykge1xuICAgICAgcmV0dXJuIHJlcy5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHN0b3JlLl9kZXZ0b29sSG9vay5lbWl0KCd2dWV4OmVycm9yJywgZXJyKTtcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzXG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJHZXR0ZXIgKHN0b3JlLCB0eXBlLCByYXdHZXR0ZXIsIGxvY2FsKSB7XG4gIGlmIChzdG9yZS5fd3JhcHBlZEdldHRlcnNbdHlwZV0pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY29uc29sZS5lcnJvcigoXCJbdnVleF0gZHVwbGljYXRlIGdldHRlciBrZXk6IFwiICsgdHlwZSkpO1xuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuICBzdG9yZS5fd3JhcHBlZEdldHRlcnNbdHlwZV0gPSBmdW5jdGlvbiB3cmFwcGVkR2V0dGVyIChzdG9yZSkge1xuICAgIHJldHVybiByYXdHZXR0ZXIoXG4gICAgICBsb2NhbC5zdGF0ZSwgLy8gbG9jYWwgc3RhdGVcbiAgICAgIGxvY2FsLmdldHRlcnMsIC8vIGxvY2FsIGdldHRlcnNcbiAgICAgIHN0b3JlLnN0YXRlLCAvLyByb290IHN0YXRlXG4gICAgICBzdG9yZS5nZXR0ZXJzIC8vIHJvb3QgZ2V0dGVyc1xuICAgIClcbiAgfTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlU3RyaWN0TW9kZSAoc3RvcmUpIHtcbiAgc3RvcmUuX3ZtLiR3YXRjaChmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9kYXRhLiQkc3RhdGUgfSwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBhc3NlcnQoc3RvcmUuX2NvbW1pdHRpbmcsIFwiRG8gbm90IG11dGF0ZSB2dWV4IHN0b3JlIHN0YXRlIG91dHNpZGUgbXV0YXRpb24gaGFuZGxlcnMuXCIpO1xuICAgIH1cbiAgfSwgeyBkZWVwOiB0cnVlLCBzeW5jOiB0cnVlIH0pO1xufVxuXG5mdW5jdGlvbiBnZXROZXN0ZWRTdGF0ZSAoc3RhdGUsIHBhdGgpIHtcbiAgcmV0dXJuIHBhdGgubGVuZ3RoXG4gICAgPyBwYXRoLnJlZHVjZShmdW5jdGlvbiAoc3RhdGUsIGtleSkgeyByZXR1cm4gc3RhdGVba2V5XTsgfSwgc3RhdGUpXG4gICAgOiBzdGF0ZVxufVxuXG5mdW5jdGlvbiB1bmlmeU9iamVjdFN0eWxlICh0eXBlLCBwYXlsb2FkLCBvcHRpb25zKSB7XG4gIGlmIChpc09iamVjdCh0eXBlKSAmJiB0eXBlLnR5cGUpIHtcbiAgICBvcHRpb25zID0gcGF5bG9hZDtcbiAgICBwYXlsb2FkID0gdHlwZTtcbiAgICB0eXBlID0gdHlwZS50eXBlO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBhc3NlcnQodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnLCAoXCJFeHBlY3RzIHN0cmluZyBhcyB0aGUgdHlwZSwgYnV0IGZvdW5kIFwiICsgKHR5cGVvZiB0eXBlKSArIFwiLlwiKSk7XG4gIH1cblxuICByZXR1cm4geyB0eXBlOiB0eXBlLCBwYXlsb2FkOiBwYXlsb2FkLCBvcHRpb25zOiBvcHRpb25zIH1cbn1cblxuZnVuY3Rpb24gaW5zdGFsbCAoX1Z1ZSkge1xuICBpZiAoVnVlICYmIF9WdWUgPT09IFZ1ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAnW3Z1ZXhdIGFscmVhZHkgaW5zdGFsbGVkLiBWdWUudXNlKFZ1ZXgpIHNob3VsZCBiZSBjYWxsZWQgb25seSBvbmNlLidcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVyblxuICB9XG4gIFZ1ZSA9IF9WdWU7XG4gIGFwcGx5TWl4aW4oVnVlKTtcbn1cblxudmFyIG1hcFN0YXRlID0gbm9ybWFsaXplTmFtZXNwYWNlKGZ1bmN0aW9uIChuYW1lc3BhY2UsIHN0YXRlcykge1xuICB2YXIgcmVzID0ge307XG4gIG5vcm1hbGl6ZU1hcChzdGF0ZXMpLmZvckVhY2goZnVuY3Rpb24gKHJlZikge1xuICAgIHZhciBrZXkgPSByZWYua2V5O1xuICAgIHZhciB2YWwgPSByZWYudmFsO1xuXG4gICAgcmVzW2tleV0gPSBmdW5jdGlvbiBtYXBwZWRTdGF0ZSAoKSB7XG4gICAgICB2YXIgc3RhdGUgPSB0aGlzLiRzdG9yZS5zdGF0ZTtcbiAgICAgIHZhciBnZXR0ZXJzID0gdGhpcy4kc3RvcmUuZ2V0dGVycztcbiAgICAgIGlmIChuYW1lc3BhY2UpIHtcbiAgICAgICAgdmFyIG1vZHVsZSA9IGdldE1vZHVsZUJ5TmFtZXNwYWNlKHRoaXMuJHN0b3JlLCAnbWFwU3RhdGUnLCBuYW1lc3BhY2UpO1xuICAgICAgICBpZiAoIW1vZHVsZSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHN0YXRlID0gbW9kdWxlLmNvbnRleHQuc3RhdGU7XG4gICAgICAgIGdldHRlcnMgPSBtb2R1bGUuY29udGV4dC5nZXR0ZXJzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyB2YWwuY2FsbCh0aGlzLCBzdGF0ZSwgZ2V0dGVycylcbiAgICAgICAgOiBzdGF0ZVt2YWxdXG4gICAgfTtcbiAgICAvLyBtYXJrIHZ1ZXggZ2V0dGVyIGZvciBkZXZ0b29sc1xuICAgIHJlc1trZXldLnZ1ZXggPSB0cnVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc1xufSk7XG5cbnZhciBtYXBNdXRhdGlvbnMgPSBub3JtYWxpemVOYW1lc3BhY2UoZnVuY3Rpb24gKG5hbWVzcGFjZSwgbXV0YXRpb25zKSB7XG4gIHZhciByZXMgPSB7fTtcbiAgbm9ybWFsaXplTWFwKG11dGF0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAocmVmKSB7XG4gICAgdmFyIGtleSA9IHJlZi5rZXk7XG4gICAgdmFyIHZhbCA9IHJlZi52YWw7XG5cbiAgICByZXNba2V5XSA9IGZ1bmN0aW9uIG1hcHBlZE11dGF0aW9uICgpIHtcbiAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICB2YXIgY29tbWl0ID0gdGhpcy4kc3RvcmUuY29tbWl0O1xuICAgICAgaWYgKG5hbWVzcGFjZSkge1xuICAgICAgICB2YXIgbW9kdWxlID0gZ2V0TW9kdWxlQnlOYW1lc3BhY2UodGhpcy4kc3RvcmUsICdtYXBNdXRhdGlvbnMnLCBuYW1lc3BhY2UpO1xuICAgICAgICBpZiAoIW1vZHVsZSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNvbW1pdCA9IG1vZHVsZS5jb250ZXh0LmNvbW1pdDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gdmFsLmFwcGx5KHRoaXMsIFtjb21taXRdLmNvbmNhdChhcmdzKSlcbiAgICAgICAgOiBjb21taXQuYXBwbHkodGhpcy4kc3RvcmUsIFt2YWxdLmNvbmNhdChhcmdzKSlcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIHJlc1xufSk7XG5cbnZhciBtYXBHZXR0ZXJzID0gbm9ybWFsaXplTmFtZXNwYWNlKGZ1bmN0aW9uIChuYW1lc3BhY2UsIGdldHRlcnMpIHtcbiAgdmFyIHJlcyA9IHt9O1xuICBub3JtYWxpemVNYXAoZ2V0dGVycykuZm9yRWFjaChmdW5jdGlvbiAocmVmKSB7XG4gICAgdmFyIGtleSA9IHJlZi5rZXk7XG4gICAgdmFyIHZhbCA9IHJlZi52YWw7XG5cbiAgICB2YWwgPSBuYW1lc3BhY2UgKyB2YWw7XG4gICAgcmVzW2tleV0gPSBmdW5jdGlvbiBtYXBwZWRHZXR0ZXIgKCkge1xuICAgICAgaWYgKG5hbWVzcGFjZSAmJiAhZ2V0TW9kdWxlQnlOYW1lc3BhY2UodGhpcy4kc3RvcmUsICdtYXBHZXR0ZXJzJywgbmFtZXNwYWNlKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICEodmFsIGluIHRoaXMuJHN0b3JlLmdldHRlcnMpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoKFwiW3Z1ZXhdIHVua25vd24gZ2V0dGVyOiBcIiArIHZhbCkpO1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzW3ZhbF1cbiAgICB9O1xuICAgIC8vIG1hcmsgdnVleCBnZXR0ZXIgZm9yIGRldnRvb2xzXG4gICAgcmVzW2tleV0udnVleCA9IHRydWU7XG4gIH0pO1xuICByZXR1cm4gcmVzXG59KTtcblxudmFyIG1hcEFjdGlvbnMgPSBub3JtYWxpemVOYW1lc3BhY2UoZnVuY3Rpb24gKG5hbWVzcGFjZSwgYWN0aW9ucykge1xuICB2YXIgcmVzID0ge307XG4gIG5vcm1hbGl6ZU1hcChhY3Rpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChyZWYpIHtcbiAgICB2YXIga2V5ID0gcmVmLmtleTtcbiAgICB2YXIgdmFsID0gcmVmLnZhbDtcblxuICAgIHJlc1trZXldID0gZnVuY3Rpb24gbWFwcGVkQWN0aW9uICgpIHtcbiAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICB2YXIgZGlzcGF0Y2ggPSB0aGlzLiRzdG9yZS5kaXNwYXRjaDtcbiAgICAgIGlmIChuYW1lc3BhY2UpIHtcbiAgICAgICAgdmFyIG1vZHVsZSA9IGdldE1vZHVsZUJ5TmFtZXNwYWNlKHRoaXMuJHN0b3JlLCAnbWFwQWN0aW9ucycsIG5hbWVzcGFjZSk7XG4gICAgICAgIGlmICghbW9kdWxlKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgZGlzcGF0Y2ggPSBtb2R1bGUuY29udGV4dC5kaXNwYXRjaDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gdmFsLmFwcGx5KHRoaXMsIFtkaXNwYXRjaF0uY29uY2F0KGFyZ3MpKVxuICAgICAgICA6IGRpc3BhdGNoLmFwcGx5KHRoaXMuJHN0b3JlLCBbdmFsXS5jb25jYXQoYXJncykpXG4gICAgfTtcbiAgfSk7XG4gIHJldHVybiByZXNcbn0pO1xuXG52YXIgY3JlYXRlTmFtZXNwYWNlZEhlbHBlcnMgPSBmdW5jdGlvbiAobmFtZXNwYWNlKSB7IHJldHVybiAoe1xuICBtYXBTdGF0ZTogbWFwU3RhdGUuYmluZChudWxsLCBuYW1lc3BhY2UpLFxuICBtYXBHZXR0ZXJzOiBtYXBHZXR0ZXJzLmJpbmQobnVsbCwgbmFtZXNwYWNlKSxcbiAgbWFwTXV0YXRpb25zOiBtYXBNdXRhdGlvbnMuYmluZChudWxsLCBuYW1lc3BhY2UpLFxuICBtYXBBY3Rpb25zOiBtYXBBY3Rpb25zLmJpbmQobnVsbCwgbmFtZXNwYWNlKVxufSk7IH07XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZU1hcCAobWFwKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KG1hcClcbiAgICA/IG1hcC5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gKHsga2V5OiBrZXksIHZhbDoga2V5IH0pOyB9KVxuICAgIDogT2JqZWN0LmtleXMobWFwKS5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gKHsga2V5OiBrZXksIHZhbDogbWFwW2tleV0gfSk7IH0pXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZU5hbWVzcGFjZSAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChuYW1lc3BhY2UsIG1hcCkge1xuICAgIGlmICh0eXBlb2YgbmFtZXNwYWNlICE9PSAnc3RyaW5nJykge1xuICAgICAgbWFwID0gbmFtZXNwYWNlO1xuICAgICAgbmFtZXNwYWNlID0gJyc7XG4gICAgfSBlbHNlIGlmIChuYW1lc3BhY2UuY2hhckF0KG5hbWVzcGFjZS5sZW5ndGggLSAxKSAhPT0gJy8nKSB7XG4gICAgICBuYW1lc3BhY2UgKz0gJy8nO1xuICAgIH1cbiAgICByZXR1cm4gZm4obmFtZXNwYWNlLCBtYXApXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0TW9kdWxlQnlOYW1lc3BhY2UgKHN0b3JlLCBoZWxwZXIsIG5hbWVzcGFjZSkge1xuICB2YXIgbW9kdWxlID0gc3RvcmUuX21vZHVsZXNOYW1lc3BhY2VNYXBbbmFtZXNwYWNlXTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIW1vZHVsZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoKFwiW3Z1ZXhdIG1vZHVsZSBuYW1lc3BhY2Ugbm90IGZvdW5kIGluIFwiICsgaGVscGVyICsgXCIoKTogXCIgKyBuYW1lc3BhY2UpKTtcbiAgfVxuICByZXR1cm4gbW9kdWxlXG59XG5cbnZhciBpbmRleF9lc20gPSB7XG4gIFN0b3JlOiBTdG9yZSxcbiAgaW5zdGFsbDogaW5zdGFsbCxcbiAgdmVyc2lvbjogJzMuMC4xJyxcbiAgbWFwU3RhdGU6IG1hcFN0YXRlLFxuICBtYXBNdXRhdGlvbnM6IG1hcE11dGF0aW9ucyxcbiAgbWFwR2V0dGVyczogbWFwR2V0dGVycyxcbiAgbWFwQWN0aW9uczogbWFwQWN0aW9ucyxcbiAgY3JlYXRlTmFtZXNwYWNlZEhlbHBlcnM6IGNyZWF0ZU5hbWVzcGFjZWRIZWxwZXJzXG59O1xuXG5leHBvcnQgeyBTdG9yZSwgaW5zdGFsbCwgbWFwU3RhdGUsIG1hcE11dGF0aW9ucywgbWFwR2V0dGVycywgbWFwQWN0aW9ucywgY3JlYXRlTmFtZXNwYWNlZEhlbHBlcnMgfTtcbmV4cG9ydCBkZWZhdWx0IGluZGV4X2VzbTtcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdXNlci5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91c2VyLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwibWFsbGljb25cIjoge1xuICAgIFwiZm9udFNpemVcIjogXCI2NnJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTBycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzhGOTI5OFwiXG4gIH0sXG4gIFwicGFnZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjc1MHJweFwiLFxuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2Y1ZjVmNVwiXG4gIH0sXG4gIFwidXNlci1zZWN0aW9uLWJnXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNzUwcnB4XCIsXG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMDBycHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNlOTMyM2RcIixcbiAgICBcImJvcmRlckJvdHRvbUxlZnRSYWRpdXNcIjogNTAsXG4gICAgXCJib3JkZXJCb3R0b21SaWdodFJhZGl1c1wiOiA1MFxuICB9LFxuICBcInVzZXItc2VjdGlvblwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIzNjBycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzBycHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiAwLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIzMHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IDAsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzBycHhcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJ1c2VyLWluZm8tYm94XCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjE4MHJweFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiekluZGV4XCI6IDFcbiAgfSxcbiAgXCJwb3J0cmFpdC1ib3hcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMzJycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjEzMnJweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNzZycHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGNUY1RjVcIlxuICB9LFxuICBcInBvcnRyYWl0XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTMwcnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMzBycHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjc1cnB4XCJcbiAgfSxcbiAgXCJpbmZvLWJveFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwid2lkdGhcIjogXCI1MDBycHhcIlxuICB9LFxuICBcInVzZXJuYW1lXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzJycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzMwMzEzM1wiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJkZXBhcnRtZW50XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjRycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzYwNjI2NlwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjIwcnB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwidGFnLWJveFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwidGFnLXBob25lXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjRycHhcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjEwcnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiOHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTVycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI4cnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjE1cnB4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjIwcnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRjk2RDczXCJcbiAgfSxcbiAgXCJ0ai1zY3Rpb25cIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTBycHhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMTBycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjYwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjYwcnB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjY5MHJweFwiXG4gIH0sXG4gIFwidGotaXRlbVwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTQwcnB4XCJcbiAgfSxcbiAgXCJtb25leVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjMycnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMzMDMxMzNcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjhycHhcIlxuICB9LFxuICBcIm1vbmV5LXRpdGxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjRycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzc1Nzg3ZFwiXG4gIH0sXG4gIFwidXNlci1zZWN0aW9uLWJvdHRvbS1iZ1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjY5MHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTBycHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNlOTMyM2RcIixcbiAgICBcImJvcmRlckJvdHRvbUxlZnRSYWRpdXNcIjogXCIxMHJweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXNcIjogXCIxMHJweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJzZWMtaGVhZGVyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImhlaWdodFwiOiBcIjgwcnB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwic2VjLWhlYWRlci10XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjhycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzMwMzEzM1wiXG4gIH0sXG4gIFwib3JkZXItc2VjdGlvblwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWFyb3VuZFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMzBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzBycHhcIlxuICB9LFxuICBcIm9yZGVyLWl0ZW1cIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIndpZHRoXCI6IFwiMTIwcnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMjBycHhcIlxuICB9LFxuICBcIm9yZGVyLWljb24tdGl0bGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyNHJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMzAzMTMzXCJcbiAgfSxcbiAgXCJ0b29scy1zZWN0aW9uXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjMwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwcnB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjc1MHJweFwiLFxuICAgIFwiZmxleFdyYXBcIjogXCJ3cmFwXCJcbiAgfSxcbiAgXCJ0b29scy1pdGVtXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1MHJweFwiLFxuICAgIFwid2lkdGhcIjogXCIxNzJycHhcIlxuICB9LFxuICBcIml0ZW0taW1nXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjgwcnB4XCJcbiAgfSxcbiAgXCJpdGVtLXRpdGxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjRycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzMwMzEzM1wiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMzBycHhcIixcbiAgICBcIndpZHRoXCI6IFwiMTcycnB4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIlxuICB9XG59IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUsIC8qIHZ1ZS1jbGkgb25seSAqL1xuICBjb21wb25lbnRzLCAvLyBmaXhlZCBieSB4eHh4eHggYXV0byBjb21wb25lbnRzXG4gIHJlbmRlcmpzIC8vIGZpeGVkIGJ5IHh4eHh4eCByZW5kZXJqc1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gZml4ZWQgYnkgeHh4eHh4IGF1dG8gY29tcG9uZW50c1xuICBpZiAoY29tcG9uZW50cykge1xuICAgIG9wdGlvbnMuY29tcG9uZW50cyA9IE9iamVjdC5hc3NpZ24oY29tcG9uZW50cywgb3B0aW9ucy5jb21wb25lbnRzIHx8IHt9KVxuICB9XG4gIC8vIGZpeGVkIGJ5IHh4eHh4eCByZW5kZXJqc1xuICBpZiAocmVuZGVyanMpIHtcbiAgICAocmVuZGVyanMuYmVmb3JlQ3JlYXRlIHx8IChyZW5kZXJqcy5iZWZvcmVDcmVhdGUgPSBbXSkpLnVuc2hpZnQoZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzW3JlbmRlcmpzLl9fbW9kdWxlXSA9IHRoaXNcbiAgICB9KTtcbiAgICAob3B0aW9ucy5taXhpbnMgfHwgKG9wdGlvbnMubWl4aW5zID0gW10pKS5wdXNoKHJlbmRlcmpzKVxuICB9XG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHsgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9