
import './App.css'
import Layout from './components/Layout/Layout.jsx'
import About from './pages/About/About.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Education from './pages/Educations/Education.jsx'
import Projects from './pages/Projects/Projects.jsx'
import Techstack from './pages/Techstack/Techstack.jsx'
import ScrollToTop from 'react-scroll-to-top'
import {useTheme} from './context/ThemeContex.jsx'
import MobileNav from './components/MobileNav/MobileNav.jsx'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {
 const [theme] = useTheme();

  return (
    <>
    <div id={theme}>
    <ToastContainer />
      <MobileNav/>
    <Layout />
    <div className="container ">
       <About/>
  <Techstack/>
  <Projects/>
  <Education/>  
  <Contact/>
    </div>
    <div className='footer pb-3 ms-3'>
  <h4 className="text-center">
    Made with ❤️ by Nij Padariya &copy; 2024
  </h4>
  </div>
  </div>
<ScrollToTop smooth color="#138781" />
    </>
  )
}

export default App
