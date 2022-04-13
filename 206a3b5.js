/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || [
]).push([[6],
{
  105: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'MoreToSubject',
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
                'moreToSubject-area': [
                ]
              },
              content: {
              }
            }
          }
        }
      },
      data: function () {
        return {
          size: 'articlelist-a'
        }
      },
      computed: {
        relevantTopic: function () {
          return this.$store.state.features.bta && this.data && this.data.content && this.data.content.relevantTopic ? this.data.content.relevantTopic.trim().replace(/\s+/g, '-') : null
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.data.containers['moreToSubject-area'] ? n('section', {
        staticClass: 'pageelement pageelement--moretosubject',
        class : {
          'article-tags-above': t.data.content && t.data.content.hasArticleTags
        },
        attrs: {
          'data-grws-bta': this.$store.state.features.bta ? 'default' : null
        }
      }, [
        n('div', {
          staticClass: 'pageelement__inner'
        }, [
          t.data.content && t.data.content.title ? n('div', {
            staticClass: 'container container--moretosubject'
          }, [
            n('div', {
              staticClass: 'container__header-title container__header-title--moretosubject',
              class : {
                'container__header-title--bta-moretosubject': this.$store.state.features.bta
              }
            }, [
              n('span', {
                staticClass: 'container__header-text container__header-text--moretosubject',
                domProps: {
                  innerHTML: t._s(t.data.content.title)
                }
              })
            ])
          ]) : t._e(),
          t._v(' '),
          n('div', {
            staticClass: 'widget__row widget__row--noBorder',
            class : {
              'widget__row--bta-moretosubject': this.$store.state.features.bta
            }
          }, [
            n('div', {
              class : 'widget--' + t.size,
              attrs: {
                'data-source-element-widget': t.relevantTopic,
                'data-team-more-to-subject': ''
              }
            }, [
              n('SimpleArticle', {
                attrs: {
                  data: {
                    articles: t.data.containers['moreToSubject-area'].map((function (t) {
                      return t.content.article
                    }))
                  },
                  size: t.size,
                  'referrer-type': t.relevantTopic ? 'btaArticleTeaser' : 'articleTeaser',
                  'add-datetime-attr': !1
                }
              })
            ], 1)
          ])
        ])
      ]) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  1052: function (t, e, n) {
    'use strict';
    n(796)
  },
  1053: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.pageholder:not(.pageholder--progressbar){position:relative;z-index:10000}@media (min-width:768px){.pageholder:not(.pageholder--progressbar){margin:0 auto}}@media (min-width:768px){.pageholder:not(.pageholder--progressbar):not(.pageholder--centered):not(.pageholder--disabled){max-width:1548px;padding:0;max-width:100%}}@media (min-width:1372px){.pageholder:not(.pageholder--progressbar):not(.pageholder--centered):not(.pageholder--disabled){margin:0 auto;padding:0 324px 0 24px;max-width:1548px}}@media (min-width:1848px){.pageholder:not(.pageholder--progressbar):not(.pageholder--centered):not(.pageholder--disabled){max-width:1200px;margin:0 auto;padding:0}}@media (min-width:768px){.fullwidth .pageholder:not(.pageholder--progressbar){padding:0}}.pageholder:not(.pageholder--progressbar)--disabled{max-width:none;margin:0;padding:0}',
    '']),
    t.exports = r
  },
  1054: function (t, e, n) {
    'use strict';
    n(797)
  },
  1055: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.header{background-color:#fff;background-color:var(--white)}.header--menu-active{position:relative;z-index:12010;background:none}',
    '']),
    t.exports = r
  },
  1056: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.page--custom{overflow-x:hidden}.container.error{display:none}',
    '']),
    t.exports = r
  },
  1057: function (t, e, n) {
    'use strict';
    n(799)
  },
  1058: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.resor__skyscraper{position:fixed;top:0;display:none;width:300px;margin-left:792px}@media (min-width:768px){.resor__skyscraper{display:block;display:none}}@media (min-width:1116px){.resor__skyscraper{right:0;margin-left:0}}@media (min-width:1548px){.resor__skyscraper{right:auto;margin-left:1224px}}.resor--maxiboard{display:flex;width:100%;padding:0 24px;background-color:#fff;background-color:var(--white)}.resor--maxiboard [data-adnz-loaded]{min-height:0;margin-bottom:0}.resor--maxiboard [data-adnz-loaded][data-adnz-shown="1"]{margin:24px auto}@media (min-width:768px){.resor--maxiboard [data-adnz-loaded][data-adnz-shown="1"]{margin:32px auto}}@media (min-width:1372px){.resor--maxiboard [data-adnz-loaded][data-adnz-shown="1"]{margin:64px auto 32px}}@media (min-width:1548px){.resor--maxiboard [data-adnz-loaded][data-adnz-shown="1"]{margin:96px auto 48px}}.resor__label{margin-bottom:8px;font-size:.75rem;line-height:1rem;color:#707070;color:var(--grayMedium)}.resor--top{display:flex;padding:0;background-color:transparent}.resor--top [data-adnz-loaded]{min-height:0;margin-bottom:0}.resor--top [data-adnz-loaded][data-adnz-shown="1"]{margin:0 auto}@media (min-width:1372px){.resor__skyscraper{display:block}}.resor--billboard [id^=adnz_bta_][data-adnz-infeed-placeholder]:not([data-adnz-shown="1"][data-adnz-loaded="1"]),.resor--billboard [id^=adnz_content_][data-adnz-placement][data-adnz-infeed-placeholder]:not([data-adnz-shown="1"][data-adnz-loaded="1"]){margin:0 auto}.resor--billboard [id^=adnz_bta_][data-adnz-infeed-placeholder]:not([data-adnz-shown="1"][data-adnz-loaded="1"]):before,.resor--billboard [id^=adnz_content_][data-adnz-placement][data-adnz-infeed-placeholder]:not([data-adnz-shown="1"][data-adnz-loaded="1"]):before{content:"Anzeige";display:block;float:none;width:994px;max-width:100%;height:250px;margin:0 auto;font-weight:500;font-size:9pt;line-height:15.625rem;font-family:Roboto,sans-serif;color:#cccbcb}.adnz-bta-fixed-placeholder .resor--billboard [id^=adnz_bta_]:not([data-adnz-shown="1"][data-adnz-loaded="1"]){margin:0 auto}.adnz-bta-fixed-placeholder .resor--billboard [id^=adnz_bta_]:not([data-adnz-shown="1"][data-adnz-loaded="1"]):before{content:"Anzeige";display:block;float:none;width:994px;max-width:100%;height:483px;margin:0 auto;font-weight:500;font-size:9pt;line-height:30.1875rem;font-family:Roboto,sans-serif;color:#cccbcb}@media (min-width:768px){.adnz-bta-fixed-placeholder .resor--billboard [id^=adnz_bta_]:not([data-adnz-shown="1"][data-adnz-loaded="1"]):before{height:424px;line-height:26.5rem}}@media (min-width:1372px){.adnz-bta-fixed-placeholder .resor--billboard [id^=adnz_bta_]:not([data-adnz-shown="1"][data-adnz-loaded="1"]):before{height:439px;line-height:27.4375rem}}.resor--top .resor--static{min-height:160px}@media (min-width:768px){.resor--top .resor--static{min-height:250px}}@media (min-width:1372px){.adnz-infeed-placeholder div#adnz_maxiboard_1{min-height:257.5px;width:100%}.adnz-infeed-placeholder div#adnz_maxiboard_1:before{z-index:-1}}.adnz-infeed-placeholder>div[id^=adnz_content_][data-adnz-placement]:not([data-adnz-shown="1"][data-adnz-loaded="1"]):before,.adnz-infeed-placeholder div#adnz_billboard_1:not([data-adnz-shown="1"][data-adnz-loaded="1"]):before,.adnz-infeed-placeholder div#adnz_billboard_2:not([data-adnz-shown="1"][data-adnz-loaded="1"]):before,.adnz-infeed-placeholder div#adnz_billboard_3:not([data-adnz-shown="1"][data-adnz-loaded="1"]):before,.adnz-infeed-placeholder div#adnz_billboard_4:not([data-adnz-shown="1"][data-adnz-loaded="1"]):before,.adnz-infeed-placeholder div#adnz_maxiboard_1:not([data-adnz-shown="1"][data-adnz-loaded="1"]):before{content:"Anzeige";line-height:15.625rem;font-family:Roboto,sans-serif;font-weight:500;font-size:9pt;color:#cccbcb;display:flex;align-items:center;justify-content:center;position:absolute;left:0;right:0;top:0;margin:0 auto;width:994px;max-width:100%;height:100%}.adnz-infeed-placeholder>div[id^=adnz_content_]:not([data-adnz-shown="1"][data-adnz-loaded="1"]),.adnz-infeed-placeholder div#adnz_billboard_1:not([data-adnz-shown="1"][data-adnz-loaded="1"]),.adnz-infeed-placeholder div#adnz_billboard_2:not([data-adnz-shown="1"][data-adnz-loaded="1"]),.adnz-infeed-placeholder div#adnz_billboard_3:not([data-adnz-shown="1"][data-adnz-loaded="1"]),.adnz-infeed-placeholder div#adnz_billboard_4:not([data-adnz-shown="1"][data-adnz-loaded="1"]),.adnz-infeed-placeholder div#adnz_maxiboard_1:not([data-adnz-shown="1"][data-adnz-loaded="1"]){margin:0 auto;position:relative}.adnz-infeed-placeholder>div[id^=adnz_content_]{min-height:250px}',
    '']),
    t.exports = r
  },
  1059: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.app-data{opacity:1;transition:opacity .25s ease;background-color:#fff;background-color:var(--white)}.app-data .widget--slider--ssr{display:flex;margin-bottom:-30px;padding-bottom:30px;overflow:scroll}.app-data .widget--slider--ssr .teaser--slide:first-child .teaser{margin-left:0}.app-data section:last-of-type .widget--slider--ssr{margin-bottom:0}.app-data .pageholder>.container{background-color:#fff;background-color:var(--white)}.app-data .widget.paginated.loaded{margin-top:24px;padding-top:24px;border-top:1px solid #ebebeb;border-top:1px solid var(--grayLight)}.app-data--loading{opacity:0}.teaser__link{display:block}.teaser__link--poster{height:100%}@media (min-width:768px){#webview .pageholder:not(.pageholder--progressbar):not(.pageholder--centered):not(.pageholder--disabled){padding:0}}@media (min-width:768px){#webview .webalert{right:24px}}#webview .teaser-companion-feed--first{flex-direction:column}#webview .teaser-companion-feed--first .poster--companion-feed-bta{width:auto;margin-right:0;margin-bottom:16px}#webview .teaser-companion-feed--first .poster--companion-feed-bta .poster__placeholder{padding-bottom:56.25%}#webview .teaser-companion-feed--first .poster--companion-feed-bta .poster__placeholder img{-o-object-fit:cover;object-fit:cover}#webview .container.layout--longformvisual{margin-top:0}#webview .headline--hero .headline__wrapper{height:calc(100vh - 112px)}body:not(.pageholder--centered){min-width:100%}body,html{background:#fff}.articlecomponent--slider{overflow:hidden}@media (min-width:768px){html body,html body:not(.pageholder--centered){min-width:100%}#webview .widget__row{justify-content:center}#webview .image--fullwidth{margin-right:auto;margin-left:auto}#webview .image--fullwidth figcaption{margin-left:24px;margin-right:24px}}',
    '']),
    t.exports = r
  },
  1060: function (t, e, n) {
    'use strict';
    n(802)
  },
  1061: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.resor__skyscraper{position:fixed;top:0;display:none;width:300px;margin-left:792px}@media (min-width:768px){.resor__skyscraper{display:block;display:none}}@media (min-width:1116px){.resor__skyscraper{right:0;margin-left:0}}@media (min-width:1548px){.resor__skyscraper{right:auto;margin-left:1224px}}.resor--maxiboard{display:flex;width:100%;padding:0 24px;background-color:#fff;background-color:var(--white)}.resor--maxiboard [data-adnz-loaded]{min-height:0;margin-bottom:0}.resor--maxiboard [data-adnz-loaded][data-adnz-shown="1"]{margin:24px auto}@media (min-width:768px){.resor--maxiboard [data-adnz-loaded][data-adnz-shown="1"]{margin:32px auto}}@media (min-width:1372px){.resor--maxiboard [data-adnz-loaded][data-adnz-shown="1"]{margin:64px auto 32px}}@media (min-width:1548px){.resor--maxiboard [data-adnz-loaded][data-adnz-shown="1"]{margin:96px auto 48px}}.resor__label{margin-bottom:8px;font-size:.75rem;line-height:1rem;color:#707070;color:var(--grayMedium)}.resor--top{display:flex;padding:0;background-color:transparent}.resor--top [data-adnz-loaded]{min-height:0;margin-bottom:0}.resor--top [data-adnz-loaded][data-adnz-shown="1"]{margin:0 auto}@media (min-width:1372px){.resor__skyscraper{display:block}}.resor--billboard [id^=adnz_bta_][data-adnz-infeed-placeholder]:not([data-adnz-shown="1"][data-adnz-loaded="1"]),.resor--billboard [id^=adnz_content_][data-adnz-placement][data-adnz-infeed-placeholder]:not([data-adnz-shown="1"][data-adnz-loaded="1"]){margin:0 auto}.resor--billboard [id^=adnz_bta_][data-adnz-infeed-placeholder]:not([data-adnz-shown="1"][data-adnz-loaded="1"]):before,.resor--billboard [id^=adnz_content_][data-adnz-placement][data-adnz-infeed-placeholder]:not([data-adnz-shown="1"][data-adnz-loaded="1"]):before{content:"Anzeige";display:block;float:none;width:994px;max-width:100%;height:250px;margin:0 auto;font-weight:500;font-size:9pt;line-height:15.625rem;font-family:Roboto,sans-serif;color:#cccbcb}.adnz-bta-fixed-placeholder .resor--billboard [id^=adnz_bta_]:not([data-adnz-shown="1"][data-adnz-loaded="1"]){margin:0 auto}.adnz-bta-fixed-placeholder .resor--billboard [id^=adnz_bta_]:not([data-adnz-shown="1"][data-adnz-loaded="1"]):before{content:"Anzeige";display:block;float:none;width:994px;max-width:100%;height:483px;margin:0 auto;font-weight:500;font-size:9pt;line-height:30.1875rem;font-family:Roboto,sans-serif;color:#cccbcb}@media (min-width:768px){.adnz-bta-fixed-placeholder .resor--billboard [id^=adnz_bta_]:not([data-adnz-shown="1"][data-adnz-loaded="1"]):before{height:424px;line-height:26.5rem}}@media (min-width:1372px){.adnz-bta-fixed-placeholder .resor--billboard [id^=adnz_bta_]:not([data-adnz-shown="1"][data-adnz-loaded="1"]):before{height:439px;line-height:27.4375rem}}.resor--top .resor--static{min-height:160px}@media (min-width:768px){.resor--top .resor--static{min-height:250px}}@media (min-width:1372px){.adnz-infeed-placeholder div#adnz_maxiboard_1{min-height:257.5px;width:100%}.adnz-infeed-placeholder div#adnz_maxiboard_1:before{z-index:-1}}.adnz-infeed-placeholder>div[id^=adnz_content_][data-adnz-placement]:not([data-adnz-shown="1"][data-adnz-loaded="1"]):before,.adnz-infeed-placeholder div#adnz_billboard_1:not([data-adnz-shown="1"][data-adnz-loaded="1"]):before,.adnz-infeed-placeholder div#adnz_billboard_2:not([data-adnz-shown="1"][data-adnz-loaded="1"]):before,.adnz-infeed-placeholder div#adnz_billboard_3:not([data-adnz-shown="1"][data-adnz-loaded="1"]):before,.adnz-infeed-placeholder div#adnz_billboard_4:not([data-adnz-shown="1"][data-adnz-loaded="1"]):before,.adnz-infeed-placeholder div#adnz_maxiboard_1:not([data-adnz-shown="1"][data-adnz-loaded="1"]):before{content:"Anzeige";line-height:15.625rem;font-family:Roboto,sans-serif;font-weight:500;font-size:9pt;color:#cccbcb;display:flex;align-items:center;justify-content:center;position:absolute;left:0;right:0;top:0;margin:0 auto;width:994px;max-width:100%;height:100%}.adnz-infeed-placeholder>div[id^=adnz_content_]:not([data-adnz-shown="1"][data-adnz-loaded="1"]),.adnz-infeed-placeholder div#adnz_billboard_1:not([data-adnz-shown="1"][data-adnz-loaded="1"]),.adnz-infeed-placeholder div#adnz_billboard_2:not([data-adnz-shown="1"][data-adnz-loaded="1"]),.adnz-infeed-placeholder div#adnz_billboard_3:not([data-adnz-shown="1"][data-adnz-loaded="1"]),.adnz-infeed-placeholder div#adnz_billboard_4:not([data-adnz-shown="1"][data-adnz-loaded="1"]),.adnz-infeed-placeholder div#adnz_maxiboard_1:not([data-adnz-shown="1"][data-adnz-loaded="1"]){margin:0 auto;position:relative}.adnz-infeed-placeholder>div[id^=adnz_content_]{min-height:250px}',
    '']),
    t.exports = r
  },
  110: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(6),
    o = n.n(r),
    l = n(64);
    function d() {
      return Boolean(!0)
    }
    var c,
    f = [
    ],
    h = 'mobile';
    function m(component, t) {
      component.layout = t ? 'tablet' : h
    }
    var v = {
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
        },
        SliderButton: function () {
          return n.e(0).then(n.bind(null, 475))
        },
        SliderProgress: function () {
          return n.e(0).then(n.bind(null, 476))
        },
        ImageZoom: function () {
          return Promise.all([n.e(1),
          n.e(3)]).then(n.bind(null, 463))
        }
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
      data: function () {
        return {
          slideHeights: {
            mobile: 180,
            tablet: 360
          },
          flickity: {
            mobile: {
              instance: null,
              sliderProgress: 0,
              lightboxImage: 0,
              currentImage: 0
            },
            tablet: {
              instance: null,
              sliderProgress: 0,
              lightboxImage: 0,
              currentImage: 0
            }
          },
          layout: h,
          allowImageZoom: d(),
          allowedOnOpen: !0,
          zoomedIn: !1,
          interaction: 'tab click',
          lightboxAttached: !1,
          imageLightboxAttached: !1,
          lightboxPosition: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            paddingX: 0,
            paddingY: 0
          },
          zoomPosition: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            paddingX: 0,
            paddingY: 0
          },
          currentArticleId: this.$store.state.metadata.nzzId
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
        webviewClick: function () {
          return !1
        },
        webviewScroll: function () {
          return !1
        },
        slideshowUrl: function () {
          try {
            return this.data.content.article.metadata.seo.canonicalUrl
          } catch (t) {
            return
          }
        },
        active: function () {
          return this.flickity[this.layout]
        },
        sliderProgress: {
          get: function () {
            return this.active.sliderProgress
          },
          set: function (t) {
            this.active.sliderProgress = t
          }
        },
        lightboxImage: {
          get: function () {
            return this.active.lightboxImage
          },
          set: function (t) {
            this.active.lightboxImage = t
          }
        },
        currentImage: {
          get: function () {
            return this.active.currentImage
          },
          set: function (t) {
            this.active.currentImage = t
          }
        }
      },
      created: function () {
        !function (component) {
          c || (c = window.matchMedia('(min-width: 768px)')).addEventListener('change', (function (t) {
            f.forEach((function (component) {
              return m(component, t.matches)
            }))
          })),
          f.push(component),
          m(component, c.matches)
        }(this)
      },
      mounted: function () {
        this.init(),
        window.addEventListener('keyup', this.keyboardCloseLightbox)
      },
      destroyed: function () {
        !function (t) {
          f.filter((function (component) {
            return component !== t
          }))
        }(this),
        window.removeEventListener('keyup', this.keyboardCloseLightbox)
      },
      methods: {
        init: function () {
          window.dispatchEvent(new window.CustomEvent('tms:component:create', {
            detail: {
              componentID: this.data.content.article.metadata.nzzId,
              componentName: this.data.content.article.metadata.title,
              componentSize: this.data.content.article.content.length,
              componentType: 'image gallery',
              componentSubType1: 'horizontal'
            }
          }))
        },
        getImageSrc: function () {
          try {
            var image = this.$refs['image-'.concat(this.layout, '-').concat(this.lightboxImage || 0)][0];
            return image.$refs.image && (image.$refs.image.currentSrc || image.$refs.image.src)
          } catch (t) {
            return ''
          }
        },
        slideSize: function (image, t) {
          var e = image.crop ? image.crop : image,
          n = this.slideHeights[t],
          r = e.height / n,
          o = e.width / r;
          return {
            width: ''.concat(o, 'px'),
            height: ''.concat(n, 'px')
          }
        },
        zoomOpenBefore: function (t) {
          var e = this;
          return function () {
            e.allowedOnOpen = e.allowImageZoom,
            e.allowImageZoom && (e.zoomAttached = !0, e.slidingDisable(), e.zoomedIn = !0, e.lightboxImage = t)
          }
        },
        zoomCloseBefore: function () {
          this.zoomedIn = !1,
          this.slidingEnable()
        },
        imageZoomClose: function () {
          this.lightboxAttached = !1,
          this.zoomCloseBefore()
        },
        zoomOpenAfter: function () {
          this.allowedOnOpen && (this.lightboxAttached = !0, this.slidingEnable())
        },
        everyImageIndex: function (t) {
          var e = this;
          return Object.keys(this.flickity).map((function (n, i) {
            return t + i * e.images.length
          }))
        },
        flickityInit: function (t) {
          var e = this;
          return function (n) {
            e.flickity[t].instance = n,
            n.on('dragStart', e.imageZoomDisable),
            n.on('settle', e.imageZoomEnable),
            n.on('scroll', e.updatePosition(t)),
            n.on('dragStart', e.setSwipeInteraction),
            n.on('change', e.changeSlide)
          }
        },
        imageZoomDisable: function () {
          this.allowImageZoom = !1
        },
        imageZoomEnable: function () {
          this.allowImageZoom = d()
        },
        updatePosition: function (t) {
          var e = this;
          return function (progress) {
            t === e.layout && (e.sliderProgress = progress)
          }
        },
        setSwipeInteraction: function () {
          this.interaction = 'swipe'
        },
        changeSlide: function (t) {
          var e = this.currentImage > t ? 'left' : 'right';
          this.currentImage = t;
          var n = ''.concat(this.interaction, ' ').concat(e);
          this.interaction = 'tab click',
          window.dispatchEvent(new window.CustomEvent('tms:event:push', {
            detail: {
              eventInfo: {
                eventName: 'Image Gallery Interaction',
                eventAction: 'display',
                componentID: this.currentArticleId,
                componentName: this.data.content.article.metadata.title,
                eventNonInteractive: !1,
                eventPosition: this.currentImage + 1,
                type: 'image'
              },
              category: {
                primaryCategory: 'image gallery',
                subCategory1: 'image gallery - inline',
                subCategory2: this.data.content.article.content[this.currentImage].content.image.url,
                subCategory3: n
              }
            }
          }))
        },
        slideBack: function () {
          this.active.instance.previous()
        },
        slideForward: function () {
          this.active.instance.next()
        },
        slidingDisable: function () {
          this.active.instance.options.draggable = !1,
          this.active.instance.updateDraggable()
        },
        slidingEnable: function () {
          this.active.instance.options.draggable = !0,
          this.active.instance.updateDraggable()
        },
        referenceOverflow: function (t) {
          var e = this;
          return function () {
            var n = t.getBoundingClientRect(),
            r = n.width,
            o = n.height;
            return [r * (e.scale - 1),
            o * (e.scale - 1)]
          }
        },
        keyboardCloseLightbox: function (t) {
          'Escape' === t.key && this.zoomCloseBefore()
        },
        minimizedValues: function () {
          var t = this;
          return function (e) {
            var n = window.innerWidth < 768 ? [
              24,
              56
            ] : [
              56,
              56
            ],
            r = o() (n, 2),
            l = r[0],
            d = r[1];
            e.style.padding = ''.concat(d, 'px ').concat(l, 'px');
            var c = t.$refs.container.getBoundingClientRect().height,
            f = t.$refs['image-'.concat(t.layout, '-').concat(t.lightboxImage || 0)][0].$refs.image.getBoundingClientRect(),
            h = f.left,
            m = f.right,
            v = f.height,
            y = t.$refs.articleslider.getBoundingClientRect(),
            x = y.left,
            w = y.right;
            return {
              top: '-'.concat(d, 'px'),
              bottom: ''.concat(c - v - d, 'px'),
              left: ''.concat(h - x - l, 'px'),
              right: ''.concat(w - m - l, 'px')
            }
          }
        },
        expandedValues: function () {
          var t = this;
          return function (e) {
            var n = window.innerWidth < 768 ? [
              24,
              56
            ] : [
              56,
              56
            ],
            r = o() (n, 2),
            l = r[0],
            d = r[1],
            c = e.getBoundingClientRect().top,
            f = t.$refs.articleslider.getBoundingClientRect(),
            h = f.left,
            m = f.right,
            v = f.bottom,
            y = {
              left: ''.concat( - h, 'px'),
              right: ''.concat(m - document.documentElement.clientWidth, 'px'),
              top: ''.concat( - c - d, 'px'),
              bottom: ''.concat(v - window.innerHeight, 'px'),
              paddingX: ''.concat(l, 'px'),
              paddingY: ''.concat(d, 'px')
            };
            return t.zoomPosition = y,
            y
          }
        }
      }
    },
    y = (n(1180), n(1182), n(1)),
    component = Object(y.a) (v, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', {
        ref: 'articleslider',
        staticClass: 'articlecomponent articlecomponent--slider',
        attrs: {
          onclick: t.webviewClick
        }
      }, [
        n('ImageZoom', {
          attrs: {
            attached: t.zoomedIn,
            src: t.getImageSrc(),
            data: t.data,
            'minimized-values': t.minimizedValues(),
            'expanded-values': t.expandedValues()
          }
        }),
        t._v(' '),
        t.lightboxAttached ? n('ImageLightbox', {
          attrs: {
            slides: t.images,
            data: t.images[t.lightboxImage],
            'on-close': t.imageZoomClose,
            positioning: t.zoomPosition,
            'share-url': t.slideshowUrl
          }
        }) : t._e(),
        t._v(' '),
        n('div', {
          ref: 'container',
          staticClass: 'articleslider__container',
          attrs: {
            onscroll: t.webviewScroll
          }
        }, [
          n('div', {
            staticClass: 'articlecomponent'
          }, [
            n('div', {
              staticClass: 'articleslider',
              class : {
                'articleslider--zoomed-in': t.zoomedIn
              }
            }, t._l(Object.keys(t.flickity), (function (e) {
              return n('flickity', {
                key: e,
                staticClass: 'articleslider__flickity',
                class : {
                  'articleslider__flickity--zoomed-in': t.zoomedIn
                },
                style: [
                  e !== t.layout ? {
                    display: 'none'
                  }
                   : {
                  }
                ],
                attrs: {
                  options: {
                    contain: !0,
                    draggable: !0,
                    prevNextButtons: !1,
                    pageDots: !1
                  },
                  'skip-init': 1 === t.images.length,
                  componenttype: 'slider'
                },
                on: {
                  init: function (n) {
                    t.flickityInit(e) (n)
                  }
                }
              }, t._l(t.images, (function (r, o) {
                var content = r.content;
                return n('div', {
                  key: o,
                  staticClass: 'articleslider__item',
                  class : {
                    'articleslider__item--first': 0 === o,
                    'articleslider__item--last': o === t.images.length - 1
                  },
                  attrs: {
                    'data-nzz-tid': 'slider-item'
                  }
                }, [
                  n('div', {
                    staticClass: 'articleslider__img',
                    style: t.slideSize(content.image, t.layout)
                  }, [
                    n('ArticleImage', {
                      ref: 'image-' + e + '-' + o,
                      refInFor: !0,
                      attrs: {
                        data: {
                          content: content
                        },
                        'show-caption': !1,
                        'on-zoom-open-before': t.zoomOpenBefore(o),
                        'on-zoom-open-after': t.zoomOpenAfter,
                        'on-zoom-close-before': t.zoomCloseBefore,
                        'allow-image-zoom': !1,
                        'attach-lightbox': !1,
                        modifier: 'slider'
                      }
                    }),
                    t._v(' '),
                    1 !== t.images.length && 0 === o ? n('div', {
                      staticClass: 'articleslider__count',
                      attrs: {
                        'data-nzz-tid': 'slider-item-count'
                      }
                    }, [
                      t._v('\n                ' + t._s(t.images.length) + ' Bilder\n              ')
                    ]) : t._e()
                  ], 1)
                ])
              })), 0)
            })), 1),
            t._v(' '),
            t.images.length > 1 ? n('SliderProgress', {
              attrs: {
                position: t.sliderProgress,
                count: t.images.length
              }
            }) : t._e(),
            t._v(' '),
            0 !== t.images.length ? n('ImageDescription', {
              attrs: {
                data: t.images[t.currentImage]
              }
            }) : t._e()
          ], 1),
          t._v(' '),
          t.images.length > 1 ? n('SliderButton', {
            attrs: {
              disabled: t.sliderProgress < 0.01 || 'mobile' === t.layout,
              type: 'prev'
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
              disabled: t.sliderProgress > 0.99 || 'mobile' === t.layout,
              type: 'next'
            },
            nativeOn: {
              click: function (e) {
                return t.slideForward(e)
              }
            }
          }) : t._e()
        ], 1)
      ], 1)
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  1164: function (t, e, n) {
    'use strict';
    n(861)
  },
  1165: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '/*! purgecss start ignore */.teaser__link--poster-articlelist-a amp-img+.poster__icon--video,.teaser__link--poster-articlelist-a amp-img+.poster__info{margin-bottom:16px}.teaser--alias-custom .teaser__link--poster-articlelist-a .poster__placeholder img{width:100%;-o-object-fit:cover;object-fit:cover}.teaser--alias-custom .teaser__link--poster-articlelist-a .poster__placeholder>:after{position:absolute;top:0;left:0;content:"";width:inherit;height:inherit;background:linear-gradient(180deg,transparent -30%,#000 152%)}.poster--bordered .teaser__link--poster-articlelist-a [class*=html-sizer]+img,.poster--branded .teaser__link--poster-articlelist-a [class*=html-sizer]+img{margin-bottom:0}.poster--articlelist-b amp-img,.teaser__link--poster-articlelist-b .poster__placeholder{width:72px;height:72px}.teaser__link--poster-articlelist-b .poster__placeholder{margin-right:16px}\n/*! purgecss end ignore */',
    '']),
    t.exports = r
  },
  1180: function (t, e, n) {
    'use strict';
    n(869)
  },
  1181: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.articleslider{position:relative;clear:both}.articleslider--zoomed-in{z-index:12000}.articleslider__item{margin-right:12px}@media (min-width:768px){.articleslider__item{margin-right:24px}}.articleslider__item--first{margin-left:0}.articleslider__item--last{margin-right:0;padding-right:24px}@media (min-width:1372px){.articleslider__item--last{padding-right:40px}}.articleslider__count{position:absolute;bottom:0;left:0;width:100%;padding:2px 12px 8px;font-size:.875rem;line-height:1.58;font-family:nzz-sans-serif,Arial;color:#fff;color:var(--white);background:linear-gradient(180deg,transparent,#000)}@media (min-width:768px){.articleslider__count{padding:14px 24px 16px;font-size:1rem;line-height:1.63}}.articleslider__description{margin-top:16px}.articleslider__flickity{position:relative;z-index:10}.articleslider__flickity:focus{outline:none}.articleslider__flickity--zoomed-in{z-index:12000}.articleslider__container{overflow:hidden}',
    '']),
    t.exports = r
  },
  1182: function (t, e, n) {
    'use strict';
    n(870)
  },
  1183: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.image-zoom--lightbox{position:fixed!important;top:0!important;bottom:0!important;left:0!important;right:0!important}',
    '']),
    t.exports = r
  },
  1184: function (t, e, n) {
    'use strict';
    n(871)
  },
  1185: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.articleslider__flickity{display:flex}.articleslider__item{position:relative}.articleslider__item .image__src{opacity:1}.articlecomponent--slider .articleslider__container{overflow:scroll;padding-left:24px;margin-right:-24px;margin-left:-24px}',
    '']),
    t.exports = r
  },
  1235: function (t, e, n) {
    'use strict';
    n(900)
  },
  1236: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.articleslider__flickity{display:flex}.articleslider__item{position:relative}.articleslider__item .image__src{opacity:1}.articlecomponent--slider .articleslider__container{overflow:scroll;padding-left:24px;margin-right:-24px;margin-left:-24px}',
    '']),
    t.exports = r
  },
  1303: function (t, e, n) {
    'use strict';
    n(940)
  },
  1304: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.authorbox{margin:-20px 24px 40px;font-family:nzz-sans-serif,Arial}@media (min-width:768px){.authorbox{float:right;width:180px;margin:-20px 44px 40px 64px}}@media (min-width:1372px){.authorbox{margin-right:0}}.authorbox__poster{width:100%;max-width:120px}@media (min-width:768px){.authorbox__poster{max-width:180px}}.authorbox__name{position:relative;z-index:102;font-size:1.375rem;line-height:1.36}.authorbox__role{font-size:1rem;line-height:1.5;color:#707070;color:var(--grayMedium)}.authorbox__link{position:relative;display:inline-block;margin-top:16px;margin-left:5px;font-size:.875rem;line-height:1.14;font-family:nzz-sans-serif,Arial;color:#000;color:var(--black);text-decoration:none}.authorbox__link span{position:relative;z-index:101}.authorbox__link:hover{opacity:.6}.authorbox__link:after{content:"";position:absolute;top:8px;left:-8px;z-index:100;display:block;width:80px;border-bottom:16px solid #c7fff8}',
    '']),
    t.exports = r
  },
  1307: function (t, e, n) {
    'use strict';
    n(942)
  },
  1308: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.datawrapper.widget--fullwidth{margin-left:auto;margin-right:auto;width:auto;max-width:none}',
    '']),
    t.exports = r
  },
  1327: function (t, e, n) {
    'use strict';
    n(953)
  },
  1328: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.pinterest .social__container>[data-pin-log]{width:100%!important;max-width:520px!important}',
    '']),
    t.exports = r
  },
  1333: function (t, e, n) {
    'use strict';
    n(956)
  },
  1334: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.quote{width:279px;margin-top:64px;margin-bottom:64px;padding-right:0;padding-left:0;font-weight:500;font-size:1.25rem;line-height:1.4;font-family:nzz-serif,Georgia;text-align:center}@media (min-width:768px){.quote{width:520px;margin-top:80px;margin-bottom:80px;font-size:1.75rem;line-height:1.35}}',
    '']),
    t.exports = r
  },
  1337: function (t, e, n) {
    'use strict';
    n(958)
  },
  1338: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.source{margin-bottom:0;line-height:1.56}@media (min-width:768px){.source{margin-bottom:0;line-height:1.6}}.source__wrapper{float:left;font-size:1.125rem;margin-right:1ex}@media (min-width:768px){.source__wrapper{font-size:1.25rem}}',
    '']),
    t.exports = r
  },
  1381: function (t, e, n) {
    'use strict';
    n(980)
  },
  1382: function (t, e, n) {
    var r = n(12) (!1);
    r.push([t.i,
    '.header-progress{background-color:#fff;background-color:var(--white)}.header-progress__container{box-sizing:content-box;max-width:640px;margin:0 auto;padding:0 24px}',
    '']),
    t.exports = r
  },
  1548: function (t, e, n) {
    n(11).register({
      nidwaldnerzeitung: {
        width: 275,
        height: 32,
        viewBox: '0 0 275 32',
        data: '<path pid="0" d="M265.335 30.814c-2.433 0-4.284-1.049-4.284-2.986 0-1.134.314-2.049 1.095-2.538.876.187 1.941.328 3.275.523 2.436.357 4.498.323 4.498 2.014 0 1.783-1.931 2.987-4.584 2.987zm-.321-22.41c1.57-.193 2.479 1.758 2.836 4.67.357 2.912-.052 5.024-1.622 5.217-1.57.193-2.479-1.758-2.836-4.67-.358-2.912.053-5.024 1.622-5.217zm1.869 13.336c-3.807-.354-4.523-1.218-4.523-1.218l2.549-1.453c.239.017.48.026.725.026 3.788 0 6.858-2.07 6.858-5.781 0-1.569-.683-2.993-1.858-4.036l2.209.168h1.311l.319-1.497h-6.183a8.366 8.366 0 00-2.656-.417c-4.04 0-6.857 2.595-6.857 5.782 0 2.852 1.814 4.734 4.374 5.453l-5.263 2.734c.823 1.979 1.608 2.879 2.917 3.4-1.739.455-3.266 1.617-3.266 3.268 0 2.5 3.016 3.831 7.238 3.831s9.75-2.076 9.75-6.512c0-3.29-5.354-3.535-7.644-3.748zm-92.125 2.48c6.654 0 7.658-.939 10.187-7.07h.783l-1.711 8.42c-2.585-.063-5.833-.222-8.355-.222l-8.874.005 12.068-21.746h-1.18c-7.06 0-6.664 1.015-9.43 7.075h-.784l1.531-8.42c2.586.063 5.295.222 7.818.222l8.41-.005-12.077 21.74h1.614zm28.087-20.162c-.266-1.366.759-2.736 2.288-3.032 1.5-.29 2.966.598 3.232 1.963.277 1.418-.743 2.815-2.243 3.105-1.528.296-3-.618-3.277-2.036zm.631 9.114c0-2.701-.027-2.935-1.801-2.935l-.159-.57 6.48-2.283v13.803c0 2.883.029 3.2 1.961 3.46v.7h-8.441v-.7c1.932-.26 1.96-.577 1.96-3.46v-8.015zM23.16 3.951c-.265-1.366.76-2.736 2.288-3.032 1.5-.29 2.967.598 3.233 1.963.277 1.418-.743 2.815-2.243 3.105-1.529.296-3-.618-3.277-2.036zm.641 9.114c0-2.701-.027-2.935-1.8-2.935l-.16-.569 6.48-2.284V21.08c0 2.883.03 3.2 1.96 3.46v.7h-8.44v-.7c1.932-.26 1.96-.577 1.96-3.46v-8.015zM160.41 7.318c-3.375-.616-4.769 1.756-5.63 3.896l-.624-3.997-5.924 2.114.251.576c1.898 0 1.732.931 1.732 3.469v7.565c0 2.883-.03 3.2-1.961 3.46v.78h9.84v-.78c-3.201-.368-3.208-.577-3.208-3.46v-8.766c1.382-2.49 3.262-1.584 6.328 2.122l.718-.32-1.522-6.659zm-20.355.603c1.95 0 2.596 2.538 2.377 5.133h-5.375c.074-2.623.788-5.133 2.998-5.133zm6.505 10.57c-.872 1.799-2.367 2.904-4.27 2.904-3.195 0-5.109-3.176-5.234-7.415h9.81c.168-3.425-1.53-6.82-6.182-6.82-4.573 0-7.191 4.05-7.191 9.227 0 5.029 2.775 9.105 7.122 9.105 3.236 0 5.75-2.878 6.559-6.802l-.614-.199zm-15.761 2.45v-8.03c0-2.955-1.548-5.694-4.856-5.694-2.921 0-3.822 1.615-4.668 3.2l-.449-3.2-5.995 2.114.245.576c1.812 0 1.731.175 1.731 3.469v7.565c0 2.883-.029 3.2-1.961 3.46v.78h8.116v-.78c-1.615-.26-1.643-.577-1.643-3.46v-9.767c1.699-2.18 4.963-1.357 4.963 2.745v7.022c0 2.883-.03 3.2-1.961 3.46v.78h8.121v-.78c-1.615-.26-1.643-.577-1.643-3.46zm108.431 2.525l-.114-.524c-1.747 0-1.869-.64-1.878-4.309V7.383l-6.383 2.257.156.57c1.78.014 1.732.252 1.713 2.502v8.782c-.435.757-1.293 1.424-2.311 1.424-1.511 0-2.651-1.35-2.651-3.953V7.384l-6.396 2.256.155.57c1.808.014 1.747.252 1.728 2.79v6.9c-.022 2.955 1.505 5.808 4.813 5.808 2.153 0 4.161-1.61 5.021-3.402l.448 3.21 5.699-2.05zM193.557 8.088c1.949 0 2.595 2.537 2.376 5.132h-5.375c.075-2.623.788-5.132 2.999-5.132zm6.504 10.57c-.871 1.798-2.367 2.904-4.27 2.904-3.195 0-5.109-3.176-5.234-7.415h9.81c.168-3.426-1.529-6.82-6.182-6.82-4.573 0-7.191 4.049-7.191 9.227 0 5.028 2.775 9.105 7.122 9.105 3.236 0 5.75-2.878 6.559-6.803l-.614-.198zm55.577 2.449v-8.03c0-2.955-1.547-5.693-4.855-5.693-2.921 0-3.823 1.614-4.668 3.199l-.45-3.2-5.995 2.115.245.575c1.812 0 1.731.175 1.731 3.47v7.564c0 2.884-.029 3.2-1.961 3.46v.78h8.116v-.78c-1.614-.26-1.643-.576-1.643-3.46v-9.766c1.7-2.18 4.963-1.357 4.963 2.745v7.021c0 2.884-.029 3.2-1.961 3.46v.78h8.121v-.78c-1.614-.26-1.643-.576-1.643-3.46zm-34.015 1.023c-.83.726-1.567.996-2.492.996-1.316 0-2.108-1.266-2.108-3.345V9.353h3.505l.319-1.497h-3.824V2.46h-.556c-1.453 3.012-3.536 5.103-6.445 6.154l-.176.74h2.596v11.79c0 3.029 2.006 4.566 4.309 4.566 2.31 0 4.013-1.186 5.283-3.098l-.411-.482zm-143.521.604c-1.099 0-1.994-.771-1.994-2.553 0-2.48 2.253-5.347 4.34-5.969v6.71c-.56.91-1.398 1.812-2.346 1.812zm9.381.143c-1.737.874-2.572.191-2.572-2.436v-7.557c0-3.505-2.097-5.684-5.936-5.684-4.425 0-6.569 2.687-6.968 5.438l3.289.925s-.53-5.257 2.474-5.257c1.911 0 2.678 1.915 2.678 4.026v.681c-2.711 1.317-8.853 4.65-8.853 8.576-.023 2.324 1.631 3.935 4.362 3.935 2.373 0 3.887-1.947 4.808-3.765.018 2.328 1.298 3.598 3.173 3.598 1.403 0 2.86-.825 3.878-1.94l-.333-.54z" _fill="#2e74b5"/><path pid="1" d="M89.632 21.02V5.858c0-2.6-.017-3.02-1.721-3.02l-.24-.563L94.15 0v21.02c0 2.884.028 3.201 1.96 3.46v.701h-8.439v-.7c1.933-.26 1.961-.577 1.961-3.46zm-50.179 1.234c-1.843 0-3.298-2.808-3.661-6.12-.52-4.747.63-8.226 2.476-8.226 1.647 0 3.433 1.923 3.433 8.06v-.009 4.919c-.458.836-1.103 1.376-2.248 1.376zm8.67 1.218l-.116-.524c-1.746 0-1.867-.64-1.877-4.309V.36l-6.478 2.274.24.564c1.703 0 1.72.42 1.72 3.02 0 1.002.102 1.93.17 2.435-1.158-1.292-2.433-1.65-3.8-1.65-3.455 0-6.632 3.452-6.632 9.947 0 4.408 2.48 8.591 5.789 8.591 2.344 0 3.995-1.906 4.78-3.642l.505 3.623 5.698-2.05zm57.279-1.218c-1.842 0-3.298-2.808-3.66-6.12-.522-4.747.63-8.226 2.475-8.226 1.647 0 3.433 1.923 3.433 8.06l.001-.009v4.919c-.458.836-1.104 1.376-2.249 1.376zm8.67 1.218l-.115-.524c-1.746 0-1.868-.64-1.877-4.309V.36l-6.478 2.274.239.564c1.704 0 1.722.42 1.722 3.02a19 19 0 00.169 2.435c-1.158-1.292-2.433-1.65-3.8-1.65-3.455 0-6.633 3.452-6.633 9.947 0 4.408 2.48 8.591 5.789 8.591 2.345 0 3.996-1.906 4.781-3.642l.505 3.623 5.698-2.05zM67.088 7.566v.65c1.413.46 2.018.623 1.24 4.16l-1.759 7.843-2.643-8.685c-.59-1.982-.46-2.86 1.153-3.317v-.65h-6.746v.617l.494 1.862-2.073 9.897-1.837-9.074c-.386-1.841-.215-2.26 1.774-2.652v-.65h-8.81v.65c1.327.426 1.558.95 1.875 2.259l3.633 14.705h3.336l2.688-12.928 3.435 12.928h3.575l3.23-13.92c.547-2.422.864-2.586 2.479-3.044v-.65h-5.044zM15.064 3.047v-.74h6.934v.74c-2.509.346-2.855.446-2.855 3.629V25.18h-4.136L4.079 7.152v13.66c0 3.182.346 3.277 2.883 3.623v.746H0v-.746c2.509-.346 2.855-.44 2.855-3.623V4.837C1.85 3.531 1.44 3.233.577 3.047v-.74h6.058l11.284 18.139V6.676c0-3.183-.346-3.283-2.855-3.629z" _fill="#2e74b5"/>'
      }
    })
  },
  1562: function (t, e, n) {
    n(11).register({
      'nidwaldnerzeitung--mobile': {
        width: 29,
        height: 16,
        viewBox: '0 0 29 16',
        data: '<path pid="0" d="M20.849 14.834c4.458 0 5.13-.628 6.825-4.736h.525l-1.146 5.641c-1.733-.042-3.908-.149-5.598-.149l-5.946.004 8.086-14.57h-.79c-4.731 0-4.465.68-6.32 4.74h-.524L16.987.123c1.732.042 3.547.149 5.238.149l5.634-.004-8.091 14.566h1.081zM10.338.649V.153h4.646v.496C13.303.88 13.07.948 13.07 3.08v12.4H10.3L2.978 3.399v9.152c0 2.133.232 2.196 1.932 2.428v.5H.245v-.5c1.68-.232 1.913-.295 1.913-2.428V1.848C1.486.973 1.21.774.632.648V.154H4.69l7.56 12.153V3.08c0-2.132-.231-2.2-1.912-2.431z" _fill="#2e74b5"/>'
      }
    })
  },
  1586: function (t, e, n) {
    var r;
    'undefined' != typeof self && self,
    t.exports = (r = n(0), function (t) {
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
      n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      },
      n.p = '',
      n(n.s = 'fb15')
    }({
      '091b': function (t, e, n) {
        (e = n('24fb') (!1)).push([t.i,
        '.vue-slider-dot{position:absolute;-webkit-transition:all 0s;transition:all 0s;z-index:5}.vue-slider-dot:focus{outline:none}.vue-slider-dot-tooltip{position:absolute;visibility:hidden}.vue-slider-dot-hover:hover .vue-slider-dot-tooltip,.vue-slider-dot-tooltip-show{visibility:visible}.vue-slider-dot-tooltip-top{top:-10px;left:50%;-webkit-transform:translate(-50%,-100%);transform:translate(-50%,-100%)}.vue-slider-dot-tooltip-bottom{bottom:-10px;left:50%;-webkit-transform:translate(-50%,100%);transform:translate(-50%,100%)}.vue-slider-dot-tooltip-left{left:-10px;top:50%;-webkit-transform:translate(-100%,-50%);transform:translate(-100%,-50%)}.vue-slider-dot-tooltip-right{right:-10px;top:50%;-webkit-transform:translate(100%,-50%);transform:translate(100%,-50%)}',
        '']),
        t.exports = e
      },
      '24fb': function (t, e, n) {
        'use strict';
        function r(t, e) {
          var n = t[1] || '',
          r = t[3];
          if (!r) return n;
          if (e && 'function' == typeof btoa) {
            var i = o(r),
            a = r.sources.map((function (t) {
              return '/*# sourceURL='.concat(r.sourceRoot || '').concat(t, ' */')
            }));
            return [n].concat(a).concat([i]).join('\n')
          }
          return [n].join('\n')
        }
        function o(t) {
          var e = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
          n = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(e);
          return '/*# '.concat(n, ' */')
        }
        t.exports = function (t) {
          var e = [
          ];
          return e.toString = function () {
            return this.map((function (e) {
              var n = r(e, t);
              return e[2] ? '@media '.concat(e[2], ' {').concat(n, '}') : n
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
              var a = this[i][0];
              null != a && (o[a] = !0)
            }
            for (var s = 0; s < t.length; s++) {
              var u = [
              ].concat(t[s]);
              r && o[u[0]] || (n && (u[2] ? u[2] = ''.concat(n, ' and ').concat(u[2]) : u[2] = n), e.push(u))
            }
          },
          e
        }
      },
      2638: function (t, e, n) {
        'use strict';
        function r() {
          return (r = Object.assign || function (t) {
            for (var e, n = 1; n < arguments.length; n++) for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t
          }).apply(this, arguments)
        }
        var o = [
          'attrs',
          'props',
          'domProps'
        ],
        i = [
          'class',
          'style',
          'directives'
        ],
        a = [
          'on',
          'nativeOn'
        ],
        s = function (t) {
          return t.reduce((function (t, e) {
            for (var n in e) if (t[n]) if ( - 1 !== o.indexOf(n)) t[n] = r({
            }, t[n], e[n]);
             else if ( - 1 !== i.indexOf(n)) {
              var s = t[n] instanceof Array ? t[n] : [
                t[n]
              ],
              l = e[n] instanceof Array ? e[n] : [
                e[n]
              ];
              t[n] = s.concat(l)
            } else if ( - 1 !== a.indexOf(n)) for (var d in e[n]) if (t[n][d]) {
              var c = t[n][d] instanceof Array ? t[n][d] : [
                t[n][d]
              ],
              f = e[n][d] instanceof Array ? e[n][d] : [
                e[n][d]
              ];
              t[n][d] = c.concat(f)
            } else t[n][d] = e[n][d];
             else if ('hook' == n) for (var h in e[n]) t[n][h] = t[n][h] ? u(t[n][h], e[n][h]) : e[n][h];
             else t[n] = e[n];
             else t[n] = e[n];
            return t
          }), {
          })
        },
        u = function (t, e) {
          return function () {
            t && t.apply(this, arguments),
            e && e.apply(this, arguments)
          }
        };
        t.exports = s
      },
      '499e': function (t, e, n) {
        'use strict';
        function r(t, e) {
          for (var n = [
          ], r = {
          }, o = 0; o < e.length; o++) {
            var i = e[o],
            a = i[0],
            l = {
              id: t + ':' + o,
              css: i[1],
              media: i[2],
              sourceMap: i[3]
            };
            r[a] ? r[a].parts.push(l) : n.push(r[a] = {
              id: a,
              parts: [
                l
              ]
            })
          }
          return n
        }
        n.r(e),
        n.d(e, 'default', (function () {
          return p
        }));
        var o = 'undefined' != typeof document;
        if ('undefined' != typeof DEBUG && DEBUG && !o) throw new Error('vue-style-loader cannot be used in a non-browser environment. Use { target: \'node\' } in your Webpack config to indicate a server-rendering environment.');
        var i = {
        },
        a = o && (document.head || document.getElementsByTagName('head') [0]),
        s = null,
        u = 0,
        l = !1,
        d = function () {
        },
        c = null,
        f = 'data-vue-ssr-id',
        h = 'undefined' != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
        function p(t, e, n, o) {
          l = n,
          c = o || {
          };
          var a = r(t, e);
          return m(a),
          function (e) {
            for (var n = [
            ], o = 0; o < a.length; o++) {
              var s = a[o],
              u = i[s.id];
              u.refs--,
              n.push(u)
            }
            for (e ? m(a = r(t, e)) : a = [
            ], o = 0; o < n.length; o++) if (0 === (u = n[o]).refs) {
              for (var l = 0; l < u.parts.length; l++) u.parts[l]();
              delete i[u.id]
            }
          }
        }
        function m(t) {
          for (var e = 0; e < t.length; e++) {
            var n = t[e],
            r = i[n.id];
            if (r) {
              r.refs++;
              for (var o = 0; o < r.parts.length; o++) r.parts[o](n.parts[o]);
              for (; o < n.parts.length; o++) r.parts.push(y(n.parts[o]));
              r.parts.length > n.parts.length && (r.parts.length = n.parts.length)
            } else {
              var a = [
              ];
              for (o = 0; o < n.parts.length; o++) a.push(y(n.parts[o]));
              i[n.id] = {
                id: n.id,
                refs: 1,
                parts: a
              }
            }
          }
        }
        function v() {
          var t = document.createElement('style');
          return t.type = 'text/css',
          a.appendChild(t),
          t
        }
        function y(t) {
          var e,
          n,
          r = document.querySelector('style[' + f + '~="' + t.id + '"]');
          if (r) {
            if (l) return d;
            r.parentNode.removeChild(r)
          }
          if (h) {
            var o = u++;
            r = s || (s = v()),
            e = g.bind(null, r, o, !1),
            n = g.bind(null, r, o, !0)
          } else r = v(),
          e = x.bind(null, r),
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
        var b = function () {
          var t = [
          ];
          return function (e, n) {
            return t[e] = n,
            t.filter(Boolean).join('\n')
          }
        }();
        function g(t, e, n, r) {
          var o = n ? '' : r.css;
          if (t.styleSheet) t.styleSheet.cssText = b(e, o);
           else {
            var i = document.createTextNode(o),
            a = t.childNodes;
            a[e] && t.removeChild(a[e]),
            a.length ? t.insertBefore(i, a[e]) : t.appendChild(i)
          }
        }
        function x(t, e) {
          var n = e.css,
          r = e.media,
          o = e.sourceMap;
          if (r && t.setAttribute('media', r), c.ssrId && t.setAttribute(f, e.id), o && (n += '\n/*# sourceURL=' + o.sources[0] + ' */', n += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + ' */'), t.styleSheet) t.styleSheet.cssText = n;
           else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(n))
          }
        }
      },
      '4abb': function (t, e, n) {
        var r = n('7a57');
        'string' == typeof r && (r = [
          [t.i,
          r,
          '']
        ]),
        r.locals && (t.exports = r.locals),
        (0, n('499e').default) ('b2af7572', r, !0, {
          sourceMap: !1,
          shadowMode: !1
        })
      },
      '4ed8': function (t, e, n) {
        var r = n('091b');
        'string' == typeof r && (r = [
          [t.i,
          r,
          '']
        ]),
        r.locals && (t.exports = r.locals),
        (0, n('499e').default) ('2f6bee1a', r, !0, {
          sourceMap: !1,
          shadowMode: !1
        })
      },
      '556c': function (t, e, n) {
        var r = n('eef2');
        'string' == typeof r && (r = [
          [t.i,
          r,
          '']
        ]),
        r.locals && (t.exports = r.locals),
        (0, n('499e').default) ('1209fd47', r, !0, {
          sourceMap: !1,
          shadowMode: !1
        })
      },
      '65d9': function (t, e, n) {
        'use strict';
        function r(t) {
          return t && 'object' == typeof t && 'default' in t ? t.default : t
        }
        Object.defineProperty(e, '__esModule', {
          value: !0
        });
        var o = r(n('8bbf')),
        i = 'undefined' != typeof Reflect && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;
        function a(t, e) {
          s(t, e),
          Object.getOwnPropertyNames(e.prototype).forEach((function (n) {
            s(t.prototype, e.prototype, n)
          })),
          Object.getOwnPropertyNames(e).forEach((function (n) {
            s(t, e, n)
          }))
        }
        function s(t, e, n) {
          (n ? Reflect.getOwnMetadataKeys(e, n) : Reflect.getOwnMetadataKeys(e)).forEach((function (r) {
            var o = n ? Reflect.getOwnMetadata(r, e, n) : Reflect.getOwnMetadata(r, e);
            n ? Reflect.defineMetadata(r, o, t, n) : Reflect.defineMetadata(r, o, t)
          }))
        }
        var l = {
          __proto__: [
          ]
        }
        instanceof Array;
        function d(t) {
          return function (e, n, r) {
            var o = 'function' == typeof e ? e : e.constructor;
            o.__decorators__ || (o.__decorators__ = [
            ]),
            'number' != typeof r && (r = void 0),
            o.__decorators__.push((function (e) {
              return t(e, n, r)
            }))
          }
        }
        function c() {
          for (var t = [
          ], e = 0; e < arguments.length; e++) t[e] = arguments[e];
          return o.extend({
            mixins: t
          })
        }
        function f(t) {
          var e = typeof t;
          return null == t || 'object' !== e && 'function' !== e
        }
        function h(t, e) {
          var n = e.prototype._init;
          e.prototype._init = function () {
            var e = this,
            n = Object.getOwnPropertyNames(t);
            if (t.$options.props) for (var r in t.$options.props) t.hasOwnProperty(r) || n.push(r);
            n.forEach((function (n) {
              '_' !== n.charAt(0) && Object.defineProperty(e, n, {
                get: function () {
                  return t[n]
                },
                set: function (e) {
                  t[n] = e
                },
                configurable: !0
              })
            }))
          };
          var r = new e;
          e.prototype._init = n;
          var o = {
          };
          return Object.keys(r).forEach((function (t) {
            void 0 !== r[t] && (o[t] = r[t])
          })),
          o
        }
        var p = [
          'data',
          'beforeCreate',
          'created',
          'beforeMount',
          'mounted',
          'beforeDestroy',
          'destroyed',
          'beforeUpdate',
          'updated',
          'activated',
          'deactivated',
          'render',
          'errorCaptured',
          'serverPrefetch'
        ];
        function m(t, e) {
          void 0 === e && (e = {
          }),
          e.name = e.name || t._componentTag || t.name;
          var n = t.prototype;
          Object.getOwnPropertyNames(n).forEach((function (t) {
            if ('constructor' !== t) if (p.indexOf(t) > - 1) e[t] = n[t];
             else {
              var r = Object.getOwnPropertyDescriptor(n, t);
              void 0 !== r.value ? 'function' == typeof r.value ? (e.methods || (e.methods = {
              })) [t] = r.value : (e.mixins || (e.mixins = [
              ])).push({
                data: function () {
                  var e;
                  return (e = {
                  }) [t] = r.value,
                  e
                }
              }) : (r.get || r.set) && ((e.computed || (e.computed = {
              })) [t] = {
                get: r.get,
                set: r.set
              })
            }
          })),
          (e.mixins || (e.mixins = [
          ])).push({
            data: function () {
              return h(this, t)
            }
          });
          var r = t.__decorators__;
          r && (r.forEach((function (t) {
            return t(e)
          })), delete t.__decorators__);
          var s = Object.getPrototypeOf(t.prototype),
          u = s instanceof o ? s.constructor : o,
          l = u.extend(e);
          return v(l, t, u),
          i && a(l, t),
          l
        }
        function v(t, e, n) {
          Object.getOwnPropertyNames(e).forEach((function (r) {
            if ('prototype' !== r) {
              var o = Object.getOwnPropertyDescriptor(t, r);
              if (!o || o.configurable) {
                var i = Object.getOwnPropertyDescriptor(e, r);
                if (!l) {
                  if ('cid' === r) return;
                  var a = Object.getOwnPropertyDescriptor(n, r);
                  if (!f(i.value) && a && a.value === i.value) return
                }
                Object.defineProperty(t, r, i)
              }
            }
          }))
        }
        function y(t) {
          return 'function' == typeof t ? m(t) : function (e) {
            return m(e, t)
          }
        }
        y.registerHooks = function (t) {
          p.push.apply(p, t)
        },
        e.default = y,
        e.createDecorator = d,
        e.mixins = c
      },
      '7a57': function (t, e, n) {
        (e = n('24fb') (!1)).push([t.i,
        '.vue-slider{position:relative;-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;-webkit-tap-highlight-color:rgba(0,0,0,0)}.vue-slider-rail{position:relative;width:100%;height:100%;-webkit-transition-property:width,height,left,right,top,bottom;transition-property:width,height,left,right,top,bottom}.vue-slider-process{position:absolute;z-index:1}',
        '']),
        t.exports = e
      },
      8875: function (t, e, n) {
        var r,
        o,
        i,
        a;
        'undefined' != typeof self && self,
        a = function () {
          function t() {
            var e = Object.getOwnPropertyDescriptor(document, 'currentScript');
            if (!e && 'currentScript' in document && document.currentScript) return document.currentScript;
            if (e && e.get !== t && document.currentScript) return document.currentScript;
            try {
              throw new Error
            } catch (t) {
              var n,
              r,
              o,
              a = /@([^@]*):(\d+):(\d+)\s*$/gi,
              s = /.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(t.stack) || a.exec(t.stack),
              u = s && s[1] || !1,
              l = s && s[2] || !1,
              d = document.location.href.replace(document.location.hash, ''),
              c = document.getElementsByTagName('script');
              u === d && (n = document.documentElement.outerHTML, r = new RegExp('(?:[^\\n]+?\\n){0,' + (l - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i'), o = n.replace(r, '$1').trim());
              for (var f = 0; f < c.length; f++) {
                if ('interactive' === c[f].readyState) return c[f];
                if (c[f].src === u) return c[f];
                if (u === d && c[f].innerHTML && c[f].innerHTML.trim() === o) return c[f]
              }
              return null
            }
          }
          return t
        },
        o = [
        ],
        void 0 === (i = 'function' == typeof (r = a) ? r.apply(e, o) : r) || (t.exports = i)
      },
      '8bbf': function (t, e) {
        t.exports = r
      },
      eef2: function (t, e, n) {
        (e = n('24fb') (!1)).push([t.i,
        '.vue-slider-marks{position:relative;width:100%;height:100%}.vue-slider-mark{position:absolute;z-index:1}.vue-slider-ltr .vue-slider-mark,.vue-slider-rtl .vue-slider-mark{width:0;height:100%;top:50%}.vue-slider-ltr .vue-slider-mark-step,.vue-slider-rtl .vue-slider-mark-step{top:0}.vue-slider-ltr .vue-slider-mark-label,.vue-slider-rtl .vue-slider-mark-label{top:100%;margin-top:10px}.vue-slider-ltr .vue-slider-mark{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vue-slider-ltr .vue-slider-mark-step{left:0}.vue-slider-ltr .vue-slider-mark-label{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.vue-slider-rtl .vue-slider-mark{-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%)}.vue-slider-rtl .vue-slider-mark-step{right:0}.vue-slider-rtl .vue-slider-mark-label{right:50%;-webkit-transform:translateX(50%);transform:translateX(50%)}.vue-slider-btt .vue-slider-mark,.vue-slider-ttb .vue-slider-mark{width:100%;height:0;left:50%}.vue-slider-btt .vue-slider-mark-step,.vue-slider-ttb .vue-slider-mark-step{left:0}.vue-slider-btt .vue-slider-mark-label,.vue-slider-ttb .vue-slider-mark-label{left:100%;margin-left:10px}.vue-slider-btt .vue-slider-mark{-webkit-transform:translate(-50%,50%);transform:translate(-50%,50%)}.vue-slider-btt .vue-slider-mark-step{top:0}.vue-slider-btt .vue-slider-mark-label{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.vue-slider-ttb .vue-slider-mark{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vue-slider-ttb .vue-slider-mark-step{bottom:0}.vue-slider-ttb .vue-slider-mark-label{bottom:50%;-webkit-transform:translateY(50%);transform:translateY(50%)}.vue-slider-mark-label,.vue-slider-mark-step{position:absolute}',
        '']),
        t.exports = e
      },
      fb15: function (t, e, n) {
        'use strict';
        if (n.r(e), n.d(e, 'ERROR_TYPE', (function () {
          return K
        })), n.d(e, 'VueSliderMark', (function () {
          return L
        })), n.d(e, 'VueSliderDot', (function () {
          return O
        })), 'undefined' != typeof window) {
          var r = window.document.currentScript,
          o = n('8875');
          r = o(),
          'currentScript' in document || Object.defineProperty(document, 'currentScript', {
            get: o
          });
          var i = r && r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
          i && (n.p = i[1])
        }
        var a = n('2638'),
        s = n.n(a);
        function u(t, e, n, r) {
          var o,
          i = arguments.length,
          a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r);
           else for (var s = t.length - 1; s >= 0; s--) (o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
          return i > 3 && a && Object.defineProperty(e, n, a),
          a
        }
        var l = n('8bbf'),
        d = n.n(l),
        c = n('65d9'),
        f = n.n(c);
        function h(t, e) {
          return void 0 === e && (e = {
          }),
          Object(c.createDecorator) ((function (n, r) {
            (n.props || (n.props = {
            })) [r] = e,
            n.model = {
              prop: r,
              event: t || r
            }
          }))
        }
        function p(t) {
          return void 0 === t && (t = {
          }),
          Object(c.createDecorator) ((function (e, n) {
            (e.props || (e.props = {
            })) [n] = t
          }))
        }
        function m(t, e) {
          void 0 === e && (e = {
          });
          var n = e.deep,
          r = void 0 !== n && n,
          o = e.immediate,
          i = void 0 !== o && o;
          return Object(c.createDecorator) ((function (e, n) {
            'object' != typeof e.watch && (e.watch = Object.create(null));
            var o = e.watch;
            'object' != typeof o[t] || Array.isArray(o[t]) ? void 0 === o[t] && (o[t] = [
            ]) : o[t] = [
              o[t]
            ],
            o[t].push({
              handler: n,
              deep: r,
              immediate: i
            })
          }))
        }
        function v(t) {
          return (v = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
            return typeof t
          }
           : function (t) {
            return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
          }) (t)
        }
        function y(t, e) {
          if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
        }
        function b(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
          }
        }
        function g(t, e, n) {
          return e && b(t.prototype, e),
          n && b(t, n),
          t
        }
        function x(t, e) {
          if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }),
          e && w(t, e)
        }
        function w(t, e) {
          return (w = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e,
            t
          }) (t, e)
        }
        function A(t) {
          var e = _();
          return function () {
            var n,
            r = S(t);
            if (e) {
              var o = S(this).constructor;
              n = Reflect.construct(r, arguments, o)
            } else n = r.apply(this, arguments);
            return z(this, n)
          }
        }
        function z(t, e) {
          return !e || 'object' !== v(e) && 'function' != typeof e ? k(t) : e
        }
        function k(t) {
          if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
          return t
        }
        function _() {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return Date.prototype.toString.call(Reflect.construct(Date, [
            ], (function () {
            }))),
            !0
          } catch (t) {
            return !1
          }
        }
        function S(t) {
          return (S = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
          }) (t)
        }
        n('4ed8');
        var O = function () {
          var t = function (t) {
            x(n, t);
            var e = A(n);
            function n() {
              return y(this, n),
              e.apply(this, arguments)
            }
            return g(n, [
              {
                key: 'dragStart',
                value: function (t) {
                  if (this.disabled) return !1;
                  this.$emit('drag-start')
                }
              },
              {
                key: 'render',
                value: function () {
                  var t = arguments[0];
                  return t('div', {
                    ref: 'dot',
                    class : this.dotClasses,
                    attrs: {
                      'aria-valuetext': this.tooltipValue
                    },
                    on: {
                      mousedown: this.dragStart,
                      touchstart: this.dragStart
                    }
                  }, [
                    this.$slots.dot || t('div', {
                      class : this.handleClasses,
                      style: this.dotStyle
                    }),
                    'none' !== this.tooltip ? t('div', {
                      class : this.tooltipClasses
                    }, [
                      this.$slots.tooltip || t('div', {
                        class : this.tooltipInnerClasses,
                        style: this.tooltipStyle
                      }, [
                        t('span', {
                          class : 'vue-slider-dot-tooltip-text'
                        }, [
                          this.tooltipValue
                        ])
                      ])
                    ]) : null
                  ])
                }
              },
              {
                key: 'dotClasses',
                get: function () {
                  return ['vue-slider-dot',
                  {
                    'vue-slider-dot-hover': 'hover' === this.tooltip || 'active' === this.tooltip,
                    'vue-slider-dot-disabled': this.disabled,
                    'vue-slider-dot-focus': this.focus
                  }
                  ]
                }
              },
              {
                key: 'handleClasses',
                get: function () {
                  return ['vue-slider-dot-handle',
                  {
                    'vue-slider-dot-handle-disabled': this.disabled,
                    'vue-slider-dot-handle-focus': this.focus
                  }
                  ]
                }
              },
              {
                key: 'tooltipClasses',
                get: function () {
                  return ['vue-slider-dot-tooltip',
                  [
                    'vue-slider-dot-tooltip-'.concat(this.tooltipPlacement)
                  ],
                  {
                    'vue-slider-dot-tooltip-show': this.showTooltip
                  }
                  ]
                }
              },
              {
                key: 'tooltipInnerClasses',
                get: function () {
                  return ['vue-slider-dot-tooltip-inner',
                  [
                    'vue-slider-dot-tooltip-inner-'.concat(this.tooltipPlacement)
                  ],
                  {
                    'vue-slider-dot-tooltip-inner-disabled': this.disabled,
                    'vue-slider-dot-tooltip-inner-focus': this.focus
                  }
                  ]
                }
              },
              {
                key: 'showTooltip',
                get: function () {
                  switch (this.tooltip) {
                    case 'always':
                      return !0;
                    case 'none':
                      return !1;
                    case 'focus':
                    case 'active':
                      return !!this.focus;
                    default:
                      return !1
                  }
                }
              },
              {
                key: 'tooltipValue',
                get: function () {
                  return this.tooltipFormatter ? 'string' == typeof this.tooltipFormatter ? this.tooltipFormatter.replace(/\{value\}/, String(this.value)) : this.tooltipFormatter(this.value) : this.value
                }
              }
            ]),
            n
          }(d.a);
          return u([p({
          default:
            0
          })], t.prototype, 'value', void 0),
          u([p()], t.prototype, 'tooltip', void 0),
          u([p()], t.prototype, 'dotStyle', void 0),
          u([p()], t.prototype, 'tooltipStyle', void 0),
          u([p({
            type: String,
            validator: function (t) {
              return ['top',
              'right',
              'bottom',
              'left'].indexOf(t) > - 1
            },
            required: !0
          })], t.prototype, 'tooltipPlacement', void 0),
          u([p({
            type: [
              String,
              Function
            ]
          })], t.prototype, 'tooltipFormatter', void 0),
          u([p({
            type: Boolean,
          default:
            !1
          })], t.prototype, 'focus', void 0),
          u([p({
          default:
            !1
          })], t.prototype, 'disabled', void 0),
          t = u([f.a], t)
        }();
        function P(t) {
          return (P = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
            return typeof t
          }
           : function (t) {
            return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
          }) (t)
        }
        function E(t, e) {
          if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
        }
        function j(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
          }
        }
        function M(t, e, n) {
          return e && j(t.prototype, e),
          n && j(t, n),
          t
        }
        function D(t, e) {
          if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }),
          e && T(t, e)
        }
        function T(t, e) {
          return (T = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e,
            t
          }) (t, e)
        }
        function R(t) {
          var e = I();
          return function () {
            var n,
            r = H(t);
            if (e) {
              var o = H(this).constructor;
              n = Reflect.construct(r, arguments, o)
            } else n = r.apply(this, arguments);
            return C(this, n)
          }
        }
        function C(t, e) {
          return !e || 'object' !== P(e) && 'function' != typeof e ? V(t) : e
        }
        function V(t) {
          if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
          return t
        }
        function I() {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return Date.prototype.toString.call(Reflect.construct(Date, [
            ], (function () {
            }))),
            !0
          } catch (t) {
            return !1
          }
        }
        function H(t) {
          return (H = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
          }) (t)
        }
        n('556c');
        var B,
        L = function () {
          var t = function (t) {
            D(n, t);
            var e = R(n);
            function n() {
              return E(this, n),
              e.apply(this, arguments)
            }
            return M(n, [
              {
                key: 'labelClickHandle',
                value: function (t) {
                  t.stopPropagation(),
                  this.$emit('pressLabel', this.mark.pos)
                }
              },
              {
                key: 'render',
                value: function () {
                  var t = arguments[0],
                  e = this.mark;
                  return t('div', {
                    class : this.marksClasses
                  }, [
                    this.$slots.step || t('div', {
                      class : this.stepClasses,
                      style: [
                        this.stepStyle,
                        e.style,
                        e.active ? this.stepActiveStyle : null,
                        e.active ? e.activeStyle : null
                      ]
                    }),
                    this.hideLabel ? null : this.$slots.label || t('div', {
                      class : this.labelClasses,
                      style: [
                        this.labelStyle,
                        e.labelStyle,
                        e.active ? this.labelActiveStyle : null,
                        e.active ? e.labelActiveStyle : null
                      ],
                      on: {
                        click: this.labelClickHandle
                      }
                    }, [
                      e.label
                    ])
                  ])
                }
              },
              {
                key: 'marksClasses',
                get: function () {
                  return ['vue-slider-mark',
                  {
                    'vue-slider-mark-active': this.mark.active
                  }
                  ]
                }
              },
              {
                key: 'stepClasses',
                get: function () {
                  return ['vue-slider-mark-step',
                  {
                    'vue-slider-mark-step-active': this.mark.active
                  }
                  ]
                }
              },
              {
                key: 'labelClasses',
                get: function () {
                  return ['vue-slider-mark-label',
                  {
                    'vue-slider-mark-label-active': this.mark.active
                  }
                  ]
                }
              }
            ]),
            n
          }(d.a);
          return u([p({
            required: !0
          })], t.prototype, 'mark', void 0),
          u([p(Boolean)], t.prototype, 'hideLabel', void 0),
          u([p()], t.prototype, 'stepStyle', void 0),
          u([p()], t.prototype, 'stepActiveStyle', void 0),
          u([p()], t.prototype, 'labelStyle', void 0),
          u([p()], t.prototype, 'labelActiveStyle', void 0),
          t = u([f.a], t)
        }(),
        U = function (t) {
          return 'number' == typeof t ? ''.concat(t, 'px') : t
        },
        N = function (t) {
          var e = document.documentElement,
          n = document.body,
          r = t.getBoundingClientRect();
          return {
            y: r.top + (window.pageYOffset || e.scrollTop) - (e.clientTop || n.clientTop || 0),
            x: r.left + (window.pageXOffset || e.scrollLeft) - (e.clientLeft || n.clientLeft || 0)
          }
        },
        F = function (t, e, n) {
          var r = 'targetTouches' in t ? t.targetTouches[0] : t,
          o = N(e),
          i = {
            x: r.pageX - o.x,
            y: r.pageY - o.y
          };
          return {
            x: n ? e.offsetWidth - i.x : i.x,
            y: n ? e.offsetHeight - i.y : i.y
          }
        };
        !function (t) {
          t[t.PAGE_UP = 33] = 'PAGE_UP',
          t[t.PAGE_DOWN = 34] = 'PAGE_DOWN',
          t[t.END = 35] = 'END',
          t[t.HOME = 36] = 'HOME',
          t[t.LEFT = 37] = 'LEFT',
          t[t.UP = 38] = 'UP',
          t[t.RIGHT = 39] = 'RIGHT',
          t[t.DOWN = 40] = 'DOWN'
        }(B || (B = {
        }));
        var Q = function (t, e) {
          if (e.hook) {
            var n = e.hook(t);
            if ('function' == typeof n) return n;
            if (!n) return null
          }
          switch (t.keyCode) {
            case B.UP:
              return function (t) {
                return 'ttb' === e.direction ? t - 1 : t + 1
              };
            case B.RIGHT:
              return function (t) {
                return 'rtl' === e.direction ? t - 1 : t + 1
              };
            case B.DOWN:
              return function (t) {
                return 'ttb' === e.direction ? t + 1 : t - 1
              };
            case B.LEFT:
              return function (t) {
                return 'rtl' === e.direction ? t + 1 : t - 1
              };
            case B.END:
              return function () {
                return e.max
              };
            case B.HOME:
              return function () {
                return e.min
              };
            case B.PAGE_UP:
              return function (t) {
                return t + 10
              };
            case B.PAGE_DOWN:
              return function (t) {
                return t - 10
              };
            default:
              return null
          }
        };
        function W(t, e) {
          if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
        }
        function q(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
          }
        }
        function X(t, e, n) {
          return e && q(t.prototype, e),
          n && q(t, n),
          t
        }
        var Y,
        K,
        G = function () {
          function t(e) {
            W(this, t),
            this.num = e
          }
          return X(t, [
            {
              key: 'decimal',
              value: function (t, e) {
                var n = this.num,
                r = this.getDecimalLen(n),
                o = this.getDecimalLen(t),
                i = 0;
                switch (e) {
                  case '+':
                    i = this.getExponent(r, o),
                    this.num = (this.safeRoundUp(n, i) + this.safeRoundUp(t, i)) / i;
                    break;
                  case '-':
                    i = this.getExponent(r, o),
                    this.num = (this.safeRoundUp(n, i) - this.safeRoundUp(t, i)) / i;
                    break;
                  case '*':
                    this.num = this.safeRoundUp(this.safeRoundUp(n, this.getExponent(r)), this.safeRoundUp(t, this.getExponent(o))) / this.getExponent(r + o);
                    break;
                  case '/':
                    i = this.getExponent(r, o),
                    this.num = this.safeRoundUp(n, i) / this.safeRoundUp(t, i);
                    break;
                  case '%':
                    i = this.getExponent(r, o),
                    this.num = this.safeRoundUp(n, i) % this.safeRoundUp(t, i) / i
                }
                return this
              }
            },
            {
              key: 'plus',
              value: function (t) {
                return this.decimal(t, '+')
              }
            },
            {
              key: 'minus',
              value: function (t) {
                return this.decimal(t, '-')
              }
            },
            {
              key: 'multiply',
              value: function (t) {
                return this.decimal(t, '*')
              }
            },
            {
              key: 'divide',
              value: function (t) {
                return this.decimal(t, '/')
              }
            },
            {
              key: 'remainder',
              value: function (t) {
                return this.decimal(t, '%')
              }
            },
            {
              key: 'toNumber',
              value: function () {
                return this.num
              }
            },
            {
              key: 'getDecimalLen',
              value: function (t) {
                var e = ''.concat(t).split('e');
                return (''.concat(e[0]).split('.') [1] || '').length - (e[1] ? + e[1] : 0)
              }
            },
            {
              key: 'getExponent',
              value: function (t, e) {
                return Math.pow(10, void 0 !== e ? Math.max(t, e) : t)
              }
            },
            {
              key: 'safeRoundUp',
              value: function (t, e) {
                return Math.round(t * e)
              }
            }
          ]),
          t
        }();
        function J(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))),
            n.push.apply(n, r)
          }
          return n
        }
        function Z(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {
            };
            e % 2 ? J(Object(n), !0).forEach((function (e) {
              ft(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : J(Object(n)).forEach((function (e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
          }
          return t
        }
        function $(t, e) {
          return et(t) || tt(t, e) || at(t, e) || rt()
        }
        function rt() {
          throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
        }
        function tt(t, e) {
          if ('undefined' != typeof Symbol && Symbol.iterator in Object(t)) {
            var n = [
            ],
            r = !0,
            o = !1,
            i = void 0;
            try {
              for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
            } catch (t) {
              o = !0,
              i = t
            } finally {
              try {
                r || null == s.return || s.return()
              } finally {
                if (o) throw i
              }
            }
            return n
          }
        }
        function et(t) {
          if (Array.isArray(t)) return t
        }
        function nt(t) {
          return st(t) || ot(t) || at(t) || it()
        }
        function it() {
          throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
        }
        function at(t, e) {
          if (t) {
            if ('string' == typeof t) return lt(t, e);
            var n = Object.prototype.toString.call(t).slice(8, - 1);
            return 'Object' === n && t.constructor && (n = t.constructor.name),
            'Map' === n || 'Set' === n ? Array.from(t) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? lt(t, e) : void 0
          }
        }
        function ot(t) {
          if ('undefined' != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }
        function st(t) {
          if (Array.isArray(t)) return lt(t)
        }
        function lt(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r
        }
        function dt(t, e) {
          if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
        }
        function ct(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
          }
        }
        function ut(t, e, n) {
          return e && ct(t.prototype, e),
          n && ct(t, n),
          t
        }
        function ft(t, e, n) {
          return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : t[e] = n,
          t
        }
        !function (t) {
          t[t.VALUE = 1] = 'VALUE',
          t[t.INTERVAL = 2] = 'INTERVAL',
          t[t.MIN = 3] = 'MIN',
          t[t.MAX = 4] = 'MAX',
          t[t.ORDER = 5] = 'ORDER'
        }(K || (K = {
        }));
        var pt = (ft(Y = {
        }, K.VALUE, 'The type of the "value" is illegal'), ft(Y, K.INTERVAL, 'The prop "interval" is invalid, "(max - min)" must be divisible by "interval"'), ft(Y, K.MIN, 'The "value" must be greater than or equal to the "min".'), ft(Y, K.MAX, 'The "value" must be less than or equal to the "max".'), ft(Y, K.ORDER, 'When "order" is false, the parameters "minRange", "maxRange", "fixed", "enabled" are invalid.'), Y),
        ht = function () {
          function t(e) {
            dt(this, t),
            this.dotsPos = [
            ],
            this.dotsValue = [
            ],
            this.cacheRangeDir = {
            },
            this.data = e.data,
            this.max = e.max,
            this.min = e.min,
            this.interval = e.interval,
            this.order = e.order,
            this.marks = e.marks,
            this.included = e.included,
            this.process = e.process,
            this.adsorb = e.adsorb,
            this.dotOptions = e.dotOptions,
            this.onError = e.onError,
            this.order ? (this.minRange = e.minRange || 0, this.maxRange = e.maxRange || 0, this.enableCross = e.enableCross, this.fixed = e.fixed) : ((e.minRange || e.maxRange || !e.enableCross || e.fixed) && this.emitError(K.ORDER), this.minRange = 0, this.maxRange = 0, this.enableCross = !0, this.fixed = !1),
            this.setValue(e.value)
          }
          return ut(t, [
            {
              key: 'setValue',
              value: function (t) {
                var e = this;
                this.setDotsValue(Array.isArray(t) ? this.order ? nt(t).sort((function (t, n) {
                  return e.getIndexByValue(t) - e.getIndexByValue(n)
                })) : nt(t) : [
                  t
                ], !0)
              }
            },
            {
              key: 'setDotsValue',
              value: function (t, e) {
                this.dotsValue = t,
                e && this.syncDotsPos()
              }
            },
            {
              key: 'setDotsPos',
              value: function (t) {
                var e = this,
                n = this.order ? nt(t).sort((function (t, e) {
                  return t - e
                })) : t;
                this.dotsPos = n,
                this.setDotsValue(n.map((function (t) {
                  return e.getValueByPos(t)
                })), this.adsorb)
              }
            },
            {
              key: 'getValueByPos',
              value: function (t) {
                var e = this.parsePos(t);
                if (this.included) {
                  var n = 100;
                  this.markList.forEach((function (r) {
                    var o = Math.abs(r.pos - t);
                    o < n && (n = o, e = r.value)
                  }))
                }
                return e
              }
            },
            {
              key: 'syncDotsPos',
              value: function () {
                var t = this;
                this.dotsPos = this.dotsValue.map((function (e) {
                  return t.parseValue(e)
                }))
              }
            },
            {
              key: 'getRecentDot',
              value: function (t) {
                var e = this.dotsPos.map((function (e) {
                  return Math.abs(e - t)
                }));
                return e.indexOf(Math.min.apply(Math, nt(e)))
              }
            },
            {
              key: 'getIndexByValue',
              value: function (t) {
                return this.data ? this.data.indexOf(t) : new G( + t).minus(this.min).divide(this.interval).toNumber()
              }
            },
            {
              key: 'getValueByIndex',
              value: function (t) {
                return t < 0 ? t = 0 : t > this.total && (t = this.total),
                this.data ? this.data[t] : new G(t).multiply(this.interval).plus(this.min).toNumber()
              }
            },
            {
              key: 'setDotPos',
              value: function (t, e) {
                var n = (t = this.getValidPos(t, e).pos) - this.dotsPos[e];
                if (n) {
                  var r = new Array(this.dotsPos.length);
                  this.fixed ? r = this.getFixedChangePosArr(n, e) : this.minRange || this.maxRange ? r = this.getLimitRangeChangePosArr(t, n, e) : r[e] = n,
                  this.setDotsPos(this.dotsPos.map((function (t, e) {
                    return t + (r[e] || 0)
                  })))
                }
              }
            },
            {
              key: 'getFixedChangePosArr',
              value: function (t, e) {
                var n = this;
                return this.dotsPos.forEach((function (r, o) {
                  if (o !== e) {
                    var i = n.getValidPos(r + t, o),
                    a = i.pos;
                    i.inRange || (t = Math.min(Math.abs(a - r), Math.abs(t)) * (t < 0 ? - 1 : 1))
                  }
                })),
                this.dotsPos.map((function (e) {
                  return t
                }))
              }
            },
            {
              key: 'getLimitRangeChangePosArr',
              value: function (t, e, n) {
                var r = this,
                o = [
                  {
                    index: n,
                    changePos: e
                  }
                ],
                i = e;
                return [this.minRange,
                this.maxRange].forEach((function (a, s) {
                  if (!a) return !1;
                  for (var u = 0 === s, l = e > 0, d = 0, c = function (t, e) {
                    var n = Math.abs(t - e);
                    return u ? n < r.minRangeDir : n > r.maxRangeDir
                  }, f = n + (d = u ? l ? 1 : - 1 : l ? - 1 : 1), h = r.dotsPos[f], p = t; r.isPos(h) && c(h, p); ) {
                    var m = r.getValidPos(h + i, f).pos;
                    o.push({
                      index: f,
                      changePos: m - h
                    }),
                    f += d,
                    p = m,
                    h = r.dotsPos[f]
                  }
                })),
                this.dotsPos.map((function (t, e) {
                  var n = o.filter((function (t) {
                    return t.index === e
                  }));
                  return n.length ? n[0].changePos : 0
                }))
              }
            },
            {
              key: 'isPos',
              value: function (t) {
                return 'number' == typeof t
              }
            },
            {
              key: 'getValidPos',
              value: function (t, e) {
                var n = this.valuePosRange[e],
                r = !0;
                return t < n[0] ? (t = n[0], r = !1) : t > n[1] && (t = n[1], r = !1),
                {
                  pos: t,
                  inRange: r
                }
              }
            },
            {
              key: 'parseValue',
              value: function (t) {
                if (this.data) t = this.data.indexOf(t);
                 else if ('number' == typeof t || 'string' == typeof t) {
                  if ((t = + t) < this.min) return this.emitError(K.MIN),
                  0;
                  if (t > this.max) return this.emitError(K.MAX),
                  0;
                  if ('number' != typeof t || t != t) return this.emitError(K.VALUE),
                  0;
                  t = new G(t).minus(this.min).divide(this.interval).toNumber()
                }
                var e = new G(t).multiply(this.gap).toNumber();
                return e < 0 ? 0 : e > 100 ? 100 : e
              }
            },
            {
              key: 'parsePos',
              value: function (t) {
                var e = Math.round(t / this.gap);
                return this.getValueByIndex(e)
              }
            },
            {
              key: 'isActiveByPos',
              value: function (t) {
                return this.processArray.some((function (e) {
                  var n = $(e, 2),
                  r = n[0],
                  o = n[1];
                  return t >= r && t <= o
                }))
              }
            },
            {
              key: 'getValues',
              value: function () {
                if (this.data) return this.data;
                for (var t = [
                ], e = 0; e <= this.total; e++) t.push(new G(e).multiply(this.interval).plus(this.min).toNumber());
                return t
              }
            },
            {
              key: 'getRangeDir',
              value: function (t) {
                return t ? new G(t).divide(new G(this.data ? this.data.length - 1 : this.max).minus(this.data ? 0 : this.min).toNumber()).multiply(100).toNumber() : 100
              }
            },
            {
              key: 'emitError',
              value: function (t) {
                this.onError && this.onError(t, pt[t])
              }
            },
            {
              key: 'getDotRange',
              value: function (t, e, n) {
                if (!this.dotOptions) return n;
                var r = Array.isArray(this.dotOptions) ? this.dotOptions[t] : this.dotOptions;
                return r && void 0 !== r[e] ? this.parseValue(r[e]) : n
              }
            },
            {
              key: 'markList',
              get: function () {
                var t = this;
                if (!this.marks) return [];
                var e = function (e, n) {
                  var r = t.parseValue(e);
                  return Z({
                    pos: r,
                    value: e,
                    label: e,
                    active: t.isActiveByPos(r)
                  }, n)
                };
                return !0 === this.marks ? this.getValues().map((function (t) {
                  return e(t)
                })) : '[object Object]' === Object.prototype.toString.call(this.marks) ? Object.keys(this.marks).sort((function (t, e) {
                  return + t - + e
                })).map((function (n) {
                  var r = t.marks[n];
                  return e(n, 'string' != typeof r ? r : {
                    label: r
                  })
                })) : Array.isArray(this.marks) ? this.marks.map((function (t) {
                  return e(t)
                })) : 'function' == typeof this.marks ? this.getValues().map((function (e) {
                  return {
                    value: e,
                    result: t.marks(e)
                  }
                })).filter((function (t) {
                  return !!t.result
                })).map((function (t) {
                  var n = t.value,
                  r = t.result;
                  return e(n, r)
                })) : [
                ]
              }
            },
            {
              key: 'processArray',
              get: function () {
                if (this.process) {
                  if ('function' == typeof this.process) return this.process(this.dotsPos);
                  if (1 === this.dotsPos.length) return [[0,
                  this.dotsPos[0]]];
                  if (this.dotsPos.length > 1) return [[Math.min.apply(Math, nt(this.dotsPos)),
                  Math.max.apply(Math, nt(this.dotsPos))]]
                }
                return []
              }
            },
            {
              key: 'total',
              get: function () {
                var t = 0;
                return (t = this.data ? this.data.length - 1 : new G(this.max).minus(this.min).divide(this.interval).toNumber()) - Math.floor(t) != 0 ? (this.emitError(K.INTERVAL), 0) : t
              }
            },
            {
              key: 'gap',
              get: function () {
                return 100 / this.total
              }
            },
            {
              key: 'minRangeDir',
              get: function () {
                return this.cacheRangeDir[this.minRange] ? this.cacheRangeDir[this.minRange] : this.cacheRangeDir[this.minRange] = this.getRangeDir(this.minRange)
              }
            },
            {
              key: 'maxRangeDir',
              get: function () {
                return this.cacheRangeDir[this.maxRange] ? this.cacheRangeDir[this.maxRange] : this.cacheRangeDir[this.maxRange] = this.getRangeDir(this.maxRange)
              }
            },
            {
              key: 'valuePosRange',
              get: function () {
                var t = this,
                e = this.dotsPos,
                n = [
                ];
                return e.forEach((function (r, o) {
                  n.push([Math.max(t.minRange ? t.minRangeDir * o : 0, t.enableCross ? 0 : e[o - 1] || 0, t.getDotRange(o, 'min', 0)),
                  Math.min(t.minRange ? 100 - t.minRangeDir * (e.length - 1 - o) : 100, t.enableCross ? 100 : e[o + 1] || 100, t.getDotRange(o, 'max', 100))])
                })),
                n
              }
            },
            {
              key: 'dotsIndex',
              get: function () {
                var t = this;
                return this.dotsValue.map((function (e) {
                  return t.getIndexByValue(e)
                }))
              }
            }
          ]),
          t
        }();
        function mt(t, e) {
          if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
        }
        function vt(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
          }
        }
        function gt(t, e, n) {
          return e && vt(t.prototype, e),
          n && vt(t, n),
          t
        }
        var bt = function () {
          function t(e) {
            mt(this, t),
            this.states = 0,
            this.map = e
          }
          return gt(t, [
            {
              key: 'add',
              value: function (t) {
                this.states |= t
              }
            },
            {
              key: 'delete',
              value: function (t) {
                this.states &= ~t
              }
            },
            {
              key: 'toggle',
              value: function (t) {
                this.has(t) ? this.delete(t) : this.add(t)
              }
            },
            {
              key: 'has',
              value: function (t) {
                return !!(this.states & t)
              }
            }
          ]),
          t
        }();
        function yt(t, e) {
          return At(t) || wt(t, e) || Pt(t, e) || xt()
        }
        function xt() {
          throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
        }
        function wt(t, e) {
          if ('undefined' != typeof Symbol && Symbol.iterator in Object(t)) {
            var n = [
            ],
            r = !0,
            o = !1,
            i = void 0;
            try {
              for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
            } catch (t) {
              o = !0,
              i = t
            } finally {
              try {
                r || null == s.return || s.return()
              } finally {
                if (o) throw i
              }
            }
            return n
          }
        }
        function At(t) {
          if (Array.isArray(t)) return t
        }
        function zt(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))),
            n.push.apply(n, r)
          }
          return n
        }
        function kt(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {
            };
            e % 2 ? zt(Object(n), !0).forEach((function (e) {
              _t(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : zt(Object(n)).forEach((function (e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
          }
          return t
        }
        function _t(t, e, n) {
          return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : t[e] = n,
          t
        }
        function St(t) {
          return jt(t) || Et(t) || Pt(t) || Ot()
        }
        function Ot() {
          throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
        }
        function Pt(t, e) {
          if (t) {
            if ('string' == typeof t) return Mt(t, e);
            var n = Object.prototype.toString.call(t).slice(8, - 1);
            return 'Object' === n && t.constructor && (n = t.constructor.name),
            'Map' === n || 'Set' === n ? Array.from(t) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Mt(t, e) : void 0
          }
        }
        function Et(t) {
          if ('undefined' != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }
        function jt(t) {
          if (Array.isArray(t)) return Mt(t)
        }
        function Mt(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r
        }
        function Dt(t) {
          return (Dt = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
            return typeof t
          }
           : function (t) {
            return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
          }) (t)
        }
        function Tt(t, e) {
          if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
        }
        function Rt(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
          }
        }
        function Ct(t, e, n) {
          return e && Rt(t.prototype, e),
          n && Rt(t, n),
          t
        }
        function Vt(t, e) {
          if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }),
          e && It(t, e)
        }
        function It(t, e) {
          return (It = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e,
            t
          }) (t, e)
        }
        function Ht(t) {
          var e = Ut();
          return function () {
            var n,
            r = Nt(t);
            if (e) {
              var o = Nt(this).constructor;
              n = Reflect.construct(r, arguments, o)
            } else n = r.apply(this, arguments);
            return Bt(this, n)
          }
        }
        function Bt(t, e) {
          return !e || 'object' !== Dt(e) && 'function' != typeof e ? Lt(t) : e
        }
        function Lt(t) {
          if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
          return t
        }
        function Ut() {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return Date.prototype.toString.call(Reflect.construct(Date, [
            ], (function () {
            }))),
            !0
          } catch (t) {
            return !1
          }
        }
        function Nt(t) {
          return (Nt = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
          }) (t)
        }
        n('4abb');
        var Ft = {
          None: 0,
          Drag: 2,
          Focus: 4
        },
        Qt = 4,
        Wt = function () {
          var t = function (t) {
            Vt(n, t);
            var e = Ht(n);
            function n() {
              var t;
              return Tt(this, n),
              (t = e.apply(this, arguments)).states = new bt(Ft),
              t.scale = 1,
              t.focusDotIndex = 0,
              t
            }
            return Ct(n, [
              {
                key: 'isObjectData',
                value: function (t) {
                  return !!t && '[object Object]' === Object.prototype.toString.call(t)
                }
              },
              {
                key: 'isObjectArrayData',
                value: function (t) {
                  return !!t && Array.isArray(t) && t.length > 0 && 'object' === Dt(t[0])
                }
              },
              {
                key: 'onValueChanged',
                value: function () {
                  this.control && !this.states.has(Ft.Drag) && this.isNotSync && (this.control.setValue(this.value), this.syncValueByPos())
                }
              },
              {
                key: 'created',
                value: function () {
                  this.initControl()
                }
              },
              {
                key: 'mounted',
                value: function () {
                  this.bindEvent()
                }
              },
              {
                key: 'beforeDestroy',
                value: function () {
                  this.unbindEvent()
                }
              },
              {
                key: 'bindEvent',
                value: function () {
                  document.addEventListener('touchmove', this.dragMove, {
                    passive: !1
                  }),
                  document.addEventListener('touchend', this.dragEnd, {
                    passive: !1
                  }),
                  document.addEventListener('mousedown', this.blurHandle),
                  document.addEventListener('mousemove', this.dragMove),
                  document.addEventListener('mouseup', this.dragEnd),
                  document.addEventListener('mouseleave', this.dragEnd),
                  document.addEventListener('keydown', this.keydownHandle)
                }
              },
              {
                key: 'unbindEvent',
                value: function () {
                  document.removeEventListener('touchmove', this.dragMove),
                  document.removeEventListener('touchend', this.dragEnd),
                  document.removeEventListener('mousedown', this.blurHandle),
                  document.removeEventListener('mousemove', this.dragMove),
                  document.removeEventListener('mouseup', this.dragEnd),
                  document.removeEventListener('mouseleave', this.dragEnd),
                  document.removeEventListener('keydown', this.keydownHandle)
                }
              },
              {
                key: 'setScale',
                value: function () {
                  var t = new G(Math.floor(this.isHorizontal ? this.$refs.rail.offsetWidth : this.$refs.rail.offsetHeight));
                  void 0 !== this.zoom && t.multiply(this.zoom),
                  t.divide(100),
                  this.scale = t.toNumber()
                }
              },
              {
                key: 'initControl',
                value: function () {
                  var t = this;
                  this.control = new ht({
                    value: this.value,
                    data: this.sliderData,
                    enableCross: this.enableCross,
                    fixed: this.fixed,
                    max: this.max,
                    min: this.min,
                    interval: this.interval,
                    minRange: this.minRange,
                    maxRange: this.maxRange,
                    order: this.order,
                    marks: this.sliderMarks,
                    included: this.included,
                    process: this.process,
                    adsorb: this.adsorb,
                    dotOptions: this.dotOptions,
                    onError: this.emitError
                  }),
                  this.syncValueByPos(),
                  [
                    'data',
                    'enableCross',
                    'fixed',
                    'max',
                    'min',
                    'interval',
                    'minRange',
                    'maxRange',
                    'order',
                    'marks',
                    'process',
                    'adsorb',
                    'included',
                    'dotOptions'
                  ].forEach((function (e) {
                    t.$watch(e, (function (n) {
                      if ('data' === e && Array.isArray(t.control.data) && Array.isArray(n) && t.control.data.length === n.length && n.every((function (e, n) {
                        return e === t.control.data[n]
                      }))) return !1;
                      switch (e) {
                        case 'data':
                        case 'dataLabel':
                        case 'dataValue':
                          t.control.data = t.sliderData;
                          break;
                        case 'mark':
                          t.control.marks = t.sliderMarks;
                          break;
                        default:
                          t.control[e] = n
                      }
                      [
                        'data',
                        'max',
                        'min',
                        'interval'
                      ].indexOf(e) > - 1 && t.control.syncDotsPos()
                    }))
                  }))
                }
              },
              {
                key: 'syncValueByPos',
                value: function () {
                  var t = this.control.dotsValue;
                  this.isDiff(t, Array.isArray(this.value) ? this.value : [
                    this.value
                  ]) && this.$emit('change', 1 === t.length ? t[0] : St(t), this.focusDotIndex)
                }
              },
              {
                key: 'isDiff',
                value: function (t, e) {
                  return t.length !== e.length || t.some((function (t, n) {
                    return t !== e[n]
                  }))
                }
              },
              {
                key: 'emitError',
                value: function (t, e) {
                  this.silent || console.error('[VueSlider error]: '.concat(e)),
                  this.$emit('error', t, e)
                }
              },
              {
                key: 'dragStartOnProcess',
                value: function (t) {
                  if (this.dragOnClick) {
                    this.setScale();
                    var e = this.getPosByEvent(t),
                    n = this.control.getRecentDot(e);
                    if (this.dots[n].disabled) return;
                    this.dragStart(n),
                    this.control.setDotPos(e, this.focusDotIndex),
                    this.lazy || this.syncValueByPos()
                  }
                }
              },
              {
                key: 'dragStart',
                value: function (t) {
                  this.focusDotIndex = t,
                  this.setScale(),
                  this.states.add(Ft.Drag),
                  this.states.add(Ft.Focus),
                  this.$emit('drag-start', this.focusDotIndex)
                }
              },
              {
                key: 'dragMove',
                value: function (t) {
                  if (!this.states.has(Ft.Drag)) return !1;
                  t.preventDefault();
                  var e = this.getPosByEvent(t);
                  this.isCrossDot(e),
                  this.control.setDotPos(e, this.focusDotIndex),
                  this.lazy || this.syncValueByPos();
                  var n = this.control.dotsValue;
                  this.$emit('dragging', 1 === n.length ? n[0] : St(n), this.focusDotIndex)
                }
              },
              {
                key: 'isCrossDot',
                value: function (t) {
                  if (this.canSort) {
                    var e = this.focusDotIndex,
                    n = t;
                    if (n > this.dragRange[1] ? (n = this.dragRange[1], this.focusDotIndex++) : n < this.dragRange[0] && (n = this.dragRange[0], this.focusDotIndex--), e !== this.focusDotIndex) {
                      var r = this.$refs['dot-'.concat(this.focusDotIndex)];
                      r && r.$el && r.$el.focus(),
                      this.control.setDotPos(n, e)
                    }
                  }
                }
              },
              {
                key: 'dragEnd',
                value: function (t) {
                  var e = this;
                  if (!this.states.has(Ft.Drag)) return !1;
                  setTimeout((function () {
                    e.lazy && e.syncValueByPos(),
                    e.included && e.isNotSync ? e.control.setValue(e.value) : e.control.syncDotsPos(),
                    e.states.delete(Ft.Drag),
                    e.useKeyboard && !('targetTouches' in t) || e.states.delete(Ft.Focus),
                    e.$emit('drag-end', e.focusDotIndex)
                  }))
                }
              },
              {
                key: 'blurHandle',
                value: function (t) {
                  if (!this.states.has(Ft.Focus) || !this.$refs.container || this.$refs.container.contains(t.target)) return !1;
                  this.states.delete(Ft.Focus)
                }
              },
              {
                key: 'clickHandle',
                value: function (t) {
                  if (!this.clickable || this.disabled) return !1;
                  if (!this.states.has(Ft.Drag)) {
                    this.setScale();
                    var e = this.getPosByEvent(t);
                    this.setValueByPos(e)
                  }
                }
              },
              {
                key: 'focus',
                value: function () {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                  this.states.add(Ft.Focus),
                  this.focusDotIndex = t
                }
              },
              {
                key: 'blur',
                value: function () {
                  this.states.delete(Ft.Focus)
                }
              },
              {
                key: 'getValue',
                value: function () {
                  var t = this.control.dotsValue;
                  return 1 === t.length ? t[0] : t
                }
              },
              {
                key: 'getIndex',
                value: function () {
                  var t = this.control.dotsIndex;
                  return 1 === t.length ? t[0] : t
                }
              },
              {
                key: 'setValue',
                value: function (t) {
                  this.control.setValue(Array.isArray(t) ? St(t) : [
                    t
                  ]),
                  this.syncValueByPos()
                }
              },
              {
                key: 'setIndex',
                value: function (t) {
                  var e = this,
                  n = Array.isArray(t) ? t.map((function (t) {
                    return e.control.getValueByIndex(t)
                  })) : this.control.getValueByIndex(t);
                  this.setValue(n)
                }
              },
              {
                key: 'setValueByPos',
                value: function (t) {
                  var e = this,
                  n = this.control.getRecentDot(t);
                  if (this.disabled || this.dots[n].disabled) return !1;
                  this.focusDotIndex = n,
                  this.control.setDotPos(t, n),
                  this.syncValueByPos(),
                  this.useKeyboard && this.states.add(Ft.Focus),
                  setTimeout((function () {
                    e.included && e.isNotSync ? e.control.setValue(e.value) : e.control.syncDotsPos()
                  }))
                }
              },
              {
                key: 'keydownHandle',
                value: function (t) {
                  var e = this;
                  if (!this.useKeyboard || !this.states.has(Ft.Focus)) return !1;
                  var n = this.included && this.marks,
                  r = Q(t, {
                    direction: this.direction,
                    max: n ? this.control.markList.length - 1 : this.control.total,
                    min: 0,
                    hook: this.keydownHook
                  });
                  if (r) {
                    t.preventDefault();
                    var o = - 1,
                    i = 0;
                    n ? (this.control.markList.some((function (t, n) {
                      return t.value === e.control.dotsValue[e.focusDotIndex] && (o = r(n), !0)
                    })), o < 0 ? o = 0 : o > this.control.markList.length - 1 && (o = this.control.markList.length - 1), i = this.control.markList[o].pos) : (o = r(this.control.getIndexByValue(this.control.dotsValue[this.focusDotIndex])), i = this.control.parseValue(this.control.getValueByIndex(o))),
                    this.isCrossDot(i),
                    this.control.setDotPos(i, this.focusDotIndex),
                    this.syncValueByPos()
                  }
                }
              },
              {
                key: 'getPosByEvent',
                value: function (t) {
                  return F(t, this.$refs.rail, this.isReverse) [this.isHorizontal ? 'x' : 'y'] / this.scale
                }
              },
              {
                key: 'renderSlot',
                value: function (t, e, n, r) {
                  var o = this.$createElement,
                  i = this.$scopedSlots[t];
                  return i ? r ? i(e) : o('template', {
                    slot: t
                  }, [
                    i(e)
                  ]) : n
                }
              },
              {
                key: 'render',
                value: function () {
                  var t = this,
                  e = arguments[0];
                  return e('div', s() ([{
                    ref: 'container',
                    class : this.containerClasses,
                    style: this.containerStyles,
                    on: {
                      click: this.clickHandle,
                      touchstart: this.dragStartOnProcess,
                      mousedown: this.dragStartOnProcess
                    }
                  },
                  this.$attrs]), [
                    e('div', {
                      ref: 'rail',
                      class : 'vue-slider-rail',
                      style: this.railStyle
                    }, [
                      this.processArray.map((function (n, r) {
                        return t.renderSlot('process', n, e('div', {
                          class : 'vue-slider-process',
                          key: 'process-'.concat(r),
                          style: n.style
                        }), !0)
                      })),
                      this.sliderMarks ? e('div', {
                        class : 'vue-slider-marks'
                      }, [
                        this.control.markList.map((function (n, r) {
                          var o;
                          return t.renderSlot('mark', n, e('vue-slider-mark', {
                            key: 'mark-'.concat(r),
                            attrs: {
                              mark: n,
                              hideLabel: t.hideLabel,
                              stepStyle: t.stepStyle,
                              stepActiveStyle: t.stepActiveStyle,
                              labelStyle: t.labelStyle,
                              labelActiveStyle: t.labelActiveStyle
                            },
                            style: (o = {
                            }, _t(o, t.isHorizontal ? 'height' : 'width', '100%'), _t(o, t.isHorizontal ? 'width' : 'height', t.tailSize), _t(o, t.mainDirection, ''.concat(n.pos, '%')), o),
                            on: {
                              pressLabel: function (e) {
                                return t.clickable && t.setValueByPos(e)
                              }
                            }
                          }, [
                            t.renderSlot('step', n, null),
                            t.renderSlot('label', n, null)
                          ]), !0)
                        }))
                      ]) : null,
                      this.dots.map((function (n, r) {
                        var o;
                        return e('vue-slider-dot', {
                          ref: 'dot-'.concat(r),
                          key: 'dot-'.concat(r),
                          attrs: kt({
                            value: n.value,
                            disabled: n.disabled,
                            focus: n.focus,
                            'dot-style': [
                              n.style,
                              n.disabled ? n.disabledStyle : null,
                              n.focus ? n.focusStyle : null
                            ],
                            tooltip: n.tooltip || t.tooltip,
                            'tooltip-style': [
                              t.tooltipStyle,
                              n.tooltipStyle,
                              n.disabled ? n.tooltipDisabledStyle : null,
                              n.focus ? n.tooltipFocusStyle : null
                            ],
                            'tooltip-formatter': Array.isArray(t.sliderTooltipFormatter) ? t.sliderTooltipFormatter[r] : t.sliderTooltipFormatter,
                            'tooltip-placement': t.tooltipDirections[r],
                            role: 'slider',
                            'aria-valuenow': n.value,
                            'aria-valuemin': t.min,
                            'aria-valuemax': t.max,
                            'aria-orientation': t.isHorizontal ? 'horizontal' : 'vertical',
                            tabindex: '0'
                          }, t.dotAttrs),
                          style: [
                            t.dotBaseStyle,
                            (o = {
                            }, _t(o, t.mainDirection, ''.concat(n.pos, '%')), _t(o, 'transition', ''.concat(t.mainDirection, ' ').concat(t.animateTime, 's')), o)
                          ],
                          on: {
                            'drag-start': function () {
                              return t.dragStart(r)
                            }
                          },
                          nativeOn: {
                            focus: function () {
                              return !n.disabled && t.focus(r)
                            },
                            blur: function () {
                              return t.blur()
                            }
                          }
                        }, [
                          t.renderSlot('dot', n, null),
                          t.renderSlot('tooltip', n, null)
                        ])
                      })),
                      this.renderSlot('default', {
                        value: this.getValue()
                      }, null, !0)
                    ])
                  ])
                }
              },
              {
                key: 'tailSize',
                get: function () {
                  return U((this.isHorizontal ? this.height : this.width) || Qt)
                }
              },
              {
                key: 'containerClasses',
                get: function () {
                  return ['vue-slider',
                  [
                    'vue-slider-'.concat(this.direction)
                  ],
                  {
                    'vue-slider-disabled': this.disabled
                  }
                  ]
                }
              },
              {
                key: 'containerStyles',
                get: function () {
                  var t = yt(Array.isArray(this.dotSize) ? this.dotSize : [
                    this.dotSize,
                    this.dotSize
                  ], 2),
                  e = t[0],
                  n = t[1],
                  r = this.width ? U(this.width) : this.isHorizontal ? 'auto' : U(Qt),
                  i = this.height ? U(this.height) : this.isHorizontal ? U(Qt) : 'auto';
                  return {
                    padding: this.contained ? ''.concat(n / 2, 'px ').concat(e / 2, 'px') : this.isHorizontal ? ''.concat(n / 2, 'px 0') : '0 '.concat(e / 2, 'px'),
                    width: r,
                    height: i
                  }
                }
              },
              {
                key: 'processArray',
                get: function () {
                  var t = this;
                  return this.control.processArray.map((function (e, n) {
                    var r,
                    o = yt(e, 3),
                    i = o[0],
                    a = o[1],
                    s = o[2];
                    if (i > a) {
                      var u = [
                        a,
                        i
                      ];
                      i = u[0],
                      a = u[1]
                    }
                    var l = t.isHorizontal ? 'width' : 'height';
                    return {
                      start: i,
                      end: a,
                      index: n,
                      style: kt(kt((r = {
                      }, _t(r, t.isHorizontal ? 'height' : 'width', '100%'), _t(r, t.isHorizontal ? 'top' : 'left', 0), _t(r, t.mainDirection, ''.concat(i, '%')), _t(r, l, ''.concat(a - i, '%')), _t(r, 'transitionProperty', ''.concat(l, ',').concat(t.mainDirection)), _t(r, 'transitionDuration', ''.concat(t.animateTime, 's')), r), t.processStyle), s)
                    }
                  }))
                }
              },
              {
                key: 'dotBaseStyle',
                get: function () {
                  var t,
                  e = yt(Array.isArray(this.dotSize) ? this.dotSize : [
                    this.dotSize,
                    this.dotSize
                  ], 2),
                  n = e[0],
                  r = e[1];
                  return t = this.isHorizontal ? _t({
                    transform: 'translate('.concat(this.isReverse ? '50%' : '-50%', ', -50%)'),
                    WebkitTransform: 'translate('.concat(this.isReverse ? '50%' : '-50%', ', -50%)'),
                    top: '50%'
                  }, 'ltr' === this.direction ? 'left' : 'right', '0') : _t({
                    transform: 'translate(-50%, '.concat(this.isReverse ? '50%' : '-50%', ')'),
                    WebkitTransform: 'translate(-50%, '.concat(this.isReverse ? '50%' : '-50%', ')'),
                    left: '50%'
                  }, 'btt' === this.direction ? 'bottom' : 'top', '0'),
                  kt({
                    width: ''.concat(n, 'px'),
                    height: ''.concat(r, 'px')
                  }, t)
                }
              },
              {
                key: 'mainDirection',
                get: function () {
                  switch (this.direction) {
                    case 'ltr':
                      return 'left';
                    case 'rtl':
                      return 'right';
                    case 'btt':
                      return 'bottom';
                    case 'ttb':
                      return 'top'
                  }
                }
              },
              {
                key: 'isHorizontal',
                get: function () {
                  return 'ltr' === this.direction || 'rtl' === this.direction
                }
              },
              {
                key: 'isReverse',
                get: function () {
                  return 'rtl' === this.direction || 'btt' === this.direction
                }
              },
              {
                key: 'tooltipDirections',
                get: function () {
                  var t = this.tooltipPlacement || (this.isHorizontal ? 'top' : 'left');
                  return Array.isArray(t) ? t : this.dots.map((function () {
                    return t
                  }))
                }
              },
              {
                key: 'dots',
                get: function () {
                  var t = this;
                  return this.control.dotsPos.map((function (e, n) {
                    return kt({
                      pos: e,
                      index: n,
                      value: t.control.dotsValue[n],
                      focus: t.states.has(Ft.Focus) && t.focusDotIndex === n,
                      disabled: t.disabled,
                      style: t.dotStyle
                    }, (Array.isArray(t.dotOptions) ? t.dotOptions[n] : t.dotOptions) || {
                    })
                  }))
                }
              },
              {
                key: 'animateTime',
                get: function () {
                  return this.states.has(Ft.Drag) ? 0 : this.duration
                }
              },
              {
                key: 'canSort',
                get: function () {
                  return this.order && !this.minRange && !this.maxRange && !this.fixed && this.enableCross
                }
              },
              {
                key: 'sliderData',
                get: function () {
                  var t = this;
                  return this.isObjectArrayData(this.data) ? this.data.map((function (e) {
                    return e[t.dataValue]
                  })) : this.isObjectData(this.data) ? Object.keys(this.data) : this.data
                }
              },
              {
                key: 'sliderMarks',
                get: function () {
                  var t = this;
                  return this.marks ? this.marks : this.isObjectArrayData(this.data) ? function (e) {
                    var n = {
                      label: e
                    };
                    return t.data.some((function (r) {
                      return r[t.dataValue] === e && (n.label = r[t.dataLabel], !0)
                    })),
                    n
                  }
                   : this.isObjectData(this.data) ? this.data : void 0
                }
              },
              {
                key: 'sliderTooltipFormatter',
                get: function () {
                  var t = this;
                  if (this.tooltipFormatter) return this.tooltipFormatter;
                  if (this.isObjectArrayData(this.data)) return function (e) {
                    var n = '' + e;
                    return t.data.some((function (r) {
                      return r[t.dataValue] === e && (n = r[t.dataLabel], !0)
                    })),
                    n
                  };
                  if (this.isObjectData(this.data)) {
                    var e = this.data;
                    return function (t) {
                      return e[t]
                    }
                  }
                }
              },
              {
                key: 'isNotSync',
                get: function () {
                  var t = this.control.dotsValue;
                  return Array.isArray(this.value) ? this.value.length !== t.length || this.value.some((function (e, n) {
                    return e !== t[n]
                  })) : this.value !== t[0]
                }
              },
              {
                key: 'dragRange',
                get: function () {
                  var t = this.dots[this.focusDotIndex - 1],
                  e = this.dots[this.focusDotIndex + 1];
                  return [t ? t.pos : - 1 / 0,
                  e ? e.pos : 1 / 0]
                }
              }
            ]),
            n
          }(d.a);
          return u([h('change', {
          default:
            0
          })], t.prototype, 'value', void 0),
          u([p({
            type: Boolean,
          default:
            !1
          })], t.prototype, 'silent', void 0),
          u([p({
          default:
            'ltr',
            validator: function (t) {
              return ['ltr',
              'rtl',
              'ttb',
              'btt'].indexOf(t) > - 1
            }
          })], t.prototype, 'direction', void 0),
          u([p({
            type: [
              Number,
              String
            ]
          })], t.prototype, 'width', void 0),
          u([p({
            type: [
              Number,
              String
            ]
          })], t.prototype, 'height', void 0),
          u([p({
          default:
            14
          })], t.prototype, 'dotSize', void 0),
          u([p({
          default:
            !1
          })], t.prototype, 'contained', void 0),
          u([p({
            type: Number,
          default:
            0
          })], t.prototype, 'min', void 0),
          u([p({
            type: Number,
          default:
            100
          })], t.prototype, 'max', void 0),
          u([p({
            type: Number,
          default:
            1
          })], t.prototype, 'interval', void 0),
          u([p({
            type: Boolean,
          default:
            !1
          })], t.prototype, 'disabled', void 0),
          u([p({
            type: Boolean,
          default:
            !0
          })], t.prototype, 'clickable', void 0),
          u([p({
            type: Boolean,
          default:
            !1
          })], t.prototype, 'dragOnClick', void 0),
          u([p({
            type: Number,
          default:
            0.5
          })], t.prototype, 'duration', void 0),
          u([p({
            type: [
              Object,
              Array
            ]
          })], t.prototype, 'data', void 0),
          u([p({
            type: String,
          default:
            'value'
          })], t.prototype, 'dataValue', void 0),
          u([p({
            type: String,
          default:
            'label'
          })], t.prototype, 'dataLabel', void 0),
          u([p({
            type: Boolean,
          default:
            !1
          })], t.prototype, 'lazy', void 0),
          u([p({
            type: String,
            validator: function (t) {
              return ['none',
              'always',
              'focus',
              'hover',
              'active'].indexOf(t) > - 1
            },
          default:
            'active'
          })], t.prototype, 'tooltip', void 0),
          u([p({
            type: [
              String,
              Array
            ],
            validator: function (t) {
              return (Array.isArray(t) ? t : [
                t
              ]).every((function (t) {
                return ['top',
                'right',
                'bottom',
                'left'].indexOf(t) > - 1
              }))
            }
          })], t.prototype, 'tooltipPlacement', void 0),
          u([p({
            type: [
              String,
              Array,
              Function
            ]
          })], t.prototype, 'tooltipFormatter', void 0),
          u([p({
            type: Boolean,
          default:
            !0
          })], t.prototype, 'useKeyboard', void 0),
          u([p(Function)], t.prototype, 'keydownHook', void 0),
          u([p({
            type: Boolean,
          default:
            !0
          })], t.prototype, 'enableCross', void 0),
          u([p({
            type: Boolean,
          default:
            !1
          })], t.prototype, 'fixed', void 0),
          u([p({
            type: Boolean,
          default:
            !0
          })], t.prototype, 'order', void 0),
          u([p(Number)], t.prototype, 'minRange', void 0),
          u([p(Number)], t.prototype, 'maxRange', void 0),
          u([p({
            type: [
              Boolean,
              Object,
              Array,
              Function
            ],
          default:
            !1
          })], t.prototype, 'marks', void 0),
          u([p({
            type: [
              Boolean,
              Function
            ],
          default:
            !0
          })], t.prototype, 'process', void 0),
          u([p({
            type: [
              Number
            ]
          })], t.prototype, 'zoom', void 0),
          u([p(Boolean)], t.prototype, 'included', void 0),
          u([p(Boolean)], t.prototype, 'adsorb', void 0),
          u([p(Boolean)], t.prototype, 'hideLabel', void 0),
          u([p()], t.prototype, 'dotOptions', void 0),
          u([p()], t.prototype, 'dotAttrs', void 0),
          u([p()], t.prototype, 'railStyle', void 0),
          u([p()], t.prototype, 'processStyle', void 0),
          u([p()], t.prototype, 'dotStyle', void 0),
          u([p()], t.prototype, 'tooltipStyle', void 0),
          u([p()], t.prototype, 'stepStyle', void 0),
          u([p()], t.prototype, 'stepActiveStyle', void 0),
          u([p()], t.prototype, 'labelStyle', void 0),
          u([p()], t.prototype, 'labelActiveStyle', void 0),
          u([m('value')], t.prototype, 'onValueChanged', null),
          t = u([f() ({
            data: function () {
              return {
                control: null
              }
            },
            components: {
              VueSliderDot: O,
              VueSliderMark: L
            }
          })], t)
        }();
        Wt.VueSliderMark = L,
        Wt.VueSliderDot = O;
        var Xt = Wt;
        e.default = Xt
      }
    }).default)
  },
  1589: function (t, e, n) {
    n(11).register({
      ico_moon_large: {
        width: 22,
        height: 22,
        viewBox: '0 0 22 22',
        data: '<mask id="svgicon_ico_moon_large_a" fill="#fff"><path pid="0" fill-rule="evenodd" clip-rule="evenodd" d="M13.953.4a8.25 8.25 0 107.3 14.594C19.652 19.095 15.665 22 11 22 4.925 22 0 17.075 0 11S4.925 0 11 0c1.023 0 2.013.14 2.953.4z"/></mask><path pid="1" d="M13.953.4l.308.952 3.16-1.025-3.2-.89-.268.964zm7.3 14.595l.93.363 1.209-3.098-2.716 1.918.576.817zM9.25 8.25a7.254 7.254 0 015.011-6.898L13.644-.55a9.254 9.254 0 00-6.394 8.8h2zm7.25 7.25a7.25 7.25 0 01-7.25-7.25h-2a9.25 9.25 0 009.25 9.25v-2zm4.175-1.322A7.212 7.212 0 0116.5 15.5v2a9.212 9.212 0 005.329-1.688l-1.154-1.634zm-.355.453A10.004 10.004 0 0111 21v2c5.092 0 9.44-3.17 11.184-7.642l-1.864-.727zM11 21C5.477 21 1 16.523 1 11h-2c0 6.627 5.373 12 12 12v-2zM1 11C1 5.477 5.477 1 11 1v-2C4.373-1-1 4.373-1 11h2zM11 1c.931 0 1.832.127 2.685.364l.535-1.927A12.01 12.01 0 0011-1v2z" _fill="#000" mask="url(#svgicon_ico_moon_large_a)"/>'
      }
    })
  },
  1590: function (t, e, n) {
    n(11).register({
      ico_sunrise: {
        width: 25,
        height: 18,
        viewBox: '0 0 25 18',
        data: '<g clip-path="url(#ashaskjghsdkajag)"><path pid="0" _fill="#000" _stroke="#000" stroke-width=".5" d="M12.25.25h.5v3.5h-.5zm8.735 3.41l.354.354-2.475 2.475-.354-.353zm-17.324.355l.354-.354L6.49 6.136l-.354.354zM24.75 12.25v.5h-3.5v-.5zm-21 0v.5H.25v-.5z"/><path pid="1" _fill="#fff" _stroke="#000" stroke-width=".5" d="M.25 17.25h24.5v.5H.25z"/><path pid="2" fill-rule="evenodd" clip-rule="evenodd" d="M15.663 17a5.5 5.5 0 10-6.326 0H7.81a6.5 6.5 0 119.38 0h-1.527z" _fill="#000"/></g><defs><clipPath id="ashaskjghsdkajag"><path pid="3" d="M0 0h25v18H0V0z" _fill="#fff"/></clipPath></defs>'
      }
    })
  },
  1591: function (t, e, n) {
    n(11).register({
      ico_podcast: {
        width: 56,
        height: 56,
        viewBox: '0 0 56 56',
        data: '<path pid="0" _fill="url(#pattern0)" d="M0 0h56v56H0z"/><defs><pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0" transform="scale(.00595)"/></pattern><image id="image0" width="168" height="168" xlink:href="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wgARCACoAKgDAREAAhEBAxEB/8QAGwAAAQUBAQAAAAAAAAAAAAAAAAIDBAUGAQf/xAAbAQABBQEBAAAAAAAAAAAAAAAAAgMEBQYBB//aAAwDAQACEAMQAAAB9Cj5RA2AAAAAAAAAAAAAAAAAAAscQNgAAAAAAAAAAAAAAAAABxY6gb8+XZRhfpSKrDLsKvrzvEyRMPq60d0/IlZ16RxGQVO9vaz4Fe/YWMWFLy2gVEkRdvmEDdV17xF2/wDTW6nS8iUHZN3xi04z4g7oPWm6XoWvGfInLrZpg6pMOlmXOWstTb0CtzgYCkch+hY9HG6pT1N1/wA7XZ+gorVHNemF5i5bWnGd0ivAxip2cVK9WbpwMdbbGvVbPVszQ5+DqctXQ/Q8fKpLqo5JzV9S6RMXwd7ReqN08sRhK/S+x9zePn9u+MeOOXnuLWeoeybQbxd5u3K2wWypxCdzhqfu2xljk9dhJ3aG9pfRFUtN19s7lYV7NrpznW6q/prAaruuzuN0/XvRVx8fYbd6tmLSlxKLeoi6aXjJua0qeFPoKrlnQupQc7ZYzYdac5wh6XOM2taAABn51/RJ2Dkda0odQh5trc1mXgRrnCat+FMVyZXbWmzt1Tk7K6fgCREyJA1+UDoAGSn7ODF0DiUuIQ6hqQ03btVmF0MwHFJW3MiKca9EwkW3z8o4Q5TkqI3D1mWbnwwEisPJ9L6064lDrbbzbchpnK6FtXFqS51KuqEyWJdbN12XhwJj2evJz7KdDV01rYYhQmvhabK2WtWlDqEOttyGmpDTOR0fVcWpK1JX3i1cUcUpKu8V06c6c7aOZvUUtDn0bOptZTiEuobfaafaakss5PRutqcUlauK44lEuLa0U3b46vgzHsjp7Kxr2dBCzr9zlA7EYucpJ27iG32232mpDTMlhq1REwOjt4zzneLbnwpXIvoOGrJ+ftDnDhwIO0ySJTAAGPf9CVFkPtNPtNSWWZLDN0un7TXeP0sukuXXplNr6nMTa9c7H6s5w4M2VfD1mbAAAzk3TR63QyGmpDLMlhqSwzYWubm5LUc4Rb6ijXNOABPxWtXGf5wha/Lt2EMAACqlWtZH08qvXIZZlMMyYzT2kys7H6vrLlfscgl1sACTn7uTQ3LU+DC1+YDoAAEZyRQS9LPz86Sw1JjszKvidplHamxOdj29SAAB1pcrO3sbQUiX2gAAAAM7ZaKXSTplYqVFbm0Dkb0XIoGwAAAAAAAAAAAAAKuXacRJn5eynUvXYC4vpOQQNgAAAAAAAAAAAAAMuPQ5E2xzcidj7g4RfScggbAAAAAAAAAAAAAAAAOD1BbKhSP/xAAqEAABBAEDAwMEAwEAAAAAAAACAQMEBQAGEBESIDITITUUFTBAIiMxM//aAAgBAQABBQI/P9Q/P9Q/PL1m4YHTF4T55eMWrY6e+7zw1o48L4V2oFGwZuIUXTkm3sJ2szUKeFD1A/GdhXTTVdOuZ01P8xJsdSH+WCCJiii4fnlv8Wda4lPpi4SczZ+9do/4OTAZkTVVES7mO3VnVQW6+HZQGbBrNXWayHtN1iV0PLV3pZyBJKOQEhDh+eW/xelBE9PXlc9Tzolm3ZUuj/gs1ha9KaTqvpI+2qLX6GLo+r6l2sj65SbVMjpLD82B9tQIiU+j15opcdqVHnR5VNP0f8Ff2Q10PSVUVhLMelb+zchnZTGoMStjP3tsAiAX9h9ur4zhrBJeok2T2yG76zB/9E9kvq+6nnW1F3XLlvXtWMSihuQK2207ZWM2NV6kjMuV+qDSBQTgtdRVE6zkQqe9htrC1KuO6etJL9gXRETdMrnfTeFOX8X2yTLipjbjbibJ7Js6nBdlwXsmyYmJjafznzmooyZb8ksbMmzgS0kC0nJbuJyPZYl1y9kxMHLOxGPhERFsuNkQHWSBkNbfVRupFQkcTgtiXpEl6ixMTExO3jEHGjJo41o0SWFh6iY0640rNihIJISZZH6cbExMTEwfyxY8nmP1DlqDiP4mJiYmCmOtm05uu0KMck40VlhLCCLqek51MV8hzGojMdNpg9cZMTExMFMFMmRW5YSY7kdzZf8AYzJPuQgFpvsJeV3Meh1MHBwUwUwF/sfZbfCVVugptuBkeI86sdkGGwXgt3V4HssB4kJiYKYKYKZzw9s8vYK8js4vJdliPIN4OCmCmCmH5ivI4q8ruyuzi8J2yR6mAwUwUwUxtMPzaLjHD57UXhfUThV5XuUeCbwUwUxMPz/PIH+wMHATY/P87o9QimMpufn+kh4ppn//xAAvEQABAwIFAgYBAwUAAAAAAAABAAIDBBEFEBITMSEzICJBUWFxQCMy8BQwUpGh/9oACAEDAQE/AZe477/Fl7jvv8WXuO+8qV9O+zHN6qtog0a48qV8DrMc1VexF5AzqsNa0tfq4RnpfRiifTyu0tjVZHBCz9vVYaLzKSWla62hNmp3GwjU0NPEzU5uQF+gRwuqDb6U2N7naAOqp8OjjF39SpaWKRtiFL3HfeVP3WoVA3jE5VtJtHU3hQ9xqxDvlMncxhYPXKmhbSxanqeYzP1FQzuhN25UFNoG65VlTvP6cZYLT65TIfTI0THee3mRBBscpe477yp+61VxtUEqmqG1LNLuVJTGCYeyxDvnLD6W/wCq5V9TuO0N4GdDTbrtR4CxCpt+k3PCotumHz1UTNRyq4rjWMpe477WFU4Dd0qppA9wkbyFiHfKjkMbtTVG9lSy6xDvlUlOZ3/CEYIt6KspTTv+FS0wkDnP4ChiMr9IU0jaSKzUTc3KpIN6S3ojHeXQ33TWhrQ0KNuluRUrNDrKQXlIHuo2CNgaPREEqufAH6Xt65U85hfqCqpRLJqCoGDYBCsVJCJBZ3VTVse2Y2Cyo6qKBvUdVJV00pu5pW9R/wCH8/2m18DG2Y1YXHuVLfhRNu7MqobqaqSPXV/ROeJ0j5LPaE+N7P3DIC5sombbA3PE4dEuoevhwKPq56ibpbkUUSsNj88j/lBt01tk5uoWT42vGlwVbRGnNxwsOi3Jx8eCtg3oSPXw4HBaAH365lEolUsOhlkEEFKyzk5ge3S5UtD/AEtz757MnNkRZV8G1L8HNjS9waPVU8IhjDBkUUSicgggnM1CybA6/VaARZPpXD9qgptPV2TmNfysRwnfj/T5T43RnS4WOWCYcde9JkUUSiUTkEP7WKYhRHyuGo/z1UFTStffbt/1UcjHx+XIoolEolDrkEFI/SE1xBunTNa26kmc/lQVOjo7ha22vdPq428dVi+JP0aB654PXGCYMdwUUUSiUSiVQzktPwSmEO4QykdqcqmobTs1OVBWOnLg/wAHCqZt6Qu8FFUb0IciiUSiUSsOktM9ia4t4TJweU+Robe6qK+GEc3Kqal9Q/U5UUu3MD4MSm24tI5Phwee0VvZEolEolEqCTbqr/OeLS3cI/BTSbsQdnXT7sp9h4cKks8tUElxZEolEoqXuO+1Ty7sQenODBqKlkMry8+vgwmbmM5V9Tsx2HJ8VI/RM0pkmh10SiUSmqXuO+1h1Y2LyP4VfXCUaI+PDFIYnhzUcVi03t1U0zpnaneMP1NDlBLqbZEoodFL3Hff4FJJeO3smS7brq900euUvcd9/gQSaHJzlRVTSdt2cvcd9/h0+Jlo0yKXFIw3ycr/xAAuEQABAwMDAwIFBAMAAAAAAAABAAIDBBESBRAxEyAhIkEyQFFhcRQjsfAwQoH/2gAIAQIBAT8BPyp+VOwsnN2Fk6wTFdqFinWCYiWrwiANzTSW4UjxE0ueqvVZZTZngKGtmhdkHI7DlX82Tm2QT+VfYCwRN0DbZo90432o48nZfTbV6cVjcRyE9jmOLXc7HYJ3KBurWKfzswe6cd2i6efbelbjGp34t21mjzb1m8jnYrUpyXdMLTqktf0zwU/nblP5TRdalXdAYM+JUVWKhn3QCAuj6Rs0XVrmyAsLKZ+btj58FV9N+mmLfb2TjbyVI/NxcVSVFNCA5zTkop2TszGwNk43Km1OGB2BBUlXQSOycw3/AL91DXUULrsYR/fyswR4TSAiQVdqyCpm3kCnfi3crVabrQ3HIVfJhCdrX4WlQVHlpabJzHM+IbE2F1NJ1Hl2+lT9SLA+3bRN5Knfk7corVX+QxUWnyVRvw36qnooaYegJrsTdOaHixVRTmI3HC1KXpwH79lDUdGYH27WHpw/ncoolR6eauYyyfD/ACmtDBi3eF12pzQ4WK1+N8cgH+u/6GpxywKc0tNitOqOtCL8jflSOvsUUSie1j8TdOnbbwpo2zNLX+VU6JI03h8hafpXSPUm52mgjmFni6ZpxpZM4T49wiLbR1HXnwZw3ncolEpx/wAubQLO8rUoZZm/s+PstIezpGMCxHOxRRKJTimSNkGTeyJmRRaCLKuq2UY9XKqa6aoPqK07VHQnCT4f4XXjxyyFlUavTxfCciqWomrpMneGj23MH7olbzsUSiU4pxUtTJQ1RLeD7Knqo6lmTN424tUsojbcrXGl7xMfx2cqkg6EQZ2TN4cPdFEolOKcVq8fpD1DO+B2TCqbWon+JfBUEkcrvSbqSoYxSyukNyq6LqwOHZpVP1ZsjwO2IdSLFORKcU4pxVbH1IXDfSIbNMnZVRdKZzd9Np+jAL8ntpXeSFWMxdl9USnFOKe6yKqYulKWJrS92IUMYiYGD27Nag4lH4202l68tzwO6I2eFUM6jLJxTinFVsthiEVqNG6X1s5Wn0BiPUk57ZomysLHIaNNna/hU8DIGYN7wbi6ro8H3+qcVI8NFypHl7sij8hC702VTF1WYp/jwqyfI4DY/IRuxKJWtROx6kX/AHc/J1miB5yhNvsoNCmLv3fAX//EAD4QAAECAwQGBgYJBQEAAAAAAAECAwAEERASIVEFEyAxQXEiMDJhgbEUIzNAUnMVJEJicpGhwfA1Y4KSwuL/2gAIAQEABj8CVz91Vz91Vzsem5fSBLQNdXTsiPRJ1dXD7NZ491j83LaRIbT0tXTcIE05pFSWgul2naiQEupSXLyrt3wgFelgk5Uhcw9pkXU9285Qms2vUtmrlfKMDQl0fvCHVaT1d4VAOJhTrmm0pQkVJpCZZmdcxPapuGcZ2UvxhjGNiudk18pUMaTZJIxv/dx3x6O+frKB/uM4mPlmG/xK84Ym3Cu+x2RwipNBCJaWqWwbrYz74TLt796jmYQ0+V3UrvdE77Po6WNUpPTp9pWUVWPXuYr7u6wNjeqzHFB3iApJqDYrnZNfKVDKVAFJvAg8zCZmWJDRVVtXwnKH1YB5LR1ifCGvxK87Do6XVifakeUelPJ9e6MPupt1LKvrDgw+6M4+kXx8oHztVknC3UqOB3WK5xeiaX/aMNdylecLYeTeQoQpAUaEEJVwWmGvxK84KhTXLwbH7wdITdVNIVXH7arJeXlrhmHV7lZQuYd3DcMzlCnnydXWrh7shAQgBKQKACC6mmtODYMNuvUCy2FLpnSCTx2Arjxg84pDjLE5Lok1U6B3+UatucltVeqpOJ/awsrwVvQrIwiWdUhSgTindvhcx6TL3NyAScB+UJZZ0lKobTuFP/MUOlZfww/5hqcnZlt24q8ekSe7hCS2+yllIwSqu+NXLT0shNa/zCP6nL/z/GErnJ1p0A41Urd+UK78Nmh7KoPOzGPborziqFhXLarsoR47Sz3xTtOcEx6xeGQ3WXkEgxRWDg/XqiPhw2lNM0U7xPwwVKNSeOwFJNCIruXxFt3XIrzioNdgk8IKjvJr1gWg0Iij/QVnwjVsVCeJzsq2spi6+KH4hFUkEWU+0v3O8glsZmPWLveEX1KvJPZ2y24m6obVE4Dico6CcczF9oAOecXdWquVI6Q1Y74wF5eZtUMsRtkKwUDgqLjg5HPYuJ8TlGqRuHUqRkdpY74uOJqIqz6xP6x0m1DmI7JSnMxdR4nPqr2Y2jztp1iVZHaVzitldinUKGzWFc4oYoNmvUkZbKufuFc9lXP3LG1XP3PGz//EACgQAQACAQMDBAIDAQEAAAAAAAEAESEQMUFRYXEggaHwQLGRweHx0f/aAAgBAQABPyH5z8X5z8X5zRO0KgPZ61M884Xm79NC6Zw6OjBkQYC0q/aW6y2ZvEjEIZyV8QW4MBnxDG8w14wKT28wjcBsey/qVzJh4OLxHRKXiH8RabcQrlWIEAtqy9YoCrQbzan3TEpRYHZJ1Awqknzmn3HSLgiCboYDttAQTcfRfWCj96hrvyJIWVpm8uIzMBavEGunnly/u0qsR+3sKkMQCxw2bZ0EIrfuMfuUhVC/DSzDLnxofy9gdyB0FYmnzmn3HSUF1hhJUA6TfrfuSHulei8jsz6Dq020PO2PvM7Ggf4vLrtQpI97y6Rxvg9w866V2P8AcNsIn9e7p85Nw3dptCS3+II+g+T/AHMTYk6dzvA2KYZGJ9B1R+FZ3P8AQhiUR9+CeI4lDqyiw27d1+GJ3w8nEJW6KbY4fqhqRAYAlxLpmLf+QtwgFBkYmRKthohLoRpNoPF8HvMh7/3DSOJjUKvHgu0fN8wecxij1q8caVHhscyeEequVuQjdvNOvGUKHeGjWIwtPL9IGh2Nqnd1VM0s+CcnAxGx2ALb7yRSHgqD2AySWzUYXjAw5hAgmSuF88TwBOiBaA6sZLpYQtK0ruvQy1DQdNe2H0+XqoaIQQQz3AJemYwPy9IwW6MQlWVChXyTHImT9iUPbPotjnj09JAQQghgli0L0P8AURu61bsNDTFTKsY8wH/v41SaMRXEOozwzqGwhbE3clCCCGGc2who2Il5jw9skIg9AWpdMnsui4i7MN9MBj3IXauR09ggduYQQQwwaGhDU9K7Be57Qcp64wzSOXTtCCCGHQXQjIw0IqINNzY+7+0DwXnmWMyLgwf7iLxfVuKD3Xf/ABATYe14159fjQQQw6gH9sFuf5G9PobDtCEVwd/8RKeVk8+m7dd8M7pR7QwQah70fuMTP/J4i5uxsJfDfdIL7wdSsX7FKl9GE5fTR8JGH0AZLv1zHv8ARUOvhD0+NSbIPQF85KKFAtlyufRue808u+rwVcwfSBvnIPSQhwc+lgE6ZvpGufU5KZZvKpkaFzUFFT5z8CvtpiwSst0+c/A23cyaHB7dfnPwa0qxFDG8/9oADAMBAAIAAwAAABDAAAAAAAAAAYAACACAAAAHC4GNF2dD9q4TasBSBwR3TaD5iED0BUvZv5uTsI9c2VLYBqeiL7d3AaIRn4ADl2W5H+u4EAPJUKpeS0+gbQuHlegu6pjiiI+tY143SUoLBxHcwWMgLpEMPU3NxgAJ62JktQlAAWWyk0ATv8ABNUvSoAYogAfkO4AADpAAAeEHAAAAAAADiBYAAAAAAAHcDAAAAAAAAPF//8QAJxEBAAECAwgDAQEAAAAAAAAAAQARMSFBURBhcYGRobHRIMHw4UD/2gAIAQMBAT8Q7x5/y948/wCXvHnYho6urKSsMz797FMfcKxu1CL6RAOS/ODaVf3GE8Y9t8W0FWB75QUrkP1H5qp0gavWKycN+kbxEBVZfVuEr0glGSkJBxrHA9yiqbwok7x52dwRe5qb6lo1Ox9t3qOnGJ2h4lIWl2sBWhEF676/Zx5ytxGNKqUx2Fmrbca/so1Kzb3sEjhbxdhtQKL7tGOgxNnePMBWhO6PMYC5TwRidmJrvgXdJR5+Z2h42VlHDL36mLH2P824O/c6e5TVOPrbXrfzW7U6zGWxGasF+GzvHmKRxcDh/WDdRCu8/kNE3HiBEokPotlok7Q8SiGy/rnMK7KSijFWfriStlSy1g7P7GsP3rHtiMlVlGdl4TWWg60JaQADlKMZxZSlGV/JlFvRR3lsIBMIHCKFJME7Z7B1jM1I/No0vGg0rrm6wPAZSaC8I9VrAGtmKBqsynuVoj+3wHNCpRyL9ZiLU9P7MebEYsUxQuSp1sjo+9pzamDwy/b47Rjjschdgh5AbcOsPPP41X5UPuXS7Fii2WJdR3WNAWSqwrqiXJOzpuZWDbF0t32spDZicT3b41OLn6HiLFi21izNV5tfEEEExosx8FRii8LB3GXG+0YxaRFRJU6GYfffbdBQHFmQ4B0IsUW2ggggh10dRZGqzCOVxkqs/SEMoaxkLGIPiu+NVBk4OykhbEPv1Fii+FQQQQIECBCENqyUtMvzSsrtuGrRyn7Gu+LFF8KmCpAgglquygjjDbzsRPFhpGVavhCwKcZeVW73A19HTp/drpY9OC/VYovjVblg8nDtBKwIEqDlF/KNWNxjc3FqHDDr8FBVj5blwy2ijUlSrofusfxqqzZq9GIVjDsLHYHWKq7gY9dJUHwMglT7LR4MduKmTyz9c/i1RmTk4+5UKnxqsR2qHmptplli8W3bztrS0HUzvntrY0D9x+O8sr0mJ7nj4VKd48wtSMeOfeOVwMZfIX7p8MDjj799dhImUfb+z+XFCnXCUXJ8KhVrO8eZVXosR0f7K8t513fG7EQVJbn9jVsXtu+Qo1IZmZWY2ueNklaQUUnePP8AgxDDjkziRUmY2d48/wCC8WdlVNwfr1t7x5/w1WDSGhqal+evGYIrvFDnP//EACgRAQABAwMCBgMBAQAAAAAAAAEAESExEEFhUXEggZGhscHR4fBA8f/aAAgBAgEBPxDJ/wAuT/lydG7JKVzRqyTCpKKNZwRNQICxBeAcQXggVU0BWhB1Q8FAzESvHl7v0SvU9RVHvMnTFKalMwxMjQGFNL0ysrEuNKZVKrSorHy0VvTA7Lzx06QkqCyRmTFAqy9NMzRi9Q3UrtDWuqzZa0V3byzGWLDofyDr5fHaMyYISxnvDq1wcOgKNSCHQqo5vd7H5ZUTY5PvsyvVYioRFA0qoWrdgAMEqqY2iwgQqMXcV+x/GIBcBWNnC1ioArfbyv04hyrR650rKwKhFbiZpT7SOlllipIYgr+LBLzLTglItOxry3mWLFilqt87bn35TkLb1/UYJUFWCpJXKlP79RyiHfQ2WCIvuroy+F/jt4b3kyr0wWixYo5bXLKaWM/Q6vxKQu9W6+coMUq1JnQvbhlAGbPXPtGMZW1us9n8N/DTXeqLFij0rfhaBvR9c77QKFAwEYsszkjAqjKB7MPLk7hTUYCl2+syhFHmX82H69tQqpBYGCxFii1ptFixYlNBVZQcaHMbJxKCetn+tKYA7TIcvV9tKAY5/MvUOyZp1HenR9YiomhVmt5dXYPlixYvAQsYsYx0XR1PT1089ojFRvVnzl2P2b16/wBiLFF4KKxan9bvxFixmXwSu5aM2/Ybv65jppnQsfvzgJVW+X9OPSVQKjepSDJwBj1x6VjrhbC7V60z01DEYPJ+RxFi8NBdHvux6+fMrD7m53jFlMN42/7Teku8rn36RYxgKoZYe/b93OuJQML5bxeGgrC2U9Ydpn54YadyyfkgKiOEYfmr0J/DyUxyFTuXlYxlpt3z2/Pl4RfcYiRo+GB6h0qeV4xlY97HYz7/ABqg2Y3SW3ZuRjKEG4+ePbw0usltY+XggMK4mTE6U27be0MDdaEwmD+9fAgk5fX49IxSHfeeh578eKvJVDnaUNT65Oe0yZTTqLJ1JQhwOnPfw4WGKqDn+oLGx7vV8VaXJReqW7j5b6DjERFuTJ/wVuCA+7bvGpWSXBsZ7xmT/gzuHQCy/m59+sXTJ/w1YglGPzJ3Y8nbtjtAdRu0ar2/c//EACkQAQACAQMDAwUBAQEBAAAAAAEAESExQVEQYXGBkfAgobHB0UAw4fH/2gAIAQEAAT8Q+S5f8vyXL/zBdP8Al8ly9HVeUkdEjQetSp1doJPHR3N9OLipgipALKG3VzL+sxVuGApXV66xGlQQvatd1hYeI5fFlX0lTEGdmg1L7ZdBl5VzszZyNa7FvEex3qHuCMBOFllpGpKct8xlRWwRawCDZMicDs25QjGwApVuaIbYCpaA5iAWDQkXrEOaVFieYYIO/oSgk4QyT5Ll6fFc5rdv1XYzgB4S98ZEclirZ27PUw0GqWP5cNRuX3n6jehRJJdClRBKTQiiBLUAyqxTadEb21F3sPMIwXBy2p22OAJUBBgBCwui0p7wAAAA0DaD3il1uoNai238IIVMOa6g8G/LfB0pRaJx192oQWS2fP6D+YGIWiIxnyXLAVoLZ8dzjDEuhRIm4kv/AGDUGbfxfuXFNEK5ueba406ttDSag+hTd17KN2YqAaeUydmBfQ5voFQWUyuOzs7s7ZZmoE7a3rWQ727HWjGxPIZ+5T0mcdCCa4lbfb8P589PkuWGMLwdhDAATuGn7gJbX+zIGCtvlsmwcjDzqHA1CaaNJs+j0bE1dfN0yjuX3aN43Ng5Zrzy2Xlo0unru3qgHWrrTrCNgrMMSnpuX7hfYt2jdgWkteNYU4BcutF0xg1AGwEBPHHRW1TcLPtHHx2UAgqgNmsW61blW2UpvvDGllCjUeYoE9CHX319YULKge6DpQBDMoAVlBwiVWFVMXPdJi+uIrCaHQmbbKU8Ph0TcjLDIAYUo0eJivELLoAOq0tqss5xgD6tjw9d17gylTkB9aVGLtdBgSRDedak3iniM71dI3VV0iYI869yBM9OlqhQDV0YLhEzCh3f5cv7SDpZo4UKL9Dc/XrMjMLeixj0q1SgmS1UFHmpQf8AVGnQIDVagi7Kj0xA3fX6aQP2EYPzPOMPUs5Kn8T3ZYkttM7uz7sYJblUOK39bjdptH1rha9Hkmo4x6D4WbS9JjNHrQmjPl9NJN9u3Vv3ftBDN7qICIYZuXXns23lyCy2ndggTO1hzKBqhsy+lGXZDYcqMcFsUKVIkB4vSAF/IJH2lzRuHVYqa3YLZ931BbhmSZpf08qRVbV3YIIEKp1mCFG7F/t/A8kFijL/AEhaeKfM0NQcQcBqH3e0CioGvC0xPk0YeMt2t7h5PaaEIBI9AZtLzg5X69YfoJ05owMwQIIIHQXpAqHUFmoon9/WoKHj4HpG16cUE1r973hlz0s/Xqidj/c5O5BAgmnaukag5lKMNNg/bwSgjsIV528EFGlpAOHju94kL6kIHxULCmuy7DPvU4bW7fBofnrfRQs4dXuX1LR65oYgAhpbrh57Jaka5HOX62gglw7aEDyjVDHIw+HUN26r36sWi3SPsu3jqgEBEpHeMheMve2H2rqOjNLpVN3Q90yWULwvK2YSrVGgvXDNpT1+QJXllkAHYcsDa3Keof5M1YWn1jxDnpgLs+m/00wYa90w/apfVdPQmhNLEMooQfVejLzbFvo5LTPmPSzR2D6aCM3Hsn/kF1dTo6U0mWIBmfNcs52TPneM2oC2NrBX9GNnP/06XgO0f36sQWlfpmCl26WlNCZLGDTzPkuWCL0mx4Zat5Ofp1EBjkEJ4+X7fUBAsSki6+X2MOF1Ok4AywTGhPkuX/Bixgn1MP6grdt5eDzMfZdO3T5Ll/waUt/6RloM8QxMPB6/Jcv+EA2APjowpXuawWFe4n//2Q=="/></defs>'
      }
    })
  },
  1594: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(351),
    header = n(330),
    o = n(340),
    l = n(352),
    d = n(267),
    c = (n(19), {
      name: 'DefaultLayout',
      components: {
        Header: header.default,
        PageHolder: r.default,
        Maxiboard: o.default,
        Skyscraper: l.default,
        FullNavigation: function () {
          return n.e(7).then(n.bind(null, 458))
        },
        FixedFooter: function () {
          return n.e(3).then(n.bind(null, 455))
        },
        Footer: function () {
          return n.e(3).then(n.bind(null, 456))
        },
        Tracking: function () {
          return n.e(3).then(n.bind(null, 602))
        },
        Bookmarks: function () {
          return n.e(3).then(n.bind(null, 595))
        },
        ReferralTracking: function () {
          return n.e(3).then(n.bind(null, 394))
        },
        ReactiveHelpers: function () {
          return Promise.resolve().then(n.bind(null, 19))
        },
        HeaderSearch: function () {
          return n.e(3).then(n.bind(null, 470))
        },
        WebAlert: function () {
          return n.e(3).then(n.bind(null, 485))
        },
        MaximizedPlayerOverlay: function () {
          return Promise.all([n.e(1),
          n.e(0)]).then(n.bind(null, 445))
        },
        SmartTeaser: function () {
          return n.e(7).then(n.bind(null, 480))
        },
        Comments: function () {
          return n.e(8).then(n.bind(null, 448))
        }
      },
      data: function () {
        return {
          paths: {
            skyscraperDisabled: [
              'mycompanion',
              'newestarticles',
              'webviewNewestarticles'
            ],
            maxiboardDisabled: [
              'mycompanion',
              'newestarticles',
              'webviewNewestarticles'
            ],
            maxiboardDisabledTop: [
              'wetter-path',
              'mycompanion',
              'newestarticles',
              'webviewNewestarticles'
            ]
          }
        }
      },
      computed: {
        isStartseite: function () {
          return this.$store.getters.isStartseite
        },
        commentsEnabled: function () {
          return this.$config.coralUrl && this.$store.getters.featureCoralEnabled && this.$store.state.commenting.active
        },
        hasSmartTeasers: function () {
          return !0
        },
        hasAudioPlayer: function () {
          return this.$store.getters.hasAudioPlayer
        },
        showSkyscraper: function () {
          return - 1 === this.$store.state.isrendition.indexOf('webview') && !this.paths.skyscraperDisabled.includes(this.$route.name)
        },
        hideMaxiboard: function () {
          return this.paths.maxiboardDisabled.includes(this.$route.name)
        },
        hideMaxiboardTop: function () {
          return this.paths.maxiboardDisabledTop.includes(this.$route.name)
        }
      },
      created: function () {
        0
      },
      mounted: function () {
        var t = this;
        window.performance.mark('js.layoutNuxt.done'),
        setTimeout((function () {
          t.$refs.layout.style.opacity = 1
        }), 100)
      },
      head: function () {
        return Object(d.a) (this.$config, this.$store.state)
      }
    }),
    f = (n(769), n(1057), n(1)),
    h = {
      extends : Object(f.a) (c, (function () {
        var t = this,
        e = t.$createElement,
        n = t._self._c || e;
        return n('div', {
          ref: 'layout',
          class : 'page--' + t.$route.name,
          staticStyle: {
            opacity: '1'
          },
          attrs: {
            'data-nzz-tid': t.$route.path
          }
        }, [
          n('Tracking'),
          t._v(' '),
          n('client-only', [
            n('ReferralTracking')
          ], 1),
          t._v(' '),
          n('client-only', [
            n('HeaderSearch')
          ], 1),
          t._v(' '),
          n('client-only', [
            n('FullNavigation')
          ], 1),
          t._v(' '),
          n('PageHolder', [
            t.hideMaxiboardTop ? t._e() : n('Maxiboard', {
              attrs: {
                top: ''
              }
            }),
            t._v(' '),
            t.showSkyscraper ? n('Skyscraper') : t._e(),
            t._v(' '),
            n('client-only', [
              n('WebAlert')
            ], 1),
            t._v(' '),
            n('div', {
              staticClass: 'nzz-container'
            }, [
              n('Header', [
                n('template', {
                  slot: 'headerBottom'
                })
              ], 2),
              t._v(' '),
              n('div', {
                staticClass: 'nzz-page-transition',
                attrs: {
                  id: 'page'
                }
              }, [
                t.isStartseite && t.hasSmartTeasers ? n('SmartTeaser') : t._e(),
                t._v(' '),
                t.hideMaxiboard ? t._e() : n('Maxiboard'),
                t._v(' '),
                n('nuxt', {
                  key: 'default'
                })
              ], 1)
            ], 1),
            t._v(' '),
            n('Footer'),
            t._v(' '),
            n('client-only', [
              t.commentsEnabled ? n('Comments') : t._e()
            ], 1),
            t._v(' '),
            n('client-only', [
              n('FixedFooter')
            ], 1),
            t._v(' '),
            n('client-only', [
              t.$store.getters.commentsOpen ? t._e() : n('ConversionElements', {
                key: 'defaultelements',
                attrs: {
                  filter: 'default',
                  'element-types': [
                    'semidisruptiveoverlays',
                    'apppaywall',
                    'sessionlimit'
                  ]
                }
              })
            ], 1),
            t._v(' '),
            n('client-only', [
              t.hasAudioPlayer ? n('MaximizedPlayerOverlay') : t._e()
            ], 1)
          ], 1),
          t._v(' '),
          n('client-only', [
            t.$store.state.features.myCompanion ? n('Bookmarks') : t._e()
          ], 1),
          t._v(' '),
          n('client-only', [
            n('ReactiveHelpers')
          ], 1)
        ], 1)
      }), [
      ], !1, null, null, null).exports,
      data: function () {
        return {
          paths: {
            skyscraperDisabled: [
              'mycompanion',
              'newestarticles',
              'webviewNewestarticles'
            ],
            maxiboardDisabled: [
              'mycompanion',
              'newestarticles',
              'webviewNewestarticles'
            ],
            maxiboardDisabledTop: [
              'mycompanion',
              'newestarticles',
              'webviewNewestarticles'
            ]
          }
        }
      },
      computed: {
        hideMaxiboard: function () {
          return !0
        }
      }
    },
    m = Object(f.a) (h, undefined, undefined, !1, null, null, null);
    e.default = m.exports
  },
  1595: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(7),
    o = n.n(r),
    l = n(266),
    d = n(340),
    c = n(267),
    f = {
      name: 'DefaultLayoutWebview',
      components: {
        Maxiboard: d.default,
        PageHolder: function () {
          return n.e(6).then(n.bind(null, 351))
        },
        Tracking: function () {
          return n.e(3).then(n.bind(null, 602))
        },
        Bookmarks: function () {
          return n.e(3).then(n.bind(null, 595))
        },
        ReferralTracking: function () {
          return n.e(3).then(n.bind(null, 394))
        },
        ReactiveHelpers: function () {
          return n.e(3).then(n.bind(null, 19))
        },
        SmartTeasers: function () {
          return n.e(7).then(n.bind(null, 429))
        },
        WebAlert: function () {
          return n.e(3).then(n.bind(null, 485))
        }
      },
      mounted: function () {
        window.performance.mark('js.layoutWebviewNuxt.done')
      },
      head: function () {
        return {
          link: Object(c.a) (this.$config, this.$store.state).link,
          script: o() (Object(l.a) ())
        }
      }
    },
    h = (n(769), n(800), n(1)),
    m = {
      extends : Object(h.a) (f, (function () {
        var t = this,
        e = t.$createElement,
        n = t._self._c || e;
        return n('div', {
          staticClass: 'app-data app-data--loading',
          class : [
            'page--' + t.$route.name
          ],
          attrs: {
            id: 'webview',
            'data-nzz-tid': t.$route.path
          }
        }, [
          n('Tracking'),
          t._v(' '),
          n('client-only', [
            n('ReferralTracking')
          ], 1),
          t._v(' '),
          n('PageHolder', [
            n('WebAlert'),
            t._v(' '),
            n('SmartTeasers'),
            t._v(' '),
            n('Maxiboard'),
            t._v(' '),
            n('div', {
              attrs: {
                id: 'page'
              }
            }, [
              n('nuxt', {
                key: 'webview'
              })
            ], 1)
          ], 1),
          t._v(' '),
          t.$store.state.features.myCompanion ? n('Bookmarks') : t._e(),
          t._v(' '),
          n('ReactiveHelpers')
        ], 1)
      }), [
      ], !1, null, null, null).exports
    },
    v = (n(345), Object(h.a) (m, undefined, undefined, !1, null, null, null));
    e.default = v.exports
  },
  1596: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(7),
    o = n.n(r),
    l = n(266),
    d = {
      name: 'DefaultLayoutWebview2',
      components: {
        Maxiboard: n(377).default,
        PageHolder: function () {
          return n.e(6).then(n.bind(null, 351))
        },
        Tracking: function () {
          return n.e(3).then(n.bind(null, 602))
        },
        Bookmarks: function () {
          return n.e(3).then(n.bind(null, 595))
        },
        ReferralTracking: function () {
          return n.e(3).then(n.bind(null, 394))
        },
        ReactiveHelpers: function () {
          return n.e(3).then(n.bind(null, 19))
        },
        SmartTeasers: function () {
          return n.e(7).then(n.bind(null, 438))
        },
        WebAlert: function () {
          return n.e(3).then(n.bind(null, 485))
        }
      },
      mounted: function () {
        window.performance.mark('js.layoutWebviewNuxt.done')
      },
      head: function () {
        return {
          script: o() (Object(l.a) ())
        }
      }
    },
    c = (n(769), n(800), n(1060), n(1)),
    f = {
      extends : Object(c.a) (d, (function () {
        var t = this,
        e = t.$createElement,
        n = t._self._c || e;
        return n('div', {
          staticClass: 'app-data app-data--loading',
          class : [
            'page--' + t.$route.name
          ],
          attrs: {
            id: 'webview',
            'data-nzz-tid': t.$route.path
          }
        }, [
          n('Tracking'),
          t._v(' '),
          n('client-only', [
            n('ReferralTracking')
          ], 1),
          t._v(' '),
          n('PageHolder', [
            n('WebAlert'),
            t._v(' '),
            n('SmartTeasers'),
            t._v(' '),
            n('Maxiboard'),
            t._v(' '),
            n('div', {
              staticClass: 'nzz-container',
              attrs: {
                id: 'page'
              }
            }, [
              n('nuxt', {
                key: 'webview2'
              })
            ], 1)
          ], 1),
          t._v(' '),
          t.$store.state.features.myCompanion ? n('Bookmarks') : t._e(),
          t._v(' '),
          n('ReactiveHelpers')
        ], 1)
      }), [
      ], !1, null, null, null).exports
    },
    h = (n(345), Object(c.a) (f, undefined, undefined, !1, null, null, null));
    e.default = h.exports
  },
  170: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(3),
    o = n.n(r),
    l = n(5),
    d = n.n(l),
    c = n(6),
    f = n.n(c),
    h = n(2),
    m = n.n(h),
    v = n(9),
    y = n.n(v),
    x = n(8);
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
    function A(t) {
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
    function z(component) {
      try {
        return component.data.content['nzz-feed'].articles
      } catch (t) {
        return
      }
    }
    var k = {
      name: 'WidgetPersonalized',
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
        }
      },
      data: function () {
        return {
          articles: z(this)
        }
      },
      computed: {
        feedUrl: function () {
          return this.data.content['nzz-feed'].params && this.data.content['nzz-feed'].params.url ? decodeURIComponent(this.data.content['nzz-feed'].params.url) : ''
        },
        feedUrlData: function () {
          var t = this.feedUrl.split('?'),
          e = f() (t, 2),
          n = e[0],
          r = e[1],
          o = void 0 === r ? '' : r;
          return {
            base: n.replace(/\/$/, ''),
            params: o.split('&').filter(Boolean).map((function (param) {
              return param.split('=')
            })).reduce((function (t, e) {
              var n = f() (e, 2),
              r = n[0],
              o = n[1];
              return t[r] = o,
              t
            }), {
            })
          }
        },
        sourceElement: function () {
          var source = [
            'Widget-Personalisiert'
          ];
          return this.data.content['nzz-feed'].params && this.data.content['nzz-feed'].params.name && source.push(this.data.content['nzz-feed'].params.name.replace(/\s+/g, '-')),
          source.join('-')
        }
      },
      mounted: function () {
        var t = this;
        return d() (m.a.mark((function e() {
          var n,
          base,
          r,
          o,
          l,
          d,
          data,
          c;
          return m.a.wrap((function (e) {
            for (; ; ) switch (e.prev = e.next) {
              case 0:
                if (t.articles || !t.feedUrlData.base) {
                  e.next = 17;
                  break
                }
                if (n = t.feedUrlData, base = n.base, r = n.params, o = 3, !base) {
                  e.next = 17;
                  break
                }
                return e.prev = 4,
                e.next = 7,
                y.a.request(A(A({
                }, Object(x.a) (t.$config.enricoBasicAuth)), {
                }, {
                  withCredentials: !0,
                  url: base,
                  params: A(A({
                  }, r), {
                  }, {
                    limit: parseInt(o, 10) + 1
                  })
                }));
              case 7:
                l = e.sent,
                d = l.data,
                c = (data = void 0 === d ? [
                ] : d).data ? data.data : data,
                t.articles = c.filter((function (e) {
                  return e.metadata.nzzId !== t.currentArticleId
                })).slice(0, o),
                e.next = 17;
                break;
              case 14:
                e.prev = 14,
                e.t0 = e.catch(4),
                console.log(e.t0);
              case 17:
              case 'end':
                return e.stop()
            }
          }), e, null, [
            [4,
            14]
          ])
        }))) ()
      }
    },
    _ = n(1),
    component = Object(_.a) (k, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.articles && 0 !== t.articles.length ? n('div', {
        staticClass: 'widget__row personalized',
        attrs: {
          'data-source-element-widget': t.sourceElement,
          'data-nzz-tid': 'widget-personalized'
        }
      }, t._l(t.articles, (function (t, e) {
        return n('div', {
          key: e,
          staticClass: 'widget--1of3'
        }, [
          n('SimpleArticle', {
            attrs: {
              data: {
                articles: [
                  t
                ]
              },
              size: '1of3'
            }
          })
        ], 1)
      })), 0) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  180: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(6),
    o = n.n(r),
    l = n(265),
    d = {
      name: 'ArticleAuthorBox',
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
        link: function () {
          var t;
          return (null === (t = this.data.content.link) || void 0 === t ? void 0 : t.href) || this.data.content.link
        },
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
        }
      }
    },
    c = (n(1303), n(1)),
    component = Object(c.a) (d, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.data.content.image || t.data.content.name ? n('div', {
        staticClass: 'authorbox',
        attrs: {
          'data-nzz-authorbox': ''
        }
      }, [
        t.data.content.image ? [
          n('figure', {
            staticClass: 'authorbox__poster'
          }, [
            n('div', {
              staticClass: 'authorbox__poster-wrapper'
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
                    alt: t.imageAlt,
                    'data-sizes': '0'
                  }
                })
              ], 1),
              t._v(' '),
              t.data.content.posterauthor ? n('div', {
                staticClass: 'authorbox__poster-description'
              }, [
                n('span', {
                  staticClass: 'authorbox__poster-author',
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
        t.data.content.name ? n('h3', {
          staticClass: 'authorbox__name',
          attrs: {
            'data-nzz-authorbox-name': t.data.content.name
          },
          domProps: {
            innerHTML: t._s(t.data.content.name)
          }
        }) : t._e(),
        t._v(' '),
        t.data.content.role ? n('div', {
          staticClass: 'authorbox__role',
          domProps: {
            innerHTML: t._s(t.data.content.role)
          }
        }) : t._e(),
        t._v(' '),
        t.link ? n('a', {
          staticClass: 'authorbox__link',
          attrs: {
            href: t.link,
            'data-nzz-tid': 'author-box-more',
            'data-nzz-referrer': 'authorBoxMore'
          }
        }, [
          n('span', [
            t._v('Weitere Artikel →')
          ])
        ]) : t._e()
      ], 2) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  187: function (t, e, n) {
    'use strict';
    n.r(e);
    function r(t, e) {
      var n;
      if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
        if (Array.isArray(t) || (n = function (t, e) {
          if (!t) return;
          if ('string' == typeof t) return o(t, e);
          var n = Object.prototype.toString.call(t).slice(8, - 1);
          'Object' === n && t.constructor && (n = t.constructor.name);
          if ('Map' === n || 'Set' === n) return Array.from(t);
          if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(t, e)
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
      var l,
      d = !0,
      c = !1;
      return {
        s: function () {
          n = t[Symbol.iterator]()
        },
        n: function () {
          var t = n.next();
          return d = t.done,
          t
        },
        e: function (t) {
          c = !0,
          l = t
        },
        f: function () {
          try {
            d || null == n.return || n.return()
          } finally {
            if (c) throw l
          }
        }
      }
    }
    function o(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
      return n
    }
    function l(t) {
      var script = document.createElement('script');
      return Array.from(t.attributes).forEach((function (t) {
        var e = t.name,
        n = t.value;
        return script.setAttribute(e, n)
      })),
      script.innerHTML = t.innerHTML,
      script
    }
    function d(t) {
      t && document.body.appendChild(t)
    }
    function c(t) {
      t && t.parentNode && t.parentNode.removeChild(t)
    }
    function f(t, e) {
      var n,
      o = r(t.children);
      try {
        for (o.s(); !(n = o.n()).done; ) {
          var d = n.value;
          f(d, e),
          'SCRIPT' === d.nodeName && (e.push(l(d)), t.removeChild(d))
        }
      } catch (t) {
        o.e(t)
      } finally {
        o.f()
      }
      return e
    }
    var h = {
      name: 'ArticleFreeHtml',
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
        fullwidth: function () {
          try {
            return 'widget--fullwidth' === this.data.styles['fullwidth-widget']
          } catch (t) {
            return !1
          }
        },
        contentHtml: function () {
          var t = this.data.content.datawrapper.html || this.data.content.datawrapper;
          return t && (t = t.replace(/<script(?:(?!>)[\s\S])*>([\s\S]*?)<\/script>/gi, '')),
          t
        },
        contentScripts: function () {
          var t = [
          ],
          e = this.data.content.datawrapper.html || this.data.content.datawrapper;
          if (e) {
            var n = document.createElement('div');
            n.innerHTML = e,
            f(n, t)
          }
          return t
        }
      },
      mounted: function () {
        this.contentScripts.forEach(d)
      },
      destroyed: function () {
        this.contentScripts.forEach(c)
      }
    },
    m = (n(1307), n(1)),
    component = Object(m.a) (h, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.contentHtml ? n('div', {
        staticClass: 'articlecomponent datawrapper',
        class : {
          'widget--fullwidth': t.fullwidth
        },
        domProps: {
          innerHTML: t._s(t.contentHtml)
        }
      }) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  197: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'PinterestEmbed',
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
    o = (n(1327), n(1)),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.data.content && t.data.content.pinterest ? n('div', {
        ref: 'pin',
        staticClass: 'articlecomponent articlecomponent--narrow pinterest'
      }, [
        n('div', {
          staticClass: 'social__container',
          domProps: {
            innerHTML: t._s(t.data.content.pinterest.html || t.data.content.pinterest)
          }
        })
      ]) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  200: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'ArticleQuote',
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
      },
      computed: {
        content: function () {
          return this.data.content.text
        }
      }
    },
    o = (n(1333), n(1)),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.data.content ? n('blockquote', {
        staticClass: 'articlecomponent quote',
        attrs: {
          'data-team-quote': ''
        },
        domProps: {
          innerHTML: t._s(t.content)
        }
      }) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  203: function (t, e, n) {
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
    o = (n(1337), n(1)),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.data.content.text ? n('div', {
        staticClass: 'source articlecomponent'
      }, [
        n('em', {
          staticClass: 'source__wrapper',
          domProps: {
            innerHTML: t._s(t.data.content.text)
          }
        })
      ]) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  224: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'Freehtml',
      extends : n(66).default
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  226: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'InlineNavigation',
      extends : n(66).default
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  227: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'Lesertrend',
      extends : n(66).default
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  241: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'WidgetRecommendation',
      extends : n(66).default
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  242: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'AmpInFeedAd',
      extends : n(66).default
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  243: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'CompetitionTextBlock',
      extends : n(66).default
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  244: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'EinklinkerTrending',
      extends : n(72).default
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  248: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'WidgetRecommendationFeed',
      extends : n(66).default
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  330: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      components: {
        SerivceHeader: function () {
          return n.e(1).then(n.bind(null, 443))
        },
        MainHeader: function () {
          return n.e(7).then(n.bind(null, 359))
        },
        StayOnTopWrapper: function () {
          return n.e(4).then(n.bind(null, 365))
        },
        AboveHeader: function () {
          return n.e(5).then(n.bind(null, 465))
        },
        HeaderProgressbar: function () {
          return n.e(6).then(n.bind(null, 459))
        },
        MainNavigation: function () {
          return Promise.all([n.e(1),
          n.e(7)]).then(n.bind(null, 468))
        },
        Progressbar: function () {
          return Promise.resolve().then(n.bind(null, 48))
        }
      },
      data: function () {
        return {
          height: null,
          hidden: !1,
          header: this.$store.state.header
        }
      },
      computed: {
        isArticle: function () {
          return 'Article' === this.$store.state.header.pageType
        },
        isMobileMenuActive: function () {
          return this.$store.state.isMobileMenuActive
        }
      },
      watch: {
        isMobileMenuActive: function (t) {
          var e = this;
          t ? this.$el.classList.add('header--menu-active') : setTimeout((function () {
            e.$el.classList.remove('header--menu-active')
          }), 200)
        }
      }
    },
    o = (n(1054), n(1)),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', {
        staticClass: 'header',
        attrs: {
          id: 'header'
        }
      }, [
        n('AboveHeader', [
          t.isArticle ? t._e() : n('SerivceHeader')
        ], 1),
        t._v(' '),
        n('StayOnTopWrapper', {
          scopedSlots: t._u([{
            key: 'default',
            fn: function (e) {
              return [n('MainHeader', {
                attrs: {
                  border: e.border
                }
              }),
              t._v(' '),
              t.isArticle ? n('HeaderProgressbar', [
                n('client-only', [
                  n('Progressbar', {
                    key: 'header',
                    attrs: {
                      'scroll-up': e.scrollUp
                    }
                  })
                ], 1)
              ], 1) : n('MainNavigation', {
                attrs: {
                  fixed: e.fixed
                }
              }),
              t._v(' '),
              t._t('headerBottom')]
            }
          }
          ], null, !0)
        })
      ], 1)
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  332: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(19),
    o = {
      name: 'Maxiboard',
      props: {
        top: {
          type: Boolean,
        default:
          !1
        },
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
          heightMonitor: null,
          hydrated: 0
        }
      },
      computed: {
        isArticle: function () {
          return 'Article' === this.$store.state.header.pageType
        },
        isErrorPage: function () {
          return 'error' === this.$store.state.header.pageType
        },
        audienzzId: function () {
          return 'adnz_maxiboard_1'
        },
        allowAd: function () {
          return !this.$store.getters.knownUser.adFree && (!!this.$store.state.features.advertisements && (!this.isErrorPage && ((!this.$store.state.metadata || !['longformvisual',
          'gallery'].includes(this.$store.state.metadata.layout)) && (!(this.top && !this.isArticle) && !(!this.top && this.isArticle)))))
        },
        currentPath: function () {
          return this.$route.path
        },
        maxiboardHeight: function () {
          return r.store.maxiboardHeight
        },
        showAdPlaceholder: function () {
          return 'amp' !== this.$store.state.isrendition && this.$store.state.features.showPlaceholderForInTopAds
        }
      },
      watch: {
        currentPath: function () {
          r.mutations.setMaxiboardHeight(0),
          this.$root.$emit('maxiboardHeightChanged')
        }
      },
      updated: function () {
        this.heightMonitor && (this.heightMonitor.disconnect(), this.heightMonitor.observe(this.$el, {
          attributes: !0,
          childList: !0,
          subtree: !0
        }), this.$root.$emit('maxiboardHeightChanged'))
      },
      mounted: function () {
        var t = this;
        this.hydrated = 1,
        this.$nextTick((function () {
          t.monitorHeight()
        }))
      },
      beforeDestroy: function () {
        this.heightMonitor && this.heightMonitor.disconnect()
      },
      methods: {
        monitorHeight: function () {
          this.heightMonitor = new MutationObserver(this.checkHeight),
          this.heightMonitor.observe(this.$el, {
            attributes: !0,
            childList: !0,
            subtree: !0
          }),
          this.$root.$emit('maxiboardHeightChanged')
        },
        checkHeight: function () {
          var t = this.$el.clientHeight;
          t !== this.maxiboardHeight && (this.$root.$emit('maxiboardHeightChanged'), r.mutations.setMaxiboardHeight(t))
        }
      }
    },
    l = n(1),
    component = Object(l.a) (o, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.allowAd ? n('div', {
        key: 'ad-' + t.audienzzId,
        staticClass: 'resor resor--maxiboard',
        class : [
          t.top ? 'resor--top' : '',
          t.showAdPlaceholder ? 'adnz-infeed-placeholder' : ''
        ]
      }, [
        n('div', {
          staticClass: 'resor__item',
          class : {
            'resor--placeholder resor--static': 'webview2' !== t.$store.state.isrendition
          },
          attrs: {
            id: t.audienzzId,
            'data-hydrated': t.$store.state.isrendition.indexOf('webview') > - 1 ? 1 : t.hydrated
          }
        })
      ]) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  340: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      extends : n(332).default,
      computed: {
        audienzzId: function () {
          return 'adnz_maxiboard_1'
        },
        allowAd: function () {
          return !this.$store.getters.knownUser.adFree && (!!this.$store.state.features.advertisements && (!this.isErrorPage && ((!this.$store.state.metadata || !['longformvisual',
          'gallery',
          'video'].includes(this.$store.state.metadata.layout)) && (!(!this.top && this.isArticle) && (!(!this.$store.state.features.articleTopWideboard && this.isArticle) && (!(!this.$store.state.features.pageTopWideboard && !this.isArticle) && !(!this.$store.state.features.pageAllAds && !this.isArticle)))))))
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  351: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'PageHolder',
      computed: {
        isLongformVisual: function () {
          return 'longformvisual' === this.$store.state.metadata.layout
        }
      }
    },
    o = (n(1052), n(1)),
    component = Object(o.a) (r, (function () {
      var t = this,
      e = t.$createElement;
      return (t._self._c || e) ('div', {
        staticClass: 'pageholder',
        class : {
          'pageholder--disabled': t.isLongformVisual,
          'pageholder--centered': t.$store.getters.knownUser.adFree
        }
      }, [
        t._t('default')
      ], 2)
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  352: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(19),
    o = {
      name: 'Skyscraper',
      data: function () {
        return {
          hydrated: 0
        }
      },
      computed: {
        isErrorPage: function () {
          return 'error' === this.$store.state.header.pageType
        },
        isArticle: function () {
          return 'Article' === this.$store.state.header.pageType
        },
        allowAd: function () {
          return !!this.$store.state.features.advertisements && (!this.isErrorPage && ((!this.$store.state.metadata || !['longformvisual',
          'gallery'].includes(this.$store.state.metadata.layout)) && (!(!this.$store.state.features.articleRightSkyscraper && this.isArticle) && (!(!this.$store.state.features.pageRightSkyscraper && !this.isArticle) && !(!this.$store.state.features.pageAllAds && !this.isArticle)))))
        },
        isFixed: function () {
          return r.store.fixedHeader
        }
      },
      mounted: function () {
        this.hydrated = 1
      }
    },
    l = n(1),
    component = Object(l.a) (o, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.allowAd ? n('div', {
        staticClass: 'resor resor__skyscraper',
        class : {
          'resor__skyscraper--fixed': t.isFixed
        }
      }, [
        n('div', {
          staticClass: 'resor__item',
          attrs: {
            id: 'adnz_skyscraper_1',
            'data-hydrated': t.$store.state.isrendition.indexOf('webview') > - 1 ? 1 : t.hydrated
          }
        })
      ]) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  377: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      extends : n(332).default,
      head: function () {
        return !!this.$store.state.features.disableMaxiboardForTabletWebview && {
          script: [
            {
              hid: ''.concat(this.assetId, '-maxiboard'),
              type: 'text/javascript',
              preserve: 'preserve',
              innerHTML: '\n              document.addEventListener("DOMContentLoaded", function(event) {\n                var isTablet = window.innerWidth >= 768\n                if (isTablet) { \n                  var maxiboard = document.querySelectorAll(".resor--maxiboard");\n                  maxiboard.forEach(function (node) {\n                    node.remove();\n                  })\n                }\n              });\n            '
            }
          ]
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  379: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      extends : n(52).default,
      computed: {
        imageTag: function () {
          return 'amp-img'
        },
        layoutAttribute: function () {
          return 'intrinsic'
        }
      }
    },
    o = (n(1164), n(1)),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  380: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(35),
    o = {
      components: {
        posterItem: n(379).default
      },
      extends : r.default
    },
    l = n(1),
    component = Object(l.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  459: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(27),
    o = {
      name: 'HeaderProgress',
      computed: {
        progressComplete: function () {
          return 100 === r.c.progress
        }
      }
    },
    l = (n(1381), n(1)),
    component = Object(l.a) (o, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('client-only', [
        n('transition', {
          attrs: {
            name: 'fade',
            duration: '160'
          }
        }, [
          t.progressComplete ? t._e() : n('div', {
            staticClass: 'header-progress'
          }, [
            n('div', {
              staticClass: 'header-progress__container'
            }, [
              t._t('default')
            ], 2)
          ])
        ])
      ], 1)
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  487: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      components: {
        MainHeader: function () {
          return Promise.all([n.e(7),
          n.e(3)]).then(n.bind(null, 488))
        },
        StayOnTopWrapper: function () {
          return n.e(4).then(n.bind(null, 498))
        }
      },
      extends : n(330).default
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  494: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'MoreToSubject',
      components: {
        SimpleArticle: function () {
          return n.e(6).then(n.bind(null, 500))
        }
      },
      extends : n(105).default
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  499: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      components: {
        MainHeader: function () {
          return n.e(7).then(n.bind(null, 358))
        },
        StayOnTopWrapper: function () {
          return n.e(4).then(n.bind(null, 498))
        }
      },
      extends : n(330).default
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  500: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(36),
    o = n(380),
    l = {
      name: 'SimpleArticle',
      functional: !0,
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
        },
        size: {
          type: String,
        default:
          function () {
            return ''
          }
        },
        referrerType: {
          type: String,
        default:
          void 0
        },
        sourceElem: {
          type: String,
        default:
          function () {
            return ''
          }
        }
      },
      render: function (t, e) {
        var n = e.props,
        l = e.parent,
        d = Object(r.b) (n.data, l.pagetype) || [
        ],
        c = {
        };
        return n.sourceElem && (c['data-source-element-widget'] = n.sourceElem),
        d.map((function (article, e) {
          return t('article', {
            props: {
              key: 'article-'.concat(article.metadata.nzzId, '-').concat(e)
            },
            class : 'teaser--article teaser--'.concat(n.size),
            attrs: c
          }, [
            t(o.default, {
              props: {
                item: article.metadata,
                componenttype: l.componenttype,
                index: e,
                size: n.size,
                styles: n.data.styles,
                referrerType: n.referrerType
              }
            })
          ])
        }))
      }
    },
    d = n(1),
    component = Object(d.a) (l, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  512: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'MoreToSubject',
      components: {
        SimpleArticle: function () {
          return n.e(2).then(n.bind(null, 322))
        }
      },
      extends : n(105).default
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  514: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      extends : n(110).default,
      computed: {
        webviewClick: function () {
          return '\n        window.vamp.navigateToGallery({\n          images: '.concat(JSON.stringify(this.data.content.sliderImages), ',\n          selectedImage: 0,\n          sharingUrl: \'').concat(this.$store.getters.getSeoData.canonical, '\',\n          articleTitle: \'').concat(this.$store.getters.getSeoData.title.replace(/'/g, '\\\''), '\'\n        });\n      ')
        },
        webviewScroll: function () {
          return '\n        if (this.offsetLeft < -10) {\n          if (!window.nzzSlider) {\n            '.concat(this.webviewClick, ';\n            window.nzzSlider = this;\n            setTimeout(function() { window.nzzSlider.scrollTo(0, 0); window.nzzSlider = 0; }, 3000);\n          }\n        }\n      ')
        }
      }
    },
    o = (n(1184), n(1)),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  558: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'MoreToSubject',
      components: {
        SimpleArticle: function () {
          return n.e(2).then(n.bind(null, 321))
        }
      },
      extends : n(105).default
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  560: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      extends : n(110).default,
      computed: {
        webviewClick: function () {
          return '\n        window.vamp.navigateToGallery({\n          images: '.concat(JSON.stringify(this.data.content.sliderImages), ',\n          selectedImage: 0,\n          sharingUrl: \'').concat(this.$store.getters.getSeoData.canonical, '\',\n          articleTitle: \'').concat(this.$store.getters.getSeoData.title.replace(/'/g, '\\\''), '\'\n        });\n      ')
        },
        webviewScroll: function () {
          return '\n        var el = this;\n        if (this.offsetLeft < -10 && !window.nzzSlider) {\n          window.nzzSlider = 1;\n          '.concat(this.webviewClick, ';\n          setTimeout(function(){ el.scrollTo(0, 0); }, 1000);\n        }\n      ')
        }
      },
      head: function () {
        return {
          script: [
            {
              hid: 'close-slider',
              preserve: 'preserve',
              type: 'text/javascript',
              innerHTML: 'appDataReady.then(function() {\n            window.addEventListener(\'closeSlider\', function() {\n              if (!!window.nzzSlider) {\n                window.nzzSlider = 0;\n              }\n            });\n          });'
            }
          ]
        }
      }
    },
    o = (n(1235), n(1)),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  562: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'WidgetRecommendationFeed',
      extends : n(66).default
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  596: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {
      name: 'DepartmentRecommendations',
      extends : n(66).default
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  66: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(822),
    o = {
      name: 'PageFallback',
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
        fallbackText: function () {
          return 'production' === this.$config.environment ? '' : '- - - - - Fallback Page ('.concat(this.data.identifier, ') - - - -')
        }
      },
      mounted: function () {
        Object(r.a) ({
          data: this.data,
          store: this.$store,
          $config: this.$config
        })
      }
    },
    l = n(1),
    component = Object(l.a) (o, (function () {
      var t = this,
      e = t.$createElement;
      return (t._self._c || e) ('div', {
        domProps: {
          innerHTML: t._s(t.fallbackText)
        }
      })
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  72: function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(64),
    o = n(822),
    l = {
      name: 'ArticleFallback',
      mixins: [
        r.a
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
      computed: {
        fallbackText: function () {
          return 'production' === this.$config.environment ? '' : '- - - - - Fallback Article ('.concat(this.data.identifier, ') - - - -')
        }
      },
      mounted: function () {
        Object(o.a) ({
          data: this.data,
          store: this.$store,
          $config: this.$config
        })
      }
    },
    d = n(1),
    component = Object(d.a) (l, (function () {
      var t = this,
      e = t.$createElement;
      return (t._self._c || e) ('div', {
        staticClass: 'articlecomponent fallback',
        domProps: {
          innerHTML: t._s(t.fallbackText)
        }
      })
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  769: function (t, e, n) {
    'use strict';
    n(798)
  },
  796: function (t, e, n) {
    var content = n(1053);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('722b32e2', content, !0, {
      sourceMap: !1
    })
  },
  797: function (t, e, n) {
    var content = n(1055);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('a88ac66e', content, !0, {
      sourceMap: !1
    })
  },
  798: function (t, e, n) {
    var content = n(1056);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('7d179ec0', content, !0, {
      sourceMap: !1
    })
  },
  799: function (t, e, n) {
    var content = n(1058);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('179efd23', content, !0, {
      sourceMap: !1
    })
  },
  800: function (t, e, n) {
    'use strict';
    n(801)
  },
  801: function (t, e, n) {
    var content = n(1059);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('3cddba5e', content, !0, {
      sourceMap: !1
    })
  },
  802: function (t, e, n) {
    var content = n(1061);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('97e60cfc', content, !0, {
      sourceMap: !1
    })
  },
  822: function (t, e, n) {
    'use strict';
    (function (t) {
      var r = n(9),
      o = n.n(r);
      e.a = function (e) {
        var n = e.store,
        data = e.data,
        r = e.$config;
        'false' !== t.env.SLACK_NOTIFICATIONS && window.localStorage && !window.localStorage.getItem('nzz-notify-'.concat(data.id)) && (window.localStorage.setItem('nzz-notify-'.concat(data.id), Date.now()), o() ({
          url: r.clientBaseUrl + '/ping',
          method: 'POST',
          data: {
            ref: n.getters.getSeoData.canonical,
            type: data.identifier
          }
        }).catch((function (t) {
          console.log(t)
        })))
      }
    }).call(this, n(43))
  },
  861: function (t, e, n) {
    var content = n(1165);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('1ba3d4cf', content, !0, {
      sourceMap: !1
    })
  },
  869: function (t, e, n) {
    var content = n(1181);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('b3447676', content, !0, {
      sourceMap: !1
    })
  },
  870: function (t, e, n) {
    var content = n(1183);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('18284fa5', content, !0, {
      sourceMap: !1
    })
  },
  871: function (t, e, n) {
    var content = n(1185);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('69ddd80e', content, !0, {
      sourceMap: !1
    })
  },
  900: function (t, e, n) {
    var content = n(1236);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('f188a4ec', content, !0, {
      sourceMap: !1
    })
  },
  940: function (t, e, n) {
    var content = n(1304);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('ce61039e', content, !0, {
      sourceMap: !1
    })
  },
  942: function (t, e, n) {
    var content = n(1308);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('524ad4de', content, !0, {
      sourceMap: !1
    })
  },
  953: function (t, e, n) {
    var content = n(1328);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('088bc01e', content, !0, {
      sourceMap: !1
    })
  },
  956: function (t, e, n) {
    var content = n(1334);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('4808b99e', content, !0, {
      sourceMap: !1
    })
  },
  958: function (t, e, n) {
    var content = n(1338);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('baaa758e', content, !0, {
      sourceMap: !1
    })
  },
  980: function (t, e, n) {
    var content = n(1382);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('4a042c51', content, !0, {
      sourceMap: !1
    })
  }
}
]);
