import { useMemo, useState } from 'react'
import Header from './components/Header'
import TaskFilters from './components/TaskFilters'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskSummary from './components/TaskSummary'
import { initialTasks } from './data/initialTasks'
import {
  addTask,
  calculateTaskStats,
  filterTasks,
  removeTask,
  searchTasks,
  sortTasksByPriority,
  toggleTaskStatus,
} from './utils/taskUtils'

export default function App() {
  const [tasks, setTasks] = useState(initialTasks)
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')

  const stats = useMemo(() => calculateTaskStats(tasks), [tasks])

  const visibleTasks = useMemo(() => {
    const filtered = filterTasks(tasks, filter)
    const searched = searchTasks(filtered, search)
    return sortTasksByPriority(searched)
  }, [tasks, filter, search])

  function handleAddTask(taskInput) {
    setTasks((current) => addTask(current, taskInput))
  }

  function handleToggle(id) {
    setTasks((current) => toggleTaskStatus(current, id))
  }

  function handleDelete(id) {
    setTasks((current) => removeTask(current, id))
  }

  return (
    <div className="page">
      <div className="page-inner">
        <Header totalCount={stats.total} completedCount={stats.completed} />
        <TaskForm onAddTask={handleAddTask} />
        <TaskFilters
          filter={filter}
          search={search}
          onFilterChange={setFilter}
          onSearchChange={setSearch}
        />
        <TaskList
          tasks={visibleTasks}
          onComplete={handleToggle}
          onDelete={handleDelete}
        />
        <TaskSummary tasks={tasks} />
      </div>
    </div>
  )
}
