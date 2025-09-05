import"./config-HRWLmo66.js";import"./logger-DHpG8Bim.js";import"./helpers-LVq640iW.js";import{cache_default as e}from"./cache-C3AIQtoX.js";import{art as t}from"./render-DE4LRFBD.js";import{parseDate as n}from"./parse-date-DHsdom8D.js";import"./ofetch-DRl42yaJ.js";import{__dirname as r}from"./esm-shims-BDPl6Msv.js";import{got_default as i}from"./got-BaOFZRd4.js";import{timezone as a}from"./timezone-BrxBCotj.js";import o from"node:path";import{load as s}from"cheerio";const c={"":{id:`BAI5E21O`,title:`首页`},qsyk:{id:`BD21K0DL`,title:`轻松一刻`},cz:{id:`CICMICLU`,title:`槽值`},rj:{id:`CICMOMBL`,title:`人间`},dgxm:{id:`CICMPVC5`,title:`大国小民`},ssyg:{id:`CICMLCOU`,title:`三三有梗`},sd:{id:`D551V75C`,title:`数读`},kk:{id:`D55253RH`,title:`看客`},xhx:{id:`D553A53L`,title:`下划线`},txs:{id:`D553PGHQ`,title:`谈心社`},dd:{id:`CICMS5BI`,title:`哒哒`},pbgl:{id:`CQ9UDVKO`,title:`胖编怪聊`},qyd:{id:`CQ9UJIJN`,title:`曲一刀`},jrzs:{id:`BD284UM8`,title:`今日之声`},lc:{id:`CICMMGBH`,title:`浪潮`},fd:{id:`D5543R68`,title:`沸点`}},l={path:`/exclusive/:id?`,categories:[`new-media`],example:`/163/exclusive/qsyk`,parameters:{id:`栏目, 默认为首页`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`3g.163.com/touch/exclusive/sub/:id`]}],name:`栏目`,maintainers:[`nczitzk`],handler:u,description:`| 分类     | 编号 |
| -------- | ---- |
| 首页     |      |
| 轻松一刻 | qsyk |
| 槽值     | cz   |
| 人间     | rj   |
| 大国小民 | dgxm |
| 三三有梗 | ssyg |
| 数读     | sd   |
| 看客     | kk   |
| 下划线   | xhx  |
| 谈心社   | txs  |
| 哒哒     | dd   |
| 胖编怪聊 | pbgl |
| 曲一刀   | qyd  |
| 今日之声 | jrzs |
| 浪潮     | lc   |
| 沸点     | fd   |`};async function u(l){let u=l.req.param(`id`)??``,d=`https://3g.163.com`,f=`${d}/touch/exclusive${u?`/sub/${u}`:``}`,p=`${d}/touch/reconstruct/article/list/${c[u].id}wangning/0-20.html`,m=await i({method:`get`,url:p}),h=JSON.parse(m.data.match(/^artiList\((.*)\)$/)[1])[`${c[u].id}wangning`],g=h.map(e=>({title:e.title,author:e.source,link:e.skipURL||e.url||`${d}/dy/article/${e.docid}.html`,pubDate:a(n(e.ptime),8),videoId:e.skipType===`video`?e.stitle:``}));return g=await Promise.all(g.map(n=>e.tryGet(n.link,async()=>{try{if(n.videoId){let e=await i({method:`get`,url:`${d}/touch/video/detail/jsonp/VIA8K0PTB.html?callback=videoList`}),a=JSON.parse(e.data.match(/^videoList\((.*)\)$/)[1])?.mp4_url;n.description=t(o.join(r,`templates/exclusive-d4c229b8.art`),{video:a})}else{let e=await i({method:`get`,url:n.link}),a=s(e.data);a(`.m-linkCard`).remove(),a(`.m-photo`).each(function(){a(this).html(t(o.join(r,`templates/exclusive-d4c229b8.art`),{image:a(this).find(`img`).attr(`data-src`)}))}),n.description=a(`.article-body`).html()}}catch{}return delete n.videoId,n}))),{title:`网易独家 - ${c[u].title}`,link:f,item:g}}export{l as route};