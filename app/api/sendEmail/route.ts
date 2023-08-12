import { NextRequest, NextResponse } from "next/server";
import { EmailProvider, Email } from "../../../lib/email/EmailProvider";
import SendgridEmailProvider from "../../../lib/email/SendGridEmailProvider";
import NodemailerEmailProvider from "../../../lib/email/NodemailerEmailProvider";
import ForgetPasswordTemplate from "@/components/emails/ForgetPassword";
import { render } from '@react-email/render';

const DEFAULT_EMAIL_PROVIDER = process.env.DEFAULT_EMAIL_PROVIDER || "sendgrid";
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || "";
const NODEMAILER_CONFIG = {
  host: process.env.NODEMAILER_HOST || "smtp.sendgrid.net",
  port: parseInt(process.env.NODEMAILER_PORT || "587"),
  secure: process.env.NODEMAILER_SECURE === "true",
  auth: {
    user: process.env.NODEMAILER_USER || "apikey",
    pass: process.env.NODEMAILER_PASSWORD || "",
  },
};

// Map of available email providers
const emailProviders: { [key: string]: EmailProvider } = {
  sendgrid: new SendgridEmailProvider(SENDGRID_API_KEY),
  nodemailer: new NodemailerEmailProvider(NODEMAILER_CONFIG),
};

export async function POST(req: NextRequest) {
  try {
    const { to, from, subject, body }: Email = await req.json();

    const emailProvider = emailProviders[DEFAULT_EMAIL_PROVIDER];

    if (!emailProvider) {
      return NextResponse.json(
        {
          error: "Invalid email provider",
        },
        { status: 400 }
      );
    }

    const email: Email = {
      to,
      from,
      subject,
      body: render(ForgetPasswordTemplate({name: 'John Doe', resetLink: 'https://example.com'}))
    };

    await emailProvider.sendEmail(email);

    return NextResponse.json(
      {
        message: "Email sent successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        error: "Failed to send email",
      },
      { status: 500 }
    );
  }
}
