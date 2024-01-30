import React from 'react'
import './Menus.css'
import {FcAbout, FcBiotech, FcBusinessContact, FcHome, FcPortraitMode, FcReadingEbook, FcVideoProjector} from 'react-icons/fc'
import {Link } from 'react-scroll'
import  Zoom from 'react-reveal/Zoom'
import  Fade from 'react-reveal/Fade'
function Menus({toggle}) {
  return (
    
    <>
    
        { toggle ? ( 
            <>
            <Zoom>
            <div className="navbar-profile-pic">
            <img  src="../../public/profile2.jpg" alt="profile pic" /> 
        </div></Zoom>

        <Fade left>
        <div className="nav-items">
           

            <div className="nav-item">
                <div className="nav-link" 
                > 
                <Link to="home"  spy={true} smooth={true} offset={-100} duration={100} >
                {<FcHome/>} Home </Link> </div>
            </div>

            <div className="nav-item">
                <div className="nav-link">
                <Link to="about"  spy={true} smooth={true} offset={-100} duration={100} > {<FcAbout/>} About </Link> </div>
            </div>

            

            <div className="nav-item">
                <div className="nav-link">  <Link to="techstack"  spy={true} smooth={true} offset={-100} duration={100} >{<FcBiotech/>} Tech Stack</Link> </div>
            </div>


            <div className="nav-item">
                <div className="nav-link"> <Link to="projects"  spy={true} smooth={true} offset={-100} duration={100} >{<FcVideoProjector/>} Projects</Link> </div>
            </div>

            <div className="nav-item">
                <div className="nav-link">  <Link to="education"  spy={true} smooth={true} offset={-100} duration={100} >{<FcReadingEbook/>} Education </Link></div>
            </div>

            <div className="nav-item">
                <div className="nav-link">
                    <Link to="contact"  spy={true} smooth={true} offset={-100} duration={100} > {<FcBusinessContact/>} Contact </Link> </div>
            </div>
         
        </div>
        </Fade>
            </>
        ) : (
           <>
           <Fade left>
           <div className="nav-items">
           

           <div className="nav-item">
               <div className="nav-link" >  <Link to="home"  spy={true} smooth={true} offset={-100} duration={100} >
                {<FcHome/>} </Link>  </div>
           </div>

           <div className="nav-item">
               <div className="nav-link"> <Link to="about"  spy={true} smooth={true} offset={-100} duration={100} >
                {<FcAbout/>}  </Link> </div>
           </div>

           <div className="nav-item">
               <div className="nav-link">  <Link to="techstack"  spy={true} smooth={true} offset={-100} duration={100} >
                {<FcBiotech/>} </Link>  </div>
           </div>

           <div className="nav-item">
               <div className="nav-link">  <Link to="projects"  spy={true} smooth={true} offset={-100} duration={100} >
                {<FcVideoProjector/>} </Link>  </div>
           </div>


           <div className="nav-item">
               <div className="nav-link">  <Link to="education"  spy={true} smooth={true} offset={-100} duration={100} >
                {<FcReadingEbook/>}  </Link>  </div>
           </div>

           <div className="nav-item">
               <div className="nav-link">  <Link to="contact"  spy={true} smooth={true} offset={-100} duration={100} >
                {<FcBusinessContact/>} </Link>  </div>
           </div>

          
        
       </div>
       </Fade>
           </>

    )}
    

   
    </>
  )
}

export default Menus