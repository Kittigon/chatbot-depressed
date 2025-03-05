import {Link} from 'react-router-dom'
import './style/Navbar.css'
import { IoMdMenu } from "react-icons/io";
import { FaRegBell } from "react-icons/fa6";
import { FaWindowClose } from "react-icons/fa";
import { useState } from 'react';

const Navbar=()=>{
    const [showMenu, setshowMenu] = useState(false)

    const toggleMenu=()=>{
        setshowMenu(!showMenu)
    }
    return(
        <article className='container'>
            <div className="head">  
                <div className="Logo">
                    
                </div>
                <nav>
                    <Link to="/">การนัดหมาย</Link>
                    <Link to="/evaluation">ตรวจสอบแบบประเมิน</Link>
                    <Link to="/history">ประวัติการเข้ารับการปรึกษา</Link>
                </nav>
                <div className='Setting'>
                    <Link to="/notifications"><FaRegBell/></Link>
                    <div className='menu'>
                        <div className='menu-toggle'>
                            <Link to="#">
                                <IoMdMenu onClick={toggleMenu}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
                <div className={showMenu ? "nav-menu active":" nav-menu"}>
                    <div className='menu-container' onClick={toggleMenu}>
                        <div>
                            <Link to="#" className='btn'>
                                <FaWindowClose  />
                            </Link>
                        </div>
                        <ul className='menu-items'>
                            <li className='menu-text'><Link to="/questionform">แบบฟอร์มคำถามสำหรับผู้ใช้งาน</Link></li>
                            <li className='menu-text'><Link to="/appointmentform">แบบฟอร์มนัดหมายสำหรับผู้ใช้งาน</Link></li>
                            <li className='menu-text'><Link to="#">ออกจากระบบ</Link></li>
                        </ul>
                    </div>
                </div>
        </article>
    )
}

export default Navbar