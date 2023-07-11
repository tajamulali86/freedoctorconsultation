"use client"

import Delete from "@/components/deletemodal";
import PatientList2 from "@/components/listPatient2";
import PatientList from "@/components/listofpatients";
import AddtoApi from "@/components/postapi";
import Table from "@/components/table";
import useSWR from "swr"



const dashboard= ()=>{
  // const data = await getData()

  return( <>
 
 <div className="container bg-blue-300 px-5 py-2 mx-auto">
  <div className="text-center ">
    <h1 className="sm:text-3xl text-2xl font-medium title-font  text-gray-900 mb-4">
      Dashboard
    </h1>
    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
     All information
    </p>
    <div className="flex mt-6 justify-center">
      <div className="w-16 h-1 rounded-full bg-green-500 inline-flex" />
    </div>
  </div>
</div>

<div className="container px-5 py-12 mx-auto">
  <div className="text-center mb-5">
    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
      Doctors information
    </h1>
    {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
     All information
    </p> */}
    <div className="flex mt-6 justify-center">
      <div className="w-16 h-1 rounded-full bg-green-500 inline-flex" />
    </div>
  </div>
</div>

  <PatientList role="doctors" />
  <br/>
  <div className="container px-5 py-12 mx-auto">
  <div className="text-center mb-5">
    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
      Patients information
    </h1>
    {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
     All information
    </p> */}
    <div className="flex mt-6 justify-center">
      <div className="w-16 h-1 rounded-full bg-green-500 inline-flex" />
    </div>
  </div>
</div>
  <PatientList role="patients" />
  <Table id="17"/>
  <Delete/>
</> 
  );
}

export default dashboard