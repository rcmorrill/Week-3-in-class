/* Construct a simulation of Math.random()
 * to verify how truly random it is
 */


//First, construct a for loop so we can run Math.random() x number of times

var case1=0;
var case2=0;
var case3=0;
var case4=0;

var numOfExperiments = 1000;


for(var i=0;i<numOfExperiments;i=i+1){var newNumber=Math.random();
	if(newNumber<.25){
	case1 += 1;
	}else if (newNumber<.5){
	case2 += 1;
	}else if(newNumber<.75){
	case3 += 1;
	}else{
	case4 += 1;
	}
}

console.log(case1);
console.log(case2);
console.log(case3);
console.log(case4);


//statements here will run 1000 times

var total=(case1+case2+case3+case4)

console.log(total + " sumulations were run")
var case1Perc =((case1/total)*100)
console.log(case1Perc + "% of results occurred between 0 and .25")



//within the for loop, run Math.random()


//If Math.random() is truly random, then its return value should be equally distributed between 0 and 1
//therefore, a value between 0 and 0.25 should occur 25% of the time, between 0.25 and 0.5, another 25%, and so on and so forth
//use if...else if...else to test that out


	


//Finally, print out the results in the following format
//"x number of simulations were run"
//"x% of results occurred between 0 and 0.25"
//"x% of results occurred between 0.25 and 0.5"
//...