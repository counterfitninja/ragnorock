// A function to display and manipulate the map


// define the map
var map = L.map('map', {
  crs: L.CRS.Simple,
  zoomControl: true,
  minZoom: 1
});
 

// define the background of the map
var bounds = [[-5,-5], [105,105]];
var image = L.imageOverlay(mapfile, bounds).addTo(map);


// define custom icons for obelisks 
var obelIcon = L.Icon.extend({
  options: {
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -8]
  }
});
var greenObelIcon = new obelIcon({iconUrl: 'design/obelisk-green.png'}),
    redObelIcon = new obelIcon({iconUrl: 'design/obelisk-red.png'}),
    blueObelIcon = new obelIcon({iconUrl: 'design/obelisk-blue.png'});


// define custom icon for event
var eventIcon = L.icon({
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -10],
    iconUrl: 'design/event.png'
});


// place obelisk pins
L.marker([100-redObel[0], redObel[1]], {icon: redObelIcon}).addTo(map).bindPopup(redObel[2] + '<br />' + redObel[0].toFixed(1) + ' / ' + redObel[1].toFixed(1));
L.marker([100-blueObel[0], blueObel[1]], {icon: blueObelIcon}).addTo(map).bindPopup(blueObel[2] + '<br />' + blueObel[0].toFixed(1) + ' / ' + blueObel[1].toFixed(1));
L.marker([100-greenObel[0], greenObel[1]], {icon: greenObelIcon}).addTo(map).bindPopup(greenObel[2] + '<br />' + greenObel[0].toFixed(1) + ' / ' + greenObel[1].toFixed(1));


// place event pins
fLen = events.length;
for (i = 0; i < fLen; i++) {
  L.marker([100-events[i][0], events[i][1]], {icon: eventIcon}).addTo(map).bindPopup(events[i][2] + '<br />' + events[i][0].toFixed(1) + ' / ' + events[i][1].toFixed(1));
} 


// place standard pins
fLen = mark.length;
for (i = 0; i < fLen; i++) {
  L.marker([100-mark[i][0], mark[i][1]], {icon: L.AwesomeMarkers.icon({icon: mark[i][2], prefix: 'fa', markerColor: mark[i][3]}) }).addTo(map).bindPopup(mark[i][4] + '<br />' + mark[i][0].toFixed(1) + ' / ' + mark[i][1].toFixed(1));
}  


// set initial map view
map.setView([50,50], 3);