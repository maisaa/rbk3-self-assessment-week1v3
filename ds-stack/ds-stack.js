var Stack = function() {
    this._storage = []
    this.add = function(value){
    	this._storage.push(value);
      
    };
    this.remove = function() {
      var top = this._storage[this._storage.length-1]
      this._storage.pop();
      return top;
    };
  };