"use client"

import { useState } from "react";

const BACKEND_URL = 'http://16.170.146.70:3001/api/v1/';
const PLAYLIST = '6671e92fd6f509857799f5ed';

export default function Page({ params }: {params: {id: string}}) {
    const [title, setTitle] = useState('Fuel')
    const [author, setAuthor] = useState('Metallica')
    const [year, setYear] = useState('2024')


  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const data = new FormData();
      data.set("title", title);
      data.set("year", year);
      data.set("author", author);

      console.log(title, year, author);
      const res = await fetch(
        `${BACKEND_URL}playlists/${PLAYLIST}/artists/${params.id}`,
        {
          method: "PUT",
          body: data,
        }
      );

      if (!res.ok) {
        throw new Error(await res.text());
      }
    } catch (error: any) {
      console.log(error);
    }
  };

    return (
        <div>
          <form onSubmit={onSubmit} className='flex flex-col m-auto text-green-400'>            
            <label htmlFor='title'>Enter artist title</label>
            <input 
              type="text"
              name="title"
              placeholder={title}
              onChange={(e) => {setTitle(e.target.value)}}
            />
            <label htmlFor='year'>Enter artist publication year</label>
            <input 
              type="text"
              name="year"
              placeholder={year}
              onChange={(e) => {setYear(e.target.value)}}
            />
            <label htmlFor='author'>Enter artist Author</label>
            <input 
              type="text"
              name="author"
              placeholder={author}
              onChange={(e) => {setAuthor(e.target.value)}}
            />
            <button 
              className='flex flex-col m-auto'
              type="submit"
              value=""
            >
              Upload
            </button>
          </form>
        </div>
      )
}