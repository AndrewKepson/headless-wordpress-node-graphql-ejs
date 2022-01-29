import { request, gql } from 'graphql-request'

const API_ENDPOINT = process.env.WP_GRAPHQL_ENDPOINT

// Get All WP Posts
export const getWpPosts = async () => {
  try {
    const wpQuery = gql`
      {
        posts {
          edges {
            node {
              id
              title
              slug
              featuredImage {
                node {
                  sourceUrl
                  altText
                }
              }
            }
          }
        }
      }
    `

    const result = await request(API_ENDPOINT, wpQuery)

    return [...result.posts.edges.map(post => post.node)]
  } catch (e) {
    throw new Error(e)
  }
}

// Get Single WP Post
export const getWpPost = async slug => {
  try {
    const postQuery = gql`
      query WpPostQuery($slug: ID!) {
        post(idType: SLUG, id: $slug) {
          seo {
            title
            metaDesc
          }
          title
          slug
          content(format: RENDERED)
        }
      }
    `

    const result = await request(API_ENDPOINT, postQuery, { slug })

    return result
  } catch (e) {
    throw new Error(e)
  }
}
