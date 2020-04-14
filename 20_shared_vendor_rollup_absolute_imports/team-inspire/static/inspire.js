import React, { ReactDOM } from 'http://localhost:3000/static/react_15.js';

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

var recos = {
  fendt: ["eicher", "porsche"],
  eicher: ["porsche", "fendt"],
  porsche: ["fendt", "eicher"]
};
function Recommendations (_ref) {
  var sku = _ref.sku;

  if (!sku) {
    return null;
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "inspire_fragment"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "inspire_headline"
  }, "Recommendations"), /*#__PURE__*/React.createElement("div", {
    className: "inspire_recommendations"
  }, recos[sku].map(function (key) {
    return /*#__PURE__*/React.createElement("a", {
      href: "http://localhost:3001/product/".concat(key),
      key: key
    }, /*#__PURE__*/React.createElement("img", {
      src: "https://mi-fr.org/img/".concat(key, ".svg"),
      width: "100",
      height: "100"
    }));
  })));
}

var InspireRecommendations = /*#__PURE__*/function (_HTMLElement) {
  _inherits(InspireRecommendations, _HTMLElement);

  var _super = _createSuper(InspireRecommendations);

  function InspireRecommendations() {
    _classCallCheck(this, InspireRecommendations);

    return _super.apply(this, arguments);
  }

  _createClass(InspireRecommendations, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.setAttribute("data-version", "Inspire (React v".concat(React.version, ")"));
      this.render();
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      var sku = this.getAttribute("sku");
      ReactDOM.render( /*#__PURE__*/React.createElement(Recommendations, {
        sku: sku
      }), this);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      ReactDOM.unmountComponentAtNode(this.el);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ["sku"];
    }
  }]);

  return InspireRecommendations;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

window.customElements.define("inspire-recommendations", InspireRecommendations);
console.log("Team Inspire - React v".concat(React.version));
