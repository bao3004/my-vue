if(!self.define){let e,i={};const u=(u,r)=>(u=new URL(u+".js",r).href,i[u]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=u,e.onload=i,document.head.appendChild(e)}else e=u,importScripts(u),i()})).then((()=>{let e=i[u];if(!e)throw new Error(`Module ${u} didn’t register its module`);return e})));self.define=(r,s)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let l={};const o=e=>u(e,n),c={module:{uri:n},exports:l,require:o};i[n]=Promise.all(r.map((e=>c[e]||o(e)))).then((e=>(s(...e),l)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"my-vue-project"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/my-vue/css/app.f4b4be02.css",revision:null},{url:"/my-vue/css/chunk-vendors.4e49744a.css",revision:null},{url:"/my-vue/img/1.ed2b5911.jpg",revision:null},{url:"/my-vue/img/2.50a24aba.jpg",revision:null},{url:"/my-vue/img/3.05ac27c9.jpg",revision:null},{url:"/my-vue/img/5.37d462ec.jpg",revision:null},{url:"/my-vue/img/6.f5536a3a.jpg",revision:null},{url:"/my-vue/img/7.9d5a2dcf.jpg",revision:null},{url:"/my-vue/img/cat.b287946e.jpg",revision:null},{url:"/my-vue/index.html",revision:"6bdd585c3d29eb499a2c950cc86e628a"},{url:"/my-vue/js/app.b5dde3ae.js",revision:null},{url:"/my-vue/js/chunk-vendors.9faef319.js",revision:null},{url:"/my-vue/manifest.json",revision:"8989fdc5582bae20a59e94eb6443f6c2"},{url:"/my-vue/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
