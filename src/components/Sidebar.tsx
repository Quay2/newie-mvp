import React from "react";
import Image from 'next/image';
import logo from "/public/Logo.svg";
import Dashboard from '/public/Dashboard.svg';
import Community from '/public/Community.svg';
import Courses from '/public/Courses.svg';
import Games from '/public/Games.svg';
import Messages from '/public/Messages.svg';
import MyClass from '/public/myClass.svg';
import Settings from '/public/Settings.svg';
import Profile from '/public/profile.svg';
import vercel from '/public/vercel.svg';



const Sidebar = () => {
  return (
    <aside className="w-[22.75em] h-screen flex flex-col" style={{backgroundColor: 'black', color: 'white'}}>

      <div className="flex flex-col justify-between mx-[2.5em] my-[6.25em] h-full">
        
        <div className="flex items-center justify-center w-full h-20">
          <Image src={logo} alt="Logo" height={50}/> {/* Logo centered within the sidebar */}
               </div>

        <nav className="sidebar-nav">
          <ul className="flex flex-col justify-center h-full">
            <li className="p-6 flex sidebar-nav_element"><a href="#" className="flex gap-4"><Image src={Dashboard} alt="icon"/>Dashboard</a></li>
            <li className="p-6 flex sidebar-nav_element"><a href="#" className="flex gap-4"><Image src={Community} alt="icon"/>Community</a></li>
            <li className="p-6 flex sidebar-nav_element"><a href="#" className="flex gap-4"><Image src={Courses} alt="icon"/>Courses</a></li>
            <li className="p-6 flex sidebar-nav_element"><a href="#" className="flex gap-4"><Image src={Games} alt="icon"/>Games</a></li>
            <li className="p-6 flex sidebar-nav_element"><a href="#" className="flex gap-4"><Image src={Messages} alt="icon"/>Messages</a></li>
            <li className="p-6 flex sidebar-nav_element"><a href="#" className="flex gap-4"><Image src={MyClass} alt="icon"/>MyClass</a></li>
            <li className="p-6 flex sidebar-nav_element"><a href="#" className="flex gap-4"><Image src={Settings} alt="icon"/>Settings</a></li>
          </ul>
        </nav>



        <div className="flex items-center justify-center gap-5">
          <Image src={Profile} alt="icon"/>
          <span>Aokiy Ayo</span>
          <Image src={Settings} alt="icon"/>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;