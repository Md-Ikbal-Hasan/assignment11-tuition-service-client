import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const user = true;
    const menuItem = <>
        <li className='font-semibold'>  <Link to='/'>Home</Link> </li>
        <li className='font-semibold'>  <Link to='/services'>Services</Link> </li>
        <li className='font-semibold'>  <Link to='/blog'>Blog</Link> </li>
        <li className='font-semibold'>  <Link to='/signup'>SignUp</Link> </li>
        <li className='font-semibold'>  <Link to='/login'>Login</Link> </li>
        <li className='font-semibold'>  <button className='btn btn-secondary'>LogOut</button> </li>

        {/* {
            user ?
                <>
                    <li className='font-semibold'>  <Link to='/addproduct'>Add Products</Link> </li>
                    <li className='font-semibold'>  <Link>LogOut</Link> </li>
                </>
                :
                <>
                    <li className='font-semibold'>  <Link>Login</Link> </li>
                    <li className='font-semibold'>  <Link>SignUp</Link> </li>
                </>
        } */}
    </>

    return (
        <div className="navbar mb-12  bg-primary text-primary-content">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Tuition Service</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>

        </div>
    );
};

export default Header;