import PatientList from "@/components/listofpatients";
import Services from "@/components/services";

export default function Patient(){
    return(
<>
<div className="container px-5 py-12 mx-auto">
  <div className="text-center mb-5">
    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
      Patients inforation
    </h1>
    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
      view patients information
    </p>
    <div className="flex mt-6 justify-center">
      <div className="w-16 h-1 rounded-full bg-red-500 inline-flex" />
    </div>
  </div>
</div>
<PatientList role="patients" />
{/* <Services/> */}

</>
    );
}