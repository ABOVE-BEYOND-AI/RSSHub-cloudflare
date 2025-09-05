import"./config-HRWLmo66.js";import"./logger-DHpG8Bim.js";import"./helpers-LVq640iW.js";import{cache_default as e}from"./cache-C3AIQtoX.js";import{art as t}from"./render-DE4LRFBD.js";import{parseDate as n}from"./parse-date-DHsdom8D.js";import"./ofetch-DRl42yaJ.js";import{__dirname as r}from"./esm-shims-BDPl6Msv.js";import{got_default as i}from"./got-BaOFZRd4.js";import{ViewType as a}from"./types-D9T3SQ-7.js";import o from"node:path";import{load as s}from"cheerio";const c={recommend:{url:`content/recommend`,title:`推荐`},hkstock:{url:`content/hkstock`,title:`港股`},meigu:{url:`content/meigu`,title:`美股`},agu:{url:`content/agu`,title:`沪深`},ct:{url:`content/ct`,title:`创投`},esg:{url:`content/esg`,title:`ESG`},aqs:{url:`content/aqs`,title:`券商`},ajj:{url:`content/ajj`,title:`基金`},focus:{url:`focus`,title:`要闻`},announcement:{url:`announcement`,title:`公告`},research:{url:`research`,title:`研究`},shares:{url:`shares`,title:`新股`},bazaar:{url:`bazaar`,title:`市场`},company:{url:`company`,title:`公司`}},l={path:`/:id?/:category?`,categories:[`finance`],view:a.Articles,example:`/zhitongcaijing`,parameters:{id:`栏目 id，可在对应栏目页 URL 中找到，默认为 recommend，即推荐`,category:`分类 id，可在对应栏目子分类页 URL 中找到，默认为全部`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`推荐`,maintainers:[`nczitzk`],handler:u,description:`| id           | 栏目 |
| ------------ | ---- |
| recommend    | 推荐 |
| hkstock      | 港股 |
| meigu        | 美股 |
| agu          | 沪深 |
| ct           | 创投 |
| esg          | ESG  |
| aqs          | 券商 |
| ajj          | 基金 |
| focus        | 要闻 |
| announcement | 公告 |
| research     | 研究 |
| shares       | 新股 |
| bazaar       | 市场 |
| company      | 公司 |`};async function u(a){let l=a.req.param(`id`)??`recommend`,u=a.req.param(`category`)??``,d=a.req.query(`limit`)?Number.parseInt(a.req.query(`limit`)):20,f=`https://www.zhitongcaijing.com`,p=`${f}/${c[l].url}.html${u===``?``:`?category_key=${u}`}`,m=`${f}/${c[l].url}.html?data_type=1&page=1${u===``?``:`&category_key=${u}`}`,h=await i({method:`get`,url:m}),g=h.data.data.slice(0,d).map(e=>({title:e.title,link:`${f}${e.url}`,description:e.digest,author:e.author_info.author_name,pubDate:n((e.create_time??Number.parseInt(e.original_time))*1e3),category:[...e.keywords?.split(`,`)??[],e.category_name??e.type_tag]}));return g=await Promise.all(g.map(n=>e.tryGet(n.link,async()=>{let e=await i({method:`get`,url:n.link}),a=s(e.data);return a(`#subscribe-vip-box`).remove(),a(`#news-content`).remove(),n.description=t(o.join(r,`templates/description-6a029b99.art`),{digest:a(`.digetst-box`).html()||a(`.telegram-origin-contentn`).html(),description:a(`.news-body-content`).html()}),n}))),{title:`智通财经 - ${c[l].title}`,link:p,item:g}}export{l as route};