import"./config-HRWLmo66.js";import"./logger-DHpG8Bim.js";import"./helpers-LVq640iW.js";import{cache_default as e}from"./cache-C3AIQtoX.js";import{art as t}from"./render-DE4LRFBD.js";import{parseDate as n}from"./parse-date-DHsdom8D.js";import"./ofetch-DRl42yaJ.js";import{__dirname as r}from"./esm-shims-BDPl6Msv.js";import{got_default as i}from"./got-BaOFZRd4.js";import{timezone as a}from"./timezone-BrxBCotj.js";import o from"node:path";import{load as s}from"cheerio";import c from"iconv-lite";const l={path:`/list/:id?`,categories:[`bbs`],example:`/8264/list/751`,parameters:{id:`列表 id，见下表，默认为 751，即热门推荐`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`列表`,maintainers:[`nczitzk`],handler:u,description:`| 热门推荐 | 户外知识 | 户外装备 |
| -------- | -------- | -------- |
| 751      | 238      | 204      |

<details>
<summary>更多列表</summary>

#### 热门推荐

| 业界 | 国际 | 专访 | 图说 | 户外 | 登山 | 攀岩 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 489  | 733  | 746  | 902  | 914  | 934  | 935  |

#### 户外知识

| 徒步 | 露营 | 安全急救 | 领队 | 登雪山 |
| ---- | ---- | -------- | ---- | ------ |
| 242  | 950  | 931    | 920  | 915  |

| 攀岩 | 骑行 | 跑步 | 滑雪 | 水上运动 |
| ---- | ---- | ---- | ---- | -------- |
| 916  | 917  | 918  | 919  | 921    |

| 钓鱼 | 潜水 | 攀冰 | 冲浪 | 网球 |
| ---- | ---- | ---- | ---- | ---- |
| 951  | 952  | 953  | 966  | 967  |

| 绳索知识 | 高尔夫 | 马术 | 户外摄影 | 羽毛球 |
| -------- | ------ | ---- | -------- | ------ |
| 968    | 969  | 970  | 973    | 971  |

| 游泳 | 溯溪 | 健身 | 瑜伽 |
| ---- | ---- | ---- | ---- |
| 974  | 975  | 976  | 977  |

#### 户外装备

| 服装 | 冲锋衣 | 抓绒衣 | 皮肤衣 | 速干衣 |
| ---- | ------ | ------ | ------ | ------ |
| 209  | 923  | 924  | 925  | 926  |

| 羽绒服 | 软壳 | 户外鞋 | 登山鞋 | 徒步鞋 |
| ------ | ---- | ------ | ------ | ------ |
| 927  | 929  | 211  | 928  | 930  |

| 越野跑鞋 | 溯溪鞋 | 登山杖 | 帐篷 | 睡袋 |
| -------- | ------ | ------ | ---- | ---- |
| 933    | 932  | 220  | 208  | 212  |

| 炉具 | 灯具 | 水具 | 面料 | 背包 |
| ---- | ---- | ---- | ---- | ---- |
| 792  | 218  | 219  | 222  | 207  |

| 防潮垫 | 电子导航 | 冰岩绳索 | 综合装备 |
| ------ | -------- | -------- | -------- |
| 214  | 216    | 215    | 223    |
</details>`};async function u(l){let{id:u=`751`}=l.req.param(),d=l.req.query(`limit`)?Number.parseInt(l.req.query(`limit`),10):30,f=`https://www.8264.com`,p=new URL(`list/${u}`,f).href,{data:m}=await i(p,{responseType:`buffer`}),h=s(c.decode(m,`gbk`));h(`div.newslist_info`).remove();let g=h(`div.newlist_r, div.newslist_r, div.bbslistone_name, dt`).find(`a`).slice(0,d).toArray().map(e=>{e=h(e);let t=e.prop(`href`);return{title:e.text(),link:t.startsWith(`http`)?t:new URL(t,f).href}});g=await Promise.all(g.map(l=>e.tryGet(l.link,async()=>{let{data:e}=await i(l.link,{responseType:`buffer`}),u=s(c.decode(e,`gbk`));u(`a.syq, a.xlsj, a.titleoverflow200, #fjump`).remove(),u(`i.pstatus`).remove(),u(`div.crly`).remove();let d=u(`span.pub-time`).text()||u(`span.fby span`).first().prop(`title`)||u(`span.fby`).first().text().split(`发表于`).pop().trim();return u(`img`).each(function(){u(this).replaceWith(t(o.join(r,`templates/description-f148da9c.art`),{image:{src:u(this).prop(`file`),alt:u(this).prop(`alt`)}}))}),l.title=u(`h1`).first().text(),l.description=u(`div.art-content, td.t_f`).first().html(),l.author=u(`a.user-name, #author`).first().text(),l.category=u(`div.fl_dh a, div.site a`).toArray().map(e=>u(e).text().trim()),l.pubDate=a(n(d,[`YYYY-MM-DD HH:mm`,`YYYY-M-D HH:mm`]),8),l})));let _=h(`meta[name="description"]`).prop(`content`).trim(),v=new URL(`favicon`,f).href;return{item:g,title:`${h(`span.country, h2`).text()} - ${_.split(`,`).pop()}`,link:p,description:_,language:`zh-cn`,icon:v,logo:v,subtitle:h(`meta[name="keywords"]`).prop(`content`).trim(),author:h(`meta[name="author"]`).prop(`content`)}}export{l as route};