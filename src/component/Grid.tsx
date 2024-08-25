"use client";
import { useEffect } from 'react';
import useStore from '../store/useStore';
import Pagination from './Pagination';

const Grid = () => {
  const { cells, cellFormats, updateCell, setSelectedCells, searchQuery, currentPage, itemsPerPage, validationErrors, setValidationRule }:any = useStore();

  useEffect(() => {
    // Example: Set validation rules for specific cells
    setValidationRule(0, { type: 'numeric' }); // Cell 0 must be numeric
    setValidationRule(1, { type: 'text', pattern: '^[a-zA-Z]+$' }); // Cell 1 must be text-only with letters
  }, [setValidationRule]);

  const handleCellChange = (index:any, value:any) => {
    updateCell(index, value);
  };

  const handleCellClick = (index:any) => {
    setSelectedCells([index]);
  };

  const filteredCells = cells
    .map((cell:any, index:any) => ({ value: cell, index }))
    .filter((cell:any) => cell.value.includes(searchQuery));

  const cellsToRender = searchQuery ? filteredCells : cells.map((value:any, index:any) => ({ value, index }));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCells = cellsToRender.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <div className="grid grid-cols-10 gap-1 px-10">
      {cells.map((cell:any, index:any) => (
        <div key={index} style={{ position: 'relative' }}>
          <input
            value={cell}
            onChange={(e) => handleCellChange(index, e.target.value)}
            onClick={() => handleCellClick(index)}
            type="text"
            style={{ 
              fontSize: cellFormats[index]?.fontSize || '16px',
              textAlign: cellFormats[index]?.alignment || 'left',
              borderColor: validationErrors[index] ? 'red' : 'white',
              borderWidth: '1px',
              backgroundColor: 'grey',
              color: 'white',
              padding: '0.5rem',
              display: 'block',
              width: '100%',
              boxSizing: 'border-box',
            }}
            onFocus={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = 'black';
            }}
            onBlur={(e) => {
              e.target.style.backgroundColor = 'grey';
              e.target.style.color = 'white';
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
      <Pagination/>
    </div>
  );
};

export default Grid;
