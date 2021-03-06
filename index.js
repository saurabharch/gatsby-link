"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navigateTo = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pathPrefix = "";
if (__PREFIX_PATHS__) {
  pathPrefix = __PATH_PREFIX__;
}

var GatsbyLink = function (_React$Component) {
  _inherits(GatsbyLink, _React$Component);

  function GatsbyLink(props) {
    _classCallCheck(this, GatsbyLink);

    var _this = _possibleConstructorReturn(this, (GatsbyLink.__proto__ || Object.getPrototypeOf(GatsbyLink)).call(this));

    _this.state = {
      to: pathPrefix + props.to
    };
    return _this;
  }

  _createClass(GatsbyLink, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.to !== nextProps.to) {
        this.setState({
          to: pathPrefix + nextProps.to
        });
        ___loader.enqueue(this.state.to);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      ___loader.enqueue(this.state.to);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          onClick = _props.onClick,
          rest = _objectWithoutProperties(_props, ["onClick"]);

      return _react2.default.createElement(_reactRouterDom.Link, _extends({
        onClick: function (_onClick) {
          function onClick(_x) {
            return _onClick.apply(this, arguments);
          }

          onClick.toString = function () {
            return _onClick.toString();
          };

          return onClick;
        }(function (e) {
          onClick && onClick(e
          // Is this link pointing to a hash on the same page? If so,
          // just scroll there.
          );var pathname = _this2.state.to;
          if (pathname.split("#").length > 1) {
            pathname = pathname.split("#").slice(0, -1).join("");
          }
          if (pathname === window.location.pathname) {
            var hashFragment = _this2.state.to.split("#").slice(1).join("#");
            var element = document.getElementById(hashFragment);
            if (element !== null) {
              element.scrollIntoView();
              return true;
            }
          }

          // In production, make sure the necessary scripts are
          // loaded before continuing.
          if (process.env.NODE_ENV === "production") {
            e.preventDefault();
            window.___navigateTo(_this2.state.to);
          }
        })
      }, rest, {
        to: this.state.to
      }));
    }
  }]);

  return GatsbyLink;
}(_react2.default.Component);

GatsbyLink.contextTypes = {
  router: _propTypes2.default.object
};

exports.default = GatsbyLink;
var navigateTo = exports.navigateTo = function navigateTo(pathname) {
  window.___navigateTo(pathname);
};