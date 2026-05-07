import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        console.log('got here')
        const searchParams = req.nextUrl.searchParams
        const collegeId = searchParams.get("id")
        if (!collegeId) {
            return NextResponse.json({
                message: "No data found",
                success: false,
                data: null
            }, { status: 400 })
        }

        const college = await prisma.college.findFirst({
            where: {
                id: collegeId
            },
            include: {
                reviews: {
                    orderBy: {
                        date: 'desc'
                    }
                }
            }
        })
        console.log(college)
        if (!college) {
            return NextResponse.json({
                message: "No data found",
                success: false,
                data: null
            }, { status: 400 })
        }
        console.log(college)
        return NextResponse.json({
            message: "Data fetched successfully",
            success: true,
            data: college
        }, { status: 200 })

    } catch (error) {
        console.log("Error fetching college data")
        return NextResponse.json({
            message: "Error fetching college data",
            success: false,
            data: null
        }, { status: 500 })
    }
}

