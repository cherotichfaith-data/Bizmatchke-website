import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { ContactForm } from '../contact-form'
import { toast } from 'sonner'

// Mock the toast notifications
jest.mock('sonner', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}))

describe('ContactForm', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders the form with all required fields', () => {
    render(<ContactForm />)
    
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('shows validation errors for empty fields', async () => {
    render(<ContactForm />)
    
    const submitButton = screen.getByRole('button', { name: /send message/i })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText('Name must be at least 2 characters')).toBeInTheDocument()
      expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument()
      expect(screen.getByText('Subject must be at least 5 characters')).toBeInTheDocument()
      expect(screen.getByText('Message must be at least 10 characters')).toBeInTheDocument()
    })
  })

  it('shows validation error for invalid email', async () => {
    render(<ContactForm />)
    
    const emailInput = screen.getByPlaceholderText('Your Email')
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } })
    
    const submitButton = screen.getByRole('button', { name: /send message/i })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument()
    })
  })

  it('submits the form successfully with valid data', async () => {
    render(<ContactForm />)
    
    // Fill in the form
    fireEvent.change(screen.getByPlaceholderText('Your Name'), {
      target: { value: 'John Doe' },
    })
    fireEvent.change(screen.getByPlaceholderText('Your Email'), {
      target: { value: 'john@example.com' },
    })
    fireEvent.change(screen.getByPlaceholderText('Subject'), {
      target: { value: 'Test Subject' },
    })
    fireEvent.change(screen.getByPlaceholderText('Your Message'), {
      target: { value: 'This is a test message that is long enough to pass validation.' },
    })

    // Submit the form
    const submitButton = screen.getByRole('button', { name: /send message/i })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith('Message sent successfully!')
    })
  })

  it('handles submission error', async () => {
    // Mock console.error to prevent error output in tests
    const originalConsoleError = console.error
    console.error = jest.fn()

    // Mock a failed submission
    jest.spyOn(global, 'console').mockImplementation(() => {
      throw new Error('Submission failed')
    })

    render(<ContactForm />)
    
    // Fill in the form
    fireEvent.change(screen.getByPlaceholderText('Your Name'), {
      target: { value: 'John Doe' },
    })
    fireEvent.change(screen.getByPlaceholderText('Your Email'), {
      target: { value: 'john@example.com' },
    })
    fireEvent.change(screen.getByPlaceholderText('Subject'), {
      target: { value: 'Test Subject' },
    })
    fireEvent.change(screen.getByPlaceholderText('Your Message'), {
      target: { value: 'This is a test message that is long enough to pass validation.' },
    })

    // Submit the form
    const submitButton = screen.getByRole('button', { name: /send message/i })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith('Failed to send message. Please try again.')
    })

    // Restore console.error
    console.error = originalConsoleError
  })
}) 