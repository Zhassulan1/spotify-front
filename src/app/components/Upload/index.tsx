import React, { useState } from 'react';
import './FileUploader.css';

const BACKEND_URL = 'http://16.170.146.70:3001/api/v1/';
const PLAYLIST = '6671e92fd6f509857799f5ed';

export default function UploadSection() {
  const [title, setTitle] = useState('Fuel')
  const [author, setAuthor] = useState('Metallica')
  const [year, setYear] = useState('2024')
  const [file, setFile] = useState<File>();


  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!file) {
      return;
    }

    try {
      const data = new FormData();
      data.set('song', file);
      data.set('title', title)
      data.set('year', year)
      data.set('author', author)

      const res = await fetch(`${BACKEND_URL}playlists/${PLAYLIST}/songs`, {
        method: 'POST',
        body: data
      })

      if (!res.ok) {
        throw new Error(await res.text());
      }

    } catch (error: any) {
      console.log(error);
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit} className='flex flex-col m-auto'>
        <label htmlFor='song'>Upload Song</label>
        <input
          type="file"
          name="song"
          onChange={(e) => {setFile(e.target.files?.[0])}}
        />
        <label htmlFor='title'>Enter Song title</label>
        <input 
          type="text"
          name="title"
          placeholder={title}
          onChange={(e) => {setTitle(e.target.value)}}
        />
        <label htmlFor='year'>Enter Song publication year</label>
        <input 
          type="text"
          name="year"
          placeholder={year}
          onChange={(e) => {setYear(e.target.value)}}
        />
        <label htmlFor='author'>Enter Song Author</label>
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

// export default function UploadSection({ setImageURL }: { setImageURL: (url: string) => void }) {
//     const [file, setFile] = useState('');
//     const [uploadProgress, setUploadProgress] = useState(0);
//     const [status, setStatus] = useState('');
//     const [loadedBytes, setLoadedBytes] = useState(0);
//     const [totalBytes, setTotalBytes] = useState(0);
  
//     const uploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
//       const file = event.target.files ? event.target.files[0] : null;
//       if (file) {
//         setFile(file ? URL.createObjectURL(file) : '');
//         const formData = new FormData();
//         formData.append("file", file);
  
//         axiosUploadInstance.post("/playlists/6670825976c770015c862469/songs", formData, {
//             onUploadProgress: (progressEvent) => {
//               const loaded = progressEvent.loaded;
//               const total = progressEvent.total || 0;
//               setLoadedBytes(loaded);
//               setTotalBytes(total);
//               const percent = total > 0 ? (loaded / total) * 100 : 0;
//               setUploadProgress(Math.round(percent));
//               setStatus(Math.round(percent) + "% uploaded...");
//             },
//           })
//           .then((response) => {
//             setStatus("Upload successful!");
//             setUploadProgress(100);
//             setImageURL(response.data.url);
//             console.log(response.data);
//           })
//           .catch((error) => {
//             setStatus("Upload failed!");
//             setImageURL("https://api.escuelajs.co/api/v1/files");
//             console.error(error);
//           });
//       }
//     };

//     return (
//         <div className="file-uploader-container">
//             <input type="file" name="file" onChange={uploadFile} />
//             <label>
//                 File progress: <progress value={uploadProgress} max="100" />
//             </label>
//             <p>{status}</p>
//             <p>uploaded {loadedBytes} bytes of {totalBytes}</p>
//             {file && <img src={file} alt="Preview" style={{ width: "300px", height: "100px" }} />}
//         </div>
  
//     )
// }