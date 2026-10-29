import { Link } from 'react-router-dom'
import './Navbar.css'
import { CiMenuBurger } from "react-icons/ci";
import { useState } from 'react';


const Navbar = () => {
    const [show, setShow] = useState(false)
    return (
        <>
            <nav className='navbar'>
                <div className="logo">
                    <img src="./logo.png" alt="log" width={'188px'} height={'55px'} />
                </div>
                <ul className={show ? 'navbar-list show' : 'navbar-list'}>
                    <li><Link to={"/"}>HOME</Link></li>
                    <li><Link to={"/about-us"}>ABOUT US</Link></li>
                    <li><Link to={"/qualities"}>SERVICES</Link></li>
                    <li><Link to={"/reservation"}>RESERVATION</Link></li>
                    <div className="our-menu">
                        <button>
                            <Link to={"/popular-dishes"}>OUR MENU</Link>
                        </button>
                    </div>
                </ul>
                <CiMenuBurger className='menu' onClick={() => setShow(!show)} />
            </nav>
        </>
    )
}

export default Navbar