import { BsClockHistory } from "react-icons/bs";
import { MdClass } from "react-icons/md";
import { MdOutlineSubject } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { PiChalkboardTeacherLight } from "react-icons/pi";
import { MdEventAvailable } from "react-icons/md";
import { BiHomeAlt } from "react-icons/bi";






export const sidebarData = (currentLocation) => [
  { title: "dashboard", icon: <BiHomeAlt size={24} color={currentLocation.includes('dashboard') ? 'black' : 'white'} /> },
  { title: "pupils", icon: <PiStudent size={24} color={currentLocation.includes('pupils') ? 'black' : 'white'} /> },
  { title: "teachers", icon: <PiChalkboardTeacherLight size={24} color={currentLocation.includes('teachers') ? 'black' : 'white'} /> },
  { title: "events", icon: <MdEventAvailable size={24} color={currentLocation.includes('events') ? 'black' : 'white'}/> },
  { title: "results", icon: <BsClockHistory size={24} color={currentLocation.includes('latest activity') ? 'black' : 'white'}/> },
  { title: "classes", icon: <MdClass size={24} color={currentLocation.includes('classes') ? 'black' : 'white'}/> },
  { title: "subjects", icon: <MdOutlineSubject size={24} color={currentLocation.includes('subjects') ? 'black' : 'white'}/> },
];
