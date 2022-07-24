(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(6),s=n.n(c),r=n(4),a=n(2),o=n(3),u=n.n(o),i=n(1),l=(n(14),n(15),n(7)),d=n(8),j=n.n(d),b=(n(18),"https://mate.academy/students-api");function f(){return fetch("".concat(b,"/todos")).then((function(e){return e.json()}))}var p=n(0),O=function(e){var t=e.todos,n=e.onUserSelect,c=Object(i.useState)(t),s=Object(a.a)(c,2),o=s[0],d=s[1],b=Object(i.useState)(t),O=Object(a.a)(b,2),h=O[0],m=O[1],v=Object(i.useState)("all"),x=Object(a.a)(v,2),_=x[0],N=x[1],y=Object(i.useState)(""),C=Object(a.a)(y,2),S=C[0],k=C[1],U=Object(i.useState)(""),w=Object(a.a)(U,2),T=w[0],L=w[1],g=function(){if(T.length){var e=null===h||void 0===h?void 0:h.filter((function(e){return e.title.includes(T.toLowerCase())}));d(e||null)}},E=Object(i.useCallback)(Object(l.debounce)(L,500),[]);return Object(i.useEffect)((function(){g()}),[T]),Object(i.useEffect)((function(){Object(r.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=m,e.next=3,f();case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=d,e.next=8,f();case 8:e.t3=e.sent,(0,e.t2)(e.t3);case 10:case"end":return e.stop()}}),e)})))()}),[]),Object(i.useEffect)((function(){!function(){var e=t;switch(_){case"not-completed":e=(null===t||void 0===t?void 0:t.filter((function(e){return!e.completed})))||null;break;case"completed":e=(null===t||void 0===t?void 0:t.filter((function(e){return e.completed})))||null}m(e),d(e),k("")}()}),[_]),Object(p.jsxs)("div",{className:"TodoList",children:[Object(p.jsx)("h2",{children:"Todos:"}),Object(p.jsx)("input",{type:"text",placeholder:"Search","data-cy":"filterByTitle",value:S,onChange:function(e){var t=e.target;k(t.value),E(t.value),g()}}),Object(p.jsxs)("select",{name:"status",value:_,onChange:function(e){var t=e.target;return N(t.value)},children:[Object(p.jsx)("option",{value:"all",children:"All"}),Object(p.jsx)("option",{value:"not-completed",children:"Not completed"}),Object(p.jsx)("option",{value:"completed",children:"Completed"})]}),Object(p.jsx)("div",{className:"TodoList__list-container",children:Object(p.jsx)("ul",{className:"TodoList__list","data-cy":"listOfTodos",children:o&&o.map((function(e){return Object(p.jsxs)("li",{className:j()("TodoList__item",{"TodoList__item--checked":e.completed,"TodoList__item--unchecked":!e.completed}),children:[Object(p.jsxs)("label",{children:[Object(p.jsx)("input",{type:"checkbox"}),Object(p.jsx)("p",{children:e.title})]}),Object(p.jsxs)("button",{"data-cy":"userButton",className:"TodoList__user-button button",type:"button",onClick:function(){return n(e.userId)},children:["User\xa0#",e.userId]})]},e.id)}))})})]})},h=(n(20),function(e){var t=e.userId,n=e.onUnselect,c=Object(i.useState)(null),s=Object(a.a)(c,2),o=s[0],l=s[1];return Object(i.useEffect)((function(){var e=function(){var e=Object(r.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,n=t,fetch("".concat(b,"/users/").concat(String(n))).then((function(e){return e.json()}));case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}var n}),e)})));return function(){return e.apply(this,arguments)}}();try{e()}catch(n){l(null)}}),[t]),o&&Object(p.jsxs)("div",{className:"CurrentUser",children:[Object(p.jsx)("h2",{className:"CurrentUser__title",children:Object(p.jsxs)("span",{children:["Selected user:",t]})}),Object(p.jsx)("h3",{className:"CurrentUser__name","data-cy":"userName",children:null===o||void 0===o?void 0:o.name}),Object(p.jsx)("p",{className:"CurrentUser__email",children:null===o||void 0===o?void 0:o.email}),Object(p.jsx)("p",{className:"CurrentUser__phone",children:null===o||void 0===o?void 0:o.phone}),Object(p.jsx)("button",{type:"button",className:"CurrentUser__clear",onClick:function(){return n(0)},children:"Clear"})]})}),m=function(){var e=Object(i.useState)(null),t=Object(a.a)(e,2),n=t[0],c=t[1],s=Object(i.useState)(0),o=Object(a.a)(s,2),l=o[0],d=o[1];return Object(i.useEffect)((function(){var e=function(){var e=Object(r.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,f();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{e()}catch(t){c(null)}}),[]),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("div",{className:"App__sidebar",children:Object(p.jsx)(O,{todos:n,onUserSelect:d})}),Object(p.jsx)("div",{className:"App__content",children:Object(p.jsx)("div",{className:"App__content-container",children:l?Object(p.jsx)(h,{userId:l,onUnselect:d}):"No user selected"})})]})};s.a.render(Object(p.jsx)(m,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.5bf35de0.chunk.js.map