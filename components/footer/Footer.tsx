"use client"

import { Field, Form, Formik } from "formik"
import Link from "next/link"

const Footer = () => {
  const onSubscribe = () => {}

  return (
    <div className="flex flex-col items-center justify-around pt-16 pb-8 mb-0 bg-[#58CC02]">
      <div className="flex md:flex-row items-start justify-around mb-16 space-x-10 w-full flex-wrap gap-16">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-3xl font-bold mb-3 text-white tracking-wider">
            Learn a language with Luuqad
          </h3>

          <p className="text-white tracking-wider text-center w-full max-w-sm">
            The free, fun, and effective way to learn a language!
          </p>

          <Link
            href="/login"
            className="w-1/2 h-12 px-4 py-2 text-blue-400 text-base tracking-widest rounded-xl bg-white font-bold border-2 border-[#e2e8f0] hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 shadow-[0px_4px_0px_0px_#e2e8f0] text-center mt-3">
            Get Started
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h3 className="text-2xl font-bold mb-1 text-white tracking-wider">
            About Us
          </h3>

          <ul className="mt-3 font-semibold text-white tracking-wider">
            <li>Learn</li>
            <li>Letters</li>
            <li>Practices</li>
            <li>Profile</li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h3 className="text-2xl font-bold mb-1 text-white tracking-wider w-full">
            Products
          </h3>

          <ul className="mt-3 font-semibold text-white tracking-wider">
            <li>Luuqad</li>
            <li>Luuqad Game</li>
            <li>Luuqad for Schools</li>
            <li>Podcast</li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h3 className="text-2xl font-bold mb-1 text-white tracking-wider w-full">
            Social
          </h3>

          <ul className="mt-3 font-semibold text-white tracking-wider">
            <li>Blogs</li>
            <li>
              <Link href="/">Facebook</Link>
            </li>
            <li>
              <Link href="/">Instagram</Link>
            </li>
            <li>
              <Link href="/">Twitter</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center">
          <Formik initialValues={{}} onSubmit={onSubscribe}>
            <Form>
              <Field
                type="email"
                name="email"
                autoComplete="none"
                required
                className="relative items-center justify-center block px-4 py-3 bg-gray-100 border appearance-none rounded-xl w-96 border-black-299 focus:outline-none ring-2 ring-gray-300 text-gray-500"
                placeholder="Email Address"
              />

              <div className="flex flex-col items-start justify-center mt-4 space-y-4">
                <button
                  type="submit"
                  className="w-40 h-10 px-4 rounded-xl text-lg tracking-widest bg-blue-400 text-white font-bold hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 shadow-[0px_4px_0px_0px_#4299E1]">
                  Subscribe
                </button>
              </div>
            </Form>
          </Formik>

          <div></div>
        </div>
      </div>

      <hr className="bg-primary-white-3 w-full mb-10" />

      <div>
        <h6 className="text-white text-lg font-bold tracking-wider text-center">
          Site Languages:
        </h6>
        <div className="flex flex-row items-center gap-5 mt-4 text-white">
          <span className="text-white tracking-wider font-semibold text-md">
            Somali
          </span>
          &#8226;
          <span className="text-white tracking-wider font-semibold text-md">
            العربية
          </span>
          &#8226;
          <span className="text-white tracking-wider font-semibold text-md">
            English
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
