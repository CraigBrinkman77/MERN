class Card{
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name,cost,power,res){
        super(name, cost);
        this.power=power;
        this.res=res;
    }
    attack(target){
        target instanceof Unit ?
            target.res -= this.power : 
            new Error("Must target a unit!")
            console.log(target.res);
    }
}


class Effect extends Card{
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    
    play( target ) {
    if( target instanceof Unit ) {
        if (this.stat == "magnitude"){
            target.res += this.magnitude;
            console.log(this.text)
        }
        else if(this.stat == "power"){
            target.power += this.magnitude;
            console.log(this.text)
        }
    } else {
        throw new Error( "Target must be a unit!" );
    }
}
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
console.log(redBeltNinja);

const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
console.log(blackBeltNinja);

const hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's res by 3", "magnitude", 3);
hardAlgorithm.play(redBeltNinja);
const unhandedPromiseRejection= new Effect("Unhanded Promise Rejection", 1, "reduce target's res by 2", "magnitude", -2);
unhandedPromiseRejection.play(redBeltNinja);
const pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);
console.log(hardAlgorithm);
console.log(unhandedPromiseRejection);
console.log(pairProgramming);
console.log(redBeltNinja);





