import React , {useState , useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useWindowResize } from "../../util/windowResize";
import Sidebar from "../../components/sidebar";
import { Terms } from "../../util/ResultsTermsData";
import { useDispatch } from "react-redux";
import { selectWhichTerm } from "../../redux/Slices/WhichTermSlice";
const Result = () => {

  const isMobile = useWindowResize();

  
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

    dispatch(selectWhichTerm(num))

    navigate('/results/terms')

  }
  return (
    <div>

      <div className=" flex max-lg:block bg-background">

       <div className="  max-lg:hidden  w-[400px]  h-screen ">
           
        <Sidebar isOpen={sidebarOpen} handleToggle={handleToggle} />

       </div>
           

       <div className=" py-5 pr-5 pl-3 w-full flex justify-between ">
       
          <div className=" w-full h-full bg-white p-3  rounded-10 flex justify-center items-center">

            <div className=" flex justify-around w-full ">
              {Terms.map((Term) => (

                <div className=" w-[320px] h-[344px] rounded-10 relative cursor-pointer "  onClick={() => handleClick(Term.term)}>

                  <img className=" w-full h-full object-cover" src={Term.pic} alt=" "/>
                  
                  <div className="  w-full h-[67px] rounded-b-10 bg-[rgba(233,236,248,0.8)] z-10 absolute bottom-0 flex justify-center items-center ">

                    <p className=" text-[18px]  font-semibold  text-[#0A112C]">{Term.term}</p>
                    
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

export default Result;
