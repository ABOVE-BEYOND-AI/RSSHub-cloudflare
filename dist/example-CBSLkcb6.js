import"./config-HRWLmo66.js";import"./logger-DHpG8Bim.js";import"./helpers-LVq640iW.js";import{art as e}from"./render-DE4LRFBD.js";import"./ofetch-DRl42yaJ.js";import{__dirname as t}from"./esm-shims-BDPl6Msv.js";import{got_default as n}from"./got-BaOFZRd4.js";import r from"node:path";import{load as i}from"cheerio";const a={path:`/:category?/:language?`,categories:[`study`],example:`/mindmeister/mind-map-examples`,parameters:{category:"Categories, see the table below, `mind-map-examples` by default",language:"Languages, see the table below, `en` by default"},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`Public Maps`,maintainers:[`TonyRL`],handler:o,description:`| Categories    | parameter         |
| ------------- | ----------------- |
| Featured Map  | mind-map-examples |
| Business      | business          |
| Design        | design            |
| Education     | education         |
| Entertainment | entertainment     |
| Life          | life              |
| Marketing     | marketing         |
| Productivity  | productivity      |
| Summaries     | summaries         |
| Technology    | technology        |
| Other         | other             |

| Languages  | parameter |
| ---------- | --------- |
| English    | en        |
| Deutsch    | de        |
| Français   | fr        |
| Español    | es        |
| Português  | pt        |
| Nederlands | nl        |
| Dansk      | da        |
| Русский    | ru        |
| 日本語     | ja        |
| Italiano   | it        |
| 简体中文   | zh        |
| 한국어     | ko        |
| Other      | other     |`};async function o(a){let{category:o=`mind-map-examples`,language:s=`en`}=a.req.param(),c=`https://www.mindmeister.com${s===`en`||s===`other`?``:`/${s}`}/${o===`mind-map-examples`?o:`mind-maps/${o}?language=${s}`}`,l=await n(c),u=i(l.data),d=u(`#public-listing .map-tile-wrapper`).toArray().map(n=>{n=u(n);let i=new URL(n.find(`.map-wrapper`).attr(`style`).match(/url\('(.*)'\);/)[1]).href;return{title:n.find(`.title`).text(),description:e(r.join(t,`templates/image-e463f33f.art`),{src:i.split(`?`)[0],alt:n.find(`.title`).text().trim()}),link:n.find(`.title`).attr(`href`),author:n.find(`.author`).text().trim().replace(/^by/,``),category:n.find(`.fw-bold`).text()}});return{title:u(`head title`).text(),description:u(`head meta[name=description]`).text(),link:c,item:d,language:s}}export{a as route};