"use client"
import React from "react";
import Profile from "@/components/profile";

const role="patients"


export default function page(params) {
  return (
   <Profile params={params} role={role}/>
  )
}
