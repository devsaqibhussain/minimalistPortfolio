import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const myEmail = process.env.MY_EMAIL;
const myPass = process.env.MY_PASSWORD;

export async function POST(request) {
  const { email, username, body, subject } = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: myEmail,
      pass: myPass,
    },
  });
  const mailOptions = {
    from: myEmail,
    to: myEmail,
    subject: `Message from ${username}: ${subject}`,
    text: `Email from:${username}(${email})
    Message: 
    ${body}`,
  };
  const sendMailPromise = () =>
    new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });
  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent." });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
