class Ferret {
  constructor(name, fullLimit = 10, mood = "tired") {
    this.name = name;
    this.hungry = true;
    this.kibbleEaten = 0;
    this.fullLimit = fullLimit;
    this.mood = mood;
    this.friends = [];
    this.cageMates = [];
  }

  eat() {
    this.kibbleEaten += 2
    if (this.kibbleEaten >= this.fullLimit) {
      this.hungry = false
    }
  }

  findThoughts() {
    if (this.mood === "happy") {
      return "'dook sound'"
    } else if (this.mood === "tired") {
      return "'yawn'"
    } else {
      return "'confusion?'"
    }
  }
}

function makeFriends(ferret, friends) {
  friends.map(function(friend){
    ferret.friends.push(friend.name)
  });
  return ferret.friends
}

function findCageMates(ferret, friends) {
  friends.map(function(friend){
    if (friend.cageMate) {
      ferret.cageMates.push(friend.name)
    }
  });
  return ferret.cageMates
}

module.exports = { Ferret, makeFriends, findCageMates }
