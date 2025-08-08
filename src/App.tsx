import './App.css'
import Footer from './components/Footer/Footer'
import InfoToast from './components/UI/InfoToast'
import CTASection from './sections/CTASection/CTASection'
import Hero from './sections/Hero/Hero'
import Main from './sections/Main/Main'

function App() {
  return (
    <div className="">
      <InfoToast/>
      <Hero/>
      <Main/>
      <CTASection/>
      <Footer/>
    </div>
  )
}

export default App
