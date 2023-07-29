// const { response } = require("express");

//stores the array of my green spaces in the greenSpaceCollection variable
async function storeSpacesInArrayAndAddtoDom() {
  //stores the array in a variable
  const greenSpaceCollection = await fetch(
    "http://localhost:3001/getAllSpaces"
  );
  // ensures we get the JSON from the fetch promise
  const greenSpaceDocumentJson = await greenSpaceCollection.json();
  // storing the names of the documents in an array called greenSpaceNames
  const greenSpaceNames = await greenSpaceDocumentJson.map((x) => {
    // create an h2 for each document that grabs the document.name
    return x.name;
  });
  //logs the names of all the documents in the array
  console.log(greenSpaceNames);
}
storeSpacesInArrayAndAddtoDom();

//   //for each document in the array, I want to create an h2 with the document.name and an img tag with the document.googleMapLocation as the src

///////////////////////
// async function fetchGoogleMapsLocationImage(id) {
//   try {
//     const response = await fetch(`http://localhost:3001/spaces/${id}`);
//     if (!response.ok) {
//       // if the response is not ok
//       throw new Error("Network response not ok.");
//     }
//     // if the response is ok then...
//     const location = await response.json();
//     document.getElementById("googleMapsLocationImage").src =
//       location.googleMapLocation; // grab the img tag with the id of "googleMapsLocationImage" and update the src so that it links to the googleMapLocation (url) field of the document
//   } catch (error) {
//     console.error("Error fetching Google Map location:", error);
//     throw error;
//   }
// }

// window.addEventListener("DOMContentLoaded", async () => {
//   try {
//     await fetchGoogleMapsLocationImage("64bf43a0a6e214f3435df46f");
//   } catch (error) {
//     console.error("Error:", error);
//   }
// });
//////////////////////////

//fetches the googleMapLocation from a specific document in my collection
// fetch("http://localhost:3001/spaces/64bf43a0a6e214f3435df46f")
//   .then((response) => response.json())
//   .then((location) => {
//     document.getElementById("googleMapsLocationImage").src =
//       location.googleMapLocation;
//   });
////////////////////////
