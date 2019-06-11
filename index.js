const squares = [
  100,
  0,
  50,
  0,
  -20,
  10,
  -10,
  -20,
  50,
  -50,
  0,
  -15,
  0,
  10,
  -10,
  0
];

/*
const player1 = {
  name: "Svenja",
  cash: 500,
  position: 0,
  move: function() {
    let dice = Math.floor(Math.random() * 6) + 1;

    this.position = (this.position + dice) % squares.length;

    this.cash += squares[this.position];
  },
  displayInfo: function() {
    console.log(
      `${this.name} is at position ${this.position} standing with $${this.cash}`
    );
  }
};

const player2 = {
  name: "Bruno",
  cash: 500,
  position: 0,
  move: function() {
    let dice = Math.ceil(Math.random() * 6);

    this.position = (this.position + dice) % squares.length;

    this.cash += squares[this.position];
  },
  displayInfo: function() {
    console.log(
      `${this.name} is at position ${this.position} standing with $${this.cash}`
    );
  }
};

*/

class Player {
  constructor(name, color, cash = 500) {
    this.cash = cash;
    this.position = 0;
    this.name = name;
    this.color = color;
  }

  move() {
    let dice = Math.ceil(Math.random() * 6);

    this.position = (this.position + dice) % squares.length;

    this.cash += squares[this.position];
  }

  displayInfo() {
    console.log(
      `${this.name} is at position ${this.position} standing with $${this.cash}`
    );
  }
}

const player1 = new Player("Svenja", "red");
const player2 = new Player("Bruno", "blue", 10000);

player1.move();
player2.move();

player1.move();
player2.move();
player1.move();
player2.move();
player1.move();
player2.move();

// player1.displayInfo();
// player2.displayInfo();

class Building {
  constructor(properties) {
    this.height = properties.height;
    this.style = properties.style;
    this.rooms = properties.rooms;
    this.sqFt = properties.sqFt;
    this.address = properties.address;
  }
}

const props = {
  height: 21,
  style: "modern",
  rooms: [],
  address: "EichhornStr. 3",
  sqFt: 99999
};
const atriumTower = new Building(props);

class BankAccount {
  // code here
}

let account1 = new BankAccount("Veronika", "$");
account1.depositMoney(100);
account1.withdrawMoney(30);
account1.showBalance();
// $ 70
