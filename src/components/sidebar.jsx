import React from "react";
import logo from "../assets/images/logo-vrep.png";
import { useState, useEffect } from "react";
import foto from '../assets/images/studentimageprofile.png'
import { useWindowResize } from "../util/windowResize";
import { sidebarData } from '../util/sidebarData';
import { NavLink } from "react-router-dom";
import { getUser } from "../hooks/useStorage";
import { IoCloseSharp } from "react-icons/io5";
import { useLocation } from 'react-router-dom';



export default function Sidebar({isOpen, handleToggle}) {
 const [activeItem, setActiveItem] = useState('dashboard')
  const isMobile = useWindowResize();
  const currentLocation = useLocation().pathname;
  const user = getUser();

  const sidebarItems = sidebarData(currentLocation);
  useEffect(() => {
    const initialActiveItem = sidebarItems.find(item => `/${item.title}` === currentLocation)?.title || 'dashboard';
    setActiveItem(initialActiveItem);
  }, [currentLocation, sidebarItems]);




const handleItemClick = (title) => {
  setActiveItem(title);
  
};

function handleClose() {
  handleToggle();
}






return (
  <>
    {isOpen && (
      <nav className="overflow-hidden fixed bg-sidebar w-64  px-4 py-4 top-4 bottom-4 left-4 rounded-20" >
        {isMobile ? (
          <section className="flex flex-row justify-between">
            <div><img src={user.photo || foto} alt="" /> {user.first_name}</div>
            <IoCloseSharp size={24} color="white" style={{ stroke: '#364786' }} onClick={handleClose} />
          </section>
        ) : (
          <section className="py-8">
            <div className="w-full h-full">
              <img src={logo} alt=""/>
            </div>
            
          </section>
        )}

        <ul className='w-full h-auto mt-4 font-sans'>
          {sidebarItems.map((link) => (
            <NavLink to={`/${link.title}`} key={`${link.title}`}
            className='flex w-full'
            activeClassName='active'
            onClick={() => handleItemClick(link.title)}
            >
              
              <li className={`w-full py-4 px-4 flex flex-row justify-start text-transform: capitalize rounded-10 space-x-4 ${activeItem === link.title ? 'bg-active text-heading' : 'text-white'}`}
          >
               <span className={`${activeItem === link.title ? 'bg-active text-heading' : ''}`}>
               {React.cloneElement(link.icon, {
                      color: activeItem === link.title ? 'black' : 'white'
                    })}
          
                </span> 
                <span >{link.title}
                  </span>
              </li>
            </NavLink>
          ))}
       
        </ul>
      </nav>
    )}
  </>
);

}