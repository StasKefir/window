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
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\window\\window\\node_modules\\es6-promise\\dist\\es6-promise.js'");

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

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\window\\window\\node_modules\\webpack\\buildin\\global.js'");

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
    formData.append("userPhone", inputCalcEnd2.value); // function postData(data) {
    //     return new Promise(function (resolve, reject) {
    //         let requestSecond = new XMLHttpRequest();
    //         requestSecond.open('POST', 'server.php');
    //         requestSecond.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    //         requestSecond.addEventListener('readystatechange', function () {
    //             if (requestSecond.readyState < 4) {
    //                 resolve();
    //             } else if (requestSecond.readyState == 4 && requestSecond.status == 200) {
    //                 resolve();
    //             } else {
    //                 reject();
    //             }
    //         });
    //         let obj = {};
    //         data.forEach(function (value, key) {
    //             obj[key] = value;
    //         });
    //         console.log(obj);
    //         let json = JSON.stringify(obj);
    //         console.log(json);
    //         requestSecond.send(json);
    //     });
    // } // end postData
    // statusMessage.style.display="block";
    // postData(formData)
    //     .then(() => statusMessage.innerHTML = message.loading)
    //     .then(() => statusMessage.innerHTML = message.success)
    //     .catch(() => statusMessage.innerHTML = message.failure)
    //     .then(clearInput);

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
  // mainForm.addEventListener('submit', function (event) {
  //     inputWrapper = input[1].value;
  //     arr = inputWrapper.split('');
  //     if (!isNaN(+input[1].value) || (input[1].value[0] == '+' && !(isNaN(+input[1].value.slice(1, input[1].value.length + 1))))) {
  //         event.preventDefault();
  //         let formData = new FormData(mainForm);
  //         function postData(data) {
  //             return new Promise(function (resolve, reject) {
  //                 let requestSecond = new XMLHttpRequest();
  //                 requestSecond.open('POST', 'server.php');
  //                 requestSecond.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
  //                 requestSecond.addEventListener('readystatechange', function () {
  //                     if (requestSecond.readyState < 4) {
  //                         resolve();
  //                     } else if (requestSecond.readyState == 4 && requestSecond.status == 200) {
  //                         resolve();
  //                     } else {
  //                         reject();
  //                     }
  //                 });
  //                 let obj = {};
  //                 data.forEach(function (value, key) {
  //                     obj[key] = value;
  //                 });
  //                 // console.log(obj);
  //                 let json = JSON.stringify(obj);
  //                 requestSecond.send(json);
  //             });
  //         } // end postData
  //         function clearInput() {
  //             for (let i = 0; i < input.length; i++) {
  //                 input[i].value = '';
  //             }
  //         }
  //          postData(formData)
  //             .then(() =>{statusMessage.innerHTML = message.loading;
  //             statusMessage.style.display="block";} )
  //             .then(() =>{statusMessage.innerHTML = message.success;
  //                 statusMessage.style.display="block";} )
  //             .catch(() =>{statusMessage.innerHTML = message.failure;
  //                 statusMessage.style.display="block";} )
  //             .then(clearInput);
  //     } else {
  //         event.preventDefault();
  //         mainForm.appendChild(statusMessage);
  //         statusMessage.innerHTML = "Используйте цифры и знак +";
  //     }
  // });
  // popup.addEventListener('click', function(){
  //     let target = event.target;
  //     if(target == popup){
  //         popup.style.display = "none";
  //     statusMessage.style.display="none";    }
  // });
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
  setTimeout(popupUp, 60000);

  function popupUp() {
    var modal = document.querySelector('.popup');
    modal.style.display = 'flex';
  }

  window.addEventListener('click', function (event) {
    if (event.target == popup) {
      popup.style.display = 'none';
    }
  });
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