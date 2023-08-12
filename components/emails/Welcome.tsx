import React from "react"
import { Hr } from "@react-email/hr"
import { Html } from "@react-email/html"
import { Text } from "@react-email/text"

interface WelcomeUserTemplateProps {
  name: string
}

export function WelcomeUserTemplate(props: WelcomeUserTemplateProps) {
  const { name } = props

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
          Welcome to Luuqad Learning
        </Text>
        <Hr />
        <Text>Hello {name},</Text>
        <Text>
          Welcome to Luuqad Learning! We are excited to have you join our Luuqad
          learning community. Whether you&apos;re a beginner or looking to
          improve your skills, we&apos;re here to support your Luuqad journey.
        </Text>
        <br />
        <Text>
          Our interactive lessons, exercises, and quizzes will help you practice
          and master Luuqad. You&apos;ll have the opportunity to learn new
          vocabulary, grammar, and cultural insights along the way.
        </Text>
        <Hr />
        <Text>
          If you have any questions or need assistance, feel free to reach out
          to our dedicated support team. We&apos;re here to help you make the
          most of your Luuqad learning experience.
        </Text>
        <Hr />
        <Text className='bg-gray-100 p-4'>
          Happy learning! The Luuqad Learning Team
        </Text>
      </div>
    </Html>
  )
}

export default WelcomeUserTemplate
