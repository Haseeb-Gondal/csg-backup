import React from "react";
import OnsiteBLEVE from "./OnsiteBLEVE";
import Liquid_Overfill from "./Liquid_Overfill";
import Xarrow from "react-xarrows";

export default function FaultyProcess(props) {
  const { data: allScenarios } = props;
  
  return (
    <div style={{ height: "100%" }}>
      <div style={{ height: "100%" }}>
        {allScenarios.map((scenario) => {



          if (scenario.name === "Onsite BLEVE") {
            for (let i = 0; i < scenario.vessels.length; i++) {
              for (let j = 0; j < scenario.vessels[i].safeguards.length; j++) {
                

                if (
                  scenario.vessels[i].safeguards[j].value !== "Functioning"
                 
                ) {
                  
                 

                  //this loop stops as it gets the first safeguard as != functioning
                  return (
                    <Liquid_Overfill
                      
                      key={scenario.vessels[i].id}
                      nonFunctioningVessel={scenario.vessels[i]}
                      
                    ></Liquid_Overfill>
                  );

                  
                }

               
              }
            }
          }
          
          
          
          
          
          else if (scenario.name === "Liquid Overfill") {
            for (let i = 0; i < scenario.vessels.length; i++) {
              for (let j = 0; j < scenario.vessels[i].safeguards.length; j++) {
                if (scenario.vessels[i].safeguards[j].value !== "Functioning") {
                  
                  
                  return (
                   
                    <Liquid_Overfill
                    
                      key={scenario.vessels[i].id}
                      nonFunctioningVessel={scenario.vessels[i]}
                      safeguards={scenario.vessels[i].safeguards}
                    ></Liquid_Overfill>
                  );
                }
              }
            }
          }

          return null;
        })}
      </div>
    </div>
  );
}
