'use client'

import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer  from "./components/footer";

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="min-h-screen text-gray-300">
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className="min-w-4 bg-custom-section m-10 p-8 pt-28 md:pl-72 p-8 ">
        <a className="p-4" href="/upload">Upload Song</a>
        <a className="p-4" href="/songs">All Songs</a>
        <a className="p-4" href="/artists">Artists</a>
        <Footer></Footer>
      </div>
    </div>
  );
};


export default Home;