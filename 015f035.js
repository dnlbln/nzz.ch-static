(window.webpackJsonp = window.webpackJsonp || [
]).push([[5],
{
  101: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'Articlelist',
      components: {
        SimpleArticle: function () {
          return Promise.resolve().then(n.bind(null, 51))
        }
      },
      mixins: [
        n(64).a
      ],
      props: {
        data: {
          type: Object,
        default:
          function () {
            return {
              containers: {
              }
            }
          }
        }
      },
      computed: {
        headingType: function () {
          return 'h3'
        }
      },
      methods: {
        getClass: function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          },
          e = '';
          return Object.entries(t).forEach((function (style) {
            e += style[1]
          })),
          e
        }
      }
    },
    o = (n(1120), n(1)),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.data.containers['articlelist-area'] ? n('div', {
        staticClass: 'articlecomponent articlelist',
        class : t.getClass(t.data.styles),
        attrs: {
          'data-team-articlelist': ''
        }
      }, [
        t.data.content && t.data.content.title ? n(t.headingType, {
          tag: 'component',
          staticClass: 'articlelist__title',
          domProps: {
            innerHTML: t._s(t.data.content.title)
          }
        }) : t._e(),
        t._v(' '),
        t._l(t.data.containers['articlelist-area'], (function (t, e) {
          return n('SimpleArticle', {
            key: e,
            attrs: {
              data: {
                articles: [
                  t.content.article
                ]
              },
              size: 'articlelist',
              'referrer-type': 'articleList',
              'add-datetime-attr': !1
            }
          })
        }))
      ], 2) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  1012: function (t, e, n) {
    var content = n(1436);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('1027889b', content, !0, {
      sourceMap: !1
    })
  },
  1037: function (t, e, n) {
    var content = n(1502);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('a2ee6bbe', content, !0, {
      sourceMap: !1
    })
  },
  1095: function (t, e, n) {
    'use strict';
    n(818)
  },
  1096: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.widget--idms{margin-top:24px;padding:24px 0 0;border-top:1px solid #ebebeb;border-top:1px solid var(--grayLight)}@media (min-width:768px){.widget--idms{margin-top:16px;padding-top:16px}}@media (min-width:1372px){.widget--idms{margin-top:24px;padding-top:24px}}@media (min-width:1548px){.widget--idms{margin-top:40px;padding-top:40px}}.widget--idms .idms-body{overflow:auto}',
    '']),
    t.exports = r
  },
  1120: function (t, e, n) {
    'use strict';
    n(835)
  },
  1121: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.articlelist{padding-bottom:24px;border-bottom:1px solid #ebebeb;border-bottom:1px solid var(--grayLight)}@media (min-width:768px){.articlelist{padding-bottom:32px}}.articlelist--numbered{counter-reset:articlelist}.articlelist__title{margin-bottom:24px;font-weight:500;font-size:1.25rem;line-height:1.75rem;font-family:nzz-sans-serif,Arial}@media (min-width:768px){.articlelist__title{margin-bottom:32px;font-size:1.375rem;line-height:2rem}}',
    '']),
    t.exports = r
  },
  1140: function (t, e, n) {
    'use strict';
    n(849)
  },
  1141: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.video-player{position:relative;overflow:hidden}.click-to-play-overlay{position:absolute;top:0;left:0;right:0;bottom:0}.poster-image{position:absolute;z-index:1}.poster-image img{-o-object-fit:cover;object-fit:cover}.video-title{top:0;left:0;font-size:1.3em;background-color:rgba(0,0,0,.8);color:#fafafa;padding:.5rem;margin:0}.play-icon,.video-title{position:absolute;z-index:2}.play-icon{width:100px;height:100px;background-image:url(https://amp.dev/static/samples/img/play-icon.png);background-repeat:no-repeat;background-size:100% 100%;top:50%;left:50%;transform:translate(-50%,-50%);cursor:pointer;opacity:.9}.play-icon:focus,.play-icon:hover{opacity:1}',
    '']),
    t.exports = r
  },
  1152: function (t, e) {
    t.exports = {
      pixel: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
    default:
      {
        sizes: '',
        paddingBottom: 56.25,
        srcset: [
          [240,
          180]
        ]
      },
      '3of3': {
        sizes: '',
        paddingBottom: 56.25,
        srcset: [
          [1120,
          630],
          [
            976,
            550
          ],
          [
            736,
            415
          ],
          [
            380,
            0
          ]
        ],
        crop: '16:9'
      },
      '2of3': {
        sizes: '',
        paddingBottom: 56.25,
        srcset: [
          [720,
          407],
          [
            635,
            358
          ],
          [
            479,
            270
          ],
          [
            380,
            0
          ]
        ],
        crop: '16:9'
      },
      '1of3': {
        sizes: '',
        paddingBottom: 56.25,
        srcset: [
          [319,
          180],
          [
            292,
            164
          ],
          [
            223,
            125
          ],
          [
            380,
            0
          ]
        ],
        crop: '16:9'
      },
      '1of3-compact': {
        sizes: '',
        paddingBottom: 56.25,
        srcset: [
          [319,
          180],
          [
            292,
            164
          ],
          [
            223,
            125
          ],
          [
            380,
            0
          ]
        ],
        crop: '16:9'
      },
      '1of3-news': {
        sizes: '',
        paddingBottom: 100,
        srcset: [
          [72,
          0]
        ],
        crop: '1:1'
      },
      '1of2': {
        sizes: '',
        paddingBottom: 56.25,
        srcset: [
          [520,
          292],
          [
            464,
            261
          ],
          [
            352,
            198
          ],
          [
            380,
            0
          ]
        ],
        crop: '16:9'
      },
      '1of2-top': {
        sizes: '',
        paddingBottom: 56.25,
        srcset: [
          [200,
          113],
          [
            160,
            90
          ],
          [
            380,
            0
          ]
        ],
        crop: '16:9'
      },
      '2of3-list': {
        sizes: '',
        paddingBottom: 56.25,
        srcset: [
          [240,
          135],
          [
            160,
            90
          ]
        ],
        crop: '16:9'
      },
      paginated: {
        sizes: '',
        paddingBottom: 56.25,
        srcset: [
          [240,
          135],
          [
            200,
            113
          ]
        ],
        crop: '16:9'
      },
      'image-article-content': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [680,
          0],
          [
            327,
            0
          ]
        ],
        crop: ''
      },
      'image-article-image--fullwidth': {
        sizes: '(min-width: 1200px) 1120px, (min-width: 1024px) 976px, (min-width: 768px) 736px',
        paddingBottom: 0,
        srcset: [
          [1120,
          0],
          [
            976,
            0
          ],
          [
            736,
            0
          ],
          [
            375,
            0
          ]
        ],
        crop: ''
      },
      'image-article-image--left': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [240,
          0]
        ],
        crop: ''
      },
      'image-article-image--right': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [240,
          0]
        ],
        crop: ''
      },
      'container-logo': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [0,
          280],
          [
            0,
            224
          ],
          [
            0,
            184
          ],
          [
            0,
            82
          ]
        ],
        crop: ''
      },
      articlelist: {
        sizes: '',
        paddingBottom: 56.25,
        srcset: [
          [200,
          0]
        ],
        crop: '16:9'
      },
      'articlelist-a': {
        sizes: '',
        paddingBottom: 100,
        srcset: [
          [72,
          0]
        ],
        crop: '1:1'
      },
      'articlelist-b': {
        sizes: '',
        paddingBottom: 100,
        srcset: [
          [96,
          0]
        ],
        crop: '1:1'
      },
      'articlelist-bta': {
        sizes: '',
        paddingBottom: 'css',
        srcset: [
          [[200,
          0]],
          [
            [72,
            0]
          ]
        ],
        crop: [
          '16:9',
          '1:1'
        ],
        media: [
          '(min-width:768px)',
          '(max-width:767px)'
        ]
      },
      'companion-feed-bta': {
        sizes: '',
        paddingBottom: 'css',
        srcset: [
          [[200,
          0],
          [
            280,
            0
          ]],
          [
            [72,
            0],
            [
              380,
              0
            ]
          ]
        ],
        crop: [
          '16:9',
          '1:1'
        ],
        media: [
          '(min-width:768px)',
          '(max-width:767px)'
        ]
      },
      'component-audio-player': {
        sizes: '',
        paddingBottom: 'css',
        srcset: [
          [120,
          0]
        ],
        crop: '1:1'
      },
      'audio-url-article-audio': {
        sizes: '',
        paddingBottom: 'css',
        srcset: [
          [120,
          0]
        ],
        crop: '1:1'
      },
      'slide-regular': {
        sizes: '',
        paddingBottom: 56.25,
        srcset: [
          [383,
          287],
          [
            263
          ],
          [
            368,
            200
          ],
          [
            280,
            209
          ]
        ],
        crop: '16:9'
      },
      'slider-article-content': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [0,
          180],
          [
            0,
            360
          ]
        ],
        crop: '3:2'
      },
      'header--hero-article': {
        sizes: '',
        paddingBottom: 'css',
        srcset: [
          [1920,
          0],
          [
            960,
            0
          ],
          [
            430,
            0
          ]
        ],
        crop: ''
      },
      'personbox-article': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [240,
          0]
        ],
        crop: ''
      },
      'imagegrid-article-1of3': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [208,
          0]
        ],
        crop: '3:2'
      },
      'imagegrid-article-1of2': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [312,
          0]
        ],
        crop: '3:2'
      },
      'imagegrid-article-2of3': {
        sizes: '',
        paddingBottom: 'css',
        srcset: [
          [421,
          0]
        ],
        crop: '3:2'
      },
      'imagegrid-article-1of1': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [640,
          0]
        ],
        crop: '3:2'
      },
      smart: {
        sizes: '',
        paddingBottom: 100,
        srcset: [
          [72,
          0]
        ],
        crop: '1:1'
      },
      related: {
        sizes: '',
        paddingBottom: 56.25,
        srcset: [
          [319,
          180],
          [
            292,
            164
          ],
          [
            223,
            125
          ],
          [
            380,
            0
          ]
        ],
        crop: '16:9'
      },
      'container--exclusive-topic-header': {
        sizes: '',
        paddingBottom: 31.25,
        srcset: [
          [1120,
          350],
          [
            961,
            300
          ],
          [
            720,
            225
          ],
          [
            327,
            102
          ]
        ],
        crop: '16:5'
      },
      'alias-teaser-embed': {
        sizes: '',
        paddingBottom: 100,
        srcset: [
          [72,
          0]
        ],
        crop: '1:1'
      },
      'einklinker-trending': {
        sizes: '',
        paddingBottom: 56.25,
        srcset: [
          [319,
          180],
          [
            292,
            164
          ],
          [
            223,
            125
          ],
          [
            380,
            0
          ]
        ],
        crop: '16:9'
      }
    }
  },
  1153: function (t, e, n) {
    var map = {
      './bellevue/config/imageSizes': 1154,
      './judi/config/imageSizes': 1155,
      './nzz/config/imageSizes': 1156,
      './nzzas/config/imageSizes': 1157,
      './regio/config/imageSizes': 1158
    };
    function r(t) {
      var e = o(t);
      return n(e)
    }
    function o(t) {
      if (!n.o(map, t)) {
        var e = new Error('Cannot find module \'' + t + '\'');
        throw e.code = 'MODULE_NOT_FOUND',
        e
      }
      return map[t]
    }
    r.keys = function () {
      return Object.keys(map)
    },
    r.resolve = o,
    t.exports = r,
    r.id = 1153
  },
  1154: function (t, e) {
    t.exports = {
    default:
      {
        sizes: '',
        paddingBottom: 75,
        srcset: [
          [240,
          180]
        ],
        crop: '4:3'
      },
      'component-collection-headline-image': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [1200,
          0],
          [
            768,
            0
          ],
          [
            320,
            0
          ]
        ],
        crop: '16:9'
      },
      'component-expert-headline-image': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [260,
          0]
        ],
        crop: '16:9'
      },
      'einklinker-landscape': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [200,
          0],
          [
            100,
            0
          ]
        ],
        crop: '16:9'
      },
      'teaser--einklinker-portrait': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [100,
          0]
        ],
        crop: '9:16'
      },
      '3of3-landscape': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [740,
          0],
          [
            320,
            0
          ]
        ],
        crop: '16:9'
      },
      '3of3-portrait': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [480,
          0],
          [
            320,
            0
          ]
        ],
        crop: '3:4'
      },
      '2of3-landscape': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [660,
          0],
          [
            450,
            0
          ],
          [
            320,
            0
          ]
        ],
        crop: '16:9'
      },
      '2of3-portrait': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [360,
          0],
          [
            180,
            0
          ]
        ],
        crop: '3:4'
      },
      '1of3-landscape': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [320,
          0]
        ],
        crop: '16:9'
      },
      '1of3-portrait': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [320,
          0],
          [
            270,
            0
          ]
        ],
        crop: '3:4'
      },
      '1of3-collection-landscape': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [320,
          0]
        ],
        crop: '16:9'
      },
      '1of3-collection-portrait': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [320,
          0],
          [
            270,
            0
          ]
        ],
        crop: '3:4'
      },
      'slide-landscape': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [320,
          0]
        ],
        crop: '16:9'
      },
      'slide-portrait': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [320,
          0],
          [
            270,
            0
          ]
        ],
        crop: '3:4'
      },
      paginated: {
        sizes: '',
        paddingBottom: 75,
        srcset: [
          [240,
          180],
          [
            160,
            120
          ]
        ],
        crop: '4:3'
      },
      'image-article-content': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [680,
          0],
          [
            327,
            0
          ]
        ],
        crop: ''
      },
      'image-article-image--fullwidth': {
        sizes: '(min-width: 1200px) 1120px, (min-width: 1024px) 976px, (min-width: 768px) 736px',
        paddingBottom: 0,
        srcset: [
          [1120,
          0],
          [
            976,
            0
          ],
          [
            736,
            0
          ],
          [
            375,
            0
          ]
        ],
        crop: ''
      },
      'image-article-image--left': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [240,
          0]
        ],
        crop: ''
      },
      'image-article-image--right': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [240,
          0]
        ],
        crop: ''
      },
      'image-article-figure--landscape figure--landscape-L': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [500,
          0],
          [
            240,
            0
          ]
        ],
        crop: ''
      },
      'image-article-figure--portrait': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [240,
          0]
        ],
        crop: ''
      },
      'image-article-figure--portrait figure--portrait-L': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [240,
          0]
        ],
        crop: ''
      },
      'slide-regular': {
        sizes: '',
        paddingBottom: 75,
        srcset: [
          [383,
          287],
          [
            263
          ],
          [
            368,
            200
          ],
          [
            280,
            209
          ]
        ],
        crop: '4:3'
      },
      'slider-article-content': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [0,
          180],
          [
            0,
            360
          ]
        ],
        crop: '3:2'
      },
      'header--hero-article': {
        sizes: '',
        paddingBottom: 'css',
        srcset: [
          [1920,
          0],
          [
            960,
            0
          ],
          [
            430,
            0
          ]
        ],
        crop: ''
      },
      'personbox-article': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [240,
          0]
        ],
        crop: ''
      },
      'imagegrid-article-1of3': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [208,
          0]
        ],
        crop: '3:2'
      },
      'imagegrid-article-1of2': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [312,
          0]
        ],
        crop: '3:2'
      },
      'imagegrid-article-2of3': {
        sizes: '',
        paddingBottom: 'css',
        srcset: [
          [421,
          0]
        ],
        crop: '3:2'
      },
      'imagegrid-article-1of1': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [640,
          0]
        ],
        crop: '3:2'
      },
      'slide-alias-teaser': {
        sizes: '',
        paddingBottom: 'css',
        srcset: [
          [340,
          200]
        ],
        crop: ''
      },
      'slide-expert-page': {
        sizes: '',
        paddingBottom: 'css',
        srcset: [
          [340,
          200]
        ],
        crop: ''
      },
      'infobox-image': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [320,
          0]
        ],
        crop: ''
      },
      'component-article-content': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [768,
          0],
          [
            320,
            0
          ]
        ],
        crop: ''
      },
      'component-article-thumb': {
        sizes: '',
        paddingBottom: 100,
        srcset: [
          [80,
          80]
        ],
        crop: '1:1'
      }
    }
  },
  1155: function (t, e) {
    t.exports = {
    default:
      {
        sizes: '',
        paddingBottom: 75,
        srcset: [
          [240,
          180]
        ],
        crop: '4:3'
      },
      paginated: {
        sizes: '',
        paddingBottom: 75,
        srcset: [
          [160,
          120],
          [
            120,
            90
          ]
        ],
        crop: '4:3'
      },
      'paginated-opinion': {
        sizes: '',
        paddingBottom: 100,
        srcset: [
          [120,
          120],
          [
            80,
            80
          ]
        ],
        crop: '1:1'
      },
      'articlelist-a': {
        sizes: '',
        paddingBottom: 56.25,
        srcset: [
          [200,
          0]
        ],
        crop: '16:9'
      },
      'articlelist-a-opinion': {
        sizes: '',
        paddingBottom: 100,
        srcset: [
          [120,
          120],
          [
            80,
            80
          ]
        ],
        crop: '1:1'
      },
      'articlelist-a-regular': {
        sizes: '',
        paddingBottom: 75,
        srcset: [
          [160,
          120],
          [
            120,
            90
          ]
        ],
        crop: '4:3'
      },
      'paginatedlist-regular': {
        sizes: '',
        paddingBottom: 75,
        srcset: [
          [160,
          120],
          [
            120,
            90
          ]
        ],
        crop: '4:3'
      },
      'paginatedlist-opinion': {
        sizes: '',
        paddingBottom: 100,
        srcset: [
          [120,
          120],
          [
            80,
            80
          ]
        ],
        crop: '1:1'
      },
      '3of3-top-regular': {
        sizes: '',
        paddingBottom: 75,
        srcset: [
          [300,
          225],
          [
            150,
            112.5
          ]
        ],
        crop: '4:3'
      },
      '3of3-top-opinion': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [300,
          300],
          [
            120,
            120
          ]
        ],
        crop: '1:1'
      },
      '2of3': {
        sizes: '',
        paddingBottom: 75,
        srcset: [
          [300,
          225],
          [
            150,
            112.5
          ]
        ],
        crop: '4:3'
      },
      '2of3-top-regular': {
        sizes: '',
        paddingBottom: 75,
        srcset: [
          [300,
          225],
          [
            150,
            112.5
          ]
        ],
        crop: '4:3'
      },
      '2of3-top-opinion': {
        sizes: '',
        paddingBottom: 100,
        srcset: [
          [120,
          120],
          [
            80,
            80
          ]
        ],
        crop: '1:1'
      },
      '1of2': {
        sizes: '',
        paddingBottom: 75,
        srcset: [
          [160,
          120]
        ],
        crop: '4:3'
      },
      '1of2-opinion': {
        sizes: '',
        paddingBottom: 100,
        srcset: [
          [120,
          120],
          [
            80,
            80
          ]
        ],
        crop: '1:1'
      },
      '1of2-regular': {
        sizes: '',
        paddingBottom: 75,
        srcset: [
          [160,
          120],
          [
            120,
            90
          ]
        ],
        crop: '4:3'
      },
      '1of3-top-regular': {
        sizes: '',
        paddingBottom: 75,
        srcset: [
          [160,
          120],
          [
            120,
            90
          ]
        ],
        crop: '4:3'
      },
      '1of3-top-opinion': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [160,
          160],
          [
            120,
            120
          ]
        ],
        crop: '1:1'
      },
      '3of3-regular': {
        sizes: '',
        paddingBottom: 75,
        srcset: [
          [420,
          315],
          [
            240,
            180
          ]
        ],
        crop: '4:3'
      },
      '3of3-opinion': {
        sizes: '',
        paddingBottom: 100,
        srcset: [
          [240,
          240],
          [
            160,
            160
          ]
        ],
        crop: '1:1'
      },
      '2of3-regular': {
        sizes: '',
        paddingBottom: 75,
        srcset: [
          [240,
          180]
        ],
        crop: '4:3'
      },
      '2of3-opinion': {
        sizes: '',
        paddingBottom: 100,
        srcset: [
          [160,
          160],
          [
            120,
            120
          ]
        ],
        crop: '1:1'
      },
      '1of3-regular': {
        sizes: '',
        paddingBottom: 75,
        srcset: [
          [160,
          120],
          [
            120,
            90
          ]
        ],
        crop: '4:3'
      },
      '1of3-opinion': {
        sizes: '',
        paddingBottom: 100,
        srcset: [
          [160,
          160],
          [
            120,
            120
          ]
        ],
        crop: '1:1'
      },
      '1of3-compact-opinion': {
        sizes: '',
        paddingBottom: 100,
        srcset: [
          [160,
          160],
          [
            120,
            120
          ]
        ],
        crop: '1:1'
      },
      '2of3-list-regular': {
        sizes: '',
        paddingBottom: 75,
        srcset: [
          [160,
          120],
          [
            120,
            90
          ]
        ],
        crop: '4:3'
      },
      '2of3-list-opinion': {
        sizes: '',
        paddingBottom: 100,
        srcset: [
          [120,
          120],
          [
            80,
            80
          ]
        ],
        crop: '1:1'
      },
      '2of3-linkbox-regular': {
        sizes: '',
        paddingBottom: 75,
        srcset: [
          [160,
          120],
          [
            120,
            90
          ]
        ],
        crop: '4:3'
      },
      '2of3-linkbox-opinion': {
        sizes: '',
        paddingBottom: 100,
        srcset: [
          [160,
          160],
          [
            120,
            120
          ]
        ],
        crop: '1:1'
      },
      'image-article-content': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [680,
          0],
          [
            340,
            0
          ]
        ],
        crop: ''
      },
      'image-article-image--fullwidth': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [1052,
          0],
          [
            704,
            0
          ],
          [
            380,
            0
          ]
        ],
        crop: ''
      },
      'component-article-personbox': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [240,
          180]
        ],
        crop: '4:3'
      },
      'component-article-authorbox': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [180,
          180],
          [
            120,
            120
          ]
        ],
        crop: '1:1'
      },
      'next-reads-regular': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [80,
          80],
          [
            120,
            120
          ]
        ],
        crop: '1:1'
      },
      'next-reads-opinion': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [80,
          80],
          [
            120,
            120
          ]
        ],
        crop: '1:1'
      }
    }
  },
  1156: function (t, e) {
    t.exports = {
      'header--hero-article': {
        sizes: '',
        paddingBottom: 'css',
        srcset: [
          [[1920,
          0],
          [
            1366,
            0
          ],
          [
            960,
            0
          ]],
          [
            [1024,
            0],
            [
              768,
              0
            ]
          ],
          [
            [768,
            0],
            [
              642,
              0
            ]
          ]
        ],
        crop: [
          'desktop',
          'tablet',
          'mobile'
        ],
        media: [
          '(orientation: landscape)',
          '(min-width: 600px) and (orientation: portrait) and (min-aspect-ratio: 9/16)',
          '(max-width: 767px) and (orientation: portrait)'
        ]
      }
    }
  },
  1157: function (t, e) {
    t.exports = {
    default:
      {
        sizes: '',
        paddingBottom: 75,
        srcset: [
          [240,
          180]
        ],
        crop: '4:3'
      },
      '3of3-top': {
        sizes: '',
        paddingBottom: 'css',
        srcset: [
          [[1043,
          0],
          [
            901,
            0
          ],
          [
            688,
            0
          ]],
          [
            [768,
            0],
            [
              320,
              0
            ]
          ]
        ],
        crop: [
          '4:3',
          '3:4'
        ],
        media: [
          '(min-width:768px)',
          '(max-width:767px)'
        ]
      },
      '3of3': {
        sizes: '',
        paddingBottom: 'css',
        srcset: [
          [[1043,
          0],
          [
            901,
            0
          ],
          [
            688,
            0
          ]],
          [
            [520,
            0],
            [
              327,
              0
            ]
          ]
        ],
        crop: [
          '4:3',
          '1:1'
        ],
        media: [
          '(min-width:768px)',
          '(max-width:767px)'
        ]
      },
      '3of3--portrait': {
        sizes: '',
        paddingBottom: 133.4,
        srcset: [
          [600,
          800],
          [
            512,
            683
          ],
          [
            0,
            468
          ]
        ],
        crop: '3:4'
      },
      '2of3': {
        sizes: '',
        paddingBottom: 'css',
        srcset: [
          [[720,
          540],
          [
            635,
            476
          ],
          [
            479,
            358
          ],
          [
            380,
            0
          ]],
          [
            [520,
            0],
            [
              327,
              0
            ]
          ]
        ],
        crop: [
          '4:3',
          '1:1'
        ],
        media: [
          '(min-width:768px)',
          '(max-width:767px)'
        ]
      },
      '1of3': {
        sizes: '',
        paddingBottom: 100,
        srcset: [
          [700,
          0],
          [
            520,
            0
          ],
          [
            327,
            0
          ]
        ],
        crop: '1:1'
      },
      '1of2': {
        sizes: '',
        paddingBottom: 'css',
        srcset: [
          [[512,
          0],
          [
            352,
            0
          ]],
          [
            [704,
            0],
            [
              512,
              0
            ],
            [
              352,
              0
            ]
          ]
        ],
        crop: [
          '3:4',
          '1:1'
        ],
        media: [
          '(min-width:768px)',
          '(max-width:767px)'
        ]
      },
      '1of2-square': {
        sizes: '',
        paddingBottom: 100,
        srcset: [
          [704,
          0],
          [
            512,
            0
          ],
          [
            352,
            0
          ]
        ],
        crop: '1:1'
      },
      '2of3-list': {
        sizes: '',
        paddingBottom: 75,
        srcset: [
          [240,
          180],
          [
            160,
            120
          ]
        ],
        crop: '4:3'
      },
      paginated: {
        sizes: '',
        paddingBottom: 100,
        srcset: [
          [327,
          0],
          [
            204,
            0
          ]
        ],
        crop: '1:1'
      },
      'paginated-external': {
        sizes: '',
        paddingBottom: 100,
        srcset: [
          [244,
          0]
        ],
        crop: '1:1'
      },
      search: {
        sizes: '',
        paddingBottom: 100,
        srcset: [
          [244,
          0]
        ],
        crop: '1:1'
      },
      '2of3-linkbox': {
        sizes: '',
        paddingBottom: 75,
        srcset: [
          [240,
          180]
        ],
        crop: '4:3'
      },
      'image-article-content': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [680,
          0],
          [
            327,
            0
          ]
        ],
        crop: ''
      },
      'image-article-image--fullwidth': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [1072,
          0],
          [
            986,
            0
          ],
          [
            736,
            0
          ],
          [
            375,
            0
          ]
        ],
        crop: ''
      },
      'image-article-image--widewidth': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [1200,
          0],
          [
            1018,
            0
          ],
          [
            768,
            0
          ],
          [
            375,
            0
          ]
        ],
        crop: ''
      },
      'image-article-image--left': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [240,
          0]
        ],
        crop: ''
      },
      'image-article-image--right': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [240,
          0]
        ],
        crop: ''
      },
      'container-logo': {
        sizes: '',
        paddingBottom: 75,
        srcset: [
          [240,
          180],
          [
            160,
            120
          ]
        ],
        crop: '4:3'
      },
      articlelist: {
        sizes: '',
        paddingBottom: 'css',
        srcset: [
          [[704,
          470],
          [
            327,
            218
          ]],
          [
            [196,
            196]
          ]
        ],
        crop: [
          '3:2',
          '1:1'
        ],
        media: [
          '(max-width:767px)',
          '(min-width:768px)'
        ]
      },
      'articlelist-moretosubject': {
        sizes: '',
        paddingBottom: 100,
        srcset: [
          [640,
          640],
          [
            320,
            320
          ],
          [
            196,
            196
          ]
        ],
        crop: '1:1'
      },
      'slide-regular': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [280,
          0],
          [
            208,
            0
          ]
        ],
        crop: ''
      },
      'slide-1by1': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [512,
          0],
          [
            280,
            0
          ],
          [
            208,
            0
          ]
        ],
        crop: '1:1'
      },
      'slide-3by4': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [512,
          0],
          [
            280,
            0
          ],
          [
            208,
            0
          ]
        ],
        crop: '3:4'
      },
      'slide-4by3': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [512,
          0],
          [
            280,
            0
          ],
          [
            208,
            0
          ]
        ],
        crop: '4:3'
      },
      'slider-article-content': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [0,
          180],
          [
            0,
            360
          ]
        ],
        crop: '3:2'
      },
      'header--hero-article': {
        sizes: '',
        paddingBottom: 'css',
        srcset: [
          [[1920,
          0],
          [
            1366,
            0
          ],
          [
            960,
            0
          ]],
          [
            [1024,
            0],
            [
              768,
              0
            ],
            [
              375,
              0
            ]
          ]
        ],
        crop: [
          'desktop',
          'mobile'
        ],
        media: [
          'only print, screen and (min-width: 1372px) and (orientation: landscape)',
          '(max-width: 1371px) and (orientation: portrait)'
        ]
      },
      'header-article-author': {
        sizes: '',
        paddingBottom: 100,
        srcset: [
          [146,
          146]
        ],
        crop: ''
      },
      'personbox-article': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [240,
          0]
        ],
        crop: ''
      },
      'imagegrid-article-1of3': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [208,
          0]
        ],
        crop: '3:2'
      },
      'imagegrid-article-1of2': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [312,
          0]
        ],
        crop: '3:2'
      },
      'imagegrid-article-2of3': {
        sizes: '',
        paddingBottom: 'css',
        srcset: [
          [421,
          0]
        ],
        crop: '3:2'
      },
      'imagegrid-article-1of1': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [640,
          0]
        ],
        crop: '3:2'
      },
      'alias-teaser-embed': {
        sizes: '',
        paddingBottom: 100,
        srcset: [
          [72,
          0]
        ],
        crop: '1:1'
      },
      mostread: {
        sizes: '',
        paddingBottom: 'css',
        srcset: [
          [[704,
          470],
          [
            327,
            218
          ]],
          [
            [142,
            142]
          ]
        ],
        crop: [
          '3:2',
          '1:1'
        ],
        media: [
          '(max-width:767px)',
          '(min-width:768px)'
        ]
      },
      'component-article-content': {
        sizes: '',
        paddingBottom: 56.25,
        srcset: [
          [508,
          286],
          [
            458,
            258
          ],
          [
            239,
            134
          ]
        ],
        crop: '16:9'
      },
      'page-gallery-embed': {
        sizes: '',
        paddingBottom: 66.67,
        srcset: [
          [375,
          0],
          [
            736,
            0
          ],
          [
            961,
            0
          ],
          [
            1080,
            0
          ]
        ],
        crop: ''
      },
      'teaser-author-img': {
        sizes: '',
        paddingBottom: 'css',
        srcset: [
          [64,
          64],
          [
            72,
            72
          ]
        ],
        crop: '1:1'
      }
    }
  },
  1158: function (t, e) {
    t.exports = {
      '1of3-news': {
        sizes: '',
        paddingBottom: 100,
        srcset: [
          [84,
          0]
        ],
        crop: '1:1'
      },
      '1of3-custom': {
        size: '',
        paddingBottom: 'css',
        srcset: [
          [320,
          320],
          [
            244,
            244
          ]
        ],
        crop: '1:1'
      },
      '3of3': {
        sizes: '',
        paddingBottom: 'css',
        srcset: [
          [[1120,
          630],
          [
            976,
            550
          ],
          [
            736,
            415
          ]],
          [
            [740,
            740],
            [
              380,
              380
            ]
          ]
        ],
        crop: [
          '16:9',
          '1:1'
        ],
        media: [
          '(min-width:768px)',
          '(max-width:767px)'
        ]
      },
      'story-big': {
        sizes: '',
        paddingBottom: 'css',
        srcset: [
          [[1120,
          630],
          [
            976,
            550
          ],
          [
            736,
            415
          ]],
          [
            [740,
            740],
            [
              380,
              380
            ]
          ]
        ],
        crop: [
          '16:9',
          '1:1'
        ],
        media: [
          '(min-width:768px)',
          '(max-width:767px)'
        ]
      },
      '2of3': {
        sizes: '',
        paddingBottom: 56.25,
        srcset: [
          [720,
          407],
          [
            635,
            358
          ],
          [
            479,
            270
          ],
          [
            375,
            210
          ]
        ],
        crop: '16:9'
      },
      'sponsored-content': {
        sizes: '',
        paddingBottom: 0,
        srcset: [
          [136,
          0]
        ],
        crop: ''
      },
      'header--hero-article': {
        sizes: '',
        paddingBottom: 'css',
        srcset: [
          [1200,
          0],
          [
            768,
            0
          ],
          [
            320,
            0
          ]
        ],
        crop: '16:9'
      },
      'container--exclusive-municipality-page': {
        sizes: '',
        paddingBottom: 28.125,
        srcset: [
          [1120,
          315],
          [
            740,
            208
          ],
          [
            380,
            107
          ]
        ],
        crop: '32:9'
      },
      'container--exclusive-topic-page': {
        sizes: '',
        paddingBottom: 28.125,
        srcset: [
          [1120,
          315],
          [
            740,
            208
          ],
          [
            380,
            107
          ]
        ],
        crop: '32:9'
      },
      '2of3-list': {
        sizes: '',
        paddingBottom: 'css',
        srcset: [
          [[240,
          135],
          [
            200,
            113
          ]],
          [
            [96,
            96]
          ]
        ],
        crop: [
          '16:9',
          '1:1'
        ],
        media: [
          '(min-width:768px)',
          '(max-width:767px)'
        ]
      },
      paginated: {
        sizes: '',
        paddingBottom: 'css',
        srcset: [
          [[240,
          135],
          [
            200,
            113
          ]],
          [
            [96,
            96]
          ]
        ],
        crop: [
          '16:9',
          '1:1'
        ],
        media: [
          '(min-width:768px)',
          '(max-width:767px)'
        ]
      },
      articlelist: {
        sizes: '',
        paddingBottom: 'css',
        srcset: [
          [[240,
          135],
          [
            200,
            113
          ]],
          [
            [96,
            96]
          ]
        ],
        crop: [
          '16:9',
          '1:1'
        ],
        media: [
          '(min-width:768px)',
          '(max-width:767px)'
        ]
      },
      'articlelist-a': {
        sizes: '',
        paddingBottom: 100,
        srcset: [
          [80,
          80]
        ],
        crop: '1:1'
      },
      'articlelist-a-custom-alias-teaser': {
        sizes: '',
        paddingBottom: 'css',
        srcset: [
          [366,
          160],
          [
            640,
            160
          ]
        ],
        crop: ''
      },
      'slide-regular': {
        sizes: '',
        paddingBottom: 56.25,
        srcset: [
          [320,
          180],
          [
            270,
            152
          ]
        ],
        crop: '16:9'
      },
      'slide-video': {
        sizes: '',
        paddingBottom: 56.25,
        srcset: [
          [320,
          180],
          [
            270,
            152
          ]
        ],
        crop: '16:9'
      },
      'slide-gallery': {
        sizes: '',
        paddingBottom: 56.25,
        srcset: [
          [320,
          180],
          [
            270,
            152
          ]
        ],
        crop: '16:9'
      },
      'slide-longformstandard': {
        sizes: '',
        paddingBottom: 56.25,
        srcset: [
          [320,
          180],
          [
            270,
            152
          ]
        ],
        crop: '16:9'
      },
      'slide-opinion': {
        sizes: '',
        paddingBottom: 56.25,
        srcset: [
          [320,
          180],
          [
            270,
            152
          ]
        ],
        crop: '16:9'
      },
      'slide-longformvisual': {
        sizes: '',
        paddingBottom: 56.25,
        srcset: [
          [320,
          180],
          [
            270,
            152
          ]
        ],
        crop: '16:9'
      },
      'slide-alias-teaser': {
        sizes: '',
        paddingBottom: 56.25,
        srcset: [
          [320,
          180],
          [
            270,
            152
          ]
        ],
        crop: '16:9'
      },
      '1of2-top': {
        sizes: '',
        paddingBottom: 'css',
        srcset: [
          [[180,
          101],
          [
            120,
            68
          ]],
          [
            [96,
            96]
          ]
        ],
        crop: [
          '16:9',
          '1:1'
        ],
        media: [
          '(min-width:768px)',
          '(max-width:767px)'
        ]
      },
      'metainfo-author-img': {
        sizes: '',
        paddingBottom: 'css',
        srcset: [
          [40,
          40]
        ],
        crop: '1:1'
      },
      extender: {
        sizes: '',
        paddingBottom: 56.25,
        srcset: [
          [319,
          180],
          [
            292,
            164
          ],
          [
            223,
            125
          ],
          [
            380,
            0
          ]
        ],
        crop: '16:9'
      }
    }
  },
  1159: function (t, e, n) {
    'use strict';
    n(857)
  },
  1160: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '/*! purgecss start ignore */amp-carousel.ampcarousel{width:100%;margin-left:-1px}amp-carousel.ampcarousel .amp-carousel-slide amp-img img{-o-object-fit:contain;object-fit:contain;position:relative}amp-carousel.ampcarousel .amp-carousel-slide amp-img{min-height:1px}amp-carousel.ampcarousel[class*=html-layout-size-defined] [class*=html-fill-content]{position:relative;height:auto}amp-carousel.ampcarousel amp-img{min-height:1px}amp-carousel.ampcarousel amp-img>:first-child{margin-top:-100%;height:1px;position:absolute}amp-carousel.ampcarousel [class*=html-slide-item]>*{height:auto}amp-carousel.ampcarousel figcaption{font-family:nzz-sans-serif,Arial;color:#000;color:var(--black);padding-top:20px;position:relative;display:block;font-size:1rem;line-height:1.62}\n/*! purgecss end ignore */',
    '']),
    t.exports = r
  },
  1216: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.regioselector{flex-grow:1;background-color:var(--blue);display:flex}@media (min-width:768px){.regioselector{margin:0 24px}}@media (min-width:1372px){.regioselector{margin:0 40px}}.regioselector .button__text{font-size:.875rem;line-height:1.5rem;color:#fff;color:var(--white)}.regioselector .button--regionselector{margin:24px 0}.regioselector .button__icon{margin-left:5px}.regioselector a{color:#fff;color:var(--white)}.regioselector__select{position:relative;margin-left:24px;border-bottom:1px solid hsla(0,0%,100%,.2)}.regioselector__select .contextmenu{margin-top:-16px;z-index:1000}.regioselector__select .header-button{font-family:nzz-sans-serif,Arial;height:72px;font-size:.875rem;line-height:1.5rem;color:#fff;color:var(--white)}.regioselector__region{position:relative;top:-1px;display:inline-block;margin:0 0 24px 24px;padding-top:24px;line-height:1.5rem;border-top:1px solid #fff;border-top:1px solid var(--white)}.regioselector__region-name{font-family:nzz-sans-serif,Arial;color:#fff;color:var(--white);font-size:1.125rem;line-height:1.5rem;text-decoration:none;padding:24px 0}.regioselector__region-name path{stroke:#fff;stroke:var(--white)}.regioselector__region-badge{margin:41px 24px 0}.regioselector__region-text{flex-grow:1}.regioselector .header-button__label--blackwhite{color:#fff;color:var(--white)}',
    '']),
    t.exports = r
  },
  1217: function (t, e, n) {
    'use strict';
    n(891)
  },
  1218: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.regioselector{display:flex;flex-grow:1;background-color:var(--regioSelector)}@media (min-width:768px){.regioselector{margin:0 24px}}@media (min-width:1372px){.regioselector{margin:0 40px}}.regioselector .button__text{font-size:.875rem;line-height:1.5rem;color:#fff;color:var(--white)}.regioselector .button--regionselector{margin:24px 0}.regioselector .button__icon{margin-left:5px}.regioselector a{color:#fff;color:var(--white)}.regioselector__select{position:relative;margin:0 24px;border-bottom:1px solid hsla(0,0%,100%,.2)}@media (min-width:1372px){.regioselector__select{margin:0 40px}}.regioselector__select .contextmenu{z-index:1000;margin-top:-16px}.regioselector__select .header-button{height:72px;font-size:.75rem;line-height:1.5rem;font-family:nzz-sans-serif,Arial;color:#fff;color:var(--white)}@media (min-width:1372px){.regioselector__select .header-button{font-size:.875rem}}.regioselector__wrapper{display:flex;justify-content:space-between;align-items:baseline}.regioselector__region{position:relative;top:-1px;display:inline-block;margin:0 0 24px 24px;padding-top:24px;line-height:1.5rem;border-top:1px solid #fff;border-top:1px solid var(--white)}@media (min-width:1372px){.regioselector__region{top:-2px;margin-left:40px;border-top:2px solid #fff;border-top:2px solid var(--white)}}.regioselector__region-name{padding:24px 0;font-weight:700;font-size:1.125rem;line-height:1.25;font-family:nzz-sans-serif,Arial;color:#fff;color:var(--white);text-decoration:none}@media (min-width:1372px){.regioselector__region-name{font-size:1.5625rem}}.regioselector__region-name path{stroke:#fff;stroke:var(--white)}.regioselector__region-text{flex-grow:1}.regioselector .header-button__label--blackwhite{color:#fff;color:var(--white)}.regioselector__link{margin:0 24px 24px 0;padding-top:24px;line-height:1.5rem;text-decoration:none;white-space:nowrap}@media (min-width:1372px){.regioselector__link{margin-right:40px}}.regioselector__link span{display:none}@media (min-width:768px){.regioselector__link span{display:inline}}.regioselector__link .icon__chevron{vertical-align:middle}',
    '']),
    t.exports = r
  },
  1219: function (t, e, n) {
    'use strict';
    n(892)
  },
  1220: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.regioselector__select{margin-right:24px}',
    '']),
    t.exports = r
  },
  1281: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.text{font-family:nzz-serif,Georgia;font-size:1.125rem;line-height:1.56}@media (min-width:768px){.text{font-size:1.25rem;line-height:1.6}}.text sub,.text sup{vertical-align:baseline;position:relative;top:-.4em}.text sub{top:.4em}',
    '']),
    t.exports = r
  },
  1289: function (t, e, n) {
    'use strict';
    n(933)
  },
  1290: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.tags{margin-top:16px;font-family:nzz-sans-serif,Arial}.tags .tags__title{margin-top:24px;margin-bottom:24px;font-weight:500;font-size:1rem;line-height:1.375rem;letter-spacing:.01em}@media (min-width:768px){.tags .tags__title{margin-bottom:32px}}.tags .tags__title--articlemetainfo{font-size:1.25rem;line-height:1.75rem}.tags .tags__title--topic-header{font-size:.875rem}@media (min-width:1372px){.tags .tags__title--topic-header{font-size:1rem}}.tags__list{padding:0;line-height:1}.tags__all-btn{display:inline-block;margin-top:24px;color:#000;color:var(--black);text-decoration:none}.tags__all-btn .icon{margin-left:4px}.tags--current-topics{padding-right:24px;padding-left:24px;margin-bottom:16px}.tag{position:relative;display:inline-block;margin:0 8px 8px 0;transition:opacity .32s ease}.tag:before{content:" ";position:absolute;top:0;right:0;bottom:0;left:0;width:100%;background:#f5f5f5;background:var(--grayUltraLight);border-radius:12px}.tag:active,.tag:hover{opacity:.6}.tag .tag__label{position:relative;display:inline-block;padding:12px 16px;color:#333;color:var(--grayDark);text-decoration:none;font-weight:300;font-size:.875rem;line-height:1.125rem}.tag .tag__label--no-link{cursor:default}.tag--city:before{background-color:var(--blue);opacity:.15}.tag--city .tag__label{color:var(--blue)}',
    '']),
    t.exports = r
  },
  1291: function (t, e, n) {
    'use strict';
    n(934)
  },
  1292: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '@media (min-width:768px){.topic-header__image+.topic-header__content{margin:-24px 24px 0}}@media (min-width:1372px){.topic-header__image+.topic-header__content{margin:-32px 40px 0}}.topic-header .image_src{display:block;width:100%;height:160px;-o-object-fit:cover;object-fit:cover}@media (min-width:768px){.topic-header .image_src{height:auto}}.topic-header__content{position:relative;padding:24px;font-family:nzz-sans-serif,Arial;background-color:#fff;background-color:var(--white)}@media (min-width:1372px){.topic-header__content{padding:32px 40px}}.topic-header__content:after{content:"";position:absolute;bottom:0;left:24px;width:calc(100% - 48px);border-bottom:1px solid #ebebeb;border-bottom:1px solid var(--grayLight)}@media (min-width:1372px){.topic-header__content:after{left:0;width:100%}}.topic-header__catchline{margin-bottom:8px;font-weight:500;font-size:.875rem;line-height:1.25;color:#333;color:var(--grayDark)}@media (min-width:1372px){.topic-header__catchline{font-size:1rem}}.topic-header__title{margin-bottom:8px;font-weight:500;font-size:1.5rem;line-height:1.25;letter-spacing:.01em}@media (min-width:1372px){.topic-header__title{font-size:2rem}}.topic-header__description{margin-bottom:24px;font-size:1rem;line-height:1.5}.topic-header__description a{color:#000;color:var(--black)}',
    '']),
    t.exports = r
  },
  1293: function (t, e, n) {
    'use strict';
    n(935)
  },
  1294: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.pagination{position:relative;height:72px;font-family:nzz-sans-serif,Arial;display:flex;justify-content:center;align-items:center}@media (min-width:1548px){.pagination{height:88px}}.pagination--top{margin:0 0 24px;padding-bottom:24px;border-bottom:1px solid #ebebeb;border-bottom:1px solid var(--grayLight)}@media (min-width:1548px){.pagination--top{margin-bottom:40px;padding-bottom:40px}}.pagination--bottom{margin:24px 0 0;border-top:1px solid #ebebeb;border-top:1px solid var(--grayLight);padding-top:24px}@media (min-width:1548px){.pagination--bottom{margin:40px 0 0;padding-top:40px}}.pagination__indicator{line-height:1.375rem}@media (min-width:768px){.pagination__indicator{display:none}}@media (min-width:1372px){.pagination__indicator{display:block}}@media (min-width:1548px){.pagination__indicator{display:none}}.pagination__labels{line-height:1.375rem;cursor:default;display:none}@media (min-width:768px){.pagination__labels{display:block}}@media (min-width:1372px){.pagination__labels{display:none}}@media (min-width:1548px){.pagination__labels{display:block}}.pagination__labels *{display:inline-block;margin-left:12px;margin-right:12px;padding-top:8px;padding-bottom:8px}.pagination__labels .label{border-bottom:1px solid #000;border-bottom:1px solid var(--black);color:#000;color:var(--black)}.pagination__labels .label--no-underline{border-bottom:none}.pagination__labels .link{text-decoration:none;color:#707070;color:var(--grayMedium);cursor:pointer}.pagination__labels .link:hover{border-bottom:1px solid #707070;border-bottom:1px solid var(--grayMedium);opacity:.6}.pagination__labels .dots{color:#707070;color:var(--grayMedium)}.pagination__button{position:absolute;height:48px;padding:13px 20px;line-height:1.375rem;color:#000;color:var(--black);text-decoration:none;border:1px solid #ebebeb;border:1px solid var(--grayLight);cursor:pointer;transition:all .3s ease}.pagination__button .label{display:none}@media (min-width:768px){.pagination__button{padding:13px 24px}.pagination__button .label{display:inline}}@media (min-width:1372px){.pagination__button{padding:13px 20px}.pagination__button .label{display:none}}@media (min-width:1548px){.pagination__button{padding:13px 24px}.pagination__button .label{display:inline}}.pagination__button--left{left:0}.pagination__button--right{right:0}.pagination__button:hover{color:#fff;color:var(--white);background-color:#000;background-color:var(--black);border:1px solid #000;border:1px solid var(--black);opacity:.6}.pagination__button:hover path{stroke:#fff;stroke:var(--white)}.pagination__chevron{display:inline;margin:0;transform:rotate(180deg)}.pagination__chevron--right{margin:0;transform:rotate(0)}@media (min-width:768px){.pagination__chevron{margin:0 4px 0 -2px}.pagination__chevron--right{margin:0 -2px 0 4px}}@media (min-width:1372px){.pagination__chevron,.pagination__chevron--right{margin:0}}@media (min-width:1548px){.pagination__chevron{margin:0 4px 0 -2px}.pagination__chevron--right{margin:0 -2px 0 4px}}',
    '']),
    t.exports = r
  },
  1299: function (t, e, n) {
    'use strict';
    n(938)
  },
  1300: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.answer{font-family:nzz-serif,Georgia;font-size:1.125rem;line-height:1.56;padding-left:40px}@media (min-width:768px){.answer{font-size:1.25rem;line-height:1.6}}.answer--after-question{margin-top:-8px}@media (min-width:768px){.answer--after-question{margin-top:-16px}}',
    '']),
    t.exports = r
  },
  1309: function (t, e, n) {
    'use strict';
    n(943)
  },
  1310: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.divider{margin:64px auto;border:0;clear:both}@media (min-width:768px){.divider{margin-top:80px;margin-bottom:80px}}.divider:after{content:"";display:block;width:40px;height:1px;margin:0 auto;background-color:#000;background-color:var(--black)}.divider--large:after{width:100%;background-color:#ebebeb;background-color:var(--grayLight)}.divider--invisible{clear:both}.divider--invisible:after{width:100%;background:transparent;border-bottom:1px dashed #ebebeb;border-bottom:1px dashed var(--grayLight)}.divider.doc-component{padding:10px 0}',
    '']),
    t.exports = r
  },
  1321: function (t, e, n) {
    'use strict';
    n(949)
  },
  1322: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.instagram iframe{max-width:100%!important;width:auto;min-width:auto!important;margin:0 auto!important}.social__container{text-align:center}',
    '']),
    t.exports = r
  },
  1323: function (t, e, n) {
    'use strict';
    n(951)
  },
  1324: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.kaltura,.video-embed{position:relative;width:100%;max-width:100%;overflow:hidden}@media (min-width:768px){.kaltura,.video-embed{width:100vw;max-width:640px;margin-left:auto}}.kaltura--first,.video-embed--first{padding-top:40px}.kaltura--sponsored,.video-embed--sponsored{background-color:#fff77e;background-color:var(--yellow)}.kaltura--breaking,.video-embed--breaking{background-color:#e74e4b;background-color:var(--red)}.kaltura--before-header,.video-embed--before-header{position:relative;left:50%;z-index:10;width:100vw;max-width:100vw;margin-bottom:0;margin-left:-50vw}@media (min-width:768px){.kaltura--before-header,.video-embed--before-header{left:auto;width:100%;max-width:100%;margin-bottom:-32px;margin-left:auto}}@media (min-width:1372px){.kaltura--before-header,.video-embed--before-header{margin-bottom:-112px}}@media (min-width:768px){.kaltura--before-header:not(.kaltura--adfree),.video-embed--before-header:not(.kaltura--adfree){left:auto;width:100%;max-width:100%;margin-left:auto}}.kaltura--before-header .kalturaPlayerWrapper,.video-embed--before-header .kalturaPlayerWrapper{max-width:100vw;margin:0}@media (min-width:768px){.kaltura--before-header .kalturaPlayerWrapper,.video-embed--before-header .kalturaPlayerWrapper{max-width:640px;margin:0 auto}}',
    '']),
    t.exports = r
  },
  1325: function (t, e, n) {
    'use strict';
    n(952)
  },
  1326: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.newsletterbox{background-color:transparent}',
    '']),
    t.exports = r
  },
  1329: function (t, e, n) {
    'use strict';
    n(954)
  },
  1330: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.premium{position:relative;margin-bottom:34px;text-align:left}.premium .icon--premium{position:absolute;top:3px}.premium .premium-subtitle{font-weight:500;font-size:1.125rem;line-height:1.375rem;font-family:nzz-sans-serif,Arial;padding-left:42px}',
    '']),
    t.exports = r
  },
  1339: function (t, e, n) {
    'use strict';
    n(959)
  },
  1340: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.component--max-width{margin:0 -24px 40px;padding:24px;background-color:#ebebeb;background-color:var(--grayLight)}.pageelement .component--max-width{margin:30px 0 40px;padding:24px 0}@media (min-width:1372px){.pageelement .component--max-width{margin:30px 0 40px;padding-left:40px}}.pageelement .component--max-width:before{display:block;position:absolute;margin-top:-55px;margin-left:24px;width:104px;border-top:2px solid #000;border-top:2px solid var(--black);content:""}@media (min-width:1372px){.pageelement .component--max-width:before{margin-left:0;width:170px}}@media (min-width:768px){.component--max-width{margin-right:0;margin-left:0}}.component--max-width .sponsoredcontent{display:flex;align-items:center;margin-bottom:0}.pageelement .component--max-width .sponsoredcontent{padding-left:24px}@media (min-width:1372px){.pageelement .component--max-width .sponsoredcontent{padding-left:0}}.component--max-width .sponsoredcontent .text{font-size:.875rem;font-family:nzz-sans-serif,Arial;word-wrap:break-word}.pageelement .component--max-width .sponsoredcontent .text a{color:inherit;text-decoration:none;background-image:linear-gradient(90deg,#05032d,#05032d);background-repeat:no-repeat;background-position:bottom;background-size:100% 1px}.pageelement .component--max-width .sponsoredcontent .text a:hover{opacity:.6}.component--max-width .sponsoredcontent .text+.sponsoredcontent__poster{margin-left:24px;padding-left:24px;border-left:1px solid #707070;border-left:1px solid var(--grayMedium)}.component--max-width .sponsoredcontent .sponsoredcontent__link,.component--max-width .sponsoredcontent .sponsoredcontent__link .image-placeholder{cursor:pointer}.component--max-width .sponsoredcontent .sponsoredcontent__poster{width:100%;max-width:136px;max-height:88px;overflow:hidden}.component--max-width .sponsoredcontent .image-placeholder{cursor:default\n            /*! purgecss end ignore */}\n\n\n    /*! purgecss start ignore */.component--max-width .sponsoredcontent .image-placeholder__image,.component--max-width .sponsoredcontent .image-placeholder img{max-height:88px;font-family:"object-fit: contain; object-position: left;";-o-object-fit:contain;object-fit:contain;-o-object-position:left;object-position:left;background-color:transparent}',
    '']),
    t.exports = r
  },
  1341: function (t, e, n) {
    'use strict';
    n(960)
  },
  1342: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.textlink{border:solid #ebebeb;border:solid var(--grayLight);border-width:1px 0;padding:32px 0;max-width:520px}@media (min-width:768px){.textlink{padding-top:40px;padding-bottom:40px}}.textlink__wrapper{font-size:1rem;line-height:1.62;font-weight:500;font-family:nzz-sans-serif,Arial;text-align:center}@media (min-width:768px){.textlink__wrapper{font-size:1.125rem;line-height:1.56}}.textlink__info{margin-bottom:24px}.textlink__cta{font-size:.875rem}',
    '']),
    t.exports = r
  },
  1343: function (t, e, n) {
    'use strict';
    n(961)
  },
  1344: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.tiktok iframe{max-width:325px;width:auto;min-width:auto;margin:0 auto;border-radius:8px}.social__container{text-align:center}',
    '']),
    t.exports = r
  },
  1349: function (t, e, n) {
    'use strict';
    n(964)
  },
  1350: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.video-embed--fullwidth{width:100vw;max-width:100vw;margin-left:-24px}@media (min-width:768px){.video-embed--fullwidth{width:100%;max-width:100%;margin-right:auto;margin-left:auto}}.video-embed iframe{border:0}',
    '']),
    t.exports = r
  },
  1361: function (t, e, n) {
    'use strict';
    n(970)
  },
  1362: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.bottombar{z-index:100;width:100%;background-color:#fff;background-color:var(--white);border-top:1px solid #ebebeb;border-top:1px solid var(--grayLight)}@media (min-width:768px){.bottombar{display:none}}',
    '']),
    t.exports = r
  },
  139: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(7),
    o = n.n(r),
    c = n(3),
    l = n.n(c),
    d = n(31),
    m = n(97);
    function h(t, e) {
      var n;
      if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
        if (Array.isArray(t) || (n = function (t, e) {
          if (!t) return;
          if ('string' == typeof t) return f(t, e);
          var n = Object.prototype.toString.call(t).slice(8, - 1);
          'Object' === n && t.constructor && (n = t.constructor.name);
          if ('Map' === n || 'Set' === n) return Array.from(t);
          if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(t, e)
        }(t)) || e && t && 'number' == typeof t.length) {
          n && (t = n);
          var i = 0,
          r = function () {
          };
          return {
            s: r,
            n: function () {
              return i >= t.length ? {
                done: !0
              }
               : {
                done: !1,
                value: t[i++]
              }
            },
            e: function (t) {
              throw t
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
          n = t[Symbol.iterator]()
        },
        n: function () {
          var t = n.next();
          return c = t.done,
          t
        },
        e: function (t) {
          l = !0,
          o = t
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
    function f(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
      return n
    }
    function v() {
      return Math.random().toString()
    }
    var _ = {
      name: 'WidgetRegioSelectorWidget',
      components: {
        NzzLink: d.default,
        ContextmenuMobile: function () {
          return n.e(7).then(n.bind(null, 375))
        }
      },
      props: {
        data: {
          type: [
            Array,
            Object,
            String
          ],
        default:
          function () {
            return {
            }
          }
        }
      },
      data: function () {
        return {
          titleIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="5" fill="none" class="container__header-icon"><path stroke="#000" d="M9.5 4.5l2-2-2-2"/><path stroke="#000" stroke-width=".5" d="M.25 2.25h10.5v.5H.25z"/></svg>',
          regions: this.$config.regions || [
          ],
          menuOpen: !1
        }
      },
      computed: {
        currentRegion: function () {
          return this.$store.getters.currentRegion(this.$config) || {
          }
        },
        widgetLink: function () {
          var t;
          return (null === (t = this.data.content['widget-link']) || void 0 === t ? void 0 : t.href) || this.data.content['widget-link']
        },
        title: function () {
          try {
            return this.widgetLink ? this.data.content['regio-title'] + this.titleIcon : this.data.content['regio-title']
          } catch (t) {
            return ''
          }
        },
        badge: function () {
          try {
            var t,
            e,
            link = this.widgetLink.replace(/\/$/, ''),
            n = h(this.regions.data);
            try {
              for (n.s(); !(e = n.n()).done; ) {
                var r = e.value;
                if (link.includes(r.link)) {
                  t = r;
                  break
                }
              }
            } catch (t) {
              n.e(t)
            } finally {
              n.f()
            }
            return {
              name: t.name,
              src: ''.concat(this.$config.sharedPath, '/static/images/regiobadges/').concat(t.badge, '.svg?=').concat(this.regions.assetsVersion)
            }
          } catch (t) {
            return {
              name: this.currentRegion.name,
              src: ''.concat(this.$config.sharedPath, '/static/images/regiobadges/').concat(this.currentRegion.badge, '.svg?=').concat(this.regions.assetsVersion)
            }
          }
        },
        regionsmenu: function () {
          var t = this;
          return this.regions && this.regions.data ? this.regions.data.map((function (e) {
            return {
              id: v(),
              custom: !0,
              action: 'triggerRegionSwitch',
              currentRegion: t.currentRegion,
              value: ''.concat(e.key),
              name: e.name,
              link: e.link,
              currentItem: e.key === t.currentRegion.key
            }
          })) : [
          ]
        },
        currentItem: function () {
          return {
            id: v(),
            name: 'Region ändern'
          }
        },
        menusettings: function () {
          var t = this;
          if ( - 1 === this.$store.state.isrendition.indexOf('webview')) return !1;
          var e = this.regionsmenu.map((function (e) {
            return t.renameKeys(e, {
              name: 'text'
            })
          }));
          return JSON.stringify({
            type: '.showContextMenu',
            event: 'regioUserAction',
            ui: e
          })
        },
        onclickContextMenu: function () {
          return - 1 !== this.$store.state.isrendition.indexOf('webview') && ''.concat(Object(m.b) ('contextmenu', 'regio-menu'), '.contextmenu({ element: this })')
        }
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
          ].concat(o() (n)))
        }
      }
    },
    x = (n(889), n(1)),
    component = Object(x.a) (_, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', {
        key: 'regiocontainer-' + t.badge.src,
        staticClass: 'regioselector'
      }, [
        n('div', {
          staticClass: 'regioselector__region-text'
        }, [
          n('ContextmenuMobile', {
            attrs: {
              vertical: 'bottom',
              'menu-items': t.regionsmenu,
              'current-item': t.currentItem,
              menusettings: t.menusettings,
              onclick: t.onclickContextMenu,
              'menu-class': 'regioselector__select',
              transition: 'slide-bottom',
              'overlay-position': 'bottom',
              'data-nzz-referrer': 'regioSelector'
            }
          }),
          t._v(' '),
          n('div', {
            staticClass: 'regioselector__region',
            attrs: {
              'data-referrer': 'regioWidgetHeadTitle'
            }
          }, [
            n(t.widgetLink ? 'NzzLink' : 'span', {
              tag: 'NzzLink',
              staticClass: 'regioselector__region-name',
              attrs: {
                url: t.widgetLink ? t.widgetLink : ''
              },
              domProps: {
                innerHTML: t._s(t.title)
              }
            })
          ], 1)
        ], 1),
        t._v(' '),
        n('div', {
          staticClass: 'regioselector__region-badge'
        }, [
          n('img', {
            attrs: {
              src: t.badge.src,
              alt: t.badge.name,
              title: t.badge.name
            }
          })
        ])
      ])
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  1397: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.breadcrumbs{display:none;align-items:center;padding-left:16px}@media (min-width:768px){.breadcrumbs{display:flex}}.breadcrumbs__item{height:24px}@media (min-width:768px){.breadcrumbs__item--first .header-button__label span{display:none}}@media (min-width:1372px){.breadcrumbs__item--first .header-button__label span{display:block}}.breadcrumbs__item--first .header-button__label:after{content:"...";display:block}@media (min-width:1372px){.breadcrumbs__item--first .header-button__label:after{display:none}}.breadcrumbs__icon{margin:0 16px 0 16.5px}.icon--caretright{display:none;transform:rotate(-90deg)}@media (min-width:768px){.icon--caretright{display:block}}',
    '']),
    t.exports = r
  },
  140: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'TelegramEmbed',
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
        content: function () {
          return ''
        }
      },
      mounted: function () {
        var t,
        e;
        if (null !== (t = this.data.content) && void 0 !== t && null !== (e = t.telegram) && void 0 !== e && e.html && 'string' == typeof this.data.content.telegram.html) {
          var script = document.createRange().createContextualFragment(this.data.content.telegram.html);
          this.$refs.social__container.appendChild(script)
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.data.content && t.data.content.telegram ? n('div', {
        ref: 'telegram',
        staticClass: 'articlecomponent articlecomponent--narrow telegram'
      }, [
        n('div', {
          ref: 'social__container',
          staticClass: 'social__container',
          domProps: {
            innerHTML: t._s(t.content)
          }
        })
      ]) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  1435: function (t, e, n) {
    'use strict';
    n(1012)
  },
  1436: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.webcam{margin-bottom:0}',
    '']),
    t.exports = r
  },
  145: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'ArticleText',
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
      }
    },
    o = (n(781), n(1)),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.data.content && t.data.content.text ? n('p', {
        staticClass: 'articlecomponent text',
        class : {
          'text--has-initial': t.data.hasInitialLetter
        },
        attrs: {
          'data-team-paragraph': ''
        },
        domProps: {
          innerHTML: t._s(t.data.content.text)
        }
      }) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  1501: function (t, e, n) {
    'use strict';
    n(1037)
  },
  1502: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.breadcrumbs{display:none;align-items:center;display:flex;padding-left:0;position:relative;overflow-x:scroll;overflow-y:hidden;background-color:#fff}@media (min-width:768px){.breadcrumbs{display:flex}}.breadcrumbs__item{height:24px;white-space:nowrap;padding:0}@media (min-width:768px){.breadcrumbs__item--first .header-button__label span{display:none;display:block}}@media (min-width:1372px){.breadcrumbs__item--first .header-button__label span{display:block}}.breadcrumbs__item--first .header-button__label:after{content:"...";display:block;display:none}@media (min-width:1372px){.breadcrumbs__item--first .header-button__label:after{display:none}}.breadcrumbs__icon{display:block;margin:0 12px}.icon--caretright{display:none;transform:rotate(-90deg);display:block}@media (min-width:768px){.icon--caretright{display:block}}.breadcrumbs__item--first{padding-left:24px}@media (min-width:768px){.breadcrumbs__item--first{padding-left:0}}.breadcrumbs__item--title{padding-right:24px}.breadcrumbs__item--title:hover{opacity:1}@media (min-width:768px){.breadcrumbs__item--title{padding-right:0}}.breadcrumbs__item--title:not(a){cursor:default}.breadcrumbs__item.header-button{height:56px;color:#000;color:var(--black)}@media (min-width:768px){.breadcrumbs__item.header-button{height:72px}}.breadcrumbs__wrapper>hr{margin-left:24px;margin-right:24px;transform:translateY(-1px);margin-bottom:-1px;border:0;height:1px;background-color:#ebebeb;background-color:var(--grayLight)}.breadcrumbs__item h1{font-size:.875rem;font-weight:300}.breadcrumbs__wrapper:after,.breadcrumbs__wrapper:before{content:"";position:absolute;z-index:1001;display:inline-block;width:28px;height:55px;pointer-events:none;background:linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.breadcrumbs__wrapper:after{right:0;transform:translateY(-56px);background:linear-gradient(270deg,#fff,hsla(0,0%,100%,0))}',
    '']),
    t.exports = r
  },
  151: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'IdmsWidget',
      props: {
        data: {
          type: String,
        default:
          function () {
            return ''
          }
        }
      },
      computed: {
        dataHtml: function () {
          if (this.data) {
            var t = 'window.deferred(function';
            return this.data.replace(/jQuery\(document\).ready\(function/gi, t).replace(/\$\(document\).ready\(function/gi, t)
          }
          return !1
        }
      }
    },
    o = (n(1095), n(1)),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return '' != t.dataHtml ? n('div', {
        staticClass: 'widget--idms'
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
  1514: function (t, e, n) {
    n(11).register({
      nzz_topic_filter: {
        width: 16,
        height: 16,
        viewBox: '0 0 15 15',
        data: '<path pid="0" d="M0 2h8v1H0zm7 5h8v1H7zm0 5h8v1H7zm4-10h4v1h-4zM0 7h4v1H0zm0 5h5v1H0zM10 0h1v5h-1zM4 5h1v5H4z"/><path pid="1" d="M7 10h1v5H7z"/>'
      }
    })
  },
  1515: function (t, e, n) {
    n(11).register({
      nzz_checkmark_topic: {
        width: 12,
        height: 9,
        viewBox: '0 0 12 9',
        data: '<path pid="0" d="M1 4l3.5 3.5L11 1" _stroke="#000"/>'
      }
    })
  },
  1516: function (t, e, n) {
    n(11).register({
      ico_mail_48: {
        width: 48,
        height: 48,
        viewBox: '0 0 48 48',
        data: '<path pid="0" _stroke="#000" d="M32.5 17.5h-17v13h17v-13z"/><path pid="1" _stroke="#000" d="M16 18l8 6 8-6"/>'
      }
    })
  },
  1517: function (t, e, n) {
    n(11).register({
      ico_whatsapp_48: {
        width: 48,
        height: 48,
        viewBox: '0 0 48 48',
        data: '<path pid="0" _fill="#000" d="M15 33l1.55-4.64a8.84 8.84 0 113.5 3.32L14.99 33z"/><path pid="1" _fill="#fff" d="M29.8 26.79c-.41-.77-1.92-1.66-1.92-1.66-.34-.19-.75-.21-.94.13 0 0-.5.6-.62.68-.57.38-1.1.37-1.62-.17l-1.24-1.23-1.23-1.24c-.54-.53-.55-1.05-.17-1.62.09-.13.68-.62.68-.62.34-.2.32-.6.13-.94 0 0-.89-1.51-1.66-1.92a.85.85 0 00-1 .15l-.54.55c-1.73 1.73-.88 3.68.85 5.41l1.59 1.58 1.58 1.59c1.73 1.73 3.68 2.58 5.41.85l.55-.55a.85.85 0 00.15-1z"/>'
      }
    })
  },
  1518: function (t, e, n) {
    n(11).register({
      ico_linkedin_48: {
        width: 48,
        height: 48,
        viewBox: '0 0 48 48',
        data: '<path pid="0" _fill="#000" d="M15 15v18h18V15H15zm6.3 14.4h-2.7v-8.1h2.7v8.1zm-1.35-9a1.35 1.35 0 110-2.7 1.35 1.35 0 010 2.7zm9.45 9h-2.16v-4.13c0-2.48-2.88-2.29-2.88 0v4.13H22.2v-8.1h2.16v1.3c1-1.9 5.04-2.05 5.04 1.82v4.98z"/>'
      }
    })
  },
  1519: function (t, e, n) {
    n(11).register({
      ico_twitter_48: {
        width: 48,
        height: 48,
        viewBox: '0 0 48 48',
        data: '<path pid="0" _fill="#000" d="M34 17.9a8.3 8.3 0 01-2.36.63c.85-.5 1.5-1.3 1.8-2.23-.78.46-1.66.8-2.6.98a4.13 4.13 0 00-3-1.28 4.06 4.06 0 00-4 4.96 11.71 11.71 0 01-8.45-4.22 4 4 0 001.27 5.4c-.67-.03-1.3-.21-1.86-.51a4.06 4.06 0 003.3 4c-.58.16-1.21.2-1.86.08a4.1 4.1 0 003.84 2.8A8.34 8.34 0 0114 30.2a11.75 11.75 0 006.29 1.8 11.5 11.5 0 0011.66-12.01c.8-.57 1.5-1.29 2.05-2.1z"/>'
      }
    })
  },
  152: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'PageAdvertisementNative1of3',
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
        staticClass: 'resor resor--native resor--native-1of3 widget--1of3'
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
  1520: function (t, e, n) {
    n(11).register({
      ico_facebook_48: {
        width: 48,
        height: 48,
        viewBox: '0 0 48 48',
        data: '<path pid="0" _fill="#000" d="M32 15H16a1 1 0 00-1 1v16a1 1 0 001 1h8.61v-6.97h-2.34V23.3h2.34v-2c0-2.33 1.42-3.6 3.5-3.6 1 0 1.85.08 2.1.12v2.43h-1.44c-1.13 0-1.35.53-1.35 1.32v1.73h2.7l-.36 2.72h-2.34V33h4.59a1 1 0 00.99-1V16a1 1 0 00-1-1z"/>'
      }
    })
  },
  1521: function (t, e, n) {
    n(11).register({
      ico_xing_48: {
        width: 48,
        height: 48,
        viewBox: '0 0 48 48',
        data: '<path pid="0" d="M26.183 33l-3.994-7.25L28.242 15h3.7L25.89 25.75 29.843 33h-3.66z" _fill="#000"/><path pid="1" fill-rule="evenodd" clip-rule="evenodd" d="M20.715 18.75H17.01l2.076 3.558L16 27.75h3.686l3.087-5.453-2.058-3.547z" _fill="#000"/>'
      }
    })
  },
  1522: function (t, e, n) {
    n(11).register({
      ico_pinterest_48: {
        width: 48,
        height: 48,
        viewBox: '0 0 48 48',
        data: '<path pid="0" d="M24.007 15C19.033 15 15 19.026 15 23.993a8.996 8.996 0 005.723 8.378c-.081-.71-.148-1.806.03-2.583.163-.703 1.053-4.47 1.053-4.47s-.267-.54-.267-1.333c0-1.25.726-2.183 1.63-2.183.772 0 1.142.577 1.142 1.265 0 .77-.489 1.925-.748 2.998-.215.895.452 1.628 1.334 1.628 1.601 0 2.832-1.687 2.832-4.115 0-2.154-1.55-3.656-3.766-3.656-2.565 0-4.07 1.917-4.07 3.9 0 .77.296 1.6.667 2.05a.27.27 0 01.06.26c-.067.28-.223.895-.253 1.021-.037.163-.133.2-.304.118-1.126-.525-1.83-2.16-1.83-3.486 0-2.834 2.06-5.44 5.952-5.44 3.121 0 5.553 2.22 5.553 5.196 0 3.101-1.957 5.596-4.67 5.596-.912 0-1.772-.474-2.061-1.037l-.564 2.14c-.2.784-.749 1.76-1.12 2.36.846.26 1.735.4 2.67.4C28.967 33 33 28.974 33 24.007c.015-4.98-4.018-9.007-8.993-9.007z" _fill="#000"/>'
      }
    })
  },
  1523: function (t, e, n) {
    n(11).register({
      pocket: {
        width: 48,
        height: 48,
        viewBox: '0 0 48 48',
        data: '<path pid="0" d="M32.19 15.09H15.81A1.83 1.83 0 0014 16.91v6a10 10 0 0020 0v-6a1.81 1.81 0 00-1.81-1.82zm-7.23 12a1.36 1.36 0 01-1.89 0c-5.08-4.86-5.13-4.69-5.13-5.5a1.38 1.38 0 011.37-1.37c.76 0 .72.17 4.7 4 4-3.88 3.95-4 4.71-4a1.38 1.38 0 011.37 1.37c0 .79-.13.7-5.13 5.5z" _fill="#000"/>'
      }
    })
  },
  1524: function (t, e, n) {
    n(11).register({
      pocket_inverted: {
        width: 18,
        height: 18,
        viewBox: '0 0 18 18',
        data: '<path pid="0" d="M9.87 11.755a1.22 1.22 0 01-1.71 0c-4.57-4.37-4.61-4.22-4.61-5a1.23 1.23 0 011.23-1.23c.68 0 .65.15 4.23 3.59 3.64-3.49 3.56-3.59 4.24-3.59a1.24 1.24 0 011.23 1.23c0 .72-.12.63-4.61 5z" _fill="#010101"/><path pid="1" d="M16.37 1.965a.63.63 0 01.63.64v5.43a8 8 0 01-8 8 7.93 7.93 0 01-8-8v-5.43a.65.65 0 01.63-.64h14.74zm0-1H1.63A1.65 1.65 0 000 2.605v5.43a9 9 0 1018 0v-5.43a1.63 1.63 0 00-1.63-1.64z" _fill="#231F20"/>'
      }
    })
  },
  1525: function (t, e, n) {
    n(11).register({
      nzz_headphones: {
        width: 18,
        height: 16,
        viewBox: '0 0 18 16',
        data: '<path pid="0" d="M17.477 7.5C17.148 3.747 13.165.5 9 .5 4.834.5.85 3.747.52 7.5m1.98 1h-2v7h2v-7zm15 0h-2v7h2v-7z" _stroke="#000"/><path pid="1" fill-rule="evenodd" clip-rule="evenodd" d="M7.5 9.04v5.92L11.2 12 7.5 9.04z" _fill="#000" _stroke="#000"/>'
      }
    })
  },
  1526: function (t, e, n) {
    n(11).register({
      nzz_headphones_big: {
        width: 33,
        height: 33,
        viewBox: '0 0 33 33',
        data: '<path pid="0" fill-rule="evenodd" clip-rule="evenodd" d="M16.5 7c-2.626 0-5.18 1.022-7.13 2.625-1.852 1.523-3.192 3.6-3.502 5.875h1.01c.304-1.925 1.464-3.735 3.127-5.103C11.793 8.927 14.128 8 16.5 8s4.706.926 6.495 2.397c1.663 1.368 2.823 3.178 3.126 5.103h1.01c-.31-2.276-1.649-4.352-3.5-5.875C21.68 8.022 19.125 7 16.5 7zM5.8 16.6h3.4V26H5.8v-9.4zm1 1V25h1.4v-7.4H6.8zm17-1h3.4V26h-3.4v-9.4zm1 1V25h1.4v-7.4h-1.4zm-4.86 3.7l-5.74-4.592v9.184l5.74-4.592z" _fill="#000"/>'
      }
    })
  },
  1527: function (t, e, n) {
    n(11).register({
      fontsize: {
        width: 33,
        height: 33,
        viewBox: '0 0 33 33',
        data: '<path pid="0" fill-rule="evenodd" clip-rule="evenodd" d="M21.134 8h1.235l6.363 17.5h-1.064l-1.724-4.742h-8.385L15.834 25.5H14.77L21.134 8zm-3.212 11.758h7.658l-3.829-10.53-3.829 10.53zM8.686 14h1.047l4.416 11.5h-1.071l-1.224-3.188H6.565L5.341 25.5H4.27L8.686 14zm-1.737 7.313h4.521l-2.26-5.887-2.26 5.886z" _fill="#000"/>'
      }
    })
  },
  1528: function (t, e, n) {
    n(11).register({
      nzz_fontsize_big: {
        width: 33,
        height: 33,
        viewBox: '0 0 33 33',
        data: '<path pid="0" fill-rule="evenodd" clip-rule="evenodd" d="M21.134 8h1.235l6.363 17.5h-1.064l-1.724-4.742h-8.385L15.834 25.5H14.77L21.134 8zm-3.212 11.758h7.658l-3.829-10.53-3.829 10.53zM8.686 14h1.047l4.416 11.5h-1.071l-1.224-3.188H6.565L5.341 25.5H4.27L8.686 14zm-1.737 7.313h4.521l-2.26-5.887-2.26 5.886z" _fill="#000"/>'
      }
    })
  },
  1529: function (t, e, n) {
    n(11).register({
      nzz_plus: {
        width: 13,
        height: 13,
        viewBox: '0 0 13 13',
        data: '<path pid="0" _fill="#000" d="M0 6h13v1H0z"/><path pid="1" _fill="#000" d="M7 0v13H6V0z"/>'
      }
    })
  },
  153: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'PageAdvertisementNative1of2',
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
        staticClass: 'resor resor--native resor--native-1of2 widget--1of2'
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
  1530: function (t, e, n) {
    n(11).register({
      nzz_minus: {
        width: 13,
        height: 1,
        viewBox: '0 0 13 1',
        data: '<path pid="0" _fill="#000" d="M0 0h13v1H0z"/>'
      }
    })
  },
  1534: function (t, e, n) {
    n(11).register({
      themarket: {
        width: 400,
        height: 100,
        viewBox: '0 0 400 100',
        data: '<path pid="0" d="M19.71 59.368c1.802.02 3.596-.228 5.325-.735v-6.557c-.995.2-2.006.306-3.02.318-3.974 0-5.842-1.788-5.842-5.762V25.194h8.862V18.24h-8.862V9.02L0 25.194h8.444v22.63c0 7.233 4.212 11.544 11.266 11.544zm48.56-.437v-25.83c0-9.934-5.564-16.034-14.525-16.034a14.306 14.306 0 00-12.318 5.961l-.259.358V0H33.44v58.931h7.73V34.97c.198-6.656 3.973-10.967 9.676-10.967 7.947 0 9.676 5.682 9.676 10.45v24.48h7.749zM310.193 34.79l17.127 24.28h-13.909l-11.067-16.014-4.689 4.947V59.07H286.33V0h11.325v32.744l14.485-15.577h14.822L310.193 34.79zm80.429-17.623h8.425V27.22h-8.425v17.544c0 3.656 1.689 4.848 4.928 4.848a17.266 17.266 0 003.497-.337v9.358a16.434 16.434 0 01-6.378 1.033c-8.186 0-13.292-4.868-13.292-12.954V27.22h-7.57l18.815-18.815v8.762zm-45.44 59.09c.572.01 1.143.056 1.709.139a1.866 1.866 0 011.848 1.887 47.07 47.07 0 01.258 6.1v7.948l-14.822-17.882h-5.821v1.688a5.956 5.956 0 012.582.616c1.511 1.093 1.371 2.106 1.371 4.193v8.146c0 2.722 0 4.788-.218 6.318a1.852 1.852 0 01-1.172 1.808 6.762 6.762 0 01-1.987.298v1.828h9.278v-1.708a8.794 8.794 0 01-2.284-.318c-.914-.338-1.113-.994-1.193-1.868a61.565 61.565 0 01-.218-6.239v-8.464l15.021 18.597h1.609v-14.96a53.693 53.693 0 01.219-6.24 1.762 1.762 0 01.914-1.53 6.536 6.536 0 012.126-.357v-1.709h-9.22v1.709zm28.173 19.789c-.974 1.053-3.537 1.272-7.65 1.272-1.987 0-3.397 0-4.53-.16l15.339-21.656-.437-.894h-15.021c-1.351 0-1.351-.219-1.709-.914h-1.391c-.119 3.318-.476 7.45-.476 7.45h1.649c.229-.957.555-1.89.973-2.781.755-1.57 1.113-1.768 4.987-1.768h6.16L355.691 98.45l.477.934h19.352c.557-2.146 1.431-6.914 1.431-6.914l-1.649-.338a13.655 13.655 0 01-1.987 3.974l.04-.06zm22.949 0c-.954 1.053-3.537 1.272-7.65 1.272-1.987 0-3.378 0-4.53-.16l15.359-21.656-.437-.894h-15.021c-1.351 0-1.351-.219-1.729-.914h-1.391c-.119 3.318-.477 7.45-.477 7.45h1.669c.228-.955.548-1.887.954-2.781.775-1.57 1.133-1.768 5.007-1.768h6.159L378.66 98.45l.477.934h19.412c.576-2.146 1.45-6.914 1.45-6.914l-1.669-.338a13.146 13.146 0 01-1.987 3.974l-.039-.06zM185.079 15.895a14.545 14.545 0 00-13.272 6.974c-2.146-4.43-7.411-6.974-13.133-6.974h-4.948l-17.107 17.107V59.07h10.988V34.532a7.688 7.688 0 017.848-8.265c5.106 0 7.391 3.417 7.391 7.947V59.07h11.246V34.532a7.712 7.712 0 014.652-7.642 7.707 7.707 0 013.097-.623c5.205 0 7.411 3.417 7.411 7.947V59.07h10.987V31.89c0-11.246-7.411-15.995-15.16-15.995zM8.443 74.568v6.199h307.531l6.199-6.2H8.443zM359.11 45.837a9.274 9.274 0 01-8.802 4.789 10.21 10.21 0 01-10.57-9.537h29.982c0-.16.179-1.868.179-3.477 0-13.471-7.749-21.737-20.703-21.737-10.729 0-20.604 8.703-20.604 22.075 0 14.126 10.133 22.392 21.617 22.392a19.232 19.232 0 0017.505-9.537l-8.604-4.967zm-9.755-20.763c6.477 0 9.199 4.093 9.378 8.266h-18.737a9.08 9.08 0 019.359-8.266zM95.946 53.407A12.3 12.3 0 0183.45 40.85v-.139h30.876c.1-.804.146-1.613.139-2.424 0-13.153-7.491-21.339-19.531-21.339-10.908 0-19.452 9.458-19.452 21.498a21.858 21.858 0 006.14 16.054 20.167 20.167 0 0014.325 5.703 18.497 18.497 0 0017.048-9.935l-5.961-3.477a11.702 11.702 0 01-11.087 6.617zm-12.22-19.054a11.088 11.088 0 0111.286-10.51c6.736 0 11.187 4.152 11.385 10.59v.139h-22.69l.02-.219zm193.683-17.524h-1.311 1.291c-9.517 0-11.921 6.954-11.921 6.954v-6.616H254.48V59.07h11.326V39.897c0-9.02 5.026-11.922 10.808-11.922 1.149.004 2.293.124 3.418.358V16.988c-.835-.08-1.689-.16-2.623-.16zm-32.883 35.585V31.79c0-8.424-4.928-15.895-18.22-15.895A17.405 17.405 0 00209 27.161l9.021 4.47c1.808-3.636 3.775-6.616 8.365-6.616 4.589 0 7.073 2.762 7.073 5.742v2.106l-13.451 2.126c-6.994 1.013-12.518 5.186-12.518 12.676 0 6.577 5.444 12.617 14.385 12.617a14.045 14.045 0 0012.359-6.219 28.323 28.323 0 00.417 5.027h10.391a46.479 46.479 0 01-.516-6.676zm-11.067-10.292c0 7.411-4.431 9.696-9.199 9.696a4.904 4.904 0 01-3.801-1.213 4.922 4.922 0 01-1.644-3.635c0-3.239 2.285-4.848 5.186-5.285l9.458-1.45v1.887z"/>'
      }
    })
  },
  1547: function (t, e, n) {
    n(11).register({
      thurgauerzeitung: {
        width: 266,
        height: 32,
        viewBox: '0 0 266 32',
        data: '<path pid="0" d="M20.888 8.282a36.472 36.472 0 01-.194-4.022c0-1.294.039-2.623.194-4.057-2.912.105-6.212.14-9.629.14C7.416.343 3.455.308 0 .203c.155 1.399.233 2.658.233 3.882A41.07 41.07 0 010 8.282c.31-.035.388-.07.504-.07.117 0 .194.035.466.07.233-3.707 1.592-7.03 6.096-7.03h.427c.621 0 .621.035.66.49.116 2.308.194 6.4.194 10.526 0 4.267-.078 8.604-.194 11.052-.039.525-.35.63-.854.63-.466 0-1.398-.105-2.019-.14.039.245.078.385.078.525s0 .28-.039.56c1.747-.07 3.805-.14 5.513-.14 1.476 0 3.378.034 4.931.14-.078-.28-.117-.42-.117-.526 0-.14 0-.279.078-.559-.66.035-1.592.14-2.058.14-.504 0-.815-.105-.854-.63-.194-3.042-.271-7.064-.271-11.087 0-3.672.077-7.448.271-10.491.04-.455.117-.49.622-.49h.698c4.31 0 5.475 3.603 5.747 7.03.271-.07.35-.105.466-.105.116 0 .233.035.543.105zM39.949 24.9c-.078-.28-.078-.384-.078-.524s0-.28.078-.595c-.35.07-1.126.175-1.514.175-.35 0-.583-.105-.622-.559-.116-1.68-.116-3.322-.116-5.002 0-1.713.039-3.392.039-5.106 0-3.742-1.282-5.63-4.582-5.63-2.33 0-4.115.944-4.97 2.553-.077.14-.116.28-.155.35-.039.07-.077.139-.116.139-.04 0-.117-.105-.117-.14.117-.664.194-1.678.194-2.518L28.068 0c-1.553.14-2.796.21-4.077.21-.621 0-1.67 0-2.523-.07.038.28.077.42.077.56 0 .14 0 .244-.077.489.427-.07 1.358-.175 1.785-.175.389 0 .66.14.7.734.116 3.498.155 12.485.155 14.864 0 2.203-.04 4.442-.156 6.715-.039.524-.349.664-.776.664-.427 0-1.243-.105-1.67-.175.078.175.117.315.117.49 0 .21-.039.385-.117.595 1.087-.105 3.184-.14 4.853-.14 1.398 0 2.796.035 3.883.175-.077-.28-.077-.42-.077-.56 0-.14 0-.28.077-.595-.466.07-.932.21-1.398.21-.504 0-.854-.14-.892-.664-.156-2.413-.156-4.862-.156-7.275 0-1.854.156-3.707 1.087-5.316.583-.98 1.437-1.679 2.757-1.679.893 0 1.786.385 1.98 1.854.194 1.609.233 3.218.233 4.826v.035c0 2.519 0 5.072-.155 7.59-.04.49-.388.63-.894.63-.349 0-.737-.07-1.28-.21.038.28.038.419.038.594 0 .14 0 .315-.039.56 1.049-.14 2.446-.21 3.883-.21 1.398 0 3.261.035 4.543.175zm18.331-1.049c-.738.105-1.67.14-2.213.14-.505 0-.621-.175-.66-.77a140.592 140.592 0 01-.155-6.96c0-2.308.194-7.728.194-8.253a39.14 39.14 0 01-2.485.14c-1.398 0-3.145-.035-4.232-.175.077.28.077.42.077.56 0 .14 0 .245-.077.56.62-.106 1.63-.106 2.096-.106.505 0 .544.035.583.7.077 1.573.194 3.427.194 5.28 0 1.784-.117 3.568-.427 5.072-.389 1.819-1.087 3.742-3.456 3.742-.893 0-1.786-.384-1.98-1.853a35.392 35.392 0 01-.233-4.197c0-1.365.039-2.729.039-3.848 0-3.007.155-5.455.155-5.805-.272 0-1.63.105-1.747.105-1.398 0-3.455-.035-4.737-.175.078.28.078.385.078.525s0 .28-.078.56c.582-.106 1.553-.106 1.941-.106.311 0 .35.105.389.455.078 1.574.116 3.112.116 4.686 0 1.819-.038 3.638-.038 5.456 0 3.742 1.28 5.596 4.58 5.596 1.748 0 3.845-.455 4.932-2.413.039-.07.039-.14.078-.175.038-.105.155-.14.194-.14.038 0 .077.105.077.14 0 .105-.077.14-.077.21-.078 1.609-.117 2.098-.117 2.238 1.514-.14 2.99-.21 4.426-.21.66 0 1.709 0 2.524.07-.039-.28-.039-.42-.039-.56 0-.104 0-.244.078-.489zm14.44-12.835c0-1.47-.428-3.357-2.719-3.357-1.747 0-2.756.804-3.417 1.643-.31.42-.582.84-.737 1.154-.078.14-.116.35-.155.455-.04.07-.117.105-.156.105-.039 0-.116-.035-.116-.105 0-.14.077-.245.077-.385 0-.42.156-2.063.195-2.658-1.515.14-2.99.21-4.427.21-.66 0-1.746 0-2.562-.07.039.28.078.42.078.56 0 .14 0 .245-.078.489.738-.104 1.553-.14 1.903-.14.62 0 .931.175.97.875.117 2.308.155 4.581.155 6.855 0 2.203-.038 4.406-.155 6.68-.039.524-.35.664-.815.664-.428 0-1.242-.105-1.631-.175.039.21.078.42.078.595s-.04.314-.078.49c1.087-.106 3.184-.14 4.853-.14 1.398 0 3.184.034 4.271.174-.077-.28-.077-.42-.077-.56 0-.14 0-.244.077-.559-.427.07-1.281.175-1.747.175-.543 0-.893-.14-.932-.665-.039-.909-.078-3.252-.078-5.42 0-1.784.04-3.463.117-4.163.155-1.223.466-2.203 1.048-3.077.66-.98 1.437-1.819 2.174-1.819.156 0 .311.106.311.525v2.168c0 1.154.854 1.889 1.786 1.889s1.786-.735 1.786-2.413zm15.997-1.329c0-1.259-.854-1.853-1.903-1.853-.97 0-1.553.384-2.29.874-.156.105-.234.175-.35.175-.117 0-.31-.07-.62-.28-.855-.525-2.059-.979-3.806-.979-3.727 0-6.212 1.993-6.212 5.455 0 1.33.427 2.518 1.398 3.463.077.105.116.175.116.21 0 .105-.194.21-.466.35-1.903.979-2.33 1.818-2.33 3.182 0 1.889.583 2.973 2.524 3.637.194.07.388.105.621.105.156 0 .35-.07.544-.07h.117c-.04.175-.622.385-.66.385-1.593.455-3.3 1.154-3.3 3.323 0 1.783 1.59 4.336 7.763 4.336 4.387 0 7.843-1.539 7.843-5.77 0-3.532-1.98-5.071-5.94-5.071-.816 0-4.349.105-5.087.105-1.203 0-2.989-.35-2.989-1.574 0-.77 1.087-2.239 1.98-2.239.194 0 .35.035.544.14.776.49 1.864.944 3.494.944 3.611 0 5.98-2.448 5.98-5.63 0-1.084-.428-2.239-.816-2.973-.078-.14-.078-.245-.078-.315 0-.315.893-.734 1.243-.734.077 0 .116.035.116.105 0 .07-.078.35-.078.734 0 .63.311 1.26 1.398 1.26.622 0 1.243-.49 1.243-1.295zM81.96 12.45c0 5.211-.776 5.386-2.29 5.386-1.437 0-2.369-.56-2.369-4.407 0-4.791 1.087-5.176 2.368-5.176 1.087 0 2.29.525 2.29 4.197zm4.077 15.179c0 2.203-2.02 3.601-6.135 3.601-2.912 0-5.241-.943-5.241-3.672 0-2.762 2.99-3.112 5.63-3.112 2.795 0 5.746.35 5.746 3.183zm19.188-2.729c-.117-.279-.156-.419-.156-.594 0-.07 0-.14.078-.42-.621.21-1.242.28-1.475.28-.738 0-1.126-.21-1.126-3.217v-7.905c0-3.881-1.592-5.42-5.94-5.42-2.524 0-6.33.84-6.33 3.742 0 1.189.855 1.748 1.748 1.748.97 0 1.98-.629 1.98-1.818 0-.595.04-1.47.04-2.168 0-.315.154-.525.426-.56.505-.07.932-.105 1.359-.105 1.825 0 2.873.77 2.873 3.777v1.784c0 .28-.039.385-.116.454-.31.28-3.106.875-3.34.944-4.425.945-5.901 2.799-5.901 5.072 0 3.358 2.058 4.756 4.815 4.756 1.902 0 3.804-.49 4.542-2.203.078-.14.039-.42.233-.455.078.036.117.106.117.14 0 .105-.078.175-.078.316 0 .244 0 .524.117.734.504.979 1.164 1.329 2.795 1.329.738 0 2.019-.07 3.339-.21zm-6.562-9.093c0 1.574-.077 3.113-.155 4.687-.078 1.854-1.048 3.498-2.99 3.498-1.126 0-2.252-1.294-2.252-3.603 0-2.938 1.32-3.847 2.99-4.337.505-.14 1.864-.63 2.29-.63.195 0 .117.28.117.385zm24.847 8.044a17.61 17.61 0 01-2.213.14c-.505 0-.621-.175-.66-.77a141.205 141.205 0 01-.155-6.96c0-2.308.194-7.728.194-8.253a39.18 39.18 0 01-2.485.14c-1.398 0-3.145-.035-4.232-.175.078.28.078.42.078.56 0 .14 0 .245-.078.56.621-.106 1.63-.106 2.096-.106.505 0 .544.035.583.7.077 1.573.194 3.427.194 5.28 0 1.784-.117 3.568-.427 5.072-.389 1.819-1.087 3.742-3.456 3.742-.893 0-1.786-.384-1.98-1.853a35.382 35.382 0 01-.233-4.197c0-1.365.039-2.729.039-3.848 0-3.007.155-5.455.155-5.805-.272 0-1.63.105-1.747.105-1.397 0-3.455-.035-4.736-.175.077.28.077.385.077.525s0 .28-.077.56c.582-.106 1.552-.106 1.94-.106.311 0 .35.105.389.455.078 1.574.116 3.112.116 4.686 0 1.819-.038 3.638-.038 5.456 0 3.742 1.281 5.596 4.581 5.596 1.747 0 3.844-.455 4.931-2.413.039-.07.039-.14.078-.175.038-.105.155-.14.194-.14.039 0 .077.105.077.14 0 .105-.077.14-.077.21-.078 1.609-.117 2.098-.117 2.238 1.514-.14 2.99-.21 4.426-.21.661 0 1.709 0 2.524.07-.039-.28-.039-.42-.039-.56 0-.104 0-.244.078-.489zm14.668-8.254c-.349-5.036-2.369-8.044-6.795-8.044-4.348 0-7.726 2.588-7.726 8.848 0 5.876 2.485 8.953 7.843 8.953 2.912 0 5.358-1.503 6.212-4.58-.505 0-.776-.07-1.165-.385-.854 2.797-2.174 3.846-4.038 3.846-3.067 0-4.737-.384-4.737-8.358 0-.455.039-.49.854-.49 3.106 0 6.251 0 9.552.21zm-4.427-2.204c0 .805-.076.805-.893.875-2.057.175-4.115.35-4.698.35-.232 0-.31-.07-.31-.35 0-4.057 1.592-5.876 3.223-5.876 2.563 0 2.678 3.183 2.678 5.001zm18.601-2.377c0-1.47-.427-3.357-2.718-3.357-1.747 0-2.756.804-3.416 1.643a8.45 8.45 0 00-.738 1.154c-.077.14-.116.35-.155.455a.21.21 0 01-.156.105c-.038 0-.116-.035-.116-.105 0-.14.078-.245.078-.385 0-.42.155-2.063.194-2.658-1.514.14-2.99.21-4.426.21-.66 0-1.748 0-2.563-.07.039.28.078.42.078.56 0 .14 0 .245-.078.489.738-.104 1.553-.14 1.903-.14.621 0 .932.175.97.875.117 2.308.156 4.581.156 6.855 0 2.203-.039 4.406-.156 6.68-.038.524-.349.664-.815.664-.427 0-1.243-.105-1.63-.175.039.21.077.42.077.595s-.038.314-.077.49c1.086-.106 3.183-.14 4.852-.14 1.398 0 3.184.034 4.271.174-.078-.28-.078-.42-.078-.56 0-.14 0-.244.078-.559-.426.07-1.281.175-1.747.175-.543 0-.893-.14-.932-.665-.039-.909-.077-3.252-.077-5.42 0-1.784.038-3.463.116-4.163.156-1.223.466-2.203 1.049-3.077.659-.98 1.436-1.819 2.173-1.819.156 0 .311.106.311.525v2.168c0 1.154.854 1.889 1.786 1.889s1.786-.735 1.786-2.413zm23.18 13.884c-.155-1.399-.272-2.728-.272-4.267 0-1.398.078-2.937.272-4.791-.272.035-.387.035-.543.035-.156 0-.272-.035-.544-.07-.232 8.114-5.164 8.15-12.579 8.15-.156 0-.311.034-.389.034-.116 0-.154-.035-.154-.105 0-.07.038-.175.193-.385.194-.28.505-.664.738-1.119 2.989-5.596 8.037-14.444 11.492-20.18.35-.559.621-.874 1.049-1.468-.156-.175-.234-.28-.234-.525-2.329.105-5.124.14-8.036.14-3.067 0-6.173-.035-8.853-.14.156 1.224.195 2.448.195 3.637 0 1.504-.078 2.973-.195 4.057.272-.035.388-.07.466-.07.078 0 .194 0 .466.07 0-3.427 1.048-5 2.757-5.805 1.941-.91 5.125-.84 7.26-.84h.582c.117 0 .195.035.195.14 0 .105-.078.28-.272.56-.233.314-.543.7-.777 1.154-3.339 6.155-7.804 13.954-11.065 19.34-.31.525-.893 1.399-1.475 1.889.155.21.117.35.117.56 2.562-.07 6.017-.106 9.473-.106 3.456 0 7.027.035 10.133.105zm15.453-9.303c-.349-5.036-2.368-8.044-6.794-8.044-4.349 0-7.727 2.588-7.727 8.848 0 5.876 2.485 8.953 7.843 8.953 2.912 0 5.359-1.503 6.213-4.58-.506 0-.777-.07-1.165-.385-.855 2.797-2.175 3.846-4.038 3.846-3.068 0-4.737-.384-4.737-8.358 0-.455.039-.49.854-.49 3.106 0 6.251 0 9.551.21zm-4.426-2.204c0 .805-.077.805-.893.875-2.057.175-4.116.35-4.697.35-.234 0-.312-.07-.312-.35 0-4.057 1.592-5.876 3.223-5.876 2.563 0 2.679 3.183 2.679 5.001z" _fill="#18191B"/><path pid="1" d="M198.045 2.377c0-1.084-.738-2.168-2.213-2.168-1.515 0-2.252 1.084-2.252 2.168 0 1.05.737 2.169 2.252 2.169 1.475 0 2.213-1.12 2.213-2.169zm2.329 22.558c-.076-.28-.076-.42-.076-.56 0-.14 0-.279.038-.559-.466.07-1.281.175-1.747.175-.466 0-.777-.175-.816-.91a125.694 125.694 0 01-.155-6.61c0-2.833.078-5.63.194-8.673-1.32.105-2.563.14-3.804.14-.855 0-2.098 0-3.068-.07.039.21.077.385.077.56 0 .14-.038.314-.077.49.621-.036 1.476-.106 1.902-.106.506 0 .816.14.855.735.116 2.273.155 4.51.155 6.715 0 2.273-.039 4.512-.155 6.82-.039.734-.427.944-1.01.944-.349 0-1.165-.105-1.786-.245.039.28.039.454.039.595 0 .14 0 .28-.039.524 1.087-.105 3.262-.14 5.009-.14 1.553 0 3.456.07 4.464.175zm9.986-3.077h-.31c-.232 0-.466-.035-.893-.28 0 1.189 0 2.448-1.126 2.448-.776 0-1.204-.42-1.437-1.014-.232-.56-.232-5.596-.232-6.296 0-.7.155-7.1.155-7.344 0-.35.038-.385.505-.385a40.3 40.3 0 012.911.105c-.039-.245-.077-.42-.077-.56 0-.14.038-.28.077-.559-1.125.07-1.941.07-2.872.07-.544 0-.583-.035-.583-.525 0-1.364.155-3.252.194-3.846-.194-.036-.194-.036-.31-.106-.932.595-2.563 1.47-3.767 1.924.039.385.117 1.539.117 2.168 0 .35-.078.385-.544.385s-1.514 0-2.174-.105c.039.315.078.454.078.595 0 .14 0 .28-.078.56a31.25 31.25 0 012.407-.106c.272 0 .311.07.311.35 0 3.847-.194 7.624-.194 11.472 0 2.553 1.204 4.266 4.426 4.266 2.912 0 3.028-1.119 3.416-3.217zm19.691 1.993a17.6 17.6 0 01-2.213.14c-.505 0-.621-.175-.66-.77a141.205 141.205 0 01-.155-6.96c0-2.308.194-7.728.194-8.253-.272.035-1.902.14-2.485.14-1.398 0-3.145-.035-4.232-.175.078.28.078.42.078.56 0 .14 0 .245-.078.56.622-.106 1.63-.106 2.097-.106.504 0 .543.035.582.7.078 1.573.194 3.427.194 5.28 0 1.784-.116 3.568-.427 5.072-.388 1.819-1.087 3.742-3.456 3.742-.893 0-1.785-.384-1.979-1.853-.156-1.26-.234-2.728-.234-4.197 0-1.365.039-2.729.039-3.848 0-3.007.156-5.455.156-5.805-.272 0-1.631.105-1.747.105-1.399 0-3.456-.035-4.737-.175.077.28.077.385.077.525s0 .28-.077.56c.582-.106 1.552-.106 1.941-.106.311 0 .35.105.389.455a96.41 96.41 0 01.115 4.686c0 1.819-.039 3.638-.039 5.456 0 3.742 1.282 5.596 4.582 5.596 1.747 0 3.844-.455 4.931-2.413.039-.07.039-.14.078-.175.038-.105.155-.14.194-.14.039 0 .078.105.078.14 0 .105-.078.14-.078.21-.078 1.609-.117 2.098-.117 2.238 1.515-.14 2.99-.21 4.426-.21.66 0 1.709 0 2.524.07-.039-.28-.039-.42-.039-.56 0-.104 0-.244.078-.489zm19.132 1.051c-.078-.28-.078-.385-.078-.525s0-.28.078-.56c-.388.07-1.127.14-1.515.14-.349 0-.581-.07-.62-.42a98.19 98.19 0 01-.117-4.79c0-1.82.039-3.604.039-5.422 0-3.742-1.282-5.595-4.582-5.595-1.786 0-3.922.49-5.008 2.553-.039.07-.039.175-.078.244-.039.035-.078.07-.078.105l-.116-.07c0-.104.038-.245.038-.35.039-.769.117-1.748.156-2.342-1.475.14-2.99.21-4.426.21-.66 0-1.398 0-2.175-.07.039.28.078.42.078.559 0 .14 0 .245-.078.49.389-.036 1.243-.14 1.632-.14.737 0 .815.175.854.7.115 2.377.154 4.72.154 7.029 0 2.239-.039 4.442-.154 6.715-.039.49-.35.63-.778.63-.426 0-1.242-.106-1.669-.176.039.21.078.35.078.525 0 .175-.039.35-.078.56 1.087-.106 3.184-.14 4.854-.14 1.397 0 2.795.034 3.882.174-.078-.28-.078-.419-.078-.56 0-.14 0-.244.078-.559-.505.105-.971.175-1.359.175-.543 0-.893-.14-.932-.524-.155-2.378-.116-4.722-.116-7.1 0-2.344.233-3.987.776-5.176.699-1.504 1.67-2.064 3.029-2.064.893 0 1.786.385 1.98 1.854a35.38 35.38 0 01.233 4.197c0 2.728 0 5.526-.156 8.254-.039.42-.388.56-.893.56-.348 0-.776-.106-1.28-.21.038.28.038.454.038.594 0 .14 0 .315-.038.56 1.048-.14 2.445-.21 3.882-.21 1.398 0 3.261.035 4.543.175zm16.615-15.215c0-1.259-.854-1.853-1.903-1.853-.97 0-1.552.384-2.29.874-.156.105-.233.175-.35.175-.116 0-.311-.07-.621-.28-.854-.525-2.058-.979-3.805-.979-3.727 0-6.212 1.993-6.212 5.455 0 1.33.427 2.518 1.398 3.463.078.105.116.175.116.21 0 .105-.194.21-.466.35-1.903.979-2.329 1.818-2.329 3.182 0 1.889.582 2.973 2.523 3.637.195.07.389.105.622.105.155 0 .349-.07.543-.07h.117c-.039.175-.622.385-.66.385-1.592.455-3.3 1.154-3.3 3.323 0 1.783 1.591 4.336 7.765 4.336 4.387 0 7.842-1.539 7.842-5.77 0-3.532-1.98-5.071-5.94-5.071-.815 0-4.348.105-5.086.105-1.204 0-2.99-.35-2.99-1.574 0-.77 1.087-2.239 1.981-2.239.194 0 .349.035.543.14.776.49 1.863.944 3.494.944 3.611 0 5.979-2.448 5.979-5.63 0-1.084-.426-2.239-.815-2.973-.078-.14-.078-.245-.078-.315 0-.315.893-.734 1.243-.734.078 0 .117.035.117.105 0 .07-.078.35-.078.734 0 .63.311 1.26 1.397 1.26.622 0 1.243-.49 1.243-1.295zm-6.755 2.763c0 5.211-.777 5.386-2.292 5.386-1.436 0-2.368-.56-2.368-4.407 0-4.791 1.087-5.176 2.368-5.176 1.088 0 2.292.525 2.292 4.197zm4.076 15.179c0 2.203-2.019 3.601-6.135 3.601-2.912 0-5.241-.943-5.241-3.672 0-2.762 2.99-3.112 5.63-3.112 2.795 0 5.746.35 5.746 3.183z" _fill="#18191B"/>'
      }
    })
  },
  1561: function (t, e, n) {
    n(11).register({
      'thurgauerzeitung--mobile': {
        width: 27,
        height: 16,
        viewBox: '0 0 27 16',
        data: '<path pid="0" d="M13.526 5.243a23.6 23.6 0 01-.126-2.604c0-.838.025-1.699.126-2.628C11.64.08 9.503.102 7.29.102 4.8.102 2.237.08 0 .012c.1.905.15 1.72.15 2.513 0 .86-.05 1.721-.15 2.718.2-.023.251-.045.327-.045.075 0 .125.022.301.045C.78 2.843 1.66.69 4.575.69h.277c.402 0 .402.023.428.317.075 1.495.125 4.144.125 6.816 0 2.763-.05 5.572-.125 7.157-.026.34-.227.408-.554.408-.301 0-.905-.068-1.307-.091.025.159.05.249.05.34 0 .09 0 .18-.025.362a95.424 95.424 0 013.57-.09c.956 0 2.188.022 3.193.09-.05-.181-.075-.272-.075-.34 0-.09 0-.18.05-.362-.427.023-1.03.09-1.332.09-.327 0-.528-.067-.554-.407-.125-1.97-.176-4.575-.176-7.18 0-2.377.05-4.823.176-6.793C8.322.714 8.372.69 8.7.69h.452c2.791 0 3.545 2.333 3.721 4.552.176-.045.226-.068.302-.068.075 0 .15.023.352.068zm12.445 10.746a24.05 24.05 0 01-.176-2.764c0-.905.05-1.902.176-3.102-.176.022-.25.022-.351.022-.101 0-.177-.022-.353-.045-.15 5.254-3.343 5.277-8.145 5.277-.1 0-.201.023-.252.023-.075 0-.1-.023-.1-.068 0-.046.025-.113.125-.25.126-.18.327-.43.478-.724 1.936-3.624 5.204-9.353 7.442-13.067.226-.362.402-.566.679-.951-.1-.113-.151-.181-.151-.34-1.509.068-3.319.09-5.204.09-1.986 0-3.998-.022-5.732-.09.1.793.125 1.585.125 2.355 0 .974-.05 1.925-.126 2.627.176-.022.252-.045.302-.045.05 0 .126 0 .302.045 0-2.22.678-3.238 1.785-3.76C18.052.635 20.114.68 21.496.68h.377c.076 0 .126.023.126.091s-.05.181-.176.362c-.15.204-.352.453-.503.748-2.162 3.985-5.053 9.035-7.165 12.523-.2.34-.578.906-.955 1.223.1.136.075.227.075.363 1.66-.046 3.897-.069 6.135-.069 2.237 0 4.55.023 6.561.069z" _fill="#18191B"/>'
      }
    })
  },
  1564: function (t, e, n) {
    n(11).register({
      bernet: {
        width: 101,
        height: 38,
        viewBox: '0 0 101 38',
        data: '<path pid="0" d="M52.502 12.315c0 1.028-2.02 12.342 2.525 11.314 4.544-1.029 11.744-7.842 13.632-7.2C70.342 17 70.165 19.627 69 22c-1.262 2.571-1.35 7.8 5.213 3.172 6.565-4.629 9.594-8.229 11.614-7.715 2.02.515.505 4.629 4.544 2.572 4.04-2.057 9.089-6.686 9.594-5.143.504 1.543-4.545 14.4-5.05 18" _stroke="#000" stroke-linecap="round"/><path pid="1" d="M10.089 1C6.723 9.914.999 25.171 1 29.8c0 3.637 2.02 6.686 5.05 3.086 3.382-4.02 6.955-12.144 8.583-11.315 2.02 1.029-1.01 7.715 4.04 5.658 3.38-1.378 5.049-5.143 5.049-2.058 0 1.646 1.346 2.058 2.02 2.058" _stroke="#000" stroke-linecap="round" stroke-linejoin="round"/><ellipse pid="2" cx="26.246" cy="19.514" rx=".405" ry=".366" _stroke="#000"/><path pid="3" d="M42.404 37c0-3.6 6.564-15.429 8.078-23.657" _stroke="#000" stroke-linecap="round"/>'
      }
    })
  },
  1565: function (t, e, n) {
    n(11).register({
      nzz_close: {
        width: 14,
        height: 14,
        viewBox: '0 0 14 14',
        data: '<path pid="0" d="M1 1l12 12M1 13L13 1" _stroke="#000"/>'
      }
    })
  },
  1566: function (t, e, n) {
    n(11).register({
      ico_chevron_down_48: {
        width: 48,
        height: 48,
        viewBox: '0 0 48 48',
        data: '<path pid="0" d="M17 21l7 7 7-7" _stroke="#000"/>'
      }
    })
  },
  1567: function (t, e, n) {
    n(11).register({
      ico_close_48: {
        width: 48,
        height: 48,
        viewBox: '0 0 48 48',
        data: '<path pid="0" d="M17 17l14 14m0-14L17 31" _stroke="#000"/>'
      }
    })
  },
  1574: function (t, e, n) {
    n(11).register({
      ico_share_48: {
        width: 16,
        height: 16,
        viewBox: '0 0 48 48',
        data: '<path pid="0" d="M24.98 15L33 22.77l-8.02 7.5v-4.436c-3.996.1-6.502 1.445-8.65 4.513L15 32.246l.446-2.275c1.148-5.856 4.013-9.56 9.534-10.522V15zm-7.985 12.848l-.068.219c2.158-2.237 4.794-3.22 8.544-3.22h.491v3.16l5.614-5.249-5.614-5.44v2.974l-.42.061c-4.549.663-7.187 3.242-8.547 7.495z"/>'
      }
    })
  },
  1575: function (t, e, n) {
    n(11).register({
      ico_arrow_contenttable_nzz: {
        width: 5,
        height: 13,
        viewBox: '0 0 5 13',
        data: '<path pid="0" d="M.5 9.5l2 2 2-2" _stroke="#000"/><path pid="1" _fill="#000" _stroke="#000" stroke-width=".5" d="M2.75.25v10.5h-.5V.25z"/>'
      }
    })
  },
  1577: function (t, e, n) {
    n(11).register({
      nzz_checkmark_small: {
        width: 10,
        height: 8,
        viewBox: '0 0 10 8',
        data: '<path pid="0" d="M3.536 7.07L0 3.536l.707-.707 2.829 2.829L9.193 0 9.9.707 3.536 7.071z" _fill="#000"/>'
      }
    })
  },
  1578: function (t, e, n) {
    n(11).register({
      ico_arrow_right: {
        width: 32,
        height: 22,
        viewBox: '0 0 32 22',
        data: '<path pid="0" d="M28.128 10L18.47 1.382 19.762 0 32 11 19.762 22l-1.292-1.382L28.128 12H0v-2h28.128z" clip-rule="evenodd"/>'
      }
    })
  },
  1579: function (t, e, n) {
    n(11).register({
      ico_play_rounded: {
        width: 16,
        height: 16,
        viewBox: '0 0 16 16',
        data: '<path pid="0" _fill="#fff" d="M5.155 14a1.07 1.07 0 01-.547-.152c-.375-.222-.608-.653-.608-1.12V3.272c0-.469.233-.898.608-1.12a1.062 1.062 0 011.118.015l7.745 4.838c.162.105.295.252.387.426a1.215 1.215 0 010 1.137 1.15 1.15 0 01-.387.426l-7.746 4.839a1.075 1.075 0 01-.57.167z"/>'
      }
    })
  },
  1580: function (t, e, n) {
    n(11).register({
      ico_camera: {
        width: 24,
        height: 24,
        viewBox: '0 0 24 24',
        data: '<path pid="0" fill-rule="evenodd" clip-rule="evenodd" d="M4.059 7.647C3.474 7.647 3 8.121 3 8.706v8.823c0 .585.474 1.06 1.059 1.06H19.94a1.06 1.06 0 001.059-1.06V8.706c0-.585-.474-1.059-1.059-1.059h-2.963l-1.45-2.176a1.059 1.059 0 00-.88-.471H9.353a1.06 1.06 0 00-.881.471l-1.45 2.176H4.059zM14.647 6.06l1.765 2.647h3.53v8.823H4.057V8.705h3.532L9.353 6.06h5.294zm-.177 6.176a2.47 2.47 0 11-4.94 0 2.47 2.47 0 014.94 0zm1.06 0a3.53 3.53 0 11-7.06 0 3.53 3.53 0 017.06 0zM3.53 6.5a.53.53 0 01.529-.53h2.647a.53.53 0 110 1.06H4.059a.53.53 0 01-.53-.53zm14.646 4.853a.882.882 0 100-1.765.882.882 0 000 1.765z" _fill="#fff"/>'
      }
    })
  },
  1581: function (t, e, n) {
    n(11).register({
      ico_edit: {
        width: 24,
        height: 24,
        viewBox: '0 0 24 24',
        data: '<path pid="0" fill-rule="evenodd" clip-rule="evenodd" d="M17.291 4.254a.868.868 0 011.227 0l1.228 1.227a.868.868 0 010 1.228l-7.905 7.904a.433.433 0 01-.17.105l-2.76.92a.434.434 0 01-.55-.548l.92-2.761a.433.433 0 01.106-.17l7.904-7.905zm-2.907 1.048H4.868A.868.868 0 004 6.17v13.017c0 .479.389.867.868.867h13.017c.48 0 .868-.388.868-.867V9.312l-1.042 1.042v8.224c0 .24-.194.434-.434.434H5.475a.434.434 0 01-.434-.434V6.777c0-.24.195-.434.434-.434h7.867l1.042-1.041zm3.788-.005a.26.26 0 00-.368 0l-7.67 7.67-.544 1.414a.087.087 0 00.112.112l1.414-.543 7.67-7.67a.26.26 0 000-.369l-.614-.614z" _fill="#fff"/>'
      }
    })
  },
  1582: function (t, e, n) {
    n(11).register({
      nzz_play: {
        width: 21,
        height: 28,
        viewBox: '0 0 21 28',
        data: '<path pid="0" d="M0 0v28l21-14L0 0z" _fill="#000"/>'
      }
    })
  },
  1583: function (t, e, n) {
    n(11).register({
      nzz_pause: {
        width: 12,
        height: 28,
        viewBox: '0 0 12 28',
        data: '<path pid="0" _fill="#000" d="M0 0h4v28H0zm8 0h4v28H8z"/>'
      }
    })
  },
  1584: function (t, e, n) {
    n(11).register({
      nzz_back_15: {
        width: 21,
        height: 23,
        viewBox: '0 0 21 23',
        data: '<path pid="0" d="M7.36 15.5h.81V9.245h-.685c-.153.657-.666 1.017-1.269 1.017h-.198v.729h.324c.342 0 .828-.135 1.017-.396V15.5zm4.404.135c1.323 0 2.169-.9 2.169-2.214 0-1.35-.72-2.187-1.908-2.187-.675 0-1.18.288-1.476.837l.234-2.124h2.844v-.702H10.17l-.37 3.627.775.081c.17-.657.585-1.044 1.25-1.044.865 0 1.297.621 1.297 1.557 0 .918-.486 1.476-1.314 1.476-.73 0-1.143-.45-1.27-1.071l-.836.099c.162 1.017.954 1.665 2.06 1.665z" _fill="#000"/><path pid="1" d="M.5 12.5c0 5.523 4.477 10 10 10s10-4.477 10-10-4.477-10-10-10" _stroke="#000"/><path pid="2" d="M11 .5v4.167L7.667 2.583 11 .5z" _fill="#000"/>'
      }
    })
  },
  1585: function (t, e, n) {
    n(11).register({
      nzz_forward_15: {
        width: 21,
        height: 23,
        viewBox: '0 0 21 23',
        data: '<path pid="0" d="M8.36 15.5h.81V9.245h-.685c-.153.657-.666 1.017-1.269 1.017h-.198v.729h.324c.342 0 .828-.135 1.017-.396V15.5zm4.404.135c1.323 0 2.169-.9 2.169-2.214 0-1.35-.72-2.187-1.908-2.187-.675 0-1.18.288-1.476.837l.234-2.124h2.844v-.702H11.17l-.37 3.627.775.081c.17-.657.585-1.044 1.25-1.044.865 0 1.297.621 1.297 1.557 0 .918-.486 1.476-1.314 1.476-.73 0-1.143-.45-1.27-1.071l-.836.099c.162 1.017.954 1.665 2.06 1.665z" _fill="#000"/><path pid="1" d="M20.5 12.5c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10" _stroke="#000"/><path pid="2" d="M10 .5v4.167l3.333-2.084L10 .5z" _fill="#000"/>'
      }
    })
  },
  1587: function (t, e, n) {
    n(11).register({
      ico_back: {
        width: 16,
        height: 11,
        viewBox: '0 0 16 11',
        data: '<path pid="0" fill-rule="evenodd" clip-rule="evenodd" d="M1.936 6l4.829 4.31-.646.69L0 5.5 6.12 0l.645.69L1.935 5H16v1H1.936z" _fill="#000"/>'
      }
    })
  },
  1588: function (t, e, n) {
    n(11).register({
      ico_arrow_pointy: {
        width: 16,
        height: 16,
        viewBox: '0 0 11 17',
        data: '<path pid="0" _fill="#000" d="M5 0h1v16H5z"/><path pid="1" d="M.5 10.5l5 5 5-5" _stroke="#000"/>'
      }
    })
  },
  1592: function (t, e, n) {
    n(11).register({
      nzz_arrow_sponsored: {
        width: 13,
        height: 5,
        viewBox: '0 0 13 5',
        data: '<path pid="0" d="M9.5 4.5l2-2-2-2" _stroke="#000"/><path pid="1" _fill="#000" _stroke="#000" stroke-width=".5" d="M.25 2.25h10.5v.5H.25z"/>'
      }
    })
  },
  1597: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(7),
    o = n.n(r),
    c = {
      name: 'Breadcrumbs',
      components: {
        HeaderButton: function () {
          return n.e(7).then(n.bind(null, 325))
        }
      },
      filters: {
        filterRemarks: function (t) {
          return t ? t.replace(/ \[.+\]$/gi, '') : ''
        }
      },
      computed: {
        origin: function () {
          return this.$config.clientBaseUrl
        },
        breadcrumbs: function () {
          var t = this.$store.state.metadata && this.$store.state.metadata.breadcrumbs;
          return t ? [
          ].concat(o() ([{
            name: 'Startseite',
            path: '/'
          }
          ]), o() (t)) : [
            {
              name: 'Startseite',
              path: '/'
            }
          ]
        },
        isAmp: function () {
          return 'amp' === this.$store.state.isrendition
        }
      },
      head: function () {
        return {
        }
      }
    },
    l = (n(989), n(1)),
    d = {
      extends : Object(l.a) (c, (function () {
        var t = this,
        e = t.$createElement,
        n = t._self._c || e;
        return n('div', {
          staticClass: 'breadcrumbs'
        }, [
          t._l(t.breadcrumbs, (function (e, r) {
            return [n('HeaderButton', {
              key: r + '-button',
              class : [
                'breadcrumbs__item',
                {
                  'breadcrumbs__item--first': 0 === r
                },
                {
                  'breadcrumbs__item--title': e.isTitle
                }
              ],
              attrs: {
                'data-nzz-referrer': e.path ? 'breadcrumbLevel' + r : '',
                to: t.isAmp && e.isTitle ? t.articlePath : e.path,
                title: e.isTitle
              }
            }, [
              n(t.isAmp && e.isTitle ? 'h1' : 'span', {
                tag: 'component'
              }, [
                t._v('\n        ' + t._s(t._f('filterRemarks') (e.name)) + '\n      ')
              ])
            ], 1),
            t._v(' '),
            t.breadcrumbs[r + 1] ? n('div', {
              key: r + '-icon',
              staticClass: 'breadcrumbs__icon'
            }, [
              n('svgicon', {
                staticClass: 'icon--caretright',
                attrs: {
                  'data-nzz-referrer': 'breadcrumbLevel' + r,
                  height: '6',
                  name: 'nzz_chevron',
                  width: '12',
                  color: 'r-#000000'
                }
              })
            ], 1) : t._e()]
          }))
        ], 2)
      }), [
      ], !1, null, null, null).exports,
      computed: {
        articlePath: function () {
          return this.$route.path.replace('/amp', '')
        }
      }
    },
    m = (n(1501), Object(l.a) (d, undefined, undefined, !1, null, null, null));
    e.default = m.exports
  },
  163: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'PageText',
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
    o = (n(781), n(1)),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.data && t.data.content ? n('p', {
        staticClass: 'pagecomponents text',
        domProps: {
          innerHTML: t._s(t.data.content.text)
        }
      }) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  172: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'WidgetTopicHeader',
      components: {
        Tags: n(337).default
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
      computed: {
        imageType: function () {
          return this.$store.state.isrendition || this.$route.fullPath.indexOf('/fragments/render') > - 1 ? 'fragment' : 'first'
        },
        tags: function () {
          var t = [
            this.data.content.tag0,
            this.data.content.tag1,
            this.data.content.tag2,
            this.data.content.tag3,
            this.data.content.tag4
          ].filter((function (t) {
            return null != t
          }));
          return t
        }
      }
    },
    o = (n(1291), n(1)),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.data.content ? n('div', {
        staticClass: 'topic-header'
      }, [
        t.data.content.image ? n('figure', {
          staticClass: 'topic-header__image'
        }, [
          n('div', {
            directives: [
              {
                name: 'srcset',
                rawName: 'v-srcset',
                value: {
                  teaserImage: t.data.content.image,
                  parent: this.$parent,
                  layout: 'page',
                  imageType: t.imageType
                },
                expression: '{\n        teaserImage: data.content.image,\n        parent: this.$parent,\n        layout: \'page\',\n        imageType: imageType\n      }'
              }
            ],
            staticClass: 'image-placeholder'
          }, [
            n('img', {
              tag: 'component',
              staticClass: 'image-placeholder__image',
              attrs: {
                src: t.data.content.image.url
              }
            })
          ], 1)
        ]) : t._e(),
        t._v(' '),
        n('div', {
          staticClass: 'topic-header__content'
        }, [
          t.data.content.catchline ? n('div', {
            staticClass: 'topic-header__catchline'
          }, [
            t._v('\n      ' + t._s(t.data.content.catchline) + '\n    ')
          ]) : t._e(),
          t._v(' '),
          t.data.content.title ? n('h2', {
            staticClass: 'topic-header__title'
          }, [
            t._v('\n      ' + t._s(t.data.content.title) + '\n    ')
          ]) : t._e(),
          t._v(' '),
          t.data.content.description ? n('p', {
            staticClass: 'topic-header__description',
            domProps: {
              innerHTML: t._s(t.data.content.description)
            }
          }) : t._e(),
          t._v(' '),
          t.tags.length > 0 ? n('Tags', {
            attrs: {
              type: 'topic-header',
              tags: t.tags,
              title: 'Verwandte Themen:'
            }
          }) : t._e()
        ], 1)
      ]) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  173: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(51),
    o = n(41),
    c = n(347),
    l = n(19),
    d = {
      name: 'WidgetTopic',
      components: {
        WidgetTitle: o.default,
        SimpleArticle: r.default,
        Pagination: c.default
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
        isTabletBreakpoint: function () {
          return l.store.isTabletBreakpoint
        },
        articles: function () {
          return this.data.content && this.data.content['nzz-feed'] && this.data.content['nzz-feed'].articles ? this.data.content['nzz-feed'].articles : [
          ]
        },
        pagination: function () {
          return this.data.content && this.data.content && this.data.content.pagination ? this.data.content.pagination : null
        },
        firstPage: function () {
          return !!(this.pagination && this.pagination.currentPage && this.pagination.currentPage.id) && 1 === this.pagination.currentPage.id
        }
      }
    },
    m = n(1),
    component = Object(m.a) (d, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.data.content ? n('div', {
        staticClass: 'widget--topic widget--2of3',
        attrs: {
          'data-source-element-widget': 'Widget-Topics-paginiert'
        }
      }, [
        t.firstPage ? n('WidgetTitle', {
          attrs: {
            data: t.data.content
          },
          scopedSlots: t._u([{
            key: 'h2',
            fn: function () {
              return [t._v('\n      ' + t._s(t.data.content['widget-title']) + '\n    ')]
            },
            proxy: !0
          }
          ], null, !1, 1654102266)
        }) : t.pagination ? n('Pagination', {
          attrs: {
            pagination: t.pagination,
            top: ''
          }
        }) : t._e(),
        t._v(' '),
        t._l(t.articles, (function (e, r) {
          return n('SimpleArticle', {
            key: 'widget-' + r + '-' + t.$store.state.isrendition,
            attrs: {
              data: Object.assign({
              }, t.data, {
                articles: [
                  e
                ]
              }),
              size: 'paginated',
              'source-elem': 'Widget-Topic-Articles',
              'teaser-title-tag': 'h3',
              'referrer-type': 'topicListTeaser'
            }
          })
        })),
        t._v(' '),
        t.pagination ? n('Pagination', {
          attrs: {
            pagination: t.pagination
          }
        }) : t._e()
      ], 2) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  176: function (t, e, n) {
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
              },
              prevElement: ''
            }
          }
        }
      },
      computed: {
        afterQuestion: function () {
          return this.data.prevElement && this.data.prevElement.includes('question')
        }
      }
    },
    o = (n(1299), n(1)),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement;
      return (t._self._c || e) ('p', {
        staticClass: 'articlecomponent answer',
        class : {
          'answer--after-question': t.afterQuestion
        },
        attrs: {
          'data-team-answer': ''
        },
        domProps: {
          innerHTML: t._s(t.data.content.text)
        }
      })
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  178: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(337),
    o = n(64),
    c = {
      components: {
        Tags: r.default
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
              content: {
              }
            }
          }
        }
      },
      computed: {
        computedTags: function () {
          return this.data.content.slice(0, 5)
        },
        title: function () {
          return 'Mehr zum Thema'
        }
      }
    },
    l = n(1),
    component = Object(l.a) (c, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.$store.state.features.gemeinde && t.data.content && t.data.content.length > 0 ? n('div', {
        staticClass: 'articlecomponent articlemetainfo'
      }, [
        t.data.content.length > 0 ? n('Tags', {
          attrs: {
            type: 'articlemetainfo',
            tags: t.computedTags,
            title: t.title
          }
        }) : t._e()
      ], 1) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  179: function (t, e, n) {
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
      }
    },
    o = (n(781), n(1)),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', {
        staticClass: 'articlecomponent text'
      }, [
        n('span', {
          domProps: {
            innerHTML: t._s(t.data.content['author-text'])
          }
        }),
        t._v(' '),
        n('span', {
          domProps: {
            innerHTML: t._s(t.data.content.author)
          }
        }),
        t._v(' '),
        n('span', {
          domProps: {
            innerHTML: t._s(t.data.content['author-email-text'])
          }
        }),
        t._v(' '),
        n('a', {
          attrs: {
            href: 'mailto:' + t.data.content['author-email']
          },
          domProps: {
            innerHTML: t._s(t.data.content['author-email'])
          }
        })
      ])
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  188: function (t, e, n) {
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
              styles: {
              }
            }
          }
        }
      },
      computed: {
        styleClass: function () {
          var t = this.data.styles;
          return (t = void 0 === t ? {
          }
           : t).divider
        }
      }
    },
    o = (n(1309), n(1)),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement;
      return (t._self._c || e) ('hr', {
        staticClass: 'articlecomponent divider',
        class : t.styleClass
      })
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  194: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'InstagramEmbed',
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
      head: function () {
        return {
          script: [
            {
              hid: 'instagram-emebed',
              type: 'text/javascript',
              src: '//www.instagram.com/embed.js',
              async: 'async',
              defer: 'defer',
              preserve: 'preserve'
            },
            {
              hid: 'instagram-script-'.concat(this.data.id),
              type: 'text/javascript',
              innerHTML: 'deferred(function(){if(window.instgrm) {window.instgrm.Embeds.process()}})',
              async: 'async',
              defer: 'defer',
              preserve: 'preserve'
            }
          ]
        }
      }
    },
    o = (n(1321), n(1)),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', {
        ref: 'insta',
        staticClass: 'articlecomponent articlecomponent--narrow instagram'
      }, [
        n('div', {
          staticClass: 'social__container',
          domProps: {
            innerHTML: t._s(t.data.content.instagram.html || t.data.content.instagram)
          }
        })
      ])
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  195: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(64),
    o = n(950);
    function c(component) {
      return component && component.styles && 'headline--breaking' === component.styles['header-highlight']
    }
    function l(component) {
      return component && component.styles && 'headline--sponsored' === component.styles['header-highlight']
    }
    function d(t, e) {
      var content = t.content,
      data = t.data,
      n = content.indexOf(data);
      return - 1 !== n && content.slice(n).some(e)
    }
    var m = {
      name: 'ArticleKaltura',
      components: {
        ImageDescription: function () {
          return n.e(1).then(n.bind(null, 367))
        }
      },
      mixins: [
        n(17).a,
        r.a,
        o.a
      ],
      props: {
        data: {
          type: Object,
        default:
          function () {
            return {
              data: {
                _kalturaDirective: {
                }
              },
              prevElement: '',
              nextElement: ''
            }
          }
        },
        content: {
          type: Array,
        default:
          function () {
            return []
          }
        }
      },
      data: function () {
        return {
          minHeight: window.nzzLiveComponents ? window.innerWidth > 768 ? 360 : 190 : 0,
          item: this.$store.state.metadata,
          height: 0,
          update: 0
        }
      },
      computed: {
        htmlContent: function () {
          try {
            var t = this.data.data._kalturaDirective.originalEmbed.split('"duration" content="');
            return t[0] + '"duration" content="PT' + t[1].split('"', 1) + 'S' + t[1].substring(t[1].indexOf('"'))
          } catch (t) {
            return this.data.data._kalturaDirective.originalEmbed
          }
        },
        isBreaking: function () {
          return d(this, c)
        },
        isSponsored: function () {
          return d(this, l)
        },
        isAdFree: function () {
          return this.$store.getters.knownUser.adFree
        },
        beforeHeader: function () {
          var t;
          return null === (t = this.data.nextElement) || void 0 === t ? void 0 : t.includes('.header')
        }
      },
      mounted: function () {
        var t = this;
        this.$nextTick((function () {
          t.monitorHeight()
        })),
        window.addEventListener('forceInitKalturaUpdate', this.kalturaReset)
      },
      beforeDestroy: function () {
        this.heightMonitor.disconnect(),
        window.removeEventListener('forceInitKalturaUpdate', this.kalturaReset)
      },
      methods: {
        kalturaReset: function () {
          this.minHeight = this.minHeight ? this.minHeight : this.$el.clientHeight,
          this.update++,
          this.$el.classList.remove('invisible')
        },
        monitorHeight: function () {
          this.heightMonitor = new MutationObserver(this.checkHeight),
          this.heightMonitor.observe(this.$el, {
            attributes: !0,
            childList: !0,
            subtree: !0
          })
        },
        checkHeight: function () {
          var t = this.$el.clientHeight;
          t !== this.height && (this.$root.$emit('kalturaLoaded'), this.height = t)
        }
      }
    },
    h = (n(1323), n(1)),
    component = Object(h.a) (m, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', {
        key: 'number-' + t.update,
        ref: 'kaltura',
        staticClass: 'articlecomponent kaltura',
        class : {
          'kaltura--first': !t.data.prevElement,
          'kaltura--before-header': t.beforeHeader,
          'kaltura--breaking': t.isBreaking,
          'kaltura--sponsored': t.isSponsored,
          'kaltura--adfree': t.isAdFree
        }
      }, [
        n('div', {
          staticClass: 'video__placeholder video__placeholder--kaltura',
          class : {
            'video__placeholder--before-header': t.beforeHeader
          }
        }, [
          n('div', {
            staticClass: 'videocomponent',
            style: {
              'min-height': t.minHeight + 'px'
            },
            domProps: {
              innerHTML: t._s(t.htmlContent)
            }
          })
        ]),
        t._v(' '),
        t.data.content.caption || t.data.content.author ? n('div', {
          staticClass: 'articlecomponent__description'
        }, [
          n('ImageDescription', {
            attrs: {
              data: t.data,
              'data-team-selector': 'data-team-video-caption'
            }
          })
        ], 1) : t._e()
      ])
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  196: function (t, e, n) {
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
      }
    },
    o = (n(1325), n(1)),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', {
        staticClass: 'articlecomponent newsletterbox'
      }, [
        n('div', {
          staticClass: 'newsletterbox__wrapper'
        }, [
          n('h2', {
            staticClass: 'newsletterbox__title',
            domProps: {
              innerHTML: t._s(t.data.content.title)
            }
          }),
          t._v(' '),
          n('div', {
            staticClass: 'newsletterbox__body'
          }, [
            n('p', {
              domProps: {
                innerHTML: t._s(t.data.content.text)
              }
            })
          ])
        ])
      ])
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  198: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'PremiumText',
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
        headingType: function () {
          return 'h2'
        }
      }
    },
    o = (n(1329), n(1)),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', {
        staticClass: 'articlecomponent premium'
      }, [
        n('svgicon', {
          staticClass: 'icon--premium',
          attrs: {
            height: '16',
            name: 'regio_ico_abo_plus',
            fill: !0,
            width: '32'
          }
        }),
        t._v(' '),
        n(t.headingType, {
          tag: 'component',
          staticClass: 'premium-subtitle'
        }, [
          t._v('\n    Exklusiv für Abonnenten\n  ')
        ])
      ], 1)
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  204: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'SponsoredContent',
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
          },
          componenttype: {
            type: String,
          default:
            'article'
          }
        }
      },
      computed: {
        link: function () {
          var t;
          return (null === (t = this.data.content.link) || void 0 === t ? void 0 : t.href) || this.data.content.link
        },
        isAmp: function () {
          return 'amp' === this.$store.state.isrendition
        },
        imageTag: function () {
          return this.isAmp ? 'amp-img' : 'img'
        },
        imageType: function () {
          return this.$store.state.isrendition || this.$route.fullPath.indexOf('/fragments/render') > - 1 ? 'fragment' : 'article'
        }
      }
    },
    o = (n(1339), n(1)),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.data.content ? n('div', {
        staticClass: 'component--max-width'
      }, [
        n('div', {
          staticClass: 'articlecomponent sponsoredcontent'
        }, [
          t.data.content.text ? n('p', {
            staticClass: 'text',
            domProps: {
              innerHTML: t._s(t.data.content.text)
            }
          }) : t._e(),
          t._v(' '),
          t.data.content.image ? n('figure', {
            staticClass: 'sponsoredcontent__poster',
            class : {
              sponsoredcontent__link: !!t.link || null
            }
          }, [
            t.link ? n('a', {
              attrs: {
                href: t.link,
                rel: 'nofollow',
                target: '_blank'
              }
            }, [
              n('div', {
                directives: [
                  {
                    name: 'srcset',
                    rawName: 'v-srcset',
                    value: {
                      teaserImage: t.data.content.image,
                      parent: this.$parent,
                      layout: 'sponsored-content',
                      imageType: t.imageType
                    },
                    expression: '{\n            teaserImage: data.content.image,\n            parent: this.$parent,\n            layout: \'sponsored-content\',\n            imageType: imageType\n          }'
                  }
                ],
                staticClass: 'image-placeholder'
              }, [
                n(t.imageTag, {
                  tag: 'component',
                  staticClass: 'image-placeholder__image',
                  attrs: {
                    layout: !!t.isAmp && 'responsive',
                    alt: t.data.content.text
                  }
                })
              ], 1)
            ]) : n('div', {
              directives: [
                {
                  name: 'srcset',
                  rawName: 'v-srcset',
                  value: {
                    teaserImage: t.data.content.image,
                    parent: this.$parent,
                    layout: 'sponsored-content',
                    imageType: t.imageType
                  },
                  expression: '{\n          teaserImage: data.content.image,\n          parent: this.$parent,\n          layout: \'sponsored-content\',\n          imageType: imageType\n        }'
                }
              ],
              staticClass: 'image-placeholder'
            }, [
              n(t.imageTag, {
                tag: 'component',
                staticClass: 'image-placeholder__image',
                attrs: {
                  layout: !!t.isAmp && 'responsive',
                  alt: t.data.content.text
                }
              })
            ], 1)
          ]) : t._e()
        ])
      ]) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  205: function (t, e, n) {
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
      }
    },
    o = (n(1341), n(1)),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', {
        staticClass: 'textlink articlecomponent'
      }, [
        n('div', {
          staticClass: 'textlink__wrapper',
          domProps: {
            innerHTML: t._s(t.data.content.text)
          }
        })
      ])
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  206: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'TikTokEmbed',
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
      mounted: function () {
        var t = this;
        this.$root.$once('pageDone', (function () {
          return t.loadScript('https://www.tiktok.com/embed.js')
        }))
      },
      methods: {
        loadScript: function (t) {
          var e = document.querySelector('script[src="'.concat(t, '"]'));
          e && e.remove();
          var script = document.createElement('script');
          script.id = 'tiktok-embed-'.concat(this.data.id),
          script.src = t,
          script.async = !0,
          document.head.appendChild(script)
        }
      }
    },
    o = (n(1343), n(1)),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.data.content && t.data.content.tiktok ? n('div', {
        ref: 'tiktok',
        staticClass: 'articlecomponent articlecomponent--narrow tiktok'
      }, [
        n('div', {
          staticClass: 'social__container',
          domProps: {
            innerHTML: t._s(t.data.content.tiktok.html || t.data.content.tiktok)
          }
        })
      ]) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  209: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(64),
    o = n(950),
    c = {
      name: 'ArticleVideo',
      components: {
        ImageDescription: function () {
          return n.e(1).then(n.bind(null, 367))
        }
      },
      mixins: [
        r.a,
        o.a
      ],
      props: {
        data: {
          type: Object,
        default:
          function () {
            return {
              content: {
                article: {
                  content: {
                    data: {
                      _kalturaDirective: {
                        originalEmbed: ''
                      }
                    }
                  }
                }
              },
              styles: {
              }
            }
          }
        },
        content: {
          type: Array,
        default:
          function () {
            return []
          }
        }
      },
      data: function () {
        return {
          minHeight: 0,
          update: 0
        }
      },
      computed: {
        embedCode: function () {
          try {
            var t = this.data.content.article.content.data._kalturaDirective.originalEmbed.split('"duration" content="');
            return t[0] + '"duration" content="PT' + t[1].split('"', 1) + 'S' + t[1].substring(t[1].indexOf('"'))
          } catch (t) {
            return ''
          }
        },
        fullwidth: function () {
          try {
            return 'video--fullwidth' === this.data.styles['fullwidth-video']
          } catch (t) {
            return !1
          }
        },
        beforeHeader: function () {
          return !!this.data.nextElement && this.data.nextElement.includes('.header')
        }
      },
      mounted: function () {
        this.minHeight = window.nzzLiveComponents ? window.innerWidth > 768 ? 360 : 190 : 0,
        window.addEventListener('forceInitKalturaUpdate', this.kalturaReset)
      },
      beforeDestroy: function () {
        window.removeEventListener('forceInitKalturaUpdate', this.kalturaReset)
      },
      methods: {
        kalturaReset: function () {
          this.minHeight = this.minHeight ? this.minHeight : this.$el.clientHeight,
          this.update++,
          this.$el.classList.remove('invisible')
        }
      }
    },
    l = (n(1349), n(1)),
    component = Object(l.a) (c, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', {
        key: 'number-video-' + t.update,
        ref: 'kaltura',
        staticClass: 'video-embed articlecomponent',
        class : {
          'video-embed--fullwidth': t.fullwidth
        }
      }, [
        n('div', {
          staticClass: 'video__placeholder video__placeholder--kaltura',
          class : {
            'video__placeholder--before-header': t.beforeHeader,
            'video__placeholder--full-width': t.fullwidth
          }
        }, [
          n('div', {
            style: {
              'min-height': t.minHeight + 'px'
            },
            domProps: {
              innerHTML: t._s(t.embedCode)
            }
          })
        ]),
        t._v(' '),
        t.data.content.caption || t.data.content.author ? n('div', {
          staticClass: 'articlecomponent__description'
        }, [
          n('ImageDescription', {
            attrs: {
              data: t.data,
              'data-team-selector': 'data-team-video-caption'
            }
          })
        ], 1) : t._e()
      ])
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  217: function (t, e, n) {
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
        iframeSrc: function () {
          return this._get(this.configWeatherPage, 'weatherPage.iframe.src', !1)
        }
      }
    },
    o = (n(1435), n(1)),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('section', {
        key: t.configWeatherPage.weatherPage.path + '-content',
        attrs: {
          'data-nzz-article': ''
        }
      }, [
        t.iframeSrc ? n('div', {
          staticClass: 'articlecomponent articlecomponent--desktop-narrow iframe webcam'
        }, [
          n('iframe', {
            attrs: {
              src: t.iframeSrc,
              width: '100%',
              height: '371px',
              frameborder: '0',
              scrolling: 'no'
            }
          })
        ]) : t._e()
      ])
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  246: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      extends : n(145).default
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  337: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      components: {
        NzzLink: n(31).default
      },
      props: {
        tags: {
          type: Array,
        default:
          function () {
            return []
          }
        },
        type: {
          type: String,
        default:
          ''
        },
        title: {
          type: String,
        default:
          ''
        },
        showAllBtn: {
          type: Boolean,
        default:
          !1
        },
        articleTags: {
          type: Boolean,
        default:
          !1
        }
      },
      data: function () {
        return {
          compiledTags: [
          ]
        }
      },
      computed: {
        headingType: function () {
          return 'h3'
        },
        isAmp: function () {
          return 'amp' === this.$store.state.isrendition
        }
      },
      created: function () {
        var t = this.filterTags(this.tags);
        t && 'string' == typeof t[0] ? this.compiledTags = t.map((function (t) {
          return t.startsWith('<a ') ? t.startsWith('<a ') && (t = t.substr(0, 3) + 'class="tag__label" data-nzz-referrer="tagLink" ' + t.substr(3)) : t = '<span class="tag__label tag__label--no-link">'.concat(t, '</span>'),
          t
        })) : this.compiledTags = t
      },
      methods: {
        filterTags: function (t) {
          return t.filter((function (t) {
            return null != t
          }))
        },
        closeNav: function () {
          'current-topics' === this.type && this.$parent.$emit('selected')
        }
      }
    },
    o = (n(1289), n(1)),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.articleTags ? n('div', [
        n('ul', {
          staticClass: 'tags__list',
          class : [
            t.type ? 'tags__list--' + t.type : '',
            t.isAmp ? 'tags__list--' + t.type + '-amp' : ''
          ]
        }, t._l(t.compiledTags, (function (e, r) {
          return n('li', {
            key: 'tag-' + r,
            staticClass: 'tag',
            class : {
              'tag--city': !!e.municipality
            },
            on: {
              click: t.closeNav
            }
          }, [
            'object' == typeof e ? n('NzzLink', {
              staticClass: 'tag__label',
              attrs: {
                url: e.slug || e.url,
                'data-nzz-referrer': 'tagLink'
              }
            }, [
              t._v('\n        ' + t._s(e.title || e.name) + '\n      ')
            ]) : n('div', {
              domProps: {
                innerHTML: t._s(e)
              }
            })
          ], 1)
        })), 0)
      ]) : n('div', [
        t.compiledTags.length > 0 ? n('div', {
          staticClass: 'tags',
          class : t.type ? 'tags--' + t.type : ''
        }, [
          t.title ? n(t.headingType, {
            tag: 'component',
            staticClass: 'tags__title',
            class : t.type ? 'tags__title--' + t.type : '',
            domProps: {
              innerHTML: t._s(t.title)
            }
          }) : t._e(),
          t._v(' '),
          n('ul', {
            staticClass: 'tags__list',
            class : t.type ? 'tags__list--' + t.type : ''
          }, t._l(t.compiledTags, (function (e, r) {
            return n('li', {
              key: 'tag-' + r,
              staticClass: 'tag',
              class : {
                'tag--city': !!e.municipality
              },
              on: {
                click: t.closeNav
              }
            }, [
              'object' == typeof e ? n('NzzLink', {
                staticClass: 'tag__label',
                attrs: {
                  url: e.slug || e.url,
                  'data-nzz-referrer': 'tagLink'
                }
              }, [
                t._v('\n          ' + t._s(e.title || e.name) + '\n        ')
              ]) : n('div', {
                domProps: {
                  innerHTML: t._s(e)
                }
              })
            ], 1)
          })), 0),
          t._v(' '),
          t.showAllBtn ? n('NzzLink', {
            staticClass: 'tags__all-btn button',
            attrs: {
              url: '/themen'
            }
          }, [
            n('span', [
              t._v('Alle Themen')
            ]),
            t._v(' '),
            n('svgicon', {
              staticClass: 'icon icon__chevron',
              attrs: {
                width: '6',
                height: '10',
                name: 'nzz_little_chevron',
                color: 'r-#000000'
              }
            })
          ], 1) : t._e()
        ], 1) : t._e()
      ])
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  347: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(31),
    o = {
      name: 'Pagination',
      components: {
        NzzLink: r.default
      },
      props: {
        pagination: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        },
        top: {
          type: Boolean,
        default:
          function () {
            return !1
          }
        }
      },
      computed: {
        pages: function () {
          return function (t) {
            var component = t.component,
            e = t.isMobile,
            n = void 0 !== e && e,
            r = t.routePath,
            o = void 0 === r ? '' : r;
            if (n) return [{
              label: 'Seite '.concat(component.currentPage.id, ' / ').concat(component.totalPages),
              noUnderline: !0
            }
            ];
            var c = [
            ],
            l = o.split(/\/\d+$/) [0];
            if (component.totalPages <= 4) for (var i = 1; i <= component.totalPages; i++) {
              var link = i === component.currentPage.id ? null : ''.concat(l, '/').concat(i);
              c.push({
                label: i,
                link: link
              })
            } else if (component.currentPage.id < 4) {
              for (var d = 1; d <= 4; d++) {
                var m = d === component.currentPage.id ? null : ''.concat(l, '/').concat(d);
                c.push({
                  label: d,
                  link: m
                })
              }
              c.push({
                label: '...'
              }),
              c.push({
                label: component.totalPages,
                link: ''.concat(l, '/').concat(component.totalPages)
              })
            } else if (component.currentPage.id > component.totalPages - 3) {
              for (var h = 0; h < 4; h++) {
                var f = component.totalPages - h === component.currentPage.id ? null : ''.concat(l, '/').concat(component.totalPages - h);
                c.unshift({
                  label: component.totalPages - h,
                  link: f
                })
              }
              c.unshift({
                label: '...'
              }),
              c.unshift({
                label: 1,
                link: l
              })
            } else c.push({
              label: component.currentPage.id
            }),
            c.unshift({
              label: component.currentPage.id - 1,
              link: ''.concat(l, '/').concat(component.currentPage.id - 1)
            }),
            c.unshift({
              label: '...'
            }),
            c.unshift({
              label: 1,
              link: l
            }),
            c.push({
              label: component.currentPage.id + 1,
              link: ''.concat(l, '/').concat(component.currentPage.id + 1)
            }),
            c.push({
              label: '...'
            }),
            c.push({
              label: component.totalPages,
              link: ''.concat(l, '/').concat(component.totalPages)
            });
            return c.unshift({
              label: 'Seite',
              noUnderline: !0
            }),
            c
          }({
            component: this,
            isMobile: this.$store.state.isMobile,
            routePath: this.$route.path
          })
        },
        currentPage: function () {
          return this.pagination.currentPage && this.pagination.currentPage.id ? this.pagination.currentPage : null
        },
        totalPages: function () {
          var t,
          e,
          n,
          r;
          return null !== (t = this.pagination.lastPage) && void 0 !== t && t.id || null !== (e = this.pagination.currentPage) && void 0 !== e && e.id ? (null === (n = this.pagination.lastPage) || void 0 === n ? void 0 : n.id) || (null === (r = this.pagination.currentPage) || void 0 === r ? void 0 : r.id) : null
        },
        lastPage: function () {
          return this.pagination.lastPage && this.pagination.lastPage.id && this.pagination.lastPage.link ? this.pagination.lastPage : null
        },
        prevPage: function () {
          return this.pagination.prevPage && this.pagination.prevPage.id && this.pagination.prevPage.link ? this.pagination.prevPage : null
        },
        nextPage: function () {
          return this.pagination.nextPage && this.pagination.nextPage.id && this.pagination.nextPage.link ? this.pagination.nextPage : null
        }
      }
    },
    c = (n(1293), n(1)),
    component = Object(c.a) (o, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.totalPages > 1 ? n('div', {
        staticClass: 'pagination',
        class : {
          'pagination--top': t.top,
          'pagination--bottom': !t.top
        }
      }, [
        t.prevPage ? n('NzzLink', {
          staticClass: 'pagination__button pagination__button--left',
          attrs: {
            url: t.prevPage.link
          }
        }, [
          n('svgicon', {
            staticClass: 'pagination__chevron',
            attrs: {
              height: '10',
              name: 'nzz_little_chevron',
              width: '6',
              color: 'r-#000000'
            }
          }),
          t._v(' '),
          n('span', {
            staticClass: 'label'
          }, [
            t._v('\n      Neuere Artikel\n    ')
          ])
        ], 1) : t._e(),
        t._v(' '),
        n('div', {
          staticClass: 'pagination__indicator'
        }, [
          t._v('\n    Seite ' + t._s(t.currentPage.id) + ' / ' + t._s(t.totalPages) + '\n  ')
        ]),
        t._v(' '),
        n('div', {
          staticClass: 'pagination__labels'
        }, t._l(t.pages, (function (e, r) {
          return n(e.link ? 'NzzLink' : 'span', {
            key: r,
            tag: 'component',
            class : [
              e.link ? 'link' : '...' === e.label ? 'dots' : 'label',
              {
                'label--no-underline': e.noUnderline
              }
            ],
            attrs: {
              url: e.link ? e.link : null
            }
          }, [
            t._v('\n      ' + t._s(e.label) + '\n    ')
          ])
        })), 1),
        t._v(' '),
        t.nextPage ? n('NzzLink', {
          staticClass: 'pagination__button pagination__button--right',
          attrs: {
            url: t.nextPage.link
          }
        }, [
          n('span', {
            staticClass: 'label'
          }, [
            t._v('\n      Ältere Artikel\n    ')
          ]),
          t._v(' '),
          n('svgicon', {
            staticClass: 'pagination__chevron pagination__chevron--right',
            attrs: {
              height: '10',
              name: 'nzz_little_chevron',
              width: '6',
              color: 'r-#000000'
            }
          })
        ], 1) : t._e()
      ], 1) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  389: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(7),
    o = n.n(r),
    c = n(3),
    l = n.n(c),
    d = n(31),
    m = n(97);
    function h() {
      return Math.random().toString()
    }
    var f = {
      name: 'WidgetRegioSelectorWidget',
      components: {
        NzzLink: d.default,
        ContextmenuMobile: function () {
          return n.e(7).then(n.bind(null, 375))
        }
      },
      props: {
        data: {
          type: [
            Array,
            Object,
            String
          ],
        default:
          function () {
            return {
            }
          }
        }
      },
      data: function () {
        return {
          regions: this.$config.regions || [
          ],
          menuOpen: !1
        }
      },
      computed: {
        currentRegion: function () {
          return this.$store.getters.currentRegion(this.$config) || {
          }
        },
        widgetLink: function () {
          var t;
          return (null === (t = this.data.content['widget-link']) || void 0 === t ? void 0 : t.href) || this.data.content['widget-link']
        },
        title: function () {
          return this.currentRegion.name || this.data.content['regio-title']
        },
        url: function () {
          return this.currentRegion.link || this.widgetLink
        },
        regionsmenu: function () {
          var t = this;
          return this.regions && this.regions.data ? this.regions.data.map((function (e) {
            return {
              id: h(),
              custom: !0,
              action: 'triggerRegionSwitch',
              currentRegion: t.currentRegion,
              value: ''.concat(e.key),
              name: e.name,
              link: e.link,
              currentItem: e.key === t.currentRegion.key
            }
          })) : [
          ]
        },
        currentItem: function () {
          return {
            id: h(),
            name: 'Region ändern'
          }
        },
        menusettings: function () {
          var t = this;
          if ( - 1 === this.$store.state.isrendition.indexOf('webview')) return null;
          var e = this.regionsmenu.map((function (e) {
            return t.renameKeys(e, {
              name: 'text'
            })
          }));
          return JSON.stringify({
            type: '.showContextMenu',
            event: 'regioUserAction',
            ui: e
          })
        },
        onclickContextMenu: function () {
          return - 1 === this.$store.state.isrendition.indexOf('webview') ? null : ''.concat(Object(m.b) ('contextmenu', 'regio-menu'), '.contextmenu({ element: this })')
        }
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
          ].concat(o() (n)))
        }
      }
    },
    v = (n(889), n(1)),
    _ = Object(v.a) (f, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', {
        key: 'regiocontainer-' + t.title,
        staticClass: 'regioselector'
      }, [
        n('div', {
          staticClass: 'regioselector__region-text'
        }, [
          n('ContextmenuMobile', {
            attrs: {
              vertical: 'bottom',
              'menu-items': t.regionsmenu,
              'current-item': t.currentItem,
              menusettings: t.menusettings,
              onclick: t.onclickContextMenu,
              'menu-class': 'regioselector__select',
              transition: 'slide-bottom',
              'overlay-position': 'bottom',
              'data-nzz-referrer': 'regioSelector'
            }
          }),
          t._v(' '),
          n('div', {
            staticClass: 'regioselector__wrapper'
          }, [
            n('div', {
              staticClass: 'regioselector__region',
              attrs: {
                'data-referrer': 'regioWidgetHeadTitle'
              }
            }, [
              n('NzzLink', {
                staticClass: 'regioselector__region-name',
                attrs: {
                  url: t.url
                },
                domProps: {
                  innerHTML: t._s(t.title)
                }
              })
            ], 1),
            t._v(' '),
            t.$route.path.includes(t.url) ? t._e() : n('NzzLink', {
              staticClass: 'regioselector__link',
              attrs: {
                url: t.url
              }
            }, [
              t._v('\n        Mehr'),
              n('span', [
                t._v(' aus '),
                n('span', {
                  staticClass: 'title'
                }, [
                  t._v(t._s(t.title))
                ])
              ]),
              t._v(' '),
              n('svgicon', {
                staticClass: 'icon__chevron',
                attrs: {
                  name: 'nzz_little_chevron',
                  width: '6',
                  height: '10',
                  color: '#ffffff',
                  fill: !1
                }
              })
            ], 1)
          ], 1)
        ], 1)
      ])
    }), [
    ], !1, null, null, null).exports,
    x = function (data) {
      try {
        var t = JSON.parse(data.element.getAttribute('menusettings'));
        return window.vamp.showContextMenu(t)
      } catch (t) {
        console.log(t)
      }
    },
    w = {
      extends : _,
      head: function () {
        return {
          script: [
            {
              hid: 'regio-menu',
              preserve: 'preserve',
              type: 'text/javascript',
              innerHTML: Object(m.a) ('contextmenu', 'regio-menu', x)
            },
            {
              type: 'text/javascript',
              preserve: 'preserve',
              innerHTML: '\n            var chRegios = JSON.parse(\''.concat(JSON.stringify(this.regions.data), '\');\n            appDataReady.then(function() {\n              window.deferred(\n                function() {\n                  var userRegio = window.digitalData.user[0].profile[0].attributes.c1.clientRegionCode.toLowerCase();\n                  var regio = chRegios.find(function(e) { return e.key === userRegio });\n                  if (regio) {\n                    var regionName = document.querySelector(\'.regioselector__region-name\');\n                    var regionLink = document.querySelector(\'.regioselector__link\');\n                    regionName.innerHTML = regio.name;\n                    regionName.setAttribute(\'onclick\', \'window.vamp.navigateToPage(\\\'\'+regio.link+\'\\\')\');\n                    if (window.location.pathname.includes(regio.link)) {\n                      regionLink.classList.add(\'hidden\');\n                    } else {\n                      regionLink.querySelector(\'.title\').innerHTML = regio.name;\n                      regionLink.setAttribute(\'onclick\', \'window.vamp.navigateToPage(\\\'\'+regio.link+\'\\\')\');\n                    }\n                  }\n                },\n                function() {\n                  return window.digitalData.user[0] && window.digitalData.user[0].profile[0].attributes.c1.clientRegionCode\n                }\n              );\n            });\n          ')
            }
          ]
        }
      }
    },
    z = Object(v.a) (w, undefined, undefined, !1, null, null, null);
    e.default = z.exports
  },
  406: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'Catchline',
      mixins: [
        n(17).a
      ],
      props: {
        item: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        },
        size: {
          type: String,
        default:
          function () {
            return ''
          }
        },
        showIcon: {
          type: Boolean,
        default:
          !0
        }
      },
      computed: {
        catchline: function () {
          return this.item.catchline
        },
        type: function () {
          return this.getIndicator
        },
        classModifiers: function () {
          var t = 'catchline',
          e = [
          ];
          return this.size && e.push(''.concat(t, '--').concat(this.size)),
          this.item.layout && e.push(''.concat(t, '--').concat(this.item.layout)),
          this.type && !this.isPremium && e.push(''.concat(t, '--').concat(this.type)),
          this.isPremium && e.push(''.concat(t, '--premium')),
          this.isBreaking && e.push(''.concat(t, '--breaking')),
          e
        },
        icon: function () {
          return !!['live',
          'bildergalerie',
          'video',
          'ugc',
          'publireportage',
          'sponsored-content'].includes(this.type) && (['publireportage',
          'sponsored-content'].includes(this.type) ? 'ico_star' : 'ico_'.concat(this.type))
        },
        iconClass: function () {
          return this.icon.replace('ico_', 'catchline__icon--')
        },
        setIconStyle: function () {
          return {
            width: '14',
            height: '14',
            minWidth: 'min-width: 14px'
          }
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.catchline || t.isPremium ? n('div', {
        staticClass: 'catchline',
        class : t.classModifiers
      }, [
        t.isPremium ? n('svgicon', {
          staticClass: 'catchline__icon icon--premium',
          staticStyle: {
            'min-width': '32px'
          },
          attrs: {
            name: 'regio_ico_abo_plus',
            width: '32',
            height: '16'
          }
        }) : t.icon && t.showIcon ? n('svgicon', {
          staticClass: 'catchline__icon',
          class : t.iconClass,
          style: t.setIconStyle.minWidth,
          attrs: {
            name: t.icon,
            width: t.setIconStyle.width,
            height: t.setIconStyle.height
          }
        }) : t._e(),
        t._v(' '),
        t.catchline ? n('span', [
          t._v('\n    ' + t._s(t.catchline) + '\n  ')
        ]) : t._e()
      ], 1) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  418: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'KalturaEmbed',
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
        },
        content: {
          type: Array,
        default:
          function () {
            return []
          }
        },
        danzzarticle: {
          type: String,
        default:
          ''
        }
      },
      head: function () {
        return {
          script: [
            {
              hid: 'amp-ima-video',
              preserve: 'preserve',
              type: 'text/javascript',
              async: !0,
              src: 'https://cdn.ampproject.org/v0/amp-ima-video-0.1.js',
              'custom-element': 'amp-ima-video'
            }
          ]
        }
      },
      computed: {
        id: function () {
          return 'reduced' === this.danzzarticle ? 'reduced-video-ima-'.concat(this.entryId) : 'video-ima-'.concat(this.entryId)
        },
        dataTag: function () {
          return this.$config.vast
        },
        contentURL: function () {
          try {
            var t = this.data.data._kalturaDirective.originalEmbed.match(/"contenturl" content=([^>|\s]+)/i);
            return !(!t || !t[1]) && t[1].replaceAll('"', '')
          } catch (t) {
            return !1
          }
        },
        thumbnailUrl: function () {
          try {
            var t = this.data.data._kalturaDirective.originalEmbed.match(/"thumbnailUrl" content=([^>|\s]+)/);
            return !(!t || !t[1]) && t[1].replaceAll('"', '')
          } catch (t) {
            return !1
          }
        },
        entryId: function () {
          try {
            var t = this.data.content.kaltura.html.match(/entry_id=([^>|\s]+)/);
            return !(!t || !t[1]) && t[1].replace('"', '')
          } catch (t) {
            return !1
          }
        },
        title: function () {
          try {
            var t = this.data.data._kalturaDirective.originalEmbed.match(/itemprop="name" content="([^">]+)/);
            return !(!t || !t[1]) && t[1].replaceAll('"', '')
          } catch (t) {
            return !1
          }
        },
        componentId: function () {
          return this.data.id
        },
        overlayFeature: function () {
          return this.$store.state.features.ampVideoClickToPlayOverlay
        }
      }
    },
    o = (n(1140), n(1)),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.contentURL ? n('div', {
        staticClass: 'articlecomponent',
        attrs: {
          'data-vars-danzz-container': 'amp-ima-container'
        }
      }, [
        t.overlayFeature ? t.overlayFeature ? n('div', {
          staticClass: 'video-player'
        }, [
          n('amp-ima-video', {
            attrs: {
              id: t.id,
              width: '480',
              height: '270',
              'data-tag': t.dataTag,
              'data-src': t.contentURL,
              layout: 'responsive',
              'data-vars-danzz-video-id': '' + t.entryId,
              'data-vars-danzz-video-title': '' + t.title,
              'ld-component-id': t.componentId
            }
          }),
          t._v(' '),
          n('div', {
            staticClass: 'click-to-play-overlay',
            attrs: {
              id: 'amp-ima-video-overlay-' + t.id,
              'data-vars-danzz-video-title': '' + t.title
            }
          }, [
            n('div', {
              staticClass: 'play-icon',
              attrs: {
                role: 'button',
                tabindex: '0',
                on: 'tap:amp-ima-video-overlay-' + t.id + '.hide, ' + t.id + '.play',
                'data-vars-danzz-video-id': '' + t.entryId,
                'data-vars-danzz-video-title': '' + t.title
              }
            }),
            t._v(' '),
            n('amp-img', {
              staticClass: 'poster-image',
              attrs: {
                layout: 'fill',
                src: t.thumbnailUrl
              }
            })
          ], 1)
        ], 1) : t._e() : n('amp-ima-video', {
          attrs: {
            id: t.id,
            width: '480',
            height: '270',
            'data-tag': t.dataTag,
            'data-src': t.contentURL,
            'data-poster': t.thumbnailUrl,
            layout: 'responsive',
            'data-vars-danzz-video-id': '' + t.entryId,
            'data-vars-danzz-video-title': '' + t.title,
            'ld-component-id': t.componentId
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
      ], 1) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  422: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(3),
    o = n.n(r),
    c = n(69);
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
    var m = {
      props: {
        data: {
          type: Object,
        default:
          function () {
            return {
              content: {
                article: {
                  content: [
                  ],
                  metadata: {
                  }
                }
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
      head: function () {
        return {
          script: [
            {
              hid: 'amp-carousel',
              preserve: 'preserve',
              type: 'text/javascript',
              async: !0,
              src: 'https://cdn.ampproject.org/v0/amp-carousel-0.1.js',
              'custom-element': 'amp-carousel'
            },
            {
              hid: 'amp-bind',
              preserve: 'preserve',
              type: 'text/javascript',
              async: !0,
              src: 'https://cdn.ampproject.org/v0/amp-bind-0.1.js',
              'custom-element': 'amp-bind'
            }
          ]
        }
      },
      computed: {
        images: function () {
          try {
            var t = n(1152),
            e = this.$store.state.productPath,
            r = n(1153) ('./' + e + '/config/imageSizes'),
            o = d(d({
            }, t), r);
            return this.data.content.article.content.map((function (t) {
              var caption = '';
              return t.content && t.content.caption && (caption = '<h3 class="image-description__caption image-description__caption--large">\n              '.concat(t.content.caption, '</h3>')),
              t.content && t.content.author && (caption = ''.concat(caption, '<div class="image-description__author"><span class="image-description__author-single">\n              ').concat(t.content.author, '</span></div>')),
              caption && caption.lenght > 0 && (caption = '<div class="image-description">'.concat(caption, '</div>')),
              {
                caption: caption,
                data: Object(c.b) (t.content.image, 'slider-article-content', '', o)
              }
            }))
          } catch (t) {
            return []
          }
        },
        id: function () {
          return this.data.id.replace('-', '')
        }
      },
      methods: {
        imageGroup: function (t) {
          0
        }
      }
    },
    h = (n(1159), n(1)),
    component = Object(h.a) (m, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', {
        staticClass: 'articlecomponent'
      }, [
        n('amp-carousel', {
          staticClass: 'ampcarousel',
          attrs: {
            type: 'slides',
            layout: 'responsive',
            width: '300',
            height: '600'
          }
        }, t._l(t.images, (function (image, e) {
          return n('figure', {
            key: t.id + '-' + e
          }, [
            n('amp-img', {
              attrs: {
                srcset: image.data['data-srcset'],
                lightbox: t.data.id + '-{$imageGroup(images.length)}',
                width: image.data.width,
                height: image.data.height,
                layout: 'responsive'
              }
            }),
            t._v(' '),
            n('figcaption', {
              domProps: {
                innerHTML: t._s(image.caption)
              }
            })
          ], 1)
        })), 0)
      ], 1)
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  432: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(139),
    o = n(97),
    c = function (data) {
      try {
        var t = JSON.parse(data.element.getAttribute('menusettings'));
        return window.vamp.showContextMenu(t)
      } catch (t) {
        console.log(t)
      }
    },
    l = {
      extends : r.default,
      head: function () {
        return {
          script: [
            {
              hid: 'regio-menu',
              preserve: 'preserve',
              type: 'text/javascript',
              innerHTML: Object(o.a) ('contextmenu', 'regio-menu', c)
            },
            {
              type: 'text/javascript',
              preserve: 'preserve',
              innerHTML: '\n            var chRegios = JSON.parse(\''.concat(JSON.stringify(this.regions.data), '\');\n            appDataReady.then(function() {\n              window.deferred(\n                function() {\n                  var userRegio = window.digitalData.user[0].profile[0].attributes.c1.clientRegionCode.toLowerCase();\n                  var regio = chRegios.find(function(e) { return e.key === userRegio });\n                  if (regio) {\n                    var defaultBadge = chRegios.find(function(e) { return e.key === \'').concat(this.$config.defaultRegion, '\' });\n                    var regioSelector = document.querySelector(\'.regioselector__region-badge img\');\n                    regioSelector.setAttribute(\'src\', regioSelector.getAttribute(\'src\').replace(defaultBadge.badge, regio.badge));\n                  }\n                },\n                function() {\n                  return window.digitalData.user[0] && window.digitalData.user[0].profile[0].attributes.c1.clientRegionCode\n                }\n              );\n            });\n          ')
            }
          ]
        }
      }
    },
    d = (n(1217), n(1219), n(1)),
    component = Object(d.a) (l, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', {
        key: 'regiocontainer-' + t.badge.src,
        staticClass: 'regioselector'
      }, [
        n('div', {
          staticClass: 'regioselector__region-text'
        }, [
          n('ContextmenuMobile', {
            attrs: {
              vertical: 'bottom',
              'menu-items': t.regionsmenu,
              'current-item': t.currentItem,
              menusettings: t.menusettings,
              onclick: t.onclickContextMenu,
              'menu-class': 'regioselector__select',
              transition: 'slide-bottom',
              'overlay-position': 'bottom',
              'data-nzz-referrer': 'regioSelector'
            }
          }),
          t._v(' '),
          n('div', {
            staticClass: 'regioselector__region',
            attrs: {
              'data-referrer': 'regioWidgetHeadTitle'
            }
          }, [
            n(t.widgetLink ? 'NzzLink' : 'span', {
              tag: 'NzzLink',
              staticClass: 'regioselector__region-name',
              attrs: {
                url: t.widgetLink ? t.widgetLink : ''
              },
              domProps: {
                innerHTML: t._s(t.title)
              }
            })
          ], 1)
        ], 1)
      ])
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  446: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(264);
    n.e(5).then(n.t.bind(null, 1567, 7));
    var o = {
      components: {
        Overlay: function () {
          return n.e(7).then(n.bind(null, 357))
        }
      },
      mixins: [
        r.a
      ],
      data: function () {
        return {
          aboLink: ''.concat(this.$config.nzzAboBase, '/kampagne/'),
          loginLink: this.$config.nzzLoginBase
        }
      },
      computed: {
        setAboLink: function () {
          return this.hasParameter(this.aboLink)
        },
        setLoginLink: function () {
          return this.hasParameter(this.loginLink)
        }
      },
      mounted: function () {
        var t = this;
        this.$root.$on('bookmark:interaction', (function (data) {
          'anonymous' === data.action && t.$store.commit('setMutation', {
            key: 'bookmarkOverlay',
            value: !0
          })
        }))
      },
      methods: {
        closeBookmarkOverlay: function () {
          this.$store.commit('setMutation', {
            key: 'bookmarkOverlay',
            value: !1
          })
        }
      }
    },
    c = n(1),
    component = Object(c.a) (o, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('Overlay', {
        attrs: {
          open: t.$store.state.bookmarkOverlay,
          transition: 'scale-fade',
          classes: 'overlay--center-x overlay--center-y'
        },
        on: {
          close: t.closeBookmarkOverlay
        }
      }, [
        n('div', {
          staticClass: 'overlay__content'
        }, [
          n('h3', {
            staticClass: 'overlay__title'
          }, [
            t._v('\n      Um Artikel auf Ihrer Merkliste zu speichern, benötigen Sie ein Abo.\n    ')
          ]),
          t._v(' '),
          n('div', {
            staticClass: 'overlay__buttons'
          }, [
            n('div', {
              staticClass: 'overlay__button'
            }, [
              n('a', {
                staticClass: 'button button--primary',
                attrs: {
                  href: t.setAboLink
                }
              }, [
                t._v('Probeabo starten')
              ])
            ]),
            t._v(' '),
            n('div', {
              staticClass: 'overlay__button'
            }, [
              n('a', {
                staticClass: 'overlay__button-link',
                attrs: {
                  href: t.setLoginLink
                }
              }, [
                n('span', {
                  staticClass: 'button button--light'
                }, [
                  t._v('Bereits Kunde?')
                ]),
                t._v(' '),
                n('span', {
                  staticClass: 'button button--link'
                }, [
                  t._v('Anmelden.')
                ])
              ])
            ]),
            t._v(' '),
            n('div', {
              staticClass: 'overlay__close',
              on: {
                click: t.closeBookmarkOverlay
              }
            }, [
              n('svgicon', {
                attrs: {
                  name: 'ico_close_48',
                  width: '40',
                  height: '40'
                }
              })
            ], 1)
          ])
        ])
      ])
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  447: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(19),
    o = {
      name: 'BottomBar',
      components: {
        Actionbar: function () {
          return Promise.resolve().then(n.bind(null, 47))
        }
      },
      computed: {
        hidden: function () {
          return r.store.delayedScrollDown
        },
        keepOpened: function () {
          return r.store.keepBottomBarOpened
        },
        isArticle: function () {
          return 'Article' === this.$store.state.header.pageType
        },
        isReducedArticle: function () {
          return this.$store.state.isReducedArticle
        }
      }
    },
    c = (n(1361), n(1)),
    component = Object(c.a) (o, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('transition', {
        attrs: {
          name: 'slide-bottom'
        }
      }, [
        !t.isArticle || t.isReducedArticle || t.hidden && !t.keepOpened ? t._e() : n('div', {
          staticClass: 'bottombar'
        }, [
          n('Actionbar', {
            key: 'bottom-actionbar',
            attrs: {
              vertical: 'top',
              horizontal: 'right_border',
              position: 'footer'
            }
          })
        ], 1)
      ])
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  465: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'AboveHeader',
      computed: {
        topnavigationHasData: function () {
          return !Array.isArray(this.$store.getters.topNavigationColumns)
        }
      },
      mounted: function () {
        this.setDistanceToTop()
      },
      updated: function () {
        this.setDistanceToTop()
      },
      methods: {
        setDistanceToTop: function () {
          this.$store.dispatch('setHeader', {
            key: 'aboveHeaderHeight',
            value: this.$el.offsetHeight
          })
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.topnavigationHasData ? n('div', {
        staticClass: 'header__above'
      }, [
        t._t('default')
      ], 2) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  466: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(7),
    o = n.n(r),
    c = {
      name: 'Breadcrumbs',
      components: {
        HeaderButton: function () {
          return n.e(7).then(n.bind(null, 325))
        }
      },
      computed: {
        isDE: function () {
          return this.$store.getters.isDE
        },
        origin: function () {
          return this.$config.clientBaseUrl
        },
        breadcrumbs: function () {
          var t = {
            name: 'Startseite',
            path: '/'
          };
          this.isDE && this.$config.nzzGermanStartseite && (t = {
            name: this.$config.nzzGermanStartseite.name,
            path: this.$config.nzzGermanStartseite.path
          });
          var e = this.$store.state.metadata && this.$store.state.metadata.breadcrumbs;
          return e ? [
            t
          ].concat(o() (e)).slice(Math.max(0, e.length - 2)) : [
            t
          ]
        }
      },
      head: function () {
        return {
        }
      }
    },
    l = (n(989), n(1)),
    component = Object(l.a) (c, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', {
        staticClass: 'breadcrumbs'
      }, [
        t.breadcrumbs[0] ? n('HeaderButton', {
          staticClass: 'breadcrumbs__item breadcrumbs__item--first',
          attrs: {
            'data-nzz-referrer': 'breadcrumbLevel0',
            to: t.breadcrumbs[0].path
          }
        }, [
          n('span', [
            t._v(t._s(t.breadcrumbs[0].name))
          ])
        ]) : t._e(),
        t._v(' '),
        n('div', {
          staticClass: 'breadcrumbs__icon'
        }, [
          t.breadcrumbs[1] ? n('svgicon', {
            staticClass: 'icon--caretright',
            attrs: {
              'data-nzz-referrer': 'breadcrumbLevel1',
              height: '6',
              name: 'nzz_chevron',
              width: '12',
              color: 'r-#000000'
            }
          }) : t._e()
        ], 1),
        t._v(' '),
        t.breadcrumbs[1] ? n('HeaderButton', {
          staticClass: 'breadcrumbs__item',
          attrs: {
            'data-nzz-referrer': 'breadcrumbLevel1',
            to: t.breadcrumbs[1].path
          }
        }, [
          t._v('\n    ' + t._s(t.breadcrumbs[1].name) + '\n  ')
        ]) : t._e()
      ], 1)
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  489: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'Articlelist',
      components: {
        SimpleArticle: function () {
          return n.e(6).then(n.bind(null, 500))
        }
      },
      extends : n(101).default
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  503: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'Articlelist',
      components: {
        SimpleArticle: function () {
          return n.e(2).then(n.bind(null, 322))
        }
      },
      extends : n(101).default
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  550: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'Articlelist',
      components: {
        SimpleArticle: function () {
          return n.e(2).then(n.bind(null, 321))
        }
      },
      extends : n(101).default
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  561: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      extends : n(140).default,
      computed: {
        content: function () {
          var t,
          e;
          return null !== (t = this.data.content) && void 0 !== t && null !== (e = t.telegram) && void 0 !== e && e.html && 'string' == typeof this.data.content.telegram.html ? this.data.content.telegram.html.replace('data-telegram-post=', 'preserve="preserve" data-telegram-post=') : ''
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  600: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'MenuUserHeader',
      functional: !0,
      props: {
        name: {
          type: String,
        default:
          'People'
        },
        label: {
          type: String,
        default:
          ''
        },
        link: {
          type: String,
        default:
          ''
        },
        hasSubscription: {
          type: Boolean,
        default:
          !1
        }
      },
      render: function (t, e) {
        var n = e.props,
        r = n.name,
        link = n.link,
        label = n.label,
        o = n.hasSubscription;
        return t('div', {
          class : 'menu-user__header'
        }, [
          t('h3', {
            class : {
              'menu-user__header--name': !0
            },
            attrs: {
              'data-hj-suppress': !0
            }
          }, r),
          t('a', {
            attrs: {
              href: link,
              'data-label-text': label
            },
            class : {
              'menu-user__header--label': !0,
              'menu-user__header--subscribed': o
            }
          }, label)
        ])
      }
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  781: function (t, e, n) {
    'use strict';
    n(926)
  },
  818: function (t, e, n) {
    var content = n(1096);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('64d7ade0', content, !0, {
      sourceMap: !1
    })
  },
  835: function (t, e, n) {
    var content = n(1121);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('4d45631e', content, !0, {
      sourceMap: !1
    })
  },
  849: function (t, e, n) {
    var content = n(1141);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('caf52950', content, !0, {
      sourceMap: !1
    })
  },
  857: function (t, e, n) {
    var content = n(1160);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('53721aa5', content, !0, {
      sourceMap: !1
    })
  },
  889: function (t, e, n) {
    'use strict';
    n(890)
  },
  890: function (t, e, n) {
    var content = n(1216);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('dc807fae', content, !0, {
      sourceMap: !1
    })
  },
  891: function (t, e, n) {
    var content = n(1218);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('dda99ab6', content, !0, {
      sourceMap: !1
    })
  },
  892: function (t, e, n) {
    var content = n(1220);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('191eacc0', content, !0, {
      sourceMap: !1
    })
  },
  926: function (t, e, n) {
    var content = n(1281);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('27085d5d', content, !0, {
      sourceMap: !1
    })
  },
  933: function (t, e, n) {
    var content = n(1290);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('73c1dcc9', content, !0, {
      sourceMap: !1
    })
  },
  934: function (t, e, n) {
    var content = n(1292);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('024f7aa0', content, !0, {
      sourceMap: !1
    })
  },
  935: function (t, e, n) {
    var content = n(1294);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('2cc442ae', content, !0, {
      sourceMap: !1
    })
  },
  938: function (t, e, n) {
    var content = n(1300);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('e757b902', content, !0, {
      sourceMap: !1
    })
  },
  943: function (t, e, n) {
    var content = n(1310);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('536f4791', content, !0, {
      sourceMap: !1
    })
  },
  949: function (t, e, n) {
    var content = n(1322);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('464478f1', content, !0, {
      sourceMap: !1
    })
  },
  950: function (t, e, n) {
    'use strict';
    e.a = {
      head: function () {
        var script = [
        ];
        return this.$store.state.isrendition.indexOf('webview') > - 1 && script.push({
          hid: 'kaltura-embed',
          preserve: 'preserve',
          async: !0,
          body: !0,
          src: this.$config.kaltura_library
        }),
        {
          script: script
        }
      }
    }
  },
  951: function (t, e, n) {
    var content = n(1324);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('29c81f31', content, !0, {
      sourceMap: !1
    })
  },
  952: function (t, e, n) {
    var content = n(1326);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('3e934ef1', content, !0, {
      sourceMap: !1
    })
  },
  954: function (t, e, n) {
    var content = n(1330);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('21bc7b51', content, !0, {
      sourceMap: !1
    })
  },
  959: function (t, e, n) {
    var content = n(1340);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('14b9ea11', content, !0, {
      sourceMap: !1
    })
  },
  960: function (t, e, n) {
    var content = n(1342);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('6637c3d1', content, !0, {
      sourceMap: !1
    })
  },
  961: function (t, e, n) {
    var content = n(1344);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('30f79c12', content, !0, {
      sourceMap: !1
    })
  },
  964: function (t, e, n) {
    var content = n(1350);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('0a45cc51', content, !0, {
      sourceMap: !1
    })
  },
  970: function (t, e, n) {
    var content = n(1362);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('28d41547', content, !0, {
      sourceMap: !1
    })
  },
  989: function (t, e, n) {
    'use strict';
    n(990)
  },
  990: function (t, e, n) {
    var content = n(1397);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('443444d2', content, !0, {
      sourceMap: !1
    })
  }
}
]);
