"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-family-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl mb-6">
              Discover Your Perfect College
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Find, compare, and explore colleges that match your aspirations and goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <input
                type="text"
                placeholder="Search for colleges, courses, or exams..."
                className="flex-1 min-w-[250px] px-4 py-3 rounded-l-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
              />
              <button
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-r-lg hover:bg-blue-700 transition-colors duration-200 cursor-pointer"
              >
                Search Colleges
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -bottom-25 left-1/2 -translate-x-1/2 w-40 h-40 bg-blue-100 rounded-full opacity-50"></div>
        </div>
      </section>

      {/* College Detail Demo */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Explore College Details
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* College Card 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-r from-blue-50 to-blue-100">

              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Indian Institute of Technology Delhi</h3>
                <p className="text-gray-600 mb-4">New Delhi, India</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">B.Tech</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">M.Tech</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">PhD</span>
                </div>
                <p className="text-gray-500 text-sm mb-4">
                  NIRF Rank: 2 • Established: 1961 • Students: 8,000+
                </p>
                <button
                  className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200"
                >
                  View Details
                </button>
              </div>
            </div>

            {/* College Card 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-r from-blue-50 to-blue-100">

              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Indian Institute of Management Ahmedabad</h3>
                <p className="text-gray-600 mb-4">Ahmedabad, India</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">MBA</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">PGPM</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">FPM</span>
                </div>
                <p className="text-gray-500 text-sm mb-4">
                  NIRF Rank: 1 • Established: 1961 • Students: 400+
                </p>
                <button
                  className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200"
                >
                  View Details
                </button>
              </div>
            </div>

            {/* College Card 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-r from-blue-50 to-blue-100">

              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">All India Institute of Medical Sciences</h3>
                <p className="text-gray-600 mb-4">New Delhi, India</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">MBBS</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">MD</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">MS</span>
                </div>
                <p className="text-gray-500 text-sm mb-4">
                  NIRF Rank: 1 • Established: 1956 • Students: 2,000+
                </p>
                <button
                  className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Listing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose CollegeDisc?
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7 20h10a2 2 0 002-2V6a2 2 0 002-2H7a2 2 0 002-2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Database</h3>
              <p className="text-gray-600 text-sm">
                Access information on thousands of colleges, universities, and institutes across India and abroad.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H3m8 4H3m-9 8h10M5 20h14a2 2 0 002-2V8a2 2 0 002-2H5a2 2 0 002-2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Comparison Tool</h3>
              <p className="text-gray-600 text-sm">
                Compare colleges side-by-side on fees, placements, faculty, infrastructure and more.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a2 2 0 100-4 2 2 0 100 4 2 2 0 100-4 2 2 0 100-4 2 2 0 100-4 2 2 0 000 4zM9 18a3 3 0 013-3h6a3 3 0 013 3v2a1 1 0 01-1 1h-8a1 1 0 01-1-1v-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Guidance</h3>
              <p className="text-gray-600 text-sm">
                Get personalized counseling and expert advice on college selection and career paths.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Verified Reviews</h3>
              <p className="text-gray-600 text-sm">
                Read authentic reviews from students and alumni to make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Start Your College Journey Today
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of students who have found their perfect college match with CollegeDisc.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              className="flex-1 sm:w-auto px-6 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Explore Colleges
            </button>
            <button
              className="flex-1 sm:w-auto px-6 py-4 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200"
            >
              Compare Now
            </button>
          </div>
        </div>
      </section>

      {/* Fixed Footer */}
      <footer className="bg-gray-800 text-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">About CollegeDisc</h3>
              <p className="text-sm">
                CollegeDisc is your trusted partner in discovering the perfect college for your academic journey. We provide comprehensive information, expert guidance, and tools to make informed decisions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Home</a></li>
                <li><a href="/colleges" className="hover:text-white transition-colors duration-200">Colleges</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Compare</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Contact</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors duration-200">College Rankings</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Entrance Exams</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Scholarships</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Career Guidance</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
              <p className="flex items-start space-x-3 text-sm">
                <svg className="h-5 w-5 mt-0.5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 002-2v10a2 2 0 002 2z" />
                </svg>
                <span>info@collegedisc.com</span>
              </p>
              <p className="flex items-start space-x-3 text-sm">
                <svg className="h-5 w-5 mt-0.5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                </svg>
                <span>+91 12345 67890</span>
              </p>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-700 text-center text-sm">
            <p>&copy; 2026 CollegeDisc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}