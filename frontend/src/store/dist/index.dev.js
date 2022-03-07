"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vuex = require("vuex");

var _session_manager = _interopRequireDefault(require("@/store/modules/session_manager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _vuex.createStore)({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    sessionManager: _session_manager["default"]
  }
});

exports["default"] = _default;
//# sourceMappingURL=index.dev.js.map
