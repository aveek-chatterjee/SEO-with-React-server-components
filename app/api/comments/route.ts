import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, comment, postSlug } = await request.json();

    // Validate input
    if (!name || !email || !comment || !postSlug) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // In a real application, you would save this to a database
    console.log("Comment received:", { name, email, comment, postSlug });

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      { message: "Comment submitted successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing comment:", error);
    return NextResponse.json(
      { error: "Failed to process comment" },
      { status: 500 }
    );
  }
}
