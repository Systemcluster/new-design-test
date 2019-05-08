webpackHotUpdate("styles",{

/***/ "./pages/articles.scss":
/*!*****************************!*\
  !*** ./pages/articles.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"header":"_2pxO1cT19606G0U-rDjmRi","anibar":"_2ykyrOrpnQzKjJ6SWM6qhZ","swoosh-bg":"_3QgDi3SMb6g0evNoFlgQfC","bar":"_2XyHLT0GHt9isuxJiGfJBS","barbg":"_1Ok34v_BvtHjWaExNOb_eM","title":"_2UdjzTcrJo4YxMJLb71xIw","avatar":"_3VHDfXkehynHbEsfNYBfrd","fade-in":"_2Zx9Z2jb5g-7iXToU6MSwo","flicker-by":"_36sZqUxkEr-HwStoJ14Ntd","flicker-bx-1":"-jSkDcfKM56BchTJ3qGZG","flicker-bx-2":"YJ5IN_1Z9lM8x1n6wBW8u","flicker-y-1":"_2FoT70dZT0-KC-2uXgFrQQ","flicker-y-2":"roZMxZ5sIH7Z_zrIOHrea"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1557347143446");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.afb52f584c38123fe1c4.hot-update.js.map