"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ArrowRight, CheckCircle, Users, Target, BarChart3, Menu, X, Sun, Moon, Laptop } from "lucide-react"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // After mounting, we can safely show the UI that depends on the theme
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-amber-600" />
            <span className="text-xl font-bold">BizMatchKE</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-sm font-medium text-foreground/70 hover:text-amber-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-foreground/70 hover:text-amber-600 transition-colors"
            >
              How It Works
            </Link>
            <Link href="#sdg" className="text-sm font-medium text-foreground/70 hover:text-amber-600 transition-colors">
              SDG Alignment
            </Link>
            <Link
              href="#team"
              className="text-sm font-medium text-foreground/70 hover:text-amber-600 transition-colors"
            >
              Our Team
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            {/* Theme Toggle Dropdown */}
            {mounted && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="mr-2"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  >
                    {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")} className="cursor-pointer">
                    <Moon className="mr-2 h-4 w-4" />
                    <span>Light</span>
                    {theme === "light" && <CheckCircle className="ml-auto h-4 w-4" />}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")} className="cursor-pointer">
                    <Sun className="mr-2 h-4 w-4" />
                    <span>Dark</span>
                    {theme === "dark" && <CheckCircle className="ml-auto h-4 w-4" />}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")} className="cursor-pointer">
                    <Laptop className="mr-2 h-4 w-4" />
                    <span>System</span>
                    {theme === "system" && <CheckCircle className="ml-auto h-4 w-4" />}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            {/* Desktop CTA Button */}
            <Button className="bg-amber-600 hover:bg-amber-700 transition-colors hidden md:flex">
              Access Platform
            </Button>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t">
            <div className="container py-4 space-y-3">
              <Link
                href="#about"
                className="block py-2 text-base font-medium text-foreground/70 hover:text-amber-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#how-it-works"
                className="block py-2 text-base font-medium text-foreground/70 hover:text-amber-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="#sdg"
                className="block py-2 text-base font-medium text-foreground/70 hover:text-amber-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                SDG Alignment
              </Link>
              <Link
                href="#team"
                className="block py-2 text-base font-medium text-foreground/70 hover:text-amber-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Team
              </Link>
              <div className="flex items-center gap-2 py-2">
                <span className="text-base font-medium text-foreground/70">Theme:</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setTheme("light")}
                  className={`${theme === "light" ? "bg-amber-100 text-amber-600 border-amber-200 dark:bg-amber-900/30 dark:text-amber-500 dark:border-amber-900/50" : ""}`}
                >
                  <Moon className="mr-1 h-3 w-3" />
                  Light
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setTheme("dark")}
                  className={`${theme === "dark" ? "bg-amber-100 text-amber-600 border-amber-200 dark:bg-amber-900/30 dark:text-amber-500 dark:border-amber-900/50" : ""}`}
                >
                  <Sun className="mr-1 h-3 w-3" />
                  Dark
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setTheme("system")}
                  className={`${theme === "system" ? "bg-amber-100 text-amber-600 border-amber-200 dark:bg-amber-900/30 dark:text-amber-500 dark:border-amber-900/50" : ""}`}
                >
                  <Laptop className="mr-1 h-3 w-3" />
                  System
                </Button>
              </div>
              <Button className="w-full bg-amber-600 hover:bg-amber-700 transition-colors mt-4">Access Platform</Button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
          {/* Hero Section */}
        <section id="about" className="relative h-[500px] md:h-[600px] w-full">
          <div className="absolute inset-0 z-0">
             <Image
      src="/images/hero-image.jpg"
      alt="Kenyan entrepreneur at a local market using a smartphone"
      fill
      className="object-cover"
      priority
      sizes="100vw"
    />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-900/60 dark:from-black/90 dark:to-black/70"></div>
          </div>
          <div className="container relative z-10 h-full">
            <div className="pt-16 md:pt-20 max-w-lg">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-white">
                Start your Business in Kenya Today.
              </h1>
              <p className="text-gray-200 text-sm sm:text-base md:text-xl/relaxed mt-4">
                Struggling to find your dream business? BizmatchKE is a smart platform that enables you to find the perfect.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 md:py-20 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                  How BizMatchKE Works
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-sm sm:text-base md:text-xl/relaxed">
                  Our platform simplifies the process of finding the right business connections in Kenya.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <div className="grid gap-8 md:grid-cols-3">
                <Card className="border-amber-200 dark:border-amber-900/50 shadow-md flex flex-col h-full hover:shadow-lg transition-shadow">
                  <CardContent className="flex flex-col flex-1 p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
                      <Users className="h-6 w-6 text-amber-600 dark:text-amber-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">1. Create Profile</h3>
                    <p className="text-muted-foreground flex-1">
                      Register your business and create a detailed profile highlighting your strengths, needs, and
                      goals. Our platform makes it easy to showcase what makes your business unique and what you're
                      looking for in potential partners.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-amber-200 dark:border-amber-900/50 shadow-md flex flex-col h-full hover:shadow-lg transition-shadow">
                  <CardContent className="flex flex-col flex-1 p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
                      <Target className="h-6 w-6 text-amber-600 dark:text-amber-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">2. Match & Connect</h3>
                    <p className="text-muted-foreground flex-1">
                      Our algorithm matches you with compatible businesses, investors, or resources based on your
                      profile. We analyze multiple factors to ensure meaningful connections that have the potential for
                      successful partnerships.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-amber-200 dark:border-amber-900/50 shadow-md flex flex-col h-full hover:shadow-lg transition-shadow">
                  <CardContent className="flex flex-col flex-1 p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
                      <BarChart3 className="h-6 w-6 text-amber-600 dark:text-amber-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">3. Grow Together</h3>
                    <p className="text-muted-foreground flex-1">
                      Collaborate with your matches, access resources, and track your business growth through our
                      platform. Our tools help you manage relationships, measure progress, and achieve sustainable
                      growth for your business.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* SDG Alignment Section */}
        <section id="sdg" className="py-16 md:py-20 bg-muted/50 dark:bg-gray-900/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                  SDG Alignment
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-sm sm:text-base md:text-xl/relaxed">
                  BizMatchKE is committed to supporting the UN Sustainable Development Goals.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <Card className="border-amber-200 dark:border-amber-900/50 shadow-md flex flex-col h-full hover:shadow-lg transition-shadow">
                  <CardContent className="flex flex-col p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
                      <CheckCircle className="h-6 w-6 text-amber-600 dark:text-amber-500" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">SDG 8: Decent Work and Economic Growth</h3>
                    <p className="text-muted-foreground dark:text-gray-300">
                      We promote sustained, inclusive economic growth, full and productive employment, and decent work
                      for all Kenyans through our business matching platform.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-amber-200 dark:border-amber-900/50 shadow-md flex flex-col h-full hover:shadow-lg transition-shadow">
                  <CardContent className="flex flex-col p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
                      <CheckCircle className="h-6 w-6 text-amber-600 dark:text-amber-500" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">SDG 9: Industry, Innovation, and Infrastructure</h3>
                    <p className="text-muted-foreground dark:text-gray-300">
                      Our platform helps build resilient infrastructure, promotes inclusive and sustainable
                      industrialization, and fosters innovation across Kenya's business landscape.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-amber-200 dark:border-amber-900/50 shadow-md flex flex-col h-full hover:shadow-lg transition-shadow">
                  <CardContent className="flex flex-col p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
                      <CheckCircle className="h-6 w-6 text-amber-600 dark:text-amber-500" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">SDG 10: Reduced Inequalities</h3>
                    <p className="text-muted-foreground dark:text-gray-300">
                      We work to reduce inequality within Kenya by providing equal opportunities for businesses of all
                      sizes, from startups to established enterprises.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-amber-200 dark:border-amber-900/50 shadow-md flex flex-col h-full hover:shadow-lg transition-shadow">
                  <CardContent className="flex flex-col p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
                      <CheckCircle className="h-6 w-6 text-amber-600 dark:text-amber-500" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">SDG 17: Partnerships for the Goals</h3>
                    <p className="text-muted-foreground dark:text-gray-300">
                      We strengthen the means of implementation and revitalize partnerships for sustainable development
                      through our collaborative business platform.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section id="team" className="py-16 md:py-20 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                  Meet Our Team
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground dark:text-gray-300 text-sm sm:text-base md:text-xl/relaxed">
                  The dedicated professionals behind BizMatchKE.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 sm:grid-cols-2 md:grid-cols-3">
              <Card className="border-amber-200 dark:border-amber-900/50 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <div className="mb-4 h-24 w-24 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                    <Image
                      src="/images/team-faith.jpg"
                      alt="Team Member"
                      width={96}
                      height={96}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold">Cherotich Faith</h3>
                  <p className="text-amber-600 dark:text-amber-500">Team Lead</p>
                  <p className="text-muted-foreground dark:text-gray-300 mt-2 text-sm">
                    Data Scientist.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-amber-200 dark:border-amber-900/50 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <div className="mb-4 h-24 w-24 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                    <Image
                      src="/images/team-jotham.JPG"
                      alt="Team Member"
                      width={96}
                      height={96}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold">Jotham Mboya</h3>
                  <p className="text-amber-600 dark:text-amber-500">Prompt Engineer</p>
                  <p className="text-muted-foreground dark:text-gray-300 mt-2 text-sm">
                    Prompt Engineering.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-amber-200 dark:border-amber-900/50 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <div className="mb-4 h-24 w-24 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                    <Image
                      src="/images/team-vallarie.jpg"
                      alt="Team Member"
                      width={96}
                      height={96}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold">Vallarie Seroney</h3>
                  <p className="text-amber-600 dark:text-amber-500">UI/UX Developer</p>
                  <p className="text-muted-foreground dark:text-gray-300 mt-2 text-sm">
                    Web Development.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-amber-200 dark:border-amber-900/50 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <div className="mb-4 h-24 w-24 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                    <Image
                      src="/images/team-nderu.jpeg"
                      alt="Team Member"
                      width={96}
                      height={96}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold">Dr Nderu</h3>
                  <p className="text-amber-600 dark:text-amber-500">Founder JHUB Africa</p>
                  <p className="text-muted-foreground dark:text-gray-300 mt-2 text-sm">
                    Project Supervisor.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-amber-200 dark:border-amber-900/50 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <div className="mb-4 h-24 w-24 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                    <Image
                      src="/images/team-mercy.jpg"
                      alt="Team Member"
                      width={96}
                      height={96}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold">Mercy Okumu</h3>
                  <p className="text-amber-600 dark:text-amber-500">ML Engineer</p>
                  <p className="text-muted-foreground dark:text-gray-300 mt-2 text-sm">
                    Machine Learning.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-amber-200 dark:border-amber-900/50 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <div className="mb-4 h-24 w-24 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                    <Image
                      src="/images/team-maxwell.jpg"
                      alt="Team Member"
                      width={96}
                      height={96}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold">Maxwell Gitonga</h3>
                  <p className="text-amber-600 dark:text-amber-500">ML Engineer</p>
                  <p className="text-muted-foreground dark:text-gray-300 mt-2 text-sm">
                    Machine Learning.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-navy-800 text-white dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                  Ready to Grow Your Business?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-300 text-sm sm:text-base md:text-xl/relaxed">
                  Join BizMatchKE today and connect with the right partners to take your business to the next level.
                </p>
              </div>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg transition-colors">
                Access Our Platform <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300 dark:bg-black dark:text-gray-400">
        <div className="container px-4 py-12 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="h-6 w-6 text-amber-500" />
                <span className="text-xl font-bold text-white dark:text-gray-200">BizMatchKE</span>
              </div>
              <p className="text-sm">Connecting businesses across Kenya for sustainable growth and innovation.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white dark:text-gray-200 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-sm hover:text-amber-500 transition-colors inline-block">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="text-sm hover:text-amber-500 transition-colors inline-block">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#sdg" className="text-sm hover:text-amber-500 transition-colors inline-block">
                    SDG Alignment
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="text-sm hover:text-amber-500 transition-colors inline-block">
                    Our Team
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white dark:text-gray-200 mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-sm">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-500 transition-colors"
                  >
                    Nairobi, Kenya
                  </a>
                </li>
                <li className="text-sm">
                  <a href="mailto:info@bizmatchke.com" className="hover:text-amber-500 transition-colors">
                    info@bizmatchke.com
                  </a>
                </li>
                <li className="text-sm">
                  <a href="tel:+254700000000" className="hover:text-amber-500 transition-colors">
                    +254 700 000 000
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
            <p>© {new Date().getFullYear()} BizMatchKE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
