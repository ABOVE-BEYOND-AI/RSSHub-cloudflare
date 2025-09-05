import"./config-HRWLmo66.js";import"./logger-DHpG8Bim.js";import{cache_default as e}from"./cache-C3AIQtoX.js";import{art as t}from"./render-DE4LRFBD.js";import{parseDate as n}from"./parse-date-DHsdom8D.js";import{ofetch_default as r}from"./ofetch-DRl42yaJ.js";import{__dirname as i}from"./esm-shims-BDPl6Msv.js";import{timezone as a}from"./timezone-BrxBCotj.js";import{ViewType as o}from"./types-D9T3SQ-7.js";import s from"node:path";import{load as c}from"cheerio";const l=async o=>{let{id:l}=o.req.param(),u=Number.parseInt(o.req.query(`limit`)??`10`,10),d=`https://www.oschina.net`,f=String.raw`https://my\.oschina\.net`,p=new URL(`news/column?columnId=${l}`,d).href,m=await r(p),h=c(m),g=h(`html`).attr(`lang`)??`zh-CN`,_=[];_=h(`div.news-item`).slice(0,u).toArray().map(e=>{let r=h(e),o=r.find(`div.title`).text(),c=t(s.join(i,`templates/description-881baa33.art`),{intro:r.find(`div.description p.line-clamp`).text()}),l=r.find(`inddiv.item`).contents().last().text().trim(),u=r.attr(`data-url`),d=r.find(`inddiv.item a`).toArray(),f=d.map(e=>{let t=h(e);return{name:t.text(),url:t.attr(`href`)}}),p=r.find(`img`).attr(`src`),m=l,_={title:o,description:c,pubDate:l?a(n(l),8):void 0,link:u,author:f,content:{html:c,text:c},image:p,banner:p,updated:m?a(n(m),8):void 0,language:g};return _}),_=(await Promise.all(_.map(o=>o.link?e.tryGet(o.link,async()=>{let e=await r(o.link),l=c(e);l(`.ad-wrap`).remove();let u=l(`h1.article-box__title`).text(),p=t(s.join(i,`templates/description-881baa33.art`),{description:l(`div.content`).html()}),m=l(`div.article-box__meta div.item-list div.item`).toArray().find(e=>/\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}/.test(l(e).text())),h=m?l(m).text():void 0,_=l(`val[data-name="shareUrl"]`).attr(`data-value`),v=[...l(`div.breadcrumb-box a.item`).toArray().slice(0,-1),...l(`div.article-box__meta div.item-list div.item span.label`).toArray(),...l(`div.tags-box a.tag-item`).toArray()],y=[...new Set(v.map(e=>l(e).text()).filter(Boolean))],b=l(`div.article-box__meta div.item-list div.item a`).toArray().filter(e=>l(e).attr(`href`)?RegExp(`^${f}/u/\\d+$`).test(l(e).attr(`href`)):!1),x=b.map(e=>{let t=l(e);return{name:t.text(),url:t.attr(`href`)}}),S=`oschina-${l(`val[data-name="objId"]`).attr(`data-value`)}`,C=l(`val[data-name="sharePic"]`).attr(`data-value`),w=l(`meta[property="bytedance:updated_time"]`).attr(`content`)||h,T={title:u,description:p,pubDate:h?a(n(h),8):o.pubDate,link:_?new URL(_,d).href:o.link,category:y,author:x,guid:S,id:S,content:{html:p,text:p},image:C,banner:C,updated:w?n(w):o.updated,language:g},E=l(`div.related-links-box ul.link-list li a`).toArray(),D=E.map(e=>{let t=l(e);return{url:t.attr(`href`),type:`related`,content_html:t.parent().html()}}).filter(e=>!0);return D&&(T={...T,_extra:{links:D}}),{...o,...T}}):o))).filter(e=>!0);let v=h(`a.logo`).attr(`title`);return{title:`${v} - ${h(`div#tabDropdownListOpen a.selected`).text()}`,description:h(`meta[name="description"]`).attr(`content`),link:p,item:_,allowEmpty:!0,image:h(`a.logo img`).attr(`src`),author:v,language:g,id:h(`val[data-name="weixinShareUrl"]`).attr(`data-value`)}},u={path:`/column/:id`,name:`专栏`,url:`www.oschina.net`,maintainers:[`nczitzk`],handler:l,example:`/oschina/column/14`,parameters:{id:`专栏 id，可在对应专栏页 URL 中找到`},description:`:::tip
若订阅 [开源安全专栏](https://www.oschina.net/news/column?columnId=14)，网址为 \`https://www.oschina.net/news/column?columnId=14\`，请截取 \`https://www.oschina.net/news/column?columnId=\` 到末尾的部分 \`14\` 作为 \`id\` 参数填入，此时目标路由为 [\`/oschina/column/14\`](https://rsshub.app/oschina/column/14)。

:::

<details>
<summary>更多专栏</summary>

| 名称            | ID  |
| --------------- | --- |
| 古典主义 Debian | 4   |
| 自由&开源       | 5   |
| 溯源            | 6   |
| 开源先懂协议    | 7   |
| 开源变局        | 8   |
| 创造者说        | 9   |
| 精英主义 BSD    | 10  |
| 苹果有开源      | 11  |
| 开源访谈        | 12  |
| 抱团找组织      | 13  |
| 开源安全        | 14  |
| OSPO            | 15  |
| 创业小辑        | 16  |
| 星推荐          | 17  |
| 单口开源        | 18  |
| 编辑部观察直播  | 19  |
| 开源商业化      | 20  |
| ChatGPT 专题    | 21  |
| 开源新思        | 24  |
| 开源日报        | 25  |
| 大模型思辨      | 26  |
| 家里有个程序员  | 27  |
| 开源漫谈        | 23  |

</details>
`,categories:[`programming`],features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportRadar:!0,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`www.oschina.net`],target:(e,t)=>{let n=new URL(t),r=n.searchParams.get(`id`)??void 0;return`/oschina/column/${r}`}}],view:o.Articles};export{l as handler,u as route};