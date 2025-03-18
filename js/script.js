//definizione delle variabili
let num = 0;
let numFizz = "Fizz";
let numBuzz = "Buzz";

//ciclo FOR per numeri da 1 a 100
for(let i=1; i<=100; i++){
  num = num + 1;
  
  if(num % 3 === 0 && num % 5 !== 0){         //se divisibile SOLO per 3
    console.log(numFizz);
  }
  else if(num % 5 === 0 && num % 3 !== 0){    //se divisibile SOLO per 5
    console.log(numBuzz);
  }
  else if(num % 3 === 0 && num % 5 ===0){     //se divisibile SIA per 3 SIA per 5   
    console.log(numFizz+numBuzz);
  }
  else{
    console.log(num);
  }

}