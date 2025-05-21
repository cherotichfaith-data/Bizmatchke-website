"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ArrowRight, CheckCircle, Users, Target, BarChart3, Menu, X, Sun, Moon, Laptop } from "lucide-react"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { NewsletterForm } from "@/components/newsletter-form"
import { SocialLinks } from "@/components/social-links"
import Head from 'next/head'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <Head>
        <title>BizMatchKE - AI-Powered Business Matching Platform in Kenya</title>
        <meta name="description" content="BizMatchKE uses AI to generate personalized business opportunities tailored to your skills, capital, and location in Kenya. Start your entrepreneurial journey today." />
        <meta name="keywords" content="business matching, Kenya, entrepreneurship, AI business ideas, startup Kenya, business opportunities" />
        <meta property="og:title" content="BizMatchKE - AI-Powered Business Matching Platform" />
        <meta property="og:description" content="Transform your skills into a successful business with BizMatchKE's AI-powered platform." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BizMatchKE - AI-Powered Business Matching Platform" />
        <meta name="twitter:description" content="Transform your skills into a successful business with BizMatchKE's AI-powered platform." />
      </Head>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">BizMatchKE</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6">
              <Link
                href="/about"
                className="text-sm font-medium text-foreground/70 hover:text-blue-600 transition-colors"
              >
                About
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm font-medium text-foreground/70 hover:text-blue-600 transition-colors"
              >
                How It Works
              </Link>
              <Link href="#sdg" className="text-sm font-medium text-foreground/70 hover:text-blue-600 transition-colors">
                SDG Alignment
              </Link>
              <Link
                href="#team"
                className="text-sm font-medium text-foreground/70 hover:text-blue-600 transition-colors"
              >
                Our Team
              </Link>
              <Link
                href="/blog"
                className="text-sm font-medium text-foreground/70 hover:text-blue-600 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="#newsletter"
                className="text-sm font-medium text-foreground/70 hover:text-blue-600 transition-colors"
              >
                Newsletter
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
              <Button className="bg-blue-600 hover:bg-blue-700 transition-colors hidden md:flex">
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
                  href="/about"
                  className="block py-2 text-base font-medium text-foreground/70 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#how-it-works"
                  className="block py-2 text-base font-medium text-foreground/70 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  How It Works
                </Link>
                <Link
                  href="#sdg"
                  className="block py-2 text-base font-medium text-foreground/70 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  SDG Alignment
                </Link>
                <Link
                  href="#team"
                  className="block py-2 text-base font-medium text-foreground/70 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Our Team
                </Link>
                <Link
                  href="/blog"
                  className="block py-2 text-base font-medium text-foreground/70 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="#newsletter"
                  className="block py-2 text-base font-medium text-foreground/70 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Newsletter
                </Link>
                <div className="flex items-center gap-2 py-2">
                  <span className="text-base font-medium text-foreground/70">Theme:</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setTheme("light")}
                    className={`${theme === "light" ? "bg-blue-100 text-blue-600 border-blue-200 dark:bg-blue-900/30 dark:text-blue-500 dark:border-blue-900/50" : ""}`}
                  >
                    <Moon className="mr-1 h-3 w-3" />
                    Light
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setTheme("dark")}
                    className={`${theme === "dark" ? "bg-blue-100 text-blue-600 border-blue-200 dark:bg-blue-900/30 dark:text-blue-500 dark:border-blue-900/50" : ""}`}
                  >
                    <Sun className="mr-1 h-3 w-3" />
                    Dark
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setTheme("system")}
                    className={`${theme === "system" ? "bg-blue-100 text-blue-600 border-blue-200 dark:bg-blue-900/30 dark:text-blue-500 dark:border-blue-900/50" : ""}`}
                  >
                    <Laptop className="mr-1 h-3 w-3" />
                    System
                  </Button>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-colors mt-4">Access Platform</Button>
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-800/75 dark:from-gray-900/95 dark:to-gray-800/85"></div>
            </div>
            <div className="container relative z-10 h-full">
              <div className="pt-16 md:pt-20 max-w-2xl">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl text-white leading-tight">
                  Turn Your Skills Into a <span className="text-blue-300">Successful Business</span>
                </h1>
                <p className="text-gray-200 text-base sm:text-lg md:text-xl/relaxed mt-6">
                  Struggling to find the right business idea? BizMatchKE uses AI to generate personalized business 
                  opportunities tailored to your skills, capital, and location in Kenya.
                </p>
                <div className="mt-8">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg transition-all transform hover:scale-105">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section id="how-it-works" className="py-20 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-8 text-center">
                <div className="space-y-4">
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                    How BizMatchKE Works
                  </h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl/relaxed">
                    Your intelligent partner in business creation and growth
                  </p>
                </div>

                {/* Main Features Grid */}
                <div className="grid gap-8 md:grid-cols-2 w-full max-w-5xl">
                  <Card className="border-blue-200 dark:border-blue-900/50 shadow-md flex flex-col h-full hover:shadow-lg transition-shadow">
                    <CardContent className="flex flex-col flex-1 p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                        <Users className="h-6 w-6 text-blue-600 dark:text-blue-500" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">1. Create Profile</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                          <span>Secure registration and authentication</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                          <span>Input your skills and interests (e.g., baking, farming)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                          <span>Specify available capital (e.g., KES 3,000)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                          <span>Select your location (dropdown or manual input)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                          <span>Access personalized dashboard with saved ideas</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                          <span>Real-time form validation and feedback</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="border-blue-200 dark:border-blue-900/50 shadow-md flex flex-col h-full hover:shadow-lg transition-shadow">
                    <CardContent className="flex flex-col flex-1 p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                        <BarChart3 className="h-6 w-6 text-blue-600 dark:text-blue-500" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">2. Get AI-Generated Ideas</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                          <span>Real-time input processing for instant ideas</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                          <span>Contextual understanding of your skills and resources</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                          <span>Location-specific business recommendations</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                          <span>Tailored ideas based on your capital availability</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Platform Overview */}
                <div className="mt-12 max-w-3xl mx-auto">
                  <Card className="border-blue-200 dark:border-blue-900/50 shadow-md flex flex-col h-full hover:shadow-lg transition-shadow">
                    <CardContent className="flex flex-col flex-1 p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                        <BarChart3 className="h-6 w-6 text-blue-600 dark:text-blue-500" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">Platform Features</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-500 mr-2 mt-1" />
                          <span>Secure user authentication and profile management</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-500 mr-2 mt-1" />
                          <span>AI-powered business idea generation based on your inputs</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-500 mr-2 mt-1" />
                          <span>Save and manage your favorite business ideas</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-500 mr-2 mt-1" />
                          <span>Access to mentorship opportunities and funding resources</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-500 mr-2 mt-1" />
                          <span>Comprehensive FAQ and support system</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* SDG Alignment Section */}
          <section id="sdg" className="py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
                    SDG Alignment
                  </h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl/relaxed">
                    BizMatchKE is committed to supporting the UN Sustainable Development Goals.
                  </p>
                </div>
              </div>
              <div className="mx-auto max-w-5xl py-12">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  <Card className="border-blue-200 dark:border-blue-900/50 shadow-md flex flex-col h-full hover:shadow-lg transition-shadow">
                    <CardContent className="flex flex-col p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                        <CheckCircle className="h-6 w-6 text-blue-600 dark:text-blue-500" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3">SDG 1: No Poverty</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                          <span>AI-generated business ideas for marginalized groups</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                          <span>Personalized entrepreneurial guidance</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                          <span>Self-sustaining business creation</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="border-blue-200 dark:border-blue-900/50 shadow-md flex flex-col h-full hover:shadow-lg transition-shadow">
                    <CardContent className="flex flex-col p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                        <CheckCircle className="h-6 w-6 text-blue-600 dark:text-blue-500" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3">SDG 8: Decent Work and Economic Growth</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                          <span>Addressing youth unemployment</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                          <span>Viable business ideas aligned with market needs</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                          <span>Strengthening Kenya's SME sector</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="border-blue-200 dark:border-blue-900/50 shadow-md flex flex-col h-full hover:shadow-lg transition-shadow">
                    <CardContent className="flex flex-col p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                        <CheckCircle className="h-6 w-6 text-blue-600 dark:text-blue-500" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3">SDG 9: Industry, Innovation, and Infrastructure</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                          <span>Cutting-edge Generative AI technology</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                          <span>Innovative business solutions</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                          <span>Support for underserved communities</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="border-blue-200 dark:border-blue-900/50 shadow-md flex flex-col h-full hover:shadow-lg transition-shadow">
                    <CardContent className="flex flex-col p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                        <CheckCircle className="h-6 w-6 text-blue-600 dark:text-blue-500" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3">SDG 17: Partnerships for the Goals</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                          <span>Collaborative ecosystem development</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                          <span>AI technology meets local market knowledge</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                          <span>Sustainable economic development</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Team Members Section */}
          <section id="team" className="py-20 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
                    Meet Our Team
                  </h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground dark:text-gray-300 text-lg md:text-xl/relaxed">
                    The dedicated professionals behind BizMatchKE.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-12 sm:grid-cols-2 md:grid-cols-3">
                <Card className="border-blue-200 dark:border-blue-900/50 shadow-md hover:shadow-lg transition-shadow">
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
                    <p className="text-blue-600 dark:text-blue-500">Team Lead</p>
                    <p className="text-muted-foreground dark:text-gray-300 mt-2 text-sm">
                      Data Scientist|Business Analyst.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-blue-200 dark:border-blue-900/50 shadow-md hover:shadow-lg transition-shadow">
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
                    <p className="text-blue-600 dark:text-blue-500">Prompt Engineer</p>
                    <p className="text-muted-foreground dark:text-gray-300 mt-2 text-sm">
                      Prompt Engineering.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-blue-200 dark:border-blue-900/50 shadow-md hover:shadow-lg transition-shadow">
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
                    <p className="text-blue-600 dark:text-blue-500">UI/UX Developer</p>
                    <p className="text-muted-foreground dark:text-gray-300 mt-2 text-sm">
                      Web Development.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-blue-200 dark:border-blue-900/50 shadow-md hover:shadow-lg transition-shadow">
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
                    <p className="text-blue-600 dark:text-blue-500">Founder JHUB Africa</p>
                    <p className="text-muted-foreground dark:text-gray-300 mt-2 text-sm">
                      Project Supervisor.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-blue-200 dark:border-blue-900/50 shadow-md hover:shadow-lg transition-shadow">
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
                    <p className="text-blue-600 dark:text-blue-500">ML Engineer</p>
                    <p className="text-muted-foreground dark:text-gray-300 mt-2 text-sm">
                      Machine Learning.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-blue-200 dark:border-blue-900/50 shadow-md hover:shadow-lg transition-shadow">
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
                    <p className="text-blue-600 dark:text-blue-500">ML Engineer</p>
                    <p className="text-muted-foreground dark:text-gray-300 mt-2 text-sm">
                      Machine Learning.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 md:py-24 bg-gradient-to-r from-blue-900 to-blue-800 dark:from-gray-900 dark:to-gray-800 text-white">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-6 text-center">
                <div className="space-y-4">
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
                    Ready to Start Your <span className="text-blue-300">Business Journey</span>?
                  </h2>
                  <p className="mx-auto max-w-[700px] text-gray-300 text-lg md:text-xl/relaxed">
                    Get personalized AI-generated business ideas tailored to your skills, capital, and location. 
                    Join BizMatchKE today and turn your entrepreneurial dreams into reality.
                  </p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg transition-all transform hover:scale-105">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </section>

          {/* Latest from Our Blog Section */}
          <section className="py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
            <div className="container">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  Latest from Our Blog
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground">
                  Stay updated with the latest insights, tips, and success stories for Kenyan entrepreneurs.
                </p>
              </div>

              <div className="flex flex-col items-center justify-center py-12">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">Coming Soon</h3>
                <p className="text-muted-foreground text-center max-w-md">
                  We're working on bringing you valuable content to help you succeed in your entrepreneurial journey.
                  Check back soon for our first blog posts!
                </p>
              </div>
            </div>
          </section>

          {/* Stay Updated Section */}
          <section id="newsletter" className="py-20 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
            <div className="container">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  Stay Updated
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground">
                  Subscribe to our newsletter for the latest business insights, tips, and opportunities.
                </p>
              </div>

              <div className="mx-auto max-w-md">
                <Card className="border-blue-200 dark:border-blue-900/50 shadow-md">
                  <CardContent className="p-6">
                    <NewsletterForm />
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12 flex flex-col items-center justify-center space-y-4">
                <p className="text-sm text-muted-foreground">Follow us on social media</p>
                <SocialLinks />
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
          <div className="container px-4 py-16 md:px-6">
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <BarChart3 className="h-6 w-6 text-blue-500" />
                  <span className="text-2xl font-bold text-white bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">BizMatchKE</span>
                </div>
                <p className="text-base">Connecting businesses across Kenya for sustainable growth and innovation.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white dark:text-gray-200 mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="text-sm hover:text-blue-500 transition-colors inline-block">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#how-it-works" className="text-sm hover:text-blue-500 transition-colors inline-block">
                      How It Works
                    </Link>
                  </li>
                  <li>
                    <Link href="#sdg" className="text-sm hover:text-blue-500 transition-colors inline-block">
                      SDG Alignment
                    </Link>
                  </li>
                  <li>
                    <Link href="#team" className="text-sm hover:text-blue-500 transition-colors inline-block">
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-sm hover:text-blue-500 transition-colors inline-block">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-sm hover:text-blue-500 transition-colors inline-block">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white dark:text-gray-200 mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/terms" className="text-sm hover:text-blue-500 transition-colors inline-block">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-sm hover:text-blue-500 transition-colors inline-block">
                      Privacy Policy
                    </Link>
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
    </>
  )
}
