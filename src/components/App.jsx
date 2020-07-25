import React from 'react'

import Box from '@material-ui/core/Box'

import AppBar from './AppBar'
import TaskCalendar from './TaskCalendar'
import TaskList from './TaskList';

import './App.css';

function App() {
  return (
    <div className="App">
      <AppBar />
      <Box display="flex">
        <Box flexGrow={1}>
          <TaskCalendar />
        </Box>
        <TaskList />
      </Box>
    </div>
  );
}

export default App;
