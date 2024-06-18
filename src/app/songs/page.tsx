import React, { useState } from "react";
import Footer  from "../components/footer";
import { SongsSection } from "../components/SongsSection";

const Songs = () => {
  return (
    <div className="min-h-screen text-gray-300">
      <div className="bg-custom-section pt-28 md:pl-72 p-8">
        <SongsSection></SongsSection>
        <Footer></Footer>
      </div>
    </div>
  );
};


export default Songs;