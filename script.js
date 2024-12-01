// script.js

// import { possible_countries } from "./js/data.js";
// import { fetchDataBasedOnInitialParameters } from "./js/fetchedData.js";

import { handleDisplayOfWebsite } from "./js/eventsHandlers.js";

document.addEventListener("DOMContentLoaded", handleDisplayOfWebsite);

/* ———— Do not delete — keep it commented instead ———— */

// fetchDataBasedOnInitialParameters()
//   .then((data) => {
//     console.log("data", data);
//     console.log("length before", possible_countries.length);
//     data.items.forEach((item) => {
//       if (!possible_countries.includes(item.possible_countries)) {
//         possible_countries.push(item.possible_countries);
//       }
//     });
//     console.log(possible_countries);
//     console.log("length after", possible_countries.length);
//   })
//   .catch((error) => {
//     console.error("error:", error);
//   });

// fetchDataBasedOnInitialParameters()
//   .then((data) => {
//     console.log("data", data);
//     console.log("length before", possible_countries.length);

//     data.items.forEach((item) => {
//       if (item.possible_countries) {
//         item.possible_countries.forEach((country) => {
//           if (!possible_countries.includes(country)) {
//             possible_countries.push(country);
//           }
//         });
//       }
//     });

//     console.log(possible_countries);
//     console.log("length after", possible_countries.length);
//   })
//   .catch((error) => {
//     console.error("error:", error);
//   });

/* ———————————————————————————————————————————————— */
