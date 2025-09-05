import"./config-HRWLmo66.js";import"./logger-DHpG8Bim.js";import"./proxy-BQXcrhTu.js";import"./cache-C3AIQtoX.js";import"./parse-date-DHsdom8D.js";import"./ofetch-DRl42yaJ.js";import{puppeteer_default as e}from"./puppeteer-BAoY_Fpy.js";import"./puppeteer-utils-DuxVCYwW.js";import{baseUrl as t,parsePage as n}from"./utils-B3rF-0H7.js";const r={path:`/master/:channel`,categories:[`traditional-media`],example:`/cw/master/8`,parameters:{channel:`主頻道 ID，可在 URL 中找到`},features:{requireConfig:!1,requirePuppeteer:!0,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`主頻道`,maintainers:[`TonyRL`],handler:i,description:`| 主頻道名稱 | 主頻道 ID |
| ---------- | --------- |
| 財經       | 8         |
| 產業       | 7         |
| 國際       | 9         |
| 管理       | 10        |
| 環境       | 12        |
| 教育       | 13        |
| 人物       | 14        |
| 政治社會   | 77        |
| 調查排行   | 15        |
| 健康關係   | 79        |
| 時尚品味   | 11        |
| 運動生活   | 103       |
| 重磅外媒   | 16        |`};async function i(r){let i=await e(),{$:a,items:o}=await n(`master`,i,r);return await i.close(),{title:a(`head title`).text(),description:a(`meta[name=description]`).attr(`content`),link:`${t}/masterChannel.action?idMasterChannel=${r.req.param(`channel`)}`,image:`${t}/assets_new/img/fbshare.jpg`,language:a(`meta[property="og:locale"]`).attr(`content`),item:o}}export{r as route};