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
console.log(count);
console.log(counter.count);