import "../components/layout/layout.css"
import "../pages/index.css"

import { FindUsTemplate } from "../pages/index"
import React from "react"

const FindUsPreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS()
  return <FindUsTemplate data={data} />
}

export default FindUsPreview
