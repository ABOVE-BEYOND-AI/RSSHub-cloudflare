import"./config-HRWLmo66.js";import"./logger-DHpG8Bim.js";import"./helpers-LVq640iW.js";import{art as e}from"./render-DE4LRFBD.js";import"./ofetch-DRl42yaJ.js";import{__dirname as t}from"./esm-shims-BDPl6Msv.js";import{got_default as n}from"./got-BaOFZRd4.js";import{fallback as r,queryToFloat as i,queryToInteger as a}from"./readable-social-Dobs5p4y.js";import o from"node:path";const s={path:`/list/:type?/:routeParams?`,categories:[`social-media`],example:`/douban/list/subject_real_time_hotest`,parameters:{type:`榜单类型，见下表。默认为实时热门书影音`,routeParams:`额外参数；请参阅以下说明和表格`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`www.douban.com/subject_collection/:type`],target:`/list/:type`}],name:`豆瓣榜单与集合`,maintainers:[`5upernova-heng`,`honue`],handler:c,description:`| 榜单 / 集合        | 路由                          |
| ------------------ | ----------------------------- |
| 实时热门书影音     | subject_real_time_hotest   |
| 影院热映           | movie_showing                |
| 实时热门电影       | movie_real_time_hotest     |
| 实时热门电视       | tv_real_time_hotest        |
| 一周口碑电影榜     | movie_weekly_best           |
| 华语口碑剧集榜     | tv_chinese_best_weekly     |
| 全球口碑剧集榜     | tv_global_best_weekly      |
| 国内口碑综艺榜     | show_chinese_best_weekly   |
| 国外口碑综艺榜     | show_global_best_weekly    |
| 热播新剧国产剧     | tv_domestic                  |
| 热播新剧欧美剧     | tv_american                  |
| 热播新剧日剧       | tv_japanese                  |
| 热播新剧韩剧       | tv_korean                    |
| 热播新剧动画       | tv_animation                 |
| 虚构类小说热门榜   | book_fiction_hot_weekly    |
| 非虚构类小说热门榜 | book_nonfiction_hot_weekly |
| 热门单曲榜         | music_single                 |
| 华语新碟榜         | music_chinese                |
| ...                | ...                           |

| 额外参数 | 含义                   | 接受的值 | 默认值 |
| -------- | ---------------------- | -------- | ------ |
| playable | 仅看有可播放片源的影片 | 0/1      | 0      |
| score    | 筛选评分               | 0.0-10.0 | 0      |

  用例：\`/douban/list/tv_korean/playable=1&score=8\`

  > 上面的榜单 / 集合并没有列举完整。
  >
  > 如何找到榜单对应的路由参数：
  > 在豆瓣手机 APP 中，对应地榜单页面右上角，点击分享链接。链接路径 \`subject_collection\` 后的路径就是路由参数 \`type\`。
  > 如：小说热门榜的分享链接为：\`https://m.douban.com/subject_collection/ECDIHUN4A\`，其对应本 RSS 路由的 \`type\` 为 \`ECDIHUN4A\`，对应的订阅链接路由：[\`/douban/list/ECDIHUN4A\`](https://rsshub.app/douban/list/ECDIHUN4A)`};async function c(s){let c=s.req.param(`type`)||`subject_real_time_hotest`,l=Object.fromEntries(new URLSearchParams(s.req.param(`routeParams`))),u=r(void 0,a(l.playable),0),d=r(void 0,i(l.score),0),f=0,p=[],m=``,h=``,g=null;for(;g===null||f<g;){let r=`https://m.douban.com/rexxar/api/v2/subject_collection/${c}/items?playable=${u}&start=${f}&count=50`,i=await n({method:`get`,url:r,headers:{Referer:`https://m.douban.com/subject_collection/${c}`}});m=i.data.subject_collection.name,h=i.data.subject_collection.description,g=i.data.total;let a=i.data.subject_collection_items.filter(e=>{let t=e.rating?e.rating.value:0;return t>=d}).map(n=>{let r=n.title,i=n.url,a=e(o.join(t,`templates/list_description-833a570f.art`),{ranking_value:n.ranking_value,title:r,original_title:n.original_title,rate:n.rating?n.rating.value:null,card_subtitle:n.card_subtitle,description:n.cards?n.cards[0].content:n.abstract,cover:n.cover_url||n.cover?.url});return{title:r,link:i,description:a}});p=[...p,...a],f+=50}return{title:`豆瓣 - ${m}`,link:`https://m.douban.com/subject_collection/${c}`,item:p,description:h}}export{s as route};