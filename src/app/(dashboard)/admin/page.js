"use client"

import Delete from "@/components/deletemodal";
import PatientList2 from "@/components/listPatient2";
import PatientList from "@/components/listofpatients";
import AddtoApi from "@/components/postapi";
import Table from "@/components/table";

export const getStaticProps = async () => {
  try {
    const res = await fetch("http://localhost:8000/api/patient");
    const data = await res.json();
    console.log(data)
    return {
      props: {
        data: data || [], // Provide an empty array as a fallback if data is undefined
      },
    };
  } catch (error) {
    console.error("Error fetching patient data:", error);
    return {
      props: {
        data: [], // Provide an empty array as a fallback in case of an error
      },
    };
  }
};

const dashboard=()=>{
  
  return( <>
  <PatientList data={data}/>
  {/* <PatientList2 data={responseData}/> */}
  <Table id="2"/>
  <Delete/>
</> 
  );
}

export default dashboard