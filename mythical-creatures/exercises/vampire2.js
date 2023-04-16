function createVampire(name, pet = "bat") {
  return {
    name: name,
    pet: pet,
    thirsty: true,
    ouncesDrank: 0,
  };
}

function encounterDeliciousVictim(vampire) {
  if (vampire.thirsty && vampire.ouncesDrank < 50) {
    return "I WANT TO SUCK YOUR BLOOD!"
  } else {
    return "No thanks, I am too full."
  }
}

function drink(vampire) {
  if (vampire.thirsty) {
    vampire.ouncesDrank += 10;
    if (vampire.ouncesDrank == 50) {
      vampire.thirsty = false
    }
  }
  return vampire;
}

function inquirePlace(locations, place) {
  if (locations.includes(place)) {
    return `Yes, I have spent some time in ${place}.`
  } else {
    return `No, I have never been to ${place}.`
  }
}

function findBatLovers(vampires) {
  return vampires.filter(function(vampire) {
    return vampire.pet === "bat";
  });
}

module.exports = { createVampire, encounterDeliciousVictim, drink, inquirePlace, findBatLovers }
