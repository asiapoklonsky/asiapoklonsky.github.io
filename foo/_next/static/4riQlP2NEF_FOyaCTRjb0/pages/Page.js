(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{134:function(e,t,n){e.exports=n(325)},135:function(e,t,n){"use strict";var r=n(327),i=n(328),o=n(2),a=encodeURIComponent,l="You must either:\n  - Pass `projectId` and `dataset` to the block renderer\n  - Materialize images to include the `url` field.\n\nFor more information, see "+r("block-content-image-materializing");e.exports=function(e){var t=e.node,n=e.options,r=n.projectId,s=n.dataset,u=t.asset;if(!u)throw new Error("Image does not have required `asset` property");if(u.url)return u.url+function(e){var t=e.imageOptions,n=Object.keys(t);return n.length?"?"+n.map(function(e){return a(e)+"="+a(t[e])}).join("&"):""}(n);if(!r||!s)throw new Error(l);if(!u._ref)throw new Error("Invalid image reference in block, no `_ref` found on `asset`");return i(o({projectId:r,dataset:s},n.imageOptions||{})).image(t).toString()}},136:function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=n(2);e.exports=function(e,t){return Object.keys(e).reduce(function(n,o){var a=r(e[o]);return n[o]="function"===a?void 0!==t[o]?t[o]:e[o]:"object"===a?i({},e[o],t[o]):void 0===t[o]?e[o]:t[o],n},{})}},138:function(e,t,n){"use strict";var r=n(0),i=n(10),o=n(134),a=n(337),l=a.serializers,s=a.serializeSpan,u=a.renderProps,c=o.getImageUrl,f=o.blocksToNodes,p=o.mergeSerializers,h=r.createElement,d=function e(t){var n=p(e.defaultSerializers,t.serializers),r=Object.assign({},u,t,{serializers:n,blocks:t.blocks||[]});return f(h,r,l,s)};d.defaultSerializers=l,d.getImageUrl=c,d.propTypes={className:i.string,renderContainerOnSingleChild:i.bool,projectId:i.string,dataset:i.string,imageOptions:i.object,serializers:i.shape({types:i.object,marks:i.object,list:i.func,listItem:i.func,block:i.func,span:i.func}),blocks:i.oneOfType([i.arrayOf(i.shape({_type:i.string.isRequired})),i.shape({_type:i.string.isRequired})]).isRequired},d.defaultProps={renderContainerOnSingleChild:!1,serializers:{},imageOptions:{}},e.exports=d},323:function(e,t,n){__NEXT_REGISTER_PAGE("/Page",function(){return e.exports=n(324),{page:e.exports.default}})},324:function(e,t,n){"use strict";n.r(t);var r=n(16),i=n.n(r),o=n(0),a=n.n(o),l=(n(10),n(58)),s=n.n(l),u=n(17),c=n.n(u),f=n(138),p=n.n(f),h=n(59);function d(e,t,n,r,i,o,a){try{var l=e[o](a),s=l.value}catch(e){return void n(e)}l.done?t(s):Promise.resolve(s).then(r,i)}function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=n.n(h)()(c.a);var x=function(e){return"with_background"===(e.node.style||"normal")?a.a.createElement("p",{className:"withBackground"},e.children):a.a.createElement("p",null,e.children)},O=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=v(this,g(t).call(this,e))).state={loaded:!1},n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,a.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){var e=this;this.timeoutId=setTimeout(function(){e.props.pageTransitionReadyToEnter(),e.setState({loaded:!0})},100)}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.title,n=void 0===t?"No Title":t,r=e.mainImage,i=void 0===r?"":r,o=e.body,l=void 0===o?"":o;if(!this.state.loaded)return null;var u,f=(u=i,w.image(u)).url();return a.a.createElement("div",{className:"page"},a.a.createElement("style",null,"\n          .header {\n            top: 0;\n            right: 0;\n            width: 100%;\n            height: 100vh;\n            background-size: cover;\n            background-image: url(".concat(f,");\n            background-position: center center;\n            background-repeat: no-repeat;\n          }\n          .mainTitle {\n          position: fixed;\n          top: 2rem;\n          left: 2rem;\n          z-index: 2;\n          }\n          a, a:hover {\ntext-decoration: none;\n          color: #F7642A;\n          font-family: Source Serif Pro,sans-serif;\n\n          font-size: 30px;\n\n            line-height: 1.5em;\n          }\n        ")),a.a.createElement("div",{className:"header"}),a.a.createElement("div",{className:"mainTitle"},a.a.createElement(s.a,{href:"/"},"Asia Poklonsky")),a.a.createElement("style",null,"\n        .withBackground::before,\n        .box::before {\n          content: '';\n          height: 80vh;\n          width: 100%;\n          background-color: #EBCDE5;\n          position: absolute;\n          top: -10vh;\n          left: 0;\n          z-index: -1;\n        }\n        .box {\n          position: relative;\n          color: #ED6B74;\n          line-height: 1.8;\n          font-size: 20px;\n\n          font-family: Source Serif Pro,sans-serif;\n        }\n        p {\n          padding: 10% 5vw;\n          @media (min-width: 600px) {\n            padding: 10% 20vw;\n          }\n        }\n        .withBackground {\n          position: relative;\n          background-color: #EBCDE5;\n        }\n        h1 {\n          padding: 10% 5vw;\n          @media (min-width: 600px) {\n            padding: 10% 20vw;\n          }\n          font-size: 70px;\n          text-transform: uppercase;\n        }\n        .container {\n          max-width: 100%;\n          padding: 0;\n        }\n        figure {\n          text-align: center;\n          margin: 0;\n          padding: 1% 5vw;\n          @media (min-width: 600px) {\n            margin: 5% 0;\n            padding: 10% 20vw;\n          }\n        }\n        img {\n          max-width: 100%;\n        }\n        "),a.a.createElement("div",{className:"box"},a.a.createElement("div",{className:"container"},a.a.createElement("h1",null,n),a.a.createElement(p.a,{blocks:l,serializers:{types:{block:x}},projectId:c.a.clientConfig.projectId,dataset:c.a.clientConfig.dataset}))))}}])&&y(n.prototype,r),i&&y(n,i),t}();k(O,"pageTransitionDelayEnter",!0),k(O,"getInitialProps",function(){var e,t=(e=i.a.mark(function e(t){var n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=t.query.slug)){e.next=7;break}return e.next=4,c.a.fetch('*[_type == "page" && slug.current == $slug][0]{\n                                        title,\n                                        body,\n                                        mainImage\n                                        }',{slug:n});case 4:e.t0=e.sent,e.next=8;break;case 7:e.t0={};case 8:return r=e.t0,e.abrupt("return",r);case 10:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(r,i){var o=e.apply(t,n);function a(e){d(o,r,i,a,l,"next",e)}function l(e){d(o,r,i,a,l,"throw",e)}a(void 0)})});return function(e){return t.apply(this,arguments)}}()),O.defaultProps={pageTransitionReadyToEnter:function(){}},t.default=O},325:function(e,t,n){"use strict";var r=n(326),i=n(333),o=n(135),a=n(136);e.exports={blocksToNodes:function(e,t,n,o){if(n)return i(e,t,n,o);var a=r(e);return i(e,t,a.defaultSerializers,a.serializeSpan)},getSerializers:r,getImageUrl:o,mergeSerializers:a}},326:function(e,t,n){"use strict";var r=n(2),i=n(135);e.exports=function(e,t){var n=t||{useDashedStyles:!1};function o(t,n){return e(t,null,n.children)}return{defaultSerializers:{types:{block:function(t){var n=t.node.style||"normal";return/^h\d/.test(n)?e(n,null,t.children):e("blockquote"===n?"blockquote":"p",null,t.children)},image:function(t){var n=e("img",{src:i(t)});return t.isInline?n:e("figure",null,n)}},marks:{strong:o.bind(null,"strong"),em:o.bind(null,"em"),code:o.bind(null,"code"),underline:function(t){var r=n.useDashedStyles?{"text-decoration":"underline"}:{textDecoration:"underline"};return e("span",{style:r},t.children)},"strike-through":function(t){return e("del",null,t.children)},link:function(t){return e("a",{href:t.mark.href},t.children)}},list:function(t){var n="bullet"===t.type?"ul":"ol";return e(n,null,t.children)},listItem:function(t){var n=t.node.style&&"normal"!==t.node.style?e(t.serializers.types.block,t,t.children):t.children;return e("li",null,n)},block:function(t){var n=t.node,r=t.serializers,i=t.options,o=t.isInline,a=t.children,l=n._type,s=r.types[l];if(!s)throw new Error('Unknown block type "'+l+'", please specify a serializer for it in the `serializers.types` prop');return e(s,{node:n,options:i,isInline:o},a)},span:function(t){var n=t.node,r=n.mark,i=n.children,o="string"==typeof r?r:r._type,a=t.serializers.marks[o];return a?e(a,t.node,i):(console.warn('Unknown mark type "'+o+'", please specify a serializer for it in the `serializers.marks` prop'),e(t.serializers.markFallback,null,i))},hardBreak:function(){return e("br")},container:"div",markFallback:"span",text:void 0,empty:""},serializeSpan:function(t,n,i,o){if("\n"===t&&n.hardBreak)return e(n.hardBreak,{key:"hb-"+i});if("string"==typeof t)return n.text?e(n.text,{key:"text-"+i},t):t;var a=void 0;t.children&&(a={children:t.children.map(function(e,n){return o.serializeNode(e,n,t.children,!0)})});var l=r({},t,a);return e(n.span,{key:t._key||"span-"+i,node:l,serializers:n})}}}},327:function(e,t){e.exports=function(e){return"https://docs.sanity.io/help/"+e}},328:function(e,t,n){e.exports=n(329).default},329:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.default=function(e){if(e&&"object"===r(e.clientConfig))return new c(null,{baseUrl:e.clientConfig.apiHost.replace(/^https:\/\/api\./,"https://cdn."),projectId:e.clientConfig.projectId,dataset:e.clientConfig.dataset});return new c(null,e)};var o,a=n(330),l=(o=a)&&o.__esModule?o:{default:o};var s=["clip","crop","fill","fillmax","max","scale","min"],u=["top","bottom","left","right","center","focalpoint","entropy"],c=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t?Object.assign({},t.options,n||{}):n||{}}return i(e,[{key:"withOptions",value:function(t){return new e(this,t)}},{key:"image",value:function(e){return this.withOptions({source:e})}},{key:"dataset",value:function(e){return this.withOptions({dataset:e})}},{key:"projectId",value:function(e){return this.withOptions({projectId:e})}},{key:"width",value:function(e){return this.withOptions({width:e})}},{key:"height",value:function(e){return this.withOptions({height:e})}},{key:"focalPoint",value:function(e,t){return this.withOptions({focalPoint:{x:e,y:t}})}},{key:"maxWidth",value:function(e){return this.withOptions({maxWidth:e})}},{key:"minWidth",value:function(e){return this.withOptions({minWidth:e})}},{key:"maxHeight",value:function(e){return this.withOptions({maxHeight:e})}},{key:"minHeight",value:function(e){return this.withOptions({minHeight:e})}},{key:"size",value:function(e,t){return this.withOptions({width:e,height:t})}},{key:"blur",value:function(e){return this.withOptions({blur:e})}},{key:"sharpen",value:function(e){return this.withOptions({sharpen:e})}},{key:"rect",value:function(e,t,n,r){return this.withOptions({rect:{left:e,top:t,width:n,height:r}})}},{key:"format",value:function(e){return this.withOptions({format:e})}},{key:"invert",value:function(e){return this.withOptions({invert:e})}},{key:"orientation",value:function(e){return this.withOptions({orientation:e})}},{key:"quality",value:function(e){return this.withOptions({quality:e})}},{key:"forceDownload",value:function(e){return this.withOptions({download:e})}},{key:"flipHorizontal",value:function(){return this.withOptions({flipHorizontal:!0})}},{key:"flipVertical",value:function(){return this.withOptions({flipVertical:!0})}},{key:"ignoreImageParams",value:function(){return this.withOptions({ignoreImageParams:!0})}},{key:"fit",value:function(e){if(-1===s.indexOf(e))throw new Error('Invalid fit mode "'+e+'"');return this.withOptions({fit:e})}},{key:"crop",value:function(e){if(-1===u.indexOf(e))throw new Error('Invalid crop mode "'+e+'"');return this.withOptions({crop:e})}},{key:"url",value:function(){return(0,l.default)(this.options)}},{key:"toString",value:function(){return this.url()}}]),e}()},330:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.parseSource=void 0;var r=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&l.return&&l.return()}finally{if(i)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.default=function(e){var t=Object.assign({},e||{}),n=t.source;delete t.source;var a=(0,i.default)(n);if(!a)return null;var s=(0,o.default)(a.asset._ref),u={left:Math.round(a.crop.left*s.width),top:Math.round(a.crop.top*s.height)};u.width=Math.round(s.width-a.crop.right*s.width-u.left),u.height=Math.round(s.height-a.crop.bottom*s.height-u.top);var c=a.hotspot.height*s.height/2,f=a.hotspot.width*s.width/2,p=a.hotspot.x*s.width,h=a.hotspot.y*s.height,d={left:p-f,top:h-c,right:p+f,bottom:h+f};t.asset=s,t.rect||t.focalPoint||t.ignoreImageParams||t.crop||(t=Object.assign(t,function(e,t){var n={width:t.width,height:t.height};if(!t.width||!t.height)return n.rect=e.crop,n;var r=e.crop,i=e.hotspot,o=t.width/t.height;if(r.width/r.height>o){var a=r.height,l=a*o,s=r.top,u=(i.right-i.left)/2+i.left,c=u-l/2;return c<r.left?c=r.left:c+l>r.left+r.width&&(c=r.left+r.width-l),n.rect={left:Math.round(c),top:Math.round(s),width:Math.round(l),height:Math.round(a)},n}var f=r.width,p=f/o,h=r.left,d=(i.bottom-i.top)/2+i.top-p/2;d<r.top?d=r.top:d+p>r.top+r.height&&(d=r.top+r.height-p);return n.rect={left:Math.floor(h),top:Math.floor(d),width:Math.round(f),height:Math.round(p)},n}({crop:u,hotspot:d},t)));return function(e){var t=e.baseUrl||"https://cdn.sanity.io",n=e.asset.id+"-"+e.asset.width+"x"+e.asset.height+"."+e.asset.format,i=t+"/images/"+e.projectId+"/"+e.dataset+"/"+n,o=[];if(e.rect){var a=0!=e.rect.left||0!=e.rect.top||e.rect.height!=e.asset.height||e.rect.width!=e.asset.width;a&&o.push("rect="+e.rect.left+","+e.rect.top+","+e.rect.width+","+e.rect.height)}e.focalPoint&&(o.push("fp-x="+e.focalPoint.x),o.push("fp-x="+e.focalPoint.y));(e.flipHorizontal||e.flipVertical)&&o.push("flip="+(e.flipHorizontal?"h":"")+(e.flipVertical?"v":""));if(l.forEach(function(t){var n=r(t,2),i=n[0],a=n[1];void 0!==e[i]?o.push(a+"="+encodeURIComponent(e[i])):void 0!==e[a]&&o.push(a+"="+encodeURIComponent(e[a]))}),0===o.length)return i;return i+"?"+o.join("&")}(t)};var i=a(n(331)),o=a(n(332));function a(e){return e&&e.__esModule?e:{default:e}}var l=[["width","w"],["height","h"],["format","fm"],["download","dl"],["blur","blur"],["sharpen","sharp"],["invert","invert"],["orientation","or"],["minHeight","min-h"],["maxHeight","max-h"],["minWidth","min-w"],["maxWidth","max-w"],["quality","q"],["fit","fit"],["crop","crop"]];t.parseSource=i.default},331:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function i(e){return("image-"+e.split("/").slice(-1)[0]).replace(/\.([a-z]+)$/,"-$1")}t.default=function(e){if(!e)return null;var t=void 0;if("string"==typeof e&&(n=e,/^https?:\/\//.test(""+n)))t={asset:{_ref:i(e)}};else if("string"==typeof e)t={asset:{_ref:e}};else if("string"==typeof e._ref)t={asset:e};else if(e._id)t={asset:{_ref:e._id}};else if(e.asset&&e.asset.url&&!e.asset._ref)t={asset:{_ref:i(e.asset.url)}};else{if("object"!==r(e.asset))return null;t=e}var n;e.crop&&(t.crop=e.crop);e.hotspot&&(t.hotspot=e.hotspot);return function(e){if(e.crop&&e.hotspot)return e;return Object.assign({crop:{left:0,top:0,bottom:0,right:0},hotspot:{x:.5,y:.5,height:1,width:1}},e)}(t)}},332:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&l.return&&l.return()}finally{if(i)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.default=function(e){var t=e.split("-"),n=r(t,4),o=n[1],a=n[2],l=n[3];if(!o||!a||!l)throw new Error("Malformed asset _ref '"+e+"'. Expected an id like \""+i+'".');var s=a.split("x"),u=r(s,2),c=u[0],f=u[1],p=+c,h=+f;if(!Number.isFinite(p)||!Number.isFinite(h))throw new Error("Malformed asset _ref '"+e+"'. Expected an id like \""+i+'".');return{id:o,width:p,height:h,format:l}};var i="image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg"},333:function(e,t,n){"use strict";var r=n(2),i=n(334),o=n(335),a=n(336),l=n(136),s=["projectId","dataset","imageOptions"],u=function(e){return void 0!==e},c={imageOptions:{}};function f(e){return"block"===e._type&&e.listItem}e.exports=function(e,t,n,p){var h=r({},c,t),d=Array.isArray(h.blocks)?h.blocks:[h.blocks],m=a(d),y=o(m,h.listNestMode),v=l(n,h.serializers||{}),g=s.reduce(function(e,t){var n=h[t];return u(n)&&(e[t]=n),e},{});function b(t,n,r,o){return"list"===(h=t)._type&&h.listItem?(l=(a=t).listItem,s=a.level,u=a._key,c=a.children.map(b),e(v.list,{key:u,level:s,type:l,options:g},c)):f(t)?function(t,n){var r=t._key,o=i(t).map(b);return e(v.listItem,{node:t,serializers:v,index:n,key:r,options:g},o)}(t,function(e,t){for(var n=0,r=0;r<t.length;r++){if(t[r]===e)return n;f(t[r])&&n++}return n}(t,r)):function(e){return"string"==typeof e||e.marks||"span"===e._type}(t)?p(t,v,n,{serializeNode:b}):function(t,n,r){var o=i(t).map(function(e,t,n){return b(e,t,n,!0)}),a={key:t._key||"block-"+n,node:t,isInline:r,serializers:v,options:g};return e(v.block,a,o)}(t,n,o);var a,l,s,u,c,h}var k=Boolean(h.renderContainerOnSingleChild),w=y.map(b);if(k||w.length>1){var x=h.className?{className:h.className}:{};return e(v.container,x,w)}return w[0]?w[0]:"function"==typeof v.empty?e(v.empty):v.empty}},334:function(e,t,n){"use strict";var r=["strong","em","code","underline","strike-through"];function i(e,t,n){if(!e.marks||0===e.marks.length)return e.marks||[];var i=e.marks.reduce(function(e,r){e[r]=e[r]?e[r]+1:1;for(var i=t+1;i<n.length;i++){var o=n[i];if(!o.marks||!Array.isArray(o.marks)||-1===o.marks.indexOf(r))break;e[r]++}return e},{}),o=function(e,t,n){var i=e[t]||0,o=e[n]||0;if(i!==o)return o-i;var a=r.indexOf(t),l=r.indexOf(n);if(a!==l)return a-l;if(t<n)return-1;if(t>n)return 1;return 0}.bind(null,i);return e.marks.slice().sort(o)}e.exports=function(e){var t=e.children,n=e.markDefs;if(!t||!t.length)return[];var r=t.map(i),o={_type:"span",children:[]},a=[o];return t.forEach(function(e,t){var i=r[t];if(i){var o=1;if(a.length>1)for(;o<a.length;o++){var l=a[o].markKey,s=i.indexOf(l);if(-1===s)break;i.splice(s,1)}var u,c=function(e){for(var t=e.length-1;t>=0;t--){var n=e[t];if("span"===n._type&&n.children)return n}}(a=a.slice(0,o));if(i.forEach(function(t){var r={_type:"span",_key:e._key,children:[],mark:n.find(function(e){return e._key===t})||t,markKey:t};c.children.push(r),a.push(r),c=r}),"span"!==(u=e)._type||"string"!=typeof u.text||!Array.isArray(u.marks)&&void 0!==u.marks)c.children=c.children.concat(e);else{for(var f=e.text.split("\n"),p=f.length;p-- >1;)f.splice(p,0,"\n");c.children=c.children.concat(f)}}else a[a.length-1].children.push(e)}),o.children}},335:function(e,t,n){"use strict";var r=n(2);function i(e){return Boolean(e.listItem)}function o(e,t){return e.level===t.level&&e.listItem===t.listItem}function a(e){return{_type:"list",_key:e._key+"-parent",level:e.level,listItem:e.listItem,children:[e]}}function l(e){return e.children&&e.children[e.children.length-1]}function s(e,t){var n="string"==typeof t.listItem;if("list"===e._type&&e.level===t.level&&n&&e.listItem===t.listItem)return e;var r=l(e);return!!r&&s(r,t)}e.exports=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"html",n=[],u=void 0,c=0;c<e.length;c++){var f=e[c];if(i(f))if(u)if(o(f,u))u.children.push(f);else if(f.level>u.level){var p=a(f);if("html"===t){var h=l(u),d=r({},h,{children:h.children.concat(p)});u.children[u.children.length-1]=d}else u.children.push(p);u=p}else if(f.level<u.level){var m=s(n[n.length-1],f);if(m){(u=m).children.push(f);continue}u=a(f),n.push(u)}else if(f.listItem===u.listItem)console.warn("Unknown state encountered for block",f),n.push(f);else{var y=s(n[n.length-1],{level:f.level});if(y&&y.listItem===f.listItem){(u=y).children.push(f);continue}u=a(f),n.push(u)}else u=a(f),n.push(u);else n.push(f),u=null}return n}},336:function(e,t,n){"use strict";var r=n(2);e.exports=function(e){return e.map(function(e){return e._key?e:r({_key:(t=e,function(e){var t=0,n=e.length;if(0===n)return t;for(var r=0;r<n;r++)t=(t<<5)-t+e.charCodeAt(r),t&=t;return t}(JSON.stringify(t)).toString(36).replace(/[^A-Za-z0-9]/g,""))},e);var t})}},337:function(e,t,n){"use strict";var r=n(0),i=(0,n(134).getSerializers)(r.createElement),o=i.defaultSerializers,a=i.serializeSpan;e.exports={serializeSpan:a,serializers:o,renderProps:{nestMarks:!0}}}},[[323,1,0]]]);