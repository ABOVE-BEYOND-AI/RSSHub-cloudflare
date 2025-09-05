import"./config-HRWLmo66.js";import"./logger-DHpG8Bim.js";import"./helpers-LVq640iW.js";import{art as e}from"./render-DE4LRFBD.js";import"./ofetch-DRl42yaJ.js";import{__dirname as t}from"./esm-shims-BDPl6Msv.js";import{got_default as n}from"./got-BaOFZRd4.js";import r from"node:path";const i={path:`/user/sheets/:username/:iso?/:freeOnly?`,categories:[`shopping`],example:`/mymusicsheet/user/sheets/HalcyonMusic/USD/1`,parameters:{username:`用户名，可在URL中找到`,iso:"用于显示价格的ISO 4217货币代码, 支持常见代码, 默认为人民币, 即`CNY`",freeOnly:`只返回免费谱, 任意值为开启`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`mymusicsheet.com/:username/*`,`mymusicsheet.com/:username`],target:`/user/sheets/:username`}],name:`User Sheets`,maintainers:[`Freddd13`],handler:a,description:`关于 ISO 4217，请参考[维基百科](https://zh.wikipedia.org/zh-cn/ISO_4217#%E7%8E%B0%E8%A1%8C%E4%BB%A3%E7%A0%81)`};async function a(i){let{username:a,iso:o=`CNY`,freeOnly:s}=i.req.param(),c=await n(`https://payport.pd.mapia.io/v2/currency`,{searchParams:{serviceProvider:`mms`,"ngsw-bypass":!0,"no-cache":Date.now(),skipHeaders:!0},responseType:`json`}),l=c.data,u=await n.post(`https://mms.pd.mapia.io/mms/graphql`,{json:{operationName:`loadArtistSheets`,query:`
          query loadArtistSheets($data: SheetSearchInput!) {
            sheetSearch(data: $data) {
              list {
                productId
                productType
                metaSong
                metaMaker
                metaMusician
                metaMemo
                instruments
                level
                price
                sheetId
                status
                author {
                  name
                  artistUrl
                  profileUrl
                }
                youtubeId
                title
                supportCountry
                excludeCountries
                __typename
              }
              total
              current
              listNum
            }
          }`,variables:{data:{listNum:10,paginate:`page`,includeChord:null,includeLyrics:null,page:1,level:null,instruments:[],orderBy:{createdAt:`DESC`},isFree:!!s,category:null,artistUrl:a,aggregationKeywords:[`PACKAGE_IDS`,`TAG_IDS`,`INSTRUMENTS`,`SHEET_TYPE`,`INCLUDE_CHORD`,`INCLUDE_LYRICS`,`INSTRUMENTATION`,`LEVEL`,`CATEGORY`],aggregationKeySize:20}}},responseType:`json`}),d=u.data.data.sheetSearch.list,f=d.map(n=>{let i=`Unknown`,s=Number.parseFloat(n.price);if(n.price===0)i=`Free`;else if(!Number.isNaN(s)&&Number.isFinite(s)){let e=l[o];e&&(i=`${(s*e).toFixed(2)} ${o}`)}let c=n.youtubeId,u={musicName:n.metaSong,musicMemo:n.metaMemo,musicianName:n.metaMusician,author:n.author.name,instruments:n.instruments,status:n.status,price:i};return{title:`${n.author.name} | ${n.title} | ${i}`,link:`https://www.mymusicsheet.com/${a}/${n.sheetId}`,itunes_item_image:n.author.profileUrl,description:e(r.join(t,`templates/description-21692767.art`),{youtubeId:c,content:u})}});return{title:`${a}'s sheets`,link:`https://www.mymusicsheet.com/${a}?viewType=sheet&orderBy=createdAt`,item:f}}export{i as route};