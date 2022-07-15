// my intention for when I'm working these problem sets is to be able to
// talk my code out loud! to reinforce my understanding by communicating
//what I DO know. REPEAT-REPEAT-REPEAT!

class Vampire {
  constructor(name, pet) {
    this.name = name;
    //here we continue to learn about setting default values
    this.pet = pet || "bat";
    this.thirsty = true;
    this.ouncesDrank = 0;
  }

  drink() {
    this.ouncesDrank += 10;
    if(this.ouncesDrank > 50){
      this.ouncesDrank = 50;
      return "I\'m too full to drink anymore!";
    } else {
      return this.thirsty = false;
    }

  }
}


module.exports = Vampire;
