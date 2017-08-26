var extendArray function(arr){
    
    this.first = function(value){
    	var shifted = arr.shift();
    	return shifted;
      
    };
    this.last = function() {
      var unshifted = arr.unshift([arr.length-1]);
      return unshifted;
    };

}
