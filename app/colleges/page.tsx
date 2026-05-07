'use client'

import CollegeCard, { CollegeProps } from "@/components/CollegeCard"
import { useEffect, useState } from "react"

export default function CollegePage() {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [colleges, setColleges] = useState<CollegeProps[]>([])

    useEffect(() => {
        const fetchColleges = async () => {
            try {
                setIsLoading(true)
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/colleges`)
                console.log("got here")
                const data = await response.json()

                if (!data.success) {
                    return alert("Failed to fetch data")
                }

                setColleges(data.data)

            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchColleges()
    }, [])

    return (
        <div className="min-h-screen">
            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Page Title */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Explore Colleges</h1>
                    <p className="mt-2 text-gray-600">Discover your perfect college match</p>
                </div>

                {/* Loading State */}
                {isLoading && (
                    <div className="text-center py-12">
                        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                        <p className="mt-4 text-gray-600">Loading colleges...</p>
                    </div>
                )}

                {/* Colleges Grid */}
                {!isLoading && colleges.length > 0 && (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {colleges.map((college) => (
                            <div key={college.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <CollegeCard college={college} className="p-6" />
                            </div>
                        ))}
                    </div>
                )}

                {/* Empty State */}
                {!isLoading && colleges.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-600">No colleges found</p>
                    </div>
                )}
            </div>
        </div>
    );
}