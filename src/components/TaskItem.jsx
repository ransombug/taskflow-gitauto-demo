import { formatPriority } from '../utils/formatters'

export default function TaskItem({ task, onComplete, onDelete }) {
  const title = task.title
  const priority = task.priority
  const status = task.status
  const isCompleted = status === 'completed'
  const isActive = status === 'active'
  const isHighPriority = priority === 'high'
  const isMediumPriority = priority === 'medium'
  const isLowPriority = priority === 'low'
  const missingTitle = !title || title.trim() === ''
  const truncated = Boolean(title && title.length > 48)

  let displayTitle = title
  if (missingTitle) {
    displayTitle = 'Untitled task'
  } else if (truncated) {
    displayTitle = `${title.slice(0, 48)}...`
  }

  let itemClassName = 'task-item'
  if (isCompleted) {
    itemClassName += ' is-completed'
  }
  if (isHighPriority && isActive) {
    itemClassName += ' is-urgent'
  }

  let priorityClassName = 'badge'
  if (isHighPriority) {
    priorityClassName += ' badge-high'
  } else if (isMediumPriority) {
    priorityClassName += ' badge-medium'
  } else if (isLowPriority) {
    priorityClassName += ' badge-low'
  } else {
    priorityClassName += ' badge-unknown'
  }

  let statusText = 'Active'
  if (isCompleted) {
    statusText = 'Completed'
  } else if (isHighPriority) {
    statusText = 'Needs attention'
  } else if (isMediumPriority) {
    statusText = 'In progress'
  }

  return (
    <li className={itemClassName}>
      <div className="task-item-main">
        <h3 className={isCompleted ? 'task-title is-done' : 'task-title'}>
          {displayTitle}
        </h3>
        <div className="task-meta">
          <span className={priorityClassName}>{formatPriority(priority)}</span>
          <span className="status-text">{statusText}</span>
        </div>
      </div>
      <div className="task-item-actions">
        {isCompleted ? (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => onComplete(task.id)}
          >
            Reopen
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => onComplete(task.id)}
          >
            Complete
          </button>
        )}
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  )
}
