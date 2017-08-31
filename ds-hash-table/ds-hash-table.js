var makeHashTable = function() {
  //Do not change the max!
  var max = 4;

    return {
      _storage: [],
      retrieve: function(key) {
        return this._storage[hashFn(key, max)];
      },

      insert: function(key, value) {
      	var index = hashFn(key, max);

        //first step : retrieve a bucket
        var bucket = this._storage.get(index);

        // if bucket not found, create it
        if( !bucket ){
        	bucket =[];
        	this. _storage.set(index , bucket);
        }
        var found =false;
        for (var i = 0; i < bucket.length; i++) {
        	var tuple = bucket[i];
        	//now we check key is exists then update it  
        	if( tuple[0] === k){
        		tuple[1] = v ;
        		found = true;
        		break;
        	}
        }
        // now if the key is not exists
        if ( !found ){
        	// insert a new tuple to the bucket
        	bucket.push([k,v]);
        }
        
    },
      retrieve: function(key) {
        return this._storage[hashFn(key, max)];
      },
    }
};


// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};