"use client"
import SingleDoctor from "@/components/singleDoctor";
import doc from "../../../../public/images/doc3.jpg"
import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then(res => res.json())


  
  export default  function Doctorpage() {
    const { data, error, isLoading } = useSWR('http://localhost:8000/api/doctors/1', fetcher)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
   console.log(data);
      return(
        <>
        <SingleDoctor img={doc} name={data.name} degree={data.degree} phone={data.phone}/>
        </>
      )
    }
  
  