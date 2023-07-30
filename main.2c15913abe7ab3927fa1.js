(()=>{"use strict";function e(e,t,n,o,l){return{sel:e,data:t,children:n,text:o,elm:l,key:void 0===t?void 0:t.key}}const t=Array.isArray;function n(e){return"string"==typeof e||"number"==typeof e||e instanceof String||e instanceof Number}function o(e,t,n){if(e.ns="http://www.w3.org/2000/svg","foreignObject"!==n&&void 0!==t)for(let e=0;e<t.length;++e){const n=t[e];if("string"==typeof n)continue;const l=n.data;void 0!==l&&o(l,n.children,n.sel)}}function l(l,r,i){let d,c,s,u={};if(void 0!==i?(null!==r&&(u=r),t(i)?d=i:n(i)?c=i.toString():i&&i.sel&&(d=[i])):null!=r&&(t(r)?d=r:n(r)?c=r.toString():r&&r.sel?d=[r]:u=r),void 0!==d)for(s=0;s<d.length;++s)n(d[s])&&(d[s]=e(void 0,void 0,void 0,d[s],void 0));return"s"!==l[0]||"v"!==l[1]||"g"!==l[2]||3!==l.length&&"."!==l[3]&&"#"!==l[3]||o(u,d,l),e(l,u,d,c,void 0)}class r{constructor(){}componentDidMount(){}setState(e){this.state={...this.state,...e},i.__updater(this)}render(){}}r.prototype.isClassComponent=!0;const i={createElement:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(var n=arguments.length,o=new Array(n>2?n-2:0),r=2;r<n;r++)o[r-2]=arguments[r];if(o=o.flat(),e.prototype&&e.prototype.isClassComponent){const n=new e(t);return n.__vNode=n.render(),n.__vNode.data.hook={create:()=>{n.componentDidMount()}},n.__vNode}if("function"==typeof e)return e(t);let i={},d={};for(let e in t)e.startsWith("on")?d[e.substring(2).toLowerCase()]=t[e]:i[e]=t[e];return l(e,{props:i,on:d},o)},Component:r},d=i;function c(e){if(s(e)){for(;e&&s(e);)e=u(e).parent;return null!=e?e:null}return e.parentNode}function s(e){return 11===e.nodeType}function u(e,t){var n,o,l;const r=e;return null!==(n=r.parent)&&void 0!==n||(r.parent=null!=t?t:null),null!==(o=r.firstChildNode)&&void 0!==o||(r.firstChildNode=e.firstChild),null!==(l=r.lastChildNode)&&void 0!==l||(r.lastChildNode=e.lastChild),r}const a={createElement:function(e,t){return document.createElement(e,t)},createElementNS:function(e,t,n){return document.createElementNS(e,t,n)},createTextNode:function(e){return document.createTextNode(e)},createDocumentFragment:function(){return u(document.createDocumentFragment())},createComment:function(e){return document.createComment(e)},insertBefore:function(e,t,n){if(s(e)){let t=e;for(;t&&s(t);)t=u(t).parent;e=null!=t?t:e}s(t)&&(t=u(t,e)),n&&s(n)&&(n=u(n).firstChildNode),e.insertBefore(t,n)},removeChild:function(e,t){e.removeChild(t)},appendChild:function(e,t){s(t)&&(t=u(t,e)),e.appendChild(t)},parentNode:c,nextSibling:function(e){var t;if(s(e)){const n=u(e),o=c(n);if(o&&n.lastChildNode){const e=Array.from(o.childNodes),l=e.indexOf(n.lastChildNode);return null!==(t=e[l+1])&&void 0!==t?t:null}return null}return e.nextSibling},tagName:function(e){return e.tagName},setTextContent:function(e,t){e.textContent=t},getTextContent:function(e){return e.textContent},isElement:function(e){return 1===e.nodeType},isText:function(e){return 3===e.nodeType},isComment:function(e){return 8===e.nodeType},isDocumentFragment:s};function f(e){return void 0===e}function m(e){return void 0!==e}const v=e("",{},[],void 0,void 0);function p(e,t){var n,o;const l=e.key===t.key,r=(null===(n=e.data)||void 0===n?void 0:n.is)===(null===(o=t.data)||void 0===o?void 0:o.is),i=e.sel===t.sel,d=!(!e.sel&&e.sel===t.sel)||typeof e.text==typeof t.text;return i&&l&&r&&d}function h(){throw new Error("The document fragment is not supported on this platform.")}function g(e,t,n){var o;const l={};for(let r=t;r<=n;++r){const t=null===(o=e[r])||void 0===o?void 0:o.key;void 0!==t&&(l[t]=r)}return l}const C=["create","update","remove","destroy","pre","post"];function x(e,t){let n,o,l;const r=t.elm;let i=e.data.props,d=t.data.props;if((i||d)&&i!==d)for(n in i=i||{},d=d||{},d)o=d[n],l=i[n],l===o||"value"===n&&r[n]===o||(r[n]=o)}function y(e,t,n){if("function"==typeof e)e.call(t,n,t);else if("object"==typeof e)for(let o=0;o<e.length;o++)y(e[o],t,n)}function N(e,t){const n=e.type,o=t.data.on;o&&o[n]&&y(o[n],t,e)}function E(e,t){const n=e.data.on,o=e.listener,l=e.elm,r=t&&t.data.on,i=t&&t.elm;let d;if(n!==r){if(n&&o)if(r)for(d in n)r[d]||l.removeEventListener(d,o,!1);else for(d in n)l.removeEventListener(d,o,!1);if(r){const o=t.listener=e.listener||function e(t){N(t,e.vnode)};if(o.vnode=t,n)for(d in r)n[d]||i.addEventListener(d,o,!1);else for(d in r)i.addEventListener(d,o,!1)}}}const k=function(o,l,r){const i={create:[],update:[],remove:[],destroy:[],pre:[],post:[]},d=a;for(const e of C)for(const t of o){const n=t[e];void 0!==n&&i[e].push(n)}function c(e,t){return function(){if(0==--t){const t=d.parentNode(e);d.removeChild(t,e)}}}function s(e,o){var l,c,u,a;let p,g=e.data;if(void 0!==g){const t=null===(l=g.hook)||void 0===l?void 0:l.init;m(t)&&(t(e),g=e.data)}const C=e.children,x=e.sel;if("!"===x)f(e.text)&&(e.text=""),e.elm=d.createComment(e.text);else if(void 0!==x){const l=x.indexOf("#"),r=x.indexOf(".",l),u=l>0?l:x.length,a=r>0?r:x.length,f=-1!==l||-1!==r?x.slice(0,Math.min(u,a)):x,h=e.elm=m(g)&&m(p=g.ns)?d.createElementNS(p,f,g):d.createElement(f,g);for(u<a&&h.setAttribute("id",x.slice(u+1,a)),r>0&&h.setAttribute("class",x.slice(a+1).replace(/\./g," ")),p=0;p<i.create.length;++p)i.create[p](v,e);if(t(C))for(p=0;p<C.length;++p){const e=C[p];null!=e&&d.appendChild(h,s(e,o))}else n(e.text)&&d.appendChild(h,d.createTextNode(e.text));const y=e.data.hook;m(y)&&(null===(c=y.create)||void 0===c||c.call(y,v,e),y.insert&&o.push(e))}else if((null===(u=null==r?void 0:r.experimental)||void 0===u?void 0:u.fragments)&&e.children){for(e.elm=(null!==(a=d.createDocumentFragment)&&void 0!==a?a:h)(),p=0;p<i.create.length;++p)i.create[p](v,e);for(p=0;p<e.children.length;++p){const t=e.children[p];null!=t&&d.appendChild(e.elm,s(t,o))}}else e.elm=d.createTextNode(e.text);return e.elm}function u(e,t,n,o,l,r){for(;o<=l;++o){const l=n[o];null!=l&&d.insertBefore(e,s(l,r),t)}}function x(e){var t,n;const o=e.data;if(void 0!==o){null===(n=null===(t=null==o?void 0:o.hook)||void 0===t?void 0:t.destroy)||void 0===n||n.call(t,e);for(let t=0;t<i.destroy.length;++t)i.destroy[t](e);if(void 0!==e.children)for(let t=0;t<e.children.length;++t){const n=e.children[t];null!=n&&"string"!=typeof n&&x(n)}}}function y(e,t,n,o){for(var l,r;n<=o;++n){let o,s;const u=t[n];if(null!=u)if(m(u.sel)){x(u),o=i.remove.length+1,s=c(u.elm,o);for(let e=0;e<i.remove.length;++e)i.remove[e](u,s);const e=null===(r=null===(l=null==u?void 0:u.data)||void 0===l?void 0:l.hook)||void 0===r?void 0:r.remove;m(e)?e(u,s):s()}else u.children?(x(u),y(e,u.children,0,u.children.length-1)):d.removeChild(e,u.elm)}}function N(e,t,n){var o,l,r,c,a,v,h,C;const x=null===(o=t.data)||void 0===o?void 0:o.hook;null===(l=null==x?void 0:x.prepatch)||void 0===l||l.call(x,e,t);const E=t.elm=e.elm;if(e===t)return;if(void 0!==t.data||m(t.text)&&t.text!==e.text){null!==(r=t.data)&&void 0!==r||(t.data={}),null!==(c=e.data)&&void 0!==c||(e.data={});for(let n=0;n<i.update.length;++n)i.update[n](e,t);null===(h=null===(v=null===(a=t.data)||void 0===a?void 0:a.hook)||void 0===v?void 0:v.update)||void 0===h||h.call(v,e,t)}const k=e.children,T=t.children;f(t.text)?m(k)&&m(T)?k!==T&&function(e,t,n,o){let l,r,i,c,a=0,m=0,v=t.length-1,h=t[0],C=t[v],x=n.length-1,E=n[0],k=n[x];for(;a<=v&&m<=x;)null==h?h=t[++a]:null==C?C=t[--v]:null==E?E=n[++m]:null==k?k=n[--x]:p(h,E)?(N(h,E,o),h=t[++a],E=n[++m]):p(C,k)?(N(C,k,o),C=t[--v],k=n[--x]):p(h,k)?(N(h,k,o),d.insertBefore(e,h.elm,d.nextSibling(C.elm)),h=t[++a],k=n[--x]):p(C,E)?(N(C,E,o),d.insertBefore(e,C.elm,h.elm),C=t[--v],E=n[++m]):(void 0===l&&(l=g(t,a,v)),r=l[E.key],f(r)?d.insertBefore(e,s(E,o),h.elm):(i=t[r],i.sel!==E.sel?d.insertBefore(e,s(E,o),h.elm):(N(i,E,o),t[r]=void 0,d.insertBefore(e,i.elm,h.elm))),E=n[++m]);m<=x&&(c=null==n[x+1]?null:n[x+1].elm,u(e,c,n,m,x,o)),a<=v&&y(e,t,a,v)}(E,k,T,n):m(T)?(m(e.text)&&d.setTextContent(E,""),u(E,null,T,0,T.length-1,n)):m(k)?y(E,k,0,k.length-1):m(e.text)&&d.setTextContent(E,""):e.text!==t.text&&(m(k)&&y(E,k,0,k.length-1),d.setTextContent(E,t.text)),null===(C=null==x?void 0:x.postpatch)||void 0===C||C.call(x,e,t)}return function(t,n){let o,l,r;const c=[];for(o=0;o<i.pre.length;++o)i.pre[o]();for(function(e,t){return e.isElement(t)}(d,t)?t=function(t){const n=t.id?"#"+t.id:"",o=t.getAttribute("class"),l=o?"."+o.split(" ").join("."):"";return e(d.tagName(t).toLowerCase()+n+l,{},[],void 0,t)}(t):function(e,t){return e.isDocumentFragment(t)}(d,t)&&(t=e(void 0,{},[],void 0,t)),p(t,n)?N(t,n,c):(l=t.elm,r=d.parentNode(l),s(n,c),null!==r&&(d.insertBefore(r,n.elm,d.nextSibling(l)),y(r,[t],0,0))),o=0;o<c.length;++o)c[o].data.hook.insert(c[o]);for(o=0;o<i.post.length;++o)i.post[o]();return n}}([{create:x,update:x},{create:E,update:E,destroy:E}]);d.__updater=e=>{const t=e.__vNode,n=e.render();e.__vNode=k(t,n)};const T=(e,t)=>{k(t,e)};class b extends d.Component{constructor(e){super(e),this.state={count:0}}componentDidMount(){console.log("Mounted")}render(){return d.createElement("div",null,d.createElement("p",null,"Counter: ",this.state.count),d.createElement("button",{onClick:()=>this.setState({count:this.state.count+1})},"Increment"))}}T(d.createElement("div",null,d.createElement("h1",{className:"primary"},"BasnorUi is awesome!"),d.createElement("p",null,"This lib is cool and awesome. Moreover, it looks like React🤫"),d.createElement((e=>{let{name:t}=e;return d.createElement("p",null,"Love to see you, ",t,"!")}),{name:"Anastasiia"}),d.createElement("p",null,"Drinks in a glass:"),d.createElement("ul",null,["Coffee","Tea","Milk"].map((e=>d.createElement("li",null,e)))),d.createElement(b,null)),document.getElementById("root"))})();
//# sourceMappingURL=main.2c15913abe7ab3927fa1.js.map