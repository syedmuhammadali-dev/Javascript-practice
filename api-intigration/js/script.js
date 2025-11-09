const apiURL = "https://jsonplaceholder.typicode.com/users";

//  fetch method

// fetch(apiURL)
//   .then((res) => {
//     return res.json();
//   })
//   .then((actualData) => {
//     console.log(actualData);
//   })
//   .catch((err) => {
//     console.log("something went wrong", err);
//   });

// axios latest method

axios
  .get(apiURL)
  .then((res) => {
    console.log(res.data);
  })

  .catch((err) => {
    console.log("something went wrong", err);
  });
