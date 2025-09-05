import{config as e}from"./config-HRWLmo66.js";import"./logger-DHpG8Bim.js";import"./helpers-LVq640iW.js";import{art as t}from"./render-DE4LRFBD.js";import"./ofetch-DRl42yaJ.js";import{__dirname as n}from"./esm-shims-BDPl6Msv.js";import{got_default as r}from"./got-BaOFZRd4.js";import{ViewType as i}from"./types-D9T3SQ-7.js";import{config_not_found_default as a}from"./config-not-found-B7nOMdXp.js";import o from"node:path";import{load as s}from"cheerio";const c={path:`/trending/:since/:language/:spoken_language?`,categories:[`programming`],example:`/github/trending/daily/javascript/en`,view:i.Notifications,parameters:{since:{description:`time range`,options:[{value:`daily`,label:`Today`},{value:`weekly`,label:`This week`},{value:`monthly`,label:`This month`}]},language:{description:"the feed language, available in [Trending page](https://github.com/trending/javascript?since=monthly) 's URL, don't filter option is `any`",default:`any`},spoken_language:{description:`natural language, available in [Trending page](https://github.com/trending/javascript?since=monthly) 's URL`}},features:{requireConfig:[{name:`GITHUB_ACCESS_TOKEN`,description:``}],requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`github.com/trending`],target:`/trending/:since`}],name:`Trending`,maintainers:[`DIYgod`,`jameschensmith`],handler:l,url:`github.com/trending`};async function l(i){if(!e.github||!e.github.access_token)throw new a(`GitHub trending RSS is disabled due to the lack of <a href="https://docs.rsshub.app/deploy/config#route-specific-configurations">relevant config</a>`);let c=i.req.param(`since`),l=i.req.param(`language`)===`any`?``:i.req.param(`language`),u=i.req.param(`spoken_language`)??``,d=`https://github.com/trending/${encodeURIComponent(l)}?since=${c}&spoken_language_code=${u}`,{data:f}=await r({method:`get`,url:d,headers:{Referer:d}}),p=s(f),m=p(`article`),h=m.toArray().map(e=>{let[t,n]=p(e).find(`h2`).text().split(`/`);return{name:n.trim(),owner:t.trim()}}),{data:g}=await r({method:`post`,url:`https://api.github.com/graphql`,headers:{Authorization:`bearer ${e.github.access_token}`},json:{query:`
            query {
            ${h.map((e,t)=>`
                _${t}: repository(owner: "${e.owner}", name: "${e.name}") {
                    ...RepositoryFragment
                }
            `).join(`
`)}
            }

            fragment RepositoryFragment on Repository {
                description
                forkCount
                nameWithOwner
                openGraphImageUrl
                primaryLanguage {
                    name
                }
                stargazerCount
            }
            `}}),_=Object.values(g.data).map(e=>{let t=h.find(t=>`${t.owner}/${t.name}`===e.nameWithOwner);return{...t,...e}});return{title:p(`title`).text(),link:d,item:_.map(e=>({title:e.nameWithOwner,author:e.owner,description:t(o.join(n,`templates/trending-description-ae7ed569.art`),{cover:e.openGraphImageUrl,desc:e.description,forks:e.forkCount,lang:e.primaryLanguage?.name||`Unknown`,stars:e.stargazerCount}),link:`https://github.com/${e.nameWithOwner}`}))}}export{c as route};