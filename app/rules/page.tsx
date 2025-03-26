import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function RulesPage() {
  return (
    <div className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-2">
            <Link href="/" className="inline-flex items-center text-blue-700 hover:text-blue-800">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">Hostel Rules</h1>
            <p className="text-blue-700 md:text-xl/relaxed">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
          <div className="space-y-6 text-gray-700 bg-white p-8 rounded-xl shadow-md">
            <p className="text-lg">
              At Goel Group Of Institution, we strive to create a safe, comfortable, and conducive environment for all
              residents. The following rules and regulations are designed to ensure harmonious living and academic
              excellence.
            </p>

            <h2 className="text-2xl font-bold text-blue-900">1. General Rules</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Residents must carry their ID cards at all times within the hostel premises.</li>
              <li>Ragging in any form is strictly prohibited and will result in immediate expulsion.</li>
              <li>Smoking, alcohol, and drugs are strictly prohibited within the hostel premises.</li>
              <li>Residents are responsible for the cleanliness of their rooms and common areas.</li>
              <li>Noise levels should be kept to a minimum, especially during study hours and after 10:00 PM.</li>
              <li>Conservation of water and electricity is mandatory.</li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-900">2. Room Regulations</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Room allocation is at the discretion of the hostel management.</li>
              <li>Residents are not allowed to change rooms without prior permission.</li>
              <li>Cooking in rooms is strictly prohibited.</li>
              <li>Electrical appliances such as heaters, irons, and hot plates are not permitted in rooms.</li>
              <li>Residents are responsible for the furniture and fixtures in their rooms.</li>
              <li>Walls should not be defaced by posters, nails, or adhesives.</li>
              <li>Room inspections may be conducted periodically by hostel authorities.</li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-900">3. Visitors and Guests</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Visitors are allowed only in designated areas during specified hours.</li>
              <li>Overnight guests are not permitted without prior written permission.</li>
              <li>All visitors must register at the reception and provide valid identification.</li>
              <li>Residents are responsible for the conduct of their visitors.</li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-900">4. Attendance and Leave</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Attendance will be taken daily at 9:00 PM.</li>
              <li>Residents must inform the warden in advance for any planned absence.</li>
              <li>For emergency leave, residents must obtain permission from the warden.</li>
              <li>Extended absence without permission may result in disciplinary action.</li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-900">5. Mess Rules</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Meal timings must be strictly followed.</li>
              <li>Food will not be served outside the designated dining area.</li>
              <li>Wasting food is discouraged.</li>
              <li>Residents must maintain decorum in the dining hall.</li>
              <li>Complaints regarding food quality should be directed to the mess committee.</li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-900">6. Internet Usage</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Internet facilities are provided for academic purposes.</li>
              <li>Downloading illegal content or excessive bandwidth usage is prohibited.</li>
              <li>Sharing of personal Wi-Fi credentials with non-residents is not allowed.</li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-900">7. Safety and Security</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Entry and exit from the hostel must be through designated gates only.</li>
              <li>The main gate will be closed at 10:00 PM.</li>
              <li>Residents must report any suspicious activities or persons to the security staff.</li>
              <li>Fire safety equipment should not be tampered with.</li>
              <li>Valuable items should be kept secure; the management is not responsible for any loss.</li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-900">8. Disciplinary Actions</h2>
            <p>Violation of hostel rules may result in the following disciplinary actions:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Verbal warning</li>
              <li>Written warning</li>
              <li>Fine or penalty</li>
              <li>Suspension from the hostel</li>
              <li>Expulsion from the hostel</li>
              <li>Reporting to academic authorities for further action</li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-900">9. Grievance Redressal</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Residents can approach the hostel warden for any grievances.</li>
              <li>If not resolved, complaints can be escalated to the Chief Warden or Hostel Committee.</li>
              <li>A suggestion box is available at the reception for anonymous feedback.</li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-900">10. Amendments</h2>
            <p>
              The hostel management reserves the right to amend these rules as and when necessary. Any changes will be
              communicated to the residents through notice boards and email.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-xl font-bold mb-2 text-blue-900">Note to Residents</h3>
              <p>
                These rules are designed for your safety, comfort, and academic success. Your cooperation in following
                these guidelines will help create a positive living and learning environment for everyone.
              </p>
              <p className="mt-2">
                For any clarifications or questions regarding these rules, please contact the hostel administration
                office.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

