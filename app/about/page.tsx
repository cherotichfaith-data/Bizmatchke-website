import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Users, Lightbulb, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - BizMatchKE",
  description: "Learn about BizMatchKE's mission to empower Kenyan entrepreneurs through AI-powered business matching.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About BizMatchKE</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Empowering Kenyan entrepreneurs through AI-powered business matching and personalized opportunities.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Mission and Vision */}
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-6 w-6 text-blue-600" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                To democratize entrepreneurship in Kenya by leveraging AI technology to match aspiring business owners with personalized opportunities that align with their skills, resources, and local market needs.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-6 w-6 text-blue-600" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                To become Kenya's leading platform for business opportunity matching, fostering sustainable economic growth and innovation across all regions of the country.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* What We Do */}
        <Card>
          <CardHeader>
            <CardTitle>What We Do</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-gray-600">
              BizMatchKE is an innovative platform that uses artificial intelligence to help aspiring entrepreneurs find the perfect business opportunities. We understand that starting a business can be overwhelming, especially when you're not sure which opportunity best matches your skills and resources.
            </p>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Our Approach</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>AI-powered business matching</li>
                  <li>Personalized recommendations</li>
                  <li>Local market analysis</li>
                  <li>Resource optimization</li>
                  <li>Continuous support and guidance</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Our Impact</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Empowering local entrepreneurs</li>
                  <li>Creating sustainable businesses</li>
                  <li>Supporting economic growth</li>
                  <li>Fostering innovation</li>
                  <li>Building stronger communities</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Why Choose Us */}
        <Card>
          <CardHeader>
            <CardTitle>Why Choose BizMatchKE</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-blue-600" />
                  <h3 className="font-semibold">User-Centric</h3>
                </div>
                <p className="text-gray-600">
                  We put our users first, ensuring that every recommendation is tailored to their specific needs and circumstances.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Target className="h-6 w-6 text-blue-600" />
                  <h3 className="font-semibold">Data-Driven</h3>
                </div>
                <p className="text-gray-600">
                  Our AI algorithms analyze market trends and opportunities to provide the most relevant business suggestions.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Globe className="h-6 w-6 text-blue-600" />
                  <h3 className="font-semibold">Local Focus</h3>
                </div>
                <p className="text-gray-600">
                  We understand the Kenyan market and provide opportunities that are viable in your specific location.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Our Commitment */}
        <Card>
          <CardHeader>
            <CardTitle>Our Commitment</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              At BizMatchKE, we are committed to supporting the growth of entrepreneurship in Kenya. We believe that by connecting aspiring business owners with the right opportunities, we can help create a more prosperous and sustainable future for all Kenyans. Our platform is designed to be accessible, user-friendly, and effective in helping you turn your entrepreneurial dreams into reality.
            </p>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Business Journey?</h2>
          <p className="text-gray-600 mb-6">
            Join BizMatchKE today and discover the perfect business opportunity that matches your skills and resources.
          </p>
          <a
            href="#"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </div>
  )
} 