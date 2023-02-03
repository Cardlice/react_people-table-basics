(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{21:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){"use strict";c.r(t);var n=c(10),a=c(5),r=(c(19),c(20),c(0)),s=c(2),j=(c(21),c(1)),i=Object(r.memo)((function(){return Object(j.jsx)("h1",{className:"title",children:"Home Page"})})),o=c(8),l=c(4);function b(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}c(23);var h=function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})},d=c(6),O=c.n(d),m=Object(r.memo)((function(e){var t=e.person;return Object(j.jsx)(a.b,{to:t.slug,className:O()({"has-text-danger":"f"===t.sex}),children:t.name})})),u=Object(r.memo)((function(e){var t=e.people,c=Object(s.h)().slug;return Object(j.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Name"}),Object(j.jsx)("th",{children:"Sex"}),Object(j.jsx)("th",{children:"Born"}),Object(j.jsx)("th",{children:"Died"}),Object(j.jsx)("th",{children:"Mother"}),Object(j.jsx)("th",{children:"Father"})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsxs)("tr",{"data-cy":"person",className:O()({"has-background-warning":c===e.slug}),children:[Object(j.jsx)("td",{children:Object(j.jsx)(m,{person:e})}),Object(j.jsx)("td",{children:e.sex}),Object(j.jsx)("td",{children:e.born}),Object(j.jsx)("td",{children:e.died}),Object(j.jsx)("td",{children:e.mother?Object(j.jsx)(m,{person:e.mother}):e.motherName||"-"}),Object(j.jsx)("td",{children:e.father?Object(j.jsx)(m,{person:e.father}):e.fatherName||"-"})]},e.slug)}))})]})})),x=Object(r.memo)((function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)(!1),s=Object(l.a)(a,2),i=s[0],d=s[1],O=Object(r.useState)(!1),m=Object(l.a)(O,2),x=m[0],p=m[1];return Object(r.useEffect)((function(){d(!0),b().then((function(e){var t=e.map((function(t){return Object(o.a)(Object(o.a)({},t),{},{mother:e.find((function(e){return e.name===t.motherName})),father:e.find((function(e){return e.name===t.fatherName}))})}));n(t)})).catch((function(){return p(!0)})).finally((function(){return d(!1)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"title",children:"People Page"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsxs)("div",{className:"box table-container",children:[i&&Object(j.jsx)(h,{}),x&&Object(j.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),0===c.length&&!i&&Object(j.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),c.length>0&&Object(j.jsx)(u,{people:c})]})})]})})),p=Object(r.memo)((function(){return Object(j.jsx)("h1",{className:"title",children:"Page not found"})})),f=Object(r.memo)((function(e){var t=e.to,c=e.title;return Object(j.jsx)(a.c,{to:t,className:function(e){var t=e.isActive;return O()("navbar-item",{"has-background-grey-lighter":t})},children:c})})),v=Object(r.memo)((function(){return Object(j.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(f,{to:"/",title:"Home"}),Object(j.jsx)(f,{to:"/people",title:"People"})]})})})})),g=function(){return Object(j.jsxs)("div",{"data-cy":"app",children:[Object(j.jsx)(v,{}),Object(j.jsx)("main",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(s.d,{children:[Object(j.jsx)(s.b,{path:"/",element:Object(j.jsx)(i,{})}),Object(j.jsx)(s.b,{path:"/people",element:Object(j.jsx)(x,{}),children:Object(j.jsx)(s.b,{path:":slug",element:Object(j.jsx)(x,{})})}),Object(j.jsx)(s.b,{path:"/home",element:Object(j.jsx)(s.a,{to:"/"})}),Object(j.jsx)(s.b,{path:"*",element:Object(j.jsx)(p,{})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(j.jsx)(a.a,{children:Object(j.jsx)(g,{})}))}},[[24,1,2]]]);
//# sourceMappingURL=main.332b2547.chunk.js.map