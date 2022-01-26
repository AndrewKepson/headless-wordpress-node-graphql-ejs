import { request, gql } from 'graphql-request'

const API_ENDPOINT = process.env.WP_GRAPHQL_ENDPOINT

// Get All WP Posts
export const getWpPosts = async () => {
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
}

// Get Single WP Post
export const getWpPost = async slug => {
  const postQuery = gql`
    query WpPostQuery($slug: ID!) {
      post(idType: SLUG, id: $slug) {
        title
        slug
        content(format: RENDERED)
      }
    }
  `

  const result = await request(API_ENDPOINT, postQuery, { slug })

  return result
}
