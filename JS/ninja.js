class Ninja{
    constructor(name, health){
        this.name = name
        this.health = health
        this.speed = 3
        this.strength = 3
    }

    sayName(){
        console.log('My name is ${this.name}');
    }
    showStats(){
        console.log('Ninja Stats. Health : ${this.health} Speed : ${this.speed} Strength : ${this.strength}')
    }
    drinkSake(){
        this.health += 10;
    }
}