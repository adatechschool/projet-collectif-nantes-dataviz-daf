// js\globalVariables.js

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
  pageSize: 50,
  pageNumber: 1,
};

function buildEndpoint() {
  const urlParameters = [];

  if (globalVariables.pageNumber !== null && globalVariables.pageNumber >= 1) {
    urlParameters.push(`page=${globalVariables.pageNumber}`);
  }

  if (
    globalVariables.pageSize !== null &&
    globalVariables.pageSize >= 1 &&
    globalVariables.pageSize <= 50
  ) {
    urlParameters.push(`pageSize=${globalVariables.pageSize}`);
  }

  if (globalVariables.title !== null) {
    urlParameters.push(`title=${encodeURIComponent(globalVariables.title)}`);
  }

  if (globalVariables.field_offices !== null) {
    urlParameters.push(`field_offices=${globalVariables.field_offices}`);
  }

  if (globalVariables.person_classification !== null) {
    urlParameters.push(`person_classification=${globalVariables.person_classification}`);
  }

  if (globalVariables.poster_classification !== null) {
    urlParameters.push(`poster_classification=${globalVariables.poster_classification}`);
  }

  if (globalVariables.status !== null) {
    urlParameters.push(`status=${globalVariables.status}`);
  }

  if (globalVariables.height_min !== null) {
    urlParameters.push(`height_min=${globalVariables.height_min}`);
  }

  if (globalVariables.height_max !== null) {
    urlParameters.push(`height_max=${globalVariables.height_max}`);
  }

  if (globalVariables.weight_min !== null) {
    urlParameters.push(`weight_min=${globalVariables.weight_min}`);
  }

  if (globalVariables.weight_max !== null) {
    urlParameters.push(`weight_max=${globalVariables.weight_max}`);
  }

  if (globalVariables.sex !== null) {
    urlParameters.push(`sex=${globalVariables.sex}`);
  }

  if (globalVariables.race !== null) {
    urlParameters.push(`race=${globalVariables.race}`);
  }

  if (globalVariables.build !== null) {
    urlParameters.push(`build=${globalVariables.build}`);
  }

  if (globalVariables.eyes !== null) {
    urlParameters.push(`eyes=${globalVariables.eyes}`);
  }

  if (globalVariables.hair !== null) {
    urlParameters.push(`hair=${globalVariables.hair}`);
  }

  if (globalVariables.age_min !== null) {
    urlParameters.push(`age_min=${globalVariables.age_min}`);
  }

  if (globalVariables.age_max !== null) {
    urlParameters.push(`age_max=${globalVariables.age_max}`);
  }

  if (globalVariables.possible_countries !== null) {
    urlParameters.push(`possible_countries=${globalVariables.possible_countries}`);
  }

  if (globalVariables.possible_states !== null) {
    urlParameters.push(`possible_states=${globalVariables.possible_states}`);
  }

  if (globalVariables.reward_min !== null) {
    urlParameters.push(`reward_min=${globalVariables.reward_min}`);
  }

  if (globalVariables.reward_max !== null) {
    urlParameters.push(`reward_max=${globalVariables.reward_max}`);
  }

  if (urlParameters.length > 0) {
    return globalVariables.url + urlParameters.join("&");
  } else {
    return globalVariables.url;
  }
}

export { globalVariables, buildEndpoint };
