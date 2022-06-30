import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <!-- Page content here --> */}
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati facilis nostrum quam. Nostrum unde in cumque rem impedit dignissimos laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ut alias sequi nobis illum laboriosam! Doloribus architecto debitis nemo voluptate, similique beatae pariatur corrupti quo facere ipsa atque eligendi temporibus?</p>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay mix-blend-lighten"></label>
                    <ul className="menu p-4 overflow-y-auto w-72 bg-white">
                        {/* <!-- Sidebar content here --> */}
                        <li><NavLink to="/" className="bg-info text-black mb-4">Totes</NavLink></li>
                        <li><NavLink to="/" className="bg-info text-black">Trash</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;