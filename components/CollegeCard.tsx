export default function CollegeCard(college: CollegeProps) {

}


interface CollegeProps {
    name: string;
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
}