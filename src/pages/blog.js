import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPage = ({ data }) => {

    return (
        <Layout pageTitle={"Blog Page"} >
            {data.allMdx.nodes.map(node => (
                <article key={node.id} >
                    <h2>{node.frontmatter.title} </h2>
                    <p>Posted on: {node.frontmatter.date} </p>
                    <p>{node.excerpt} </p>
                </article>
            ))}
        </Layout>
    )
}
export const Head = ({ data }) => <Seo title={data.site.siteMetadata.title} />

export const query = graphql`
query {
    allMdx {
      nodes {
        frontmatter {
          date(formatString: "MMMM D YYYY")
          slug
          title
        }
        id
        excerpt
      }
    }
    site {
        siteMetadata {
          title
          siteUrl
          description
        }
      }
  }
`



export default BlogPage


// import * as React from 'react'
// import { graphql } from 'gatsby'
// import Layout from '../components/layout'
// import Seo from '../components/seo'

// const BlogPage = ({ data }) => {
//   return (
//     <Layout pageTitle="My Blog Posts">
//       <ul>
//       {
//         data.allFile.nodes.map(node => (
//           <li key={node.name}>
//             {node.name}
//           </li>
//         ))
//       }
//       </ul>
//     </Layout>
//   )
// }

// export const query = graphql`
//   query {
//     allFile {
//       nodes {
//         name
//       }
//     }
//   }
// `

// export const Head = () => <Seo title="My Blog Posts" />

// export default BlogPage