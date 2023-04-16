class Vampire {
  constructor(name, pet = "bat") {
    this.name = name
    this.pet = pet
    this.thirsty = true
    this.ouncesDrank = 0
  }

  encounterDeliciousVictim() {
    if (this.thirsty) {
      return "I WANT TO SUCK YOUR BLOOD!"
    }
    else {
      return "No thanks, I am too full."
    }
  }

  drink() {
    this.thirsty = false;
    if (this.ouncesDrank < 50) {
      this.ouncesDrank += 10;
    }
  }
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
module.exports = { Vampire, inquirePlace, findBatLovers }
