var sbplus=function(){function e(){$.fn.haveCoreFeatures()?$.get("assets/sbplus.xml",function(e){u.data=$(e),t()}).fail(function(){sbplusError.show("Table of Contents XML file (sbplus.xml) is not found!","Please make sure the XML file exists in the assets directory and compatible with Storybook Plus version 3.")}):$.get(l.sbplus_root_directory+"scripts/templates/nosupport.tpl",function(e){o(e)}).fail(function(){sbplusError.show("Unsupported web browser!","Your web browser does not support current version of Storybook Plus. In addition, nosupport.tpl file is not found. nosuppory.tpl file contains information to display in regard to unsupported web browsers.")})}function t(){var e=u.data.find("storybook"),t=u.data.find("setup");u.title=t.find("title").text(),u.subtitle=t.find("subtitle").text(),u.author=t.find("author").attr("name"),u.authorBio=t.find("author").text(),u.length=t.find("length").text(),u.generalInfo=t.find("generalInfo").text(),u.postfix=t.attr("postfix"),u.section=u.data.find("section"),c.accent=$.fn.isEmpty(e.attr("accent"))?c.accent:e.attr("accent"),c.slideFormat=$.fn.isEmpty(e.attr("slideFormat"))?c.slideFormat:e.attr("slideFormat"),c.analytics=$.fn.isEmpty(e.attr("analytics"))?c.analytics:e.attr("analytics"),$.get(l.sbplus_root_directory+"scripts/templates/sbplus.tpl",function(e){s(e)}).fail(function(){sbplusError.show("Template file not found!","sbplus.tpl file not found in the templates directory.")})}function n(e){e="undefined"!=typeof e,$(".splashscreen").fadeOut("fast",function(){$(".main_content_wrapper").css("display","block").fadeIn(500,function(){if($(this).removeClass("hide"),$(".title_bar .title").html(u.title),$(".author").html(u.author),sbplusTableOfContents.get(u,c),e){var t=$.fn.getCookie("sbplus-"+$.fn.getRootDirectory()).split(":"),n=Number(t[0]),s=t[1];sbplusSlide.get(u.section,c,n,s,l)}else sbplusSlide.get(u.section,c,0,0,l);sbplusMenu.get(u),r(),$(window).resize(function(){r()})}),$(this).remove(),e&&sbplusSplashScreen.unbindResumePresentationBtn(),sbplusSplashScreen.unbindStartPresentationBtn()})}function s(e){$(document).attr("title",u.title),d.html(e),sbplusSplashScreen.get(l,u,c),sbplusControls.init(u.section,c),i()}function o(e){d.html(e)}function i(){var e=document.createElement("script");e.type="text/javascript",e.src=l.sbplus_root_directory+"scripts/libs/videojs/video.js",document.getElementsByTagName("head")[0].appendChild(e);var t=document.createElement("link");t.rel="stylesheet",t.href=l.sbplus_root_directory+"scripts/libs/videojs/video-js.min.css",document.getElementsByTagName("head")[0].appendChild(t),a()}function a(){$.fn.setCookie("sbplus-vjs-autoplay",1),$.fn.setCookie("sbplus-vjs-volume",.8),$.fn.setCookie("sbplus-vjs-playbackrate",1),$.fn.setCookie("sbplus-vjs-enabledSubtitles",0)}function r(){var e=$(window).outerWidth(),t=$(window).outerHeight(),n=$(".title_bar").outerHeight(),s=$(".control_bar_wrapper").outerHeight(),o=$(".container .content").outerHeight(),i=$(".side_panel .topbar").outerHeight(),a=t-(n+s+o);$(".main_content").css("height",t-(n+o)),$(".main_content .notes").css("height",t-(n+s+o)),e>=888?($(".side_panel").css("margin-top",-1*o),$(".tableOfContents").css("height",o+a+s-i-1)):($(".side_panel").css("margin-top",0),$(".tableOfContents").css("height",a+s-i-1))}var l,c={accent:"#535cab",slideFormat:"jpg",analytics:"off",xmlVersion:"3",trackCount:0},u={data:"",trackCount:0},d;return $(document).ready(function(){d=$(".sbplus_wrapper"),$.getJSON($.fn.getConfigFileUrl(),function(t){l=t,e()}).fail(function(){sbplusError.show("Configuration file (manifest.json) is not found!","Please make sure the index.html file is compatible with Storybook Plus version 3.")})}),{render:n,resize:r}}(),sbplusDownloadable=function(){function e(){var e=$.fn.getProgramDirectory();$.get(e+".mp4",function(){s=this.url}).always(function(){$.get(e+".mp3",function(){o=this.url}).always(function(){$.get(e+".pdf",function(){i=this.url}).always(function(){$.get(e+".zip",function(){a=this.url}).always(function(){n()})})})})}function t(e,t){return'<a class="dl_item '+e+'" href="'+t+'" role="button" tabindex="1" aria-label="Download '+e+' file" download><span class="icon-download"></span> '+e.capitalize()+"</a> "}function n(){var e="";"undefined"!=typeof s&&(e+=t("video",s)),"undefined"!=typeof o&&(e+=t("audio",o)),"undefined"!=typeof i&&(e+=t("transcript",i)),"undefined"!=typeof a&&(e+=t("supplement",a)),$(".download_files").hide().html(e).fadeIn(500)}var s,o,i,a;return{get:e}}(),sbplusError=function(){function e(e,o){n=e,s=o,t()}function t(){$(".sbplus_wrapper").html('<div class="error"><h1>'+n+"</h1><p>"+s+"</p></div>")}var n,s;return{show:e}}(),sbplusControls=function(){function e(e,t){s=e,o=t,a=$(s).find("page").length,i=$(s).length,$(".control_bar_wrapper .next").on("click",function(){var e=Number($(".selectee.selected").data("section")),t=$(s[e]).find("page").length,n=Number($(".selectee.selected").data("page"));r=Number($(".selectee.selected").data("order")),t-1>n?n++:(n=0,i-1>e&&e++),r++,r>a-1&&(n=0,e=0,r=0),sbplusSlide.get(s,o,e,n)}),$(".control_bar_wrapper .previous").on("click",function(){var e=Number($(".selectee.selected").data("section")),t=$(s[e]).find("page").length,n=Number($(".selectee.selected").data("page"));r=Number($(".selectee.selected").data("order")),t>n&&n>0?(n--,r--):(e--,0>e&&(e=i-1),n=$(s[e]).find("page").length-1,r=n),sbplusSlide.get(s,o,e,n)}),n()}function t(e){e="undefined"!=typeof e?e:r,$(".control_bar_wrapper .status .current").html(e+1)}function n(){t(),$(".control_bar_wrapper .status .total").html(a)}var s,o,i=0,a=0,r=0;return{init:e,update:t}}(),sbplusSplashScreen=function(){function e(e,t,n){a=e,r=t,l=n,$.get(e.sbplus_root_directory+"scripts/templates/splashscreen.tpl",function(e){$.get("assets/splash.jpg",function(){c="assets/splash.jpg"}).fail(function(){$.get(a.sbplus_splash_directory+$.fn.getProgramDirectory()+r.postfix+".jpg",function(){c=this.url}).fail(function(){$.get(a.sbplus_splash_directory+$.fn.getProgramDirectory()+".jpg",function(){c=this.url})})}),i(e)}).fail(function(){sbplusError.show("Template file not found!","splashscreen.tpl file not found in the templates directory.")})}function t(){u.on("click",function(){sbplus.render()}),u.on("mouseover",function(){$(this).css("background-color",$.fn.colorLum(l.accent,.2))}).on("mouseout",function(){$(this).css("background-color",l.accent)})}function n(){d.on("click",function(){sbplus.render(!0)}),d.on("mouseover",function(){$(this).css("background-color",$.fn.colorLum(l.accent,.2))}).on("mouseout",function(){$(this).css("background-color",l.accent)})}function s(){u.off("click"),u.off("mouseover"),u.off("mouseout")}function o(){d.off("click"),d.off("mouseover"),d.off("mouseout")}function i(e){$(".splashscreen").html(e),""!==c&&$(".splashscreen").css("background-image","url("+c+")"),$(".splashinfo .title").html(r.title),$(".splashinfo .subtitle").html(r.subtitle),$(".splashinfo .author").html(r.author),$(".splashinfo .length").html(r.length),$(".splashinfo .startBtn").css("background-color",l.accent),navigator.cookieEnabled&&$.fn.checkValueInCookie("sbplus-"+$.fn.getRootDirectory())&&($(".splashinfo .resumeBtn").css("background-color",l.accent).removeClass("hide"),d=$(".splashinfo .resumeBtn"),n()),u=$(".splashinfo .startBtn"),t(),sbplusDownloadable.get()}var a,r,l,c="",u,d;return{get:e,unbindStartPresentationBtn:s,unbindResumePresentationBtn:o}}(),sbplusMenu=function(){function e(e){i=e,t()}function t(){n()}function n(){$(".menuBtn").on("click",function(){return $(this).attr("aria-expanded","true"),$("#menu_panel").removeClass("hide").attr("aria-expanded","true"),!1}),$(".backBtn").on("click",function(){return o(),!1}),$(".closeBtn").on("click",function(){return $(".menuBtn").attr("aria-expanded","false"),$("#menu_panel").addClass("hide").attr("aria-expanded","false"),o(),!1}),$("#showProfile").on("click",s),$("#showGeneralInfo").on("click",s),$("#showHelp").on("click",s),$("#showSettings").on("click",s)}function s(){var e,t,n="#"+this.id;switch(n){case"#showProfile":e="Author Profile",t=i.authorBio;break;case"#showGeneralInfo":e="General Information",t=i.generalInfo;break;case"#showHelp":e="Help",t="<p>Help information go here...</p>";break;case"#showSettings":e="Settings",t="<p>Settings go here...</p>";break;default:e="",t=""}return""!==e&&""!==t&&o(this,e,t),!1}function o(e,t,n){return"undefined"==typeof e?($(".menu_item a").attr("aria-expanded","false"),void $(".menu_item_details").attr("aria-expanded","false").animate({right:"-100%"},250,function(){$(this).addClass("hide")})):($(e).attr("aria-expanded","true"),$(".menu_item_details").attr("aria-expanded","true"),$(".menu_item_details .navbar .title").html(t),$(".menu_item_details .menu_item_content").html(n),void $(".menu_item_details").removeClass("hide").animate({right:"0px"},250))}var i;return{get:e}}(),sbplusTableOfContents=function(){function e(e,n){i=n,o=e,t()}function t(){var e=$(".tableOfContents");$.each(o.section,function(t){var n=$(this).find("page"),s=$.fn.isEmpty($(this).attr("title"))?"Section "+(t+1):$(this).attr("title");e.append('<div class="section"><div class="header"><div class="title">'+s+'</div><div class="expandCollapseIcon"><span class="icon-collapse"></span></div></div><div class="content"><ul class="selectable">'),$.each(n,function(e){$(".selectable:eq("+t+")").append('<li class="selectee" data-section="'+t+'" data-page="'+e+'" data-order="'+o.trackCount+'">'+("quiz"!==$(this).attr("type")?'<span class="num">'+(o.trackCount+1)+".</span> ":'<span class="icon-assessment"></span> ')+$(this).attr("title")+"</li>"),o.trackCount++}),e.append("</ul></div></div>")}),n()}function n(){var e=$(".tableOfContents .section .header"),t=$(".selectable .selectee");o.section.length>=2?e.on("click",function(){var e=$(this).parent().find(".content"),t=$(this).parent().find(".expandCollapseIcon").find("span");$(e).is(":visible")?e.slideUp(250,function(){$(t).removeClass("icon-collapse").addClass("icon-open")}):e.slideDown(250,function(){$(t).removeClass("icon-open").addClass("icon-collapse")})}):e.remove(),t.on("click",function(){if(o.section.length>=2){var e=$(this).parent().parent().prev();$(".header").removeClass("current"),$(e).addClass("current")}$(this).hasClass("selected")||sbplusSlide.get(o.section,i,$(this).data("section"),$(this).data("page")),t.removeClass("selected"),$(this).addClass("selected")})}function s(e,t){var n=$(".section .header:eq("+e+")"),s=$(".section:eq("+e+') .selectee[data-page="'+t+'"]');$(".header").removeClass("current"),$(".selectee").removeClass("selected"),n.addClass("current"),s.addClass("selected"),sbplusControls.update(s.data("order"))}var o,i;return{get:e,update:s}}(),sbplusSlide=function(){function e(e,n,s,o,i){a="undefined"!=typeof i?i:a,l=n,r=e,m=l.slideFormat,1===Number($.fn.getCookie("sbplus-vjs-enabledSubtitles"))&&(k=!0),t(s,o)}function t(e,t){var s=$(r[e]).find("page")[t];d=$(s).attr("type"),h="quiz"!==d?$(s).attr("src"):"",i(),null!==b&&(_=!1,C=!1,x=!1,b.dispose(),b=null),n(),sbplusTableOfContents.update(e,t),window.clearTimeout(S),S=window.setTimeout(function(){$.fn.setCookie("sbplus-"+$.fn.getRootDirectory(),e+":"+t)},3e3)}function n(){var e="";switch(c=$(".container .content"),d){case"audio":u="assets/audio/",p="audio/mp3",f=".mp3",$.get("assets/slide/"+h+"."+m,function(){e=this.url}).fail(function(){c.before('<div class="slideError">Slide image not found!<br>Expected image: assets/slide/'+h+"."+m+"</div>")}).always(function(){$.get(u+h+".vtt",function(){g='<track kind="subtitles" label="English" srclang="en" src="'+u+h+'.vtt" '+(k===!0?"default":"")+" />"}).always(function(){c.html('<video id="ap" class="video-js vjs-default-skin" poster="'+e+'">'+g+"</video>").promise().done(function(){o()})})});break;case"video":u="assets/video/",p="video/mp4",f=".mp4",$.get(u+h+".vtt",function(){g='<track kind="subtitles" label="English" srclang="en" src="'+u+h+'.vtt" '+(k===!0?"default":"")+" />"}).always(function(){c.html('<video id="ap" class="video-js vjs-default-skin">'+g+"</video>").promise().done(function(){o()})});break;case"kaltura":0===y?$.getScript(a.sbplus_root_directory+"/scripts/libs/kaltura/mwembedloader.js",function(){$.getScript(a.sbplus_root_directory+"/scripts/libs/kaltura/kwidgetgetsources.js",function(){y=1,s()})}):s();break;case"youtube":case"vimeo":"youtube"===d?C=!0:x=!0,c.html('<video id="ap" class="video-js vjs-default-skin"></video>').promise().done(function(){o()})}}function s(){var e,t,n;_=!0,kWidget.getSources({partnerId:a.sbplus_kaltura.id,entryId:h,callback:function(s){e=s.entryId,t=s.captionId,n=s.duration;for(var i in s.sources){var r=s.sources[i];r.flavorParamsId===a.sbplus_kaltura.low&&(w.low=r.src),r.flavorParamsId===a.sbplus_kaltura.normal&&(w.normal=r.src),r.flavorParamsId===a.sbplus_kaltura.high&&(w.high=r.src)}c.html('<video id="ap" class="video-js vjs-default-skin" crossorigin="anonymous"><track kind="subtitles" label="English" srclang="en" src="https://www.kaltura.com/api_v3/?service=caption_captionasset&action=servewebvtt&captionAssetId='+t+"&segmentDuration="+n+'&segmentIndex=1" '+(k===!0?"default":"")+" /></video>").promise().done(function(){o()})}})}function o(){var e={techOrder:["html5"],controls:!0,autoplay:1===Number($.fn.getCookie("sbplus-vjs-autoplay")),preload:"auto",playbackRates:[.5,1,1.5,2],controlBar:{fullscreenToggle:!1}};_?e.plugins={videoJsResolutionSwitcher:{default:720}}:C?(e.techOrder=["youtube"],e.sources=[{type:"video/youtube",src:"https://www.youtube.com/watch?v="+h}],e.playbackRates=null,e.plugins={videoJsResolutionSwitcher:{default:720}}):x&&(e.techOrder=["vimeo"],e.sources=[{type:"video/vimeo",src:"https://vimeo.com/"+h}],e.playbackRates=null),b=videojs("ap",e,function(){var t=this;_?(t.updateSrc([{src:w.low,type:"video/mp4",label:"low",res:360},{src:w.normal,type:"video/mp4",label:"normal",res:720},{src:w.high,type:"video/mp4",label:"high",res:1080}]),t.on("resolutionchange",function(){t.playbackRate(v)}),t.on("ratechange",function(){v=t.playbackRate()})):C===!1&&x===!1&&t.src({type:p,src:u+h+f}),x&&e.autoplay&&t.play(),null!==e.playbackRates&&t.playbackRate($.fn.getCookie("sbplus-vjs-playbackrate")),t.volume(Number($.fn.getCookie("sbplus-vjs-volume"))),t.textTracks().addEventListener("change",function(){var e=this.tracks_;$.each(e,function(){return"showing"===this.mode?(k=!0,!1):void(k=!1)})})})}function i(){$(".slideError").length&&$(".slideError").remove()}var a,r,l,c,u,d,p,f,h,m,b=null,g,v=1,k=!1,y=0,w={},_=!1,C=!1,x=!1,S;return{get:e}}(),sbplusNotes=function(){function e(e){n=e,t()}function t(){}var n;return{get:e}}();$.fn.getProgramDirectory=function(){var e=window.location.href.split("/");return($.fn.isEmpty(e[e.length-1])||new RegExp("[?]").test(e[e.length-1]))&&e.splice(e.length-1,1),void 0===e[4]?e[3]:e[4]},$.fn.getRootDirectory=function(){var e=window.location.href.split("/");return($.fn.isEmpty(e[e.length-1])||new RegExp("[?]").test(e[e.length-1])||"index.html"===e[e.length-1])&&e.splice(e.length-1,1),e[e.length-1]},$.fn.getConfigFileUrl=function(){var e=document.getElementById("sbplus_configs");return null===e?!1:e.href},$.fn.isEmpty=function(e){return!e.trim()||0===e.trim().length},String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)},$.fn.haveCoreFeatures=function(){return!!(Modernizr.audio&&Modernizr.video&&Modernizr.json&&Modernizr.flexbox)},$.fn.colorLum=function(e,t){e=String(e).replace(/[^0-9a-f]/gi,""),e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=t||0;var n="#",s,o;for(o=0;3>o;o++)s=parseInt(e.substr(2*o,2),16),s=Math.round(Math.min(Math.max(0,s+s*t),255)).toString(16),n+=("00"+s).substr(s.length);return n},$.fn.setCookie=function(e,t,n){n="undefined"!=typeof n?n:30;var s=new Date;s.setTime(s.getTime()+24*n*60*60*1e3);var o="expires="+s.toUTCString();document.cookie=e+"="+t+"; "+o},$.fn.getCookie=function(e){for(var t=e+"=",n=document.cookie.split(";"),s=0;s<n.length;s++){for(var o=n[s];" "===o.charAt(0);)o=o.substring(1);if(0===o.indexOf(t))return o.substring(t.length,o.length)}return""},$.fn.deleteCookie=function(e){document.cookie=e+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"},$.fn.checkValueInCookie=function(e){var t=$.fn.getCookie(e);return""!==t};