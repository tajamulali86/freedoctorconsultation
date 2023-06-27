import Header from '@/components/header'

import Footer from '@/components/footer'


export const metadata = {
  title: 'About Free doctor Consultation',
  description: 'about Free doctor consultation',
}

export default function MainLayout({ children }) {
  return (
    <>
        <header><Header/></header>
        {children}
       <footer><Footer/></footer> 
       </>
  )
}
