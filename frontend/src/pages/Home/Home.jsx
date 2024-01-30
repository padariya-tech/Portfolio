import React from 'react'
import {useTheme} from '../../context/ThemeContex.jsx'
import './home.css'
import TypeWriter from 'typewriter-effect'
import Resume from '../../assets/docs/resume.txt'
import {BsFillMoonStarsFill,BsFillSunFill} from 'react-icons/bs'
import Fade from 'react-reveal/Fade'
function Home() {
  const [theme, setTheme] = useTheme();

  const handleTheme = () => {
    setTheme((prevState)=>(
       prevState === 'light' ? 'dark' : 'light'
    ));
  }
  return (
    <>
    <div className="contianer-fluid home-container" id="home">
      <div className="theme-btn" onClick={handleTheme}>
        {theme === 'light' ? (<BsFillMoonStarsFill  size={30}/> ):( <BsFillSunFill size={30}/>)}
      </div>
      <div className="container home-content">
        <Fade right>
        <h2>Hi 👋 I'm Nij  </h2>
        <h1>
          <TypeWriter
            options={{
              strings: ['Student', 'Developer', 'Learner'],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        </Fade>
        <Fade bottom>
        <div className="home-buttons">
        <a className='btn btn-hire' href='https://api.whatsapp.com/send/?phone=6353855022'
        rel="noreferrer"
        target="_blank">Hire Me</a>
        
          <a className='btn btn-cv' href='{Resume}' download={'Resume.pdf'}>My Resume</a>
        </div>
        </Fade>
      </div>
    </div>
    </>
  )
}

export default Home