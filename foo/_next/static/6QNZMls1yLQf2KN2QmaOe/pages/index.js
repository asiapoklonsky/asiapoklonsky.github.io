(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{248:function(n,e,t){__NEXT_REGISTER_PAGE("/",function(){return n.exports=t(249),{page:n.exports.default}})},249:function(n,e,t){"use strict";t.r(e);var r=t(16),o=t.n(r),a=t(0),i=t.n(a),u=t(58),c=t.n(u),l=t(17),f=t.n(l),s=t(59);function p(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.forEach(function(e){v(n,e,t[e])})}return n}function m(n,e,t,r,o,a,i){try{var u=n[a](i),c=u.value}catch(n){return void t(n)}u.done?e(c):Promise.resolve(c).then(r,o)}function y(n){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function d(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function b(n,e){return!e||"object"!==y(e)&&"function"!=typeof e?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):e}function g(n){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function h(n,e){return(h=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function v(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var w=t.n(s)()(f.a);function P(n){return w.image(n)}var O=function(n){function e(){return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),b(this,g(e).apply(this,arguments))}var t,r,o;return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&h(n,e)}(e,i.a.Component),t=e,(r=[{key:"render",value:function(){var n=this.props,e=(n.title,n.mainImage),t=void 0===e?"":e,r=(n.body,n.navigationItems),o=void 0===r?[]:r,a=P(t).url()+"?w=1000&h=1000&fit=max&fm=jpg",u=P(t).url()+"?w=2000&h=2000&fit=max&fm=jpg",l=o.map(function(n,e){var t="/"+n.url;return i.a.createElement("div",{className:"link",key:e},i.a.createElement(c.a,{href:t},i.a.createElement("a",{className:""},n.title)))});return i.a.createElement("div",{className:"page"},i.a.createElement("style",null,'\n          .navigation {\n          padding-top: 5rem;\n          color: #F7642A;\n          padding-left: 2rem;\n          line-height: 1.5em;\n          }\n          h1 {\n          font-family: "Source Serif Pro",sans-serif;\n          font-size: 30px;\n          padding-bottom: 4rem;\n          }\n          .sidePanel {\n          position: absolute;\n          top: 0;\n          right: 0;\n          height: 100vh;\n          overflow: hidden;\n          background-size: cover;\n          background-image: url('.concat(a,");\n          background-position: top center;\n          background-repeat: no-repeat;\n          }\n          @media (min-width: 1024px) {\n            .sidePanel {\n              background-image: url(").concat(u,");\n            }\n          }\n          @media (min-width: 600px) {\n          .navigation {\n          width: 35vw;;\n          }\n          .sidePanel {\n          width: 65vw;\n          }\n          }\n          ")),i.a.createElement("div",{className:"navigation"},i.a.createElement("style",null,'\n            a {\n            font-family: "Source Serif Pro",sans-serif;\n            color: #F7642A;\n            text-transform: uppercase;\n            font-size: 18px;\n            }\n            .link {\n            padding: .5rem 0;\n            }\n            a:hover {\n            text-decoration: line-through;\n            color: #F7642A;\n            }\n            '),i.a.createElement("h1",null,"Asia Poklonsky"),l),i.a.createElement("div",{className:"sidePanel"}))}}])&&d(t.prototype,r),o&&d(t,o),e}();v(O,"getInitialProps",function(){var n,e=(n=o.a.mark(function n(e){var t,r;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e.query.slug,n.next=3,f.a.fetch('*[_type == "page" && title == "Homepage"][0]{\n                                        title,\n                                        body,\n                                        mainImage\n                                        }');case 3:return t=n.sent,n.next=6,f.a.fetch('*[_type == "navigation" && name == "Main"][0]{\n                                               "navigationItems": links[]->{title, "url": slug.current}\n                                        }');case 6:return r=n.sent,n.abrupt("return",p({},t,r));case 8:case"end":return n.stop()}},n,this)}),function(){var e=this,t=arguments;return new Promise(function(r,o){var a=n.apply(e,t);function i(n){m(a,r,o,i,u,"next",n)}function u(n){m(a,r,o,i,u,"throw",n)}i(void 0)})});return function(n){return e.apply(this,arguments)}}()),e.default=O}},[[248,1,0]]]);