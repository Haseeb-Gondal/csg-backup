import React, {useRef, useEffect} from 'react'

export default function Tank(props) {

    const {ClassName, Width, Height, Id, ViewBox, Safeguards: safeguards} = props

    const elementRef = useRef();

    const handleTankColor = (element) => {
    
        console.log(element);
   
           console.log(props);
        
        safeguards?.map( (safeguard) => { console.log(safeguard);
   
     
               if(safeguard.name === element.current.id && safeguard.value === ("Not a Critical Safeguard" || ""))
               {
                 element.current.style.fill = "none"
               }  
   
              if(safeguard.name === element.current.id && safeguard.value === "Functioning")
               {
                 element.current.style.fill = "#00ff00"
                }
   
              if(safeguard.name === element.current.id && safeguard.value === "Degraded")
               {
                 element.current.style.fill = "red"
                }
   
              if(safeguard.name === element.current.id && safeguard.value === "Not In Place")
               {
                 element.current.style.fill = "#7f7f7f"
                }
   
              if(safeguard.name === element.current.id && safeguard.value === "PM Overdue")
               {
                 element.current.style.fill = "red"
                }
   
   
             
   
   
         } )
   
   
     }
   
      useEffect(()=>{
        
             
         handleTankColor(elementRef);
        
          
       }
      )


  
   return (
    <div className={ClassName}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={Width}
      height={Height}
      viewBox={ViewBox}
      preserveAspectRatio="xMinYMin meet"
    >
      <path
        ref={elementRef}
       
        id={Id}
        d="M-4,-2.5v5q0,1,4,1t4,-1v-5q0,1,-4,1t-4,-1q0,-1,4,-1t4,1t-4,1t-4,-1Z"
        style={{
          fill: "#00ff00",
          stroke: "black",
          vectorEffect: "non-scaling-stroke",
          strokeWidth: "1px",
        }}
        transform="matrix(0 -15.3097 9.55166 0 42.3194 66.5285)"
      />
    </svg>
  </div>
  )
}
