import"./config-HRWLmo66.js";import"./logger-DHpG8Bim.js";import"./helpers-LVq640iW.js";import{art as e}from"./render-DE4LRFBD.js";import{parseDate as t}from"./parse-date-DHsdom8D.js";import"./ofetch-DRl42yaJ.js";import{__dirname as n}from"./esm-shims-BDPl6Msv.js";import{got_default as r}from"./got-BaOFZRd4.js";import{timezone as i}from"./timezone-BrxBCotj.js";import{invalid_parameter_default as a}from"./invalid-parameter-CfUmvEUg.js";import{isValidHost as o}from"./valid-host-JqD2S4D4.js";import s from"node:path";import{load as c}from"cheerio";const l={path:`/activity/:category?/:language?/:latestAdditions?/:latestEdits?/:latestAlerts?/:latestPictures?`,categories:[`shopping`],example:`/myfigurecollection/activity`,parameters:{category:`Category, Figures by default`,language:"Language, as above, `en` by default",latestAdditions:"Latest Additions, on as `1` by default, off as `0`",latestEdits:"Changes, on as `1` by default, off as `0`",latestAlerts:"Alerts, on as `1` by default, off as `0`",latestPictures:"Pictures, on as `1` by default, off as `0`"},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`zh.myfigurecollection.net/browse`,`zh.myfigurecollection.net/`],target:`/:category?/:language?`}],name:`Activity`,maintainers:[`nczitzk`],handler:u,url:`zh.myfigurecollection.net/browse`,description:`Category

| Figures | Goods | Media |
| ------- | ----- | ----- |
| 0       | 1     | 2     |

  Language

| Id | Language   |
| -- | ---------- |
|    | en         |
| de | Deutsch    |
| es | Español    |
| fi | Suomeksi   |
| fr | Français   |
| it | Italiano   |
| ja | 日本語     |
| nl | Nederlands |
| no | Norsk      |
| pl | Polski     |
| pt | Português  |
| ru | Русский    |
| sv | Svenska    |
| zh | 中文       |`};async function u(l){let u=l.req.param(`category`)??`-1`,d=l.req.param(`language`)??``,f=l.req.param(`latestAdditions`)??`1`,p=l.req.param(`latestEdits`)??`1`,m=l.req.param(`latestAlerts`)??`1`,h=l.req.param(`latestPictures`)??`1`;if(d&&!o(d))throw new a(`Invalid language`);let g=`https://${d===`en`||d===``?``:`${d}.`}myfigurecollection.net`,_=`${g}/browse.v4.php?mode=activity&latestAdditions=${f}&latestEdits=${p}&latestAlerts=${m}&latestPictures=${h}&rootId=${u}`,v=await r({method:`get`,url:_}),y=c(v.data),b=y(`.activity-wrapper`).toArray().map(r=>(r=y(r),{title:`${r.find(`.activity-label`).text().split(` • `)[0]}: ${r.find(`.stamp-anchor`).text()}`,link:`${g}${r.find(`.stamp-anchor .tbx-tooltip`).attr(`href`)}`,pubDate:i(t(r.find(`.activity-time span`).attr(`title`)),0),author:r.find(`.user-anchor`).text(),description:e(s.join(n,`templates/activity-e381f9d5.art`),{changelog:r.find(`.changelog`).text(),pictures:r.find(`.picture-icon`).toArray().map(e=>y(e).html().match(/url\((.*)\)/)[1].replace(/\/thumbnails/,``))})}));return{title:y(`title`).text().replace(/ \(.*\)/,``),link:_,item:b}}export{l as route};