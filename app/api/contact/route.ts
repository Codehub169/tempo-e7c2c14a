import { NextResponse } from 'next/server';

// It's good practice to define an interface for the expected request body
interface ContactRequestBody {
  name?: unknown;
  email?: unknown;
  message?: unknown;
}

export async function POST(request: Request) {
  try {
    const bodyUntyped = await request.json();

    // Validate that body is a non-null JSON object
    if (typeof bodyUntyped !== 'object' || bodyUntyped === null || Array.isArray(bodyUntyped)) {
      // This handles cases like `null`, `true`, `[]`, `"string"`, `123` being sent as JSON payload
      return NextResponse.json({ message: 'Invalid request payload: body must be a JSON object with name, email, and message fields.' }, { status: 400 });
    }

    // Now we can safely assume bodyUntyped is an object, so cast it
    const body = bodyUntyped as ContactRequestBody;
    const { name, email, message } = body;

    // Validate field types and ensure they are non-empty strings
    // Using .trim() to ensure strings with only whitespace are considered empty
    if (typeof name !== 'string' || name.trim() === '' ||
        typeof email !== 'string' || email.trim() === '' ||
        typeof message !== 'string' || message.trim() === '') {
      return NextResponse.json({ 
        message: 'Missing or empty required fields. Name, email, and message must be provided as non-empty strings.' 
      }, { status: 400 });
    }
    
    // Trim inputs for consistent processing
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    // Email format validation (using the original regex as it's acceptable for this context)
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json({ message: 'Invalid email format.' }, { status: 400 });
    }

    // Optional: Add length constraints for robustness, e.g.
    // if (trimmedName.length > 100 || trimmedEmail.length > 100 || trimmedMessage.length > 1000) {
    //   return NextResponse.json({ message: 'Input fields too long.' }, { status: 400 });
    // }

    // Simulate sending email for MVP - In a real app, integrate an email service here
    console.log('New contact form submission:');
    console.log('Name:', trimmedName);
    console.log('Email:', trimmedEmail);
    console.log('Message:', trimmedMessage);

    // Security Best Practices for when actual email sending is implemented:
    // 1. Sanitize `trimmedName` and `trimmedMessage` if they are used directly in HTML emails (to prevent XSS).
    //    For plain text emails, ensure proper encoding.
    // 2. Do not expose raw/detailed error messages from email sending libraries to the client.
    //    Map them to generic error messages.
    // 3. Implement rate limiting on this API endpoint to prevent abuse (e.g., email spamming).
    // 4. Consider more comprehensive validation libraries (e.g., Zod, Joi) for complex applications.

    return NextResponse.json({ message: 'Message received successfully! We will get back to you soon.' }, { status: 200 });

  } catch (error) {
    console.error('Contact form submission error:', error);
    if (error instanceof SyntaxError) { // Handle JSON parsing errors from request.json()
        return NextResponse.json({ message: 'Invalid JSON format in request body.' }, { status: 400 });
    }
    // For any other errors (including TypeErrors if somehow body was not an object despite checks, though unlikely now)
    return NextResponse.json({ message: 'An internal server error occurred. Please try again later.' }, { status: 500 });
  }
}
