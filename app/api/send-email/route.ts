import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

const config = {
  service: "gmail",
  auth: {
    user: process.env.AUTOMATED_SENDER_EMAIL,
    pass: process.env.AUTOMATED_SENDER_PASSWORD,
  },
}

export async function POST(req: Request) {
  const { name, email, message: contactMessage } = await req.json()
  const allowedOrigins = ['https://ahmadbshaik.com', 'https://ahmadbshaik.vercel.app'];
  const origin = req.headers.get('Origin') || ''; // Get the request's Origin header
  if (allowedOrigins.includes(origin)) {
    try {
      const transporter = nodemailer.createTransport(config)

      let mailOptions = {
        from: process.env.AUTOMATED_SENDER_EMAIL,
        to: process.env.RECIEVER_EMAIL,
        subject: process.env.EMAIL_SUBJECT,
        html: `<div>
        <div>From<div>
        <p>${name}</p>
        <p>${email}</p>
        <br/>
        <p>${contactMessage}</p>
      </div>`,
      }

      await transporter.sendMail(mailOptions);

      // Return success response
      const res = NextResponse.json({ message: 'Email sent successfully' });
      res.headers.set('Access-Control-Allow-Origin', origin);  // Allow the requesting domain
      res.headers.set('Access-Control-Allow-Methods', 'POST');  // Allow POST requests
      res.headers.set('Access-Control-Allow-Headers', 'Content-Type');  // Allow Content-Type header
      return res;

    } catch (e) {
      return NextResponse.json({ error: e })
    }
  } else {
    return NextResponse.json({ message: 'Forbidden: Origin not allowed' }, { status: 403 });
  }
}
