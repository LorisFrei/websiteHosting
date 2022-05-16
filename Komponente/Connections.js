import {useEffect, useState} from "react";
import {getConnections} from "../Service/connectionService";
import data from "bootstrap/js/src/dom/data";

export default function Connections() {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [connections, setConnections] = useState({connections: []});
    return (
        <div>
            <h4>SBB-Fahrplan</h4>
            <h6>Verbindung Suchen:</h6>

            <label><strong>Von:</strong></label><br/>
            <input type="text" value={from} onChange={(event => {
                setFrom(event.target.value);
            })}/><br/>

            <label><strong>Nach:</strong></label><br/>
            <input type="text" value={to} onChange={(event => {
                setTo(event.target.value);
            })}/><br/><br/>

            <button onClick={() =>
                getConnections(from, to, (data) => {
                    setConnections(data);
                    console.log(data)
                    console.log(connections)
                }, (error) => {
                    console.log(error)
                })}>Suchen
            </button>
            <br/>

            <br/>
            <table style={{width: "fit-content"}} className="table">
                <thead></thead>
                <tbody>
                {connections.connections.map((verbindung) => <tr>
                    <td>{verbindung.products}</td>
                    <td>{verbindung.from.location.name}</td>
                    <td>{verbindung.to.location.name}</td>
                    <td>{verbindung.from.departure.match(/\d\d:\d\d/)}</td>
                </tr>)}
                </tbody>
            </table>


        </div>
    )
}