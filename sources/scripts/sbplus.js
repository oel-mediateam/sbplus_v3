var sbplus=function(){function e(){$.fn.haveCoreFeatures()?$.get("assets/sbplus.xml",function(e){c.data=$(e),t()}).fail(function(){sbplusError.show("Table of Contents XML file (sbplus.xml) is not found!","Please make sure the XML file exists in the assets directory and compatible with Storybook Plus version 3.")}):$.get(r.sbplus_root_directory+"scripts/templates/nosupport.tpl",function(e){o(e)}).fail(function(){sbplusError.show("Unsupported web browser!","Your web browser does not support current version of Storybook Plus. In addition, nosupport.tpl file is not found. nosuppory.tpl file contains information to display in regard to unsupported web browsers.")})}function t(){var e=c.data.find("storybook"),t=c.data.find("setup");c.title=t.find("title").text(),c.subtitle=t.find("subtitle").text(),c.author=t.find("author").attr("name"),c.authorBio=t.find("author").text(),c.length=t.find("length").text(),c.generalInfo=t.find("generalInfo").text(),c.postfix=t.attr("postfix"),c.section=c.data.find("section"),l.accent=$.fn.isEmpty(e.attr("accent"))?l.accent:e.attr("accent"),l.slideFormat=$.fn.isEmpty(e.attr("slideFormat"))?l.slideFormat:e.attr("slideFormat"),l.analytics=$.fn.isEmpty(e.attr("analytics"))?l.analytics:e.attr("analytics"),$.get(r.sbplus_root_directory+"scripts/templates/sbplus.tpl",function(e){s(e)}).fail(function(){sbplusError.show("Template file not found!","sbplus.tpl file not found in the templates directory.")})}function n(e){e="undefined"!=typeof e,$(".splashscreen").fadeOut("fast",function(){if($(".main_content_wrapper").removeClass("hide"),$(".title_bar .title").html(c.title),$(".author").html(c.author),sbplusTableOfContents.get(c,l),e){var t=$.fn.getCookie("sbplus-"+$.fn.getRootDirectory()).split(":"),n=Number(t[0]),s=t[1];sbplusSlide.get(c.section,l,n,s,r)}else sbplusSlide.get(c.section,l,0,0,r);sbplusControls.init(c.section,l),sbplusMenu.get(r,c),i(),$(window).resize(function(){i()}),$(this).remove(),e&&sbplusSplashScreen.unbindResumePresentationBtn(),sbplusSplashScreen.unbindStartPresentationBtn()})}function s(e){$(document).attr("title",c.title),u.html(e),sbplusSplashScreen.get(r,c,l),a()}function o(e){u.html(e)}function a(){$.fn.hasCookieValue("sbplus-vjs-autoplay")?$.fn.setCookie("sbplus-vjs-autoplay",$.fn.getCookie("sbplus-vjs-autoplay")):$.fn.setCookie("sbplus-vjs-autoplay",1),$.fn.hasCookieValue("sbplus-vjs-volume")?$.fn.setCookie("sbplus-vjs-volume",$.fn.getCookie("sbplus-vjs-volume")):$.fn.setCookie("sbplus-vjs-volume",.8),$.fn.hasCookieValue("sbplus-vjs-playbackrate")?$.fn.setCookie("sbplus-vjs-playbackrate",$.fn.getCookie("sbplus-vjs-playbackrate")):$.fn.setCookie("sbplus-vjs-playbackrate",1),$.fn.hasCookieValue("sbplus-vjs-enabledSubtitles")?$.fn.setCookie("sbplus-vjs-enabledSubtitles",$.fn.getCookie("sbplus-vjs-enabledSubtitles")):$.fn.setCookie("sbplus-vjs-enabledSubtitles",0)}function i(){var e=$(window).outerWidth(),t=$(window).outerHeight(),n=$(".title_bar").outerHeight(),s=$(".control_bar_wrapper").outerHeight(),o=$(".page_container .content").outerHeight(),a=$(".side_panel .topbar").outerHeight(),i=$(".page_container").hasClass("expanded");if(i){var r=100-(s+n)/t*100;$(".page_container.expanded").css("height",r+"%"),$(".widget_container .notes").css({height:"",width:$(".status").outerWidth()+"px"}),$(".widget_container .side_panel").css({top:-1*(t-s-n)+"px",height:t-s-n+"px",width:$(".right_controls").outerWidth()+"px"}),$(".tableOfContents").css("height",$(".widget_container .side_panel").outerHeight()-a+"px")}else{var l=t-(n+s+o);$(".widget_container").css("height",t-(n+o)),$(".widget_container .notes").css({height:t-(n+s+o),width:""}),e>=888?($(".side_panel").css({"margin-top":-1*o,"border-top":"none",height:"",top:"",width:""}),$(".tableOfContents").css("height",o+l+s-a-1)):($(".side_panel").css({"margin-top":0,"border-top":"1px solid #ccc"}),$(".tableOfContents").css("height",l+s-a-1))}}var r,l={accent:"#535cab",slideFormat:"jpg",analytics:"off",xmlVersion:"3",trackCount:0},c={data:"",trackCount:0},u;return $(document).ready(function(){u=$(".sbplus_wrapper"),$.getJSON($.fn.getConfigFileUrl(),function(t){r=t,e()}).fail(function(){sbplusError.show("Configuration file (manifest.json) is not found!","Please make sure the index.html file is compatible with Storybook Plus version 3.")})}),{render:n,resize:i}}(),sbplusDownloadable=function(){function e(){var e=$.fn.getProgramDirectory();$.get(e+".mp4",function(){o=this.url,l.video=o}).always(function(){$.get(e+".mp3",function(){a=this.url,l.audio=a}).always(function(){$.get(e+".pdf",function(){i=this.url,l.pdf=i}).always(function(){$.get(e+".zip",function(){r=this.url,l.zip=r}).always(function(){s()})})})})}function t(e,t){return'<a class="dl_item '+e+'" href="'+t+'" role="button" tabindex="1" aria-label="Download '+e+' file" download><span class="icon-download"></span> '+e.capitalize()+"</a> "}function n(){return l}function s(){var e="";"undefined"!=typeof o&&(e+=t("video",o)),"undefined"!=typeof a&&(e+=t("audio",a)),"undefined"!=typeof i&&(e+=t("transcript",i)),"undefined"!=typeof r&&(e+=t("supplement",r)),$(".download_files").hide().html(e).fadeIn(500)}var o,a,i,r,l={};return{get:e,getDownloads:n}}(),sbplusError=function(){function e(e,o){n=e,s=o,t()}function t(){$(".sbplus_wrapper").html('<div class="error"><h1>'+n+"</h1><p>"+s+"</p></div>")}var n,s;return{show:e}}(),sbplusControls=function(){function e(e,t){o=e,a=t,r=$(o).find("page").length,i=$(o).length,$(".control_bar_wrapper .next").on("click",function(){var e=Number($(".selectee.selected").data("section")),t=$(o[e]).find("page").length,n=Number($(".selectee.selected").data("page"));l=Number($(".selectee.selected").data("order")),t-1>n?n++:(n=0,i-1>e&&e++),l++,l>r-1&&(n=0,e=0,l=0),sbplusSlide.get(o,a,e,n)}),$(".control_bar_wrapper .previous").on("click",function(){var e=Number($(".selectee.selected").data("section")),t=$(o[e]).find("page").length,n=Number($(".selectee.selected").data("page"));l=Number($(".selectee.selected").data("order")),t>n&&n>0?(n--,l--):(e--,0>e&&(e=i-1),n=$(o[e]).find("page").length-1,l=n),sbplusSlide.get(o,a,e,n)}),$(".control_bar_wrapper .downloadsBtn").on("click",function(){var e=$(".download_items");e.hasClass("hide")?e.removeClass("hide"):e.addClass("hide")}),$(".control_bar_wrapper .expandContractBtn").on("click",function(){var e=$(".page_container"),t=$(".control_bar_wrapper .expandOnly"),n=e.hasClass("expanded"),s=$(".notes, .side_panel"),o=$(this).find("span"),a=$(".main_content_wrapper");n?(e.removeClass("expanded").addClass("aspect-ratio").css("height","auto"),t.addClass("hide"),s.removeClass("hide"),o.removeClass("icon-contract").addClass("icon-expand"),a.removeClass("full-view"),$(".control_bar_wrapper .expandOnly .notesBtn").removeClass("active"),$(".widget_container .notes").css("top","40px"),$(".control_bar_wrapper .expandOnly .tocBtn").removeClass("active"),$(".widget_container .side_panel").css("right","")):(e.addClass("expanded").removeClass("aspect-ratio"),t.removeClass("hide"),s.addClass("hide"),o.removeClass("icon-expand").addClass("icon-contract"),a.addClass("full-view")),sbplus.resize()}),$(".control_bar_wrapper .expandOnly .notesBtn").on("click",function(){var e=this,t=$(".widget_container .notes");t.hasClass("hide")?t.removeClass("hide").animate({top:"-250px"},250,function(){$(e).addClass("active")}):t.animate({top:"40px"},250,function(){t.addClass("hide"),$(e).removeClass("active")})}),$(".control_bar_wrapper .expandOnly .tocBtn").on("click",function(){var e=this,t=$(".widget_container .side_panel");t.hasClass("hide")?t.removeClass("hide").animate({right:"0"},250,function(){$(e).addClass("active")}):t.animate({right:-1*t.outerWidth()+"px"},250,function(){t.addClass("hide"),$(e).removeClass("active")})}),s()}function t(){var e=sbplusDownloadable.getDownloads(),t=$(".download_items .files");void 0!==e.video&&t.append('<li><a href="'+e.video+'" download>Video</a></li>'),void 0!==e.audio&&t.append('<li><a href="'+e.audio+'" download>Audio</a></li>'),void 0!==e.pdf&&t.append('<li><a href="'+e.pdf+'" download>Transcript</a></li>'),void 0!==e.zip&&t.append('<li><a href="'+e.zip+'" download>Supplement</a></li>')}function n(e){e="undefined"!=typeof e?e:l,$(".control_bar_wrapper .status .current").html(e+1)}function s(){n(),$(".control_bar_wrapper .status .total").html(r),t()}var o,a,i=0,r=0,l=0;return{init:e,update:n}}(),sbplusSplashScreen=function(){function e(e,t,n){i=e,r=t,l=n,$.get(e.sbplus_root_directory+"scripts/templates/splashscreen.tpl",function(e){$.get("assets/splash.jpg",function(){c="assets/splash.jpg"}).fail(function(){""===r.postfix?$.get(i.sbplus_splash_directory+$.fn.getProgramDirectory()+".jpg",function(){c=this.url}):$.get(i.sbplus_splash_directory+$.fn.getProgramDirectory()+r.postfix+".jpg",function(){c=this.url}).fail(function(){$.get(i.sbplus_splash_directory+$.fn.getProgramDirectory()+".jpg",function(){c=this.url})})}),a(e)}).fail(function(){sbplusError.show("Template file not found!","splashscreen.tpl file not found in the templates directory.")})}function t(){u.on("click",function(){sbplus.render()}),u.on("mouseover",function(){$(this).css("background-color",$.fn.colorLum(l.accent,.2))}).on("mouseout",function(){$(this).css("background-color",l.accent)})}function n(){d.on("click",function(){sbplus.render(!0)}),d.on("mouseover",function(){$(this).css("background-color",$.fn.colorLum(l.accent,.2))}).on("mouseout",function(){$(this).css("background-color",l.accent)})}function s(){u.off("click"),u.off("mouseover"),u.off("mouseout")}function o(){d.off("click"),d.off("mouseover"),d.off("mouseout")}function a(e){var s="sbplus-"+$.fn.getRootDirectory();$(".splashscreen").html(e),""!==c&&$(".splashscreen").css("background-image","url("+c+")"),$(".splashinfo .title").html(r.title),$(".splashinfo .subtitle").html(r.subtitle),$(".splashinfo .author").html(r.author),$(".splashinfo .length").html(r.length),$(".splashinfo .startBtn").css("background-color",l.accent),navigator.cookieEnabled&&$.fn.hasCookieValue(s)&&"0:0"!==$.fn.getCookie(s)&&($(".splashinfo .resumeBtn").css("background-color",l.accent).removeClass("hide"),d=$(".splashinfo .resumeBtn"),n()),u=$(".splashinfo .startBtn"),t(),sbplusDownloadable.get(),window.self!==window.top&&$(".popoutBtn").removeClass("hide").on("click",function(){window.open(window.location.href,"_blank")})}var i,r,l,c="",u,d;return{get:e,unbindStartPresentationBtn:s,unbindResumePresentationBtn:o}}(),sbplusMenu=function(){function e(e,n){c=e,l=n,t()}function t(){n()}function n(){$(".menuBtn").on("click",function(){return $(this).attr("aria-expanded","true"),$("#menu_panel").removeClass("hide").attr("aria-expanded","true"),!1}),$(".backBtn").on("click",function(){return o(),!1}),$(".closeBtn").on("click",function(){return $(".menuBtn").attr("aria-expanded","false"),$("#menu_panel").addClass("hide").attr("aria-expanded","false"),o(),!1}),$("#showProfile").on("click",s),$("#showGeneralInfo").on("click",s),$("#showHelp").on("click",s),$("#showSettings").on("click",s)}function s(){var e,t="",n="#"+this.id,s=this;switch(n){case"#showProfile":e="Author Profile",t=l.authorBio;break;case"#showGeneralInfo":e="General Information",t=l.generalInfo;break;case"#showHelp":e="Help",t=c.sbplus_help_information;break;case"#showSettings":e="Settings",0===u.length?$.get(c.sbplus_root_directory+"scripts/templates/settings.tpl",function(t){u=t,o(s,e,t),a()}):(t=u,a());break;default:e="",t=""}return""!==e&&""!==t&&o(s,e,t),!1}function o(e,t,n){return"undefined"==typeof e?($(".menu_item a").attr("aria-expanded","false"),$(".menu_item_details").attr("aria-expanded","false").animate({right:"-100%"},250,function(){$(this).addClass("hide")}),void r()):($(e).attr("aria-expanded","true"),$(".menu_item_details").attr("aria-expanded","true"),$(".menu_item_details .navbar .title").html(t),$(".menu_item_details .menu_item_content").html(n),$(".menu_item_details").removeClass("hide").animate({right:"0px"},250),void("showSettings"===$(e)[0].id&&i()))}function a(){var e=$.fn.getCookie("sbplus-vjs-autoplay");"1"===e?$("#autoplay").prop("checked",!0):$("#autoplay").prop("checked",!1);var t=$.fn.getCookie("sbplus-vjs-volume");$("#volume").prop("value",t);var n=$.fn.getCookie("sbplus-vjs-playbackrate");$("#playback").val(n);var s=$.fn.getCookie("sbplus-vjs-enabledSubtitles");"1"===s?$("#subtitle").prop("checked",!0):$("#subtitle").prop("checked",!1)}function i(){$("#saveSettingBtn").on("click",function(e){var t=$(this),n=!1;t.prop("disabled",!0).html("Saving..."),$("#autoplay").is(":checked")?$.fn.setCookie("sbplus-vjs-autoplay",1):$.fn.setCookie("sbplus-vjs-autoplay",0);var s=$("#volume").val();return 0>s||s>1||""===s?(n=!0,s=.8):$.fn.setCookie("sbplus-vjs-volume",s),$.fn.setCookie("sbplus-vjs-playbackrate",$("#playback option:selected").val()),$("#subtitle").is(":checked")?$.fn.setCookie("sbplus-vjs-enabledSubtitles",1):$.fn.setCookie("sbplus-vjs-enabledSubtitles",0),n?($("#volume").parent().parent().addClass("invalid"),$("#volume").parent().after('<p class="emsg">Must be between 0 to 1.</p>')):($("#volume").parent().parent().removeClass("invalid"),$(".emsg").remove()),setTimeout(function(){a(),t.html("Settings Saved!"),setTimeout(function(){t.prop("disabled",!1).html("Save")},2e3)},1e3),e.preventDefault(),!1})}function r(){$("#saveSettingBtn").unbind()}var l,c,u="";return{get:e}}(),sbplusTableOfContents=function(){function e(e,n){a=n,o=e,t()}function t(){var e=$(".tableOfContents");$.each(o.section,function(t){var n=$(this).find("page"),s=$.fn.isEmpty($(this).attr("title"))?"Section "+(t+1):$(this).attr("title");e.append('<div class="section"><div class="header"><div class="title">'+s+'</div><div class="expandCollapseIcon"><span class="icon-collapse"></span></div></div><div class="content"><ul class="selectable">'),$.each(n,function(e){$(".selectable:eq("+t+")").append('<li class="selectee" data-section="'+t+'" data-page="'+e+'" data-order="'+o.trackCount+'">'+("quiz"!==$(this).attr("type")?'<span class="num">'+(o.trackCount+1)+".</span> ":'<span class="icon-assessment"></span> ')+$(this).attr("title")+"</li>"),o.trackCount++}),e.append("</ul></div></div>")}),n()}function n(){var e=$(".tableOfContents .section .header"),t=$(".selectable .selectee");o.section.length>=2?e.on("click",function(){var e=$(this).parent().find(".content"),t=$(this).parent().find(".expandCollapseIcon").find("span");$(e).is(":visible")?e.slideUp(250,function(){$(t).removeClass("icon-collapse").addClass("icon-open")}):e.slideDown(250,function(){$(t).removeClass("icon-open").addClass("icon-collapse")})}):e.remove(),t.on("click",function(){if(o.section.length>=2){var e=$(this).parent().parent().prev();$(".header").removeClass("current"),$(e).addClass("current")}$(this).hasClass("selected")||sbplusSlide.get(o.section,a,$(this).data("section"),$(this).data("page")),t.removeClass("selected"),$(this).addClass("selected")})}function s(e,t){var n=$(".section .header:eq("+e+")"),s=$(".section:eq("+e+') .selectee[data-page="'+t+'"]');$(".header").removeClass("current"),$(".selectee").removeClass("selected"),n.addClass("current"),s.addClass("selected"),sbplusControls.update(s.data("order"))}var o,a;return{get:e,update:s}}(),sbplusSlide=function(){function e(e,n,s,o,a){i="undefined"!=typeof a?a:i,l=n,r=e,b=l.slideFormat,1===Number($.fn.getCookie("sbplus-vjs-enabledSubtitles"))&&(k=!0),t(s,o)}function t(e,t){var s=$(r[e]).find("page")[t];d=$(s).attr("type"),h="quiz"!==d?$(s).attr("src"):"",a(),null!==v&&(y=!1,_=!1,x=!1,v.dispose(),v=null),n(),sbplusTableOfContents.update(e,t),window.clearTimeout(S),S=window.setTimeout(function(){$.fn.setCookie("sbplus-"+$.fn.getRootDirectory(),e+":"+t)},3e3)}function n(){switch(c=$(".page_container .content"),d){case"image":var e=new Image;$(e).load(function(){c.html(e)}).error(function(){c.before('<div class="slideError">Slide image not found!<br>Expected image: assets/slide/'+h+"."+b+"</div>")}).attr({src:"assets/slide/"+h+"."+b,border:0});break;case"audio":var t="";u="assets/audio/",p="audio/mp3",f=".mp3",$.get("assets/slide/"+h+"."+b,function(){t=this.url}).fail(function(){c.before('<div class="slideError">Slide image not found!<br>Expected image: assets/slide/'+h+"."+b+"</div>")}).always(function(){$.get(u+h+".vtt",function(){m='<track kind="subtitles" label="English" srclang="en" src="'+u+h+'.vtt" '+(k===!0?"default":"")+" />"}).always(function(){c.html('<video id="ap" class="video-js vjs-default-skin" poster="'+t+'">'+m+"</video>").promise().done(function(){o()})})});break;case"video":u="assets/video/",p="video/mp4",f=".mp4",$.get(u+h+".vtt",function(){m='<track kind="subtitles" label="English" srclang="en" src="'+u+h+'.vtt" '+(k===!0?"default":"")+" />"}).always(function(){c.html('<video id="ap" class="video-js vjs-default-skin">'+m+"</video>").promise().done(function(){o()})});break;case"kaltura":0===w?$.getScript(i.sbplus_root_directory+"/scripts/libs/kaltura/mwembedloader.js",function(){$.getScript(i.sbplus_root_directory+"/scripts/libs/kaltura/kwidgetgetsources.js",function(){w=1,s()})}):s();break;case"youtube":case"vimeo":"youtube"===d?_=!0:x=!0,c.html('<video id="ap" class="video-js vjs-default-skin"></video>').promise().done(function(){o()})}}function s(){var e,t,n;y=!0,kWidget.getSources({partnerId:i.sbplus_kaltura.id,entryId:h,callback:function(s){e=s.entryId,t=s.captionId,n=s.duration;for(var a in s.sources){var r=s.sources[a];r.flavorParamsId===i.sbplus_kaltura.low&&(C.low=r.src),r.flavorParamsId===i.sbplus_kaltura.normal&&(C.normal=r.src),r.flavorParamsId===i.sbplus_kaltura.high&&(C.high=r.src)}c.html('<video id="ap" class="video-js vjs-default-skin" crossorigin="anonymous"><track kind="subtitles" label="English" srclang="en" src="https://www.kaltura.com/api_v3/?service=caption_captionasset&action=servewebvtt&captionAssetId='+t+"&segmentDuration="+n+'&segmentIndex=1" '+(k===!0?"default":"")+" /></video>").promise().done(function(){o()})}})}function o(){var e={techOrder:["html5"],controls:!0,autoplay:1===Number($.fn.getCookie("sbplus-vjs-autoplay")),preload:"auto",playbackRates:[.5,1,1.5,2],controlBar:{fullscreenToggle:!1}};y?e.plugins={videoJsResolutionSwitcher:{default:720}}:_?(e.techOrder=["youtube"],e.sources=[{type:"video/youtube",src:"https://www.youtube.com/watch?v="+h}],e.playbackRates=null,e.plugins={videoJsResolutionSwitcher:{default:720}}):x&&(e.techOrder=["vimeo"],e.sources=[{type:"video/vimeo",src:"https://vimeo.com/"+h}],e.playbackRates=null),v=videojs("ap",e,function(){var t=this;y?(t.updateSrc([{src:C.low,type:"video/mp4",label:"low",res:360},{src:C.normal,type:"video/mp4",label:"normal",res:720},{src:C.high,type:"video/mp4",label:"high",res:1080}]),t.on("resolutionchange",function(){t.playbackRate(g)}),t.on("ratechange",function(){g=t.playbackRate()})):_===!1&&x===!1&&t.src({type:p,src:u+h+f}),x&&e.autoplay&&t.play(),null!==e.playbackRates&&t.playbackRate($.fn.getCookie("sbplus-vjs-playbackrate")),t.volume(Number($.fn.getCookie("sbplus-vjs-volume"))),t.textTracks().addEventListener("change",function(){var e=this.tracks_;$.each(e,function(){return"showing"===this.mode?(k=!0,!1):void(k=!1)})})})}function a(){$(".slideError").length&&$(".slideError").remove()}var i,r,l,c,u,d,p,f,h,b,v=null,m,g=1,k=!1,w=0,C={},y=!1,_=!1,x=!1,S;return{get:e}}(),sbplusNotes=function(){function e(e){n=e,t()}function t(){}var n;return{get:e}}();$.fn.getProgramDirectory=function(){var e=window.location.href.split("/");return($.fn.isEmpty(e[e.length-1])||new RegExp("[?]").test(e[e.length-1]))&&e.splice(e.length-1,1),void 0===e[4]?e[3]:e[4]},$.fn.getRootDirectory=function(){var e=window.location.href.split("/");return($.fn.isEmpty(e[e.length-1])||new RegExp("[?]").test(e[e.length-1])||"index.html"===e[e.length-1])&&e.splice(e.length-1,1),e[e.length-1]},$.fn.getConfigFileUrl=function(){var e=document.getElementById("sbplus_configs");return null===e?!1:e.href},$.fn.isEmpty=function(e){return!e.trim()||0===e.trim().length},String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)},$.fn.haveCoreFeatures=function(){return!!(Modernizr.audio&&Modernizr.video&&Modernizr.json&&Modernizr.flexbox)},$.fn.colorLum=function(e,t){e=String(e).replace(/[^0-9a-f]/gi,""),e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=t||0;var n="#",s,o;for(o=0;3>o;o++)s=parseInt(e.substr(2*o,2),16),s=Math.round(Math.min(Math.max(0,s+s*t),255)).toString(16),n+=("00"+s).substr(s.length);return n},$.fn.setCookie=function(e,t,n){n="undefined"!=typeof n?n:30;var s=new Date;s.setTime(s.getTime()+24*n*60*60*1e3);var o="expires="+s.toUTCString();document.cookie=e+"="+t+"; "+o},$.fn.getCookie=function(e){for(var t=e+"=",n=document.cookie.split(";"),s=0;s<n.length;s++){for(var o=n[s];" "===o.charAt(0);)o=o.substring(1);if(0===o.indexOf(t))return o.substring(t.length,o.length)}return""},$.fn.deleteCookie=function(e){document.cookie=e+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"},$.fn.hasCookieValue=function(e){var t=$.fn.getCookie(e);return""!==t};
//# sourceMappingURL=./sbplus.js.map