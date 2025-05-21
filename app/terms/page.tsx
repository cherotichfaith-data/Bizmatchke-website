import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Terms of Service - BizMatchKE",
  description: "Read our terms of service to understand your rights and responsibilities when using BizMatchKE.",
}

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>1. Agreement to Terms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              By accessing or using BizMatchKE's platform, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>2. Description of Service</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              BizMatchKE provides an AI-powered platform that matches users with personalized business opportunities based on their skills, capital, and location in Kenya. Our service includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>AI-generated business recommendations</li>
              <li>Personalized business matching</li>
              <li>Resource access and guidance</li>
              <li>Platform features and tools</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>3. User Accounts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">To use our services, you must:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Be at least 18 years old</li>
              <li>Register for an account with accurate information</li>
              <li>Maintain the security of your account</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Not share your account credentials</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>4. User Responsibilities</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">You agree to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Provide accurate and complete information</li>
              <li>Use the platform for lawful purposes only</li>
              <li>Not engage in any fraudulent activities</li>
              <li>Not interfere with the platform's operation</li>
              <li>Not attempt to access restricted areas</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>5. Intellectual Property</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              The platform and its original content, features, and functionality are owned by BizMatchKE and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>6. Limitation of Liability</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              BizMatchKE shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service. We do not guarantee the accuracy of AI-generated business recommendations.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>7. Disclaimer of Warranties</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              The service is provided "as is" without warranties of any kind, either express or implied. We do not warrant that the service will be uninterrupted or error-free.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>8. Termination</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              We may terminate or suspend your account and access to the service immediately, without prior notice, for any breach of these Terms of Service.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>9. Changes to Terms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              We reserve the right to modify these terms at any time. We will notify users of any changes by updating the "Last updated" date. Your continued use of the service constitutes acceptance of the modified terms.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>10. Governing Law</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              These terms shall be governed by and construed in accordance with the laws of Kenya, without regard to its conflict of law provisions.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>11. Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              For any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-gray-600">
              Email: legal@bizmatchke.com<br />
              Address: Nairobi, Kenya<br />
              P.O. Box 00000
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 