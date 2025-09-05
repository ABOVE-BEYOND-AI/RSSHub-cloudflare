import"./config-HRWLmo66.js";import"./logger-DHpG8Bim.js";import"./helpers-LVq640iW.js";import{art as e}from"./render-DE4LRFBD.js";import"./ofetch-DRl42yaJ.js";import{__dirname as t}from"./esm-shims-BDPl6Msv.js";import{got_default as n}from"./got-BaOFZRd4.js";import r from"node:path";const i=`https://leetcode.cn`,a={path:`/dailyquestion/cn`,radar:[{source:[`leetcode.cn/`]}],name:`Unknown`,maintainers:[],handler:o,url:`leetcode.cn/`};async function o(){let a={date:``,link:``,titleSlug:``,content:``,frontedId:``,difficulty:``,tags:``},o=i+`/graphql`,s={query:`query questionOfToday {
            todayRecord {
                date
                question {
                    frontendQuestionId: questionFrontendId
                    titleSlug
                }
            }
        } `,variables:{}},c=await n({method:`post`,url:o,headers:{"content-type":`application/json`},body:JSON.stringify(s)}),l=c.data.data.todayRecord[0];a.date=l.date,a.titleSlug=l.question.titleSlug,a.link=i+`/problems/`+a.titleSlug;let u={operationName:`questionData`,query:`query questionData($titleSlug: String!) {
            question(titleSlug: $titleSlug) {
                questionId
                questionFrontendId
                title
                titleSlug
                content
                translatedTitle
                translatedContent
                difficulty
                topicTags {
                    name
                    slug
                    translatedName
                    __typename
                }
                __typename
            }
        }`,variables:{titleSlug:a.titleSlug}},d=await n({method:`post`,url:o,headers:{"content-type":`application/json`},body:JSON.stringify(u)}),f={Medium:`🟡`,Easy:`🟢`,Hard:`🔴`},p=d.data.data.question;a.content=p.translatedContent,a.frontedId=p.questionFrontendId,a.difficulty=f[p.difficulty];let m=p.topicTags;m=m.map(e=>{let t=`#`+e.slug;return t=t.replaceAll(`-`,`_`),t}),a.tags=m.join(` `);let h={title:a.frontedId+`.`+a.titleSlug,description:e(r.join(t,`templates/question-description-1f696f3d.art`),{question:a}),link:a.link};return{title:`LeetCode 每日一题`,link:`https://leetcode.cn`,description:`Leetcode 每日一题`,item:[{title:h.title,description:h.description+a.content,link:h.link}]}}export{a as route};