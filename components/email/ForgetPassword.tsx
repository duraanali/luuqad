import React from 'react';
import { Hr } from '@react-email/hr';
import { Html } from '@react-email/html';
import { Text } from '@react-email/text';

interface ForgetPasswordTemplateProps {
  name: string;
  resetLink: string;
}

export function ForgetPasswordTemplate(props: ForgetPasswordTemplateProps) {
  const { name, resetLink } = props;

  const containerStyle = {
    width: '580px',
    margin: '30px auto',
    backgroundColor: '#ffffff',
    padding: '20px'
  };


  return (
    <Html lang="en">
      <div style={containerStyle}>
        <Text style={{ color: '#58cc02', fontSize: '24px', fontWeight: 'bold' }}>Reset Your Password</Text>
        <Hr />
        <Text>Hello {name},</Text>
        <Text>
          Thanks for helping us keep your account secure!
          You have requested to reset your password for your Luuqad.com account.
          Please click the button below to proceed with the password reset process.
        </Text>
        <br />
        <a style={button} href={resetLink} >Reset password </a>
        <br />
        <br />
        <Text>
          If you did not initiate this password reset, please ignore this email.
        </Text>
        <Hr />
        <Text className='bg-gray-100 p-4' >Thank you, The Luuqad.com Team</Text>
       
      </div>
    </Html>
  );
}

export default ForgetPasswordTemplate;


const button = {
  backgroundColor: '#656ee8',
  borderRadius: '5px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  width: '100%',
};

