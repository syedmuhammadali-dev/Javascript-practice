// optional change ? agar koi bhi onject kaam nhi karaga ya kisis api sa aana wala hai or abhi aaya nhi hai to ya default par error daga islia hum ?. ya use kar raha hain is sa undefined aiga error nh aif=ga or kaam ruka ga nhi jab bhi object milaga to wo undefined ki jagah auto set hojaiga.

const user = {
  newAnimal: {
    newAnimal1: {
      newAnimal2: {
        aName: "ali",
      },
    },
  },
};

console.log(user?.newAnimal?.newAnimal1?.newAnimal2?.aName);

// spread operator

const val = [1, 2, 3];

console.log(Math.max(...val));

import { user } from "../app.js";
console.log(user);
