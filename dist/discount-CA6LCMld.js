import"./config-HRWLmo66.js";import"./logger-DHpG8Bim.js";import"./helpers-LVq640iW.js";import{art as e}from"./render-DE4LRFBD.js";import"./ofetch-DRl42yaJ.js";import{__dirname as t}from"./esm-shims-BDPl6Msv.js";import{got_default as n}from"./got-BaOFZRd4.js";import r from"node:path";const i={switch:1,steam:4,ps4:51,ps5:52},a={switch:{jx:16,all:17,sd:18},steam:{jx:26,all:27,dl:28,sd:29},ps4:{jx:19,all:20,sd:21,vip:22},ps5:{all:23,sd:24,vip:25}},o={jx:`精选`,sd:`史低`,all:`全部`,vip:`会员`,dl:`独立`},s=async e=>{let t=await n.get(`https://switch.jumpvg.com/jump/platform/order/v2?needCount=1&needFilter=1&version=3`),r=t.data.data,i=0;for(let t in r)if(r[t].platformAlias.toLocaleLowerCase()===e.toLocaleLowerCase()){i=r[t].gameNum;break}return i},c=async(e,t,r,i)=>{let a=await n.get(`https://switch.jumpvg.com/jump/discount/find4Discount/5/v2?countries=${e}&offset=${t}&platform=${r}&size=10&termsId=${i}&version=3`);return a.data.data},l=async(e,t,n,r)=>{let i=[];for(let a=0;a<=Math.round(r/10);a++){let r=await c(e,a*10,t,n);i=[...i,...r]}return i},u={path:`/discount/:platform/:filter?/:countries?`,categories:[`game`],example:`/jump/discount/ps5/all`,parameters:{platform:`平台:switch,ps4,ps5,xbox,steam,epic`,filter:`过滤参数,all-全部，jx-精选，sd-史低，dl-独立，vip-会员`,countries:`地区，具体支持较多，可自信查看地区简写`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`游戏折扣`,maintainers:[`zytomorrow`],handler:d,description:`| switch | ps4  | ps5  | xbox   | steam | epic   |
| ------ | ---- | ---- | ------ | ----- | ------ |
| 可用   | 可用 | 可用 | 不可用 | 可用  | 不可用 |

| filter | switch | ps4 | ps5 | steam |
| ------ | ------ | --- | --- | ----- |
| all    | ✔     | ✔  | ✔  | ✔    |
| jx     | ✔     | ✔  | ❌  | ✔    |
| sd     | ✔     | ✔  | ✔  | ✔    |
| dl     | ❌     | ✔  | ❌  | ✔    |
| vip    | ❌     | ❌  | ✔  | ❌    |

| 北美 | 欧洲（英语） | 法国 | 德国 | 日本 |
| ---- | ------------ | ---- | ---- | ---- |
| na   | eu           | fr   | de   | jp   |`};async function d(n){let c=n.req.param(`platform`),u=n.req.param(`filter`)||`all`,d=n.req.param(`countries`)||``,f=await s(c),p=await l(d,i[c.toLocaleLowerCase()],a[c.toLocaleLowerCase()][u],f);return{title:`jump 折扣-${c}-${o[u]}${d?`-${d}`:``}`,link:`https://jumpvg.com/`,description:`jump 发现游戏`,item:p.map(n=>({title:`${n.name}-${n.cutOff}%-￥${n.price}`,description:e(r.resolve(t,`templates/discount-be0245e0.art`),{item:n}),link:n.banner,guid:`${c}-${n.oldGameId}-${n.cutOff}`}))}}export{u as route};