var container= [];
var removeNegativeValue = function(container) {
  if (!container){
    return [];
  }
  if (container.length ===0) {
    return [];
  }
  else {
   var output = container.filter(function(container)
  {
       return container >= 0;
     })
   return output;
 }

}

module.exports = {
  title: 'Exercise 1',
  run: removeNegativeValue
}
