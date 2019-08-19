(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{151:function(e,t,n){"use strict";n.d(t,"a",function(){return f});n(28),n(241);var a=n(148),i=n.n(a),o=(n(220),n(243)),r=n.n(o),s=n(4),l=n.n(s),c=n(0),u=n.n(c),f=function(e){var t=e.text,n=e.className,a=e.heading,o=e.headingFontSize,s=e.bold,l=e.centered,c=e.noPadding,f=e.headingFont,p=i()(e,["text","className","heading","headingFontSize","bold","centered","noPadding","headingFont"]),h=[];l&&h.push("centered"),s&&h.push("bold"),c&&h.push("body-text--no-padding"),f&&h.push("heading-font");return u.a.createElement("div",Object.assign({className:"body-text "+n},p),a.title&&function(){if(a){var e=a.level;return u.a.createElement(e,{className:"body-text__title",style:o?{fontSize:o}:{}},a.title)}return null}(),t&&"string"==typeof t?u.a.createElement("p",{className:"body-text__content "+h.join(" ")},t):t&&t.map(function(e){return u.a.createElement("div",{key:e,className:"body-text__content "+h.join(" ")},r()(e))}))};f.defaultProps={heading:{title:"",level:"h2"},text:"",className:"",centered:!1,bold:!1,noPadding:!1},f.propTypes={heading:l.a.shape({text:l.a.string,level:l.a.string}),headingFontSize:l.a.string,text:l.a.oneOfType([l.a.string,l.a.array]),className:l.a.string,centered:l.a.bool,bold:l.a.bool,noPadding:l.a.bool}},157:function(e,t){e.exports=["fullstack","full stack open 2019","course","helsingin yliopisto","tietojenkäsittelytieteen osasto","mooc","mooc.fi","full stack","full stack open","web-sovelluskehitys","web","houston","houston inc","websovelluskehitys","web-sovellus","React","Redux","Node.js","Node","MongoDB","GraphQL","REST","REST api","single page -sovellus","ohjelmointi","university of helsinki","department of computer science","web development","software development","web","web application","single page app","programming"]},159:function(e,t,n){"use strict";n(163);var a=n(147),i=n(149),o=n(146),r=n(0),s=n.n(r),l=n(155),c=n.n(l),u=n(216),f=n(153),p=[{src:n.n(f).a,alt:"Helsingin yliopiston logo",href:"https://www.helsinki.fi/"},{src:c.a,alt:"Houston inc. logo",href:"https://www.houston-inc.com/"}];t.a=function(e){var t=e.lang;return s.a.createElement(a.a,{id:"footer",className:"container spacing--after-small spacing--mobile",flex:!0},s.a.createElement(a.a,{className:"col-5 push-right-3 col-10--mobile order-2--mobile order-2--tablet footer__links",flex:!0,spaceBetween:!0},p.map(function(e){return s.a.createElement("a",{key:e.alt,href:e.href,className:"col-5 col-4--mobile spacing--mobile"},s.a.createElement(i.a,{contain:!0,src:e.src,alt:e.alt,className:"col-6"}))})),s.a.createElement(a.a,{flex:!0,className:"col-5 col-5--mobile order-1--mobile order-1--tablet footer__navigation"},s.a.createElement("div",{className:"footer__navigation-link-container"},u.b[t].map(function(e){return s.a.createElement(o.Link,{key:e.path,to:e.path,className:"footer__navigation-link nav-item-hover",style:{marginLeft:"4.5rem"}},e.text)}))))}},163:function(e,t,n){},220:function(e,t,n){},223:function(e,t,n){"use strict";n.d(t,"a",function(){return c});n(28);var a=n(148),i=n.n(a),o=(n(238),n(4)),r=n.n(o),s=n(0),l=n.n(s),c=function(e){var t=e.className,n=e.headingLevel,a=void 0===n?"h2":n,o=e.headingFontSize,r=e.text,s=i()(e,["className","headingLevel","headingFontSize","text"]),c=a;return l.a.createElement(c,Object.assign({className:"sub-header "+t,style:o?{fontSize:o}:{}},s),r)};c.propTypes={className:r.a.string,headingLevel:r.a.string,text:r.a.string.isRequired,headingFontSize:r.a.string},c.defaultProps={className:""}},238:function(e,t,n){},248:function(e,t,n){"use strict";var a=n(6),i=n.n(a),o=(n(272),n(0)),r=n.n(o),s=n(151),l=n(146),c=n(4),u=n.n(c),f=n(294);f.a.initialize("UA-135975842-1");var p=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isOpened:!1},n}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.initiallyOpened&&this.setState({isOpened:!0})},n.handleClick=function(){var e=this.state.isOpened,t=this.props,n=t.title,a=t.track;this.setState({isOpened:!e},function(){a&&f.a.event({category:"FAQ",action:n+" "+(e?"closed":"expanded")})})},n.render=function(){var e=this,t=this.props,n=t.title,a=t.content,i=t.className,o=t.containerClassName,c=t.list,u=t.titleStyle,f=this.state.isOpened;return r.a.createElement("div",{className:"accordion__container col-8 push-right-1 "+o},r.a.createElement("button",{className:"accordion accordion__title "+(f?"active":"")+" "+i,style:u,onClick:function(){return e.handleClick()}},n),r.a.createElement("div",{className:"panel",style:{padding:f?"2rem 18px":"",maxHeight:""+(f?"unset":0),transition:"max-height 0.2s ease-out"}},a&&r.a.createElement(s.a,{className:"col-8 push-right-1",text:a}),c&&r.a.createElement("ul",null,c.map(function(e){return r.a.createElement("li",{key:e.text},r.a.createElement(l.Link,{to:e.href},e.text))}))))},t}(o.Component);p.propTypes={title:u.a.string.isRequired,track:u.a.bool,content:u.a.oneOfType([u.a.string,u.a.array]),list:u.a.array,className:u.a.string,containerClassName:u.a.string,initiallyOpened:u.a.bool,titleStyle:u.a.object},p.defaultProps={className:"",track:!1,containerClassName:"",initiallyOpened:!1,titleStyle:{}},t.a=p},272:function(e,t,n){},294:function(e,t,n){"use strict";function a(e){return e.replace(/^\s+|\s+$/g,"")}var i=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function o(e){console.warn("[react-ga]",e)}var r="REDACTED (Potential Email Address)";function s(e,t){return function(e){return/[^@]+@[^@]+/.test(e)}(e)?(o("This arg looks like an email address, redacting."),r):t?a(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,function(e,t,n){return t>0&&t+e.length!==n.length&&e.search(i)>-1&&":"!==n.charAt(t-2)&&("-"!==n.charAt(t+e.length)||"-"===n.charAt(t-1))&&n.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)}):e}var l=function(e){var t,n,a,i,o,r,s,l="https://www.google-analytics.com/analytics.js";e&&e.gaAddress?l=e.gaAddress:e&&e.debug&&(l="https://www.google-analytics.com/analytics_debug.js"),t=window,n=document,a="script",i=l,o="ga",t.GoogleAnalyticsObject=o,t.ga=t.ga||function(){(t.ga.q=t.ga.q||[]).push(arguments)},t.ga.l=1*new Date,r=n.createElement(a),s=n.getElementsByTagName(a)[0],r.async=1,r.src=i,s.parentNode.insertBefore(r,s)};function c(e){console.info("[react-ga]",e)}var u=[],f={calls:u,ga:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];u.push(t.concat())},resetCalls:function(){u.length=0}},p=n(0),h=n.n(p),d=n(4),m=n.n(d);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function b(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O="_blank",j=1,S=function(e){function t(){var e,n,a,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return a=this,i=(e=v(t)).call.apply(e,[this].concat(r)),n=!i||"object"!==g(i)&&"function"!=typeof i?w(a):i,x(w(w(n)),"handleClick",function(e){var a=n.props,i=a.target,o=a.eventLabel,r=a.to,s=a.onClick,l={label:o},c=i!==O,u=!(e.ctrlKey||e.shiftKey||e.metaKey||e.button===j);c&&u?(e.preventDefault(),t.trackLink(l,function(){window.location.href=r})):t.trackLink(l,function(){}),s&&s(e)}),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,p["Component"]),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.to,n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){x(e,t,n[t])})}return e}({},y(e,["to"]),{href:t,onClick:this.handleClick});return this.props.target===O&&(n.rel="noopener noreferrer"),delete n.eventLabel,h.a.createElement("a",n)}}])&&b(n.prototype,a),i&&b(n,i),t}();function E(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}x(S,"trackLink",function(){o("ga tracking not enabled")}),x(S,"propTypes",{eventLabel:m.a.string.isRequired,target:m.a.string,to:m.a.string,onClick:m.a.func}),x(S,"defaultProps",{target:null,to:null,onClick:null});var _=!1,C=!0,P=!1,F=!0,L=function(){var e;return P?f.ga.apply(f,arguments):"undefined"!=typeof window&&(window.ga?(e=window).ga.apply(e,arguments):o("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))};function I(e){return s(e,C)}function q(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var i=n[0];if("function"==typeof L){if("string"!=typeof i)return void o("ga command must be a string");!F&&Array.isArray(e)||L.apply(void 0,n),Array.isArray(e)&&e.forEach(function(e){L.apply(void 0,T(["".concat(e,".").concat(i)].concat(n.slice(1))))})}}function D(e,t){e?(t&&(t.debug&&!0===t.debug&&(_=!0),!1===t.titleCase&&(C=!1)),t&&t.gaOptions?L("create",e,t.gaOptions):L("create",e,"auto")):o("gaTrackingID is required in initialize()")}function z(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length>0&&(L.apply(void 0,t),_&&(c("called ga('arguments');"),c("with arguments: ".concat(JSON.stringify(t))))),window.ga}function J(e,t){q(t,"send",e),_&&(c("called ga('send', fieldObject);"),c("with fieldObject: ".concat(JSON.stringify(e))),c("with trackers: ".concat(JSON.stringify(t))))}var R={require:function(e,t){if(e){var n=a(e);if(""!==n)if(t){if("object"!==A(t))return void o("Expected `options` arg to be an Object");0===Object.keys(t).length&&o("Empty `options` given to .require()"),z("require",n,t),_&&c("called ga('require', '".concat(n,"', ").concat(JSON.stringify(t)))}else z("require",n),_&&c("called ga('require', '".concat(n,"');"));else o("`name` cannot be an empty string in .require()")}else o("`name` is required in .require()")},execute:function(e,t){var n,a;if(1==(arguments.length<=2?0:arguments.length-2)?n=arguments.length<=2?void 0:arguments[2]:(a=arguments.length<=2?void 0:arguments[2],n=arguments.length<=3?void 0:arguments[3]),"string"!=typeof e)o("Expected `pluginName` arg to be a String.");else if("string"!=typeof t)o("Expected `action` arg to be a String.");else{var i="".concat(e,":").concat(t);n=n||null,a&&n?(z(i,a,n),_&&(c("called ga('".concat(i,"');")),c('actionType: "'.concat(a,'" with payload: ').concat(JSON.stringify(n))))):n?(z(i,n),_&&(c("called ga('".concat(i,"');")),c("with payload: ".concat(JSON.stringify(n))))):(z(i),_&&c("called ga('".concat(i,"');")))}}};function M(e,t,n){if("function"==typeof t)if(e&&e.label){var a={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:I(e.label)},i=!1,r=setTimeout(function(){i=!0,t()},250);a.hitCallback=function(){clearTimeout(r),i||t()},J(a,n)}else o("args.label is required in outboundLink()");else o("hitCallback function is required")}S.origTrackLink=S.trackLink,S.trackLink=M;var K=S;t.a={initialize:function(e,t){if(t&&!0===t.testMode)P=!0;else{if("undefined"==typeof window)return!1;t&&!0===t.standardImplementation||l(t)}return F=!t||"boolean"!=typeof t.alwaysSendToDefaultTracker||t.alwaysSendToDefaultTracker,Array.isArray(e)?e.forEach(function(e){"object"===A(e)?D(e.trackingId,e):o("All configs must be an object")}):D(e,t),!0},ga:z,set:function(e,t){e?"object"===A(e)?(0===Object.keys(e).length&&o("empty `fieldsObject` given to .set()"),q(t,"set",e),_&&(c("called ga('set', fieldsObject);"),c("with fieldsObject: ".concat(JSON.stringify(e))))):o("Expected `fieldsObject` arg to be an Object"):o("`fieldsObject` is required in .set()")},send:J,pageview:function(e,t,n){if(e){var i=a(e);if(""!==i){var r={};if(n&&(r.title=n),q(t,"send",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){N(e,t,n[t])})}return e}({hitType:"pageview",page:i},r)),_){c("called ga('send', 'pageview', path);");var s="";n&&(s=" and title: ".concat(n)),c("with path: ".concat(i).concat(s))}}else o("path cannot be an empty string in .pageview()")}else o("path is required in .pageview()")},modalview:function(e,t){if(e){var n,i="/"===(n=a(e)).substring(0,1)?n.substring(1):n;if(""!==i){var r="/modal/".concat(i);q(t,"send","pageview",r),_&&(c("called ga('send', 'pageview', path);"),c("with path: ".concat(r)))}else o("modalName cannot be an empty string or a single / in .modalview()")}else o("modalName is required in .modalview(modalName)")},timing:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.variable,a=e.value,i=e.label,r=arguments.length>1?arguments[1]:void 0;if(t&&n&&a&&"number"==typeof a){var s={hitType:"timing",timingCategory:I(t),timingVar:I(n),timingValue:a};i&&(s.timingLabel=I(i)),J(s,r)}else o("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")},event:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.action,a=e.label,i=e.value,r=e.nonInteraction,s=e.transport,l=E(e,["category","action","label","value","nonInteraction","transport"]),c=arguments.length>1?arguments[1]:void 0;if(t&&n){var u={hitType:"event",eventCategory:I(t),eventAction:I(n)};a&&(u.eventLabel=I(a)),void 0!==i&&("number"!=typeof i?o("Expected `args.value` arg to be a Number."):u.eventValue=i),void 0!==r&&("boolean"!=typeof r?o("`args.nonInteraction` must be a boolean."):u.nonInteraction=r),void 0!==s&&("string"!=typeof s?o("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(s)&&o("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),u.transport=s)),Object.keys(l).filter(function(e){return"dimension"===e.substr(0,"dimension".length)}).forEach(function(e){u[e]=l[e]}),Object.keys(l).filter(function(e){return"metric"===e.substr(0,"metric".length)}).forEach(function(e){u[e]=l[e]}),J(u,c)}else o("args.category AND args.action are required in event()")},exception:function(e,t){var n=e.description,a=e.fatal,i={hitType:"exception"};n&&(i.exDescription=I(n)),void 0!==a&&("boolean"!=typeof a?o("`args.fatal` must be a boolean."):i.exFatal=a),J(i,t)},plugin:R,outboundLink:M,OutboundLink:K,testModeAPI:f}},447:function(e){e.exports={fi:[{title:"Miten kurssille ilmoittaudutaan?",text:["Kurssille ei tarvitse varsinaisesti ilmoittautua ennen kuin haluat tehdä kurssin kokeen. Koe tehdään Avoimen yliopiston Moodle-järjestelmään. Katso lisää <a href='/osa0/yleista#arvosteluperusteet'>täältä</a>."]},{title:"Mikä on kurssin laajuus?",text:["Kurssin laajuus on <a href='osa0/yleista#arvosteluperusteet'>riippuen tekemiesi tehtävien määrästä</a>  3-8 opintopistettä. Suoritettuasi kurssin voit jatkaa aihepiiriin syventymistä 1-10 opintopisteen laajuisessa <a href='/osa0/yleista#full-stack-harjoitustyo'>Full stack -harjoitustyön</a> parissa."]},{title:"Milloin on tehtävien ja kokeen deadline?",text:["Etenemisnopeus on vapaa, kurssilla on ainoastaan yksi deadline sekä tehtäville että kokeelle 10.1.2020 klo 23.59.59. Kannattaa kuitenkin huomata, että kurssille on ilmoittauduttava viimeistään deadliea edeltävänä päivänä 9.1.2020."]},{title:"Miten tehtävät palautetaan?",text:["Tehtävät palautetaan GitHubin kautta ja merkitsemällä tehdyt tehtävät palautussovellukseen, lue lisää <a href='/osa0/yleista#tehtavien-palauttaminen'>täältä</a>."]},{title:"Pitääkö jokainen osa palauttaa omaan repositorioon?",text:["Ei. Voit käyttää yhtä tai useampaa repositoriota, tärkeintä että asiat repositorion sisällä ovat selkeästi nimettyjä."]},{title:"Voinko muokata tekemääni palautusta?",text:["Et. Kaikki osan tehtävät on palautettava kerralla. Jos merkkasit tehtäviä vahingossa väärin tai typotit repositorion nimen, lähetä mailia osoitteeseen matti.luukkainen@helsinki.fi"]},{title:"Milloin ja miten saan kurssilta suoritusmerkinnän?",text:["Saat suoritusmerkinnän sen jälkeen kun olet tehnyt hyväksyttävään suositukseen oikeuttavan määrän tehtäviä, suorittanut kokeen hyväksytysti ja ilmoittanut palautussovelluksessa olevasi valmis kurssin suorituksen kanssa. Viimeinen mahdollinen suorituspäivä on 10.1.2020. Lue lisää <a href='/osa0/yleista#arvosteluperusteet'>täältä</a>."]},{title:"Voinko laajentaa aiempaa kurssisuoritustani?",text:["Voit, lue lisää <a href='/osa0/yleista#aiemmin-suoritetun-kurssin-taydentaminen'>täältä</a>"]},{title:"Suoritin kurssin viime vuonna. Miten opin käyttämään React hookeja?",text:["State hookia, eli tapaa määritellä tila funktionaalisille komponenteille käsitellään <a href='/osa1/komponentin_tila_ja_tapahtumankasittely/#tilallinen-komponentti'>osassa 1</a>. Lifecycle-metodien roolia hoitavia effect hookeja käsitellään <a href='/osa2/palvelimella_olevan_datan_hakeminen#effect-hookit'>osassa 2</a>. Custom hookeista puhutaan <a href='/osa5/custom_hookit'>osassa 5</a>"]},{title:"Kuulin että suorittamalla kurssin on mahdollista päästä työhaastatteluun",text:["Pitää paikkansa, jos suoritat täydellä laajuudella kurssin ja siihen liittyvän 10 op:n laajuisen harjoitustyön, pääset yhteistyökumppaniemme työhaastatteluun, lue lisää <a href='/osa0/yleista#haastattelulupaus'>täältä</a>."]}],en:[{title:"How do I sign up for the course?",text:["You don't have to sign up until you want to do the course exam. The exam is done to the Moodle-system of the Open University. You can find more information <a href='/en/part0/general_info#grading'>here</a>. Please note that only persons with Finnish social security number can get take part to exam and get official ECTS credits. For the course certificate signup or Finnish social security number are not needed."]},{title:"How many credits is the course?",text:["The course is 3-8 ECTS credits <a href='/en/part0/general_info#grading'>depending on the amount of returned exercises</a>. After completing the course you can continue to deepen your knowledge on the subject matter by doing the 1-10 ETCS credit <a href='/en/part0/general_info#full-stack-project'>Full Stack project</a>. Please note that only persons with Finnish social security number can get official ECTS credits. For the course certificate signup or Finnish social security number are not needed."]},{title:"When is the deadline for the exercises and the exam?",text:["You can complete the course at your own pace. The course has only one deadline for the exercises and the exams 10th January 2020 at 23.59.59. Do keep in mind that you have to sign up for the exam no later than the day before the deadline 9.1.2020."]},{title:"How do I submit the exercises?",text:["The exercises are submitted to GitHub, and by marking the exercises as done in the exercise submission system. You can read more from <a href='/en/part0/general_info#submitting-exercises'>here</a>. "]},{title:"Do I have to submit each part to a separate repository?",text:["No. You can use one or more repositories, most important is to name everything in a repository clearly. "]},{title:"Can I edit a submission?",text:["No. All exercises for a part must be submitted at the same time. If you marked exercises wrong by accident, or wrote the repository name wrong, send an e-mail to matti.luukkainen@helsinki.fi."]},{title:"When and how can I get my credits?",text:["You can get your credits after submitting enough exercises for passing the course, passing the course exam and letting us know through the exercise submission system that you are ready with the course. The deadline is 10th January 2020. Read more <a href='/en/part0/general_info/#grading'>here</a>. Please note that only persons with Finnish social security number can get official ECTS credits. For the course certificate signup or Finnish social security number are not needed."]},{title:"Do I get a certificate after completing the course?",text:["Yes, certificate is available to all who pass the course by 10th January 2020. You can download the certificate after completing the course from the exercise submission system. For the course certificate signup to Open university and Finnish social security number are not needed."]},{title:"Do I need a Finnish social security number to get the course certificate?",text:["For the course certificate Finnish social security number is not needed. You can download the certificate after completing the course from the exercise submission system."]},{title:"Should I signup to Open University to get the course certificate?",text:["For the course certificate signup to Open University is not needed. You can download the certificate after completing the course from the exercise submission system."]},{title:"I heard that I could get a job interview by completing the course.",text:["That's right. If you complete the course with full credits, and complete the practical work with 10 credits, you get a job interview with our partners. Read more <a href='/en/part0/general_info#interview-promise'>here</a>. Please note that only persons with Finnish social security number can get take part to exam and get official ECTS credits."]}]}}}]);
//# sourceMappingURL=6-0cb7b8fe63fa809bdf43.js.map