import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
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
              Terms & Conditions
            </h1>
            <p className="text-blue-700 md:text-xl/relaxed">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
          <div className="space-y-6 text-gray-700 bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-blue-900">1. Introduction</h2>
            <p>
              Welcome to Goel Group Of Institution. These Terms and Conditions govern your use of our services and
              website. By accessing or using our services, you agree to be bound by these Terms.
            </p>

            <h2 className="text-2xl font-bold text-blue-900">2. Accommodation Services</h2>
            <p>
              Goel Group Of Institution provides hostel accommodation services to students and working professionals.
              Our services include room rental, meals, and other amenities as specified in your booking agreement.
            </p>

            <h2 className="text-2xl font-bold text-blue-900">3. Booking and Payment</h2>
            <p>3.1. All bookings must be made through our official website or authorized representatives.</p>
            <p>
              3.2. A security deposit is required at the time of booking, which is refundable subject to the condition
              of the room upon checkout and adherence to hostel rules.
            </p>
            <p>3.3. Payment schedules and methods will be specified in your booking agreement.</p>

            <h2 className="text-2xl font-bold text-blue-900">4. Cancellation Policy</h2>
            <p>
              4.1. Cancellations made 30 days or more before the check-in date will receive a full refund of the
              deposit.
            </p>
            <p>4.2. Cancellations made between 15-29 days before check-in will receive a 50% refund of the deposit.</p>
            <p>4.3. Cancellations made less than 15 days before check-in will not be eligible for a refund.</p>

            <h2 className="text-2xl font-bold text-blue-900">5. Hostel Rules and Regulations</h2>
            <p>5.1. Residents must comply with all hostel rules and regulations provided at the time of check-in.</p>
            <p>
              5.2. Violation of hostel rules may result in penalties, including but not limited to warnings, fines, or
              termination of accommodation.
            </p>

            <h2 className="text-2xl font-bold text-blue-900">6. Liability</h2>
            <p>
              6.1. Goel Group Of Institution is not responsible for any loss, damage, or theft of personal belongings.
            </p>
            <p>6.2. Residents are advised to secure their valuables and obtain appropriate insurance coverage.</p>

            <h2 className="text-2xl font-bold text-blue-900">7. Privacy Policy</h2>
            <p>7.1. We collect and process personal information in accordance with our Privacy Policy.</p>
            <p>
              7.2. By using our services, you consent to the collection and processing of your personal information as
              described in our Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-blue-900">8. Changes to Terms</h2>
            <p>8.1. Goel Group Of Institution reserves the right to modify these Terms and Conditions at any time.</p>
            <p>8.2. Changes will be effective immediately upon posting on our website.</p>

            <h2 className="text-2xl font-bold text-blue-900">9. Contact Information</h2>
            <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
            <p>
              Email: info@goelinstitution.com
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

