import React from "react";
import Image from "next/image";
import doc1 from "../../public/images/doc1.jpg"
import doc2 from "../../public/images/doc2.jpg"
import doc3 from "../../public/images/doc3.jpg"


function DoctorCard({img, dr, qualification, para }){
    return(
        <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
            <Image
            src={img}
            className="flex-shrink-0 rounded-lg w-full h-96  object-cover object-center mb-4"
            alt="dpctor"
            />

          
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">{dr}</h2>
            <h3 className="text-gray-500 mb-3">{qualification}</h3>
            <p className="mb-4">{para}</p>
            <span className="inline-flex">
              <a className="text-gray-500">
                <svg fill="none" stroke="currentColor" strokeLinejoin="round"  strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" strokeLinejoin="round"  strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" strokeLinejoin="round"  strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    );
}

export default function Doctors(){
    return(
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">OUR DOCTORS</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
    </div>
    <div className="flex flex-wrap -m-4">
    
     <DoctorCard img={doc1} dr="Dr Inamullah Khan" qualification="MBBS, MD, MBT" para="Espicialized doctor with espicililation in pysiotherabpy" />
     <DoctorCard img={doc2}dr="Dr Talha Fayazuddin" qualification="MBBS, MD, MS" para="Doctor with espicililation in pysiotheraoy and pyhocology" />
     <DoctorCard img={doc3}dr="Dr Zubair Ahmed Khan " qualification="MBBS, MD, " para="Espicialized doctor with espicililation in forencsic sceience " />
     <DoctorCard img={doc1} dr="Dr Abdul Khadar Talha" qualification="MBBS, MD, " para="Espicialized doctor with espicililation in Pediatric operations" />
      
      
    </div>
  </div>
</section>
    );
}