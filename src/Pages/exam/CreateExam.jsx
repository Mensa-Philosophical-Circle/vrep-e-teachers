import React , {useState , useEffect} from "react";
import { useWindowResize } from "../../util/windowResize";
import Sidebar from "../../components/sidebar";
import { FaRegImage } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoTrashOutline } from "react-icons/io5";
import { RiAddBoxFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";
import DeleteExamPopup from "./DeleteExamPopup";
import FinishedExamPopup from "./FinishedExamPopup";
import { deleteExamOpen } from "../../redux/Slices/DeleteExamSlice";
import { finishedExamOpen } from "../../redux/Slices/FinishedExamPopSlice";
import { cancelExamOpen } from "../../redux/Slices/CancleExamPopupSlice";
import CancleExamPopup from "./CancleExamPopup";
import ExamQuistion from "./ExamQuistion";

function CreateExam() {
 
  const isMobile = useWindowResize();

  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  const [numOfQuistions, setNumOfQuistions] = useState(1);

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const DeleteExam =useSelector((state)=>state.deleteExam.value)
  const FinishedExam = useSelector((state)=>state.finishedExam.value)
  const CancelExam = useSelector((state)=>state.cancelExam.value)


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


      <div className={`w-screen flex justify-center items-center h-screen bg-[rgba(133,153,221,0.5)] ${(DeleteExam||FinishedExam||CancelExam)?'translate-y-[0vh]':'translate-y-[-100vh]'}   fixed top-0 z-50 bgfi`} style={{backdropFilter: `blur(10px)`}} >

       <div className={` w-full h-full flex justify-center items-center ${(DeleteExam||FinishedExam||CancelExam)?'translate-y-[0vh]':'translate-y-[-100vh]'} transition-all ease-in-out duration-500 delay-100`}>
          {DeleteExam&&
          <div className={`w-[50%] h-[60%] rounded bg-white p-3  `}>

            <DeleteExamPopup
              numOfQuistions={numOfQuistions}
              setNumOfQuistions={setNumOfQuistions}
            />

          </div>
          }

          {FinishedExam&&
          <div className={`w-[50%] h-[60%] rounded bg-white p-3  `}>

            <FinishedExamPopup/>

          </div>
          }

          {CancelExam&&
          <div className={`w-[50%] h-[60%] rounded bg-white p-3  `}>

            <CancleExamPopup/>

          </div>
          }

        </div>

      </div>

       <div className="  max-lg:hidden  w-[400px]  h-screen ">
           
        <Sidebar isOpen={sidebarOpen} handleToggle={handleToggle} />

       </div>
           

       <div className=" py-5 pr-5 pl-3 w-full  ">
         
            <h1 className=" ml-3 text-[25px] font-semibold text-[#0A112C]">Create Exam</h1>

            <div className=" ml-3 my-3 relative h-[78vh] overflow-auto">
            
            {Array.from({ length: numOfQuistions }, (_, i) => (
              
              <ExamQuistion
                id={i}
                numOfQuistions={numOfQuistions}
                setNumOfQuistions={setNumOfQuistions}

              />
            
            ))}

            </div>

            <div className=" flex justify-around w-[50%] mt-4 mx-auto">

                    
                    <button className=" w-[240px] border-2 border-[#364786] h-[48px] rounded  font-semibold text-[#364786] text-[16px]" onClick={() => dispatch(cancelExamOpen())}>Cancel</button>

                    
                    <button className=" w-[240px] h-[48px] rounded bg-[#364786] font-semibold text-white text-[16px]" onClick={() => dispatch(finishedExamOpen())}>Create</button>

            </div>

       </div>

       </div>
    </div>
  );
}

export default CreateExam;
