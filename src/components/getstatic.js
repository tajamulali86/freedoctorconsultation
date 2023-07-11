


export async function getStaticProps(){
    const response = await fetch(`http://localhost:8000/api/patients`);
    const responseData = await response.json();
    console.log(responseData);
}