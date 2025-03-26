"use client"

import Link from "next/link"
import { ArrowLeft, Plus, Minus } from "lucide-react"
import { useState } from "react"

export default function FAQPage() {
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
              Frequently Asked Questions
            </h1>
            <p className="text-blue-700 md:text-xl/relaxed">
              Find answers to common questions about our hostel facilities and services.
            </p>
          </div>

          <div className="space-y-4">
            <FAQItem
              question="What types of rooms are available at Goel Group Of Institution hostels?"
              answer="We offer both AC and Non-AC rooms. AC rooms come with air conditioning, premium furniture, study tables, and high-speed WiFi. Non-AC rooms include ceiling fans, standard furniture, study tables, and WiFi access. Both options are designed to provide a comfortable living environment for students."
            />

            <FAQItem
              question="What is the booking process for a hostel room?"
              answer="To book a room, you can apply online through our website or visit our administrative office in person. You'll need to fill out an application form, provide necessary documents (ID proof, address proof, college/work ID), pay the security deposit, and sign the accommodation agreement. Once approved, you'll receive confirmation of your booking."
            />

            <FAQItem
              question="What amenities are included in the hostel fee?"
              answer="The hostel fee includes accommodation, basic utilities (water, electricity with limits), WiFi, housekeeping services, security, and access to common facilities like the study room, recreation area, and gym. Meal plans are available at an additional cost. Laundry services may be charged separately depending on the package you choose."
            />

            <FAQItem
              question="What are the hostel timings and curfew hours?"
              answer="The main gate closes at 10:00 PM. All residents are expected to be inside the hostel by this time unless prior permission has been obtained from the warden. The hostel opens at 5:00 AM. Attendance is taken daily at 9:00 PM. Special permissions for late entry can be obtained for academic or emergency purposes."
            />

            <FAQItem
              question="Are meals provided at the hostel?"
              answer="Yes, we have a mess facility that provides nutritious vegetarian meals. The standard meal plan includes breakfast, lunch, evening snacks, and dinner. Special dietary requirements can be accommodated with prior notice. Meal timings are fixed and displayed in the dining area. Food is not allowed in rooms to maintain hygiene."
            />

            <FAQItem
              question="What security measures are in place at the hostel?"
              answer="We have comprehensive security measures including 24/7 security personnel, CCTV surveillance in common areas, biometric/card access systems, regular security patrols, and a visitor registration system. Female hostels have additional security with female guards. Emergency contact numbers are displayed throughout the premises."
            />

            <FAQItem
              question="Is WiFi available in the hostel?"
              answer="Yes, high-speed WiFi is available throughout the hostel premises. Each resident receives login credentials with a fair usage policy. The network is optimized for academic purposes, with certain bandwidth-intensive activities restricted during peak hours to ensure fair access for all residents."
            />

            <FAQItem
              question="What is the refund policy for the security deposit?"
              answer="The security deposit is fully refundable at the end of your stay, subject to deductions for any damages, outstanding dues, or cleaning charges. The refund process takes 15-30 business days after checkout. You must provide advance notice as per your agreement terms before vacating the hostel to be eligible for a refund."
            />

            <FAQItem
              question="Are visitors allowed in the hostel?"
              answer="Visitors are allowed only in designated common areas during visiting hours (typically 9:00 AM to 8:00 PM). All visitors must register at the reception and provide valid identification. Overnight guests are not permitted without prior written permission from the hostel management. Residents are responsible for their visitors' conduct."
            />

            <FAQItem
              question="What should I do in case of a maintenance issue in my room?"
              answer="For any maintenance issues, you should report them immediately through our maintenance request system available at the reception or through our hostel app. Our maintenance team typically addresses issues within 24-48 hours. For emergency maintenance issues (like water leakage or electrical problems), contact the warden or security personnel immediately."
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
      <button
        className="flex items-center justify-between w-full p-4 text-left font-medium focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-blue-900 font-bold">{question}</span>
        <span className="flex-shrink-0 ml-2">
          {isOpen ? <Minus className="h-5 w-5 text-orange-600" /> : <Plus className="h-5 w-5 text-blue-700" />}
        </span>
      </button>
      {isOpen && (
        <div className="p-4 pt-0 border-t">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  )
}

