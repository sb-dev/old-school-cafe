import "./header.css"

import { Link } from "gatsby"
import React from "react"
import { Link as ScrollTo } from "react-scroll"
import { generateId } from '../../helpers/modelHelper'

export const HeaderTemplate = ({ navBarData: { logoImage, menuItems } }) => {
  const renderMenuItems = (menuSide) => menuItems
    .map((menuItem, index) => {
      return {
        ...menuItem,
        number: index + 1
      }
    })
    .filter((menuItem) => menuItem.linkSide === menuSide)
    .map(({label, linkURL, number}, index) => (
      <li key={ index }>
        <ScrollTo to={ generateId(label) } hashSpy={true} smooth={true} duration={500} offset={-50}>
          <span className="number">N&deg;<sub>{ number }</sub></span>&nbsp;{ label }
        </ScrollTo>
      </li>
    ))

  return (
    <header className="site-header container">
      <div className="left">
        {menuItems && <ul className="menu">
          { renderMenuItems('left') }
        </ul>}
      </div>
      <div className="center">
        <Link
          to="/">
          <img src={ logoImage.image } alt={ logoImage.imageAlt } className="logo" />
        </Link>
      </div>
      <div className="right">
        {menuItems && <ul className="menu">
          { renderMenuItems('right') }
        </ul>}
      </div>
    </header>
  )
}

export const Header = ({ navBarData }) => (
  <HeaderTemplate navBarData={navBarData.edges[0].node.frontmatter} />
)
