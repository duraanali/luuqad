"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Signup = () => {
  const [passwordView, setPasswordView] = useState(false);
  return (
    <div className="flex  justify-center min-h-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-sm">
        <div>
          <h1 className="text-3xl font-extrabold text-center">
            Create your profile
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 mt-8">
          <input
            type="text"
            autoComplete="none"
            required
            className="relative items-center justify-center block px-3 px-4 py-2 py-3 bg-gray-100 border appearance-none rounded-xl w-96 border-black-299 focus:outline-none ring-2 ring-gray-300"
            placeholder="Age"
          />
          <div className="relative mt-2">
            <input
              type="text"
              autoComplete="none"
              required
              className="relative items-center justify-center block px-3 px-4 py-3 bg-gray-100 border appearance-none rounded-xl w-96 border-black-299 focus:outline-none ring-2 ring-gray-300"
              placeholder="name"
            />
            <div className="mt-5"></div>
            <input
              type="email"
              autoComplete="none"
              required
              className="relative items-center justify-center block px-3 px-4 py-3 bg-gray-100 border appearance-none rounded-xl w-96 border-black-299 focus:outline-none ring-2 ring-gray-300"
              placeholder="Email"
            />
            <div className="mt-5 relative">
              <input
                type={passwordView ? "text" : "password"}
                autoComplete="none"
                required
                className="relative items-center justify-center block px-3 px-4 py-3 bg-gray-100 border appearance-none rounded-xl w-96 border-black-299 focus:outline-none ring-2 ring-gray-300"
                placeholder="password"
              />
              <div className="absolute right-5 top-3">
                {passwordView ? (
                  <Image
                    className="cursor-pointer"
                    src="./svg/viewUp.svg"
                    alt=""
                    width={25}
                    height={25}
                    onClick={() => setPasswordView(false)}
                  />
                ) : (
                  <Image
                    className="cursor-pointer"
                    src="./svg/view.svg"
                    alt=""
                    width={25}
                    height={25}
                    onClick={() => setPasswordView(true)}
                  />
                )}
              </div>
            </div>
            {/* forget password link */}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full mt-4 space-y-4 text-center">
          <Link
            href="/learn"
            className="w-96 h-12 px-4 pt-2 rounded-xl text-lg tracking-widest bg-blue-400 text-white font-bold hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 shadow-[0px_4px_0px_0px_#4299E1]"
          >
            Create account
          </Link>
        </div>
        {/* or line */}

        <div className="flex items-center w-full gap-2 mt-5">
          <hr className="flex-1 border-t-2 border-t-gray-300" />
          <p className="font-bold text-center text-gray-400">OR</p>
          <hr className="flex-1 border-t-2 border-t-gray-300" />
        </div>

        {/* OAuth Login */}
        <div className="flex items-center gap-5 mt-5">
          <button
            className="flex gap-2 items-center w-48 h-12  px-5 py-2 rounded-xl text-lg bg-white shadow-[0px_2px_2px_2px_#d1d5db]"
            type="button"
          >
            <div className="flex items-center px-5 ">
              <Image
                className=""
                src="https://d35aaqx5ub95lt.cloudfront.net/images/ded9ca9461387f30221b67f627227388.svg"
                alt=""
                width={10}
                height={10}
              />
              <span className="pl-3 font-bold text-center text-blue-800 ">
                FACEBOOK
              </span>
            </div>
          </button>
          <button
            className="flex gap-2 items-center w-48 h-12 px-5 py-2 rounded-xl text-lg bg-white shadow-[0px_2px_2px_2px_#d1d5db]"
            type="button"
          >
            <div className="flex items-center px-5">
              <Image
                className=""
                src="https://d35aaqx5ub95lt.cloudfront.net/images/7da752378a3b1b8bbcd94a4d4f10561e.svg"
                alt=""
                width={20}
                height={10}
              />
              <span className="pl-3 font-bold text-center text-blue-800">
                GOOGLE
              </span>
            </div>
          </button>
        </div>
        <div className="mt-6 text-center text-gray-400">
          <p>
            By signing in to Duolingo, you agree to our{" "}
            <Link href="/terms" className="font-bold">
              Terms
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="font-bold">
              Privacy Policy
            </Link>
          </p>
        </div>
        <div className="mt-5 text-center text-gray-400">
          <p>
            his site is protected by reCAPTCHA Enterprise and the Google{" "}
            <Link href="/privacy" className="font-bold">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="Terms" className="font-bold">
              {" "}
              Terms of Service apply.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
