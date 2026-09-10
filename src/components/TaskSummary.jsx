import { formatPercentage, pluralize } from '../utils/formatters'
import {
  calculateCompletionPercentage,
  calculateTaskStats,
} from '../utils/taskUtils'

export default function TaskSummary({ tasks }) {
  const stats = calculateTaskStats(tasks)
  const completionPercentage = calculateCompletionPercentage(tasks)

  return (
    <section className="panel summary">
      <h2>Summary</h2>
      <ul className="summary-grid">
        <li>
          <span>Total tasks</span>
          <strong>{pluralize(stats.total, 'task')}</strong>
        </li>
        <li>
          <span>Completed</span>
          <strong>{stats.completed}</strong>
        </li>
        <li>
          <span>Active</span>
          <strong>{stats.active}</strong>
        </li>
        <li>
          <span>Completion</span>
          <strong>{formatPercentage(completionPercentage)}</strong>
        </li>
      </ul>
    </section>
  )
}
