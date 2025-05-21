import { render, screen } from '@testing-library/react'
import { SocialLinks } from '../social-links'

describe('SocialLinks', () => {
  it('renders all social media links', () => {
    render(<SocialLinks />)
    
    const socialLinks = [
      { name: 'Facebook', href: 'https://facebook.com/bizmatchke' },
      { name: 'Twitter', href: 'https://twitter.com/bizmatchke' },
      { name: 'Instagram', href: 'https://instagram.com/bizmatchke' },
      { name: 'LinkedIn', href: 'https://linkedin.com/company/bizmatchke' },
      { name: 'YouTube', href: 'https://youtube.com/@bizmatchke' },
    ]

    socialLinks.forEach(({ name, href }) => {
      const link = screen.getByLabelText(`Follow us on ${name}`)
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', href)
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  it('applies correct styling classes', () => {
    render(<SocialLinks />)
    
    const links = screen.getAllByRole('link')
    links.forEach(link => {
      expect(link).toHaveClass('text-muted-foreground')
      expect(link).toHaveClass('hover:text-amber-600')
      expect(link).toHaveClass('transition-colors')
    })
  })

  it('renders icons with correct dimensions', () => {
    render(<SocialLinks />)
    
    const icons = document.querySelectorAll('svg')
    icons.forEach(icon => {
      expect(icon).toHaveAttribute('class', 'h-5 w-5')
    })
  })
}) 