import { useState } from "react"


export default function HeaderSite(){


    const [currentTime, setCurrentTime] = useState(new Date().toISOString().slice(0, 10)) 

    return (
         <header className="header">
    <div className="logo">
      <span className="course">React Workshop - {currentTime}</span>
    </div>
  </header>
    )

}