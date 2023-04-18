function createHobbit(name = "unknown", age = 0) {
  return {
    name: name,
    age: age,
    isAdult: age > 32,
    isOld: age > 100,
    acquaintances: [],
    friends: []
  }
}

function celebrateBirthday(hobbit) {
  hobbit.age += 1
  if (hobbit.age > 32) {
    hobbit.isAdult = true
  }
  if (hobbit.age > 100) {
    hobbit.isOld = true
  }
  return hobbit
}

function getRing(hobbit) {
  if (hobbit.name === "Frodo") {
    return 'Here is the ring!'
  } else {
    return 'You can\'t have it!'
  }
}

function meetPeople(hobbit, people) {
  people.map(function(person){
    hobbit.acquaintances.push(person)
  });
  return hobbit
}

function findFriends(hobbit) {
  hobbit.acquaintances.map(function(person){
    if (person.relationship === "friend") {
      hobbit.friends.push(person.name)
    }
  });
  return hobbit.friends
}

module.exports = { createHobbit, celebrateBirthday, getRing, meetPeople, findFriends }
