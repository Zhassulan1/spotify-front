import React from "react";
import { SongsCard } from "../SongsCard";
import axios from "axios";

const BACKEND_URL = 'http://localhost:3001/api/v1/';
const PLAYLIST = '6671e92fd6f509857799f5ed';

export const SongsSection = async () => {
  const songs = (await axios.get(`${BACKEND_URL}playlists/${PLAYLIST}`)).data.songs;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-8">
      </div>
      <div className="horizontal-scroll grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {songs.map((song: any, index: any) => (
          <SongsCard
            key={index}
            id={song._id}
            title={song.title}
            author={song.author}
            link={song.link}
            />
        ))}
      </div>
    </div>
  );
};
