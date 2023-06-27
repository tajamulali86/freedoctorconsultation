import React from "react";
import Image from "next/image";
import cardio from "../../public/images/cardiology.jpg"
import dentist from "../../public/images/dentist.jpg"
import ortho from "../../public/images/ortho.jpg"
import operate from "../../public/images/operate.jpg"

function ServiceCard({img, name, para}){
    return(     <div className="xl:w-1/4 md:w-1/2 p-4">
    <div className="bg-gray-100 p-6 rounded-lg">
      <Image
      src= {img}
      alt= "speciality"
      className="h-96 rounded w-full object-cover object-center mb-6"
      />
    
      <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Consult our</h3>
      <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{ name }</h2>
      <p className="leading-relaxed text-base">{para}</p>
    </div>
  </div>

    );
}

export default function Services(){
    return(
<section className="text-gray-600 body-font">
  <div className="container  px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Services</h1>
        <div className="h-1 w-80 bg-indigo-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      
      <ServiceCard img={cardio}  name="Cardiologist"  para="Seek expert advice from our experienced cardiologist to ensure optimal heart health and personalized treatment for your cardiovascular concerns "/>
      <ServiceCard img={dentist} name="Dentist"  para="Consult our skilled dentist for comprehensive dental care, including check-ups, cleanings, and a wide range of treatments to maintain your oral health and smile."/>
      <ServiceCard img={ortho}  name="Orthopedic"  para="Find relief from orthopedic issues by consulting our specialized orthopedic doctor, who will provide personalized treatment plans to improve your mobility and reduce pain."/>
      <ServiceCard img={operate}  name="Operataion"  para="Get a valuable second opinion from our experienced surgeon, offering expert insights and guidance to help you make informed decisions about your medical treatment."/>
      
     
    </div>
  </div>
</section>
    );
}