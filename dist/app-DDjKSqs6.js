import"./config-HRWLmo66.js";import"./logger-DHpG8Bim.js";import"./helpers-LVq640iW.js";import{cache_default as e}from"./cache-C3AIQtoX.js";import{art as t}from"./render-DE4LRFBD.js";import{parseDate as n}from"./parse-date-DHsdom8D.js";import"./ofetch-DRl42yaJ.js";import{__dirname as r}from"./esm-shims-BDPl6Msv.js";import{got_default as i}from"./got-BaOFZRd4.js";import{timezone as a}from"./timezone-BrxBCotj.js";import o from"node:path";import{load as s}from"cheerio";const c={path:`/app/:column?`,categories:[`traditional-media`],example:`/gzdaily/app/74`,parameters:{column:`栏目 ID，点击对应栏目后在地址栏找到`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`客户端`,maintainers:[`TimWu007`],handler:l,description:`::: tip
  在北京时间深夜可能无法获取内容。
:::

  常用栏目 ID：

| 栏目名 | ID   |
| ------ | ---- |
| 首页   | 74   |
| 时局   | 374  |
| 广州   | 371  |
| 大湾区 | 397  |
| 城区   | 2980 |`};async function l(c){let l=c.req.param(`column`)??74,u=`https://app.gzdaily.cn/app_if/getArticles?columnId=${l}&page=1`,{data:d}=await i(u),f=d.list.filter(e=>e.newstype===0).map(e=>({title:e.title,description:t(o.join(r,`templates/description-60b509f9.art`),{thumb:e.picBig}),pubDate:a(n(e.publishtime),8),link:e.shareUrl,colName:e.colName,author:e.arthorName})),p=``,m=await Promise.all(f.map(t=>e.tryGet(t.link,async()=>{let e=await i({method:`get`,url:t.link}),n=s(e.data);return p=p===``?t.colName:p,n(`.abstract`).text()&&(n(`.abstract`).find(`span`).remove(),t.description+=`<blockquote>`+n(`.abstract`).text()+`</blockquote>`),t.description+=n(`.article`).html()??``,t})));return{title:`广州日报客户端 - ${p}`,link:`https://www.gzdaily.cn/amucsite/web/index.html#/home/${l}`,item:m}}export{c as route};