import React from 'react'

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center py-20 space-y-4">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-200 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-500 border-t-transparent animate-spin rounded-full"></div>
      </div>
      <p className="text-gray-500 font-medium animate-pulse">Loading amazing photos...</p>
    </div>
  )
}

export default Loader
