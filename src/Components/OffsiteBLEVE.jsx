import React from "react";
import Xarrow from "react-xarrows";
import Safeguards from "./Safeguards";

export default function OffsiteBLEVE() {
  return (
    <div className="d-flex flex-column OffBLEVE-mainbox">
      <div className="title-box">
        Offsite BLEVE{" "}
        <div> OM-S422 / OM-S423 / OM-S424 / OM-S426 / OM-S430 </div>{" "}
      </div>

      <Safeguards></Safeguards>

      <div id="OffBLEVE-box" className="OffBLEVE-box">
        <div className="d-flex flex-column justify-content-between OffBLEVE-flexbox1">
          <div id="liquidOverfill" className="box1 ">
            Liquid Overfill ACTIVE
          </div>

          <div id="mechanicalIntegrity_1" className="box1 ">
            Mechanical Integrity ACTIVE
          </div>
          <div id="waterDrawACTIVE" className="box1 ">
            WaterDraw ACTIVE
          </div>
        </div>

        <div className="d-flex flex-column OffBLEVE-flexbox2">
          <div className="OffBLEVE_tank1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="50px"
              height="100px"
              viewBox="-20 0  100 100"
              preserveAspectRatio="xMinYMin meet"
            >
              <path
                id="OffBLEVE_tank1"
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

          <div className="OffBLEVE_tank2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="80px"
              height="100px"
              viewBox="-52 0  160 160"
              preserveAspectRatio="xMinYMin meet"
            >
              <path
                id="OffBLEVE_tank2"
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

        <div className="d-flex flex-column justify-content-between OffBLEVE-flexbox3">
          <div id="e28" className="d-flex"></div>
          <div id="e29" className="d-flex"></div>

          <div className="d-flex flex-row OffBLEVE_tanksbox1">
            <div className="OffBLEVE_tank3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="50px"
                height="100px"
                viewBox="-20 0  100 100"
                preserveAspectRatio="xMinYMin meet"
              >
                <path
                  id="OffBLEVE_tank3"
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

            <div className="OffBLEVE_tank4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="50px"
                height="100px"
                viewBox="-20 0  100 100"
                preserveAspectRatio="xMinYMin meet"
              >
                <path
                  id="OffBLEVE_tank4"
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

          <div className="OffBLEVE_tank5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="50px"
              height="100px"
              viewBox="-20 0  100 100"
              preserveAspectRatio="xMinYMin meet"
            >
              <path
                id="OffBLEVE_tank5"
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

        <div className="d-flex  flex-column justify-content-center align-items-end OffBLEVE-flexbox4">
          <div id="OffBLEVE_CIRCLE" className="OffBLEVE_CIRCLE">
            <p>Significant Loss of Containment</p>
          </div>
        </div>

        <div className="d-flex flex-column justify-content-center OffBLEVE-flexbox5">
          <div className="d-flex flex-row  OffBLEVE_tanksbox2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="50px"
                height="100px"
                viewBox="-20 0  100 100"
                preserveAspectRatio="xMinYMin meet"
              >
                <path
                  d="M-4,-2.5v5q0,1,4,1t4,-1v-5q0,1,-4,1t-4,-1q0,-1,4,-1t4,1t-4,1t-4,-1Z"
                  style={{
                    fill: "none",
                    stroke: "black",
                    vectorEffect: "non-scaling-stroke",
                    strokeWidth: "1px",
                  }}
                  id="OffBLEVE_tank6"
                  transform="matrix(0 -15.3097 9.55166 0 42.3194 66.5285)"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="50px"
                height="100px"
                viewBox="-20 0  100 100"
                preserveAspectRatio="xMinYMin meet"
              >
                <path
                  d="M-4,-2.5v5q0,1,4,1t4,-1v-5q0,1,-4,1t-4,-1q0,-1,4,-1t4,1t-4,1t-4,-1Z"
                  style={{
                    fill: "none",
                    stroke: "black",
                    vectorEffect: "non-scaling-stroke",
                    strokeWidth: "1px",
                  }}
                  id="OffBLEVE_tank7"
                  transform="matrix(0 -15.3097 9.55166 0 42.3194 66.5285)"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="50px"
                height="100px"
                viewBox="-20 0  100 100"
                preserveAspectRatio="xMinYMin meet"
              >
                <path
                  d="M-4,-2.5v5q0,1,4,1t4,-1v-5q0,1,-4,1t-4,-1q0,-1,4,-1t4,1t-4,1t-4,-1Z"
                  style={{
                    fill: "none",
                    stroke: "black",
                    vectorEffect: "non-scaling-stroke",
                    strokeWidth: "1px",
                  }}
                  id="OffBLEVE_tank8"
                  transform="matrix(0 -15.3097 9.55166 0 42.3194 66.5285)"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="50px"
                height="100px"
                viewBox="-20 0  100 100"
                preserveAspectRatio="xMinYMin meet"
              >
                <path
                  d="M-4,-2.5v5q0,1,4,1t4,-1v-5q0,1,-4,1t-4,-1q0,-1,4,-1t4,1t-4,1t-4,-1Z"
                  style={{
                    fill: "none",
                    stroke: "black",
                    vectorEffect: "non-scaling-stroke",
                    strokeWidth: "1px",
                  }}
                  id="OffBLEVE_tank9"
                  transform="matrix(0 -15.3097 9.55166 0 42.3194 66.5285)"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="d-flex OffBLEVE-flexbox6 flex-column justify-content-center ">
          <div id="BLEVE2">BLEVE</div>
        </div>

        <div id="fillingPlan1" className="box2">
          Filling Plan
        </div>
        <div id="inspectionPlan1" className="box2">
          Inspection Plan
        </div>
        <div id="ATG1" className="box2">
          CSG: ATG w/HLA
        </div>
        <div id="IHLA1" className="box2">
          CSG: IHLA or LH(CO)
        </div>
        <div id="waterDrawFacilities" className="box2">
          CSG: Water Draw Facilities and Associated Critical Tasks
        </div>
        <div id="fireproofing" className="box2">
          CSG: Fireproofing
        </div>
        <div id="remoteIsolation1" className="box2">
          CSG: Remote Isolation
        </div>
        <div id="firewater" className="box2">
          CSG: Firewater Coverage
        </div>
        <div id="FG" className="box2">
          CSG: F&G Detection & Associated Emergency Response
        </div>
      </div>

      {/* ------------- ALl XArrows------------- */}

      <Xarrow
        headSize={0}
        color="black"
        start="liquidOverfill"
        end="OffBLEVE_tank1"
        path="straight"
        endAnchor={{
          position: "left",
        }}
      ></Xarrow>

      <Xarrow
        headSize={0}
        color="black"
        start="mechanicalIntegrity_1"
        end="OffBLEVE_tank2"
        path="straight"
        endAnchor={{
          position: "left",
        }}
      ></Xarrow>
      <Xarrow
        headSize={0}
        color="black"
        start="OffBLEVE_tank1"
        end="OffBLEVE_tank3"
        path="straight"
        endAnchor={{
          position: "left",
        }}
      ></Xarrow>
      <Xarrow
        headSize={0}
        color="black"
        start="OffBLEVE_tank3"
        end="OffBLEVE_tank4"
        path="straight"
        endAnchor={{
          position: "left",
        }}
      ></Xarrow>
      <Xarrow
        headSize={0}
        color="black"
        start="waterDrawACTIVE"
        end="OffBLEVE_tank5"
        path="straight"
        endAnchor={{
          position: "left",
        }}
      ></Xarrow>
      <Xarrow
        headSize={0}
        color="black"
        start="OffBLEVE_tank2"
        end="OffBLEVE_CIRCLE"
        path="straight"
        endAnchor={{
          position: "left",
        }}
      ></Xarrow>
      <Xarrow
        headSize={0}
        color="black"
        start="OffBLEVE_CIRCLE"
        end="OffBLEVE_tank6"
        path="straight"
        endAnchor={{
          position: "left",
        }}
      ></Xarrow>
      <Xarrow
        headSize={0}
        color="black"
        start="OffBLEVE_tank6"
        end="OffBLEVE_tank7"
        path="straight"
        endAnchor={{
          position: "left",
        }}
      ></Xarrow>
      <Xarrow
        headSize={0}
        color="black"
        start="OffBLEVE_tank8"
        end="OffBLEVE_tank9"
        path="straight"
        endAnchor={{
          position: "left",
        }}
      ></Xarrow>
      <Xarrow
        headSize={0}
        color="black"
        start="OffBLEVE_tank9"
        end="BLEVE2"
        path="straight"
        endAnchor={{
          position: "left",
        }}
      ></Xarrow>
      <Xarrow
        headSize={0}
        color="black"
        start="OffBLEVE_tank7"
        end="OffBLEVE_tank8"
        path="straight"
        endAnchor={{
          position: "left",
        }}
      ></Xarrow>

      <Xarrow
        headSize={0}
        color="black"
        start="OffBLEVE_tank4"
        end="e28"
        path="straight"
        endAnchor={{
          position: "left",
        }}
      ></Xarrow>
      <Xarrow
        headSize={0}
        color="black"
        start="OffBLEVE_tank5"
        end="e29"
        path="straight"
        endAnchor={{
          position: "left",
        }}
      ></Xarrow>
      <Xarrow
        headSize={0}
        color="black"
        start="OffBLEVE_tank5"
        end="e29"
        path="straight"
        endAnchor={{
          position: "left",
        }}
      ></Xarrow>
      <Xarrow
        headSize={0}
        color="black"
        start="OffBLEVE_tank5"
        end="e29"
        path="straight"
        endAnchor={{
          position: "left",
        }}
      ></Xarrow>

      <Xarrow
        headSize={0}
        color="black"
        start="e29"
        end="OffBLEVE_CIRCLE"
        path="straight"
        endAnchor={{
          position: "left",
        }}
      ></Xarrow>

      <Xarrow
        headSize={0}
        color="black"
        start="e28"
        end="OffBLEVE_CIRCLE"
        path="straight"
        endAnchor={{
          position: "left",
        }}
      ></Xarrow>

      <Xarrow
        headSize={0}
        color="black"
        start="OffBLEVE_tank1"
        end="fillingPlan1"
        path="straight"
      ></Xarrow>

      <Xarrow
        headSize={0}
        color="black"
        start="OffBLEVE_tank5"
        end="waterDrawFacilities"
        path="straight"
      ></Xarrow>
      <Xarrow
        headSize={0}
        color="black"
        start="OffBLEVE_tank2"
        end="inspectionPlan1"
        path="straight"
      ></Xarrow>
      <Xarrow
        headSize={0}
        color="black"
        start="OffBLEVE_tank3"
        end="ATG1"
        path="straight"
      ></Xarrow>
      <Xarrow
        headSize={0}
        color="black"
        start="OffBLEVE_tank4"
        end="IHLA1"
        path="straight"
      ></Xarrow>
      <Xarrow
        headSize={0}
        color="black"
        start="OffBLEVE_tank7"
        end="FG"
        path="straight"
      ></Xarrow>

      <Xarrow
        headSize={0}
        color="black"
        start="OffBLEVE_tank8"
        end="firewater"
        path="straight"
      ></Xarrow>

      <Xarrow
        headSize={0}
        color="black"
        start="OffBLEVE_tank9"
        end="remoteIsolation1"
        path="straight"
        endAnchor={{
          position: "top",
        }}
      ></Xarrow>

      <Xarrow
        headSize={0}
        color="black"
        start="OffBLEVE_tank6"
        end="fireproofing"
        path="straight"
        endAnchor={{
          position: "top",
        }}
      ></Xarrow>
    </div>
  );
}
