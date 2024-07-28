import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import sanitizeHtml from 'sanitize-html';

export async function POST(request) {
  const username = process.env.NEXT_PRIVATE_EMAIL_USERNAME;
  const password = process.env.NEXT_PRIVATE_EMAIL_PASSWORD;
  const myEmail = process.env.NEXT_PRIVATE_PERSONAL_EMAIL;

  if (!username || !password || !myEmail) {
    return NextResponse.json({ message: "Missing environment variables" }, { status: 500 });
  }

  try {
    const { name, email, message } = await request.json();

    // Server-side validation
    if (!name || !email || !message) {
      return NextResponse.json({ message: "All fields are required." }, { status: 400 });
    }

    if (!validateEmail(email)) {
      return NextResponse.json({ message: "Invalid email format." }, { status: 400 });
    }

    if (message.length < 10) {
      return NextResponse.json({ message: "Message must be at least 10 characters long." }, { status: 400 });
    }

    // Sanitize inputs
    const sanitizedName = sanitizeHtml(name);
    const sanitizedEmail = sanitizeHtml(email);
    const sanitizedMessage = sanitizeHtml(message);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: username,
        pass: password,
      },
    });

    const userMailOptions = {
      from: username,
      to: myEmail,
      replyTo: sanitizedEmail,
      subject: `Lead From ${sanitizedEmail}`,
      html: `
        <p>Name: ${sanitizedName}</p>
        <p>Email: ${sanitizedEmail}</p>
        <p>Message: ${sanitizedMessage}</p>
      `,
    };

    const thankYouMailOptions = {
      from: username,
      to: sanitizedEmail,
      subject: `Thank you for contacting us, ${sanitizedName}!`,
      html: `
        <p>Dear ${sanitizedName},</p>
        <p>Thank you for reaching out to us! We have received your message and will get back to you shortly.</p>
        <p>Your message:</p>
        <p>${sanitizedMessage}</p>
        <p>Best regards,<br>Bidvid</p>
      `,
    };

    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(thankYouMailOptions);

    return NextResponse.json({ message: "Success: emails were sent" });

  } catch (error) {
    return NextResponse.json({ message: "Could not send messages", error: error.message }, { status: 500 });
  }
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
