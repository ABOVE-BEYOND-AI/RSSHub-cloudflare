import"./config-HRWLmo66.js";import"./logger-DHpG8Bim.js";import"./helpers-LVq640iW.js";import{cache_default as e}from"./cache-C3AIQtoX.js";import{art as t}from"./render-DE4LRFBD.js";import{parseDate as n}from"./parse-date-DHsdom8D.js";import"./ofetch-DRl42yaJ.js";import{__dirname as r}from"./esm-shims-BDPl6Msv.js";import"./got-BaOFZRd4.js";import{ViewType as i}from"./types-D9T3SQ-7.js";import{getAuthorFeed as a,getProfile as o,resolveHandle as s}from"./utils-yHcS4cTQ.js";import c from"node:path";import l from"node:querystring";const u={path:`/profile/:handle/:routeParams?`,categories:[`social-media`],view:i.SocialMedia,example:`/bsky/profile/bsky.app`,parameters:{handle:`User handle, can be found in URL`,routeParams:`Filter parameter, Use filter to customize content types`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`bsky.app/profile/:handle`]}],name:`Post`,maintainers:[`TonyRL`],handler:d,description:`
| Filter Value | Description |
|--------------|-------------|
| posts_with_replies | Includes Posts, Replies, and Reposts |
| posts_no_replies | Includes Posts and Reposts, without Replies |
| posts_with_media | Shows only Posts containing media |
| posts_and_author_threads | Shows Posts and Threads, without Replies and Reposts |

Default value for filter is \`posts_and_author_threads\` if not specified.

Example:
- \`/bsky/profile/bsky.app/filter=posts_with_replies\``};async function d(i){let u=i.req.param(`handle`),d=l.parse(i.req.param(`routeParams`)),f=d.filter||`posts_and_author_threads`,p=await s(u,e.tryGet),m=await o(p,e.tryGet),h=await a(p,f,e.tryGet),g=h.feed.map(({post:e})=>({title:e.record.text.split(`
`)[0],description:t(c.join(r,`templates/post-7b0043bb.art`),{text:e.record.text.replaceAll(`
`,`<br>`),embed:e.embed}),author:e.author.displayName,pubDate:n(e.record.createdAt),link:`https://bsky.app/profile/${e.author.handle}/post/${e.uri.split(`app.bsky.feed.post/`)[1]}`,upvotes:e.likeCount,comments:e.replyCount}));return i.set(`json`,{DID:p,profile:m,authorFeed:h}),{title:`${m.displayName} (@${m.handle}) — Bluesky`,description:m.description?.replaceAll(`
`,` `),link:`https://bsky.app/profile/${m.handle}`,image:m.avatar,icon:m.avatar,logo:m.avatar,item:g,allowEmpty:!0}}export{u as route};