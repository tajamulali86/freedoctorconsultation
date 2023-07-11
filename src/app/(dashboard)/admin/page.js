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
  {/* <PatientList  /> */}
  {/* <PatientList2 data={responseData}/> */}
  <Table id="17"/>
  <Delete/>
</> 
  );
}

export default dashboard