import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import sanitizeHtml from 'sanitize-html';

// Helper function to set CORS headers
function setCORSHeaders(response) {
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  response.headers.set('Access-Control-Expose-Headers', 'WWW-Authenticate');
  return response;
}

export async function OPTIONS() {
  const response = new Response(null, {
    status: 204, // No Content
  });
  return setCORSHeaders(response);
}

export async function POST(request) {
  const username = process.env.NEXT_PRIVATE_EMAIL_USERNAME;
  const password = process.env.NEXT_PRIVATE_EMAIL_PASSWORD;
  const myEmail = process.env.NEXT_PRIVATE_PERSONAL_EMAIL;

  if (!username || !password || !myEmail) {
    return NextResponse.json(
      { message: 'Missing environment variables' },
      { status: 500 }
    );
  }

  try {
    const { name, number, message } = await request.json();

    if (!name || !number || !message) {
      return NextResponse.json(
        { message: 'All fields are required.' },
        { status: 400 }
      );
    }

    const sanitizedName = sanitizeHtml(name);
    const sanitizedNumber = sanitizeHtml(number);
    const sanitizedMessage = sanitizeHtml(message);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host:'smtp.gmail.com',
      tls: {
        ciphers: "SSLv3",
    },
    port: 587,
    secure: true,
      auth: {
        user: username,
        pass: password,
      },
    });

    const userMailOptions = {
      from: username,
      to: myEmail,
      subject: `Lead From ${sanitizedName}`,
      html: `
        <p>Name: ${sanitizedName}</p>
        <p>Number: ${sanitizedNumber}</p>
        <p>Message: ${sanitizedMessage}</p>
      `,
    };

    // Wrapping the sendMail function in a Promise
    await new Promise((resolve, reject) => {
      transporter.sendMail(userMailOptions, (err, info) => {
        if (err) {
          console.error('Error sending email:', err);
          reject(err);
        } else {
          console.log('Email sent:', info.response);
          resolve(info);
        }
      });
    });

    const response = NextResponse.json({ message: 'Success: email was sent' });

    return setCORSHeaders(response);

  } catch (error) {
    const errorMessage = `Error: ${error.message}`;
    console.log(errorMessage);
    const response = NextResponse.json(
      { message: 'Could not send message', error: error.message },
      { status: 500 }
    );

    return setCORSHeaders(response);
  }
}
