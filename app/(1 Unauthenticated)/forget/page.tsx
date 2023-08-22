"use client"
import Alert from "@/components/frequentlyused/Alert";
import Formchallenge from "@/components/security/Formchallenge";
import Link from "next/link"
import React, { useState } from "react"
// import baseUrl from "@/utils/baseUrl"
export default function Forget() {
  let [captchasolved, setCaptchasolved] = useState(false);
  let [email, setemail] = useState("");
  let [seterror, setseterror] = useState({
    error: false,
    message: "",
    type: "",
  });

  const send = () => {
    // check here if the captcha is solved , always validate the captcha before sending the email

    //example
    if (!captchasolved) {
      setseterror({
        error: true,
        message: "Please solve the captcha",
        type: "error",
      });
      return;
    }
    else{
      //@ts-ignore

      const is_email_valid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i); // validators should be separte from the component 
      if (!is_email_valid) {
        setseterror({
          error: true,
          message: "Please enter a valid email",
          type: "error",
        });
        return;
      }
      else{
        alert("this feature is not available yet luuqad.com is still under development")

      }
      
    }
   
    
    // const res = fetch(`${baseUrl}/api/sendEmail`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     to: "duraan522@gmail.com",
    //     from: "Luuqad <info@alifcloud.com>",
    //     subject: "Forget Password",
    //   }),
    // })
  }

  return (
    <div className='min-h-full flex items-center justify-center  px-4 sm:px-6 lg:px-8'>
      <div className='max-w-sm'>
        <div>
          <h1 className='mt-20 text-center text-3xl font-extrabold'>
            Forget password
          </h1> 
          <p className='text-center mt-3 font-medium text-xl'>
            We Will send you instructions on how to reset your password by email
          </p>
        </div>
        <div className='items-center flex flex-col justify-center gap-3 mt-8'>
          
          <input
            type='email'
            onChange={(e) => {
              setemail(e.target.value)
            }}
            autoComplete='none'
            required
            className='px-4 justify-center items-center appearance-none rounded-xl relative block w-96 py-2 border border-black-299 bg-gray-100 focus:outline-none ring-2 ring-gray-300'
            placeholder='Email Or Username'
          />
          <Formchallenge  setCaptchasolved={setCaptchasolved} />

        </div>
       

        <div className='w-full flex flex-col items-center text-center justify-center mt-4 space-y-4'>
          <Link
            href='#'
            onClick={() => send()}
            className='w-96 h-12 px-4 pt-2 rounded-xl text-lg tracking-widest bg-blue-400 text-white font-bold hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 shadow-[0px_4px_0px_0px_#4299E1]'>
            SUBMIT
          </Link>
          {
            seterror.error ?<Alert type={seterror.type} message={seterror.message} />:<Alert type={seterror.type} message={seterror.message} />     
          }
        </div>
      </div>
    </div>
  )
}
