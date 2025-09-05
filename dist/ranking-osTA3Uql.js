import{art as e}from"./render-DE4LRFBD.js";import{__dirname as t}from"./esm-shims-BDPl6Msv.js";import{invalid_parameter_default as n}from"./invalid-parameter-CfUmvEUg.js";import r from"node:path";import{BigGenre as i,Genre as a,GenreNotation as o,NarouNovelFetch as s,SearchBuilder as c}from"narou";let l=function(e){return e.DAILY=`daily`,e.WEEKLY=`weekly`,e.MONTHLY=`monthly`,e.QUARTER=`quarter`,e.YEARLY=`yearly`,e.TOTAL=`total`,e}({}),u=function(e){return e.TOTAL=`total`,e.SHORT=`t`,e.ONGOING=`r`,e.COMPLETE=`er`,e}({}),d=function(e){return e.LIST=`list`,e.GENRE=`genre`,e.ISEKAI=`isekai`,e}({});const f={[l.DAILY]:`dailypoint`,[l.WEEKLY]:`weeklypoint`,[l.MONTHLY]:`monthlypoint`,[l.QUARTER]:`quarterpoint`,[l.YEARLY]:`yearlypoint`,[l.TOTAL]:`hyoka`},p={[l.DAILY]:`pt`,[l.WEEKLY]:`weekly_point`,[l.MONTHLY]:`monthly_point`,[l.QUARTER]:`quarter_point`,[l.YEARLY]:`yearly_point`,[l.TOTAL]:`global_point`},m={[l.DAILY]:`日間`,[l.WEEKLY]:`週間`,[l.MONTHLY]:`月間`,[l.QUARTER]:`四半期`,[l.YEARLY]:`年間`,[l.TOTAL]:`累計`},h={[u.TOTAL]:`すべて`,[u.SHORT]:`短編`,[u.ONGOING]:`連載中`,[u.COMPLETE]:`完結済`};let g=function(e){return e.RENAI=`1`,e.FANTASY=`2`,e.OTHER=`o`,e}({});const _={[g.RENAI]:`〔恋愛〕`,[g.FANTASY]:`〔ファンタジー〕`,[g.OTHER]:`〔文芸・SF・その他〕`};function v(e){let[t,r,i=u.TOTAL]=e.split(`_`),a=t,o=r,s=i,c=[Object.values(l).includes(a),Object.values(g).includes(o),Object.values(u).includes(s)].every(Boolean);if(!c)throw new n(`Invalid isekai ranking type: ${e}`);return{period:a,category:o,novelType:s}}function y(e,t,r,a){let o={order:f[e],gzip:5,lim:Math.ceil(a/2*1.2)};switch(r!==u.TOTAL&&(o.type=r),t){case g.RENAI:o.biggenre=i.Renai;break;case g.FANTASY:o.biggenre=i.Fantasy;break;case g.OTHER:o.biggenre=`${i.Bungei}-${i.Sf}-${i.Sonota}`;break;default:throw new n(`Invalid Isekai category: ${t}`)}return o}async function b(i,a){let{period:o,category:l,novelType:u}=v(i),d=`https://yomou.syosetu.com/rank/isekailist/type/${i}`,f=`[${m[o]}] 異世界転生/転移${_[l]}ランキング - ${h[u]} BEST${a}`,g=y(o,l,u,a),b=new s,[x,S]=await Promise.all([new c({...g,istensei:1},b).execute(),new c({...g,istenni:1},b).execute()]),C=[...x.values,...S.values],w=[...new Map(C.map(e=>[e.ncode,e])).values()],T=p[o];if(!T)throw new n(`Invalid period: ${o}`);let E=w.sort((e,t)=>(t[T]||0)-(e[T]||0)).map((n,i)=>({title:`#${i+1} ${n.title}`,link:`https://ncode.syosetu.com/${String(n.ncode).toLowerCase()}`,description:e(r.join(t,`templates/description-e1f33e28.art`),{novel:n}),author:n.writer,category:n.keyword.split(/[\s/\uFF0F]/).filter(Boolean)}));return{title:`小説家になろう - ${f}`,link:d,item:E.slice(0,a),language:`ja`}}const x=()=>{let e=[{value:d.LIST,label:`総合ランキング (General Ranking)`},{value:d.GENRE,label:`ジャンル別ランキング (Genre Ranking)`},{value:d.ISEKAI,label:`異世界転生/転移ランキング (Isekai Ranking)`}],t=Object.entries(l).map(([e,t])=>({value:t,label:`${m[t]} (${e})`})),n=Object.entries(u).map(([e,t])=>({value:t,label:`${h[t]} (${e})`})),r=Object.entries(a).filter(([,e])=>typeof e==`number`).map(([e,t])=>({value:t.toString(),label:e})),i=Object.entries(g).map(([e,t])=>({value:t,label:`${_[t]} (${e})`}));return{listType:{description:`Ranking type`,options:e},type:{description:`Detailed ranking type, can be found in Syosetu ranking URLs`,options:[...t.flatMap(e=>n.map(t=>({value:`${e.value}_${t.value}`,label:`${d.LIST} - [${m[e.value]}] 総合ランキング - ${h[t.value]}`}))),...t.flatMap(e=>r.flatMap(t=>n.map(n=>({value:`${e.value}_${t.value}_${n.value}`,label:`${d.GENRE} - [${m[e.value]}] ${o[t.value]}ランキング - ${h[n.value]}`})))),...t.flatMap(e=>i.flatMap(t=>n.map(n=>({value:`${e.value}_${t.value}_${n.value}`,label:`${d.ISEKAI} - [${m[e.value]}] 異世界転生/転移${_[t.value]}ランキング - ${h[n.value]}`}))))]}}},S=()=>{let e=Object.values(l).map(e=>({title:`${m[e]}ランキング BEST5`,source:[`yomou.syosetu.com/rank/top/`],target:`/ranking/list/${e}_total?limit=5`})),t=Object.entries(a).filter(([,e])=>typeof e==`number`&&e!==a.SonotaReplay&&e!==a.NonGenre).map(([,e])=>({title:`[${m.daily}] ${o[e]}ランキング BEST5`,source:[`yomou.syosetu.com/rank/top/`],target:`/ranking/genre/daily_${e}_total?limit=5`})),n=Object.values(g).map(e=>({title:`[${m.daily}] 異世界転生/転移${_[e]}ランキング BEST5`,source:[`yomou.syosetu.com/rank/top/`],target:`/ranking/isekai/daily_${e}_total?limit=5`}));return[...e,...t,...n]},C={path:`/ranking/:listType/:type`,categories:[`reading`],example:`/syosetu/ranking/list/daily_total?limit=50`,parameters:x(),features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`Rankings`,url:`yomou.syosetu.com/rank/top`,maintainers:[`SnowAgar25`],handler:E,description:`
| Keyword | Description | 説明 |
| --- | --- | --- |
| list | Overall Ranking | 総合ランキング |
| genre | Genre Ranking | ジャンル別ランキング |
| isekai | Isekai/Reincarnation/Transfer Ranking | 異世界転生/転移ランキング |

| Period | Description |
| --- | --- |
| daily | Daily Ranking |
| weekly | Weekly Ranking |
| monthly | Monthly Ranking |
| quarter | Quarterly Ranking |
| yearly | Yearly Ranking |


| Type | Description |
| --- | --- |
| total | All Works |
| t | Short Stories |
| r | Ongoing Series |
| er | Completed Series |

::: warning
Please note that novel type options may vary depending on the ranking category.

ランキングの種類によって、小説タイプが異なる場合がございますのでご注意ください。
:::

::: danger 注意事項
The "注目度ランキング" (Attention Ranking) is not supported as syosetu does not provide a public API for this feature and the results cannot be replicated through the search API.

「注目度ランキング」については、API が非公開で検索 API でも同様の結果を得ることができないため、本 Route ではサポートしておりません。
:::

::: tip 異世界転生/転移ランキングについて (Isekai)
When multiple works have the same points, their order may differ from syosetu's ranking as syosetu randomizes the order for works with identical points.

集計の結果、同じポイントの作品が複数存在する場合、Syosetu ではランダムで順位が決定されるため、本 Route の順位と異なる場合があります。
:::
`,radar:[{source:[`yomou.syosetu.com/rank/list/type/:type`],target:`/ranking/list/:type`},{source:[`yomou.syosetu.com/rank/genrelist/type/:type`],target:`/ranking/genre/:type`},{source:[`yomou.syosetu.com/rank/isekailist/type/:type`],target:`/ranking/isekai/:type`},...S()]};function w(e){let[t,r]=e.split(`_`),i=t,a=r,o=[Object.values(l).includes(i),Object.values(u).includes(a)].every(Boolean);if(!o)throw new n(`Invalid general ranking type: ${e}`);return{period:i,novelType:a}}function T(e){let[t,r,i=u.TOTAL]=e.split(`_`),o=t,s=Number(r),c=i,d=[Object.values(l).includes(o),Object.values(a).includes(s),Object.values(u).includes(c),s!==a.SonotaReplay,s!==a.NonGenre].every(Boolean);if(!d)throw new n(`Invalid genre ranking type: ${e}`);return{period:o,genre:s,novelType:c}}async function E(i){let{listType:a,type:l}=i.req.param(),p=a,g=Math.min(Number(i.req.query(`limit`)??300),300),_=new s,v={gzip:5,lim:g},y,x;switch(p){case d.LIST:{let{period:e,novelType:t}=w(l);y=`https://yomou.syosetu.com/rank/list/type/${l}`,x=`[${m[e]}] 総合ランキング - ${h[t]} BEST${g}`,v.order=f[e],t!==u.TOTAL&&(v.type=t);break}case d.GENRE:{let{period:e,genre:t,novelType:n}=T(l);y=`https://yomou.syosetu.com/rank/genrelist/type/${l}`,x=`[${m[e]}] ${o[t]}ランキング - ${h[n]} BEST${g}`,v.order=f[e],v.genre=t,n!==u.TOTAL&&(v.type=n);break}case d.ISEKAI:return b(l,g);default:throw new n(`Invalid ranking type: ${l}`)}let S=new c(v,_),C=await S.execute(),E=C.values.map((n,i)=>({title:`#${i+1} ${n.title}`,link:`https://ncode.syosetu.com/${String(n.ncode).toLowerCase()}`,description:e(r.join(t,`templates/description-e1f33e28.art`),{novel:n}),author:n.writer,category:n.keyword.split(/[\s/\uFF0F]/).filter(Boolean)}));return{title:`小説家になろう - ${x}`,link:y,item:E,language:`ja`}}export{C as route};