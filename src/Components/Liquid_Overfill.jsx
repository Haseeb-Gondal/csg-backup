import React, {useEffect, useRef} from "react";
import Xarrow from "react-xarrows";
import Safeguards from "./Safeguards";
import Title from "./common/Title";
import Tank from "./common/Tank";






// ToDO:  Make the id of svg tanks same as safeguard name coming from excel file 








export default function Liquid_Overfill(props) {

  
  const {nonFunctioningVessel: nonFuncVessel } = props;
  
  const {safeguards} = props  //returns any array of safeguards of this vessel

 

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


   
 
  

 






  








  return (
    <div className="d-flex flex-column" style={{ height: "100%" }}>

      <Title ScenarioName="Liquid OverFill" Vessel={nonFuncVessel} DefaultTitle=" OM-S301 / OM-S302 / OM-S303 / OM-S304 / OM-S305 / OM-S101 / OM-S102 / OM-S104">

      </Title>

      <Safeguards></Safeguards>

      <div className="Liquid_OverFill-box">
        <div className="d-flex flex-column justify-content-evenly  LOverfill-flexbox1">
            <div id="overfillActive" className="box1">
                Liquid Overfill ACTIVE
            </div>

          <div id="mechanicalIntegrity" className="box1">
            Mechanical Integrity ACTIVE
          </div>
        </div>

        <div className="d-flex flex-column justify-content-evenly LOverfill-flexbox2">
          <div id="fillingPlan" className="box2">
            Filling Plan
          </div>

          <div id="inspectionPlan" className="box2">
            Inspection Plan
          </div>

          <div  className="LOverfill_tank1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="50px"
              height="100px"
              viewBox="-20 0  100 100"
              preserveAspectRatio="xMinYMin meet"
            >
              <path
                id="LOverfill_tank1"
                d="M-4,-2.5v5q0,1,4,1t4,-1v-5q0,1,-4,1t-4,-1q0,-1,4,-1t4,1t-4,1t-4,-1Z"
                style={{
                  fill: "none",
                  stroke: "black",
                  vectorEffect: "non-scaling-stroke",
                  strokeWidth: "1px",
                }}
                transform="matrix(0 -15.3097 9.55166 0 42.3194 66.5285)"
              />
            </svg>
          </div>

          <div className="LOverfill_tank2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="80px"
              height="100px"
              viewBox="-52 0  130 100"
              preserveAspectRatio="xMinYMin meet"
            >
              <path
                id="LOverfill_tank2"
                d="M-4,-2.5v5q0,1,4,1t4,-1v-5q0,1,-4,1t-4,-1q0,-1,4,-1t4,1t-4,1t-4,-1Z"
                style={{
                  fill: "none",
                  stroke: "black",
                  vectorEffect: "non-scaling-stroke",
                  strokeWidth: "1px",
                }}
                transform="matrix(0 -15.3097 9.55166 0 42.3194 66.5285)"
              />
            </svg>
          </div>
        </div>

        <div className="d-flex flex-row LOverfill-flexbox3">
          <div id="ATG" className="box2">
            CSG: ATG (Automatic Tank Gauge)
          </div>

          <div id="ILHA" className="box2">
            CSG: ILHA Independent Level High Alarm
          </div>
          {/* <div className="LOverfill_tank3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="50px"
              height="100px"
              viewBox="-20 0  100 100"
              preserveAspectRatio="xMinYMin meet"
            >
              <path
                ref={element1Ref}
               
                id="ATG_Automatic_Tank_Gauge"
                d="M-4,-2.5v5q0,1,4,1t4,-1v-5q0,1,-4,1t-4,-1q0,-1,4,-1t4,1t-4,1t-4,-1Z"
                style={{
                  fill: "#00ff00" ,
                  stroke: "black",
                  vectorEffect: "non-scaling-stroke",
                  strokeWidth: "1px",
                }}
                transform="matrix(0 -15.3097 9.55166 0 42.3194 66.5285)"
              />
            </svg>
          </div> */}

          <Tank 
           ClassName="LOverfill_tank3"
            Width="50px"
            Height="100px"
            ViewBox="-20 0  100 100"
             Id="ATG_Automatic_Tank_Gauge"
             Safeguards={safeguards}
           
           >

          </Tank>

          {/* <div className="LOverfill_tank4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="50px"
              height="100px"
              viewBox="-20 0  100 100"
              preserveAspectRatio="xMinYMin meet"
            >
              <path
                ref={element2Ref}
                id="ILHA_Independent_Level_High_Alarm"
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
          </div> */}

          <Tank 
           ClassName="LOverfill_tank4"
            Width="50px"
            Height="100px"
            ViewBox="-20 0  100 100"
             Id="ILHA_Independent_Level_High_Alarm"

            Safeguards={safeguards}
           
           >

          </Tank>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center  LOverfill-flexbox4">
          <div id="LOverfill_CIRCLE" className="LOverfill_CIRCLE">
            <p>Tank Overfill with Liquid Release / Vapor Dispersion</p>
          </div>
        </div>

        <div className="d-flex flex-column justify-content-center LOverfill-flexbox5">
          <div className="LOverfill_tank5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="50px"
              height="100px"
              viewBox="-20 0  100 100"
              preserveAspectRatio="xMinYMin meet"
            >
              <path
                id="LOverfill_tank5"
                d="M-4,-2.5v5q0,1,4,1t4,-1v-5q0,1,-4,1t-4,-1q0,-1,4,-1t4,1t-4,1t-4,-1Z"
                style={{
                  fill: "none",
                  stroke: "black",
                  vectorEffect: "non-scaling-stroke",
                  strokeWidth: "1px",
                }}
                transform="matrix(0 -15.3097 9.55166 0 42.3194 66.5285)"
              />
            </svg>
          </div>

          <div id="remoteIsolation" className="box2">
            Remote Isolation
          </div>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-end  LOverfill-flexbox6">
          <div id="vaporCloud" className="box1">
            Vapor Cloud Explosion
          </div>
        </div>


        <div id="e26" className="d-flex"></div>
        <div id="e27" className="d-flex"></div>
      </div>



        {/* empty divs for arrows */}

        





      {/* ------------- ALL XArrows------------- */}

      <Xarrow
          headSize={0}
          color="black"
          start="overfillActive"
          end="LOverfill_tank1"
          path="straight"
         
        ></Xarrow>


<Xarrow
          headSize={0}
          color="black"
          start="LOverfill_tank1"
          end="ATG_Automatic_Tank_Gauge"
          path="straight"
         
        ></Xarrow>

<Xarrow
          headSize={0}
          color="black"
          start="ATG_Automatic_Tank_Gauge"
          end="ILHA_Independent_Level_High_Alarm"
          path="straight"
         
        ></Xarrow>

<Xarrow
          headSize={0}
          color="black"
          start="mechanicalIntegrity"
          end="LOverfill_tank2"
          path="straight"
         
        ></Xarrow>
<Xarrow
          headSize={0}
          color="black"
          start="ATG_Automatic_Tank_Gauge"
          end="ATG"
          path="straight"
         
        ></Xarrow>
<Xarrow
          headSize={0}
          color="black"
          start="LOverfill_tank1"
          end="fillingPlan"
          path="straight"
         
        ></Xarrow>
<Xarrow
          headSize={0}
          color="black"
          start="LOverfill_tank2"
          end="inspectionPlan"
          path="straight"
         
        ></Xarrow>
<Xarrow
          headSize={0}
          color="black"
          start="LOverfill_tank5"
          end="vaporCloud"
          path="straight"
         
        ></Xarrow>
<Xarrow
          headSize={0}
          color="black"
          start="ILHA_Independent_Level_High_Alarm"
          end="ILHA"
          path="straight"
         
        ></Xarrow>
<Xarrow
          headSize={0}
          color="black"
          start="LOverfill_tank5"
          end="remoteIsolation"
          path="straight"
         
        ></Xarrow>
<Xarrow
          headSize={0}
          color="black"
          start="LOverfill_CIRCLE"
          end="LOverfill_tank5"
          path="straight"
         
        ></Xarrow>

        <Xarrow
          headSize={0}
          color="black"
          start="ILHA_Independent_Level_High_Alarm"
          end="e26"
          path="straight"
          endAnchor={{
            position: "left",
          }}
         
        ></Xarrow>

        <Xarrow
          headSize={0}
          color="black"
          start="e26"
          end="LOverfill_CIRCLE"
          path="straight"
          endAnchor={{
            position: "left",
          }}
         
        ></Xarrow>

        <Xarrow
          headSize={0}
          color="black"
          start="LOverfill_tank2"
          end="e27"
          path="straight"
         
        ></Xarrow>

        <Xarrow
          headSize={0}
          color="black"
          start="e27"
          end="LOverfill_CIRCLE"
          path="straight"
          endAnchor={{
            position: "left",
          }}
         
        ></Xarrow>        
    </div>
  );
}
