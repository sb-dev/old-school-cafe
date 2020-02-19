import { HeaderTemplate } from "../components/header"
import React from "react"

const NavbarPreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS()
  return <HeaderTemplate navBarData={data} />
}

export default NavbarPreview
