import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { NewsletterForm } from '../newsletter-form'
import { toast } from 'sonner'

// Mock the toast notifications
jest.mock('sonner', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}))

describe('NewsletterForm', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders the form with email input and subscribe button', () => {
    render(<NewsletterForm />)
    
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('shows validation error for invalid email', async () => {
    render(<NewsletterForm />)
    
    const emailInput = screen.getByPlaceholderText('Enter your email')
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } })
    
    const submitButton = screen.getByRole('button', { name: /subscribe/i })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument()
    })
  })

  it('submits the form successfully with valid email', async () => {
    render(<NewsletterForm />)
    
    const emailInput = screen.getByPlaceholderText('Enter your email')
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    
    const submitButton = screen.getByRole('button', { name: /subscribe/i })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith('Successfully subscribed to our newsletter!')
    })
  })

  it('handles submission error', async () => {
    // Mock console.error to prevent error output in tests
    const originalConsoleError = console.error
    console.error = jest.fn()

    // Mock a failed submission
    jest.spyOn(global, 'console').mockImplementation(() => {
      throw new Error('Subscription failed')
    })

    render(<NewsletterForm />)
    
    const emailInput = screen.getByPlaceholderText('Enter your email')
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    
    const submitButton = screen.getByRole('button', { name: /subscribe/i })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith('Failed to subscribe. Please try again.')
    })

    // Restore console.error
    console.error = originalConsoleError
  })

  it('disables submit button while submitting', async () => {
    render(<NewsletterForm />)
    
    const emailInput = screen.getByPlaceholderText('Enter your email')
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    
    const submitButton = screen.getByRole('button', { name: /subscribe/i })
    fireEvent.click(submitButton)

    expect(submitButton).toBeDisabled()
    expect(screen.getByText('Subscribing...')).toBeInTheDocument()

    await waitFor(() => {
      expect(submitButton).not.toBeDisabled()
      expect(screen.getByText('Subscribe')).toBeInTheDocument()
    })
  })
}) 