import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function OnsiteBLEVE() {
  return (
    <div>
      <div className="title-box">OMS301BO OM-S301</div>

      <div className="row box-diagram">
        <div className="col-2 d-flex justify-content-center align-items-center  ">
          <div className="box1">
            Mechanical Integrity/ Loss of pump seal/ Brittle fracture /Test Text
            here
          </div>
        </div>

        <div className="col d-flex justify-content-center align-items-center ">
          <div className="lineBlack"></div>
        </div>

        <div className="col-3 d-flex justify-content-center align-items-center">
          {/* <div className='circle rounded-circle'> Significant loss of Containment and fire with potential to impinge on vessel</div>
           */}

          <div class="circle">
            <div class="txt">
              Significant loss of Containment and fire with potential to impinge
              on vessel
            </div>
          </div>
        </div>

        <div className="col d-flex justify-content-center align-items-center ">
          <div className="lineBlack"></div>
        </div>

        <div className="col-1 d-flex flex-column justify-content-center ">
          {/* <div className='tooltipp' >

                  <span className='tooltiptext'>CSG : Fire Proofing</span> 






                  </div> */}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="170 30 150 450"
          >
            <path
              d="M-4,-2.5v5q0,2,4,2t4,-2v-5q0,2,-4,2t-4,-2q0,-2,4,-2t4,2t-4,2t-4,-2Z"
              style={{
                fill: "none",
                stroke: "black",
                vectorEffect: "non-scaling-stroke",
                strokeWidth: "1px",
              }}
              id="e1_shape"
              transform="matrix(0 -26.3488 13.1122 0 240.628 247.205)"
            />
          </svg>
        </div>

        <div className="col d-flex justify-content-center align-items-center">
          <div className="lineBlack"></div>
        </div>

        <div className="col-1 d-flex flex-column justify-content-center ">
          <div className="tooltipp">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="170 30 150 450"
            >
              <path
                d="M-4,-2.5v5q0,2,4,2t4,-2v-5q0,2,-4,2t-4,-2q0,-2,4,-2t4,2t-4,2t-4,-2Z"
                style={{
                  fill: "none",
                  stroke: "black",
                  vectorEffect: "non-scaling-stroke",
                  strokeWidth: "1px",
                }}
                id="e1_shape"
                transform="matrix(0 -26.3488 13.1122 0 240.628 247.205)"
              />
            </svg>

            <span className="tooltiptext">CSG : Vessel BLEVE Response</span>
          </div>
        </div>

        <div className="col d-flex justify-content-center align-items-center">
          <div className="lineBlack"></div>
        </div>

        <div className="col-2   d-flex justify-content-center align-items-center">
          <div className="BLEVE-box">BLEVE </div>
        </div>
      </div>
    </div>
  );
}
