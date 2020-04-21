import "../components/layout/layout.css"
import "../pages/index.css"

import { HeroTemplate } from "../pages/index"
import React from "react"

const HeroPreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS()
  return <HeroTemplate data={data} />
}

export default HeroPreview
