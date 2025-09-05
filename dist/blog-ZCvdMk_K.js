import"./config-HRWLmo66.js";import"./logger-DHpG8Bim.js";import"./helpers-LVq640iW.js";import{art as e}from"./render-DE4LRFBD.js";import{parseDate as t}from"./parse-date-DHsdom8D.js";import"./ofetch-DRl42yaJ.js";import{__dirname as n}from"./esm-shims-BDPl6Msv.js";import{got_default as r}from"./got-BaOFZRd4.js";import i from"node:path";const a={path:`/blog/:username`,categories:[`blog`],example:`/hashnode/blog/inklings`,parameters:{username:`博主名称，用户头像 URL 中找到`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`hashnode.dev/`]}],name:`用户博客`,maintainers:[`hnrainll`],handler:o,url:`hashnode.dev/`,description:"::: tip\n  username 为博主用户名，而非`xxx.hashnode.dev`中`xxx`所代表的 blog 地址。\n:::"};async function o(a){let o=a.req.param(`username`);if(!o)return;let s=`
    {
        user(username: "${o}") {
            publication {
                posts{
                    slug
                    title
                    brief
                    coverImage
                    dateAdded
                }
            }
        }
    }
    `,c=`https://${o}.hashnode.dev`,l=await r({method:`POST`,url:`https://api.hashnode.com`,headers:{Referer:c,"Content-type":`application/json`},body:JSON.stringify({query:s})}),u=l.data.data.user.publication;if(!u)return;let d=u.posts;return{title:`Hashnode by ${o}`,link:c,item:d.map(r=>({title:r.title,description:e(i.join(n,`templates/description-88dc298d.art`),{image:r.coverImage,brief:r.brief}),pubDate:t(r.dateAdded),link:`${c}/${r.slug}`})).filter(e=>e!==``)}}export{a as route};