import { filterTasks } from './taskUtils'

const sampleTasks = [
  { id: 1, title: 'Fix homepage navigation', priority: 'high', status: 'active' },
  { id: 2, title: 'Update documentation', priority: 'low', status: 'completed' },
]

describe('filterTasks', () => {
  it('returns only completed tasks when the completed filter is used', () => {
    const result = filterTasks(sampleTasks, 'completed')

    expect(result).toHaveLength(1)
    expect(result[0].id).toBe(2)
  })
})
