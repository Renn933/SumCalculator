function sumCalculator(){
     const n1 = document.getElementById('num1').value;
     const n2 = document.getElementById('num2').value;
<<<<<<< HEAD
      const n3 = document.getElementById('num3').value;

    const number1 =  parseFloat(n1)
    const number2 =  parseFloat(n2)
    const number3 =  parseFloat(n3)


    const sum = number1 + number2 + number3;
=======

    const number1 =  parseFloat(n1)
    const number2 =  parseFloat(n2)

    const sum = number1 + number2;
>>>>>>> 0979a7efb0f364b9e8b8785fca5affa3ef40bcc9

    document.getElementById('res').textContent=sum;
}

function eraser(){
    document.getElementById('num1').value="";
    document.getElementById('num2').value="";
<<<<<<< HEAD
    document.getElementById('num3').value="";
=======
>>>>>>> 0979a7efb0f364b9e8b8785fca5affa3ef40bcc9
    document.getElementById('res').textContent="";
}