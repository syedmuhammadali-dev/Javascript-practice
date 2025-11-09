const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolved successfully");
  }, 2000);
});

myPromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

const verifyNum = new Promise((resolve, reject) => {
  const num = +prompt(`Enter number here`);
  if (num % 2 == 0) {
    resolve`${num} resolved`;
  }
  reject`number is not even`;
});

verifyNum
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.log(res);
  });
