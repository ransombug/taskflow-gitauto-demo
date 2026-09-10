import { useState } from 'react'
import { validateTask } from '../utils/validation'

export default function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState('medium')
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const result = validateTask({ title, priority })
    if (!result.valid) {
      setError(result.error)
      return
    }

    setError('')
    onAddTask({ title, priority })
    setTitle('')
    setPriority('medium')
  }

  return (
    <section className="panel">
      <h2>Add task</h2>
      <form className="task-form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="task-title">Task title</label>
          <input
            id="task-title"
            name="title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="What needs to be done?"
          />
        </div>

        <div className="field">
          <label htmlFor="task-priority">Priority</label>
          <select
            id="task-priority"
            name="priority"
            value={priority}
            onChange={(event) => setPriority(event.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </form>
      {error ? <p className="form-error">{error}</p> : null}
    </section>
  )
}
