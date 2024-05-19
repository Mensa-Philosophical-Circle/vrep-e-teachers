import React , {useState , useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useWindowResize } from "../../util/windowResize";
import Sidebar from "../../components/sidebar";
import { termsExams } from "../../util/TermsPageData";
import { CiSearch } from "react-icons/ci";
import { useDispatch , useSelector } from "react-redux";
import { selectWhichTerm } from "../../redux/Slices/WhichTermSlice";

const Terms = () => {

  const isMobile = useWindowResize();

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  function handleClick (num)  {

    navigate(`/results/terms/${num}`)

  }
  
  return (
    <div>

      <div className=" flex max-lg:block bg-background">

       <div className="  max-lg:hidden  w-[400px]  h-screen ">
           
        <Sidebar isOpen={sidebarOpen} handleToggle={handleToggle} />

       </div>

       <div className=" py-5 pr-5 pl-3 w-full">
       
          <div className=" flex justify-between  w-full mb-5">

            <div className="  w-[28%] h-[48px] rounded-10 bg-[#D4DAEE] flex justify-center items-center">

              <p className=" mr-[50%] text-[20px] text-[#0A112C] font-semibold"> {WhichTerm}</p>

            </div>

           <div className=' flex justify-center items-center w-[70%] my-auto  relative'>

            <input type='search' className=' w-full h-[48px] rounded-10 border border-[#8599DD] pl-[16px] py-[8px] pr-[70px]' placeholder='Search Class' />

            <span className=' absolute right-[37px] text-[28px] text-[#8599DD]'><CiSearch/></span>

          </div>

          </div>

          <div className=" w-full h-[90%] bg-white p-3  rounded-10 flex justify-center items-center">

            <div className=" flex justify-around w-full ">
              {termsExams.map((Term) => (
                
                <div className=" flex flex-col justify-between" >

                <div className=" w-[320px] h-[344px] rounded-10 relative mb-5 ">

                  <img className=" w-full h-full object-cover" src={Term.pic} alt=" "/>
                  
                  <div className="  w-full h-[67px] rounded-b-10 bg-[rgba(233,236,248,0.8)] z-10 absolute bottom-0 flex justify-center items-center ">

                    <p className=" text-[18px]  font-semibold  text-[#0A112C]">{Term.term}</p>
                    
                  </div>

                </div>

                <div>

                    <button className=" w-[320px] h-[48px] mt-5 rounded border-2 border-[#364786] text-[16px] font-semibold text-[#364786]" onClick={() => handleClick(Term.link)}>Record Results</button>

                </div>
                
                </div>
                ))}

            </div>

          </div>

       </div>
       
      </div>

    </div>
  );
};

export default Terms;
