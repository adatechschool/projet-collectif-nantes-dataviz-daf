async function fetchDataByPageNumber(pageNumber) {
  const RESPONSE = await fetch(`https://api.fbi.gov/wanted?page=${pageNumber}`);
  const data = await RESPONSE.json();
  console.log(data);
  return data;
}
export { fetchDataByPageNumber };
