import{o as v,f as V,$ as x,a0 as g,a1 as w,s as $,J as E,a2 as z,d as C,a3 as B,l as M,a4 as k,Z as y,c as H,w as f,a as s,u as N,a5 as b}from"./vendor.81a2fb06.js";/* empty css                */import{_ as j}from"./index.3e7e221b.js";/* empty css                 */const q={};function I(a,e){return v(),V("div",null," \u8FD9\u662F\u4E00\u4E2A\u6D4B\u8BD5\u7EC4\u4EF6 ")}var A=j(q,[["render",I]]),h={};(function(a){Object.defineProperty(a,"__esModule",{value:!0});var e=g,o=w;const t=e.defineComponent({name:"Aim"}),_={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},l=[e.createElementVNode("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"},null,-1),e.createElementVNode("path",{fill:"currentColor",d:"M512 96a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V128a32 32 0 0 1 32-32zm0 576a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V704a32 32 0 0 1 32-32zM96 512a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64H128a32 32 0 0 1-32-32zm576 0a32 32 0 0 1 32-32h192a32 32 0 1 1 0 64H704a32 32 0 0 1-32-32z"},null,-1)];function u(p,d,i,m,J,O){return e.openBlock(),e.createElementBlock("svg",_,l)}var c=o.default(t,[["render",u]]);a.default=c})(h);var D=x(h);const F=(a,e)=>{const o=E(a());return z(a,t=>{t!==o.value&&(o.value=t)}),$({get:()=>o.value,set:t=>{o.value!==t&&(o.value=t,e(t))}})},Z=C({props:{modelValue:{type:[String,Number],required:!0,default:""}},emits:["update:modelValue"],setup(a,{emit:e}){const o=a,{x:t,y:_}=B();console.log(t.value);const n=F(()=>o.modelValue,r=>e("update:modelValue",r));return(r,l)=>{const u=D,c=M,p=k,d=A,i=y;return v(),H(i,null,{default:f(()=>[s(c,{size:20},{default:f(()=>[s(u)]),_:1}),s(p,{modelValue:N(n),"onUpdate:modelValue":l[0]||(l[0]=m=>b(n)?n.value=m:null),style:{width:"200px"},type:"text"},null,8,["modelValue"]),s(d)]),_:1})}}});export{Z as default};