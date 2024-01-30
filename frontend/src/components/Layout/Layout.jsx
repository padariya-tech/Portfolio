import React, { useState } from 'react'
import Home from '../../pages/Home/Home.jsx'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai'
import './Layout.css'
import Menus from '../Menus/Menus.jsx'

const Layout = () => {
    const [toggle, setToggle] = useState(true)

    // change toggle
    function handleToggle() {
        setToggle(!toggle)
    }

    return (
        <>
            <div className="sidebar-section">
                <div className={toggle ? 'sidebar-toggle sidebar' : 'sidebar'}>
                    <div className='sidebar-toggle-icons'>

                        <p onClick={handleToggle}>
                            {
                                toggle ? <AiOutlineDoubleLeft size={30} /> : <AiOutlineDoubleRight size={30} />
                            }

                        </p>

                    </div>
                    <Menus toggle={toggle}></Menus>
                </div>
                <div className='container'>
                    <Home></Home>
                </div>
            </div>

        </>
    )
}

export default Layout