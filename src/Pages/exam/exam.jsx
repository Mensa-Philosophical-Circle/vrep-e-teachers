import React , {useState , useEffect} from "react";
import { useWindowResize } from "../../util/windowResize";
import Sidebar from "../../components/sidebar";
import { Link, useNavigate } from "react-router-dom";
import { PiStudent } from "react-icons/pi";
import { FaRegClock } from "react-icons/fa6";
import { PiNotebookLight } from "react-icons/pi";
import { LuCalendarCheck } from "react-icons/lu";
import hands from '../../assets/images/hands.png'
import { CiSearch } from "react-icons/ci";
import { TbMathFunction } from "react-icons/tb";
import { examData } from "../../util/ExamPageData";
import { useDispatch } from "react-redux";
import { edit , create } from "../../redux/Slices/CreateOREditExamSlice";

function Exam() {
 
  const isMobile = useWindowResize();

  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleToggle() {
    setSidebarOpen(prevState => !prevState);
    console.log('open')
  }

  useEffect(() => {
    if (!isMobile) {
      
      setSidebarOpen(true);
    }
  }, [isMobile]);

  function handleClick(name){

    if(name){

      dispatch(create())

    }else{

      dispatch(edit())

    }

    navigate("details")
  }

  return (
    <div  className=" bg-[#F3F3FF]">
      
      <div className=" flex max-lg:block">

       <div className="  max-lg:hidden  w-[400px]  h-screen ">
           
        <Sidebar isOpen={sidebarOpen} handleToggle={handleToggle} />

       </div>
           

       <div className=" py-5 pr-5 pl-3 w-full">
         
        <div className=" flex justify-between">
          
          <div className=" w-[70%] h-[153px] bg-white rounded-10 flex justify-around ">

            <div className=" h-full flex">

              <button className=" my-auto bg-[#FFF3FA] mr-3 border-[#FF8BD2] w-[56px] h-[56px] rounded-40 border-4 flex justify-center items-center">

                <PiStudent size={20}/>

              </button>

              <div className=" w-[67px] h-[68px] my-auto ml-3">

                <p className=" text-[16px] text-[#0A122C] font-semibold">Pupils At Exam</p>
                <p className=" text-[24px] font-bold text-[#5E72B9]">77</p>

              </div>

            </div>

              <div className=" h-full flex">

              <button className=" my-auto bg-[#FFF3FA] mr-3 border-[#FF8BD2] w-[56px] h-[56px] rounded-40 border-4 flex justify-center items-center">

                <FaRegClock size={20}/>

              </button>

              <div className=" w-[67px] h-[68px] my-auto ml-3">

                <p className=" text-[16px] text-[#0A122C] font-semibold">Pending Exams</p>
                <p className=" text-[24px] font-bold text-[#5E72B9]">8</p>

              </div>

            </div>

            <div className=" h-full flex">

              <button className=" my-auto bg-[#E9FFFF] mr-3 border-[#5CE1E6] w-[56px] h-[56px] rounded-40 border-4 flex justify-center items-center">

                <PiNotebookLight size={20}/>

              </button>

              <div className=" w-[67px] h-[68px] my-auto ml-3">

                <p className=" text-[16px] text-[#0A122C] font-semibold">Running Exams</p>
                <p className=" text-[24px] font-bold text-[#5E72B9]">10</p>

              </div>

            </div>

            <div className=" h-full flex">

              <button className=" my-auto bg-[#FFFBEC] mr-3 border-[#FFDE59] w-[56px] h-[56px] rounded-40 border-4 flex justify-center items-center">

                <LuCalendarCheck size={20}/>

              </button>

              <div className=" w-[67px] h-[68px] my-auto ml-3">

                <p className=" text-[16px] text-[#0A122C] font-semibold">Completed Exams</p>
                <p className=" text-[24px] font-bold text-[#5E72B9]">28</p>

              </div>

            </div>

          </div>

          <div className=" w-[28%] h-[153px] bg-white rounded-10  flex  justify-between">

            <div className=" flex flex-col justify-between h-full p-4">

              <p className=" text-[24px] text-[#212F5F] font-semibold">Good morning Jane!</p>

              <div className=" flex"> 

              <p className=" text-[16px] text-[#435596] font-semibold my-auto">Today</p>

              <div className=" w-0.5 h-[16px] bg-[#435596] mx-4 my-auto"/>

              <p className=" text-[14px] font-medium text-[#5E72B9] my-auto">9 May, 2024</p>

              </div>

            </div>

            <div className=" flex flex-col h-full justify-between">

              <img className=" w-[122px] h-[122px] my-auto" src={hands} alt="" />

            </div>

          </div> 
        
        </div>

        <div className=" flex justify-between mt-5 w-full">

          <div className=" relative w-[65%]">

            <input type='search'  className=" w-full h-[48px] rounded-10 border border-[#8599DD] bg-[#FFFFFF] pl-5 pr-7  text-[12px]" placeholder="Search Exam"/>

            <span className=' absolute right-[15px] top-[12px] text-[23px] text-[#8599DD]'><CiSearch/></span>

          </div>

          <div className=" relative w-[28%]">

              <button className=" w-full h-[48px] rounded bg-[#364786] font-semibold text-white text-[16px]" onClick={() => handleClick(true)}>Create Exam</button>

          </div>

        </div>

        <div className=" h-[59.3vh] overflow-auto mt-5">
          {examData.map((exam)=>(
          <div className="  w-[97%] bg-white h-[232px] p-4 flex justify-between my-5">

            <div className=" w-[344px] h-[200px] bg-[#D4DAEE] my-auto rounded-10">

              <div className=" h-[72%] flex justify-center items-center">
              
                <div>
              
                 <p className=" flex text-[#212F5F]"><span className=" my-auto mr-2 w-[25px] h-[25px]"><img src={exam.icon} alt="" /></span><span className=" text-[24px] font-semibold ">{exam.name}</span></p>
              
                 {exam.turm&&<>
                 
                  <div className=" w-auto h-px bg-[#212F5F] " />

                  <p className=" text-[14px] text-[#435596] text-center w-auto">{exam.turm}</p>
                 
                 </>}

                </div>
              
              </div>

              <div className="bg-[rgba(233,236,248,0.5)] h-[28%] w-full flex flex-col justify-between px-4 pt-1 pb-3">

                <div>

                  <p> <span className=" text-[#8599DD] font-medium ">Due Date: </span> <span className=" text-[rgba(10,17,44,1)] font-semibold">{exam.dueDate}</span> </p>

                </div>

                <div>

                  <p className=" text-[rgba(67,85,150,1)] font-medium text-[14px]"><span>Instructor: </span><span>{exam.instructor}</span></p>

                </div>

              </div>

            </div>

            <div className=" flex flex-col justify-between">

             <div>

              <button className=" w-[240px] h-[48px] rounded border-[3px] border-[#364786] font-semibold text-[#364786] text-[16px]" onClick={() => handleClick(false)} >Edit Exam</button>

             </div>

             <div>

              <p className=" text-end text-[#0A112C] text-[16px] font-semibold">23/23 Attemps</p>

             </div>

            </div>

          </div>
          ))}
        </div>

       </div>

       </div>
    </div>
  );
}

export default Exam;
