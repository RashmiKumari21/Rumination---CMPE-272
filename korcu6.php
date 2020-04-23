<?php
if (isset($_COOKIE['services']))
{
    if (array_key_exists("Korean_Cuisine_Course",$_COOKIE['services']))
    {
        $data=$_COOKIE['services'];
        $newValue=$data['Korean_Cuisine_Course']+1;
        setcookie('services[Korean_Cuisine_Course]',$newValue);
    }
    else
    {
        setcookie('services[Korean_Cuisine_Course]',1);
    }
    
}else{
    setcookie('services[Korean_Cuisine_Course]',1);
}
?>
<html class="nojs html css_verticalspacer" lang="en-US">
  <head>
    <meta http-equiv="Content-type" content="text/html;charset=UTF-8" />
    <meta name="generator" content="2018.1.1.386" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <script type="text/javascript">
      // Update the 'nojs'/'js' class on the html node
      document.documentElement.className = document.documentElement.className.replace(
        /\bnojs\b/g,
        "js"
      );

      // Check that all required assets are uploaded and up-to-date
      if (typeof Muse == "undefined") window.Muse = {};
      window.Muse.assets = {
        required: [
          "museutils1.js",
          "museconfig.js",
          "jquery.watch.js",
          "require1.js",
          "korcu6.css",
        ],
        outOfDate: [],
      };
    </script>

    <title>korcu6</title>
    <!-- CSS -->
    <link
      rel="stylesheet"
      type="text/css"
      href="css/site_global.css?crc=444006867"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="css/korcu6.css?crc=4043144102"
      id="pagesheet"
    />
  </head>
  <body>
    <div class="clearfix borderbox" id="page">
      <!-- group -->
      <div class="clip_frame grpelem" id="u2204">
        <!-- image -->
        <img
          class="block"
          id="u2204_img"
          src="images/korcu6-crop-u2204.jpg?crc=320855137"
          alt=""
          data-heightwidthratio="0.9787234042553191"
          data-image-width="517"
          data-image-height="506"
        />
      </div>
      <div class="clearfix grpelem" id="pu2206-13">
        <!-- group -->
        <div class="clearfix grpelem" id="u2206-13">
          <!-- content -->
          <p>
            In this course you will be learning how how to make Korean Cuisine.
          </p>
          <p>&nbsp;</p>
          <p>
            We will cover major kinds and famous delicacies of the country. You
            will learn techniques to cook the cuisine and understand the things
            to keep in mind. Learn about spices and Herbs related to the cuisine
            and play with what you learned.
          </p>
          <p>&nbsp;</p>
          <p>
            Discover, Create and Enjoy new delicacies. If you have passion for
            food you are in the right place.
          </p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
        <div
          class="Button clearfix grpelem"
          id="buttonu2207"
          data-visibility="changed"
          style="visibility: hidden;"
        >
        <a href="contact.php" style="display: block">
          <!-- container box -->
          <div class="clearfix grpelem" id="u2208-4">
            <!-- content -->
            <p>Interested</p>
          </div>
        </div>
      </div>
      <div
        class="verticalspacer"
        data-offset-top="528"
        data-content-above-spacer="528"
        data-content-below-spacer="0"
        data-sizePolicy="fixed"
        data-pintopage="page_fixedLeft"
      ></div>
    </div>
    <!-- Other scripts -->
    <script type="text/javascript">
      // Decide whether to suppress missing file error or not based on preference setting
      var suppressMissingFileError = false;
    </script>
    <script type="text/javascript">
      window.Muse.assets.check = function (c) {
        if (!window.Muse.assets.checked) {
          window.Muse.assets.checked = !0;
          var b = {},
            d = function (a, b) {
              if (window.getComputedStyle) {
                var c = window.getComputedStyle(a, null);
                return (c && c.getPropertyValue(b)) || (c && c[b]) || "";
              }
              if (document.documentElement.currentStyle)
                return (
                  ((c = a.currentStyle) && c[b]) ||
                  (a.style && a.style[b]) ||
                  ""
                );
              return "";
            },
            a = function (a) {
              if (a.match(/^rgb/))
                return (
                  (a = a
                    .replace(/\s+/g, "")
                    .match(/([\d\,]+)/gi)[0]
                    .split(",")),
                  (parseInt(a[0]) << 16) +
                    (parseInt(a[1]) << 8) +
                    parseInt(a[2])
                );
              if (a.match(/^\#/)) return parseInt(a.substr(1), 16);
              return 0;
            },
            f = function (f) {
              for (
                var g = document.getElementsByTagName("link"), j = 0;
                j < g.length;
                j++
              )
                if ("text/css" == g[j].type) {
                  var l = (g[j].href || "").match(
                    /\/?css\/([\w\-]+\.css)\?crc=(\d+)/
                  );
                  if (!l || !l[1] || !l[2]) break;
                  b[l[1]] = l[2];
                }
              g = document.createElement("div");
              g.className = "version";
              g.style.cssText = "display:none; width:1px; height:1px;";
              document.getElementsByTagName("body")[0].appendChild(g);
              for (j = 0; j < Muse.assets.required.length; ) {
                var l = Muse.assets.required[j],
                  k = l.match(/([\w\-\.]+)\.(\w+)$/),
                  i = k && k[1] ? k[1] : null,
                  k = k && k[2] ? k[2] : null;
                switch (k.toLowerCase()) {
                  case "css":
                    i = i.replace(/\W/gi, "_").replace(/^([^a-z])/gi, "_$1");
                    g.className += " " + i;
                    i = a(d(g, "color"));
                    k = a(d(g, "backgroundColor"));
                    i != 0 || k != 0
                      ? (Muse.assets.required.splice(j, 1),
                        "undefined" != typeof b[l] &&
                          (i != b[l] >>> 24 || k != (b[l] & 16777215)) &&
                          Muse.assets.outOfDate.push(l))
                      : j++;
                    g.className = "version";
                    break;
                  case "js":
                    j++;
                    break;
                  default:
                    throw Error("Unsupported file type: " + k);
                }
              }
              c
                ? c().jquery != "1.8.3" &&
                  Muse.assets.outOfDate.push("jquery-1.8.3.min.js")
                : Muse.assets.required.push("jquery-1.8.3.min.js");
              g.parentNode.removeChild(g);
            };
          location &&
          location.search &&
          location.search.match &&
          location.search.match(/muse_debug/gi)
            ? setTimeout(function () {
                f(!0);
              }, 5e3)
            : f();
        }
      };
      var muse_init = function () {
        require.config({ baseUrl: "" });
        require(["jquery", "museutils", "whatinput", "jquery.watch"], function (
          c
        ) {
          var $ = c;
          $(document).ready(function () {
            try {
              window.Muse.assets.check($); /* body */
              Muse.Utils.transformMarkupToFixBrowserProblemsPreInit(); /* body */
              Muse.Utils.prepHyperlinks(true); /* body */
              Muse.Utils.makeButtonsVisibleAfterSettingMinWidth(); /* body */
              Muse.Utils.fullPage("#page"); /* 100% height page */
              Muse.Utils.showWidgetsWhenReady(); /* body */
              Muse.Utils.transformMarkupToFixBrowserProblems(); /* body */
            } catch (b) {
              if (
                (b && "function" == typeof b.notify
                  ? b.notify()
                  : Muse.Assert.fail("Error calling selector function: " + b),
                false)
              )
                throw b;
            }
          });
        });
      };
    </script>
    <!-- RequireJS script -->
    <script
      src="scripts/require1.js?crc=4177726516"
      type="text/javascript"
      async
      data-main="scripts/museconfig.js?crc=3936894949"
      onload="if (requirejs) requirejs.onError = function(requireType, requireModule) { if (requireType && requireType.toString && requireType.toString().indexOf && 0 <= requireType.toString().indexOf('#scripterror')) window.Muse.assets.check(); }"
      onerror="window.Muse.assets.check();"
    ></script>
  </body>
</html>
