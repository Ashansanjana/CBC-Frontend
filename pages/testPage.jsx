import { useState } from "react";
import mediaUpload from "../src/utils/mediaUpload.jsx";

export function TestPage() {

    const [image,setImage]=useState(null);

    function fileUpload(){
        mediaUpload(image).then((res)=>{
            console.log("File uploaded at: ",res);
        }).catch((res)=>{
            console.log(res);
        })
    }


  return (
    <div className="w-full h-screen bg-blue-300 overflow-y-auto flex flex-col justify-center items-center gap-4 p-4">
      <input
        onChange={(e) => setImage(e.target.files[0])}    
        type="file"
        className="w-64 p-2 border rounded-md bg-white"
      />
      <button 
        onClick={fileUpload}
        className="bg-green-500 px-4 py-2 rounded-md text-white hover:bg-green-600">
        Upload
      </button>
    </div>
  );
}
 