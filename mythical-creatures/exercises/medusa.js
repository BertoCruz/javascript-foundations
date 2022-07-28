var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(medusaName) {
    this.name = medusaName;
    this.statues = [];
  }

  gazeAtVictim(victimPerson){
    var newStatue = new Statue(victimPerson.name);
    var relievedPerson = new Person();

    if(this.statues.length < 3){
      this.statues.push(newStatue);
    } else if (this.statues.length === 3){
      relievedPerson.name = this.statues[0].name;
      relievedPerson.mood = 'relieved';
      this.statues.shift();
      this.statues.push(newStatue);
      return relievedPerson;
    }

  }
}


module.exports = Medusa;
