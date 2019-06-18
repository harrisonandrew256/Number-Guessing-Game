//Number Guessing Game
var i= Math.floor(Math.random() * 100)  + 1;// Generates MODULUS.

var j=i%2; //gets the modulus and stores the result in j
if (j==0) //checks to see if the result in module is zero  
       alert ("Number is even");
else
      alert ("Number is  odd");

  for(var count=1;count<=10;count++)
  {
       let num = prompt ("please enter a number:")//outputs
        if  (num==i){
             alert("You WIN");
        	 break;
        }
        if  (num<i){
       	    alert("Number is lower, make another guess");
        }
       if  (num>i){ 
       	             alert("Number is higher, make another guess");
       	         }

        if  (count==10){
        	      alert("You LOSE!");}
 }
  
