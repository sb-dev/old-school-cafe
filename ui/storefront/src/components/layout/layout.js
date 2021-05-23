import "./layout.css"
import "../../assets/fonts/fonts.css"
import 'antd/dist/antd.css';

import { Layout as AntLayout } from 'antd';
import { Header } from "../header"
import React from "react"
import { graphql } from "gatsby"

const { Footer, Content } = AntLayout;

export const Layout = ({ navbarData, children }) => {
  return (
    <AntLayout className="site-layout">
      <Header navBarData={navbarData} />
      <Content className="site-content container">{children}</Content>
      <Footer className="site-footer container">
        <div className={"left"}>
          Old School Café &copy; {new Date().getFullYear()}
        </div>

        <div className={"right"}>
          Created by Oaktree Tech Ltd | <a href="https://github.com/sb-dev/old-school-cafe">Source Code</a>
        </div>
      </Footer>
    </AntLayout>
  )
}

export const query = graphql`
  fragment LayoutFragment on Query {
    navbarData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "navbar" } } }) {
      edges {
        node {
          id
          frontmatter {
            logoImage {
              image
              imageAlt
            }
            menuItems {
              label
              linkSide
              linkURL
            }
          }
        }
      }
    }
  }
  fragment LightLayoutFragment on Query {
    navbarData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "navbar" } } }) {
      edges {
        node {
          id
          frontmatter {
            logoImage {
              image
              imageAlt
            }
          }
        }
      }
    }
  }
`
