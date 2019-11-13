module.exports = {
	isPrime: function(n) {
		if(n <=1) {
			return false;
		}

		let div = 2;

		while(div <= Math.sqrt(n)) {
			if(n % div === 0) {
				return false;
			}

			div++;
		}

		return true;
	},

	PrimesFrom: function(a,b) {
		primes_array = [];

		if(a<b){
			for(i = a; i <= b; i++){
				if(this.isPrime(i)){
					primes_array[primes_array.length] = i;
				}
			}
		}
		else{
			for(i = b; i <= a; i++){
				if(this.isPrime(i)){
					primes_array[primes_array.length] = i;
				}
			}
		}

		return primes_array;
	},

	arrayPrintFor: function(a) {
		let result = "";
		for(i = 0; i < a.length; i++){
			result += a[i] + " ";
		}
		console.log(result);
	} 

}
