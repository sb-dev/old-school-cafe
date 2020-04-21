import "../components/layout/layout.css"
import "../pages/index.css"

import { AboutTemplate } from "../pages/index"
import React from "react"

const AboutPreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS()
  return <AboutTemplate data={data} />
}

export default AboutPreview
