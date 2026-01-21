import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
        const { email, source } = await request.json()

        // Validate
        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { error: 'Please enter a valid email address' },
                { status: 400 }
            )
        }

        // Check if email already exists
        const existing = await prisma.waitlistEntry.findUnique({
            where: { email: email.toLowerCase() }
        })

        if (existing) {
            return NextResponse.json(
                { error: 'This email is already on the waitlist' },
                { status: 409 }
            )
        }

        // Make new entry
        const entry = await prisma.waitlistEntry.create({
            data: {
                email: email.toLowerCase(),
                source: source || 'unknown'
            }
        })

        return NextResponse.json({
            success: true,
            message: 'Successfully added to waitlist!',
            entry
        })

    } catch (err) {
        console.error('Waitlist error:', err)
        return NextResponse.json(
            { error: 'Something went wrong. Please try again.' },
            { status: 500 }
        )
    }
}