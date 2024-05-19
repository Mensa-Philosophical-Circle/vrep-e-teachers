import React from 'react';
import { useWindowResize } from '../../util/windowResize';
import Sidebar from '../../components/sidebar';
import CreateSubject from './CreateSubject';
import { FaBars } from 'react-icons/fa6';
import { useState, useEffect } from 'react';
import circlePhoto from '../../assets/images/circle-photo.jpeg'
import { CiSearch } from "react-icons/ci";
import subjectClasses from '../../util/subjectClass';
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import classS from '../../util/classesS'

function Subjects () {
    const isMobile = useWindowResize();
    const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
    const [showCreateSubject, setShowCreateSubject] = useState(false);
    const [selectedSubject, setSelectedSubject] = useState(null);

    function handleToggle() {
        setSidebarOpen(prevState => !prevState);
        console.log('open')
      }
    
      useEffect(() => {
        if (!isMobile) {
          
          setSidebarOpen(true);
        }
      }, [isMobile]);

      const handleSubject = (subject) => {
        setSelectedSubject(subject);
    };

      const openCreateSubject = () => {
        setShowCreateSubject(!showCreateSubject);
      };
   
        const handleDelete = (id) => {
       
          console.log(`Deleting class with ID ${id}`);
        };

const toggleCreateSubject = () => {
    setShowCreateSubject(!showCreateSubject);
};

const handleCancelCreateSubject = () => {
    setShowCreateSubject(false);
};

    return (
<div className="w-full lg:h-auto bg-background">
   
   <article className={`${isMobile ? "ml-0" : "ml-65"} ${
         !isMobile && "lg:flex flex-col ml-65 bottom-4 px-4"
       }`}>
 
   <div className="fixed top-0 left-0 w-full z-50">
         <Sidebar isOpen={sidebarOpen} handleToggle={handleToggle} />
         </div>
         <section
         className={`fixed w-800  flex ${isMobile ? "justify-start" : "justify-center"} ${
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
                 Subjects
               </h3>
             )}

<div
                  className={`w-16 flex justify-end ${
                    isMobile ? "px-0" : "px-16"
                  } lg:w-72 flex justify-between items-center`}
                >
                  <div className="w-12 h-12 rounded-full  overflow-hidden">
                    <img
                      className ={`w-full h-full object-cover rounded-full border-solid border-4 ${
                        isMobile ? 'border-circleM' : 'border-circleD'
                      }`}
                      src={circlePhoto}
                      alt=""
                    />
                  </div>

                  {!isMobile && (
                    <div>
                      <p className="text-18 font-semibold text-par">John Doe</p>
                      <span className="text-14 font-normal">Admin</span>
                    </div>
                  )}
                </div>
           </nav>
         </div>
         </section>
         {showCreateSubject ? (
          <CreateSubject onCancel={handleCancelCreateSubject} />
        ) : (
<main className={`${isMobile ? 'h-auto flex flex-col justify-between items-center bg-background py-4' : 'px-8 flex justify-between'} mt-34`}>

<section className={` ${isMobile ? 'h-80 w-78 py-4' : 'lg:w-96 h-751 flex justify-between'} bg-background `}>

<div className='flex flex-col justify-between'>
<div className='w-96 h-9 flex items-center justify-between rounded-10 bg-white px-4 py-4'>
<h2 className='text-15 text-search font-normal font-poppins'>Search subjects</h2>
<CiSearch size={22}/>

</div>

<div className='h-750 w-full bg-white rounded-10 flex-col justify-center py-4 px-4 overflow-y-auto'>
<div className='w-full mb-4'>
    <div className='flex justify-between text-12 py-2 px-2'>
    <span className='text-12 font-poppins px-4'>Subjects</span>
<span className='font-poppins px-4'>Classes</span>
    </div>

<ul className='h-auto py-4'>
          {subjectClasses.map((subjectData, index) => (
            <li className={`border-b border-gray p-3 pb-4 px-4 flex justify-between ${subjectData.subject === selectedSubject ? 'font-semibold' : ''}`} key={index} onClick={() => handleSubject(subjectData.subject)}><span className='text-15 text-medium font-poppins'>{subjectData.subject}</span> <span className='text-18 w-12 font-medium font-jost'>{subjectData.classes}</span></li>
          ))}
        </ul>

        </div>
      
        <div className='flex items-center justify-center w-full px-4'>
        <button onClick={openCreateSubject} className="w-full border-2 border-tertiary bg-tertiary text-white text-15 font-medium font-poppins py-2 px-4 rounded-lg flex justify-center items-center">Add Subject</button>
        </div>
</div>
</div>




</section>


<section className='w-742 bg-white ml-4 rounded-10 px-4 py-4'>

<div className=' flex justify-between items-center py-8'>
    <div>
    <h1 className='font-poppins text-30 font-semibold'>{selectedSubject || 'English' }</h1>
    </div>

<div className='w-68 flex justify-between items-center'>
<button  className="border-2 w-34 border-belll text-belll text-14 font-normal font-poppins py-2 rounded-lg flex justify-center items-center"> Edit subject  <FiEdit className='ml-2' size={24} /></button>
<button className="border-2 w-34 border-red text-red text-14 font-normal font-poppins py-2 rounded-lg flex justify-center items-center"> Delete subject  <MdDeleteOutline className='ml-2' size={24} /></button>
</div>

</div>
<div className='mt-4 '>
    <h2 className='text-18 text-black font-poppins font-normal py-4'>Classes</h2>

    <ul className='flex flex-col justify-between '>
        {classS.map((item) => (
          <li className='flex justify-between items-center py-2' key={item.id}><span className="w-full h-59 bg-grade rounded-10 px-4 py-4 text-18 font-poppins text-black font-medium space-y-4">{item.grade}</span>
          
          </li>
           
        ))}
      </ul>
     
</div>

</section>

</main>

)}

         </article>

         </div>
    )
   
}


export default Subjects;