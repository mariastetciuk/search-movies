"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[884],{859:function(e,t,n){n.d(t,{v:function(){return i}});var r=n(861),a=n(757),c=n.n(a),s=n(243);function i(e,t){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function e(t,n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/","3ecc7363f263881322228195a13f9a25",e.next=4,s.Z.get("".concat("https://api.themoviedb.org/3/").concat(t,"?api_key=").concat("3ecc7363f263881322228195a13f9a25","&").concat(n,"&language=en-US"));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},884:function(e,t,n){n.r(t);var r=n(861),a=n(439),c=n(757),s=n.n(c),i=n(791),o=n(689),u=n(87),l=n(859),h=n(184);t.default=function(){var e,t,n=(0,o.UO)().movieId,c=(0,o.TH)(),p=(0,i.useRef)(null!==(e=null===(t=c.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/"),d=(0,i.useState)({}),v=(0,a.Z)(d,2),f=v[0],x=v[1];(0,i.useEffect)((function(){var e="movie/".concat(n);function t(){return(t=(0,r.Z)(s().mark((function t(){var n,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,l.v)(e);case 3:n=t.sent,r=n.data,x(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n]);var j;return(0,h.jsxs)("div",{children:[(0,h.jsx)(u.rU,{to:p.current,children:"go back"}),(0,h.jsxs)("article",{children:[(0,h.jsx)("img",{src:f.poster_path?"https://image.tmdb.org/t/p/w500"+f.poster_path:"",alt:f.title,width:"300"}),(0,h.jsxs)("h2",{children:[f.title,"(",(j=f.release_date,new Date(j).getFullYear()),")"]}),(0,h.jsxs)("p",{children:["Vote average: ",f.vote_average]}),(0,h.jsx)("h3",{children:"Overview"}),(0,h.jsx)("p",{children:f.overview}),(0,h.jsx)("h3",{children:"Genres"}),(0,h.jsx)("p",{children:f.genres?f.genres.map((function(e){return e.name})).join(" "):""})]}),(0,h.jsxs)("section",{children:[(0,h.jsx)("h2",{children:"Additional information"}),(0,h.jsx)(u.rU,{to:"cast",children:"Cast"}),(0,h.jsx)(u.rU,{to:"reviews",children:"Reviews"}),(0,h.jsx)(i.Suspense,{fallback:(0,h.jsx)("div",{children:"Loading..."}),children:(0,h.jsx)(o.j3,{})})]})]})}}}]);
//# sourceMappingURL=884.fd61e907.chunk.js.map