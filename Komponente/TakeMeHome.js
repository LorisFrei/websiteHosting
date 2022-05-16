import {useState} from "react";
import {getConnections} from "../Service/connectionService";

export default function TakeMeHome() {
    let img_url = "";
    const heimatsort = 'neftenbach';
    const [stations, setStations] = useState([])

    function zeigeFehler() {
        console.log("Error")
    }

    function ermittlePosition() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getNextTrainStation, zeigeFehler);
        } else {
            console.log("Fehler")
        }
    }


    function getNextTrainStation(position) {
        console.log(position)
        let latlon = position.coords.latitude + "," + position.coords.longitude;

        fetch("http://transport.opendata.ch/v1/locations?x=" + position.coords.latitude + "&y=" + position.coords.longitude)
            .then(response => response.json())
            .then(data => setStations(data.stations.filter(station => station.id != null)));

    }


    function getVerbindungen(name) {
        return undefined;
    }

    return (
        <div>
            <h4>TakeMeHome</h4><br/>
            <h7>Heimatsort: Neftenbach</h7>
            <button onClick={() => ermittlePosition()}>nach Hause...</button>

            <br/><br/>
            <table className="table">
                <thead>

                </thead>
                <tbody>

                {stations.map((station) => <tr>
                    <td style={{width: "300px"}}>{station.name}</td>
                    <td>{station.distance + "m"}</td>
                    <td>{station.icon}</td>
                    <td>
                        <button onClick={getVerbindungen(station.name)}>Verbindungen Suchen</button>
                    </td>
                </tr>)}
                </tbody>
            </table>


            <table>

            </table>
        </div>
    )
}