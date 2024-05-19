import React from 'react'
import { IoClose } from "react-icons/io5";
import { useDispatch , useSelector } from 'react-redux';
import { cancelExamClose } from '../../redux/Slices/CancleExamPopupSlice';
import { useNavigate } from 'react-router-dom';

const CancleExamPopup = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleClick() { 

    dispatch(cancelExamClose())
    navigate('/exam')
  }
  
  return (
    <div className=''>
    
        <div className=''>
            
             <div className=' w-full flex justify-end  cursor-pointer ' onClick={() => dispatch(cancelExamClose())}><p className='mr-10 mt-3 text-2xl'><IoClose/></p></div>

            <div className=' flex flex-col justify-around h-[40vh] my-10 '>

                <h1 className=' w-full text-center text-[18px] text-[#082567] font-semibold'>Are you sure to cancel?</h1>

             <div className=' w-full flex justify-center items-center my-5'>


              <button className=' mr-5 border-2 border-[#364786] w-[240px] h-[48px] rounded bg-[white] font-[16px] text-[#364786]' onClick={() => handleClick()} >Yes</button>

              <button className=' ml-5 w-[240px] h-[48px] rounded bg-[#364786] font-[16px] text-[white]'  onClick={() => dispatch(cancelExamClose())} >No</button>


             </div>
 
            </div>
        </div>
    </div>
  )
}

export default CancleExamPopup