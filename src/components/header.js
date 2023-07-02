import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby';

const Header = () => {

    const data = useStaticQuery(graphql`
    query{
        site {
          siteMetadata {
            title
            siteUrl
            description
          }
        }
      }
    `)

    return (
        <header>
            <h1>{data.site.siteMetadata.title} </h1>
            <h1>{data.site.siteMetadata.siteUrl} </h1>
            <h1>{data.site.siteMetadata.description} </h1>
        </header>
    )
}