import Sidebar from "@/components/sidebar"
    

export const metadata = {
    title: 'dashboard doctor ',
    description: 'Free doctor consultation',
}

export default function DashLayout({ children }) {
    return (
        <><div className="flex">
       <sidebar><Sidebar/></sidebar> <aside className="w-full ml-64 h-full">{children}</aside>
        </div>
        </>
    )
}
