_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{KGfn:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin",function(){return n("iooJ")}])},iooJ:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),c=n("5Yp1"),i=n("tOng"),s=n("YFqc"),o=n.n(s),l=a.a.createElement;t.default=Object(i.default)((function(e){e.user;return l(c.a,null,l("h1",null,"Admin Dashboard"),l("br",null),l("div",{className:"row"},l("div",{className:"col-md-4"},l("ul",{className:"nav flex-column"},l("li",{className:"nav-item"},l("a",{href:"/admin/category/create",className:"nav-link"},"Create category")),l("li",{className:"nav-item"},l(o.a,{href:"/admin/category/read"},l("a",{className:"nav-link"},"All categories"))),l("li",{className:"nav-item"},l(o.a,{href:"/admin/link/read"},l("a",{className:"nav-link"},"All Links"))),l("li",{className:"nav-item"},l(o.a,{href:"/user/profile/update"},l("a",{className:"nav-link"},"Profile update"))))),l("div",{className:"col-md-8"})))}))},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},tOng:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),a=n.n(r),c=n("rePB"),i=n("HaE+"),s=n("q1tI"),o=n.n(s),l=n("vDqi"),u=n.n(l),f=n("obyI"),p=n("rZ7M"),b=o.a.createElement;function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e){var t=function(t){return b(e,t)};return t.getInitialProps=function(){var t=Object(i.a)(a.a.mark((function t(n){var r,c,i,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=Object(p.b)("token",n.req),c=null,i=[],!r){t.next=15;break}return t.prev=4,t.next=7,u.a.get("".concat(f.a,"/admin"),{headers:{authorization:"Bearer ".concat(r),contentType:"application/json"}});case 7:s=t.sent,c=s.data.user,i=s.data.links,t.next=15;break;case 12:t.prev=12,t.t0=t.catch(4),401===t.t0.response.status&&(c=null);case 15:if(null!==c){t.next=20;break}n.res.writeHead(302,{Location:"/"}),n.res.end(),t.next=35;break;case 20:if(t.t1=m,t.t2=m,t.t3={},!e.getInitialProps){t.next=29;break}return t.next=26,e.getInitialProps(n);case 26:t.t4=t.sent,t.next=30;break;case 29:t.t4={};case 30:return t.t5=t.t4,t.t6=(0,t.t2)(t.t3,t.t5),t.t7={},t.t8={user:c,token:r,userLinks:i},t.abrupt("return",(0,t.t1)(t.t6,t.t7,t.t8));case 35:case"end":return t.stop()}}),t,null,[[4,12]])})));return function(e){return t.apply(this,arguments)}}(),t}}},[["KGfn",1,0,2,3,4]]]);