function showRecentWeatherCards(searchedLocationsList) {
  // console.log("reached showing:", searchedLocationsList);

  let weatherCardContainer = document.createElement("div");
  let weatherCardList = document.createElement("ul");

  weatherCardList.classList.add("weatherCardUl");

  searchedLocationsList.forEach((eachSearchLocation) => {
    console.log(eachSearchLocation);

    let cardList = document.createElement("li");
    let cardText = document.createElement("p");

    cardList.classList.add("card-list-li");

    cardText.textContent = eachSearchLocation.locations;

    cardList.appendChild(cardText);

    weatherCardList.appendChild(cardList);

    // weatherCardContainer.appendChild(weatherCardList);
  });

  let weatherUpdatesHeading = document.createElement("h2");
  weatherUpdatesHeading.textContent = "Weather Updates"; // Placeholder heading
  weatherUpdatesHeading.classList.add("weather-updates-heading");

  let weatherUpdatesContainer = document.createElement("div");
  weatherUpdatesContainer.classList.add("weather-updates-container");

  weatherCardContainer.appendChild(weatherCardList);

  let locationContainer = document.querySelector(".location-container");
  let appContainer = document.querySelector(".application-container");
  locationContainer.appendChild(weatherCardContainer);
  appContainer.appendChild(weatherUpdatesHeading);
  appContainer.appendChild(weatherUpdatesContainer);
}

export default showRecentWeatherCards;
