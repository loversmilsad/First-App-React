import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Overview from './design-system/components/Overview';
import overviewData from './design-system/components/Overview/Data';

function App() {
  return (
    <div className="App">
      <div style={{display:"flex"}}>
        {overviewData.map(item =>{
       return(
        <Overview icon={item.icon} title={item.title} description={item.description} key= {item.id}/>
       )
      })}
      </div>

      
    </div>
  );
}

export default App;
