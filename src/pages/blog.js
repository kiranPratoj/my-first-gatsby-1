import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPage = ({ data }) => {

    return (
        <Layout pageTitle={"Blog Page"} >
            {data.allFile.nodes.map(node => (
                <li key={node.name} > {node.name} </li>
            ))}
        </Layout>
    )
}
export const Head = ({ data }) => <Seo title={data.site.siteMetadata.title} />

export const query = graphql`
query {
    allFile {
      nodes {
        name
      }
    }
    site {
        siteMetadata {
          title
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