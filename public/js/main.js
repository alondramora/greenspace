// const { response } = require("express");

//Goal: List out the names of each space, followed by a google maps image location
async function listSpacesAndImages() {
  // code will only run if we are on the /spaces page
  if (window.location.pathname == "/spaces") {
    //stores the array in a variable greenSpaceCollection
    const greenSpaceCollection = await fetch(
      "http://localhost:3001/getAllSpaces"
    );
    // ensures we get the JSON from the promise
    const greenSpaceDocumentJson = await greenSpaceCollection.json();

    const SpaceNames = await greenSpaceDocumentJson.map((x) => {
      // stores the names all documents in the collection in an array called SpaceNames
      return x.name;
    });

    // Takes each element in the SpaceNames array and creates an h2 element in the html for each one, they each have a class name of space-name
    SpaceNames.map((x) => {
      const createH2 = document.createElement("h2");
      createH2.classList.add("space-name");
      createH2.innerHTML = x;
      document.body.appendChild(createH2);
      console.log(`${x} now has an h2!`);
    });

    // I also want to add in images for each green space
    const SpaceImages = await greenSpaceDocumentJson.map((x) => {
      // stores all of the googleMapsLocation values into one array called SpaceImages
      return x.googleMapLocation;
    });

    SpaceImages.map((x) => {
      const createImg = document.createElement("img");
      createImg.classList.add("location-image");
      createImg.src = x;
      document.body.appendChild(createImg);
      console.log("Image added");
    });
  }
}
listSpacesAndImages();
