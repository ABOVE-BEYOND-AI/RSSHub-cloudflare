import{config as e}from"./config-HRWLmo66.js";import"./logger-DHpG8Bim.js";import"./helpers-LVq640iW.js";import{cache_default as t}from"./cache-C3AIQtoX.js";import{art as n}from"./render-DE4LRFBD.js";import{parseDate as r}from"./parse-date-DHsdom8D.js";import"./ofetch-DRl42yaJ.js";import{__dirname as i}from"./esm-shims-BDPl6Msv.js";import{got_default as a}from"./got-BaOFZRd4.js";import o from"node:path";import{load as s}from"cheerio";const c={path:`/latest-ranked/:routeParams?`,categories:[`game`],example:`/osu/latest-ranked/includeMode=osu&difficultyLimit=L3&difficultyLimit=U7`,features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1,supportRadar:!0},parameters:{routeParams:{description:`Used to pass route parameters in Query String format. Check out route description for more info.`,default:`null`}},name:`Latest Ranked Beatmap`,description:`
Subscribe to the new beatmaps on https://osu.ppy.sh/beatmapsets.

#### Parameter Description

Parameters allows you to:

- Filter game mode
- Limit beatmap difficulty
- Show/hide game mode in feed title

Below is a table of all allowed parameters passed to \`routeParams\`


| Name              | Default  | Description                                                                                                                                                                                                                                          |
| ----------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`includeMode\`     | All mode | Could be \`osu\`, \`mania\`, \`fruits\` or \`taiko\`. Specify included game mode of beatmaps. Including this paramseter multiple times to specify multiple game modes, e.g.: \`includeMode=osu&includeMode=mania\`. Subscribe to all game modes if not specified |
| \`difficultyLimit\` | None     | Lower/upper limit of star rating of the beatmaps in the beatmapset item, e.g.:\`difficultyLimit=U6\`. Checkout tips in descriptions for detailed explaination and examples.                                                                            |
| \`modeInTitle\`     | \`true\`   | \`true\` or \`false\` Add mode info into feed title.


This actual parameters should be passed as \`routeParams\` in URL Query String format without \`?\`, e.g.:

    /osu/latest-ranked/modeInTitle=true&includeMode=osu

:::tip
You could make use of \`difficultyLimit\` paramters to create a "high difficulty/low difficulty only" only feed.

For example, if you only wants to play low star rating beatmap like 1 or 2 star, you could subscribe to:

    /osu/latest-ranked/difficultyLimit=U2

This will filter out all beatmapsets that do not provide at least one beatmap with star rating<=\`2.00\`.

Similarly, you could use lower bound to filter out beatmapsets which don't have at least one beatmap
with star rating higher than a certain threshold.

    /osu/latest-ranked/difficultyLimit=L6

Now all beatmapsets that don't provided at least one beatmap with star rating higher than \`6.00\` will be filtered.
:::
`,maintainers:[`nfnfgo`],radar:[{source:[`osu.ppy.sh/beatmapsets`]}],handler:l};async function l(c){let l=c.req.param(`routeParams`),u=new URL(`https://osu.ppy.sh?${l}`).searchParams,d=u.getAll(`includeMode`),f=u.getAll(`difficultyLimit`),p=u.get(`modeInTitle`)??`true`,m=await t.tryGet(`https://osu.ppy.sh/beatmapsets:JSON`,async()=>{let e=await a.get(`https://osu.ppy.sh/beatmapsets`),t=s(e.data),n=JSON.parse(t(`#json-beatmaps`).text()??`{"beatmapsets": undefined}`),r=n.beatmapsets;if(r===void 0)throw Error(`Failed to retrieve JSON beatmap info from osu! website`);return r},e.cache.routeExpire,!1);for(let e of m)e.beatmaps.sort((e,t)=>e.difficulty_rating-t.difficulty_rating);d?.length&&d?.length>0&&(m=m.filter(e=>d.includes(e.beatmaps[0].mode)));let h=99,g=0;if(f&&f.length>0&&f.length<2){for(let e of f)e.startsWith(`U`)?h=Number.parseFloat(e.slice(1)):e.startsWith(`L`)&&(g=Number.parseFloat(e.slice(1)));let e=e=>!(e.beatmaps.at(0).difficulty_rating>h||e.beatmaps.at(-1).difficulty_rating<g);m=m.filter(t=>e(t))}function _(){if(!l)return``;let e=`Feed Configurations:
`;return e+=`Game Mode: ${d.length>0?JSON.stringify(d):`All modes`}\n`,e+=`Star Rating Limit: Lower=${g}, Upper=${h}`,e}let v=m.map(e=>{let t=r(e.ranked_date),a=e.covers[`cover@2x`]||e.covers.cover,s=e.covers[`card@2x`]||e.covers.card,c=`${Math.floor(e.beatmaps[0].total_length/60).toString().padStart(2,`0`)}:${(e.beatmaps[0].total_length%60).toString().padStart(2,`0`)}`,l={osu:`Osu!`,fruits:`Osu!Catch`,taiko:`Osu!Taiko`,mania:`Osu!Mania`},u=n(o.join(i,`templates/beatmapset-d6071e15.art`),{...e,readableTotalLength:c,modeLiteralToDisplayNameMap:l});return{title:`${p===`true`?`[${l[e.beatmaps[0].mode]}] `:``}${e.title_unicode??e.title}`,description:u,pubDate:t,link:`https://osu.ppy.sh/beatmapsets/${e.id}`,category:[`osu!`,`game`],author:[{name:e.creator}],image:a,banner:s,updated:e.last_updated}});return{title:`Osu! Latest Ranked Map`,link:`https://osu.ppy.sh/beatmapsets`,description:`Newly ranked beatmaps at https://osu.ppy.sh/beatmapsets.\n${_()}`,item:v}}export{c as route};