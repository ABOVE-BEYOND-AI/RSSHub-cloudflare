import"./config-HRWLmo66.js";import"./logger-DHpG8Bim.js";import{cache_default as e}from"./cache-C3AIQtoX.js";import{art as t}from"./render-DE4LRFBD.js";import{parseDate as n}from"./parse-date-DHsdom8D.js";import{ofetch_default as r}from"./ofetch-DRl42yaJ.js";import{__dirname as i}from"./esm-shims-BDPl6Msv.js";import{rss_parser_default as a}from"./rss-parser-Dx7FersL.js";import o from"node:path";import*as s from"cheerio";const c=e=>t(o.join(i,`templates/fancybox-7e47a3a4.art`),{media:e}),l=(e,n)=>t(o.join(i,`templates/description-15d467fb.art`),{media:c(e),desc:n}),u=(e,t)=>{let n=t(e),r=new URL(n.attr(`href`)),i;return r.hostname===`videop.mingpao.com`&&(i=new URL(r.searchParams.get(`file`)),i.hostname=`cfrvideo.mingpao.com`,i=i.href),{href:r.href,title:n.attr(`title`),video:i}},d={path:`/:type?/:category?`,name:`新聞`,example:`/mingpao/ins/all`,parameters:{type:{description:`新聞類型`,default:`ins`,options:[{value:`ins`,label:`即時新聞`},{value:`pns`,label:`每日明報`}]},category:`頻道，見下表`},radar:[{title:`即時新聞`,source:[`news.mingpao.com/ins/:categoryName/section/:date/:category`],target:`/mingpao/ins/:category`},{title:`每日明報`,source:[`news.mingpao.com/pns/:categoryName/section/:date/:category`],target:`/mingpao/pns/:category`}],maintainers:[`TonyRL`],handler:f,description:`| category | 即時新聞頻道 |
| -------- | ------------ |
| all      | 總目錄       |
| s00001   | 港聞         |
| s00002   | 經濟         |
| s00003   | 地產         |
| s00004   | 兩岸         |
| s00005   | 國際         |
| s00006   | 體育         |
| s00007   | 娛樂         |
| s00022   | 文摘         |
| s00024   | 熱點         |

| category | 每日明報頻道 |
| -------- | ------------ |
| s00001   | 要聞         |
| s00002   | 港聞         |
| s00003   | 社評         |
| s00004   | 經濟         |
| s00005   | 副刊         |
| s00011   | 教育         |
| s00012   | 觀點         |
| s00013   | 中國         |
| s00014   | 國際         |
| s00015   | 體育         |
| s00016   | 娛樂         |
| s00017   | English      |
| s00018   | 作家專欄     |`};async function f(t){let i=t.req.param(`type`)??`ins`,o=t.req.param(`category`)??(i===`ins`?`all`:`s00001`),c=`https://news.mingpao.com/rss/${i}/${o}.xml`,d=await a.parseURL(c),f=await Promise.all(d.items.map(t=>e.tryGet(t.link,async()=>{let e=await r(t.link,{headers:{Referer:`https://news.mingpao.com/`}}),i=s.load(e),a=i(`#topvideo`).length?i(`#topvideo iframe`).toArray().map(e=>i(e).attr(`href`,i(e).attr(`src`))).map(e=>u(e,i)):[],o=i(`a.fancybox`).length?i(`a.fancybox`):i(`a.fancybox-buttons`);i(`div.ad300ins_m`).remove(),i(`div.clear, div.inReadLrecGroup, div.clr`).remove(),i(`div#ssm2`).remove(),i(`iframe`).remove(),i(`p[dir=ltr]`).remove(),t.category=t.categories;let c=[...a,...o.toArray().map(e=>u(e,i))],d=i(`script`).toArray().find(e=>i(e).text()?.includes(`$('#lower').prepend('`)),f=d?i(d).text()?.match(/\$\('#lower'\)\.prepend\('(.*)'\);/)?.[1]?.replaceAll(/\\"/g,`"`):``;if(f){let e=s.load(f,null,!1);c=[...c,...e(`a.fancybox`).toArray().map(t=>u(t,e))]}return delete t.categories,delete t.content,delete t.contentSnippet,delete t.creator,delete t.isoDate,t.description=l(c,i(`.txt4`).html()??i(`.article_content.line_1_5em`).html()??i(`.txt3`).html()),t.pubDate=n(t.pubDate),t.guid=t.link.includes(`?`)?t.link:t.link.slice(0,t.link.lastIndexOf(`/`)),t})));return{title:d.title,link:d.link,description:d.description,item:f,image:d.image.url,language:d.language}}export{d as route};