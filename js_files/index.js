import storeRecentlyViewedResult from "./recentLocations.js";
import { getFromLocalStorage } from "./recentLocations.js";
import showRecentWeatherCards from "./showRecentWeatherCards.js";
import viewWeatherUpdates from "./viewWeatherUpdates.js";

let searchLocationInputElement = document.getElementById("searchLocationInput");

let searchBtnElement = document.getElementById("searchBtn");

let searchedLocationsList = getFromLocalStorage();

if (searchedLocationsList.length > 0) {
  showRecentWeatherCards(searchedLocationsList);
}

function handleSearchInput() {
  let searchedLocation = searchLocationInputElement.value.trim();

  if (searchedLocation === "") {
    alert("Please enter Location");
    return;
  }
  // console.log(searchedLocation);
  storeRecentlyViewedResult(searchedLocation, searchedLocationsList);

  viewWeatherUpdates(searchedLocation);

  searchLocationInputElement.value = "";
}

searchBtnElement.onclick = function () {
  handleSearchInput();
};

searchLocationInputElement.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    handleSearchInput();
  }
});
