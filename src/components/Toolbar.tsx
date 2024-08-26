"use client";
import useStore from "@/store/useStore";
import Search from "./Search";
import FontChange from "./FontChange";
import { MouseEvent } from "react";
import { FaAlignLeft, FaAlignCenter, FaAlignRight, FaUndo, FaRedo } from "react-icons/fa";

const Toolbar = () => {
    const { updateCellFormat, undo, redo, selectedCells}:any = useStore();

    const handleAlignmentChange = (alignment:string) => {
        updateCellFormat(selectedCells, { alignment });
      };

      const handleMouseOver = (e: MouseEvent<HTMLButtonElement>, color: string) => {
        e.currentTarget.style.backgroundColor = color;
    };

    const handleMouseOut = (e: MouseEvent<HTMLButtonElement>, color: string) => {
      e.currentTarget.style.backgroundColor = color;
  };


    
  return (
    <div className="flex gap-4 p-6 border border-gray-200 rounded-lg bg-gray-100 shadow-xl">
            <button
                onClick={() => handleAlignmentChange("left")}
                className="px-4 py-3 bg-blue-500 text-white rounded-md transition-transform duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-300"

                onMouseOver={(e) => handleMouseOver(e, "#2563eb")} // Tailwind's hover:bg-blue-600
                onMouseOut={(e) => handleMouseOut(e, "#3b82f6")}
                
            >
                <FaAlignLeft/>
            </button>
            <button
                onClick={() => handleAlignmentChange("center")}
                className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md transition-colors duration-300 ease-in-out focus:outline-none"

                onMouseOver={(e) => handleMouseOver(e, "#2563eb")} // Tailwind's hover:bg-blue-600
                onMouseOut={(e) => handleMouseOut(e, "#3b82f6")}
                onFocus={(e) => (e.currentTarget.style.boxShadow = "0 0 0 4px rgba(156, 163, 175, 0.3)")}
                
            >
                <FaAlignCenter/>
            </button>
            <button
                onClick={() => handleAlignmentChange("right")}
                className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md transition-colors duration-300 ease-in-out focus:outline-none"

                onMouseOver={(e) => handleMouseOver(e, "#2563eb")} // Tailwind's hover:bg-blue-600
                onMouseOut={(e) => handleMouseOut(e, "#3b82f6")}
                onFocus={(e) => (e.currentTarget.style.boxShadow = "0 0 0 4px rgba(156, 163, 175, 0.3)")}
               
            >
                <FaAlignRight/>
            </button>
            <button
                onClick={undo}
                                className="px-4 py-2 bg-[#6b7280] text-white rounded-md shadow-md transition-colors duration-300 ease-in-out focus:outline-none"

                onMouseOver={(e) => handleMouseOver(e, "#4b5563")} // Tailwind's hover:bg-gray-600
                onMouseOut={(e) => handleMouseOut(e, "#6b7280")}
                onFocus={(e) => (e.currentTarget.style.boxShadow = "0 0 0 4px rgba(156, 163, 175, 0.3)")} // Tailwind's focus:ring-2 focus:ring-gray-300
                
            >
                <FaUndo/>
            </button>
            <button
                onClick={redo}
                className="px-4 py-2 bg-[#6b7280] text-white rounded-md shadow-md transition-colors duration-300 ease-in-out focus:outline-none"

                onMouseOver={(e) => handleMouseOver(e, "#4b5563")} // Tailwind's hover:bg-gray-600
                onMouseOut={(e) => handleMouseOut(e, "#6b7280")}
                onFocus={(e) => (e.currentTarget.style.boxShadow = "0 0 0 4px rgba(156, 163, 175, 0.3)")} // Tailwind's focus:ring-2 focus:ring-gray-300
              
            >
                <FaRedo/>
            </button>
            <FontChange />
            <Search />
        </div>
  );
};

export default Toolbar;
