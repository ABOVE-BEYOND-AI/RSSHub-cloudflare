import"./config-HRWLmo66.js";import"./logger-DHpG8Bim.js";import"./helpers-LVq640iW.js";import{cache_default as e}from"./cache-C3AIQtoX.js";import{art as t}from"./render-DE4LRFBD.js";import{parseDate as n}from"./parse-date-DHsdom8D.js";import"./ofetch-DRl42yaJ.js";import{__dirname as r}from"./esm-shims-BDPl6Msv.js";import{got_default as i}from"./got-BaOFZRd4.js";import a from"node:path";import{load as o}from"cheerio";const s={path:`/:language?/:category?/:type?`,categories:[`multimedia`],example:`/7mmtv/zh/censored_list/all`,parameters:{language:"Language, see below, `en` as English by default",category:"Category, see below, `censored_list` as Censored by default",type:`Server, see below, all server by default`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!0,supportBT:!1,supportPodcast:!1,supportScihub:!1,nsfw:!0},name:`Category`,maintainers:[`nczitzk`],handler:c,description:`**Language**

| English | 日本語 | 한국의 | 中文 |
| ------- | ------ | ------ | ---- |
| en      | ja     | ko     | zh   |

  **Category**

| Chinese subtitles AV | Censored       | Amateur          | Uncensored       | Asian self-timer | H comics     |
| -------------------- | -------------- | ---------------- | ---------------- | ---------------- | ------------ |
| chinese_list        | censored_list | amateurjav_list | uncensored_list | amateur_list    | hcomic_list |

| Chinese subtitles AV random | Censored random  | Amateur random     | Uncensored random  | Asian self-timer random | H comics random |
| --------------------------- | ---------------- | ------------------ | ------------------ | ----------------------- | --------------- |
| chinese_random             | censored_random | amateurjav_random | uncensored_random | amateur_random         | hcomic_random  |

  **Server**

| All Server | fembed(Full DL) | streamsb(Full DL) | doodstream | streamtape(Full DL) | avgle | embedgram | videovard(Full DL) |
| ---------- | --------------- | ----------------- | ---------- | ------------------- | ----- | --------- | ------------------ |
| all        | 21              | 30                | 28         | 29                  | 17    | 34        | 33                 |`};async function c(s){let c=s.req.param(`language`)??`en`,l=s.req.param(`category`)??`censored_list`,u=s.req.param(`type`)??`all`,d=`https://7mmtv.sx/${c}/${l}/${u}/1.html`,f=await i({method:`get`,url:d}),p=o(f.data),m=p(`.video`).toArray().map(e=>{e=p(e);let t=e.find(`.video-title a`);return{title:t.text(),author:e.find(`.video-channel`).text(),pubDate:n(e.find(`.small`).text()),link:t.attr(`href`),poster:e.find(`img`).attr(`data-src`),video:e.find(`video`).attr(`data-src`)}});return m=await Promise.all(m.map(n=>e.tryGet(n.link,async()=>{let e=await i({method:`get`,url:n.link}),s=o(e.data);return n.description=t(a.join(r,`templates/description-7c12cbba.art`),{cover:s(`.content_main_cover img`).attr(`src`),images:s(`.owl-lazy`).toArray().map(e=>s(e).attr(`data-src`)),description:s(`.video-introduction-images-text`).html(),poster:n.poster,video:n.video}),n.category=s(`.categories a`).toArray().map(e=>s(e).text()),delete n.poster,delete n.video,n}))),{title:p(`title`).text().replace(/ - Watch JAV Online/,``),link:d,item:m,description:p(`meta[name="description"]`).attr(`content`)}}export{s as route};