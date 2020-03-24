<?php session_start();

if( $_SESSION['userData']['userName'] != "password" ){
header("location:login.php");
        exit;
    
    
}

?>
<html class="nojs html css_verticalspacer">
 <head>
 
<a href="index.php"> <img alt="" src=" logo.png"
	align="left"></a>
<br>
<br>


  <meta http-equiv="Content-type" content="text/html;charset=UTF-8"/>
  <meta name="generator" content="2018.1.1.386"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  
  <script type="text/javascript">
   // Update the 'nojs'/'js' class on the html node
document.documentElement.className = document.documentElement.className.replace(/\bnojs\b/g, 'js');

// Check that all required assets are uploaded and up-to-date
if(typeof Muse == "undefined") window.Muse = {}; window.Muse.assets = {"required":["museutils.js", "museconfig.js", "jquery.watch.js", "jquery.musemenu.js", "require.js", "protected.css"], "outOfDate":[]};
</script>
  
  <title>Protected</title>
  <!-- CSS -->
  <link rel="stylesheet" type="text/css" href="css/site_global.css?crc=4235893186"/>
  <link rel="stylesheet" type="text/css" href="css/protected.css?crc=305957045" id="pagesheet"/>
  <!-- JS includes -->
  <!--[if lt IE 9]>
  <script src="scripts/html5shiv.js?crc=4241844378" type="text/javascript"></script>
  <![endif]-->
   </head>
 <body>

  <div class="clearfix borderbox" id="page"><!-- group -->
  <a href="logout.php" style="margin-top: 51px;color: white;float: right;margin-right: 29px;"> Logout</a>
   <div class="grpelem" id="u32006"><!-- content -->
    <div class="fluid_height_spacer"></div>
   </div>
   <nav class="MenuBar clearfix grpelem" id="menuu32018"><!-- vertical box -->
    <div class="MenuItemContainer clearfix colelem" id="u32019" style="color:white;"><!-- horizontal box -->
    <a href="Logout.php" style="color: black; float: right"> Logout</a>
<h1 style="margin-right: 193px; width:131px">Registered users are</h1>
     <div class="MenuItem MenuItemWithSubMenu borderbox clearfix grpelem" id="u32020"><!-- horizontal box -->
     
      <!-- m_editable region-id="editable-static-tag-U32022-BP_infinity" template="protected.html" data-type="html" data-ice-options="disableImageResize,link,clickable,txtStyleTarget" -->
      <div class="MenuItemLabel clearfix grpelem" id="u32022-4" data-muse-uid="U32022" data-muse-type="txt_frame" data-IBE-flags="txtStyleSrc"><!-- content -->
       <p>Mary Smith</p>
      </div>
      <!-- /m_editable -->
     </div>
    </div>
   </nav>
   <nav class="MenuBar clearfix grpelem" id="menuu32320"><!-- vertical box -->
    <div class="MenuItemContainer clearfix colelem" id="u32321"><!-- horizontal box -->
     <div class="MenuItem MenuItemWithSubMenu borderbox clearfix grpelem" id="u32324"><!-- horizontal box -->
      <!-- m_editable region-id="editable-static-tag-U32326-BP_infinity" template="protected.html" data-type="html" data-ice-options="disableImageResize,link,clickable,txtStyleTarget" -->
      <div class="MenuItemLabel clearfix grpelem" id="u32326-4" data-muse-uid="U32326" data-muse-type="txt_frame" data-IBE-flags="txtStyleSrc"><!-- content -->
       <p>John Wang</p>
      </div>
      <!-- /m_editable -->
     </div>
    </div>
   </nav>
   <nav class="MenuBar clearfix grpelem" id="menuu32347"><!-- vertical box -->
    <div class="MenuItemContainer clearfix colelem" id="u32348"><!-- horizontal box -->
     <div class="MenuItem MenuItemWithSubMenu borderbox clearfix grpelem" id="u32351"><!-- horizontal box -->
      <!-- m_editable region-id="editable-static-tag-U32354-BP_infinity" template="protected.html" data-type="html" data-ice-options="disableImageResize,link,clickable,txtStyleTarget" -->
      <div class="MenuItemLabel clearfix grpelem" id="u32354-4" data-muse-uid="U32354" data-muse-type="txt_frame" data-IBE-flags="txtStyleSrc"><!-- content -->
       <p>Alex Bington</p>
      </div>
      <!-- /m_editable -->
     </div>
    </div>
   </nav>
   <div class="verticalspacer" data-offset-top="234" data-content-above-spacer="270" data-content-below-spacer="301" data-sizePolicy="fixed" data-pintopage="page_fixedLeft"></div>
  </div>
  <!-- Other scripts -->
  <script type="text/javascript">
   // Decide whether to suppress missing file error or not based on preference setting
