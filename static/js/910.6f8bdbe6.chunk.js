"use strict";(self.webpackChunksearch_movies=self.webpackChunksearch_movies||[]).push([[910],{3859:function(e,t,n){n.d(t,{v:function(){return u}});var r=n(5861),a=n(7757),c=n.n(a),s=n(1243);function u(e,t){return i.apply(this,arguments)}function i(){return(i=(0,r.Z)(c().mark((function e(t,n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/","3ecc7363f263881322228195a13f9a25",e.next=4,s.Z.get("".concat("https://api.themoviedb.org/3/").concat(t,"?api_key=").concat("3ecc7363f263881322228195a13f9a25","&").concat(n,"&language=en-US"));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},5881:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(5861),a=n(9439),c=n(7757),s=n.n(c),u=n(1087),i=n(7689),o=n(2791),l=n(3859),f=n(5264),p=n(458),h="Movies_form__4ow+Z",v="Movies_input__KrUqs",m="Movies_btn__TlfBQ",d="Movies_item__Ba4aJ",x=n(184),_=function(){var e,t=(0,u.lr)(),n=(0,a.Z)(t,2),c=n[0],_=n[1],b=(0,o.useState)([]),g=(0,a.Z)(b,2),y=g[0],k=g[1],j=(0,o.useState)(""),w=(0,a.Z)(j,2),S=w[0],Z=w[1],N=(0,i.TH)(),q=null!==(e=c.get("query"))&&void 0!==e?e:"";(0,o.useEffect)((function(){if(""!==q){Z(q);var e="search/movie",t="query=".concat(q);!function(){n.apply(this,arguments)}()}function n(){return(n=(0,r.Z)(s().mark((function n(){var r,a;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,l.v)(e,t);case 3:if(r=n.sent,a=r.data,k(a.results),0!==a.results.length){n.next=8;break}return n.abrupt("return",f.Notify.failure("Sorry, but nothing found"));case 8:n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}}),[q]);return(0,x.jsxs)("section",{children:[(0,x.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.elements.input.value;_({query:t})},className:h,children:[(0,x.jsx)("input",{className:v,type:"text",name:"input",onChange:function(e){Z(e.target.value)},value:S,placeholder:"Search movies"}),(0,x.jsx)("button",{className:m,type:"submit",children:(0,x.jsx)(p.w75,{color:"black",fontSize:"40px"})})]}),(0,x.jsx)("ul",{children:y.map((function(e){return(0,x.jsx)("li",{className:d,children:(0,x.jsx)(u.rU,{to:"/movies/".concat(e.id),state:{from:N},children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=910.6f8bdbe6.chunk.js.map