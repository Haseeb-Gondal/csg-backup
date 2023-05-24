import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PCWestH2SLeak from './Components/PCWestH2SLeak'
import OnsiteBLEVE from './Components/OnsiteBLEVE'
import FCCU_R_Flow from './Components/FCCU_R_Flow';
import Crude_BoilOver from './Components/Crude_BoilOver';
import Liquid_Overfill from './Components/Liquid_Overfill';
import OffsiteBLEVE from './Components/OffsiteBLEVE';


// const handleFunction = () => {
//   console.log('CLCICKED')
//   document.getElementById("e1_shape").style.fill= "green"
// }

// const handleDegrade = () => {
//   console.log('CLCICKED')
//   document.getElementById("e1_shape").style.fill= "red"
// }

function App() {
  return (
  


    <div className="main">
          <div className="all-components">
                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="component-box"  >
                                                  
                                                  
                                    <div className='component2'>          
                                            <OnsiteBLEVE></OnsiteBLEVE>

                                    </div>
                                                    
                                                  
                                                            


                                  </div>          
                                </div>
                                
                                
                                <div className="col-lg-6">
                                    <div className="component-box"  >
                                                  
                                        <div className='component2'>
                                                  
                                            <FCCU_R_Flow></FCCU_R_Flow>     

                                        </div>
                                                  
                                                            


                                  </div>          
                                </div>
                                
                </div>

                <div className='row'>
                  <div className='col-lg-6'>
                        <div className='component-box'>

                        <div className='component3'>
                                <PCWestH2SLeak></PCWestH2SLeak>
                        </div>        
                        </div>
                  </div>





                  <div className='col-lg-6'>
                      <div className='component-box'>

                          <div className='component4'>
                              <Crude_BoilOver></Crude_BoilOver>
                          </div>

                      </div>
                  </div>


                </div>

                
                <div className='row'>
                  <div className='col-lg-6'>
                        <div className='component-box'>


                          <div className='component5'>

                                  <Liquid_Overfill></Liquid_Overfill>
                          </div>
                                
                                
                        </div>
                  </div>
                  <div className='col-lg-6'>
                        
                        

                        <div className='component-box'>

                        


                                  <div className='component5'>

                                          <OffsiteBLEVE></OffsiteBLEVE>
                                  </div>
      
      

                                
                        </div>
                  </div>
                </div>


                
                <div className='row'>
                  <div className='col-lg-6'>
                        <div className='component7 component-box'>
                                
                                
                        </div>
                  </div>
                  <div className='col-lg-6'>
                                <div className='component8 component-box'>
                                
                                
                                </div>
                  </div>
                </div>

                




                


          </div>
    </div>
  );
}

export default App;
