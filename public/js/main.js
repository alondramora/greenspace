console.log("javascript is working");

//fetches the googleMapLocation from a specific document in my collection
fetch("http://localhost:3001/spaces/64bf43a0a6e214f3435df46f")
  .then((response) => response.json())
  .then((location) => {
    document.getElementById("googleMapsLocationImage").src =
      location.googleMapLocation;
  });
