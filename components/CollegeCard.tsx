import Image from "next/image";

export default function CollegeCard(college: CollegeProps) {
    return (
        <div className="px-10 py-6 border rounded-md border-gray-500 ">
            <Image src={college.logo!} width={50} height={20} alt="College logo"></Image>
            <h1 className="font-semibold text-xl">{college.name}</h1>
        </div>
    )
}


export interface CollegeProps {
    name: string;
    description: string
    slug: string;
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