import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from "../assets/logo.png";
import git from "../assets/github.png";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm px-2 lg:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0 pr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/apps'>Apps</Link>
                        </li>
                        <li>
                            <Link to='/installed'>Installation</Link>
                        </li>

                    </ul>
                </div>
                <Link className="flex gap-x-1 items-center justify-baseline" to="/">
                    <img className="size-10" src={logo} alt="Logo" />
                    <p className=" font-bold text-xl text-[#632EE3]">
                        Hero.IO
                    </p>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="gap-4 menu-horizontal px-1">
                    <li><NavLink to='/' className='font-semibold  text-[#000000e6] hover:text-[#632EE3] hover:border-b-2 hover:border-b-[#632EE3] transition ease-linear'>Home</NavLink></li>
                    <li><NavLink to='/apps' className='font-semibold  text-[#000000e6] hover:text-[#632EE3] hover:border-b-2 hover:border-b-[#632EE3] transition ease-linear'>Apps</NavLink></li>
                    <li><NavLink to='/installed' className='font-semibold  text-[#000000e6] hover:text-[#632EE3] hover:border-b-2 hover:border-b-[#632EE3] transition ease-linear'>Installation</NavLink></li>

                </ul>
            </div>

            <div className="navbar-end">
                <Link target='_blank' to='https://github.com/Hasnat-Sayed' className="bg-linear-to-r from-[#632EE3] form-[5.68%] to-[#9F62F2] to-[88.38%] hover:scale-105 transition ease-in-out  font-semibold text-white py-2 px-4 rounded-md flex items-center"> <img className='mr-2' src={git} alt="" /> Contribute</Link>
            </div>
        </div>
    );
};

export default Navbar;