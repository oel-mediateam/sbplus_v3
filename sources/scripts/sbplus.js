var sbplus=function(){function e(){$.fn.haveCoreFeatures()?$.get("assets/sbplus.xml",function(e){u.data=$(e),t()}).fail(function(e,t){"parsererror"===t?sbplusError.show("Something went wrong in the XML!",'Validate the XML at <a href="https://validator.w3.org/" target="_blank">https://validator.w3.org/</a>.'):sbplusError.show("Table of Contents XML file (sbplus.xml) is not found!","Please make sure the XML file exists in the assets directory and compatible with Storybook Plus version 3.")}):$.get(l.sbplus_root_directory+"scripts/templates/nosupport.tpl",function(e){a(e)}).fail(function(){sbplusError.show("Unsupported web browser!","Your web browser does not support current version of Storybook Plus. In addition, nosupport.tpl file is not found. nosuppory.tpl file contains information to display in regard to unsupported web browsers.")})}function t(){var e=u.data.find("storybook"),t=u.data.find("setup");u.title=t.find("title").text(),u.subtitle=t.find("subtitle").text(),u.author=t.find("author").attr("name"),u.length=t.find("length").text(),u.generalInfo=t.find("generalInfo").text(),u.course=t.attr("course"),u.section=u.data.find("section"),c.accent=$.fn.isEmpty(e.attr("accent"))?c.accent:e.attr("accent"),c.pageImgFormat=$.fn.isEmpty(e.attr("pageImgFormat"))?c.pageImgFormat:e.attr("pageImgFormat"),c.analytics=$.fn.isEmpty(e.attr("analytics"))?c.analytics:e.attr("analytics"),$.get(l.sbplus_root_directory+"scripts/templates/sbplus.tpl",function(e){n(e)}).fail(function(){sbplusError.show("Template file not found!","sbplus.tpl file not found in the templates directory.")})}function s(e){e="undefined"!=typeof e,$(".splashscreen").fadeOut("fast",function(){if($(".main_content_wrapper").removeClass("hide"),$(".title_bar .title").html(u.title),$(".author").html(u.author),sbplusTableOfContents.get(u,c),e){var t=$.fn.getCookie("sbplus-"+$.fn.getRootDirectory()).split(":"),s=Number(t[0]),n=t[1];sbplusSlide.get(u.section,c,s,n,l)}else sbplusSlide.get(u.section,c,0,0,l);sbplusControls.init(u.section,c),sbplusMenu.get(l,u),$(window).resize(function(){r()}),e&&sbplusSplashScreen.unbindResumePresentationBtn(),sbplusSplashScreen.unbindStartPresentationBtn()})}function n(e){$(document).attr("title",u.title),d.html(e),sbplusSplashScreen.get(l,u,c),o(),(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i))&&i()}function a(e){d.html(e)}function o(){$.fn.hasCookieValue("sbplus-vjs-autoplay")?$.fn.setCookie("sbplus-vjs-autoplay",$.fn.getCookie("sbplus-vjs-autoplay")):$.fn.setCookie("sbplus-vjs-autoplay",1),$.fn.hasCookieValue("sbplus-vjs-volume")?$.fn.setCookie("sbplus-vjs-volume",$.fn.getCookie("sbplus-vjs-volume")):$.fn.setCookie("sbplus-vjs-volume",.8),$.fn.hasCookieValue("sbplus-vjs-playbackrate")?$.fn.setCookie("sbplus-vjs-playbackrate",$.fn.getCookie("sbplus-vjs-playbackrate")):$.fn.setCookie("sbplus-vjs-playbackrate",1),$.fn.hasCookieValue("sbplus-vjs-enabledSubtitles")?$.fn.setCookie("sbplus-vjs-enabledSubtitles",$.fn.getCookie("sbplus-vjs-enabledSubtitles")):$.fn.setCookie("sbplus-vjs-enabledSubtitles",0)}function i(){$.getScript(l.sbplus_root_directory+"scripts/libs/iphone-inline-video.browser.js")}function r(){var e=$(document).width(),t=$(document).height();if(414>=e&&736>=t);else if(736>=e&&414>=t);else{var s=$(window).outerWidth(),n=$(window).outerHeight(),a=$(".title_bar").outerHeight(),o=$(".control_bar_wrapper").outerHeight(),i=$(".page_container .content").outerHeight(),r=$(".side_panel .topbar").outerHeight(),l=$(".main_content_wrapper").hasClass("full-view"),c=$(".main_content_wrapper").hasClass("assessment-view");if(c){var u=n-a-o;$(".content .assessment").css({height:u+"px"})}if(l){var d=100-(o+a)/n*100;$(".page_container.expanded").css("height",d+"%"),$(".widget_container .notes").css({height:"",width:$(".status").outerWidth()+"px"}),$(".widget_container .side_panel").css({top:-1*(n-o-a)+"px",height:n-o-a+"px",width:300}),$(".tableOfContents").css("height",$(".widget_container .side_panel").outerHeight()-r+"px")}else{if(n>=630){$(".page_container").css("height",""),$(".main_content_wrapper").removeClass("notes-minimized-view"),$(".main_content_wrapper").hasClass("assessment-view")===!1&&$(".control_bar_wrapper .notesBtn").addClass("hide"),$(".widget_container .notes").removeClass("hide").css("width",""),s>888?($(".page_container").css("width",""),$(".side_panel").css({"margin-top":-1*i,"border-top":"none",height:"",top:"",width:""}),$(".tableOfContents").css("height",n-a-r-1)):c===!1?($(".widget_container .notes").removeClass("hide"),$(".page_container").css("width","100%"),$(".side_panel").css({"margin-top":0,"border-top":"1px solid #ccc"}),$(".tableOfContents").css("height",n-a-r-$(".page_container").outerHeight()-1)):($(".widget_container .notes").addClass("hide"),$(".page_container").css({width:"",height:n-a-o}),$(".side_panel").css({"margin-top":-1*(n-a-o),"border-top":"none",height:n-a,top:"",width:""}),$(".tableOfContents").css("height",n-a-r-1));var p=$(".page_container .content").outerHeight();$(".widget_container").css("height",n-(a+p)),$(".widget_container .notes").css({height:n-(a+o+p),width:""})}else $(".main_content_wrapper").addClass("notes-minimized-view"),$(".widget_container .notes").addClass("hide").css({width:$(".status").outerWidth(),height:""}),$(".widget_container .notes").hasClass("noNotes")?$(".control_bar_wrapper .notesBtn").addClass("hide"):$(".control_bar_wrapper .notesBtn").removeClass("hide"),$(".page_container").css({width:"",height:n-a-o}),$(".side_panel").css({"margin-top":-1*(n-a-o),"border-top":"none",height:n-a,top:"",width:""}),$(".tableOfContents").css("height",n-a-r-1);var f=$("#menu_panel").outerHeight(),h=$(".menu_item_details .navbar .title").outerHeight(),g=$(".menu_item_details .menu_item_content");g.css("height",f-a-h)}}}var l,c={accent:"#535cab",pageImgFormat:"jpg",analytics:"off",xmlVersion:"3",trackCount:0},u={data:"",trackCount:0},d;return $(document).ready(function(){d=$(".sbplus_wrapper"),$.getJSON($.fn.getConfigFileUrl(),function(t){l=t,e()}).fail(function(){sbplusError.show("Configuration file (manifest.json) is not found!","Please make sure the index.html file is compatible with Storybook Plus version 3.")})}),{render:s,resize:r}}();$.fn.getProgramDirectory=function(){var e=window.location.href.split("/");return($.fn.isEmpty(e[e.length-1])||new RegExp("[?]").test(e[e.length-1]))&&e.splice(e.length-1,1),void 0===e[4]?e[3]:e[4]},$.fn.getRootDirectory=function(){var e=window.location.href.split("/");return($.fn.isEmpty(e[e.length-1])||new RegExp("[?]").test(e[e.length-1])||"index.html"===e[e.length-1])&&e.splice(e.length-1,1),e[e.length-1]},$.fn.getConfigFileUrl=function(){var e=document.getElementById("sbplus_configs");return null===e?!1:e.href},$.fn.isEmpty=function(e){return!e.trim()||0===e.trim().length},String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)},$.fn.cleanString=function(e){return e.replace(/[^\w]/gi,"").toLowerCase()},$.fn.removeExtension=function(e){var t=e.indexOf(".");return e.substr(0,t)},$.fn.haveCoreFeatures=function(){return!!(Modernizr.audio&&Modernizr.video&&Modernizr.json&&Modernizr.flexbox)},$.fn.colorLum=function(e,t){e=String(e).replace(/[^0-9a-f]/gi,""),e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=t||0;var s="#",n,a;for(a=0;3>a;a++)n=parseInt(e.substr(2*a,2),16),n=Math.round(Math.min(Math.max(0,n+n*t),255)).toString(16),s+=("00"+n).substr(n.length);return s},$.fn.toSeconds=function(e){var t=e.split(":");return Number(60*t[0])+Number(t[1])},$.fn.autoscroll=function(e){var t=Math.floor($(this).position().top);(30>t||t>=e.parent().outerHeight()/2)&&e.scrollTo($(this),{duration:500,offsetTop:e[0].clientHeight/2+$(this).height()})},$.fn.scrollTo=function(e,t,s){"function"==typeof t&&2===arguments.length&&(s=t,t=e);var n=$.extend({scrollTarget:e,offsetTop:50,duration:500,easing:"swing"},t);return this.each(function(){var e=$(this),t="number"==typeof n.scrollTarget?n.scrollTarget:$(n.scrollTarget),a="number"==typeof t?t:t.offset().top+e.scrollTop()-parseInt(n.offsetTop);e.animate({scrollTop:a},parseInt(n.duration),n.easing,function(){"function"==typeof s&&s.call(this)})})},$.fn.setCookie=function(e,t,s){if(s="undefined"!=typeof s?s:30,0===s)document.cookie=e+"="+t+";";else{var n=new Date;n.setTime(n.getTime()+24*s*60*60*1e3);var a="expires="+n.toUTCString();document.cookie=e+"="+t+"; "+a}},$.fn.getCookie=function(e){for(var t=e+"=",s=document.cookie.split(";"),n=0;n<s.length;n++){for(var a=s[n];" "===a.charAt(0);)a=a.substring(1);if(0===a.indexOf(t))return a.substring(t.length,a.length)}return""},$.fn.deleteCookie=function(e){document.cookie=e+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"},$.fn.hasCookieValue=function(e){var t=$.fn.getCookie(e);return""!==t};var sbplusError=function(){function e(e,a){s=e,n=a,t()}function t(){$(".sbplus_wrapper").html('<div class="error"><h1>'+s+"</h1><p>"+n+"</p></div>")}var s,n;return{show:e}}(),sbplusSplashScreen=function(){function e(e,t,s){r=e,l=t,c=s;var n=$.fn.getProgramDirectory(),a=r.sbplus_root_directory+"images/default.svg",u,d,p;$.get(e.sbplus_root_directory+"scripts/templates/splashscreen.tpl",function(e){o(e),$.ajax({url:"assets/splash.svg",type:"HEAD",success:function(){u=this.url,i(u)},error:function(){""===l.course?$.ajax({url:r.sbplus_splash_directory+n+"/default.svg",type:"HEAD",success:function(){d=this.url,i(d)},error:function(){i(a)}}):$.ajax({url:r.sbplus_splash_directory+n+"/"+l.course+".svg",type:"HEAD",success:function(){p=this.url,i(p)},error:function(){$.ajax({url:r.sbplus_splash_directory+n+"/default.svg",type:"HEAD",success:function(){d=this.url,i(d)},error:function(){i(a)}})}})}})}).fail(function(){sbplusError.show("Template file not found!","splashscreen.tpl file not found in the templates directory.")})}function t(){u.on("click",function(){sbplus.render()}),u.on("mouseover",function(){$(this).children().css("background-color",$.fn.colorLum(c.accent,.2))}).on("mouseout",function(){$(this).children().css("background-color",c.accent)})}function s(){d.on("click",function(){sbplus.render(!0)}),d.on("mouseover",function(){$(this).children().css("background-color",$.fn.colorLum(c.accent,.2))}).on("mouseout",function(){$(this).children().css("background-color",c.accent)})}function n(){u.off("click"),u.off("mouseover"),u.off("mouseout")}function a(){d.off("click"),d.off("mouseover"),d.off("mouseout")}function o(e){var n="sbplus-"+$.fn.getRootDirectory();$(".splashscreen").html(e),$(".splashinfo .title").html(l.title),$.fn.isEmpty(l.subtitle)?$(".splashinfo .subtitle").attr("tabindex",-1):$(".splashinfo .subtitle").html(l.subtitle),$(".splashinfo .author").html(l.author),$(".splashinfo .length").html(l.length),$(".splashinfo .startBtn button").css("background-color",c.accent),$(".splashinfo .resumeBtn button").css("background-color",c.accent),navigator.cookieEnabled&&$.fn.hasCookieValue(n)&&"0:0"!==$.fn.getCookie(n)&&($(".splashinfo .resumeBtn").css("background-color",c.accent).removeClass("hide"),d=$(".splashinfo .resumeBtn"),s()),u=$(".splashinfo .startBtn"),t(),sbplusDownloadable.get(c.accent)}function i(e){void 0!==e&&$(".splashscreen .splash_background").css({"background-image":"url("+e+")",opacity:0}).animate({opacity:1},500,"linear")}var r,l,c,u,d;return{get:e,unbindStartPresentationBtn:n,unbindResumePresentationBtn:a}}(),sbplusDownloadable=function(){function e(e){l=e;var t=$.fn.getRootDirectory();$.ajax({url:t+".pdf",type:"HEAD",cache:!1,success:function(){i=this.url,c.pdf=i}}).always(function(){$.ajax({url:t+".mp3",type:"HEAD",cache:!1,success:function(){o=this.url,c.audio=o}}).always(function(){$.ajax({url:t+".mp4",type:"HEAD",cache:!1,success:function(){a=this.url,c.video=a}}).always(function(){$.ajax({url:t+".zip",type:"HEAD",cache:!1,success:function(){r=this.url,c.zip=r}}).always(function(){n()})})})})}function t(e,t){return'<div class="dl_item"><a class="'+e+'" href="'+t+'" role="button" tabindex="1" aria-label="Download '+e+' file" download><span class="icon-download"></span> '+e.capitalize()+"</a></div>"}function s(){return c}function n(){var e="",s=$(".download_files").parent(),n=$(".download_files");"undefined"!=typeof a&&(e+=t("video",a)),"undefined"!=typeof o&&(e+=t("audio",o)),"undefined"!=typeof i&&(e+=t("transcript",i)),"undefined"!=typeof r&&(e+=t("supplement",r)),void 0===r&&void 0===i&&void 0===o&&void 0===a?(n.html("No downloadable file available."),setTimeout(function(){s.animate({height:s.outerHeight()-n.outerHeight(!0)},500,"linear"),n.fadeOut()},3e3)):(s.animate({height:s.outerHeight()+n.outerHeight(!1)},500,"linear"),n.html(e),$(".dl_item").css("background-color",$.fn.colorLum(l,.4)),$(".dl_item").on("mouseover",function(){$(this).css("background-color",$.fn.colorLum(l,.5))}).on("mouseout",function(){$(this).css("background-color",$.fn.colorLum(l,.4))}))}var a,o,i,r,l,c={};return{get:e,getDownloads:s}}(),sbplusSlide=function(){function e(e,s,n,a,o){i="undefined"!=typeof o?o:i,l=s,r=e,m=l.pageImgFormat,1===Number($.fn.getCookie("sbplus-vjs-enabledSubtitles"))&&(k=!0),t(n,a),sbplusNotes.get(i,r,n,a),sbplus.resize()}function t(e,t){u=$(r[e]).find("page")[t],p=$(u).attr("type"),g="quiz"!==p?$(u).attr("src"):"",o(),$(".main_content_wrapper").removeClass("assessment-view"),$(".page_container .content").removeClass("img-only"),$(".page_container .content").removeClass("audio"),$(".page_container .content").removeClass("html"),null!==v&&(_=!1,x=!1,S=!1,j=!1,A=[],v.dispose(),v=null),sbplusTableOfContents.update(e,t),s(),window.clearTimeout(E),E=window.setTimeout(function(){$.fn.setCookie("sbplus-"+$.fn.getRootDirectory(),e+":"+t)},3e3)}function s(){switch(c=$(".page_container .content"),p){case"image":var e=new Image;$(e).load(function(){c.addClass("img-only").html(e)}).error(function(){c.before('<div class="slideError">Image not found!<br>Expected image: assets/pages/'+g+"."+m+"</div>")}).attr({src:"assets/pages/"+g+"."+m,border:0});break;case"image-audio":var t="";d="assets/audio/",f="audio/mp3",h=".mp3",$.get("assets/pages/"+g+"."+m,function(){t=this.url}).fail(function(){c.before('<div class="slideError">Image not found!<br>Expected image: assets/pages/'+g+"."+m+"</div>")}).always(function(){$.get(d+g+".vtt",function(){b='<track kind="subtitles" label="English" srclang="en" src="'+d+g+'.vtt" '+(k===!0?"default":"")+" />"}).always(function(){c.addClass("audio").html('<video id="ap" class="video-js vjs-default-skin" poster="'+t+'" webkit-playsinline>'+b+"</video>").promise().done(function(){a()})})});break;case"video":d="assets/video/",f="video/mp4",h=".mp4",$.get(d+g+".vtt",function(){b='<track kind="subtitles" label="English" srclang="en" src="'+d+g+'.vtt" '+(k===!0?"default":"")+" />"}).always(function(){c.html('<video id="ap" class="video-js vjs-default-skin" webkit-playsinline>'+b+"</video>").promise().done(function(){a()})});break;case"kaltura":0===C?$.getScript(i.sbplus_root_directory+"/scripts/libs/kaltura/mwembedloader.js",function(){$.getScript(i.sbplus_root_directory+"/scripts/libs/kaltura/kwidgetgetsources.js",function(){C=1,n()})}):n();break;case"youtube":case"vimeo":"youtube"===p?x=!0:S=!0,c.html('<video id="ap" class="video-js vjs-default-skin" webkit-playsinline></video>').promise().done(function(){a()});break;case"html":c.addClass("html").html('<iframe src="assets/html/'+g+'/index.html"></iframe>');break;case"bundle":var s="";d="assets/audio/",f="audio/mp3",h=".mp3",j=!0;var o=$(u).find("frame");o.each(function(){var e=$(this).attr("start");A.push($.fn.toSeconds(e))}),$.get("assets/pages/"+g+"-1."+m,function(){s=this.url}).fail(function(){c.before('<div class="slideError">Image not found!<br>Expected image: assets/pages/'+g+"."+m+"</div>")}).always(function(){$.get(d+g+".vtt",function(){b='<track kind="subtitles" label="English" srclang="en" src="'+d+g+'.vtt" '+(k===!0?"default":"")+" />"}).always(function(){c.html('<video id="ap" class="video-js vjs-default-skin" poster="'+s+'">'+b+"</video>").promise().done(function(){a()})})});break;case"quiz":var r=Number($(".selectable .selected").attr("data-order"));c.html(sbplusQuiz.get(c,u,r)),$("#assessmentSubmitBtn").on("click",function(){var e=$(this).data("id");sbplusQuiz.check(e)})}}function n(){var e,t,s;_=!0,kWidget.getSources({partnerId:i.sbplus_kaltura.id,entryId:g,callback:function(n){e=n.entryId,t=n.captionId,s=n.duration;for(var o in n.sources){var r=n.sources[o];r.flavorParamsId===i.sbplus_kaltura.low&&(y.low=r.src),r.flavorParamsId===i.sbplus_kaltura.normal&&(y.normal=r.src),r.flavorParamsId===i.sbplus_kaltura.high&&(y.high=r.src)}c.html('<video id="ap" class="video-js vjs-default-skin" crossorigin="anonymous" webkit-playsinline><track kind="subtitles" label="English" srclang="en" src="https://www.kaltura.com/api_v3/?service=caption_captionasset&action=servewebvtt&captionAssetId='+t+"&segmentDuration="+s+'&segmentIndex=1" '+(k===!0?"default":"")+" /></video>").promise().done(function(){a()})}})}function a(){var e={techOrder:["html5"],controls:!0,autoplay:1===Number($.fn.getCookie("sbplus-vjs-autoplay")),preload:"auto",playbackRates:[.5,1,1.5,2],controlBar:{fullscreenToggle:!1}};if((navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i))&&(e.autoplay=!1),_?e.plugins={videoJsResolutionSwitcher:{default:720}}:x?(e.techOrder=["youtube"],e.sources=[{type:"video/youtube",src:"https://www.youtube.com/watch?v="+g}],e.playbackRates=null,e.plugins={videoJsResolutionSwitcher:{default:720}}):S&&(e.techOrder=["vimeo"],e.sources=[{type:"video/vimeo",src:"https://vimeo.com/"+g}],e.playbackRates=null),v=videojs("ap",e,function(){var t=this;if(_?(t.updateSrc([{src:y.low,type:"video/mp4",label:"low",res:360},{src:y.normal,type:"video/mp4",label:"normal",res:720},{src:y.high,type:"video/mp4",label:"high",res:1080}]),t.on("resolutionchange",function(){t.playbackRate(w)}),t.on("ratechange",function(){w=t.playbackRate()})):x===!1&&S===!1&&t.src({type:f,src:d+g+h}),S&&e.autoplay&&t.play(),j){var s,n=new Image;$(".vjs-poster").after('<div class="sbplus-vjs-poster"></div>'),t.on("loadedmetadata",function(){s=Math.floor(t.duration())}),t.cuepoints(),t.addCuepoint({namespace:g+"-1",start:0,end:A[1],onStart:function(){n.src="assets/pages/"+g+"-1."+m,t.poster(n.src)},onEnd:function(){},params:""}),$.each(A,function(e){var a;a=void 0===A[e+1]?s:A[e+1],t.addCuepoint({namespace:g+"-"+(e+2),start:A[e],end:a,onStart:function(){n.src="assets/pages/"+g+"-"+(e+2)+"."+m,$(".sbplus-vjs-poster").css("background-image","url(assets/pages/"+g+"-"+(e+1)+"."+m),t.poster(n.src)}})}),t.on("seeking",function(){t.currentTime()<=A[0]&&($(".sbplus-vjs-poster").css("background-image",""),t.poster("assets/pages/"+g+"-1."+m))})}null!==e.playbackRates&&($.fn.hasCookieValue("sbplus-vjs-playbackrate-temp")?t.playbackRate(Number($.fn.getCookie("sbplus-vjs-playbackrate-temp"))):t.playbackRate(Number($.fn.getCookie("sbplus-vjs-playbackrate")))),$.fn.hasCookieValue("sbplus-vjs-volume-temp")?t.volume(Number($.fn.getCookie("sbplus-vjs-volume-temp"))):t.volume(Number($.fn.getCookie("sbplus-vjs-volume"))),t.on("volumechange",function(){$.fn.setCookie("sbplus-vjs-volume-temp",this.volume(),0)}),t.on("ratechange",function(){$.fn.setCookie("sbplus-vjs-playbackrate-temp",this.playbackRate(),0)}),t.textTracks().addEventListener("change",function(){var e=this.tracks_;$.each(e,function(){return"showing"===this.mode?(k=!0,!1):void(k=!1)})})}),navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)){var t=$("video").get(0);makeVideoPlayableInline(t),$(".video-js").removeClass("vjs-using-native-controls"),$(".vjs-loading-spinner").hide()}}function o(){$(".slideError").length&&$(".slideError").remove()}var i,r,l,c,u,d,p,f,h,g,m,v=null,b,w=1,k=!1,C=0,y={},_=!1,x=!1,S=!1,j=!1,A=[],E;return{get:e}}(),sbplusQuiz=function(){function e(e,s,n){c=e,i=s;var o;if((o=a(n))>=0)l=r[o];else{var u={},d=$(s).find("question");if(u.id=n,u.type=$(s).children()[0].nodeName,u.title={description:d.text()},u.answer=[],u.answered=!1,"multipleChoiceSingle"===u.type||"multipleChoiceMultiple"===u.type){$.fn.isEmpty(d.attr("image"))||(u.title.image=d.attr("image")),$.fn.isEmpty(d.attr("audio"))||(u.title.audio=d.attr("audio"));var p=$(s).find("choices").find("answer");$.each(p,function(){var e=$(this).attr("image"),t=$(this).attr("audio"),s={};s.value=$(this).find("value").text(),$.fn.isEmpty(e)||(s.image=e,s.value=$.fn.removeExtension(e)),$.fn.isEmpty(t)||(s.audio=t,s.value=$.fn.removeExtension(t)),"multipleChoiceSingle"===u.type&&(s.feedback=$(this).find("feedback").text()),"yes"===$(this).attr("correct")&&(s.correct="yes"),u.answer.push(s)})}"fillInTheBlank"===u.type||"multipleChoiceMultiple"===u.type?("fillInTheBlank"===u.type&&(u.answer=$(s).find("answer").text()),u.correctFeedback=$(s).find("correctFeedback").text(),u.incorrectFeedback=$(s).find("incorrectFeedback").text()):"shortAnswer"===u.type&&(u.feedback=$(s).find("feedback").text(),u.answer=""),l=u,r.push(u)}return t()}function t(){if($(".main_content_wrapper").addClass("assessment-view"),!l.answered){var e='<div class="assessment">';switch(l.type){case"shortAnswer":e+='<div class="header"><span class="icon-assessment"></span> Question for Self Assessment: Short Answer</div>',e+='<div class="title">'+l.title.description+"</div>",e+="<textarea></textarea>";break;case"fillInTheBlank":e+='<div class="header"><span class="icon-assessment"></span> Question for Self Assessment: Fill in the Blank</div>',e+='<div class="title">'+l.title.description+"</div>",e+='<input type="text" />';break;case"multipleChoiceSingle":case"multipleChoiceMultiple":e+='<div class="header"><span class="icon-assessment"></span> Question for Self Assessment: Multiple Choice</div>';var t=!1,s=!1,a=!1,o=!1,i=!1,r="radio",c="single";"multipleChoiceMultiple"===l.type&&(i=!0,r="checkbox",c="ma"),void 0!==l.answer[0].image&&(t=!0),void 0!==l.answer[0].audio&&(s=!0),void 0!==l.title.image&&(a=!0),void 0!==l.title.audio&&(o=!0),e+='<div class="title">',e+=l.title.description,a&&(e+='<img src="assets/images/'+l.title.image+'" />'),o&&(e+='<audio controls><source src="assets/audio/'+l.title.audio+'" type="audio/mpeg" /></audio>'),e+="</div>",t?e+='<div class="hasImages">':s&&(e+='<div class="hasAudio">'),$.each(l.answer,function(){var n=$.fn.cleanString(this.value);e+=s?'<label for="'+n+'"><input id="'+n+'" type="'+r+'" name="'+c+'" value="'+n+'" /><audio controls><source src="assets/audio/'+this.audio+'" type="audio/mpeg"/></audio></label>':t?'<label for="'+n+'"><input id="'+n+'" type="'+r+'" name="'+c+'" value="'+n+'" /><img src="assets/images/'+this.image+'" alt="'+this.value+'" /></label>':'<label for="'+n+'"><input id="'+n+'" type="'+r+'" name="'+c+'" value="'+n+'" /> '+this.value+"</label>"}),(t||s)&&(e+="</div>")}return e+='<button id="assessmentSubmitBtn">Submit</button></div>'}n()}function s(){switch(l.stuAnswer="",l.type){case"shortAnswer":l.stuAnswer=$("textarea").val();break;case"fillInTheBlank":l.stuAnswer=$("input").val(),l.stuAnswer!==l.answer?l.correct=!1:l.correct=!0;break;case"multipleChoiceSingle":var e=$('input:radio[name="single"]'),s=e.index(e.filter(":checked"));l.stuAnswer=$('input[type="radio"]:checked').val(),$.each(l.answer,function(){return void 0!==this.correct?(l.stuAnswer===$.fn.cleanString(this.value)?l.correct=!0:l.correct=!1,!0):void 0}),l.stuAnswer=s;break;case"multipleChoiceMultiple":var n=$('input:checkbox[name="ma"]'),a=[];if(l.stuAnswer=[],n.each(function(e){if(this.checked){var t={};t.value=$(this).val(),t.index=e,l.stuAnswer.push(t)}}),$.each(l.answer,function(e){void 0!==this.correct&&a.push(e)}),l.stuAnswer.length<a.length||l.stuAnswer.length>a.length)l.correct=!1;else if(l.stuAnswer.length===a.length)for(var i=0;i<l.stuAnswer.length;i++){if(!($.inArray(l.stuAnswer[i].index,a)>=0)){l.correct=!1;break}l.correct=!0}}$.isArray(l.stuAnswer)?l.stuAnswer.length>=1?(l.answered=!0,t()):o():""!==l.stuAnswer&&-1!==l.stuAnswer?(l.answered=!0,t()):o()}function n(){var e='<div class="assessment">';e+='<div class="header"><span class="icon-assessment"></span> Feedback for Self Assessment</div>',l.correct?e+='<div class="correctStatus"><span class="icon-check"></span> Correct!</div>':l.correct===!1&&(e+='<div class="incorrectStatus"><span class="icon-warning"></span> Incorrect!</div>');var t=!1,s=!1;switch($.isArray(l.answer)&&void 0!==l.answer[0].image&&(n=!0),void 0!==l.title.image&&(t=!0),void 0!==l.title.audio&&(s=!0),e+='<div class="title">',e+=l.title.description,t&&(e+='<img src="assets/images/'+l.title.image+'" />'),s&&(e+='<audio controls><source src="assets/audio/'+l.title.audio+'" type="audio/mpeg" /></audio>'),e+="</div>",e+='<div class="content">',l.type){case"shortAnswer":e+="<p><strong>Your answer:</strong><br>"+l.stuAnswer+"</p>",e+="<p><strong>Feedback:</strong><br>"+l.feedback+"</p>";break;case"fillInTheBlank":e+="<p><strong>Your answer:</strong><br>"+l.stuAnswer+"</p>",e+="<p><strong>Correct answer:</strong><br>"+l.answer+"</p>",e+=l.correct?"<p><strong>Feedback:</strong><br>"+l.correctFeedback+"</p>":"<p><strong>Feedback:</strong><br>"+l.incorrectFeedback+"</p>";break;case"multipleChoiceSingle":var n=!1,a=!1;void 0!==l.answer[0].image&&(n=!0),void 0!==l.answer[0].audio&&(a=!0),e+=n?'<p><strong>Your answer:</strong><br><img src="assets/images/'+l.answer[l.stuAnswer].image+'" alt="'+l.answer[l.stuAnswer].value+'" /></p>':a?'<p><strong>Your answer:</strong><br><audio controls><source src="assets/audio/'+l.answer[l.stuAnswer].audio+'" type="audio/mpeg" /></audio></p>':"<p><strong>Your answer:</strong><br>"+l.answer[l.stuAnswer].value+"</p>",$.each(l.answer,function(){return void 0!==this.correct?(e+=n?'<p><strong>Correct answer:</strong><br><img src="assets/images/'+this.image+'" alt="'+this.value+'" /></p>':a?'<p><strong>Correct answer:</strong><br><audio controls><source src="assets/audio/'+this.audio+'" type="audio/mpeg" /></audio></p>':"<p><strong>Correct answer:</strong><br>"+this.value+"</p>",!0):void 0}),e+="<p><strong>Feedback:</strong><br>"+l.answer[l.stuAnswer].feedback+"</p>";break;case"multipleChoiceMultiple":var n=!1,a=!1;void 0!==l.answer[0].image&&(n=!0),void 0!==l.answer[0].audio&&(a=!0),e+="<p><strong>Your answer:</strong></p>",e+=n?'<ul class="images">':a?'<ul class="audio">':"<ul>",$.each(l.stuAnswer,function(){e+=n?'<li><img src="assets/images/'+l.answer[this.index].image+'" alt="'+l.answer[this.index].value+'" /></li>':a?'<li><audio controls><source src="assets/audio/'+l.answer[this.index].audio+'" type="audio/mpeg" /></audio></li>':"<li>"+l.answer[this.index].value+"</li>"}),e+="</ul>",e+="<p><strong>Correct answer:</strong></p>",e+=n?'<ul class="images">':a?'<ul class="audio">':"<ul>",$.each(l.answer,function(){void 0!==this.correct&&(e+=n?'<li><img src="assets/images/'+this.image+'" alt="'+this.value+'" /></li>':a?'<li><audio controls><source src="assets/audio/'+this.audio+'" type="audio/mpeg" /></audio></li>':"<li>"+this.value+"</li>")}),e+="</ul>",e+=l.correct?"<p><strong>Feedback:</strong><br>"+l.correctFeedback+"</p>":"<p><strong>Feedback:</strong><br>"+l.incorrectFeedback+"</p>"}return e+="</div></div>",c.html(e),sbplus.resize(),!1}function a(e){var t=-1;return $.each(r,function(s){return this.id===e?(t=s,!0):void 0}),t}function o(){$(".assessment .header").after('<div class="error"><span class="icon-warning"></span> Please answer the question before submitting.'),setTimeout(function(){$(".assessment .error").remove()},5e3)}var i,r=[],l={},c;return{get:e,check:s}}(),sbplusTableOfContents=function(){function e(e,s){o=s,a=e,t()}function t(){var e=$(".tableOfContents");$.each(a.section,function(t){var s=$(this).find("page"),n=$.fn.isEmpty($(this).attr("title"))?"Section "+(t+1):$(this).attr("title");e.append('<div class="section"><div class="header"><div class="title" tabindex="1">'+n+'</div><div class="expandCollapseIcon"><span class="icon-collapse"></span></div></div><div class="content"><ul class="selectable">'),$.each(s,function(e){$(".selectable:eq("+t+")").append('<li tabindex="1" class="selectee" data-section="'+t+'" data-page="'+e+'" data-order="'+a.trackCount+'">'+("quiz"!==$(this).attr("type")?'<span class="num">'+(a.trackCount+1)+".</span> ":'<span class="icon-assessment"></span> ')+$(this).attr("title")+"</li>"),a.trackCount++}),e.append("</ul></div></div>")}),s()}function s(){var e=$(".tableOfContents .section .header"),t=$(".selectable .selectee");a.section.length>=2?e.on("click",function(){var e=$(this).parent().find(".content"),t=$(this).parent().find(".expandCollapseIcon").find("span");$(e).is(":visible")?e.slideUp(250,function(){$(t).removeClass("icon-collapse").addClass("icon-open")}):e.slideDown(250,function(){$(t).removeClass("icon-open").addClass("icon-collapse")})}):e.remove(),t.on("click",function(){if(a.section.length>=2){var e=$(this).parent().parent().prev();$(".header").removeClass("current"),$(e).addClass("current")}$(this).hasClass("selected")||sbplusSlide.get(a.section,o,$(this).data("section"),$(this).data("page")),t.removeClass("selected"),$(this).addClass("selected")})}function n(e,t){var s=$(".section .header:eq("+e+")"),n=$(".section:eq("+e+') .selectee[data-page="'+t+'"]');$(".header").removeClass("current"),$(".selectee").removeClass("selected"),s.addClass("current"),n.addClass("selected"),$(".sr-PageStatus .pageTitle").html($($(a.section[e]).find("page")[t]).attr("title")),$(".sr-PageStatus .currentPage").html(Number(n.data("order"))+1),setTimeout(function(){sbplusControls.update(n.data("order"))},250),$(document).width()>414&&$(document).height()>736&&$(".selectable .selectee.selected").autoscroll($(".side_panel .tableOfContents"))}var a,o;return{get:e,update:n}}(),sbplusControls=function(){function e(e,t){o=e,i=t,l=$(o).find("page").length,r=$(o).length,$(".control_bar_wrapper .next").on("click",function(){var e=Number($(".selectee.selected").data("section")),t=$(o[e]).find("page").length,s=Number($(".selectee.selected").data("page"));c=Number($(".selectee.selected").data("order")),t-1>s?s++:(s=0,r-1>e&&e++),c++,c>l-1&&(s=0,e=0,c=0),sbplusSlide.get(o,i,e,s)}),$(".control_bar_wrapper .previous").on("click",function(){var e=Number($(".selectee.selected").data("section")),t=$(o[e]).find("page").length,s=Number($(".selectee.selected").data("page"));c=Number($(".selectee.selected").data("order")),t>s&&s>0?(s--,c--):(e--,0>e&&(e=r-1),s=$(o[e]).find("page").length-1,c=s),sbplusSlide.get(o,i,e,s)}),$(".control_bar_wrapper .downloadsBtn").on("click",function(){var e=$(".download_items");e.hasClass("hide")?e.removeClass("hide"):e.addClass("hide")}),$(".control_bar_wrapper .expandContractBtn").on("click",function(){var e=$(".page_container"),t=$(".control_bar_wrapper .notesBtn"),s=$(".control_bar_wrapper .tocBtn"),a=e.hasClass("expanded"),o=$(".notes, .side_panel"),i=$(this).find("span"),r=$(".main_content_wrapper");a?(e.removeClass("expanded").addClass("aspect-ratio").css("height","auto"),t.addClass("hide"),s.addClass("hide"),o.removeClass("hide"),i.removeClass("icon-contract").addClass("icon-expand"),r.removeClass("full-view"),n(),$(".control_bar_wrapper .expandOnly .tocBtn").removeClass("active"),$(".widget_container .side_panel").css("right","")):(e.addClass("expanded").removeClass("aspect-ratio"),$(".left_side .notes").hasClass("noNotes")===!1&&t.removeClass("hide"),s.removeClass("hide"),o.addClass("hide"),i.removeClass("icon-expand").addClass("icon-contract"),r.addClass("full-view")),sbplus.resize()}),$(".control_bar_wrapper .notesBtn").on("click",function(){var e=this,t=$(".widget_container .notes");t.hasClass("hide")?t.removeClass("hide").animate({top:"-250px"},250,function(){$(e).addClass("active")}):t.animate({top:"40px"},250,function(){t.addClass("hide"),$(e).removeClass("active")})}),$(".control_bar_wrapper .tocBtn").on("click",function(){var e=this,t=$(".widget_container .side_panel");t.hasClass("hide")?t.removeClass("hide").animate({right:"0"},250,function(){$(e).addClass("active")}):t.animate({right:-1*t.outerWidth()+"px"},250,function(){t.addClass("hide"),$(e).removeClass("active")})}),a()}function t(e){var t=$(".download_items .files");
void 0!==e.video&&t.append('<li><a href="'+e.video+'" download>Video</a></li>'),void 0!==e.audio&&t.append('<li><a href="'+e.audio+'" download>Audio</a></li>'),void 0!==e.pdf&&t.append('<li><a href="'+e.pdf+'" download>Transcript</a></li>'),void 0!==e.zip&&t.append('<li><a href="'+e.zip+'" download>Supplement</a></li>')}function s(e){e="undefined"!=typeof e?e:c,$(".control_bar_wrapper .status .current").html(e+1)}function n(){$(".control_bar_wrapper .notesBtn").removeClass("active"),$(".full-view .widget_container .notes").css("top","40px").addClass("hide")}function a(){s(),$(".control_bar_wrapper .status .total").html(l),$(".sr-PageStatus .totalPages").html(l);var e=sbplusDownloadable.getDownloads();void 0===e.video&&void 0===e.pdf&&void 0===e.audio&&void 0===e.zip?$(".control_bar_wrapper .downloadsBtn").hide():t(e)}var o,i,r=0,l=0,c=0;return{init:e,update:s,resetNote:n}}(),sbplusNotes=function(){function e(e,a,o,i){s=a,n=e,t(o,i)}function t(e,t){var o=$(s[e]).find("page")[t],i=$(o).find("note").text(),r=$(".widget_container .notes"),l=$(".control_bar_wrapper .notesBtn"),c=$(document).width(),u=$(document).height();if($.fn.isEmpty(i)){var d=n.sbplus_logo_directory+$.fn.getProgramDirectory()+".svg",p=new Image;r.html("").addClass("noNotes").attr("tabindex",-1),$(".sr-PageStatus .hasNotes").html(""),0===a.length?$(p).load(function(){a=p,r.html(p)}).error(function(){a='<img src="'+n.sbplus_logo_directory+n.sbplus_logo_default+'.svg" />',r.html(a)}).attr({src:d}):r.html(a),414>=c&&736>=u&&(l.addClass("hide"),r.addClass("hide")),l.addClass("hide"),sbplusControls.resetNote()}else r.removeClass("noNotes").attr("tabindex",1).html(i),$(".main_content_wrapper").hasClass("full-view")&&l.removeClass("hide"),414>=c&&736>=u&&(r.addClass("hide"),l.removeClass("hide")),$(".sr-PageStatus .hasNotes").html("This page contains notes.")}var s,n,a="";return{get:e}}(),sbplusMenu=function(){function e(e,s){c=e,l=s,t()}function t(){s()}function s(){$(".menuBtn").on("click",function(){return $(this).attr("aria-expanded","true"),$("#menu_panel").removeClass("hide").attr("aria-expanded","true"),!1}),$(".backBtn").on("click",function(){return a(),!1}),$(".closeBtn").on("click",function(){return $(".menuBtn").attr("aria-expanded","false"),$("#menu_panel").addClass("hide").attr("aria-expanded","false"),a(),!1}),$("#showProfile").on("click",n),$("#showGeneralInfo").on("click",n),$("#showHelp").on("click",n),$("#showSettings").on("click",n)}function n(){var e,t="",s="#"+this.id,n=this;switch(s){case"#showProfile":var i=l.data.find("setup").find("author"),r=i.attr("name");if(e="Author Profile",$.fn.isEmpty(i.text()))if(0===d.length){var f=c.sbplus_author_directory+$.fn.cleanString(r);$.ajax({crossDomain:!0,type:"GET",dataType:"jsonp",jsonpCallback:"author",url:f+".json",success:function(t){d=t;var s=new Image;$(s).load(function(){p='<img class="profileImg" src="'+f+'.jpg" alt="Photo of '+t.name+'" />',p+='<p class="name">'+t.name+"</p>"+t.profile,a(n,e,p)}).error(function(){p='<p class="name">'+t.name+"</p>"+t.profile,a(n,e,p)}).attr({src:f+".jpg",border:0})},error:function(){var t='<p style="color:#f00;">No author profile found for '+r+".</p>";a(n,e,t)}})}else t=p;else t=i.text();break;case"#showGeneralInfo":e="General Information",t=l.generalInfo;break;case"#showHelp":e="Help",t=c.sbplus_help_information;break;case"#showSettings":e="Settings",0===u.length?$.get(c.sbplus_root_directory+"scripts/templates/settings.tpl",function(t){u=t,a(n,e,t),o()}):(t=u,o());break;default:e="",t=""}return""!==e&&""!==t&&a(n,e,t),!1}function a(e,t,s){var n=$("#menu_panel"),a=$(".menu_item_details"),o=$(".menu_item_details .navbar .title"),l=$(".menu_item_details .menu_item_content");return"undefined"==typeof e?($(".menu_item a").attr("aria-expanded","false"),a.attr("aria-expanded","false").animate({right:"-100%"},250,function(){$(this).addClass("hide")}),void r()):($(e).attr("aria-expanded","true"),a.attr("aria-expanded","true"),o.html(t),l.html(s),a.removeClass("hide").animate({right:"0px"},250),"showSettings"===$(e)[0].id&&i(),void l.css("height",n.outerHeight()-$(".title_bar").outerHeight()-o.outerHeight()))}function o(){var e=$.fn.getCookie("sbplus-vjs-autoplay");"1"===e?$("#autoplay").prop("checked",!0):$("#autoplay").prop("checked",!1);var t=$.fn.getCookie("sbplus-vjs-volume");$("#volume").prop("value",100*t);var s=$.fn.getCookie("sbplus-vjs-playbackrate");$("#playback").val(s);var n=$.fn.getCookie("sbplus-vjs-enabledSubtitles");"1"===n?$("#subtitle").prop("checked",!0):$("#subtitle").prop("checked",!1)}function i(){$("#saveSettingBtn").on("click",function(e){var t=$(this),s=!1;t.prop("disabled",!0).html("Saving..."),$("#autoplay").is(":checked")?$.fn.setCookie("sbplus-vjs-autoplay",1):$.fn.setCookie("sbplus-vjs-autoplay",0);var n=$("#volume").val();return 0>n||n>100||""===n?(s=!0,n=8):$.fn.setCookie("sbplus-vjs-volume",n/100),$.fn.setCookie("sbplus-vjs-playbackrate",$("#playback option:selected").val()),$("#subtitle").is(":checked")?$.fn.setCookie("sbplus-vjs-enabledSubtitles",1):$.fn.setCookie("sbplus-vjs-enabledSubtitles",0),s?($("#volume").parent().parent().addClass("invalid"),$("#volume").parent().after('<p class="emsg">Must be between 0 to 100.</p>')):($("#volume").parent().parent().removeClass("invalid"),$(".emsg").remove()),setTimeout(function(){o(),t.html("Settings Saved!"),setTimeout(function(){t.prop("disabled",!1).html("Save")},2e3)},1e3),e.preventDefault(),!1})}function r(){$("#saveSettingBtn").unbind()}var l,c,u="",d="",p;return{get:e}}();
//# sourceMappingURL=./sbplus.js.map