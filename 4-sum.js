/*
Sum
If we sum all even numbers between 50 and 100 what is the result?
Build a function, that calculates the sum of all even numbers between a start number and end number
*/
function sumBetweenTwoValues(minValue,maxValue) {
    
    var arrayOfNumbers =[];
    var totalValue = 0;

    for (var i = minValue; i <= maxValue; i++) {
        
        arrayOfNumbers.push(i);
        
    }

    for (var i = 0; i < arrayOfNumbers.length; i++) {
     totalValue+=arrayOfNumbers[i]   
    
    
    }
    console.log(totalValue);
    
}

sumBetweenTwoValues(50,100);