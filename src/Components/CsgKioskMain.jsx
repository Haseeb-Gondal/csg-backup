import React from "react";

import PCWestH2SLeak from "./PCWestH2SLeak";
import OnsiteBLEVE from "./OnsiteBLEVE";
import FCCU_R_Flow from "./FCCU_R_Flow";
import Crude_BoilOver from "./Crude_BoilOver";
import Liquid_Overfill from "./Liquid_Overfill";
import OffsiteBLEVE from "./OffsiteBLEVE";
import FaultyProcess from "./FaultyProcess";

// const OnsiteBLEVEscenarios = [
//   {
//     id: "N1D101BLEVE",
//     Fireproofing: "Functioning",
//     Vesel_BLEVE_Response_Plan: "Functioning",
//   },

//   {
//     id: "CD103BLEVE",
//     Fireproofing: "Functioning",
//     Vesel_BLEVE_Response_Plan: "Functioning",
//   },
// ];

//  !!!!----------- DOuble check and compare the data , how it comes from the backend :) --------- !!!!

const allScenarios = [
  {
    name: "Onsite BLEVE",
    vessels: [
      {
        id: "N1D101BLEVE",
        safeguards: [
          { name: "Fireproofing", value: "Functioning" },
          { name: "Vesel_BLEVE_Response_Plan", value: "Functioning" },
        ],
        IsFaultDisplaying: false,
      },

      {
        id: "CD103BLEVE",
        safeguards: [
          { name: "Fireproofing", value: "Functioning" },
          { name: "Vesel_BLEVE_Response_Plan", value: "Functioning" },
        ],
        IsFaultDisplaying: false,
      },
    ],
  },

  {
    name: "Liquid Overfill",
    vessels: [
      {
        id: "OMS301LO",
        safeguards: [
          { name: "ATG_Automatic_Tank_Gauge", value: "Functioning" },
          { name: "ILHA_Independent_Level_High_Alarm", value: "Functioning" },
        ],
        IsFaultDisplaying: false,
      },

      {
        id: "OMS302LO",
        safeguards: [
          { name: "ATG_Automatic_Tank_Gauge", value: "Degraded" },
          { name: "ILHA_Independent_Level_High_Alarm", value: "Functioning" },
        ],
        IsFaultDisplaying: false,
      },
    ],
  },
];





export default function CsgKioskMain() {

  console.log("default value : " + allScenarios[0].vessels[0].IsFaultDisplaying);
  return (
    <div className="main">
      <div className="all-components">
        <div className="row">
          <div className="col-lg-6">
            <div className="component-box">
              <div className="component2">
                <OnsiteBLEVE></OnsiteBLEVE>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="component-box">
              <div className="component2">
                <FCCU_R_Flow></FCCU_R_Flow>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="component-box">
              <div className="component3">
                <PCWestH2SLeak></PCWestH2SLeak>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="component-box">
              <div className="component4">
                <Crude_BoilOver></Crude_BoilOver>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="component-box">
              <div className="component5">
                <Liquid_Overfill></Liquid_Overfill>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="component-box">
              <div className="component5">
                <OffsiteBLEVE></OffsiteBLEVE>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="component7 component-box">
              <FaultyProcess data={allScenarios} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="component8 component-box"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
