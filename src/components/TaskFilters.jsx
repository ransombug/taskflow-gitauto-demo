export default function TaskFilters({ filter, search, onFilterChange, onSearchChange }) {
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'active', label: 'Active' },
    { id: 'completed', label: 'Completed' },
  ]

  return (
    <section className="panel">
      <h2>Filters</h2>
      <div className="filters">
        <div className="filter-buttons" role="group" aria-label="Filter tasks">
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              className={filter === item.id ? 'btn btn-primary' : 'btn btn-secondary'}
              onClick={() => onFilterChange(item.id)}
              aria-pressed={filter === item.id}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="field search-field">
          <label htmlFor="task-search">Search</label>
          <input
            id="task-search"
            type="search"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search by title"
          />
        </div>
      </div>
    </section>
  )
}
