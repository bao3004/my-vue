if(!self.define){let e,i={};const u=(u,l)=>(u=new URL(u+".js",l).href,i[u]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=u,e.onload=i,document.head.appendChild(e)}else e=u,importScripts(u),i()})).then((()=>{let e=i[u];if(!e)throw new Error(`Module ${u} didn’t register its module`);return e})));self.define=(l,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let s={};const o=e=>u(e,n),m={module:{uri:n},exports:s,require:o};i[n]=Promise.all(l.map((e=>m[e]||o(e)))).then((e=>(r(...e),s)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"my-vue-project"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/my-vue/css/app.faab530b.css",revision:null},{url:"/my-vue/css/chunk-vendors.4e49744a.css",revision:null},{url:"/my-vue/img/1.a2f2aec9.jpg",revision:null},{url:"/my-vue/img/2.50a24aba.jpg",revision:null},{url:"/my-vue/img/3-576px.729c79c3.jpg",revision:null},{url:"/my-vue/img/3.b3a938a0.jpg",revision:null},{url:"/my-vue/img/4-576px.f38fa571.jpg",revision:null},{url:"/my-vue/img/5.37d462ec.jpg",revision:null},{url:"/my-vue/img/6.f5536a3a.jpg",revision:null},{url:"/my-vue/img/7.9d5a2dcf.jpg",revision:null},{url:"/my-vue/img/cat_modal.fe4d6e59.gif",revision:null},{url:"/my-vue/index.html",revision:"687a4ca120214268c92e3d6eb9043767"},{url:"/my-vue/js/app.e7c1dd49.js",revision:null},{url:"/my-vue/js/chunk-vendors.1bc1b092.js",revision:null},{url:"/my-vue/manifest.json",revision:"28c3f4f85aa60a20ad52a7fd6c5465d6"},{url:"/my-vue/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
