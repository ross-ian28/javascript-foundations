class Dragon {
  constructor(name, rider, temperament) {
    this.name = name;
    this.rider = rider;
    this.temperament = temperament;
    this.timesEaten = 0
    this.hungry = true;
  }

  greetRider() {
    return `Hi, ${this.rider}!`
  }

  eat() {
    this.timesEaten += 1;
    if (this.timesEaten >= 3) {
      this.hungry = false;
    }
  }
}

function findFireBreathers(dragons) {
  return dragons.filter(function(dragon) {
    return dragon.temperament === 'aggressive';
  });
}
module.exports = { Dragon, findFireBreathers };
