(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{33:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(11),c=a.n(r),i=(a(33),a(34),a(7)),s=a(43),u=a(42),o=a(12),j=a(44),l=a(24),d=a(46),b=a(1),h=function(e){var t=e.setCategories,a=Object(n.useState)(""),r=Object(i.a)(a,2),c=r[0],s=r[1];return Object(b.jsxs)(j.a,{className:"d-flex",onSubmit:function(e){e.preventDefault(),c.trim().length>2&&(t((function(e){return[c].concat(Object(o.a)(e))})),s(""))},children:[Object(b.jsx)(l.a,{type:"search",placeholder:"Search",className:"me-2","aria-label":"Search",value:c,onChange:function(e){s(e.target.value)}}),Object(b.jsx)(d.a,{type:"submit",variant:"outline-success",children:"Search"})]})},p=a(45),f=function(e){var t=e.title,a=e.url;return Object(b.jsxs)(p.a,{className:"card animate__animated animate__fadeIn",style:{width:"100rem"},children:[Object(b.jsx)(p.a.Img,{variant:"top",src:a}),Object(b.jsx)(p.a.Body,{children:Object(b.jsxs)(p.a.Text,{children:[" ",t]})})]})},m=a(22),O=a.n(m),x=a(25),g=function(){var e=Object(x.a)(O.a.mark((function e(t){var a,n,r,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=NCNkWMp16Y5WfMHRmSgYUH52BuaP7Zrh"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.data,e.abrupt("return",c.map((function(e){var t=e.id,a=e.title,n=e.images;return{id:t,title:a,url:null===n||void 0===n?void 0:n.downsized_medium.url}})));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=a(41),y=a(47),_=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(i.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){g(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),r=a.data,c=a.loading;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h3",{className:"animate__animated animate__fadeIn",children:t}),c&&Object(b.jsx)(v.a,{animation:"grow",variant:"dark"}),Object(b.jsx)(y.a,{direction:"horizontal",gap:3,children:r.map((function(e){var t=e.id,a=e.title,n=e.url;return Object(b.jsx)(f,{title:a,url:n},t)}))})]})},k=function(){var e=Object(n.useState)(["One Punch"]),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(s.a,{bg:"dark",variant:"dark",children:Object(b.jsxs)(u.a,{children:[Object(b.jsx)(s.a.Brand,{children:"Gif Expert App"}),Object(b.jsx)(s.a.Collapse,{className:"justify-content-end",children:Object(b.jsx)(h,{setCategories:r})})]})}),Object(b.jsx)(u.a,{fluid:!0,children:a.map((function(e){return Object(b.jsx)(_,{category:e},e)}))})]})};c.a.render(Object(b.jsx)(k,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.24e893ac.chunk.js.map