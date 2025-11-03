import React from 'react';
import logo from "../assets/logo.png";
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className='bg-[#001931]  text-white px-4 lg:px-20'>
            <footer className="footer sm:footer-horizontal py-10 justify-between">
                <aside>
                    <img src={logo} className='h-10 w-10' alt="" />
                    <p className='font-bold text-2xl'>
                        Hero Apps</p>

                    <p>Providing Trending apps at your doorstep.</p>

                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <Link to='/' className="link link-hover">Home</Link>
                    <Link to='/apps' className="link link-hover">Apps</Link>
                    <Link to='/installed' className="link link-hover">Installation</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>

            </footer>

            <div>
                <p className="text-white text-center inter-font font-medium py-10 border-t border-gray-600">
                    Copyright © 2025 - All right reserved
                </p>
            </div>

        </div>

    );
};

export default Footer;