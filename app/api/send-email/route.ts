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
  const allowedOrigins = ['https://ahmadbshaik.com', 'https://www.ahmadbshaik.com', 'https://ahmadbshaik.vercel.app', 'https://www.ahmadbshaik.vercel.app'];

  if (process.env.NODE_ENV === "development") {
    allowedOrigins.push('http://localhost:3000')
  }

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

      await transporter.sendMail(mailOptions)
      return NextResponse.json({ message: "Email sent successfully!" })
    } catch (e) {
      return NextResponse.json({ error: e })
    }
  } else {
    return NextResponse.json({ message: 'Forbidden: Origin not allowed' }, { status: 403 });
  }
}
