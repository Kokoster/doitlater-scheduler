import React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'

import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';


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

  saveTask = (disableOnEmptyStr) => () => {
    const { newTaskName, tasks } = this.state

    let newTasksList = tasks
    let editMode = true && disableOnEmptyStr
    if (newTaskName !== undefined && newTaskName.trim() !== '') {
      newTasksList = [...tasks, { name: newTaskName }]
      editMode = false
    }

    this.setState(
      {
        newTaskEditMode: editMode,
        tasks: newTasksList,
        newTaskName: '',
      },
    )
  }

  cancelTask = () => {
    this.setState({
      newTaskEditMode: false,
      newTaskName: '',
    })
  }

  handleKeyDown = (e) => {
    const { newTaskEditMode } = this.state

    // check for escape
    if (e.keyCode === 27 && newTaskEditMode) {
      this.setState({
        newTaskEditMode: false,
      })
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
        // onBlur={this.saveTask(false)}
        <ListItem>
          <TextField
            id="new-task-creation"
            autoFocus
            label="New task"
            onChange={this.updateNewTaskName}
          />
          <IconButton edge="end" onClick={this.saveTask(true)}>
            <AddIcon fonSize="small" />
          </IconButton>
          <IconButton edge="end" onClick={this.cancelTask}>
            <ClearIcon fontSize="small" />
          </IconButton>
        </ListItem>
      )
    }

    return (
      <ListItem button onClick={this.addNewTask}>
        <ListItemText
          primary="Add new task..."
          style={{ color: '#999999' }}
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
        onKeyDown={this.handleKeyDown}
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
