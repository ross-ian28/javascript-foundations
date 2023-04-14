var assert = require('chai').assert;
var { Vampire, inquirePlace, findBatLovers } = require('../exercises/vampire');

describe('Vampire', function() {

  it('should create a vampire', function() {
    var vampire = new Vampire('Jhun');

    assert.equal(vampire.name, 'Jhun');
  });

  it('should have a pet bat as a default', function() {
    var vampire = new Vampire('Brittany');

    assert.equal(vampire.name, 'Brittany');
    assert.equal(vampire.pet, 'bat');
  });

  it('should be able to take an argument for pet', function() {
    var vampire = new Vampire('Jeff', 'fox');
    var vampira = new Vampire('Esme', 'armadillo');

    assert.equal(vampire.pet, 'fox');
    assert.equal(vampira.pet, 'armadillo');
  });

  it('should be thirsty', function() {
    var vampire = new Vampire('Andy');

    assert.equal(vampire.thirsty, true);
  });

  it('should shout at victim when thirsty', function() {
    var vampire = new Vampire('Andy');
    var expectedResponse = 'I WANT TO SUCK YOUR BLOOD!'

    var shout = vampire.encounterDeliciousVictim()

    assert.equal(shout, expectedResponse);
  });

  it('should be start with no ounces of blood drank', function() {
    var vampire = new Vampire('Bobby');

    assert.equal(vampire.ouncesDrank, 0);
  });

  it('should drink 10 ounces of blood at a time', function() {
    var vampire = new Vampire('Margot');

    vampire.drink();

    assert.equal(vampire.ouncesDrank, 10);

    vampire.drink();

    assert.equal(vampire.ouncesDrank, 20);

    vampire.drink();

    assert.equal(vampire.ouncesDrank, 30);
  });

  it('should no longer be thirsty after drinking 50 ounces', function() {
    var vampire = new Vampire('Javi');

    vampire.drink();
    vampire.drink();
    vampire.drink();
    vampire.drink();
    vampire.drink();

    assert.equal(vampire.ouncesDrank, 50);
    assert.equal(vampire.thirsty, false);
  });

  it('should not drink more ounces when not thirsty', function() {
    var vampire = new Vampire('Javi');

    vampire.drink();
    vampire.drink();
    vampire.drink();
    vampire.drink();
    vampire.drink();

    assert.equal(vampire.ouncesDrank, 50);
    assert.equal(vampire.thirsty, false);

    vampire.drink();;

    assert.equal(vampire.ouncesDrank, 50);
  });

  it('should refuse blood from victim when not thirsty', function() {
    var vampire = new Vampire('Javi');

    vampire.drink();
    vampire.drink();
    vampire.drink();
    vampire.drink();
    vampire.drink();

    assert.equal(vampire.ouncesDrank, 50);
    assert.equal(vampire.thirsty, false);

    var response = vampire.encounterDeliciousVictim()

    assert.equal(response, `No thanks, I am too full.`);
  });

  it('should say if its been to a location', function() {
    var locations = ['Transylvania', 'Washington', 'New Orleans', 'Mystic Falls'];

    var response = inquirePlace(locations, 'New Orleans');
    var expectedResponse = "Yes, I have spent some time in New Orleans."

    assert.deepEqual(response, expectedResponse);
  });

  it('should say if its not been to a location', function() {
    var locations = ['Transylvania', 'Washington', 'New Orleans', 'Mystic Falls'];

    var response = inquirePlace(locations, 'Idaho');
    var expectedResponse = "No, I have never been to Idaho."

    assert.deepEqual(response, expectedResponse);
  });

  //Spicy
  it('should be able to find the vampires with bats', function() {
    var javi = new Vampire('Javi');
    var brittany = new Vampire('Brittany');
    var jeff = new Vampire('Jeff', 'fox');
    var david = new Vampire('David', 'armadillo');

    var vampires = [javi, brittany, jeff, david];

    var batLovers = findBatLovers(vampires);

    assert.deepEqual(batLovers, [javi, brittany]);
  });
});
