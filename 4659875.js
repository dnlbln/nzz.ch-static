(window.webpackJsonp = window.webpackJsonp || [
]).push([[3],
{
  1006: function (e, t, n) {
    'use strict';
    function r(e) {
      var t = e.querySelectorAll('.weathermap__frame'),
      n = t.length,
      r = 1,
      o = 0;
      function c(e) {
        return e == n - 1 ? e = 0 : e++,
        e
      }
      t.length && setInterval((function () {
        var e = 'weathermap__frame--active';
        t[o].classList.remove(e),
        t[r].classList.add(e),
        o = c(o),
        r = c(r)
      }), 1300)
    }
    function o() {
      try {
        window.deferred((function () {
          var e = document.querySelectorAll('.weathermap');
          e && e.length && e.forEach((function (e) {
            r(e)
          }))
        }))
      } catch (e) {
        console.log(e)
      }
    }
    n.d(t, 'a', (function () {
      return r
    })),
    n.d(t, 'b', (function () {
      return o
    }))
  },
  1007: function (e, t, n) {
    var content = n(1430);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('d83a8222', content, !0, {
      sourceMap: !1
    })
  },
  1008: function (e, t, n) {
    var content = n(1431);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('40f39334', content, !0, {
      sourceMap: !1
    })
  },
  1009: function (e, t, n) {
    'use strict';
    n(1010)
  },
  1010: function (e, t, n) {
    var content = n(1432);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('23c61c70', content, !0, {
      sourceMap: !1
    })
  },
  1011: function (e, t, n) {
    var content = n(1434);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('da6a013c', content, !0, {
      sourceMap: !1
    })
  },
  1013: function (e, t, n) {
    var content = n(1437);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('67a19da9', content, !0, {
      sourceMap: !1
    })
  },
  1014: function (e, t, n) {
    'use strict';
    function r(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [
      ];
      try {
        return JSON.parse(window.sessionStorage.getItem(e)) || t
      } catch (e) {
        return t
      }
    }
    function o(e, t) {
      try {
        window.sessionStorage.setItem(e, JSON.stringify(t))
      } catch (e) {
        console.log(JSON.stringify(e))
      }
    }
    n.d(t, 'a', (function () {
      return r
    })),
    n.d(t, 'b', (function () {
      return o
    }))
  },
  103: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(3),
    o = n.n(r),
    c = n(64);
    function l(object, e) {
      var t = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(object);
        e && (n = n.filter((function (e) {
          return Object.getOwnPropertyDescriptor(object, e).enumerable
        }))),
        t.push.apply(t, n)
      }
      return t
    }
    function d(e) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {
        };
        i % 2 ? l(Object(source), !0).forEach((function (t) {
          o() (e, t, source[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
        }))
      }
      return e
    }
    function m(image) {
      return parseInt(function (image) {
        return (e = image, t = e.styles, n = (t = void 0 === t ? {
        }
         : t).imagegrid, void 0 === n ? 'imagegrid__image--1of3' : n).split('--') [1];
        var e,
        t,
        n
      }(image).split('of') [0], 10)
    }
    function h(e) {
      return e.reduce((function (e, image) {
        return e + m(image)
      }), 0)
    }
    var f = {
      components: {
        ArticleImage: function () {
          return n.e(4).then(n.bind(null, 98))
        },
        ImageDescription: function () {
          return n.e(1).then(n.bind(null, 367))
        },
        ImageLightbox: function () {
          return Promise.all([n.e(3),
          n.e(8)]).then(n.bind(null, 461))
        }
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
              content: {
              },
              containers: {
                imageRows: [
                  {
                    containers: {
                      imageRow: [
                      ]
                    }
                  }
                ]
              }
            }
          }
        },
        componenttype: {
          type: String,
        default:
          'imagegrid'
        }
      },
      data: function () {
        return {
          lightboxAttached: !1,
          lightboxImage: 0,
          lightboxIndex: 0,
          index: - 1
        }
      },
      computed: {
        webviewClick: function () {
          return !1
        },
        rows: function () {
          return this.data.containers.imageRows.map((function (e) {
            var t = e.containers.imageRow,
            n = h(t);
            return {
              columnCount: h(t),
              images: t.map((function (image) {
                return d(d({
                }, image), {
                }, {
                  modifier: ''.concat(m(image), 'of').concat(n)
                })
              }))
            }
          }))
        },
        images: function () {
          return this.rows.reduce((function (e, t) {
            var n = t.images;
            return e.concat(n)
          }), [
          ])
        },
        author: function () {
          return this.images.map((function (e) {
            var t = e.content.author;
            return (void 0 === t ? '' : t).trim()
          })).filter((function (e, t, n) {
            return n.indexOf(e) === t
          }))
        },
        fullwidth: function () {
          return this.data.styles && this.data.styles['imagegrid-width'] && 'imagegrid--fullwidth' === this.data.styles['imagegrid-width']
        }
      },
      methods: {
        zoomOpenBefore: function (image) {
          var e = this;
          return function () {
            e.lightboxImage = e.images.indexOf(image)
          }
        },
        getIndex: function (image) {
          return - 1 !== this.$store.state.isrendition.indexOf('webview') && this.images.map((function (e) {
            return e.id
          })).indexOf(image.id)
        },
        zoomOpenAfter: function (e) {
          this.lightboxPosition = e,
          this.lightboxAttached = !0
        },
        lightboxClose: function () {
          this.lightboxAttached = !1,
          this.$refs.image[this.lightboxImage].imageZoomClose()
        },
        lightboxChange: function (e) {
          this.$refs.image[this.lightboxImage].imageZoomClose(),
          this.$refs.image[e].imageZoomOpen()
        },
        imageGroup: function () {
        }
      }
    },
    _ = (n(1130), n(1132), n(1)),
    component = Object(_.a) (f, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return 0 !== e.images.length ? n('div', {
        staticClass: 'imagegrid articlecomponent',
        class : {
          'imagegrid--fullwidth': e.fullwidth
        }
      }, [
        e._l(e.rows, (function (t, r) {
          return n('div', {
            key: r,
            staticClass: 'imagegrid__row'
          }, e._l(t.images, (function (image) {
            return n('div', {
              key: image.id,
              staticClass: 'imagegrid__image',
              class : 'imagegrid__image--' + image.modifier
            }, [
              n('ArticleImage', {
                ref: 'image',
                refInFor: !0,
                attrs: {
                  data: {
                    content: image.content,
                    group: r < e.images.length && 'group-' + e.imageGroup()
                  },
                  onclick: e.webviewClick,
                  itemindex: e.getIndex(image),
                  'show-caption': !0,
                  'slider-image': !1,
                  'attach-lightbox': !1,
                  imagestyle: image.modifier,
                  modifier: 'grid' + image.modifier,
                  'on-zoom-open-before': e.zoomOpenBefore(image),
                  'on-zoom-open-after': e.zoomOpenAfter
                }
              })
            ], 1)
          })), 0)
        })),
        e._v(' '),
        e.lightboxAttached ? n('ImageLightbox', {
          attrs: {
            slides: e.images,
            data: e.images[e.lightboxImage],
            positioning: e.lightboxPosition,
            'on-close': e.lightboxClose,
            'on-change': e.lightboxChange,
            'share-slides': !1
          }
        }) : e._e(),
        e._v(' '),
        n('ImageDescription', {
          attrs: {
            data: {
              content: Object.assign({
              }, e.data.content, {
                author: e.author
              })
            }
          }
        })
      ], 2) : e._e()
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  1045: function (e, t, n) {
    'use strict';
    n(791)
  },
  1046: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '@font-face{font-weight:100;font-family:nzz-sans-serif;font-style:normal;src:local("nzz-sans-serif"),url(//assets.static-nzz.ch/nzz/8.23.0/static/fonts/gt-america-standard-regular.woff2) format("woff2"),url(//assets.static-nzz.ch/nzz/8.23.0/static/fonts/gt-america-standard-regular.woff) format("woff");font-display:swap}@font-face{font-weight:500;font-family:nzz-sans-serif;font-style:normal;src:local("nzz-sans-serif"),url(//assets.static-nzz.ch/nzz/8.23.0/static/fonts/gt-america-standard-medium.woff2) format("woff2"),url(//assets.static-nzz.ch/nzz/8.23.0/static/fonts/gt-america-standard-medium.woff) format("woff");font-display:swap}@font-face{font-weight:700;font-family:nzz-sans-serif;font-style:normal;src:local("nzz-sans-serif"),url(//assets.static-nzz.ch/nzz/8.23.0/static/fonts/gt-america-standard-medium.woff2) format("woff2"),url(//assets.static-nzz.ch/nzz/8.23.0/static/fonts/gt-america-standard-medium.woff) format("woff");font-display:swap}@font-face{font-weight:300;font-family:nzz-serif;font-style:normal;src:local("nzz-serif"),url(//assets.static-nzz.ch/nzz/8.23.0/static/fonts/pensumpro-regular.woff2) format("woff2"),url(//assets.static-nzz.ch/nzz/8.23.0/static/fonts/pensumpro-regular.woff) format("woff");font-display:swap}@font-face{font-weight:300;font-family:nzz-serif;font-style:italic;src:local("nzz-serif"),url(//assets.static-nzz.ch/nzz/8.23.0/static/fonts/pensumpro-regularitalic.woff2) format("woff2"),url(//assets.static-nzz.ch/nzz/8.23.0/static/fonts/pensumpro-regularitalic.woff) format("woff");font-display:swap}@font-face{font-weight:500;font-family:nzz-serif;font-style:bold;src:local("nzz-serif"),url(//assets.static-nzz.ch/nzz/8.23.0/static/fonts/pensumpro-bold.woff2) format("woff2"),url(//assets.static-nzz.ch/nzz/8.23.0/static/fonts/pensumpro-bold.woff) format("woff");font-display:swap}body{min-width:1080px;background-color:#fff}.logo__wrapper{height:235px}.logo{width:655px;display:block;margin:auto;padding-top:80px}.logo svg path{fill:#000}.department__wrapper{text-align:center;background-color:#e9e9ee;border-radius:3px;height:70px;width:100%;display:table}.department{font-family:nzz-sans-serif;font-size:2.25rem;color:#1e1e1e;margin:0;display:table-cell;vertical-align:middle}.articles{padding-top:60px;margin:0 54px}.figure{width:975px;margin:0}.image{width:100%}.time{font-family:nzz-sans-serif;font-weight:100;color:#5d5d5d;font-size:1.5rem;padding-top:24px;text-align:right}.title{font-family:nzz-serif;line-height:1.12;font-size:3rem;font-weight:500;margin:0}.lead,.title{padding-top:30px}.lead{font-family:nzz-sans-serif;font-size:1.5rem;line-height:1.875rem;font-weight:100}.teaser{padding-bottom:30px}.teaser+.teaser{border-top:2px solid #e9e9ee}.timestamp{font-family:nzz-sans-serif;font-weight:100;padding:10px;font-size:.75rem;color:#5d5d5d;position:fixed;bottom:0;left:90%}',
    '']),
    e.exports = r
  },
  1050: function (e, t, n) {
    'use strict';
    n(795)
  },
  1051: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*! purgecss start ignore */amp-iframe[class*=html-element]{display:block;margin-top:-1px}.header .header-main{height:60px}.header-main__holder .header__logo{width:auto}\n/*! purgecss end ignore */.header__logo--link img{height:30px;margin:10px auto 0}',
    '']),
    e.exports = r
  },
  1083: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.widget--qembed--page{width:100%;border-top:1px solid #ebebeb;border-top:1px solid var(--grayLight)}.widget__row>.widget--qembed--page{border-top:0}.widget__area .widget--qembed--page{margin-top:24px;padding:24px 0 0}@media (min-width:768px){.widget__area .widget--qembed--page{margin-top:16px;padding-top:16px}}@media (min-width:1372px){.widget__area .widget--qembed--page{margin-top:24px;padding-top:24px}}@media (min-width:1548px){.widget__area .widget--qembed--page{margin-top:40px;padding-top:40px}}',
    '']),
    e.exports = r
  },
  1084: function (e, t, n) {
    'use strict';
    n(815)
  },
  1085: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.widget--qembed{width:100%}.widget--qembed svg{max-width:100%}',
    '']),
    e.exports = r
  },
  1115: function (e, t, n) {
    'use strict';
    n(833)
  },
  1116: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.header-main.header--transparent .icon--menu circle,.header-main.header--transparent .icon--menu path,.header-main.header--transparent body:not(.longformvisual) .header__logo--icon circle,.header-main.header--transparent body:not(.longformvisual) .header__logo--icon path{fill:#000;fill:var(--black)}',
    '']),
    e.exports = r
  },
  1125: function (e, t, n) {
    'use strict';
    n(838)
  },
  1126: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*! purgecss start ignore */.header-main.header--transparent{background:#fff}.header-main.header--transparent:before{background:none}\n/*! purgecss end ignore */',
    '']),
    e.exports = r
  },
  1127: function (e, t, n) {
    'use strict';
    n(839)
  },
  1128: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '/*! purgecss start ignore */.headline--hero amp-img{max-width:100%}.headline--hero amp-img img,.headline--hero amp-video video{-o-object-fit:cover;object-fit:cover;-o-object-position:50% 50%;object-position:50% 50%}.headline--hero.position--top amp-img img,.headline--hero.position--top amp-video video{-o-object-position:50% 0;object-position:50% 0}.headline--hero.position--bottom amp-img img,.headline--hero.position--bottom amp-video video{-o-object-position:50% 100%;object-position:50% 100%}.headline--hero.position--left amp-img img,.headline--hero.position--left amp-video video{-o-object-position:0 50%;object-position:0 50%}.headline--hero.position--right amp-img img,.headline--hero.position--right amp-video video{-o-object-position:100% 50%;object-position:100% 50%}.headline--hero.position--left.position--top amp-img img,.headline--hero.position--left.position--top amp-video video{-o-object-position:0 0;object-position:0 0}.headline--hero.position--left.position--bottom amp-img img,.headline--hero.position--left.position--bottom amp-video video{-o-object-position:0 100%;object-position:0 100%}.headline--hero.position--right.position--bottom amp-img img,.headline--hero.position--right.position--bottom amp-video video{-o-object-position:100% 100%;object-position:100% 100%}.headline--hero.position--right.position--top amp-img img,.headline--hero.position--right.position--top amp-video video{-o-object-position:100% 0;object-position:100% 0}\n/*! purgecss end ignore */',
    '']),
    e.exports = r
  },
  1130: function (e, t, n) {
    'use strict';
    n(841)
  },
  1131: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.doc-component .imagegrid__container{padding:1px 0}.imagegrid__row{display:flex;margin:8px 0}@media (min-width:768px){.imagegrid__row{margin-top:16px;margin-bottom:16px}}.imagegrid__row.doc-component{padding:1px 0;margin-top:15px;margin-bottom:15px}.imagegrid__image{flex-basis:100%;flex-grow:1;flex-shrink:2}.imagegrid__image+.imagegrid__image{margin-left:8px}@media (min-width:768px){.imagegrid__image+.imagegrid__image{margin-left:16px}}.imagegrid__image--2of3{flex-grow:2;flex-shrink:1}.imagegrid__image.doc-component{margin-top:15px;margin-bottom:15px}.imagegrid__image figcaption{display:none}.imagegrid .image{margin-bottom:0}.imagegrid--fullwidth{max-width:none;margin-left:-24px;margin-right:-24px}@media (min-width:768px){.imagegrid--fullwidth{margin-left:auto;margin-right:auto}}@media (min-width:1372px){.imagegrid--fullwidth{margin-left:40px;margin-right:40px}}@media (min-width:1548px){.imagegrid--fullwidth{margin-left:40px;margin-right:40px}}.imagegrid--fullwidth .image--grid1of1,.imagegrid--fullwidth .image--grid1of2,.imagegrid--fullwidth .image--grid1of3,.imagegrid--fullwidth .image--grid2of3{max-width:none;margin-left:0;margin-right:0}.imagegrid--fullwidth .imagegrid__description{margin-left:24px;margin-right:24px}@media (min-width:768px){.imagegrid--fullwidth .imagegrid__description{margin-left:24px;margin-right:24px}}.imagegrid--fullwidth .image-description{margin-left:24px;margin-right:24px}@media (min-width:768px){.imagegrid--fullwidth .image-description{margin-left:24px;margin-right:24px}}@media (min-width:1372px){.imagegrid--fullwidth .image-description,.imagegrid--fullwidth .imagegrid__description{margin-left:0;margin-right:0}}',
    '']),
    e.exports = r
  },
  1132: function (e, t, n) {
    'use strict';
    n(842)
  },
  1133: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.image-zoom--lightbox{position:fixed!important;top:0!important;bottom:0!important;left:0!important;right:0!important}',
    '']),
    e.exports = r
  },
  1134: function (e, t, n) {
    'use strict';
    n(843)
  },
  1135: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '/*! purgecss start ignore */.imagegrid__image [class*=html-sizer]{height:1px}.imagegrid__image [class*=html-sizer]+img{position:relative;width:100%;height:100%}\n/*! purgecss end ignore */',
    '']),
    e.exports = r
  },
  1176: function (e, t, n) {
    'use strict';
    n(867)
  },
  1177: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.imagegrid .imagegrid__image .image__src{opacity:1}',
    '']),
    e.exports = r
  },
  1214: function (e, t, n) {
    'use strict';
    n(888)
  },
  1215: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.widget--qembed{width:100%}.widget--qembed svg{max-width:100%}',
    '']),
    e.exports = r
  },
  1221: function (e, t, n) {
    'use strict';
    n(893)
  },
  1222: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.menu .menu__section{list-style:none;padding:16px 0;background-color:#fff;background-color:var(--white)}.menu .menu__section--brand{color:#fff;color:var(--white)}.menu .menu__section--subsection{padding:0;overflow:hidden;transform:translateY(-20px);opacity:0;transition:height .3s ease,transform .3s ease,opacity .3s ease;transition:all .2s linear;height:0}.menu .menu__section--subsection-with-icons svg{margin-left:15px;margin-right:5px}.menu .menu__section+.menu__section:not(.menu__section--borderless){border-top:1px solid #ebebeb;border-top:1px solid var(--grayLight)}.menu .menu__section--open{transform:translateY(0);opacity:1}.menu .menu__divider{padding:0}.menu .menu__item-wrapper{display:flex;justify-content:space-between}.menu .menu__item--selected,.menu .menu__item:hover{background-color:rgba(0,0,0,.08)}.menu .menu__item--brand:hover{background-color:hsla(0,0%,100%,.08)}.menu .menu__chevron{box-sizing:content-box;margin-right:16px;padding:20px 17px;cursor:pointer;transition:transform .16s ease-in-out}.menu .menu__chevron--open{transform:rotate(180deg)}.menu .menu__link{display:flex;flex-grow:1;align-items:center;box-sizing:content-box;height:22px;padding:13px 24px;font-size:.875rem;line-height:1.375rem;font-family:nzz-sans-serif,Arial;color:#000;color:var(--black);text-decoration:none;cursor:pointer}.menu .menu__link--brand{color:#fff;color:var(--white)}.menu .menu__link--subsection{padding-left:48px}.menu .menu__link--subsection-with-icon{padding-left:0}.menu .menu__link--subsection-with-icon svg{margin-left:15px;margin-right:5px}.menu .menu__link--active{font-weight:500}.menu .menu__link--search{display:block;height:auto}.menu .menu__link-menusidebar--active{background-color:#ebebeb;background-color:var(--grayLight)}.menu .menu-user__header{padding:24px;background-color:#fff;background-color:var(--white);border-bottom:1px solid #ebebeb;border-bottom:1px solid var(--grayLight)}.menu .menu-user__header--name{font-weight:300;font-size:1.125rem;line-height:1.5rem;font-family:nzz-sans-serif,Arial;color:#000;color:var(--black)}.menu .menu-user__header--label{display:block;height:22px;margin-top:8px;font-size:.875rem;line-height:1.375rem;font-family:nzz-sans-serif,Arial;color:#2c32bd;color:var(--blueStrong);text-decoration:none}.menu .menu-user__header--subscribed{margin-left:16px;color:#707070;color:var(--grayMedium)}.menu .menu-user__header--subscribed:before{content:"";position:relative;bottom:1px;display:inline-block;width:8px;height:8px;margin-right:8px;margin-left:-16px;background-color:#46d38e;background-color:var(--green);border-radius:50%}.menu .menu-user__header--subscribed:after{content:attr(data-label-text);display:block;height:0;white-space:nowrap;opacity:0}:root{--subsection-height:undefined}.searchform--menu{padding:16px 24px 0 16px;background:#fff;background:var(--white)}.contextmenu-municipality .menu{height:100%;background:#fff;border-radius:16px 16px 0 0}@media (min-width:768px){.contextmenu-municipality .menu{background:transparent;border-radius:0 0 4px 4px;overflow:hidden}}.contextmenu-municipality .menu__mobile{position:relative;padding:24px 24px 0}@media (min-width:768px){.contextmenu-municipality .menu__mobile{display:none}}.contextmenu-municipality .menu__mobile h2{padding-bottom:4px;font-size:1.125rem;line-height:1.25}.contextmenu-municipality .menu__mobile p{width:calc(100% - 24px);margin:0;font-size:.875rem;line-height:1.5;color:#707070;color:var(--grayMedium);white-space:nowrap}.contextmenu-municipality .menu__close{position:absolute;top:5px;right:4px}.contextmenu-municipality .menu__close path{stroke-width:2px}.contextmenu-municipality .menu .menu__item{margin-bottom:8px}.contextmenu-municipality .menu .menu__item:last-of-type{margin-bottom:0}.contextmenu-municipality .menu .menu__item .menu__link--selected{background-color:rgba(0,0,0,.075)}.contextmenu-municipality .menu .menu__item:hover{background-color:rgba(0,0,0,.075)}@media (hover:none){.contextmenu-municipality .menu .menu__item:hover{background:none}}.contextmenu-municipality .menu .menu__item .menu__link--region{height:auto;padding:14px 48px;line-height:1.47}@media (min-width:768px){.contextmenu-municipality .menu .menu__item .menu__link--region{padding:14px 24px}}.contextmenu-municipality .menu .menu__item--empty{padding:0 24px 24px}.contextmenu-municipality .menu .menu__item--error:hover{background-color:transparent}.contextmenu-municipality .menu .menu__item--error .menu__link{cursor:auto}.contextmenu-municipality .menu__item--sized{padding:0 24px}.contextmenu-municipality .menu__section--borderless{position:relative;padding-top:0;padding-bottom:16px}@media (min-width:768px){.contextmenu-municipality .menu__section--borderless{padding-bottom:24px}}.contextmenu-municipality .menu__section--limited{height:calc(100% - 252px);padding:0;overflow-y:scroll}@media (min-width:768px){.contextmenu-municipality .menu__section--limited{height:271px}}.contextmenu-municipality .menu__section--limited:after{content:"";position:absolute;bottom:74px;left:0;width:100%;height:35px;box-shadow:inset 0 -35px 20px -15px #fff;box-shadow:inset 0 -35px 20px -15px var(--white);pointer-events:none}.contextmenu-municipality .menu__section--focused{height:calc(100% - 174px)}.contextmenu-municipality .menu__section--focused:after{bottom:0}.contextmenu-municipality .menu .button{font-size:1rem}.menu__item--freemium .menu__link{color:var(--chmBrand)}.menu__item--freemium .menu__link .svg-icon{margin-right:4px}.menu__item--freemium .menu__link .svg-icon path{stroke:#fff;fill:#fff;stroke-width:.1px}.menu__item--freemium .menu__link .svg-icon path:nth-last-child(2){stroke:var(--chmBrand);fill:var(--chmBrand)}.menu .menu__link__regio{padding-left:48px}.menu .menu__link .svg-icon path{stroke:#000}.menu .menu__link__arrow--rotated-up{transition:all .2s ease;transform:rotate(180deg)}.menu .menu__link__arrow--rotated-down{transition:all .2s ease;transform:rotate(0deg)}.menu .menu__section:first-child{padding-top:12px}.menu .menu__section .header-service__item--long-text span:before{content:"";display:block;background:linear-gradient(90deg,hsla(0,0%,100%,0) 0,#fff 53%);position:absolute;right:0;top:0;bottom:0;width:35%}.menu .menu__section .header-service__item--long-text span{position:relative;display:block;white-space:nowrap;overflow:hidden}.menu .menu__section .header-service__item--long-text span:hover:before{background:linear-gradient(90deg,hsla(0,0%,100%,0) 0,#ebebeb 53%);background:linear-gradient(90deg,hsla(0,0%,100%,0) 0,var(--grayLight) 53%)}.menu .menu__section .header-service__item--long-text span svg{position:absolute;top:40%;right:24px}.menu .menu__section .header-service__item:hover{background-color:#ebebeb;background-color:var(--grayLight)}.menu .menu__section .header-service__item:hover span:before{background:linear-gradient(90deg,hsla(0,0%,100%,0) 0,#ebebeb 53%);background:linear-gradient(90deg,hsla(0,0%,100%,0) 0,var(--grayLight) 53%)}.menu .menu__section--subsection--open{height:undefined;height:var(--subsection-height)}.menu .menu__section--subsection--close{height:0}.menu .menu__section .header-service__item span{display:flex;justify-content:space-between}',
    '']),
    e.exports = r
  },
  1223: function (e, t, n) {
    'use strict';
    n(894)
  },
  1224: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.municipality-selector{margin-top:20px;margin-bottom:24px;padding:24px;background:var(--blue)}@media (min-width:1372px){.municipality-selector{padding-right:40px;padding-bottom:40px;padding-left:40px;margin-bottom:40px}}.municipality-selector__wrap{display:flex;flex-direction:column;border-top:1px solid rgba(var(--whiteRGB),.3)}@media (min-width:768px){.municipality-selector__wrap{flex-direction:row;flex-wrap:wrap}}.municipality-selector__title{position:relative;font-weight:500;font-size:1.125rem;line-height:1.25;font-family:nzz-serif,Georgia;color:#fff;color:var(--white);letter-spacing:.01em}@media (min-width:768px){.municipality-selector__title{order:1;font-size:1.5625rem}}.municipality-selector__title-text{position:relative;top:-1px;display:inline-block;padding-top:18px;border-top:1px solid #fff;border-top:1px solid var(--white)}@media (min-width:768px){.municipality-selector__title-text{top:-2px;padding-top:24px;border-width:2px}}.municipality-selector__text{margin-top:8px;font-size:.875rem;line-height:1.5;font-family:nzz-sans-serif,Arial;color:#fff;color:var(--white)}@media (min-width:768px){.municipality-selector__text{order:3;width:100%;margin-top:0}}.municipality-selector__button{margin-top:24px}@media (min-width:768px){.municipality-selector__button{order:2;margin-left:auto}}.municipality-selector__button .button--region{padding:8px 16px;line-height:1.5rem;color:var(--blue);background-color:#fff;background-color:var(--white)}.municipality-selector__button .button--region .icon__chevron{display:inline-block}.municipality-selector__button .button--region .icon__chevron path{stroke:var(--blue);stroke-width:1}.municipality-selector .button-change-municipality{position:relative;display:inline-block;min-width:320px;margin-bottom:12px}@media (min-width:768px){.municipality-selector .button-change-municipality{margin-bottom:24px}}.municipality-selector .button-change-municipality .button--link{font-size:.75rem}.app-data .municipality-selector .button-change-municipality{display:none}.municipality-selector .button--link{padding:0;font-weight:400;font-size:.875rem;line-height:1.5rem;color:#fff;color:var(--white);text-decoration:none;background:none;border:none;cursor:pointer;white-space:nowrap}.municipality-selector .button__municipality-name{display:none}@media (min-width:768px){.municipality-selector .button__municipality-name{display:inline}}.municipality-selector .button .icon__chevron{vertical-align:middle}.municipality-selector .button .icon__chevron path{stroke:#fff;stroke:var(--white)}.municipality-selector__articles--empty{font-family:nzz-sans-serif,Arial;font-size:.875rem;line-height:1.375rem;color:#000;color:var(--black);opacity:.5;padding:16px 24px;display:flex}@media (min-width:1372px){.municipality-selector__articles--empty{font-size:1.0625rem;padding:40px}}.municipality-selector__articles--empty .link--contribution{color:#000;color:var(--black);font-weight:400;text-decoration:none;border-bottom:1px solid #000;border-bottom:1px solid var(--black)}@media (min-width:1372px){.municipality-selector__articles--empty .link--contribution{padding-bottom:3px}}.municipality-selector__articles--empty .icon{flex-shrink:0;width:18px;height:18px;margin-top:2px;margin-right:8px}@media (min-width:768px){.municipality-selector__articles--empty .icon{margin-top:3px}}.municipality-selector__articles--empty.hidden{display:none}@media (min-width:1372px){.municipality-selector--municipality-selected{padding-bottom:32px}}.municipality-selector--municipality-selected .municipality-selector__wrap{flex-direction:row;flex-wrap:nowrap}.municipality-selector--municipality-selected .municipality-selector__title{margin-right:20px}.municipality-selector--municipality-selected .municipality-selector__button{margin-top:16px;margin-left:auto}@media (min-width:768px){.municipality-selector--municipality-selected .municipality-selector__button{margin-top:32px}}.municipality-selector--municipality-selected .municipality-selector__button .button--link{min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content}',
    '']),
    e.exports = r
  },
  1233: function (e, t, n) {
    'use strict';
    n(899)
  },
  1234: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.imagegrid .imagegrid__image .image__src{opacity:1}',
    '']),
    e.exports = r
  },
  1252: function (e, t, n) {
    'use strict';
    n(910)
  },
  1253: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.widget--qembed{width:100%}.widget--qembed svg{max-width:100%}',
    '']),
    e.exports = r
  },
  1282: function (e, t, n) {
    'use strict';
    n(927)
  },
  1283: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.cluster{border-top:1px solid #ebebeb;border-top:1px solid var(--grayLight);padding:24px 0;font-family:nzz-sans-serif,Arial}@media (min-width:1116px){.cluster{padding-top:40px;padding-bottom:40px}}.cluster--first-no-filter{border-top:0;padding-top:0}@media (min-width:768px){.cluster--first{border-top:0;padding-top:0}}.cluster:last-of-type{padding-bottom:0}.cluster--no-separator-top{padding-top:0;border-top:0}.cluster__key{font-size:1rem;line-height:1.375rem;font-weight:700;margin-bottom:24px}.cluster__item{display:inline-block;background:#f5f5f5;background:var(--grayUltraLight);color:#000;color:var(--black);font-size:.875rem;line-height:1.375rem;padding:5px 16px;border-radius:12px;margin:0 8px 8px 0;text-decoration:none;transition:opacity .32s ease}.cluster__item:hover{opacity:.6}',
    '']),
    e.exports = r
  },
  1287: function (e, t, n) {
    'use strict';
    n(932)
  },
  1288: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.municipality-header__content{position:relative;display:flex;flex-direction:column;padding:24px;font-family:nzz-sans-serif,Arial;background-color:#fff;background-color:var(--white)}@media (min-width:768px){.municipality-header__content{flex-direction:row;justify-content:space-between;align-items:center;margin:-24px 24px 0}}@media (min-width:1372px){.municipality-header__content{margin:-40px 40px 0;padding:40px}}.municipality-header__content:after{content:"";position:absolute;bottom:0;left:24px;width:calc(100% - 48px);border-bottom:1px solid #ebebeb;border-bottom:1px solid var(--grayLight)}@media (min-width:1372px){.municipality-header__content:after{left:40px;width:calc(100% - 80px)}}.municipality-header__content--right{display:flex;margin-top:20px}@media (min-width:768px){.municipality-header__content--right{margin-top:0}}.municipality-header__content--left{flex-basis:50%}.municipality-header__content--left .button__icon,.municipality-header__content--left .button__label{display:inline;font-weight:700;font-size:1.5rem;line-height:1.25}@media (min-width:768px){.municipality-header__content--left .button__icon,.municipality-header__content--left .button__label{font-size:2rem}}.municipality-header__button--dropdown{text-align:left;color:#000;color:var(--black);white-space:nowrap}.municipality-header__button--dropdown:active,.municipality-header__button--dropdown:hover{opacity:1}.municipality-header__button--dropdown .button__label{margin-right:7px;white-space:normal}.municipality-header__button--dropdown .button__icon{margin-left:-4px}.municipality-header__button--dropdown .icon__chevron--down{vertical-align:middle}.municipality-header__link{flex-basis:50%;padding:12px 0;font-weight:400;line-height:1.5rem;text-align:center;color:#fff;color:var(--white);text-decoration:none;white-space:nowrap;background-color:var(--greenText);border-radius:4px}@media (min-width:768px){.municipality-header__link{flex-basis:auto;padding:12px 24px}}.municipality-header__link+.municipality-header__link{margin-left:16px}@media (min-width:768px){.municipality-header__link+.municipality-header__link{margin-left:12px}}.municipality-header__link svg{vertical-align:bottom}',
    '']),
    e.exports = r
  },
  132: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(3),
    o = n.n(r),
    c = n(5),
    l = n.n(c),
    d = n(2),
    m = n.n(d),
    h = n(9),
    f = n.n(h),
    _ = n(8);
    function v(object, e) {
      var t = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(object);
        e && (n = n.filter((function (e) {
          return Object.getOwnPropertyDescriptor(object, e).enumerable
        }))),
        t.push.apply(t, n)
      }
      return t
    }
    function w(e) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {
        };
        i % 2 ? v(Object(source), !0).forEach((function (t) {
          o() (e, t, source[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : v(Object(source)).forEach((function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
        }))
      }
      return e
    }
    var y = {
      name: 'WidgetMunicipalitySelector',
      components: {
        NzzLink: function () {
          return Promise.resolve().then(n.bind(null, 31))
        },
        RegionPagesButton: n(336).default,
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
            }
          }
        }
      },
      data: function () {
        return {
          articlesHardLimit: 3,
          offset: 0,
          articles: [
          ]
        }
      },
      computed: {
        contributionLink: function () {
          return this.$store.state.isrendition.indexOf('webview') > - 1 ? 'window.nzzFirebase.pages.leserBeitrag || window.nzzFirebase.pages.leserReporter' : '/leserbeitrag-einreichen'
        },
        userMunicipality: function () {
          return this.$store.state.municipality
        },
        title: function () {
          return this.userMunicipality ? this.userMunicipality.name : this.data.content.title
        },
        fetchSettings: function () {
          return {
            municipality: this.userMunicipality.id,
            hardLimit: this.articlesHardLimit,
            offset: this.offset
          }
        },
        isWebview: function () {
          return this.$store.state.isrendition.indexOf('webview') > - 1
        }
      },
      watch: {
        userMunicipality: function (e) {
          e && this.loadArticles()
        }
      },
      mounted: function () {
        this.userMunicipality && this.loadArticles(this.fetchSettings)
      },
      methods: {
        loadArticles: function () {
          var e = this;
          return l() (m.a.mark((function t() {
            var n,
            r;
            return m.a.wrap((function (t) {
              for (; ; ) switch (t.prev = t.next) {
                case 0:
                  return t.next = 2,
                  e.fetchArticles();
                case 2:
                  (n = t.sent) && n.data && (r = [
                  ], n.data.data.map((function (article) {
                    return r.push(article)
                  })), e.articles = r);
                case 4:
                case 'end':
                  return t.stop()
              }
            }), t)
          }))) ()
        },
        fetchArticles: function () {
          var e = this.fetchSettings,
          t = e.municipality,
          n = e.hardLimit,
          r = e.offset,
          o = [
            'q='.concat(t),
            'product='.concat(this.$config.product),
            'limit='.concat(n),
            'offset='.concat(r)
          ];
          return f() (w(w({
          }, Object(_.a) (this.$config.enricoBasicAuth)), {
          }, {
            url: ''.concat(this.$config.enricoBase, '/municipality-articles?').concat(o.join('&'))
          })).then((function (e) {
            return {
              data: e.data
            }
          })).catch((function (e) {
            console.log(e)
          }))
        }
      }
    },
    x = (n(1223), n(1)),
    component = Object(x.a) (y, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return e.$store.state.features.gemeinde ? n('div', {
        staticClass: 'widget--municipality-selector',
        attrs: {
          config: JSON.stringify({
            product: e.$config.product
          })
        }
      }, [
        n('div', {
          staticClass: 'municipality-selector',
          class : {
            'municipality-selector--municipality-selected': e.userMunicipality
          }
        }, [
          e.userMunicipality || e.isWebview ? n('RegionPagesButton', {
            attrs: {
              'aria-label': 'Gemeinde ändern',
              role: 'button',
              'contextmenu-class': 'button-change-municipality',
              'redirect-on-select': !1,
              'redirect-when-selected': !1
            }
          }, [
            n('button', {
              staticClass: 'button button--link'
            }, [
              n('span', {
                staticClass: 'button__label'
              }, [
                e._v('Gemeinde ändern')
              ]),
              e._v(' '),
              n('svgicon', {
                staticClass: 'icon__chevron icon__chevron--down',
                attrs: {
                  height: '10',
                  width: '12',
                  name: 'nzz_little_chevron',
                  color: 'r-#FFFFFF'
                }
              })
            ], 1)
          ]) : e._e(),
          e._v(' '),
          n('div', {
            staticClass: 'municipality-selector__wrap'
          }, [
            n(e.userMunicipality ? 'NzzLink' : 'div', {
              tag: 'component',
              staticClass: 'municipality-selector__title',
              attrs: {
                url: e.userMunicipality ? e.userMunicipality.slug : void 0
              }
            }, [
              n('span', {
                staticClass: 'municipality-selector__title-text',
                domProps: {
                  innerHTML: e._s(e.title)
                }
              })
            ]),
            e._v(' '),
            !e.userMunicipality || e.isWebview ? n('div', {
              staticClass: 'municipality-selector__text'
            }, [
              n('span', {
                domProps: {
                  innerHTML: e._s(e.data.content.text)
                }
              })
            ]) : e._e(),
            e._v(' '),
            n('div', {
              staticClass: 'municipality-selector__button'
            }, [
              n('RegionPagesButton', {
                attrs: {
                  'contextmenu-class': 'button-select-municipality',
                  button: {
                    showCompassIcon: !1,
                    label: 'Gemeinde wählen',
                    rounded: !0
                  },
                  'redirect-on-select': !1,
                  origin: 'widget'
                }
              }, [
                e.userMunicipality ? n('button', {
                  staticClass: 'button button--link',
                  attrs: {
                    'data-origin': 'widget',
                    'data-nzz-referrer': 'municipalitySelector'
                  }
                }, [
                  n('span', {
                    staticClass: 'button__label'
                  }, [
                    e._v('Mehr')
                  ]),
                  e._v(' '),
                  n('span', {
                    staticClass: 'button__municipality-name'
                  }, [
                    e._v('aus ' + e._s(e.title))
                  ]),
                  e._v(' '),
                  n('svgicon', {
                    staticClass: 'icon__chevron icon__chevron--right',
                    attrs: {
                      height: '10',
                      width: '10',
                      name: 'nzz_little_chevron',
                      color: 'r-#FFFFFF'
                    }
                  })
                ], 1) : e._e()
              ])
            ], 1)
          ], 1)
        ], 1),
        e._v(' '),
        e.userMunicipality || e.isWebview ? n('div', {
          staticClass: 'municipality-selector__articles'
        }, [
          e.articles.length || e.isWebview ? n('div', {
            staticClass: 'widget--news'
          }, e._l(e.articles, (function (t, r) {
            return n('SimpleArticle', {
              key: 'widget-' + r + '-' + e.$store.state.isrendition,
              attrs: {
                data: {
                  articles: [
                    t
                  ]
                },
                size: '1of3-news',
                'source-elem': 'Widget-Gemeinde-Selector'
              }
            })
          })), 1) : e._e(),
          e._v(' '),
          !e.articles.length || e.isWebview ? n('div', {
            staticClass: 'municipality-selector__articles--empty',
            class : {
              hidden: e.isWebview
            }
          }, [
            n('svgicon', {
              staticClass: 'icon icon--exclamation',
              attrs: {
                name: 'ico_exclamation',
                color: 'r-#18191B'
              }
            }),
            e._v(' '),
            n('span', [
              e._v('\n        Für diese Gemeinde wurde leider noch kein Artikel veröffentlicht. Haben wir etwas verpasst?\n        Schicken Sie uns Ihren Beitrag für\n        '),
              n('a', {
                staticClass: 'link--contribution',
                attrs: {
                  href: e.contributionLink
                }
              }, [
                e._v(e._s(e.title) + '.')
              ])
            ])
          ], 1) : e._e()
        ]) : e._e()
      ]) : e._e()
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  1371: function (e, t, n) {
    'use strict';
    n(975)
  },
  1372: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.snackbar{display:flex;flex-wrap:wrap;align-items:flex-end;max-width:680px;margin:0 auto 16px;padding:16px 24px 0;font-size:.875rem;line-height:1.25rem;font-family:nzz-sans-serif,Arial;color:#fff;color:var(--white);background-color:#333;background-color:var(--grayDark);border-radius:4px;pointer-events:auto}@media (min-width:768px){.snackbar{margin:0 auto 40px;padding:16px 24px 0}}.snackbar__text{width:100%;margin-bottom:16px}@media (min-width:768px){.snackbar__text{width:auto}}.snackbar__text p{margin:0}.snackbar__follow-up{max-width:176px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;margin-bottom:16px;margin-left:auto;padding:0 0 0 16px;font-weight:500;font-size:.875rem;line-height:1.25rem;font-family:nzz-sans-serif,Arial;text-align:right;color:#bcbdea;text-transform:uppercase;text-decoration:none;white-space:nowrap;background:transparent;border:none;cursor:pointer;transition:opacity .32s ease}.snackbar__follow-up:active,.snackbar__follow-up:hover{opacity:.6}.snackbar__follow-up--hidden{display:none}.snackbar__follow-up p{margin:0}',
    '']),
    e.exports = r
  },
  1373: function (e, t, n) {
    'use strict';
    n(976)
  },
  1374: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.snackbars{padding:0 16px}',
    '']),
    e.exports = r
  },
  1377: function (e, t, n) {
    'use strict';
    n(978)
  },
  1378: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.fixed-footer{position:fixed;bottom:0;left:0;z-index:12000;width:100%;transition:transform .3s;pointer-events:none}@media (max-width:767px){.fixed-footer--scroll-down{transform:translateY(calc(57px + constant(safe-area-inset-bottom) + env(safe-area-inset-bottom)))}@supports (transform:translateY(constant(safe-area-inset-bottom))){.fixed-footer--scroll-down{transform:translateY(calc(constant(safe-area-inset-bottom) + 57px))}}@supports (transform:translateY(env(safe-area-inset-bottom))){.fixed-footer--scroll-down{transform:translateY(calc(env(safe-area-inset-bottom) + 57px))}}}.fixed-footer__container--bottom{position:relative;z-index:12010;pointer-events:auto}.fixed-footer__container--top{position:relative;z-index:12000}',
    '']),
    e.exports = r
  },
  1379: function (e, t, n) {
    'use strict';
    n(979)
  },
  1380: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.footer{position:relative;display:flex;flex-wrap:wrap;justify-content:space-between;padding:24px;background-color:#fff;background-color:var(--white)}@media (min-width:768px){.footer{padding:48px 24px}}@media (min-width:1548px){.footer{padding:40px}}.footer:before{content:"";position:absolute;top:0;right:24px;left:24px;border-top:1px solid #ebebeb;border-top:1px solid var(--grayLight)}@media (min-width:768px){.footer:before{right:24px;left:24px}}@media (min-width:1548px){.footer:before{right:40px;left:40px}}.footer__item{margin-top:8px;list-style:none;font-size:.875rem;line-height:1.25rem;font-family:nzz-sans-serif,Arial}.footer__item--article{height:16px;font-size:.75rem;line-height:1rem}.footer__item--article+.footer__item--article{padding-left:24px}.footer__column{flex-grow:1;flex-basis:100%;padding-right:24px}@media (min-width:768px){.footer__column{flex-basis:25%;-ms-flex-preferred-size:calc(25% - 16px);padding-right:16px}}@media (min-width:1372px){.footer__column{-ms-flex-preferred-size:calc(25% - 24px);padding-right:24px}}@media (min-width:1548px){.footer__column{-ms-flex-preferred-size:calc(25% - 40px);padding-right:40px}}.footer__column+.footer__column{margin-top:24px}@media (min-width:768px){.footer__column+.footer__column{margin-top:0}}.footer__column--nomobile{display:none}@media (min-width:768px){.footer__column--nomobile{display:block}}.footer__section{display:flex;flex-direction:column}.footer__section--nomobile{display:none}@media (min-width:768px){.footer__section--nomobile{display:block}}.footer__section--article{flex-direction:row;padding:0}.footer__section--title{font-weight:500;font-size:1.125rem;line-height:1.75rem;font-family:nzz-sans-serif,Arial;color:#000;color:var(--black)}.footer__section--list{padding:0}.footer__section+.footer__section{padding-top:24px}@media (min-width:768px){.footer__section+.footer__section{padding-top:16px}}@media (min-width:1372px){.footer__section+.footer__section{padding-top:24px}}@media (min-width:1548px){.footer__section+.footer__section{padding-top:40px}}.footer__link{color:#707070;color:var(--grayMedium);text-decoration:none;transition:opacity .32s ease}.footer__link:hover{opacity:.6}.footer__link--button{margin-bottom:24px}.footer__button{height:48px;font-size:.875rem;line-height:1.375rem;transition:all .32s ease}.footer__article{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;padding:0 0 8px}@media (min-width:768px){.footer__article{padding-bottom:0}}.footer__print{display:none}',
    '']),
    e.exports = r
  },
  1387: function (e, t, n) {
    (function (t) {
      var n = /^\s+|\s+$/g,
      r = /^[-+]0x[0-9a-f]+$/i,
      o = /^0b[01]+$/i,
      c = /^0o[0-7]+$/i,
      l = parseInt,
      d = 'object' == typeof t && t && t.Object === Object && t,
      m = 'object' == typeof self && self && self.Object === Object && self,
      h = d || m || Function('return this') (),
      f = Object.prototype.toString,
      _ = Math.max,
      v = Math.min,
      w = function () {
        return h.Date.now()
      };
      function y(e) {
        var t = typeof e;
        return !!e && ('object' == t || 'function' == t)
      }
      function x(e) {
        if ('number' == typeof e) return e;
        if (function (e) {
          return 'symbol' == typeof e || function (e) {
            return !!e && 'object' == typeof e
          }(e) && '[object Symbol]' == f.call(e)
        }(e)) return NaN;
        if (y(e)) {
          var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
          e = y(t) ? t + '' : t
        }
        if ('string' != typeof e) return 0 === e ? e : + e;
        e = e.replace(n, '');
        var d = o.test(e);
        return d || c.test(e) ? l(e.slice(2), d ? 2 : 8) : r.test(e) ? NaN : + e
      }
      e.exports = function (e, t, n) {
        var r,
        o,
        c,
        l,
        d,
        m,
        h = 0,
        f = !1,
        z = !1,
        k = !0;
        if ('function' != typeof e) throw new TypeError('Expected a function');
        function C(time) {
          var t = r,
          n = o;
          return r = o = void 0,
          h = time,
          l = e.apply(n, t)
        }
        function O(time) {
          return h = time,
          d = setTimeout(E, t),
          f ? C(time) : l
        }
        function S(time) {
          var e = time - m;
          return void 0 === m || e >= t || e < 0 || z && time - h >= c
        }
        function E() {
          var time = w();
          if (S(time)) return j(time);
          d = setTimeout(E, function (time) {
            var e = t - (time - m);
            return z ? v(e, c - (time - h)) : e
          }(time))
        }
        function j(time) {
          return d = void 0,
          k && r ? C(time) : (r = o = void 0, l)
        }
        function M() {
          var time = w(),
          e = S(time);
          if (r = arguments, o = this, m = time, e) {
            if (void 0 === d) return O(m);
            if (z) return d = setTimeout(E, t),
            C(m)
          }
          return void 0 === d && (d = setTimeout(E, t)),
          l
        }
        return t = x(t) || 0,
        y(n) && (f = !!n.leading, c = (z = 'maxWait' in n) ? _(x(n.maxWait) || 0, t) : c, k = 'trailing' in n ? !!n.trailing : k),
        M.cancel = function () {
          void 0 !== d && clearTimeout(d),
          h = 0,
          r = m = o = d = void 0
        },
        M.flush = function () {
          return void 0 === d ? l : j(w())
        },
        M
      }
    }).call(this, n(32))
  },
  1388: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.image-zoom{position:absolute;z-index:12010}.image-zoom__bg{position:absolute;top:0;right:0;bottom:0;left:0;background-color:#fff;background-color:var(--white);opacity:0}.image-zoom__bg--visible{opacity:1;box-shadow:0 0 0 10px #fff;box-shadow:0 0 0 10px var(--white)}.image-zoom__slider{height:100%}.image-zoom__holder{width:100%;height:100%;text-align:center}.image-zoom__holder:after{content:"";display:inline-block;vertical-align:middle;width:0;height:100%}.image-zoom__content{position:relative;max-width:100%;max-height:100%;width:auto;height:auto;vertical-align:middle}.image-zoom__non-image{position:absolute}.image-zoom__controls{top:0;right:0;z-index:12000;display:flex;height:56px}.image-zoom__control{width:56px;height:56px;padding:10px;cursor:pointer}.image-zoom__description{right:0;bottom:0;left:0;z-index:11999;max-width:100%;padding:0 24px 24px;background-color:#fff;background-color:var(--white);pointer-events:none}@media (min-width:768px){.image-zoom__description{left:50%;width:704px;margin-left:-352px;padding:0 24px 24px}}@media (min-width:1372px){.image-zoom__description{width:768px;margin-left:-384px}}@media (min-width:1025px) and (max-width:1199px){.image-zoom__description{width:1024px;margin-left:-512px}}@media (min-width:1548px){.image-zoom__description{width:1200px;margin-left:-600px}}.image-zoom__description a{position:relative;pointer-events:auto}.image-zoom__counter{top:0;left:0;z-index:12000;padding:17px 24px;font-size:.875rem;line-height:1.57;font-family:nzz-sans-serif,Arial;white-space:nowrap}',
    '']),
    e.exports = r
  },
  1389: function (e, t, n) {
    'use strict';
    n(985)
  },
  1390: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.image-zoom__bg{transition:opacity .2s}',
    '']),
    e.exports = r
  },
  1408: function (e, t, n) {
    'use strict';
    n(996)
  },
  1409: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.searchbar{padding:24px;max-height:85%;background-color:#fff;background-color:var(--white)}.searchbar__inner{display:flex;margin-left:auto;margin-right:auto;max-width:720px}.searchbar__icon{display:flex;justify-content:center;align-items:center}.searchbar__close{width:60px}.searchbar__search{width:64px}',
    '']),
    e.exports = r
  },
  143: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(6),
    o = n.n(r),
    c = {
      props: {
        data: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        },
        pagetype: {
          type: String,
        default:
          ''
        },
        componenttype: {
          type: String,
        default:
          ''
        },
        currentArticleId: {
          type: String,
        default:
          ''
        },
        referrerType: {
          type: String,
        default:
          'teaserLink'
        },
        separateFirst: {
          type: Boolean,
        default:
          !0
        },
        filteringEnabled: {
          type: Boolean,
        default:
          !0
        }
      },
      computed: {
        clusters: function () {
          try {
            var e = this.data.content['nzz-feed'].articles;
            return Object.entries(e).map((function (e) {
              var t = o() (e, 2),
              n = t[0];
              return {
                items: t[1],
                key: n
              }
            }))
          } catch (e) {
            return console.log(e),
            [
            ]
          }
        }
      }
    },
    l = (n(1282), n(1)),
    component = Object(l.a) (c, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('div', {
        class : {
          'widget--2of3': e.filteringEnabled,
          'widget--2of3--page': e.filteringEnabled,
          'widget--3of3': !e.filteringEnabled,
          'widget--3of3--page': !e.filteringEnabled
        },
        attrs: {
          'data-source-element-widget': 'Widget-Topic-Index'
        }
      }, e._l(e.clusters, (function (t, r) {
        return n('div', {
          key: 'cluster-' + t.key,
          staticClass: 'cluster',
          class : {
            'cluster--first': 0 === r,
            'cluster--first-no-filter': 0 === r && !e.filteringEnabled,
            'cluster--no-separator-top': !e.separateFirst
          }
        }, [
          n('h3', {
            staticClass: 'cluster__key',
            domProps: {
              innerHTML: e._s(t.key)
            }
          }),
          e._v(' '),
          e._l(t.items, (function (r, o) {
            return n('nuxt-link', {
              key: 'link-' + t.key + o,
              staticClass: 'cluster__item',
              attrs: {
                to: '' + r.slug,
                'data-nzz-referrer': 'topicTag'
              },
              domProps: {
                innerHTML: e._s(r.name)
              }
            })
          }))
        ], 2)
      })), 0)
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  1430: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.weatherelement a:not([class]){color:#000;color:var(--black);text-decoration:none;background-image:linear-gradient(90deg,#05032d,#05032d);background-repeat:no-repeat;background-position:bottom;background-size:100% 1px}.weatherelement a:not([class]):hover{opacity:.6}.weatherelement--title{margin-bottom:40px;font-size:1.125rem;line-height:1.75rem;font-family:nzz-serif,Georgia}@media (min-width:768px){.weatherelement--title{margin-bottom:48px;font-size:1.25rem;line-height:2rem}}.weatherelement--text{margin-top:48px;font-size:1.125rem;line-height:1.75rem;font-family:nzz-serif,Georgia}.weatherelement--text:first-of-type{margin-top:0}@media (min-width:768px){.weatherelement--text{font-size:1.25rem;line-height:2rem}}.weatherelement--subtitle{margin-top:48px;margin-bottom:32px;font-weight:500;font-size:1.25rem;line-height:1.75rem;font-family:nzz-sans-serif,Arial}@media (min-width:768px){.weatherelement--subtitle{font-size:1.375rem;line-height:2rem}.weatherelement--subtitle.weatherelement--subtitle-big{margin-bottom:48px}}.weatherelement--subtitle--legend{padding-top:70px}@media (min-width:768px){.weatherelement--subtitle--legend{padding-top:78px}}.weatherelement--paragraph+.weatherelement--paragraph{margin-top:40px}@media (min-width:768px){.weatherelement--paragraph+.weatherelement--paragraph{font-size:1.25rem;line-height:2rem}}.weather-image__placeholder{position:relative}.weather-image__placeholder--grid2of3,.weather-image__placeholder--slider,.weather-image__placeholder--slider .poster__placeholder{height:100%}.weather-image__placeholder--grid2of3 .poster__placeholder{height:100%;overflow:hidden}.weather-image__placeholder--overlay{cursor:pointer}.weather-image__src{display:block;width:100%;height:auto;margin-bottom:0;opacity:1;transition:opacity .1s ease-in-out}.weather-image__src--slider{width:auto;height:100%;margin:0 auto}.weather-image__src--grid2of3{transform-origin:top left}.weather-image__src.lazyloaded{opacity:1}.weather-image__description{margin-top:16px}',
    '']),
    e.exports = r
  },
  1431: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.weathermap{position:relative;font-family:nzz-serif,Georgia}.weathermap:after{display:block;clear:both;content:""}.weathermap__border{position:absolute;top:0;z-index:1;width:100%}.weathermap__time{font-size:.875rem;line-height:1.375rem}@media (min-width:768px){.weathermap__time{font-size:1rem;line-height:1.625rem}}.weathermap__source{color:#707070;color:var(--grayMedium);font-size:.625rem;line-height:.875rem;float:right}.weathermap__frame{position:absolute;top:0;z-index:-1;width:100%}.weathermap__frame .figure__caption{display:none}.weathermap__frame--active{z-index:1}.weathermap__frame--active .figure__caption{padding-top:16px;display:block}.weathermap .image__placeholder{background-color:transparent}.weathermap--europe{margin-bottom:40px}@media (min-width:768px){.weathermap--europe{margin-bottom:48px}}.weathermap--europe img{width:100%}.weathermap--isobar{padding-top:16px}.weathermap--europe-rainradar{margin-bottom:40px}.weathermap--europe-rainradar img{width:100%}.weathermap__schweiz{overflow:visible}@media (min-width:768px){.weathermap__schweiz{margin-left:-40px}}.weathermap__schweiz .figure__image{position:absolute;top:0;left:0;height:auto;width:100%}.weathermap__schweiz .image__placeholder{display:block;position:relative;margin:0 auto;width:320px;height:213px}@media (min-width:768px){.weathermap__schweiz .image__placeholder{margin-top:-48px;width:480px;height:320px}}@media (min-width:1372px){.weathermap__schweiz .image__placeholder{width:640px;height:430px}}.weathermap__cities{list-style:none;position:relative;z-index:1;margin:0 auto;padding:0;width:320px;transform:scale(.7);transform-origin:-14% 0}@media (min-width:768px){.weathermap__cities{width:460px;transform:none}}@media (min-width:1372px){.weathermap__cities{width:460px;position:absolute;left:40%;top:4%;transform:translate3d(-50%,-50%,0) scale(1.25)}}.weathermap__cities .city_icon{position:absolute}.weathermap__cities .city_icon.zurich{left:274px;top:87px}.weathermap__cities .city_icon.st_gallen{left:346px;top:81px}.weathermap__cities .city_icon.chur{left:362px;top:155px}.weathermap__cities .city_icon.st_gotthard{left:282px;top:191px}.weathermap__cities .city_icon.st_moritz{left:389px;top:199px}.weathermap__cities .city_icon.locarno{left:298px;top:242px}.weathermap__cities .city_icon.interlaken{left:217px;top:178px}.weathermap__cities .city_icon.sitten{left:172px;top:236px}.weathermap__cities .city_icon.genf{left:63px;top:243px}.weathermap__cities .city_icon.lausanne{left:106px;top:197px}.weathermap__cities .city_icon.biel{left:162px;top:118px}.weathermap__cities .city_icon.bern{left:180px;top:142px}.weathermap__cities .city_icon.basel{left:193px;top:66px}.weathermap__cities .city_icon.luzern{left:253px;top:129px}.weathermap__city{margin:-40px 0 0 -22px;padding:30px 0 0;width:44px;background-position:0 -5px;background-size:cover;background-repeat:no-repeat;color:#000;color:var(--black);text-align:center;text-shadow:0 0 1px #ebebeb;text-shadow:0 0 1px var(--grayLight);font-weight:500;font-size:.75rem;font-family:nzz-sans-serif,Arial}@media (min-width:768px){.weathermap__city{margin:-40px 0 0 -62px;font-size:.625rem}}',
    '']),
    e.exports = r
  },
  1432: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.weatherlist{display:flex;flex-direction:column;margin:0;padding:0 0 34px;border-bottom:1px solid #ebebeb;border-bottom:1px solid var(--grayLight);line-height:1.5rem}@media (min-width:768px){.weatherlist{line-height:1.75rem;max-width:424px}}.weatherlist__item{position:relative;display:flex;align-items:center;min-height:40px;font-size:1rem;line-height:1.5rem;font-family:nzz-sans-serif,Arial}@media (min-width:768px){.weatherlist__item{font-size:1.125rem;line-height:1.75rem}}.weatherlist__item+.weatherlist__item{margin-top:10px}.weatherlist__name{width:120px}.weatherlist__forecast{display:flex;flex-direction:column;align-items:flex-start;padding-right:8px;flex-grow:1;padding-left:48px;justify-content:center}@media (min-width:768px){.weatherlist__forecast{align-items:center;flex-direction:row;padding-left:0;justify-content:flex-start}}.weatherlist__icon{position:absolute;max-width:40px;left:0}@media (min-width:768px){.weatherlist__icon{position:unset;margin:0 8px;padding:4px}}.weatherlist__temp{flex:1;padding:0;display:flex;justify-content:flex-end;max-width:80px}.weatherlist__temp--min{opacity:.6;margin-left:3px}@media(min-width:768px){.weatherlist__temp{justify-content:flex-start}}.weatherlist__text{color:#707070;color:var(--grayMedium);font-size:.875rem;line-height:1.375rem;margin-top:-2px}@media (min-width:768px){.weatherlist__text{font-size:1.125rem;width:160px;color:#000;color:var(--black)}}.weatherlist__section+.weatherlist__section{margin-top:40px}@media (min-width:768px){.weatherlist__section+.weatherlist__section{margin-top:64px}}.weatherlist+.weatherelement--paragraph{margin-top:56px}@media (min-width:768px){.weatherlist+.weatherelement--paragraph{margin-top:64px}}.weatherlist__subtitle{margin-top:40px}@media (min-width:768px){.weatherlist__subtitle{margin-top:48px}}',
    '']),
    e.exports = r
  },
  1433: function (e, t, n) {
    'use strict';
    n(1011)
  },
  1434: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.footnote{position:relative;padding-top:16px;font-size:.875rem;line-height:1.57;font-family:nzz-sans-serif,Arial;color:#333;color:var(--grayDark)}@media (min-width:768px){.footnote{font-size:1rem;line-height:1.62}}.footnote:after{content:"";position:absolute;top:0;left:0;width:40px;height:0;border-bottom:1px solid #333;border-bottom:1px solid var(--grayDark)}',
    '']),
    e.exports = r
  },
  1437: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.webalert{position:absolute;right:16px;left:16px;z-index:10000;height:0;padding:0;font-family:nzz-sans-serif,Arial}.webalert--menu-active{z-index:12011}@media (min-width:768px){.webalert{right:auto;left:auto;width:400px;margin-left:344px}}@media (min-width:1116px){.webalert{right:348px;margin:0}}@media (min-width:1372px){.webalert{right:356px;margin:0}}@media (min-width:1548px){.webalert{right:auto;margin-left:752px}}.webalert .webalert__holder--bubble .webalert__item{opacity:0;transform:translateY(-25%);transition:all .2s ease}.webalert.active .webalert__holder--bubble .webalert__item{opacity:1;transform:translateY(0)}.webalert--fixed{position:fixed;top:0}.webalert__holder{position:relative;height:0;margin:0 0 0 auto;z-index:101}.webalert__holder--bubble{max-width:none;left:0;position:fixed;right:0;top:113px;z-index:100;text-align:center;width:100%;transition:top .2s ease}@media (min-width:768px){.webalert__holder--bubble{top:81px;padding:0;width:400px;margin-left:207px}}@media (min-width:1116px){.webalert__holder--bubble{margin:auto;transform:translateX(-148px)}}@media (min-width:1848px){.webalert__holder--bubble{margin:auto;transform:translateX(0)}}.webalert__holder--bubble .webalert__item{margin:0 auto;border-radius:25px;background-color:#2c32bd;background-color:var(--blueStrong);padding:13px 24px;line-height:1;width:auto;display:inline-block;font-size:.875rem}.webalert__holder--bubble .webalert__text{padding:0;display:inline-block}@media (min-width:768px){.webalert__holder--bubble.webalert__holder-on-top--fixed{top:113px}}.webalert__holder--scroll-down{top:58px}@media (min-width:768px){.webalert__holder--scroll-down{top:81px}}.webalert__holder--scroll-down.webalert__holder--scroll-down.webalert__holder-on-top--fixed{top:51px}.webalert__holder--scroll-down.webalert__holder-on-top--fixed{top:113px}.webalert__holder--app{top:80px}.webalert__container{display:flex;flex-direction:column;align-items:flex-end;overflow:visible;pointer-events:none}.webalert__item{position:relative;width:100%;max-width:400px;margin-top:16px;color:#fff;color:var(--white);text-decoration:none;background-color:#e74e4b;background-color:var(--red);border-radius:4px;box-shadow:0 0 16px rgba(0,0,0,.16);cursor:pointer;transition:box-shadow .2s ease-in-out;pointer-events:auto}.webalert__item:hover{box-shadow:0 0 16px rgba(0,0,0,.32)}.webalert__item--userinfo{color:#000;color:var(--black);background-color:#fff;background-color:var(--white);cursor:auto}.webalert__item--userinfo:hover{box-shadow:0 0 16px rgba(0,0,0,.16)}.webalert__text{padding:16px 72px 16px 24px}.webalert__close{position:absolute;top:0;right:0;padding:22px}.webalert__closeicon{display:block;cursor:pointer}.pageholder--disabled .webalert{position:fixed;top:0;right:0;left:0;z-index:9000;width:auto;height:0;font-family:nzz-sans-serif,Arial}.pageholder--disabled .webalert__holder{position:relative;height:0;margin:0 0 0 auto;padding:0 16px}@media (min-width:768px){.pageholder--disabled .webalert__holder{margin:0 16px 0 auto}}@media (min-width:1372px){.pageholder--disabled .webalert__holder{margin:0 24px 0 auto}}@media (min-width:1548px){.pageholder--disabled .webalert__holder{margin:0 40px 0 auto}}',
    '']),
    e.exports = r
  },
  149: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      extends : n(99).default
    },
    o = (n(770), n(1084), n(1)),
    component = Object(o.a) (r, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return e.qData.html ? n('div', {
        staticClass: 'widget widget--qembed widget--qembed--page'
      }, [
        n('client-only', [
          n('div', {
            domProps: {
              innerHTML: e._s(e.htmlPreservedScripts)
            }
          })
        ])
      ], 1) : e._e()
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  1512: function (e, t, n) {
    'use strict';
    n.r(t),
    n.d(t, 'svg', (function () {
      return svg
    }));
    var svg = '\n  <svg width="17" height="12" xmlns="http://www.w3.org/2000/svg">\n    <path class="ql-fill" d="M2 12.7c-.2.2-.4.3-.7.3-.2 0-.5 0-.6-.3a.9.9 0 0 1-.3-.6V1.5c0-.2 0-.5.3-.6.1-.2.4-.3.6-.3.3 0 .5 0 .7.3.2.1.3.4.3.6v4l.1.2h5l.1-.2v-4c0-.2.1-.5.3-.6.2-.2.4-.3.7-.3.2 0 .5 0 .6.3.2.1.3.4.3.6v10.6c0 .2 0 .4-.3.6-.1.2-.4.3-.6.3-.3 0-.5 0-.7-.3a.9.9 0 0 1-.3-.6V7.3L7.4 7h-5l-.1.2V12l-.3.6zm9.3-5.6c-.1 0-.3 0-.4-.2a.5.5 0 0 1-.2-.4v-.2l.2-.4.4-.2h3.8c.1 0 .2 0 .3.2.2 0 .2.2.2.4v.2c0 .4-.1.7-.4 1l-1.5 1.2h.1c.6 0 1 .2 1.4.5.3.4.5.9.5 1.5 0 .8-.2 1.4-.7 1.8-.5.4-1.1.6-2 .6-.6 0-1.1 0-1.7-.2a.8.8 0 0 1-.5-.7v-.4s0-.2.2-.3h.3l1.5.3c.4 0 .7-.1 1-.3.1-.2.3-.4.3-.8 0-.3-.2-.5-.4-.7l-1.4-.2-.4-.1a.5.5 0 0 1-.2-.4c0-.4.2-.7.5-1l1.4-1.2h-2.3z" fill-rule="nonzero" fill="currentColor"/>\n  </svg>\n'
  },
  1513: function (e, t, n) {
    'use strict';
    n.r(t),
    n.d(t, 'svg', (function () {
      return svg
    }));
    var svg = '\n  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path class="ql-fill" d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>\n    <path d="M0 0h24v24H0z" fill="none"/>\n  </svg>\n'
  },
  1537: function (e, t, n) {
    n(11).register({
      aargauerzeitung: {
        width: 2237,
        height: 263,
        viewBox: '0 0 2237 263',
        data: '<path pid="0" d="M1127.8 106.1l1.2-48.4h-1.2l-63.2 15.1V74l14.7 14.7v99.6c0 8.5-4.3 9.3-14.7 10.1v3.5h84.1v-3.5c-14.3-1.2-20.9-2.7-20.9-11.2v-78c11.2-8.1 26.3-8.9 43.4-8.9h6.2V61.2c-2.7-1.9-7-3.5-12.8-3.5-19 0-30.6 20.1-36.8 48.4zM994.5 61.9c13.9 0 19.8 20.5 19.8 48.4h-42.6c.8-25.9 8.1-48.4 22.8-48.4zm62 92.6l-1.2-.4c-9.7 12.8-24 18.2-39.1 18.2-27.1 0-44.6-20.1-44.9-56.9h84.5v-1.5c0-30.6-19.4-56.2-57.3-56.2-38 0-70.5 33.3-70.5 76.7 0 43.8 29.8 70.1 67 70.1 32.5 0 56.1-19.8 61.5-50zM908.2 91.4l1.2-33.3h-1.2l-62.8 12.4v2.7c12 3.5 13.9 7.7 13.9 16.7v84.5c-5.4 3.5-11.6 5.8-18.6 5.8-13.2 0-19-7.4-19-21.7v-67l1.5-33.3H822l-63 12.3v2.7c12.4 3.5 14.3 7.7 14.3 16.7v70.5c0 30.2 16.7 44.2 39.5 44.2 21.3 0 37.6-14.3 46.9-27.5l-.8 27.5h1.2l63.5-9.3v-3.1c-13.6-.4-15.1-4.3-15.1-13.6V91.4h-.3zM683.5 184c-12.4 0-19.4-11.6-19.4-29.1 0-16.7 6.2-23.6 17.4-28.3l12.4-5v58.5c-2.7 2.7-6.6 3.9-10.4 3.9zm57.7-80.6c0-34.1-22.1-45.7-58.5-45.7-29.8 0-57.7 12.8-57.7 35.3 0 9.3 5.8 15.9 12.8 18.2l30.6-3.9c-1.5-5-2.7-14.3-2.7-21.3 0-14.3 4.6-24.4 14.7-24.4S694 70.9 694 84.8v32.5l-37.2 12.8c-23.6 7.7-39.5 18.6-39.5 39.5 0 22.1 17 34.1 37.2 34.1 17.4 0 31.4-10.1 39.5-20.1 3.5 12.8 15.1 21.3 30.6 21.3 14.7 0 28.3-8.5 35.3-19.4l-1.2-1.2c-1.5.8-4.3 1.5-7.7 1.5-6.2 0-10.1-3.9-10.1-11.6v-70.8h.3zM558.3 210.7c12.8 0 20.9 4.6 20.9 16.7 0 20.5-22.5 29.4-45.3 29.4-24.8 0-43.4-12-43.4-31.4 0-7 1.9-12 5.4-15.1h62.4v.4zm52.3-7c0-24.8-16.7-36.4-48.4-36.4h-58.1c-6.2 0-8.9-3.1-8.9-7.7 0-5.4 3.5-10.5 7.7-13.9 9.3 3.5 19.8 5 29.4 5 34.1 0 62.4-18.2 62.4-48.8 0-12.8-7.7-23.6-18.6-31.4L604 77h1.9V58.5l-47.7 3.1c-7.7-2.7-15.9-3.9-23.6-3.9-34.1 0-62.4 18.6-62.4 48.8 0 19 12.4 31.4 28.7 38-16.3 7-30.2 18.6-30.2 36.8 0 15.5 11.6 24 23.2 28.7-13.6 1.2-29.8 8.5-29.8 22.1 0 19 30.2 28.7 64.7 28.7 48.5-.5 81.8-23.4 81.8-57.1zm-75.9-56.5c-12 0-18.2-20.1-18.2-47.7 0-23.2 3.9-38.4 15.9-38.4s18.2 20.1 18.2 46.9c0 24.4-3.9 39.2-15.9 39.2zm-120.9-41.1l1.2-48.4h-1.2l-63.1 15.1V74l14.7 14.7v99.6c0 8.5-4.3 9.3-14.7 10.1v3.5h83.7v-3.5c-14.3-1.2-20.9-2.7-20.9-11.2v-78c11.2-8.1 26.3-8.9 43.4-8.9h6.2V61.2c-2.7-1.9-7-3.5-12.8-3.5-18.7 0-30.3 20.1-36.5 48.4zM268.9 184c-12.4 0-19.4-11.6-19.4-29.1 0-16.7 6.2-23.6 17.4-28.3l12.4-5v58.5c-2.2 2.7-6.5 3.9-10.4 3.9zm58.1-80.6c0-34.1-22.1-45.7-58.5-45.7-29.8 0-57.7 12.8-57.7 35.3 0 9.3 5.8 15.9 12.8 18.2l30.6-3.9c-1.5-5-2.7-14.3-2.7-21.3 0-14.3 4.6-24.4 14.7-24.4s13.6 9.3 13.6 23.2v32.5l-37.2 12.8c-23.6 7.7-39.5 18.6-39.5 39.5 0 22.1 17 34.1 37.2 34.1 17.4 0 31.4-10.1 39.5-20.1 3.5 12.8 15.1 21.3 30.6 21.3 14.7 0 28.3-8.5 35.3-19.4l-1.2-1.2c-1.5.8-4.3 1.5-7.7 1.5-6.2 0-10.1-3.9-10.1-11.6v-70.8h.3zM59.3 197.9c-16.7-.4-27.5-3.9-27.5-13.2 0-2.3.4-5.4 1.9-8.9l15.1-42.6h61.6l15.9 42.6c1.2 3.9 1.9 7.4 1.9 10.1 0 8.9-7.4 11.6-20.5 12v3.9h93.4v-3.9c-8.5-.8-13.6-3.1-16.7-10.8L122.5 17H67.9l8.5 22.9-51.9 141.4C19 195.2 11.7 197.1 2 197.9v3.9h57.3v-3.9zm49.2-70.5H50.8L79.1 48l29.4 79.4zm2074 85.2c12.8 0 20.9 4.6 20.9 16.7 0 20.5-22.5 29.4-45.3 29.4-24.8 0-43.4-12-43.4-31.4 0-7 1.9-12 5.4-15.1h62.4v.4zm51.9-6.5c0-24.8-16.7-36.4-48.4-36.4h-58.1c-6.2 0-8.9-3.1-8.9-7.7 0-5.4 3.5-10.5 7.7-13.9 9.3 3.5 19.8 5 29.4 5 34.1 0 62.4-18.2 62.4-48.8 0-12.8-7.7-23.6-18.6-31.4l27.9 6.6h1.9V60.9L2182 64c-7.7-2.7-15.9-3.9-23.6-3.9-34.1 0-62.4 18.6-62.4 48.8 0 19 12.4 31.4 28.7 38-16.3 7-30.2 18.6-30.2 36.8 0 15.5 11.6 24 23.2 28.7-13.6 1.2-29.8 8.5-29.8 22.1 0 19 30.2 28.7 64.7 28.7 48.9-.6 81.8-23.8 81.8-57.1zm-75.5-56.6c-12 0-18.2-20.1-18.2-47.7 0-23.2 3.9-38.4 15.9-38.4s18.2 20.1 18.2 46.9c-.5 24.1-4.3 39.2-15.9 39.2zm-134.5 41.1c0 8.5-4.6 9.3-15.1 10.1v3.5h78.6v-3.5c-10.5-.8-15.1-1.9-15.1-10.1V103c0-26.7-13.9-43-39.1-43-22.1 0-41.1 16.7-49.2 29.1l1.2-29.1h-1.2l-63.1 15.1v1.2l14.7 14.7v99.6c0 8.5-4.3 9.3-14.7 10.1v3.5h78.3v-3.5c-10.5-.8-15.1-1.9-15.1-10.1V91c6.6-3.1 13.6-5.4 21.7-5.4 13.6 0 18.2 7.7 18.2 19.4v85.6h-.1zm-126.7-96.9l1.2-33.3h-.8l-62.8 12.4v2.7c12 3.5 13.9 7.7 13.9 16.7v84.5c-5.4 3.5-11.6 5.8-18.6 5.8-13.2 0-19-7.4-19-21.7v-67l1.2-33.3h-1.1l-63.1 12.4v2.7c12.4 3.5 14.3 7.7 14.3 16.7v70.5c0 30.2 16.7 44.2 39.5 44.2 21.3 0 37.6-14.3 46.9-27.5l-.8 27.5h1.2l63.5-9.3v-3.1c-13.6-.4-15.1-4.3-15.1-13.6V93.8h-.4v-.1zm-189-67.8h-2c-14.3 17.8-41.8 37.2-62 45.3v3.9h15.1v88.3c0 28.7 15.9 43 40.3 43 20.9 0 37.2-12.4 46.9-27.1l-1.2-1.2c-5.4 3.5-12 5-17.4 5-12.4 0-19.8-6.2-19.8-20.9V75h32.5V65h-32.4V25.9zM1626.5 60h-1.2l-62.4 15.1v1.2l14.8 14.7v99.6c0 8.5-4.3 9.3-14.7 10.1v3.5h78.3v-3.5c-10.5-.8-15.1-1.9-15.1-10.1V60h.3zm-24-11.6c15.9 0 25.6-11.2 25.6-24.4s-9.7-24-25.6-24c-15.9 0-25.6 10.8-25.6 24 .1 13.1 9.7 24.4 25.6 24.4zm-110.4 15.9c13.9 0 19.8 20.5 19.8 48.4h-42.6c.7-26 8.1-48.4 22.8-48.4zm62 92.6l-1.2-.4c-9.7 12.8-24 18.2-39.1 18.2-27.1 0-44.6-20.1-44.9-56.9h84.5v-1.5c0-30.6-19.4-56.2-57.3-56.2-38 0-70.5 33.3-70.5 76.7 0 43.8 29.8 70.1 67 70.1 32.4-.1 56.1-19.8 61.5-50zM1319.3 25.1h34.5L1255 201.8v2.3h149.9l9.7-62.4h-2.7c-18.6 41.8-34.5 57.3-58.1 57.3h-41.1l98.8-176.3V20h-146l-1.2 52.7h3.1c12.8-37.9 27.1-47.6 51.9-47.6z" _fill="#003478"/>'
      }
    })
  },
  1541: function (e, t, n) {
    n(11).register({
      solothurnerzeitung: {
        width: 2426,
        height: 251,
        viewBox: '0 0 2426 251',
        data: '<path pid="0" d="M2374.7 206.2c11.6 0 18.3 4.3 18.3 14.9 0 18.6-20.7 26.2-41.4 26.2-23.4 0-42-11.3-42-28.9 0-6.1 1.5-10 4.6-12.5h60.5v.3zm51.1-10.1c0-23.4-16.1-35.6-47.1-35.6h-56.6c-5.2 0-7.6-3-7.6-6.7 0-4.6 3.3-9.1 6.7-12.2 9.1 3.3 19.5 4.9 28.9 4.9 33.5 0 61.4-17 61.4-46.5 0-11.9-7.3-22.2-17.9-29.2l26.2 6.7h1.8V58.9l-47.1 3c-7.3-2.1-15.2-3.3-22.2-3.3-33.5 0-61.4 17-61.4 46.5 0 18.3 12.2 29.8 28 36.2-16.4 6.1-30.1 17.6-30.1 35.6 0 15.5 12.2 23.7 23.4 28.6-12.8 0-28.9 6.7-28.9 19.2 0 17.6 29.2 26.2 62.4 26.2 48.8 0 80.1-22.5 80.1-54.8zm-73.6-52.6c-10 0-14.9-19.2-14.9-45.9 0-22.5 2.7-36.2 12.8-36.2 10.1 0 14.9 19.2 14.9 45 0 23.7-2.8 37.1-12.8 37.1zm-128.1 39.6c0 7.3-4 8.2-13.1 8.8v3.3h77.3v-3.3c-9.1-.6-13.1-1.5-13.1-8.8v-84c0-24.9-14-40.8-38-40.8-21 0-39.5 16.4-46.8 28l.9-28h-.9l-64.2 14.9v.9l13.1 15.2V183c0 7.3-4 8.2-13.1 8.8v3.3h77.3v-3.2c-9.1-.6-13.1-1.5-13.1-8.8V88.2c5.8-2.1 10.6-3.3 17.6-3.3 12.5 0 16.1 7 16.1 16.1v82.1zm-114-91.9l1.5-32.9h-.9l-63.9 12.8v2.4c10.6 3.3 12.5 7.9 12.5 16.7v78.2c-4.3 2.7-8.8 4.6-15.2 4.6-11.3 0-16.7-6.1-16.7-18.9v-63l1.5-32.9h-.9L1964.1 71v2.4c10.6 3.3 12.5 7.9 12.5 16.7v65.1c0 28.9 15.8 42.3 38.3 42.3 21 0 36.2-14.3 44.7-27.1l-.6 27.1h.9l64.5-8.5v-3.3c-11.6 0-13.7-4.3-13.7-12.8V91.1l-.6.1zm-178-66.6h-2.1c-14.9 17-43.2 36.5-63.3 44.1v4.6h13.4v83c0 27.1 15.5 41.7 39.5 41.7 20.7 0 37.1-11.9 46.8-27.1l-.9-1.2c-4.6 3-11 4.3-15.5 4.3-11.6 0-18.3-5.5-18.3-18.6V73.3h29.8v-10h-29.8V24.7l.4-.1zm-74.5 33.8h-.9l-63.3 14.9v.9l13.1 15.2v93.7c0 7.3-4 8.2-13.1 8.8v3.3h77.3v-3.3c-9.1-.6-13.1-1.5-13.1-8.8V58.4zm-25-9.2c16.4 0 26.2-11.6 26.2-24.6 0-13-10-24.6-26.2-24.6-16.7 0-26.2 11.6-26.2 24.6 0 13 9.8 24.6 26.2 24.6zm-100.9 13.1c11.9 0 16.7 19.5 16.7 46.2h-35.9c.6-24.6 6.1-46.2 19.2-46.2zm60.5 86.7l-1.2-.6c-9.1 11.6-22.5 16.4-36.5 16.4-24.9 0-41.1-17.9-42-51.1h79.4v-1.5c0-29.2-18.9-53.8-56-53.8-36.8 0-68.7 31.6-68.7 72.7 0 42.9 30.1 66.9 65.4 66.9 31 0 54.4-19.2 59.6-49zM1572.3 26.4h27.7l-91 166.7v2.1h145.4l9.4-61.1h-3c-19.2 41.1-33.8 56.3-57.2 56.3h-34.1l91.3-166.7v-2.4h-141.2l-1.2 51.7h3c12.8-36.5 27.1-46.6 50.9-46.6zm-190 79.2l.9-48.1h-.9l-64.2 14.9v.9l13.1 15.2v93.7c0 7.3-4 8.2-13.1 8.8v3.3h82.7V191c-12.5-1.2-18.5-2.7-18.5-10v-72.4c10.6-6.4 25.3-7 41.1-7h6.4V60.5c-2.7-1.8-7-3.3-12.5-3.3-18.9.3-30.5 20.4-35 48.4zm-125.9-44.2c11.9 0 16.7 19.5 16.7 46.2h-35.9c.6-24.6 6.1-46.2 19.2-46.2zm60.5 86.4l-1.2-.6c-9.1 11.6-22.5 16.4-36.5 16.4-24.9 0-41.1-17.9-42-51.1h79.4V111c0-29.2-18.9-53.8-56-53.8-36.8 0-68.8 31.6-68.8 72.7 0 42.9 30.1 66.9 65.4 66.9 31.1.3 54.5-18.9 59.7-49zM1128 182.2c0 7.3-3.9 8.2-13.1 8.8v3.3h77.3V191c-9.1-.6-13.1-1.5-13.1-8.8V97.9c0-24.9-14-40.8-38-40.8-21 0-39.5 16.4-46.8 28l.9-28h-.9l-64.2 15.2v.9l13.1 15.2v93.7c0 7.3-4 8.2-13.1 8.8v3.3h77.3V191c-9.1-.6-13.1-1.5-13.1-8.8V87c5.8-2.1 10.7-3.3 17.6-3.3 12.5 0 16.1 7 16.1 16.1v82.4zm-147.8-76.6l.9-48.1h-.9L916 72.4v.9l13.1 15.2v93.7c0 7.3-4 8.2-13.1 8.8v3.3h82.7V191c-12.5-1.2-18.6-2.7-18.6-10v-72.4c10.6-6.4 25.3-7 41.1-7h6.4V60.5c-2.7-1.8-7-3.3-12.5-3.3-18.8.3-30.4 20.4-34.9 48.4zM899.9 90l1.5-32.9h-.9L836.6 70v2.4c10.6 3.3 12.5 7.9 12.5 16.7v78.2c-4.3 2.7-8.8 4.6-15.2 4.6-11.3 0-16.7-6.1-16.7-18.9V90l1.5-32.9h-.9l-64 12.9v2.4c10.6 3.3 12.5 7.9 12.5 16.7v65.1c0 28.9 15.8 42.3 38.3 42.3 21 0 36.2-14.3 44.7-27.1l-.6 27.1h.9l64.5-8.5v-3.3c-11.6 0-13.7-4.3-13.7-12.8V90h-.5zm-207.8 92.2c0 7.3-4 8.2-13.1 8.8v3.3h77.3V191c-9.1-.6-13.1-1.5-13.1-8.8V97.9c0-24.9-14-40.8-38-40.8-21 0-39.5 16.4-46.8 28V0h-.9l-63.3 14.9v.9l13 15.2v150.9c0 7.3-4 8.2-13.1 8.8v3.3h77.3v-3.3c-9.1-.6-13.1-1.5-13.1-8.8V87c5.8-2.1 10.6-3.3 17.6-3.3 12.5 0 16.1 7 16.1 16.1l.1 82.4zM567.4 23.7h-2.1c-14.9 17-43.2 36.5-63.3 44.1v4.6h13.4v83c0 27.1 15.5 41.7 39.5 41.7 20.7 0 37.1-11.9 46.8-27.1l-.9-1.2c-4.6 3-11 4.3-15.5 4.3-11.6 0-18.3-5.5-18.3-18.6V72.4h29.8v-10H567V23.7h.4zM433.2 193.5c-13.4 0-18.9-28.9-18.9-77.3 0-34.4 3.3-55.4 16.4-55.4 13.4 0 18.9 28.9 18.9 77.3.1 34.7-3.3 55.4-16.4 55.4zm-1.2-136c-40.5 0-71.8 30.7-71.8 72.1 0 41.4 30.7 67.5 71.8 67.5 40.5 0 71.8-30.7 71.8-72.1 0-41.3-30.7-67.5-71.8-67.5zM347.5.3h-.9L283 15.2v.9l13.1 15.2v150.9c0 7.3-4 8.2-13.1 8.8v3.3h77.3V191c-9.1-.6-13.1-1.5-13.1-8.8V.3h.3zM212.4 193.5c-13.4 0-18.9-28.9-18.9-77.3 0-34.4 3.3-55.4 16.4-55.4 13.4 0 18.9 28.9 18.9 77.3 0 34.7-3 55.4-16.4 55.4zm-1.2-136c-40.5 0-71.8 30.7-71.8 72.1 0 41.4 30.7 67.5 71.8 67.5 40.5 0 71.8-30.7 71.8-72.1 0-41.3-30.4-67.5-71.8-67.5zM70 21.9c24 0 42.3 22.2 48.7 52h2.4l-1.2-41.4c-14-9.4-32.2-14.6-52-14.6C33.8 17.9 2.2 39.5 2.2 76c0 63.6 90 41.4 90 90 0 17.9-14.3 27.1-31.6 27.1-31.3 0-52.3-31.9-58.4-58.7H-.5l3 45.9c12.2 9.1 34.4 16.7 57.2 16.7 41.1 0 73-24.6 73-61.4 0-67.5-91.9-49.9-91.9-88.2C40.8 31.6 53 21.9 70 21.9z" _fill="#C02010"/>'
      }
    })
  },
  1543: function (e, t, n) {
    n(11).register({
      grenchnertagblatt: {
        width: 2305,
        height: 258,
        viewBox: '0 0 2305 258',
        data: '<path pid="0" d="M2276.2 31.3h-2.1c-14.8 17.2-43.2 36.6-63.2 44.1v4.5h13.3V163c0 26.9 15.7 41.7 39.6 41.7 20.9 0 37.2-11.8 46.8-26.9l-.9-1.2c-4.8 3-10.9 4.2-15.4 4.2-11.5 0-18.1-5.4-18.1-18.7V79.9h29.6v-10h-29.6V31.3zm-95.8 0h-2.1c-14.8 17.2-43.2 36.6-63.2 44.1v4.5h13.3V163c0 26.9 15.7 41.7 39.6 41.7 20.9 0 37.2-11.8 46.8-26.9l-.8-1.1c-4.8 3-10.9 4.2-15.4 4.2-11.5 0-18.1-5.4-18.1-18.7V80h29.5V70h-29.6V31.3zm-129.9 152.6c-11.2 0-17.2-10.9-17.2-27.8 0-16 5.1-22.7 16-26.9l7.6-3v55.9c-1.6.9-4 1.8-6.4 1.8zm56.2-74.6c0-33.6-22.4-44.1-58.6-44.1-29 0-56.8 12.1-56.8 33.9 0 9.4 6 16 13 18.1l32.3-3.9c-1.5-4.8-3-14.5-3-21.5 0-13.3 3.6-22.7 12.4-22.7 8.2 0 10.6 7.9 10.6 19.6v33.6l-35.1 11.8c-22.7 7.6-37.5 17.5-37.5 37.5 0 21.5 16.9 32.6 36.3 32.6 16 0 29.6-9.1 36.6-18.7 3.9 11.8 16 19.6 31.1 19.6 14.8 0 28.4-8.5 35.4-19.3l-.9-1.2c-1.2.6-3.3 1.2-6.3 1.2-5.7 0-9.1-3.3-9.1-10.3v-66.2h-.4zM1972.5 8h-.9l-63.2 14.8v.9l13.3 15.1v150.9c0 7.6-3.9 8.2-13.3 9.1v3.3h77.4v-3.3c-9.1-.6-13.3-1.5-13.3-9.1V8zm-141.8 192.6c-10.6 0-15.1-11.5-15.1-27.8V94.5c3.9-2.1 7.6-2.4 11.5-2.4 16.6 0 28.4 16 28.4 50.8 0 32.3-8.1 57.7-24.8 57.7zm-66.2-161.7v148.7c16.9 13 43.5 16.9 66.5 16.9 40.5 0 76.8-28.4 76.8-78.3 0-37.5-19.3-61.4-49.3-61.4-20.6 0-36.3 14.2-42.6 26.9V8h-.9l-63.2 14.8v.9l12.7 15.2zM1707.7 213c11.5 0 18.4 4.2 18.4 14.8 0 18.7-20.9 26.3-41.4 26.3-23.6 0-42-11.2-42-28.7 0-6.3 1.5-10.3 4.8-12.4h60.2zm51.1-10c0-23.6-16-35.4-47.1-35.4h-56.5c-5.1 0-7.6-3-7.6-6.6 0-4.8 3.3-9.1 6.6-12.1 9.1 3.3 19.3 4.8 28.7 4.8 33.5 0 61.7-17.2 61.7-46.5 0-11.8-7.6-22.1-17.8-29.3l26.3 6.6h1.8V65.8l-47.1 3c-7.6-2.1-15.1-3.3-22.4-3.3-33.5 0-61.7 17.2-61.7 46.5 0 18.1 12.1 29.6 28.1 36.3-16.3 6.3-29.9 17.5-29.9 35.7 0 15.7 12.1 23.9 23.6 28.4-12.7 0-28.7 6.6-28.7 19 0 17.5 29.3 26.3 62.6 26.3 48.3-.3 79.4-22.7 79.4-54.7zm-73.7-52.6c-10 0-14.8-19-14.8-45.9 0-22.7 2.7-36.3 12.7-36.3s14.8 19 14.8 45c0 23.6-2.8 37.2-12.7 37.2zm-135.7 33.5c-11.2 0-17.2-10.9-17.2-27.8 0-16 5.1-22.7 16-26.9l7.6-3v55.9c-1.6.9-4 1.8-6.4 1.8zm55.9-74.6c0-33.6-22.4-44.1-58.6-44.1-29 0-56.8 12.1-56.8 33.9 0 9.4 6 16 13 18.1l32.3-3.9c-1.5-4.8-3-14.5-3-21.5 0-13.3 3.6-22.7 12.4-22.7 8.2 0 10.6 7.9 10.6 19.6v33.6l-35.2 11.8c-22.7 7.6-37.5 17.5-37.5 37.5 0 21.5 16.9 32.6 36.3 32.6 16 0 29.6-9.1 36.6-18.7 3.9 11.8 16 19.6 31.1 19.6 14.8 0 28.4-8.5 35.4-19.3l-.9-1.2c-1.2.6-3.3 1.2-6.3 1.2-5.7 0-9.1-3.3-9.1-10.3v-66.2h-.3zM1316.6 28l-3.6 64.7h2.7c16.9-47.5 33.9-59.5 49.9-59.5h6v149.9c0 12.7-3.3 13.6-19.6 15.4v3.9h93.4v-3.9c-16-1.8-19.6-2.7-19.6-15.4v-150h6c16 0 32.9 12.1 50.2 59.8h2.7l-3.6-64.7h-164.5V28zm-102.7 85.2l.9-48.1h-.9l-64.4 14.8v.9l13.3 15.1v93.7c0 7.6-3.9 8.2-13.3 9.1v3.3h82.8v-3.3c-12.4-1.2-18.7-2.7-18.7-10.3v-72.5c10.6-6.3 25.4-7 41.1-7h6.4V68.5c-2.7-1.8-7-3.3-12.4-3.3-18.8-.1-30.3 20.2-34.8 48zm-126-44.1c11.8 0 16.9 19.3 16.9 46.2h-36c.3-24.8 6.1-46.2 19.1-46.2zm60.4 86.4l-1.2-.6c-9.1 11.8-22.7 16.3-36.6 16.3-25.1 0-40.8-17.8-42-51.1h79.5v-1.5c0-29.3-18.7-53.8-55.9-53.8-36.6 0-68.6 31.4-68.6 72.5 0 42.9 29.9 67.1 65.6 67.1 30.8.4 54.1-18.7 59.2-48.9zM959.402 190c0 7.6-3.9 8.2-13.3 9.1v3.3h77.398V199c-9.1-.6-13.3-1.5-13.3-9.1v-84.3c0-25.1-13.898-40.8-38.098-40.8-21.2 0-39.6 16.3-46.8 28.1l.9-28.1h-.9l-64.4 14.8v.9l13.3 15.1v93.7c0 7.6-3.9 8.2-13.3 9.1v3.3h77.4v-3.3c-9.1-.6-13-1.5-13-9.1V94.8c5.7-2.1 10.6-3.3 17.5-3.3 12.4 0 16 7 16 16V190h.6zm-164.4 0c0 7.6-3.9 8.2-13.3 9.1v3.3h77.4V199c-9.1-.6-13.3-1.5-13.3-9.1v-84.3c0-25.1-13.9-40.8-38.1-40.8-21.2 0-39.6 16.3-46.8 28.1V8h-.9l-63.2 14.8v.9l13.3 15.1v150.8c0 7.6-3.9 8.2-13.3 9.1v3.3h77.4v-3.3c-9.1-.6-13-1.5-13-9.1V94.8c5.7-2.1 10.6-3.3 17.5-3.3 12.4 0 16 7 16 16V190h.3zm-150.5-120.6c11.2 0 13.9 17.2 13.9 32.3 0 4.2-.3 9.1-1.5 14.8h26.9c5.7-2.4 11.8-9.7 11.8-19.9 0-20.6-21.5-31.4-46.8-31.4-38.7 0-71.3 31.7-71.3 72.5 0 42.9 28.4 67.1 62.9 67.1 30.8 0 52.6-19 57.4-49.3l-.9-.6c-9.1 11.8-20.6 16.3-33.9 16.3-25.1 0-40.8-18.7-40.8-55.9-.7-23.3 8.7-45.9 22.3-45.9zM513.002 190c0 7.6-3.9 8.2-13.3 9.1v3.3h77.4V199c-9.1-.6-13.3-1.5-13.3-9.1v-84.3c0-25.1-13.9-40.8-38.1-40.8-21.2 0-39.6 16.3-46.8 28.1l.9-28.1h-.9l-64.4 14.8v.9l13.3 15.1v93.7c0 7.6-3.9 8.2-13.3 9.1v3.3h77.4v-3.3c-9.1-.6-13.3-1.5-13.3-9.1V94.8c5.7-2.1 10.6-3.3 17.5-3.3 12.4 0 16 7 16 16V190h.9zm-159.6-120.9c11.8 0 16.9 19.3 16.9 46.2h-36c.4-24.8 6.1-46.2 19.1-46.2zm60.5 86.4l-1.2-.6c-9.1 11.8-22.7 16.3-36.6 16.3-25.1 0-40.8-17.8-42-51.1h79.5v-1.5c0-29.3-18.7-53.8-55.9-53.8-36.6 0-68.6 31.4-68.6 72.5 0 42.9 29.9 67.1 65.6 67.1 30.8.4 54-18.7 59.2-48.9zm-173.5-42.3l.9-48.1h-.9l-64.4 14.8v.9l13.3 15.2v93.7c0 7.6-3.9 8.2-13.3 9.1v3.3h82.8v-3.3c-12.4-1.2-18.7-2.7-18.7-10.3V116c10.6-6.3 25.4-7 41.1-7h6.3V68.5c-2.7-1.8-7-3.3-12.4-3.3-18.4-.1-29.9 20.2-34.7 48zm-130 26.9V199c-3.6.9-6.3 1.2-10.9 1.2-28.4 0-42.3-40.8-42.3-87.1 0-50.5 14.8-83.7 44.7-83.7 23.6 0 43.8 25.7 50.5 55.6h2.4l-1.2-44.7c-14.2-9.4-33.2-14.8-53.5-14.8-55.6 0-100 38.4-100 94.3 0 48.7 33.9 84.9 94.9 84.9 23.9 0 48.7-5.4 65.9-16.3V140c0-12.7.9-14.8 17.2-16.6v-3.9h-84.9v3.9c16.3 1.9 17.2 4 17.2 16.7z" _fill="#C02010"/>'
      }
    })
  },
  1544: function (e, t, n) {
    n(11).register({
      badenertagblatt: {
        width: 2069,
        height: 254,
        viewBox: '0 0 2069 254',
        data: '<path pid="0" d="M2037.2 26h-1.9c-13.7 17.1-40.1 35.7-59.4 43.5v3.7h14.5v85.1c0 27.5 15.2 41.2 38.6 41.2 20.1 0 35.7-11.9 45-26l-1.1-1.1c-5.2 3.3-11.5 4.8-16.7 4.8-11.9 0-18.9-5.9-18.9-20.1V73.5h31.2v-9.7h-31.2V26h-.1zm-96.2 0h-1.9c-13.7 17.1-40.1 35.7-59.4 43.5v3.7h14.5v85.1c0 27.5 15.2 41.2 38.6 41.2 20.1 0 35.7-11.9 45-26l-1.1-1.1c-5.2 3.3-11.5 4.8-16.7 4.8-11.9 0-18.9-5.9-18.9-20.1V73.5h31.2v-9.7H1941V26zm-133.4 153.8c-11.9 0-18.6-11.1-18.6-27.9 0-16 5.9-22.7 16.7-27.1l11.9-4.8v56.1c-2.2 2.6-6.3 3.7-10 3.7zm55.8-77.2c0-32.7-21.2-43.8-56.1-43.8-28.6 0-55.4 12.3-55.4 33.8 0 8.9 5.6 15.2 12.3 17.5l29.4-3.7c-1.5-4.8-2.6-13.7-2.6-20.4 0-13.7 4.5-23.4 14.1-23.4 9.7 0 13 8.9 13 22.3v31.2l-35.7 12.3c-22.7 7.4-37.9 17.8-37.9 37.9 0 21.2 16.3 32.7 35.7 32.7 16.7 0 30.1-9.7 37.9-19.3 3.3 12.3 14.5 20.4 29.4 20.4 14.1 0 27.1-8.2 33.8-18.6l-1.1-1.1c-1.5.7-4.1 1.5-7.4 1.5-5.9 0-9.7-3.7-9.7-11.1v-68h.3v-.2zM1724.8 0h-1.1l-59.4 14.5v1.1l14.1 14.1v154.2c0 8.2-4.5 8.9-14.5 9.7v3.3h75v-3.3c-10-.7-14.5-1.9-14.5-9.7V0h.4zm-144.5 195.4c-11.9 0-17.5-11.5-17.5-29.4V88c4.5-3 9.7-4.5 14.9-4.5 18.9 0 31.2 17.8 31.2 52.4 0 33.5-10.1 59.5-28.6 59.5zm-63.9-165.7v153.1c16 13 41.6 16.7 63.9 16.7 40.5 0 75.4-30.1 75.4-78.8 0-37.9-19.3-62-49.4-62-20.8 0-36.4 13.7-43.5 27.1V0h-1.1l-59.4 14.5v1.1l14.1 14.1zm-60.2 175.8c12.3 0 20.1 4.5 20.1 16 0 19.7-21.5 28.2-43.5 28.2-23.8 0-41.6-11.5-41.6-30.1 0-6.7 1.9-11.5 5.2-14.5h59.8v.4zm50.1-6.7c0-23.8-16-34.9-46.4-34.9h-55.7c-5.9 0-8.5-3-8.5-7.4 0-5.2 3.3-10 7.4-13.4 8.9 3.3 18.9 4.8 28.2 4.8 32.7 0 59.8-17.5 59.8-46.8 0-12.3-7.4-22.7-17.8-30.1l26.8 6.3h1.9V59.5l-45.7 3c-7.4-2.6-15.2-3.7-22.7-3.7-32.7 0-59.8 17.8-59.8 46.8 0 18.2 11.9 30.1 27.5 36.4-15.6 6.7-29 17.8-29 35.3 0 14.9 11.1 23 22.3 27.5-13 1.1-28.6 8.2-28.6 21.2 0 18.2 29 27.5 62 27.5 46.8-.1 78.3-22.4 78.3-54.7zm-72.8-53.9c-11.5 0-17.5-19.3-17.5-45.7 0-22.3 3.7-36.8 15.2-36.8s17.5 19.3 17.5 45c0 23-3.7 37.5-15.2 37.5zm-137.4 34.9c-11.9 0-18.6-11.1-18.6-27.9 0-16 5.9-22.7 16.7-27.1l11.9-4.8v56.1c-2.2 2.6-6 3.7-10 3.7zm55.7-77.2c0-32.7-21.2-43.8-56.1-43.8-28.6 0-55.4 12.3-55.4 33.8 0 8.9 5.6 15.2 12.3 17.5l29.4-3.7c-1.5-4.8-2.6-13.7-2.6-20.4 0-13.7 4.5-23.4 14.1-23.4 9.7 0 13 8.9 13 22.3v31.2l-35.7 12.3c-22.7 7.4-37.9 17.8-37.9 37.9 0 21.2 16.3 32.7 35.7 32.7 16.7 0 30.1-9.7 37.9-19.3 3.3 12.3 14.5 20.4 29.4 20.4 14.1 0 27.1-8.2 33.8-18.6l-1.1-1.1c-1.5.7-4.1 1.5-7.4 1.5-5.9 0-9.7-3.7-9.7-11.1v-68h.3v-.2zm-286.1-82.1l-3.7 63.1h2.6c16.3-46.4 32-58.3 49.8-58.3h8.2v151.9c0 13-4.5 14.1-20.8 16v3.7h91v-3.7c-16.7-1.9-20.8-2.6-20.8-16V25.3h8.2c17.8 0 33.4 11.9 49.4 58.3h2.6l-3.7-63.2h-162.8v.1zm-97.5 85l1.1-46.4h-1.1l-60.6 14.5v1.1l14.1 14.1v95.5c0 8.2-4.1 8.9-14.1 9.7v3.3h80.6V194c-13.7-1.1-20.1-2.6-20.1-10.8v-74.7c10.8-7.8 25.3-8.5 41.6-8.5h5.9V62.4c-2.6-1.9-6.7-3.3-12.3-3.3-18 0-29.2 18.9-35.1 46.4zM840.4 63.2c13.4 0 18.9 19.7 18.9 46.4h-40.9c.4-24.9 7.5-46.4 22-46.4zm59.4 88.7l-1.1-.4c-9.3 12.3-23 17.5-37.5 17.5-26 0-42.7-19.3-43.1-54.6h81v-1.5c0-29.3-18.6-53.9-55-53.9s-67.6 32-67.6 73.6c0 42 28.6 67.2 64.3 67.2 31.2-.3 53.8-18.9 59-47.9zm-190.6 32c0 8.2-4.5 8.9-14.5 9.7v3.3h75v-3.3c-10-.7-14.5-1.9-14.5-9.7v-83.6c0-25.6-13.4-41.2-37.5-41.2-21.2 0-39.4 16-47.2 27.9l1.1-27.9h-1.1L610 73.6v1.1l14.1 14.1v95.5c0 8.2-4.1 8.9-14.1 9.7v3.3h75V194c-10-.7-14.5-1.9-14.5-9.7V88.8c6.3-3 13-5.2 20.8-5.2 13 0 17.5 7.4 17.5 18.6v81.7h.4zm-166-120.7c13.4 0 18.9 19.7 18.9 46.4h-40.9c.4-24.9 7.5-46.4 22-46.4zm59.4 88.7l-1.1-.4c-9.3 12.3-23 17.5-37.5 17.5-26 0-42.7-19.3-43.1-54.6h81v-1.5c0-29.3-18.6-53.9-55-53.9s-67.6 32-67.6 73.6c0 42 28.6 67.2 64.3 67.2 30.8-.3 53.4-18.9 59-47.9zM393.1 63.5c11.9 0 18.2 11.1 18.2 29.3v78c-4.5 3-8.9 4.5-14.5 4.5-18.9 0-31.2-18.6-31.2-53.5 0-33 8.9-58.3 27.5-58.3zm18.2 136l61.3-8.9V188c-13-.4-14.9-4.1-14.9-13V0h-1.1l-59.4 14.5v1.1l14.1 14.1v34.6c-4.5-3-12.6-5.2-20.4-5.2-40.9 0-72.8 29-72.8 78 0 37.5 21.5 62.8 51.3 62.8 21.5 0 34.9-13.7 42-26.7l-1.1 26.7h1.1v-.4h-.1zm-169.4-19.3c-11.9 0-18.6-11.1-18.6-27.9 0-16 5.9-22.7 16.7-27.1l11.9-4.8v56.1c-2.2 2.2-6.3 3.7-10 3.7zm55.7-77.3c0-32.7-21.2-43.8-56.1-43.8-28.6 0-55.4 12.3-55.4 33.8 0 8.9 5.6 15.2 12.3 17.5l29.4-3.7c-1.5-4.8-2.6-13.7-2.6-20.4 0-13.7 4.5-23.4 14.1-23.4 9.7 0 13 8.9 13 22.3v31.2l-35.7 12.3c-22.7 7.4-37.9 17.8-37.9 37.9 0 21.2 16.3 32.7 35.7 32.7 16.7 0 30.1-9.7 37.9-19.3 3.3 12.3 14.5 20.4 29.3 20.4 14.1 0 27.1-8.2 33.8-18.6l-1.1-1.9c-1.5.7-4.1 1.5-7.4 1.5-5.9 0-9.7-3.7-9.7-11.1v-67.2h.4v-.2zM81 108.5c26 0 38.6 14.5 38.6 40.9 0 29-12.3 43.1-29.4 43.1h-1.1c-10.8 0-18.2-4.1-18.2-19.3v-64.6H81v-.1zm-4.8-83.2c20.1 0 32.7 12.6 32.7 38.6 0 26.4-11.5 39.4-32.3 39.4h-5.9v-78h5.5zM3 197.3h93.3c41.6 0 71.3-15.6 71.3-47.9 0-28.2-31.6-43.5-65.4-44.6 24.5-2.6 53.5-14.9 53.5-42.7 0-26.7-23-41.2-64.3-41.2H3v3.7c16.7 1.5 18.2 3.7 18.2 16.7v134.9c0 13-1.5 15.2-18.2 17.1v4z" _fill="#003478"/>'
      }
    })
  },
  1551: function (e, t, n) {
    n(11).register({
      'aargauerzeitung--mobile': {
        width: 402,
        height: 201,
        viewBox: '0 0 402 201',
        data: '<path pid="0" d="M130.886 163.305c1.425 4.275 2.28 7.695 2.28 10.545 0 9.69-8.55 12.825-21.66 13.395v12.825h106.875v-12.825c-8.265-1.425-13.965-3.42-16.815-10.545L131.741 0H65.336l9.975 24.795L17.456 176.7c-3.135 7.695-8.835 9.12-16.53 10.545v12.825H63.34v-12.825c-14.535-1.14-22.8-4.275-22.8-13.68 0-2.85.855-6.27 2.28-10.26l8.55-23.37h70.395l9.12 23.37zM85.571 47.31l29.64 76.095H57.356L85.57 47.31zm212.953 138.51l97.185-174.705V0H236.394l-2.85 63.84h12.825c17.1-37.335 21.945-49.59 49.59-49.59h27.645l-96.615 174.705v11.115h164.16l10.545-68.115h-13.68c-25.365 44.46-35.625 53.865-59.565 53.865h-29.925z" _fill="#fff"/>'
      }
    })
  },
  1554: function (e, t, n) {
    n(11).register({
      'solothurnerzeitung--mobile': {
        width: 339,
        height: 207,
        viewBox: '0 0 339 207',
        data: '<path pid="0" d="M72.6 206.351c44.45 0 80.65-19.95 80.65-65.85 0-41.9-26.2-57-63.85-67.55-28.8-8-40.75-15.4-40.75-33.05 0-15.7 11.7-24.8 27.95-24.8 26.5 0 41.6 18.5 48.75 46.15h13.95v-43.6C125.6 7.4 103.65.55 76.6.55 33.55.55 1.35 25.65 1.35 67.5c0 35.05 20.8 54.7 60.4 65.55 30.5 8.25 42.45 16.25 42.45 33.35 0 16.8-12.8 25.1-31.65 25.1-28.8 0-48.15-23.35-55.3-54.15H.5l3.4 49.9c13.95 10.55 39.6 19.1 68.7 19.1zm163-17.1l97.2-174.7V3.45H173.45L170.6 67.3h12.85c17.1-37.35 21.95-49.6 49.6-49.6h27.65l-96.65 174.7v11.1H328.2l10.55-68.1h-13.7c-25.35 44.45-35.65 53.85-59.55 53.85h-29.9z" _fill="#fff"/>'
      }
    })
  },
  1556: function (e, t, n) {
    n(11).register({
      'grenchnertagblatt--mobile': {
        width: 401,
        height: 207,
        viewBox: '0 0 401 207',
        data: '<path pid="0" d="M126.65 189.251c-4.25 1.15-7.4 1.4-12.55 1.4-32.75 0-48.45-41.6-48.45-89.5s14.25-85.2 48.45-85.2c26.2 0 40.75 18.8 48.15 53h15.4l-1.15-51.6C159.95 6.5 138.05.55 111.8.55 50.8.55.1 41.6.1 108.85c0 55.85 35.35 97.45 105.15 97.45 31.05 0 59.55-6.25 79.5-18.8v-47.3c0-14.55 1.15-17.1 19.65-19.1v-12.85H107v12.85c18.5 2 19.65 4.55 19.65 19.1v49.05zm80.6-185.8L203 77.85h12.85c21.95-46.15 30.2-62.15 47.9-62.15h6.75V173c0 14.55-4 15.65-22.5 17.65v12.85h107.45v-12.85c-18.5-2-22.5-3.15-22.5-17.65V15.7h6.85c17.65 0 25.95 15.95 47.9 62.15h12.8l-4.25-74.4h-189z" _fill="#fff"/>'
      }
    })
  },
  1557: function (e, t, n) {
    n(11).register({
      'badenertagblatt--mobile': {
        width: 396,
        height: 201,
        viewBox: '0 0 396 201',
        data: '<path pid="0" d="M91.7 105.45c27.645 0 41.61 13.11 41.61 39.33 0 28.5-13.395 41.04-30.495 41.04h-1.995c-13.68 0-18.24-3.99-18.24-19.38v-60.99h9.12zm-5.415-91.2c21.09 0 35.055 11.115 35.055 36.195 0 25.365-12.255 38.19-34.77 38.19h-3.99V14.25h3.705zm24.795 185.82c54.15 0 82.365-16.53 82.365-54.435 0-31.35-29.07-48.45-67.26-49.59 28.215-2.85 53.58-17.1 53.58-45.885 0-33.345-26.22-50.16-70.68-50.16H.5v12.825c18.525 1.995 19.665 4.56 19.665 19.095v136.23c0 14.535-1.14 17.1-19.665 19.095v12.825h110.58zM202.03 0l-4.275 74.385h12.826c21.945-46.17 30.21-62.13 47.88-62.13h6.84v157.32c0 14.535-3.991 15.675-22.516 17.67v12.825H350.23v-12.825c-18.524-1.995-22.515-3.135-22.515-17.67V12.255h6.841c17.67 0 25.934 15.96 47.879 62.13h12.825L390.986 0H202.03z" _fill="#fff"/>'
      }
    })
  },
  1563: function (e, t, n) {
    'use strict';
    n.r(t),
    n.d(t, 'initEditor', (function () {
      return f
    }));
    var r = n(3),
    o = n.n(r),
    c = n(1503);
    function l(object, e) {
      var t = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(object);
        e && (n = n.filter((function (e) {
          return Object.getOwnPropertyDescriptor(object, e).enumerable
        }))),
        t.push.apply(t, n)
      }
      return t
    }
    function d(e) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {
        };
        i % 2 ? l(Object(source), !0).forEach((function (t) {
          o() (e, t, source[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
        }))
      }
      return e
    }
    function m(e) {
      window.dispatchEvent(new window.CustomEvent('parentPost', {
        detail: e
      }))
    }
    function h(e) {
      return function (e) {
        return e && e.attributes && e.attributes.link && '/' === e.attributes.link[0]
      }(e) || function (e) {
        return e && e.attributes && e.attributes.link && e.insert && 'anmelden' === e.insert.toLowerCase().replace(/\s/g, '')
      }(e) ? d(d({
      }, e), {
      }, {
        attributes: d(d({
        }, e.attributes), {
        }, {
          target: '_self'
        })
      }) : e
    }
    function f(e) {
      !function () {
        if (window.top !== window.self && void 0 === window.Quill) {
          var head = window.document.getElementsByTagName('head') [0],
          script = window.document.createElement('script');
          script.setAttribute('type', 'text/javascript'),
          script.setAttribute('src', 'https://assets.static-nzz.ch/assets/quill-1.3.6.min.js'),
          head.appendChild(script),
          head.insertAdjacentHTML('beforeend', '<link href="https://assets.static-nzz.ch/assets/quill-1.0.5.css" rel="stylesheet">')
        }
      }(),
      window.deferred((function () {
        return function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          },
          t = e.selector,
          r = e.key,
          o = e.toolbar,
          l = e.collection,
          d = e.index,
          f = e.converterConfig,
          v = void 0 === f ? {
          }
           : f;
          if (!document.querySelector(t) || document.querySelector(''.concat(t, '.ql-container'))) return;
          o[0] && o[0].length && (o[0] = o[0].filter((function (e) {
            return 'italic' !== e
          })));
          var w = window.Quill.import('ui/icons');
          w.header[3] = n(1512).svg,
          w.list = n(1513).svg;
          var y = new window.Quill(t, {
            bounds: t,
            formats: [
              'bold',
              'header',
              'link',
              'list'
            ],
            modules: {
              toolbar: o,
              clipboard: {
                matchVisual: !1
              }
            },
            theme: 'bubble'
          });
          y.clipboard.addMatcher(window.Node.ELEMENT_NODE, (function (e, t) {
            var n = [
            ];
            return t.ops.forEach((function (e) {
              e.insert && 'string' == typeof e.insert && n.push({
                insert: e.insert
              })
            })),
            t.ops = n,
            t
          }));
          var x = y.getLength() - 1;
          '\n' === y.getText(x, 2) && y.deleteText(x, 2);
          _(),
          y.on('text-change', (function () {
            var e = new c.QuillDeltaToHtmlConverter(y.getContents().ops.map(h), v);
            _(),
            m({
              value: e.convert(),
              collection: l,
              index: d,
              key: r
            })
          }))
        }(e)
      }), (function () {
        return void 0 !== window.Quill
      }))
    }
    function _() {
      for (var e = document.querySelector('.thunder--editor'), content = document.querySelector('.stickybar__inner'), t = content; t && t.lastElementChild; ) t = t.lastElementChild;
      e && content && t && (t.getBoundingClientRect().bottom > content.getBoundingClientRect().bottom ? e.classList.add('ql-text-long') : e.classList.remove('ql-text-long'))
    }
  },
  1593: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(7),
    o = n.n(r),
    c = n(19),
    l = n(267),
    d = {
      name: 'DefaultLayoutAMP',
      components: {
        Header: function () {
          return n.e(6).then(n.bind(null, 499))
        },
        Footer: function () {
          return n.e(3).then(n.bind(null, 456))
        },
        Breadcrumbs: function () {
          return n.e(5).then(n.bind(null, 1597))
        }
      },
      data: function () {
        return {
          analytics: '\n        {\n          "vars": {\n            "uid": "'.concat('8912', '",\n            "domain": "').concat(this.domain, '",\n            "sections": "').concat([this.rawDigitalDataAmp.primaryCat,
          this.rawDigitalDataAmp.subCat1,
          this.rawDigitalDataAmp.subCat2].filter((function (e) {
            return !!e
          })), '",\n            "authors": "').concat(this.rawDigitalDataAmp.authorName, '",\n            "canonicalPath": "').concat(this.domain, '/').concat(this.rawDigitalDataAmp.articleID, '",\n            "contentType": "accelerated"\n          }\n        }\n      '),
          digitalDataVars: '{"vars": '.concat(JSON.stringify(this.rawDigitalDataAmp.vars), '}'),
          comscore: '\n        {\n          "vars": {\n            "c2": "'.concat(this.$config.comscore ? this.$config.comscore.c2 : '', '"\n          },\n          "extraUrlParams": {\n            "comscorekw": "amp",\n            "mp_brand": "').concat(this.$config.comscore ? this.$config.comscore.mp_brand : '', '",\n            "ns_site": "').concat(this.$config.comscore ? this.$config.comscore.ns_site : '', '"\n          }\n        }\n      '),
          videoCountParam: '&videoCount=%%kalturaCount%%'
        }
      },
      computed: {
        hasBreadcrumbs: function () {
          return this.$store.state.metadata.breadcrumbs,
          !1
        },
        domain: function () {
          return this.$config.referralPlatform.replace('www.', '')
        },
        rawDigitalDataAmp: function () {
          return this.$store.state.rendition.digitalDataAmp || [
          ]
        },
        config: function () {
          return this.$store.state.rendition.config
        },
        publishPath: function () {
          return this.$store.state.rendition.digitalDataAmp && this.$store.state.rendition.digitalDataAmp.vars ? this.$store.state.rendition.digitalDataAmp.vars.publishPath : ''
        },
        isPremiumEnabled: function () {
          return {
            enabled: !0
          }
          && !0
        }
      },
      created: function () {
        c.mutations.setMobileBreakpoint(!0),
        c.mutations.setDelayedScrollUp()
      },
      head: function () {
        var e = this.$store.state.rendition.digitalDataAmp || [
        ],
        t = this.config.authorization.authorize,
        n = this.config.authorization.pingback;
        if (e && e.site && (t = ''.concat(t, '&site=').concat(e.site), n = ''.concat(n, '&site=').concat(e.site)), this.isPremiumEnabled) {
          var r = !1;
          try {
            r = this.$store.state.metadata.premium
          } catch (e) {
          }
          var c = r ? 'premium' : 'default';
          this.$store.state.metadata.language && 'en-US' === this.$store.state.metadata.language.locale && (c = 'premium%2Clanguage%3Den-US'),
          t = ''.concat(t, '&tag=classification%3D').concat(c),
          n = ''.concat(n, '&tag=classification%3D').concat(c)
        }
        var link = [
          {
            hid: 'canonical',
            rel: 'canonical',
            href: this.$store.state.seoData.canonical
          }
        ];
        link.push.apply(link, o() (Object(l.a) (this.$config, this.$store.state).link));
        var script = [
          {
            preserve: 'preserve',
            hid: 'amp-v0',
            type: 'text/javascript',
            async: !0,
            src: 'https://cdn.ampproject.org/v0.js'
          },
          {
            preserve: 'preserve',
            hid: 'amp-iframe',
            type: 'text/javascript',
            async: !0,
            src: 'https://cdn.ampproject.org/v0/amp-iframe-0.1.js',
            'custom-element': 'amp-iframe'
          },
          {
            preserve: 'preserve',
            hid: 'amp-analytics',
            type: 'text/javascript',
            async: !0,
            src: 'https://cdn.ampproject.org/v0/amp-analytics-0.1.js',
            'custom-element': 'amp-analytics'
          },
          {
            preserve: 'preserve',
            hid: 'amp-ad',
            type: 'text/javascript',
            async: !0,
            src: 'https://cdn.ampproject.org/v0/amp-ad-0.1.js',
            'custom-element': 'amp-ad'
          },
          {
            preserve: 'preserve',
            hid: 'amp-font',
            type: 'text/javascript',
            async: !0,
            src: 'https://cdn.ampproject.org/v0/amp-font-0.1.js',
            'custom-element': 'amp-font'
          }
        ];
        return this.config.ampAccessEnabled && script.push({
          hid: 'amp-access',
          preserve: 'preserve',
          type: 'text/javascript',
          async: !0,
          src: 'https://cdn.ampproject.org/v0/amp-access-0.1.js',
          'custom-element': 'amp-access'
        }, {
          preserve: 'preserve',
          hid: 'amp-access',
          id: 'amp-access',
          type: 'application/json',
          innerHTML: '\n            {\n              "authorization": "'.concat(t, '",\n              "pingback": "').concat(n, '",\n              "login": {\n              "signin": "').concat(this.config.authorization.signin, '",\n              "signup": "').concat(this.config.authorization.signup, '"\n              },\n              "authorizationFallbackResponse": {"error": ').concat(this.config.authorization.error, '}\n            }\n          ')
        }),
        {
          link: link,
          script: script
        }
      }
    },
    m = (n(1050), n(1)),
    h = {
      components: {
        Header: function () {
          return n.e(6).then(n.bind(null, 487))
        }
      },
      extends : Object(m.a) (d, (function () {
        var e = this,
        t = e.$createElement,
        n = e._self._c || t;
        return n('div', [
          n('Header', [
            n('template', {
              slot: 'headerBottom'
            })
          ], 2),
          e._v(' '),
          e.hasBreadcrumbs ? n('div', {
            staticClass: 'breadcrumbs__wrapper'
          }, [
            n('Breadcrumbs'),
            e._v(' '),
            n('hr')
          ], 1) : e._e(),
          e._v(' '),
          n('div', {
            attrs: {
              id: 'page'
            }
          }, [
            n('nuxt', {
              key: 'amp'
            })
          ], 1),
          e._v(' '),
          n('amp-analytics', {
            attrs: {
              type: 'chartbeat'
            }
          }, [
            n('script', {
              attrs: {
                type: 'application/json',
                preserve: 'preserve'
              },
              domProps: {
                innerHTML: e._s(e.analytics)
              }
            })
          ]),
          e._v(' '),
          e.config.digitalDataAmpTrackingUrl ? n('amp-analytics', {
            attrs: {
              config: '' + e.config.digitalDataAmpTrackingUrl.replace('publishPath', e.publishPath) + e.videoCountParam
            }
          }, [
            n('script', {
              attrs: {
                type: 'application/json',
                preserve: 'preserve'
              },
              domProps: {
                innerHTML: e._s(e.digitalDataVars)
              }
            })
          ]) : e._e(),
          e._v(' '),
          e.config.digitalDataAmpIngressUrl ? n('amp-analytics', {
            attrs: {
              config: '' + e.config.digitalDataAmpIngressUrl.replace('publishPath', e.publishPath) + e.videoCountParam
            }
          }, [
            n('script', {
              attrs: {
                type: 'application/json',
                preserve: 'preserve'
              },
              domProps: {
                innerHTML: e._s(e.digitalDataVars)
              }
            })
          ]) : e._e(),
          e._v(' '),
          this.$config.comscore ? n('amp-analytics', {
            attrs: {
              config: this.$config.comscore.fpIdUrl
            }
          }, [
            n('script', {
              attrs: {
                type: 'application/json',
                preserve: 'preserve'
              },
              domProps: {
                innerHTML: e._s(e.comscore)
              }
            })
          ]) : e._e(),
          e._v(' '),
          n('Footer')
        ], 1)
      }), [
      ], !1, null, null, null).exports
    },
    f = Object(m.a) (h, undefined, undefined, !1, null, null, null);
    t.default = f.exports
  },
  1600: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(3),
    o = n.n(r),
    c = n(5),
    l = n.n(c),
    d = n(2),
    m = n.n(d),
    h = n(9),
    f = n.n(h),
    _ = n(8),
    v = n(38),
    w = n(69);
    function y(object, e) {
      var t = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(object);
        e && (n = n.filter((function (e) {
          return Object.getOwnPropertyDescriptor(object, e).enumerable
        }))),
        t.push.apply(t, n)
      }
      return t
    }
    function x(e) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {
        };
        i % 2 ? y(Object(source), !0).forEach((function (t) {
          o() (e, t, source[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : y(Object(source)).forEach((function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
        }))
      }
      return e
    }
    var z = {
      name: 'RendererDepartments',
      layout: 'renderer',
      key: function (e) {
        return e.fullPath
      },
      props: {
        getImageUrl: {
          type: Function,
        default:
          w.a
        },
        dateNewArticleFormat: {
          type: Function,
        default:
          v.c
        }
      },
      data: function () {
        return {
        }
      },
      asyncData: function (e) {
        return l() (m.a.mark((function t() {
          var n,
          r,
          o,
          c,
          l;
          return m.a.wrap((function (t) {
            for (; ; ) switch (t.prev = t.next) {
              case 0:
                return n = e.route,
                r = e.$config,
                o = n.params,
                c = r.enricoTechBase,
                l = ''.concat(c.replace('v1', 'v2'), '/').concat(r.product, '/screens/').concat(o.path),
                t.next = 6,
                f() (x(x({
                }, Object(_.a) (r.enricoBasicAuth)), {
                }, {
                  url: l
                })).then((function (e) {
                  var t = e.data,
                  meta = t.meta,
                  data = t.data;
                  return {
                    name: meta.name,
                    logo: meta.logo,
                    articles: data,
                    now: Object(v.a) (new Date)
                  }
                })).catch((function (e) {
                  return {
                    name: 'Seite nicht gefunden',
                    logo: !1,
                    articles: [
                    ],
                    now: Object(v.a) (new Date)
                  }
                }));
              case 6:
                return t.abrupt('return', t.sent);
              case 7:
              case 'end':
                return t.stop()
            }
          }), t)
        }))) ()
      },
      validate: function (e) {
        var t = e.params;
        return !!/[A-Z]{1}-[\d]{3}-(L0|L1)/.test(t.path)
      },
      mounted: function () {
        document.documentElement.style.cursor = 'none'
      },
      methods: {
        getCroppedImageUrl: function (image) {
          var e;
          return Array.isArray(image.crops) && (e = image.crops.filter((function (e) {
            return '16:9' === e.name
          })) [0]),
          e ? e.url : ''
        }
      }
    },
    k = (n(1045), n(1)),
    component = Object(k.a) (z, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('section', {
        staticClass: 'body'
      }, [
        n('div', {
          staticClass: 'logo__wrapper'
        }, [
          e.logo ? n('div', {
            staticClass: 'logo'
          }, [
            n('svgicon', {
              staticClass: 'header__logo--icon',
              attrs: {
                height: '99',
                width: '655',
                name: 'nzz',
                color: '#000000'
              }
            })
          ], 1) : e._e()
        ]),
        e._v(' '),
        n('div', {
          staticClass: 'department__wrapper'
        }, [
          n('h1', {
            staticClass: 'department'
          }, [
            e._v('\n      ' + e._s(e.name) + '\n    ')
          ])
        ]),
        e._v(' '),
        n('div', {
          staticClass: 'articles'
        }, [
          e._l(e.articles, (function (article, t) {
            return [n('div', {
              key: t,
              staticClass: 'teaser'
            }, [
              0 === t ? n('figure', {
                staticClass: 'figure'
              }, [
                n('img', {
                  staticClass: 'image',
                  attrs: {
                    src: e.getImageUrl({
                      url: e.getCroppedImageUrl(article.metadata.teaserImage),
                      scaleWidth: 975,
                      scaleHeight: 548
                    })
                  }
                })
              ]) : e._e(),
              e._v(' '),
              n('div', {
                staticClass: 'teaser__content'
              }, [
                n('div', {
                  staticClass: 'time'
                }, [
                  e._v('\n            ' + e._s(e.dateNewArticleFormat(article.metadata.publicationDate)) + '\n          ')
                ]),
                e._v(' '),
                n('h2', {
                  staticClass: 'title'
                }, [
                  e._v('\n            ' + e._s(article.metadata.title) + '\n          ')
                ]),
                e._v(' '),
                0 === t ? n('div', {
                  staticClass: 'lead'
                }, [
                  e._v('\n            ' + e._s(article.metadata.leadText) + '\n          ')
                ]) : e._e()
              ])
            ])]
          }))
        ], 2),
        e._v(' '),
        n('div', {
          staticClass: 'timestamp'
        }, [
          e._v('\n    ' + e._s(e.now) + '\n  ')
        ])
      ])
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  1601: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'ContainerListStage',
      components: {
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
        articles: function () {
          return this.data && this.data.content && this.data.content.list && Array.isArray(this.data.content.list.articles) ? this.data.content.list.articles : this.data && Array.isArray(this.data.articles) ? this.data.articles : [
          ]
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return e.data || e.data.containers || e.data.content ? n('section', {
        staticClass: 'pageelement pageelement--list-stage',
        class : {
          'pageelement--highlight': e.data.styles && e.data.styles.highlight
        },
        attrs: {
          'data-source-element': 'Container-List-Stage',
          'data-source-element-widget': 'Widget-List-Stage',
          'data-nzz-container': ''
        }
      }, [
        n('div', {
          staticClass: 'pageelement__inner'
        }, [
          e._l(e.articles.slice(0, 3), (function (article, e) {
            return n('SimpleArticle', {
              key: e,
              attrs: {
                data: {
                  articles: [
                    article
                  ]
                },
                size: 0 === e ? '3of3' : 1 === e ? '2of3' : '1of3'
              }
            })
          })),
          e._v(' '),
          n('div', {
            staticClass: 'pageelement__bricks-row'
          }, [
            n('SimpleArticle', {
              attrs: {
                data: {
                  articles: e.articles.slice(3)
                },
                size: '1of3'
              }
            })
          ], 1)
        ], 2)
      ]) : e._e()
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  167: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(336);
    n.e(5).then(n.t.bind(null, 1580, 7)),
    n.e(5).then(n.t.bind(null, 1581, 7));
    var o = {
      name: 'WidgetMunicipalityHeader',
      components: {
        RegionPagesButton: r.default
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
      data: function () {
        return {
          content: this.data.content,
          image: this.data.content.image
        }
      },
      computed: {
        imageLink: function () {
          return this.$store.state.isrendition.indexOf('webview') > - 1 ? 'window.nzzFirebase.pages.leserBildUpload' : '/leserbild'
        },
        contributionLink: function () {
          return this.$store.state.isrendition.indexOf('webview') > - 1 ? 'window.nzzFirebase.pages.leserBeitrag || window.nzzFirebase.pages.leserReporter' : '/leserbeitrag-einreichen'
        },
        imageTag: function () {
          return this.isAmp ? 'amp-img' : 'img'
        },
        imageType: function () {
          return this.$store.state.isrendition || this.$route.fullPath.indexOf('/fragments/render') > - 1 ? 'fragment' : 'first'
        },
        headingType: function () {
          return 'h1'
        }
      }
    },
    c = (n(1287), n(1)),
    component = Object(c.a) (o, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return e.data && e.data.content ? n('div', {
        staticClass: 'municipality-header'
      }, [
        n('figure', {
          staticClass: 'municipality-header__poster'
        }, [
          n('div', {
            directives: [
              {
                name: 'srcset',
                rawName: 'v-srcset',
                value: {
                  teaserImage: e.image,
                  parent: this.$parent,
                  layout: 'page',
                  imageType: e.imageType
                },
                expression: '{\n        teaserImage: image,\n        parent: this.$parent,\n        layout: \'page\',\n        imageType: imageType\n      }'
              }
            ],
            staticClass: 'municipality-header__placeholder image-placeholder'
          }, [
            e.content && e.content.image && e.image ? n(e.imageTag, {
              tag: 'component',
              staticClass: 'municipality-header__image image-placeholder__image',
              attrs: {
                alt: e.content.text
              }
            }) : e._e()
          ], 1)
        ]),
        e._v(' '),
        n('div', {
          staticClass: 'municipality-header__content'
        }, [
          n('div', {
            staticClass: 'municipality-header__content--left'
          }, [
            n('RegionPagesButton', {
              attrs: {
                'redirect-when-selected': !1,
                origin: 'page'
              }
            }, [
              e._t('button', [
                n('button', {
                  staticClass: 'municipality-header__button--dropdown button'
                }, [
                  e.content.text ? n(e.headingType, {
                    tag: 'component',
                    staticClass: 'button__label',
                    domProps: {
                      innerHTML: e._s(e.content.text)
                    }
                  }) : e._e(),
                  e._v(' \n            '),
                  n('span', {
                    staticClass: 'button__icon'
                  }, [
                    n('svgicon', {
                      staticClass: 'icon__chevron icon__chevron--down',
                      attrs: {
                        height: '12',
                        width: '12',
                        name: 'nzz_little_chevron',
                        color: 'r-#000000'
                      }
                    })
                  ], 1)
                ], 1)
              ])
            ], 2)
          ], 1),
          e._v(' '),
          n('div', {
            staticClass: 'municipality-header__content--right'
          }, [
            n('a', {
              staticClass: 'municipality-header__link button',
              attrs: {
                href: e.contributionLink
              }
            }, [
              n('svgicon', {
                attrs: {
                  name: 'ico_edit',
                  color: 'r-#ffffff',
                  height: '24',
                  width: '24'
                }
              }),
              e._v(' '),
              n('span', [
                e._v('Leserbeitrag')
              ])
            ], 1),
            e._v(' '),
            n('a', {
              staticClass: 'municipality-header__link button',
              attrs: {
                href: e.imageLink
              }
            }, [
              n('svgicon', {
                attrs: {
                  name: 'ico_camera',
                  color: 'r-#ffffff',
                  height: '24',
                  width: '24'
                }
              }),
              e._v(' '),
              n('span', [
                e._v('Leserbild')
              ])
            ], 1)
          ])
        ])
      ]) : e._e()
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  169: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      components: {
        PersonalizedList: function () {
          return n.e(2).then(n.bind(null, 473))
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
        widgetClass: {
          type: String,
        default:
          function () {
            return 'widget--list-extended'
          }
        },
        pagetype: {
          type: String,
        default:
          ''
        },
        componenttype: {
          type: String,
        default:
          ''
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('PersonalizedList', {
        attrs: {
          data: e.data,
          pagetype: e.pagetype,
          componenttype: e.componenttype,
          'widget-class': e.widgetClass
        }
      }, [
        n('template', {
          slot: 'messageError'
        }, [
          e._v('\n    Unsere Server stehen momentan leider nicht zur Verfügung. Wir arbeiten daran.\n    Bitte versuchen Sie es später wieder.\n  ')
        ]),
        e._v(' '),
        n('template', {
          slot: 'messageBookmarksEmpty'
        }, [
          e._v('\n    Zurzeit befinden sich keine Artikel auf Ihrer Merkliste. Benutzen Sie das Lesezeichen-Symbol '),
          n('svgicon', {
            staticStyle: {
              display: 'inline-block',
              'vertical-align': 'middle',
              margin: '-15px'
            },
            attrs: {
              color: 'r-#000000',
              name: 'ico_bookmark_large_48',
              height: '48',
              width: '48'
            }
          }),
          e._v(', um Artikel zu speichern.\n  ')
        ], 1),
        e._v(' '),
        n('template', {
          slot: 'messageReadEmpty'
        }, [
          e._v('\n    Sie haben noch keine Artikel gelesen.\n  ')
        ]),
        e._v(' '),
        n('template', {
          slot: 'messageRcmdEmpty'
        }, [
          e._v('\n    Sie haben keine Leseempfehlungen.\n  ')
        ])
      ], 2)
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  171: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'WidgetTopicFeatured',
      components: {
        SimpleArticle: n(51).default
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
        articles: function () {
          return this.data.content && this.data.content['nzz-feed'] && this.data.content['nzz-feed'].articles ? this.data.content['nzz-feed'].articles : [
          ]
        },
        widgetData: function () {
          var e = 'widget--2of3',
          t = '2of3';
          return 2 === this.articles.length ? (e = 'widget--1of2', t = '1of2') : this.articles.length > 2 && (e = 'widget--1of3', t = '1of3'),
          {
            widgetClass: e,
            teaserSize: t
          }
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return e.articles.length ? n('div', {
        staticClass: 'widget--topic-featured widget--article widget__row',
        attrs: {
          'data-source-element-widget': 'Widget-Topics-featured'
        }
      }, e._l(e.articles, (function (article, t) {
        return n('div', {
          key: 'widget-' + t + '-' + e.$store.state.isrendition,
          class : e.widgetData.widgetClass
        }, [
          n('SimpleArticle', {
            attrs: {
              data: Object.assign({
              }, e.data, {
                articles: [
                  article
                ]
              }),
              size: e.widgetData.teaserSize,
              'teaser-title-tag': 'h3',
              'referrer-type': 'topicTeaser'
            }
          })
        ], 1)
      })), 0) : e._e()
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  175: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'ArticleAdvertisement',
      mixins: [
        n(64).a
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
      }
    },
    o = n(1),
    component = Object(o.a) (r, (function () {
      var e = this.$createElement;
      return (this._self._c || e) ('div')
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  182: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(3),
    o = n.n(r),
    c = n(64),
    l = n(19),
    d = n(14),
    m = n.n(d);
    function h(object, e) {
      var t = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(object);
        e && (n = n.filter((function (e) {
          return Object.getOwnPropertyDescriptor(object, e).enumerable
        }))),
        t.push.apply(t, n)
      }
      return t
    }
    function f(e) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {
        };
        i % 2 ? h(Object(source), !0).forEach((function (t) {
          o() (e, t, source[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : h(Object(source)).forEach((function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
        }))
      }
      return e
    }
    var _ = {
      name: 'BTAMoreAndNewest',
      components: {
        SimpleArticle: function () {
          return Promise.resolve().then(n.bind(null, 51))
        },
        Tags: function () {
          return n.e(5).then(n.bind(null, 337))
        }
      },
      mixins: [
        c.a
      ],
      props: {
        articleId: {
          type: String,
        default:
          ''
        },
        articleTags: {
          type: Array,
        default:
          function () {
            return []
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
          teaserSize: 'articlelist-bta'
        }
      },
      computed: {
        btaTopic: function () {
          return this.isNewestArticle ? 'bta-newest-article' : this.tagName
        },
        isNewestArticle: function () {
          var e,
          t;
          return !(null !== (e = this.$store.state.BTAitems.moreToSubject) && void 0 !== e && null !== (t = e.data) && void 0 !== t && t.length) > 0
        },
        isDE: function () {
          return this.$store.getters.isDE
        },
        containerTitle: function () {
          return this.isNewestArticle ? 'Neueste Artikel' : 'Mehr zum Thema '.concat(this.tagName)
        },
        linkAnchor: function () {
          return this.isNewestArticle ? 'Alle neueste Artikel' : 'Alle Artikel zum Thema'
        },
        linkURL: function () {
          return this.isNewestArticle ? '/neueste-artikel' : '/themen/'.concat(this.tagId)
        },
        isMobileBreakpoint: function () {
          return l.store.isMobileBreakpoint || this.$store.state.isrendition
        },
        relatedTags: function () {
          var e;
          return (null === (e = this.articleTags) || void 0 === e ? void 0 : e.length) > 0 ? this.articleTags.slice(1) : [
          ]
        },
        loaded: function () {
          var e = this,
          t = this.isExtended ? 5 : 3;
          if (this.$store.state.BTAitems.moreToSubject) return this.$store.state.BTAitems.moreToSubject.data.slice(0, t);
          var n = [
          ];
          return (n = this.isDE ? this.$store.state.BTAitems.newestArticles.de : this.$store.state.BTAitems.newestArticles.ch) ? n.filter((function (article) {
            return article.metadata.nzzId !== e.articleId
          })).slice(0, t) : [
          ]
        },
        tagName: function () {
          var e,
          t;
          return (null === (e = this.$store.state.BTAitems.moreToSubject) || void 0 === e || null === (t = e.meta) || void 0 === t ? void 0 : t.tagName) || ''
        },
        tagId: function () {
          var e,
          t;
          return (null === (e = this.$store.state.BTAitems.moreToSubject) || void 0 === e || null === (t = e.meta) || void 0 === t ? void 0 : t.id) || ''
        },
        setHeaderType: function () {
          return this.isNewestArticle ? 'h3' : 'h2'
        },
        throttledIsVisible: function () {
          return m() (this.isVisibleInViewport, 1000)
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
        var e = this;
        this.addTracking(),
        setTimeout((function () {
          e.throttledIsVisible()
        })),
        window.addEventListener('scroll', this.throttledIsVisible)
      },
      destroyed: function () {
        window.removeEventListener('scroll', this.throttledIsVisible)
      },
      methods: {
        addTracking: function () {
          var e = this;
          window.deferred((function () {
            window.dispatchEvent(new window.CustomEvent('tms:component:create', {
              detail: {
                componentID: e.isNewestArticle ? 'bta-newest-article-'.concat(e.articleId) : 'bta-same-topic-'.concat(e.articleId),
                componentName: e.isNewestArticle ? 'bta newest article' : 'bta same topic',
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
              componentName: this.isNewestArticle ? 'bta newest article' : 'bta same topic'
            },
            category: {
              primaryCategory: 'ui',
              subCategory1: 'bta container',
              subCategory2: this.isNewestArticle ? 'newest article' : 'same topic',
              subCategory3: this.isExtended ? 'extended' : 'standard'
            }
          }
        },
        isVisibleInViewport: function () {
          var e = this;
          this.$el instanceof HTMLElement && this.$el.getBoundingClientRect().top < window.innerHeight && (this.$el.classList.contains('hidden') || (window.deferred((function () {
            window.dispatchEvent(new window.CustomEvent('tms:event:push', {
              detail: f({
              }, e.eventData())
            }))
          })), window.removeEventListener('scroll', this.throttledIsVisible)))
        }
      }
    },
    v = n(1),
    component = Object(v.a) (_, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('section', {
        staticClass: 'pageelement bta',
        class : [
          e.isNewestArticle ? 'pageelement--newestarticle' : 'pageelement--moretosubject'
        ],
        attrs: {
          'data-nzz-container': '',
          'data-source-element': e.isNewestArticle ? 'Container-Newest-Articles' : 'Container-BTA-same-topic'
        }
      }, [
        n('div', {
          staticClass: 'container--headline-bta'
        }, [
          n('h3', {
            staticClass: 'container__header-title--bta container__header-title--bta--hide-mobile',
            domProps: {
              innerHTML: e._s(e.containerTitle)
            }
          }),
          e._v(' '),
          n('nuxt-link', {
            staticClass: 'bta-link',
            attrs: {
              to: e.linkURL,
              'data-nzz-referrer': e.isNewestArticle ? 'btaLinkNewest' : 'btaLinkTopic'
            }
          }, [
            n('h3', {
              staticClass: 'container__header-title--bta container__header-title--bta--show-mobile',
              domProps: {
                innerHTML: e._s(e.containerTitle)
              }
            }),
            e._v(' '),
            n('span', {
              staticClass: 'container__header-title--bta--hide-mobile',
              domProps: {
                innerHTML: e._s(e.linkAnchor)
              }
            }),
            e._v(' '),
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
        e._v(' '),
        e.isExtended ? [
          n('div', {
            staticClass: 'widget__row widget__row--bta-newest',
            class : {
              'widget__row--noBorder': e.isNewestArticle
            }
          }, e._l(e.loaded.slice(0, 2), (function (t, r) {
            return n('div', {
              key: 'bta-widget-' + r + '-' + e.$store.state.isrendition,
              staticClass: 'widget--1of2 widget--article',
              attrs: {
                'data-source-element-widget': e.btaTopic
              }
            }, [
              n('SimpleArticle', {
                attrs: {
                  data: {
                    articles: [
                      t
                    ]
                  },
                  size: 0 === r ? '1of2' : 'companion-feed-bta',
                  'referrer-type': 'btaArticleTeaser',
                  'add-datetime-attr': !1,
                  'teaser-title-tag': e.setHeaderType
                }
              })
            ], 1)
          })), 0),
          e._v(' '),
          n('div', {
            staticClass: 'widget__row widget__row--bta-newest',
            class : {
              'widget__row--noBorder': e.isNewestArticle
            }
          }, e._l(e.loaded.slice(2), (function (t, r) {
            return n('div', {
              key: 'bta-widget-' + r + '-' + e.$store.state.isrendition,
              staticClass: 'widget--1of3 widget--article',
              attrs: {
                'data-source-element-widget': e.btaTopic
              }
            }, [
              n('SimpleArticle', {
                attrs: {
                  data: {
                    articles: [
                      t
                    ]
                  },
                  size: 'companion-feed-bta',
                  'referrer-type': 'btaArticleTeaser',
                  'add-datetime-attr': !1,
                  'teaser-title-tag': e.setHeaderType
                }
              })
            ], 1)
          })), 0)
        ] : [
          n('div', {
            staticClass: 'widget__row widget__row--bta-newest',
            class : {
              'widget__row--noBorder': e.isNewestArticle
            }
          }, [
            n('div', {
              staticClass: 'widget--1of2 widget--article',
              attrs: {
                'data-source-element-widget': e.btaTopic
              }
            }, [
              n('SimpleArticle', {
                attrs: {
                  data: {
                    articles: e.loaded.slice(0, 1)
                  },
                  size: '1of2',
                  'referrer-type': 'btaArticleTeaser',
                  'add-datetime-attr': !1,
                  'teaser-title-tag': e.setHeaderType
                }
              })
            ], 1),
            e._v(' '),
            e.loaded.length > 1 ? n('div', {
              staticClass: 'widget--1of2 widget--article',
              attrs: {
                'data-source-element-widget': e.btaTopic
              }
            }, e._l(e.loaded.slice(1), (function (t, r) {
              return n('SimpleArticle', {
                key: 'bta-widget-' + r + '-' + e.$store.state.isrendition,
                attrs: {
                  data: {
                    articles: [
                      t
                    ]
                  },
                  size: e.teaserSize,
                  'referrer-type': 'btaArticleTeaser',
                  'add-datetime-attr': !1,
                  'teaser-title-tag': e.setHeaderType
                }
              })
            })), 1) : e._e()
          ])
        ],
        e._v(' '),
        !e.isNewestArticle && e.relatedTags.length > 0 ? n('div', {
          staticClass: 'widget__row--bta-tags widget__row--bta-newest'
        }, [
          n('span', {
            staticClass: 'bta-tags-title'
          }, [
            e._v('\n      Weitere Themen\n    ')
          ]),
          e._v(' '),
          n('Tags', {
            attrs: {
              tags: e.relatedTags
            }
          })
        ], 1) : e._e()
      ], 2)
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  211: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(1006),
    o = {
      props: {
        data: {
          type: Object,
        default:
          function () {
            return []
          }
        },
        configWeatherPage: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        }
      },
      computed: {
        europaWeatherText: function () {
          return this._get(this.data, 'weather.europe.content.text.content[0].text', '')
        },
        title: function () {
          try {
            var e = this.data.weather.europe,
            t = e.lastUpdateFormated,
            n = void 0 === t ? '' : t,
            link = e.link;
            return 'Ausgegeben von <a href='.concat(link, '>MeteoNews AG</a> ').concat(n)
          } catch (e) {
            return ''
          }
        },
        sateliteImages: function () {
          return this._get(this.data, 'weather.europe.content.satellite.contentLayer', void 0)
        },
        isobarImage: function () {
          return this._get(this.data, 'weather.europe.content.isobar.contentLayer[0].image', void 0)
        },
        rainradar: function () {
          var e = this._get(this.data, 'weather.europe.content.rainradar.contentLayer', void 0);
          return e && e.length > 0 ? e.slice(0, 10) : e
        }
      },
      head: function () {
        var script = r.b.toString(),
        e = script.match(/function\s([a-zA-Z]*)\(/) [1];
        return {
          script: [
            {
              hid: 'weather-europa',
              preserve: 'preserve',
              type: 'text/javascript',
              innerHTML: ''.concat(r.a.toString()).concat(script, ';').concat(e, '();')
            }
          ]
        }
      },
      methods: {
        getWeatherImage: function (image) {
          return ''.concat(this.configWeatherPage.weatherImageUrl, '/').concat(image)
        }
      }
    },
    c = (n(755), n(782), n(1)),
    component = Object(c.a) (o, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('section', {
        key: e.configWeatherPage.weatherPage.path + '-content',
        staticClass: 'twocolumn-page--container',
        attrs: {
          'data-nzz-article': ''
        }
      }, [
        n('p', {
          staticClass: 'weatherelement weatherelement--title',
          domProps: {
            innerHTML: e._s(e.title)
          }
        }),
        e._v(' '),
        e.sateliteImages ? n('div', {
          staticClass: 'weathermap weathermap--europe'
        }, [
          n('figure', {
            staticClass: 'weather-image image--content weathermap__map'
          }, [
            e._m(0)
          ]),
          e._v(' '),
          e._l(e.sateliteImages, (function (image, e) {
            return n('figure', {
              key: e,
              staticClass: 'weather-image image--content weathermap__frame'
            }, [
              n('div', {
                staticClass: 'weather-image__placeholder'
              }, [
                n('img', {
                  staticClass: 'weather-image__src poster__image--loaded',
                  class : {
                    'weathermap__frame--active': 0 === e
                  },
                  attrs: {
                    src: image.image
                  }
                })
              ])
            ])
          }))
        ], 2) : e._e(),
        e._v(' '),
        e._m(1),
        e._v(' '),
        n('p', {
          staticClass: 'weatherelement weatherelement--text',
          domProps: {
            innerHTML: e._s(e.europaWeatherText)
          }
        }),
        e._v(' '),
        e.isobarImage ? n('h2', {
          staticClass: 'weatherelement weatherelement--subtitle'
        }, [
          n('span', {
            staticClass: 'subtitle__text'
          }, [
            e._v('Isobarenkarte')
          ])
        ]) : e._e(),
        e._v(' '),
        e.isobarImage ? n('div', {
          staticClass: 'weathermap weathermap--europe'
        }, [
          n('figure', {
            staticClass: 'weather-image image--content weathermap__map'
          }, [
            n('div', {
              staticClass: 'poster__placeholder',
              staticStyle: {
                background: 'transparent'
              }
            }, [
              n('img', {
                staticClass: 'image__src poster__image--loaded',
                attrs: {
                  src: e.isobarImage
                }
              })
            ])
          ]),
          e._v(' '),
          n('figure', {
            staticClass: 'weather-image image--content weathermap__map'
          }, [
            n('img', {
              staticClass: 'weathermap--isobar poster__image--loaded',
              staticStyle: {
                width: '80%'
              },
              attrs: {
                src: e.getWeatherImage('nzz_isobarenkarte.svg')
              }
            })
          ])
        ]) : e._e(),
        e._v(' '),
        e.rainradar ? n('h2', {
          staticClass: 'weatherelement weatherelement--subtitle'
        }, [
          n('span', {
            staticClass: 'subtitle__text'
          }, [
            e._v('Niederschlagsbild Europa')
          ])
        ]) : e._e(),
        e._v(' '),
        e.rainradar ? n('div', {
          staticClass: 'weathermap weathermap--europe-rainradar'
        }, [
          n('figure', {
            staticClass: 'weather-image image--content weathermap__map'
          }, [
            n('div', {
              staticClass: 'poster__placeholder',
              staticStyle: {
                background: 'transparent'
              }
            }, [
              n('img', {
                staticClass: 'image__src poster__image--loaded',
                attrs: {
                  src: e.getWeatherImage('meteonews_eur_map.png')
                }
              })
            ])
          ]),
          e._v(' '),
          n('figure', {
            staticClass: 'weather-image image--content weathermap__border'
          }, [
            n('div', {
              staticClass: 'figure__placeholder',
              staticStyle: {
                background: 'transparent'
              }
            }, [
              n('img', {
                staticClass: 'image__src poster__image--loaded',
                attrs: {
                  src: e.getWeatherImage('meteonews_eur_border.png')
                }
              })
            ])
          ]),
          e._v(' '),
          e._l(e.rainradar, (function (image, t) {
            return n('figure', {
              key: t,
              staticClass: 'weather-image image--content weathermap__frame',
              class : {
                'weathermap__frame--active': 0 === t
              }
            }, [
              n('div', {
                staticClass: 'image__placeholder'
              }, [
                n('img', {
                  staticClass: 'image__src poster__image--loaded',
                  attrs: {
                    src: image.image
                  }
                })
              ]),
              e._v(' '),
              n('div', {
                staticClass: 'figure__caption'
              }, [
                n('span', {
                  staticClass: 'weathermap__time'
                }, [
                  e._v(e._s(image.formatedDatetime))
                ]),
                e._v(' '),
                n('span', {
                  staticClass: 'weathermap__source'
                }, [
                  e._v('Quelle: Meteonews')
                ])
              ])
            ])
          }))
        ], 2) : e._e()
      ])
    }), [
      function () {
        var e = this.$createElement;
        return (this._self._c || e) ('div', {
          staticClass: 'poster__placeholder',
          staticStyle: {
            'padding-bottom': '71%',
            background: 'transparent'
          }
        })
      },
      function () {
        var e = this,
        t = e.$createElement,
        n = e._self._c || t;
        return n('h2', {
          staticClass: 'weatherelement weatherelement--subtitle'
        }, [
          n('span', {
            staticClass: 'subtitle__text'
          }, [
            e._v('Europawetter')
          ])
        ])
      }
    ], !1, null, null, null);
    t.default = component.exports
  },
  212: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      props: {
        data: {
          type: Object,
        default:
          function () {
            return []
          }
        },
        configWeatherPage: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        }
      },
      computed: {
        swissWeatherText: function () {
          return this._get(this.data, 'weather.midterm.content', '')
        },
        title: function () {
          try {
            var e = this.data.weather.midterm,
            t = e.lastUpdateFormated,
            n = void 0 === t ? '' : t,
            link = e.link;
            return 'Ausgegeben von <a href='.concat(link, '>MeteoNews AG</a> ').concat(n)
          } catch (e) {
            return ''
          }
        }
      },
      methods: {
        getRegionTitle: function (e) {
          return {
            nord: 'Nord- und Ostschweiz',
            west: 'Westschweiz',
            south: 'Südschweiz'
          }
          [
            e
          ]
        },
        getWeatherImage: function (e) {
          return ''.concat(this.configWeatherPage.weatherImageUrl, '/weather').concat(e, '.svg')
        }
      }
    },
    o = (n(755), n(1009), n(1)),
    component = Object(o.a) (r, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('section', {
        key: e.configWeatherPage.weatherPage.path + '-content',
        staticClass: 'twocolumn-page--container',
        attrs: {
          'data-nzz-article': ''
        }
      }, [
        n('p', {
          staticClass: 'weatherelement weatherelement--title',
          domProps: {
            innerHTML: e._s(e.title)
          }
        }),
        e._v(' '),
        e._l(e.swissWeatherText, (function (t, r) {
          return n('div', {
            key: r,
            staticClass: 'weatherlist__section'
          }, [
            n('h2', {
              staticClass: 'weatherelement weatherelement--subtitle weatherelement--subtitle-big weatherlist__subtitle'
            }, [
              n('span', {
                staticClass: 'subtitle__text'
              }, [
                e._v(e._s(e.getRegionTitle(r)))
              ])
            ]),
            e._v(' '),
            n('ul', {
              staticClass: 'weatherlist'
            }, e._l(t.content, (function (t, r) {
              return n('li', {
                key: r,
                staticClass: 'weatherlist__item'
              }, [
                n('div', {
                  staticClass: 'weatherlist__forecast'
                }, [
                  n('span', {
                    staticClass: 'weatherlist__name'
                  }, [
                    e._v('\n            ' + e._s(t.day) + '\n          ')
                  ]),
                  e._v(' '),
                  n('img', {
                    staticClass: 'weatherlist__icon',
                    attrs: {
                      src: e.getWeatherImage(t.piktogrammNo)
                    }
                  }),
                  e._v(' '),
                  n('span', {
                    staticClass: 'weatherlist__text'
                  }, [
                    e._v(e._s(t.txt))
                  ])
                ]),
                e._v(' '),
                n('div', {
                  staticClass: 'weatherlist__temp'
                }, [
                  n('span', {
                    staticClass: 'weatherlist__temp--max'
                  }, [
                    e._v(e._s(t.tempMax + '°'))
                  ]),
                  e._v(' '),
                  n('span', {
                    staticClass: 'weatherlist__temp--min'
                  }, [
                    e._v(e._s(t.tempMin + '°'))
                  ])
                ])
              ])
            })), 0)
          ])
        }))
      ], 2)
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  213: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      props: {
        data: {
          type: Object,
        default:
          function () {
            return []
          }
        },
        configWeatherPage: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        }
      },
      computed: {
        text: function () {
          return this._get(this.data, 'weather.pollenflug.content.text', '')
        },
        title: function () {
          try {
            var e = this.data.weather.pollenflug,
            t = e.lastUpdateFormated,
            n = void 0 === t ? '' : t,
            link = e.link;
            return 'Ausgegeben von <a href='.concat(link, '>MeteoNews AG</a> ').concat(n)
          } catch (e) {
            return ''
          }
        }
      }
    },
    o = (n(755), n(1433), n(1)),
    component = Object(o.a) (r, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('section', {
        key: e.configWeatherPage.weatherPage.path + '-content',
        staticClass: 'twocolumn-page--container',
        attrs: {
          'data-nzz-article': ''
        }
      }, [
        n('p', {
          staticClass: 'weatherelement weatherelement weatherelement--title',
          domProps: {
            innerHTML: e._s(e.title)
          }
        }),
        e._v(' '),
        n('p', {
          staticClass: 'weatherelement weatherelement weatherelement--text',
          domProps: {
            innerHTML: e._s(e.text)
          }
        })
      ])
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  214: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(1006),
    o = {
      props: {
        data: {
          type: Object,
        default:
          function () {
            return []
          }
        },
        configWeatherPage: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        }
      },
      computed: {
        title: function () {
          return this._get(this.data, 'weather.rainradar.info', '')
        },
        rainradar: function () {
          return this._get(this.data, 'weather.rainradar.content.contentLayer', void 0)
        }
      },
      head: function () {
        var script = r.b.toString(),
        e = script.match(/function\s([a-zA-Z]*)\(/) [1];
        return {
          script: [
            {
              hid: 'weather-europa',
              preserve: 'preserve',
              type: 'text/javascript',
              innerHTML: ''.concat(r.a.toString()).concat(script, ';').concat(e, '();')
            }
          ]
        }
      },
      methods: {
        getWeatherImage: function (image) {
          return ''.concat(this.configWeatherPage.weatherImageUrl, '/').concat(image)
        }
      }
    },
    c = (n(755), n(782), n(1)),
    component = Object(c.a) (o, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('section', {
        key: e.configWeatherPage.weatherPage.path + '-content',
        staticClass: 'twocolumn-page--container',
        attrs: {
          'data-nzz-article': ''
        }
      }, [
        n('p', {
          staticClass: 'weatherelement weatherelement--title',
          domProps: {
            innerHTML: e._s(e.title)
          }
        }),
        e._v(' '),
        e.rainradar ? n('div', {
          staticClass: 'weathermap weather--rainradar'
        }, [
          n('figure', {
            staticClass: 'weather-image image--content weathermap__map'
          }, [
            e._m(0)
          ]),
          e._v(' '),
          n('figure', {
            staticClass: 'weather-image image--content weathermap__border'
          }, [
            e._m(1)
          ]),
          e._v(' '),
          e._l(e.rainradar, (function (image, t) {
            return n('figure', {
              key: t,
              staticClass: 'weather-image image--content weathermap__frame',
              class : {
                'weathermap__frame--active': 0 === t
              }
            }, [
              n('div', {
                staticClass: 'weather-image__placeholder'
              }, [
                n('img', {
                  staticClass: 'weather-image__src poster__image--loaded',
                  attrs: {
                    src: image.image
                  }
                }),
                e._v(' '),
                n('div', {
                  staticClass: 'figure__caption'
                }, [
                  n('span', {
                    staticClass: 'weathermap__time weathermap__time-rainradar'
                  }, [
                    e._v(e._s(image.formatedDatetime))
                  ]),
                  e._v(' '),
                  n('span', {
                    staticClass: 'weathermap__source weathermap__source-rainradar'
                  }, [
                    e._v('Quelle: MeteoSchweiz')
                  ])
                ])
              ])
            ])
          })),
          e._v(' '),
          n('h2', {
            staticClass: 'weatherelement weatherelement--subtitle weatherelement weatherelement--subtitle--legend'
          }, [
            e._v('\n      Niederschlagsmengen:\n    ')
          ]),
          e._v(' '),
          n('div', {
            staticClass: 'image__placeholder'
          }, [
            n('figure', {
              staticClass: 'image image--content'
            }, [
              n('img', {
                staticClass: 'poster__image--loaded',
                staticStyle: {
                  width: '100%'
                },
                attrs: {
                  src: e.getWeatherImage('nzz_niederschlagsmessungen.svg')
                }
              })
            ])
          ]),
          e._v(' '),
          n('h2', {
            staticClass: 'weatherelement weatherelement--subtitle'
          }, [
            e._v('\n      Was ist ein Niederschlagsradar?\n    ')
          ]),
          e._v(' '),
          n('p', {
            staticClass: 'weatherelement weatherelement--text'
          }, [
            e._v('\n      Niederschlagsteilchen in der Atmosphäre reflektieren Radarstrahlen. Die Darstellung der Echos der Niederschlagsradargeräte zeigt die geographische Verteilung von Regen, Schnee und Hagel. Das vorliegende Bild wird aus den Messdaten von vier Radarstationen zusammengesetzt: Albis, la Dôle, Monte Lema und Plaine Morte. Fällt eine Station aus, fehlt der entsprechende Buchstabe in der Legende.\n    ')
          ]),
          e._v(' '),
          n('p', {
            staticClass: 'weatherelement weatherelement--text'
          }, [
            e._v('\n      Die Farben beziehen sich auf die Niederschlagsintensität. Dabei ist zu beachten, dass vom Radar auch Niederschlagsteilchen erfasst werden können, die den Boden nicht erreichen, beispielsweise weil sie auf ihrem Weg verdunsten.\n    ')
          ])
        ], 2) : e._e()
      ])
    }), [
      function () {
        var e = this,
        t = e.$createElement,
        n = e._self._c || t;
        return n('div', {
          staticClass: 'weather-poster__placeholder',
          staticStyle: {
            background: 'transparent'
          }
        }, [
          n('img', {
            staticClass: 'weather-image__src poster__image--loaded',
            attrs: {
              src: e.getWeatherImage('meteonews_map.png')
            }
          })
        ])
      },
      function () {
        var e = this,
        t = e.$createElement,
        n = e._self._c || t;
        return n('div', {
          staticClass: 'figure__placeholder',
          staticStyle: {
            background: 'transparent'
          }
        }, [
          n('img', {
            staticClass: 'weather-image__src poster__image--loaded',
            attrs: {
              src: e.getWeatherImage('meteonews_border.png')
            }
          })
        ])
      }
    ], !1, null, null, null);
    t.default = component.exports
  },
  215: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      props: {
        data: {
          type: Object,
        default:
          function () {
            return []
          }
        },
        configWeatherPage: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        }
      },
      computed: {
        swissMap: function () {
          try {
            return !!this.data.weather.switzerland.content
          } catch (e) {
            return !1
          }
        },
        citiesInfo: function () {
          var e = this,
          t = [
          ],
          n = this._get(this.data, 'weather.switzerland.content', void 0);
          return n ? (n.map((function (n) {
            for (var r in n) {
              var o = {
              };
              o.name = n[r].title,
              o.tempMin = n[r].tempMin,
              o.tempMax = n[r].tempMax,
              o.txt = n[r].txt,
              o.position = r,
              o.style = e.getWeatherIcon(n[r].piktogrammNo),
              t.push(o)
            }
          })), t) : null
        },
        swissWeatherText: function () {
          return this._get(this.data, 'weather.switzerlandDay.content', [
          ])
        },
        title: function () {
          try {
            var e = this.data.weather.switzerland,
            t = e.lastUpdateFormated,
            n = void 0 === t ? '' : t,
            link = e.link;
            return 'Ausgegeben von <a href='.concat(link, '>MeteoNews AG</a> ').concat(n)
          } catch (e) {
            return ''
          }
        }
      },
      methods: {
        getWeatherIcon: function (e) {
          return 'background-image: url('.concat(this.configWeatherPage.weatherImageUrl, '/weather').concat(e, '.svg)')
        },
        getWeatherImage: function (image) {
          return ''.concat(this.configWeatherPage.weatherImageUrl, '/').concat(image)
        }
      }
    },
    o = (n(755), n(782), n(1)),
    component = Object(o.a) (r, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('section', {
        key: e.configWeatherPage.weatherPage.path + '-content',
        attrs: {
          'data-nzz-article': ''
        }
      }, [
        n('p', {
          staticClass: 'weatherelement weatherelement--title',
          domProps: {
            innerHTML: e._s(e.title)
          }
        }),
        e._v(' '),
        e.swissMap ? e._m(0) : e._e(),
        e._v(' '),
        e._l(e.swissWeatherText, (function (t, r) {
          return n('div', {
            key: r,
            staticClass: 'weatherelement weatherelement--paragraph'
          }, [
            t.title && t.text ? n('h2', {
              staticClass: 'weatherelement weatherelement--subtitle'
            }, [
              n('span', {
                staticClass: 'subtitle__text'
              }, [
                e._v(e._s(t.title))
              ])
            ]) : e._e(),
            e._v(' '),
            t.title && t.text ? n('p', {
              staticClass: 'weatherelement weatherelement--text',
              domProps: {
                innerHTML: e._s(t.text)
              }
            }) : e._e()
          ])
        }))
      ], 2)
    }), [
      function () {
        var e = this,
        t = e.$createElement,
        n = e._self._c || t;
        return n('div', {
          staticClass: 'weathermap'
        }, [
          n('ul', {
            staticClass: 'weathermap__cities'
          }, e._l(e.citiesInfo, (function (t, r) {
            return n('li', {
              key: r,
              staticClass: 'city_icon',
              class : t.position
            }, [
              n('div', {
                staticClass: 'weathermap__city',
                style: t.style,
                attrs: {
                  title: t.name + ' | ' + t.txt
                }
              }, [
                n('div', {
                  staticClass: 'weathermap__temp'
                }, [
                  e._v('\n            ' + e._s(t.tempMin) + '°/' + e._s(t.tempMax) + '°\n          ')
                ])
              ])
            ])
          })), 0),
          e._v(' '),
          n('figure', {
            staticClass: 'weathermap__schweiz'
          }, [
            n('div', {
              staticClass: 'image__placeholder'
            }, [
              n('img', {
                staticClass: 'figure__image',
                attrs: {
                  src: e.getWeatherImage('meteonews_ch.png')
                }
              })
            ])
          ])
        ])
      }
    ], !1, null, null, null);
    t.default = component.exports
  },
  216: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      props: {
        data: {
          type: Object,
        default:
          function () {
            return []
          }
        },
        configWeatherPage: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        }
      },
      computed: {
        swissWeatherText: function () {
          return this._get(this.data, 'weather.today.content.regions.content', '')
        },
        title: function () {
          try {
            var e = this.data.weather.today,
            t = e.lastUpdateFormated,
            n = void 0 === t ? '' : t,
            link = e.link;
            return 'Ausgegeben von <a href='.concat(link, '>MeteoNews AG</a> ').concat(n)
          } catch (e) {
            return ''
          }
        },
        cityName: function () {
          return this._get(this.data, 'weather.cityName', '')
        },
        dayForecast: function () {
          var e = [
          ],
          t = this._get(this.data, 'weather.today.content.today.content[0]', void 0),
          n = this._get(this.data, 'weather.today.content.tomorrow.content[0]', void 0);
          return t && n && (e.push({
            day: 'Heute',
            txt: t.txt,
            tempMin: t.tempMin,
            tempMax: t.tempMax,
            piktogrammNo: t.piktogrammNo
          }), e.push({
            day: 'Morgen',
            txt: n.txt,
            tempMin: n.tempMin,
            tempMax: n.tempMax,
            piktogrammNo: n.piktogrammNo
          })),
          e
        }
      },
      methods: {
        getWeatherImage: function (e) {
          return ''.concat(this.configWeatherPage.weatherImageUrl, '/weather').concat(e, '.svg')
        }
      }
    },
    o = (n(755), n(1009), n(1)),
    component = Object(o.a) (r, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('section', {
        key: e.configWeatherPage.weatherPage.path + '-content',
        attrs: {
          'data-nzz-article': ''
        }
      }, [
        n('p', {
          staticClass: 'weatherelement weatherelement--title',
          domProps: {
            innerHTML: e._s(e.title)
          }
        }),
        e._v(' '),
        e.cityName ? n('h2', {
          staticClass: 'weatherelement weatherelement--subtitle weatherelement--subtitle-big weatherlist__subtitle'
        }, [
          n('span', {
            staticClass: 'subtitle__text'
          }, [
            e._v(e._s(e.cityName))
          ])
        ]) : e._e(),
        e._v(' '),
        n('ul', {
          staticClass: 'weatherlist'
        }, e._l(e.dayForecast, (function (t, r) {
          return n('li', {
            key: r,
            staticClass: 'weatherlist__item'
          }, [
            n('div', {
              staticClass: 'weatherlist__forecast'
            }, [
              n('span', {
                staticClass: 'weatherlist__name'
              }, [
                e._v('\n          ' + e._s(t.day) + '\n        ')
              ]),
              e._v(' '),
              n('img', {
                staticClass: 'weatherlist__icon',
                attrs: {
                  src: e.getWeatherImage(t.piktogrammNo)
                }
              }),
              e._v(' '),
              n('span', {
                staticClass: 'weatherlist__text'
              }, [
                e._v(e._s(t.txt))
              ])
            ]),
            e._v(' '),
            n('div', {
              staticClass: 'weatherlist__temp'
            }, [
              n('span', {
                staticClass: 'weatherlist__temp--max'
              }, [
                e._v(e._s(t.tempMax + '°'))
              ]),
              e._v(' '),
              n('span', {
                staticClass: 'weatherlist__temp--min'
              }, [
                e._v(e._s(t.tempMin + '°'))
              ])
            ])
          ])
        })), 0),
        e._v(' '),
        e._l(e.swissWeatherText, (function (t, r) {
          return n('div', {
            key: r,
            staticClass: 'weatherelement weatherelement--paragraph'
          }, [
            t.title && t.text ? n('h2', {
              staticClass: 'weatherelement weatherelement--subtitle weatherlist__subtitle'
            }, [
              n('span', {
                staticClass: 'subtitle__text'
              }, [
                e._v(e._s(t.title))
              ])
            ]) : e._e(),
            e._v(' '),
            t.title && t.text ? n('p', {
              staticClass: 'weatherelement weatherelement--text',
              domProps: {
                innerHTML: e._s(t.text)
              }
            }) : e._e()
          ])
        }))
      ], 2)
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  236: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'Widget3of3TopArticle',
      extends : n(68).default,
      data: function () {
        return {
          baseClass: this.getClass(this.data.containers.articles[0].styles),
          tid: 'widget-3of3',
          teaserSize: '3of3',
          sourceElem: 'Widget-Volle-Breite-top'
        }
      },
      methods: {
        getClass: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          },
          t = 'widget--3of3';
          return Object.entries(e).forEach((function (style) {
            t = t + ' ' + style[1]
          })),
          t
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    t.default = component.exports
  },
  237: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'Widget3of3Top',
      extends : n(20).default,
      data: function () {
        return {
          baseClass: this.getClass(this.data.styles),
          tid: 'widget-3of3',
          teaserSize: '3of3',
          sourceElem: 'Widget-Volle-Breite-Top-list'
        }
      },
      methods: {
        getClass: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          },
          t = 'widget--3of3';
          return Object.entries(e).forEach((function (style) {
            t = t + ' ' + style[1]
          })),
          t
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    t.default = component.exports
  },
  336: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(3),
    o = n.n(r),
    c = n(5),
    l = n.n(c),
    d = n(2),
    m = n.n(d),
    h = n(97),
    f = n(19);
    function _(object, e) {
      var t = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(object);
        e && (n = n.filter((function (e) {
          return Object.getOwnPropertyDescriptor(object, e).enumerable
        }))),
        t.push.apply(t, n)
      }
      return t
    }
    function v(e) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {
        };
        i % 2 ? _(Object(source), !0).forEach((function (t) {
          o() (e, t, source[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : _(Object(source)).forEach((function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
        }))
      }
      return e
    }
    n.e(5).then(n.t.bind(null, 1567, 7));
    var w = function (data) {
      try {
        var e = JSON.parse(data.element.getAttribute('menusettings'));
        return window.vamp.showContextMenu(e)
      } catch (e) {
        console.log(e)
      }
    },
    y = {
      name: 'RegionPagesButton',
      components: {
        ContextMenu: function () {
          return Promise.resolve().then(n.bind(null, 75))
        }
      },
      props: {
        contextmenuClass: {
          type: String,
        default:
          'header-main__item'
        },
        button: {
          type: Object,
        default:
          function () {
            return {
              showCompassIcon: !0,
              label: 'Meine Gemeinde',
              rounded: !1
            }
          }
        },
        redirectOnSelect: {
          type: Boolean,
        default:
          !0
        },
        redirectWhenSelected: {
          type: Boolean,
        default:
          !0
        },
        origin: {
          type: String,
        default:
          ''
        }
      },
      data: function () {
        return {
          hackComputed: !1,
          offsetLabel: 0,
          ready: !1,
          municipalityMenuOpen: !1,
          municipalitiesList: [
          ],
          municipalitySelected: null,
          searchInput: '',
          showEmpty: 'Keine Gemeinde entspricht Ihrem Suchbegriff.\n      Bitte überprüfen Sie Ihre Eingabe oder verwenden Sie den politischen Gemeindenamen.\n      ',
          lockElements: [
            'selectorfooter',
            'searchform',
            'usermenu'
          ],
          closeOnEvent: !0,
          inputFocused: !1
        }
      },
      computed: {
        isFaded: function () {
          if (this.hackComputed, this.isMobile) {
            var e = this.$refs.regionText;
            if (e) return e.firstElementChild.offsetWidth > 140 || e.getBoundingClientRect().right > document.documentElement.clientWidth
          }
          return !1
        },
        isMobile: function () {
          return f.store.isMobileBreakpoint
        },
        isBlackWhite: function () {
          return this.$config.blackWhiteHeader
        },
        userMunicipality: function () {
          return this.$store.state.municipality
        },
        input: {
          get: function () {
            return this.searchInput
          },
          set: function (e) {
            this.searchInput = e
          }
        },
        municipalities: function () {
          return this.$store.getters.municipalities
        },
        isWebview: function () {
          return this.$store.state.isrendition.indexOf('webview') > - 1
        },
        menusettings: function () {
          return !!this.isWebview && JSON.stringify({
            type: '.showContextMenu',
            event: this.redirectOnSelect ? 'changeMunicipalityUserAction' : 'selectMunicipalityUserAction'
          })
        },
        onclickContextMenu: function () {
          return !!this.isWebview && ''.concat(Object(h.b) ('contextmenu', 'municipality-menu'), '.contextmenu({ element: this })')
        },
        componentID: function () {
          return 'header' === this.origin ? 'doc-municipality-selector-header' : this.$parent.data && this.$parent.data.id ? this.$parent.data.id : 'doc-municipality-selector-widget'
        }
      },
      watch: {
        $route: function () {
          this.addTracking()
        },
        userMunicipality: function () {
          var e = this;
          setTimeout((function () {
            e.hackComputed = !e.hackComputed
          }))
        }
      },
      mounted: function () {
        var e = this;
        return l() (m.a.mark((function t() {
          return m.a.wrap((function (t) {
            for (; ; ) switch (t.prev = t.next) {
              case 0:
                return e.addTracking(),
                t.next = 3,
                e.$store.dispatch('getMunicipalities');
              case 3:
                e.municipalitiesList = e.municipalities,
                e.ready = !0,
                window.deferred((function () {
                  e.hackComputed = !e.hackComputed
                }));
              case 6:
              case 'end':
                return t.stop()
            }
          }), t)
        }))) ()
      },
      methods: {
        addTracking: function () {
          var e = this;
          window.deferred((function () {
            e.$root.$emit('tms:component:create', {
              detail: {
                componentID: e.componentID,
                componentName: 'Municipality-Selector',
                componentSubType1: 'cms',
                componentSubType2: '',
                componentType: 'ui'
              }
            })
          }))
        },
        addEvent: function (e) {
          var t = this,
          n = this;
          window.deferred((function () {
            t.$root.$emit('tms:event:push', {
              detail: v(v({
              }, n.eventData()), {
              }, {
                eventInfo: v(v({
                }, n.eventData().eventInfo), {
                }, {
                  eventAction: e
                })
              })
            })
          }))
        },
        eventData: function () {
          return {
            eventInfo: {
              eventAction: '',
              eventPosition: '',
              eventValue: this.municipalitySelected && this.municipalitySelected.name ? this.municipalitySelected.name : null,
              eventNonInteractive: !1,
              componentID: this.componentID,
              componentName: 'Municipality-Selector',
              type: 'ui',
              eventName: 'UI Interaction'
            },
            category: {
              primaryCategory: 'ui',
              subCategory1: 'selector',
              subCategory2: this.origin,
              subCategory3: ''
            }
          }
        },
        filterCities: function () {
          var e = this,
          t = this.municipalitiesList[this.municipalitiesList.length - 1];
          t && 'error' === t.id && this.municipalitiesList.splice(this.municipalitiesList.length - 1, 1),
          !this.input || this.input.length < 3 ? this.municipalitiesList = this.municipalities : (this.municipalitiesList = this.municipalities.filter((function (t) {
            return - 1 !== t.search.indexOf(e.input.toLowerCase())
          })), this.municipalitiesList.length || this.municipalitiesList.push({
            id: 'error',
            name: this.showEmpty
          }))
        },
        toggleMunicipalityMenu: function () {
          var e = this;
          this.userMunicipality && this.redirectWhenSelected ? this.openMunicipality() : (this.municipalityMenuOpen = !this.municipalityMenuOpen, this.municipalityMenuOpen && (this.addEvent('open'), this.$nextTick((function () {
            return e.lockElements.forEach((function (t) {
              e.$refs[t] && e.$refs[t].addEventListener('touchmove', e.lockOnIOS)
            }))
          }))))
        },
        closeMunicipalityMenu: function () {
          var e = this;
          this.lockElements.forEach((function (t) {
            e.$refs[t] && e.$refs[t].removeEventListener('touchmove', e.lockOnIOS)
          })),
          this.municipalityMenuOpen = !1,
          this.municipalitySelected = null
        },
        selectCity: function (e) {
          this.municipalitySelected = e
        },
        saveCity: function () {
          this.municipalitySelected && (this.addEvent('set'), this.$store.dispatch('triggerMunicipalitySwitch', {
            item: this.municipalitySelected,
            redirectOnSelect: this.redirectOnSelect
          }), this.closeMunicipalityMenu())
        },
        openMunicipality: function () {
          var e = this.userMunicipality;
          window.dispatchEvent(new window.CustomEvent('nzzOpenDocument', {
            detail: {
              url: e.slug
            }
          })),
          this.$store.dispatch('triggerNewAction', {
            hash: 'municipality',
            regionName: e.name
          })
        },
        lockOnIOS: function (e) {
          return e.preventDefault(),
          !1
        },
        toggleFocusEvents: function () {
          var e = this;
          this.closeOnEvent ? (this.inputFocused = !this.inputFocused, this.closeOnEvent = !this.closeOnEvent) : setTimeout((function () {
            e.inputFocused = !e.inputFocused,
            e.closeOnEvent = !e.closeOnEvent
          }), 500)
        }
      },
      head: function () {
        if (this.isWebview) return {
          script: [
            {
              hid: 'municipality-menu',
              preserve: 'preserve',
              type: 'text/javascript',
              innerHTML: Object(h.a) ('contextmenu', 'municipality-menu', w)
            }
          ]
        }
      }
    },
    x = (n(1221), n(1)),
    component = Object(x.a) (y, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return e.$store.state.features.gemeinde && (e.ready || e.isWebview) ? n('ContextMenu', {
        staticClass: 'contextmenu-municipality',
        class : e.contextmenuClass,
        attrs: {
          horizontal: 'right',
          'overlay-position': 'full',
          transition: 'slide-bottom',
          'close-on-event': e.closeOnEvent,
          menusettings: e.menusettings,
          onclick: e.onclickContextMenu,
          open: e.municipalityMenuOpen,
          origin: 'regionBtn'
        },
        on: {
          toggle: e.toggleMunicipalityMenu,
          close: e.closeMunicipalityMenu
        }
      }, [
        n('template', {
          slot: 'button'
        }, [
          e._t('default', [
            n('button', {
              staticClass: 'button button--region',
              class : {
                'button--blackwhite': e.isBlackWhite,
                'button--fluid': e.$store.state.municipality,
                'button--rounded': e.button.rounded
              },
              attrs: {
                'data-origin': e.$store.state.municipality ? 'header' : null,
                'data-nzz-referrer': e.$store.state.municipality ? 'municipalitySelector' : null
              }
            }, [
              e.button.showCompassIcon ? n('svgicon', {
                staticClass: 'icon__compass',
                attrs: {
                  name: 'ico_compass_22',
                  width: '22',
                  height: '22'
                }
              }) : e._e(),
              e._v(' '),
              n('span', {
                ref: 'regionText',
                staticClass: 'regiontext',
                class : {
                  'regiontext--faded': e.isFaded,
                  'regiontext--blackwhite': e.isBlackWhite
                }
              }, [
                n('span', {
                  staticClass: 'button__label'
                }, [
                  e._v('\n            ' + e._s(e.userMunicipality ? e.userMunicipality.name : e.button.label) + '\n          ')
                ]),
                e._v(' '),
                e.userMunicipality ? e._e() : n('svgicon', {
                  staticClass: 'icon__chevron',
                  attrs: {
                    width: '7',
                    height: '11',
                    name: 'nzz_little_chevron',
                    color: 'r-#FFFFFF'
                  }
                })
              ], 1)
            ], 1)
          ]),
          e._v(' '),
          e._t('alternateButton')
        ], 2),
        e._v(' '),
        n('template', {
          slot: 'menu'
        }, [
          n('nav', {
            staticClass: 'menu'
          }, [
            n('div', {
              ref: 'usermenu',
              staticClass: 'menu__mobile'
            }, [
              n('svgicon', {
                staticClass: 'menu__close',
                attrs: {
                  name: 'ico_close_48',
                  width: '48',
                  height: '48',
                  color: 'r-#888B95'
                },
                on: {
                  click: e.closeMunicipalityMenu
                }
              }),
              e._v(' '),
              n('h2', [
                e._v('Meine Gemeinde')
              ]),
              e._v(' '),
              n('p', [
                e._v('Ganz genau wissen, was vor Ort los ist?'),
                n('br'),
                e._v('Hier gelangen Sie direkt zu Ihrer Gemeinde:')
              ])
            ], 1),
            e._v(' '),
            n('div', {
              ref: 'searchform',
              staticClass: 'searchform--menu'
            }, [
              n('div', {
                staticClass: 'searchform__wrap'
              }, [
                n('label', {
                  staticClass: 'hidden',
                  attrs: {
                    for : 'searchinput'
                  }
                }, [
                  e._v('\n            Suchen\n          ')
                ]),
                e._v(' '),
                n('input', {
                  directives: [
                    {
                      name: 'model',
                      rawName: 'v-model',
                      value: e.input,
                      expression: 'input'
                    }
                  ],
                  ref: 'input',
                  staticClass: 'searchform__input',
                  style: {
                    height: '48px'
                  },
                  attrs: {
                    name: 'q',
                    placeholder: 'Suchen Sie ihre Gemeinde',
                    'aria-label': 'Suchen Sie ihre Gemeinde',
                    type: 'text',
                    size: '15',
                    autocomplete: 'off'
                  },
                  domProps: {
                    value: e.input
                  },
                  on: {
                    keyup: e.filterCities,
                    focusin: e.toggleFocusEvents,
                    focusout: e.toggleFocusEvents,
                    input: function (t) {
                      t.target.composing || (e.input = t.target.value)
                    }
                  }
                }),
                e._v(' '),
                n('button', {
                  ref: 'button',
                  staticClass: 'button searchform__button',
                  attrs: {
                    'aria-label': 'Suche',
                    role: 'button'
                  }
                }, [
                  e._t('searchicon', [
                    n('svgicon', {
                      attrs: {
                        height: '48',
                        name: 'ico_search_48',
                        width: '48',
                        color: 'r-#888B95'
                      }
                    })
                  ])
                ], 2)
              ])
            ]),
            e._v(' '),
            n('ul', {
              staticClass: 'menu__section menu__section--limited',
              class : {
                'menu__section--focused': e.inputFocused && e.isMobile
              }
            }, e._l(e.municipalitiesList, (function (t) {
              return n('li', {
                key: t.id,
                staticClass: 'menu__item',
                class : {
                  'menu__item--error': 'error' === t.id
                }
              }, [
                n('span', {
                  staticClass: 'menu__link menu__link--region',
                  class : {
                    'menu__link--selected': e.municipalitySelected && e.municipalitySelected.id === t.id
                  },
                  domProps: {
                    innerHTML: e._s(t.name)
                  },
                  on: {
                    click: function (n) {
                      'error' === t.id || e.selectCity(t)
                    }
                  }
                })
              ])
            })), 0),
            e._v(' '),
            n('div', {
              directives: [
                {
                  name: 'show',
                  rawName: 'v-show',
                  value: !(e.inputFocused && e.isMobile),
                  expression: '!(inputFocused && isMobile)'
                }
              ],
              ref: 'selectorfooter',
              staticClass: 'menu__section menu__section--borderless'
            }, [
              n('div', {
                staticClass: 'menu__item--sized'
              }, [
                n('button', {
                  staticClass: 'button button--primary button--wide button--rounded',
                  class : {
                    'button--inactive': !e.municipalitySelected
                  },
                  attrs: {
                    'data-origin': 'header' === e.origin ? 'header-initial' : e.origin ? e.origin : null,
                    'data-nzz-referrer': e.origin && 'widget' !== e.origin ? 'municipalitySelector' : null
                  },
                  on: {
                    click: function (t) {
                      return e.saveCity()
                    }
                  }
                }, [
                  e._v('\n            Gemeinde wählen\n          ')
                ])
              ])
            ])
          ])
        ])
      ], 2) : e._e()
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  372: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(3),
    o = n.n(r),
    c = n(15),
    l = n(65),
    d = n(264);
    function m(object, e) {
      var t = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(object);
        e && (n = n.filter((function (e) {
          return Object.getOwnPropertyDescriptor(object, e).enumerable
        }))),
        t.push.apply(t, n)
      }
      return t
    }
    function h(e) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {
        };
        i % 2 ? m(Object(source), !0).forEach((function (t) {
          o() (e, t, source[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : m(Object(source)).forEach((function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
        }))
      }
      return e
    }
    var f = {
      name: 'Snackbar',
      components: {
        NzzLink: function () {
          return Promise.resolve().then(n.bind(null, 31))
        }
      },
      mixins: [
        d.a
      ],
      props: {
        action: {
          type: String,
        default:
          ''
        },
        preview: {
          type: Object,
        default:
          function () {
          }
        }
      },
      data: function () {
        return {
          timeout: ''
        }
      },
      computed: {
        item: function () {
          return 'preview' === this.action ? this.preview.value : this.$store.getters.getSnippet(this.action)
        },
        isMobile: function () {
          return this.$store.state.isMobile
        },
        setUrl: function () {
          return Object(c.d) ((function () {
            return !0
          })) ? '' : this.hasParameter(this.item.settings.followUpAction)
        }
      },
      mounted: function () {
        this.handleEditor(),
        this.startTimer()
      },
      destroyed: function () {
        this.stopTimer()
      },
      methods: {
        handleEditor: function () {
          var e = this;
          Object(c.d) ((function () {
            e.$el && e.$nextTick((function () {
              Promise.all([n.e(9),
              n.e(3)]).then(n.bind(null, 1563)).then((function (e) {
                var t = e.initEditor;
                t({
                  selector: '.snackbar [data-editor="text"]',
                  key: 'text',
                  toolbar: !1
                }),
                t({
                  selector: '.snackbar [data-editor="follow-up-action"]',
                  key: 'followUpActionText',
                  toolbar: !1
                })
              }))
            }))
          }))
        },
        startTimer: function () {
          Object(c.b) () || (this.addTracking(), this.timeout = setTimeout(this.clearSnack, 4000))
        },
        stopTimer: function () {
          Object(c.b) () || clearTimeout(this.timeout)
        },
        clearSnack: function () {
          this.$store.commit('removeAction', {
            action: this.action
          })
        },
        addTracking: function () {
          var e = this,
          t = this;
          window.deferred((function () {
            var n = e.item.c1ConversionProperty,
            r = void 0 === n ? 'Snackbar' : n;
            Object(l.d) ('conversion', r, e.$config);
            var o = e.item._id;
            'connection-issues' === e.item.action && (o = window.digitalData.page.pageInfo.pageID || e.item.name),
            window.dispatchEvent(new window.CustomEvent('tms:component:create', {
              detail: {
                componentID: o,
                componentName: e.item.name,
                componentSubType1: 'cms',
                componentType: 'notification',
                componentSubType2: e.item.type
              }
            })),
            window.dispatchEvent(new window.CustomEvent('tms:event:push', {
              detail: h(h({
              }, t.eventData()), {
              }, {
                eventInfo: h(h({
                }, t.eventData().eventInfo), {
                }, {
                  componentID: o
                })
              })
            }))
          }))
        },
        eventData: function () {
          return {
            eventInfo: {
              eventName: 'Notification Interaction',
              eventAction: 'display',
              eventPosition: 'bottom',
              eventValue: '',
              eventNonInteractive: !0,
              type: 'notification',
              timeStamp: new Date,
              componentID: this.item._id,
              componentName: this.item.name
            },
            category: {
              primaryCategory: 'notification',
              subCategory1: 'cms',
              subCategory2: 'non-disruptive',
              subCategory3: this.item.type
            }
          }
        },
        followUpTracking: function () {
          var e = this,
          t = this;
          window.deferred((function () {
            window.dispatchEvent(new window.CustomEvent('tms:event:push', {
              detail: h(h({
              }, t.eventData()), {
              }, {
                eventInfo: h(h({
                }, t.eventData().eventInfo), {
                }, {
                  eventAction: 'follow-up',
                  eventNonInteractive: !1,
                  eventValue: e.item.settings.followUpAction
                })
              })
            }))
          }))
        }
      }
    },
    _ = (n(1371), n(1)),
    component = Object(_.a) (f, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('transition', {
        attrs: {
          name: 'small-thing',
          appear: ''
        }
      }, [
        n('div', {
          staticClass: 'snackbar',
          on: {
            mouseleave: e.startTimer,
            mouseenter: e.stopTimer
          }
        }, [
          n('div', {
            staticClass: 'snackbar__text',
            class : {
              'snackbar__text--follow-up': e.item.settings.hasFollowUpAction
            },
            attrs: {
              'data-editor': 'text'
            },
            domProps: {
              innerHTML: e._s(e.item.settings.text)
            }
          }),
          e._v(' '),
          e.item.backaction ? n('div', {
            staticClass: 'snackbar__follow-up',
            domProps: {
              innerHTML: e._s(e.item.settings.followUpActionText || '<p>RÜCKGÄNGIG MACHEN</p>')
            },
            on: {
              click: e.item.backaction
            }
          }) : n('NzzLink', {
            staticClass: 'snackbar__follow-up',
            class : {
              'snackbar__follow-up--hidden': !e.item.settings.hasFollowUpAction
            },
            attrs: {
              'data-nzz-referrer': 'snackbarLink',
              'data-editor': 'follow-up-action',
              url: e.setUrl
            },
            domProps: {
              innerHTML: e._s(e.item.settings.followUpActionText)
            },
            on: {
              click: e.followUpTracking
            }
          })
        ], 1)
      ])
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  373: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'Snackbars',
      components: {
        Snackbar: n(372).default
      },
      data: function () {
        return {
          preview: null
        }
      },
      computed: {
        actions: function () {
          return this.preview ? [
            'preview'
          ] : this.$store.getters.getActions
        }
      },
      mounted: function () {
        window.addEventListener('snackbarPreview', this.onPreview)
      },
      destroyed: function () {
        window.removeEventListener('snackbarPreview', this.onPreview)
      },
      methods: {
        onPreview: function (e) {
          e && (this.preview = {
            type: e.detail.snippet.type,
            value: e.detail.snippet,
            key: Date.now()
          })
        }
      }
    },
    o = (n(1373), n(1)),
    component = Object(o.a) (r, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('div', {
        staticClass: 'snackbars'
      }, e._l(e.actions, (function (t) {
        return n('Snackbar', {
          key: t,
          attrs: {
            action: t,
            preview: e.preview
          }
        })
      })), 1)
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  394: function (e, t, n) {
    'use strict';
    n.r(t);
    var r,
    o,
    c,
    l,
    d = n(6),
    m = n.n(d),
    h = n(7),
    f = n.n(h),
    _ = n(73),
    v = n.n(_),
    w = n(76),
    y = n.n(w);
    function x(element) {
      if (!element || !element.getAttribute) return '';
      var e = element.getAttribute('data-source-element');
      return null !== e ? e : x(element.parentNode)
    }
    function z(e) {
      return Boolean(e) || 'number' == typeof e
    }
    var k = function () {
      function e(t, n) {
        v() (this, e),
        this.platform = t,
        this.cookieName = n,
        this.data = {
        }
      }
      return y() (e, [
        {
          key: 'process',
          value: function (e, t) {
            if (this.data = this.getTrackedInfoByElement(e, x(e)), this.data) {
              var n = Object.keys(this.data);
              n.includes('platform') || (this.data.platform = this.platform);
              var r = t.page,
              o = (r = void 0 === r ? {
              }
               : r).category,
              c = (o = void 0 === o ? {
              }
               : o).pageType,
              l = void 0 === c ? '' : c,
              d = o.primaryCategory,
              m = void 0 === d ? '' : d;
              n.includes('pageType') || (this.data.pageType = l),
              n.includes('primaryCategory') || (this.data.primaryCategory = m),
              this.setAnalyticLocalStorage()
            }
          }
        },
        {
          key: 'getTrackedInfoByElement',
          value: function (e, t) {
            if (null !== e.parentNode) {
              var data = l({
                target: e,
                sourceElement: t
              });
              return data || this.getTrackedInfoByElement(e.parentNode, t)
            }
          }
        },
        {
          key: 'setAnalyticLocalStorage',
          value: function () {
            var e = (new Date).getFullYear() + 1,
            t = [
              this.data.platform,
              this.data.pageType,
              this.data.primaryCategory,
              this.data.sourceElement,
              this.data.subSourceElement1,
              this.data.subSourceElement2
            ].filter(z).join(';');
            if (this.data.containerRank && this.data.containerRank.length > 0) {
              var n = this.data.containerRank.filter(z).join(';');
              t = ''.concat(t, '&|&').concat(n)
            }
            window.localStorage && window.localStorage.setItem('referringElement', t),
            document.cookie = ''.concat(this.cookieName, '=').concat(encodeURIComponent(encodeURIComponent(t)), ';expires=Thu, 01 Jan ').concat(e, ' 00:00:00 UTC;domain=').concat(c, ';path=/')
          }
        },
        {
          key: 'getAnalyticLocalStorage',
          value: function () {
            return function () {
              try {
                return window.self !== window.top
              } catch (e) {
                return !0
              }
            }() && window.localStorage && window.localStorage.getItem('referringElement') && (window.parent.postMessage({
              crossReferringElement: window.localStorage.getItem('referringElement')
            }, '*'), this.deleteAnalyticLocalStorage()),
            window.localStorage ? window.localStorage.getItem('referringElement') : ''
          }
        },
        {
          key: 'deleteAnalyticLocalStorage',
          value: function () {
            window.localStorage && window.localStorage.getItem('doRedirect') ? window.localStorage.removeItem('doRedirect') : (window.localStorage.removeItem('referringElement'), document.cookie = ''.concat(this.cookieName, '=; expires=Thu, 01 Jan 1970 00:00:00 UTC;domain=').concat(c, ';path=/;'))
          }
        }
      ]),
      e
    }(),
    C = n(39),
    O = {
      mainmenu: function () {
        return {
          sourceElement: 'mainmenu',
          subSourceElement1: 'level0'
        }
      },
      menuLevel1: function () {
        return {
          sourceElement: 'menu',
          subSourceElement1: 'level1'
        }
      },
      menuLevel2: function () {
        return {
          sourceElement: 'menu',
          subSourceElement1: 'level2'
        }
      },
      headermenuLevel1: function () {
        return {
          sourceElement: 'headermenu',
          subSourceElement1: 'level1'
        }
      },
      weatherMenu: function () {
        return {
          sourceElement: 'weatherMenu',
          subSourceElement1: 'level1'
        }
      },
      usermenuLevel1: function () {
        return {
          sourceElement: 'usermenu',
          subSourceElement1: 'level1'
        }
      },
      searchMenu: function () {
        return {
          sourceElement: 'searchMenu',
          subSourceElement1: 'level1'
        }
      },
      footermenuLevel1: function () {
        return {
          sourceElement: 'footer',
          subSourceElement1: 'link',
          subSourceElement2: 'article' === window.digitalData.page.attributes.c1.docType ? E() : ''
        }
      },
      footerTag: function (e) {
        return {
          sourceElement: 'footer',
          subSourceElement1: 'tag',
          subSourceElement2: e.target.getAttribute('data-nzz-referrer-name') || ''
        }
      },
      breadcrumbLevel0: function () {
        return {
          sourceElement: 'breadcrumb',
          subSourceElement1: 'level0'
        }
      },
      breadcrumbLevel1: function () {
        return {
          sourceElement: 'breadcrumb',
          subSourceElement1: 'level1'
        }
      },
      myCompanionMenu: function () {
        return {
          sourceElement: 'mnzzcockpit',
          subSourceElement1: 'level1'
        }
      },
      containerHeadTitle: function (e) {
        var t = e.target,
        n = e.sourceElement;
        return {
          sourceElement: Object(C.e) (n, t.textContent),
          subSourceElement1: 'title'
        }
      },
      containerHeadImg: function (e) {
        var t = e.target,
        n = e.sourceElement,
        r = [
          t.closest('[data-nzz-container]')
        ].map(C.a);
        return {
          sourceElement: C.e.apply(void 0, [
            n
          ].concat(f() (r))),
          subSourceElement1: 'title'
        }
      },
      containerHeadTag: function (e) {
        var t = e.target,
        n = e.sourceElement,
        r = t.textContent,
        o = [
          t.closest('[data-nzz-container]')
        ].map(C.a);
        return {
          sourceElement: C.e.apply(void 0, [
            n
          ].concat(f() (o))),
          subSourceElement1: 'tag',
          subSourceElement2: r
        }
      },
      containerWidgetHeadTitle: function (e) {
        var t = e.target,
        n = e.sourceElement,
        r = [
          t.closest('[data-nzz-container]')
        ].map(C.a),
        o = [
          t.closest('[data-source-element-widget]')
        ].map(C.c);
        return {
          sourceElement: ''.concat(C.e.apply(void 0, [
            n
          ].concat(f() (r))), '|').concat(C.e.apply(void 0, [
            Object(C.d) (t)
          ].concat(f() (o)))),
          subSourceElement1: 'title'
        }
      },
      containerWidgetShowAll: function (e) {
        var t = e.target,
        n = e.sourceElement,
        r = [
          t.closest('[data-source-element-widget]')
        ].map(C.c);
        return {
          sourceElement: ''.concat(n, '|').concat(C.e.apply(void 0, [
            Object(C.d) (t)
          ].concat(f() (r)))),
          subSourceElement1: 'title'
        }
      },
      teaserLink: function (e) {
        var t = e.target,
        n = e.sourceElement,
        r = !1;
        Object(C.d) (t) && (r = Object(C.d) (t).includes('Widget-Slider'));
        var o = 'article' === window.digitalData.page.attributes.c1.docType,
        c = [
          t.closest('[data-nzz-container]')
        ].map(C.a),
        l = [
          t.closest('[data-source-element-widget]')
        ].map(C.c),
        d = ''.concat(C.e.apply(void 0, [
          n
        ].concat(f() (c))), '|').concat(C.e.apply(void 0, [
          Object(C.d) (t)
        ].concat(f() (l)))),
        m = [
        ];
        if ('home' === window.digitalData.page.category.pageType) {
          var h = 'CH';
          try {
            h = window.digitalData.user[0].profile[0].attributes.c1.clientCountryCode
          } catch (e) {
          }
          var _ = Object(C.b) (t, 'data-nzz-cid') || 'no-cid',
          v = Object(C.b) (t, 'data-nzz-ct') || 'no-title',
          w = Object(C.b) (t, 'data-nzz-cp') || 'no-cp',
          y = Object(C.b) (t, 'data-nzz-pic') || 'no-pic';
          m = [
            h,
            Object(C.f) (_),
            Object(C.f) (v),
            Object(C.f) (w),
            Object(C.f) (y)
          ]
        }
        var x = 'teaser';
        return r && o && (x = E()),
        {
          sourceElement: d,
          subSourceElement1: x,
          containerRank: m
        }
      },
      teaserLinkbox: function () {
        return {
          sourceElement: 'linkbox',
          subSourceElement1: E()
        }
      },
      articleTeaser: function () {
        return {
          sourceElement: 'mehr-zum-thema',
          subSourceElement1: E()
        }
      },
      recommendationTeaser: function () {
        return {
          sourceElement: 'slider-recommendation',
          subSourceElement1: E()
        }
      },
      einklinkerTrending: function () {
        return {
          sourceElement: 'Einklinker-Trending',
          subSourceElement1: E()
        }
      },
      btaArticleTeaser: function (e) {
        var t = e.target,
        n = e.sourceElement,
        r = [
          t.closest('[data-nzz-container]')
        ].map(C.a),
        o = [
          t.closest('[data-source-element]')
        ].map(C.c);
        return {
          sourceElement: ''.concat(C.e.apply(void 0, [
            n
          ].concat(f() (r))), '|').concat(C.e.apply(void 0, [
            Object(C.d) (t)
          ].concat(f() (o)))),
          subSourceElement1: E()
        }
      },
      btaCompanionTeaser: function (e) {
        var t = e.target,
        n = e.sourceElement,
        r = [
          t.closest('[data-nzz-container]')
        ].map(C.a);
        return {
          sourceElement: ''.concat(C.e.apply(void 0, [
            n
          ].concat(f() (r)))),
          subSourceElement1: E()
        }
      },
      btaLinkNewest: function () {
        return {
          sourceElement: 'btalink-newest-articles',
          subSourceElement1: E()
        }
      },
      btaLinkTopic: function () {
        return {
          sourceElement: 'btalink-same-topic',
          subSourceElement1: E()
        }
      },
      btaSameAuthor: function () {
        return {
          sourceElement: 'btalink-same-author',
          subSourceElement1: E()
        }
      },
      btaLinkCompanion: function () {
        return {
          sourceElement: 'btalink-companion',
          subSourceElement1: E()
        }
      },
      articleList: function () {
        return {
          sourceElement: 'artikel-liste',
          subSourceElement1: E()
        }
      },
      articleLink: function () {
        return {
          sourceElement: 'textlink',
          subSourceElement1: E()
        }
      },
      tagLink: function (e) {
        var t = e.target;
        if (t.parentElement && t.parentElement.classList && t.parentElement.classList.contains('tag--city')) return {
          sourceElement: 'tag-cluster|municipality',
          subSourceElement1: E()
        };
        var n = t.textContent || '',
        r = Object(C.f) (n);
        try {
          'article' === window.digitalData.page.attributes.c1.docType && (r = '')
        } catch (e) {
        }
        return {
          sourceElement: 'tag-cluster|topic',
          subSourceElement1: r,
          subSourceElement2: E()
        }
      },
      topicTag: function (e) {
        return {
          sourceElement: 'tag-cluster|topic',
          subSourceElement1: e.target.classList.contains('related__button') ? 'related' : 'index'
        }
      },
      topicTeaser: function () {
        return {
          sourceElement: 'featured-article-section',
          subSourceElement1: 'teaser'
        }
      },
      topicListTeaser: function () {
        return {
          sourceElement: 'list',
          subSourceElement1: 'teaser'
        }
      },
      municipalitySelector: function (e) {
        return {
          sourceElement: 'municipality-selector',
          subSourceElement1: e.target.getAttribute('data-origin')
        }
      },
      snackbarLink: function () {
        return {
          sourceElement: 'snackbar-link',
          subSourceElement1: E()
        }
      },
      smartTeaserShowAll: function () {
        return {
          sourceElement: 'smart-latest-article',
          subSourceElement1: 'title'
        }
      },
      smartLatestArticle: function () {
        return {
          sourceElement: 'smart-latest-article',
          subSourceElement1: 'teaser'
        }
      },
      smartBriefingArticle: function () {
        return {
          sourceElement: 'smart-briefing-article',
          subSourceElement1: 'teaser'
        }
      },
      headerLogo: function () {
        return {
          sourceElement: 'header',
          subSourceElement1: 'logo'
        }
      },
      galleryLogo: function () {
        return {
          sourceElement: 'image-zoom',
          subSourceElement1: 'logo'
        }
      },
      weatherIcon: function () {
        return {
          sourceElement: 'header',
          subSourceElement1: 'weather'
        }
      },
      nextReads: function (e) {
        var t = [
          'nextread'
        ],
        n = [
          e.target.closest('[data-source-element-widget]')
        ].map(C.c),
        r = m() (n, 1) [0];
        return r && t.push(Object(C.f) (r)),
        {
          sourceElement: t.join('-'),
          subSourceElement1: E()
        }
      },
      authorBoxMore: function (e) {
        var t = [
          'author-element'
        ],
        n = e.target.closest('[data-nzz-authorbox]');
        if (null !== n) {
          var r = n.querySelector('[data-nzz-authorbox-name]');
          null !== r && t.push(r.textContent.trim().replace(/\s+/g, '-'))
        }
        return {
          sourceElement: t.filter(Boolean).join('-'),
          subSourceElement1: E()
        }
      },
      personalizedFeed: function (e) {
        var t = e.target,
        n = e.sourceElement,
        r = [
          t.closest('[data-nzz-container]')
        ].map(C.a),
        o = [
          t.closest('[data-source-element-widget]')
        ].map(C.c);
        return {
          sourceElement: ''.concat(C.e.apply(void 0, [
            n
          ].concat(f() (r))), '|').concat(C.e.apply(void 0, [
            Object(C.d) (t)
          ].concat(f() (o)))),
          subSourceElement1: 'teaser'
        }
      },
      inlineNavigation: function () {
        return {
          sourceElement: 'inline-navigation',
          subSourceElement1: E()
        }
      },
      aliasTeaserEmbed: function () {
        return {
          sourceElement: 'alias-teaser-embed',
          subSourceElement1: E()
        }
      },
      aliasTeaserEmbedList: function () {
        return {
          sourceElement: 'mehr-zum-thema-series',
          subSourceElement1: ''.concat(E(), ';teaser')
        }
      },
      aliasTeaserEmbedListHead: function () {
        return {
          sourceElement: 'mehr-zum-thema-series',
          subSourceElement1: ''.concat(E(), ';title')
        }
      }
    };
    function S() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
      },
      t = e.target;
      if (null !== t) {
        var n = t.getAttribute('data-nzz-referrer');
        if (null !== n) {
          var r = O[n];
          if (r) return r(e)
        }
      }
    }
    function E() {
      try {
        return window.digitalData.page.pageInfo.pageID
      } catch (e) {
        return ''
      }
    }
    var j = {
      data: function () {
        return {
          analytics: null,
          iframeEnabled: !1,
          iframeSrc: ''.concat(this.$config.nzzBaseUrl, '/cross-site')
        }
      },
      created: function () {
        this.analytics = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          };
          r = e.analyticCookieName || 'ddRfrElm',
          o = e.platform || 'nzz.ch',
          c = e.domain || '.nzz.ch',
          l = e.findReferrer || function () {
            return {
            }
          };
          var t = new k(o, r);
          function n() {
            try {
              var e = t.getAnalyticLocalStorage();
              e && (window.digitalData.page.pageInfo.referringElement = e, t.deleteAnalyticLocalStorage())
            } catch (e) {
              console.log(e)
            }
          }
          function d() {
            try {
              window.digitalData.page.pageInfo.referringElement = ''
            } catch (e) {
              console.log(e)
            }
          }
          function h(e) {
            var n = e.target;
            t.process(n, window.digitalData)
          }
          return document.addEventListener('nzz:referring-element:update', n),
          document.addEventListener('nzz:referring-element:clear', d),
          document.addEventListener('click', h),
          {
            destroy: function () {
              document.removeEventListener('nzz:referring-element:update', n),
              document.removeEventListener('nzz:referring-element:clear', d),
              document.removeEventListener('click', h)
            },
            referral: function () {
              return t.getAnalyticLocalStorage()
            },
            referralData: function () {
              var e = t.getAnalyticLocalStorage().split(';'),
              n = m() (e, 6);
              return {
                platform: n[0],
                pageType: n[1],
                primaryCategory: n[2],
                sourceElement: n[3],
                subSourceElement1: n[4],
                subSourceElement2: n[5]
              }
            }
          }
        }({
          analyticCookieName: 'ddRfrElm',
          platform: this.$config.referralPlatform,
          domain: this.$config.referralDomain,
          findReferrer: S
        })
      },
      mounted: function () {
        'nzz' !== this.$config.product && document.referrer && document.referrer.includes(this.$config.nzzBaseUrl) && (window.addEventListener('message', this.getIframeMessage), this.iframeEnabled = !0)
      },
      destroyed: function () {
        this.analytics.destroy()
      },
      methods: {
        getIframeMessage: function (e) {
          e.data.crossReferringElement && (this.iframeEnabled = !1, window.removeEventListener('message', this.getIframeMessage), window.digitalData.page.pageInfo.referringElement = e.data.crossReferringElement)
        }
      },
      render: function () {
        return null
      }
    },
    M = n(1),
    component = Object(M.a) (j, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('div', [
        e.iframeEnabled ? n('iframe', {
          directives: [
            {
              name: 'show',
              rawName: 'v-show',
              value: !1,
              expression: 'false'
            }
          ],
          attrs: {
            src: e.iframeSrc
          }
        }) : e._e()
      ])
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  412: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      extends : n(54).default,
      head: function () {
        if (this.videourl) return {
          script: [
            {
              hid: 'amp-video',
              preserve: 'preserve',
              type: 'text/javascript',
              async: !0,
              src: 'https://cdn.ampproject.org/v0/amp-video-0.1.js',
              'custom-element': 'amp-video'
            }
          ]
        }
      },
      computed: {
        imageSrc: function () {
          return this.data.content.image ? this.data.content.image.url : ''
        }
      }
    },
    o = (n(1125), n(1127), n(1)),
    component = Object(o.a) (r, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('div', {
        staticClass: 'headline headline--hero',
        class : [
          e.style('header-highlight'),
          e.style('object-position-selection'),
          e.style('object-position-selection-horizontal')
        ]
      }, [
        n('div', {
          ref: 'hero',
          staticClass: 'headline__wrapper'
        }, [
          n('figure', {
            staticClass: 'headline__poster'
          }, [
            n('div', {
              directives: [
                {
                  name: 'srcset',
                  rawName: 'v-srcset',
                  value: {
                    teaserImage: e.data.content.image,
                    parent: this.$parent,
                    layout: 'article',
                    imageType: 'fragment'
                  },
                  expression: '{\n          teaserImage: data.content.image,\n          parent: this.$parent,\n          layout: \'article\',\n          imageType: \'fragment\'\n        }'
                }
              ],
              staticClass: 'headline__poster-placeholder image-placeholder'
            }, [
              n('amp-img', {
                ref: 'poster',
                tag: 'component',
                staticClass: 'headline__poster-image image-placeholder__image',
                attrs: {
                  'data-object-position': e.objectPosition(),
                  layout: 'fill',
                  'data-object-fit': 'cover'
                }
              }),
              e._v(' '),
              e.videourl ? n('amp-video', {
                ref: 'video',
                staticClass: 'poster__video',
                attrs: {
                  controls: '',
                  autoplay: 'autoplay',
                  src: e.videourl,
                  'data-object-position': e.objectPosition(),
                  width: '100',
                  height: '100',
                  poster: e.imageSrc,
                  layout: 'fill',
                  'data-object-fit': 'cover'
                }
              }) : e._e()
            ], 1)
          ]),
          e._v(' '),
          n('div', {
            staticClass: 'headline__bottom'
          }, [
            n('div', {
              staticClass: 'headline__text headline__highlight'
            }, [
              e.showFlag && e.isComponentAllowed('flag') ? n('div', {
                staticClass: 'teaser__flag teaser__flag--content',
                class : {
                  'teaser__flag--breaking': e.isBreaking,
                  'teaser__flag--sponsored': e.isSponsored
                }
              }, [
                e.flag ? n('span', {
                  staticClass: 'teaser__flag--text'
                }, [
                  e._v('\n            ' + e._s(e.flag) + '\n          ')
                ]) : e._e(),
                e._v(' '),
                e.isSponsored ? n('a', {
                  staticClass: 'teaser__infotag',
                  attrs: {
                    href: e.origin + '/sponsored-content'
                  }
                }, [
                  n('svgicon', {
                    attrs: {
                      height: '13',
                      name: 'ico_info_24',
                      width: '13',
                      color: 'r-#000000 #000000'
                    }
                  })
                ], 1) : e._e(),
                e._v(' '),
                e.isPremium ? n('svgicon', {
                  staticClass: 'icon--pro-nzz',
                  attrs: {
                    name: 'ico_nzz_pro',
                    color: '#000 #fff',
                    width: '32',
                    height: '16'
                  }
                }) : e._e()
              ], 1) : e._e(),
              e._v(' '),
              n(e.headingType, {
                tag: 'component',
                staticClass: 'title'
              }, [
                e.isComponentAllowed('catchline') ? n('Catchline', {
                  attrs: {
                    item: e.item
                  }
                }) : e._e(),
                e._v(' '),
                n('div', {
                  staticClass: 'title__name',
                  domProps: {
                    innerHTML: e._s(e.data.content.title)
                  }
                })
              ], 1)
            ], 1)
          ])
        ]),
        e._v(' '),
        n('div', {
          staticClass: 'metainfo__image'
        }, [
          n('span', {
            domProps: {
              innerHTML: e._s(e.data.content.quelle || '')
            }
          })
        ]),
        e._v(' '),
        n('div', {
          staticClass: 'headline__inner'
        }, [
          e.data.content.lead ? n('p', {
            staticClass: 'headline__lead',
            domProps: {
              innerHTML: e._s(e.data.content.lead)
            }
          }) : e._e(),
          e._v(' '),
          n('ProgressArticleWrapper', [
            n('Progressbar', {
              key: 'articlebar',
              attrs: {
                articlebar: ''
              }
            })
          ], 1),
          e._v(' '),
          n('div', {
            staticClass: 'headline__meta'
          }, [
            n('div', {
              staticClass: 'metainfo metainfo--content'
            }, [
              e.data.styles && 'headline--sponsored' == e.data.styles['header-highlight'] && e.data.content.text ? n('span', {
                staticClass: 'metainfo__item metainfo__item--sponsored',
                domProps: {
                  innerHTML: e._s(e.data.content.text)
                }
              }) : e._e(),
              e._v(' '),
              e.data.content.author && (!e.data.styles || e.data.styles && 'headline--sponsored' != e.data.styles['header-highlight']) ? n('span', {
                staticClass: 'metainfo__item metainfo__item--author',
                domProps: {
                  innerHTML: e._s(e.data.content.author)
                }
              }) : e._e(),
              e._v(' '),
              e.showComments ? n('span', {
                staticClass: 'metainfo__item metainfo__item--comments',
                on: {
                  click: e.openComments
                }
              }, [
                e._v('\n          ' + e._s(e.commentsLabel) + '\n        ')
              ]) : e._e(),
              e._v(' '),
              e.isSignificantUpdate ? n('span', {
                staticClass: 'metainfo__item metainfo__item--updated'
              }, [
                e._v('\n          Aktualisiert\n        ')
              ]) : e._e(),
              e._v(' '),
              n('time', {
                staticClass: 'metainfo__item metainfo__item--date',
                attrs: {
                  datetime: ''
                }
              }, [
                e._v('\n          ' + e._s(e.publicationDate) + '\n        ')
              ])
            ]),
            e._v(' '),
            n('div', {
              staticClass: 'headline__meta-extra'
            }, [
              n('Actionbar', {
                key: 'header-actionbar',
                attrs: {
                  horizontal: 'right',
                  position: 'header',
                  origin: 'header'
                }
              })
            ], 1)
          ])
        ], 1)
      ])
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  431: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      extends : n(99).default
    },
    o = (n(770), n(1214), n(1)),
    component = Object(o.a) (r, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return e.qData.html ? n('div', {
        staticClass: 'widget widget--qembed widget--qembed--page'
      }, [
        n('div', {
          domProps: {
            innerHTML: e._s(e.htmlPreservedScripts)
          }
        })
      ]) : e._e()
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  441: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      extends : n(99).default
    },
    o = (n(770), n(1252), n(1)),
    component = Object(o.a) (r, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return e.qData.html ? n('div', {
        staticClass: 'widget widget--qembed widget--qembed--page'
      }, [
        n('div', {
          domProps: {
            innerHTML: e._s(e.htmlPreservedScripts)
          }
        })
      ]) : e._e()
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  455: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(19),
    o = {
      name: 'FixedFooter',
      components: {
        Bottombar: function () {
          return n.e(5).then(n.bind(null, 447))
        },
        Snackbars: n(373).default,
        ConversionElements: function () {
          return Promise.all([n.e(1),
          n.e(8)]).then(n.bind(null, 86))
        },
        AudioPlayer: function () {
          return Promise.all([n.e(1),
          n.e(0)]).then(n.bind(null, 444))
        }
      },
      data: function () {
        return {
          minHeight: 0
        }
      },
      computed: {
        scrollDown: function () {
          return r.store.delayedScrollDown && this.isSnippetActive
        },
        isMobileBreakpoint: function () {
          return r.store.isMobileBreakpoint
        },
        isMobileMenuActive: function () {
          return this.$store.state.isMobileMenuActive
        },
        isReducedArticle: function () {
          return this.$store.state.isReducedArticle
        },
        isSnippetActive: function () {
          return (!this.$store.state.metadata || !['longformvisual'].includes(this.$store.state.metadata.layout)) && (this.$store.getters.isSnippetActive('stickybars') || this.$store.getters.isSnippetActive('disruptiveoverlays'))
        },
        isArticle: function () {
          return 'Article' === this.$store.state.header.pageType
        },
        actionbarActive: function () {
          return !!(this.$store.state.metadata && [
            'longformvisual'
          ].includes(this.$store.state.metadata.layout) && r.store.scrollPosition <= 56) || this.scrollDown && this.isMobileBreakpoint && !this.isSnippetActive && this.isArticle && !this.isReducedArticle
        },
        hasAudioPlayer: function () {
          return this.$store.getters.hasAudioPlayer
        },
        showBottomBar: function () {
          return !this.isSnippetActive && !this.isMobileMenuActive
        }
      },
      watch: {
        isSnippetActive: function () {
          this.$nextTick(this.setMinHeight)
        }
      },
      mounted: function () {
        this.isSnippetActive && this.setMinHeight(),
        this.$el.addEventListener('resize', this.setMinHeight)
      },
      beforeDestroy: function () {
        this.isSnippetActive && this.setMinHeight(),
        this.$el.removeEventListener('resize', this.setMinHeight)
      },
      methods: {
        setMinHeight: function () {
          var e = this.$refs.fixedfooter.scrollHeight,
          t = this.$refs.audioplayer;
          t && (e -= t.$el.scrollHeight),
          this.minHeight = e
        }
      }
    },
    c = (n(1377), n(1)),
    component = Object(c.a) (o, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('div', {
        style: {
          'min-height': e.minHeight + 'px'
        }
      }, [
        n('div', {
          ref: 'fixedfooter',
          staticClass: 'fixed-footer',
          class : {
            'fixed-footer--scroll-down': e.actionbarActive
          }
        }, [
          n('div', {
            staticClass: 'fixed-footer__container fixed-footer__container--top'
          }, [
            n('Snackbars'),
            e._v(' '),
            e.hasAudioPlayer ? n('AudioPlayer', {
              ref: 'audioplayer'
            }) : e._e()
          ], 1),
          e._v(' '),
          n('div', {
            staticClass: 'fixed-footer__container fixed-footer__container--bottom'
          }, [
            e.$store.getters.commentsOpen ? e._e() : n('ConversionElements', {
              key: 'fixed-footer',
              attrs: {
                filter: 'fixed-footer',
                'element-types': [
                  'stickybars',
                  'feedback'
                ]
              }
            }),
            e._v(' '),
            e.showBottomBar ? n('Bottombar') : e._e()
          ], 1)
        ])
      ])
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  456: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(7),
    o = n.n(r),
    c = n(14),
    l = n.n(c),
    d = n(31),
    m = n(264),
    h = n(19);
    n.e(5).then(n.t.bind(null, 1587, 7));
    var f = {
      components: {
        nzzLink: d.default
      },
      mixins: [
        m.a
      ],
      data: function () {
        var e,
        t = [
        ];
        return 'amp' !== this.$store.state.isrendition && null !== (e = this.$config.footerIframeAdvertisements) && void 0 !== e && e.length && t.push.apply(t, o() (this.$config.footerIframeAdvertisements)),
        {
          loaded: !1,
          footerIframeAdvertisements: t,
          hydrated: 0
        }
      },
      computed: {
        currentLayout: function () {
          return h.store.isMobileBreakpoint ? 'mobile' : 'desktop'
        },
        iframeAdvertisements: function () {
          var e = this;
          return this.footerIframeAdvertisements.map((function (t) {
            return t[e.currentLayout]
          })).filter(Boolean)
        },
        footerBillboardAdvertisementId: function () {
          return !1
        },
        footerNavigation: function () {
          return this.$store.getters.footerNavigationSections
        },
        footerArticleNavigation: function () {
          return this.isDE ? this.$store.getters.footerArticleSectionDE : this.$store.getters.footerArticleSection
        },
        subscribedUser: function () {
          return this.$store.getters.hasAboNZZ
        },
        isStartseite: function () {
          return this.$store.getters.isStartseite
        },
        articleFooterButton: function () {
          var button = this.$config.articleFooterButton,
          e = this.$store.getters.hasAboNZZaS ? ''.concat(this.$config.nzzAboBase).concat(this.$config.nzzKombiAboCampaign) : ''.concat(this.$config.nzzAboBase).concat(this.$config.nzzAboCampaign);
          return {
            title: button.title,
            url: this.hasParameter(e)
          }
        },
        printFooter: function () {
          return this.$config.printFooter
        },
        isFullwidth: function () {
          try {
            return 'fullwidth' === this.$store.state.metadata.layout
          } catch (e) {
            return !1
          }
        },
        headingType: function () {
          return 'h2'
        },
        throttledIsVisible: function () {
          return l() (this.isVisibleInViewport, 1000)
        }
      },
      mounted: function () {
        this.loaded = !0,
        window.addEventListener('scroll', this.throttledIsVisible)
      },
      destroyed: function () {
        window.removeEventListener('scroll', this.throttledIsVisible)
      },
      methods: {
        isVisibleInViewport: function () {
          this.$el.getBoundingClientRect().top < window.innerHeight && (this.hydrated = 1, window.removeEventListener('scroll', this.throttledIsVisible))
        }
      }
    },
    _ = (n(1379), n(1)),
    component = Object(_.a) (f, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return e.isFullwidth ? e._e() : n('div', {
        staticClass: 'pageelement footer',
        attrs: {
          id: 'footer'
        }
      }, [
        e.footerBillboardAdvertisementId && e.hydrated ? n('div', {
          staticClass: 'pageelement pageelement--advertisement'
        }, [
          n('div', {
            staticClass: 'resor'
          }, [
            n('div', {
              staticClass: 'resor__item',
              attrs: {
                id: e.footerBillboardAdvertisementId,
                'data-hydrated': e.$store.state.isrendition.indexOf('webview') > - 1 ? 1 : e.hydrated
              }
            })
          ])
        ]) : e._e(),
        e._v(' '),
        e._l(e.iframeAdvertisements, (function (t, r) {
          return e.hydrated ? n('div', {
            key: 'footer-iframe-ad-' + r,
            staticClass: 'pageelement pageelement--advertisement',
            attrs: {
              'data-hydrated': e.$store.state.isrendition.indexOf('webview') > - 1 ? 1 : e.hydrated
            },
            domProps: {
              innerHTML: e._s(t)
            }
          }) : e._e()
        })),
        e._v(' '),
        !e.isStartseite && e.loaded ? n('div', {
          staticClass: 'footer__article'
        }, [
          e.articleFooterButton && !e.subscribedUser ? n('a', {
            staticClass: 'footer__link--button',
            attrs: {
              href: e.articleFooterButton.url
            }
          }, [
            n('button', {
              staticClass: 'button button--white footer__button',
              attrs: {
                role: 'button',
                'aria-label': e.articleFooterButton.title
              }
            }, [
              e._v('\n        ' + e._s(e.articleFooterButton.title) + '\n        '),
              n('svgicon', {
                attrs: {
                  height: '11',
                  name: 'ico_back',
                  width: '16',
                  color: 'r-#000000',
                  fill: !1
                }
              })
            ], 1)
          ]) : e._e(),
          e._v(' '),
          n('ul', {
            staticClass: 'footer__section footer__section--article'
          }, e._l(e.footerArticleNavigation.items, (function (t) {
            return n('li', {
              key: t.id,
              staticClass: 'footer__item footer__item--article'
            }, [
              n('nzz-link', {
                staticClass: 'footer__link',
                attrs: {
                  'data-nzz-referrer': 'footermenuLevel1',
                  'data-nzz-tid': 'menu-level-1',
                  url: t.url
                }
              }, [
                e._v('\n          ' + e._s(t.name) + '\n        ')
              ])
            ], 1)
          })), 0),
          e._v(' '),
          e._t('default')
        ], 2) : e._l(e.footerNavigation, (function (t) {
          return n('div', {
            key: t.id,
            staticClass: 'footer__column',
            class : {
              'footer__column--nomobile': t.hideOnMobile
            }
          }, e._l(t.sections, (function (section) {
            return n('div', {
              key: section.id,
              staticClass: 'footer__section',
              class : {
                'footer__section--nomobile': section.hideOnMobile
              }
            }, [
              n(e.headingType, {
                tag: 'component',
                staticClass: 'footer__section--title'
              }, [
                e._v('\n        ' + e._s(section.title) + '\n      ')
              ]),
              e._v(' '),
              n('ul', {
                staticClass: 'footer__section--list'
              }, e._l(section.items, (function (t) {
                return n('li', {
                  key: t.id,
                  staticClass: 'footer__item'
                }, [
                  n('nzzLink', {
                    staticClass: 'footer__link',
                    attrs: {
                      'data-nzz-referrer': 'footermenuLevel1',
                      'data-nzz-tid': 'menu-level-1',
                      url: e.isAboBase(t)
                    }
                  }, [
                    e._v('\n            ' + e._s(t.name) + '\n          ')
                  ])
                ], 1)
              })), 0)
            ], 1)
          })), 0)
        })),
        e._v(' '),
        n('div', {
          staticClass: 'footer__print'
        }, [
          e._v('\n    ' + e._s(e.printFooter) + '\n  ')
        ])
      ], 2)
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  457: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      props: {
        element: {
          type: Object,
        default:
          function () {
          }
        }
      },
      methods: {
      }
    },
    o = n(1),
    component = Object(o.a) (r, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('div', {
        staticClass: 'form__group'
      }, [
        n('label', {
          attrs: {
            for : e.element.htmlName,
            'data-editor': 'element-text-' + (e.element.index || 0 === e.element.index ? '-' + e.element.index : '')
          }
        }, [
          e._v(e._s(e.element.label))
        ]),
        e._v(' '),
        n('input', {
          staticClass: 'form__field',
          attrs: {
            type: 'text',
            name: e.element.htmlName,
            placeholder: e.element.placeholder,
            required: e.element.required
          }
        })
      ])
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  461: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(3),
    o = n.n(r),
    c = n(69),
    l = n(265),
    d = n(752),
    m = n(1387),
    h = n.n(m);
    function f(e, t) {
      var n;
      if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (n = function (e, t) {
          if (!e) return;
          if ('string' == typeof e) return _(e, t);
          var n = Object.prototype.toString.call(e).slice(8, - 1);
          'Object' === n && e.constructor && (n = e.constructor.name);
          if ('Map' === n || 'Set' === n) return Array.from(e);
          if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
        }(e)) || t && e && 'number' == typeof e.length) {
          n && (e = n);
          var i = 0,
          r = function () {
          };
          return {
            s: r,
            n: function () {
              return i >= e.length ? {
                done: !0
              }
               : {
                done: !1,
                value: e[i++]
              }
            },
            e: function (e) {
              throw e
            },
            f: r
          }
        }
        throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
      }
      var o,
      c = !0,
      l = !1;
      return {
        s: function () {
          n = e[Symbol.iterator]()
        },
        n: function () {
          var e = n.next();
          return c = e.done,
          e
        },
        e: function (e) {
          l = !0,
          o = e
        },
        f: function () {
          try {
            c || null == n.return || n.return()
          } finally {
            if (l) throw o
          }
        }
      }
    }
    function _(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
      return n
    }
    function v(object, e) {
      var t = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(object);
        e && (n = n.filter((function (e) {
          return Object.getOwnPropertyDescriptor(object, e).enumerable
        }))),
        t.push.apply(t, n)
      }
      return t
    }
    function w(e) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {
        };
        i % 2 ? v(Object(source), !0).forEach((function (t) {
          o() (e, t, source[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : v(Object(source)).forEach((function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
        }))
      }
      return e
    }
    n.e(5).then(n.t.bind(null, 1574, 7)),
    n.e(5).then(n.t.bind(null, 1567, 7));
    var y = {
      0: [
      ],
      1: [
      ],
      2: [
      ],
      3: [
      ],
      4: [
      ],
      5: [
      ],
      6: [
      ],
      7: [
      ],
      8: [
      ],
      9: [
      ]
    },
    x = [
      'ArrowUp',
      'ArrowDown'
    ],
    z = {
      components: {
        ImageDescription: function () {
          return n.e(1).then(n.bind(null, 367))
        },
        ImageShare: function () {
          return n.e(0).then(n.bind(null, 462))
        },
        SliderProgress: function () {
          return n.e(0).then(n.bind(null, 476))
        },
        SliderButton: function () {
          return n.e(0).then(n.bind(null, 475))
        }
      },
      props: {
        onClose: {
          type: Function,
        default:
          function () {
          }
        },
        onVisible: {
          type: Function,
        default:
          function () {
          }
        },
        onChange: {
          type: Function,
        default:
          function () {
          }
        },
        data: {
          type: Object,
        default:
          function () {
            return {
              content: {
                image: {
                }
              }
            }
          }
        },
        metadata: {
          type: Object,
        default:
          function () {
            return this.$store.state.metadata
          }
        },
        slides: {
          type: Array,
        default:
          function () {
            return [this.data]
          }
        },
        preloadCount: {
          type: Number,
        default:
          2
        },
        controls: {
          type: Boolean,
        default:
          !0
        },
        shareUrl: {
          type: String,
        default:
          function () {
            return this.$store.state.seoData.canonical
          }
        },
        shareSlides: {
          type: Boolean,
        default:
          !0
        },
        positioning: {
          type: Object,
        default:
          function () {
            return {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              paddingX: 0,
              paddingY: 0
            }
          }
        },
        keyboardClose: {
          type: Boolean,
        default:
          !0
        },
        wheelClose: {
          type: Boolean,
        default:
          !0
        },
        resizeClose: {
          type: Boolean,
        default:
          !0
        },
        gestureClose: {
          type: Boolean,
        default:
          !0
        },
        arrowClose: {
          type: Boolean,
        default:
          !0
        },
        getImageUrl: {
          type: Function,
        default:
          c.a
        },
        window: {
          type: [
            Object,
            Window
          ].filter(Boolean),
        default:
          function () {
            return window
          }
        }
      },
      data: function () {
        return {
          slider: null,
          sliderIndex: 0,
          sliderProgress: 0,
          backgroundEnabled: !1,
          extraAttached: !1,
          extraToggleEnabled: !0
        }
      },
      computed: {
        flickityOptions: function () {
          return {
            contain: !0,
            draggable: !0,
            prevNextButtons: !1,
            pageDots: !1,
            initialIndex: this.initialIndex,
            setGallerySize: !1
          }
        },
        neverDisableSliderButtons: function () {
          return !1
        },
        isSliderProgress: function () {
          return !0
        },
        isLogo: function () {
          return !1
        },
        isRegio: function () {
          return !1
        },
        isBellevue: function () {
          return !1
        },
        isSlideshow: function () {
          return this.slides.length > 1
        },
        sizedImages: function () {
          var e = this;
          return this.slides.map((function (t) {
            var content = t.content,
            image = content.image,
            n = Math.min(e.window.innerWidth / image.width, e.window.innerHeight / image.height),
            r = e.getImageUrl({
              url: image.url,
              scaleWidth: image.width * n * e.window.devicePixelRatio,
              scaleHeight: image.height * n * e.window.devicePixelRatio
            });
            return w(w({
            }, content), {
            }, {
              image: w(w({
              }, image), {
              }, {
                url: r
              })
            })
          }))
        },
        initialIndex: function () {
          return this.slides.indexOf(this.data)
        },
        initialProgress: function () {
          return this.initialIndex / (this.slides.length - 1)
        },
        shareUrlExtra: function () {
          var e = [
          ];
          return this.isSlideshow && this.shareSlides && e.push('#slide='.concat(this.sliderIndex)),
          e.join('')
        },
        getSelectedSlide: function () {
          return this.slider ? this.slider.selectedIndex : 0
        },
        sliderIndexStart: function () {
          return this.sliderIndex - this.preloadCount
        },
        sliderIndexEnd: function () {
          return this.sliderIndex + this.preloadCount
        },
        slideToShare: function () {
          var e = (this.slides[this.sliderIndex] || {
          }).content,
          content = void 0 === e ? {
          }
           : e,
          t = content.caption,
          caption = void 0 === t ? '' : t;
          return {
            content: w(w({
            }, content), {
            }, {
              caption: Object(l.b) (caption)
            })
          }
        }
      },
      mounted: function () {
        var e = this;
        if (Object(d.disableBodyScroll) (), this.isRegio) try {
          document.querySelector('div.header').classList.add('image-lightbox-on')
        } catch (e) {
          console.log(e)
        }
        window.addEventListener('keyup', this.keyboardCloseLightbox),
        window.addEventListener('resize', this.resizeCloseLightbox),
        window.addEventListener('popstate', this.popstateCloseLightbox),
        this.extraAttached = !0,
        this.sliderIndex = this.initialIndex,
        this.sliderProgress = this.initialProgress,
        this.preload(this.sizedImages[this.sliderIndex].image.url),
        window.deferred((function () {
          e.track('display')
        }))
      },
      destroyed: function () {
        if (window.removeEventListener('keyup', this.keyboardCloseLightbox), window.removeEventListener('resize', this.resizeCloseLightbox), window.removeEventListener('popstate', this.popstateCloseLightbox), this.slider && this.slider.destroy(), this.isRegio) try {
          document.querySelector('div.header').classList.remove('image-lightbox-on')
        } catch (e) {
          console.log(e)
        }
      },
      methods: {
        track: function (e) {
          window.dispatchEvent(new window.CustomEvent('tms:event:push', {
            detail: {
              eventInfo: {
                eventName: 'Image Gallery Interaction',
                eventAction: e,
                componentID: this.metadata.nzzId,
                componentName: this.metadata.title,
                eventNonInteractive: !1,
                eventPosition: this.sliderIndex + 1,
                type: 'image'
              },
              category: {
                primaryCategory: 'image gallery',
                subCategory1: 'Photoswipe',
                subCategory2: this.slides[this.sliderIndex].content.image.url
              }
            }
          }))
        },
        flickityInit: function (e) {
          var t = this;
          this.slider = e,
          this.slider.on('scroll', (function () {
            return t.extraToggleEnabled = !1
          })),
          this.slider.on('settle', (function () {
            return t.extraToggleEnabled = !0
          })),
          this.slider.on('select', (function () {
            return setTimeout((function () {
              return t.extraToggleEnabled = !0
            }), 0)
          })),
          this.slider.on('change', (function (e) {
            t.sliderIndex = e,
            t.onChange(e),
            t.track('display')
          })),
          this.slider.on('scroll', (function (progress) {
            return t.sliderProgress = progress
          })),
          this.slider.focus()
        },
        closeLightbox: function (e) {
          Object(d.enableBodyScroll) (),
          this.backgroundEnabled = !1,
          this.track('close'),
          this.onClose('boolean' == typeof e && e)
        },
        storeUserTouch: function (e) {
          if (this.gestureClose) {
            var t,
            n = f(e.touches);
            try {
              for (n.s(); !(t = n.n()).done; ) {
                var r = t.value,
                o = r.clientX,
                c = r.clientY;
                y[r.identifier] = [
                  {
                    clientX: o,
                    clientY: c
                  }
                ]
              }
            } catch (e) {
              n.e(e)
            } finally {
              n.f()
            }
          }
        },
        gestureCloseLightbox: h() ((function (e) {
          var t = e.touches;
          if (this.gestureClose && 1 === t.length) {
            var n = t[0],
            r = n.clientX,
            o = n.clientY,
            c = n.identifier,
            l = {
              clientX: r,
              clientY: o
            },
            d = y[c].slice( - 2),
            m = d.map((function (e, t, n) {
              return [e,
              n[t + 1] || l]
            }));
            2 === m.length && m.every((function (e) {
              return function (e, t) {
                return !(!e || !t) && Math.atan2(Math.abs(t.clientY - e.clientY), Math.abs(t.clientX - e.clientX)) > Math.PI / 2 - 0.2
              }(e[0], e[1])
            })) ? this.closeLightbox() : (d.push(l), y[c] = d)
          }
        }), 10),
        keyboardCloseLightbox: function (e) {
          this.keyboardClose && 'Escape' === e.key && this.closeLightbox()
        },
        wheelCloseLightbox: function () {
          this.wheelClose && this.closeLightbox()
        },
        arrowCloseLightbox: function (e) {
          this.arrowClose && x.includes(e.key) && this.closeLightbox()
        },
        resizeCloseLightbox: function () {
          this.resizeClose && this.closeLightbox()
        },
        popstateCloseLightbox: function () {
          this.closeLightbox(!0)
        },
        extraToggle: function () {
          this.extraToggleEnabled && (this.extraAttached = !this.extraAttached)
        },
        preload: function (e) {
          var t = this,
          img = new Image;
          img.onload = function () {
            t.onVisible(),
            t.backgroundEnabled = !0
          },
          img.src = e
        },
        slideForward: function () {
          this.slider.next(),
          this.$emit('select', event),
          this.slider.focus()
        },
        slideBack: function () {
          this.slider.previous(),
          this.$emit('select', event),
          this.slider.focus()
        },
        slideImage: function (image, e) {
          if (e >= this.sliderIndexStart && e <= this.sliderIndexEnd) return image.url
        },
        slideAlt: function (text) {
          return Object(l.b) (text)
        }
      }
    },
    k = (n(983), n(1389), n(1)),
    component = Object(k.a) (z, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('div', {
        staticClass: 'image-zoom image-zoom--lightbox',
        style: {
          top: e.positioning.top,
          right: e.positioning.right,
          bottom: e.positioning.bottom,
          left: e.positioning.left
        },
        attrs: {
          'data-nzz-tid': 'image-lightbox'
        },
        on: {
          '&wheel': function (t) {
            return e.wheelCloseLightbox(t)
          },
          '&keydown': function (t) {
            return e.arrowCloseLightbox(t)
          },
          '&touchmove': function (t) {
            return e.gestureCloseLightbox(t)
          },
          '&touchstart': function (t) {
            return e.storeUserTouch(t)
          }
        }
      }, [
        e.isBellevue ? n('transition', {
          attrs: {
            name: 'fade'
          }
        }, [
          e.isLogo && e.extraAttached ? n('a', {
            staticClass: 'image-zoom__logo',
            attrs: {
              href: e.$config.clientBaseUrl,
              'data-nzz-referrer': 'galleryLogo'
            }
          }, [
            n('svgicon', {
              attrs: {
                name: 'logo_mobile',
                height: '50',
                width: '50',
                color: '#060821',
                fill: !0
              }
            })
          ], 1) : e._e()
        ]) : [
          e.isLogo ? n('a', {
            staticClass: 'image-zoom__logo',
            attrs: {
              href: e.$config.clientBaseUrl,
              'data-nzz-referrer': 'galleryLogo'
            }
          }, [
            n('svgicon', {
              attrs: {
                name: 'logo_mobile',
                height: '50',
                width: '50',
                color: '#060821',
                fill: !0
              }
            })
          ], 1) : e._e()
        ],
        e._v(' '),
        n('div', {
          staticClass: 'image-zoom__bg',
          class : {
            'image-zoom__bg--visible': e.backgroundEnabled
          }
        }),
        e._v(' '),
        n('flickity', {
          staticClass: 'image-zoom__slider',
          attrs: {
            options: e.flickityOptions
          },
          on: {
            init: e.flickityInit
          }
        }, e._l(e.sizedImages, (function (t, r) {
          var image = t.image,
          caption = t.caption;
          return n('div', {
            key: r,
            staticClass: 'image-zoom__holder',
            style: {
              padding: e.positioning.paddingY + ' ' + e.positioning.paddingX
            }
          }, [
            n('img', {
              staticClass: 'image-zoom__content',
              attrs: {
                src: e.slideImage(image, r),
                alt: e.slideAlt(caption),
                'data-nzz-tid': 'image-lightbox-content'
              },
              on: {
                click: e.extraToggle
              }
            })
          ])
        })), 0),
        e._v(' '),
        n('transition', {
          attrs: {
            name: 'fade'
          }
        }, [
          e.slides.length > 1 && e.extraAttached ? n('div', {
            staticClass: 'image-zoom__non-image image-zoom__counter'
          }, [
            n('span', {
              attrs: {
                'data-nzz-tid': 'image-lightbox-counter-current'
              }
            }, [
              e._v('\n        ' + e._s(e.sliderIndex + 1) + '\n      ')
            ]),
            e._v('\n      /\n      '),
            n('span', {
              attrs: {
                'data-nzz-tid': 'image-lightbox-counter-total'
              }
            }, [
              e._v('\n        ' + e._s(e.slides.length) + '\n      ')
            ])
          ]) : e._e()
        ]),
        e._v(' '),
        n('transition', {
          attrs: {
            name: 'fade'
          }
        }, [
          e.controls && e.extraAttached ? n('div', {
            ref: 'controls',
            staticClass: 'image-zoom__non-image image-zoom__controls',
            attrs: {
              'data-nzz-tid': 'image-lightbox-controls'
            }
          }, [
            n('ImageShare', {
              attrs: {
                data: e.slideToShare,
                url: e.shareUrl,
                'extra-params': e.shareUrlExtra,
                metadata: e.metadata
              }
            }, [
              n('svgicon', {
                staticClass: 'image-zoom__control',
                attrs: {
                  name: 'ico_share_48',
                  width: '56',
                  height: '56',
                  color: e.isRegio ? 'r-#333333' : '#333333',
                  'data-nzz-tid': 'image-share-button'
                }
              })
            ], 1),
            e._v(' '),
            n('span', {
              staticClass: 'image-zoom__control',
              attrs: {
                'data-nzz-tid': 'image-lightbox-close'
              },
              on: {
                click: e.closeLightbox
              }
            }, [
              n('svgicon', {
                attrs: {
                  name: 'ico_close_48',
                  width: '36',
                  height: '36',
                  color: 'r-#333333'
                }
              })
            ], 1)
          ], 1) : e._e()
        ]),
        e._v(' '),
        n('transition', {
          attrs: {
            name: 'fade'
          }
        }, [
          e.extraAttached ? n('div', {
            ref: 'description',
            staticClass: 'image-zoom__non-image image-zoom__description',
            attrs: {
              'data-nzz-tid': 'image-lightbox-caption'
            }
          }, [
            e.isSliderProgress && e.slides.length > 1 ? n('SliderProgress', {
              attrs: {
                count: e.slides.length,
                position: e.sliderProgress,
                'free-scroll': !1
              }
            }) : e._e(),
            e._v(' '),
            n('ImageDescription', {
              attrs: {
                data: e.slides[e.sliderIndex]
              }
            })
          ], 1) : e._e()
        ]),
        e._v(' '),
        e.slides.length > 1 ? n('SliderButton', {
          staticClass: 'slider-button--lightbox',
          attrs: {
            disabled: 0 == e.getSelectedSlide && !e.neverDisableSliderButtons,
            type: 'prev',
            'is-lightbox': !0
          },
          nativeOn: {
            click: function (t) {
              return e.slideBack(t)
            }
          }
        }) : e._e(),
        e._v(' '),
        e.slides.length > 1 ? n('SliderButton', {
          staticClass: 'slider-button--lightbox',
          attrs: {
            disabled: e.getSelectedSlide == e.slides.length - 1 && !e.neverDisableSliderButtons,
            type: 'next',
            'is-lightbox': !0
          },
          nativeOn: {
            click: function (t) {
              return e.slideForward(t)
            }
          }
        }) : e._e()
      ], 2)
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  463: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(3),
    o = n.n(r),
    c = n(6),
    l = n.n(c),
    d = n(753);
    function m(object, e) {
      var t = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(object);
        e && (n = n.filter((function (e) {
          return Object.getOwnPropertyDescriptor(object, e).enumerable
        }))),
        t.push.apply(t, n)
      }
      return t
    }
    function h(e) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {
        };
        i % 2 ? m(Object(source), !0).forEach((function (t) {
          o() (e, t, source[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : m(Object(source)).forEach((function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
        }))
      }
      return e
    }
    var f = {
      props: {
        attached: {
          type: Boolean,
        default:
          !1
        },
        hidden: {
          type: Boolean,
        default:
          !1
        },
        src: {
          type: String,
        default:
          ''
        },
        referenceOverflow: {
          type: Function,
        default:
          function () {
            return [0,
            0]
          }
        },
        data: {
          type: Object,
        default:
          function () {
            return {
              content: {
                image: {
                }
              }
            }
          }
        },
        startPosition: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        },
        targetPosition: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        },
        inDuration: {
          type: Number,
        default:
          320
        },
        outDuration: {
          type: Number,
        default:
          240
        },
        onOpen: {
          type: Function,
        default:
          function () {
          }
        },
        window: {
          type: [
            Object,
            Window
          ].filter(Boolean),
        default:
          function () {
            return window
          }
        },
        minimizedValues: {
          type: Function,
        default:
          function (e) {
            var t = this.padding(),
            n = l() (t, 2),
            r = n[0],
            o = n[1];
            e.style.padding = ''.concat(o, 'px ').concat(r, 'px');
            var c = this.referenceOverflow(e),
            d = l() (c, 2),
            m = d[0],
            h = d[1];
            return {
              top: '-'.concat(o, 'px'),
              bottom: '-'.concat(o + h, 'px'),
              left: '-'.concat(r, 'px'),
              right: '-'.concat(r + m, 'px')
            }
          }
        },
        expandedValues: {
          type: Function,
        default:
          function (e) {
            var t = this.padding(),
            n = l() (t, 2),
            r = n[0],
            o = n[1],
            c = e.getBoundingClientRect(),
            d = c.top,
            m = c.right,
            h = c.bottom,
            f = c.left,
            _ = this.referenceOverflow(),
            v = l() (_, 2),
            w = v[0],
            y = v[1],
            x = this.compensateScrollBar(),
            z = l() (x, 2),
            k = z[0],
            C = z[1];
            return {
              left: ''.concat( - f - r - k, 'px'),
              right: ''.concat(m - document.documentElement.clientWidth - r - w - C, 'px'),
              top: ''.concat( - d - o, 'px'),
              bottom: ''.concat(h - window.innerHeight - o - y, 'px'),
              paddingX: ''.concat(r, 'px'),
              paddingY: ''.concat(o, 'px')
            }
          }
        }
      },
      data: function () {
        return {
          top: null,
          bottom: null,
          left: null,
          right: null,
          paddingX: null,
          paddingY: null
        }
      },
      computed: {
        isLogo: function () {
          return !1
        }
      },
      methods: {
        compensateScrollBar: function () {
          if (!this.$store.state.isMobile) try {
            var e = window.innerWidth - document.documentElement.clientWidth;
            if (e > 0) {
              var t,
              n;
              n = t = Math.ceil(e / 2);
              var r = ~~(document.body.offsetWidth - window.innerWidth - window.scrollX + t);
              return (r > 0 || window.scrollX) && (t = e - (n += r > n ? n : r) + (e % 2 != 0 ? 1 : 0)),
              [
                t,
                n
              ]
            }
          } catch (e) {
            console.log(e)
          }
          return [0,
          0]
        },
        padding: function () {
          return this.window.innerWidth < 768 ? [
            24,
            56
          ] : [
            56,
            56
          ]
        },
        beforeEnter: function (e) {
          Object.entries(this.minimizedValues(e)).forEach((function (t) {
            var n = l() (t, 2),
            r = n[0],
            o = n[1];
            e.style[r] = o
          }))
        },
        enter: function (e, t) {
          var n = this.expandedValues(e);
          this.onOpen(n),
          Object(d.a) (h(h({
          }, n), {
          }, {
            easing: 'easeInOutQuad',
            targets: e,
            duration: this.inDuration,
            complete: t
          })),
          Object(d.a) ({
            targets: this.$refs.background,
            easing: 'easeInOutQuad',
            opacity: 1,
            duration: this.inDuration,
            delay: 150
          })
        },
        leave: function (e, t) {
          Object(d.a) ({
            targets: this.$refs.background,
            easing: 'easeInOutQuad',
            opacity: 0,
            duration: 100
          }),
          Object(d.a) (h(h({
          }, this.minimizedValues(e)), {
          }, {
            targets: e,
            easing: 'easeInOutQuad',
            duration: this.outDuration,
            complete: t
          }))
        }
      }
    },
    _ = (n(983), n(1)),
    component = Object(_.a) (f, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('transition', {
        attrs: {
          css: !1
        },
        on: {
          'before-enter': e.beforeEnter,
          enter: e.enter,
          leave: e.leave
        }
      }, [
        e.attached ? n('div', {
          staticClass: 'image-zoom',
          attrs: {
            'data-nzz-tid': 'image-zoom'
          }
        }, [
          n('div', {
            ref: 'background',
            staticClass: 'image-zoom__bg'
          }),
          e._v(' '),
          n('div', {
            staticClass: 'image-zoom__holder'
          }, [
            n('img', {
              staticClass: 'image-zoom__content',
              attrs: {
                src: e.src,
                'data-nzz-tid': 'image-zoomed'
              }
            })
          ])
        ]) : e._e()
      ])
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  470: function (e, t, n) {
    'use strict';
    n.r(t);
    n.e(5).then(n.t.bind(null, 1565, 7));
    var r = {
      components: {
        Overlay: function () {
          return n.e(7).then(n.bind(null, 357))
        },
        SearchForm: function () {
          return n.e(7).then(n.bind(null, 350))
        }
      },
      methods: {
        searchbarClose: function () {
          this.$store.dispatch('setHeader', {
            key: 'searchbar',
            value: !1
          })
        },
        onSearchformTransition: function () {
          this.$refs.searchform && this.$refs.searchform.focusInput(this.$store.state.header.searchbar)
        }
      }
    },
    o = (n(1408), n(1)),
    component = Object(o.a) (r, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('Overlay', {
        attrs: {
          open: e.$store.state.header.searchbar,
          transition: 'slide-top'
        },
        on: {
          close: e.searchbarClose,
          afterEnter: e.onSearchformTransition
        }
      }, [
        n('div', {
          staticClass: 'searchbar'
        }, [
          n('div', {
            staticClass: 'searchbar__inner'
          }, [
            n('SearchForm', {
              ref: 'searchform',
              attrs: {
                classes: 'searchform--header',
                autocomplete: !0
              },
              on: {
                submit: e.searchbarClose
              },
              scopedSlots: e._u([{
                key: 'searchicon',
                fn: function () {
                  return [n('button', {
                    staticClass: 'button searchbar__icon searchbar__search'
                  }, [
                    n('svgicon', {
                      attrs: {
                        height: '46',
                        name: 'ico_search_48',
                        width: '46',
                        color: 'r-#000000'
                      }
                    })
                  ], 1)]
                },
                proxy: !0
              }
              ])
            }),
            e._v(' '),
            n('button', {
              staticClass: 'button searchbar__icon searchbar__close',
              on: {
                click: e.searchbarClose
              }
            }, [
              n('svgicon', {
                attrs: {
                  name: 'nzz_close',
                  width: '12',
                  height: '12',
                  color: 'r-#000000'
                }
              })
            ], 1)
          ], 1)
        ])
      ])
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  482: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(65);
    n.e(5).then(n.t.bind(null, 1565, 7));
    var o = {
      name: 'WebAlertBreaking',
      props: {
        notification: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        }
      },
      methods: {
        close: function (e) {
          Object(r.b) (e.breakingId, this.$config),
          this.$store.dispatch('removeExclusiveNotification', e.breakingId)
        },
        navigateTo: function (e) {
          this.close(e);
          try {
            this.$router.push(e.metadata.urlPath)
          } catch (e) {
            console.log(e)
          }
        }
      }
    },
    c = (n(763), n(1)),
    component = Object(c.a) (o, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('transition', {
        key: e.notification.breakingId,
        attrs: {
          name: 'small-thing',
          appear: ''
        }
      }, [
        n('div', {
          staticClass: 'webalert__item'
        }, [
          n('div', {
            staticClass: 'webalert__text',
            on: {
              click: function (t) {
                return e.navigateTo(e.notification)
              }
            }
          }, [
            e._v('\n      ' + e._s(e.notification.metadata.title) + '\n    ')
          ]),
          e._v(' '),
          n('div', {
            staticClass: 'webalert__close',
            on: {
              click: function (t) {
                return e.close(e.notification)
              }
            }
          }, [
            n('svgicon', {
              staticClass: 'webalert__closeicon',
              attrs: {
                name: 'nzz_close',
                height: '12',
                width: '12',
                color: 'r-#ffffff'
              }
            })
          ], 1)
        ])
      ])
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  483: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(19),
    o = {
      name: 'WebAlertBubble',
      props: {
        notification: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        }
      },
      computed: {
        isArticle: function () {
          return 'Article' === this.$store.state.header.pageType
        },
        scrollDown: function () {
          var e = r.store.delayedScrollUp,
          t = r.store.delayedScrollDown;
          return t || !t && !e
        },
        isMobileBreakpoint: function () {
          return r.store.isMobileBreakpoint
        },
        fixed: function () {
          return r.store.fixedHeader
        },
        isRendition: function () {
          return this.$store.state.isrendition
        },
        reloadLive: function () {
          var e = this.$store.getters.getMetadata.nzzId;
          return !!this.isRendition && '\n          window.vamp.updateUri(\'/article/'.concat('webview' === this.isRendition ? e.replace('ld.', '') : e, '\') &&\n          document.querySelector(\'.webalert\').classList.remove(\'active\')\n        ')
        }
      },
      methods: {
        navigateTo: function () {
          var e = document.querySelector('.time');
          e || (e = document.querySelector('.headline + *')),
          window.scrollTo({
            top: e.offsetTop - 56 - 33 - 50,
            left: 0,
            behavior: 'smooth'
          })
        }
      }
    },
    c = (n(763), n(1)),
    component = Object(c.a) (o, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return e.notification.metadata && e.notification.metadata.title ? n('div', {
        staticClass: 'webalert__holder--bubble',
        class : {
          'webalert__holder-on-top--fixed': e.fixed && (e.isArticle || !e.isMobileBreakpoint) || e.isRendition,
          'webalert__holder--scroll-down': e.isArticle && e.isMobileBreakpoint && e.scrollDown,
          'webalert__holder--app': e.isRendition
        },
        on: {
          click: function (t) {
            return e.navigateTo()
          }
        }
      }, [
        n('div', {
          staticClass: 'webalert__item',
          attrs: {
            onclick: e.reloadLive
          }
        }, [
          n('div', {
            staticClass: 'webalert__text'
          }, [
            e._v('\n      ' + e._s(e.notification.metadata.title) + '\n    ')
          ])
        ])
      ]) : e._e()
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  484: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(1014);
    n.e(5).then(n.t.bind(null, 1565, 7));
    var o = {
      name: 'WebAlertInfo',
      props: {
        notification: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        }
      },
      methods: {
        close: function (e) {
          var t = Object(r.a) ('closedWebInfos');
          t.push(e.text),
          Object(r.b) ('closedWebInfos', t);
          try {
            window.localStorage.setItem('closedWebInfos', JSON.stringify(t))
          } catch (e) {
            console.log(JSON.stringify(e))
          }
          this.$store.commit('setWebAlert', {
            key: 'closedWebInfos',
            value: t
          })
        }
      }
    },
    c = (n(763), n(1)),
    component = Object(c.a) (o, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('transition', {
        key: e.notification.id,
        attrs: {
          name: 'small-thing',
          appear: ''
        }
      }, [
        n('div', {
          staticClass: 'webalert__item webalert__item--userinfo'
        }, [
          n('div', {
            staticClass: 'webalert__text',
            domProps: {
              innerHTML: e._s(e.notification.text)
            }
          }),
          e._v(' '),
          n('div', {
            staticClass: 'webalert__close',
            on: {
              click: function (t) {
                return e.close(e.notification)
              }
            }
          }, [
            n('svgicon', {
              staticClass: 'webalert__closeicon',
              attrs: {
                name: 'nzz_close',
                height: '12',
                width: '12',
                color: 'r-#000000'
              }
            })
          ], 1)
        ])
      ])
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  485: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(7),
    o = n.n(r),
    c = n(1014),
    l = n(19);
    n.e(5).then(n.t.bind(null, 1565, 7));
    var d = {
      name: 'WebAlert',
      components: {
        WebAlertBreaking: function () {
          return Promise.resolve().then(n.bind(null, 482))
        },
        WebAlertInfo: function () {
          return Promise.resolve().then(n.bind(null, 484))
        },
        WebAlertBubble: function () {
          return Promise.resolve().then(n.bind(null, 483))
        }
      },
      computed: {
        fixed: function () {
          return !this.isArticle || l.store.fixedHeader
        },
        webAlertBreaking: function () {
          var e = this.$store.getters.getWebalertBreaking,
          t = [
          ];
          try {
            t.push.apply(t, o() (JSON.parse(window.localStorage.getItem('closedBreakingArticles') || '{"closedBreakingArticles": []}').closedBreakingArticles))
          } catch (e) {
            console.log(e)
          }
          return e.filter((function (e) {
            return !t.includes(e.breakingId)
          }))
        },
        webAlertInfo: function () {
          return this.$store.getters.getWebalertInfo
        },
        webAlertBubble: function () {
          return this.$store.getters.getWebAlertBubble
        },
        isArticle: function () {
          return 'Article' === this.$store.state.header.pageType
        },
        isMobileMenuActive: function () {
          return this.$store.state.isMobileMenuActive
        }
      },
      watch: {
        isMobileMenuActive: function (e) {
          var t = this;
          e ? this.$el.classList.add('webalert--menu-active') : setTimeout((function () {
            t.$el.classList.remove('webalert--menu-active')
          }), 200)
        }
      },
      mounted: function () {
        var data = Object(c.a) ('closedWebInfos');
        this.$store.commit('setWebAlert', {
          key: 'closedWebInfos',
          value: data
        })
      }
    },
    m = (n(763), n(1)),
    component = Object(m.a) (d, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('div', {
        key: e.$store.state.isrendition + '-webalert',
        staticClass: 'webalert',
        class : {
          'webalert--fixed': e.fixed,
          'webalert--app': e.$store.state.isrendition,
          active: !e.$store.state.isrendition && e.webAlertBubble
        }
      }, [
        e.$store.state.isrendition ? e._e() : n('div', {
          staticClass: 'webalert__holder'
        }, [
          n('div', {
            staticClass: 'webalert__container'
          }, [
            e._l(e.webAlertInfo, (function (e) {
              return n('WebAlertInfo', {
                key: e.id,
                attrs: {
                  notification: e
                }
              })
            })),
            e._v(' '),
            e._l(e.webAlertBreaking, (function (e) {
              return n('WebAlertBreaking', {
                key: e.breakingId,
                attrs: {
                  notification: e
                }
              })
            }))
          ], 2)
        ]),
        e._v(' '),
        e.$store.state.isrendition ? e._l(e.webAlertBubble, (function (e) {
          return n('WebAlertBubble', {
            key: e.id,
            attrs: {
              notification: e
            }
          })
        })) : n('transition-group', {
          key: 'WebAlertBubble',
          attrs: {
            name: 'slide-top--small',
            tag: 'div'
          }
        }, [
          e._l(e.webAlertBubble, (function (e) {
            return n('WebAlertBubble', {
              key: e.id,
              attrs: {
                notification: e
              }
            })
          }))
        ], 2)
      ], 2)
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  488: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      extends : n(358).default
    },
    o = (n(1115), n(1)),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    t.default = component.exports
  },
  492: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      components: {
        ArticleImage: function () {
          return n.e(4).then(n.bind(null, 491))
        }
      },
      extends : n(103).default,
      computed: {
        isAmp: function () {
          return !0
        }
      }
    },
    o = (n(1134), n(1)),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    t.default = component.exports
  },
  502: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(7),
    o = n.n(r),
    c = n(74),
    l = n(266),
    d = {
      name: 'VampPage',
      extends : c.default,
      head: function () {
        if (this.data.webviewMetadata) return this.data.mp3 && (this.data.webviewMetadata.mp3 = this.data.mp3),
        this.data.galleries && (this.data.webviewMetadata.galleries = this.data.galleries),
        {
          __dangerouslyDisableSanitizers: [
            'script'
          ],
          script: o() (Object(l.b) (this.data.webviewMetadata, 'pageLoaded'))
        }
      }
    },
    m = n(1),
    component = Object(m.a) (d, undefined, undefined, !1, null, null, null);
    t.default = component.exports
  },
  507: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'ArticleHeaderHero',
      extends : n(54).default,
      computed: {
        imageType: function () {
          return 'fragment'
        }
      },
      head: function () {
        return {
          script: [
            {
              type: 'text/javascript',
              preserve: 'preserve',
              innerHTML: '\n            window.deferred(function() {\n              document.querySelector(\'#id-'.concat(this.data.id, ' video\').style.opacity = 1\n            },\n            function() {\n              return document.querySelector(\'#id-').concat(this.data.id, ' video\')\n            });\n          ')
            }
          ]
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    t.default = component.exports
  },
  509: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(103),
    o = n(97),
    c = {
      extends : r.default,
      computed: {
        webviewClick: function () {
          return ''.concat(Object(o.b) ('openGallery', this.data.id), '.openGallery(this)')
        }
      },
      head: function () {
        return {
          script: [
            {
              hid: ''.concat(this.data.id, '-openGallery'),
              preserve: 'preserve',
              type: 'text/javascript',
              innerHTML: Object(o.a) ('openGallery', this.data.id, '\n              function(el) {\n                window.vamp.navigateToGallery({\n                  images: '.concat(JSON.stringify(this.data.content.sliderImages), ',\n                  selectedImage: el.getAttribute(\'itemindex\'),\n                  sharingUrl: \'').concat(this.$store.getters.getSeoData.canonical, '\',\n                  articleTitle: \'').concat(this.$store.getters.getSeoData.title, '\'\n                });\n              }\n            '))
            }
          ]
        }
      }
    },
    l = (n(1176), n(1)),
    component = Object(l.a) (c, undefined, undefined, !1, null, null, null);
    t.default = component.exports
  },
  549: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(7),
    o = n.n(r),
    c = n(74),
    l = n(266),
    d = {
      name: 'VampPage',
      extends : c.default,
      head: function () {
        if (this.data.webviewMetadata) return this.data.mp3 && (this.data.webviewMetadata.mp3 = this.data.mp3),
        this.data.galleries && (this.data.webviewMetadata.galleries = this.data.galleries),
        {
          __dangerouslyDisableSanitizers: [
            'script'
          ],
          script: o() (Object(l.b) (this.data.webviewMetadata, 'pageLoaded'))
        }
      }
    },
    m = n(1),
    component = Object(m.a) (d, undefined, undefined, !1, null, null, null);
    t.default = component.exports
  },
  555: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(103),
    o = n(97),
    c = {
      extends : r.default,
      computed: {
        webviewClick: function () {
          return ''.concat(Object(o.b) ('openGallery', this.data.id), '.openGallery(this)')
        }
      },
      head: function () {
        return {
          script: [
            {
              hid: ''.concat(this.data.id, '-openGallery'),
              preserve: 'preserve',
              type: 'text/javascript',
              innerHTML: Object(o.a) ('openGallery', this.data.id, '\n              function(el) {\n                window.vamp.navigateToGallery({\n                  images: '.concat(JSON.stringify(this.data.content.sliderImages), ',\n                  selectedImage: el.getAttribute(\'itemindex\'),\n                  sharingUrl: \'').concat(this.$store.getters.getSeoData.canonical, '\',\n                  articleTitle: \'').concat(this.$store.getters.getSeoData.title, '\'\n                });\n              }\n            '))
            }
          ]
        }
      }
    },
    l = (n(1233), n(1)),
    component = Object(l.a) (c, undefined, undefined, !1, null, null, null);
    t.default = component.exports
  },
  595: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(3),
    o = n.n(r),
    c = n(5),
    l = n.n(c),
    d = n(2),
    m = n.n(d),
    h = n(9),
    f = n.n(h),
    _ = n(22),
    v = n(8);
    function w(object, e) {
      var t = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(object);
        e && (n = n.filter((function (e) {
          return Object.getOwnPropertyDescriptor(object, e).enumerable
        }))),
        t.push.apply(t, n)
      }
      return t
    }
    function y(e) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {
        };
        i % 2 ? w(Object(source), !0).forEach((function (t) {
          o() (e, t, source[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : w(Object(source)).forEach((function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
        }))
      }
      return e
    }
    var x = {
      created: function () {
        this.$store.getters.knownUser.exists && this.init(),
        this.$root.$on('bookmark:interaction', this.handleBookmarkAnonymous),
        this.$root.$on('bookmark:interaction', this.showNotification)
      },
      methods: {
        init: function () {
          var e = this;
          return l() (m.a.mark((function t() {
            var n,
            r,
            data;
            return m.a.wrap((function (t) {
              for (; ; ) switch (t.prev = t.next) {
                case 0:
                  return t.prev = 0,
                  t.next = 3,
                  f.a.request(y(y({
                  }, Object(v.a) (e.$config.enricoBasicAuth)), {
                  }, {
                    withCredentials: !0,
                    url: ''.concat(e.$config.enricoC1Base, '/bookmarks-ids/?product=').concat(e.$config.product)
                  }));
                case 3:
                  n = t.sent,
                  r = n.data,
                  data = void 0 === r ? [
                  ] : r,
                  e.$store.commit('addBookmark', data),
                  e.storeAnonymous(),
                  t.next = 13;
                  break;
                case 10:
                  t.prev = 10,
                  t.t0 = t.catch(0),
                  e.$store.commit('setMutation', {
                    key: 'bookmarkingReady',
                    value: !1
                  });
                case 13:
                case 'end':
                  return t.stop()
              }
            }), t, null, [
              [0,
              10]
            ])
          }))) ()
        },
        storeAnonymous: function () {
          var e = this;
          return l() (m.a.mark((function t() {
            var n,
            r;
            return m.a.wrap((function (t) {
              for (; ; ) switch (t.prev = t.next) {
                case 0:
                  return n = _.b.data(),
                  t.next = 3,
                  Promise.all(n.map((function (t) {
                    return e.$store.dispatch('addBookmark', t).then((function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                      },
                      n = e.status;
                      if ('error' === n) return t
                    }))
                  })));
                case 3:
                  r = t.sent.filter(Boolean),
                  _.b.save(r);
                case 5:
                case 'end':
                  return t.stop()
              }
            }), t)
          }))) ()
        },
        handleBookmarkAnonymous: function (data) {
          if ('anonymous' === data.action) {
            var e = _.b.data();
            e.find((function (e) {
              return e.item.nzzId === data.item.nzzId
            })) || e.push(data),
            _.b.save(e)
          }
        },
        showNotification: function (e) {
          var t = e.status,
          n = e.action;
          this.$store.dispatch('triggerNewAction', {
            hash: 'bookmark-'.concat(n, '-').concat(t)
          })
        }
      },
      render: function () {
        return null
      }
    },
    z = n(1),
    component = Object(z.a) (x, undefined, undefined, !1, null, null, null);
    t.default = component.exports
  },
  602: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(39),
    o = {
      created: function () {
        this.$root.$on('tms:event:push', this.eventPush),
        this.$root.$on('tms:component:create', this.componentCreate),
        window.addEventListener('tms:event:push', this.eventPush),
        window.addEventListener('tms:component:create', this.componentCreate),
        window.addEventListener('tms:basic:tracking', r.g)
      },
      destroyed: function () {
        this.$root.$off('tms:event:push', this.eventPush),
        this.$root.$off('tms:component:create', this.componentCreate),
        window.removeEventListener('tms:event:push', this.eventPush),
        window.removeEventListener('tms:component:create', this.componentCreate),
        window.removeEventListener('tms:basic:tracking', r.g)
      },
      methods: {
        eventPush: function (data) {
          var e = data.detail;
          e.eventInfo && (e.eventInfo.timeStamp = (new Date).toISOString()),
          window.digitalData.event.push(e),
          window.deferred && window.deferred((function () {
            return window.DANZZ.parseDataLayerUpdate('event')
          }), (function () {
            return window.DANZZ && window.DANZZ.parseDataLayerUpdate
          }))
        },
        componentCreate: function (data) {
          this.createTmsComponent(data.detail)
        },
        getTmsComponent: function (e) {
          if (!window.digitalData.component) return !1;
          var component = window.digitalData.component.filter((function (component) {
            return component.componentInfo.componentID === e
          }));
          return !!component.length && component[0]
        },
        createTmsComponent: function (data) {
          if (!this.getTmsComponent(data.componentID)) {
            var e,
            t = data.componentID,
            n = data.componentSize,
            r = void 0 === n ? 0 : n,
            o = data.componentName,
            c = data.componentURL,
            l = data.issueTimestamp,
            d = void 0 === l ? '' : l,
            m = data.headline,
            h = void 0 === m ? '' : m,
            f = data.abstract,
            _ = void 0 !== f && f,
            v = data.primaryCategory,
            w = void 0 === v ? '' : v,
            y = data.componentSubType1,
            x = data.componentSubType2,
            z = data.subCategory1,
            k = void 0 === z ? '' : z,
            C = data.subCategory2,
            O = void 0 === C ? '' : C,
            S = data.subCategory3,
            component = {
              componentInfo: {
                componentID: t,
                componentSize: r,
                componentName: o,
                componentURL: c
              },
              attributes: {
                issueTimestamp: d,
                headline: h,
                abstract: _
              },
              category: {
                primaryCategory: w,
                componentSubType1: y,
                componentSubType2: x,
                subCategory1: k,
                subCategory2: O,
                subCategory3: void 0 === S ? '' : S,
                componentType: data.componentType
              }
            };
            null !== (e = window.digitalData) && void 0 !== e && e.component && window.digitalData.component.push(component)
          }
        }
      },
      render: function () {
        return null
      }
    },
    c = n(1),
    component = Object(c.a) (o, undefined, undefined, !1, null, null, null);
    t.default = component.exports
  },
  755: function (e, t, n) {
    'use strict';
    n(1007)
  },
  763: function (e, t, n) {
    'use strict';
    n(1013)
  },
  770: function (e, t, n) {
    'use strict';
    n(814)
  },
  782: function (e, t, n) {
    'use strict';
    n(1008)
  },
  791: function (e, t, n) {
    var content = n(1046);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('5eebcfd6', content, !0, {
      sourceMap: !1
    })
  },
  795: function (e, t, n) {
    var content = n(1051);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('2c2b5720', content, !0, {
      sourceMap: !1
    })
  },
  814: function (e, t, n) {
    var content = n(1083);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('92d36000', content, !0, {
      sourceMap: !1
    })
  },
  815: function (e, t, n) {
    var content = n(1085);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('3533e70c', content, !0, {
      sourceMap: !1
    })
  },
  833: function (e, t, n) {
    var content = n(1116);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('6a08c747', content, !0, {
      sourceMap: !1
    })
  },
  838: function (e, t, n) {
    var content = n(1126);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('edc7c23a', content, !0, {
      sourceMap: !1
    })
  },
  839: function (e, t, n) {
    var content = n(1128);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('b88fda04', content, !0, {
      sourceMap: !1
    })
  },
  841: function (e, t, n) {
    var content = n(1131);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('bbf453f2', content, !0, {
      sourceMap: !1
    })
  },
  842: function (e, t, n) {
    var content = n(1133);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('6de073f6', content, !0, {
      sourceMap: !1
    })
  },
  843: function (e, t, n) {
    var content = n(1135);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('4d68e629', content, !0, {
      sourceMap: !1
    })
  },
  867: function (e, t, n) {
    var content = n(1177);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('270337ee', content, !0, {
      sourceMap: !1
    })
  },
  888: function (e, t, n) {
    var content = n(1215);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('4cc28d6e', content, !0, {
      sourceMap: !1
    })
  },
  893: function (e, t, n) {
    var content = n(1222);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('f7bb05fa', content, !0, {
      sourceMap: !1
    })
  },
  894: function (e, t, n) {
    var content = n(1224);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('0c813598', content, !0, {
      sourceMap: !1
    })
  },
  899: function (e, t, n) {
    var content = n(1234);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('406d8e5e', content, !0, {
      sourceMap: !1
    })
  },
  910: function (e, t, n) {
    var content = n(1253);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('4678e00e', content, !0, {
      sourceMap: !1
    })
  },
  927: function (e, t, n) {
    var content = n(1283);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('2d716a40', content, !0, {
      sourceMap: !1
    })
  },
  932: function (e, t, n) {
    var content = n(1288);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('7c713f18', content, !0, {
      sourceMap: !1
    })
  },
  975: function (e, t, n) {
    var content = n(1372);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('a2f9416e', content, !0, {
      sourceMap: !1
    })
  },
  976: function (e, t, n) {
    var content = n(1374);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('3f929dd3', content, !0, {
      sourceMap: !1
    })
  },
  978: function (e, t, n) {
    var content = n(1378);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('718639a9', content, !0, {
      sourceMap: !1
    })
  },
  979: function (e, t, n) {
    var content = n(1380);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('cd021340', content, !0, {
      sourceMap: !1
    })
  },
  983: function (e, t, n) {
    'use strict';
    n(984)
  },
  984: function (e, t, n) {
    var content = n(1388);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('4587be6e', content, !0, {
      sourceMap: !1
    })
  },
  985: function (e, t, n) {
    var content = n(1390);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('1522065b', content, !0, {
      sourceMap: !1
    })
  },
  996: function (e, t, n) {
    var content = n(1409);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('50a80516', content, !0, {
      sourceMap: !1
    })
  }
}
]);
