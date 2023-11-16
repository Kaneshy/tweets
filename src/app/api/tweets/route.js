import {prisma} from '@/libs/prisma'
import { NextResponse } from "next/server"

export async function GET() {
    const tweet = await prisma.tweet.findMany()
    return NextResponse.json(tweet)
}

export async function POST(request) {
    const {username, email, tweet} = await request.json()
    const newTask = await prisma.tweet.create({
        data: {
            username,
            email,
            tweet
        }
    })
    return NextResponse.json(newTask)
}