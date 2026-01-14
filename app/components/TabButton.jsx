import React from 'react'




 const TabButton = ({active , selectTab, children}) => {
    const buttonClass = active ? "text-white": "text-blue-500"
  return (
    <button onClick={selectTab} className="group">
      <p className={`mr-3 font-semibold ${buttonClass}`}>
        {children}
      </p>
      
      <div
        className={`h-1 bg-blue-500 mt-2 mr-3 transition-all duration-500 ease-in-out ${active ? "w-[calc(100%-0.75rem)]" : "w-0 group-hover:w-[calc(100%-0.75rem)]"}`}
      ></div>
    </button>
  )
}
export default TabButton
