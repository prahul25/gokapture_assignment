import useStore from '@/store/useStore';
import React from 'react'

function FontChange() {
    const { updateCellFormat,selectedCells  } = useStore();
const handleFontSizeChange = (fontSize) => {
        updateCellFormat(selectedCells, { fontSize });
      };
  return (
    <input
        type="number"
        onChange={(e) => handleFontSizeChange(`${e.target.value}px`)}
        style={{
          border: "1px solid #d1d5db",
          padding: "0.5rem",
          borderRadius: "0.25rem",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          transition: "box-shadow 0.3s ease-in-out",
          outline: "none",
          color:'black'
        }}
        onFocus={(e) => (e.target.style.boxShadow = "0 0 0 4px rgba(59, 130, 246, 0.3)")} 
        onBlur={(e) => (e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)")}
        placeholder="Font Size"
      />
  )
}

export default FontChange