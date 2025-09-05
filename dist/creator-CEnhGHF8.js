import"./config-HRWLmo66.js";import"./logger-DHpG8Bim.js";import{cache_default as e}from"./cache-C3AIQtoX.js";import{art as t}from"./render-DE4LRFBD.js";import{parseDate as n}from"./parse-date-DHsdom8D.js";import{ofetch_default as r}from"./ofetch-DRl42yaJ.js";import{__dirname as i}from"./esm-shims-BDPl6Msv.js";import a from"node:path";import{load as o}from"cheerio";const s=`https://www.fantube.tokyo`,c=t=>e.tryGet(`fantube:creator:${t}`,async()=>{let e=await r(`${s}/r18/creator/${t}`,{headers:{cookie:`fantube-ageVerified=1;`}}),n=o(e),i=JSON.parse(n(`script:contains("creatorFragment")`).text().match(/^self\.__next_f\.push\((.+?)\)$/)?.[1]||`{}`),a=JSON.parse(i[1].slice(2)),c=a.find(e=>e?.hasOwnProperty(`children`)).children.find(e=>Object.values(e).includes(`div`)).find(e=>e?.hasOwnProperty(`children`)).children.find(e=>e?.hasOwnProperty(`creatorFragment`)).creatorFragment;return c}),l=(t,n)=>e.tryGet(`fantube:creatorPostReelList:${t}:${n}`,async()=>{let e=await r(`https://api.prd.fantube.tokyo/graphql`,{headers:{Referer:s},body:JSON.stringify({query:`query CreatorPostReelList($identifier: String!, $first: Int, $after: String, $last: Int, $before: String) {
  posts(
    where: {status: {equals: PUBLISHED}, creator: {is: {identifier: {equals: $identifier}}}}
    orderBy: [{pinnedAt: {nulls: last, sort: desc}}, {order: asc}, {createdAt: desc}, {id: desc}]
    first: $first
    after: $after
    last: $last
    before: $before
  ) {
    nodes {
      ...PostSwiper_Post
    }
    pageInfo {
      hasNextPage
      endCursor
      hasPreviousPage
      startCursor
    }
  }
}

fragment PostSwiper_Post on Post {
  id
  title
  isFavorite
  favoritesCount
  ...PostSwiperSlide_Post
}

fragment PostSwiperSlide_Post on Post {
  id
  type
  title
  price
  creator {
    displayName
  }
  ...PostVideoElement_Post
  ...PostImageElement_Post
}

fragment PostVideoElement_Post on Post {
  id
  title
  contentData {
    ... on PostVideoType {
      __typename
      videoUrl
      isSample
      noSample
      durationSeconds
    }
  }
  isFavorite
  sampleVideoId
  thumbnailUrl
  creator {
    displayName
  }
  ...PostInfo_Post
  ...VideoControlIcons_Post
  ...PurchaseWrapper_Post
}

fragment PostInfo_Post on Post {
  title
  description
  publishStartAt
  price
  isBuyEnabled
  ...Profile_Post
}

fragment Profile_Post on Post {
  id
  creator {
    id
    isSelf
    identifier
    displayName
    avatarImageUrl
    following
  }
}

fragment VideoControlIcons_Post on Post {
  id
  isMine
  pinnedAt
  favoritesCount
  ...PostComment_Post
}

fragment PostComment_Post on Post {
  id
  isMine
  canComment
  comments(
    where: {OR: [{parentPostComment: {is: {isDeleted: {equals: false}}}}, {parentPostCommentId: {equals: null}}], isDeleted: {equals: false}}
  ) {
    totalCount
  }
  ...PostCommentReplyDrawer_Post
}

fragment PostCommentReplyDrawer_Post on Post {
  id
  isMine
  canComment
}

fragment PurchaseWrapper_Post on Post {
  id
  title
  price
  creator {
    displayName
  }
  ...PostPurchaseDialog_Post
  ...PostPurchaseSingleDialog_Post
}

fragment PostPurchaseDialog_Post on Post {
  id
  isBuyEnabled
  price
  thumbnailUrl
  title
  planPosts(
    orderBy: [{plan: {deleteRequestAt: {sort: desc, nulls: first}}}, {plan: {isRecommended: desc}}, {plan: {price: asc}}]
  ) {
    nodes {
      plan {
        id
        title
        price
        ...PlanSwiper_Plan
      }
    }
  }
  creator {
    displayName
  }
  ...PostPurchaseSingleDialog_Post
}

fragment PlanSwiper_Plan on Plan {
  id
  ...PlanSwiperItem_Plan
}

fragment PlanSwiperItem_Plan on Plan {
  id
  title
  price
  isArchive
  isRecommended
  deleteRequestAt
  isSubscribing
  subscriptionCloseAt
  capacity
  subscribersCount
  planPosts(
    where: {post: {is: {status: {equals: PUBLISHED}}}}
    first: 7
    orderBy: [{createdAt: desc}]
  ) {
    nodes {
      post {
        id
        thumbnailUrl
        title
      }
    }
    totalCount
  }
  ...PlanUnavailableNote_Plan
}

fragment PlanUnavailableNote_Plan on Plan {
  capacity
  subscribersCount
  subscriptionCloseAt
  deleteRequestAt
}

fragment PostPurchaseSingleDialog_Post on Post {
  id
  price
  thumbnailUrl
  title
  isBuyEnabled
}

fragment PostImageElement_Post on Post {
  id
  title
  contentData {
    __typename
    ... on PostImageType {
      encrypted
      imageUrls
      count
    }
  }
  isFavorite
  creator {
    displayName
  }
  ...PostInfo_Post
  ...ImageControlIcons_Post
  ...PurchaseWrapper_Post
}

fragment ImageControlIcons_Post on Post {
  id
  isMine
  pinnedAt
  favoritesCount
  ...PostComment_Post
}`,variables:{identifier:t,first:n,after:``},operationName:`CreatorPostReelList`}),method:`POST`});return e.data.posts.nodes}),u={path:`/r18/creator/:identifier`,categories:[`multimedia`],example:`/fantube/r18/creator/miyuu`,parameters:{identifier:`User handle`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`www.fantube.tokyo/r18/creator/:identifier`]}],name:`User Posts`,maintainers:[`TonyRL`],handler:f},d=({description:e,thumbnailUrl:n,sampleVideoId:r,imageUrls:o})=>t(a.join(i,`templates/post-7ca176ac.art`),{description:e,thumbnailUrl:n,sampleVideoId:r,imageUrls:o});async function f(e){let{identifier:t}=e.req.param(),r=Number.parseInt(e.req.query(`limit`)||18,10),i=await c(t),a=await l(t,r),o=a.map(e=>({title:e.title.replaceAll(`
`,` `).trim(),description:d({description:e.description,thumbnailUrl:e.thumbnailUrl,sampleVideoId:e.sampleVideoId,imageUrls:e.contentData?.imageUrls||[]}),link:`${s}/r18/post/${e.id}?creator=${t}`,author:e.creator.displayName,pubDate:n(e.publishStartAt),image:e.thumbnailUrl}));return{title:`${i.displayName}のプロフィール｜クリエイターページ｜FANTUBE(ファンチューブ)`,link:`${s}/r18/creator/${t}`,description:i.description,image:i.avatarImageUrl,icon:i.avatarImageUrl,logo:i.avatarImageUrl,language:`ja`,item:o}}export{u as route};