import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PresentationSection from "../components/PresentationSection";

const IndexPage = () => (
  <Layout>
          <PresentationSection/>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
