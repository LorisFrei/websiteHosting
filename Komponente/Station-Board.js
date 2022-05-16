import {useEffect, useState} from "react";
import {getConnectionsWinterthur} from "../Service/connectionService";
import data from "bootstrap/js/src/dom/data";

export default function StationBoard() {
    const [connections, setConnections] = useState([]);
    useEffect(() => {
        getConnectionsWinterthur((data) => {
            setConnections(data.stationboard)
        }, (error) => {
            console.log(error)
        })
    }, [])
    return (
        <div>
            <h4>Abfahrtstafel Winterthur</h4>
            <br/>
            <table style={{width: "fit-content"}} className="table">
                <thead>
                <th>Train</th>
                <th>From</th>
                <th>To</th>
                <th>Departure Time</th>
                </thead>
                <tbody>
                {connections.map((verbindung) => <tr>
                    <td>{verbindung.category + verbindung.number}</td>
                    <td>Winterthur</td>
                    <td>{verbindung.to}</td>
                    <td>{verbindung.stop.departure.match(/\d\d:\d\d/)}</td>
                </tr>)}
                </tbody>
            </table>
        </div>
    )
}