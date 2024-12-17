const AllPages =`
    query Allposts {
        posts(orderBy: publyshedAt_desc){
            id
            Title
            Slug
            date
            excerto
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