import React from 'react';
import { CiClock2 } from "react-icons/ci";
import teacher from '../../src/assets/images/teacher.png'



function RightSidebar() {
  return (
    <div className="h-92 w-78 bg-white flex flex-col overflow-auto rounded-20">
      <section className="px-4 py-2 w-66 h-auto flex flex-col justify-between items-center">
        <div className=" text-center w-full h-70">
          <h1 className="text-20 py-4 text-black font-semibold">Events</h1>

          <div className="rounded-10 mb-4 w-full">
            <div className=" flex flex-col justify-between items-start bg-pink py-4 px-4 rounded-t-10">
              <h2 className="text-16 text-heading font-semibold font-poppins ">
                Science Fair
              </h2>
              <span className="text-xs text-spans text-days-400 ">
                Activity Project Presentation
              </span>
            </div>
            <div className="flex flex-col justify-start items-start bg-pinklight py-2 px-4 rounded-b-10">
              <div className="flex items-center py-2">
                <CiClock2 size={24} />{" "}
                <span className="text-xs text-heading-400 px-2">3-5 PM</span>
              </div>

              <div className="flex items-center py-2">
                <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 border-1">
                  <img
                    src={teacher}
                    alt="Julie Watson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs text-heading-400 px-2">
                  Julie Watson
                </span>
              </div>
            </div>
          </div>
          <div className="rounded-10 mb-4 w-full">
            <div className=" flex flex-col justify-between items-start bg-blue py-4 px-4 rounded-t-10 ">
              <h2 className="text-16 text-heading font-semibold font-poppins ">
                Literary Carnival
              </h2>
              <span className="text-xs text-spans text-days-400 ">
                Activity: Storybook character parade
              </span>
            </div>
            <div className="flex flex-col justify-start items-start bg-bluelight py-2 px-4 rounded-b-10">
              <div className="flex items-center py-2">
                <CiClock2 size={24} />{" "}
                <span className="text-xs text-heading-400 px-2">3-5 PM</span>
              </div>

              <div className="flex items-center py-2">
              <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 border-1">
                  <img
                    src={teacher}
                    alt="Julie Watson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs text-heading-400 px-2">
                  Julie Watson
                </span>
              </div>
            </div>
          </div>
          <div className="rounded-10 mb-4 w-full">
            <div className=" flex flex-col justify-between items-start bg-yellow py-4 px-4 rounded-t-10 font-poppins">
              <h2 className="text-16 text-heading font-semibold font-poppins ">
                Sociological Debate
              </h2>
              <span className="text-xs text-spans text-days-400 ">
                Activity: Discussing Talks
              </span>
            </div>
            <div className="flex flex-col justify-start items-start bg-che py-2 px-4 rounded-b-10">
              <div className="flex items-center py-2">
                <CiClock2 size={24} />{" "}
                <span className="text-xs text-heading-400 px-2">3-5 PM</span>
              </div>

              <div className="flex items-center py-2">
              <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 border-1">
                  <img
                    src={teacher}
                    alt="Julie Watson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs text-heading-400 px-2">
                  Julie Watson
                </span>
              </div>
            </div>
          </div>
        </div>

        <button className="border-2 border-belll text-belll text-lg font-semibold font-poppins py-2 px-4 rounded-lg">
    Create New Event
</button>
      </section>
    </div>
  );
}

export default RightSidebar;
