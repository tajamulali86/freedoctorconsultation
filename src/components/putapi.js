
// "use client"

// import { useEffect, useState } from 'react';

// function Table({id}) {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`http://localhost:8000/api/patient/${id}`);
//         const responseData = await response.json();
//         setData(responseData);
//         console.log(data);
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   if (!data) {
//     return <div>Loading...</div>;
//   }

//   // Render the data
//   return (
//     <div>
//       <h1>{data.name}</h1>
//       <p>{data.email}</p>
//     </div>
//   );
// }

// export default Table;