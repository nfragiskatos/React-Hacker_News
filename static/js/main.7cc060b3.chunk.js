(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),o=a.n(c),l=(a(12),a(1)),u=a(2),s=a.n(u),i=a(5),m=a(6),p=function(e,t){switch(t.type){case"SET_LOADING":return Object(l.a)(Object(l.a)({},e),{},{isLoading:!0});case"SET_STORIES":return Object(l.a)(Object(l.a)({},e),{},{isLoading:!1,hits:t.payload.hits,nbPages:t.payload.nbPages});case"REMOVE_STORY":return Object(l.a)(Object(l.a)({},e),{},{hits:e.hits.filter((function(e){return e.objectID!==t.payload}))});case"HANDLE_SEARCH":return Object(l.a)(Object(l.a)({},e),{},{query:t.payload,page:0});case"HANDLE_PAGE":var a=0;return a="inc"===t.payload?e.page<e.nbPages-1?e.page+1:a:0===e.page?e.nbPages-1:e.page-1,Object(l.a)(Object(l.a)({},e),{},{page:a});default:throw new Error("no matching ".concat(t.type," action"))}},E={isLoading:!0,hits:[],query:"react",page:0,nbPages:0},b=r.a.createContext(),d=function(e){var t=e.children,a=Object(n.useReducer)(p,E),c=Object(m.a)(a,2),o=c[0],u=c[1],d=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u({type:"SET_LOADING"}),e.prev=1,e.next=4,fetch(t);case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,u({type:"SET_STORIES",payload:{hits:n.hits,nbPages:n.nbPages}}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){d("".concat("https://hn.algolia.com/api/v1/search?","query=").concat(o.query,"&page=").concat(o.page))}),[o.query,o.page]),r.a.createElement(b.Provider,{value:Object(l.a)(Object(l.a)({},o),{},{removeStory:function(e){u({type:"REMOVE_STORY",payload:e})},handleSearch:function(e){u({type:"HANDLE_SEARCH",payload:e})},handlePage:function(e){u({type:"HANDLE_PAGE",payload:e})}})},t)},f=function(){return Object(n.useContext)(b)},h=function(){var e=f(),t=e.query,a=e.handleSearch;return r.a.createElement("form",{className:"search-form",onSubmit:function(e){return e.preventDefault()}},r.a.createElement("h2",null,"search hacker news"),r.a.createElement("input",{type:"text",className:"form-input",value:t,onChange:function(e){return a(e.target.value)}}))},g=function(){var e=f(),t=e.isLoading,a=e.hits,n=e.removeStory;return t?r.a.createElement("div",{className:"loading"}):r.a.createElement("section",{className:"stories"},a.map((function(e){var t=e.objectID,a=e.title,c=e.num_comments,o=e.url,l=e.points,u=e.author;return r.a.createElement("article",{key:t,className:"story"},r.a.createElement("h4",{className:"title"},a),r.a.createElement("p",{className:"info"},l," points by ",r.a.createElement("span",null,u," | ")," ",c," comments"),r.a.createElement("div",null,r.a.createElement("a",{className:"read-link",target:"_blank",rel:"noopener noreferrer",href:o},"read more"),r.a.createElement("button",{onClick:function(){return n(t)},className:"remove-btn"},"remove")))})))},y=function(){var e=f(),t=e.isLoading,a=e.page,n=e.nbPages,c=e.handlePage;return r.a.createElement("div",{className:"btn-container"},r.a.createElement("button",{disabled:t,onClick:function(){return c("dec")}},"prev"),r.a.createElement("p",null,a+1," of ",n),r.a.createElement("button",{disabled:t,onClick:function(){return c("inc")}},"next"))};var v=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement(y,null),r.a.createElement(g,null))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null,r.a.createElement(v,null))),document.getElementById("root"))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.7cc060b3.chunk.js.map