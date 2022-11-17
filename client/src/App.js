import React,{useState} from 'react';
import Homepage from './component/Homepage';
import './app.css'
import Allworkshop from './component/Allworkshop';
import Createworkshop from './component/CreateWorkShop';
import { BrowserRouter, Routes, Route, } from "react-router-dom";


function App() {
  const [data, setdata] = useState({workshopname: "", venue: "", type:"", url:"", date:"", id:""})
  const [showupdate, setShowupdate] = useState(false)

  return (
    <>
    <BrowserRouter>
      <div className='container' >
        <div className="right">
          <Homepage />
        </div>
        <div className='left'>
          <Routes>
            <Route path='/' element={ <Allworkshop data={data} setdata={setdata} showupdate={showupdate} setShowupdate={setShowupdate}/>}/>
            <Route path='/createworkshop' element ={<Createworkshop data={data} setdata={setdata}  showupdate={showupdate} setShowupdate={setShowupdate}/> }/>        
          
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
