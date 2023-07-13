import FileUploadForm from "@/components/fileform";

const { default: AddtoApi } = require("@/components/postapi")

const editinfo =()=>{
    return(
    <>
    <AddtoApi/>
    <FileUploadForm/>
</>
    );
}

export default editinfo