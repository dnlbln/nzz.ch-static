(window.webpackJsonp = window.webpackJsonp || [
]).push([[0],
{
  1003: function (e, t, n) {
    var content = n(1425);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('2d6ec11a', content, !0, {
      sourceMap: !1
    })
  },
  1004: function (e, t, n) {
    var content = n(1427);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('3c9ea6ae', content, !0, {
      sourceMap: !1
    })
  },
  1079: function (e, t, n) {
    var r,
    o,
    l,
    d,
    c,
    f,
    m,
    h;
    e.exports = (h = n(1080), o = (r = h).lib, l = o.WordArray, d = o.Hasher, c = r.algo, f = [
    ], m = c.SHA1 = d.extend({
      _doReset: function () {
        this._hash = new l.init([1732584193,
        4023233417,
        2562383102,
        271733878,
        3285377520])
      },
      _doProcessBlock: function (e, t) {
        for (var n = this._hash.words, a = n[0], b = n[1], r = n[2], o = n[3], l = n[4], i = 0; i < 80; i++) {
          if (i < 16) f[i] = 0 | e[t + i];
           else {
            var d = f[i - 3] ^ f[i - 8] ^ f[i - 14] ^ f[i - 16];
            f[i] = d << 1 | d >>> 31
          }
          var c = (a << 5 | a >>> 27) + l + f[i];
          c += i < 20 ? 1518500249 + (b & r | ~b & o) : i < 40 ? 1859775393 + (b ^ r ^ o) : i < 60 ? (b & r | b & o | r & o) - 1894007588 : (b ^ r ^ o) - 899497514,
          l = o,
          o = r,
          r = b << 30 | b >>> 2,
          b = a,
          a = c
        }
        n[0] = n[0] + a | 0,
        n[1] = n[1] + b | 0,
        n[2] = n[2] + r | 0,
        n[3] = n[3] + o | 0,
        n[4] = n[4] + l | 0
      },
      _doFinalize: function () {
        var data = this._data,
        e = data.words,
        t = 8 * this._nDataBytes,
        n = 8 * data.sigBytes;
        return e[n >>> 5] |= 128 << 24 - n % 32,
        e[14 + (n + 64 >>> 9 << 4)] = Math.floor(t / 4294967296),
        e[15 + (n + 64 >>> 9 << 4)] = t,
        data.sigBytes = 4 * e.length,
        this._process(),
        this._hash
      },
      clone: function () {
        var e = d.clone.call(this);
        return e._hash = this._hash.clone(),
        e
      }
    }), r.SHA1 = d._createHelper(m), r.HmacSHA1 = d._createHmacHelper(m), h.SHA1)
  },
  108: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'LagerHead',
      data: function () {
        return {
          homePath: this.$config.lagerConfig.lagerHomePath,
          logo: this.$config.lagerConfig.logo
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('div', {
        staticClass: 'lager__head'
      }, [
        n('nuxt-link', {
          attrs: {
            to: e.homePath
          }
        }, [
          n('img', {
            attrs: {
              src: e.logo
            }
          })
        ])
      ], 1)
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  1080: function (e, t, n) {
    var r;
    e.exports = (r = r || function (e, t) {
      var n = Object.create || function () {
        function e() {
        }
        return function (t) {
          var n;
          return e.prototype = t,
          n = new e,
          e.prototype = null,
          n
        }
      }(),
      r = {
      },
      o = r.lib = {
      },
      l = o.Base = {
        extend: function (e) {
          var t = n(this);
          return e && t.mixIn(e),
          t.hasOwnProperty('init') && this.init !== t.init || (t.init = function () {
            t.$super.init.apply(this, arguments)
          }),
          t.init.prototype = t,
          t.$super = this,
          t
        },
        create: function () {
          var e = this.extend();
          return e.init.apply(e, arguments),
          e
        },
        init: function () {
        },
        mixIn: function (e) {
          for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
          e.hasOwnProperty('toString') && (this.toString = e.toString)
        },
        clone: function () {
          return this.init.prototype.extend(this)
        }
      },
      d = o.WordArray = l.extend({
        init: function (e, n) {
          e = this.words = e || [
          ],
          this.sigBytes = n != t ? n : 4 * e.length
        },
        toString: function (e) {
          return (e || f).stringify(this)
        },
        concat: function (e) {
          var t = this.words,
          n = e.words,
          r = this.sigBytes,
          o = e.sigBytes;
          if (this.clamp(), r % 4) for (var i = 0; i < o; i++) {
            var l = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
            t[r + i >>> 2] |= l << 24 - (r + i) % 4 * 8
          } else for (i = 0; i < o; i += 4) t[r + i >>> 2] = n[i >>> 2];
          return this.sigBytes += o,
          this
        },
        clamp: function () {
          var t = this.words,
          n = this.sigBytes;
          t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8,
          t.length = e.ceil(n / 4)
        },
        clone: function () {
          var e = l.clone.call(this);
          return e.words = this.words.slice(0),
          e
        },
        random: function (t) {
          for (var n, r = [
          ], o = function (t) {
            t = t;
            var n = 987654321,
            mask = 4294967295;
            return function () {
              var r = ((n = 36969 * (65535 & n) + (n >> 16) & mask) << 16) + (t = 18000 * (65535 & t) + (t >> 16) & mask) & mask;
              return r /= 4294967296,
              (r += 0.5) * (e.random() > 0.5 ? 1 : - 1)
            }
          }, i = 0; i < t; i += 4) {
            var l = o(4294967296 * (n || e.random()));
            n = 987654071 * l(),
            r.push(4294967296 * l() | 0)
          }
          return new d.init(r, t)
        }
      }),
      c = r.enc = {
      },
      f = c.Hex = {
        stringify: function (e) {
          for (var t = e.words, n = e.sigBytes, r = [
          ], i = 0; i < n; i++) {
            var o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
            r.push((o >>> 4).toString(16)),
            r.push((15 & o).toString(16))
          }
          return r.join('')
        },
        parse: function (e) {
          for (var t = e.length, n = [
          ], i = 0; i < t; i += 2) n[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - i % 8 * 4;
          return new d.init(n, t / 2)
        }
      },
      m = c.Latin1 = {
        stringify: function (e) {
          for (var t = e.words, n = e.sigBytes, r = [
          ], i = 0; i < n; i++) {
            var o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
            r.push(String.fromCharCode(o))
          }
          return r.join('')
        },
        parse: function (e) {
          for (var t = e.length, n = [
          ], i = 0; i < t; i++) n[i >>> 2] |= (255 & e.charCodeAt(i)) << 24 - i % 4 * 8;
          return new d.init(n, t)
        }
      },
      h = c.Utf8 = {
        stringify: function (e) {
          try {
            return decodeURIComponent(escape(m.stringify(e)))
          } catch (e) {
            throw new Error('Malformed UTF-8 data')
          }
        },
        parse: function (e) {
          return m.parse(unescape(encodeURIComponent(e)))
        }
      },
      _ = o.BufferedBlockAlgorithm = l.extend({
        reset: function () {
          this._data = new d.init,
          this._nDataBytes = 0
        },
        _append: function (data) {
          'string' == typeof data && (data = h.parse(data)),
          this._data.concat(data),
          this._nDataBytes += data.sigBytes
        },
        _process: function (t) {
          var data = this._data,
          n = data.words,
          r = data.sigBytes,
          o = this.blockSize,
          l = r / (4 * o),
          c = (l = t ? e.ceil(l) : e.max((0 | l) - this._minBufferSize, 0)) * o,
          f = e.min(4 * c, r);
          if (c) {
            for (var m = 0; m < c; m += o) this._doProcessBlock(n, m);
            var h = n.splice(0, c);
            data.sigBytes -= f
          }
          return new d.init(h, f)
        },
        clone: function () {
          var e = l.clone.call(this);
          return e._data = this._data.clone(),
          e
        },
        _minBufferSize: 0
      }),
      v = (o.Hasher = _.extend({
        cfg: l.extend(),
        init: function (e) {
          this.cfg = this.cfg.extend(e),
          this.reset()
        },
        reset: function () {
          _.reset.call(this),
          this._doReset()
        },
        update: function (e) {
          return this._append(e),
          this._process(),
          this
        },
        finalize: function (e) {
          return e && this._append(e),
          this._doFinalize()
        },
        blockSize: 16,
        _createHelper: function (e) {
          return function (t, n) {
            return new e.init(n).finalize(t)
          }
        },
        _createHmacHelper: function (e) {
          return function (t, n) {
            return new v.HMAC.init(e, n).finalize(t)
          }
        }
      }), r.algo = {
      });
      return r
    }(Math), r)
  },
  1081: function (e, t, n) {
    'use strict';
    n(813)
  },
  1082: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.q-embed{background-color:#fff;background-color:var(--articleBackground);color:#fff;color:var(--articleBackground)}.q-embed.widget--qembed{padding:0;border-left:0}.q-embed.widget--fullwidth{margin-left:-24px;margin-right:-24px;width:auto;max-width:none}@media (min-width:768px){.q-embed.widget--fullwidth{margin-left:24px;margin-right:24px}}.q-embed.widget--left,.q-embed.widget--right{width:240px;margin-left:auto;margin-right:auto}@media (min-width:768px){.q-embed.widget--left,.q-embed.widget--right{width:100%;max-width:240px}}@media (min-width:768px){.q-embed.widget--right{float:right;margin-left:40px;margin-right:24px}}@media (min-width:1372px){.q-embed.widget--right{margin-right:48px}}@media (min-width:1548px){.q-embed.widget--right{margin-right:120px}}@media (min-width:768px){.q-embed.widget--left{float:left;margin-right:40px;margin-left:24px}}@media (min-width:1372px){.q-embed.widget--left{margin-left:48px}}@media (min-width:1548px){.q-embed.widget--left{margin-left:120px}}.ampiframe-readmore{margin-top:-64px;padding-top:64px;background-color:transparent;background-image:linear-gradient(transparent,#fff)}.ampiframe-readmore button{display:flex;margin-left:auto;margin-right:auto;border:1px solid #000;justify-content:center;padding:10px 24px;font-family:nzz-serif,Georgia;font-size:.8125rem;line-height:1.38;color:#05032d;background:#fff}@media (min-width:1548px){.q-embed.widget--fullwidth{margin-left:40px;margin-right:40px}}',
    '']),
    e.exports = r
  },
  109: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'LagerSponsors',
      data: function () {
        return {
          sponsors: this.$config.lagerConfig.sponsors || null
        }
      }
    },
    o = (n(1265), n(1)),
    component = Object(o.a) (r, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('ul', {
        staticClass: 'lager__sponsors'
      }, e._l(e.sponsors, (function (e) {
        return n('li', {
          key: e.url,
          staticClass: 'lager__item'
        }, [
          n('a', {
            attrs: {
              href: e.url,
              rel: 'nooper'
            }
          }, [
            n('img', {
              attrs: {
                src: e.img
              }
            })
          ])
        ])
      })), 0)
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  1123: function (e, t, n) {
    'use strict';
    n(837)
  },
  1124: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.free-html__placeholder{margin:40px 0;padding:24px;line-height:1.5rem;font-family:nzz-sans-serif,Arial;text-align:center;border:1px solid #ebebeb;border:1px solid var(--grayLight)}.free-html__placeholder .title{font-size:1.25rem}.free-html__placeholder .title+.text{margin-top:16px}.free-html__placeholder .text{font-size:1rem;line-height:1.5rem;font-family:nzz-sans-serif,Arial;color:#707070;color:var(--grayMedium)}.free-html__placeholder .button{width:100%;margin-top:24px;font-size:.875rem;background-color:#2c32bd;background-color:var(--blueStrong)}',
    '']),
    e.exports = r
  },
  1261: function (e, t, n) {
    'use strict';
    n(916)
  },
  1262: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.resor__skyscraper{position:fixed;top:0;display:none;width:300px;margin-left:792px}@media (min-width:768px){.resor__skyscraper{display:block;display:none}}@media (min-width:1116px){.resor__skyscraper{right:0;margin-left:0}}@media (min-width:1548px){.resor__skyscraper{right:auto;margin-left:1224px}}.resor--maxiboard{display:flex;width:100%;padding:0 24px;background-color:#fff;background-color:var(--white)}.resor--maxiboard [data-adnz-loaded]{min-height:0;margin-bottom:0}.resor--maxiboard [data-adnz-loaded][data-adnz-shown="1"]{margin:24px auto}@media (min-width:768px){.resor--maxiboard [data-adnz-loaded][data-adnz-shown="1"]{margin:32px auto}}@media (min-width:1372px){.resor--maxiboard [data-adnz-loaded][data-adnz-shown="1"]{margin:64px auto 32px}}@media (min-width:1548px){.resor--maxiboard [data-adnz-loaded][data-adnz-shown="1"]{margin:96px auto 48px}}.resor__label{margin-bottom:8px;font-size:.75rem;line-height:1rem;color:#707070;color:var(--grayMedium)}.resor--top{display:flex;padding:0;background-color:transparent}.resor--top [data-adnz-loaded]{min-height:0;margin-bottom:0}.resor--top [data-adnz-loaded][data-adnz-shown="1"]{margin:0 auto}@media (min-width:1372px){.resor__skyscraper{display:block}}.resor--billboard [id^=adnz_bta_][data-adnz-infeed-placeholder]:not([data-adnz-shown="1"][data-adnz-loaded="1"]),.resor--billboard [id^=adnz_content_][data-adnz-placement][data-adnz-infeed-placeholder]:not([data-adnz-shown="1"][data-adnz-loaded="1"]){margin:0 auto}.resor--billboard [id^=adnz_bta_][data-adnz-infeed-placeholder]:not([data-adnz-shown="1"][data-adnz-loaded="1"]):before,.resor--billboard [id^=adnz_content_][data-adnz-placement][data-adnz-infeed-placeholder]:not([data-adnz-shown="1"][data-adnz-loaded="1"]):before{content:"Anzeige";display:block;float:none;width:994px;max-width:100%;height:250px;margin:0 auto;font-weight:500;font-size:9pt;line-height:15.625rem;font-family:Roboto,sans-serif;color:#cccbcb}.adnz-bta-fixed-placeholder .resor--billboard [id^=adnz_bta_]:not([data-adnz-shown="1"][data-adnz-loaded="1"]){margin:0 auto}.adnz-bta-fixed-placeholder .resor--billboard [id^=adnz_bta_]:not([data-adnz-shown="1"][data-adnz-loaded="1"]):before{content:"Anzeige";display:block;float:none;width:994px;max-width:100%;height:483px;margin:0 auto;font-weight:500;font-size:9pt;line-height:30.1875rem;font-family:Roboto,sans-serif;color:#cccbcb}@media (min-width:768px){.adnz-bta-fixed-placeholder .resor--billboard [id^=adnz_bta_]:not([data-adnz-shown="1"][data-adnz-loaded="1"]):before{height:424px;line-height:26.5rem}}@media (min-width:1372px){.adnz-bta-fixed-placeholder .resor--billboard [id^=adnz_bta_]:not([data-adnz-shown="1"][data-adnz-loaded="1"]):before{height:439px;line-height:27.4375rem}}.resor--top .resor--static{min-height:160px}@media (min-width:768px){.resor--top .resor--static{min-height:250px}}@media (min-width:1372px){.adnz-infeed-placeholder div#adnz_maxiboard_1{min-height:257.5px;width:100%}.adnz-infeed-placeholder div#adnz_maxiboard_1:before{z-index:-1}}.adnz-infeed-placeholder>div[id^=adnz_content_][data-adnz-placement]:not([data-adnz-shown="1"][data-adnz-loaded="1"]):before,.adnz-infeed-placeholder div#adnz_billboard_1:not([data-adnz-shown="1"][data-adnz-loaded="1"]):before,.adnz-infeed-placeholder div#adnz_billboard_2:not([data-adnz-shown="1"][data-adnz-loaded="1"]):before,.adnz-infeed-placeholder div#adnz_billboard_3:not([data-adnz-shown="1"][data-adnz-loaded="1"]):before,.adnz-infeed-placeholder div#adnz_billboard_4:not([data-adnz-shown="1"][data-adnz-loaded="1"]):before,.adnz-infeed-placeholder div#adnz_maxiboard_1:not([data-adnz-shown="1"][data-adnz-loaded="1"]):before{content:"Anzeige";line-height:15.625rem;font-family:Roboto,sans-serif;font-weight:500;font-size:9pt;color:#cccbcb;display:flex;align-items:center;justify-content:center;position:absolute;left:0;right:0;top:0;margin:0 auto;width:994px;max-width:100%;height:100%}.adnz-infeed-placeholder>div[id^=adnz_content_]:not([data-adnz-shown="1"][data-adnz-loaded="1"]),.adnz-infeed-placeholder div#adnz_billboard_1:not([data-adnz-shown="1"][data-adnz-loaded="1"]),.adnz-infeed-placeholder div#adnz_billboard_2:not([data-adnz-shown="1"][data-adnz-loaded="1"]),.adnz-infeed-placeholder div#adnz_billboard_3:not([data-adnz-shown="1"][data-adnz-loaded="1"]),.adnz-infeed-placeholder div#adnz_billboard_4:not([data-adnz-shown="1"][data-adnz-loaded="1"]),.adnz-infeed-placeholder div#adnz_maxiboard_1:not([data-adnz-shown="1"][data-adnz-loaded="1"]){margin:0 auto;position:relative}.adnz-infeed-placeholder>div[id^=adnz_content_]{min-height:250px}',
    '']),
    e.exports = r
  },
  1263: function (e, t, n) {
    'use strict';
    n(917)
  },
  1264: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.widget--sportdaten{width:100%}',
    '']),
    e.exports = r
  },
  1265: function (e, t, n) {
    'use strict';
    n(918)
  },
  1266: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.lager__sponsors{display:flex;justify-content:center;align-items:center;margin:30px auto 0;padding-bottom:30px;list-style:none;text-align:center}@media (min-width:768px){.lager__sponsors{margin:80px auto 0;padding-bottom:80px}}.lager__item{margin:0 10px;max-width:150px}.lager__item img{width:auto;max-width:100%;height:auto}',
    '']),
    e.exports = r
  },
  1267: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.lager{font-family:nzz-sans-serif,Arial}.lager__head{margin:0 24px;padding:35px 0;text-align:center;background:linear-gradient(180deg,#0074ad 52%,#fff 0)}@media (min-width:768px){.lager__head{margin:0 16px}}@media (min-width:1372px){.lager__head{margin:0 24px}}@media (min-width:1548px){.lager__head{margin:0 40px}}.lager__wrapper{max-width:680px;margin:0 24px}@media (min-width:768px){.lager__wrapper{margin:0 auto}}.lager__wrapper--detail{max-width:560px;overflow:auto}.lager__dirlink,.lager__title{display:block;text-align:center}.lager__title{margin-bottom:15px}.lager__title--big{margin-bottom:30px;font-size:1.375rem;line-height:1.75rem}@media (min-width:768px){.lager__title--big{font-size:2rem;line-height:2.625rem}}.lager__dirlink{margin-top:30px;font-weight:500;font-size:1rem;color:#000;color:var(--black)}.lager__char{margin-top:30px;font-size:1.5rem}.lager__list{margin:0;padding:0;list-style:none}.lager__listitem{font-size:1.125rem;text-align:center}.lager__listitem a{color:var(--blue);text-decoration:none}.lager__listitem a:hover{text-decoration:underline}.lager__post{margin-bottom:48px}@media (min-width:768px){.lager__post{margin-bottom:32px}}@media (min-width:1372px){.lager__post{margin-bottom:48px}}@media (min-width:1548px){.lager__post{margin-bottom:80px}}.lager__image>div{text-align:center}.lager__image+.lager__image,.lager__image+.lager__video{margin-top:24px}@media (min-width:768px){.lager__image+.lager__image,.lager__image+.lager__video{margin-top:16px}}@media (min-width:1372px){.lager__image+.lager__image,.lager__image+.lager__video{margin-top:24px}}@media (min-width:1548px){.lager__image+.lager__image,.lager__image+.lager__video{margin-top:40px}}.lager__video{width:100%;height:auto}.lager__empty{font-size:1rem;text-align:center}',
    '']),
    e.exports = r
  },
  1268: function (e, t, n) {
    'use strict';
    n(920)
  },
  1269: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.text{font-family:nzz-serif,Georgia;font-size:1.125rem;line-height:1.56}@media (min-width:768px){.text{font-size:1.25rem;line-height:1.6}}.text sub,.text sup{vertical-align:baseline;position:relative;top:-.4em}.text sub{top:.4em}',
    '']),
    e.exports = r
  },
  127: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'PageContainerExclusive',
      components: {
        WidgetRow: n(25).default
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
      methods: {
        getClass: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          },
          n = 'pageelement pageelement--'.concat(this.getIdentifier(e));
          return Object.entries(t).forEach((function (style) {
            n = n + ' ' + style[1]
          })),
          n
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return e.data ? n('section', {
        class : e.getClass(e.componenttype, e.data.styles),
        attrs: {
          'data-source-element': 'Container-exklusiv',
          'data-nzz-tid': 'container-exclusive',
          'data-nzz-container': ''
        }
      }, [
        n('div', {
          staticClass: 'pageelement__inner'
        }, [
          e.data.containers ? e._l(e.data.containers['widget-row-area'], (function (t) {
            return n('WidgetRow', {
              key: 'scp-excl-row-' + t.id + '-' + e.$store.state.isrendition,
              attrs: {
                data: t,
                pagetype: e.pagetype,
                componenttype: e.getIdentifier(t.identifier)
              }
            })
          })) : e._e()
        ], 2)
      ]) : e._e()
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  1270: function (e, t, n) {
    'use strict';
    n(921)
  },
  1271: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.subtitle{position:relative;font-size:1.25rem;line-height:1.4;font-weight:500;font-family:nzz-sans-serif,Arial;margin-bottom:32px}@media (min-width:768px){.subtitle{font-size:1.375rem;line-height:1.45;margin-bottom:32px}}.subtitle--numbered:before{content:counter(subtitle-numbered) ". ";position:absolute;counter-increment:subtitle-numbered}.subtitle--numbered-text{padding-left:32px}@media (min-width:768px){.subtitle--numbered-text{padding-left:40px}}.subtitle--chapter{font-size:1.375rem;line-height:1.36;padding-top:18px;margin-top:64px}@media (min-width:768px){.subtitle--chapter{font-size:1.75rem;margin-top:80px}}.subtitle--chapter:before{content:"";position:absolute;left:0;top:0;width:40px;height:1px;background-color:#000;background-color:var(--black)}.subtitle--small{font-weight:300}.subtitle+.subtitle--small{margin-top:-32px}@media (min-width:768px){.subtitle+.subtitle--small{margin-top:-32px}}.subtitle__content-table-link{display:flex;align-items:center;cursor:pointer;text-decoration:none;padding-left:32px}@media (min-width:768px){.subtitle__content-table-link{padding-left:40px}}.subtitle__text{flex-grow:1;color:#000;color:var(--black)}.subtitle__content-table-icon{flex-shrink:0;transform:rotate(180deg);padding:14px 25px;margin:-14px 0}.subtitle__anchor{position:absolute;left:0;top:-43px}@media (min-width:768px){.subtitle__anchor{top:-99px}}.subtitle__anchor--fixed-header{top:-99px}',
    '']),
    e.exports = r
  },
  1272: function (e, t, n) {
    'use strict';
    n(922)
  },
  1273: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.image-description{display:flex;flex-direction:column;margin-top:16px;font-family:nzz-sans-serif,Arial}.image-description a{color:inherit}@media (min-width:768px){.image-description{flex-direction:row;justify-content:space-between}}.image-description--fullwidth{margin-right:24px;margin-left:24px}@media (min-width:768px){.image-description--fullwidth{margin-right:24px;margin-left:24px}}@media (min-width:1372px){.image-description--fullwidth{margin-left:0;margin-right:0}}@media (min-width:1548px){.image-description--fullwidth{margin-left:0;margin-right:0}}.image-description--small{flex-direction:column}.image-description__caption{font-weight:300;font-size:.875rem;line-height:1.57;color:#333;color:var(--grayDark)}@media (min-width:1372px){.image-description__caption{max-width:640px}}@media (min-width:768px){.image-description__caption--large{font-size:1rem;line-height:1.62}}@media (min-width:1025px) and (max-width:1199px){.image-description__caption--large{max-width:816px}}@media (min-width:1548px){.image-description__caption--large{max-width:992px}}.image-description__author{margin-top:4px;font-weight:300;font-size:.625rem;line-height:1.4;color:#707070;color:var(--grayMedium)}@media (min-width:768px){.image-description__author{display:flex;flex-shrink:0;flex-direction:column;width:160px;margin-top:0;margin-left:16px;text-align:right}}.image-description__author--small{width:auto;margin-left:0;text-align:left}@media (min-width:768px){.image-description__author--small{margin-top:4px}}.image-description__author-single{margin-right:8px}@media (min-width:768px){.image-description__author-single{margin-right:0}}@media (min-width:1116px){.image-description--fullwidth{margin-left:0;margin-right:0}}',
    '']),
    e.exports = r
  },
  1274: function (e, t, n) {
    'use strict';
    n(923)
  },
  1275: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.lager .subtitle{text-align:center}',
    '']),
    e.exports = r
  },
  1279: function (e, t, n) {
    'use strict';
    n(925)
  },
  1280: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.multiselect__input,.multiselect__placeholder{font-size:1rem;font-weight:300}.multiselect__input{padding:6px 0 0}.multiselect__option--highlight{background-color:var(--blue)}.multiselect--active .multiselect__select{top:5px}.multiselect__select:before{top:72%}.multiselect__spinner{top:7px}.multiselect__spinner:after,.multiselect__spinner:before{border-top-color:var(--blue)}',
    '']),
    e.exports = r
  },
  1313: function (e, t, n) {
    'use strict';
    n(945)
  },
  1314: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.footnote{position:relative;padding-top:16px;font-size:.875rem;line-height:1.57;font-family:nzz-sans-serif,Arial;color:#333;color:var(--grayDark)}@media (min-width:768px){.footnote{font-size:1rem;line-height:1.62}}.footnote:after{content:"";position:absolute;top:0;left:0;width:40px;height:0;border-bottom:1px solid #333;border-bottom:1px solid var(--grayDark)}',
    '']),
    e.exports = r
  },
  1317: function (e, t, n) {
    'use strict';
    n(947)
  },
  1318: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.widget--fullwidth{max-width:none;width:auto;margin-right:-24px;margin-left:-24px;padding:0}@media (min-width:768px){.widget--fullwidth{margin-right:16px;margin-left:16px}}@media (min-width:1372px){.widget--fullwidth{margin-right:24px;margin-left:24px}}@media (min-width:1548px){.widget--fullwidth{margin-right:40px;margin-left:40px}}.widget--left,.widget--right{width:240px;margin-right:auto;margin-left:auto;padding:0}@media (min-width:768px){.widget--left,.widget--right{width:100%;max-width:240px}}@media (min-width:768px){.widget--right{float:right;margin-right:16px;margin-left:40px}}@media (min-width:1372px){.widget--right{margin-right:48px}}@media (min-width:1548px){.widget--right{margin-right:120px}}@media (min-width:768px){.widget--left{float:left;margin-right:40px;margin-left:16px}}@media (min-width:1372px){.widget--left{margin-left:48px}}@media (min-width:1548px){.widget--left{margin-left:120px}}',
    '']),
    e.exports = r
  },
  1335: function (e, t, n) {
    'use strict';
    n(957)
  },
  1336: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.scenario{font-family:nzz-sans-serif,Arial}.scenario__title{font-size:1.25rem;line-height:1.4;font-weight:500}@media (min-width:768px){.scenario__title{font-size:1.375rem;line-height:1.45}}.scenario__info{font-size:1.25rem;line-height:1.4;display:flex}@media (min-width:768px){.scenario__info{font-size:1.375rem;line-height:1.45}}.scenario__options{margin-left:16px;display:flex;align-items:center}.scenario__option{width:8px;height:8px;border:1px solid #000;border:1px solid var(--black);border-radius:50%;background-color:#fff;background-color:var(--white);margin-right:8px}@media (min-width:768px){.scenario__option{width:12px;height:12px}}.scenario__option--active{background-color:#000;background-color:var(--black)}.scenario__value{color:transparent;width:0;letter-spacing:-.625rem;overflow:hidden}',
    '']),
    e.exports = r
  },
  1345: function (e, t, n) {
    'use strict';
    n(962)
  },
  1346: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.time{font-weight:500;font-size:1rem;line-height:1.5rem;font-family:nzz-sans-serif,Arial;clear:both}@media (min-width:768px){.time{font-size:1.125rem;line-height:1.75rem}}.time:not(.invisible){position:relative;opacity:1}.time:after{content:" ";position:absolute;top:50%;left:0;width:100%;border-top:1px solid #707070;border-top:1px solid var(--grayMedium)}@media (min-width:768px){.time:after{bottom:14px}}.time__value{position:relative;z-index:100;display:inline;padding-right:16px;background-color:#fff;background-color:var(--white)}.time.articlecomponent{display:flex}',
    '']),
    e.exports = r
  },
  1351: function (e, t, n) {
    'use strict';
    n(965)
  },
  1352: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.animate-player{position:relative;width:100%;max-width:400px;min-height:72px;margin:0 0 16px;overflow:hidden;border-radius:4px;box-shadow:0 0 16px rgba(0,0,0,.16)}@media (min-width:768px){.animate-player{margin:0 0 40px}}',
    '']),
    e.exports = r
  },
  1353: function (e, t, n) {
    'use strict';
    n(966)
  },
  1354: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.miniplayer{position:absolute;bottom:0;left:0;width:100%;height:72px;margin:0;padding:16px 24px;background-color:#fff;background-color:var(--white);border-radius:4px;pointer-events:auto;cursor:pointer}@media (min-width:768px){.miniplayer{border-radius:unset}}.miniplayer__button{cursor:pointer}.miniplayer__close{right:12px;padding:12px}.miniplayer__close,.miniplayer__play{position:absolute;top:18px;width:36px;height:36px}.miniplayer__play{right:48px;padding:8px 11px}.miniplayer__icon{display:block}.miniplayer__content{position:relative;max-width:calc(100% - 80px);overflow:hidden}@-webkit-keyframes loading{0%{opacity:1}50%{opacity:.4}to{opacity:1}}@keyframes loading{0%{opacity:1}50%{opacity:.4}to{opacity:1}}.miniplayer__content--loading{-webkit-animation:loading 1s infinite;animation:loading 1s infinite}.miniplayer__content:after{content:"";position:absolute;top:0;right:0;width:16px;height:40px;background:linear-gradient(270deg,#fff,hsla(0,0%,100%,0));background:linear-gradient(270deg,var(--white),hsla(0,0%,100%,0))}.miniplayer__text{height:22px;margin:0;padding:0;font-size:.875rem;line-height:1.375rem;font-family:nzz-sans-serif,Arial;white-space:nowrap}.miniplayer__text--time{height:18px;line-height:1.125rem;color:#707070;color:var(--grayMedium)}',
    '']),
    e.exports = r
  },
  1355: function (e, t, n) {
    'use strict';
    n(967)
  },
  1356: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.maxiplayer{position:fixed;bottom:0;left:0;width:100%;height:497px}@media (min-width:768px){.maxiplayer{position:absolute;left:unset}}.maxiplayer__main{position:relative;z-index:2001;display:flex;flex-direction:column;align-items:center;width:100%;padding:32px 32px 0;background-color:#fff;background-color:var(--white);pointer-events:auto}@media (min-width:768px){.maxiplayer__main{position:absolute;bottom:0}}.maxiplayer__title{max-width:400px;height:66px;margin-bottom:32px;overflow:hidden;line-height:1.375rem;text-align:center}@media (min-width:768px){.maxiplayer__title{max-width:336px}}.maxiplayer__slider{margin-bottom:32px}.maxiplayer__text{margin:0;padding:0;font-size:.875rem;line-height:1.375rem;font-family:nzz-sans-serif,Arial}.maxiplayer__speed{width:56px;text-align:center}.maxiplayer__progress{display:flex;justify-content:center;align-items:center;width:100%;max-width:400px;height:22px;margin-bottom:32px}.maxiplayer__current{min-width:40px;height:22px;margin-right:16px;font-size:.875rem;line-height:1.375rem}.maxiplayer__duration{min-width:40px;height:22px;margin-left:16px;text-align:right}.maxiplayer__button{display:flex;justify-content:center;align-content:center;align-items:center;width:56px;height:56px;cursor:pointer;transition:opacity .32s ease}.maxiplayer__button--back{margin-right:8px}.maxiplayer__button--forward{margin-left:8px}.maxiplayer__button--disabled{cursor:default;opacity:.3}.maxiplayer__tempo{width:100%;margin:0;padding:16px 0;border-top:1px solid #ebebeb;border-top:1px solid var(--grayLight)}.maxiplayer__row{display:flex;justify-content:center;align-items:center}.maxiplayer__background{position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.4);opacity:1}@media (min-width:768px){.maxiplayer__background{display:none}}.maxiplayer__image{width:120px;height:120px}.maxiplayer__placeholder{width:120px;height:120px;margin-bottom:16px}.maxiplayer__link{display:flex;flex-direction:column;justify-content:center;align-items:center;color:#000;color:var(--black);text-decoration:none;cursor:default}.maxiplayer .vue-slider-ltr{cursor:pointer}.maxiplayer .vue-slider-dot{background-color:#000;background-color:var(--black);border-radius:50%}.maxiplayer .vue-slider-rail{width:100%;height:2px;background-color:#ebebeb;background-color:var(--grayLight)}.maxiplayer .vue-slider-process{background-color:#000;background-color:var(--black)}.maxiplayer .vue-slider-dot-tooltip{display:none}',
    '']),
    e.exports = r
  },
  1357: function (e, t, n) {
    'use strict';
    n(968)
  },
  1358: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.audioplayer{width:100%;max-width:400px}@media (min-width:768px){.audioplayer{margin-right:24px}}.audioplayer__pageholder{position:relative;display:flex;justify-content:center;padding:0 16px}@media (min-width:768px){.audioplayer__pageholder{justify-content:flex-end;width:768px;margin:0 auto 0 24px;padding:0}}@media (min-width:1116px){.audioplayer__pageholder{max-width:1548px;justify-content:flex-end;width:auto;margin:0 auto 0 24px;padding:0}}@media (min-width:1848px){.audioplayer__pageholder{max-width:1200px;margin:0 auto;padding:0}}.push-up-enter{transform:translateY(180px)}.push-up-enter-active{transition:transform .24s ease-in-out}.push-up-leave{transform:translateY(0)}.push-up-leave-active{transition:transform .2s ease-in-out}.push-up-leave-to{transform:translateY(180px)}@media (min-width:1548px){.audioplayer{margin-right:40px}}@media (min-width:1372px){.audioplayer__pageholder{max-width:1548px;margin:0 auto;padding:0 324px 0 24px}}',
    '']),
    e.exports = r
  },
  1359: function (e, t, n) {
    'use strict';
    n(969)
  },
  1360: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.maxi-player-overlay{position:relative;z-index:12000}@media (min-width:768px){.maxi-player-overlay{display:none}}',
    '']),
    e.exports = r
  },
  1391: function (e, t, n) {
    'use strict';
    n(986)
  },
  1392: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.image-share__title{margin-bottom:-16px;padding:29px 24px 13px;font-family:nzz-sans-serif,Arial;font-size:.875rem;font-weight:500;line-height:1.57;background-color:#fff;background-color:var(--white)}',
    '']),
    e.exports = r
  },
  1424: function (e, t, n) {
    'use strict';
    n(1003)
  },
  1425: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.slider-button{position:absolute;top:90px;z-index:20;display:flex;justify-content:center;align-items:center;width:56px;height:56px;margin-top:-28px;padding:0;background-color:#fff;background-color:var(--white);border:0;cursor:pointer;opacity:0;transition:opacity .32s ease-in;pointer-events:none}@media (min-width:768px){.slider-button{top:180px;opacity:.8;pointer-events:auto}.slider-button:hover{opacity:1}}.slider-button:focus{outline:none}.slider-button--prev{transform:rotate(90deg)}.slider-button--next{right:0;transform:rotate(-90deg)}.slider-button--lightbox{top:50%}',
    '']),
    e.exports = r
  },
  1426: function (e, t, n) {
    'use strict';
    n(1004)
  },
  1427: function (e, t, n) {
    var r = n(12) (!1);
    r.push([e.i,
    '.slider-progress{position:relative;z-index:5;width:100%;margin-top:16px;overflow:hidden}.slider-progress:after{content:"";position:absolute;top:1px;left:0;width:100%;height:1px;background-color:#ebebeb;background-color:var(--grayLight)}.slider-progress__wrapper{position:relative;z-index:10;width:100%}.slider-progress__indicator{height:3px;background-color:#333;background-color:var(--grayDark)}',
    '']),
    e.exports = r
  },
  144: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'ArticleFootnote',
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
    o = (n(1313), n(1)),
    component = Object(o.a) (r, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return e.data.content.text ? n('p', {
        staticClass: 'articlecomponent footnote',
        attrs: {
          'data-team-footnote': ''
        },
        domProps: {
          innerHTML: e._s(e.data.content.text)
        }
      }) : e._e()
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  1533: function (e, t, n) {
    n(11).register({
      bellevue: {
        width: 526.15,
        height: 152.73,
        viewBox: '0 0 526.15 152.73',
        data: '<path pid="0" d="M0 0h34.12c28.8 0 43.4 6.69 43.4 23.88 0 13.24-11.74 21.29-29.48 22.65v.28c19.52 1.09 31.8 9.14 31.8 23.47 0 18-15.42 25.25-45.45 25.25H0V0zm24 5.05v39.33h8.87c12.42 0 19.79-6.41 19.79-20.2 0-12.69-7.23-19.11-19.79-19.11H24zm0 44.36v41.08h9c13.65 0 21.7-6.82 21.7-20.48 0-13.1-8.19-20.6-21.57-20.6h-9.14zM128.35 96.9C106.79 96.9 90 83.52 90 60.46c0-22.51 17.61-35.61 36-35.61 18.83 0 34.94 12 34.94 33.57v1.91h-46.51v.28c.14 20.61 6.83 30.3 19.24 30.3a21.62 21.62 0 0021.16-16.53h5.91c-3.18 13.79-14.92 22.52-32.39 22.52zm-13.92-41.22h22.93c-.14-20.06-3.41-26.75-11.33-26.75-7.5.01-11.29 7.92-11.6 26.75zM173.37 0h23.2v95.54h-23.2V0zm39.47 0h23.2v95.54h-23.2V0zm72.9 96.9c-21.56 0-38.35-13.38-38.35-36.44 0-22.51 17.61-35.61 36-35.61 18.83 0 34.94 12 34.94 33.57v1.91h-46.54v.28c.14 20.61 6.83 30.3 19.24 30.3a21.62 21.62 0 0021.16-16.53h5.87c-3.14 13.79-14.88 22.52-32.32 22.52zm-13.95-41.22h22.95c-.14-20.06-3.41-26.75-11.33-26.75-7.52.01-11.34 7.92-11.62 26.75zm83.48 39.86L325.74 27.3h8.19l25.11 58.55 22.7-58.55h4.37L359.5 95.54h-4.23zm89.47-14.74c-3 9.28-10.51 16.1-21.7 16.1-12.69 0-24.7-6.55-24.7-26.61v-43h7.64v44.22c0 15.7 7.78 21.84 17.47 21.84 11.74 0 21.29-9.14 21.29-30.43V27.3h7.64v68.24h-7.64V80.8zm53 16.1c-19.92 0-32.35-15-32.35-36 0-22.92 15-35.21 30.57-35.21 16.1 0 30.16 11.06 30.16 32.48v1.49h-51.84v1.23c0 17.88 6.41 32.48 23.88 32.48 13.1 0 21.7-7.36 23.75-18.14h4c-2.22 12.94-13.01 21.67-28.17 21.67zm-23.47-40.67h42.87c-.55-18.15-7.51-27.17-21.16-27.17-13.1.01-20.61 8.61-21.7 27.18zm-198.88 92.15c-1.29 1.4-4.75 1.66-10.27 1.66-2.7 0-4.55-.06-6.08-.21l20.61-28.57-.58-1.17h-20.18c-1.82 0-1.82-.3-2.31-1.22h-1.84c-.16 4.38-.64 9.8-.64 9.8l2.23.08a19.62 19.62 0 011.29-3.66c1-2.07 1.51-2.34 6.71-2.35h8.27l-20.91 28.74.64 1.21h26.07c.76-2.81 1.94-9.08 1.94-9.08l-2.22-.46a17.34 17.34 0 01-2.73 5.23zm-37.83-26a18.86 18.86 0 012.31.19c2.13.3 2.37 1.55 2.47 2.47a62.6 62.6 0 01.34 8v10.54L222.8 120.1h-7.82v2.22a8 8 0 013.48.81c2 1.42 1.84 2.78 1.84 5.52v10.73c0 3.57-.1 6.28-.29 8.29a2.51 2.51 0 01-1.58 2.4 10.09 10.09 0 01-2.72.39v2.23h12.45v-2.23a12.59 12.59 0 01-3.07-.43 2.45 2.45 0 01-1.61-2.46c-.2-1.88-.29-4.56-.29-8.2v-11.12l20.22 24.48h2.17v-19.7a70.73 70.73 0 01.29-8.2 2.28 2.28 0 011.24-2 8.91 8.91 0 012.86-.48v-2.23h-12.4v2.26zm71.38 20.81a17.33 17.33 0 01-2.72 5.23c-1.29 1.4-4.75 1.66-10.27 1.66-2.7 0-4.55-.06-6.08-.21l20.61-28.57-.58-1.17h-20.16c-1.82 0-1.82-.3-2.31-1.22h-1.89c-.16 4.38-.64 9.8-.64 9.8l2.23.08a19.62 19.62 0 011.29-3.66c1-2.07 1.51-2.34 6.71-2.35h8.27l-20.89 28.7.64 1.21h26.07c.76-2.81 1.94-9.08 1.94-9.08z"/>'
      }
    })
  },
  1538: function (e, t, n) {
    n(11).register({
      appenzellerzeitung: {
        width: 252,
        height: 32,
        viewBox: '0 0 252 32',
        data: '<path pid="0" d="M10.33 14.647c-.607-2.063-1.313-4.127-1.885-6.19a6.388 6.388 0 01-.27-1.76c0-.1-.033-.1-.066-.1-.068 0-.068.1-.101.202-.034.102-.034.203-.034.237-.135.575-.572 2.334-2.052 7.51-.034.1-.034.169-.034.237 0 .135.067.27.437.27.572 0 1.211.033 1.817.033.64 0 1.279-.033 1.85-.033.303 0 .404-.034.404-.135a.807.807 0 00-.067-.271zm4.104 9.54c-1.447 0-3.129.033-4.34.135.067-.204.1-.305.1-.474 0-.169-.033-.338-.067-.541.37.034 1.312.135 1.817.135.538 0 .673-.067.673-.372 0-.102-.034-.237-.068-.406-.504-2.13-1.345-5.04-1.682-6.19-.1-.372-.168-.44-.572-.44C9.69 16 8.983 16 8.243 16c-.673 0-1.413 0-2.052.034-.64.034-.74.17-.808.44-.504 1.826-1.144 3.822-1.48 5.75-.034.17-.068.372-.068.542 0 .406.135.676.64.676.37 0 1.177-.101 1.716-.136a2.068 2.068 0 00-.068.508c0 .203.034.372.068.508-1.01-.102-2.322-.136-3.264-.136-.908 0-2.12.034-2.927.136.068-.204.068-.373.068-.508 0-.203-.034-.338-.068-.508.438.035 1.043.102 1.245.102.875 0 1.918-3.315 2.186-4.093.842-2.57 2.423-7.713 5.754-19.315.1.034.236.034.403.034.135 0 .304 0 .404-.034 1.75 7.239 4.913 16.846 6.763 22.698.202.608.505.744.942.744.337 0 1.077-.101 1.649-.136-.034.204-.067.339-.067.508 0 .17.033.304.067.508-1.514-.102-3.432-.136-4.912-.136z" _fill="#18191B"/><path pid="1" d="M27.177 8.964c-1.783 0-2.556 2.401-2.556 6.292 0 .676-.034 1.353-.034 2.03 0 1.488.134 2.705.269 3.619.302 1.996 1.413 2.74 2.523 2.74 1.615 0 2.725-.508 2.725-6.867 0-6.968-1.21-7.814-2.927-7.814zm.74 15.797c-1.379 0-2.624-.474-3.162-1.793-.034-.067-.034-.202-.1-.202-.068 0-.068.067-.068.135v3.213c0 1.42 0 2.876.1 4.296.034.542.337.677.74.677.37 0 1.078-.102 1.447-.17-.066.305-.066.44-.066.576 0 .135 0 .236.066.507-.942-.135-2.456-.17-3.667-.17-1.447 0-3.297.069-4.239.17.034-.135.1-.338.1-.575 0-.169-.033-.338-.1-.508.404.068 1.144.204 1.548.204.403 0 .707-.136.707-.643.1-3.653.134-7.205.134-10.858 0-3.248-.067-6.461-.235-9.709-.034-.845-.303-.98-.707-.98-.27 0-.976.067-1.548.135.067-.271.067-.373.067-.508 0-.136-.033-.27-.067-.541.37.033 1.01.033 1.312.033 1.245 0 3.297-.135 4.509-.236-.034.44-.135 1.488-.168 2.03 0 .135-.068.439-.068.473 0 .068.034.101.067.101.068 0 .135-.135.169-.202.067-.203.067-.44.135-.61.605-1.319 1.985-1.86 3.363-1.86 3.264 0 5.484 2.267 5.484 8.457 0 5.65-1.984 8.558-5.753 8.558zM42.685 8.964c-1.783 0-2.557 2.401-2.557 6.292 0 .676-.034 1.353-.034 2.03 0 1.488.135 2.705.27 3.619.303 1.996 1.413 2.74 2.523 2.74 1.615 0 2.725-.508 2.725-6.867 0-6.968-1.212-7.814-2.927-7.814zm.74 15.797c-1.38 0-2.624-.474-3.163-1.793-.033-.067-.033-.202-.1-.202-.068 0-.068.067-.068.135v3.213c0 1.42 0 2.876.101 4.296.034.542.337.677.74.677.37 0 1.077-.102 1.447-.17-.067.305-.067.44-.067.576 0 .135 0 .236.067.507-.942-.135-2.456-.17-3.667-.17-1.447 0-3.297.069-4.24.17.034-.135.102-.338.102-.575 0-.169-.034-.338-.101-.508.404.068 1.143.204 1.547.204.404 0 .707-.136.707-.643.101-3.653.135-7.205.135-10.858 0-3.248-.068-6.461-.236-9.709-.034-.845-.303-.98-.706-.98-.27 0-.976.067-1.548.135.067-.271.067-.373.067-.508 0-.136-.034-.27-.067-.541.37.033 1.01.033 1.312.033 1.245 0 3.297-.135 4.508-.236-.033.44-.134 1.488-.168 2.03 0 .135-.067.439-.067.473 0 .068.033.101.067.101.067 0 .135-.135.168-.202.067-.203.067-.44.135-.61.605-1.319 1.985-1.86 3.365-1.86 3.263 0 5.483 2.267 5.483 8.457 0 5.65-1.985 8.558-5.753 8.558zM57.751 8.355c-1.413 0-2.793 1.759-2.793 5.683 0 .27.068.338.27.338.504 0 2.287-.169 4.07-.338.707-.067.774-.067.774-.846 0-1.76-.1-4.837-2.321-4.837zm-2.12 6.765c-.706 0-.74.034-.74.474 0 7.712 1.447 8.085 4.105 8.085 1.614 0 2.758-1.015 3.499-3.721.336.304.571.372 1.009.372-.74 2.976-2.86 4.431-5.383 4.431-4.643 0-6.796-2.977-6.796-8.66 0-6.055 2.926-8.558 6.695-8.558 3.836 0 5.585 2.909 5.887 7.78-2.86-.203-5.584-.203-8.276-.203zm21.393 9.032c-1.244 0-2.456.067-3.364.203.034-.237.034-.406.034-.541s0-.305-.034-.575c.437.101.807.202 1.11.202.438 0 .74-.135.774-.54.135-2.639.135-5.345.135-7.984 0-1.42-.068-2.841-.202-4.06-.168-1.42-.942-1.792-1.716-1.792-1.178 0-2.02.541-2.625 1.996-.47 1.15-.672 2.74-.672 5.006 0 2.3-.034 4.567.1 6.867.035.372.337.507.808.507.337 0 .74-.067 1.178-.168-.068.304-.068.406-.068.54 0 .136 0 .271.068.542-.942-.136-2.154-.169-3.365-.169-1.447 0-3.263.033-4.206.135.034-.203.068-.372.068-.541 0-.17-.034-.305-.067-.507.37.067 1.076.168 1.446.168.37 0 .64-.135.673-.608.101-2.2.135-4.33.135-6.495 0-2.233-.034-4.499-.135-6.8-.033-.507-.1-.676-.74-.676-.336 0-1.077.101-1.413.136.067-.237.067-.339.067-.474 0-.135-.034-.27-.067-.541.673.067 1.312.067 1.884.067 1.245 0 2.557-.067 3.835-.203-.033.575-.1 1.522-.134 2.267 0 .101-.034.236-.034.338l.102.068c0-.034.033-.068.066-.102.034-.068.034-.17.068-.236.942-1.996 2.792-2.47 4.34-2.47 2.86 0 3.97 1.793 3.97 5.412 0 1.76-.034 3.485-.034 5.244 0 1.522.034 3.112.101 4.634.034.338.236.406.538.406.337 0 .976-.068 1.313-.135-.067.27-.067.406-.067.54 0 .136 0 .237.067.508-1.11-.135-2.725-.169-3.937-.169zm11.294.068c-2.087 0-4.139.035-5.821.103-.034-.271-.067-.339-.202-.474.101-.17.74-1.082 1.043-1.624 2.153-3.788 2.96-5.243 3.7-6.664.741-1.42 1.448-2.841 3.433-6.529.033-.067.067-.135.067-.169 0-.067-.034-.067-.067-.067-.034 0-.068.034-.135.034-3.97 0-5.888.27-6.023 4.87-.268-.033-.437-.067-.571-.067-.068 0-.169.034-.37.068.1-.846.134-1.793.134-2.74 0-.981-.034-1.962-.134-2.977 1.917.067 4.037.102 6.089.102 1.85 0 3.5-.035 5.047-.102 0 .236.067.372.135.507-2.591 4.533-3.398 6.056-4.172 7.51-.774 1.455-1.447 2.875-3.634 7.104-.067.169-.101.237-.101.27 0 .068.034.068.067.068.068 0 .135-.034.169-.034 4.642 0 6.729-.034 6.863-5.514.27.068.337.068.437.068.101 0 .202 0 .472-.068-.102.948-.135 1.963-.135 3.045 0 1.082.034 2.266.135 3.383a191.88 191.88 0 00-6.426-.102zm14.361-15.865c-1.413 0-2.792 1.759-2.792 5.683 0 .27.067.338.269.338.505 0 2.287-.169 4.071-.338.707-.067.773-.067.773-.846 0-1.76-.101-4.837-2.321-4.837zm-2.12 6.765c-.706 0-.74.034-.74.474 0 7.712 1.447 8.085 4.105 8.085 1.615 0 2.759-1.015 3.499-3.721.336.304.572.372 1.009.372-.74 2.976-2.859 4.431-5.383 4.431-4.643 0-6.796-2.977-6.796-8.66 0-6.055 2.927-8.558 6.695-8.558 3.836 0 5.585 2.909 5.888 7.78-2.86-.203-5.585-.203-8.277-.203zm13.189 9.067c-1.312 0-2.994.033-4.273.135.068-.27.068-.406.068-.541 0-.136 0-.237-.068-.541a6.387 6.387 0 001.413.202c.37 0 .639-.135.674-.575.1-2.3.167-6.832.167-11.4 0-3.45-.067-6.866-.167-9.403-.035-.71-.203-.812-.539-.812-.37 0-1.178.102-1.548.135.068-.237.068-.338.068-.44 0-.1 0-.236-.068-.507.606.034 1.447.034 1.952.034 1.245 0 2.523-.034 3.802-.17-.101 2.132-.135 6.293-.135 10.589 0 4.87.034 9.877.101 11.873 0 .508.303.643.673.643.403 0 1.11-.068 1.48-.136-.067.27-.067.44-.067.576 0 .135 0 .202.067.473-1.11-.135-2.523-.135-3.6-.135zm8.176 0c-1.312 0-2.994.033-4.273.135.068-.27.068-.406.068-.541 0-.136 0-.237-.068-.541a6.395 6.395 0 001.413.202c.37 0 .64-.135.674-.575.101-2.3.167-6.832.167-11.4 0-3.45-.066-6.866-.167-9.403-.034-.71-.203-.812-.539-.812-.37 0-1.177.102-1.548.135.068-.237.068-.338.068-.44 0-.1 0-.236-.068-.507.606.034 1.447.034 1.952.034 1.245 0 2.523-.034 3.802-.17-.101 2.132-.135 6.293-.135 10.589 0 4.87.034 9.877.101 11.873 0 .508.303.643.673.643.403 0 1.11-.068 1.48-.136-.067.27-.067.44-.067.576 0 .135 0 .202.067.473-1.11-.135-2.523-.135-3.6-.135zm10.682-15.832c-1.413 0-2.792 1.759-2.792 5.683 0 .27.067.338.269.338.504 0 2.287-.169 4.071-.338.706-.067.773-.067.773-.846 0-1.76-.101-4.837-2.321-4.837zm-2.119 6.765c-.707 0-.741.034-.741.474 0 7.712 1.447 8.085 4.104 8.085 1.616 0 2.76-1.015 3.5-3.721.336.304.572.372 1.009.372-.74 2.976-2.86 4.431-5.383 4.431-4.642 0-6.796-2.977-6.796-8.66 0-6.055 2.927-8.558 6.695-8.558 3.836 0 5.585 2.909 5.888 7.78-2.86-.203-5.585-.203-8.276-.203zm19.529-1.894c-.808 0-1.548-.71-1.548-1.826V9.302c0-.406-.135-.508-.269-.508-.64 0-1.312.812-1.885 1.76-.504.846-.773 1.792-.908 2.977-.067.676-.101 2.3-.101 4.025 0 2.097.034 4.364.067 5.243.034.507.338.643.808.643.403 0 1.144-.102 1.513-.17-.066.305-.066.407-.066.542 0 .135 0 .27.066.54-.941-.134-2.489-.168-3.7-.168-1.447 0-3.264.034-4.205.136.033-.17.067-.305.067-.474 0-.17-.034-.373-.067-.575.336.067 1.043.169 1.413.169.404 0 .673-.136.706-.643.101-2.198.135-4.33.135-6.461 0-2.199-.034-4.398-.135-6.63-.033-.677-.302-.846-.841-.846-.303 0-1.009.034-1.648.136.067-.237.067-.338.067-.474 0-.135-.034-.27-.067-.541.706.067 1.648.067 2.22.067 1.245 0 2.523-.067 3.835-.203-.033.575-.168 2.166-.168 2.571 0 .136-.068.237-.068.372 0 .068.068.102.102.102.033 0 .101-.034.134-.102.034-.101.068-.304.135-.44.135-.304.37-.71.639-1.115.572-.813 1.446-1.59 2.961-1.59 1.985 0 2.355 1.826 2.355 3.247 0 1.623-.74 2.334-1.547 2.334zm11.518 10.994c-2.995 0-5.989.033-8.209.101 0-.203.033-.338-.102-.542.505-.473 1.01-1.319 1.279-1.826 2.826-5.21 6.695-12.753 9.588-18.706.203-.44.471-.812.673-1.117.169-.27.236-.44.236-.54 0-.102-.067-.136-.168-.136h-.505c-1.85 0-4.609-.068-6.292.812-1.48.778-2.388 2.3-2.388 5.615-.236-.068-.337-.068-.404-.068s-.168.034-.404.068c.101-1.049.169-2.47.169-3.924 0-1.15-.034-2.334-.169-3.518 2.322.102 5.013.135 7.672.135 2.523 0 4.945-.033 6.963-.135 0 .236.068.338.202.507-.37.576-.605.88-.908 1.421-2.994 5.548-7.368 14.106-9.959 19.519-.201.44-.471.811-.639 1.082-.135.203-.167.304-.167.372s.032.101.133.101c.068 0 .202-.033.337-.033 6.426 0 10.698-.034 10.9-7.882.236.034.337.067.472.067.134 0 .235 0 .471-.033a48.793 48.793 0 00-.236 4.634c0 1.489.101 2.774.236 4.127a361.332 361.332 0 00-8.781-.102zm16.907-15.865c-1.414 0-2.794 1.759-2.794 5.683 0 .27.068.338.269.338.505 0 2.289-.169 4.072-.338.706-.067.774-.067.774-.846 0-1.76-.102-4.837-2.321-4.837zm-2.121 6.765c-.706 0-.74.034-.74.474 0 7.712 1.447 8.085 4.104 8.085 1.616 0 2.759-1.015 3.5-3.721.337.304.571.372 1.009.372-.74 2.976-2.86 4.431-5.383 4.431-4.643 0-6.796-2.977-6.796-8.66 0-6.055 2.927-8.558 6.695-8.558 3.836 0 5.586 2.909 5.888 7.78-2.859-.203-5.585-.203-8.277-.203zm13.587-10.487c-1.312 0-1.951-1.082-1.951-2.097 0-1.048.639-2.097 1.951-2.097 1.279 0 1.918 1.049 1.918 2.097 0 1.015-.639 2.097-1.918 2.097zm.068 19.553c-1.514 0-3.399.033-4.341.135.034-.237.034-.372.034-.507 0-.136 0-.305-.034-.575.539.135 1.245.236 1.548.236.505 0 .842-.203.875-.913.101-2.233.135-4.398.135-6.597 0-2.13-.034-4.295-.135-6.494-.033-.575-.303-.71-.739-.71-.372 0-1.112.068-1.65.1.034-.168.068-.337.068-.473 0-.17-.034-.338-.068-.541.842.068 1.918.068 2.658.068 1.077 0 2.153-.034 3.298-.136-.102 2.944-.169 5.65-.169 8.39 0 2.13.034 4.262.135 6.393.034.71.302.88.706.88.403 0 1.11-.102 1.514-.17-.034.27-.034.406-.034.542 0 .135 0 .27.068.54-.875-.1-2.524-.168-3.869-.168zm9.842.304c-2.792 0-3.835-1.657-3.835-4.126 0-3.721.168-7.375.168-11.096 0-.27-.034-.338-.27-.338-.47 0-1.446.033-2.085.101.067-.27.067-.406.067-.54 0-.136-.034-.272-.067-.576.571.101 1.48.101 1.884.101.403 0 .471-.033.471-.371 0-.61-.068-1.726-.1-2.098 1.041-.44 2.455-1.285 3.263-1.86.1.067.1.067.268.1-.033.576-.168 2.403-.168 3.722 0 .474.034.507.505.507.808 0 1.514 0 2.49-.067-.034.27-.068.406-.068.541s.034.304.068.541a31.473 31.473 0 00-2.524-.101c-.404 0-.437.033-.437.372 0 .237-.134 6.427-.134 7.104 0 .676 0 5.547.202 6.089.201.575.571.98 1.244.98.975 0 .975-1.217.975-2.367.372.237.573.27.774.27h.27c-.337 2.03-.438 3.113-2.961 3.113zm19.771-.71c0 .136 0 .271.034.542-.707-.067-1.615-.067-2.187-.067-1.245 0-2.523.067-3.835.203 0-.136.033-.61.1-2.166 0-.067.067-.1.067-.202 0-.035-.033-.136-.067-.136a.203.203 0 00-.168.136c-.034.033-.034.101-.067.169-.942 1.894-2.759 2.334-4.273 2.334-2.86 0-3.97-1.793-3.97-5.413 0-1.759.033-3.518.033-5.276 0-1.523-.033-3.011-.1-4.534-.033-.338-.067-.44-.337-.44-.336 0-1.177 0-1.681.102.066-.27.066-.406.066-.54 0-.136 0-.238-.066-.508 1.109.135 2.893.169 4.104.169.1 0 1.278-.102 1.514-.102 0 .339-.135 2.707-.135 5.615 0 1.083-.033 2.402-.033 3.722 0 1.42.066 2.841.202 4.059.168 1.42.941 1.793 1.715 1.793 2.053 0 2.658-1.861 2.994-3.62.269-1.455.371-3.18.371-4.905 0-1.793-.102-3.585-.169-5.108-.034-.643-.067-.676-.504-.676-.404 0-1.279 0-1.817.101.068-.304.068-.406.068-.54 0-.136 0-.272-.068-.542.942.136 2.456.169 3.667.169.506 0 1.918-.102 2.154-.135 0 .507-.168 5.75-.168 7.983 0 2.233.033 4.43.134 6.731.034.576.135.744.571.744.472 0 1.28-.033 1.918-.135-.067.237-.067.373-.067.474zm12.853.372c-1.244 0-2.456.067-3.365.203.034-.237.034-.406.034-.541s0-.305-.034-.575c.438.101.808.202 1.111.202.437 0 .74-.135.774-.54.134-2.639.134-5.345.134-7.984 0-1.42-.067-2.841-.202-4.06-.168-1.42-.942-1.792-1.716-1.792-1.177 0-2.018.541-2.624 1.996-.47 1.15-.672 2.74-.672 5.006 0 2.3-.034 4.567.1 6.867.034.372.337.507.808.507.336 0 .74-.067 1.177-.168-.067.304-.067.406-.067.54 0 .136 0 .271.067.542-.942-.136-2.153-.169-3.364-.169-1.447 0-3.264.033-4.206.135.034-.203.068-.372.068-.541 0-.17-.034-.305-.068-.507.37.067 1.077.168 1.447.168.371 0 .639-.135.673-.608.101-2.2.134-4.33.134-6.495 0-2.233-.033-4.499-.134-6.8-.034-.507-.1-.676-.74-.676-.336 0-1.077.101-1.413.136.067-.237.067-.339.067-.474 0-.135-.034-.27-.067-.541.673.067 1.312.067 1.883.067a36.73 36.73 0 003.837-.203c-.034.575-.102 1.522-.135 2.267 0 .101-.034.236-.034.338l.101.068c0-.034.034-.068.068-.102.033-.068.033-.17.067-.236.943-1.996 2.792-2.47 4.339-2.47 2.861 0 3.971 1.793 3.971 5.412 0 1.76-.033 3.485-.033 5.244 0 1.522.033 3.112.1 4.634.034.338.235.406.539.406.335 0 .975-.068 1.311-.135-.067.27-.067.406-.067.54 0 .136 0 .237.067.508-1.109-.135-2.725-.169-3.936-.169zM243.26 8.22c-1.111 0-2.052.373-2.052 5.007 0 3.721.806 4.263 2.052 4.263 1.312 0 1.985-.17 1.985-5.21 0-3.552-1.043-4.06-1.985-4.06zm.538 15.663c-2.288 0-4.879.338-4.879 3.01 0 2.64 2.019 3.553 4.543 3.553 3.565 0 5.315-1.354 5.315-3.484 0-2.741-2.557-3.08-4.979-3.08zm6.224-13.024c-.941 0-1.212-.609-1.212-1.217 0-.372.068-.643.068-.71 0-.069-.033-.102-.101-.102-.302 0-1.076.406-1.076.71 0 .068 0 .169.067.305.337.71.707 1.826.707 2.875 0 3.078-2.053 5.446-5.182 5.446-1.413 0-2.355-.44-3.028-.914a.834.834 0 00-.471-.134c-.773 0-1.716 1.42-1.716 2.164 0 1.184 1.548 1.522 2.591 1.522.639 0 3.701-.1 4.407-.1 3.432 0 5.148 1.488 5.148 4.904 0 4.093-2.995 5.582-6.796 5.582-5.35 0-6.729-2.47-6.729-4.195 0-2.097 1.48-2.774 2.859-3.214.035 0 .54-.203.572-.372h-.101c-.168 0-.336.068-.471.068a1.39 1.39 0 01-.537-.102c-1.683-.642-2.187-1.69-2.187-3.517 0-1.32.37-2.132 2.018-3.079.236-.135.404-.236.404-.338 0-.034-.034-.102-.101-.203-.841-.914-1.211-2.064-1.211-3.348 0-3.35 2.154-5.278 5.383-5.278 1.513 0 2.557.44 3.297.947.269.203.437.271.538.271.101 0 .169-.068.303-.17.64-.473 1.144-.845 1.985-.845.909 0 1.649.575 1.649 1.792 0 .779-.539 1.252-1.077 1.252z" _fill="#18191B"/>'
      }
    })
  },
  1542: function (e, t, n) {
    n(11).register({
      oltnertagblatt: {
        width: 1794,
        height: 250,
        viewBox: '0 0 1794 250',
        data: '<path pid="0" d="M1766.7 23.4h-2.1c-14.9 17-43.2 36.5-63.3 44.1v4.6h13.4v83.1c0 27.1 15.5 41.7 39.6 41.7 20.7 0 37.1-11.9 46.9-27.1l-.9-1.2c-4.6 3-11 4.3-15.5 4.3-11.6 0-18.3-5.5-18.3-18.6V72.1h29.8v-10h-29.5V23.4h-.1zm-95.9 0h-2.1c-14.9 17-43.2 36.5-63.3 44.1v4.6h13.4v83.1c0 27.1 15.5 41.7 39.6 41.7 20.7 0 37.1-11.9 46.9-27.1l-.9-1.2c-4.6 3-11 4.3-15.5 4.3-11.6 0-18.3-5.5-18.3-18.6V72.1h29.8v-10h-29.8V23.4h.2zm-130 152.5c-11.3 0-17.3-11-17.3-27.7 0-16.1 5.2-22.5 15.8-26.8l7.3-3v55.7c-.6 1.2-3.1 1.8-5.8 1.8zm56.3-74.5c0-33.5-22.2-44.1-58.4-44.1-28.9 0-56.9 12.2-56.9 33.8 0 9.4 6.1 15.8 12.8 18.3l32.3-4c-1.5-4.9-3-14.6-3-21.6 0-13.4 3.7-22.5 12.5-22.5 8.2 0 10.7 7.9 10.7 19.5v33.5l-35 11.6c-22.5 7.3-37.4 17.7-37.4 37.4 0 21.3 16.7 32.9 36.2 32.9 16.1 0 29.5-8.8 36.5-18.6 4 11.6 15.8 19.5 31 19.5 14.9 0 28.6-8.5 35.3-19.5l-.9-1.2c-1.2.6-3.3 1.2-6.4 1.2-5.8 0-8.8-3.3-8.8-10v-66h-.5v-.2zM1462.9 0h-.9l-63.3 14.9v.9l13.1 15.2v151c0 7.3-4 8.2-13.1 8.8v3.3h77.3v-3.2c-9.1-.6-13.1-1.5-13.1-8.8V0zM1321 192.7c-10.7 0-15.2-11.6-15.2-27.7V86.5c4-2.1 7.3-2.4 11.6-2.4 16.7 0 28.6 15.8 28.6 50.8 0 32.5-8.2 57.8-25 57.8zm-66-161.6v148.8c16.7 12.8 43.5 16.7 66.4 16.7 40.5 0 76.7-28.6 76.7-78.5 0-37.4-19.5-61.2-49.3-61.2-20.7 0-36.2 14-42.6 27.1V0h-.9l-63.4 14.9v.9l13.1 15.3zm-56.9 174.1c11.6 0 18.3 4.3 18.3 14.9 0 18.6-20.7 26.2-41.4 26.2-23.4 0-42-11.3-42-28.9 0-6.1 1.5-10 4.6-12.5h60.6v.3h-.1zm51.1-10.1c0-23.4-16.1-35.6-47.2-35.6h-56.6c-5.2 0-7.6-3-7.6-6.7 0-4.6 3.3-9.1 6.7-12.2 9.1 3.3 19.5 4.9 28.9 4.9 33.5 0 61.5-17 61.5-46.6 0-11.9-7.3-22.2-18-29.2l26.2 6.7h1.8V57.8l-47.2 3c-7.3-2.1-15.2-3.3-22.2-3.3-33.5 0-61.5 17-61.5 46.6 0 18.3 12.2 29.8 28 36.2-16.4 6.1-30.1 17.7-30.1 35.6 0 15.5 12.2 23.7 23.4 28.6-12.8 0-28.9 6.7-28.9 19.2 0 17.7 29.2 26.2 62.4 26.2 49.1 0 80.4-22.5 80.4-54.8zm-73.6-52.6c-10 0-14.9-19.2-14.9-46 0-22.5 2.7-36.2 12.8-36.2 10 0 14.9 19.2 14.9 45-.4 23.8-3.1 37.2-12.8 37.2zm-135.8 33.4c-11.3 0-17.3-11-17.3-27.7 0-16.1 5.2-22.5 15.8-26.8l7.3-3v55.7c-.9 1.2-3.4 1.8-5.8 1.8zm56-74.5c0-33.5-22.2-44.1-58.4-44.1-28.9 0-56.9 12.2-56.9 33.8 0 9.4 6.1 15.8 12.8 18.3l32.3-4c-1.5-4.9-3-14.6-3-21.6 0-13.4 3.7-22.5 12.5-22.5 8.2 0 10.7 7.9 10.7 19.5v33.5l-35 11.6c-22.5 7.3-37.4 17.7-37.4 37.4 0 21.3 16.7 32.9 36.2 32.9 16.1 0 29.5-8.8 36.5-18.6 4 11.6 15.8 19.5 31 19.5 14.9 0 28.6-8.5 35.3-19.5l-.9-1.2c-1.2.6-3.3 1.2-6.4 1.2-5.8 0-8.8-3.3-8.8-10v-66h-.5v-.2zm-289.1-81L803 85.2h2.7c17-47.8 34.1-59.7 50.2-59.7h6.1v149.8c0 12.8-3.3 13.7-19.5 15.5v4h93.1v-4c-16.1-1.8-19.5-2.7-19.5-15.5v-150h6.1c16.1 0 32.9 12.2 50.2 59.7h2.7l-3.7-64.8H806.7v.2zm-103.302 84.9l.9-48.1h-.9l-64.2 14.9v.9l13.1 15.2V182c0 7.3-4 8.2-13.1 8.8v3.3h82.8v-3.3c-12.5-1.2-18.6-2.7-18.6-10v-72.4c10.7-6.4 25.3-7 41.1-7h6.4V60.3c-2.7-1.8-7-3.3-12.5-3.3-18.9.2-30.1 20.3-35 48.3zm-126-44.1c11.9 0 16.7 19.5 16.7 46.3h-35.9c.6-24.7 6.4-46.3 19.2-46.3zm60.6 86.4l-1.2-.6c-9.1 11.6-22.5 16.4-36.5 16.4-25 0-41.1-18-42-51.1h79.4v-1.5c0-29.2-18.9-53.9-56-53.9-36.8 0-68.8 31.7-68.8 72.7 0 42.9 30.1 67 65.4 67 31.1.3 54.5-18.8 59.7-49zm-189 34.4c0 7.3-4 8.2-13.1 8.8v3.3h77.3v-3.3c-9.1-.6-13.1-1.5-13.1-8.8V97.7c0-25-14-40.8-38-40.8-21 0-39.6 16.4-46.9 28l.9-28h-.9l-64.2 14.9v.9l13 15.3v93.7c0 7.3-4 8.2-13.1 8.8v3.3h77.3v-3.3c-9.1-.6-13.1-1.5-13.1-8.8v-95c5.8-2.1 10.7-3.3 17.7-3.3 12.5 0 16.1 7 16.1 16.1l.1 82.5zm-130-158.6h-2.1c-14.9 17-43.2 36.5-63.3 44.1v4.6h13.4v83.1c0 27.1 15.5 41.7 39.6 41.7 20.7 0 37.1-11.9 46.9-27.1l-.9-1.2c-4.6 3-11 4.3-15.5 4.3-11.6 0-18.3-5.5-18.3-18.6V72.1h29.8v-10h-29.8V23.4h.2zM244.398 0h-.9l-63.3 14.9v.9l13.1 15.2v151c0 7.3-4 8.2-13.1 8.8v3.3h77.3v-3.3c-9.1-.6-13.1-1.5-13.1-8.8V0zm-155.2 21c23.4 0 32 39 32 89.8 0 39-6.1 82.5-29.5 82.5-23.7 0-32-39-32-89.8 0-39 6-82.5 29.5-82.5zm3.6-3.3c-50.2 0-90.4 38.3-90.4 93.1 0 46.3 31.7 86.1 85.2 86.1 50.2 0 90.4-38.4 90.4-93.1.1-46.6-31.3-86.1-85.2-86.1z" _fill="#C02010"/>'
      }
    })
  },
  155: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'PageAdvert',
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
      computed: {
        adName: function () {
          return this.data.content
        }
      },
      mounted: function () {
        this.hydrated = 1
      }
    },
    o = (n(1261), n(1)),
    component = Object(o.a) (r, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('div', {
        staticClass: 'pageelement pageelement--advertisement'
      }, [
        e.$store.state.features.advertisements ? n('div', {
          staticClass: 'resor'
        }, [
          e.data.content ? n('div', {
            staticClass: 'resor__item',
            attrs: {
              id: e.adName,
              'data-hydrated': e.$store.state.isrendition.indexOf('webview') > - 1 ? 1 : e.hydrated
            }
          }) : e._e()
        ]) : e._e()
      ])
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  1552: function (e, t, n) {
    n(11).register({
      'appenzellerzeitung--mobile': {
        width: 37,
        height: 16,
        viewBox: '0 0 37 16',
        data: '<path pid="0" d="M13.107 16a54.526 54.526 0 00-3.232-.089c-1.166 0-2.118.03-2.856.089a1.66 1.66 0 00.066-.31c0-.059-.015-.177-.044-.354a59.32 59.32 0 001.195.088c.295 0 .443-.08.443-.243 0-.06-.015-.148-.044-.266-.222-.9-.59-2.25-1.107-4.051-.06-.192-.185-.288-.377-.288a37.924 37.924 0 00-1.35-.023c-.37 0-.82.008-1.35.023-.296.014-.473.11-.532.287-.251.842-.576 2.096-.974 3.764a2.66 2.66 0 00-.045.355c0 .295.14.442.421.442.089 0 .273-.014.554-.044.295-.03.487-.044.575-.044-.03.088-.044.2-.044.332 0 .133.015.243.044.332a23.4 23.4 0 00-2.147-.089c-.812 0-1.454.03-1.927.089.03-.103.045-.214.045-.332 0-.103-.015-.214-.045-.332.517.044.79.066.82.066.369 0 .856-.9 1.46-2.7.606-1.816 1.86-6.023 3.765-12.62.059.014.147.021.265.021.133 0 .222-.007.266-.022.694 2.82 2.177 7.771 4.45 14.856.104.325.31.487.62.487.074 0 .244-.014.51-.044a5.71 5.71 0 01.575-.044c-.03.133-.044.243-.044.332 0 .03.014.14.044.332zm-5.89-6.155c0-.015-.014-.074-.044-.177-.28-.9-.693-2.251-1.24-4.052a4.38 4.38 0 01-.176-1.151c0-.044-.015-.066-.045-.066-.015 0-.044.096-.088.287-.118.561-.569 2.2-1.35 4.915a.49.49 0 00-.023.155c0 .119.096.178.288.178.56.014.96.022 1.195.022.296 0 .701-.008 1.218-.022.177 0 .266-.03.266-.089zM24.008 4.73c0 1.314-.318 2.34-.952 3.078-.635.738-1.617 1.107-2.945 1.107-.443 0-.922-.015-1.439-.044-.502-.03-.723-.044-.664-.044-.177 0-.266.11-.266.332 0 1.446.066 3.35.2 5.712.014.354.177.531.486.531.089 0 .273-.014.554-.044.295-.03.502-.044.62-.044a.901.901 0 00-.067.31c0 .073.023.199.067.376a39.52 39.52 0 00-2.79-.089c-1.004 0-2.051.03-3.144.089.03-.162.045-.288.045-.376a.978.978 0 00-.045-.31 7.8 7.8 0 01.642.044c.266.03.443.044.532.044.295 0 .45-.162.465-.487.059-1.373.088-3.675.088-6.908 0-2.42-.051-4.656-.155-6.708-.014-.221-.162-.332-.443-.332-.103 0-.28.015-.53.044-.296.03-.495.044-.599.044.03-.132.045-.25.045-.354 0-.088-.015-.2-.045-.332 1.329.074 2.392.11 3.189.11.324 0 .811-.014 1.46-.044A24.55 24.55 0 0119.802.37c.974 0 1.786.17 2.436.51 1.18.649 1.77 1.933 1.77 3.852zm-2.546.045c0-1.284-.155-2.192-.465-2.723-.399-.709-1.159-1.063-2.28-1.063-.547 0-.827.103-.842.31-.089 1.432-.133 3.58-.133 6.443 0 .206.052.347.155.42.103.074.347.111.73.111 1.196 0 1.979-.266 2.348-.797.324-.458.487-1.358.487-2.701zM36.24 16a248.46 248.46 0 00-5.779-.066c-1.904 0-3.704.022-5.402.066 0-.074-.022-.192-.066-.354.25-.222.531-.62.841-1.196a300.04 300.04 0 006.31-12.243c.059-.118.207-.362.443-.73.103-.163.155-.281.155-.355 0-.06-.037-.089-.111-.089h-.332c-1.033 0-1.742.015-2.125.045-.871.073-1.543.236-2.015.487-1.048.531-1.572 1.756-1.572 3.675a1.555 1.555 0 00-.266-.044c-.015 0-.103.014-.266.044.074-.694.111-1.55.111-2.568 0-.915-.037-1.683-.11-2.303 1.357.06 3.04.089 5.047.089 1.772 0 3.3-.03 4.583-.089a.57.57 0 00.133.332c-.133.192-.332.502-.598.93-2.464 4.546-4.649 8.804-6.553 12.775a5.111 5.111 0 01-.42.708c-.075.104-.111.185-.111.244 0 .044.03.066.088.066a.361.361 0 00.089-.022h.133c2.568 0 4.273-.221 5.114-.664 1.314-.679 2-2.177 2.059-4.494.192.03.295.044.31.044.059 0 .162-.008.31-.022a35.536 35.536 0 00-.155 3.033c0 .856.051 1.756.155 2.701z" _fill="#18191B"/>'
      }
    })
  },
  1555: function (e, t, n) {
    n(11).register({
      'oltnertagblatt--mobile': {
        width: 411,
        height: 207,
        viewBox: '0 0 411 207',
        data: '<path pid="0" d="M102.45 191.551c-27.1 0-36.75-39.9-36.75-92.35 0-39.6 7.15-83.8 33.9-83.8 27.05 0 36.75 39.9 36.75 92.35 0 39.6-7.1 83.8-33.9 83.8zm-4.3 14.8c60.7 0 103.75-41.35 103.75-106.9 0-53.3-33.35-98.9-98.05-98.9C43.15.55.1 41.85.1 107.4c.05 53.35 33.35 98.95 98.05 98.95zm119.4-202.9l-4.25 74.4h12.85c21.95-46.15 30.2-62.15 47.9-62.15h6.85V173c0 14.55-4 15.65-22.5 17.65v12.85h107.45v-12.85c-18.5-2-22.5-3.15-22.5-17.65V15.7h6.85c17.65 0 25.95 15.95 47.9 62.15h12.85l-4.45-74.4H217.55z" _fill="#fff"/>'
      }
    })
  },
  1558: function (e, t, n) {
    n(11).register({
      'bellevue--mobile': {
        width: 16,
        height: 16,
        viewBox: '0 0 226.78 273.39',
        data: '<path pid="0" d="M76.59 65.61h34.12c28.8 0 43.4 6.69 43.4 23.88 0 13.24-11.74 21.29-29.48 22.65v.3c19.52 1.09 31.8 9.14 31.8 23.47 0 18-15.42 25.25-45.45 25.25H76.59V65.61zm24 5.05v39.31h8.87c12.42 0 19.79-6.41 19.79-20.2 0-12.69-7.23-19.11-19.79-19.11h-8.85zm0 44.36v41.08h9c13.65 0 21.7-6.82 21.7-20.48 0-13.1-8.19-20.6-21.57-20.6h-9.11z"/><path pid="1" d="M113.39 0a113.39 113.39 0 10113.39 113.38A113.52 113.52 0 00113.39 0zm32.7 213.8a104.63 104.63 0 01-65.45 0C37.2 200.14 3.87 160.38 3.87 113.4S37.31 26.56 80.78 12.94a104.72 104.72 0 0165.18 0c43.53 13.61 77 53.42 77 100.46s-33.41 86.75-76.87 100.4zm-23.78 56.44c-.94 1-3.44 1.2-7.43 1.2-2 0-3.29 0-4.4-.15l14.92-20.69-.42-.85h-14.6c-1.32 0-1.32-.22-1.68-.88h-1.39c-.12 3.17-.46 7.1-.46 7.1l1.62.06a14.2 14.2 0 01.94-2.65c.74-1.5 1.09-1.69 4.86-1.7h6l-15.13 20.76.47.88h18.88c.55-2 1.4-6.58 1.4-6.58l-1.58-.3a12.56 12.56 0 01-2 3.8zm-27.39-18.86a13.66 13.66 0 011.67.14 1.77 1.77 0 011.79 1.79 45.32 45.32 0 01.24 5.82v7.64l-14.4-17h-5.66v1.61a5.76 5.76 0 012.52.58c1.46 1 1.33 2 1.33 4v7.77c0 2.58-.07 4.55-.21 6a1.82 1.82 0 01-1.14 1.74 7.3 7.3 0 01-2 .28v1.62h9v-1.62a9.11 9.11 0 01-2.23-.31 1.78 1.78 0 01-1.17-1.78c-.14-1.36-.21-3.3-.21-5.93v-8.05l14.64 17.72h1.57v-14.27a51.21 51.21 0 01.21-5.94 1.65 1.65 0 01.9-1.46 6.45 6.45 0 012.07-.34v-1.62h-9v1.62zm51.68 15.06a12.55 12.55 0 01-2 3.79c-.94 1-3.44 1.2-7.43 1.2-2 0-3.29 0-4.4-.15l14.92-20.69-.42-.85h-14.6c-1.32 0-1.32-.22-1.68-.88h-1.35c-.12 3.17-.46 7.1-.46 7.1l1.62.06a14.2 14.2 0 01.94-2.65c.74-1.5 1.09-1.69 4.86-1.7h6l-15.13 20.77.47.88h18.87c.55-2 1.4-6.58 1.4-6.58z"/>'
      }
    })
  },
  156: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'PageBillbaord',
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
      computed: {
        isArticle: function () {
          return 'Article' === this.$store.state.header.pageType
        },
        allowAd: function () {
          return !!this.$store.state.features.advertisements && !(!this.$store.state.features.pageAllAds && !this.isArticle)
        }
      },
      mounted: function () {
        this.hydrated = 1
      }
    },
    o = n(1),
    component = Object(o.a) (r, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return e.allowAd ? n('div', {
        staticClass: 'pageelement pageelement--advertisement'
      }, [
        n('div', {
          staticClass: 'resor'
        }, [
          n('div', {
            staticClass: 'resor__item',
            attrs: {
              id: e.data.content.text,
              'data-hydrated': e.$store.state.isrendition.indexOf('webview') > - 1 ? 1 : e.hydrated
            }
          })
        ])
      ]) : e._e()
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  1576: function (e, t, n) {
    'use strict';
    function r(e, t, path, n) {
      return [{
        key: '__ID__',
        value: e
      },
      {
        key: '__URL__',
        value: t
      },
      {
        key: '__PATH__',
        value: path
      },
      {
        key: '__SERVICE_ID__',
        value: n
      }
      ].reduce(((e, {
        key: t,
        value: n
      }) =>e.replace(new RegExp(t, 'g'), n)), function () {
        function e() {
          window.Coral && window.Coral.Talk ? r() : async function () {
            try {
              const e = function () {
                try {
                  return window.digitalData.user[0].profile[0].attributes.c1.sessionID
                } catch (e) {
                  return null
                }
              }();
              if (e) {
                const r = async function (e) {
                  const t = /(iPhone|iPod|iPad|Macintosh).*AppleWebKit/i.test(navigator.userAgent);
                  try {
                    const n = await fetch('__PATH__', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Basic ${ btoa('vampmin:YaYblY0ujB6B') }`
                      },
                      body: JSON.stringify({
                        session_id: e,
                        service: t ? '__SERVICE_ID__newsappios' : '__SERVICE_ID__newsappandroid',
                        client_id: '__SERVICE_ID__'
                      })
                    }),
                    {
                      token: r
                    }
                    = await n.json();
                    return r
                  } catch (e) {
                    return console.log('Coral token exchange failed', e),
                    null
                  }
                }(e),
                o = t();
                await o,
                n(await r)
              } else await t(),
              n()
            } catch (e) {
              console.log(e)
            }
          }()
        }
        function t() {
          return new Promise((function (e) {
            const script = document.createElement('script');
            script.setAttribute('src', '__URL__/static/embed.js'),
            script.async = !0,
            script.onload = e,
            document.head.appendChild(script)
          }))
        }
        function n(e) {
          const t = {
            talk: '__URL__',
            asset_id: '__ID__'
          };
          e && (t.auth_token = e),
          window.Coral.Talk.render(document.getElementById('coral_community'), t),
          r()
        }
        function r() {
          const e = document.querySelector('.comments__overlay'),
          t = document.querySelector('.comments__background');
          if (e) {
            e.classList.add('comments__overlay--open'),
            window.bodyScrollLock.disableBodyScroll(e);
            try {
              window.vamp.openComments()
            } catch (e) {
              console.log(e)
            }
          }
          e && t && t.classList.add('comments__background--active')
        }
        function o() {
          const e = document.querySelector('.comments__overlay');
          if (e) {
            try {
              window.vamp.closeComments()
            } catch (e) {
              console.log(e)
            }
            e.classList.remove('comments__overlay--open'),
            window.bodyScrollLock.enableBodyScroll(e)
          }
          const t = document.querySelector('.comments__background');
          t && t.classList.remove('comments__background--active')
        }
        document.querySelectorAll('.comments__open').forEach((function (t) {
          t.addEventListener('click', e)
        })),
        document.querySelectorAll('.comments__close').forEach((function (e) {
          e.addEventListener('click', o)
        })),
        document.querySelectorAll('.comments__background').forEach((function (e) {
          e.addEventListener('click', o)
        })),
        document.querySelectorAll('.metainfo__item--comments').forEach((function (t) {
          t.addEventListener('click', e)
        })),
        new URLSearchParams(location.search).get('commentId') && e()
      }.toString())
    }
    n.r(t),
    n.d(t, 'commentingGenerator', (function () {
      return r
    }))
  },
  158: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(42),
    o = n(67),
    l = {
      name: 'ContainerIdms',
      components: {
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
          return !!this.data.content && (this.data.content.title && !this.data.content.image && !1)
        }
      }
    },
    d = (n(1263), n(1)),
    component = Object(d.a) (l, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('LazyHydrate', {
        attrs: {
          'ssr-only': ''
        }
      }, [
        n('section', {
          staticClass: 'pageelement',
          class : e.hasHeadline ? 'hasHeadline' : null,
          attrs: {
            'data-source-element': 'Container',
            'data-nzz-tid': 'container-exclusive',
            'data-nzz-container': '',
            'data-grows-exp': e.experimentTitle
          }
        }, [
          n('div', {
            staticClass: 'pageelement__inner'
          }, [
            e.data.content ? n('HeadlineTitle', {
              attrs: {
                data: e.data.content
              }
            }) : e._e(),
            e._v(' '),
            n('div', {
              staticClass: 'widget__row'
            }, [
              e.dataHtml ? n('div', {
                staticClass: 'widget widget--sportdaten'
              }, [
                n('div', {
                  domProps: {
                    innerHTML: e._s(e.dataHtml)
                  }
                })
              ]) : e._e()
            ])
          ], 1)
        ])
      ])
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  159: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(5),
    o = n.n(r),
    l = n(2),
    d = n.n(l),
    c = n(9),
    f = n.n(c),
    m = n(108),
    h = n(109),
    _ = {
      name: 'LagerDetail',
      components: {
        LagerHead: m.default,
        LagerSponsors: h.default
      },
      data: function () {
        return {
          posts: null,
          loaded: null
        }
      },
      computed: {
        lagername: function () {
          return this.posts.length > 0 ? this.posts[0].lagername : ''
        }
      },
      mounted: function () {
        var e = this;
        return o() (d.a.mark((function t() {
          var n,
          data;
          return d.a.wrap((function (t) {
            for (; ; ) switch (t.prev = t.next) {
              case 0:
                return t.next = 2,
                f.a.get(''.concat(e.$config.lagerConfig.lagerPostsEndpoint, '/').concat(e.$route.query.l));
              case 2:
                n = t.sent,
                data = n.data,
                e.posts = data,
                e.loaded = !0;
              case 6:
              case 'end':
                return t.stop()
            }
          }), t)
        }))) ()
      }
    },
    v = (n(780), n(1268), n(1270), n(1272), n(1274), n(1)),
    component = Object(v.a) (_, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('div', {
        staticClass: 'lager'
      }, [
        n('LagerHead'),
        e._v(' '),
        n('div', {
          staticClass: 'lager__wrapper lager__wrapper--detail'
        }, [
          e.posts && e.posts.length > 0 ? n('div', [
            n('h2', {
              staticClass: 'lager__title lager__title--big'
            }, [
              e._v('\n        ' + e._s(e.lagername) + '\n      ')
            ]),
            e._v(' '),
            e._l(e.posts, (function (t) {
              return n('div', {
                key: t.ID,
                staticClass: 'lager__post'
              }, [
                n('h2', {
                  staticClass: 'articlecomponent subtitle'
                }, [
                  e._v('\n          ' + e._s(t.post_title) + '\n        ')
                ]),
                e._v(' '),
                n('p', {
                  staticClass: 'articlecomponent text'
                }, [
                  e._v('\n          ' + e._s(t.telegrammtext) + '\n        ')
                ]),
                e._v(' '),
                t.images ? e._l(t.images, (function (image, i) {
                  return n('div', {
                    key: i,
                    staticClass: 'lager__image'
                  }, [
                    n('div', {
                      staticClass: 'lager__imagewrapper'
                    }, [
                      n('div', {
                        domProps: {
                          innerHTML: e._s(image.tag)
                        }
                      }),
                      e._v(' '),
                      n('h2', {
                        staticClass: 'image-description__caption image-description__caption--large'
                      }, [
                        e._v('\n                ' + e._s(image.caption) + '\n              ')
                      ])
                    ])
                  ])
                })) : e._e(),
                e._v(' '),
                t.video ? [
                  n('video', {
                    staticClass: 'lager__video',
                    attrs: {
                      preload: 'auto',
                      controls: ''
                    }
                  }, [
                    n('source', {
                      attrs: {
                        src: t.video.src,
                        type: t.video.mimetype
                      }
                    })
                  ]),
                  e._v(' '),
                  n('h2', {
                    staticClass: 'image-description__caption image-description__caption--large'
                  }, [
                    e._v('\n            ' + e._s(t.video.caption) + '\n          ')
                  ])
                ] : e._e()
              ], 2)
            }))
          ], 2) : e.loaded ? !e.posts && e.loaded ? n('div', {
            staticClass: 'lager__empty'
          }, [
            e._v('\n      Es wurden leider noch keine Telegramme für dieses Lager erfasst. Versuchen\n      Sie es später nochmals.\n    ')
          ]) : e._e() : n('div', {
            staticClass: 'lager__empty'
          }, [
            e._v('\n      Telegramme werden geladen.\n    ')
          ])
        ]),
        e._v(' '),
        n('LagerSponsors')
      ], 1)
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  160: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(5),
    o = n.n(r),
    l = n(2),
    d = n.n(l),
    c = n(9),
    f = n.n(c),
    m = n(108),
    h = n(109),
    _ = null,
    v = {
      name: 'LagerDir',
      components: {
        LagerHead: m.default,
        LagerSponsors: h.default
      },
      data: function () {
        return {
          loaded: null,
          lager: null,
          detailPath: this.$config.lagerConfig.lagerDetailPath
        }
      },
      mounted: function () {
        var e = this;
        return o() (d.a.mark((function t() {
          var n,
          data;
          return d.a.wrap((function (t) {
            for (; ; ) switch (t.prev = t.next) {
              case 0:
                return t.next = 2,
                f.a.get(e.$config.lagerConfig.lagerListEndpoint);
              case 2:
                n = t.sent,
                data = n.data,
                e.lager = data,
                e.loaded = !0;
              case 6:
              case 'end':
                return t.stop()
            }
          }), t)
        }))) ()
      },
      methods: {
        showTitle: function (e) {
          return e != _ && (_ = e, !0)
        }
      }
    },
    x = (n(780), n(1)),
    component = Object(x.a) (v, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('div', {
        staticClass: 'lager'
      }, [
        n('LagerHead'),
        e._v(' '),
        n('div', {
          staticClass: 'lager__wrapper'
        }, [
          n('h2', {
            staticClass: 'lager__title lager__title--big'
          }, [
            e._v('\n      Lagerverzeichnis\n    ')
          ]),
          e._v(' '),
          e.lager ? n('div', [
            n('ul', {
              staticClass: 'lager__list'
            }, e._l(e.lager, (function (t) {
              return n('li', {
                key: t.ID,
                staticClass: 'lager__listitem'
              }, [
                e.showTitle(t.post_title.charAt(0)) ? n('h3', {
                  staticClass: 'lager__char'
                }, [
                  e._v('\n            ' + e._s(t.post_title.charAt(0)) + '\n          ')
                ]) : e._e(),
                e._v(' '),
                n('nuxt-link', {
                  attrs: {
                    to: e.detailPath + '?l=' + t.slug
                  }
                }, [
                  e._v('\n            ' + e._s(t.post_title) + ', ' + e._s(t.place) + '\n          ')
                ])
              ], 1)
            })), 0)
          ]) : e.loaded ? e._e() : n('div', {
            staticClass: 'lager__empty'
          }, [
            e._v('\n      Lagerliste wird geladen.\n    ')
          ])
        ]),
        e._v(' '),
        n('LagerSponsors')
      ], 1)
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  161: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(5),
    o = n.n(r),
    l = n(2),
    d = n.n(l),
    c = n(9),
    f = n.n(c),
    m = n(1276),
    h = n.n(m),
    _ = n(108),
    v = n(109),
    x = {
      name: 'LagerHome',
      components: {
        Multiselect: h.a,
        LagerHead: _.default,
        LagerSponsors: v.default
      },
      data: function () {
        return {
          loaded: !1,
          options: [
          ],
          dirPath: this.$config.lagerConfig.lagerDirPath
        }
      },
      mounted: function () {
        var e = this;
        return o() (d.a.mark((function t() {
          var n,
          data;
          return d.a.wrap((function (t) {
            for (; ; ) switch (t.prev = t.next) {
              case 0:
                return e.loaded = !0,
                t.next = 3,
                f.a.get(e.$config.lagerConfig.lagerListEndpoint);
              case 3:
                n = t.sent,
                (data = n.data).length > 0 && (e.options = data, e.loaded = !1);
              case 6:
              case 'end':
                return t.stop()
            }
          }), t)
        }))) ()
      },
      methods: {
        optionName: function (e) {
          var t = e.search_title;
          return ''.concat(t)
        },
        dispatchAction: function (e) {
          console.log(e.slug),
          this.$router.push({
            path: ''.concat(this.$config.lagerConfig.lagerDetailPath, '?l=').concat(e.slug)
          })
        }
      }
    },
    w = (n(780), n(1277), n(1279), n(1)),
    component = Object(w.a) (x, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('div', {
        staticClass: 'lager'
      }, [
        n('LagerHead'),
        e._v(' '),
        n('div', {
          staticClass: 'lager__wrapper'
        }, [
          n('h2', {
            staticClass: 'lager__title lager__title--big'
          }, [
            e._v('\n      Welches Lager interessiert Sie?\n    ')
          ]),
          e._v(' '),
          n('multiselect', {
            attrs: {
              options: e.options,
              'custom-label': e.optionName,
              loading: e.loaded,
              placeholder: 'Lagername, Organisation oder Ort',
              'select-label': '',
              label: 'search_title',
              'track-by': 'search_title',
              'open-direction': 'bottom'
            },
            on: {
              select: e.dispatchAction
            },
            scopedSlots: e._u([{
              key: 'singleLabel',
              fn: function (t) {
                return [e._v('\n        ' + e._s(t.option.search_title) + '\n      ')]
              }
            },
            {
              key: 'option',
              fn: function (t) {
                return [e._v('\n        ' + e._s(t.option.search_title) + '\n      ')]
              }
            }
            ])
          }),
          e._v(' '),
          n('nuxt-link', {
            staticClass: 'lager__dirlink',
            attrs: {
              to: '' + e.dirPath
            }
          }, [
            e._v('\n      Verzeichnis aller Lager\n    ')
          ])
        ], 1),
        e._v(' '),
        n('LagerSponsors')
      ], 1)
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  164: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
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
    o = n(1),
    component = Object(o.a) (r, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('div', {
        staticClass: 'pageelement'
      }, [
        e.data.content ? n('div', {
          staticClass: 'widget--page-header page-header'
        }, [
          e.data.content.catchline ? n('p', {
            staticClass: 'page-header__catchline',
            domProps: {
              innerHTML: e._s(e.data.content.catchline)
            }
          }) : e._e(),
          e._v(' '),
          e.data.content.title ? n('h1', {
            staticClass: 'page-header__title',
            domProps: {
              innerHTML: e._s(e.data.content.title)
            }
          }) : e._e(),
          e._v(' '),
          e.data.content.lead ? n('p', {
            staticClass: 'page-header__lead',
            domProps: {
              innerHTML: e._s(e.data.content.lead)
            }
          }) : e._e()
        ]) : e._e()
      ])
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  168: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'WidgetNewstickerHolder',
      components: {
        WidgetNewsticker: function () {
          return n.e(2).then(n.bind(null, 113))
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
      }
    },
    o = n(1),
    component = Object(o.a) (r, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return e.data.containers && e.data.containers['widget-area'] ? n('div', {
        staticClass: 'widget--1of3 widget--1of3--newsticker-holder',
        attrs: {
          'data-nzz-tid': 'widget-1of3',
          'data-source-element-widget': 'WidgetNewstickerHolder'
        }
      }, [
        e.data.containers['widget-area'].length > 0 ? e._l(e.data.containers['widget-area'], (function (t) {
          return n('div', {
            key: 'widget-' + t.id + '-' + e.$store.state.isrendition
          }, [
            t.identifier.includes('newsticker') && t.content && t.content.newsticker ? [
              n('WidgetNewsticker', {
                attrs: {
                  data: t
                }
              })
            ] : e._e()
          ], 2)
        })) : e._e()
      ], 2) : e._e()
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  190: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(64),
    o = n(15),
    l = {
      name: 'ArticleFeedback',
      components: {
        ConversionElements: function () {
          return Promise.all([n.e(1),
          n.e(8)]).then(n.bind(null, 86))
        }
      },
      mixins: [
        r.a
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
      methods: {
        iframe: function () {
          return Object(o.b) ()
        }
      }
    },
    d = n(1),
    component = Object(d.a) (l, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return e.iframe() || e.$store.getters.commentsOpen ? e._e() : n('ConversionElements', {
        key: 'feedback-conversionelements-' + e.$store.state.metadata.nzzId,
        staticClass: 'article-feedback',
        attrs: {
          filter: 'article-feedback'
        }
      })
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  192: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'IdmsArticleWidget',
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
          iframe: !1
        }
      },
      computed: {
        dataHtml: function () {
          if (this.data.content && this.data.content.idms) {
            var e = decodeURIComponent(this.data.content.idms.params.url) + '#market-widget-'.concat(this.data.id);
            return '\n            <iframe\n              style="border:0;width:100%"\n              class="market-iframe"\n              allowfullscreen="false"\n              src="'.concat(e, '"\n              id="market-widget-').concat(this.data.id, '">\n            </iframe>\n          ')
          }
          return !1
        }
      }
    },
    o = (n(1317), n(1)),
    component = Object(o.a) (r, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('LazyHydrate', {
        attrs: {
          'ssr-only': ''
        }
      }, [
        e.dataHtml ? n('div', {
          staticClass: 'articlecomponent idms',
          class : e.data.styles && e.data.styles['widget-position'] ? e.data.styles['widget-position'] : '',
          domProps: {
            innerHTML: e._s(e.dataHtml)
          }
        }) : e._e()
      ])
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  201: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'RedditEmbed',
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
        return this.data.content && this.data.content.reddit ? {
          script: [
            {
              type: 'text/javascript',
              hid: 'reddit-embed-'.concat(this.data.id),
              src: '//embed.redditmedia.com/widgets/platform.js',
              async: !0,
              defer: !0,
              preserve: 'preserve',
              id: 'reddit-embed-'.concat(this.data.id)
            }
          ]
        }
         : {
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return e.data.content && e.data.content.reddit ? n('div', {
        staticClass: 'articlecomponent articlecomponent--narrow reddit'
      }, [
        n('div', {
          staticClass: 'reddit__container',
          domProps: {
            innerHTML: e._s(e.data.content.reddit.html || e.data.content.reddit)
          }
        })
      ]) : e._e()
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  202: function (e, t, n) {
    'use strict';
    n.r(t);
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
    o = (n(1335), n(1)),
    component = Object(o.a) (r, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('div', {
        staticClass: 'articlecomponent scenario'
      }, [
        n('h2', {
          staticClass: 'scenario__title',
          domProps: {
            innerHTML: e._s(e.data.content.title)
          }
        }),
        e._v(' '),
        n('div', {
          staticClass: 'scenario__info'
        }, [
          e._v('\n    Wahrscheinlichkeit\n    '),
          n('div', {
            staticClass: 'scenario__options'
          }, e._l(3, (function (t) {
            return n('span', {
              key: t,
              staticClass: 'scenario__option',
              class : {
                'scenario__option--active': t <= e.data.content.probability
              }
            })
          })), 0)
        ])
      ])
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  207: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(753),
    o = {
      name: 'ArticleTime',
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
          shown: !0
        }
      },
      computed: {
        isLive: function () {
          return !1
        }
      },
      beforeMount: function () {
        if (this.$store.state.liveFetch.active && this.isLive) {
          if (!window.nzzLiveComponents || - 1 === window.nzzLiveComponents.indexOf(this.data.id)) if (window.nzzLiveComponents = window.nzzLiveComponents || [
          ], this.shown = !1, this.$store.state.liveFetch.status) this.revealInViewport();
           else {
            var e = document.querySelectorAll('.articlecomponent.time.invisible').length + 1;
            this.$store.commit('setWebAlert', {
              key: 'bubble',
              value: {
                count: e,
                titleCompute: function () {
                  return 1 === e ? 'Neuen Beitrag anzeigen' : e + ' neue Beiträge anzeigen'
                }
              }
            })
          }
        } else this.isLive && (window.nzzLiveComponents = window.nzzLiveComponents || [
        ], window.nzzLiveComponents.push(this.data.id))
      },
      mounted: function () {
        var e = this;
        !this.shown && this.isLive && this.$store.watch((function (e) {
          return e.liveFetch.status
        }), (function (t) {
          return !(!t || e.shown) && e.revealInViewport()
        }))
      },
      methods: {
        revealInViewport: function () {
          var e = this;
          window.deferred((function () {
            window.nzzLiveComponents.push(e.data.id),
            e.$store.commit('setWebAlert', {
              key: 'bubble',
              value: 'remove'
            });
            var img,
            t = 0,
            n = Array.from(document.querySelectorAll('.articlecomponent.invisible')),
            o = [
            ];
            n.forEach((function (e) {
              if (img = e.querySelector('img[data-srcset]'), (e.classList.contains('video-embed') || e.classList.contains('kaltura')) && o.push(e), img) {
                var t = e.getAttribute('data-srcset');
                img && !img.getAttribute('srcset') && (img.setAttribute('srcset', t), img.classList.add('image__src--loaded'))
              }
            }));
            var l = document.querySelector('.animatejs'),
            d = function () {
              setTimeout((function () {
                e.shown = !0,
                Array.from(document.querySelectorAll('.articlecomponent.invisible')).forEach((function (e) {
                  e.getAttribute('cid') && window.nzzLiveComponents.push(e.getAttribute('cid')),
                  e.classList.remove('invisible')
                })),
                l && l.remove()
              }), 100)
            };
            l || (e.$el.insertAdjacentHTML('beforebegin', '<div class="animatejs"></div>'), l = document.querySelector('.animatejs')),
            o.length && window.deferred((function () {
              return window.dispatchEvent(new window.CustomEvent('forceKalturaInit'))
            }));
            var c = function () {
              Array.from(document.querySelectorAll('.articlecomponent.invisible')).forEach((function (n) {
                t += e.getElmHeight(n)
              })),
              r.a.timeline().add({
                height: [
                  0,
                  t
                ],
                easing: 'easeInOutQuad',
                targets: l,
                duration: 500,
                complete: d
              })
            };
            img && !img.complete ? img.addEventListener('load', c) : c()
          }), (function () {
            return e.$el && e.$el.nextElementSibling
          }))
        },
        getElmHeight: function (e) {
          var style = window.getComputedStyle(e);
          return ['margin-top',
          'margin-bottom',
          'border-top',
          'border-bottom',
          'padding-top',
          'padding-bottom',
          'height'].map((function (e) {
            return parseInt(style.getPropertyValue(e), 10)
          })).reduce((function (e, t) {
            return e + t
          }))
        }
      }
    },
    l = (n(1345), n(1)),
    component = Object(l.a) (o, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return e.data.content['current-date'] ? n('h5', {
        staticClass: 'articlecomponent time'
      }, [
        n('span', {
          staticClass: 'time__value',
          domProps: {
            innerHTML: e._s(e.data.content['current-date'])
          }
        })
      ]) : e._e()
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  210: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'ArticleYouTube',
      components: {
        ImageDescription: function () {
          return n.e(1).then(n.bind(null, 367))
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
              content: {
              }
            }
          }
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('div', {
        staticClass: 'articlecomponent youtube'
      }, [
        n('div', {
          staticClass: 'video__placeholder video__placeholder--youtube'
        }, [
          n('div', {
            staticClass: 'videocomponent',
            domProps: {
              innerHTML: e._s(e.data.content.youtube.html || e.data.content.youtube)
            }
          })
        ]),
        e._v(' '),
        e.data.content.caption || e.data.content.author ? n('div', {
          staticClass: 'articlecomponent__description'
        }, [
          n('ImageDescription', {
            attrs: {
              data: e.data,
              'data-team-selector': 'data-team-video-caption'
            }
          })
        ], 1) : e._e()
      ])
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  218: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'PageContainerExclusiveMunicipalityFeed',
      extends : n(34).default,
      props: {
        sourceelement: {
          type: String,
        default:
          'Container-Municipality-Feed'
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    t.default = component.exports
  },
  219: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'PageContainerExclusiveMunicipality',
      extends : n(34).default,
      props: {
        sourceelement: {
          type: String,
        default:
          'Container-Municipality'
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    t.default = component.exports
  },
  220: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'PageContainerExclusiveNachbarschafts',
      extends : n(34).default,
      props: {
        sourceelement: {
          type: String,
        default:
          'Container-Nachbarschafts'
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    t.default = component.exports
  },
  222: function (e, t, n) {
    'use strict';
    n.r(t);
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
    t.default = component.exports
  },
  223: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'PageContainerExclusiveTopLayoutStandard',
      extends : n(34).default,
      props: {
        sourceelement: {
          type: String,
        default:
          'Container-Toplayout-Standard'
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    t.default = component.exports
  },
  228: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'Widget1of2Article',
      extends : n(68).default,
      data: function () {
        return {
          baseClass: 'widget--1of2 widget--article',
          tid: 'widget-1of2',
          teaserSize: '1of2',
          sourceElem: 'Widget-1/2-Breite'
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    t.default = component.exports
  },
  229: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'Widget1of2Top',
      extends : n(20).default,
      data: function () {
        return {
          baseClass: 'widget--1of2 widget--1of2-top',
          tid: 'widget-1of2-top',
          teaserSize: '1of2-top',
          sourceElem: 'Widget-Halbe-Breite-Toplayout'
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    t.default = component.exports
  },
  230: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'Widget1of2',
      extends : n(20).default,
      data: function () {
        return {
          baseClass: 'widget--1of2',
          tid: 'widget-1of2',
          teaserSize: '1of2',
          sourceElem: 'Widget-1/2-Breite'
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    t.default = component.exports
  },
  231: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'Widget1of3Article',
      extends : n(68).default,
      data: function () {
        return {
          baseClass: 'widget--1of3 widget--article',
          tid: 'widget-1of3',
          teaserSize: '1of3',
          sourceElem: 'Widget-1/3-Breite'
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    t.default = component.exports
  },
  232: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'Widget1of3Compact',
      extends : n(20).default,
      data: function () {
        return {
          baseClass: 'widget--1of3 widget--1of3--compact',
          tid: 'widget-1of3',
          teaserSize: '1of3-compact',
          sourceElem: 'Ressortkachel'
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    t.default = component.exports
  },
  233: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'Widget1of3FlexArticle',
      extends : n(68).default,
      data: function () {
        return {
          baseClass: 'widget--1of3',
          tid: 'widget-1of3',
          teaserSize: '1of3',
          sourceElem: 'Widget-1/3-Breite'
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    t.default = component.exports
  },
  234: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'Widget1of3Flex',
      extends : n(20).default,
      data: function () {
        return {
          baseClass: 'widget--1of3',
          tid: 'widget-1of3',
          teaserSize: '1of3',
          sourceElem: 'Widget-1/3-Breite'
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    t.default = component.exports
  },
  238: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'WidgetExtender',
      extends : n(20).default,
      data: function () {
        return {
          baseClass: 'widget--extender',
          tid: 'widget-extender',
          teaserSize: 'extender',
          sourceElem: 'Widget-Mehr-Zum-Thema-Bullets'
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    t.default = component.exports
  },
  239: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'WidgetRelated',
      extends : n(20).default,
      data: function () {
        return {
          baseClass: 'widget--related',
          tid: 'widget-related',
          teaserSize: 'related',
          sourceElem: 'Widget-Mehr-Zum-Thema-Ohne-Titel'
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    t.default = component.exports
  },
  240: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'WidgetNews',
      extends : n(20).default,
      data: function () {
        return {
          baseClass: 'widget--news',
          tid: 'widget-news',
          teaserSize: '1of3-news',
          sourceElem: 'Widget-Nachrichten-des-Tages'
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    t.default = component.exports
  },
  245: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      extends : n(144).default
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    t.default = component.exports
  },
  323: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(68),
    o = {
      name: 'BaseArticleWidgetWebview',
      components: {
        WidgetTitle: n(41).default,
        ArticleEmbed: function () {
          return n.e(2).then(n.bind(null, 382))
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
        Iframe: function () {
          return n.e(1).then(n.bind(null, 137))
        }
      },
      extends : r.default
    },
    l = n(1),
    component = Object(l.a) (o, undefined, undefined, !1, null, null, null);
    t.default = component.exports
  },
  324: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(68),
    o = {
      name: 'BaseArticleWidgetWebview',
      components: {
        WidgetTitle: n(41).default,
        ArticleEmbed: function () {
          return n.e(2).then(n.bind(null, 384))
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
        Iframe: function () {
          return n.e(1).then(n.bind(null, 137))
        }
      },
      extends : r.default
    },
    l = n(1),
    component = Object(l.a) (o, undefined, undefined, !1, null, null, null);
    t.default = component.exports
  },
  338: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(31),
    o = n(268),
    l = n(53),
    d = {
      name: 'MaxiPlayer',
      directives: {
        clickOutside: o.directive
      },
      components: {
        NzzLink: r.default,
        Slider: function () {
          return Promise.all([n.e(6),
          n.e(10)]).then(n.t.bind(null, 1586, 7))
        }
      },
      computed: {
        nzzId: function () {
          return l.a.nzzId
        },
        publicationLastUpdated: function () {
          return l.a.publicationLastUpdated
        },
        title: function () {
          return l.a.title
        },
        teaserImage: function () {
          return l.a.teaserImage
        },
        playing: function () {
          return l.a.playing
        },
        loading: function () {
          return !l.a.loaded
        },
        speed: function () {
          return l.a.speed
        },
        currentTime: function () {
          return Object(l.b) (this.currentSeconds)
        },
        durationTime: function () {
          return Object(l.b) (this.durationSeconds)
        },
        currentSeconds: function () {
          return l.a.currentSeconds
        },
        durationSeconds: function () {
          return l.a.durationSeconds
        },
        url: function () {
          return l.a.link
        }
      },
      mounted: function () {
        window.addEventListener('resize', this.close),
        window.addEventListener('scroll', this.close)
      },
      beforeDestroy: function () {
        window.addEventListener('resize', this.close),
        window.addEventListener('scroll', this.close)
      },
      methods: {
        togglePlay: function () {
          l.c.togglePlay()
        },
        close: function () {
          l.a.maximized = !1
        },
        sliderChange: function (e) {
          l.c.setCurrentTime(e)
        },
        changePosition: function (e) {
          var t = l.a.currentSeconds + e;
          l.c.setCurrentTime(t, e)
        },
        changeSpeed: function (e) {
          l.c.changeSpeed(e)
        }
      }
    },
    c = (n(1355), n(1)),
    component = Object(c.a) (d, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('div', {
        staticClass: 'maxiplayer'
      }, [
        n('div', {
          staticClass: 'maxiplayer__background'
        }),
        e._v(' '),
        n('div', {
          directives: [
            {
              name: 'click-outside',
              rawName: 'v-click-outside',
              value: e.close,
              expression: 'close'
            }
          ],
          staticClass: 'maxiplayer__main'
        }, [
          n('NzzLink', {
            staticClass: 'maxiplayer__link',
            attrs: {
              url: e.url
            }
          }, [
            e.teaserImage ? n('div', {
              directives: [
                {
                  name: 'srcset',
                  rawName: 'v-srcset',
                  value: {
                    teaserImage: e.teaserImage,
                    parent: this.$parent,
                    layout: 'audio-player',
                    imageType: 'audio'
                  },
                  expression: '{\n          teaserImage: teaserImage,\n          parent: this.$parent,\n          layout: \'audio-player\',\n          imageType: \'audio\'\n        }'
                }
              ],
              staticClass: 'image-placeholder maxiplayer__placeholder'
            }, [
              n('img', {
                tag: 'component',
                staticClass: 'image-placeholder__image maxiplayer__image',
                attrs: {
                  alt: e.title || '',
                  'data-sizes': '0'
                }
              })
            ], 1) : e._e(),
            e._v(' '),
            n('div', {
              staticClass: 'maxiplayer__title'
            }, [
              n('span', {
                staticClass: 'maxiplayer__text maxiplayer__text--elipse'
              }, [
                e._v('\n          ' + e._s(e.title) + '\n        ')
              ])
            ])
          ]),
          e._v(' '),
          n('div', {
            staticClass: 'maxiplayer__progress'
          }, [
            n('span', {
              staticClass: 'maxiplayer__current maxiplayer__text'
            }, [
              e._v(e._s(e.currentTime))
            ]),
            e._v(' '),
            n('client-only', [
              n('Slider', {
                attrs: {
                  value: e.currentSeconds,
                  width: '100%',
                  min: 0,
                  max: e.durationSeconds,
                  interval: 1,
                  'dot-size': '16'
                },
                on: {
                  change: e.sliderChange
                }
              })
            ], 1),
            e._v(' '),
            n('span', {
              staticClass: 'maxiplayer__duration  maxiplayer__text'
            }, [
              e._v(e._s(e.durationTime))
            ])
          ], 1),
          e._v(' '),
          n('div', {
            staticClass: 'maxiplayer__row maxiplayer__slider'
          }, [
            n('div', {
              staticClass: 'maxiplayer__button maxiplayer__button--back',
              class : {
                'maxiplayer__button--disabled': 0 >= e.currentSeconds
              },
              on: {
                click: function (t) {
                  return e.changePosition( - 15)
                }
              }
            }, [
              n('svgicon', {
                attrs: {
                  name: 'nzz_back_15',
                  color: '#000000 r-#000000 #000000',
                  height: '23',
                  width: '21'
                }
              })
            ], 1),
            e._v(' '),
            n('div', {
              staticClass: 'maxiplayer__button',
              on: {
                click: function (t) {
                  return t.preventDefault(),
                  e.togglePlay(t)
                }
              }
            }, [
              n('transition', {
                attrs: {
                  name: 'fade',
                  mode: 'out-in',
                  duration: {
                    enter: 80,
                    leave: 80
                  }
                }
              }, [
                e.playing ? n('svgicon', {
                  key: 'pause',
                  attrs: {
                    name: 'nzz_pause',
                    color: '#000000',
                    height: '28',
                    width: '21'
                  }
                }) : e._e(),
                e._v(' '),
                e.playing ? e._e() : n('svgicon', {
                  key: 'play',
                  attrs: {
                    name: 'nzz_play',
                    color: '#000000',
                    height: '28',
                    width: '21'
                  }
                })
              ], 1)
            ], 1),
            e._v(' '),
            n('div', {
              staticClass: 'maxiplayer__button maxiplayer__button--forward',
              class : {
                'maxiplayer__button--disabled': e.currentSeconds >= e.durationSeconds
              },
              on: {
                click: function (t) {
                  return e.changePosition(15)
                }
              }
            }, [
              n('svgicon', {
                attrs: {
                  name: 'nzz_forward_15',
                  color: '#000000 r-#000000 #000000',
                  height: '23',
                  width: '21'
                }
              })
            ], 1)
          ]),
          e._v(' '),
          n('div', {
            staticClass: 'maxiplayer__row maxiplayer__tempo'
          }, [
            n('div', {
              staticClass: 'maxiplayer__button',
              class : {
                'maxiplayer__button--disabled': e.speed <= 0.8
              },
              on: {
                click: function (t) {
                  return t.preventDefault(),
                  e.changeSpeed( - 0.1)
                }
              }
            }, [
              n('svgicon', {
                key: 'pause',
                attrs: {
                  name: 'nzz_minus',
                  color: '#000000',
                  height: '13',
                  width: '13'
                }
              })
            ], 1),
            e._v(' '),
            n('div', {
              staticClass: 'maxiplayer__text maxiplayer__speed'
            }, [
              e._v('\n        ' + e._s(e.speed.toFixed(1)) + 'x\n      ')
            ]),
            e._v(' '),
            n('div', {
              staticClass: 'maxiplayer__button',
              class : {
                'maxiplayer__button--disabled': e.speed >= 2
              },
              on: {
                click: function (t) {
                  return t.preventDefault(),
                  e.changeSpeed(0.1)
                }
              }
            }, [
              n('svgicon', {
                key: 'pause',
                attrs: {
                  name: 'nzz_plus',
                  color: '#000000',
                  height: '13',
                  width: '13'
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
  353: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'Flag',
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
        }
      },
      computed: {
        flag: function () {
          return this.item.catchline ? this.item.catchline : this.item.flag
        },
        flagClasses: function () {
          var e = [
          ];
          return this.isSponsored || this.isBreaking || e.push('teaser__flag--colored'),
          this.isLive && e.push('teaser__flag--live'),
          this.isBreaking && e.push('text--light'),
          e
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return e.flag ? n('div', {
        staticClass: 'teaser__flag',
        class : [
          e.flagClasses,
          'teaser__flag--' + e.size,
          e.item.layout ? 'teaser__flag--' + e.size + '-' + e.item.layout : ''
        ]
      }, [
        e._v('\n  ' + e._s(e.flag) + '\n')
      ]) : e._e()
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  370: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(753),
    o = n(53),
    l = n(19),
    d = {
      name: 'AnimatePlayer',
      computed: {
        maximized: function () {
          return o.a.maximized
        },
        height: function () {
          return o.a.teaserImage ? 497 : 361
        },
        isMobileBreakpoint: function () {
          return l.store.isMobileBreakpoint
        }
      },
      methods: {
        enter: function (e, t) {
          Object(r.a) ({
            height: [
              '0',
              this.height
            ],
            easing: 'easeInOutQuad',
            targets: e,
            duration: 300,
            complete: t
          })
        },
        leave: function (e, t) {
          Object(r.a) ({
            height: [
              this.height,
              '0'
            ],
            easing: 'easeInOutQuad',
            targets: e,
            duration: 300,
            complete: t
          })
        }
      }
    },
    c = (n(1351), n(1)),
    component = Object(c.a) (d, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('div', {
        staticClass: 'animate-player'
      }, [
        e._t('minimized'),
        e._v(' '),
        n('transition', {
          attrs: {
            css: !1
          },
          on: {
            enter: e.enter,
            leave: e.leave
          }
        }, [
          e.maximized && !e.isMobileBreakpoint ? n('div', {
            staticClass: 'anmiate-player--maximized'
          }, [
            e._t('maximized')
          ], 2) : e._e()
        ])
      ], 2)
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  371: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(53),
    o = {
      name: 'MiniPlayer',
      computed: {
        title: function () {
          return r.a.title
        },
        loading: function () {
          return !r.a.loaded
        },
        playing: function () {
          return r.a.playing
        },
        currentTime: function () {
          return Object(r.b) (r.a.currentSeconds)
        },
        durationTime: function () {
          return Object(r.b) (r.a.durationSeconds)
        }
      },
      methods: {
        closePlayer: function () {
          r.c.closePlayer()
        },
        togglePlay: function () {
          r.c.togglePlay()
        },
        extendPlayer: function () {
          r.a.maximized = !0
        }
      }
    },
    l = (n(1353), n(1)),
    component = Object(l.a) (o, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('div', {
        staticClass: 'miniplayer',
        on: {
          click: e.extendPlayer
        }
      }, [
        n('div', {
          staticClass: 'miniplayer__content',
          class : {
            'miniplayer__content--loading': e.loading
          }
        }, [
          n('div', {
            staticClass: 'miniplayer__text'
          }, [
            e._v('\n      ' + e._s(e.title) + '\n    ')
          ]),
          e._v(' '),
          n('div', {
            staticClass: 'miniplayer__text miniplayer__text--time'
          }, [
            e._v('\n      ' + e._s(e.currentTime) + ' / ' + e._s(e.durationTime) + '\n    ')
          ])
        ]),
        e._v(' '),
        n('div', {
          staticClass: 'miniplayer__button miniplayer__play',
          on: {
            click: function (t) {
              return t.stopPropagation(),
              e.togglePlay(t)
            }
          }
        }, [
          n('transition', {
            attrs: {
              name: 'fade',
              mode: 'out-in',
              duration: {
                enter: 80,
                leave: 80
              }
            }
          }, [
            e.playing ? n('svgicon', {
              key: 'pause',
              attrs: {
                name: 'nzz_pause',
                color: '#000000',
                height: '20',
                width: '15'
              }
            }) : e._e(),
            e._v(' '),
            e.playing ? e._e() : n('svgicon', {
              key: 'play',
              attrs: {
                name: 'nzz_play',
                color: '#000000',
                height: '20',
                width: '15'
              }
            })
          ], 1)
        ], 1),
        e._v(' '),
        n('div', {
          staticClass: 'miniplayer__button miniplayer__close',
          on: {
            click: function (t) {
              return t.preventDefault(),
              e.closePlayer(t)
            }
          }
        }, [
          n('svgicon', {
            staticClass: 'miniplayer__icon',
            attrs: {
              name: 'nzz_close',
              color: 'r-#000000',
              height: '12',
              width: '12'
            }
          })
        ], 1)
      ])
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  405: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      extends : n(353).default,
      computed: {
        showFlag: function () {
          return this.isPremium || this.item.flag
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return e.showFlag ? n('div', {
        staticClass: 'teaser__flag',
        class : [
          e.flagClasses,
          'teaser__flag--' + e.size,
          e.item.layout ? 'teaser__flag--' + e.size + '-' + e.item.layout : ''
        ]
      }, [
        e.item.flag ? n('span', {
          staticClass: 'teaser__flag--text'
        }, [
          e._v('\n    ' + e._s(e.item.flag) + '\n  ')
        ]) : e._e(),
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
      ], 1) : e._e()
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  409: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'AmpInFeedAd',
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
        config: function () {
          return this.$store.state.rendition.config
        },
        allowAd: function () {
          return this.$store.state.features.advertisements || !1
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return e.allowAd && e.config.ads && e.config.ads.infeed ? n('aside', {
        staticClass: 'resor resor--ampinfeed',
        attrs: {
          'amp-access': 'NOT data.no_ads_status'
        }
      }, [
        n('amp-ad', {
          attrs: {
            width: e.config.ads.infeed.width,
            height: e.config.ads.infeed.height,
            type: e.config.ads.infeed.type,
            'data-tagid': e.config.ads.infeed.tagid
          }
        })
      ], 1) : e._e()
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  410: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'FacebookEmbed',
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
        if (this.href) return {
          script: [
            {
              hid: 'amp-facebook',
              preserve: 'preserve',
              type: 'text/javascript',
              async: !0,
              src: 'https://cdn.ampproject.org/v0/amp-facebook-0.1.js',
              'custom-element': 'amp-facebook'
            }
          ]
        }
      },
      computed: {
        href: function () {
          try {
            var e = (this.data.content.facebook.html || this.data.content.facebook).match(/href="([^>|\s]+)\/"/);
            return !(!e || !e[1]) && decodeURIComponent(e[1])
          } catch (e) {
            return !1
          }
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('div', {
        staticClass: 'articlecomponent articlecomponent--narrow'
      }, [
        n('amp-facebook', {
          attrs: {
            width: '400',
            height: '480',
            layout: 'responsive',
            'data-href': e.href
          }
        })
      ], 1)
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  411: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'Freehtml',
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
        webLink: function () {
          var e,
          t;
          return (null === (e = this.$store.state.rendition.digitalDataAmp) || void 0 === e || null === (t = e.vars) || void 0 === t ? void 0 : t.destinationURL) || this.$store.state.metadata.seo.canonicalUrl
        }
      }
    },
    o = (n(1123), n(1)),
    component = Object(o.a) (r, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('div', {
        staticClass: 'free-html__placeholder'
      }, [
        n('h2', {
          staticClass: 'title'
        }, [
          e._v('\n    Inhalt nicht unterstützt\n  ')
        ]),
        e._v(' '),
        n('p', {
          staticClass: 'text'
        }, [
          e._v('\n    Dieser Inhalt ist leider nur auf unserer regulären Webseite verfügbar.\n  ')
        ]),
        e._v(' '),
        n('a', {
          staticClass: 'button button--primary button--rounded',
          attrs: {
            href: e.webLink
          }
        }, [
          e._v('\n    Artikel öffnen\n  ')
        ])
      ])
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  419: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'PinterestEmbed',
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
              hid: 'amp-pinterest',
              preserve: 'preserve',
              type: 'text/javascript',
              async: !0,
              src: 'https://cdn.ampproject.org/v0/amp-pinterest-0.1.js',
              'custom-element': 'amp-pinterest'
            }
          ]
        }
      },
      computed: {
        url: function () {
          try {
            var e = (this.data.content.pinterest.html || this.data.content.pinterest).match(/href="([^>|\s]+)\/"/);
            return !(!e || !e[1]) && decodeURIComponent(e[1])
          } catch (e) {
            return !1
          }
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return e.url ? n('div', {
        staticClass: 'articlecomponent articlecomponent--narrow'
      }, [
        n('amp-pinterest', {
          attrs: {
            layout: 'responsive',
            width: '400',
            height: '400',
            'data-do': 'embedPin',
            'data-url': e.url
          }
        })
      ], 1) : e._e()
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  420: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'PinterestEmbed',
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
        if (this.src) return {
          script: [
            {
              hid: 'amp-reddit',
              preserve: 'preserve',
              type: 'text/javascript',
              async: !0,
              src: 'https://cdn.ampproject.org/v0/amp-reddit-0.1.js',
              'custom-element': 'amp-reddit'
            }
          ]
        }
      },
      computed: {
        src: function () {
          try {
            var e = (this.data.content.reddit.html || this.data.content.reddit).match(/href="([^>|\s]+)\/"/);
            return !(!e || !e[1]) && decodeURIComponent(e[1])
          } catch (e) {
            return !1
          }
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('div', {
        staticClass: 'articlecomponent articlecomponent--narrow'
      }, [
        n('amp-reddit', {
          attrs: {
            layout: 'responsive',
            width: '400',
            height: '400',
            'data-embedtype': 'post',
            'data-src': e.src
          }
        })
      ], 1)
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  423: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'TikTokEmbed',
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
        if (this.videoId) return {
          script: [
            {
              hid: 'amp-tiktok',
              preserve: 'preserve',
              type: 'text/javascript',
              async: !0,
              src: 'https://cdn.ampproject.org/v0/amp-tiktok-0.1.js',
              'custom-element': 'amp-tiktok'
            }
          ]
        }
      },
      computed: {
        videoId: function () {
          try {
            var e = (this.data.content.tiktok.html || this.data.content.tiktok).match(/data-video-id="([0-9]+)"/);
            return !(!e || !e[1]) && e[1]
          } catch (e) {
            return !1
          }
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return e.videoId ? n('div', {
        staticClass: 'articlecomponent articlecomponent--narrow'
      }, [
        n('amp-tiktok', {
          attrs: {
            width: '325',
            height: '575',
            'data-src': e.videoId
          }
        })
      ], 1) : e._e()
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  436: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'ArticleShareboxWebview',
      components: {
        Commenting: function () {
          return n.e(8).then(n.bind(null, 437))
        }
      },
      computed: {
        showComments: function () {
          try {
            return this.$config.coralUrl && this.$store.getters.featureCoralEnabled && this.$store.state.metadata.comments.showComments && this.$store.state.metadata.comments.confirmed
          } catch (e) {
            return !1
          }
        },
        webviewClick: function () {
          var e = this.$store.getters.getSeoData,
          t = e.ogUrl ? e.ogUrl : e.canonical;
          return '\n        window.vamp.shareArticle(\n          \''.concat(e.title.replace(/'/g, '\\\''), '\',\n          \'').concat(e.description.replace(/'/g, '\\\''), '\',\n          \'').concat(t, '\'\n        )\n      ')
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('div', [
        e.showComments ? n('Commenting') : e._e()
      ], 1)
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  444: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(371),
    o = n(338),
    l = n(370),
    d = n(28),
    c = n(53);
    n.e(5).then(n.t.bind(null, 1582, 7)),
    n.e(5).then(n.t.bind(null, 1565, 7)),
    n.e(5).then(n.t.bind(null, 1583, 7)),
    n.e(5).then(n.t.bind(null, 1584, 7)),
    n.e(5).then(n.t.bind(null, 1585, 7)),
    n.e(5).then(n.t.bind(null, 1529, 7)),
    n.e(5).then(n.t.bind(null, 1530, 7));
    var f = {
      name: 'Audioplayer',
      components: {
        MiniPlayer: r.default,
        MaxiPlayer: o.default,
        AnimatePlayer: l.default
      },
      data: function () {
        return {
          layoutChangedFlag: !1
        }
      },
      computed: {
        metadata: function () {
          return this.$store.getters.getMetadata
        },
        storageKey: function () {
          var e = 'audioPlaybackrate';
          try {
            var t = window.digitalData.user[0].profile[0].profileInfo.profileID;
            e = ''.concat(e, '-').concat(t)
          } catch (e) {
          }
          return e
        },
        open: function () {
          return c.a.open
        },
        playing: function () {
          return c.a.playing
        },
        currentSeconds: function () {
          return c.a.currentSeconds
        },
        speed: function () {
          return c.a.speed
        },
        audioUrl: function () {
          return c.a.audioUrl
        }
      },
      watch: {
        audioUrl: function (e) {
          this.$refs.audioplayer.src = e
        },
        playing: function (e) {
          if (e && !this.layoutChangedFlag) {
            var t = this.$refs.audioplayer.play();
            if (void 0 !== t) return t.catch((function (e) {
              console.error(e),
              c.a.playing = !1
            }))
          }
          this.layoutChangedFlag = !1,
          this.$refs.audioplayer.pause()
        },
        speed: function (e) {
          var t = e;
          t > 2 && (t = 2),
          t < 0.8 && (t = 0.8),
          this.$refs.audioplayer.playbackRate = t,
          window.localStorage && window.localStorage.setItem(this.storageKey, t)
        },
        currentSeconds: function (e) {
          e !== parseInt(this.$refs.audioplayer.currentTime) && (this.$refs.audioplayer.currentTime = e),
          e >= c.a.durationSeconds && 0 !== e && Object(d.trackAudioEvent) ({
            eventAction: 'complete',
            eventPosition: e,
            componentID: c.a.audioId,
            eventNonInteractive: !0,
            componentName: c.a.title,
            subCategory2: c.a.audioType,
            subCategory3: c.a.playPosition
          })
        }
      },
      mounted: function () {
        this.layoutChangedFlag = this.$refs.audioplayer.src !== this.audioUrl,
        this.layoutChangedFlag && (this.$refs.audioplayer.src = this.audioUrl, this.$refs.audioplayer.currentTime = this.currentSeconds),
        this.$refs.audioplayer.autoplay = !0,
        this.$refs.audioplayer.addEventListener('timeupdate', this.update),
        this.$refs.audioplayer.addEventListener('loadeddata', this.loaded),
        this.$refs.audioplayer.addEventListener('pause', this.pause),
        this.$refs.audioplayer.addEventListener('play', this.play),
        window.addEventListener('keyup', this.keyboardClosePlayer);
        var e = parseFloat(window.localStorage.getItem(this.storageKey)) || 1;
        c.a.speed = e
      },
      beforeDestroy: function () {
        this.$refs.audioplayer.removeEventListener('timeupdate', this.update),
        this.$refs.audioplayer.removeEventListener('loadeddata', this.loaded),
        this.$refs.audioplayer.removeEventListener('pause', this.pause),
        this.$refs.audioplayer.removeEventListener('play', this.play),
        window.removeEventListener('keyup', this.keyboardClosePlayer)
      },
      methods: {
        closePlayer: function () {
          c.c.closePlayer()
        },
        play: function () {
          c.a.playing = !0
        },
        pause: function () {
          c.a.playing = !1
        },
        update: function () {
          c.a.currentSeconds = parseInt(this.$refs.audioplayer.currentTime)
        },
        loaded: function () {
          if (!(this.$refs.audioplayer.readyState >= 2)) throw new Error('Failed to load sound file.');
          var e = parseInt(this.$refs.audioplayer.duration);
          c.c.loaded({
            duration: e
          }),
          this.$refs.audioplayer.playbackRate = c.a.speed
        },
        keyboardClosePlayer: function (e) {
          'Escape' === e.key && (c.a.maximized = !1)
        }
      }
    },
    m = (n(1357), n(1)),
    component = Object(m.a) (f, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('div', {
        staticClass: 'audioplayer__pageholder'
      }, [
        n('audio', {
          ref: 'audioplayer',
          attrs: {
            id: 'audioplayer',
            type: 'audio/mp3'
          }
        }),
        e._v(' '),
        n('transition', {
          attrs: {
            name: 'push-up'
          }
        }, [
          e.open ? n('div', {
            staticClass: 'audioplayer'
          }, [
            n('AnimatePlayer', {
              scopedSlots: e._u([{
                key: 'minimized',
                fn: function () {
                  return [n('MiniPlayer')]
                },
                proxy: !0
              },
              {
                key: 'maximized',
                fn: function () {
                  return [n('MaxiPlayer')]
                },
                proxy: !0
              }
              ], null, !1, 2909563529)
            })
          ], 1) : e._e()
        ])
      ], 1)
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  445: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(753),
    o = n(53),
    l = n(19),
    d = {
      name: 'MaxiPlayerOverlay',
      components: {
        MaxiPlayer: n(338).default
      },
      computed: {
        maximized: function () {
          return o.a.maximized
        },
        open: function () {
          return o.a.open
        },
        isMobileBreakpoint: function () {
          return l.store.isMobileBreakpoint
        },
        height: function () {
          return o.a.teaserImage ? 497 : 361
        }
      },
      methods: {
        enter: function (e, t) {
          Object(r.a) ({
            opacity: [
              '0',
              '1'
            ],
            easing: 'linear',
            targets: e.querySelector('.maxiplayer__background'),
            duration: 200
          }),
          Object(r.a) ({
            height: [
              '0',
              this.height
            ],
            easing: 'easeInOutQuad',
            targets: e.querySelector('.maxiplayer'),
            duration: 300,
            complete: t
          })
        },
        leave: function (e, t) {
          Object(r.a) ({
            opacity: [
              '1',
              '0'
            ],
            easing: 'linear',
            targets: e.querySelector('.maxiplayer__background'),
            duration: 200
          }),
          Object(r.a) ({
            height: [
              this.height,
              '0'
            ],
            easing: 'easeInOutQuad',
            targets: e.querySelector('.maxiplayer'),
            duration: 300,
            complete: t
          })
        }
      }
    },
    c = (n(1359), n(1)),
    component = Object(c.a) (d, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('div', {
        staticClass: 'maxi-player-overlay'
      }, [
        n('transition', {
          attrs: {
            css: !1
          },
          on: {
            enter: e.enter,
            leave: e.leave
          }
        }, [
          e.open && e.maximized && e.isMobileBreakpoint ? n('div', {
            staticClass: 'maxi-player-overlay--maximized'
          }, [
            n('MaxiPlayer')
          ], 1) : e._e()
        ])
      ], 1)
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  462: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(62);
    n(282);
    function o() {
      return Math.random().toString()
    }
    var l = {
      components: {
        Menu: function () {
          return n.e(7).then(n.bind(null, 354))
        },
        ContextMenu: function () {
          return Promise.resolve().then(n.bind(null, 75))
        }
      },
      props: {
        data: {
          type: Object,
        default:
          function () {
            return {
              content: {
                caption: '',
                image: {
                }
              }
            }
          }
        },
        url: {
          type: String,
        default:
          ''
        },
        extraParams: {
          type: String,
        default:
          ''
        },
        metadata: {
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
          open: !1
        }
      },
      computed: {
        showTitle: function () {
          return !0
        },
        isMobile: function () {
          return this.$store.state.isMobile
        },
        options: function () {
          var e = new r.a({
            articleLink: ''.concat(this.url) + this.extraParams,
            metadata: {
              title: this.data.content.caption
            },
            extraParams: this.extraParams
          }),
          t = this.$config.socialAccounts,
          n = void 0 === t ? {
          }
           : t,
          l = [
            {
              id: o(),
              url: e.facebook(),
              name: 'Facebook',
              icon: {
                name: 'ico_facebook_48',
                color: '#000000',
                height: '48',
                width: '48',
                class : 'svg-facebook'
              }
            }
          ];
          return this.isMobile && l.push({
            id: o(),
            url: e.whatsapp(),
            name: 'Whatsapp',
            icon: {
              name: 'ico_whatsapp_48',
              color: '#000000 #ffffff',
              height: '48',
              width: '48',
              class : 'svg-whatsapp'
            }
          }),
          l.push({
            id: o(),
            url: e.twitter({
              via: n.twitter
            }),
            name: 'Twitter',
            icon: {
              name: 'ico_twitter_48',
              color: '#000000',
              height: '48',
              width: '48',
              class : 'svg-twitter'
            }
          }),
          l.push({
            id: o(),
            url: e.linkedin({
              source: n.linkedin
            }),
            name: 'LinkedIn',
            icon: {
              name: 'ico_linkedin_48',
              color: '#000000',
              height: '48',
              width: '48',
              class : 'svg-linkedin'
            }
          }),
          l.push({
            id: o(),
            url: e.xing(),
            name: 'Xing',
            icon: {
              name: 'ico_xing_48',
              color: '#000000 #000000',
              height: '48',
              width: '48',
              class : 'svg-xing'
            }
          }),
          l.push({
            id: o(),
            url: e.pinterest({
              media: this.data.content.image.url,
              description: this.data.content.caption
            }),
            name: 'Pinterest',
            icon: {
              name: 'ico_pinterest_48',
              color: '#000000',
              height: '48',
              width: '48',
              class : 'svg-pinterest'
            }
          }),
          [
            {
              items: l
            }
          ]
        }
      },
      methods: {
        toggle: function () {
          this.open = !this.open
        },
        close: function () {
          this.open = !1
        },
        optionClicked: function (e) {
          var t = e.target.closest('a');
          if (null !== t) {
            var n = t.href;
            window.open(n, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600'),
            this.track(this.optionFromHref(n)),
            e.preventDefault(),
            this.close()
          }
        },
        optionFromHref: function (e) {
          return this.options[0].items.find((function (option) {
            return option.url === e
          }))
        },
        track: function () {
          var option = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          };
          window.dispatchEvent(new window.CustomEvent('tms:event:push', {
            detail: {
              eventInfo: {
                eventName: 'Social Media Interaction',
                eventAction: 'share',
                componentID: this.metadata.nzzId,
                componentName: this.metadata.title,
                eventNonInteractive: !1,
                eventPosition: '',
                type: ''
              },
              category: {
                primaryCategory: 'social shares',
                subCategory1: option.name,
                subCategory2: 'image gallery',
                subCategory3: 'top'
              }
            }
          }))
        }
      }
    },
    d = (n(1391), n(1)),
    component = Object(d.a) (l, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('ContextMenu', {
        attrs: {
          open: e.open,
          horizontal: 'right',
          'class-modifier': 'image-share'
        },
        on: {
          toggle: e.toggle,
          close: e.close
        }
      }, [
        n('template', {
          slot: 'button'
        }, [
          e._t('default', [
            n('div', {
              attrs: {
                'data-nzz-tid': 'image-share-button'
              }
            })
          ])
        ], 2),
        e._v(' '),
        n('template', {
          slot: 'menu'
        }, [
          n('Menu', {
            staticClass: 'image-share__menu',
            attrs: {
              sections: e.options
            },
            nativeOn: {
              click: function (t) {
                return e.optionClicked(t)
              }
            }
          }, [
            e.showTitle ? n('template', {
              slot: 'header'
            }, [
              n('h3', {
                staticClass: 'image-share__title'
              }, [
                e._v('\n          Bild teilen\n        ')
              ])
            ]) : e._e()
          ], 2)
        ], 1)
      ], 2)
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  475: function (e, t, n) {
    'use strict';
    n.r(t);
    n.e(5).then(n.t.bind(null, 1588, 7));
    var r = {
      props: {
        type: {
          type: String,
        default:
          'prev'
        },
        disabled: {
          type: Boolean,
        default:
          !1
        },
        isPageGallery: {
          type: Boolean,
        default:
          !1
        }
      },
      computed: {
        svgParams: function () {
          return {
            name: 'ico_arrow_pointy',
            width: '11',
            height: '17',
            color: '#000 r-#000'
          }
        }
      }
    },
    o = (n(1424), n(1)),
    component = Object(o.a) (r, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('transition', {
        attrs: {
          name: 'fade'
        }
      }, [
        e.disabled ? e._e() : n('button', {
          class : [
            e.isPageGallery ? 'page-gallery__button' : 'slider-button',
            e.isPageGallery ? 'page-gallery__button--' + e.type : 'slider-button--' + e.type
          ]
        }, [
          n('svgicon', {
            attrs: {
              name: e.svgParams.name,
              width: e.svgParams.width,
              height: e.svgParams.height,
              color: e.svgParams.color
            }
          })
        ], 1)
      ])
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  476: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      props: {
        count: {
          type: Number,
        default:
          1
        },
        position: {
          type: Number,
        default:
          0
        }
      },
      computed: {
        indicatorWidth: function () {
          return 1 / (this.count ? this.count : 1) * 100
        },
        cappedPosition: function () {
          return Math.max(0, Math.min(1, this.position))
        },
        indicatorAdjustedPosition: function () {
          return (100 - this.indicatorWidth) * this.position
        }
      }
    },
    o = (n(1426), n(1)),
    component = Object(o.a) (r, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('div', {
        staticClass: 'slider-progress'
      }, [
        n('div', {
          staticClass: 'slider-progress__wrapper',
          style: {
            transform: 'translateX(' + e.indicatorAdjustedPosition + '%)'
          },
          attrs: {
            'data-nzz-tid': 'slider-progress-wrapper'
          }
        }, [
          n('div', {
            staticClass: 'slider-progress__indicator',
            style: {
              width: e.indicatorWidth + '%'
            },
            attrs: {
              'data-nzz-tid': 'slider-progress-indicator'
            }
          })
        ])
      ])
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  481: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      components: {
        HeadlineTitle: n(42).default
      },
      props: {
        rows: {
          type: Array,
        default:
          function () {
            return []
          }
        },
        title: {
          type: String,
        default:
          'Aktuelle Nachrichten'
        }
      },
      computed: {
        isAmp: function () {
          return 'amp' === this.$store.state.isrendition
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, (function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return e.rows && 0 !== e.rows.length ? n('section', {
        staticClass: 'pageelement pageelement--top-articles',
        class : {
          'pageelement--top-articles--amp': e.isAmp
        }
      }, [
        n('div', {
          staticClass: 'pageelement__inner'
        }, [
          n('HeadlineTitle', {
            attrs: {
              data: {
                title: e.title
              }
            }
          })
        ], 1),
        e._v(' '),
        e._l(e.rows, (function (t, r) {
          return n('div', {
            key: 'top-article-row-' + r,
            staticClass: 'widget__row',
            class : t.class
          }, e._l(t.items, (function (component) {
            return n('SimpleComponentLoader', {
              key: component.id,
              attrs: {
                id: '' + component.id,
                data: component.data,
                pagetype: component.pagetype,
                componenttype: component.componenttype,
                'all-images': null
              }
            })
          })), 1)
        }))
      ], 2) : e._e()
    }), [
    ], !1, null, null, null);
    t.default = component.exports
  },
  501: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      extends : n(81).default,
      data: function () {
        return {
          baseClass: 'widget--3of3',
          tid: 'widget-3of3',
          teaserSize: '3of3',
          sourceElem: 'Widget-Volle-Breite'
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    t.default = component.exports
  },
  510: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      extends : n(120).default,
      computed: {
        webviewClick: function () {
          return '\n        var p = this.parentNode;\n        if(p.classList.contains(\'infobox--open\') && !this.classList.contains(\'infobox__body\')) {\n          p.classList.remove(\'infobox--open\');\n          p.querySelector(\'.infobox__body\').style.maxHeight = \'80px\';\n        } else {\n          p.classList.add(\'infobox--open\');\n          p.querySelector(\'.infobox__body\').style.maxHeight = p.querySelector(\'.infobox__body > div\').clientHeight + \'px\';\n        }\n      '
        }
      },
      head: function () {
        return this.closed ? {
        }
         : {
          script: [
            {
              hid: 'infobox-'.concat(this.data.id),
              type: 'text/javascript',
              preserve: 'preserve',
              innerHTML: '\n            deferred(function() {\n              var c = document.querySelector(\'#id-'.concat(this.data.id, ' .infobox__title\');\n              c.nextElementSibling.style.maxHeight = c.nextElementSibling.childNodes[0].clientHeight + \'px\';\n            });\n          ')
            }
          ]
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    t.default = component.exports
  },
  525: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      extends : n(127).default
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    t.default = component.exports
  },
  528: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'Widget1of2Webview',
      extends : n(323).default,
      data: function () {
        return {
          baseClass: 'widget--1of2',
          tid: 'widget-1of2',
          teaserSize: '1of2',
          sourceElem: 'Widget-1/2-Breite'
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    t.default = component.exports
  },
  531: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'Widget1of3Webview',
      extends : n(323).default,
      data: function () {
        return {
          baseClass: 'widget--1of3',
          tid: 'widget-1of3',
          teaserSize: '1of3',
          sourceElem: 'Widget-1/3-Breite'
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    t.default = component.exports
  },
  534: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'Widget2of3Webview',
      extends : n(323).default,
      data: function () {
        return {
          baseClass: 'widget--2of3',
          tid: 'widget-2of3',
          teaserSize: '2of3',
          sourceElem: (e = this.$config.product, 'judi' === e ? 'Widget-Volle-Breite-mittel' : 'Widget-2/3-Breite')
        };
        var e
      }
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    t.default = component.exports
  },
  536: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(323),
    o = {
      name: 'Widget3of3Webview',
      extends : r.default,
      data: function () {
        return {
          baseClass: 'widget--3of3',
          tid: 'widget-3of3',
          teaserSize: '3of3',
          sourceElem: (e = this.$config.product, e.includes(['judi',
          'nzzas',
          'bellevue']) ? 'Widget-Volle-Breite-gross' : 'Widget-Volle-Breite')
        };
        var e
      }
    },
    l = n(1),
    component = Object(l.a) (o, undefined, undefined, !1, null, null, null);
    t.default = component.exports
  },
  537: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'Widget3of3TopWebview',
      extends : n(323).default,
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
  556: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      extends : n(120).default,
      computed: {
        webviewClick: function () {
          return '\n        var p = this.parentNode;\n        if(p.classList.contains(\'infobox--open\') && !this.classList.contains(\'infobox__body\')) {\n          p.classList.remove(\'infobox--open\');\n          p.querySelector(\'.infobox__body\').style.maxHeight = \'80px\';\n        } else {\n          p.classList.add(\'infobox--open\');\n          p.querySelector(\'.infobox__body\').style.maxHeight = p.querySelector(\'.infobox__body > div\').clientHeight + \'px\';\n        }\n      '
        }
      },
      head: function () {
        return this.closed ? {
        }
         : {
          script: [
            {
              hid: 'infobox-'.concat(this.data.id),
              type: 'text/javascript',
              preserve: 'preserve',
              innerHTML: '\n            deferred(function() {\n              var c = document.querySelector(\'#id-'.concat(this.data.id, ' .infobox__title\');\n              c.nextElementSibling.style.maxHeight = c.nextElementSibling.childNodes[0].clientHeight + \'px\';\n            });\n          ')
            }
          ]
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    t.default = component.exports
  },
  572: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      extends : n(127).default
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    t.default = component.exports
  },
  574: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'Widget1of2Webview',
      extends : n(324).default,
      data: function () {
        return {
          baseClass: 'widget--1of2 widget--article',
          tid: 'widget-1of2',
          teaserSize: '1of2',
          sourceElem: 'Widget-1/2-Breite'
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    t.default = component.exports
  },
  577: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'Widget1of3Webview',
      extends : n(324).default,
      data: function () {
        return {
          baseClass: 'widget--1of3 widget--article',
          tid: 'widget-1of3',
          teaserSize: '1of3',
          sourceElem: 'Widget-1/3-Breite'
        }
      }
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    t.default = component.exports
  },
  580: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'Widget2of3Webview',
      extends : n(324).default,
      data: function () {
        return {
          baseClass: 'widget--2of3 widget--article',
          tid: 'widget-2of3',
          teaserSize: '2of3',
          sourceElem: (e = this.$config.product, 'judi' === e ? 'Widget-Volle-Breite-mittel' : 'Widget-2/3-Breite')
        };
        var e
      }
    },
    o = n(1),
    component = Object(o.a) (r, undefined, undefined, !1, null, null, null);
    t.default = component.exports
  },
  582: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(324),
    o = {
      name: 'Widget3of3Webview',
      extends : r.default,
      data: function () {
        return {
          baseClass: 'widget--3of3 widget--article',
          tid: 'widget-3of3',
          teaserSize: '3of3',
          sourceElem: (e = this.$config.product, e.includes(['judi',
          'nzzas',
          'bellevue']) ? 'Widget-Volle-Breite-gross' : 'Widget-Volle-Breite')
        };
        var e
      }
    },
    l = n(1),
    component = Object(l.a) (o, undefined, undefined, !1, null, null, null);
    t.default = component.exports
  },
  583: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = {
      name: 'Widget3of3TopWebview',
      extends : n(324).default,
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
  597: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(97),
    o = function (e) {
      return (e - 100) / 100 * 10 + 120
    },
    l = function (e) {
      return '\n        :root {\n          --nzz-font-size: '.concat(e, '%;\n        }\n        .scenario__title, .scenario__info,\n        .headline__title, .articlecomponent.subtitle, .articlecomponent.quote, \n        .layout--longformstandard .headline__title, .alias-teaser-embed-list__title {\n            word-break: break-word;\n            font-size: calc(var(--nzz-font-size) * 1.43);\n        }\n        .articlecomponent.content-table .content-table__list, .headline__meta .metainfo--content {\n            word-break: break-word;\n            font-size: calc(var(--nzz-font-size));\n        }\n        .headline__lead, .headline .teaser__flag--text {\n            word-break: break-word;\n            white-space: normal;\n            font-size: calc(var(--nzz-font-size) * 1.143);\n        }\n        .articlecomponent.text, .articlecomponent.source em, .articlecomponent .enumeration__item,\n        .articlecomponent.question, .articlecomponent.answer, .alias-teaser-embed__title {\n            word-break: break-word;\n            font-size: calc(var(--nzz-font-size) * 1.287);\n        }\n        .articlecomponent.subtitle--chapter {\n            word-break: break-word;\n            font-size: calc(var(--nzz-font-size) * 1.57);\n        }\n        .personbox__poster-author,\n        .image-description__caption, .image-description__author-single,\n        .alias-teaser-embed__text, .alias-teaser-embed-list__text  {\n            word-break: break-word;\n            font-size: calc(var(--nzz-font-size) * 1);\n        }\n        .articlecomponent.time, .articlecomponent.personbox h2, .articlecomponent.content-table h3,\n        .articlecomponent.personbox h3, .articlecomponent.personbox .personbox__bio,\n        .articlecomponent.infobox .infobox__title, .infobox__subtitle, .articlecomponent.infobox .infobox__text,\n        .enumeration__title, .articlecomponent.footnote {\n            word-break: break-word;\n            font-size: calc(var(--nzz-font-size) * 1.125);\n        }\n        .articlecomponent.infobox .infobox__title svg {\n            width: ').concat(e / 100 * 40, 'px !important;\n            height: ').concat(e / 100 * 40, 'px !important;\n        }\n        .personbox__poster-description {\n            font-size: ').concat(e / 100 * 10, 'px;\n            line-height: ').concat(e / 100 * 14, 'px;\n        }        \n        .teaser__infotag svg {\n          width: calc(').concat(e, 'px * .12) !important;\n        }\n        .content-table__link-icon svg, .subtitle__content-table-icon svg {\n          width: calc(').concat(e, 'px * .08) !important;\n        }\n        .alias-teaser-embed-list__title svg {\n          width: calc(').concat(e, 'px * .11) !important;\n          height: calc(').concat(e, 'px * .11) !important;\n        }\n        .scenario__option {\n          width: calc(').concat(e, 'px * .09) !important;\n          height: calc(').concat(e, 'px * .09) !important;\n        }\n      ')
    },
    d = function (e, t) {
      var n = e <= 100 ? '\n          .enumeration--regular .enumeration__item:before {\n              transform: scale('.concat(e / 100, ') translateY(-').concat(e, '%);\n          }\n        ') : '\n          .subtitle__content-table-link {\n              padding-left: 60px;\n          }\n          .content-table__link-index {\n              width: '.concat(e > 150 ? '50px' : '40px', ';\n          }\n          .metainfo__item--comments:after {\n              transform: scale(').concat(e / 100, ') translate(').concat(e / 25, 'px, -').concat((t + e) / 25, '%);\n          }\n          .enumeration--numeric {\n              margin-left: ').concat(e / 10, 'px;\n          }\n          .enumeration--numeric .enumeration__item:before {\n              left: ').concat( - 24 - e / 10, 'px;\n          }\n          .enumeration--regular .enumeration__item:before {\n              transform: scale(').concat(e / 100, ') translateY(').concat(e, '%);\n          }\n          .articlecomponent.infobox .infobox__body {\n              max-height: 100px;\n          }\n          ');
      return '\n          :root {\n              --nzz-font-height: '.concat(t, '%;\n          }\n          .headline__title, .headline__lead, .articlecomponent.subtitle, .articlecomponent.text, .articlecomponent.source em,\n          .headline .teaser__flag--text, .articlecomponent.quote, .articlecomponent .enumeration__item,\n          .articlecomponent.question, .articlecomponent.answer, .articlecomponent.content-table h3,\n          .articlecomponent.time, .articlecomponent.footnote , .articlecomponent .enumeration__item,\n          .articlecomponent.personbox h2, .articlecomponent.personbox h3,\n          .articlecomponent.personbox .personbox__bio, .articlecomponent.infobox .infobox__title,\n          .articlecomponent.infobox .infobox__text,\n          .image-description__caption, .headline__meta .metainfo--content,\n          .layout--longformstandard .headline__title, .infobox__subtitle, .enumeration__title,\n          .alias-teaser-embed__title, .alias-teaser-embed__text, \n          .alias-teaser-embed-list__title, .alias-teaser-embed-list__text, .personbox__poster-author {\n              line-height: calc(var(--nzz-font-height) * 1.11);\n          }\n          ').concat(n, '\n      ')
    },
    c = function (e) {
      if (e.detail) {
        var t = e.detail.fontSize;
        if (document.querySelectorAll('style#fontchanger').forEach((function (e) {
          return e.remove()
        })), t && 100 !== t) {
          var style = inline_fontchanger_setfont.fontchanger(t),
          n = inline_fontchanger_lineHeight.fontchanger(t);
          style += inline_fontchanger_setlineheight.fontchanger(t, n);
          var r = document.createElement('style');
          r.textContent = style,
          r.id = 'fontchanger',
          document.head.append(r)
        }
      }
    },
    f = {
      computed: {
        fontSize: function () {
          return this.$store.state.fontSize
        }
      },
      head: function () {
        var style = [
        ],
        script = [
        ];
        if (this.isWebview()) script.push({
          hid: 'webview-lineHeight',
          preserve: 'preserve',
          type: 'text/javascript',
          innerHTML: Object(r.a) ('fontchanger', 'lineHeight', o)
        }),
        script.push({
          hid: 'webview-fontchanger-setfont',
          preserve: 'preserve',
          type: 'text/javascript',
          innerHTML: Object(r.a) ('fontchanger', 'setfont', l)
        }),
        script.push({
          hid: 'webview-fontchanger-setlineheight',
          preserve: 'preserve',
          type: 'text/javascript',
          innerHTML: Object(r.a) ('fontchanger', 'setlineheight', d)
        }),
        script.push({
          hid: 'webview-fontchanger-trigger',
          preserve: 'preserve',
          type: 'text/javascript',
          innerHTML: Object(r.a) ('fontchanger', 'trigger', c)
        }),
        script.push({
          hid: 'webview-fontchanger-trigger',
          preserve: 'preserve',
          type: 'text/javascript',
          innerHTML: 'window.addEventListener(\'nzzSetFontSize\', inline_fontchanger_trigger.fontchanger)'
        });
         else if (100 !== this.fontSize) {
          style.push({
            id: 'article-font-size',
            hid: 'fontsize-'.concat(this.fontSize),
            type: 'text/css',
            innerHTML: l(this.fontSize)
          });
          var e = o(this.fontSize);
          style.push({
            id: 'article-font-height',
            hid: 'fontheight-'.concat(e),
            type: 'text/css',
            innerHTML: d(this.fontSize, e)
          })
        }
        return {
          style: style,
          script: script
        }
      },
      mounted: function () {
        window.addEventListener('nzzSetFontSize', this.webviewStyles)
      },
      methods: {
        isWebview: function () {
          return this.$store.state.isrendition.indexOf('webview') > - 1
        }
      },
      render: function () {
        return null
      }
    },
    m = n(1),
    component = Object(m.a) (f, undefined, undefined, !1, null, null, null);
    t.default = component.exports
  },
  728: function (e, t, n) {
    'use strict';
    n.r(t),
    n.d(t, 'handle', (function () {
      return f
    })),
    n.d(t, 'handleCached', (function () {
      return m
    }));
    var r = n(5),
    o = n.n(r),
    l = n(2),
    d = n.n(l),
    c = n(387);
    function f(e, t) {
      if (!t || !e.headers) return '';
      try {
        var n = e.headers['c1-client-country-code'],
        r = 'true' === e.headers['c1-user-has-active-product-store'],
        o = JSON.parse(e.headers['c1-user-info'] || '{}');
        return o.birth_date && delete o.birth_date,
        o.email && delete o.email,
        o.login && delete o.login,
        o.gender && delete o.gender,
        '\n      window.digitalData = { user: '.concat(JSON.stringify(t), ' };\n      window.nzzUserInfo = ').concat(JSON.stringify(o), ';\n      window.nzzUserInfo.clientCountryCode = \'').concat(void 0 !== n ? n : 'CH', '\';\n      window.nzzUserInfo.hasActiveProductStore = ').concat(r, ';\n    ')
      } catch (e) {
        console.log(JSON.stringify(e))
      }
    }
    function m(e) {
      return h.apply(this, arguments)
    }
    function h() {
      return (h = o() (d.a.mark((function e(t) {
        var data,
        n,
        r;
        return d.a.wrap((function (e) {
          for (; ; ) switch (e.prev = e.next) {
            case 0:
              return data = {
                digitalData: {
                  user: [
                  ]
                }
              },
              n = Object(c.a) (t, data, !0),
              r = n.digitalData,
              e.abrupt('return', f(t, r.user));
            case 3:
            case 'end':
              return e.stop()
          }
        }), e)
      })))).apply(this, arguments)
    }
  },
  780: function (e, t, n) {
    'use strict';
    n(919)
  },
  813: function (e, t, n) {
    var content = n(1082);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('2e9a6d47', content, !0, {
      sourceMap: !1
    })
  },
  837: function (e, t, n) {
    var content = n(1124);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('1c8a5769', content, !0, {
      sourceMap: !1
    })
  },
  916: function (e, t, n) {
    var content = n(1262);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('7b3100c4', content, !0, {
      sourceMap: !1
    })
  },
  917: function (e, t, n) {
    var content = n(1264);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('6b0e1cdf', content, !0, {
      sourceMap: !1
    })
  },
  918: function (e, t, n) {
    var content = n(1266);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('4ef8715a', content, !0, {
      sourceMap: !1
    })
  },
  919: function (e, t, n) {
    var content = n(1267);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('0949343e', content, !0, {
      sourceMap: !1
    })
  },
  920: function (e, t, n) {
    var content = n(1269);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('283eb03c', content, !0, {
      sourceMap: !1
    })
  },
  921: function (e, t, n) {
    var content = n(1271);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('62538231', content, !0, {
      sourceMap: !1
    })
  },
  922: function (e, t, n) {
    var content = n(1273);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('ada6cad0', content, !0, {
      sourceMap: !1
    })
  },
  923: function (e, t, n) {
    var content = n(1275);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('bdeedcd2', content, !0, {
      sourceMap: !1
    })
  },
  925: function (e, t, n) {
    var content = n(1280);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('8183b47a', content, !0, {
      sourceMap: !1
    })
  },
  945: function (e, t, n) {
    var content = n(1314);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('e67197fa', content, !0, {
      sourceMap: !1
    })
  },
  947: function (e, t, n) {
    var content = n(1318);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('09fdd1b1', content, !0, {
      sourceMap: !1
    })
  },
  957: function (e, t, n) {
    var content = n(1336);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('5f189463', content, !0, {
      sourceMap: !1
    })
  },
  962: function (e, t, n) {
    var content = n(1346);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('4300fec6', content, !0, {
      sourceMap: !1
    })
  },
  965: function (e, t, n) {
    var content = n(1352);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('5ba9d2c9', content, !0, {
      sourceMap: !1
    })
  },
  966: function (e, t, n) {
    var content = n(1354);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('5d33a5a5', content, !0, {
      sourceMap: !1
    })
  },
  967: function (e, t, n) {
    var content = n(1356);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('431140c9', content, !0, {
      sourceMap: !1
    })
  },
  968: function (e, t, n) {
    var content = n(1358);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('c1934e56', content, !0, {
      sourceMap: !1
    })
  },
  969: function (e, t, n) {
    var content = n(1360);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('363aea4f', content, !0, {
      sourceMap: !1
    })
  },
  986: function (e, t, n) {
    var content = n(1392);
    content.__esModule && (content = content.default),
    'string' == typeof content && (content = [
      [e.i,
      content,
      '']
    ]),
    content.locals && (e.exports = content.locals);
    (0, n(13).default) ('183c2fde', content, !0, {
      sourceMap: !1
    })
  },
  99: function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(5),
    o = n.n(r),
    l = n(2),
    d = n.n(l),
    c = n(64),
    f = n(1079),
    m = n.n(f),
    h = n(9),
    _ = n.n(h);
    function v(text) {
      return m() (text).toString()
    }
    function x(e) {
      return 'remote' === e.type
    }
    function w(e) {
      return !x(e)
    }
    function y(e) {
      if (e.status >= 300) throw new Error('foo');
      return e.data
    }
    function z(text) {
      return {
        text: text,
        id: 'q-'.concat(v(text))
      }
    }
    function k() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      console.log(t)
    }
    function C(e) {
      return x(e) ? _.a.request(e.content, {
        responseType: 'text'
      }).then(y).then(z).catch(k) : Promise.resolve(z(e.content))
    }
    function S(e) {
      return 'remote' === e.type ? {
        src: e.content,
        body: !0,
        preserve: 'preserve'
      }
       : {
        innerHTML: e.content,
        body: !0,
        preserve: 'preserve'
      }
    }
    function j(e) {
      return {
        href: e.content,
        rel: 'stylesheet',
        preserve: 'preserve',
        hid: v(e.content)
      }
    }
    function E(e) {
      return {
        cssText: e.content,
        type: 'text/css',
        preserve: 'preserve',
        hid: v(e.content)
      }
    }
    function O(e) {
      return document.querySelector('#'.concat(e))
    }
    function L(script) {
      if (script && script.id && !O(script.id)) {
        var e = document.createElement('script');
        e.text = script.text,
        e.id = script.id,
        document.body.appendChild(e)
      }
    }
    function M(script) {
      var e = O(script.id);
      e && e.parentNode.removeChild(e)
    }
    var P = {
      name: 'ArticleQembed',
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
      data: function () {
        return {
          scripts: [
          ]
        }
      },
      computed: {
        qData: function () {
          return this.data.content && this.data.content.html ? this.data.content : this.data.content && this.data.content['q-embed'] && this.data.content['q-embed'].html ? this.data.content['q-embed'] : {
          }
        },
        htmlPreservedScripts: function () {
          var e = this.qData.html;
          return (void 0 === e ? '' : e).replace(/<script/gi, '<script preserve="preserve"')
        }
      },
      mounted: function () {
        var e = this;
        return o() (d.a.mark((function t() {
          var n,
          r;
          return d.a.wrap((function (t) {
            for (; ; ) switch (t.prev = t.next) {
              case 0:
                if (window.nzzLiveComponents && - 1 !== window.nzzLiveComponents.indexOf('q' + e.data.id)) {
                  t.next = 7;
                  break
                }
                return n = e.qData.scripts,
                r = void 0 === n ? [
                ] : n,
                t.next = 4,
                Promise.all(r.map(C));
              case 4:
                e.scripts = t.sent,
                e.scripts.forEach(L),
                window.nzzLiveComponents && window.nzzLiveComponents.push('q' + e.data.id);
              case 7:
              case 'end':
                return t.stop()
            }
          }), t)
        }))) ()
      },
      destroyed: function () {
        this.scripts.forEach(M)
      },
      methods: {
        isWebview: function () {
          return this.$store.state.isrendition.indexOf('webview') > - 1
        },
        getClass: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          },
          t = '';
          return Object.entries(e).forEach((function (style) {
            t = style[1]
          })),
          t
        }
      },
      head: function () {
        var e = this.qData,
        t = e.scripts,
        n = void 0 === t ? [
        ] : t,
        r = e.stylesheets,
        o = void 0 === r ? [
        ] : r,
        script = n.filter(this.isWebview).map(S);
        return {
          link: o.filter(x).map(j),
          style: o.filter(w).map(E),
          script: script
        }
      }
    },
    $ = (n(1081), n(1)),
    component = Object($.a) (P, (function () {
      var e = this,
      t = e.$createElement;
      e._self._c;
      return e.qData.html ? e._m(0) : e._e()
    }), [
      function () {
        var e = this,
        t = e.$createElement,
        n = e._self._c || t;
        return n('div', {
          staticClass: 'articlecomponent q-embed widget--qembed',
          class : e.getClass(e.data.styles)
        }, [
          n('div', {
            domProps: {
              innerHTML: e._s(e.htmlPreservedScripts)
            }
          })
        ])
      }
    ], !1, null, null, null);
    t.default = component.exports
  }
}
]);
