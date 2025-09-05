import"./config-HRWLmo66.js";import"./logger-DHpG8Bim.js";import"./helpers-LVq640iW.js";import{art as e}from"./render-DE4LRFBD.js";import"./ofetch-DRl42yaJ.js";import{__dirname as t}from"./esm-shims-BDPl6Msv.js";import{got_default as n}from"./got-BaOFZRd4.js";import{generateRssData as r}from"./utils-Devyn_ZM.js";import i from"node:path";const a={path:`/new-arrivals/:country/:gender`,categories:[`shopping`],example:`/arcteryx/new-arrivals/us/mens`,parameters:{country:`country`,gender:`gender`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!0,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`arcteryx.com/:country/en/c/:gender/new-arrivals`]}],name:`New Arrivals`,maintainers:[`EthanWng97`],handler:o,description:`Country

| United States | Canada | United Kingdom |
| ------------- | ------ | -------------- |
| us            | ca     | gb             |

  gender

| male | female |
| ---- | ------ |
| mens | womens |

::: tip
  Parameter \`country\` can be found within the url of \`Arcteryx\` website.
:::`};async function o(a){let{country:o,gender:s}=a.req.param(),c=`https://arcteryx.com/${o}/en/`,l=`${c}api/fredhopper/query`,u=`${c}shop/`,d=`${c}c/${s}/new-arrivals`,f=await n({method:`get`,url:l,searchParams:{fh_location:`//catalog01/en_CA/gender>{${s}}/intended_use>{newarrivals}`,fh_country:o,fh_view_size:`all`}}),p=f.data.universes.universe[1][`items-section`].items.item.map((e,t,n)=>r(e,t,n,o));return{title:`Arcteryx - New Arrivals(${o.toUpperCase()}) - ${s.toUpperCase()}`,link:d,description:`Arcteryx - New Arrivals(${o.toUpperCase()}) - ${s.toUpperCase()}`,item:p.map(n=>({title:n.name,link:u+n.slug,description:e(i.join(t,`templates/product-description-3714d586.art`),{item:n})}))}}export{a as route};