import{d as _,I as u,a8 as f,a2 as h,a9 as C,a3 as b,c as w,w as a,o as A,a as e,aa as g,H as i,ab as v}from"./vendor.a96fb297.js";/* empty css                *//* empty css               */const T=i(" Remove "),x=i(" Add Item "),S=_({setup(y){const o=new Date,s=u([{date:"2016-05-01",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"}]),d=l=>{s.value.splice(l,1)},r=()=>{o.setDate(o.getDate()+1),s.value.push({date:v(o).format("YYYY-MM-DD"),name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"})};return(l,L)=>{const t=f,n=h,c=C,p=b;return A(),w(p,null,{default:a(()=>[e(c,{data:s.value,stripe:"",style:{width:"100%"},"max-height":"250"},{default:a(()=>[e(t,{fixed:"",prop:"date",label:"Date",width:"150"}),e(t,{prop:"name",label:"Name",width:"120"}),e(t,{prop:"state",label:"State",width:"120"}),e(t,{prop:"city",label:"City",width:"120"}),e(t,{prop:"address",label:"Address",width:"600"}),e(t,{prop:"zip",label:"Zip",width:"120"}),e(t,{fixed:"right",label:"Operations",width:"120"},{default:a(m=>[e(n,{type:"text",size:"small",onClick:g(D=>d(m.$index),["prevent"])},{default:a(()=>[T]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),e(n,{class:"mt-4 marginT10 width100",onClick:r},{default:a(()=>[x]),_:1})]),_:1})}}});export{S as default};