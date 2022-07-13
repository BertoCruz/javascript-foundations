
class Dragon {
  constructor (name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.hungerCount = 0;
  }

  greet() {
    return `Hi, ${this.rider}!`;
  }

  eat() {
    this.hungerCount++;
    if(this.hungerCount === 3){
    return this.hungry = false;
    }
  }
}

module.exports = Dragon
