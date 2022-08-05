class Skater {
    constructor(person) {
        this.name = person.name;
        this.skill = person.skill;
        this.tricks = person.tricks;
        this.money = person.cash;
        this.frustration = 0;
    }

    practice(trick) {
        if (this.tricks[trick] === false) {
            this.frustration += 1;
            if (this.frustration === 3) {
                this.frustration = 0;
                this.tricks[trick] = true;
                 return `I just learned to ${trick}!!!`;
            }
        }
    }
}

module.exports = Skater;