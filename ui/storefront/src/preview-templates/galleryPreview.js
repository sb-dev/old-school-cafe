import "../components/layout/layout.css"
import "../pages/index.css"

import { GalleryTemplate } from "../pages/index"
import React from "react"

const GalleryPreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS()
  return <GalleryTemplate data={data} />
}

export default GalleryPreview
