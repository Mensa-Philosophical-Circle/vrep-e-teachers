import React , {useState , useEffect} from "react";
import { useWindowResize } from "../../util/windowResize";
import { FaRegImage } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoTrashOutline } from "react-icons/io5";
import { RiAddBoxFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";
import { deleteExamOpen } from "../../redux/Slices/DeleteExamSlice";

const ExamQuistion = ({numOfQuistions , setNumOfQuistions ,id}) => {


    const isMobile = useWindowResize();

    const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  
    const [numOfChoises, setNumOfChoises] = useState(1);


    const dispatch = useDispatch()
  
    useEffect(() => {
      if (!isMobile) {
        
        setSidebarOpen(true);
      }
    }, [isMobile]);


  return (
    <div>
    

             <div className=" relative mt-3">
                <p className=" text-[#0A112C] font-medium text-[20px]">Question {id+1}</p>

                <div className=" w-[90%] bg-[#FFFEF8] border-2 border-[#E9ECF8] h-[288px] mt-3 rounded-10 p-4">

                 <div className=' flex flex-col relative w-[90%] '>
                
                    <input className=' px-3 pr-10  h-[44px] rounded border bg-[#F6F6F6]  border-[#99A1DA]' type='text' placeholder="Question"/>
                    
                    <div className=" absolute right-[20px] top-[13px] ">
                
                        <label htmlFor="file-input">
                        
                        <FaRegImage color="#364786" size={18}/>
                        
                        </label>
                        
                        <input
                        id="file-input"
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }} 
                        />
                    
                    </div>

                 </div>

                 <div className=" mt-5 h-[55%] overflow-auto">
                 {Array.from({ length: numOfChoises }, (_, i) => (
                    <div className="flex mb-4" key={i}>
                        <input
                        className="w-[28px] h-[28px] border border-[#8599DD] my-auto"
                        type="checkbox"
                        />
                        <p className="text-[14px] text-[#435596] font-medium my-auto ml-4">
                        Option {i + 1}
                        </p>
                        <p className="my-auto ml-20 cursor-pointer" onClick={() => setNumOfChoises(numOfChoises-1)}>
                        <IoMdClose color="#364786" />
                        </p>
                    </div>
                  ))}

                 </div>

                 <div className=" flex cursor-pointer mt-4" onClick={() => setNumOfChoises(numOfChoises+1)}>
                    
                    <input className=" w-[28px] h-[28px] border border-[#8599DD] my-auto " type='checkbox'  />

                    <p className="   ml-4 my-auto text-[14px] font-medium text-[#8599DD] ">Add Options </p>

                 </div>

                </div>
                <div>

                    <div className=" w-[48px] h-[48px] rounded-10 bg-[#FFFEF8] absolute top-[50px] right-[3vw] flex justify-center items-center cursor-pointer" onClick={() => dispatch(deleteExamOpen())}>

                        <IoTrashOutline color="#364786" size={23}/>

                    </div>

                    <div className=" w-[48px] h-[48px] rounded-10 bg-[#FFFEF8] absolute top-[110px] right-[3vw] flex justify-center items-center cursor-pointer" onClick={() => setNumOfQuistions(numOfQuistions+1)}>

                        <RiAddBoxFill  color="#364786" size={23}/>

                    </div>
                </div>
                
                </div>

    
    </div>
  )
}

export default ExamQuistion