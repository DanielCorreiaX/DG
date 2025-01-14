const SinglePage = `
 query SinglePage($slug: String!) {
   page(where: { slug: $slug }) {
     title
     seoOverride {
       title
       image {
         height
         width
         url
       }
       description
     }
     content {
       html
       raw
     }
   }
 }
`
const AllPosts = `
 query AllPosts {
   posts(orderBy: publishedAt_DESC) {
     id
     excert
     slug
     title
     date
   }
 }
`
const SinglePost = `
    query SinglePost($slug: String!){
        post(where: { slug: $slug }) {
            createdAt
            updatedAt
            publishedAt
            title
            slug
            date
            content{
                raw
                html
                markdown
                text
                }
            coverImage {
                url
                width
                height    
                }
            athor{
                ... on Author {
                    remotetypename: __typename
                    remoteid: id
                    name
                    title
                    picture {
                        url
                        width
                        height
                        }
                    }
                }
            }
        }
    `
export { AllPosts, SinglePosts}
