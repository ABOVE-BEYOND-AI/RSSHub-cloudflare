import"./config-HRWLmo66.js";import"./logger-DHpG8Bim.js";import{art as e}from"./render-DE4LRFBD.js";import{ofetch_default as t}from"./ofetch-DRl42yaJ.js";import{__dirname as n}from"./esm-shims-BDPl6Msv.js";import r from"node:path";const i={0:`Community`,1:`Microtransaction`,2:`Collection`,3:`Art`,4:`Video`,5:`Screenshot`,6:`Game`,7:`Software`,8:`Concept`,9:`WebGuide`,10:`IntegratedGuide`,11:`Merch`,12:`ControllerBinding`,13:`SteamworksAccessInvite`,14:`SteamVideo`,15:`GameManagedItem`},a={path:`/appcommunityfeed/:appid/:routeParams?`,categories:[`game`],example:`/steam/appcommunityfeed/730`,parameters:{appid:`Steam appid, can be found on the community hub page or store page URL.`,routeParams:`Query parameters.`},radar:[{title:`Community Hub`,source:[`steamcommunity.com/app/:appid`],target:`/appcommunityfeed/:appid`},{title:`Community Hub`,source:[`store.steampowered.com/app/:appid/*/`],target:`/appcommunityfeed/:appid`}],description:`Query Parameters:

| Name                   | Type   | Description             |
| ---------------------- | ------ | ----------------------- |
| p                      | string | p                       |
| rgSections[]           | string | rgSections              |
| filterLanguage         | string | Filter Language         |
| languageTag            | string | Language Tag            |
| nMaxInappropriateScore | string | Max Inappropriate Score |

Example:
- \`/appcommunityfeed/730/p=1&rgSections[]=2&rgSections[]=4&filterLanguage=english&languageTag=english&nMaxInappropriateScore=1\` for CS2 Screenshot and Artwork contents.
- \`/appcommunityfeed/730/rgSections[]=6\` for CS2 Workshop contents only.
- \`/appcommunityfeed/570/rgSections[]=3&rgSections[]=9\` for Dota2 Video and Guides contents.

::: tip
It can also access community hub contents that require a logged-in account.
:::
`,name:`Steam Community Hub Feeds`,maintainers:[`NyaaaDoge`],handler:async a=>{let{appid:o=730,routeParams:s}=a.req.param(),c=`https://steamcommunity.com/library/appcommunityfeed/${o}${s?`?${s}`:``}`,l=await t(c);return{title:`${o} Steam Community Hub`,link:`https://steamcommunity.com/app/${o}`,item:l.hub.map(t=>({title:t.title===``?i[t.type]:t.title,link:`https://steamcommunity.com/sharedfiles/filedetails/?id=${t.published_file_id}`,description:e(r.join(n,`templates/appcommunityfeed-description-b79402f1.art`),{image:t.full_image_url,description:t.description}),author:t.creator.name,category:i[t.type]}))}}};export{a as route};