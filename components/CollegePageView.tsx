'use client'
import { useEffect, useState } from "react";
import { CollegeProps } from "./CollegeCard";

export default function CollegePageView({ data: collegId }: { data: string }) {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [college, setCollege] = useState<CollegeProps>(
        {
            name: "",
            description: "",
            slug: "",
            logo: "",
            address: "",
            state: "",
            fees: 0,
            ranking: 0,
            rating: 0,
            area: 0,
            establishYear: 0,
            totalFaculty: 0,
            totalStudents: 0,
            NIRFRanking: 0,
            IndiaTodayRanking: 0,
            courseName: "",
            courseSlug: "",
            courseType: "",
            reviews: []
        }
    )

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                setIsLoading(true)
                const response = await fetch(`http://localhost:3000/api/college?id=${collegId}`)
                const data = await response.json()

                if (data.success) {
                    setCollege(data.data)
                }
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchDetail();
    }, [])

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Back Button */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <button
                    onClick={() => window.history.back()}
                    className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                    <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Colleges
                </button>
            </div>

            {/* College Details */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    {/* Image Section */}
                    <div className="relative">
                        <img
                            src={college.logo!}
                            alt={`${college.name} campus`}
                            className="w-full h-96 object-cover"
                        />
                        {/* Logo Overlay */}
                        <div className="absolute bottom-4 left-4 flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
                            <img
                                src={college.logo!}
                                alt={`${college.name} logo`}
                                className="h-10 w-10 object-contain"
                            />
                            <div>
                                <h2 className="text-xl font-bold text-gray-900">{college.name}</h2>
                                <p className="text-sm text-gray-500">Gorakhpur {college.state}</p>
                            </div>
                        </div>
                    </div>

                    {/* Details Content */}
                    <div className="p-8">
                        {/* Header with Rating */}
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">{college.name}</h1>
                                <p className="text-gray-600 mb-2">{college.description}</p>
                            </div>
                            <div className="text-center">
                                <div className="flex items-center space-x-2">
                                    {[1, 2, 3, 4, 5].map((index) => (
                                        <svg
                                            key={index}
                                            className={`h-5 w-5 ${index <= college.rating
                                                ? "text-yellow-400"
                                                : "text-yellow-200"
                                                }`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-.363-1.118l-3.976 2.888a1 1 0 00-.588-1.81h4.915a1 1 0 00.95-.69l1.519-4.674z" />
                                        </svg>
                                    ))}
                                    <span className="ml-2 text-gray-600 font-medium">{college.rating}/5</span>
                                </div>
                            </div>
                        </div>

                        {/* Info Grid */}
                        <div className="grid grid-cols-1 gap-6 mb-8">
                            {/* Basic Info */}
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z" />
                                    </svg>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Address</p>
                                        <p className="text-gray-700">{college.address}, Gorakhpur, {college.state}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                    </svg>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Phone</p>
                                        <p className="text-gray-700">+91 12345 67890</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z" />
                                    </svg>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Email</p>
                                        <p className="text-gray-700">info@{college
                                            .slug
                                            .toLowerCase()
                                            .replace(/-/g, "")}.edu.in</p>
                                    </div>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <p className="text-sm font-medium text-gray-500">Established</p>
                                    <p className="text-2xl font-bold text-gray-900">{college.establishYear}</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <p className="text-sm font-medium text-gray-500">NIRF Ranking</p>
                                    <p className="text-2xl font-bold text-gray-900">#{college.NIRFRanking}</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <p className="text-sm font-medium text-gray-500">India Today Ranking</p>
                                    <p className="text-2xl font-bold text-gray-900">#{college.IndiaTodayRanking}</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <p className="text-sm font-medium text-gray-500">Annual Fees</p>
                                    <p className="text-2xl font-bold text-gray-900">₹{college.fees.toLocaleString()}</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <p className="text-sm font-medium text-gray-500">Campus Area</p>
                                    <p className="text-2xl font-bold text-gray-900">{college.area} acres</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <p className="text-sm font-medium text-gray-500">Faculty</p>
                                    <p className="text-2xl font-bold text-gray-900">{college.totalFaculty.toLocaleString()}</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <p className="text-sm font-medium text-gray-500">Students</p>
                                    <p className="text-2xl font-bold text-gray-900">{college.totalStudents.toLocaleString()}</p>
                                </div>
                            </div>
                        </div>

                        {/* Course Information */}
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Featured Program</h3>
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a2 2 0 100-4 2 2 0 100-4 2 2 0 100-4 2 2 0 100-4 2 2 0 100-4 2 2 0 100-4 2 2 0 000 4zM9 18a3 3 0 013-3h6a3 3 0 013 3v2a1 1 0 01-1 1h-8a1 1 0 01-1 1v-2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Course Name</p>
                                    <p className="text-lg font-medium text-gray-800">{college.courseName}</p>
                                    <p className="text-sm font-medium text-gray-500">Course Type</p>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                                        {college.courseType}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Reviews Section */}
                        {college.reviews && college.reviews.length > 0 && (
                            <div className="mt-8">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Student Reviews</h3>
                                <div className="space-y-4">
                                    {college.reviews.map((review, index) => (
                                        <div key={index} className="border border-gray-200 rounded-lg p-4">
                                            <div className="flex items-start space-x-3">
                                                <div className="flex-shrink-0">
                                                    <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                                        <circle cx="12" cy="7" r="4" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <div className="flex items-between justify-between mb-1">
                                                        <h4 className="font-medium text-gray-800">{review.name}</h4>
                                                        <div className="flex items-center space-x-1">
                                                            {[1, 2, 3, 4, 5].map((starIndex) => (
                                                                <svg
                                                                    key={starIndex}
                                                                    className={`h-4 w-4 ${starIndex <= review.rating
                                                                            ? "text-yellow-400"
                                                                            : "text-yellow-200"
                                                                        }`}
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                >
                                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-.363-1.118l-3.976 2.888a1 1 0 00-.588-1.81h4.915a1 1 0 00.95-.69l1.519-4.674z" />
                                                                </svg>
                                                            ))}
                                                            <span className="ml-1 text-sm text-gray-500">{review.rating}/5</span>
                                                        </div>
                                                    </div>
                                                    <p className="text-sm text-gray-600">{new Date(review.date).toLocaleDateString()}</p>
                                                    <p className="mt-2 text-gray-700">{review.reviewText}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <button
                                className="flex-1 sm:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
                            >
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7 20h10a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2-2v12a2 2 0 002 2z" />
                                </svg>
                                Apply Now
                            </button>
                            <button
                                className="flex-1 sm:w-auto px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center gap-2"
                            >
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z" />
                                </svg>
                                Save for Later
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}