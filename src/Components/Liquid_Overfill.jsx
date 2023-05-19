import React from "react";
import Xarrow from "react-xarrows";

export default function Liquid_Overfill() {
  return (
    <div className="d-flex flex-column" style={{ height: "100%" }}>
      <div className="title-box">
        Liquid Overfill{" "}
        <div> OM-S301 / OM-S302 / OM-S303 / OM-S304 / OM-S305 </div>{" "}
        <div> OM-S101 / OM-S102 / OM-S104 </div>
      </div>

      <div className="safeguards-box">
        <div
          className="col"
          style={{ display: "flex", justifyContent: " center" }}
        >
          <div style={{ padding: "3px", backgroundColor: "rgb(137 165 255)" }}>
            Preventative Safeguards
          </div>
        </div>

        <div
          className="col"
          style={{ display: "flex", justifyContent: " center" }}
        >
          <div style={{ padding: "3px", backgroundColor: "rgb(137 165 255)" }}>
            Migitative Safeguards
          </div>
        </div>
      </div>

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
          <div className="LOverfill_tank3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="50px"
              height="100px"
              viewBox="-20 0  100 100"
              preserveAspectRatio="xMinYMin meet"
            >
              <path
                id="LOverfill_tank3"
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

          <div className="LOverfill_tank4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="50px"
              height="100px"
              viewBox="-20 0  100 100"
              preserveAspectRatio="xMinYMin meet"
            >
              <path
                id="LOverfill_tank4"
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
          end="LOverfill_tank3"
          path="straight"
         
        ></Xarrow>

<Xarrow
          headSize={0}
          color="black"
          start="LOverfill_tank3"
          end="LOverfill_tank4"
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
          start="LOverfill_tank3"
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
          start="LOverfill_tank4"
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
          start="LOverfill_tank4"
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
