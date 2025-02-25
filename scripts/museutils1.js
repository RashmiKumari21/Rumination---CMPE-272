/*
 Copyright 2011-2016 Adobe Systems Incorporated. All Rights Reserved.
*/
(function (c) {
  "function" === typeof define && define.amd && define.amd.jQuery
    ? define(["jquery"], c)
    : c(jQuery);
})(function (c) {
  var b = c;
  if (typeof Muse == "undefined") window.Muse = {};
  Muse.Assert = {};
  Muse.Assert.fail = function (a) {
    alert("JavaScript exception: " + a);
  };
  Muse.Assert.assert = function (a, b) {
    if (!a) throw Error(b);
  };
  c.extend(c.browser, {
    SafariMobile: navigator.userAgent.toLowerCase().match(/iP(hone|ad|od)/i),
  });
  if (!Array.indexOf)
    Array.prototype.indexOf = function (a) {
      for (var b = 0; b < this.length; ++b) if (this[b] == a) return b;
      return -1;
    };
  Muse.Plugins = {};
  Muse.Utils = {};
  Muse.Utils.getCssVendorPrefix = function () {
    if (!Muse.Utils.isDefined(Muse.Utils.getCssVendorPrefix.flag))
      Muse.Utils.getCssVendorPrefix.flag = /webkit/i.test(navigator.appVersion)
        ? "-webkit"
        : /firefox/i.test(navigator.userAgent)
        ? "-moz"
        : /trident/i.test(navigator.userAgent)
        ? "-ms"
        : "opera" in window
        ? "-o"
        : "";
    return Muse.Utils.getCssVendorPrefix.flag;
  };
  Muse.Utils.marginLeftForMovingElementsOutSideViewPort = "-10000px";
  Muse.Utils.wrapElement = function (a, b) {
    a.parentNode.replaceChild(b, a);
    b.appendChild(a);
  };
  Muse.Utils.firstChild = function (a, b) {
    for (var c = 0; c < a.childNodes.length; c++) {
      var d = a.childNodes[c];
      if (d.nodeType == 1 && (!b || b.matches(d))) return d;
    }
    return null;
  };
  Muse.Utils.firstDescendant = function (a, b, c) {
    for (var d = 0; d < a.childNodes.length; d++) {
      var i = a.childNodes[d];
      if (i.nodeType == 1) {
        if (!b || b.matches(i)) return i;
        if (!c || !c.matches(i))
          if ((i = Muse.Utils.firstDescendant(i, b, c))) return i;
      }
    }
    return null;
  };
  Muse.Utils.descendants = function (a, b, c, d) {
    if (!d)
      (d = []),
        (d.forEach = function (a) {
          for (var b = 0; b < this.length; b++) if (a(this[b])) break;
        }),
        (d.forEachTry = function (a) {
          for (var b = 0; b < this.length; b++)
            try {
              if (a(this[b])) break;
            } catch (f) {}
        });
    for (var i = 0; i < a.childNodes.length; i++) {
      var l = a.childNodes[i];
      l.nodeType == 1 &&
        ((!b || b.matches(l)) && d.push(l),
        (!c || !c.matches(l)) && Muse.Utils.descendants(l, b, c, d));
    }
    return d;
  };
  Muse.Utils.children = function (a, b) {
    return Muse.Utils.descendants(a, b, Muse.Utils.Match.always);
  };
  Muse.Utils.Match = {};
  Muse.Utils.Match.ByClass = function (a) {
    this.cl = a;
  };
  Muse.Utils.Match.ByClass.prototype.matches = function (a) {
    return c(a).hasClass(this.cl);
  };
  Muse.Utils.Match.ByNodeName = function (a) {
    this.nm = a.toLowerCase();
  };
  Muse.Utils.Match.ByNodeName.prototype.matches = function (a) {
    return this.nm == a.nodeName.toLowerCase();
  };
  Muse.Utils.Match.ByFixed = function (a) {
    this.matchResult = a;
  };
  Muse.Utils.Match.ByFixed.prototype.matches = function () {
    return this.matchResult;
  };
  Muse.Utils.Match.byClass = function (a) {
    return new Muse.Utils.Match.ByClass(a);
  };
  Muse.Utils.Match.byNodeName = function (a) {
    return new Muse.Utils.Match.ByNodeName(a);
  };
  Muse.Utils.Match.byFixed = function (a) {
    return new Muse.Utils.Match.ByFixed(a);
  };
  Muse.Utils.Match.always = Muse.Utils.Match.byFixed(!0);
  Muse.Utils.Match.never = Muse.Utils.Match.byFixed(!1);
  Muse.Utils.appendChildren = function (a, b) {
    if (
      a.length &&
      b.length &&
      b.find(".fld-grp[data-type = 'recaptcha2']").length
    )
      for (var c = 0; c < a.length; c++)
        for (var d = 0; d < b.length; d++) a[c].appendChild(b[d]);
    else a.append(b);
  };
  Muse.Utils.moveChildren = function (a, b) {
    for (; a.childNodes.length > 0; ) b.appendChild(a.childNodes[0]);
  };
  Muse.Utils.copyChildren = function (a, b) {
    for (var c = 0; c < a.childNodes.length; c++)
      b.appendChild(a.childNodes[c].cloneNode(!0));
  };
  Muse.Utils.copyChildrenBefore = function (a, b) {
    for (var c = 0; c < a.childNodes.length; c++)
      b.parentNode.insertBefore(a.childNodes[c].cloneNode(!0), b);
  };
  Muse.Utils.pixelRound = function (a) {
    return Math.floor((a * 100 + 0.5) / 100);
  };
  Muse.Utils.getCurrentHTMLFileName = function (a) {
    var b = document.location.href;
    b.charAt(b.length - 1) == "/"
      ? (b = "index")
      : ((b = b.substring(b.lastIndexOf("/") + 1)),
        (b =
          b.indexOf("#") == 0 ? "index" : b.substring(0, b.lastIndexOf("."))));
    a && (b += ".html");
    return b;
  };
  Muse.Utils.getPageStyleSheets = function () {
    for (var a = [], b = 0; b < document.styleSheets.length; ++b) {
      var c = document.styleSheets[b],
        d = c.ownerNode ? c.ownerNode : c.owningElement;
      d && (d.id == "pagesheet" || d.id == "nomq_pagesheet") && a.push(c);
    }
    return a;
  };
  Muse.Utils.getStyleSheetRulesById = function (a, b) {
    if (b) {
      var c = "#" + b.toLowerCase();
      return Muse.Utils.allStyleSheetRules(a, function (a) {
        return a.toLowerCase() == c;
      });
    }
    return "";
  };
  Muse.Utils.allStyleSheetRules = function (a, b) {
    for (var c = [], d = 0; d < a.length; d++) {
      var i = Muse.Utils.allStyleSheetRulesFromOneSheet(a[d], b);
      i && (c = c.concat(i));
    }
    return c.length ? c : null;
  };
  Muse.Utils.allStyleSheetRulesFromOneSheet = function (a, b) {
    var d = !1,
      g;
    try {
      g = a.cssRules;
    } catch (i) {}
    if (!g) {
      d = !0;
      try {
        g = a.rules;
      } catch (l) {}
    }
    if (!g) return null;
    for (
      var k = [],
        j = c(window),
        m = function (a) {
          if (4 != a.type) return !1;
          if (1 != a.media.length) {
            for (var b = 0, c = 0; c < a.media.length; c++) {
              var f = null,
                f =
                  "function" == typeof a.media.item
                    ? a.media.item(c)
                    : a.media[c];
              "print" != f && b++;
            }
            if (1 < b) return !1;
          }
          b = j.data("muse-mq");
          if (!b) return !1;
          for (c = 0; c < a.media.length; c++) if (a.media[c] == b) return !0;
          if (
            a.media.mediaText &&
            0 <= a.media.mediaText.indexOf(b.replace(/\s/g, ""))
          )
            return !0;
          if (
            a.media.mediaText &&
            ((a = a.media.mediaText
              .replace(/\sand\s/g, "__and__")
              .replace(/\s/g, "")
              .split("__and__")),
            (c = b
              .replace(/\sand\s/g, "__and__")
              .replace(/\s/g, "")
              .split("__and__")),
            a && a.sort && c && c.sort)
          ) {
            "all" == a[0] && a.splice(0, 1);
            a.sort();
            c.sort();
            if (a.length != c.length) return !1;
            for (b = 0; b < a.length; b++) if (a[b] != c[b]) return !1;
            return !0;
          }
          return !1;
        },
        n = 0;
      n < g.length;
      ++n
    ) {
      var p = g[n];
      if (m(p)) {
        if (((p = Muse.Utils.allStyleSheetRulesFromOneSheet(p, b)), null != p))
          for (var o = 0; o < p.length; o++) k.push(p[o]);
      } else if (Muse.Utils.isDefined(p.selectorText))
        if (d) b(p.selectorText) && k.push(p);
        else
          for (
            var o = p.selectorText.split(/\s*,\s*/), q = 0;
            q < o.length;
            q++
          )
            b(o[q]) && k.push(p);
    }
    return k.length ? k : null;
  };
  Muse.Utils.getRuleProperty = function (a, b) {
    if (a && a.length) {
      for (var c = a.length - 1; c >= 0; c--) {
        var d = Muse.Utils.getRuleProperty(a[c], b);
        if (d) return d;
      }
      return "";
    }
    if (a.style.getPropertyValue) return a.style.getPropertyValue(b);
    return a.style.getAttribute(b);
  };
  Muse.Utils.toCamelCase = function (a) {
    for (
      var b = Muse.Utils.toCamelCase.exp;
      b.test(a);
      a = a.replace(b, RegExp.$1.toUpperCase())
    );
    return a;
  };
  Muse.Utils.toCamelCase.exp = /-([a-z])/;
  Muse.Utils.getStyleValue = function (a, b) {
    var c = a.style[Muse.Utils.toCamelCase(b)];
    c ||
      (document.defaultView
        ? (c = document.defaultView.getComputedStyle(a, "").getPropertyValue(b))
        : a.currentStyle && (c = a.currentStyle[Muse.Utils.toCamelCase(b)]));
    c && c.match(/(\d+)px/) && (c = parseInt(c.substring(0, c.length - 2)));
    return c;
  };
  Muse.Utils.getCanvasDirection = function (a, b) {
    var c = a.closest("*[data-rotate]"),
      c = c.length > 0 ? parseFloat(c.data("rotate")) % 360 : 0;
    return {
      dir:
        (c >= 0 && c <= 45) || (c >= 135 && c <= 225) || (c >= 315 && c < 360)
          ? b
          : b === "horizontal"
          ? "vertical"
          : "horizontal",
      reverse: b === "horizontal" ? c >= 135 && c <= 315 : c >= 45 && c <= 225,
    };
  };
  Muse.Utils.updateSlideshow_fstpOffsetSize = function (a) {
    var b = c(window),
      d = c(document.body),
      g = a.options,
      i = a.$clip ? a.$clip : a._findWidgetElements("." + g.clipClassName);
    Muse.Utils.moveElementsOutsideViewport(i.parents());
    a._fstpOffsetSize =
      g.transitionStyle === "horizontal"
        ? g.elastic === "fullWidth"
          ? Math.max(b.width(), parseInt(d.css("min-width")))
          : i.width()
        : i.height();
    Muse.Utils.moveElementsInsideViewport(i.parents());
  };
  Muse.Utils.urlParam = function (a, b) {
    var c = RegExp("[\\?&]" + b + "=([^&#]*)").exec(a);
    return c ? c[1] : null;
  };
  Muse.Utils.processHyperlink = function (a) {
    var f = a.href,
      d = c(window),
      a = c(a),
      g = a.attr("target");
    if (!g || g == "_self") {
      var i = f.lastIndexOf("/"),
        g = f.lastIndexOf("#"),
        l = a.attr("class").match(/anim_(\w+)/);
      if (l && g > i) {
        var a = d.data("scrollWrapper"),
          k = f.substring(g),
          j = Muse.Utils.getAnchorWithDestination(k);
        if (j.length == 0) return !1;
        var g = j.offset(),
          f = l[1],
          m = a || window,
          i = document.documentElement || document.body,
          l = (a ? a.scrollHeight() : i.scrollHeight) - d.height(),
          i = (a ? a.scrollWidth() : i.scrollWidth) - d.width(),
          n = Math.min(l, g.top + (a && !a.isStandard() ? a.scrollTop() : 0)),
          p = Math.min(i, g.left + (a && !a.isStandard() ? a.scrollLeft() : 0)),
          o = c(j).parents(".AccordionPanelContentClip").length,
          q = function () {
            var a = c(j).closest(".AccordionPanelContent").prev();
            a &&
              a.length &&
              !a.hasClass("AccordionPanelTabOpen") &&
              (a.trigger("mousedown"), a.trigger("mouseup"));
          };
        if (o) {
          var i = c(j).closest(".AccordionPanelContent"),
            l = d.scrollTop(),
            r = d.scrollTop() + d.height(),
            s = d.scrollLeft() + d.width(),
            d = d.scrollLeft(),
            r = g.top >= l && g.top + i.height() <= r,
            g = g.left >= d && g.left + i.width() <= s;
          if (r && g) return q(), !1;
          n = r
            ? l
            : Math.min(n, c(j).parents(".AccordionWidget").offset().top);
          p = g
            ? d
            : Math.min(p, c(j).parents(".AccordionWidget").offset().left);
        }
        d = function () {
          m.scrollTo(p, n);
          o && q();
          try {
            history.replaceState({});
          } catch (a) {
            if (!b.browser.msie || b.browser.version > 7)
              window.location.hash = k;
          }
        };
        try {
          history.pushState({}, null, k);
        } catch (w) {}
        if (window.scrollTo || void 0 !== a) {
          var a = a || c(document),
            y = a.scrollLeft(),
            u = a.scrollTop(),
            t = y,
            x = u;
          c({ scrollDistance: 0 }).animate(
            { scrollDistance: 1 },
            {
              duration: 1e3,
              easing: f,
              step: function (a) {
                a != 0 &&
                  ((x = a * (n - u)),
                  (t = a * (p - y)),
                  m.scrollTo(y + t, u + x));
              },
              complete: d,
            }
          );
        } else
          c("html,body").animate({ scrollTop: n, scrollLeft: p }, 1e3, f, d);
        return !1;
      }
    }
    (d = Muse.Utils.urlParam(f, "devicelock")) &&
      Muse.Utils.createCookie("devicelock", d, 0);
    return !0;
  };
  Muse.Utils.navigateToAnchor = function (a) {
    var b = function () {
      var b = Muse.Utils.getAnchorWithDestination(a);
      if (b.length !== 0) {
        var f = b.offset(),
          d = c(window),
          l = d.data("scrollWrapper"),
          b = l || window,
          k = document.documentElement || document.body,
          j = (l ? l.scrollHeight() : k.scrollHeight) - d.height(),
          d = (l ? l.scrollWidth() : k.scrollWidth) - d.width(),
          j = Math.min(j, f.top + (l && !l.isStandard() ? l.scrollTop() : 0)),
          f = Math.min(d, f.left + (l && !l.isStandard() ? l.scrollLeft() : 0));
        b.scrollTo(f, j);
      }
    };
    if (c("body").hasClass("awaiting_bp_activate_scroll"))
      $window.one("scroll", function () {
        b();
      });
    else b();
  };
  var d = [];
  Muse.Utils.redirectCancelled = !1;
  Muse.Utils.redirectHyperlink = function (a) {
    if (Muse.Utils.redirectCancelled)
      setTimeout(function () {
        Muse.Utils.redirectCancelled = !1;
      }, 0);
    else if (
      ((d = []), Muse.Utils.processHyperlink(a) && !Muse.Utils.isIBE())
    ) {
      var b = c(a).attr("target");
      b || (b = "_self");
      window.open(a.href, b);
    }
  };
  Muse.Utils.redirectHyperlinkInNewTab = function (a, b) {
    if (Muse.Utils.redirectCancelled)
      setTimeout(function () {
        Muse.Utils.redirectCancelled = !1;
      }, 0);
    else {
      d = [];
      thisWindow = window.self;
      var c = window.open(a);
      b ? c.focus() : thisWindow.focus();
    }
  };
  Muse.Utils.isMouseLeftClick = function (a) {
    return a.which == 1;
  };
  Muse.Utils.isMouseMiddleClick = function (a) {
    return a.which == 2;
  };
  Muse.Utils.isRedirectLinkKeyboardAction = function (a) {
    return a.which == 13;
  };
  Muse.Utils.addHyperlinkAnchor = function (a) {
    a = c(a);
    a.bind("mousedown", function (a) {
      (Muse.Utils.isMouseLeftClick(a) || Muse.Utils.isMouseMiddleClick(a)) &&
        d.push(this);
    });
    a.bind("mouseup keyup", function (a) {
      if (Muse.Utils.isMouseLeftClick(a) && d.indexOf(this) != -1)
        a.ctrlKey || a.metaKey
          ? Muse.Utils.redirectHyperlinkInNewTab(this.href, a.shiftKey)
          : Muse.Utils.redirectHyperlink(this);
      else if (Muse.Utils.isMouseMiddleClick(a) && d.indexOf(this) != -1)
        if (b.browser.webkit || (!a.target.href && b.browser.msie))
          Muse.Utils.redirectHyperlinkInNewTab(this.href, a.shiftKey);
        else return (d = []), !0;
      else
        Muse.Utils.isRedirectLinkKeyboardAction(a) &&
          Muse.Utils.redirectHyperlink(this);
      return !1;
    });
    Muse.Utils.isIBE() ||
      a.bind("click", function () {
        return !1;
      });
  };
  Muse.Utils.addHyperlinkBlock = function (a) {
    var b = c(a.parentNode);
    b.bind("mousedown", function (a) {
      (Muse.Utils.isMouseLeftClick(a) || Muse.Utils.isMouseMiddleClick(a)) &&
        d.push(this);
      return !1;
    });
    b.bind("mouseup keyup", function (b) {
      Muse.Utils.isMouseLeftClick(b) && d.indexOf(this) != -1
        ? b.ctrlKey || b.metaKey
          ? Muse.Utils.redirectHyperlinkInNewTab(a.href, b.shiftKey)
          : Muse.Utils.redirectHyperlink(a)
        : Muse.Utils.isMouseMiddleClick(b) && d.indexOf(this) != -1
        ? Muse.Utils.redirectHyperlinkInNewTab(a.href, b.shiftKey)
        : Muse.Utils.isRedirectLinkKeyboardAction(b) &&
          Muse.Utils.redirectHyperlink(a);
      return !1;
    });
    Muse.Utils.isIBE() ||
      b.bind("click", function () {
        return !1;
      });
  };
  Muse.Utils.prepHyperlinks = function (a) {
    c("a.block").each(function () {
      var a = c(this.parentNode);
      Muse.Utils.addHyperlinkBlock(this);
      a.find("a.nonblock").each(function () {
        var a = c(this);
        if (a.data("registeredNonBlockLink") === !0) return !1;
        Muse.Utils.addHyperlinkAnchor(this);
        a.data("registeredNonBlockLink", !0);
      });
    });
    c("a.nonblock").each(function () {
      var a = c(this);
      a.data("registeredNonBlockLink") !== !0 &&
        (a.parent('[class~="sbg"]').length > 0
          ? Muse.Utils.addHyperlinkAnchor(this)
          : (a.attr("class").match(/anim_(\w+)/) ||
              this.href.indexOf("devicelock=") != -1) &&
            c(this).bind("click", function () {
              return Muse.Utils.processHyperlink(this);
            }));
    });
    a && Muse.Utils.enableAnchorLinksActiveState();
  };
  Muse.Utils.pathOnly = function (a) {
    if (!a) return a;
    return a.replace(/#(?:[^#]+)$/, "").replace(/\?(?:[^\?]+)$/, "");
  };
  Muse.Utils.enableAnchorLinksActiveState = function () {
    var a = !1,
      b = [],
      d = c(window),
      g = Muse.Utils.getPageStyleSheets(),
      i = function (a) {
        var b = a.parent('[class~="sbg"]');
        if (a.hasClass("MenuItem") || b.hasClass("MenuItem"))
          return "MuseMenuActive";
        if (a.hasClass("Button") || b.hasClass("Button"))
          return "ButtonSelected";
        return "MuseLinkActive";
      },
      l = !1,
      k = function (d) {
        b.splice(0, b.length);
        c("a.nonblock,a.block", d).each(function () {
          Muse.Utils.saveHyperlinkInfo(c(this), i(c(this)), g, a, b);
        });
        b.sort(function (a, b) {
          if (a.from < b.from) return -1;
          if (a.from > b.from) return 1;
          return 0;
        });
        l = !0;
      },
      j = !1,
      m = d.data("scrollWrapper"),
      n = m || d,
      p = null,
      o = function () {
        j = !1;
        if (!l) {
          var d = c("#page");
          a = d.outerWidth() / d.outerHeight() > 2;
          k(p);
        }
        var d = a ? n.scrollLeft() : n.scrollTop(),
          g;
        a: {
          var h = 0;
          g = b.length;
          for (var o; h < g; h++)
            if (((o = b[h]), o.from <= d && d <= o.to)) {
              g = h;
              break a;
            }
          g = -1;
        }
        var q,
          t,
          h = Math.max(0, g);
        for (g = Math.min(g + 2, b.length); h < g; h++)
          if (
            ((q = b[h]),
            (o =
              q.$elem.offset().left +
              (m && !m.isStandard() ? m.scrollLeft() : 0)),
            (t =
              q.$elem.offset().top +
              (m && !m.isStandard() ? m.scrollTop() : 0)),
            q.from != (a ? o : t))
          ) {
            k(p);
            break;
          }
        h = 0;
        for (g = b.length; h < g; h++) {
          q = b[h];
          o = q.from <= d && d <= q.to;
          q = q.hyperLinks;
          t = void 0;
          for (var x = 0; x < q.length; x++)
            (t = i(q[x])),
              o && !q[x].hasClass(t)
                ? q[x].addClass(t)
                : !o && q[x].hasClass(t) && q[x].removeClass(t);
        }
      },
      q = function () {
        j || ((j = !0), Muse.Utils.requestAnimationFrame(o));
      };
    (m = d.data("scrollWrapper")) ? m.registerUpdateCallback(q) : d.scroll(q);
    c("body").on("muse_bp_activate", function (a, b, c) {
      l = !1;
      p = c;
      q();
    });
    0 == c(".breakpoint").length && o();
  };
  Muse.Utils.getAnchorWithDestination = function (a) {
    if (!a || !a.replace) return c(a);
    if (a.match(/\//g)) return c();
    return c(a.replace(/([\.\:])/gi, "\\$1"));
  };
  Muse.Utils.saveHyperlinkInfo = function (a, b, d, g, i) {
    var l = a.attr("href"),
      k = Muse.Utils.pathOnly(l),
      j = -1,
      m = a.attr("target"),
      n = window.location.href.replace(/#.*$/i, "");
    if (
      l &&
      -1 != l.indexOf("#") &&
      !(m && m != "_self") &&
      !(0 <= k.indexOf("/")) &&
      (n.charAt(n.length - 1) == "/" && (n += "sing2.php"),
      -1 != n.indexOf("/" + k, n.length - k.length - 1))
    ) {
      var k = c(window).data("scrollWrapper"),
        p = l.substring(l.lastIndexOf("#")),
        a =
          a.parent('[class~="sbg"]').length > 0 || a.hasClass("block")
            ? a.parent()
            : a,
        o = "#" + a.attr("id"),
        b = "." + b;
      if (
        null !==
        Muse.Utils.allStyleSheetRules(d, function (a) {
          return 0 <= a.indexOf(o + b) || 0 <= a.indexOf(b + o);
        })
      ) {
        m = 0;
        for (n = i.length; m < n; m++)
          if (i[m].href == l) {
            j = m;
            break;
          }
        if (-1 == j) {
          d = Muse.Utils.getAnchorWithDestination(p);
          if (d.length === 0) return;
          m = k && !k.isStandard();
          g = Math.floor(
            g
              ? d.offset().left + (m ? k.scrollLeft() : 0)
              : d.offset().top + (m ? k.scrollTop() : 0)
          );
          k = Number.MAX_VALUE;
          m = 0;
          for (n = i.length; m < n; m++)
            if (i[m].href != l && i[m].from == g) {
              j = m;
              break;
            }
          if (-1 == j) {
            m = 0;
            for (n = i.length; m < n; m++) {
              j = i[m];
              if (j.from < g && g < j.to) {
                k = j.to;
                j.to = g - 1;
                break;
              }
              j.from <= k && (k = j.from - 1);
            }
            i.push({ hyperLinks: [], from: g, to: k, $elem: d, href: l });
            j = i.length - 1;
          }
        }
        i[j].hyperLinks.push(a);
      }
    }
  };
  Muse.Utils.isIBE = function () {
    return Muse.Utils.readCookie("inbrowserediting") == "true";
  };
  Muse.Utils.includeMEditableTags = function (a) {
    if (!a || a.length == 0 || !Muse.Utils.isIBE()) return a;
    return a.map(function () {
      var a = c(this).parent(
        "div[contenteditable][region-id][template][data-ice-editableid][data-ice-editable]"
      );
      return a && a.length ? a.get() : this;
    });
  };
  Muse.Utils.getNaturalWidth = function (a) {
    var b = -1;
    a.naturalWidth != null
      ? (b = a.naturalWidth)
      : a.runtimeStyle
      ? ((a.runtimeStyle.width = "auto"),
        (a.runtimeStyle.height = "auto"),
        (a.runtimeStyle.borderWidth = "0"),
        (a.runtimeStyle.padding = "0"),
        (b = a.offsetWidth),
        (a.runtimeStyle.width = ""),
        (a.runtimeStyle.height = ""),
        (a.runtimeStyle.borderWidth = ""),
        (a.runtimeStyle.padding = ""))
      : ((a = a.cloneNode(!0)),
        (a.className = ""),
        (a.style.width = "auto !important"),
        (a.style.height = "auto !important"),
        (a.style.borderWidth = "0 !important"),
        (a.style.padding = "0 !important"),
        (b = a.width));
    return b;
  };
  Muse.Utils.getNaturalHeight = function (a) {
    var b = -1;
    a.naturalHeight != null
      ? (b = a.naturalHeight)
      : a.runtimeStyle
      ? ((a.runtimeStyle.width = "auto"),
        (a.runtimeStyle.height = "auto"),
        (a.runtimeStyle.borderWidth = "0"),
        (a.runtimeStyle.padding = "0"),
        (b = a.offsetHeight),
        (a.runtimeStyle.width = ""),
        (a.runtimeStyle.height = ""),
        (a.runtimeStyle.borderWidth = ""),
        (a.runtimeStyle.padding = ""))
      : ((a = a.cloneNode(!0)),
        (a.className = ""),
        (a.style.width = "auto !important"),
        (a.style.height = "auto !important"),
        (a.style.borderWidth = "0 !important"),
        (a.style.padding = "0 !important"),
        (b = a.height));
    return b;
  };
  Muse.Utils.pieLoading = !1;
  Muse.Utils.pieFunctionQueue = [];
  Muse.Utils.needPIE = function (a) {
    if (Muse.Utils.havePIE) a();
    else if ((Muse.Utils.pieFunctionQueue.push(a), !Muse.Utils.pieLoading))
      (Muse.Utils.pieLoading = !0),
        (a = "scripts/pie.js"),
        a[0] == "/" &&
          ((a =
            location.pathname.indexOf(".html") != -1
              ? location.pathname.substring(
                  0,
                  location.pathname.lastIndexOf("/")
                ) + a
              : location.pathname + a),
          (a = a.replace(/\/+/g, "/"))),
        c.ajax({
          url: a,
          dataType: "script",
          complete: function () {
            if (Muse.Utils.isDefined(window.PIE)) {
              Muse.Utils.havePIE = !0;
              Muse.Utils.pieLoading = !1;
              for (var a = 0; a < Muse.Utils.pieFunctionQueue.length; ++a)
                Muse.Utils.pieFunctionQueue[a]();
            }
          },
        });
  };
  Muse.Utils.transformMarkupToFixBrowserProblemsPreInit = function () {
    Muse.Utils.fixSVGImages();
    Muse.Utils.maintainFluidSVGsAspectRatio();
    Muse.Utils.addProtocolToVimeoYoutubeIfNeeded();
    b.browser.msie
      ? (b("html").addClass("ie"),
        b.browser.version < 8 && Muse.Utils.changeLItoDIVs(),
        b.browser.version < 9 &&
          (Muse.Utils.monitorCheckboxes(), Muse.Utils.addRoundedCorners()))
      : b.browser.SafariMobile &&
        b("body").css("-webkit-text-size-adjust", "none");
  };
  Muse.Utils.monitorCheckboxes = function () {
    var a = function (a) {
      "checked" == a.attr("checked")
        ? a.removeClass("not_checked").addClass("checked")
        : a.removeClass("checked").addClass("not_checked");
    };
    c(".fld-checkbox input[type=checkbox]")
      .each(function () {
        a(c(this));
      })
      .click(function () {
        a(c(this));
      });
    c(".fld-radiobutton input[type=radio]")
      .each(function () {
        a(c(this));
      })
      .click(function () {
        c(".fld-radiobutton input[type=radio]", c(this).closest("form")).each(
          function () {
            a(c(this));
          }
        );
      });
  };
  Muse.Utils.transformMarkupToFixBrowserProblems = function () {
    Muse.Utils.havePIE = !1;
    b.browser.msie &&
      b.browser.version <= 9 &&
      (b.browser.version <= 9 &&
        (Muse.Utils.addGradientFill(), Muse.Utils.addShadows()),
      b.browser.version < 9 &&
        (Muse.Utils.applyIEFilterToPNGImages(),
        Muse.Utils.addRGBA(),
        Muse.Utils.removeEdgeAnimationBorderForIE78()));
    ((b.browser.msie && b.browser.version < 9) || b.browser.webkit) &&
      Muse.Utils.insertEmptyDivAfterPinnedColumnElements();
    Muse.Utils.fixTransformRotations();
    Muse.Utils.fixImageFramesWithRoundedCorners();
    typeof window.matchMedia === "undefined" &&
      typeof window.msMatchMedia === "undefined" &&
      c("html").addClass("nomediaqueries");
    var a = c(window).data("musePolyfill.bgSize");
    null != a && a.initialize(c(".museBGSize"));
    window.location.hash && Muse.Utils.navigateToAnchor(window.location.hash);
  };
  Muse.Utils.fixSVGImages = function () {
    var a = document.implementation.hasFeature(
        "http://www.w3.org/TR/SVG11/feature#Image",
        "1.1"
      ),
      b = c("html");
    a ||
      (b.addClass("nosvg"),
      c("body img").each(function () {
        var a = c(this),
          b = a.data("mu-svgfallback");
        b && (a.data("src", b), a.attr("src", b));
      }));
  };
  Muse.Utils.maintainFluidSVGsAspectRatio = function () {
    var a = c(".svg_mar");
    if (0 != a.length) {
      var b = function () {
          a.each(function () {
            var a = c(this),
              b = a.data("image-width"),
              f = a.data("image-height");
            0 < b && 0 < f && a.css("height", (a.width() * f) / b);
          });
        },
        d = function (b) {
          a = c(".svg_mar", b.length ? b : null);
        };
      c(window).resize(b);
      c("body").on("muse_bp_activate", function (a, c, l) {
        d(l);
        b();
      });
      d(c(".breakpoint.active"));
      b();
    }
  };
  Muse.Utils.addProtocolToVimeoYoutubeIfNeeded = function () {
    var a = /^\/\/(?:player\.vimeo\.com|www\.youtube\.com)/gi;
    window &&
      window.location &&
      window.location.protocol &&
      window.location.protocol.indexOf &&
      0 <= window.location.protocol.indexOf("file") &&
      c("iframe").each(function () {
        var b = c(this),
          d = b.attr("src"),
          g = b.attr("data-src");
        d &&
          g &&
          "about:blank" == d &&
          g.match &&
          g.match(a) &&
          b.attr("data-src", "https:" + g);
        !g &&
          d &&
          "about:blank" != d &&
          d.match &&
          d.match(a) &&
          b.attr("src", "https:" + d);
      });
  };
  Muse.Utils.applyIEFilterToPNGImages = function () {
    b.browser.msie &&
      b.browser.version < 9 &&
      c("body *")
        .not(".museBgSizePolyfill img,.f3s_top,.f3s_mid,.f3s_bot")
        .each(function () {
          var a = c(this);
          if (
            !a.data("mu-ie-matrix") &&
            (a.css("background-image").match(/\b.png/i) ||
              (this.nodeName &&
                this.nodeName.toLowerCase() == "img" &&
                a.attr("src").match(/\b.png/i)))
          ) {
            var b = a.css("filter");
            a.css(
              "filter",
              b
                ? b +
                    " progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF,endColorstr=#00FFFFFF)"
                : "progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF,endColorstr=#00FFFFFF)"
            );
          }
        });
  };
  Muse.Utils.insertEmptyDivAfterPinnedColumnElements = function () {
    c(".pinned-colelem").each(function () {
      c("<div class='colelem'/>").insertAfter(c(this));
    });
  };
  Muse.Utils.addGradientFill = function () {
    c(".gradient").each(function () {
      var a = this;
      Muse.Utils.needPIE(function () {
        PIE.attach(a);
      });
    });
  };
  Muse.Utils.addShadows = function () {
    c(".shadow").each(function () {
      var a = this,
        b = c(a);
      Muse.Utils.needPIE(function () {
        b.data("mu-ie-matrix") || PIE.attach(a);
      });
    });
  };
  Muse.Utils.fixImageFramesWithRoundedCorners = function () {
    Muse.Browser.Features.checkCSSFeature("border-radius") &&
      Muse.Browser.Features.checkCSSFeature("-webkit-border-radius") &&
      c(".rounded-corners").each(function () {
        if (c(this).hasClass("clip_frame")) {
          var a = Muse.Utils.firstDescendant(
            this,
            Muse.Utils.Match.byNodeName("img")
          );
          a && c(a).wrap('<div class="clip_frame"></div>');
        }
      });
  };
  Muse.Utils.addRoundedCorners = function () {
    c(".rounded-corners").each(function () {
      var a = this;
      Muse.Utils.needPIE(function () {
        var b = c(a);
        if (!b.data("mu-ie-matrix")) {
          var d = b.css("filter");
          if (
            !d ||
            !(d.toLowerCase().indexOf("opacity") > 0 && d.indexOf("=100") < 0)
          ) {
            if (
              a.childNodes.length &&
              !Muse.Browser.Features.checkCSSFeature("border-radius") &&
              (d = Muse.Utils.firstChild(
                a,
                Muse.Utils.Match.byNodeName("img")
              )) &&
              d.nodeName.toLowerCase() == "img"
            ) {
              var d = c(d),
                g = d.attr("src"),
                i = b.css("background-color") + " ",
                l = d.css("margin-left");
              if (l == "0px" || l == "auto") l = d.css("padding-left");
              var k = d.css("margin-top");
              if (k == "0px" || k == "auto") k = d.css("padding-top");
              if ((l == "0px" || l == "auto") && (k == "0px" || k == "auto"))
                b.addClass("museBGSize"), b.css("background-size", "cover");
              d.css("visibility", "hidden");
              b.css(
                "background",
                i + "url(" + g + ") no-repeat " + l + " " + k
              );
            }
            PIE.attach(a);
          }
        }
      });
    });
  };
  Muse.Utils.addRGBA = function () {
    c(".rgba-background").each(function () {
      var a = this;
      Muse.Utils.needPIE(function () {
        PIE.attach(a);
      });
    });
  };
  Muse.Utils.resizeHeight = function (a) {
    var b = {},
      d = function (d) {
        var h = d.parent().hasClass("sbg") ? d.parent() : d,
          d = c(d.children()[0]);
        h.attr("data-lightbox") != "true" &&
          "fixed" != d.css("position") &&
          h.height(d.outerHeight());
        h = d.attr("id") || "always_watch";
        b[h] ||
          ((b[h] = !0),
          d.watch("height", function () {
            var b = c(this);
            "fixed" != b.css("position") &&
              !b.hasClass("fullscreen") &&
              b.closest(a).children().length &&
              b.closest(a).height(c(b.closest(a).children()[0]).outerHeight());
          }));
      };
    if (0 < c(".breakpoint").length)
      c("body").on("muse_bp_activate", function (g, i, l) {
        b = {};
        c(a, l).each(function () {
          c(this).attr("data-lightbox") != "true" &&
            c(this).css("height", "auto");
          d(c(this));
        });
      });
    else
      c(a).each(function () {
        d(c(this));
      });
  };
  Muse.Utils.moveElementsOutsideViewport = function (a) {
    var b;
    a.each(function () {
      b = c(this);
      b.css("display") === "none" &&
        (b.attr("data-margin-left", b.css("margin-left")),
        b.css(
          "margin-left",
          Muse.Utils.marginLeftForMovingElementsOutSideViewPort
        ),
        b.css("display", "block"),
        b.attr("data-display-attr-change", "true"));
    });
  };
  Muse.Utils.moveElementsInsideViewport = function (a) {
    var b;
    a.each(function () {
      b = c(this);
      b.attr("data-display-attr-change") === "true" &&
        (b.css("display", ""),
        b.css("display") != "none" && b.css("display", "none"),
        b.css("margin-left", ""),
        b.css("margin-left") != b.attr("data-margin-left") &&
          b.css("margin-left", b.attr("data-margin-left")),
        b.removeAttr("data-display-attr-change"),
        b.removeAttr("data-margin-left"));
    });
  };
  Muse.Utils.adjustTargetAndSlideHeights = function (a, b) {
    var d = 0,
      g = 0,
      i = 0;
    a.children().each(function () {
      c(this).is("img") || c(this).css("height", "");
    });
    a.css("height", "");
    b != "loose" &&
      (a.children().each(function () {
        c(this).children().length != 0 &&
          (d = Math.max(d, c(this).innerHeight()));
        g = Math.max(g, c(this).innerHeight());
      }),
      (i = d == 0 ? g : d),
      a.children().each(function () {
        if (!c(this).is("img"))
          if (c(this).hasClass("borderbox")) {
            var a = c(this).outerHeight() - c(this).innerHeight();
            c(this).css("height", i + a + "px");
          } else
            (a = c(this).innerHeight() - c(this).height()),
              c(this).css("height", i - a + "px");
      }));
    b === "lightbox"
      ? a.css("height", i + "px")
      : a.css("height", a.outerHeight() + "px");
  };
  Muse.Utils.addWidgetIDToImages = function (a, b) {
    a.find("img").each(function () {
      c(this);
      c(this).attr("data-widget-id") === void 0 &&
        c(this).attr("data-widget-id", b);
    });
  };
  Muse.Utils.resizeImages = function (a, b) {
    a.find("img").each(function () {
      var a = c(this);
      if (
        a.attr("data-heightwidthratio") !== void 0 &&
        a.attr("data-widget-id") === b
      ) {
        var d = a.width() * a.attr("data-heightwidthratio");
        a.css("height", "");
        a.css("height", d + "px");
      }
    });
  };
  Muse.Utils.isElementBrowserPinned = function (a) {
    return a.css("position") === "fixed";
  };
  Muse.Utils.applyPinningToLightboxParts = function (a, b) {
    for (var d = 0; d < b.children().length; d++) {
      var g = c(b.children()[d]),
        i = g.parent(),
        l = g.attr("data-pintopage");
      if (l != void 0) {
        var k = !1;
        switch (l) {
          case "page_fixedLeft":
            var j = g.offset().left - a.offset().left,
              m = a.offset().left - i.parent().offset().left,
              k = !0;
            break;
          case "page_fixedCenter":
            j = g.offset().left - (a.offset().left + a.width() / 2);
            m = a.offset().left + a.width() / 2 - i.parent().offset().left;
            k = !0;
            break;
          case "page_fixedRight":
            (j = g.offset().left - (a.offset().left + a.width())),
              (m = a.offset().left + a.width() - i.parent().offset().left),
              (k = !0);
        }
        k &&
          Muse.Utils.isLeftInPercentForLightbox(i.parent()) &&
          ((l = (m * 100) / i.parent().width()),
          i.css("margin-left", l + "%"),
          i.css("left", "0px"),
          g.css("left", j + "px"),
          g.css("margin-left", "0px"));
      }
    }
  };
  Muse.Utils.isLeftInPercentForLightbox = function (a) {
    var b =
      Muse.Utils.isPropertyInPercent(a, "margin-left") ||
      Muse.Utils.isPropertyInPercent(a, "left");
    if (!b && a.hasClass("clearfix"))
      for (var d = 0; d < a.children().length; d++) {
        var g = c(a.children()[d]);
        if (Muse.Utils.isLeftInPercentForLightbox(g)) return !0;
      }
    return b;
  };
  Muse.Utils.isPropertyInPercent = function (a, b) {
    if (a.parent() === void 0) return !1;
    var c = a.parent().css("display"),
      d = a.parent().css("margin-left");
    a.parent().css("margin-left", "-10000px");
    a.parent().css("display", "none");
    var i = window.getComputedStyle(a[0]).getPropertyValue(b);
    a.parent().css("display", "");
    a.parent().css("display") !== c && a.parent().css("display", c);
    a.parent().css("margin-left", "");
    a.parent().css("margin-left") !== d && a.parent().css("margin-left", d);
    return i.indexOf("%") > -1;
  };
  Muse.Utils.isStackedOrScatteredLayout = function (a) {
    return a === "stack" || a === "loose";
  };
  Muse.Utils.removeEdgeAnimationBorderForIE78 = function () {
    c(".animationContainer").each(function () {
      c(this)
        .parent()
        .html(function (a, b) {
          return b.replace(/><\/iframe>$/gi, ' frameBorder="0"></iframe>');
        });
    });
  };
  Muse.Utils.initializeAnimations = function (a) {
    var b = function (b) {
      if (!Muse.Utils.isIBE() && !0 === a) {
        var f = b.contents();
        c("#report-abuse", f).remove();
        c("#report-abuse-spacer", f).remove();
      }
      b.removeClass("an_invi");
    };
    c(".animationContainer").each(function () {
      var a = c(this);
      Muse.Utils.isIBE() ||
      (this.contentDocument && "complete" == this.contentDocument.readyState)
        ? b(a)
        : a.load(function () {
            b(a);
          });
    });
  };
  Muse.Utils.fixTransformRotations = function () {
    Muse.Browser.Features.checkCSSFeature("transform") ||
      c("*[data-mu-ie-matrix]").each(function () {
        var a = c(this),
          b = a.parent(),
          d = Math.round(a.data("mu-ie-matrix-dx")),
          g = Math.round(a.data("mu-ie-matrix-dy")),
          i = b.innerHeight(),
          l = b.innerWidth();
        a.css({
          filter: function (b, c) {
            if (c) return c + " " + a.data("mu-ie-matrix");
            return a.data("mu-ie-matrix");
          },
          "margin-bottom": "-=" + g,
        }).removeClass("shadow");
        b.css({
          "margin-bottom": "-=" + (b.innerHeight() - i),
          "margin-right": "-=" + (b.innerWidth() - l),
        });
        a.hasClass("actAsDiv")
          ? (a.wrap('<span class="actAsDiv rotateWrapper"></span>'),
            a.parent().css("float", a.css("float")))
          : a.hasClass("actAsInlineDiv")
          ? a.wrap('<span class="actAsInlineDiv rotateWrapper"></span>')
          : a.wrap('<div class="rotateWrapper"></div>');
        a.parent().css({
          top: g,
          left: d,
          position: "relative",
          "margin-bottom": g,
        });
      });
  };
  Muse.Utils.fullPage = function (a) {
    var b = c(window).data("stickyFooter");
    if (0 == c(a).closest(".breakpoint").length)
      Muse.Assert.assert(
        0 == c(".breakpoint").length,
        "Page is outside a breakpoint node."
      ),
        b.init(c(a));
    else {
      var d = function (d) {
        Muse.Assert.assert(
          1 == d.length,
          "Cannot initialize sticky footer - invalid breakpoint node."
        );
        b.init(c(a, d));
      };
      d(c(".breakpoint.active"));
      c("body").on("muse_bp_activate", function (a, b, c) {
        Muse.Utils.requestAnimationFrame(function () {
          d(c);
        });
      });
    }
  };
  Muse.Utils.widgetInsideLightbox = function (a) {
    for (var b = 0; b < a.length; b++)
      if (c(a[b]).attr("data-islightbox") == "true") return !0;
    return !1;
  };
  Muse.Utils.endsWith = function (a, b) {
    if (!a || !b) return !1;
    Muse.Assert.assert(
      "string" == typeof a,
      'Invalid type for "str" argument - expected string.'
    );
    Muse.Assert.assert(
      "string" == typeof b,
      'Invalid type for "ending" argument - expected string.'
    );
    return a.substring(a.length - b.length) == b;
  };
  Muse.Utils.firstDefined = function () {
    for (var a = 0; a < arguments.length; a++)
      if (Muse.Utils.isDefined(arguments[a])) return arguments[a];
  };
  Muse.Utils.isDefined = function (a) {
    return "undefined" != typeof a;
  };
  Muse.Utils.getCSSIntValue = function (a, b) {
    return Muse.Utils.tryParse(a.css(b), parseInt, 0);
  };
  Muse.Utils.tryParse = function (a, b, c) {
    if (!Muse.Utils.isDefined(a)) return c;
    a = b(a);
    return !isNaN(a) ? a : c;
  };
  Muse.Utils.changeLItoDIVs = function () {
    var a = function () {
      var a = c(this),
        b = c("<div/>");
      b.addClass(a.attr("class"));
      b.attr("id", a.attr("id"));
      b.append(a.contents());
      a.replaceWith(b);
    };
    c("ul").each(function () {
      c(this).find("li").each(a);
    });
    c("ul").each(a);
  };
  Muse.Utils._initWidgetQueue = null;
  Muse.Utils._hasBPListener = !1;
  Muse.Utils.initWidget = function (a, b, d) {
    if (0 == c(".breakpoint").length)
      c(a).each(function () {
        d(c(this));
      });
    else {
      for (var g = 0; g < b.length; g++) {
        var i = b[g];
        if (!Muse.Utils._initWidgetQueue) Muse.Utils._initWidgetQueue = {};
        Muse.Utils._initWidgetQueue[i] || (Muse.Utils._initWidgetQueue[i] = []);
        Muse.Utils._initWidgetQueue[i].push({ id: a, fn: d });
      }
      if (Muse.Utils._initWidgetQueue && !Muse.Utils._hasBPListener) {
        var l = function (a, b, f, d) {
          a = f.attr("id");
          Muse.Assert.assert(
            a,
            "Invalid breakpoint node - missing the ID attribute"
          );
          a = "#" + a;
          if (Muse.Utils._initWidgetQueue[a]) {
            for (; Muse.Utils._initWidgetQueue[a].length; )
              if (
                ((b = Muse.Utils._initWidgetQueue[a].shift()),
                (b = b.fn(c(b.id, f))))
              )
                (b.$bp = f), (b.breakpoint = d);
            Muse.Utils.showWidgetsWhenReady(f);
            delete Muse.Utils._initWidgetQueue[a];
            var f = !0,
              g;
            for (g in Muse.Utils._initWidgetQueue) {
              f = !1;
              break;
            }
            if (f)
              c("body").off("muse_bp_activate", l),
                (Muse.Utils._hasBPListener = !1);
          }
        };
        c("body").on("muse_bp_activate", l);
        Muse.Utils._hasBPListener = !0;
      }
    }
  };
  Muse.Utils.showWidgetsWhenReady = function (a) {
    b(".disn", a).removeClass("disn");
    b(".invi", a).removeClass("invi");
    b(".widget_invisible", a).removeClass("widget_invisible");
  };
  Muse.Utils.detachIframesAndObjectsToPauseMedia = function (a) {
    var f = [],
      d = [];
    c("iframe, object", a).each(function () {
      var a = c(this);
      if (!a.is("object") || !(b.browser.msie && b.browser.version < 9)) {
        if (a.is("iframe")) {
          var i = a.prop("src");
          if ("" == i || !i || !i.indexOf) return;
          if (a.attr("title") === "recaptcha widget") return;
          if (0 <= i.indexOf("vimeo.com")) {
            Muse.Utils.VimeoVideoHelper.pause(a);
            d.push({
              $node: a,
              playFn: function (a) {
                Muse.Utils.VimeoVideoHelper.seekTo(a, 0);
                Muse.Utils.VimeoVideoHelper.isAutoPlay(a) &&
                  Muse.Utils.VimeoVideoHelper.play(a);
              },
            });
            return;
          }
        }
        i = {};
        i.$next = a.next();
        i.$parent = a.parent();
        b.browser.msie
          ? ((i.html = a.wrap('<div id="deleteMeWrapper"/>').parent().html()),
            a.remove(),
            i.$parent.children("div #deleteMeWrapper").remove())
          : ((i.$node = a.clone()), a.remove());
        f.push(i);
      }
    });
    f.length && a.data("detached", f);
    d.length && a.data("paused", d);
    c("video", a).each(function () {
      if (
        b.browser.msie &&
        b.browser.version == 9 &&
        this.pause &&
        this.getAttribute("autoplay") &&
        this.readyState != 4
      )
        c(this).one("play", function () {
          this.pause();
        });
      else this.pause && !this.paused && this.pause();
    });
  };
  Muse.Utils.setPageToMaxWidth = function () {
    var a = c("#page");
    a !== void 0 &&
      a.css("max-width") !== "none" &&
      (a.css("width", a.css("max-width")),
      c(window).trigger("pageWidthChanged"));
  };
  Muse.Utils.resetPageWidth = function () {
    var a = c("#page");
    a !== void 0 && (a.css("width", ""), c(window).trigger("pageWidthChanged"));
  };
  Muse.Utils.getMinWidthOfElem = function (a) {
    var b = parseFloat(a.css("min-width") ? a.css("min-width") : 0);
    b === 0 &&
      (b = parseFloat(a.attr("data-min-width") ? a.attr("data-min-width") : 0));
    return b;
  };
  Muse.Utils.dropInOneBucketOfSizeAndPinPolicy = function (a, b, d, g) {
    if (a !== void 0 && b !== void 0) {
      var i = {};
      if (b === "fixed") i = d.fixed;
      else if (b === "fluidWidth" || b === "fluidWidthHeight") i = d.responsive;
      if (!c.isEmptyObject(i))
        switch (a) {
          case "page_fluidx":
            i.ChildFluidPin.push(g);
            break;
          case "page_fixedLeft":
            i.ChildFixedLeft.push(g);
            break;
          case "page_fixedRight":
            i.ChildFixedRight.push(g);
            break;
          case "page_fixedCenter":
            i.ChildFixedCenter.push(g);
        }
    }
  };
  Muse.Utils.removeSizeAndPiningAttributes = function () {};
  Muse.Utils.getMarginLeft = function (a) {
    if (a && !c.isEmptyObject(a))
      return a.attr("data-margin-left") &&
        a.attr("data-display-attr-change") === !0
        ? a.attr("data-margin-left")
        : window.getComputedStyle(a[0])["margin-left"];
  };
  Muse.Utils.classifyChildrens = function (a, b, d) {
    function g(a) {
      var c = a.attr("data-pintopage"),
        d = a.attr("data-sizePolicy"),
        g = parseFloat(a.css("min-width")),
        h = parseFloat(a.attr("data-min-width")),
        n = !0;
      Muse.Utils.isTopLevelWidget(a) ||
      a.is("form") ||
      Muse.Utils.isMenuWidget(a) ||
      Muse.Utils.isParameterizedHtmlWidget(a)
        ? b.ChildWidgets.push(a)
        : (g > 0 || h > 0) && !Muse.Utils.isParameterizedHtmlWidget(a)
        ? b.ChildWithMinWidth.push(a)
        : c !== void 0 && d !== void 0
        ? (Muse.Utils.dropInOneBucketOfSizeAndPinPolicy(c, d, b, a),
          Muse.Utils.removeSizeAndPiningAttributes(a))
        : (n = !1);
      return n;
    }
    d
      ? a && b && g(a)
      : a.children().each(function () {
          var a = c(this);
          g(a) || Muse.Utils.classifyChildrens(a, b, d);
        });
  };
  Muse.Utils.isElementFixedSize = function (a) {
    return a && a.attr("data-sizePolicy") === "fixed";
  };
  Muse.Utils.isInPercentage = function (a) {
    return a && a.indexOf("%") === a.length - 1;
  };
  Muse.Utils.isInPixel = function (a) {
    return a && a.indexOf("px") === a.length - 2;
  };
  Muse.Utils.getPropInPixel = function (a, b) {
    var c;
    a &&
      b &&
      a.css("display") !== "none" &&
      ((c =
        b === "margin-left"
          ? Muse.Utils.getMarginLeft(a)
          : window.getComputedStyle(a[0]).getPropertyValue(b)),
      Muse.Utils.isInPercentage(c) &&
        (b === "left"
          ? ((c = (a.offsetParent().width() * parseFloat(c)) / 100),
            (c = c.toString() + "px"))
          : b === "margin-left"
          ? ((c = (a.parent().width() * parseFloat(c)) / 100),
            (c = c.toString() + "px"))
          : (c = a.css(b))));
    return c;
  };
  Muse.Utils.getWidths = function (a) {
    var b = {};
    Muse.Utils.moveElementsOutsideViewport(a);
    Muse.Utils.moveElementsOutsideViewport(a.parents());
    b.offsetWidth = 0;
    b.elemWidth = 0;
    b.offsetWidth = a[0].offsetWidth;
    b.elemWidth = parseFloat(Muse.Utils.getPropInPixel(a, "width"));
    Muse.Utils.moveElementsInsideViewport(a);
    Muse.Utils.moveElementsInsideViewport(a.parents());
    return b;
  };
  Muse.Utils.getOffsetWidth = function (a) {
    var b = a[0].offsetWidth;
    if (b === 0) b = Muse.Utils.getWidths(a).offsetWidth;
    return b;
  };
  Muse.Utils.getChildWidth = function (a, b, c) {
    return b === !0
      ? ((b = parseFloat(a.css("min-width"))
          ? parseFloat(a.css("min-width"))
          : parseFloat(a.attr("data-min-width"))),
        a.css("box-sizing") !== "border-box" &&
          (b += Math.round(a.outerWidth() - a.innerWidth())),
        b)
      : c
      ? window.getComputedStyle(a[0]).width
      : Muse.Utils.getOffsetWidth(a);
  };
  Muse.Utils.setMinWidthInformation = function (a, b, d) {
    if (
      !c.isEmptyObject(a) &&
      a.chosenMinWidth &&
      a.$element &&
      d > 0 &&
      a.chosenMinWidth < d
    )
      (a.$element = b), (a.chosenMinWidth = d);
    return a;
  };
  Muse.Utils.isParameterizedHtmlWidget = function (a) {
    return (
      a.hasClass("size_fixed") ||
      a.hasClass("size_fluid_width") ||
      a.hasClass("size_fluid_width_height")
    );
  };
  Muse.Utils.getLeft = function (a, b) {
    function c(a, d) {
      if (a && d)
        return b
          ? Muse.Utils.getPropInPixel(a, d)
          : d === "margin-left"
          ? Muse.Utils.getMarginLeft(a)
          : window.getComputedStyle(a[0]).getPropertyValue(d);
    }
    var d = { $element: a, left: c(a, "left") };
    if (a.css("position") === "absolute") {
      var i = a.parent();
      if (i && i.hasClass("popup_anchor") && i.css("position") === "relative")
        (d.$element = i), (d.left = c(i, "left")), (consultMarginLeft = !0);
    }
    i = c(d.$element, "margin-left");
    if (i !== Muse.Utils.marginLeftForMovingElementsOutSideViewPort)
      if (d.$element.css("position") === "static" || d.left === "auto")
        d.left = i;
      else if ((d.left === "0px" || d.left === "0%") && i !== "auto")
        d.left = i;
    if (
      (d.$element.css("position") === "static" ||
        d.left === "0px" ||
        d.left === "0%" ||
        d.left === "auto") &&
      i !== Muse.Utils.marginLeftForMovingElementsOutSideViewPort
    )
      d.left = i;
    return d;
  };
  Muse.Utils.getLeftAdjustmentAmountDoneByParents = function (a, b) {
    var d = a.attr("data-leftAdjustmentDoneBy"),
      g = 0;
    d !== void 0 &&
      ((d = d.split(",")),
      (d = d.filter(function (a, b, c) {
        return c.indexOf(a) == b;
      })),
      c.each(d, function (a, d) {
        var h = c("#" + d);
        if (h[0] !== void 0 && b.closest(h).length) {
          var j = Muse.Utils.getMarginLeft(h);
          if (Muse.Utils.isInPixel(j)) g += parseFloat(j);
          else if (Muse.Utils.isInPercentage(j) || j === "auto")
            Muse.Utils.moveElementsOutsideViewport(h),
              Muse.Utils.moveElementsOutsideViewport(h.parents()),
              (j = Muse.Utils.getPropInPixel(h, "margin-left")),
              Muse.Utils.isInPixel(j) &&
                j !== Muse.Utils.marginLeftForMovingElementsOutSideViewPort &&
                (g += parseFloat(j)),
              Muse.Utils.moveElementsInsideViewport(h),
              Muse.Utils.moveElementsInsideViewport(h.parents());
        }
        return !0;
      }));
    return g;
  };
  Muse.Utils.computeMinWidthForResponsiveChilds = function (a, b, c) {
    var d = { $element: {}, chosenMinWidth: -1 };
    if (a && a.length > 0)
      switch (b) {
        case "page_fixedLeft":
          a.forEach(function (a) {
            var b = Muse.Utils.getChildWidth(a, c, !0),
              f = a[0].offsetWidth,
              j = 0,
              m = window.getComputedStyle(a[0]).left,
              m = m ? parseFloat(m) : 0,
              n = 0,
              p = 0;
            Muse.Utils.isInPercentage(b)
              ? ((j = parseFloat(b) / 100),
                (b = Muse.Utils.getWidths(a)),
                (p = b.elemWidth),
                (f = b.offsetWidth))
              : Muse.Utils.isInPixel(b) &&
                ((j = a.offsetParent().width()),
                (p = parseFloat(b)),
                (j = j > 0 ? p / j : 0));
            j > 0 &&
              (f > Math.round(p) && (n = f - Math.round(p)),
              (b = Math.abs(
                Muse.Utils.isValueWithinTolerance(j, 1, 1.0e-4)
                  ? a.outerWidth()
                  : (m + n) / (1 - j)
              )),
              Muse.Utils.setMinWidthInformation(d, a, b));
          });
          break;
        case "page_fixedRight":
          a.forEach(function (a) {
            var b = Muse.Utils.getChildWidth(a, c, !0),
              f = 0,
              j = window.getComputedStyle(a[0]).left,
              j = Math.abs(j ? parseFloat(j) : 0);
            Muse.Utils.isInPercentage(b)
              ? (f = parseFloat(b) / 100)
              : Muse.Utils.isInPixel(b) &&
                ((f = a.offsetParent().width()),
                (b = parseFloat(b)),
                (f = f > 0 ? b / f : 0));
            if (
              f > 0 &&
              f < 1 &&
              !Muse.Utils.isValueWithinTolerance(f, 1, 1.0e-4)
            )
              var m = Math.abs(j / (1 - f));
            Muse.Utils.setMinWidthInformation(d, a, m);
          });
          break;
        case "page_fixedCenter":
          a.forEach(function (a) {
            var b = window.getComputedStyle(a[0]).left,
              b = b ? parseFloat(b) : 0,
              f = Math.abs(b),
              j = Muse.Utils.getMarginLeft(a),
              m = 0,
              n = Muse.Utils.getChildWidth(a, c, !0),
              p = a[0].offsetWidth,
              o = 0,
              q = 0;
            if (b !== 0)
              Muse.Utils.isInPercentage(j)
                ? (m = parseFloat(j) / 100)
                : Muse.Utils.isInPixel(j) &&
                  ((m = a.parent().width()),
                  (j = parseFloat(j)),
                  (m = m > 0 ? j / m : 0)),
                Muse.Utils.isInPercentage(n)
                  ? ((n = Muse.Utils.getWidths(a)),
                    (q = n.elemWidth),
                    (p = n.offsetWidth))
                  : Muse.Utils.isInPixel(n) && (q = parseFloat(n)),
                m > 0 &&
                  (b > 0 && p > Math.round(q) && (o = p - Math.round(q)),
                  Muse.Utils.setMinWidthInformation(
                    d,
                    a,
                    Math.abs((f + o) / m)
                  ));
          });
      }
    return d;
  };
  Muse.Utils.computeMinWidthForFixedChilds = function (a, b, d, g) {
    function i(a, b) {
      var d = 0,
        f = 0,
        f = Muse.Utils.getLeft(a),
        h = f.$element,
        i = f.left,
        l = Muse.Utils.isInPixel(i),
        f = Muse.Utils.isInPercentage(i) || i === "auto";
      Muse.Utils.moveElementsOutsideViewport(a);
      Muse.Utils.moveElementsOutsideViewport(a.parents());
      if (f)
        (f = Muse.Utils.getLeft(a, !0)),
          (h = f.$element),
          (i = f.left),
          (l = Muse.Utils.isInPixel(i));
      var r = h.is(g) || g.closest(h).length,
        f = parseFloat(g.width());
      l &&
        ((d = parseFloat(i)),
        r ||
          ((i = h.parents()),
          c.each(i, function (a, b) {
            var f = c(b);
            if (f.is(g)) return !1;
            f = Muse.Utils.getMarginLeft(f);
            Muse.Utils.isInPixel(f) &&
              f !== Muse.Utils.marginLeftForMovingElementsOutSideViewPort &&
              (d += parseFloat(f));
            return !0;
          })));
      b && r && (f = parseFloat(h.parent().width()));
      Muse.Utils.moveElementsInsideViewport(a);
      Muse.Utils.moveElementsInsideViewport(a.parents());
      return { containerWidth: f, left: d };
    }
    var l = { $element: {}, chosenMinWidth: -1 };
    if (a && a.length > 0)
      switch (b) {
        case "page_fluidx":
          a.forEach(function (a) {
            var b = Muse.Utils.getChildWidth(a, d, !1),
              c = i(a, !0),
              f = c.left,
              c = c.containerWidth,
              g = 0,
              o = -1;
            c < f + b && (c = f + b);
            g = c > 0 ? f / c : 0;
            g < 1 &&
              !Muse.Utils.isValueWithinTolerance(g, 1, 1.0e-4) &&
              (o = Math.abs(b / (1 - g)));
            Muse.Utils.setMinWidthInformation(l, a, o > b ? o : b);
          });
          break;
        case "page_fixedLeft":
          a.forEach(function (a) {
            var b = Muse.Utils.getChildWidth(a, d, !1),
              c = i(a).left,
              c = Math.abs(c + b);
            Muse.Utils.setMinWidthInformation(l, a, c > b ? c : b);
          });
          break;
        case "page_fixedRight":
          a.forEach(function (a) {
            var b = Muse.Utils.getChildWidth(a, d, !1),
              c = window.getComputedStyle(a[0]).left,
              c = Math.abs(c ? parseFloat(c) : 0),
              f = -1,
              i = Muse.Utils.getLeftAdjustmentAmountDoneByParents(a, g);
            i >= 0 && (c -= i);
            c > 0 && (f = Muse.Utils.isElementFixedSize(a) ? c : c + b);
            Muse.Utils.setMinWidthInformation(l, a, f > b ? f : b);
          });
          break;
        case "page_fixedCenter":
          a.forEach(function (a) {
            var b = Muse.Utils.getChildWidth(a, d, !1),
              c = parseFloat(window.getComputedStyle(a[0]).left),
              f = 0,
              i = 0,
              f = Muse.Utils.getMarginLeft(a),
              o = 0,
              q = -1;
            Muse.Utils.isInPercentage(f)
              ? (o = parseFloat(f) / 100)
              : Muse.Utils.isInPixel(f) &&
                ((o = a.parent().width()),
                (f = parseFloat(f)),
                (o = o > 0 ? f / o : 0));
            o > 0 &&
              ((q = Muse.Utils.getLeftAdjustmentAmountDoneByParents(a, g)),
              (q = q < 0 ? 0 : q),
              (f = (Math.abs(c) - q) / o),
              c < 0 ? (c += q) : c > 0 && (c -= q),
              Muse.Utils.isValueWithinTolerance(o, 1, 1.0e-4) ||
                (i = (b + c) / (1 - o)),
              (q = Math.max(f, i, b)),
              Muse.Utils.setMinWidthInformation(l, a, q > b ? q : b));
          });
      }
    return l;
  };
  Muse.Utils.computeMinWidthForChildsWithMinWidth = function (a, b) {
    var c = { $element: {}, chosenMinWidth: -1 };
    a.forEach(function (a) {
      var d = a.attr("data-pintopage") || "page_fluidx",
        l = -1;
      Muse.Utils.removeSizeAndPiningAttributes(a);
      d !== void 0 &&
        ((l = Muse.Utils.computeMinWidthForFixedChilds([a], d, !0, b)),
        Muse.Utils.setMinWidthInformation(c, a, l.chosenMinWidth));
    });
    return c;
  };
  Muse.Utils.isTopLevelWidget = function (a) {
    return (
      a &&
      (a.hasClass("SlideShowWidget") ||
        a.hasClass("PamphletWidget") ||
        a.hasClass("TabbedPanelsWidget") ||
        a.hasClass("AccordionWidget") ||
        a.hasClass("Button"))
    );
  };
  Muse.Utils.isMenuWidget = function (a) {
    return (
      a.is("nav") && (a.hasClass("MenuBar") || a.hasClass("MenuBarVertical"))
    );
  };
  Muse.Utils.computeMinWidthForForms = function (a) {
    function b(a) {
      a.children().each(function () {
        var a = c(this);
        if (a.attr("data-sizePolicy") === "fixed") {
          d.push(a);
          var g = a.innerWidth();
          a.attr("data-min-width", g);
        } else b(a);
      });
    }
    var d = [],
      g = { $element: {}, chosenMinWidth: -1 };
    b(a);
    d.forEach(function (b) {
      var d = b.parents(),
        f = b;
      c.each(d, function (b, d) {
        var h = c(d),
          k = f.attr("data-pintopage") || "page_fluidx",
          i = {};
        Muse.Utils.removeSizeAndPiningAttributes(f);
        if (f.is(a)) return !1;
        i = Muse.Utils.computeMinWidthForFixedChilds([f], k, !0, h);
        Muse.Utils.setMinWidthInformation(g, i.$element, i.chosenMinWidth);
        f.attr("data-min-width") && f.removeAttr("data-min-width");
        if ((k = parseFloat(h.attr("data-min-width"))))
          i.chosenMinWidth = Math.max(i.chosenMinWidth, k);
        h.attr("data-min-width", i.chosenMinWidth);
        f = h;
        if (h.is(a)) return !1;
      });
    });
    var i = parseFloat(a.attr("data-min-width"));
    i > 0 && (a.css("min-width", i), a.removeAttr("data-min-width"));
  };
  Muse.Utils.computeMinWidthForWidgetChilds = function (a, b) {
    var d = [],
      g = { $element: {}, chosenMinWidth: -1 };
    a.forEach(function (a) {
      var b = Muse.Utils.getMinWidthOfElem(a);
      if (
        !a.hasClass("SlideShowWidget") &&
        !a.hasClass("PamphletWidget") &&
        Muse.Utils.isElementFixedSize(a)
      )
        (b = (b = window.getComputedStyle(a[0]).width) ? parseFloat(b) : 0),
          a.attr("data-min-width", b);
      else if (a.is("form")) Muse.Utils.computeMinWidthForForms(a);
      else {
        var c;
        a.hasClass("SlideShowWidget") || a.hasClass("PamphletWidget")
          ? (c = WebPro.Widget.ContentSlideShow.prototype.defaultPlugins[0])
          : a.hasClass("TabbedPanelsWidget")
          ? (c = WebPro.Widget.TabbedPanels.prototype.defaultPlugins[0])
          : a.hasClass("AccordionWidget") &&
            (c = WebPro.Widget.Accordion.prototype.defaultPlugins[0]);
        c &&
          c._setMinWidth &&
          (c._setMinWidth(a, !0), (b = Muse.Utils.getMinWidthOfElem(a)));
      }
      (b > 0 || a.is("form")) && d.push(a);
    });
    d.forEach(function (a) {
      var d = a.attr("data-pintopage") || "page_fluidx",
        h = {},
        h = Muse.Utils.computeMinWidthForFixedChilds([a], d, !0, b);
      Muse.Utils.setMinWidthInformation(g, h.$element, h.chosenMinWidth);
      h.$element &&
        !c.isEmptyObject(h.$element) &&
        h.$element.attr("data-min-width") &&
        (h.$element.removeAttr("data-min-width"),
        Muse.Utils.removeSizeAndPiningAttributes(h.$element));
    });
    return g;
  };
  Muse.Utils.adjustMinWidthRespectToAllParents = function (a, b) {
    var d = [];
    b.forEach(function (b) {
      if (
        b &&
        !c.isEmptyObject(b) &&
        b.$element &&
        !c.isEmptyObject(b.$element) &&
        b.chosenMinWidth > 0
      ) {
        if (!a.is(b.$element)) {
          var f = b.$element.parents();
          Muse.Utils.moveElementsOutsideViewport(b.$element);
          Muse.Utils.moveElementsOutsideViewport(f);
          c.each(f, function (d, f) {
            var h = c(f);
            if (h.is(a)) return !1;
            h = Math.round(h.outerWidth() - h.innerWidth());
            h > 0 && (b.chosenMinWidth += h);
            return !0;
          });
          Muse.Utils.moveElementsInsideViewport(b.$element);
          Muse.Utils.moveElementsInsideViewport(f);
        }
        d.push(b.chosenMinWidth);
      }
    });
    return d;
  };
  Muse.Utils.changeElementsDisplay = function (a) {
    var b;
    a.each(function () {
      b = c(this);
      b.css("display") === "none" &&
        (b.css("display", "block"), b.attr("data-display-attr-change", "true"));
    });
  };
  Muse.Utils.resetElementsDisplay = function (a) {
    var b;
    a.each(function () {
      b = c(this);
      b.attr("data-display-attr-change") === "true" &&
        (b.css("display", ""),
        b.css("display") !== "none" && b.css("display", "none"),
        b.removeAttr("data-display-attr-change"));
    });
  };
  Muse.Utils.isValueWithinTolerance = function (a, b, c) {
    return a === b
      ? !0
      : !isNaN(a) && !isNaN(b) && Math.abs(a - b) <= c
      ? !0
      : !1;
  };
  Muse.Utils.getMinWidthOfParts = function (a, b, d) {
    function g(a) {
      var b = a.outerWidth() - a.innerWidth(),
        c = a.innerWidth();
      b > 0 && (c += parseFloat(a.css("border-left-width")));
      return c;
    }
    function i(c) {
      var g = c[0].getBoundingClientRect(),
        c = { left: g.left, right: g.right };
      if (
        d &&
        b.attr("data-contentlayout") === "stack" &&
        b.attr("data-transitionStyle") === "horizontal"
      ) {
        var n = parseFloat(a.css("left"));
        if (n > 0) {
          var j = g.left - n,
            g = g.right - n;
          if (j > 0) c.left = j;
          if (g > 0) c.right = g;
        }
      }
      return c;
    }
    var l = -1;
    if (a && b && !c.isEmptyObject(a) && !c.isEmptyObject(b) && b[0] && a[0]) {
      Muse.Utils.changeElementsDisplay(a);
      Muse.Utils.changeElementsDisplay(a.parents());
      var k = a.attr("data-sizePolicy"),
        j = a.attr("data-pintopage"),
        m = parseFloat(a.css("min-width"));
      parseFloat(a.attr("data-min-width"));
      var n = !1,
        p = b.width(),
        o = b[0].getBoundingClientRect(),
        q = g(a),
        r = i(a),
        s = a.outerWidth() - a.innerWidth();
      m > 0 &&
        ((k = "fixed"),
        (q = m + s),
        (n = !0),
        j === void 0 && (j = "page_fluidx"));
      if (k === "fixed")
        switch (j) {
          case "page_fluidx":
            k = -1;
            o.left <= r.left
              ? ((o = r.left - o.left), o >= 0 && (k = o / p))
              : r.left - o.left < 2 && (k = 0);
            k >= 0 &&
              (Muse.Utils.isValueWithinTolerance(k, 1, 1.0e-4)
                ? (l = 0)
                : k < 1 && (l = q / (1 - k)));
            break;
          case "page_fixedLeft":
            n ||
              ((p = -1),
              o.left <= r.left
                ? (p = r.left - o.left)
                : r.left - o.left < 2 && (p = 0),
              p >= 0 && (l = q + p));
            break;
          case "page_fixedRight":
            n ||
              ((p = -1),
              o.right >= r.right
                ? (p = o.right - r.right)
                : o.right - r.right < 2 && (p = 0),
              p >= 0 && (l = q + p));
            break;
          case "page_fixedCenter":
            n ||
              (p <= q
                ? (l = q)
                : r.left <= o.left || r.right >= o.right
                ? ((p = o.left - r.left),
                  (k = r.right - o.right),
                  p >= 0 && k <= 0
                    ? (l = q + (o.right - r.right))
                    : k >= 0 && p <= 0 && (l = q + (r.left - o.left)))
                : ((r = r.left + q / 2),
                  (o = o.left + p / 2),
                  (p = -1),
                  (p = r === o ? 0 : r < o ? o - r : r - o),
                  p >= 0 && (l = 2 * (q / 2 + p))));
        }
      Muse.Utils.resetElementsDisplay(a);
      Muse.Utils.resetElementsDisplay(a.parents());
    }
    return l;
  };
  Muse.Utils.getMinWidthForElement = function (a, b) {
    var c =
        a && a.length > 0 && a[0].style.minWidth !== ""
          ? parseFloat(a[0].style.minWidth)
          : 0,
      b = b || !1;
    if ((a && a.length > 0 && a[0].style.minWidth === "") || b) {
      if (Muse.Utils.isElementFixedSize(a) && !b) return c;
      var d = { responsive: {}, fixed: {} };
      d.responsive.ChildFluidPin = [];
      d.responsive.ChildFixedLeft = [];
      d.responsive.ChildFixedRight = [];
      d.responsive.ChildFixedCenter = [];
      d.fixed.ChildFluidPin = [];
      d.fixed.ChildFixedLeft = [];
      d.fixed.ChildFixedRight = [];
      d.fixed.ChildFixedCenter = [];
      d.ChildWithMinWidth = [];
      d.ChildWidgets = [];
      var i = [];
      Muse.Utils.classifyChildrens(a, d, b);
      i.push(
        Muse.Utils.computeMinWidthForFixedChilds(
          d.fixed.ChildFluidPin,
          "page_fluidx",
          !1,
          a
        )
      );
      i.push(
        Muse.Utils.computeMinWidthForFixedChilds(
          d.fixed.ChildFixedLeft,
          "page_fixedLeft",
          !1,
          a
        )
      );
      i.push(
        Muse.Utils.computeMinWidthForFixedChilds(
          d.fixed.ChildFixedRight,
          "page_fixedRight",
          !1,
          a
        )
      );
      i.push(
        Muse.Utils.computeMinWidthForFixedChilds(
          d.fixed.ChildFixedCenter,
          "page_fixedCenter",
          !1,
          a
        )
      );
      i.push(
        Muse.Utils.computeMinWidthForChildsWithMinWidth(d.ChildWithMinWidth, a)
      );
      i.push(Muse.Utils.computeMinWidthForWidgetChilds(d.ChildWidgets, a));
      (d = Muse.Utils.adjustMinWidthRespectToAllParents(a, i)) &&
        d.length > 0 &&
        (c = Math.max.apply(null, d));
    }
    return c;
  };
  Muse.Utils.buttonsMinWidthHelper = function () {
    Muse.Utils.setPageToMaxWidth();
    c(".Button").each(function () {
      var a = c(this),
        b = 0;
      !Muse.Utils.isElementFixedSize(a) &&
        b === 0 &&
        ((b = Muse.Utils.getMinWidthForElement(a, !1)),
        b > 0 && a.css("min-width", b));
      a.attr("data-visibility") === "changed"
        ? (a.css("visibility", ""), a.removeAttr("data-visibility"))
        : a.children() &&
          a.children().attr("data-visibility") === "changed" &&
          (a.children().css("visibility", ""),
          a.children().removeAttr("data-visibility"));
    });
    Muse.Utils.resetPageWidth();
  };
  Muse.Utils.makeButtonsVisibleAfterSettingMinWidth = function () {
    if (0 == c(".breakpoint").length) Muse.Utils.buttonsMinWidthHelper();
    else
      c("body").on("muse_bp_activate", function () {
        Muse.Utils.buttonsMinWidthHelper();
      });
  };
  Muse.Utils.attachIframesAndObjectsToResumeMedia = function (a) {
    var b = a.data("detached");
    if (b) {
      for (var d = b.length - 1; d >= 0; d--) {
        var g = b[d];
        !g.$next || g.$next.length == 0
          ? g.$parent.append(g.$node ? g.$node : g.html)
          : g.$next.before(g.$node ? g.$node : g.html);
        g.$next = g.$parent = g.$node = g.html = void 0;
      }
      a.data("detached", null);
    }
    if ((b = a.data("paused")))
      for (d = 0; d < b.length; d++) (g = b[d]), g.playFn(g.$node);
    c("iframe", a).each(function () {
      var a = c(this),
        b = a.attr("src"),
        d = a.data("src");
      "about:blank" == b && d && a.attr("src", d);
    });
    c("video", a).each(function () {
      if (this.play && this.getAttribute("autoplay") && this.paused)
        (this.currentTime = 0), this.play();
    });
  };
  Muse.Utils.VimeoVideoHelper = (function (a) {
    var b = [],
      c = function (a, b) {
        if (!0 == a.data("isReady")) b();
        else {
          var c = a.data("readyQueue");
          c || (c = []);
          c.push(b);
          a.data("readyQueue", c);
        }
      },
      d = function (a, c, d, g) {
        var h = a[0].contentWindow;
        g && b.push({ source: h, method: c, callbackFn: g });
        c = '"method": "' + c + '"';
        "undefined" != typeof d && null !== d && (c += '"value":"' + d + '"');
        h.postMessage("{" + c + "}", a.data("origin"));
      },
      i = function (b) {
        data = null;
        try {
          JSON && JSON.parse && (data = JSON.parse(b.data));
        } catch (c) {}
        var d = null;
        data && data.player_id && (d = a("#" + data.player_id));
        (!d || !d.length) &&
          a("iframe").each(function () {
            if (this.contentWindow == b.source) return (d = a(this)), !1;
          });
        return d;
      },
      l = function (a) {
        var c = null;
        try {
          JSON && JSON.parse && (c = JSON.parse(a.data));
        } catch (d) {}
        if (c) {
          if ("ready" == c.event) {
            var g = i(a);
            g.data("isReady", !0);
            g.data("origin", a.origin);
            var h = g.data("readyQueue");
            if (h && h.length) for (var l = 0; l < h.length; l++) h[l]();
            g.data("readyQueue", null);
          }
          for (l = 0; l < b.length; )
            (g = b[l]),
              g.source == a.source && g.method == c.method
                ? (g.callbackFn(c.value), b.splice(l, 1))
                : l++;
        }
      };
    window.addEventListener
      ? window.addEventListener("message", l, !1)
      : window.attachEvent("onmessage", l, !1);
    l = function () {};
    l.prototype.play = function (a) {
      c(a, function () {
        d(a, "play");
      });
    };
    l.prototype.pause = function (a) {
      c(a, function () {
        d(a, "pause");
      });
    };
    l.prototype.isPaused = function (a, b) {
      c(a, function () {
        d(a, "paused", null, b);
      });
    };
    l.prototype.seekTo = function (a, b) {
      c(a, function () {
        d(a, "seekTo", b);
      });
    };
    l.prototype.isAutoPlay = function (a) {
      a = a.attr("src").split("?");
      a.shift();
      for (var a = a.join("?").split("&"), b = 0; b < a.length; b++)
        if (a[b].match(/autoplay\s*=\s*1/gi)) return !0;
      return !1;
    };
    return new l();
  })(b);
  (function (a) {
    a(window);
    var b = a("html"),
      c = ["src"],
      d = ["hidpi-src", "src"],
      i = a(".hidpi_button"),
      l = function () {
        this._mode = "standard";
      };
    l.swapSources = function (a, b, c) {
      var d = a.attr("data-" + b);
      d &&
        !(
          "src" == b &&
          a.hasClass("ImageInclude") &&
          a.attr("src").indexOf("images/blank.gif") ==
            a.attr("src").length - 16 &&
          a.parents(".SlideShowWidget").length
        ) &&
        ("src" == c &&
          !a.attr("data-" + c) &&
          a.attr("data-" + c, a.attr("src")),
        a.attr("src", d));
    };
    l.isRetina = (function () {
      if (1.5 <= window.devicePixelRatio) return !0;
      if (
        window.matchMedia &&
        window.matchMedia(
          "(-webkit-min-device-pixel-ratio: 1.5),(min--moz-device-pixel-ratio: 1.5),(-o-min-device-pixel-ratio: 3/2),(min-resolution: 1.5dppx)"
        ).matches
      )
        return !0;
      return !1;
    })();
    l.shouldUseCookie = 0 < i.length;
    l.getResolutionPreference = function () {
      return Muse.Utils.readCookie("museresolution");
    };
    l.saveResolutionPreference = function (a) {
      Muse.Utils.createCookie("museresolution", a);
    };
    l.prototype.initializeHiDPIButton = function (b) {
      if (l.isRetina) {
        var c = this;
        i.filter(function () {
          return !a(this).data("initialized");
        })
          .each(function () {
            a(this).data("initialized", !0);
          })
          .removeClass("unavailable")
          .click(function () {
            switch (c._mode) {
              case "standard":
                c.hidpiMode(b);
                break;
              case "hidpi":
                c.standardMode(b);
                break;
              default:
                Muse.Assert.assert(!1, "Unknown mode: " + c._mode);
            }
          });
      }
    };
    l.prototype.activate = function (a) {
      this.initializeHiDPIButton(a);
      l.isRetina &&
      (!l.shouldUseCookie || "hidpi" == l.getResolutionPreference())
        ? this.hidpiMode(a)
        : this.standardMode(a);
    };
    l.prototype.getCurrentMode = function () {
      return this._mode;
    };
    l.prototype.setCurrentMode = function (a) {
      this._mode = a;
      if (l.isRetina) {
        switch (a) {
          case "standard":
            i.removeClass("on").addClass("off");
            break;
          case "hidpi":
            i.removeClass("off").addClass("on");
            break;
          default:
            Muse.Assert.assert(!1, "Unknown mode: " + a);
        }
        l.shouldUseCookie && l.saveResolutionPreference(a);
      }
    };
    l.prototype.standardMode = function (c) {
      this.setCurrentMode("standard");
      b.removeClass("hidpi");
      a("img", c).each(function () {
        l.swapSources(a(this), "src", "hidpi-src");
      });
    };
    l.prototype.hidpiMode = function (c) {
      this.setCurrentMode("hidpi");
      b.addClass("hidpi");
      a("img", c).each(function () {
        l.swapSources(a(this), "hidpi-src", "src");
      });
    };
    l.prototype.getDataSrcAttrName = function () {
      return "standard" == this._mode ? c : d;
    };
    a(window).data("ResolutionManager", new l());
  })(b);
  Muse.Utils.detectScreenResolution = function () {
    var a = c(window).data("ResolutionManager");
    if (0 < c(".breakpoint").length) {
      var b = {};
      c("body").on("muse_bp_activate", function (c, d, i) {
        c = i.attr("id");
        b[c] || (a.activate(i), (b[c] = !0));
      });
    } else a.activate();
  };
  Muse.Utils.createCookie = function (a, b, c) {
    if (c) {
      var d = new Date();
      d.setTime(d.getTime() + c * 864e5);
      c = "; expires=" + d.toGMTString();
    } else c = "";
    document.cookie = a + "=" + b + c + "; path=/";
  };
  Muse.Utils.readCookie = function (a) {
    a += "=";
    for (var b = document.cookie.split(";"), c = 0; c < b.length; c++) {
      for (var d = b[c]; d.charAt(0) == " "; ) d = d.substring(1, d.length);
      if (d.indexOf(a) == 0) return d.substring(a.length, d.length);
    }
    return null;
  };
  Muse.Utils.eraseCookie = function (a) {
    createCookie(a, "", -1);
  };
  Muse.Browser = {};
  Muse.Browser.domPrefixes = ["Webkit", "Moz", "O", "ms", "Khtml"];
  Muse.Browser.Features = {};
  Muse.Browser.Features.Touch = (function () {
    if (
      navigator.maxTouchPoints > 0 ||
      (window.matchMedia && window.matchMedia("(-moz-touch-enabled)").matches)
    )
      return {
        Start: "pointerDown",
        End: "pointerUp",
        Move: "pointerMove",
        Listener: function (a) {
          return function (b) {
            var c = b.originalEvent || b;
            if (c.pointerType != c.POINTER_TYPE_MOUSE)
              return a.apply(this, arguments);
          };
        },
      };
    else
      for (var a = 0, b = Muse.Browser.domPrefixes.length; a < b; a++) {
        var c = Muse.Browser.domPrefixes[a];
        if (
          c + "MaxTouchPoints" in navigator &&
          navigator[c + "MaxTouchPoints"]
        )
          return (
            (c = c.toUpperCase()),
            {
              Start: c + "PointerDown",
              End: c + "PointerUp",
              Move: c + "PointerMove",
              Listener: function (a) {
                return function (b) {
                  var d = b.originalEvent || b;
                  if (d.pointerType != d[c + "POINTER_TYPE_MOUSE"])
                    return a.apply(this, arguments);
                };
              },
            }
          );
      }
    try {
      return (
        document.createEvent("TouchEvent"),
        {
          Start: "touchstart",
          End: "touchend",
          Move: "touchmove",
          Listener: function (a) {
            return a;
          },
        }
      );
    } catch (d) {}
    return !1;
  })();
  Muse.Browser.Features.checkCSSFeature = function (a, b) {
    var c = Muse.Utils.toCamelCase(a),
      b = b || document.createElement("div");
    if (c in b.style) return !0;
    for (
      var c = c.charAt(0).toUpperCase() + c.substr(1),
        d = 0,
        i = Muse.Browser.domPrefixes.length;
      d < i;
      d++
    )
      if (Muse.Browser.domPrefixes[d] + c in b.style)
        return Muse.Browser.domPrefixes[d];
    return !1;
  };
  Muse.Browser.Features.checkCSSValueCompatibility = function (a, b) {
    var c = document.createElement("div"),
      a = Muse.Utils.toCamelCase(a),
      d = Muse.Browser.Features.checkCSSFeature(a, c);
    if (d) d !== !0 && (a = d + a.charAt(0).toUpperCase() + a.substr(1));
    else return !1;
    d = c.style[a];
    c.style[a] = b;
    if (c.style[a] !== d || b === d) return !0;
    for (var i = 0; i < Muse.Browser.domPrefixes.length; i++) {
      var l = "-" + Muse.Browser.domPrefixes[i].toLowerCase() + "-" + b;
      c.style[a] = l;
      if (c.style[a] !== d) return Muse.Browser.domPrefixes[i];
    }
    return !1;
  };
  Muse.Browser.Bugs = {};
  Muse.Browser.Bugs.ClearNeedsOuterWidth = (function () {
    var a = document.createElement("div");
    a.id = "mbbcnow00";
    a.innerHTML =
      '<div>a</div><style type="text/css">#mbbcnow00{position:absolute;top:-9999px;left:-9999px;visibility:hidden;} #mbbcnow01{width:1px;margin-right:-9999px;float:left} #mbbcnow02{clear:left;}</style>';
    var b = document.createElement("div"),
      c = document.createElement("div");
    document.body.appendChild(a);
    a.appendChild(b);
    a.appendChild(c);
    b.innerHTML = "a";
    b.id = "mbbcnow01";
    c.innerHTML = "b";
    c.id = "mbbcnow02";
    b = c.getBoundingClientRect().top - b.getBoundingClientRect().top;
    document.body.removeChild(a);
    return b < 1;
  })();
  Muse.Browser.Bugs.CannotHandleClearBoth =
    b.browser.msie && 7 == b.browser.version;
  Muse.Browser.Bugs.ScrollWidthHeightIncludesBorder = (function () {
    var a = !1,
      b = c("<div>")
        .css({
          border: "1px solid #000000;",
          width: 100,
          height: 100,
          position: "absolute",
          top: -99999,
          left: -99999,
          padding: 0,
          margin: 0,
          overflow: "auto",
        })
        .appendTo(document.body)[0];
    b.scrollHeight !== b.clientHeight && (a = !0);
    c(b).remove();
    return a;
  })();
  (function (a) {
    var b = a(window),
      c = a("body"),
      d = function () {
        this.$verticalSpacer = null;
        this.enabled = !1;
        this.contentBelowSpacer = this.contentAboveSpacer = this.minHeight = 0;
      };
    d.prototype.init = function (d) {
      this.$verticalSpacer = a(".verticalspacer", d);
      if (0 != this.$verticalSpacer.length) {
        this.enabled = !0;
        var g = Muse.Utils.getCSSIntValue(this.$verticalSpacer, "min-height");
        this.$verticalSpacer.css("min-height", "");
        this.minHeight = Muse.Utils.getCSSIntValue(
          this.$verticalSpacer,
          "min-height"
        );
        this.$verticalSpacer.css("min-height", g);
        this.pageMinHeight =
          Muse.Utils.getCSSIntValue(d, "padding-top") +
          Muse.Utils.getCSSIntValue(d, "min-height") +
          Muse.Utils.getCSSIntValue(d, "padding-bottom");
        this.contentAboveSpacer = parseInt(
          this.$verticalSpacer.data("content-above-spacer")
        );
        this.contentBelowSpacer = parseInt(
          this.$verticalSpacer.data("content-below-spacer")
        );
        var j = this,
          k = !0,
          i = [],
          l = !0;
        b.resize(function () {
          if (k) {
            var a = b.width();
            l
              ? (i.splice(0, i.length),
                i.push(a),
                (l = !1),
                setTimeout(function () {
                  l = !0;
                }, 200))
              : i[i.length - 1] != a &&
                (i.push(a),
                3 < i.length &&
                  i[i.length - 3] == i[i.length - 1] &&
                  (c.addClass("always_vert_scroll"), (k = !1)));
          }
          j.doUpdate();
        });
        this.doUpdate();
      }
    };
    d.prototype.doUpdate = function () {
      if (this.enabled && 0 != this.$verticalSpacer.length) {
        var d = Math.round(
            this.contentAboveSpacer - this.$verticalSpacer.offset().top
          ),
          g =
            this.$verticalSpacer.offset().top + this.contentBelowSpacer <
            this.pageMinHeight;
        this.$verticalSpacer.css({
          height:
            "calc(" +
            (a.browser.SafariMobile ? b.height() + "px" : "100vh") +
            " - " +
            (this.contentAboveSpacer + this.contentBelowSpacer) +
            "px " +
            (0 < d ? " + " : " - ") +
            Math.abs(d) +
            "px)",
          "min-height": g ? d + this.minHeight + "px" : "",
        });
        d =
          (g
            ? d + this.minHeight
            : Muse.Utils.getCSSIntValue(this.$verticalSpacer, "min-height")) <
          this.$verticalSpacer.height();
        g = !1;
        d && !c.hasClass("no_vert_scroll")
          ? (c.addClass("no_vert_scroll"),
            (g = !0),
            a(window).trigger("resize"))
          : !d &&
            c.hasClass("no_vert_scroll") &&
            (c.removeClass("no_vert_scroll"), (g = !0));
        g && this.$verticalSpacer.css("height");
      }
    };
    var i = function () {
      this.pendingRequest = void 0;
      this.enabled = !0;
    };
    i.prototype.init = function (d) {
      this.$spacer = a(".verticalspacer", d);
      this.$page = d;
      this.spacerMinHeight = Muse.Utils.getCSSIntValue(
        this.$spacer,
        "min-height"
      );
      this.originalOffsetTop = Muse.Utils.tryParse(
        this.$spacer.attr("data-offset-top"),
        parseInt,
        0
      );
      c.removeClass("no_vert_scroll");
      this.$spacer.removeAttr("style");
      this.$spacer.height() < this.spacerMinHeight &&
        this.$spacer.height(Math.floor(this.spacerMinHeight + 1));
      this.spacerHeight = this.$spacer.height();
      this.pageMarginTop =
        Muse.Utils.getCSSIntValue(c, "padding-top") +
        Muse.Utils.getCSSIntValue(c, "margin-top");
      this.pageMarginBottom =
        Muse.Utils.getCSSIntValue(c, "padding-bottom") +
        Muse.Utils.getCSSIntValue(c, "margin-bottom");
      this.pageResizeWatchEnabled = !0;
      this.alwaysVertScroll = c.hasClass("always_vert_scroll");
      var g = this;
      this.calculateInitialSpacerHeight();
      this.$page.watch("height", function () {
        g.onPageHeightChanged();
      });
      b.resize(function () {
        g.doUpdate();
      });
      this.initialized = !0;
      this.doUpdate(this.pendingRequest);
    };
    i.prototype.updateScrollClass = function (a) {
      if (!this.alwaysVertScroll) {
        var a = this.spacerMinHeight < Math.floor(a * 100) / 100,
          b = !1;
        a && !c.hasClass("no_vert_scroll")
          ? (c.addClass("no_vert_scroll"), (b = !0))
          : !a &&
            c.hasClass("no_vert_scroll") &&
            (c.removeClass("no_vert_scroll"), (b = !0));
        b && this.$spacer.css("height");
      }
    };
    i.prototype.doUpdate = function (a) {
      if (this.enabled)
        if (this.initialized) {
          parseInt(a) || (a = 0);
          var c = this.$page.outerHeight(!0),
            d = c - this.spacerHeight,
            a = Math.max(
              0,
              b.height() - this.pageMarginTop - this.pageMarginBottom - d - a
            );
          a < this.spacerMinHeight &&
            (a =
              this.spacerMinHeight +
              this.originalOffsetTop -
              this.$spacer.offset().top);
          if (a != this.spacerHeight) {
            this.pageResizeWatchEnabled = !1;
            this.updateScrollClass(a);
            this.$spacer.css("height", a);
            if (a < this.spacerHeight && c == this.$page.outerHeight(!0))
              (a = this.spacerHeight),
                this.updateScrollClass(a),
                this.$spacer.css("height", a);
            this.pageResizeWatchEnabled = !0;
          }
          return (this.spacerHeight = a);
        } else this.pendingRequest = a;
    };
    i.prototype.calculateInitialSpacerHeight = function () {
      for (var a = 0, b = 0; b++ < 20; ) {
        var c = this.doUpdate();
        if (c <= a) break;
        a = c;
      }
    };
    i.prototype.onPageHeightChanged = function (a) {
      this.pageResizeWatchEnabled && this.doUpdate(a);
    };
    i.prototype.enable = function () {
      this.enabled = !0;
    };
    i.prototype.disable = function () {
      this.enabled = !1;
    };
    a("body").append('<div class="muse_check_css"></div>');
    var l = null,
      l = a(".muse_check_css"),
      k = l.css("height", "100vh").height(),
      j = l.css("height", "calc(100vh + 300px)").height();
    0 < k && 0 < j && 300 == j - k
      ? (l.remove(), (l = new d()))
      : (a("html").removeClass("css_verticalspacer"), (l = new i()));
    b.data("stickyFooter", l);
  })(b);
  Muse.Utils.requestAnimationFrame = (function () {
    return (
      (window.mozRequestAnimationFrame &&
        window.mozRequestAnimationFrame.bind(window)) ||
      (window.requestAnimationFrame &&
        window.requestAnimationFrame.bind(window)) ||
      (window.webkitRequestAnimationFrame &&
        window.webkitRequestAnimationFrame.bind(window)) ||
      function (a) {
        window.setTimeout(a, 20);
      }
    );
  })();
  Muse.Utils.animationFrameFx = (function (a) {
    var b = a.fx;
    a.extend(b, a.fx);
    var c,
      d = a(window).data("stickyFooter"),
      i = function () {
        c && (Muse.Utils.requestAnimationFrame(i), b.tick(), d.doUpdate());
      };
    b.timer = function (b) {
      b() && a.timers.push(b) && !c && ((c = !0), i());
    };
    b.stop = function () {
      c = !1;
    };
    a.fn.animationFrameFx = b;
  })(b);
});
(function () {
  if (!("undefined" == typeof Muse || "undefined" == typeof Muse.assets)) {
    var c = (function (a, b) {
      for (var c = 0, d = a.length; c < d; c++) if (a[c] == b) return c;
      return -1;
    })(Muse.assets.required, "museutils.js");
    if (-1 != c) {
      Muse.assets.required.splice(c, 1);
      for (
        var c = document.getElementsByTagName("meta"), b = 0, d = c.length;
        b < d;
        b++
      ) {
        var a = c[b];
        if ("generator" == a.getAttribute("name")) {
          "2018.1.1.386" != a.getAttribute("content") &&
            Muse.assets.outOfDate.push("museutils.js");
          break;
        }
      }
    }
  }
})();
