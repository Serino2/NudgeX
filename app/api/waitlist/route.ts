import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";

function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
    try {
        const body = await request.json().catch(() => null);

        const rawEmail = typeof body?.email === "string" ? body.email.trim() : "";
        const rawSource = typeof body?.source === "string" ? body.source.trim() : "unknown";

        // Length limits
        if (rawEmail.length < 6 || rawEmail.length > 254 || !isValidEmail(rawEmail)) {
            return NextResponse.json(
                { error: "Please enter a valid email address" },
                { status: 400 }
            );
        }

        const email = rawEmail.toLowerCase();

        // Source limiting
        const source = rawSource.length > 50 ? "unknown" : rawSource;

        // Direct create + catch unique violation (race-safe)
        await prisma.waitlistEntry.create({
            data: { email, source },
        });

        return NextResponse.json({
            success: true,
            message: "Successfully added to waitlist!",
        });

    } catch (err) {
        // Unique constraint hit => already on list
        if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2002") {
            return NextResponse.json(
                { error: "This email is already on the waitlist" },
                { status: 409 }
            );
        }

        console.error("Waitlist error:", err);
        return NextResponse.json(
            { error: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}