import"./config-HRWLmo66.js";import"./logger-DHpG8Bim.js";import{cache_default as e}from"./cache-C3AIQtoX.js";import{art as t}from"./render-DE4LRFBD.js";import{ofetch_default as n}from"./ofetch-DRl42yaJ.js";import{__dirname as r}from"./esm-shims-BDPl6Msv.js";import{ViewType as i}from"./types-D9T3SQ-7.js";import a from"node:path";import{load as o}from"cheerio";const s=async i=>{let{category:s=`0`,sort:c=`latest`}=i.req.param(),l=Number.parseInt(i.req.query(`limit`)??`30`,10),u=`https://koyso.to`,d=new URL(`?${s===`0`?``:`category=${s}&`}sort=${c}`,u).href,f=await n(d),p=o(f),m=p(`html`).attr(`lang`)??`en`,h=[];h=p(`a.game_item`).slice(0,l).toArray().map(e=>{let n=p(e),i=n.find(`div.game_info`).text(),o=n.find(`div.game_media img`).attr(`data-src`),s=t(a.join(r,`templates/description-463c9506.art`),{images:o?[{src:o,alt:i}]:void 0}),c=n.attr(`href`),l={title:i,description:s,link:c?new URL(c,u).href:void 0,content:{html:s,text:s},image:o,banner:o,language:m};return l}),h=await Promise.all(h.map(t=>t.link?e.tryGet(t.link,async()=>{let e=await n(t.link),r=o(e);r(`div.ind`).remove(),r(`div.download_div`).remove();let i=r(`h1.content_title`).text();r(`h1.content_title`).remove();let a=t.description+(r(`div.game_content`).html()||``),s={title:i,description:a,content:{html:a,text:a},language:m};return{...t,...s}}):t));let g=p(`ul.category li#category_${s}`).text(),_=p(`div.genres_content ul li.${c}`).text();return{title:`${p(`title`).text()} - ${g} - ${_}`,description:p(`meta[name="description"]`).attr(`content`),link:d,item:h,allowEmpty:!0,language:m,id:d}},c={path:`/:category?/:sort?`,name:`游戏`,url:`koyso.to`,maintainers:[`nczitzk`],handler:s,example:`/koyso/0/latest`,parameters:{category:{description:"排序，默认为 `0`，即全部，可在对应分类页 URL 中找到",options:[{label:`全部游戏`,value:`0`},{label:`动作游戏`,value:`3`},{label:`冒险游戏`,value:`5`},{label:`绅士游戏`,value:`7`},{label:`射击游戏`,value:`1`},{label:`休闲游戏`,value:`2`},{label:`体育竞速`,value:`4`},{label:`模拟经营`,value:`6`},{label:`角色扮演`,value:`8`},{label:`策略游戏`,value:`9`},{label:`格斗游戏`,value:`10`},{label:`恐怖游戏`,value:`11`},{label:`即时战略`,value:`12`},{label:`卡牌游戏`,value:`13`},{label:`独立游戏`,value:`14`},{label:`局域网联机`,value:`15`}]},sort:{description:"排序，默认为 `latest`，即最新，可在对应页 URL 中找到",options:[{label:`热度`,value:`views`},{label:`最新`,value:`latest`}]}},description:`:::tip
订阅 [最新动作游戏](https://koyso.to/?category=3&sort=latest)，其源网址为 \`https://koyso.to/?category=3&sort=latest\`，请参考该 URL 指定部分构成参数，此时路由为 [\`/koyso/3/latest\`](https://koyso.to/?category=3&sort=latest)。
:::

#### 分类

| 分类                                        | ID                                |
| ------------------------------------------- | --------------------------------- |
| [全部游戏](https://koyso.to/)               | [0](https://rsshub.app/koyso/0)   |
| [动作游戏](https://koyso.to/?category=3)    | [3](https://rsshub.app/koyso/3)   |
| [冒险游戏](https://koyso.to/?category=5)    | [5](https://rsshub.app/koyso/5)   |
| [绅士游戏](https://koyso.to/?category=7)    | [7](https://rsshub.app/koyso/7)   |
| [射击游戏](https://koyso.to/?category=1)    | [1](https://rsshub.app/koyso/1)   |
| [休闲游戏](https://koyso.to/?category=2)    | [2](https://rsshub.app/koyso/2)   |
| [体育竞速](https://koyso.to/?category=4)    | [4](https://rsshub.app/koyso/4)   |
| [模拟经营](https://koyso.to/?category=6)    | [6](https://rsshub.app/koyso/6)   |
| [角色扮演](https://koyso.to/?category=8)    | [8](https://rsshub.app/koyso/8)   |
| [策略游戏](https://koyso.to/?category=9)    | [9](https://rsshub.app/koyso/9)   |
| [格斗游戏](https://koyso.to/?category=10)   | [10](https://rsshub.app/koyso/10) |
| [恐怖游戏](https://koyso.to/?category=11)   | [11](https://rsshub.app/koyso/11) |
| [即时战略](https://koyso.to/?category=12)   | [12](https://rsshub.app/koyso/12) |
| [卡牌游戏](https://koyso.to/?category=13)   | [13](https://rsshub.app/koyso/13) |
| [独立游戏](https://koyso.to/?category=14)   | [14](https://rsshub.app/koyso/14) |
| [局域网联机](https://koyso.to/?category=15) | [15](https://rsshub.app/koyso/15) |

#### 排序

| 排序                                  | ID                                          |
| ------------------------------------- | ------------------------------------------- |
| [热度](https://koyso.to/?sort=views)  | [views](https://rsshub.app/koyso/0/views)   |
| [最新](https://koyso.to/?sort=latest) | [latest](https://rsshub.app/koyso/0/latest) |
`,categories:[`game`],features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportRadar:!0,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`koyso.to`],target:(e,t)=>{let n=new URL(t),r=n.searchParams.get(`category`)??void 0,i=n.searchParams.get(`sort`)??void 0;return`/koyso${r?`/${r}`:`0`}${i?`/${i}`:``}`}},{title:`全部游戏`,source:[`koyso.to`],target:`/0`},{title:`动作游戏`,source:[`koyso.to`],target:`/3`},{title:`冒险游戏`,source:[`koyso.to`],target:`/5`},{title:`绅士游戏`,source:[`koyso.to`],target:`/7`},{title:`射击游戏`,source:[`koyso.to`],target:`/1`},{title:`休闲游戏`,source:[`koyso.to`],target:`/2`},{title:`体育竞速`,source:[`koyso.to`],target:`/4`},{title:`模拟经营`,source:[`koyso.to`],target:`/6`},{title:`角色扮演`,source:[`koyso.to`],target:`/8`},{title:`策略游戏`,source:[`koyso.to`],target:`/9`},{title:`格斗游戏`,source:[`koyso.to`],target:`/10`},{title:`恐怖游戏`,source:[`koyso.to`],target:`/11`},{title:`即时战略`,source:[`koyso.to`],target:`/12`},{title:`卡牌游戏`,source:[`koyso.to`],target:`/13`},{title:`独立游戏`,source:[`koyso.to`],target:`/14`},{title:`局域网联机`,source:[`koyso.to`],target:`/15`}],view:i.Articles};export{s as handler,c as route};