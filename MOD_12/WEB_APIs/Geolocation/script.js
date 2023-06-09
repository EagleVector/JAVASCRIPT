// getCurrentPosition(success, error, options)

function curSuccess(pos) {
  const coords = pos.coords;

  console.log(`Latitiude: ${coords.latitude}`);
  console.log(`Longitude: ${coords.longitude}`);
  console.log(`Within: ${coords.accuracy} meters`);
}

function curError(err) {
  console.log(`Error: ${err.code} - ${err.message}`);
}

const curOptions = {
  enableHighAccuracy: true, // Use GPS if available
  timeout: 5000, // Time to wait to stop trying for location
  maximumAge: 0 // Do not use a cached location
};

navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions);

// watchPosition()

const target = {
  latitude: 12.9716,
  longitude: 77.5946
}

function watchSuccess(pos) {
  const coords = pos.coords;
  console.log(coords);
  
  if (target.latitude === coords.latitude && target.longitude === coords) {
    console.log('You have reached your destination!');
    navigator.geolocation.clearWatch(id);
  }
}


function watchError(err) {
  console.log(`Error: ${err.code} - ${err.message}`);
}

const watchOptions = {
  enableHighAccuracy: true, // Use GPS if available
  timeout: 5000, // Time to wait to stop trying for location
  maximumAge: 0 // Do not use a cached location
};

const id = navigator.geolocation.watchPosition(watchSuccess, watchError, watchOptions);

// Getting the position on the map

const map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const marker = L.marker([0, 0]).addTo(map);

navigator.geolocation.getCurrentPosition(function (pos) {
  const lat = pos.coords.latitude;
  const long = pos.coords.longitude;

  marker.setLatLng([lat, long]).update();
  map.setView([lat, long], 14);

  marker.bindPopup('<strong>Hi! There</strong> <br> Home Sweet Home')
})