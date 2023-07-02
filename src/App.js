import React from 'react';
import CreativeSpeakers from './design-system/components/CreativeSpeakers/CreativeSpeakers';
import speakerData from './design-system/components/CreativeSpeakers/SpeakersData';

function App() {
  return (
    <div className="App">
      <div style={{display:"flex"}}>
       
    {speakerData.map(item =>{
      return(
        <CreativeSpeakers name={item.name} img={item.img} alt={item.alt} job={item.job} key={item.id}  />
      )
    })}

      </div>

      
    </div>
  );
}

export default App;
