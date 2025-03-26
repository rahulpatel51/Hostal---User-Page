import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-2">
            <Link href="/" className="inline-flex items-center text-blue-700 hover:text-blue-800">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
              Privacy Policy
            </h1>
            <p className="text-blue-700 md:text-xl/relaxed">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
          <div className="space-y-6 text-gray-700 bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-blue-900">1. Introduction</h2>
            <p>
              At Goel Group Of Institution, we are committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when you use our services or visit our
              website.
            </p>

            <h2 className="text-2xl font-bold text-blue-900">2. Information We Collect</h2>
            <p>
              2.1. <strong>Personal Information:</strong> We may collect personal information such as your name, email
              address, phone number, address, date of birth, educational background, and payment information when you
              register for our services.
            </p>
            <p>
              2.2. <strong>Usage Data:</strong> We may collect information on how you access and use our website and
              services, including your IP address, browser type, pages visited, and time spent on our website.
            </p>

            <h2 className="text-2xl font-bold text-blue-900">3. How We Use Your Information</h2>
            <p>We use the information we collect for various purposes, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Providing and maintaining our services</li>
              <li>Processing your bookings and payments</li>
              <li>Communicating with you about our services</li>
              <li>Improving our website and services</li>
              <li>Complying with legal obligations</li>
              <li>Addressing security concerns and preventing fraud</li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-900">4. Disclosure of Your Information</h2>
            <p>We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Service providers who assist us in operating our business</li>
              <li>Legal authorities when required by law</li>
              <li>Business partners with your consent</li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-900">5. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized access,
              alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic
              storage is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-blue-900">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Request restriction of processing</li>
              <li>Request transfer of your information</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-900">7. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl font-bold text-blue-900">8. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p>
              Email: privacy@goelinstitution.com
              <br />
              Phone: +91 98765 43210
              <br />
              Address: 123 University Road, Near College Campus, City - 380015
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

