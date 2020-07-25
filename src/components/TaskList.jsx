import React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import TextField from '@material-ui/core/TextField'

import Task from './Task'

export default class TaskList extends React.Component {
  constructor() {
    super()

    this.state = {
      tasks: [
        { name: 'Scala' },
        { name: 'Java' },
        { name: 'Drawing' },
      ],
      newTaskEditMode: false,
    }
  }

  addNewTask = () => {
    // const { tasks } = this.state
    // tasks.push({ name: 'New task' })

    this.setState({
      newTaskEditMode: true,
    })
  }

  disableEditMode = () => {
    const { newTaskName, tasks } = this.state

    this.setState({
      newTaskEditMode: false,
    })

    if (newTaskName !== undefined && newTaskName.trim() !== '') {
      this.setState(
        {
          tasks: [...tasks, { name: newTaskName }],
          newTaskName: '',
        },
      )
    }
  }

  updateNewTaskName = (e) => {
    this.setState({
      newTaskName: e.target.value,
    })
  }

  renderNewTaskCreationForm() {
    const { newTaskEditMode } = this.state

    if (newTaskEditMode) {
      return (
        <ListItem>
          <TextField 
            id="new-task-creation"
            autoFocus
            label="New task"
            onBlur={this.disableEditMode}
            onChange={this.updateNewTaskName} />
        </ListItem>
      )
    }

    return (
      <ListItem button>
        <ListItemText
          primary="Add new task..."
          style={{ color: '#999999' }}
          onClick={this.addNewTask}
        />
      </ListItem>
    )
  }

  render() {
    const { tasks } = this.state

    return (
      <List
        style={{ width: 300 }}
        component="nav"
        aria-label="tasks list"
      >
        {
          tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
            />
          ))
        }
        { this.renderNewTaskCreationForm() }
      </List>
    )
  }
}
