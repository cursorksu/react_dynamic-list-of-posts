(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{11:function(e,t,a){e.exports=a(28)},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),s=a.n(c),l=a(1),o=a(8),u=a.n(o),i=a(10),m=a(2),d=a.n(m),p=a(9),f=function(){var e=Object(p.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com"+t);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error(a.statusText);case 5:return e.abrupt("return",a.json().catch((function(e){return e})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=f("/posts"),E=f("/users"),h=f("/comments"),y=Promise.all([b,E,h]).then((function(e){var t=Object(l.a)(e,3),a=t[0],n=t[1],r=t[2];return a.map((function(e){return Object(i.a)({},e,{user:n.find((function(t){return t.id===e.userId})),postComments:r.filter((function(t){return t.postId===e.id}))})}))})),v=function(e){var t=e.post,a=t.id,n=t.user,c=t.body,s=t.title,l=t.postComments;return r.a.createElement("li",null,r.a.createElement("div",{className:"card border-secondary mb-3 row"},r.a.createElement("div",{className:"card-header"},r.a.createElement("span",null,"#".concat(a)),r.a.createElement("h6",{className:"card-title"},n.name)),r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},s),r.a.createElement("p",{className:"card-text"},c),r.a.createElement("ul",{className:"comments"},l.map((function(e){return r.a.createElement("li",{key:"comment".concat(e.id)},r.a.createElement("div",{className:"card-header"},r.a.createElement("span",{className:"text-primary"},e.name),r.a.createElement("br",null),r.a.createElement("span",{className:"text-secondary"},e.email)),r.a.createElement("p",null,e.body))}))))))},N=function(e){var t=e.posts;return r.a.createElement("ul",{className:"posts"},t.map((function(e){return r.a.createElement(v,{key:e.id,post:e})})))},j=function(e){var t=e.setValue,a=e.searchingValue;return r.a.createElement("form",{className:"form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"search"},"Search post by title or by description",r.a.createElement("input",{type:"text",className:"form-control",value:a,onChange:t,id:"search",placeholder:"put someth.."}))))},O=(a(26),a(27),function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!1),o=Object(l.a)(s,2),i=o[0],m=o[1],d=Object(n.useState)(""),p=Object(l.a)(d,2),f=p[0],b=p[1],E=Object(n.useState)(""),h=Object(l.a)(E,2),v=h[0],O=h[1],g=Object(n.useState)(""),k=Object(l.a)(g,2),w=k[0],x=k[1],C=Object(n.useMemo)((function(){return a.filter((function(e){var t=e.title,a=e.body;return t.includes(v.toLocaleLowerCase())||a.includes(v.toLocaleLowerCase())}))}),[v,a]),S=Object(n.useCallback)(u()(O,2e3),[]);return r.a.createElement("main",{className:"container"},r.a.createElement("h1",{className:"text-center title"},"Dynamic list of posts"),0===a.length&&r.a.createElement("button",{type:"button",className:"button-load btn btn-secondary",onClick:function(){m(!0),y.then((function(e){c(e)})).catch((function(e){return x(e.toString())})).finally((function(){return m(!1)}))}},i?"Loading...":"Load"),w&&r.a.createElement("div",{className:"alert alert-dismissible alert-warning"},r.a.createElement("span",null,"Server responded\n            ".concat(w,"\n            Check your internet connection and try again."))),0!==a.length&&r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{setValue:function(e){var t=e.target.value;b(t),S(t)},searchingValue:f}),r.a.createElement(N,{posts:C})))});s.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.eb1f6e22.chunk.js.map