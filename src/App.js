import React from 'react';
import OurPrograms from './design-system/components/Our Programs/OurPrograms';
import ourProgramsData from './design-system/components/Our Programs/OurProgramsData';
import './design-system/components/main.css';

function App() {
  return (
    <div className="App">
     
     {ourProgramsData.map(item => {
          return(
            <OurPrograms img={item.img} title = {item.title} icon = {item.icon}
             time={item.time} roomNumber={item.roomNumber} 
             alt={item.alt} name={item.name} 
             description={item.description} key={item.id} />
          )
     })}

    </div>
  );
}

export default App;
