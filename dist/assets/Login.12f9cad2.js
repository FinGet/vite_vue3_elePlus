import{b as F,d as g,e as h,a0 as B,t as v,a4 as V,aa as k,_ as x,al as y,f as I,g as C,a as e,w as s,u as a,am as E,o as b,H as w}from"./vendor.c8fffcae.js";/* empty css                     *//* empty css                 */import{_ as U}from"./index.a1504428.js";const N=F("user",{state:()=>({userInfo:{name:"finget",age:26},token:""}),actions:{setUserInfo(r){this.userInfo=r},setToken(r){this.token=r}},persist:{enabled:!0}});const S={class:"display-flex j-c-c a-i-c height100"},q={class:"login-form"},D=w(" \u767B\u5F55 "),L=g({setup(r){const d=E(),u=h({form:{email:"admin",pass:"admin123"},ruleForm:B()}),{form:o,ruleForm:_}=v(u);N();const p=()=>{var l;(l=u.ruleForm)==null||l.validate(t=>{t&&u.form.email==="admin"&&d.push({path:"/"})})};return(l,t)=>{const i=V,n=k,c=x,f=y;return b(),I("div",S,[C("div",q,[e(f,{ref_key:"ruleForm",ref:_,model:a(o)},{default:s(()=>[e(n,{prop:"email",rules:{required:!0,message:"\u8BF7\u8F93\u5165\u8D26\u53F7",trigger:"change"}},{default:s(()=>[e(i,{modelValue:a(o).email,"onUpdate:modelValue":t[0]||(t[0]=m=>a(o).email=m),placeholder:"\u8BF7\u8F93\u5165\u8D26\u53F7"},null,8,["modelValue"])]),_:1}),e(n,{prop:"pass",rules:{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:"change"}},{default:s(()=>[e(i,{modelValue:a(o).pass,"onUpdate:modelValue":t[1]||(t[1]=m=>a(o).pass=m),type:"password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),e(n,null,{default:s(()=>[e(c,{class:"width100",type:"primary",onClick:p},{default:s(()=>[D]),_:1})]),_:1})]),_:1},8,["model"])])])}}});var z=U(L,[["__scopeId","data-v-1165e337"]]);export{z as default};
