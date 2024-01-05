function marsExploration(s){
  
  var wrongCharacters = 0;

  var msgPatton = "SOS";

  for(var i=0;i<s.length;i++){

    if(s[i] !== msgPatton[i%3]){
      wrongCharacters++;
    }
    
  }
 
    return wrongCharacters;
}
  
var msg1 = marsExploration("SOSSOT");
console.log("Wrong Characters: "+msg1);

var msg2 = marsExploration("SSOSSPSSQSSOR");
console.log("Wrong Characters: "+msg2);