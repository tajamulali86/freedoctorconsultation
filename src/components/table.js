
"use client"


import useSWR from "swr"
// import { useEffect, useState } from 'react';

const fetcher = (...args) => fetch(...args).then(res => res.json())

function useUser (id) {
  const { data, error, isLoading } = useSWR(`http://localhost:8000/api/patient/${id}`, fetcher)
 
  return {
    user: data,
    isLoading,
    isError: error
  }
}

function Table({id}) {
  // const [data, setData] = useState(null);
  const { user, isLoading, isError } = useUser(id)

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if(isError)
  return <div>error</div>
  // Render the data
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

export default Table;