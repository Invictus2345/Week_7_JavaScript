function odds(){
    for(var i=0; i<=20; i++){
        if(i%2==1){
            console.log(i);
        }
    }
}
console.log(odds());

function countdown(){
    for (var i =100; i>=0; i-=3){
        console.log(i);
    }
}
console.log(countdown());

var arr = [4,2.5,1,-0.5,-2,-3.5];

function sequence(arr){
    for(var i =0; i < arr.length; i++){
        console.log(arr[i]);
    }
}
console.log(sequence(arr));

var sums = 0
function sum(){
    for(var i=0; i<=100; i++){
        sums = sums +i;
    }
    console.log(sums)
}
console.log(sum());

var product=1
function factorial(){
    for(var i=1; i<=12; i++){
        product= product * i;
    }
    console.log(product);
}
console.log(factorial());