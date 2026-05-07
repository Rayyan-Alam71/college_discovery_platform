import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


// TODO : implement pagination here, to prevent rendering large dataset to client 
// and improve the performance of the application
export async function GET(req: NextRequest) {
    try {
        const colleges = await prisma.college.findMany({
            orderBy: {
                ranking: 'desc'
            }
        })

        if (colleges) {
            console.log(colleges)
            return NextResponse.json({
                success: true,
                data: colleges,
                message: 'colleges fetched successfully',
            }, {
                status: 200
            })
        } else {
            return NextResponse.json({
                success: false,
                message: 'No colleges found',
            }, {
                status: 404
            })
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            success: false,
            message: 'Something went wrong',
        }, {
            status: 500
        })
    }
}