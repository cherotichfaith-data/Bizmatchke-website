import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com/bizmatchke",
    icon: Facebook,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/bizmatchke",
    icon: Twitter,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/bizmatchke",
    icon: Instagram,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/bizmatchke",
    icon: Linkedin,
  },
]

export function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-amber-600 transition-colors"
          aria-label={`Follow us on ${link.name}`}
        >
          <link.icon className="h-5 w-5" />
          <span className="sr-only">{link.name}</span>
        </Link>
      ))}
    </div>
  )
} 