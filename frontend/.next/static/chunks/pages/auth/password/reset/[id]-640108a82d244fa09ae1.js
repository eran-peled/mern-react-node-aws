_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[25],{"3GiG":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/password/reset/[id]",function(){return r("frO5")}])},frO5:function(e,t,r){"use strict";r.r(t);var n=r("o0o1"),o=r.n(n),s=r("HaE+"),a=r("rePB"),c=r("q1tI"),u=r.n(c),i=r("vDqi"),p=r.n(i),w=r("10oZ"),d=r("obyI"),l=r("nOHt"),b=r("FLf1"),f=r.n(b),O=r("5Yp1"),m=u.a.createElement;function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=Object(l.withRouter)((function(e){var t=e.router,r=Object(c.useState)({name:"",token:"",newPassword:"",buttonText:"Reset Password",success:"",error:""}),n=r[0],a=r[1],u=n.name,i=n.token,l=n.newPassword,b=n.buttonText,v=n.success,j=n.error;Object(c.useEffect)((function(){console.log(t);var e=f.a.decode(t.query.id);e&&a(P(P({},n),{},{name:e.name,token:t.query.id}))}),[t]);var y=function(e){a(P(P({},n),{},{newPassword:e.target.value,success:"",error:""}))},g=function(){var e=Object(s.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a(P(P({},n),{},{buttonText:"Sending"})),e.prev=2,e.next=5,p.a.put("".concat(d.a,"/reset-password"),{resetPasswordLink:i,newPassword:l});case 5:r=e.sent,a(P(P({},n),{},{newPassword:"",buttonText:"Done",success:r.data.message})),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.log("RESET PW ERROR",e.t0),a(P(P({},n),{},{buttonText:"Forgot Password",error:e.t0.response.data.error}));case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return m(O.a,null,m("div",{className:"row"},m("div",{className:"col-md-6 offset-md-3"},m("h1",null,"Hi ",u,", Ready to Reset Password?"),m("br",null),v&&Object(w.b)(v),j&&Object(w.a)(j),m("form",{onSubmit:g},m("div",{className:"form-group"},m("input",{type:"password",className:"form-control",onChange:y,value:l,placeholder:"Type new password",required:!0})),m("div",null,m("button",{className:"btn btn-outline-warning"},b))))))}))}},[["3GiG",1,0,2,3,4,5,6,9]]]);