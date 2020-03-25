!(function(t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var o = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function(t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function(t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function(t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var o in t)
          n.d(
            r,
            o,
            function(e) {
              return t[e];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = "/static/"),
    n((n.s = 7));
})([
  function(t, e, n) {
    t.exports = n(2)(0);
  },
  function(t, e, n) {
    t.exports = n(2)(4);
  },
  function(t, e) {
    t.exports = react_a00e3596104ad95690e8;
  },
  function(t, e, n) {
    var r = n(4),
      o = n(5);
    "string" == typeof (o = o.__esModule ? o.default : o) &&
      (o = [[t.i, o, ""]]);
    var i = { insert: "head", singleton: !1 },
      u = (r(t.i, o, i), o.locals ? o.locals : {});
    t.exports = u;
  },
  function(t, e, n) {
    "use strict";
    var r,
      o = function() {
        return (
          void 0 === r &&
            (r = Boolean(
              window && document && document.all && !window.atob
            )),
          r
        );
      },
      i = (function() {
        var t = {};
        return function(e) {
          if (void 0 === t[e]) {
            var n = document.querySelector(e);
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head;
              } catch (t) {
                n = null;
              }
            t[e] = n;
          }
          return t[e];
        };
      })(),
      u = {};
    function c(t, e, n) {
      for (var r = 0; r < e.length; r++) {
        var o = { css: e[r][1], media: e[r][2], sourceMap: e[r][3] };
        u[t][r] ? u[t][r](o) : u[t].push(y(o, n));
      }
    }
    function a(t) {
      var e = document.createElement("style"),
        r = t.attributes || {};
      if (void 0 === r.nonce) {
        var o = n.nc;
        o && (r.nonce = o);
      }
      if (
        (Object.keys(r).forEach(function(t) {
          e.setAttribute(t, r[t]);
        }),
        "function" == typeof t.insert)
      )
        t.insert(e);
      else {
        var u = i(t.insert || "head");
        if (!u)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        u.appendChild(e);
      }
      return e;
    }
    var f,
      l =
        ((f = []),
        function(t, e) {
          return (f[t] = e), f.filter(Boolean).join("\n");
        });
    function s(t, e, n, r) {
      var o = n ? "" : r.css;
      if (t.styleSheet) t.styleSheet.cssText = l(e, o);
      else {
        var i = document.createTextNode(o),
          u = t.childNodes;
        u[e] && t.removeChild(u[e]),
          u.length ? t.insertBefore(i, u[e]) : t.appendChild(i);
      }
    }
    function p(t, e, n) {
      var r = n.css,
        o = n.media,
        i = n.sourceMap;
      if (
        (o ? t.setAttribute("media", o) : t.removeAttribute("media"),
        i &&
          btoa &&
          (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
            " */"
          )),
        t.styleSheet)
      )
        t.styleSheet.cssText = r;
      else {
        for (; t.firstChild; ) t.removeChild(t.firstChild);
        t.appendChild(document.createTextNode(r));
      }
    }
    var d = null,
      b = 0;
    function y(t, e) {
      var n, r, o;
      if (e.singleton) {
        var i = b++;
        (n = d || (d = a(e))),
          (r = s.bind(null, n, i, !1)),
          (o = s.bind(null, n, i, !0));
      } else
        (n = a(e)),
          (r = p.bind(null, n, e)),
          (o = function() {
            !(function(t) {
              if (null === t.parentNode) return !1;
              t.parentNode.removeChild(t);
            })(n);
          });
      return (
        r(t),
        function(e) {
          if (e) {
            if (
              e.css === t.css &&
              e.media === t.media &&
              e.sourceMap === t.sourceMap
            )
              return;
            r((t = e));
          } else o();
        }
      );
    }
    t.exports = function(t, e, n) {
      return (
        (n = n || {}).singleton ||
          "boolean" == typeof n.singleton ||
          (n.singleton = o()),
        (t = n.base ? t + n.base : t),
        (e = e || []),
        u[t] || (u[t] = []),
        c(t, e, n),
        function(e) {
          if (
            ((e = e || []),
            "[object Array]" === Object.prototype.toString.call(e))
          ) {
            u[t] || (u[t] = []), c(t, e, n);
            for (var r = e.length; r < u[t].length; r++) u[t][r]();
            (u[t].length = e.length), 0 === u[t].length && delete u[t];
          }
        }
      );
    };
  },
  function(t, e, n) {
    (e = n(6)(!1)).push([
      t.i,
      "checkout-buy button {\n  width: 100%;\n  padding: 0.5em;\n  font-size: 1.5em;\n  border: none;\n  color: white;\n  border-radius: .25em;\n  background: rgb(75, 158, 204);\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n  margin-bottom: 0.65em;\n  cursor: pointer;\n  transition: transform 0.1s ease-in-out;\n}\n\ncheckout-buy button:hover {\n  background: rgb(75, 158, 204, 0.8);\n}\n\ncheckout-buy button:active {\n  background: gray;\n  transform: scale(0.98);\n}\n",
      ""
    ]),
      (t.exports = e);
  },
  function(t, e, n) {
    "use strict";
    t.exports = function(t) {
      var e = [];
      return (
        (e.toString = function() {
          return this.map(function(e) {
            var n = (function(t, e) {
              var n = t[1] || "",
                r = t[3];
              if (!r) return n;
              if (e && "function" == typeof btoa) {
                var o =
                    ((u = r),
                    (c = btoa(
                      unescape(encodeURIComponent(JSON.stringify(u)))
                    )),
                    (a = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                      c
                    )),
                    "/*# ".concat(a, " */")),
                  i = r.sources.map(function(t) {
                    return "/*# sourceURL="
                      .concat(r.sourceRoot)
                      .concat(t, " */");
                  });
                return [n]
                  .concat(i)
                  .concat([o])
                  .join("\n");
              }
              var u, c, a;
              return [n].join("\n");
            })(e, t);
            return e[2] ? "@media ".concat(e[2], " {").concat(n, "}") : n;
          }).join("");
        }),
        (e.i = function(t, n) {
          "string" == typeof t && (t = [[null, t, ""]]);
          for (var r = 0; r < t.length; r++) {
            var o = [].concat(t[r]);
            n &&
              (o[2]
                ? (o[2] = "".concat(n, " and ").concat(o[2]))
                : (o[2] = n)),
              e.push(o);
          }
        }),
        e
      );
    };
  },
  function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(0),
      o = n.n(r),
      i = n(1),
      u = n.n(i),
      c = { porsche: 66, fendt: 54, eicher: 58 },
      a = function(t) {
        var e = t.sku,
          n = c[e];
        return o.a.createElement(
          "button",
          {
            type: "button",
            onClick: function() {
              return alert("Thank you ❤️");
            }
          },
          "buy for ",
          n,
          " $"
        );
      };
    n(3);
    function f(t) {
      return (f =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(t) {
              return typeof t;
            }
          : function(t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function l(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function s(t, e) {
      return !e || ("object" !== f(e) && "function" != typeof e)
        ? (function(t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function p(t) {
      var e = "function" == typeof Map ? new Map() : void 0;
      return (p = function(t) {
        if (
          null === t ||
          ((n = t),
          -1 === Function.toString.call(n).indexOf("[native code]"))
        )
          return t;
        var n;
        if ("function" != typeof t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (void 0 !== e) {
          if (e.has(t)) return e.get(t);
          e.set(t, r);
        }
        function r() {
          return d(t, arguments, y(this).constructor);
        }
        return (
          (r.prototype = Object.create(t.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
          b(r, t)
        );
      })(t);
    }
    function d(t, e, n) {
      return (d = (function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function() {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      })()
        ? Reflect.construct
        : function(t, e, n) {
            var r = [null];
            r.push.apply(r, e);
            var o = new (Function.bind.apply(t, r))();
            return n && b(o, n.prototype), o;
          }).apply(null, arguments);
    }
    function b(t, e) {
      return (b =
        Object.setPrototypeOf ||
        function(t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function y(t) {
      return (y = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var h = (function(t) {
      function e() {
        return (
          (function(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
          s(this, y(e).apply(this, arguments))
        );
      }
      var n, r, i;
      return (
        (function(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 }
          })),
            e && b(t, e);
        })(e, t),
        (n = e),
        (i = [
          {
            key: "observedAttributes",
            get: function() {
              return ["sku"];
            }
          }
        ]),
        (r = [
          {
            key: "connectedCallback",
            value: function() {
              this.setAttribute(
                "data-version",
                "Checkout (React v".concat(o.a.version, ")")
              ),
                this.render();
            }
          },
          {
            key: "attributeChangedCallback",
            value: function() {
              this.render();
            }
          },
          {
            key: "render",
            value: function() {
              var t = this.getAttribute("sku");
              u.a.render(o.a.createElement(a, { sku: t }), this);
            }
          },
          {
            key: "disconnectedCallback",
            value: function() {
              u.a.unmountComponentAtNode(this.el);
            }
          }
        ]) && l(n.prototype, r),
        i && l(n, i),
        e
      );
    })(p(HTMLElement));
    window.customElements.define("checkout-buy", h),
      console.log("Team Checkout - React v".concat(o.a.version));
  }
]);
