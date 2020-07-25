import React from 'react'

import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

export default (props) => {
  const { task } = props

  return (
    <ListItem button>
      <ListItemText primary={task.name} />
    </ListItem>
  )
}
