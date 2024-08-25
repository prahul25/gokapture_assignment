"use client";
import useStore from "@/store/useStore";
import Search from "./Search";
import FontChange from "./FontChange";

const Toolbar = () => {
    const { updateCellFormat, undo, redo, selectedCells, setSelectedCells, setSearchQuery, currentPage, itemsPerPage  } = useStore();

    const handleAlignmentChange = (alignment) => {
        updateCellFormat(selectedCells, { alignment });
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
        onMouseOver={(e) => (e.target.style.backgroundColor = "#2563eb")} // Tailwind's hover:bg-blue-600
        onMouseOut={(e) => (e.target.style.backgroundColor = "#dc2626")}
        onFocus={(e) => (e.target.style.boxShadow = "0 0 0 4px rgba(59, 130, 246, 0.3)")} // Tailwind's focus:ring-2 focus:ring-blue-300
        onBlur={(e) => (e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)")}
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
        onMouseOver={(e) => (e.target.style.backgroundColor = "#2563eb")} // Tailwind's hover:bg-blue-600
        onMouseOut={(e) => (e.target.style.backgroundColor = "#3b82f6")}
        onFocus={(e) => (e.target.style.boxShadow = "0 0 0 4px rgba(59, 130, 246, 0.3)")} // Tailwind's focus:ring-2 focus:ring-blue-300
        onBlur={(e) => (e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)")}
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
        onMouseOver={(e) => (e.target.style.backgroundColor = "#2563eb")} // Tailwind's hover:bg-blue-600
        onMouseOut={(e) => (e.target.style.backgroundColor = "#3b82f6")}
        onFocus={(e) => (e.target.style.boxShadow = "0 0 0 4px rgba(59, 130, 246, 0.3)")} // Tailwind's focus:ring-2 focus:ring-blue-300
        onBlur={(e) => (e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)")}
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
        onMouseOver={(e) => (e.target.style.backgroundColor = "#4b5563")} // Tailwind's hover:bg-gray-600
        onMouseOut={(e) => (e.target.style.backgroundColor = "#6b7280")}
        onFocus={(e) => (e.target.style.boxShadow = "0 0 0 4px rgba(156, 163, 175, 0.3)")} // Tailwind's focus:ring-2 focus:ring-gray-300
        onBlur={(e) => (e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)")}
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
        onMouseOver={(e) => (e.target.style.backgroundColor = "#4b5563")} // Tailwind's hover:bg-gray-600
        onMouseOut={(e) => (e.target.style.backgroundColor = "#6b7280")}
        onFocus={(e) => (e.target.style.boxShadow = "0 0 0 4px rgba(156, 163, 175, 0.3)")} // Tailwind's focus:ring-2 focus:ring-gray-300
        onBlur={(e) => (e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)")}
      >
        Redo
      </button>
      <FontChange/>
     <Search/>
    
    </div>
  );
};

export default Toolbar;
