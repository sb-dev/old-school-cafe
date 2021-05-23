import { Layout } from "../components/layout"
import React from "react"
import SEO from "../components/seo"

const NotFoundPage = ({ data }) => (
  <Layout navbarData={ data.navbarData }>
    <SEO title="Erreur 404" />

    <section id="not-found">
      <h1>Oups, voilà qui n'était pas prévu!</h1>
      <p>Désolé mais ce lien est introuvable.</p>
    </section>
  </Layout>
)

export default NotFoundPage

export const pageQuery = graphql`
  query NotFoundPageQuery {
    ...LightLayoutFragment
  }
`;
