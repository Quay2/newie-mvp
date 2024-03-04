import React from "react";
import Image from 'next/image'; // Import the Image component from next/image
import logo from "C:/Users/JQuay/newie-mvp/public/Logo.svg"; // Import the logo file
const Sidebar = () => {
  return (
    <aside className="sidebar" style={{backgroundColor: 'black', color: 'white'}}>
      <div className="flex flex-col items-center justify-between h-full">
        <div className="sidebar-logo mb-8 flex-1 flex items-center justify-center">
          <Image className="p-7" src={logo} alt="Logo" /> {/* Use the imported logo with the Image component */}
        </div>
        <nav className="sidebar-nav flex-1 flex justify-center items-center">
          <ul className="flex flex-col items-center justify-center h-full">
            {/* List items with icons and links flexed */}
            <li className="sidebar-nav_element p-6 flex justify-center"><a href="#" className="flex gap-4"><Image src="logo" className="icon"/> Item 1</a></li>
            <li className="sidebar-nav_element p-6 flex justify-center"><a href="#" className="flex gap-4"><Image src="logo" className="icon"/> Item 2</a></li>
            <li className="sidebar-nav_element p-6 flex justify-center"><a href="#" className="flex gap-4"><Image src="logo" className="icon"/> Item 3</a></li>
            <li className="sidebar-nav_element p-6 flex justify-center"><a href="#" className="flex gap-4"><Image src="logo" className="icon"/> Item 4</a></li>
            <li className="sidebar-nav_element p-6 flex justify-center"><a href="#" className="flex gap-4"><Image src="logo" className="icon"/> Item 5</a></li>
            <li className="sidebar-nav_element p-6 flex justify-center"><a href="#" className="flex gap-4"><Image src="logo" className="icon"/> Item 6</a></li>
            <li className="sidebar-nav_element p-6 flex justify-center"><a href="#" className="flex gap-4"><Image src="logo" className="icon"/> Item 7</a></li>
          </ul>
        </nav>
        <div className="sidebar-profile flex-1 flex items-center justify-center my-6 gap-4">
          <i className="icon">←</i>
          <span>Profile</span>
          <i className="icon">→</i>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;