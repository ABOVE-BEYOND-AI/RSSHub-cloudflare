import"./config-HRWLmo66.js";import"./logger-DHpG8Bim.js";import"./helpers-LVq640iW.js";import"./ofetch-DRl42yaJ.js";import{got_default as e}from"./got-BaOFZRd4.js";const t={path:`/bookstore/newest`,categories:[`social-media`],example:`/zhihu/bookstore/newest`,parameters:{},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!0,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`知乎书店 - 新书`,maintainers:[`xyqfer`],handler:n};async function n(){let t=await e({method:`get`,url:`https://api.zhihu.com/books/features/new`}),n=t.data.data;return{title:`知乎书店-新书抢鲜`,link:`https://www.zhihu.com/pub/features/new`,item:n.map(e=>{let t=e.authors.map(e=>e.name).join(`、`);return{title:e.title,link:e.url,description:`
          <img src="${e.cover.replaceAll(/_.+\.jpg/g,`.jpg`)}"><br>
          <strong>${e.title}</strong><br>
          作者: ${t}<br><br>
          ${e.description}<br><br>
          价格: ${e.promotion.price/100}元
        `}})}}export{t as route};