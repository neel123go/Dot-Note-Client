import React from 'react';
import DotIcon from '../../../assets/dot-icon.png';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [login, setLogin] = useState(false);

    return (
        <div className='px-1 sm:px-10 border-b-2 border-gray-300'>
            <div className="navbar py-0">
                <div className="lg:hidden navbar-start">
                    <div className="dropdown">
                        <label htmlFor="my-drawer-2" className="btn btn-ghost btn-circle lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                    </div>
                </div>
                <div className="navbar-center lg:navbar-start">
                    <NavLink to="/">
                        <h2 className='text-textColor text-3xl p-5 font-bolder'><img src={DotIcon} className="inline w-10" alt="" /> Note</h2>
                    </NavLink>
                </div>
                <div className="navbar-end">
                    {login ? <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-accent rounded-box w-52">
                            <li>
                                <Link to="/" className="justify-between">
                                    Profile
                                    <span className="badge badge-primary">New</span>
                                </Link>
                            </li>
                            <li><Link to='/'>Settings</Link></li>
                            <li><Link to='/'>Logout</Link></li>
                        </ul>
                    </div> : <ul className='flex items-center text-neutral text-lg'>
                        <NavLink to="/login" className='mr-2 hover:text-secondary'><li>Log In</li></NavLink>
                        <span className='text-secondary'>/</span>
                        <NavLink to="/signup" className='ml-2 hover:text-secondary'><li>Sign Up</li></NavLink>
                    </ul>}
                </div>
            </div>
        </div>
    );
};

export default Header;