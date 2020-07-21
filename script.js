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
}