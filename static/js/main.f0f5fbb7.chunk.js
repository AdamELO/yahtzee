(this.webpackJsonpyahtzee=this.webpackJsonpyahtzee||[]).push([[0],{22:function(e,t,s){"use strict";s.r(t);var c=s(0),r=s(1),a=s(15),n=s.n(a),l=s(4),o=s(6),i=s(2);var u=function(){return Object(c.jsx)("div",{children:Object(c.jsxs)(i.a,{as:"ul",children:[Object(c.jsx)(i.a.Item,{as:"li",className:"colorhead text-center",children:"Section sup\xe9rieur"}),Object(c.jsx)(i.a.Item,{as:"li",className:"p-1",children:"Total des 1"}),Object(c.jsx)(i.a.Item,{as:"li",className:"p-1",children:"Total des 2"}),Object(c.jsx)(i.a.Item,{as:"li",className:"p-1",children:"Total des 3"}),Object(c.jsx)(i.a.Item,{as:"li",className:"p-1",children:"Total des 4"}),Object(c.jsx)(i.a.Item,{as:"li",className:"p-1",children:"Total des 5"}),Object(c.jsx)(i.a.Item,{as:"li",className:"p-1",children:"Total des 6"}),Object(c.jsx)(i.a.Item,{as:"li",className:"p-1",children:"Bonus 35 (63 pts+)"}),Object(c.jsx)(i.a.Item,{as:"li",className:"p-1",children:"Total section sup\xe9rieur"})]})})};var d=function(){return Object(c.jsx)("div",{children:Object(c.jsxs)(i.a,{as:"ul",children:[Object(c.jsx)(i.a.Item,{as:"li",className:"colorhead text-center",children:"Section Inf\xe9rieur"}),Object(c.jsx)(i.a.Item,{as:"li",className:"p-1",children:"Brelan"}),Object(c.jsx)(i.a.Item,{as:"li",className:"p-1",children:"Carr\xe9"}),Object(c.jsx)(i.a.Item,{as:"li",className:"p-1",children:"Full"}),Object(c.jsx)(i.a.Item,{as:"li",className:"p-1",children:"Petite Suite"}),Object(c.jsx)(i.a.Item,{as:"li",className:"p-1",children:"Grande Suite"}),Object(c.jsx)(i.a.Item,{as:"li",className:"p-1",children:"Chance"}),Object(c.jsx)(i.a.Item,{as:"li",className:"p-1",children:"Yams"}),Object(c.jsx)(i.a.Item,{as:"li",className:"p-1",children:"Total"})]})})};var j=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(u,{}),Object(c.jsx)(d,{})]})},m=s(13);var f=function(e){var t=e.player,s=e.scoreSup,a=e.scoreInf,n=e.reset,u=Object(r.useState)(s),d=Object(o.a)(u,2),j=d[0],f=d[1],b=Object(r.useState)(a),h=Object(o.a)(b,2),O=h[0],N=h[1];function x(){for(var e=[],t=0;t<a.length-1;t++)e.push(a[t]);a.filter((function(e){return"total"===e.scoreName}))[0].resultConf=s[s.length-1].resultConf+e.reduce((function(e,t){return e+t.resultConf}),0)}return Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)(i.a,{as:"ul",children:[Object(c.jsx)(i.a.Item,{as:"li",variant:"secondary",className:"text-center",children:t.name}),s.map((function(e,r){return Object(c.jsxs)(i.a.Item,{as:"li",className:"p-1 d-flex justify-content-around align-items-center bold",children:[Object(c.jsxs)("span",{children:[e.resultConf," pts"]}),r<=a.length-2?Object(c.jsx)(m.a,{hidden:e.confirmed||3===t.attempt,onClick:function(){return function(e){var t=Object(l.a)(j);t[e].confirmed=!0,t[e].resultConf=s[e].result,function(e){var t=e[7].resultConf;e.filter((function(e){return"total"===e.scoreName}))[0].resultConf=e.reduce((function(e,t){return e+t.resultConf}),0)-t,e.filter((function(e){return"total"===e.scoreName}))[0].resultConf>=63?e.filter((function(e){return"bonus"===e.scoreName}))[0].resultConf=35:e.filter((function(e){return"bonus"===e.scoreName}))[0].resultConf=0,t=e[7].resultConf,e.filter((function(e){return"total"===e.scoreName}))[0].resultConf=e.reduce((function(e,t){return e+t.resultConf}),0)-t}(t),x(),f(t),n()}(r)},className:"btn",variant:"primary",children:e.result}):""]},r)})),Object(c.jsxs)(i.a.Item,{as:"li",variant:"secondary",className:"text-center",children:["Lancer restants: ",t.attempt]}),a.map((function(e,s){return Object(c.jsxs)(i.a.Item,{as:"li",className:"p-1 d-flex justify-content-around align-items-center bold",children:[Object(c.jsxs)("span",{children:[e.resultConf," pts"]}),s<=a.length-1?Object(c.jsx)(m.a,{hidden:e.confirmed||3===t.attempt,onClick:function(){return function(e){var t=Object(l.a)(O);t[e].confirmed=!0,t[e].resultConf=a[e].result,x(),N(t),n()}(s)},className:"btn",variant:"primary",children:e.result}):""]},s)}))]})})};var b=function(e){var t=e.dice,s=e.hide;return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"box ".concat(t.rollClass),"data-roll":t.result,children:[Object(c.jsx)("div",{className:"dice first-face",children:Object(c.jsx)("span",{className:"dot",children:" "})}),Object(c.jsxs)("div",{className:"dice second-face",children:[Object(c.jsx)("span",{className:"dot"}),Object(c.jsx)("span",{className:"dot"})]}),Object(c.jsxs)("div",{className:"dice third-face",children:[Object(c.jsx)("span",{className:"dot"}),Object(c.jsx)("span",{className:"dot"}),Object(c.jsx)("span",{className:"dot"})]}),Object(c.jsxs)("div",{className:"dice fourth-face",children:[Object(c.jsxs)("div",{className:"column",children:[Object(c.jsx)("span",{className:"dot"}),Object(c.jsx)("span",{className:"dot"})]}),Object(c.jsxs)("div",{className:"column",children:[Object(c.jsx)("span",{className:"dot"}),Object(c.jsx)("span",{className:"dot"})]})]}),Object(c.jsxs)("div",{className:"dice fifth-face",children:[Object(c.jsxs)("div",{className:"column",children:[Object(c.jsx)("span",{className:"dot"}),Object(c.jsx)("span",{className:"dot"})]}),Object(c.jsx)("div",{className:"column",children:Object(c.jsx)("span",{className:"dot"})}),Object(c.jsxs)("div",{className:"column",children:[Object(c.jsx)("span",{className:"dot"}),Object(c.jsx)("span",{className:"dot"})]})]}),Object(c.jsxs)("div",{className:"dice sixth-face",children:[Object(c.jsxs)("div",{className:"column",children:[Object(c.jsx)("span",{className:"dot"}),Object(c.jsx)("span",{className:"dot"}),Object(c.jsx)("span",{className:"dot"})]}),Object(c.jsxs)("div",{className:"column",children:[Object(c.jsx)("span",{className:"dot"}),Object(c.jsx)("span",{className:"dot"}),Object(c.jsx)("span",{className:"dot"})]})]})]}),Object(c.jsx)("div",{className:"text-center",hidden:s,children:Object(c.jsx)("input",{type:"checkbox",className:"check"})})]})},h=[{diceNumber:1,result:"1",kept:!1,rollClass:"even-roll"},{diceNumber:2,result:"2",kept:!1,rollClass:"even-roll"},{diceNumber:3,result:"3",kept:!1,rollClass:"even-roll"},{diceNumber:4,result:"4",kept:!1,rollClass:"even-roll"},{diceNumber:5,result:"5",kept:!1,rollClass:"even-roll"}],O={name:"",attempt:3,score:0},N=[{scoreName:"one",confirmed:!1,result:0,resultConf:0},{scoreName:"two",confirmed:!1,result:0,resultConf:0},{scoreName:"three",confirmed:!1,result:0,resultConf:0},{scoreName:"four",confirmed:!1,result:0,resultConf:0},{scoreName:"five",confirmed:!1,result:0,resultConf:0},{scoreName:"six",confirmed:!1,result:0,resultConf:0},{scoreName:"bonus",resultConf:0},{scoreName:"total",resultConf:0}],x=[{scoreName:"threeOfAKind",confirmed:!1,result:0,resultConf:0},{scoreName:"fourOfAKind",confirmed:!1,result:0,resultConf:0},{scoreName:"full",confirmed:!1,result:0,resultConf:0},{scoreName:"straightSm",confirmed:!1,result:0,resultConf:0},{scoreName:"straightL",confirmed:!1,result:0,resultConf:0},{scoreName:"luck",confirmed:!1,result:0,resultConf:0},{scoreName:"yams",confirmed:!1,result:0,resultConf:0},{scoreName:"total",resultConf:0}];function p(e,t){!function(e,t){for(var s=[],c=Object(l.a)(t).sort(),r=0;r<c.length;r++)c[r+2]===c[r]&&s.push(c[r]);if(0!==s.length){var a=3*s[0];e.filter((function(e){return"threeOfAKind"===e.scoreName}))[0].result=a}else e.filter((function(e){return"threeOfAKind"===e.scoreName}))[0].result=0}(e,t),function(e,t){for(var s=[],c=Object(l.a)(t).sort(),r=0;r<c.length;r++)c[r+3]===c[r]&&s.push(c[r]);if(0!==s.length){var a=4*s[0];e.filter((function(e){return"fourOfAKind"===e.scoreName}))[0].result=a}else e.filter((function(e){return"fourOfAKind"===e.scoreName}))[0].result=0}(e,t),function(e,t){for(var s=[],c=Object(l.a)(t).sort(),r=0;r<c.length;r++)c[r+2]===c[r]&&s.push(c[r]);for(var a=Object(l.a)(t).sort(),n=0;n<a.length;n++)a[n+1]===a[n]&&s.push(a[n]);4===s.length?e.filter((function(e){return"full"===e.scoreName}))[0].result=25:e.filter((function(e){return"full"===e.scoreName}))[0].result=0}(e,t),function(e,t){for(var s=Object(l.a)(new Set(t)).sort(),c=[],r=0;r<s.length-1;r++)s[r]===s[r+1]-1&&c.push(!0);c.length>=3?e.filter((function(e){return"straightSm"===e.scoreName}))[0].result=30:e.filter((function(e){return"straightSm"===e.scoreName}))[0].result=0}(e,t),function(e,t){var s=Object(l.a)(new Set(t)).sort();4===s.filter((function(e){return e>=2&&e<=5})).length&&5===s.length?e.filter((function(e){return"straightL"===e.scoreName}))[0].result=40:e.filter((function(e){return"straightL"===e.scoreName}))[0].result=0}(e,t),function(e,t){var s=t.reduce((function(e,t){return e+t}),0);e.filter((function(e){return"luck"===e.scoreName}))[0].result=s}(e,t),function(e,t){for(var s=[],c=Object(l.a)(t).sort(),r=0;r<c.length;r++)c[r+4]===c[r]&&s.push(c[r]);0!==s.length?e.filter((function(e){return"yams"===e.scoreName}))[0].result=50:e.filter((function(e){return"yams"===e.scoreName}))[0].result=0}(e,t)}var v=function(e){var t=e.onChangeName,s=e.player_name;return Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("h1",{className:"text-center",children:"Introduisez votre nom de joueur"}),Object(c.jsxs)("div",{className:"form__group field mx-auto d-flex mt-2",children:[Object(c.jsx)("input",{onChange:t,type:"input",className:"form__field",placeholder:"Nom",required:!0}),Object(c.jsx)("label",{forhtml:"name",className:"form__label",children:"Nom:"}),Object(c.jsx)("button",{onClick:s,className:"btn colorhead mt-3",children:"ok"})]})]})};var C=function(e){var t=e.textModal,s=e.modalEndTurn;return Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("h2",{className:"text-center",children:t}),Object(c.jsx)("div",{className:"position-relative text-center mt-5",children:Object(c.jsx)("button",{onClick:s,className:"btn colorhead mt-3",children:"ok"})})]})};var g=function(){var e=Object(r.useState)(O),t=Object(o.a)(e,2),s=t[0],a=t[1],n=Object(r.useState)(""),i=Object(o.a)(n,2),u=i[0],d=i[1],m=Object(r.useState)(!0),g=Object(o.a)(m,2),I=g[0],k=g[1],S=Object(r.useState)("Manche termin\xe9e, vous pouvez relancer"),y=Object(o.a)(S,2),T=y[0],w=y[1],z=Object(r.useState)(h),A=Object(o.a)(z,2),_=A[0],E=A[1],K=Object(r.useState)(N),M=Object(o.a)(K,2),L=M[0],q=M[1],B=Object(r.useState)(x),J=Object(o.a)(B,2),P=J[0],F=J[1],G=Object(r.useState)(!0),V=Object(o.a)(G,2),Y=V[0],D=V[1];function H(){if(0===s.attempt)return w("Il ne vous reste plus de lancer, confirmer d'abord les points pour passer \xe0 la manche suivante"),k(!0);if(s.attempt<4){!1,D(false)}var e=s;e.attempt--;var t=document.querySelectorAll(".check"),c=Object(l.a)(_);c.forEach((function(e,s){e.kept=!!t[s].checked,!1===e.kept&&(e.result=(Math.floor(6*Math.random())+1).toString(),e.rollClass="even-roll"===e.rollClass?"odd-roll":"even-roll")})),E(c),a(e),function(){for(var e=Object(l.a)(L),t=function(t){var s=_.filter((function(e){return e.result==="".concat(t+1)})).reduce((function(e,t){return e+parseInt(t.result)}),0);e[t].result=s},s=0;s<6;s++)t(s);q(e)}(),function(){var e=Object(l.a)(P),t=[];_.forEach((function(e){t.push(parseInt(e.result))})),p(e,t),F(e)}()}return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:I?"fadein":"fadeout",children:""===s.name?Object(c.jsx)(v,{visible:I,player_name:function(){return function(){var e=s;""!==u?(k(!1),e.name=u,a(e)):alert("veuillez introduire votre nom SVP")}()},onChangeName:function(e){return function(e){d(e.target.value)}(e)}}):Object(c.jsx)(C,{textModal:T,modalEndTurn:function(){T==="vous avez termin\xe9 avec un score de ".concat(s.score)?document.location.reload():k(!1)}})}),Object(c.jsx)("div",{className:"container-fluid mt-5",children:Object(c.jsxs)("div",{className:"row g-0",children:[Object(c.jsx)("div",{className:"col-2",children:Object(c.jsx)(j,{})}),Object(c.jsx)("div",{className:"col-2",children:Object(c.jsx)(f,{player:s,scoreSup:L,scoreInf:P,reset:function(){return function(){var e=s;s.score=P[P.length-1].resultConf,a(e);for(var t=[],c=0;c<L.length-2;c++)!0===L[c].confirmed&&t.push(!0);for(var r=0;r<P.length-1;r++)!0===P[r].confirmed&&t.push(!0);13===t.length?(w("vous avez termin\xe9 avec un score de ".concat(s.score)),k(!0)):(w("Manche termin\xe9e, vous pouvez relancer"),k(!0));var n=s;n.attempt=3,a(n);var l=document.querySelectorAll(".check");_.forEach((function(e,t){l[t].checked=!1,e.kept=!1})),3===s.attempt&&D(!0)}()}})}),Object(c.jsx)("div",{className:"col-8 container",children:Object(c.jsxs)("div",{className:"bg-green allCenter flex-column",children:[Object(c.jsx)("div",{className:"allCenter",children:Object(c.jsx)("div",{className:"row",children:_.map((function(e,t){return Object(c.jsx)("div",{className:"col",children:Object(c.jsx)(b,{dice:e,attempt:s.attempt,hide:Y})},t)}))})}),Object(c.jsx)("div",{className:"row mt-3",children:Object(c.jsx)("div",{className:"col",children:Object(c.jsx)("button",{onClick:function(){return H()},className:"btn btn-danger",children:"Lancer"})})})]})})]})})]})};s(21);n.a.render(Object(c.jsx)(g,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.f0f5fbb7.chunk.js.map