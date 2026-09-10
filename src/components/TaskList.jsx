import TaskItem from './TaskItem'

export default function TaskList({ tasks, onComplete, onDelete }) {
  if (!tasks || tasks.length === 0) {
    return (
      <section className="panel">
        <h2>Tasks</h2>
        <p className="empty-state">No tasks match the current filters.</p>
      </section>
    )
  }

  return (
    <section className="panel">
      <h2>Tasks</h2>
      <ul className="task-list">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </section>
  )
}
