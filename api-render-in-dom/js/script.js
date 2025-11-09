const ul = document.getElementById("ul");
const apiUrl = "https://jsonplaceholder.typicode.com/users";

const renderData = (apiData) => {
  console.log(apiData);

  if (Array.isArray(apiData) && apiData.length > 0) {
    ul.innerHTML = apiData
      ?.map((item) => {
        return `<li> ${item?.name} </li>`;
      })
      .join("");
  }
};

const apiCall = () => {
  fetch(apiUrl)
    .then((result) => {
      return result.json();
    })
    .then((actualData) => {
      console.log(`Api res`, actualData);
      actualData && renderData(actualData);
    })
    .catch((err) => {
      console.log(`something went wrong`, err);
    });
};

apiCall();
