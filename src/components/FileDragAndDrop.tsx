import { useState } from "react";

export const FileDragAndDrop = () => {
    const [dragActive, setDragActive] = useState(false);
  
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragActive(true);
    };
    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()  
        setDragActive(true)}

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) =>  {
        e.preventDefault() 
        setDragActive(false)
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const {files} = e.dataTransfer;

        if (files && files.length) {
            console.log(files)
            alert(files);
        }
        setDragActive(false);
    };
  const dragStyle = dragActive ? "border-dashed border-2 border-emerald-300 bg-neutral-800" : "border-dashed border-2 border-neutral-300 "
  return (
    <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        className={`mt-5 p-20 animate-fadeIn rounded transition-all duration-300 ease-linear ${dragStyle}`}>
         <p>Drop me some files</p>
    </div>
   
  );
  };