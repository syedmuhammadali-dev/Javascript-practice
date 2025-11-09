// call back hell _____________________________

function getData(id, getNextData) {
  // 2s timeout _____________________

  setTimeout(() => {
    console.log("data", id);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

// call back hell ______________________________

getData(1, () => {
  console.log("data 1 done");
  console.log("Getting data 2");
  getData(2, () => {
    console.log("data 2 done");
    console.log("Getting data 3");
    getData(3, () => {
      console.log("data 3 done");
      console.log("Getting data 4");
      getData(4);
      console.log("data 4 done");
    });
  });
});

// is nested call back ko call back hell kehte hain
// is sa bachna ka lia promisses hota hain

// promisses _______________________________________

// program 1 _______________

let promisses = new Promise((resolve, reject) => {
  console.log(`I am promisses`);
  resolve("I am resolved");
  //   reject("I am rejected");
});

// program 2 ______________

const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am a promise");
    // resolve("success");
    reject("error");
  });
};

let promise = getPromise();
promise.then((res) => {
  console.log("Promise fulfilled", res);
});

promise.catch((err) => {
  console.log("rejected", err);
});

// promise chaining _________________________________________

let pizzaPromise = new Promise(function (resolve, reject) {
  let pizzaReady = true;

  if (pizzaReady) {
    resolve("Pizza mil gaya! 🍕");
  } else {
    reject("Pizza nahi mila. 😢");
  }
});

pizzaPromise
  .then(function (result) {
    console.log("Success: " + result);
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });

// async await ______________________________________

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  const result = await resolveAfter2Seconds();
  console.log(result);
  // Expected output: "resolved"
}

asyncCall();

// async function IIFE _________________________________

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

(async function () {
  console.log("calling");
  const result = await resolveAfter2Seconds();
  console.log(result);
  // Expected output: "resolved"
})();

// standard IIFE
(function () {
  // statements…
})();

// arrow function variant
(() => {
  // statements…
})();

// async IIFE
(async () => {
  // statements…
})();

// fetch API example ____________________________

// async await sa

const URL = "https://catfact.ninja/fact";
const factP = document.querySelector("#p");
const factBtn = document.querySelector("#btn");

const getFacts = async () => {
  console.log("Getting data...");
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  factP.innerText = data.fact;
};

factBtn.addEventListener("click", getFacts);

// promise chaining sa

const URL1 = "https://catfact.ninja/fact";
const factP1 = document.querySelector("#p");
const factBtn1 = document.querySelector("#btn");

const getFacts1 = () => {
  console.log("Getting data...");
  fetch(URL)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      factP.innerText = data.fact;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

factBtn.addEventListener("click", getFacts1);
