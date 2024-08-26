"use client";
import { useEffect } from "react";
import useStore from "../store/useStore";
import Pagination from "./Pagination";

interface Cell {
  value: string;
  index: number;
}

const Grid = () => {
  const { 
    cells, 
    cellFormats, 
    updateCell, 
    setSelectedCells, 
    searchQuery, 
    currentPage, 
    itemsPerPage, 
    validationErrors, 
    setValidationRule 
  }:any = useStore();


  const handleCellChange = (index: number, value: string) => {
    updateCell(index, value);
  };

  const handleCellClick = (index: number) => {
    setSelectedCells([index]);
  };

  // Filter cells based on search query
  const filteredCells: Cell[] = cells
    .map((cell:number, index:number) => ({ value: cell, index }))
    .filter((cell:any) => cell.value.toLowerCase().includes(searchQuery.toLowerCase()));

  // Determine cells to render based on search query and pagination
  const cellsToRender: Cell[] = searchQuery ? filteredCells : cells.map((value:number, index:number) => ({ value, index }));

  // Calculate start index and get paginated cells
  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const paginatedCells: Cell[] = cellsToRender.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {paginatedCells.map(({ value: cell, index }) => (
          <div key={index} style={{ position: 'relative' }}>
            <input
              value={cell}
              onChange={(e) => handleCellChange(index, e.target.value)}
              onClick={() => handleCellClick(index)}
              type="text"
              style={{ 
                fontSize: cellFormats[index]?.fontSize || '16px',
                textAlign: cellFormats[index]?.alignment || 'left',
                borderColor: validationErrors[index] ? 'red' : '#ccc',
                borderWidth: '1px',
                borderRadius: '4px',
                backgroundColor: '#fff',
                color: '#000',
                padding: '0.5rem',
                width: '100%',
                boxSizing: 'border-box',
                transition: 'background-color 0.3s ease, border-color 0.3s ease',
              }}
              onFocus={(e) => {
                e.target.style.backgroundColor = '#f0f0f0';
                e.target.style.borderColor = '#007BFF';
              }}
              onBlur={(e) => {
                e.target.style.backgroundColor = '#fff';
                e.target.style.borderColor = validationErrors[index] ? 'red' : '#ccc';
              }}
            />
            {validationErrors[index] && (
              <span style={{
                color: 'red',
                fontSize: '12px',
                position: 'absolute',
                top: '100%',
                left: '0',
                marginTop: '2px',
              }}>
                {validationErrors[index]}
              </span>
            )}
          </div>
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default Grid;
