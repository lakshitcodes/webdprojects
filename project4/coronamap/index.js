function updateMap() {
  fetch("data.json")
    .then((response) => response.json())
    .then((rsp) => {
      console.log(rsp);
      rsp.data.forEach((element) => {
        latitude = element.latitude;
        longitude = element.longitude;
        cases = element.infected;
        if (cases > 255) {
          colorq: "rgb(255,0,0)";
        } else {
          colorq: `rgb(${cases},0,0)`;
        }

        //Mark on the map
        new mapboxgl.Marker({
          draggable: false,
          color: "colorq",
        })
          .setLngLat([longitude, latitude])
          .addTo(map);
      });
    });
}

updateMap();
