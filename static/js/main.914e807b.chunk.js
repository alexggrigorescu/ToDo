(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{14:function(t,e,o){},15:function(t,e,o){},17:function(t,e,o){},18:function(t,e,o){"use strict";o.r(e);var n=o(1),c=o.n(n),s=o(8),a=o.n(s),i=(o(14),o(3)),l=(o(15),o(9)),r=o(6),d=o.n(r),u=o(0);function j(t){var e=t.setInputText,o=t.setTodos,n=t.todos,c=t.inputText,s=t.filter,a=t.setFilter;return Object(u.jsxs)("form",{children:[Object(u.jsx)("input",{value:c,onChange:function(t){e(t.target.value)},type:"text",className:"todo-input"}),Object(u.jsx)("button",{onClick:function(t){t.preventDefault(),0!==c.length?o([].concat(Object(l.a)(n),[{text:c,completed:!1,id:d()()}])):alert("Field empty"),e("")},className:"todo-button",type:"submit",children:Object(u.jsx)("i",{className:"fas fa-plus-square"})}),Object(u.jsx)("div",{className:"select",children:Object(u.jsxs)("select",{onChange:function(t){a(t.target.value),console.log(s)},name:"todos",className:"filter-todo",children:[Object(u.jsx)("option",{value:"all",children:"All"}),Object(u.jsx)("option",{value:"done",children:"Done"}),Object(u.jsx)("option",{value:"notdone",children:"In Progress"})]})})]})}var f=o(7);o(17);function b(t){var e=t.todo,o=t.todos,n=t.setTodos;return Object(u.jsxs)("div",{className:"todo",children:[Object(u.jsx)("li",{className:"todo-item ".concat(e.completed?"completed":null),children:e.text}),Object(u.jsx)("button",{onClick:function(){n(o.map((function(t){return t.id===e.id?Object(f.a)(Object(f.a)({},t),{},{completed:!t.completed}):t})))},children:Object(u.jsx)("i",{className:"fas fa-check"})}),Object(u.jsx)("button",{onClick:function(){console.log(e),n(o.filter((function(t){return t.id!==e.id})))},children:Object(u.jsx)("i",{className:"fas fa-trash"})})]})}function O(t){var e=t.todos,o=t.setTodos,n=t.filteredTodos;return Object(u.jsx)("div",{className:"todo-container",children:Object(u.jsx)("ul",{className:"todo-list",children:n.map((function(t){return Object(u.jsx)(b,{todo:t,setTodos:o,todos:e},t.id)}))})})}var p=function(){var t=Object(n.useState)(""),e=Object(i.a)(t,2),o=e[0],c=e[1],s=Object(n.useState)([]),a=Object(i.a)(s,2),l=a[0],r=a[1],d=Object(n.useState)("all"),f=Object(i.a)(d,2),b=f[0],p=f[1],m=Object(n.useState)([]),x=Object(i.a)(m,2),h=x[0],g=x[1];return Object(n.useEffect)((function(){!function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("todos"));r(t)}}()}),[]),Object(n.useEffect)((function(){!function(){switch(b){case"done":g(l.filter((function(t){return!0===t.completed})));break;case"notdone":g(l.filter((function(t){return!0!==t.completed})));break;default:g(l)}}(),localStorage.setItem("todos",JSON.stringify(l))}),[l,b]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("header",{children:"My Todo App"}),Object(u.jsx)(j,{setInputText:c,setTodos:r,todos:l,inputText:o,setFilter:p,filter:b}),Object(u.jsx)(O,{todos:l,setTodos:r,filteredTodos:h})]})},m=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,19)).then((function(e){var o=e.getCLS,n=e.getFID,c=e.getFCP,s=e.getLCP,a=e.getTTFB;o(t),n(t),c(t),s(t),a(t)}))};a.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root")),m()}},[[18,1,2]]]);
//# sourceMappingURL=main.914e807b.chunk.js.map