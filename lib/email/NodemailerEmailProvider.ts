import nodemailer, { Transporter } from "nodemailer"
import { EmailProvider, Email } from "./EmailProvider"

interface NodemailerConfig {
  host: string
  port: number
  secure: boolean
  auth: {
    user: string
    pass: string
  }
}

export default class NodemailerEmailProvider implements EmailProvider {
  private transporter: Transporter

  constructor(private config: NodemailerConfig) {
    this.transporter = nodemailer.createTransport(config)
  }

  async sendEmail(email: Email): Promise<void> {
    const mailOptions = {
      from: email.from,
      to: email.to,
      subject: email.subject,
      html: email.body,
    }

    try {
      await this.transporter.sendMail(mailOptions)
    } catch (error: any) {
      throw new Error("Failed to send email using Nodemailer: " + error.message)
    }
  }
}
