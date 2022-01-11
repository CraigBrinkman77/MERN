class Ninja{
    constructor(name, health){
        this.name = name
        this.health = health
        this.speed = 3
        this.strength = 3
    }

    sayName(){
        console.log(`My name is ${this.name}`);
    }
    showStats(){
        console.log(`Name : ${this.name} Health : ${this.health} Speed : ${this.speed} Strength : ${this.strength}`)
    }
    drinkSake(){
        this.health += 10;
    }
}

class Sensei extends Ninja{
    constructor(name, health){
        super(name);
        this.health = 200;
        this.wisdom=10;
        this.speed= 10;
        this.strength= 10;
        }

    speakWisdom(){
        super.drinkSake();
        console.log("Wise Message")
    }
    }

superSensei = new Sensei("Master")
console.log(superSensei)
superSensei.speakWisdom();
superSensei.showStats();


