import React from "react";
import Image from "next/image";
import online from "../../public/images/online.jpg"
export default function Aboutus(){
    return(
        <section className="text-gray-600 body-font">
            <div className="container px-5 pb-12 mx-auto flex flex-col">
                <div className="lg:w-4/6 mx-auto">
                    <div className="rounded-lg h-96 overflow-hidden">
                        <Image 
                        src={online}
                        className="object-cover object-center h-full w-full"
                        alt="online consulting"
                        />
                        
                    </div>
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                <svg fill="none" stroke="currentColor" strokeLinejoin="round"  strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div className="flex flex-col items-center text-center justify-center ">
                                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Dr Ahmed</h2>
                                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                <p className="text-base">CEO , Dierector of Free Doctor Consultation</p>
                            </div>
                        </div>
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <p className="leading-relaxed text-lg mb-4">Welcome to our website, where we offer free doctor consultations. Our mission is to provide accessible healthcare by connecting patients with doctors online. We believe everyone deserves quality medical advice, regardless of their location or financial situation. Our dedicated team ensures a user-friendly and secure platform for confidential consultations. Say goodbye to long wait times and travel expenses by accessing expert doctors from the comfort of your own home. Whether it's a minor ailment or a need for a second opinion, our experienced doctors are here to guide you. Visit our website, create an account, choose a specialty, and connect with licensed doctors via secure video or audio calls. Our service is made possible through the generous support of our partners and sponsors. Together, let's make healthcare accessible to all.</p>
                            <a className="text-indigo-500 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinejoin="round"  strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
}