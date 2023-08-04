import sgMail from '@sendgrid/mail';
import { EmailProvider, Email } from './EmailProvider';


export default class SendGridEmailProvider implements EmailProvider {
  constructor(private apiKey: string) {
    sgMail.setApiKey(apiKey);
  }

  async sendEmail(email: Email): Promise<void> {
    const msg = {
      from: email.from,
      to: email.to,
      subject: email.subject,
      text: email.body,
    };

    try {
      await sgMail.send(msg);
    } catch (error: any) {
      throw new Error('Failed to send email using SendGrid: ' + error.message);
    }
  }
}