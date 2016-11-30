function MenuBar(e,t){this.$id=$("#"+e),this.$rootItems=this.$id.children("li"),this.$items=this.$id.find(".menu-item").not(".separator"),this.$parents=this.$id.find(".menu-parent"),this.$allItems=this.$parents.add(this.$items),this.$activeItem=null,this.vmenu=t,this.bChildOpen=!1,this.keys={tab:9,enter:13,esc:27,space:32,left:37,up:38,right:39,down:40},this.bindHandlers()}MenuBar.prototype.bindHandlers=function(){var e=this;this.$items.on("mouseenter",function(){return $(this).addClass("menu-hover"),!0}),this.$items.on("mouseout",function(){return $(this).removeClass("menu-hover"),!0}),this.$allItems.on("click",function(){return e.handleClick($(this))}),this.$allItems.on("keydown",function(t){return e.handleKeydown($(this),t)}),this.$allItems.on("keypress",function(t){return e.handleKeypress($(this),t)}),this.$allItems.on("focus",function(t){return e.handleFocus($(this),t)}),this.$allItems.on("blur",function(t){return e.handleBlur($(this),t)}),$(document).on("click",function(t){return e.handleDocumentClick(t)})},MenuBar.prototype.handleMouseEnter=function(e){return e.addClass("menu-hover").attr("aria-expanded","true"),"true"===e.attr("aria-haspopup")&&e.children("ul").attr({"aria-hidden":"false","aria-expanded":"true"}),!0},MenuBar.prototype.handleMouseOut=function(e){return e.removeClass("menu-hover").attr("aria-expanded","false"),!0},MenuBar.prototype.handleMouseLeave=function(e){var t=e.find(".menu-focus");return e.removeClass("menu-hover").attr("aria-expanded","false"),t.length>0&&(this.bChildOpen=!1,t.removeClass("menu-focus"),this.$activeItem=e,e.focus()),e.children("ul").attr({"aria-hidden":"true","aria-expanded":"false"}),!0},MenuBar.prototype.handleClick=function(e){var t=e.parent();if(t.is(".root-level")){var i=e.children("ul").first();"false"===i.attr("aria-hidden")?(e.attr("aria-expanded","false"),i.attr({"aria-hidden":"true","aria-expanded":"false"})):(e.attr("aria-expanded","true"),i.attr({"aria-hidden":"false","aria-expanded":"true"}))}else this.$allItems.removeClass("menu-hover menu-focus"),e.attr("aria-expanded","false"),this.$id.find("ul").not(".root-level").attr({"aria-hidden":"true","aria-expanded":"false"})},MenuBar.prototype.handleFocus=function(e){if(null===this.$activeItem)this.$activeItem=e;else if(e[0]!==this.$activeItem[0])return!0;var t=this.$activeItem.parentsUntil("div").filter("li");if(this.$allItems.removeClass("menu-focus"),this.$activeItem.addClass("menu-focus"),t.addClass("menu-focus"),this.vmenu===!0)if(this.bChildOpen===!0){var i=e.parent();i.is(".root-level")&&"true"===e.attr("aria-haspopup")&&(e.attr("aria-expanded","true"),e.children("ul").attr({"aria-hidden":"false","aria-expanded":"true"}))}else this.vmenu=!1;return!0},MenuBar.prototype.handleBlur=function(e){return e.removeClass("menu-focus"),!0},MenuBar.prototype.handleKeydown=function(e,t){if(t.altKey||t.ctrlKey)return!0;var i=e.parent();switch(t.keyCode){case this.keys.tab:e.attr("aria-expanded","false"),this.$id.find("ul").attr({"aria-hidden":"true","aria-expanded":"false"}),this.$allItems.removeClass("menu-focus"),this.$activeItem=null,this.bChildOpen=!1;break;case this.keys.esc:return e.attr("aria-expanded","false"),i.is(".root-level")?e.children("ul").first().attr({"aria-hidden":"true","aria-expanded":"false"}):(this.$activeItem=i.parent(),this.bChildOpen=!1,this.$activeItem.focus(),i.attr({"aria-hidden":"true","aria-expanded":"false"})),t.stopPropagation(),!1;case this.keys.enter:case this.keys.space:var s=e.parent();if(s.is(".root-level"))e.children("ul").first().attr({"aria-hidden":"false","aria-expanded":"true"});else{this.$allItems.removeClass("menu-hover menu-focus"),this.$id.find("ul").not(".root-level").attr({"aria-hidden":"true","aria-expanded":"false"});var a=this.$activeItem.find("a").attr("id");document.getElementById(a).click(),this.$activeItem=null}return t.stopPropagation(),!1;case this.keys.left:return this.vmenu===!0&&i.is(".root-level")?this.$activeItem=this.moveUp(e):this.$activeItem=this.moveToPrevious(e),this.$activeItem.focus(),t.stopPropagation(),!1;case this.keys.right:return this.vmenu===!0&&i.is(".root-level")?this.$activeItem=this.moveDown(e):this.$activeItem=this.moveToNext(e),this.$activeItem.focus(),t.stopPropagation(),!1;case this.keys.up:return this.vmenu===!0&&i.is(".root-level")?this.$activeItem=this.moveToPrevious(e):this.$activeItem=this.moveUp(e),this.$activeItem.focus(),t.stopPropagation(),!1;case this.keys.down:return this.vmenu===!0&&i.is(".root-level")?this.$activeItem=this.moveToNext(e):this.$activeItem=this.moveDown(e),this.$activeItem.focus(),t.stopPropagation(),!1}return!0},MenuBar.prototype.moveToNext=function(e){var t=e.parent(),i=t.children("li"),s=i.length,a=i.index(e),n=null,r=null;if(t.is(".root-level"))n=a<s-1?e.next():i.first(),"true"===e.attr("aria-haspopup")&&(r=e.children("ul").first(),"false"===r.attr("aria-hidden")&&(e.attr("aria-expanded","false"),r.attr({"aria-hidden":"true","aria-expanded":"false"}),this.bChildOpen=!0)),e.removeClass("menu-focus"),"true"===n.attr("aria-haspopup")&&this.bChildOpen===!0&&(r=n.children("ul").first(),e.attr("aria-expanded","true"),r.attr({"aria-hidden":"false","aria-expanded":"true"}));else if("true"===e.attr("aria-haspopup"))r=e.children("ul").first(),n=r.children("li").first(),e.attr("aria-expanded","true"),r.attr({"aria-hidden":"false","aria-expanded":"true"});else{if(this.vmenu===!0)return e;var o=null,l=null;o=e.parentsUntil("div").filter("ul").not(".root-level"),e.attr("aria-expanded","false"),o.attr({"aria-hidden":"true","aria-expanded":"false"}),o.find("li").removeClass("menu-focus"),o.last().parent().removeClass("menu-focus"),l=o.last().parent(),a=this.$rootItems.index(l),n=a<this.$rootItems.length-1?l.next():this.$rootItems.first(),n.addClass("menu-focus"),"true"===n.attr("aria-haspopup")&&(r=n.children("ul").first(),n=r.children("li").first(),e.attr("aria-expanded","true"),r.attr({"aria-hidden":"false","aria-expanded":"true"}),this.bChildOpen=!0)}return n},MenuBar.prototype.moveToPrevious=function(e){var t=e.parent(),i=t.children("li"),s=i.index(e),a=null,n=null;if(t.is(".root-level"))a=s>0?e.prev():i.last(),"true"===e.attr("aria-haspopup")&&(n=e.children("ul").first(),"false"===n.attr("aria-hidden")&&(e.attr("aria-expanded","false"),n.attr({"aria-hidden":"true","aria-expanded":"false"}),this.bChildOpen=!0)),e.removeClass("menu-focus"),"true"===a.attr("aria-haspopup")&&this.bChildOpen===!0&&(n=a.children("ul").first(),e.attr("aria-expanded","true"),n.attr({"aria-hidden":"false","aria-expanded":"true"}));else{var r=t.parent(),o=r.parent();this.vmenu!==!0&&o.is(".root-level")?(e.attr("aria-expanded","false"),t.attr({"aria-hidden":"true","aria-expanded":"false"}),e.removeClass("menu-focus"),r.removeClass("menu-focus"),s=this.$rootItems.index(r),a=s>0?r.prev():this.$rootItems.last(),a.addClass("menu-focus"),"true"===a.attr("aria-haspopup")&&(n=a.children("ul").first(),e.attr("aria-expanded","true"),n.attr({"aria-hidden":"false","aria-expanded":"true"}),this.bChildOpen=!0,a=n.children("li").first())):(a=t.parent(),e.attr("aria-expanded","false"),t.attr({"aria-hidden":"true","aria-expanded":"false"}),e.removeClass("menu-focus"),this.vmenu===!0&&(this.bChildOpen=!1))}return a},MenuBar.prototype.moveDown=function(e,t){var i=e.parent(),s=i.children("li").not(".separator"),a=s.length,n=s.index(e),r=null,o=null;if(i.is(".root-level"))return"true"!==e.attr("aria-haspopup")?e:(o=e.children("ul").first(),r=o.children("li").first(),$(o.parent()).attr("aria-expanded","true"),e.attr("aria-expanded","true"),o.attr({"aria-hidden":"false","aria-expanded":"true"}),r);if(t){var l=!1,u=n+1;for(u===a&&(u=0);u!==n;){var d=s.eq(u).html().charAt(0);if(d.toLowerCase()===t){l=!0;break}u+=1,u===a&&(u=0)}return l===!0?(r=s.eq(u),e.removeClass("menu-focus"),r):e}return r=n<a-1?s.eq(n+1):s.first(),e.removeClass("menu-focus"),r},MenuBar.prototype.moveUp=function(e){var t=e.parent(),i=t.children("li").not(".separator"),s=i.index(e),a=null;return t.is(".root-level")?e:(a=s>0?i.eq(s-1):i.last(),e.removeClass("menu-focus"),a)},MenuBar.prototype.handleKeypress=function(e,t){if(t.altKey||t.ctrlKey||t.shiftKey)return!0;switch(t.keyCode){case this.keys.tab:return!0;case this.keys.esc:case this.keys.up:case this.keys.down:case this.keys.left:case this.keys.right:return t.stopPropagation(),!1;default:var i=String.fromCharCode(t.which);return this.$activeItem=this.moveDown(e,i),this.$activeItem.focus(),t.stopPropagation(),!1}},MenuBar.prototype.handleDocumentClick=function(){return this.$allItems.removeClass("menu-focus"),this.$activeItem=null,!0};var SBPLUS=SBPLUS||{layout:null,tableOfContents:null,widget:null,button:null,menu:null,manifest:null,manifestLoaded:!1,manifestOptionsLoaded:!1,templateLoaded:!1,xml:null,xmlLoaded:!1,xmlParsed:!1,beforePresentingDone:!1,hasError:!1,go:function(){if(null!==this.manifest)return"Storybook Plus is already in ready state.";var e=this;this.layout={isMobile:!1,html:"html",wrapper:".sbplus_wrapper",sbplus:"#sbplus",errorScreen:"#sbplus_error_screen",splashScreen:"#sbplus_splash_screen",widget:"#sbplus_widget",media:"#sbplus_media_wrapper",sidebar:"#sbplus_right_col",dwnldMenu:null},this.tableOfContents={header:".section .header",page:".section .list .item"},this.widget={bar:"#sbplus_widget .tab_segment",segment:"#sbplus_widget button",segments:[]},this.button={start:"#sbplus_start_btn",resume:"#sbplus_resume_btn",download:"#sbplus_download_btn",widget:"#sbplus_widget_btn",sidebar:"#sbplus_sidebar_btn",author:"#sbplus_author_name",menu:"#sbplus_menu_btn"},this.menu={menuPanel:"#sbplus_menu_items_wrapper",menuBar:"#sbplus_sub_bar",menuList:"#sbplus_menu_items_wrapper .list",menuItem:"#sbplus_menu_items_wrapper .menu.item",menuContent:"#menu_item_content"},$.getJSON(this.getManifestUrl(),function(t){e.manifestLoaded=!0,e.manifest=t,e.loadTemplate()}).fail(function(){var t='<div class="error">';t+="<p><strong>Storybook Plus Error:</strong> ",t+="failed to load the manifest file.<br>",t+="Expecting: <code>"+this.url+"</code></p>",t+="</div>",$(e.layout.wrapper).html(t)})},loadTemplate:function(){if(!this.manifestLoaded||this.templateLoaded!==!1)return"Storybook Plus template already loaded.";var e=this,t=this.manifest.sbplus_root_directory;t+="scripts/templates/sbplus.tpl",$.get(t,function(t){return e.templateLoaded=!0,$(e.layout.wrapper).html(t),e.beforePresenting(),0===e.checkForSupport()?(e.hasError=!0,e.showErrorScreen("support"),!1):(e.loadXML(),$(e.button.sidebar).on("click",e.toggleSidebar.bind(e)),$(e.button.widget).on("click",e.toggleWidget.bind(e)),$(e.button.menu).on("click",e.toggleMenu.bind(e)),$(e.button.author).on("click",function(){e.openMenuItem("#sbplus_author_profile")}),$(e.button.start).on("click",e.hideSplash.bind(e)),$(e.button.resume).on("click",e.hideSplash.bind(e)),$(e.tableOfContents.header).on("click",e.toggleSection.bind(e)),$(e.tableOfContents.page).on("click",e.selectPage.bind(e)),$(e.widget.segment).on("click",e.changeSegment.bind(e)),e.layout.dwnldMenu=new MenuBar($(e.button.download)[0].id,!1),void $(window).on("resize",e.resize.bind(e)))}).fail(function(){var t='<div class="error">';t+="<p><strong>Storybook Plus Error:</strong> ",t+="failed to load template.<br>",t+="Expecting: <code>"+this.url+"</code></p>",t+="</div>",$(e.layout.wrapper).html(t)})},beforePresenting:function(){if(this.manifestLoaded&&this.templateLoaded&&this.beforePresentingDone===!1){this.beforePresentingDone=!0,this.resize(),this.setURLOptions();var e=$(this.tableOfContents.header);1===e.length&&e.hide().off("click"),this.setManifestOptions()}},loadXML:function(){if(this.beforePresentingDone!==!0||this.xmlLoaded!==!1)return"XML already loaded.";var e=this,t="assets/sbplus.xml";$.get(t,function(t){e.xmlLoaded=!0,e.parseXMLData(t)}).fail(function(t,i){e.hasError=!0,"parsererror"===i?e.showErrorScreen("parser"):e.showErrorScreen("xml")})},parseXMLData:function(e){if(!this.xmlLoaded||this.xmlParsed!==!1)return"XML already parsed.";var t=$(e),i=t.find("storybook"),s=t.find("setup"),a=i.attr("accent").trim(),n=i.attr("pageImgFormat").toLowerCase().trim(),r=i.attr("analytics").toLowerCase().trim(),o=i.attr("mathjax").toLowerCase().trim(),l=i.attr("xmlVersion"),u=s.attr("program").toLowerCase().trim(),d=s.attr("course").toLowerCase().trim(),h=s.find("title").text().trim(),p=s.find("subtitle").text().trim(),m=s.find("length").text().trim(),c=s.find("author"),f=s.find("generalInfo").text().trim(),v=t.find("section");this.isEmpty(a)&&(a="#0c3b6b"),this.isEmpty(n)&&(n="jpg"),"on"!==r&&(r="off"),"on"!==o&&(o="off"),this.xml={settings:{accent:a,imgType:n,analytics:r,mathjax:o,version:l},setup:{program:u,course:d,title:h,subtitle:p,length:m,author:c.attr("name").trim(),profile:c.text().trim(),generalInfo:f},sections:v},this.xmlParsed=!0},hideSplash:function(){$(this.layout.splashScreen).addClass("fadeOut").one("webkitAnimationEnd mozAnimationEnd animationend",function(){$(this).removeClass("fadeOut").hide(),$(this).off()})},toggleSidebar:function(){$(this.layout.sidebar).is(":visible")?this.hideSidebar():this.showSidebar()},hideSidebar:function(){var e=$(this.layout.widget),t=$(this.layout.media);$(this.layout.sidebar).hide(),$(this.button.sidebar).removeClass("sb_active"),e.is(":visible")&&e.outerHeight()<=190&&t.removeClass("aspect_ratio").addClass("non_aspect_ratio")},showSidebar:function(){var e=$(this.layout.widget),t=$(this.layout.media);$(this.layout.sidebar).show(),$(this.button.sidebar).addClass("sb_active"),e.is(":visible")&&e.outerHeight()<=190&&t.removeClass("non_aspect_ratio").addClass("aspect_ratio")},toggleSection:function(e){var t=$(this.tableOfContents.header).length;if(t>1){var i;if(e instanceof Object)i=$(e.currentTarget);else{if(Number(e)>t-1)return!1;i=$(".header:eq("+e+")")}var s=$(i.siblings(".list")),a=i.find(".icon");s.is(":visible")?(s.slideUp(),a.html('<span class="icon-open"></span>')):(s.slideDown(),a.html('<span class="icon-collapse"></span>'))}},selectPage:function(e){var t;if(e instanceof Object)t=$(e.currentTarget);else if(t=$('.item[data-page="'+e+'"]'),0===t.length)return!1;if($(this.layout.splashScreen).is(":visible")&&this.hideSplash(),!t.hasClass("sb_selected")){var i=$(this.tableOfContents.page),s=$(this.tableOfContents.header);if(s.length>1){var a=t.parent().siblings(".header");a.hasClass("current")||(s.removeClass("current"),a.addClass("current"))}i.removeClass("sb_selected"),t.addClass("sb_selected")}},toggleMenu:function(){$(this.menu.menuPanel).is(":visible")?this.hideMenu():this.showMenu()},showMenu:function(){$(this.layout.sidebar).is(":visible")||this.showSidebar();var e=$(this.menu.menuPanel);$(this.button.menu).html('<span class="icon-close"></span>').css({color:"#f00","padding-top":"4px"}),$(this.menu.menuBar).find(".title").html("Menu"),e.show().addClass("slideInRight").one("webkitAnimationEnd mozAnimationEnd animationend",function(){$(this).removeClass("slideInRight"),$(this).off()}),$(this.menu.menuItem).on("click",this.openMenuItem.bind(this))},hideMenu:function(){var e=this,t=$(this.menu.menuPanel),i=$(this.menu.menuBar);$(this.button.menu).html("Menu").css({color:"","padding-top":""}),i.find(".title").html("Table of Contents"),t.addClass("slideOutRight").one("webkitAnimationEnd mozAnimationEnd animationend",function(){t.hide().removeClass("slideOutRight"),e.resetMenu(),$(this).off()})},openMenuItem:function(e){var t=this;$(this.layout.splashScreen).is(":visible")&&this.hideSplash(),$(this.menu.menuPanel).is(":visible")||this.showMenu();var i="";i="string"==typeof e?e:e.currentTarget.id;var s=$(this.menu.menuBar),a=$(this.menu.menuList),n=$(this.menu.menuContent),r=$("#"+i),o=s.find(".backBtn");s.removeClass("full"),s.find(".title").html(r.html()),n.is(":visible")?a.off():(a.hasClass("fadeOutLeft")||a.addClass("fadeOutLeft"),a.one("webkitAnimationEnd mozAnimationEnd animationend",function(){$(this).hide().removeClass("fadeOutLeft");var e="";switch(i){case"sbplus_author_profile":e="<p>Author's profile goes here...</p>";break;case"sbplus_general_info":e="<p>General information goes here...</p>";break;case"sbplus_settings":e="<p>Settings go here...</p>";break;default:var s=t.manifest.sbplus_custom_menu_items;for(var a in s){var r="sbplus_"+t.sanitize(s[a].name);if(i===r){e=s[a].content;break}}}n.fadeIn().html(e),$(this).off()}),o.show().prop("disabled",!1).one("click",function(){s.addClass("full").find(".title").html("Menu"),a.show(),a.hasClass("fadeInLeft")||a.addClass("fadeInLeft"),a.one("webkitAnimationEnd mozAnimationEnd animationend",function(){$(this).removeClass("fadeInLeft"),$(this).off()}),n.hide().empty(),$(this).prop("disabled",!0),$(this).off("click")}))},resetMenu:function(){if(!$(this.menu.menuPanel).is(":visible")){var e=$(this.menu.menuBar);e.find(".title").html("Table of Contents"),e.addClass("full"),e.find(".backBtn").hide().prop("disabled",!0),$(this.menu.menuList).show(),$(this.menu.menuContent).empty().hide(),$(this.menu.menuItem).off("click")}},toggleWidget:function(){$(this.layout.widget).is(":visible")?this.hideWidget():this.showWidget()},hideWidget:function(){var e=$(this.layout.media);$(this.layout.widget).hide(),$(this.button.widget).removeClass("sb_active"),this.layout.isMobile?(e.addClass("aspect_ratio"),this.resize()):e.removeClass("aspect_ratio").addClass("non_aspect_ratio").css("height","100%")},showWidget:function(){$(this.layout.widget).show(),$(this.button.widget).addClass("sb_active"),$(this.layout.media).removeClass("non_aspect_ratio").addClass("aspect_ratio").css("height",""),this.resize()},changeSegment:function(e){var t=$(this.widget.segment),i=$(e.currentTarget);t.removeClass("active"),i.addClass("active")},addSegment:function(e){var t='<button id="'+this.sanitize(e)+'">'+e+"</button>";this.widget.segments.push(e),$(this.widget.bar).append(t)},setManifestOptions:function(){if(this.manifestOptionsLoaded!==!1)return"Manifest options already loaded.";this.manifestOptionsLoaded=!0;var e=this.manifest.sbplus_custom_menu_items;if(e.length)for(var t in e){var i=e[t].name,s=this.sanitize(i),a='<li class="menu item" id="sbplus_'+s+'"><span class="icon-'+s+'"></span> '+i+"</li>";$(this.menu.menuList).append(a)}},checkForSupport:function(){return Modernizr.video&&Modernizr.eventlistener&&Modernizr.json&&Modernizr.flexbox&&Modernizr.flexwrap&&Modernizr.csscalc?1:0},showErrorScreen:function(e){if(this.hasError&&e.length){var t=this.manifest.sbplus_root_directory;switch($(this.layout.sbplus).hide(),e){case"support":t+="scripts/templates/support_error.tpl";break;case"xml":t+="scripts/templates/xml_error.tpl";break;case"parser":t+="scripts/templates/xml_parse_error.tpl";break;default:t=""}if(t.length){var i=this;$.get(t,function(e){$(i.layout.errorScreen).html(e).show().addClass("shake").css("display","flex")})}}},calcLayout:function(){var e=$(this.layout.media),t=$(this.layout.widget),i=$(this.layout.sidebar);window.innerWidth>=1826?e.removeClass("aspect_ratio").addClass("non_aspect_ratio"):e.removeClass("non_aspect_ratio").addClass("aspect_ratio"),t.is(":visible")||e.css("height","100%"),window.innerWidth<=740||window.screen.width<=414?this.layout.isMobile=!0:this.layout.isMobile=!1,this.layout.isMobile===!1&&t.outerHeight()<=190&&e.removeClass("aspect_ratio").addClass("non_aspect_ratio"),this.layout.isMobile===!0?i.css("max-height","400px"):i.css("max-height",""),this.calcWidgetHeight()},calcWidgetHeight:function(){var e=$(this.layout.sidebar),t=$(this.layout.widget);this.layout.isMobile===!0?t.css({"min-height":e.outerHeight(),bottom:e.outerHeight()*-1}):t.css({"min-height":"",bottom:""})},resize:function(){this.calcLayout(),this.layout.isMobile&&this.showSidebar()},setURLOptions:function(){var e=$(this.layout.html),t=$(this.layout.wrapper);"1"===this.getUrlParam("fullview")?(e.addClass("sbplus_pop_full"),t.removeClass("sbplus_boxed").addClass("sbplus_full")):(e.removeClass(".sbplus_pop_full"),t.addClass("sbplus_boxed").removeClass("sbplus_full"))},getUrlParam:function(e){var t=new RegExp("[?&]"+e+"=([^&#]*)").exec(window.location.href);return null===t?null:t[1]||0},getManifestUrl:function(){var e=$("#sbplus_configs");return e.length?e[0].href:""},sanitize:function(e){return e.replace(/[^\w]/gi,"").toLowerCase()},isEmpty:function(e){return void 0===e||!e.trim()||0===e.trim().length}};$(function(){SBPLUS.go()});
//# sourceMappingURL=./sbplus.js.map