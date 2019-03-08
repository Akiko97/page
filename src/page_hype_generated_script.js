//	HYPE.documents["page"]

(function() {
  (function k() {
    function l(a, b, d) {
      var c = !1;
      null == window[a] && (null == window[b] ? (window[b] = [], window[b].push(k), a = document.getElementsByTagName("head")[0], b = document.createElement("script"), c = h, false == !0 && (c = ""), b.type = "text/javascript", b.src = c + "/" + d, a.appendChild(b)) : window[b].push(k), c = !0);
      return c
    }
    var h = "page.hyperesources",
      c = "page",
      e = "page_hype_container";
    if (false == !1) try {
      for (var f = document.getElementsByTagName("script"),
          a = 0; a < f.length; a++) {
        var b = f[a].src,
          d = null != b ? b.indexOf("/page_hype_generated_script.js") : -1;
        if (-1 != d) {
          h = b.substr(0, d);
          break
        }
      }
    } catch (n) {}
    if (false == !1 && (a = navigator.userAgent.match(/MSIE (\d+\.\d+)/), a = parseFloat(a && a[1]) || null, a = l("HYPE_596", "HYPE_dtl_596", !0 == (null != a && 10 > a || false == !0) ? "HYPE-596.full.min.js" : "HYPE-596.thin.min.js"), false == !0 && (a = a || l("HYPE_w_596", "HYPE_wdtl_596", "HYPE-596.waypoints.min.js")), a)) return;
    f = window.HYPE.documents;
    if (null != f[c]) {
      b = 1;
      a = c;
      do c = "" + a + "-" + b++; while (null != f[c]);
      d = document.getElementsByTagName("div");
      b = !1;
      for (a = 0; a < d.length; a++)
        if (d[a].id == e && null == d[a].getAttribute("HYP_dn")) {
          var b = 1,
            g = e;
          do e = "" + g + "-" + b++; while (null != document.getElementById(e));
          d[a].id = e;
          b = !0;
          break
        } if (!1 == b) return
    }
    b = [];
    b = [];
    d = {};
    g = {};
    for (a = 0; a < b.length; a++) try {
      g[b[a].identifier] = b[a].name, d[b[a].name] = eval("(function(){return " + b[a].source + "})();")
    } catch (m) {
      window.console && window.console.log(m), d[b[a].name] =
        function() {}
    }
    a = new HYPE_596(c, e, {
      "-1": {
        n: "PIE.htc"
      },
      "-2": {
        n: "blank.gif"
      }
    }, h, [], d, [{
      n: "\u672a\u547d\u540d\u573a\u666f",
      o: "1",
      X: [0]
    }], [{
      o: "3",
      p: "600px",
      cA: false,
      Y: 600,
      Z: 400,
      L: [],
      c: "#FFFFFF",
      bY: 1,
      d: 600,
      U: {},
      T: {
        "5_hover": {
          i: "5_hover",
          n: "5_hover",
          z: 1,
          b: [],
          a: [{
            f: "c",
            y: 0,
            z: 1,
            i: "g",
            e: "#F2EFF3",
            s: "#D4D2D5",
            o: "17"
          }, {
            y: 1,
            i: "g",
            s: "#F2EFF3",
            z: 0,
            o: "17",
            f: "c"
          }],
          f: 30
        },
        "5_pressed": {
          i: "5_pressed",
          n: "5_pressed",
          z: 1,
          b: [],
          a: [{
            f: "c",
            y: 0,
            z: 1,
            i: "b",
            e: 309,
            s: 305,
            o: "17"
          }, {
            y: 1,
            i: "b",
            s: 309,
            z: 0,
            o: "17",
            f: "c"
          }],
          f: 30
        },
        "13": {
          i: "13",
          n: "new",
          z: 15,
          b: [],
          a: [{
            f: "c",
            y: 0,
            z: 6,
            i: "b",
            e: 106,
            s: 183,
            o: "16"
          }, {
            f: "c",
            y: 0,
            z: 6,
            i: "a",
            e: 206,
            s: 283,
            o: "16"
          }, {
            f: "c",
            y: 0,
            z: 6,
            i: "c",
            e: 185,
            s: 32,
            o: "16"
          }, {
            f: "c",
            y: 0,
            z: 6,
            i: "d",
            e: 185,
            s: 32,
            o: "16"
          }, {
            f: "c",
            y: 0,
            z: 2,
            i: "b",
            e: 355,
            s: 185,
            o: "18"
          }, {
            f: "c",
            y: 0,
            z: 2,
            i: "a",
            e: 16,
            s: 285,
            o: "18"
          }, {
            f: "c",
            y: 0,
            z: 12.2,
            i: "e",
            e: 0,
            s: 0,
            o: "19"
          }, {
            f: "c",
            y: 2,
            z: 1,
            i: "b",
            e: 355,
            s: 355,
            o: "18"
          }, {
            f: "c",
            y: 2,
            z: 1,
            i: "a",
            e: 555,
            s: 16,
            o: "18"
          }, {
            f: "c",
            y: 3,
            z: 2,
            i: "b",
            e: 185,
            s: 355,
            o: "18"
          }, {
            f: "c",
            y: 3,
            z: 2,
            i: "a",
            e: 285,
            s: 555,
            o: "18"
          }, {
            f: "c",
            y: 5,
            z: 1,
            i: "c",
            e: 185,
            s: 27,
            o: "18"
          }, {
            f: "c",
            y: 5,
            z: 1,
            i: "d",
            e: 185,
            s: 27,
            o: "18"
          }, {
            f: "c",
            y: 5,
            z: 1,
            i: "b",
            e: 106,
            s: 185,
            o: "18"
          }, {
            f: "c",
            y: 5,
            z: 1,
            i: "a",
            e: 206,
            s: 285,
            o: "18"
          }, {
            f: "c",
            p: 2,
            y: 6,
            z: 9,
            i: "ActionHandler",
            e: {
              a: [{
                p: 7,
                b: "13",
                symbolOid: "2"
              }]
            },
            s: {
              a: [{
                p: 7,
                b: "13",
                symbolOid: "2"
              }]
            },
            o: "13"
          }, {
            f: "c",
            y: 6,
            z: 6,
            i: "b",
            e: 214,
            s: 106,
            o: "16"
          }, {
            f: "c",
            y: 6,
            z: 6,
            i: "a",
            e: 279,
            s: 206,
            o: "16"
          }, {
            f: "c",
            y: 6,
            z: 6,
            i: "c",
            e: 40,
            s: 185,
            o: "16"
          }, {
            f: "c",
            y: 6,
            z: 6,
            i: "d",
            e: 40,
            s: 185,
            o: "16"
          }, {
            f: "c",
            y: 6,
            z: 1,
            i: "c",
            e: 27,
            s: 185,
            o: "18"
          }, {
            f: "c",
            y: 6,
            z: 1,
            i: "d",
            e: 27,
            s: 185,
            o: "18"
          }, {
            f: "c",
            y: 6,
            z: 1,
            i: "b",
            e: 185,
            s: 106,
            o: "18"
          }, {
            f: "c",
            y: 6,
            z: 1,
            i: "a",
            e: 285,
            s: 206,
            o: "18"
          }, {
            y: 7,
            i: "c",
            s: 27,
            z: 0,
            o: "18",
            f: "c"
          }, {
            y: 7,
            i: "d",
            s: 27,
            z: 0,
            o: "18",
            f: "c"
          }, {
            f: "c",
            y: 7,
            z: 2,
            i: "b",
            e: 355,
            s: 185,
            o: "18"
          }, {
            f: "c",
            y: 7,
            z: 2,
            i: "a",
            e: 16,
            s: 285,
            o: "18"
          }, {
            f: "c",
            y: 9,
            z: 2,
            i: "b",
            e: 355,
            s: 355,
            o: "18"
          }, {
            f: "c",
            y: 9,
            z: 2,
            i: "a",
            e: 555,
            s: 16,
            o: "18"
          }, {
            f: "c",
            y: 11,
            z: 1,
            i: "b",
            e: 185,
            s: 355,
            o: "18"
          }, {
            f: "c",
            y: 11,
            z: 1,
            i: "a",
            e: 285,
            s: 555,
            o: "18"
          }, {
            f: "c",
            y: 12,
            z: 1,
            i: "e",
            e: 0,
            s: 1,
            o: "18"
          }, {
            f: "c",
            y: 12,
            z: 1,
            i: "e",
            e: 0,
            s: 1,
            o: "16"
          }, {
            y: 12,
            i: "b",
            s: 214,
            z: 0,
            o: "16",
            f: "c"
          }, {
            y: 12,
            i: "a",
            s: 279,
            z: 0,
            o: "16",
            f: "c"
          }, {
            y: 12,
            i: "c",
            s: 40,
            z: 0,
            o: "16",
            f: "c"
          }, {
            y: 12,
            i: "d",
            s: 40,
            z: 0,
            o: "16",
            f: "c"
          }, {
            y: 12,
            i: "b",
            s: 185,
            z: 0,
            o: "18",
            f: "c"
          }, {
            y: 12,
            i: "a",
            s: 285,
            z: 0,
            o: "18",
            f: "c"
          }, {
            f: "c",
            y: 12.2,
            z: 2.1,
            i: "e",
            e: 1,
            s: 0,
            o: "19"
          }, {
            y: 13,
            i: "e",
            s: 0,
            z: 0,
            o: "18",
            f: "c"
          }, {
            y: 13,
            i: "e",
            s: 0,
            z: 0,
            o: "16",
            f: "c"
          }, {
            f: "c",
            p: 2,
            y: 15,
            z: 0,
            i: "ActionHandler",
            s: {
              a: [{
                p: 7,
                b: "13",
                symbolOid: "2"
              }]
            },
            o: "13"
          }, {
            y: 15,
            i: "e",
            s: 1,
            z: 0,
            o: "19",
            f: "c"
          }],
          f: 30
        },
        kTimelineDefaultIdentifier: {
          i: "kTimelineDefaultIdentifier",
          n: "\u4e3b\u65f6\u95f4\u7ebf",
          z: 0,
          b: [],
          a: [{
            f: "c",
            p: 2,
            y: 0,
            z: 0,
            i: "ActionHandler",
            e: {
              a: [{}]
            },
            s: {
              a: [{
                p: 7,
                b: "kTimelineDefaultIdentifier",
                symbolOid: "2"
              }]
            },
            o: "kTimelineDefaultIdentifier"
          }, {
            y: 0,
            i: "e",
            s: 0,
            z: 0,
            o: "19",
            f: "c"
          }, {
            f: "c",
            p: 2,
            y: 0,
            z: 0,
            i: "ActionHandler",
            s: {
              a: [{
                p: 7,
                b: "13",
                symbolOid: "2"
              }]
            },
            o: "kTimelineDefaultIdentifier"
          }],
          f: 30
        }
      },
      bZ: 180,
      O: ["19", "16", "18", "17"],
      n: "\u672a\u547d\u540d\u5e03\u5c40",
      "_": 0,
      v: {
        "17": {
          b: 305,
          z: 1,
          K: "Solid",
          c: 90,
          J: "Solid",
          L: "Solid",
          d: 15,
          aS: 6,
          M: 1,
          bD: "none",
          N: 1,
          aT: 6,
          dB: "button",
          O: 1,
          g: "#D4D2D5",
          aU: 6,
          P: 1,
          aV: 6,
          j: "absolute",
          k: "div",
          aI: 4,
          aJ: 4,
          aK: 4,
          aL: 4,
          A: "#A0A0A0",
          B: "#A0A0A0",
          aM: "5_hover",
          Z: "break-word",
          C: "#A0A0A0",
          r: "inline",
          D: "#A0A0A0",
          aN: "5_pressed",
          t: 13,
          aA: {
            a: [{
              b: "13",
              p: 8,
              z: false,
              symbolOid: "2",
              J: true
            }]
          },
          F: "center",
          G: "#000000",
          aP: "pointer",
          w: "PUSH<br>",
          x: "visible",
          I: "Solid",
          a: 248,
          y: "preserve",
          cN: "auto"
        },
        "16": {
          b: 183,
          c: 32,
          d: 32,
          I: "Solid",
          cQ: 1,
          e: 1,
          J: "Solid",
          bD: "auto",
          K: "Solid",
          cR: 1,
          g: "#E8EBED",
          L: "Solid",
          M: 1,
          w: "",
          aI: 10,
          N: 1,
          O: 1,
          A: "#D8DDE4",
          x: "visible",
          aJ: 10,
          j: "absolute",
          C: "#D8DDE4",
          z: 2,
          k: "div",
          D: "#D8DDE4",
          aK: 10,
          B: "#D8DDE4",
          tX: 0.5,
          P: 1,
          a: 283,
          aL: 10,
          tY: 0.5
        },
        "19": {
          G: "#B692ED",
          aU: 8,
          c: 252,
          aV: 8,
          d: 60,
          cY: "0",
          e: 0,
          s: "'Andale Mono',Monaco,Monospace",
          r: "inline",
          t: 36,
          Z: "break-word",
          w: "PUSH AGAIN!<br>",
          j: "absolute",
          x: "visible",
          k: "div",
          y: "preserve",
          z: 4,
          aS: 8,
          aT: 8,
          a: 166,
          b: 176
        },
        "18": {
          P: 1,
          c: 27,
          d: 27,
          I: "Solid",
          cQ: 1,
          e: 1,
          J: "Solid",
          K: "Solid",
          cR: 1,
          L: "Solid",
          M: 1,
          w: "",
          aI: "50%",
          N: 1,
          O: 1,
          A: "#D8DDE4",
          x: "visible",
          aJ: "50%",
          j: "absolute",
          C: "#D8DDE4",
          z: 3,
          l: 0,
          D: "#D8DDE4",
          aK: "50%",
          m: "#E2CFB8",
          n: "#BFDBEF",
          k: "div",
          a: 285,
          aL: "50%",
          B: "#D8DDE4",
          b: 185
        }
      }
    }], {}, g, {}, null, false, true, -1, true, true, false, true);
    f[c] = a.API;
    document.getElementById(e).setAttribute("HYP_dn",
      c);
    a.z_o(this.body)
  })();
})();
