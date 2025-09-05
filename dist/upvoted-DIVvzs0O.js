import"./config-HRWLmo66.js";import"./logger-DHpG8Bim.js";import"./cache-C3AIQtoX.js";import"./render-DE4LRFBD.js";import"./parse-date-DHsdom8D.js";import"./ofetch-DRl42yaJ.js";import"./esm-shims-BDPl6Msv.js";import{ViewType as e}from"./types-D9T3SQ-7.js";import{baseUrl as t,getData as n,getList as r,variables as i}from"./utils-CR2pUEhr.js";const a={path:`/upvoted/:period?/:innerSharedContent?/:dateSort?`,example:`/daily/upvoted/7`,view:e.Articles,radar:[{source:[`app.daily.dev/upvoted`]}],parameters:{innerSharedContent:{description:`Where to Fetch inner Shared Posts instead of original`,default:`false`,options:[{value:`false`,label:`False`},{value:`true`,label:`True`}]},dateSort:{description:`Sort posts by publication date instead of popularity`,default:`true`,options:[{value:`false`,label:`False`},{value:`true`,label:`True`}]},period:{description:`Period of Lookup`,default:`7`,options:[{value:`7`,label:`Last Week`},{value:`30`,label:`Last Month`},{value:`365`,label:`Last Year`}]}},name:`Most upvoted`,maintainers:[`Rjnishant530`],handler:o,url:`app.daily.dev/upvoted`};async function o(e){let a=`${t}/posts/upvoted`,o=e.req.query(`limit`)?Number.parseInt(e.req.query(`limit`),10):20,s=e.req.param(`innerSharedContent`)?JSON.parse(e.req.param(`innerSharedContent`)):!1,c=e.req.param(`dateSort`)?JSON.parse(e.req.param(`dateSort`)):!0,l=e.req.param(`period`)?Number.parseInt(e.req.param(`period`),10):7,u=await n({query:`
    query MostUpvotedFeed(
    $loggedIn: Boolean! = false
    $first: Int
    $after: String
    $period: Int
    $supportedTypes: [String!] = ["article","share","freeform","video:youtube","collection"]
    $source: ID
    $tag: String
  ) {
    page: mostUpvotedFeed(first: $first, after: $after, period: $period, supportedTypes: $supportedTypes, source: $source, tag: $tag) {
      ...FeedPostConnection
    }
  }
  
  fragment FeedPostConnection on PostConnection {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        ...FeedPost
        contentHtml
        ...UserPost @include(if: $loggedIn)
      }
    }
  }
  
  fragment FeedPost on Post {
    ...FeedPostInfo
    sharedPost {
      id
      title
      image
      readTime
      permalink
      commentsPermalink
      createdAt
      type
      tags
      source {
        id
        handle
        permalink
        image
      }
      slug
      clickbaitTitleDetected
    }
    trending
    feedMeta
    collectionSources {
      handle
      image
    }
    numCollectionSources
    updatedAt
    slug
  }
  
  fragment FeedPostInfo on Post {
    id
    title
    image
    readTime
    permalink
    commentsPermalink
    createdAt
    commented
    bookmarked
    views
    numUpvotes
    numComments
    summary
    bookmark {
      remindAt
    }
    author {
      id
      name
      image
      username
      permalink
    }
    type
    tags
    source {
      id
      handle
      name
      permalink
      image
      type
    }
    userState {
      vote
      flags {
        feedbackDismiss
      }
    }
    slug
    clickbaitTitleDetected
  }


  
  fragment UserPost on Post {
    read
    upvoted
    commented
    bookmarked
    downvoted
  }

`,variables:{...i,period:l,first:o}}),d=r(u,s,c);return{title:`Most upvoted posts for developers | daily.dev`,link:a,item:d,description:`Find the most upvoted developer posts on daily.dev. Explore top-rated content in coding, tutorials, and tech news from the largest developer network in the world.`,logo:`${t}/favicon-32x32.png`,icon:`${t}/favicon-32x32.png`,language:`en-us`}}export{a as route};