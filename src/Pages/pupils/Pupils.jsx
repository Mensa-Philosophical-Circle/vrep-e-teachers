import React, { useState, useEffect } from "react";
import { useWindowResize } from "../../util/windowResize";
import Sidebar from "../../components/sidebar";
import { CiSearch } from "react-icons/ci";
import studentprofile from '../../assets/student-profile.png'
import { pupilsNames } from "../../util/PupilsPageData";
import { pupilsDetails } from "../../util/PupilsPageData";
import { pupilsSubjects } from "../../util/PupilsPageData";

const Pupils = () => {
  const isMobile = useWindowResize();

  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

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
    <div>
      
      <div className=" flex max-lg:block bg-background">

       <div className="  max-lg:hidden  w-[400px]  h-screen ">
           
        <Sidebar isOpen={sidebarOpen} handleToggle={handleToggle} />

       </div>
           

       <div className=" py-5 pr-5 pl-3 w-full flex justify-between ">
        
        <div className=' w-[32%] h-auto  rounded-10 bg-white p-4  '>

           <div className=' flex  justify-between items-center'>

               <h1 className=' text-[20px] font-semibold text-[#0A112C]'>Pupils</h1>
               
               <div className=' relative'>

               </div>
           </div>

           <div className=' flex justify-center items-center w-full mt-4 relative '>

                   <input type='search' className=' w-[287px] h-[40px] text-[13px] rounded-10 border border-[#8599DD] pl-[16px] py-[8px] pr-[40px]' placeholder='Search'  />

                   <span className=' absolute right-[37px] text-[23px] text-[#8599DD]'><CiSearch/></span>

           </div>

           <div className=' mt-5 h-[85vh] overflow-auto pr-3' >

                 {pupilsNames.map((pupil ,id) => (
                 
                 <div className={` flex justify-around ${id%2===0&&'bg-[#E9ECF8]'} my-2 `}>

                     <img className=' w-[48px] h-[48px] object-cover rounded-360 my-0.5'  src={pupil.pic} alt=''/>

                     <p className=' my-auto text-[13px] font-medium font-poppins'>{pupil.name}</p>
                 </div>

                 ))}

           </div>


        </div>

        <div className=' w-[32%] h-auto  rounded-10 bg-white p-4  '>

           <div className=' flex  justify-between items-center'>

               <h1 className=' text-[20px] font-semibold text-[#0A112C] w-[40%]'>Personal Information</h1>

           </div>

           <div className='  mb-4 mt-4 mx-auto flex justify-around w-[296px] h-[80px] border-2 border-[#8599DD] bg-[#E9ECF8] rounded-10'>

             <div className=' my-auto text-[#435596]'>
                <p>Sarah James</p>
                <p>Johnson Smith</p>
             </div>
               <img className=' my-auto w-[64px] h-[64px] object-cover rounded-360 '  src={studentprofile} alt=''/>

           </div>
                   
           {pupilsDetails[0].map((pupild)=>(
           
           <div className=' mt-3'>

               <div>

                 <p className=' text-[14px] font-medium font-poppins text-[#8599DD] '>{pupild.title} </p>
                 <p className=' text-[15px] font-medium font-poppins text-[#435596] '>{pupild.detail}</p>

               </div>

               <div className=' w-full h-0.5 bg-[#E9ECF8] mt-2' />

           </div>

           ))}

        </div>

        <div className=' w-[32%] h-auto  bg-white p-4 rounded-10  flex flex-col justify-between overflow-auto '>

         <div >

           <h1 className=' text-[18px] font-semibold text-[#082567] w-[40%]'>Attendance</h1>

           <div className=' w-full h-[48px] text-[24px] [&>p]:my-auto text-[#435596] font-medium font-poppins rounded-10 drop-shadow-md shadow flex justify-around mt-3'>

                   <p>100</p>

                   <div className=' w-0.5 h-[30px] my-auto bg-[#8599DD]' />

                   <p>120</p>

           </div>

           <div>

            <h1 className=' text-[18px] font-semibold text-[#082567] mt-5'>Teacher’s Remark</h1>

             <div className=' w-full  min-h-[120px] h-auto  rounded-10 shadow p-3 mt-1.5 text-[13px] text-[#435596] leading-[18px] font-medium font-poppins'>
          
              <p>Run outside as soon as door open scream at teh bath yet roll on the floor purring your whiskers off find a way to fit in tiny box. Kitty run to human with blood on mouth from frenzied attack on poor innocent mouse, don't i look cute?.</p>
            
             </div>
          
           </div>

           <div>

            <h1 className=' text-[18px] font-semibold text-[#082567] mt-5'>Head Teacher’s Remark</h1>

             <div className=' w-full min-h-[120px] h-auto rounded-10 shadow p-3 mt-1.5 text-[13px] text-[#435596] leading-[18px] font-medium font-poppins'>
          
              <p>Run outside as soon as door open scream at teh bath yet roll on the floor purring your whiskers off find a way to fit in tiny box. Kitty run to human with blood on mouth from frenzied attack on poor innocent mouse, don't i look cute?.</p>
            
             </div>
          
           </div>

           <div className=' grid grid-cols-2 w-full mt-5 gap-3'>

             {pupilsSubjects[0].map((pupilsS)=>(
             
             <div className=' flex justify-between '>

               <p className=' text-[12px] font-medium font-poppins my-auto  text-[#212F5F]'>{pupilsS.name}</p>

               <span className=' w-[32px] h-[32px] ronded-[6px] border border-[#99A1DA] bg-[#F6F6F6] flex justify-center items-center text-[14px] text-[#435596]'>{pupilsS.grade}</span>

             </div>

             ))}

           </div>

         </div>
        
        </div>

       </div>
      
      </div>

    </div>
  );
};

export default Pupils;
