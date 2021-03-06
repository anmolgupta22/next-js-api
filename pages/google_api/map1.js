import React from "react";
//import style from "../../styles/map1.css"
const Map2 = () => {
  function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 18,
      center: {
        lat: 40.731,
        lng: -73.997,
      },s
    });
    const geocoder = new google.maps.Geocoder();
    const infowindow = new google.maps.InfoWindow();

    geocodeLatLng(geocoder, map, infowindow);

    document.getElementById("submit").addEventListener("click", () => {
      geocodeLatLng(geocoder, map, infowindow);
    });
  }

  function geocodeLatLng(geocoder, map, infowindow) {
    const input = document.getElementById("latlng").value;
    const latlngStr = input.split(",", 2);
    const latlng = {
      lat: parseFloat(latlngStr[0]),
      lng: parseFloat(latlngStr[1]),
    };

    geocoder
      .geocode({
        location: latlng,
      })
      .then((response) => {
        if (response.results[0]) {
          map.setZoom(11);

          const marker = new google.maps.Marker({
            position: latlng,
            map: map,
          });

          infowindow.setContent(response.results[0].formatted_address);
          document.getElementById(
            "result"
          ).innerHTML = `<h1 style="text-align:center;">${response.results[0].formatted_address}</h1>`;
          infowindow.open(map, marker);
        } else {
          window.alert("No results found");
        }
      })
      .catch((e) => window.alert("Geocoder failed due to: " + e));
  }

  return (
    <html >
      <head >
        <title>  Geocoding </title>
        <script src="https://polyfill.io/v3/polyfill.min.js?features=default">
        </script>
      </head>
      <body style={{ height: "100%", margin: "0", padding: "0"}} >
    <br /><br /><br /><br />
    <br /><br /><br /><br />
    <br /><br /><br /><br />
    <br /><br /><br /><br />


    <div id="result"></div>

    <div id="map"></div>

    <br /><br />

    
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCwYjQh1luEQ7zTzpXnZSNJfG4RK-yVPbQ&callback=initMap&v=weekly&channel=2" async></script>
</body>
      <div id="result"> </div> <div id="map"> </div> <br /> <br />
      <script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCwYjQh1luEQ7zTzpXnZSNJfG4RK-yVPbQ&callback=initMap&v=weekly&channel=2"
        async
      >
        {" "}
      </script>{" "}
    </html>
  );
};

export default Map2;
