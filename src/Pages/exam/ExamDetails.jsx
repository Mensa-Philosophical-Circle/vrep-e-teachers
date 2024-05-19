import React , {useState , useEffect} from "react";
import { useWindowResize } from "../../util/windowResize";
import Sidebar from "../../components/sidebar";
import { useSelector , useDispatch } from "react-redux";
import { cancelExamOpen } from "../../redux/Slices/CancleExamPopupSlice";
import CancleExamPopup from "./CancleExamPopup";
import { useNavigate } from "react-router-dom";
function ExamDetails() {
 
  const isMobile = useWindowResize();

  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const CancelExam =useSelector((state)=>state.cancelExam.value)
  const CreateOREdit = useSelector((state)=>state.createOrEdit.value)

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
    <div >
      
      <div className=" flex max-lg:block bg-background">

      {/* pop up */}


      <div className={`w-screen flex justify-center items-center h-screen bg-[rgba(133,153,221,0.5)] ${CancelExam?'translate-y-[0vh]':'translate-y-[-100vh]'}   fixed top-0 z-50 bgfi`} style={{backdropFilter: `blur(10px)`}} >

       <div className={` w-full h-full flex justify-center items-center ${CancelExam?'translate-y-[0vh]':'translate-y-[-100vh]'} transition-all ease-in-out duration-500 delay-100`}>

          <div className={`w-[50%] h-[60%] rounded bg-white p-3  `}>

            <CancleExamPopup/>

          </div>
        </div>

      </div>

       <div className="  max-lg:hidden  w-[400px]  h-screen ">
           
        <Sidebar isOpen={sidebarOpen} handleToggle={handleToggle} />

       </div>
           

       <div className=" py-5 pr-5 pl-3 w-full flex justify-between ">
         
         <div className=" w-full h-full bg-white p-3  rounded-10 flex justify-center items-center">
             

            <div>

                <h1 className=" text-[20px] text-[#0A112C] font-semibold text-center">{CreateOREdit?'Create Exam':'Edit Exam'}</h1>

                <div>

                <div className=' flex flex-col ml-auto my-[14px]'>
                
                    <label className=' text-[14px] font-medium font-poppins text-[#8599DD] mb-1'>Subject  :</label>
                    <select className=' px-3 w-[544px] h-[44px] rounded border bg-[#F6F6F6]  border-[#99A1DA]'>

                        <option key="1" selected disabled>
                            Subject
                        </option>
                        <option key="2" value="Grade 1">
                            Math
                        </option>
                        <option key="3" value="Grade 2">
                            Pyh
                        </option>
                        <option key="4" value="Grade 3">
                            Chm
                        </option>

                    </select>
                </div>

                <div className='ml-auto flex flex-col my-[14px]'>
                
                    <label className=' text-[14px] font-medium font-poppins text-[#8599DD] mb-1'>Score Per Question :</label>
                    <input className=' px-3 w-[544px] h-[44px] rounded border bg-[#F6F6F6]  border-[#99A1DA]' type='number'/>
                    
                </div>

                <div className=" flex justify-between w-full">

                    <div className=' flex flex-col my-[14px]'>
                    
                    <label className=' text-[14px] font-medium font-poppins text-[#8599DD] mb-1'>Start Time :</label>
                    <input className=' px-3 w-[242px] h-[44px] rounded border bg-[#F6F6F6]  border-[#99A1DA]' type='time'/>
                    
                    </div>

                    <div className=' flex flex-col my-[14px]'>
                    
                    <label className=' text-[14px] font-medium font-poppins text-[#8599DD] mb-1'>End Time :</label>
                    <input className=' px-3 w-[242px] h-[44px] rounded border bg-[#F6F6F6]  border-[#99A1DA]' type='time'/>
                    
                    </div>

                </div>


                <div className=" flex justify-between w-full">

                    <div className=' flex flex-col my-[14px]'>
                    
                    <label className=' text-[14px] font-medium font-poppins text-[#8599DD] mb-1'>Duration :</label>
                    <input className=' px-3 w-[242px] h-[44px] rounded border bg-[#F6F6F6]  border-[#99A1DA]' type='time'/>
                    
                    </div>

                    <div className=' flex flex-col my-[14px]'>
                    
                    <label className=' text-[14px] font-medium font-poppins text-[#8599DD] mb-1'>Date :</label>
                    <input className=' px-3 w-[242px] h-[44px] rounded border bg-[#F6F6F6]  border-[#99A1DA]' type='date'/>
                    
                    </div>

                </div>
                    

                <div className=" flex justify-between w-full mt-4">

                    <div className=' flex flex-col my-[14px]'>
                    
                    <button className=" w-[240px] border-2 border-[#364786] h-[48px] rounded bg-[white] font-semibold text-[#364786] text-[16px]" onClick={() => dispatch(cancelExamOpen())}>Cancel</button>

                    </div>

                    <div className=' flex flex-col my-[14px]'>
                    
                    <button className=" w-[240px] h-[48px] rounded bg-[#364786] font-semibold text-white text-[16px]" onClick={() => navigate('/exam/create-exam')}>Continue</button>

                    </div>

                </div>

                </div>

            </div>

         </div>

       </div>

       </div>
    </div>
  );
}

export default ExamDetails;
