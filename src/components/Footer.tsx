import React, { ReactElement } from 'react'

interface Props {
  
}

export default function Footer({}: Props): ReactElement {
  return (
    <footer className="wrapper flex items-center md:justify-between w-full">
      <p className="text-lg font-medium">&copy; Saman Manesh 2021</p>
      <div className="ml-auto flex items-center space-x-3">
        <div className="w-5 h-5 bg-gray-800 rounded-full"></div>
        <div className="w-5 h-5 bg-gray-800 rounded-full"></div>
      </div>
    </footer>
  )
}
