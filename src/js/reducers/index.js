import { combineReducers } from 'redux'
import logs from './logsReducer'
import projects from './projectsReducer'

export default combineReducers({
  logs,
  projects
})
