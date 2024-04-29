let total = document.getElementById('display');
total.value='';
function appendToDisplay(value){
    // total.value='';
    total.value += value;
    total.innerHTML=total.value; //document.getElementById('display').innerHTML=total.value;
    console.log(total.value);
}
function clearDisplay(){
    total.value ='0';
    // document.getElementById('display').innerHTML=total.value;
    console.log(total.value);
    calculate();
    total.value ='';
}
function calculate(){
    total.innerHTML=eval(total.value); //document.getElementById('display').innerHTML=eval(total.value);
    let t=eval(total.value);
    console.log(eval(total.value));
    total.value=t;
}
