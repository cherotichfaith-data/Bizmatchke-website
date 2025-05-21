import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Privacy Policy - BizMatchKE",
  description: "Learn about how BizMatchKE collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>1. Introduction</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              BizMatchKE ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered business matching platform.
            </p>
            <p className="text-gray-600">
              By accessing or using BizMatchKE, you agree to this Privacy Policy. If you do not agree with our policies and practices, please do not use our platform.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>2. Information We Collect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <h3 className="font-semibold text-lg">2.1 Personal Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Name and contact information</li>
              <li>Email address</li>
              <li>Location data</li>
              <li>Business-related information</li>
              <li>Skills and interests</li>
              <li>Financial information (capital availability)</li>
            </ul>

            <h3 className="font-semibold text-lg mt-6">2.2 Usage Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Usage patterns</li>
              <li>Platform interactions</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>3. How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>To provide and maintain our services</li>
              <li>To generate personalized business recommendations</li>
              <li>To improve our platform and user experience</li>
              <li>To communicate with you about our services</li>
              <li>To send newsletters and updates (with your consent)</li>
              <li>To comply with legal obligations</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>4. Data Security</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>5. Your Rights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to data processing</li>
              <li>Withdraw consent</li>
              <li>Data portability</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>6. Cookies and Tracking</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              We use cookies and similar tracking technologies to improve your experience on our platform. You can control cookie settings through your browser preferences.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>7. Third-Party Services</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              We may use third-party services that collect, monitor, and analyze user data. These services have their own privacy policies and may collect information as specified in their respective privacy policies.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>8. Children's Privacy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>9. Changes to This Policy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>10. Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-600">
              Email: privacy@bizmatchke.com<br />
              Address: Nairobi, Kenya<br />
              P.O. Box 00000
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 