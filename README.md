# Storybook Plus (SB+)  
**version 3.1.4**

---
### Requirements

Storybook Plus is a web application that uses HTML5, JavaScript, CSS3, and web storage to delivery multimedia presentations. As with any other web applications, the choice of web browsers is the most critical rather than the operation systems. JavaScript must be enabled no matter which web browser is utilized. SB+ does not use cookies; however, it does use both local and session web storages.

**Minimum web browser requirements for desktop/laptop:**
* Internet Explorer 11 (in non-Compatibility View mode)
* Microsoft Edge (version 12+)
* Mozilla Firefox (version 45+)
* Google Chrome (version 21+)
* Apple Safari (version 6.1+)
* Opera (version 12.1+)

**Minimum web browser requirements for mobile/smart device:**
* iOS Safari (version 7.1+)
* Opera Mobile (37)
* Android Browser (version 56+)
* Google Chrome for Android (version 57+)
* Mozilla Firefox for Android (version 52)
* Internet Explorer Mobile (version 11.4)

**Recommended (latest stable version) web browsers in order:**
* Mozilla Firefox
* Google Chrome
* Apple Safari
* Microsoft Edge

**Requirement and Recommendations for accessibilities:**
* Windows OS (check screen reader requirements for additional details)
* Mozilla Firefox or Google Chrome
* JAWS (version 16+)
* NVDA (latest version)
* Windows Eyes (version 8+)
* VoiceOver on iOS (iPhone/iPad)

Notes: most visually impaired users started out using screen reader with Internet Explorer prepackaged. However, and unfortunately, Microsoft stops supporting accessibilities as newer versions of Internet Explorer were released. Storybook Plus will cause additional restrictions for screen reader due to Microsoft’s non-existent accessibility supports for HTML5 on Internet Explorer including their latest web browser application, Microsoft Edge. Based on our user testing results, visually impaired users are moving toward Mozilla Firefox or Google Chrome.

SB+ may not function properly with beta or pre-released version of web browsers. Please use the latest stable version for the best experience.

---
### Version Change Log

#### Pending
_none at the moment_

#### 3.1.4
* Fixed an issue where author photo is not loaded from server.
* Author placeholder image has been removed to give more space for text when there is not author photo.

#### 3.1.3
* If both image and audio are missing for image-audio page type, both errors will be displayed in the error message
* Fixed issue with responsiveness inside an iFrame
* Fixed issue where the page jumps when presentation started
* Default splash image will be loaded last if no other splash image is found (#77) - preventing the distracting flash
* Added a CSS hack for zooming on D2L on a Windows platform
* Fixed an issue where Error Message screen was out of view (#78) and full view URL query is not functioning
* Enhanced HTML page type to allow audio and to open a new tab/window instead of embed
* Enhanced/improved Google Analytic tracking
* Fixed table of content collapsible icon alignment (#79)
* Collapsed section will now open if the current selected page is under it
* Quiz GA completion event is now fired when it is answered
* Fixed issue #81
* Set all downloadable file name to its directory name
* Changed the outer left border to have transparency color (#82)

#### 3.1.2 (11/07/2017)
* Author profile is now aligned to the right to avoid alignment issues with text wrapping
* Hide General Info under Menu when no general info is provided in the XML
* Video/audio automatically paused when opening a menu item
* Removed centralized author profile request when there is no author specified
* SBPLUS root directory defaults to `sources/` when not specified in the manifest
* Removed duplicate logo requests when page has no widget contents
* Allow SB+ presentation to be loaded on Safari's private mode or any private mode that does not support local and session storages
* Display unknown page type error message when the page type is not supported
* Changed a few jQuery $.get methods to $.ajax methods for HEAD request
* Updated SBPLUS SVG logo and css

#### 3.1.1 (06/22/2017)
* Fixed the issue where bundle page type is not working properly
* Fixed the issue where local author info is not overriding centralized info
* `<![CDATA[ ]]>` is now optional in SB+'s XML
* Fixed the issue where large (hi-res) image in quiz is not scaled down
* `correct` attribute for multiple choice question will now only recognized "yes" (case in-sensitive) value; all other value will be considered "no"
* Adjusted the color to be lighter for active selected menu item under menu panel
* Fixed the issue where session data conflicting with each other when loading more than one SB+ on a same page
* Fixed the issue with IE not loading presentation
* Removed body margin on HTML page
* Fixed the issue where IE does not understand that an undefined variable is undefined
* Left aligned table of contents label
* Fixed the issue where IE does not understand jQuery's .html() method
* Ignored missing tags for quiz in SB+ XML
* Fixed layout issues on iOS Safari and other browsers for mobile
* Removed mobile responsiveness when SB+ is loaded inside an iframe
* Fixed the issue where videojs poster image is not properly size for Microsoft Edge
* Fixed the issue where the widget area got pushed down after view a quiz
* Table of contents autoscroll is disabled when table of contents is not visible
* Updated setting labels and button tool tips
* Disabled author profile button when author is not specified
* Interactive transcript is completely switch off and removed from settings (will revisit in future version)
* Fixed the issue where unordered and ordered HTML list is not properly formatted
* Updated CSS indexing for page error message

#### 3.1.0 (05/26/2017)
* Refactored code to be more robust and flexible
* Removed quiz type label
* Added ability to randomized answer choices
* Added basic optional Google Analytics integration
* Updated videoJS to version 6.1.0
* Applied accent color to other UI elements
* Added program attribute to the SBPLUS XML
* Restructured notes area to become a tabular widget area
* Implement optional interactive transcript (beta)
* Restructured menu and its layouts
* Added the ability to open author's profile by clicking the author's name on the top black bar
* Changed subtitles/captions chat bubble like button to tradition captions button
* Changed download button icon to a cloud with an down arrow
* Added better error message support
* Removed expand/contract button
* Added toggle Widget and toggle table of contents buttons
* Presentation no longer takes up the whole web browser's viewport
* Menu settings are now auto save when changes are made
* Author's profile is now loaded from the server first. XML data will override data from server.
* Added more properties to manifest JSON file

#### 3.0.1 (10/06/2016)
* Proper error reporting for author profile
* For author profile, show what is available
* Fixed menu title bar alignment
* Added a new XML attribute to load MathJax 

#### 3.0.0 (08/29/2016)
* initial beta release

---
### License & Copyright
Storybook Plus (SB+) is licensed under [GNU v3](https://github.com/oel-mediateam/sbplus_v3/blob/master/LICENSE) license. (c) 2013 - 2018. Ethan Lin, [Media Services](https://media.uwex.edu), and [University of Wisconsin-Extension, Division of Continuing Education, Outreach & E-Learning](http://ce.uwex.edu/). All rights reserved.
