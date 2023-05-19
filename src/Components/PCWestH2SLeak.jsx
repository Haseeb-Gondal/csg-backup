import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function PCWestH2SLeak() {
  return (
    <fragment>
      <div className="title-box">PCWestH2SLeak</div>

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

      <div className="row box-diagram">
        <div className="col-2 d-flex justify-content-center align-items-center  ">
          <div className="box1">
            Piping Vessel Corrosion, Support Failure, Refractory Failure,
            Fatigue/Vibration, Machinery Failure, Overpressure, Sampling Error,
            Eq Prep Error
          </div>
        </div>

        <div className="col-3 d-flex justify-content-center align-items-center  ">
          <div className="lineBlack"></div>
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
          <div className="lineBlack"></div>
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
          <div className="lineBlack"></div>
        </div>

        <div className="col-3 d-flex justify-content-center align-items-center  ">
          <div className="circle">
            <div className="txt">
              Significant Loss of Containment of High H2S Material
            </div>
          </div>
        </div>

        <div className="col d-flex justify-content-center align-items-center  ">
          <div className="lineBlack"></div>
        </div>

        <div className="col d-flex justify-content-center align-items-center  ">
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

        <div className="col d-flex justify-content-center align-items-center  ">
          <div className="lineBlack"></div>
        </div>

        <div className="col d-flex justify-content-center align-items-center  ">
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

        <div className="col d-flex justify-content-center align-items-center  ">
          <div className="lineBlack"></div>
        </div>

        <div className="col d-flex justify-content-center align-items-center  ">
          <div className="box1">Toxic Release with high consequences</div>
        </div>
      </div>
    </fragment>
  );
}
