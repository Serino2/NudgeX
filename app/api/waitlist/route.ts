import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
        const { email, source } = await request.json()

        // Validatie
        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { error: 'Please enter a valid email address' },
                { status: 400 }
            )
        }

        // Check of email al bestaat
        const existing = await prisma.waitlistEntry.findUnique({
            where: { email: email.toLowerCase() }
        })

        if (existing) {
            return NextResponse.json(
                { error: 'This email is already on the waitlist' },
                { status: 409 }
            )
        }

        // Maak nieuwe entry
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

// GET route om alle waitlist entries op te halen (optioneel, voor admin)
export async function GET() {
    try {
        const entries = await prisma.waitlistEntry.findMany({
            orderBy: { createdAt: 'desc' }
        })

        const bySource: Record<string, number> = {}

        for (const entry of entries) {
            const source = entry.source || 'unknown'
            if (bySource[source]) {
                bySource[source]++
            } else {
                bySource[source] = 1
            }
        }

        const stats = {
            total: entries.length,
            bySource
        }

        return NextResponse.json({ entries, stats })
    } catch (err) {
        console.error('Failed to fetch waitlist:', err)
        return NextResponse.json(
            { error: 'Failed to fetch waitlist' },
            { status: 500 }
        )
    }
}