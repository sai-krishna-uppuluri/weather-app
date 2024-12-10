function displayDropDown(responseJsonLocations) {
  console.log("responseJsonLocations");

  responseJsonLocations.forEach((eachLocation) => {
    let dropDownContainer = document.createElement("div");

    dropDownContainer.classList.add("drop-down-container");

    let selectDropDown = document.createElement("select");
    selectDropDown.classList.add("select-dropdown");

    let optionDropDown = document.createElement("option");

    optionDropDown.textContent = `${eachLocation.name}, ${eachLocation.adm_area1}`;

    selectDropDown.appendChild(optionDropDown);
    dropDownContainer.appendChild(selectDropDown);

    let inputSearchContainer = document.querySelector(".search-container");
    inputSearchContainer.appendChild(dropDownContainer);
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
