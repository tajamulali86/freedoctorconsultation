"use client"

import Delete from "@/components/deletemodal";
import PatientList2 from "@/components/listPatient2";
import PatientList from "@/components/listofpatients";
import AddtoApi from "@/components/postapi";
import Table from "@/components/table";
import useSWR from "swr"
// import { useEffect, useState } from 'react';

// const fetcher = (...args) => fetch(...args).then(res => res.json())

// export function useUser (id) {
//   const { data, error, isLoading } = useSWR(`http://localhost:8000/api/patient/${id}`, fetcher)
 
//   return {
//     user: data,
//     isLoading,
//     isError: error
//   }
// }


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




const dashboard= ()=>{
  // const data = await getData()

  return( <>
  <PatientList />
  {/* <PatientList2 data={responseData}/> */}
  <Table id="17
  "/>
  <Delete/>
</> 
  );
}

export default dashboard