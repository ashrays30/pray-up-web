(this["webpackJsonppray-up-web"]=this["webpackJsonppray-up-web"]||[]).push([[0],{69:function(e,t,c){},82:function(e,t,c){},89:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(36),s=c.n(r),j=c(33),i=(c(82),c(17)),b=(c(69),c(0)),l=c.n(b),d=c(4),o=c(12),u=c(92),O=c(93),h=c(74),x=c(94),p=c(99),m=c(95),f=c(24),y=c.p+"static/media/app_logo.e611d42b.jpg",v=c(16),g=c(73),C=(Object(g.a)({apiKey:"AIzaSyCbAu78CKZIFUqVhGurZxXfs0tYjv7M080",authDomain:"prayup-9fe0f.firebaseapp.com",projectId:"prayup-9fe0f",storageBucket:"prayup-9fe0f.appspot.com",messagingSenderId:"175364976092",appId:"1:175364976092:web:65a5faa819c0e1d06db319",measurementId:"G-7GP68PV1XK"}),c(2)),k=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(""),s=Object(o.a)(r,2),j=s[0],b=s[1],g=Object(i.f)(),k=Object(f.b)(),N=Object(v.k)();return Object(C.jsx)(u.a,{children:Object(C.jsx)("div",{children:Object(C.jsxs)(O.a,{children:[Object(C.jsx)(h.a,{md:{span:6,offset:3},children:Object(C.jsx)(x.a,{src:y,rounded:!0,style:{height:400,width:350,marginLeft:70}})}),Object(C.jsx)(h.a,{md:{span:6,offset:3},children:Object(C.jsxs)(p.a,{children:[Object(C.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(C.jsx)(p.a.Label,{children:"Email address"}),Object(C.jsx)(p.a.Control,{type:"email",placeholder:"Enter email",onChange:function(e){return n(e.target.value)},value:c})]}),Object(C.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(C.jsx)(p.a.Label,{children:"Password"}),Object(C.jsx)(p.a.Control,{type:"password",placeholder:"Password",onChange:function(e){return b(e.target.value)},value:j})]}),Object(C.jsx)(m.a,{variant:"primary",type:"button",onClick:function(){Object(f.e)(k,c,j).then(function(){var e=Object(d.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(v.m)(Object(v.b)(N,"userdata"),Object(v.r)("uid","==",t.user.uid)),e.next=3,Object(v.h)(c);case 3:e.sent.forEach((function(e){var t=e.data();sessionStorage.setItem("userData",JSON.stringify(t)),"admin"===t.type?g("/users"):"Chapter Leader"===t.type?g("/chatGroup"):console.log("not a valid user")}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){var t=e.code,c=e.message;console.log(t,c)}))},children:"Submit"})]})})]})})})},N=c(7),S=c(34),w=Object(f.b)(),A=Object(v.k)();function G(e){var t=e.message,c=e.currentUser,a=t.text,n=t.uid,r=(t.photoURL,t.user),s=n===c.uid?"sent":"received";return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)("div",{className:"message ".concat(s),children:[Object(C.jsx)("div",{className:"circle",style:{width:"3.5rem",height:"3.5rem"},children:Object(C.jsx)("span",{className:"initials",style:{fontSize:"2rem",top:"0.7rem"},children:r.name.match(/(\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase()})}),Object(C.jsx)("p",{children:a})]})})}var L=function(){var e=Object(i.e)(),t=Object(S.a)(w),c=Object(o.a)(t,1)[0],n=Object(a.useState)([]),r=Object(o.a)(n,2),s=r[0],j=r[1],b=Object(a.useState)(null),l=Object(o.a)(b,2),d=l[0],x=l[1],p=e.state.id,m=Object(v.b)(A,"rooms",p,"messages"),f=Object(v.d)(A,"rooms",p);Object(a.useEffect)((function(){var e=Object(v.l)(m,(function(e){var t=e.docChanges().filter((function(e){return"added"===e.type})).map((function(e){var t=e.doc.data();return Object(N.a)(Object(N.a)({},t),{},{createdAt:t.createdAt.toDate()})})).sort((function(e,t){return e.createdAt.getTime()-t.createdAt.getTime()}));y(t)}));return Object(v.e)(f).then((function(e){console.log(e.data()),x(e.data())})),function(){return e()}}),[]);var y=Object(a.useCallback)((function(e){j(e)}),[s]);return Object(C.jsxs)(u.a,{className:"chatSection",children:[Object(C.jsx)("h1",{children:"Participants"}),Object(C.jsx)("br",{}),Object(C.jsx)(O.a,{children:d&&d.participants.map((function(e,t){return console.log(e),Object(C.jsxs)(h.a,{md:3,id:t,children:[Object(C.jsx)("div",{className:"circle",style:{width:"3.5rem",height:"3.5rem"},children:Object(C.jsx)("span",{className:"initials",style:{fontSize:"2rem",top:"0.7rem"},children:e.displayName.match(/(\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase()})}),"".concat(e.displayName," (").concat(e.type,")")]})}))}),Object(C.jsx)("br",{}),Object(C.jsx)("hr",{}),Object(C.jsx)(O.a,{children:Object(C.jsx)(h.a,{children:s&&s.map((function(e){return Object(C.jsx)(G,{message:e,currentUser:c},e.id)}))})})]})},I=c(102),T=c(42),U=Object(f.b)(),B=Object(T.k)(),F=function(){var e=Object(S.a)(U),t=Object(o.a)(e,1)[0],c=Object(a.useState)([]),n=Object(o.a)(c,2),r=n[0],s=n[1],j=Object(i.f)(),b=Object(T.m)(Object(T.b)(B,"rooms"),Object(T.r)("participantsArray","array-contains",t.email));return Object(a.useEffect)((function(){var e=Object(T.l)(b,(function(e){var c=e.docs.map((function(e){return Object(N.a)(Object(N.a)({},e.data()),{},{id:e.id,userB:e.data().participants.find((function(e){return e.email!==t.email}))})}));s(c.filter((function(e){return e.lastMessage})))}));return function(){return e()}}),[]),Object(C.jsx)(u.a,{children:Object(C.jsxs)("div",{children:[Object(C.jsx)(O.a,{children:Object(C.jsx)(h.a,{md:"auto",style:{padding:10},children:Object(C.jsx)("h1",{children:" All Charts "})})}),r.map((function(e,t){return Object(C.jsx)("div",{style:{padding:10},children:Object(C.jsxs)(O.a,{children:[Object(C.jsx)(h.a,{xs:!0,lg:"2",children:Object(C.jsx)("div",{className:"circle",children:Object(C.jsx)("span",{className:"initials",children:e.userB.displayName.match(/(\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase()})})}),Object(C.jsx)(h.a,{xs:6,children:Object(C.jsx)(I.a,{onClick:function(){j("/chat",{state:{id:e.id}})},style:{width:500},children:Object(C.jsxs)(I.a.Body,{children:[e.groupName?Object(C.jsx)(I.a.Title,{children:"".concat(e.userB.displayName," (Group: ").concat(e.groupName,")")}):Object(C.jsx)(I.a.Title,{children:"".concat(e.userB.displayName)}),Object(C.jsx)(I.a.Subtitle,{className:"mb-2 text-muted",children:e.lastMessage.text})]})})})]})},t)}))]})})},M=c(96),E=c(49),D=Object(v.k)(),P=function(){var e=Object(v.b)(D,"userdata"),t=Object(E.b)(e),c=Object(o.a)(t,1)[0],a=Object(i.f)(),n=function(){var e=Object(d.a)(l.a.mark((function e(t,c){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=Object(v.d)(D,"userdata",t),e.next=4,Object(v.p)(D,function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get(a);case 2:e.sent.exists()||console.log("Document does not exist!"),t.update(a,{type:c});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:console.log("Transaction successfully committed!"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Transaction failed: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,c){return e.apply(this,arguments)}}();return Object(C.jsx)(u.a,{children:Object(C.jsxs)("div",{children:[Object(C.jsx)("br",{}),Object(C.jsxs)(O.a,{children:[Object(C.jsx)(h.a,{sm:8,children:Object(C.jsx)("h1",{children:"User Data"})}),Object(C.jsx)(h.a,{sm:2,children:Object(C.jsx)(m.a,{onClick:function(){a("/wallfeed")},variant:"outline-dark",children:"Add Wall Feed"})}),Object(C.jsx)(h.a,{sm:2,children:Object(C.jsx)(m.a,{onClick:function(){a("/chatList")},variant:"outline-dark",children:"Go To All Chats"})})]}),Object(C.jsx)("hr",{}),Object(C.jsx)(O.a,{children:Object(C.jsx)(h.a,{children:Object(C.jsxs)(M.a,{striped:!0,bordered:!0,hover:!0,style:{textAlign:"center"},children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"First Name"}),Object(C.jsx)("th",{children:"Phone Number"}),Object(C.jsx)("th",{children:"Type"}),Object(C.jsx)("th",{children:"Action"})]})}),Object(C.jsx)("tbody",{children:c&&c.map((function(e,t){return"admin"!==e.type&&Object(C.jsxs)("tr",{id:t,children:[Object(C.jsx)("td",{children:e.displayName}),Object(C.jsx)("td",{children:e.phone}),Object(C.jsx)("td",{children:e.type}),Object(C.jsxs)("td",{children:["Volunteer"===e.type?Object(C.jsx)(m.a,{onClick:function(){return n(e.uid,"User")},variant:"secondary",children:"Make User"}):Object(C.jsx)(m.a,{onClick:function(){return n(e.uid,"Volunteer")},variant:"success",children:"Make Volunteer"})," ","Chapter Leader"===e.type?Object(C.jsx)(m.a,{onClick:function(){return n(e.uid,"User")},variant:"secondary",children:"Make User"}):Object(C.jsx)(m.a,{onClick:function(){return n(e.uid,"Chapter Leader")},variant:"primary",disabled:"Chapter Leader"===e.type,children:"Make Chapter Leader"})]})]})}))})]})})})]})})},V=c(20),J=c(100),$=c(97),z=c(101),K=Object(f.b)(),W=Object(v.k)(),q=function(){var e=Object(z.a)(),t=Object(v.m)(Object(v.b)(W,"userdata")),c=Object(E.b)(t),n=Object(o.a)(c,1)[0],r=Object(S.a)(K),s=Object(o.a)(r,1)[0],j=Object(i.f)(),b=Object(a.useState)([]),x=Object(o.a)(b,2),f=x[0],y=x[1],g=Object(a.useState)(!1),k=Object(o.a)(g,2),N=k[0],w=k[1],A=Object(a.useState)(""),G=Object(o.a)(A,2),L=G[0],I=G[1];console.log(e);var T=function(){var t=Object(d.a)(l.a.mark((function t(){var c,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=JSON.parse(sessionStorage.getItem("userData")),a=Object(v.d)(W,"rooms",e),t.next=4,Object(v.q)(a,{groupName:L,type:"group",participants:[].concat(Object(V.a)(U()),Object(V.a)(B()),[{displayName:s.displayName,email:s.email.toLowerCase(),type:c.type}]),participantsArray:[].concat(Object(V.a)(U().map((function(e){return e.email}))),Object(V.a)(B().map((function(e){return e.email}))),[s.email])});case 4:j("/chatGroup");case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),U=function(){return f.map((function(e){return{displayName:e.displayName,email:e.email.toLowerCase(),type:e.type}}))},B=function(){return n.filter((function(e){return"admin"===e.type})).map((function(e){return{displayName:e.displayName,email:e.email.toLowerCase(),type:e.type}}))};return Object(C.jsxs)(u.a,{children:[Object(C.jsxs)("div",{children:[Object(C.jsx)("br",{}),Object(C.jsxs)(O.a,{children:[Object(C.jsx)(h.a,{sm:10,children:Object(C.jsx)("h1",{children:"List Of Volunteer"})}),Object(C.jsx)(h.a,{sm:2,children:Object(C.jsx)(m.a,{onClick:function(){w(!0),console.log(f)},variant:"outline-dark",children:"Create Group"})})]}),Object(C.jsx)("hr",{}),Object(C.jsx)(O.a,{children:Object(C.jsx)(h.a,{children:Object(C.jsx)(J.a,{children:n&&n.map((function(e,t){return"Volunteer"===e.type&&Object(C.jsx)(J.a.Item,{children:Object(C.jsx)(p.a.Check,{label:"".concat(e.displayName," (").concat(e.email,")"),onChange:function(){return function(e){var t=Object(V.a)(f),c=t.indexOf(e);-1===c?t.push(e):t.splice(c,1),y(t)}(e)},checked:f.filter((function(t){return t.email===e.email})).length})},t)}))})})})]}),Object(C.jsxs)($.a,{show:N,onHide:function(){return w(!1)},children:[Object(C.jsx)($.a.Header,{closeButton:!0,children:Object(C.jsx)($.a.Title,{children:"Group Name"})}),Object(C.jsx)($.a.Body,{children:Object(C.jsx)(p.a.Control,{type:"Text",placeholder:"Enter Group Name",value:L,onChange:function(e){return I(e.target.value)}})}),Object(C.jsx)($.a.Footer,{children:Object(C.jsx)(m.a,{variant:"primary",onClick:function(){return T()},disabled:!(L.length>1),children:"Create"})})]})]})},H=Object(v.k)(),X=Object(f.b)(),Z=function(){var e=Object(S.a)(X),t=Object(o.a)(e,1)[0],c=Object(v.m)(Object(v.b)(H,"rooms"),Object(v.r)("type","==","group"),Object(v.r)("participantsArray","array-contains",t.email)),n=Object(a.useState)([]),r=Object(o.a)(n,2),s=r[0],j=r[1];Object(a.useEffect)((function(){var e=Object(v.l)(c,(function(e){var c=e.docs.map((function(e){return Object(N.a)(Object(N.a)({},e.data()),{},{id:e.id,userB:e.data().participants.find((function(e){return e.email!==t.email}))})}));j(c)}));return function(){return e()}}),[]);var b=Object(i.f)();return console.log(s),Object(C.jsx)(u.a,{children:Object(C.jsxs)("div",{children:[Object(C.jsx)("br",{}),Object(C.jsxs)(O.a,{children:[Object(C.jsx)(h.a,{sm:10,children:Object(C.jsx)("h1",{children:"User Groups"})}),Object(C.jsx)(h.a,{sm:2,children:Object(C.jsx)(m.a,{onClick:function(){b("/userGroup")},variant:"outline-dark",children:"Create Group"})})]}),Object(C.jsx)("hr",{}),Object(C.jsx)(O.a,{children:Object(C.jsx)(h.a,{children:s&&s.map((function(e,t){return Object(C.jsx)("div",{style:{padding:10},children:Object(C.jsxs)(O.a,{children:[Object(C.jsx)(h.a,{xs:!0,lg:"2",children:Object(C.jsx)("div",{className:"circle",children:Object(C.jsx)("span",{className:"initials",children:e.groupName.match(/(\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase()})})}),Object(C.jsx)(h.a,{xs:6,children:Object(C.jsx)(I.a,{onClick:function(){b("/chat",{state:{id:e.id}})},style:{width:500},children:Object(C.jsxs)(I.a.Body,{children:[Object(C.jsx)(I.a.Title,{children:e.groupName}),Object(C.jsx)(I.a.Subtitle,{className:"mb-2 text-muted",children:e.lastMessage?e.lastMessage.text:""})]})})})]})},t)}))})})]})})},R=c(103),Y=c(75),_=c(98),Q=Object(v.k)(),ee=Object(f.b)(),te=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(!1),s=Object(o.a)(r,2),j=s[0],b=s[1],x=Object(v.b)(Q,"posts"),p=Object(E.a)(x),f=Object(o.a)(p,1)[0],y=Object(S.a)(ee),g=Object(o.a)(y,1)[0],k=(Object(i.f)(),function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.c)(Object(v.d)(Q,"posts",t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),N=function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)(Object(v.b)(Q,"posts"),{userId:g.uid,name:g.displayName,post:c,postImg:"",postTime:new Date,likes:null,comments:null});case 2:b(!0),setTimeout((function(){b(!1)}),5e3),n("");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(C.jsx)(u.a,{children:Object(C.jsxs)("div",{children:[Object(C.jsx)("br",{}),Object(C.jsx)(O.a,{children:Object(C.jsx)(h.a,{sm:8,children:Object(C.jsx)("h1",{children:" Add Wall Feeds"})})}),Object(C.jsx)("hr",{}),Object(C.jsxs)(O.a,{children:[Object(C.jsxs)(h.a,{children:[Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),Object(C.jsx)(O.a,{children:Object(C.jsxs)(R.a,{children:[Object(C.jsx)(R.a.Text,{children:"Add Feed"}),Object(C.jsx)(Y.a,{as:"textarea","aria-label":"With textarea",value:c,onChange:function(e){return n(e.target.value)}})]})}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),Object(C.jsx)(m.a,{variant:"primary",type:"button",onClick:function(){N()},children:"Add Feed"}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),j&&Object(C.jsx)(_.a,{variant:"success",children:"Feed added successfully"})]}),Object(C.jsx)(O.a,{children:Object(C.jsx)(h.a,{children:Object(C.jsxs)(M.a,{striped:!0,bordered:!0,hover:!0,style:{textAlign:"center"},children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"Name"}),Object(C.jsx)("th",{children:"Feed"}),Object(C.jsx)("th",{children:"Action"})]})}),Object(C.jsx)("tbody",{children:f&&f.docs.map((function(e,t){var c=e.data();return Object(C.jsxs)("tr",{id:t,children:[Object(C.jsx)("td",{children:c.name}),Object(C.jsx)("td",{children:c.post}),Object(C.jsx)("td",{children:Object(C.jsx)(m.a,{onClick:function(){k(e.id)},variant:"secondary",children:"Delete"})})]})}))})]})})})]})]})})};c(88);var ce=function(){return Object(C.jsxs)(i.c,{children:[Object(C.jsx)(i.a,{exact:!0,path:"/",element:Object(C.jsx)(k,{})}),Object(C.jsx)(i.a,{path:"/chatList",element:Object(C.jsx)(F,{})}),Object(C.jsx)(i.a,{path:"/chat",element:Object(C.jsx)(L,{})}),Object(C.jsx)(i.a,{path:"/users",element:Object(C.jsx)(P,{})}),Object(C.jsx)(i.a,{path:"/wallfeed",element:Object(C.jsx)(te,{})}),Object(C.jsx)(i.a,{path:"/userGroup",element:Object(C.jsx)(q,{})}),Object(C.jsx)(i.a,{path:"/chatGroup",element:Object(C.jsx)(Z,{})})]})};s.a.render(Object(C.jsx)(n.a.StrictMode,{children:Object(C.jsx)(j.a,{children:Object(C.jsx)(ce,{})})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.e102981c.chunk.js.map