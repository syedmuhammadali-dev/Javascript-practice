const apiUrl = "https://jsonplaceholder.typicode.com/users";

const apiCallNewWay = async () => {
  const res = await axios.get(apiUrl);
  console.log(res);
};

apiCallNewWay();

const fnc = () => {
  const res = axios
    .get(apiUrl)
    .then((result) => {
      console.log(result.data);
    })
    .catch((err) => {
      console.log("something went wrong", err);
    });
};

fnc();

axios
  .get(apiURL)
  .then((res) => {
    console.log(res.data);
  })

  .catch((err) => {
    console.log("something went wrong", err);
  });

const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("yes");
  } else {
    reject("no");
  }
});

myPromise
  .then((result) => {
    console.log(result, "result");
  })
  .catch((err) => {
    console.log(err, "error");
  });

const asyncFunction = async () => {
  const aPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
      resolve("yes");
    } else {
      reject("no");
    }
  });

  let data = await aPromise;
  console.log(data);
};
asyncFunction();
