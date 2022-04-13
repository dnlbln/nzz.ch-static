(window.webpackJsonp = window.webpackJsonp || [
]).push([[4],
{
  102: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = n(64),
    r = n(69),
    c = n(773),
    l = n(265),
    d = n(53);
    n.e(5).then(n.t.bind(null, 1525, 7));
    var f = {
      name: 'ArticleAudioUrl',
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
        },
        getImageUrl: {
          type: Function,
        default:
          r.a
        }
      },
      data: function () {
        return {
          durationClient: 0
        }
      },
      computed: {
        mediaId: function () {
          return this.data.id.split('-') [1]
        },
        podcast: function () {
          return {
            name: this.data.content.audioname,
            title: this.data.content.title,
            author: this.data.content.author,
            contentUrl: this.data.content.audiosrc,
            description: this.data.content.description,
            thumbnailUrl: this.teaserImageUrl,
            duration: this.data.content.duration,
            datePublished: this.data.content.date,
            episodeNumber: this.data.content.episode
          }
        },
        audioUrl: function () {
          try {
            return this.data.content.audiosrc.replace(/&amp;/g, '&')
          } catch (t) {
            return !1
          }
        },
        audioId: function () {
          return this.getTmsComponentId(this.audioUrl)
        },
        audioTag: function () {
          return 'audio'
        },
        audioType: function () {
          return this.podcast.title && this.podcast.episodeNumber ? 'podcast' : 'audio'
        },
        btnDisabled: function () {
          return d.a.open && d.a.audioId === this.audioId
        },
        isAmp: function () {
          return !1
        },
        teaserImage: function () {
          return this.data.content.image
        },
        teaserImageUrl: function () {
          return this.teaserImage ? this.getImageUrl({
            url: this.teaserImage.url,
            scaleWidth: 120,
            scaleHeight: 120
          }) : null
        },
        imageType: function () {
          return this.$store.state.isrendition || this.$route.fullPath.indexOf('/fragments/render') > - 1 ? 'fragment' : 'article'
        },
        onclickPlayInline: function () {
          return !1
        },
        durationTime: function () {
          return Object(d.b) (this.data.content.duration || this.durationClient)
        },
        imageTag: function () {
          return this.isAmp ? 'amp-img' : 'img'
        },
        imageAlt: function () {
          return Object(l.b) (this.data.content.audioname)
        },
        isLightbox: function () {
          return !(!this.$parent.isAmp || !this.data.group) && this.data.group
        },
        ampTapAction: function () {
          return this.isAmp ? 'tap:audio-'.concat(this.mediaId, '.play,controls-').concat(this.mediaId, '.toggleClass(class=\'audio__controls--amp-play\', force=true)') : void 0
        },
        headingType: function () {
          return 'h2'
        }
      },
      created: function () {
        this.$store.commit('enableAudioPlayer')
        console.log("AOGShaS", this.$store);
      },
      mounted: function () {
        alert();
        this.$refs.audio ? (/iPad|iPhone|iPod/.test(window.navigator.userAgent) && this.$refs.audio.setAttribute('autoplay', ''), this.$refs.audio.addEventListener('loadeddata', this.loaded)) : this.createAudioComponent()
      },
      beforeDestroy: function () {
        this.$refs.audio && this.$refs.audio.removeEventListener('loadeddata', this.loaded)
      },
      head: function () {
        return {
          script: [
            {
              hid: 'podcast-'.concat(this.mediaId, '-ld+json'),
              type: 'application/ld+json',
              preserve: 'preserve',
              innerHTML: Object(c.a) (this.podcast, ''.concat(this.$store.state.metadata.seo.canonicalUrl, '#').concat(this.mediaId))
            }
          ]
        }
      },
      methods: {
        getTmsComponentId: function (t) {
          return (t = t.split('?') [0]).substring(t.lastIndexOf('/') + 1, t.length)
        },
        loaded: function () {
          if (!(this.$refs.audio.readyState >= 2)) throw new Error('Failed to load sound file.');
          this.durationClient = parseInt(this.$refs.audio.duration),
          this.createAudioComponent()
        },
        playAudio: function () {
          var t = this.audioUrl,
          title = this.data.content.audioname,
          e = this.audioId,
          n = this.teaserImage,
          o = this.audioType;
          d.c.startPlayer({
            audioId: e,
            audioUrl: t,
            title: title,
            teaserImage: n,
            playPosition: 'bottom',
            audioType: o
          }),
          window.deferred((function () {
            var t = document.getElementById('audioplayer');
            t && t.dispatchEvent(new window.CustomEvent('play'))
          }), (function () {
            return d.a.loaded
          }))
        },
        createAudioComponent: function () {
          var t = this;
          window.deferred((function () {
            window.dispatchEvent(new window.CustomEvent('tms:component:create', {
              detail: {
                componentID: t.audioId,
                componentName: t.data.content.audioname,
                componentURL: t.data.content.audiosrc,
                componentSize: parseInt(t.data.content.duration) || t.durationClient,
                componentType: 'audio',
                subCategory1: ''
              }
            }))
          }))
        }
      }
    },
    m = (n(774), n(1)),
    component = Object(m.a) (f, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.audioUrl ? n('div', {
        staticClass: 'articlecomponent articlecomponent--desktop-narrow audio'
      }, [
        n('div', {
          staticClass: 'audio__container'
        }, [
          t.teaserImage ? [
            n('figure', {
              staticClass: 'audio__poster'
            }, [
              n('button', {
                directives: [
                  {
                    name: 'srcset',
                    rawName: 'v-srcset',
                    value: {
                      teaserImage: t.teaserImage,
                      parent: this.$parent,
                      layout: 'article-audio',
                      imageType: t.imageType
                    },
                    expression: '{\n            teaserImage: teaserImage,\n            parent: this.$parent,\n            layout: \'article-audio\',\n            imageType: imageType\n          }'
                  }
                ],
                staticClass: 'button button--nohover image-placeholder',
                class : {
                  'button--disabled': t.btnDisabled
                },
                attrs: {
                  disabled: t.btnDisabled,
                  on: t.ampTapAction,
                  onclick: t.onclickPlayInline
                },
                on: {
                  click: function (e) {
                    return e.preventDefault(),
                    t.playAudio(e)
                  }
                }
              }, [
                n(t.imageTag, {
                  tag: 'component',
                  staticClass: 'image-placeholder__image',
                  attrs: {
                    lightbox: !!t.isLightbox && t.isLightbox,
                    layout: 'intrinsic',
                    alt: t.imageAlt,
                    'data-sizes': '0'
                  }
                })
              ], 1)
            ])
          ] : t._e(),
          t._v(' '),
          t.data.content.title || t.data.content.episode ? n('div', {
            staticClass: 'audio__podcast'
          }, [
            t.data.content.title ? n('div', {
              staticClass: 'audio__title'
            }, [
              t._v('\n        ' + t._s(t.data.content.title) + '\n      ')
            ]) : t._e(),
            t._v(' '),
            t.data.content.episode ? n('div', {
              staticClass: 'audio__episode'
            }, [
              t._v('\n        ' + t._s(t.data.content.episode) + '\n      ')
            ]) : t._e()
          ]) : t._e(),
          t._v(' '),
          n('button', {
            staticClass: 'button--clean button--nohover',
            class : {
              'button--disabled': t.btnDisabled
            },
            attrs: {
              disabled: t.btnDisabled,
              on: t.ampTapAction,
              onclick: t.onclickPlayInline
            },
            on: {
              click: function (e) {
                return e.preventDefault(),
                t.playAudio(e)
              }
            }
          }, [
            n(t.headingType, {
              tag: 'component',
              staticClass: 'audio__name'
            }, [
              t._v('\n        ' + t._s(t.data.content.audioname) + '\n      ')
            ]),
            t._v(' '),
            t.data.content.description ? n('div', {
              staticClass: 'audio__description'
            }, [
              t._v('\n        ' + t._s(t.data.content.description) + '\n      ')
            ]) : t._e(),
            t._v(' '),
            t.data.content.author || t.data.content.date ? n('div', {
              staticClass: 'audio__metainfo'
            }, [
              t.data.content.author ? n('span', {
                staticClass: 'metainfo__item metainfo__item--author'
              }, [
                t._v('\n          ' + t._s(t.data.content.author) + '\n        ')
              ]) : t._e(),
              t._v(' '),
              t.data.content.date ? n('time', {
                staticClass: 'metainfo__item metainfo__item--date'
              }, [
                t._v('\n          ' + t._s(t.data.content.date) + '\n        ')
              ]) : t._e()
            ]) : t._e()
          ], 1),
          t._v(' '),
          n('div', {
            staticClass: 'audio__controls',
            attrs: {
              id: 'controls-' + t.mediaId
            }
          }, [
            n('button', {
              staticClass: 'audio__player button button--primary',
              class : {
                'button--disabled': t.btnDisabled
              },
              attrs: {
                disabled: t.btnDisabled,
                on: t.ampTapAction,
                onclick: t.onclickPlayInline
              },
              on: {
                click: function (e) {
                  return e.preventDefault(),
                  t.playAudio(e)
                }
              }
            }, [
              n('svgicon', {
                attrs: {
                  height: '16',
                  name: 'nzz_headphones',
                  width: '18',
                  color: 'r-#FFFFFF #FFFFFF r-#FFFFFF',
                  fill: !0
                }
              }),
              n('span', {
                staticClass: 'audio__label'
              }, [
                t._v('Hören')
              ]),
              t.data.content.duration || t.durationClient ? n('span', {
                staticClass: 'audio__duration'
              }, [
                t._v(t._s(t.durationTime))
              ]) : t._e()
            ], 1),
            t._v(' '),
            t.isAmp || !t.data.content.duration ? n(t.audioTag, {
              ref: 'audio',
              tag: 'component',
              staticClass: 'audio__player',
              attrs: {
                id: 'audio-' + t.mediaId,
                src: t.audioUrl,
                artwork: t.teaserImageUrl,
                title: t.data.content.audioname,
                album: t.data.content.title,
                artist: t.data.content.author,
                type: t.isAmp ? void 0 : 'audio/mp3',
                width: '270',
                height: '40',
                controlslist: 'nodownload'
              }
            }) : t._e(),
            t._v(' '),
            t.isAmp ? n('button', {
              staticClass: 'audio__close button button--nohover',
              attrs: {
                on: 'tap:audio-' + t.mediaId + '.pause,controls-' + t.mediaId + '.toggleClass(class=\'audio__controls--amp-play\')'
              }
            }, [
              n('svgicon', {
                attrs: {
                  name: 'nzz_close',
                  height: '16',
                  width: '16',
                  color: 'r-#000000'
                }
              })
            ], 1) : t._e()
          ], 1)
        ], 2),
        t._v(' '),
        t.isAmp ? n('div', {
          staticClass: 'audio__controls--amp-play',
          attrs: {
            hidden: ''
          }
        }) : t._e()
      ]) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  1122: function (t, e, n) {
    var o = n(12) (!1);
    o.push([t.i,
    '.audio__container{max-width:520px;margin:0 auto;padding:40px 0;font-size:.875rem;line-height:1.375rem;font-family:nzz-sans-serif,Arial;text-align:center;border-top:1px solid #ebebeb;border-top:1px solid var(--grayLight);border-bottom:1px solid #ebebeb;border-bottom:1px solid var(--grayLight)}.audio__poster{width:120px;height:120px;margin-left:auto;margin-right:auto;margin-bottom:16px}.audio__poster .image-placeholder{display:block}.audio__poster .image-placeholder,.audio__poster .image-placeholder__image{width:inherit;height:inherit}.audio__episode,.audio__title{display:inline-block;margin-bottom:8px}.audio__title+.audio__episode{margin-left:8px}.audio__episode{color:#707070;color:var(--grayMedium)}.audio__name{font-weight:700;font-size:1.25rem;line-height:1.75rem;margin-bottom:8px}@media (min-width:768px){.audio__name{font-size:1.375rem;line-height:2rem}}.audio__description{font-size:1rem;line-height:1.625rem;margin-bottom:8px}.audio__metainfo{font-size:.75rem;line-height:1rem;color:#707070;color:var(--grayMedium)}.audio__metainfo .metainfo__item:last-child{margin-right:0}.audio__duration{opacity:.64}.audio__controls .audio__close{position:absolute;margin-left:148px;margin-top:12px}.audio__controls .audio__close,.audio__controls amp-audio{opacity:0;margin-bottom:-40px;transition:all .5s ease}.audio__controls--amp-play .audio__close,.audio__controls--amp-play amp-audio{opacity:1}.audio__controls--amp-play amp-audio{margin-bottom:0}.audio__controls--amp-play .audio__close{margin-top:-28px}.audio__player{display:block;margin-top:24px;margin-left:auto;margin-right:auto}.audio__player.button{font-size:.875rem}amp-audio.audio__player{display:block}amp-audio.audio__player audio{width:270px;height:40px}.audio__label{display:inline-block;margin-left:8px;margin-right:8px}',
    '']),
    t.exports = o
  },
  1129: function (t, e, n) {
    var o = n(12) (!1);
    o.push([t.i,
    '.image--slider{max-width:100%;height:100%}.image--grid2of3{height:100%;margin-bottom:0}.image--fullwidth{max-width:none;margin-right:-24px;margin-left:-24px;max-width:1200px}@media (min-width:768px){.image--fullwidth{margin-right:auto;margin-left:auto}}.image--fullwidth-zoomed,.image--left,.image--right{margin-right:auto;margin-left:auto}.image--left,.image--right{width:240px}@media (min-width:768px){.image--left,.image--right{width:100%;max-width:240px}}@media (min-width:768px){.image--right{float:right;margin-left:40px;margin-right:24px}}@media (min-width:1372px){.image--right{margin-right:48px}}@media (min-width:1548px){.image--right{margin-right:120px}}@media (min-width:768px){.image--left{float:left;margin-right:40px;margin-left:24px}}@media (min-width:1372px){.image--left{margin-left:48px}}@media (min-width:1548px){.image--left{margin-left:120px}}.image--first{margin-bottom:0}@media (min-width:768px){.image--first{margin-top:120px;margin-bottom:0}}.image--grid1of3,.image--grid2of3,.image__placeholder--slider,.image__placeholder--slider .poster__placeholder{height:100%}.image__placeholder--grid2of3{position:unset;height:100%;overflow:hidden}.image__placeholder--overlay{cursor:pointer}.image__src{display:block;width:100%;height:auto;margin-bottom:0;transition:opacity .4s}.image__src--slider{width:auto;height:100%}.image__src--grid2of3{position:relative;transform-origin:top left}@media (min-width:1372px){.image--fullwidth{margin-left:24px;margin-right:24px}}@media (min-width:1548px){.image--fullwidth{margin-left:40px;margin-right:40px}}',
    '']),
    t.exports = o
  },
  1136: function (t, e, n) {
    var o = n(12) (!1);
    o.push([t.i,
    '.enumeration{list-style-type:none;padding:0 0 0 24px}.enumeration--numeric{counter-reset:num-counter}@media (min-width:768px){.enumeration{padding-left:40px}}.enumeration__title{font-weight:500;font-size:1.125rem;line-height:1.75rem;margin-bottom:16px}@media (min-width:768px){.enumeration__title{font-size:1.25rem;line-height:2rem;margin-bottom:24px}}.enumeration__item{position:relative;margin-bottom:16px;font-size:1.125rem;line-height:1.75rem}@media (min-width:768px){.enumeration__item{margin-bottom:24px;font-size:1.25rem;line-height:2rem}}.enumeration__item:before{left:-24px}@media (min-width:768px){.enumeration__item:before{left:-40px}}.enumeration--regular .enumeration__item:before{content:"";position:absolute;width:4px;height:4px;top:11px;background-color:#000;background-color:var(--black)}@media (min-width:768px){.enumeration--regular .enumeration__item:before{width:6px;height:6px;top:13px}}.enumeration--numeric .enumeration__item:before{content:counter(num-counter) ". ";position:absolute;top:0;counter-increment:num-counter}.enumeration__item sub,.enumeration__item sup{line-height:0}',
    '']),
    t.exports = o
  },
  1137: function (t, e, n) {
    var o = n(12) (!1);
    o.push([t.i,
    '.infobox{width:280px;margin:0 auto 56px;overflow:hidden;border-bottom:1px solid #000;border-bottom:1px solid var(--black);cursor:pointer}@media (min-width:768px){.infobox{width:520px;margin:0 auto 64px}}.infobox .articlecomponent.enumeration{margin-bottom:0;padding-bottom:0}.infobox .articlecomponent.enumeration:last-child{padding-bottom:0}.infobox .enumeration__item,.infobox__subtitle,.infobox__text,.infobox__title{margin:0;padding:0 0 32px;font-size:1rem;line-height:1.625rem;font-family:nzz-sans-serif,Arial}@media (min-width:768px){.infobox .enumeration__item,.infobox__subtitle,.infobox__text,.infobox__title{font-size:1.125rem;line-height:1.75rem}}.infobox__subtitle{padding:0;margin:0;font-weight:500}.infobox__title{position:relative;display:flex;align-items:center;margin-bottom:16px;padding:16px 48px 16px 0;font-weight:500;cursor:pointer}.infobox__title:hover{opacity:.6}.infobox__icon{position:absolute;top:7px;right:0;transition:transform .15s ease}@media (min-width:768px){.infobox__icon{top:9px}}.infobox__body{position:relative;max-height:80px;overflow:hidden;transition:max-height .3s}@media (min-width:768px){.infobox__body{max-height:160px}}.infobox__body:after{content:"";position:absolute;bottom:0;display:block;width:100%;height:100%;background:linear-gradient(180deg,hsla(0,0%,100%,0),#fff)}.infobox__body>div>:last-child{margin-bottom:0}.infobox__body>div>:last-child .enumeration__item{margin-bottom:0}.infobox--open{cursor:default}.infobox--open .infobox__body{height:auto}.infobox--open .infobox__body:after{display:none}.infobox--open .infobox__icon{transform:rotate(180deg);transition:transform .15s ease}',
    '']),
    t.exports = o
  },
  1138: function (t, e, n) {
    'use strict';
    n(848)
  },
  1139: function (t, e, n) {
    var o = n(12) (!1);
    o.push([t.i,
    '/*! purgecss start ignore */amp-accordion .infobox-no-title{border:0}amp-accordion .infobox__title{background-color:#fff;background-color:var(--white);border:0}amp-accordion :focus{outline:none}amp-accordion .infobox__body:after{display:none}amp-accordion section[expanded]{padding:0 0 32px}amp-accordion section[expanded] .infobox__body{max-height:none;height:auto}amp-accordion section[expanded] .infobox__icon{transform:rotate(180deg);transition:transform .15s ease}\n/*! purgecss end ignore */',
    '']),
    t.exports = o
  },
  114: function (t, e, n) {
    'use strict';
    n.r(e);
    function o(t) {
      return Boolean(t.content && t.content.text)
    }
    var r = {
      name: 'ArticleEnumRegular',
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
        enumerationItems: function () {
          return this.data.containers.enumeration.filter(o)
        }
      }
    },
    c = (n(844), n(1)),
    component = Object(c.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', {
        staticClass: 'articlecomponent'
      }, [
        t.data.content && t.data.content.title ? n('h2', {
          staticClass: 'enumeration__title',
          domProps: {
            innerHTML: t._s(t.data.content.title)
          }
        }) : t._e(),
        t._v(' '),
        t.data.containers ? n('ul', {
          staticClass: 'enumeration enumeration--regular'
        }, t._l(t.enumerationItems, (function (e) {
          return n('li', {
            key: 'enumeration-' + e.id,
            staticClass: 'enumeration__item',
            attrs: {
              'data-team-li': ''
            },
            domProps: {
              innerHTML: t._s(e.content.text)
            }
          })
        })), 0) : t._e()
      ])
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  115: function (t, e, n) {
    'use strict';
    n.r(e);
    function o(t) {
      return Boolean(t.content && t.content.text)
    }
    var r = {
      name: 'ArticleEnumNumberic',
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
        enumerationItems: function () {
          return this.data.containers.enumeration.filter(o)
        }
      }
    },
    c = (n(844), n(1)),
    component = Object(c.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', {
        staticClass: 'articlecomponent'
      }, [
        t.data.content && t.data.content.title ? n('h2', {
          staticClass: 'enumeration__title',
          domProps: {
            innerHTML: t._s(t.data.content.title)
          }
        }) : t._e(),
        t._v(' '),
        t.data.containers ? n('ol', {
          staticClass: 'enumeration enumeration--numeric'
        }, t._l(t.enumerationItems, (function (e) {
          return n('li', {
            key: 'enumeration-' + e.id,
            staticClass: 'enumeration__item',
            attrs: {
              'data-team-li': ''
            },
            domProps: {
              innerHTML: t._s(e.content.text)
            }
          })
        })), 0) : t._e()
      ])
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  1161: function (t, e, n) {
    var o = n(12) (!1);
    o.push([t.i,
    '.subtitle{position:relative;font-size:1.25rem;line-height:1.4;font-weight:500;font-family:nzz-sans-serif,Arial;margin-bottom:32px}@media (min-width:768px){.subtitle{font-size:1.375rem;line-height:1.45;margin-bottom:32px}}.subtitle--numbered:before{content:counter(subtitle-numbered) ". ";position:absolute;counter-increment:subtitle-numbered}.subtitle--numbered-text{padding-left:32px}@media (min-width:768px){.subtitle--numbered-text{padding-left:40px}}.subtitle--chapter{font-size:1.375rem;line-height:1.36;padding-top:18px;margin-top:64px}@media (min-width:768px){.subtitle--chapter{font-size:1.75rem;margin-top:80px}}.subtitle--chapter:before{content:"";position:absolute;left:0;top:0;width:40px;height:1px;background-color:#000;background-color:var(--black)}.subtitle--small{font-weight:300}.subtitle+.subtitle--small{margin-top:-32px}@media (min-width:768px){.subtitle+.subtitle--small{margin-top:-32px}}.subtitle__content-table-link{display:flex;align-items:center;cursor:pointer;text-decoration:none;padding-left:32px}@media (min-width:768px){.subtitle__content-table-link{padding-left:40px}}.subtitle__text{flex-grow:1;color:#000;color:var(--black)}.subtitle__content-table-icon{flex-shrink:0;transform:rotate(180deg);padding:14px 25px;margin:-14px 0}.subtitle__anchor{position:absolute;left:0;top:-43px}@media (min-width:768px){.subtitle__anchor{top:-99px}}.subtitle__anchor--fixed-header{top:-99px}',
    '']),
    t.exports = o
  },
  1162: function (t, e, n) {
    'use strict';
    n(860)
  },
  1163: function (t, e, n) {
    var o = n(12) (!1);
    o.push([t.i,
    '\n/*! purgecss start ignore */.subtitle__anchor{top:-86px}\n/*! purgecss end ignore */',
    '']),
    t.exports = o
  },
  1166: function (t, e, n) {
    'use strict';
    n(862)
  },
  1167: function (t, e, n) {
    var o = n(12) (!1);
    o.push([t.i,
    '.header__stay-on-top{position:relative;z-index:1500}.header__stay-on-top--fixed{position:fixed;top:0;width:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden}@media (min-width:768px){.header__stay-on-top--fixed{width:100%;transform:translateY(-120px)}}@media (min-width:1200px){.header__stay-on-top--fixed.pageholder--centered.header__stay-on-top--article:not(.header__stay-on-top--visual){width:1200px;margin:0 auto;left:50%;transform:translateX(-50%)}}@media (min-width:1372px){.header__stay-on-top--fixed{transform:translateY(-136px)}.header__stay-on-top--fixed:not(.pageholder--centered):not(.header__stay-on-top--visual){min-width:1116px;max-width:1548px;padding-right:348px}}.header__stay-on-top--fixed.header__stay-on-top--scroll-down{transform:translateY(-56px)}@media (min-width:1200px){.header__stay-on-top.pageholder--centered.header__stay-on-top--article:not(.header__stay-on-top--visual){width:1200px;margin:0 auto}}.header__stay-on-top--transition{transition:transform .32s}@media (min-width:768px){.header__stay-on-top--transition{transition:none}}@media (min-width:768px){.header__stay-on-top--article{transform:none}}.header__stay-on-top--visual{min-width:auto;max-width:none;padding:0;position:fixed;width:100%}',
    '']),
    t.exports = o
  },
  1168: function (t, e, n) {
    'use strict';
    n(863)
  },
  1169: function (t, e, n) {
    var o = n(12) (!1);
    o.push([t.i,
    '.header__stay-on-top{position:static}',
    '']),
    t.exports = o
  },
  117: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = n(64),
    r = n(19);
    n.e(5).then(n.t.bind(null, 1575, 7));
    var c = {
      name: 'ArticleSubtitle',
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
        }
      },
      computed: {
        svgParams: function () {
          return {
            name: 'ico_arrow_contenttable_nzz',
            width: '5',
            height: '13',
            color: '#000'
          }
        },
        headingType: function () {
          return 'h2'
        },
        scrollDown: function () {
          var t = r.store.delayedScrollUp,
          e = r.store.delayedScrollDown;
          return e || !e && !t
        },
        titleHtml: function () {
          return this.data.content.title
        },
        group: function () {
          return !!this.$store.state.rendition.lightbox && (1 === this.$store.state.rendition.lightbox['article-group'] ? 'second' : 'first')
        },
        styleClass: function () {
          var t = this.data.styles;
          return (t = void 0 === t ? {
          }
           : t) ['subtitle-type']
        },
        isNumbered: function () {
          return this.data && this.data.styles && 'subtitle--numbered' === this.data.styles['subtitle-type']
        }
      },
      methods: {
        backToContentTable: function () {
          window.dispatchEvent(new window.CustomEvent('saveEventData' + this.$store.getters.getMetadata.nzzId, {
            detail: {
              id: this.data.content.id
            }
          }))
        }
      }
    },
    l = (n(858), n(1)),
    component = Object(l.a) (c, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.data.content ? n(t.headingType, {
        tag: 'component',
        staticClass: 'subtitle articlecomponent',
        class : [
          t.styleClass,
          t.data.contentTable ? 'subtitle--content-table' : ''
        ],
        attrs: {
          'data-team-subtitle': ''
        }
      }, [
        t.data.contentTable ? n('a', {
          staticClass: 'subtitle__content-table-link',
          attrs: {
            href: '#content-table-' + t.group
          },
          on: {
            click: t.backToContentTable
          }
        }, [
          n('span', {
            staticClass: 'subtitle__text'
          }, [
            n('span', {
              staticClass: 'subtitle__anchor',
              class : {
                'subtitle__anchor--fixed-header': !t.scrollDown
              },
              attrs: {
                id: t.data.content.id + '-' + t.group
              }
            }),
            t._v(' '),
            n('span', {
              domProps: {
                innerHTML: t._s(t.titleHtml)
              }
            })
          ]),
          t._v(' '),
          n('span', {
            staticClass: 'subtitle__content-table-icon'
          }, [
            t.data.contentTable ? n('svgicon', {
              attrs: {
                name: t.svgParams.name,
                width: t.svgParams.width,
                height: 'auto',
                color: '#000'
              }
            }) : t._e()
          ], 1)
        ]) : n('span', {
          class : {
            'subtitle--numbered-text': t.isNumbered
          },
          domProps: {
            innerHTML: t._s(t.titleHtml)
          }
        })
      ]) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  1172: function (t, e, n) {
    'use strict';
    n(865)
  },
  1173: function (t, e, n) {
    var o = n(12) (!1);
    o.push([t.i,
    '.free-html{overflow:hidden}.free-html.widget--fullwidth{margin-left:-24px;margin-right:-24px;width:auto;max-width:none}@media (min-width:768px){.free-html.widget--fullwidth{margin-left:auto;margin-right:auto}}.free-html--not-fullwidth-article.free-html.widget--fullwidth{padding-left:0;padding-right:0}',
    '']),
    t.exports = o
  },
  1174: function (t, e, n) {
    'use strict';
    n(866)
  },
  1175: function (t, e, n) {
    var o = n(12) (!1);
    o.push([t.i,
    '.article-image__src{opacity:1}',
    '']),
    t.exports = o
  },
  119: function (t, e, n) {
    'use strict';
    n.r(e);
    function o(t, e) {
      var n;
      if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
        if (Array.isArray(t) || (n = function (t, e) {
          if (!t) return;
          if ('string' == typeof t) return r(t, e);
          var n = Object.prototype.toString.call(t).slice(8, - 1);
          'Object' === n && t.constructor && (n = t.constructor.name);
          if ('Map' === n || 'Set' === n) return Array.from(t);
          if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(t, e)
        }(t)) || e && t && 'number' == typeof t.length) {
          n && (t = n);
          var i = 0,
          o = function () {
          };
          return {
            s: o,
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
            f: o
          }
        }
        throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
      }
      var c,
      l = !0,
      d = !1;
      return {
        s: function () {
          n = t[Symbol.iterator]()
        },
        n: function () {
          var t = n.next();
          return l = t.done,
          t
        },
        e: function (t) {
          d = !0,
          c = t
        },
        f: function () {
          try {
            l || null == n.return || n.return()
          } finally {
            if (d) throw c
          }
        }
      }
    }
    function r(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
      return n
    }
    function c(t) {
      var script = document.createElement('script');
      return Array.from(t.attributes).forEach((function (t) {
        var e = t.name,
        n = t.value;
        return script.setAttribute(e, n)
      })),
      script.innerHTML = t.innerHTML,
      script
    }
    function l(t) {
      if (t) if (t.getAttribute('src') && t.getAttribute('src').indexOf('telegram') > - 1) {
        var e = t.getAttribute('data-telegram-post');
        document.querySelector('[data-telegram-post="'.concat(e, '"]')).insertAdjacentElement('afterend', t)
      } else document.body.appendChild(t)
    }
    function d(t) {
      t && t.parentNode && t.parentNode.removeChild(t)
    }
    function f(t, e) {
      var n,
      r = o(t.childNodes);
      try {
        for (r.s(); !(n = r.n()).done; ) {
          var l = n.value;
          f(l, e),
          'SCRIPT' === l.nodeName && (e.push(c(l)), t.removeChild(l))
        }
      } catch (t) {
        r.e(t)
      } finally {
        r.f()
      }
      return e
    }
    var m = {
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
        isFullwidthArticle: function () {
          return 'fullwidth' === this.$store.state.metadata.layout
        },
        fullwidth: function () {
          try {
            return 'widget--fullwidth' === this.data.styles['fullwidth-widget']
          } catch (t) {
            return !1
          }
        },
        content: function () {
          var data = {
            html: void 0,
            scripts: [
            ]
          },
          t = this.data.content['free-html'].html || this.data.content['free-html'],
          e = document.createElement('div');
          return e.innerHTML = this.adjustHtml(t),
          f(e, data.scripts),
          t.indexOf('telegram') < 0 ? data.html = e.innerHTML : data.html = t,
          data
        }
      },
      mounted: function () {
        this.content.scripts.forEach(l)
      },
      destroyed: function () {
        this.content.scripts.forEach(d)
      },
      methods: {
        adjustHtml: function (html) {
          return this.isVoteSwiper(html) ? html.replace(/(src="[^"]*")/, "$1 scrolling='no'") : html
        },
        isVoteSwiper: function () {
          var html = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
          return /voteswiper\.org/.test(html)
        }
      }
    },
    h = (n(1172), n(1)),
    component = Object(h.a) (m, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.content.html ? n('div', {
        staticClass: 'articlecomponent free-html',
        class : {
          'widget--fullwidth': t.fullwidth,
          'free-html--not-fullwidth-article': !t.isFullwidthArticle
        },
        domProps: {
          innerHTML: t._s(t.content.html)
        }
      }) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  120: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = n(3),
    r = n.n(o),
    c = n(98),
    l = n(114),
    d = n(115),
    f = n(64);
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
    function h(t) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {
        };
        i % 2 ? m(Object(source), !0).forEach((function (e) {
          r() (t, e, source[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : m(Object(source)).forEach((function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
        }))
      }
      return t
    }
    n.e(5).then(n.t.bind(null, 1566, 7));
    var v = {
      name: 'ArticleInfobox',
      components: {
        infoimg: c.default,
        enumerationRegular: l.default,
        enumerationNumeric: d.default
      },
      mixins: [
        f.a
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
          closed: !(this.data.styles && this.data.styles.infobox && 'infobox--open' === this.data.styles.infobox),
          maxHeight: '10px',
          showIcon: !0,
          svgParams: {
            name: 'ico_chevron_down_48',
            width: '40',
            height: '40',
            color: '#05032D',
            fill: !1
          }
        }
      },
      computed: {
        webviewClick: function () {
          return !1
        },
        styleObj: function () {
          return !0 !== this.closed ? {
            'max-height': 'min-content'
          }
           : 0
        },
        headingType: function () {
          return 'h2'
        },
        fontSize: function () {
          return this.$store.state.fontSize
        }
      },
      mounted: function () {
        this.addTracking(),
        this.setState()
      },
      methods: {
        addTracking: function () {
          var t = this;
          window.deferred((function () {
            window.dispatchEvent(new window.CustomEvent('tms:component:create', {
              detail: {
                componentID: t.data.id,
                componentName: 'infobox-advanced',
                componentSubType1: 'cms',
                componentSubType2: ''
              }
            }))
          }))
        },
        expand: function () {
          var t = this;
          window.deferred((function () {
            window.dispatchEvent(new window.CustomEvent('tms:event:push', {
              detail: h({
              }, t.eventData())
            }))
          }))
        },
        collapse: function () {
          var t = this;
          window.deferred((function () {
            window.dispatchEvent(new window.CustomEvent('tms:event:push', {
              detail: h(h({
              }, t.eventData()), {
              }, {
                eventInfo: h(h({
                }, t.eventData().eventInfo), {
                }, {
                  eventAction: 'collapse'
                })
              })
            }))
          }))
        },
        eventData: function () {
          return {
            eventInfo: {
              eventName: 'UI Interaction',
              eventAction: 'expand',
              eventNonInteractive: !1,
              type: 'ui',
              componentID: this.data.id,
              componentName: 'infobox-advanced'
            },
            category: {
              subCategory1: 'infobox'
            }
          }
        },
        setState: function () {
          this.data.styles && this.data.styles.infobox && 'infobox--open' === this.data.styles.infobox && (this.closed = !1)
        },
        toggleBox: function () {
          this.closed && this.toggleBoxTitle()
        },
        toggleBoxTitle: function () {
          this.closed ? this.expand() : this.collapse(),
          this.closed = !this.closed
        }
      }
    },
    w = (n(846), n(1)),
    component = Object(w.a) (v, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.data.content || t.data.containers ? n('div', {
        key: 'refresh-on-font-change-' + t.$store.state.fontSize,
        staticClass: 'articlecomponent infobox',
        class : [
          t.closed ? '' : 'infobox--open'
        ]
      }, [
        t.data.content && t.data.content.title ? n(t.headingType, {
          tag: 'component',
          staticClass: 'infobox__title',
          attrs: {
            onclick: t.webviewClick
          },
          on: {
            click: t.toggleBoxTitle
          }
        }, [
          n('span', {
            attrs: {
              'data-team-infobox-title': ''
            },
            domProps: {
              innerHTML: t._s(t.data.content.title.replace(/(\u00a0|&nbsp;)/g, ' '))
            }
          }),
          t._v(' '),
          t.showIcon ? n('svgicon', {
            staticClass: 'infobox__icon',
            attrs: {
              name: t.svgParams.name,
              width: t.svgParams.width,
              height: t.svgParams.height,
              color: t.svgParams.color,
              fill: t.svgParams.fill
            }
          }) : t._e()
        ], 1) : t._e(),
        t._v(' '),
        t.data.containers ? n('div', {
          staticClass: 'infobox__body',
          style: t.styleObj,
          attrs: {
            onclick: t.webviewClick
          },
          on: {
            click: t.toggleBox
          }
        }, [
          n('div', [
            t._l(t.data.containers.infobox, (function (e) {
              return [e.identifier.includes('paragraph') && e.content && e.content.text ? n('p', {
                key: 'item-' + e.id,
                staticClass: 'articlecomponent infobox__text',
                attrs: {
                  'data-team-paragraph': ''
                },
                domProps: {
                  innerHTML: t._s(e.content.text)
                }
              }) : t._e(),
              t._v(' '),
              e.identifier.includes('subhead') ? n(t.headingType, {
                key: 'item-' + e.id,
                tag: 'component',
                staticClass: 'infobox__subtitle',
                attrs: {
                  'data-team-infobox-subtitle': ''
                },
                domProps: {
                  innerHTML: t._s(e.content.title.replace(/(\u00a0|&nbsp;)/g, ' '))
                }
              }) : t._e(),
              t._v(' '),
              e.identifier.includes('image') ? n('infoimg', {
                key: 'item-' + e.id,
                attrs: {
                  data: e
                }
              }) : t._e(),
              t._v(' '),
              e.identifier.includes('enumeration-regular') ? n('enumerationRegular', {
                key: 'item-' + e.id,
                attrs: {
                  data: e
                }
              }) : t._e(),
              t._v(' '),
              e.identifier.includes('enumeration-numeric') ? n('enumerationNumeric', {
                key: 'item-' + e.id,
                attrs: {
                  data: e
                }
              }) : t._e()]
            }))
          ], 2)
        ]) : t._e()
      ], 1) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  1231: function (t, e, n) {
    'use strict';
    n(898)
  },
  1232: function (t, e, n) {
    var o = n(12) (!1);
    o.push([t.i,
    '.article-image__src{opacity:1}',
    '']),
    t.exports = o
  },
  1256: function (t, e, n) {
    'use strict';
    n(912)
  },
  1257: function (t, e, n) {
    var o = n(12) (!1);
    o.push([t.i,
    '.jw-state-idle .jw-controls.jw-reset{background:rgba(0,0,0,.15)}.jw-reset.jw-controls-backdrop{background:linear-gradient(1turn,#000,rgba(0,0,0,.01));opacity:.4}.jw-reset-text.jw-title-primary{font-size:.875rem;line-height:1.375rem}@media (min-width:768px){.jw-reset-text.jw-title-primary{font-size:1rem;line-height:1.625rem}}.jw-reset-text.jw-title-secondary{font-size:.75rem;line-height:1.25rem}@media (min-width:768px){.jw-reset-text.jw-title-secondary{font-size:.875rem;line-height:1.5rem}}',
    '']),
    t.exports = o
  },
  1258: function (t, e, n) {
    'use strict';
    n(913)
  },
  1259: function (t, e, n) {
    var o = n(12) (!1);
    o.push([t.i,
    '#__layout .jw-reset.jw-controls-backdrop{background-size:100%}',
    '']),
    t.exports = o
  },
  1319: function (t, e, n) {
    'use strict';
    n(948)
  },
  1320: function (t, e, n) {
    var o = n(12) (!1);
    o.push([t.i,
    '.iframe{padding-left:24px;padding-right:24px;max-width:568px}',
    '']),
    t.exports = o
  },
  1331: function (t, e, n) {
    'use strict';
    n(955)
  },
  1332: function (t, e, n) {
    var o = n(12) (!1);
    o.push([t.i,
    '.question{font-family:nzz-serif,Georgia;font-size:1.125rem;font-weight:500;line-height:1.56}@media (min-width:768px){.question{font-size:1.25rem;line-height:1.6}}',
    '']),
    t.exports = o
  },
  1347: function (t, e, n) {
    'use strict';
    n(963)
  },
  1348: function (t, e, n) {
    var o = n(12) (!1);
    o.push([t.i,
    '@media (min-width:616px){.tweet .twitter-tweet{width:520px!important}}',
    '']),
    t.exports = o
  },
  1383: function (t, e, n) {
    'use strict';
    n(981)
  },
  1384: function (t, e, n) {
    var o = n(12) (!1);
    o.push([t.i,
    '.highlight{font-weight:500}',
    '']),
    t.exports = o
  },
  1395: function (t, e, n) {
    'use strict';
    n(988)
  },
  1396: function (t, e, n) {
    var o = n(12) (!1);
    o.push([t.i,
    '.page-title{display:flex;align-items:center;margin:32px 24px 0;background-color:#fff;background-color:var(--white);border-bottom:1px solid #ebebeb;border-bottom:1px solid var(--grayLight)}@media (min-width:768px){.page-title{margin:32px 24px 0}}@media (min-width:1548px){.page-title{margin:48px 40px 0}}.page-title__title{position:relative;top:1px;padding-bottom:24px;font-weight:500;font-size:1.375rem;line-height:1.875rem;font-family:nzz-sans-serif,Arial;border-bottom:1px solid #000;border-bottom:1px solid var(--black)}@media (min-width:768px){.page-title__title{padding-bottom:24px;font-size:2rem;line-height:2.625rem}}',
    '']),
    t.exports = o
  },
  142: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = n(64),
    r = n(773);
    function c(t, e) {
      var n;
      if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
        if (Array.isArray(t) || (n = function (t, e) {
          if (!t) return;
          if ('string' == typeof t) return l(t, e);
          var n = Object.prototype.toString.call(t).slice(8, - 1);
          'Object' === n && t.constructor && (n = t.constructor.name);
          if ('Map' === n || 'Set' === n) return Array.from(t);
          if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(t, e)
        }(t)) || e && t && 'number' == typeof t.length) {
          n && (t = n);
          var i = 0,
          o = function () {
          };
          return {
            s: o,
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
            f: o
          }
        }
        throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
      }
      var r,
      c = !0,
      d = !1;
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
          d = !0,
          r = t
        },
        f: function () {
          try {
            c || null == n.return || n.return()
          } finally {
            if (d) throw r
          }
        }
      }
    }
    function l(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
      return n
    }
    function d(component) {
      return Boolean(component && component.identifier) && [
        '.jw',
        '.video-embed'
      ].some((function (t) {
        return component.identifier.includes(t)
      }))
    }
    var f = {
      name: 'JW',
      components: {
        ImageDescription: function () {
          return n.e(1).then(n.bind(null, 367))
        }
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
        },
        content: {
          type: Array,
        default:
          function () {
            return []
          }
        },
        videoData: {
          type: Object,
        default:
          function () {
            var t,
            e,
            n;
            return (null === (t = this.data) || void 0 === t || null === (e = t.content) || void 0 === e || null === (n = e.article) || void 0 === n ? void 0 : n.content) || {
            }
          }
        },
        fullwidth: {
          type: Boolean,
        default:
          function () {
            try {
              return 'articlecomponent--fullwidth' === this.data.styles['fullwidth-component']
            } catch (t) {
              return !1
            }
          }
        }
      },
      data: function () {
        return {
          componentId: 'jw-video-'.concat(this.content.filter(d).indexOf(this.data) + 1),
          height: 0,
          leavingPage: !1
        }
      },
      computed: {
        video: function () {
          try {
            return this.videoData.playlist[0]
          } catch (t) {
            return {
            }
          }
        },
        videoId: function () {
          return this.video.mediaid
        },
        playerScriptId: function () {
          return this.videoData.playerId
        },
        playerInstanceId: function () {
          return 'jwplayer-'.concat(this.componentId)
        },
        playerInstanceConfigId: function () {
          return 'jwplayerconfig-'.concat(this.playerScriptId)
        },
        scriptPromiseName: function () {
          return 'jwPlayerReady_'.concat(this.playerScriptId)
        },
        scriptInitName: function () {
          return 'jwPlayerInit_'.concat(this.playerScriptId)
        },
        routeChange: function () {
          return this.$store.state.previousRoute.fullPath
        }
      },
      watch: {
        routeChange: function () {
          this.leavingPage = !0
        }
      },
      beforeDestroy: function () {
        var t = window[this.playerInstanceId];
        t && (t.setMute(!0), t.remove()),
        this.heightMonitor.disconnect()
      },
      head: function () {
        var script = [
          {
            hid: 'jw-video-'.concat(this.videoId, '-ld+json'),
            type: 'application/ld+json',
            preserve: 'preserve',
            innerHTML: Object(r.b) (this.video, ''.concat(this.$store.state.metadata.seo.canonicalUrl, '#').concat(this.videoId))
          },
          {
            hid: 'jw-player-'.concat(this.playerScriptId, '-ready'),
            type: 'text/javascript',
            innerHTML: '\n          var '.concat(this.scriptInitName, ';\n          var ').concat(this.scriptPromiseName, ' = new Promise(function (resolve) {\n            ').concat(this.scriptInitName, ' = resolve;\n          });\n        '),
            preserve: 'preserve'
          },
          {
            hid: 'jw-player-'.concat(this.playerScriptId),
            type: 'text/javascript',
            src: '//cdn.jwplayer.com/libraries/'.concat(this.playerScriptId, '.js'),
            preserve: 'preserve',
            async: !0,
            onload: 'if (window.'.concat(this.scriptInitName, ') {window[\'').concat(this.playerInstanceConfigId, '\'] = window.jwplayer.defaults; window.').concat(this.scriptInitName, '();}')
          },
          {
            hid: 'jw-video-'.concat(this.componentId),
            type: 'text/javascript',
            innerHTML: '\n        window.addEventListener(\'pauseVideoPlayback\', function() {\n              var player = jwplayer(\''.concat(this.componentId, '\');\n              if (player.setup) {\n                player.pause()\n              }\n        })\n        window.addEventListener(\'runJWscript\', function() {\n          console.log(\'runJWscript\');\n          window.deferred(function () {\n            var i = 0;\n            console.log(\'jw deferred run\', ').concat(this.scriptPromiseName, ');\n            ').concat(this.scriptPromiseName, '.then(function initJw() {\n              var player = jwplayer(\'').concat(this.componentId, '\');\n              console.log(\'jw player ready\', player.setup);\n              if (!player.setup) {\n                i++;\n                if (i < 50) {\n                  return setTimeout(initJw, 100);\n                }\n              }\n              var defaults = window[\'').concat(this.playerInstanceConfigId, '\'];\n              var settings = [defaults, ').concat(JSON.stringify(this.videoData), ', {\n                floating: window.innerWidth >= 768 ? window[\'').concat(this.playerInstanceConfigId, '\'].floating : false,\n                sharing: !defaults.sharing ? undefined : Object.assign({}, defaults.sharing, {\n                  link: \'').concat(this.$store.state.seoData.canonical, '\'\n                })\n              }];\n              try {\n                if (digitalData.user[0].profile[0].attributes.c1.hasAdFree) {\n                  settings.push({\n                    advertising: false\n                  });\n                }\n              } catch (e) {\n                settings.push({\n                  advertising: false\n                });\n                console.error(e);\n              }\n              var config = settings.reduce(function (current, next) {\n                return Object.assign(current, next);\n              }, {});\n              function defaultEventData (eventAction, jwEvent) {\n                return {\n                  eventAction: eventAction,\n                  eventNonInteractive: false\n                };\n              }\n              function createEventActionCallback(settings) {\n                var eventAction = settings[0];\n                var handleEventData = settings[1] || defaultEventData;\n                return function (jwEvent) {\n                  var event = digitalData.event || [];\n                  digitalData.event = event;\n                  var eventData = handleEventData(eventAction, jwEvent);\n                  if (eventData) {\n                    var item = player.getPlaylistItem();\n                    event.push({\n                      eventInfo: {\n                        eventName: \'Video Player Interaction\',\n                        eventAction: eventData.eventAction,\n                        eventPosition: player.getPosition(),\n                        eventValue: eventData.eventValue || \'\',\n                        eventNonInteractive: eventData.eventNonInteractive,\n                        type: \'video\',\n                        timeStamp: new Date(),\n                        componentID: item.mediaid,\n                        componentName: item.title\n                      },\n                      category: {\n                        primaryCategory: \'video player\',\n                        subCategory1: \'Single Player\'\n                      },\n                      attributes: {}\n                    });\n                  }\n                }\n              }\n              console.log(\'setting up jw\');\n              player\n                .setup(config)\n                .on(\'firstFrame\', function enableCaptions () {\n                  var captionsList = player.getCaptionsList();\n                  var caption = captionsList.find(function (caption) {\n                    return caption.id !== \'off\';\n                  });\n                  if (caption) {\n                    player.setCurrentCaptions(captionsList.indexOf(caption))\n                  }\n                })\n                .on(\'playlistItem\', function onJwReady(event) {\n                  var digitalData = window.digitalData || {};\n                  window.digitalData = digitalData;\n                  var component = digitalData.component || [];\n                  digitalData.component = component;\n                  var item = player.getPlaylistItem();\n                  if (!component.find(function (entry) {\n                    try {\n                      return entry.componentInfo.componentID === item.mediaid;\n                    } catch (e) {\n                      return false;\n                    }\n                  })) {\n                    component.push({\n                      componentInfo: {\n                        componentID: item.mediaid,\n                        componentName: item.title,\n                        componentSize: item.duration,\n                      },\n                      category: {\n                        primaryCategory: \'NZZ Video\',\n                        componentType: \'video\'\n                      }\n                    });\n                    createEventActionCallback([\'ready\', function (eventAction, jwEvent) {\n                      var data = defaultEventData(eventAction, jwEvent);\n                      data.eventNonInteractive = true;\n                      return data\n                    }])();\n                  }\n                });\n              var timePercentages = [.75, .5, .25];\n              var trackingEventActions = [\n                [\'play\'],\n                [\'pause\'],\n                [\'time\', function (eventAction, jwEvent) {\n                  var current = jwEvent.position / jwEvent.duration;\n                  if (current > timePercentages[timePercentages.length - 1]) {\n                    var eventValue = timePercentages.pop() * 100;\n                    var data = defaultEventData(eventAction, jwEvent);\n                    data.eventAction = \'progress\';\n                    data.eventValue = eventValue;\n                    return data;\n                  }\n                }],\n                [\'complete\', function (eventAction, jwEvent) {\n                  var data = defaultEventData(eventAction, jwEvent);\n                  data.eventNonInteractive = true;\n                  return data;\n                }],\n                [\'fullscreen\', function (eventAction, jwEvent) {\n                  var data = defaultEventData(eventAction, jwEvent);\n                  data.eventAction = jwEvent.fullscreen ? \'openFullscreen\' : \'closeFullscreen\';\n                  return data;\n                }]\n              ];\n              trackingEventActions.forEach(function (settings) {\n                if (settings[0]) {\n                  player.on(settings[0], createEventActionCallback(settings));\n                }\n              });\n              window[\'').concat(this.playerInstanceId, '\'] = player;\n            }).catch(function (error) {console.error(error)});\n          },\n          function() {\n            return window.').concat(this.scriptPromiseName, '\n          })\n        }, { once: true });\n        if (').concat(this.$store.state.isrendition ? 'true' : 'false', ') {\n          window.dispatchEvent(new window.CustomEvent(\'runJWscript\'));\n        }\n        '),
            body: !0,
            preserve: 'preserve'
          }
        ];
        return this.leavingPage ? {
        }
         : {
          script: script
        }
      },
      mounted: function () {
        var t = this;
        this.$nextTick((function () {
          t.monitorHeight(),
          t.monitorScripts()
        }))
      },
      methods: {
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
          t !== this.height && (this.$root.$emit('jwLoaded'), this.height = t)
        },
        monitorScripts: function () {
          var t = this;
          new MutationObserver((function (e) {
            var n,
            o = c(e);
            try {
              for (o.s(); !(n = o.n()).done; ) {
                var r,
                l,
                d;
                null !== (r = n.value.addedNodes[0]) && void 0 !== r && null !== (l = r.attributes['data-hid']) && void 0 !== l && null !== (d = l.value) && void 0 !== d && d.includes('jw-video-'.concat(t.componentId)) && (window.dispatchEvent(new window.CustomEvent('runJWscript')), t.observer.disconnect())
              }
            } catch (t) {
              o.e(t)
            } finally {
              o.f()
            }
          })).observe(window.document.body, {
            childList: !0
          }),
          window.document.querySelector('[data-hid="jw-video-'.concat(this.componentId, '"]')) && window.dispatchEvent(new window.CustomEvent('runJWscript'))
        }
      }
    },
    m = (n(1256), n(1258), n(1)),
    component = Object(m.a) (f, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.videoId ? n('LazyHydrate', {
        attrs: {
          'ssr-only': ''
        }
      }, [
        n('div', {
          staticClass: 'articlecomponent jw',
          class : {
            'articlecomponent--fullwidth': t.fullwidth
          }
        }, [
          n('div', {
            staticClass: 'video__placeholder video__placeholder--jw',
            class : {
              'video__placeholder--fullwidth': t.fullwidth
            }
          }, [
            n('div', {
              staticClass: 'videocomponent',
              attrs: {
                id: t.componentId
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
      ]) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  1536: function (t, e, n) {
    n(11).register({
      limmattalerzeitung: {
        width: 2479,
        height: 254,
        viewBox: '0 0 2479 254',
        data: '<path pid="0" d="M2429.1 205.9c12.3 0 20.1 4.5 20.1 16 0 19.7-21.5 28.2-43.5 28.2-23.8 0-41.6-11.5-41.6-30.1 0-6.7 1.9-11.5 5.2-14.5h59.8v.4zm50.1-6.7c0-23.8-16-34.9-46.4-34.9h-55.7c-5.9 0-8.5-3-8.5-7.4 0-5.2 3.3-10 7.4-13.4 8.9 3.3 18.9 4.8 28.2 4.8 32.7 0 59.8-17.5 59.8-46.8 0-12.3-7.4-22.7-17.8-30.1l26.7 6.3h1.9V59.9l-45.7 3c-7.4-2.6-15.2-3.7-22.7-3.7-32.7 0-59.8 17.8-59.8 46.8 0 18.2 11.9 30.1 27.5 36.4-15.6 6.7-29 17.8-29 35.3 0 14.9 11.1 23 22.3 27.5-13 1.1-28.6 8.2-28.6 21.2 0 18.2 29 27.5 62 27.5 46.9-.1 78.4-22.4 78.4-54.7zm-72.8-53.9c-11.5 0-17.5-19.3-17.5-45.7 0-22.3 3.7-36.8 15.2-36.8s17.5 19.3 17.5 45c.1 23-3.7 37.5-15.2 37.5zm-126.7 39c0 8.2-4.5 8.9-14.5 9.7v3.3h75V194c-10-.7-14.5-1.9-14.5-9.7v-83.6c0-25.6-13.4-41.2-37.5-41.2-21.2 0-39.4 16-47.2 27.9l1.1-27.9h-1.1L2180.4 74v1.1l14.1 14.1v95.5c0 8.2-4.1 8.9-14.1 9.7v3.3h75v-3.3c-10-.7-14.5-1.9-14.5-9.7V89.2c6.3-3 13-5.2 20.8-5.2 13 0 17.5 7.4 17.5 18.6v81.7h.5zm-120-92.9l1.1-32h-1.1l-59.8 11.9v2.6c11.5 3.3 13.4 7.4 13.4 16v81c-5.2 3.3-11.1 5.6-17.8 5.6-12.6 0-18.2-7.1-18.2-20.8V91.4l1.5-32h-1.1l-60.6 11.9v2.6c11.9 3.3 13.7 7.4 13.7 16v67.6c0 29 16 42.4 37.9 42.4 20.4 0 36-13.7 45-26.4l-.7 26.4h1.1l60.9-8.9v-2.6c-13-.4-14.5-4.1-14.5-13v-84h-.8zm-181.3-65h-1.9c-13.7 17.1-40.1 35.7-59.4 43.5v3.7h14.5v85.1c0 27.5 15.2 41.2 38.6 41.2 20.1 0 35.7-11.9 45-26l-1.1-1.1c-5.2 3.3-11.5 4.8-16.7 4.8-11.9 0-18.9-5.9-18.9-20.1V73.9h31.2v-9.7h-31.2V26.4h-.1zm-72 33.1h-1.1L1845.5 74v1.1l14.1 14.1v95.5c0 8.2-4.1 8.9-14.1 9.7v3.3h75v-3.3c-10-.7-14.5-1.9-14.5-9.7V59.5h.4zm-23.1-11.1c15.2 0 24.5-10.8 24.5-23.4 0-12.6-9.3-23-24.5-23s-24.5 10.4-24.5 23 9.3 23.4 24.5 23.4zm-101.4 14.8c13.4 0 18.9 19.7 18.9 46.4H1760c.4-24.5 7.4-46.4 21.9-46.4zm59.5 89.2l-1.1-.4c-9.3 12.3-23 17.5-37.5 17.5-26 0-42.7-19.3-43.1-54.6h81v-1.5c0-29.3-18.6-53.9-55-53.9s-67.6 32-67.6 73.6c0 42 28.6 67.2 64.3 67.2 30.7-.4 53.4-18.9 59-47.9zM1620.7 25.7h33.1L1559 195.1v2.2h143.8l9.3-59.8h-2.6c-17.8 40.1-33.1 55-55.7 55h-39.4l94.7-169v-2.6H1569l-1.1 50.9h3c12.2-36.5 26-46.1 49.8-46.1zm-171.1 79.8l1.1-46.4h-1.1L1389 73.6v1.1l14.1 14.1v95.5c0 8.2-4.1 8.9-14.1 9.7v3.3h80.6V194c-13.8-1.1-20.1-2.6-20.1-10.8v-74.7c10.8-7.8 25.3-8.5 41.6-8.5h5.9V62c-2.6-1.9-6.7-3.3-12.3-3.3-18 .4-29.1 19.3-35.1 46.8zm-123.3-42.3c13.4 0 18.9 19.7 18.9 46.4h-40.9c.8-24.9 7.9-46.4 22-46.4zm59.4 88.7l-1.1-.4c-9.3 12.3-23 17.5-37.5 17.5-26 0-42.7-19.3-43.1-54.6h81v-1.5c0-29.3-18.6-53.9-55-53.9s-67.6 32-67.6 73.6c0 42 28.6 67.2 64.3 67.2 31.1-.3 53.8-18.9 59-47.9zM1247.1 0h-1.1l-59.5 14.5v1.1l14.1 14.1v154.2c0 8.2-4.5 8.9-14.5 9.7v3.3h75.1v-3.3c-10-.7-14.5-1.9-14.5-9.7V0h.4zm-133.7 180.2c-11.9 0-18.6-11.1-18.6-27.9 0-16 5.9-22.7 16.7-27.1l11.9-4.8v56.1c-2.6 2.2-6.3 3.7-10 3.7zm55.4-77.3c0-32.7-21.2-43.8-56.1-43.8-28.6 0-55.3 12.3-55.3 33.8 0 8.9 5.6 15.2 12.3 17.5l29.3-3.7c-1.5-4.8-2.6-13.7-2.6-20.4 0-13.7 4.4-23.4 14.1-23.4s13 8.9 13 22.3v31.2l-35.7 12.3c-22.7 7.4-37.9 17.8-37.9 37.9 0 21.2 16.3 32.7 35.7 32.7 16.7 0 30.1-9.7 37.9-19.3 3.3 12.3 14.5 20.4 29.3 20.4 14.1 0 27.1-8.2 33.8-18.6l-1.1-1.1c-1.5.7-4.1 1.5-7.4 1.5-6 0-9.7-3.7-9.7-11.1v-68h.4v-.2zM1009 26.4h-1.9c-13.7 17.1-40.1 35.7-59.4 43.5v3.7h14.5v84.7c0 27.5 15.2 41.2 38.6 41.2 20.1 0 35.7-11.9 45-26l-1.1-1.1c-5.2 3.3-11.5 4.8-16.7 4.8-11.9 0-18.9-5.9-18.9-20.1V73.6h31.2v-9.7h-31.2V26.4h-.1zm-97.3 0h-1.9c-13.7 17.1-40.1 35.7-59.4 43.5v3.7h14.5v84.7c0 27.5 15.2 41.2 38.6 41.2 20.1 0 35.7-11.9 45-26l-1.1-1.1c-5.2 3.3-11.5 4.8-16.7 4.8-11.9 0-18.9-5.9-18.9-20.1V73.6H943v-9.7h-31.2V26.4h-.1zm-129 153.8c-11.9 0-18.6-11.1-18.6-27.9 0-16 5.9-22.7 16.7-27.1l11.9-4.8v56.1c-2.5 2.2-6.2 3.7-10 3.7zm55.8-77.3c0-32.7-21.2-43.8-56.1-43.8-28.6 0-55.4 12.3-55.4 33.8 0 8.9 5.6 15.2 12.3 17.5l29.3-3.7c-1.5-4.8-2.6-13.7-2.6-20.4 0-13.7 4.5-23.4 14.1-23.4 9.7 0 13 8.9 13 22.3v31.2l-35.6 12.1c-22.7 7.4-37.9 17.8-37.9 37.9 0 21.2 16.3 32.7 35.7 32.7 16.7 0 30.1-9.7 37.9-19.3 3.3 12.3 14.5 20.4 29.4 20.4 14.1 0 27.1-8.2 33.8-18.6l-1.1-1.1c-1.5.7-4.1 1.5-7.4 1.5-5.9 0-9.7-3.7-9.7-11.1v-68h.3zm-134.5 81v-83.6c0-25.6-13-41.2-36-41.2-20.8 0-37.9 16-45.7 27.9-4.1-17.5-16.7-27.9-35.7-27.9-21.2 0-37.9 16-45.7 27.9l1.1-27.9h-1.1l-60.2 14.5v1.1l14.1 14.1v95.5c0 8.2-4.1 8.9-14.1 9.7v3.3h73.9V194c-10-.7-13.4-1.9-13.4-9.7V88.8c5.9-3 11.5-5.2 18.9-5.2 11.9 0 16 7.4 16 18.6v81.7c0 8.2-3.3 8.9-13.4 9.7v3.3h73.2v-3.3c-10-.7-13-1.9-13-9.7V88.8c5.6-3 11.5-5.2 18.6-5.2 12.3 0 16.3 7.4 16.3 18.6v81.7c0 8.2-3.3 8.9-13.4 9.7v3.3h74.1v-3.3c-10.1-.4-14.5-1.5-14.5-9.7zm-244.1 0v-83.6c0-25.6-13-41.2-36-41.2-20.8 0-37.9 16-45.7 27.9-4.1-17.5-16.7-27.9-35.7-27.9-21.2 0-37.9 16-45.7 27.9l1.1-27.9h-1.1l-60.6 14.5v1.1l14.1 14.1v95.5c0 8.2-4.1 8.9-14.1 9.7v3.3h73.9V194c-10-.7-13.4-1.9-13.4-9.7V88.8c5.9-3 11.5-5.2 18.9-5.2 11.9 0 16 7.4 16 18.6v81.7c0 8.2-3.3 8.9-13.4 9.7v3.3h73.3v-3.3c-10-.7-13-1.9-13-9.7V88.8c5.6-3 11.5-5.2 18.6-5.2 12.3 0 16.3 7.4 16.3 18.6v81.7c0 8.2-3.3 8.9-13.4 9.7v3.3h73.9v-3.3c-9.9-.4-14-1.5-14-9.7zM214.7 59.1h-1.1l-59.8 14.5v1.1l14.1 14.1v95.5c0 8.2-4.1 8.9-14.1 9.7v3.3h75V194c-10-.7-14.5-1.9-14.5-9.7V59.1h.4zm-23-11.2c15.2 0 24.5-10.8 24.5-23.4 0-12.6-9.3-23-24.5-23s-24.5 10.4-24.5 23 9.2 23.4 24.5 23.4zm-47.6 149.4l9.3-59.8h-3c-17.8 40.1-33.1 55-55.7 55H88c-14.1 0-20.4-3.3-20.4-16.7V41.2c0-13 1.5-15.2 18.2-17.1v-3.7H0v3.7c17 1.9 18.5 4.1 18.5 17.1v134.9c0 13-1.5 15.2-18.2 17.1v3.7h143.8v.4z" _fill="#06c"/>'
      }
    })
  },
  154: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = {
      components: {
        jw: n(142).default
      },
      props: {
        data: {
          type: Object,
        default:
          function () {
            return {
              content: {
                article: {
                  content: {
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
      computed: {
        fullwidth: function () {
          try {
            return 'video--fullwidth' === this.data.styles['fullwidth-video']
          } catch (t) {
            return !1
          }
        }
      }
    },
    r = n(1),
    component = Object(r.a) (o, (function () {
      var t = this,
      e = t.$createElement;
      return (t._self._c || e) ('jw', {
        attrs: {
          data: t.data,
          content: t.content,
          fullwidth: t.fullwidth
        },
        on: {
          componentMounted: function (e) {
            return t.$emit('componentMounted')
          }
        }
      })
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  1546: function (t, e, n) {
    n(11).register({
      obwaldnerzeitung: {
        width: 267,
        height: 32,
        viewBox: '0 0 267 32',
        data: '<path pid="0" d="M256.819 30.81c-2.44 0-4.298-1.052-4.298-2.995 0-1.137.315-2.055 1.099-2.546.879.188 1.946.33 3.285.525 2.443.358 4.512.324 4.512 2.02 0 1.789-1.937 2.996-4.598 2.996zm-.322-22.48c1.575-.193 2.486 1.764 2.845 4.685.359 2.921-.053 5.04-1.627 5.234-1.575.193-2.487-1.763-2.845-4.685-.359-2.92.052-5.04 1.627-5.233zm1.874 13.378c-3.818-.355-4.536-1.222-4.536-1.222l2.556-1.457c.24.017.482.026.728.026 3.799 0 6.879-2.077 6.879-5.8 0-1.572-.686-3-1.864-4.047l2.216.168h1.315l.32-1.502h-6.201a8.408 8.408 0 00-2.665-.418c-4.053 0-6.879 2.603-6.879 5.8 0 2.861 1.821 4.749 4.388 5.47l-5.279 2.743c.825 1.984 1.613 2.887 2.926 3.41-1.745.456-3.276 1.622-3.276 3.278 0 2.507 3.025 3.843 7.26 3.843 4.235 0 9.781-2.082 9.781-6.533 0-3.299-5.371-3.545-7.669-3.759zm-92.413 2.486c6.675 0 7.681-.941 10.218-7.091h.786l-1.716 8.446c-2.594-.063-5.851-.223-8.382-.223l-8.901.005 12.106-21.813h-1.183c-7.083 0-6.685 1.018-9.461 7.096h-.786l1.536-8.446c2.594.064 5.311.223 7.842.223l8.436-.005-12.114 21.808h1.619zM194.136 3.97c-.268-1.37.761-2.744 2.294-3.04 1.505-.292 2.976.599 3.243 1.968.278 1.422-.745 2.824-2.251 3.115-1.533.296-3.009-.62-3.286-2.042zm.633 9.144c0-2.71-.027-2.945-1.806-2.945l-.16-.57 6.5-2.292v13.846c0 2.892.029 3.21 1.967 3.47v.703h-8.467v-.702c1.938-.26 1.966-.579 1.966-3.471v-8.04zM150.58 7.342c-3.385-.619-4.784 1.761-5.648 3.908l-.627-4.01-5.941 2.121.252.578c1.903 0 1.737.934 1.737 3.479v7.588c0 2.893-.029 3.21-1.967 3.471v.783h9.871v-.783c-3.212-.369-3.218-.578-3.218-3.47v-8.794c1.385-2.497 3.272-1.588 6.348 2.13l.72-.323-1.527-6.678zm-20.416.605c1.955 0 2.603 2.545 2.384 5.148h-5.392c.075-2.631.79-5.148 3.008-5.148zm2.241 13.515c-3.204 0-5.124-3.185-5.25-7.437h9.841c.168-3.437-1.535-6.841-6.202-6.841-4.587 0-7.213 4.061-7.213 9.255 0 5.044 2.784 9.133 7.145 9.133 3.245 0 5.767-2.887 6.579-6.823l-.616-.2c-.875 1.805-2.375 2.913-4.284 2.913zm-11.535-.456V12.95c0-2.964-1.552-5.71-4.87-5.71-2.93 0-3.834 1.619-4.682 3.208l-.451-3.209-6.014 2.12.245.578c1.818 0 1.738.176 1.738 3.48v7.589c0 2.892-.03 3.21-1.967 3.47v.783h8.141v-.783c-1.62-.26-1.65-.578-1.65-3.47v-9.798c1.706-2.186 4.979-1.36 4.979 2.754v7.044c0 2.892-.029 3.21-1.967 3.47v.783h8.147v-.783c-1.62-.26-1.649-.578-1.649-3.47zm109.761 2.433l-.115-.526c-1.752 0-1.875-.642-1.883-4.322V7.307l-6.404 2.263.157.572c1.786.014 1.738.253 1.718 2.51l.001 8.81c-.437.758-1.298 1.427-2.318 1.427-1.516 0-2.66-1.354-2.66-3.965V7.307l-6.416 2.263.156.572c1.813.014 1.752.253 1.733 2.798v6.922c-.022 2.964 1.509 5.826 4.828 5.826 2.16 0 4.174-1.615 5.037-3.413l.449 3.22 5.717-2.056zM184.816 8.013c1.956 0 2.604 2.546 2.384 5.149h-5.392c.075-2.632.79-5.149 3.008-5.149zm6.524 10.603c-.873 1.804-2.374 2.913-4.283 2.913-3.204 0-5.124-3.186-5.249-7.438h9.839c.169-3.436-1.533-6.841-6.2-6.841-4.587 0-7.213 4.062-7.213 9.255 0 5.045 2.783 9.134 7.144 9.134 3.245 0 5.767-2.887 6.579-6.824l-.617-.199zm55.745 2.457v-8.055c0-2.964-1.551-5.711-4.87-5.711-2.93 0-3.834 1.62-4.682 3.209l-.451-3.21-6.014 2.121.246.578c1.818 0 1.737.175 1.737 3.48v7.588c0 2.892-.029 3.21-1.967 3.47v.784h8.141v-.783c-1.62-.26-1.649-.579-1.649-3.47v-9.798c1.705-2.186 4.978-1.36 4.978 2.754v7.043c0 2.892-.029 3.21-1.967 3.47v.784h8.147v-.783c-1.62-.26-1.649-.579-1.649-3.47zm-34.121 1.025c-.833.728-1.572 1-2.5 1-1.32 0-2.114-1.27-2.114-3.356V9.282h3.515l.32-1.502h-3.835V2.367h-.558c-1.458 3.021-3.547 5.119-6.466 6.173l-.176.742h2.605V21.11c0 3.038 2.012 4.58 4.321 4.58 2.317 0 4.026-1.19 5.3-3.108l-.412-.483zm-144.957.706c-1.102 0-2-.773-2-2.56 0-2.49 2.26-5.365 4.353-5.988v6.73c-.56.913-1.402 1.818-2.353 1.818zm9.41.144c-1.742.876-2.58.191-2.58-2.444v-7.58c0-3.516-2.103-5.702-5.954-5.702-4.439 0-6.59 2.696-6.99 5.455l3.3.928s-.531-5.273 2.482-5.273c1.916 0 2.685 1.92 2.685 4.038v.683c-2.719 1.321-8.88 4.664-8.88 8.602-.023 2.332 1.636 3.948 4.376 3.948 2.38 0 3.9-1.953 4.823-3.777.018 2.335 1.302 3.61 3.182 3.61 1.408 0 2.87-.829 3.89-1.947l-.334-.541z" _fill="#2e74b5"/><path pid="1" d="M79.585 21.086V5.876c0-2.609-.017-3.03-1.727-3.03l-.24-.565L84.117 0v21.086c0 2.892.028 3.21 1.967 3.47v.703h-8.466v-.702c1.938-.26 1.967-.579 1.967-3.471zm15.818 1.238c-1.849 0-3.308-2.817-3.673-6.14-.522-4.76.633-8.25 2.484-8.25 1.652 0 3.444 1.928 3.444 8.084v-.009 4.934c-.459.838-1.106 1.38-2.255 1.38zm8.696 1.221l-.116-.526c-1.751 0-1.873-.642-1.882-4.321V.362l-6.499 2.28.24.567c1.71 0 1.727.42 1.727 3.029a19.3 19.3 0 00.17 2.443c-1.162-1.297-2.44-1.656-3.81-1.656-3.467 0-6.654 3.463-6.654 9.978 0 4.422 2.488 8.618 5.806 8.618 2.353 0 4.008-1.912 4.796-3.654l.506 3.635 5.716-2.057zM56.975 7.59v.652c1.417.46 2.024.624 1.243 4.171l-1.764 7.869-2.65-8.712c-.592-1.988-.462-2.868 1.156-3.328V7.59h-6.768v.62l.496 1.867-2.08 9.928-1.842-9.102c-.387-1.847-.216-2.266 1.78-2.66V7.59h-8.837v.652c1.33.427 1.562.953 1.88 2.266l3.644 14.752h3.347l2.696-12.97 3.445 12.97h3.587l3.239-13.963c.55-2.43.868-2.595 2.487-3.055V7.59h-5.06zM11.188 24.58c-2.722.334-4.995-3.655-5.797-10.189-.802-6.534.438-10.954 3.16-11.288 2.721-.335 4.994 3.654 5.796 10.188.802 6.535-.438 10.955-3.16 11.289zM9.869 1.924C3.342 1.924 0 7.017 0 13.841c0 6.825 3.342 11.917 9.869 11.917 6.527 0 9.869-5.092 9.869-11.917 0-6.824-3.342-11.917-9.869-11.917zM30.46 24.791c-1.651 0-3.443-1.95-3.443-8.105V11.32c.51-.899 1.057-1.777 2.097-1.777 1.974 0 3.363 2.662 3.83 7.192.502 4.867-.633 8.056-2.484 8.056zm1.47-17.709c-2.49 0-4.06 1.528-4.996 2.98l.169-2.218V0l-6.499 2.28.24.567c1.71 0 1.727.42 1.727 3.029v19.63h.747l3.036-1.865c1.395 1.648 2.975 2.038 4.393 2.038 3.24 0 6.653-4.037 6.653-9.906 0-4.97-1.913-8.69-5.47-8.69z" _fill="#2e74b5"/>'
      }
    })
  },
  1553: function (t, e, n) {
    n(11).register({
      'limmattalerzeitung--mobile': {
        width: 416,
        height: 204,
        viewBox: '0 0 416 204',
        data: '<path pid="0" d="M74.424 51.259c0-13.203 1.033-15.533 17.83-17.345v-11.65H0v11.65c16.797 1.812 17.83 4.142 17.83 17.345v123.746c0 13.203-1.033 15.533-17.83 17.345V204h151.431l10.079-63.944h-12.146c-25.066 41.939-34.628 51-50.65 51h-5.426c-13.438 0-18.864-3.366-18.864-17.345V51.259zm161.562 9.579h-9.303L169.056 76.37v8.025l13.696 8.802v90.609c0 7.767-4.135 8.543-13.696 9.32V204h80.626v-10.873c-9.562-.777-13.696-1.553-13.696-9.32V60.837zm-25.842-9.58c17.056 0 27.392-11.908 27.392-25.629C237.536 11.91 227.2 0 210.144 0c-17.314 0-27.392 11.909-27.392 25.63 0 13.72 10.078 25.629 27.392 25.629zm112.31 139.798L410.573 32.36V22.264H266.119l-2.584 57.99h11.629c15.505-33.914 19.898-45.046 44.964-45.046h25.066l-87.603 158.696V204h148.848L416 142.127h-12.404c-22.999 40.386-32.302 48.929-54.009 48.929h-27.133z" _fill="#fff"/>'
      }
    })
  },
  1560: function (t, e, n) {
    n(11).register({
      'obwaldnerzeitung--mobile': {
        width: 29,
        height: 16,
        viewBox: '0 0 29 16',
        data: '<path pid="0" d="M20.677 14.929c4.432 0 5.1-.625 6.785-4.709h.522l-1.14 5.608c-1.722-.041-3.885-.147-5.565-.147l-5.91.003 8.038-14.485h-.786c-4.703 0-4.439.676-6.282 4.713h-.522l1.02-5.609c1.723.042 3.527.148 5.207.148l5.602-.003-8.044 14.48h1.075zm-12.979.256c-1.807.222-3.316-2.427-3.849-6.766-.532-4.338.291-7.274 2.098-7.496C7.755.702 9.264 3.35 9.797 7.69c.532 4.339-.291 7.274-2.099 7.496zM6.823.141C2.489.141.27 3.523.27 8.054c0 4.532 2.219 7.913 6.553 7.913s6.553-3.381 6.553-7.913c0-4.531-2.22-7.913-6.553-7.913z" _fill="#2e74b5"/>'
      }
    })
  },
  166: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = {
      components: {
        PageGallery: function () {
          return n.e(1).then(n.bind(null, 404))
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
        size: {
          type: String,
        default:
          'page-gallery-embed'
        }
      }
    },
    r = n(1),
    component = Object(r.a) (o, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', {
        staticClass: 'widget--gallery widget--article'
      }, [
        n('PageGallery', {
          attrs: {
            data: t.data
          }
        })
      ], 1)
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  174: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = {
      name: 'ArticleAdvertisementRecommendations',
      props: {
        data: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        },
        adnzzId: {
          type: String,
        default:
          ''
        }
      },
      data: function () {
        return {
          hydrated: 0
        }
      },
      computed: {
        allowAd: function () {
          return !!this.$store.state.features.advertisements
        },
        audienzzRecommendationsId: function () {
          return this.adnzzId && '' !== this.adnzzId ? this.adnzzId : 'adnz_business-click_1'
        }
      },
      mounted: function () {
        this.hydrated = 1
      }
    },
    r = n(1),
    component = Object(r.a) (o, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.allowAd ? n('div', {
        staticClass: 'resor resor--billboard'
      }, [
        n('div', {
          staticClass: 'resor__item',
          attrs: {
            id: t.audienzzRecommendationsId,
            'data-hydrated': t.$store.state.isrendition.indexOf('webview') > - 1 ? 1 : t.hydrated
          }
        })
      ]) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  181: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = {
      name: 'ArticleBarrier',
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
    r = n(1),
    component = Object(r.a) (o, (function () {
      var t = this,
      e = t.$createElement;
      t._self._c;
      return t._m(0)
    }), [
      function () {
        var t = this.$createElement,
        e = this._self._c || t;
        return e('div', [
          e('div', {
            attrs: {
              id: 'paywall_container'
            }
          })
        ])
      }
    ], !1, null, null, null);
    e.default = component.exports
  },
  185: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = {
      name: 'ArticleCaptionDepricated',
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
        titleHtml: function () {
          return '\n        '.concat(this.data.content.caption, '\n      ')
        }
      }
    },
    r = (n(858), n(1)),
    component = Object(r.a) (o, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.data.content && t.data.content.caption ? n('h2', {
        staticClass: 'subtitle articlecomponent'
      }, [
        n('span', {
          domProps: {
            innerHTML: t._s(t.titleHtml)
          }
        })
      ]) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  193: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = {
      name: 'ArticleIframe',
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
    r = (n(1319), n(1)),
    component = Object(r.a) (o, (function () {
      var t = this,
      e = t.$createElement;
      return (t._self._c || e) ('div', {
        staticClass: 'articlecomponent iframe',
        domProps: {
          innerHTML: t._s(t.data.content.iframe.html || t.data.content.iframe)
        }
      })
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  199: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = {
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
    r = (n(1331), n(1)),
    component = Object(r.a) (o, (function () {
      var t = this,
      e = t.$createElement;
      return (t._self._c || e) ('p', {
        staticClass: 'articlecomponent question',
        attrs: {
          'data-team-question': ''
        },
        domProps: {
          innerHTML: t._s(t.data.content.text)
        }
      })
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  208: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = {
      name: 'TwitterEmbed',
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
    r = (n(1347), n(1)),
    component = Object(r.a) (o, (function () {
      var t = this,
      e = t.$createElement;
      return (t._self._c || e) ('div', {
        staticClass: 'articlecomponent articlecomponent--narrow tweet',
        domProps: {
          innerHTML: t._s(t.data.content.tweet.html || t.data.content.tweet)
        }
      })
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  247: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = {
      extends : n(117).default
    },
    r = n(1),
    component = Object(r.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  317: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = n(20),
    r = {
      name: 'BaseListWidgetWebview',
      components: {
        WidgetTitle: n(41).default,
        SimpleArticle: function () {
          return n.e(2).then(n.bind(null, 322))
        },
        ListNotPaged: function () {
          return n.e(1).then(n.bind(null, 543))
        },
        QembedWidget: function () {
          return Promise.all([n.e(0),
          n.e(3)]).then(n.bind(null, 431))
        },
        SportWidget: function () {
          return n.e(1).then(n.bind(null, 150))
        },
        IdmsWidget: function () {
          return n.e(5).then(n.bind(null, 151))
        },
        MarketIframe: function () {
          return n.e(1).then(n.bind(null, 430))
        },
        AdvertisementNative: function () {
          return n.e(11).then(n.bind(null, 80))
        },
        WidgetNewsticker: function () {
          return n.e(2).then(n.bind(null, 547))
        },
        Iframe: function () {
          return n.e(1).then(n.bind(null, 137))
        }
      },
      extends : o.default
    },
    c = n(1),
    component = Object(c.a) (r, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  318: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = n(20),
    r = {
      name: 'BaseListWidgetWebview',
      components: {
        WidgetTitle: n(41).default,
        SimpleArticle: function () {
          return n.e(2).then(n.bind(null, 321))
        },
        ListNotPaged: function () {
          return n.e(1).then(n.bind(null, 589))
        },
        QembedWidget: function () {
          return Promise.all([n.e(0),
          n.e(3)]).then(n.bind(null, 441))
        },
        SportWidget: function () {
          return n.e(1).then(n.bind(null, 150))
        },
        IdmsWidget: function () {
          return n.e(5).then(n.bind(null, 151))
        },
        MarketIframe: function () {
          return n.e(1).then(n.bind(null, 440))
        },
        AdvertisementNative: function () {
          return n.e(11).then(n.bind(null, 80))
        },
        WidgetNewsticker: function () {
          return n.e(2).then(n.bind(null, 593))
        },
        Iframe: function () {
          return n.e(1).then(n.bind(null, 137))
        }
      },
      extends : o.default
    },
    c = n(1),
    component = Object(c.a) (r, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  365: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = n(6),
    r = n.n(o),
    c = n(14),
    l = n.n(c),
    d = n(19),
    f = {
      scroll: [
      ],
      resize: [
      ]
    },
    m = {
      name: 'HeaderTop',
      data: function () {
        return {
          border: !1,
          minHeight: 56,
          transition: !0,
          onPosition: !1,
          disableFixedPosition: !1
        }
      },
      computed: {
        header: function () {
          return {
            HEIGHT_FULL: 136,
            HEIGHT_TABLET: 120,
            HEIGHT_REDUCED: 56
          }
        },
        isArticle: function () {
          return 'Article' === this.$store.state.header.pageType
        },
        scrollDown: function () {
          var t = d.store.delayedScrollUp,
          e = d.store.delayedScrollDown;
          return 0 !== window.scrollY && (e || !e && !t)
        },
        scrollUp: function () {
          return d.store.delayedScrollUp
        },
        isMobileBreakpoint: function () {
          return d.store.isMobileBreakpoint
        },
        isTabletBreakpoint: function () {
          return d.store.isTabletBreakpoint
        },
        isLongformVisual: function () {
          return 'longformvisual' === this.$store.state.metadata.layout
        },
        fixed: function () {
          return d.store.fixedHeader
        }
      },
      mounted: function () {
        this.updateMinHeight(),
        f.scroll.push(this.updatePosition),
        f.resize.push(l() (this.updatePosition, 250, {
          trailing: !0,
          leading: !0
        })),
        f.resize.push(l() (this.updateMinHeight, 250, {
          trailing: !0,
          leading: !0
        })),
        Object.entries(f).forEach((function (t) {
          var e = r() (t, 2),
          n = e[0];
          e[1].forEach((function (t) {
            t(),
            window.addEventListener(n, t)
          }))
        }))
      },
      updated: function () {
        this.updatePosition(),
        this.updateMinHeight()
      },
      destroyed: function () {
        Object.entries(f).forEach((function (t) {
          var e = r() (t, 2),
          n = e[0];
          e[1].forEach((function (t) {
            return window.removeEventListener(n, t)
          }))
        })),
        f.scroll = [
        ],
        f.resize = [
        ]
      },
      created: function () {
        this.isMobileBreakpoint && this.isArticle ? d.store.fixedHeader = !0 : d.store.fixedHeader = !1
      },
      methods: {
        updateMinHeight: function () {
          return this.isMobileBreakpoint && this.isArticle ? this.minHeight = 56 : this.isMobileBreakpoint ? this.minHeight = 112 : this.isArticle ? this.minHeight = 56 : this.isTabletBreakpoint ? this.minHeight = 176 : this.minHeight = 192
        },
        updatePosition: function () {
          var t = this;
          this.onPosition = this.$el.getBoundingClientRect().bottom < - 56;
          var e = window.pageYOffset,
          n = this.$el.getBoundingClientRect().top;
          if (this.isMobileBreakpoint) {
            var o = 56;
            window.requestAnimationFrame((function () {
              d.store.fixedHeader && e < o || o + t.$el.offsetTop + 4 < e ? t.transition = !0 : t.transition = !1
            })),
            n <= 0 || n < - 56 && !d.store.fixedHeader ? d.store.fixedHeader = !0 : (n >= o && d.store.fixedHeader || e < this.$el.offsetTop) && (d.store.fixedHeader = !1),
            this.isArticle || (!this.border && o <= e && (this.border = !0), this.border && o > e && (this.border = !1))
          } else {
            this.border && (this.border = !1);
            var r = this.isTabletBreakpoint ? this.header.HEIGHT_TABLET : this.header.HEIGHT_FULL;
            this.isArticle && (r = 0),
            0 === e && d.store.fixedHeader ? d.store.fixedHeader = !1 : n + r < 0 && !d.store.fixedHeader ? d.store.fixedHeader = !0 : n + r >= 0 && d.store.fixedHeader && (d.store.fixedHeader = !1)
          }
        }
      }
    },
    h = (n(1166), n(1)),
    component = Object(h.a) (m, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', {
        staticClass: 'header__stay-on-top--wrapper',
        style: {
          'min-height': t.minHeight + 'px'
        }
      }, [
        n('div', {
          staticClass: 'header__stay-on-top',
          class : {
            'header__stay-on-top--fixed': !t.disableFixedPosition && t.fixed && (t.isArticle || !t.isMobileBreakpoint),
            'header__stay-on-top--article': t.isArticle,
            'header__stay-on-top--visual': t.isLongformVisual,
            'header__stay-on-top--scroll-down': t.isArticle && t.isMobileBreakpoint && t.scrollDown && t.onPosition,
            'header__stay-on-top--transition': t.scrollUp || t.transition,
            'pageholder--centered': t.$store.getters.knownUser.adFree
          }
        }, [
          t._t('default', null, {
            border: t.border
          })
        ], 2)
      ])
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  376: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = {
      name: 'PageTitle',
      functional: !0,
      props: {
        data: {
          type: Object,
        default:
          function () {
            return {
              title: ''
            }
          }
        }
      },
      render: function (t, e) {
        return t('h1', {
          class : 'page-title'
        }, [
          t('span', {
            class : 'page-title__title'
          }, e.props.data.title)
        ])
      }
    },
    r = (n(1395), n(1)),
    component = Object(r.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  415: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = n(98),
    r = n(114),
    c = n(115);
    n.e(5).then(n.t.bind(null, 1566, 7));
    var l = {
      name: 'ArticleInfobox',
      components: {
        infoimg: o.default,
        enumerationRegular: r.default,
        enumerationNumeric: c.default
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
          closed: !!(this.data.content && this.data.content.title && this.data.styles)
        }
      },
      head: function () {
        if (this.data.content && this.data.content.title || this.data.containers) return {
          script: [
            {
              hid: 'amp-accordion',
              preserve: 'preserve',
              type: 'text/javascript',
              async: !0,
              src: 'https://cdn.ampproject.org/v0/amp-accordion-0.1.js',
              'custom-element': 'amp-accordion'
            }
          ]
        }
      }
    },
    d = (n(846), n(1138), n(1)),
    component = Object(d.a) (l, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.data.content || t.data.containers ? n('amp-accordion', {
        attrs: {
          'expand-single-section': ''
        }
      }, [
        n('section', {
          staticClass: 'articlecomponent infobox',
          attrs: {
            expanded: !!t.closed || !(t.data.content && t.data.content.title)
          }
        }, [
          t.data.content && t.data.content.title ? n('h2', {
            staticClass: 'infobox__title'
          }, [
            n('span', {
              domProps: {
                innerHTML: t._s(t.data.content.title.replace(/(\u00a0|&nbsp;)/g, ' '))
              }
            }),
            t._v(' '),
            n('svgicon', {
              staticClass: 'infobox__icon',
              attrs: {
                name: 'ico_chevron_down_48',
                width: '40',
                height: '40',
                color: '#05032D',
                fill: !1
              }
            })
          ], 1) : n('h2', {
            staticClass: 'infobox-no-title'
          }),
          t._v(' '),
          t.data.containers ? n('div', {
            staticClass: 'infobox__body'
          }, [
            n('div', {
              ref: 'infobox'
            }, [
              t._l(t.data.containers.infobox, (function (e) {
                return [e.identifier.includes('paragraph') && e.content && e.content.text ? n('p', {
                  key: 'item-' + e.id,
                  staticClass: 'articlecomponent infobox__text',
                  domProps: {
                    innerHTML: t._s(e.content.text)
                  }
                }) : t._e(),
                t._v(' '),
                e.identifier.includes('subhead') ? n('h2', {
                  key: 'item-' + e.id,
                  staticClass: 'infobox__subtitle',
                  domProps: {
                    innerHTML: t._s(e.content.title.replace(/(\u00a0|&nbsp;)/g, ' '))
                  }
                }) : t._e(),
                t._v(' '),
                e.identifier.includes('image') ? n('infoimg', {
                  key: 'item-' + e.id,
                  attrs: {
                    data: e
                  }
                }) : t._e(),
                t._v(' '),
                e.identifier.includes('enumeration-regular') ? n('enumerationRegular', {
                  key: 'item-' + e.id,
                  attrs: {
                    data: e
                  }
                }) : t._e(),
                t._v(' '),
                e.identifier.includes('enumeration-numeric') ? n('enumerationNumeric', {
                  key: 'item-' + e.id,
                  attrs: {
                    data: e
                  }
                }) : t._e()]
              }))
            ], 2)
          ]) : t._e()
        ])
      ]) : t._e()
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  417: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = n(773),
    r = {
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
        fullwidth: {
          type: Boolean,
        default:
          function () {
            try {
              return 'articlecomponent--fullwidth' === this.data.styles['fullwidth-component']
            } catch (t) {
              return !1
            }
          }
        }
      },
      computed: {
        video: function () {
          try {
            return this.data.content.article.content.playlist[0] || {
            }
          } catch (t) {
            return {
            }
          }
        },
        videoId: function () {
          return this.video.mediaid
        },
        playerScriptId: function () {
          return this.data.content.playerScriptId || 'lCzzKF5G'
        }
      },
      head: function () {
        return {
          script: [
            {
              hid: 'jw-video-'.concat(this.videoId, '-ld+json'),
              type: 'application/ld+json',
              preserve: 'preserve',
              innerHTML: Object(o.b) (this.video, ''.concat(this.$store.state.metadata.seo.canonicalUrl, '#').concat(this.videoId))
            },
            {
              hid: 'amp-jwplayer',
              preserve: 'preserve',
              type: 'text/javascript',
              async: !0,
              src: 'https://cdn.ampproject.org/v0/amp-jwplayer-0.1.js',
              'custom-element': 'amp-jwplayer'
            }
          ]
        }
      }
    },
    c = n(1),
    component = Object(c.a) (r, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.videoId ? n('div', {
        staticClass: 'articlecomponent',
        class : {
          'articlecomponent--fullwidth': t.fullwidth
        }
      }, [
        n('amp-jwplayer', {
          attrs: {
            'data-player-id': t.playerScriptId,
            'data-media-id': t.videoId,
            layout: 'responsive',
            width: '16',
            height: '9'
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
  424: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = {
      name: 'TwitterEmbed',
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
        if (this.tweetid) return {
          script: [
            {
              hid: 'amp-twitter',
              preserve: 'preserve',
              type: 'text/javascript',
              async: !0,
              src: 'https://cdn.ampproject.org/v0/amp-twitter-0.1.js',
              'custom-element': 'amp-twitter'
            }
          ]
        }
      },
      computed: {
        tweetid: function () {
          try {
            var t = (this.data.content.tweet.html || this.data.content.tweet).match(/href="https:\/\/twitter.com.*status(es)?\/(\d+)\/?/);
            return !(!t || !t[2]) && t[2]
          } catch (t) {
            return !1
          }
        },
        cards: function () {
          try {
            var t = (this.data.content.tweet.html || this.data.content.tweet).match(/data-cards="([^>|\s]+)"/);
            return !(!t || !t[1]) && t[1]
          } catch (t) {
            return !1
          }
        },
        conversation: function () {
          try {
            var t = (this.data.content.tweet.html || this.data.content.tweet).match(/data-conversation="([^>|\s]+)"/);
            return !(!t || !t[1]) && t[1]
          } catch (t) {
            return !1
          }
        }
      }
    },
    r = n(1),
    component = Object(r.a) (o, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', {
        staticClass: 'articlecomponent articlecomponent--narrow tweet'
      }, [
        n('amp-twitter', {
          attrs: {
            width: '400',
            height: '400',
            layout: 'responsive',
            'data-tweetid': t.tweetid,
            'data-cards': t.cards,
            'data-conversation': t.conversation
          }
        })
      ], 1)
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  490: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = n(102);
    n.e(5).then(n.t.bind(null, 1565, 7));
    var r = {
      extends : o.default,
      data: function () {
        return {
          durationClient: 0,
          uniqueId: Date.now().toString(36)
        }
      },
      computed: {
        mediaId: function () {
          return ''.concat(this.data.id.split('-') [1], '-').concat(this.uniqueId)
        },
        isAmp: function () {
          return !0
        },
        audioTag: function () {
          return 'amp-audio'
        },
        imageType: function () {
          return 'fragment'
        },
        isLightbox: function () {
          return !1
        }
      },
      head: function () {
        if (this.audioUrl) return {
          script: [
            {
              hid: 'amp-audio',
              preserve: 'preserve',
              type: 'text/javascript',
              async: !0,
              src: 'https://cdn.ampproject.org/v0/amp-audio-0.1.js',
              'custom-element': 'amp-audio'
            }
          ]
        }
      }
    },
    c = n(1),
    component = Object(c.a) (r, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  491: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = {
      extends : n(98).default,
      computed: {
        imageTag: function () {
          return 'amp-img'
        },
        layoutAttribute: function () {
          return 'responsive'
        },
        isLightbox: function () {
          return this.$store.state.rendition.lightbox ? ''.concat(this.data.id ? this.data.id : this.$parent.data.id, '-aboPart') : (this.$store.commit('setLightboxGroup', this.data.id), ''.concat(this.data.id ? this.data.id : this.$parent.data.id, '-guestPart'))
        }
      }
    },
    r = n(1),
    component = Object(r.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  497: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = {
      extends : n(117).default
    },
    r = (n(1162), n(1)),
    component = Object(r.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  498: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = {
      extends : n(365).default,
      data: function () {
        return {
          disableFixedPosition: !0
        }
      }
    },
    r = (n(1168), n(1)),
    component = Object(r.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  504: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = {
      extends : n(102).default,
      computed: {
        onclickPlayInline: function () {
          var t = this.data.content.audiosrc.replace(/&amp;/g, '&');
          return 'window.vamp.playMp3(\''.concat(t, '\', \'').concat(this.data.content.audioname, '\')')
        },
        imageType: function () {
          return 'fragment'
        }
      }
    },
    r = (n(774), n(1)),
    component = Object(r.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  506: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = {
      name: 'FreeHtmlWebview',
      extends : n(119).default,
      computed: {
        content: function () {
          return {
            html: this.data.content['free-html'].html || this.data.content['free-html']
          }
        },
        scripts: function () {
          var t = this,
          e = this.content.html.match(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi);
          return e ? e.map((function (script, e) {
            var n = {
              hid: 'free-html-'.concat(e, '-').concat(t.data.id),
              type: 'text/javascript',
              defer: 'defer',
              async: 'async',
              preserve: 'preserve',
              body: !0
            };
            return script.match(/<script[^>]*src=[^>]*>(.*?)/gi) ? n.src = script.replace(/<.*src="/, '').replace(/".*/, '') : n.innerHTML = script.replace(/<script(.*?)>/, '').replace(/<\/script>/, ''),
            n.src || n.innerHTML ? n : [
            ]
          })) : [
          ]
        }
      },
      head: function () {
        return {
          script: this.scripts
        }
      }
    },
    r = n(1),
    component = Object(r.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  508: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = {
      extends : n(98).default,
      computed: {
        webviewClick: function () {
          return '\n        window.vamp.navigateToGallery({\n          images: ['.concat(JSON.stringify(this.data.content.webviewImage), '],\n          selectedImage: 0,\n          sharingUrl: \'').concat(this.$store.getters.getSeoData.canonical, '\',\n          articleTitle: \'').concat(this.$store.getters.getSeoData.title.replace(/'/g, '\\\''), '\'\n        });\n      ')
        },
        webviewSettings: function () {
          return !1
        }
      }
    },
    r = (n(775), n(1174), n(1)),
    component = Object(r.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  529: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = {
      name: 'Widget1of2TopWebview',
      extends : n(317).default,
      data: function () {
        return {
          baseClass: 'widget--1of2 widget--1of2-top',
          tid: 'widget-1of2-top',
          teaserSize: '1of2-top',
          sourceElem: 'Widget-Halbe-Breite-Toplayout'
        }
      }
    },
    r = n(1),
    component = Object(r.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  530: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = {
      name: 'Widget1of2Webview',
      extends : n(317).default,
      data: function () {
        return {
          baseClass: 'widget--1of2',
          tid: 'widget-1of2',
          teaserSize: '1of2',
          sourceElem: 'Widget-1/2-Breite'
        }
      }
    },
    r = n(1),
    component = Object(r.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  532: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = {
      name: 'Widget1of3CompactWebview',
      extends : n(317).default,
      data: function () {
        return {
          baseClass: 'widget--1of3 widget--1of3--compact',
          tid: 'widget-1of3',
          teaserSize: '1of3-compact',
          sourceElem: 'Ressortkachel'
        }
      }
    },
    r = n(1),
    component = Object(r.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  533: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = {
      name: 'Widget1of3Webview',
      extends : n(317).default,
      data: function () {
        return {
          baseClass: 'widget--1of3',
          tid: 'widget-1of3',
          teaserSize: '1of3',
          sourceElem: 'Widget-Liste-klein'
        }
      }
    },
    r = n(1),
    component = Object(r.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  535: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = {
      name: 'Widget2of3PageWidget',
      extends : n(317).default,
      data: function () {
        return {
          baseClass: 'widget--2of3',
          tid: 'widget-2of3',
          teaserSize: '2of3',
          sourceElem: 'Widget-2/3-Breite'
        }
      }
    },
    r = n(1),
    component = Object(r.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  538: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = {
      name: 'Widget3of3TopWebview',
      extends : n(317).default,
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
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          },
          e = 'widget--3of3';
          return Object.entries(t).forEach((function (style) {
            e = e + ' ' + style[1]
          })),
          e
        }
      }
    },
    r = n(1),
    component = Object(r.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  539: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = {
      name: 'Widget3of3Webview',
      extends : n(317).default,
      data: function () {
        return {
          baseClass: 'widget--3of3',
          tid: 'widget-3of3',
          teaserSize: '3of3',
          sourceElem: 'Widget-Volle-Breite'
        }
      }
    },
    r = n(1),
    component = Object(r.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  540: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = {
      name: 'WidgetArticleExternderWebview',
      extends : n(317).default,
      data: function () {
        return {
          baseClass: 'widget--extender',
          tid: 'widget-extender',
          teaserSize: 'extender',
          sourceElem: 'Widget-Extender'
        }
      }
    },
    r = n(1),
    component = Object(r.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  546: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = {
      name: 'WidgetNewsWebview',
      extends : n(317).default,
      data: function () {
        return {
          baseClass: 'widget--news',
          tid: 'widget-news',
          teaserSize: '1of3-news',
          sourceElem: 'Widget-Nachrichten-des-Tages'
        }
      }
    },
    r = n(1),
    component = Object(r.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  551: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = {
      extends : n(102).default,
      computed: {
        onclickPlayInline: function () {
          var t = this.data.content.audiosrc.replace(/&amp;/g, '&');
          return 'window.vamp.playMp3(\''.concat(t, '\', \'').concat(this.data.content.audioname, '\')')
        },
        imageType: function () {
          return 'fragment'
        }
      }
    },
    r = (n(774), n(1)),
    component = Object(r.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  553: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = {
      name: 'FreeHtmlWebview',
      extends : n(119).default,
      computed: {
        content: function () {
          return {
            html: this.adjustHtml(this.data.content['free-html'].html || this.data.content['free-html'])
          }
        },
        scripts: function () {
          var t = this,
          html = this.content.html,
          e = html.match(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi);
          return e ? e.map((function (script, e) {
            if (script.indexOf('telegram') > - 1 && html.indexOf('data-telegram-post=') > - 1) return [];
            var n = {
              hid: 'free-html-'.concat(e, '-').concat(t.data.id),
              type: 'text/javascript',
              defer: 'defer',
              async: 'async',
              preserve: 'preserve',
              body: !0
            };
            return script.match(/<script[^>]*src=[^>]*>(.*?)/gi) ? n.src = script.replace(/<.*src="/, '').replace(/".*/, '') : n.innerHTML = script.replace(/<script(.*?)>/, '').replace(/<\/script>/, ''),
            n.src || n.innerHTML ? n : [
            ]
          })) : [
          ]
        }
      },
      head: function () {
        return {
          script: this.scripts
        }
      },
      methods: {
        adjustHtml: function (html) {
          if (this.isVoteSwiper(html)) {
            var t = function (t, e, n) {
              return null == n && (n = ''),
              (t = t.replace(/[?#]$/, '')) + (t.indexOf('?') > 0 ? '&' : '?') + e + '=' + n
            }(html.match(/(src="[^"]*")/) [0].match(/"([^"]*)"/g) [0].replace(/"/g, ''), 'hideDownload', 'true');
            return html.replace(/(src="[^"]*")/, 'src="'.concat(t, '" scrolling="no"'))
          }
          return html.indexOf('telegram') > - 1 && html.indexOf('data-telegram-post=') > - 1 ? html.replace('data-telegram-post=', 'preserve="preserve" data-telegram-post=') : html
        }
      }
    },
    r = n(1),
    component = Object(r.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  554: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = {
      extends : n(98).default,
      computed: {
        webviewClick: function () {
          var t = this.$store.getters.getSeoData,
          e = t.canonical ? t.canonical : '',
          title = t.title ? t.title.replace(/'/g, '\\\'') : '';
          return '\n        window.vamp.navigateToGallery({\n          images: ['.concat(JSON.stringify(this.data.content.webviewImage), '],\n          selectedImage: 0,\n          sharingUrl: \'').concat(e, '\',\n          articleTitle: \'').concat(title, '\'\n        });\n      ')
        },
        webviewSettings: function () {
          return !1
        }
      }
    },
    r = (n(775), n(1231), n(1)),
    component = Object(r.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  575: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = {
      name: 'Widget1of2TopWebview',
      extends : n(318).default,
      data: function () {
        return {
          baseClass: 'widget--1of2 widget--1of2-top',
          tid: 'widget-1of2-top',
          teaserSize: '1of2-top',
          sourceElem: 'Widget-Halbe-Breite-Toplayout'
        }
      }
    },
    r = n(1),
    component = Object(r.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  576: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = {
      name: 'Widget1of2Webview',
      extends : n(318).default,
      data: function () {
        return {
          baseClass: 'widget--1of2',
          tid: 'widget-1of2',
          teaserSize: '1of2',
          sourceElem: 'Widget-1/2-Breite'
        }
      }
    },
    r = n(1),
    component = Object(r.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  578: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = {
      name: 'Widget1of3CompactWebview',
      extends : n(318).default,
      data: function () {
        return {
          baseClass: 'widget--1of3 widget--1of3--compact',
          tid: 'widget-1of3',
          teaserSize: '1of3-compact',
          sourceElem: 'Ressortkachel'
        }
      }
    },
    r = n(1),
    component = Object(r.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  579: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = {
      name: 'Widget1of3Webview',
      extends : n(318).default,
      data: function () {
        return {
          baseClass: 'widget--1of3',
          tid: 'widget-1of3',
          teaserSize: '1of3',
          sourceElem: 'Widget-Liste-klein'
        }
      }
    },
    r = n(1),
    component = Object(r.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  581: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = {
      name: 'Widget2of3PageWidget',
      extends : n(318).default,
      data: function () {
        return {
          baseClass: 'widget--2of3',
          tid: 'widget-2of3',
          teaserSize: '2of3',
          sourceElem: 'Widget-2/3-Breite'
        }
      }
    },
    r = n(1),
    component = Object(r.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  584: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = {
      name: 'Widget3of3TopWebview',
      extends : n(318).default,
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
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          },
          e = 'widget--3of3';
          return Object.entries(t).forEach((function (style) {
            e = e + ' ' + style[1]
          })),
          e
        }
      }
    },
    r = n(1),
    component = Object(r.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  585: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = {
      name: 'Widget3of3Webview',
      extends : n(318).default,
      data: function () {
        return {
          baseClass: 'widget--3of3',
          tid: 'widget-3of3',
          teaserSize: '3of3',
          sourceElem: 'Widget-Volle-Breite'
        }
      }
    },
    r = n(1),
    component = Object(r.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  586: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = {
      name: 'WidgetArticleExternderWebview',
      extends : n(318).default,
      data: function () {
        return {
          baseClass: 'widget--extender',
          tid: 'widget-extender',
          teaserSize: 'extender',
          sourceElem: 'Widget-Extender'
        }
      }
    },
    r = n(1),
    component = Object(r.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  592: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = {
      name: 'WidgetNewsWebview',
      extends : n(318).default,
      data: function () {
        return {
          baseClass: 'widget--news',
          tid: 'widget-news',
          teaserSize: '1of3-news',
          sourceElem: 'Widget-Nachrichten-des-Tages'
        }
      }
    },
    r = n(1),
    component = Object(r.a) (o, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  598: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = n(6),
    r = n.n(o);
    function c(t, e) {
      return r() (t, 1) [0] - r() (e, 1) [0]
    }
    function l(t, e) {
      var n = t[t.length - 1];
      return n && n[1] >= e[0] ? n[1] = Math.max(n[1], e[1]) : t.push(e),
      t
    }
    function d(t) {
      var e,
      text = t.text,
      n = t.highlight,
      o = (e = text, n.split(/\s+/g).filter(Boolean).reduce((function (t, n) {
        for (var o, r = new RegExp(n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'), 'gi'); o = r.exec(e); ) t.push([o.index,
        o.index + n.length]);
        return t
      }), [
      ]).sort(c).reduce(l, [
      ])),
      d = [
      ],
      f = 0;
      return o.forEach((function (t) {
        var e = r() (t, 2),
        n = e[0],
        o = e[1];
        f !== n && d.push({
          highlighted: !1,
          text: text.slice(f, n)
        }),
        d.push({
          highlighted: !0,
          text: text.slice(n, o)
        }),
        f = o
      })),
      f !== text.length && d.push({
        highlighted: !1,
        text: text.slice(f)
      }),
      d
    }
    var f = {
      functional: !0,
      props: {
        text: {
          type: String,
        default:
          ''
        },
        highlight: {
          type: String,
        default:
          ''
        },
        classes: {
          type: String,
        default:
          'highlight'
        }
      },
      render: function (t, e) {
        var n = e.props,
        o = n.classes;
        return d(n).map((function (e) {
          return t('span', {
            class : [
              e.highlighted ? o : ''
            ]
          }, [
            e.text
          ])
        }))
      }
    },
    m = (n(1383), n(1)),
    component = Object(m.a) (f, undefined, undefined, !1, null, null, null);
    e.default = component.exports
  },
  773: function (t, e, n) {
    'use strict';
    function o() {
      var text = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
      return text.trim()
    }
    function r() {
      var text = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
      return Boolean(text) && 'webvtt' !== text.trim().toLowerCase()
    }
    function c() {
      var text = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
      return text.split('\n\n').filter(r).map((function (t) {
        return t.split('\n').slice(1).map(o).filter(Boolean).join(' ')
      })).join(' ')
    }
    function l() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      t = parseInt(t, 10);
      var e = parseInt(t / 3600, 10);
      t -= 3600 * e;
      var n = parseInt(t / 60, 10),
      o = t - 60 * n;
      return 'PT'.concat(e, 'H').concat(n, 'M').concat(o, 'S')
    }
    function d(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '.',
      n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      t = t.split(e),
      n && (t = t.reverse());
      try {
        return new Date(t.join('-')).toISOString().split('T') [0]
      } catch (t) {
        return
      }
    }
    function f(source) {
      return 'string' == typeof source.file && 'mp4' === source.file.split('.').pop()
    }
    function m(a, b) {
      return b.width - a.width
    }
    function h() {
      var video = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
      },
      t = arguments.length > 1 ? arguments[1] : void 0,
      e = video.description;
      e || (e = 'video');
      var n = video.title,
      o = video.images,
      r = void 0 === o ? [
      ] : o,
      d = video.pubdate,
      h = video.transcript,
      v = video.duration,
      w = video.sources,
      _ = void 0 === w ? [
      ] : w,
      x = _.filter(f).sort(m) [0] || {
      },
      y = x.file,
      j = x.width,
      I = x.height;
      return JSON.stringify({
        '@context': 'http://schema.org',
        '@type': 'VideoObject',
        '@id': t,
        description: e,
        contentUrl: y,
        width: j,
        height: I,
        inLanguage: 'de-CH',
        name: n,
        thumbnailUrl: r.map((function (image) {
          return image.src
        })),
        uploadDate: d ? new Date(1000 * d) : void 0,
        transcript: h ? c(h) : void 0,
        duration: l(v)
      })
    }
    function v() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
      },
      e = arguments.length > 1 ? arguments[1] : void 0,
      n = t.description,
      o = t.name,
      title = t.title,
      r = t.author,
      c = t.thumbnailUrl,
      f = t.datePublished,
      m = t.duration,
      h = t.contentUrl,
      v = t.episodeNumber;
      return JSON.stringify({
        '@context': 'http://schema.org',
        '@type': title && v ? 'PodcastEpisode' : 'AudioObject',
        '@id': e,
        description: n,
        inLanguage: 'de-CH',
        name: o,
        author: r,
        contentUrl: title || v ? void 0 : h,
        thumbnailUrl: c,
        datePublished: f ? d(f) : void 0,
        episodeNumber: v,
        timeRequired: m ? l(m) : void 0,
        associatedMedia: title && v ? {
          '@type': 'MediaObject',
          contentUrl: h
        }
         : void 0,
        partOfSeries: title && v ? {
          '@type': 'PodcastSeries',
          name: title
        }
         : void 0
      })
    }
    n.d(e, 'b', (function () {
      return h
    })),
    n.d(e, 'a', (function () {
      return v
    }))
  },
  774: function (t, e, n) {
    'use strict';
    n(836)
  },
  775: function (t, e, n) {
    'use strict';
    n(840)
  },
  836: function (t, e, n) {
    var content = n(1122);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('12e7719e', content, !0, {
      sourceMap: !1
    })
  },
  840: function (t, e, n) {
    var content = n(1129);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('78885dc7', content, !0, {
      sourceMap: !1
    })
  },
  844: function (t, e, n) {
    'use strict';
    n(845)
  },
  845: function (t, e, n) {
    var content = n(1136);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('920d575e', content, !0, {
      sourceMap: !1
    })
  },
  846: function (t, e, n) {
    'use strict';
    n(847)
  },
  847: function (t, e, n) {
    var content = n(1137);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('5805cfde', content, !0, {
      sourceMap: !1
    })
  },
  848: function (t, e, n) {
    var content = n(1139);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('63a71d6a', content, !0, {
      sourceMap: !1
    })
  },
  858: function (t, e, n) {
    'use strict';
    n(859)
  },
  859: function (t, e, n) {
    var content = n(1161);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('564beb73', content, !0, {
      sourceMap: !1
    })
  },
  860: function (t, e, n) {
    var content = n(1163);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('32b7e77a', content, !0, {
      sourceMap: !1
    })
  },
  862: function (t, e, n) {
    var content = n(1167);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('70bd2e93', content, !0, {
      sourceMap: !1
    })
  },
  863: function (t, e, n) {
    var content = n(1169);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('5d56e376', content, !0, {
      sourceMap: !1
    })
  },
  865: function (t, e, n) {
    var content = n(1173);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('07256ab1', content, !0, {
      sourceMap: !1
    })
  },
  866: function (t, e, n) {
    var content = n(1175);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('5df7d981', content, !0, {
      sourceMap: !1
    })
  },
  898: function (t, e, n) {
    var content = n(1232);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('07220142', content, !0, {
      sourceMap: !1
    })
  },
  912: function (t, e, n) {
    var content = n(1257);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('0be8c19d', content, !0, {
      sourceMap: !1
    })
  },
  913: function (t, e, n) {
    var content = n(1259);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('0f8ea125', content, !0, {
      sourceMap: !1
    })
  },
  948: function (t, e, n) {
    var content = n(1320);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('111c274b', content, !0, {
      sourceMap: !1
    })
  },
  955: function (t, e, n) {
    var content = n(1332);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('68f854e2', content, !0, {
      sourceMap: !1
    })
  },
  963: function (t, e, n) {
    var content = n(1348);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('0892dade', content, !0, {
      sourceMap: !1
    })
  },
  98: function (t, e, n) {
    'use strict';
    n.r(e);
    var o = n(64),
    r = n(69),
    c = n(265);
    function l(t, e) {
      var n;
      if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
        if (Array.isArray(t) || (n = function (t, e) {
          if (!t) return;
          if ('string' == typeof t) return d(t, e);
          var n = Object.prototype.toString.call(t).slice(8, - 1);
          'Object' === n && t.constructor && (n = t.constructor.name);
          if ('Map' === n || 'Set' === n) return Array.from(t);
          if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(t, e)
        }(t)) || e && t && 'number' == typeof t.length) {
          n && (t = n);
          var i = 0,
          o = function () {
          };
          return {
            s: o,
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
            f: o
          }
        }
        throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
      }
      var r,
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
          r = t
        },
        f: function () {
          try {
            c || null == n.return || n.return()
          } finally {
            if (l) throw r
          }
        }
      }
    }
    function d(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
      return n
    }
    var f = {
      name: 'ArticleImage',
      components: {
        ImageDescription: function () {
          return n.e(1).then(n.bind(null, 367))
        },
        ImageZoom: function () {
          return Promise.all([n.e(1),
          n.e(3)]).then(n.bind(null, 463))
        },
        ImageLightbox: function () {
          return Promise.all([n.e(3),
          n.e(8)]).then(n.bind(null, 461))
        },
        GalleryButton: function () {
          return n.e(10).then(n.bind(null, 304))
        }
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
        },
        imagestyle: {
          type: String,
        default:
          'content'
        },
        onVisible: {
          type: Function,
        default:
          function () {
          }
        },
        showCaption: {
          type: Boolean,
        default:
          !0
        },
        allowImageZoom: {
          type: Boolean,
        default:
          !0
        },
        imageZoomInDuration: {
          type: Number,
        default:
          320
        },
        imageZoomOutDuration: {
          type: Number,
        default:
          240
        },
        onZoomOpenBefore: {
          type: Function,
        default:
          function () {
          }
        },
        onZoomOpenAfter: {
          type: Function,
        default:
          function () {
          }
        },
        onZoomCloseBefore: {
          type: Function,
        default:
          function () {
          }
        },
        onZoomCloseAfter: {
          type: Function,
        default:
          function () {
          }
        },
        attachLightbox: {
          type: Boolean,
        default:
          !0
        },
        modifier: {
          type: String,
        default:
          ''
        },
        getImageUrl: {
          type: Function,
        default:
          r.a
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
        showGalleryButton: {
          type: Boolean,
        default:
          !1
        },
        isRelative: {
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
        arrowClose: {
          type: Boolean,
        default:
          !0
        },
        hasMaxWidth: {
          type: Boolean,
        default:
          !1
        }
      },
      data: function () {
        return {
          imageSrcLoaded: !1,
          imageStyle: this.imagestyle || 'content',
          imageZoomAttached: !1,
          imageZoomHidden: !1,
          imageLightboxAttached: !1,
          zoomPosition: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            paddingX: 0,
            paddingY: 0
          }
        }
      },
      computed: {
        noZoomAnimation: function () {
          return !1
        },
        slides: function () {
          return [this.data]
        },
        opacity: function () {
          return this.$store.state.isrendition.indexOf('webview') > - 1 ? 1 : null
        },
        scale: function () {
          return {
            grid2of3: 1.11
          }
          [
            this.modifier
          ] || 1
        },
        transform: function () {
          return [this.scale].filter(Boolean).map((function (t) {
            return 'scale('.concat(t, ')')
          })).join('')
        },
        imageType: function () {
          return this.$store.state.isrendition || this.$route.fullPath.indexOf('/fragments/render') > - 1 ? 'fragment' : 'article'
        },
        webviewClick: function () {
          return !1
        },
        webviewSettings: function () {
          return !1
        },
        imageTag: function () {
          return 'img'
        },
        imageZoomSrc: function () {
          var image = this.data.content.image,
          t = Math.min(this.window.innerWidth / image.width, this.window.innerHeight / image.height);
          return this.getImageUrl({
            url: image.url,
            scaleWidth: image.width * t * this.window.devicePixelRatio,
            scaleHeight: image.height * t * this.window.devicePixelRatio
          })
        },
        isLightbox: function () {
          return !(!this.$parent.isAmp || !this.data.group) && this.data.group
        },
        layoutAttribute: function () {
          return 'intrinsic'
        },
        isSlider: function () {
          return 'slider' === this.modifier
        },
        itemid: function () {
          return this.data.content.image ? this.getImageUrl({
            url: this.data.content.image.url,
            scaleWidth: 560
          }) : ''
        },
        caption: function () {
          var t = this.data.content,
          content = void 0 === t ? {
          }
           : t;
          return Object(c.b) (content.caption)
        },
        getVideoId: function () {
          return this._get(this.item, 'embeds.videos[0].id')
        },
        setMaxWidth: function () {
          return !1
        }
      },
      watch: {
        imageSrcLoaded: function () {
          this.preloadZoomImg(this.imageZoomSrc)
        }
      },
      mounted: function () {
        var t = this;
        this.observer = new MutationObserver((function (e) {
          var n,
          o = l(e);
          try {
            var r = function () {
              var e = n.value,
              o = e.target.getAttribute(e.attributeName);
              t.$nextTick((function () {
                t.imageSrcLoaded = o
              }))
            };
            for (o.s(); !(n = o.n()).done; ) r()
          } catch (t) {
            o.e(t)
          } finally {
            o.f()
          }
        })),
        this.observer.observe(this.$refs.image, {
          attributes: !0,
          attributeOldValue: !0,
          attributeFilter: [
            'data-loaded'
          ]
        })
      },
      beforeDestroy: function () {
        this.observer.disconnect()
      },
      methods: {
        referenceOverflow: function (t) {
          var e = this;
          return function () {
            var n = t.getBoundingClientRect(),
            o = n.width,
            r = n.height;
            return [o * (e.scale - 1),
            r * (e.scale - 1)]
          }
        },
        preloadZoomImg: function (t) {
          var e = this,
          img = new Image;
          img.onload = function () {
            e.onVisible(),
            e.backgroundEnabled = !0
          },
          img.src = t
        },
        getClass: function () {
          var t = this,
          e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          },
          n = '';
          return Object.entries(e).forEach((function (style) {
            n = n + ' ' + style[1],
            t.imageStyle = style[1]
          })),
          this.data.nextElement && this.data.nextElement.includes('header') && (n += ' image--first'),
          this.modifier && (n += 'image--'.concat(this.modifier)),
          this.imageZoomAttached && (n += ' image--fullwidth-zoomed'),
          n
        },
        isSize: function () {
          for (var t = this.data.styles, e = (t = void 0 === t ? {
          }
           : t).position, n = void 0 === e ? '' : e, o = arguments.length, r = new Array(o), c = 0; c < o; c++) r[c] = arguments[c];
          return r.some((function (t) {
            return - 1 !== n.indexOf(t)
          }))
        },
        imageZoomOpen: function () {
          var t = this;
          this.isSlider ? (this.onZoomOpenBefore(), setTimeout((function () {
            t.onZoomOpenAfter()
          }), this.imageZoomInDuration)) : this.allowImageZoom && (this.imageZoomAttached = !0, this.onZoomOpenBefore(), setTimeout((function () {
            t.onZoomOpenAfter(t.zoomPosition),
            t.attachLightbox && (t.imageLightboxAttached = !0)
          }), this.imageZoomInDuration))
        },
        imageZoomClose: function () {
          var t = this;
          this.imageLightboxAttached = !1,
          this.imageZoomAttached = !1,
          this.onZoomCloseBefore(),
          setTimeout((function () {
            return t.onZoomCloseAfter()
          }), this.imageZoomOutDuration)
        },
        imageZoomShow: function () {
          this.imageZoomHidden = !1
        },
        imageZoomHide: function () {
          this.imageZoomHidden = !0
        },
        onZoomOpen: function (t) {
          this.zoomPosition = t
        },
        pictureLoaded: function () {
          this.$root.$emit('pictureLoaded')
        }
      },
      head: function () {
        if (this.isLightbox) return {
          script: [
            {
              hid: 'amp-lightbox-gallery',
              preserve: 'preserve',
              type: 'text/javascript',
              async: !0,
              src: 'https://cdn.ampproject.org/v0/amp-lightbox-gallery-0.1.js',
              'custom-element': 'amp-lightbox-gallery'
            }
          ]
        }
      }
    },
    m = (n(775), n(1)),
    component = Object(m.a) (f, (function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('figure', {
        staticClass: 'articlecomponent image',
        class : t.getClass(t.data.styles),
        style: {
          position: t.allowImageZoom && t.isRelative ? 'relative' : null,
          maxWidth: t.setMaxWidth
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
                layout: 'article-' + t.imageStyle,
                imageType: t.imageType
              },
              expression: '{\n      teaserImage: data.content.image,\n      parent: this.$parent,\n      layout: \'article-\' + imageStyle,\n      imageType: imageType\n    }'
            }
          ],
          staticClass: 'image-placeholder image__placeholder',
          class : [
            t.modifier ? 'image__placeholder--' + t.modifier : ''
          ],
          attrs: {
            'data-teaser-video-placeholder': !!t.getVideoId,
            'data-nzz-tid': 'image-placeholder',
            itemscope: '',
            itemtype: 'http://schema.org/ImageObject',
            itemid: t.itemid
          }
        }, [
          n(t.imageTag, {
            ref: 'image',
            tag: 'component',
            staticClass: 'image-placeholder__image',
            class : [
              t.modifier ? 'image__src--' + t.modifier : ''
            ],
            style: {
              cursor: t.allowImageZoom ? 'pointer' : 'auto',
              transform: t.transform,
              opacity: t.opacity
            },
            attrs: {
              layout: !!t.layoutAttribute && t.layoutAttribute,
              alt: t.caption,
              lightbox: !!t.isLightbox && t.isLightbox,
              onclick: t.webviewClick,
              settings: t.webviewSettings,
              'data-sizes': '0',
              'data-nzz-tid': 'article-image',
              width: t.data.content.image.width,
              height: t.data.content.image.height
            },
            on: {
              click: t.imageZoomOpen,
              load: t.pictureLoaded
            }
          }),
          t._v(' '),
          t.isSlider || t.noZoomAnimation ? t._e() : n('ImageZoom', {
            attrs: {
              attached: t.imageZoomAttached,
              hidden: t.imageZoomHidden,
              src: t.imageZoomSrc,
              'reference-overflow': t.referenceOverflow(t.$refs.image),
              'in-duration': t.imageZoomInDuration,
              'out-duration': t.imageZoomOutDuration,
              window: t.window,
              data: t.data,
              'on-open': t.onZoomOpen
            }
          }),
          t._v(' '),
          !t.isSlider && t.imageLightboxAttached ? n('ImageLightbox', {
            attrs: {
              slides: t.slides,
              window: t.window,
              data: t.data,
              'on-close': t.imageZoomClose,
              positioning: t.zoomPosition,
              'wheel-close': t.wheelClose,
              'resize-close': t.resizeClose,
              'arrow-close': t.arrowClose
            }
          }) : t._e()
        ], 1),
        t._v(' '),
        t.showCaption && (t.caption || t.data.content.author) ? n('figcaption', {
          staticClass: 'articlecomponent__description'
        }, [
          n('ImageDescription', {
            attrs: {
              data: t.data,
              'is-small': t.isSize('image--left', 'image--right'),
              'is-fullwidth': t.isSize('image--fullwidth'),
              'is-widewidth': t.isSize('image--widewidth')
            }
          })
        ], 1) : t._e(),
        t._v(' '),
        t.showGalleryButton ? n('GalleryButton', {
          on: {
            click: t.imageZoomOpen
          }
        }) : t._e()
      ], 1)
    }), [
    ], !1, null, null, null);
    e.default = component.exports
  },
  981: function (t, e, n) {
    var content = n(1384);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('ba0a98c2', content, !0, {
      sourceMap: !1
    })
  },
  988: function (t, e, n) {
    var content = n(1396);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [t.i,
      content,
      '']
    ]),
    content.locals && (t.exports = content.locals);
    (0, n(13).default) ('6da79ea9', content, !0, {
      sourceMap: !1
    })
  }
}
]);
