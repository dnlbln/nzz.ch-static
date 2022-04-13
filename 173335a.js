(window.webpackJsonp = window.webpackJsonp || [
]).push([[1],
{
  100: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(7),
    o = n.n(r),
    c = n(42),
    l = n(67),
    d = {
      name: 'ContainerIdms',
      components: {
        HeadlineTitle: c.default
      },
      mixins: [
        l.a
      ],
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
          scripts: [
          ],
          idmsFunctions: [
          ]
        }
      },
      computed: {
        dataHtml: function () {
          if (this.data.content && this.data.content.idms && this.data.content.idms.html) {
            if ('themarket' === this.data.content.idms.html) {
              var t = decodeURIComponent(this.data.content.idms.params.url) + '#market-widget-'.concat(this.data.id);
              return '\n            <iframe\n              style="border:0;width:100%"\n              class="market-iframe"\n              allowfullscreen="false"\n              src="'.concat(t, '"\n              id="market-widget-').concat(this.data.id, '">\n            </iframe>\n          ')
            }
            return this.data.content.idms.params && 'agenda' === this.data.content.idms.params.name ? '\n            <iframe\n              style="border:0;width:100%"\n              class="chmedia-iframe"\n              allowfullscreen="false"\n              src="'.concat(decodeURIComponent(this.data.content.idms.params.url), '"\n              id="chmedia-widget-agenda">\n            </iframe>\n          ') : this.data.content.idms.params && 'Transmatico' === this.data.content.idms.params.name ? ''.concat(this.data.content.idms.html, '<style>.TRM-widget .trm-img-holder { position: relative }</style>') : this.data.content.idms.html.replace(/<script(?:(?!>)[\s\S])*>([\s\S]*?)<\/script>/gi, '')
          }
          return !1
        }
      },
      mounted: function () {
        var t = this;
        this.$nextTick((function () {
          window.deferred((function () {
            window.deferred((function () {
              t.idmsFunctions.forEach((function (t) {
                (!window.idmsFcts || window.idmsFcts && - 1 === window.idmsFcts.indexOf(t)) && window.addEventListener('idmsload', window[t]),
                window.idmsFcts ? - 1 === window.idmsFcts.indexOf(t) && window.idmsFcts.push(t) : window.idmsFcts = [
                  t
                ]
              })),
              window.dispatchEvent(new window.CustomEvent('idmsload'))
            }))
          }), (function () {
            return t.idmsFunctions
          }))
        }))
      },
      destroyed: function () {
        window.idmsFcts = void 0
      },
      methods: {
        waitFor: function (t) {
          var e = t ? ', function() { return window.'.concat(t, ' }') : '',
          n = 'idms_'.concat(t, '_').concat(this.data.id.split('-') [1]);
          return this.idmsFunctions.push(n),
          '\n        var '.concat(n, ' = function(){try{deferred(function(){\n$1\n}').concat(e, ');}catch(e){};\n          if (').concat(this.$store.state.isrendition ? 'false' : 'true', ') {\n            window.removeEventListener(\'idmsload\', ').concat(n, ');\n          }\n        };\n        if (').concat(this.$store.state.isrendition ? 'true' : 'false', ') {\n          window.addEventListener(\'idmsload\', ').concat(n, ');\n        }\n        ')
        }
      },
      head: function () {
        if (this.data.content && this.data.content.idms && this.data.content.idms.html) {
          var t = this.data.content.idms.html,
          e = 1,
          n = this;
          t.replace(/<script(?:(?!>)[\s\S])*>([\s\S]*?)<\/script>/gi, (function (t) {
            var r = (t.match(/<script/g) || [
            ]).length > 1;
            if (t.indexOf('src="') > - 1 && !r) {
              var o = t.replace(/<script\s+(?:[^>]*?\s+)?src=(["'])(.*?)\1(>(.*?)<\/script>)?/gi, '$2').split(' ') [0];
              return n.scripts.push({
                type: 'text/javascript',
                hid: 'idms-head-script-'.concat(n.data.id, '-').concat(e),
                src: o,
                preserve: 'preserve'
              }),
              t
            }
            var c = 'window.deferred(function',
            l = 'document';
            (t = t.replace(/jQuery\(document\).ready\(function/gi, c).replace(/\$\(document\).ready\(function/gi, c)).indexOf('jQuery') > - 1 && (l = 'jQuery'),
            t.indexOf('Heimspiel') > - 1 && (l = 'Heimspiel'),
            t.indexOf('hstrck') > - 1 && (l = 'hstrck'),
            r || (n.scripts.push({
              type: 'text/javascript',
              hid: 'idms-script-'.concat(n.data.id, '-').concat(e),
              innerHTML: t.replace(/<script(?:(?!>)[\s\S])*>([\s\S]*?)<\/script>/gi, n.waitFor(l)),
              preserve: 'preserve',
              body: 'true'
            }), e++)
          }))
        }
        return {
          script: o() (this.scripts)
        }
      }
    },
    f = (n(1210), n(1)),
    component = Object(f.a) (d, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('LazyHydrate', {
        attrs: {
          'ssr-only': ''
        }
      }, [
        n('section', {
          staticClass: 'pageelement',
          attrs: {
            'data-source-element': 'Container-Finanzdaten',
            'data-nzz-tid': 'container-exclusive',
            'data-nzz-container': '',
            'data-grows-exp': t.experimentTitle
          }
        }, [
          n('div', {
            staticClass: 'pageelement__inner'
          }, [
            t.data.content ? n('HeadlineTitle', {
              attrs: {
                data: t.data.content
              }
            }) : t._e(),
            t._v(' '),
            n('div', {
              staticClass: 'widget__row'
            }, [
              t.dataHtml ? n('div', {
                staticClass: 'widget widget--sportdaten'
              }, [
                n('div', {
                  domProps: {
                    innerHTML: t._s(t.dataHtml)
                  }
                })
              ]) : t._e()
            ])
          ], 1)
        ])
      ])
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  1039: function (t, e, n) {
    'use strict';
    var r = n(42),
    o = {
      name: 'PageContainerExclusive',
      components: {
        WidgetRow: n(25).default,
        HeadlineTitle: r.default,
        WidgetMunicipalityHeader: function () {
          return n.e(3).then(n.bind(null, 167))
        },
        SponsoredContent: function () {
          return n.e(5).then(n.bind(null, 204))
        },
        WidgetTopicHeader: function () {
          return n.e(5).then(n.bind(null, 172))
        }
      },
      props: {
        data: {
          type: Object,
        default:
          function () {
            return {
              content: {
              },
              containers: {
              }
            }
          }
        },
        componenttype: {
          type: String,
        default:
          function () {
            return ''
          }
        },
        pagetype: {
          type: String,
        default:
          function () {
            return ''
          }
        }
      },
      computed: {
        header: function () {
          return !(!this.data.containers.widgets || !this.data.containers.widgets[0]) && ('container--exclusive-municipality' === this.componenttype ? 'WidgetMunicipalityHeader' : 'container--exclusive-topic' === this.componenttype && 'WidgetTopicHeader')
        },
        sponsoredContent: function () {
          return !(!this.data.containers.widgets || !this.data.containers.widgets[1]) && ('container--exclusive-municipality' === this.componenttype && 'SponsoredContent')
        },
        hasHeadline: function () {
          return !!this.data.content && (this.data.content.title && !this.data.content.image)
        }
      },
      methods: {
        getClass: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          },
          n = 'pageelement pageelement--'.concat(this.getIdentifier(t));
          return Object.entries(e).forEach((function (style) {
            n = n + ' ' + style[1]
          })),
          n
        }
      }
    },
    c = n(1),
    component = Object(c.a) (o, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.data ? n('section', {
        class : [
          t.getClass(t.componenttype, t.data.styles),
          t.hasHeadline ? 'hasHeadline' : null
        ],
        attrs: {
          'data-source-element': 'Container-exklusiv',
          'data-nzz-tid': 'container-exclusive',
          'data-nzz-container': ''
        }
      }, [
        t.header ? [
          n(t.header, {
            tag: 'component',
            attrs: {
              data: t.data.containers.widgets[0]
            }
          })
        ] : t._e(),
        t._v(' '),
        t.sponsoredContent ? [
          n(t.sponsoredContent, {
            tag: 'component',
            attrs: {
              data: t.data.containers.widgets[1],
              componenttype: t.componenttype
            }
          })
        ] : t._e(),
        t._v(' '),
        n('div', {
          staticClass: 'pageelement__inner'
        }, [
          t.data.content ? n('HeadlineTitle', {
            attrs: {
              data: t.data.content
            }
          }) : t._e(),
          t._v(' '),
          t.data.containers ? t._l(t.data.containers['widget-row-area'], (function (e) {
            return n('WidgetRow', {
              key: 'scp-excl-row-' + e.id,
              attrs: {
                data: e,
                pagetype: t.pagetype,
                componenttype: t.getIdentifier(e.identifier)
              }
            })
          })) : t._e()
        ], 2)
      ], 2) : t._e()
    }), [
    ], !1, null, null, null);
    e.a = component.exports
  },
  106: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(6),
    o = n.n(r),
    c = n(64),
    l = n(265),
    d = {
      name: 'ArticlePersonBox',
      mixins: [
        c.a
      ],
      props: {
        data: {
          type: Object,
        default:
          function () {
            return {
              content: {
              }
            }
          }
        }
      },
      computed: {
        layoutAttribute: function () {
          return 'intrinsic'
        },
        imageType: function () {
          return this.$store.state.isrendition || this.$route.fullPath.indexOf('/fragments/render') > - 1 ? 'fragment' : 'article'
        },
        imageTag: function () {
          return 'img'
        },
        isLightbox: function () {
          return !(!this.$parent.isAmp || !this.data.group) && this.data.group
        },
        imageAlt: function () {
          var t = [
            this.data.content.role,
            this.data.content.bio,
            this.data.content.name,
            this.data.content.posterauthor
          ].filter(Boolean),
          text = o() (t, 1) [0];
          return Object(l.b) (text)
        },
        headingTypeName: function () {
          return 'h3'
        },
        headingTypeRole: function () {
          return 'h2'
        }
      }
    },
    f = (n(1144), n(1)),
    component = Object(f.a) (d, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.data.content.image || t.data.content.name ? n('div', {
        staticClass: 'articlecomponent personbox'
      }, [
        n(t.headingTypeName, {
          tag: 'component',
          staticClass: 'personbox__name personbox__name--first',
          domProps: {
            innerHTML: t._s(t.data.content.name || 'Zur Person')
          }
        }),
        t._v(' '),
        t.data.content.image ? [
          n('figure', {
            staticClass: 'personbox__poster'
          }, [
            n('div', {
              staticClass: 'personbox__placeholder'
            }, [
              n('div', {
                directives: [
                  {
                    name: 'srcset',
                    rawName: 'v-srcset',
                    value: {
                      teaserImage: t.data.content.image,
                      parent: this.$parent,
                      layout: 'article',
                      imageType: t.imageType
                    },
                    expression: '{\n            teaserImage: data.content.image,\n            parent: this.$parent,\n            layout: \'article\',\n            imageType: imageType\n          }'
                  }
                ],
                staticClass: 'image-placeholder'
              }, [
                n(t.imageTag, {
                  tag: 'component',
                  staticClass: 'image-placeholder__image',
                  attrs: {
                    lightbox: !!t.isLightbox && t.isLightbox,
                    layout: !!t.layoutAttribute && t.layoutAttribute,
                    alt: t.imageAlt,
                    'data-sizes': '0'
                  }
                })
              ], 1),
              t._v(' '),
              t.data.content.posterauthor ? n('div', {
                staticClass: 'personbox__poster-description'
              }, [
                n('span', {
                  staticClass: 'personbox__poster-author',
                  domProps: {
                    innerHTML: t._s(t.data.content.posterauthor)
                  }
                })
              ]) : t._e()
            ]),
            t._v(' '),
            t.data.content.caption ? n('h2', {
              staticClass: 'image__caption',
              domProps: {
                innerHTML: t._s(t.data.content.caption)
              }
            }) : t._e()
          ])
        ] : t._e(),
        t._v(' '),
        t.data.content.role ? n(t.headingTypeRole, {
          tag: 'component',
          staticClass: 'personbox__name',
          domProps: {
            innerHTML: t._s(t.data.content.role)
          }
        }) : t._e(),
        t._v(' '),
        t.data.content.bio ? n('div', {
          staticClass: 'personbox__bio',
          attrs: {
            'data-team-paragraph': ''
          },
          domProps: {
            innerHTML: t._s(t.data.content.bio)
          }
        }) : t._e()
      ], 2) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  1086: function (t, e, n) {
    var r = n(771);
    t.exports = function (t, e) {
      if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }),
      e && r(t, e)
    },
    t.exports.default = t.exports,
    t.exports.__esModule = !0
  },
  1087: function (t, e, n) {
    var r = n(18).default,
    o = n(1088);
    t.exports = function (t, e) {
      return !e || 'object' !== r(e) && 'function' != typeof e ? o(t) : e
    },
    t.exports.default = t.exports,
    t.exports.__esModule = !0
  },
  1088: function (t, e) {
    t.exports = function (t) {
      if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return t
    },
    t.exports.default = t.exports,
    t.exports.__esModule = !0
  },
  1089: function (t, e, n) {
    var r = n(816),
    o = n(771),
    c = n(1090),
    l = n(1091);
    function d(e) {
      var n = 'function' == typeof Map ? new Map : void 0;
      return t.exports = d = function (t) {
        if (null === t || !c(t)) return t;
        if ('function' != typeof t) throw new TypeError('Super expression must either be null or a function');
        if (void 0 !== n) {
          if (n.has(t)) return n.get(t);
          n.set(t, e)
        }
        function e() {
          return l(t, arguments, r(this).constructor)
        }
        return e.prototype = Object.create(t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }),
        o(e, t)
      },
      t.exports.default = t.exports,
      t.exports.__esModule = !0,
      d(e)
    }
    t.exports = d,
    t.exports.default = t.exports,
    t.exports.__esModule = !0
  },
  1090: function (t, e) {
    t.exports = function (t) {
      return - 1 !== Function.toString.call(t).indexOf('[native code]')
    },
    t.exports.default = t.exports,
    t.exports.__esModule = !0
  },
  1091: function (t, e, n) {
    var r = n(771),
    o = n(1092);
    function c(e, n, l) {
      return o() ? (t.exports = c = Reflect.construct, t.exports.default = t.exports, t.exports.__esModule = !0) : (t.exports = c = function (t, e, n) {
        var a = [
          null
        ];
        a.push.apply(a, e);
        var o = new (Function.bind.apply(t, a));
        return n && r(o, n.prototype),
        o
      }, t.exports.default = t.exports, t.exports.__esModule = !0),
      c.apply(null, arguments)
    }
    t.exports = c,
    t.exports.default = t.exports,
    t.exports.__esModule = !0
  },
  1092: function (t, e) {
    t.exports = function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [
        ], (function () {
        }))),
        !0
      } catch (t) {
        return !1
      }
    },
    t.exports.default = t.exports,
    t.exports.__esModule = !0
  },
  1093: function (t, e, n) {
    'use strict';
    n(817)
  },
  1094: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.widget--sport{padding:0}.widget--sport--top-separated{margin-top:24px;padding:24px 0 0;border-top:1px solid #ebebeb;border-top:1px solid var(--grayLight)}@media (min-width:768px){.widget--sport--top-separated{margin-top:16px;padding-top:16px}}@media (min-width:1372px){.widget--sport--top-separated{margin-top:24px;padding-top:24px}}@media (min-width:1548px){.widget--sport--top-separated{margin-top:40px;padding-top:40px}}.widget--sport .hs-block-header{border-top-width:0!important}',
    '']),
    t.exports = r
  },
  1097: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.widget--iframe{width:100%;max-width:calc(100% - 48px);margin:24px;padding:0}@media (min-width:768px){.widget--iframe{max-width:calc(100% + 32px);margin:16px 0}}@media (min-width:1372px){.widget--iframe{max-width:100%;margin:24px 0}}@media (min-width:1548px){.widget--iframe{max-width:100%;margin:40px 0}}.widget__row .widget--iframe{margin:24px 24px 0;padding:24px 0;border-top:1px solid #ebebeb;border-top:1px solid var(--grayLight)}@media (min-width:768px){.widget__row .widget--iframe{max-width:calc(100% - 32px);margin:16px 16px 0;padding:16px 0}}@media (min-width:1372px){.widget__row .widget--iframe{max-width:calc(100% - 48px);margin:24px 24px 0;padding:24px 0}}@media (min-width:1548px){.widget__row .widget--iframe{max-width:calc(100% - 80px);margin:40px 40px 0;padding:40px 0}}.widget__area .widget--iframe{max-width:100%;margin-right:0;margin-left:0;padding-bottom:0}.widget__area .widget--iframe iframe{border:0;width:100%}',
    '']),
    t.exports = r
  },
  111: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'WidgetListNotPaged',
      components: {
        WidgetTitle: n(41).default,
        SimpleArticle: function () {
          return Promise.resolve().then(n.bind(null, 51))
        }
      },
      props: {
        data: {
          type: Object,
        default:
          function () {
            return {
              content: {
              },
              styles: {
              }
            }
          }
        }
      },
      computed: {
        isInNewLine: function () {
          var t,
          e,
          n;
          return 'widget__row' === (null === (t = this.$parent) || void 0 === t || null === (e = t.$parent) || void 0 === e || null === (n = e.$el) || void 0 === n ? void 0 : n.className)
        }
      },
      created: function () {
        this.data.content && (this.data.content['widget-title-icon'] = '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="5" fill="none" class="widget__titleicon"><path stroke="#000" d="M9.5 4.5l2-2-2-2"/><path stroke="#000" stroke-width=".5" d="M.25 2.25h10.5v.5H.25z"/></svg>')
      }
    },
    o = n(1),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.data.containers || t.data.content ? n('div', {
        staticClass: 'widget--list-notpaged',
        class : {
          'widget--2of3': t.isInNewLine
        }
      }, [
        t.data.content['widget-title'] ? n('WidgetTitle', {
          attrs: {
            data: t.data.content
          }
        }) : t._e(),
        t._v(' '),
        n('SimpleArticle', {
          attrs: {
            data: Object.assign({
            }, t.data.content.list, {
              styles: t.data.styles
            }),
            size: 'paginated'
          }
        })
      ], 1) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  112: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'MarketIframeWidget',
      props: {
        data: {
          type: Object,
        default:
          function () {
            return {
              content: {
              }
            }
          }
        }
      },
      computed: {
        params: function () {
          return !!this.data.content && this.data.content.idms.params
        }
      },
      mounted: function () {
        this.initIframe()
      },
      methods: {
        initIframe: function () {
          this.iframeEl = document.createElement('iframe'),
          this.iframeEl.setAttribute('src', decodeURIComponent(this.params.url) + '#market-widget-'.concat(this.data.id)),
          this.iframeEl.setAttribute('class', 'market-iframe'),
          this.iframeEl.setAttribute('id', 'market-widget-'.concat(this.data.id)),
          this.iframeEl.setAttribute('allowfullscreen', 'false'),
          this.iframeEl.setAttribute('style', 'border:0;width:100%'),
          this.$el.appendChild(this.iframeEl)
        }
      }
    },
    o = (n(762), n(1)),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.params ? n('div', {
        staticClass: 'widget widget--iframe'
      }) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  1144: function (t, e, n) {
    'use strict';
    n(851)
  },
  1145: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.personbox{width:280px;margin-bottom:56px;padding-bottom:32px;font-family:nzz-sans-serif,Arial;border-bottom:1px solid #000;border-bottom:1px solid var(--black)}@media (min-width:768px){.personbox{width:520px;margin-bottom:64px}}.personbox__poster{width:100%;max-width:240px;margin:32px 0 24px}.personbox__poster .image-placeholder__image{position:relative;z-index:20;display:block;width:100%;height:auto}.personbox__poster-description{margin-top:4px;font-size:.625rem;line-height:.875rem;text-align:right;color:#707070;color:var(--grayMedium)}.personbox__bio,.personbox__name{font-size:1rem;line-height:1.625rem}@media (min-width:768px){.personbox__bio,.personbox__name{font-size:1.125rem;line-height:1.75rem}}.personbox__name{font-weight:500}',
    '']),
    t.exports = r
  },
  1146: function (t, e, n) {
    'use strict';
    n(852)
  },
  1147: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '\n\n\n\n\n\n\n\n\n/*! purgecss start ignore */.widget--qembed.q-embed.widget--fullwidth{padding-left:24px;padding-right:24px}\n/*! purgecss end ignore */',
    '']),
    t.exports = r
  },
  1193: function (t, e, n) {
    'use strict';
    n(877)
  },
  1194: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.recommendations.slider{margin-left:0;margin-right:0;margin-bottom:24px}@media (min-width:768px){.recommendations.slider{padding-left:16px;padding-right:16px;margin-left:0}}@media (min-width:1372px){.recommendations.slider{padding-left:24px;padding-right:24px;margin-left:0;margin-bottom:48px}}@media (min-width:1548px){.recommendations.slider{padding-left:40px;padding-right:40px;margin-left:0;margin-bottom:80px}}.recommendations .widget__title{display:block;font-size:1.5rem;line-height:1.5}@media (min-width:768px){.recommendations .widget__title{text-align:center;margin-bottom:32px}}@media (min-width:1372px){.recommendations .widget__title{font-size:2.25rem;line-height:1.22;margin-bottom:48px}}@media (min-width:1548px){.recommendations .widget__title{margin-bottom:80px}}',
    '']),
    t.exports = r
  },
  1202: function (t, e, n) {
    'use strict';
    n(882)
  },
  1203: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.related{display:flex;flex-wrap:wrap;align-items:center;max-width:720px;font-family:nzz-sans-serif,Arial;margin-top:16px}@media (min-width:1548px){.related{margin-top:24px}}.related__label{width:100%;font-size:1rem;line-height:1.375rem;font-weight:400}.related__button{margin:8px 8px 0 0;padding:0 16px;font-size:.875rem;line-height:2.625rem;font-family:nzz-sans-serif,Arial;color:#000;color:var(--black);text-decoration:none;background:#f5f5f5;background:var(--grayUltraLight);border-radius:12px}.related__button:hover{background:#ebebeb;background:var(--grayLight)}',
    '']),
    t.exports = r
  },
  1204: function (t, e, n) {
    'use strict';
    n(883)
  },
  1205: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.image-description{display:flex;flex-direction:column;margin-top:16px;font-family:nzz-sans-serif,Arial}.image-description a{color:inherit}@media (min-width:768px){.image-description{flex-direction:row;justify-content:space-between}}.image-description--fullwidth{margin-right:24px;margin-left:24px}@media (min-width:768px){.image-description--fullwidth{margin-right:24px;margin-left:24px}}@media (min-width:1372px){.image-description--fullwidth{margin-left:0;margin-right:0}}@media (min-width:1548px){.image-description--fullwidth{margin-left:0;margin-right:0}}.image-description--small{flex-direction:column}.image-description__caption{font-weight:300;font-size:.875rem;line-height:1.57;color:#333;color:var(--grayDark)}@media (min-width:1372px){.image-description__caption{max-width:640px}}@media (min-width:768px){.image-description__caption--large{font-size:1rem;line-height:1.62}}@media (min-width:1025px) and (max-width:1199px){.image-description__caption--large{max-width:816px}}@media (min-width:1548px){.image-description__caption--large{max-width:992px}}.image-description__author{margin-top:4px;font-weight:300;font-size:.625rem;line-height:1.4;color:#707070;color:var(--grayMedium)}@media (min-width:768px){.image-description__author{display:flex;flex-shrink:0;flex-direction:column;width:160px;margin-top:0;margin-left:16px;text-align:right}}.image-description__author--small{width:auto;margin-left:0;text-align:left}@media (min-width:768px){.image-description__author--small{margin-top:4px}}.image-description__author-single{margin-right:8px}@media (min-width:768px){.image-description__author-single{margin-right:0}}@media (min-width:1116px){.image-description--fullwidth{margin-left:0;margin-right:0}}',
    '']),
    t.exports = r
  },
  1206: function (t, e, n) {
    'use strict';
    n(884)
  },
  1207: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.topic-info{margin-top:16px;font-family:nzz-sans-serif,Arial}@media (min-width:1548px){.topic-info{margin-top:24px}}.topic-info__pretitle{font-size:1rem;line-height:1.375rem}.topic-info__title{font-size:1.375rem;line-height:1.875rem}@media (min-width:768px){.topic-info__title{font-size:2rem;line-height:2.625rem}}.topic-info__description{margin-top:16px;font-size:.875rem;line-height:1.375rem;max-width:720px}@media (min-width:768px){.topic-info__description{font-size:1rem;line-height:1.5rem}}@media (min-width:1548px){.topic-info__description{margin-top:24px}}',
    '']),
    t.exports = r
  },
  1208: function (t, e, n) {
    'use strict';
    n(885)
  },
  1209: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.container__header-logo{margin-bottom:24px}.container__header-text{padding-top:16px}',
    '']),
    t.exports = r
  },
  1210: function (t, e, n) {
    'use strict';
    n(886)
  },
  1211: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.widget--sportdaten{width:100%}',
    '']),
    t.exports = r
  },
  122: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(42),
    o = n(25),
    c = n(67),
    l = {
      name: 'PageContainerEmphasis',
      components: {
        WidgetRow: o.default,
        HeadlineTitle: r.default
      },
      mixins: [
        c.a
      ],
      props: {
        data: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        },
        componenttype: {
          type: String,
        default:
          function () {
            return ''
          }
        },
        pagetype: {
          type: String,
        default:
          function () {
            return ''
          }
        }
      },
      computed: {
        hasHeadline: function () {
          return !!this.data.content && (this.data.content.title && !this.data.content.image && !1)
        }
      },
      methods: {
        getClass: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          },
          n = 'pageelement pageelement--'.concat(this.getIdentifier(t));
          return Object.entries(e).forEach((function (style) {
            n = n + ' ' + style[1]
          })),
          n
        }
      }
    },
    d = n(1),
    component = Object(d.a) (l, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.data ? n('section', {
        class : [
          t.getClass(t.componenttype, t.data.styles),
          t.hasHeadline ? 'hasHeadline' : null
        ],
        attrs: {
          'data-source-element': 'Container-Schwerpunkt',
          'data-nzz-tid': 'container-exclusive',
          'data-nzz-container': '',
          'data-grows-exp': t.experimentTitle
        }
      }, [
        n('div', {
          staticClass: 'pageelement__inner'
        }, [
          t.data.content ? n('HeadlineTitle', {
            attrs: {
              data: t.data.content
            }
          }) : t._e(),
          t._v(' '),
          t.data.containers ? t._l(t.data.containers['widget-row-area'], (function (e) {
            return n('WidgetRow', {
              key: 'scp-emph-row-' + e.id,
              attrs: {
                data: e,
                pagetype: t.pagetype,
                componenttype: t.getIdentifier(e.identifier)
              }
            })
          })) : t._e()
        ], 2)
      ]) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  123: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(3),
    o = n.n(r),
    c = n(25),
    l = n(366),
    d = n(67),
    f = n(367),
    h = n(368);
    function m(object, t) {
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
    function v(t) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {
        };
        i % 2 ? m(Object(source), !0).forEach((function (e) {
          o() (t, e, source[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : m(Object(source)).forEach((function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
        }))
      }
      return t
    }
    var _ = {
      name: 'PageContainerExclusive',
      components: {
        WidgetRow: c.default,
        RelatedTopics: l.default,
        ImageDescription: f.default,
        TopicInfo: h.default
      },
      mixins: [
        d.a
      ],
      props: {
        data: {
          type: Object,
        default:
          function () {
            return {
              content: {
              },
              containers: {
              }
            }
          }
        },
        componenttype: {
          type: String,
        default:
          function () {
            return ''
          }
        },
        pagetype: {
          type: String,
        default:
          function () {
            return ''
          }
        },
        sourceelement: {
          type: String,
        default:
          'Container-exklusiv'
        }
      },
      computed: {
        imageType: function () {
          return this.$store.state.isrendition ? 'fragment' : ''
        },
        rows: function () {
          var t;
          return null === (t = this.data.containers) || void 0 === t ? void 0 : t['widget-row-area'].filter((function (t) {
            var e,
            n;
            return null === (e = t.containers) || void 0 === e || null === (n = e['widget-area']) || void 0 === n ? void 0 : n.some((function (t) {
              var e,
              n,
              r;
              return (null === (e = t.content) || void 0 === e || null === (n = e['nzz-feed']) || void 0 === n || null === (r = n.articles) || void 0 === r ? void 0 : r.length) > 0
            }))
          }))
        },
        hasFeatured: function () {
          return this.rows.some((function (t) {
            var e,
            n;
            return null === (e = t.containers) || void 0 === e || null === (n = e['widget-area']) || void 0 === n ? void 0 : n.some((function (t) {
              var e;
              return null === (e = t.identifier) || void 0 === e ? void 0 : e.includes('.widget--topic-featured')
            }))
          }))
        },
        isFirstPage: function () {
          var t,
          e;
          return 1 === (null === (t = this.$store.state.metadata.paginationWidget) || void 0 === t || null === (e = t.currentPage) || void 0 === e ? void 0 : e.id)
        },
        relatedTopics: function () {
          return this.data.content && this.data.content.relatedTopics ? this.data.content.relatedTopics : null
        },
        hasHeadline: function () {
          return !!this.data.content && (this.data.content.title && !this.data.content.image && !1)
        },
        isRegio: function () {
          return !1
        },
        teaserImage: function () {
          var t,
          image = null === (t = this.data.content) || void 0 === t ? void 0 : t.image;
          image && (image.height = '', image.width = '');
          var e = null == image ? void 0 : image.croppedUrl;
          return e ? v(v({
          }, image), {
          }, {
            url: e.split('?') [0]
          }) : null
        }
      },
      head: function () {
        var script = [
        ];
        if (this.data.content && this.data.content.image) {
          var t = this.data.content.image,
          e = t.url,
          n = t.width,
          r = t.height;
          script.push({
            innerHTML: JSON.stringify({
              '@type': 'ImageObject',
              url: e,
              width: n,
              height: r
            }),
            type: 'application/ld+json',
            preserve: 'preserve',
            hid: 'ld-json-topic-'.concat(this.data.content.title)
          })
        }
        return {
          script: script
        }
      },
      methods: {
        getClass: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          },
          n = 'pageelement pageelement--'.concat(this.getIdentifier(t));
          return Object.entries(e).forEach((function (style) {
            n = n + ' ' + style[1]
          })),
          n
        }
      }
    },
    w = (n(1208), n(1)),
    component = Object(w.a) (_, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.data ? n('section', {
        class : [
          t.getClass(t.componenttype, t.data.styles),
          t.hasHeadline ? 'hasHeadline' : null
        ],
        attrs: {
          'data-source-element': t.sourceelement,
          'data-nzz-tid': 'container-exclusive',
          'data-nzz-container': '',
          'data-grows-exp': t.experimentTitle
        }
      }, [
        n('div', {
          staticClass: 'pageelement__inner'
        }, [
          n('div', {
            staticClass: 'widget__row',
            class : {
              'widget__row--with-featured-topics': t.hasFeatured,
              'widget__row--above-pagination': !t.isFirstPage
            }
          }, [
            n('div', {
              staticClass: 'widget--topic-header'
            }, [
              t.teaserImage ? n('figure', [
                n('div', {
                  directives: [
                    {
                      name: 'srcset',
                      rawName: 'v-srcset',
                      value: {
                        teaserImage: t.teaserImage,
                        parent: this.$parent,
                        layout: 'header',
                        imageType: t.imageType
                      },
                      expression: '{\n              teaserImage,\n              parent: this.$parent,\n              layout: \'header\',\n              imageType: imageType\n            }'
                    }
                  ],
                  staticClass: 'image-placeholder'
                }, [
                  n('img', {
                    tag: 'component',
                    staticClass: 'image-placeholder__image',
                    attrs: {
                      alt: t.data.content.title,
                      'data-sizes': '0'
                    }
                  })
                ], 1),
                t._v(' '),
                t.teaserImage.imageCredits ? n('figcaption', [
                  n('ImageDescription', {
                    attrs: {
                      data: Object.assign({
                      }, t.data, {
                        content: Object.assign({
                        }, t.data.content, {
                          author: t.teaserImage.imageCredits
                        })
                      })
                    }
                  })
                ], 1) : t._e()
              ]) : t._e(),
              t._v(' '),
              n('TopicInfo', {
                attrs: {
                  data: t.data
                }
              }),
              t._v(' '),
              t.relatedTopics ? n('RelatedTopics', {
                attrs: {
                  'related-topics': t.relatedTopics
                }
              }) : t._e()
            ], 1)
          ]),
          t._v(' '),
          t._l(t.rows, (function (e) {
            return n('WidgetRow', {
              key: 'scp-excl-row-' + e.id + '-' + t.$store.state.isrendition,
              attrs: {
                data: e,
                pagetype: t.pagetype,
                componenttype: t.getIdentifier(e.identifier)
              }
            })
          }))
        ], 2)
      ]) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  125: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(42),
    o = n(67),
    c = {
      name: 'PageContainerPersonalized',
      components: {
        WidgetRow: function () {
          return Promise.resolve().then(n.bind(null, 25))
        },
        HeadlineTitle: r.default
      },
      mixins: [
        o.a
      ],
      props: {
        data: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        },
        componenttype: {
          type: String,
        default:
          function () {
            return ''
          }
        },
        pagetype: {
          type: String,
        default:
          function () {
            return ''
          }
        },
        sourceelement: {
          type: String,
        default:
          function () {
            return this.data && this.data.experimentTitle ? 'Container-Personalized-'.concat(this.data.experimentTitle) : 'Container-Personalized'
          }
        }
      },
      data: function () {
        return {
          loaded: !1
        }
      },
      computed: {
        legalPersonalisation: function () {
          return !this.$store.state.features.legalPersonalisation || this.$store.getters.knownUser.legalPersonalisation
        },
        hasHeadline: function () {
          return !!this.data.content && (this.data.content.title && !this.data.content.image && !1)
        }
      },
      mounted: function () {
        this.loaded = !0
      },
      methods: {
        getClass: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          },
          n = 'pageelement pageelement--'.concat(this.getIdentifier(t));
          return Object.entries(e).forEach((function (style) {
            n = n + ' ' + style[1]
          })),
          n
        }
      }
    },
    l = n(1),
    component = Object(l.a) (c, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('section', {
        directives: [
          {
            name: 'show',
            rawName: 'v-show',
            value: t.legalPersonalisation && t.data && t.$store.getters.knownUser.exists,
            expression: 'legalPersonalisation && data && $store.getters.knownUser.exists'
          }
        ],
        class : [
          t.getClass(t.componenttype, t.data.styles),
          t.hasHeadline ? 'hasHeadline' : null
        ],
        attrs: {
          'data-source-element': t.sourceelement,
          'data-nzz-tid': 'container',
          'data-nzz-container': '',
          'data-grows-exp': t.experimentTitle
        }
      }, [
        t.legalPersonalisation && t.data && t.$store.getters.knownUser.exists ? n('div', {
          staticClass: 'pageelement__inner'
        }, [
          t.data.content ? n('HeadlineTitle', {
            attrs: {
              data: t.data.content
            }
          }) : t._e(),
          t._v(' '),
          t.data.containers ? t._l(t.data.containers['widget-row-area'], (function (e) {
            return n('WidgetRow', {
              key: 'scp-pers-row-' + e.id + '-' + t.$store.state.isrendition,
              attrs: {
                data: e,
                pagetype: t.pagetype,
                componenttype: t.getIdentifier(e.identifier)
              }
            })
          })) : t._e()
        ], 2) : t._e()
      ])
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  1250: function (t, e, n) {
    'use strict';
    n(909)
  },
  1251: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.widget--sportdaten{width:100%}',
    '']),
    t.exports = r
  },
  126: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(42),
    o = n(25),
    c = n(67),
    l = {
      name: 'PageContainerRecommendations',
      components: {
        WidgetRow: o.default,
        HeadlineTitle: r.default
      },
      mixins: [
        c.a
      ],
      props: {
        data: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        },
        componenttype: {
          type: String,
        default:
          function () {
            return ''
          }
        },
        pagetype: {
          type: String,
        default:
          function () {
            return ''
          }
        },
        sourceelement: {
          type: String,
        default:
          function () {
            return this.data && this.data.experimentTitle ? 'container-top-empfehlungen-'.concat(this.data.experimentTitle) : 'container-top-empfehlungen'
          }
        }
      },
      computed: {
        hasHeadline: function () {
          return !!this.data.content && (this.data.content.title && !this.data.content.image && !1)
        }
      },
      methods: {
        getClass: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          },
          n = 'pageelement pageelement--'.concat(this.getIdentifier(t));
          return Object.entries(e).forEach((function (style) {
            n = n + ' ' + style[1]
          })),
          n
        }
      }
    },
    d = n(1),
    component = Object(d.a) (l, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.data ? n('section', {
        class : [
          t.getClass(t.componenttype, t.data.styles),
          t.hasHeadline ? 'hasHeadline' : null
        ],
        attrs: {
          'data-source-element': t.sourceelement,
          'data-nzz-tid': 'container-recommendation',
          'data-nzz-container': '',
          'data-grows-exp': t.experimentTitle
        }
      }, [
        n('div', {
          staticClass: 'pageelement__inner'
        }, [
          t.data.content ? n('HeadlineTitle', {
            attrs: {
              data: t.data.content
            }
          }) : t._e(),
          t._v(' '),
          t.data.containers ? t._l(t.data.containers['widget-row-area'], (function (e) {
            return n('WidgetRow', {
              key: 'scp-recommend-row-' + e.id,
              attrs: {
                data: e,
                pagetype: t.pagetype,
                componenttype: t.getIdentifier(e.identifier)
              }
            })
          })) : t._e()
        ], 2)
      ]) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  1260: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.header-service{display:none;height:62px}@media (min-width:768px){.header-service{display:block}}.header-service__holder{max-width:1200px;height:100%;margin:auto;padding:0 24px;background-color:#fff;background-color:var(--white);max-width:100%}@media (min-width:768px){.header-service__holder{padding:0 24px}}@media (min-width:1548px){.header-service__holder{padding:0 40px}}.header-service__wrapper{display:flex;justify-content:space-between;height:100%;border-bottom:1px solid #ebebeb;border-bottom:1px solid var(--grayLight)}.header-service__container{display:flex;align-items:center;height:100%}.header-service__container--right{justify-content:flex-end}.header-service__item+.header-service__item{margin-left:24px}@media (min-width:1372px){.header-service__holder{max-width:1200px}}',
    '']),
    t.exports = r
  },
  1297: function (t, e, n) {
    'use strict';
    n(937)
  },
  1298: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.alias-teaser-embed{text-align:center;padding:24px;border:solid #ebebeb;border:solid var(--grayLight);border-width:1px 0;position:relative;margin-bottom:56px;top:8px;font-family:nzz-sans-serif,Arial}.alias-teaser-embed--left{text-align:left}@media (min-width:768px){.alias-teaser-embed{padding:32px 40px;margin-bottom:80px;top:16px}}.alias-teaser-embed .alias-teaser-embed{text-align:inherit;padding:0;border:0;position:static;margin:0}@media (min-width:768px){.alias-teaser-embed .alias-teaser-embed{padding:0;margin:0}}.alias-teaser-embed__title{font-size:1.125rem;line-height:1.625rem;font-weight:400}@media (min-width:768px){.alias-teaser-embed__title{font-size:1.25rem;line-height:1.75rem}}.alias-teaser-embed__text{margin-top:8px;font-size:.875rem;line-height:1.375rem}@media (min-width:768px){.alias-teaser-embed__text{font-size:1rem;line-height:1.5rem}}.alias-teaser-embed__text:first-child{margin-top:0}',
    '']),
    t.exports = r
  },
  1305: function (t, e, n) {
    'use strict';
    n(941)
  },
  1306: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.content-table{position:relative;font-size:1rem;line-height:1.5;font-family:nzz-sans-serif,Arial;padding:0 24px;margin-bottom:48px}.content-table:after{content:"";display:block;margin-top:16px;padding-top:16px;border-top:1px solid #000;border-top:1px solid var(--black)}@media (min-width:768px){.content-table{font-size:1.125rem;line-height:1.56;margin-left:auto;margin-right:auto;margin-bottom:64px;padding-left:0;padding-right:0;width:520px}}.content-table__title{font-size:1.125rem;line-height:1.75rem;font-weight:500;padding:16px 0}.content-table__list{padding:0}.content-table__anchor{position:absolute;top:-88px;left:0}.content-table__item{list-style:none}.content-table__link{color:#000;cursor:pointer;display:flex;position:relative;text-decoration:none;padding:16px 0}@media (min-width:768px){.content-table__link{padding-right:40px}}.content-table__link-index{flex-grow:0;flex-shrink:0;width:24px}@media (min-width:768px){.content-table__link-index{width:40px}}.content-table__link-text{flex-grow:1}.content-table__link-icon{width:56px;flex-grow:0;flex-shrink:0;display:flex;justify-content:center;align-items:center}',
    '']),
    t.exports = r
  },
  1311: function (t, e, n) {
    'use strict';
    n(944)
  },
  1312: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.facebook .fb-post>:first-child{max-width:calc(100vw - 48px)!important}.facebook .fb-post iframe{max-width:100%}',
    '']),
    t.exports = r
  },
  1363: function (t, e, n) {
    'use strict';
    n(971)
  },
  1364: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.content-navigation{padding:16px 24px 0;margin-top:16px;position:relative;font-family:chm-sans-serif}.content-navigation:before{border-top:1px solid #ebebeb;border-top:1px solid var(--grayLight);content:"";left:24px;right:24px;top:0;position:absolute}@media (min-width:768px){.content-navigation{padding:24px 24px 0;margin-top:24px}}@media (min-width:1372px){.content-navigation{padding:24px 40px 0}.content-navigation:before{left:40px;right:40px}}.content-navigation__list{display:flex;flex-wrap:wrap;list-style:none;padding:0;margin-top:-8px}.content-navigation__item{display:block;margin-right:8px;margin-top:8px;height:28px;text-decoration:none;line-height:1}.content-navigation__link{display:block;padding:7px 14px;height:28px;border-radius:3px;background:#ebebeb;background:var(--grayLight);color:#333;color:var(--grayDark);text-decoration:none}.content-navigation__title{font-size:.875rem;line-height:125%;letter-spacing:.01em;font-weight:700;color:#000;color:var(--black);margin-bottom:16px}@media (min-width:768px){.content-navigation__title{font-size:1.125rem;margin-bottom:24px;line-height:1}}',
    '']),
    t.exports = r
  },
  1365: function (t, e, n) {
    'use strict';
    n(972)
  },
  1366: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.insert{position:relative;padding-top:20px;margin-bottom:80px}@media (min-width:768px){.insert{margin-bottom:160px}}.insert a,.insert a:hover{white-space:normal;color:#13175f;color:var(--blueDark);border-bottom:1px solid #13175f;border-bottom:1px solid var(--blueDark);padding-bottom:1px;background-image:none}.insert .ql-container.ql-bubble:not(.ql-disabled) a{white-space:normal}.insert .button,.insert .button:hover{color:#fff;padding-bottom:0;border:none;font-size:.875rem;text-decoration:none}@media (min-width:768px){.insert .button,.insert .button:hover{font-size:1rem}}.insert__wrapper{padding:0 0 0 24px;border-left:1px solid #ebebeb;border-left:1px solid var(--grayLight)}.insert__content-cta{margin-bottom:40px}.insert__content-cta a{margin-right:16px}.insert__content-cta a~a{margin-top:8px}@media (min-width:768px){.insert__content-cta a~a{margin-top:0}}.insert__call-to-action{margin-top:40px}@media (min-width:768px){.insert__call-to-action{margin-top:64px}}.insert__text{margin-bottom:34px}@media (min-width:768px){.insert__text{margin-bottom:40px}}.insert__text h2{margin:0 0 32px;font-family:nzz-sans-serif,Arial;font-weight:700;font-size:1.1875rem;line-height:1.38}@media (min-width:768px){.insert__text h2{font-size:1.5rem;margin-bottom:40px}}.insert__text h2:empty{display:none}.insert__text p{font-size:1.125rem;line-height:1.57}@media (min-width:768px){.insert__text p{font-size:1.3125rem}}.insert p{margin-bottom:0}',
    '']),
    t.exports = r
  },
  137: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'IframeWidget',
      props: {
        data: {
          type: Object,
        default:
          function () {
            return {
              content: {
              }
            }
          }
        }
      }
    },
    o = (n(762), n(1)),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.data.content && t.data.content.iframe ? n('div', {
        staticClass: 'widget widget--iframe'
      }, [
        n('div', {
          domProps: {
            innerHTML: t._s(t.data.content.iframe.html || t.data.content.iframe)
          }
        })
      ]) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  1385: function (t, e, n) {
    'use strict';
    n(982)
  },
  1386: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.horizontal-scroll{position:relative}.tags--articlemetainfo .horizontal-scroll{margin-bottom:40px}.horizontal-scroll__frame{overflow:hidden}.horizontal-scroll__content{overflow-x:scroll;overflow-y:hidden;padding-bottom:30px;margin-bottom:-30px}.horizontal-scroll__overflow{position:absolute;top:0;bottom:0;width:70px;background:linear-gradient(90deg,hsla(0,0%,100%,0),#fff 50px);pointer-events:none}.horizontal-scroll__overflow--back{left:-1px;transform:rotate(180deg)}.horizontal-scroll__overflow--forward{right:-1px}.horizontal-scroll__move{display:none;position:absolute;top:-14px;width:44px;height:56px;padding-left:15px;align-items:center;justify-content:flex-start}@media (min-width:768px){.horizontal-scroll__move{display:flex}}.horizontal-scroll__move--back{left:-22px;transform:rotate(180deg)}.horizontal-scroll__move--forward{right:-22px}',
    '']),
    t.exports = r
  },
  1393: function (t, e, n) {
    'use strict';
    n(987)
  },
  1394: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.page-gallery{font-family:nzz-sans-serif,Arial}.page-gallery__slider{position:relative;margin-left:-24px;margin-right:-24px}@media (min-width:768px){.page-gallery__slider{margin-left:0;margin-right:0}}.page-gallery__slide{width:100%;height:auto}.page-gallery__image{-o-object-fit:contain;object-fit:contain}.page-gallery__button{display:none;cursor:pointer;border:0}@media (min-width:768px){.page-gallery__button{display:block;position:absolute;top:50%;width:56px;height:56px;background:#131313;opacity:.8}.page-gallery__button[disabled],.page-gallery__button[disabled]:hover{display:none}.page-gallery__button--prev{left:0;transform:translateY(-50%) rotate(90deg)}.page-gallery__button--next{right:0;transform:translateY(-50%) rotate(-90deg)}}.page-gallery__infobox{position:absolute;bottom:0;left:0;right:0;height:148px;background:linear-gradient(180deg,transparent,rgba(0,0,0,.5));pointer-events:none}@media (min-width:768px){.page-gallery__infobox{height:268px}}@media (min-width:1372px){.page-gallery__infobox{height:255px}}@media (min-width:1548px){.page-gallery__infobox{height:286px}}.page-gallery__info{color:#fff;position:absolute;bottom:24px;left:24px;right:24px;font-size:.875rem;line-height:140%}@media (min-width:768px){.page-gallery__info{font-size:1rem}}@media (min-width:1372px){.page-gallery__info{font-size:1.125rem}}.page-gallery__progress.slider-progress{margin-top:32px}@media (min-width:768px){.page-gallery__progress.slider-progress{margin-top:40px}}@media (min-width:1372px){.page-gallery__progress.slider-progress{margin-top:40px}}@media (min-width:1548px){.page-gallery__progress.slider-progress{margin-top:40px}}.page-gallery__caption.image-description{margin-top:24px;font-size:1rem;line-height:1.375rem}@media (min-width:768px){.page-gallery__caption.image-description{margin-top:24px}}@media (min-width:1372px){.page-gallery__caption.image-description{margin-top:24px;font-size:1.125rem;line-height:1.5625rem}}@media (min-width:1548px){.page-gallery__caption.image-description{margin-top:18px}}@media (min-width:768px){.page-gallery .flickity-viewport.scrollable:after{content:none}}',
    '']),
    t.exports = r
  },
  1406: function (t, e, n) {
    'use strict';
    n(995)
  },
  1407: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.header__scrollwrapper{height:56px;min-height:56px}@media (min-width:768px){.header__scrollwrapper{height:120px}}@media (min-width:1372px){.header__scrollwrapper{height:136px}}.header__scrollwrapper--article{height:56px}',
    '']),
    t.exports = r
  },
  146: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(41),
    o = n(51),
    c = n(31),
    l = {
      name: 'WidgetStoryTeaser',
      components: {
        WidgetTitle: r.default,
        SimpleArticle: o.default,
        NzzLink: c.default
      },
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
          baseClass: 'widget--story-teaser',
          tid: 'widget-story-teaser',
          teaserSize: 'story-teaser',
          sourceElem: 'Widget-Story-Teaser',
          flickityOptions: {
            cellSelector: '.teaser--story-small',
            freeScroll: !1,
            groupCells: '90%',
            dragThreshold: 10,
            cellAlign: 'left',
            contain: !0,
            pageDots: !1,
            draggable: !0
          },
          sliderIndex: 0,
          isSSR: !0
        }
      },
      computed: {
        articles: function () {
          return this.data && this.data.content && this.data.content.list && Array.isArray(this.data.content.list.articles) ? this.data.content.list.articles : this.data && Array.isArray(this.data.articles) ? this.data.articles : [
          ]
        },
        firstArticle: function () {
          return {
            articles: [
              this.articles[0]
            ]
          }
        },
        relatedArticles: function () {
          return {
            articles: this.articles.slice(1)
          }
        },
        shouldRenderTeaser: function () {
          return this.articles.length >= 3
        },
        item: function () {
          return this.articles && this.articles[0] && this.articles[0].metadata ? this.articles[0].metadata : {
            nzzId: '',
            publicationLastUpdated: ''
          }
        },
        linkAttr: function () {
          return this.$store.state.isrendition.indexOf('webview') > - 1 && 'gallery' === this.item.layout && this.$config.clientBaseUrl + this.item.urlPath
        }
      },
      mounted: function () {
        this.isSSR = !1
      },
      methods: {
        flickityInit: function (t) {
          var e = this;
          this.slider = t,
          this.slider.on('change', (function (t) {
            e.sliderIndex = t
          }))
        }
      }
    },
    d = n(1),
    component = Object(d.a) (l, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.shouldRenderTeaser ? n('div', {
        class : t.baseClass,
        attrs: {
          'data-nzz-tid': t.tid,
          'data-source-element-widget': t.sourceElem
        }
      }, [
        t.data.content && t.data.content['widget-title'] ? n('WidgetTitle', {
          attrs: {
            data: t.data.content
          }
        }) : t._e(),
        t._v(' '),
        n('NzzLink', {
          staticClass: 'teaser__link',
          attrs: {
            url: t.item.urlPath,
            'data-teaser-gallery': 'gallery' === t.item.layout,
            rel: !!t.item.isExternal && 'noopener',
            target: t.item.isExternal ? '_blank' : '_self',
            'data-nzz-referrer': 'teaserLink',
            title: t.$store.state.isrendition.indexOf('webview') > - 1 && 'gallery' === t.item.layout && t.item.title,
            link: t.linkAttr,
            'no-prefetch': ''
          }
        }, [
          n('SimpleArticle', {
            attrs: {
              data: t.firstArticle,
              size: 'story-big'
            }
          })
        ], 1),
        t._v(' '),
        n('div', {
          staticClass: 'teaser__story-extended',
          class : {
            'teaser__story-extended--two': 2 === t.relatedArticles.articles.length
          }
        }, [
          n('SimpleArticle', {
            attrs: {
              data: t.relatedArticles,
              size: 'story-small'
            }
          })
        ], 1),
        t._v(' '),
        n('div', {
          staticClass: 'teaser__story-extended--mobile teaser__story--mobile'
        }, [
          n('flickity', {
            ref: 'flickity',
            class : t.isSSR ? 'teaser__story-extended--ssr' : 'flickity-enabled',
            attrs: {
              options: t.flickityOptions
            },
            on: {
              init: t.flickityInit
            }
          }, [
            n('SimpleArticle', {
              attrs: {
                data: t.relatedArticles,
                size: 'story-small'
              }
            })
          ], 1),
          t._v(' '),
          n('client-only', [
            n('div', {
              staticClass: 'teaser__indicator-scroll'
            }, t._l(t.relatedArticles.articles.length, (function (e) {
              return n('div', {
                key: 'slider-indicator-' + e,
                staticClass: 'teaser__indicator-item',
                class : {
                  'teaser__indicator-item--active': t.sliderIndex + 1 === e
                }
              })
            })), 0)
          ])
        ], 1)
      ], 1) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  148: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      mixins: [
        n(64).a
      ],
      props: {
        data: {
          type: Object,
        default:
          function () {
            return {
              content: {
              }
            }
          }
        }
      },
      computed: {
        textAlignStyle: function () {
          var t;
          return null === (t = this.data.styles) || void 0 === t ? void 0 : t['alias-teaser-embed-text-align']
        },
        article: function () {
          var t,
          e;
          return null === (t = this.data.content) || void 0 === t || null === (e = t.article) || void 0 === e ? void 0 : e.metadata
        }
      }
    },
    o = (n(1297), n(1)),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.article ? n('div', {
        staticClass: 'articlecomponent alias-teaser-embed',
        class : [
          t.textAlignStyle
        ],
        attrs: {
          'data-nzz-referrer': 'aliasTeaserEmbed'
        }
      }, [
        t.article.title ? n('h3', {
          staticClass: 'alias-teaser-embed__title',
          domProps: {
            innerHTML: t._s(t.article.title)
          }
        }) : t._e(),
        t._v(' '),
        t.article.leadText ? n('p', {
          staticClass: 'alias-teaser-embed__text',
          domProps: {
            innerHTML: t._s(t.article.leadText)
          }
        }) : t._e(),
        t._v(' '),
        t.article.urlAliasTeaser && t.article.urlLabel ? n('p', {
          staticClass: 'alias-teaser-embed__text'
        }, [
          n('a', {
            attrs: {
              href: t.article.urlAliasTeaser
            },
            domProps: {
              innerHTML: t._s(t.article.urlLabel)
            }
          })
        ]) : t._e()
      ]) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  150: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(18),
    o = n.n(r),
    c = n(1086),
    l = n.n(c),
    d = (n(1087), n(816), n(1089)),
    f = n.n(d);
    function h(t, e) {
      h = function (t, e) {
        return new d(t, void 0, e)
      };
      var n = f() (RegExp),
      r = RegExp.prototype,
      c = new WeakMap;
      function d(t, e, r) {
        var o = n.call(this, t, e);
        return c.set(o, r || c.get(t)),
        o
      }
      function m(t, e) {
        var g = c.get(e);
        return Object.keys(g).reduce((function (e, n) {
          return e[n] = t[g[n]],
          e
        }), Object.create(null))
      }
      return l() (d, n),
      d.prototype.exec = function (t) {
        var e = r.exec.call(this, t);
        return e && (e.groups = m(e, this)),
        e
      },
      d.prototype[Symbol.replace] = function (t, e) {
        if ('string' == typeof e) {
          var n = c.get(this);
          return r[Symbol.replace].call(this, t, e.replace(/\$<([^>]+)>/g, (function (t, e) {
            return "$" + n[e]
          })))
        }
        if ('function' == typeof e) {
          var l = this;
          return r[Symbol.replace].call(this, t, (function () {
            var t = [
            ];
            return t.push.apply(t, arguments),
            'object' !== o() (t[t.length - 1]) && t.push(m(t, l)),
            e.apply(this, t)
          }))
        }
        return r[Symbol.replace].call(this, t, e)
      },
      h.apply(this, arguments)
    }
    var m = {
      name: 'SportWidget',
      props: {
        data: {
          type: String,
        default:
          function () {
            return ''
          }
        },
        topSeparated: {
          type: Boolean,
        default:
          !0
        }
      },
      computed: {
        dataHtml: function () {
          return this.data.replace(/<script>/gi, '<script preserve="preserve">').replace(h(/(<script preserve="preserve">\n'use strict';\n)((.+\n)+)(<\/script>)/gi, {
            code: 2
          }), (function (t, pre, code, e, n) {
            var r = code;
            return code && (r = 'window.deferred(function() {'.concat(code, '})')),
            [
              pre,
              r,
              n
            ].join('')
          }))
        }
      }
    },
    v = (n(1093), n(1)),
    component = Object(v.a) (m, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return '' != t.data ? n('div', {
        staticClass: 'widget--sport',
        class : {
          'widget--sport--top-separated': t.topSeparated
        }
      }, [
        n('div', {
          domProps: {
            innerHTML: t._s(t.dataHtml)
          }
        })
      ]) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  1531: function (t, e, n) {
    n(11).register({
      nzzas: {
        width: 150,
        height: 22,
        viewBox: '0 0 150 22',
        data: '<path pid="0" fill-rule="evenodd" clip-rule="evenodd" d="M133.323 1.277c0 1.09-.875 1.621-2.231 1.621-.957 0-1.596-.45-1.596-1.302 0-1.091.876-1.596 2.231-1.596.958 0 1.596.419 1.596 1.277zm-120.734.636a9.52 9.52 0 00-1.169-.094V.686h6.28v1.145s-.895 0-1.445.24c-.43.186-.59.616-.628 1.021-.105.812-.148 2.013-.148 4.15v9.953h-1.097L4.142 4.805v5.636c0 1.837.049 3.193.148 4.146.057.573.2 1.012.814 1.239.526.197 1.556.218 1.556.218v1.127H.37v-1.13s.896-.01 1.374-.197c.57-.22.74-.664.798-1.214.099-1.02.147-2.393.147-4.196V5.007l.001-.335c.008-1.165.012-1.795-.931-2.455C1.201 1.827 0 1.81 0 1.81V.686h3.956l10.056 11.876V7.228c0-1.985-.053-3.238-.172-4.064-.05-.468-.171-1.098-1.25-1.25zm12.763 13.92c2.791 0 4.54-.134 5.194-.841.812-.872 1.383-2.647 1.383-2.647l1.124.232s-.593 3.175-.978 4.594H18.89l-.325-.61L29.13 2.024h-4.18c-2.632.005-2.879.137-3.393 1.187a9.85 9.85 0 00-.656 1.852l-1.13-.04s.245-2.74.325-4.955h.944l.057.106v.001c.201.38.27.51 1.113.51h10.2l.29.592-10.423 14.45c.776.074 1.703.104 3.076.104zm20.788-.841c.803-.872 1.373-2.647 1.373-2.647l1.134.232s-.594 3.175-.978 4.594H34.476l-.326-.61L44.72 2.024h-4.173c-2.63.005-2.877.137-3.392 1.187a9.83 9.83 0 00-.656 1.852l-1.127-.04s.242-2.74.322-4.955h.935l.058.107c.2.38.27.51 1.113.51h10.205l.289.592-10.424 14.45c.778.074 1.704.104 3.077.104 2.79 0 4.54-.133 5.193-.84zm28.735-5.133v.002c-.014.81-.027 1.621-.027 2.378 0 3.829.08 4.148.918 4.335l.958.16v.45h-6.968v-.45l1.595-.188c.858-.16.858-.585.858-5.69 0-3.829-.373-4.733-2.633-4.733-1.755 0-3.536.851-3.536 3.218 0 6.86.053 7.126.931 7.233l1.569.16v.45h-7.578v-.45l1.568-.188c.83-.16.858-.585.858-5.69 0-3.829-.372-4.733-2.66-4.733-1.755 0-3.537.851-3.537 3.218 0 6.86.081 6.993.88 7.152l1.7.24v.452h-7.208v-.452l.77-.106c1.199-.266 1.224-.453 1.224-5.158 0-4.974-.053-5.108-.877-5.267l-1.117-.213v-.37c1.459-.3 2.884-.746 4.254-1.329l.266.077-.079 3.671.186.026c.455-1.915 2.474-3.882 5.32-3.882 2.26 0 3.404 1.09 3.404 3.59v.266h.132c.48-1.915 2.5-3.856 5.346-3.856 2.366 0 3.51 1.117 3.51 3.297 0 .757-.014 1.569-.027 2.38zm51.958 3.47c-.958 2.917-1.809 3.27-7.894 3.432 2.845-3.935 5.823-8.031 8.987-11.913V4.45h-10.983l-.024.329c-.13 1.734-.293 3.921-.662 5.972h.398l.719-2.574c.738-2.48 1.345-3.037 7.352-3.278-.704.943-1.406 1.89-2.109 2.838-2.273 3.065-4.551 6.137-6.906 9.075v.373h11.7c.054-1.782.292-4.095.532-6.276h-.372l-.738 2.42zm21.219-1.09c0 3.803.074 4.148.932 4.335l.946.154v.452h-6.995v-.452l1.622-.187c.832-.16.858-.585.858-5.69 0-3.829-.373-4.733-2.659-4.733-1.755 0-3.536.851-3.536 3.217 0 6.861.079 7.02.877 7.153l1.728.24v.452h-13.614v-.452l.903-.187c.212-.03.417-.103.6-.214.132-.1.23-.237.28-.395.211-.568.211-1.76.211-4.462 0-4.973-.02-5.107-.879-5.266l-1.115-.213v-.373c1.807-.398 3.213-.823 4.414-1.355l.266.106-.009.574a313.84 313.84 0 00-.044 4.718c0 3.415.01 5.15.128 6.055.038.243.159.465.343.628.388.235.91.343 1.617.343l.443-.06c1.196-.266 1.223-.426 1.223-5.158 0-4.974-.053-5.108-.878-5.267l-1.116-.213v-.37c1.459-.3 2.884-.746 4.254-1.329l.266.077-.08 3.671.187.026c.479-1.915 2.498-3.882 5.344-3.882 2.394 0 3.536 1.117 3.536 3.297 0 .757-.013 1.569-.026 2.38-.013.811-.027 1.622-.027 2.38zm-45.416-5.855l.344-1.941h-6.938c-3.644 0-6.063 2.18-6.063 4.68 0 2.128 1.302 3.669 3.802 4.118v.16c-2.18.266-3.936 1.064-3.936 2.286 0 .858.932 1.49 2.792 1.57v.11c-1.913.504-3.616 1.355-3.616 2.574 0 1.218 1.462 2.059 5.24 2.059 6.115 0 8.561-2.873 8.561-4.84 0-1.33-.798-2.02-2.765-2.02-1.119 0-2.391.07-3.631.137-1.177.065-2.325.128-3.283.128-.879 0-1.304-.266-1.304-.686 0-.558.825-1.224 3.537-1.33 3.83 0 6.063-2.073 6.063-4.095 0-2.5-2.552-3.696-4.653-4.254l.026-.24c1.356.221 2.741.648 4.122 1.073.569.175 1.137.35 1.702.51zm-5.63 10.85c1.01-.014 2.009-.027 2.892-.027 1.328 0 1.753.451 1.753 1.116 0 1.357-1.223 2.127-5.343 2.127-3.91 0-4.842-.664-4.842-1.544 0-.764.932-1.562 2.528-1.64v-.006c.94 0 1.981-.013 3.011-.027zm1.793-7.447c0 2.26-.638 3.032-2.632 3.032-2.313 0-3.537-1.515-3.537-4.6 0-2.5 1.117-3.244 2.66-3.244 2.16 0 3.523 1.752 3.523 4.817l-.014-.005zm15.723 5.75c.664 0 .983-.69 1.223-3.696l.32.03c-.258 3.883-1.092 5.478-2.66 5.478-1.521 0-2.154-1.064-2.207-2.817l-.16-.028c-.638 1.569-2.394 2.952-4.228 2.952-2.286 0-3.563-1.46-3.563-2.977 0-1.518 2.446-2.581 7.925-3.724v-.452c0-4.281-.425-5.211-2.421-5.211-1.675 0-2.499.77-2.499 2.392 0 .556.079 1.486.16 2.23l-2.66.399c-.16-3.963 3.511-5.93 6.303-5.93 2.499 0 3.803 1.09 3.803 3.51l-.01.344c-.029.951-.071 2.34-.071 3.352 0 3.616.132 4.148.745 4.148zm-6.01-.134c1.09 0 2.367-.506 2.526-1.596.107-.559.131-1.01.134-2.42-1.749.241-3.324.533-4.494.905-.639.185-.958.451-.958 1.064 0 1.277.93 2.047 2.792 2.047zm-19.463-3.562c-.24 3.006-.56 3.696-1.224 3.696-.613 0-.745-.532-.745-4.148 0-.959.038-2.255.065-3.198v-.002l.014-.496c0-2.42-1.302-3.51-3.8-3.51-2.795 0-6.464 1.967-6.304 5.93l2.66-.398c-.08-.745-.16-1.675-.16-2.231 0-1.622.824-2.392 2.499-2.392 1.994 0 2.42.93 2.42 5.211v.452c-5.478 1.143-7.924 2.206-7.924 3.723 0 1.518 1.277 2.978 3.563 2.978 1.835 0 3.59-1.383 4.228-2.952l.16.028c.053 1.753.686 2.817 2.207 2.817 1.568 0 2.402-1.595 2.66-5.477l-.32-.031zm-4.708 1.966c-.16 1.09-1.436 1.596-2.526 1.596-1.862 0-2.792-.77-2.792-2.047 0-.613.32-.879.958-1.064 1.169-.372 2.746-.664 4.493-.904 0 1.409-.026 1.86-.133 2.42z" _fill="#000"/>'
      }
    })
  },
  1532: function (t, e, n) {
    n(11).register({
      digitalmagazin: {
        width: 874,
        height: 128,
        viewBox: '0 0 873.75 128.19',
        data: '<path pid="0" d="M66.55 10.6a56 56 0 016.81.55c6.29.89 7 4.56 7.29 7.29.69 4.81 1 12.11 1 23.68V73.2L23.05 4H0v6.55s7 .1 10.25 2.37c6 4.2 5.42 8.19 5.42 16.26V60.8c0 10.51-.28 18.51-.86 24.45-.33 3.21-1.33 5.79-4.65 7.08-2.78 1.09-8 1.15-8 1.15v6.58h36.65v-6.57s-6-.12-9.07-1.27c-3.58-1.32-4.41-3.88-4.74-7.26-.58-5.55-.86-13.45-.86-24.16V28.02l59.67 72.18h6.39v-58c0-12.45.25-19.45.86-24.18.22-2.36 1.16-4.87 3.66-5.95 3.21-1.4 8.42-1.4 8.42-1.4V4.01H66.55zm111.49 76.76c-3.81 4.12-14 4.9-30.27 4.9-7.95 0-13.4-.18-17.92-.61l60.74-84.2-1.73-3.44h-59.44c-5.35 0-5.35-.9-6.82-3.6h-5.5c-.47 12.91-1.89 28.88-1.89 28.88l6.58.23a57.91 57.91 0 013.82-10.79c3-6.12 4.44-6.89 19.77-6.92h24.36L108.18 96.5l1.89 3.56h76.84c2.24-8.27 5.7-26.77 5.7-26.77l-6.55-1.35s-3.33 10.34-8.02 15.42zm98.87-15.42s-3.32 10.34-8 15.42c-3.81 4.12-14 4.9-30.26 4.9-8 0-13.4-.18-17.93-.61l60.74-84.2-1.72-3.44h-59.47c-5.35 0-5.35-.9-6.82-3.6h-5.5c-.47 12.91-1.88 28.88-1.88 28.88l6.57.23a57.91 57.91 0 013.82-10.79c3-6.12 4.44-6.89 19.77-6.92h24.37L199.03 96.5l1.9 3.56h76.88c2.24-8.27 5.7-26.77 5.7-26.77zm159.25-.62c0-8.83.31-18.91.31-27.74 0-12.7-6.66-19.21-20.45-19.21-16.58 0-28.36 11.31-31.15 22.47h-.77v-1.55c0-14.57-6.67-20.92-19.84-20.92-16.58 0-28.35 11.46-31 22.62l-1.08-.15.46-21.39-1.55-.46a130.65 130.65 0 01-24.79 7.74v2.17l6.51 1.24c4.8.93 5.11 1.71 5.11 30.69 0 27.42-.15 28.51-7.13 30.06l-4.49.62v2.63h42v-2.63l-9.91-1.4c-4.65-.93-5.12-1.7-5.12-41.68 0-13.79 10.38-18.75 20.61-18.75 13.33 0 15.5 5.27 15.5 27.58 0 29.75-.16 32.23-5 33.16l-9.14 1.09v2.63h44.16v-2.63l-9.14-.93c-5.12-.62-5.43-2.17-5.43-42.15 0-13.79 10.38-18.75 20.61-18.75 13.17 0 15.34 5.27 15.34 27.58 0 29.75 0 32.23-5 33.16l-9.29 1.09v2.63h40.6v-2.63l-5.58-.93c-4.88-1.09-5.35-2.95-5.35-25.26zm302.93 6.35c-5.58 17.05-10.54 19.06-46 20 16.58-22.93 33.93-46.8 52.37-69.42v-2.32h-64c-.78 10.38-1.71 24-4 36.72h2.32l4.19-15c4.3-14.45 7.84-17.7 42.84-19.1-17.36 23.24-34.56 47-52.53 69.42v2.17h68.18c.31-10.38 1.7-23.86 3.1-36.57h-2.17zm129.08 18.91c-5-1.09-5.43-3.1-5.43-25.26 0-8.83.31-18.91.31-27.74 0-12.7-6.66-19.21-20.61-19.21-16.58 0-28.35 11.46-31.14 22.62l-1.09-.15.47-21.39-1.55-.46a130.65 130.65 0 01-24.79 7.74v2.17l6.5 1.24c4.81.93 5.12 1.71 5.12 30.69 0 27.58-.16 28.51-7.13 30.06l-2.58.35c-4.12 0-7.16-.63-9.42-2a6.17 6.17 0 01-2-3.66c-.69-5.27-.75-15.38-.75-35.28 0-10.54.15-19.68.31-30.84l-1.55-.62c-7 3.1-15.19 5.58-25.72 7.9v2.17l6.5 1.24c5 .93 5.12 1.71 5.12 30.69 0 15.74 0 22.69-1.23 26a4.6 4.6 0 01-1.63 2.3 9.38 9.38 0 01-3.5 1.25l-5.26 1.09v2.63h79.33v-2.63l-10.07-1.4c-4.65-.77-5.11-1.7-5.11-41.68 0-13.79 10.38-18.75 20.61-18.75 13.32 0 15.49 5.27 15.49 27.58 0 29.75-.15 32.23-5 33.16l-9.45 1.09v2.63h40.76v-2.63zM598.09 37.2l2-11.31h-40.43c-21.23 0-35.33 12.7-35.33 27.27 0 12.4 7.59 21.38 22.16 24v.93c-12.71 1.55-22.94 6.2-22.94 13.32 0 5 5.43 8.68 16.27 9.15v.64c-11.15 2.94-21.07 7.9-21.07 15s8.52 12 30.53 12c35.64 0 49.89-16.74 49.89-28.2 0-7.75-4.65-11.78-16.11-11.78-12.71 0-28.83 1.55-40.29 1.55-5.12 0-7.6-1.55-7.6-4 0-3.25 4.81-7.13 20.61-7.75 22.32 0 35.33-12.08 35.33-23.86 0-14.57-14.87-21.54-27.11-24.79l.15-1.4c11.16 1.82 22.66 6 33.94 9.23zm-50.36 63.38c10.84 0 24-.31 34.4-.31 7.74 0 10.22 2.63 10.22 6.5 0 7.91-7.13 12.4-31.14 12.4-22.78 0-28.21-3.87-28.21-9 0-4.45 5.43-9.1 14.73-9.56zm28-43.55c0 13.17-3.72 17.67-15.34 17.67-13.48 0-20.61-8.83-20.61-26.81 0-14.56 6.51-18.9 15.5-18.9 12.59.03 20.53 10.21 20.53 28.07zm98.75 11.96c-1.4 17.52-3.26 21.54-7.13 21.54-3.57 0-4.34-3.1-4.34-24.17 0-6.66.31-16.11.47-21.54 0-14.1-7.6-20.45-22.16-20.45-16.27 0-37.66 11.46-36.73 34.55l15.5-2.32c-.47-4.34-.93-9.76-.93-13 0-9.45 4.8-13.94 14.56-13.94 11.63 0 14.11 5.42 14.11 30.37v2.63c-31.93 6.66-46.18 12.86-46.18 21.7s7.44 17.35 20.76 17.35c10.69 0 20.92-8.06 24.64-17.2l.93.16c.31 10.22 4 16.42 12.86 16.42 9.14 0 14-9.3 15.5-31.92zm-27.43 11.47c-.93 6.35-8.37 9.3-14.72 9.3-10.85 0-16.27-4.49-16.27-11.93 0-3.57 1.86-5.12 5.58-6.2 6.82-2.17 16-3.87 26.19-5.27-.02 8.21-.16 10.84-.78 14.1zM518.91 68.99c-1.4 17.52-3.26 21.54-7.13 21.54-3.57 0-4.34-3.1-4.34-24.17 0-6.66.31-16.11.46-21.54 0-14.1-7.59-20.45-22.15-20.45-16.28 0-37.66 11.46-36.73 34.55l15.5-2.32c-.47-4.34-.93-9.76-.93-13 0-9.45 4.8-13.94 14.56-13.94 11.62 0 14.1 5.42 14.1 30.37v2.63c-31.92 6.66-46.17 12.86-46.17 21.7s7.44 17.35 20.76 17.35c10.69 0 20.92-8.06 24.64-17.2l.93.16c.31 10.22 4 16.42 12.86 16.42 9.14 0 13.95-9.3 15.5-31.92zm-27.43 11.47c-.93 6.35-8.37 9.3-14.72 9.3-10.85 0-16.27-4.49-16.27-11.93 0-3.57 1.86-5.12 5.58-6.2 6.81-2.17 16-3.87 26.18-5.27 0 8.21-.15 10.84-.77 14.1zm272.43-63.57c7.9 0 13-3.1 13-9.45 0-5-3.72-7.44-9.3-7.44-7.9 0-13 2.94-13 9.3 0 4.96 3.72 7.59 9.3 7.59z"/>'
      }
    })
  },
  1535: function (t, e, n) {
    n(11).register({
      luzernerzeitung: {
        width: 1994,
        height: 254,
        viewBox: '0 0 1994 254',
        data: '<path pid="0" d="M148.5 203.501s-51.5-2.1-76.2-2.1H2.5v-6.1c22.7-3 25.8-6.9 25.8-33.4v-107c0-26.5-3.1-30.4-25.8-33.5v-6.1h91.3v6.1C71 24.4 68 28.3 68 54.8v137.4h13.7c42.2 0 48.2-14.5 66.6-67.7l5.6 1.2-5.4 77.8zm156.699-2.6l73.1-135.9h-10.6c-28.1 0-39.1.6-52.9 38.1h-5.8l8.8-46.8s20.6 1.3 42.8 1.3h61.2l-73 135.8h14.4c30 0 39.4-1.7 52.9-38.1h5.9l-8.9 46.8s-23-1.3-44.2-1.3h-63.7v.1zM649.898 55.6c-27.4-5-38.8 14.3-45.8 31.7l-5.1-32.6-48.1 17.3 2.1 4.7c15.4 0 14.1 7.6 14.1 28.199v61.6c0 23.5-.3 26-16 28.2v6.4h80.1v-6.4c-26-3-26.1-4.7-26.1-28.2v-71.4c11.2-20.2 26.5-12.9 51.5 17.3l5.8-2.6-12.5-54.2zM537.3 146.501c-7.1 14.7-19.3 23.6-34.7 23.6-26 0-41.6-25.8-42.6-60.3h79.8c1.4-27.9-12.5-55.5-50.3-55.5-37.2 0-58.5 33-58.5 75.1 0 40.9 22.6 74.1 57.9 74.1 26.3 0 46.8-23.4 53.3-55.3l-4.9-1.7zm-53-86c15.8 0 21.1 20.6 19.3 41.8h-43.7c.7-21.4 6.5-41.8 24.4-41.8zm552.9-4.901c-27.4-5-38.801 14.3-45.801 31.7l-5.1-32.5-48.1 17.2 2.1 4.7c15.4 0 14.1 7.6 14.1 28.2v61.5c0 23.5-.3 26-16 28.2v6.4h80.001v-6.4c-26.001-3-26.101-4.7-26.101-28.2V95.1c11.201-20.2 26.501-12.9 51.501 17.3l5.8-2.6-12.4-54.2zm-112.601 90.901c-7.1 14.7-19.3 23.6-34.8 23.6-26 0-41.6-25.8-42.6-60.3h79.8c1.4-27.9-12.5-55.5-50.3-55.5-37.2 0-58.5 33-58.5 75.1 0 40.9 22.6 74.1 57.9 74.1 26.3 0 46.8-23.4 53.4-55.3l-4.9-1.7zm-53-86c15.8 0 21.1 20.6 19.3 41.8h-43.7c.6-21.4 6.4-41.8 24.4-41.8zM300.7 185.601l-.9-4.3c-14.2 0-15.2-5.2-15.2-35v-91.5l-52 18.4 1.3 4.7c14.5.1 14.1 2.1 13.9 20.4v71.4c-3.6 6.2-10.5 11.6-18.8 11.6-12.3 0-21.5-11-21.5-32.2v-94.3l-52 18.4 1.3 4.7c14.7.1 14.2 2.1 14.1 22.7v56.1c-.2 24.1 12.3 47.2 39.2 47.2 17.5 0 33.9-13.1 40.9-27.7l3.6 26.1 46.1-16.7zm495.598-19.2v-65.3c0-24-12.6-46.3-39.5-46.3-23.7 0-31.1 13.1-38 26l-3.6-26-48.8 17.2 2 4.7c14.7 0 14.1 1.4 14.1 28.2v61.6c0 23.5-.3 26-16 28.2v6.4h66v-6.4c-13.2-2.1-13.4-4.7-13.4-28.2v-79.5c13.8-17.7 40.4-11 40.4 22.3v57.2c0 23.5-.3 26-16 28.2v6.4h66.1v-6.4c-13.1-2.2-13.3-4.8-13.3-28.3zm1129.602 4.201c-30.9-2.9-36.8-9.9-36.8-9.9l20.8-11.8c1.9.1 3.9.2 5.9.2 30.8 0 55.8-16.9 55.8-47 0-12.8-5.6-24.3-15.1-32.8l18 1.4h10.6l2.6-12.2h-50.3c-6.6-2.2-13.8-3.4-21.6-3.4-32.9 0-55.8 21.1-55.8 47 0 23.2 14.8 38.5 35.6 44.4l-42.8 22.3c6.7 16.1 13.1 23.4 23.7 27.6-14.1 3.7-26.6 13.2-26.6 26.6 0 20.3 24.5 31.1 58.9 31.1s79.3-16.9 79.3-53c0-26.8-43.6-28.8-62.2-30.5zm-15.2-108.5c12.8-1.6 20.2 14.3 23.1 38 2.9 23.7-.5 40.9-13.2 42.4-12.8 1.6-20.2-14.3-23.1-38-2.9-23.7.4-40.8 13.2-42.4zm2.6 182.3c-19.8 0-34.8-8.6-34.8-24.3 0-9.2 2.5-16.7 8.9-20.6 7.1 1.5 15.8 2.7 26.7 4.3 19.8 2.9 36.6 2.6 36.6 16.4-.1 14.4-15.8 24.2-37.4 24.2zm-736.9-53.103c54.1 0 62.3-7.7 82.9-57.5h6.4l-13.9 68.5c-21-.5-47.5-1.8-68-1.8l-72.1.1 98.2-176.9h-9.6c-57.4 0-54.2 8.2-76.8 57.5h-6.3l12.5-68.5c21 .5 43.1 1.8 63.6 1.8l68.4-.1-98.3 176.8h13v.1zm233.7-89.898c0-22-.2-23.9-14.7-23.9l-1.3-4.6 52.7-18.6v112.3c0 23.5.3 26 16 28.2v5.7h-68.7v-5.7c15.7-2.1 16-4.7 16-28.2v-65.2zm290.8 83.2l-.9-4.3c-14.2 0-15.2-5.2-15.2-35v-91.5l-52 18.4 1.3 4.7c14.5.1 14.1 2.1 13.9 20.4v71.4c-3.6 6.2-10.5 11.5-18.8 11.5-12.3 0-21.5-11-21.5-32.2v-94.2l-52 18.4 1.3 4.7c14.7.1 14.2 2.1 14.1 22.7v56.1c-.2 24.1 12.3 47.2 39.2 47.2 17.5 0 33.9-13.1 40.9-27.7l3.6 26.1 46.1-16.7zm-318.6-38.503c-7.1 14.7-19.3 23.6-34.7 23.6-26 0-41.6-25.8-42.6-60.3h79.8c1.4-27.9-12.5-55.5-50.3-55.5-37.2 0-58.5 33-58.5 75.1 0 40.9 22.6 74.1 57.9 74.1 26.3 0 46.8-23.4 53.3-55.3l-4.9-1.7zm-52.9-86.1c15.8 0 21.1 20.6 19.3 41.8H1305c.5-21.3 6.4-41.8 24.4-41.8zm505 105.403v-65.3c0-24.1-12.6-46.3-39.5-46.3-23.7 0-31.1 13.1-38 26l-3.6-26-48.8 17.2 2 4.7c14.7 0 14.1 1.4 14.1 28.2v61.6c0 23.5-.3 26-16 28.2v6.4h66v-6.4c-13.2-2.1-13.4-4.7-13.4-28.2v-79.5c13.8-17.7 40.3-11 40.3 22.3v57.2c0 23.5-.3 26-16 28.2v6.4h66.1v-6.4c-13-2.2-13.2-4.8-13.2-28.3zm-276.7 8.298c-6.7 5.9-12.8 8.1-20.3 8.1-10.7 0-17.1-10.3-17.1-27.2v-84.8h28.5l2.6-12.2h-31.1V13.7h-4.5c-11.8 24.5-28.7 41.5-52.4 50.1l-1.4 6h21.1v95.9c0 24.7 16.4 37.2 35 37.2 18.8 0 32.6-9.7 43-25.2l-3.4-4zM1404.9 26.698c-2.1-11.1 6.2-22.3 18.6-24.7 12.2-2.3 24.1 4.9 26.3 16 2.3 11.5-6 22.9-18.2 25.2-12.5 2.5-24.4-4.9-26.7-16.5z" _fill="#2E74B5"/>'
      }
    })
  },
  1539: function (t, e, n) {
    n(11).register({
      zugerzeitung: {
        width: 190,
        height: 32,
        viewBox: '0 0 190 32',
        data: '<path pid="0" d="M180.458 30.834c-2.349 0-4.137-1.031-4.137-2.936 0-1.114.304-2.013 1.058-2.495.846.184 1.873.323 3.162.515 2.352.35 4.343.317 4.343 1.98 0 1.753-1.864 2.936-4.426 2.936zm-.31-22.032c1.516-.19 2.394 1.728 2.738 4.591.346 2.863-.05 4.94-1.566 5.13-1.516.19-2.393-1.728-2.738-4.591-.346-2.863.051-4.94 1.566-5.13zm1.805 13.111c-3.676-.348-4.367-1.197-4.367-1.197l2.46-1.429c.231.017.465.026.701.026 3.657 0 6.621-2.035 6.621-5.684 0-1.541-.66-2.941-1.794-3.967l2.133.164h1.266l.308-1.471h-5.969a7.953 7.953 0 00-2.565-.41c-3.901 0-6.621 2.551-6.621 5.684 0 2.805 1.752 4.655 4.223 5.361l-5.081 2.689c.794 1.945 1.552 2.83 2.816 3.343-1.679.446-3.153 1.588-3.153 3.212 0 2.457 2.912 3.766 6.988 3.766 4.077 0 9.415-2.04 9.415-6.402 0-3.234-5.17-3.475-7.381-3.685zm-88.95 2.437c6.425 0 7.394-.923 9.836-6.95h.756l-1.652 8.277c-2.496-.061-5.632-.218-8.067-.218l-8.568.005L96.96 4.086h-1.14c-6.818 0-6.434.997-9.106 6.955h-.757l1.479-8.278c2.496.062 5.112.218 7.548.218l8.12-.005-11.66 21.373h1.558zm27.313-21.315c-.257-1.343.732-2.69 2.209-2.98 1.448-.286 2.864.587 3.121 1.929.267 1.394-.718 2.767-2.166 3.052-1.476.291-2.897-.607-3.164-2.001zm.417 10.455c0-2.656-.027-2.885-1.739-2.885l-.155-.56 6.258-2.246v13.57c0 2.835.028 3.147 1.893 3.402v.689h-8.151v-.689c1.866-.255 1.894-.567 1.894-3.402V13.49zm34.522 10.12l-.11-.516c-1.687 0-1.805-.629-1.813-4.235V7.799l-6.163 2.219.15.56c1.719.014 1.673.248 1.654 2.46l.001 8.634c-.421.743-1.25 1.399-2.232 1.399-1.459 0-2.559-1.327-2.559-3.886V7.799l-6.177 2.218.151.561c1.745.014 1.686.248 1.668 2.742v6.784c-.022 2.905 1.453 5.71 4.647 5.71 2.079 0 4.017-1.583 4.848-3.345l.433 3.157 5.502-2.016zM111.152 8.49c1.882 0 2.505 2.496 2.295 5.047h-5.191c.072-2.58.761-5.046 2.896-5.046zm6.28 10.393c-.842 1.768-2.286 2.855-4.123 2.855-3.085 0-4.933-3.123-5.053-7.29h9.471c.163-3.368-1.476-6.705-5.968-6.705-4.416 0-6.944 3.98-6.944 9.071 0 4.944 2.68 8.951 6.877 8.951 3.124 0 5.552-2.83 6.333-6.687l-.593-.195zm53.666 2.408v-7.895c0-2.905-1.494-5.597-4.688-5.597-2.82 0-3.691 1.587-4.507 3.145l-.434-3.145-5.789 2.078.237.566c1.75 0 1.672.172 1.672 3.41v7.438c0 2.835-.028 3.147-1.894 3.402v.767h7.837v-.767c-1.559-.255-1.588-.567-1.588-3.402V11.69c1.642-2.142 4.792-1.334 4.792 2.7v6.902c0 2.835-.028 3.147-1.893 3.402v.767h7.842v-.767c-1.56-.255-1.587-.567-1.587-3.402zm-32.843 1.004c-.802.714-1.514.98-2.406.98-1.271 0-2.035-1.244-2.035-3.289V9.735h3.383l.308-1.472h-3.691V2.958h-.538c-1.402 2.96-3.413 5.017-6.223 6.05l-.169.727h2.507v11.591c0 2.978 1.936 4.489 4.159 4.489 2.231 0 3.875-1.166 5.102-3.046l-.397-.474zm-68.197-8.816v7.509c0 2.861-.028 3.176-1.91 3.434v.774h9.591v-.774c-3.12-.365-3.127-.573-3.127-3.434v-8.701c1.347-2.47 3.18-1.572 6.169 2.107l.7-.32-1.484-6.608c-3.29-.611-4.649 1.744-5.489 3.868L73.9 7.366l-5.774 2.099.245.571c1.849 0 1.688.924 1.688 3.443zM59.752 8.122c1.9 0 2.53 2.518 2.317 5.094h-5.24c.073-2.604.768-5.094 2.923-5.094zm.546 17.44c3.154 0 5.605-2.857 6.393-6.752l-.599-.197c-.849 1.785-2.307 2.882-4.162 2.882-3.114 0-4.98-3.152-5.102-7.36h9.563c.164-3.4-1.49-6.769-6.026-6.769-4.458 0-7.01 4.02-7.01 9.158 0 4.991 2.705 9.037 6.943 9.037zm-16.525 5.22c-2.372 0-4.177-1.042-4.177-2.965 0-1.125.307-2.032 1.068-2.518.854.185 1.892.325 3.192.519 2.375.354 4.385.32 4.385 1.998 0 1.77-1.882 2.966-4.468 2.966zm-.314-22.243c1.531-.192 2.417 1.744 2.765 4.635.35 2.89-.05 4.987-1.58 5.178-1.531.192-2.417-1.744-2.765-4.635-.35-2.89.05-4.987 1.58-5.178zm1.822 13.236c-3.71-.352-4.408-1.209-4.408-1.209l2.484-1.442c.233.017.469.026.707.026 3.692 0 6.685-2.055 6.685-5.738 0-1.557-.666-2.97-1.811-4.005l2.153.166h1.279l.31-1.486h-6.027a8.027 8.027 0 00-2.589-.414c-3.938 0-6.684 2.576-6.684 5.739 0 2.831 1.769 4.699 4.264 5.412l-5.13 2.714c.802 1.964 1.567 2.857 2.843 3.375-1.695.451-3.184 1.604-3.184 3.243 0 2.48 2.94 3.803 7.056 3.803 4.115 0 9.504-2.06 9.504-6.464 0-3.265-5.22-3.509-7.451-3.72zM7.769 24.25H6.195L17.968 2.67l-8.198.005c-2.46 0-5.1-.158-7.62-.22L.656 10.812h.764C4.118 4.798 3.73 3.79 10.614 3.79h1.15L0 25.375l8.65-.006c2.459 0 5.624.159 8.145.221l1.668-8.357h-.764c-2.466 6.085-3.444 7.016-9.93 7.016z" _fill="#2e74b5"/><path pid="1" d="M19.952 13.118v6.85c-.022 2.932 1.467 5.764 4.692 5.764 2.098 0 4.056-1.598 4.894-3.377l.437 3.187 5.555-2.035-.112-.52c-1.702 0-1.82-.636-1.83-4.277V7.545l-6.222 2.24.152.565c1.736.014 1.689.25 1.67 2.483v8.717c-.424.75-1.26 1.413-2.252 1.413-1.473 0-2.585-1.34-2.585-3.924V7.545l-6.235 2.24.152.565c1.762.014 1.703.25 1.684 2.768z" _fill="#2e74b5"/>'
      }
    })
  },
  1540: function (t, e, n) {
    n(11).register({
      tagblatt: {
        width: 1785,
        height: 254,
        viewBox: '0 0 1785 254',
        data: '<path pid="0" d="M125.882 205.201c0 32.7-1.303 30.8 30.268 34.6v8.8H61.738v-8.8c31.47-3.8 30.268-1.9 30.268-34.6v-189.1H57.93c-30.268 0-37.184 19.5-49.11 42.1H0L9.421 4.8h198.946l9.421 53.4h-8.82c-11.325-23.2-18.241-42.1-49.11-42.1h-33.976v189.1zm137.911-37.099l-16.337 46.5c-4.41 13.8 1.904 25.1 17.64 25.1v8.8h-63.643v-8.8c9.421 0 19.544-5.7 25.157-17.6 15.133-30.8 56.125-144.5 85.09-221.7h19.544c23.954 70.4 59.233 177.8 71.159 208.6 7.517 19.5 13.23 30.8 28.364 30.8v8.8h-81.182v-8.8c22.049 0 23.954-11.3 18.241-27l-15.134-45.2h-88.799v.5h-.1zm84.389-13.2l-37.183-113.7h-.602l-41.593 113.7h79.378zm94.408-29.5c0-54 45.301-125 139.813-125 33.976 0 49.712 6.3 67.351 11.9 10.123 3.1 13.831 8.2 13.831 13.8v45.2h-8.82c-1.303-27.6-18.842-58.4-74.266-58.4-73.064 0-96.917 50.3-96.917 109.9-.602 55.3 27.662 118.1 98.821 118.1 43.397 0 47.807-16.3 47.807-43.3v-21.4c0-32.7 1.303-30.8-37.183-34.6v-8.8h101.327v8.8c-31.471 3.8-30.268 1.9-30.268 34.6v60.9c-22.651 8.8-51.615 16.3-83.788 16.3-72.863.1-137.708-34.4-137.708-128zM803.399 4.8c53.52 0 83.086 13.2 83.086 52.8 0 29.5-22.651 50.901-50.413 59.101v.6c37.183 1.3 66.75 25.1 66.75 61.6 0 49-37.184 69.7-88.799 69.7h-96.918v-8.8c31.471-3.8 30.268-1.9 30.268-34.6v-157.1c0-32.7 1.303-30.8-30.268-34.6V4.8h86.294zm-22.05 111.201h26.46c20.145 0 43.397-11.3 43.397-52.1 0-34.6-17.038-47.7-50.413-47.7h-20.045V116h.601zm0 82.2c0 30.8 6.315 39.6 35.279 39.6 31.471 0 46.605-19.5 46.605-53.4 0-42.1-26.459-57.2-59.233-57.2h-22.651v71zm156.752 41.5c31.471-3.8 30.268-1.9 30.268-34.6v-157c0-32.7 1.303-30.8-30.268-34.6V4.8h93.809v8.8c-31.47 3.8-30.27 1.9-30.27 34.6v162.7c0 24.5 13.83 27 44.7 27 51.02 0 48.51-14.4 64.85-51.5h8.82l-10.73 62.8H937.5v-9.4c0-.1.601-.1.601-.1zm255.679-71.6l-16.34 46.5c-4.41 13.8 1.9 25.1 17.64 25.1v8.8h-63.64v-8.8c9.42 0 19.54-5.7 25.15-17.6 15.14-30.8 56.03-144.5 84.99-221.8h19.55c23.95 70.4 59.23 177.8 71.16 208.6 7.51 19.5 13.23 30.8 28.36 30.8v8.8h-81.18v-8.8c22.05 0 23.95-11.3 18.24-27l-15.13-45.2h-88.8v.6zm84.99-13.2l-37.19-113.7h-.6l-41.59 113.7h79.38zm195.83 50.3c0 32.7-1.3 30.8 30.27 34.6v8.8h-93.81v-8.8c31.47-3.8 30.27-1.9 30.27-34.6v-189.1h-31.47c-30.27 0-37.18 19.5-49.11 42.1h-8.82l9.42-53.4h192.03l9.42 53.4h-8.82c-11.32-23.2-18.24-42.1-49.11-42.1h-30.27v189.1zm221 0c0 32.7-1.3 30.8 30.27 34.6v8.8h-93.81v-8.8c31.47-3.8 30.27-1.9 30.27-34.6v-189.1h-30.27c-30.27 0-37.18 19.5-49.11 42.1h-8.82l9.42-53.4h192.03l9.42 53.4h-8.82c-11.32-23.2-18.24-42.1-49.11-42.1h-31.47v189.1z" _fill="#18191B"/>'
      }
    })
  },
  1545: function (t, e, n) {
    n(11).register({
      urnerzeitung: {
        width: 204,
        height: 32,
        viewBox: '0 0 204 32',
        data: '<path pid="0" d="M193.615 30.777c-2.509 0-4.419-1.082-4.419-3.08 0-1.169.324-2.112 1.13-2.617.903.193 2.001.338 3.377.54 2.512.367 4.638.332 4.638 2.076 0 1.84-1.99 3.08-4.726 3.08zm-.332-23.112c1.619-.199 2.557 1.813 2.925 4.816.37 3.004-.054 5.182-1.672 5.381-1.62.199-2.557-1.813-2.926-4.816-.369-3.003.055-5.182 1.673-5.38zm1.928 13.754c-3.926-.366-4.665-1.256-4.665-1.256l2.629-1.5c.246.018.495.028.748.028 3.906 0 7.072-2.135 7.072-5.962 0-1.617-.705-3.086-1.916-4.162l2.278.173h1.353l.329-1.544h-6.376a8.636 8.636 0 00-2.74-.43c-4.167 0-7.072 2.676-7.072 5.963 0 2.942 1.871 4.883 4.511 5.623l-5.427 2.82c.848 2.041 1.657 2.97 3.008 3.508-1.794.468-3.369 1.666-3.369 3.37 0 2.576 3.111 3.95 7.465 3.95 4.354 0 10.056-2.14 10.056-6.716 0-3.392-5.522-3.646-7.884-3.865zm-95.007 2.555c6.862 0 7.897-.967 10.505-7.29h.808l-1.764 8.683c-2.667-.064-6.016-.229-8.617-.229l-9.152.005L104.43 2.718h-1.216c-7.282 0-6.873 1.047-9.726 7.296h-.809l1.58-8.684c2.666.065 5.46.23 8.062.23l8.673-.006-12.455 22.421h1.665zm28.968-20.791c-.275-1.408.782-2.82 2.359-3.126 1.547-.3 3.059.616 3.334 2.024.285 1.462-.767 2.903-2.314 3.202-1.576.305-3.094-.637-3.379-2.1zm.649 9.4c0-2.786-.028-3.027-1.857-3.027l-.165-.587 6.684-2.356v14.235c0 2.974.03 3.3 2.022 3.569v.722h-8.706v-.723c1.993-.267 2.022-.594 2.022-3.568v-8.265zM85.08 6.807c-3.48-.635-4.918 1.812-5.806 4.018l-.644-4.122-6.11 2.18.26.594c1.957 0 1.786.96 1.786 3.577v7.802c0 2.974-.03 3.301-2.022 3.569v.804h10.148v-.804c-3.301-.38-3.308-.595-3.308-3.569v-9.04c1.424-2.567 3.363-1.633 6.526 2.189l.74-.331-1.57-6.867zm-49.183 0c-3.48-.635-4.918 1.812-5.807 4.018l-.643-4.122-6.11 2.18.26.594c1.956 0 1.785.96 1.785 3.577v7.802c0 2.974-.03 3.301-2.022 3.569v.804h10.15v-.804c-3.302-.38-3.309-.595-3.309-3.569v-9.04c1.425-2.567 3.364-1.633 6.527 2.189l.74-.331-1.57-6.867zm28.187.623c2.01 0 2.677 2.617 2.451 5.293h-5.543c.077-2.705.812-5.293 3.092-5.293zm2.304 13.896c-3.294 0-5.269-3.276-5.397-7.648h10.117c.173-3.532-1.578-7.033-6.376-7.033-4.716 0-7.416 4.176-7.416 9.516 0 5.186 2.862 9.39 7.346 9.39 3.336 0 5.93-2.968 6.763-7.015l-.633-.205c-.899 1.855-2.441 2.995-4.404 2.995zm-11.858-.469v-8.283c0-3.047-1.596-5.87-5.008-5.87-3.012 0-3.941 1.664-4.813 3.298l-.464-3.299-6.182 2.18.252.594c1.869 0 1.785.18 1.785 3.577v7.803c0 2.973-.03 3.3-2.022 3.567v.805h8.37v-.805c-1.665-.267-1.695-.594-1.695-3.567V10.784c1.753-2.248 5.118-1.4 5.118 2.83v7.242c0 2.974-.03 3.301-2.022 3.568v.805h8.376v-.805c-1.665-.267-1.695-.594-1.695-3.567zm112.166 2.341l-.118-.54c-1.802 0-1.927-.66-1.936-4.443V6.613l-6.584 2.327.161.588c1.836.014 1.787.26 1.767 2.58v9.057c-.449.78-1.334 1.468-2.383 1.468-1.558 0-2.734-1.392-2.734-4.077V6.613l-6.597 2.327.161.588c1.864.014 1.801.26 1.781 2.877v7.116c-.023 3.047 1.552 5.99 4.964 5.99 2.221 0 4.291-1.66 5.178-3.51l.463 3.312 5.877-2.115zM119.589 7.339c2.01 0 2.676 2.617 2.451 5.293h-5.544c.077-2.706.812-5.293 3.093-5.293zm6.707 10.9c-.898 1.855-2.441 2.995-4.403 2.995-3.295 0-5.269-3.275-5.398-7.646h10.117c.173-3.534-1.577-7.034-6.375-7.034-4.716 0-7.416 4.175-7.416 9.516 0 5.186 2.862 9.39 7.345 9.39 3.337 0 5.929-2.969 6.764-7.016l-.634-.204zm57.321 2.527v-8.282c0-3.047-1.596-5.871-5.008-5.871-3.012 0-3.941 1.665-4.813 3.3l-.464-3.3-6.183 2.18.253.594c1.869 0 1.785.18 1.785 3.577v7.802c0 2.974-.03 3.3-2.022 3.568v.805h8.37v-.805c-1.665-.267-1.695-.594-1.695-3.568V10.694c1.753-2.248 5.118-1.4 5.118 2.83v7.242c0 2.974-.03 3.3-2.022 3.568v.805h8.375v-.805c-1.665-.267-1.694-.594-1.694-3.568zm-35.08 1.054c-.857.749-1.617 1.027-2.57 1.027-1.357 0-2.174-1.305-2.174-3.45V8.644h3.614l.329-1.544h-3.943V1.534h-.574c-1.498 3.106-3.646 5.263-6.647 6.347l-.181.763h2.678v12.16c0 3.123 2.069 4.708 4.443 4.708 2.382 0 4.138-1.223 5.449-3.195l-.424-.497z" _fill="#2e74b5"/><path pid="1" d="M21.49 16.522c0 6.147-2.777 9.157-8.311 9.157-5.833 0-9.955-3.092-9.955-9.346V6.308c0-3.413-.534-3.566-3.224-3.936v-.733h11.53v.733c-2.689.37-3.058.523-3.058 3.936v10.587c0 4.25 2.27 7.044 6.178 7.044s5.554-2.794 5.554-7.097V6.308c0-3.413-.37-3.566-3.059-3.936v-.733h7.403v.733c-2.69.37-3.059.523-3.059 3.936v10.214z" _fill="#2e74b5"/>'
      }
    })
  },
  1549: function (t, e, n) {
    n(11).register({
      'luzernerzeitung--mobile': {
        width: 663,
        height: 400,
        viewBox: '0 0 663 400',
        data: '<path pid="0" d="M474.651 376.774c113.917 0 131.244-16.221 174.746-121.29h13.272L633.176 400c-44.24-1.106-99.908-3.687-143.41-3.687H337.508L544.697 23.226H524.42c-120.921 0-114.285 17.327-161.843 121.29h-13.641L375.111 0c44.24 1.106 90.692 3.687 134.194 3.687h144.148L447.001 376.774h27.65zm-166.817 20.277s-108.756-4.424-160.737-4.424H0v-12.904c47.926-6.635 54.194-14.746 54.194-70.783V83.318c0-56.037-6.636-64.147-54.194-70.415V0h192.442v12.903c-47.926 6.636-54.193 14.747-54.193 70.415v289.401h28.756c88.847 0 101.751-30.599 140.46-142.673l11.798 2.212-11.429 164.793z" _fill="#fff"/>'
      }
    })
  },
  1550: function (t, e, n) {
    n(11).register({
      'zugerzeitung--mobile': {
        width: 28,
        height: 16,
        viewBox: '0 0 28 16',
        data: '<path pid="0" d="M19.741 15.085c4.508 0 5.188-.635 6.9-4.788h.532L26.012 16c-1.75-.042-3.95-.15-5.66-.15l-6.01.003 8.175-14.73h-.8c-4.782 0-4.513.688-6.388 4.792h-.53L15.837.212c1.751.042 3.586.15 5.295.15L26.83.36l-8.18 14.726h1.092zM5.45 15.016H4.346L12.606.148 6.854.152C5.13.152 3.276.043 1.508 0L.46 5.758h.536C2.889 1.614 2.617.92 7.447.92h.806L0 15.791l6.068-.003c1.725 0 3.946.109 5.715.152l1.17-5.758h-.537c-1.729 4.192-2.415 4.834-6.966 4.834z" _fill="#2e74b5"/>'
      }
    })
  },
  1559: function (t, e, n) {
    n(11).register({
      'urnerzeitung--mobile': {
        width: 31,
        height: 16,
        viewBox: '0 0 31 16',
        data: '<path pid="0" d="M22.99 15.053c4.562 0 5.25-.644 6.984-4.846h.537l-1.173 5.772c-1.773-.043-3.999-.153-5.728-.153l-6.083.004L25.8.923h-.809c-4.84 0-4.568.695-6.465 4.85h-.537L19.039 0c1.772.043 3.63.153 5.359.153l5.765-.004-8.28 14.904h1.107zm-8.706-5.14C14.284 13.999 12.44 16 8.76 16c-3.877 0-6.617-2.056-6.617-6.213V3.124C2.143.854 1.788.753 0 .507V.02h7.665v.487C5.877.753 5.63.855 5.63 3.124v7.037c0 2.825 1.51 4.682 4.107 4.682 2.598 0 3.692-1.857 3.692-4.717V3.124c0-2.27-.245-2.371-2.033-2.617V.02h4.92v.487c-1.787.246-2.033.348-2.033 2.617v6.789z" _fill="#2e74b5"/>'
      }
    })
  },
  1568: function (t, e, n) {
    n(11).register({
      ico_present_48: {
        width: 48,
        height: 48,
        viewBox: '0 0 48 48',
        data: '<path pid="0" d="M17 23.5h-.5v-3h14v3h-1v9h-12v-9H17z" _stroke="#000"/><path pid="1" _fill="#FFF" _stroke="#FFF" stroke-width=".5" d="M23.25 20.25h.5v12.5h-.5z"/><path pid="2" _fill="#FFF" _stroke="#FFF" stroke-width=".5" d="M30.75 23.25v.5h-14.5v-.5z"/><path pid="3" d="M18.5 18a2.5 2.5 0 015 0v2.5H21a2.5 2.5 0 01-2.5-2.5zm7.5-2.5a2.5 2.5 0 010 5h-2.5V18a2.5 2.5 0 012.5-2.5z" _stroke="#000"/>'
      }
    })
  },
  1569: function (t, e, n) {
    n(11).register({
      ico_history_48: {
        width: 48,
        height: 48,
        viewBox: '0 0 48 48',
        data: '<g _fill="#05032D"><path pid="0" d="M21.921 17.285l-.242-.97c.302-.076.439-.11.619-.152.239-.056.466-.106.802-.163.092 0 .192-.011.43-.045.287-.041.412-.055.57-.055 4.776 0 8.6 3.824 8.6 8.6s-3.824 8.6-8.6 8.6c-4.794 0-8.6-3.741-8.6-8.5 0-.795.018-1.133.115-1.521l.97.242c-.07.278-.085.574-.085 1.279 0 4.203 3.355 7.5 7.6 7.5 4.224 0 7.6-3.376 7.6-7.6s-3.376-7.6-7.6-7.6c-.092 0-.192.011-.43.045-.287.041-.412.055-.472.045-.226.046-.442.093-.671.147a40.87 40.87 0 00-.606.148z"/><path pid="1" d="M26.011 19.609l-.622.782-4.292-3.411 3.412-4.291.782.622-2.788 3.509z"/></g>'
      }
    })
  },
  1570: function (t, e, n) {
    n(11).register({
      ico_bookmark_large_48: {
        width: 48,
        height: 48,
        viewBox: '0 0 48 48',
        data: '<path pid="0" d="M23.723 27.584L18.5 31.066V16.5h11v14.566l-5.223-3.482-.277-.185-.277.185z" _stroke="#000"/>'
      }
    })
  },
  1571: function (t, e, n) {
    n(11).register({
      nzz_companion_watch_48: {
        width: 48,
        height: 48,
        viewBox: '0 0 48 48',
        data: '<path pid="0" d="M32.5 23.5a8 8 0 11-16 0 8 8 0 0116 0z" _stroke="#000"/><path pid="1" d="M24.5 18v6l-3 2.5" _stroke="#000"/>'
      }
    })
  },
  1572: function (t, e, n) {
    n(11).register({
      nzz_companion_sun_48: {
        width: 48,
        height: 48,
        viewBox: '0 0 48 48',
        data: '<path pid="0" d="M28.5 23.5a4 4 0 11-8 0 4 4 0 018 0zm-4-8.5v3m0 11v3M16 23.5h3m11 0h3M29 19l2-2M18 30l2-2m11 2l-2-2M18 17l2 2" _stroke="#000"/>'
      }
    })
  },
  1573: function (t, e, n) {
    n(11).register({
      nzz_companion_moon_48: {
        width: 48,
        height: 48,
        viewBox: '0 0 48 48',
        data: '<path pid="0" d="M29.07 30.305a7.539 7.539 0 01-1.503.745 7.5 7.5 0 11-3.5-14.491 8.495 8.495 0 00-1.414 8.298 8.494 8.494 0 006.417 5.448zM27.5 19v3m1.5-1.5h-3" _stroke="#000"/>'
      }
    })
  },
  1599: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(3),
    o = n.n(r),
    c = n(5),
    l = n.n(c),
    d = n(2),
    f = n.n(d),
    h = n(9),
    m = n.n(h),
    v = n(8),
    _ = n(24);
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
    function x(t) {
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
    var y = {
      name: 'RendererPersonalised',
      layout: 'renderer',
      data: function () {
        return {
          data: null
        }
      },
      computed: {
        sourceElement: function () {
          return this.$route.params.feed.indexOf('thema') > - 1 ? 'Widget-Topic-Articles' : 'Widget-Personalised-Articles'
        },
        articles: function () {
          return this.data && this.data.data && this.data.data.length ? this.data.data : this.data
        },
        fetchGalleriesScript: function () {
          return this.fetchGalleries.join('|')
        },
        dataStructure: function () {
          return {
            articles: this.articles,
            styles: {
              'teaser-options': this.$route.query.styles
            }
          }
        },
        documentsUrls: function () {
          var t = this,
          data = this.data.data ? this.data.data : this.data;
          return data.length ? data.map((function (i) {
            var e = - 1 === i.metadata.nzzId.indexOf('1.') ? i.metadata.documentId : i.metadata.nzzId;
            return 'webview2' === t.$store.state.isrendition ? i.metadata.nzzId : '/article/'.concat(e)
          })) : [
          ]
        }
      },
      asyncData: function (t) {
        return l() (f.a.mark((function e() {
          var n,
          r,
          o,
          c,
          l,
          d,
          h,
          _,
          w,
          y;
          return f.a.wrap((function (e) {
            for (; ; ) switch (e.prev = e.next) {
              case 0:
                return n = t.params,
                r = t.route,
                o = t.store,
                c = t.error,
                l = t.$config,
                d = t.query,
                o.commit('setMutation', {
                  key: 'product',
                  value: l.product
                }),
                o.commit('setMutation', {
                  key: 'productPath',
                  value: 'nzz'
                }),
                r.params.render.indexOf('webview') > - 1 && o.commit('setRendition', r.params.render),
                h = '/v2',
                n.feed.includes('v3-spark') && (h = '/v3', n.feed = n.feed.replace('v3-', '')),
                _ = l.enricoTechBase.replace('/v1', h),
                w = '',
                n.feed.indexOf('-thema-') > - 1 && (w = '&topic='.concat(n.feed.replace(/-/g, '/')), n.feed = 'topics/articles'),
                d.nzztopic && (w = '&id='.concat(d.nzztopic), n.feed = 'nzztopics/articles'),
                y = ''.concat(_, '/').concat(n.feed.replace(/-/g, '/'), '?product=').concat(l.product, '&sourceid=').concat(n.uid, '&limit=').concat(n.limit, '&offset=').concat(n.offset).concat(w),
                r.query.bypass && (y = ''.concat(y, '&bypass=').concat(r.query.bypass)),
                r.query.alternative && 'chmedia' === r.query.alternative && (y = y.replace('product='.concat(l.product), 'product=chmedia')),
                'recommendations' === n.feed && l.recommendationsWidget && l.recommendationsWidget[n.feed] && (y = l.enricoTechBase.replace('/v1', ''), y = ''.concat(y).concat(l.recommendationsWidget[n.feed].url, '&sourceid=').concat(n.uid)),
                'ch-spark-cmpnl' === n.feed && l.btaCompanionFeed && l.btaCompanionFeed.ch && (y = l.enricoTechBase.replace('/v1', ''), y = ''.concat(y).concat(l.btaCompanionFeed.ch, '&sourceid=').concat(n.uid, '&limit=').concat(n.limit, '&offset=').concat(n.offset)),
                'de-spark-cmpnl' === n.feed && l.btaCompanionFeed && l.btaCompanionFeed.de && (y = l.enricoTechBase.replace('/v1', ''), y = ''.concat(y).concat(l.btaCompanionFeed.de, '&sourceid=').concat(n.uid, '&limit=').concat(n.limit, '&offset=').concat(n.offset)),
                e.next = 18,
                m() (x(x({
                }, Object(v.a) (l.enricoBasicAuth)), {
                }, {
                  url: y
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
                    message: 'Enrico error '.concat(y)
                  })
                }));
              case 18:
                return e.abrupt('return', e.sent);
              case 19:
              case 'end':
                return e.stop()
            }
          }), e)
        }))) ()
      },
      methods: {
        componentName: function () {
          return this.$route.params.render.indexOf('webview') > - 1 ? n.e(2).then(n.bind(null, 321)) : Promise.resolve().then(n.bind(null, 51))
        }
      },
      validate: function (t) {
        var e = t.params;
        return !!(e.uid && e.limit && e.offset && e.layout && e.feed)
      },
      head: function () {
        var head = {
        };
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
        if (this.fragmentMp3s) try {
          head.script.push({
            hid: 'document-list-mp3s-fragment',
            type: 'text/javascript',
            preserve: 'preserve',
            innerHTML: 'window.fragmentMp3s = '.concat(JSON.stringify(this.fragmentMp3s))
          })
        } catch (t) {
          console.log(t)
        }
        return this.fetchData && head.script.push({
          hid: 'document-list-fetch-galleries',
          type: 'text/javascript',
          preserve: 'preserve',
          innerHTML: Object(_.h) ()
        }),
        head
      }
    },
    z = n(1),
    component = Object(z.a) (y, (function () {
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
      }, t._l(t.data, (function (e, r) {
        return n(t.componentName, {
          key: 'widget-' + r + '-' + t.$store.state.isrendition,
          tag: 'component',
          attrs: {
            data: {
              articles: [
                e
              ]
            },
            size: t.$route.params.layout,
            'source-elem': t.sourceElement
          }
        })
      })), 1)
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  183: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(3),
    o = n.n(r),
    c = n(5),
    l = n.n(c),
    d = n(2),
    f = n.n(d),
    h = n(64),
    m = n(9),
    v = n.n(m),
    _ = n(8),
    w = n(14),
    x = n.n(w);
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
    function z(t) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {
        };
        i % 2 ? y(Object(source), !0).forEach((function (e) {
          o() (t, e, source[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : y(Object(source)).forEach((function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
        }))
      }
      return t
    }
    var O = {
      name: 'BTAPersonalizedCompanionFeed',
      components: {
        SimpleArticle: function () {
          return Promise.resolve().then(n.bind(null, 51))
        }
      },
      mixins: [
        h.a
      ],
      props: {
        articleId: {
          type: String,
        default:
          function () {
            return this.$store.state.metadata.nzzId
          }
        },
        isExtended: {
          type: Boolean,
        default:
          !1
        }
      },
      data: function () {
        return {
          articles: [
          ]
        }
      },
      computed: {
        feedUrl: function () {
          var t = '';
          return this.isDE && this.$config.btaCompanionFeed && this.$config.btaCompanionFeed.de ? t = ''.concat(this.$config.enricoC1Base.replace('/v1', '')).concat(this.$config.btaCompanionFeed.de) : this.$config.btaCompanionFeed && this.$config.btaCompanionFeed.ch && (t = ''.concat(this.$config.enricoC1Base.replace('/v1', '')).concat(this.$config.btaCompanionFeed.ch)),
          t
        },
        isDE: function () {
          return this.$store.getters.isDE
        },
        linkUrl: function () {
          return '/meine-nzz/leseempfehlungen'
        },
        throttledIsVisible: function () {
          return x() (this.isVisibleInViewport, 1000)
        },
        routeChange: function () {
          return this.$store.state.previousRoute.fullPath
        }
      },
      watch: {
        routeChange: function () {
          window.removeEventListener('scroll', this.throttledIsVisible)
        }
      },
      mounted: function () {
        var t = this;
        return l() (f.a.mark((function e() {
          var n,
          r,
          o;
          return f.a.wrap((function (e) {
            for (; ; ) switch (e.prev = e.next) {
              case 0:
                if (t.addTracking(), setTimeout((function () {
                  t.throttledIsVisible()
                })), window.addEventListener('scroll', t.throttledIsVisible), n = t.isExtended ? 8 : 5, t.articles.length) {
                  e.next = 17;
                  break
                }
                if (!(r = t.feedUrl)) {
                  e.next = 17;
                  break
                }
                return e.prev = 7,
                e.next = 10,
                v.a.request(z(z({
                }, Object(_.a) (t.$config.enricoBasicAuth)), {
                }, {
                  withCredentials: !0,
                  url: r
                })).then((function (t) {
                  var e;
                  return (null === (e = t.data) || void 0 === e ? void 0 : e.data) || [
                  ]
                }));
              case 10:
                o = e.sent,
                t.articles = o.filter((function (article) {
                  var e = article.metadata.nzzId;
                  return e !== t.articleId && !t.$store.state.readArticles.includes(e)
                })).slice(0, n),
                e.next = 17;
                break;
              case 14:
                e.prev = 14,
                e.t0 = e.catch(7),
                console.log(e.t0);
              case 17:
              case 'end':
                return e.stop()
            }
          }), e, null, [
            [7,
            14]
          ])
        }))) ()
      },
      destroyed: function () {
        window.removeEventListener('scroll', this.throttledIsVisible)
      },
      methods: {
        addTracking: function () {
          var t = this;
          window.deferred((function () {
            window.dispatchEvent(new window.CustomEvent('tms:component:create', {
              detail: {
                componentID: 'bta-companion-'.concat(t.articleId),
                componentName: 'bta companion',
                componentSubType1: 'cms',
                componentSubType2: '',
                componentType: 'ui'
              }
            }))
          }))
        },
        eventData: function () {
          return {
            eventInfo: {
              eventName: 'UI Interaction',
              eventAction: 'display',
              eventPosition: '',
              eventValue: '',
              eventNonInteractive: !0,
              type: 'ui',
              timeStamp: new Date,
              componentID: 'bta-section-'.concat(this.articleId),
              componentName: 'bta companion'
            },
            category: {
              primaryCategory: 'ui',
              subCategory1: 'bta container',
              subCategory2: 'companion',
              subCategory3: this.isExtended ? 'extended' : 'standard'
            }
          }
        },
        isVisibleInViewport: function () {
          var t = this;
          this.$el instanceof HTMLElement && this.$el.getBoundingClientRect().top < window.innerHeight && (this.$el.classList.contains('hidden') || (window.deferred((function () {
            window.dispatchEvent(new window.CustomEvent('tms:event:push', {
              detail: z({
              }, t.eventData())
            }))
          })), window.removeEventListener('scroll', this.throttledIsVisible)))
        }
      }
    },
    C = n(1),
    component = Object(C.a) (O, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.articles.length > 0 ? n('section', {
        staticClass: 'pageelement bta',
        attrs: {
          'data-nzz-container': '',
          'data-source-element': 'bta-companion'
        }
      }, [
        n('div', {
          staticClass: 'container--headline-bta container--headline-bta-feed'
        }, [
          n('h3', {
            staticClass: 'container__header-title--bta container__header-title--bta--hide-mobile'
          }, [
            t._v('\n      Für Sie empfohlen\n    ')
          ]),
          t._v(' '),
          n('nuxt-link', {
            staticClass: 'bta-link',
            attrs: {
              to: t.linkUrl,
              'data-nzz-referrer': 'btaLinkCompanion'
            }
          }, [
            n('h3', {
              staticClass: 'container__header-title--bta container__header-title--bta--show-mobile'
            }, [
              t._v('\n        Für Sie empfohlen\n      ')
            ]),
            t._v(' '),
            n('span', {
              staticClass: 'container__header-title--bta--hide-mobile'
            }, [
              t._v('Weitere Artikel')
            ]),
            t._v(' '),
            n('svgicon', {
              staticClass: 'little-chevron',
              attrs: {
                height: '11',
                width: '11',
                name: 'nzz_little_chevron',
                color: 'r-#000000'
              }
            })
          ], 1)
        ], 1),
        t._v(' '),
        n('div', {
          staticClass: 'widget__row widget__row--bta-feed'
        }, t._l(t.articles.slice(0, 2), (function (article, t) {
          return n('div', {
            key: article.metadata.nzzId,
            staticClass: 'widget--1of2 widget--article',
            attrs: {
              'data-source-element-widget': 'Widget-Companion-Feed'
            }
          }, [
            n('SimpleArticle', {
              attrs: {
                data: {
                  articles: [
                    article
                  ]
                },
                size: 0 === t ? '1of2' : 'companion-feed-bta',
                'referrer-type': 'btaCompanionTeaser',
                'teaser-title-tag': 'h3'
              }
            })
          ], 1)
        })), 0),
        t._v(' '),
        n('div', {
          staticClass: 'widget__row widget__row--bta-feed'
        }, t._l(t.articles.slice(2, t.isExtended ? 5 : t.articles.length), (function (article) {
          return n('div', {
            key: article.metadata.nzzId,
            staticClass: 'widget--1of3 widget--article',
            attrs: {
              'data-source-element-widget': 'Widget-Companion-Feed'
            }
          }, [
            n('SimpleArticle', {
              attrs: {
                data: {
                  articles: [
                    article
                  ]
                },
                size: 'companion-feed-bta',
                'referrer-type': 'btaCompanionTeaser',
                'teaser-title-tag': 'h3'
              }
            })
          ], 1)
        })), 0),
        t._v(' '),
        t.isExtended ? n('div', {
          staticClass: 'widget__row widget__row--bta-feed'
        }, t._l(t.articles.slice(5), (function (article) {
          return n('div', {
            key: article.metadata.nzzId,
            staticClass: 'widget--1of3 widget--article',
            attrs: {
              'data-source-element-widget': 'Widget-Companion-Feed'
            }
          }, [
            n('SimpleArticle', {
              attrs: {
                data: {
                  articles: [
                    article
                  ]
                },
                size: 'companion-feed-bta',
                'referrer-type': 'btaCompanionTeaser',
                'teaser-title-tag': 'h3'
              }
            })
          ], 1)
        })), 0) : t._e()
      ]) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  186: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(3),
    o = n.n(r),
    c = n(64);
    function l(object, t) {
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
    function d(t) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {
        };
        i % 2 ? l(Object(source), !0).forEach((function (e) {
          o() (t, e, source[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
        }))
      }
      return t
    }
    n.e(5).then(n.t.bind(null, 1575, 7));
    var f = {
      name: 'ContentTable',
      mixins: [
        c.a
      ],
      props: {
        data: {
          type: Object,
        default:
          function () {
            return {
              content: {
                title: '',
                items: [
                ]
              }
            }
          }
        },
        componenttype: {
          type: String,
        default:
          ''
        }
      },
      data: function () {
        return {
          gotoIcon: {
            name: 'ico_arrow_contenttable_nzz',
            width: '5',
            height: '13',
            color: '#000'
          },
          itemIndex: '',
          itemId: '',
          itemData: [
          ],
          leadingZero: !1
        }
      },
      computed: {
        group: function () {
          return !!this.$store.state.rendition.lightbox && (1 === this.$store.state.rendition.lightbox['article-group'] ? 'second' : 'first')
        },
        headingType: function () {
          return 'h3'
        }
      },
      mounted: function () {
        var t = this;
        this.addTracking(),
        this.setItemData(),
        window['nzzSaveEventData' + this.$store.getters.getMetadata.nzzId] || (window['nzzSaveEventData' + this.$store.getters.getMetadata.nzzId] = !0, window.addEventListener('saveEventData' + this.$store.getters.getMetadata.nzzId, (function (e) {
          var n,
          r = e.detail.id,
          o = t;
          r && t.itemData.forEach((function (t) {
            r === t.id && (n = t.index)
          })),
          window.dispatchEvent(new window.CustomEvent('tms:event:push', {
            detail: d(d({
            }, o.eventData()), {
            }, {
              eventInfo: d(d({
              }, o.eventData().eventInfo), {
              }, {
                eventAction: 'back to table',
                eventPosition: n,
                eventValue: r && t.group ? ''.concat(r, '-').concat(t.group) : null
              })
            })
          }))
        })))
      },
      methods: {
        computedIndex: function (t) {
          return this.leadingZero ? t.toString().padStart(2, '0') : ''.concat(t, '.')
        },
        addTracking: function () {
          var t = this;
          window.deferred((function () {
            window.dispatchEvent(new window.CustomEvent('tms:component:create', {
              detail: {
                componentID: t.data.id,
                componentName: 'content-table',
                componentSubType1: 'cms',
                componentSubType2: '',
                componentType: 'ui'
              }
            }))
          }))
        },
        goToItem: function (t, e) {
          window.dispatchEvent(new window.CustomEvent('tms:event:push', {
            detail: d(d({
            }, this.eventData()), {
            }, {
              eventInfo: d(d({
              }, this.eventData().eventInfo), {
              }, {
                eventPosition: t,
                eventValue: e && this.group ? ''.concat(e, '-').concat(this.group) : null
              })
            })
          })),
          this.itemIndex = t,
          this.itemId = e
        },
        eventData: function () {
          return {
            eventInfo: {
              eventName: 'UI Interaction',
              eventAction: 'view',
              eventPosition: '',
              eventValue: '',
              eventNonInteractive: !1,
              componentID: this.data.id,
              componentName: 'content-table'
            },
            category: {
              subCategory1: 'table of contents'
            }
          }
        },
        setItemData: function () {
          var t = this;
          this.data.content && this.data.content.items && this.data.content.items.forEach((function (e, n) {
            t.itemData.push({
              id: e.id,
              index: n
            })
          }))
        }
      }
    },
    h = (n(1305), n(1)),
    component = Object(h.a) (f, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', {
        staticClass: 'articlecomponent content-table'
      }, [
        n('span', {
          staticClass: 'content-table__anchor',
          attrs: {
            id: 'content-table-' + t.group
          }
        }),
        t._v(' '),
        n(t.headingType, {
          tag: 'component',
          staticClass: 'content-table__title',
          domProps: {
            innerHTML: t._s(t.data.content.title || 'Inhaltsverzeichnis')
          }
        }),
        t._v(' '),
        n('ul', {
          staticClass: 'content-table__list'
        }, t._l(t.data.content.items, (function (e, r) {
          return n('li', {
            key: e.html,
            staticClass: 'content-table__item',
            on: {
              click: function (n) {
                return t.goToItem(r, e.id)
              }
            }
          }, [
            n('a', {
              staticClass: 'content-table__link',
              attrs: {
                href: '#' + e.id + '-' + t.group
              }
            }, [
              e.index ? n('span', {
                staticClass: 'content-table__link-index'
              }, [
                t._v(t._s(t.computedIndex(e.index)))
              ]) : t._e(),
              t._v(' '),
              n('span', {
                staticClass: 'content-table__link-text',
                domProps: {
                  innerHTML: t._s(e.html)
                }
              }),
              t._v(' '),
              n('span', {
                staticClass: 'content-table__link-icon'
              }, [
                n('svgicon', {
                  attrs: {
                    name: t.gotoIcon.name,
                    width: t.gotoIcon.width,
                    height: 'auto',
                    color: t.gotoIcon.color
                  }
                })
              ], 1)
            ])
          ])
        })), 0)
      ], 1)
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  189: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'FacebookEmbed',
      mixins: [
        n(64).a
      ],
      props: {
        data: {
          type: Object,
        default:
          function () {
            return {
              content: {
              }
            }
          }
        }
      },
      data: function () {
        return {
          facebookHtml: '',
          currentEmbedSize: 0,
          resizeTimer: ''
        }
      },
      mounted: function () {
        this.facebookHtml = this.data.content.facebook.html || this.data.content.facebook,
        window.addEventListener('resize', this.resize),
        this.resize()
      },
      updated: function () {
        var t = this.getEmbed();
        try {
          t.setAttribute('data-width', this.currentEmbedSize),
          window.FB.XFBML.parse(this.getEmbed().parentNode)
        } catch (t) {
          console.log(t)
        }
      },
      created: function () {
        this.$store.state.isrendition.indexOf('webview') > - 1 && (this.facebookHtml = this.data.content.facebook.html || this.data.content.facebook)
      },
      methods: {
        resize: function () {
          var t = this;
          clearTimeout(this.resizeTimer),
          this.resizeTimer = setTimeout((function () {
            var e = t.calculateEmbedSize();
            t.currentEmbedSize = e
          }), 250)
        },
        calculateEmbedSize: function () {
          return Math.min(Math.max(window.innerWidth - 48, 350), 520)
        },
        getEmbed: function () {
          try {
            return this.$refs.embedContainer.childNodes[0]
          } catch (t) {
            return console.log(t),
            null
          }
        }
      }
    },
    o = (n(1311), n(1)),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', {
        staticClass: 'articlecomponent articlecomponent--narrow facebook'
      }, [
        n('div', {
          key: t.currentEmbedSize + '-' + t.data.id,
          ref: 'embedContainer',
          staticClass: 'social__container',
          domProps: {
            innerHTML: t._s(t.facebookHtml)
          }
        })
      ])
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  221: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'PageContainerExclusiveTopLayout1Thema',
      extends : n(34).default,
      props: {
        sourceelement: {
          type: String,
        default:
          'Container-Toplayout-1-Thema'
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  225: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'IframeContainerDeprecated',
      extends : n(137).default
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  235: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(68),
    o = {
      name: 'Widget3of3Article',
      extends : r.default,
      data: function () {
        return {
          baseClass: 'widget--3of3 widget--article',
          tid: 'widget-3of3',
          teaserSize: '3of3',
          sourceElem: (t = this.$config.product, [
            'judi',
            'nzzas'
          ].includes(t) ? 'Widget-Volle-Breite-gross' : 'Widget-Volle-Breite')
        };
        var t
      }
    },
    c = n(1),
    component = Object(c.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  319: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(42),
    o = {
      extends : r.default,
      computed: {
        title: function () {
          if (this.data.title) {
            var t = '\n        <span class="container__header-icon-wrap">\n          Mehr '.concat(this.titleIcon, '\n        </span>\n      '),
            title = '\n        <h2 class="container__header-title-content '.concat(this.$store.getters.isStartseite ? '' : 'container__header-title-content--department', '">\n          ').concat(this.data.title, '\n        </h2>\n      ');
            return this.link ? title + t : title
          }
        }
      }
    },
    c = n(1),
    l = (Object(c.a) (o, undefined, undefined, !1, null, null, null).exports, {
      components: {
        HeadlineTitle: r.default
      },
      extends : r.default
    }),
    d = Object(c.a) (l, undefined, undefined, !1, null, null, null);
    e.default = d.exports
  },
  320: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(42),
    o = {
      components: {
        HeadlineTitle: r.default
      },
      extends : r.default,
      computed: {
        imageType: function () {
          return 'fragment'
        }
      }
    },
    c = n(1),
    component = Object(c.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  335: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(3),
    o = n.n(r),
    c = n(5),
    l = n.n(c),
    d = n(2),
    f = n.n(d),
    h = n(9),
    m = n.n(h),
    v = n(8);
    function _(object, t) {
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
        i % 2 ? _(Object(source), !0).forEach((function (e) {
          o() (t, e, source[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : _(Object(source)).forEach((function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
        }))
      }
      return t
    }
    var x = {
      name: 'RecommendationSlider',
      components: {
        WidgetSlider: function () {
          return n.e(2).then(n.bind(null, 135))
        }
      },
      props: {
        count: {
          type: Number,
        default:
          9
        },
        currentArticleId: {
          type: String,
        default:
          function () {
            return this.$store.state.metadata.nzzId
          }
        }
      },
      data: function () {
        return {
          articles: [
          ],
          loaded: !1
        }
      },
      computed: {
        fetch: function () {
          return this.loaded && this.$store.getters.knownUser.exists ? {
            url: ''.concat(this.$config.enricoC1Base, '/spark/rcmd?product=').concat(this.$config.product, '&limit=').concat(this.count + 1)
          }
           : {
            url: ''.concat(this.$config.enricoBase, '/trending?product=').concat(this.$config.product, '&limit=').concat(this.count + 1)
          }
        },
        title: function () {
          return ''.concat('Für Sie empfohlen')
        }
      },
      mounted: function () {
        var t = this;
        return l() (f.a.mark((function e() {
          var n,
          r;
          return f.a.wrap((function (e) {
            for (; ; ) switch (e.prev = e.next) {
              case 0:
                return t.loaded = !0,
                e.prev = 1,
                n = t.fetch.url,
                e.next = 5,
                m.a.request(w(w({
                }, Object(v.a) (t.$config.enricoBasicAuth)), {
                }, {
                  withCredentials: !0,
                  url: n
                })).then((function (t) {
                  return t.data
                }));
              case 5:
                r = e.sent,
                t.articles = r.filter((function (e) {
                  var n = e.metadata.nzzId;
                  return n !== t.currentArticleId && !t.$store.state.readArticles.includes(n)
                })).slice(0, t.count),
                e.next = 12;
                break;
              case 9:
                e.prev = 9,
                e.t0 = e.catch(1),
                console.log(e.t0);
              case 12:
              case 'end':
                return e.stop()
            }
          }), e, null, [
            [1,
            9]
          ])
        }))) ()
      }
    },
    y = (n(1193), n(1)),
    component = Object(y.a) (x, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.loaded && t.articles.length ? n('WidgetSlider', {
        staticClass: 'recommendations',
        attrs: {
          data: {
            content: {
              'widget-title': t.title,
              list: {
                articles: t.articles
              }
            },
            id: 'recommendations-nur-fur-sie-widget-slider-' + t.currentArticleId
          },
          componenttype: 'next-reads',
          'element-data-source-override': 'recommendations'
        }
      }) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  366: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'RelatedTopics',
      components: {
        NzzLink: n(31).default
      },
      props: {
        relatedTopics: {
          type: Array,
        default:
          function () {
            return []
          }
        }
      }
    },
    o = (n(1202), n(1)),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return 0 !== t.relatedTopics.length ? n('div', {
        staticClass: 'related'
      }, [
        n('span', {
          staticClass: 'related__label'
        }, [
          t._v('\n    Verwandte Themen\n  ')
        ]),
        t._v(' '),
        t._l(t.relatedTopics, (function (e) {
          return n('NzzLink', {
            key: e.name,
            staticClass: 'related__button',
            attrs: {
              url: e.path || e.url,
              'data-nzz-referrer': 'topicTag'
            }
          }, [
            t._v('\n    ' + t._s(e.name) + '\n  ')
          ])
        }))
      ], 2) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  367: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'ImageDescription',
      props: {
        data: {
          type: Object,
        default:
          function () {
            return {
              content: {
              }
            }
          }
        },
        isSmall: {
          type: Boolean,
        default:
          !1
        },
        isFullwidth: {
          type: Boolean,
        default:
          !1
        },
        isWidewidth: {
          type: Boolean,
        default:
          !1
        },
        dataTeamSelector: {
          type: String,
        default:
          'data-team-image-caption'
        }
      },
      computed: {
        headingType: function () {
          return 'h2'
        },
        authors: function () {
          var t = this.data.content.author;
          return Array.isArray(t) || (t = [
            t
          ]),
          t.filter(Boolean)
        }
      }
    },
    o = (n(1204), n(1)),
    component = Object(o.a) (r, (function () {
      var t,
      e = this,
      n = e.$createElement,
      r = e._self._c || n;
      return r('div', {
        staticClass: 'image-description',
        class : {
          'image-description--fullwidth': e.isFullwidth,
          'image-description--widewidth': e.isWidewidth,
          'image-description--small': e.isSmall
        }
      }, [
        r(e.headingType, e._b({
          tag: 'component',
          staticClass: 'image-description__caption',
          class : {
            'image-description__caption--large': !e.isSmall
          },
          attrs: {
            'data-nzz-tid': 'image-description-caption'
          },
          domProps: {
            innerHTML: e._s(e.data.content.caption)
          }
        }, 'component', (t = {
        }, t[e.dataTeamSelector] = !0, t), !1)),
        e._v(' '),
        0 !== e.authors.length ? r('div', {
          staticClass: 'image-description__author',
          class : {
            'image-description__author--small': e.isSmall
          }
        }, e._l(e.authors, (function (t, n) {
          return r('span', {
            key: n,
            staticClass: 'image-description__author-single',
            attrs: {
              'data-nzz-tid': 'image-description-author'
            },
            domProps: {
              innerHTML: e._s(t)
            }
          })
        })), 0) : e._e()
      ], 1)
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  368: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      props: {
        data: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        }
      }
    },
    o = (n(1206), n(1)),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', {
        staticClass: 'topic-info'
      }, [
        n('h4', {
          staticClass: 'topic-info__pretitle'
        }, [
          t._v('\n    Thema\n  ')
        ]),
        t._v(' '),
        t.data.content.title ? n('h1', {
          staticClass: 'topic-info__title',
          domProps: {
            innerHTML: t._s(t.data.content.title)
          }
        }) : t._e(),
        t._v(' '),
        t.data.content.description ? n('p', {
          staticClass: 'topic-info__description',
          domProps: {
            innerHTML: t._s(t.data.content.description)
          }
        }) : t._e()
      ])
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  369: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'ServiceHeader',
      components: {
        HeaderButton: function () {
          return n.e(7).then(n.bind(null, 325))
        },
        DropdownMenu: function () {
          return n.e(7).then(n.bind(null, 467))
        }
      },
      mixins: [
        n(264).a
      ],
      computed: {
        leftItems: function () {
          return this._get(this.$store.getters.topNavigationColumns, 'lefts[0].items', [
          ])
        },
        rightItems: function () {
          return this._get(this.$store.getters.topNavigationColumns, 'rights[0].items', [
          ])
        }
      }
    },
    o = (n(914), n(1)),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', {
        staticClass: 'header-service'
      }, [
        n('div', {
          staticClass: 'header-service__holder'
        }, [
          n('div', {
            staticClass: 'header-service__wrapper'
          }, [
            n('div', {
              staticClass: 'header-service__container header-service__container--left'
            }, [
              t._l(t.leftItems, (function (e, r) {
                return [e.sections ? n('DropdownMenu', {
                  key: 'left-' + r + "$",
                  staticClass: 'header-service__item',
                  attrs: {
                    label: e.name,
                    sections: e.sections,
                    'button-ref': e.ref,
                    'button-data': e.data
                  }
                }) : n('HeaderButton', {
                  key: 'hdb-left-' + r + "$",
                  staticClass: 'header-button--service header-service__item',
                  attrs: {
                    target: e.external ? '_blank' : '_self',
                    href: t.isAboBase(e)
                  }
                }, [
                  t._v('\n            ' + t._s(e.name) + '\n          ')
                ])]
              }))
            ], 2),
            t._v(' '),
            n('div', {
              staticClass: 'header-service__container header-service__container--right'
            }, [
              t._l(t.rightItems, (function (e, r) {
                return [e.sections ? n('DropdownMenu', {
                  key: 'right-' + r + "$",
                  staticClass: 'header-service__item',
                  attrs: {
                    label: e.name,
                    sections: e.sections,
                    'button-ref': e.ref,
                    'button-data': e.data
                  }
                }) : n('HeaderButton', {
                  key: 'hdb-right-' + r + "$",
                  staticClass: 'header-button--service header-service__item',
                  attrs: {
                    target: e.external ? '_blank' : '_self',
                    href: t.isAboBase(e)
                  }
                }, [
                  t._v('\n            ' + t._s(e.name) + '\n          ')
                ])]
              }))
            ], 2)
          ])
        ])
      ])
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  388: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(100),
    o = {
      name: 'ContainerIdms',
      components: {
        HeadlineTitle: n(42).default
      },
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
      computed: {
        dataHtml: function () {
          if (this.data.content && this.data.content.idms && this.data.content.idms.html) {
            return this.data.content.idms.html.replace(/jQuery\(document\).ready\(function/gi, 'window.deferred(function')
          }
          return !1
        },
        hasHeadline: function () {
          return !!this.data.content && (this.data.content.title && !this.data.content.image)
        }
      }
    },
    c = (n(1250), n(1)),
    l = (Object(c.a) (o, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('LazyHydrate', {
        attrs: {
          'ssr-only': ''
        }
      }, [
        n('section', {
          staticClass: 'pageelement',
          class : t.hasHeadline ? 'hasHeadline' : null,
          attrs: {
            'data-source-element': 'Container',
            'data-nzz-container': ''
          }
        }, [
          n('div', {
            staticClass: 'pageelement__inner'
          }, [
            t.data.content ? n('HeadlineTitle', {
              attrs: {
                data: t.data.content
              }
            }) : t._e(),
            t._v(' '),
            n('div', {
              staticClass: 'widget__row'
            }, [
              t.dataHtml ? n('div', {
                staticClass: 'widget widget--sportdaten'
              }, [
                n('div', {
                  domProps: {
                    innerHTML: t._s(t.dataHtml)
                  }
                })
              ]) : t._e()
            ])
          ], 1)
        ])
      ])
    }), [
    ], !1, null, null, null).exports, {
      components: {
        HeadlineTitle: n(319).default
      },
      extends : r.default
    }),
    d = Object(c.a) (l, undefined, undefined, !1, null, null, null);
    e.default = d.exports
  },
  392: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(123),
    o = {
      name: 'PageContainerExclusiveTopic',
      extends : n(1039).a,
      props: {
        sourceelement: {
          type: String,
        default:
          'Container-Topic'
        }
      }
    },
    c = n(1),
    l = (Object(c.a) (o, undefined, undefined, !1, null, null, null).exports, {
      components: {
        HeadlineTitle: n(319).default
      },
      extends : r.default
    }),
    d = Object(c.a) (l, undefined, undefined, !1, null, null, null);
    e.default = d.exports
  },
  404: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(78),
    o = {
      components: {
        ImageDescription: function () {
          return n.e(1).then(n.bind(null, 367))
        },
        SliderButton: function () {
          return n.e(0).then(n.bind(null, 475))
        },
        SliderProgress: function () {
          return n.e(0).then(n.bind(null, 476))
        }
      },
      props: {
        data: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        },
        isPreview: {
          type: Boolean,
        default:
          !1
        }
      },
      data: function () {
        return {
          flickity: null,
          sliderProgress: 0,
          sliderIndex: 0,
          isLoading: !0
        }
      },
      computed: {
        images: function () {
          try {
            return this.data.content.article.content
          } catch (t) {
            return []
          }
        },
        usableImages: function () {
          return this.isPreview ? this.images.slice(0, 1) : this.images
        },
        galleryUrl: function () {
          try {
            return this.data.content.article.metadata.url
          } catch (t) {
            return
          }
        },
        nzzId: function () {
          var t,
          e,
          n;
          return (null === (t = this.data.content.article) || void 0 === t || null === (e = t.metadata) || void 0 === e || null === (n = e.nzzId) || void 0 === n ? void 0 : n.replace('ld.', 'id-ld_').replace('1.', 'id-1_')) || ''
        }
      },
      mounted: function () {
        var t = this;
        setTimeout((function () {
          return t.$store.commit('teaserMounted')
        })),
        this.$store.getters.firstWidget && this.$store.getters.firstWidget.length || this.$store.dispatch('setAction', {
          key: 'setMutation',
          value: {
            key: 'firstWidget',
            value: '#' + this.nzzId + ' .image-placeholder__image'
          }
        })
      },
      beforeDestroy: function () {
        var t;
        null === (t = this.flickity) || void 0 === t || t.destroy(),
        this.$store.commit('teaserUnmounted')
      },
      methods: {
        flickityInit: function (t) {
          this.flickity = t,
          t.on('scroll', this.updatePosition),
          t.on('change', this.changeSlide),
          t.on('staticClick', this.openGallery)
        },
        updatePosition: function (progress) {
          this.sliderProgress = progress
        },
        changeSlide: function (t) {
          this.sliderIndex = t
        },
        slideBack: function () {
          this.flickity.previous()
        },
        slideForward: function () {
          this.flickity.next()
        },
        openGallery: function () {
          this.galleryUrl && (Object(r.b) ({
            whiteOut: !0,
            disableWhiteOutWhenPageScrolled: !1,
            dontScrollUp: !0
          }), this.$router.push({
            path: ''.concat(this.galleryUrl, '#slide=').concat(this.sliderIndex)
          }))
        }
      }
    },
    c = (n(1393), n(1)),
    component = Object(c.a) (o, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', {
        staticClass: 'page-gallery',
        class : {
          'flickity-loading': t.isLoading
        },
        attrs: {
          id: t.nzzId
        }
      }, [
        n('div', {
          staticClass: 'page-gallery__slider'
        }, [
          n('flickity', {
            attrs: {
              options: {
                contain: !0,
                draggable: !0,
                prevNextButtons: !1,
                pageDots: !1
              },
              'skip-init': 1 === t.images.length || t.isPreview
            },
            on: {
              init: t.flickityInit,
              loaded: function (e) {
                t.isLoading = !1
              }
            }
          }, t._l(t.usableImages, (function (e, r) {
            var content = e.content;
            return n('div', {
              directives: [
                {
                  name: 'srcset',
                  rawName: 'v-srcset',
                  value: {
                    teaserImage: content.image,
                    parent: t.$parent,
                    imageType: 'fragment'
                  },
                  expression: '{\n          teaserImage: content.image,\n          parent: $parent,\n          imageType: \'fragment\'\n        }'
                }
              ],
              key: 'gallery-' + r,
              staticClass: 'image-placeholder image__placeholder page-gallery__slide'
            }, [
              n('img', {
                ref: 'image',
                refInFor: !0,
                staticClass: 'image-placeholder__image page-gallery__image',
                attrs: {
                  alt: '',
                  'data-sizes': '0'
                }
              })
            ])
          })), 0),
          t._v(' '),
          t.images.length > 1 ? n('div', {
            staticClass: 'page-gallery__infobox'
          }, [
            n('div', {
              staticClass: 'page-gallery__info'
            }, [
              t._v('\n        ' + t._s(t.images.length) + ' Bilder\n      ')
            ])
          ]) : t._e(),
          t._v(' '),
          t.images.length > 1 ? n('SliderButton', {
            attrs: {
              disabled: t.sliderProgress < 0.01,
              type: 'prev',
              'is-page-gallery': !0
            },
            nativeOn: {
              click: function (e) {
                return t.slideBack(e)
              }
            }
          }) : t._e(),
          t._v(' '),
          t.images.length > 1 ? n('SliderButton', {
            attrs: {
              disabled: t.sliderProgress > 0.99,
              type: 'next',
              'is-page-gallery': !0
            },
            nativeOn: {
              click: function (e) {
                return t.slideForward(e)
              }
            }
          }) : t._e()
        ], 1),
        t._v(' '),
        t.images.length > 1 ? n('SliderProgress', {
          staticClass: 'page-gallery__progress',
          attrs: {
            position: t.sliderProgress,
            count: t.images.length
          }
        }) : t._e(),
        t._v(' '),
        0 !== t.images.length ? n('ImageDescription', {
          staticClass: 'page-gallery__caption',
          attrs: {
            data: t.images[t.sliderIndex]
          }
        }) : t._e()
      ], 1)
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  413: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'IdmsArticleWidget',
      props: {
        data: {
          type: Object,
        default:
          function () {
            return {
              content: {
              }
            }
          }
        }
      },
      head: function () {
        if (this.url) return {
          script: [
            {
              hid: 'amp-iframe',
              preserve: 'preserve',
              type: 'text/javascript',
              async: !0,
              src: 'https://cdn.ampproject.org/v0/amp-iframe-0.1.js',
              'custom-element': 'amp-iframe'
            }
          ]
        }
      },
      computed: {
        url: function () {
          return !(!this.data.content || !this.data.content.idms) && decodeURIComponent(this.data.content.idms.params.url) + '#market-widget-'.concat(this.data.id)
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.url ? n('div', {
        staticClass: 'articlecomponent idms',
        class : t.data.styles && t.data.styles['widget-position'] ? t.data.styles['widget-position'] : ''
      }, [
        n('amp-iframe', {
          attrs: {
            id: 'market-widget-' + t.data.id,
            width: '1',
            height: '1',
            sandbox: 'allow-scripts allow-same-origin',
            layout: 'responsive',
            frameborder: '0',
            src: t.url
          }
        }, [
          n('amp-img', {
            attrs: {
              layout: 'fill',
              src: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
              placeholder: ''
            }
          })
        ], 1)
      ], 1) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  414: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'Iframe',
      props: {
        data: {
          type: Object,
        default:
          function () {
            return {
              content: {
              }
            }
          }
        }
      },
      head: function () {
        if (this.url) return {
          script: [
            {
              hid: 'amp-iframe',
              preserve: 'preserve',
              type: 'text/javascript',
              async: !0,
              src: 'https://cdn.ampproject.org/v0/amp-iframe-0.1.js',
              'custom-element': 'amp-iframe'
            }
          ]
        }
      },
      computed: {
        url: function () {
          try {
            var t = (this.data.content.iframe.html || this.data.content.iframe).match(/(src|data-href)="\s*([^>|"]+)/);
            return !(!t || !t[2]) && decodeURIComponent(t[2])
          } catch (t) {
            return !1
          }
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.url ? n('div', {
        staticClass: 'articlecomponent articlecomponent--narrow'
      }, [
        n('amp-iframe', {
          attrs: {
            width: '480',
            height: '400',
            sandbox: 'allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox',
            layout: 'responsive',
            frameborder: '0',
            src: t.url
          }
        })
      ], 1) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  416: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'InstagramEmbed',
      props: {
        data: {
          type: Object,
        default:
          function () {
            return {
              content: {
              }
            }
          }
        }
      },
      head: function () {
        if (this.shortcode) return {
          script: [
            {
              hid: 'amp-instagram',
              preserve: 'preserve',
              type: 'text/javascript',
              async: !0,
              src: 'https://cdn.ampproject.org/v0/amp-instagram-0.1.js',
              'custom-element': 'amp-instagram'
            }
          ]
        }
      },
      computed: {
        shortcode: function () {
          try {
            var t = (this.data.content.instagram.html || this.data.content.instagram).match(/data-instgrm-permalink="https:\/\/www\.instagram\.com\/p\/([^/]+)\//);
            return !(!t || !t[1]) && t[1]
          } catch (t) {
            return !1
          }
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.shortcode ? n('div', {
        staticClass: 'articlecomponent articlecomponent--narrow'
      }, [
        n('amp-instagram', {
          attrs: {
            'data-shortcode': t.shortcode,
            'data-captioned': '',
            width: '400',
            height: '480',
            layout: 'responsive'
          }
        })
      ], 1) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  425: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'YoutubeEmbed',
      components: {
        ImageDescription: function () {
          return n.e(1).then(n.bind(null, 367))
        }
      },
      props: {
        data: {
          type: Object,
        default:
          function () {
            return {
              content: {
              }
            }
          }
        }
      },
      head: function () {
        if (this.videoid) return {
          script: [
            {
              hid: 'amp-youtube',
              preserve: 'preserve',
              type: 'text/javascript',
              async: !0,
              src: 'https://cdn.ampproject.org/v0/amp-youtube-0.1.js',
              'custom-element': 'amp-youtube'
            }
          ]
        }
      },
      computed: {
        videoid: function () {
          try {
            var t = (this.data.content.youtube.html || this.data.content.youtube).match(/src=([^>|\s]+)/);
            return !(!t || !t[1]) && t[1].replace(/"/g, '').split('/') [4].split('?') [0]
          } catch (t) {
            return !1
          }
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', {
        staticClass: 'articlecomponent articlecomponent--narrow'
      }, [
        n('amp-youtube', {
          attrs: {
            'data-videoid': t.videoid,
            layout: 'responsive',
            width: '480',
            height: '270'
          }
        }),
        t._v(' '),
        t.data.content.caption || t.data.content.author ? n('div', {
          staticClass: 'articlecomponent__description'
        }, [
          n('ImageDescription', {
            attrs: {
              data: t.data
            }
          })
        ], 1) : t._e()
      ], 1)
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  426: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(7),
    o = n.n(r),
    c = n(266),
    l = n(24),
    d = {
      name: 'VampArticle',
      props: {
        data: {
          type: [
            Object,
            Array
          ],
        default:
          function () {
            return {
            }
          }
        },
        pagetype: {
          type: String,
        default:
          'fallback'
        }
      },
      head: function () {
        var script = [
          {
            hid: 'vamp-article-read',
            preserve: 'preserve',
            type: 'text/javascript',
            innerHTML: '\n      window.deferred(function() {\n        window.appDataReady.then(function() {\n          window.addEventListener(\'scroll\', function(){\n            if (!window.nzzArticleRead && window.NZZ) {\n              window.vamp.articleRead(window.NZZ.metadata);\n              window.nzzArticleRead = true;\n            }\n          });\n        });\n      },\n      function() {\n        return window.appDataReady\n      });\n\n     if ('.concat(!1, ') {\n        const path = encodeURI(\'').concat(this.$route.fullPath, '\');\n        setInterval(function() {\n          ').concat('\n    try {\n     fetch(\'/'.concat('api/v1\' + path + \'?version=a5afeb0986c2095be9c7dcd43c7898f7cc66676e', '\', {\n       method: \'GET\',\n         redirect: \'follow\'\n       }).then(res => {\n         if (res.status === 200) {\n           return res.json();\n         }\n       }).then(res => {\n         if (res && res.content) {\n           const liveTicker = res.content.filter(r => r.identifier.indexOf(\'.time\') > -1)\n           if (liveTicker.length && liveTicker.length !== document.querySelectorAll(\'.articlecomponent.time\').length) {\n              document.querySelector(\'.webalert\').classList.add(\'active\');\n           }\n         }\n       });\n   } catch (e) { console.log(e) }\n  '), '\n        }, 40000);\n      }\n    ')
          },
          {
            hid: 'loader-fetch-galleries',
            type: 'text/javascript',
            preserve: 'preserve',
            innerHTML: Object(l.h) ()
          }
        ];
        if (this.data.sliderImages && (this.data.webviewMetadata.galleries = this.data.sliderImages), this.data.webviewMetadata) {
          var meta = this.data.webviewMetadata,
          t = meta.nzzId.indexOf('1.') < 0 ? meta.documentId : meta.nzzId;
          this.data.webviewMetadata.link = '/article/'.concat(t),
          script.push.apply(script, o() (Object(c.b) (this.data.webviewMetadata, 'articleLoaded')))
        }
        return 'gallery' === this.data.metadata.layout && script.push({
          hid: 'vamp-article-gallery',
          preserve: 'preserve',
          type: 'text/javascript',
          innerHTML: '\n         appDataReady.then(function() {\n           if (window.NZZ.metadata.galleries) {\n             window.vamp.navigateToGallery({\n              images: window.NZZ.metadata.galleries,\n              selectedImage: 0,\n              sharingUrl: \''.concat(this.data.seoData.canonical, '\',\n              articleTitle: \'').concat(this.data.seoData.title, '\'\n             });\n          }\n         });\n        ')
        }),
        {
          __dangerouslyDisableSanitizers: [
            'script'
          ],
          script: script
        }
      }
    },
    f = n(1),
    component = Object(f.a) (d, (function () {
      var t = this,
      e = t.$createElement;
      return (t._self._c || e) ('ArticleComponent', {
        attrs: {
          data: t.data,
          isarticle: !0,
          renderall: !0,
          pagetype: t.pagetype
        }
      })
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  430: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      extends : n(112).default
    },
    o = (n(762), n(1)),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.data ? n('div', {
        staticClass: 'widget widget--iframe'
      }, [
        n('iframe', {
          staticClass: 'market-iframe',
          staticStyle: {
            border: '0',
            width: '100%'
          },
          attrs: {
            id: 'market-widget-' + t.data.id,
            src: decodeURIComponent(t.params.url) + '#market-widget-' + t.data.id,
            allowfullscreen: 'false'
          }
        })
      ]) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  434: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(7),
    o = n.n(r),
    c = n(266),
    l = n(24),
    d = {
      name: 'VampArticle',
      props: {
        data: {
          type: [
            Object,
            Array
          ],
        default:
          function () {
            return {
            }
          }
        },
        pagetype: {
          type: String,
        default:
          'fallback'
        }
      },
      head: function () {
        var script = [
          {
            hid: 'vamp-article-read',
            preserve: 'preserve',
            type: 'text/javascript',
            innerHTML: '\n      window.deferred(function() {\n        window.appDataReady.then(function() {\n          window.addEventListener(\'scroll\', function(){\n            if (!window.nzzArticleRead && window.NZZ && window.vamp.articleRead) {\n              window.vamp.articleRead(window.NZZ.metadata);\n              window.nzzArticleRead = true;\n            }\n          });\n        });\n      },\n      function() {\n        return window.appDataReady\n      });\n\n     if ('.concat(!1, ') {\n        const path = encodeURI(\'').concat(this.$route.fullPath.replace('/webview/', '/webview2/'), '\');\n        setInterval(function() {\n          ').concat('\n    try {\n     fetch(\'/'.concat('api/v1\' + path + \'?version=a5afeb0986c2095be9c7dcd43c7898f7cc66676e', '\', {\n       method: \'GET\',\n         redirect: \'follow\'\n       }).then(res => {\n         if (res.status === 200) {\n           return res.json();\n         }\n       }).then(res => {\n         if (res && res.content) {\n           const liveTicker = res.content.filter(r => r.identifier.indexOf(\'.time\') > -1 || r.identifier.indexOf(\'.liveticker-post\') > -1)\n           if (liveTicker.length && liveTicker.length !== document.querySelectorAll(\'.container > .articlecomponent.time, .container > .articlecomponent.liveticker-post\').length) {\n              document.querySelector(\'.webalert\').classList.add(\'active\');\n           }\n         }\n       });\n   } catch (e) { console.log(e) }\n  '), '\n        }, 40000);\n      }\n    ')
          },
          {
            hid: 'loader-fetch-galleries',
            type: 'text/javascript',
            preserve: 'preserve',
            innerHTML: Object(l.h) ()
          }
        ];
        if (this.data.sliderImages && (this.data.webviewMetadata.galleries = this.data.sliderImages), this.data.webviewMetadata) {
          this.data.webviewMetadata.supportsFontChange = this.$store.state.features.hasFontSizeChanger && this.$config.fontChangeArticleLayouts.includes(this.$store.state.metadata.layout);
          var meta = this.data.webviewMetadata;
          this.data.webviewMetadata.link = meta.nzzId,
          script.push.apply(script, o() (Object(c.b) (this.data.webviewMetadata, 'articleLoaded')))
        }
        return 'gallery' === this.data.metadata.layout && script.push({
          hid: 'vamp-article-gallery',
          preserve: 'preserve',
          type: 'text/javascript',
          innerHTML: '\n         appDataReady.then(function() {\n           if (window.NZZ.metadata.galleries) {\n             window.vamp.navigateToGallery({\n              images: window.NZZ.metadata.galleries,\n              selectedImage: 0,\n              sharingUrl: \''.concat(this.data.seoData.canonical, '\',\n              articleTitle: \'').concat(this.data.seoData.title, '\'\n             });\n          }\n         });\n        ')
        }),
        {
          __dangerouslyDisableSanitizers: [
            'script'
          ],
          script: script
        }
      }
    },
    f = n(1),
    component = Object(f.a) (d, (function () {
      var t = this,
      e = t.$createElement;
      return (t._self._c || e) ('ArticleComponent', {
        attrs: {
          data: t.data,
          isarticle: !0,
          renderall: !0,
          pagetype: t.pagetype
        }
      })
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  440: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      extends : n(112).default
    },
    o = (n(762), n(1)),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.data ? n('div', {
        staticClass: 'widget widget--iframe'
      }, [
        n('iframe', {
          staticClass: 'market-iframe',
          staticStyle: {
            border: '0',
            width: '100%'
          },
          attrs: {
            id: 'market-widget-' + t.data.id,
            src: decodeURIComponent(t.params.url) + '#market-widget-' + t.data.id,
            allowfullscreen: 'false'
          }
        })
      ]) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  443: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      extends : n(369).default,
      data: function () {
        return {
          countrySwitch: {
            id: 'doc-1crpkub0601',
            name: this.$store.getters.isDE ? 'Ausgabe für Deutschland' : 'Schweizer Ausgabe',
            hasIcons: !0,
            ref: '',
            data: 'user-menu-button',
            sections: [
              {
                id: 'doc-1f08c1k2o01',
                name: '',
                trackingLevel: 'usermenuLevel1',
                data: 'user-menu',
                items: [
                  {
                    headerCountrySwitch: !0,
                    id: 'doc-1crpkub0611',
                    name: 'Schweizer Ausgabe',
                    snackbar: 'dechtop',
                    property: 'digitalData.user[0].profile[0].attributes.c1.clientCountryCode',
                    attr: 'data-nzz-country',
                    value: 'CH',
                    icon: {
                      height: '28',
                      width: '28',
                      name: 'ico_checkbox_48',
                      color: '#000000'
                    }
                  },
                  {
                    headerCountrySwitch: !0,
                    id: 'doc-1crpkub021',
                    name: 'Ausgabe für Deutschland',
                    snackbar: 'chdetop',
                    property: 'digitalData.user[0].profile[0].attributes.c1.clientCountryCode',
                    attr: 'data-nzz-country',
                    value: 'DE',
                    icon: {
                      height: '28',
                      width: '28',
                      name: 'ico_checkbox_48',
                      color: '#000000'
                    }
                  }
                ]
              }
            ]
          }
        }
      }
    },
    o = (n(914), n(1)),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', {
        staticClass: 'header-service'
      }, [
        n('div', {
          staticClass: 'header-service__holder'
        }, [
          n('div', {
            staticClass: 'header-service__wrapper'
          }, [
            n('div', {
              staticClass: 'header-service__container header-service__container--left'
            }, [
              t._l(t.leftItems, (function (e, r) {
                return [e.sections ? n('DropdownMenu', {
                  key: 'left-' + r + "$",
                  staticClass: 'header-service__item',
                  attrs: {
                    label: e.name,
                    sections: e.sections,
                    'button-ref': e.ref,
                    'button-data': e.data
                  }
                }) : n('HeaderButton', {
                  key: 'hdb-left-' + r + "$",
                  staticClass: 'header-button--service header-service__item',
                  attrs: {
                    target: e.external ? '_blank' : '_self',
                    href: t.isAboBase(e)
                  }
                }, [
                  t._v('\n            ' + t._s(e.name) + '\n          ')
                ])]
              }))
            ], 2),
            t._v(' '),
            n('div', {
              staticClass: 'header-service__container header-service__container--right'
            }, [
              t._l(t.rightItems, (function (e, r) {
                return [e.sections ? n('DropdownMenu', {
                  key: 'right-' + r + "$",
                  staticClass: 'header-service__item',
                  attrs: {
                    label: e.name,
                    sections: e.sections,
                    'button-ref': e.ref,
                    'button-data': e.data
                  }
                }) : n('HeaderButton', {
                  key: 'hdb-right-' + r + "$",
                  staticClass: 'header-button--service header-service__item',
                  attrs: {
                    target: e.external ? '_blank' : '_self',
                    href: t.isAboBase(e)
                  }
                }, [
                  t._v('\n            ' + t._s(e.name) + '\n          ')
                ])]
              })),
              t._v(' '),
              t.$store.state.features.c1 ? n('DropdownMenu', {
                staticClass: 'header-service__item country-switch',
                attrs: {
                  label: t.countrySwitch.name,
                  sections: t.countrySwitch.sections,
                  'button-ref': t.countrySwitch.ref,
                  'button-data': t.countrySwitch.data
                }
              }) : t._e()
            ], 2)
          ])
        ])
      ])
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  449: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'ContentNavigation',
      components: {
        NzzLink: n(31).default
      },
      computed: {
        title: function () {
          return this.$store.state.seoData && this.$store.state.seoData.footerTagsTitle ? this.$store.state.seoData.footerTagsTitle : this.$store.getters.contentNavigation.title
        },
        items: function () {
          return this.$store.getters.contentNavigation.items
        }
      }
    },
    o = (n(1363), n(1)),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', {
        staticClass: 'container content-navigation'
      }, [
        t.title ? n('h2', {
          staticClass: 'content-navigation__title'
        }, [
          t._v('\n    ' + t._s(t.title) + '\n  ')
        ]) : t._e(),
        t._v(' '),
        n('ul', {
          staticClass: 'content-navigation__list'
        }, t._l(t.items, (function (e) {
          return n('li', {
            key: e.id,
            staticClass: 'content-navigation__item'
          }, [
            n('NzzLink', {
              staticClass: 'content-navigation__link',
              attrs: {
                'data-nzz-tid': 'menu-level-1',
                'data-nzz-referrer': 'footerTag',
                'data-nzz-referrer-name': e.name,
                url: e.url
              }
            }, [
              t._v('\n        ' + t._s(e.name) + '\n      ')
            ])
          ], 1)
        })), 0)
      ])
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  451: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(3),
    o = n.n(r),
    c = n(15),
    l = n(65);
    function d(object, t) {
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
    function f(t) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {
        };
        i % 2 ? d(Object(source), !0).forEach((function (e) {
          o() (t, e, source[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : d(Object(source)).forEach((function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
        }))
      }
      return t
    }
    var h = {
      components: {
        cta: function () {
          return Promise.all([n.e(1),
          n.e(8)]).then(n.bind(null, 450))
        },
        Offers: function () {
          return Promise.all([n.e(1),
          n.e(8)]).then(n.bind(null, 452))
        }
      },
      props: {
        snippet: {
          type: Object,
        default:
          function () {
          }
        },
        filter: {
          type: String,
        default:
          ''
        }
      },
      data: function () {
        return {
          extended: !1,
          titleToolbar: !1,
          ctaAction: 'conversion',
          componentName: 'Insert',
          headerToolbar: [
            ['bold',
            'italic',
            'link']
          ],
          contentToolbar: [
            ['bold',
            'italic',
            'link',
            'list']
          ],
          toolbar: [
            ['bold',
            'italic',
            {
              header: '2'
            },
            'link',
            'list']
          ]
        }
      },
      computed: {
        item: function () {
          return this.snippet.settings ? this.snippet.settings : this.snippet
        },
        rightParent: function () {
          return ['sharebox'].includes(this.filter)
        }
      },
      mounted: function () {
        var t = this;
        this.rightParent && this.snippet && window.deferred((function () {
          t.handleEditor(),
          Object(c.b) () || t.addTracking()
        }), (function () {
          return window.document.querySelector('.sharebox')
        }))
      },
      methods: {
        addTracking: function () {
          var t = this,
          e = this;
          window.deferred((function () {
            var n = t.item.c1ConversionProperty,
            r = void 0 === n ? 'Insert' : n;
            Object(l.d) ('conversion', r, t.$config),
            window.dispatchEvent(new window.CustomEvent('tms:component:create', {
              detail: {
                componentID: e.snippet.c1id,
                componentName: e.snippet.name,
                componentSubType1: 'c1',
                componentType: 'notification',
                componentSubType2: e.componentName
              }
            })),
            window.dispatchEvent(new window.CustomEvent('tms:event:push', {
              detail: f({
              }, e.eventData())
            }))
          }))
        },
        eventData: function () {
          return {
            eventInfo: {
              eventName: 'Notification Interaction',
              eventAction: 'display',
              eventPosition: '',
              eventValue: '',
              eventNonInteractive: !0,
              type: 'notification',
              componentID: this.snippet.c1id,
              componentName: this.snippet.name
            },
            category: {
              primaryCategory: 'notification',
              subCategory1: 'c1',
              subCategory2: 'non-disruptive',
              subCategory3: this.componentName
            }
          }
        },
        handleEditor: function () {
          var t = this;
          Object(c.d) ((function () {
            t.$el && t.$nextTick((function () {
              t.initEditors()
            }))
          }))
        },
        initEditors: function () {
          var t = this;
          Promise.all([n.e(9),
          n.e(3)]).then(n.bind(null, 1563)).then((function (e) {
            var n = e.initEditor;
            n({
              selector: '.insert [data-editor="content"]',
              key: 'content',
              toolbar: t.toolbar
            }),
            n({
              selector: '.insert [data-editor="text"]',
              key: 'text',
              toolbar: t.toolbar
            }),
            n({
              selector: '.insert [data-editor="title"]',
              key: 'title',
              toolbar: t.toolbar
            }),
            (t.item.offers || [
            ]).forEach((function (e, r) {
              n({
                selector: '.insert [data-editor="title-'.concat(r, '"]'),
                key: 'title',
                index: r,
                collection: 'offers',
                toolbar: t.titleToolbar
              }),
              n({
                selector: '.insert [data-editor="content-'.concat(r, '"]'),
                key: 'content',
                index: r,
                collection: 'offers',
                toolbar: t.contentToolbar
              }),
              n({
                selector: '.insert [data-editor="fineprint-'.concat(r, '"]'),
                key: 'fineprint',
                index: r,
                collection: 'offers',
                toolbar: t.headerToolbar
              })
            }))
          }))
        }
      }
    },
    m = (n(1365), n(1)),
    component = Object(m.a) (h, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.rightParent && t.snippet ? n('div', {
        staticClass: 'insert articlecomponent'
      }, [
        n('div', {
          staticClass: 'insert__wrapper'
        }, [
          n('div', {
            staticClass: 'insert__text'
          }, [
            n('div', {
              attrs: {
                'data-editor': 'text'
              },
              domProps: {
                innerHTML: t._s(t.item.text)
              }
            })
          ]),
          t._v(' '),
          t.item.ctas && t.item.ctas.length > 0 ? [
            n('div', {
              staticClass: 'insert__content-cta'
            }, t._l(t.item.ctas, (function (e, r) {
              return n('cta', {
                key: 'cta-insert-' + r,
                attrs: {
                  cta: e,
                  event: t.eventData(),
                  index: r
                }
              })
            })), 1)
          ] : t._e(),
          t._v(' '),
          t.item.offers && t.item.offers.length > 0 ? [
            n('Offers', {
              attrs: {
                items: t.item.offers,
                event: t.eventData()
              }
            })
          ] : t._e()
        ], 2)
      ]) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  460: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(6),
    o = n.n(r),
    c = n(5),
    l = n.n(c),
    d = n(2),
    f = n.n(d);
    function h(t) {
      return 1 - (1 - t) * (1 - t)
    }
    function m(t, e) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : h;
      return new Promise((function (r) {
        var o;
        window.requestAnimationFrame((function c(l) {
          o || (o = l);
          var progress = (l - o) / e;
          try {
            t(n(progress))
          } catch (t) {
          }
          progress < 1 ? window.requestAnimationFrame(c) : r()
        }))
      }))
    }
    var v = {
      data: function () {
        return {
          scrollLeft: 0,
          scrollWidth: 0,
          width: 0,
          listeners: {
            resize: [
              this.onResize
            ]
          }
        }
      },
      computed: {
        isWebview: function () {
          return this.$store.state.isrendition.indexOf('webview') > - 1
        },
        scrollable: function () {
          return this.scrollWidth > Math.ceil(this.width)
        },
        moreContentLeft: function () {
          return Math.floor(this.scrollLeft) > 0
        },
        moreContentRight: function () {
          return Math.ceil(this.scrollLeft + this.width) < this.scrollWidth
        }
      },
      mounted: function () {
        var t = this;
        return l() (f.a.mark((function e() {
          return f.a.wrap((function (e) {
            for (; ; ) switch (e.prev = e.next) {
              case 0:
                return e.next = 2,
                t.$nextTick();
              case 2:
                t.checkGeometry(),
                Object.entries(t.listeners).forEach((function (t) {
                  var e = o() (t, 2),
                  n = e[0];
                  e[1].forEach((function (t) {
                    window.addEventListener(n, t)
                  }))
                }));
              case 4:
              case 'end':
                return e.stop()
            }
          }), e)
        }))) ()
      },
      beforeDestroy: function () {
        Object.entries(this.listeners).forEach((function (t) {
          var e = o() (t, 2),
          n = e[0];
          e[1].forEach((function (t) {
            window.removeEventListener(n, t)
          }))
        }))
      },
      methods: {
        checkGeometry: function () {
          var t = this.$el.getBoundingClientRect().width,
          e = this.$refs.content,
          n = e.scrollWidth,
          r = e.scrollLeft;
          this.width = t,
          this.scrollWidth = n,
          this.scrollLeft = r
        },
        onResize: function () {
          this.checkGeometry()
        },
        move: function (t, e) {
          var n = arguments,
          r = this;
          return l() (f.a.mark((function o() {
            var c,
            l,
            d;
            return f.a.wrap((function (o) {
              for (; ; ) switch (o.prev = o.next) {
                case 0:
                  return c = n.length > 2 && void 0 !== n[2] ? n[2] : 400,
                  l = Math.ceil(Math.min(r.width - 150, t)),
                  d = r.scrollLeft,
                  o.next = 5,
                  m((function (t) {
                    r.$refs.content.scrollLeft = Math.ceil(t * l) * e + d
                  }), c);
                case 5:
                  r.checkGeometry();
                case 6:
                case 'end':
                  return o.stop()
              }
            }), o)
          }))) ()
        },
        moveBack: function () {
          this.move(this.scrollLeft, - 1)
        },
        moveForward: function () {
          var t = this.scrollWidth - this.scrollLeft - this.width;
          this.move(t, 1)
        }
      }
    },
    _ = (n(1385), n(1)),
    component = Object(_.a) (v, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', {
        staticClass: 'horizontal-scroll',
        attrs: {
          'data-nzz-horizontal-scroll': ''
        }
      }, [
        n('div', {
          staticClass: 'horizontal-scroll__frame'
        }, [
          n('div', {
            ref: 'content',
            staticClass: 'horizontal-scroll__content',
            attrs: {
              'data-nzz-horizontal-scroll-content': ''
            },
            on: {
              scroll: t.checkGeometry
            }
          }, [
            t._t('content', null, null, {
              scrollable: t.scrollable
            })
          ], 2),
          t._v(' '),
          t.scrollable || t.isWebview ? n('div', [
            n('transition', {
              attrs: {
                name: 'fade'
              }
            }, [
              t.moreContentLeft || t.isWebview ? n('span', {
                staticClass: 'horizontal-scroll__overflow horizontal-scroll__overflow--back',
                attrs: {
                  'data-nzz-horizontal-scroll-overflow-back': ''
                }
              }) : t._e()
            ]),
            t._v(' '),
            n('transition', {
              attrs: {
                name: 'fade'
              }
            }, [
              t.moreContentRight || t.isWebview ? n('span', {
                staticClass: 'horizontal-scroll__overflow horizontal-scroll__overflow--forward',
                attrs: {
                  'data-nzz-horizontal-scroll-overflow-forward': ''
                }
              }) : t._e()
            ]),
            t._v(' '),
            n('transition', {
              attrs: {
                name: 'fade'
              }
            }, [
              t.moreContentLeft ? n('button', {
                staticClass: 'button horizontal-scroll__move horizontal-scroll__move--back',
                on: {
                  click: t.moveBack
                }
              }, [
                n('svgicon', {
                  attrs: {
                    width: '7',
                    height: '11',
                    name: 'nzz_little_chevron',
                    color: 'r-#000000'
                  }
                })
              ], 1) : t._e()
            ]),
            t._v(' '),
            n('transition', {
              attrs: {
                name: 'fade'
              }
            }, [
              t.moreContentRight ? n('button', {
                staticClass: 'button horizontal-scroll__move horizontal-scroll__move--forward',
                on: {
                  click: t.moveForward
                }
              }, [
                n('svgicon', {
                  attrs: {
                    width: '7',
                    height: '11',
                    name: 'nzz_little_chevron',
                    color: 'r-#000000'
                  }
                })
              ], 1) : t._e()
            ])
          ], 1) : t._e()
        ])
      ])
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  464: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(3),
    o = n.n(r),
    c = n(5),
    l = n.n(c),
    d = n(2),
    f = n.n(d),
    h = n(9),
    m = n.n(h),
    v = n(41),
    _ = n(8);
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
    function x(t) {
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
    var y = {
      components: {
        WidgetTitle: v.default,
        Teaser: function () {
          return Promise.resolve().then(n.bind(null, 35))
        }
      },
      props: {
        currentArticleId: {
          type: String,
        default:
          ''
        }
      },
      data: function () {
        return {
          items: [
          ]
        }
      },
      mounted: function () {
        var t = this;
        return l() (f.a.mark((function e() {
          var n,
          data;
          return f.a.wrap((function (e) {
            for (; ; ) switch (e.prev = e.next) {
              case 0:
                return e.prev = 0,
                e.next = 3,
                m() (x(x({
                }, Object(_.a) (t.$config.enricoBasicAuth)), {
                }, {
                  url: ''.concat(t.$config.enricoBase, '/').concat('newest-articles'),
                  params: {
                    product: t.$config.product,
                    limit: 5,
                    offset: 0
                  }
                }));
              case 3:
                n = e.sent,
                data = n.data,
                t.items = data.filter((function (e) {
                  return e.metadata.nzzId !== t.currentArticleId
                })).slice(0, 4).map((function (t) {
                  return t.metadata
                })),
                e.next = 11;
                break;
              case 8:
                e.prev = 8,
                e.t0 = e.catch(0),
                console.error(e.t0);
              case 11:
              case 'end':
                return e.stop()
            }
          }), e, null, [
            [0,
            8]
          ])
        }))) ()
      }
    },
    z = n(1),
    component = Object(z.a) (y, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return 0 !== t.items.length ? n('div', {
        staticClass: 'widget--next-reads',
        attrs: {
          'data-nzz-tid': 'next-reads',
          'data-source-element-widget': ''
        }
      }, [
        n('WidgetTitle', {
          attrs: {
            data: {
              'widget-title': 'Neu auf The Market'
            }
          }
        }),
        t._v(' '),
        t._l(t.items, (function (t) {
          return n('Teaser', {
            key: t.nzzId,
            class : 'teaser__layout--' + t.layout + ' teaser--next-reads',
            attrs: {
              item: t,
              componenttype: 'next-reads',
              size: 'next-reads',
              'referrer-type': 'nextReads'
            }
          })
        }))
      ], 2) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  469: function (t, e, n) {
    'use strict';
    n.r(e);
    var header = {
      HEIGHT_FULL: 136,
      HEIGHT_TABLET: 120,
      HEIGHT_REDUCED: 56,
      WIDTH_TABLET: 768,
      WIDTH_DESKTOP: 768
    },
    r = {
      name: 'HeaderScrollWrapper',
      data: function () {
        return {
          height: null
        }
      },
      computed: {
        shrunkHeader: function () {
          return parseInt(this.height, 10) === header.HEIGHT_REDUCED
        },
        distanceToTop: function () {
          return this.$store.state.header.aboveHeaderHeight
        },
        isArticle: function () {
          return 'Article' === this.$store.state.header.pageType
        }
      },
      mounted: function () {
        window.addEventListener('resize', this.updateHeaderHeight),
        window.addEventListener('scroll', this.updateHeaderHeight)
      },
      updated: function () {
        this.updateHeaderHeight()
      },
      destroyed: function () {
        window.removeEventListener('resize', this.updateHeaderHeight),
        window.removeEventListener('scroll', this.updateHeaderHeight)
      },
      methods: {
        updateHeaderHeight: function () {
          if (this.isArticle) {
            var t = ''.concat(header.HEIGHT_REDUCED, 'px');
            this.height !== t && (this.height = t)
          } else if (!(r < header.WIDTH_TABLET)) {
            var e = window,
            n = e.pageYOffset,
            r = e.innerWidth,
            o = this.height,
            c = this.distanceToTop,
            l = r < header.WIDTH_DESKTOP ? header.HEIGHT_TABLET : header.HEIGHT_FULL,
            d = Math.min(Math.max(n - c, 0), l - header.HEIGHT_REDUCED);
            l - d !== parseInt(o, 10) && r >= header.WIDTH_TABLET ? this.height = ''.concat(l - d, 'px') : r < header.WIDTH_TABLET && (this.height = null)
          }
        }
      }
    },
    o = (n(1406), n(1)),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement;
      return (t._self._c || e) ('div', {
        staticClass: 'header__scrollwrapper',
        class : {
          'head--shrunk': t.shrunkHeader,
          'header__scrollwrapper--article': t.isArticle
        },
        style: {
          height: t.height
        }
      }, [
        t._t('default')
      ], 2)
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  495: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      extends : n(106).default,
      computed: {
        imageTag: function () {
          return 'amp-img'
        },
        layoutAttribute: function () {
          return 'intrinsic'
        },
        isLightbox: function () {
          return this.data.group ? this.data.group : this.data.id
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  496: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      extends : n(99).default
    },
    o = (n(1146), n(1)),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  513: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      extends : n(106).default,
      computed: {
        imageType: function () {
          return 'fragment'
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  516: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      components: {
        WidgetSlider: function () {
          return n.e(2).then(n.bind(null, 548))
        }
      },
      extends : n(335).default
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  518: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(122),
    o = {
      components: {
        HeadlineTitle: n(320).default
      },
      extends : r.default
    },
    c = n(1),
    component = Object(c.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  519: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(123),
    o = {
      components: {
        HeadlineTitle: n(320).default
      },
      extends : r.default
    },
    c = n(1),
    component = Object(c.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  520: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(34),
    o = {
      components: {
        HeadlineTitle: n(320).default
      },
      extends : r.default
    },
    c = n(1),
    component = Object(c.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  522: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(100),
    o = {
      components: {
        HeadlineTitle: n(320).default
      },
      extends : r.default
    },
    c = n(1),
    component = Object(c.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  523: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(125),
    o = {
      components: {
        HeadlineTitle: n(320).default
      },
      extends : r.default
    },
    c = n(1),
    component = Object(c.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  524: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(126),
    o = {
      components: {
        HeadlineTitle: n(320).default
      },
      extends : r.default
    },
    c = n(1),
    component = Object(c.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  527: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(100),
    o = {
      components: {
        HeadlineTitle: n(320).default
      },
      extends : r.default
    },
    c = n(1),
    component = Object(c.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  543: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(111),
    o = {
      components: {
        WidgetTitle: n(41).default,
        SimpleArticle: function () {
          return n.e(2).then(n.bind(null, 322))
        }
      },
      extends : r.default
    },
    c = n(1),
    component = Object(c.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  559: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      extends : n(106).default,
      computed: {
        imageType: function () {
          return 'fragment'
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  564: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      components: {
        WidgetSlider: function () {
          return n.e(2).then(n.bind(null, 594))
        }
      },
      extends : n(335).default
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  566: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(122),
    o = {
      components: {
        HeadlineTitle: n(319).default
      },
      extends : r.default
    },
    c = n(1),
    component = Object(c.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  567: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(34),
    o = (n(1039), {
      components: {
        HeadlineTitle: n(319).default
      },
      extends : r.default
    }),
    c = n(1),
    component = Object(c.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  569: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(100),
    o = {
      components: {
        HeadlineTitle: n(319).default
      },
      extends : r.default
    },
    c = n(1),
    component = Object(c.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  570: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(125),
    o = {
      components: {
        HeadlineTitle: n(319).default
      },
      extends : r.default
    },
    c = n(1),
    component = Object(c.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  571: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(126),
    o = {
      components: {
        HeadlineTitle: n(319).default
      },
      extends : r.default
    },
    c = n(1),
    component = Object(c.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  589: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(111),
    o = {
      components: {
        WidgetTitle: n(41).default,
        SimpleArticle: function () {
          return n.e(2).then(n.bind(null, 321))
        }
      },
      extends : r.default
    },
    c = n(1),
    component = Object(c.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  753: function (t, e, n) {
    'use strict';
    var r = {
      update: null,
      begin: null,
      loopBegin: null,
      changeBegin: null,
      change: null,
      changeComplete: null,
      loopComplete: null,
      complete: null,
      loop: 1,
      direction: 'normal',
      autoplay: !0,
      timelineOffset: 0
    },
    o = {
      duration: 1000,
      delay: 0,
      endDelay: 0,
      easing: 'easeOutElastic(1, .5)',
      round: 0
    },
    c = [
      'translateX',
      'translateY',
      'translateZ',
      'rotate',
      'rotateX',
      'rotateY',
      'rotateZ',
      'scale',
      'scaleX',
      'scaleY',
      'scaleZ',
      'skew',
      'skewX',
      'skewY',
      'perspective',
      'matrix',
      'matrix3d'
    ],
    l = {
      CSS: {
      },
      springs: {
      }
    };
    function d(t, e, n) {
      return Math.min(Math.max(t, e), n)
    }
    function f(t, text) {
      return t.indexOf(text) > - 1
    }
    function h(t, e) {
      return t.apply(null, e)
    }
    var m = {
      arr: function (a) {
        return Array.isArray(a)
      },
      obj: function (a) {
        return f(Object.prototype.toString.call(a), 'Object')
      },
      pth: function (a) {
        return m.obj(a) && a.hasOwnProperty('totalLength')
      },
      svg: function (a) {
        return a instanceof SVGElement
      },
      inp: function (a) {
        return a instanceof HTMLInputElement
      },
      dom: function (a) {
        return a.nodeType || m.svg(a)
      },
      str: function (a) {
        return 'string' == typeof a
      },
      fnc: function (a) {
        return 'function' == typeof a
      },
      und: function (a) {
        return void 0 === a
      },
      nil: function (a) {
        return m.und(a) || null === a
      },
      hex: function (a) {
        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)
      },
      rgb: function (a) {
        return /^rgb/.test(a)
      },
      hsl: function (a) {
        return /^hsl/.test(a)
      },
      col: function (a) {
        return m.hex(a) || m.rgb(a) || m.hsl(a)
      },
      key: function (a) {
        return !r.hasOwnProperty(a) && !o.hasOwnProperty(a) && 'targets' !== a && 'keyframes' !== a
      }
    };
    function v(t) {
      var e = /\(([^)]+)\)/.exec(t);
      return e ? e[1].split(',').map((function (p) {
        return parseFloat(p)
      })) : [
      ]
    }
    function _(t, e) {
      var n = v(t),
      r = d(m.und(n[0]) ? 1 : n[0], 0.1, 100),
      o = d(m.und(n[1]) ? 100 : n[1], 0.1, 100),
      c = d(m.und(n[2]) ? 10 : n[2], 0.1, 100),
      f = d(m.und(n[3]) ? 0 : n[3], 0.1, 100),
      h = Math.sqrt(o / r),
      _ = c / (2 * Math.sqrt(o * r)),
      w = _ < 1 ? h * Math.sqrt(1 - _ * _) : 0,
      b = _ < 1 ? (_ * h - f) / w : - f + h;
      function x(t) {
        var progress = e ? e * t / 1000 : t;
        return progress = _ < 1 ? Math.exp( - progress * _ * h) * (1 * Math.cos(w * progress) + b * Math.sin(w * progress)) : (1 + b * progress) * Math.exp( - progress * h),
        0 === t || 1 === t ? t : 1 - progress
      }
      return e ? x : function () {
        var e = l.springs[t];
        if (e) return e;
        for (var n = 1 / 6, r = 0, o = 0; ; ) if (1 === x(r += n)) {
          if (++o >= 16) break
        } else o = 0;
        var c = r * n * 1000;
        return l.springs[t] = c,
        c
      }
    }
    function w(t) {
      return void 0 === t && (t = 10),
      function (e) {
        return Math.ceil(d(e, 0.000001, 1) * t) * (1 / t)
      }
    }
    var x,
    y,
    z = function () {
      var t = 0.1;
      function e(t, e) {
        return 1 - 3 * e + 3 * t
      }
      function n(t, e) {
        return 3 * e - 6 * t
      }
      function r(t) {
        return 3 * t
      }
      function o(t, o, c) {
        return ((e(o, c) * t + n(o, c)) * t + r(o)) * t
      }
      function c(t, o, c) {
        return 3 * e(o, c) * t * t + 2 * n(o, c) * t + r(o)
      }
      return function (e, n, r, l) {
        if (0 <= e && e <= 1 && 0 <= r && r <= 1) {
          var d = new Float32Array(11);
          if (e !== n || r !== l) for (var i = 0; i < 11; ++i) d[i] = o(i * t, e, r);
          return function (t) {
            return e === n && r === l || 0 === t || 1 === t ? t : o(f(t), n, l)
          }
        }
        function f(n) {
          for (var l = 0, f = 1; 10 !== f && d[f] <= n; ++f) l += t;
          --f;
          var h = l + (n - d[f]) / (d[f + 1] - d[f]) * t,
          m = c(h, e, r);
          return m >= 0.001 ? function (t, e, n, r) {
            for (var i = 0; i < 4; ++i) {
              var l = c(e, n, r);
              if (0 === l) return e;
              e -= (o(e, n, r) - t) / l
            }
            return e
          }(n, h, e, r) : 0 === m ? h : function (t, e, n, r, c) {
            var l,
            d,
            i = 0;
            do {
              (l = o(d = e + (n - e) / 2, r, c) - t) > 0 ? n = d : e = d
            } while (Math.abs(l) > 1e-7 && ++i < 10);
            return d
          }(n, l, l + t, e, r)
        }
      }
    }(),
    O = (x = {
      linear: function () {
        return function (t) {
          return t
        }
      }
    }, y = {
      Sine: function () {
        return function (t) {
          return 1 - Math.cos(t * Math.PI / 2)
        }
      },
      Circ: function () {
        return function (t) {
          return 1 - Math.sqrt(1 - t * t)
        }
      },
      Back: function () {
        return function (t) {
          return t * t * (3 * t - 2)
        }
      },
      Bounce: function () {
        return function (t) {
          for (var e, b = 4; t < ((e = Math.pow(2, --b)) - 1) / 11; );
          return 1 / Math.pow(4, 3 - b) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
        }
      },
      Elastic: function (t, e) {
        void 0 === t && (t = 1),
        void 0 === e && (e = 0.5);
        var a = d(t, 1, 10),
        p = d(e, 0.1, 2);
        return function (t) {
          return 0 === t || 1 === t ? t : - a * Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1 - p / (2 * Math.PI) * Math.asin(1 / a)) * (2 * Math.PI) / p)
        }
      }
    }, [
      'Quad',
      'Cubic',
      'Quart',
      'Quint',
      'Expo'
    ].forEach((function (t, i) {
      y[t] = function () {
        return function (t) {
          return Math.pow(t, i + 2)
        }
      }
    })), Object.keys(y).forEach((function (t) {
      var e = y[t];
      x['easeIn' + t] = e,
      x['easeOut' + t] = function (a, b) {
        return function (t) {
          return 1 - e(a, b) (1 - t)
        }
      },
      x['easeInOut' + t] = function (a, b) {
        return function (t) {
          return t < 0.5 ? e(a, b) (2 * t) / 2 : 1 - e(a, b) ( - 2 * t + 2) / 2
        }
      },
      x['easeOutIn' + t] = function (a, b) {
        return function (t) {
          return t < 0.5 ? (1 - e(a, b) (1 - 2 * t)) / 2 : (e(a, b) (2 * t - 1) + 1) / 2
        }
      }
    })), x);
    function C(t, e) {
      if (m.fnc(t)) return t;
      var n = t.split('(') [0],
      r = O[n],
      o = v(t);
      switch (n) {
        case 'spring':
          return _(t, e);
        case 'cubicBezier':
          return h(z, o);
        case 'steps':
          return h(w, o);
        default:
          return h(r, o)
      }
    }
    function k(t) {
      try {
        return document.querySelectorAll(t)
      } catch (t) {
        return
      }
    }
    function T(t, e) {
      for (var n = t.length, r = arguments.length >= 2 ? arguments[1] : void 0, o = [
      ], i = 0; i < n; i++) if (i in t) {
        var c = t[i];
        e.call(r, c, i, t) && o.push(c)
      }
      return o
    }
    function j(t) {
      return t.reduce((function (a, b) {
        return a.concat(m.arr(b) ? j(b) : b)
      }), [
      ])
    }
    function M(t) {
      return m.arr(t) ? t : (m.str(t) && (t = k(t) || t), t instanceof NodeList || t instanceof HTMLCollection ? [
      ].slice.call(t) : [
        t
      ])
    }
    function E(t, e) {
      return t.some((function (a) {
        return a === e
      }))
    }
    function I(t) {
      var e = {
      };
      for (var p in t) e[p] = t[p];
      return e
    }
    function H(t, e) {
      var n = I(t);
      for (var p in t) n[p] = e.hasOwnProperty(p) ? e[p] : t[p];
      return n
    }
    function P(t, e) {
      var n = I(t);
      for (var p in e) n[p] = m.und(t[p]) ? e[p] : t[p];
      return n
    }
    function S(t) {
      return m.rgb(t) ? (n = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e = t)) ? 'rgba(' + n[1] + ',1)' : e : m.hex(t) ? function (t) {
        var e = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function (t, e, g, b) {
          return e + e + g + g + b + b
        })),
        n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
        return 'rgba(' + parseInt(n[1], 16) + ',' + parseInt(n[2], 16) + ',' + parseInt(n[3], 16) + ',1)'
      }(t) : m.hsl(t) ? function (t) {
        var e,
        g,
        b,
        n = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),
        r = parseInt(n[1], 10) / 360,
        s = parseInt(n[2], 10) / 100,
        o = parseInt(n[3], 10) / 100,
        a = n[4] || 1;
        function c(p, q, t) {
          return t < 0 && (t += 1),
          t > 1 && (t -= 1),
          t < 1 / 6 ? p + 6 * (q - p) * t : t < 0.5 ? q : t < 2 / 3 ? p + (q - p) * (2 / 3 - t) * 6 : p
        }
        if (0 == s) e = g = b = o;
         else {
          var q = o < 0.5 ? o * (1 + s) : o + s - o * s,
          p = 2 * o - q;
          e = c(p, q, r + 1 / 3),
          g = c(p, q, r),
          b = c(p, q, r - 1 / 3)
        }
        return 'rgba(' + 255 * e + ',' + 255 * g + ',' + 255 * b + ',' + a + ')'
      }(t) : void 0;
      var e,
      n
    }
    function $(t) {
      var e = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);
      if (e) return e[1]
    }
    function L(t, e) {
      return m.fnc(t) ? t(e.target, e.id, e.total) : t
    }
    function A(t, e) {
      return t.getAttribute(e)
    }
    function D(t, e, n) {
      if (E([n,
      'deg',
      'rad',
      'turn'], $(e))) return e;
      var r = l.CSS[e + n];
      if (!m.und(r)) return r;
      var o = document.createElement(t.tagName),
      c = t.parentNode && t.parentNode !== document ? t.parentNode : document.body;
      c.appendChild(o),
      o.style.position = 'absolute',
      o.style.width = 100 + n;
      var d = 100 / o.offsetWidth;
      c.removeChild(o);
      var f = d * parseFloat(e);
      return l.CSS[e + n] = f,
      f
    }
    function B(t, e, n) {
      if (e in t.style) {
        var r = e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(),
        o = t.style[e] || getComputedStyle(t).getPropertyValue(r) || '0';
        return n ? D(t, o, n) : o
      }
    }
    function F(t, e) {
      return m.dom(t) && !m.inp(t) && (!m.nil(A(t, e)) || m.svg(t) && t[e]) ? 'attribute' : m.dom(t) && E(c, e) ? 'transform' : m.dom(t) && 'transform' !== e && B(t, e) ? 'css' : null != t[e] ? 'object' : void 0
    }
    function W(t) {
      if (m.dom(t)) {
        for (var e, n = t.style.transform || '', r = /(\w+)\(([^)]*)\)/g, o = new Map; e = r.exec(n); ) o.set(e[1], e[2]);
        return o
      }
    }
    function R(t, e, n, r) {
      var o = f(e, 'scale') ? 1 : 0 + function (t) {
        return f(t, 'translate') || 'perspective' === t ? 'px' : f(t, 'rotate') || f(t, 'skew') ? 'deg' : void 0
      }(e),
      c = W(t).get(e) || o;
      return n && (n.transforms.list.set(e, c), n.transforms.last = e),
      r ? D(t, c, r) : c
    }
    function N(t, e, n, r) {
      switch (F(t, e)) {
        case 'transform':
          return R(t, e, r, n);
        case 'css':
          return B(t, e, n);
        case 'attribute':
          return A(t, e);
        default:
          return t[e] || 0
      }
    }
    function V(t, e) {
      var n = /^(\*=|\+=|-=)/.exec(t);
      if (!n) return t;
      var u = $(t) || 0,
      r = parseFloat(e),
      o = parseFloat(t.replace(n[0], ''));
      switch (n[0][0]) {
        case '+':
          return r + o + u;
        case '-':
          return r - o + u;
        case '*':
          return r * o + u
      }
    }
    function U(t, e) {
      if (m.col(t)) return S(t);
      if (/\s/g.test(t)) return t;
      var n = $(t),
      r = n ? t.substr(0, t.length - n.length) : t;
      return e ? r + e : r
    }
    function G(t, e) {
      return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
    }
    function Z(t) {
      for (var e, n = t.points, r = 0, i = 0; i < n.numberOfItems; i++) {
        var o = n.getItem(i);
        i > 0 && (r += G(e, o)),
        e = o
      }
      return r
    }
    function Q(t) {
      if (t.getTotalLength) return t.getTotalLength();
      switch (t.tagName.toLowerCase()) {
        case 'circle':
          return function (t) {
            return 2 * Math.PI * A(t, 'r')
          }(t);
        case 'rect':
          return function (t) {
            return 2 * A(t, 'width') + 2 * A(t, 'height')
          }(t);
        case 'line':
          return function (t) {
            return G({
              x: A(t, 'x1'),
              y: A(t, 'y1')
            }, {
              x: A(t, 'x2'),
              y: A(t, 'y2')
            })
          }(t);
        case 'polyline':
          return Z(t);
        case 'polygon':
          return function (t) {
            var e = t.points;
            return Z(t) + G(e.getItem(e.numberOfItems - 1), e.getItem(0))
          }(t)
      }
    }
    function Y(t, e) {
      var svg = e || {
      },
      n = svg.el || function (t) {
        for (var e = t.parentNode; m.svg(e) && m.svg(e.parentNode); ) e = e.parentNode;
        return e
      }(t),
      rect = n.getBoundingClientRect(),
      r = A(n, 'viewBox'),
      o = rect.width,
      c = rect.height,
      l = svg.viewBox || (r ? r.split(' ') : [
        0,
        0,
        o,
        c
      ]);
      return {
        el: n,
        viewBox: l,
        x: l[0] / 1,
        y: l[1] / 1,
        w: o,
        h: c,
        vW: l[2],
        vH: l[3]
      }
    }
    function J(path, progress, t) {
      function e(t) {
        void 0 === t && (t = 0);
        var e = progress + t >= 1 ? progress + t : 0;
        return path.el.getPointAtLength(e)
      }
      var svg = Y(path.el, path.svg),
      p = e(),
      n = e( - 1),
      r = e(1),
      o = t ? 1 : svg.w / svg.vW,
      c = t ? 1 : svg.h / svg.vH;
      switch (path.property) {
        case 'x':
          return (p.x - svg.x) * o;
        case 'y':
          return (p.y - svg.y) * c;
        case 'angle':
          return 180 * Math.atan2(r.y - n.y, r.x - n.x) / Math.PI
      }
    }
    function X(t, e) {
      var n = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
      r = U(m.pth(t) ? t.totalLength : t, e) + '';
      return {
        original: r,
        numbers: r.match(n) ? r.match(n).map(Number) : [
          0
        ],
        strings: m.str(t) || e ? r.split(n) : [
        ]
      }
    }
    function K(t) {
      return T(t ? j(m.arr(t) ? t.map(M) : M(t)) : [
      ], (function (t, e, n) {
        return n.indexOf(t) === e
      }))
    }
    function tt(t) {
      var e = K(t);
      return e.map((function (t, i) {
        return {
          target: t,
          id: i,
          total: e.length,
          transforms: {
            list: W(t)
          }
        }
      }))
    }
    function et(t, e) {
      var n = I(e);
      if (/^spring/.test(n.easing) && (n.duration = _(n.easing)), m.arr(t)) {
        var r = t.length;
        2 === r && !m.obj(t[0]) ? t = {
          value: t
        }
         : m.fnc(e.duration) || (n.duration = e.duration / r)
      }
      var o = m.arr(t) ? t : [
        t
      ];
      return o.map((function (t, i) {
        var n = m.obj(t) && !m.pth(t) ? t : {
          value: t
        };
        return m.und(n.delay) && (n.delay = i ? 0 : e.delay),
        m.und(n.endDelay) && (n.endDelay = i === o.length - 1 ? e.endDelay : 0),
        n
      })).map((function (t) {
        return P(t, n)
      }))
    }
    function nt(t, e) {
      var n = [
      ],
      r = e.keyframes;
      for (var p in r && (e = P(function (t) {
        for (var e = T(j(t.map((function (t) {
          return Object.keys(t)
        }))), (function (p) {
          return m.key(p)
        })).reduce((function (a, b) {
          return a.indexOf(b) < 0 && a.push(b),
          a
        }), [
        ]), n = {
        }, r = function (i) {
          var r = e[i];
          n[r] = t.map((function (t) {
            var e = {
            };
            for (var p in t) m.key(p) ? p == r && (e.value = t[p]) : e[p] = t[p];
            return e
          }))
        }, i = 0; i < e.length; i++) r(i);
        return n
      }(r), e)), e) m.key(p) && n.push({
        name: p,
        tweens: et(e[p], t)
      });
      return n
    }
    function it(t, e) {
      var n;
      return t.tweens.map((function (r) {
        var o = function (t, e) {
          var n = {
          };
          for (var p in t) {
            var r = L(t[p], e);
            m.arr(r) && 1 === (r = r.map((function (t) {
              return L(t, e)
            }))).length && (r = r[0]),
            n[p] = r
          }
          return n.duration = parseFloat(n.duration),
          n.delay = parseFloat(n.delay),
          n
        }(r, e),
        c = o.value,
        l = m.arr(c) ? c[1] : c,
        d = $(l),
        f = N(e.target, t.name, d, e),
        h = n ? n.to.original : f,
        v = m.arr(c) ? c[0] : h,
        _ = $(v) || $(f),
        w = d || _;
        return m.und(l) && (l = h),
        o.from = X(v, w),
        o.to = X(V(l, v), w),
        o.start = n ? n.end : 0,
        o.end = o.start + o.delay + o.duration + o.endDelay,
        o.easing = C(o.easing, o.duration),
        o.isPath = m.pth(c),
        o.isPathTargetInsideSVG = o.isPath && m.svg(e.target),
        o.isColor = m.col(o.from.original),
        o.isColor && (o.round = 1),
        n = o,
        o
      }))
    }
    var at = {
      css: function (t, p, e) {
        return t.style[p] = e
      },
      attribute: function (t, p, e) {
        return t.setAttribute(p, e)
      },
      object: function (t, p, e) {
        return t[p] = e
      },
      transform: function (t, p, e, n, r) {
        if (n.list.set(p, e), p === n.last || r) {
          var o = '';
          n.list.forEach((function (t, e) {
            o += e + '(' + t + ') '
          })),
          t.style.transform = o
        }
      }
    };
    function ot(t, e) {
      tt(t).forEach((function (t) {
        for (var n in e) {
          var r = L(e[n], t),
          o = t.target,
          c = $(r),
          l = N(o, n, c, t),
          d = V(U(r, c || $(l)), l),
          f = F(o, n);
          at[f](o, n, d, t.transforms, !0)
        }
      }))
    }
    function st(t, e) {
      return T(j(t.map((function (t) {
        return e.map((function (e) {
          return function (t, e) {
            var n = F(t.target, e.name);
            if (n) {
              var r = it(e, t),
              o = r[r.length - 1];
              return {
                type: n,
                property: e.name,
                animatable: t,
                tweens: r,
                duration: o.end,
                delay: r[0].delay,
                endDelay: o.endDelay
              }
            }
          }(t, e)
        }))
      }))), (function (a) {
        return !m.und(a)
      }))
    }
    function ct(t, e) {
      var n = t.length,
      r = function (t) {
        return t.timelineOffset ? t.timelineOffset : 0
      },
      o = {
      };
      return o.duration = n ? Math.max.apply(Math, t.map((function (t) {
        return r(t) + t.duration
      }))) : e.duration,
      o.delay = n ? Math.min.apply(Math, t.map((function (t) {
        return r(t) + t.delay
      }))) : e.delay,
      o.endDelay = n ? o.duration - Math.max.apply(Math, t.map((function (t) {
        return r(t) + t.duration - t.endDelay
      }))) : e.endDelay,
      o
    }
    var lt = 0;
    var ut = [
    ],
    pt = function () {
      var t;
      function e(n) {
        for (var r = ut.length, i = 0; i < r; ) {
          var o = ut[i];
          o.paused ? (ut.splice(i, 1), r--) : (o.tick(n), i++)
        }
        t = i > 0 ? requestAnimationFrame(e) : void 0
      }
      return 'undefined' != typeof document && document.addEventListener('visibilitychange', (function () {
        ht.suspendWhenDocumentHidden && (ft() ? t = cancelAnimationFrame(t) : (ut.forEach((function (t) {
          return t._onDocumentVisibility()
        })), pt()))
      })),
      function () {
        t || ft() && ht.suspendWhenDocumentHidden || !(ut.length > 0) || (t = requestAnimationFrame(e))
      }
    }();
    function ft() {
      return !!document && document.hidden
    }
    function ht(t) {
      void 0 === t && (t = {
      });
      var e,
      n = 0,
      c = 0,
      l = 0,
      f = 0,
      h = null;
      function m(t) {
        var e = window.Promise && new Promise((function (t) {
          return h = t
        }));
        return t.finished = e,
        e
      }
      var v = function (t) {
        var e = H(r, t),
        n = H(o, t),
        c = nt(n, t),
        l = tt(t.targets),
        d = st(l, c),
        f = ct(d, n),
        h = lt;
        return lt++,
        P(e, {
          id: h,
          children: [
          ],
          animatables: l,
          animations: d,
          duration: f.duration,
          delay: f.delay,
          endDelay: f.endDelay
        })
      }(t);
      m(v);
      function _() {
        var t = v.direction;
        'alternate' !== t && (v.direction = 'normal' !== t ? 'normal' : 'reverse'),
        v.reversed = !v.reversed,
        e.forEach((function (t) {
          return t.reversed = v.reversed
        }))
      }
      function w(time) {
        return v.reversed ? v.duration - time : time
      }
      function x() {
        n = 0,
        c = w(v.currentTime) * (1 / ht.speed)
      }
      function y(time, t) {
        t && t.seek(time - t.timelineOffset)
      }
      function z(t) {
        for (var i = 0, e = v.animations, n = e.length; i < n; ) {
          var r = e[i],
          o = r.animatable,
          c = r.tweens,
          l = c.length - 1,
          f = c[l];
          l && (f = T(c, (function (e) {
            return t < e.end
          })) [0] || f);
          for (var h = d(t - f.start - f.delay, 0, f.duration) / f.duration, m = isNaN(h) ? 1 : f.easing(h), _ = f.to.strings, w = f.round, x = [
          ], y = f.to.numbers.length, progress = void 0, z = 0; z < y; z++) {
            var O = void 0,
            C = f.to.numbers[z],
            k = f.from.numbers[z] || 0;
            O = f.isPath ? J(f.value, m * C, f.isPathTargetInsideSVG) : k + m * (C - k),
            w && (f.isColor && z > 2 || (O = Math.round(O * w) / w)),
            x.push(O)
          }
          var j = _.length;
          if (j) {
            progress = _[0];
            for (var s = 0; s < j; s++) {
              _[s];
              var b = _[s + 1],
              M = x[s];
              isNaN(M) || (progress += b ? M + b : M + ' ')
            }
          } else progress = x[0];
          at[r.type](o.target, r.property, progress, o.transforms),
          r.currentValue = progress,
          i++
        }
      }
      function O(t) {
        v[t] && !v.passThrough && v[t](v)
      }
      function C(t) {
        var r = v.duration,
        o = v.delay,
        x = r - v.endDelay,
        C = w(t);
        v.progress = d(C / r * 100, 0, 100),
        v.reversePlayback = C < v.currentTime,
        e && function (time) {
          if (v.reversePlayback) for (var t = f; t--; ) y(time, e[t]);
           else for (var i = 0; i < f; i++) y(time, e[i])
        }(C),
        !v.began && v.currentTime > 0 && (v.began = !0, O('begin')),
        !v.loopBegan && v.currentTime > 0 && (v.loopBegan = !0, O('loopBegin')),
        C <= o && 0 !== v.currentTime && z(0),
        (C >= x && v.currentTime !== r || !r) && z(r),
        C > o && C < x ? (v.changeBegan || (v.changeBegan = !0, v.changeCompleted = !1, O('changeBegin')), O('change'), z(C)) : v.changeBegan && (v.changeCompleted = !0, v.changeBegan = !1, O('changeComplete')),
        v.currentTime = d(C, 0, r),
        v.began && O('update'),
        t >= r && (c = 0, v.remaining && !0 !== v.remaining && v.remaining--, v.remaining ? (n = l, O('loopComplete'), v.loopBegan = !1, 'alternate' === v.direction && _()) : (v.paused = !0, v.completed || (v.completed = !0, O('loopComplete'), O('complete'), !v.passThrough && 'Promise' in window && (h(), m(v)))))
      }
      return v.reset = function () {
        var t = v.direction;
        v.passThrough = !1,
        v.currentTime = 0,
        v.progress = 0,
        v.paused = !0,
        v.began = !1,
        v.loopBegan = !1,
        v.changeBegan = !1,
        v.completed = !1,
        v.changeCompleted = !1,
        v.reversePlayback = !1,
        v.reversed = 'reverse' === t,
        v.remaining = v.loop,
        e = v.children;
        for (var i = f = e.length; i--; ) v.children[i].reset();
        (v.reversed && !0 !== v.loop || 'alternate' === t && 1 === v.loop) && v.remaining++,
        z(v.reversed ? v.duration : 0)
      },
      v._onDocumentVisibility = x,
      v.set = function (t, e) {
        return ot(t, e),
        v
      },
      v.tick = function (t) {
        l = t,
        n || (n = l),
        C((l + (c - n)) * ht.speed)
      },
      v.seek = function (time) {
        C(w(time))
      },
      v.pause = function () {
        v.paused = !0,
        x()
      },
      v.play = function () {
        v.paused && (v.completed && v.reset(), v.paused = !1, ut.push(v), x(), pt())
      },
      v.reverse = function () {
        _(),
        v.completed = !v.reversed,
        x()
      },
      v.restart = function () {
        v.reset(),
        v.play()
      },
      v.remove = function (t) {
        gt(K(t), v)
      },
      v.reset(),
      v.autoplay && v.play(),
      v
    }
    function mt(t, e) {
      for (var a = e.length; a--; ) E(t, e[a].animatable.target) && e.splice(a, 1)
    }
    function gt(t, e) {
      var n = e.animations,
      r = e.children;
      mt(t, n);
      for (var o = r.length; o--; ) {
        var c = r[o],
        l = c.animations;
        mt(t, l),
        l.length || c.children.length || r.splice(o, 1)
      }
      n.length || r.length || e.pause()
    }
    ht.version = '3.2.1',
    ht.speed = 1,
    ht.suspendWhenDocumentHidden = !0,
    ht.running = ut,
    ht.remove = function (t) {
      for (var e = K(t), i = ut.length; i--; ) {
        gt(e, ut[i])
      }
    },
    ht.get = N,
    ht.set = ot,
    ht.convertPx = D,
    ht.path = function (path, t) {
      var e = m.str(path) ? k(path) [0] : path,
      p = t || 100;
      return function (t) {
        return {
          property: t,
          el: e,
          svg: Y(e),
          totalLength: Q(e) * (p / 100)
        }
      }
    },
    ht.setDashoffset = function (t) {
      var e = Q(t);
      return t.setAttribute('stroke-dasharray', e),
      e
    },
    ht.stagger = function (t, e) {
      void 0 === e && (e = {
      });
      var n = e.direction || 'normal',
      r = e.easing ? C(e.easing) : null,
      o = e.grid,
      c = e.axis,
      l = e.from || 0,
      d = 'first' === l,
      f = 'center' === l,
      h = 'last' === l,
      v = m.arr(t),
      _ = v ? parseFloat(t[0]) : parseFloat(t),
      w = v ? parseFloat(t[1]) : 0,
      x = $(v ? t[1] : t) || 0,
      y = e.start || 0 + (v ? _ : 0),
      z = [
      ],
      O = 0;
      return function (t, i, e) {
        if (d && (l = 0), f && (l = (e - 1) / 2), h && (l = e - 1), !z.length) {
          for (var m = 0; m < e; m++) {
            if (o) {
              var C = f ? (o[0] - 1) / 2 : l % o[0],
              k = f ? (o[1] - 1) / 2 : Math.floor(l / o[0]),
              T = C - m % o[0],
              j = k - Math.floor(m / o[0]),
              M = Math.sqrt(T * T + j * j);
              'x' === c && (M = - T),
              'y' === c && (M = - j),
              z.push(M)
            } else z.push(Math.abs(l - m));
            O = Math.max.apply(Math, z)
          }
          r && (z = z.map((function (t) {
            return r(t / O) * O
          }))),
          'reverse' === n && (z = z.map((function (t) {
            return c ? t < 0 ? - 1 * t : - t : Math.abs(O - t)
          })))
        }
        return y + (v ? (w - _) / O : _) * (Math.round(100 * z[i]) / 100) + x
      }
    },
    ht.timeline = function (t) {
      void 0 === t && (t = {
      });
      var e = ht(t);
      return e.duration = 0,
      e.add = function (n, r) {
        var c = ut.indexOf(e),
        l = e.children;
        function d(ins) {
          ins.passThrough = !0
        }
        c > - 1 && ut.splice(c, 1);
        for (var i = 0; i < l.length; i++) d(l[i]);
        var f = P(n, H(o, t));
        f.targets = f.targets || t.targets;
        var h = e.duration;
        f.autoplay = !1,
        f.direction = e.direction,
        f.timelineOffset = m.und(r) ? h : V(r, h),
        d(e),
        e.seek(f.timelineOffset);
        var ins = ht(f);
        d(ins),
        l.push(ins);
        var v = ct(l, t);
        return e.delay = v.delay,
        e.endDelay = v.endDelay,
        e.duration = v.duration,
        e.seek(0),
        e.reset(),
        e.autoplay && e.play(),
        e
      },
      e
    },
    ht.easing = C,
    ht.penner = O,
    ht.random = function (t, e) {
      return Math.floor(Math.random() * (e - t + 1)) + t
    },
    e.a = ht
  },
  762: function (t, e, n) {
    'use strict';
    n(819)
  },
  771: function (t, e) {
    function n(e, p) {
      return t.exports = n = Object.setPrototypeOf || function (t, p) {
        return t.__proto__ = p,
        t
      },
      t.exports.default = t.exports,
      t.exports.__esModule = !0,
      n(e, p)
    }
    t.exports = n,
    t.exports.default = t.exports,
    t.exports.__esModule = !0
  },
  816: function (t, e) {
    function n(e) {
      return t.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      },
      t.exports.default = t.exports,
      t.exports.__esModule = !0,
      n(e)
    }
    t.exports = n,
    t.exports.default = t.exports,
    t.exports.__esModule = !0
  },
  817: function (t, e, n) {
    var content = n(1094);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('4362879e', content, !0, {
      sourceMap: !1
    })
  },
  819: function (t, e, n) {
    var content = n(1097);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('066d6d00', content, !0, {
      sourceMap: !1
    })
  },
  851: function (t, e, n) {
    var content = n(1145);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('d2b5231e', content, !0, {
      sourceMap: !1
    })
  },
  852: function (t, e, n) {
    var content = n(1147);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('de6a3c1e', content, !0, {
      sourceMap: !1
    })
  },
  877: function (t, e, n) {
    var content = n(1194);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('d71fc5aa', content, !0, {
      sourceMap: !1
    })
  },
  882: function (t, e, n) {
    var content = n(1203);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('3f73bad5', content, !0, {
      sourceMap: !1
    })
  },
  883: function (t, e, n) {
    var content = n(1205);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('1d185c3b', content, !0, {
      sourceMap: !1
    })
  },
  884: function (t, e, n) {
    var content = n(1207);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('2a25f569', content, !0, {
      sourceMap: !1
    })
  },
  885: function (t, e, n) {
    var content = n(1209);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('51125b43', content, !0, {
      sourceMap: !1
    })
  },
  886: function (t, e, n) {
    var content = n(1211);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('2c1d9b5a', content, !0, {
      sourceMap: !1
    })
  },
  909: function (t, e, n) {
    var content = n(1251);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('187d2d27', content, !0, {
      sourceMap: !1
    })
  },
  914: function (t, e, n) {
    'use strict';
    n(915)
  },
  915: function (t, e, n) {
    var content = n(1260);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('09adc177', content, !0, {
      sourceMap: !1
    })
  },
  937: function (t, e, n) {
    var content = n(1298);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('b8009816', content, !0, {
      sourceMap: !1
    })
  },
  941: function (t, e, n) {
    var content = n(1306);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('f89cdf1e', content, !0, {
      sourceMap: !1
    })
  },
  944: function (t, e, n) {
    var content = n(1312);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('487cbb4f', content, !0, {
      sourceMap: !1
    })
  },
  971: function (t, e, n) {
    var content = n(1364);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('414978e9', content, !0, {
      sourceMap: !1
    })
  },
  972: function (t, e, n) {
    var content = n(1366);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('a00923aa', content, !0, {
      sourceMap: !1
    })
  },
  982: function (t, e, n) {
    var content = n(1386);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('6175ac3a', content, !0, {
      sourceMap: !1
    })
  },
  987: function (t, e, n) {
    var content = n(1394);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('8290dd00', content, !0, {
      sourceMap: !1
    })
  },
  995: function (t, e, n) {
    var content = n(1407);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('c04560ae', content, !0, {
      sourceMap: !1
    })
  }
}
]);
