import React from "react";
import { Field, Form, Formik } from "formik";
import Link from "next/link";

const Footer = () => {
  const onSubscribe = () => {};

  return (
    <div className="flex flex-col items-center justify-around pt-8 pb-8 mt-16 bg-[#58CC02]">
      <div className="mx-auto w-full grid grid-cols-2 place-items-center gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
        <div>
          <h3 className="text-2xl font-bold mb-1 text-white tracking-wider">
            About Us
          </h3>
          <ul className="mt-3 font-semibold text-white tracking-wider">
            <li>Who We Are</li>
            <li>Mission</li>
            <li>Contact us</li>
            <li>Approach</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-1 text-white tracking-wider w-full">
          Help and support
          </h3>
          <ul className="mt-3 font-semibold text-white tracking-wider">
            <li>Forum</li>
            <li>Luuqad FAQs</li>
            <li>Join Our Discord</li>
          </ul>
        </div>

        <div>
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
      </div>

      <hr className="bg-primary-white-3 w-full mb-10" />

      <div>
 
        <div className="flex flex-row items-center gap-5 mt-4 text-white">
          <span className="text-white tracking-wider font-semibold text-md">
          © 2023 Copyright Luuqad
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
