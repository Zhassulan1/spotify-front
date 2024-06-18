import React, { useState } from "react";
import Footer  from "../components/footer";
// import { ArtistsSection } from "../components/ArtistsSection";

const Artists = () => {
  return (
    <div className="min-h-screen text-gray-300">
      <div className="bg-custom-section pt-28 md:pl-72 p-8">
        {/* <ArtistsSection></ArtistsSection> */}
        <Footer></Footer>
      </div>
    </div>
  );
};


export default Artists;