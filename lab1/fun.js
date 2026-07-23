//waf to take any digit (0-9) and return its in word form 
//0-one ,5-five, 9-nine
const toWords=(digit)=>{
    const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    return words[digit];
};
console.log(toWords(0));    
console.log(toWords(5));    
console.log(toWords(9));