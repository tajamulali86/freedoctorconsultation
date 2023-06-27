
import Aboutus from '@/components/aboutus'
import Firstcta from '@/components/firstcta'
import Stats from '@/components/stats.'
import Doctors from '@/components/doctors'
import Testimony from '@/components/testimony'
import Services from '@/components/services'
import SecondCta from '@/components/secondcta'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>  
    
  <Header/>
    
    <Aboutus/>
    <Services/>
    <Firstcta/>
    <SecondCta/>
    <Stats/>
    <Doctors/>
  <Testimony/><Footer/>
  </>
  )
}
