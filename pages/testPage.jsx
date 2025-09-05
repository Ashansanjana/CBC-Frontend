import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

export function TestPage() {

    const [image,setImage]=useState(null);

    const url ="https://koxamdstouwgnwhqgfhz.supabase.co"
    const key ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtveGFtZHN0b3V3Z253aHFnZmh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcwOTQzMTksImV4cCI6MjA3MjY3MDMxOX0.ve-gxS8YUROhnJsKwNwDEahe_c_kF3PiYf57QMnon54"

    const supabase = createClient(url,key);

    function fileUpload(){
        supabase.storage.from("images").upload(image.name,image,{
            cacheControl:"3600",
            upsert:false
        }).then(()=>{
            const publicUrl = supabase.storage.from("images").getPublicUrl(image.name).data.publicUrl;
            console.log(publicUrl);
        }).catch((e)=>{
            console.log(e);
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
 