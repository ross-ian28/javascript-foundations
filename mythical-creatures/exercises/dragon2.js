function createDragon(name, rider, temperment) {
  return {
    name: name,
    rider: rider,
    temperment: temperment,
    timesEaten: 0,
    greetRider: function() {
      return 'Hi, ' + this.rider + '!';
    },
    hungry: true,
    fireBreather: function() {
      return this.temperment === 'aggressive';
    }
  };
}

function greetRider(dragon) {
  return dragon.greetRider();
}

function eat(dragon) {
  dragon.timesEaten += 1;
  if (dragon.timesEaten >= 3 ) {
    dragon.hungry = false;
  }
  return dragon;
}

function findFireBreathers(dragons) {
  return dragons.filter(function(dragon) {
    return dragon.fireBreather();
  });
}

module.exports = { createDragon, greetRider, eat, findFireBreathers };
