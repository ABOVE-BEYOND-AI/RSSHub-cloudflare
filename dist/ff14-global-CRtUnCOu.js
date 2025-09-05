import"./config-HRWLmo66.js";import"./logger-DHpG8Bim.js";import"./helpers-LVq640iW.js";import{art as e}from"./render-DE4LRFBD.js";import{parseDate as t}from"./parse-date-DHsdom8D.js";import"./ofetch-DRl42yaJ.js";import{__dirname as n}from"./esm-shims-BDPl6Msv.js";import{got_default as r}from"./got-BaOFZRd4.js";import{invalid_parameter_default as i}from"./invalid-parameter-CfUmvEUg.js";import{isValidHost as a}from"./valid-host-JqD2S4D4.js";import o from"node:path";const s={path:[`/global/:lang/:type?`,`/ff14_global/:lang/:type?`],categories:[`game`],example:`/ff14/global/na/all`,parameters:{lang:`Region`,type:"Category, `all` by default"},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`FINAL FANTASY XIV (The Lodestone)`,maintainers:[`kmod-midori`],handler:c,description:`Region

| North Ameria | Europe | France | Germany | Japan |
| ------------ | ------ | ------ | ------- | ----- |
| na           | eu     | fr     | de      | jp    |

  Category

| all | topics | notices | maintenance | updates | status | developers |
| --- | ------ | ------- | ----------- | ------- | ------ | ---------- |`};async function c(s){let c=s.req.param(`lang`),l=s.req.param(`type`)??`all`;if(!a(c))throw new i(`Invalid lang`);let u=await r({method:`get`,url:`https://lodestonenews.com/news/${l}?locale=${c}`}),d;if(l===`all`){d=[];for(let e of Object.values(u.data))d=[...d,...e]}else d=u.data;return{title:`FFXIV Lodestone updates (${l})`,link:`https://${c}.finalfantasyxiv.com/lodestone/news/`,item:d.map(({id:r,url:i,title:a,time:s,description:c,image:l})=>({title:a,link:i,description:e(o.join(n,`templates/description-fc190f49.art`),{image:l,description:c}),pubDate:t(s),guid:r}))}}export{s as route};