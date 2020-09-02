import React from "react"
import { graphql } from "gatsby"

export default function Home({ data }) {
  console.log(data)
  return <div>Hello world!</div>
}

export const query = graphql`
  {
    allPosts: allMdx {
      edges {
        node {
          ...productFields
        }
      }
    }
  }
`

export const fragment = graphql`
  fragment productFields on Mdx {
    id
    frontmatter {
      title
      coverImage {
        id
        name
      }
    }
  }
`
