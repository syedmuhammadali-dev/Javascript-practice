// // prototype examples

const employee = {
  calcTax1() {
    console.log(`Tax rate is 10%`);
  },
};

const ali = {
  salary: 5000,
};

ali.__proto__ = employee;
ali.calcTax1(); // Tax rate is 10%

// // ali wala object ma employee wala function aa gaya
// // proto ka zariya se ali ko employee wala function mil gaya

// // agar hum ali ki tarah or bhi employee add karainga to us ma hama 10% tax ka lia alag likhna nhi paraga proto ka zariya
// // hum sab ko employee wala function de sakte hain

// class in objects

class toyotaCar {
  start() {
    console.log(`start`);
  }
  stop() {
    console.log(`stop`);
  }

  setBrand(brand) {
    // this.brand = brand;
    this.brandName = brand;
  }
}

let fortuner = new toyotaCar();
fortuner.setBrand(`Fortuner`);
let lexus = new toyotaCar();
fortuner.setBrand(`Fortuner`);

// constructor function

class toyotaCar {
  start() {
    console.log(`start`);
  }
  stop() {
    console.log(`stop`);
  }
}

let fortuner1 = new toyotaCar();
let lexus1 = new toyotaCar();

Inheritance;

class students {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log(`website Data`);
  }
}

let student1 = new students(`Ali`, `ali@abc.com`);
