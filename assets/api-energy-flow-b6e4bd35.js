import{a as r}from"./vendor-afb53a8d.js";r.defaults.baseURL="https://energyflow.b.goit.study/api";const o=async(s="/exercises",t={})=>{try{return(await r.get(s,{params:t})).data}catch(e){console.error(e.response.data.message)}};o();const a=async(s="",t={})=>{try{return s===""||t===""?void 0:await r.post(s,t)}catch(e){throw e}};a();const n=async(s="",t={})=>{try{if(s===""||t==="")return;const e=await r.patch(s,t);return console.log(e),e}catch(e){throw e}};n();export{o as getRequest,n as patchRequest,a as postRequest};
//# sourceMappingURL=api-energy-flow-b6e4bd35.js.map