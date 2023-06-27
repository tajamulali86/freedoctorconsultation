import React from "react";
import Image from "next/image";
import logo from '../../public/images/logo.png'
import Link from "next/link";



export default function Header(){
  const linkstyle="mr-5 p-5 hover:text-gray-900 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-blue-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30";
    return(
    
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
     <Image
     src={logo}
     width={100}
     height={100}/>
     

      <span className="ml-3 text-xl text-cyan-500">Free Doctor Consulting</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link  href="/" className={linkstyle}>Home</Link>
      <Link href="/aboutus" className={linkstyle}>About us</Link>
      <Link href="/services" className={linkstyle}>Our Services</Link>
      
      <Link href="/contact" className={linkstyle}>Contacts</Link>
    </nav>
    <Link href="/admin" ><button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-cyan-600 hover:text-white transition-colors rounded text-base mt-4 md:mt-0">Consult Now
      <svg fill="none" stroke="currentColor" strokeLinejoin="round"  strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button></Link>
  </div>
</header>
    );
}

