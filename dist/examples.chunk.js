webpackJsonp([1],{834:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var r=n(848),a=function(e){return e&&e.__esModule?e:{default:e}}(r);t.Component=a.default},839:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(r),o=n(1),l=function(e){var t=e.title,n=e.icon,r=e.footerItems,o=e.onClick,l=e.children;return a.default.createElement("div",{className:"card"},t?a.default.createElement("header",{className:"card-header"},a.default.createElement("p",{className:"card-header-title"},t),a.default.createElement("a",{className:"card-header-icon"},n?a.default.createElement("span",{className:"icon"},a.default.createElement("i",{className:"fa fa-"+n})):null)):null,a.default.createElement("div",{className:"card-content"},a.default.createElement("div",{className:"content"},l)),r?a.default.createElement("footer",{className:"card-footer"},r.map(function(e){return a.default.createElement("a",{key:e,className:"card-footer-item",onClick:function(t){return o(e)}},e)})):null)};l.propTypes={title:o.string,icon:o.string},t.default=l},848:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),c=r(i),s=n(849),f=r(s),d=n(852),p=r(d),m=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),u(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"examples"},c.default.createElement("h1",{className:"title"},"Examples"),c.default.createElement("h2",{className:"subtitle"},"Multiple paths"),c.default.createElement(f.default,null),c.default.createElement("hr",null),c.default.createElement("h1",{className:"title"},"Try by yourself"),c.default.createElement("h2",{className:"subtitle"},"Editable examples"),c.default.createElement(p.default,{title:"Reverse Route",hash:"MvdJbb",description:"Here you can see a simple manner to reverse the route flux"}))}}]),t}(i.PureComponent);t.default=m},849:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(54),a=n(850),o=function(e){return e&&e.__esModule?e:{default:e}}(a),l=n(192),u=function(e){return{routes:e.routes}},i=function(e){return{loadRoute:function(t){return e((0,l.loadRoute)(t))}}};t.default=(0,r.connect)(u,i)(o.default)},850:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var c,s,f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=n(0),p=r(d),m=n(323),y=r(m),b=n(324),h=r(b),_=n(839),v=r(_),E=n(851),N=function(e){return"berlin-postdam_"+e},O=(c={},i(c,E.DRIVING,"red"),i(c,E.TRANSIT,"purple"),c),g=(s={},i(s,N(E.DRIVING),{color:O[E.DRIVING],delay:800}),i(s,N(E.TRANSIT),{color:O[E.TRANSIT],delay:300}),s),w=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),f(t,[{key:"componentWillMount",value:function(){var e=this;[E.DRIVING,E.TRANSIT].forEach(function(t){return e.props.loadRoute(N(t))})}},{key:"render",value:function(){var e=this.props.routes,n=void 0;return t._allRoutesLoaded(e)&&(n=[].concat(a(e.data[N(E.DRIVING)]),a(e.data[N(E.TRANSIT)]))),p.default.createElement(v.default,{title:"Defining the faster route: car vs. public transport"},n?p.default.createElement(h.default,{latLngBounds:n},Object.keys(e.data).map(function(t){return p.default.createElement(y.default,{key:t,positions:e.data[t],options:g[t]})})):null,p.default.createElement("div",{className:"trip-type is-pulled-right"},p.default.createElement("small",{style:{color:O[E.DRIVING]}},p.default.createElement("span",{className:"icon is-small"},p.default.createElement("i",{className:"fa fa-car"}))," Car"),p.default.createElement("small",{style:{color:O[E.TRANSIT]}},p.default.createElement("span",{className:"icon is-small"},p.default.createElement("i",{className:"fa fa-train"}))," Public Transport")))}}],[{key:"_allRoutesLoaded",value:function(e){return e.data[N(E.DRIVING)]&&e.data[N(E.TRANSIT)]}}]),t}(d.PureComponent);t.default=w},851:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.DRIVING="DRIVING",t.TRANSIT="TRANSIT"},852:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),c=r(i),s=n(1),f=n(839),d=r(f),p=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={open:!1},n}return l(t,e),u(t,[{key:"render",value:function(){var e=this,n=this.props,r=n.hash,a=n.title,o=n.description,l=this.state.open,u=l?null:["Load Example"];return c.default.createElement(d.default,{title:a,footerItems:u,onClick:function(){return e.setState({open:!0})}},this.state.open?c.default.createElement("iframe",{width:"100%",height:400,scrolling:"no",src:t._src("rubenspgcavalcante",r),frameBorder:"no",allowTransparency:"true",allowFullScreen:"true",style:{height:400,width:"100%"}}):c.default.createElement("div",{className:"content"},o))}}]),t}(i.PureComponent);p.propTypes={hash:s.string.isRequired,title:s.string.isRequired,description:s.string},p._profile=function(e){return"//codepen.io/"+e},p._src=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:400,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"js,result",a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"dark";return p._profile(e)+"/embed/"+t+"/?height="+n+"&theme-id="+a+"&default-tab="+r+"&embed-version=2"},t.default=p}});
//# sourceMappingURL=examples.chunk.js.map