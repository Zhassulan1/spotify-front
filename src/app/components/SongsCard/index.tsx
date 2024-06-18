import React from "react";
import { RiPlayFill } from "react-icons/ri";

export const SongsCard = ({ id, title, author, link }: { id: string, title: string, author: string, link: string }) => {
  return (
    <a
      href={`songs/${id}`}
      className="bg-main-lg rounded-lg p-4 hover:bg-main-lgHover transition-all group w-60"
    >
      <div className="mb-4 relative flex justify-center items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8c3sEbgP6Z2jERHm7hNqfWwaXachxXdxOkg&s"
          alt="Album"
          className="w-48 h-48 rounded-xl drop-shadow-2xl"
        />
        <a
          href={link} 
          className="p-3 text-3xl bg-main-green rounded-full text-gray absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 ease-out bg-[#65D46E] text-black"
        >
          <RiPlayFill />
          
        </a>
      </div>
      <div>
        <h5 className="font-medium text-gray-100 mb-2">{title}</h5>
        <p className="text-gray-400 text-sm">{author}</p>
      </div>
    </a>
  );
};
