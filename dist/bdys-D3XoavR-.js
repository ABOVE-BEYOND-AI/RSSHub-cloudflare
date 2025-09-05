import{config as e}from"./config-HRWLmo66.js";import"./logger-DHpG8Bim.js";import"./helpers-LVq640iW.js";import{cache_default as t}from"./cache-C3AIQtoX.js";import{art as n}from"./render-DE4LRFBD.js";import{parseDate as r}from"./parse-date-DHsdom8D.js";import"./ofetch-DRl42yaJ.js";import{__dirname as i}from"./esm-shims-BDPl6Msv.js";import{got_default as a}from"./got-BaOFZRd4.js";import{timezone as o}from"./timezone-BrxBCotj.js";import{config_not_found_default as s}from"./config-not-found-B7nOMdXp.js";import c from"node:path";import{load as l}from"cheerio";import u from"p-map";const d=new Set([`52bdys.com`,`bde4.icu`,`bdys01.com`]),f={path:`/:caty?/:type?/:area?/:year?/:order?`,categories:[`multimedia`],example:`/bdys`,parameters:{caty:"影视类型，见下表，默认为 `all` 即不限",type:"资源分类，见下表，默认为 `all` 即不限",area:"制片地区，见下表，默认为 `all` 即不限",year:"上映时间，此处填写年份不小于2000，默认为 `all` 即不限",order:`影视排序，见下表，默认为更新时间`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!0,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`首页`,maintainers:[`nczitzk`],handler:p,description:`#### 资源分类

| 不限 | 电影 | 电视剧 |
| ---- | ---- | ------ |
| all  | 0    | 1      |

#### 影视类型

| 不限 | 动作    | 爱情   | 喜剧 | 科幻   | 恐怖   |
| ---- | ------- | ------ | ---- | ------ | ------ |
| all  | dongzuo | aiqing | xiju | kehuan | kongbu |

| 战争      | 武侠  | 魔幻   | 剧情   | 动画    | 惊悚     |
| --------- | ----- | ------ | ------ | ------- | -------- |
| zhanzheng | wuxia | mohuan | juqing | donghua | jingsong |

| 3D | 灾难   | 悬疑   | 警匪    | 文艺  | 青春     |
| -- | ------ | ------ | ------- | ----- | -------- |
| 3D | zainan | xuanyi | jingfei | wenyi | qingchun |

| 冒险    | 犯罪   | 纪录 | 古装     | 奇幻   | 国语  |
| ------- | ------ | ---- | -------- | ------ | ----- |
| maoxian | fanzui | jilu | guzhuang | qihuan | guoyu |

| 综艺   | 历史  | 运动    | 原创压制   |
| ------ | ----- | ------- | ---------- |
| zongyi | lishi | yundong | yuanchuang |

| 美剧  | 韩剧  | 国产电视剧 | 日剧 | 英剧   | 德剧 |
| ----- | ----- | ---------- | ---- | ------ | ---- |
| meiju | hanju | guoju      | riju | yingju | deju |

| 俄剧 | 巴剧 | 加剧  | 西剧    | 意大利剧 | 泰剧  |
| ---- | ---- | ----- | ------- | -------- | ----- |
| eju  | baju | jiaju | spanish | yidaliju | taiju |

| 港台剧    | 法剧 | 澳剧 |
| --------- | ---- | ---- |
| gangtaiju | faju | aoju |

#### 制片地区

| 大陆 | 中国香港 | 中国台湾 |
| ---- | -------- | -------- |

| 美国 | 英国 | 日本 | 韩国 | 法国 |
| ---- | ---- | ---- | ---- | ---- |

| 印度 | 德国 | 西班牙 | 意大利 | 澳大利亚 |
| ---- | ---- | ------ | ------ | -------- |

| 比利时 | 瑞典 | 荷兰 | 丹麦 | 加拿大 | 俄罗斯 |
| ------ | ---- | ---- | ---- | ------ | ------ |

#### 影视排序

| 更新时间 | 豆瓣评分 |
| -------- | -------- |
| 0        | 1        |`};async function p(f){let p=f.req.param(`caty`)||`all`,m=f.req.param(`type`)||`all`,h=f.req.param(`area`)||`all`,g=f.req.param(`year`)||`all`,_=f.req.param(`order`)||`0`,v=f.req.query(`domain`)||`bdys01.com`;if(!e.feature.allow_user_supply_unsafe_domain&&!d.has(new URL(`https://${v}`).hostname))throw new s(`This RSS is disabled unless 'ALLOW_USER_SUPPLY_UNSAFE_DOMAIN' is set to 'true'.`);let y=`https://www.${v}`,b=`${y}/s/${p}?${m===`all`?``:`&type=`+m}${h===`all`?``:`&area=`+h}${g===`all`?``:`&year=`+g}&order=${_}`,x=await a({method:`get`,url:b}),S=l(x.data),C=``,w=S(`.card-body .card a`).slice(0,15).toArray().map(e=>{e=S(e);let t=e.attr(`href`).split(`;jsessionid=`);C=t[1];let n=e.next();return{title:n.find(`h3`).text(),link:`${y}${t[0]}`,pubDate:r(n.find(`.text-muted`).text())}}),T={cookie:`JSESSIONID=${C}`},E=await u(w,e=>t.tryGet(e.link,async()=>{let t=await a({method:`get`,url:e.link,headers:T}),s=await a({method:`get`,url:`${y}/downloadInfo/list?mid=${e.link.split(`/`)[4].split(`.`)[0]}`,headers:T}),u=l(t.data);u(`svg`).remove();let d=u(`.download-list .list-group`);return e.description=n(c.join(i,`templates/desc-7474f0b1.art`),{info:u(`.row.mt-3`).html(),synopsis:u(`#synopsis`).html(),links:s.data,torrents:d.html()}),e.pubDate=o(r(u(`.bg-purple-lt`).text().replace(`更新时间：`,``)),8),e.guid=`${e.link}#${u(`.card h1`).text()}`,e.enclosure_url=d.html()?`${y}${d.find(`a`).first().attr(`href`)}`:s.data.pop().url,e.enclosure_type=`application/x-bittorrent`,e}),{concurrency:1});return{title:`哔嘀影视`,link:b,item:E}}export{f as route};