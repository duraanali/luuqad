// EmailProvider interface
export interface EmailProvider {
  sendEmail(email: Email): Promise<void>
}

// Email type
export interface Email {
  to: string
  from: string
  subject: string
  body: string
}
