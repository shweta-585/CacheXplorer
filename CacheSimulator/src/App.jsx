import Navbar from './Components/Navbar';
import ParameterBox from './Components/ParameterBox';
import MappingSummary from './Components/MappingSummary';
import MemoryVisual from './Components/MemoryVisual';
import './styles/App.css'
import { useState } from 'react';

function App() {

  const [parameters, SetParams] = useState(null);

  const handleParameter = (params) => {
    SetParams(params);
  }

  return (
    <div className='main-container'>
      <div className='navbar-container'><Navbar/></div>
      <div className='paramapping-container'>
        <div className='parameter-container'><ParameterBox onSubmit={handleParameter}/></div>
        <div className='mapping-container'> { (<MappingSummary parameters={parameters}/>) }</div>
      </div>
      <div className='memoryvisual-container'><MemoryVisual parameters={ parameters } /></div>
    </div>
  )
}

export default App;