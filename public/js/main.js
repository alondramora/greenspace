// const { response } = require("express");

//Goal: List out the names of each space, followed by a google maps image
async function listSpacesAndImages() {
  // code will only run if we are on the /spaces page
  if (window.location.pathname == "/spaces") {
    //fetch the green space collection obj and store it in a variable
    const greenSpaceCollection = await fetch(
      "http://localhost:3001/getAllSpaces"
    );
    // gets the JSON from the promise we fetched and stores it in variable
    // greenSpaceDocumentJson is an array of objects, each object is the document from our collection
    const greenSpaceDocumentJson = await greenSpaceCollection.json();
    // console.log(greenSpaceDocumentJson);

    // map through the array of document objects - 'x' is each object which contains an entire document
    greenSpaceDocumentJson.map((x) => {
      const spaceName = x.name; // gets the name of document
      const spaceLocationTest = x.googleMapLocation; // gets img url
      // create h2s for every spaceName
      const createH2 = document.createElement("h2");
      createH2.classList.add("space-name");
      createH2.innerHTML = spaceName;
      document.body.appendChild(createH2);
      console.log(`${spaceName} now has an h2!`);
      // creates an img element
      const createImg = document.createElement("img");
      createImg.classList.add("location-image");
      createImg.src = spaceLocationTest;
      // append the new img element to the h2 we created for this document
      createH2.appendChild(createImg);
      console.log("Image added");
    });
  }
}
listSpacesAndImages();
