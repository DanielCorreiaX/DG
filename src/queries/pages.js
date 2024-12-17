const AllPages =`
    query AllPages {
        pages{
            id
            slug
            title
        }
    }
`

const SlinglePage = `
    query SinglePage($slug: String!) {
    page(where: { slug; $slug }){
        title
        SEO override{
            title
            image{
                height
                width
                url
            }
            description
        }
        content{
            html
            raw
            }
        }
    }
    `