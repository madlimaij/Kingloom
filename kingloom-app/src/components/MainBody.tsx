import React from 'react'

interface MainBodyProps {
    children: React.ReactNode;
  }

const MainBody:React.FC<MainBodyProps> = ({children}) => {
  return (
    <div className="main-body">{children}</div>
  )
}

export default MainBody