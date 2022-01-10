console.log(hello);                                   
var hello = 'world';                                 

//guess: undifined

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

//guess: magnet

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//guess: super cool

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//guess: chicken, half-chicken


console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo.hiring = "closed for now";
    }
    return dojo;
}

//guess: {name: chicago, students: 65, hiring: true}, {name: berkely, students: 0, hiring: closed for now}

