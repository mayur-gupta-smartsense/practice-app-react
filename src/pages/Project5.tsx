import React, { useState } from "react";

const PLACEHOLDER_IMAGE = "/assets/pngtree-gray-network-placeholder-png-image_3416659.jpg";
const TILE_COUNT = 500;

const Project5 = () => {
  const [pageSize, setPageSize] = useState<number>(10);
  const [num, setNum] = useState<number>(1);
  const tiles = Array.from({ length: TILE_COUNT }, (_, index) => index);
  const visibleTiles = tiles.slice(pageSize*(num-1), pageSize*num);
  const buttonNumbers = Math.ceil(TILE_COUNT / pageSize);

  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const pageSize = Number(e.target.value) 
    setPageSize(pageSize);
    setNum(1)
  };

  const paginationFired = (page: number)=>{
    setNum(page);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8">
          <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
            Project 5
          </p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-slate-900">
            Pagination
          </h1>

          <select
            value={pageSize}
            onChange={handlePageSizeChange}
            className="mt-3 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
            <option value={500}>500</option>

          </select>
        </header>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {visibleTiles.map((tile) => (
            <div
              key={tile}
              className="relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              <span className="absolute left-2 top-2 z-10 rounded-full bg-white/90 px-2 py-1 text-xs font-semibold text-slate-700 shadow">
                {tile + 1}
              </span>
              <div className="flex aspect-square items-center justify-center bg-slate-50">
                <img
                  src={PLACEHOLDER_IMAGE}
                  alt={`Placeholder ${tile + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {Array.from({ length: buttonNumbers }, (_, i) => i + 1).map((n) => {
            const isSelected = n === num
          return(
          <button
              key = { n }
              type = "button"
      className = {`flex h-10 w-10 items-center justify-center rounded-lg border border-slate-900 text-lg font-semibold shadow-sm transition focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 ${isSelected
              ? "bg-white text-slate-900"
              : "bg-slate-900 text-white hover:bg-white hover:text-slate-900"}`}
              onClick={()=>paginationFired(n)}
            >
          {n}
        </button>
        )
      })}
        </div>
      </div>
    </div>
  );
};

export default Project5;
