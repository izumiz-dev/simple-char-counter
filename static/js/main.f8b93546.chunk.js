(this["webpackJsonpsimple-char-counter"]=this["webpackJsonpsimple-char-counter"]||[]).push([[0],{116:function(e,t,n){},157:function(e,t,n){"use strict";n.r(t);var a=n(5),l=n(0),c=n.n(l),r=n(10),i=n.n(r),s=(n(116),n(69)),o=n(21),j=n(70),u=n.n(j),d=n(182),b=n(184),h=n(99),m=n.n(h),x=n(71),p=n.n(x),O=n(100),g=n.n(O),v=n(98),f=n.n(v),y=n(183),C=function(e){var t=e.timer,n=Object(l.useState)(60*t||0),c=Object(o.a)(n,2),r=c[0],i=c[1],j=Object(l.useState)(1),u=Object(o.a)(j,2),d=u[0],b=u[1],h=Object(l.useState)([]),m=Object(o.a)(h,2),x=m[0],p=m[1];return Object(l.useEffect)((function(){if(0!==r){var e=setInterval((function(){i((function(e){return e-1}))}),1e3);return function(){return clearInterval(e)}}0===r&&(i(60*t),b((function(e){return e+1})),p((function(e){return[].concat(Object(s.a)(e),[d%4===0?"\u2b50\ufe0f":"\ud83c\udf45"])})))}),[r,t,d]),Object(a.jsxs)("div",{style:{fontFamily:"serif",color:"tomato",fontSize:"2rem"},children:[Object(a.jsx)("b",{children:Object(a.jsxs)("i",{children:["Auto Start Pomodoro Timer:"," ",Math.floor(r/60).toString().padStart(2,"0"),":",(r%60).toString().padStart(2,"0")]})}),Object(a.jsx)("div",{children:x&&x.map((function(e){return Object(a.jsx)("span",{children:e})}))})]})},w=n(101),I=n.n(w),k=n(102),S=n.n(k),z=n(103),A=n.n(z),T=function(){var e=Object(l.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(l.useState)("char"),i=Object(o.a)(r,2),j=i[0],h=i[1],x=Object(l.useState)(""),O=Object(o.a)(x,2),v=O[0],w=O[1],k=Object(l.useState)(!1),z=Object(o.a)(k,2),T=z[0],F=z[1],R=Object(l.useState)(""),B=Object(o.a)(R,2),D=B[0],L=B[1],_=Object(l.useState)([]),P=Object(o.a)(_,2),U=P[0],G=P[1],J=Object(l.useCallback)((function(e){return c(e.target.value)}),[]),M=Object(l.useCallback)((function(e){return w(e.target.value)}),[]),q=Object(l.useCallback)((function(e){return L(e.target.value)}),[]);return Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",height:"100vh",background:E(n,parseInt(v),T,j)?"red":"#FFF"},children:[Object(a.jsxs)("div",{style:{margin:"1vh",display:"flex",alignItems:"center"},children:[Object(a.jsx)("span",{style:{fontSize:"3rem",color:E(n,parseInt(v),T,j)?"white":"#767676"},children:"char"===j?n.length||0:""===n?0:n.split(" ").length||0}),Object(a.jsxs)(b.a,{style:{margin:"1vh"},value:j,exclusive:!0,onChange:function(e,t){h(t)},"aria-label":"text alignment",children:[Object(a.jsx)(d.a,{value:"char","aria-label":"char",children:"Char(s)"}),Object(a.jsx)(d.a,{value:"word","aria-label":"word",children:"Word(s) (en)"})]}),Object(a.jsxs)("div",{style:{margin:"4px",display:"flex",alignItems:"center"},children:[Object(a.jsx)(u.a,{variant:"outlined",size:"small",type:"number",placeholder:"limit",style:{width:"100px",marginRight:"4px"},value:v,onChange:M}),Object(a.jsx)(d.a,{size:"small",selected:T,onChange:function(){F(!T)},children:Object(a.jsx)(f.a,{})})]})]}),Object(a.jsx)(u.a,{style:{width:"75vw",margin:"1vh"},id:"outlined-basic",label:"Text",variant:"outlined",multiline:!0,onChange:J,value:n,maxRows:16,minRows:16}),Object(a.jsxs)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:[Object(a.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(a.jsx)(y.a,{style:{margin:"4px"},variant:"outlined",color:"primary",size:"small",onClick:function(){c("\u304a\u4e16\u8a71\u306b\u306a\u3063\u3066\u304a\u308a\u307e\u3059\u3002\n"+n)},children:"\u304a\u4e16\u8a71\u306b\u306a\u3063\u3066\u304a\u308a\u307e\u3059"}),Object(a.jsx)(y.a,{style:{margin:"4px"},variant:"outlined",color:"primary",size:"small",onClick:function(){c("\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3002\n"+n)},children:"\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059"}),Object(a.jsx)(y.a,{style:{margin:"4px"},variant:"outlined",color:"primary",size:"small",href:"https://www.google.com/search?hl=ja&q=%E8%AC%9D%E7%BD%AA%E3%81%AE%E4%BB%95%E6%96%B9",target:"_blank",startIcon:Object(a.jsx)(p.a,{}),children:"\u8b1d\u7f6a\u306e\u4ed5\u65b9\u3092\u30b0\u30b0\u308b"})]}),Object(a.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(a.jsx)(y.a,{style:{margin:"4px"},variant:"outlined",color:"primary",size:"small",href:"https://translate.google.com/?sl=auto&tl=en&text=".concat(encodeURIComponent(n),"&op=translate"),target:"_blank",startIcon:Object(a.jsx)(p.a,{}),children:"Google\u7ffb\u8a33\u3067\u82f1\u8a9e\u306b"}),Object(a.jsx)(y.a,{style:{margin:"4px"},variant:"outlined",color:"primary",size:"small",href:"https://www.deepl.com/translator#ja/en/".concat(encodeURIComponent(n)),target:"_blank",startIcon:Object(a.jsx)(p.a,{}),children:"DeepL\u7ffb\u8a33\u3067\u82f1\u8a9e\u306b"})]}),Object(a.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(a.jsx)(y.a,{style:{margin:"4px"},variant:"outlined",color:"primary",size:"small",onClick:function(){var e=n.replaceAll("\u3002","\uff0e").replaceAll("\u3001","\uff0c");c(e)},children:"\u53e5\u8aad\u70b9\u5909\u63db \uff08\u3002\u3001\u2192\uff0e\uff0c\uff09"}),Object(a.jsx)(y.a,{style:{margin:"4px"},variant:"outlined",color:"primary",size:"small",onClick:function(){var e=n.replaceAll("\uff0e","\u3002").replaceAll("\uff0c","\u3001");c(e)},children:"\u53e5\u8aad\u70b9\u5909\u63db \uff08\uff0e\uff0c\u2192\u3002\u3001\uff09"})]}),Object(a.jsx)(y.a,{style:{margin:"4px"},variant:"outlined",color:"primary",size:"small",startIcon:Object(a.jsx)(m.a,{}),onClick:function(){navigator.clipboard.writeText(n)},children:"\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u3078\u30b3\u30d4\u30fc"}),n.length<=140&&Object(a.jsx)(y.a,{style:{margin:"4px"},variant:"outlined",color:"primary",size:"small",href:"https://twitter.com/compose/tweet?text=".concat(encodeURIComponent(n)," via https://izumiz-dev.github.io/simple-char-counter/"),target:"_blank",startIcon:Object(a.jsx)(g.a,{}),children:"\u30c4\u30a4\u30fc\u30c8\u3059\u308b"})]}),Object(a.jsx)(C,{timer:25}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{style:{color:"GrayText"},children:"Temporary Task List Tool"}),Object(a.jsx)(u.a,{variant:"outlined",size:"small",placeholder:"Task",style:{width:"40vw",marginRight:"4px"},value:D,onChange:q}),Object(a.jsx)(y.a,{size:"medium",variant:"contained",onClick:function(){""!==D&&(G([].concat(Object(s.a)(U),[D])),L(""))},children:"Add"}),U.map((function(e,t){return Object(a.jsx)(I.a,{children:Object(a.jsx)(S.a,{control:Object(a.jsx)(A.a,{}),label:e})})}))]})]})},E=function(e,t,n,a){return!!(n&&"char"===a&&e.length>t)||!!(n&&"word"===a&&e.split(" ").length>t)},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,185)).then((function(t){var n=t.getCLS,a=t.getFID,l=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),l(e),c(e),r(e)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(T,{})}),document.getElementById("root")),F()}},[[157,1,2]]]);