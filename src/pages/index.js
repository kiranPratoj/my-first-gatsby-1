// Step 1: Import React
import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page" >
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/mailchimp-Hv9CS6KZayQ-unsplash.jpg"
      />
      <h2>Welcome to my Gatsby site!</h2>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title={"Home Page"} />

// Step 3: Export your component
export default IndexPage