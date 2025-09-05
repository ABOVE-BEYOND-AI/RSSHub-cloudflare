import"./config-HRWLmo66.js";import"./logger-DHpG8Bim.js";import"./helpers-LVq640iW.js";import{cache_default as e}from"./cache-C3AIQtoX.js";import{art as t}from"./render-DE4LRFBD.js";import{parseDate as n}from"./parse-date-DHsdom8D.js";import"./ofetch-DRl42yaJ.js";import{__dirname as r}from"./esm-shims-BDPl6Msv.js";import{got_default as i}from"./got-BaOFZRd4.js";import a from"node:path";import{load as o}from"cheerio";const s={article:2,report:3,visualization:4},c={path:`/dt/:column?/:category?`,categories:[`traditional-media`],example:`/yicai/dt/article`,parameters:{column:`栏目，见下表，默认为文章`,category:`分类，见下表，默认为全部`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`DT 财经`,maintainers:[`nczitzk`],handler:l,description:`#### [文章](https://dt.yicai.com/article)

| 分类     | ID         |
| -------- | ---------- |
| 全部     | article/0  |
| 新流行   | article/31 |
| 新趋势   | article/32 |
| 商业黑马 | article/33 |
| 新品     | article/34 |
| 营销     | article/35 |
| 大公司   | article/36 |
| 城市生活 | article/38 |

#### [报告](https://dt.yicai.com/report)

| 分类       | ID        |
| ---------- | --------- |
| 全部       | report/0  |
| 人群观念   | report/9  |
| 人群行为   | report/22 |
| 美妆个护   | report/23 |
| 3C 数码    | report/24 |
| 营销趋势   | report/25 |
| 服饰鞋包   | report/27 |
| 互联网     | report/28 |
| 城市与居住 | report/29 |
| 消费趋势   | report/30 |
| 生活趋势   | report/37 |

#### [可视化](https://dt.yicai.com/visualization)

| 分类     | ID               |
| -------- | ---------------- |
| 全部     | visualization/0  |
| 新流行   | visualization/39 |
| 新趋势   | visualization/40 |
| 商业黑马 | visualization/41 |
| 新品     | visualization/42 |
| 营销     | visualization/43 |
| 大公司   | visualization/44 |
| 城市生活 | visualization/45 |`};async function l(c){let{column:l=`article`,category:u=`0`}=c.req.param(),d=c.req.query(`limit`)?Number.parseInt(c.req.query(`limit`),10):30,f=`https://dt.yicai.com`,p=new URL(`api/getNewsList`,f).href,m=new URL(l,f).href,{data:h}=await i(p,{searchParams:{page:1,rid:s[l],cid:u,pageSize:d}}),g=h.data.data.slice(0,d).map(e=>{let i=e.originVideo,o=i.split(/\./).pop();return{title:e.newstitle,link:new URL(e.url,f).href,description:t(a.join(r,`templates/description-55895928.art`),{image:{src:e.originPic,alt:e.newstitle},intro:e.newsnotes}),author:e.creatername,category:[e.channelrootname,e.channelname,e.NewsTypeName].filter(Boolean),guid:`yicai-dt-${e.newsid}`,pubDate:n(e.utc_createdate),updated:n(e.utc_lastdate),enclosure_url:i,enclosure_type:i?`${o===`mp4`?`video`:`application`}/${o}`:void 0,upvotes:e.newsscore??0}});g=await Promise.all(g.map(n=>e.tryGet(n.link,async()=>{let{data:e}=await i(n.link),s=o(e);return s(`div.logintips`).remove(),s(`img`).each((e,n)=>{n=s(n),s(n).replaceWith(t(a.join(r,`templates/description-55895928.art`),{image:{src:n.prop(`data-original`)??n.prop(`src`),alt:n.prop(`alt`),width:n.prop(`width`),height:n.prop(`height`)}}))}),n.description+=t(a.join(r,`templates/description-55895928.art`),{description:s(`div.txt`).html()}),n.author=s(`div.authortime h3`).text(),n})));let{data:_}=await i(m),v=o(_),y=v(`title`).text(),b=v(`div.logo a img`).prop(`src`),x=new URL(v(`link[rel="shortcut icon"]`).prop(`href`),f).href;return{item:g,title:`${v(`a[data-cid="${u}"]`).text()}${y}`,link:m,description:v(`meta[name="keywords"]`).prop(`content`),language:`zh`,image:b,icon:x,logo:x,subtitle:v(`meta[name="description"]`).prop(`content`),author:y.split(/_/).pop(),allowEmpty:!0}}export{c as route};