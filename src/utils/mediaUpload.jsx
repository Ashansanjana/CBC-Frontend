import { createClient } from "@supabase/supabase-js";

    const url ="https://koxamdstouwgnwhqgfhz.supabase.co"
    const key ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtveGFtZHN0b3V3Z253aHFnZmh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcwOTQzMTksImV4cCI6MjA3MjY3MDMxOX0.ve-gxS8YUROhnJsKwNwDEahe_c_kF3PiYf57QMnon54"

    const supabase = createClient(url,key);

    export default function mediaUpload(file){
        const mediaUploadPromis = new Promise((resolve,reject)=>{

            if(file===null){
                reject("No file selected");
            }
            const timeStamp = new Date().getTime();
            const newName = timeStamp + file.name;

            supabase.storage.from("images").upload(newName,file,{
                cacheControl:"3600",
                upsert:false
             }).then(()=>{
                    const publicUrl = supabase.storage.from("images").getPublicUrl(newName).data.publicUrl;
                    console.log(publicUrl);
                    resolve(publicUrl);
             }).catch((e)=>{
                    console.log(e);
                    reject("Error occured while uploading");
        })



    })
    return mediaUploadPromis;

}