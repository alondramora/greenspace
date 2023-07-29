console.log("javascript is working");

//fetches the googleMapLocation from a specific document in my collection
// fetch("http://localhost:3001/spaces/64bf43a0a6e214f3435df46f")
//   .then((response) => response.json())
//   .then((location) => {
//     document.getElementById("googleMapsLocationImage").src =
//       location.googleMapLocation;
//   });

async function fetchGoogleMapsLocationImage(id) {
  try {
    const response = await fetch(`http://localhost:3001/spaces/${id}`);
    if (!response.ok) {
      // if the response is not ok
      throw new Error("Network response not ok.");
    }
    // if the response is ok then...
    const location = await response.json();
    document.getElementById("googleMapsLocationImage").src =
      location.googleMapLocation; // grab the img tag with the id of "googleMapsLocationImage" and update the src so that it links to the googleMapLocation (url) field of the document
  } catch (error) {
    console.error("Error fetching Google Map location:", error);
    throw error;
  }
}

window.addEventListener("DOMContentLoaded", async () => {
  try {
    await fetchGoogleMapsLocationImage("64bf43a0a6e214f3435df46f");
  } catch (error) {
    console.error("Error:", error);
  }
});
