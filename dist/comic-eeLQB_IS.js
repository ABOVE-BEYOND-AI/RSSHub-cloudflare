import"./config-HRWLmo66.js";import"./logger-DHpG8Bim.js";import"./helpers-LVq640iW.js";import{parseDate as e}from"./parse-date-DHsdom8D.js";import"./ofetch-DRl42yaJ.js";import{got_default as t}from"./got-BaOFZRd4.js";const n={path:`/comic/:id`,categories:[`anime`],example:`/komiic/comic/533`,parameters:{id:`漫画 ID`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`komiic.com/comic/:id`],target:`/comic/:id`}],name:`漫画更新`,maintainers:[`NekoAria`],handler:r};async function r(n){let{id:r}=n.req.param(),{limit:i=0}=n.req.query(),a=`https://komiic.com`,{data:o}=await t.post(`${a}/api/query`,{json:{operationName:`comicById`,variables:{comicId:r},query:`query comicById($comicId: ID!) {
                comicById(comicId: $comicId) {
                    title
                    imageUrl
                }
            }`}}),{title:s,imageUrl:c}=o.data.comicById,{data:l}=await t.post(`${a}/api/query`,{json:{operationName:`chapterByComicId`,variables:{comicId:r},query:`query chapterByComicId($comicId: ID!) {
                chaptersByComicId(comicId: $comicId) {
                    id
                    serial
                    type
                    dateUpdated
                    size
                }
            }`}}),u=l.data.chaptersByComicId.sort((e,t)=>Date.parse(t.dateUpdated)-Date.parse(e.dateUpdated)),d=Number(i)||u.length,f=u.slice(0,d),p=e=>`
        <h1>${e.size}p</h1>
        <img src="${c}" />
    `.trim(),m=f.map(t=>({title:t.type===`book`?`第 ${t.serial} 卷`:`第 ${t.serial} 话`,link:`${a}/comic/${r}/chapter/${t.id}/images/all`,pubDate:e(t.dateUpdated),description:p(t)}));return{title:`Komiic - ${s}`,link:`${a}/comic/${r}`,item:m}}export{n as route};