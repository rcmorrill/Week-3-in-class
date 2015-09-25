var testString = "Hello world";
console.log(testString.length);
console.log(testString.charAt(2));

numCharInString(testString,'o');

function numCharInString(str,char){

	var counter =0;
	for(var i=0;i<str.length;i=i+1){
		if(str.charAt(i) == char){
			counter +=1;
		}
	}
	console.log ("The number of matches is " + counter);
}