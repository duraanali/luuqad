import React from "react"
import { Hr } from "@react-email/hr"
import { Html } from "@react-email/html"
import { Text } from "@react-email/text"

interface EmailVerificationTemplateProps {
  name: string
  verificationLink: string
}

export function EmailVerificationTemplate(
  props: EmailVerificationTemplateProps,
) {
  const { name, verificationLink } = props

  const containerStyle = {
    width: "580px",
    margin: "30px auto",
    backgroundColor: "#ffffff",
    padding: "20px",
  }

  return (
    <Html lang='en'>
      <div style={containerStyle}>
        <Text
          style={{ color: "#58cc02", fontSize: "24px", fontWeight: "bold" }}>
          Verify Your Email
        </Text>
        <Hr />
        <Text>Hello {name},</Text>
        <Text>
          Thank you for signing up with Luuqad.com! Please verify your email
          address by clicking the button below. This will help us ensure that
          your email is valid and that you can receive important notifications
          from us.
        </Text>
        <br />
        <a style={button} href={verificationLink}>
          Reset password{" "}
        </a>
        <br />
        <br />
        <Text>
          If you did not create an account with Luuqad.com, please ignore this
          email.
        </Text>
        <Hr />
        <Text className='bg-gray-100 p-4'>Thank you, The Luuqad.com Team</Text>
      </div>
    </Html>
  )
}

export default EmailVerificationTemplate

const button = {
  backgroundColor: "#656ee8",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
}
