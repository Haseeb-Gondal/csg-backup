import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Xarrow from "react-xarrows";
import Safeguards from "./Safeguards";
import Title from "./common/Title";

export default function OnsiteBLEVE(props) {

  const { nonFunctioningVessel: nonFuncVessel } = props;

  function handleTankColor() {

 

  return "functioning"

}


 

  return (
    <div className="d-flex flex-column  OnBLEVE-mainbox">
       <Title ScenarioName="Onsite BLEVE" Vessel={nonFuncVessel} DefaultTitle=" N1-D101 / N1-D201 / N2-D102 ">
        
        </Title>
      

      <div className="OnBLEVE-box">
        <div className=" d-flex justify-content-center align-items-center OnBLEVE-flexbox1  ">
          <div id="mechanicalIntegrity1" className="box1">
            Mechanical Integrity/ Loss of pump seal/ Brittle fracture
          </div>
        </div>

        <div className=" d-flex justify-content-center align-items-center OnBLEVE-flexbox2">
          

          <div id="significantLoss" className="LOverfill_CIRCLE">
            <p>
              Significant loss of Containment and fire with potential to impinge
              on vessel
            </p>
          </div>
        </div>

        <div className=" d-flex flex-column justify-content-center OnBLEVE-flexbox3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="60px"
            height="80px"
            viewBox="-20 0  100 100"
            preserveAspectRatio="xMinYMin meet"
          >
            <path
              className= {handleTankColor()}
              id="OnBLEVE_tank1"
              d="M-4,-2.5v5q0,1,4,1t4,-1v-5q0,1,-4,1t-4,-1q0,-1,4,-1t4,1t-4,1t-4,-1Z"
              style={{
                vectorEffect: "non-scaling-stroke"
              }}
              transform="matrix(0 -15.3097 9.55166 0 42.3194 66.5285)"
            />
          </svg>
        </div>

        <div className=" d-flex flex-column justify-content-center OnBLEVE-flexbox4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="60px"
            height="80px"
            viewBox="-20 0  100 100"
            preserveAspectRatio="xMinYMin meet"
          >
            <path
              id="OnBLEVE_tank2"
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

        <div className="   d-flex justify-content-center align-items-center OnBLEVE-flexbox5">
          <div id="OnBLEVE_BLEVEbox" className="BLEVE-box">
            BLEVE{" "}
          </div>
        </div>

        <div id="fireproofing1" className="box2">
          CSG: Fireproofing
        </div>

        <div id="veselBLEVE" className="box2">
          CSG: Vesel BLEVE Response
        </div>

        <Xarrow
          headSize={0}
          color="black"
          start="mechanicalIntegrity1"
          end="significantLoss"
          path="straight"
          endAnchor={{
            position: "left",
          }}
        ></Xarrow>

        <Xarrow
          headSize={0}
          color="black"
          start="significantLoss"
          end="OnBLEVE_tank1"
          path="straight"
          endAnchor={{
            position: "left",
          }}
        ></Xarrow>

        <Xarrow
          headSize={0}
          color="black"
          start="OnBLEVE_tank1"
          end="OnBLEVE_tank2"
          path="straight"
          endAnchor={{
            position: "left",
          }}
        ></Xarrow>

        <Xarrow
          headSize={0}
          color="black"
          start="OnBLEVE_tank2"
          end="OnBLEVE_BLEVEbox"
          path="straight"
          endAnchor={{
            position: "left",
          }}
        ></Xarrow>

        <Xarrow
          headSize={0}
          color="black"
          start="OnBLEVE_tank1"
          end="fireproofing1"
          path="straight"
          endAnchor={{
            position: "bottom",
          }}
        ></Xarrow>

        <Xarrow
          headSize={0}
          color="black"
          start="OnBLEVE_tank2"
          end="veselBLEVE"
          path="straight"
          endAnchor={{
            position: "bottom",
          }}
        ></Xarrow>
      </div>
    </div>
  );
}
