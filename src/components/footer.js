import React from "react";
import Image from "next/image";
import logo from '../../public/images/logo.png'

export default function Footer() {


  function OneRow({ heading, subheading1, subheading2, subheading3, subheading4 }) {
    return (
      <div className="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">{heading}</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">{subheading1}</a>
          </li>

          <li>
            <a className="text-gray-600 hover:text-gray-800">{subheading2}</a>
          </li>

          <li>
            <a className="text-gray-600 hover:text-gray-800">{subheading3}</a>
          </li>

          <li>
            <a className="text-gray-600 hover:text-gray-800">{subheading4}</a>
          </li>

        </nav>
      </div>
    )
  }
  function BottomFooter() {
    return (
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">© 2023  —
            <a href="https://zenoids.com" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@Zenoids</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">

                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    )
  }

  return (
    <footer className="text-gray-600 body-font bg-slate-200">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-80 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src={logo} strokeWidth={100}
              height={100} />
            <span className="ml-3 text-xl">Free Doctor Consultation</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">Get your free consultation today.</p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <OneRow heading="Qick Links" subheading1="first link" subheading2="second link" subheading3="third link" subheading4="fourth link" />
          <OneRow heading="Connect with us" subheading1="first link" subheading2="second link" subheading3="third link" subheading4="fourth link" />
          <OneRow heading="Our services" subheading1="first link" subheading2="second link" subheading3="third link" subheading4="fourth link" />
        </div>
      </div>
      <BottomFooter />
    </footer>
  );
}