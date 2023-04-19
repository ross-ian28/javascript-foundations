var assert = require('chai').assert;
const { Ferret, makeFriends, findCageMates } = require('../exercises/ferret');

describe('Ferrey', function() {
  it('should be able to create a ferret with a name', function() {
    var ferret = new Ferret('Pabu');

    assert.equal(ferret.name, 'Pabu');
  });

  it('should be able to have a different name', function() {
    var ferret = new Ferret('Loki');

    assert.equal(ferret.name, 'Loki');
  });

  it('should be hungry', function() {
    var ferret = new Ferret('Pabu');

    assert.equal(ferret.hungry, true);
  });

  it('should start with no kibble eaten', function() {
    var ferret = new Ferret('Pabu');

    assert.equal(ferret.kibbleEaten, 0);
  });

  it('should eat 2 kibble with each bite', function() {
    var ferret = new Ferret('Pabu');

    assert.equal(ferret.kibbleEaten, 0);
    ferret.eat();
    assert.equal(ferret.kibbleEaten, 2);
  });

  it('should be full at 10 kibble by default', function() {
    var ferret = new Ferret('Pabu');

    assert.equal(ferret.kibbleEaten, 0);
    ferret.eat();
    assert.equal(ferret.kibbleEaten, 2);
    ferret.eat();
    ferret.eat();
    ferret.eat();
    ferret.eat();
    assert.equal(ferret.kibbleEaten, 10);
    assert.equal(ferret.hungry, false);
  });

  it('should be full at full limit if set', function() {
    var ferret = new Ferret('Pabu', 4);

    assert.equal(ferret.kibbleEaten, 0);
    ferret.eat();
    assert.equal(ferret.kibbleEaten, 2);
    ferret.eat();
    assert.equal(ferret.kibbleEaten, 4);
    assert.equal(ferret.hungry, false);
  });

  it('should be tired by default', function() {
    var ferret = new Ferret('Pabu', 12);

    assert.equal(ferret.mood, 'tired');
  });

  it('should take mood as an argument', function() {
    var ferret = new Ferret('Pabu', 12, 'happy');

    assert.equal(ferret.mood, 'happy');
  });

  it('should yawn if tired', function() {
    var ferret = new Ferret('Pabu', 12, 'tired');
    var expectedResponse = "'yawn'"

    var yawn = ferret.findThoughts();

    assert.equal(yawn, expectedResponse);
  });

  it('should dook if happy', function() {
    var ferret = new Ferret('Pabu', 12, 'happy');
    var expectedResponse = "'dook sound'"

    var dook = ferret.findThoughts();

    assert.equal(dook, expectedResponse);
  });

  it('should act confused for any other mood', function() {
    var ferret = new Ferret('Pabu', 12, 'angry');
    var expectedResponse = "'confusion?'"

    var unexpected = ferret.findThoughts();

    assert.equal(unexpected, expectedResponse);
  });

  it('should start off with 0 friends', function() {
    var ferret = new Ferret('Pabu', 12);

    assert.equal(ferret.friends.length, 0);
    assert.deepEqual(ferret.friends, []);
  });

  it('should be able to make a friend', function() {
    var ferret = new Ferret('Pabu', 12);
    var friends = [ {name: 'Thor', cageMate: true } ];

    makeFriends(ferret, friends);

    assert.equal(ferret.friends.length, 1);
    assert.deepEqual(ferret.friends, ['Thor']);
  });

  it('should be able to make multiple friends', function() {
    var ferret = new Ferret('Pabu', 12);
    var friends = [ { name: 'Thor', cageMate: true }, { name: 'Loki', cageMate: true }, { name: 'Goose', cageMate: 'false'} ];

    makeFriends(ferret, friends);

    assert.equal(ferret.friends.length, 3);
    assert.deepEqual(ferret.friends, ['Thor', 'Loki', 'Goose']);
  });

  it('should be able to find cage mates', function() {
    var ferret = new Ferret('Pabu', 12);
    var friends = [ { name: 'Thor', cageMate: true }, { name: 'Loki', cageMate: true }, { name: 'Goose', cageMate: false }, { name: 'Nugget', cageMate: false} ];

    findCageMates(ferret, friends);

    assert.equal(ferret.cageMates.length, 2);
    assert.deepEqual(ferret.cageMates, ['Thor', 'Loki']);
  });

  it('should be able to find cage mates', function() {
    var ferret = new Ferret('Pabu', 12);

    makeCake(ferret, friends);

    assert.equal(ferret.cageMates.length, 2);
    assert.deepEqual(ferret.cageMates, ['Thor', 'Loki']);
  });

  //bake a cake and choose ingrediants
  //available paintngs { name: , colors: [] } ferret(wanted colors: painting chosen: )
});
