import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const About = () => {
    return (
        <Layout pageTitle="About me " >
            <p> This is about page with gatsby</p>
        </Layout>
    )
}

export const Head = () => <Seo title={"About Page"} />

export default About