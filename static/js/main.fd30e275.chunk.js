(this["webpackJsonpredux-tutorial"]=this["webpackJsonpredux-tutorial"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var o,c,r=n(1),u=(n(0),n(9)),i=n.n(u),a=(n(22),n(23),n(7)),b=function(e){var t=e.number,n=e.onIncrease,o=e.onDecrease;return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:t}),Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{onClick:n,children:"+1"}),Object(r.jsx)("button",{onClick:o,children:"-1"})]})]})},j=n(3),s=n(32),d=n(31),O="counter/INCREASE",l="counter/DECREASE",f=Object(s.a)(O),h=Object(s.a)(l),x=Object(d.a)((o={},Object(j.a)(o,O,(function(e,t){return{number:e.number+1}})),Object(j.a)(o,l,(function(e,t){return{number:e.number-1}})),o),{number:0}),p=Object(a.b)((function(e){return{number:e.counter.number}}),(function(e){return{increase:function(){e(f())},decrease:function(){e(h())}}}))((function(e){var t=e.number,n=e.increase,o=e.decrease;return Object(r.jsx)(b,{number:t,onIncrease:n,onDecrease:o})})),v=n(2),g="todos/CHANGE_INPUT",m="todos/INSERT",C="todos/TOGGLE",I="todos/REMOVE",E=Object(s.a)(g,(function(e){return e})),T=3,y=Object(s.a)(m,(function(e){return{id:T++,text:e,done:!1}})),R=Object(s.a)(C,(function(e){return e})),k=Object(s.a)(I,(function(e){return e})),D=Object(d.a)((c={},Object(j.a)(c,g,(function(e,t){var n=t.payload;return Object(v.a)(Object(v.a)({},e),{},{input:n})})),Object(j.a)(c,m,(function(e,t){var n=t.payload;return Object(v.a)(Object(v.a)({},e),{},{todos:e.todos.concat(n)})})),Object(j.a)(c,C,(function(e,t){var n=t.payload;return Object(v.a)(Object(v.a)({},e),{},{todos:e.todos.map((function(e){return e.id===n?Object(v.a)(Object(v.a)({},e),{},{done:!e.done}):e}))})})),Object(j.a)(c,I,(function(e,t){var n=t.payload;return Object(v.a)(Object(v.a)({},e),{},{todos:e.todos.filter((function(e){return e.id!==n}))})})),c),{input:"",todos:[{id:1,text:"\ub9ac\ub355\uc2a4 \uae30\ucd08 \ubc30\uc6b0\uae30",done:!0},{id:2,text:"\ub9ac\uc561\ud2b8\uc640 \ub9ac\ub355\uc2a4 \uc0ac\uc6a9\ud558\uae30",done:!1}]}),S=function(e){var t=e.todo,n=e.onToggle,o=e.onRemove;return Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{type:"checkbox",onClick:function(){return n(t.id)},checked:t.done,readOnly:!0}),Object(r.jsx)("span",{style:{textDecoration:t.done?"line-through":"none"},children:t.text}),Object(r.jsx)("button",{onClick:function(){return o(t.id)},children:"\uc0ad\uc81c"})]})},F=function(e){var t=e.input,n=e.todos,o=e.onChangeInput,c=e.onInsert,u=e.onToggle,i=e.onRemove;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(t),o("")},children:[Object(r.jsx)("input",{value:t,onChange:function(e){return o(e.target.value)}}),Object(r.jsx)("button",{type:"submit",children:"\ub4f1\ub85d"})]}),Object(r.jsx)("div",{children:n.map((function(e){return Object(r.jsx)(S,{todo:e,onToggle:u,onRemove:i},e.id)}))})]})},N=Object(a.b)((function(e){var t=e.todos;return{input:t.input,todos:t.todos}}),{changeInput:E,insert:y,toggle:R,remove:k})((function(e){var t=e.input,n=e.todos,o=e.changeInput,c=e.insert,u=e.toggle,i=e.remove;return Object(r.jsx)(F,{input:t,todos:n,onChangeInput:o,onInsert:c,onToggle:u,onRemove:i})}));var A=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(p,{}),Object(r.jsx)("hr",{}),Object(r.jsx)(N,{})]})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,r=t.getLCP,u=t.getTTFB;n(e),o(e),c(e),r(e),u(e)}))},L=n(4),P=Object(L.combineReducers)({counter:x,todos:D}),w=n(15),B=Object(L.createStore)(P,Object(w.composeWithDevTools)());i.a.render(Object(r.jsx)(a.a,{store:B,children:Object(r.jsx)(A,{})}),document.getElementById("root")),G()}},[[30,1,2]]]);
//# sourceMappingURL=main.fd30e275.chunk.js.map