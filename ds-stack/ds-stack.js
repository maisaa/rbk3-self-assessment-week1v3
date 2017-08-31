var Stack = function() {
    this._storage = [];
    
    Array.prototyp.add = function(value){
    	this._storage.push(value);
      
    };
    Array.prototyp.remove = function() {
      var top = this._storage[this._storage.length-1]
      this._storage.pop();
      return top;
    };
  };