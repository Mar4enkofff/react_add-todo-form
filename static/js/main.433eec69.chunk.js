(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(9),s=a(2),c=a(6),o=a(1),l=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],d=(a(14),a(8)),u=a.n(d),m=a(0),j=function(e){var t=e.user,a=t.name,n=t.email;return Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(n),children:a})},b=function(e){var t=e.todo,a=t.user,n=t.title,i=t.completed,r=t.id;return Object(m.jsxs)("article",{"data-id":r,className:u()("TodoInfo",{"TodoInfo--completed":i}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:n}),a&&Object(m.jsx)(j,{user:a})]})},h=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(b,{todo:e},e.id)}))})},O=function(e){return l.find((function(t){return t.id===e}))||null},f=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:O(e.userId)})})),p=function(){var e=Object(o.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(0),c=Object(s.a)(i,2),d=c[0],u=c[1],j=Object(o.useState)(!0),b=Object(s.a)(j,2),p=b[0],x=b[1],v=Object(o.useState)(!0),y=Object(s.a)(v,2),S=y[0],N=y[1],I=Object(o.useState)(f),g=Object(s.a)(I,2),C=g[0],_=g[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){e.preventDefault(),""===a.trim()&&x(!1),0===d&&N(!1),""!==a.trim()&&0!==d&&(_((function(e){return[].concat(Object(r.a)(e),[{id:C.reduce((function(e,t){return Math.max(e,t.id)}),0)+1,title:a.trim(),userId:d,completed:!1,user:O(+d)}])})),n(""),u(0))},children:[Object(m.jsx)("div",{className:"field",children:Object(m.jsxs)("label",{htmlFor:"post-title",children:["Title:",Object(m.jsx)("input",{type:"text","data-cy":"titleInput",placeholder:"Enter a title",id:"post-title",value:a,onChange:function(e){n(e.target.value.replace(/[^0-9A-Za-z\u0410-\u042f\u0430-\u044f\u0490\u0491\u0407\u0457\u0404\u0454\s]/g,"")),x(!0)}}),!p&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]})}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("label",{children:["User:",Object(m.jsxs)("select",{"data-cy":"userSelect",value:d,onChange:function(e){u(+e.target.value),N(!0)},children:[Object(m.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),l.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]}),!S&&Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(m.jsx)(h,{todos:C})]})};i.a.render(Object(m.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.433eec69.chunk.js.map