import React, { ReactDOM } from 'http://localhost:3000/static/react_16.js';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var names = {
  porsche: "Porsche-Diesel Master 419",
  fendt: "Fendt F20 Dieselroß",
  eicher: "Eicher Diesel 215/16"
};
function ProductPage (_ref) {
  var sku = _ref.sku;
  var name = names[sku];
  window.document.title = name;
  return /*#__PURE__*/React.createElement("div", {
    className: "decide_layout"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "decide_header"
  }, "The Tractor Store"), /*#__PURE__*/React.createElement("div", {
    className: "decide_product"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "decide_headline"
  }, name), /*#__PURE__*/React.createElement("img", {
    className: "decide_image",
    src: "https://mi-fr.org/img/".concat(sku, "_standard.svg"),
    width: "100",
    height: "100"
  })), /*#__PURE__*/React.createElement("div", {
    className: "decide_details"
  }, /*#__PURE__*/React.createElement("checkout-buy", {
    sku: sku
  })), /*#__PURE__*/React.createElement("aside", {
    className: "decide_recos"
  }, /*#__PURE__*/React.createElement("inspire-recommendations", {
    sku: sku
  })));
}

var DecideProductPage = /*#__PURE__*/function (_HTMLElement) {
  _inherits(DecideProductPage, _HTMLElement);

  var _super = _createSuper(DecideProductPage);

  function DecideProductPage() {
    _classCallCheck(this, DecideProductPage);

    return _super.apply(this, arguments);
  }

  _createClass(DecideProductPage, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.setAttribute("data-version", "Decide (React v".concat(React.version, ")"));
      this.render();
      this.addEventListener("click", this.handleNavigation);
    }
  }, {
    key: "handleNavigation",
    value: function handleNavigation(e) {
      var a = e.target.closest("a");

      if (a) {
        window.history.pushState({}, "", a.href);
        this.render();
        e.preventDefault();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _window$location$path = window.location.pathname.match("product/(.*)"),
          _window$location$path2 = _slicedToArray(_window$location$path, 2),
          pathname = _window$location$path2[0],
          sku = _window$location$path2[1];

      if (sku) {
        ReactDOM.render( /*#__PURE__*/React.createElement(ProductPage, {
          sku: sku
        }), this);
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      ReactDOM.unmountComponentAtNode(this.el);
      this.removeEventListener("click", this.handleNavigation);
    }
  }]);

  return DecideProductPage;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

window.customElements.define("decide-product-page", DecideProductPage);
console.log("Team Decide - React v".concat(React.version));
