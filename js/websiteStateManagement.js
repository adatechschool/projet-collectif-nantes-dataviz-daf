// js\websiteStateManagement.js

const globalVariables = {
  url: `https://api.fbi.gov/@wanted?`,

  // parameters
  title: null,
  field_offices: null,
  person_classification: null,
  poster_classification: null,
  status: null,
  height_min: null,
  height_max: null,
  weight_min: null,
  weight_max: null,
  sex: null,
  race: null,
  build: null,
  eyes: null,
  hair: null,
  age_min: null,
  age_max: null,
  possible_countries: null,
  possible_states: null,
  reward_min: null,
  reward_max: null,
  uid: null,
  pageSize: 50,
  page: 1,
};

function buildEndpoint() {
  const urlParameters = [];

  for (const key in globalVariables) {
    if (key === "url") continue;

    if (globalVariables[key] === null || globalVariables[key] === undefined)
      continue;

    if (key === "page") {
      if (globalVariables["page"] >= 1) {
        urlParameters.push(`page=${globalVariables["page"]}`);
      }
    } else if (key === "pageSize") {
      if (
        globalVariables["pageSize"] >= 1 &&
        globalVariables["pageSize"] <= 50
      ) {
        urlParameters.push(`pageSize=${globalVariables["pageSize"]}`);
      }
    } else {
      urlParameters.push(`${key}=${globalVariables[key]}`);
    }
  }

  if (urlParameters.length > 0) {
    return globalVariables.url + urlParameters.join("&");
  } else {
    return globalVariables.url;
  }
}

function setEndpointParameters(variableName, selectedValue) {
  if (!selectedValue) {
    globalVariables[variableName] = null;
  } else {
    globalVariables[variableName] = selectedValue;
  }

  if (variableName === "page") {
    globalVariables.page = selectedValue;
  } else {
    globalVariables.page = 1;
  }
}

function resetInitialEndpointParameters() {
  for (const key in globalVariables) {
    if (key === "page") {
      globalVariables.page = 1;
      continue;
    }

    if (key === "url" || key === "pageSize") {
      continue;
    }
    setEndpointParameters(key, null);
  }
}

export {
  globalVariables,
  buildEndpoint,
  setEndpointParameters,
  resetInitialEndpointParameters,
};
