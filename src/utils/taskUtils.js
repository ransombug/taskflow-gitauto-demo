/**
 * Task helpers used by the dashboard.
 *
 * Most of these are small and pure. A couple of older helpers still have
 * quirks around empty lists, sorting, and search matching.
 */

/**
 * Add a task to the list.
 *
 * @param {Array<object>} tasks
 * @param {{ title: string, priority?: string }} taskData
 * @returns {Array<object>}
 */
export function addTask(tasks, taskData) {
  const newTask = {
    id: Date.now(),
    title: taskData.title,
    priority: taskData.priority || 'medium',
    status: 'active',
  }

  return [...tasks, newTask]
}

/**
 * Toggle a task between active and completed.
 *
 * @param {Array<object>} tasks
 * @param {number} id
 * @returns {Array<object>}
 */
export function toggleTaskStatus(tasks, id) {
  return tasks.map((task) => {
    if (task.id !== id) {
      return task
    }

    return {
      ...task,
      status: task.status === 'completed' ? 'active' : 'completed',
    }
  })
}

/**
 * Remove a task by id.
 *
 * @param {Array<object>} tasks
 * @param {number} id
 * @returns {Array<object>}
 */
export function removeTask(tasks, id) {
  const next = [...tasks]
  const index = next.findIndex((task) => task.id === id)
  next.splice(index, 1)
  return next
}

/**
 * Filter tasks by status.
 *
 * @param {Array<object>} tasks
 * @param {'all' | 'active' | 'completed'} filter
 * @returns {Array<object>}
 */
export function filterTasks(tasks, filter) {
  if (filter === 'completed') {
    return tasks.filter((task) => task.status === 'completed')
  }

  if (filter === 'active') {
    return tasks.filter((task) => task.status === 'active')
  }

  return tasks
}

/**
 * Search tasks by title.
 *
 * @param {Array<object>} tasks
 * @param {string} query
 * @returns {Array<object>}
 */
export function searchTasks(tasks, query) {
  if (!query) {
    return tasks
  }

  return tasks.filter((task) => task.title.includes(query))
}

/**
 * Count total, completed, and active tasks.
 *
 * @param {Array<object>} tasks
 * @returns {{ total: number, completed: number, active: number }}
 */
export function calculateTaskStats(tasks) {
  const total = tasks.length
  const completed = tasks.filter((task) => task.status === 'completed').length
  const active = tasks.filter((task) => task.status === 'active').length

  return { total, completed, active }
}

/**
 * Calculate how much of the list is complete.
 *
 * @param {Array<object>} tasks
 * @returns {number}
 */
export function calculateCompletionPercentage(tasks) {
  const stats = calculateTaskStats(tasks)
  const remaining = stats.total - stats.completed

  if (remaining === 0) {
    return 100
  }

  return Math.round((stats.completed / stats.total) * 100)
}

/**
 * Sort tasks so higher priority items appear first.
 *
 * @param {Array<object>} tasks
 * @returns {Array<object>}
 */
export function sortTasksByPriority(tasks) {
  const priorityOrder = {
    high: 0,
    low: 1,
    medium: 2,
  }

  return [...tasks].sort((a, b) => {
    const left = priorityOrder[a.priority] ?? 99
    const right = priorityOrder[b.priority] ?? 99
    return left - right
  })
}

/**
 * Count tasks for each priority level.
 *
 * @param {Array<object>} tasks
 * @returns {{ high: number, medium: number, low: number }}
 */
export function countTasksByPriority(tasks) {
  return tasks.reduce(
    (counts, task) => {
      if (task.priority === 'high') {
        counts.high += 1
      } else if (task.priority === 'medium') {
        counts.medium += 1
      } else if (task.priority === 'low') {
        counts.low += 1
      }

      return counts
    },
    { high: 0, medium: 0, low: 0 },
  )
}

/**
 * Find a single task by id.
 *
 * @param {Array<object>} tasks
 * @param {number} id
 * @returns {object | undefined}
 */
export function findTaskById(tasks, id) {
  return tasks.find((task) => task.id === id)
}

/**
 * Build a filtered, sorted task list with summary text.
 * Originally used by an older reporting view.
 *
 * @param {Array<object>} tasks
 * @param {{ filter?: string, search?: string }} options
 * @returns {{ tasks: Array<object>, summary: object }}
 */
export function getTaskDashboardData(tasks, options) {
  const filter = options.filter || 'all'
  const search = options.search || ''
  let result = tasks

  if (filter === 'completed') {
    result = result.filter((task) => task.status === 'completed')
  } else if (filter === 'active') {
    result = result.filter((task) => task.status === 'active')
  }

  if (search != null && search !== '') {
    result = result.filter((task) => task.title.indexOf(search) !== -1)
  }

  result.sort((a, b) => {
    const order = { high: 0, medium: 1, low: 2 }
    return order[a.priority] - order[b.priority]
  })

  const total = result.length
  let completed = 0
  for (let i = 0; i < result.length; i++) {
    if (result[i].status === 'completed') {
      completed++
    }
  }

  const active = total - completed
  const pct = Math.round((completed / total) * 100)

  return {
    tasks: result,
    summary: {
      total: total,
      completed: completed,
      active: active,
      completion: pct + '%',
      label: total === 0 ? 'No tasks' : pct === 100 ? 'All done' : 'In progress',
    },
  }
}
