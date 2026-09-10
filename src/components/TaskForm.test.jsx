import { render, screen } from '@testing-library/react'
import TaskForm from './TaskForm'

describe('TaskForm', () => {
  it('renders the add task button', () => {
    render(<TaskForm onAddTask={() => {}} />)

    expect(screen.getByRole('button', { name: 'Add Task' })).toBeInTheDocument()
  })
})
