import React, {useEffect, useState} from "react";
import "./RaceList.css";
import { Table, Button } from 'react-bootstrap';
import Countdown from "react-countdown";

export interface IRaceListProps {
    races: Array<any>,
    category: string,
    deleteRace: (arg: any) => void,
    displayCount: number
}

export const RaceList = ({races, category, deleteRace, displayCount}: IRaceListProps) => {
    const [catagoryRaces, setCatagoryRaces] = useState<any>([]);
    
    useEffect(() => {
        setCatagoryRaces(Object.values(races).filter((race: any) => race.category_id === category)
            .sort((a,b) => Number(a.advertised_start.seconds) - Number(b.advertised_start.seconds) )
            .filter((race: any) => {
                let currentTime = Date.now();
                let raceTime = Number(race.advertised_start.seconds * 1000);
                let diff = (raceTime - currentTime) / 1000;
                //if ( diff < 0) console.log("TIME DIFF: " + diff + "  " + race.race_id);
                return diff >= 0 ? true : false;
            })
            .slice(0,displayCount));
    }, [races, category]);

    const Completionist = () => <Button variant="primary" disabled>STARTED</Button>;

    const getDate = (seconds: string) => {
        let curdate = new Date();
        curdate.setTime(Number(seconds) *1000);
        return (curdate.toLocaleString());
    };

    const raceCompleted = (raceId: string) => {
        // set timeout of 30 sec then delete that race entry
       setTimeout(() => deleteRace(raceId), (Math.floor(Math.random() * (35 - 30 + 1) + 30)) * 1000);
    }

    return (
        <div>
             {catagoryRaces.length === 0 && (
                 <p>Loading....</p>
             )}
             {catagoryRaces.length !== 0 && (
                 <div>
                 {/* <p>Category Match : {Object.values(races).filter((race: any) => race.category_id === category).length}</p> */}
                 <br/>
                 <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th className="table-heading">Sr.No</th>
                        <th className="table-heading">Venue</th>
                        <th className="table-heading">Meeting Name</th>
                        <th className="table-heading">Race Number</th>
                        <th className="table-heading">Countdown</th>
                        </tr>
                    </thead>
                    <tbody>
                        { catagoryRaces.map((race: any, index: number) => {
                            return (
                                <tr key={race.race_id} data-testid="race-row">
                                    <td>{index + 1}</td>
                                    <td>{race.venue_name}, {race.venue_country}</td>
                                    <td>{race.meeting_name}</td>
                                    <td>{race.race_number}</td>
                                    <td>
                                        <Countdown date={getDate(race.advertised_start.seconds)} onComplete={()=>raceCompleted(race.race_id)}>
                                            <Completionist/>
                                        </Countdown>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                </div>
             )}
        </div>
    )
};
