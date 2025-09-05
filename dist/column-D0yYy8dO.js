import"./config-HRWLmo66.js";import"./logger-DHpG8Bim.js";import"./helpers-LVq640iW.js";import{art as e}from"./render-DE4LRFBD.js";import{parseDate as t}from"./parse-date-DHsdom8D.js";import"./ofetch-DRl42yaJ.js";import{__dirname as n}from"./esm-shims-BDPl6Msv.js";import{got_default as r}from"./got-BaOFZRd4.js";import i from"node:path";const a={path:`/:column`,categories:[`multimedia`],example:`/cntv/TOPC1451528971114112`,parameters:{column:`栏目ID, 可在对应CNTV栏目页面找到`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`navi.cctv.com/`]}],name:`栏目`,maintainers:[`WhoIsSure`,`Fatpandac`],handler:o,url:`navi.cctv.com/`,description:`::: tip
栏目 ID 查找示例:
打开栏目具体某一期页面，F12 控制台输入\`column_id\`得到栏目 ID。
:::

  栏目

| 新闻联播             | 新闻周刊             | 天下足球             |
| -------------------- | -------------------- | -------------------- |
| TOPC1451528971114112 | TOPC1451559180488841 | TOPC1451551777876756 |`};async function o(a){let o=a.req.param(`column`),s=Number.isNaN(Number.parseInt(a.req.query(`limit`)))?25:Number.parseInt(a.req.query(`limit`)),c=await r({method:`get`,url:`https://api.cntv.cn/NewVideo/getVideoListByColumn?id=${o}&n=${s}&sort=desc&p=1&mode=0&serviceId=tvcctv`}),l=c.data.data.list,u=l[0].title.match(/《(.*?)》/)[1];return{title:`CNTV 栏目 - ${u}`,description:`${u} 栏目的视频更新`,item:l.map(r=>({title:r.title,description:e(i.join(n,`templates/column-4b5da82e.art`),{item:r}),pubDate:t(r.time),link:r.url}))}}export{a as route};