var suppressMissingFileError = false
</script>
  <script type="text/javascript">
   window.Muse.assets.check=function(c){if(!window.Muse.assets.checked){window.Muse.assets.checked=!0;var b={},d=function(a,b){if(window.getComputedStyle){var c=window.getComputedStyle(a,null);return c&&c.getPropertyValue(b)||c&&c[b]||""}if(document.documentElement.currentStyle)return(c=a.currentStyle)&&c[b]||a.style&&a.style[b]||"";return""},a=function(a){if(a.match(/^rgb/))return a=a.replace(/\s+/g,"").match(/([\d\,]+)/gi)[0].split(","),(parseInt(a[0])<<16)+(parseInt(a[1])<<8)+parseInt(a[2]);if(a.match(/^\#/))return parseInt(a.substr(1),
16);return 0},f=function(f){for(var g=document.getElementsByTagName("link"),j=0;j<g.length;j++)if("text/css"==g[j].type){var l=(g[j].href||"").match(/\/?css\/([\w\-]+\.css)\?crc=(\d+)/);if(!l||!l[1]||!l[2])break;b[l[1]]=l[2]}g=document.createElement("div");g.className="version";g.style.cssText="display:none; width:1px; height:1px;";document.getElementsByTagName("body")[0].appendChild(g);for(j=0;j<Muse.assets.required.length;){var l=Muse.assets.required[j],k=l.match(/([\w\-\.]+)\.(\w+)$/),i=k&&k[1]?
k[1]:null,k=k&&k[2]?k[2]:null;switch(k.toLowerCase()){case "css":i=i.replace(/\W/gi,"_").replace(/^([^a-z])/gi,"_$1");g.className+=" "+i;i=a(d(g,"color"));k=a(d(g,"backgroundColor"));i!=0||k!=0?(Muse.assets.required.splice(j,1),"undefined"!=typeof b[l]&&(i!=b[l]>>>24||k!=(b[l]&16777215))&&Muse.assets.outOfDate.push(l)):j++;g.className="version";break;case "js":j++;break;default:throw Error("Unsupported file type: "+k);}}c?c().jquery!="1.8.3"&&Muse.assets.outOfDate.push("jquery-1.8.3.min.js"):Muse.assets.required.push("jquery-1.8.3.min.js");
g.parentNode.removeChild(g);if(Muse.assets.outOfDate.length||Muse.assets.required.length)g="Some files on the server may be missing or incorrect. Clear browser cache and try again. If the problem persists please contact website author.",f&&Muse.assets.outOfDate.length&&(g+="\nOut of date: "+Muse.assets.outOfDate.join(",")),f&&Muse.assets.required.length&&(g+="\nMissing: "+Muse.assets.required.join(",")),suppressMissingFileError?(g+="\nUse SuppressMissingFileError key in AppPrefs.xml to show missing file error pop up.",console.log(g)):alert(g)};location&&location.search&&location.search.match&&location.search.match(/muse_debug/gi)?
setTimeout(function(){f(!0)},5E3):f()}};
var muse_init=function(){require.config({baseUrl:""});require(["jquery","museutils","whatinput","jquery.musemenu","jquery.watch"],function(c){var $ = c;$(document).ready(function(){try{
window.Muse.assets.check($);/* body */
Muse.Utils.transformMarkupToFixBrowserProblemsPreInit();/* body */
Muse.Utils.prepHyperlinks(true);/* body */
Muse.Utils.makeButtonsVisibleAfterSettingMinWidth();/* body */
Muse.Utils.initWidget('.MenuBar', ['#bp_infinity'], function(elem) { return $(elem).museMenu(); });/* unifiedNavBar */
Muse.Utils.fullPage('#page');/* 100% height page */
Muse.Utils.showWidgetsWhenReady();/* body */
Muse.Utils.transformMarkupToFixBrowserProblems();/* body */
}catch(b){if(b&&"function"==typeof b.notify?b.notify():Muse.Assert.fail("Error calling selector function: "+b),false)throw b;}})})};

</script>
  <!-- RequireJS script -->
  <script src="scripts/require.js?crc=4177726516" type="text/javascript" async data-main="scripts/museconfig.js?crc=3936894949" onload="if (requirejs) requirejs.onError = function(requireType, requireModule) { if (requireType && requireType.toString && requireType.toString().indexOf && 0 <= requireType.toString().indexOf('#scripterror')) window.Muse.assets.check(); }" onerror="window.Muse.assets.check();"></script>
   </body>
</html>
