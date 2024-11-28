async function fetchDataByPageNumber(pageNumber) {
  const RESPONSE = await fetch(`https://api.fbi.gov/wanted?page=${pageNumber}`);
  const data = await RESPONSE.json();
  return data;
}
export { fetchDataByPageNumber };
