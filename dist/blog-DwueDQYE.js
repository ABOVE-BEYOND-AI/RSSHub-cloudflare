import"./config-HRWLmo66.js";import"./logger-DHpG8Bim.js";import{cache_default as e}from"./cache-C3AIQtoX.js";import{art as t}from"./render-DE4LRFBD.js";import{parseDate as n}from"./parse-date-DHsdom8D.js";import{ofetch_default as r}from"./ofetch-DRl42yaJ.js";import{__dirname as i}from"./esm-shims-BDPl6Msv.js";import{ViewType as a}from"./types-D9T3SQ-7.js";import o from"node:path";import{load as s}from"cheerio";const c=async a=>{let{lang:c=`en`}=a.req.param(),l=Number.parseInt(a.req.query(`limit`)??`30`,10),u=`https://www.deepl.com`,d=new URL(`${c}/blog`,u).href,f=await r(d),p=s(f),m=p(`html`).attr(`lang`)??c,h=[];return h=p(`h4, h6`).slice(0,l).toArray().map(e=>{let r=p(e).parent().parent(),a=r.find(`h4, h6`).text(),s=r.find(`img`).attr(`src`),c=t(o.join(i,`templates/description-881baa33.art`),{images:s?[{src:s,alt:a}]:void 0,intro:r.find(`p`).text()}),l=r.find(`time`).attr(`datetime`),d=r.attr(`href`),f=r.find(`span.me-6 span`).last().text().split(/,\s/),h=f.map(e=>({name:e,url:void 0,avatar:void 0})),g=l,_={title:a,description:c,pubDate:l?n(l):void 0,link:d?new URL(d,u).href:void 0,author:h,content:{html:c,text:c},image:s,banner:s,updated:g?n(g):void 0,language:m};return _}),h=await Promise.all(h.map(a=>a.link?e.tryGet(a.link,async()=>{let e=await r(a.link),c=s(e),l=c(`h1[data-contentful-field-id="title"]`).text(),u=a.description+t(o.join(i,`templates/description-881baa33.art`),{description:c(`div.my-redesign-3`).html()}),d=c(`time`).first().attr(`datetime`),f=c(`span[data-contentful-field-id="author"] span`).last().text().split(/,\s/),p=f.map(e=>({name:e,url:void 0,avatar:void 0})),h=c(`meta[property="og:image"]`).attr(`content`)??c(`picture[data-contentful-field-id="image"] img`).attr(`src`),g=d,_={title:l,description:u,pubDate:d?n(d):a.pubDate,author:p,content:{html:u,text:u},image:h,banner:h,updated:g?n(g):a.updated,language:m};return{...a,..._}}):a)),{title:p(`title`).text(),description:p(`meta[property="og:description"]`).attr(`content`),link:d,item:h,allowEmpty:!0,image:p(`meta[property="og:image"]`).attr(`content`),language:m,id:p(`meta[property="og:url"]`).attr(`content`)}},l=[{label:`Deutsch`,value:`de`},{label:`English`,value:`en`},{label:`Español`,value:`es`},{label:`日本語`,value:`ja`},{label:`Français`,value:`fr`},{label:`Italiano`,value:`it`},{label:`Bahasa Indonesia`,value:`id`},{label:`한국어`,value:`ko`},{label:`Nederlands`,value:`nl`},{label:`Čeština`,value:`cs`},{label:`Svenska`,value:`sv`},{label:`Polski`,value:`pl`},{label:`Português (Brasil)`,value:`pt-BR`},{label:`Português`,value:`pt-PT`},{label:`Türkçe`,value:`tr`},{label:`Русский`,value:`ru`},{label:`简体中文`,value:`zh`},{label:`Українська`,value:`uk`},{label:`العربية`,value:`ar`}],u={path:`/blog/:lang?`,name:`Blog`,url:`www.deepl.com`,maintainers:[`nczitzk`],handler:c,example:`/deepl/blog/en`,parameters:{lang:{description:"Language, `en` as English by default",options:l}},description:`:::tip
To subscribe to [Blog](https://www.deepl.com/en/blog), where the source URL is \`https://www.deepl.com/en/blog\`, extract the certain parts from this URL to be used as parameters, resulting in the route as [\`/deepl/blog/en\`](https://rsshub.app/deepl/blog/en).

:::

<details>
  <summary>More languages</summary>

| Language                                               | ID                                           |
| ------------------------------------------------------ | -------------------------------------------- |
| [Deutsch](https://www.deepl.com/de/blog)               | [de](https://rsshub.app/deepl/blog/de)       |
| [English](https://www.deepl.com/en/blog)               | [en](https://rsshub.app/deepl/blog/en)       |
| [Español](https://www.deepl.com/es/blog)               | [es](https://rsshub.app/deepl/blog/es)       |
| [日本語](https://www.deepl.com/ja/blog)                | [ja](https://rsshub.app/deepl/blog/ja)       |
| [Français](https://www.deepl.com/fr/blog)              | [fr](https://rsshub.app/deepl/blog/fr)       |
| [Italiano](https://www.deepl.com/it/blog)              | [it](https://rsshub.app/deepl/blog/it)       |
| [Bahasa Indonesia](https://www.deepl.com/id/blog)      | [id](https://rsshub.app/deepl/blog/id)       |
| [한국어](https://www.deepl.com/ko/blog)                | [ko](https://rsshub.app/deepl/blog/ko)       |
| [Nederlands](https://www.deepl.com/nl/blog)            | [nl](https://rsshub.app/deepl/blog/nl)       |
| [Čeština](https://www.deepl.com/cs/blog)               | [cs](https://rsshub.app/deepl/blog/cs)       |
| [Svenska](https://www.deepl.com/sv/blog)               | [sv](https://rsshub.app/deepl/blog/sv)       |
| [Polski](https://www.deepl.com/pl/blog)                | [pl](https://rsshub.app/deepl/blog/pl)       |
| [Português (Brasil)](https://www.deepl.com/pt-BR/blog) | [pt-BR](https://rsshub.app/deepl/blog/pt-BR) |
| [Português](https://www.deepl.com/pt-PT/blog)          | [pt-PT](https://rsshub.app/deepl/blog/pt-PT) |
| [Türkçe](https://www.deepl.com/tr/blog)                | [tr](https://rsshub.app/deepl/blog/tr)       |
| [Русский](https://www.deepl.com/ru/blog)               | [ru](https://rsshub.app/deepl/blog/ru)       |
| [简体中文](https://www.deepl.com/zh/blog)              | [zh](https://rsshub.app/deepl/blog/zh)       |
| [Українська](https://www.deepl.com/uk/blog)            | [uk](https://rsshub.app/deepl/blog/uk)       |
| [العربية](https://www.deepl.com/ar/blog)               | [ar](https://rsshub.app/deepl/blog/ar)       |

</details>
`,categories:[`new-media`],features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportRadar:!0,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`www.deepl.com/:lang/blog`],target:e=>{let t=e.lang;return`/deepl/blog${t?`/${t}`:``}`}},{title:`Deutsch`,source:[`www.deepl.com/de/blog`],target:`/blog/de`},{title:`English`,source:[`www.deepl.com/en/blog`],target:`/blog/en`},{title:`Español`,source:[`www.deepl.com/es/blog`],target:`/blog/es`},{title:`日本語`,source:[`www.deepl.com/ja/blog`],target:`/blog/ja`},{title:`Français`,source:[`www.deepl.com/fr/blog`],target:`/blog/fr`},{title:`Italiano`,source:[`www.deepl.com/it/blog`],target:`/blog/it`},{title:`Bahasa Indonesia`,source:[`www.deepl.com/id/blog`],target:`/blog/id`},{title:`한국어`,source:[`www.deepl.com/ko/blog`],target:`/blog/ko`},{title:`Nederlands`,source:[`www.deepl.com/nl/blog`],target:`/blog/nl`},{title:`Čeština`,source:[`www.deepl.com/cs/blog`],target:`/blog/cs`},{title:`Svenska`,source:[`www.deepl.com/sv/blog`],target:`/blog/sv`},{title:`Polski`,source:[`www.deepl.com/pl/blog`],target:`/blog/pl`},{title:`Português (Brasil)`,source:[`www.deepl.com/pt-BR/blog`],target:`/blog/pt-BR`},{title:`Português`,source:[`www.deepl.com/pt-PT/blog`],target:`/blog/pt-PT`},{title:`Türkçe`,source:[`www.deepl.com/tr/blog`],target:`/blog/tr`},{title:`Русский`,source:[`www.deepl.com/ru/blog`],target:`/blog/ru`},{title:`简体中文`,source:[`www.deepl.com/zh/blog`],target:`/blog/zh`},{title:`Українська`,source:[`www.deepl.com/uk/blog`],target:`/blog/uk`},{title:`العربية`,source:[`www.deepl.com/ar/blog`],target:`/blog/ar`}],view:a.Articles,zh:{path:`/blog/:lang?`,name:`博客`,url:`www.deepl.com`,maintainers:[`nczitzk`],handler:c,example:`/deepl/blog/en`,parameters:{lang:{description:"语言，默认为 `en`，可在对应语言页 URL 中找到",options:l}},description:`:::tip
若订阅 [博客](https://www.deepl.com/zh/blog)，网址为 \`https://www.deepl.com/zh/blog\`，请截取 \`https://www.deepl.com/\` 到末尾 \`/blog\` 的部分 \`zh\` 作为 \`lang\` 参数填入，此时目标路由为 [\`/deepl/blog/zh\`](https://rsshub.app/deepl/blog/zh)。

:::

<details>
  <summary>更多语言</summary>

| Language                                               | ID                                           |
| ------------------------------------------------------ | -------------------------------------------- |
| [Deutsch](https://www.deepl.com/de/blog)               | [de](https://rsshub.app/deepl/blog/de)       |
| [English](https://www.deepl.com/en/blog)               | [en](https://rsshub.app/deepl/blog/en)       |
| [Español](https://www.deepl.com/es/blog)               | [es](https://rsshub.app/deepl/blog/es)       |
| [日本語](https://www.deepl.com/ja/blog)                | [ja](https://rsshub.app/deepl/blog/ja)       |
| [Français](https://www.deepl.com/fr/blog)              | [fr](https://rsshub.app/deepl/blog/fr)       |
| [Italiano](https://www.deepl.com/it/blog)              | [it](https://rsshub.app/deepl/blog/it)       |
| [Bahasa Indonesia](https://www.deepl.com/id/blog)      | [id](https://rsshub.app/deepl/blog/id)       |
| [한국어](https://www.deepl.com/ko/blog)                | [ko](https://rsshub.app/deepl/blog/ko)       |
| [Nederlands](https://www.deepl.com/nl/blog)            | [nl](https://rsshub.app/deepl/blog/nl)       |
| [Čeština](https://www.deepl.com/cs/blog)               | [cs](https://rsshub.app/deepl/blog/cs)       |
| [Svenska](https://www.deepl.com/sv/blog)               | [sv](https://rsshub.app/deepl/blog/sv)       |
| [Polski](https://www.deepl.com/pl/blog)                | [pl](https://rsshub.app/deepl/blog/pl)       |
| [Português (Brasil)](https://www.deepl.com/pt-BR/blog) | [pt-BR](https://rsshub.app/deepl/blog/pt-BR) |
| [Português](https://www.deepl.com/pt-PT/blog)          | [pt-PT](https://rsshub.app/deepl/blog/pt-PT) |
| [Türkçe](https://www.deepl.com/tr/blog)                | [tr](https://rsshub.app/deepl/blog/tr)       |
| [Русский](https://www.deepl.com/ru/blog)               | [ru](https://rsshub.app/deepl/blog/ru)       |
| [简体中文](https://www.deepl.com/zh/blog)              | [zh](https://rsshub.app/deepl/blog/zh)       |
| [Українська](https://www.deepl.com/uk/blog)            | [uk](https://rsshub.app/deepl/blog/uk)       |
| [العربية](https://www.deepl.com/ar/blog)               | [ar](https://rsshub.app/deepl/blog/ar)       |

</details>
`}};export{c as handler,u as route};