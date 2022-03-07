"use strict";

var _vue = require("vue");

var _App = _interopRequireDefault(require("./App.vue"));

var _store = _interopRequireDefault(require("./store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var localAuthToken = localStorage.auth_token;
var cookieExists = localAuthToken !== "undefined" && localAuthToken !== null;

if (cookieExists) {
  var auth_token = localStorage.getItem("auth_token");
  var authTokenExists = auth_token !== "undefined" && auth_token !== null;

  if (authTokenExists) {
    _store["default"].dispatch("loginUserWithToken", {
      auth_token: auth_token
    });
  }
}

(0, _vue.createApp)(_App["default"]).use(_store["default"]).mount('#app');
//# sourceMappingURL=main.dev.js.map
