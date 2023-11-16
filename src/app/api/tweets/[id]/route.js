import {prisma} from '@/libs/prisma'
import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    const tweet = await prisma.tweet.findUnique({
        where: {
            id: Number(params.id)
        }
    })
    return NextResponse.json(tweet)
}

export async function PUT(request, {params}) {
    const data = await request.json()
    console.log('route.js', data)
    const updateTweet = await prisma.tweet.update({
        where: {
            id: Number(params.id)
        },
        data: data
    })
    return NextResponse.json(updateTweet)
}

export async function DELETE(request, {params}) {
    try {
        const tweetDelete = await prisma.tweet.delete({
            where: {
                id: Number(params.id)
            }
        })
    
        return NextResponse.json(tweetDelete)
        
    } catch (error) {
        return NextResponse.json(error.messege)
    }
}