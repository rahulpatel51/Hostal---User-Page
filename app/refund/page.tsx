import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function RefundPage() {
  return (
    <div className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-2">
            <Link href="/" className="inline-flex items-center text-blue-700 hover:text-blue-800">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">Refund Policy</h1>
            <p className="text-blue-700 md:text-xl/relaxed">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
          <div className="space-y-6 text-gray-700 bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-blue-900">1. Introduction</h2>
            <p>
              This Refund Policy outlines the terms and conditions for refunds at Goel Group Of Institution. We strive
              to ensure fair and transparent refund processes for all our residents.
            </p>

            <h2 className="text-2xl font-bold text-blue-900">2. Security Deposit</h2>
            <p>2.1. A security deposit is required at the time of booking.</p>
            <p>
              2.2. The security deposit is refundable at the end of the stay, subject to the condition of the room and
              adherence to hostel rules.
            </p>
            <p>2.3. Deductions may be made from the security deposit for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Damage to property or furnishings</li>
              <li>Outstanding dues or fees</li>
              <li>Cleaning charges if the room is not left in a reasonable condition</li>
              <li>Loss of keys or access cards</li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-900">3. Cancellation and Refunds</h2>
            <p>
              3.1. <strong>Cancellation before Check-in:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Cancellations made 30 days or more before the check-in date will receive a full refund of the deposit.
              </li>
              <li>Cancellations made between 15-29 days before check-in will receive a 50% refund of the deposit.</li>
              <li>Cancellations made less than 15 days before check-in will not be eligible for a refund.</li>
            </ul>

            <p>
              3.2. <strong>Early Termination:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                If you choose to leave before the end of your agreed stay period, refunds will be processed according to
                the terms in your accommodation agreement.
              </li>
              <li>Generally, a notice period of at least 30 days is required for early termination.</li>
              <li>
                Refunds for the remaining period may be subject to a cancellation fee as specified in your agreement.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-900">4. Refund Process</h2>
            <p>
              4.1. All refund requests must be submitted in writing to our administration office or via email to
              refunds@goelinstitution.com.
            </p>
            <p>4.2. Refunds will be processed within 15-30 business days from the date of approval.</p>
            <p>
              4.3. Refunds will be made using the same payment method used for the original transaction unless otherwise
              agreed.
            </p>

            <h2 className="text-2xl font-bold text-blue-900">5. Non-Refundable Fees</h2>
            <p>The following fees are non-refundable:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Registration fee</li>
              <li>Administrative charges</li>
              <li>Maintenance fees</li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-900">6. Special Circumstances</h2>
            <p>
              6.1. In case of unforeseen circumstances such as natural disasters, pandemic restrictions, or other force
              majeure events, special refund considerations may apply.
            </p>
            <p>
              6.2. Each case will be evaluated individually, and decisions will be made at the discretion of the
              management.
            </p>

            <h2 className="text-2xl font-bold text-blue-900">7. Changes to This Policy</h2>
            <p>
              We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon
              posting on our website.
            </p>

            <h2 className="text-2xl font-bold text-blue-900">8. Contact Information</h2>
            <p>If you have any questions about our Refund Policy, please contact us at:</p>
            <p>
              Email: refunds@goelinstitution.com
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

