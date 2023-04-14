var assert = require('chai').assert;
const { Dragon, findFireBreathers } = require('../exercises/dragon');

describe('Dragon', function() {

  it('should be a function', function() {
    assert.isFunction(Dragon);
  });

  it('should be able to create a dragon with a name', function() {
    var dragon = new Dragon('Jeff');

    assert.equal(dragon.name, 'Jeff');
  });

  it('should be able to have a different name', function() {
    var dragon = new Dragon('Louisa');

    assert.equal(dragon.name, 'Louisa');
  });

  it('should have a rider', function() {
    var dragon = new Dragon('Saphira', 'Eragon');

    assert.equal(dragon.name, 'Saphira');
    assert.equal(dragon.rider, 'Eragon');
  });

  it('should be able to have a different rider', function() {
    var dragon = new Dragon('Elliot', 'Pete');

    assert.equal(dragon.name, 'Elliot');
    assert.equal(dragon.rider, 'Pete');
  });

  it('should have a temperment', function() {
    var dragon = new Dragon('Saphira', 'Eragon', 'gentle');

    assert.equal(dragon.name, 'Saphira');
    assert.equal(dragon.rider, 'Eragon');
    assert.equal(dragon.temperament, 'gentle');
  });

  it('should be able to have different temperments', function() {
    var dragon1 = new Dragon('Gray', 'Marley', 'aggressive');
    var dragon2 = new Dragon('Sky', 'Susie', 'gentle');


    assert.equal(dragon1.name, 'Gray');
    assert.equal(dragon1.rider, 'Marley');
    assert.equal(dragon1.temperament, 'aggressive');

    assert.equal(dragon2.name, 'Sky');
    assert.equal(dragon2.rider, 'Susie');
    assert.equal(dragon2.temperament, 'gentle');
  });

  it('should greet their rider', function() {
    var dragon1 = new Dragon('Gray', 'Marley', 'aggressive');
    var dragon2 = new Dragon('Sky', 'Susie', 'gentle');

    var greeting1 = dragon1.greetRider();
    var greeting2 = dragon2.greetRider();

    assert.equal(greeting1, 'Hi, Marley!');
    assert.equal(greeting2, 'Hi, Susie!');
  });

  it('should start off having eaten 0 times', function() {
    var dragon = new Dragon('Mushu', 'Mulan', 'aggressive');

    assert.equal(dragon.timesEaten, 0);
  });

  it('should start off being hungry', function() {
    var dragon = new Dragon('Mushu', 'Mulan', 'aggressive');

    assert.equal(dragon.hungry, true);
  });

  it('should be full after eating 3 times', function() {
    var dragon = new Dragon('Lady Vox', 'Emily', 'gentle');

    dragon.eat();

    assert.equal(dragon.timesEaten, 1);
    assert.equal(dragon.hungry, true);

    dragon.eat();

    assert.equal(dragon.timesEaten, 2);
    assert.equal(dragon.hungry, true);

    dragon.eat();

    assert.equal(dragon.timesEaten, 3);
    assert.equal(dragon.hungry, false);
  });

  //Spicy:
  it('should be a fireBreather if aggressive in temperament', function() {
    const dragon1 = new Dragon('Gray', 'Marley', 'aggressive');
    const dragon2 = new Dragon('Sky', 'Susie', 'gentle');
    const dragon3 = new Dragon('Mushu', 'Mulan', 'aggressive');
    const dragon4 = new Dragon('Lady Vox', 'Emily', 'gentle');

    const allDragons = [dragon1, dragon2, dragon3, dragon4];

    const fireBreathers = findFireBreathers(allDragons);

    assert.deepEqual(fireBreathers, [dragon1, dragon3])
  });
});
