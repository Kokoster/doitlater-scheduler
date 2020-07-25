import React from 'react'

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)

// TODO: implement own calendar grid view

export default () => (
  <Calendar
    localizer={localizer}
    events={[]}
    startAccessor="start"
    endAccessor="end"
    style={{ height: 800 }}
  />
)
