import React , {useState , useEffect} from "react";
import { Link } from "react-router-dom";
import { useWindowResize } from "../../util/windowResize";
import Sidebar from "../../components/sidebar";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import pic from '../../assets/student-profile.png'
import { ResultsExamsData } from "../../util/ResultsExamData";
import { ResultsTermData } from "../../util/ResultsTestData";
import { useDispatch , useSelector } from "react-redux";

const TestResults = () => {

  const isMobile = useWindowResize();

  const [dropMenu, setDropMenu] = useState(false);

  const WhichTerm = useSelector((state) => state.whichTerm.value )

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

      <div className=" flex max-lg:block bg-background h-screen overflow-hidden">

       <div className="  max-lg:hidden  w-[400px]  h-screen ">
           
        <Sidebar isOpen={sidebarOpen} handleToggle={handleToggle} />

       </div>

       <div className=" py-5 pr-5 pl-3 w-full">
       
          <div className=" flex justify-between  w-full mb-5">

            <div className="  w-[28%] h-[48px] rounded-10 bg-[#D4DAEE] flex justify-center items-center">
              
              <div className=" flex w-full justify-center">
                
                <p className=" text-[20px] text-[#0A112C] font-semibold">{WhichTerm}</p>
              
                <div className="  bg-[#0A112C] w-1 h-[20px] my-auto mx-3" />

                <p className=" text-[16px] text-[#364786] font-semibold my-auto">Test Results</p>

              </div>

            </div>

           <div className=' flex justify-center items-center w-[70%] my-auto  relative'>

            <input type='search' className=' w-full h-[48px] rounded-10 border border-[#8599DD] pl-[16px] py-[8px] pr-[70px]' placeholder='Search Test' />

            <span className=' absolute right-[37px] text-[28px] text-[#8599DD]'><CiSearch/></span>

          </div>

          </div>

          <div className=" w-full h-[90.5%] bg-white py-7 px-[30px]  rounded-10 ">

            <div className=" grid grid-cols-7 text-center pr-2 ">

                <div className="  text-[16px] font-semibold text-[#0A112C] h-[96px]">
                    <p className=" h-full flex justify-center items-center"><span>Photo</span></p>
                </div>
                
                <div className=" col-span-2 text-[16px] font-semibold text-[#0A112C] h-[96px] items-center">
                
                    <p className=" h-full flex justify-center items-center"><span>Name</span></p>
                
                </div>
                <div className="  text-[16px] font-semibold text-[#0A112C] h-[96px] flex justify-center">

                    <div className=" my-auto w-full">
                        
                        <p>Subject</p>

                        <div className=" w-[95%] mx-auto h-[32px] rounded-[6px] border border-[#99A1DA] bg-[#F6F6F6] mt-4 cursor-pointer relative" onClick={() => setDropMenu(!dropMenu)} >

                            <p className="flex w-full justify-around h-full"><span  className=" my-auto  text-[14px] text-[#435596] font-medium">Math</span> <span className=" my-auto  text-[#435596] "><IoIosArrowDown size={15}/></span></p>
                            {dropMenu&&
                            <div className=" h-[100px] w-[100%] rounded-[6px] bg-[#F6F6F6] absolute top-[32px] flex flex-col justify-around text-[14px] text-[#435596] font-medium">

                                <p>jan</p>
                                <p>feb</p>
                                <p>mar</p>

                            </div>
                            }
                        </div>
                        
                    
                    </div>
                
                </div>

                <div className="  text-[16px] font-semibold text-[#0A112C] h-[96px] flex justify-center">
                
                  <div className=" my-auto w-full">

                    <p>Welcome Test</p>
                    <p className=" text-[14px] font-medium  mx-auto font-poppins  rounded-[6px] text-[#435596] mt-4 h-[32px] w-[45px] bg-[#F6F6F6] border border-[#99A1DA] flex justify-center items-center "><span>10</span></p>

                  </div>
                                  
                </div>
                <div className="  text-[16px] font-semibold text-[#0A112C] h-[96px] flex justify-center">
                
                  <div className=" my-auto w-full">

                    <p>Mid-Term Test</p>
                    <p className=" text-[14px] font-medium  mx-auto font-poppins  rounded-[6px] text-[#435596] mt-4 h-[32px] w-[45px] bg-[#F6F6F6] border border-[#99A1DA] flex justify-center items-center "><span>30</span></p>

                  </div>                
                </div>

                <div className="  text-[16px] font-semibold text-[#0A112C] h-[96px] flex justify-center">
                
                  <div className=" my-auto w-full">

                    <p>Overall</p>
                    <p className=" text-[14px] font-medium font-poppins text-[#435596] mt-4 h-[32px] flex justify-center items-center "><span>40</span></p>

                  </div> 

                </div>

                <div className=" overflow-auto col-span-9 grid grid-cols-7 h-[62vh] pr-3 -mr-[1.3vw] ">
                      {ResultsTermData.map((RXD , id) => (<>
                        <div className={` ${id%2===0&& 'bg-[#E9ECF8]'} h-[52px] w-full flex justify-center items-center`}>
                          
                          <img className="  w-[40px] h-[40px] rounded-360 object-cover" src={RXD.pic} alt="" />

                        </div>

                        <div className={`${id%2===0&& 'bg-[#E9ECF8]'} h-[52px] w-full flex justify-center items-center col-span-2`}>

                          <p className="  text-[14px] font-[500]  text-[#000000]">{RXD.name}</p>

                        </div>

                        <div className={`${id%2===0&& 'bg-[#E9ECF8]'} h-[52px] w-full flex justify-center items-center `}>

                          <p className="  text-[14px] font-[500]  text-[#000000]">{RXD.subject}</p>

                        </div>


                        <div className={`${id%2===0&& 'bg-[#E9ECF8]'} h-[52px] w-full flex justify-center items-center `}>

                          <p className=" text-[14px] font-medium  mx-auto font-poppins  rounded-[6px] text-[#435596]  h-[32px] w-[45px] bg-[#F6F6F6] border border-[#99A1DA] flex justify-center items-center "><span>{RXD.welcomeTest}</span></p>

                        </div>


                        <div className={`${id%2===0&& 'bg-[#E9ECF8]'} h-[52px] w-full flex justify-center items-center `}>

                          <p className=" text-[14px] font-medium  mx-auto font-poppins  rounded-[6px] text-[#435596]  h-[32px] w-[45px] bg-[#F6F6F6] border border-[#99A1DA] flex justify-center items-center "><span>{RXD.midTermTest}</span></p>

                        </div>


                        <div className={`${id%2===0&& 'bg-[#E9ECF8]'} mb-2  h-[52px] w-full flex justify-center items-center `}>

                          <p className="  text-[14px] font-[500]  text-[#000000]">{RXD.overall}</p>

                        </div>
                        
                        </>))}
                </div>


            </div>

          </div>

       </div>
       
      </div>

    </div>
  );
};

export default TestResults;
