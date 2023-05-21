import React, { Fragment } from "react";
import Xarrow from "react-xarrows";
import Safeguards from "./Safeguards";

export default function FCCU_R_Flow() {
  return (
    <Fragment>
      <div className="title-box">FCCU Reverse Flow</div>

      <Safeguards></Safeguards>

      <div className="FCCU-box">





        {/* empty divs for arrows */}

        <div id="e1" className="d-flex"></div>
        <div id="e2" className="d-flex"></div>
        <div id="e3" className="d-flex"></div>
        <div id="e4" className="d-flex"></div>
        <div id="e5" className="d-flex"></div>
        <div id="e6" className="d-flex"></div>
        <div id="e7" className="d-flex"></div>
        <div id="e8" className="d-flex"></div>
        <div id="e9" className="d-flex"></div>
        <div id="e10" className="d-flex"></div>
        <div id="e11" className="d-flex"></div>
        <div id="e12" className="d-flex"></div>
        <div id="e13" className="d-flex"></div>

        {/* ------------------------------------- */}







        <div className="d-flex flex-column  ">
          <div id="ongeplande" className="box1">
            Ongeplande S/U of S/D
          </div>

          <div id="geplande" className="box1">
            Geplande S/U of S/D
          </div>
        </div>

        <div style={{ minWidth: "120px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            height="300px"
            width="100px"
            preserveAspectRatio="xMinYMin meet"
          >
            <path
              id="FCCU_tank1"
              d="M-4,-2.5v5q0,1,4,1t4,-1v-5q0,1,-4,1t-4,-1q0,-1,4,-1t4,1t-4,1t-4,-1Z"
              style={{
                fill: "none",
                stroke: "black",
                vectorEffect: "non-scaling-stroke",
                strokeWidth: "1px",
              }}
              transform="matrix(0 -24.9642 5.17986 0 43.8505 117.154)"
            />
          </svg>

          <div id="Stoombarriere" className="box1 ">
            CSG: Stoombarrière
          </div>
        </div>

        <div style={{ minWidth: "130px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            height="300px"
            width="100px"
            preserveAspectRatio="xMinYMin meet"
          >
            <path
              id="FCCU_tank2"
              d="M-4,-2.5v5q0,1,4,1t4,-1v-5q0,1,-4,1t-4,-1q0,-1,4,-1t4,1t-4,1t-4,-1Z"
              style={{
                fill: "none",
                stroke: "black",
                vectorEffect: "non-scaling-stroke",
                strokeWidth: "1px",
              }}
              transform="matrix(0 -24.9642 5.17986 0 43.8505 117.154)"
            />
          </svg>

          <div id="Catalystbarriere" className="box1 ">
            CSG: Catalystbarrière
          </div>
        </div>

        <div id="FCCU_CIRCLE" className="FCCU_CIRCLE">
          <p>Backflow O2 naar fract of HC naar regen</p>
        </div>

        <div style={{ minWidth: "130px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            height="300px"
            width="100px"
            preserveAspectRatio="xMinYMin meet"
          >
            <path
              id="FCCU_tank3"
              d="M-4,-2.5v5q0,1,4,1t4,-1v-5q0,1,-4,1t-4,-1q0,-1,4,-1t4,1t-4,1t-4,-1Z"
              style={{
                fill: "none",
                stroke: "black",
                vectorEffect: "non-scaling-stroke",
                strokeWidth: "1px",
              }}
              transform="matrix(0 -24.9642 5.17986 0 43.8505 117.154)"
            />
          </svg>

          <div id="De_energizen" className="box1 ">
            CSG: ESP De-energizen
          </div>
        </div>

        <div className="d-flex flex-column ">
          <div id="Equipment_damage" className="box1">
            Internal Equipment damage
          </div>

          <div id="fatalities" className="box1">
            Onsite fatalities (Explosion and loss of containment)
          </div>
        </div>





     {/* ------------- ALl XArrows------------- */}

        <Xarrow
          headSize={0}
          color="black"
          start="ongeplande"
          end="e1"
          path="straight"
          endAnchor={{
            position: "left",
          }}
        ></Xarrow>

        <Xarrow
          headSize={0}
          color="black"
          start="geplande"
          end="e2"
          path="straight"
          endAnchor={{
            position: "left",
          }}
        ></Xarrow>

        <Xarrow
          headSize={0}
          color="black"
          start="e3"
          end="e4"
          path="straight"
          startAnchor={{
            position: "right",
          }}
        ></Xarrow>

        <Xarrow
          headSize={0}
          color="black"
          start="e5"
          end="e6"
          path="straight"
          startAnchor={{
            position: "right",
          }}
        ></Xarrow>

        <Xarrow
          headSize={0}
          color="black"
          start="FCCU_tank1"
          end="Stoombarriere"
          path="straight"
          startAnchor={{
            position: "bottom",
          }}
          endAnchor={{
            position: "top",
          }}
        ></Xarrow>

        <Xarrow
          headSize={0}
          color="black"
          start="e7"
          end="FCCU_CIRCLE"
          path="straight"
          startAnchor={{
            position: "bottom",
          }}
          endAnchor={{
            position: "left",
          }}
        ></Xarrow>

        <Xarrow
          headSize={0}
          color="black"
          start="e8"
          end="FCCU_CIRCLE"
          path="straight"
          startAnchor={{
            position: "bottom",
          }}
          endAnchor={{
            position: "left",
          }}
        ></Xarrow>

        <Xarrow
          headSize={0}
          color="black"
          start="FCCU_tank2"
          end="Catalystbarriere"
          path="straight"
          startAnchor={{
            position: "bottom",
          }}
          endAnchor={{
            position: "top",
          }}
        ></Xarrow>

        <Xarrow
          headSize={0}
          color="black"
          start="FCCU_tank3"
          end="De_energizen"
          path="straight"
          startAnchor={{
            position: "bottom",
          }}
          endAnchor={{
            position: "top",
          }}
        ></Xarrow>

        <Xarrow
          headSize={0}
          color="black"
          start="e9"
          end="FCCU_CIRCLE"
          path="straight"
          startAnchor={{
            position: "bottom",
          }}
          endAnchor={{
            position: "right",
          }}
        ></Xarrow>

        <Xarrow
          headSize={0}
          color="black"
          start="e10"
          end="FCCU_CIRCLE"
          path="straight"
          startAnchor={{
            position: "bottom",
          }}
          endAnchor={{
            position: "right",
          }}
        ></Xarrow>

        <Xarrow
          headSize={0}
          color="black"
          start="Equipment_damage"
          end="e11"
          path="straight"
          startAnchor={{
            position: "left",
          }}
          
        ></Xarrow>


        <Xarrow
          headSize={0}
          color="black"
          start="e13"
          end="e12"
          path="straight"
          startAnchor={{
            position: "left",
          }}
          endAnchor={{
            position: "right",
          }}
        ></Xarrow>


        {/* --------------------------------------------------------------- */}

        


      </div>
    </Fragment>
  );
}
