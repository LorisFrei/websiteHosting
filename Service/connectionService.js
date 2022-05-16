export function getConnections(from, to, gotConnections,errorConnections) {
    fetch("https://transport.opendata.ch/v1/connections?from="+from+"&to="+to)
        .then(response => response.json())
        .then(data => gotConnections(data))
        .then(error => errorConnections(error))
}
export function getConnectionsWinterthur( gotConnections,errorConnections) {
    fetch("http://transport.opendata.ch/v1/stationboard?station=Winterthur")
        .then(response => response.json())
        .then(data => gotConnections(data))
        .then(error => errorConnections(error))
}