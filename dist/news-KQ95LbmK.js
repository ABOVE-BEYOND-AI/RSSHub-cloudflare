import"./config-HRWLmo66.js";import{logger_default as e}from"./logger-DHpG8Bim.js";import"./helpers-LVq640iW.js";import{cache_default as t}from"./cache-C3AIQtoX.js";import{art as n}from"./render-DE4LRFBD.js";import{parseDate as r}from"./parse-date-DHsdom8D.js";import"./ofetch-DRl42yaJ.js";import{__dirname as i}from"./esm-shims-BDPl6Msv.js";import{got_default as a}from"./got-BaOFZRd4.js";import o from"node:path";const s=`https://bbs-api-os.hoyolab.com`,c=`https://www.hoyolab.com`,l={2:27,6:39,8:47,1:31,4:35,5:43},u=e=>e(`hoyolab:gameNameList`,async()=>{let{data:e}=await a(`https://bbs-api-os-static.hoyolab.com/community/apihub/static/api/getAppConfig`);return JSON.parse(e.data.config.hoyolab_game_info_list)}),d=async(e,t,n)=>{let r=await u(n),i=r.find(t=>t.game_id===Number.parseInt(e,10));return{name:i?.game_name_list.find(e=>e.locale===t)?.raw_name??i?.game_name_list.find(e=>e.locale===`en-us`)?.raw_name,icon:i?.game_icon}},f=(e,t)=>t(`hoyolab:type:${e}`,async()=>{let{data:t}=await a(`https://webstatic.hoyoverse.com/admin/mi18n/bbs_oversea/m07281525151831/m07281525151831-${e}.json`);return{1:{title:t.official_notify,sort:`notices`},2:{title:t.official_activity,sort:`events`},3:{title:t.official_info,sort:`news`}}}),p=async({type:e,gids:t,size:n,language:r})=>{let i=new URLSearchParams({type:e,gids:t,page_size:n}).toString(),o=`${s}/community/post/wapi/getNewsList?${i}`,c=await a({method:`get`,url:o,headers:{"X-Rpc-Language":r}}),l=c?.data?.data?.list||[];return l},m=e=>e.replaceAll(`<img src="https://hoyolab-upload-private.hoyolab.com/upload`,`<img src="https://upload-os-bbs.hoyolab.com/upload`),h=(e,{language:l})=>Promise.all(e.map(async e=>{let u=e.post,d=u.post_id,f=new URLSearchParams({post_id:d,language:l}).toString(),p=`${s}/community/post/wapi/getPostFull?${f}`;return await t.tryGet(p,async()=>{let t=await a({method:`get`,url:p,headers:{"X-Rpc-Language":l}}),s=t?.data?.data?.post?.user?.nickname||``,f=t?.data?.data?.post?.post?.content||``;(f===l||!f)&&(f=u.content);let h=n(o.join(i,`templates/post-b135d099.art`),{hasCover:u.has_cover,coverList:e.cover_list,content:m(f)});return{title:u.subject,link:`${c}/article/${d}`,description:h,pubDate:r(u.created_at*1e3),author:s}})})),g={path:`/news/:language/:gids/:type`,categories:[`game`],example:`/hoyolab/news/zh-cn/2/2`,parameters:{language:`Language`,gids:`Game ID`,type:`Announcement type`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`Official Announcement`,maintainers:[`ZenoTian`],handler:_,description:`| Language         | Code  |
| ---------------- | ----- |
| 简体中文         | zh-cn |
| 繁體中文         | zh-tw |
| 日本語           | ja-jp |
| 한국어           | ko-kr |
| English (US)     | en-us |
| Español (EU)     | es-es |
| Français         | fr-fr |
| Deutsch          | de-de |
| Русский          | ru-ru |
| Português        | pt-pt |
| Español (Latino) | es-mx |
| Indonesia        | id-id |
| Tiếng Việt       | vi-vn |
| ภาษาไทย          | th-th |

| Honkai Impact 3rd | Genshin Impact | Tears of Themis | HoYoLAB | Honkai: Star Rail | Zenless Zone Zero |
| ----------------- | -------------- | --------------- | ------- | ----------------- | ----------------- |
| 1                 | 2              | 4               | 5       | 6                 | 8                 |

| Notices | Events | Info |
| ------- | ------ | ---- |
| 1       | 2      | 3    |`};async function _(n){try{let{type:e,gids:r,language:i}=n.req.param(),a={type:e,gids:r,language:i,size:Number.parseInt(n.req.query(`limit`))||15},o=await d(r,i,t.tryGet),s=await f(i,t.tryGet),u=await p(a),m=await h(u,a);return{title:`HoYoLAB-${o.name}-${s[e].title}`,link:`${c}/circles/${r}/${l[r]}/official?page_type=${l[r]}&page_sort=${s[e].sort}`,item:m,image:o.icon,icon:o.icon,logo:o.icon}}catch(t){e.error(t)}}export{g as route};