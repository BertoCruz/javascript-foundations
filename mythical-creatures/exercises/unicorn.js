class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color || "white";
  }

  isWhite() {
    //i'm proud of you for practicing best coding practice right here
    //DRY method here we go!
    return this.color === "white";
  }

  says(stuff) {
    return `**;* ${stuff} *;**`
  }
}

module.exports = Unicorn;
