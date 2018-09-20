console.log([] + []); // empty string

function a(){
	return 'hello';
}

const sentence = a('hi');
console.log(sentence); // hello

function y(){
	console.log(this.length); // 2 -> 2 arguments y & 1
}

var x = {
	length : 5,
  method: function(y){
  	arguments[0]();
  }
};

x.method(y,1);

const s = 'constructor';
console.log(s[s](01)); // new String(01) = 1

let array = [1,2,3];
array[-1] = -1;
console.log(array[-1] === array.indexOf(4));  // true
