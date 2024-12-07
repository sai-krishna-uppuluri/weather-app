export function getFromLocalStorage() {
  let savedLocations = localStorage.getItem("savedLocation");

  let parsedSavedLocations = savedLocations ? JSON.parse(savedLocations) : [];
  console.log("saved");

  return parsedSavedLocations;
}

function storeRecentlyViewedResult(searchedLocation, searchedLocationsList) {
  console.log("recently");

  let saveSearchedLocations = {
    locations: searchedLocation,
  };

  searchedLocationsList.push(saveSearchedLocations);
  localStorage.setItem("savedLocation", JSON.stringify(searchedLocationsList));
}

export default storeRecentlyViewedResult;
