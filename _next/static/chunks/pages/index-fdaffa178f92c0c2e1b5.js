(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5886:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return y}});var s=t(5893),n=t(9008),o=t(3802),c=function(){return(0,s.jsx)("header",{className:"px-16",children:(0,s.jsxs)("div",{className:"flex items-center mt-2",children:[(0,s.jsx)(o.W1M,{className:"w-5 h-5 text-gray-400"}),(0,s.jsx)("input",{className:"px-4 flex-1 py-4 placeholder-gray-400 focus:ring-2 focus:ring-blue-600",type:"text",placeholder:"Search"})]})})},i=t(3391),l=t(7294),a={1:"#fec870",2:"#F5972C",3:"#e3ed8e",4:"#b592fb",5:"#01d3fe"},u=function(){var e=(0,l.useState)(!1),r=e[0],t=e[1];return(0,s.jsxs)("div",{className:"w-24 flex flex-col items-center",children:[(0,s.jsx)("h2",{className:"text-lg font-bold py-4 mt-2",children:"Notes"}),(0,s.jsxs)("div",{className:"pt-12",children:[(0,s.jsxs)("button",{className:"bg-black text-white rounded-full p-3 mb-8 hover:shadow-lg focus:shadow-lg outline-none focus:ring-2 focus:ring-blue-600",onClick:function(){return t((function(e){return!e}))},children:[(0,s.jsx)("span",{className:"sr-only",children:"Add note"}),(0,s.jsx)(o.pOD,{className:"w-5 h-5"})]}),r&&Object.entries(a).map((function(e){var r=(0,i.Z)(e,2),t=r[0],n=r[1];return(0,s.jsx)("button",{onClick:function(){},className:"block rounded-full h-6 w-6 mb-4 mx-auto hover:shadow-lg focus:shadow-lg outline-none focus:ring-2 focus:ring-blue-600",style:{backgroundColor:n},children:(0,s.jsxs)("span",{className:"sr-only",children:["Create note with color ",t," - ",n]})},t)}))]})]})},d=function(){return(0,s.jsx)("footer",{className:"text-center",children:"Built with \u2764\ufe0f by Varun Dev"})},h=t(6156),f=t(7099),x=t.n(f),p=t(6049);function m(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter(Boolean).join(" ")}var j=x()("{MMMM} {DD}, {YYYY}"),g=function(e){var r=e.color,t=e.content,n=e.date,c=e.isFav;return(0,s.jsxs)("div",{className:"group flex flex-col p-8 rounded-2xl",style:{minWidth:280,minHeight:280,backgroundColor:r},children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("button",{className:m("bg-black hover:bg-gray-900 hover:shadow-lg transition rounded-full p-2 ml-4 mb-4 float-right outline-none focus:ring-2 focus:ring-white",c?"text-yellow-400":"text-white hover:text-yellow-400 opacity-0 group-hover:opacity-100 focus:opacity-100"),children:c?(0,s.jsx)(o.r7p,{className:"w-4 h-4"}):(0,s.jsx)(p.r7p,{className:"w-4 h-4"})}),(0,s.jsx)("p",{className:"font-medium",children:t})]}),(0,s.jsxs)("div",{className:"flex justify-between items-center mt-auto clear-both",children:[(0,s.jsx)("time",{dateTime:n,children:j.render(new Date(n))}),(0,s.jsx)("button",{className:"bg-black text-white hover:bg-gray-900 rounded-full p-3 transition transform hover:scale-105 hover:shadow-lg opacity-0 outline-none focus:ring-2 focus:ring-white group-hover:opacity-100 focus:opacity-100",children:(0,s.jsx)(o.vdY,{className:"w-4 h-4"})})]})]})};function b(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,s)}return t}function v(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?b(Object(t),!0).forEach((function(r){(0,h.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var w=function(){var e={content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis quos ab ipsa? Dolorum atque voluptatem obcaecati ex explicabo eius voluptate debitis dicta aperiam?",date:(new Date).toISOString()};return(0,s.jsxs)("div",{className:"pt-12 px-16 pb-16",children:[(0,s.jsx)("h2",{className:"text-5xl font-semibold mb-12",children:"Notes"}),(0,s.jsxs)("div",{className:"max-w-screen-2xl grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 gap-x-10 gap-y-10",children:[(0,s.jsx)(g,v(v({},e),{},{color:a[1]})),(0,s.jsx)(g,v(v({},e),{},{color:a[2],isFav:!0})),(0,s.jsx)(g,v(v({},e),{},{color:a[3]})),(0,s.jsx)(g,v(v({},e),{},{color:a[4]})),(0,s.jsx)(g,v(v({},e),{},{color:a[5],isFav:!0})),(0,s.jsx)(g,v(v({},e),{},{color:a[1]})),(0,s.jsx)(g,v(v({},e),{},{color:a[2]}))]})]})};function y(){return(0,s.jsxs)("div",{className:"font-sans",children:[(0,s.jsxs)(n.default,{children:[(0,s.jsx)("title",{children:"Notes app"}),(0,s.jsx)("meta",{name:"description",content:"A working notes app. Inspired by the design from @Ariuka_dsgn"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsxs)("main",{className:"flex",children:[(0,s.jsx)("aside",{className:"border-r border-gray-300",children:(0,s.jsx)(u,{})}),(0,s.jsxs)("article",{children:[(0,s.jsx)(c,{}),(0,s.jsx)(w,{}),(0,s.jsx)(d,{})]})]})]})}},3685:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5886)}])}},function(e){e.O(0,[505,774,888,179],(function(){return r=3685,e(e.s=r);var r}));var r=e.O();_N_E=r}]);