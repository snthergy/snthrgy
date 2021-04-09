(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[0],{103:function(e,t,n){},117:function(e,t,n){"use strict";n.r(t);var a,r,l,c,u,i,o,m,s,d,b=n(0),p=n.n(b),j=n(30),O=n.n(j),f=n(61),E=n(134),h=n(70),v=n(25),x=n(11),g=n(15),y=n(53),w="https://snthrgy.hasura.app/v1/graphql",C=function(e){return"https:"===window.location.protocol?"".concat(e,"s"):e},S=("".concat(C("http"),"://").concat(w,"/v1/graphql"),"".concat(C("ws"),"://").concat(w,"/v1/graphql"),{domain:"dev-6fwzbu47.auth0.com",clientId:"1F7oXHpaJPf74CgaUql8si1zA09VRMFr"}),k=function(e){var t=e.children,n=Object(g.d)();return p.a.createElement(y.a,{domain:S.domain,clientId:S.clientId,redirectUri:window.location.origin,onRedirectCallback:function(e){n.push(e.returnTo||window.location.pathname)},useRefreshTokens:!0,cacheLocation:"localstorage"},t)},V=(n(103),n(12)),q=n(13),A="#5F6897",F="#DEDEDE",D="white",I=q.a.div(a||(a=Object(V.a)(["\n  display: flex;\n  height: 100vh;\n  width: 100%;\n"]))),L=q.a.div(r||(r=Object(V.a)(["\n  border-right: 2px solid ",";\n  min-width: 350px;\n"])),F),P=q.a.div(l||(l=Object(V.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  padding: 24px;\n"]))),R=n(2),M=n(4),W=n(83),T=q.a.div(c||(c=Object(V.a)(["\n  display: grid;\n  grid-template-columns: max-content 1fr;\n  grid-column-gap: 12px;\n  border-bottom: 2px solid ",";\n  padding: 12px 16px;\n  align-items: center;\n"])),F),z=n(135),B=Object(q.a)(z.a)(u||(u=Object(V.a)(["\n  background-color: white;\n  border: 3px solid ",";\n  border-radius: 12px;\n"])),A),N=function(e){var t=e.onClick,n=e.children;return p.a.createElement(B,{onClick:t},n)},_=n(1),J=n.n(_),U=n(6),K=n(86),Z=n(64),H=function(){var e=Object(U.a)(J.a.mark((function e(t){var n,a;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Z.request)("https://snthrgy.hasura.app/v1/graphql",Object(Z.gql)(i||(i=Object(V.a)(["\n      query fetchUser(auth0_id: ",") {\n        users(where: {auth0_id: {_eq: ","}) {\n          name\n        }\n      }\n    "])),t,t));case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=Object(x.atom)(0),X=Object(x.atom)(""),G=Object(x.atom)((function(e){return{fullName:e(X),id:e(Q)}}),(function(e,t,n){t(X,n.fullName)}));Object(K.atomWithQuery)((function(e){return{queryKey:["user",e(Q)],queryFn:function(){var e=Object(U.a)(J.a.mark((function e(t){var n,a;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(M.a)(t.queryKey,2),a=n[1],e.abrupt("return",H(a));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}));function Y(e){Object(W.a)(e);var t=Object(y.b)(),n=t.loginWithPopup,a=t.logout,r=t.isAuthenticated,l=t.user,c=Object(x.useAtom)(G),u=Object(M.a)(c,2),i=u[0],o=u[1],m=r?"Log out":"Log in",s=r?a:n;return Object(b.useEffect)((function(){l&&o(Object(R.a)(Object(R.a)({},i),{},{fullName:l.given_name}))}),[l]),p.a.createElement(T,null,p.a.createElement(N,{onClick:s},m),Boolean(i.fullName)&&i.fullName)}var $,ee,te=q.a.div(o||(o=Object(V.a)(["\n  display: flex;\n  justify-content: space-around;\n  padding: 5px 24px;\n"]))),ne=q.a.div(m||(m=Object(V.a)(["\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-auto-flow: column;\n  grid-column-gap: 32px;\n"]))),ae=q.a.h4(s||(s=Object(V.a)(["\n  text-align: center;\n"]))),re=q.a.div(d||(d=Object(V.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),le=Object(x.atom)(1),ce=Object(x.atom)(1),ue=n(57);function ie(){return(ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function oe(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function me(e,t){var n=e.title,a=e.titleId,r=oe(e,["title","titleId"]);return b.createElement("svg",ie({viewBox:"0 0 180 180",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},r),n?b.createElement("title",{id:a},n):null,$||($=b.createElement("circle",{cx:90,cy:90,r:84,fill:"white",stroke:"#5F6897",strokeWidth:10})),ee||(ee=b.createElement("path",{d:"M90 85.7666L90 29.7666",stroke:"#5F6897",strokeWidth:10,strokeLinecap:"round",strokeLinejoin:"round"})))}var se,de=b.forwardRef(me),be=(n.p,q.a.div(se||(se=Object(V.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n\n  span {\n    font-size: 24px;\n  }\n"])))),pe=function(e){var t=Object(ue.c)(e.value),n=Object(M.a)(t,2),a=n[0],r=n[1],l=Object(ue.a)(r,e.onAngleChange);return p.a.createElement(be,null,p.a.createElement(ue.b,{diameter:e.diameter,value:e.value,min:e.min,max:e.max,step:e.step,spaceMaxFromZero:e.spaceMaxFromZero,ariaLabelledBy:e.ariaLabelledBy,ariaValueText:e.ariaValueText,knobStyle:Object(R.a)({cursor:"pointer",margin:"8px"},e.knobStyle),onAngleChange:l,onInteractionChange:e.onInteractionChange,onValueChange:e.onValueChange},p.a.createElement(de,{transform:"rotate(".concat(a,")"),style:{transform:"rotate(".concat(a,"deg)")}})),e.children)};function je(){var e=Object(x.useAtom)(le),t=Object(M.a)(e,2),n=t[0],a=t[1],r=Object(b.useState)(0),l=Object(M.a)(r,2),c=l[0],u=l[1],i=Object(b.useState)(0),o=Object(M.a)(i,2),m=o[0],s=o[1];return p.a.createElement(re,null,p.a.createElement(ae,null,"Osc 1"),p.a.createElement(ne,null,p.a.createElement(pe,{value:c,diameter:50,min:0,max:120,step:1,onValueChange:u},"Wave"),p.a.createElement(pe,{value:n,diameter:180,min:0,max:2e3,step:1,onValueChange:a},p.a.createElement("div",null,"Frequency"),p.a.createElement("div",null,n)),p.a.createElement(pe,{value:m,diameter:50,min:0,max:120,step:1,onValueChange:s},"Pan")))}function Oe(){var e=Object(x.useAtom)(ce),t=Object(M.a)(e,2),n=t[0],a=t[1],r=Object(b.useState)(0),l=Object(M.a)(r,2),c=l[0],u=l[1],i=Object(b.useState)(0),o=Object(M.a)(i,2),m=o[0],s=o[1];return p.a.createElement(re,null,p.a.createElement(ae,null,"Osc 2"),p.a.createElement(ne,null,p.a.createElement(pe,{value:c,diameter:50,min:0,max:120,step:1,onValueChange:u},"Wave"),p.a.createElement(pe,{value:n,diameter:180,min:0,max:2e3,step:1,onValueChange:a},p.a.createElement("div",null,"Frequency"),p.a.createElement("div",null,n)),p.a.createElement(pe,{value:m,diameter:50,min:0,max:120,step:1,onValueChange:s},"Pan")))}function fe(){return p.a.createElement(te,null,p.a.createElement(je,null),p.a.createElement(Oe,null))}function Ee(){var e=Object(b.useState)(0),t=Object(M.a)(e,2),n=t[0],a=t[1],r=Object(b.useState)(0),l=Object(M.a)(r,2),c=l[0],u=l[1],i=Object(b.useState)(0),o=Object(M.a)(i,2),m=o[0],s=o[1],d=Object(b.useState)(0),j=Object(M.a)(d,2),O=j[0],f=j[1],E=Object(b.useState)(0),h=Object(M.a)(E,2),v=h[0],x=h[1],g=Object(b.useState)(0),y=Object(M.a)(g,2),w=y[0],C=y[1],S=Object(b.useState)(0),k=Object(M.a)(S,2),V=k[0],q=k[1];return p.a.createElement(p.a.Fragment,null,p.a.createElement(ae,null,"Filter"),p.a.createElement(te,null,p.a.createElement(pe,{value:n,diameter:50,min:0,max:120,step:1,onValueChange:a},"Freq"),p.a.createElement(pe,{value:c,diameter:50,min:0,max:120,step:1,onValueChange:u},"Res"),p.a.createElement(pe,{value:m,diameter:50,min:0,max:120,step:1,onValueChange:s},"Env"),p.a.createElement(pe,{value:O,diameter:50,min:0,max:120,step:1,onValueChange:f},"A"),p.a.createElement(pe,{value:v,diameter:50,min:0,max:120,step:1,onValueChange:x},"D"),p.a.createElement(pe,{value:w,diameter:50,min:0,max:120,step:1,onValueChange:C},"S"),p.a.createElement(pe,{value:V,diameter:50,min:0,max:120,step:1,onValueChange:q},"R")))}function he(){var e=Object(b.useState)(0),t=Object(M.a)(e,2),n=t[0],a=t[1],r=Object(b.useState)(0),l=Object(M.a)(r,2),c=l[0],u=l[1],i=Object(b.useState)(0),o=Object(M.a)(i,2),m=o[0],s=o[1],d=Object(b.useState)(0),j=Object(M.a)(d,2),O=j[0],f=j[1],E=Object(b.useState)(0),h=Object(M.a)(E,2),v=h[0],x=h[1];return p.a.createElement(p.a.Fragment,null,p.a.createElement(ae,null,"Amp"),p.a.createElement(te,null,p.a.createElement(pe,{value:n,diameter:50,min:0,max:120,step:1,onValueChange:a},"Env"),p.a.createElement(pe,{value:c,diameter:50,min:0,max:120,step:1,onValueChange:u},"A"),p.a.createElement(pe,{value:m,diameter:50,min:0,max:120,step:1,onValueChange:s},"D"),p.a.createElement(pe,{value:O,diameter:50,min:0,max:120,step:1,onValueChange:f},"S"),p.a.createElement(pe,{value:v,diameter:50,min:0,max:120,step:1,onValueChange:x},"R")))}var ve,xe=function(){var e=Object(b.useState)(0),t=Object(M.a)(e,2),n=t[0],a=t[1],r=Object(b.useState)(0),l=Object(M.a)(r,2),c=l[0],u=l[1];return p.a.createElement(re,null,p.a.createElement(ae,null,"Delay"),p.a.createElement(ne,null,p.a.createElement(pe,{value:n,diameter:50,min:0,max:120,step:1,onValueChange:a},"Time"),p.a.createElement(pe,{value:c,diameter:50,min:0,max:120,step:1,onValueChange:u},"Decay")))},ge=function(){var e=Object(b.useState)(0),t=Object(M.a)(e,2),n=t[0],a=t[1],r=Object(b.useState)(0),l=Object(M.a)(r,2),c=l[0],u=l[1];return p.a.createElement(re,null,p.a.createElement(ae,null,"Reverb"),p.a.createElement(ne,null,p.a.createElement(pe,{value:n,diameter:50,min:0,max:120,step:1,onValueChange:a},"Mix"),p.a.createElement(pe,{value:c,diameter:50,min:0,max:120,step:1,onValueChange:u},"Delay")))};function ye(){return b.createElement(te,null,b.createElement(ge,null),b.createElement(xe,null))}var we,Ce,Se=q.a.button(ve||(ve=Object(V.a)(["\n  color: white;\n  background-color: ",";\n  border: solid 2.5px ",";\n  width: 60px;\n  height: 60px;\n  border-radius: 10px;\n  margin: 5px;\n"])),(function(e){return e.isActive?A:D}),A),ke=function(e){var t=e.isActive,n=e.selected,a=e.isMuted,r=e.handleClick,l=e.children;return l?p.a.createElement(Se,{onClick:r,selected:n,isMuted:a,isActive:t},l):p.a.createElement(Se,null)},Ve=q.a.div(we||(we=Object(V.a)(["\n  color: white;\n  width: 20px;\n  height: 20px;\n  background-color: ",";\n  border: solid 3.5px ",";\n  margin: 0 auto;\n  box-sizing: border-box;\n  border-color: transparent transparent transparent ",";\n  cursor: pointer;\n  border-style: solid;\n  border-width: 16px 0 16px 28px;\n"])),(function(e){return e.isActive?A:D}),A,A),qe=n(35),Ae=Object(x.atom)(!1),Fe=Object(x.atom)(400),De=(Object(x.atom)(new qe.b),Object(x.atom)([1,2])),Ie=Object(x.atom)(1),Le=Object(x.atom)((function(e){return e(De).map((function(t){return{name:"Track ".concat(t),id:t,synth:new qe.a({frequency:440,type:"sawtooth",volume:-20}).toDestination(),isSelected:t===e(Ie),sequence:new qe.b}}))})),Pe=Object(x.atom)((function(e){return e(Le).find((function(e){return e.isSelected}))}),(function(e,t,n){n!==e(Ie)&&t(Ie,n)})),Re=function(){var e=Object(x.useAtom)(Pe),t=Object(M.a)(e,1)[0];!function(e){var t=Object(x.useAtom)(le),n=Object(M.a)(t,1)[0];e.set({frequency:n})}(t.synth);var n=Object(x.useAtom)(Ae),a=Object(M.a)(n,2),r=a[0],l=a[1],c=Object(x.useAtom)(Fe),u=Object(M.a)(c,2),i=u[0],o=u[1];return{startSynth:function(){l(!0),t.synth.start()},stopSynth:function(){l(!1),t.synth.stop()},newWave:function(e){t.synth.type=e},newFreq:function(e,n){t.synth.frequency.value=n,o(n)},started:r,freq:i}},Me=function(){var e=p.a.useState(!1),t=Object(M.a)(e,2),n=t[0],a=t[1],r=Re(),l=r.startSynth,c=r.stopSynth,u=function(){var e=Object(U.a)(J.a.mark((function e(){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,qe.c();case 2:a(!n),n?c():l();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return p.a.createElement(ke,{handleClick:u},p.a.createElement(Ve,{isActive:n}))},We=q.a.div(Ce||(Ce=Object(V.a)(["\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-content: center;\n"])));function Te(){return b.createElement(We,null,"Sequencer",b.createElement(te,null,b.createElement(ke,null),b.createElement(ke,null),b.createElement(ke,null),b.createElement(ke,null),b.createElement(ke,null),b.createElement(ke,null),b.createElement(ke,null),b.createElement(ke,null),b.createElement(Me,null)))}function ze(){return b.createElement(P,null,b.createElement(fe,null),b.createElement(Ee,null),b.createElement(he,null),b.createElement(ye,null),b.createElement(Te,null))}var Be,Ne,_e,Je,Ue,Ke=n(133),Ze=q.a.div(Be||(Be=Object(V.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),He=q.a.div(Ne||(Ne=Object(V.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 16px;\n"]))),Qe=q.a.div(_e||(_e=Object(V.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 16px 24px 16px 16px;\n  border: ",";\n"])),(function(e){return e.isSelected?"2px solid pink":null})),Xe=Object(q.a)(Ke.a)(Je||(Je=Object(V.a)(["\n  height: 2px;\n"]))),Ge=Object(q.a)(z.a)(Ue||(Ue=Object(V.a)(["\n  font-size: 20px;\n"]))),Ye=function(e){var t=e.track,n=Object(x.useAtom)(Pe),a=Object(M.a)(n,2)[1];return b.createElement(Qe,{onClick:function(){return a(t.id)},isSelected:t.isSelected,key:t.id},t.name,b.createElement(pe,{diameter:40,value:1,min:1,max:2,step:1}))};function $e(){var e=Object(x.useAtom)(Le),t=Object(M.a)(e,1)[0];return b.createElement(Ze,null,b.createElement(He,null,b.createElement("div",null,"Add track"),b.createElement(Ge,null,"+")),b.createElement(Xe,null),t.map((function(e){return b.createElement(Ye,{key:e.id,track:e})})),b.createElement(Xe,null))}var et=function(){return b.createElement(I,null,b.createElement(L,null,b.createElement(Y,null),b.createElement($e,null)),b.createElement(ze,null))},tt=new h.a,nt=function(){return b.createElement(E.b,{injectFirst:!0},b.createElement(v.a,{client:tt},b.createElement(x.Provider,null,b.createElement(f.a,null,b.createElement(k,null,b.createElement(et,null))))))};O.a.render(b.createElement(nt,null),document.getElementById("root"))}},[[117,1,2]]]);
//# sourceMappingURL=main.9cc540ed.chunk.js.map