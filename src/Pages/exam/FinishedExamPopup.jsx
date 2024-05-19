import React from 'react'
import { IoClose } from "react-icons/io5";
import { useDispatch , useSelector } from 'react-redux';
import { finishedExamClose } from '../../redux/Slices/FinishedExamPopSlice';
import { useNavigate } from 'react-router-dom';

const FinishedExamPopup = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleClick() { 

    dispatch(finishedExamClose())
    navigate('/exam')
  }
  
  return (
    <div className=''>
    
        <div className=''>
            
             <div className=' w-full flex justify-end  cursor-pointer ' onClick={() => dispatch(finishedExamClose())}><p className='mr-10 mt-3 text-2xl'><IoClose/></p></div>

            <div className=' flex flex-col justify-around h-[40vh] my-10 '>

                <h1 className=' w-full text-center text-[18px] text-[#082567] font-semibold'>New Exam is Created.</h1>

             <div className=' w-full flex justify-center items-center my-5'>


              <button className='  w-[240px] h-[48px] rounded bg-[#364786] font-[16px] text-[white]'  onClick={() => handleClick()} >Go back to Exam Page</button>


             </div>
 
            </div>
        </div>
    </div>
  )
}

export default FinishedExamPopup