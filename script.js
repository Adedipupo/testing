const createCounter = function(){
    let count = 0;

    return {
        click : function(){
            return count += 1;
        },
        getClick: function () {
            return count;
        }
  }
};

const counter = createCounter();

counter.click();
counter.click();
counter.click();

console.log(counter.getClick());

function Animal(name, limbs) {
    this.name = name;
    this.limbs = limbs;
}

Animal.prototype.move = function() {
    console.log("Currently moving");
}

function Dog(name){
    Animal.call(this,name,4);
}
Dog.prototype = Object.create(Animal.prototype);

function Bird(name){
    Animal.call(this,name,2);
}
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.move = function(){
    console.log("Currently flying");
}

const puppy = new Dog("Bingo");
console.log(puppy);
puppy.move();

const chick = new Bird("Falcon");
console.log(chick);
chick.move();

function Person(first, last, age, gender, interests){
    this.name = {
        first : first,
        last : last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function(){
        alert('Hi I\'m ' + this.name.first + ' ' + this.name.last + ' is ' + this.age + 'years old. He likes ' + this.interests[0] + this.interests[1]);
    }
    this.greeting = function(){
        alert('Hi I\'m ' + this.name.first + '.');
    }
}

let person1 = new Person('Dipo', 'Otunba', 41, 'male', ['game','movie']);