import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

const config = {
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
}

export async function POST(req: Request) {
  const { name, email, message: contactMessage } = await req.json()

  try {
    const transporter = nodemailer.createTransport(config)

    let message = {
      from: process.env.EMAIL_ADDRESS,
      to: process.env.MY_EMAIL,
      subject: process.env.EMAIL_SUBJECT,
      html: `<div>
      <div>From<div>
      <p>${name}</p>
      <p>${email}</p>
      <br/>
      <p>${contactMessage}</p>
    </div>`,
    }

    const transporterResponse = await transporter.sendMail(message)
    console.log(transporterResponse)

    return NextResponse.json({ message: "email sent!" })
  } catch (e) {
    return NextResponse.json({ error: e })
  }
}
