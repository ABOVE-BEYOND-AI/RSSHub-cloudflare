import"./config-HRWLmo66.js";import"./logger-DHpG8Bim.js";import"./helpers-LVq640iW.js";import{cache_default as e}from"./cache-C3AIQtoX.js";import{art as t}from"./render-DE4LRFBD.js";import{parseDate as n}from"./parse-date-DHsdom8D.js";import"./ofetch-DRl42yaJ.js";import{__dirname as r}from"./esm-shims-BDPl6Msv.js";import{got_default as i}from"./got-BaOFZRd4.js";import{timezone as a}from"./timezone-BrxBCotj.js";import o from"node:path";const s={path:[`/column/:id?`,`/:id?`],categories:[`traditional-media`],example:`/cankaoxiaoxi/column/diyi`,parameters:{id:"栏目 id，默认为 `diyi`，即第一关注"},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`栏目`,maintainers:[`yuxinliu-alex`,`nczitzk`],handler:c,description:`| 栏目           | id       |
| -------------- | -------- |
| 第一关注       | diyi     |
| 中国           | zhongguo |
| 国际           | gj       |
| 观点           | guandian |
| 锐参考         | ruick    |
| 体育健康       | tiyujk   |
| 科技应用       | kejiyy   |
| 文化旅游       | wenhualy |
| 参考漫谈       | cankaomt |
| 研究动态       | yjdt     |
| 海外智库       | hwzk     |
| 业界信息・观点 | yjxx     |
| 海外看中国城市 | hwkzgcs  |
| 译名趣谈       | ymymqt   |
| 译名发布       | ymymfb   |
| 双语汇         | ymsyh    |
| 参考视频       | video    |
| 军事           | junshi   |
| 参考人物       | cankaorw |`};async function c(s){let c=s.req.param(`id`)??`diyi`,l=s.req.query(`limit`)?Number.parseInt(s.req.query(`limit`)):50,u=`https://china.cankaoxiaoxi.com`,d=`${u}/json/channel/${c}/list.json`,f=`${u}/json/channel/${c}.channeljson`,p=`${u}/#/generalColumns/${c}`,m=await i({method:`get`,url:d}),h=await i({method:`get`,url:f}),g=m.data.list.slice(0,l).map(e=>({title:e.data.title,author:e.data.userName,category:e.data.channelName,pubDate:a(n(e.data.publishTime),8),link:e.data.moVideoPath?e.data.sourceUrl:`${u}/json/content/${e.data.url.match(/\/pages\/(.*?)\.html/)[1]}.detailjson`,video:e.data.moVideoPath,cover:e.data.mCoverImg}));return g=await Promise.all(g.map(n=>e.tryGet(n.link,async()=>{if(n.video)n.description=t(o.join(r,`templates/description-5183a709.art`),{video:n.video,cover:n.cover});else{let e=await i({method:`get`,url:n.link}),t=e.data;n.link=`${u}/#/detailsPage/${c}/${t.id}/1/${t.publishTime.split(` `)[0]}`,n.description=t.txt}return n}))),{title:`参考消息 - ${h.data.name}`,link:p,description:`参考消息`,language:`zh-cn`,item:g}}export{s as route};