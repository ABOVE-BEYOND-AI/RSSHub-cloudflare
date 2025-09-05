import"./config-HRWLmo66.js";import"./logger-DHpG8Bim.js";import"./helpers-LVq640iW.js";import"./cache-C3AIQtoX.js";import{art as e}from"./render-DE4LRFBD.js";import{parseDate as t}from"./parse-date-DHsdom8D.js";import"./ofetch-DRl42yaJ.js";import{__dirname as n}from"./esm-shims-BDPl6Msv.js";import{got_default as r}from"./got-BaOFZRd4.js";import{timezone as i}from"./timezone-BrxBCotj.js";import{categories as a,convertToQueryString as o,getInfo as s,processItems as c,rootUrl as l,title as u}from"./util-B7obuG2S.js";import d from"node:path";import{load as f}from"cheerio";const p={path:`/:category{.+}?`,name:`分类`,parameters:{category:`分类，见下表，默认为最新`},example:`/mydrivers/bcid/801`,maintainers:[`kt286`,`nczitzk`],handler:m,radar:[{source:[`m.mydrivers.com/`],target:`/zhibo`}],description:`
#### 板块

| 电脑     | 手机     | 汽车     | 业界     | 游戏     |
| -------- | -------- | -------- | -------- | -------- |
| bcid/801 | bcid/802 | bcid/807 | bcid/803 | bcid/806 |

#### 话题

| 科学     | 排行     | 评测     | 一图     |
| -------- | -------- | -------- | -------- |
| tid/1000 | tid/1001 | tid/1002 | tid/1003 |

#### 品牌

| 安卓     | 阿里     | 微软    | 百度    | PS5       | Xbox     | 华为     |
| -------- | -------- | ------- | ------- | --------- | -------- | -------- |
| icid/121 | icid/270 | icid/90 | icid/67 | icid/6950 | icid/194 | icid/136 |

| 小米      | VIVO     | 三星     | 魅族     | 一加     | 比亚迪   | 小鹏      |
| --------- | -------- | -------- | -------- | -------- | -------- | --------- |
| icid/9355 | icid/288 | icid/154 | icid/140 | icid/385 | icid/770 | icid/7259 |

| 蔚来      | 理想       | 奔驰     | 宝马     | 大众     |
| --------- | ---------- | -------- | -------- | -------- |
| icid/7318 | icid/12947 | icid/429 | icid/461 | icid/481 |
`};async function m(p){let{category:m=`new`}=p.req.param(),h=``;/^(\w+\/\w+)$/.test(m)||(h=`${u} - ${Object.hasOwn(a,m)?a[m]:a[Object.keys(a)[0]]}`,m=`ac/${m}`);let g=p.req.query(`limit`)?Number.parseInt(p.req.query(`limit`),10):20,_=o(m),v=new URL(`newsclass.aspx${_}`,l).href,y=new URL(`m/newslist.ashx${_}`,l).href,{data:b}=await r(y),x=f(b),S=x(`li[data-id]`).slice(0,g).toArray().map(r=>(r=x(r),{title:r.find(`div.news_title`).text(),link:new URL(r.find(`div.news_title span.newst a`).prop(`href`),l).href,description:e(d.join(n,`templates/description-8ef00cc6.art`),{image:r.find(`a.newsimg img`).prop(`src`)}),author:r.find(`p.tname`).text(),guid:r.prop(`data-id`),pubDate:i(t(r.find(`p.ttime`).text()),8),comments:r.find(`a.tpinglun`).text()?Number.parseInt(r.find(`a.tpinglun`).text(),10):0}));return S=await c(S),{...await s(v),...h?{title:h}:{},item:S}}export{p as route};