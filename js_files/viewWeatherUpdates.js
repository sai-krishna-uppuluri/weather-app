function displayWeatherReport(getWeatherReportResponse) {
  console.log("final point" + getWeatherReportResponse);

  let weatherUpdatesContainerELement = document.querySelector(
    ".weather-updates-container"
  );

  weatherUpdatesContainerELement.innerHTML = "";

  let weatherReportContainer = document.createElement("div");
  weatherReportContainer.classList.add("weather-report-container");

  let weatherTableContainer = document.createElement("div");
  weatherTableContainer.classList.add("weather-table-container");

  let weatherReportHeadings = document.createElement("div");
  weatherReportHeadings.classList.add("weather-report-headings");

  let weatherReportText = document.createElement("div");
  weatherReportText.classList.add("weatherReportText");

  let timeZoneTextHeading = document.createElement("p");
  timeZoneTextHeading.textContent = "Time Zone";
  weatherReportHeadings.appendChild(timeZoneTextHeading);

  let timeZoneText = document.createElement("p");
  timeZoneText.textContent =
    getWeatherReportResponse.timezone || "time zone not available";
  weatherReportText.appendChild(timeZoneText);

  let summaryHeading = document.createElement("p");
  summaryHeading.textContent = "Summary";
  weatherReportHeadings.appendChild(summaryHeading);

  let summaryText = document.createElement("p");
  summaryText.textContent = getWeatherReportResponse.current.summary;
  weatherReportText.appendChild(summaryText);

  let temperatureHeading = document.createElement("p");
  temperatureHeading.textContent = "Temperature";
  weatherReportHeadings.appendChild(temperatureHeading);

  let temperatureText = document.createElement("p");
  temperatureText.textContent = getWeatherReportResponse.current.temperature;
  weatherReportText.appendChild(temperatureText);

  let feelsHeading = document.createElement("p");
  feelsHeading.textContent = "feels like";
  weatherReportHeadings.appendChild(feelsHeading);

  let feelsText = document.createElement("p");
  feelsText.textContent = getWeatherReportResponse.current.feels_like;
  weatherReportText.appendChild(feelsText);

  let humidityHeading = document.createElement("p");
  humidityHeading.textContent = "Humidity";
  weatherReportHeadings.appendChild(humidityHeading);

  let humidityText = document.createElement("p");
  humidityText.textContent = getWeatherReportResponse.current.humidity;
  weatherReportText.appendChild(humidityText);

  weatherUpdatesContainerELement.appendChild(weatherReportContainer);
  weatherReportContainer.appendChild(weatherTableContainer);
  weatherTableContainer.appendChild(weatherReportHeadings);
  weatherTableContainer.appendChild(weatherReportText);
}

async function fetchWeatherReport(latitude, longitude) {
  console.log("final API");

  const url = `https://ai-weather-by-meteosource.p.rapidapi.com/current?lat=${latitude}&lon=${longitude}&timezone=auto&language=en&units=auto`;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "be437f3ca7msh0bad5a17ce9f5e5p164dc6jsnbc89126b7671",
      "x-rapidapi-host": "ai-weather-by-meteosource.p.rapidapi.com",
    },
  };

  const getWeatherReport = await fetch(url, options);

  const getWeatherReportResponse = await getWeatherReport.json();

  // console.log(getWeatherReportResponse);

  displayWeatherReport(getWeatherReportResponse);
}

async function displayDropDown(responseJsonLocations) {
  console.log("responseJsonLocations");

  let existingDropDown = document.querySelector(".drop-down-container");

  if (existingDropDown) {
    existingDropDown.remove();
  }

  let dropDownContainer = document.createElement("div");

  dropDownContainer.classList.add("drop-down-container");

  let selectDropDown = document.createElement("select");
  selectDropDown.classList.add("select-dropdown");

  responseJsonLocations.forEach((eachLocation) => {
    let optionDropDown = document.createElement("option");
    optionDropDown.textContent = `${eachLocation.name}, ${eachLocation.adm_area1}`;

    optionDropDown.value = `${eachLocation.lat}, ${eachLocation.lon}`;
    selectDropDown.appendChild(optionDropDown);
    dropDownContainer.appendChild(selectDropDown);
    let inputSearchContainer = document.querySelector(".search-container");
    inputSearchContainer.appendChild(dropDownContainer);
  });

  selectDropDown.addEventListener("change", (event) => {
    const [latitude, longitude] = event.target.value.split(",");

    const selectedPlace =
      event.target.options[event.target.selectedIndex].textContent;

    const [place, area] = selectedPlace.split(",");
    console.log(
      "selected Locations position: " + latitude,
      longitude + place,
      area
    );

    fetchWeatherReport(latitude, longitude);
  });
}

async function findSearchLocationApi(searchedLocation) {
  const url = `https://ai-weather-by-meteosource.p.rapidapi.com/find_places?text=${searchedLocation}&language=en`;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "be437f3ca7msh0bad5a17ce9f5e5p164dc6jsnbc89126b7671",
      "x-rapidapi-host": "ai-weather-by-meteosource.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);

    const responseJsonLocations = await response.json();

    //console.log(responseJson);

    await displayDropDown(responseJsonLocations);
  } catch (error) {
    console.log(error);
  }
}

function viewWeatherUpdates(searchedLocation) {
  console.log("view weather updates here");

  // console.log(getCurrentPosition.latitude);

  findSearchLocationApi(searchedLocation);
}

export default viewWeatherUpdates;
