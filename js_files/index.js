import storeRecentlyViewedResult from "./recentLocations.js";
import { getFromLocalStorage } from "./recentLocations.js";

let searchLocationInputElement = document.getElementById("searchLocationInput");

let searchBtnElement = document.getElementById("searchBtn");

let searchedLocationsList = getFromLocalStorage() || [];

/* if (!searchedLocationsList) {
  getFromLocalStorage = [];
} */

// if (!searchedLocationsList) searchedLocationsList = [];

function handleSearchInput() {
  let searchedLocation = searchLocationInputElement.value.trim();

  if (searchedLocation === "") {
    alert("Please enter Location");
    return;
  }
  // console.log(searchedLocation);
  storeRecentlyViewedResult(searchedLocation, searchedLocationsList);

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
