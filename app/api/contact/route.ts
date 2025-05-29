import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Missing required fields (name, email, message).' }, { status: 400 });
    }

    // Email format validation (simple regex)
    const emailRegex = /^[^	
 ]+@[^	
 ]+\.[^	
 ]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ message: 'Invalid email format.' }, { status: 400 });
    }

    // Simulate sending email for MVP - In a real app, integrate an email service here (e.g., SendGrid, Nodemailer)
    console.log('New contact form submission:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // You would typically send an email here
    // For example, using a service like Nodemailer or an API like SendGrid

    return NextResponse.json({ message: 'Message received successfully! We will get back to you soon.' }, { status: 200 });

  } catch (error) {
    console.error('Contact form submission error:', error);
    if (error instanceof SyntaxError) { // Handle JSON parsing errors
        return NextResponse.json({ message: 'Invalid request format.' }, { status: 400 });
    }
    return NextResponse.json({ message: 'An internal server error occurred. Please try again later.' }, { status: 500 });
  }
}
