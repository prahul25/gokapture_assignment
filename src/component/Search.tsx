import useStore from '@/store/useStore';
import React from 'react'

function Search() {
    const {setSearchQuery}:any = useStore()

    const handleSearchChange = (e:any) => {
        setSearchQuery(e.target.value);
      };
  return (
    <input
      type="text"
      onChange={handleSearchChange}
      placeholder="Search..."
      style={{
        padding: "0.5rem",
        borderRadius: "0.25rem",
        border: "1px solid #d1d5db",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        outline: "none",
        color:"black"
      }}
    />
  )
}

export default Search