/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || [
]).push([[11],
{
  10: function (t, e, n) {
    (function (e) {
      var n = '__lodash_hash_undefined__',
      r = '[object Function]',
      o = '[object GeneratorFunction]',
      c = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      l = /^\w*$/,
      d = /^\./,
      h = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      f = /\\(\\)?/g,
      v = /^\[object .+?Constructor\]$/,
      m = 'object' == typeof e && e && e.Object === Object && e,
      y = 'object' == typeof self && self && self.Object === Object && self,
      w = m || y || Function('return this') ();
      var S,
      x = Array.prototype,
      E = Function.prototype,
      _ = Object.prototype,
      C = w['__core-js_shared__'],
      D = (S = /[^.]+$/.exec(C && C.keys && C.keys.IE_PROTO || '')) ? 'Symbol(src)_1.' + S : '',
      A = E.toString,
      k = _.hasOwnProperty,
      M = _.toString,
      P = RegExp('^' + A.call(k).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + "$"),
      T = w.Symbol,
      O = x.splice,
      j = U(w, 'Map'),
      I = U(Object, 'create'),
      L = T ? T.prototype : void 0,
      z = L ? L.toString : void 0;
      function N(t) {
        var e = - 1,
        n = t ? t.length : 0;
        for (this.clear(); ++e < n; ) {
          var r = t[e];
          this.set(r[0], r[1])
        }
      }
      function B(t) {
        var e = - 1,
        n = t ? t.length : 0;
        for (this.clear(); ++e < n; ) {
          var r = t[e];
          this.set(r[0], r[1])
        }
      }
      function W(t) {
        var e = - 1,
        n = t ? t.length : 0;
        for (this.clear(); ++e < n; ) {
          var r = t[e];
          this.set(r[0], r[1])
        }
      }
      function $(t, e) {
        for (var n, r, o = t.length; o--; ) if ((n = t[o][0]) === (r = e) || n != n && r != r) return o;
        return - 1
      }
      function R(object, path) {
        for (var t, e = 0, n = (path = function (t, object) {
          if (J(t)) return !1;
          var e = typeof t;
          if ('number' == e || 'symbol' == e || 'boolean' == e || null == t || Z(t)) return !0;
          return l.test(t) || !c.test(t) || null != object && t in Object(object)
        }(path, object) ? [
          path
        ] : J(t = path) ? t : X(t)).length; null != object && e < n; ) object = object[G(path[e++])];
        return e && e == n ? object : void 0
      }
      function F(t) {
        return !(!V(t) || (e = t, D && D in e)) && (function (t) {
          var e = V(t) ? M.call(t) : '';
          return e == r || e == o
        }(t) || function (t) {
          var e = !1;
          if (null != t && 'function' != typeof t.toString) try {
            e = !!(t + '')
          } catch (t) {
          }
          return e
        }(t) ? P : v).test(function (t) {
          if (null != t) {
            try {
              return A.call(t)
            } catch (t) {
            }
            try {
              return t + ''
            } catch (t) {
            }
          }
          return ''
        }(t));
        var e
      }
      function H(map, t) {
        var e,
        n,
        data = map.__data__;
        return ('string' == (n = typeof (e = t)) || 'number' == n || 'symbol' == n || 'boolean' == n ? '__proto__' !== e : null === e) ? data['string' == typeof t ? 'string' : 'hash'] : data.map
      }
      function U(object, t) {
        var e = function (object, t) {
          return null == object ? void 0 : object[t]
        }(object, t);
        return F(e) ? e : void 0
      }
      N.prototype.clear = function () {
        this.__data__ = I ? I(null) : {
        }
      },
      N.prototype.delete = function (t) {
        return this.has(t) && delete this.__data__[t]
      },
      N.prototype.get = function (t) {
        var data = this.__data__;
        if (I) {
          var e = data[t];
          return e === n ? void 0 : e
        }
        return k.call(data, t) ? data[t] : void 0
      },
      N.prototype.has = function (t) {
        var data = this.__data__;
        return I ? void 0 !== data[t] : k.call(data, t)
      },
      N.prototype.set = function (t, e) {
        return this.__data__[t] = I && void 0 === e ? n : e,
        this
      },
      B.prototype.clear = function () {
        this.__data__ = [
        ]
      },
      B.prototype.delete = function (t) {
        var data = this.__data__,
        e = $(data, t);
        return !(e < 0) && (e == data.length - 1 ? data.pop() : O.call(data, e, 1), !0)
      },
      B.prototype.get = function (t) {
        var data = this.__data__,
        e = $(data, t);
        return e < 0 ? void 0 : data[e][1]
      },
      B.prototype.has = function (t) {
        return $(this.__data__, t) > - 1
      },
      B.prototype.set = function (t, e) {
        var data = this.__data__,
        n = $(data, t);
        return n < 0 ? data.push([t,
        e]) : data[n][1] = e,
        this
      },
      W.prototype.clear = function () {
        this.__data__ = {
          hash: new N,
          map: new (j || B),
          string: new N
        }
      },
      W.prototype.delete = function (t) {
        return H(this, t).delete(t)
      },
      W.prototype.get = function (t) {
        return H(this, t).get(t)
      },
      W.prototype.has = function (t) {
        return H(this, t).has(t)
      },
      W.prototype.set = function (t, e) {
        return H(this, t).set(t, e),
        this
      };
      var X = Y((function (t) {
        var e;
        t = null == (e = t) ? '' : function (t) {
          if ('string' == typeof t) return t;
          if (Z(t)) return z ? z.call(t) : '';
          var e = t + '';
          return '0' == e && 1 / t == - 1 / 0 ? '-0' : e
        }(e);
        var n = [
        ];
        return d.test(t) && n.push(''),
        t.replace(h, (function (t, e, r, o) {
          n.push(r ? o.replace(f, '$1') : e || t)
        })),
        n
      }));
      function G(t) {
        if ('string' == typeof t || Z(t)) return t;
        var e = t + '';
        return '0' == e && 1 / t == - 1 / 0 ? '-0' : e
      }
      function Y(t, e) {
        if ('function' != typeof t || e && 'function' != typeof e) throw new TypeError('Expected a function');
        var n = function () {
          var r = arguments,
          o = e ? e.apply(this, r) : r[0],
          c = n.cache;
          if (c.has(o)) return c.get(o);
          var l = t.apply(this, r);
          return n.cache = c.set(o, l),
          l
        };
        return n.cache = new (Y.Cache || W),
        n
      }
      Y.Cache = W;
      var J = Array.isArray;
      function V(t) {
        var e = typeof t;
        return !!t && ('object' == e || 'function' == e)
      }
      function Z(t) {
        return 'symbol' == typeof t || function (t) {
          return !!t && 'object' == typeof t
        }(t) && '[object Symbol]' == M.call(t)
      }
      t.exports = function (object, path, t) {
        var e = null == object ? void 0 : R(object, path);
        return void 0 === e ? t : e
      }
    }).call(this, n(32))
  },
  11: function (t, e) {
    t.exports = function (t) {
      var e = {
      };
      function n(r) {
        if (e[r]) return e[r].exports;
        var o = e[r] = {
          i: r,
          l: !1,
          exports: {
          }
        };
        return t[r].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
      }
      return n.m = t,
      n.c = e,
      n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
          enumerable: !0,
          get: r
        })
      },
      n.r = function (t) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
          value: 'Module'
        }),
        Object.defineProperty(t, '__esModule', {
          value: !0
        })
      },
      n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, 'default', {
          enumerable: !0,
          value: t
        }), 2 & e && 'string' != typeof t) for (var o in t) n.d(r, o, function (e) {
          return t[e]
        }.bind(null, o));
        return r
      },
      n.n = function (t) {
        var e = t && t.__esModule ? function () {
          return t.default
        }
         : function () {
          return t
        };
        return n.d(e, 'a', e),
        e
      },
      n.o = function (object, t) {
        return Object.prototype.hasOwnProperty.call(object, t)
      },
      n.p = '',
      n(n.s = 'fb15')
    }({
      f6fd: function (t, e) {
        !function (t) {
          var e = 'currentScript',
          n = t.getElementsByTagName('script');
          e in t || Object.defineProperty(t, e, {
            get: function () {
              try {
                throw new Error
              } catch (e) {
                var i,
                t = (/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(e.stack) || [
                  !1
                ]) [1];
                for (i in n) if (n[i].src == t || 'interactive' == n[i].readyState) return n[i];
                return null
              }
            }
          })
        }(document)
      },
      fb15: function (t, e, n) {
        'use strict';
        var i;
        (n.r(e), 'undefined' != typeof window) && (n('f6fd'), (i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)) && (n.p = i[1]));
        var r = {
        },
        o = [
        ],
        c = '',
        l = 'svg',
        d = !1,
        h = !1;
        var f = function (t, e, n, r, o, c, l, d) {
          var h,
          f = 'function' == typeof t ? t.options : t;
          if (e && (f.render = e, f.staticRenderFns = n, f._compiled = !0), r && (f.functional = !0), c && (f._scopeId = 'data-v-' + c), l ? (h = function (t) {
            (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || 'undefined' == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__),
            o && o.call(this, t),
            t && t._registeredComponents && t._registeredComponents.add(l)
          }, f._ssrRegister = h) : o && (h = d ? function () {
            o.call(this, (f.functional ? this.parent : this).$root.$options.shadowRoot)
          }
           : o), h) if (f.functional) {
            f._injectStyles = h;
            var v = f.render;
            f.render = function (t, e) {
              return h.call(e),
              v(t, e)
            }
          } else {
            var m = f.beforeCreate;
            f.beforeCreate = m ? [
            ].concat(m, h) : [
              h
            ]
          }
          return {
            exports: t,
            options: f
          }
        }({
          data: function () {
            return {
              loaded: !1
            }
          },
          props: {
            icon: String,
            name: String,
            width: {
              type: String,
            default:
              ''
            },
            height: {
              type: String,
            default:
              ''
            },
            scale: String,
            dir: String,
            fill: {
              type: Boolean,
            default:
              function () {
                return !d
              }
            },
            color: String,
            original: {
              type: Boolean,
            default:
              function () {
                return h
              }
            },
            title: String
          },
          computed: {
            clazz: function () {
              var t = ''.concat(l, '-icon');
              return this.fill && (t += ' '.concat(l, '-fill')),
              this.dir && (t += ' '.concat(l, '-').concat(this.dir)),
              t
            },
            iconName: function () {
              return this.name || this.icon
            },
            iconData: function () {
              var t = r[this.iconName];
              return t || this.loaded ? t : null
            },
            colors: function () {
              return this.color ? this.color.split(' ') : [
              ]
            },
            path: function () {
              var t = '';
              return this.iconData ? (t = this.iconData.data, t = this.setTitle(t), this.original && (t = this.addOriginalColor(t)), this.colors.length > 0 && (t = this.addColor(t))) : o.push({
                name: this.iconName,
                component: this
              }),
              this.getValidPathData(t)
            },
            box: function () {
              var t = this.width || 16,
              e = this.width || 16;
              return this.iconData ? this.iconData.viewBox ? this.iconData.viewBox : '0 0 '.concat(this.iconData.width, ' ').concat(this.iconData.height) : '0 0 '.concat(parseFloat(t), ' ').concat(parseFloat(e))
            },
            style: function () {
              var t,
              e,
              n = /^\d+$/,
              r = Number(this.scale);
              !isNaN(r) && this.iconData ? (t = Number(this.iconData.width) * r + 'px', e = Number(this.iconData.height) * r + 'px') : (t = n.test(this.width) ? this.width + 'px' : this.width || c, e = n.test(this.height) ? this.height + 'px' : this.height || c);
              var style = {
              };
              return t && (style.width = t),
              e && (style.height = e),
              style
            }
          },
          created: function () {
            r[this.iconName] && (this.loaded = !0)
          },
          methods: {
            addColor: function (data) {
              var t = this,
              i = 0;
              return data.replace(/<(path|rect|circle|polygon|line|polyline|ellipse)\s/gi, (function (e) {
                var n = t.colors[i++] || t.colors[t.colors.length - 1],
                r = t.fill;
                if (n && '_' === n) return e;
                n && 0 === n.indexOf('r-') && (r = !r, n = n.substr(2));
                var o = r ? 'stroke' : 'fill';
                return e + ''.concat(r ? 'fill' : 'stroke', '="').concat(n, '" ').concat(o, '="none" ')
              }))
            },
            addOriginalColor: function (data) {
              return data.replace(/_fill="|_stroke="/gi, (function (t) {
                return t && t.slice(1)
              }))
            },
            getValidPathData: function (t) {
              if (this.original && this.colors.length > 0) {
                t = t.replace(/<(path|rect|circle|polygon|line|polyline|ellipse)(\sfill|\sstroke)([="\w\s\.\-\+#\$\&>]+)(fill|stroke)/gi, (function (t, e, n, r, o) {
                  return '<'.concat(e).concat(n).concat(r, '_').concat(o)
                }))
              }
              return t
            },
            setTitle: function (t) {
              if (this.title) {
                var title = this.title.replace(/\</gi, '&lt;').replace(/>/gi, '&gt;').replace(/&/g, '&amp;');
                return '<title>'.concat(title, '</title>') + t
              }
              return t
            },
            onClick: function (t) {
              this.$emit('click', t)
            }
          },
          install: function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            },
            n = e.tagName || 'svgicon';
            e.classPrefix && (l = e.classPrefix),
            d = !!e.isStroke,
            h = !!e.isOriginalDefault,
            e.defaultWidth && (c = e.defaultWidth),
            e.defaultHeight && e.defaultHeight,
            t.component(n, this)
          },
          register: function (data) {
            var t = function (t) {
              r[t] || (r[t] = data[t]),
              o = o.filter((function (e, n) {
                return e.name === t && e.component.$set(e.component, 'loaded', !0),
                e.name !== t
              }))
            };
            for (var e in data) t(e)
          },
          icons: r
        }, (function () {
          var t = this,
          e = t.$createElement;
          return (t._self._c || e) ('svg', {
            class : t.clazz,
            style: t.style,
            attrs: {
              version: '1.1',
              viewBox: t.box
            },
            domProps: {
              innerHTML: t._s(t.path)
            },
            on: {
              click: t.onClick
            }
          })
        }), [
        ], !1, null, null, null).exports;
        e.default = f
      }
    }).default
  },
  12: function (t, e, n) {
    'use strict';
    t.exports = function (t) {
      var e = [
      ];
      return e.toString = function () {
        return this.map((function (e) {
          var content = function (t, e) {
            var content = t[1] || '',
            n = t[3];
            if (!n) return content;
            if (e && 'function' == typeof btoa) {
              var r = (c = n, l = btoa(unescape(encodeURIComponent(JSON.stringify(c)))), data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(l), '/*# '.concat(data, ' */')),
              o = n.sources.map((function (source) {
                return '/*# sourceURL='.concat(n.sourceRoot || '').concat(source, ' */')
              }));
              return [content].concat(o).concat([r]).join('\n')
            }
            var c,
            l,
            data;
            return [content].join('\n')
          }(e, t);
          return e[2] ? '@media '.concat(e[2], ' {').concat(content, '}') : content
        })).join('')
      },
      e.i = function (t, n, r) {
        'string' == typeof t && (t = [
          [null,
          t,
          '']
        ]);
        var o = {
        };
        if (r) for (var i = 0; i < this.length; i++) {
          var c = this[i][0];
          null != c && (o[c] = !0)
        }
        for (var l = 0; l < t.length; l++) {
          var d = [
          ].concat(t[l]);
          r && o[d[0]] || (n && (d[2] ? d[2] = ''.concat(n, ' and ').concat(d[2]) : d[2] = n), e.push(d))
        }
      },
      e
    }
  },
  13: function (t, e, n) {
    'use strict';
    function r(t, e) {
      for (var n = [
      ], r = {
      }, i = 0; i < e.length; i++) {
        var o = e[i],
        c = o[0],
        l = {
          id: t + ':' + i,
          css: o[1],
          media: o[2],
          sourceMap: o[3]
        };
        r[c] ? r[c].parts.push(l) : n.push(r[c] = {
          id: c,
          parts: [
            l
          ]
        })
      }
      return n
    }
    n.r(e),
    n.d(e, 'default', (function () {
      return w
    }));
    var o = 'undefined' != typeof document;
    if ('undefined' != typeof DEBUG && DEBUG && !o) throw new Error('vue-style-loader cannot be used in a non-browser environment. Use { target: \'node\' } in your Webpack config to indicate a server-rendering environment.');
    var c = {
    },
    head = o && (document.head || document.getElementsByTagName('head') [0]),
    l = null,
    d = 0,
    h = !1,
    f = function () {
    },
    v = null,
    m = 'data-vue-ssr-id',
    y = 'undefined' != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
    function w(t, e, n, o) {
      h = n,
      v = o || {
      };
      var l = r(t, e);
      return S(l),
      function (e) {
        for (var n = [
        ], i = 0; i < l.length; i++) {
          var o = l[i];
          (d = c[o.id]).refs--,
          n.push(d)
        }
        e ? S(l = r(t, e)) : l = [
        ];
        for (i = 0; i < n.length; i++) {
          var d;
          if (0 === (d = n[i]).refs) {
            for (var h = 0; h < d.parts.length; h++) d.parts[h]();
            delete c[d.id]
          }
        }
      }
    }
    function S(t) {
      for (var i = 0; i < t.length; i++) {
        var e = t[i],
        n = c[e.id];
        if (n) {
          n.refs++;
          for (var r = 0; r < n.parts.length; r++) n.parts[r](e.parts[r]);
          for (; r < e.parts.length; r++) n.parts.push(E(e.parts[r]));
          n.parts.length > e.parts.length && (n.parts.length = e.parts.length)
        } else {
          var o = [
          ];
          for (r = 0; r < e.parts.length; r++) o.push(E(e.parts[r]));
          c[e.id] = {
            id: e.id,
            refs: 1,
            parts: o
          }
        }
      }
    }
    function x() {
      var t = document.createElement('style');
      return t.type = 'text/css',
      head.appendChild(t),
      t
    }
    function E(t) {
      var e,
      n,
      r = document.querySelector('style[' + m + '~="' + t.id + '"]');
      if (r) {
        if (h) return f;
        r.parentNode.removeChild(r)
      }
      if (y) {
        var o = d++;
        r = l || (l = x()),
        e = D.bind(null, r, o, !1),
        n = D.bind(null, r, o, !0)
      } else r = x(),
      e = A.bind(null, r),
      n = function () {
        r.parentNode.removeChild(r)
      };
      return e(t),
      function (r) {
        if (r) {
          if (r.css === t.css && r.media === t.media && r.sourceMap === t.sourceMap) return;
          e(t = r)
        } else n()
      }
    }
    var _,
    C = (_ = [
    ], function (t, e) {
      return _[t] = e,
      _.filter(Boolean).join('\n')
    });
    function D(t, e, n, r) {
      var o = n ? '' : r.css;
      if (t.styleSheet) t.styleSheet.cssText = C(e, o);
       else {
        var c = document.createTextNode(o),
        l = t.childNodes;
        l[e] && t.removeChild(l[e]),
        l.length ? t.insertBefore(c, l[e]) : t.appendChild(c)
      }
    }
    function A(t, e) {
      var n = e.css,
      r = e.media,
      o = e.sourceMap;
      if (r && t.setAttribute('media', r), v.ssrId && t.setAttribute(m, e.id), o && (n += '\n/*# sourceURL=' + o.sources[0] + ' */', n += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + ' */'), t.styleSheet) t.styleSheet.cssText = n;
       else {
        for (; t.firstChild; ) t.removeChild(t.firstChild);
        t.appendChild(document.createTextNode(n))
      }
    }
  },
  14: function (t, e, n) {
    (function (e) {
      var n = 'Expected a function',
      r = /^\s+|\s+$/g,
      o = /^[-+]0x[0-9a-f]+$/i,
      c = /^0b[01]+$/i,
      l = /^0o[0-7]+$/i,
      d = parseInt,
      h = 'object' == typeof e && e && e.Object === Object && e,
      f = 'object' == typeof self && self && self.Object === Object && self,
      v = h || f || Function('return this') (),
      m = Object.prototype.toString,
      y = Math.max,
      w = Math.min,
      S = function () {
        return v.Date.now()
      };
      function x(t, e, r) {
        var o,
        c,
        l,
        d,
        h,
        f,
        v = 0,
        m = !1,
        x = !1,
        C = !0;
        if ('function' != typeof t) throw new TypeError(n);
        function D(time) {
          var e = o,
          n = c;
          return o = c = void 0,
          v = time,
          d = t.apply(n, e)
        }
        function A(time) {
          return v = time,
          h = setTimeout(M, e),
          m ? D(time) : d
        }
        function k(time) {
          var t = time - f;
          return void 0 === f || t >= e || t < 0 || x && time - v >= l
        }
        function M() {
          var time = S();
          if (k(time)) return P(time);
          h = setTimeout(M, function (time) {
            var t = e - (time - f);
            return x ? w(t, l - (time - v)) : t
          }(time))
        }
        function P(time) {
          return h = void 0,
          C && o ? D(time) : (o = c = void 0, d)
        }
        function T() {
          var time = S(),
          t = k(time);
          if (o = arguments, c = this, f = time, t) {
            if (void 0 === h) return A(f);
            if (x) return h = setTimeout(M, e),
            D(f)
          }
          return void 0 === h && (h = setTimeout(M, e)),
          d
        }
        return e = _(e) || 0,
        E(r) && (m = !!r.leading, l = (x = 'maxWait' in r) ? y(_(r.maxWait) || 0, e) : l, C = 'trailing' in r ? !!r.trailing : C),
        T.cancel = function () {
          void 0 !== h && clearTimeout(h),
          v = 0,
          o = f = c = h = void 0
        },
        T.flush = function () {
          return void 0 === h ? d : P(S())
        },
        T
      }
      function E(t) {
        var e = typeof t;
        return !!t && ('object' == e || 'function' == e)
      }
      function _(t) {
        if ('number' == typeof t) return t;
        if (function (t) {
          return 'symbol' == typeof t || function (t) {
            return !!t && 'object' == typeof t
          }(t) && '[object Symbol]' == m.call(t)
        }(t)) return NaN;
        if (E(t)) {
          var e = 'function' == typeof t.valueOf ? t.valueOf() : t;
          t = E(e) ? e + '' : e
        }
        if ('string' != typeof t) return 0 === t ? t : + t;
        t = t.replace(r, '');
        var n = c.test(t);
        return n || l.test(t) ? d(t.slice(2), n ? 2 : 8) : o.test(t) ? NaN : + t
      }
      t.exports = function (t, e, r) {
        var o = !0,
        c = !0;
        if ('function' != typeof t) throw new TypeError(n);
        return E(r) && (o = 'leading' in r ? !!r.leading : o, c = 'trailing' in r ? !!r.trailing : c),
        x(t, e, {
          leading: o,
          maxWait: e,
          trailing: c
        })
      }
    }).call(this, n(32))
  },
  24: function (t, e, n) {
    'use strict';
    n.d(e, 'f', (function () {
      return r
    })),
    n.d(e, 'd', (function () {
      return o
    })),
    n.d(e, 'e', (function () {
      return c
    })),
    n.d(e, 'c', (function () {
      return l
    })),
    n.d(e, 'a', (function () {
      return d
    })),
    n.d(e, 'b', (function () {
      return h
    })),
    n.d(e, 'g', (function () {
      return f
    })),
    n.d(e, 'h', (function () {
      return v
    })),
    n.d(e, 'i', (function () {
      return m
    }));
    var r = '\n  appDataReady.then(function() {\n    try {\n      var c1params = window.digitalData.user[0].profile[0].attributes.c1.actionGroups.cmsSnippet.parameters;\n      var smartTeaser = null;\n      function c1paramsHaveValue(value) {return c1params.includes(value)}\n      if(c1params.includes(\'feature:smartteaser:neueste-artikel\')) {\n        var clientCountryCode = digitalData.user[0].profile[0].attributes.c1.clientCountryCode || \'ch\';\n        smartTeaser = document.getElementById(\'smartTeaser-newestArticles-\' + clientCountryCode.toLowerCase());\n      } else if (c1params.includes(\'feature:smartteaser:briefing\')) {\n        var clientCountryCode = digitalData.user[0].profile[0].attributes.c1.clientCountryCode\n        if (clientCountryCode.toLowerCase() === \'de\') {\n          smartTeaser = document.getElementById(\'smartTeaser-briefing-intl\');\n        } else {\n          smartTeaser = document.getElementById(\'smartTeaser-briefing-ch\');\n        }\n      } else if ([\'feature:smartteaser:region\', \'feature:smartteaser:region:articles\'].some(c1paramsHaveValue)) {\n        var currentRegion = digitalData.user[0].profile[0].attributes.c1.clientRegionCode\n        if (currentRegion) {\n          smartTeaser = document.getElementById(\'smartTeaser-region-\' + currentRegion.toLowerCase());\n        }\n      }\n      if (smartTeaser !== null) {\n        smartTeaser.classList.toggle(\'hidden\');\n      }\n    } catch (e) {\n      console.log(e)\n    }\n  });\n',
    o = '\nappDataReady.then(function() {\n  var webview = document.getElementById(\'webview\');\n  if (webview) {\n    webview.classList.toggle(\'app-data--loading\');\n  }\n  window.deferred(function() {\n    window.dispatchEvent(new window.CustomEvent(\'idmsload\'));\n  });\n});\n',
    c = '\n  window.addEventListener(\'setMunicipality\', function(event) {\n    if (event.detail) {\n      var municipality = JSON.stringify(event.detail)\n      document.getElementById(\'webview\').setAttribute(\'municipality\', municipality);\n    }\n  });\n',
    l = '\n  window.vampBridge.readArticles = function(element, readArticles) {\n    readArticles = readArticles ? readArticles : \'\';\n    if (element.getAttribute(\'id\')) {\n      var id = element.getAttribute(\'id\').replace(\'id-\', \'\');\n      if (readArticles.includes(id.replace(\'_\', \'.\')) && !element.classList.contains(\'significantupdate\')) {\n        element.classList.add(\'teaser--read\');\n      }\n    }\n  };\n  appDataReady.then(function() {\n    try {\n      document.querySelectorAll(\'.teaser\').forEach(function(teaser) {\n        window.vampBridge.readArticles(teaser, window.vamp.readArticles)\n      });\n    } catch(e) { console.log(e); }\n    window.addEventListener(\'markAsRead\', function(event) {\n      if (event.detail && event.detail.articleId) {\n        var id = event.detail.articleId.replace(\'id-\', \'\');\n        var selector = document.querySelectorAll(\'#id-\' + id.replace(\'.\', \'_\').replace(\'ld_1.\', \'1_\') + \'.teaser\');\n        if (selector.length) {\n          Array.from(selector).forEach(function(element) {\n            window.vampBridge.readArticles(element, [id.replace(\'_\', \'.\')]);\n          });\n        }\n      }\n    });\n  });\n',
    d = '\n  window.vampBridge.bookmarkArticles = function(element, bookmarkArticles, type) {\n    var id = element.getAttribute(\'id\').replace(\'_\', \'.\').replace(\'id-\', \'\');\n    if (element && bookmarkArticles.includes(id) && type) {\n      if (window.digitalData.user && digitalData.user[0].profile[0].attributes.c1.sessionID) {\n        element.classList.add(\'bookmark--active\');\n      }\n      if (type !== 2) {\n        window.vamp.addBookmark(id)\n      }\n    } else if (element) {\n      element.classList.remove(\'bookmark--active\');\n      if (type !== 2) {\n        window.vamp.deleteBookmark(id)\n      }\n    }\n  };\n  appDataReady.then(function() {\n    window.addEventListener(\'toggleBookmark\', function(event) {\n      if (event.detail && event.detail.articleId) {\n        var id = event.detail.articleId.replace(\'.\', \'_\').replace(\'id-\', \'\').replace(\'ld_1.\', \'1_\');\n        var selector = document.querySelectorAll(\'#id-\' + id + \'.bookmark\');\n        if (selector.length) {\n          selector = Array.from(selector).forEach(function(element) {\n            var type = !element.classList.contains(\'bookmark--active\');\n            window.vampBridge.bookmarkArticles(element, [id.replace(\'_\', \'.\')], type)\n          });\n        }\n      }\n    });\n    window.addEventListener(\'addBookmark\', function(event) {\n      if (event.detail && event.detail.articleId) {\n        var id = event.detail.articleId.replace(\'.\', \'_\').replace(\'id-\', \'\').replace(\'ld_1.\', \'1_\');\n        var selector = document.querySelectorAll(\'#id-\' + id + \'.bookmark\');\n        if (selector.length) {\n          try {\n            if (window.digitalData.user && digitalData.user[0].profile[0].attributes.c1.sessionID) {\n              Array.from(selector).forEach(function(element) {\n                window.vampBridge.bookmarkArticles(element, [id.replace(\'_\', \'.\')], 2)\n              });\n            } else {\n              window.vampBridge.bookmarkArticles(selector[0], [id.replace(\'_\', \'.\')], 2)\n            }\n          } catch(e) { console.log(e); }\n        }\n      }\n    });\n    window.addEventListener(\'deleteBookmark\', function(event) {\n      if (event.detail && event.detail.articleId) {\n        var id = event.detail.articleId.replace(\'.\', \'_\').replace(\'id-\', \'\').replace(\'ld_1.\', \'1_\');\n        var selector = document.querySelectorAll(\'#id-\' + id + \'.bookmark\');\n        if (selector.length) {\n          Array.from(selector).forEach(function(element) {\n            window.vampBridge.bookmarkArticles(element, [id.replace(\'_\', \'.\')], 0);\n          });\n        }\n      }\n    });\n    try {\n      document.querySelectorAll(\'.bookmark\').forEach(function(bookmark) {\n        window.vampBridge.bookmarkArticles(bookmark, window.vamp.bookmarks, 2)\n      });\n    } catch(e) { console.log(e); }\n  });\n',
    h = '\n  appDataReady.then(function() {\n\n    var requestAnimationFrame = (function() {\n        return window.requestAnimationFrame   || \n            window.webkitRequestAnimationFrame || \n            window.mozRequestAnimationFrame    || \n            window.oRequestAnimationFrame      || \n            window.msRequestAnimationFrame     || \n            function(/* function */ callback, /* DOMElement */ element){\n                window.setTimeout(callback, 1000 / 60);\n            };\n    })();\n\n    document.querySelectorAll(\'[data-nzz-horizontal-scroll]\').forEach(function (el) {\n      var root = el;\n      var content = root.querySelector(\'[data-nzz-horizontal-scroll-content]\');\n      var slot = root.querySelector(\'[data-nzz-horizontal-scroll-slot]\');\n      var slotAlignRight = slot && slot.hasAttribute(\'data-nzz-horizontal-scroll-align-right\')\n      var overflowBack = root.querySelector(\'[data-nzz-horizontal-scroll-overflow-back]\');\n      var overflowForward = root.querySelector(\'[data-nzz-horizontal-scroll-overflow-forward]\');\n      if (root && content && overflowForward && overflowBack) {\n        var updating = false;\n        var moreContentLeft = false;\n        var moreContentRight = false;\n    \n        function update() {\n          if (!updating) {\n            updating = true;\n            requestAnimationFrame(function () {\n              overflowBack.style.opacity = moreContentLeft ? 1 : 0;\n              overflowForward.style.opacity = moreContentRight ? 1 : 0;\n              if (slotAlignRight && !moreContentLeft && !moreContentRight) {\n                slot.style.justifyContent = \'flex-end\'\n              } else {\n                slot.style.justifyContent = \'flex-start\';\n              }\n              updating = false;\n            });\n          }\n        }\n    \n        function checkGeometry() {\n          var width = root.getBoundingClientRect().width;\n          var scrollWidth = content.scrollWidth;\n          var scrollLeft = content.scrollLeft;\n          moreContentLeft = Math.floor(scrollLeft) > 0;\n          moreContentRight = Math.ceil(scrollLeft + width) < scrollWidth;\n          update();\n        }\n        checkGeometry();\n        window.addEventListener(\'resize\', checkGeometry);\n        content.addEventListener(\'scroll\', checkGeometry);\n      }\n    });\n  });\n',
    f = function () {
      Array.from(document.querySelectorAll('.fetchGalleriesScript:not(.parsed)')).forEach((function (element) {
        var t = element.getAttribute('id').replace('id-', '').split('|');
        element.classList.add('parsed'),
        t.forEach((function (t) {
          t && window.dispatchEvent(new window.CustomEvent('teaserGalleryFetch', {
            detail: t
          }))
        }))
      }))
    },
    v = function () {
      return '\n    window.addEventListener(\'teaserGalleryFetch\', function(e) {\n      var product = \''.concat('', '\';\n      var url = \'/').concat('api', '/').concat('v1', '/\' + product + \'webview/\';\n      fetch(url + e.detail + \'?version=').concat('a5afeb0986c2095be9c7dcd43c7898f7cc66676e', '\', {\n        method: \'GET\'\n      }).then(function(res) {\n        if (res.status === 200) {\n          return res.text()\n        }\n      }).then(function(res) {\n        var data = JSON.parse(res);\n        if (data.sliderImages) {\n          if (!window.NZZ.galleries) {\n            window.NZZ.galleries = [];\n          }\n          window.NZZ.galleries[data.metadata.nzzId] = data.sliderImages;\n        }\n      }).catch(function(e) {\n        console.log(e);\n      });\n    });\n    deferred(function() {\n      Array.from(window.document.querySelectorAll(\'.teaser__layout--gallery\')).forEach(function(teaser) {\n        if (teaser.getAttribute(\'id\')) {\n          var id = teaser.getAttribute(\'id\').replace(\'id-\', \'\').replace(\'_\', \'.\');\n          window.dispatchEvent(new window.CustomEvent(\'teaserGalleryFetch\', { detail: id }));\n        }\n      });\n    });\n  ')
    },
    m = function (t) {
      var e = t.type,
      n = t.name,
      r = void 0 === n ? 'articleId' : n,
      o = t.id;
      return '\n    function() {\n      window.dispatchEvent(new CustomEvent(\''.concat(e, '\', {\n        detail: {\n           ').concat(r, ': \'').concat(o, '\',\n        }\n      }));\n    }\n  ')
    }
  },
  251: function (t, e, n) {
    var r,
    o;
    'undefined' != typeof window && window,
    void 0 === (o = 'function' == typeof (r = function () {
      'use strict';
      function t() {
      }
      var e = t.prototype;
      return e.on = function (t, e) {
        if (t && e) {
          var n = this._events = this._events || {
          },
          r = n[t] = n[t] || [
          ];
          return - 1 == r.indexOf(e) && r.push(e),
          this
        }
      },
      e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var n = this._onceEvents = this._onceEvents || {
          };
          return (n[t] = n[t] || {
          }) [e] = !0,
          this
        }
      },
      e.off = function (t, e) {
        var n = this._events && this._events[t];
        if (n && n.length) {
          var r = n.indexOf(e);
          return - 1 != r && n.splice(r, 1),
          this
        }
      },
      e.emitEvent = function (t, e) {
        var n = this._events && this._events[t];
        if (n && n.length) {
          n = n.slice(0),
          e = e || [
          ];
          for (var r = this._onceEvents && this._onceEvents[t], i = 0; i < n.length; i++) {
            var o = n[i];
            r && r[o] && (this.off(t, o), delete r[o]),
            o.apply(this, e)
          }
          return this
        }
      },
      e.allOff = function () {
        delete this._events,
        delete this._onceEvents
      },
      t
    }) ? r.call(e, n, e, t) : r) || (t.exports = o)
  },
  252: function (t, e, n) {
    var r,
    o;
    !function (c, l) {
      r = [
        n(251)
      ],
      void 0 === (o = function (t) {
        return function (t, e) {
          'use strict';
          function n() {
          }
          function r() {
          }
          var o = r.prototype = Object.create(e.prototype);
          o.bindStartEvent = function (t) {
            this._bindStartEvent(t, !0)
          },
          o.unbindStartEvent = function (t) {
            this._bindStartEvent(t, !1)
          },
          o._bindStartEvent = function (e, n) {
            var r = (n = void 0 === n || n) ? 'addEventListener' : 'removeEventListener',
            o = 'mousedown';
            t.PointerEvent ? o = 'pointerdown' : 'ontouchstart' in t && (o = 'touchstart'),
            e[r](o, this)
          },
          o.handleEvent = function (t) {
            var e = 'on' + t.type;
            this[e] && this[e](t)
          },
          o.getTouch = function (t) {
            for (var i = 0; i < t.length; i++) {
              var e = t[i];
              if (e.identifier == this.pointerIdentifier) return e
            }
          },
          o.onmousedown = function (t) {
            var button = t.button;
            button && 0 !== button && 1 !== button || this._pointerDown(t, t)
          },
          o.ontouchstart = function (t) {
            this._pointerDown(t, t.changedTouches[0])
          },
          o.onpointerdown = function (t) {
            this._pointerDown(t, t)
          },
          o._pointerDown = function (t, e) {
            t.button || this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier, this.pointerDown(t, e))
          },
          o.pointerDown = function (t, e) {
            this._bindPostStartEvents(t),
            this.emitEvent('pointerDown', [
              t,
              e
            ])
          };
          var c = {
            mousedown: [
              'mousemove',
              'mouseup'
            ],
            touchstart: [
              'touchmove',
              'touchend',
              'touchcancel'
            ],
            pointerdown: [
              'pointermove',
              'pointerup',
              'pointercancel'
            ]
          };
          return o._bindPostStartEvents = function (e) {
            if (e) {
              var n = c[e.type];
              n.forEach((function (e) {
                t.addEventListener(e, this)
              }), this),
              this._boundPointerEvents = n
            }
          },
          o._unbindPostStartEvents = function () {
            this._boundPointerEvents && (this._boundPointerEvents.forEach((function (e) {
              t.removeEventListener(e, this)
            }), this), delete this._boundPointerEvents)
          },
          o.onmousemove = function (t) {
            this._pointerMove(t, t)
          },
          o.onpointermove = function (t) {
            t.pointerId == this.pointerIdentifier && this._pointerMove(t, t)
          },
          o.ontouchmove = function (t) {
            var e = this.getTouch(t.changedTouches);
            e && this._pointerMove(t, e)
          },
          o._pointerMove = function (t, e) {
            this.pointerMove(t, e)
          },
          o.pointerMove = function (t, e) {
            this.emitEvent('pointerMove', [
              t,
              e
            ])
          },
          o.onmouseup = function (t) {
            this._pointerUp(t, t)
          },
          o.onpointerup = function (t) {
            t.pointerId == this.pointerIdentifier && this._pointerUp(t, t)
          },
          o.ontouchend = function (t) {
            var e = this.getTouch(t.changedTouches);
            e && this._pointerUp(t, e)
          },
          o._pointerUp = function (t, e) {
            this._pointerDone(),
            this.pointerUp(t, e)
          },
          o.pointerUp = function (t, e) {
            this.emitEvent('pointerUp', [
              t,
              e
            ])
          },
          o._pointerDone = function () {
            this._pointerReset(),
            this._unbindPostStartEvents(),
            this.pointerDone()
          },
          o._pointerReset = function () {
            this.isPointerDown = !1,
            delete this.pointerIdentifier
          },
          o.pointerDone = n,
          o.onpointercancel = function (t) {
            t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t)
          },
          o.ontouchcancel = function (t) {
            var e = this.getTouch(t.changedTouches);
            e && this._pointerCancel(t, e)
          },
          o._pointerCancel = function (t, e) {
            this._pointerDone(),
            this.pointerCancel(t, e)
          },
          o.pointerCancel = function (t, e) {
            this.emitEvent('pointerCancel', [
              t,
              e
            ])
          },
          r.getPointerPoint = function (t) {
            return {
              x: t.pageX,
              y: t.pageY
            }
          },
          r
        }(c, t)
      }.apply(e, r)) || (t.exports = o)
    }(window)
  },
  253: function (t, e, n) {
    'use strict';
    n.r(e),
    n.d(e, 'esiContent', (function () {
      return f
    })),
    n.d(e, 'handlePartials', (function () {
      return m
    }));
    var r = n(5),
    o = n.n(r),
    c = n(2),
    l = n.n(c),
    d = [
      'userDigitalData',
      'polyfills'
    ],
    h = {
      userDigitalData: n.e(0).then(n.bind(null, 728)),
      polyfills: Promise.all([n.e(12),
      n.e(9)]).then(n.bind(null, 729))
    };
    function f(t) {
      return v.apply(this, arguments)
    }
    function v() {
      return (v = o() (l.a.mark((function t(e) {
        return l.a.wrap((function (t) {
          for (; ; ) switch (t.prev = t.next) {
            case 0:
              return t.next = 2,
              m({
                req: e
              });
            case 2:
              t.sent,
              t.next = 6;
              break;
            case 6:
              return t.abrupt('return', '');
            case 7:
            case 'end':
              return t.stop()
          }
        }), t)
      })))).apply(this, arguments)
    }
    function m(t) {
      return y.apply(this, arguments)
    }
    function y() {
      return (y = o() (l.a.mark((function t(e) {
        var n,
        r,
        o,
        c,
        h;
        return l.a.wrap((function (t) {
          for (; ; ) switch (t.prev = t.next) {
            case 0:
              return n = e.req,
              r = e.config,
              o = e.cached,
              c = [
              ],
              d.forEach((function (t) {
                return c.push(w({
                  req: n,
                  config: r,
                  cached: o,
                  block: t
                }))
              })),
              t.next = 5,
              Promise.all(c);
            case 5:
              return h = t.sent,
              t.abrupt('return', h.length ? h.join('') : '');
            case 7:
            case 'end':
              return t.stop()
          }
        }), t)
      })))).apply(this, arguments)
    }
    function w(t) {
      return S.apply(this, arguments)
    }
    function S() {
      return (S = o() (l.a.mark((function t(e) {
        var n,
        r,
        o,
        c,
        d;
        return l.a.wrap((function (t) {
          for (; ; ) switch (t.prev = t.next) {
            case 0:
              return n = e.req,
              r = e.config,
              o = e.cached,
              c = e.block,
              t.next = 3,
              h[c];
            case 3:
              if (d = t.sent, !o) {
                t.next = 10;
                break
              }
              return t.next = 7,
              d.handleCached(n, r);
            case 7:
              t.t0 = t.sent,
              t.next = 13;
              break;
            case 10:
              return t.next = 12,
              d.handle(n, r);
            case 12:
              t.t0 = t.sent;
            case 13:
              return t.abrupt('return', t.t0);
            case 14:
            case 'end':
              return t.stop()
          }
        }), t)
      })))).apply(this, arguments)
    }
  },
  258: function (t, e, n) {
    'use strict';
    var r = {
      name: 'ClientOnly',
      functional: !0,
      props: {
        placeholder: String,
        placeholderTag: {
          type: String,
        default:
          'div'
        }
      },
      render: function (t, e) {
        var n = e.parent,
        r = e.slots,
        o = e.props,
        c = r(),
        l = c.default;
        void 0 === l && (l = [
        ]);
        var d = c.placeholder;
        return n._isMounted ? l : (n.$once('hook:mounted', (function () {
          n.$forceUpdate()
        })), o.placeholderTag && (o.placeholder || d) ? t(o.placeholderTag, {
          class : [
            'client-only-placeholder'
          ]
        }, o.placeholder || d) : l.length > 0 ? l.map((function () {
          return t(!1)
        })) : t(!1))
      }
    };
    t.exports = r
  },
  262: function (t, e, n) {
    t.exports = function () {
      'use strict';
      var g = 'undefined' != typeof document && document.documentMode,
      t = {
        rootMargin: '0px',
        threshold: 0,
        load: function (t) {
          if ('picture' === t.nodeName.toLowerCase()) {
            var e = t.querySelector('img'),
            n = !1;
            null === e && (e = document.createElement('img'), n = !0),
            g && t.getAttribute('data-iesrc') && (e.src = t.getAttribute('data-iesrc')),
            t.getAttribute('data-alt') && (e.alt = t.getAttribute('data-alt')),
            n && t.append(e)
          }
          if ('video' === t.nodeName.toLowerCase() && !t.getAttribute('data-src') && t.children) {
            for (var a = t.children, r = void 0, i = 0; i <= a.length - 1; i++) (r = a[i].getAttribute('data-src')) && (a[i].src = r);
            t.load()
          }
          t.getAttribute('data-poster') && (t.poster = t.getAttribute('data-poster')),
          t.getAttribute('data-src') && (t.src = t.getAttribute('data-src')),
          t.getAttribute('data-srcset') && t.setAttribute('srcset', t.getAttribute('data-srcset'));
          var o = ',';
          if (t.getAttribute('data-background-delimiter') && (o = t.getAttribute('data-background-delimiter')), t.getAttribute('data-background-image')) t.style.backgroundImage = 'url(\'' + t.getAttribute('data-background-image').split(o).join('\'),url(\'') + '\')';
           else if (t.getAttribute('data-background-image-set')) {
            var c = t.getAttribute('data-background-image-set').split(o),
            u = c[0].substr(0, c[0].indexOf(' ')) || c[0];
            u = - 1 === u.indexOf('url(') ? 'url(' + u + ')' : u,
            1 === c.length ? t.style.backgroundImage = u : t.setAttribute('style', (t.getAttribute('style') || '') + 'background-image: ' + u + '; background-image: -webkit-image-set(' + c + '); background-image: image-set(' + c + ')')
          }
          t.getAttribute('data-toggle-class') && t.classList.toggle(t.getAttribute('data-toggle-class'))
        },
        loaded: function () {
        }
      };
      function e(t) {
        t.setAttribute('data-loaded', !0)
      }
      var n = function (t) {
        return 'true' === t.getAttribute('data-loaded')
      },
      r = function (t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : document;
        return t instanceof Element ? [
          t
        ] : t instanceof NodeList ? t : e.querySelectorAll(t)
      };
      return function () {
        var o,
        a,
        c = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : '.lozad',
        l = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
        },
        d = Object.assign({
        }, t, l),
        i = d.root,
        h = d.rootMargin,
        f = d.threshold,
        u = d.load,
        g = d.loaded,
        s = void 0;
        'undefined' != typeof window && window.IntersectionObserver && (s = new IntersectionObserver((o = u, a = g, function (t, r) {
          t.forEach((function (t) {
            (0 < t.intersectionRatio || t.isIntersecting) && (r.unobserve(t.target), n(t.target) || (o(t.target), e(t.target), a(t.target)))
          }))
        }), {
          root: i,
          rootMargin: h,
          threshold: f
        }));
        for (var v, m = r(c, i), b = 0; b < m.length; b++) (v = m[b]).getAttribute('data-placeholder-background') && (v.style.background = v.getAttribute('data-placeholder-background'));
        return {
          observe: function () {
            for (var t = r(c, i), o = 0; o < t.length; o++) n(t[o]) || (s ? s.observe(t[o]) : (u(t[o]), e(t[o]), g(t[o])))
          },
          triggerLoad: function (t) {
            n(t) || (u(t), e(t), g(t))
          },
          observer: s
        }
      }
    }()
  },
  263: function (t, e, n) {
    var r,
    o,
    c;
    window,
    o = [
      n(37),
      n(715),
      n(717),
      n(718),
      n(719),
      n(720),
      n(721)
    ],
    void 0 === (c = 'function' == typeof (r = function (t) {
      return t
    }) ? r.apply(e, o) : r) || (t.exports = c)
  },
  266: function (t, e, n) {
    'use strict';
    (function (t) {
      n.d(e, 'a', (function () {
        return c
      })),
      n.d(e, 'b', (function () {
        return d
      }));
      var r = n(316),
      o = n(24);
      function c() {
        return [{
          hid: 'vamp-bridge',
          preserve: 'preserve',
          type: 'text/javascript',
          src: t.env.WEBVIEW_VAMP_BRIDGE ? t.env.WEBVIEW_VAMP_BRIDGE : ''
        },
        {
          hid: 'bridge-smooth-scroll',
          preserve: 'preserve',
          type: 'text/javascript',
          innerHTML: r.a
        },
        {
          hid: 'bridge-helpers',
          preserve: 'preserve',
          type: 'text/javascript',
          innerHTML: '\n        window.appDataReady = new Promise(function(resolve) {\n          window.addEventListener(\'appDataReady\', function() {\n            resolve(true);\n          });\n        });\n        '.concat(o.f, '\n        ').concat(o.e, '\n        ').concat(o.d, '\n        window.vampBridge = {};').concat(o.c).concat(o.a, '\n        window.vampBridge.navigateToGallery = function(id, element) {\n         var sliderImages = window.NZZ.metadata.galleries ? window.NZZ.metadata.galleries[id] : null;\n         if (!sliderImages) {\n           sliderImages = window.NZZ.galleries[id];\n         }\n         if (sliderImages) {\n           window.vamp.navigateToGallery({\n            images: sliderImages,\n            selectedImage: 0,\n            sharingUrl: element.getAttribute(\'link\'),\n            articleTitle: element.getAttribute(\'title\')\n           });\n         }\n        }\n      ')
        },
        {
          hid: 'horizontal-scroll-component',
          preserve: 'preserve',
          type: 'text/javascript',
          innerHTML: o.b
        }
        ]
      }
      function l(t, e) {
        return '\n      var NZZ = window.NZZ || {};\n      NZZ.metadata = '.concat(JSON.stringify(t), ';\n      window.NZZ = NZZ;\n      var metadata = window.NZZ.metadata || {};\n      try {\n          window.vamp.').concat(e, '(metadata);\n      } catch (e) {console.log(e);}\n      setTimeout(function() {\n        try {\n          appDataReady.then(function() {\n            window.vamp.closeLoadingSpinner();\n          });\n        } catch(e) {\n          console.log(e);\n        }\n      }, 1000);\n    ')
      }
      function d(t, e) {
        return [{
          hid: 'vamp-'.concat(e),
          preserve: 'preserve',
          type: 'text/javascript',
          innerHTML: l(t, e)
        }
        ]
      }
    }).call(this, n(43))
  },
  268: function (t, e, n) {
    t.exports = function () {
      var t = '__v-click-outside',
      e = 'undefined' != typeof window,
      n = 'undefined' != typeof navigator,
      i = e && ('ontouchstart' in window || n && navigator.msMaxTouchPoints > 0) ? [
        'touchstart'
      ] : [
        'click'
      ];
      function r(e, n) {
        var r = function (t) {
          var e = 'function' == typeof t;
          if (!e && 'object' != typeof t) throw new Error('v-click-outside: Binding value must be a function or an object');
          return {
            handler: e ? t : t.handler,
            middleware: t.middleware || function (t) {
              return t
            },
            events: t.events || i,
            isActive: !(!1 === t.isActive)
          }
        }(n.value),
        o = r.handler,
        c = r.middleware;
        r.isActive && (e[t] = r.events.map((function (t) {
          return {
            event: t,
            handler: function (t) {
              return function (t) {
                var e = t.el,
                n = t.event,
                i = t.handler,
                r = t.middleware;
                n.target !== e && !e.contains(n.target) && r(n, e) && i(n, e)
              }({
                event: t,
                el: e,
                handler: o,
                middleware: c
              })
            }
          }
        })), e[t].forEach((function (t) {
          var e = t.event,
          n = t.handler;
          return setTimeout((function () {
            return document.documentElement.addEventListener(e, n, !1)
          }), 0)
        })))
      }
      function o(e) {
        (e[t] || [
        ]).forEach((function (t) {
          return document.documentElement.removeEventListener(t.event, t.handler, !1)
        })),
        delete e[t]
      }
      var c = {
        bind: r,
        update: function (t, e) {
          var n = e.value,
          i = e.oldValue;
          JSON.stringify(n) !== JSON.stringify(i) && (o(t), r(t, {
            value: n
          }))
        },
        unbind: o
      };
      return {
        install: function (t) {
          t.directive('click-outside', c)
        },
        directive: c
      }
    }()
  },
  269: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'MenuSection',
      functional: !0,
      props: {
        brand: {
          type: Boolean,
        default:
          !1
        }
      },
      render: function (t, e) {
        var n = e.children,
        r = e.props,
        style = e.data.style;
        return t('ul', {
          class : {
            menu__section: !0,
            'menu__section--brand': r.brand
          },
          style: style
        }, n)
      }
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  285: function (t, e, n) {
    'use strict';
    t.exports = function (t, e) {
      return e || (e = {
      }),
      'string' != typeof (t = t && t.__esModule ? t.default : t) ? t : (/^['"].*['"]$/.test(t) && (t = t.slice(1, - 1)), e.hash && (t += e.hash), /["'() \t\n]/.test(t) || e.needQuotes ? '"'.concat(t.replace(/"/g, '\\"').replace(/\n/g, '\\n'), '"') : t)
    }
  },
  298: function (t, e) {
    var n = [
      'M',
      'MM',
      'Q',
      'D',
      'DD',
      'DDD',
      'DDDD',
      'd',
      'E',
      'W',
      'WW',
      'YY',
      'YYYY',
      'GG',
      'GGGG',
      'H',
      'HH',
      'h',
      'hh',
      'm',
      'mm',
      's',
      'ss',
      'S',
      'SS',
      'SSS',
      'Z',
      'ZZ',
      'X',
      'x'
    ];
    t.exports = function (t) {
      var e = [
      ];
      for (var r in t) t.hasOwnProperty(r) && e.push(r);
      var o = n.concat(e).sort().reverse();
      return new RegExp('(\\[[^\\[]*\\])|(\\\\)?(' + o.join('|') + '|.)', 'g')
    }
  },
  299: function (t, e) {
    var n = {
      utf8: {
        stringToBytes: function (t) {
          return n.bin.stringToBytes(unescape(encodeURIComponent(t)))
        },
        bytesToString: function (t) {
          return decodeURIComponent(escape(n.bin.bytesToString(t)))
        }
      },
      bin: {
        stringToBytes: function (t) {
          for (var e = [
          ], i = 0; i < t.length; i++) e.push(255 & t.charCodeAt(i));
          return e
        },
        bytesToString: function (t) {
          for (var e = [
          ], i = 0; i < t.length; i++) e.push(String.fromCharCode(t[i]));
          return e.join('')
        }
      }
    };
    t.exports = n
  },
  300: function (t, e, n) {
    var r,
    o;
    window,
    void 0 === (o = 'function' == typeof (r = function () {
      'use strict';
      function t(t) {
        var e = parseFloat(t);
        return - 1 == t.indexOf('%') && !isNaN(e) && e
      }
      function e() {
      }
      var n = 'undefined' == typeof console ? e : function (t) {
        console.error(t)
      },
      r = [
        'paddingLeft',
        'paddingRight',
        'paddingTop',
        'paddingBottom',
        'marginLeft',
        'marginRight',
        'marginTop',
        'marginBottom',
        'borderLeftWidth',
        'borderRightWidth',
        'borderTopWidth',
        'borderBottomWidth'
      ],
      o = r.length;
      function c() {
        for (var t = {
          width: 0,
          height: 0,
          innerWidth: 0,
          innerHeight: 0,
          outerWidth: 0,
          outerHeight: 0
        }, i = 0; i < o; i++) t[r[i]] = 0;
        return t
      }
      function l(t) {
        var style = getComputedStyle(t);
        return style || n('Style returned ' + style + '. Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1'),
        style
      }
      var d,
      h = !1;
      function f() {
        if (!h) {
          h = !0;
          var div = document.createElement('div');
          div.style.width = '200px',
          div.style.padding = '1px 2px 3px 4px',
          div.style.borderStyle = 'solid',
          div.style.borderWidth = '1px 2px 3px 4px',
          div.style.boxSizing = 'border-box';
          var body = document.body || document.documentElement;
          body.appendChild(div);
          var style = l(div);
          d = 200 == Math.round(t(style.width)),
          v.isBoxSizeOuter = d,
          body.removeChild(div)
        }
      }
      function v(e) {
        if (f(), 'string' == typeof e && (e = document.querySelector(e)), e && 'object' == typeof e && e.nodeType) {
          var style = l(e);
          if ('none' == style.display) return c();
          var n = {
          };
          n.width = e.offsetWidth,
          n.height = e.offsetHeight;
          for (var h = n.isBorderBox = 'border-box' == style.boxSizing, i = 0; i < o; i++) {
            var v = r[i],
            m = style[v],
            y = parseFloat(m);
            n[v] = isNaN(y) ? 0 : y
          }
          var w = n.paddingLeft + n.paddingRight,
          S = n.paddingTop + n.paddingBottom,
          x = n.marginLeft + n.marginRight,
          E = n.marginTop + n.marginBottom,
          _ = n.borderLeftWidth + n.borderRightWidth,
          C = n.borderTopWidth + n.borderBottomWidth,
          D = h && d,
          A = t(style.width);
          !1 !== A && (n.width = A + (D ? 0 : w + _));
          var k = t(style.height);
          return !1 !== k && (n.height = k + (D ? 0 : S + C)),
          n.innerWidth = n.width - (w + _),
          n.innerHeight = n.height - (S + C),
          n.outerWidth = n.width + x,
          n.outerHeight = n.height + E,
          n
        }
      }
      return v
    }) ? r.call(e, n, e, t) : r) || (t.exports = o)
  },
  303: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      extends : n(81).default,
      data: function () {
        return {
          baseClass: 'widget--1of3',
          tid: 'widget-1of3',
          teaserSize: '1of3',
          sourceElem: 'Widget-Liste-klein'
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  306: function (t, e, n) {
    'use strict';
    e.a = function (t, e) {
      return e = e || {
      },
      new Promise((function (n, r) {
        var s = new XMLHttpRequest,
        o = [
        ],
        u = [
        ],
        i = {
        },
        a = function () {
          return {
            ok: 2 == (s.status / 100 | 0),
            statusText: s.statusText,
            status: s.status,
            url: s.responseURL,
            text: function () {
              return Promise.resolve(s.responseText)
            },
            json: function () {
              return Promise.resolve(s.responseText).then(JSON.parse)
            },
            blob: function () {
              return Promise.resolve(new Blob([s.response]))
            },
            clone: a,
            headers: {
              keys: function () {
                return o
              },
              entries: function () {
                return u
              },
              get: function (t) {
                return i[t.toLowerCase()]
              },
              has: function (t) {
                return t.toLowerCase() in i
              }
            }
          }
        };
        for (var c in s.open(e.method || 'get', t, !0), s.onload = function () {
          s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (function (t, e, n) {
            o.push(e = e.toLowerCase()),
            u.push([e,
            n]),
            i[e] = i[e] ? i[e] + ',' + n : n
          })),
          n(a())
        }, s.onerror = r, s.withCredentials = 'include' == e.credentials, e.headers) s.setRequestHeader(c, e.headers[c]);
        s.send(e.body || null)
      }))
    }
  },
  308: function (t, e, n) {
    'use strict';
    var r = function (t) {
      return function (t) {
        return !!t && 'object' == typeof t
      }(t) && !function (t) {
        var e = Object.prototype.toString.call(t);
        return '[object RegExp]' === e || '[object Date]' === e || function (t) {
          return t.$$typeof === o
        }(t)
      }(t)
    };
    var o = 'function' == typeof Symbol && Symbol.for ? Symbol.for('react.element') : 60103;
    function c(t, e) {
      return !1 !== e.clone && e.isMergeableObject(t) ? v((n = t, Array.isArray(n) ? [
      ] : {
      }), t, e) : t;
      var n
    }
    function l(t, source, e) {
      return t.concat(source).map((function (element) {
        return c(element, e)
      }))
    }
    function d(t) {
      return Object.keys(t).concat(function (t) {
        return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter((function (symbol) {
          return t.propertyIsEnumerable(symbol)
        })) : [
        ]
      }(t))
    }
    function h(object, t) {
      try {
        return t in object
      } catch (t) {
        return !1
      }
    }
    function f(t, source, e) {
      var n = {
      };
      return e.isMergeableObject(t) && d(t).forEach((function (r) {
        n[r] = c(t[r], e)
      })),
      d(source).forEach((function (r) {
        (function (t, e) {
          return h(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e))
        }) (t, r) || (h(t, r) && e.isMergeableObject(source[r]) ? n[r] = function (t, e) {
          if (!e.customMerge) return v;
          var n = e.customMerge(t);
          return 'function' == typeof n ? n : v
        }(r, e) (t[r], source[r], e) : n[r] = c(source[r], e))
      })),
      n
    }
    function v(t, source, e) {
      (e = e || {
      }).arrayMerge = e.arrayMerge || l,
      e.isMergeableObject = e.isMergeableObject || r,
      e.cloneUnlessOtherwiseSpecified = c;
      var n = Array.isArray(source);
      return n === Array.isArray(t) ? n ? e.arrayMerge(t, source, e) : f(t, source, e) : c(source, e)
    }
    v.all = function (t, e) {
      if (!Array.isArray(t)) throw new Error('first argument should be an array');
      return t.reduce((function (t, n) {
        return v(t, n, e)
      }), {
      })
    };
    var m = v;
    t.exports = m
  },
  311: function (t, e, n) {
    'use strict';
    var r = 'bfred-it:object-fit-images',
    o = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,
    c = 'undefined' == typeof Image ? {
      style: {
        'object-position': 1
      }
    }
     : new Image,
    l = 'object-fit' in c.style,
    d = 'object-position' in c.style,
    h = 'background-size' in c.style,
    f = 'string' == typeof c.currentSrc,
    v = c.getAttribute,
    m = c.setAttribute,
    y = !1;
    function w(img, t, e) {
      var n = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'' + (t || 1) + '\' height=\'' + (e || 0) + '\'%3E%3C/svg%3E';
      v.call(img, 'src') !== n && m.call(img, 'src', n)
    }
    function S(img, t) {
      img.naturalWidth ? t(img) : setTimeout(S, 100, img, t)
    }
    function x(t) {
      var style = function (t) {
        for (var e, style = getComputedStyle(t).fontFamily, n = {
        }; null !== (e = o.exec(style)); ) n[e[1]] = e[2];
        return n
      }(t),
      e = t[r];
      if (style['object-fit'] = style['object-fit'] || 'fill', !e.img) {
        if ('fill' === style['object-fit']) return;
        if (!e.skipTest && l && !style['object-position']) return
      }
      if (!e.img) {
        e.img = new Image(t.width, t.height),
        e.img.srcset = v.call(t, 'data-ofi-srcset') || t.srcset,
        e.img.src = v.call(t, 'data-ofi-src') || t.src,
        m.call(t, 'data-ofi-src', t.src),
        t.srcset && m.call(t, 'data-ofi-srcset', t.srcset),
        w(t, t.naturalWidth || t.width, t.naturalHeight || t.height),
        t.srcset && (t.srcset = '');
        try {
          !function (t) {
            var e = {
              get: function (e) {
                return t[r].img[e || 'src']
              },
              set: function (e, n) {
                return t[r].img[n || 'src'] = e,
                m.call(t, 'data-ofi-' + n, e),
                x(t),
                e
              }
            };
            Object.defineProperty(t, 'src', e),
            Object.defineProperty(t, 'currentSrc', {
              get: function () {
                return e.get('currentSrc')
              }
            }),
            Object.defineProperty(t, 'srcset', {
              get: function () {
                return e.get('srcset')
              },
              set: function (t) {
                return e.set(t, 'srcset')
              }
            })
          }(t)
        } catch (t) {
          window.console && console.warn('https://bit.ly/ofi-old-browser')
        }
      }
      !function (t) {
        if (t.srcset && !f && window.picturefill) {
          var e = window.picturefill._;
          t[e.ns] && t[e.ns].evaled || e.fillImg(t, {
            reselect: !0
          }),
          t[e.ns].curSrc || (t[e.ns].supported = !1, e.fillImg(t, {
            reselect: !0
          })),
          t.currentSrc = t[e.ns].curSrc || t.src
        }
      }(e.img),
      t.style.backgroundImage = 'url("' + (e.img.currentSrc || e.img.src).replace(/"/g, '\\"') + '")',
      t.style.backgroundPosition = style['object-position'] || 'center',
      t.style.backgroundRepeat = 'no-repeat',
      t.style.backgroundOrigin = 'content-box',
      /scale-down/.test(style['object-fit']) ? S(e.img, (function () {
        e.img.naturalWidth > t.width || e.img.naturalHeight > t.height ? t.style.backgroundSize = 'contain' : t.style.backgroundSize = 'auto'
      })) : t.style.backgroundSize = style['object-fit'].replace('none', 'auto').replace('fill', '100% 100%'),
      S(e.img, (function (img) {
        w(t, img.naturalWidth, img.naturalHeight)
      }))
    }
    function E(t, e) {
      var n = !y && !t;
      if (e = e || {
      }, t = t || 'img', d && !e.skipTest || !h) return !1;
      'img' === t ? t = document.getElementsByTagName('img') : 'string' == typeof t ? t = document.querySelectorAll(t) : 'length' in t || (t = [
        t
      ]);
      for (var i = 0; i < t.length; i++) t[i][r] = t[i][r] || {
        skipTest: e.skipTest
      },
      x(t[i]);
      n && (document.body.addEventListener('load', (function (t) {
        'IMG' === t.target.tagName && E(t.target, {
          skipTest: e.skipTest
        })
      }), !0), y = !0, t = 'img'),
      e.watchMQ && window.addEventListener('resize', E.bind(null, t, {
        skipTest: e.skipTest
      }))
    }
    E.supportsObjectFit = l,
    E.supportsObjectPosition = d,
    function () {
      function t(t, e) {
        return t[r] && t[r].img && ('src' === e || 'srcset' === e) ? t[r].img : t
      }
      d || (HTMLImageElement.prototype.getAttribute = function (e) {
        return v.call(t(this, e), e)
      }, HTMLImageElement.prototype.setAttribute = function (e, n) {
        return m.call(t(this, e), e, String(n))
      })
    }(),
    t.exports = E
  },
  312: function (t, e, n) {
    'use strict';
    var r = new Map;
    function o(t) {
      if ('undefined' == typeof IntersectionObserver) return null;
      var e = JSON.stringify(t);
      if (r.has(e)) return r.get(e);
      var n = new IntersectionObserver((function (t) {
        t.forEach((function (t) {
          (t.isIntersecting || t.intersectionRatio > 0) && t.target.hydrate && t.target.hydrate()
        }))
      }), t);
      return r.set(e, n),
      n
    }
    var c = 'undefined' == typeof window,
    l = !c;
    var d = {
      props: {
        idleTimeout: {
        default:
          2000,
          type: Number
        },
        onInteraction: {
          type: [
            Array,
            Boolean,
            String
          ]
        },
        ssrOnly: {
          type: Boolean
        },
        triggerHydration: {
        default:
          !1,
          type: Boolean
        },
        whenIdle: {
          type: Boolean
        },
        whenVisible: {
          type: [
            Boolean,
            Object
          ]
        }
      },
      data: function () {
        return {
          hydrated: c
        }
      },
      watch: {
        triggerHydration: {
          immediate: !0,
          handler: function (t) {
            t && this.hydrate()
          }
        }
      },
      computed: {
        interactionEvents: function () {
          return this.onInteraction ? !0 === this.onInteraction ? [
            'focus'
          ] : Array.isArray(this.onInteraction) ? this.onInteraction : [
            this.onInteraction
          ] : [
          ]
        }
      },
      mounted: function () {
        var t = this;
        if (0 !== this.$el.childElementCount) {
          if (!this.ssrOnly) {
            if (this.interactionEvents.forEach((function (e) {
              t.$el.addEventListener(e, t.hydrate, {
                capture: !0,
                once: !0
              })
            })), this.interactionEvents.length && (this.interaction = function () {
              t.interactionEvents.forEach((function (e) {
                return t.$el.removeEventListener(e, t.hydrate)
              }))
            }), this.whenIdle) {
              if (!('requestIdleCallback' in window) || !('requestAnimationFrame' in window)) return void this.hydrate();
              var e = requestIdleCallback((function () {
                requestAnimationFrame((function () {
                  t.hydrate()
                }))
              }), {
                timeout: this.idleTimeout
              });
              this.idle = function () {
                return cancelIdleCallback(e)
              }
            }
            if (this.whenVisible) {
              var n = o(!0 === this.whenVisible ? {
              }
               : this.whenVisible);
              if (!n) return void this.hydrate();
              this.$el.hydrate = this.hydrate,
              n.observe(this.$el),
              this.visible = function () {
                n.unobserve(t.$el),
                delete t.$el.hydrate
              }
            }
          }
        } else this.hydrate()
      },
      beforeDestroy: function () {
        this.cleanup()
      },
      methods: {
        cleanup: function () {
          var t = this;
          [
            'idle',
            'interaction',
            'visible'
          ].forEach((function (e) {
            e in t && (t[e](), delete t[e])
          }))
        },
        hydrate: function () {
          this.hydrated = !0,
          this.cleanup()
        }
      },
      render: function (t) {
        var e = this.$el ? this.$el.tagName : 'div',
        n = this.$scopedSlots.default ? this.$scopedSlots.default({
          hydrated: this.hydrated
        }) : this.$slots.default[0],
        r = this.hydrated ? n : t(e);
        return l && (r.asyncFactory = this.hydrated ? {
          resolved: !0
        }
         : {
        }, r.isAsyncPlaceholder = !this.hydrated),
        r
      }
    };
    e.a = d
  },
  313: function (t, e, n) {
    'use strict';
    var r = n(314),
    o = n.n(r),
    c = function (t, e, n) {
      var r = n.includeSeconds,
      c = n.addSuffix;
      return void 0 === c && (c = !0),
      o() (t, {
        locale: e,
        includeSeconds: r,
        addSuffix: c
      })
    };
    e.a = function (t, e) {
      if (!t.prototype.$timeago) {
        0;
        var n = {
          locale: e.locale
        };
        t.prototype.$timeago = t.observable ? t.observable(n) : new t({
          data: n
        });
        var r = function (t) {
          void 0 === t && (t = {
          });
          var e = t.locales || {
          };
          return {
            name: t.name || 'Timeago',
            props: {
              datetime: {
                required: !0
              },
              title: {
                type: [
                  String,
                  Boolean
                ]
              },
              locale: {
                type: String
              },
              autoUpdate: {
                type: [
                  Number,
                  Boolean
                ]
              },
              converter: {
                type: Function
              },
              converterOptions: {
                type: Object
              }
            },
            data: function () {
              return {
                timeago: this.getTimeago()
              }
            },
            computed: {
              localeName: function () {
                return this.locale || this.$timeago.locale
              }
            },
            mounted: function () {
              this.startUpdater()
            },
            beforeDestroy: function () {
              this.stopUpdater()
            },
            render: function (t) {
              return t('time', {
                attrs: {
                  datetime: new Date(this.datetime).toISOString(),
                  title: 'string' == typeof this.title ? this.title : !1 === this.title ? null : this.timeago
                }
              }, [
                this.timeago
              ])
            },
            methods: {
              getTimeago: function (n) {
                return (this.converter || t.converter || c) (n || this.datetime, e[this.locale || this.$timeago.locale], this.converterOptions || {
                })
              },
              convert: function (t) {
                this.timeago = this.getTimeago(t)
              },
              startUpdater: function () {
                var t = this;
                if (this.autoUpdate) {
                  var e = !0 === this.autoUpdate ? 60 : this.autoUpdate;
                  this.updater = setInterval((function () {
                    t.convert()
                  }), 1000 * e)
                }
              },
              stopUpdater: function () {
                this.updater && (clearInterval(this.updater), this.updater = null)
              }
            },
            watch: {
              autoUpdate: function (t) {
                this.stopUpdater(),
                t && this.startUpdater()
              },
              datetime: function () {
                this.convert()
              },
              localeName: function () {
                this.convert()
              },
              converter: function () {
                this.convert()
              },
              converterOptions: {
                handler: function () {
                  this.convert()
                },
                deep: !0
              }
            }
          }
        }(e);
        t.component(r.name, r)
      }
    }
  },
  314: function (t, e, n) {
    var r = n(675);
    t.exports = function (t, e) {
      return r(Date.now(), t, e)
    }
  },
  316: function (t, e, n) {
    'use strict';
    n.d(e, 'a', (function () {
      return r
    }));
    var r = '\n!function(){"use strict";function o(){var o=window,t=document;if(!("scrollBehavior"in t.documentElement.style&&!0!==o.__forceSmoothScrollPolyfill__)){var l,e=o.HTMLElement||o.Element,r=468,i={scroll:o.scroll||o.scrollTo,scrollBy:o.scrollBy,elementScroll:e.prototype.scroll||n,scrollIntoView:e.prototype.scrollIntoView},s=o.performance&&o.performance.now?o.performance.now.bind(o.performance):Date.now,c=(l=o.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(l)?1:0);o.scroll=o.scrollTo=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?h.call(o,t.body,void 0!==arguments[0].left?~~arguments[0].left:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:o.scrollY||o.pageYOffset):i.scroll.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:o.scrollY||o.pageYOffset))},o.scrollBy=function(){void 0!==arguments[0]&&(f(arguments[0])?i.scrollBy.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(o,t.body,~~arguments[0].left+(o.scrollX||o.pageXOffset),~~arguments[0].top+(o.scrollY||o.pageYOffset)))},e.prototype.scroll=e.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==f(arguments[0])){var o=arguments[0].left,t=arguments[0].top;h.call(this,this,void 0===o?this.scrollLeft:~~o,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},e.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},e.prototype.scrollIntoView=function(){if(!0!==f(arguments[0])){var l=function(o){for(;o!==t.body&&!1===(e=p(l=o,"Y")&&a(l,"Y"),r=p(l,"X")&&a(l,"X"),e||r);)o=o.parentNode||o.host;var l,e,r;return o}(this),e=l.getBoundingClientRect(),r=this.getBoundingClientRect();l!==t.body?(h.call(this,l,l.scrollLeft+r.left-e.left,l.scrollTop+r.top-e.top),"fixed"!==o.getComputedStyle(l).position&&o.scrollBy({left:e.left,top:e.top,behavior:"smooth"})):o.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else i.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function n(o,t){this.scrollLeft=o,this.scrollTop=t}function f(o){if(null===o||"object"!=typeof o||void 0===o.behavior||"auto"===o.behavior||"instant"===o.behavior)return!0;if("object"==typeof o&&"smooth"===o.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+o.behavior+" is not a valid value for enumeration ScrollBehavior.")}function p(o,t){return"Y"===t?o.clientHeight+c<o.scrollHeight:"X"===t?o.clientWidth+c<o.scrollWidth:void 0}function a(t,l){var e=o.getComputedStyle(t,null)["overflow"+l];return"auto"===e||"scroll"===e}function d(t){var l,e,i,c,n=(s()-t.startTime)/r;c=n=n>1?1:n,l=.5*(1-Math.cos(Math.PI*c)),e=t.startX+(t.x-t.startX)*l,i=t.startY+(t.y-t.startY)*l,t.method.call(t.scrollable,e,i),e===t.x&&i===t.y||o.requestAnimationFrame(d.bind(o,t))}function h(l,e,r){var c,f,p,a,h=s();l===t.body?(c=o,f=o.scrollX||o.pageXOffset,p=o.scrollY||o.pageYOffset,a=i.scroll):(c=l,f=l.scrollLeft,p=l.scrollTop,a=n),d({scrollable:c,method:a,startTime:h,startX:f,startY:p,x:e,y:r})}}"object"==typeof exports&&"undefined"!=typeof module?module.exports={polyfill:o}:o()}();\n'
  },
  33: function (t, e, n) {
    var r,
    o;
    !function (c, l) {
      r = [
        n(711)
      ],
      void 0 === (o = function (t) {
        return function (t, e) {
          'use strict';
          var n = {
            extend: function (a, b) {
              for (var t in b) a[t] = b[t];
              return a
            },
            modulo: function (t, div) {
              return (t % div + div) % div
            }
          },
          r = Array.prototype.slice;
          n.makeArray = function (t) {
            return Array.isArray(t) ? t : null == t ? [
            ] : 'object' == typeof t && 'number' == typeof t.length ? r.call(t) : [
              t
            ]
          },
          n.removeFrom = function (t, e) {
            var n = t.indexOf(e);
            - 1 != n && t.splice(n, 1)
          },
          n.getParent = function (t, n) {
            for (; t.parentNode && t != document.body; ) if (t = t.parentNode, e(t, n)) return t
          },
          n.getQueryElement = function (t) {
            return 'string' == typeof t ? document.querySelector(t) : t
          },
          n.handleEvent = function (t) {
            var e = 'on' + t.type;
            this[e] && this[e](t)
          },
          n.filterFindElements = function (t, r) {
            t = n.makeArray(t);
            var o = [
            ];
            return t.forEach((function (t) {
              if (t instanceof HTMLElement) if (r) {
                e(t, r) && o.push(t);
                for (var n = t.querySelectorAll(r), i = 0; i < n.length; i++) o.push(n[i])
              } else o.push(t)
            })),
            o
          },
          n.debounceMethod = function (t, e, n) {
            n = n || 100;
            var r = t.prototype[e],
            o = e + 'Timeout';
            t.prototype[e] = function () {
              var t = this[o];
              clearTimeout(t);
              var e = arguments,
              c = this;
              this[o] = setTimeout((function () {
                r.apply(c, e),
                delete c[o]
              }), n)
            }
          },
          n.docReady = function (t) {
            var e = document.readyState;
            'complete' == e || 'interactive' == e ? setTimeout(t) : document.addEventListener('DOMContentLoaded', t)
          },
          n.toDashed = function (t) {
            return t.replace(/(.)([A-Z])/g, (function (t, e, n) {
              return e + '-' + n
            })).toLowerCase()
          };
          var o = t.console;
          return n.htmlInit = function (e, r) {
            n.docReady((function () {
              var c = n.toDashed(r),
              l = 'data-' + c,
              d = document.querySelectorAll('[' + l + ']'),
              h = document.querySelectorAll('.js-' + c),
              f = n.makeArray(d).concat(n.makeArray(h)),
              v = l + '-options',
              m = t.jQuery;
              f.forEach((function (t) {
                var n,
                c = t.getAttribute(l) || t.getAttribute(v);
                try {
                  n = c && JSON.parse(c)
                } catch (e) {
                  return void (o && o.error('Error parsing ' + l + ' on ' + t.className + ': ' + e))
                }
                var d = new e(t, n);
                m && m.data(t, r, d)
              }))
            }))
          },
          n
        }(c, t)
      }.apply(e, r)) || (t.exports = o)
    }(window)
  },
  37: function (t, e, n) {
    var r,
    o;
    !function (c, l) {
      r = [
        n(251),
        n(300),
        n(33),
        n(712),
        n(713),
        n(714)
      ],
      void 0 === (o = function (t, e, n, r, o, l) {
        return function (t, e, n, r, o, c, l) {
          'use strict';
          var d = t.jQuery,
          h = t.getComputedStyle,
          f = t.console;
          function v(t, e) {
            for (t = r.makeArray(t); t.length; ) e.appendChild(t.shift())
          }
          var m = 0,
          y = {
          };
          function w(element, t) {
            var e = r.getQueryElement(element);
            if (e) {
              if (this.element = e, this.element.flickityGUID) {
                var n = y[this.element.flickityGUID];
                return n && n.option(t),
                n
              }
              d && (this.$element = d(this.element)),
              this.options = r.extend({
              }, this.constructor.defaults),
              this.option(t),
              this._create()
            } else f && f.error('Bad element for Flickity: ' + (e || element))
          }
          w.defaults = {
            accessibility: !0,
            cellAlign: 'center',
            freeScrollFriction: 0.075,
            friction: 0.28,
            namespaceJQueryEvents: !0,
            percentPosition: !0,
            resize: !0,
            selectedAttraction: 0.025,
            setGallerySize: !0
          },
          w.createMethods = [
          ];
          var S = w.prototype;
          r.extend(S, e.prototype),
          S._create = function () {
            var e = this.guid = ++m;
            for (var n in this.element.flickityGUID = e, y[e] = this, this.selectedIndex = 0, this.restingFrames = 0, this.x = 0, this.velocity = 0, this.originSide = this.options.rightToLeft ? 'right' : 'left', this.viewport = document.createElement('div'), this.viewport.className = 'flickity-viewport', this._createSlider(), (this.options.resize || this.options.watchCSS) && t.addEventListener('resize', this), this.options.on) {
              var r = this.options.on[n];
              this.on(n, r)
            }
            w.createMethods.forEach((function (t) {
              this[t]()
            }), this),
            this.options.watchCSS ? this.watchCSS() : this.activate()
          },
          S.option = function (t) {
            r.extend(this.options, t)
          },
          S.activate = function () {
            this.isActive || (this.isActive = !0, this.element.classList.add('flickity-enabled'), this.options.rightToLeft && this.element.classList.add('flickity-rtl'), this.getSize(), v(this._filterFindCellElements(this.element.children), this.slider), this.viewport.appendChild(this.slider), this.element.appendChild(this.viewport), this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, this.element.addEventListener('keydown', this)), this.emitEvent('activate'), this.selectInitialIndex(), this.isInitActivated = !0, this.dispatchEvent('ready'))
          },
          S._createSlider = function () {
            var t = document.createElement('div');
            t.className = 'flickity-slider',
            t.style[this.originSide] = 0,
            this.slider = t
          },
          S._filterFindCellElements = function (t) {
            return r.filterFindElements(t, this.options.cellSelector)
          },
          S.reloadCells = function () {
            this.cells = this._makeCells(this.slider.children),
            this.positionCells(),
            this._getWrapShiftCells(),
            this.setGallerySize()
          },
          S._makeCells = function (t) {
            return this._filterFindCellElements(t).map((function (t) {
              return new o(t, this)
            }), this)
          },
          S.getLastCell = function () {
            return this.cells[this.cells.length - 1]
          },
          S.getLastSlide = function () {
            return this.slides[this.slides.length - 1]
          },
          S.positionCells = function () {
            this._sizeCells(this.cells),
            this._positionCells(0)
          },
          S._positionCells = function (t) {
            t = t || 0,
            this.maxCellHeight = t && this.maxCellHeight || 0;
            var e = 0;
            if (t > 0) {
              var n = this.cells[t - 1];
              e = n.x + n.size.outerWidth
            }
            for (var r = this.cells.length, i = t; i < r; i++) {
              var o = this.cells[i];
              o.setPosition(e),
              e += o.size.outerWidth,
              this.maxCellHeight = Math.max(o.size.outerHeight, this.maxCellHeight)
            }
            this.slideableWidth = e,
            this.updateSlides(),
            this._containSlides(),
            this.slidesWidth = r ? this.getLastSlide().target - this.slides[0].target : 0
          },
          S._sizeCells = function (t) {
            t.forEach((function (t) {
              t.getSize()
            }))
          },
          S.updateSlides = function () {
            if (this.slides = [
            ], this.cells.length) {
              var t = new c(this);
              this.slides.push(t);
              var e = 'left' == this.originSide ? 'marginRight' : 'marginLeft',
              n = this._getCanCellFit();
              this.cells.forEach((function (r, i) {
                if (t.cells.length) {
                  var o = t.outerWidth - t.firstMargin + (r.size.outerWidth - r.size[e]);
                  n.call(this, i, o) || (t.updateTarget(), t = new c(this), this.slides.push(t)),
                  t.addCell(r)
                } else t.addCell(r)
              }), this),
              t.updateTarget(),
              this.updateSelectedSlide()
            }
          },
          S._getCanCellFit = function () {
            var t = this.options.groupCells;
            if (!t) return function () {
              return !1
            };
            if ('number' == typeof t) {
              var e = parseInt(t, 10);
              return function (i) {
                return i % e != 0
              }
            }
            var n = 'string' == typeof t && t.match(/^(\d+)%$/),
            r = n ? parseInt(n[1], 10) / 100 : 1;
            return function (i, t) {
              return t <= (this.size.innerWidth + 1) * r
            }
          },
          S._init = S.reposition = function () {
            this.positionCells(),
            this.positionSliderAtSelected()
          },
          S.getSize = function () {
            this.size = n(this.element),
            this.setCellAlign(),
            this.cursorPosition = this.size.innerWidth * this.cellAlign
          };
          var x = {
            center: {
              left: 0.5,
              right: 0.5
            },
            left: {
              left: 0,
              right: 1
            },
            right: {
              right: 0,
              left: 1
            }
          };
          S.setCellAlign = function () {
            var t = x[this.options.cellAlign];
            this.cellAlign = t ? t[this.originSide] : this.options.cellAlign
          },
          S.setGallerySize = function () {
            if (this.options.setGallerySize) {
              var t = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
              this.viewport.style.height = t + 'px'
            }
          },
          S._getWrapShiftCells = function () {
            if (this.options.wrapAround) {
              this._unshiftCells(this.beforeShiftCells),
              this._unshiftCells(this.afterShiftCells);
              var t = this.cursorPosition,
              e = this.cells.length - 1;
              this.beforeShiftCells = this._getGapCells(t, e, - 1),
              t = this.size.innerWidth - this.cursorPosition,
              this.afterShiftCells = this._getGapCells(t, 0, 1)
            }
          },
          S._getGapCells = function (t, e, n) {
            for (var r = [
            ]; t > 0; ) {
              var o = this.cells[e];
              if (!o) break;
              r.push(o),
              e += n,
              t -= o.size.outerWidth
            }
            return r
          },
          S._containSlides = function () {
            if (this.options.contain && !this.options.wrapAround && this.cells.length) {
              var t = this.options.rightToLeft,
              e = t ? 'marginRight' : 'marginLeft',
              n = t ? 'marginLeft' : 'marginRight',
              r = this.slideableWidth - this.getLastCell().size[n],
              o = r < this.size.innerWidth,
              c = this.cursorPosition + this.cells[0].size[e],
              l = r - this.size.innerWidth * (1 - this.cellAlign);
              this.slides.forEach((function (t) {
                o ? t.target = r * this.cellAlign : (t.target = Math.max(t.target, c), t.target = Math.min(t.target, l))
              }), this)
            }
          },
          S.dispatchEvent = function (t, e, n) {
            var r = e ? [
              e
            ].concat(n) : n;
            if (this.emitEvent(t, r), d && this.$element) {
              var o = t += this.options.namespaceJQueryEvents ? '.flickity' : '';
              if (e) {
                var c = new d.Event(e);
                c.type = t,
                o = c
              }
              this.$element.trigger(o, n)
            }
          },
          S.select = function (t, e, n) {
            if (this.isActive && (t = parseInt(t, 10), this._wrapSelect(t), (this.options.wrapAround || e) && (t = r.modulo(t, this.slides.length)), this.slides[t])) {
              var o = this.selectedIndex;
              this.selectedIndex = t,
              this.updateSelectedSlide(),
              n ? this.positionSliderAtSelected() : this.startAnimation(),
              this.options.adaptiveHeight && this.setGallerySize(),
              this.dispatchEvent('select', null, [
                t
              ]),
              t != o && this.dispatchEvent('change', null, [
                t
              ]),
              this.dispatchEvent('cellSelect')
            }
          },
          S._wrapSelect = function (t) {
            var e = this.slides.length;
            if (!(this.options.wrapAround && e > 1)) return t;
            var n = r.modulo(t, e),
            o = Math.abs(n - this.selectedIndex),
            c = Math.abs(n + e - this.selectedIndex),
            l = Math.abs(n - e - this.selectedIndex);
            !this.isDragSelect && c < o ? t += e : !this.isDragSelect && l < o && (t -= e),
            t < 0 ? this.x -= this.slideableWidth : t >= e && (this.x += this.slideableWidth)
          },
          S.previous = function (t, e) {
            this.select(this.selectedIndex - 1, t, e)
          },
          S.next = function (t, e) {
            this.select(this.selectedIndex + 1, t, e)
          },
          S.updateSelectedSlide = function () {
            var t = this.slides[this.selectedIndex];
            t && (this.unselectSelectedSlide(), this.selectedSlide = t, t.select(), this.selectedCells = t.cells, this.selectedElements = t.getCellElements(), this.selectedCell = t.cells[0], this.selectedElement = this.selectedElements[0])
          },
          S.unselectSelectedSlide = function () {
            this.selectedSlide && this.selectedSlide.unselect()
          },
          S.selectInitialIndex = function () {
            var t = this.options.initialIndex;
            if (this.isInitActivated) this.select(this.selectedIndex, !1, !0);
             else {
              if (t && 'string' == typeof t) if (this.queryCell(t)) return void this.selectCell(t, !1, !0);
              var e = 0;
              t && this.slides[t] && (e = t),
              this.select(e, !1, !0)
            }
          },
          S.selectCell = function (t, e, n) {
            var r = this.queryCell(t);
            if (r) {
              var o = this.getCellSlideIndex(r);
              this.select(o, e, n)
            }
          },
          S.getCellSlideIndex = function (t) {
            for (var i = 0; i < this.slides.length; i++) {
              if ( - 1 != this.slides[i].cells.indexOf(t)) return i
            }
          },
          S.getCell = function (t) {
            for (var i = 0; i < this.cells.length; i++) {
              var e = this.cells[i];
              if (e.element == t) return e
            }
          },
          S.getCells = function (t) {
            t = r.makeArray(t);
            var e = [
            ];
            return t.forEach((function (t) {
              var n = this.getCell(t);
              n && e.push(n)
            }), this),
            e
          },
          S.getCellElements = function () {
            return this.cells.map((function (t) {
              return t.element
            }))
          },
          S.getParentCell = function (t) {
            var e = this.getCell(t);
            return e || (t = r.getParent(t, '.flickity-slider > *'), this.getCell(t))
          },
          S.getAdjacentCellElements = function (t, e) {
            if (!t) return this.selectedSlide.getCellElements();
            e = void 0 === e ? this.selectedIndex : e;
            var n = this.slides.length;
            if (1 + 2 * t >= n) return this.getCellElements();
            for (var o = [
            ], i = e - t; i <= e + t; i++) {
              var c = this.options.wrapAround ? r.modulo(i, n) : i,
              l = this.slides[c];
              l && (o = o.concat(l.getCellElements()))
            }
            return o
          },
          S.queryCell = function (t) {
            if ('number' == typeof t) return this.cells[t];
            if ('string' == typeof t) {
              if (t.match(/^[#.]?[\d/]/)) return;
              t = this.element.querySelector(t)
            }
            return this.getCell(t)
          },
          S.uiChange = function () {
            this.emitEvent('uiChange')
          },
          S.childUIPointerDown = function (t) {
            'touchstart' != t.type && t.preventDefault(),
            this.focus()
          },
          S.onresize = function () {
            this.watchCSS(),
            this.resize()
          },
          r.debounceMethod(w, 'onresize', 150),
          S.resize = function () {
            if (this.isActive) {
              this.getSize(),
              this.options.wrapAround && (this.x = r.modulo(this.x, this.slideableWidth)),
              this.positionCells(),
              this._getWrapShiftCells(),
              this.setGallerySize(),
              this.emitEvent('resize');
              var t = this.selectedElements && this.selectedElements[0];
              this.selectCell(t, !1, !0)
            }
          },
          S.watchCSS = function () {
            this.options.watchCSS && ( - 1 != h(this.element, ':after').content.indexOf('flickity') ? this.activate() : this.deactivate())
          },
          S.onkeydown = function (t) {
            var e = document.activeElement && document.activeElement != this.element;
            if (this.options.accessibility && !e) {
              var n = w.keyboardHandlers[t.keyCode];
              n && n.call(this)
            }
          },
          w.keyboardHandlers = {
            37: function () {
              var t = this.options.rightToLeft ? 'next' : 'previous';
              this.uiChange(),
              this[t]()
            },
            39: function () {
              var t = this.options.rightToLeft ? 'previous' : 'next';
              this.uiChange(),
              this[t]()
            }
          },
          S.focus = function () {
            var e = t.pageYOffset;
            this.element.focus({
              preventScroll: !0
            }),
            t.pageYOffset != e && t.scrollTo(t.pageXOffset, e)
          },
          S.deactivate = function () {
            this.isActive && (this.element.classList.remove('flickity-enabled'), this.element.classList.remove('flickity-rtl'), this.unselectSelectedSlide(), this.cells.forEach((function (t) {
              t.destroy()
            })), this.element.removeChild(this.viewport), v(this.slider.children, this.element), this.options.accessibility && (this.element.removeAttribute('tabIndex'), this.element.removeEventListener('keydown', this)), this.isActive = !1, this.emitEvent('deactivate'))
          },
          S.destroy = function () {
            this.deactivate(),
            t.removeEventListener('resize', this),
            this.allOff(),
            this.emitEvent('destroy'),
            d && this.$element && d.removeData(this.element, 'flickity'),
            delete this.element.flickityGUID,
            delete y[this.guid]
          },
          r.extend(S, l),
          w.data = function (t) {
            var e = (t = r.getQueryElement(t)) && t.flickityGUID;
            return e && y[e]
          },
          r.htmlInit(w, 'flickity'),
          d && d.bridget && d.bridget('flickity', w);
          return w.setJQuery = function (t) {
            d = t
          },
          w.Cell = o,
          w.Slide = c,
          w
        }(c, t, e, n, r, o, l)
      }.apply(e, r)) || (t.exports = o)
    }(window)
  },
  44: function (t, e, n) {
    var r = n(677),
    o = n(678),
    c = 3600000,
    l = 60000,
    d = /[T ]/,
    h = /:/,
    f = /^(\d{2})$/,
    v = [
      /^([+-]\d{2})$/,
      /^([+-]\d{3})$/,
      /^([+-]\d{4})$/
    ],
    m = /^(\d{4})/,
    y = [
      /^([+-]\d{4})/,
      /^([+-]\d{5})/,
      /^([+-]\d{6})/
    ],
    w = /^-(\d{2})$/,
    S = /^-?(\d{3})$/,
    x = /^-?(\d{2})-?(\d{2})$/,
    E = /^-?W(\d{2})$/,
    _ = /^-?W(\d{2})-?(\d{1})$/,
    C = /^(\d{2}([.,]\d*)?)$/,
    D = /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
    A = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
    k = /([Z+-].*)$/,
    M = /^(Z)$/,
    P = /^([+-])(\d{2})$/,
    T = /^([+-])(\d{2}):?(\d{2})$/;
    function O(t, e, n) {
      e = e || 0,
      n = n || 0;
      var r = new Date(0);
      r.setUTCFullYear(t, 0, 4);
      var o = 7 * e + n + 1 - (r.getUTCDay() || 7);
      return r.setUTCDate(r.getUTCDate() + o),
      r
    }
    t.exports = function (t, e) {
      if (o(t)) return new Date(t.getTime());
      if ('string' != typeof t) return new Date(t);
      var n = (e || {
      }).additionalDigits;
      n = null == n ? 2 : Number(n);
      var j = function (t) {
        var e,
        n = {
        },
        r = t.split(d);
        h.test(r[0]) ? (n.date = null, e = r[0]) : (n.date = r[0], e = r[1]);
        if (e) {
          var o = k.exec(e);
          o ? (n.time = e.replace(o[1], ''), n.timezone = o[1]) : n.time = e
        }
        return n
      }(t),
      I = function (t, e) {
        var n,
        r = v[e],
        o = y[e];
        if (n = m.exec(t) || o.exec(t)) {
          var c = n[1];
          return {
            year: parseInt(c, 10),
            restDateString: t.slice(c.length)
          }
        }
        if (n = f.exec(t) || r.exec(t)) {
          var l = n[1];
          return {
            year: 100 * parseInt(l, 10),
            restDateString: t.slice(l.length)
          }
        }
        return {
          year: null
        }
      }(j.date, n),
      L = I.year,
      z = function (t, e) {
        if (null === e) return null;
        var n,
        r,
        o;
        if (0 === t.length) return (r = new Date(0)).setUTCFullYear(e),
        r;
        if (n = w.exec(t)) return r = new Date(0),
        o = parseInt(n[1], 10) - 1,
        r.setUTCFullYear(e, o),
        r;
        if (n = S.exec(t)) {
          r = new Date(0);
          var c = parseInt(n[1], 10);
          return r.setUTCFullYear(e, 0, c),
          r
        }
        if (n = x.exec(t)) {
          r = new Date(0),
          o = parseInt(n[1], 10) - 1;
          var l = parseInt(n[2], 10);
          return r.setUTCFullYear(e, o, l),
          r
        }
        if (n = E.exec(t)) return O(e, parseInt(n[1], 10) - 1);
        if (n = _.exec(t)) {
          return O(e, parseInt(n[1], 10) - 1, parseInt(n[2], 10) - 1)
        }
        return null
      }(I.restDateString, L);
      if (z) {
        var N,
        B = z.getTime(),
        time = 0;
        if (j.time && (time = function (t) {
          var e,
          n,
          r;
          if (e = C.exec(t)) return (n = parseFloat(e[1].replace(',', '.'))) % 24 * c;
          if (e = D.exec(t)) return n = parseInt(e[1], 10),
          r = parseFloat(e[2].replace(',', '.')),
          n % 24 * c + r * l;
          if (e = A.exec(t)) {
            n = parseInt(e[1], 10),
            r = parseInt(e[2], 10);
            var o = parseFloat(e[3].replace(',', '.'));
            return n % 24 * c + r * l + 1000 * o
          }
          return null
        }(j.time)), j.timezone) N = function (t) {
          var e,
          n;
          if (e = M.exec(t)) return 0;
          if (e = P.exec(t)) return n = 60 * parseInt(e[2], 10),
          '+' === e[1] ? - n : n;
          if (e = T.exec(t)) return n = 60 * parseInt(e[2], 10) + parseInt(e[3], 10),
          '+' === e[1] ? - n : n;
          return 0
        }(j.timezone) * l;
         else {
          var W = B + time,
          $ = new Date(W);
          N = r($);
          var R = new Date(W);
          R.setDate($.getDate() + 1);
          var F = r(R) - r($);
          F > 0 && (N += F)
        }
        return new Date(B + time + N)
      }
      return new Date(t)
    }
  },
  50: function (t, e, n) {
    'use strict';
    var r = {
      name: 'NoSsr',
      functional: !0,
      props: {
        placeholder: String,
        placeholderTag: {
          type: String,
        default:
          'div'
        }
      },
      render: function (t, e) {
        var n = e.parent,
        r = e.slots,
        o = e.props,
        c = r(),
        l = c.default;
        void 0 === l && (l = [
        ]);
        var d = c.placeholder;
        return n._isMounted ? l : (n.$once('hook:mounted', (function () {
          n.$forceUpdate()
        })), o.placeholderTag && (o.placeholder || d) ? t(o.placeholderTag, {
          class : [
            'no-ssr-placeholder'
          ]
        }, o.placeholder || d) : l.length > 0 ? l.map((function () {
          return t(!1)
        })) : t(!1))
      }
    };
    t.exports = r
  },
  664: function (t, e) {
    !function () {
      'use strict';
      if ('undefined' != typeof window) {
        var t = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
        e = t ? parseInt(t[1], 10) : null,
        n = !!e && 16 <= e && e <= 18;
        if ('objectFit' in document.documentElement.style == 0 || n) {
          var r = function (t, e, i) {
            var n,
            r,
            o,
            a,
            c;
            if ((i = i.split(' ')).length < 2 && (i[1] = i[0]), 'x' === t) n = i[0],
            r = i[1],
            o = 'left',
            a = 'right',
            c = e.clientWidth;
             else {
              if ('y' !== t) return;
              n = i[1],
              r = i[0],
              o = 'top',
              a = 'bottom',
              c = e.clientHeight
            }
            if (n !== o && r !== o) {
              if (n !== a && r !== a) return 'center' === n || '50%' === n ? (e.style[o] = '50%', void (e.style['margin-' + o] = c / - 2 + 'px')) : void (0 <= n.indexOf('%') ? (n = parseInt(n, 10)) < 50 ? (e.style[o] = n + '%', e.style['margin-' + o] = c * (n / - 100) + 'px') : (n = 100 - n, e.style[a] = n + '%', e.style['margin-' + a] = c * (n / - 100) + 'px') : e.style[o] = n);
              e.style[a] = '0'
            } else e.style[o] = '0'
          },
          o = function (t) {
            var e = t.dataset ? t.dataset.objectFit : t.getAttribute('data-object-fit'),
            i = t.dataset ? t.dataset.objectPosition : t.getAttribute('data-object-position');
            e = e || 'cover',
            i = i || '50% 50%';
            var n = t.parentNode;
            return function (t) {
              var e = window.getComputedStyle(t, null),
              i = e.getPropertyValue('position'),
              n = e.getPropertyValue('overflow'),
              r = e.getPropertyValue('display');
              i && 'static' !== i || (t.style.position = 'relative'),
              'hidden' !== n && (t.style.overflow = 'hidden'),
              r && 'inline' !== r || (t.style.display = 'block'),
              0 === t.clientHeight && (t.style.height = '100%'),
              - 1 === t.className.indexOf('object-fit-polyfill') && (t.className = t.className + ' object-fit-polyfill')
            }(n),
            function (t) {
              var e = window.getComputedStyle(t, null),
              i = {
                'max-width': 'none',
                'max-height': 'none',
                'min-width': '0px',
                'min-height': '0px',
                top: 'auto',
                right: 'auto',
                bottom: 'auto',
                left: 'auto',
                'margin-top': '0px',
                'margin-right': '0px',
                'margin-bottom': '0px',
                'margin-left': '0px'
              };
              for (var n in i) e.getPropertyValue(n) !== i[n] && (t.style[n] = i[n])
            }(t),
            t.style.position = 'absolute',
            t.style.width = 'auto',
            t.style.height = 'auto',
            'scale-down' === e && (e = t.clientWidth < n.clientWidth && t.clientHeight < n.clientHeight ? 'none' : 'contain'),
            'none' === e ? (r('x', t, i), void r('y', t, i)) : 'fill' === e ? (t.style.width = '100%', t.style.height = '100%', r('x', t, i), void r('y', t, i)) : (t.style.height = '100%', void ('cover' === e && t.clientWidth > n.clientWidth || 'contain' === e && t.clientWidth < n.clientWidth ? (t.style.top = '0', t.style.marginTop = '0', r('x', t, i)) : (t.style.width = '100%', t.style.height = 'auto', t.style.left = '0', t.style.marginLeft = '0', r('y', t, i))))
          },
          i = function (t) {
            if (void 0 === t || t instanceof Event) t = document.querySelectorAll('[data-object-fit]');
             else if (t && t.nodeName) t = [
              t
            ];
             else {
              if ('object' != typeof t || !t.length || !t[0].nodeName) return !1;
              t = t
            }
            for (var e = 0; e < t.length; e++) if (t[e].nodeName) {
              var i = t[e].nodeName.toLowerCase();
              if ('img' === i) {
                if (n) continue;
                t[e].complete ? o(t[e]) : t[e].addEventListener('load', (function () {
                  o(this)
                }))
              } else 'video' === i ? 0 < t[e].readyState ? o(t[e]) : t[e].addEventListener('loadedmetadata', (function () {
                o(this)
              })) : o(t[e])
            }
            return !0
          };
          'loading' === document.readyState ? document.addEventListener('DOMContentLoaded', i) : i(),
          window.addEventListener('resize', i),
          window.objectFitPolyfill = i
        } else window.objectFitPolyfill = function () {
          return !1
        }
      }
    }()
  },
  675: function (t, e, n) {
    var r = n(676),
    o = n(44),
    c = n(679),
    l = n(681),
    d = n(684),
    h = 43200;
    t.exports = function (t, e, n) {
      var f = n || {
      },
      v = r(t, e),
      m = f.locale,
      y = d.distanceInWords.localize;
      m && m.distanceInWords && m.distanceInWords.localize && (y = m.distanceInWords.localize);
      var w,
      S,
      x = {
        addSuffix: Boolean(f.addSuffix),
        comparison: v
      };
      v > 0 ? (w = o(t), S = o(e)) : (w = o(e), S = o(t));
      var E,
      _ = c(S, w),
      C = S.getTimezoneOffset() - w.getTimezoneOffset(),
      D = Math.round(_ / 60) - C;
      if (D < 2) return f.includeSeconds ? _ < 5 ? y('lessThanXSeconds', 5, x) : _ < 10 ? y('lessThanXSeconds', 10, x) : _ < 20 ? y('lessThanXSeconds', 20, x) : _ < 40 ? y('halfAMinute', null, x) : y(_ < 60 ? 'lessThanXMinutes' : 'xMinutes', 1, x) : 0 === D ? y('lessThanXMinutes', 1, x) : y('xMinutes', D, x);
      if (D < 45) return y('xMinutes', D, x);
      if (D < 90) return y('aboutXHours', 1, x);
      if (D < 1440) return y('aboutXHours', Math.round(D / 60), x);
      if (D < 2520) return y('xDays', 1, x);
      if (D < h) return y('xDays', Math.round(D / 1440), x);
      if (D < 86400) return y('aboutXMonths', E = Math.round(D / h), x);
      if ((E = l(S, w)) < 12) return y('xMonths', Math.round(D / h), x);
      var A = E % 12,
      k = Math.floor(E / 12);
      return A < 3 ? y('aboutXYears', k, x) : A < 9 ? y('overXYears', k, x) : y('almostXYears', k + 1, x)
    }
  },
  676: function (t, e, n) {
    var r = n(44);
    t.exports = function (t, e) {
      var n = r(t).getTime(),
      o = r(e).getTime();
      return n > o ? - 1 : n < o ? 1 : 0
    }
  },
  677: function (t, e) {
    t.exports = function (t) {
      var e = new Date(t.getTime()),
      n = e.getTimezoneOffset();
      return e.setSeconds(0, 0),
      60000 * n + e.getTime() % 60000
    }
  },
  678: function (t, e) {
    t.exports = function (t) {
      return t instanceof Date
    }
  },
  679: function (t, e, n) {
    var r = n(680);
    t.exports = function (t, e) {
      var n = r(t, e) / 1000;
      return n > 0 ? Math.floor(n) : Math.ceil(n)
    }
  },
  680: function (t, e, n) {
    var r = n(44);
    t.exports = function (t, e) {
      var n = r(t),
      o = r(e);
      return n.getTime() - o.getTime()
    }
  },
  681: function (t, e, n) {
    var r = n(44),
    o = n(682),
    c = n(683);
    t.exports = function (t, e) {
      var n = r(t),
      l = r(e),
      d = c(n, l),
      h = Math.abs(o(n, l));
      return n.setMonth(n.getMonth() - d * h),
      d * (h - (c(n, l) === - d))
    }
  },
  682: function (t, e, n) {
    var r = n(44);
    t.exports = function (t, e) {
      var n = r(t),
      o = r(e);
      return 12 * (n.getFullYear() - o.getFullYear()) + (n.getMonth() - o.getMonth())
    }
  },
  683: function (t, e, n) {
    var r = n(44);
    t.exports = function (t, e) {
      var n = r(t).getTime(),
      o = r(e).getTime();
      return n < o ? - 1 : n > o ? 1 : 0
    }
  },
  684: function (t, e, n) {
    var r = n(685),
    o = n(686);
    t.exports = {
      distanceInWords: r(),
      format: o()
    }
  },
  685: function (t, e) {
    t.exports = function () {
      var t = {
        lessThanXSeconds: {
          one: 'less than a second',
          other: 'less than {{count}} seconds'
        },
        xSeconds: {
          one: '1 second',
          other: '{{count}} seconds'
        },
        halfAMinute: 'half a minute',
        lessThanXMinutes: {
          one: 'less than a minute',
          other: 'less than {{count}} minutes'
        },
        xMinutes: {
          one: '1 minute',
          other: '{{count}} minutes'
        },
        aboutXHours: {
          one: 'about 1 hour',
          other: 'about {{count}} hours'
        },
        xHours: {
          one: '1 hour',
          other: '{{count}} hours'
        },
        xDays: {
          one: '1 day',
          other: '{{count}} days'
        },
        aboutXMonths: {
          one: 'about 1 month',
          other: 'about {{count}} months'
        },
        xMonths: {
          one: '1 month',
          other: '{{count}} months'
        },
        aboutXYears: {
          one: 'about 1 year',
          other: 'about {{count}} years'
        },
        xYears: {
          one: '1 year',
          other: '{{count}} years'
        },
        overXYears: {
          one: 'over 1 year',
          other: 'over {{count}} years'
        },
        almostXYears: {
          one: 'almost 1 year',
          other: 'almost {{count}} years'
        }
      };
      return {
        localize: function (e, n, r) {
          var o;
          return r = r || {
          },
          o = 'string' == typeof t[e] ? t[e] : 1 === n ? t[e].one : t[e].other.replace('{{count}}', n),
          r.addSuffix ? r.comparison > 0 ? 'in ' + o : o + ' ago' : o
        }
      }
    }
  },
  686: function (t, e, n) {
    var r = n(298);
    t.exports = function () {
      var t = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ],
      e = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      n = [
        'Su',
        'Mo',
        'Tu',
        'We',
        'Th',
        'Fr',
        'Sa'
      ],
      o = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
      ],
      c = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      l = [
        'AM',
        'PM'
      ],
      d = [
        'am',
        'pm'
      ],
      h = [
        'a.m.',
        'p.m.'
      ],
      f = {
        MMM: function (e) {
          return t[e.getMonth()]
        },
        MMMM: function (t) {
          return e[t.getMonth()]
        },
        dd: function (t) {
          return n[t.getDay()]
        },
        ddd: function (t) {
          return o[t.getDay()]
        },
        dddd: function (t) {
          return c[t.getDay()]
        },
        A: function (t) {
          return t.getHours() / 12 >= 1 ? l[1] : l[0]
        },
        a: function (t) {
          return t.getHours() / 12 >= 1 ? d[1] : d[0]
        },
        aa: function (t) {
          return t.getHours() / 12 >= 1 ? h[1] : h[0]
        }
      };
      return ['M',
      'D',
      'DDD',
      'd',
      'Q',
      'W'].forEach((function (t) {
        f[t + 'o'] = function (e, n) {
          return function (t) {
            var e = t % 100;
            if (e > 20 || e < 10) switch (e % 10) {
              case 1:
                return t + 'st';
              case 2:
                return t + 'nd';
              case 3:
                return t + 'rd'
            }
            return t + 'th'
          }(n[t](e))
        }
      })),
      {
        formatters: f,
        formattingTokensRegExp: r(f)
      }
    }
  },
  687: function (t, e, n) {
    var r = n(688),
    o = n(689);
    t.exports = {
      distanceInWords: r(),
      format: o()
    }
  },
  688: function (t, e) {
    t.exports = function () {
      var t = {
        lessThanXSeconds: {
          standalone: {
            one: 'weniger als eine Sekunde',
            other: 'weniger als {{count}} Sekunden'
          },
          withPreposition: {
            one: 'weniger als einer Sekunde',
            other: 'weniger als {{count}} Sekunden'
          }
        },
        xSeconds: {
          standalone: {
            one: 'eine Sekunde',
            other: '{{count}} Sekunden'
          },
          withPreposition: {
            one: 'einer Sekunde',
            other: '{{count}} Sekunden'
          }
        },
        halfAMinute: {
          standalone: 'eine halbe Minute',
          withPreposition: 'einer halben Minute'
        },
        lessThanXMinutes: {
          standalone: {
            one: 'weniger als eine Minute',
            other: 'weniger als {{count}} Minuten'
          },
          withPreposition: {
            one: 'weniger als einer Minute',
            other: 'weniger als {{count}} Minuten'
          }
        },
        xMinutes: {
          standalone: {
            one: 'eine Minute',
            other: '{{count}} Minuten'
          },
          withPreposition: {
            one: 'einer Minute',
            other: '{{count}} Minuten'
          }
        },
        aboutXHours: {
          standalone: {
            one: 'etwa eine Stunde',
            other: 'etwa {{count}} Stunden'
          },
          withPreposition: {
            one: 'etwa einer Stunde',
            other: 'etwa {{count}} Stunden'
          }
        },
        xHours: {
          standalone: {
            one: 'eine Stunde',
            other: '{{count}} Stunden'
          },
          withPreposition: {
            one: 'einer Stunde',
            other: '{{count}} Stunden'
          }
        },
        xDays: {
          standalone: {
            one: 'ein Tag',
            other: '{{count}} Tage'
          },
          withPreposition: {
            one: 'einem Tag',
            other: '{{count}} Tagen'
          }
        },
        aboutXMonths: {
          standalone: {
            one: 'etwa ein Monat',
            other: 'etwa {{count}} Monate'
          },
          withPreposition: {
            one: 'etwa einem Monat',
            other: 'etwa {{count}} Monaten'
          }
        },
        xMonths: {
          standalone: {
            one: 'ein Monat',
            other: '{{count}} Monate'
          },
          withPreposition: {
            one: 'einem Monat',
            other: '{{count}} Monaten'
          }
        },
        aboutXYears: {
          standalone: {
            one: 'etwa ein Jahr',
            other: 'etwa {{count}} Jahre'
          },
          withPreposition: {
            one: 'etwa einem Jahr',
            other: 'etwa {{count}} Jahren'
          }
        },
        xYears: {
          standalone: {
            one: 'ein Jahr',
            other: '{{count}} Jahre'
          },
          withPreposition: {
            one: 'einem Jahr',
            other: '{{count}} Jahren'
          }
        },
        overXYears: {
          standalone: {
            one: 'mehr als ein Jahr',
            other: 'mehr als {{count}} Jahre'
          },
          withPreposition: {
            one: 'mehr als einem Jahr',
            other: 'mehr als {{count}} Jahren'
          }
        },
        almostXYears: {
          standalone: {
            one: 'fast ein Jahr',
            other: 'fast {{count}} Jahre'
          },
          withPreposition: {
            one: 'fast einem Jahr',
            other: 'fast {{count}} Jahren'
          }
        }
      };
      return {
        localize: function (e, n, r) {
          var o,
          c = (r = r || {
          }).addSuffix ? t[e].withPreposition : t[e].standalone;
          return o = 'string' == typeof c ? c : 1 === n ? c.one : c.other.replace('{{count}}', n),
          r.addSuffix ? r.comparison > 0 ? 'in ' + o : 'vor ' + o : o
        }
      }
    }
  },
  689: function (t, e, n) {
    var r = n(298);
    t.exports = function () {
      var t = [
        'Jan',
        'Feb',
        'Mär',
        'Apr',
        'Mai',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Okt',
        'Nov',
        'Dez'
      ],
      e = [
        'Januar',
        'Februar',
        'März',
        'April',
        'Mai',
        'Juni',
        'Juli',
        'August',
        'September',
        'Oktober',
        'November',
        'Dezember'
      ],
      n = [
        'So',
        'Mo',
        'Di',
        'Mi',
        'Do',
        'Fr',
        'Sa'
      ],
      o = [
        'Son',
        'Mon',
        'Die',
        'Mit',
        'Don',
        'Fre',
        'Sam'
      ],
      c = [
        'Sonntag',
        'Montag',
        'Dienstag',
        'Mittwoch',
        'Donnerstag',
        'Freitag',
        'Samstag'
      ],
      l = [
        'AM',
        'PM'
      ],
      d = [
        'am',
        'pm'
      ],
      h = [
        'a.m.',
        'p.m.'
      ],
      f = {
        MMM: function (e) {
          return t[e.getMonth()]
        },
        MMMM: function (t) {
          return e[t.getMonth()]
        },
        dd: function (t) {
          return n[t.getDay()]
        },
        ddd: function (t) {
          return o[t.getDay()]
        },
        dddd: function (t) {
          return c[t.getDay()]
        },
        A: function (t) {
          return t.getHours() / 12 >= 1 ? l[1] : l[0]
        },
        a: function (t) {
          return t.getHours() / 12 >= 1 ? d[1] : d[0]
        },
        aa: function (t) {
          return t.getHours() / 12 >= 1 ? h[1] : h[0]
        }
      };
      return ['M',
      'D',
      'DDD',
      'd',
      'Q',
      'W'].forEach((function (t) {
        f[t + 'o'] = function (e, n) {
          return n[t](e) + '.'
        }
      })),
      {
        formatters: f,
        formattingTokensRegExp: r(f)
      }
    }
  },
  690: function (t, e, n) {
    var r,
    o,
    c,
    l,
    d;
    r = n(691),
    o = n(299).utf8,
    c = n(692),
    l = n(299).bin,
    (d = function (t, e) {
      t.constructor == String ? t = e && 'binary' === e.encoding ? l.stringToBytes(t) : o.stringToBytes(t) : c(t) ? t = Array.prototype.slice.call(t, 0) : Array.isArray(t) || t.constructor === Uint8Array || (t = t.toString());
      for (var n = r.bytesToWords(t), h = 8 * t.length, a = 1732584193, b = - 271733879, f = - 1732584194, v = 271733878, i = 0; i < n.length; i++) n[i] = 16711935 & (n[i] << 8 | n[i] >>> 24) | 4278255360 & (n[i] << 24 | n[i] >>> 8);
      n[h >>> 5] |= 128 << h % 32,
      n[14 + (h + 64 >>> 9 << 4)] = h;
      var m = d._ff,
      y = d._gg,
      w = d._hh,
      S = d._ii;
      for (i = 0; i < n.length; i += 16) {
        var x = a,
        E = b,
        _ = f,
        dd = v;
        a = m(a, b, f, v, n[i + 0], 7, - 680876936),
        v = m(v, a, b, f, n[i + 1], 12, - 389564586),
        f = m(f, v, a, b, n[i + 2], 17, 606105819),
        b = m(b, f, v, a, n[i + 3], 22, - 1044525330),
        a = m(a, b, f, v, n[i + 4], 7, - 176418897),
        v = m(v, a, b, f, n[i + 5], 12, 1200080426),
        f = m(f, v, a, b, n[i + 6], 17, - 1473231341),
        b = m(b, f, v, a, n[i + 7], 22, - 45705983),
        a = m(a, b, f, v, n[i + 8], 7, 1770035416),
        v = m(v, a, b, f, n[i + 9], 12, - 1958414417),
        f = m(f, v, a, b, n[i + 10], 17, - 42063),
        b = m(b, f, v, a, n[i + 11], 22, - 1990404162),
        a = m(a, b, f, v, n[i + 12], 7, 1804603682),
        v = m(v, a, b, f, n[i + 13], 12, - 40341101),
        f = m(f, v, a, b, n[i + 14], 17, - 1502002290),
        a = y(a, b = m(b, f, v, a, n[i + 15], 22, 1236535329), f, v, n[i + 1], 5, - 165796510),
        v = y(v, a, b, f, n[i + 6], 9, - 1069501632),
        f = y(f, v, a, b, n[i + 11], 14, 643717713),
        b = y(b, f, v, a, n[i + 0], 20, - 373897302),
        a = y(a, b, f, v, n[i + 5], 5, - 701558691),
        v = y(v, a, b, f, n[i + 10], 9, 38016083),
        f = y(f, v, a, b, n[i + 15], 14, - 660478335),
        b = y(b, f, v, a, n[i + 4], 20, - 405537848),
        a = y(a, b, f, v, n[i + 9], 5, 568446438),
        v = y(v, a, b, f, n[i + 14], 9, - 1019803690),
        f = y(f, v, a, b, n[i + 3], 14, - 187363961),
        b = y(b, f, v, a, n[i + 8], 20, 1163531501),
        a = y(a, b, f, v, n[i + 13], 5, - 1444681467),
        v = y(v, a, b, f, n[i + 2], 9, - 51403784),
        f = y(f, v, a, b, n[i + 7], 14, 1735328473),
        a = w(a, b = y(b, f, v, a, n[i + 12], 20, - 1926607734), f, v, n[i + 5], 4, - 378558),
        v = w(v, a, b, f, n[i + 8], 11, - 2022574463),
        f = w(f, v, a, b, n[i + 11], 16, 1839030562),
        b = w(b, f, v, a, n[i + 14], 23, - 35309556),
        a = w(a, b, f, v, n[i + 1], 4, - 1530992060),
        v = w(v, a, b, f, n[i + 4], 11, 1272893353),
        f = w(f, v, a, b, n[i + 7], 16, - 155497632),
        b = w(b, f, v, a, n[i + 10], 23, - 1094730640),
        a = w(a, b, f, v, n[i + 13], 4, 681279174),
        v = w(v, a, b, f, n[i + 0], 11, - 358537222),
        f = w(f, v, a, b, n[i + 3], 16, - 722521979),
        b = w(b, f, v, a, n[i + 6], 23, 76029189),
        a = w(a, b, f, v, n[i + 9], 4, - 640364487),
        v = w(v, a, b, f, n[i + 12], 11, - 421815835),
        f = w(f, v, a, b, n[i + 15], 16, 530742520),
        a = S(a, b = w(b, f, v, a, n[i + 2], 23, - 995338651), f, v, n[i + 0], 6, - 198630844),
        v = S(v, a, b, f, n[i + 7], 10, 1126891415),
        f = S(f, v, a, b, n[i + 14], 15, - 1416354905),
        b = S(b, f, v, a, n[i + 5], 21, - 57434055),
        a = S(a, b, f, v, n[i + 12], 6, 1700485571),
        v = S(v, a, b, f, n[i + 3], 10, - 1894986606),
        f = S(f, v, a, b, n[i + 10], 15, - 1051523),
        b = S(b, f, v, a, n[i + 1], 21, - 2054922799),
        a = S(a, b, f, v, n[i + 8], 6, 1873313359),
        v = S(v, a, b, f, n[i + 15], 10, - 30611744),
        f = S(f, v, a, b, n[i + 6], 15, - 1560198380),
        b = S(b, f, v, a, n[i + 13], 21, 1309151649),
        a = S(a, b, f, v, n[i + 4], 6, - 145523070),
        v = S(v, a, b, f, n[i + 11], 10, - 1120210379),
        f = S(f, v, a, b, n[i + 2], 15, 718787259),
        b = S(b, f, v, a, n[i + 9], 21, - 343485551),
        a = a + x >>> 0,
        b = b + E >>> 0,
        f = f + _ >>> 0,
        v = v + dd >>> 0
      }
      return r.endian([a,
      b,
      f,
      v])
    })._ff = function (a, b, t, e, n, s, r) {
      var o = a + (b & t | ~b & e) + (n >>> 0) + r;
      return (o << s | o >>> 32 - s) + b
    },
    d._gg = function (a, b, t, e, n, s, r) {
      var o = a + (b & e | t & ~e) + (n >>> 0) + r;
      return (o << s | o >>> 32 - s) + b
    },
    d._hh = function (a, b, t, e, n, s, r) {
      var o = a + (b ^ t ^ e) + (n >>> 0) + r;
      return (o << s | o >>> 32 - s) + b
    },
    d._ii = function (a, b, t, e, n, s, r) {
      var o = a + (t ^ (b | ~e)) + (n >>> 0) + r;
      return (o << s | o >>> 32 - s) + b
    },
    d._blocksize = 16,
    d._digestsize = 16,
    t.exports = function (t, e) {
      if (null == t) throw new Error('Illegal argument ' + t);
      var n = r.wordsToBytes(d(t, e));
      return e && e.asBytes ? n : e && e.asString ? l.bytesToString(n) : r.bytesToHex(n)
    }
  },
  691: function (t, e) {
    var n,
    r;
    n = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
    r = {
      rotl: function (t, b) {
        return t << b | t >>> 32 - b
      },
      rotr: function (t, b) {
        return t << 32 - b | t >>> b
      },
      endian: function (t) {
        if (t.constructor == Number) return 16711935 & r.rotl(t, 8) | 4278255360 & r.rotl(t, 24);
        for (var i = 0; i < t.length; i++) t[i] = r.endian(t[i]);
        return t
      },
      randomBytes: function (t) {
        for (var e = [
        ]; t > 0; t--) e.push(Math.floor(256 * Math.random()));
        return e
      },
      bytesToWords: function (t) {
        for (var e = [
        ], i = 0, b = 0; i < t.length; i++, b += 8) e[b >>> 5] |= t[i] << 24 - b % 32;
        return e
      },
      wordsToBytes: function (t) {
        for (var e = [
        ], b = 0; b < 32 * t.length; b += 8) e.push(t[b >>> 5] >>> 24 - b % 32 & 255);
        return e
      },
      bytesToHex: function (t) {
        for (var e = [
        ], i = 0; i < t.length; i++) e.push((t[i] >>> 4).toString(16)),
        e.push((15 & t[i]).toString(16));
        return e.join('')
      },
      hexToBytes: function (t) {
        for (var e = [
        ], n = 0; n < t.length; n += 2) e.push(parseInt(t.substr(n, 2), 16));
        return e
      },
      bytesToBase64: function (t) {
        for (var e = [
        ], i = 0; i < t.length; i += 3) for (var r = t[i] << 16 | t[i + 1] << 8 | t[i + 2], o = 0; o < 4; o++) 8 * i + 6 * o <= 8 * t.length ? e.push(n.charAt(r >>> 6 * (3 - o) & 63)) : e.push('=');
        return e.join('')
      },
      base64ToBytes: function (t) {
        t = t.replace(/[^A-Z0-9+\/]/gi, '');
        for (var e = [
        ], i = 0, r = 0; i < t.length; r = ++i % 4) 0 != r && e.push((n.indexOf(t.charAt(i - 1)) & Math.pow(2, - 2 * r + 8) - 1) << 2 * r | n.indexOf(t.charAt(i)) >>> 6 - 2 * r);
        return e
      }
    },
    t.exports = r
  },
  711: function (t, e, n) {
    var r,
    o;
    !function (c, l) {
      'use strict';
      void 0 === (o = 'function' == typeof (r = l) ? r.call(e, n, e, t) : r) || (t.exports = o)
    }(window, (function () {
      'use strict';
      var t = function () {
        var t = window.Element.prototype;
        if (t.matches) return 'matches';
        if (t.matchesSelector) return 'matchesSelector';
        for (var e = [
          'webkit',
          'moz',
          'ms',
          'o'
        ], i = 0; i < e.length; i++) {
          var n = e[i] + 'MatchesSelector';
          if (t[n]) return n
        }
      }();
      return function (e, n) {
        return e[t](n)
      }
    }))
  },
  712: function (t, e, n) {
    var r,
    o;
    window,
    r = [
      n(300)
    ],
    void 0 === (o = function (t) {
      return function (t, e) {
        'use strict';
        function n(t, e) {
          this.element = t,
          this.parent = e,
          this.create()
        }
        var r = n.prototype;
        return r.create = function () {
          this.element.style.position = 'absolute',
          this.element.setAttribute('aria-hidden', 'true'),
          this.x = 0,
          this.shift = 0
        },
        r.destroy = function () {
          this.unselect(),
          this.element.style.position = '';
          var t = this.parent.originSide;
          this.element.style[t] = '',
          this.element.removeAttribute('aria-hidden')
        },
        r.getSize = function () {
          this.size = e(this.element)
        },
        r.setPosition = function (t) {
          this.x = t,
          this.updateTarget(),
          this.renderPosition(t)
        },
        r.updateTarget = r.setDefaultTarget = function () {
          var t = 'left' == this.parent.originSide ? 'marginLeft' : 'marginRight';
          this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign
        },
        r.renderPosition = function (t) {
          var e = this.parent.originSide;
          this.element.style[e] = this.parent.getPositionValue(t)
        },
        r.select = function () {
          this.element.classList.add('is-selected'),
          this.element.removeAttribute('aria-hidden')
        },
        r.unselect = function () {
          this.element.classList.remove('is-selected'),
          this.element.setAttribute('aria-hidden', 'true')
        },
        r.wrapShift = function (t) {
          this.shift = t,
          this.renderPosition(this.x + this.parent.slideableWidth * t)
        },
        r.remove = function () {
          this.element.parentNode.removeChild(this.element)
        },
        n
      }(0, t)
    }.apply(e, r)) || (t.exports = o)
  },
  713: function (t, e, n) {
    var r,
    o;
    window,
    void 0 === (o = 'function' == typeof (r = function () {
      'use strict';
      function t(t) {
        this.parent = t,
        this.isOriginLeft = 'left' == t.originSide,
        this.cells = [
        ],
        this.outerWidth = 0,
        this.height = 0
      }
      var e = t.prototype;
      return e.addCell = function (t) {
        if (this.cells.push(t), this.outerWidth += t.size.outerWidth, this.height = Math.max(t.size.outerHeight, this.height), 1 == this.cells.length) {
          this.x = t.x;
          var e = this.isOriginLeft ? 'marginLeft' : 'marginRight';
          this.firstMargin = t.size[e]
        }
      },
      e.updateTarget = function () {
        var t = this.isOriginLeft ? 'marginRight' : 'marginLeft',
        e = this.getLastCell(),
        n = e ? e.size[t] : 0,
        r = this.outerWidth - (this.firstMargin + n);
        this.target = this.x + this.firstMargin + r * this.parent.cellAlign
      },
      e.getLastCell = function () {
        return this.cells[this.cells.length - 1]
      },
      e.select = function () {
        this.cells.forEach((function (t) {
          t.select()
        }))
      },
      e.unselect = function () {
        this.cells.forEach((function (t) {
          t.unselect()
        }))
      },
      e.getCellElements = function () {
        return this.cells.map((function (t) {
          return t.element
        }))
      },
      t
    }) ? r.call(e, n, e, t) : r) || (t.exports = o)
  },
  714: function (t, e, n) {
    var r,
    o;
    window,
    r = [
      n(33)
    ],
    void 0 === (o = function (t) {
      return function (t, e) {
        'use strict';
        var n = {
          startAnimation: function () {
            this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate())
          },
          animate: function () {
            this.applyDragForce(),
            this.applySelectedAttraction();
            var t = this.x;
            if (this.integratePhysics(), this.positionSlider(), this.settle(t), this.isAnimating) {
              var e = this;
              requestAnimationFrame((function () {
                e.animate()
              }))
            }
          },
          positionSlider: function () {
            var t = this.x;
            this.options.wrapAround && this.cells.length > 1 && (t = e.modulo(t, this.slideableWidth), t -= this.slideableWidth, this.shiftWrapCells(t)),
            this.setTranslateX(t, this.isAnimating),
            this.dispatchScrollEvent()
          },
          setTranslateX: function (t, e) {
            t += this.cursorPosition,
            t = this.options.rightToLeft ? - t : t;
            var n = this.getPositionValue(t);
            this.slider.style.transform = e ? 'translate3d(' + n + ',0,0)' : 'translateX(' + n + ')'
          },
          dispatchScrollEvent: function () {
            var t = this.slides[0];
            if (t) {
              var e = - this.x - t.target,
              progress = e / this.slidesWidth;
              this.dispatchEvent('scroll', null, [
                progress,
                e
              ])
            }
          },
          positionSliderAtSelected: function () {
            this.cells.length && (this.x = - this.selectedSlide.target, this.velocity = 0, this.positionSlider())
          },
          getPositionValue: function (t) {
            return this.options.percentPosition ? 0.01 * Math.round(t / this.size.innerWidth * 10000) + '%' : Math.round(t) + 'px'
          },
          settle: function (t) {
            !this.isPointerDown && Math.round(100 * this.x) == Math.round(100 * t) && this.restingFrames++,
            this.restingFrames > 2 && (this.isAnimating = !1, delete this.isFreeScrolling, this.positionSlider(), this.dispatchEvent('settle', null, [
              this.selectedIndex
            ]))
          },
          shiftWrapCells: function (t) {
            var e = this.cursorPosition + t;
            this._shiftCells(this.beforeShiftCells, e, - 1);
            var n = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
            this._shiftCells(this.afterShiftCells, n, 1)
          },
          _shiftCells: function (t, e, n) {
            for (var i = 0; i < t.length; i++) {
              var r = t[i],
              o = e > 0 ? n : 0;
              r.wrapShift(o),
              e -= r.size.outerWidth
            }
          },
          _unshiftCells: function (t) {
            if (t && t.length) for (var i = 0; i < t.length; i++) t[i].wrapShift(0)
          },
          integratePhysics: function () {
            this.x += this.velocity,
            this.velocity *= this.getFrictionFactor()
          },
          applyForce: function (t) {
            this.velocity += t
          },
          getFrictionFactor: function () {
            return 1 - this.options[this.isFreeScrolling ? 'freeScrollFriction' : 'friction']
          },
          getRestingPosition: function () {
            return this.x + this.velocity / (1 - this.getFrictionFactor())
          },
          applyDragForce: function () {
            if (this.isDraggable && this.isPointerDown) {
              var t = this.dragX - this.x - this.velocity;
              this.applyForce(t)
            }
          },
          applySelectedAttraction: function () {
            if ((!this.isDraggable || !this.isPointerDown) && !this.isFreeScrolling && this.slides.length) {
              var t = ( - 1 * this.selectedSlide.target - this.x) * this.options.selectedAttraction;
              this.applyForce(t)
            }
          }
        };
        return n
      }(0, t)
    }.apply(e, r)) || (t.exports = o)
  },
  715: function (t, e, n) {
    var r,
    o;
    !function (c, l) {
      r = [
        n(37),
        n(716),
        n(33)
      ],
      void 0 === (o = function (t, e, n) {
        return function (t, e, n, r) {
          'use strict';
          r.extend(e.defaults, {
            draggable: '>1',
            dragThreshold: 3
          }),
          e.createMethods.push('_createDrag');
          var o = e.prototype;
          r.extend(o, n.prototype),
          o._touchActionValue = 'pan-y';
          var c = 'createTouch' in document,
          l = !1;
          o._createDrag = function () {
            this.on('activate', this.onActivateDrag),
            this.on('uiChange', this._uiChangeDrag),
            this.on('deactivate', this.onDeactivateDrag),
            this.on('cellChange', this.updateDraggable),
            c && !l && (t.addEventListener('touchmove', (function () {
            })), l = !0)
          },
          o.onActivateDrag = function () {
            this.handles = [
              this.viewport
            ],
            this.bindHandles(),
            this.updateDraggable()
          },
          o.onDeactivateDrag = function () {
            this.unbindHandles(),
            this.element.classList.remove('is-draggable')
          },
          o.updateDraggable = function () {
            '>1' == this.options.draggable ? this.isDraggable = this.slides.length > 1 : this.isDraggable = this.options.draggable,
            this.isDraggable ? this.element.classList.add('is-draggable') : this.element.classList.remove('is-draggable')
          },
          o.bindDrag = function () {
            this.options.draggable = !0,
            this.updateDraggable()
          },
          o.unbindDrag = function () {
            this.options.draggable = !1,
            this.updateDraggable()
          },
          o._uiChangeDrag = function () {
            delete this.isFreeScrolling
          },
          o.pointerDown = function (e, n) {
            this.isDraggable ? this.okayPointerDown(e) && (this._pointerDownPreventDefault(e), this.pointerDownFocus(e), document.activeElement != this.element && this.pointerDownBlur(), this.dragX = this.x, this.viewport.classList.add('is-pointer-down'), this.pointerDownScroll = h(), t.addEventListener('scroll', this), this._pointerDownDefault(e, n)) : this._pointerDownDefault(e, n)
          },
          o._pointerDownDefault = function (t, e) {
            this.pointerDownPointer = {
              pageX: e.pageX,
              pageY: e.pageY
            },
            this._bindPostStartEvents(t),
            this.dispatchEvent('pointerDown', t, [
              e
            ])
          };
          var d = {
            INPUT: !0,
            TEXTAREA: !0,
            SELECT: !0
          };
          function h() {
            return {
              x: t.pageXOffset,
              y: t.pageYOffset
            }
          }
          return o.pointerDownFocus = function (t) {
            d[t.target.nodeName] || this.focus()
          },
          o._pointerDownPreventDefault = function (t) {
            var e = 'touchstart' == t.type,
            n = 'touch' == t.pointerType,
            r = d[t.target.nodeName];
            e || n || r || t.preventDefault()
          },
          o.hasDragStarted = function (t) {
            return Math.abs(t.x) > this.options.dragThreshold
          },
          o.pointerUp = function (t, e) {
            delete this.isTouchScrolling,
            this.viewport.classList.remove('is-pointer-down'),
            this.dispatchEvent('pointerUp', t, [
              e
            ]),
            this._dragPointerUp(t, e)
          },
          o.pointerDone = function () {
            t.removeEventListener('scroll', this),
            delete this.pointerDownScroll
          },
          o.dragStart = function (e, n) {
            this.isDraggable && (this.dragStartPosition = this.x, this.startAnimation(), t.removeEventListener('scroll', this), this.dispatchEvent('dragStart', e, [
              n
            ]))
          },
          o.pointerMove = function (t, e) {
            var n = this._dragPointerMove(t, e);
            this.dispatchEvent('pointerMove', t, [
              e,
              n
            ]),
            this._dragMove(t, e, n)
          },
          o.dragMove = function (t, e, n) {
            if (this.isDraggable) {
              t.preventDefault(),
              this.previousDragX = this.dragX;
              var r = this.options.rightToLeft ? - 1 : 1;
              this.options.wrapAround && (n.x %= this.slideableWidth);
              var o = this.dragStartPosition + n.x * r;
              if (!this.options.wrapAround && this.slides.length) {
                var c = Math.max( - this.slides[0].target, this.dragStartPosition);
                o = o > c ? 0.5 * (o + c) : o;
                var l = Math.min( - this.getLastSlide().target, this.dragStartPosition);
                o = o < l ? 0.5 * (o + l) : o
              }
              this.dragX = o,
              this.dragMoveTime = new Date,
              this.dispatchEvent('dragMove', t, [
                e,
                n
              ])
            }
          },
          o.dragEnd = function (t, e) {
            if (this.isDraggable) {
              this.options.freeScroll && (this.isFreeScrolling = !0);
              var n = this.dragEndRestingSelect();
              if (this.options.freeScroll && !this.options.wrapAround) {
                var r = this.getRestingPosition();
                this.isFreeScrolling = - r > this.slides[0].target && - r < this.getLastSlide().target
              } else this.options.freeScroll || n != this.selectedIndex || (n += this.dragEndBoostSelect());
              delete this.previousDragX,
              this.isDragSelect = this.options.wrapAround,
              this.select(n),
              delete this.isDragSelect,
              this.dispatchEvent('dragEnd', t, [
                e
              ])
            }
          },
          o.dragEndRestingSelect = function () {
            var t = this.getRestingPosition(),
            e = Math.abs(this.getSlideDistance( - t, this.selectedIndex)),
            n = this._getClosestResting(t, e, 1),
            r = this._getClosestResting(t, e, - 1);
            return n.distance < r.distance ? n.index : r.index
          },
          o._getClosestResting = function (t, e, n) {
            for (var r = this.selectedIndex, o = 1 / 0, c = this.options.contain && !this.options.wrapAround ? function (t, e) {
              return t <= e
            }
             : function (t, e) {
              return t < e
            }; c(e, o) && (r += n, o = e, null !== (e = this.getSlideDistance( - t, r))); ) e = Math.abs(e);
            return {
              distance: o,
              index: r - n
            }
          },
          o.getSlideDistance = function (t, e) {
            var n = this.slides.length,
            o = this.options.wrapAround && n > 1,
            c = o ? r.modulo(e, n) : e,
            l = this.slides[c];
            if (!l) return null;
            var d = o ? this.slideableWidth * Math.floor(e / n) : 0;
            return t - (l.target + d)
          },
          o.dragEndBoostSelect = function () {
            if (void 0 === this.previousDragX || !this.dragMoveTime || new Date - this.dragMoveTime > 100) return 0;
            var t = this.getSlideDistance( - this.dragX, this.selectedIndex),
            e = this.previousDragX - this.dragX;
            return t > 0 && e > 0 ? 1 : t < 0 && e < 0 ? - 1 : 0
          },
          o.staticClick = function (t, e) {
            var n = this.getParentCell(t.target),
            r = n && n.element,
            o = n && this.cells.indexOf(n);
            this.dispatchEvent('staticClick', t, [
              e,
              r,
              o
            ])
          },
          o.onscroll = function () {
            var t = h(),
            e = this.pointerDownScroll.x - t.x,
            n = this.pointerDownScroll.y - t.y;
            (Math.abs(e) > 3 || Math.abs(n) > 3) && this._pointerDone()
          },
          e
        }(c, t, e, n)
      }.apply(e, r)) || (t.exports = o)
    }(window)
  },
  716: function (t, e, n) {
    var r,
    o;
    !function (c, l) {
      r = [
        n(252)
      ],
      void 0 === (o = function (t) {
        return function (t, e) {
          'use strict';
          function n() {
          }
          var r = n.prototype = Object.create(e.prototype);
          r.bindHandles = function () {
            this._bindHandles(!0)
          },
          r.unbindHandles = function () {
            this._bindHandles(!1)
          },
          r._bindHandles = function (e) {
            for (var n = (e = void 0 === e || e) ? 'addEventListener' : 'removeEventListener', r = e ? this._touchActionValue : '', i = 0; i < this.handles.length; i++) {
              var o = this.handles[i];
              this._bindStartEvent(o, e),
              o[n]('click', this),
              t.PointerEvent && (o.style.touchAction = r)
            }
          },
          r._touchActionValue = 'none',
          r.pointerDown = function (t, e) {
            this.okayPointerDown(t) && (this.pointerDownPointer = {
              pageX: e.pageX,
              pageY: e.pageY
            }, t.preventDefault(), this.pointerDownBlur(), this._bindPostStartEvents(t), this.emitEvent('pointerDown', [
              t,
              e
            ]))
          };
          var o = {
            TEXTAREA: !0,
            INPUT: !0,
            SELECT: !0,
            OPTION: !0
          },
          c = {
            radio: !0,
            checkbox: !0,
            button: !0,
            submit: !0,
            image: !0,
            file: !0
          };
          return r.okayPointerDown = function (t) {
            var e = o[t.target.nodeName],
            n = c[t.target.type],
            r = !e || n;
            return r || this._pointerReset(),
            r
          },
          r.pointerDownBlur = function () {
            var t = document.activeElement;
            t && t.blur && t != document.body && t.blur()
          },
          r.pointerMove = function (t, e) {
            var n = this._dragPointerMove(t, e);
            this.emitEvent('pointerMove', [
              t,
              e,
              n
            ]),
            this._dragMove(t, e, n)
          },
          r._dragPointerMove = function (t, e) {
            var n = {
              x: e.pageX - this.pointerDownPointer.pageX,
              y: e.pageY - this.pointerDownPointer.pageY
            };
            return !this.isDragging && this.hasDragStarted(n) && this._dragStart(t, e),
            n
          },
          r.hasDragStarted = function (t) {
            return Math.abs(t.x) > 3 || Math.abs(t.y) > 3
          },
          r.pointerUp = function (t, e) {
            this.emitEvent('pointerUp', [
              t,
              e
            ]),
            this._dragPointerUp(t, e)
          },
          r._dragPointerUp = function (t, e) {
            this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e)
          },
          r._dragStart = function (t, e) {
            this.isDragging = !0,
            this.isPreventingClicks = !0,
            this.dragStart(t, e)
          },
          r.dragStart = function (t, e) {
            this.emitEvent('dragStart', [
              t,
              e
            ])
          },
          r._dragMove = function (t, e, n) {
            this.isDragging && this.dragMove(t, e, n)
          },
          r.dragMove = function (t, e, n) {
            t.preventDefault(),
            this.emitEvent('dragMove', [
              t,
              e,
              n
            ])
          },
          r._dragEnd = function (t, e) {
            this.isDragging = !1,
            setTimeout(function () {
              delete this.isPreventingClicks
            }.bind(this)),
            this.dragEnd(t, e)
          },
          r.dragEnd = function (t, e) {
            this.emitEvent('dragEnd', [
              t,
              e
            ])
          },
          r.onclick = function (t) {
            this.isPreventingClicks && t.preventDefault()
          },
          r._staticClick = function (t, e) {
            this.isIgnoringMouseUp && 'mouseup' == t.type || (this.staticClick(t, e), 'mouseup' != t.type && (this.isIgnoringMouseUp = !0, setTimeout(function () {
              delete this.isIgnoringMouseUp
            }.bind(this), 400)))
          },
          r.staticClick = function (t, e) {
            this.emitEvent('staticClick', [
              t,
              e
            ])
          },
          n.getPointerPoint = e.getPointerPoint,
          n
        }(c, t)
      }.apply(e, r)) || (t.exports = o)
    }(window)
  },
  717: function (t, e, n) {
    var r,
    o;
    window,
    r = [
      n(37),
      n(252),
      n(33)
    ],
    void 0 === (o = function (t, e, n) {
      return function (t, e, n, r) {
        'use strict';
        var o = 'http://www.w3.org/2000/svg';
        function c(t, e) {
          this.direction = t,
          this.parent = e,
          this._create()
        }
        function l(t) {
          return 'string' == typeof t ? t : 'M ' + t.x0 + ',50 L ' + t.x1 + ',' + (t.y1 + 50) + ' L ' + t.x2 + ',' + (t.y2 + 50) + ' L ' + t.x3 + ',50  L ' + t.x2 + ',' + (50 - t.y2) + ' L ' + t.x1 + ',' + (50 - t.y1) + ' Z'
        }
        c.prototype = Object.create(n.prototype),
        c.prototype._create = function () {
          this.isEnabled = !0,
          this.isPrevious = - 1 == this.direction;
          var t = this.parent.options.rightToLeft ? 1 : - 1;
          this.isLeft = this.direction == t;
          var element = this.element = document.createElement('button');
          element.className = 'flickity-button flickity-prev-next-button',
          element.className += this.isPrevious ? ' previous' : ' next',
          element.setAttribute('type', 'button'),
          this.disable(),
          element.setAttribute('aria-label', this.isPrevious ? 'Previous' : 'Next');
          var svg = this.createSVG();
          element.appendChild(svg),
          this.parent.on('select', this.update.bind(this)),
          this.on('pointerDown', this.parent.childUIPointerDown.bind(this.parent))
        },
        c.prototype.activate = function () {
          this.bindStartEvent(this.element),
          this.element.addEventListener('click', this),
          this.parent.element.appendChild(this.element)
        },
        c.prototype.deactivate = function () {
          this.parent.element.removeChild(this.element),
          this.unbindStartEvent(this.element),
          this.element.removeEventListener('click', this)
        },
        c.prototype.createSVG = function () {
          var svg = document.createElementNS(o, 'svg');
          svg.setAttribute('class', 'flickity-button-icon'),
          svg.setAttribute('viewBox', '0 0 100 100');
          var path = document.createElementNS(o, 'path'),
          t = l(this.parent.options.arrowShape);
          return path.setAttribute('d', t),
          path.setAttribute('class', 'arrow'),
          this.isLeft || path.setAttribute('transform', 'translate(100, 100) rotate(180) '),
          svg.appendChild(path),
          svg
        },
        c.prototype.handleEvent = r.handleEvent,
        c.prototype.onclick = function () {
          if (this.isEnabled) {
            this.parent.uiChange();
            var t = this.isPrevious ? 'previous' : 'next';
            this.parent[t]()
          }
        },
        c.prototype.enable = function () {
          this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0)
        },
        c.prototype.disable = function () {
          this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1)
        },
        c.prototype.update = function () {
          var t = this.parent.slides;
          if (this.parent.options.wrapAround && t.length > 1) this.enable();
           else {
            var e = t.length ? t.length - 1 : 0,
            n = this.isPrevious ? 0 : e;
            this[this.parent.selectedIndex == n ? 'disable' : 'enable']()
          }
        },
        c.prototype.destroy = function () {
          this.deactivate(),
          this.allOff()
        },
        r.extend(e.defaults, {
          prevNextButtons: !0,
          arrowShape: {
            x0: 10,
            x1: 60,
            y1: 50,
            x2: 70,
            y2: 40,
            x3: 30
          }
        }),
        e.createMethods.push('_createPrevNextButtons');
        var d = e.prototype;
        return d._createPrevNextButtons = function () {
          this.options.prevNextButtons && (this.prevButton = new c( - 1, this), this.nextButton = new c(1, this), this.on('activate', this.activatePrevNextButtons))
        },
        d.activatePrevNextButtons = function () {
          this.prevButton.activate(),
          this.nextButton.activate(),
          this.on('deactivate', this.deactivatePrevNextButtons)
        },
        d.deactivatePrevNextButtons = function () {
          this.prevButton.deactivate(),
          this.nextButton.deactivate(),
          this.off('deactivate', this.deactivatePrevNextButtons)
        },
        e.PrevNextButton = c,
        e
      }(0, t, e, n)
    }.apply(e, r)) || (t.exports = o)
  },
  718: function (t, e, n) {
    var r,
    o;
    window,
    r = [
      n(37),
      n(252),
      n(33)
    ],
    void 0 === (o = function (t, e, n) {
      return function (t, e, n, r) {
        'use strict';
        function o(t) {
          this.parent = t,
          this._create()
        }
        o.prototype = Object.create(n.prototype),
        o.prototype._create = function () {
          this.holder = document.createElement('ol'),
          this.holder.className = 'flickity-page-dots',
          this.dots = [
          ],
          this.handleClick = this.onClick.bind(this),
          this.on('pointerDown', this.parent.childUIPointerDown.bind(this.parent))
        },
        o.prototype.activate = function () {
          this.setDots(),
          this.holder.addEventListener('click', this.handleClick),
          this.bindStartEvent(this.holder),
          this.parent.element.appendChild(this.holder)
        },
        o.prototype.deactivate = function () {
          this.holder.removeEventListener('click', this.handleClick),
          this.unbindStartEvent(this.holder),
          this.parent.element.removeChild(this.holder)
        },
        o.prototype.setDots = function () {
          var t = this.parent.slides.length - this.dots.length;
          t > 0 ? this.addDots(t) : t < 0 && this.removeDots( - t)
        },
        o.prototype.addDots = function (t) {
          for (var e = document.createDocumentFragment(), n = [
          ], r = this.dots.length, o = r + t, i = r; i < o; i++) {
            var c = document.createElement('li');
            c.className = 'dot',
            c.setAttribute('aria-label', 'Page dot ' + (i + 1)),
            e.appendChild(c),
            n.push(c)
          }
          this.holder.appendChild(e),
          this.dots = this.dots.concat(n)
        },
        o.prototype.removeDots = function (t) {
          this.dots.splice(this.dots.length - t, t).forEach((function (t) {
            this.holder.removeChild(t)
          }), this)
        },
        o.prototype.updateSelected = function () {
          this.selectedDot && (this.selectedDot.className = 'dot', this.selectedDot.removeAttribute('aria-current')),
          this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = 'dot is-selected', this.selectedDot.setAttribute('aria-current', 'step'))
        },
        o.prototype.onTap = o.prototype.onClick = function (t) {
          var e = t.target;
          if ('LI' == e.nodeName) {
            this.parent.uiChange();
            var n = this.dots.indexOf(e);
            this.parent.select(n)
          }
        },
        o.prototype.destroy = function () {
          this.deactivate(),
          this.allOff()
        },
        e.PageDots = o,
        r.extend(e.defaults, {
          pageDots: !0
        }),
        e.createMethods.push('_createPageDots');
        var c = e.prototype;
        return c._createPageDots = function () {
          this.options.pageDots && (this.pageDots = new o(this), this.on('activate', this.activatePageDots), this.on('select', this.updateSelectedPageDots), this.on('cellChange', this.updatePageDots), this.on('resize', this.updatePageDots), this.on('deactivate', this.deactivatePageDots))
        },
        c.activatePageDots = function () {
          this.pageDots.activate()
        },
        c.updateSelectedPageDots = function () {
          this.pageDots.updateSelected()
        },
        c.updatePageDots = function () {
          this.pageDots.setDots()
        },
        c.deactivatePageDots = function () {
          this.pageDots.deactivate()
        },
        e.PageDots = o,
        e
      }(0, t, e, n)
    }.apply(e, r)) || (t.exports = o)
  },
  719: function (t, e, n) {
    var r,
    o;
    window,
    r = [
      n(251),
      n(33),
      n(37)
    ],
    void 0 === (o = function (t, e, n) {
      return function (t, e, n) {
        'use strict';
        function r(t) {
          this.parent = t,
          this.state = 'stopped',
          this.onVisibilityChange = this.visibilityChange.bind(this),
          this.onVisibilityPlay = this.visibilityPlay.bind(this)
        }
        r.prototype = Object.create(t.prototype),
        r.prototype.play = function () {
          'playing' != this.state && (document.hidden ? document.addEventListener('visibilitychange', this.onVisibilityPlay) : (this.state = 'playing', document.addEventListener('visibilitychange', this.onVisibilityChange), this.tick()))
        },
        r.prototype.tick = function () {
          if ('playing' == this.state) {
            var time = this.parent.options.autoPlay;
            time = 'number' == typeof time ? time : 3000;
            var t = this;
            this.clear(),
            this.timeout = setTimeout((function () {
              t.parent.next(!0),
              t.tick()
            }), time)
          }
        },
        r.prototype.stop = function () {
          this.state = 'stopped',
          this.clear(),
          document.removeEventListener('visibilitychange', this.onVisibilityChange)
        },
        r.prototype.clear = function () {
          clearTimeout(this.timeout)
        },
        r.prototype.pause = function () {
          'playing' == this.state && (this.state = 'paused', this.clear())
        },
        r.prototype.unpause = function () {
          'paused' == this.state && this.play()
        },
        r.prototype.visibilityChange = function () {
          this[document.hidden ? 'pause' : 'unpause']()
        },
        r.prototype.visibilityPlay = function () {
          this.play(),
          document.removeEventListener('visibilitychange', this.onVisibilityPlay)
        },
        e.extend(n.defaults, {
          pauseAutoPlayOnHover: !0
        }),
        n.createMethods.push('_createPlayer');
        var o = n.prototype;
        return o._createPlayer = function () {
          this.player = new r(this),
          this.on('activate', this.activatePlayer),
          this.on('uiChange', this.stopPlayer),
          this.on('pointerDown', this.stopPlayer),
          this.on('deactivate', this.deactivatePlayer)
        },
        o.activatePlayer = function () {
          this.options.autoPlay && (this.player.play(), this.element.addEventListener('mouseenter', this))
        },
        o.playPlayer = function () {
          this.player.play()
        },
        o.stopPlayer = function () {
          this.player.stop()
        },
        o.pausePlayer = function () {
          this.player.pause()
        },
        o.unpausePlayer = function () {
          this.player.unpause()
        },
        o.deactivatePlayer = function () {
          this.player.stop(),
          this.element.removeEventListener('mouseenter', this)
        },
        o.onmouseenter = function () {
          this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener('mouseleave', this))
        },
        o.onmouseleave = function () {
          this.player.unpause(),
          this.element.removeEventListener('mouseleave', this)
        },
        n.Player = r,
        n
      }(t, e, n)
    }.apply(e, r)) || (t.exports = o)
  },
  720: function (t, e, n) {
    var r,
    o;
    window,
    r = [
      n(37),
      n(33)
    ],
    void 0 === (o = function (t, e) {
      return function (t, e, n) {
        'use strict';
        function r(t) {
          var e = document.createDocumentFragment();
          return t.forEach((function (t) {
            e.appendChild(t.element)
          })),
          e
        }
        var o = e.prototype;
        return o.insert = function (t, e) {
          var n = this._makeCells(t);
          if (n && n.length) {
            var o = this.cells.length;
            e = void 0 === e ? o : e;
            var c = r(n),
            l = e == o;
            if (l) this.slider.appendChild(c);
             else {
              var d = this.cells[e].element;
              this.slider.insertBefore(c, d)
            }
            if (0 === e) this.cells = n.concat(this.cells);
             else if (l) this.cells = this.cells.concat(n);
             else {
              var h = this.cells.splice(e, o - e);
              this.cells = this.cells.concat(n).concat(h)
            }
            this._sizeCells(n),
            this.cellChange(e, !0)
          }
        },
        o.append = function (t) {
          this.insert(t, this.cells.length)
        },
        o.prepend = function (t) {
          this.insert(t, 0)
        },
        o.remove = function (t) {
          var e = this.getCells(t);
          if (e && e.length) {
            var r = this.cells.length - 1;
            e.forEach((function (t) {
              t.remove();
              var e = this.cells.indexOf(t);
              r = Math.min(e, r),
              n.removeFrom(this.cells, t)
            }), this),
            this.cellChange(r, !0)
          }
        },
        o.cellSizeChange = function (t) {
          var e = this.getCell(t);
          if (e) {
            e.getSize();
            var n = this.cells.indexOf(e);
            this.cellChange(n)
          }
        },
        o.cellChange = function (t, e) {
          var n = this.selectedElement;
          this._positionCells(t),
          this._getWrapShiftCells(),
          this.setGallerySize();
          var r = this.getCell(n);
          r && (this.selectedIndex = this.getCellSlideIndex(r)),
          this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex),
          this.emitEvent('cellChange', [
            t
          ]),
          this.select(this.selectedIndex),
          e && this.positionSliderAtSelected()
        },
        e
      }(0, t, e)
    }.apply(e, r)) || (t.exports = o)
  },
  721: function (t, e, n) {
    var r,
    o;
    window,
    r = [
      n(37),
      n(33)
    ],
    void 0 === (o = function (t, e) {
      return function (t, e, n) {
        'use strict';
        e.createMethods.push('_createLazyload');
        var r = e.prototype;
        function o(t) {
          if ('IMG' == t.nodeName) {
            var e = t.getAttribute('data-flickity-lazyload'),
            r = t.getAttribute('data-flickity-lazyload-src'),
            o = t.getAttribute('data-flickity-lazyload-srcset');
            if (e || r || o) return [t]
          }
          var c = 'img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]',
          l = t.querySelectorAll(c);
          return n.makeArray(l)
        }
        function c(img, t) {
          this.img = img,
          this.flickity = t,
          this.load()
        }
        return r._createLazyload = function () {
          this.on('select', this.lazyLoad)
        },
        r.lazyLoad = function () {
          var t = this.options.lazyLoad;
          if (t) {
            var e = 'number' == typeof t ? t : 0,
            n = this.getAdjacentCellElements(e),
            r = [
            ];
            n.forEach((function (t) {
              var e = o(t);
              r = r.concat(e)
            })),
            r.forEach((function (img) {
              new c(img, this)
            }), this)
          }
        },
        c.prototype.handleEvent = n.handleEvent,
        c.prototype.load = function () {
          this.img.addEventListener('load', this),
          this.img.addEventListener('error', this);
          var t = this.img.getAttribute('data-flickity-lazyload') || this.img.getAttribute('data-flickity-lazyload-src'),
          e = this.img.getAttribute('data-flickity-lazyload-srcset');
          this.img.src = t,
          e && this.img.setAttribute('srcset', e),
          this.img.removeAttribute('data-flickity-lazyload'),
          this.img.removeAttribute('data-flickity-lazyload-src'),
          this.img.removeAttribute('data-flickity-lazyload-srcset')
        },
        c.prototype.onload = function (t) {
          this.complete(t, 'flickity-lazyloaded')
        },
        c.prototype.onerror = function (t) {
          this.complete(t, 'flickity-lazyerror')
        },
        c.prototype.complete = function (t, e) {
          this.img.removeEventListener('load', this),
          this.img.removeEventListener('error', this);
          var n = this.flickity.getParentCell(this.img),
          r = n && n.element;
          this.flickity.cellSizeChange(r),
          this.img.classList.add(e),
          this.flickity.dispatchEvent('lazyLoad', t, r)
        },
        e.LazyLoader = c,
        e
      }(0, t, e)
    }.apply(e, r)) || (t.exports = o)
  },
  725: function (t, e, n) {
    var map = {
      './europa': [
        211,
        3
      ],
      './europa.vue': [
        211,
        3
      ],
      './forecast': [
        212,
        3
      ],
      './forecast.vue': [
        212,
        3
      ],
      './pollen': [
        213,
        3
      ],
      './pollen.vue': [
        213,
        3
      ],
      './rainradar': [
        214,
        3
      ],
      './rainradar.vue': [
        214,
        3
      ],
      './swiss': [
        215,
        3
      ],
      './swiss.vue': [
        215,
        3
      ],
      './today': [
        216,
        3
      ],
      './today.vue': [
        216,
        3
      ],
      './webcam': [
        217,
        5
      ],
      './webcam.vue': [
        217,
        5
      ]
    };
    function r(t) {
      if (!n.o(map, t)) return Promise.resolve().then((function () {
        var e = new Error('Cannot find module \'' + t + '\'');
        throw e.code = 'MODULE_NOT_FOUND',
        e
      }));
      var e = map[t],
      r = e[0];
      return n.e(e[1]).then((function () {
        return n(r)
      }))
    }
    r.keys = function () {
      return Object.keys(map)
    },
    r.id = 725,
    t.exports = r
  },
  737: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'RendererLayout'
    },
    o = n(1),
    c = {
      extends : Object(o.a) (r, (function () {
        var t = this.$createElement;
        return (this._self._c || t) ('nuxt')
      }), [
      ], !1, null, null, null).exports
    },
    l = Object(o.a) (c, undefined, undefined, !1, null, null, null);
    e.default = l.exports
  },
  739: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(6),
    o = n.n(r),
    c = n(3),
    l = n.n(c),
    d = n(5),
    h = n.n(d),
    f = n(7),
    v = n.n(f),
    m = n(2),
    y = n.n(m),
    w = n(21),
    S = n(46),
    x = (n(253), n(23)),
    E = n(8),
    _ = n(266),
    C = n(97);
    n(77);
    function D(object, t) {
      var e = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(object);
        t && (n = n.filter((function (t) {
          return Object.getOwnPropertyDescriptor(object, t).enumerable
        }))),
        e.push.apply(e, n)
      }
      return e
    }
    function A(t) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {
        };
        i % 2 ? D(Object(source), !0).forEach((function (e) {
          l() (t, e, source[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : D(Object(source)).forEach((function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
        }))
      }
      return t
    }
    n.e(5).then(n.t.bind(null, 734, 7));
    var k = function (data) {
      try {
        var t = JSON.parse(data.element.getAttribute('menusettings'));
        return window.vamp.showContextMenu(t)
      } catch (t) {
        console.log(t)
      }
    },
    M = {
      layout: function (data) {
        return data.isRendition ? ''.concat(data.isRendition) : 'default'
      },
      key: function (t) {
        return t.fullPath
      },
      components: {
        PageTitle: function () {
          return n.e(4).then(n.bind(null, 376))
        },
        MenuSidebar: function () {
          return n.e(7).then(n.bind(null, 329))
        }
      },
      mixins: [
        w.a,
        S.a
      ],
      head: function () {
        var head = this.setHeadMeta(this.data, this.pageType, this.isRendition);
        return this.isRendition.indexOf('webview') > - 1 && head.script.push({
          hid: 'weather-menu',
          preserve: 'preserve',
          type: 'text/javascript',
          innerHTML: Object(C.a) ('contextmenu', 'weather-menu', k)
        }),
        this.data.webviewMetadata && (this.data.mp3 && (this.data.webviewMetadata.mp3 = this.data.mp3), this.data.galleries && (this.data.webviewMetadata.galleries = this.data.galleries), head.script = [
        ].concat(v() (head.script), v() (Object(_.b) (this.data.webviewMetadata, 'pageLoaded')))),
        head
      },
      data: function () {
        return {
          hydrated: 0
        }
      },
      computed: {
        component: function () {
          var t = this;
          return function () {
            return n(725) ('./'.concat(t.componentName))
          }
        },
        menusettings: function () {
          var t = this;
          if ( - 1 === this.isRendition.indexOf('webview')) return null;
          var e = this.menuSidebar.currentItem;
          - 1 !== e.path.indexOf('?') && (e.path = e.path.split('?') [1]);
          var n = this.menuSidebar.menuItems.map((function (n) {
            return n.value = n.url,
            n.currentItem = e,
            t.renameKeys(n, {
              name: 'text'
            })
          }));
          return JSON.stringify({
            type: '.showContextMenu',
            event: 'weatherUserAction',
            ui: n
          })
        },
        onclickContextMenu: function () {
          return - 1 === this.isRendition.indexOf('webview') ? null : ''.concat(Object(C.b) ('contextmenu', 'weather-menu'), '.contextmenu({ element: this })')
        },
        isWebview: function () {
          return this.$store.state.isrendition.indexOf('webview') > - 1
        }
      },
      asyncData: function (t) {
        return h() (y.a.mark((function e() {
          var n,
          r,
          c,
          l,
          d,
          h,
          f,
          v,
          m,
          w,
          path,
          content,
          S,
          _,
          C,
          D,
          k,
          M,
          P,
          T,
          O,
          j,
          I,
          L,
          z;
          return y.a.wrap((function (e) {
            for (; ; ) switch (e.prev = e.next) {
              case 0:
                n = t.isMobile,
                r = t.pageType,
                c = t.app,
                l = t.req,
                d = t.route,
                h = t.store,
                f = t.error,
                v = t.$config,
                m = v.weather,
                - 1 !== (w = (w = d.fullPath.replace('/webview2', '')).replace('/webview', '').replace('/wetter/', '')).indexOf('?') && (w = w.split('?') [0]),
                path = w,
                e.next = 17;
                break;
              case 9:
                content = e.sent,
                h.commit('setMutation', {
                  key: 'esiContent',
                  value: content
                }),
                h.commit('setMutation', {
                  key: 'product',
                  value: v.product
                }),
                h.commit('setMutation', {
                  key: 'productPath',
                  value: 'nzz'
                }),
                S = d.path.split('/') [1],
                _ = d.path.split('/') [2],
                S && (C = l.app.get('config').nuxt.renditions.includes(S), h.commit('setRendition', C ? S : '')),
                _ && v.product === S && (D = l.app.get('config').nuxt.renditions.includes(_), h.commit('setRendition', D ? _ : ''));
              case 17:
                return m && m.pages[w] || (w = m.landingPath.replace('/wetter/', ''), path = w, d.fullPath = m.landingPath),
                k = ''.concat(v.sharedPath, '/static/images/weather'),
                M = {
                  weatherMenu: m.weatherMenu,
                  weatherPage: m.pages[w],
                  weatherImageUrl: k
                },
                P = {
                  menuItems: m.weatherMenu,
                  currentItem: m.pages[w],
                  referrer: 'weatherMenu',
                  additionalClass: 'menusidebar--weather'
                },
                d.path = m.pages[w].path.replace('(/webview2)?', '').replace('(/webview)?', ''),
                d.meta.push({
                  disableTransition: !0
                }),
                T = Object(x.a) ({
                  req: l,
                  store: h,
                  route: d,
                  pageType: r,
                  isMobile: n,
                  $config: v
                }),
                O = [
                  c.$kenny(A(A({
                  }, Object(E.a) (v.kennyBasicAuth)), {
                  }, {
                    headers: l ? l.headers : null,
                    url: T
                  })).then((function (e) {
                    return Object(x.b) (e, t)
                  }))
                ],
                e.prev = 25,
                e.next = 28,
                Promise.all(O);
              case 28:
                return j = e.sent,
                I = o() (j, 1),
                L = I[0],
                z = m.pages[path].component,
                'page',
                e.abrupt('return', A(A({
                }, L), {
                }, {
                  pageType: 'page',
                  componentName: z,
                  configWeatherPage: M,
                  menuSidebar: P
                }));
              case 36:
                e.prev = 36,
                e.t0 = e.catch(25),
                f({
                  statusCode: 404,
                  message: 'Seite nicht gefunden'
                });
              case 40:
              case 'end':
                return e.stop()
            }
          }), e, null, [
            [25,
            36]
          ])
        }))) ()
      },
      mounted: function () {
        this.hydrated = 1,
        this.pageDone()
      },
      methods: {
        renameKeys: function (t, e) {
          var n = Object.keys(t).map((function (n) {
            var r = e[n] || n;
            return l() ({
            }, r, t[n])
          }));
          return Object.assign.apply(Object, [
            {
            }
          ].concat(v() (n)))
        }
      }
    },
    P = n(1),
    component = Object(P.a) (M, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('section', {
        key: t.isRendition,
        class : t.isWebview ? 'app-data' : null
      }, [
        n('div', {
          staticClass: 'pageelement pageelement--themes'
        }, [
          n('PageTitle', {
            attrs: {
              data: {
                title: 'Wetter'
              }
            }
          }),
          t._v(' '),
          n('div', {
            staticClass: 'widget__row'
          }, [
            n('MenuSidebar', {
              staticClass: 'widget--1of3',
              attrs: {
                'menu-sidebar': t.menuSidebar,
                menusettings: t.menusettings,
                'onclick-contextmenu': t.onclickContextMenu
              }
            }),
            t._v(' '),
            n('div', {
              staticClass: 'widget--2of3 widget--2of3--page'
            }, [
              n(t.component, {
                tag: 'component',
                staticClass: 'nzz-page-transition',
                attrs: {
                  data: t.data,
                  'config-weather-page': t.configWeatherPage
                },
                on: {
                  componentMounted: function (e) {
                    return t.$emit('componentMounted')
                  }
                }
              })
            ], 1)
          ], 1)
        ], 1),
        t._v(' '),
        n('div', {
          staticClass: 'pageelement pageelement--advertisement'
        }, [
          n('div', {
            staticClass: 'resor'
          }, [
            n('div', {
              staticClass: 'resor__item',
              attrs: {
                id: 'adnz_billboard_2',
                'data-hydrated': t.$store.state.isrendition.indexOf('webview') > - 1 ? 1 : t.hydrated
              }
            })
          ])
        ])
      ])
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  742: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(3),
    o = n.n(r),
    c = n(5),
    l = n.n(c),
    d = n(2),
    h = n.n(d),
    f = n(9),
    v = n.n(f),
    m = n(8),
    y = n(24);
    function w(object, t) {
      var e = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(object);
        t && (n = n.filter((function (t) {
          return Object.getOwnPropertyDescriptor(object, t).enumerable
        }))),
        e.push.apply(e, n)
      }
      return e
    }
    function S(t) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {
        };
        i % 2 ? w(Object(source), !0).forEach((function (e) {
          o() (t, e, source[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : w(Object(source)).forEach((function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
        }))
      }
      return t
    }
    var x = {
      name: 'RendererMunicipalities',
      layout: 'renderer',
      mixins: [
        n(21).a
      ],
      data: function () {
        return {
          data: null,
          fetchGalleries: [
          ]
        }
      },
      computed: {
        articles: function () {
          return this.data && this.data.data && this.data.data.length ? this.data.data : this.data
        },
        smallImagesOnly: function () {
          var t;
          return this.$route.query && this.$route.query.styles && (t = this.$route.query.styles),
          'teasers--all-images-small' === t
        },
        offset: function () {
          return parseInt(this.$route.params.offset, 10)
        },
        isPaginated: function () {
          return 'paginated' === this.$route.params.layout
        },
        documentsUrls: function () {
          var t = this,
          data = this.data.data ? this.data.data : this.data;
          return data.length ? data.map((function (i) {
            var e = - 1 === i.metadata.nzzId.indexOf('1.') ? i.metadata.documentId : i.metadata.nzzId;
            return 'webview2' === t.$store.state.isrendition ? i.metadata.nzzId : '/article/'.concat(e)
          })) : [
          ]
        },
        fetchGalleriesScript: function () {
          return this.fetchGalleries.join('|')
        }
      },
      asyncData: function (t) {
        return l() (h.a.mark((function e() {
          var n,
          r,
          o,
          c,
          l,
          d,
          f;
          return h.a.wrap((function (e) {
            for (; ; ) switch (e.prev = e.next) {
              case 0:
                return n = t.params,
                r = t.route,
                o = t.store,
                c = t.error,
                l = t.$config,
                o.commit('setMutation', {
                  key: 'product',
                  value: l.product
                }),
                o.commit('setMutation', {
                  key: 'productPath',
                  value: 'nzz'
                }),
                r.params.render.indexOf('webview') > - 1 && o.commit('setRendition', r.params.render),
                d = n.municipalities.split(',').map((function (t) {
                  return t.replace(/__/g, ':')
                })),
                f = ''.concat(l.enricoTechBase, '/municipality-articles?product=').concat(l.product, '&q=').concat(d.join(), '&limit=').concat(n.limit, '&offset=').concat(n.offset),
                r.query.bypass && (f = ''.concat(f, '&bypass=').concat(r.query.bypass)),
                r.query.alternative && 'chmedia' === r.query.alternative && (f = f.replace('product='.concat(l.product), 'product=chmedia')),
                e.next = 10,
                v() (S(S({
                }, Object(m.a) (l.enricoBasicAuth)), {
                }, {
                  url: f
                })).then((function (t) {
                  var e = t.data.data;
                  return {
                    data: void 0 === e ? {
                    }
                     : e
                  }
                })).catch((function () {
                  c({
                    statusCode: 404,
                    message: 'Enrico error '.concat(f)
                  })
                }));
              case 10:
                return e.abrupt('return', e.sent);
              case 11:
              case 'end':
                return e.stop()
            }
          }), e)
        }))) ()
      },
      validate: function (t) {
        var e = t.params;
        return !!(e.municipalities && e.limit && e.offset && e.layout)
      },
      head: function () {
        var head = this.setHeadMeta(this.data, this.pageType, this.isRendition);
        if (head.script || (head.script = [
        ]), this.documentsUrls && this.documentsUrls.length) try {
          head.script.push({
            hid: 'document-list-urls-fragment',
            type: 'text/javascript',
            preserve: 'preserve',
            innerHTML: 'window.fragmentMetadata = '.concat(JSON.stringify(this.documentsUrls))
          })
        } catch (t) {
          console.log(t)
        }
        return this.fetchData && head.script.push({
          hid: 'document-list-fetch-galleries',
          type: 'text/javascript',
          preserve: 'preserve',
          innerHTML: Object(y.h) ()
        }),
        head
      },
      methods: {
        componentName: function () {
          var t = this;
          return this.$route.params.render.indexOf('webview') > - 1 ? (this.articles && this.articles.forEach((function (e) {
            'gallery' === e.metadata.layout && t.fetchGalleries.push(e.metadata.nzzId)
          })), n.e(2).then(n.bind(null, 321))) : Promise.resolve().then(n.bind(null, 51))
        }
      }
    },
    E = n(1),
    component = Object(E.a) (x, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', {
        staticClass: 'widget',
        class : [
          t.$route.params.layout,
          {
            loaded: t.$route.params.offset > 0
          }
        ]
      }, [
        t._l(t.data, (function (e, r) {
          return n(t.componentName, {
            key: 'widget-' + r + '-' + t.$store.state.isrendition,
            tag: 'component',
            attrs: {
              data: {
                articles: [
                  e
                ]
              },
              size: r + t.offset === 0 && !t.smallImagesOnly && t.isPaginated ? '1of3' : t.$route.params.layout,
              'source-elem': 'Widget-Gemeinde-Articles'
            }
          })
        })),
        t._v(' '),
        t.$route.params && t.$route.params.render.indexOf('webview') > - 1 ? n('div', {
          staticClass: 'fetchGalleriesScript',
          attrs: {
            id: 'id-' + t.fetchGalleriesScript
          }
        }) : t._e()
      ], 2)
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  744: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(5),
    o = n.n(r),
    c = n(3),
    l = n.n(c),
    d = n(2),
    h = n.n(d),
    f = n(9),
    v = n.n(f),
    m = n(8);
    function y(object, t) {
      var e = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(object);
        t && (n = n.filter((function (t) {
          return Object.getOwnPropertyDescriptor(object, t).enumerable
        }))),
        e.push.apply(e, n)
      }
      return e
    }
    function w(t) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {
        };
        i % 2 ? y(Object(source), !0).forEach((function (e) {
          l() (t, e, source[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : y(Object(source)).forEach((function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
        }))
      }
      return t
    }
    var S = {
      nzz: {
        'articlelist-embed': 'articlelist',
        'link-box-embed': 'articlelist-b',
        'widget--news-article': '1of3-news'
      },
      regio: {
        'articlelist-embed': 'articlelist',
        'link-box-embed': 'articlelist-a',
        'widget--news-article': '1of3-news'
      },
      nzzas: {
        'articlelist-embed': 'articlelist',
        'link-box-embed': 'articlelist-moretosubject'
      },
      bellevue: {
        'articlelist-embed': 'articlelist',
        'link-box-embed': '1of3'
      },
      judi: {
        'link-box-embed': '2of3-linkbox'
      }
    },
    x = {
      nzz: 'morpheus',
      nzzas: 'domenica',
      bellevue: 'titan',
      judi: 'judi',
      regio: 'regio'
    },
    E = {
      nzz: {
      },
      regio: {
      },
      nzzas: {
      },
      bellevue: {
      },
      judi: {
      }
    };
    function _(t) {
      var e = 'nzz';
      return {
        metadata: {
          documentId: t.documentId,
          title: 'Article ld.'.concat(t.documentId, ' is not published yet or was not found'),
          product: e,
          teaserType: 'headline--breaking',
          layout: 'preview-error',
          designName: x.nzz
        },
        size: S.nzz[t.layout] || t.layout,
        componenttype: E.nzz[t.layout] || t.layout
      }
    }
    function C(t, e, n) {
      var r = e.query,
      o = r.product,
      c = void 0 === o ? n.product : o,
      l = r.bypass,
      d = ''.concat(n.enricoTechBase, '/article?product=').concat(c, '&articleid=ld.').concat(t.documentId, '&bypass=').concat(l);
      return e.query.alternative && 'chmedia' === e.query.alternative && (d = d.replace('product='.concat(n.product), 'product=chmedia')),
      v() (w(w({
      }, Object(m.a) (n.enricoBasicAuth)), {
      }, {
        url: d
      })).then((function (e) {
        return e.data ? function (t) {
          return t.data
        }(e) : _(t)
      })).catch((function () {
        return _(t)
      }))
    }
    var D = {
      name: 'RendererTeaser',
      components: {
        Teaser: function () {
          return Promise.resolve().then(n.bind(null, 35))
        },
        AliasTeaserEmbed: function () {
          return n.e(1).then(n.bind(null, 148))
        },
        AliasTeaserEmbedList: function () {
          return n.e(9).then(n.bind(null, 147))
        },
        Slider: function () {
          return n.e(6).then(n.bind(null, 110))
        },
        PageGallery: function () {
          return n.e(1).then(n.bind(null, 404))
        }
      },
      layout: 'renderer',
      asyncData: function (t) {
        return o() (h.a.mark((function e() {
          var n,
          r,
          o,
          c,
          l,
          d,
          f,
          v;
          return h.a.wrap((function (e) {
            for (; ; ) switch (e.prev = e.next) {
              case 0:
                return n = t.params,
                r = t.store,
                o = t.route,
                c = t.$config,
                l = 'nzz',
                r.commit('setMutation', {
                  key: 'productPath',
                  value: l
                }),
                e.next = 5,
                C(n, o, c);
              case 5:
                return d = e.sent,
                f = d.metadata,
                v = void 0 === f ? {
                }
                 : f,
                e.abrupt('return', {
                  size: S[l][n.layout] || n.layout,
                  componenttype: E[l][n.layout] || n.layout,
                  metadata: v
                });
              case 9:
              case 'end':
                return e.stop()
            }
          }), e)
        }))) ()
      }
    },
    A = n(1),
    component = Object(A.a) (D, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return 'alias-teaser-embed' === t.componenttype ? n('AliasTeaserEmbed', {
        attrs: {
          data: {
            content: {
              article: {
                metadata: t.metadata
              }
            }
          }
        }
      }) : 'alias-teaser-embed-list' === t.componenttype ? n('AliasTeaserEmbedList', {
        attrs: {
          data: {
            content: {
              article: {
                metadata: t.metadata
              }
            }
          }
        }
      }) : 'slider-embed' === t.componenttype && t.metadata.embeds && t.metadata.embeds.images ? n('Slider', {
        attrs: {
          data: {
            content: {
              article: {
                content: t.metadata.embeds.images.map((function (t) {
                  var e = t.author,
                  caption = t.caption,
                  n = t.url;
                  return {
                    id: '' + Math.random(),
                    content: {
                      author: e,
                      caption: caption,
                      image: {
                        size: 'slider',
                        url: n
                      }
                    }
                  }
                }))
              }
            }
          }
        }
      }) : 'page-gallery-embed' === t.componenttype ? n('PageGallery', {
        attrs: {
          'is-preview': !0,
          data: {
            content: {
              article: {
                content: t.metadata.embeds.images.map((function (t) {
                  var e = t.author,
                  caption = t.caption,
                  n = t.url;
                  return {
                    id: '' + Math.random(),
                    content: {
                      author: e,
                      caption: caption,
                      image: {
                        url: n,
                        ratio: 1.5
                      }
                    }
                  }
                }))
              }
            }
          }
        }
      }) : n('Teaser', {
        key: Date.now(),
        class : 'teaser__layout--' + t.metadata.layout,
        attrs: {
          item: t.metadata,
          componenttype: t.componenttype,
          size: t.size
        }
      })
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  80: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'PageAdvertisementNative',
      props: {
        data: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        }
      },
      data: function () {
        return {
          hydrated: 0
        }
      },
      mounted: function () {
        this.hydrated = 1
      }
    },
    o = n(1),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.$store.state.features.advertisements ? n('div', {
        staticClass: 'resor resor--native resor--nativelist'
      }, [
        n('div', {
          staticClass: 'resor__item',
          attrs: {
            id: t.data.content.text,
            'data-hydrated': t.$store.state.isrendition.indexOf('webview') > - 1 ? 1 : t.hydrated
          }
        })
      ]) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  81: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      components: {
        SimpleArticle: function () {
          return n.e(6).then(n.bind(null, 500))
        }
      },
      extends : n(20).default
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  97: function (t, e, n) {
    'use strict';
    function r(t, e) {
      return 'inline_'.concat(t, '_').concat(e.replace(/-|\./g, '_'))
    }
    function o(t, e, n) {
      return ''.concat(r(t, e), ' = { \'').concat(t, '\': ').concat(n, ' }')
    }
    n.d(e, 'b', (function () {
      return r
    })),
    n.d(e, 'a', (function () {
      return o
    }))
  }
}
]);
