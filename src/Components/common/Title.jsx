import React from 'react'

export default function Title(props) {



    const { ScenarioName, Vessel, DefaultTitle} = props
    
    const handleTitle = () => {
        if (Vessel != null) {
          return Vessel.id
        } 
      
        else return DefaultTitle;
      
      };


  return (
    <div className="title-box">
       <div>{ScenarioName}</div>
         <div>{handleTitle()}</div>

        
      </div>
  )
}

