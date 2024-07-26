function add(num1,num2){
    return num1+num2;
}

function subtract(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    if(num2 === 0 ){
        return "Can not divide by zero!";
    }
    return num1 / num2;
}


document.getElementById("add-btn").addEventListener("click",function(){
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = add(num1,num2);
    document.getElementById("sum-el").textContent= "Result = "+ result;
});

document.getElementById("subtract-btn").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = subtract(num1, num2);
    document.getElementById("sum-el").textContent = "Result = " + result;
});

document.getElementById("multiply-btn").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = multiply(num1, num2);
    document.getElementById("sum-el").textContent = "Result = " + result;
});

document.getElementById("divide-btn").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = divide(num1, num2);
    document.getElementById("sum-el").textContent = "Result = " + result;
});