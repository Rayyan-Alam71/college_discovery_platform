import CollegePageView from "@/components/CollegePageView"

export default async function CollegePage({ params }: {
    params: {
        collegeID: string
    }
}) {
    const { collegeID } = await params

    return (
        <CollegePageView data={collegeID} />
    )
}