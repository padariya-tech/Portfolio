import React,{useState} from 'react'
import './Contact.css'
import {BsGithub, BsGoogle, BsLinkedin} from "react-icons/bs"
import { toast } from 'react-toastify'
import axios from 'axios'
function Contact() {
    const [name,Setname] = useState('')
    const [email,Setemail] = useState('')
    const [msg,Setmsg] = useState('')

    const handleSubmit = async(e) =>{
        e.preventDefault()
       try {
        if(!name || !email || !msg){
            toast.error("All fields are required")
        }
        const res = await axios.post('http://localhost:8000/api/v1/portfolio/sendEmail',{name,email,msg})

        if(res.data.success){
            toast.success(res.data.message)
           Setname("");
       Setemail("");
       Setmsg("");
        }
        else
        {
            toast.error(res.data.message)
        }
       } catch (error) {
        console.log(error);
       }
    }



    return (
        <>
            <div className="contact " id="contact">
                <div className="card card0 border-0">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                            <div className="card1">
                                <div className="row border-line">
                                    <img src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                                        alt="contact" className='image' />
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-5 col-md-6">
                          


                                <div className="card2 d-flex card border-0 px-4 py-5">
                                      <div className="row">
                                    <div className="row">
                                    <h6>Contact with 
                                    <BsLinkedin color='blue' className='ms-2' size={30}/>
                                    <BsGithub color='black' className='ms-2' size={30}/>
                                    <BsGoogle color='red' className='ms-2' size={30}/>
                                    </h6>
                                    </div>
                                <div className="row px-3 mb-4">
                                    <div className="line" />

                                    <small className="or text-center">OR</small>
                                    <div className="line" />
                                </div>
                                <div className="row px-3">
                                    <input 
                                    type="text"
                                     name="name"
                                     placeholder='Enter Your Name'
                                     className='mb-3' 
                                     value={name}
                                     onChange={(e)=>Setname(e.target.value)}
                                     />
                                </div>
                                <div className="row px-3">
                                    <input 
                                    type="email"
                                     name="email"
                                     placeholder='Enter Your Email Address'
                                     className='mb-3' 
                                     value={email}
                                     onChange={(e)=>Setemail(e.target.value)}
                                     />
                                </div>
                                <div className="row px-3">
                                    <textarea
                                    type="text"
                                     name="msg"
                                     placeholder='Enter Your Message'
                                     className='mb-3' 
                                     value={msg}
                                     onChange={(e)=>Setmsg(e.target.value)}
                                     />
                                </div>
                                <div className="row px-3">
                                    <button className='button'  onClick={handleSubmit}>SEND MESSAGE</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact