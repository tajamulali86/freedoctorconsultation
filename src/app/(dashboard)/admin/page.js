"use client"

import Delete from "@/components/deletemodal";
import PatientList2 from "@/components/listPatient2";
import PatientList from "@/components/listofpatients";
import AddtoApi from "@/components/postapi";
import Table from "@/components/table";


// async function getData() {
//   const res = await fetch('http://localhost:8000/api/patient')

//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }
 
//   return res.json()
// }
 
// export default async function Page() {
//   const data = await getData()
 
//   return <main></main>
// }




const dashboard= async()=>{
  // const data = await getData()

  return( <>
  <PatientList />
  {/* <PatientList2 data={responseData}/> */}
  <Table id="2"/>
  <Delete/>
</> 
  );
}

export default dashboard