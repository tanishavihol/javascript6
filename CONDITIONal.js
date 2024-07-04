let a=prompt("hey what yours age?");//PROMPT WILL ALWAYS BE A STRING ONLY
a=Number.parseInt(a)// converting the string to a number
console.log(typeof a)
if(a<0){
    alert("this an invalid age");
}
else if(a<9){
alert("you are a kid you cannot even think of driving");
}
else if(a<18 && a>=9){
    alert("you are a kid and you cannot even think of driving after 18");
}
else{
    alert("you can drive as you are above 18");
}
console.log("you can",(a<18?"not drive":"drive"))// ternary operator