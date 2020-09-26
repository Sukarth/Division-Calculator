var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField')
var form = document.getElementById('XDividedByY');



form.addEventListener('submit', function(event) {

    if (!numField1.value || !numField2.value ) {
        console.error("Please enter values in the field")
        alert("Please enter values in the field")        
    } else {
    var x = parseFloat(numField1.value);
    var y = parseFloat(numField2.value);

    
    var quotient =  x / y;

    resultField.innerText = "Answer: " + quotient;
    event.preventDefault();

    }
});