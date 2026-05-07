import Image from "next/image";
import Link from "next/link";

export default function CollegeCard({ college, className }: { college: any, className?: string }) {
    return (
        <div className={`group relative overflow-hidden bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ${className || ""}`}>
            {/* Image Section */}
            <div className="h-48 w-full bg-gradient-to-r from-blue-50 to-blue-100">
                <img
                    src={college.logo!}
                    alt={`${college.name} campus`}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{college.name}</h3>
                <p className="text-gray-600 mb-2">{college.address}, {college.state}</p>
                <div className="flex items-center justify-between mb-4">
                    <span className="flex items-center space-x-2 text-sm text-gray-600">
                        <svg className="h-4 w-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002-2v10a2 2 0 002 2z" />
                        </svg>
                        <span>#{college.NIRFRanking}</span>
                    </span>
                    <Link href={`/colleges/${college.id}`} className="text-sm font-medium text-blue-600 hover:text-blue-700">
                        View Details
                        <svg className="ml-2 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export interface CollegeProps {
    name: string;
    description: string
    id: string;
    logo: string | null;
    address: string | null;
    state: string;
    fees: number;
    ranking: number;
    rating: number;
    area: number;
    establishYear: number;
    totalFaculty: number;
    totalStudents: number;
    NIRFRanking: number;
    IndiaTodayRanking: number;
    courseName: string;
    courseSlug: string;
    courseType: string;
    reviews: {
        id: string;
        collegeId: string;
        reviewText: string;
        date: Date;
        rating: number;
        name: string | null;
    }[]
}