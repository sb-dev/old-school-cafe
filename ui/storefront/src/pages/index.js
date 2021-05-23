import "./index.css"

import { Button, Col, Icon, Row } from 'antd';
import { FaDirections, FaMapMarkerAlt } from 'react-icons/fa';

import Img from "gatsby-image"
import { Layout } from "../components/layout"
import { Map } from "../components/map"
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import React from "react"
import ReactMarkdown from "react-markdown";
import SEO from "../components/seo"
import { generateId } from '../helpers/modelHelper'
import { graphql } from 'gatsby'

export const HeroTemplate = ({ data: { title, subtitle, image, altImage } }) => (
  <section id="hero" className="hero container">
    <div className="inner-header">
      {title.split("-").length > 1 ?
        (<>
            <h1>{title.split("-")[0].trim()}</h1>
            <h2>{title.split("-")[1].trim()}</h2>
          </>) :
        (<h1>{title}</h1>)}
      <p>
        {subtitle}
      </p>
      { image.childImageSharp ? <Img
        fluid={image.childImageSharp.fluid}
        alt={altImage}
        style={{margin: '50px 0px'}}
      /> : <img src={ image } alt="Old school cafe"/> }
    </div>
  </section>
)

export const AboutTemplate = ({ data: { title, sections } }) => (
  <section id={ generateId(title) } className={'about'}>
    <h1><span className="number">N&deg;<sub>1</sub></span>&nbsp;{title}</h1>
    <Row gutter={32}>
      {sections.map(({ content, image, imageAlt, file }, index) => (
        <React.Fragment key={index}>
          <Col xs={24} sm={24} md={8}>
            <img src={ image } alt={ imageAlt }/>
          </Col>
          <Col className="text" xs={24} sm={24} md={16}>
            <ReactMarkdown source={content} />
            { file && <Button
              type="dashed"
              size={"large"}
              onClick={() => window.open(file.filePath, '_blank')}>
              { file.label }
            </Button> }
          </Col>
        </React.Fragment>
      ))}
    </Row>
  </section>
)

export const FindUsTemplate = ({ data: { title, address, phone, hours, location: { latitude, longitude } } }) => (
  <section id={ generateId(title) } className={'find-us'}>
    <h1><span className="number">N&deg;<sub>2</sub></span>&nbsp;{ title }</h1>
    <Row gutter={32}>
      <Col xs={24} sm={24} md={12}>
        <div className="grey-box">
          <h1>La Courrouze</h1>
          <Button
            type="dashed"
            size={"large"}
            onClick={() => window.open(`https://www.google.com/maps/place/${latitude},${longitude}`, '_blank')}>
            <FaMapMarkerAlt />&nbsp;Nous Situer
          </Button>
          <Button
            type="dashed"
            size={"large"}
            onClick={() => window.open(`https://www.google.com/maps?daddr=${latitude},${longitude}`, '_blank')}>
            <FaDirections />&nbsp;Itinéraire
          </Button>
          <ul>
            <li>Adresse: { address }</li>
            <li>Téléphone: { phone }</li>
          </ul>
          <h2>Horaires d'ouverture</h2>
          <ul>
            {hours.map(({ label, from, to }, index) => (
              <li key={index}>{ label } { from } - { to }</li>
            ))}
          </ul>
        </div>
      </Col>
      <Col xs={24} sm={24} md={12}>
        <Map latitude={ latitude } longitude={ longitude } />
      </Col>
    </Row>
  </section>
)

export const EventsTemplate = ({ data: { title, events } }) => (
  <section id={ generateId(title) } className={'events'}>
    <h1><span className="number">N&deg;<sub>3</sub></span>&nbsp;{ title }</h1>
    <Row gutter={32}>
      {events.map(({ title, facebookLink, type, dayOfWeek, dayNumber, month, from, to }, index) => (
        <Col xs={24} key={index} >
          <div className={`event ${type === 'recurring' ? 'recurring' : ''}`}>
            <div className="date">
              <div className="day-of-week">{ dayOfWeek }</div>
              {
                type === 'one time event' ?
                (
                  <>
                    <div className="day-number">{ dayNumber }</div>
                    <div className="month">{ month }</div>
                  </>
                ) :
                ("")
              }
            </div>
            <div className="details">
              <div className="title">{ title }</div>
              <div className="times">
                { from } - { to }
                { facebookLink ? (
                  <OutboundLink href={facebookLink} target="_blank" className={'facebook-link'}>
                    <Icon type="facebook" /> Facebook
                  </OutboundLink>
                ) : '' }
                </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  </section>
)

export const GalleryTemplate = ({ data: { title, images } }) => (
  <section id={ generateId(title) } className={'gallery'}>
    <h1><span className="number">N&deg;<sub>4</sub></span>&nbsp;{ title }</h1>
    <Row gutter={32}>
      {images.map(({ image, imageAlt }, index) => (
        <Col xs={24} sm={24} md={12} key={index} >
          <img src={ image } alt={ imageAlt } />
        </Col>
      ))}
    </Row>
  </section>
)

const HomePage = ({ data }) => (
  <Layout navbarData={ data.navbarData }>
    <SEO />

    <HeroTemplate data={ data.heroData.edges[0].node.frontmatter } />
    <AboutTemplate data={ data.aboutData.edges[0].node.frontmatter } />
    <FindUsTemplate data={ data.findUsData.edges[0].node.frontmatter } />
    <EventsTemplate data={ data.eventsData.edges[0].node.frontmatter } />
    <GalleryTemplate data={ data.galleryData.edges[0].node.frontmatter } />

  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  query HomePageQuery {
    ...LayoutFragment
    heroData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "hero" } } }) {
      edges {
        node {
          frontmatter {
            title
            subtitle
            imageAlt
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    aboutData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "about" } } }) {
      edges {
        node {
          frontmatter {
            title
            sections {
              content
              image
              imageAlt
              file {
                label
                filePath
              }
            }
          }
        }
      }
    }
    findUsData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "find-us" } } }) {
      edges {
        node {
          frontmatter {
            title
            address
            hours {
              label
              from
              to
            }
            location {
              latitude
              longitude
            }
            phone
          }
        }
      }
    }
    eventsData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "events" } } }) {
      edges {
        node {
          frontmatter {
            title
            events {
              title
              facebookLink
              type
              dayOfWeek
              dayNumber
              month
              from
              to
            }
          }
        }
      }
    }
    galleryData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "gallery" } } }) {
      edges {
        node {
          frontmatter {
            title
            images {
              imageAlt
              image
            }
          }
        }
      }
    }
  }
`;
