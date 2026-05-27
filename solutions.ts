function filterEvenNumbers(numbers:number[]): number[] {
    let myEven_number= numbers.filter(num => num % 2 === 0);
    console.log(myEven_number)
    return myEven_number
    
   
}
filterEvenNumbers([1, 2, 3, 4, 5, 6,66,87])