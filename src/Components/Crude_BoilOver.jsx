import React, { Fragment } from "react";
import Xarrow from "react-xarrows";

export default function Crude_BoilOver() {
  return (
    <div>
      <div className="title-box">
        Crude Boil Over{" "}
        <div> OM-S301 / OM-S302 / OM-S303 / OM-S304 / OM-S305 </div>{" "}
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

      <div id="Crude_Boilover-box">
        <div className="d-flex flex-column CBoilover-flexbox1  ">
          <div id="RoofIntegrity" className="box1">
            Failure of Roof Integrity
          </div>

          <div id="ContainsMaterial" className="box1">
            Contains Material ACTIVE
          </div>

          <div id="AdverseWeather" className="box1">
            Adverse Weather Effects
          </div>
        </div>

        <div className="d-flex flex-column align-items-center CBoilover-flexbox3  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            height="280px"
            width="70px"
            preserveAspectRatio="xMinYMin meet"
          >
            <path
              id="CBoilOver_tank1"
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

          <div id="RDMaintenance" className="box1 ">
            CSG: Roof Design and Maintenance
          </div>
        </div>

        <div className="d-flex flex-column justify-content-end CBoilover-flexbox4">
          <div className="CBoilOver_tank2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="50px"
              height="100px"
              viewBox="-20 0  100 100"
              preserveAspectRatio="xMinYMin meet"
            >
              <path
                id="CBoilOver_tank2"
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

          <div id="PreChecks" className="box2">
            Adverse Weather Pre-Checks
          </div>
        </div>

        <div id="CBoilOver_CIRCLE" className="CBoilOver_CIRCLE">
          <p>Sunk Roof Resulting in Exposure of Tank Surface</p>
        </div>

        <div className="d-flex flex-column  CBoilover-flexbox2">
          <div className="d-flex flex-row align-items-center CBoilOver_tanksbox">
            <div className="CBoilOver_tank3">
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
                  id="CBoilOver_tank3"
                  transform="matrix(0 -15.3097 9.55166 0 42.3194 66.5285)"
                />
              </svg>
            </div>
            <div className="CBoilOver_tank3">
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
                  id="CBoilOver_tank4"
                  transform="matrix(0 -15.3097 9.55166 0 42.3194 66.5285)"
                />
              </svg>
            </div>
            <div className="CBoilOver_tank3">
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
                  id="CBoilOver_tank5"
                  transform="matrix(0 -15.3097 9.55166 0 42.3194 66.5285)"
                />
              </svg>
            </div>
            <div className="CBoilOver_tank3">
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
                  id="CBoilOver_tank6"
                  transform="matrix(0 -15.3097 9.55166 0 42.3194 66.5285)"
                />
              </svg>
            </div>
          </div>

          <div id="Containment" className="box2">
            Containment
          </div>
          <div id="Emergency" className="box2">
            CSG: Emergency Response Plan & Associated Facilities
          </div>
          <div id="Detection" className="box2">
            Detection
          </div>
          <div id="Mitigation" className="box2">
            CSG: Boilover Mitigation Measures
          </div>
        </div>

        <div className="d-flex flex-column">
          <p id="Boilover" className="box1">
            Boilover
          </p>
        </div>
      </div>

      {/* empty divs for arrows */}

      <div id="e14" className="d-flex"></div>
      <div id="e15" className="d-flex"></div>
      <div id="e16" className="d-flex"></div>
      <div id="e17" className="d-flex"></div>
      <div id="e19" className="d-flex"></div>
      <div id="e18" className="d-flex"></div>
      <div id="e20" className="d-flex"></div>
      <div id="e21" className="d-flex"></div>
      <div id="e26" className="d-flex"></div>
      <div id="e23" className="d-flex"></div>
      <div id="e24" className="d-flex"></div>
      <div id="e25" className="d-flex"></div>

      {/* ------------- ALl XArrows------------- */}

      <Xarrow
        headSize={0}
        color="black"
        start="CBoilOver_CIRCLE"
        end="CBoilOver_tank3"
        path="straight"
        endAnchor={{
          position: "left",
        }}
      ></Xarrow>
      <Xarrow
        headSize={0}
        color="black"
        start="CBoilOver_tank3"
        end="CBoilOver_tank4"
        path="straight"
        endAnchor={{
          position: "left",
        }}
      ></Xarrow>
      <Xarrow
        headSize={0}
        color="black"
        start="CBoilOver_tank4"
        end="CBoilOver_tank5"
        path="straight"
        endAnchor={{
          position: "left",
        }}
      ></Xarrow>
      <Xarrow
        headSize={0}
        color="black"
        start="CBoilOver_tank5"
        end="CBoilOver_tank6"
        path="straight"
        endAnchor={{
          position: "left",
        }}
      ></Xarrow>

      <Xarrow
        headSize={0}
        color="black"
        start="CBoilOver_tank6"
        end="Boilover"
        path="straight"
        endAnchor={{
          position: "left",
        }}
      ></Xarrow>

      <Xarrow
        headSize={0}
        color="black"
        start="RoofIntegrity"
        end="e14"
        path="straight"
        startAnchor={{
          position: "right",
        }}
      ></Xarrow>

      <Xarrow
        headSize={0}
        color="black"
        start="CBoilOver_tank6"
        end="Boilover"
        path="straight"
        endAnchor={{
          position: "left",
        }}
      ></Xarrow>

      <Xarrow
        headSize={0}
        color="black"
        start="e15"
        end="e16"
        path="straight"
        startAnchor={{
          position: "right",
        }}
      ></Xarrow>

      <Xarrow
        headSize={0}
        color="black"
        start="e17"
        end="CBoilOver_tank2"
        path="straight"
        startAnchor={{
          position: "right",
        }}
      ></Xarrow>

      <Xarrow
        headSize={0}
        color="black"
        start="e18"
        end="e19"
        path="straight"
        startAnchor={{
          position: "right",
        }}
      ></Xarrow>
      <Xarrow
        headSize={0}
        color="black"
        start="e20"
        end="e21"
        path="straight"
        startAnchor={{
          position: "right",
        }}
      ></Xarrow>
      <Xarrow
        headSize={0}
        color="black"
        start="e21"
        end="CBoilOver_CIRCLE"
        path="straight"
        endAnchor={{
          position: "left",
        }}
      ></Xarrow>
      <Xarrow
        headSize={0}
        color="black"
        start="e19"
        end="CBoilOver_CIRCLE"
        path="straight"
        endAnchor={{
          position: "left",
        }}
      ></Xarrow>

      <Xarrow
        headSize={0}
        color="black"
        start="CBoilOver_tank1"
        end="RDMaintenance"
        path="straight"
        endAnchor={{
          position: "top",
        }}
      ></Xarrow>

      <Xarrow
        headSize={0}
        color="black"
        start="CBoilOver_tank3"
        end="Detection"
        path="straight"
        endAnchor={{
          position: "top",
        }}
      ></Xarrow>

      <Xarrow
        headSize={0}
        color="black"
        start="CBoilOver_tank5"
        end="Mitigation"
        path="straight"
        endAnchor={{
          position: "top",
        }}
      ></Xarrow>

      <Xarrow
        headSize={0}
        color="black"
        start="CBoilOver_tank4"
        end="Emergency"
        path="straight"
        endAnchor={{
          position: "bottom",
        }}
      ></Xarrow>

      <Xarrow
        headSize={0}
        color="black"
        start="CBoilOver_tank6"
        end="Containment"
        path="straight"
        endAnchor={{
          position: "bototm",
        }}
      ></Xarrow>

      <Xarrow
        headSize={0}
        color="black"
        start="CBoilOver_tank1"
        end="RDMaintenance"
        path="straight"
        endAnchor={{
          position: "top",
        }}
      ></Xarrow>

      <Xarrow
        headSize={0}
        color="black"
        start="CBoilOver_tank2"
        end="PreChecks"
        path="straight"
        endAnchor={{
          position: "top",
        }}
      ></Xarrow>
    </div>
  );
}
