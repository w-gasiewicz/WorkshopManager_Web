(this["webpackJsonphello-world"]=this["webpackJsonphello-world"]||[]).push([[0],{102:function(e,a,t){},104:function(e,a,t){},106:function(e,a,t){},107:function(e,a,t){},351:function(e,a,t){"use strict";t.r(a);var s=t(3),c=t(93),n=t.n(c),i=t(97),r=(t(102),t(7)),l=t(19),o=t.n(l),j=t(94),d=t(39),b=t(40),h=t(26),p=t(42),m=t(41),u=(t(104),t(57),t(58),t(2)),x=function(e){Object(p.a)(t,e);var a=Object(m.a)(t);function t(e){var s;return Object(d.a)(this,t),(s=a.call(this,e)).handleChangeUsername=function(e){s.setState({username:e.currentTarget.value})},s.handleChangePassword=function(e){s.setState({password:e.currentTarget.value})},s.handleLogin=function(){s.populateData()},s.state={username:"",password:"",showAllert:!1,loggedIn:!1},s.handleChangeUsername=s.handleChangeUsername.bind(Object(h.a)(s)),s.handleChangePassword=s.handleChangePassword.bind(Object(h.a)(s)),s.handleLogin=s.handleLogin.bind(Object(h.a)(s)),s}return Object(b.a)(t,[{key:"populateData",value:function(){var e=Object(j.a)(o.a.mark((function e(){var a,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.ratesapi.io/api/2021-04-01?base=PLN");case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,console.log(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(u.jsx)("div",{className:"login-container",children:Object(u.jsxs)("div",{className:"form-box",children:[Object(u.jsxs)("div",{className:"header-form",children:[Object(u.jsx)("h4",{className:"text-primary text-center",children:Object(u.jsx)("i",{className:"fa fa-user-circle",style:{fontSize:"110px"}})}),Object(u.jsx)("div",{className:"image"})]}),Object(u.jsxs)("div",{className:"body-form",children:[Object(u.jsxs)("form",{children:[Object(u.jsxs)("div",{className:"input-group mb-3",children:[Object(u.jsx)("div",{className:"input-group-prepend",children:Object(u.jsx)("span",{className:"input-group-text",children:Object(u.jsx)("i",{className:"fa fa-user"})})}),Object(u.jsx)("input",{type:"text",className:"form-control",placeholder:"Username",onChange:this.handleChangeUsername})]}),Object(u.jsxs)("div",{className:"input-group mb-3",children:[Object(u.jsx)("div",{className:"input-group-prepend",children:Object(u.jsx)("span",{className:"input-group-text",children:Object(u.jsx)("i",{className:"fa fa-lock"})})}),Object(u.jsx)("input",{type:"text",className:"form-control",placeholder:"Password",onChange:this.handleChangePassword})]}),Object(u.jsx)("button",{type:"button",className:"btn btn-secondary btn-block",onClick:this.handleLogin,children:"LOGIN"}),Object(u.jsxs)("div",{className:"message",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"checkbox"})," Remember ME"]}),Object(u.jsx)("div",{children:Object(u.jsx)("a",{href:"#",children:"Forgot your password"})})]})]}),Object(u.jsxs)("div",{className:"social",children:[Object(u.jsx)("a",{href:"https://github.com/w-gasiewicz",children:Object(u.jsx)("i",{className:"fab fa-github"})}),Object(u.jsx)("a",{href:"https://www.linkedin.com/in/wojciech-gasiewicz/",children:Object(u.jsx)("i",{className:"fab fa-linkedin"})}),Object(u.jsx)("a",{href:"#",children:Object(u.jsx)("i",{className:"fab fa-facebook"})}),Object(u.jsx)("a",{href:"#",children:Object(u.jsx)("i",{className:"fab fa-twitter-square"})}),Object(u.jsx)("a",{href:"#",children:Object(u.jsx)("i",{className:"fab fa-google"})})]})]})]})})}}]),t}(s.Component);x.displayName=x.name;t(106),t(107);var f=function(e){Object(p.a)(t,e);var a=Object(m.a)(t);function t(){return Object(d.a)(this,t),a.apply(this,arguments)}return Object(b.a)(t,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"contact-container",children:Object(u.jsxs)("div",{className:"form-box-contact",children:[Object(u.jsxs)("div",{className:"header-form",children:[Object(u.jsx)("h4",{className:"text-primary text-center",children:Object(u.jsx)("i",{className:"fa fa-envelope",style:{fontSize:"110px"}})}),Object(u.jsx)("div",{className:"image"})]}),Object(u.jsxs)("div",{className:"body-form",children:[Object(u.jsxs)("form",{children:[Object(u.jsxs)("div",{className:"input-group mb-3",children:[Object(u.jsx)("div",{className:"input-group-prepend",children:Object(u.jsx)("span",{className:"input-group-text",children:Object(u.jsx)("i",{className:"fa fa-user"})})}),Object(u.jsx)("input",{type:"text",className:"form-control",placeholder:"Subject"})]}),Object(u.jsxs)("div",{className:"input-group mb-3",children:[Object(u.jsx)("div",{className:"input-group-prepend",children:Object(u.jsx)("span",{className:"input-group-text",children:Object(u.jsx)("i",{className:"fa fa-at"})})}),Object(u.jsx)("input",{type:"text",className:"form-control",placeholder:"Your email"})]}),Object(u.jsxs)("div",{className:"input-group mb-3",children:[Object(u.jsx)("div",{className:"input-group-prepend",children:Object(u.jsx)("span",{className:"input-group-text",children:Object(u.jsx)("i",{className:"fa fa-comment-dots"})})}),Object(u.jsx)("textarea",{className:"form-control",rows:3,placeholder:"Message",required:!0})]}),Object(u.jsx)("button",{type:"button",className:"btn btn-secondary btn-block",children:"Send"})]}),Object(u.jsxs)("div",{className:"social",children:[Object(u.jsx)("a",{href:"#",children:Object(u.jsx)("i",{className:"fab fa-facebook"})}),Object(u.jsx)("a",{href:"#",children:Object(u.jsx)("i",{className:"fab fa-twitter-square"})}),Object(u.jsx)("a",{href:"#",children:Object(u.jsx)("i",{className:"fab fa-google"})})]})]})]})})}}]),t}(s.Component);f.displayName=f.name;var O=t(95),g=t.n(O),N={particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0};t.p;var v=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{style:{position:"absolute"},children:Object(u.jsx)(g.a,{params:N})}),Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)(r.a,{exact:!0,path:"/",component:x}),Object(u.jsx)(r.a,{exact:!0,path:"/contact",component:f})]})]})},y=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,352)).then((function(a){var t=a.getCLS,s=a.getFID,c=a.getFCP,n=a.getLCP,i=a.getTTFB;t(e),s(e),c(e),n(e),i(e)}))},w=document.getElementsByTagName("base")[0],k=document.getElementById("root");n.a.render(Object(u.jsx)(i.a,{basename:String(w),children:Object(u.jsx)(v,{})}),k),y()}},[[351,1,2]]]);
//# sourceMappingURL=main.cfa71812.chunk.js.map