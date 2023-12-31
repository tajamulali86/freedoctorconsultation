"use client"
import useSWR from "swr"
import React from 'react';
import axios from "axios";
import Spinner from "@/components/spinner";



 
const fetcher=url => axios.get(url).then(res => res.data)
 
export default function GetData() {
  const{data,isLoading, isError}=useSWR(`http://localhost:8000/api/patients/13`,fetcher)
  if(isLoading) return<div><Spinner/></div>
  if(isError) return<div>...error</div>
  return (
    <div>
      {data.name}<br/>
      {data.email}
    </div>
  )
}