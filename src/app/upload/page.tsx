'use client'

import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer  from "../components/footer";

import UploadSection from "../components/Upload";

const Upload = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="min-h-screen text-gray-300">
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className="bg-custom-section pt-28 md:pl-72 p-8">
        <UploadSection></UploadSection>
        <Footer></Footer>
      </div>
    </div>
  );
};


export default Upload;