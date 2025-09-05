import"./config-HRWLmo66.js";import"./logger-DHpG8Bim.js";import"./helpers-LVq640iW.js";import{art as e}from"./render-DE4LRFBD.js";import{parseDate as t}from"./parse-date-DHsdom8D.js";import"./ofetch-DRl42yaJ.js";import{__dirname as n}from"./esm-shims-BDPl6Msv.js";import{got_default as r}from"./got-BaOFZRd4.js";import i from"node:path";const a={focus:{tc:`要聞`,sc:`要闻`},instant:{tc:`快訊`,sc:`快讯`},local:{tc:`港澳`,sc:`港澳`},greaterchina:{tc:`兩岸`,sc:`两岸`},world:{tc:`國際`,sc:`国际`},finance:{tc:`財經`,sc:`财经`},sports:{tc:`體育`,sc:`体育`},parliament:{tc:`法庭`,sc:`法庭`},weather:{tc:`天氣`,sc:`天气`}},o={path:`/news/:category?/:language?`,categories:[`traditional-media`],example:`/tvb/news`,parameters:{category:`分类，见下表，默认为要聞`,language:`语言，见下表`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`tvb.com/:language/:category`,`tvb.com/`]}],name:`新闻`,maintainers:[`nczitzk`],handler:s,description:`分类

| 要聞  | 快訊    | 港澳  | 兩岸         | 國際  | 財經    | 體育   | 法庭       | 天氣    |
| ----- | ------- | ----- | ------------ | ----- | ------- | ------ | ---------- | ------- |
| focus | instant | local | greaterchina | world | finance | sports | parliament | weather |

  语言

| 繁 | 简 |
| -- | -- |
| tc | sc |`};async function s(o){let s=o.req.param(`category`)??`focus`,c=o.req.param(`language`)??`tc`,l=`https://inews-api.tvb.com`,u=`${l}/news/entry/category`,d=`${l}/${c}/${s}`,f=await r({method:`get`,url:u,searchParams:{id:s,lang:c,page:1,limit:o.req.query(`limit`)??50,country:`HK`}}),p=f.data.content.map(r=>({title:r.title,link:`https://news.tvb.com/${c}/${s}/${r.id}`,pubDate:t(r.publish_datetime),category:[...r.category.map(e=>e.title),...r.tags],description:e(i.join(n,`templates/description-18071f47.art`),{description:r.desc,images:r.media.image?.map(e=>e.thumbnail.replace(/_\d+x\d+\./,`.`))??[]})}));return{title:`${f.data.meta.title} - ${a[s][c]}`,link:d,item:p}}export{o as route};