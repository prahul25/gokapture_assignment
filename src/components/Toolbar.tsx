"use client";
import useStore from "@/store/useStore";
import Search from "./Search";
import FontChange from "./FontChange";
import { MouseEvent } from "react";

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
    <div style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
            <button
                onClick={() => handleAlignmentChange("left")}
                style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#dc2626", // Tailwind's bg-red-600
                    color: "white",
                    borderRadius: "0.25rem",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Tailwind's shadow-md
                    transition: "background-color 0.3s ease-in-out",
                    outline: "none",
                }}
                onMouseOver={(e) => handleMouseOver(e, "#2563eb")} // Tailwind's hover:bg-blue-600
                onMouseOut={(e) => handleMouseOut(e, "#dc2626")}
                onFocus={(e) => (e.currentTarget.style.boxShadow = "0 0 0 4px rgba(156, 163, 175, 0.3)")}
                
            >
                Left
            </button>
            <button
                onClick={() => handleAlignmentChange("center")}
                style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#3b82f6", // Tailwind's bg-blue-500
                    color: "white",
                    borderRadius: "0.25rem",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Tailwind's shadow-md
                    transition: "background-color 0.3s ease-in-out",
                    outline: "none",
                }}
                onMouseOver={(e) => handleMouseOver(e, "#2563eb")} // Tailwind's hover:bg-blue-600
                onMouseOut={(e) => handleMouseOut(e, "#3b82f6")}
                onFocus={(e) => (e.currentTarget.style.boxShadow = "0 0 0 4px rgba(156, 163, 175, 0.3)")}
                
            >
                Center
            </button>
            <button
                onClick={() => handleAlignmentChange("right")}
                style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#3b82f6", // Tailwind's bg-blue-500
                    color: "white",
                    borderRadius: "0.25rem",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Tailwind's shadow-md
                    transition: "background-color 0.3s ease-in-out",
                    outline: "none",
                }}
                onMouseOver={(e) => handleMouseOver(e, "#2563eb")} // Tailwind's hover:bg-blue-600
                onMouseOut={(e) => handleMouseOut(e, "#3b82f6")}
                onFocus={(e) => (e.currentTarget.style.boxShadow = "0 0 0 4px rgba(156, 163, 175, 0.3)")}
               
            >
                Right
            </button>
            <button
                onClick={undo}
                style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#6b7280", // Tailwind's bg-gray-500
                    color: "white",
                    borderRadius: "0.25rem",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Tailwind's shadow-md
                    transition: "background-color 0.3s ease-in-out",
                    outline: "none",
                }}
                onMouseOver={(e) => handleMouseOver(e, "#4b5563")} // Tailwind's hover:bg-gray-600
                onMouseOut={(e) => handleMouseOut(e, "#6b7280")}
                onFocus={(e) => (e.currentTarget.style.boxShadow = "0 0 0 4px rgba(156, 163, 175, 0.3)")} // Tailwind's focus:ring-2 focus:ring-gray-300
                
            >
                Undo
            </button>
            <button
                onClick={redo}
                style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#6b7280", // Tailwind's bg-gray-500
                    color: "white",
                    borderRadius: "0.25rem",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Tailwind's shadow-md
                    transition: "background-color 0.3s ease-in-out",
                    outline: "none",
                }}
                onMouseOver={(e) => handleMouseOver(e, "#4b5563")} // Tailwind's hover:bg-gray-600
                onMouseOut={(e) => handleMouseOut(e, "#6b7280")}
                onFocus={(e) => (e.currentTarget.style.boxShadow = "0 0 0 4px rgba(156, 163, 175, 0.3)")} // Tailwind's focus:ring-2 focus:ring-gray-300
              
            >
                Redo
            </button>
            <FontChange />
            <Search />
        </div>
  );
};

export default Toolbar;
