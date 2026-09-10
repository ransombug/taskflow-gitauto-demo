export default function Header({ totalCount, completedCount }) {
  return (
    <header className="header">
      <div>
        <h1>TaskFlow</h1>
        <p className="header-description">
          Track, prioritize, and complete work in one place.
        </p>
      </div>
      <dl className="header-stats">
        <div>
          <dt>Total tasks</dt>
          <dd>{totalCount}</dd>
        </div>
        <div>
          <dt>Completed</dt>
          <dd>{completedCount}</dd>
        </div>
      </dl>
    </header>
  )
}
