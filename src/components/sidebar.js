import Link from "next/link";

import { MdMedicalInformation } from "react-icons/md";
import { MdInfoOutline } from "react-icons/md";
import { FaBriefcaseMedical } from "react-icons/fa";

const Sidelink = ({ href, linkto, svg }) => {
  return (
    <li>
      <Link
        href={href}
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
        {svg}
        <span className="ml-3">{linkto}</span>
      </Link>
    </li>
  );
}


export default function Sidebar() {
  return (

    <>

      <aside
        id="default-sidebar"
        className="sticky top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">

            <Sidelink href="/admin" linkto="Dashboard" svg={<svg
              aria-hidden="true"
              className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
            </svg>} />

            <Sidelink href="/patients" linkto="Patients" svg={<MdInfoOutline/>} />
            <Sidelink href="/doctors" linkto="Doctors" svg={<FaBriefcaseMedical/>} />



           <Sidelink svg={  <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
                  <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                </svg>}
                linkto={"Doctor"}
                href={"/doctor"}   />

            <Sidelink linkto={"Add Information"} href={"/add"}/>

            <Sidelink href={"/"} svg={<svg
              aria-hidden="true"
              className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                clipRule="evenodd"
              />
            </svg>} linkto={"Back to Website"} />

            <Sidelink href={"/propstest"} svg={<MdMedicalInformation/>} linkto={"test page"} />


          </ul>
        </div>
      </aside>
    </>


  );
}