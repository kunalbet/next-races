import React, {useState, useEffect} from 'react';
import './App.css';
import { Tabs, Tab } from 'react-bootstrap';
import axios from 'axios';
import { RaceList } from './Components/RaceList';

function App() {
  const displayCount: number = 5;
  const [data, setData] = useState<any>({});
  const [refreshFlag, setRefreshFlag] = useState<boolean>(false);
  const [fetchCount, setFetchCount] = useState<number>(15);

  const deleteRace = (raceId: string) => {
    console.log("Deleting RaceId: = " + raceId);
    setData(data.filter((race: any) => race.race_id !== raceId));
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`http://localhost:4000/races/${fetchCount}`, {headers: {
        "Content-Type": "application/json"}
    });
      setData(result.data);
    };
 
    fetchData();
  }, [refreshFlag]);

  useEffect(() => {
    let filteredRaces1 = Object.values(data).filter((race: any) => race.category_id === "4a2788f8-e825-4d36-9894-efd4baf1cfae");
    let filteredRaces2 = Object.values(data).filter((race: any) => race.category_id === "9daef0d7-bf3c-4f50-921d-8e818c60fe61");
    let filteredRaces3 = Object.values(data).filter((race: any) => race.category_id === "161d9be2-e909-4326-8c2c-35ed71fb460b");
    if (filteredRaces1.length >= displayCount && filteredRaces2.length >= displayCount && filteredRaces3.length >= displayCount) {
        setRefreshFlag(false);
        setFetchCount(15);
        //console.log("-----Count is fine " + fetchCount);
    } else {
      //console.log("##### NEED REFRESH " + fetchCount);
      setFetchCount(fetchCount + 15);
      setRefreshFlag(!refreshFlag);
    }

  }, [data]);

  return (
    <div className="container">
        <div className="title-Div">
          <h1 className="">Next Races To Go</h1>
        </div>
        {/* Total Fetched Races: {data.length} */}
        <br/>
        
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="home" title="Horse Racing">
            <RaceList races={data} category="4a2788f8-e825-4d36-9894-efd4baf1cfae" deleteRace={deleteRace} displayCount={displayCount}/>
          </Tab>
          <Tab eventKey="profile" title="Greyhound Racing">
            <RaceList races={data} category="9daef0d7-bf3c-4f50-921d-8e818c60fe61" deleteRace={deleteRace} displayCount={displayCount}/>
          </Tab>
          <Tab eventKey="contact" title="Harness Racing">
            <RaceList races={data} category="161d9be2-e909-4326-8c2c-35ed71fb460b" deleteRace={deleteRace} displayCount={displayCount}/>
          </Tab>
        </Tabs>
   
    </div>
  );
}

export default App;
