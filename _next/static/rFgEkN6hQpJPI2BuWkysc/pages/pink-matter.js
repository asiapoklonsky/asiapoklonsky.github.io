(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{338:function(e,t,n){__NEXT_REGISTER_PAGE("/pink-matter",function(){return e.exports=n(339),{page:e.exports.default}})},339:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=(n(10),n(14)),i=n.n(r);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m,d,h,p=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=l(this,u(t).call(this,e))).state={loaded:!1},n}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,a.a.Component),n=t,(o=[{key:"componentDidMount",value:function(){var e=this;this.timeoutId=setTimeout(function(){e.props.pageTransitionReadyToEnter(),e.setState({loaded:!0})},100)}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId)}},{key:"render",value:function(){return this.state.loaded?a.a.createElement("div",{className:"page"},a.a.createElement("style",null,"\n          .header {\n            top: 0;\n            right: 0;\n            width: 100%;\n            height: 100vh;\n            background-size: cover;\n            background-image: url(/static/home.jpg);\n            background-position: center center;\n            background-repeat: no-repeat;\n          }\n          .mainTitle {\n          position: fixed;\n          top: 2rem;\n          left: 2rem;\n          }\n          a, a:hover {\ntext-decoration: none;\n          color: #F7642A;\n          font-family: Source Serif Pro,sans-serif;\n\n          font-size: 30px;\n\n            line-height: 1.5em;\n          }\n        "),a.a.createElement("div",{className:"header"}),a.a.createElement("div",{className:"mainTitle"},a.a.createElement(i.a,{href:"/"},a.a.createElement("a",{className:""},"Asia Poklonsky"))),a.a.createElement("style",null,"\n        .box {\n          background-color: #EBCDE5;\n          color: #ED6B74;\n          line-height: 1.8;\n          font-size: 14pt;\n          padding: 2rem 0;\n\n          font-family: 'Adobe Ming Std L', serif;\n        }\n        h1 {\n        padding: 3rem 0;\n        font-size: 84px;\n        }\n        .container {\n          max-width: 1000px;\n        }\n        "),a.a.createElement("div",{className:"box"},a.a.createElement("div",{className:"container"},a.a.createElement("h1",null,"PINK MATTER"),a.a.createElement("p",null,'The inspiration for my project has grown from the admiration of women who surround me in everyday life, famous women figures, writers and artists such as Lena Donham, Petra Collins and Zoe Buckman. The difference between them is what had interested me. All of them perceived by me as feminists but in a different way This is what attracted me in developing this collection. Each of them presents a different aspect of feminist definition and presents it from a different angle, leading me to the conclusion that the word "feminism" takes on a different face in every woman.'),a.a.createElement("p",null,"We all aspire to freedom of self-determination, freedom from being burdened with body image."),a.a.createElement("p",null,"The beauty of modern women is the diversity of images she chooses to recreate and how fast she exchanges between them and the combinations that are created. In this project I tried to concentrate on these images and the combinations between them. Romantic, masculine, childish, fragmented, seductive, repulsive, strange, dramatic or modest. The nature of this project has led me to techniques such as, hand knitting, silk print on pressed acrylic cotton, and quilting in addition to fabrics such as silk velvet, satins with metal details, and Russian prison tattoos as a reference to a roughness of my culture.")))):null}}])&&c(n.prototype,o),r&&c(n,r),t}();h=!0,(d="pageTransitionDelayEnter")in(m=p)?Object.defineProperty(m,d,{value:h,enumerable:!0,configurable:!0,writable:!0}):m[d]=h,p.defaultProps={pageTransitionReadyToEnter:function(){}},t.default=p}},[[338,1,0]]]);