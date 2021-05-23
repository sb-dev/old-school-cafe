import "../components/layout/layout.css"
import "../pages/index.css"

import { EventsTemplate } from "../pages/index"
import React from "react"

const EventsPreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS()
  return <EventsTemplate data={data} />
}

export default EventsPreview
