class SkatePark {
    constructor(park) {
        this.name = park.name;
        this.yearFounded = park.year;
        this.style = park.type;
        this.features = park.features;
        this.isPrivate = park.isPrivate || false;
        this.cost = park.price || 0;
        this.occupants = [];
    }

    admit(newSkater) {
        if (this.occupants.length >= 3) {
            return `Sorry, we are at max capacity. Thank you for understanding.`;
        }
        if (!this.isPrivate ) {
            this.occupants.push(newSkater);
            return `Welcome to the free ${this.name} Skatepark!`
        } else if(newSkater.money >= this.cost && this.isPrivate) {
                newSkater.money -= this.cost;
                this.occupants.push(newSkater);
                return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`   
        } else if (newSkater.money < this.cost) {
            return `Sorry, you don't have enough money.`;
        } 
        
    }
}

module.exports = SkatePark;