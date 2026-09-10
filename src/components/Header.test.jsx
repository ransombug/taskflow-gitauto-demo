import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('renders the application title', () => {
    render(<Header totalCount={8} completedCount={3} />)

    expect(screen.getByRole('heading', { name: 'TaskFlow' })).toBeInTheDocument()
  })
})
