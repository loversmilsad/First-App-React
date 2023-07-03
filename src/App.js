import React from 'react';
import CreativeSpeakers from './design-system/components/CreativeSpeakers/CreativeSpeakers';
import speakerData from './design-system/components/CreativeSpeakers/SpeakersData';
import './design-system/components/main.css'

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex"  }}>
    
    {speakerData.map(item =>{
      return(
        <CreativeSpeakers img={item.img} alt={item.alt} name={item.name} job={item.job} key={item.id}/>
      )
    })}
      </div>
    </div>
  );
}

export default App;
