var e =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : {},
  n = {},
  t = {},
  a = e.parcelRequirebb04;
null == a &&
  (((a = function (e) {
    if (e in n) return n[e].exports;
    if (e in t) {
      var a = t[e];
      delete t[e];
      var r = { id: e, exports: {} };
      return (n[e] = r), a.call(r.exports, r, r.exports), r.exports;
    }
    var i = new Error("Cannot find module '" + e + "'");
    throw ((i.code = "MODULE_NOT_FOUND"), i);
  }).register = function (e, n) {
    t[e] = n;
  }),
  (e.parcelRequirebb04 = a)),
  a.register("b4lJi", function (e, n) {
    var t, a;
    (t = e.exports),
      (a = function () {
        void 0 === Array.isArray &&
          (Array.isArray = function (e) {
            return "[object Array]" === Object.prototype.toString.call(e);
          });
        var e = function (e, n) {
            (e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]]),
              (n = [n[0] >>> 16, 65535 & n[0], n[1] >>> 16, 65535 & n[1]]);
            var t = [0, 0, 0, 0];
            return (
              (t[3] += e[3] + n[3]),
              (t[2] += t[3] >>> 16),
              (t[3] &= 65535),
              (t[2] += e[2] + n[2]),
              (t[1] += t[2] >>> 16),
              (t[2] &= 65535),
              (t[1] += e[1] + n[1]),
              (t[0] += t[1] >>> 16),
              (t[1] &= 65535),
              (t[0] += e[0] + n[0]),
              (t[0] &= 65535),
              [(t[0] << 16) | t[1], (t[2] << 16) | t[3]]
            );
          },
          n = function (e, n) {
            (e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]]),
              (n = [n[0] >>> 16, 65535 & n[0], n[1] >>> 16, 65535 & n[1]]);
            var t = [0, 0, 0, 0];
            return (
              (t[3] += e[3] * n[3]),
              (t[2] += t[3] >>> 16),
              (t[3] &= 65535),
              (t[2] += e[2] * n[3]),
              (t[1] += t[2] >>> 16),
              (t[2] &= 65535),
              (t[2] += e[3] * n[2]),
              (t[1] += t[2] >>> 16),
              (t[2] &= 65535),
              (t[1] += e[1] * n[3]),
              (t[0] += t[1] >>> 16),
              (t[1] &= 65535),
              (t[1] += e[2] * n[2]),
              (t[0] += t[1] >>> 16),
              (t[1] &= 65535),
              (t[1] += e[3] * n[1]),
              (t[0] += t[1] >>> 16),
              (t[1] &= 65535),
              (t[0] += e[0] * n[3] + e[1] * n[2] + e[2] * n[1] + e[3] * n[0]),
              (t[0] &= 65535),
              [(t[0] << 16) | t[1], (t[2] << 16) | t[3]]
            );
          },
          t = function (e, n) {
            return 32 == (n %= 64)
              ? [e[1], e[0]]
              : n < 32
              ? [(e[0] << n) | (e[1] >>> (32 - n)), (e[1] << n) | (e[0] >>> (32 - n))]
              : ((n -= 32), [(e[1] << n) | (e[0] >>> (32 - n)), (e[0] << n) | (e[1] >>> (32 - n))]);
          },
          a = function (e, n) {
            return 0 == (n %= 64) ? e : n < 32 ? [(e[0] << n) | (e[1] >>> (32 - n)), e[1] << n] : [e[1] << (n - 32), 0];
          },
          r = function (e, n) {
            return [e[0] ^ n[0], e[1] ^ n[1]];
          },
          i = function (e) {
            return (
              (e = r(e, [0, e[0] >>> 1])),
              (e = n(e, [4283543511, 3981806797])),
              (e = r(e, [0, e[0] >>> 1])),
              (e = n(e, [3301882366, 444984403])),
              (e = r(e, [0, e[0] >>> 1]))
            );
          },
          o = function (o, l) {
            l = l || 0;
            for (
              var s = (o = o || "").length % 16,
                c = o.length - s,
                u = [0, l],
                d = [0, l],
                f = [0, 0],
                g = [0, 0],
                h = [2277735313, 289559509],
                m = [1291169091, 658871167],
                p = 0;
              p < c;
              p += 16
            )
              (f = [
                (255 & o.charCodeAt(p + 4)) |
                  ((255 & o.charCodeAt(p + 5)) << 8) |
                  ((255 & o.charCodeAt(p + 6)) << 16) |
                  ((255 & o.charCodeAt(p + 7)) << 24),
                (255 & o.charCodeAt(p)) |
                  ((255 & o.charCodeAt(p + 1)) << 8) |
                  ((255 & o.charCodeAt(p + 2)) << 16) |
                  ((255 & o.charCodeAt(p + 3)) << 24),
              ]),
                (g = [
                  (255 & o.charCodeAt(p + 12)) |
                    ((255 & o.charCodeAt(p + 13)) << 8) |
                    ((255 & o.charCodeAt(p + 14)) << 16) |
                    ((255 & o.charCodeAt(p + 15)) << 24),
                  (255 & o.charCodeAt(p + 8)) |
                    ((255 & o.charCodeAt(p + 9)) << 8) |
                    ((255 & o.charCodeAt(p + 10)) << 16) |
                    ((255 & o.charCodeAt(p + 11)) << 24),
                ]),
                (f = n(f, h)),
                (f = t(f, 31)),
                (f = n(f, m)),
                (u = r(u, f)),
                (u = t(u, 27)),
                (u = e(u, d)),
                (u = e(n(u, [0, 5]), [0, 1390208809])),
                (g = n(g, m)),
                (g = t(g, 33)),
                (g = n(g, h)),
                (d = r(d, g)),
                (d = t(d, 31)),
                (d = e(d, u)),
                (d = e(n(d, [0, 5]), [0, 944331445]));
            switch (((f = [0, 0]), (g = [0, 0]), s)) {
              case 15:
                g = r(g, a([0, o.charCodeAt(p + 14)], 48));
              case 14:
                g = r(g, a([0, o.charCodeAt(p + 13)], 40));
              case 13:
                g = r(g, a([0, o.charCodeAt(p + 12)], 32));
              case 12:
                g = r(g, a([0, o.charCodeAt(p + 11)], 24));
              case 11:
                g = r(g, a([0, o.charCodeAt(p + 10)], 16));
              case 10:
                g = r(g, a([0, o.charCodeAt(p + 9)], 8));
              case 9:
                (g = r(g, [0, o.charCodeAt(p + 8)])), (g = n(g, m)), (g = t(g, 33)), (g = n(g, h)), (d = r(d, g));
              case 8:
                f = r(f, a([0, o.charCodeAt(p + 7)], 56));
              case 7:
                f = r(f, a([0, o.charCodeAt(p + 6)], 48));
              case 6:
                f = r(f, a([0, o.charCodeAt(p + 5)], 40));
              case 5:
                f = r(f, a([0, o.charCodeAt(p + 4)], 32));
              case 4:
                f = r(f, a([0, o.charCodeAt(p + 3)], 24));
              case 3:
                f = r(f, a([0, o.charCodeAt(p + 2)], 16));
              case 2:
                f = r(f, a([0, o.charCodeAt(p + 1)], 8));
              case 1:
                (f = r(f, [0, o.charCodeAt(p)])), (f = n(f, h)), (f = t(f, 31)), (f = n(f, m)), (u = r(u, f));
            }
            return (
              (u = r(u, [0, o.length])),
              (d = r(d, [0, o.length])),
              (u = e(u, d)),
              (d = e(d, u)),
              (u = i(u)),
              (d = i(d)),
              (u = e(u, d)),
              (d = e(d, u)),
              ("00000000" + (u[0] >>> 0).toString(16)).slice(-8) +
                ("00000000" + (u[1] >>> 0).toString(16)).slice(-8) +
                ("00000000" + (d[0] >>> 0).toString(16)).slice(-8) +
                ("00000000" + (d[1] >>> 0).toString(16)).slice(-8)
            );
          },
          l = {
            preprocessor: null,
            audio: { timeout: 1e3, excludeIOS11: !0 },
            fonts: {
              swfContainerId: "fingerprintjs2",
              swfPath: "flash/compiled/FontList.swf",
              userDefinedFonts: [],
              extendedJsFonts: !1,
            },
            screen: { detectScreenOrientation: !0 },
            plugins: { sortPluginsFor: [/palemoon/i], excludeIE: !1 },
            extraComponents: [],
            excludes: { enumerateDevices: !0, pixelRatio: !0, doNotTrack: !0, fontsFlash: !0, adBlock: !0 },
            NOT_AVAILABLE: "not available",
            ERROR: "error",
            EXCLUDED: "excluded",
          },
          s = function (e, n) {
            if (Array.prototype.forEach && e.forEach === Array.prototype.forEach) e.forEach(n);
            else if (e.length === +e.length) for (var t = 0, a = e.length; t < a; t++) n(e[t], t, e);
            else for (var r in e) e.hasOwnProperty(r) && n(e[r], r, e);
          },
          c = function (e, n) {
            var t = [];
            return null == e
              ? t
              : Array.prototype.map && e.map === Array.prototype.map
              ? e.map(n)
              : (s(e, function (e, a, r) {
                  t.push(n(e, a, r));
                }),
                t);
          },
          u = function () {
            return navigator.mediaDevices && navigator.mediaDevices.enumerateDevices;
          },
          d = function (e) {
            var n = [window.screen.width, window.screen.height];
            return e.screen.detectScreenOrientation && n.sort().reverse(), n;
          },
          f = function (e) {
            if (window.screen.availWidth && window.screen.availHeight) {
              var n = [window.screen.availHeight, window.screen.availWidth];
              return e.screen.detectScreenOrientation && n.sort().reverse(), n;
            }
            return e.NOT_AVAILABLE;
          },
          g = function (e) {
            if (null == navigator.plugins) return e.NOT_AVAILABLE;
            for (var n = [], t = 0, a = navigator.plugins.length; t < a; t++)
              navigator.plugins[t] && n.push(navigator.plugins[t]);
            return (
              m(e) &&
                (n = n.sort(function (e, n) {
                  return e.name > n.name ? 1 : e.name < n.name ? -1 : 0;
                })),
              c(n, function (e) {
                var n = c(e, function (e) {
                  return [e.type, e.suffixes];
                });
                return [e.name, e.description, n];
              })
            );
          },
          h = function (e) {
            var n = [];
            return (
              (Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject")) ||
              "ActiveXObject" in window
                ? (n = c(
                    [
                      "AcroPDF.PDF",
                      "Adodb.Stream",
                      "AgControl.AgControl",
                      "DevalVRXCtrl.DevalVRXCtrl.1",
                      "MacromediaFlashPaper.MacromediaFlashPaper",
                      "Msxml2.DOMDocument",
                      "Msxml2.XMLHTTP",
                      "PDF.PdfCtrl",
                      "QuickTime.QuickTime",
                      "QuickTimeCheckObject.QuickTimeCheck.1",
                      "RealPlayer",
                      "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)",
                      "RealVideo.RealVideo(tm) ActiveX Control (32-bit)",
                      "Scripting.Dictionary",
                      "SWCtl.SWCtl",
                      "Shell.UIHelper",
                      "ShockwaveFlash.ShockwaveFlash",
                      "Skype.Detection",
                      "TDCCtl.TDCCtl",
                      "WMPlayer.OCX",
                      "rmocx.RealPlayer G2 Control",
                      "rmocx.RealPlayer G2 Control.1",
                    ],
                    function (n) {
                      try {
                        return new window.ActiveXObject(n), n;
                      } catch (n) {
                        return e.ERROR;
                      }
                    },
                  ))
                : n.push(e.NOT_AVAILABLE),
              navigator.plugins && (n = n.concat(g(e))),
              n
            );
          },
          m = function (e) {
            for (var n = !1, t = 0, a = e.plugins.sortPluginsFor.length; t < a; t++) {
              var r = e.plugins.sortPluginsFor[t];
              if (navigator.userAgent.match(r)) {
                n = !0;
                break;
              }
            }
            return n;
          },
          p = function (e) {
            try {
              return !!window.sessionStorage;
            } catch (n) {
              return e.ERROR;
            }
          },
          T = function (e) {
            try {
              return !!window.localStorage;
            } catch (n) {
              return e.ERROR;
            }
          },
          v = function (e) {
            if (R()) return e.EXCLUDED;
            try {
              return !!window.indexedDB;
            } catch (n) {
              return e.ERROR;
            }
          },
          A = function (e) {
            return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : e.NOT_AVAILABLE;
          },
          w = function (e) {
            return navigator.cpuClass || e.NOT_AVAILABLE;
          },
          S = function (e) {
            return navigator.platform ? navigator.platform : e.NOT_AVAILABLE;
          },
          C = function (e) {
            return navigator.doNotTrack
              ? navigator.doNotTrack
              : navigator.msDoNotTrack
              ? navigator.msDoNotTrack
              : window.doNotTrack
              ? window.doNotTrack
              : e.NOT_AVAILABLE;
          },
          B = function () {
            var e,
              n = 0;
            void 0 !== navigator.maxTouchPoints
              ? (n = navigator.maxTouchPoints)
              : void 0 !== navigator.msMaxTouchPoints && (n = navigator.msMaxTouchPoints);
            try {
              document.createEvent("TouchEvent"), (e = !0);
            } catch (n) {
              e = !1;
            }
            return [n, e, "ontouchstart" in window];
          },
          y = function (e) {
            var n = [],
              t = document.createElement("canvas");
            (t.width = 2e3), (t.height = 200), (t.style.display = "inline");
            var a = t.getContext("2d");
            return (
              a.rect(0, 0, 10, 10),
              a.rect(2, 2, 6, 6),
              n.push("canvas winding:" + (!1 === a.isPointInPath(5, 5, "evenodd") ? "yes" : "no")),
              (a.textBaseline = "alphabetic"),
              (a.fillStyle = "#f60"),
              a.fillRect(125, 1, 62, 20),
              (a.fillStyle = "#069"),
              e.dontUseFakeFontInCanvas ? (a.font = "11pt Arial") : (a.font = "11pt no-real-font-123"),
              a.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15),
              (a.fillStyle = "rgba(102, 204, 0, 0.2)"),
              (a.font = "18pt Arial"),
              a.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45),
              (a.globalCompositeOperation = "multiply"),
              (a.fillStyle = "rgb(255,0,255)"),
              a.beginPath(),
              a.arc(50, 50, 50, 0, 2 * Math.PI, !0),
              a.closePath(),
              a.fill(),
              (a.fillStyle = "rgb(0,255,255)"),
              a.beginPath(),
              a.arc(100, 50, 50, 0, 2 * Math.PI, !0),
              a.closePath(),
              a.fill(),
              (a.fillStyle = "rgb(255,255,0)"),
              a.beginPath(),
              a.arc(75, 100, 50, 0, 2 * Math.PI, !0),
              a.closePath(),
              a.fill(),
              (a.fillStyle = "rgb(255,0,255)"),
              a.arc(75, 75, 75, 0, 2 * Math.PI, !0),
              a.arc(75, 75, 25, 0, 2 * Math.PI, !0),
              a.fill("evenodd"),
              t.toDataURL && n.push("canvas fp:" + t.toDataURL()),
              n
            );
          },
          E = function () {
            var e,
              n = function (n) {
                return (
                  e.clearColor(0, 0, 0, 1),
                  e.enable(e.DEPTH_TEST),
                  e.depthFunc(e.LEQUAL),
                  e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT),
                  "[" + n[0] + ", " + n[1] + "]"
                );
              };
            if (!(e = G())) return null;
            var t = [],
              a = e.createBuffer();
            e.bindBuffer(e.ARRAY_BUFFER, a);
            var r = new Float32Array([-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0]);
            e.bufferData(e.ARRAY_BUFFER, r, e.STATIC_DRAW), (a.itemSize = 3), (a.numItems = 3);
            var i = e.createProgram(),
              o = e.createShader(e.VERTEX_SHADER);
            e.shaderSource(
              o,
              "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}",
            ),
              e.compileShader(o);
            var l = e.createShader(e.FRAGMENT_SHADER);
            e.shaderSource(
              l,
              "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}",
            ),
              e.compileShader(l),
              e.attachShader(i, o),
              e.attachShader(i, l),
              e.linkProgram(i),
              e.useProgram(i),
              (i.vertexPosAttrib = e.getAttribLocation(i, "attrVertex")),
              (i.offsetUniform = e.getUniformLocation(i, "uniformOffset")),
              e.enableVertexAttribArray(i.vertexPosArray),
              e.vertexAttribPointer(i.vertexPosAttrib, a.itemSize, e.FLOAT, !1, 0, 0),
              e.uniform2f(i.offsetUniform, 1, 1),
              e.drawArrays(e.TRIANGLE_STRIP, 0, a.numItems);
            try {
              t.push(e.canvas.toDataURL());
            } catch (e) {}
            t.push("extensions:" + (e.getSupportedExtensions() || []).join(";")),
              t.push("webgl aliased line width range:" + n(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))),
              t.push("webgl aliased point size range:" + n(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))),
              t.push("webgl alpha bits:" + e.getParameter(e.ALPHA_BITS)),
              t.push("webgl antialiasing:" + (e.getContextAttributes().antialias ? "yes" : "no")),
              t.push("webgl blue bits:" + e.getParameter(e.BLUE_BITS)),
              t.push("webgl depth bits:" + e.getParameter(e.DEPTH_BITS)),
              t.push("webgl green bits:" + e.getParameter(e.GREEN_BITS)),
              t.push(
                "webgl max anisotropy:" +
                  (function (e) {
                    var n =
                      e.getExtension("EXT_texture_filter_anisotropic") ||
                      e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") ||
                      e.getExtension("MOZ_EXT_texture_filter_anisotropic");
                    if (n) {
                      var t = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                      return 0 === t && (t = 2), t;
                    }
                    return null;
                  })(e),
              ),
              t.push("webgl max combined texture image units:" + e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),
              t.push("webgl max cube map texture size:" + e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)),
              t.push("webgl max fragment uniform vectors:" + e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)),
              t.push("webgl max render buffer size:" + e.getParameter(e.MAX_RENDERBUFFER_SIZE)),
              t.push("webgl max texture image units:" + e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)),
              t.push("webgl max texture size:" + e.getParameter(e.MAX_TEXTURE_SIZE)),
              t.push("webgl max varying vectors:" + e.getParameter(e.MAX_VARYING_VECTORS)),
              t.push("webgl max vertex attribs:" + e.getParameter(e.MAX_VERTEX_ATTRIBS)),
              t.push("webgl max vertex texture image units:" + e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),
              t.push("webgl max vertex uniform vectors:" + e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)),
              t.push("webgl max viewport dims:" + n(e.getParameter(e.MAX_VIEWPORT_DIMS))),
              t.push("webgl red bits:" + e.getParameter(e.RED_BITS)),
              t.push("webgl renderer:" + e.getParameter(e.RENDERER)),
              t.push("webgl shading language version:" + e.getParameter(e.SHADING_LANGUAGE_VERSION)),
              t.push("webgl stencil bits:" + e.getParameter(e.STENCIL_BITS)),
              t.push("webgl vendor:" + e.getParameter(e.VENDOR)),
              t.push("webgl version:" + e.getParameter(e.VERSION));
            try {
              var c = e.getExtension("WEBGL_debug_renderer_info");
              c &&
                (t.push("webgl unmasked vendor:" + e.getParameter(c.UNMASKED_VENDOR_WEBGL)),
                t.push("webgl unmasked renderer:" + e.getParameter(c.UNMASKED_RENDERER_WEBGL)));
            } catch (e) {}
            return e.getShaderPrecisionFormat
              ? (s(["FLOAT", "INT"], function (n) {
                  s(["VERTEX", "FRAGMENT"], function (a) {
                    s(["HIGH", "MEDIUM", "LOW"], function (r) {
                      s(["precision", "rangeMin", "rangeMax"], function (i) {
                        var o = e.getShaderPrecisionFormat(e[a + "_SHADER"], e[r + "_" + n])[i];
                        "precision" !== i && (i = "precision " + i);
                        var l = [
                          "webgl ",
                          a.toLowerCase(),
                          " shader ",
                          r.toLowerCase(),
                          " ",
                          n.toLowerCase(),
                          " ",
                          i,
                          ":",
                          o,
                        ].join("");
                        t.push(l);
                      });
                    });
                  });
                }),
                U(e),
                t)
              : (U(e), t);
          },
          x = function () {
            try {
              var e = G(),
                n = e.getExtension("WEBGL_debug_renderer_info"),
                t = e.getParameter(n.UNMASKED_VENDOR_WEBGL) + "~" + e.getParameter(n.UNMASKED_RENDERER_WEBGL);
              return U(e), t;
            } catch (e) {
              return null;
            }
          },
          O = function () {
            var e = document.createElement("div");
            (e.innerHTML = "&nbsp;"), (e.className = "adsbox");
            var n = !1;
            try {
              document.body.appendChild(e),
                (n = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight),
                document.body.removeChild(e);
            } catch (e) {
              n = !1;
            }
            return n;
          },
          M = function () {
            if (void 0 !== navigator.languages)
              try {
                if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2)) return !0;
              } catch (e) {
                return !0;
              }
            return !1;
          },
          b = function () {
            return window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight;
          },
          P = function () {
            var e,
              n = navigator.userAgent.toLowerCase(),
              t = navigator.oscpu,
              a = navigator.platform.toLowerCase();
            if (
              ((e =
                n.indexOf("windows phone") >= 0
                  ? "Windows Phone"
                  : n.indexOf("windows") >= 0 ||
                    n.indexOf("win16") >= 0 ||
                    n.indexOf("win32") >= 0 ||
                    n.indexOf("win64") >= 0 ||
                    n.indexOf("win95") >= 0 ||
                    n.indexOf("win98") >= 0 ||
                    n.indexOf("winnt") >= 0 ||
                    n.indexOf("wow64") >= 0
                  ? "Windows"
                  : n.indexOf("android") >= 0
                  ? "Android"
                  : n.indexOf("linux") >= 0 || n.indexOf("cros") >= 0 || n.indexOf("x11") >= 0
                  ? "Linux"
                  : n.indexOf("iphone") >= 0 ||
                    n.indexOf("ipad") >= 0 ||
                    n.indexOf("ipod") >= 0 ||
                    n.indexOf("crios") >= 0 ||
                    n.indexOf("fxios") >= 0
                  ? "iOS"
                  : n.indexOf("macintosh") >= 0 || n.indexOf("mac_powerpc)") >= 0
                  ? "Mac"
                  : "Other"),
              ("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) &&
                "Windows" !== e &&
                "Windows Phone" !== e &&
                "Android" !== e &&
                "iOS" !== e &&
                "Other" !== e &&
                -1 === n.indexOf("cros"))
            )
              return !0;
            if (void 0 !== t) {
              if ((t = t.toLowerCase()).indexOf("win") >= 0 && "Windows" !== e && "Windows Phone" !== e) return !0;
              if (t.indexOf("linux") >= 0 && "Linux" !== e && "Android" !== e) return !0;
              if (t.indexOf("mac") >= 0 && "Mac" !== e && "iOS" !== e) return !0;
              if ((-1 === t.indexOf("win") && -1 === t.indexOf("linux") && -1 === t.indexOf("mac")) != ("Other" === e))
                return !0;
            }
            return (
              (a.indexOf("win") >= 0 && "Windows" !== e && "Windows Phone" !== e) ||
              ((a.indexOf("linux") >= 0 || a.indexOf("android") >= 0 || a.indexOf("pike") >= 0) &&
                "Linux" !== e &&
                "Android" !== e) ||
              ((a.indexOf("mac") >= 0 ||
                a.indexOf("ipad") >= 0 ||
                a.indexOf("ipod") >= 0 ||
                a.indexOf("iphone") >= 0) &&
                "Mac" !== e &&
                "iOS" !== e) ||
              (!(a.indexOf("arm") >= 0 && "Windows Phone" === e) &&
                !(a.indexOf("pike") >= 0 && n.indexOf("opera mini") >= 0) &&
                ((a.indexOf("win") < 0 &&
                  a.indexOf("linux") < 0 &&
                  a.indexOf("mac") < 0 &&
                  a.indexOf("iphone") < 0 &&
                  a.indexOf("ipad") < 0 &&
                  a.indexOf("ipod") < 0) !=
                  ("Other" === e) ||
                  (void 0 === navigator.plugins && "Windows" !== e && "Windows Phone" !== e)))
            );
          },
          L = function () {
            var e,
              n = navigator.userAgent.toLowerCase(),
              t = navigator.productSub;
            if (n.indexOf("edge/") >= 0 || n.indexOf("iemobile/") >= 0) return !1;
            if (n.indexOf("opera mini") >= 0) return !1;
            if (
              ("Chrome" ==
                (e =
                  n.indexOf("firefox/") >= 0
                    ? "Firefox"
                    : n.indexOf("opera/") >= 0 || n.indexOf(" opr/") >= 0
                    ? "Opera"
                    : n.indexOf("chrome/") >= 0
                    ? "Chrome"
                    : n.indexOf("safari/") >= 0
                    ? n.indexOf("android 1.") >= 0 ||
                      n.indexOf("android 2.") >= 0 ||
                      n.indexOf("android 3.") >= 0 ||
                      n.indexOf("android 4.") >= 0
                      ? "AOSP"
                      : "Safari"
                    : n.indexOf("trident/") >= 0
                    ? "Internet Explorer"
                    : "Other") ||
                "Safari" === e ||
                "Opera" === e) &&
              "20030107" !== t
            )
              return !0;
            var a,
              r = eval.toString().length;
            if (37 === r && "Safari" !== e && "Firefox" !== e && "Other" !== e) return !0;
            if (39 === r && "Internet Explorer" !== e && "Other" !== e) return !0;
            if (33 === r && "Chrome" !== e && "AOSP" !== e && "Opera" !== e && "Other" !== e) return !0;
            try {
              throw "a";
            } catch (e) {
              try {
                e.toSource(), (a = !0);
              } catch (e) {
                a = !1;
              }
            }
            return a && "Firefox" !== e && "Other" !== e;
          },
          I = function () {
            var e = document.createElement("canvas");
            return !(!e.getContext || !e.getContext("2d"));
          },
          k = function () {
            if (!I()) return !1;
            var e = G(),
              n = !!window.WebGLRenderingContext && !!e;
            return U(e), n;
          },
          D = function () {
            return (
              "Microsoft Internet Explorer" === navigator.appName ||
              !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent))
            );
          },
          R = function () {
            return ("msWriteProfilerMark" in window) + ("msLaunchUri" in navigator) + ("msSaveBlob" in navigator) >= 2;
          },
          N = function () {
            return void 0 !== window.swfobject;
          },
          _ = function () {
            return window.swfobject.hasFlashPlayerVersion("9.0.0");
          },
          F = function (e, n) {
            var t = "___fp_swf_loaded";
            window[t] = function (n) {
              e(n);
            };
            var a = n.fonts.swfContainerId;
            !(function (e) {
              var n = document.createElement("div");
              n.setAttribute("id", e.fonts.swfContainerId), document.body.appendChild(n);
            })();
            var r = { onReady: t };
            window.swfobject.embedSWF(
              n.fonts.swfPath,
              a,
              "1",
              "1",
              "9.0.0",
              !1,
              r,
              { allowScriptAccess: "always", menu: "false" },
              {},
            );
          },
          G = function () {
            var e = document.createElement("canvas"),
              n = null;
            try {
              n = e.getContext("webgl") || e.getContext("experimental-webgl");
            } catch (e) {}
            return n || (n = null), n;
          },
          U = function (e) {
            var n = e.getExtension("WEBGL_lose_context");
            null != n && n.loseContext();
          },
          V = [
            {
              key: "userAgent",
              getData: function (e) {
                e(navigator.userAgent);
              },
            },
            {
              key: "webdriver",
              getData: function (e, n) {
                e(null == navigator.webdriver ? n.NOT_AVAILABLE : navigator.webdriver);
              },
            },
            {
              key: "language",
              getData: function (e, n) {
                e(
                  navigator.language ||
                    navigator.userLanguage ||
                    navigator.browserLanguage ||
                    navigator.systemLanguage ||
                    n.NOT_AVAILABLE,
                );
              },
            },
            {
              key: "colorDepth",
              getData: function (e, n) {
                e(window.screen.colorDepth || n.NOT_AVAILABLE);
              },
            },
            {
              key: "deviceMemory",
              getData: function (e, n) {
                e(navigator.deviceMemory || n.NOT_AVAILABLE);
              },
            },
            {
              key: "pixelRatio",
              getData: function (e, n) {
                e(window.devicePixelRatio || n.NOT_AVAILABLE);
              },
            },
            {
              key: "hardwareConcurrency",
              getData: function (e, n) {
                e(A(n));
              },
            },
            {
              key: "screenResolution",
              getData: function (e, n) {
                e(d(n));
              },
            },
            {
              key: "availableScreenResolution",
              getData: function (e, n) {
                e(f(n));
              },
            },
            {
              key: "timezoneOffset",
              getData: function (e) {
                e(new Date().getTimezoneOffset());
              },
            },
            {
              key: "timezone",
              getData: function (e, n) {
                window.Intl && window.Intl.DateTimeFormat
                  ? e(new window.Intl.DateTimeFormat().resolvedOptions().timeZone || n.NOT_AVAILABLE)
                  : e(n.NOT_AVAILABLE);
              },
            },
            {
              key: "sessionStorage",
              getData: function (e, n) {
                e(p(n));
              },
            },
            {
              key: "localStorage",
              getData: function (e, n) {
                e(T(n));
              },
            },
            {
              key: "indexedDb",
              getData: function (e, n) {
                e(v(n));
              },
            },
            {
              key: "addBehavior",
              getData: function (e) {
                e(!!window.HTMLElement.prototype.addBehavior);
              },
            },
            {
              key: "openDatabase",
              getData: function (e) {
                e(!!window.openDatabase);
              },
            },
            {
              key: "cpuClass",
              getData: function (e, n) {
                e(w(n));
              },
            },
            {
              key: "platform",
              getData: function (e, n) {
                e(S(n));
              },
            },
            {
              key: "doNotTrack",
              getData: function (e, n) {
                e(C(n));
              },
            },
            {
              key: "plugins",
              getData: function (e, n) {
                D() ? (n.plugins.excludeIE ? e(n.EXCLUDED) : e(h(n))) : e(g(n));
              },
            },
            {
              key: "canvas",
              getData: function (e, n) {
                I() ? e(y(n)) : e(n.NOT_AVAILABLE);
              },
            },
            {
              key: "webgl",
              getData: function (e, n) {
                k() ? e(E()) : e(n.NOT_AVAILABLE);
              },
            },
            {
              key: "webglVendorAndRenderer",
              getData: function (e) {
                k() ? e(x()) : e();
              },
            },
            {
              key: "adBlock",
              getData: function (e) {
                e(O());
              },
            },
            {
              key: "hasLiedLanguages",
              getData: function (e) {
                e(M());
              },
            },
            {
              key: "hasLiedResolution",
              getData: function (e) {
                e(b());
              },
            },
            {
              key: "hasLiedOs",
              getData: function (e) {
                e(P());
              },
            },
            {
              key: "hasLiedBrowser",
              getData: function (e) {
                e(L());
              },
            },
            {
              key: "touchSupport",
              getData: function (e) {
                e(B());
              },
            },
            {
              key: "fonts",
              getData: function (e, n) {
                var t = ["monospace", "sans-serif", "serif"],
                  a = [
                    "Andale Mono",
                    "Arial",
                    "Arial Black",
                    "Arial Hebrew",
                    "Arial MT",
                    "Arial Narrow",
                    "Arial Rounded MT Bold",
                    "Arial Unicode MS",
                    "Bitstream Vera Sans Mono",
                    "Book Antiqua",
                    "Bookman Old Style",
                    "Calibri",
                    "Cambria",
                    "Cambria Math",
                    "Century",
                    "Century Gothic",
                    "Century Schoolbook",
                    "Comic Sans",
                    "Comic Sans MS",
                    "Consolas",
                    "Courier",
                    "Courier New",
                    "Geneva",
                    "Georgia",
                    "Helvetica",
                    "Helvetica Neue",
                    "Impact",
                    "Lucida Bright",
                    "Lucida Calligraphy",
                    "Lucida Console",
                    "Lucida Fax",
                    "LUCIDA GRANDE",
                    "Lucida Handwriting",
                    "Lucida Sans",
                    "Lucida Sans Typewriter",
                    "Lucida Sans Unicode",
                    "Microsoft Sans Serif",
                    "Monaco",
                    "Monotype Corsiva",
                    "MS Gothic",
                    "MS Outlook",
                    "MS PGothic",
                    "MS Reference Sans Serif",
                    "MS Sans Serif",
                    "MS Serif",
                    "MYRIAD",
                    "MYRIAD PRO",
                    "Palatino",
                    "Palatino Linotype",
                    "Segoe Print",
                    "Segoe Script",
                    "Segoe UI",
                    "Segoe UI Light",
                    "Segoe UI Semibold",
                    "Segoe UI Symbol",
                    "Tahoma",
                    "Times",
                    "Times New Roman",
                    "Times New Roman PS",
                    "Trebuchet MS",
                    "Verdana",
                    "Wingdings",
                    "Wingdings 2",
                    "Wingdings 3",
                  ];
                n.fonts.extendedJsFonts &&
                  (a = a.concat([
                    "Abadi MT Condensed Light",
                    "Academy Engraved LET",
                    "ADOBE CASLON PRO",
                    "Adobe Garamond",
                    "ADOBE GARAMOND PRO",
                    "Agency FB",
                    "Aharoni",
                    "Albertus Extra Bold",
                    "Albertus Medium",
                    "Algerian",
                    "Amazone BT",
                    "American Typewriter",
                    "American Typewriter Condensed",
                    "AmerType Md BT",
                    "Andalus",
                    "Angsana New",
                    "AngsanaUPC",
                    "Antique Olive",
                    "Aparajita",
                    "Apple Chancery",
                    "Apple Color Emoji",
                    "Apple SD Gothic Neo",
                    "Arabic Typesetting",
                    "ARCHER",
                    "ARNO PRO",
                    "Arrus BT",
                    "Aurora Cn BT",
                    "AvantGarde Bk BT",
                    "AvantGarde Md BT",
                    "AVENIR",
                    "Ayuthaya",
                    "Bandy",
                    "Bangla Sangam MN",
                    "Bank Gothic",
                    "BankGothic Md BT",
                    "Baskerville",
                    "Baskerville Old Face",
                    "Batang",
                    "BatangChe",
                    "Bauer Bodoni",
                    "Bauhaus 93",
                    "Bazooka",
                    "Bell MT",
                    "Bembo",
                    "Benguiat Bk BT",
                    "Berlin Sans FB",
                    "Berlin Sans FB Demi",
                    "Bernard MT Condensed",
                    "BernhardFashion BT",
                    "BernhardMod BT",
                    "Big Caslon",
                    "BinnerD",
                    "Blackadder ITC",
                    "BlairMdITC TT",
                    "Bodoni 72",
                    "Bodoni 72 Oldstyle",
                    "Bodoni 72 Smallcaps",
                    "Bodoni MT",
                    "Bodoni MT Black",
                    "Bodoni MT Condensed",
                    "Bodoni MT Poster Compressed",
                    "Bookshelf Symbol 7",
                    "Boulder",
                    "Bradley Hand",
                    "Bradley Hand ITC",
                    "Bremen Bd BT",
                    "Britannic Bold",
                    "Broadway",
                    "Browallia New",
                    "BrowalliaUPC",
                    "Brush Script MT",
                    "Californian FB",
                    "Calisto MT",
                    "Calligrapher",
                    "Candara",
                    "CaslonOpnface BT",
                    "Castellar",
                    "Centaur",
                    "Cezanne",
                    "CG Omega",
                    "CG Times",
                    "Chalkboard",
                    "Chalkboard SE",
                    "Chalkduster",
                    "Charlesworth",
                    "Charter Bd BT",
                    "Charter BT",
                    "Chaucer",
                    "ChelthmITC Bk BT",
                    "Chiller",
                    "Clarendon",
                    "Clarendon Condensed",
                    "CloisterBlack BT",
                    "Cochin",
                    "Colonna MT",
                    "Constantia",
                    "Cooper Black",
                    "Copperplate",
                    "Copperplate Gothic",
                    "Copperplate Gothic Bold",
                    "Copperplate Gothic Light",
                    "CopperplGoth Bd BT",
                    "Corbel",
                    "Cordia New",
                    "CordiaUPC",
                    "Cornerstone",
                    "Coronet",
                    "Cuckoo",
                    "Curlz MT",
                    "DaunPenh",
                    "Dauphin",
                    "David",
                    "DB LCD Temp",
                    "DELICIOUS",
                    "Denmark",
                    "DFKai-SB",
                    "Didot",
                    "DilleniaUPC",
                    "DIN",
                    "DokChampa",
                    "Dotum",
                    "DotumChe",
                    "Ebrima",
                    "Edwardian Script ITC",
                    "Elephant",
                    "English 111 Vivace BT",
                    "Engravers MT",
                    "EngraversGothic BT",
                    "Eras Bold ITC",
                    "Eras Demi ITC",
                    "Eras Light ITC",
                    "Eras Medium ITC",
                    "EucrosiaUPC",
                    "Euphemia",
                    "Euphemia UCAS",
                    "EUROSTILE",
                    "Exotc350 Bd BT",
                    "FangSong",
                    "Felix Titling",
                    "Fixedsys",
                    "FONTIN",
                    "Footlight MT Light",
                    "Forte",
                    "FrankRuehl",
                    "Fransiscan",
                    "Freefrm721 Blk BT",
                    "FreesiaUPC",
                    "Freestyle Script",
                    "French Script MT",
                    "FrnkGothITC Bk BT",
                    "Fruitger",
                    "FRUTIGER",
                    "Futura",
                    "Futura Bk BT",
                    "Futura Lt BT",
                    "Futura Md BT",
                    "Futura ZBlk BT",
                    "FuturaBlack BT",
                    "Gabriola",
                    "Galliard BT",
                    "Gautami",
                    "Geeza Pro",
                    "Geometr231 BT",
                    "Geometr231 Hv BT",
                    "Geometr231 Lt BT",
                    "GeoSlab 703 Lt BT",
                    "GeoSlab 703 XBd BT",
                    "Gigi",
                    "Gill Sans",
                    "Gill Sans MT",
                    "Gill Sans MT Condensed",
                    "Gill Sans MT Ext Condensed Bold",
                    "Gill Sans Ultra Bold",
                    "Gill Sans Ultra Bold Condensed",
                    "Gisha",
                    "Gloucester MT Extra Condensed",
                    "GOTHAM",
                    "GOTHAM BOLD",
                    "Goudy Old Style",
                    "Goudy Stout",
                    "GoudyHandtooled BT",
                    "GoudyOLSt BT",
                    "Gujarati Sangam MN",
                    "Gulim",
                    "GulimChe",
                    "Gungsuh",
                    "GungsuhChe",
                    "Gurmukhi MN",
                    "Haettenschweiler",
                    "Harlow Solid Italic",
                    "Harrington",
                    "Heather",
                    "Heiti SC",
                    "Heiti TC",
                    "HELV",
                    "Herald",
                    "High Tower Text",
                    "Hiragino Kaku Gothic ProN",
                    "Hiragino Mincho ProN",
                    "Hoefler Text",
                    "Humanst 521 Cn BT",
                    "Humanst521 BT",
                    "Humanst521 Lt BT",
                    "Imprint MT Shadow",
                    "Incised901 Bd BT",
                    "Incised901 BT",
                    "Incised901 Lt BT",
                    "INCONSOLATA",
                    "Informal Roman",
                    "Informal011 BT",
                    "INTERSTATE",
                    "IrisUPC",
                    "Iskoola Pota",
                    "JasmineUPC",
                    "Jazz LET",
                    "Jenson",
                    "Jester",
                    "Jokerman",
                    "Juice ITC",
                    "Kabel Bk BT",
                    "Kabel Ult BT",
                    "Kailasa",
                    "KaiTi",
                    "Kalinga",
                    "Kannada Sangam MN",
                    "Kartika",
                    "Kaufmann Bd BT",
                    "Kaufmann BT",
                    "Khmer UI",
                    "KodchiangUPC",
                    "Kokila",
                    "Korinna BT",
                    "Kristen ITC",
                    "Krungthep",
                    "Kunstler Script",
                    "Lao UI",
                    "Latha",
                    "Leelawadee",
                    "Letter Gothic",
                    "Levenim MT",
                    "LilyUPC",
                    "Lithograph",
                    "Lithograph Light",
                    "Long Island",
                    "Lydian BT",
                    "Magneto",
                    "Maiandra GD",
                    "Malayalam Sangam MN",
                    "Malgun Gothic",
                    "Mangal",
                    "Marigold",
                    "Marion",
                    "Marker Felt",
                    "Market",
                    "Marlett",
                    "Matisse ITC",
                    "Matura MT Script Capitals",
                    "Meiryo",
                    "Meiryo UI",
                    "Microsoft Himalaya",
                    "Microsoft JhengHei",
                    "Microsoft New Tai Lue",
                    "Microsoft PhagsPa",
                    "Microsoft Tai Le",
                    "Microsoft Uighur",
                    "Microsoft YaHei",
                    "Microsoft Yi Baiti",
                    "MingLiU",
                    "MingLiU_HKSCS",
                    "MingLiU_HKSCS-ExtB",
                    "MingLiU-ExtB",
                    "Minion",
                    "Minion Pro",
                    "Miriam",
                    "Miriam Fixed",
                    "Mistral",
                    "Modern",
                    "Modern No. 20",
                    "Mona Lisa Solid ITC TT",
                    "Mongolian Baiti",
                    "MONO",
                    "MoolBoran",
                    "Mrs Eaves",
                    "MS LineDraw",
                    "MS Mincho",
                    "MS PMincho",
                    "MS Reference Specialty",
                    "MS UI Gothic",
                    "MT Extra",
                    "MUSEO",
                    "MV Boli",
                    "Nadeem",
                    "Narkisim",
                    "NEVIS",
                    "News Gothic",
                    "News GothicMT",
                    "NewsGoth BT",
                    "Niagara Engraved",
                    "Niagara Solid",
                    "Noteworthy",
                    "NSimSun",
                    "Nyala",
                    "OCR A Extended",
                    "Old Century",
                    "Old English Text MT",
                    "Onyx",
                    "Onyx BT",
                    "OPTIMA",
                    "Oriya Sangam MN",
                    "OSAKA",
                    "OzHandicraft BT",
                    "Palace Script MT",
                    "Papyrus",
                    "Parchment",
                    "Party LET",
                    "Pegasus",
                    "Perpetua",
                    "Perpetua Titling MT",
                    "PetitaBold",
                    "Pickwick",
                    "Plantagenet Cherokee",
                    "Playbill",
                    "PMingLiU",
                    "PMingLiU-ExtB",
                    "Poor Richard",
                    "Poster",
                    "PosterBodoni BT",
                    "PRINCETOWN LET",
                    "Pristina",
                    "PTBarnum BT",
                    "Pythagoras",
                    "Raavi",
                    "Rage Italic",
                    "Ravie",
                    "Ribbon131 Bd BT",
                    "Rockwell",
                    "Rockwell Condensed",
                    "Rockwell Extra Bold",
                    "Rod",
                    "Roman",
                    "Sakkal Majalla",
                    "Santa Fe LET",
                    "Savoye LET",
                    "Sceptre",
                    "Script",
                    "Script MT Bold",
                    "SCRIPTINA",
                    "Serifa",
                    "Serifa BT",
                    "Serifa Th BT",
                    "ShelleyVolante BT",
                    "Sherwood",
                    "Shonar Bangla",
                    "Showcard Gothic",
                    "Shruti",
                    "Signboard",
                    "SILKSCREEN",
                    "SimHei",
                    "Simplified Arabic",
                    "Simplified Arabic Fixed",
                    "SimSun",
                    "SimSun-ExtB",
                    "Sinhala Sangam MN",
                    "Sketch Rockwell",
                    "Skia",
                    "Small Fonts",
                    "Snap ITC",
                    "Snell Roundhand",
                    "Socket",
                    "Souvenir Lt BT",
                    "Staccato222 BT",
                    "Steamer",
                    "Stencil",
                    "Storybook",
                    "Styllo",
                    "Subway",
                    "Swis721 BlkEx BT",
                    "Swiss911 XCm BT",
                    "Sylfaen",
                    "Synchro LET",
                    "System",
                    "Tamil Sangam MN",
                    "Technical",
                    "Teletype",
                    "Telugu Sangam MN",
                    "Tempus Sans ITC",
                    "Terminal",
                    "Thonburi",
                    "Traditional Arabic",
                    "Trajan",
                    "TRAJAN PRO",
                    "Tristan",
                    "Tubular",
                    "Tunga",
                    "Tw Cen MT",
                    "Tw Cen MT Condensed",
                    "Tw Cen MT Condensed Extra Bold",
                    "TypoUpright BT",
                    "Unicorn",
                    "Univers",
                    "Univers CE 55 Medium",
                    "Univers Condensed",
                    "Utsaah",
                    "Vagabond",
                    "Vani",
                    "Vijaya",
                    "Viner Hand ITC",
                    "VisualUI",
                    "Vivaldi",
                    "Vladimir Script",
                    "Vrinda",
                    "Westminster",
                    "WHITNEY",
                    "Wide Latin",
                    "ZapfEllipt BT",
                    "ZapfHumnst BT",
                    "ZapfHumnst Dm BT",
                    "Zapfino",
                    "Zurich BlkEx BT",
                    "Zurich Ex BT",
                    "ZWAdobeF",
                  ])),
                  (a = (a = a.concat(n.fonts.userDefinedFonts)).filter(function (e, n) {
                    return a.indexOf(e) === n;
                  }));
                var r = document.getElementsByTagName("body")[0],
                  i = document.createElement("div"),
                  o = document.createElement("div"),
                  l = {},
                  s = {},
                  c = function () {
                    var e = document.createElement("span");
                    return (
                      (e.style.position = "absolute"),
                      (e.style.left = "-9999px"),
                      (e.style.fontSize = "72px"),
                      (e.style.fontStyle = "normal"),
                      (e.style.fontWeight = "normal"),
                      (e.style.letterSpacing = "normal"),
                      (e.style.lineBreak = "auto"),
                      (e.style.lineHeight = "normal"),
                      (e.style.textTransform = "none"),
                      (e.style.textAlign = "left"),
                      (e.style.textDecoration = "none"),
                      (e.style.textShadow = "none"),
                      (e.style.whiteSpace = "normal"),
                      (e.style.wordBreak = "normal"),
                      (e.style.wordSpacing = "normal"),
                      (e.innerHTML = "mmmmmmmmmmlli"),
                      e
                    );
                  },
                  u = function (e, n) {
                    var t = c();
                    return (t.style.fontFamily = "'" + e + "'," + n), t;
                  },
                  d = function (e) {
                    for (var n = !1, a = 0; a < t.length; a++)
                      if ((n = e[a].offsetWidth !== l[t[a]] || e[a].offsetHeight !== s[t[a]])) return n;
                    return n;
                  },
                  f = (function () {
                    for (var e = [], n = 0, a = t.length; n < a; n++) {
                      var r = c();
                      (r.style.fontFamily = t[n]), i.appendChild(r), e.push(r);
                    }
                    return e;
                  })();
                r.appendChild(i);
                for (var g = 0, h = t.length; g < h; g++) (l[t[g]] = f[g].offsetWidth), (s[t[g]] = f[g].offsetHeight);
                var m = (function () {
                  for (var e = {}, n = 0, r = a.length; n < r; n++) {
                    for (var i = [], l = 0, s = t.length; l < s; l++) {
                      var c = u(a[n], t[l]);
                      o.appendChild(c), i.push(c);
                    }
                    e[a[n]] = i;
                  }
                  return e;
                })();
                r.appendChild(o);
                for (var p = [], T = 0, v = a.length; T < v; T++) d(m[a[T]]) && p.push(a[T]);
                r.removeChild(o), r.removeChild(i), e(p);
              },
              pauseBefore: !0,
            },
            {
              key: "fontsFlash",
              getData: function (e, n) {
                return N()
                  ? _()
                    ? n.fonts.swfPath
                      ? void F(function (n) {
                          e(n);
                        }, n)
                      : e("missing options.fonts.swfPath")
                    : e("flash not installed")
                  : e("swf object not loaded");
              },
              pauseBefore: !0,
            },
            {
              key: "audio",
              getData: function (e, n) {
                var t = n.audio;
                if (t.excludeIOS11 && navigator.userAgent.match(/OS 11.+Version\/11.+Safari/)) return e(n.EXCLUDED);
                var a = window.OfflineAudioContext || window.webkitOfflineAudioContext;
                if (null == a) return e(n.NOT_AVAILABLE);
                var r = new a(1, 44100, 44100),
                  i = r.createOscillator();
                (i.type = "triangle"), i.frequency.setValueAtTime(1e4, r.currentTime);
                var o = r.createDynamicsCompressor();
                s(
                  [
                    ["threshold", -50],
                    ["knee", 40],
                    ["ratio", 12],
                    ["reduction", -20],
                    ["attack", 0],
                    ["release", 0.25],
                  ],
                  function (e) {
                    void 0 !== o[e[0]] &&
                      "function" == typeof o[e[0]].setValueAtTime &&
                      o[e[0]].setValueAtTime(e[1], r.currentTime);
                  },
                ),
                  i.connect(o),
                  o.connect(r.destination),
                  i.start(0),
                  r.startRendering();
                var l = setTimeout(function () {
                  return (
                    console.warn(
                      'Audio fingerprint timed out. Please report bug at https://github.com/fingerprintjs/fingerprintjs with your user agent: "' +
                        navigator.userAgent +
                        '".',
                    ),
                    (r.oncomplete = function () {}),
                    (r = null),
                    e("audioTimeout")
                  );
                }, t.timeout);
                r.oncomplete = function (n) {
                  var t;
                  try {
                    clearTimeout(l),
                      (t = n.renderedBuffer
                        .getChannelData(0)
                        .slice(4500, 5e3)
                        .reduce(function (e, n) {
                          return e + Math.abs(n);
                        }, 0)
                        .toString()),
                      i.disconnect(),
                      o.disconnect();
                  } catch (n) {
                    return void e(n);
                  }
                  e(t);
                };
              },
            },
            {
              key: "enumerateDevices",
              getData: function (e, n) {
                if (!u()) return e(n.NOT_AVAILABLE);
                navigator.mediaDevices
                  .enumerateDevices()
                  .then(function (n) {
                    e(
                      n.map(function (e) {
                        return "id=" + e.deviceId + ";gid=" + e.groupId + ";" + e.kind + ";" + e.label;
                      }),
                    );
                  })
                  .catch(function (n) {
                    e(n);
                  });
              },
            },
          ],
          H = function (e) {
            throw new Error(
              "'new Fingerprint()' is deprecated, see https://github.com/fingerprintjs/fingerprintjs#upgrade-guide-from-182-to-200",
            );
          };
        return (
          (H.get = function (e, n) {
            n ? e || (e = {}) : ((n = e), (e = {})),
              (function (e, n) {
                if (null == n) return e;
                var t, a;
                for (a in n) null == (t = n[a]) || Object.prototype.hasOwnProperty.call(e, a) || (e[a] = t);
              })(e, l),
              (e.components = e.extraComponents.concat(V));
            var t = {
                data: [],
                addPreprocessedComponent: function (n, a) {
                  "function" == typeof e.preprocessor && (a = e.preprocessor(n, a)), t.data.push({ key: n, value: a });
                },
              },
              a = -1,
              r = function (i) {
                if ((a += 1) >= e.components.length) n(t.data);
                else {
                  var o = e.components[a];
                  if (e.excludes[o.key]) r(!1);
                  else {
                    if (!i && o.pauseBefore)
                      return (
                        (a -= 1),
                        void setTimeout(function () {
                          r(!0);
                        }, 1)
                      );
                    try {
                      o.getData(function (e) {
                        t.addPreprocessedComponent(o.key, e), r(!1);
                      }, e);
                    } catch (e) {
                      t.addPreprocessedComponent(o.key, String(e)), r(!1);
                    }
                  }
                }
              };
            r(!1);
          }),
          (H.getPromise = function (e) {
            return new Promise(function (n, t) {
              H.get(e, n);
            });
          }),
          (H.getV18 = function (e, n) {
            return (
              null == n && ((n = e), (e = {})),
              H.get(e, function (t) {
                for (var a = [], r = 0; r < t.length; r++) {
                  var i = t[r];
                  if (i.value === (e.NOT_AVAILABLE || "not available")) a.push({ key: i.key, value: "unknown" });
                  else if ("plugins" === i.key)
                    a.push({
                      key: "plugins",
                      value: c(i.value, function (e) {
                        var n = c(e[2], function (e) {
                          return e.join ? e.join("~") : e;
                        }).join(",");
                        return [e[0], e[1], n].join("::");
                      }),
                    });
                  else if (-1 !== ["canvas", "webgl"].indexOf(i.key) && Array.isArray(i.value))
                    a.push({ key: i.key, value: i.value.join("~") });
                  else if (
                    -1 !== ["sessionStorage", "localStorage", "indexedDb", "addBehavior", "openDatabase"].indexOf(i.key)
                  ) {
                    if (!i.value) continue;
                    a.push({ key: i.key, value: 1 });
                  } else
                    i.value
                      ? a.push(i.value.join ? { key: i.key, value: i.value.join(";") } : i)
                      : a.push({ key: i.key, value: i.value });
                }
                var l = o(
                  c(a, function (e) {
                    return e.value;
                  }).join("~~~"),
                  31,
                );
                n(l, a);
              })
            );
          }),
          (H.x64hash128 = o),
          (H.VERSION = "2.1.4"),
          H
        );
      }),
      "undefined" != typeof window && "function" == typeof define && define.amd
        ? define(a)
        : e.exports
        ? (e.exports = a())
        : t.exports
        ? (t.exports = a())
        : (t.Fingerprint2 = a());
  }),
  (window.Fingerprint2_new = a("b4lJi"));
//# sourceMappingURL=fp2.2a1fe8b7.js.map
