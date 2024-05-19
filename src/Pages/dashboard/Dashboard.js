import React from 'react';
import Sidebar from '../../components/sidebar';
import RightSidebar from '../../components/RightSidebar';
import { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa6';
import circlePhoto from '../../assets/images/circle-photo.jpeg'
import { Link } from 'react-router-dom';
import { useWindowResize } from '../../util/windowResize';
import { PiStudent } from "react-icons/pi";
import { PiChalkboardTeacherLight } from "react-icons/pi";
import { MdEventAvailable } from "react-icons/md";
import { FiBell } from 'react-icons/fi';
import { IoMdExit } from 'react-icons/io';
import LogoutLogics from '../../services/logoutLogics';
import { useLocation } from 'react-router-dom';
import { getUser } from '../../hooks/useStorage';
import SchoolPerformance from '../../components/SchoolPerformance';
import hands from '../../assets/images/hands.png'


function Dashboard() {
  const isMobile = useWindowResize();

  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  


  const profile = getUser();

  const { handleLogout } = LogoutLogics();
  const location = useLocation().pathname;
  const option1=location.includes("/dashboard")
  const option2=location==="/"

  function handleToggle() {
    setSidebarOpen(prevState => !prevState);
    console.log('open')
  }

  useEffect(() => {
    if (!isMobile) {
      
      setSidebarOpen(true);
    }
  }, [isMobile]);


  return (
    <div className="w-full lg:h-auto bg-background">
      <article
        className={`${isMobile ? "ml-0" : "ml-65"} ${
          !isMobile && "lg:flex flex-col  bottom-4 pl-4 pr-4"
        }`}
      >
        <div className="fixed top-0 left-0 w-full z-50">
          <Sidebar isOpen={sidebarOpen} handleToggle={handleToggle} />
        </div>
        <section
          className={`fixed w-801 flex ${
            isMobile ? "justify-start" : "justify-center"
          } ${
            isMobile ? "" : " px-4"
          }lg:py-8 lg:px-8 h-32 flex w-80% flex-col  `}
        >
          <div className="bg-white w-full flex justify-between lg:flex items-center h-23 lg:rounded-20">
            <nav className="h-24 bg-white w-full flex justify-between items-center px-4 py-4 lg:justify-between lg:h-18 lg:items-center lg:w-full rounded-20">
              {isMobile ? (
                <div
                  className="h-8 w-8 flex items-center ml-8 "
                  onClick={handleToggle}
                >
                  <FaBars size={24} color="grey" />
                </div>
              ) : (
                <h3 className="text-center text-24 font-semibold font-capriola text-heading px-16">
                  Dashboard
                </h3>
              )}

              <div
                className={`w-26 flex justify-end ${
                  isMobile ? "px-0" : "px-4"
                } lg:w-78 flex justify-between items-center`}
              >
                <div
                  className={`icon-container logOut ${
                    (option1 || option2) && "dashlog"
                  } px-2 `}
                >
                  <button
                    className="flex items-center justify-center bg-mat w-7 h-7 rounded-full "
                    onClick={() => handleLogout()}
                  >
                    <IoMdExit size={24} color="#364786" />
                  </button>
                </div>

                <div className="">
                  <Link to="/activity">
                    <div>
                      <button className="flex items-center justify-center bg-che w-7 h-7 rounded-full">
                        <FiBell size={24} color="#364786" />
                      </button>
                    </div>
                  </Link>
                </div>

                <div className="w-12 h-12 rounded-full  overflow-hidden">
                  <img
                    className={`w-full h-full object-cover rounded-full border-solid border-4 ${
                      isMobile ? "border-circleM" : "border-circleD"
                    }`}
                    src={circlePhoto}
                    alt=""
                  />
                </div>

                {!isMobile && (
                  <div>
                    <p className="text-18 font-semibold text-par">John Doe</p>
                    <span className="text-14 font-normal">Head Teacher</span>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </section>
        <section className={`w-80% h-48 flex justify-between items-center ${
  isMobile ? "px-4" : "lg:py-8 py-4 lg:px-8"
} h-32 flex w-full mt-32 `}>

  <div className='w-full flex justify-between px-8'>

<div className={`h-40 px-4 ${isMobile ? 'w-78' : 'w-741'} flex flex-row items-center justify-around lg:h-56 px-8  bg-white rounded-20`}>

          
       
      
            <div className='flex px-4'>
            <Link className='px-2' to="/pupils" >

              <button  className='w-9 h-9 object-cover rounded-full overflow-hidden border-solid border-4 border-pink flex items-center justify-center'>
                <PiStudent size={33} color='heading'/>
              </button>
            
            </Link>
<div className='flex flex-col '>
<p className='text-20 text-par font-poppins font-semibold'>
                Pupils
              </p>
              <span className='text-18 font-poppins font-bold text-spans'>13336</span>
</div>
       
            </div>
            <div className='flex px-4'>
            <Link className='px-2' to="/teachers" >
              <button className="w-9 h-9 object-cover rounded-full overflow-hidden border-solid border-4 border-greenish flex items-center justify-center">
                <PiChalkboardTeacherLight  size={33} color='heading' />
              </button>
              </Link>

              <div className='flex flex-col'>
<p className='text-20 text-par font-poppins font-semibold'>
                Teachers
              </p>
              <span className='text-18 font-poppins font-bold text-spans'>12</span>
</div>
            </div>
            <div className='flex px-4'>
              <Link className='px-4' to="/results" >
              <button className="w-9 h-9 object-cover rounded-full overflow-hidden border-solid border-4 border-yellow flex items-center justify-center">
              
                <MdEventAvailable  size={33} color='heading'/>
               
              </button>
              </Link>
              <div className='flex flex-col '>
<p className='text-20 text-par font-poppins font-semibold'>
                Results
              </p>
              <span className='text-18 font-poppins font-bold text-spans'>40</span>
</div>
            
            </div>
          </div>
          
         
          <div className={`h-40 px-4 ${isMobile ? 'w-78' : 'w-78'} flex items-center justify-around lg:h-56   bg-white rounded-20`}>
              <div className='h-full flex flex-col justify-around '>
                <h1 className='text-heading font-capriola text-24 font-semibold'>Good morning John!</h1>
                <span className='text-16 font-poppins font-semibold'>Today |<span className='text-14 text-spans font-normal font-poppins'> 3May,2024</span> </span>
              </div>
              <div className='w-26'>
                <img src={hands} size={24} alt="" />
              </div>
            </div>
         
            </div>
            </section>

            <section className={`bg-background ${isMobile ? 'mt-0' : 'mt-12'}`} >
            <div className={`${isMobile ? 'h-auto flex flex-col justify-between items-center bg-background py-4' : 'px-8 flex justify-between'}`}>
  {isMobile ? (
    <>
      <SchoolPerformance />
      <div className='py-8'>
        <RightSidebar isDashboard />
      </div>
    </>
  ) : (
    <>
      <div className="pr-4">
          <SchoolPerformance />
        </div>
      <RightSidebar isDashboard />
    </>
  )}
</div>
</section>
      </article>
    </div>
  );
}

export default Dashboard;


