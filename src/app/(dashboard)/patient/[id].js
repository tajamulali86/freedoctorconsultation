const { useRouter } = require("next/router");


const patientid=()=>{
    const router= useRouter();
    const patients=router.query.id;

    return(
<><h1>

    this is {patients.name}
</h1>
</>
    )
}
useRouter