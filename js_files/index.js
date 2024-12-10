import storeRecentlyViewedResult from "./recentLocations.js";
import { getFromLocalStorage } from "./recentLocations.js";
import showRecentWeatherCards from "./showRecentWeatherCards.js";
import viewWeatherUpdates from "./viewWeatherUpdates.js";

let searchLocationInputElement = document.getElementById("searchLocationInput");

let searchBtnElement = document.getElementById("searchBtn");

let searchedLocationsList = getFromLocalStorage();

// getCurrentPosition();

/* function getCurrentPosition() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      console.log(latitude, longitude);
    });
  }

  // return latitude, longitude;
} */

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
