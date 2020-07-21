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
    
}